# WorkLog - M2: Remotion Core 기초

**날짜**: 2026-02-06
**Topic**: Remotion-VideoCreation
**모듈**: M2 - Remotion Core 기초
**학습 시간**: 약 2시간

---

## 오늘의 학습 목표

- [x] interpolate()로 페이드인/슬라이드 애니메이션 구현
- [x] spring()으로 바운스 애니메이션 구현 + 파라미터 비교
- [x] Sequence로 3개 이상 장면 배치
- [x] React/TS 기초 개념을 Remotion 코드 수준으로 이해 (M1 미완료 항목)

---

## 진행 내용

### 1. React/TypeScript 최소 기초 학습

**목적**: Remotion 코드를 읽고 수정할 수 있는 최소한의 React 지식 확보

**과정**:
1. HelloWorld.tsx 코드를 분석하며 React 핵심 4가지 학습:
   - 컴포넌트 = UI를 반환하는 함수 (`React.FC`)
   - Props = 외부에서 데이터 전달 (`{ titleText, titleColor }`)
   - Hook = 특별한 기능 사용 (`useCurrentFrame`, `useVideoConfig`)
   - JSX = HTML 유사 문법으로 UI 작성
2. TypeScript 기초: 타입 선언, Zod 스키마

**결과**: HelloWorld.tsx의 모든 코드를 이해할 수 있는 수준 도달

---

### 2. interpolate 실습 (FadeInText 컴포넌트)

**목적**: 프레임 기반 애니메이션 원리 체득

**과정**:
1. `FadeInText.tsx` 컴포넌트 생성
2. 4가지 interpolate 패턴 구현:
   - 페이드인: frame [0,30] → opacity [0,1]
   - 슬라이드업: frame [0,30] → translateY [50,0]
   - 딜레이 등장: frame [20,50] → 부제목 등장
   - 페이드아웃: 끝 30프레임에서 전체 사라짐
3. 디버깅용 프레임 카운터 표시
4. Root.tsx에 Composition 등록

**결과**: Studio에서 텍스트가 부드럽게 등장하고 사라지는 애니메이션 확인

**메모/인사이트**:
- `extrapolateLeft/Right: "clamp"`는 거의 항상 사용해야 함 (없으면 값이 범위 밖으로 나감)
- 프레임 카운터를 화면에 표시하면 디버깅이 매우 편리

---

### 3. spring 실습 (SpringBounce 컴포넌트)

**목적**: 자연스러운 물리 기반 모션 구현 + 파라미터 이해

**과정**:
1. `SpringBounce.tsx` 컴포넌트 생성
2. 3개 박스로 damping 파라미터 비교:
   - damping: 10 → 적당한 바운스
   - damping: 4 → 많이 튕김 (15프레임 딜레이)
   - damping: 200 → 바운스 없이 부드럽게 (30프레임 딜레이)
3. 타이틀: spring + interpolate 조합 (위에서 떨어지기)
4. Root.tsx에 등록

**결과**: 3개 박스의 바운스 차이가 시각적으로 명확하게 구분됨

**메모/인사이트**:
- spring은 항상 0→1만 반환 → 다른 범위가 필요하면 interpolate와 조합
- `frame: frame - N`으로 간단히 딜레이 적용 가능
- damping이 실제로 어떤 "느낌"을 주는지 직접 보는 게 중요

---

### 4. Sequence 실습 (MultiScene 컴포넌트)

**목적**: 여러 장면을 시간순으로 배치하여 완성된 영상 구조 학습

**과정**:
1. `MultiScene.tsx`에 3개 장면 컴포넌트 생성:
   - IntroScene: 인트로 타이틀 (spring 등장)
   - PointsScene: 3개 포인트 순차 등장 (spring + 딜레이 + 슬라이드)
   - OutroScene: 아웃트로 (spring + 페이드인)
2. Sequence로 3개 장면 배치:
   - Scene 1: from=0, duration=90 (3초)
   - Scene 2: from=90, duration=120 (4초)
   - Scene 3: from=210, duration=90 (3초)
3. 총 300프레임 = 10초 미니 설명 영상 완성
4. Root.tsx에 등록

**결과**: 인트로→본문→아웃트로가 자연스럽게 이어지는 설명 영상 구조 완성

**메모/인사이트**:
- Sequence 안에서 useCurrentFrame()은 0부터 시작 (매우 중요!)
- durationInFrames를 지정하면 해당 장면이 끝나면 자동으로 사라짐
- map()과 딜레이 조합으로 리스트 항목 순차 등장 패턴 구현 가능

---

### 5. 산출물 정리

- `02-Core-Basics/` 폴더 생성
  - README.md: 모듈 개요
  - concepts/animation-basics.md: interpolate, spring, Sequence 개념 정리
  - guides/animation-cheatsheet.md: 빠른 참조용 코드 패턴

---

## DoD 체크리스트

- [x] interpolate로 페이드인/슬라이드 애니메이션 구현 완료
- [x] spring으로 바운스 애니메이션 구현 완료
- [x] Sequence로 3개 이상 장면 배치 완료
- [x] 각 예제 코드 저장 및 README 작성
- [x] 산출물 폴더(02-Core-Basics/) 완성
- [x] WorkLog 작성 완료
- [x] Daily Retrospective 작성

**완료율**: 7/7 (100%)

---

## Daily Retrospective

### What went well (잘된 점)
- 3개 핵심 API를 모두 실습으로 체득함 (이론만이 아닌 직접 코딩)
- 예상(4h)보다 빠르게(~2h) 완료 - HelloWorld.tsx 사전 분석이 큰 도움
- 각 실습이 점진적으로 복잡해지면서 자연스럽게 개념이 쌓였음
- MultiScene에서 M1~M2의 모든 개념을 통합하여 "미니 설명 영상" 구조를 만들 수 있었음

### What could be improved (개선할 점)
- Easing 커브(ease-in, ease-out)를 interpolate에 적용하는 것은 아직 실습 안 함
- 장면 전환 효과(크로스페이드 등)를 시도해볼 수 있었을 것
- 실습 코드에 한국어 텍스트를 사용했는데, 폰트 설정 없이 기본 폰트 사용 - 나중에 커스텀 폰트 설정 필요

### Insights (인사이트)
- Remotion의 애니메이션은 결국 "프레임 → 숫자 → CSS 속성" 변환의 반복
- spring + interpolate 조합이 가장 활용도가 높음 (자연스러운 모션 + 정확한 범위)
- Sequence의 로컬 시간 개념은 장면 재사용에 핵심 - 같은 장면을 다른 from 값에 배치하면 됨
- PointsScene의 map() + delay 패턴은 M3 순차 리스트 실습에 바로 활용 가능

### Tomorrow's focus (내일 집중할 것)
- M3 실습 1: 타이틀 카드 컴포넌트 (Props로 재사용 가능하게)
- M3 실습 2: 숫자 카운트업 인포그래픽
- CSS-in-JS 스타일링 심화 (그라데이션, 레이어링)

---

## 참조 및 산출물

**생성된 파일/폴더**:
- `my-first-video/src/FadeInText.tsx`: interpolate 실습 컴포넌트
- `my-first-video/src/SpringBounce.tsx`: spring 실습 컴포넌트
- `my-first-video/src/MultiScene.tsx`: Sequence 실습 컴포넌트 (3장면)
- `my-first-video/src/Root.tsx`: 3개 새 Composition 등록
- `02-Core-Basics/README.md`: 모듈 개요
- `02-Core-Basics/concepts/animation-basics.md`: 애니메이션 개념 정리
- `02-Core-Basics/guides/animation-cheatsheet.md`: 빠른 참조 치트시트

**참조 자료**:
- [interpolate 공식 문서](https://www.remotion.dev/docs/animating-properties): 값 변환 API
- [spring 공식 문서](https://www.remotion.dev/docs/spring): 물리 기반 애니메이션
- [Sequence 공식 문서](https://www.remotion.dev/docs/sequence): 장면 시간 배치

**다음 세션 준비사항**:
- M3 Roadmap 확인 (타이틀 카드, 인포그래픽, 순차 리스트)
- Props를 활용한 재사용 컴포넌트 설계 방법 생각해보기

---

**방법론**: CUA_VL (Catch Up AI Vibe Learning)
