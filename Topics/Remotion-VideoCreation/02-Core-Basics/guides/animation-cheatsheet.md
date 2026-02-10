# Remotion 애니메이션 치트시트

빠른 참조용 코드 패턴 모음.

---

## interpolate 패턴

```tsx
import { interpolate, useCurrentFrame } from "remotion";
const frame = useCurrentFrame();
```

| 효과 | 코드 |
|------|------|
| 페이드인 | `interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" })` |
| 페이드아웃 | `interpolate(frame, [90, 120], [1, 0], { extrapolateLeft: "clamp" })` |
| 슬라이드 위로 | `interpolate(frame, [0, 30], [50, 0], { extrapolateRight: "clamp" })` |
| 슬라이드 왼쪽에서 | `interpolate(frame, [0, 30], [-200, 0], { extrapolateRight: "clamp" })` |
| 확대 | `interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" })` → scale |
| 회전 | `interpolate(frame, [0, 60], [0, 360])` → rotate |

## spring 패턴

```tsx
import { spring, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
const frame = useCurrentFrame();
const { fps } = useVideoConfig();
```

| 효과 | 코드 |
|------|------|
| 톡 등장 | `spring({ frame, fps, config: { damping: 8 } })` → scale |
| 많이 바운스 | `spring({ frame, fps, config: { damping: 4 } })` |
| 부드럽게 | `spring({ frame, fps, config: { damping: 200 } })` |
| 딜레이 | `spring({ frame: frame - 30, fps })` |
| 위에서 떨어짐 | spring → `interpolate(val, [0,1], [-100, 0])` → translateY |

## Sequence 패턴

```tsx
import { Sequence } from "remotion";
```

| 패턴 | 코드 |
|------|------|
| 기본 | `<Sequence from={60}><Scene /></Sequence>` |
| 길이 제한 | `<Sequence from={0} durationInFrames={90}><Scene /></Sequence>` |
| 순차 배치 | Scene1: from=0, Scene2: from=90, Scene3: from=180 |

## 자주 쓰는 style 패턴

```tsx
// CSS transform 조합
style={{
  opacity: fadeValue,
  transform: `translateY(${y}px) scale(${s}) rotate(${r}deg)`,
}}
```

## 시간 계산

```
프레임 = 초 * fps
초 = 프레임 / fps

예: 30fps에서 3초 = 90프레임
예: 30fps에서 150프레임 = 5초
```
