# JeongSeongMok/tossinvest-openapi-mcp Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

토스증권 Open API(Toss Securities Open API)를 AI 에이전트가 쉽게 탐색·연동하도록 돕는 MCP 서버 (stdio). Claude·Cursor·Codex 지원.

## 요약

- 조사 단위: `sources/JeongSeongMok__tossinvest-openapi-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 22 files, 3 directories, depth score 83, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/index.ts, src/server.ts이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | JeongSeongMok/tossinvest-openapi-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/JeongSeongMok__tossinvest-openapi-mcp](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp) |
| Existing report | [reports/korea-trending/repositories/JeongSeongMok__tossinvest-openapi-mcp.md](../../../korea-trending/repositories/JeongSeongMok__tossinvest-openapi-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 22 / 3 |
| Max observed depth | 3 |
| Top directories | docs, src |
| Top extensions | .ts: 6, .json: 5, .md: 4, (none): 4, .html: 1, .txt: 1, .xml: 1 |
| Source patterns | cli-first, api/server, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 6 |
| src | source boundary | 6 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | tsc |
| serve-dev | package.json | watch | tsc --watch |
| serve-dev | package.json | start | node dist/index.js |
| build | package.json | prepare | npm run build |
| build | package.json | prepublishOnly | npm run build |
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
| entrypoints | [src/index.ts](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/src/index.ts) | entrypoints signal |
| entrypoints | [src/server.ts](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/src/server.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/CLAUDE.md) | instruction signal |
| config | [package.json](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/tsconfig.json) | config signal |
| container | [Dockerfile](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/Dockerfile) | container support |
| eval | [src/spec/store.ts](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/src/spec/store.ts) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [src/index.ts](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/src/index.ts)<br>[src/server.ts](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/src/server.ts) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 2 | [src/index.ts](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/src/index.ts)<br>[docs/index.html](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/docs/index.html) |
| spec | 1 | [src/spec/store.ts](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/src/spec/store.ts) |
| eval | 1 | [src/spec/store.ts](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/src/spec/store.ts) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 1 | [Dockerfile](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/CLAUDE.md) |
| docs | 7 | [README.en.md](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/README.en.md)<br>[README.ja.md](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/README.ja.md)<br>[README.md](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/README.md)<br>[docs/.nojekyll](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/docs/.nojekyll)<br>[docs/index.html](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/docs/index.html)<br>[docs/robots.txt](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/docs/robots.txt)<br>[docs/sitemap.xml](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/docs/sitemap.xml) |
| config | 2 | [package.json](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/package.json)<br>[tsconfig.json](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1 | [src/spec/store.ts](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/src/spec/store.ts) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/index.ts`, `src/server.ts`, `CLAUDE.md`.
2. Trace execution through entrypoints: `src/index.ts`, `src/server.ts`.
3. Inspect retrieval/memory/indexing through: `src/index.ts`, `docs/index.html`.
4. Verify behavior through test/eval files: `src/spec/store.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 토스증권 Open API Toss Securities Open API 를 AI 에이전트가 쉽게 탐색·연동하도록 돕는 MCP 서버 stdio . Claude·Cursor·Codex 지원.. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, README.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
