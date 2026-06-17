# addyosmani/agent-skills 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/addyosmani__agent-skills |
| remote | https://github.com/addyosmani/agent-skills.git |
| HEAD | a5f0b17 (2026-06-15) Merge pull request #260 from nucliweb/fix/issue-258-agents-readme-frontmatter-warning |
| branch | main |
| groups | previous-clone-inventory-107 |
| files | 90 |
| dirs | 40 |
| stack | unknown/mixed |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Agent Skills`, `Commands`, `Quick Start`, `All 24 Skills`, `Meta - Discover which skill applies`, `Define - Clarify what to build`, `Plan - Break it down`, `Build - Write the code`, `Verify - Prove it works`, `Review - Quality gates before merge`, `Ship - Deploy with confidence`, `Agent Personas`, `Reference Checklists`, `How Skills Work`, `Project Structure`, `Why Agent Skills?`, `Contributing`, `License`

> Agent Skills Production grade engineering skills for AI coding agents. Skills encode the workflows, quality gates, and best practices that senior engineers use when building software. These ones are packaged so AI agents follow them consistently across every phase of development. Commands 7 slash commands that map to the development lifecycle. Each one activates the right skills automatically. What you're doing Command Key principle Define what to build /spec Spec before code Plan how to build it /plan Small, atomic tasks Build incrementally /build One slice at a time Prove it works /test Tests are proof Review before merge /review Improve code health Simplify the code /code simplify Clarity over cleverness Ship to production /ship Faster is safer Want fewer manual steps once the spec exists? /build auto generates the plan and implements every task in a single approved pass — you approve

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .claude | dir |
| .claude-plugin | dir |
| .gemini | dir |
| .github | dir |
| .gitignore | file |
| .opencode | dir |
| agents | dir |
| AGENTS.md | file |
| CLAUDE.md | file |
| commands | dir |
| CONTRIBUTING.md | file |
| docs | dir |
| hooks | dir |
| LICENSE | file |
| plugin.json | file |
| README.md | file |
| references | dir |
| scripts | dir |
| skills | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| skills/ | 28 |
| docs/ | 9 |
| hooks/ | 9 |
| .claude/ | 8 |
| .gemini/ | 8 |
| commands/ | 8 |
| (root) | 7 |
| references/ | 5 |
| agents/ | 4 |
| .claude-plugin/ | 2 |
| .github/ | 1 |
| scripts/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 9 | preferred |
| commands/ | 8 | preferred |
| skills/ | 28 | preferred |
| agents/ | 4 | preferred |
| scripts/ | 1 | preferred |
| hooks/ | 9 | large |
| .claude/ | 8 | large |
| .claude/commands/ | 8 | large |
| .gemini/ | 8 | large |
| .gemini/commands/ | 8 | large |
| references/ | 5 | large |
| skills/idea-refine/ | 5 | large |
| .claude-plugin/ | 2 | large |
| .github/ | 1 | large |
| .github/workflows/ | 1 | large |
| skills/api-and-interface-design/ | 1 | large |
| skills/browser-testing-with-devtools/ | 1 | large |
| skills/ci-cd-and-automation/ | 1 | large |
| skills/code-review-and-quality/ | 1 | large |
| skills/code-simplification/ | 1 | large |
| skills/context-engineering/ | 1 | large |
| skills/debugging-and-error-recovery/ | 1 | large |
| skills/deprecation-and-migration/ | 1 | large |
| skills/documentation-and-adrs/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

_없음_

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs/agents.md`
- `docs/antigravity-setup.md`
- `docs/copilot-setup.md`
- `docs/cursor-setup.md`
- `docs/gemini-cli-setup.md`
- `docs/getting-started.md`
- `docs/opencode-setup.md`
- `docs/skill-anatomy.md`
- `docs/windsurf-setup.md`

### 에이전트 지침 후보

- `.claude/commands/build.md`
- `.claude/commands/code-simplify.md`
- `.claude/commands/plan.md`
- `.claude/commands/review.md`
- `.claude/commands/ship.md`
- `.claude/commands/spec.md`
- `.claude/commands/test.md`
- `.claude/commands/webperf.md`
- `AGENTS.md`
- `CLAUDE.md`
- `docs/agents.md`
- `docs/skill-anatomy.md`
- `scripts/validate-skills.js`
- `skills/api-and-interface-design/SKILL.md`
- `skills/browser-testing-with-devtools/SKILL.md`
- `skills/ci-cd-and-automation/SKILL.md`
- `skills/code-review-and-quality/SKILL.md`
- `skills/code-simplification/SKILL.md`
- `skills/context-engineering/SKILL.md`
- `skills/debugging-and-error-recovery/SKILL.md`
- `skills/deprecation-and-migration/SKILL.md`
- `skills/documentation-and-adrs/SKILL.md`
- `skills/doubt-driven-development/SKILL.md`
- `skills/frontend-ui-engineering/SKILL.md`
- `skills/git-workflow-and-versioning/SKILL.md`
- `skills/idea-refine/SKILL.md`
- `skills/idea-refine/examples.md`
- `skills/idea-refine/frameworks.md`
- `skills/idea-refine/refinement-criteria.md`
- `skills/idea-refine/scripts/idea-refine.sh`
- `skills/incremental-implementation/SKILL.md`
- `skills/interview-me/SKILL.md`
- `skills/observability-and-instrumentation/SKILL.md`
- `skills/performance-optimization/SKILL.md`
- `skills/planning-and-task-breakdown/SKILL.md`
- `skills/security-and-hardening/SKILL.md`
- `skills/shipping-and-launch/SKILL.md`
- `skills/source-driven-development/SKILL.md`
- `skills/spec-driven-development/SKILL.md`
- `skills/test-driven-development/SKILL.md`
- `skills/using-agent-skills/SKILL.md`

### 스펙/템플릿/명령/스킬 후보

- `.claude/commands/build.md`
- `.claude/commands/code-simplify.md`
- `.claude/commands/plan.md`
- `.claude/commands/review.md`
- `.claude/commands/ship.md`
- `.claude/commands/spec.md`
- `.claude/commands/test.md`
- `.claude/commands/webperf.md`
- `.gemini/commands/build.toml`
- `.gemini/commands/code-simplify.toml`
- `.gemini/commands/planning.toml`
- `.gemini/commands/review.toml`
- `.gemini/commands/ship.toml`
- `.gemini/commands/spec.toml`
- `.gemini/commands/test.toml`
- `.gemini/commands/webperf.toml`

## 테스트 / CI / 배포 표면

### 테스트 후보

_없음_

### CI/Docker 후보

- `.github/workflows/test-plugin-install.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .md | 59 |
| .toml | 16 |
| .sh | 7 |
| .json | 4 |
| .gitignore | 1 |
| .js | 1 |
| .yml | 1 |
| license | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `commands/ 내부 책임 분리`
- `skills/ 내부 책임 분리`
- `agents/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `.claude/commands/build.md 스펙/명령 의미`
- `.claude/commands/code-simplify.md 스펙/명령 의미`
- `.claude/commands/plan.md 스펙/명령 의미`
- `.claude/commands/review.md 스펙/명령 의미`
- `.claude/commands/ship.md 스펙/명령 의미`

