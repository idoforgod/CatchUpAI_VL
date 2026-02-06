# Remotion 환경 설정 가이드 (Windows)

## 사전 요구사항
- Node.js 18+ (`node --version`으로 확인)
- npm (Node.js와 함께 설치됨)

## 프로젝트 생성

### 방법 1: GitHub 템플릿 클론 (권장 - CLI 환경)
```bash
git clone https://github.com/remotion-dev/template-helloworld.git my-first-video
cd my-first-video
npm install
```

### 방법 2: create-video (대화형)
```bash
npx create-video@latest my-video
# 'Hello World' 템플릿 선택
cd my-video
npm install
```

## Remotion Studio 실행
```bash
npm run dev
```
브라우저에서 **http://localhost:3000** 열기

## Studio 화면 구성
- **왼쪽 사이드바**: 등록된 Composition 목록
- **중앙**: 영상 프리뷰
- **하단**: 타임라인 (프레임 단위 탐색)
- **오른쪽**: Props 편집 패널

## 주요 파일 수정 포인트
| 파일 | 역할 | 수정할 것 |
|------|------|----------|
| src/Root.tsx | Composition 등록 | 영상 크기, fps, 길이, defaultProps |
| src/HelloWorld.tsx | 메인 영상 | 배경색, 애니메이션 로직 |
| src/HelloWorld/Title.tsx | 제목 컴포넌트 | 폰트, 크기, 위치 |
| src/HelloWorld/Subtitle.tsx | 부제 컴포넌트 | 부제 텍스트, 스타일 |

## 트러블슈팅
- **포트 충돌**: 이미 3000번 포트 사용 중이면 다른 포트로 변경
- **npm install 에러**: `node_modules` 삭제 후 재시도
- **Hot reload 안 됨**: Studio 재시작 (`Ctrl+C` → `npm run dev`)
