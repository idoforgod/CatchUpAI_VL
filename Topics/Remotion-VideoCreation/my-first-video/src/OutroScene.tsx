import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";
import { z } from "zod";
import { zColor } from "@remotion/zod-types";

export const outroSchema = z.object({
  channelName: z.string(),
  message: z.string(),
  subscribeText: z.string(),
  accentColor: zColor(),
  bgColor: zColor(),
});

type Props = z.infer<typeof outroSchema>;

export const OutroScene: React.FC<Props> = ({
  channelName,
  message,
  subscribeText,
  accentColor,
  bgColor,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const nameSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const messageSpring = spring({
    frame: frame - Math.round(0.5 * fps),
    fps,
    config: { damping: 15, stiffness: 120 },
  });

  const buttonSpring = spring({
    frame: frame - Math.round(1 * fps),
    fps,
    config: { damping: 10, stiffness: 150 },
  });

  const nameScale = interpolate(nameSpring, [0, 1], [0.5, 1]);
  const nameOpacity = interpolate(nameSpring, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
  });

  const messageOpacity = interpolate(messageSpring, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
  });
  const messageY = interpolate(messageSpring, [0, 1], [20, 0]);

  const buttonScale = interpolate(buttonSpring, [0, 1], [0, 1]);
  const buttonOpacity = interpolate(buttonSpring, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
  });

  const pulse = Math.sin(frame * 0.15) * 0.05 + 1;

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse at center, ${bgColor}, #0a0a1a)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 30,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 64,
          fontWeight: 900,
          color: "#FFFFFF",
          opacity: nameOpacity,
          transform: `scale(${nameScale})`,
          textShadow: `0 0 30px ${accentColor}66`,
        }}
      >
        {channelName}
      </div>

      <div
        style={{
          fontSize: 28,
          color: "#FFFFFF99",
          opacity: messageOpacity,
          transform: `translateY(${messageY}px)`,
          textAlign: "center",
          maxWidth: 800,
          lineHeight: 1.4,
        }}
      >
        {message}
      </div>

      <div
        style={{
          marginTop: 20,
          padding: "16px 48px",
          background: `linear-gradient(135deg, #FF0000, #CC0000)`,
          borderRadius: 50,
          fontSize: 28,
          fontWeight: 700,
          color: "#FFFFFF",
          opacity: buttonOpacity,
          transform: `scale(${buttonScale * pulse})`,
          boxShadow: `0 0 20px #FF000066`,
          cursor: "pointer",
        }}
      >
        {subscribeText}
      </div>

      <div
        style={{
          display: "flex",
          gap: 40,
          marginTop: 10,
          opacity: buttonOpacity,
        }}
      >
        <div style={{ fontSize: 20, color: "#FFFFFF66" }}>👍 좋아요</div>
        <div style={{ fontSize: 20, color: "#FFFFFF66" }}>🔔 알림 설정</div>
        <div style={{ fontSize: 20, color: "#FFFFFF66" }}>💬 댓글</div>
      </div>
    </AbsoluteFill>
  );
};
