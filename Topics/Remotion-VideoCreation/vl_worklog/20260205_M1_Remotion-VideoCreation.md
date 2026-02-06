# WorkLog - M1: 환경 설정 & 첫 영상

**날짜**: 2026-02-05
**Topic**: Remotion-VideoCreation
**모듈**: M1 - 환경 설정 & 첫 영상
**학습 시간**: 약 1.5시간

---

## 오늘의 학습 목표

- [x] Node.js 18+ 설치 확인
- [x] Remotion 프로젝트 생성 및 Studio 실행 성공
- [x] Hello World 영상 수정 (텍스트, 색상 변경)
- [ ] React/TypeScript 최소 기초 학습 (다음 세션으로 이동)

---

## 진행 내용

### 1. 환경 구축

**과정**:
1. Node.js 버전 확인: v22.15.0 (OK)
2. GitHub에서 template-helloworld 클론
3. `npm install`로 의존성 설치 (288 패키지, 56초)
4. `npm run dev`로 Remotion Studio 실행
5. http://localhost:3000 에서 영상 프리뷰 확인

**결과**: Remotion Studio에서 Hello World 영상 정상 재생

**메모**:
- `npx create-video@latest`는 대화형 CLI라 자동화 환경에서는 Git clone이 더 편리
- Studio는 Hot Reload 지원 - 코드 수정하면 즉시 반영

### 2. 프로젝트 구조 분석

**분석한 파일**:
- `src/Root.tsx`: Composition 2개 등록 (HelloWorld, OnlyLogo)
- `src/HelloWorld.tsx`: 메인 영상 - spring, interpolate, Sequence 모두 사용
- `src/HelloWorld/` 폴더: Logo, Title, Subtitle, Arc, Atom 컴포넌트

**핵심 발견**:
- HelloWorld.tsx 한 파일에 M2에서 배울 핵심 개념이 다 들어있음
- spring() → 로고 이동, interpolate() → 페이드인/아웃, Sequence → 장면 순서
- Props로 데이터를 외부에서 주입하는 패턴 (재사용성)

### 3. 첫 영상 수정

**수정 내용**:
| 항목 | 변경 전 | 변경 후 |
|------|---------|---------|
| 제목 텍스트 | "Welcome to Remotion" | "CatchUp AI" |
| 제목 색상 | #000000 (검정) | #FFFFFF (흰색) |
| 로고 색1 | #91EAE4 (민트) | #FF6B6B (코랄레드) |
| 로고 색2 | #86A8E7 (하늘) | #4ECDC4 (청록) |
| 배경색 | white | #1a1a2e (진한 네이비) |
| 영상 길이 | 150프레임 (5초) | 210프레임 (7초) |

**결과**: Studio에서 수정된 영상 정상 표시

### 4. 산출물 정리

- `01-Setup/` 폴더 생성
  - README.md
  - concepts/remotion-overview.md
  - guides/setup-guide.md

---

## DoD 체크리스트

- [x] Node.js 18+ 설치 완료
- [x] Remotion 프로젝트 생성 및 Studio 실행 성공
- [x] Hello World 영상 수정 (텍스트, 색상 변경) 완료
- [ ] React/TypeScript 기초 개념 정리 완료 → 다음 세션
- [x] 산출물 폴더(01-Setup/) 생성 및 README 작성
- [x] WorkLog 작성 완료
- [x] Daily Retrospective 작성

**완료율**: 6/7 (86%) - React 기초는 M2와 병행하여 학습 예정

---

## Daily Retrospective

### What went well (잘된 점)
- 환경 구축이 생각보다 빠르고 순조로웠음
- Hot Reload 덕분에 수정→확인 사이클이 즉각적
- HelloWorld.tsx 코드를 보니 M2에서 배울 내용의 실제 적용 예시를 미리 확인

### What could be improved (개선할 점)
- `npx create-video`의 대화형 CLI를 미리 알았으면 Git clone으로 바로 시작했을 것
- 코드 분석에 조금 더 시간을 들여 각 Hook의 동작을 직접 실험해보면 좋겠음

### Insights (인사이트)
- Remotion은 "영상 = React 컴포넌트"라는 단순한 모델. 웹 개발 지식이 그대로 적용됨
- durationInFrames / fps = 초 라는 공식이 Remotion의 시간 개념의 핵심
- Props 패턴으로 하나의 컴포넌트로 다양한 영상을 만들 수 있음 (재사용성)

### Tomorrow's focus (다음 집중할 것)
- interpolate()로 직접 페이드인/슬라이드 애니메이션 만들어보기 (M2 실습 1)
- spring() 파라미터(damping, mass, stiffness)를 바꿔보며 차이 체험
- Sequence로 3개 장면을 시간순으로 배치하는 연습

---

## 참조 및 산출물

**생성된 파일/폴더**:
- `my-first-video/`: Remotion 프로젝트 (Hello World 템플릿 수정)
- `01-Setup/README.md`: 모듈 개요
- `01-Setup/concepts/remotion-overview.md`: Remotion 핵심 개념
- `01-Setup/guides/setup-guide.md`: Windows 환경 설정 가이드

**참조 자료**:
- [Remotion 시작하기](https://www.remotion.dev/docs/): 공식 프로젝트 생성 가이드
- [핵심 개념](https://www.remotion.dev/docs/the-fundamentals): Composition, 프레임, 영상 속성
- [GitHub 템플릿](https://github.com/remotion-dev/template-helloworld): Hello World 원본

**다음 세션 준비사항**:
- Remotion Studio 실행 확인 (`npm run dev`)
- M2 Roadmap 확인 (interpolate, spring, Sequence)

---

**방법론**: CUA_VL (Catch Up AI Vibe Learning)
