# Topic Starter: Claude Skills

**작성일**: 2026-01-04
**방법론**: CUA_VL v2.0

---

## 📌 Topic 기본 정보

**Topic 이름**: Claude-Skills

**설명**:
Claude Skills의 기본 개념을 이해하고, 3개의 실전 Skill을 직접 개발하여 실무에 활용하는 것을 목표로 하는 Output 중심 학습

**학습 목적**:
- Claude Skills가 무엇인지, CUA_VL 방법론을 Skill로 만드는 것이 적합한지 판단할 수 있는 지식 습득
- 3개의 실전 Skill을 직접 개발하여 업무 효율성 향상

**예상 기간**: 2-3주
- 1주차: Claude Skills 기본 개념 학습 + Skill A 개발
- 2주차: Skill B 개발
- 3주차: Skill C 개발 (복잡도에 따라 조정 가능)

---

## 🎯 학습 목표

### 핵심 목표 (Output 중심)
- [x] **Skill A**: CUA_VL 방법론을 Claude Skill로 만들기 (또는 GitHub 배포가 더 적합한지 판단)
- [ ] **Skill B**: 영어 YouTube 영상을 한국어 MD 파일로 정리하는 Skill 개발
- [ ] **Skill C**: 영상 편집 자동화 Skill 개발 (무음/필러 단어 제거)

### 세부 학습 목표
- [ ] Claude Skills의 개념과 작동 원리 이해
- [ ] Skill 작성을 위한 기본 구조 파악 (manifest, 코드 구조 등)
- [ ] Claude Code와 Skills의 통합 방식 이해
- [ ] Skill 개발 → 테스트 → 배포 프로세스 이해
- [ ] CUA_VL을 Skill vs GitHub Repository로 관리하는 것의 장단점 비교 판단 능력

---

## 🛠️ 학습 환경

**운영체제**: Windows 11

**주요 도구**:
- VS Code (현재 사용 중)
- Claude Code Extension (VS Code에 설치된 것으로 추정)
- Git (버전 관리)
- Python (Skill B, C 개발에 필요할 가능성)
- Node.js/TypeScript (Skill 개발에 필요할 가능성)

**개발 언어**:
- 주로 사용: TypeScript, Python (Skill 요구사항에 따라 선택)

---

## 📚 사전 지식

**현재 수준**:
- Claude Code 사용 경험: 있음 (현재 대화 중)
- Claude Skills 경험: 전혀 없음 (처음 배우는 단계)
- Claude API 경험: 불명 (추가 확인 필요)
- 프로그래밍 경험: Python, 기타 언어 사용 가능 (YouTube 콘텐츠 제작자)

**필요한 사전 지식**:
- Claude Code 기본 사용법 (이미 보유)
- Git/GitHub 기본 (이미 보유)
- Python 기본 (이미 보유)
- TypeScript/JavaScript 기본 (필요 시 학습)

---

## 🎯 구체적인 Output (3개의 Skill)

### Skill A: CUA_VL Skill
**목적**: CUA_VL 방법론을 Claude Skill로 만들어 배포 가능성 탐색

**현재 상황**:
- CUA_VL은 현재 GitHub Repository로 관리 중
- 폴더 구조: templates/, README.md, GETTING_STARTED.md 등
- 사용자는 Repository를 다운로드하여 사용

**결정해야 할 사항**:
- Claude Skill vs GitHub Repository 중 어느 방식이 더 효율적인가?
- Skill로 만들면 어떤 장점/단점이 있는가?
- 배포 및 사용자 경험은 어떻게 달라지는가?

**예상 기능**:
- `/cua-vl start [Topic]` → topic_starter.md 작성 지원
- `/cua-vl roadmap` → Roadmap 생성
- `/cua-vl daily` → 일일 학습 계획 수립
- 기타 CUA_VL 프로세스 자동화

---

### Skill B: YouTube 영상 → 한국어 MD 정리 Skill
**목적**: 영어 YouTube 영상을 시청하고 내용을 한국어 MD 파일로 자동 정리

**배경**:
- AI Memory 360 Tour (Seattle, 2026-01-16) 행사 참가 예정
- 사전 학습을 위해 Silicon Valley 행사 YouTube 영상들을 정리하고 싶음
- 영상 링크: https://memverge.ai/memmachine/ai-memory-360-tour/november-2025/

**주요 기능**:
1. YouTube 영상 URL 입력
2. 영상 자막/음성을 텍스트로 변환
3. 내용을 한국어로 번역 및 요약
4. 구조화된 MD 파일로 저장
   - 제목, 요약, 주요 내용, 핵심 포인트 등
5. (선택) 해당 영상의 슬라이드 PDF를 MD에 통합 (복잡도에 따라 제외 가능)

**예상 사용법**:
```
/youtube-to-md [YouTube URL]
```

**출력 예시**:
```
YYYYMMDD_[영상제목]_Summary.md
```

---

### Skill C: 영상 편집 자동화 Skill
**목적**: YouTube 영상 제작 시 반복 작업(무음/필러 단어 제거) 자동화

**배경**:
- YouTube 콘텐츠 제작 시 편집에 가장 많은 시간 소요
- 단어 사이 무음 구간, "Um", "uh" 등 불필요한 부분 제거 작업이 반복적

**주요 기능**:
1. 영상 파일 입력
2. 음성 분석:
   - 단어 사이 무음 구간 감지 및 제거
   - 필러 단어 ("Um", "음", "uh", "어" 등) 감지 및 제거
3. 자동 편집된 영상 출력
4. 편집 전후 길이 비교 리포트

**예상 사용법**:
```
/edit-video [영상파일경로] --remove-silence --remove-fillers
```

**기술적 고려사항**:
- 음성 인식: Whisper API, Google Speech-to-Text 등
- 영상 편집: FFmpeg, MoviePy 등
- 필러 단어 감지: 음성 인식 + 키워드 매칭

---

## 📖 참조 자료

**공식 문서**:
- Claude Code 공식 문서 (필요 시 검색)
- Claude Skills 공식 가이드 (학습 시 탐색)
- Claude API 문서 (필요 시)

**외부 리소스**:
- AI Memory 360 Tour 페이지: https://memverge.ai/memmachine/ai-memory-360-tour/november-2025/
- 시애틀 행사 (2026-01-16): https://luma.com/vv62wfw2?tk=vUqmYM

**기존 프로젝트**:
- CUA_VL Repository: c:\AI_study\2026\CatchUpAI_VL\

---

## 💡 특별 고려사항

### 학습 철학
> **"AI 시대에는 Topic의 전반적 지식보다 구체적 Output을 만들기 위한 필요 지식만 학습"**

**이 Topic의 학습 접근**:
1. Claude Skills 기본 개념 학습 (최소한으로)
2. Skill A 개발하면서 필요한 지식 습득
3. Skill B 개발하면서 추가 지식 습득
4. Skill C 개발하면서 고급 지식 습득
5. 과정에서 필요한 내용만 깊게 파고들기

### 우선순위
1. **Skill A** (가장 중요): CUA_VL Skill vs GitHub 판단 + 실제 개발
2. **Skill B** (긴급): 2026-01-16 행사 전까지 완료 필요
3. **Skill C** (중요하지만 덜 긴급): 시간 여유 있을 때 진행

### 시간 제약
- Skill B는 **2026-01-16 이전** 완료 필요 (약 12일 남음)
- 우선순위를 고려하여 Roadmap 조정 필요

---

## ✅ Definition of Done (Topic 완료 기준)

### 필수 (Must Have)
- [ ] Skill A 개발 완료 또는 "GitHub이 더 적합"이라는 명확한 결론
- [ ] Skill B 개발 완료 및 실제 YouTube 영상 정리 테스트
- [ ] Skill C 개발 완료 및 실제 영상 편집 테스트
- [ ] 각 Skill의 사용 가이드 MD 파일 작성
- [ ] Claude Skills 개념 및 개발 프로세스 정리 문서

### 선택 (Nice to Have)
- [ ] Skill B에 슬라이드 PDF 통합 기능
- [ ] 3개 Skill을 GitHub에 공개 또는 배포
- [ ] CUA_VL 커뮤니티에 학습 결과 공유

---

## 🚀 다음 단계

1. **이 파일을 기반으로 Topic 폴더 생성 요청**
2. **Roadmap 생성**: 3개 Skill 개발 중심의 모듈 구성
3. **학습 시작**: Skill A부터 순차적으로 개발

---

**Created**: 2026-01-04
**CUA_VL Version**: 2.0
**Author**: Catch Up AI Channel
