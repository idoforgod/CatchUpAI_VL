# Reusable Components (재사용 가능한 컴포넌트 설계)

## 개요

모션그래픽 컴포넌트를 **데이터만 교체하면 다양한 영상에 재사용**할 수 있도록 설계하는 방법.

## 핵심: Zod 스키마 + Props

### 1. 스키마 정의

```tsx
import { z } from "zod";
import { zColor } from "@remotion/zod-types";

export const titleCardSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  gradientFrom: zColor(),  // 색상 전용 타입 → Studio에서 컬러 피커 표시
  gradientTo: zColor(),
  accentColor: zColor(),
});

type TitleCardProps = z.infer<typeof titleCardSchema>;
```

### 2. Composition 등록

```tsx
<Composition
  id="TitleCard"
  component={TitleCard}
  schema={titleCardSchema}        // 스키마 연결
  defaultProps={{                  // 기본값
    title: "제목을 입력하세요",
    subtitle: "부제목",
    gradientFrom: "#667eea",
    gradientTo: "#764ba2",
    accentColor: "#FFD700",
  }}
  durationInFrames={120}
  fps={30}
  width={1920}
  height={1080}
/>
```

### 3. 효과

- Studio 우측 Props 패널에서 **실시간 편집** 가능
- `zColor()` 사용 시 **컬러 피커** UI 제공
- CLI 렌더링 시 `--props` 플래그로 데이터 주입 가능

## 설계 원칙

### 배열 데이터 활용

```tsx
const counterSchema = z.object({
  heading: z.string(),
  stats: z.array(z.object({
    label: z.string(),
    value: z.number(),
    suffix: z.string(),
    color: z.string(),
  })),
});
```

- 배열로 정의하면 항목 수를 유연하게 변경 가능
- `map()`으로 렌더링하여 코드 중복 제거

### 서브컴포넌트 분리

```
SequentialList (메인)
├── ListItem (개별 항목)
└── SummaryScene (요약 장면)
```

- 복잡한 컴포넌트는 서브컴포넌트로 분리
- 각 서브컴포넌트는 자체 애니메이션 로직 보유

### 타이밍 설계

```tsx
const itemInterval = 30;  // 프레임 간격
const listEndFrame = 30 + items.length * itemInterval + 30;
const summaryStart = listEndFrame;
```

- 항목 수에 따라 자동으로 타이밍 계산
- `durationInFrames`도 데이터에 맞게 조정 가능
