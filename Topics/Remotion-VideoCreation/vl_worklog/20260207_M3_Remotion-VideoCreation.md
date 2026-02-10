# WorkLog - M3: 모션그래픽 컴포넌트

**날짜**: 2026-02-07
**Topic**: Remotion-VideoCreation
**모듈**: M3 - 모션그래픽 컴포넌트
**학습 시간**: 시작 -- : -- - 종료 -- : -- (총 --시간)

---

## 오늘의 학습 목표

- [x] 타이틀 카드 컴포넌트 완성 (Props로 재사용 가능)
- [x] 숫자 카운트업 인포그래픽 완성
- [x] 순차 등장 리스트 애니메이션 완성
- [x] 3개 컴포넌트 모두 재사용 가능하게 설계

---

## 진행 내용

### 1. 타이틀 카드 컴포넌트 (TitleCard)

**목적**:
유튜브 인트로에 사용할 수 있는 재사용 가능한 타이틀 카드 제작. Props(Zod 스키마)로 제목/부제/색상을 외부에서 주입 가능하게 설계.

**과정**:
1. Zod 스키마로 Props 정의 (title, subtitle, gradientFrom, gradientTo, accentColor)
2. AbsoluteFill 3층 레이어링: 그라데이션 배경 → 회전 원형 장식 → 텍스트
3. 제목: spring 확대 등장, 부제목: 딜레이 페이드인+슬라이드업
4. 금색 장식 라인: spring으로 중앙에서 양쪽으로 펼쳐짐
5. Root.tsx에 Composition 등록 (schema + defaultProps)

**결과**:
- `my-first-video/src/TitleCard.tsx` 생성
- Studio에서 정상 재생 확인
- Props 패널에서 제목/색상 실시간 변경 가능 확인

**메모/인사이트**:
- Zod 스키마 + schema prop을 사용하면 Studio 우측 패널에서 Props를 직접 편집할 수 있음
- 레이어링(AbsoluteFill 중첩)은 배경/장식/콘텐츠를 분리하는 핵심 패턴
- `textShadow`로 텍스트에 깊이감 추가 가능

---

### 2. 숫자 카운트업 인포그래픽 (CounterInfoGraphic)

**목적**:
데이터를 시각적으로 보여주는 모션그래픽 역량 확보. Props(배열)로 데이터를 주입하여 재사용 가능하게 설계.

**과정**:
1. Zod 스키마로 Props 정의 (heading, stats 배열: label/value/suffix/color)
2. SVG 원형 프로그래스바(CircleProgress) 서브컴포넌트 구현 (stroke-dashoffset)
3. interpolate로 숫자 카운트업: frame → 0~목표값 매핑
4. 3개 stat 카드 순차 등장 (spring + 딜레이)
5. Root.tsx에 Composition 등록 (채널 성과 데이터 예시)

**결과**:
- `my-first-video/src/CounterInfoGraphic.tsx` 생성
- Studio에서 정상 재생 확인: 원형 게이지 + 숫자 카운트업 + 순차 등장
- Props 패널에서 heading, stats 배열 편집 가능

**메모/인사이트**:
- SVG stroke-dasharray/dashoffset으로 원형 프로그래스바를 간단히 구현 가능
- interpolate로 프레임→숫자 매핑 + Math.round()로 정수 표시
- 배열 데이터를 map()으로 돌리면 항목 수를 유연하게 변경 가능

---

### 3. 순차 등장 리스트 (SequentialList)

**목적**:
포인트를 하나씩 보여주는 설명 영상 패턴 학습. Props(배열)로 항목 데이터를 주입하여 재사용 가능하게 설계.

**과정**:
1. Zod 스키마로 Props 정의 (heading, items 배열: icon/text, accentColor, summary)
2. ListItem 서브컴포넌트: 아이콘 원 + 번호 + 텍스트 레이아웃
3. 각 항목 순차 등장: `frame - delay` 패턴으로 30프레임 간격 슬라이드인 + 페이드
4. 아이콘 원: spring scale-up 등장, 약간 딜레이
5. 요약 장면(SummaryScene): Sequence로 리스트 끝나면 큰 숫자 + 요약 텍스트 표시
6. Root.tsx에 Composition 등록 (schema + defaultProps: "5가지 이유" 데이터)

**결과**:
- `my-first-video/src/SequentialList.tsx` 생성
- Studio에서 정상 재생 확인: 5개 항목 순차 슬라이드인 + 요약 장면 전환
- Props 패널에서 heading, items 배열, accentColor 편집 가능

**메모/인사이트**:
- **중요**: `Sequence`는 내부적으로 `AbsoluteFill`(position: absolute)을 사용하므로, flex 레이아웃(gap, flexDirection 등)과 **호환되지 않음**
- flex 컨테이너 안에서 순차 등장을 구현하려면 `frame - delay` 패턴 사용 (Sequence 대신 delay prop으로 시점 제어)
- 리스트 장면 → 요약 장면 전환은 Sequence가 적합 (각 장면이 AbsoluteFill 기반이므로)
- spring의 `frame` 파라미터에 음수를 전달하면 아직 시작 전 상태(0)를 반환 → 딜레이 효과

---

## 문제 해결 로그

### 문제 1: SequentialList 항목이 모두 겹쳐서 표시됨

**증상**: 5개 리스트 항목이 동일한 위치에 겹쳐서 렌더링되어 읽을 수 없음

**원인**: 각 ListItem을 `<Sequence>` 컴포넌트로 감쌌는데, Sequence는 내부적으로 `AbsoluteFill`(position: absolute)을 렌더링함. 따라서 부모의 flex 레이아웃(flexDirection: column, gap: 32)이 무시되고, 모든 항목이 좌상단에 절대 위치로 겹침.

**해결**: Sequence 래퍼를 제거하고, ListItem에 `delay` prop을 추가. 애니메이션 계산에서 `frame - delay`를 사용하여 각 항목의 등장 시점을 제어. spring()에 음수 frame을 전달하면 0을 반환하므로 자연스러운 딜레이 효과가 생김.

**교훈**: Remotion의 Sequence는 장면 전환(전체 화면 교체)에는 적합하지만, 같은 화면 안에서 여러 요소를 순차 표시할 때는 `frame - delay` 패턴이 올바른 접근법.

---

## DoD 체크리스트

로드맵 M3의 Definition of Done:

- [x] 타이틀 카드 컴포넌트 완성 (Props로 데이터 변경 가능)
- [x] 숫자 카운트업 인포그래픽 완성
- [x] 순차 등장 리스트 애니메이션 완성
- [x] 3개 컴포넌트 모두 재사용 가능하게 설계
- [x] 산출물 폴더(03-Motion-Graphics/) 완성 및 README 작성
- [x] WorkLog 작성 완료
- [x] Daily Retrospective 작성

**완료율**: 7/7 (100%)

---

## Daily Retrospective

### What went well (잘된 점)
- 3개 모션그래픽 컴포넌트를 모두 완성하고, Props(Zod 스키마)로 재사용 가능하게 설계함
- TitleCard(레이어링), CounterInfoGraphic(SVG + interpolate), SequentialList(순차 등장) 각각 다른 기법을 학습
- SequentialList의 Sequence 겹침 버그를 분석하고 `frame - delay` 패턴으로 올바르게 해결

### What could be improved (개선할 점)
- WorkLog를 학습 시작 전에 생성하는 프로세스를 이번 세션에서도 놓침 → 프로세스 체크리스트 습관화 필요
- 컴포넌트 제작 후 Studio에서 직접 확인하는 과정을 더 빠르게 진행할 수 있었음

### Insights (인사이트)
- Remotion의 `Sequence`는 내부적으로 `AbsoluteFill`을 사용하므로, flex 레이아웃과 함께 쓸 수 없음 → 같은 화면 내 순차 등장에는 `frame - delay` 패턴이 정석
- Zod 스키마를 활용하면 Studio Props 패널에서 실시간 편집이 가능하여, 비개발자도 영상 커스터마이징 가능
- SVG stroke-dasharray/dashoffset은 원형 게이지를 매우 간결하게 구현하는 방법
- spring()에 음수 frame을 전달하면 0을 반환 → 딜레이 구현의 핵심 메커니즘

### Tomorrow's focus (내일 집중할 것)
- M4: Remotion Skills (AI 영상 생성) 학습 시작
- AI 기반 자연어 지시로 영상 생성하는 워크플로우 탐구

---

## 참조 및 산출물

**생성된 파일/폴더**:
- `my-first-video/src/TitleCard.tsx` - 재사용 가능한 타이틀 카드 컴포넌트
- `my-first-video/src/CounterInfoGraphic.tsx` - 숫자 카운트업 인포그래픽 컴포넌트
- `my-first-video/src/SequentialList.tsx` - 순차 등장 리스트 컴포넌트
- `my-first-video/src/Root.tsx` - 3개 Composition 등록 (수정)
- `03-Motion-Graphics/` - M3 산출물 폴더 (README, concepts, guides)

**참조 자료**:
- [Remotion 핵심 개념](https://www.remotion.dev/docs/the-fundamentals): 컴포넌트 구성 기본
- [Remotion Sequence 문서](https://www.remotion.dev/docs/sequence): Sequence 동작 원리 (AbsoluteFill 사용)
- [Zod + Remotion](https://www.remotion.dev/docs/schemas): 스키마 기반 Props 정의

**다음 세션 준비사항**:
- M4 (Remotion Skills) 학습을 위해 Remotion Skills 기능 사전 조사
- 자연어 → 영상 생성 워크플로우 이해

---

**방법론**: CUA_VL (Catch Up AI Vibe Learning)
