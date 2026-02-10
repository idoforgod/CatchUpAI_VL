import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
  Sequence,
} from "remotion";
import { z } from "zod";
import { zColor } from "@remotion/zod-types";

export const workflowSchema = z.object({
  title: z.string(),
  steps: z.array(
    z.object({
      emoji: z.string(),
      label: z.string(),
    })
  ),
  accentColor: zColor(),
  bgColor: zColor(),
});

type Props = z.infer<typeof workflowSchema>;

const StepBox: React.FC<{
  emoji: string;
  label: string;
  index: number;
  total: number;
  accentColor: string;
}> = ({ emoji, label, index, total, accentColor }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enterSpring = spring({
    frame: frame - index * 8,
    fps,
    config: { damping: 12, stiffness: 150 },
  });

  const scale = interpolate(enterSpring, [0, 1], [0.3, 1]);
  const opacity = interpolate(enterSpring, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
  });

  const arrowOpacity =
    index < total - 1
      ? interpolate(
          spring({
            frame: frame - index * 8 - 5,
            fps,
            config: { damping: 15, stiffness: 200 },
          }),
          [0, 1],
          [0, 1],
          { extrapolateRight: "clamp" }
        )
      : 0;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        <div
          style={{
            width: 90,
            height: 90,
            borderRadius: 20,
            background: `linear-gradient(135deg, ${accentColor}33, ${accentColor}66)`,
            border: `2px solid ${accentColor}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 40,
          }}
        >
          {emoji}
        </div>
        <div
          style={{
            fontSize: 22,
            fontWeight: 600,
            color: "#FFFFFF",
            textAlign: "center",
            maxWidth: 120,
            lineHeight: 1.2,
          }}
        >
          {label}
        </div>
      </div>
      {index < total - 1 && (
        <div
          style={{
            fontSize: 32,
            color: accentColor,
            opacity: arrowOpacity,
            fontWeight: 700,
          }}
        >
          →
        </div>
      )}
    </div>
  );
};

export const WorkflowScene: React.FC<Props> = ({
  title,
  steps,
  accentColor,
  bgColor,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 120 },
  });

  const titleY = interpolate(titleSpring, [0, 1], [-40, 0]);
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${bgColor}, #0a0a1a)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 60,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Sequence from={0} layout="none" premountFor={Math.round(0.5 * fps)}>
        <div
          style={{
            fontSize: 48,
            fontWeight: 800,
            color: "#FFFFFF",
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
            textAlign: "center",
          }}
        >
          {title}
        </div>
      </Sequence>

      <Sequence
        from={Math.round(0.5 * fps)}
        layout="none"
        premountFor={Math.round(0.5 * fps)}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: 16,
          }}
        >
          {steps.map((step, i) => (
            <StepBox
              key={i}
              emoji={step.emoji}
              label={step.label}
              index={i}
              total={steps.length}
              accentColor={accentColor}
            />
          ))}
        </div>
      </Sequence>

      <Sequence
        from={Math.round(3 * fps)}
        layout="none"
        premountFor={Math.round(0.5 * fps)}
      >
        <BottomLabel frame={frame - Math.round(3 * fps)} fps={fps} />
      </Sequence>
    </AbsoluteFill>
  );
};

const BottomLabel: React.FC<{ frame: number; fps: number }> = ({
  frame,
  fps,
}) => {
  const fadeIn = interpolate(frame, [0, Math.round(0.5 * fps)], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        fontSize: 24,
        color: "#FFFFFF99",
        opacity: fadeIn,
        textAlign: "center",
        fontStyle: "italic",
      }}
    >
      AI와 함께 배우고, 배운 것을 구조화하여, 다음 학습자를 위한 길을 만든다
    </div>
  );
};
