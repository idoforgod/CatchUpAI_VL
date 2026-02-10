import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

/**
 * SpringBounce - spring() 학습용 컴포넌트
 *
 * 학습 포인트:
 * 1. spring()은 0→1로 자연스럽게 변화하는 값을 생성
 * 2. 파라미터(mass, damping, stiffness)로 물리 특성 조절
 * 3. spring의 결과를 interpolate에 넣어 다양한 범위로 변환
 */
export const SpringBounce: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // === 박스 1: 기본 spring (부드러운 등장) ===
  const spring1 = spring({
    frame,
    fps,
    config: {
      damping: 10,     // 적당한 감쇠 → 약간 바운스
      stiffness: 100,  // 기본 강성
      mass: 1,         // 기본 질량
    },
  });
  // spring 0→1을 스케일 0→1로 매핑
  const scale1 = interpolate(spring1, [0, 1], [0, 1]);

  // === 박스 2: 낮은 damping (많이 바운스) ===
  const spring2 = spring({
    frame: frame - 15, // 15프레임 딜레이
    fps,
    config: {
      damping: 4,      // 낮은 감쇠 → 많이 튕김!
      stiffness: 100,
      mass: 0.8,
    },
  });
  const scale2 = interpolate(spring2, [0, 1], [0, 1]);

  // === 박스 3: 높은 damping (빠르게 안정) ===
  const spring3 = spring({
    frame: frame - 30, // 30프레임 딜레이
    fps,
    config: {
      damping: 200,    // 높은 감쇠 → 바운스 없이 부드럽게
      stiffness: 100,
      mass: 1,
    },
  });
  const scale3 = interpolate(spring3, [0, 1], [0, 1]);

  // === 타이틀: spring으로 위에서 떨어지기 ===
  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 8, stiffness: 80, mass: 0.6 },
  });
  const titleY = interpolate(titleSpring, [0, 1], [-100, 0]);
  const titleOpacity = interpolate(titleSpring, [0, 0.3], [0, 1], {
    extrapolateRight: "clamp",
  });

  const boxStyle = (color: string, springVal: number): React.CSSProperties => ({
    width: 200,
    height: 200,
    backgroundColor: color,
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transform: `scale(${springVal})`,
    color: "white",
    fontFamily: "Arial, sans-serif",
    fontWeight: "bold",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#1a1a2e",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 타이틀 */}
      <div
        style={{
          position: "absolute",
          top: 100,
          fontSize: 60,
          fontWeight: "bold",
          color: "#e2e8f0",
          fontFamily: "Arial, sans-serif",
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
        }}
      >
        spring() 파라미터 비교
      </div>

      {/* 3개 박스 비교 */}
      <div
        style={{
          display: "flex",
          gap: 60,
          marginTop: 40,
        }}
      >
        {/* 박스 1: 기본 */}
        <div style={boxStyle("#FF6B6B", scale1)}>
          <div style={{ fontSize: 20 }}>damping: 10</div>
          <div style={{ fontSize: 14, marginTop: 8, opacity: 0.7 }}>
            적당한 바운스
          </div>
        </div>

        {/* 박스 2: 많이 바운스 */}
        <div style={boxStyle("#4ECDC4", scale2)}>
          <div style={{ fontSize: 20 }}>damping: 4</div>
          <div style={{ fontSize: 14, marginTop: 8, opacity: 0.7 }}>
            많이 튕김
          </div>
        </div>

        {/* 박스 3: 안정적 */}
        <div style={boxStyle("#A78BFA", scale3)}>
          <div style={{ fontSize: 20 }}>damping: 200</div>
          <div style={{ fontSize: 14, marginTop: 8, opacity: 0.7 }}>
            바운스 없음
          </div>
        </div>
      </div>

      {/* 설명 텍스트 */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          fontSize: 28,
          color: "rgba(255,255,255,0.6)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        damping이 낮을수록 더 많이 바운스합니다
      </div>
    </AbsoluteFill>
  );
};
