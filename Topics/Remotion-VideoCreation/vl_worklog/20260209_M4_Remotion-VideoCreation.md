# WorkLog - M4: Remotion Skills (AI 영상 생성)

**날짜**: 2026-02-09
**Topic**: Remotion-VideoCreation
**모듈**: M4 - Remotion Skills (AI 영상 생성)
**학습 시간**: 약 3시간

---

## 오늘의 학습 목표

- [x] Remotion Skills를 프로젝트에 설치하고 구성
- [x] 자연어 프롬프트로 3개 이상 영상 생성
- [x] 반복 개선으로 완성도 높인 영상 1개 이상
- [x] AI 생성 코드를 수동으로 미세조정한 경험

---

## 진행 내용

### 1. Skills 설치 + 첫 AI 영상

**목적**:
Remotion Skills 환경 구축 및 자연어 영상 생성 체험

**과정**:
1. `npx skills add remotion-dev/skills -y`로 Remotion Agent Skills 설치
2. `.agents/skills/remotion-best-practices/` 폴더에 SKILL.md + 27개 규칙 파일 설치 확인
3. `.claude/skills/`에 심볼릭 링크로 Claude Code에 자동 연동
4. 핵심 규칙 파일 학습: animations.md, compositions.md, parameters.md, text-animations.md
5. Skills best practice 적용하여 SkillsHelloWorld 컴포넌트 작성
6. Root.tsx에 Composition 등록 (Zod 스키마 + defaultProps)

**결과**:
- `my-first-video/src/SkillsHelloWorld.tsx` 생성
- Studio에서 정상 재생 확인: 파란 배경 + 흰 텍스트 페이드인/스케일업 + 페이드아웃
- Props 패널에서 text, textColor, backgroundColor 실시간 편집 가능
- Skills 규칙 적용: 초 단위 시간(`2 * fps`), extrapolate clamp, CSS transition 금지

**메모/인사이트**:
- Skills는 SKILL.md 파일로 AI에게 Remotion 모범 사례를 가르치는 구조 (27개 규칙 파일)
- 핵심 규칙: 시간은 초 단위 × fps, CSS transition/animation 금지, extrapolate는 항상 clamp
- `.agents/skills/`(범용) → `.claude/skills/`(심볼릭 링크)로 여러 AI 도구에서 동시 지원

---

### 2. 반복 개선으로 영상 다듬기

**목적**:
AI와 대화형으로 영상을 개선하는 워크플로우 습득. 피드백 → 재생성 사이클 체험.

**과정**:
1. Skills timing.md, transitions.md 규칙 학습 (spring config 종류, Easing, TransitionSeries)
2. **반복 1**: 기본 채널 인트로 생성 (채널명 spring 등장, 장식 라인, 태그라인, 구독 버튼)
3. **반복 2**: "배경에 그라데이션 추가 + 애니메이션 화려하게" → 회전 그라데이션, 장식 원, 파티클, 글로우, 슬라이드인 추가
4. **반복 3**: "더 화려하게" → 별 반짝임(40개), 빛줄기, 글자별 스태거 등장, 글로우 펄스, 다이아몬드 라인, 구독 버튼 네온 글로우, SVG 웨이브, 스케일아웃 퇴장
5. Root.tsx에 Composition 등록 (schema + defaultProps)

**결과**:
- `my-first-video/src/ChannelIntro.tsx` 생성 → 3회 반복 개선
- 최종: 7개 레이어(그라데이션 배경, 별, 빛줄기, 장식 원, 파티클, 콘텐츠, 웨이브)
- 글자별 스태거 등장, 펄스 글로우, 네온 구독 버튼 등 고급 효과 적용
- Props 패널에서 channelName, tagline, bgColor, accentColor 편집 가능

**메모/인사이트**:
- 반복 개선 워크플로우: 기본 생성 → 구체적 피드백 → 재생성이 효과적
- spring config 사용 분류: smooth(`damping:200`), snappy(`damping:20, stiffness:200`), bouncy(`damping:8`)
- `Math.sin(frame * speed)`로 주기적 맥동/반짝임 효과 구현 가능
- 글자별 등장은 `split("") + map + 각 글자에 delay spring`으로 구현
- 레이어링은 AbsoluteFill 중첩이 핵심 — 배경/장식/콘텐츠 분리

---

### 3. 설명 영상 장면 생성

**목적**:
Skills로 설명 영상 생성 + 수동 미세조정 비교. Skills의 `Series`, `Sequence layout="none"` 패턴 학습.

**과정**:
1. Skills sequencing.md 규칙 학습: `Series`(순차 배치), `Sequence layout="none"`(AbsoluteFill 제거), `premountFor`(프리마운트)
2. `Series`를 사용한 ExplanationScene 컴포넌트 설계 (헤딩 장면 + 3개 포인트 장면)
3. HeadingScene: 타이틀 spring 등장 + 밑줄 + "N가지 포인트" 서브타이틀
4. PointScene: 아이콘 바운스(원형 배지) + 제목 슬라이드인 + 설명 페이드인 + 하단 프로그래스 인디케이터
5. Props로 포인트 배열을 받아 데이터만 교체하면 다른 주제의 설명 영상 생성 가능
6. Root.tsx에 Composition 등록 ("AI 학습의 3가지 핵심 원칙" 데이터)

**결과**:
- `my-first-video/src/ExplanationScene.tsx` 생성
- Studio에서 정상 재생: 헤딩(2초) → 포인트1(3초) → 포인트2(3초) → 포인트3(3초) = 11초
- Props 패널에서 heading, points 배열, accentColor, bgColor 편집 가능
- Series 패턴으로 수동 `from` 계산 없이 장면 순차 배치 성공

**메모/인사이트**:
- **Series vs Sequence**: Series는 장면 순차 배치를 자동화 (수동 from 계산 불필요), Sequence는 정확한 타이밍 제어
- **Sequence layout="none"**: AbsoluteFill 래핑을 제거 → M3의 flex 겹침 문제의 또 다른 해결책!
- **useCurrentFrame() in Series.Sequence**: 각 장면 내에서 프레임이 0부터 시작(로컬 프레임) → 장면별 독립 애니메이션 가능
- **M3 SequentialList vs M4 ExplanationScene**: 같은 화면 내 순차 등장은 frame-delay, 전체 화면 교체는 Series가 적합
- Props로 points 배열 크기를 변경하면 장면 수가 자동 조정됨 → 고도의 재사용성

---

## 문제 해결 로그

### `npx skills add` 대화형 프롬프트 멈춤
- **증상**: `npx skills add remotion-dev/skills` 실행 시 대화형 확인 프롬프트에서 멈춤
- **원인**: 자동화 환경에서 대화형 입력 불가
- **해결**: `-y` 플래그 추가 → `npx skills add remotion-dev/skills -y`

### ChannelIntro 미사용 변수 린트 오류
- **증상**: 반복 3 후 `Easing` import와 `titleOverallSpring` 변수가 미사용으로 경고
- **원인**: 반복 개선 과정에서 코드 구조 변경 후 이전 코드 잔여
- **해결**: 미사용 import와 변수 제거

---

## DoD 체크리스트

로드맵 M4의 Definition of Done:

- [x] Remotion Skills 설치 및 Claude Code 연동 완료
- [x] 자연어 프롬프트로 3개 이상 영상 생성 완료
- [x] 반복 개선으로 완성도 높인 영상 1개 이상
- [x] AI 생성 코드를 수동으로 미세조정한 경험
- [x] 산출물 폴더(04-Skills/) 완성 및 README 작성
- [x] WorkLog 작성 완료
- [x] Daily Retrospective 작성

**완료율**: 7/7 (100%)

---

## Daily Retrospective

### What went well (잘된 점)
- Skills 설치부터 3개 영상 생성까지 순조롭게 진행 (약 3시간 소요, 계획 범위 내)
- 반복 개선 워크플로우가 매우 효과적 — 3회 반복만으로 7레이어 화려한 인트로 완성
- M2/M3에서 배운 개념(spring, interpolate, Sequence)이 Skills 생성 코드를 이해하는 데 큰 도움

### What could be improved (개선할 점)
- 첫 Skills 설치 시 `-y` 플래그를 몰라 시간 소모 — 도구 CLI 옵션을 미리 확인하는 습관 필요
- 반복 개선 시 구체적인 시각적 요구사항을 더 일찍 제시하면 반복 횟수를 줄일 수 있었음

### Insights (인사이트)
- **Skills = AI 교사 구조**: 규칙 파일로 AI에게 모범 사례를 가르치는 패턴은 다른 프레임워크에도 적용 가능
- **Series vs frame-delay**: 전체 화면 교체는 Series, 같은 화면 내 순차 등장은 frame-delay가 적합
- **반복 개선 최적 횟수**: 3-4회가 가장 효율적. 그 이상은 수동 수정이 나음
- **Props 재사용성**: 데이터만 교체하면 전혀 다른 주제의 영상을 즉시 생성 가능

### Tomorrow's focus (내일 집중할 것)
- M5: 렌더링 & 내보내기 — CLI 렌더링, YouTube 최적 설정
- M4에서 만든 3개 영상 중 하나를 MP4로 렌더링 테스트

---

## 참조 및 산출물

**생성된 파일/폴더**:
- `my-first-video/src/SkillsHelloWorld.tsx` — 첫 AI 영상 (Skills best practice 적용)
- `my-first-video/src/ChannelIntro.tsx` — 채널 인트로 (3회 반복 개선, 7레이어)
- `my-first-video/src/ExplanationScene.tsx` — 설명 영상 (Series 패턴)
- `my-first-video/src/Root.tsx` — Composition 등록 (3개 추가)
- `04-Skills/README.md` — 모듈 개요 및 학습 요약
- `04-Skills/concepts/skills-overview.md` — Skills 개념 및 아키텍처
- `04-Skills/concepts/prompt-tips.md` — 효과적인 프롬프트 작성법
- `04-Skills/guides/skills-workflow.md` — Skills 워크플로우 가이드

**참조 자료**:
- [Agent Skills 공식 문서](https://www.remotion.dev/docs/ai/skills): 설치 및 설정
- Skills 규칙 파일: `.agents/skills/remotion-best-practices/rules/` (27개)
- 주요 규칙: animations.md, compositions.md, timing.md, sequencing.md, transitions.md

**다음 세션 준비사항**:
- M5 렌더링 & 내보내기 모듈 시작
- FFmpeg 설치 상태 확인
- YouTube 업로드 최적 설정 조사

---

**방법론**: CUA_VL (VibeLearn AI)
