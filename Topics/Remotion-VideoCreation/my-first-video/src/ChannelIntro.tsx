import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { z } from "zod";
import { zColor } from "@remotion/zod-types";

export const channelIntroSchema = z.object({
  channelName: z.string(),
  tagline: z.string(),
  subscribeText: z.string(),
  bgColor: zColor(),
  accentColor: zColor(),
});

type Props = z.infer<typeof channelIntroSchema>;

export const ChannelIntro: React.FC<Props> = ({
  channelName,
  tagline,
  subscribeText,
  bgColor,
  accentColor,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // === 배경 ===
  const gradientAngle = interpolate(frame, [0, durationInFrames], [120, 300]);

  // === 배경 별/반짝임 ===
  const stars = Array.from({ length: 40 }, (_, i) => {
    const x = ((i * 137.5) % 1920); // 황금각 분포
    const y = ((i * 97.3 + 200) % 1080);
    const twinkleSpeed = 0.8 + (i % 5) * 0.4;
    const twinklePhase = i * 0.5;
    const twinkle = interpolate(
      Math.sin(frame * twinkleSpeed * 0.1 + twinklePhase),
      [-1, 1],
      [0.1, 0.8]
    );
    const starSize = 2 + (i % 4);
    return { x, y, opacity: twinkle, size: starSize };
  });

  // === 빛줄기 (light rays) ===
  const rayOpacity = interpolate(frame, [0, 1 * fps], [0, 0.12], {
    extrapolateRight: "clamp",
  });
  const rayRotation = interpolate(frame, [0, durationInFrames], [0, 15]);

  // === 장식: 회전하는 원 3개 ===
  const circleRotate = interpolate(frame, [0, durationInFrames], [0, 360]);
  const circleScale = spring({
    frame,
    fps,
    config: { damping: 200 },
    durationInFrames: 2 * fps,
  });

  // === 채널명: 글자별 등장 ===
  const titleChars = channelName.split("");

  // === 글로우: 제목 뒤 빛 (펄스) ===
  const glowSpring = spring({
    frame: frame - 0.3 * fps,
    fps,
    config: { damping: 200 },
  });
  const glowPulse = interpolate(
    Math.sin(frame * 0.08),
    [-1, 1],
    [350, 500]
  );
  const glowSize = interpolate(glowSpring, [0, 1], [0, 1]) * glowPulse;

  // === 장식 라인 ===
  const lineSpring = spring({
    frame: frame - 0.5 * fps,
    fps,
    config: { damping: 12, stiffness: 120 },
  });

  // === 태그라인 ===
  const taglineSpring = spring({
    frame: frame - 0.8 * fps,
    fps,
    config: { damping: 20, stiffness: 100 },
  });
  const taglineX = interpolate(taglineSpring, [0, 1], [-300, 0]);

  // === 구독 버튼: 바운스 + 반복 펄스 ===
  const subscribeSpring = spring({
    frame: frame - 1.3 * fps,
    fps,
    config: { damping: 8, stiffness: 100 },
  });
  const subscribePulse = 1 + 0.05 * Math.sin((frame - 1.5 * fps) * 0.15);
  const subscribeGlow = interpolate(
    Math.sin((frame - 1.5 * fps) * 0.12),
    [-1, 1],
    [0.3, 0.7]
  );

  // === 파티클: 방사형 ===
  const particles = Array.from({ length: 20 }, (_, i) => {
    const angle = (i / 20) * Math.PI * 2;
    const delay = 0.4 * fps + i * 2;
    const particleSpring = spring({
      frame: frame - delay,
      fps,
      config: { damping: 12, stiffness: 50 },
    });
    const radius = interpolate(particleSpring, [0, 1], [0, 200 + (i % 4) * 100]);
    const particleOpacity = interpolate(particleSpring, [0.6, 1], [0.9, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    const size = 3 + (i % 4) * 2;
    const isGold = i % 3 === 0;
    return { angle, radius, opacity: particleOpacity, size, isGold };
  });

  // === 하단 웨이브 장식 ===
  const waveProgress = spring({
    frame: frame - 0.6 * fps,
    fps,
    config: { damping: 200 },
  });

  // === 전체 페이드아웃 + 스케일아웃 ===
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 0.8 * fps, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const scaleOut = interpolate(
    frame,
    [durationInFrames - 0.8 * fps, durationInFrames],
    [1, 1.15],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        opacity: fadeOut,
        transform: `scale(${scaleOut})`,
      }}
    >
      {/* 레이어 1: 그라데이션 배경 */}
      <AbsoluteFill
        style={{
          background: `linear-gradient(${gradientAngle}deg, ${bgColor}, #0d1b3e, #1a0a2e, #0f3460)`,
        }}
      />

      {/* 레이어 2: 별/반짝임 */}
      <AbsoluteFill>
        {stars.map((s, i) => (
          <div
            key={`star-${i}`}
            style={{
              position: "absolute",
              left: s.x,
              top: s.y,
              width: s.size,
              height: s.size,
              borderRadius: "50%",
              backgroundColor: "white",
              opacity: s.opacity,
              boxShadow: `0 0 ${s.size * 2}px rgba(255,255,255,0.5)`,
            }}
          />
        ))}
      </AbsoluteFill>

      {/* 레이어 3: 빛줄기 */}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          opacity: rayOpacity,
          transform: `rotate(${rayRotation}deg)`,
        }}
      >
        {[0, 45, 90, 135].map((angle) => (
          <div
            key={`ray-${angle}`}
            style={{
              position: "absolute",
              width: 3,
              height: 1200,
              background: `linear-gradient(to bottom, transparent, ${accentColor}, transparent)`,
              transform: `rotate(${angle}deg)`,
            }}
          />
        ))}
      </AbsoluteFill>

      {/* 레이어 4: 장식 원 3개 */}
      <AbsoluteFill
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        {[700, 520, 380].map((size, i) => (
          <div
            key={`circle-${i}`}
            style={{
              position: "absolute",
              width: size,
              height: size,
              borderRadius: "50%",
              border: `${2 - i * 0.5}px solid rgba(255,215,0,${0.12 - i * 0.03})`,
              transform: `rotate(${circleRotate * (i % 2 === 0 ? 1 : -0.6)}deg) scale(${circleScale})`,
            }}
          />
        ))}
      </AbsoluteFill>

      {/* 레이어 5: 파티클 */}
      <AbsoluteFill
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        {particles.map((p, i) => (
          <div
            key={`p-${i}`}
            style={{
              position: "absolute",
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              backgroundColor: p.isGold ? accentColor : "rgba(255,255,255,0.8)",
              opacity: p.opacity,
              boxShadow: p.isGold
                ? `0 0 ${p.size * 3}px ${accentColor}`
                : `0 0 ${p.size * 2}px rgba(255,255,255,0.4)`,
              transform: `translate(${Math.cos(p.angle) * p.radius}px, ${Math.sin(p.angle) * p.radius}px)`,
            }}
          />
        ))}
      </AbsoluteFill>

      {/* 레이어 6: 콘텐츠 */}
      <AbsoluteFill
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        {/* 글로우 (펄스) */}
        <div
          style={{
            position: "absolute",
            width: glowSize,
            height: glowSize,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(255,215,0,0.2) 0%, rgba(255,215,0,0.05) 40%, transparent 70%)`,
          }}
        />

        {/* 채널명: 글자별 스태거 등장 */}
        <div
          style={{
            display: "flex",
            gap: 4,
            overflow: "visible",
          }}
        >
          {titleChars.map((char, i) => {
            const charSpring = spring({
              frame: frame - i * 2,
              fps,
              config: { damping: 10, stiffness: 120 },
            });
            const charY = interpolate(charSpring, [0, 1], [60, 0]);
            const charRotate = interpolate(charSpring, [0, 1], [-15, 0]);
            return (
              <span
                key={i}
                style={{
                  fontSize: 120,
                  fontWeight: "bold",
                  color: "white",
                  fontFamily: "Arial, sans-serif",
                  textShadow: `0 0 60px rgba(255,215,0,0.5), 0 0 120px rgba(255,215,0,0.2), 0 4px 20px rgba(0,0,0,0.6)`,
                  transform: `translateY(${charY}px) rotate(${charRotate}deg)`,
                  opacity: charSpring,
                  display: "inline-block",
                  letterSpacing: 6,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            );
          })}
        </div>

        {/* 장식 라인 (다이아몬드 + 양쪽 라인) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginTop: 28,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: interpolate(lineSpring, [0, 1], [0, 160]),
              height: 2,
              background: `linear-gradient(to right, transparent, ${accentColor})`,
              boxShadow: `0 0 8px ${accentColor}`,
            }}
          />
          <div
            style={{
              width: 14,
              height: 14,
              backgroundColor: accentColor,
              transform: `rotate(45deg) scale(${lineSpring})`,
              boxShadow: `0 0 20px ${accentColor}`,
            }}
          />
          <div
            style={{
              width: interpolate(lineSpring, [0, 1], [0, 160]),
              height: 2,
              background: `linear-gradient(to left, transparent, ${accentColor})`,
              boxShadow: `0 0 8px ${accentColor}`,
            }}
          />
        </div>

        {/* 태그라인 */}
        <div
          style={{
            fontSize: 40,
            color: "rgba(255,255,255,0.9)",
            fontFamily: "Arial, sans-serif",
            opacity: taglineSpring,
            transform: `translateX(${taglineX}px)`,
            letterSpacing: 3,
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
          }}
        >
          {tagline}
        </div>

        {/* 구독 버튼 */}
        <div
          style={{
            marginTop: 75,
            transform: `scale(${subscribeSpring * subscribePulse})`,
            opacity: subscribeSpring,
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #FF1744, #D50000)",
              color: "white",
              padding: "20px 56px",
              borderRadius: 14,
              fontSize: 32,
              fontWeight: "bold",
              fontFamily: "Arial, sans-serif",
              display: "flex",
              alignItems: "center",
              gap: 16,
              boxShadow: `0 0 40px rgba(255,0,0,${subscribeGlow}), 0 8px 30px rgba(0,0,0,0.4)`,
              border: "2px solid rgba(255,255,255,0.15)",
            }}
          >
            <span style={{ fontSize: 30 }}>🔔</span>
            {subscribeText}
          </div>
        </div>
      </AbsoluteFill>

      {/* 레이어 7: 하단 웨이브 */}
      <AbsoluteFill style={{ justifyContent: "flex-end" }}>
        <svg
          width="1920"
          height="120"
          viewBox="0 0 1920 120"
          style={{
            opacity: interpolate(waveProgress, [0, 1], [0, 0.3]),
          }}
        >
          <path
            d={`M0,120 Q480,${60 - 30 * Math.sin(frame * 0.05)},960,80 Q1440,${100 + 20 * Math.sin(frame * 0.05)},1920,120 Z`}
            fill={accentColor}
          />
          <path
            d={`M0,120 Q480,${80 - 20 * Math.sin(frame * 0.04 + 1)},960,90 Q1440,${110 + 15 * Math.sin(frame * 0.04 + 1)},1920,120 Z`}
            fill="rgba(255,255,255,0.08)"
          />
        </svg>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
