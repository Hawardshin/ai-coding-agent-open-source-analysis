# ariel-frischer/autospec 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/ariel-frischer__autospec |
| remote | https://github.com/ariel-frischer/autospec |
| HEAD | 8ea596a (2026-05-23) chore(changelog): prepare changelog for v0.11.5 release with new features and updates chore(changelog.yaml): update changelog.yaml for v0.11.5 release with date and new features |
| branch | main |
| groups | spec-driven-20 |
| files | 650 |
| dirs | 102 |
| stack | Go |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `📦 Installation`, `🎯 Key Features`, `✨ What Makes Autospec Different?`, `🚀 Quick Start`, `Prerequisites`, `Initialize Your Project`, `🎮 Usage`, `Core Flow Commands`, `Recommended Workflow`, `Flexible Stage Selection with `run``, `All core stages: specify → plan → tasks → implement`, `Specify + plan`, `Tasks + implement`, `Specify + clarify`, `All core + checklist`, `Tasks + checklist + analyze + implement`, `All core with skip confirmations (-y)`, `Use a specific agent (claude, codex, or opencode)`

> <div align="center" <pre ▄▀█ █ █ ▀█▀ █▀█ █▀ █▀█ █▀▀ █▀▀ █▀█ █▄█ █ █▄█ ▄█ █▀▀ ██▄ █▄▄ </pre Spec Driven Development Automation Build features systematically with AI powered specification workflows. </div Stop AI slop. Autospec brings structure to AI coding spec → plan → tasks → implement all in one command. Built with a multi agent architecture and inspired by GitHub SpecKit, Autospec reimagines the specification workflow with YAML first artifacts for programmatic access and validation. These principles ensure reliable, performant, and maintainable software that developers can trust for their critical development workflows. Supported agents Claude Code, Codex CLI, and OpenCode. 📦 Installation 🎯 Key Features Automated Workflow Orchestration — Runs stages in dependency order with automatic retry on failure YAML First Artifacts — Machine readable spec.yaml , plan.yaml , tasks.yaml for prog

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .agents | dir |
| .autospec | dir |
| .chlog.yaml | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .gitlab-ci.yml | file |
| .goreleaser.yml | file |
| AGENTS.md | file |
| CHANGELOG.md | file |
| CLAUDE.md | file |
| cmd | dir |
| docs | dir |
| go.mod | file |
| go.sum | file |
| install.sh | file |
| internal | dir |
| LICENSE | file |
| Makefile | file |
| mise.toml | file |
| README.md | file |
| scripts | dir |
| site | dir |
| tests | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| internal/ | 494 |
| tests/ | 53 |
| docs/ | 33 |
| site/ | 22 |
| (root) | 15 |
| .github/ | 11 |
| scripts/ | 11 |
| .agents/ | 9 |
| .autospec/ | 1 |
| cmd/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| cmd/ | 1 | preferred |
| docs/ | 33 | preferred |
| tests/ | 53 | preferred |
| scripts/ | 11 | preferred |
| internal/ | 494 | large |
| internal/cli/ | 146 | large |
| internal/validation/ | 79 | large |
| internal/workflow/ | 55 | large |
| internal/validation/testdata/ | 44 | large |
| tests/e2e/ | 29 | large |
| internal/cliagent/ | 23 | large |
| site/ | 22 | large |
| internal/config/ | 20 | large |
| docs/public/ | 18 | large |
| internal/cli/admin/ | 18 | large |
| internal/cli/config/ | 18 | large |
| internal/commands/ | 18 | large |
| internal/cli/util/ | 16 | large |
| internal/changelog/ | 15 | large |
| internal/worktree/ | 14 | large |
| tests/mocks/ | 13 | large |
| docs/internal/ | 12 | large |
| internal/testutil/ | 12 | large |
| .github/ | 11 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `go.mod`

### go.mod

| 경로 | module | go |
| --- | --- | --- |
| go.mod | github.com/ariel-frischer/autospec | 1.25.1 |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.github/CONTRIBUTING.md`
- `README.md`
- `docs/README.md`
- `docs/_config.yml`
- `docs/internal/CLAUDE-AGENT-SDK-EVALUATION.md`
- `docs/internal/YAML-STRUCTURED-OUTPUT.md`
- `docs/internal/agentic-code-coverage.md`
- `docs/internal/architecture.md`
- `docs/internal/cclean.md`
- `docs/internal/changelog-yaml.md`
- `docs/internal/codex-manual-testing.md`
- `docs/internal/events.md`
- `docs/internal/go-best-practices.md`
- `docs/internal/internals.md`
- `docs/internal/risks.md`
- `docs/internal/testing-mocks.md`
- `docs/public/PREREQUISITES.md`
- `docs/public/SHELL-COMPLETION.md`
- `docs/public/TIMEOUT.md`
- `docs/public/agents.md`
- `docs/public/checklists.md`
- `docs/public/claude-settings.md`
- `docs/public/codex-settings.md`
- `docs/public/faq.md`
- `docs/public/opencode-settings.md`
- `docs/public/overview.md`
- `docs/public/parallel-execution.md`
- `docs/public/quickstart.md`
- `docs/public/reference.md`
- `docs/public/render-command.md`
- `docs/public/self-update.md`
- `docs/public/task-sizing.md`
- `docs/public/troubleshooting.md`
- `docs/public/worktree.md`
- `docs/research/claude-opus-4.5-context-performance.md`
- `site/README.md`
- `tests/mocks/README.md`

### 에이전트 지침 후보

- `.agents/skills/autospec-analyze/SKILL.md`
- `.agents/skills/autospec-checklist/SKILL.md`
- `.agents/skills/autospec-clarify/SKILL.md`
- `.agents/skills/autospec-constitution/SKILL.md`
- `.agents/skills/autospec-implement/SKILL.md`
- `.agents/skills/autospec-plan/SKILL.md`
- `.agents/skills/autospec-specify/SKILL.md`
- `.agents/skills/autospec-tasks/SKILL.md`
- `.agents/skills/autospec-worktree-setup/SKILL.md`
- `AGENTS.md`
- `CLAUDE.md`
- `docs/public/agents.md`
- `internal/cli/admin/.claude/commands/autospec.analyze.md`
- `internal/cli/admin/.claude/commands/autospec.checklist.md`
- `internal/cli/admin/.claude/commands/autospec.clarify.md`
- `internal/cli/admin/.claude/commands/autospec.constitution.md`
- `internal/cli/admin/.claude/commands/autospec.implement.md`
- `internal/cli/admin/.claude/commands/autospec.plan.md`
- `internal/cli/admin/.claude/commands/autospec.specify.md`
- `internal/cli/admin/.claude/commands/autospec.tasks.md`
- `internal/cli/admin/.claude/commands/autospec.worktree-setup.md`
- `internal/cli/config/.claude/settings.local.json`
- `internal/commands/skills.go`
- `internal/commands/skills_test.go`

### 스펙/템플릿/명령/스킬 후보

- `.agents/skills/autospec-analyze/SKILL.md`
- `.agents/skills/autospec-checklist/SKILL.md`
- `.agents/skills/autospec-clarify/SKILL.md`
- `.agents/skills/autospec-constitution/SKILL.md`
- `.agents/skills/autospec-implement/SKILL.md`
- `.agents/skills/autospec-plan/SKILL.md`
- `.agents/skills/autospec-specify/SKILL.md`
- `.agents/skills/autospec-tasks/SKILL.md`
- `.agents/skills/autospec-worktree-setup/SKILL.md`
- `internal/cli/admin/.claude/commands/autospec.analyze.md`
- `internal/cli/admin/.claude/commands/autospec.checklist.md`
- `internal/cli/admin/.claude/commands/autospec.clarify.md`
- `internal/cli/admin/.claude/commands/autospec.constitution.md`
- `internal/cli/admin/.claude/commands/autospec.implement.md`
- `internal/cli/admin/.claude/commands/autospec.plan.md`
- `internal/cli/admin/.claude/commands/autospec.specify.md`
- `internal/cli/admin/.claude/commands/autospec.tasks.md`
- `internal/cli/admin/.claude/commands/autospec.worktree-setup.md`
- `internal/commands/autospec.analyze.md`
- `internal/commands/autospec.checklist.md`
- `internal/commands/autospec.clarify.md`
- `internal/commands/autospec.constitution.md`
- `internal/commands/autospec.implement.md`
- `internal/commands/autospec.plan.md`
- `internal/commands/autospec.specify.md`
- `internal/commands/autospec.tasks.md`
- `internal/commands/autospec.worktree-setup.md`
- `internal/commands/embed.go`
- `internal/commands/embed_test.go`
- `internal/commands/render.go`
- `internal/commands/render_test.go`
- `internal/commands/skills.go`
- `internal/commands/skills_test.go`
- `internal/commands/templates.go`
- `internal/commands/templates_test.go`
- `internal/commands/types.go`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/e2e/admin_test.go`
- `tests/e2e/changelog_test.go`
- `tests/e2e/config_test.go`
- `tests/e2e/coverage_audit_test.go`
- `tests/e2e/e2e_test.go`
- `tests/e2e/error_scenarios_test.go`
- `tests/e2e/error_test.go`
- `tests/e2e/exit_code_test.go`
- `tests/e2e/global_flags_test.go`
- `tests/e2e/implement_test.go`
- `tests/e2e/internal_commands_test.go`
- `tests/e2e/opencode_test.go`
- `tests/e2e/optional_stages_test.go`
- `tests/e2e/ordering_test.go`
- `tests/e2e/run_test.go`
- `tests/e2e/safety_test.go`
- `tests/e2e/spec_schema_test.go`
- `tests/e2e/stage_test.go`
- `tests/e2e/template_rendering_test.go`
- `tests/e2e/testdata/responses/analysis.yaml`
- `tests/e2e/testdata/responses/checklist.yaml`
- `tests/e2e/testdata/responses/constitution.yaml`
- `tests/e2e/testdata/responses/implement.txt`
- `tests/e2e/testdata/responses/plan.yaml`
- `tests/e2e/testdata/responses/spec.yaml`
- `tests/e2e/testdata/responses/tasks.yaml`
- `tests/e2e/util_test.go`
- `tests/e2e/workflow_test.go`
- `tests/e2e/worktree_test.go`
- `tests/fixtures/invalid.yaml`
- `tests/fixtures/mock-hook-payloads.json`
- `tests/fixtures/mock-spec.md`
- `tests/fixtures/mock-tasks-complete.md`
- `tests/fixtures/mock-tasks-incomplete.md`
- `tests/fixtures/reddit-responses.js`
- `tests/fixtures/valid.yaml`
- `tests/integration/claude_test.go`
- `tests/integration/config_test.go`
- `tests/integration/retry_test.go`
- `tests/integration/yaml_workflow_test.go`
- `tests/mocks/README.md`
- `tests/mocks/fixtures/invalid/plan-bad-reference.yaml`
- `tests/mocks/fixtures/invalid/spec-missing-feature.yaml`
- `tests/mocks/fixtures/invalid/tasks-orphan.yaml`
- `tests/mocks/fixtures/partial/spec.yaml`
- `tests/mocks/fixtures/partial/tasks.yaml`
- `tests/mocks/fixtures/valid/plan.yaml`
- `tests/mocks/fixtures/valid/spec.yaml`
- `tests/mocks/fixtures/valid/tasks.yaml`
- `tests/mocks/scripts/generate-mock-artifacts.sh`
- `tests/mocks/scripts/mock-claude.sh`
- `tests/mocks/scripts/mock-opencode.sh`
- `tests/mocks/scripts/mock_claude_test.go`

### CI/Docker 후보

- `.github/workflows/ci.yml`
- `.github/workflows/docs.yml`
- `.github/workflows/release.yml`
- `.gitlab-ci.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .go | 451 |
| .md | 89 |
| .yaml | 69 |
| .sh | 11 |
| .yml | 8 |
| .gitignore | 2 |
| .html | 2 |
| .json | 2 |
| .gitattributes | 1 |
| .js | 1 |
| .lock | 1 |
| .mod | 1 |
| .scss | 1 |
| .sum | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `cmd/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `internal/ 내부 책임 분리`
- `.agents/skills/autospec-analyze/SKILL.md 스펙/명령 의미`
- `.agents/skills/autospec-checklist/SKILL.md 스펙/명령 의미`
- `.agents/skills/autospec-clarify/SKILL.md 스펙/명령 의미`
- `.agents/skills/autospec-constitution/SKILL.md 스펙/명령 의미`
- `.agents/skills/autospec-implement/SKILL.md 스펙/명령 의미`
- `go.mod 실행 스크립트와 패키지 경계`

