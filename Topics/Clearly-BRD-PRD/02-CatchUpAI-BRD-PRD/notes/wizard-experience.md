# Clearly AI Wizard 사용 경험 기록

**날짜**: 2026-02-08
**프로젝트**: Catch Up AI 2026 Homepage
**모드**: Unified (이전 Plain/Technical Mode가 Unified로 통합된 것으로 보임)

---

## 1. 프로젝트 생성 화면

### Create New Project
- **Project Title**: 프로젝트 이름 입력 (필수)
- **Initial Idea**: 프로젝트 아이디어, 목표, 달성하고자 하는 것 설명 (최대 ~2,000 단어, 최소 20자)
- **Output Language**: 출력 언어 선택 가능 (한국어, 영어 등)
- **"Create & Start BRD →"** 버튼으로 BRD Wizard 시작

### 팁
- Initial Idea에 가능한 많은 맥락을 제공하면 Wizard가 더 정확한 질문을 함
- YouTube 채널 URL, 플레이리스트 URL 등 구체적인 리소스를 포함하면 좋음
- 타겟 오디언스, 성공 지표, 주요 콘텐츠를 미리 정리해서 입력하면 효과적

---

## 2. BRD Wizard 프로세스

### 진행 방식
- AI Assistant가 대화형으로 질문을 하나씩 제시
- 각 질문에 **Example answers** 3개를 제공하여 참고할 수 있음
- 진행률 표시: "Questions answered: X/5+" 및 퍼센트 바
- 최소 질문 수를 넘기면 **"Generate BRD"** 버튼이 나타남
- 추가 질문에 계속 답변하거나, 충분하다고 판단되면 Generate BRD 가능

### 질문 흐름 (실제 경험)

| 순서 | 질문 주제 | 핵심 내용 |
|------|----------|----------|
| 1 | 비즈니스 목표 | 프로젝트의 가장 중요한 비즈니스 목표, 궁극적 비즈니스 가치 |
| 2 | 기술 스택 | 시스템 아키텍처, 기술 스택, YouTube 연동 방식, 기능적 요구사항 |
| 3 | 다국어 지원 & AI 도구 | 다국어 구현 방식, AI 코딩 도구 활용 시 고려사항 |
| 4 | 콘텐츠 관리 | 콘텐츠 업데이트 주기, YouTube 영상 선별 방식, AI 도구 활용 |
| 5 | 리스크 & 제약사항 | 비즈니스/기술적 제약, 예산, 시간, 보안, AI 도구 리스크 |

### 팁
- 질문에 구체적으로 답변할수록 생성되는 BRD의 품질이 높아짐
- Example answers를 참고하되, 실제 프로젝트 상황에 맞게 커스텀하는 것이 중요
- 최소 질문(5개)을 모두 답변한 후 Generate BRD를 권장
- **"Generate BRD" 버튼이 나타나도 추가 질문에 답변하면 더 완성도 높은 BRD 생성 가능**

---

## 3. BRD 생성 결과

### 생성된 BRD 구조
1. Introduction
2. Stakeholder & User Analysis (RACI Matrix, Target Users, User Journey Map)
3. Business Objectives (Primary Objectives, Success Metrics, Business Value)
4. Technical Context (Architecture, Constraints, Scalability)
5. Functional Requirements (Core Features, User Stories)
6. Non-Functional Requirements (Performance, Security, Usability, Reliability)
7. Constraints & Assumptions (Budget, Timeline, Assumptions)
8. Risk Analysis (표 형태)
9. Dependencies
10. Approval

### 품질 평가
- 입력한 내용을 잘 반영하여 체계적인 BRD 생성
- RACI Matrix, User Journey Map 등 자동으로 추가됨
- Success Metrics에 구체적인 KPI와 목표값 자동 생성 (검토 필요)
- Risk Analysis가 표 형태로 깔끔하게 정리됨

### 주의사항
- **날짜 버그**: Document Header의 Date가 2023-11-20으로 잘못 생성됨 → 수동 수정 필요
- BRD 생성 후 반드시 내용을 검토하고 수정이 필요한 부분 확인

---

## 4. BRD 문서 관리

### 내보내기 옵션
- **Copy**: 전체 텍스트 복사
- **Markdown**: .md 파일로 다운로드 (권장 - 로컬 저장에 최적)
- **PDF**: PDF 파일로 다운로드
- **History**: 버전 히스토리 확인

### 편집 옵션
- **Edit**: 문서 내용 직접 편집
- **Regenerate**: BRD 재생성
- **Approve Document**: BRD 승인 → PRD Wizard 잠금 해제

---

## 5. PRD Wizard 프로세스 (부분 경험)

### BRD 승인 후
- BRD를 Approve하면 Project Progress가 33% (1/3)로 업데이트
- "Start PRD Wizard" 버튼이 활성화됨
- PRD Wizard도 BRD Wizard와 유사한 대화형 방식

### PRD Wizard 질문 (경험한 부분)
| 순서 | 질문 주제 | 핵심 내용 |
|------|----------|----------|
| 1 | 기술 스택 상세 | BRD에서 언급한 기술 스택의 구체적 선택, 프레임워크 결정 |
| 2 | 핵심 기능 구현 방식 | YouTube 임베드, 추천 영상, 라이브 일정, 언어 전환 등의 구체적 구현 방식 |

### 중단 사유
- 2번째 질문 화면에서 세션 만료로 로그인 화면 이동
- 재로그인 후 프로젝트 접근 불가 (버그)

---

## 6. 전체 프로젝트 진행 흐름 (Clearly 앱)

```
Create Project → BRD Wizard → Generate BRD → Review & Approve BRD
                                                       ↓
                              PRD Wizard → Generate PRD → Review & Approve PRD
                                                                    ↓
                                                              Tool Output (잠금 해제)
```

**Project Progress 단계**: 0% → 33% (BRD 완료) → 66% (PRD 완료) → 100% (Tool Output 완료)

---

## 7. 발견된 버그

자세한 내용은 `clearly-bug-report.md` 참조.

| # | Bug | 심각도 |
|---|-----|--------|
| 1 | BRD 날짜 자동 생성 오류 | Low |
| 2 | PRD Wizard 중 세션 만료 | High |
| 3 | 재로그인 후 프로젝트 접근 불가 | Critical |

---

## 8. 전반적인 앱 평가

### 좋은 점
- 대화형 Wizard가 비기술자도 쉽게 BRD를 작성할 수 있도록 안내
- Example answers가 매우 유용 (답변 방향을 잡는 데 도움)
- 생성된 BRD의 구조가 전문적이고 체계적
- Markdown/PDF 내보내기 기능 편리
- 한국어 출력 품질이 양호

### 개선이 필요한 점
- 세션 관리 안정성 (Wizard 진행 중 세션 만료 방지)
- 프로젝트 데이터 접근성 (재로그인 후 프로젝트 표시 문제)
- BRD 날짜 자동 생성 정확성
- Plain Mode/Technical Mode가 Unified로 변경된 것에 대한 UI 안내 부족
