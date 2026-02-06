# CUA_VL Roadmap 생성 프롬프트

**버전**: 2.0
**생성일**: 2026-02-05
**방법론**: Catch Up AI Vibe Learning (CUA_VL)

---

## 사용 방법

이 프롬프트는 `topic_info.md`의 Topic 정보가 주입된 상태입니다.
이 파일 전체를 AI에게 전달하면 CUA_VL 표준에 맞는 학습 로드맵을 생성합니다.

생성된 로드맵을 `vl_roadmap/YYYYMMDD_RoadMap_Remotion-VideoCreation.md`에 저장하세요.

---

## [1단계] Topic 정보 (주입 완료)

### 기본 정보

**Topic 이름**: `Remotion-VideoCreation`

**Topic 설명**:
```
React 기반 영상 제작 프레임워크 Remotion의 Core와 Skills를 학습하여,
유튜브 설명 영상(모션그래픽)을 직접 제작하는 것까지 다룹니다.
Remotion Core는 React 코드로 영상을 프로그래밍하는 프레임워크이며,
Remotion Skills는 자연어로 AI에게 영상을 지시하면 자동으로 React 코드를 생성하여 렌더링하는 기능입니다.
```

**학습 목적**:
```
- 유튜버로서 모션그래픽 설명 영상을 코드 기반으로 제작하는 역량 확보
- AI 시대에 맞는 프로그래밍 방식의 영상 제작 파이프라인 구축
- Remotion Skills를 활용한 효율적인 영상 제작 워크플로우 습득
```

**예상 학습 기간**: `2-3주 (주당 5-10시간, 총 15-25시간)`

---

### 환경 및 사전 지식

**운영 체제**: `Windows`

**주요 도구 및 기술 스택**:
```
- VS Code
- Node.js (18+ 권장)
- npm 또는 pnpm
- Remotion (Core + Skills)
- React / TypeScript (Remotion 사용에 필요한 수준)
- FFmpeg (영상 렌더링용, Remotion이 자동 설치)
```

**사전 지식**:
```
필수:
- 기본적인 컴퓨터 사용 능력
- 터미널/명령 프롬프트 기본 사용법

권장:
- JavaScript 기본 문법 (있으면 유리)
- HTML/CSS 기본 개념 (있으면 유리)
```

---

### 산출물 및 참조

**학습 목표** (달성하고 싶은 것):
```
- [ ] React/TypeScript 기초를 Remotion 활용 수준으로 이해한다
- [ ] Remotion 프로젝트를 생성하고 영상을 렌더링할 수 있다
- [ ] Remotion Core로 기본 모션그래픽 컴포넌트를 만들 수 있다
- [ ] Remotion Skills로 자연어 지시를 통해 영상을 생성할 수 있다
- [ ] 유튜브용 설명 영상(모션그래픽) 1개를 완성하여 내보낼 수 있다
```

**참조 자료**:
```
- Remotion 공식 사이트: https://www.remotion.dev/
- Remotion 문서: https://www.remotion.dev/docs/
- Remotion GitHub: https://github.com/remotion-dev/remotion
```

**vl_materials/ 폴더**:
```
- 20260205_Remotion_Research.md: Remotion 기술 조사 자료 (Core, Skills, 렌더링 등)
```

---

## [2단계] AI에게 요청할 작업

위에 주입된 Topic 정보를 바탕으로 **CUA_VL 방법론**에 맞는 학습 로드맵을 생성해주세요.

---

### STEP 1: 학습 기간 적정성 검토 (필수)

**로드맵 생성 전 반드시 수행:**

사용자가 입력한 학습 기간 `2-3주 (주당 5-10시간)`이 해당 Topic에 적절한지 분석하고 피드백을 제공하세요.

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

**중요**: 사용자가 확인하고 최종 결정할 때까지 로드맵 생성을 중단하고 대기하세요.

---

### STEP 2: 로드맵 생성 요구사항

사용자가 기간을 최종 확정한 후 아래 요구사항에 따라 로드맵을 생성하세요.

#### 전체 구조

**학습 기간**: 최종 확정된 기간에 맞춰 조정
- 3일 이하: 3-5개 모듈
- 1-2주: 5-7개 모듈
- 1개월 이상: 7-10개 모듈

**모듈 구성 원칙**:
- 각 모듈은 독립적으로 완료 가능한 단위
- 난이도는 점진적 상승 (Basics → Intermediate → Advanced)
- 마지막 모듈은 Capstone 프로젝트 (통합 실습)

#### 각 모듈 필수 포함 사항 (9가지)

1. 모듈 기본 정보 (번호, 제목, 예상 시간)
2. 학습 목표 (3-5개, 검증 가능)
3. 주요 개념 (3-5개)
4. 실습 과제 (2-3개, 구체적 단계)
5. 산출물 (폴더 구조)
6. Definition of Done (5-8개 체크리스트)
7. Self-Assessment (AI 시대 평가 기준)
8. 예상 시간 배분 (버퍼 20% 포함)
9. 참조 자료

#### 실습 설계 원칙
- 이론 20-30%, 실습 70-80%
- 점진적 복잡도 상승
- 검증 가능한 결과
- AI 시대 학습 범위 (개념 이해 + AI 지시 능력 > 암기)
- 산출물 = 교과서 품질

---

## [3단계] 출력 형식

마크다운 형식으로 로드맵을 생성하고 `vl_roadmap/YYYYMMDD_RoadMap_Remotion-VideoCreation.md`에 저장하세요.

---

**생성자**: CUA_VL
**Template 버전**: 2.0
**방법론**: Catch Up AI Vibe Learning (CUA_VL)
