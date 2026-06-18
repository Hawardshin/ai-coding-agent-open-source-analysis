# intuit/quickbooks-online-mcp-server Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

The QuickBooks MCP Server lets AI assistants access QuickBooks data via a standard interface. It uses the Model Context Protocol to expose QBO features as callable tools, enabling developers to build AI apps that fetch real-time QBO data through MCP.

## 요약

- 조사 단위: `sources/intuit__quickbooks-online-mcp-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 339 files, 19 directories, depth score 113, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=src/server/qbo-mcp-server.ts이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | intuit/quickbooks-online-mcp-server |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 285 |
| Forks | 148 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/intuit__quickbooks-online-mcp-server](../../../../sources/intuit__quickbooks-online-mcp-server) |
| Existing report | [reports/global-trending/repositories/intuit__quickbooks-online-mcp-server.md](../../../global-trending/repositories/intuit__quickbooks-online-mcp-server.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 339 / 19 |
| Max observed depth | 4 |
| Top directories | .github, docs, scripts, src, tests |
| Top extensions | .ts: 318, .md: 8, .json: 4, (none): 3, .mjs: 2, .yml: 2, .example: 1, .js: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 46 |
| tests | validation surface | 28 |
| docs | documentation surface | 6 |
| .github | ci surface | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | tsc && shx chmod +x dist/*.js |
| build | package.json | prepare | npm run build |
| serve-dev | package.json | watch | tsc --watch |
| quality | package.json | lint:fix | eslint --fix |
| quality | package.json | lint | eslint . |
| serve-dev | package.json | auth | node dist/auth-server.js |
| test | package.json | test | NODE_OPTIONS='--experimental-vm-modules' jest |
| test | package.json | test:watch | NODE_OPTIONS='--experimental-vm-modules' jest --watch |
| test | package.json | test:coverage | NODE_OPTIONS='--experimental-vm-modules' jest --coverage |
| entrypoint | package.json bin | index.js | ./dist/index.js |


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
| mcp | [src/server/qbo-mcp-server.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/server/qbo-mcp-server.ts) | mcp signal |
| agentRuntime | [src/types/tool-definition.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/types/tool-definition.ts) | agentRuntime signal |
| agentRuntime | [src/types/tool-response.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/types/tool-response.ts) | agentRuntime signal |
| agentRuntime | [src/tools/create-account.tool.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/tools/create-account.tool.ts) | agentRuntime signal |
| agentRuntime | [src/tools/create-attachable.tool.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/tools/create-attachable.tool.ts) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/intuit__quickbooks-online-mcp-server/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/intuit__quickbooks-online-mcp-server/tsconfig.json) | config signal |
| ci | [.github/workflows/claude-code-review.yml](../../../../sources/intuit__quickbooks-online-mcp-server/.github/workflows/claude-code-review.yml) | ci support |
| ci | [.github/workflows/claude.yml](../../../../sources/intuit__quickbooks-online-mcp-server/.github/workflows/claude.yml) | ci support |
| eval | [tsconfig.test.json](../../../../sources/intuit__quickbooks-online-mcp-server/tsconfig.test.json) | eval support |
| eval | [tests/unit/helpers/build-quickbooks-search-criteria.test.ts](../../../../sources/intuit__quickbooks-online-mcp-server/tests/unit/helpers/build-quickbooks-search-criteria.test.ts) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/index.ts) |
| agentRuntime | 142 | [src/types/tool-definition.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/types/tool-definition.ts)<br>[src/types/tool-response.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/types/tool-response.ts)<br>[src/tools/create-account.tool.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/tools/create-account.tool.ts)<br>[src/tools/create-attachable.tool.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/tools/create-attachable.tool.ts)<br>[src/tools/create-bill-payment.tool.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/tools/create-bill-payment.tool.ts)<br>[src/tools/create-bill.tool.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/tools/create-bill.tool.ts)<br>[src/tools/create-class.tool.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/tools/create-class.tool.ts)<br>[src/tools/create-credit-memo.tool.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/tools/create-credit-memo.tool.ts) |
| mcp | 1 | [src/server/qbo-mcp-server.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/server/qbo-mcp-server.ts) |
| retrieval | 1 | [src/index.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/index.ts) |
| spec | 2 | [docs/ARCHITECTURE.md](../../../../sources/intuit__quickbooks-online-mcp-server/docs/ARCHITECTURE.md)<br>[docs/plans/2026-01-13-full-api-coverage-design.md](../../../../sources/intuit__quickbooks-online-mcp-server/docs/plans/2026-01-13-full-api-coverage-design.md) |
| eval | 27 | [tsconfig.test.json](../../../../sources/intuit__quickbooks-online-mcp-server/tsconfig.test.json)<br>[tests/unit/helpers/build-quickbooks-search-criteria.test.ts](../../../../sources/intuit__quickbooks-online-mcp-server/tests/unit/helpers/build-quickbooks-search-criteria.test.ts)<br>[tests/unit/helpers/format-error.test.ts](../../../../sources/intuit__quickbooks-online-mcp-server/tests/unit/helpers/format-error.test.ts)<br>[tests/unit/helpers/register-tool.test.ts](../../../../sources/intuit__quickbooks-online-mcp-server/tests/unit/helpers/register-tool.test.ts)<br>[tests/unit/handlers/bill.handlers.test.ts](../../../../sources/intuit__quickbooks-online-mcp-server/tests/unit/handlers/bill.handlers.test.ts)<br>[tests/unit/handlers/budget.handlers.test.ts](../../../../sources/intuit__quickbooks-online-mcp-server/tests/unit/handlers/budget.handlers.test.ts)<br>[tests/unit/handlers/budget.prototype-shape.test.ts](../../../../sources/intuit__quickbooks-online-mcp-server/tests/unit/handlers/budget.prototype-shape.test.ts)<br>[tests/unit/handlers/class.handlers.test.ts](../../../../sources/intuit__quickbooks-online-mcp-server/tests/unit/handlers/class.handlers.test.ts) |
| security | 3 | [tests/unit/clients/quickbooks-client.auth.test.ts](../../../../sources/intuit__quickbooks-online-mcp-server/tests/unit/clients/quickbooks-client.auth.test.ts)<br>[src/auth-server.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/auth-server.ts)<br>[src/types/intuit-oauth.d.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/types/intuit-oauth.d.ts) |
| ci | 2 | [.github/workflows/claude-code-review.yml](../../../../sources/intuit__quickbooks-online-mcp-server/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/intuit__quickbooks-online-mcp-server/.github/workflows/claude.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 4 | [README.md](../../../../sources/intuit__quickbooks-online-mcp-server/README.md)<br>[docs/ARCHITECTURE.md](../../../../sources/intuit__quickbooks-online-mcp-server/docs/ARCHITECTURE.md)<br>[docs/TESTING.md](../../../../sources/intuit__quickbooks-online-mcp-server/docs/TESTING.md)<br>[docs/plans/2026-01-13-full-api-coverage-design.md](../../../../sources/intuit__quickbooks-online-mcp-server/docs/plans/2026-01-13-full-api-coverage-design.md) |
| config | 2 | [package.json](../../../../sources/intuit__quickbooks-online-mcp-server/package.json)<br>[tsconfig.json](../../../../sources/intuit__quickbooks-online-mcp-server/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 27 | [tsconfig.test.json](../../../../sources/intuit__quickbooks-online-mcp-server/tsconfig.test.json)<br>[tests/unit/helpers/build-quickbooks-search-criteria.test.ts](../../../../sources/intuit__quickbooks-online-mcp-server/tests/unit/helpers/build-quickbooks-search-criteria.test.ts)<br>[tests/unit/helpers/format-error.test.ts](../../../../sources/intuit__quickbooks-online-mcp-server/tests/unit/helpers/format-error.test.ts)<br>[tests/unit/helpers/register-tool.test.ts](../../../../sources/intuit__quickbooks-online-mcp-server/tests/unit/helpers/register-tool.test.ts)<br>[tests/unit/handlers/bill.handlers.test.ts](../../../../sources/intuit__quickbooks-online-mcp-server/tests/unit/handlers/bill.handlers.test.ts)<br>[tests/unit/handlers/budget.handlers.test.ts](../../../../sources/intuit__quickbooks-online-mcp-server/tests/unit/handlers/budget.handlers.test.ts) |
| CI workflows | 2 | [.github/workflows/claude-code-review.yml](../../../../sources/intuit__quickbooks-online-mcp-server/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/intuit__quickbooks-online-mcp-server/.github/workflows/claude.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 3 | [tests/unit/clients/quickbooks-client.auth.test.ts](../../../../sources/intuit__quickbooks-online-mcp-server/tests/unit/clients/quickbooks-client.auth.test.ts)<br>[src/auth-server.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/auth-server.ts)<br>[src/types/intuit-oauth.d.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/types/intuit-oauth.d.ts) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/server/qbo-mcp-server.ts`, `src/types/tool-definition.ts`, `src/types/tool-response.ts`.
2. Trace execution through entrypoints: `src/index.ts`.
3. Map agent/tool runtime through: `src/types/tool-definition.ts`, `src/types/tool-response.ts`, `src/tools/create-account.tool.ts`.
4. Inspect retrieval/memory/indexing through: `src/index.ts`.
5. Verify behavior through test/eval files: `tsconfig.test.json`, `tests/unit/helpers/build-quickbooks-search-criteria.test.ts`, `tests/unit/helpers/format-error.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 The QuickBooks MCP Server lets AI assistants access QuickBooks data via a standard interface. It uses the Model Context . 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, modelcontextprotocol, tests이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
