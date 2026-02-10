import {
  AbsoluteFill,
  interpolate,
  spring,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

/**
 * MultiScene - Sequence 학습용 컴포넌트
 *
 * 학습 포인트:
 * 1. Sequence의 from prop으로 장면 시작 시점 지정
 * 2. Sequence의 durationInFrames로 장면 길이 제한
 * 3. 자식 컴포넌트 안에서 useCurrentFrame()은 로컬 시간 (0부터 시작)
 * 4. 여러 장면을 조합하여 하나의 영상 만들기
 */

// === Scene 1: 인트로 타이틀 ===
const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleScale = spring({
    frame,
    fps,
    config: { damping: 8, stiffness: 80 },
  });

  const subtitleOpacity = interpolate(frame, [20, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#667eea",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: 72,
          fontWeight: "bold",
          color: "white",
          fontFamily: "Arial, sans-serif",
          transform: `scale(${titleScale})`,
        }}
      >
        Remotion 핵심 3가지
      </div>
      <div
        style={{
          fontSize: 32,
          color: "rgba(255,255,255,0.8)",
          fontFamily: "Arial, sans-serif",
          marginTop: 20,
          opacity: subtitleOpacity,
        }}
      >
        코드로 만드는 영상의 세계
      </div>
    </AbsoluteFill>
  );
};

// === Scene 2: 포인트 설명 ===
const PointsScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const points = [
    { icon: "1", text: "React 컴포넌트 = 영상 프레임", color: "#FF6B6B" },
    { icon: "2", text: "interpolate로 애니메이션 제어", color: "#4ECDC4" },
    { icon: "3", text: "spring으로 자연스러운 모션", color: "#A78BFA" },
  ];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#1a1a2e",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        {points.map((point, index) => {
          // 각 포인트가 20프레임 간격으로 순차 등장
          const delay = index * 20;
          const pointSpring = spring({
            frame: frame - delay,
            fps,
            config: { damping: 12, stiffness: 100 },
          });
          const translateX = interpolate(pointSpring, [0, 1], [-200, 0]);
          const opacity = interpolate(pointSpring, [0, 0.5], [0, 1], {
            extrapolateRight: "clamp",
          });

          return (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 24,
                opacity,
                transform: `translateX(${translateX}px)`,
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  backgroundColor: point.color,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: 28,
                  fontWeight: "bold",
                  color: "white",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                {point.icon}
              </div>
              <div
                style={{
                  fontSize: 36,
                  color: "white",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                {point.text}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// === Scene 3: 아웃트로 ===
const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: { damping: 6, stiffness: 60 },
  });

  const subtitleOpacity = interpolate(frame, [30, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0f0f23",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: 64,
          fontWeight: "bold",
          color: "#00d2ff",
          fontFamily: "Arial, sans-serif",
          transform: `scale(${scale})`,
        }}
      >
        CatchUp AI
      </div>
      <div
        style={{
          fontSize: 28,
          color: "rgba(255,255,255,0.6)",
          fontFamily: "Arial, sans-serif",
          marginTop: 20,
          opacity: subtitleOpacity,
        }}
      >
        구독과 좋아요 부탁드려요!
      </div>
    </AbsoluteFill>
  );
};

// === 메인 컴포넌트: 3개 장면을 Sequence로 배치 ===
export const MultiScene: React.FC = () => {
  return (
    <AbsoluteFill>
      {/* Scene 1: 인트로 (0~89프레임, 약 3초) */}
      <Sequence from={0} durationInFrames={90}>
        <IntroScene />
      </Sequence>

      {/* Scene 2: 포인트 설명 (90~209프레임, 약 4초) */}
      <Sequence from={90} durationInFrames={120}>
        <PointsScene />
      </Sequence>

      {/* Scene 3: 아웃트로 (210~299프레임, 약 3초) */}
      <Sequence from={210} durationInFrames={90}>
        <OutroScene />
      </Sequence>
    </AbsoluteFill>
  );
};
