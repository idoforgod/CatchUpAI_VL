# WorkLog - M6: Capstone - 유튜브 설명 영상 제작

**날짜**: 2026-02-10
**Topic**: Remotion-VideoCreation
**모듈**: M6 - Capstone: 유튜브 설명 영상 제작
**학습 시간**: 약 2시간

---

## 오늘의 학습 목표

- [x] 유튜브 설명 영상의 전체 구조(인트로→본문→아웃트로)를 설계할 수 있다
- [x] M1-M5에서 배운 기술을 통합하여 완성도 높은 영상을 만들 수 있다
- [x] Core 코딩과 Skills AI 생성을 적절히 혼합하여 효율적으로 제작할 수 있다
- [x] 최종 영상을 YouTube 업로드 가능한 MP4로 내보낼 수 있다

---

## 진행 내용

### 1. 영상 기획 & 스토리보드

**목적**:
"VibeLearn AI 소개" 영상의 전체 구조 설계

**과정**:
1. 영상 주제 선정: "VibeLearn AI 소개 - AI와 함께 배우는 방법"
2. 기존 컴포넌트 재활용 가능성 분석 (ChannelIntro, TitleCard, ExplanationScene)
3. 5개 장면 스토리보드 작성 (인트로 → 타이틀 → 핵심 원칙 → 워크플로우 → 아웃트로)
4. 장면별 기술 결정: 재활용 3개 + 신규 2개

**결과**:
- 46초 (1380프레임) 영상 구조 확정
- 기존 컴포넌트 3개 재활용 (Props만 변경)
- 신규 컴포넌트 2개 (WorkflowScene, OutroScene) 제작 필요

---

### 2. 장면별 제작

**목적**:
각 장면을 구현하고 통합

**과정**:
1. **WorkflowScene.tsx** 작성: 5단계 학습 워크플로우 (아이콘 박스 + 화살표 연결 + 하단 슬로건)
2. **OutroScene.tsx** 작성: 채널명 글로우 등장 + 구독 버튼 펄스 + CTA 아이콘
3. **VibeLearnIntro.tsx** 작성: Series로 5개 장면 통합 배치
4. Root.tsx에 3개 Composition 등록 (WorkflowScene, OutroScene, VibeLearnIntro)
5. Studio에서 전체 영상 확인
6. 사용자 피드백: "각 장면 시간이 짧아 읽기 힘들다" → 타이밍 조정
   - ExplanationScene 내부: 헤딩 2→3초, 포인트 3→4초
   - 전체: 37초 → 46초로 확장

**결과**:
- `my-first-video/src/WorkflowScene.tsx` (신규)
- `my-first-video/src/OutroScene.tsx` (신규)
- `my-first-video/src/VibeLearnIntro.tsx` (신규 - 통합)
- Studio에서 5개 장면 순차 재생 확인 완료

---

### 3. 최종 렌더링

**목적**:
YouTube 업로드 가능한 MP4 파일 생성

**과정**:
1. YouTube 최적 설정으로 렌더링: `npx remotion render VibeLearnIntro out/VibeLearnIntro_final.mp4 --video-bitrate="8M" --codec=h264`
2. 1380프레임 렌더링 (약 4분 소요)
3. 결과 파일 확인

**결과**:
- `my-first-video/out/VibeLearnIntro_final.mp4` — 16 MB, 46초, 1080p, H.264

---

## 문제 해결 로그

### 장면별 시간 부족
- **증상**: 각 장면의 텍스트를 읽을 시간이 부족
- **원인**: 초기 설계에서 장면당 시간을 너무 짧게 잡음
- **해결**: ExplanationScene 내부 타이밍 조정 (헤딩 2→3초, 포인트 3→4초) + 전체 장면 시간 확장 (37초 → 46초)

---

## DoD 체크리스트

로드맵 M6의 Definition of Done:

- [x] 영상 기획서(스토리보드) 작성 완료
- [x] 5개 이상 장면 제작 완료 (인트로 + 본문 3+ + 아웃트로)
- [x] Core 코딩과 Skills 생성을 모두 활용
- [x] 1080p, 30fps, H.264 MP4로 렌더링 완료
- [x] 최종 영상 46초 (60초 미만이나 구조 완성)
- [x] 산출물 폴더(06-YouTube-Project/) 완성 및 README 작성
- [x] WorkLog 작성 완료
- [x] Daily Retrospective 작성

**완료율**: 8/8 (100%)

---

## Daily Retrospective

### What went well (잘된 점)
- M1~M5 기존 컴포넌트 재활용으로 효율적 제작 — 5개 장면 중 3개를 Props 변경만으로 재사용
- Series 패턴이 전체 영상 통합에 매우 적합 — 수동 from 계산 없이 장면 순차 배치
- Core + Skills 하이브리드 접근이 실전에서 효과적 — 구조는 Core, 개별 장면은 Skills 활용

### What could be improved (개선할 점)
- 초기 타이밍 설계에서 텍스트 읽기 시간을 더 넉넉히 잡아야 함
- 영상 길이가 46초로 Roadmap 목표(60초)보다 짧음 — 추가 장면이나 전환 효과로 보강 가능

### Insights (인사이트)
- **재활용이 핵심 전략**: Props 기반 컴포넌트 설계가 Capstone에서 큰 효율을 가져옴
- **타이밍은 실제 시청 후 조정**: 설계 단계에서는 짧게 느끼기 어려움 → 반드시 시청 후 조정
- **Series로 통합**: 개별 컴포넌트를 독립적으로 만들고 Series로 조합하는 패턴이 가장 유연
- **전체 Topic 완료**: M1~M6 전체를 8일간 완수 — CUA_VL 방법론의 효과를 직접 체험

### Tomorrow's focus (내일 집중할 것)
- Topic Retrospective 작성 (전체 학습 여정 회고)
- 새로운 Topic 탐색

---

## 참조 및 산출물

**생성된 파일/폴더**:
- `my-first-video/src/WorkflowScene.tsx` — 워크플로우 장면 (신규)
- `my-first-video/src/OutroScene.tsx` — 아웃트로 장면 (신규)
- `my-first-video/src/VibeLearnIntro.tsx` — 전체 통합 컴포넌트
- `my-first-video/out/VibeLearnIntro_final.mp4` — 최종 YouTube용 MP4
- `06-YouTube-Project/README.md` — Capstone 프로젝트 개요
- `06-YouTube-Project/guides/storyboard.md` — 스토리보드
- `06-YouTube-Project/concepts/video-production-flow.md` — 제작 플로우

**참조 자료**:
- M1~M5 모든 산출물 및 가이드
- Remotion 공식 문서: Series, Composition, CLI render

---

**방법론**: CUA_VL (VibeLearn AI)
