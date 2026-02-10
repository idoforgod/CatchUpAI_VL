# Remotion Agent Skills 개념 및 아키텍처

## Skills란?

Remotion Agent Skills는 AI Agent(Claude Code, Cursor 등)에게 Remotion 모범 사례를 가르치는 플러그인입니다. SKILL.md 파일과 27개의 규칙 파일로 구성되어 있으며, AI가 Remotion 코드를 생성할 때 이 규칙들을 참조하여 올바른 코드를 만듭니다.

## 설치

```bash
npx skills add remotion-dev/skills -y
```

> `-y` 플래그를 반드시 추가하여 자동 확인 (없으면 대화형 프롬프트에서 멈춤)

## 아키텍처

```
.agents/skills/remotion-best-practices/    # 범용 (모든 AI 도구)
├── SKILL.md                               # 메인 스킬 정의
└── rules/                                 # 27개 규칙 파일
    ├── animations.md                      # 애니메이션 규칙
    ├── compositions.md                    # Composition 등록 규칙
    ├── parameters.md                      # Props/Zod 스키마 규칙
    ├── sequencing.md                      # Series/Sequence 규칙
    ├── text-animations.md                 # 텍스트 애니메이션 규칙
    ├── timing.md                          # spring config 규칙
    ├── transitions.md                     # TransitionSeries 규칙
    └── ...

.claude/skills/ → .agents/skills/          # Claude Code용 심볼릭 링크
```

## 핵심 규칙 요약

### 1. 시간 규칙 (animations.md, timing.md)
- **초 단위 계산**: `2 * fps` (프레임 직접 쓰지 않음)
- **extrapolate 필수**: `extrapolateLeft: "clamp"`, `extrapolateRight: "clamp"`
- **CSS transition/animation 금지**: 반드시 `interpolate()` 또는 `spring()` 사용

### 2. Spring Config 분류 (timing.md)
| 용도 | damping | stiffness | 효과 |
|------|---------|-----------|------|
| smooth | 200 | (기본) | 부드럽고 느린 등장 |
| snappy | 20 | 200 | 빠르고 정확한 등장 |
| bouncy | 8 | 100 | 튕기는 등장 |

### 3. Composition 등록 (compositions.md)
- 항상 Zod 스키마 + defaultProps 사용
- `@remotion/zod-types`의 `zColor()` 사용

### 4. Sequencing (sequencing.md)
- **Series**: 장면 순차 배치 자동화 (수동 `from` 불필요)
- **Sequence layout="none"**: AbsoluteFill 래핑 제거
- **premountFor**: 모든 Sequence에 항상 사용 권장

## 동작 원리

```
자연어 프롬프트 → AI Agent가 SKILL.md + rules/ 참조 → Remotion 코드 생성 → Studio에서 확인
```

AI는 코드를 생성할 때 rules/ 폴더의 규칙을 따르므로, 일반적인 AI 코드 생성보다 Remotion에 특화된 올바른 코드를 만들어냅니다.

## Skills의 장점과 한계

### 장점
1. AI가 Remotion 모범 사례를 자동으로 따름 (수동 교정 감소)
2. 자연어로 빠르게 프로토타이핑 가능
3. 여러 AI 도구에서 동시 지원 (.agents/ → .claude/, .cursor/ 등)
4. 27개 규칙으로 체계적인 코드 품질 보장

### 한계
1. 복잡한 커스텀 로직은 수동 코딩이 필요
2. AI의 디자인 감각에 의존 (구체적 피드백 필수)
3. 규칙 파일 업데이트 시 Skills를 재설치해야 함
