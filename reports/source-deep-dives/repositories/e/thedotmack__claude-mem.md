# thedotmack/claude-mem Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. Works with Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode + More

## 요약

- 조사 단위: `sources/thedotmack__claude-mem` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 928 files, 206 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/install-disable-auto-memory.test.ts, tests/uninstall-clear-auto-memory.test.ts, tests/worker/http/routes/memory-routes.test.ts이고, 의존성 단서는 anthropic, claude, modelcontextprotocol, express, react, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | thedotmack/claude-mem |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | JavaScript |
| Stars | 82994 |
| Forks | 7188 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/thedotmack__claude-mem](../../../../sources/thedotmack__claude-mem) |
| Existing report | [reports/global-trending/repositories/thedotmack__claude-mem.md](../../../global-trending/repositories/thedotmack__claude-mem.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 928 / 206 |
| Max observed depth | 6 |
| Top directories | .agent, .agents, .claude, .claude-plugin, .codex-plugin, .github, .plan, .windsurf, cursor-hooks, docker, docs, evals, install, openclaw, plans, plugin, ragtime, scripts, src, tests |
| Top extensions | .ts: 556, .md: 146, .json: 59, .mdx: 39, .js: 16, .sh: 16, .tsx: 15, .svg: 14, (none): 14, .cjs: 12, .yml: 11, .webp: 7 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 83 |
| src | source boundary | 64 |
| docs | documentation surface | 52 |
| .github | ci surface | 1 |
| cursor-hooks | top-level component | 1 |
| docker | documentation surface | 1 |
| evals | top-level component | 1 |
| install | top-level component | 1 |
| openclaw | top-level component | 1 |
| plans | top-level component | 1 |
| plugin | top-level component | 1 |
| ragtime | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | npm run build-and-sync |
| build | package.json | build | node scripts/sync-plugin-manifests.js && node scripts/build-hooks.js && node scripts/gen-plugin-lockfile.cjs |
| serve-dev | package.json | build-and-sync | npm run build && npm run sync-marketplace && (cd ~/.claude/plugins/marketplaces/thedotmack && npm run worker:restart) |
| utility | package.json | sync-marketplace | node scripts/sync-marketplace.cjs |
| utility | package.json | sync-marketplace:force | node scripts/sync-marketplace.cjs --force |
| build | package.json | build:binaries | node scripts/build-worker-binary.js |
| build | package.json | build:cli-binary | bun build --compile --minify ./src/services/worker-service.ts --outfile plugin/scripts/claude-mem |
| utility | package.json | worker:logs | tail -n 50 ~/.claude-mem/logs/worker-$(date +%Y-%m-%d).log |
| utility | package.json | worker:tail | tail -f 50 ~/.claude-mem/logs/worker-$(date +%Y-%m-%d).log |
| utility | package.json | changelog:generate | node scripts/generate-changelog.js |
| build | package.json | discord:notify | node scripts/discord-release-notify.js |
| serve-dev | package.json | worker:start | bun plugin/scripts/worker-service.cjs start |
| utility | package.json | worker:stop | bun plugin/scripts/worker-service.cjs stop |
| serve-dev | package.json | worker:restart | bun plugin/scripts/worker-service.cjs restart |
| utility | package.json | worker:status | bun plugin/scripts/worker-service.cjs status |
| quality | package.json | queue | bun scripts/check-pending-queue.ts |
| quality | package.json | queue:process | bun scripts/check-pending-queue.ts --process |
| utility | package.json | queue:clear:pending | bun scripts/clear-pending-queue.ts --all --force |
| utility | package.json | pr:status | bun scripts/pr-babysit-status.ts |
| utility | package.json | claude-md:regenerate | bun scripts/regenerate-claude-md.ts |
| utility | package.json | claude-md:dry-run | bun scripts/regenerate-claude-md.ts --dry-run |
| utility | package.json | strip-comments | bun scripts/strip-comments.ts |
| quality | package.json | strip-comments:check | bun scripts/strip-comments.ts --check |
| utility | package.json | strip-comments:dry-run | bun scripts/strip-comments.ts --dry-run |
| utility | package.json | translate-readme | bun scripts/translate-readme/cli.ts -v -o docs/i18n README.md |
| utility | package.json | translate:tier1 | npm run translate-readme -- zh zh-tw ja pt-br ko es de fr |
| utility | package.json | translate:tier2 | npm run translate-readme -- he ar ru pl cs nl tr uk |
| utility | package.json | translate:tier3 | npm run translate-readme -- vi id th hi bn ro sv |
| utility | package.json | translate:tier4 | npm run translate-readme -- it el hu fi da no |
| utility | package.json | translate:all | npm run translate:tier1 & npm run translate:tier2 & npm run translate:tier3 & npm run translate:tier4 & wait |
| utility | package.json | bug-report | npx tsx scripts/bug-report/cli.ts |
| utility | package.json | cursor:install | bun plugin/scripts/worker-service.cjs cursor install |
| utility | package.json | cursor:uninstall | bun plugin/scripts/worker-service.cjs cursor uninstall |
| utility | package.json | cursor:status | bun plugin/scripts/worker-service.cjs cursor status |
| utility | package.json | cursor:setup | bun plugin/scripts/worker-service.cjs cursor setup |
| quality | package.json | lint:hook-io | node scripts/check-hook-io-discipline.cjs |
| quality | package.json | lint:spawn-env | node scripts/check-spawn-env-discipline.cjs |
| quality | package.json | typecheck | tsc --noEmit && tsc --noEmit -p src/ui/viewer/tsconfig.json |
| quality | package.json | typecheck:root | tsc --noEmit |
| quality | package.json | typecheck:viewer | tsc --noEmit -p src/ui/viewer/tsconfig.json |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | anthropic, claude |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | express, react |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [tests/install-disable-auto-memory.test.ts](../../../../sources/thedotmack__claude-mem/tests/install-disable-auto-memory.test.ts) | retrieval signal |
| retrieval | [tests/uninstall-clear-auto-memory.test.ts](../../../../sources/thedotmack__claude-mem/tests/uninstall-clear-auto-memory.test.ts) | retrieval signal |
| retrieval | [tests/worker/http/routes/memory-routes.test.ts](../../../../sources/thedotmack__claude-mem/tests/worker/http/routes/memory-routes.test.ts) | retrieval signal |
| retrieval | [tests/supervisor/index.test.ts](../../../../sources/thedotmack__claude-mem/tests/supervisor/index.test.ts) | retrieval signal |
| entrypoints | [tests/server/server.test.ts](../../../../sources/thedotmack__claude-mem/tests/server/server.test.ts) | entrypoints signal |
| entrypoints | [src/services/server/Server.ts](../../../../sources/thedotmack__claude-mem/src/services/server/Server.ts) | entrypoints signal |
| entrypoints | [src/npx-cli/commands/server.ts](../../../../sources/thedotmack__claude-mem/src/npx-cli/commands/server.ts) | entrypoints signal |
| entrypoints | [src/bin/cleanup-duplicates.ts](../../../../sources/thedotmack__claude-mem/src/bin/cleanup-duplicates.ts) | entrypoints signal |
| docs | [README.md](../../../../sources/thedotmack__claude-mem/README.md) | docs signal |
| docs | [src/services/worker/README.md](../../../../sources/thedotmack__claude-mem/src/services/worker/README.md) | docs signal |
| docs | [scripts/translate-readme/README.md](../../../../sources/thedotmack__claude-mem/scripts/translate-readme/README.md) | docs signal |
| docs | [ragtime/README.md](../../../../sources/thedotmack__claude-mem/ragtime/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 8 | [tests/server/server.test.ts](../../../../sources/thedotmack__claude-mem/tests/server/server.test.ts)<br>[src/services/server/Server.ts](../../../../sources/thedotmack__claude-mem/src/services/server/Server.ts)<br>[src/npx-cli/commands/server.ts](../../../../sources/thedotmack__claude-mem/src/npx-cli/commands/server.ts)<br>[src/bin/cleanup-duplicates.ts](../../../../sources/thedotmack__claude-mem/src/bin/cleanup-duplicates.ts)<br>[src/bin/import-xml-observations.ts](../../../../sources/thedotmack__claude-mem/src/bin/import-xml-observations.ts)<br>[openclaw/src/index.test.ts](../../../../sources/thedotmack__claude-mem/openclaw/src/index.test.ts)<br>[openclaw/src/index.ts](../../../../sources/thedotmack__claude-mem/openclaw/src/index.ts)<br>[docs/server.md](../../../../sources/thedotmack__claude-mem/docs/server.md) |
| agentRuntime | 100 | [tests/context-injection.test.ts](../../../../sources/thedotmack__claude-mem/tests/context-injection.test.ts)<br>[tests/hook-command.test.ts](../../../../sources/thedotmack__claude-mem/tests/hook-command.test.ts)<br>[tests/hook-constants.test.ts](../../../../sources/thedotmack__claude-mem/tests/hook-constants.test.ts)<br>[tests/hook-lifecycle.test.ts](../../../../sources/thedotmack__claude-mem/tests/hook-lifecycle.test.ts)<br>[tests/worker/http/routes/memory-routes.test.ts](../../../../sources/thedotmack__claude-mem/tests/worker/http/routes/memory-routes.test.ts)<br>[tests/worker/agents/fallback-error-handler.test.ts](../../../../sources/thedotmack__claude-mem/tests/worker/agents/fallback-error-handler.test.ts)<br>[tests/worker/agents/response-processor.test.ts](../../../../sources/thedotmack__claude-mem/tests/worker/agents/response-processor.test.ts)<br>[tests/worker/agents/session-cleanup-helper.test.ts](../../../../sources/thedotmack__claude-mem/tests/worker/agents/session-cleanup-helper.test.ts) |
| mcp | 16 | [tests/cursor-mcp-config.test.ts](../../../../sources/thedotmack__claude-mem/tests/cursor-mcp-config.test.ts)<br>[tests/mcp-integrations.test.ts](../../../../sources/thedotmack__claude-mem/tests/mcp-integrations.test.ts)<br>[tests/services/sync/chroma-mcp-manager-cwd.test.ts](../../../../sources/thedotmack__claude-mem/tests/services/sync/chroma-mcp-manager-cwd.test.ts)<br>[tests/services/sync/chroma-mcp-manager-singleton.test.ts](../../../../sources/thedotmack__claude-mem/tests/services/sync/chroma-mcp-manager-singleton.test.ts)<br>[tests/services/sync/chroma-mcp-manager-ssl.test.ts](../../../../sources/thedotmack__claude-mem/tests/services/sync/chroma-mcp-manager-ssl.test.ts)<br>[tests/servers/mcp-server-name-safety.test.ts](../../../../sources/thedotmack__claude-mem/tests/servers/mcp-server-name-safety.test.ts)<br>[tests/servers/mcp-tool-schemas.test.ts](../../../../sources/thedotmack__claude-mem/tests/servers/mcp-tool-schemas.test.ts)<br>[tests/server/mcp-surface.test.ts](../../../../sources/thedotmack__claude-mem/tests/server/mcp-surface.test.ts) |
| retrieval | 36 | [tests/install-disable-auto-memory.test.ts](../../../../sources/thedotmack__claude-mem/tests/install-disable-auto-memory.test.ts)<br>[tests/uninstall-clear-auto-memory.test.ts](../../../../sources/thedotmack__claude-mem/tests/uninstall-clear-auto-memory.test.ts)<br>[tests/worker/http/routes/memory-routes.test.ts](../../../../sources/thedotmack__claude-mem/tests/worker/http/routes/memory-routes.test.ts)<br>[tests/supervisor/index.test.ts](../../../../sources/thedotmack__claude-mem/tests/supervisor/index.test.ts)<br>[tests/integration/chroma-vector-sync.test.ts](../../../../sources/thedotmack__claude-mem/tests/integration/chroma-vector-sync.test.ts)<br>[src/ui/viewer/index.tsx](../../../../sources/thedotmack__claude-mem/src/ui/viewer/index.tsx)<br>[src/supervisor/index.ts](../../../../sources/thedotmack__claude-mem/src/supervisor/index.ts)<br>[src/storage/sqlite/index.ts](../../../../sources/thedotmack__claude-mem/src/storage/sqlite/index.ts) |
| spec | 14 | [plugin/skills/design-is/SKILL.md](../../../../sources/thedotmack__claude-mem/plugin/skills/design-is/SKILL.md)<br>[plans/12-provider-and-extensibility-roadmap.md](../../../../sources/thedotmack__claude-mem/plans/12-provider-and-extensibility-roadmap.md)<br>[plans/2026-06-09-telemetry-metrics-spec.md](../../../../sources/thedotmack__claude-mem/plans/2026-06-09-telemetry-metrics-spec.md)<br>[docs/architecture-overview.md](../../../../sources/thedotmack__claude-mem/docs/architecture-overview.md)<br>[docs/server-beta-architecture-and-team-vision.md](../../../../sources/thedotmack__claude-mem/docs/server-beta-architecture-and-team-vision.md)<br>[docs/SESSION_ID_ARCHITECTURE.md](../../../../sources/thedotmack__claude-mem/docs/SESSION_ID_ARCHITECTURE.md)<br>[docs/public/architecture-evolution.mdx](../../../../sources/thedotmack__claude-mem/docs/public/architecture-evolution.mdx)<br>[docs/public/hooks-architecture.mdx](../../../../sources/thedotmack__claude-mem/docs/public/hooks-architecture.mdx) |
| eval | 211 | [Dockerfile.test-installer](../../../../sources/thedotmack__claude-mem/Dockerfile.test-installer)<br>[tests/bmp-safe.test.ts](../../../../sources/thedotmack__claude-mem/tests/bmp-safe.test.ts)<br>[tests/bun-runner.test.ts](../../../../sources/thedotmack__claude-mem/tests/bun-runner.test.ts)<br>[tests/claude-provider-error-classifier.test.ts](../../../../sources/thedotmack__claude-mem/tests/claude-provider-error-classifier.test.ts)<br>[tests/claude-provider-resume.test.ts](../../../../sources/thedotmack__claude-mem/tests/claude-provider-resume.test.ts)<br>[tests/codex-transcript-watcher-windows.test.ts](../../../../sources/thedotmack__claude-mem/tests/codex-transcript-watcher-windows.test.ts)<br>[tests/context-injection.test.ts](../../../../sources/thedotmack__claude-mem/tests/context-injection.test.ts)<br>[tests/cursor-context-update.test.ts](../../../../sources/thedotmack__claude-mem/tests/cursor-context-update.test.ts) |
| security | 21 | [SECURITY.md](../../../../sources/thedotmack__claude-mem/SECURITY.md)<br>[tests/log-level-audit.test.ts](../../../../sources/thedotmack__claude-mem/tests/log-level-audit.test.ts)<br>[tests/shared/oauth-token.test.ts](../../../../sources/thedotmack__claude-mem/tests/shared/oauth-token.test.ts)<br>[tests/services/stale-abort-controller-guard.test.ts](../../../../sources/thedotmack__claude-mem/tests/services/stale-abort-controller-guard.test.ts)<br>[tests/server/auth-api-key.test.ts](../../../../sources/thedotmack__claude-mem/tests/server/auth-api-key.test.ts)<br>[tests/server/server-beta-runtime-guard.test.ts](../../../../sources/thedotmack__claude-mem/tests/server/server-beta-runtime-guard.test.ts)<br>[tests/server/server-security-headers.test.ts](../../../../sources/thedotmack__claude-mem/tests/server/server-security-headers.test.ts)<br>[tests/security/observer-tool-enforcement.test.ts](../../../../sources/thedotmack__claude-mem/tests/security/observer-tool-enforcement.test.ts) |
| ci | 8 | [.github/workflows/ci.yml](../../../../sources/thedotmack__claude-mem/.github/workflows/ci.yml)<br>[.github/workflows/claude.yml](../../../../sources/thedotmack__claude-mem/.github/workflows/claude.yml)<br>[.github/workflows/close-tracked-issues.yml](../../../../sources/thedotmack__claude-mem/.github/workflows/close-tracked-issues.yml)<br>[.github/workflows/convert-feature-requests.yml](../../../../sources/thedotmack__claude-mem/.github/workflows/convert-feature-requests.yml)<br>[.github/workflows/deploy-install-scripts.yml](../../../../sources/thedotmack__claude-mem/.github/workflows/deploy-install-scripts.yml)<br>[.github/workflows/npm-publish.yml](../../../../sources/thedotmack__claude-mem/.github/workflows/npm-publish.yml)<br>[.github/workflows/summary.yml](../../../../sources/thedotmack__claude-mem/.github/workflows/summary.yml)<br>[.github/workflows/windows.yml](../../../../sources/thedotmack__claude-mem/.github/workflows/windows.yml) |
| container | 6 | [docker-compose.e2e.yml](../../../../sources/thedotmack__claude-mem/docker-compose.e2e.yml)<br>[docker-compose.yml](../../../../sources/thedotmack__claude-mem/docker-compose.yml)<br>[Dockerfile.test-installer](../../../../sources/thedotmack__claude-mem/Dockerfile.test-installer)<br>[openclaw/Dockerfile.e2e](../../../../sources/thedotmack__claude-mem/openclaw/Dockerfile.e2e)<br>[evals/swebench/Dockerfile.agent](../../../../sources/thedotmack__claude-mem/evals/swebench/Dockerfile.agent)<br>[docker/claude-mem/Dockerfile](../../../../sources/thedotmack__claude-mem/docker/claude-mem/Dockerfile) |
| instruction | 2 | [CLAUDE.md](../../../../sources/thedotmack__claude-mem/CLAUDE.md)<br>[.github/copilot-instructions.md](../../../../sources/thedotmack__claude-mem/.github/copilot-instructions.md) |
| docs | 105 | [README.md](../../../../sources/thedotmack__claude-mem/README.md)<br>[src/services/worker/README.md](../../../../sources/thedotmack__claude-mem/src/services/worker/README.md)<br>[scripts/translate-readme/README.md](../../../../sources/thedotmack__claude-mem/scripts/translate-readme/README.md)<br>[ragtime/README.md](../../../../sources/thedotmack__claude-mem/ragtime/README.md)<br>[docs/adapters.md](../../../../sources/thedotmack__claude-mem/docs/adapters.md)<br>[docs/anti-pattern-cleanup-plan.md](../../../../sources/thedotmack__claude-mem/docs/anti-pattern-cleanup-plan.md)<br>[docs/api.md](../../../../sources/thedotmack__claude-mem/docs/api.md)<br>[docs/architecture-overview.md](../../../../sources/thedotmack__claude-mem/docs/architecture-overview.md) |
| config | 6 | [package.json](../../../../sources/thedotmack__claude-mem/package.json)<br>[tsconfig.json](../../../../sources/thedotmack__claude-mem/tsconfig.json)<br>[src/ui/viewer/tsconfig.json](../../../../sources/thedotmack__claude-mem/src/ui/viewer/tsconfig.json)<br>[plugin/package.json](../../../../sources/thedotmack__claude-mem/plugin/package.json)<br>[openclaw/package.json](../../../../sources/thedotmack__claude-mem/openclaw/package.json)<br>[openclaw/tsconfig.json](../../../../sources/thedotmack__claude-mem/openclaw/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 211 | [Dockerfile.test-installer](../../../../sources/thedotmack__claude-mem/Dockerfile.test-installer)<br>[tests/bmp-safe.test.ts](../../../../sources/thedotmack__claude-mem/tests/bmp-safe.test.ts)<br>[tests/bun-runner.test.ts](../../../../sources/thedotmack__claude-mem/tests/bun-runner.test.ts)<br>[tests/claude-provider-error-classifier.test.ts](../../../../sources/thedotmack__claude-mem/tests/claude-provider-error-classifier.test.ts)<br>[tests/claude-provider-resume.test.ts](../../../../sources/thedotmack__claude-mem/tests/claude-provider-resume.test.ts)<br>[tests/codex-transcript-watcher-windows.test.ts](../../../../sources/thedotmack__claude-mem/tests/codex-transcript-watcher-windows.test.ts) |
| CI workflows | 8 | [.github/workflows/ci.yml](../../../../sources/thedotmack__claude-mem/.github/workflows/ci.yml)<br>[.github/workflows/claude.yml](../../../../sources/thedotmack__claude-mem/.github/workflows/claude.yml)<br>[.github/workflows/close-tracked-issues.yml](../../../../sources/thedotmack__claude-mem/.github/workflows/close-tracked-issues.yml)<br>[.github/workflows/convert-feature-requests.yml](../../../../sources/thedotmack__claude-mem/.github/workflows/convert-feature-requests.yml)<br>[.github/workflows/deploy-install-scripts.yml](../../../../sources/thedotmack__claude-mem/.github/workflows/deploy-install-scripts.yml)<br>[.github/workflows/npm-publish.yml](../../../../sources/thedotmack__claude-mem/.github/workflows/npm-publish.yml) |
| Containers / deploy | 6 | [docker-compose.e2e.yml](../../../../sources/thedotmack__claude-mem/docker-compose.e2e.yml)<br>[docker-compose.yml](../../../../sources/thedotmack__claude-mem/docker-compose.yml)<br>[Dockerfile.test-installer](../../../../sources/thedotmack__claude-mem/Dockerfile.test-installer)<br>[openclaw/Dockerfile.e2e](../../../../sources/thedotmack__claude-mem/openclaw/Dockerfile.e2e)<br>[evals/swebench/Dockerfile.agent](../../../../sources/thedotmack__claude-mem/evals/swebench/Dockerfile.agent)<br>[docker/claude-mem/Dockerfile](../../../../sources/thedotmack__claude-mem/docker/claude-mem/Dockerfile) |
| Security / policy | 21 | [SECURITY.md](../../../../sources/thedotmack__claude-mem/SECURITY.md)<br>[tests/log-level-audit.test.ts](../../../../sources/thedotmack__claude-mem/tests/log-level-audit.test.ts)<br>[tests/shared/oauth-token.test.ts](../../../../sources/thedotmack__claude-mem/tests/shared/oauth-token.test.ts)<br>[tests/services/stale-abort-controller-guard.test.ts](../../../../sources/thedotmack__claude-mem/tests/services/stale-abort-controller-guard.test.ts)<br>[tests/server/auth-api-key.test.ts](../../../../sources/thedotmack__claude-mem/tests/server/auth-api-key.test.ts)<br>[tests/server/server-beta-runtime-guard.test.ts](../../../../sources/thedotmack__claude-mem/tests/server/server-beta-runtime-guard.test.ts) |
| Agent instructions | 2 | [CLAUDE.md](../../../../sources/thedotmack__claude-mem/CLAUDE.md)<br>[.github/copilot-instructions.md](../../../../sources/thedotmack__claude-mem/.github/copilot-instructions.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/install-disable-auto-memory.test.ts`, `tests/uninstall-clear-auto-memory.test.ts`, `tests/worker/http/routes/memory-routes.test.ts`.
2. Trace execution through entrypoints: `tests/server/server.test.ts`, `src/services/server/Server.ts`, `src/npx-cli/commands/server.ts`.
3. Map agent/tool runtime through: `tests/context-injection.test.ts`, `tests/hook-command.test.ts`, `tests/hook-constants.test.ts`.
4. Inspect retrieval/memory/indexing through: `tests/install-disable-auto-memory.test.ts`, `tests/uninstall-clear-auto-memory.test.ts`, `tests/worker/http/routes/memory-routes.test.ts`.
5. Verify behavior through test/eval files: `Dockerfile.test-installer`, `tests/bmp-safe.test.ts`, `tests/bun-runner.test.ts`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it . 핵심 구조 신호는 JavaScript, package.json, docker-compose.yml, README.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
