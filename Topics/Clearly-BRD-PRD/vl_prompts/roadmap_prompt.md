# CUA_VL Roadmap 생성 프롬프트

**버전**: 2.0
**생성일**: 2026-02-01
**방법론**: Catch Up AI Vibe Learning (CUA_VL)

---

## 📌 사용 방법

이 프롬프트는 `topic_info.md`에서 입력한 Topic 정보를 바탕으로 학습 로드맵을 자동 생성합니다.

**사용 절차**:
1. Topic 폴더가 생성되면 이 파일이 `[TopicName]/vl_prompts/`에 복사됨
2. Topic 정보가 이미 주입된 상태
3. 이 파일 전체를 AI에게 전달
4. AI가 CUA_VL 표준 로드맵 생성
5. 생성된 로드맵을 `vl_roadmap/YYYYMMDD_RoadMap_Clearly-BRD-PRD.md`에 저장

---

## [1단계] Topic 정보 (자동 주입됨)

> **주의**: 이 섹션은 `topic_info.md`의 정보로 채워져 있습니다.
> 수정이 필요하면 `topic_info.md` 파일을 편집하세요.

### 기본 정보

**Topic 이름**: `Clearly-BRD-PRD`

**Topic 설명**:
```
Clearly 앱을 활용한 BRD(Business Requirements Document)와 PRD(Product Requirements Document)
작성 방법론을 학습하고, 실습으로 Catch Up AI 홈페이지를 위한 BRD/PRD를 작성하는 Output 중심 학습
```

**학습 목적**:
```
- Clearly 앱의 기능과 사용 방법 이해
- BRD와 PRD의 개념 및 차이점 이해
- Vibe Coding에서 요구사항 문서의 중요성 이해
- 실습을 통해 Catch Up AI 홈페이지 BRD/PRD 작성
```

**예상 학습 기간**: `3-5일`

---

### 환경 및 사전 지식

**운영 체제**: `Windows 11`

**주요 도구 및 기술 스택**:
```
- 웹 브라우저 (Clearly 앱 접속용)
- VS Code + Claude Code Extension
- Obsidian (Web Clipping 및 노트)
- Git (버전 관리)
```

**사전 지식**:
```
필수:
- Vibe Coding 개념: 기본 이해 (Claude Code 사용 경험 있음)
- 웹 애플리케이션 기본 개념 (이미 보유)

권장:
- 소프트웨어 개발 프로세스 이해
```

---

### 산출물 및 참조

**학습 목표** (달성하고 싶은 것):
```
핵심 목표 (Output 중심):
1. Output A: Clearly 앱 사용 가이드 (다른 사람이 보고 따라할 수 있는 문서)
2. Output B: Catch Up AI 홈페이지 BRD 작성
3. Output C: Catch Up AI 홈페이지 PRD 작성

세부 학습 목표:
- Clearly 앱의 목적과 가치 이해
- Plain Mode vs Technical Mode 차이점 이해
- BRD의 구성 요소와 작성 목적 이해
- PRD의 구성 요소와 BRD와의 관계 이해
- Vibe Coding에서 요구사항 문서의 역할 이해
- AI Wizard를 활용한 문서 생성 프로세스 체험
```

**참조 자료**:
```
내부 자료 (Web Clipping):
- vl_materials/web_clippings/ 폴더 내 14개 파일
  - Landing Page, About, Case Studies
  - How to Use, Vibe Coding 개념
  - BRD 설명, PRD 설명
  - Software Development Process

외부 자료 (BRD/PRD):
- BRD vs. PRD: The ultimate guide for Product Managers (Codelevate)
- Understanding BRD, PRD, SDD & TSD (Medium)
- BRD vs. PRD: What New Product Managers Need to Know (ClickUp)

외부 자료 (Vibe Coding):
- Vibe Coding in 2026: The Complete Guide (DEV Community)
- Vibe coding - Wikipedia
- Best Practices for Integrating Vibe Coding in 2026 (Ryz Labs)

기타:
- Clearly 공식 사이트: https://www.clearlyreqs.com/
- Catch Up AI 현재 홈페이지: https://catchupai.net/
```

**vl_materials/ 폴더**:
```
- web_clippings/: Clearly 웹사이트에서 클리핑한 14개 MD 파일
```

---

## [2단계] AI에게 요청할 작업

위에 주입된 Topic 정보를 바탕으로 **CUA_VL 방법론**에 맞는 학습 로드맵을 생성해주세요.

**중요한 특이사항**:
1. **Output 중심 학습**: 3개의 구체적인 산출물(사용 가이드, BRD, PRD)을 만드는 것이 목표
2. **실습 위주**: Clearly 앱을 직접 사용하면서 학습
3. **학습 자료 특성**: 웹사이트 클리핑 + 외부 웹 검색 자료 활용
4. **실습 과정에서 발견**: 새로운 단계가 나올 수 있음 → 유연하게 대응
5. **학습 철학**: "Topic의 전반적 지식보다 구체적 Output을 만들기 위한 필요 지식만 학습"

---

### 🔍 STEP 1: 학습 기간 적정성 검토 (필수)

**로드맵 생성 전 반드시 수행:**

사용자가 입력한 학습 기간 `3-5일`이 해당 Topic에 적절한지 분석하고 피드백을 제공하세요.

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

#### 피드백 형식:

```markdown
## 📊 학습 기간 적정성 분석

**사용자 입력 기간**: 3-5일
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
- 각 모듈은 독립적으로 완료 가능한 단위
- 난이도는 점진적 상승 (Basics → Intermediate → Advanced)
- 마지막 모듈은 Capstone 프로젝트 (통합 실습)

**명명 규칙**:
- 모듈: `M1`, `M2`, `M3`, ...
- 산출물 폴더: `01-Clearly-Overview/`, `02-BRD-Practice/`, ...

**권장 모듈 구조** (이 Topic에 특화):
- M1: Clearly 개요 및 핵심 개념 (BRD/PRD, Vibe Coding)
- M2: Catch Up AI BRD/PRD 실습 (Clearly 앱 사용)
- M3: 문서화 및 사용 가이드 작성 (Capstone)

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
- 예: "문서 생성", "BRD 완성", "PRD 내보내기 성공"
- 명확한 성공 기준 제시

##### 4. AI 시대 학습 범위
**인간이 알아야 할 것**:
- 개념적 이해 (무엇, 왜, 언제)
- BRD와 PRD의 관계
- Vibe Coding에서 요구사항 문서의 역할
- Clearly 앱의 기본 사용 패턴

**암기 불필요**:
- Clearly 앱의 모든 기능
- BRD/PRD의 모든 세부 항목
- 내부 UI 디테일

##### 5. 산출물 중심
- 매 모듈마다 폴더 생성 (`01-xxx/`, `02-xxx/`)
- **"교과서 품질"**: 다른 학습자가 이것만으로 학습 가능한 수준
- README.md는 반드시 포함 (개요, 사용법, 예제)

##### 6. 환경 고려
- Windows 11 기준
- 웹 브라우저 사용 (Clearly 앱)
- 경로 표기도 OS에 맞게 조정 (예: `c:\path\to\file`)

---

#### CUA_VL 방법론 통합

로드맵에 다음 CUA_VL 요소들을 통합하세요:

##### 1. WorkLog 가이드
```markdown
## WorkLog 작성 가이드

각 학습 세션마다 WorkLog를 작성하여 진행 상황을 추적합니다.

**파일명 규칙**: `vl_worklog/YYYYMMDD_MX_Clearly-BRD-PRD.md`
- 예: `vl_worklog/20260201_M1_Clearly-BRD-PRD.md`

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
`vl_worklog/YYYYMMDD_Clearly-BRD-PRD_Final_Retrospective.md`:
- 전체 학습 여정 통계
- CUA_VL 방법론 효과성 평가
- 산출물 품질 평가
- 향후 학습 개선 사항
```

##### 3. 폴더 구조
```
Clearly-BRD-PRD/
├── topic_info.md              # Topic 정보 (참조)
├── vl_prompts/
│   ├── roadmap_prompt.md      # 이 파일
│   └── daily_learning_prompt.md
├── vl_roadmap/
│   └── YYYYMMDD_RoadMap_Clearly-BRD-PRD.md  # 생성될 로드맵
├── vl_worklog/
│   ├── YYYYMMDD_M1_Clearly-BRD-PRD.md
│   ├── YYYYMMDD_M2_Clearly-BRD-PRD.md
│   └── ...
├── vl_materials/              # 참조 자료
│   └── web_clippings/         # Clearly 웹사이트 클리핑
├── 01-Clearly-Overview/
│   ├── README.md
│   ├── concepts/
│   ├── guides/
│   └── ...
├── 02-BRD-Practice/
│   └── ...
└── ...
```

---

## [3단계] 출력 형식

다음 Markdown 형식으로 로드맵을 생성하고 `vl_roadmap/YYYYMMDD_RoadMap_Clearly-BRD-PRD.md`에 저장하세요.

(템플릿 구조는 templates/roadmap_prompt_template.md의 [3단계] 출력 형식 참조)

---

## ✅ 로드맵 품질 체크리스트

생성된 로드맵이 다음 기준을 충족하는지 확인하세요:

### 구조
- [ ] 학습 기간에 맞는 적절한 모듈 개수 (3-5일 → 3개 모듈)
- [ ] 점진적 난이도 상승 (Basics → Advanced)
- [ ] 마지막 모듈은 문서화/Capstone
- [ ] 각 모듈의 독립성 확보

### 각 모듈
- [ ] 학습 목표 3-5개 (검증 가능)
- [ ] 주요 개념 3-5개 (명확한 정의)
- [ ] 실습 과제 2-3개 (구체적 단계)
- [ ] 산출물 구조 명시
- [ ] DoD 체크리스트 5-8개
- [ ] Self-Assessment 3-5문항
- [ ] 시간 배분 명시 (버퍼 포함)
- [ ] 참조 자료 링크
- [ ] 9가지 필수 항목 모두 포함

### CUA_VL 통합
- [ ] WorkLog 가이드
- [ ] Retrospective 가이드 (3단계)
- [ ] 폴더 구조 명시
- [ ] 진행 상황 추적 테이블

### 실습 설계
- [ ] 실습 우선 (70-80% 실습, 20-30% 이론)
- [ ] 검증 가능한 결과
- [ ] Windows 11 환경 고려
- [ ] AI 시대 학습 범위 적용
- [ ] 산출물 = 교과서 품질

---

## 🎯 최종 체크

로드맵 생성 완료 후:

1. [ ] `vl_roadmap/20260201_RoadMap_Clearly-BRD-PRD.md` 파일로 저장
2. [ ] 전체 모듈 개수 확인 (기간에 맞는가?)
3. [ ] 품질 체크리스트 검증
4. [ ] 사용자에게 로드맵 검토 요청
5. [ ] 피드백 반영 및 조정
6. [ ] 첫 번째 모듈(M1) 시작 준비

---

**생성자**: Claude with CUA_VL
**Template 버전**: 2.0 (templates/roadmap_prompt_template.md 기반)
**생성일**: 2026-02-01
**방법론**: Catch Up AI Vibe Learning (CUA_VL)
