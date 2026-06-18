# kokogo100/ragalgo-mcp-server Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Dynamic RAG Engine for AI Reliability. We provide mathematically scored context & sanitized data to prevent hallucinations in both static & volatile domains (starting with Korean Finance).

## 요약

- 조사 단위: `sources/kokogo100__ragalgo-mcp-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 31 files, 6 directories, depth score 100, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=src/tools/chart.ts, src/tools/financials.ts, src/tools/news.ts이고, 의존성 단서는 modelcontextprotocol, express, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | kokogo100/ragalgo-mcp-server |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | JavaScript |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/kokogo100__ragalgo-mcp-server](../../../../sources/kokogo100__ragalgo-mcp-server) |
| Existing report | [reports/korea-trending/repositories/kokogo100__ragalgo-mcp-server.md](../../../korea-trending/repositories/kokogo100__ragalgo-mcp-server.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 31 / 6 |
| Max observed depth | 3 |
| Top directories | .github, docs, src |
| Top extensions | .ts: 12, .md: 5, .json: 4, (none): 4, .png: 2, .cjs: 1, .mjs: 1, .yaml: 1, .yml: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 11 |
| docs | documentation surface | 7 |
| .github | ci surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | npx tsc |
| serve-dev | package.json | start | node dist/index.js |
| serve-dev | package.json | dev | npx tsx src/index.ts |
| entrypoint | package.json bin | index.js | ./dist/index.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | express |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [src/tools/chart.ts](../../../../sources/kokogo100__ragalgo-mcp-server/src/tools/chart.ts) | agentRuntime signal |
| agentRuntime | [src/tools/financials.ts](../../../../sources/kokogo100__ragalgo-mcp-server/src/tools/financials.ts) | agentRuntime signal |
| agentRuntime | [src/tools/news.ts](../../../../sources/kokogo100__ragalgo-mcp-server/src/tools/news.ts) | agentRuntime signal |
| agentRuntime | [src/tools/research.ts](../../../../sources/kokogo100__ragalgo-mcp-server/src/tools/research.ts) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/kokogo100__ragalgo-mcp-server/server.json) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/kokogo100__ragalgo-mcp-server/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/kokogo100__ragalgo-mcp-server/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/kokogo100__ragalgo-mcp-server/tsconfig.json) | config signal |
| ci | [.github/workflows/npm-publish.yml](../../../../sources/kokogo100__ragalgo-mcp-server/.github/workflows/npm-publish.yml) | ci support |
| container | [Dockerfile](../../../../sources/kokogo100__ragalgo-mcp-server/Dockerfile) | container support |
| eval | [test_zod.mjs](../../../../sources/kokogo100__ragalgo-mcp-server/test_zod.mjs) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [server.json](../../../../sources/kokogo100__ragalgo-mcp-server/server.json)<br>[src/index.ts](../../../../sources/kokogo100__ragalgo-mcp-server/src/index.ts) |
| agentRuntime | 8 | [src/tools/chart.ts](../../../../sources/kokogo100__ragalgo-mcp-server/src/tools/chart.ts)<br>[src/tools/financials.ts](../../../../sources/kokogo100__ragalgo-mcp-server/src/tools/financials.ts)<br>[src/tools/news.ts](../../../../sources/kokogo100__ragalgo-mcp-server/src/tools/news.ts)<br>[src/tools/research.ts](../../../../sources/kokogo100__ragalgo-mcp-server/src/tools/research.ts)<br>[src/tools/rooms.ts](../../../../sources/kokogo100__ragalgo-mcp-server/src/tools/rooms.ts)<br>[src/tools/snapshots.ts](../../../../sources/kokogo100__ragalgo-mcp-server/src/tools/snapshots.ts)<br>[src/tools/tags.ts](../../../../sources/kokogo100__ragalgo-mcp-server/src/tools/tags.ts)<br>[src/tools/trends.ts](../../../../sources/kokogo100__ragalgo-mcp-server/src/tools/trends.ts) |
| mcp | 0 | not obvious |
| retrieval | 1 | [src/index.ts](../../../../sources/kokogo100__ragalgo-mcp-server/src/index.ts) |
| spec | 3 | [architecture.png](../../../../sources/kokogo100__ragalgo-mcp-server/architecture.png)<br>[docs/CKN_Architecture_EN.md](../../../../sources/kokogo100__ragalgo-mcp-server/docs/CKN_Architecture_EN.md)<br>[docs/CKN_Architecture_KR.md](../../../../sources/kokogo100__ragalgo-mcp-server/docs/CKN_Architecture_KR.md) |
| eval | 1 | [test_zod.mjs](../../../../sources/kokogo100__ragalgo-mcp-server/test_zod.mjs) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/npm-publish.yml](../../../../sources/kokogo100__ragalgo-mcp-server/.github/workflows/npm-publish.yml) |
| container | 1 | [Dockerfile](../../../../sources/kokogo100__ragalgo-mcp-server/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 5 | [README.md](../../../../sources/kokogo100__ragalgo-mcp-server/README.md)<br>[docs/CKN_Architecture_EN.md](../../../../sources/kokogo100__ragalgo-mcp-server/docs/CKN_Architecture_EN.md)<br>[docs/CKN_Architecture_KR.md](../../../../sources/kokogo100__ragalgo-mcp-server/docs/CKN_Architecture_KR.md)<br>[docs/RagAlgo_Report_EN.md](../../../../sources/kokogo100__ragalgo-mcp-server/docs/RagAlgo_Report_EN.md)<br>[docs/RagAlgo_Report_KR.md](../../../../sources/kokogo100__ragalgo-mcp-server/docs/RagAlgo_Report_KR.md) |
| config | 2 | [package.json](../../../../sources/kokogo100__ragalgo-mcp-server/package.json)<br>[tsconfig.json](../../../../sources/kokogo100__ragalgo-mcp-server/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1 | [test_zod.mjs](../../../../sources/kokogo100__ragalgo-mcp-server/test_zod.mjs) |
| CI workflows | 1 | [.github/workflows/npm-publish.yml](../../../../sources/kokogo100__ragalgo-mcp-server/.github/workflows/npm-publish.yml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/kokogo100__ragalgo-mcp-server/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/tools/chart.ts`, `src/tools/financials.ts`, `src/tools/news.ts`.
2. Trace execution through entrypoints: `server.json`, `src/index.ts`.
3. Map agent/tool runtime through: `src/tools/chart.ts`, `src/tools/financials.ts`, `src/tools/news.ts`.
4. Inspect retrieval/memory/indexing through: `src/index.ts`.
5. Verify behavior through test/eval files: `test_zod.mjs`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Dynamic RAG Engine for AI Reliability. We provide mathematically scored context & sanitized data to prevent hallucinatio. 핵심 구조 신호는 JavaScript, package.json, Dockerfile, README.md, modelcontextprotocol, ci이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
