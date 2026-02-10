# SequentialList - 순차 등장 리스트

## 소스 코드
`my-first-video/src/SequentialList.tsx`

## 주요 기법
- `frame - delay` 패턴으로 flex 레이아웃 안에서 순차 등장 구현
- Sequence는 **장면 전환**(리스트 → 요약)에만 사용
- 아이콘 원: spring scale-up 등장 (약간 딜레이)
- 번호(`padStart(2, "0")`) + 텍스트 조합 레이아웃
- 요약 장면: 큰 숫자 + 요약 텍스트, spring으로 확대 등장

## Props

| Prop | 타입 | 설명 |
|------|------|------|
| heading | string | 리스트 제목 |
| items | array | 항목 배열 (icon, text) |
| accentColor | string | 강조 색상 |
| summary | string | 요약 장면 텍스트 |

## 주의사항
- Sequence는 내부적으로 AbsoluteFill(absolute position)을 사용하므로, flex 레이아웃 안에서 개별 항목을 Sequence로 감싸면 겹침 발생
- 같은 화면 내 순차 등장에는 `frame - delay` 패턴 사용

## Studio에서 확인
Composition ID: `SequentialList` (300프레임, 10초)
