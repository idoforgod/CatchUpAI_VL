# Remotion 애니메이션 기초

## 핵심 원리

Remotion에서 모든 애니메이션은 **프레임 번호**를 기반으로 동작합니다.

```
프레임 0 → 프레임 1 → ... → 프레임 N
  ↓          ↓                   ↓
컴포넌트   컴포넌트             컴포넌트
렌더링     렌더링               렌더링
```

매 프레임마다 React 컴포넌트가 다시 렌더링되고, `useCurrentFrame()`이 반환하는 값이 달라지면서 애니메이션이 만들어집니다.

---

## 1. interpolate()

프레임 번호를 원하는 값 범위로 변환하는 함수.

### 기본 문법
```tsx
const value = interpolate(
  input,           // 입력값 (보통 frame)
  [inputMin, inputMax],   // 입력 범위
  [outputMin, outputMax], // 출력 범위
  { extrapolateLeft: "clamp", extrapolateRight: "clamp" }  // 옵션
);
```

### 주요 패턴

**페이드인**: opacity를 0에서 1로
```tsx
const opacity = interpolate(frame, [0, 30], [0, 1], {
  extrapolateRight: "clamp",
});
```

**슬라이드**: Y위치를 50에서 0으로 (아래→위)
```tsx
const translateY = interpolate(frame, [0, 30], [50, 0], {
  extrapolateRight: "clamp",
});
```

**딜레이 등장**: 20프레임 후 시작
```tsx
const opacity = interpolate(frame, [20, 50], [0, 1], {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
});
```

**페이드아웃**: 영상 끝에서 사라짐
```tsx
const fadeOut = interpolate(frame, [totalFrames - 30, totalFrames - 10], [1, 0], {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
});
```

### clamp 옵션
- `extrapolateLeft: "clamp"`: 입력 범위 이전에는 첫 출력값 유지
- `extrapolateRight: "clamp"`: 입력 범위 이후에는 마지막 출력값 유지
- 없으면: 범위 밖에서도 계속 변화 (보통 원치 않는 결과)

---

## 2. spring()

물리 기반 애니메이션. 0에서 1로 자연스럽게 변화하는 값을 생성.

### 기본 문법
```tsx
const value = spring({
  frame,
  fps,
  config: {
    damping: 10,     // 감쇠: 낮으면 바운스, 높으면 안정
    stiffness: 100,  // 강성: 높으면 빠르게 도달
    mass: 1,         // 질량: 높으면 무겁고 느림
  },
});
```

### 파라미터 효과

| damping | 효과 |
|---------|------|
| 4 | 많이 바운스 (통통 튀는 느낌) |
| 10 | 적당한 바운스 (기본) |
| 100+ | 바운스 없이 부드럽게 도달 |

### spring + interpolate 조합

spring은 0→1만 반환하므로, 다른 범위가 필요하면 interpolate와 조합:
```tsx
const springVal = spring({ frame, fps, config: { damping: 8 } });
const translateY = interpolate(springVal, [0, 1], [-100, 0]);  // 위에서 떨어지기
const scale = interpolate(springVal, [0, 1], [0, 1]);          // 커지기
```

### 딜레이 적용
```tsx
const springVal = spring({
  frame: frame - 30,  // 30프레임 딜레이
  fps,
});
```

---

## 3. interpolate vs spring 비교

| 특성 | interpolate | spring |
|------|-------------|--------|
| 출력 | 입력 범위에 비례 | 항상 0→1 |
| 느낌 | 기계적, 정밀 | 자연스러운, 물리적 |
| 제어 | 입출력 범위 직접 지정 | 물리 파라미터 조절 |
| 사용 시점 | 정확한 값이 필요할 때 | "톡" 하는 등장 효과 |
| 결합 | 단독 사용 가능 | interpolate와 함께 사용 |
