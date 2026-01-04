# Claude Skills 참조 링크 모음

**작성일**: 2026-01-04
**목적**: Claude Skills 학습을 위한 공식 문서 및 유용한 리소스 정리

---

## 📚 공식 문서 (필수)

### 1. Claude Code Skills Documentation
- **URL**: https://code.claude.com/docs/en/skills.md
- **내용**: Claude Code에서 Skills 생성, 관리, 공유하는 방법
- **난이도**: 초급
- **언제 읽기**: Skills를 처음 배울 때, 빠른 시작 가이드

### 2. Agent Skills Overview
- **URL**: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview.md
- **내용**: Skills의 아키텍처, 개념, 모든 Product에서의 Skills 사용법
- **난이도**: 중급
- **언제 읽기**: Skills의 작동 원리를 깊이 이해하고 싶을 때

### 3. Agent Skills Best Practices
- **URL**: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices.md
- **내용**: Skill 작성 가이드라인, 평가 방법, 반복 개선 전략
- **난이도**: 중급
- **언제 읽기**: 실제 Skill을 작성하기 전, 품질 높은 Skill을 만들고 싶을 때

### 4. Using Skills with Claude API
- **URL**: https://platform.claude.com/docs/en/build-with-claude/skills-guide.md
- **내용**: Claude API를 통한 Skills 생성, 업로드, 사용 방법
- **난이도**: 고급
- **언제 읽기**: API를 통해 프로그래밍 방식으로 Skills를 관리하고 싶을 때

### 5. Claude Agent SDK - Skills
- **URL**: https://platform.claude.com/docs/en/agent-sdk/skills
- **내용**: TypeScript/Python에서 Skills를 프로그래밍 방식으로 사용하는 방법
- **난이도**: 고급
- **언제 읽기**: SDK를 사용하여 커스텀 에이전트를 만들 때

---

## 🎓 튜토리얼 및 예제

### 1. Skills Cookbook (GitHub)
- **URL**: https://github.com/anthropics/claude-cookbooks/tree/main/skills
- **내용**: 실제 Skills 예제 및 템플릿 모음
- **난이도**: 초급 ~ 중급
- **유용한 점**: 실제 코드를 보고 따라하며 학습 가능

### 2. Anthropic Engineering Blog - Agent Skills
- **URL**: https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills
- **내용**: Skills 아키텍처 설계 배경, 실제 적용 사례, 기술적 세부 사항
- **난이도**: 중급 ~ 고급
- **유용한 점**: Skills가 왜 이렇게 설계되었는지 이해할 수 있음

---

## 🔧 관련 도구 및 리소스

### Claude Code
- **URL**: https://claude.com/claude-code
- **설명**: VS Code Extension 또는 CLI로 Claude를 코딩에 사용
- **관련성**: Skills를 실제로 실행하고 테스트하는 환경

### Claude API
- **URL**: https://www.anthropic.com/api
- **설명**: Claude API를 프로그래밍 방식으로 사용
- **관련성**: API를 통해 Skills를 관리하고 사용할 수 있음

### MCP (Model Context Protocol)
- **URL**: https://modelcontextprotocol.io/
- **설명**: 외부 도구 및 데이터를 Claude에 연결하는 프로토콜
- **관련성**: Skills와 함께 사용하여 외부 시스템 통합 가능

---

## 📖 학습 경로 추천

### 초보자 (Skills를 처음 배우는 경우)

1. **Claude Code Skills Documentation** 읽기
   - Skills가 무엇인지 기본 개념 파악
   - 빠른 시작 가이드 따라하기
   - 첫 번째 Skill 만들기

2. **Skills Cookbook 예제** 따라하기
   - 간단한 예제부터 시작
   - 코드를 직접 실행해보며 이해

3. **concepts/claude-skills-overview.md** 복습
   - 학습한 내용을 정리하며 복습

### 중급자 (기본 Skill을 만들어 본 경우)

1. **Agent Skills Best Practices** 읽기
   - Skill 품질을 높이는 방법 학습
   - 평가 및 반복 개선 전략

2. **Agent Skills Overview** 읽기
   - Progressive Disclosure 등 고급 개념 이해
   - 아키텍처 이해

3. **실제 프로젝트에 Skill 적용**
   - 업무에 필요한 Skill 개발
   - 테스트 및 개선 반복

### 고급자 (API 통합 및 커스텀 에이전트)

1. **Using Skills with Claude API** 읽기
   - API를 통한 Skill 관리

2. **Claude Agent SDK** 탐색
   - 프로그래밍 방식으로 Skills 사용
   - 커스텀 에이전트 개발

3. **Anthropic Engineering Blog** 읽기
   - 아키텍처 깊이 이해
   - 고급 사용 사례 연구

---

## 💡 추가 학습 자료 (선택)

### 커뮤니티 및 포럼

- **Anthropic Discord**: Skills 관련 질문 및 토론
- **GitHub Discussions**: claude-cookbooks repository
- **Reddit r/ClaudeAI**: 사용자 경험 공유

### 관련 기술

- **Markdown 문법**: Skills는 마크다운으로 작성됨
  - https://www.markdownguide.org/

- **YAML 문법**: 메타데이터 작성에 사용
  - https://yaml.org/

- **Git/GitHub**: Skills 버전 관리 및 공유
  - https://docs.github.com/

---

## 🔖 빠른 참조

### Skill 생성 체크리스트

- [ ] 디렉토리 생성: `~/.claude/skills/skill-name/`
- [ ] SKILL.md 파일 작성 (메타데이터 + 지침)
- [ ] description을 명확하고 구체적으로 작성
- [ ] Claude Code 재시작
- [ ] "What Skills are available?" 로 검증
- [ ] 실제 요청으로 테스트

### SKILL.md 템플릿

```yaml
---
name: skill-name
description: 이 Skill이 무엇을 하는지, 언제 사용하는지 명확히 설명
---

# Skill 제목

## 지침

1. 단계 1
2. 단계 2
3. 단계 3

## 예제

사용 예제
```

### 자주 사용하는 allowed-tools

- `Read`: 파일 읽기
- `Bash`: 명령어 실행
- `Grep`: 코드 검색
- `Glob`: 파일 패턴 검색
- `Edit`, `Write`: 파일 편집/생성
- `Task`: 서브에이전트 실행

---

## 📝 노트 및 팁

### 학습하면서 발견한 유용한 팁

1. **description이 가장 중요**: Claude가 Skill을 언제 사용할지 결정하는 핵심
2. **간결함 유지**: SKILL.md는 500줄 미만 권장
3. **Progressive Disclosure 활용**: 필요한 정보만 단계적으로 제공
4. **예제 포함**: 구체적인 사용 예제가 이해도를 높임
5. **테스트 반복**: 다양한 요청으로 Skill이 제대로 활성화되는지 확인

### 주의사항

- ⚠️ Skill 이름은 소문자, 숫자, 하이픈만 사용 (최대 64자)
- ⚠️ description은 최대 1024자
- ⚠️ Skill 수정 후 Claude Code 재시작 필요
- ⚠️ Personal Skill이 Project Skill보다 우선순위 높음 (Enterprise 제외)

---

**작성자**: CUA_VL Claude Skills 학습
**최종 업데이트**: 2026-01-04
