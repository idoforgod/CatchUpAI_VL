# Vibe Coding에서 BRD/PRD의 역할

## Vibe Coding이란?

> **Vibe Coding**: 코드를 직접 작성하는 대신, AI에게 비전("vibe")을 전달하여 코드를 생성하는 개발 방법론

2025년 2월 Andrej Karpathy가 명명한 이 개념은 개발자의 역할을 근본적으로 변화시킵니다:

| 기존 개발 | Vibe Coding |
|----------|-------------|
| 코드 작성자 | 아키텍트 + 커뮤니케이터 |
| How에 집중 | What에 집중 |
| 구현 세부사항 | 비전과 요구사항 |

---

## 핵심 원칙

### "Clear requirements = better AI-generated code"

AI 코딩 시대의 황금률:

```
요구사항 품질 = AI 결과물 품질
```

- **명확한 요구사항** → 정확한 코드 생성
- **모호한 요구사항** → 수정/재작업 필요
- **Garbage in, garbage out**이 더욱 중요해짐

---

## BRD/PRD가 중요한 이유

### 1. AI의 컨텍스트 제공

AI 코딩 도구(Cursor, Claude Code, V0 등)는 명확한 지시가 필요합니다:

| 없을 때 | 있을 때 |
|---------|---------|
| "로그인 기능 만들어줘" | BRD/PRD 기반 상세 프롬프트 |
| 추측과 가정으로 구현 | 요구사항에 맞는 정확한 구현 |
| 반복적인 수정 | 첫 시도에 가까운 결과 |

### 2. 비전의 문서화

아이디어가 머릿속에만 있으면:
- AI가 이해할 수 없음
- 팀원과 공유 불가
- 나중에 본인도 잊어버림

BRD/PRD로 문서화하면:
- AI 프롬프트로 직접 활용
- 팀 전체가 같은 비전 공유
- 개발 전/중/후 참조 가능

### 3. 품질 보장

```
[아이디어] → [BRD] → [PRD] → [AI 프롬프트] → [코드]
     ↑                              ↓
     └──────── 검증 기준 ───────────┘
```

BRD/PRD는 최종 결과물을 검증하는 기준이 됩니다.

---

## Vibe Coding 워크플로우

### Three Complexity Tiers

| Tier | 복잡도 | BRD/PRD 필요성 | 예시 |
|------|--------|---------------|------|
| **Tier 1** | 낮음 | 선택 | 간단한 스크립트, 유틸리티 |
| **Tier 2** | 중간 | 권장 | 기능 추가, 모듈 개발 |
| **Tier 3** | 높음 | 필수 | 신규 프로젝트, 아키텍처 설계 |

### Clearly의 역할

```
[비전/아이디어]
      ↓
  [Clearly]  ← AI Wizard로 요구사항 정리
      ↓
  [BRD 생성] ← 비즈니스 요구사항
      ↓
  [PRD 생성] ← 제품 명세
      ↓
[Vibe Coding Prompt] ← AI 코딩 도구용 프롬프트
      ↓
  [코드 생성]
```

---

## 실무 적용 팁

### 1. Plain Mode vs Technical Mode 선택

| 상황 | 모드 | 이유 |
|------|------|------|
| V0, Bubble 사용 | Plain Mode | Vibe coding prompts 생성 |
| Cursor, Claude Code 사용 | Technical Mode | Task lists + 의존성 |
| 프로토타입 | Plain Mode | 빠른 시작 |
| 프로덕션 | Technical Mode | 상세한 명세 |

### 2. 좋은 BRD/PRD 작성 원칙

- **구체적으로**: "빠르게" → "3초 이내 로딩"
- **검증 가능하게**: "사용하기 쉽게" → "3단계 이내 완료"
- **우선순위 명시**: Must have / Should have / Nice to have

### 3. AI와의 효과적인 협업

```markdown
# 좋은 프롬프트 예시
"다음 PRD를 기반으로 React 컴포넌트를 구현해줘:
[PRD 내용 붙여넣기]

특히 다음에 집중해줘:
- 사용자 인증 흐름
- 에러 처리
- 반응형 디자인"
```

---

## 요약

| 질문 | 답변 |
|------|------|
| Vibe Coding이란? | AI에게 비전을 전달하여 코드를 생성하는 방법론 |
| BRD/PRD가 왜 필요? | AI에게 명확한 컨텍스트를 제공하기 위해 |
| Clearly의 역할? | 비전을 BRD/PRD로 변환하는 도구 |
| 핵심 원칙? | Clear requirements = better AI-generated code |

---

**작성일**: 2026-02-01
**Topic**: Clearly-BRD-PRD / M1
