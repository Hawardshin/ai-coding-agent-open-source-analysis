# activeloopai/hivemind Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Hivemind turns your traces into reusable skills across agents

## 요약

- 조사 단위: `sources/activeloopai__hivemind` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 581 files, 111 directories, depth score 119, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/shared/memory-path-utils.test.ts, tests/shared/standalone-embed-client.test.ts, tests/shared/graph/branch-coverage.test.ts이고, 의존성 단서는 anthropic, modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | activeloopai/hivemind |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | TypeScript |
| Stars | 1270 |
| Forks | 75 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/activeloopai__hivemind](../../../../sources/activeloopai__hivemind) |
| Existing report | [reports/global-trending/repositories/activeloopai__hivemind.md](../../../global-trending/repositories/activeloopai__hivemind.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 581 / 111 |
| Max observed depth | 6 |
| Top directories | .claude-plugin, .github, .husky, docs, embeddings, harnesses, library, scripts, src, tests |
| Top extensions | .ts: 458, .md: 86, .json: 14, .mjs: 6, .yaml: 6, (none): 5, .sh: 2, .js: 1, .mts: 1, .svg: 1, .webp: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 99 |
| src | source boundary | 40 |
| docs | documentation surface | 9 |
| .github | ci surface | 1 |
| embeddings | top-level component | 1 |
| harnesses | top-level component | 1 |
| library | source boundary | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | prebuild | node scripts/sync-versions.mjs |
| build | package.json | build | tsc && node esbuild.config.mjs |
| build | package.json | bundle | node esbuild.config.mjs |
| serve-dev | package.json | dev | tsc --watch |
| utility | package.json | shell | tsx src/shell/deeplake-shell.ts |
| utility | package.json | cli | tsx src/cli/index.ts |
| test | package.json | test | vitest run |
| quality | package.json | typecheck | tsc --noEmit |
| utility | package.json | dup | jscpd src |
| build | package.json | audit:openclaw | node scripts/audit-openclaw-bundle.mjs |
| quality | package.json | pack:check | node scripts/pack-check.mjs |
| build | package.json | rebuild:native | node scripts/ensure-tree-sitter.mjs |
| test | package.json | ci | npm run typecheck && npm run dup && npm test |
| utility | package.json | postinstall | node scripts/ensure-tree-sitter.mjs |
| build | package.json | prepare | husky && npm run build |
| build | package.json | prepack | npm run build |
| entrypoint | package.json bin | cli.js | bundle/cli.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | anthropic |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [tests/shared/memory-path-utils.test.ts](../../../../sources/activeloopai__hivemind/tests/shared/memory-path-utils.test.ts) | retrieval signal |
| retrieval | [tests/shared/standalone-embed-client.test.ts](../../../../sources/activeloopai__hivemind/tests/shared/standalone-embed-client.test.ts) | retrieval signal |
| retrieval | [tests/shared/graph/branch-coverage.test.ts](../../../../sources/activeloopai__hivemind/tests/shared/graph/branch-coverage.test.ts) | retrieval signal |
| retrieval | [tests/shared/graph/build-lock.test.ts](../../../../sources/activeloopai__hivemind/tests/shared/graph/build-lock.test.ts) | retrieval signal |
| entrypoints | [src/mcp/server.ts](../../../../sources/activeloopai__hivemind/src/mcp/server.ts) | entrypoints signal |
| entrypoints | [harnesses/openclaw/src/index.ts](../../../../sources/activeloopai__hivemind/harnesses/openclaw/src/index.ts) | entrypoints signal |
| docs | [README.md](../../../../sources/activeloopai__hivemind/README.md) | docs signal |
| docs | [library/README.md](../../../../sources/activeloopai__hivemind/library/README.md) | docs signal |
| docs | [library/requirements/README.md](../../../../sources/activeloopai__hivemind/library/requirements/README.md) | docs signal |
| docs | [library/requirements/reports/README.md](../../../../sources/activeloopai__hivemind/library/requirements/reports/README.md) | docs signal |
| eval | [tests/test-setup.ts](../../../../sources/activeloopai__hivemind/tests/test-setup.ts) | eval signal |
| eval | [tests/shared/agent-model.test.ts](../../../../sources/activeloopai__hivemind/tests/shared/agent-model.test.ts) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [src/mcp/server.ts](../../../../sources/activeloopai__hivemind/src/mcp/server.ts)<br>[harnesses/openclaw/src/index.ts](../../../../sources/activeloopai__hivemind/harnesses/openclaw/src/index.ts) |
| agentRuntime | 81 | [tests/shared/agent-model.test.ts](../../../../sources/activeloopai__hivemind/tests/shared/agent-model.test.ts)<br>[tests/shared/agent-sessions-insert-schema.test.ts](../../../../sources/activeloopai__hivemind/tests/shared/agent-sessions-insert-schema.test.ts)<br>[tests/shared/context-renderer.test.ts](../../../../sources/activeloopai__hivemind/tests/shared/context-renderer.test.ts)<br>[tests/shared/memory-path-utils.test.ts](../../../../sources/activeloopai__hivemind/tests/shared/memory-path-utils.test.ts)<br>[tests/shared/skill-edits.test.ts](../../../../sources/activeloopai__hivemind/tests/shared/skill-edits.test.ts)<br>[tests/shared/skill-invocations.test.ts](../../../../sources/activeloopai__hivemind/tests/shared/skill-invocations.test.ts)<br>[tests/shared/skill-org-publish.test.ts](../../../../sources/activeloopai__hivemind/tests/shared/skill-org-publish.test.ts)<br>[tests/shared/skill-proposer.test.ts](../../../../sources/activeloopai__hivemind/tests/shared/skill-proposer.test.ts) |
| mcp | 5 | [tests/cli/cli-install-mcp-shared.test.ts](../../../../sources/activeloopai__hivemind/tests/cli/cli-install-mcp-shared.test.ts)<br>[tests/claude-code/mcp-server.test.ts](../../../../sources/activeloopai__hivemind/tests/claude-code/mcp-server.test.ts)<br>[src/mcp/server.ts](../../../../sources/activeloopai__hivemind/src/mcp/server.ts)<br>[src/cli/install-mcp-shared.ts](../../../../sources/activeloopai__hivemind/src/cli/install-mcp-shared.ts)<br>[library/knowledge/private/plugins/mcp-and-extension-surfaces.md](../../../../sources/activeloopai__hivemind/library/knowledge/private/plugins/mcp-and-extension-surfaces.md) |
| retrieval | 172 | [tests/shared/memory-path-utils.test.ts](../../../../sources/activeloopai__hivemind/tests/shared/memory-path-utils.test.ts)<br>[tests/shared/standalone-embed-client.test.ts](../../../../sources/activeloopai__hivemind/tests/shared/standalone-embed-client.test.ts)<br>[tests/shared/graph/branch-coverage.test.ts](../../../../sources/activeloopai__hivemind/tests/shared/graph/branch-coverage.test.ts)<br>[tests/shared/graph/build-lock.test.ts](../../../../sources/activeloopai__hivemind/tests/shared/graph/build-lock.test.ts)<br>[tests/shared/graph/c.test.ts](../../../../sources/activeloopai__hivemind/tests/shared/graph/c.test.ts)<br>[tests/shared/graph/cache.test.ts](../../../../sources/activeloopai__hivemind/tests/shared/graph/cache.test.ts)<br>[tests/shared/graph/command-outcomes.test.ts](../../../../sources/activeloopai__hivemind/tests/shared/graph/command-outcomes.test.ts)<br>[tests/shared/graph/command.test.ts](../../../../sources/activeloopai__hivemind/tests/shared/graph/command.test.ts) |
| spec | 34 | [tests/pi/skillify-spec-drift.test.ts](../../../../sources/activeloopai__hivemind/tests/pi/skillify-spec-drift.test.ts)<br>[tests/cli/skillify-spec-self-drift.test.ts](../../../../sources/activeloopai__hivemind/tests/cli/skillify-spec-self-drift.test.ts)<br>[src/cli/skillify-spec.ts](../../../../sources/activeloopai__hivemind/src/cli/skillify-spec.ts)<br>[library/requirements/README.md](../../../../sources/activeloopai__hivemind/library/requirements/README.md)<br>[library/requirements/reports/README.md](../../../../sources/activeloopai__hivemind/library/requirements/reports/README.md)<br>[library/requirements/in-work/README.md](../../../../sources/activeloopai__hivemind/library/requirements/in-work/README.md)<br>[library/requirements/completed/README.md](../../../../sources/activeloopai__hivemind/library/requirements/completed/README.md)<br>[library/requirements/completed/prd-005-cursor-skillify-bridge/prd-005-cursor-skillify-bridge-index.md](../../../../sources/activeloopai__hivemind/library/requirements/completed/prd-005-cursor-skillify-bridge/prd-005-cursor-skillify-bridge-index.md) |
| eval | 244 | [tests/test-setup.ts](../../../../sources/activeloopai__hivemind/tests/test-setup.ts)<br>[tests/shared/agent-model.test.ts](../../../../sources/activeloopai__hivemind/tests/shared/agent-model.test.ts)<br>[tests/shared/agent-sessions-insert-schema.test.ts](../../../../sources/activeloopai__hivemind/tests/shared/agent-sessions-insert-schema.test.ts)<br>[tests/shared/capture-gate.test.ts](../../../../sources/activeloopai__hivemind/tests/shared/capture-gate.test.ts)<br>[tests/shared/context-renderer.test.ts](../../../../sources/activeloopai__hivemind/tests/shared/context-renderer.test.ts)<br>[tests/shared/deeplake-api-balance-exhausted.test.ts](../../../../sources/activeloopai__hivemind/tests/shared/deeplake-api-balance-exhausted.test.ts)<br>[tests/shared/deeplake-api-codebase-table.test.ts](../../../../sources/activeloopai__hivemind/tests/shared/deeplake-api-codebase-table.test.ts)<br>[tests/shared/deeplake-api-retry.test.ts](../../../../sources/activeloopai__hivemind/tests/shared/deeplake-api-retry.test.ts) |
| security | 17 | [tests/cli/cli-auth.test.ts](../../../../sources/activeloopai__hivemind/tests/cli/cli-auth.test.ts)<br>[tests/cli/update-skip-auth-guard.test.ts](../../../../sources/activeloopai__hivemind/tests/cli/update-skip-auth-guard.test.ts)<br>[tests/claude-code/auth-creds.test.ts](../../../../sources/activeloopai__hivemind/tests/claude-code/auth-creds.test.ts)<br>[tests/claude-code/auth-login-dispatch.test.ts](../../../../sources/activeloopai__hivemind/tests/claude-code/auth-login-dispatch.test.ts)<br>[tests/claude-code/auth.test.ts](../../../../sources/activeloopai__hivemind/tests/claude-code/auth.test.ts)<br>[src/commands/auth-creds.ts](../../../../sources/activeloopai__hivemind/src/commands/auth-creds.ts)<br>[src/commands/auth-login.ts](../../../../sources/activeloopai__hivemind/src/commands/auth-login.ts)<br>[src/commands/auth.ts](../../../../sources/activeloopai__hivemind/src/commands/auth.ts) |
| ci | 5 | [.github/workflows/ci.yaml](../../../../sources/activeloopai__hivemind/.github/workflows/ci.yaml)<br>[.github/workflows/codeql.yaml](../../../../sources/activeloopai__hivemind/.github/workflows/codeql.yaml)<br>[.github/workflows/pr-checks.yaml](../../../../sources/activeloopai__hivemind/.github/workflows/pr-checks.yaml)<br>[.github/workflows/publish-smoke-test.yaml](../../../../sources/activeloopai__hivemind/.github/workflows/publish-smoke-test.yaml)<br>[.github/workflows/release.yaml](../../../../sources/activeloopai__hivemind/.github/workflows/release.yaml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 23 | [README.md](../../../../sources/activeloopai__hivemind/README.md)<br>[library/README.md](../../../../sources/activeloopai__hivemind/library/README.md)<br>[library/requirements/README.md](../../../../sources/activeloopai__hivemind/library/requirements/README.md)<br>[library/requirements/reports/README.md](../../../../sources/activeloopai__hivemind/library/requirements/reports/README.md)<br>[library/requirements/in-work/README.md](../../../../sources/activeloopai__hivemind/library/requirements/in-work/README.md)<br>[library/requirements/completed/README.md](../../../../sources/activeloopai__hivemind/library/requirements/completed/README.md)<br>[library/requirements/backlog/README.md](../../../../sources/activeloopai__hivemind/library/requirements/backlog/README.md)<br>[library/notes/README.md](../../../../sources/activeloopai__hivemind/library/notes/README.md) |
| config | 5 | [package.json](../../../../sources/activeloopai__hivemind/package.json)<br>[tsconfig.json](../../../../sources/activeloopai__hivemind/tsconfig.json)<br>[harnesses/openclaw/package.json](../../../../sources/activeloopai__hivemind/harnesses/openclaw/package.json)<br>[harnesses/codex/package.json](../../../../sources/activeloopai__hivemind/harnesses/codex/package.json)<br>[harnesses/claude-code/tsconfig.json](../../../../sources/activeloopai__hivemind/harnesses/claude-code/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 244 | [tests/test-setup.ts](../../../../sources/activeloopai__hivemind/tests/test-setup.ts)<br>[tests/shared/agent-model.test.ts](../../../../sources/activeloopai__hivemind/tests/shared/agent-model.test.ts)<br>[tests/shared/agent-sessions-insert-schema.test.ts](../../../../sources/activeloopai__hivemind/tests/shared/agent-sessions-insert-schema.test.ts)<br>[tests/shared/capture-gate.test.ts](../../../../sources/activeloopai__hivemind/tests/shared/capture-gate.test.ts)<br>[tests/shared/context-renderer.test.ts](../../../../sources/activeloopai__hivemind/tests/shared/context-renderer.test.ts)<br>[tests/shared/deeplake-api-balance-exhausted.test.ts](../../../../sources/activeloopai__hivemind/tests/shared/deeplake-api-balance-exhausted.test.ts) |
| CI workflows | 5 | [.github/workflows/ci.yaml](../../../../sources/activeloopai__hivemind/.github/workflows/ci.yaml)<br>[.github/workflows/codeql.yaml](../../../../sources/activeloopai__hivemind/.github/workflows/codeql.yaml)<br>[.github/workflows/pr-checks.yaml](../../../../sources/activeloopai__hivemind/.github/workflows/pr-checks.yaml)<br>[.github/workflows/publish-smoke-test.yaml](../../../../sources/activeloopai__hivemind/.github/workflows/publish-smoke-test.yaml)<br>[.github/workflows/release.yaml](../../../../sources/activeloopai__hivemind/.github/workflows/release.yaml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 17 | [tests/cli/cli-auth.test.ts](../../../../sources/activeloopai__hivemind/tests/cli/cli-auth.test.ts)<br>[tests/cli/update-skip-auth-guard.test.ts](../../../../sources/activeloopai__hivemind/tests/cli/update-skip-auth-guard.test.ts)<br>[tests/claude-code/auth-creds.test.ts](../../../../sources/activeloopai__hivemind/tests/claude-code/auth-creds.test.ts)<br>[tests/claude-code/auth-login-dispatch.test.ts](../../../../sources/activeloopai__hivemind/tests/claude-code/auth-login-dispatch.test.ts)<br>[tests/claude-code/auth.test.ts](../../../../sources/activeloopai__hivemind/tests/claude-code/auth.test.ts)<br>[src/commands/auth-creds.ts](../../../../sources/activeloopai__hivemind/src/commands/auth-creds.ts) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/shared/memory-path-utils.test.ts`, `tests/shared/standalone-embed-client.test.ts`, `tests/shared/graph/branch-coverage.test.ts`.
2. Trace execution through entrypoints: `src/mcp/server.ts`, `harnesses/openclaw/src/index.ts`.
3. Map agent/tool runtime through: `tests/shared/agent-model.test.ts`, `tests/shared/agent-sessions-insert-schema.test.ts`, `tests/shared/context-renderer.test.ts`.
4. Inspect retrieval/memory/indexing through: `tests/shared/memory-path-utils.test.ts`, `tests/shared/standalone-embed-client.test.ts`, `tests/shared/graph/branch-coverage.test.ts`.
5. Verify behavior through test/eval files: `tests/test-setup.ts`, `tests/shared/agent-model.test.ts`, `tests/shared/agent-sessions-insert-schema.test.ts`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Hivemind turns your traces into reusable skills across agents. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, anthropic, modelcontextprotocol이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
