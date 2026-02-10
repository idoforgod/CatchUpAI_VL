import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Series,
  Sequence,
} from "remotion";
import { z } from "zod";
import { zColor } from "@remotion/zod-types";

// --- Zod 스키마 ---
export const explanationSchema = z.object({
  heading: z.string(),
  points: z.array(
    z.object({
      icon: z.string(),
      title: z.string(),
      description: z.string(),
    })
  ),
  accentColor: zColor(),
  bgColor: zColor(),
});

type Props = z.infer<typeof explanationSchema>;

// --- 개별 포인트 장면 ---
const PointScene: React.FC<{
  icon: string;
  title: string;
  description: string;
  accentColor: string;
  index: number;
  total: number;
}> = ({ icon, title, description, accentColor, index, total }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // 아이콘: 바운스 등장
  const iconSpring = spring({
    frame,
    fps,
    config: { damping: 8, stiffness: 100 },
  });

  // 번호 배지: 살짝 뒤에 등장
  const badgeSpring = spring({
    frame: frame - 0.2 * fps,
    fps,
    config: { damping: 12, stiffness: 120 },
  });

  // 제목: 오른쪽에서 슬라이드인
  const titleSpring = spring({
    frame: frame - 0.3 * fps,
    fps,
    config: { damping: 20, stiffness: 100 },
  });
  const titleX = interpolate(titleSpring, [0, 1], [100, 0]);

  // 설명: 제목 뒤에 페이드인
  const descSpring = spring({
    frame: frame - 0.6 * fps,
    fps,
    config: { damping: 200 },
  });

  // 밑줄 장식
  const lineSpring = spring({
    frame: frame - 0.5 * fps,
    fps,
    config: { damping: 200 },
  });

  // 프로그래스 바
  const progress = (index + 1) / total;

  // 페이드아웃: 마지막 0.5초
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 0.5 * fps, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        opacity: fadeOut,
      }}
    >
      {/* 카드 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 60,
          maxWidth: 1400,
          padding: "60px 80px",
          backgroundColor: "rgba(255,255,255,0.05)",
          borderRadius: 24,
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        {/* 왼쪽: 아이콘 + 번호 */}
        <div
          style={{
            position: "relative",
            transform: `scale(${iconSpring})`,
          }}
        >
          <div
            style={{
              width: 160,
              height: 160,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${accentColor}, ${accentColor}88)`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 80,
              boxShadow: `0 8px 40px ${accentColor}44`,
            }}
          >
            {icon}
          </div>
          {/* 번호 배지 */}
          <div
            style={{
              position: "absolute",
              top: -10,
              right: -10,
              width: 50,
              height: 50,
              borderRadius: "50%",
              backgroundColor: "white",
              color: "#1a1a2e",
              fontSize: 24,
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transform: `scale(${badgeSpring})`,
              fontFamily: "Arial, sans-serif",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            }}
          >
            {index + 1}
          </div>
        </div>

        {/* 오른쪽: 텍스트 */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: 52,
              fontWeight: "bold",
              color: "white",
              fontFamily: "Arial, sans-serif",
              opacity: titleSpring,
              transform: `translateX(${titleX}px)`,
              marginBottom: 16,
            }}
          >
            {title}
          </div>
          {/* 밑줄 장식 */}
          <div
            style={{
              width: interpolate(lineSpring, [0, 1], [0, 200]),
              height: 3,
              backgroundColor: accentColor,
              borderRadius: 2,
              marginBottom: 20,
            }}
          />
          <div
            style={{
              fontSize: 32,
              color: "rgba(255,255,255,0.75)",
              fontFamily: "Arial, sans-serif",
              opacity: descSpring,
              lineHeight: 1.5,
            }}
          >
            {description}
          </div>
        </div>
      </div>

      {/* 하단 프로그래스 */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          display: "flex",
          gap: 12,
          alignItems: "center",
        }}
      >
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            style={{
              width: i <= index ? 40 : 12,
              height: 12,
              borderRadius: 6,
              backgroundColor:
                i <= index ? accentColor : "rgba(255,255,255,0.2)",
              opacity: badgeSpring,
            }}
          />
        ))}
        <span
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: 20,
            fontFamily: "Arial, sans-serif",
            marginLeft: 12,
            opacity: badgeSpring,
          }}
        >
          {index + 1} / {total}
        </span>
      </div>
    </AbsoluteFill>
  );
};

// --- 헤딩 장면 ---
const HeadingScene: React.FC<{
  heading: string;
  accentColor: string;
  total: number;
}> = ({ heading, accentColor, total }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 10, stiffness: 80 },
  });
  const lineSpring = spring({
    frame: frame - 0.3 * fps,
    fps,
    config: { damping: 200 },
  });
  const subtitleSpring = spring({
    frame: frame - 0.5 * fps,
    fps,
    config: { damping: 200 },
  });

  const fadeOut = interpolate(
    frame,
    [durationInFrames - 0.3 * fps, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        opacity: fadeOut,
      }}
    >
      <div
        style={{
          fontSize: 72,
          fontWeight: "bold",
          color: "white",
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          transform: `scale(${titleSpring})`,
          opacity: titleSpring,
          textShadow: `0 0 40px ${accentColor}66`,
        }}
      >
        {heading}
      </div>
      <div
        style={{
          width: interpolate(lineSpring, [0, 1], [0, 100]),
          height: 4,
          backgroundColor: accentColor,
          borderRadius: 2,
          marginTop: 24,
          marginBottom: 24,
        }}
      />
      <div
        style={{
          fontSize: 28,
          color: "rgba(255,255,255,0.6)",
          fontFamily: "Arial, sans-serif",
          opacity: subtitleSpring,
        }}
      >
        {total}가지 포인트
      </div>
    </AbsoluteFill>
  );
};

// --- 메인 컴포넌트 ---
export const ExplanationScene: React.FC<Props> = ({
  heading,
  points,
  accentColor,
  bgColor,
}) => {
  const { fps } = useVideoConfig();
  const headingDuration = Math.round(3 * fps);
  const pointDuration = Math.round(4 * fps);

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${bgColor}, #0d1b3e)`,
      }}
    >
      <Series>
        {/* 헤딩 장면 */}
        <Series.Sequence durationInFrames={headingDuration}>
          <HeadingScene
            heading={heading}
            accentColor={accentColor}
            total={points.length}
          />
        </Series.Sequence>

        {/* 각 포인트 장면 */}
        {points.map((point, i) => (
          <Series.Sequence key={i} durationInFrames={pointDuration}>
            <PointScene
              icon={point.icon}
              title={point.title}
              description={point.description}
              accentColor={accentColor}
              index={i}
              total={points.length}
            />
          </Series.Sequence>
        ))}
      </Series>
    </AbsoluteFill>
  );
};
