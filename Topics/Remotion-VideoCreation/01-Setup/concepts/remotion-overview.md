# Remotion 개요

## Remotion이란?
React로 영상을 프로그래밍하는 오픈소스 프레임워크.

**핵심 원리**: "A video is a function of images over time."
- 각 프레임 = React 컴포넌트가 렌더링하는 하나의 화면
- FFmpeg로 프레임들을 모아 MP4/WebM 영상 생성

## 일반 영상 편집기와의 차이

| | 일반 편집기 (프리미어 등) | Remotion |
|---|---|---|
| 방식 | 드래그&드롭, 타임라인 UI | React 코드 작성 |
| 자유도 | 편집기가 제공하는 기능 내 | 웹 기술 전체 (CSS, SVG, Canvas, WebGL) |
| 대량 생산 | 하나씩 수작업 | 코드로 자동화 (500개+ 동시) |
| 버전 관리 | 프로젝트 파일 | Git으로 코드 관리 |
| AI 활용 | 제한적 | Remotion Skills로 자연어 영상 생성 |

## 영상의 4가지 필수 속성

```typescript
<Composition
  width={1920}           // 너비 (px)
  height={1080}          // 높이 (px)
  fps={30}               // 초당 프레임 수
  durationInFrames={150} // 총 프레임 수 (= 5초 at 30fps)
/>
```

**계산**: 영상 길이(초) = durationInFrames / fps

## 핵심 Hook (M2에서 상세 학습)
- `useCurrentFrame()` → 현재 프레임 번호
- `useVideoConfig()` → 영상 설정 (width, height, fps, duration)
- `interpolate()` → 프레임 → 값 매핑
- `spring()` → 물리 기반 애니메이션
