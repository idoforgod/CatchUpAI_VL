import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { z } from "zod";

/**
 * CounterInfoGraphic - 숫자 카운트업 인포그래픽 컴포넌트
 *
 * M3 학습 포인트:
 * 1. interpolate로 프레임을 숫자 범위에 매핑 (0 → targetValue)
 * 2. SVG 원형 프로그래스바 애니메이션 (stroke-dashoffset)
 * 3. 여러 데이터 항목을 배열로 관리 + 순차 등장
 * 4. Props로 데이터를 외부에서 주입하여 재사용
 */

// 개별 stat 항목 스키마
const statItemSchema = z.object({
  label: z.string(),
  value: z.number(),
  suffix: z.string(),
  color: z.string(),
});

// Props 스키마
export const counterSchema = z.object({
  heading: z.string(),
  stats: z.array(statItemSchema),
});

type CounterProps = z.infer<typeof counterSchema>;

// 원형 프로그래스바 컴포넌트
const CircleProgress: React.FC<{
  progress: number; // 0~1
  color: string;
  size: number;
}> = ({ progress, color, size }) => {
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress);

  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      {/* 배경 원 */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth={strokeWidth}
      />
      {/* 프로그래스 원 */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
    </svg>
  );
};

export const CounterInfoGraphic: React.FC<CounterProps> = ({
  heading,
  stats,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // 헤딩 등장
  const headingSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
  });
  const headingOpacity = interpolate(headingSpring, [0, 0.5], [0, 1], {
    extrapolateRight: "clamp",
  });
  const headingY = interpolate(headingSpring, [0, 1], [-40, 0]);

  // 전체 페이드아웃
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 20, durationInFrames - 5],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0f172a",
        justifyContent: "center",
        alignItems: "center",
        opacity: fadeOut,
      }}
    >
      {/* 헤딩 */}
      <div
        style={{
          position: "absolute",
          top: 120,
          fontSize: 56,
          fontWeight: "bold",
          color: "white",
          fontFamily: "Arial, sans-serif",
          opacity: headingOpacity,
          transform: `translateY(${headingY}px)`,
        }}
      >
        {heading}
      </div>

      {/* Stats 카드들 */}
      <div style={{ display: "flex", gap: 80, marginTop: 40 }}>
        {stats.map((stat, index) => {
          // 각 카드 순차 등장 (20프레임 간격)
          const delay = 20 + index * 25;
          const cardSpring = spring({
            frame: frame - delay,
            fps,
            config: { damping: 12, stiffness: 100 },
          });
          const cardScale = interpolate(cardSpring, [0, 1], [0.5, 1]);
          const cardOpacity = interpolate(cardSpring, [0, 0.3], [0, 1], {
            extrapolateRight: "clamp",
          });

          // 숫자 카운트업: 딜레이 후 60프레임에 걸쳐 0→목표값
          const countStart = delay + 10;
          const countEnd = countStart + 60;
          const currentValue = interpolate(
            frame,
            [countStart, countEnd],
            [0, stat.value],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            },
          );

          // 프로그래스: 0→1 (100% 기준으로 표시)
          const progress = interpolate(
            frame,
            [countStart, countEnd],
            [0, stat.value / 100],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            },
          );

          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
                opacity: cardOpacity,
                transform: `scale(${cardScale})`,
              }}
            >
              {/* 원형 프로그래스바 + 숫자 */}
              <div style={{ position: "relative" }}>
                <CircleProgress
                  progress={Math.min(progress, 1)}
                  color={stat.color}
                  size={180}
                />
                {/* 숫자를 원 중앙에 표시 */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 180,
                    height: 180,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 42,
                    fontWeight: "bold",
                    color: stat.color,
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  {Math.round(currentValue)}
                  {stat.suffix}
                </div>
              </div>

              {/* 라벨 */}
              <div
                style={{
                  fontSize: 24,
                  color: "rgba(255,255,255,0.8)",
                  fontFamily: "Arial, sans-serif",
                  textAlign: "center",
                }}
              >
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
