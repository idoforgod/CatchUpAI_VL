# Remotion Skills 워크플로우 가이드

## 전체 워크플로우

```
1. Skills 설치
2. 규칙 파일 학습 (선택)
3. 자연어 프롬프트로 영상 생성
4. Studio에서 확인
5. 피드백 → 재생성 (반복)
6. 수동 미세조정 (필요 시)
7. Root.tsx에 Composition 등록
```

## Step 1: Skills 설치

```bash
cd my-first-video
npx skills add remotion-dev/skills -y
```

설치 결과:
- `.agents/skills/remotion-best-practices/` 폴더에 SKILL.md + 27개 규칙 파일
- `.claude/skills/`에 심볼릭 링크 자동 생성

## Step 2: 규칙 파일 학습 (권장)

주요 규칙 파일을 읽어두면 AI와의 소통이 더 효과적입니다:

| 규칙 파일 | 핵심 내용 |
|-----------|---------|
| animations.md | 시간은 초 단위 × fps, extrapolate clamp 필수 |
| compositions.md | Zod 스키마 + defaultProps 필수 |
| timing.md | spring config: smooth/snappy/bouncy |
| sequencing.md | Series(자동 순차), Sequence layout="none" |
| transitions.md | TransitionSeries로 전환 효과 |

## Step 3: 영상 생성

Claude Code에서 자연어로 요청:

```
"5초짜리 채널 인트로를 만들어줘.
어두운 배경, 채널명 spring 등장, 구독 버튼 포함"
```

AI가 생성하는 파일:
- `src/ComponentName.tsx` (컴포넌트)
- `src/Root.tsx` 수정 (Composition 등록)

## Step 4: Studio에서 확인

```bash
npm run dev
# http://localhost:3000 에서 확인
```

- 왼쪽 사이드바에서 생성된 Composition 선택
- 재생 버튼으로 영상 확인
- Props 패널에서 텍스트/색상 실시간 편집

## Step 5: 반복 개선

결과를 보고 구체적 피드백 제공:
- "배경을 그라데이션으로 바꿔줘"
- "글자를 하나씩 등장시켜줘"
- "구독 버튼에 펄스 효과 추가"

> 3-4회 반복이 가장 효율적 (그 이상은 수동 수정이 나음)

## Step 6: 수동 미세조정

AI 생성 코드에서 직접 수정할 수 있는 부분:
- **텍스트/색상**: Props의 defaultProps 값 변경
- **타이밍**: spring config의 damping/stiffness 조정
- **크기/위치**: fontSize, width, height, gap 등 수치 조정
- **애니메이션 속도**: `frame * speed`의 speed 값 변경

## 자주 사용하는 패턴

### 패턴 1: 기본 텍스트 등장
```tsx
const fadeIn = interpolate(frame, [0, 2 * fps], [0, 1], {
  extrapolateRight: "clamp",
});
```

### 패턴 2: Spring 바운스 등장
```tsx
const bounce = spring({
  frame,
  fps,
  config: { damping: 8, stiffness: 100 },  // bouncy
});
```

### 패턴 3: 글자별 스태거 등장
```tsx
const chars = text.split("");
chars.map((char, i) => {
  const charSpring = spring({
    frame: frame - i * 2,  // 2프레임 간격
    fps,
    config: { damping: 10, stiffness: 120 },
  });
});
```

### 패턴 4: 주기적 맥동/반짝임
```tsx
const pulse = Math.sin(frame * 0.1);  // 속도 조절: 0.1
const size = interpolate(pulse, [-1, 1], [minSize, maxSize]);
```

### 패턴 5: Series로 장면 순차 배치
```tsx
<Series>
  <Series.Sequence durationInFrames={2 * fps}>
    <SceneA />
  </Series.Sequence>
  <Series.Sequence durationInFrames={3 * fps}>
    <SceneB />
  </Series.Sequence>
</Series>
```

## 트러블슈팅

| 문제 | 해결 |
|------|------|
| `npx skills add` 멈춤 | `-y` 플래그 추가 |
| CSS transition 경고 | `interpolate()` 또는 `spring()` 으로 교체 |
| 애니메이션이 갑자기 끊김 | `extrapolateRight: "clamp"` 확인 |
| Composition이 안 보임 | Root.tsx에 등록했는지 확인 |
| 프레임이 전역으로 동작 | Series.Sequence 내부의 useCurrentFrame()은 로컬 (0부터 시작) |
