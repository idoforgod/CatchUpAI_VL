# Remotion 조사 자료

**조사일**: 2026-02-05
**목적**: Roadmap 생성을 위한 Remotion 기술 조사

---

## 1. Remotion이란?

Remotion은 **React로 영상을 프로그래밍하는 오픈소스 프레임워크**입니다.

**핵심 원리**: "A video is a function of images over time."
- 프레임 번호를 입력받으면, React 컴포넌트가 해당 프레임의 화면을 렌더링
- 각 프레임이 React 컴포넌트이므로 CSS, Canvas, SVG, WebGL 등 웹 기술 모두 활용 가능
- FFmpeg로 프레임들을 결합하여 MP4/WebM 영상 생성

**공식 사이트**: https://www.remotion.dev/
**GitHub**: https://github.com/remotion-dev/remotion

---

## 2. Remotion Core 핵심 개념

### 2.1 영상의 4가지 필수 속성
- **width**: 영상 너비 (픽셀)
- **height**: 영상 높이 (픽셀)
- **durationInFrames**: 총 프레임 수
- **fps**: 초당 프레임 수

### 2.2 핵심 컴포넌트 & Hook

| 개념 | 설명 |
|------|------|
| **Composition** | React 컴포넌트 + 영상 메타데이터의 조합. `src/Root.tsx`에서 등록 |
| **useCurrentFrame()** | 현재 프레임 번호를 반환하는 Hook. 이것으로 애니메이션 구현 |
| **useVideoConfig()** | 영상의 width, height, fps, durationInFrames 반환 |
| **interpolate()** | 값을 다른 범위로 매핑하는 헬퍼 (예: 프레임 0-30 → opacity 0-1) |
| **spring()** | 물리 기반 애니메이션 (자연스러운 튕김 효과, 0→1) |
| **Sequence** | 자식 컴포넌트의 시간을 이동시키는 컴포넌트. from prop으로 시작 프레임 지정 |
| **AbsoluteFill** | 화면 전체를 채우는 레이아웃 컨테이너 |

### 2.3 프로젝트 구조
```
my-video/
├── src/
│   ├── Root.tsx          # Composition 등록 (진입점)
│   ├── HelloWorld.tsx    # 영상 컴포넌트
│   └── ...
├── package.json
└── remotion.config.ts    # 설정 파일
```

**참조**: https://www.remotion.dev/docs/the-fundamentals

---

## 3. Remotion Skills (2026년 1월 출시)

### 3.1 개요
자연어로 영상을 설명하면 AI가 React/TypeScript 코드를 자동 생성하고 Remotion이 렌더링하는 기능.

**워크플로우**: 사용자(자연어) → AI Agent(코드 생성) → Remotion(렌더링) → MP4

### 3.2 설치 방법
```bash
# 1. Remotion 프로젝트 생성
npx create-video@latest my-video
cd my-video

# 2. Agent Skills 설치
npx skills add remotion-dev/skills

# 3. 개발 서버 시작
npm run dev
# http://localhost:3000 에서 Remotion Studio 접근
```

### 3.3 지원 AI 도구
- Claude Code
- Codex CLI
- Cursor

### 3.4 실제 워크플로우 타임라인
- 프롬프트 작성: 2-3분
- 초기 생성: 5-10초
- 프리뷰 & 반복 수정: 5-10분 (보통 4-6회 대화)
- 최종 렌더링: 1-3분
- **30초 영상 완성까지 총 약 10-15분**

### 3.5 프롬프트 예시
```
"Create a 10-second title animation. The title reads 'Welcome to AI Video'
with large white text on a dark blue background. Add a fade-in effect where
the text slides up from the bottom."
```

### 3.6 Skills가 잘하는 것
- 구조화된 데이터 기반 대량 영상 생성 (500+개)
- 데이터 시각화, 애니메이션 차트
- 템플릿 기반 콘텐츠 (변수 데이터)
- 버전 관리가 필요한 프로젝트
- API/데이터베이스 연동 영상

### 3.7 Skills의 한계
- 기존 영상 편집 불가 (실사 영상 편집 X)
- 복잡한 오디오 믹싱 어려움
- 드래그&드롭 방식의 실시간 편집 불가
- 복잡한 장면은 렌더링 리소스 많이 소모

**참조**:
- https://www.remotion.dev/docs/ai/skills
- https://gaga.art/blog/remotion-skills/

---

## 4. 영상 렌더링 & 내보내기

### 4.1 렌더링 명령어
```bash
# 기본 렌더링
npx remotion render HelloWorld

# 출력 경로 지정
npx remotion render HelloWorld out/my-video.mp4
```

### 4.2 렌더링 방법
- **Remotion Studio**: GUI에서 렌더 버튼 클릭
- **CLI**: `npx remotion render` 명령어
- **SSR (Server-Side)**: Node.js API
- **클라우드**: AWS Lambda, Google Cloud Run

### 4.3 품질 설정
| 설정 | 설명 | 기본값 |
|------|------|--------|
| CRF (Constant Rate Factor) | 품질 제어, 낮을수록 고품질 | codec별 상이 |
| --video-bitrate | 영상 비트레이트 | 자동 |
| --audio-bitrate | 오디오 비트레이트 | 자동 |
| --jpeg-quality | JPEG 품질 (0-100) | 80 |
| --image-format | 프레임 포맷 (jpeg/png) | jpeg |

### 4.4 출력 형식
- MP4 (기본)
- WebM
- GIF
- 오디오만 (audio only)
- 이미지 시퀀스 (--sequence)
- 정지 이미지 (still)
- 투명 영상 (오버레이용)

### 4.5 YouTube 권장 설정 (일반적)
- 해상도: 1920x1080 (Full HD) 또는 3840x2160 (4K)
- FPS: 30 또는 60
- 코덱: H.264 (MP4)
- 비트레이트: 8-12 Mbps (1080p), 35-68 Mbps (4K)

**참조**: https://www.remotion.dev/docs/render

---

## 5. 라이선스

- **무료**: 개인 개발자, 비영리 조직, 3명 이하 기업
- **유료**: 4명 이상 기업은 상업 라이선스 필요

**참조**: https://www.remotion.pro/license

---

## 6. 학습 참고 자료 목록

### 공식 문서
- [Remotion 시작하기](https://www.remotion.dev/docs/)
- [핵심 개념](https://www.remotion.dev/docs/the-fundamentals)
- [애니메이션](https://www.remotion.dev/docs/animating-properties)
- [Sequence](https://www.remotion.dev/docs/sequence)
- [spring()](https://www.remotion.dev/docs/spring)
- [렌더링](https://www.remotion.dev/docs/render)
- [Agent Skills](https://www.remotion.dev/docs/ai/skills)
- [품질 가이드](https://www.remotion.dev/docs/quality)
- [인코딩 가이드](https://www.remotion.dev/docs/encoding)

### 튜토리얼 & 블로그
- [Remotion Skills 가이드 2026](https://gaga.art/blog/remotion-skills/)
- [Claude + Remotion 교육 영상 가이드](https://www.x-pilot.ai/blog/remotion-claude-skill-education-video-complete-guide-2026)
- [Claude Code + Remotion](https://dev.to/mayu2008/new-clauderemotion-to-create-amazing-videos-using-ai-37bp)
- [Remotion 초보자 가이드](https://www.clipcat.com/blog/create-videos-programmatically-using-react-a-beginners-guide-to-remotion/)
- [모션그래픽 개발자 가이드](https://tekkix.com/articles/ai/2026/02/motion-graphics-for-developers-remotion-skill)
