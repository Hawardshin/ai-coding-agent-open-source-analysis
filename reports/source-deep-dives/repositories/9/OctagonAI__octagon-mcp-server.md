# OctagonAI/octagon-mcp-server Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

An MCP server for public & prediction markets research. Ask natural-language questions and get structured, source-backed answers across SEC filings, earnings transcripts, company financials, stock & crypto market data, and prediction markets news & research. Built for investors, analysts, and researchers who need fast, cited intelligence.

## 요약

- 조사 단위: `sources/OctagonAI__octagon-mcp-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 55 files, 17 directories, depth score 92, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=.claude-plugin/mcp.json이고, 의존성 단서는 openai, modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | OctagonAI/octagon-mcp-server |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 132 |
| Forks | 23 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/OctagonAI__octagon-mcp-server](../../../../sources/OctagonAI__octagon-mcp-server) |
| Existing report | [reports/global-trending/repositories/OctagonAI__octagon-mcp-server.md](../../../global-trending/repositories/OctagonAI__octagon-mcp-server.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 55 / 17 |
| Max observed depth | 3 |
| Top directories | .claude-plugin, agents, examples, hooks, scripts, skills, src, tests |
| Top extensions | .ts: 22, .md: 9, .js: 7, .json: 7, .sh: 3, (none): 3, .example: 1, .mjs: 1, .py: 1, .yaml: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 22 |
| tests | validation surface | 8 |
| agents | top-level component | 1 |
| examples | top-level component | 1 |
| hooks | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | prebuild | node scripts/write-version.mjs |
| build | package.json | build | tsc && node -e "require('fs').chmodSync('dist/index.js', '755')" |
| test | package.json | test | npm run build && node --test tests/*.test.js |
| serve-dev | package.json | start | node dist/index.js |
| quality | package.json | lint | echo "No linting configured" |
| quality | package.json | format | echo "No formatting configured" |
| build | package.json | prepare | npm run build |
| build | package.json | release | npm run build && npm publish |
| entrypoint | package.json bin | index.js | dist/index.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
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
| mcp | [.claude-plugin/mcp.json](../../../../sources/OctagonAI__octagon-mcp-server/.claude-plugin/mcp.json) | mcp signal |
| agentRuntime | [src/tools/deepResearchAgent.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/tools/deepResearchAgent.ts) | agentRuntime signal |
| agentRuntime | [src/tools/index.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/tools/index.ts) | agentRuntime signal |
| agentRuntime | [src/tools/octagonAgent.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/tools/octagonAgent.ts) | agentRuntime signal |
| agentRuntime | [src/tools/predictionMarketsAgent.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/tools/predictionMarketsAgent.ts) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/OctagonAI__octagon-mcp-server/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/OctagonAI__octagon-mcp-server/tsconfig.json) | config signal |
| container | [Dockerfile](../../../../sources/OctagonAI__octagon-mcp-server/Dockerfile) | container support |
| eval | [tests/docs-catalog.test.js](../../../../sources/OctagonAI__octagon-mcp-server/tests/docs-catalog.test.js) | eval support |
| eval | [tests/docs-corpus.test.js](../../../../sources/OctagonAI__octagon-mcp-server/tests/docs-corpus.test.js) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/index.ts) |
| agentRuntime | 16 | [src/tools/deepResearchAgent.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/tools/deepResearchAgent.ts)<br>[src/tools/index.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/tools/index.ts)<br>[src/tools/octagonAgent.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/tools/octagonAgent.ts)<br>[src/tools/predictionMarketsAgent.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/tools/predictionMarketsAgent.ts)<br>[src/tools/predictionMarketsHistory.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/tools/predictionMarketsHistory.ts)<br>[src/tools/shared.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/tools/shared.ts)<br>[src/docs/tools.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/docs/tools.ts)<br>[skills/stock-quote/SKILL.md](../../../../sources/OctagonAI__octagon-mcp-server/skills/stock-quote/SKILL.md) |
| mcp | 1 | [.claude-plugin/mcp.json](../../../../sources/OctagonAI__octagon-mcp-server/.claude-plugin/mcp.json) |
| retrieval | 3 | [src/index.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/index.ts)<br>[src/tools/index.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/tools/index.ts)<br>[src/docs/index.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/docs/index.ts) |
| spec | 0 | not obvious |
| eval | 8 | [tests/docs-catalog.test.js](../../../../sources/OctagonAI__octagon-mcp-server/tests/docs-catalog.test.js)<br>[tests/docs-corpus.test.js](../../../../sources/OctagonAI__octagon-mcp-server/tests/docs-corpus.test.js)<br>[tests/docs-fetcher.test.js](../../../../sources/OctagonAI__octagon-mcp-server/tests/docs-fetcher.test.js)<br>[tests/docs-search.test.js](../../../../sources/OctagonAI__octagon-mcp-server/tests/docs-search.test.js)<br>[tests/docs-tools.test.js](../../../../sources/OctagonAI__octagon-mcp-server/tests/docs-tools.test.js)<br>[tests/octagon-agent-threading.test.js](../../../../sources/OctagonAI__octagon-mcp-server/tests/octagon-agent-threading.test.js)<br>[tests/plugin-manifest.test.js](../../../../sources/OctagonAI__octagon-mcp-server/tests/plugin-manifest.test.js)<br>[skills/octagon-api-smoke-test/SKILL.md](../../../../sources/OctagonAI__octagon-mcp-server/skills/octagon-api-smoke-test/SKILL.md) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 1 | [Dockerfile](../../../../sources/OctagonAI__octagon-mcp-server/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 11 | [README.md](../../../../sources/OctagonAI__octagon-mcp-server/README.md)<br>[src/docs/catalog.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/docs/catalog.ts)<br>[src/docs/config.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/docs/config.ts)<br>[src/docs/content.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/docs/content.ts)<br>[src/docs/fetcher.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/docs/fetcher.ts)<br>[src/docs/index.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/docs/index.ts)<br>[src/docs/resources.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/docs/resources.ts)<br>[src/docs/search.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/docs/search.ts) |
| config | 2 | [package.json](../../../../sources/OctagonAI__octagon-mcp-server/package.json)<br>[tsconfig.json](../../../../sources/OctagonAI__octagon-mcp-server/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 8 | [tests/docs-catalog.test.js](../../../../sources/OctagonAI__octagon-mcp-server/tests/docs-catalog.test.js)<br>[tests/docs-corpus.test.js](../../../../sources/OctagonAI__octagon-mcp-server/tests/docs-corpus.test.js)<br>[tests/docs-fetcher.test.js](../../../../sources/OctagonAI__octagon-mcp-server/tests/docs-fetcher.test.js)<br>[tests/docs-search.test.js](../../../../sources/OctagonAI__octagon-mcp-server/tests/docs-search.test.js)<br>[tests/docs-tools.test.js](../../../../sources/OctagonAI__octagon-mcp-server/tests/docs-tools.test.js)<br>[tests/octagon-agent-threading.test.js](../../../../sources/OctagonAI__octagon-mcp-server/tests/octagon-agent-threading.test.js) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/OctagonAI__octagon-mcp-server/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `.claude-plugin/mcp.json`, `src/tools/deepResearchAgent.ts`, `src/tools/index.ts`.
2. Trace execution through entrypoints: `src/index.ts`.
3. Map agent/tool runtime through: `src/tools/deepResearchAgent.ts`, `src/tools/index.ts`, `src/tools/octagonAgent.ts`.
4. Inspect retrieval/memory/indexing through: `src/index.ts`, `src/tools/index.ts`, `src/docs/index.ts`.
5. Verify behavior through test/eval files: `tests/docs-catalog.test.js`, `tests/docs-corpus.test.js`, `tests/docs-fetcher.test.js`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 An MCP server for public & prediction markets research. Ask natural language questions and get structured, source backed. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, README.md, LICENSE, openai이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
