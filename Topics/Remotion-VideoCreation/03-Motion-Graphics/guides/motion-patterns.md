# Motion Patterns (자주 쓰는 모션 패턴 모음)

## 1. 등장 패턴

### 페이드인 (Fade In)

```tsx
const opacity = interpolate(frame, [0, 30], [0, 1], {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
});
```

### 스케일 등장 (Scale In)

```tsx
const scale = spring({ frame, fps, config: { damping: 12, stiffness: 80 } });
// scale: 0 → 1 (바운스 포함)
```

### 슬라이드인 (Slide In)

```tsx
const translateX = interpolate(springValue, [0, 1], [-300, 0]);
const opacity = interpolate(springValue, [0, 0.4], [0, 1], {
  extrapolateRight: "clamp",
});
```

### 딜레이 등장 (Delayed Entrance)

```tsx
// spring의 frame에서 딜레이를 빼면, 음수 frame → 0 반환 → 딜레이 효과
const delayedSpring = spring({
  frame: frame - 30,  // 30프레임(1초) 딜레이
  fps,
  config: { damping: 12, stiffness: 80 },
});
```

## 2. 퇴장 패턴

### 페이드아웃 (Fade Out)

```tsx
const fadeOut = interpolate(
  frame,
  [durationInFrames - 20, durationInFrames - 5],
  [1, 0],
  { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
);
```

## 3. 순차 등장 패턴

### frame-delay 패턴 (flex 레이아웃 호환)

```tsx
// 부모: flex container
{items.map((item, index) => (
  <ListItem
    key={index}
    delay={30 + index * 30}  // 30프레임 간격
    {...item}
  />
))}

// 자식: delay를 사용한 애니메이션
const itemSpring = spring({
  frame: frame - delay,
  fps,
  config: { damping: 14, stiffness: 100 },
});
```

### Sequence 패턴 (장면 전환용)

```tsx
<Sequence from={0} durationInFrames={listEndFrame}>
  {/* 리스트 장면 */}
</Sequence>
<Sequence from={listEndFrame}>
  {/* 요약 장면 */}
</Sequence>
```

**주의**: Sequence는 내부적으로 AbsoluteFill을 사용하므로, flex 레이아웃 안에서 사용하면 겹침 발생.

## 4. 숫자 카운트업 패턴

```tsx
const currentValue = interpolate(
  frame,
  [startFrame, endFrame],
  [0, targetValue],
  { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
);
// Math.round()로 정수 표시
<span>{Math.round(currentValue)}</span>
```

## 5. SVG 원형 게이지 패턴

```tsx
const circumference = 2 * Math.PI * radius;
const offset = circumference * (1 - progress);

<circle
  strokeDasharray={circumference}
  strokeDashoffset={offset}
  strokeLinecap="round"
/>
```

## 6. 레이어링 패턴

```tsx
<AbsoluteFill>
  {/* 레이어 1: 배경 */}
  <AbsoluteFill style={{ background: "..." }} />
  {/* 레이어 2: 장식 */}
  <AbsoluteFill style={{ ... }}>
    <div style={{ borderRadius: "50%", ... }} />
  </AbsoluteFill>
  {/* 레이어 3: 콘텐츠 */}
  <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
    <h1>Title</h1>
  </AbsoluteFill>
</AbsoluteFill>
```

## 패턴 선택 가이드

| 상황 | 추천 패턴 |
|------|-----------|
| 단일 요소 등장 | spring 스케일 또는 페이드인 |
| 같은 화면 내 순차 등장 | frame-delay 패턴 |
| 장면 전환 | Sequence 패턴 |
| 데이터 시각화 | interpolate 카운트업 + SVG 게이지 |
| 배경 효과 | AbsoluteFill 레이어링 |
| 마지막 퇴장 | 전체 래퍼에 fadeOut |
