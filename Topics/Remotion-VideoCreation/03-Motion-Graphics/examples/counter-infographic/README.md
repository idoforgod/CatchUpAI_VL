# CounterInfoGraphic - 숫자 카운트업 인포그래픽

## 소스 코드
`my-first-video/src/CounterInfoGraphic.tsx`

## 주요 기법
- SVG `stroke-dasharray`/`stroke-dashoffset`으로 원형 프로그래스바 구현
- `interpolate`로 프레임→숫자 매핑 (0 → 목표값) + `Math.round()`로 정수 표시
- 배열 데이터를 `map()`으로 렌더링하여 항목 수 유연 변경
- spring + 딜레이로 카드 순차 등장

## Props

| Prop | 타입 | 설명 |
|------|------|------|
| heading | string | 상단 헤딩 텍스트 |
| stats | array | 데이터 배열 (label, value, suffix, color) |

## Studio에서 확인
Composition ID: `CounterInfoGraphic` (180프레임, 6초)
