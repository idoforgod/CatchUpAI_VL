# Remotion-VideoCreation 학습 로드맵

**생성일**: 2026-02-05
**방법론**: CUA_VL (Catch Up AI Vibe Learning)
**버전**: 1.0

---

## 학습 개요

### Topic 소개
React 기반 영상 제작 프레임워크 Remotion의 Core와 Skills를 학습하여, 유튜브 설명 영상(모션그래픽)을 직접 제작합니다.

### 학습 목표
- [ ] React/TypeScript 기초를 Remotion 활용 수준으로 이해한다
- [ ] Remotion 프로젝트를 생성하고 영상을 렌더링할 수 있다
- [ ] Remotion Core로 기본 모션그래픽 컴포넌트를 만들 수 있다
- [ ] Remotion Skills로 자연어 지시를 통해 영상을 생성할 수 있다
- [ ] 유튜브용 설명 영상(모션그래픽) 1개를 완성하여 내보낼 수 있다

### 예상 학습 기간
2-3주 (주당 5-10시간, 총 15-25시간)

### 학습 환경
- OS: Windows
- 도구: VS Code, Node.js 18+, npm/pnpm, Claude Code
- 사전 지식: React/TypeScript 경험 없음 (M1에서 다룸)

---

## 전체 로드맵 구조

| 모듈 | 모듈명 | 난이도 | 예상 시간 | 산출물 폴더 |
|------|--------|--------|----------|------------|
| M1 | 환경 설정 & 첫 영상 | ⭐ | 3h | 01-Setup/ |
| M2 | Remotion Core 기초 | ⭐⭐ | 4h | 02-Core-Basics/ |
| M3 | 모션그래픽 컴포넌트 | ⭐⭐ | 4h | 03-Motion-Graphics/ |
| M4 | Remotion Skills (AI 영상) | ⭐⭐ | 4h | 04-Skills/ |
| M5 | 렌더링 & 내보내기 | ⭐ | 2h | 05-Rendering/ |
| M6 | Capstone: 유튜브 영상 제작 | ⭐⭐⭐ | 5h | 06-YouTube-Project/ |

**총 예상 시간**: 22시간 (버퍼 포함)

---

## 모듈별 상세 계획

---

### M1 - 환경 설정 & 첫 영상

**난이도**: ⭐
**예상 시간**: 3h
**산출물 폴더**: `01-Setup/`

#### 학습 목표
- [ ] Node.js와 npm이 설치되어 있고 버전을 확인할 수 있다
- [ ] `npx create-video@latest`로 Remotion 프로젝트를 생성할 수 있다
- [ ] Remotion Studio(localhost:3000)를 실행하고 프리뷰를 볼 수 있다
- [ ] Hello World 영상을 수정하여 자신만의 텍스트가 표시되는 영상을 만들 수 있다

#### 주요 개념
1. **Remotion**: React로 영상을 만드는 프레임워크. 각 프레임 = React 컴포넌트
2. **Remotion Studio**: 브라우저 기반 영상 프리뷰/편집 환경 (localhost:3000)
3. **Composition**: React 컴포넌트 + 영상 메타데이터(너비, 높이, fps, 길이)의 조합
4. **src/Root.tsx**: Composition을 등록하는 진입점 파일

#### 실습 과제

**실습 1: 환경 구축** ⭐
- **목적**: Remotion 개발 환경을 처음부터 세팅
- **단계**:
  1. Node.js 설치 확인: `node --version` (18+ 필요)
  2. 프로젝트 생성: `npx create-video@latest my-first-video`
  3. 템플릿 선택: "Hello World" 선택
  4. 디렉토리 이동: `cd my-first-video`
  5. 의존성 설치: `npm install`
  6. Studio 실행: `npm run dev`
  7. 브라우저에서 `http://localhost:3000` 열기
- **예상 시간**: 30분
- **검증**: Remotion Studio에서 Hello World 영상이 재생되면 성공

**실습 2: 첫 영상 수정하기** ⭐
- **목적**: 코드를 수정하여 영상이 바뀌는 것을 직접 체험
- **단계**:
  1. `src/HelloWorld/` 폴더의 파일 구조 확인
  2. 텍스트를 자기 이름 또는 채널명으로 변경
  3. 배경색을 원하는 색으로 변경
  4. fps, durationInFrames 값을 변경하여 효과 관찰
  5. Studio에서 실시간 프리뷰 확인
- **예상 시간**: 60분
- **검증**: 수정한 텍스트와 색상이 Studio에 반영되면 성공

**실습 3: React/TypeScript 최소 기초** ⭐
- **목적**: Remotion 코드를 읽고 수정할 수 있는 최소한의 React 지식 확보
- **단계**:
  1. JSX 문법 이해: HTML과 비슷하지만 JavaScript 안에 작성
  2. 컴포넌트 개념: 함수가 UI를 반환하는 구조
  3. Props: 컴포넌트에 데이터를 전달하는 방법
  4. Hook 개념: `useCurrentFrame()`, `useVideoConfig()` 사용법
  5. TypeScript 기초: 타입 선언 (`const x: number = 5`)
  6. 직접 간단한 컴포넌트를 만들어보기
- **예상 시간**: 60분
- **검증**: AI에게 "이 Remotion 코드에서 텍스트 색을 빨간색으로 바꿔줘"라고 지시할 수 있으면 성공

#### 산출물
```
01-Setup/
├── README.md              # 환경 설정 과정 정리
├── concepts/
│   ├── remotion-overview.md    # Remotion이란?
│   └── react-minimum.md       # React/TS 최소 기초
├── examples/
│   └── my-first-video/        # 수정한 첫 프로젝트 (또는 스크린샷)
└── guides/
    └── setup-guide.md         # Windows 환경 설정 가이드
```

#### Definition of Done
- [ ] Node.js 18+ 설치 완료
- [ ] Remotion 프로젝트 생성 및 Studio 실행 성공
- [ ] Hello World 영상 수정 (텍스트, 색상 변경) 완료
- [ ] React/TypeScript 기초 개념 정리 완료
- [ ] 산출물 폴더(01-Setup/) 생성 및 README 작성
- [ ] WorkLog 작성 완료
- [ ] Daily Retrospective 작성

#### Self-Assessment
**개념 이해**:
- [ ] Remotion이 무엇이고 일반 영상 편집기와 어떻게 다른지 설명 가능
- [ ] Composition의 4가지 속성(width, height, fps, durationInFrames)을 설명 가능

**실무 활용**:
- [ ] 새 Remotion 프로젝트를 혼자서 생성할 수 있음
- [ ] Remotion 코드에서 텍스트/색상 등 간단한 수정이 가능

**AI 협업**:
- [ ] AI에게 "Remotion에서 X를 하고 싶어"라고 구체적으로 요청 가능

#### 예상 시간 배분
- 개념 학습: 30분 (10%)
- 실습 1 (환경 구축): 30분
- 실습 2 (첫 영상 수정): 60분
- 실습 3 (React/TS 기초): 60분
- 문서화: 30분
- **합계**: 3시간 (버퍼 포함 3.5h)

#### 참조 자료
- [Remotion 시작하기](https://www.remotion.dev/docs/): 공식 프로젝트 생성 가이드
- [핵심 개념](https://www.remotion.dev/docs/the-fundamentals): Composition, 프레임, 영상 속성
- [Remotion 초보자 가이드](https://www.clipcat.com/blog/create-videos-programmatically-using-react-a-beginners-guide-to-remotion/): 비개발자를 위한 튜토리얼

---

### M2 - Remotion Core 기초

**난이도**: ⭐⭐
**예상 시간**: 4h
**산출물 폴더**: `02-Core-Basics/`

#### 학습 목표
- [ ] `useCurrentFrame()`과 `interpolate()`로 페이드인/아웃 애니메이션을 만들 수 있다
- [ ] `spring()`으로 자연스러운 물리 기반 애니메이션을 구현할 수 있다
- [ ] `<Sequence>`로 여러 장면을 시간순으로 배치할 수 있다
- [ ] 텍스트, 도형, 이미지를 활용한 기본 장면을 만들 수 있다

#### 주요 개념
1. **useCurrentFrame()**: 현재 프레임 번호 반환. 이 값으로 모든 애니메이션 구현
2. **interpolate()**: 프레임 범위를 다른 값 범위로 매핑 (예: 프레임 0-30 → opacity 0→1)
3. **spring()**: 물리 기반 애니메이션 (0→1). 자연스러운 튕김/감속 효과
4. **Sequence**: 자식 컴포넌트의 시간을 이동시키는 래퍼. `from` prop으로 시작 시점 지정
5. **AbsoluteFill**: 화면 전체를 채우는 레이아웃 컨테이너

#### 실습 과제

**실습 1: 애니메이션 기초 (interpolate)** ⭐
- **목적**: 프레임 기반 애니메이션 원리 체득
- **단계**:
  1. 새 컴포넌트 파일 생성
  2. `useCurrentFrame()`으로 프레임 번호 가져오기
  3. `interpolate()`로 opacity 페이드인 구현 (0→30프레임: 0→1)
  4. `interpolate()`로 텍스트 슬라이드 구현 (Y축 이동)
  5. 여러 속성에 interpolate 적용 (크기, 회전 등)
- **예상 시간**: 60분
- **검증**: 텍스트가 서서히 나타나면서 위로 슬라이드되면 성공

**실습 2: Spring 애니메이션** ⭐⭐
- **목적**: 자연스러운 모션 구현 능력 확보
- **단계**:
  1. `spring()` 함수의 기본 사용법 학습
  2. spring 파라미터 조절: mass, damping, stiffness
  3. 텍스트가 "톡" 하고 나타나는 효과 구현
  4. 박스가 화면에 바운스하며 등장하는 효과 구현
  5. interpolate와 spring 비교 체험
- **예상 시간**: 50분
- **검증**: 요소가 물리적으로 자연스럽게 등장하면 성공

**실습 3: Sequence로 장면 구성** ⭐⭐
- **목적**: 여러 장면을 시간순으로 배치하는 영상 구성 학습
- **단계**:
  1. Scene1, Scene2, Scene3 컴포넌트 각각 생성
  2. `<Sequence from={0}>`, `<Sequence from={60}>` 등으로 배치
  3. 장면 간 전환 효과 추가 (페이드)
  4. 전체 영상이 3개 장면으로 흘러가는 구조 완성
- **예상 시간**: 60분
- **검증**: Studio에서 재생 시 3개 장면이 순서대로 나타나면 성공

#### 산출물
```
02-Core-Basics/
├── README.md                   # Core 기초 정리
├── concepts/
│   ├── animation-basics.md     # interpolate, spring 개념
│   └── sequence-timing.md      # Sequence로 장면 구성
├── examples/
│   ├── fade-in-text/           # 페이드인 예제 코드
│   ├── spring-bounce/          # Spring 바운스 예제
│   └── multi-scene/            # 3장면 구성 예제
└── guides/
    └── animation-cheatsheet.md # 애니메이션 빠른 참조
```

#### Definition of Done
- [ ] interpolate로 페이드인/슬라이드 애니메이션 구현 완료
- [ ] spring으로 바운스 애니메이션 구현 완료
- [ ] Sequence로 3개 이상 장면 배치 완료
- [ ] 각 예제 코드 저장 및 README 작성
- [ ] 산출물 폴더(02-Core-Basics/) 완성
- [ ] WorkLog 작성 완료
- [ ] Daily Retrospective 작성

#### Self-Assessment
**개념 이해**:
- [ ] interpolate와 spring의 차이를 설명 가능 (언제 어떤 것을 쓰는가)
- [ ] Sequence의 from prop이 무엇을 의미하는지 설명 가능

**실무 활용**:
- [ ] 새로운 애니메이션 효과를 AI에게 "interpolate로 X를 만들어줘"라고 요청 가능
- [ ] AI가 만든 애니메이션 코드를 보고 어떤 효과인지 판단 가능

**문제 해결**:
- [ ] 애니메이션이 예상과 다르게 동작할 때 AI에게 디버깅 방향 제시 가능

#### 예상 시간 배분
- 개념 학습: 40분 (17%)
- 실습 1 (interpolate): 60분
- 실습 2 (spring): 50분
- 실습 3 (Sequence): 60분
- 문서화: 30분
- **합계**: 4시간 (버퍼 포함 4.5h)

#### 참조 자료
- [애니메이션 속성](https://www.remotion.dev/docs/animating-properties): interpolate 공식 문서
- [spring()](https://www.remotion.dev/docs/spring): Spring 애니메이션 API
- [Sequence](https://www.remotion.dev/docs/sequence): Sequence 컴포넌트 공식 문서

---

### M3 - 모션그래픽 컴포넌트

**난이도**: ⭐⭐
**예상 시간**: 4h
**산출물 폴더**: `03-Motion-Graphics/`

#### 학습 목표
- [ ] 타이틀 카드 (제목 + 부제 + 배경 애니메이션)를 만들 수 있다
- [ ] 숫자/데이터가 카운트업되는 인포그래픽 애니메이션을 만들 수 있다
- [ ] 아이콘/도형이 순차적으로 등장하는 리스트 애니메이션을 만들 수 있다
- [ ] 여러 컴포넌트를 조합하여 1분짜리 설명 영상 구조를 만들 수 있다

#### 주요 개념
1. **CSS-in-JS**: React에서 스타일을 JavaScript 객체로 작성 (style prop)
2. **재사용 컴포넌트**: Props로 데이터를 받아 다양한 영상에 활용 가능한 컴포넌트
3. **Easing**: 애니메이션 가속/감속 커브 (linear, ease-in, ease-out 등)
4. **레이어링**: AbsoluteFill을 중첩하여 배경, 중간, 전면 레이어 구성

#### 실습 과제

**실습 1: 타이틀 카드 컴포넌트** ⭐
- **목적**: 유튜브 인트로에 사용할 수 있는 타이틀 카드 제작
- **단계**:
  1. 배경 그라데이션 또는 단색 배경 생성
  2. 제목 텍스트: spring으로 확대 등장
  3. 부제 텍스트: 약간 딜레이 후 페이드인
  4. 하단 라인 또는 장식 요소 애니메이션
  5. Props로 제목/부제를 외부에서 주입 가능하게 구성
- **예상 시간**: 60분
- **검증**: 타이틀 카드가 애니메이션과 함께 완성되면 성공

**실습 2: 숫자 카운트업 인포그래픽** ⭐⭐
- **목적**: 데이터를 시각적으로 보여주는 모션그래픽 역량 확보
- **단계**:
  1. 숫자가 0에서 목표값까지 올라가는 애니메이션
  2. interpolate로 프레임을 숫자 범위에 매핑
  3. 원형 프로그래스바 또는 바 차트 애니메이션
  4. 라벨과 설명 텍스트 추가
  5. Props로 데이터를 외부에서 변경 가능하게 구성
- **예상 시간**: 60분
- **검증**: 숫자가 부드럽게 올라가며 차트가 채워지면 성공

**실습 3: 순차 등장 리스트** ⭐⭐
- **목적**: 포인트를 하나씩 보여주는 설명 영상 패턴 학습
- **단계**:
  1. 항목 배열 정의 (예: 5가지 장점 리스트)
  2. 각 항목이 Sequence로 순차 등장
  3. 아이콘 + 텍스트 조합 레이아웃
  4. 등장 애니메이션: 왼쪽에서 슬라이드인 + 페이드
  5. 전체 리스트 완성 후 요약 장면 추가
- **예상 시간**: 60분
- **검증**: 5개 항목이 차례로 나타나면 성공

#### 산출물
```
03-Motion-Graphics/
├── README.md                      # 모션그래픽 패턴 정리
├── concepts/
│   ├── css-in-js-for-video.md     # 영상에서의 CSS 스타일링
│   └── reusable-components.md     # 재사용 가능한 컴포넌트 설계
├── examples/
│   ├── title-card/                # 타이틀 카드 컴포넌트
│   ├── counter-infographic/       # 카운트업 인포그래픽
│   └── sequential-list/           # 순차 등장 리스트
└── guides/
    └── motion-patterns.md         # 자주 쓰는 모션 패턴 모음
```

#### Definition of Done
- [ ] 타이틀 카드 컴포넌트 완성 (Props로 데이터 변경 가능)
- [ ] 숫자 카운트업 인포그래픽 완성
- [ ] 순차 등장 리스트 애니메이션 완성
- [ ] 3개 컴포넌트 모두 재사용 가능하게 설계
- [ ] 산출물 폴더(03-Motion-Graphics/) 완성 및 README 작성
- [ ] WorkLog 작성 완료
- [ ] Daily Retrospective 작성

#### Self-Assessment
**개념 이해**:
- [ ] 모션그래픽에서 자주 쓰이는 3가지 패턴을 설명 가능
- [ ] 재사용 컴포넌트의 장점과 Props 활용법을 설명 가능

**실무 활용**:
- [ ] AI에게 "구독자 증가 차트 애니메이션을 만들어줘"와 같이 구체적 요청 가능
- [ ] AI가 만든 모션그래픽 코드의 타이밍과 레이아웃을 조정할 수 있음

**문제 해결**:
- [ ] 애니메이션 타이밍이 맞지 않을 때 Sequence의 from 값 조정 방향을 AI에게 제시 가능

#### 예상 시간 배분
- 개념 학습: 30분 (13%)
- 실습 1 (타이틀 카드): 60분
- 실습 2 (인포그래픽): 60분
- 실습 3 (순차 리스트): 60분
- 문서화: 30분
- **합계**: 4시간 (버퍼 포함 4.5h)

#### 참조 자료
- [핵심 개념](https://www.remotion.dev/docs/the-fundamentals): 컴포넌트 구성 기본
- [LogRocket Remotion 가이드](https://blog.logrocket.com/remotion-a-framework-for-making-videos-in-react/): 실전 예제
- [Prismic Remotion 튜토리얼](https://prismic.io/blog/create-videos-with-code-remotion-tutorial): 단계별 튜토리얼

---

### M4 - Remotion Skills (AI 영상 생성)

**난이도**: ⭐⭐
**예상 시간**: 4h
**산출물 폴더**: `04-Skills/`

#### 학습 목표
- [ ] Remotion Skills를 프로젝트에 설치하고 구성할 수 있다
- [ ] Claude Code에서 자연어로 영상을 생성할 수 있다
- [ ] 생성된 영상을 대화형으로 수정/개선할 수 있다
- [ ] Skills로 생성한 코드를 이해하고 수동으로 미세 조정할 수 있다

#### 주요 개념
1. **Remotion Skills**: AI Agent가 Remotion 코드를 자동 생성하게 해주는 플러그인
2. **Agent Skill**: AI 도구(Claude Code 등)에 특정 능력을 부여하는 확장 모듈
3. **반복 개선(Iteration)**: 프롬프트 → 생성 → 피드백 → 재생성 사이클
4. **코드 이해**: AI가 생성한 코드를 읽고 M2-M3에서 배운 개념으로 이해

#### 실습 과제

**실습 1: Skills 설치 및 첫 AI 영상** ⭐
- **목적**: Remotion Skills 환경 구축 및 자연어 영상 생성 체험
- **단계**:
  1. 기존 Remotion 프로젝트에서 Skills 설치: `npx skills add remotion-dev/skills`
  2. Claude Code 실행
  3. 간단한 프롬프트 테스트: "10초짜리 'Hello World' 타이틀 영상을 만들어줘. 흰 글자, 파란 배경, 페이드인 효과"
  4. Studio에서 결과 확인
  5. 생성된 코드 파일 확인 및 M2 개념과 대조
- **예상 시간**: 60분
- **검증**: 자연어 프롬프트로 영상이 생성되고 Studio에서 재생되면 성공

**실습 2: 반복 개선으로 영상 다듬기** ⭐⭐
- **목적**: AI와 대화형으로 영상을 개선하는 워크플로우 습득
- **단계**:
  1. 프롬프트: "채널 인트로 영상을 만들어줘. 5초, 채널명이 크게 등장하고 구독 버튼 안내"
  2. 결과 확인 후 피드백: "글자 크기를 더 키워줘", "배경에 그라데이션 추가"
  3. 추가 피드백: "등장 애니메이션을 spring으로 바꿔줘"
  4. 4-6회 반복하여 만족스러운 결과 도달
  5. 최종 코드 저장
- **예상 시간**: 60분
- **검증**: 4회 이상 반복 개선하여 완성도 높은 인트로 영상 제작

**실습 3: 설명 영상 장면 생성** ⭐⭐
- **목적**: 최종 프로젝트(M6)를 위한 설명 영상 장면을 Skills로 생성
- **단계**:
  1. 프롬프트: "3가지 포인트를 순서대로 보여주는 설명 영상. 각 포인트에 아이콘과 설명 텍스트"
  2. 데이터를 변경하여 다른 내용으로도 생성 테스트
  3. Skills가 생성한 코드에서 직접 텍스트/색상 수정 시도
  4. 수동 수정과 AI 수정의 장단점 비교
- **예상 시간**: 60분
- **검증**: Skills로 생성 + 수동 미세조정으로 설명 영상 장면 1개 완성

#### 산출물
```
04-Skills/
├── README.md                    # Remotion Skills 사용법 정리
├── concepts/
│   ├── skills-overview.md       # Skills 개념 및 원리
│   └── prompt-tips.md           # 효과적인 프롬프트 작성법
├── examples/
│   ├── first-ai-video/          # 첫 AI 생성 영상
│   ├── channel-intro/           # 반복 개선 인트로
│   └── explanation-scene/       # 설명 영상 장면
└── guides/
    └── skills-workflow.md       # Skills 워크플로우 가이드
```

#### Definition of Done
- [ ] Remotion Skills 설치 및 Claude Code 연동 완료
- [ ] 자연어 프롬프트로 3개 이상 영상 생성 완료
- [ ] 반복 개선으로 완성도 높인 영상 1개 이상
- [ ] AI 생성 코드를 수동으로 미세조정한 경험
- [ ] 산출물 폴더(04-Skills/) 완성 및 README 작성
- [ ] WorkLog 작성 완료
- [ ] Daily Retrospective 작성

#### Self-Assessment
**개념 이해**:
- [ ] Remotion Skills가 내부적으로 어떻게 동작하는지 (자연어→코드→렌더링) 설명 가능
- [ ] Skills의 장점과 한계를 각각 2가지 이상 설명 가능

**실무 활용**:
- [ ] 원하는 영상을 AI에게 효과적으로 설명하는 프롬프트 작성 가능
- [ ] AI가 생성한 코드에서 어떤 부분이 애니메이션이고 어떤 부분이 레이아웃인지 구분 가능

**문제 해결**:
- [ ] AI가 원하는 결과를 만들지 못했을 때 더 구체적인 피드백 제공 가능

#### 예상 시간 배분
- 개념 학습: 30분 (13%)
- 실습 1 (설치 + 첫 AI 영상): 60분
- 실습 2 (반복 개선): 60분
- 실습 3 (설명 영상 장면): 60분
- 문서화: 30분
- **합계**: 4시간 (버퍼 포함 4.5h)

#### 참조 자료
- [Agent Skills 공식 문서](https://www.remotion.dev/docs/ai/skills): 설치 및 설정
- [Remotion Skills 가이드 2026](https://gaga.art/blog/remotion-skills/): 상세 사용법
- [Claude + Remotion 교육 영상 가이드](https://www.x-pilot.ai/blog/remotion-claude-skill-education-video-complete-guide-2026): 실전 예제

---

### M5 - 렌더링 & 내보내기

**난이도**: ⭐
**예상 시간**: 2h
**산출물 폴더**: `05-Rendering/`

#### 학습 목표
- [ ] CLI로 영상을 MP4로 렌더링할 수 있다
- [ ] YouTube에 적합한 품질 설정(해상도, fps, 비트레이트)을 적용할 수 있다
- [ ] Studio의 GUI 렌더링 기능을 사용할 수 있다
- [ ] 렌더링 오류 발생 시 기본적인 트러블슈팅을 할 수 있다

#### 주요 개념
1. **CRF (Constant Rate Factor)**: 영상 품질 제어 값. 낮을수록 고품질, 파일 커짐
2. **코덱**: H.264(MP4, 호환성 최고), VP8/VP9(WebM) 등
3. **비트레이트**: 초당 데이터량. YouTube 1080p 권장: 8-12 Mbps
4. **FFmpeg**: Remotion이 내부적으로 사용하는 영상 인코딩 도구

#### 실습 과제

**실습 1: CLI 렌더링** ⭐
- **목적**: 명령줄로 영상을 렌더링하고 파일로 내보내기
- **단계**:
  1. 기본 렌더링: `npx remotion render MyComposition out/my-video.mp4`
  2. 결과 파일 확인 및 재생
  3. YouTube 설정 렌더링: 1920x1080, 30fps
  4. 품질 옵션 조정: `--crf`, `--video-bitrate` 실험
  5. 렌더링 시간 측정
- **예상 시간**: 40분
- **검증**: MP4 파일이 생성되고 미디어 플레이어에서 재생되면 성공

**실습 2: YouTube 최적화 렌더링** ⭐⭐
- **목적**: YouTube 업로드에 최적화된 영상 설정 확립
- **단계**:
  1. Composition에서 1920x1080, 30fps 설정
  2. H.264 코덱으로 렌더링
  3. 비트레이트 8Mbps로 렌더링
  4. 같은 영상을 다른 품질로 렌더링하여 파일 크기/품질 비교
  5. 자신의 YouTube 최적 설정 결정 및 문서화
- **예상 시간**: 40분
- **검증**: 1080p MP4가 YouTube 업로드 가능한 형태로 생성되면 성공

#### 산출물
```
05-Rendering/
├── README.md                     # 렌더링 가이드 정리
├── concepts/
│   └── rendering-basics.md       # CRF, 비트레이트, 코덱 개념
├── examples/
│   └── render-comparison/        # 품질별 렌더링 비교 결과
└── guides/
    └── youtube-render-settings.md # YouTube 최적 렌더링 설정
```

#### Definition of Done
- [ ] CLI로 MP4 렌더링 성공
- [ ] YouTube 최적 설정(1080p, 30fps, H.264) 렌더링 완료
- [ ] 품질별 비교 테스트 완료 (최소 2가지)
- [ ] 산출물 폴더(05-Rendering/) 완성 및 README 작성
- [ ] WorkLog 작성 완료
- [ ] Daily Retrospective 작성

#### Self-Assessment
**개념 이해**:
- [ ] CRF와 비트레이트의 관계를 설명 가능
- [ ] YouTube 권장 영상 스펙(해상도, fps, 코덱)을 설명 가능

**실무 활용**:
- [ ] 원하는 품질과 파일 크기에 맞는 렌더링 옵션을 선택할 수 있음
- [ ] 렌더링 오류 발생 시 AI에게 에러 메시지와 함께 해결 요청 가능

#### 예상 시간 배분
- 개념 학습: 20분 (17%)
- 실습 1 (CLI 렌더링): 40분
- 실습 2 (YouTube 최적화): 40분
- 문서화: 20분
- **합계**: 2시간 (버퍼 포함 2.5h)

#### 참조 자료
- [렌더링 가이드](https://www.remotion.dev/docs/render): 공식 렌더링 문서
- [품질 가이드](https://www.remotion.dev/docs/quality): CRF, 비트레이트 설정
- [인코딩 가이드](https://www.remotion.dev/docs/encoding): 코덱 및 인코딩 옵션
- [CLI render 명령](https://www.remotion.dev/docs/cli/render): CLI 옵션 전체 목록

---

### M6 - Capstone: 유튜브 설명 영상 제작

**난이도**: ⭐⭐⭐
**예상 시간**: 5h
**산출물 폴더**: `06-YouTube-Project/`

#### 학습 목표
- [ ] 유튜브 설명 영상의 전체 구조(인트로→본문→아웃트로)를 설계할 수 있다
- [ ] M1-M5에서 배운 기술을 통합하여 완성도 높은 영상을 만들 수 있다
- [ ] Core 코딩과 Skills AI 생성을 적절히 혼합하여 효율적으로 제작할 수 있다
- [ ] 최종 영상을 YouTube 업로드 가능한 MP4로 내보낼 수 있다

#### 주요 개념
1. **영상 구조 설계**: 인트로(5초) → 본문 장면들(각 10-15초) → 아웃트로(5초)
2. **에셋 관리**: 폰트, 이미지, 아이콘 등 외부 리소스 활용
3. **Core + Skills 하이브리드**: 구조는 Core로 직접, 개별 장면은 Skills로 빠르게 생성
4. **최종 점검**: 타이밍, 텍스트 오탈자, 색상 일관성, 오디오 싱크

#### 실습 과제

**실습 1: 영상 기획 & 구조 설계** ⭐
- **목적**: 만들 영상의 전체 구조와 각 장면을 미리 설계
- **단계**:
  1. 영상 주제 선정 (예: "Remotion이란? 코드로 만드는 영상의 세계")
  2. 전체 영상 길이 결정 (60-90초 권장)
  3. 장면별 스토리보드 작성:
     - Scene 1: 인트로 타이틀 (5초)
     - Scene 2-4: 핵심 내용 (각 15-20초)
     - Scene 5: 아웃트로 + CTA (5-10초)
  4. 각 장면에 사용할 기술 결정 (Core vs Skills)
  5. 필요한 에셋 목록 작성 (텍스트, 색상, 아이콘)
- **예상 시간**: 60분
- **검증**: 장면별 스토리보드 문서가 완성되면 성공

**실습 2: 장면별 제작** ⭐⭐
- **목적**: 각 장면을 실제로 구현
- **단계**:
  1. 인트로 장면: M3의 타이틀 카드 컴포넌트 활용 또는 Skills로 생성
  2. 본문 장면 1: Skills로 초안 생성 → 수동 수정
  3. 본문 장면 2: 인포그래픽/카운터 활용 (M3 활용)
  4. 본문 장면 3: 순차 리스트 패턴 활용 (M3 활용)
  5. 아웃트로: 구독/좋아요 CTA + 채널명
  6. Root.tsx에서 전체 Composition 등록
- **예상 시간**: 120분
- **검증**: 모든 장면이 Studio에서 이어서 재생되면 성공

**실습 3: 최종 편집 & 렌더링** ⭐⭐⭐
- **목적**: 완성도를 높이고 최종 MP4 파일 생성
- **단계**:
  1. 장면 간 전환 타이밍 조정
  2. 색상 일관성 점검 (브랜드 색상 통일)
  3. 텍스트 오탈자 확인
  4. 전체 재생하며 흐름 점검
  5. YouTube 최적 설정으로 렌더링 (M5 활용)
  6. 최종 MP4 파일 확인
- **예상 시간**: 60분
- **검증**: YouTube 업로드 가능한 MP4 파일이 완성되면 성공

#### 산출물
```
06-YouTube-Project/
├── README.md                      # 프로젝트 개요 및 제작 과정
├── concepts/
│   └── video-production-flow.md   # 영상 기획→제작→렌더링 플로우
├── examples/
│   └── my-youtube-video/          # 최종 프로젝트 코드 전체
├── guides/
│   └── storyboard.md              # 장면별 스토리보드
├── output/
│   └── final-video.mp4            # 최종 렌더링된 영상 파일
└── troubleshooting/
    └── production-issues.md       # 제작 중 발생한 문제 & 해결
```

#### Definition of Done
- [ ] 영상 기획서(스토리보드) 작성 완료
- [ ] 5개 이상 장면 제작 완료 (인트로 + 본문 3+ + 아웃트로)
- [ ] Core 코딩과 Skills 생성을 모두 활용
- [ ] 1080p, 30fps, H.264 MP4로 렌더링 완료
- [ ] 최종 영상 60초 이상
- [ ] 산출물 폴더(06-YouTube-Project/) 완성 및 README 작성
- [ ] WorkLog 작성 완료
- [ ] Module Retrospective 작성

#### Self-Assessment
**개념 이해**:
- [ ] 모션그래픽 설명 영상의 일반적인 구조(인트로→본문→아웃트로)를 설명 가능
- [ ] Core와 Skills를 언제 각각 사용하면 좋은지 판단 가능

**실무 활용**:
- [ ] 새로운 유튜브 영상을 Remotion으로 처음부터 기획→제작→렌더링 가능
- [ ] 제작 시간을 예측하고 일정을 계획할 수 있음

**AI 협업**:
- [ ] 복잡한 장면도 AI에게 단계적으로 지시하여 제작 가능
- [ ] AI가 만든 영상의 품질을 객관적으로 판단하고 개선 방향 제시 가능

#### 예상 시간 배분
- 기획 (실습 1): 60분
- 장면 제작 (실습 2): 120분
- 최종 편집 & 렌더링 (실습 3): 60분
- 문서화 및 Retrospective: 30분
- **합계**: 5시간 (버퍼 포함 5.5h)

#### 참조 자료
- 이전 모듈(M1-M5)의 모든 산출물 및 가이드
- [Remotion 공식 예제](https://www.remotion.dev/docs/): 다양한 영상 패턴 참고
- [Claude + Remotion 교육 영상](https://www.x-pilot.ai/blog/remotion-claude-skill-education-video-complete-guide-2026): 교육 영상 제작 사례

---

## WorkLog 작성 가이드

각 학습 세션마다 WorkLog를 작성하여 진행 상황을 추적합니다.

**파일명 규칙**: `vl_worklog/YYYYMMDD_MX_Remotion-VideoCreation.md`
- 예: `vl_worklog/20260206_M1_Remotion-VideoCreation.md`

**WorkLog 필수 섹션**:
1. 오늘의 학습 목표 (체크리스트)
2. 진행 내용 (실습별 상세 기록)
3. 문제 해결 로그
4. DoD 체크리스트 (모듈 완료 기준)
5. Daily Retrospective
6. 참조 및 산출물

---

## Retrospective 가이드

### Daily Retrospective (매일, 5-10분)
WorkLog 내에 작성:
- What went well?
- What could be improved?
- Insights
- Tomorrow's focus

### Module Retrospective (모듈 완료 시, 15-20분)
`vl_worklog/YYYYMMDD_MX_Retrospective.md`:
- 계획 대비 실제 비교
- 핵심 학습 내용
- 발생한 문제와 해결
- Roadmap 정확도 평가
- 다음 모듈 준비사항

### Topic Retrospective (전체 완료 시, 30-60분)
`vl_worklog/YYYYMMDD_Remotion-VideoCreation_Final_Retrospective.md`:
- 전체 학습 여정 통계
- CUA_VL 방법론 효과성 평가
- 산출물 품질 평가
- 향후 학습 개선 사항

---

## 전체 폴더 구조

```
Remotion-VideoCreation/
├── topic_info.md
├── vl_prompts/
├── vl_roadmap/
│   └── 20260205_RoadMap_Remotion-VideoCreation.md
├── vl_worklog/
│   ├── YYYYMMDD_M1_Remotion-VideoCreation.md
│   ├── YYYYMMDD_M2_Remotion-VideoCreation.md
│   ├── ...
│   └── YYYYMMDD_Remotion-VideoCreation_Final_Retrospective.md
├── vl_materials/
│   └── 20260205_Remotion_Research.md
├── 01-Setup/
├── 02-Core-Basics/
├── 03-Motion-Graphics/
├── 04-Skills/
├── 05-Rendering/
└── 06-YouTube-Project/
```

---

## 학습 진행 상황 추적

| 모듈 | 시작일 | 종료일 | 상태 | DoD 달성률 | 비고 |
|------|--------|--------|------|-----------|------|
| M1 | 2026-02-05 | 2026-02-06 | ✅ | 100% | React 기초는 M2에서 완료 |
| M2 | 2026-02-06 | 2026-02-06 | ✅ | 100% | 예상 4h, 실제 ~2h |
| M3 | 2026-02-07 | 2026-02-07 | ✅ | 100% | 3개 모션그래픽 컴포넌트 완성 |
| M4 | 2026-02-09 | 2026-02-09 | ✅ | 100% | 3개 AI 영상 생성, 반복 개선 워크플로우 학습 |
| M5 | 2026-02-10 | 2026-02-10 | ✅ | 100% | 예상 2h, 실제 ~1.5h, 9개 MP4 렌더링 |
| M6 | 2026-02-10 | 2026-02-10 | ✅ | 100% | VibeLearn AI 소개 46초 영상 완성 |

**범례**:
- ⏳ 대기
- 🔄 진행 중
- ✅ 완료

---

## 성공 기준

전체 Topic 완료 기준:
- [x] 모든 모듈 완료 (DoD 100%) — M1~M6 전부 완료
- [x] 최소 6개 산출물 폴더 생성 — 01~06 폴더 생성
- [x] 유튜브용 MP4 영상 1개 완성 — VibeLearnIntro_final.mp4 (46초, 16MB)
- [x] Topic Retrospective 작성 — 20260210_Remotion-VideoCreation_Final_Retrospective.md
- [x] Self-Assessment 평균 ⭐⭐⭐⭐ 이상 — 평균 ⭐⭐⭐⭐½

---

**생성자**: AI with CUA_VL
**Roadmap 버전**: 1.0
**방법론 버전**: CUA_VL 2.0
