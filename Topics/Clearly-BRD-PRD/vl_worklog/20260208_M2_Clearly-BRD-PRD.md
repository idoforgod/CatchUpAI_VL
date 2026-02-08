# WorkLog - M2: Catch Up AI BRD/PRD 실습

**날짜**: 2026-02-08
**Topic**: Clearly-BRD-PRD
**모듈**: M2 - Catch Up AI BRD/PRD 실습
**학습 시간**: 약 2시간 (Clearly 앱 버그로 인해 조기 종료)

---

## 🎯 오늘의 학습 목표

- [x] Clearly에서 "Catch Up AI 2026 Homepage" 프로젝트 생성
- [x] AI Wizard를 통해 BRD 생성 완료
- [x] BRD 검토 및 필요한 수정 완료
- [ ] PRD 생성 완료 (Clearly 버그로 중단)
- [x] BRD 내보내기 완료 (PRD는 미완료)
- [x] `02-CatchUpAI-BRD-PRD/` 폴더에 문서 저장
- [ ] README.md 작성 (다음 세션으로 연기)
- [x] WorkLog 작성 완료
- [x] Daily Retrospective 작성

---

## 📚 진행 내용

### 1. Catch Up AI BRD 생성

**목적**: Clearly의 AI Wizard를 실제로 사용하여 BRD 생성 경험 획득

**과정**:
1. Clearly 앱 접속 및 로그인
2. "Create Project" → 프로젝트명: "Catch Up AI 2026 Homepage"
3. Output Language: 한국어 선택
4. Initial Idea에 상세한 프로젝트 설명 입력 (YouTube 채널, 5개 핵심 콘텐츠, 플레이리스트 URL 포함)
5. BRD Wizard에서 5개 질문에 답변 (비즈니스 목표, 기술 스택, 다국어 지원, 콘텐츠 관리, 리스크)
6. Generate BRD → BRD 문서 생성 완료
7. Markdown으로 내보내기 (BRD-v1.md)
8. Approve Document → PRD Wizard 잠금 해제

**결과**:
- BRD 문서 생성 및 내보내기 완료
- 로컬 저장: `02-CatchUpAI-BRD-PRD/brd/catchupai-2026-brd.md`
- 날짜 버그 수동 수정 (2023-11-20 → 2026-02-08)
- BRD 구조: Introduction, Stakeholder Analysis, Business Objectives, Technical Context, Functional/Non-Functional Requirements, Constraints, Risk Analysis, Dependencies, Approval (총 10개 섹션)

**메모/인사이트**:
- Initial Idea에 구체적인 URL과 상세 설명을 넣을수록 Wizard 질문이 정확해짐
- Example answers가 답변 방향을 잡는 데 매우 유용
- 앱이 이전 Plain/Technical Mode에서 "Unified" 모드로 변경됨
- BRD 생성 품질이 높음 - RACI Matrix, User Journey Map 등 자동 생성

---

### 2. Catch Up AI PRD 생성 (중단)

**목적**: BRD를 기반으로 구체적인 제품 사양 문서 작성

**과정**:
1. BRD Approve 후 "Start PRD Wizard" 클릭
2. PRD Wizard 첫 번째 질문 (기술 스택 상세) 답변 제출
3. 두 번째 질문 (핵심 기능 구현 방식) 표시됨
4. **세션 만료로 로그인 화면 이동** (답변 작성 중)
5. 재로그인 후 프로젝트 접근 불가

**결과**:
- PRD 생성 중단 - Clearly 앱 버그(세션 만료 + 프로젝트 접근 불가)
- 다음 세션에서 버그 해결 후 재시도 예정

**메모/인사이트**:
- PRD Wizard도 BRD와 유사한 대화형 방식
- BRD 내용을 기반으로 더 구체적인 기술/제품 질문을 함
- 세션 관리가 불안정 - Wizard 답변 작성에 시간이 걸리므로 세션 유지가 중요

---

### 3. 문서 정리 및 Wizard 경험 기록

**목적**: 산출물을 로컬에 저장하고 사용 경험 기록

**과정**:
1. `02-CatchUpAI-BRD-PRD/` 폴더 구조 생성 (brd/, prd/, notes/)
2. BRD 문서 저장 (날짜 수정 포함)
3. Wizard 경험 기록 작성 (`notes/wizard-experience.md`)
4. 버그 리포트 작성 (`notes/clearly-bug-report.md`)

**결과**:
- BRD 로컬 저장 완료
- Wizard 사용 경험 상세 기록 완료
- 개발자 전달용 버그 리포트 작성 완료

---

## 🐛 문제 해결 로그

### 문제 1: BRD 문서 날짜 자동 생성 오류

**증상**: Clearly 앱이 BRD를 생성할 때 Document Header의 Date가 `2023-11-20`으로 잘못 설정됨 (실제 날짜: 2026-02-08)

**원인**: Clearly 앱의 날짜 자동 생성 로직 버그로 추정

**해결**: 로컬 저장 시 날짜를 `2026-02-08`로 수동 수정 완료

**비고**: Clearly 개발자에게 피드백할 사항으로 기록

### 문제 2: PRD Wizard 진행 중 세션 만료

**증상**: PRD Wizard에서 두 번째 질문이 표시된 상태에서 갑자기 로그인 화면으로 돌아감. 답변 입력 전에 세션이 만료됨.

**원인**: Clearly 앱의 세션 타임아웃이 너무 짧거나, Wizard 진행 중 세션 유지가 안 되는 버그로 추정

**해결**: 재로그인 시도했으나 프로젝트 접근 불가 (문제 3으로 이어짐)

**비고**: Clearly 개발자에게 피드백할 사항 - Wizard 진행 중에는 세션이 유지되어야 함

### 문제 3: 대시보드 프로젝트 목록 표시 오류

**증상**: 재로그인 후 대시보드 상단에는 "Total Projects: 2, Documents: 1"로 표시되지만, 프로젝트 목록에는 "No projects yet"으로 나옴

**원인**: 대시보드 프로젝트 목록 로딩 버그로 추정

**해결**: 페이지 새로고침, 프로젝트 검색 모두 실패. 프로젝트에 접근 불가.

**비고**: Clearly 개발자에게 피드백할 사항 - 재로그인 후 프로젝트 데이터 접근 불가는 치명적 버그

---

## 📊 DoD 체크리스트

로드맵 M2의 Definition of Done:

- [x] Clearly에서 "Catch Up AI 2026 Homepage" 프로젝트 생성
- [x] AI Wizard를 통해 BRD 생성 완료
- [x] BRD 검토 및 필요한 수정 완료
- [ ] PRD 생성 완료 (Clearly 버그로 중단)
- [x] BRD 내보내기 완료 (PRD는 미완료)
- [x] `02-CatchUpAI-BRD-PRD/` 폴더에 문서 저장
- [ ] README.md 작성 (다음 세션으로 연기)
- [x] WorkLog 작성 완료
- [x] Daily Retrospective 작성

**완료율**: 7/9 (78%) - PRD 생성 및 README 작성은 다음 세션에서 완료 예정

---

## 💡 Daily Retrospective

### What went well (잘된 점)
- Clearly BRD Wizard를 처음부터 끝까지 체험하고 양질의 BRD를 생성
- Initial Idea에 구체적인 정보(YouTube URL, 플레이리스트 등)를 포함하여 정확한 BRD 생성
- BRD를 Markdown으로 내보내기하여 로컬에 안전하게 보관
- Wizard 사용 경험을 상세히 기록하여 다른 사람도 참고 가능

### What could be improved (개선할 점)
- Clearly 앱의 세션 관리 불안정으로 PRD 작업이 중단됨
- BRD 내보내기를 Approve 전에 했어야 더 안전했을 수 있음
- Wizard 답변을 미리 텍스트 파일로 준비해두면 빠르게 붙여넣기 가능 (세션 만료 대비)

### Insights (인사이트)
- Clearly의 BRD 생성 품질은 높지만, 앱 안정성에 개선이 필요
- AI Wizard의 Example answers가 비기술자에게 매우 유용한 가이드 역할
- BRD/PRD 문서를 생성하는 과정 자체가 프로젝트 요구사항을 정리하는 좋은 방법
- 중요한 문서는 항상 로컬에 백업을 유지해야 함 (클라우드 앱 의존 위험)
- Unified 모드: 이전의 Plain/Technical 분리 대신 통합된 방식으로 변경됨

### Tomorrow's focus (내일 집중할 것)
- Clearly 앱 버그 확인 (프로젝트 접근 가능 여부)
- 버그 해결 시: PRD Wizard 완료 및 PRD 생성
- 버그 미해결 시: 새 프로젝트로 재시도 또는 Claude와 직접 PRD 작성
- 개발자에게 버그 리포트 전달

---

## 📎 참조 및 산출물

**생성된 파일/폴더**:
- `02-CatchUpAI-BRD-PRD/`: M2 산출물 폴더
- `02-CatchUpAI-BRD-PRD/brd/catchupai-2026-brd.md`: Clearly에서 생성한 BRD (날짜 수정 완료)
- `02-CatchUpAI-BRD-PRD/notes/wizard-experience.md`: AI Wizard 사용 경험 상세 기록
- `02-CatchUpAI-BRD-PRD/notes/clearly-bug-report.md`: 개발자 전달용 버그 리포트

**참조 자료**:
- [Clearly 앱](https://www.clearlyreqs.com/): 실습 진행
- [Catch Up AI 현재 홈페이지](https://catchupai.net/): 참고용
- [Catch Up AI YouTube](https://www.youtube.com/@catchupai): 채널 정보
- `01-Clearly-Overview/`: M1 학습 내용

**다음 세션 준비사항**:
- Clearly 앱에 로그인하여 프로젝트 접근 가능 여부 확인
- 버그 리포트를 개발자에게 전달
- PRD 생성 전략 결정 (Clearly 앱 또는 직접 작성)

---

**작성자**: CUA_VL 학습자
**방법론**: CUA_VL (Catch Up AI Vibe Learning)
