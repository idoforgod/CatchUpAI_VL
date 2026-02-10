import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { z } from "zod";
import { zColor } from "@remotion/zod-types";

/**
 * TitleCard - 재사용 가능한 유튜브 인트로 타이틀 카드
 *
 * M3 학습 포인트:
 * 1. Props(Zod 스키마)로 외부에서 데이터 주입 → 재사용성
 * 2. CSS-in-JS 그라데이션 배경
 * 3. AbsoluteFill 레이어링 (배경 → 장식 → 텍스트)
 * 4. 하단 라인 장식 요소 애니메이션
 */

// Props 스키마 정의: 다른 영상에서도 데이터만 바꾸면 재사용 가능
export const titleCardSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  gradientFrom: zColor(),
  gradientTo: zColor(),
  accentColor: zColor(),
});

type TitleCardProps = z.infer<typeof titleCardSchema>;

export const TitleCard: React.FC<TitleCardProps> = ({
  title,
  subtitle,
  gradientFrom,
  gradientTo,
  accentColor,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // === 제목: spring으로 확대 등장 ===
  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
  });
  const titleScale = interpolate(titleSpring, [0, 1], [0.3, 1]);
  const titleOpacity = interpolate(titleSpring, [0, 0.5], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 작은 바운스 효과: 파라미터화된 후속 spring
  // Variant A (original)
  const BOUNCE_OFFSET = 40; // 프레임 지연
  const BOUNCE_DAMPING = 8;
  const BOUNCE_STIFFNESS = 110;
  const BOUNCE_MULT = 0.06; // 바운스 강도(비율)

  const titleBounce = spring({
    frame: frame - BOUNCE_OFFSET,
    fps,
    config: { damping: BOUNCE_DAMPING, stiffness: BOUNCE_STIFFNESS },
  });

  const titleScaleFinal = titleScale * (1 + BOUNCE_MULT * titleBounce);

  // === 부제목: 딜레이 후 페이드인 + 슬라이드업 ===
  const subtitleOpacity = interpolate(frame, [25, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const subtitleY = interpolate(frame, [25, 50], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // === 하단 장식 라인: 중앙에서 양쪽으로 펼쳐짐 ===
  const lineSpring = spring({
    frame: frame - 15,
    fps,
    config: { damping: 15, stiffness: 100 },
  });
  const lineWidth = interpolate(lineSpring, [0, 1], [0, 400]);

  // === 배경 장식: 회전하는 원 ===
  const circleRotation = interpolate(frame, [0, durationInFrames], [0, 360]);
  const circleScale = spring({
    frame: frame - 5,
    fps,
    config: { damping: 20, stiffness: 60 },
  });

  // === 전체 페이드아웃 ===
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 20, durationInFrames - 5],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill style={{ opacity: fadeOut }}>
      {/* 레이어 1: 그라데이션 배경 */}
      <AbsoluteFill
        style={{
          background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
        }}
      />

      {/* 레이어 2: 배경 장식 (회전하는 반투명 원) */}
      <AbsoluteFill
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <div
          style={{
            width: 600,
            height: 600,
            borderRadius: "50%",
            border: `3px solid rgba(255,255,255,0.15)`,
            transform: `rotate(${circleRotation}deg) scale(${circleScale})`,
          }}
        />
      </AbsoluteFill>

      {/* 레이어 3: 텍스트 콘텐츠 */}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* 제목 */}
        <div
          style={{
            fontSize: 80,
            fontWeight: "bold",
            color: "white",
            fontFamily: "Arial, sans-serif",
            transform: `scale(${titleScaleFinal})`,
            opacity: titleOpacity,
            textShadow: "0 4px 20px rgba(0,0,0,0.3)",
            textAlign: "center",
            maxWidth: 1400,
          }}
        >
          {title}
        </div>

        {/* 하단 장식 라인 */}
        <div
          style={{
            width: lineWidth,
            height: 4,
            backgroundColor: accentColor,
            marginTop: 24,
            marginBottom: 24,
            borderRadius: 2,
          }}
        />

        {/* 부제목 */}
        <div
          style={{
            fontSize: 36,
            color: "rgba(255,255,255,0.85)",
            fontFamily: "Arial, sans-serif",
            opacity: subtitleOpacity,
            transform: `translateY(${subtitleY}px)`,
            textAlign: "center",
            maxWidth: 1200,
          }}
        >
          {subtitle}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
