# Claude Skills 개요

**작성일**: 2026-01-04
**학습 모듈**: M1 - Claude Skills 기본 개념
**참조**: Claude Code 공식 문서, Agent Skills 문서

---

## 📌 Claude Skills란?

### 정의

**Claude Skills**는 마크다운 파일로 패키징된 모듈식 기능으로, Claude에게 특정 작업을 수행하는 방법을 가르치는 시스템입니다. 각 Skill은 메타데이터, 지침, 그리고 선택적으로 스크립트와 참고 자료를 포함합니다.

**핵심 개념**:
- 도메인 특화 전문성을 Claude에게 제공
- 반복적인 지침 제공을 제거하여 효율성 향상
- 사용자 요청에 따라 자동으로 활성화 (모델 기반 호출)
- 재사용 가능한 리소스

### 목적

1. **전문화**: 특정 워크플로우, 컨텍스트, 모범 사례로 Claude를 전문가로 변환
2. **효율성**: 여러 대화에서 반복적으로 동일한 지침을 제공할 필요 제거
3. **재사용성**: 일반 목적의 에이전트를 프로젝트별/도메인별 전문가로 변환

### 사용 사례 예시

- ✅ PR 검토 자동화 (팀 표준에 따른 코드 리뷰)
- ✅ 커밋 메시지 자동 생성 (일관된 형식)
- ✅ 회사 데이터베이스 스키마 쿼리
- ✅ PDF 처리 (텍스트 추출, 폼 채우기, 문서 병합)
- ✅ 특정 코딩 표준 준수
- ✅ 문서 자동 생성

---

## 🏗️ Skill의 기본 구조

### 파일 구조

```
my-skill/
├── SKILL.md              (필수 - 메타데이터 + 지침)
├── reference.md          (선택 - 상세 문서)
├── examples.md           (선택 - 사용 예제)
└── scripts/
    ├── helper.py         (선택 - 유틸리티 스크립트)
    └── validate.py       (선택 - 검증 스크립트)
```

**핵심 파일: SKILL.md**

모든 Skill의 중심은 `SKILL.md` 파일입니다. 이 파일은 다음과 같은 구조를 가집니다:

```yaml
---
name: skill-name
description: Skill의 목적과 사용 시기를 설명합니다.
allowed-tools: [선택사항] Read, Bash, Grep
model: [선택사항] claude-opus-4-5-20251101
---

# Skill 제목

## 지침
Claude가 따를 구체적인 단계별 지침

## 예제
구체적인 사용 예제

## 추가 자료
다른 파일 참조
```

### YAML 메타데이터 필드

| 필드 | 필수 | 설명 | 제약 조건 |
|------|------|------|---------|
| `name` | ✅ 필수 | Skill 이름 | 소문자, 숫자, 하이픈만 (최대 64자) |
| `description` | ✅ 필수 | Skill 목적 및 사용 시기 | 최대 1024자 |
| `allowed-tools` | 선택 | 이 Skill 활성 시 Claude가 사용 가능한 도구 | Read, Bash, Grep 등 |
| `model` | 선택 | Skill 활성 시 사용 모델 | 예: claude-opus-4-5-20251101 |

**중요**: `description`은 Claude가 Skill을 언제 사용할지 결정하는 핵심입니다. 명확하고 구체적으로 작성해야 합니다.

---

## ⚙️ Skill 작동 방식 (3단계)

### 1. Discovery (발견)

- Claude Code 시작 시 모든 Skill의 **이름과 설명만** 로드
- 전체 지침은 로드하지 않아 성능 유지
- 약 100 토큰만 사용

### 2. Activation (활성화)

- 사용자 요청이 Skill의 설명과 의미적으로 일치하면 활성화
- Claude가 자동으로 관련 Skill 선택
- 전체 `SKILL.md` 파일을 컨텍스트에 로드 (5,000 토큰 미만 권장)

### 3. Execution (실행)

- Claude가 Skill의 지침을 따름
- 필요한 참조 파일 읽기
- 필요한 스크립트 실행
- 결과를 사용자에게 반환

**Progressive Disclosure (점진적 공개)**:

Skills는 필요한 정보만 순서대로 로드합니다:
- **레벨 1 (항상)**: 메타데이터 (이름, 설명) - 약 100 토큰
- **레벨 2 (필요시)**: SKILL.md 본문 - 5,000 토큰 미만
- **레벨 3 (필요시)**: 참조 파일, 스크립트 출력 - 제한 없음

이를 통해 많은 Skill을 설치해도 성능 저하가 없습니다.

---

## 📂 Skill 저장 위치 및 범위

| 위치 | 경로 | 적용 범위 | 우선순위 |
|------|------|---------|---------|
| **Personal** | `~/.claude/skills/skill-name/SKILL.md` | 모든 프로젝트 | 2 |
| **Project** | `.claude/skills/skill-name/SKILL.md` | 해당 저장소의 모든 사람 | 3 |
| **Plugin** | 플러그인 내 `skills/skill-name/SKILL.md` | 플러그인 설치자 | 4 |
| **Enterprise** | 관리자 설정 참조 | 조직 전체 | 1 (최우선) |

**우선순위 규칙**:
- 같은 이름의 Skill이 여러 위치에 있으면 우선순위가 높은 것을 사용
- Enterprise > Personal > Project > Plugin

---

## 🚀 Skill 생성 및 사용 방법

### Step 1: 디렉토리 생성

```bash
# Personal Skill (모든 프로젝트에서 사용)
mkdir -p ~/.claude/skills/my-skill-name

# Project Skill (현재 프로젝트만)
mkdir -p .claude/skills/my-skill-name
```

### Step 2: SKILL.md 파일 생성

```yaml
---
name: my-skill-name
description: 이 Skill이 무엇을 하는지, 언제 사용하는지 명확히 설명합니다.
---

# My Skill 제목

## 지침

1. 첫 번째 단계
2. 두 번째 단계
3. 세 번째 단계

## 예제

사용 예제를 제공합니다.
```

### Step 3: Claude Code 재시작

- VS Code에서 Claude Code Extension을 재시작하거나
- Claude Code CLI를 재시작합니다

### Step 4: Skill 검증

다음을 입력하여 Skill이 로드되었는지 확인:
```
What Skills are available?
```

### Step 5: Skill 테스트

Skill의 설명과 일치하는 요청을 하면 Claude가 자동으로 사용합니다:
```
[Skill 설명과 관련된 요청]
```

**중요**: Skill은 `/skill-name` 같은 명시적 호출이 필요 없습니다. Claude가 요청을 분석하여 자동으로 선택합니다.

---

## 📝 Skill 작성 예제

### 예제 1: 간단한 Skill (단일 파일)

**파일**: `~/.claude/skills/generating-commit-messages/SKILL.md`

```yaml
---
name: generating-commit-messages
description: git diff를 분석하여 명확한 커밋 메시지를 생성합니다. 커밋 메시지 작성 시 사용합니다.
---

# 커밋 메시지 생성

## 지침

1. `git diff --staged`를 실행하여 변경 사항 확인
2. 다음을 포함하는 커밋 메시지 제안:
   - 50자 이하의 요약
   - 상세한 설명
   - 영향받는 컴포넌트

## 모범 사례

- 현재형 사용 (예: "Add feature" not "Added feature")
- 어떻게가 아닌 무엇을 왜 설명
- 명확하고 간결하게
```

### 예제 2: 복잡한 Skill (여러 파일)

**파일 구조**:
```
~/.claude/skills/pdf-processing/
├── SKILL.md
├── FORMS.md
├── REFERENCE.md
└── scripts/
    ├── fill_form.py
    └── validate.py
```

**SKILL.md**:
```yaml
---
name: pdf-processing
description: PDF 파일에서 텍스트와 표를 추출하고, 폼을 채우고, 문서를 병합합니다.
allowed-tools: Read, Bash(python:*)
---

# PDF 처리

## 빠른 시작

텍스트 추출:
```python
import pdfplumber
with pdfplumber.open("doc.pdf") as pdf:
    text = pdf.pages[0].extract_text()
```

## 고급 기능

- **폼 채우기**: [FORMS.md](FORMS.md) 참조
- **API 참조**: [REFERENCE.md](REFERENCE.md) 참조

## 필수 패키지

```bash
pip install pypdf pdfplumber
```
```

**FORMS.md**:
```markdown
# PDF 폼 채우기

## 폼 필드 매핑

| 필드 이름 | 데이터 타입 | 예시 |
|----------|----------|------|
| name | 문자열 | "John Doe" |
| date | 날짜 | "2024-01-01" |

## 사용 방법

```python
from scripts.fill_form import fill_pdf_form

fill_pdf_form("template.pdf", {"name": "John", "date": "2024-01-01"}, "output.pdf")
```
```

### 예제 3: 코드 실행이 포함된 Skill

**파일**: `~/.claude/skills/code-testing/SKILL.md`

```yaml
---
name: code-testing
description: 테스트를 작성하고 실행합니다.
allowed-tools: Bash
---

# 코드 테스트

## 테스트 작성

프로젝트의 `tests/` 디렉토리에 테스트 파일을 작성합니다.

## 테스트 실행

```bash
python -m pytest tests/ -v
```

## 실패 처리

테스트 출력 확인:
```bash
python scripts/analyze_failures.py test_output.json
```
```

---

## 🔑 Skills vs. 다른 Claude Code 기능

| 기능 | 사용 목적 | 실행 시기 | 호출 방법 |
|------|---------|---------|---------|
| **Skills** | 전문화된 지식 제공 | Claude가 자동 선택 | 자동 (설명 기반) |
| **Slash Commands** | 재사용 가능한 프롬프트 | `/command` 입력 시 | 명시적 (`/command`) |
| **CLAUDE.md** | 프로젝트 전역 지침 | 모든 대화에 로드 | 자동 (항상) |
| **Subagents** | 격리된 컨텍스트 위임 | 자동 또는 명시적 호출 | 자동 또는 Task 도구 |
| **MCP Servers** | 외부 도구/데이터 연결 | Claude가 필요시 호출 | 자동 (도구 사용) |

**언제 Skill을 사용하는가?**

- ✅ 특정 도메인의 전문 지식이 필요할 때
- ✅ 여러 프로젝트에서 재사용 가능한 워크플로우
- ✅ 복잡한 지침을 반복적으로 제공해야 할 때
- ✅ 외부 스크립트나 참조 자료가 필요할 때

**언제 Slash Command를 사용하는가?**

- ✅ 간단한 프롬프트 템플릿
- ✅ 명시적으로 호출하고 싶은 작업
- ✅ 프로젝트별 특수 명령어

---

## 💡 Best Practices (모범 사례)

### 1. 간결함 유지

- `SKILL.md`는 **500줄 미만** 유지
- 너무 길면 참조 파일로 분리
- Progressive Disclosure 활용

### 2. 명확한 설명 작성

- **"무엇"을 하는지** 명확히
- **"언제"** 사용하는지 구체적으로
- 예: ❌ "코드를 처리합니다" → ✅ "Python 코드에 타입 힌트를 추가합니다. 타입이 없는 코드에 사용합니다."

### 3. 하나 수준의 참조

- SKILL.md에서 직접 참조 파일로 링크
- 참조 파일에서 또 다른 참조 파일로 링크하지 않기
- 깊이는 최대 2레벨까지

### 4. 검증 루프 포함

- 복잡한 작업에는 검증 단계 포함
- 예: 코드 생성 → 실행 → 오류 확인 → 수정

### 5. 다양한 모델에서 테스트

- Haiku (빠른 작업)
- Sonnet (균형잡힌 작업)
- Opus (복잡한 작업)
- 모든 모델에서 작동하도록 지침 작성

### 6. 예제 제공

- 구체적인 입력과 출력 예제
- 일반적인 사용 패턴
- 에지 케이스 처리 방법

---

## 🎓 핵심 요약

### Claude Skills의 3가지 핵심 특징

1. **자동 활성화**: 사용자 요청과 Skill 설명의 의미적 일치로 자동 선택
2. **Progressive Disclosure**: 필요한 정보만 단계적으로 로드하여 성능 최적화
3. **간단한 포맷**: 마크다운 파일 하나로 시작 가능

### 가장 중요한 것

- ✅ **설명(description)이 핵심**: Claude가 언제 Skill을 사용할지 결정
- ✅ **간결함**: 500줄 미만, 필요한 정보만
- ✅ **재사용성**: 여러 프로젝트에서 사용 가능하게 설계

### 시작하기 쉬운 첫 단계

1. Personal Skills 폴더 생성: `~/.claude/skills/my-first-skill/`
2. 간단한 `SKILL.md` 작성 (메타데이터 + 지침)
3. Claude Code 재시작
4. 테스트!

---

## 📚 참조 자료

### 공식 문서

- [Claude Code Skills Documentation](https://code.claude.com/docs/en/skills.md)
- [Agent Skills Overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview.md)
- [Agent Skills Best Practices](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices.md)
- [Using Skills with Claude API](https://platform.claude.com/docs/en/build-with-claude/skills-guide.md)

### 추가 리소스

- [Anthropic Engineering Blog - Agent Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)
- [Skills Cookbook (GitHub)](https://github.com/anthropics/claude-cookbooks/tree/main/skills)

---

**작성자**: CUA_VL Claude Skills 학습
**버전**: 1.0
**최종 업데이트**: 2026-01-04
