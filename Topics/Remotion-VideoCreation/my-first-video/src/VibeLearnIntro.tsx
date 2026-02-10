import React from "react";
import { AbsoluteFill, Series } from "remotion";
import { z } from "zod";
import { zColor } from "@remotion/zod-types";
import { ChannelIntro } from "./ChannelIntro";
import { TitleCard } from "./TitleCard";
import { ExplanationScene } from "./ExplanationScene";
import { WorkflowScene } from "./WorkflowScene";
import { OutroScene } from "./OutroScene";

export const vibeLearnIntroSchema = z.object({
  accentColor: zColor(),
  bgColor: zColor(),
});

type Props = z.infer<typeof vibeLearnIntroSchema>;

export const VibeLearnIntro: React.FC<Props> = ({ accentColor, bgColor }) => {
  return (
    <AbsoluteFill>
      <Series>
        {/* Scene 1: 채널 인트로 (6초 = 180프레임) */}
        <Series.Sequence durationInFrames={180}>
          <ChannelIntro
            channelName="Catch Up AI"
            tagline="AI와 함께 배우는 개발의 모든 것"
            subscribeText="구독하기"
            bgColor={bgColor}
            accentColor={accentColor}
          />
        </Series.Sequence>

        {/* Scene 2: VibeLearn AI란? 타이틀 (5초 = 150프레임) */}
        <Series.Sequence durationInFrames={150}>
          <TitleCard
            title="VibeLearn AI란?"
            subtitle="AI와 함께 체계적으로 학습하는 방법론"
            gradientFrom="#667eea"
            gradientTo="#764ba2"
            accentColor={accentColor}
          />
        </Series.Sequence>

        {/* Scene 3: 핵심 원칙 3가지 (15초 = 450프레임) */}
        <Series.Sequence durationInFrames={450}>
          <ExplanationScene
            heading="VibeLearn AI 3가지 핵심"
            points={[
              {
                icon: "🎯",
                title: "실습 우선",
                description:
                  "이론 20%, 실습 80% — 직접 만들면서 배웁니다",
              },
              {
                icon: "📚",
                title: "교과서 품질 산출물",
                description:
                  "배운 내용을 문서화하여 다음 학습자가 바로 따라할 수 있게",
              },
              {
                icon: "🤖",
                title: "AI 협업 학습",
                description:
                  "AI를 학습 파트너로 활용하여 효율적으로 성장합니다",
              },
            ]}
            accentColor={accentColor}
            bgColor={bgColor}
          />
        </Series.Sequence>

        {/* Scene 4: 학습 워크플로우 (14초 = 420프레임) */}
        <Series.Sequence durationInFrames={420}>
          <WorkflowScene
            title="학습 워크플로우"
            steps={[
              { emoji: "📋", label: "Topic\n설정" },
              { emoji: "🗺️", label: "Roadmap\n생성" },
              { emoji: "📝", label: "일일\n학습" },
              { emoji: "📊", label: "WorkLog\n기록" },
              { emoji: "🔄", label: "회고 &\n개선" },
            ]}
            accentColor={accentColor}
            bgColor={bgColor}
          />
        </Series.Sequence>

        {/* Scene 5: 아웃트로 + CTA (6초 = 180프레임) */}
        <Series.Sequence durationInFrames={180}>
          <OutroScene
            channelName="Catch Up AI"
            message="VibeLearn AI로 함께 배워봐요!"
            subscribeText="구독하기"
            accentColor={accentColor}
            bgColor={bgColor}
          />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
