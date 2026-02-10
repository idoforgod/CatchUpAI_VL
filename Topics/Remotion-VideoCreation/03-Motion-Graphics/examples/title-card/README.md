# TitleCard - 재사용 가능한 타이틀 카드

## 소스 코드
`my-first-video/src/TitleCard.tsx`

## 주요 기법
- Zod 스키마 + `zColor()`로 Props 정의 → Studio에서 컬러 피커 제공
- AbsoluteFill 3층 레이어링: 그라데이션 배경 → 회전 원 장식 → 텍스트
- spring으로 제목 확대 등장
- interpolate로 부제목 딜레이 페이드인+슬라이드업
- 장식 라인: spring으로 중앙에서 양쪽으로 펼쳐짐

## Props

| Prop | 타입 | 설명 |
|------|------|------|
| title | string | 메인 제목 |
| subtitle | string | 부제목 |
| gradientFrom | color | 그라데이션 시작 색상 |
| gradientTo | color | 그라데이션 끝 색상 |
| accentColor | color | 장식 라인 색상 |

## Studio에서 확인
Composition ID: `TitleCard` (120프레임, 4초)
