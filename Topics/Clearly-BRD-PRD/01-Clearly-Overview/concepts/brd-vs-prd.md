# BRD vs PRD 비교

## 개요

소프트웨어 개발에서 요구사항 문서는 프로젝트 성공의 핵심입니다. BRD와 PRD는 서로 다른 목적과 대상을 가진 두 가지 핵심 문서입니다.

---

## 비교표

| 항목 | BRD (Business Requirements Document) | PRD (Product Requirements Document) |
|------|--------------------------------------|-------------------------------------|
| **초점** | "왜(Why)" + "무엇(What)" | "무엇(What)" + "어떻게(How)" |
| **관점** | 비즈니스 관점 | 제품/기술 관점 |
| **대상 독자** | 경영진, 이해관계자, 투자자 | 개발팀, 디자이너, QA |
| **추상화 수준** | 높음 (High-level) | 낮음 (Detailed) |
| **작성 시점** | 프로젝트 초기 | BRD 이후, 개발 전 |
| **주요 내용** | 비즈니스 목표, 성공 지표, 이해관계자 요구 | 기능 명세, 사용자 상호작용, 기술 요구사항 |

---

## 상세 비교

### BRD (Business Requirements Document)

**목적**: 프로젝트가 비즈니스에 왜 필요한지, 무엇을 달성해야 하는지 정의

**주요 구성요소**:
- Business objectives (비즈니스 목표)
- Stakeholder needs (이해관계자 요구)
- High-level requirements (상위 수준 요구사항)
- Success metrics (성공 지표)

**특징**:
- 기술적 구현 방법을 다루지 않음
- "어떻게"보다 "왜"와 "무엇"에 집중
- 프로젝트의 비즈니스 정당성 제공

**예시 질문**:
- 이 프로젝트가 왜 필요한가?
- 어떤 비즈니스 문제를 해결하는가?
- 성공을 어떻게 측정할 것인가?

---

### PRD (Product Requirements Document)

**목적**: BRD의 비즈니스 요구사항을 구체적인 제품 기능으로 변환

**주요 구성요소**:
- Detailed feature specs (상세 기능 명세)
- User interactions (사용자 상호작용)
- Technical requirements (기술 요구사항)
- Implementation details (구현 세부사항)

**특징**:
- BRD를 기반으로 작성
- 개발팀이 바로 구현할 수 있는 수준의 상세함
- 사용자 스토리, 와이어프레임 포함 가능

**예시 질문**:
- 사용자가 이 기능을 어떻게 사용하는가?
- 어떤 데이터가 필요한가?
- 에러 상황에서 어떻게 동작해야 하는가?

---

## 문서 흐름

```
[아이디어/비전]
      ↓
    [BRD]  ← 비즈니스 요구사항 정의 (Why + What)
      ↓
    [PRD]  ← 제품 요구사항 상세화 (What + How)
      ↓
[개발/구현]
```

---

## Vibe Coding에서의 중요성

AI 코딩 시대에서 BRD/PRD의 중요성은 더욱 커졌습니다:

> "Clear requirements = better AI-generated code"
> — Clearly

- **입력 품질 = 출력 품질**: AI에게 명확한 요구사항을 전달해야 좋은 코드가 생성됨
- **아키텍트 역할**: 개발자의 역할이 "코드 작성자"에서 "아키텍트 + 커뮤니케이터"로 전환
- **문서의 재사용**: 잘 작성된 BRD/PRD는 AI 프롬프트로 직접 활용 가능

---

## Clearly에서의 모드 선택

| 모드 | 대상 | 출력물 |
|------|------|--------|
| **Plain Mode** | 비기술자, 비즈니스 이해관계자 | AI 코딩 도구용 프롬프트 |
| **Technical Mode** | 개발자, 기술 팀 | 스프린트 작업 목록, 의존성, 우선순위 |

---

## 참고 자료

- [Clearly BRD 문서](https://www.clearlyreqs.com/docs/brd)
- [Clearly PRD 문서](https://www.clearlyreqs.com/docs/prd)
- [Vibe Coding 소개](https://www.clearlyreqs.com/docs/vibe-coding)

---

**작성일**: 2026-02-01
**Topic**: Clearly-BRD-PRD / M1
