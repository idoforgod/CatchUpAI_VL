# Claude Skills 학습 로드맵

**생성일**: 2026-01-04
**방법론**: CUA_VL (Catch Up AI Vibe Learning)
**버전**: 1.0
**학습 모드**: 2주 집중 모드 (Skill B 우선)

---

## 📚 학습 개요

### Topic 소개

Claude Skills는 Claude Code에서 사용할 수 있는 커스텀 명령어 및 자동화 기능을 만드는 방법입니다. 이 학습에서는 Claude Skills의 기본 개념을 이해하고, 3개의 실전 Skill을 직접 개발합니다.

**핵심 특징**:
- Output 중심 학습: 이론보다 실제 Skill 개발에 집중
- 구체적 목표: CUA_VL Skill, YouTube→MD Skill, 영상 편집 Skill
- 실무 적용: 학습 즉시 업무에 활용 가능한 도구 개발

### 학습 목표

**핵심 목표 (Output 중심)**:
1. ✅ **Skill A**: CUA_VL 방법론을 Claude Skill로 만들기 (또는 GitHub 배포가 더 적합한지 판단)
2. ✅ **Skill B**: 영어 YouTube 영상을 한국어 MD 파일로 정리하는 Skill 개발 (**2026-01-16 전 완료**)
3. ✅ **Skill C**: 영상 편집 자동화 Skill 개발 (무음/필러 단어 제거)

**세부 학습 목표**:
- Claude Skills의 개념과 작동 원리 이해
- Skill 작성을 위한 기본 구조 파악 (manifest, 코드 구조 등)
- Claude Code와 Skills의 통합 방식 이해
- Skill 개발 → 테스트 → 배포 프로세스 이해
- CUA_VL을 Skill vs GitHub Repository로 관리하는 것의 장단점 비교 판단 능력

### 예상 학습 기간

**총 기간**: 2주 (집중 모드)
- **1주차**: M1 + M2 + M3 (Skill B 우선 완료 - 2026-01-16 전)
- **2주차**: M4 + M5 (Skill C + 통합/배포)

**중요**: Skill B는 시애틀 AI Memory 360 Tour 행사 (2026-01-16) 참가 전까지 완료 필요

### 학습 환경

- **OS**: Windows 11
- **도구**:
  - VS Code (현재 사용 중)
  - Claude Code Extension
  - Git (버전 관리)
  - Python (Skill B, C 개발용)
  - Node.js/TypeScript (Skill 개발용, 필요 시)
- **사전 지식**:
  - 필수: Claude Code 사용 경험, Git/GitHub 기본, 프로그래밍 기본
  - 권장: TypeScript/JavaScript 기본, Claude API 이해

---

## 🗺️ 전체 로드맵 구조

| 모듈 | 모듈명 | 난이도 | 예상 시간 | 산출물 폴더 | 완료 기한 |
|------|--------|--------|----------|------------|-----------|
| M1 | Claude Skills 기본 개념 | ⭐ | 4-6h | 01-Claude-Skills-Basics/ | Day 1-2 |
| M2 | Skill A - CUA_VL Skill 개발 | ⭐⭐ | 6-8h | 02-Skill-A-CUA-VL/ | Day 3-4 |
| M3 | Skill B - YouTube→MD Skill | ⭐⭐⭐ | 10-12h | 03-Skill-B-YouTube-MD/ | **Day 5-8 (1/16 전)** |
| M4 | Skill C - 영상 편집 Skill | ⭐⭐⭐ | 8-10h | 04-Skill-C-Video-Edit/ | Day 9-12 |
| M5 | 통합, 배포 및 최종 정리 | ⭐⭐ | 4-6h | 05-Integration-Deploy/ | Day 13-14 |

**총 예상 시간**: 32-42시간 (2주, 하루 평균 2-3시간)

**학습 우선순위**:
1. **최우선**: M3 (Skill B) - 2026-01-16 전 완료
2. **중요**: M2 (Skill A) - CUA_VL 배포 방향 결정
3. **중요**: M4 (Skill C) - 장기 업무 효율성 향상
4. **선택**: M5 - 시간 여유 시 진행

---

## 📖 모듈별 상세 계획

### M1 - Claude Skills 기본 개념

**난이도**: ⭐
**예상 시간**: 4-6시간
**산출물 폴더**: `01-Claude-Skills-Basics/`
**목표 기한**: Day 1-2 (2026-01-04 ~ 01-05)

#### 학습 목표

- [ ] Claude Skills가 무엇인지, 왜 사용하는지 설명할 수 있다
- [ ] Skill의 기본 구조 (manifest, entry point 등)를 이해한다
- [ ] 간단한 "Hello World" Skill을 작성하고 실행할 수 있다
- [ ] Claude Code에서 Skill을 등록하고 실행하는 방법을 안다
- [ ] CUA_VL을 Skill vs GitHub Repository로 관리하는 것의 장단점을 비교할 수 있다

#### 주요 개념

1. **Claude Skills**: Claude Code에서 실행 가능한 커스텀 명령어/자동화 기능
   - 슬래시 커맨드 형태로 실행 (예: `/skill-name`)
   - 반복 작업 자동화, 워크플로우 개선

2. **Skill Manifest**: Skill의 메타데이터를 정의하는 파일
   - skill.json 또는 package.json에 정의
   - 이름, 설명, 진입점(entry point), 의존성 등 포함

3. **Entry Point**: Skill이 실행될 때 호출되는 메인 함수/파일
   - TypeScript/JavaScript: index.ts, main.ts 등
   - Python: main.py, __main__.py 등

4. **Skill vs Repository**:
   - Skill: Claude Code 내 통합, 즉시 실행 가능, 배포 간단
   - Repository: 독립적, 버전 관리 용이, 협업 편리, 문서화 강력
   - **오해하기 쉬운 점**: Skill도 Git Repository로 관리 가능 (둘은 상호 배타적이지 않음)

5. **Skill 개발 워크플로우**:
   1. Skill 프로젝트 생성 (스캐폴딩)
   2. 코드 작성 (로직 구현)
   3. 로컬 테스트
   4. 설치/등록 (Claude Code에)
   5. 실행 및 디버깅
   6. (선택) 배포/공유

#### 실습 과제

**실습 1: Claude Skills 공식 문서 탐색** ⭐
- **목적**: Claude Skills의 전체 개념과 구조 파악
- **단계**:
  1. Claude Code 공식 문서에서 Skills 섹션 찾기
  2. 주요 개념 (manifest, entry point, API) 정리
  3. 예제 Skill 코드 분석 (제공되는 샘플)
  4. concepts/claude-skills-overview.md 파일에 정리
- **예상 시간**: 60분
- **검증**: concepts/ 폴더에 claude-skills-overview.md 파일 생성 완료

**실습 2: "Hello World" Skill 작성** ⭐⭐
- **목적**: 최소한의 Skill 구조를 직접 작성하고 실행
- **단계**:
  1. 새 폴더 생성: `examples/hello-skill/`
  2. skill.json (또는 package.json) 작성
     ```json
     {
       "name": "hello-skill",
       "version": "1.0.0",
       "description": "My first Claude Skill",
       "main": "index.ts"
     }
     ```
  3. index.ts (또는 main.py) 작성:
     - 간단한 메시지 출력
     - 사용자 입력 받기 (이름 등)
     - 응답 반환
  4. Claude Code에 Skill 등록
  5. `/hello-skill` 실행하여 동작 확인
- **예상 시간**: 90분
- **검증**:
  - examples/hello-skill/ 폴더 생성
  - Claude Code에서 `/hello-skill` 실행 시 응답 출력

**실습 3: CUA_VL Skill vs Repository 비교 분석** ⭐⭐
- **목적**: CUA_VL을 Skill로 만들 것인지 Repository로 유지할 것인지 판단
- **단계**:
  1. CUA_VL의 현재 구조 분석 (templates/, README.md 등)
  2. Skill로 만들 경우 장단점 리스트업:
     - 장점: Claude Code 통합, 즉시 실행, 사용자 경험 향상
     - 단점: 문서화 제약, 파일 관리 복잡도, 배포 제약
  3. Repository로 유지할 경우 장단점 리스트업:
     - 장점: 문서 풍부, Git 관리 용이, 협업 편리, 독립성
     - 단점: 수동 설치 필요, Claude Code 통합 부족
  4. 결론 및 권장 방향 정리
  5. guides/cua-vl-skill-vs-repo.md에 분석 결과 작성
- **예상 시간**: 60분
- **검증**: guides/ 폴더에 cua-vl-skill-vs-repo.md 파일 생성 및 결론 도출

#### 산출물

```
01-Claude-Skills-Basics/
├── README.md                 # M1 개요, 학습 내용 요약
├── concepts/
│   ├── claude-skills-overview.md    # Claude Skills 개념 정리
│   ├── skill-structure.md           # Skill 구조 설명
│   └── manifest-guide.md            # Manifest 작성 가이드
├── examples/
│   ├── hello-skill/                 # Hello World Skill
│   │   ├── skill.json (또는 package.json)
│   │   ├── index.ts (또는 main.py)
│   │   └── README.md
│   └── basic-examples.md            # 기타 간단한 예제 모음
├── guides/
│   ├── cua-vl-skill-vs-repo.md      # CUA_VL Skill vs Repo 비교
│   ├── skill-installation.md        # Skill 설치 방법
│   └── troubleshooting.md           # 문제 해결
└── references/
    └── useful-links.md              # 공식 문서 및 참조 링크
```

#### Definition of Done

- [ ] 모든 학습 목표 달성 (5개 체크)
- [ ] 실습 과제 3개 완료
- [ ] Hello World Skill이 Claude Code에서 정상 실행됨
- [ ] CUA_VL Skill vs Repository 비교 분석 완료 및 결론 도출
- [ ] 산출물 폴더 생성 및 README.md 작성
- [ ] WorkLog 작성 완료 (vl_worklog/20260104_M1_Claude-Skills.md)
- [ ] Daily Retrospective 작성

#### Self-Assessment

**개념 이해** (5분):
- [ ] Claude Skills가 무엇인지 1-2문장으로 설명 가능
- [ ] Skill을 사용하는 이유를 예시와 함께 설명 가능
- [ ] Skill과 일반 Repository의 차이점 설명 가능

**실무 활용** (5분):
- [ ] AI에게 간단한 Skill 작성을 요청할 수 있다
- [ ] AI가 작성한 Skill 코드의 구조가 올바른지 판단 가능
- [ ] Skill 실행 시 발생하는 오류를 AI에게 설명하고 디버깅 방향 제시 가능

**의사 결정** (5분):
- [ ] CUA_VL을 Skill로 만들지 Repository로 유지할지 근거를 들어 결정 가능

#### 예상 시간 배분

- 개념 학습 (문서 읽기): 90분 (30%)
- 실습 1 (문서 탐색): 60분
- 실습 2 (Hello Skill): 90분
- 실습 3 (비교 분석): 60분
- 문서화 (산출물 작성): 60분
- **합계**: 6시간 (버퍼 20% 포함)

#### 참조 자료

- [Claude Code 공식 문서](https://docs.anthropic.com/claude/docs): Claude Code 및 Skills 가이드
- [Claude Skills GitHub Examples](https://github.com/anthropics): 공식 예제 (검색 필요)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/): TypeScript 기본 (필요 시)

---

### M2 - Skill A: CUA_VL Skill 개발

**난이도**: ⭐⭐
**예상 시간**: 6-8시간
**산출물 폴더**: `02-Skill-A-CUA-VL/`
**목표 기한**: Day 3-4 (2026-01-06 ~ 01-07)

#### 학습 목표

- [ ] M1에서 도출한 결론에 따라 CUA_VL Skill을 설계할 수 있다
- [ ] Skill 개발 시 필요한 주요 기능을 정의할 수 있다 (topic start, roadmap, daily 등)
- [ ] CUA_VL Skill의 MVP (최소 기능 제품)를 구현할 수 있다
- [ ] Skill을 테스트하고 기본 동작을 검증할 수 있다
- [ ] (M1 결론이 Repository인 경우) 대안 방안 (스크립트, 별도 CLI 등) 구현

#### 주요 개념

1. **MVP (Minimum Viable Product)**: 최소한의 핵심 기능만 포함한 초기 버전
   - CUA_VL Skill의 경우: topic 시작, roadmap 생성, daily 학습 지원
   - 완벽함보다 빠른 검증 우선

2. **Skill 설계 패턴**:
   - **Command Pattern**: 각 명령어를 독립적 함수로 분리
   - **Template Pattern**: 템플릿 파일 읽기 → 변수 주입 → 출력
   - **Wizard Pattern**: 사용자에게 단계별 질문 → 답변 수집 → 파일 생성

3. **파일 시스템 작업**:
   - 파일 읽기/쓰기 (templates/, Topics/ 등)
   - 폴더 생성 (mkdir -p)
   - 템플릿 복사 및 변수 치환

4. **사용자 인터랙션**:
   - 질문 프롬프트 (선택형, 입력형)
   - 진행 상황 표시
   - 오류 처리 및 피드백

5. **배포 전략** (M1 결론에 따라):
   - Skill로 배포: npm publish, Skill marketplace (있다면)
   - Repository로 유지: GitHub README 개선, 설치 스크립트 제공
   - 하이브리드: Repository + Skill 래퍼

#### 실습 과제

**실습 1: CUA_VL Skill MVP 설계** ⭐
- **목적**: Skill의 핵심 기능 정의 및 설계
- **단계**:
  1. M1 결론 리뷰 (Skill vs Repository)
  2. 핵심 기능 우선순위 설정:
     - 필수: `/cua-vl start` (topic_starter.md 작성 지원)
     - 필수: `/cua-vl roadmap` (Roadmap 생성)
     - 필수: `/cua-vl daily` (일일 학습 계획)
     - 선택: `/cua-vl worklog`, `/cua-vl retro` 등
  3. 기능별 입력/출력 정의
  4. 폴더 구조 및 파일 구성 설계
  5. concepts/cua-vl-skill-design.md에 설계 문서 작성
- **예상 시간**: 60분
- **검증**: concepts/ 폴더에 cua-vl-skill-design.md 생성 및 설계 완료

**실습 2: CUA_VL Skill 핵심 기능 구현** ⭐⭐⭐
- **목적**: MVP의 핵심 기능 3개 구현
- **단계**:
  1. 프로젝트 스캐폴딩: `examples/cua-vl-skill/`
  2. `/cua-vl start` 구현:
     - 사용자에게 Topic 정보 질문 (대화형)
     - topic_starter.md 템플릿 복사 및 변수 주입
     - `Topics/{TopicName}/topic_info.md` 생성
  3. `/cua-vl roadmap` 구현:
     - topic_info.md 읽기
     - roadmap_prompt.md 생성 (변수 주입)
     - AI에게 roadmap 생성 요청 안내
  4. `/cua-vl daily` 구현:
     - 현재 모듈 상태 확인
     - daily_learning_prompt.md 제공
     - AI에게 학습 계획 수립 요청 안내
  5. 각 기능 단위 테스트
- **예상 시간**: 240분 (4시간)
- **검증**:
  - `/cua-vl start` 실행 시 topic_info.md 생성
  - `/cua-vl roadmap` 실행 시 roadmap_prompt.md 생성
  - `/cua-vl daily` 실행 시 올바른 프롬프트 제공

**실습 3: CUA_VL Skill 통합 테스트 및 문서화** ⭐⭐
- **목적**: 전체 워크플로우 테스트 및 사용 가이드 작성
- **단계**:
  1. 새 Topic으로 전체 플로우 테스트:
     - `/cua-vl start TestTopic` 실행
     - `/cua-vl roadmap` 실행
     - `/cua-vl daily` 실행
  2. 발생한 문제 수정 (버그 픽스)
  3. README.md 작성:
     - 설치 방법
     - 사용 방법 (각 명령어)
     - 예제 실행 화면
  4. guides/user-guide.md 작성
- **예상 시간**: 90분
- **검증**:
  - 전체 워크플로우가 오류 없이 실행됨
  - README.md 및 user-guide.md 작성 완료
  - 다른 사람이 README만 보고 사용 가능한 수준

#### 산출물

```
02-Skill-A-CUA-VL/
├── README.md                        # Skill 개요 및 결론
├── concepts/
│   ├── cua-vl-skill-design.md       # 설계 문서
│   └── skill-vs-repo-decision.md    # 최종 결정 및 근거
├── examples/
│   └── cua-vl-skill/                # 실제 Skill 코드
│       ├── package.json (또는 skill.json)
│       ├── src/
│       │   ├── index.ts (또는 main.py)
│       │   ├── commands/
│       │   │   ├── start.ts
│       │   │   ├── roadmap.ts
│       │   │   └── daily.ts
│       │   └── utils/
│       │       ├── file-utils.ts
│       │       └── template-utils.ts
│       └── templates/               # Skill 내 템플릿 복사본
│           ├── topic_starter.md
│           ├── roadmap_prompt_template.md
│           └── daily_learning_prompt.md
├── guides/
│   ├── user-guide.md                # 사용 가이드
│   ├── installation.md              # 설치 방법
│   └── troubleshooting.md           # 문제 해결
└── tests/
    └── integration-test.md          # 통합 테스트 결과
```

#### Definition of Done

- [ ] 모든 학습 목표 달성 (5개 체크)
- [ ] 실습 과제 3개 완료
- [ ] CUA_VL Skill MVP 3개 핵심 기능 구현 완료
- [ ] 전체 워크플로우 통합 테스트 성공
- [ ] README.md 및 사용 가이드 작성
- [ ] (선택) Skill을 Claude Code에 설치하여 실제 사용 가능
- [ ] WorkLog 작성 완료 (vl_worklog/20260106_M2_Claude-Skills.md)
- [ ] Daily Retrospective 작성
- [ ] **최종 결정**: CUA_VL을 Skill로 배포할지 Repository로 유지할지 문서화

#### Self-Assessment

**개념 이해** (5분):
- [ ] CUA_VL Skill의 핵심 기능 3가지를 설명할 수 있다
- [ ] Skill vs Repository 선택 기준을 근거와 함께 설명 가능

**실무 활용** (10분):
- [ ] AI에게 Skill의 특정 기능 구현을 요청할 수 있다
- [ ] Skill 실행 시 발생하는 오류를 디버깅할 수 있다
- [ ] Skill 코드를 수정하여 기능을 추가/변경할 수 있다

**의사 결정** (5분):
- [ ] CUA_VL의 향후 배포 방향을 명확히 결정했다
- [ ] 결정의 근거를 데이터와 경험으로 설명 가능

#### 예상 시간 배분

- 개념 학습 및 설계: 60분 (12%)
- 실습 1 (설계): 60분
- 실습 2 (구현): 240분 (4시간)
- 실습 3 (테스트/문서화): 90분
- 버퍼 및 디버깅: 30분
- **합계**: 7.5시간 (버퍼 20% 포함)

#### 참조 자료

- [CUA_VL Repository](c:\AI_study\2026\CatchUpAI_VL\): 기존 구조 참조
- [Node.js File System](https://nodejs.org/api/fs.html): 파일 작업 (TypeScript)
- [Python os/pathlib](https://docs.python.org/3/library/pathlib.html): 파일 작업 (Python)

---

### M3 - Skill B: YouTube → MD Skill 개발 (**우선 완료**)

**난이도**: ⭐⭐⭐
**예상 시간**: 10-12시간
**산출물 폴더**: `03-Skill-B-YouTube-MD/`
**목표 기한**: **Day 5-8 (2026-01-08 ~ 01-11)** - **2026-01-16 행사 전 완료 필수**

#### 학습 목표

- [ ] YouTube 영상에서 자막/음성을 추출하는 방법을 이해한다
- [ ] 영어 텍스트를 한국어로 번역하는 API/라이브러리를 사용할 수 있다
- [ ] 추출된 내용을 구조화된 MD 파일로 변환할 수 있다
- [ ] Skill로 전체 워크플로우를 자동화할 수 있다
- [ ] 실제 AI Memory 360 Tour 영상을 처리하여 학습 자료를 만들 수 있다

#### 주요 개념

1. **YouTube 자막 추출**:
   - YouTube Transcript API (Python: youtube-transcript-api)
   - 자막이 없는 경우: 음성 인식 (Whisper API, Google Speech-to-Text)
   - 언어 자동 감지 및 선택

2. **번역 API/라이브러리**:
   - Google Translate API (유료, 품질 우수)
   - DeepL API (유료, 자연스러운 번역)
   - OpenAI/Claude API (프롬프트로 번역 + 요약)
   - 무료 대안: googletrans (라이브러리, 제약 있음)

3. **텍스트 구조화**:
   - 타임스탬프 기반 섹션 분리
   - 주요 내용 자동 요약 (AI 활용)
   - MD 문법으로 포맷팅 (제목, 목록, 코드 블록 등)

4. **MD 파일 구조** (Output):
   ```markdown
   # [영상 제목]

   **원본 영상**: [YouTube URL]
   **작성일**: YYYY-MM-DD
   **요약**: [AI 생성 요약 2-3문장]

   ## 주요 내용

   ### 섹션 1: [주제]
   - 내용 1
   - 내용 2

   ### 섹션 2: [주제]
   - 내용 1

   ## 핵심 포인트
   - 포인트 1
   - 포인트 2

   ## 타임라인
   - 00:00 - 소개
   - 05:30 - 메인 주제
   - ...
   ```

5. **(선택) 슬라이드 PDF 통합**:
   - PDF 다운로드 및 이미지 추출
   - MD 파일에 이미지 삽입
   - 복잡도가 높으면 이번 학습에서 제외 가능

#### 실습 과제

**실습 1: YouTube 자막 추출 및 번역 테스트** ⭐⭐
- **목적**: 핵심 기능 (자막 추출, 번역) 검증
- **단계**:
  1. 라이브러리 설치:
     - `pip install youtube-transcript-api`
     - 번역 라이브러리 선택 및 설치 (googletrans, OpenAI API 등)
  2. 간단한 스크립트 작성:
     - YouTube URL 입력
     - 자막 추출 (영어)
     - 한국어로 번역
     - 콘솔에 출력
  3. AI Memory 360 Tour 영상 1개로 테스트
  4. examples/youtube-transcript-test.py (또는 .ts) 저장
- **예상 시간**: 90분
- **검증**:
  - 자막이 정상적으로 추출됨
  - 번역이 자연스럽게 완료됨
  - 콘솔 출력 확인

**실습 2: MD 파일 생성 로직 구현** ⭐⭐⭐
- **목적**: 추출/번역된 텍스트를 구조화된 MD로 변환
- **단계**:
  1. 텍스트 분석 함수 작성:
     - 타임스탬프 기준으로 섹션 분리
     - AI에게 주요 내용 요약 요청 (Claude/OpenAI API)
     - 핵심 포인트 추출
  2. MD 템플릿 작성 (templates/youtube-md-template.md)
  3. 변수 치환하여 최종 MD 생성
  4. 파일 저장: `vl_materials/YYYYMMDD_[영상제목].md`
  5. 예제 실행: AI Memory 360 Tour 영상 1개 처리
- **예상 시간**: 180분 (3시간)
- **검증**:
  - MD 파일이 읽기 쉽게 구조화되어 생성됨
  - 요약 및 핵심 포인트가 포함됨
  - vl_materials/ 폴더에 저장됨

**실습 3: Skill로 통합 및 배치 처리** ⭐⭐⭐
- **목적**: 여러 YouTube 영상을 한 번에 처리하는 Skill 완성
- **단계**:
  1. Skill 인터페이스 설계:
     - `/youtube-to-md [URL]` - 단일 영상 처리
     - `/youtube-to-md --batch [파일경로]` - URL 목록 파일 읽어 배치 처리
  2. Skill 프로젝트 생성: `examples/youtube-to-md-skill/`
  3. 기능 구현:
     - 실습 1, 2의 로직 통합
     - 진행 상황 표시 (N/M 완료)
     - 오류 처리 (자막 없음, API 에러 등)
  4. AI Memory 360 Tour 영상들 배치 처리:
     - URL 목록 파일 생성 (urls.txt)
     - Skill 실행하여 모든 영상 처리
  5. README.md 및 사용 가이드 작성
- **예상 시간**: 240분 (4시간)
- **검증**:
  - Skill이 Claude Code에서 정상 실행됨
  - AI Memory 360 Tour 영상들이 모두 MD로 변환됨
  - 생성된 MD 파일들이 읽기 쉽고 유용함
  - 시애틀 행사 준비에 활용 가능한 학습 자료 확보

#### 산출물

```
03-Skill-B-YouTube-MD/
├── README.md                        # Skill 개요 및 사용법
├── concepts/
│   ├── youtube-api-guide.md         # YouTube API 개념
│   ├── translation-options.md       # 번역 방법 비교
│   └── md-structure-design.md       # MD 파일 구조 설계
├── examples/
│   ├── youtube-transcript-test.py   # 자막 추출 테스트
│   └── youtube-to-md-skill/         # 실제 Skill
│       ├── package.json (또는 requirements.txt)
│       ├── src/
│       │   ├── index.ts (또는 main.py)
│       │   ├── extractor.ts         # 자막 추출 모듈
│       │   ├── translator.ts        # 번역 모듈
│       │   └── md-generator.ts      # MD 생성 모듈
│       ├── templates/
│       │   └── youtube-md-template.md
│       └── config.json               # API 키 등 설정
├── guides/
│   ├── user-guide.md                # 사용 가이드
│   ├── installation.md              # 설치 방법
│   ├── api-setup.md                 # API 키 설정
│   └── troubleshooting.md           # 문제 해결
├── outputs/                         # 생성된 MD 파일들 (예제)
│   ├── urls.txt                     # AI Memory 360 Tour URL 목록
│   └── YYYYMMDD_[영상제목].md       # 처리된 영상들
└── tests/
    └── test-results.md              # 테스트 결과 및 품질 평가
```

#### Definition of Done

- [ ] 모든 학습 목표 달성 (5개 체크)
- [ ] 실습 과제 3개 완료
- [ ] YouTube → MD Skill 완성 및 테스트 성공
- [ ] **AI Memory 360 Tour 영상들을 MD로 변환 완료** (최소 3개 영상)
- [ ] 생성된 MD 파일 품질 확인 (읽기 쉬움, 요약 정확함)
- [ ] README.md 및 사용 가이드 작성
- [ ] WorkLog 작성 완료 (vl_worklog/20260108_M3_Claude-Skills.md)
- [ ] Daily Retrospective 작성
- [ ] **2026-01-16 행사 준비 완료** ✅

#### Self-Assessment

**개념 이해** (5분):
- [ ] YouTube 자막 추출 방법을 설명할 수 있다
- [ ] 번역 API/라이브러리의 장단점을 비교할 수 있다

**실무 활용** (10분):
- [ ] AI에게 YouTube 영상 처리 Skill 개선을 요청할 수 있다
- [ ] Skill 실행 시 발생하는 오류를 디버깅할 수 있다
- [ ] 새로운 YouTube 영상을 Skill로 처리할 수 있다

**행사 준비** (10분):
- [ ] 생성된 MD 파일들을 읽고 행사 내용을 이해할 수 있다
- [ ] 행사에서 질문할 내용을 준비할 수 있다

#### 예상 시간 배분

- 개념 학습 (API 조사): 60분 (10%)
- 실습 1 (자막 추출/번역): 90분
- 실습 2 (MD 생성): 180분 (3시간)
- 실습 3 (Skill 통합): 240분 (4시간)
- AI Memory 영상 처리: 60분
- 문서화: 60분
- 버퍼 및 디버깅: 60분
- **합계**: 11.5시간 (버퍼 20% 포함)

#### 참조 자료

- [youtube-transcript-api](https://pypi.org/project/youtube-transcript-api/): Python 자막 추출 라이브러리
- [OpenAI Whisper](https://github.com/openai/whisper): 음성 인식 (자막 없는 경우)
- [Google Translate API](https://cloud.google.com/translate): 번역 API
- [DeepL API](https://www.deepl.com/docs-api): 고품질 번역
- [AI Memory 360 Tour](https://memverge.ai/memmachine/ai-memory-360-tour/november-2025/): 영상 및 슬라이드

---

### M4 - Skill C: 영상 편집 자동화 Skill

**난이도**: ⭐⭐⭐
**예상 시간**: 8-10시간
**산출물 폴더**: `04-Skill-C-Video-Edit/`
**목표 기한**: Day 9-12 (2026-01-13 ~ 01-15)

#### 학습 목표

- [ ] 영상에서 음성을 분석하는 방법을 이해한다
- [ ] 무음 구간을 감지하고 제거하는 로직을 구현할 수 있다
- [ ] 필러 단어 ("Um", "uh", "음", "어")를 감지하고 제거할 수 있다
- [ ] FFmpeg 또는 영상 편집 라이브러리를 사용할 수 있다
- [ ] Skill로 자동화하여 YouTube 영상 제작 시간을 단축할 수 있다

#### 주요 개념

1. **음성 인식 (Speech Recognition)**:
   - Whisper API (OpenAI): 음성 → 텍스트 + 타임스탬프
   - Google Speech-to-Text: 실시간 또는 배치
   - 타임스탬프: 각 단어의 시작/종료 시간

2. **무음 구간 감지**:
   - 오디오 레벨 분석 (dB 단위)
   - 임계값 이하의 구간을 무음으로 판단
   - 라이브러리: pydub (Python), ffmpeg-python

3. **필러 단어 감지**:
   - 음성 인식 결과에서 키워드 매칭
   - 필러 단어 리스트: ["um", "uh", "er", "ah", "음", "어", "그", "이제" 등]
   - 타임스탬프로 해당 구간 추출

4. **영상 편집**:
   - **FFmpeg**: 강력한 CLI 도구, 구간 자르기/붙이기
   - **MoviePy** (Python): 프로그래밍 방식 편집
   - 편집 워크플로우:
     1. 무음/필러 구간 타임스탬프 수집
     2. 유지할 구간 목록 생성 (역계산)
     3. 각 구간을 잘라서 순서대로 합치기
     4. 최종 영상 출력

5. **성능 최적화**:
   - 큰 영상 파일은 처리 시간이 오래 걸림
   - 병렬 처리 고려 (멀티스레딩)
   - 진행 상황 표시 (프로그레스 바)

#### 실습 과제

**실습 1: 무음 구간 감지 테스트** ⭐⭐
- **목적**: 영상에서 무음 구간을 자동으로 찾기
- **단계**:
  1. 라이브러리 설치:
     - `pip install pydub ffmpeg-python`
     - FFmpeg 바이너리 설치 (Windows: Chocolatey 또는 수동)
  2. 간단한 스크립트 작성:
     - 영상 파일 입력
     - 오디오 추출
     - 무음 구간 감지 (임계값: -40dB, 최소 길이: 0.5초)
     - 타임스탬프 출력
  3. 테스트 영상으로 실행 (짧은 샘플)
  4. examples/silence-detection.py 저장
- **예상 시간**: 90분
- **검증**:
  - 무음 구간 타임스탬프가 정확하게 출력됨
  - 임계값 조정하여 감도 확인

**실습 2: 필러 단어 감지 및 제거** ⭐⭐⭐
- **목적**: 음성 인식으로 필러 단어 찾고 제거
- **단계**:
  1. Whisper API 또는 Google Speech-to-Text 설정
  2. 스크립트 작성:
     - 영상 파일 입력
     - 음성 인식 (타임스탬프 포함)
     - 필러 단어 감지 ("um", "uh", "음", "어" 등)
     - 해당 구간 타임스탬프 수집
  3. FFmpeg로 필러 구간 제거:
     - 유지할 구간 계산
     - 각 구간 잘라서 합치기
  4. 편집 전후 길이 비교
  5. examples/filler-removal.py 저장
- **예상 시간**: 180분 (3시간)
- **검증**:
  - 필러 단어가 포함된 구간이 제거됨
  - 편집된 영상이 자연스럽게 재생됨
  - 길이가 단축됨 (예: 10분 → 8분)

**실습 3: 영상 편집 Skill 통합** ⭐⭐⭐
- **목적**: 무음 + 필러 제거를 하나의 Skill로 통합
- **단계**:
  1. Skill 인터페이스 설계:
     - `/edit-video [파일경로] --remove-silence --remove-fillers`
     - 옵션으로 각 기능 선택 가능
  2. Skill 프로젝트 생성: `examples/video-edit-skill/`
  3. 기능 구현:
     - 실습 1, 2의 로직 통합
     - 진행 상황 표시 (0% → 100%)
     - 오류 처리 (파일 없음, FFmpeg 에러 등)
  4. 실제 YouTube 영상 편집:
     - 본인의 YouTube 영상 1개 선택
     - Skill 실행하여 편집
     - 편집 전후 비교 (길이, 품질)
  5. 편집 리포트 생성:
     - 원본 길이 vs 편집 후 길이
     - 제거된 무음 구간 수
     - 제거된 필러 단어 수
  6. README.md 및 사용 가이드 작성
- **예상 시간**: 240분 (4시간)
- **검증**:
  - Skill이 Claude Code에서 정상 실행됨
  - 실제 영상이 자동으로 편집됨
  - 편집 품질이 만족스러움
  - YouTube 제작 시간 단축 효과 확인

#### 산출물

```
04-Skill-C-Video-Edit/
├── README.md                        # Skill 개요 및 효과
├── concepts/
│   ├── speech-recognition.md        # 음성 인식 개념
│   ├── silence-detection.md         # 무음 감지 방법
│   ├── filler-words.md              # 필러 단어 리스트
│   └── ffmpeg-guide.md              # FFmpeg 사용법
├── examples/
│   ├── silence-detection.py         # 무음 감지 테스트
│   ├── filler-removal.py            # 필러 제거 테스트
│   └── video-edit-skill/            # 실제 Skill
│       ├── package.json (또는 requirements.txt)
│       ├── src/
│       │   ├── index.ts (또는 main.py)
│       │   ├── audio-analyzer.py    # 오디오 분석 모듈
│       │   ├── speech-recognizer.py # 음성 인식 모듈
│       │   └── video-editor.py      # 영상 편집 모듈
│       └── config.json               # API 키, 임계값 등 설정
├── guides/
│   ├── user-guide.md                # 사용 가이드
│   ├── installation.md              # FFmpeg 설치 등
│   ├── api-setup.md                 # Whisper API 설정
│   └── troubleshooting.md           # 문제 해결
├── outputs/                         # 편집된 영상 (예제)
│   ├── original-video.mp4
│   ├── edited-video.mp4
│   └── edit-report.md               # 편집 리포트
└── tests/
    └── test-results.md              # 테스트 결과 및 시간 절감 효과
```

#### Definition of Done

- [ ] 모든 학습 목표 달성 (5개 체크)
- [ ] 실습 과제 3개 완료
- [ ] 영상 편집 Skill 완성 및 테스트 성공
- [ ] 실제 YouTube 영상을 Skill로 편집 완료
- [ ] 편집 전후 비교 및 시간 절감 효과 측정
- [ ] README.md 및 사용 가이드 작성
- [ ] WorkLog 작성 완료 (vl_worklog/20260113_M4_Claude-Skills.md)
- [ ] Daily Retrospective 작성

#### Self-Assessment

**개념 이해** (5분):
- [ ] 무음 구간 감지 원리를 설명할 수 있다
- [ ] 필러 단어를 자동으로 제거하는 방법을 설명할 수 있다

**실무 활용** (10분):
- [ ] AI에게 영상 편집 Skill 개선을 요청할 수 있다
- [ ] 새로운 영상을 Skill로 편집할 수 있다
- [ ] 편집 품질을 평가하고 설정을 조정할 수 있다

**업무 효율** (5분):
- [ ] YouTube 제작 시간이 실제로 단축되었는지 측정할 수 있다
- [ ] Skill을 정기적으로 활용할 계획이 있다

#### 예상 시간 배분

- 개념 학습 (음성 인식, FFmpeg): 60분 (10%)
- 실습 1 (무음 감지): 90분
- 실습 2 (필러 제거): 180분 (3시간)
- 실습 3 (Skill 통합): 240분 (4시간)
- 실제 영상 편집 및 테스트: 60분
- 문서화: 30분
- 버퍼 및 디버깅: 60분
- **합계**: 11.5시간 (버퍼 20% 포함)

#### 참조 자료

- [FFmpeg 공식 문서](https://ffmpeg.org/documentation.html): 영상/오디오 처리
- [pydub 문서](https://github.com/jiaaro/pydub): Python 오디오 처리
- [OpenAI Whisper](https://github.com/openai/whisper): 음성 인식
- [MoviePy](https://zulko.github.io/moviepy/): Python 영상 편집

---

### M5 - 통합, 배포 및 최종 정리

**난이도**: ⭐⭐
**예상 시간**: 4-6시간
**산출물 폴더**: `05-Integration-Deploy/`
**목표 기한**: Day 13-14 (2026-01-16 ~ 01-17) - **선택사항**

#### 학습 목표

- [ ] 3개의 Skill을 통합하여 하나의 패키지로 관리할 수 있다 (선택)
- [ ] Skill을 다른 사용자에게 배포하는 방법을 이해한다
- [ ] GitHub Repository로 공개하여 커뮤니티와 공유할 수 있다
- [ ] 전체 학습 과정을 정리하고 CUA_VL 방법론의 효과를 평가한다
- [ ] 향후 개선 방향을 도출한다

#### 주요 개념

1. **Skill 패키징**:
   - 여러 Skill을 하나의 패키지로 묶기 (Monorepo)
   - 공통 유틸리티 공유
   - 통합 설치 스크립트

2. **배포 방법**:
   - **GitHub Release**: 태그 및 릴리스 노트
   - **npm Registry** (TypeScript/JavaScript Skill)
   - **PyPI** (Python Skill)
   - **Skill Marketplace** (있다면)

3. **문서화**:
   - 전체 README.md (프로젝트 소개)
   - 각 Skill별 README.md
   - CHANGELOG.md (버전 히스토리)
   - CONTRIBUTING.md (기여 가이드)

4. **라이선스**:
   - MIT License (권장, 오픈소스)
   - Apache 2.0, GPL 등
   - 라이선스 파일 추가

5. **커뮤니티 공유**:
   - GitHub Stars, Forks 유도
   - CUA_VL 커뮤니티에 공유
   - YouTube 영상으로 소개 (선택)

#### 실습 과제

**실습 1: 3개 Skill 통합 및 패키징** ⭐⭐
- **목적**: 여러 Skill을 하나의 Repository로 관리
- **단계**:
  1. GitHub Repository 생성: `claude-skills-collection`
  2. 폴더 구조 정리:
     ```
     claude-skills-collection/
     ├── README.md
     ├── skills/
     │   ├── cua-vl-skill/
     │   ├── youtube-to-md-skill/
     │   └── video-edit-skill/
     ├── docs/
     │   └── ...
     └── scripts/
         └── install-all.sh (또는 .ps1)
     ```
  3. 통합 README.md 작성 (프로젝트 소개)
  4. 통합 설치 스크립트 작성
  5. Git commit 및 push
- **예상 시간**: 90분
- **검증**:
  - GitHub Repository 생성 완료
  - 3개 Skill이 모두 포함됨
  - 통합 README.md 작성 완료

**실습 2: 배포 및 문서화** ⭐⭐
- **목적**: Skill을 공개하고 다른 사용자가 사용할 수 있게 준비
- **단계**:
  1. 각 Skill별 README.md 업데이트:
     - 설치 방법 (npm install, pip install 등)
     - 사용 예제
     - 스크린샷 또는 GIF
  2. CHANGELOG.md 작성 (버전 1.0.0)
  3. LICENSE 파일 추가 (MIT)
  4. GitHub Release 생성 (v1.0.0)
  5. (선택) npm/PyPI에 배포
  6. README에 배지 추가 (License, Version 등)
- **예상 시간**: 90분
- **검증**:
  - GitHub Release 생성 완료
  - 문서가 완성도 높게 작성됨
  - 다른 사람이 README만 보고 사용 가능

**실습 3: Topic Retrospective 및 CUA_VL 평가** ⭐
- **목적**: 전체 학습 과정 회고 및 방법론 효과성 평가
- **단계**:
  1. Topic Retrospective 작성:
     - 전체 학습 통계 (총 시간, 모듈별 소요 시간)
     - 3개 Skill 완성 여부 및 품질 평가
     - 발생한 문제와 해결 과정
     - 학습 목표 달성도
  2. CUA_VL 방법론 평가:
     - Output 중심 학습의 효과
     - AI 활용의 장단점
     - WorkLog/Retrospective의 가치
     - 산출물의 "교과서 품질" 여부
  3. 향후 개선 방향:
     - Skill 기능 추가 아이디어
     - 다른 Topic 학습 계획
     - CUA_VL 방법론 개선 제안
  4. vl_worklog/20260117_Claude-Skills_Final_Retrospective.md 작성
- **예상 시간**: 60분
- **검증**:
  - Final Retrospective 작성 완료
  - CUA_VL 방법론 효과성 객관적 평가
  - 구체적인 개선 방향 도출

#### 산출물

```
05-Integration-Deploy/
├── README.md                        # M5 개요
├── concepts/
│   ├── skill-packaging.md           # 패키징 방법
│   └── deployment-strategies.md     # 배포 전략
├── guides/
│   ├── github-release.md            # GitHub Release 가이드
│   ├── npm-publish.md               # npm 배포 (선택)
│   └── pypi-publish.md              # PyPI 배포 (선택)
├── repository/                      # GitHub Repository 구조 예시
│   └── structure-template.md
└── retrospective/
    └── final-retrospective.md       # 최종 회고
```

#### Definition of Done

- [ ] 모든 학습 목표 달성 (5개 체크)
- [ ] 실습 과제 3개 완료
- [ ] GitHub Repository 생성 및 3개 Skill 통합
- [ ] GitHub Release 생성 (v1.0.0)
- [ ] 문서화 완료 (README, CHANGELOG, LICENSE)
- [ ] Topic Final Retrospective 작성
- [ ] CUA_VL 방법론 효과성 평가
- [ ] WorkLog 작성 완료 (vl_worklog/20260116_M5_Claude-Skills.md)

#### Self-Assessment

**통합 관리** (5분):
- [ ] 여러 Skill을 하나의 Repository로 관리하는 방법을 설명할 수 있다
- [ ] GitHub Release를 생성하는 방법을 안다

**배포** (5분):
- [ ] Skill을 다른 사용자가 사용할 수 있도록 배포할 수 있다
- [ ] 문서화의 중요성을 이해하고 실천할 수 있다

**회고** (10분):
- [ ] CUA_VL 방법론의 장단점을 객관적으로 평가할 수 있다
- [ ] 학습 과정에서 얻은 인사이트를 정리할 수 있다
- [ ] 향후 개선 방향을 구체적으로 제시할 수 있다

#### 예상 시간 배분

- 실습 1 (통합 및 패키징): 90분
- 실습 2 (배포 및 문서화): 90분
- 실습 3 (Final Retrospective): 60분
- GitHub Repository 정리: 30분
- (선택) 커뮤니티 공유: 30분
- **합계**: 5시간 (버퍼 20% 포함)

#### 참조 자료

- [GitHub Releases](https://docs.github.com/en/repositories/releasing-projects-on-github): Release 생성 가이드
- [npm Publishing](https://docs.npmjs.com/cli/v8/commands/npm-publish): npm 배포
- [PyPI Packaging](https://packaging.python.org/tutorials/packaging-projects/): Python 패키징

---

## 📝 WorkLog 작성 가이드

각 학습 세션마다 WorkLog를 작성하여 진행 상황을 추적합니다.

**파일명 규칙**: `vl_worklog/YYYYMMDD_MX_Claude-Skills.md`
- 예: `vl_worklog/20260104_M1_Claude-Skills.md`
- 예: `vl_worklog/20260108_M3_Claude-Skills.md`

**WorkLog 필수 섹션**:
1. **오늘의 학습 목표** (체크리스트)
   - Roadmap의 해당 모듈 학습 목표 복사
   - 오늘 달성할 목표만 선택

2. **진행 내용** (실습별 상세 기록)
   - 각 실습 과제 진행 상황
   - 작성한 코드, 생성한 파일
   - 실행 결과 (스크린샷, 로그 등)

3. **문제 해결 로그**
   - 발생한 문제 상세 기록
   - 시도한 해결 방법
   - 최종 해결 방법
   - AI에게 요청한 내용 및 응답

4. **DoD 체크리스트** (모듈 완료 기준)
   - Roadmap의 DoD 복사
   - 실시간으로 체크 업데이트

5. **Daily Retrospective**
   - What went well? (잘된 점)
   - What could be improved? (개선할 점)
   - Insights (배운 점, 깨달음)
   - Tomorrow's focus (내일 집중할 사항)

6. **참조 및 산출물**
   - 참조한 문서/링크
   - 생성한 파일/폴더 목록

---

## 🔍 Retrospective 가이드

### Daily Retrospective (매일, 5-10분)

WorkLog 내에 작성:
- **What went well?**: 오늘 잘 진행된 부분 (1-3개)
- **What could be improved?**: 개선이 필요한 부분 (1-3개)
- **Insights**: 오늘 배운 핵심 내용, 깨달음
- **Tomorrow's focus**: 내일 집중해야 할 사항 (우선순위)

### Module Retrospective (모듈 완료 시, 15-20분)

`vl_worklog/YYYYMMDD_MX_Retrospective.md`:
1. **계획 대비 실제 비교**
   - 예상 시간 vs 실제 소요 시간
   - 난이도 평가 (예상 vs 실제)
   - 목표 달성률

2. **핵심 학습 내용**
   - 이 모듈에서 배운 3가지 핵심
   - 가장 어려웠던 부분
   - 가장 유용한 부분

3. **발생한 문제와 해결**
   - 주요 문제 목록
   - 해결 방법 및 교훈

4. **Roadmap 정확도 평가**
   - Roadmap이 정확했는지
   - 수정이 필요한 부분

5. **다음 모듈 준비사항**
   - 추가로 공부할 내용
   - 준비할 도구/환경

### Topic Retrospective (전체 완료 시, 30-60분)

`vl_worklog/20260117_Claude-Skills_Final_Retrospective.md`:
1. **전체 학습 여정 통계**
   - 총 소요 시간
   - 모듈별 소요 시간 및 난이도
   - 완료한 산출물 목록

2. **CUA_VL 방법론 효과성 평가**
   - Output 중심 학습의 효과
   - AI 활용의 장단점
   - WorkLog/Retrospective의 가치
   - Roadmap의 정확성

3. **학습 목표 달성도**
   - 3개 Skill 완성 여부
   - 각 Skill의 품질 및 실용성
   - 업무 효율성 향상 정도

4. **산출물 품질 평가**
   - "교과서 품질" 달성 여부
   - 다른 학습자가 활용 가능한가
   - 문서화 수준

5. **향후 학습 개선 사항**
   - 다음 Topic 학습 시 적용할 개선안
   - CUA_VL 방법론 수정 제안
   - 개인 학습 습관 개선

---

## 📂 전체 폴더 구조

```
Claude-Skills/
├── topic_info.md                    # Topic 정보
├── vl_prompts/
│   ├── roadmap_prompt.md            # Roadmap 생성 프롬프트
│   └── daily_learning_prompt.md     # 일일 학습 프롬프트
├── vl_roadmap/
│   └── 20260104_RoadMap_Claude-Skills.md  # 이 파일
├── vl_worklog/
│   ├── 20260104_M1_Claude-Skills.md
│   ├── 20260106_M2_Claude-Skills.md
│   ├── 20260106_M2_Retrospective.md
│   ├── 20260108_M3_Claude-Skills.md
│   ├── 20260111_M3_Retrospective.md
│   ├── 20260113_M4_Claude-Skills.md
│   ├── 20260115_M4_Retrospective.md
│   ├── 20260116_M5_Claude-Skills.md
│   └── 20260117_Claude-Skills_Final_Retrospective.md
├── vl_materials/                    # 참조 자료
│   ├── AI-Memory-360-Tour/          # YouTube → MD 결과물
│   │   ├── urls.txt
│   │   └── YYYYMMDD_[영상제목].md
│   └── sample-videos/               # 테스트용 영상
├── 01-Claude-Skills-Basics/
│   ├── README.md
│   ├── concepts/
│   ├── examples/
│   ├── guides/
│   └── references/
├── 02-Skill-A-CUA-VL/
│   ├── README.md
│   ├── concepts/
│   ├── examples/
│   │   └── cua-vl-skill/
│   └── guides/
├── 03-Skill-B-YouTube-MD/
│   ├── README.md
│   ├── concepts/
│   ├── examples/
│   │   └── youtube-to-md-skill/
│   ├── guides/
│   └── outputs/
├── 04-Skill-C-Video-Edit/
│   ├── README.md
│   ├── concepts/
│   ├── examples/
│   │   └── video-edit-skill/
│   ├── guides/
│   └── outputs/
└── 05-Integration-Deploy/
    ├── README.md
    ├── concepts/
    ├── guides/
    └── retrospective/
```

---

## 📊 학습 진행 상황 추적

| 모듈 | 시작일 | 종료일 | 상태 | DoD 달성률 | 비고 |
|------|--------|--------|------|-----------|------|
| M1 | | | ⏳ | 0% | Day 1-2 |
| M2 | | | ⏳ | 0% | Day 3-4 |
| M3 | | | ⏳ | 0% | **Day 5-8 (우선)** |
| M4 | | | ⏳ | 0% | Day 9-12 |
| M5 | | | ⏳ | 0% | Day 13-14 (선택) |

**범례**:
- ⏳ 대기
- 🔄 진행 중
- ✅ 완료

**사용 방법**:
- 각 모듈 시작 시 "시작일" 기록
- 진행 중 상태를 🔄로 변경
- DoD 달성률을 실시간 업데이트 (예: 3/7 = 43%)
- 모듈 완료 시 "종료일" 기록, 상태를 ✅로 변경

---

## 🎯 성공 기준

전체 Topic 완료 기준:

- [ ] 모든 모듈 완료 (M1 ~ M5, DoD 100%)
- [ ] **3개 Skill 완성** (CUA_VL, YouTube→MD, 영상 편집)
- [ ] **Skill B로 AI Memory 360 Tour 영상들 MD 변환 완료** (2026-01-16 전)
- [ ] 최소 5개 산출물 폴더 생성 (01-05/)
- [ ] Topic Final Retrospective 작성
- [ ] Self-Assessment 평균 ⭐⭐⭐⭐ 이상
- [ ] GitHub Repository 공개 (선택)
- [ ] CUA_VL 커뮤니티 공유 (선택)

**핵심 성공 지표**:
1. **Skill A**: CUA_VL Skill vs Repository 결정 완료
2. **Skill B**: 시애틀 행사 준비 완료 (영상 학습 자료 확보)
3. **Skill C**: YouTube 제작 시간 단축 효과 측정

---

## 🚨 중요 마일스톤

| 날짜 | 마일스톤 | 중요도 |
|------|----------|--------|
| 2026-01-05 | M1 완료 (Claude Skills 기본 이해) | 보통 |
| 2026-01-07 | M2 완료 (CUA_VL Skill 방향 결정) | 중요 |
| **2026-01-11** | **M3 완료 (Skill B 완성)** | **최우선** |
| **2026-01-16** | **시애틀 AI Memory 360 Tour 행사** | **최우선** |
| 2026-01-15 | M4 완료 (Skill C 완성) | 중요 |
| 2026-01-17 | M5 완료 (전체 정리 및 배포) | 선택 |

**긴급도 순위**:
1. **M3 (Skill B)** - 2026-01-16 전 완료 필수
2. **M2 (Skill A)** - CUA_VL 배포 방향 결정
3. **M4 (Skill C)** - 장기 업무 효율성
4. **M1 (기본)** - 빠르게 통과
5. **M5 (통합)** - 시간 여유 시

---

**생성자**: Claude with CUA_VL
**Roadmap 버전**: 1.0
**방법론 버전**: CUA_VL 2.0
**생성일**: 2026-01-04

---

## 💡 학습 팁

### Skill B 우선 완료 전략

Skill B는 2026-01-16 행사 전까지 완료해야 하므로 다음 전략을 권장합니다:

1. **M1, M2는 빠르게 통과** (각 1-2일)
   - M1: Hello World Skill만 만들고 개념 파악에 집중
   - M2: CUA_VL Skill은 간단한 MVP만 구현

2. **M3에 집중 투자** (4-5일)
   - 품질 우선: 영상 학습 자료가 유용해야 함
   - AI Memory 360 Tour 영상들 모두 처리

3. **M4, M5는 행사 후 진행** (여유 있게)
   - 행사 경험을 반영하여 개선
   - Skill C는 천천히 완성도 높게 개발

### AI 활용 극대화

- 막히면 즉시 AI에게 질문 (Claude Code 사용 중)
- 코드 리뷰 요청으로 품질 향상
- 디버깅 방향을 AI에게 제시하여 빠른 해결

### WorkLog 실시간 작성

- 작업하면서 실시간으로 기록
- 회고가 쉬워짐
- 문제 해결 과정이 산출물이 됨

---

**행운을 빕니다! Happy Vibe Learning with Claude Skills! 🎓🚀**
