# WorkLog: M1 - Claude Skills 기본 개념 (Day 1)

**Date**: 2026-01-04
**Module**: M1 - Claude Skills 기본 개념
**Status**: 진행 중 (Day 1/2)
**사용 시간**: 약 1시간 50분

---

## 📊 학습 목표

### 오늘 달성한 목표
- [x] Claude Skills가 무엇인지, 왜 사용하는지 설명할 수 있다
- [x] Skill의 기본 구조 (manifest, entry point 등)를 이해한다
- [ ] 간단한 "Hello World" Skill을 작성하고 실행할 수 있다 (내일)
- [ ] Claude Code에서 Skill을 등록하고 실행하는 방법을 안다 (내일)
- [ ] CUA_VL을 Skill vs GitHub Repository로 관리하는 것의 장단점을 비교할 수 있다 (내일)

### 오늘의 실습 목표
- [x] 실습 1: Claude Skills 공식 문서 탐색

---

## 📝 학습 내용

### 실습 1: Claude Skills 공식 문서 탐색 ✅

#### 진행 과정

1. **Claude Skills 문서 조사** (60분)
   - claude-code-guide 에이전트를 사용하여 공식 문서 탐색
   - 주요 개념 추출:
     - Claude Skills의 정의 및 목적
     - Skill의 기본 구조 (SKILL.md, 메타데이터)
     - Skill 작동 방식 3단계 (Discovery → Activation → Execution)
     - Skill 저장 위치 및 우선순위
     - Progressive Disclosure 개념

2. **개념 문서 작성** (40분)
   - `concepts/claude-skills-overview.md` 파일 작성
   - 초보자가 이해할 수 있도록 구조화
   - 예제 코드 및 비교표 포함
   - 약 350줄 분량의 상세한 가이드 완성

3. **참조 자료 정리** (30분)
   - `references/useful-links.md` 파일 작성
   - 공식 문서 링크 5개 정리
   - 추가 리소스 및 학습 경로 추천
   - 빠른 참조 체크리스트 포함

4. **README.md 작성** (20분)
   - 모듈 개요 및 학습 목표 정리
   - 현재 진행 상황 기록
   - 다음 단계 명시

#### 핵심 학습 내용

**1. Claude Skills란?**
- 마크다운 파일로 패키징된 모듈식 기능
- Claude에게 특정 작업 수행 방법을 가르치는 시스템
- 자동 활성화, Progressive Disclosure, 간단한 포맷

**2. Skill의 기본 구조**
```yaml
---
name: skill-name
description: 무엇을 언제 사용
allowed-tools: [선택]
model: [선택]
---

# 지침
단계별 지침
```

**3. Skill 작동 방식 (3단계)**
- Discovery: 메타데이터만 로드 (약 100 토큰)
- Activation: 요청과 설명 일치 시 SKILL.md 전체 로드
- Execution: 지침 실행, 파일/스크립트 사용

**4. Progressive Disclosure**
- 필요한 정보만 단계적으로 로드
- 많은 Skill을 설치해도 성능 저하 없음
- 레벨 1 (메타데이터) → 레벨 2 (SKILL.md) → 레벨 3 (참조 파일)

**5. Skills vs. 다른 Claude Code 기능**
- Skills: 자동 활성화 (설명 기반)
- Slash Commands: 명시적 호출 (`/command`)
- CLAUDE.md: 항상 로드 (프로젝트 전역)

#### 생성된 산출물

```
01-Claude-Skills-Basics/
├── README.md                              ✅
├── concepts/
│   └── claude-skills-overview.md          ✅ (약 350줄)
├── examples/
├── guides/
└── references/
    └── useful-links.md                    ✅ (약 180줄)
```

---

## ✅ 완료한 작업

- [x] Claude Skills 공식 문서 조사 및 분석
- [x] claude-code-guide 에이전트로 상세 정보 수집
- [x] concepts/claude-skills-overview.md 작성 (초보자용 완벽 가이드)
- [x] references/useful-links.md 작성 (공식 문서 링크 및 학습 경로)
- [x] 01-Claude-Skills-Basics/README.md 작성
- [x] 폴더 구조 생성 (concepts, examples, guides, references)
- [x] 학습 내용 정리 및 문서화

---

## ⚠️ 발생한 문제와 해결

### 문제 1: Skills 공식 문서 위치 파악

**문제**: Claude Skills 관련 공식 문서가 여러 곳에 분산되어 있음
- Claude Code 문서
- Agent Skills 문서 (Platform)
- Claude API 문서
- Agent SDK 문서

**해결**: claude-code-guide 에이전트 사용
- 모든 관련 문서를 한 번에 조사
- 각 문서의 목적과 차이점 파악
- 학습 경로 순서 정립 (초급 → 중급 → 고급)

### 문제 2: 오늘 학습 시간 부족

**상황**: 지금까지 Roadmap 생성 등에 시간을 많이 사용하여 오늘은 1-2시간만 가능

**해결**: 학습 계획 조정
- 실습 1만 집중 (개념 학습 + 문서 탐색)
- 실습 2, 3은 내일(Day 2)로 연기
- 오늘은 이론 중심, 내일은 실습 중심으로 구성

### 문제 3: 정보량이 방대함

**문제**: Claude Skills 관련 정보가 매우 많고 복잡함

**해결**: 구조화된 정리
- claude-skills-overview.md를 섹션별로 나눔
- 초보자 → 중급자 → 고급자 순서로 정리
- 빠른 참조 체크리스트 포함
- 예제 코드 다수 포함

---

## 💡 학습 포인트

### 오늘 배운 가장 중요한 3가지

1. **description이 핵심**
   - Claude가 Skill을 언제 사용할지 결정하는 유일한 기준
   - "무엇을" + "언제" 명확히 작성해야 함
   - 예: ❌ "코드를 처리" → ✅ "Python 코드에 타입 힌트 추가. 타입 없는 코드에 사용"

2. **Progressive Disclosure의 효율성**
   - 메타데이터만 로드 (100 토큰) → 필요 시 SKILL.md (5,000 토큰) → 필요 시 참조 파일
   - 많은 Skill을 설치해도 성능 저하 없음
   - 이 설계가 Skills를 확장 가능하게 만듦

3. **Skill vs. Slash Command 차이**
   - Skill: 자동 활성화, 전문 지식 제공, 재사용 가능
   - Slash Command: 명시적 호출, 간단한 프롬프트 템플릿
   - 언제 무엇을 사용할지 명확히 구분 필요

### 놀라웠던 점

- Claude Code에 이미 설정된 custom skills가 있었음 (`/init`, `/pr-comments`, `/review`, `/security-review`)
- 이들은 slash commands이지만 Skills로 변환 가능
- Skills 시스템이 생각보다 훨씬 유연하고 강력함

### 앞으로 주의할 점

- **간결함 유지**: SKILL.md는 500줄 미만 권장
- **명확한 설명**: description에 "무엇을" + "언제" 반드시 포함
- **테스트 반복**: 다양한 요청으로 Skill 활성화 검증
- **하나 수준의 참조**: 참조 파일에서 또 참조하지 않기

---

## 🔍 Daily Retrospective

### What went well? (잘된 점)

1. **효율적인 정보 수집**
   - claude-code-guide 에이전트를 활용하여 짧은 시간에 방대한 정보 수집
   - 공식 문서 5개를 한 번에 조사하여 전체 그림 파악

2. **구조화된 문서화**
   - claude-skills-overview.md를 초보자 친화적으로 작성
   - 예제 코드, 비교표, 체크리스트 등 다양한 형식 활용
   - 350줄 분량의 상세한 가이드 완성

3. **명확한 학습 경로 설정**
   - 초급 → 중급 → 고급 순서로 학습 경로 정립
   - references/useful-links.md에 명확히 문서화
   - 다음에 무엇을 배워야 할지 명확함

4. **산출물 품질**
   - CUA_VL 방법론의 "교과서 품질" 달성
   - 다른 학습자가 이 문서만으로 Claude Skills 이해 가능
   - Roadmap의 기대치 충족

### What could be improved? (개선할 점)

1. **시간 관리**
   - Roadmap 생성 등 준비 작업에 시간이 많이 소요됨
   - 실습 2, 3을 오늘 완료하지 못함
   - 개선: 다음부터는 준비 작업을 간소화하고 학습에 더 집중

2. **실습 부족**
   - 오늘은 이론 중심이었음 (문서 읽기 + 정리)
   - 실제로 Skill을 작성해보지 못함
   - 개선: 내일은 반드시 Hello World Skill 작성 및 실행

3. **CUA_VL 판단 연기**
   - 실습 3 (CUA_VL Skill vs Repository 비교)를 하지 못함
   - M2에서 CUA_VL Skill을 개발하기 전에 판단이 필요
   - 개선: 내일 실습 3을 반드시 완료하여 M2 준비

### Insights (배운 점, 깨달음)

1. **Skills는 생각보다 간단함**
   - SKILL.md 파일 하나면 시작 가능
   - 복잡한 설정이나 코드 불필요
   - 마크다운 작성 능력만 있으면 됨

2. **description의 중요성**
   - Skill의 성공 여부는 description에 달림
   - AI가 의미적으로 일치하는지 판단하므로 명확해야 함
   - "언제 사용하는지"를 반드시 포함

3. **CUA_VL을 Skill로 만들 수 있을 것 같음**
   - Skill은 템플릿 파일을 참조하고 변수를 주입하는 작업에 적합
   - CUA_VL의 핵심 기능 (topic 시작, roadmap 생성, daily 학습)을 Skill로 구현 가능
   - 내일 실습 3에서 구체적으로 분석 필요

4. **AI 시대 학습법의 효과**
   - AI 에이전트를 활용하여 1시간에 5개 문서 조사 가능
   - 과거에는 하루 종일 걸렸을 작업
   - CUA_VL 방법론의 "AI 협업 중심" 철학이 증명됨

### Tomorrow's focus (내일 집중할 사항)

1. **실습 2: Hello World Skill 작성** (최우선)
   - 간단한 Skill 프로젝트 생성
   - SKILL.md 작성
   - Claude Code에 등록 및 실행
   - 직접 경험하여 이해도 높이기

2. **실습 3: CUA_VL Skill vs Repository 비교** (중요)
   - CUA_VL을 Skill로 만들 경우 장단점 분석
   - Repository로 유지할 경우 장단점 분석
   - 결론 도출 및 M2 준비
   - guides/cua-vl-skill-vs-repo.md 작성

3. **M1 완료**
   - 모든 학습 목표 달성
   - DoD 체크리스트 확인
   - Module Retrospective 작성
   - M2로 이동 준비

---

## 🚀 다음 세션 준비

### 내일 (2026-01-05) 계획

**사용 가능 시간**: 3-4시간 (실습 2, 3 완료)

**우선순위**:
1. 실습 2: Hello World Skill 작성 (90분)
2. 실습 3: CUA_VL Skill vs Repository 비교 (60분)
3. M1 완료 처리 (30분)
   - DoD 체크리스트 확인
   - Module Retrospective 작성
4. (여유 시) M2 시작 준비

**필요한 것**:
- [ ] Claude Code가 실행 중인 환경
- [ ] Personal Skills 폴더 (`~/.claude/skills/`)
- [ ] 간단한 테스트용 프로젝트

**기대 효과**:
- M1 완료 (Day 2에 100% 달성)
- CUA_VL Skill 방향 결정
- M2 (Skill A 개발) 준비 완료

---

## 📂 참조 및 산출물

### 생성한 파일 (총 4개)

1. [01-Claude-Skills-Basics/README.md](../01-Claude-Skills-Basics/README.md)
2. [01-Claude-Skills-Basics/concepts/claude-skills-overview.md](../01-Claude-Skills-Basics/concepts/claude-skills-overview.md)
3. [01-Claude-Skills-Basics/references/useful-links.md](../01-Claude-Skills-Basics/references/useful-links.md)
4. [vl_worklog/20260104_M1_Claude-Skills.md](20260104_M1_Claude-Skills.md) (이 파일)

### 참조한 자료

- Claude Code Skills Documentation: https://code.claude.com/docs/en/skills.md
- Agent Skills Overview: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview.md
- Agent Skills Best Practices: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices.md
- claude-code-guide 에이전트 (Agent ID: aed4910)

---

## 📊 DoD 체크리스트 (M1 전체)

### 학습 목표 (5개)
- [x] Claude Skills가 무엇인지, 왜 사용하는지 설명할 수 있다 ✅
- [x] Skill의 기본 구조를 이해한다 ✅
- [ ] 간단한 "Hello World" Skill을 작성하고 실행할 수 있다 (내일)
- [ ] Claude Code에서 Skill을 등록하고 실행하는 방법을 안다 (내일)
- [ ] CUA_VL을 Skill vs Repository로 관리하는 것의 장단점을 비교할 수 있다 (내일)

**진행률**: 2/5 (40%)

### 실습 과제 (3개)
- [x] 실습 1: Claude Skills 공식 문서 탐색 ✅
- [ ] 실습 2: Hello World Skill 작성 (내일)
- [ ] 실습 3: CUA_VL Skill vs Repository 비교 (내일)

**진행률**: 1/3 (33%)

### 산출물
- [x] `01-Claude-Skills-Basics/` 폴더 생성 ✅
- [x] `concepts/claude-skills-overview.md` 작성 ✅
- [ ] `examples/hello-skill/` 생성 (내일)
- [ ] `guides/cua-vl-skill-vs-repo.md` 작성 (내일)
- [x] `references/useful-links.md` 작성 ✅
- [x] `README.md` 작성 ✅

**진행률**: 4/6 (67%)

### 기타
- [x] WorkLog 작성 완료 ✅
- [x] Daily Retrospective 작성 ✅
- [ ] Module Retrospective 작성 (M1 완료 시)

**전체 DoD 달성률**: 약 45% (Day 1 기준, 내일 100% 달성 예정)

---

**작성자**: CUA_VL Claude Skills 학습
**작성 시간**: 2026-01-04 (약 10분)
**다음 WorkLog**: 20260105_M1_Claude-Skills.md
