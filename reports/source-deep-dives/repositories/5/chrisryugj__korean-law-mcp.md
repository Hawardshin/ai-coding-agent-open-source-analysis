# chrisryugj/korean-law-mcp Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

국가법령정보MCP v4.4 | 법제처 42개 API → 9개 MCP 도구. 법령·판례·조례·조약 + 다단계 리서치(legal_research) + 정밀분석(legal_analysis: 인용검증·판례생사·행위시법·영향그래프) | 42 Korean legal APIs → 9 MCP tools

## 요약

- 조사 단위: `sources/chrisryugj__korean-law-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 144 files, 13 directories, depth score 124, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=src/index.ts, src/tools/knowledge-base.ts, src/tools/scenarios/index.ts이고, 의존성 단서는 modelcontextprotocol, express, commander, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | chrisryugj/korean-law-mcp |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | TypeScript |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/chrisryugj__korean-law-mcp](../../../../sources/chrisryugj__korean-law-mcp) |
| Existing report | [reports/korea-trending/repositories/chrisryugj__korean-law-mcp.md](../../../korea-trending/repositories/chrisryugj__korean-law-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 144 / 13 |
| Max observed depth | 4 |
| Top directories | .claude, .claude-plugin, .github, docs, src, test |
| Top extensions | .ts: 100, .cjs: 17, .md: 13, .json: 5, (none): 4, .example: 1, .gif: 1, .toml: 1, .txt: 1, .yml: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 48 |
| docs | documentation surface | 8 |
| .github | ci surface | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | tsc |
| serve-dev | package.json | watch | tsc --watch |
| serve-dev | package.json | start | node build/index.js |
| build | package.json | cli | node build/cli.js |
| build | package.json | prepublishOnly | npm run build |
| entrypoint | package.json bin | index.js | build/index.js |
| entrypoint | package.json bin | cli.js | build/cli.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | express |
| developerSurface | commander |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [src/index.ts](../../../../sources/chrisryugj__korean-law-mcp/src/index.ts) | retrieval signal |
| retrieval | [src/tools/knowledge-base.ts](../../../../sources/chrisryugj__korean-law-mcp/src/tools/knowledge-base.ts) | retrieval signal |
| retrieval | [src/tools/scenarios/index.ts](../../../../sources/chrisryugj__korean-law-mcp/src/tools/scenarios/index.ts) | retrieval signal |
| retrieval | [docs/FTC-RAG-INTEGRATION.md](../../../../sources/chrisryugj__korean-law-mcp/docs/FTC-RAG-INTEGRATION.md) | retrieval signal |
| entrypoints | [src/cli.ts](../../../../sources/chrisryugj__korean-law-mcp/src/cli.ts) | entrypoints signal |
| docs | [README-EN.md](../../../../sources/chrisryugj__korean-law-mcp/README-EN.md) | docs signal |
| docs | [README.md](../../../../sources/chrisryugj__korean-law-mcp/README.md) | docs signal |
| docs | [docs/API.md](../../../../sources/chrisryugj__korean-law-mcp/docs/API.md) | docs signal |
| docs | [docs/ARCHITECTURE.md](../../../../sources/chrisryugj__korean-law-mcp/docs/ARCHITECTURE.md) | docs signal |
| eval | [test-results-final.txt](../../../../sources/chrisryugj__korean-law-mcp/test-results-final.txt) | eval signal |
| eval | [test/test-admin-rule.cjs](../../../../sources/chrisryugj__korean-law-mcp/test/test-admin-rule.cjs) | eval signal |
| eval | [test/test-all-tools.cjs](../../../../sources/chrisryugj__korean-law-mcp/test/test-all-tools.cjs) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [src/cli.ts](../../../../sources/chrisryugj__korean-law-mcp/src/cli.ts)<br>[src/index.ts](../../../../sources/chrisryugj__korean-law-mcp/src/index.ts) |
| agentRuntime | 71 | [src/tool-registry.ts](../../../../sources/chrisryugj__korean-law-mcp/src/tool-registry.ts)<br>[src/tools/admin-appeals.ts](../../../../sources/chrisryugj__korean-law-mcp/src/tools/admin-appeals.ts)<br>[src/tools/admin-rule.ts](../../../../sources/chrisryugj__korean-law-mcp/src/tools/admin-rule.ts)<br>[src/tools/advanced-search.ts](../../../../sources/chrisryugj__korean-law-mcp/src/tools/advanced-search.ts)<br>[src/tools/annex.ts](../../../../sources/chrisryugj__korean-law-mcp/src/tools/annex.ts)<br>[src/tools/applicable-law.ts](../../../../sources/chrisryugj__korean-law-mcp/src/tools/applicable-law.ts)<br>[src/tools/article-compare.ts](../../../../sources/chrisryugj__korean-law-mcp/src/tools/article-compare.ts)<br>[src/tools/article-detail.ts](../../../../sources/chrisryugj__korean-law-mcp/src/tools/article-detail.ts) |
| mcp | 1 | [src/tool-registry.ts](../../../../sources/chrisryugj__korean-law-mcp/src/tool-registry.ts) |
| retrieval | 4 | [src/index.ts](../../../../sources/chrisryugj__korean-law-mcp/src/index.ts)<br>[src/tools/knowledge-base.ts](../../../../sources/chrisryugj__korean-law-mcp/src/tools/knowledge-base.ts)<br>[src/tools/scenarios/index.ts](../../../../sources/chrisryugj__korean-law-mcp/src/tools/scenarios/index.ts)<br>[docs/FTC-RAG-INTEGRATION.md](../../../../sources/chrisryugj__korean-law-mcp/docs/FTC-RAG-INTEGRATION.md) |
| spec | 2 | [ROADMAP.md](../../../../sources/chrisryugj__korean-law-mcp/ROADMAP.md)<br>[docs/ARCHITECTURE.md](../../../../sources/chrisryugj__korean-law-mcp/docs/ARCHITECTURE.md) |
| eval | 18 | [test-results-final.txt](../../../../sources/chrisryugj__korean-law-mcp/test-results-final.txt)<br>[test/test-admin-rule.cjs](../../../../sources/chrisryugj__korean-law-mcp/test/test-admin-rule.cjs)<br>[test/test-all-tools.cjs](../../../../sources/chrisryugj__korean-law-mcp/test/test-all-tools.cjs)<br>[test/test-chain-full-research-precedent-retry.cjs](../../../../sources/chrisryugj__korean-law-mcp/test/test-chain-full-research-precedent-retry.cjs)<br>[test/test-chain-search-detail-integration.cjs](../../../../sources/chrisryugj__korean-law-mcp/test/test-chain-search-detail-integration.cjs)<br>[test/test-compact-query-planner.cjs](../../../../sources/chrisryugj__korean-law-mcp/test/test-compact-query-planner.cjs)<br>[test/test-empty-html-retry.cjs](../../../../sources/chrisryugj__korean-law-mcp/test/test-empty-html-retry.cjs)<br>[test/test-external-https-proxy.cjs](../../../../sources/chrisryugj__korean-law-mcp/test/test-external-https-proxy.cjs) |
| security | 1 | [src/tools/scenarios/compliance.ts](../../../../sources/chrisryugj__korean-law-mcp/src/tools/scenarios/compliance.ts) |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/chrisryugj__korean-law-mcp/.github/workflows/ci.yml) |
| container | 1 | [Dockerfile](../../../../sources/chrisryugj__korean-law-mcp/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/chrisryugj__korean-law-mcp/CLAUDE.md) |
| docs | 7 | [README-EN.md](../../../../sources/chrisryugj__korean-law-mcp/README-EN.md)<br>[README.md](../../../../sources/chrisryugj__korean-law-mcp/README.md)<br>[docs/API.md](../../../../sources/chrisryugj__korean-law-mcp/docs/API.md)<br>[docs/ARCHITECTURE.md](../../../../sources/chrisryugj__korean-law-mcp/docs/ARCHITECTURE.md)<br>[docs/DEVELOPMENT.md](../../../../sources/chrisryugj__korean-law-mcp/docs/DEVELOPMENT.md)<br>[docs/FTC-RAG-INTEGRATION.md](../../../../sources/chrisryugj__korean-law-mcp/docs/FTC-RAG-INTEGRATION.md)<br>[docs/PRECEDENT-SEARCH-GUIDELINES.md](../../../../sources/chrisryugj__korean-law-mcp/docs/PRECEDENT-SEARCH-GUIDELINES.md) |
| config | 2 | [package.json](../../../../sources/chrisryugj__korean-law-mcp/package.json)<br>[tsconfig.json](../../../../sources/chrisryugj__korean-law-mcp/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 18 | [test-results-final.txt](../../../../sources/chrisryugj__korean-law-mcp/test-results-final.txt)<br>[test/test-admin-rule.cjs](../../../../sources/chrisryugj__korean-law-mcp/test/test-admin-rule.cjs)<br>[test/test-all-tools.cjs](../../../../sources/chrisryugj__korean-law-mcp/test/test-all-tools.cjs)<br>[test/test-chain-full-research-precedent-retry.cjs](../../../../sources/chrisryugj__korean-law-mcp/test/test-chain-full-research-precedent-retry.cjs)<br>[test/test-chain-search-detail-integration.cjs](../../../../sources/chrisryugj__korean-law-mcp/test/test-chain-search-detail-integration.cjs)<br>[test/test-compact-query-planner.cjs](../../../../sources/chrisryugj__korean-law-mcp/test/test-compact-query-planner.cjs) |
| CI workflows | 1 | [.github/workflows/ci.yml](../../../../sources/chrisryugj__korean-law-mcp/.github/workflows/ci.yml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/chrisryugj__korean-law-mcp/Dockerfile) |
| Security / policy | 1 | [src/tools/scenarios/compliance.ts](../../../../sources/chrisryugj__korean-law-mcp/src/tools/scenarios/compliance.ts) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/chrisryugj__korean-law-mcp/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/index.ts`, `src/tools/knowledge-base.ts`, `src/tools/scenarios/index.ts`.
2. Trace execution through entrypoints: `src/cli.ts`, `src/index.ts`.
3. Map agent/tool runtime through: `src/tool-registry.ts`, `src/tools/admin-appeals.ts`, `src/tools/admin-rule.ts`.
4. Inspect retrieval/memory/indexing through: `src/index.ts`, `src/tools/knowledge-base.ts`, `src/tools/scenarios/index.ts`.
5. Verify behavior through test/eval files: `test-results-final.txt`, `test/test-admin-rule.cjs`, `test/test-all-tools.cjs`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 국가법령정보MCP v4.4 법제처 42개 API → 9개 MCP 도구. 법령·판례·조례·조약 + 다단계 리서치 legal research + 정밀분석 legal analysis 인용검증·판례생사·행위시법·영향그래프 . 핵심 구조 신호는 TypeScript, package.json, Dockerfile, README.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
