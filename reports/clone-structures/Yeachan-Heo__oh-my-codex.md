# Yeachan-Heo/oh-my-codex 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/Yeachan-Heo__oh-my-codex |
| remote | https://github.com/Yeachan-Heo/oh-my-codex |
| HEAD | 0332e47 (2026-06-09) ci: configure npm auth for manual publish (#2766) |
| branch | main |
| groups | core-agent-30, previous-clone-inventory-107 |
| files | 1197 |
| dirs | 237 |
| stack | Node/TypeScript/JavaScript, Rust |

## 구조 해석

- Monorepo/workspace 구조가 보이며 여러 패키지나 crate를 한 저장소에서 관리한다.
- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `oh-my-codex (OMX)`, `Official project and package`, `Core Maintainers`, `Ambassadors`, `Top Collaborators`, `Recommended default flow`, `from the git project you want Codex to edit; choose a task-specific name`, `What OMX is for`, `Quick start`, `Requirements`, `A good first session`, `Madmax and worktree launch safety`, `A simple mental model`, `Start here if you are new`, `Recommended workflow`, `Common in-session surfaces`, `Advanced / operator surfaces`, `Team runtime`

> oh my codex (OMX) <p align="center" <img src="https //yeachan heo.github.io/oh my codex website/omx character nobg.png" alt="oh my codex character" width="280" <br <em Start Codex stronger, then let OMX add better prompts, workflows, and runtime help when the work grows.</em </p Website https //yeachan heo.github.io/oh my codex website/ Docs Getting Started · Agents · Skills · Integrations · Demo · OpenClaw guide Community Discord — shared OMX/community server for oh my codex and related tooling. Official project and package The official/original OMX project is this repository, Yeachan Heo/oh my codex , and the official npm package for this project is oh my codex . Install this project with npm install g oh my codex (or alongside Codex CLI as shown below). Third party projects or forks that use names such as “OMX v2” are not official continuations, replacements, or release lines for this

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .agents | dir |
| .github | dir |
| .gitignore | file |
| .gjc | dir |
| biome.json | file |
| Cargo.lock | file |
| Cargo.toml | file |
| CHANGELOG.md | file |
| CONTRIBUTING.md | file |
| COVERAGE.md | file |
| crates | dir |
| DEMO.md | file |
| dist-workspace.toml | file |
| docs | dir |
| missions | dir |
| notes | dir |
| package-lock.json | file |
| package.json | file |
| playground | dir |
| plugins | dir |
| prompts | dir |
| README.md | file |
| RELEASE_BODY.md | file |
| RELEASE_PROTOCOL.md | file |
| skills | dir |
| src | dir |
| target | dir |
| templates | dir |
| tsconfig.json | file |
| tsconfig.no-unused.json | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| src/ | 716 |
| docs/ | 233 |
| skills/ | 47 |
| crates/ | 44 |
| prompts/ | 37 |
| plugins/ | 35 |
| missions/ | 27 |
| playground/ | 18 |
| (root) | 16 |
| .github/ | 12 |
| .gjc/ | 6 |
| templates/ | 4 |
| .agents/ | 1 |
| notes/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 716 | preferred |
| crates/ | 44 | preferred |
| docs/ | 233 | preferred |
| templates/ | 4 | preferred |
| skills/ | 47 | preferred |
| plugins/ | 35 | preferred |
| src/cli/ | 112 | large |
| src/hooks/ | 103 | large |
| src/team/ | 89 | large |
| src/scripts/ | 85 | large |
| src/cli/__tests__/ | 72 | large |
| src/hooks/__tests__/ | 65 | large |
| docs/qa/ | 53 | large |
| src/notifications/ | 42 | large |
| src/team/__tests__/ | 39 | large |
| prompts/ | 37 | large |
| plugins/oh-my-codex/ | 35 | large |
| plugins/oh-my-codex/skills/ | 30 | large |
| missions/ | 27 | large |
| src/mcp/ | 25 | large |
| crates/omx-sparkshell/ | 24 | large |
| src/hooks/extensibility/ | 24 | large |
| src/notifications/__tests__/ | 23 | large |
| src/scripts/notify-hook/ | 22 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Cargo.toml`
- `crates/omx-api/Cargo.toml`
- `crates/omx-explore/Cargo.toml`
- `crates/omx-mux/Cargo.toml`
- `crates/omx-runtime-core/Cargo.toml`
- `crates/omx-runtime/Cargo.toml`
- `crates/omx-sparkshell/Cargo.toml`
- `package.json`
- `tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| package.json | oh-my-codex | build, build:explore, build:full, build:explore:release, check:no-unused, clean:native-package-assets, dev, lint, prepack, postinstall, setup, doctor, ask:claude, ask:gemini, test:explore, test:team:cross-rebase-smoke | @iarna/toml, @modelcontextprotocol/sdk, zod |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| Cargo.toml |  | true |    "crates/omx-api",   "crates/omx-explore",   "crates/omx-mux",   "crates/omx-runtime-core",   "crates/omx-runtime",   "crates/omx-sparkshell",  |
| crates/omx-api/Cargo.toml | omx-api | false |  |
| crates/omx-explore/Cargo.toml | omx-explore-harness | false |  |
| crates/omx-mux/Cargo.toml | omx-mux | false |  |
| crates/omx-runtime-core/Cargo.toml | omx-runtime-core | false |  |
| crates/omx-runtime/Cargo.toml | omx-runtime | false |  |
| crates/omx-sparkshell/Cargo.toml | omx-sparkshell | false |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs/STATE_MODEL.md`
- `docs/_config.yml`
- `docs/adapt.md`
- `docs/agents.html`
- `docs/architecture/cli-first-mcp-taxonomy.md`
- `docs/audit/skills-agents-bloat-audit/README.md`
- `docs/audit/skills-agents-bloat-audit/bloat-audit.md`
- `docs/audit/skills-agents-bloat-audit/connectivity-roadmap.md`
- `docs/audit/skills-agents-bloat-audit/inventory.md`
- `docs/autoresearch-goal.md`
- `docs/benchmarks/tetris-benchmark-comparison-20260306.png`
- `docs/clawhip-event-contract.md`
- `docs/codex-native-hooks.md`
- `docs/contracts/autoresearch-command-contract.md`
- `docs/contracts/autoresearch-command-review.md`
- `docs/contracts/autoresearch-ux-deep-interview-review.md`
- `docs/contracts/explicit-terminal-stop-model.md`
- `docs/contracts/multi-state-transition-contract.md`
- `docs/contracts/multi-state-transition-review.md`
- `docs/contracts/mux-operation-space.md`
- `docs/contracts/ralph-cancel-contract.md`
- `docs/contracts/ralph-state-contract.md`
- `docs/contracts/repo-aware-team-dag-decomposition.md`
- `docs/contracts/runtime-authority-backlog-replay-readiness.md`
- `docs/contracts/runtime-command-event-snapshot-schema.md`
- `docs/contracts/rust-runtime-thin-adapter-contract.md`
- `docs/contracts/team-delivery-state-contract.md`
- `docs/contracts/team-runtime-state-contract.md`
- `docs/contracts/team-startup-dispatch-latency.md`
- `docs/discord-integration.md`
- `docs/getting-started.html`
- `docs/guidance-schema.md`
- `docs/hermes-mcp-bridge.md`
- `docs/hooks-extension.md`
- `docs/index.html`
- `docs/integrations.html`
- `docs/interop-team-mutation-contract.md`
- `docs/issues/team-ralph-followup-team.md`
- `docs/migration-mainline-post-v0.4.4.md`
- `docs/openclaw-integration.de.md`
- `docs/openclaw-integration.es.md`
- `docs/openclaw-integration.fr.md`
- `docs/openclaw-integration.it.md`
- `docs/openclaw-integration.ja.md`
- `docs/openclaw-integration.ko.md`
- `docs/openclaw-integration.md`
- `docs/openclaw-integration.pt.md`
- `docs/openclaw-integration.ru.md`
- ... 30 more

### 에이전트 지침 후보

- `docs/architecture/cli-first-mcp-taxonomy.md`
- `docs/audit/skills-agents-bloat-audit/README.md`
- `docs/audit/skills-agents-bloat-audit/bloat-audit.md`
- `docs/audit/skills-agents-bloat-audit/connectivity-roadmap.md`
- `docs/audit/skills-agents-bloat-audit/inventory.md`
- `docs/hermes-mcp-bridge.md`
- `docs/skills.html`
- `plugins/oh-my-codex/.mcp.json`
- `plugins/oh-my-codex/skills/ai-slop-cleaner/SKILL.md`
- `plugins/oh-my-codex/skills/analyze/SKILL.md`
- `plugins/oh-my-codex/skills/ask/SKILL.md`
- `plugins/oh-my-codex/skills/autopilot/SKILL.md`
- `plugins/oh-my-codex/skills/autoresearch-goal/SKILL.md`
- `plugins/oh-my-codex/skills/autoresearch/SKILL.md`
- `plugins/oh-my-codex/skills/best-practice-research/SKILL.md`
- `plugins/oh-my-codex/skills/cancel/SKILL.md`
- `plugins/oh-my-codex/skills/code-review/SKILL.md`
- `plugins/oh-my-codex/skills/configure-notifications/SKILL.md`
- `plugins/oh-my-codex/skills/deep-interview/SKILL.md`
- `plugins/oh-my-codex/skills/design/SKILL.md`
- `plugins/oh-my-codex/skills/doctor/SKILL.md`
- `plugins/oh-my-codex/skills/hud/SKILL.md`
- `plugins/oh-my-codex/skills/omx-setup/SKILL.md`
- `plugins/oh-my-codex/skills/performance-goal/SKILL.md`
- `plugins/oh-my-codex/skills/pipeline/SKILL.md`
- `plugins/oh-my-codex/skills/plan/SKILL.md`
- `plugins/oh-my-codex/skills/prometheus-strict/README.md`
- `plugins/oh-my-codex/skills/prometheus-strict/SKILL.md`
- `plugins/oh-my-codex/skills/ralph/SKILL.md`
- `plugins/oh-my-codex/skills/ralplan/SKILL.md`
- `plugins/oh-my-codex/skills/skill/SKILL.md`
- `plugins/oh-my-codex/skills/team/SKILL.md`
- `plugins/oh-my-codex/skills/ultragoal/SKILL.md`
- `plugins/oh-my-codex/skills/ultraqa/SKILL.md`
- `plugins/oh-my-codex/skills/ultrawork/SKILL.md`
- `plugins/oh-my-codex/skills/visual-ralph/SKILL.md`
- `plugins/oh-my-codex/skills/wiki/SKILL.md`
- `plugins/oh-my-codex/skills/worker/SKILL.md`
- `skills/ai-slop-cleaner/SKILL.md`
- `skills/analyze/SKILL.md`
- `skills/ask-claude/SKILL.md`
- `skills/ask-gemini/SKILL.md`
- `skills/ask/SKILL.md`
- `skills/autopilot/SKILL.md`
- `skills/autoresearch-goal/SKILL.md`
- `skills/autoresearch/SKILL.md`
- `skills/best-practice-research/SKILL.md`
- `skills/build-fix/SKILL.md`
- `skills/cancel/SKILL.md`
- `skills/code-review/SKILL.md`
- `skills/configure-notifications/SKILL.md`
- `skills/deep-interview/SKILL.md`
- `skills/deepsearch/SKILL.md`
- `skills/design/SKILL.md`
- `skills/doctor/SKILL.md`
- `skills/ecomode/SKILL.md`
- `skills/frontend-ui-ux/SKILL.md`
- `skills/git-master/SKILL.md`
- `skills/help/SKILL.md`
- `skills/hud/SKILL.md`
- `skills/note/SKILL.md`
- `skills/omx-setup/SKILL.md`
- `skills/performance-goal/SKILL.md`
- `skills/pipeline/SKILL.md`
- `skills/plan/SKILL.md`
- `skills/prometheus-strict/README.md`
- `skills/prometheus-strict/SKILL.md`
- `skills/ralph-init/SKILL.md`
- `skills/ralph/SKILL.md`
- `skills/ralplan/SKILL.md`
- `skills/review/SKILL.md`
- `skills/security-review/SKILL.md`
- `skills/skill/SKILL.md`
- `skills/swarm/SKILL.md`
- `skills/tdd/SKILL.md`
- `skills/team/SKILL.md`
- `skills/trace/SKILL.md`
- `skills/ultragoal/SKILL.md`
- `skills/ultraqa/SKILL.md`
- `skills/ultrawork/SKILL.md`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `docs/pipeline/templates/README.md`
- `docs/pipeline/templates/execution/execution-result.md`
- `docs/pipeline/templates/execution/merge-decision.md`
- `docs/pipeline/templates/execution/package.md`
- `docs/pipeline/templates/execution/plan.md`
- `docs/pipeline/templates/execution/review.md`
- `docs/pipeline/templates/issue-package-identity.md`
- `docs/pipeline/templates/triage/duplicate-close.md`
- `docs/pipeline/templates/triage/feature-contract-proposal-gate.md`
- `docs/pipeline/templates/triage/needs-repro-question.md`
- `docs/pipeline/templates/triage/reproducible-bug-package.md`
- `docs/pipeline/templates/triage/timeout-close.md`
- `plugins/oh-my-codex/skills/ai-slop-cleaner/SKILL.md`
- `plugins/oh-my-codex/skills/analyze/SKILL.md`
- `plugins/oh-my-codex/skills/ask/SKILL.md`
- `plugins/oh-my-codex/skills/autopilot/SKILL.md`
- `plugins/oh-my-codex/skills/autoresearch-goal/SKILL.md`
- `plugins/oh-my-codex/skills/autoresearch/SKILL.md`
- `plugins/oh-my-codex/skills/best-practice-research/SKILL.md`
- `plugins/oh-my-codex/skills/cancel/SKILL.md`
- `plugins/oh-my-codex/skills/code-review/SKILL.md`
- `plugins/oh-my-codex/skills/configure-notifications/SKILL.md`
- `plugins/oh-my-codex/skills/deep-interview/SKILL.md`
- `plugins/oh-my-codex/skills/design/SKILL.md`
- `plugins/oh-my-codex/skills/doctor/SKILL.md`
- `plugins/oh-my-codex/skills/hud/SKILL.md`
- `plugins/oh-my-codex/skills/omx-setup/SKILL.md`
- `plugins/oh-my-codex/skills/performance-goal/SKILL.md`
- `plugins/oh-my-codex/skills/pipeline/SKILL.md`
- `plugins/oh-my-codex/skills/plan/SKILL.md`
- `plugins/oh-my-codex/skills/prometheus-strict/README.md`
- `plugins/oh-my-codex/skills/prometheus-strict/SKILL.md`
- `plugins/oh-my-codex/skills/ralph/SKILL.md`
- `plugins/oh-my-codex/skills/ralplan/SKILL.md`
- `plugins/oh-my-codex/skills/skill/SKILL.md`
- `plugins/oh-my-codex/skills/team/SKILL.md`
- `plugins/oh-my-codex/skills/ultragoal/SKILL.md`
- `plugins/oh-my-codex/skills/ultraqa/SKILL.md`
- `plugins/oh-my-codex/skills/ultrawork/SKILL.md`
- `plugins/oh-my-codex/skills/visual-ralph/SKILL.md`
- `plugins/oh-my-codex/skills/wiki/SKILL.md`
- `plugins/oh-my-codex/skills/worker/SKILL.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `crates/omx-api/tests/cli.rs`
- `crates/omx-runtime/tests/execution.rs`
- `crates/omx-sparkshell/tests/execution.rs`
- `crates/omx-sparkshell/tests/registry.rs`
- `src/adapt/__tests__/foundation.test.ts`
- `src/adapt/__tests__/hermes.test.ts`
- `src/agents/__tests__/definitions.test.ts`
- `src/agents/__tests__/native-config.test.ts`
- `src/auth/__tests__/config-sessions.test.ts`
- `src/auth/__tests__/quota-rotation.test.ts`
- `src/auth/__tests__/redact.test.ts`
- `src/auth/__tests__/storage.test.ts`
- `src/autopilot/__tests__/deep-interview-gate.test.ts`
- `src/autopilot/__tests__/fsm.test.ts`
- `src/autopilot/__tests__/ralplan-gate.test.ts`
- `src/autoresearch/__tests__/contracts.test.ts`
- `src/autoresearch/__tests__/runtime-parity-extra.test.ts`
- `src/autoresearch/__tests__/runtime.test.ts`
- `src/autoresearch/__tests__/skill-validation.test.ts`
- `src/catalog/__tests__/generator.test.ts`
- `src/catalog/__tests__/plugin-bundle-ssot.test.ts`
- `src/catalog/__tests__/schema.test.ts`
- `src/cli/__tests__/adapt-help.test.ts`
- `src/cli/__tests__/adapt.test.ts`
- `src/cli/__tests__/agents-init.test.ts`
- `src/cli/__tests__/agents.test.ts`
- `src/cli/__tests__/api.test.ts`
- `src/cli/__tests__/ask.test.ts`
- `src/cli/__tests__/auth.test.ts`
- `src/cli/__tests__/autoresearch-goal.test.ts`
- `src/cli/__tests__/autoresearch-guided.test.ts`
- `src/cli/__tests__/autoresearch.test.ts`
- `src/cli/__tests__/catalog-contract.test.ts`
- `src/cli/__tests__/cleanup.test.ts`
- `src/cli/__tests__/codex-feature-probe.test.ts`
- `src/cli/__tests__/codex-plugin-layout.test.ts`
- `src/cli/__tests__/doctor-context-window-warning.test.ts`
- `src/cli/__tests__/doctor-invalid-config.test.ts`
- `src/cli/__tests__/doctor-spark-routing.test.ts`
- `src/cli/__tests__/doctor-team.test.ts`
- `src/cli/__tests__/doctor-warning-copy.test.ts`
- `src/cli/__tests__/error-handling-warnings.test.ts`
- `src/cli/__tests__/exec.test.ts`
- `src/cli/__tests__/explore-windows-diagnostics.test.ts`
- `src/cli/__tests__/explore.test.ts`
- `src/cli/__tests__/hooks.test.ts`
- `src/cli/__tests__/imagegen-continuation.test.ts`
- `src/cli/__tests__/index.test.ts`
- `src/cli/__tests__/install-docs-contract.test.ts`
- `src/cli/__tests__/launch-fallback.test.ts`
- `src/cli/__tests__/lifecycle-notifications.test.ts`
- `src/cli/__tests__/list.test.ts`
- `src/cli/__tests__/mcp-parity.test.ts`
- `src/cli/__tests__/mcp-serve.test.ts`
- `src/cli/__tests__/native-assets.test.ts`
- `src/cli/__tests__/native-hook-dispatch-contract.test.ts`
- `src/cli/__tests__/nested-help-routing.test.ts`
- `src/cli/__tests__/package-bin-contract.test.ts`
- `src/cli/__tests__/packaged-script-resolution.test.ts`
- `src/cli/__tests__/performance-goal.test.ts`
- `src/cli/__tests__/prompt-skill-sanitization.test.ts`
- `src/cli/__tests__/question.test.ts`
- `src/cli/__tests__/ralph-deslop-contract.test.ts`
- `src/cli/__tests__/ralph-goal-mode-contract.test.ts`
- `src/cli/__tests__/ralph-prd-deep-interview.test.ts`
- `src/cli/__tests__/ralph-prd-smoke.test.ts`
- `src/cli/__tests__/ralph.test.ts`
- `src/cli/__tests__/resume.test.ts`
- `src/cli/__tests__/session-scoped-runtime.test.ts`
- `src/cli/__tests__/session-search-help.test.ts`
- `src/cli/__tests__/session-search.test.ts`
- `src/cli/__tests__/setup-agents-overwrite.test.ts`
- `src/cli/__tests__/setup-gh-star.test.ts`
- `src/cli/__tests__/setup-hooks-shared-ownership.test.ts`
- `src/cli/__tests__/setup-install-mode.test.ts`
- `src/cli/__tests__/setup-prompts-overwrite.test.ts`
- `src/cli/__tests__/setup-refresh.test.ts`
- `src/cli/__tests__/setup-scope.test.ts`
- `src/cli/__tests__/setup-skill-validation.test.ts`
- `src/cli/__tests__/setup-skills-overwrite.test.ts`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/ci.yml`
- `.github/workflows/dev-merge-issue-close.yml`
- `.github/workflows/pr-check.yml`
- `.github/workflows/publish-npm-manual.yml`
- `.github/workflows/release.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 699 |
| .md | 382 |
| .rs | 37 |
| .json | 20 |
| .py | 13 |
| .toml | 8 |
| .yml | 8 |
| .sh | 6 |
| .gitignore | 5 |
| .html | 5 |
| .txt | 5 |
| .lock | 2 |
| .cjs | 1 |
| .css | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `crates/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `templates/ 내부 책임 분리`
- `skills/ 내부 책임 분리`
- `docs/pipeline/templates/README.md 스펙/명령 의미`
- `docs/pipeline/templates/execution/execution-result.md 스펙/명령 의미`
- `docs/pipeline/templates/execution/merge-decision.md 스펙/명령 의미`
- `docs/pipeline/templates/execution/package.md 스펙/명령 의미`
- `docs/pipeline/templates/execution/plan.md 스펙/명령 의미`
- `Cargo.toml 실행 스크립트와 패키지 경계`
- `crates/omx-api/Cargo.toml 실행 스크립트와 패키지 경계`
- `crates/omx-explore/Cargo.toml 실행 스크립트와 패키지 경계`
- `crates/omx-mux/Cargo.toml 실행 스크립트와 패키지 경계`
- `crates/omx-runtime-core/Cargo.toml 실행 스크립트와 패키지 경계`

