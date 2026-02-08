# Clearly App Bug Report

**보고자**: Changsoo Park
**날짜**: 2026-02-08
**앱 URL**: https://www.clearlyreqs.com/
**프로젝트**: Catch Up AI 2026 Homepage (Unified Mode)

---

## Bug #1: BRD 문서 날짜 자동 생성 오류

**심각도**: Low
**재현 경로**: Create Project → BRD Wizard 완료 → Generate BRD → View Document

**현상**:
- BRD Document Header의 Date가 `2023-11-20`으로 자동 생성됨
- 실제 프로젝트 생성일: 2026-02-08
- Project Details에서는 "Created 2/8/2026"으로 정확하게 표시됨

**기대 동작**:
- BRD Document Header의 Date가 실제 프로젝트 생성일(2026-02-08)과 일치해야 함

**스크린샷 참고**:
- BRD Document에서 "Date: 2023-11-20" 표시 확인

---

## Bug #2: PRD Wizard 진행 중 세션 만료 (Session Timeout)

**심각도**: High
**재현 경로**: BRD Approve → Start PRD Wizard → 질문 응답 중 → 갑자기 로그인 화면으로 이동

**현상**:
- PRD Wizard에서 두 번째 질문이 표시된 상태에서 답변을 작성하던 중 로그인 화면으로 강제 이동됨
- 첫 번째 질문에 대한 답변은 이미 제출한 상태였음
- Wizard 진행 중 별도의 세션 만료 경고 없이 바로 로그아웃됨

**기대 동작**:
- Wizard 진행 중에는 세션이 충분히 유지되어야 함 (최소 30분 이상)
- 세션 만료 전 경고 메시지를 표시하고, 작성 중인 답변이 유실되지 않도록 해야 함

---

## Bug #3: 재로그인 후 프로젝트 목록 표시 불가

**심각도**: Critical
**재현 경로**: 세션 만료로 로그아웃 → 재로그인 → 대시보드

**현상**:
- 재로그인 후 대시보드 상단 통계에는 "Total Projects: 2, Documents: 1"로 표시됨
- 그러나 "Your Projects" 섹션에는 "No projects yet"으로 표시됨
- 검색창에서 프로젝트명으로 검색해도 결과 없음
- 페이지 새로고침(F5)으로도 해결되지 않음
- **결과적으로 BRD가 승인된 프로젝트에 접근할 수 없어 PRD Wizard를 이어서 진행할 수 없음**

**기대 동작**:
- 재로그인 후 이전에 생성한 프로젝트가 정상적으로 목록에 표시되어야 함
- 프로젝트 데이터가 유지되어야 함

**영향**:
- BRD Wizard에서 약 30분간 작성한 답변과 생성된 BRD에 접근 불가
- PRD 생성 작업을 진행할 수 없음
- 프로젝트를 처음부터 다시 생성해야 할 수 있음

---

## 환경 정보

- **OS**: Windows 11
- **브라우저**: (사용한 브라우저 정보 추가)
- **Clearly 앱 모드**: Unified
- **계정**: Changsoo Park
- **발생 시각**: 2026-02-08 약 오전 5:00-5:45 AM (PST)

---

## 요약

| # | Bug | 심각도 | 상태 |
|---|-----|--------|------|
| 1 | BRD 날짜 자동 생성 오류 (2023-11-20) | Low | Open |
| 2 | PRD Wizard 중 세션 만료 (경고 없음) | High | Open |
| 3 | 재로그인 후 프로젝트 목록 접근 불가 | Critical | Open |

**비고**: BRD는 Markdown으로 다운로드(Export)하여 로컬에 보관하고 있으므로 BRD 데이터는 유실되지 않았습니다. 그러나 Clearly 앱 내에서 PRD를 이어서 생성하는 것이 불가능한 상태입니다.
