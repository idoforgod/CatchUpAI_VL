# YouTube 최적 렌더링 설정 가이드

## YouTube 권장 스펙

| 항목 | 권장값 |
|------|--------|
| 해상도 | 1920 x 1080 (Full HD) |
| FPS | 30fps |
| 코덱 | H.264 |
| 비트레이트 | 8 Mbps (1080p 30fps 기준) |
| 오디오 | AAC, 128kbps 이상 |
| 컨테이너 | MP4 |

## Remotion 렌더링 명령어

### 기본 YouTube 렌더링
```bash
npx remotion render <CompositionId> out/<filename>.mp4 \
  --video-bitrate="8M" \
  --codec=h264
```

### 고품질 YouTube 렌더링
```bash
npx remotion render <CompositionId> out/<filename>.mp4 \
  --video-bitrate="12M" \
  --codec=h264
```

### YouTube Shorts (세로 영상)
```bash
# Composition에서 width=1080, height=1920으로 설정
npx remotion render <CompositionId> out/<filename>.mp4 \
  --video-bitrate="8M" \
  --codec=h264
```

## Composition 설정 (Root.tsx)

```tsx
<Composition
  id="MyYouTubeVideo"
  component={MyComponent}
  durationInFrames={30 * 60}  // 60초 = 1분
  fps={30}
  width={1920}
  height={1080}
  schema={mySchema}
  defaultProps={{ /* ... */ }}
/>
```

## 품질별 비교 결과

ChannelIntro (5초) 기준:

| 설정 | 크기 | 적합도 |
|------|------|--------|
| 기본 (CRF 23) | 2.2 MB | 일반 용도 |
| CRF 18 | 2.2 MB | 고품질 보관용 |
| 비트레이트 8M | 4.8 MB | **YouTube 업로드 최적** |
| CRF 28 | 949 KB | 미리보기/테스트용 |

## 권장 워크플로우

```
1. 작업 중: 기본 렌더링 (빠르게 확인)
   npx remotion render MyComp out/test.mp4

2. 최종 확인: CRF 18로 고품질 확인
   npx remotion render MyComp out/preview.mp4 --crf=18

3. YouTube 업로드: 비트레이트 8M
   npx remotion render MyComp out/final.mp4 --video-bitrate="8M"
```

## 유용한 CLI 옵션

| 옵션 | 설명 | 예시 |
|------|------|------|
| `--codec` | 코덱 지정 | `--codec=h264` |
| `--crf` | 품질 (0-51) | `--crf=18` |
| `--video-bitrate` | 비트레이트 | `--video-bitrate="8M"` |
| `--scale` | 해상도 배율 | `--scale=0.5` (절반 크기) |
| `--frames` | 특정 프레임만 | `--frames=0-30` (처음 1초) |
| `--concurrency` | 병렬 수 | `--concurrency=4` |
