# CSS-in-JS for Video (영상에서의 CSS 스타일링)

## 개요

Remotion에서는 React의 `style` prop을 사용하여 CSS-in-JS로 스타일링합니다.
일반 웹과 달리, 영상에서는 hover/click 같은 인터랙션이 없고 **프레임 기반 애니메이션**이 핵심입니다.

## 핵심 패턴

### 1. 그라데이션 배경

```tsx
<AbsoluteFill
  style={{
    background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
  }}
/>
```

- 각도(135deg)로 방향 제어
- Props로 색상을 받으면 다양한 배경 생성 가능

### 2. 텍스트 스타일링

```tsx
style={{
  fontSize: 80,
  fontWeight: "bold",
  color: "white",
  fontFamily: "Arial, sans-serif",
  textShadow: "0 4px 20px rgba(0,0,0,0.3)",
  textAlign: "center",
}}
```

- `textShadow`로 깊이감 추가
- 영상용 폰트는 시스템 폰트 또는 Google Fonts 사용

### 3. Flexbox 레이아웃

```tsx
style={{
  display: "flex",
  flexDirection: "column",
  gap: 32,
  justifyContent: "center",
  alignItems: "center",
}}
```

- 영상에서도 Flexbox로 레이아웃 구성
- **주의**: `Sequence` 안에서는 absolute positioning이 적용되므로 flex가 깨짐

### 4. 동적 스타일 (프레임 기반)

```tsx
const opacity = interpolate(frame, [0, 30], [0, 1]);
const translateY = interpolate(frame, [0, 30], [50, 0]);

style={{
  opacity,
  transform: `translateY(${translateY}px) scale(${scale})`,
}}
```

- `interpolate`/`spring` 값을 style에 바인딩하여 애니메이션 구현
- transform, opacity, width, height 등 거의 모든 CSS 속성 애니메이션 가능

## 웹 vs 영상 CSS 차이점

| 항목 | 웹 CSS | 영상 CSS (Remotion) |
|------|--------|---------------------|
| 애니메이션 | CSS transition/animation | interpolate/spring + style |
| 인터랙션 | hover, click | 없음 (프레임 기반) |
| 반응형 | media query | width/height 고정 (1920x1080) |
| 폰트 | @font-face | 번들에 포함 필요 |
| 단위 | rem, %, vh 등 | px 고정 권장 |
