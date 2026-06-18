# giancarloerra/SocratiCode Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Enterprise-grade (40m+ LOC) codebase intelligence, zero-setup, local & private Plugin/Skill/Extension or MCP: hybrid semantic search, polyglot dependency graphs, symbol-level impact analysis & call-flow, interactive HTML viewer, cross-project & branch-aware search, DB/API/infra knowledge. 61% less tokens, 84% fewer calls, 37x faster. Cloud in beta.

## 요약

- 조사 단위: `sources/giancarloerra__SocratiCode` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 173 files, 28 directories, depth score 117, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/unit/code-graph-progress.test.ts, tests/unit/embedding-batch-size.test.ts, tests/unit/embedding-config.test.ts이고, 의존성 단서는 openai, modelcontextprotocol, ollama, llama, qdrant, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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


## Repository Context

| Field | Value |
| --- | --- |
| Repository | giancarloerra/SocratiCode |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | TypeScript |
| Stars | 3002 |
| Forks | 389 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/giancarloerra__SocratiCode](../../../../sources/giancarloerra__SocratiCode) |
| Existing report | [reports/global-trending/repositories/giancarloerra__SocratiCode.md](../../../global-trending/repositories/giancarloerra__SocratiCode.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 173 / 28 |
| Max observed depth | 4 |
| Top directories | .claude-plugin, .codex-plugin, .cursor-plugin, .github, agents, extension, hooks, scripts, skills, src, tests |
| Top extensions | .ts: 103, .md: 21, .json: 20, (none): 8, .yml: 7, .js: 4, .mjs: 3, .png: 3, .example: 2, .css: 1, .html: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 66 |
| src | source boundary | 28 |
| .github | ci surface | 1 |
| agents | top-level component | 1 |
| extension | top-level component | 1 |
| hooks | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | tsc && node scripts/copy-assets.mjs |
| serve-dev | package.json | start | node dist/index.js |
| serve-dev | package.json | dev | tsx src/index.ts |
| test | package.json | lint | biome check src/ tests/ |
| test | package.json | lint:fix | biome check --write src/ tests/ |
| build | package.json | release | release-it |
| quality | package.json | prepublishOnly | tsc && node scripts/copy-assets.mjs |
| build | package.json | release:dry | release-it --dry-run |
| test | package.json | test | vitest run |
| test | package.json | test:unit | vitest run tests/unit/ |
| test | package.json | test:integration | vitest run tests/integration/ |
| test | package.json | test:e2e | vitest run tests/e2e/ |
| test | package.json | test:watch | vitest |
| test | package.json | test:coverage | vitest run --coverage |
| entrypoint | package.json bin | index.js | dist/index.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | qdrant |
| modelRuntime | ollama, llama |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [tests/unit/code-graph-progress.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/code-graph-progress.test.ts) | retrieval signal |
| retrieval | [tests/unit/embedding-batch-size.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/embedding-batch-size.test.ts) | retrieval signal |
| retrieval | [tests/unit/embedding-config.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/embedding-config.test.ts) | retrieval signal |
| retrieval | [tests/unit/embedding-provider.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/embedding-provider.test.ts) | retrieval signal |
| entrypoints | [server.json](../../../../sources/giancarloerra__SocratiCode/server.json) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/giancarloerra__SocratiCode/src/index.ts) | entrypoints signal |
| docs | [README.md](../../../../sources/giancarloerra__SocratiCode/README.md) | docs signal |
| docs | [extension/README.md](../../../../sources/giancarloerra__SocratiCode/extension/README.md) | docs signal |
| eval | [tests/unit/config.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/config.test.ts) | eval signal |
| eval | [tests/unit/constants.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/constants.test.ts) | eval signal |
| eval | [tests/unit/context-artifacts-checkpoint.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/context-artifacts-checkpoint.test.ts) | eval signal |
| config | [package.json](../../../../sources/giancarloerra__SocratiCode/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [server.json](../../../../sources/giancarloerra__SocratiCode/server.json)<br>[src/index.ts](../../../../sources/giancarloerra__SocratiCode/src/index.ts) |
| agentRuntime | 18 | [AGENTS.md](../../../../sources/giancarloerra__SocratiCode/AGENTS.md)<br>[tests/unit/context-artifacts-checkpoint.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/context-artifacts-checkpoint.test.ts)<br>[tests/unit/context-artifacts.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/context-artifacts.test.ts)<br>[tests/unit/context-tools.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/context-tools.test.ts)<br>[tests/integration/context-artifacts.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/integration/context-artifacts.test.ts)<br>[tests/integration/tools.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/integration/tools.test.ts)<br>[src/tools/context-tools.ts](../../../../sources/giancarloerra__SocratiCode/src/tools/context-tools.ts)<br>[src/tools/graph-tools.ts](../../../../sources/giancarloerra__SocratiCode/src/tools/graph-tools.ts) |
| mcp | 2 | [.mcp.json](../../../../sources/giancarloerra__SocratiCode/.mcp.json)<br>[mcp.json](../../../../sources/giancarloerra__SocratiCode/mcp.json) |
| retrieval | 42 | [tests/unit/code-graph-progress.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/code-graph-progress.test.ts)<br>[tests/unit/embedding-batch-size.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/embedding-batch-size.test.ts)<br>[tests/unit/embedding-config.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/embedding-config.test.ts)<br>[tests/unit/embedding-provider.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/embedding-provider.test.ts)<br>[tests/unit/graph-aliases.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/graph-aliases.test.ts)<br>[tests/unit/graph-analysis.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/graph-analysis.test.ts)<br>[tests/unit/graph-discovery.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/graph-discovery.test.ts)<br>[tests/unit/graph-entrypoints.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/graph-entrypoints.test.ts) |
| spec | 0 | not obvious |
| eval | 52 | [tests/unit/code-graph-progress.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/code-graph-progress.test.ts)<br>[tests/unit/config.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/config.test.ts)<br>[tests/unit/constants.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/constants.test.ts)<br>[tests/unit/context-artifacts-checkpoint.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/context-artifacts-checkpoint.test.ts)<br>[tests/unit/context-artifacts.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/context-artifacts.test.ts)<br>[tests/unit/context-tools.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/context-tools.test.ts)<br>[tests/unit/docker.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/docker.test.ts)<br>[tests/unit/dynamic-language-loader.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/dynamic-language-loader.test.ts) |
| security | 1 | [SECURITY.md](../../../../sources/giancarloerra__SocratiCode/SECURITY.md) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/giancarloerra__SocratiCode/.github/workflows/ci.yml)<br>[.github/workflows/extension-ci.yml](../../../../sources/giancarloerra__SocratiCode/.github/workflows/extension-ci.yml)<br>[.github/workflows/extension-release.yml](../../../../sources/giancarloerra__SocratiCode/.github/workflows/extension-release.yml) |
| container | 1 | [docker-compose.yml](../../../../sources/giancarloerra__SocratiCode/docker-compose.yml) |
| instruction | 3 | [AGENTS.md](../../../../sources/giancarloerra__SocratiCode/AGENTS.md)<br>[CLAUDE.md](../../../../sources/giancarloerra__SocratiCode/CLAUDE.md)<br>[GEMINI.md](../../../../sources/giancarloerra__SocratiCode/GEMINI.md) |
| docs | 2 | [README.md](../../../../sources/giancarloerra__SocratiCode/README.md)<br>[extension/README.md](../../../../sources/giancarloerra__SocratiCode/extension/README.md) |
| config | 4 | [package.json](../../../../sources/giancarloerra__SocratiCode/package.json)<br>[tsconfig.json](../../../../sources/giancarloerra__SocratiCode/tsconfig.json)<br>[extension/package.json](../../../../sources/giancarloerra__SocratiCode/extension/package.json)<br>[extension/tsconfig.json](../../../../sources/giancarloerra__SocratiCode/extension/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 52 | [tests/unit/code-graph-progress.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/code-graph-progress.test.ts)<br>[tests/unit/config.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/config.test.ts)<br>[tests/unit/constants.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/constants.test.ts)<br>[tests/unit/context-artifacts-checkpoint.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/context-artifacts-checkpoint.test.ts)<br>[tests/unit/context-artifacts.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/context-artifacts.test.ts)<br>[tests/unit/context-tools.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/context-tools.test.ts) |
| CI workflows | 3 | [.github/workflows/ci.yml](../../../../sources/giancarloerra__SocratiCode/.github/workflows/ci.yml)<br>[.github/workflows/extension-ci.yml](../../../../sources/giancarloerra__SocratiCode/.github/workflows/extension-ci.yml)<br>[.github/workflows/extension-release.yml](../../../../sources/giancarloerra__SocratiCode/.github/workflows/extension-release.yml) |
| Containers / deploy | 1 | [docker-compose.yml](../../../../sources/giancarloerra__SocratiCode/docker-compose.yml) |
| Security / policy | 1 | [SECURITY.md](../../../../sources/giancarloerra__SocratiCode/SECURITY.md) |
| Agent instructions | 3 | [AGENTS.md](../../../../sources/giancarloerra__SocratiCode/AGENTS.md)<br>[CLAUDE.md](../../../../sources/giancarloerra__SocratiCode/CLAUDE.md)<br>[GEMINI.md](../../../../sources/giancarloerra__SocratiCode/GEMINI.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/unit/code-graph-progress.test.ts`, `tests/unit/embedding-batch-size.test.ts`, `tests/unit/embedding-config.test.ts`.
2. Trace execution through entrypoints: `server.json`, `src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `tests/unit/context-artifacts-checkpoint.test.ts`, `tests/unit/context-artifacts.test.ts`.
4. Inspect retrieval/memory/indexing through: `tests/unit/code-graph-progress.test.ts`, `tests/unit/embedding-batch-size.test.ts`, `tests/unit/embedding-config.test.ts`.
5. Verify behavior through test/eval files: `tests/unit/code-graph-progress.test.ts`, `tests/unit/config.test.ts`, `tests/unit/constants.test.ts`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Enterprise grade 40m+ LOC codebase intelligence, zero setup, local & private Plugin/Skill/Extension or MCP hybrid semant. 핵심 구조 신호는 TypeScript, package.json, docker-compose.yml, README.md, AGENTS.md, CLAUDE.md이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
