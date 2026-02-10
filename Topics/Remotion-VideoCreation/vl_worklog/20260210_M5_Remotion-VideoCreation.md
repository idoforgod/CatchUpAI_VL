# WorkLog - M5: 렌더링 & 내보내기

**날짜**: 2026-02-10
**Topic**: Remotion-VideoCreation
**모듈**: M5 - 렌더링 & 내보내기
**학습 시간**: 약 1.5시간

---

## 오늘의 학습 목표

- [x] CLI로 영상을 MP4로 렌더링할 수 있다
- [x] YouTube에 적합한 품질 설정(해상도, fps, 비트레이트)을 적용할 수 있다
- [x] Studio의 GUI 렌더링 기능을 사용할 수 있다
- [x] 렌더링 오류 발생 시 기본적인 트러블슈팅을 할 수 있다

---

## 진행 내용

### 1. CLI 렌더링 기초

**목적**:
명령줄로 영상을 렌더링하고 MP4 파일로 내보내기

**과정**:
1. FFmpeg 설치 확인 (`ffmpeg -version`)
2. `out/` 출력 디렉토리 생성
3. HelloWorld 기본 렌더링: `npx remotion render HelloWorld out/HelloWorld.mp4`
4. ChannelIntro 기본 렌더링 (M4 산출물)
5. CRF 품질 비교: CRF 18 (고품질), CRF 28 (저품질)
6. 비트레이트 지정: `--video-bitrate="8M"` (YouTube 권장)
7. ExplanationScene 기본 렌더링

**결과**:
- HelloWorld: 2.2 MB (210프레임, 7초)
- ChannelIntro: 2.2 MB (기본), 2.2 MB (CRF 18), 949 KB (CRF 28), 4.8 MB (8Mbps)
- ExplanationScene: 1.1 MB (330프레임, 11초)
- 첫 렌더링 시 Chrome Headless Shell 자동 다운로드 (107.6 MB)
- Concurrency 6x로 병렬 처리, 5초 영상 약 30초에 렌더링

**메모/인사이트**:
- 첫 렌더링 시 Chrome Headless Shell 다운로드가 필요 (1회만)
- 번들링 캐시가 되므로 후속 렌더링이 빠름 ("Cached bundle" 메시지)
- 단순 모션그래픽은 CRF 18과 기본값 차이가 거의 없음 (실사 영상에서 차이 큼)
- `--video-bitrate`가 YouTube 업로드에 가장 적합 (파일 크기 예측 가능)

---

### 2. YouTube 최적화 렌더링

**목적**:
YouTube 업로드에 최적화된 영상 설정 확립 및 품질 비교

**과정**:
1. YouTube 권장 스펙 정리: 1920x1080, 30fps, H.264, 8Mbps
2. M4 영상 3개를 YouTube 최적 설정으로 렌더링:
   - `--video-bitrate="8M" --codec=h264`
3. 렌더링 결과 파일 크기 확인 및 비교

**결과**:
- ChannelIntro_youtube.mp4: 4.8 MB
- ExplanationScene_youtube.mp4: 4.2 MB
- SkillsHelloWorld_youtube.mp4: 2.9 MB
- 총 9개 MP4 파일 생성 (비교용 포함), 전체 26 MB

**메모/인사이트**:
- YouTube 최적 명령어: `npx remotion render <Id> out/<file>.mp4 --video-bitrate="8M" --codec=h264`
- 비트레이트 8M은 기본 렌더링 대비 약 2배 파일 크기 → 충분한 품질 보장
- 렌더링 워크플로우: 작업 중(기본) → 확인(CRF 18) → 최종(8Mbps) 3단계 권장

---

## 문제 해결 로그

### Chrome Headless Shell 다운로드
- **증상**: 첫 렌더링 시 "Downloading Chrome Headless Shell" 메시지와 함께 107.6 MB 다운로드
- **원인**: Remotion이 프레임 캡처에 Chrome Headless Shell을 사용하며, 최초 1회 다운로드 필요
- **해결**: 자동 다운로드 완료 후 정상 렌더링 진행. 이후 캐시되어 재다운로드 불필요

---

## DoD 체크리스트

로드맵 M5의 Definition of Done:

- [x] CLI로 MP4 렌더링 성공
- [x] YouTube 최적 설정(1080p, 30fps, H.264) 렌더링 완료
- [x] 품질별 비교 테스트 완료 (최소 2가지)
- [x] 산출물 폴더(05-Rendering/) 완성 및 README 작성
- [x] WorkLog 작성 완료
- [x] Daily Retrospective 작성

**완료율**: 6/6 (100%)

---

## Daily Retrospective

### What went well (잘된 점)
- CLI 렌더링이 매우 직관적 — 한 줄 명령어로 즉시 MP4 생성
- 품질 비교 실험으로 CRF와 비트레이트의 차이를 실감
- M4에서 만든 3개 영상 모두 문제 없이 렌더링 성공

### What could be improved (개선할 점)
- Studio GUI 렌더링은 실습하지 못함 (CLI로 충분하여 넘어감)
- 오디오 포함 렌더링은 아직 미경험 (M6에서 필요 시 시도)

### Insights (인사이트)
- **비트레이트 > CRF** (YouTube용): 비트레이트 지정이 파일 크기 예측 가능하고 YouTube에 최적
- **단순 모션그래픽은 CRF 차이 적음**: 실사/복잡한 영상에서 CRF 차이가 더 극적
- **3단계 렌더링 워크플로우**: 개발(기본) → 확인(CRF 18) → 배포(8Mbps)
- **M5는 예상보다 빠름**: 예상 2시간 → 실제 약 1.5시간 (개념이 단순)

### Tomorrow's focus (내일 집중할 것)
- M6 Capstone: 유튜브 설명 영상 제작 시작
- 영상 기획 + 스토리보드 + 장면별 제작 + 최종 렌더링

---

## 참조 및 산출물

**생성된 파일/폴더**:
- `my-first-video/out/` — 렌더링된 MP4 파일 9개
- `05-Rendering/README.md` — 모듈 개요
- `05-Rendering/concepts/rendering-basics.md` — CRF, 비트레이트, 코덱 개념
- `05-Rendering/guides/youtube-render-settings.md` — YouTube 최적 설정 가이드
- `05-Rendering/examples/render-comparison/comparison-notes.md` — 품질 비교 결과

**참조 자료**:
- [렌더링 가이드](https://www.remotion.dev/docs/render): 공식 렌더링 문서
- [품질 가이드](https://www.remotion.dev/docs/quality): CRF, 비트레이트 설정
- [CLI render 명령](https://www.remotion.dev/docs/cli/render): CLI 옵션 전체 목록

**다음 세션 준비사항**:
- M6 Capstone 시작
- 영상 주제 선정
- 기존 컴포넌트 재활용 계획 수립

---

**방법론**: CUA_VL (VibeLearn AI)
