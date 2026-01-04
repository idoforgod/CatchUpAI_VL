# CUA_VL Roadmap 생성 프롬프트

**버전**: 2.0
**생성일**: 2026-01-04
**방법론**: Catch Up AI Vibe Learning (CUA_VL)

---

## 📌 사용 방법

이 프롬프트는 `topic_starter.md`에서 입력한 Topic 정보를 바탕으로 학습 로드맵을 자동 생성합니다.

**사용 절차**:
1. Topic 폴더가 생성되면 이 파일이 `[TopicName]/vl_prompts/`에 복사됨
2. Topic 정보가 이미 주입된 상태
3. 이 파일 전체를 AI에게 전달
4. AI가 CUA_VL 표준 로드맵 생성
5. 생성된 로드맵을 `vl_roadmap/YYYYMMDD_RoadMap_Claude-Skills.md`에 저장

---

## [1단계] Topic 정보 (자동 주입됨)

> **주의**: 이 섹션은 `topic_starter.md`의 정보로 자동으로 채워집니다.
> 수정이 필요하면 `topic_info.md` 파일을 편집하세요.

### 기본 정보

**Topic 이름**: `Claude-Skills`

**Topic 설명**:
```
Claude Skills의 기본 개념을 이해하고, 3개의 실전 Skill을 직접 개발하여 실무에 활용하는 것을 목표로 하는 Output 중심 학습
```

**학습 목적**:
```
- Claude Skills가 무엇인지, CUA_VL 방법론을 Skill로 만드는 것이 적합한지 판단할 수 있는 지식 습득
- 3개의 실전 Skill을 직접 개발하여 업무 효율성 향상
```

**예상 학습 기간**: `2-3주`

---

### 환경 및 사전 지식

**운영 체제**: `Windows 11`

**주요 도구 및 기술 스택**:
```
- VS Code (현재 사용 중)
- Claude Code Extension (VS Code에 설치된 것으로 추정)
- Git (버전 관리)
- Python (Skill B, C 개발에 필요할 가능성)
- Node.js/TypeScript (Skill 개발에 필요할 가능성)
```

**사전 지식**:
```
필수:
- Claude Code 사용 경험: 있음 (현재 대화 중)
- Git/GitHub 기본 (이미 보유)
- 프로그래밍 기본 (Python, 기타)

권장:
- TypeScript/JavaScript 기본 (필요 시 학습)
- Claude API 이해 (필요 시 학습)
```

---

### 산출물 및 참조

**학습 목표** (달성하고 싶은 것):
```
핵심 목표 (Output 중심):
1. Skill A: CUA_VL 방법론을 Claude Skill로 만들기 (또는 GitHub 배포가 더 적합한지 판단)
2. Skill B: 영어 YouTube 영상을 한국어 MD 파일로 정리하는 Skill 개발
3. Skill C: 영상 편집 자동화 Skill 개발 (무음/필러 단어 제거)

세부 학습 목표:
- Claude Skills의 개념과 작동 원리 이해
- Skill 작성을 위한 기본 구조 파악 (manifest, 코드 구조 등)
- Claude Code와 Skills의 통합 방식 이해
- Skill 개발 → 테스트 → 배포 프로세스 이해
- CUA_VL을 Skill vs GitHub Repository로 관리하는 것의 장단점 비교 판단 능력
```

**참조 자료**:
```
공식 문서:
- Claude Code 공식 문서 (필요 시 검색)
- Claude Skills 공식 가이드 (학습 시 탐색)
- Claude API 문서 (필요 시)

외부 리소스:
- AI Memory 360 Tour 페이지: https://memverge.ai/memmachine/ai-memory-360-tour/november-2025/
- 시애틀 행사 (2026-01-16): https://luma.com/vv62wfw2?tk=vUqmYM

기존 프로젝트:
- CUA_VL Repository: c:\AI_study\2026\CatchUpAI_VL\
```

**vl_materials/ 폴더**:
```
- AI Memory 360 Tour 관련 자료 (필요 시 저장)
- Claude Skills 공식 문서 스냅샷
- 참조 코드 예제
```

---

## [2단계] AI에게 요청할 작업

위에 주입된 Topic 정보를 바탕으로 **CUA_VL 방법론**에 맞는 학습 로드맵을 생성해주세요.

**중요한 특이사항**:
1. **Output 중심 학습**: 3개의 구체적인 Skill을 개발하는 것이 목표
2. **시간 제약**: Skill B는 2026-01-16 이전 완료 필요 (약 12일)
3. **우선순위**: Skill A (CUA_VL 판단) → Skill B (긴급) → Skill C (중요하지만 덜 긴급)
4. **학습 철학**: "Topic의 전반적 지식보다 구체적 Output을 만들기 위한 필요 지식만 학습"

---

### 🔍 STEP 1: 학습 기간 적정성 검토 (필수)

**로드맵 생성 전 반드시 수행:**

사용자가 입력한 학습 기간 `2-3주`가 해당 Topic에 적절한지 분석하고 피드백을 제공하세요.

#### 분석 기준:
1. **Topic 복잡도 평가**
   - 간단 (예: CLI 도구, 기본 개념): 3-7일 적정
   - 중간 (예: 프레임워크, 라이브러리): 2-4주 적정
   - 복잡 (예: 대규모 시스템, 다중 기술): 1-3개월 적정

2. **사전 지식 고려**
   - 사전 지식이 충분: 기간 단축 가능
   - 사전 지식 부족: 기간 연장 필요

3. **학습 목표 범위**
   - 기본 이해 수준: 짧은 기간
   - 실무 적용 수준: 중간 기간
   - 전문가 수준: 긴 기간

4. **시간 제약 고려**
   - Skill B는 2026-01-16까지 완료 필요
   - 현재 2026-01-04 (약 12일 남음)

#### 피드백 형식:

```markdown
## 📊 학습 기간 적정성 분석

**사용자 입력 기간**: 2-3주
**Topic 복잡도**: [간단/중간/복잡]
**권장 기간**: [X주 또는 Y일]

**분석 결과**:
- ✅ **적정함**: 입력하신 기간이 이 Topic 학습에 적합합니다.
- ⚠️ **너무 짧음**: 이 Topic은 일반적으로 [권장 기간]이 필요합니다. 현재 기간으로는 핵심만 빠르게 학습하게 됩니다.
- ⚠️ **너무 김**: 이 Topic은 보통 [권장 기간]이면 충분합니다. 여유 있게 학습하거나 심화 내용까지 다룰 수 있습니다.

**조치 제안**:
- [적정함인 경우] 계획대로 진행합니다.
- [너무 짧은 경우] 1) 기간 연장 권장 또는 2) 학습 범위 축소 (기본만)
- [너무 긴 경우] 1) 기간 단축 또는 2) 심화 내용 추가

**시간 제약 고려**:
- Skill B는 2026-01-16까지 완료 필요 (12일 남음)
- 이를 고려한 모듈 순서 및 시간 배분 제안

**사용자 확인 필요**:
위 분석 결과를 확인하시고 다음 중 선택해주세요:
1. "그대로 진행" - 입력한 기간으로 진행
2. "기간 조정" - 권장 기간으로 변경
3. "범위 조정" - 기간은 유지하되 학습 범위 조정
```

**중요**: 사용자가 확인하고 최종 결정할 때까지 로드맵 생성을 중단하고 대기하세요.

---

### 🗺️ STEP 2: 로드맵 생성 요구사항

사용자가 기간을 최종 확정한 후 아래 요구사항에 따라 로드맵을 생성하세요.

#### 전체 구조

**학습 기간**: `{최종 확정된 기간}`에 맞춰 조정
- 3일 이하: 3-5개 모듈
- 1-2주: 5-7개 모듈
- 1개월 이상: 7-10개 모듈

**모듈 구성 원칙**:
- **Output 우선**: 3개의 Skill 개발이 핵심 (M1: 기본 개념 → M2-M4: Skill A, B, C 개발)
- 각 모듈은 독립적으로 완료 가능한 단위
- 난이도는 점진적 상승 (Basics → Intermediate → Advanced)
- **시간 제약 고려**: Skill B를 우선 개발하거나, 병렬 개발 고려

**명명 규칙**:
- 모듈: `M1`, `M2`, `M3`, ...
- 산출물 폴더: `01-{Skill명}/`, `02-{Skill명}/`, ...

**추천 모듈 구조** (참고용, 조정 가능):
- M1: Claude Skills 기본 개념 + 환경 설정 (1-2일)
- M2: Skill A - CUA_VL Skill 개발 (3-4일)
- M3: Skill B - YouTube → MD Skill 개발 (4-5일, **우선 완료**)
- M4: Skill C - 영상 편집 Skill 개발 (4-5일)
- M5: 통합 및 배포 (선택, 시간 여유 시)

---

#### 각 모듈 필수 포함 사항

각 모듈은 다음 9가지 항목을 반드시 포함해야 합니다:

##### 1. 모듈 기본 정보
```markdown
### MX - {모듈명}

**난이도**: ⭐/⭐⭐/⭐⭐⭐ (1-3)
**예상 시간**: X시간
**산출물 폴더**: `0X-{모듈명}/`
```

##### 2. 학습 목표 (3-5개)
- 검증 가능하게 작성 ("~을 이해한다" X, "~을 구현할 수 있다" O)
- 체크리스트 형식 `- [ ]`
- 구체적이고 측정 가능한 목표

##### 3. 주요 개념
- 핵심 용어 정의 (3-5개)
- 각 개념에 대한 1-2문장 설명
- 오해하기 쉬운 포인트 명시

##### 4. 실습 과제 (2-3개)
각 실습마다:
- **과제명**: 명확한 이름
- **목적**: 왜 이 실습을 하는가
- **단계**: 구체적인 실행 단계 (1, 2, 3, ...)
- **예상 시간**: X분
- **난이도**: ⭐/⭐⭐/⭐⭐⭐
- **검증 방법**: 성공 여부를 어떻게 확인하는가

##### 5. 산출물
- 생성할 폴더 구조
- 필수 파일 목록 (README.md, 코드, 문서 등)
- 권장 하위 폴더 (`concepts/`, `examples/`, `guides/`, `troubleshooting/`)

##### 6. Definition of Done (완료 기준)
체크리스트 형식으로 5-8개:
```markdown
- [ ] 모든 학습 목표 달성
- [ ] 실습 과제 X개 완료
- [ ] 핵심 명령어/API Y개 실행 성공
- [ ] 산출물 폴더 생성 및 README 작성
- [ ] WorkLog 작성 완료
- [ ] Daily Retrospective 작성
```

##### 7. Self-Assessment (자가 평가)
AI 시대에 맞는 평가 기준 (3-5문항):
```markdown
**개념 이해** (5분):
- [ ] 이 기술/기능이 무엇인지 1-2문장으로 설명 가능
- [ ] 왜 필요한지 예시와 함께 설명 가능

**실무 활용** (5분):
- [ ] AI에게 이 기술을 사용한 작업 요청 가능
- [ ] AI가 생성한 코드의 품질 판단 가능

**문제 해결** (5분):
- [ ] 문제 발생 시 AI에게 디버깅 방향 제시 가능
```

##### 8. 예상 시간 배분
```markdown
- 개념 학습: X분 (20-30%)
- 실습 1: X분
- 실습 2: X분
- 문서화: X분
- **합계**: X시간 (버퍼 20% 포함)
```

##### 9. 참조 자료
- 공식 문서 링크 (필수)
- 튜토리얼/예제 (권장)
- 각 링크마다 1줄 설명

---

#### 실습 설계 원칙 (중요!)

실습 과제를 설계할 때 다음 원칙을 **반드시** 준수하세요:

##### 1. 실습 우선
- 이론 설명: 20-30%
- 실습 시간: 70-80%
- "개념 설명 → 즉시 실습" 패턴 반복

##### 2. 점진적 복잡도
- 실습 1: 간단 (⭐) - "Hello World" 수준
- 실습 2: 중간 (⭐⭐) - 실용적 기능
- 실습 3: 고급 (⭐⭐⭐) - 선택사항, 심화

##### 3. 검증 가능성
- 모든 실습은 실행 결과로 성공 여부 확인 가능
- 예: "로그 출력", "파일 생성", "API 응답 성공"
- 명확한 성공 기준 제시

##### 4. AI 시대 학습 범위
**인간이 알아야 할 것**:
- 개념적 이해 (무엇, 왜, 언제)
- 아키텍처 및 구조
- AI에게 효과적으로 지시하는 방법
- 기본 사용 패턴 (3-5개 핵심 기능)

**암기 불필요**:
- 상세 API 파라미터 목록
- 모든 옵션과 플래그
- 내부 구현 디테일

##### 5. 산출물 중심
- 매 모듈마다 폴더 생성 (`01-xxx/`, `02-xxx/`)
- **"교과서 품질"**: 다른 학습자가 이것만으로 학습 가능한 수준
- README.md는 반드시 포함 (개요, 사용법, 예제)

##### 6. 환경 고려
- 사용자가 입력한 OS/도구에 맞는 명령어 사용
- Windows 11: PowerShell 명령어 우선
- 경로 표기도 OS에 맞게 조정 (예: `c:\path\to\file`)

---

#### CUA_VL 방법론 통합

로드맵에 다음 CUA_VL 요소들을 통합하세요:

##### 1. WorkLog 가이드
```markdown
## WorkLog 작성 가이드

각 학습 세션마다 WorkLog를 작성하여 진행 상황을 추적합니다.

**파일명 규칙**: `vl_worklog/YYYYMMDD_MX_Claude-Skills.md`
- 예: `vl_worklog/20260104_M1_Claude-Skills.md`

**WorkLog 필수 섹션**:
1. 오늘의 학습 목표 (체크리스트)
2. 진행 내용 (실습별 상세 기록)
3. 문제 해결 로그
4. DoD 체크리스트 (모듈 완료 기준)
5. Daily Retrospective
6. 참조 및 산출물
```

##### 2. Retrospective 가이드
```markdown
## Retrospective 가이드

### Daily Retrospective (매일, 5-10분)
WorkLog 내에 작성:
- What went well?
- What could be improved?
- Insights
- Tomorrow's focus

### Module Retrospective (모듈 완료 시, 15-20분)
`vl_worklog/YYYYMMDD_MX_Retrospective.md`:
- 계획 대비 실제 비교
- 핵심 학습 내용
- 발생한 문제와 해결
- Roadmap 정확도 평가
- 다음 모듈 준비사항

### Topic Retrospective (전체 완료 시, 30-60분)
`vl_worklog/YYYYMMDD_Claude-Skills_Final_Retrospective.md`:
- 전체 학습 여정 통계
- CUA_VL 방법론 효과성 평가
- 산출물 품질 평가
- 향후 학습 개선 사항
```

##### 3. 폴더 구조
```
Claude-Skills/
├── topic_info.md              # Topic 정보 (참조)
├── vl_prompts/
│   ├── roadmap_prompt.md      # 이 파일
│   └── daily_learning_prompt.md
├── vl_roadmap/
│   └── YYYYMMDD_RoadMap_Claude-Skills.md  # 생성될 로드맵
├── vl_worklog/
│   ├── YYYYMMDD_M1_Claude-Skills.md
│   ├── YYYYMMDD_M2_Claude-Skills.md
│   └── ...
├── vl_materials/              # Optional: 참조 자료
│   └── (PDF, 문서, 코드 등)
├── 01-Claude-Skills-Basics/
│   ├── README.md
│   ├── concepts/
│   ├── examples/
│   ├── guides/
│   └── troubleshooting/
├── 02-Skill-A-CUA-VL/
├── 03-Skill-B-YouTube-MD/
├── 04-Skill-C-Video-Edit/
└── ...
```

---

## [3단계] 출력 형식

roadmap_prompt_template.md 의 [3단계] 출력 형식 섹션을 그대로 따르세요.

생성된 로드맵을 `vl_roadmap/YYYYMMDD_RoadMap_Claude-Skills.md`에 저장하세요.

---

## ✅ 로드맵 품질 체크리스트

roadmap_prompt_template.md 의 품질 체크리스트를 그대로 따르세요.

---

## 🎯 최종 체크

로드맵 생성 완료 후:

1. [ ] `vl_roadmap/YYYYMMDD_RoadMap_Claude-Skills.md` 파일로 저장
2. [ ] 전체 모듈 개수 확인 (기간에 맞는가?)
3. [ ] Skill B 우선순위 반영 (2026-01-16 전 완료 가능?)
4. [ ] 품질 체크리스트 검증
5. [ ] 사용자에게 로드맵 검토 요청
6. [ ] 피드백 반영 및 조정
7. [ ] 첫 번째 모듈(M1) 시작 준비

---

**생성자**: Claude with CUA_VL
**Template 버전**: 2.0
**생성일**: 2026-01-04
**방법론**: Catch Up AI Vibe Learning (CUA_VL)
