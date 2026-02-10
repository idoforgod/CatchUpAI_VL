import {
  AbsoluteFill,
  interpolate,
  spring,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { z } from "zod";

/**
 * SequentialList - 순차 등장 리스트 컴포넌트
 *
 * M3 학습 포인트:
 * 1. Sequence로 각 항목의 등장 시점을 정밀 제어
 * 2. 아이콘 + 텍스트 조합 레이아웃
 * 3. 왼쪽에서 슬라이드인 + 페이드 등장 패턴
 * 4. 리스트 완료 후 요약 장면 전환
 * 5. Props로 항목 데이터를 외부에서 주입
 */

const listItemSchema = z.object({
  icon: z.string(),
  text: z.string(),
});

export const sequentialListSchema = z.object({
  heading: z.string(),
  items: z.array(listItemSchema),
  accentColor: z.string(),
  summary: z.string(),
});

type SequentialListProps = z.infer<typeof sequentialListSchema>;

// 개별 리스트 항목 컴포넌트
// Sequence 대신 delay prop으로 등장 시점을 제어 (flex 레이아웃과 호환)
const ListItem: React.FC<{
  icon: string;
  text: string;
  accentColor: string;
  index: number;
  delay: number;
}> = ({ icon, text, accentColor, index, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // delay 이후부터 애니메이션 시작
  const itemSpring = spring({
    frame: frame - delay,
    fps,
    config: { damping: 14, stiffness: 100 },
  });
  const translateX = interpolate(itemSpring, [0, 1], [-300, 0]);
  const opacity = interpolate(itemSpring, [0, 0.4], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 아이콘: 약간 딜레이 후 스케일업
  const iconSpring = spring({
    frame: frame - delay - 5,
    fps,
    config: { damping: 8, stiffness: 120 },
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 28,
        opacity,
        transform: `translateX(${translateX}px)`,
      }}
    >
      {/* 아이콘 원 */}
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: 32,
          backgroundColor: accentColor,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 28,
          transform: `scale(${iconSpring})`,
          flexShrink: 0,
        }}
      >
        {icon}
      </div>

      {/* 번호 + 텍스트 */}
      <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
        <span
          style={{
            fontSize: 22,
            color: accentColor,
            fontWeight: "bold",
            fontFamily: "Arial, sans-serif",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          style={{
            fontSize: 34,
            color: "white",
            fontFamily: "Arial, sans-serif",
            fontWeight: 500,
          }}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

// 요약 장면 컴포넌트
const SummaryScene: React.FC<{
  summary: string;
  accentColor: string;
  itemCount: number;
}> = ({ summary, accentColor, itemCount }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: { damping: 10, stiffness: 80 },
  });
  const opacity = interpolate(scale, [0, 0.3], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0f172a",
        justifyContent: "center",
        alignItems: "center",
        opacity,
      }}
    >
      {/* 큰 숫자 */}
      <div
        style={{
          fontSize: 120,
          fontWeight: "bold",
          color: accentColor,
          fontFamily: "Arial, sans-serif",
          transform: `scale(${scale})`,
        }}
      >
        {itemCount}
      </div>
      {/* 요약 텍스트 */}
      <div
        style={{
          fontSize: 40,
          color: "white",
          fontFamily: "Arial, sans-serif",
          marginTop: 16,
          transform: `scale(${scale})`,
        }}
      >
        {summary}
      </div>
    </AbsoluteFill>
  );
};

export const SequentialList: React.FC<SequentialListProps> = ({
  heading,
  items,
  accentColor,
  summary,
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

  // 각 항목 등장 간격 (30프레임 = 1초)
  const itemInterval = 30;
  // 리스트 전체 시간: 헤딩(30) + 항목들 + 여유(30)
  const listEndFrame = 30 + items.length * itemInterval + 30;
  // 요약 장면 시작
  const summaryStart = listEndFrame;

  // 전체 페이드아웃
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 20, durationInFrames - 5],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill style={{ opacity: fadeOut }}>
      {/* 리스트 장면 */}
      <Sequence from={0} durationInFrames={summaryStart}>
        <AbsoluteFill
          style={{
            backgroundColor: "#0f172a",
            paddingLeft: 200,
            justifyContent: "center",
          }}
        >
          {/* 헤딩 */}
          <div
            style={{
              fontSize: 48,
              fontWeight: "bold",
              color: accentColor,
              fontFamily: "Arial, sans-serif",
              marginBottom: 48,
              opacity: headingOpacity,
            }}
          >
            {heading}
          </div>

          {/* 리스트 항목들: Sequence 대신 delay prop으로 순차 등장 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {items.map((item, index) => (
              <ListItem
                key={index}
                icon={item.icon}
                text={item.text}
                accentColor={accentColor}
                index={index}
                delay={30 + index * itemInterval}
              />
            ))}
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 요약 장면 */}
      <Sequence from={summaryStart}>
        <SummaryScene
          summary={summary}
          accentColor={accentColor}
          itemCount={items.length}
        />
      </Sequence>
    </AbsoluteFill>
  );
};
