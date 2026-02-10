# Topic Retrospective: Remotion-VideoCreation

**작성일**: 2026-02-10
**Topic**: Remotion-VideoCreation
**학습 기간**: 2026-02-05 ~ 2026-02-10 (6일, 실학습 5일)
**방법론**: CUA_VL (VibeLearn AI)

---

## 1. 전체 학습 여정 통계

### 모듈별 진행

| 모듈 | 예상 시간 | 실제 시간 | 날짜 | 핵심 산출물 |
|------|----------|----------|------|-----------|
| M1 환경 설정 | 3h | ~2.5h | 02/05-06 | Remotion 프로젝트, HelloWorld |
| M2 Core 기초 | 4h | ~2h | 02/06 | FadeInText, SpringBounce, MultiScene |
| M3 모션그래픽 | 4h | ~3h | 02/07 | TitleCard, CounterInfoGraphic, SequentialList |
| M4 Skills | 4h | ~3h | 02/09 | SkillsHelloWorld, ChannelIntro, ExplanationScene |
| M5 렌더링 | 2h | ~1.5h | 02/10 | 9개 MP4, 품질 비교 |
| M6 Capstone | 5h | ~2h | 02/10 | VibeLearnIntro_final.mp4 (46초) |
| **합계** | **22h** | **~14h** | **6일** | **15개 컴포넌트, 1개 최종 영상** |

### 효율성 분석
- **예상 대비 실제**: 22시간 → 약 14시간 (64% 소요, 36% 절약)
- **가장 빠른 모듈**: M5 렌더링 (예상 2h → 실제 1.5h, 개념이 단순)
- **가장 효율적**: M6 Capstone (예상 5h → 실제 2h, 기존 컴포넌트 재활용 효과)
- **가장 학습량 많은 모듈**: M4 Skills (27개 규칙 파일 학습 + 반복 개선 워크플로우)

---

## 2. 핵심 학습 내용

### 기술 역량

| 항목 | 학습 전 | 학습 후 |
|------|--------|--------|
| React/TypeScript | 없음 | Remotion 활용 수준 (컴포넌트, Props, Hook) |
| Remotion Core | 없음 | interpolate, spring, Sequence, Series 활용 가능 |
| 모션그래픽 | 없음 | 타이틀, 인포그래픽, 리스트, 설명 영상 제작 가능 |
| AI 영상 생성 | 없음 | Skills 설치, 자연어 생성, 반복 개선 워크플로우 |
| 렌더링 | 없음 | CLI 렌더링, CRF/비트레이트, YouTube 최적 설정 |

### 핵심 개념 정리

1. **Remotion = React + 영상**: 각 프레임이 React 컴포넌트, `useCurrentFrame()`이 모든 애니메이션의 기반
2. **interpolate vs spring**: interpolate는 정밀 제어, spring은 자연스러운 물리 효과
3. **Series vs Sequence**: Series는 자동 순차 배치, Sequence는 정확한 타이밍 제어
4. **Skills = AI 교사**: 규칙 파일로 AI에게 모범 사례를 가르치는 구조
5. **반복 개선 워크플로우**: 기본 생성 → 구체적 피드백 → 재생성 (3-4회가 최적)
6. **비트레이트 > CRF (YouTube용)**: 파일 크기 예측 가능, 일정한 품질

---

## 3. 산출물 현황

### 코드 산출물 (15개 컴포넌트)

| # | 컴포넌트 | 모듈 | 주요 기법 |
|---|---------|------|---------|
| 1 | HelloWorld (수정) | M1 | 기본 구조 이해 |
| 2 | FadeInText | M2 | interpolate, 페이드인 |
| 3 | SpringBounce | M2 | spring, 바운스 |
| 4 | MultiScene | M2 | Sequence, 3장면 구성 |
| 5 | TitleCard | M3 | Props, 재사용, 그라데이션 |
| 6 | CounterInfoGraphic | M3 | 숫자 카운트업, 프로그래스 |
| 7 | SequentialList | M3 | 순차 등장, 요약 장면 |
| 8 | SkillsHelloWorld | M4 | Skills best practice |
| 9 | ChannelIntro | M4 | 반복 개선 3회, 7레이어 |
| 10 | ExplanationScene | M4 | Series 패턴, 로컬 프레임 |
| 11 | WorkflowScene | M6 | Sequence + spring 조합 |
| 12 | OutroScene | M6 | CTA, 펄스 애니메이션 |
| 13 | VibeLearnIntro | M6 | Series 통합, 5장면 구성 |

### 문서 산출물 (6개 폴더)

```
Topics/Remotion-VideoCreation/
├── 01-Setup/          - 환경 설정 가이드
├── 02-Core-Basics/    - interpolate, spring, Sequence 개념
├── 03-Motion-Graphics/ - 모션그래픽 패턴 (타이틀, 인포그래픽, 리스트)
├── 04-Skills/         - Skills 아키텍처, 프롬프트 팁, 워크플로우
├── 05-Rendering/      - CRF, 비트레이트, YouTube 설정
└── 06-YouTube-Project/ - 스토리보드, 제작 플로우
```

### 최종 영상
- **VibeLearnIntro_final.mp4**: 46초, 16MB, 1920x1080, 30fps, H.264

---

## 4. 발생한 문제와 해결

| # | 문제 | 모듈 | 해결 |
|---|------|------|------|
| 1 | `npx create-video@latest` 대화형 멈춤 | M1 | git clone 방식으로 대체 |
| 2 | AbsoluteFill 중첩 시 flex 겹침 | M3 | 개별 AbsoluteFill로 감싸기 |
| 3 | `npx skills add` 대화형 멈춤 | M4 | `-y` 플래그 추가 |
| 4 | 미사용 변수 린트 오류 | M4 | 미사용 import/변수 제거 |
| 5 | Chrome Headless Shell 다운로드 | M5 | 최초 1회 자동 다운로드 (이후 캐시) |
| 6 | 장면별 시간 부족 | M6 | ExplanationScene 내부 타이밍 + 전체 확장 |

---

## 5. Self-Assessment

### 개념 이해 ⭐⭐⭐⭐

- [x] Remotion이 무엇이고 일반 영상 편집기와 어떻게 다른지 설명 가능
- [x] interpolate와 spring의 차이, 사용 시점을 설명 가능
- [x] Sequence, Series의 차이와 적합한 사용 시점을 설명 가능
- [x] Skills의 아키텍처와 동작 원리 (자연어→코드→렌더링) 설명 가능
- [x] CRF와 비트레이트의 관계, YouTube 권장 스펙 설명 가능

### 실무 활용 ⭐⭐⭐⭐⭐

- [x] Remotion 프로젝트를 처음부터 생성하고 영상 제작 가능
- [x] AI에게 효과적인 프롬프트로 영상 생성 요청 가능
- [x] 기존 컴포넌트를 Props로 재활용하여 빠르게 새 영상 제작 가능
- [x] YouTube 업로드 가능한 MP4를 CLI로 렌더링 가능
- [x] 유튜브 영상을 기획→제작→렌더링 전체 과정으로 완성 가능

### AI 협업 ⭐⭐⭐⭐⭐

- [x] AI에게 구체적인 시각적 요구사항을 전달하는 프롬프트 작성 가능
- [x] AI 생성 코드를 보고 어떤 효과인지 판단하고 수정 방향 제시 가능
- [x] 반복 개선 워크플로우로 완성도 높은 결과물 도출 가능
- [x] Core 코딩과 Skills 생성을 상황에 맞게 선택 가능

### 종합 평가: ⭐⭐⭐⭐½

---

## 6. CUA_VL 방법론 효과성 평가

### 효과적이었던 점
1. **Roadmap 기반 학습**: 모듈별 명확한 DoD가 있어 "오늘 뭘 해야 하지?" 고민 없음
2. **WorkLog 실시간 기록**: 문제 해결 과정이 기록되어 다음 세션에서 바로 이어가기 가능
3. **Daily Retrospective**: 매일 개선점을 돌아보며 학습 효율 점진적 향상
4. **산출물 중심**: 매 모듈마다 가시적 결과물이 있어 성취감과 동기 유지
5. **실습 우선 (80:20)**: 이론에 시간을 쓰기보다 직접 만들면서 배우는 게 훨씬 효과적

### 개선할 점
1. **시간 예측 정확도**: 실제 소요 시간이 예상의 64% — Roadmap 시간을 더 빡빡하게 잡아도 됨
2. **모듈 간 연결**: M3→M4 전환 시 컨텍스트 스위칭 비용이 있었음 → 모듈 간 브릿지 활동 추가 고려
3. **WorkLog 실시간 작성**: 학습 중에 WorkLog를 병행하면 집중이 분산됨 → 활동 끝난 후 일괄 작성이 나을 수도

---

## 7. 향후 학습 방향

### 즉시 활용 가능
- VibeLearn AI 채널용 설명 영상 제작
- 기존 컴포넌트를 재활용한 다양한 주제 영상

### 추가 학습 권장
- 오디오 + 영상 싱크 (배경음악, 효과음)
- TransitionSeries로 장면 전환 효과 (M4 규칙 파일에서 학습)
- Remotion Lambda로 클라우드 렌더링 (대량 영상 생성)

---

## 8. 통계 요약

| 항목 | 수치 |
|------|------|
| 총 학습 기간 | 6일 (02/05 ~ 02/10) |
| 실제 학습 시간 | 약 14시간 |
| 모듈 수 | 6개 (M1~M6) |
| 생성 컴포넌트 | 15개 |
| 렌더링 MP4 | 10개 |
| 최종 영상 | 46초, 16MB, 1080p |
| WorkLog | 6개 |
| 산출물 폴더 | 6개 |
| 문서 | 20개+ (README, concepts, guides) |

---

**방법론**: CUA_VL (VibeLearn AI)
**Retrospective 버전**: 1.0
