# Lumiaqian/openspec-mcp Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 74 files, 15 directories.

## 요약

- 조사 단위: `sources/Lumiaqian__openspec-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 74 files, 15 directories, depth score 105, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=web/src/hooks/useWebSocket.ts, src/server/tools/ai-context.ts, src/server/tools/approval.ts이고, 의존성 단서는 modelcontextprotocol, commander, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Lumiaqian/openspec-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | TypeScript |
| Stars | 25 |
| Forks | 3 |
| License | MIT License |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/Lumiaqian__openspec-mcp](../../../../sources/Lumiaqian__openspec-mcp) |
| Existing report | [reports/clone-structures/Lumiaqian__openspec-mcp.md](../../../clone-structures/Lumiaqian__openspec-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 74 / 15 |
| Max observed depth | 4 |
| Top directories | .github, src, web |
| Top extensions | .ts: 46, .tsx: 11, .json: 7, .js: 2, .md: 2, .yml: 2, (none): 2, .css: 1, .html: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 30 |
| web | source boundary | 9 |
| .github | ci surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | tsc |
| build | package.json | build:web | npm --prefix web run build |
| serve-dev | package.json | dev | tsx watch src/index.ts |
| serve-dev | package.json | start | node dist/index.js |
| serve-dev | package.json | start:dashboard | node dist/index.js --dashboard |
| test | package.json | test | vitest |
| build | package.json | prepublishOnly | npm run build && npm run build:web |
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
| developerSurface | commander |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [web/src/hooks/useWebSocket.ts](../../../../sources/Lumiaqian__openspec-mcp/web/src/hooks/useWebSocket.ts) | agentRuntime signal |
| agentRuntime | [src/server/tools/ai-context.ts](../../../../sources/Lumiaqian__openspec-mcp/src/server/tools/ai-context.ts) | agentRuntime signal |
| agentRuntime | [src/server/tools/approval.ts](../../../../sources/Lumiaqian__openspec-mcp/src/server/tools/approval.ts) | agentRuntime signal |
| agentRuntime | [src/server/tools/archive.ts](../../../../sources/Lumiaqian__openspec-mcp/src/server/tools/archive.ts) | agentRuntime signal |
| entrypoints | [web/src/App.tsx](../../../../sources/Lumiaqian__openspec-mcp/web/src/App.tsx) | entrypoints signal |
| entrypoints | [web/src/index.css](../../../../sources/Lumiaqian__openspec-mcp/web/src/index.css) | entrypoints signal |
| entrypoints | [web/src/main.tsx](../../../../sources/Lumiaqian__openspec-mcp/web/src/main.tsx) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/Lumiaqian__openspec-mcp/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/Lumiaqian__openspec-mcp/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/Lumiaqian__openspec-mcp/tsconfig.json) | config signal |
| config | [web/package.json](../../../../sources/Lumiaqian__openspec-mcp/web/package.json) | config signal |
| config | [web/tsconfig.json](../../../../sources/Lumiaqian__openspec-mcp/web/tsconfig.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 5 | [web/src/App.tsx](../../../../sources/Lumiaqian__openspec-mcp/web/src/App.tsx)<br>[web/src/index.css](../../../../sources/Lumiaqian__openspec-mcp/web/src/index.css)<br>[web/src/main.tsx](../../../../sources/Lumiaqian__openspec-mcp/web/src/main.tsx)<br>[src/index.ts](../../../../sources/Lumiaqian__openspec-mcp/src/index.ts)<br>[src/api/server.ts](../../../../sources/Lumiaqian__openspec-mcp/src/api/server.ts) |
| agentRuntime | 19 | [web/src/hooks/useWebSocket.ts](../../../../sources/Lumiaqian__openspec-mcp/web/src/hooks/useWebSocket.ts)<br>[src/server/tools/ai-context.ts](../../../../sources/Lumiaqian__openspec-mcp/src/server/tools/ai-context.ts)<br>[src/server/tools/approval.ts](../../../../sources/Lumiaqian__openspec-mcp/src/server/tools/approval.ts)<br>[src/server/tools/archive.ts](../../../../sources/Lumiaqian__openspec-mcp/src/server/tools/archive.ts)<br>[src/server/tools/context.ts](../../../../sources/Lumiaqian__openspec-mcp/src/server/tools/context.ts)<br>[src/server/tools/critique.ts](../../../../sources/Lumiaqian__openspec-mcp/src/server/tools/critique.ts)<br>[src/server/tools/cross-service.ts](../../../../sources/Lumiaqian__openspec-mcp/src/server/tools/cross-service.ts)<br>[src/server/tools/generator.ts](../../../../sources/Lumiaqian__openspec-mcp/src/server/tools/generator.ts) |
| mcp | 0 | not obvious |
| retrieval | 3 | [web/index.html](../../../../sources/Lumiaqian__openspec-mcp/web/index.html)<br>[web/src/index.css](../../../../sources/Lumiaqian__openspec-mcp/web/src/index.css)<br>[src/index.ts](../../../../sources/Lumiaqian__openspec-mcp/src/index.ts) |
| spec | 3 | [src/core/spec-critic.test.ts](../../../../sources/Lumiaqian__openspec-mcp/src/core/spec-critic.test.ts)<br>[src/core/spec-critic.ts](../../../../sources/Lumiaqian__openspec-mcp/src/core/spec-critic.ts)<br>[src/core/spec-parser.ts](../../../../sources/Lumiaqian__openspec-mcp/src/core/spec-parser.ts) |
| eval | 5 | [src/core/approval-manager.test.ts](../../../../sources/Lumiaqian__openspec-mcp/src/core/approval-manager.test.ts)<br>[src/core/spec-critic.test.ts](../../../../sources/Lumiaqian__openspec-mcp/src/core/spec-critic.test.ts)<br>[src/core/spec-critic.ts](../../../../sources/Lumiaqian__openspec-mcp/src/core/spec-critic.ts)<br>[src/core/spec-parser.ts](../../../../sources/Lumiaqian__openspec-mcp/src/core/spec-parser.ts)<br>[src/core/task-parser.test.ts](../../../../sources/Lumiaqian__openspec-mcp/src/core/task-parser.test.ts) |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/Lumiaqian__openspec-mcp/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/Lumiaqian__openspec-mcp/.github/workflows/publish.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 2 | [README.md](../../../../sources/Lumiaqian__openspec-mcp/README.md)<br>[README.zh.md](../../../../sources/Lumiaqian__openspec-mcp/README.zh.md) |
| config | 4 | [package.json](../../../../sources/Lumiaqian__openspec-mcp/package.json)<br>[tsconfig.json](../../../../sources/Lumiaqian__openspec-mcp/tsconfig.json)<br>[web/package.json](../../../../sources/Lumiaqian__openspec-mcp/web/package.json)<br>[web/tsconfig.json](../../../../sources/Lumiaqian__openspec-mcp/web/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 5 | [src/core/approval-manager.test.ts](../../../../sources/Lumiaqian__openspec-mcp/src/core/approval-manager.test.ts)<br>[src/core/spec-critic.test.ts](../../../../sources/Lumiaqian__openspec-mcp/src/core/spec-critic.test.ts)<br>[src/core/spec-critic.ts](../../../../sources/Lumiaqian__openspec-mcp/src/core/spec-critic.ts)<br>[src/core/spec-parser.ts](../../../../sources/Lumiaqian__openspec-mcp/src/core/spec-parser.ts)<br>[src/core/task-parser.test.ts](../../../../sources/Lumiaqian__openspec-mcp/src/core/task-parser.test.ts) |
| CI workflows | 2 | [.github/workflows/ci.yml](../../../../sources/Lumiaqian__openspec-mcp/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/Lumiaqian__openspec-mcp/.github/workflows/publish.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `web/src/hooks/useWebSocket.ts`, `src/server/tools/ai-context.ts`, `src/server/tools/approval.ts`.
2. Trace execution through entrypoints: `web/src/App.tsx`, `web/src/index.css`, `web/src/main.tsx`.
3. Map agent/tool runtime through: `web/src/hooks/useWebSocket.ts`, `src/server/tools/ai-context.ts`, `src/server/tools/approval.ts`.
4. Inspect retrieval/memory/indexing through: `web/index.html`, `web/src/index.css`, `src/index.ts`.
5. Verify behavior through test/eval files: `src/core/approval-manager.test.ts`, `src/core/spec-critic.test.ts`, `src/core/spec-critic.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 74 files, 15 directories.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, modelcontextprotocol, tests이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 major metadata risk not obvious입니다.
