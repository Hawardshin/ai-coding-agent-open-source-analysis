# farmbit-mdk/korea-market-data-mcp Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Open-source MCP server for reliable Korean stock, ETF, index, and market data access from AI agents, starting with Kiwoom Securities REST API.

## 요약

- 조사 단위: `sources/farmbit-mdk__korea-market-data-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 180 files, 21 directories, depth score 107, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/tool-registry.test.ts, docs/getting-started/mcp-client-setup.md이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | farmbit-mdk/korea-market-data-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/farmbit-mdk__korea-market-data-mcp](../../../../sources/farmbit-mdk__korea-market-data-mcp) |
| Existing report | [reports/korea-trending/repositories/farmbit-mdk__korea-market-data-mcp.md](../../../korea-trending/repositories/farmbit-mdk__korea-market-data-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 180 / 21 |
| Max observed depth | 4 |
| Top directories | docs, examples, scripts, src, tests |
| Top extensions | .md: 86, .ts: 72, .json: 16, .example: 3, (none): 3 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 62 |
| tests | validation surface | 26 |
| src | source boundary | 23 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | tsc -p tsconfig.json |
| serve-dev | package.json | dev | tsx src/index.ts |
| test | package.json | kiwoom:index:manual | tsx scripts/kiwoom-manual-index-test.ts |
| test | package.json | kiwoom:quote:manual | tsx scripts/kiwoom-manual-quote-test.ts |
| quality | package.json | kiwoom:setup:check | tsx scripts/kiwoom-setup-check.ts |
| test | package.json | kiwoom:token:manual | tsx scripts/kiwoom-manual-token-test.ts |
| serve-dev | package.json | start | node dist/index.js |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
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
| mcp | [tests/tool-registry.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/tool-registry.test.ts) | mcp signal |
| mcp | [docs/getting-started/mcp-client-setup.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/docs/getting-started/mcp-client-setup.md) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/AGENTS.md) | agentRuntime signal |
| agentRuntime | [src/tools/get-daily-chart.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/tools/get-daily-chart.ts) | agentRuntime signal |
| agentRuntime | [src/tools/get-etf-quote.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/tools/get-etf-quote.ts) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/farmbit-mdk__korea-market-data-mcp/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/farmbit-mdk__korea-market-data-mcp/tsconfig.json) | config signal |
| eval | [tests/compliance-security-docs.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/compliance-security-docs.test.ts) | eval support |
| eval | [tests/kiwoom-auth.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/kiwoom-auth.test.ts) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/index.ts) |
| agentRuntime | 15 | [AGENTS.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/AGENTS.md)<br>[tests/tool-registry.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/tool-registry.test.ts)<br>[src/tools/get-daily-chart.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/tools/get-daily-chart.ts)<br>[src/tools/get-etf-quote.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/tools/get-etf-quote.ts)<br>[src/tools/get-kiwoom-setup-status.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/tools/get-kiwoom-setup-status.ts)<br>[src/tools/get-kiwoom-stock-quote.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/tools/get-kiwoom-stock-quote.ts)<br>[src/tools/get-korean-market-data-context.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/tools/get-korean-market-data-context.ts)<br>[src/tools/get-market-index.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/tools/get-market-index.ts) |
| mcp | 2 | [tests/tool-registry.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/tool-registry.test.ts)<br>[docs/getting-started/mcp-client-setup.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/docs/getting-started/mcp-client-setup.md) |
| retrieval | 9 | [tests/kiwoom-market-index-client.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/kiwoom-market-index-client.test.ts)<br>[src/index.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/index.ts)<br>[src/tools/get-market-index.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/tools/get-market-index.ts)<br>[src/tools/index.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/tools/index.ts)<br>[src/schemas/index.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/schemas/index.ts)<br>[src/providers/mock/index.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/providers/mock/index.ts)<br>[src/providers/kiwoom/index-client.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/providers/kiwoom/index-client.ts)<br>[src/providers/kiwoom/index.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/providers/kiwoom/index.ts) |
| spec | 4 | [ROADMAP.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/ROADMAP.md)<br>[docs/architecture.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/docs/architecture.md)<br>[docs/provider-adapter-spec.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/docs/provider-adapter-spec.md)<br>[docs/tool-spec.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/docs/tool-spec.md) |
| eval | 34 | [tests/compliance-security-docs.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/compliance-security-docs.test.ts)<br>[tests/kiwoom-auth.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/kiwoom-auth.test.ts)<br>[tests/kiwoom-manual-quote-test.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/kiwoom-manual-quote-test.test.ts)<br>[tests/kiwoom-manual-token-test.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/kiwoom-manual-token-test.test.ts)<br>[tests/kiwoom-market-index-client.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/kiwoom-market-index-client.test.ts)<br>[tests/kiwoom-public-quote-tool.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/kiwoom-public-quote-tool.test.ts)<br>[tests/kiwoom-quote-client.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/kiwoom-quote-client.test.ts)<br>[tests/kiwoom-token-client.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/kiwoom-token-client.test.ts) |
| security | 12 | [SECURITY.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/SECURITY.md)<br>[tests/compliance-security-docs.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/compliance-security-docs.test.ts)<br>[tests/kiwoom-auth.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/kiwoom-auth.test.ts)<br>[tests/secret-redaction.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/secret-redaction.test.ts)<br>[src/safety/redact-secret.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/safety/redact-secret.ts)<br>[src/providers/kiwoom/auth.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/providers/kiwoom/auth.ts)<br>[docs/security/credential-handling.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/docs/security/credential-handling.md)<br>[docs/release/npm-access-policy.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/docs/release/npm-access-policy.md) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 1 | [AGENTS.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/AGENTS.md) |
| docs | 81 | [README.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/README.md)<br>[examples/README.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/examples/README.md)<br>[docs/architecture.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/docs/architecture.md)<br>[docs/client-setup.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/docs/client-setup.md)<br>[docs/provider-adapter-spec.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/docs/provider-adapter-spec.md)<br>[docs/tool-spec.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/docs/tool-spec.md)<br>[docs/troubleshooting.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/docs/troubleshooting.md)<br>[docs/verification/claude-desktop-live-usage-result.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/docs/verification/claude-desktop-live-usage-result.md) |
| config | 2 | [package.json](../../../../sources/farmbit-mdk__korea-market-data-mcp/package.json)<br>[tsconfig.json](../../../../sources/farmbit-mdk__korea-market-data-mcp/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 34 | [tests/compliance-security-docs.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/compliance-security-docs.test.ts)<br>[tests/kiwoom-auth.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/kiwoom-auth.test.ts)<br>[tests/kiwoom-manual-quote-test.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/kiwoom-manual-quote-test.test.ts)<br>[tests/kiwoom-manual-token-test.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/kiwoom-manual-token-test.test.ts)<br>[tests/kiwoom-market-index-client.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/kiwoom-market-index-client.test.ts)<br>[tests/kiwoom-public-quote-tool.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/kiwoom-public-quote-tool.test.ts) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 12 | [SECURITY.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/SECURITY.md)<br>[tests/compliance-security-docs.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/compliance-security-docs.test.ts)<br>[tests/kiwoom-auth.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/kiwoom-auth.test.ts)<br>[tests/secret-redaction.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/secret-redaction.test.ts)<br>[src/safety/redact-secret.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/safety/redact-secret.ts)<br>[src/providers/kiwoom/auth.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/providers/kiwoom/auth.ts) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/tool-registry.test.ts`, `docs/getting-started/mcp-client-setup.md`, `AGENTS.md`.
2. Trace execution through entrypoints: `src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `tests/tool-registry.test.ts`, `src/tools/get-daily-chart.ts`.
4. Inspect retrieval/memory/indexing through: `tests/kiwoom-market-index-client.test.ts`, `src/index.ts`, `src/tools/get-market-index.ts`.
5. Verify behavior through test/eval files: `tests/compliance-security-docs.test.ts`, `tests/kiwoom-auth.test.ts`, `tests/kiwoom-manual-quote-test.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Open source MCP server for reliable Korean stock, ETF, index, and market data access from AI agents, starting with Kiwoo. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, LICENSE, modelcontextprotocol이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
