**Document Header:**
# Business Requirements Document: Catch Up AI 2026 홈페이지 리뉴얼
**Project Name:** Catch Up AI 2026 홈페이지 리뉴얼
**Date:** 2026-02-08
**Version:** 1.0

## 1. Introduction
본 문서는 Catch Up AI YouTube 채널의 2026년 홈페이지 리뉴얼 프로젝트를 위한 비즈니스 요구사항을 정의합니다. 본 프로젝트는 Catch Up AI의 핵심 콘텐츠(Vibe Coding, Vibe Learning, Vibe Guiding, AI4PKM, 시애틀 AI 생태계)를 체계적으로 소개하고, 방문자의 이해도를 높이며, YouTube 채널 구독 전환율 및 커뮤니티 참여를 유도하는 정보 허브 구축을 목표로 합니다.

## 2. Stakeholder & User Analysis
### 2.1. RACI Matrix
| Role | Responsible (R) | Accountable (A) | Consulted (C) | Informed (I) |
|---|---|---|---|---|
| Product Owner | R | A | C | I |
| Development Team Lead | R | A | C | I |
| UI/UX Designer | C | | R | I |
| Marketing Lead | C | | C | I |
| Content Creators | C | | R | I |

### 2.2. Target Users
- **AI에 관심 있는 개발자 및 비개발자:** Catch Up AI의 독특한 AI 학습/연구 방법론(Vibe Coding, Vibe Learning 등)에 대한 정보를 찾고 이해하고자 하는 사용자.
- **새로운 AI 학습 방법론에 관심 있는 사람:** 기존의 학습 방식 외에 AI를 활용한 새로운 접근 방식에 흥미를 느끼는 사용자.
- **시애틀 지역 AI 커뮤니티 멤버:** 시애틀 지역의 AI 관련 행사 및 커뮤니티 활동에 대한 정보를 얻고자 하는 사용자.

### 2.3. User Journey Map
1. **유입:** YouTube 채널 설명, 소셜 미디어, 검색 엔진 등을 통해 Catch Up AI 홈페이지에 방문.
2. **탐색:** 메인 페이지에서 5가지 핵심 프로젝트를 확인하고, 관심 있는 프로젝트 페이지로 이동.
3. **콘텐츠 소비:** 프로젝트 소개, 관련 YouTube 재생 목록 및 추천 영상 시청을 통해 콘텐츠를 이해.
4. **정보 습득:** 각 방법론의 발전 과정(Vibe Coding → Vibe Learning → Vibe Guiding)을 확인하고, AI4PKM Cohort 및 시애틀 AI 이벤트 정보 확인.
5. **참여 유도:** YouTube 채널 구독, 뉴스레터 신청, 소셜 미디어 팔로우 등을 통해 커뮤니티에 참여.

## 3. Business Objectives
### 3.1. Primary Objectives
- Catch Up AI의 5가지 핵심 콘텐츠(Vibe Coding, Vibe Learning, Vibe Guiding, AI4PKM, 시애틀 AI 생태계)에 대한 방문자의 이해도 증진.
- YouTube 채널의 방대한 콘텐츠를 주제별로 체계적으로 탐색할 수 있는 정보 허브 구축.
- YouTube 채널 구독 전환율 향상.
- AI 학습 및 연구 분야에서 Catch Up AI의 브랜드 인지도 강화.

### 3.2. Success Metrics
| KPI | Target Value |
|---|---|
| 핵심 프로젝트 페이지 방문율 | 80% 이상 |
| YouTube 채널 구독 전환율 | 20% 이상 증가 |
| 웹사이트 평균 세션 시간 | 3분 이상 |
| 이탈률 | 40% 미만 |
| 추천 영상 클릭률 | 15% 이상 |

### 3.3. Business Value
- **브랜드 인지도 강화:** AI 학습 및 연구 분야에서 Catch Up AI의 전문성과 독창성을 부각.
- **커뮤니티 성장:** 양질의 정보 제공을 통해 충성도 높은 사용자층 및 커뮤니티 형성.
- **잠재 고객 확보:** AI 관련 교육 및 멘토링 프로그램(예: AI4PKM Cohort)의 잠재적 참여자 발굴.
- **운영 효율성:** 체계적인 콘텐츠 정리를 통해 YouTube 채널 운영의 효율성 증대.
- **협력 기회 발굴:** 시애틀 지역 AI 커뮤니티와의 연결 강화를 통한 새로운 파트너십 기회 모색.

## 4. Technical Context
### 4.1. System Architecture Overview
- **유형:** 정적 웹사이트 (Static Website)
- **호스팅:** Amazon S3 정적 웹사이트 호스팅
- **개발 언어/기술:** HTML, CSS, JavaScript (필요시 React, Astro 등 프레임워크 사용 후 정적 빌드)
- **백엔드:** 없음 (프론트엔드 단독 구성)
- **콘텐츠 연동:** YouTube 플레이리스트/영상 임베드, YouTube API (선택적 활용)

### 4.2. Technical Constraints
- Amazon S3 호스팅 환경에 최적화된 정적 파일 배포 구조.
- 클라이언트 측 JavaScript만으로 구현 가능한 기능으로 제한.
- AI 코딩 도구(Claude Code, Cursor 등)를 활용한 개발 방식.
- 예산 제약으로 인한 유료 서비스 및 복잡한 인프라 사용 최소화.

### 4.3. Scalability Requirements
- 정적 웹사이트이므로 S3의 높은 확장성을 활용.
- 향후 트래픽 증가 시 Amazon CloudFront와 같은 CDN 서비스를 통해 성능 및 안정성 확보 가능.
- 콘텐츠 양 증가에도 유연하게 대응할 수 있는 단순하고 모듈화된 페이지 구조.

## 5. Functional Requirements
### 5.1. Core Features
- **메인 페이지:** Catch Up AI 소개 및 5가지 핵심 프로젝트 요약 정보, 각 프로젝트 페이지로의 링크 (Priority: Must Have)
- **프로젝트 상세 페이지 (각 5개):**
    - 각 프로젝트의 상세 설명 및 목표 (Priority: Must Have)
    - 관련 YouTube 플레이리스트 임베드 (Priority: Must Have)
    - Product Owner가 선별한 '추천 영상' 섹션 (3-5개) (Priority: Must Have)
- **방법론 발전 스토리 섹션:** Vibe Coding → Vibe Learning → Vibe Guiding의 발전 과정을 시각적으로 표현 (Priority: Should Have)
- **라이브 스트림 일정 섹션:** 예정된 라이브 스트림 정보 표시 (Priority: Nice to Have)
- **언어 전환 기능:** 한국어/영어 페이지 간 전환 버튼 (Priority: Must Have)
- **반응형 디자인:** 데스크톱, 태블릿, 모바일 기기에서의 최적화된 사용자 경험 제공 (Priority: Must Have)

### 5.2. User Stories
- **As a AI 학습자, I want to easily find information about Catch Up AI's Vibe Coding so that I can understand the methodology.**
- **As a YouTube 방문자, I want to see a curated list of important videos for each project so that I can quickly grasp the core content.**
- **As a Seattle AI 커뮤니티 멤버, I want to find information about local AI events so that I can participate in offline activities.**
- **As a Product Owner, I want to embed YouTube playlists easily so that new videos are automatically reflected on the website.**
- **As a website visitor, I want to switch between Korean and English content so that I can consume information in my preferred language.**
- **As a Product Owner, I want to update 'recommended videos' by providing URLs so that I can highlight key content quickly.**

## 6. Non-Functional Requirements
### 6.1. Performance
- **페이지 로딩 속도:** 주요 페이지의 첫 콘텐츠 로딩 시간 3초 이내 (데스크톱/모바일).
- **최적화:** 이미지, 스크립트, CSS 파일 최적화를 통해 로딩 시간 단축.

### 6.2. Security
- **HTTPS:** 모든 트래픽은 HTTPS를 통해 암호화.
- **XSS/CSRF 방지:** 정적 웹사이트이므로 주된 위협은 아니지만, 사용자 입력이 필요한 경우 검증 강화.
- **YouTube API 키 관리:** API 키 사용 시 환경 변수 등을 통해 노출 방지.

### 6.3. Usability
- **직관적인 내비게이션:** 5가지 핵심 프로젝트를 중심으로 한 명확하고 쉬운 메뉴 구조.
- **접근성:** 웹 접근성 표준(WCAG)을 고려한 디자인 및 마크업 (초기 버전에서는 최소한의 준수).
- **일관된 UI/UX:** 브랜드 가이드라인에 따른 일관된 디자인 요소 및 사용자 경험 제공.

### 6.4. Reliability
- **가용성:** Amazon S3의 높은 가용성(99.9% 이상)을 활용.
- **오류 처리:** YouTube API 호출 실패 시 사용자에게 적절한 메시지 표시.

## 7. Constraints & Assumptions
### 7.1. Budget Constraints
- **예산:** 개인 프로젝트이므로 예산이 거의 없으며, 기존 S3 호스팅 비용 외 추가 비용 최소화.
- **AI 코딩 도구:** 현재 사용 중인 유료 AI 코딩 도구(Claude Code, Cursor 등)는 추가 비용으로 간주하지 않음.
- **YouTube API:** 무료 할당량 내에서 사용하거나, 플레이리스트 임베드 방식을 통해 API 비용 발생을 피함.

### 7.2. Timeline
- **MVP (최소 기능 제품):** 2026년 상반기 내 기본 버전 완성 목표.
- **개발 방식:** 본업과 병행하는 개인 프로젝트이므로, 제한된 시간 내에 MVP를 개발하고 점진적으로 개선하는 반복적인 접근 방식 채택.

### 7.3. Assumptions
- **콘텐츠 관리:** Product Owner가 직접 콘텐츠 업데이트를 수행하며, AI 코딩 도구의 도움을 받아 HTML 수정 방식으로 관리 가능할 것으로 가정.
- **기술 스택:** 단순한 HTML/CSS/JavaScript 기반의 정적 웹사이트가 비즈니스 목표 달성에 충분할 것으로 가정.
- **AI 코딩 도구 활용:** AI 코딩 도구가 HTML, CSS, JavaScript 코드 생성 및 단순 반복 작업 자동화에 효과적일 것으로 가정.

## 8. Risk Analysis
| Risk | Impact | Probability | Mitigation Strategy |
|---|---|---|---|
| AI 코딩 도구의 코드 품질 문제 및 디버깅 시간 소요 | 중 | 중 | 단순한 기술 스택 유지, 코드 리뷰 및 테스트 시간 할당, Git을 통한 버전 관리 및 롤백 준비. |
| YouTube 서비스 변경으로 인한 임베드 및 API 연동 문제 | 중 | 저 | YouTube API 의존도를 최소화하고, 플레이리스트 임베드 방식을 우선 적용. 서비스 변경 시 빠르게 대응할 수 있도록 모듈화된 구조 유지. |
| 개인 프로젝트로 인한 개발 시간 지연 | 고 | 고 | MVP 우선 개발 및 단계별 배포, 단순한 기능 위주로 시작하여 점진적 확장. |
| 다국어 콘텐츠 관리의 복잡성 증가 | 중 | 저 | 초기에는 정적 HTML 파일 방식 유지, 콘텐츠 양 증가 시 JSON 기반 동적 로딩 등 확장 가능한 구조 고려. |
| AI 코딩 도구의 의도치 않은 보안 취약점 생성 | 중 | 저 | AI 생성 코드에 대한 보안 검토 및 정적 웹사이트의 상대적으로 낮은 보안 위협 인지. |

## 9. Dependencies
- **외부 시스템:**
    - **YouTube:** YouTube 플레이리스트 및 개별 영상 임베드, YouTube API (선택적으로 사용).
    - **Amazon S3:** 웹사이트 호스팅 및 정적 파일 배포.
- **개발 도구:**
    - **AI 코딩 도구:** Claude Code, Cursor 등.
    - **버전 관리:** Git.

## 10. Approval
본 문서는 Catch Up AI 2026 홈페이지 리뉴얼 프로젝트의 비즈니스 요구사항을 명확히 정의하며, 프로젝트 진행의 근간이 됩니다.

**Product Owner:** [서명]
**날짜:** 2026-02-08
