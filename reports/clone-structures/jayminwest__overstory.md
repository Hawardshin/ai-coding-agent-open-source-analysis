# jayminwest/overstory 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/jayminwest__overstory |
| remote | https://github.com/jayminwest/overstory.git |
| HEAD | ff38f3f (2026-05-28) docs: mark overstory as no longer maintained / archived |
| branch | main |
| groups | previous-clone-inventory-107 |
| files | 457 |
| dirs | 52 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Overstory`, `Install`, `Development`, `Quick Start`, `Initialize overstory in your project`, `Install hooks into .claude/settings.local.json`, `Start a coordinator (persistent orchestrator)`, `Open the web UI — primary operator surface for the swarm`, `Spawn an individual worker agent (coordinator usually does this for you)`, `Force a worker into tmux when you want to attach mid-session`, `Inspect state from the CLI (also visible in the UI)`, `Commands`, `Core Workflow`, `Coordination`, `Messaging`, `Task Groups`, `Merge`, `Observability`

> Overstory Multi agent orchestration for AI coding agents. No longer maintained. Overstory is no longer actively maintained and this repository is archived (read only) — I am not reviewing issues or merging pull requests here anymore. Thank you to everyone who contributed. The code stays MIT licensed, so feel free to fork and carry it forward. Active development has moved to Warren , a self hostable control plane for sandboxed cloud agents and overstory's spiritual successor — start there for anything new. Overstory turns a single coding session into a multi agent team by spawning worker agents in isolated git worktrees, coordinating them through a custom SQLite mail system, and merging their work back with tiered conflict resolution. New projects spawn Claude agents headless and surface them through a web UI ( ov serve ); tmux attach is the opt in escape hatch for live steering. A plugga

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .canopy | dir |
| .claude | dir |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .mulch | dir |
| .overstory | dir |
| .pi | dir |
| .sapling | dir |
| .seeds | dir |
| agents | dir |
| biome.json | file |
| bun.lock | file |
| bunfig.toml | file |
| CHANGELOG.md | file |
| CLAUDE.md | file |
| CODEOWNERS | file |
| CONTRIBUTING.md | file |
| docs | dir |
| LICENSE | file |
| package.json | file |
| README.md | file |
| scripts | dir |
| SECURITY.md | file |
| src | dir |
| STEELMAN.md | file |
| templates | dir |
| tsconfig.json | file |
| ui | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| src/ | 277 |
| ui/ | 72 |
| .mulch/ | 22 |
| .overstory/ | 16 |
| (root) | 15 |
| agents/ | 10 |
| .claude/ | 8 |
| .github/ | 8 |
| docs/ | 7 |
| .pi/ | 5 |
| .canopy/ | 4 |
| .sapling/ | 4 |
| .seeds/ | 4 |
| templates/ | 4 |
| scripts/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 277 | preferred |
| docs/ | 7 | preferred |
| templates/ | 4 | preferred |
| agents/ | 10 | preferred |
| scripts/ | 1 | preferred |
| src/commands/ | 86 | large |
| ui/ | 72 | large |
| ui/src/ | 58 | large |
| src/agents/ | 32 | large |
| src/runtimes/ | 32 | large |
| src/doctor/ | 27 | large |
| ui/src/routes/ | 23 | large |
| .mulch/ | 22 | large |
| ui/src/components/ | 22 | large |
| .mulch/expertise/ | 20 | large |
| .overstory/ | 16 | large |
| src/commands/serve/ | 13 | large |
| src/utils/ | 12 | large |
| src/logging/ | 11 | large |
| ui/src/lib/ | 11 | large |
| .overstory/agent-defs/ | 9 | large |
| .claude/ | 8 | large |
| .github/ | 8 | large |
| src/merge/ | 8 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `bun.lock`
- `package.json`
- `tsconfig.json`
- `ui/bun.lock`
- `ui/package.json`
- `ui/tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| package.json | @os-eco/overstory-cli | test, lint, lint:fix, typecheck, version:bump, build:ui, prepack | @os-eco/mulch-cli, chalk, commander |
| ui/package.json | @overstory/ui | dev, build, preview, lint, typecheck | @radix-ui/react-dialog, @radix-ui/react-dropdown-menu, @radix-ui/react-scroll-area, @radix-ui/react-slot, @radix-ui/react-tabs, @tanstack/react-query, class-variance-authority, clsx, cmdk, lucide-react, react, react-dom, react-resizable-panels, react-router-dom |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.mulch/README.md`
- `.overstory/README.md`
- `CONTRIBUTING.md`
- `README.md`
- `docs/canopy-prompt-architecture.md`
- `docs/design/containerize-swarms.md`
- `docs/direction-multi-swarm-and-containers.md`
- `docs/direction-ui-and-ipc.md`
- `docs/headless-hooks-design.md`
- `docs/runtime-abstraction.md`
- `docs/runtime-adapters.md`
- `ui/README.md`

### 에이전트 지침 후보

- `.claude/commands/customize.md`
- `.claude/commands/discover.md`
- `.claude/commands/issue-reviews.md`
- `.claude/commands/pr-reviews.md`
- `.claude/commands/prioritize.md`
- `.claude/commands/release.md`
- `.claude/commands/triage.md`
- `.claude/settings.json`
- `CLAUDE.md`

### 스펙/템플릿/명령/스킬 후보

- `.claude/commands/customize.md`
- `.claude/commands/discover.md`
- `.claude/commands/issue-reviews.md`
- `.claude/commands/pr-reviews.md`
- `.claude/commands/prioritize.md`
- `.claude/commands/release.md`
- `.claude/commands/triage.md`
- `docs/headless-hooks-design.md`
- `src/commands/agents.test.ts`
- `src/commands/agents.ts`
- `src/commands/clean.test.ts`
- `src/commands/clean.ts`
- `src/commands/completions.test.ts`
- `src/commands/completions.ts`
- `src/commands/coordinator.test.ts`
- `src/commands/coordinator.ts`
- `src/commands/costs.test.ts`
- `src/commands/costs.ts`
- `src/commands/dashboard.test.ts`
- `src/commands/dashboard.ts`
- `src/commands/discover.test.ts`
- `src/commands/discover.ts`
- `src/commands/doctor.test.ts`
- `src/commands/doctor.ts`
- `src/commands/ecosystem.test.ts`
- `src/commands/ecosystem.ts`
- `src/commands/errors.test.ts`
- `src/commands/errors.ts`
- `src/commands/feed.test.ts`
- `src/commands/feed.ts`
- `src/commands/group.test.ts`
- `src/commands/group.ts`
- `src/commands/hooks.test.ts`
- `src/commands/hooks.ts`
- `src/commands/init.test.ts`
- `src/commands/init.ts`
- `src/commands/inspect.test.ts`
- `src/commands/inspect.ts`
- `src/commands/log.test.ts`
- `src/commands/log.ts`
- `src/commands/logs.test.ts`
- `src/commands/logs.ts`
- `src/commands/mail.test.ts`
- `src/commands/mail.ts`
- `src/commands/merge.test.ts`
- `src/commands/merge.ts`
- `src/commands/metrics.test.ts`
- `src/commands/metrics.ts`
- `src/commands/monitor.test.ts`
- `src/commands/monitor.ts`
- `src/commands/nudge.test.ts`
- `src/commands/nudge.ts`
- `src/commands/orchestrator.ts`
- `src/commands/prime.test.ts`
- `src/commands/prime.ts`
- `src/commands/replay.test.ts`
- `src/commands/replay.ts`
- `src/commands/run.test.ts`
- `src/commands/run.ts`
- `src/commands/serve.test.ts`
- `src/commands/serve.ts`
- `src/commands/serve/build.test.ts`
- `src/commands/serve/build.ts`
- `src/commands/serve/coordinator-actions.test.ts`
- `src/commands/serve/coordinator-actions.ts`
- `src/commands/serve/dev.test.ts`
- `src/commands/serve/dev.ts`
- `src/commands/serve/mail-actions.test.ts`
- `src/commands/serve/mail-actions.ts`
- `src/commands/serve/rest.test.ts`
- `src/commands/serve/rest.ts`
- `src/commands/serve/static.ts`
- `src/commands/serve/ws.test.ts`
- `src/commands/serve/ws.ts`
- `src/commands/sling.test.ts`
- `src/commands/sling.ts`
- `src/commands/spec.test.ts`
- `src/commands/spec.ts`
- `src/commands/status.test.ts`
- `src/commands/status.ts`
- `src/commands/stop.test.ts`
- `src/commands/stop.ts`
- `src/commands/supervisor.test.ts`
- `src/commands/supervisor.ts`
- `src/commands/trace.test.ts`
- `src/commands/trace.ts`
- `src/commands/update.test.ts`
- `src/commands/update.ts`
- `src/commands/upgrade.test.ts`
- `src/commands/upgrade.ts`
- `src/commands/watch.test.ts`
- `src/commands/watch.ts`
- `src/commands/worktree.test.ts`
- `src/commands/worktree.ts`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `src/agents/capabilities.test.ts`
- `src/agents/checkpoint.test.ts`
- `src/agents/copilot-hooks-deployer.test.ts`
- `src/agents/guard-rules.test.ts`
- `src/agents/headless-mail-injector.test.ts`
- `src/agents/headless-prompt.test.ts`
- `src/agents/hooks-deployer.test.ts`
- `src/agents/identity.test.ts`
- `src/agents/lifecycle.test.ts`
- `src/agents/mail-poll-detect.test.ts`
- `src/agents/manifest.test.ts`
- `src/agents/overlay.test.ts`
- `src/agents/scope-detect.test.ts`
- `src/agents/turn-lock.test.ts`
- `src/agents/turn-runner-dispatch.test.ts`
- `src/agents/turn-runner.test.ts`
- `src/beads/client.test.ts`
- `src/beads/molecules.test.ts`
- `src/canopy/client.test.ts`
- `src/commands/agents.test.ts`
- `src/commands/clean.test.ts`
- `src/commands/completions.test.ts`
- `src/commands/coordinator.test.ts`
- `src/commands/costs.test.ts`
- `src/commands/dashboard.test.ts`
- `src/commands/discover.test.ts`
- `src/commands/doctor.test.ts`
- `src/commands/ecosystem.test.ts`
- `src/commands/errors.test.ts`
- `src/commands/feed.test.ts`
- `src/commands/group.test.ts`
- `src/commands/hooks.test.ts`
- `src/commands/init.test.ts`
- `src/commands/inspect.test.ts`
- `src/commands/log.test.ts`
- `src/commands/logs.test.ts`
- `src/commands/mail.test.ts`
- `src/commands/merge.test.ts`
- `src/commands/metrics.test.ts`
- `src/commands/monitor.test.ts`
- `src/commands/nudge.test.ts`
- `src/commands/prime.test.ts`
- `src/commands/replay.test.ts`
- `src/commands/run.test.ts`
- `src/commands/serve.test.ts`
- `src/commands/serve/build.test.ts`
- `src/commands/serve/coordinator-actions.test.ts`
- `src/commands/serve/dev.test.ts`
- `src/commands/serve/mail-actions.test.ts`
- `src/commands/serve/rest.test.ts`
- `src/commands/serve/ws.test.ts`
- `src/commands/sling.test.ts`
- `src/commands/spec.test.ts`
- `src/commands/status.test.ts`
- `src/commands/stop.test.ts`
- `src/commands/supervisor.test.ts`
- `src/commands/trace.test.ts`
- `src/commands/update.test.ts`
- `src/commands/upgrade.test.ts`
- `src/commands/watch.test.ts`
- `src/commands/worktree.test.ts`
- `src/config.test.ts`
- `src/doctor/agents.test.ts`
- `src/doctor/config-check.test.ts`
- `src/doctor/consistency.test.ts`
- `src/doctor/databases.test.ts`
- `src/doctor/dependencies.test.ts`
- `src/doctor/ecosystem.test.ts`
- `src/doctor/logs.test.ts`
- `src/doctor/merge-queue.test.ts`
- `src/doctor/providers.test.ts`
- `src/doctor/serve.test.ts`
- `src/doctor/structure.test.ts`
- `src/doctor/version.test.ts`
- `src/doctor/watchdog.test.ts`
- `src/e2e/init-sling-lifecycle.test.ts`
- `src/errors.test.ts`
- `src/events/store.test.ts`
- `src/events/tailer.test.ts`
- `src/events/tool-filter.test.ts`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/ci.yml`
- `.github/workflows/publish.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 298 |
| .md | 43 |
| .tsx | 43 |
| .jsonl | 25 |
| .json | 15 |
| .yml | 7 |
| .gitignore | 6 |
| .yaml | 5 |
| .tmpl | 4 |
| .lock | 2 |
| .toml | 2 |
| .css | 1 |
| .gitattributes | 1 |
| .html | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `templates/ 내부 책임 분리`
- `agents/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `.claude/commands/customize.md 스펙/명령 의미`
- `.claude/commands/discover.md 스펙/명령 의미`
- `.claude/commands/issue-reviews.md 스펙/명령 의미`
- `.claude/commands/pr-reviews.md 스펙/명령 의미`
- `.claude/commands/prioritize.md 스펙/명령 의미`
- `bun.lock 실행 스크립트와 패키지 경계`
- `package.json 실행 스크립트와 패키지 경계`
- `tsconfig.json 실행 스크립트와 패키지 경계`
- `ui/bun.lock 실행 스크립트와 패키지 경계`
- `ui/package.json 실행 스크립트와 패키지 경계`

