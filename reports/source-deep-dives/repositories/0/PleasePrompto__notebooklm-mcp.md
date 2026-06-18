# PleasePrompto/notebooklm-mcp Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

MCP server for NotebookLM - Let your AI agents (Claude Code, Codex) research documentation directly with grounded, citation-backed answers from Gemini. Persistent auth, library management, cross-client sharing. Zero hallucinations, just your knowledge base.

## 요약

- 조사 단위: `sources/PleasePrompto__notebooklm-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 50 files, 12 directories, depth score 73, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=src/tools/definitions.ts, src/tools/handlers.ts, src/tools/index.ts이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | PleasePrompto/notebooklm-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | TypeScript |
| Stars | 2810 |
| Forks | 393 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/PleasePrompto__notebooklm-mcp](../../../../sources/PleasePrompto__notebooklm-mcp) |
| Existing report | [reports/llm-wiki/repositories/PleasePrompto__notebooklm-mcp.md](../../../llm-wiki/repositories/PleasePrompto__notebooklm-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 50 / 12 |
| Max observed depth | 4 |
| Top directories | docs, src |
| Top extensions | .ts: 36, .md: 6, .json: 4, (none): 3, .js: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 14 |
| docs | documentation surface | 6 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | tsc |
| build | package.json | postbuild | chmod +x dist/index.js |
| serve-dev | package.json | watch | tsc --watch |
| serve-dev | package.json | dev | tsx watch src/index.ts |
| build | package.json | prepare | npm run build |
| test | package.json | test | tsx src/index.ts |
| quality | package.json | lint | eslint src |
| quality | package.json | lint:fix | eslint src --fix |
| quality | package.json | format | prettier --write src |
| quality | package.json | format:check | prettier --check src |
| build | package.json | check | npm run format:check && npm run lint && npm run build |
| entrypoint | package.json bin | index.js | dist/index.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
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
| agentRuntime | [src/tools/definitions.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/tools/definitions.ts) | agentRuntime signal |
| agentRuntime | [src/tools/handlers.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/tools/handlers.ts) | agentRuntime signal |
| agentRuntime | [src/tools/index.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/tools/index.ts) | agentRuntime signal |
| agentRuntime | [src/tools/definitions/ask-question.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/tools/definitions/ask-question.ts) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/PleasePrompto__notebooklm-mcp/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/PleasePrompto__notebooklm-mcp/tsconfig.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/index.ts) |
| agentRuntime | 9 | [src/tools/definitions.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/tools/definitions.ts)<br>[src/tools/handlers.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/tools/handlers.ts)<br>[src/tools/index.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/tools/index.ts)<br>[src/tools/definitions/ask-question.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/tools/definitions/ask-question.ts)<br>[src/tools/definitions/notebook-management.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/tools/definitions/notebook-management.ts)<br>[src/tools/definitions/session-management.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/tools/definitions/session-management.ts)<br>[src/tools/definitions/sources.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/tools/definitions/sources.ts)<br>[src/tools/definitions/system.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/tools/definitions/system.ts) |
| mcp | 0 | not obvious |
| retrieval | 2 | [src/index.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/index.ts)<br>[src/tools/index.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/tools/index.ts) |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 2 | [src/auth/account-switcher.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/auth/account-switcher.ts)<br>[src/auth/auth-manager.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/auth/auth-manager.ts) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 5 | [README.md](../../../../sources/PleasePrompto__notebooklm-mcp/README.md)<br>[docs/configuration.md](../../../../sources/PleasePrompto__notebooklm-mcp/docs/configuration.md)<br>[docs/tools.md](../../../../sources/PleasePrompto__notebooklm-mcp/docs/tools.md)<br>[docs/troubleshooting.md](../../../../sources/PleasePrompto__notebooklm-mcp/docs/troubleshooting.md)<br>[docs/usage-guide.md](../../../../sources/PleasePrompto__notebooklm-mcp/docs/usage-guide.md) |
| config | 2 | [package.json](../../../../sources/PleasePrompto__notebooklm-mcp/package.json)<br>[tsconfig.json](../../../../sources/PleasePrompto__notebooklm-mcp/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 2 | [src/auth/account-switcher.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/auth/account-switcher.ts)<br>[src/auth/auth-manager.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/auth/auth-manager.ts) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious; test/eval path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/tools/definitions.ts`, `src/tools/handlers.ts`, `src/tools/index.ts`.
2. Trace execution through entrypoints: `src/index.ts`.
3. Map agent/tool runtime through: `src/tools/definitions.ts`, `src/tools/handlers.ts`, `src/tools/index.ts`.
4. Inspect retrieval/memory/indexing through: `src/index.ts`, `src/tools/index.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 MCP server for NotebookLM Let your AI agents Claude Code, Codex research documentation directly with grounded, citation . 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, modelcontextprotocol, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
