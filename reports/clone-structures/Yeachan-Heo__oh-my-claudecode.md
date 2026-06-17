# Yeachan-Heo/oh-my-claudecode 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/Yeachan-Heo__oh-my-claudecode |
| remote | https://github.com/Yeachan-Heo/oh-my-claudecode |
| HEAD | deee3a4 (2026-06-09) chore(release): merge dev for v4.14.6 |
| branch | main |
| groups | core-agent-30, previous-clone-inventory-107 |
| files | 1529 |
| dirs | 290 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `oh-my-claudecode`, `Core Maintainers`, `Ambassadors`, `Document Specialists`, `Top Collaborators`, `Quick Start`, `Inside a Claude Code / OMC session`, `From your terminal`, `Inside a Claude Code / OMC session`, `Natural-language in-session shortcut`, `CLI Commands vs In-Session Skills`, `Not Sure Where to Start?`, `Team Mode (Recommended)`, `tmux CLI Workers — Codex & Gemini (v4.4.0+)`, `Updating`, `1. Update the marketplace clone`, `2. Re-run setup to refresh configuration`, `Why oh-my-claudecode?`

> English 한국어 中文 日本語 Español Tiếng Việt Português oh my claudecode For Codex users Check out oh my codex — the same orchestration experience for OpenAI Codex CLI. Multi agent orchestration for Claude Code. Zero learning curve. Don't learn Claude Code. Just use OMC. Get Started • Documentation • CLI Reference • Workflows • Migration Guide • Discord Core Maintainers Role Name GitHub Creator & Lead Yeachan Heo @Yeachan Heo Ambassadors Name GitHub Sigrid Jin @sigridjineth Document Specialists Name GitHub devswha @devswha Top Collaborators Name GitHub Commits JunghwanNA @shaun0927 65 riftzen bit @riftzen bit 52 Seunggwan Song @Nathan Song 20 BLUE @blue int 20 Junho Yeo @junhoyeo 15 Quick Start Step 1 Install Marketplace/plugin install (recommended for most Claude Code users). These are Claude Code slash commands — enter them one at a time (pasting both lines at once will fail) Then If you prefe

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .claude-plugin | dir |
| .clawhip | dir |
| .codex | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .mcp.json | file |
| .npmignore | file |
| .omx | dir |
| agents | dir |
| AGENTS.md | file |
| assets | dir |
| benchmark | dir |
| benchmarks | dir |
| bin | dir |
| bridge | dir |
| CHANGELOG.md | file |
| CLAUDE.md | file |
| commands | dir |
| CONTRIBUTING.md | file |
| dist | dir |
| docs | dir |
| eslint.config.js | file |
| examples | dir |
| hooks | dir |
| LICENSE | file |
| missions | dir |
| package-lock.json | file |
| package.json | file |
| README.de.md | file |
| README.es.md | file |
| README.fr.md | file |
| README.it.md | file |
| README.ja.md | file |
| README.ko.md | file |
| README.md | file |
| README.pt.md | file |
| README.ru.md | file |
| README.tr.md | file |
| README.vi.md | file |
| README.zh.md | file |
| research | dir |
| scripts | dir |
| SECURITY.md | file |
| seminar | dir |
| shellmark | dir |
| skills | dir |
| src | dir |
| templates | dir |
| tests | dir |
| tsconfig.json | file |
| typos.toml | file |
| vitest.config.ts | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| src/ | 1080 |
| skills/ | 81 |
| scripts/ | 78 |
| benchmarks/ | 58 |
| docs/ | 38 |
| (root) | 29 |
| commands/ | 28 |
| benchmark/ | 22 |
| templates/ | 21 |
| agents/ | 19 |
| .github/ | 12 |
| seminar/ | 12 |
| tests/ | 10 |
| bridge/ | 8 |
| missions/ | 8 |
| examples/ | 6 |
| shellmark/ | 6 |
| .omx/ | 4 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 1080 | preferred |
| docs/ | 38 | preferred |
| examples/ | 6 | preferred |
| tests/ | 10 | preferred |
| templates/ | 21 | preferred |
| commands/ | 28 | preferred |
| skills/ | 81 | preferred |
| agents/ | 19 | preferred |
| scripts/ | 78 | preferred |
| src/hooks/ | 267 | large |
| src/__tests__/ | 233 | large |
| src/team/ | 157 | large |
| src/team/__tests__/ | 96 | large |
| src/features/ | 64 | large |
| benchmarks/ | 58 | large |
| src/cli/ | 50 | large |
| src/tools/ | 49 | large |
| src/hud/ | 46 | large |
| src/__tests__/hud/ | 40 | large |
| src/notifications/ | 34 | large |
| src/lib/ | 31 | large |
| benchmarks/harsh-critic/ | 27 | large |
| src/hud/elements/ | 27 | large |
| src/hooks/autopilot/ | 25 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `benchmark/Dockerfile`
- `benchmark/docker-compose.yml`
- `benchmark/requirements.txt`
- `package.json`
- `tests/fixtures/typescript-pnpm/package.json`
- `tests/fixtures/typescript-pnpm/pnpm-lock.yaml`
- `tests/fixtures/typescript-pnpm/tsconfig.json`
- `tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| package.json | oh-my-claude-sisyphus | build, build:bridge, build:bridge-entry, build:cli, build:runtime-cli, build:team-server, compose-docs, dev, dev:full, start, test, bench:prompts, bench:prompts:save, bench:prompts:compare, test:ui, test:run | @anthropic-ai/claude-agent-sdk, @ast-grep/napi, @modelcontextprotocol/sdk, @types/better-sqlite3, ajv, better-sqlite3, chalk, commander, jsonc-parser, safe-regex, vscode-languageserver-protocol, zod |
| tests/fixtures/typescript-pnpm/package.json | test-typescript-app | build, test, lint, dev | react, react-dom |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `benchmark/README.md`
- `benchmark/results/README.md`
- `benchmarks/harsh-critic/README.md`
- `docs/AGENTS.md`
- `docs/ARCHITECTURE.md`
- `docs/CJK-IME-KNOWN-ISSUES.md`
- `docs/CLAUDE.md`
- `docs/COMPATIBILITY.md`
- `docs/DELEGATION-ENFORCER.md`
- `docs/DEVELOPERS.md`
- `docs/FEATURES.md`
- `docs/GETTING-STARTED.md`
- `docs/HOOKS.md`
- `docs/LOCAL_PLUGIN_INSTALL.md`
- `docs/MIGRATION.md`
- `docs/OPENCLAW-ROUTING.md`
- `docs/PERFORMANCE-MONITORING.md`
- `docs/REFERENCE.md`
- `docs/SYNC-SYSTEM.md`
- `docs/TEAM-WORKTREE-MODE.md`
- `docs/TOOLS.md`
- `docs/agent-templates/README.md`
- `docs/agent-templates/base-agent.md`
- `docs/agent-templates/tier-instructions.md`
- `docs/agents/model-compatibility.md`
- `docs/cancel-skill-active-state-gap.md`
- `docs/company-context-interface.md`
- `docs/design/CLAUDE_CODE_GOAL_ADAPTER.md`
- `docs/design/CONSOLIDATION_PHASE3_ROADMAP.md`
- `docs/design/SKILLS_2_0_ADAPTATION.md`
- `docs/design/SKILL_AUDIT_1445.md`
- `docs/design/TIERED_AGENTS_V2.md`
- `docs/design/project-session-manager.md`
- `docs/issues/windows-hud-missing.png`
- `docs/settings-schema.md`
- `docs/shared/agent-tiers.md`
- `docs/shared/features.md`
- `docs/shared/mode-hierarchy.md`
- `docs/shared/mode-selection-guide.md`
- `docs/shared/verification-tiers.md`
- `docs/ultragoal.md`
- `examples/vendor-mcp-server/README.md`
- `seminar/demos/README.md`
- `seminar/screenshots/README.md`
- `src/features/delegation-categories/README.md`
- `src/features/verification/README.md`
- `src/hooks/setup/README.md`
- `templates/rules/README.md`

### 에이전트 지침 후보

- `.github/CLAUDE.md`
- `.mcp.json`
- `AGENTS.md`
- `CLAUDE.md`
- `bridge/mcp-server.cjs`
- `bridge/run-mcp-server.sh`
- `bridge/team-mcp.cjs`
- `commands/mcp-setup.md`
- `commands/skill.md`
- `commands/skillify.md`
- `docs/AGENTS.md`
- `docs/CLAUDE.md`
- `docs/cancel-skill-active-state-gap.md`
- `examples/vendor-mcp-server/README.md`
- `examples/vendor-mcp-server/server.mjs`
- `scripts/build-mcp-server.mjs`
- `scripts/build-skill-bridge.mjs`
- `scripts/skill-injector.mjs`
- `skills/AGENTS.md`
- `skills/ai-slop-cleaner/SKILL.md`
- `skills/ask/SKILL.md`
- `skills/autopilot/SKILL.md`
- `skills/autoresearch/SKILL.md`
- `skills/cancel/SKILL.md`
- `skills/ccg/SKILL.md`
- `skills/configure-notifications/SKILL.md`
- `skills/debug/SKILL.md`
- `skills/deep-dive/SKILL.md`
- `skills/deep-interview/SKILL.md`
- `skills/deepinit/SKILL.md`
- `skills/external-context/SKILL.md`
- `skills/hud/SKILL.md`
- `skills/learner/SKILL.md`
- `skills/local-build-reminder/SKILL.md`
- `skills/mcp-setup/SKILL.md`
- `skills/omc-doctor/SKILL.md`
- `skills/omc-reference/SKILL.md`
- `skills/omc-setup/SKILL.md`
- `skills/omc-setup/phases/01-install-claude-md.md`
- `skills/omc-setup/phases/02-configure.md`
- `skills/omc-setup/phases/03-integrations.md`
- `skills/omc-setup/phases/04-welcome.md`
- `skills/omc-teams/SKILL.md`
- `skills/plan/SKILL.md`
- `skills/project-session-manager/SKILL.md`
- `skills/project-session-manager/lib/config.sh`
- `skills/project-session-manager/lib/parse.sh`
- `skills/project-session-manager/lib/providers/azure-devops.sh`
- `skills/project-session-manager/lib/providers/bitbucket.sh`
- `skills/project-session-manager/lib/providers/gitea.sh`
- `skills/project-session-manager/lib/providers/github.sh`
- `skills/project-session-manager/lib/providers/gitlab.sh`
- `skills/project-session-manager/lib/providers/interface.sh`
- `skills/project-session-manager/lib/providers/jira.sh`
- `skills/project-session-manager/lib/session.sh`
- `skills/project-session-manager/lib/tmux.sh`
- `skills/project-session-manager/lib/worktree.sh`
- `skills/project-session-manager/psm.sh`
- `skills/project-session-manager/templates/feature.md`
- `skills/project-session-manager/templates/issue-fix.md`
- `skills/project-session-manager/templates/pr-review.md`
- `skills/project-session-manager/templates/projects.json`
- `skills/project-session-manager/tests/test-psm-prompt-injection.sh`
- `skills/ralph/SKILL.md`
- `skills/ralplan/SKILL.md`
- `skills/release/SKILL.md`
- `skills/remember/SKILL.md`
- `skills/sciomc/SKILL.md`
- `skills/self-improve/SKILL.md`
- `skills/self-improve/data_contracts.md`
- `skills/self-improve/scripts/plot_progress.py`
- `skills/self-improve/scripts/resolve-paths.mjs`
- `skills/self-improve/scripts/validate.sh`
- `skills/self-improve/si-benchmark-builder.md`
- `skills/self-improve/si-goal-clarifier.md`
- `skills/self-improve/si-researcher.md`
- `skills/self-improve/templates/agent-settings.json`
- `skills/self-improve/templates/goal.md`
- `skills/self-improve/templates/harness.md`
- `skills/self-improve/templates/idea.md`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `skills/project-session-manager/templates/feature.md`
- `skills/project-session-manager/templates/issue-fix.md`
- `skills/project-session-manager/templates/pr-review.md`
- `skills/project-session-manager/templates/projects.json`
- `skills/self-improve/templates/agent-settings.json`
- `skills/self-improve/templates/goal.md`
- `skills/self-improve/templates/harness.md`
- `skills/self-improve/templates/idea.md`
- `skills/self-improve/templates/settings.json`
- `skills/writer-memory/templates/synopsis-template.md`
- `src/agents/templates/exploration-template.md`
- `src/agents/templates/implementation-template.md`
- `src/cli/commands/__tests__/team-role-shorthand.test.ts`
- `src/cli/commands/__tests__/team.test.ts`
- `src/cli/commands/__tests__/teleport.test.ts`
- `src/cli/commands/__tests__/ultragoal.test.ts`
- `src/cli/commands/doctor-conflicts.ts`
- `src/cli/commands/doctor-team-routing.ts`
- `src/cli/commands/ralphthon.ts`
- `src/cli/commands/session-search.ts`
- `src/cli/commands/team.ts`
- `src/cli/commands/teleport.ts`
- `src/cli/commands/ultragoal.ts`
- `src/cli/commands/wait.ts`
- `src/commands/index.ts`
- `src/skills/__tests__/mingw-escape.test.ts`
- `src/skills/__tests__/omc-doctor-skill.test.ts`
- `src/skills/__tests__/skill-config-dir.test.ts`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `benchmarks/harsh-critic/scoring/__tests__/parser.test.ts`
- `benchmarks/harsh-critic/scoring/__tests__/scorer.test.ts`
- `skills/project-session-manager/tests/test-psm-prompt-injection.sh`
- `src/__tests__/advisory-agent-final-output-contract.test.ts`
- `src/__tests__/agent-boundary-guidance.test.ts`
- `src/__tests__/agent-registry.test.ts`
- `src/__tests__/artifact-descriptor-handoff.test.ts`
- `src/__tests__/artifact-descriptor-integration.test.ts`
- `src/__tests__/artifact-descriptor.test.ts`
- `src/__tests__/ast-tools-path-restriction.test.ts`
- `src/__tests__/auto-slash-aliases.test.ts`
- `src/__tests__/auto-update.test.ts`
- `src/__tests__/auto-upgrade-prompt.test.ts`
- `src/__tests__/background-cleanup-directory.test.ts`
- `src/__tests__/bash-history.test.ts`
- `src/__tests__/bedrock-lm-suffix-hook.test.ts`
- `src/__tests__/bedrock-model-routing.test.ts`
- `src/__tests__/bridge-help-question-regex.test.ts`
- `src/__tests__/claude-goal-adapter-doc.test.ts`
- `src/__tests__/cleanup-orphans-unref.test.ts`
- `src/__tests__/cleanup-validation.test.ts`
- `src/__tests__/cli-config-stop-callback.test.ts`
- `src/__tests__/cli-interop-flags.test.ts`
- `src/__tests__/cli-notify-profile.test.ts`
- `src/__tests__/cli-win32-warning.test.ts`
- `src/__tests__/compact-denylist.test.ts`
- `src/__tests__/config-dir.test.ts`
- `src/__tests__/config-force-inherit-env.test.ts`
- `src/__tests__/consensus-execution-handoff.test.ts`
- `src/__tests__/consolidation-contracts.test.ts`
- `src/__tests__/context-bloat-2577.test.ts`
- `src/__tests__/context-guard-stop.test.ts`
- `src/__tests__/context-safety.test.ts`
- `src/__tests__/daemon-module-path.test.ts`
- `src/__tests__/deep-interview-provider-options.test.ts`
- `src/__tests__/delegation-enforcement-levels.test.ts`
- `src/__tests__/delegation-enforcer-integration.test.ts`
- `src/__tests__/delegation-enforcer.test.ts`
- `src/__tests__/directory-context-injector.test.ts`
- `src/__tests__/disable-tools.test.ts`
- `src/__tests__/doctor-conflicts.test.ts`
- `src/__tests__/featured-contributors-generator.test.ts`
- `src/__tests__/file-lock-fd-leak.test.ts`
- `src/__tests__/file-lock.test.ts`
- `src/__tests__/goal-docs-contract.test.ts`
- `src/__tests__/hooks-command-escaping.test.ts`
- `src/__tests__/hooks.test.ts`
- `src/__tests__/hooks/learner/bridge.test.ts`
- `src/__tests__/hooks/learner/parser.test.ts`
- `src/__tests__/hooks/learner/transliteration-map.test.ts`
- `src/__tests__/hooks/plugin-patterns.test.ts`
- `src/__tests__/hooks/session-end-cleanup.test.ts`
- `src/__tests__/hud-agents.test.ts`
- `src/__tests__/hud-api-key-source.test.ts`
- `src/__tests__/hud-build-guidance.test.ts`
- `src/__tests__/hud-cache-wrapper.test.ts`
- `src/__tests__/hud-marketplace-resolution.test.ts`
- `src/__tests__/hud-skill-no-inline-wrapper.test.ts`
- `src/__tests__/hud-windows.test.ts`
- `src/__tests__/hud-wrapper-template-sync.test.ts`
- `src/__tests__/hud/background-cleanup.test.ts`
- `src/__tests__/hud/background-tasks.test.ts`
- `src/__tests__/hud/call-counts.test.ts`
- `src/__tests__/hud/cli-diagnostic.test.ts`
- `src/__tests__/hud/context-warning.test.ts`
- `src/__tests__/hud/context.test.ts`
- `src/__tests__/hud/custom-rate-provider.test.ts`
- `src/__tests__/hud/cwd.test.ts`
- `src/__tests__/hud/defaults.test.ts`
- `src/__tests__/hud/extra-usage.test.ts`
- `src/__tests__/hud/git.test.ts`
- `src/__tests__/hud/labels.test.ts`
- `src/__tests__/hud/limits-error.test.ts`
- `src/__tests__/hud/max-width.test.ts`
- `src/__tests__/hud/mission-board-state.test.ts`
- `src/__tests__/hud/mission-board.test.ts`
- `src/__tests__/hud/model.test.ts`
- `src/__tests__/hud/omc-state.test.ts`
- `src/__tests__/hud/payload-estimate.test.ts`
- `src/__tests__/hud/payload-warning-render.test.ts`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/auto-label.yml`
- `.github/workflows/ci.yml`
- `.github/workflows/cleanup.yml`
- `.github/workflows/pr-check.yml`
- `.github/workflows/release.yml`
- `.github/workflows/stale.yml`
- `.github/workflows/upgrade-test.yml`
- `benchmark/Dockerfile`
- `benchmark/docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 1107 |
| .md | 229 |
| .mjs | 73 |
| .json | 40 |
| .sh | 30 |
| .yml | 10 |
| .cjs | 9 |
| .py | 6 |
| .js | 4 |
| .jsonl | 4 |
| .txt | 3 |
| .gitignore | 2 |
| .jpg | 2 |
| .codex | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `templates/ 내부 책임 분리`
- `skills/project-session-manager/templates/feature.md 스펙/명령 의미`
- `skills/project-session-manager/templates/issue-fix.md 스펙/명령 의미`
- `skills/project-session-manager/templates/pr-review.md 스펙/명령 의미`
- `skills/project-session-manager/templates/projects.json 스펙/명령 의미`
- `skills/self-improve/templates/agent-settings.json 스펙/명령 의미`
- `benchmark/Dockerfile 실행 스크립트와 패키지 경계`
- `benchmark/docker-compose.yml 실행 스크립트와 패키지 경계`
- `benchmark/requirements.txt 실행 스크립트와 패키지 경계`
- `package.json 실행 스크립트와 패키지 경계`
- `tests/fixtures/typescript-pnpm/package.json 실행 스크립트와 패키지 경계`

