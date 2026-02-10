# 렌더링 품질 비교 메모

**테스트 대상**: ChannelIntro (5초, 1920x1080, 30fps, 150프레임)
**테스트 일시**: 2026-02-10

## 비교 결과

| 파일명 | 설정 | 크기 | 비고 |
|--------|------|------|------|
| ChannelIntro.mp4 | 기본 | 2.2 MB | Remotion 기본값 (CRF 23 추정) |
| ChannelIntro_crf18.mp4 | CRF 18 | 2.2 MB | 고품질이나 단순 장면이라 차이 미미 |
| ChannelIntro_crf28.mp4 | CRF 28 | 949 KB | 눈에 띄는 화질 저하 (테스트용) |
| ChannelIntro_bitrate8M.mp4 | 8Mbps | 4.8 MB | YouTube 최적 설정 |
| ChannelIntro_youtube.mp4 | 8Mbps+H.264 | 4.8 MB | 최종 YouTube 업로드용 |

## 관찰

1. **단순 모션그래픽은 CRF 차이가 적음**: CRF 18과 기본값의 파일 크기가 동일
2. **비트레이트 지정이 YouTube에 가장 적합**: 파일 크기 예측 가능, 일정한 품질
3. **CRF 28은 테스트/미리보기 용도**: 렌더링 빠르고 파일 작지만 화질 열화
4. **렌더링 시간**: 5초 영상 기준 약 30초 (6x 동시 처리)
