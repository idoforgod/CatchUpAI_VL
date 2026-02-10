import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { z } from "zod";
import { zColor } from "@remotion/zod-types";

export const skillsHelloWorldSchema = z.object({
  text: z.string(),
  textColor: zColor(),
  backgroundColor: zColor(),
});

type Props = z.infer<typeof skillsHelloWorldSchema>;

export const SkillsHelloWorld: React.FC<Props> = ({
  text,
  textColor,
  backgroundColor,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // 페이드인: 0~2초
  const fadeIn = interpolate(frame, [0, 2 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 스케일: 0~2초, 0.8 → 1.0
  const scale = interpolate(frame, [0, 2 * fps], [0.8, 1], {
    extrapolateRight: "clamp",
  });

  // 페이드아웃: 마지막 1초
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 1 * fps, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const opacity = fadeIn * fadeOut;

  return (
    <AbsoluteFill
      style={{
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          opacity,
          transform: `scale(${scale})`,
          color: textColor,
          fontSize: 120,
          fontWeight: "bold",
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
        }}
      >
        {text}
      </div>
    </AbsoluteFill>
  );
};
