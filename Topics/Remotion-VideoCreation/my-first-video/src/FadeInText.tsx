import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

/**
 * FadeInText - interpolate() 학습용 컴포넌트
 *
 * 학습 포인트:
 * 1. useCurrentFrame()으로 현재 프레임 가져오기
 * 2. interpolate()로 프레임 → opacity, translateY 변환
 * 3. extrapolateLeft/Right: "clamp"로 값 범위 고정
 */
export const FadeInText: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // === 실습 1: 기본 페이드인 ===
  // 프레임 0~30 동안 opacity가 0에서 1로 변화
  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp", // 30프레임 이후에도 1로 유지
  });

  // === 실습 2: 슬라이드 업 ===
  // 프레임 0~30 동안 Y위치가 50px에서 0px으로 이동 (아래→위)
  const titleTranslateY = interpolate(frame, [0, 30], [50, 0], {
    extrapolateRight: "clamp",
  });

  // === 실습 3: 부제목 딜레이 등장 ===
  // 프레임 20~50 동안 페이드인 (제목보다 20프레임 늦게 시작)
  const subtitleOpacity = interpolate(frame, [20, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const subtitleTranslateY = interpolate(frame, [20, 50], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // === 실습 4: 페이드아웃 ===
  // 영상 끝나기 30프레임 전부터 전체가 사라짐
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 30, durationInFrames - 10],
    [1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0f0f23",
        justifyContent: "center",
        alignItems: "center",
        opacity: fadeOut,
      }}
    >
      {/* 제목: 페이드인 + 슬라이드 업 */}
      <div
        style={{
          opacity: titleOpacity,
          transform: `translateY(${titleTranslateY}px)`,
          fontSize: 80,
          fontWeight: "bold",
          color: "#00d2ff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        interpolate() 학습
      </div>

      {/* 부제목: 딜레이 등장 */}
      <div
        style={{
          opacity: subtitleOpacity,
          transform: `translateY(${subtitleTranslateY}px)`,
          fontSize: 36,
          color: "#7fdbca",
          fontFamily: "Arial, sans-serif",
          marginTop: 20,
        }}
      >
        프레임 기반 애니메이션의 기초
      </div>

      {/* 프레임 카운터: 현재 프레임을 화면에 표시 (디버깅용) */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: 40,
          fontSize: 24,
          color: "rgba(255, 255, 255, 0.5)",
          fontFamily: "monospace",
        }}
      >
        Frame: {frame}
      </div>
    </AbsoluteFill>
  );
};
