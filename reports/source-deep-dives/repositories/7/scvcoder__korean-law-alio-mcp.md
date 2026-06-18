# scvcoder/korean-law-alio-mcp Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

(개요) 국가법령정보센터와 알리오의 공공기관 내부규정을 검색·비교·분석하는 MCP. (도구) 법제처 87 + ALIO 공공기관 규정 23 = 110개 MCP 도구. (데이터) 1,600 법률, 10,000 행정규칙, 수만건 판례, 344개 공공기관 35,000 내부규정.

## 요약

- 조사 단위: `sources/scvcoder__korean-law-alio-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 150 files, 14 directories, depth score 117, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=test/index.mjs, src/index.ts, src/tools/knowledge-base.ts이고, 의존성 단서는 modelcontextprotocol, express, commander, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | scvcoder/korean-law-alio-mcp |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | TypeScript |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/scvcoder__korean-law-alio-mcp](../../../../sources/scvcoder__korean-law-alio-mcp) |
| Existing report | [reports/korea-trending/repositories/scvcoder__korean-law-alio-mcp.md](../../../korea-trending/repositories/scvcoder__korean-law-alio-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 150 / 14 |
| Max observed depth | 4 |
| Top directories | .claude-plugin, .github, docs, src, test |
| Top extensions | .ts: 110, .md: 14, .mjs: 8, .json: 5, (none): 5, .cjs: 3, .png: 2, .example: 1, .toml: 1, .yml: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 48 |
| docs | documentation surface | 5 |
| .github | ci surface | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | tsc |
| serve-dev | package.json | watch | tsc --watch |
| serve-dev | package.json | start | node build/index.js |
| serve-dev | package.json | start:sse | node build/index.js --mode sse --port 3000 |
| build | package.json | cli | node build/cli.js |
| build | package.json | alio:sync | node build/scripts/alio-sync.js |
| test | package.json | test | npm run build && node test/index.mjs |
| test | package.json | test:build | node test/build.test.mjs |
| test | package.json | test:router | node test/router.test.mjs |
| test | package.json | test:cli | node test/cli.test.mjs |
| test | package.json | test:alio | node test/alio.test.mjs |
| test | package.json | test:law | node test/law.test.mjs |
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
| retrieval | [test/index.mjs](../../../../sources/scvcoder__korean-law-alio-mcp/test/index.mjs) | retrieval signal |
| retrieval | [src/index.ts](../../../../sources/scvcoder__korean-law-alio-mcp/src/index.ts) | retrieval signal |
| retrieval | [src/tools/knowledge-base.ts](../../../../sources/scvcoder__korean-law-alio-mcp/src/tools/knowledge-base.ts) | retrieval signal |
| retrieval | [src/lib/alio/index-loader.ts](../../../../sources/scvcoder__korean-law-alio-mcp/src/lib/alio/index-loader.ts) | retrieval signal |
| entrypoints | [src/cli.ts](../../../../sources/scvcoder__korean-law-alio-mcp/src/cli.ts) | entrypoints signal |
| docs | [README-EN-UPSTREAM.md](../../../../sources/scvcoder__korean-law-alio-mcp/README-EN-UPSTREAM.md) | docs signal |
| docs | [README-EN.md](../../../../sources/scvcoder__korean-law-alio-mcp/README-EN.md) | docs signal |
| docs | [README-UPSTREAM.md](../../../../sources/scvcoder__korean-law-alio-mcp/README-UPSTREAM.md) | docs signal |
| docs | [README.md](../../../../sources/scvcoder__korean-law-alio-mcp/README.md) | docs signal |
| eval | [TEST-REPORT.md](../../../../sources/scvcoder__korean-law-alio-mcp/TEST-REPORT.md) | eval signal |
| eval | [test/alio.test.mjs](../../../../sources/scvcoder__korean-law-alio-mcp/test/alio.test.mjs) | eval signal |
| eval | [test/build.test.mjs](../../../../sources/scvcoder__korean-law-alio-mcp/test/build.test.mjs) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [src/cli.ts](../../../../sources/scvcoder__korean-law-alio-mcp/src/cli.ts)<br>[src/index.ts](../../../../sources/scvcoder__korean-law-alio-mcp/src/index.ts) |
| agentRuntime | 73 | [test/lib/runner.mjs](../../../../sources/scvcoder__korean-law-alio-mcp/test/lib/runner.mjs)<br>[src/tool-registry.ts](../../../../sources/scvcoder__korean-law-alio-mcp/src/tool-registry.ts)<br>[src/tools/admin-appeals.ts](../../../../sources/scvcoder__korean-law-alio-mcp/src/tools/admin-appeals.ts)<br>[src/tools/admin-rule.ts](../../../../sources/scvcoder__korean-law-alio-mcp/src/tools/admin-rule.ts)<br>[src/tools/advanced-search.ts](../../../../sources/scvcoder__korean-law-alio-mcp/src/tools/advanced-search.ts)<br>[src/tools/annex.ts](../../../../sources/scvcoder__korean-law-alio-mcp/src/tools/annex.ts)<br>[src/tools/article-compare.ts](../../../../sources/scvcoder__korean-law-alio-mcp/src/tools/article-compare.ts)<br>[src/tools/article-detail.ts](../../../../sources/scvcoder__korean-law-alio-mcp/src/tools/article-detail.ts) |
| mcp | 2 | [.mcp.json](../../../../sources/scvcoder__korean-law-alio-mcp/.mcp.json)<br>[src/tool-registry.ts](../../../../sources/scvcoder__korean-law-alio-mcp/src/tool-registry.ts) |
| retrieval | 4 | [test/index.mjs](../../../../sources/scvcoder__korean-law-alio-mcp/test/index.mjs)<br>[src/index.ts](../../../../sources/scvcoder__korean-law-alio-mcp/src/index.ts)<br>[src/tools/knowledge-base.ts](../../../../sources/scvcoder__korean-law-alio-mcp/src/tools/knowledge-base.ts)<br>[src/lib/alio/index-loader.ts](../../../../sources/scvcoder__korean-law-alio-mcp/src/lib/alio/index-loader.ts) |
| spec | 3 | [ROADMAP-UPSTREAM.md](../../../../sources/scvcoder__korean-law-alio-mcp/ROADMAP-UPSTREAM.md)<br>[ROADMAP.md](../../../../sources/scvcoder__korean-law-alio-mcp/ROADMAP.md)<br>[docs/ARCHITECTURE.md](../../../../sources/scvcoder__korean-law-alio-mcp/docs/ARCHITECTURE.md) |
| eval | 14 | [TEST-REPORT.md](../../../../sources/scvcoder__korean-law-alio-mcp/TEST-REPORT.md)<br>[test/alio.test.mjs](../../../../sources/scvcoder__korean-law-alio-mcp/test/alio.test.mjs)<br>[test/build.test.mjs](../../../../sources/scvcoder__korean-law-alio-mcp/test/build.test.mjs)<br>[test/cli.test.mjs](../../../../sources/scvcoder__korean-law-alio-mcp/test/cli.test.mjs)<br>[test/index.mjs](../../../../sources/scvcoder__korean-law-alio-mcp/test/index.mjs)<br>[test/law.test.mjs](../../../../sources/scvcoder__korean-law-alio-mcp/test/law.test.mjs)<br>[test/router.test.mjs](../../../../sources/scvcoder__korean-law-alio-mcp/test/router.test.mjs)<br>[test/test-admin-rule.cjs](../../../../sources/scvcoder__korean-law-alio-mcp/test/test-admin-rule.cjs) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/scvcoder__korean-law-alio-mcp/.github/workflows/ci.yml) |
| container | 1 | [Dockerfile](../../../../sources/scvcoder__korean-law-alio-mcp/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/scvcoder__korean-law-alio-mcp/CLAUDE.md) |
| docs | 7 | [README-EN-UPSTREAM.md](../../../../sources/scvcoder__korean-law-alio-mcp/README-EN-UPSTREAM.md)<br>[README-EN.md](../../../../sources/scvcoder__korean-law-alio-mcp/README-EN.md)<br>[README-UPSTREAM.md](../../../../sources/scvcoder__korean-law-alio-mcp/README-UPSTREAM.md)<br>[README.md](../../../../sources/scvcoder__korean-law-alio-mcp/README.md)<br>[docs/API.md](../../../../sources/scvcoder__korean-law-alio-mcp/docs/API.md)<br>[docs/ARCHITECTURE.md](../../../../sources/scvcoder__korean-law-alio-mcp/docs/ARCHITECTURE.md)<br>[docs/DEVELOPMENT.md](../../../../sources/scvcoder__korean-law-alio-mcp/docs/DEVELOPMENT.md) |
| config | 2 | [package.json](../../../../sources/scvcoder__korean-law-alio-mcp/package.json)<br>[tsconfig.json](../../../../sources/scvcoder__korean-law-alio-mcp/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 14 | [TEST-REPORT.md](../../../../sources/scvcoder__korean-law-alio-mcp/TEST-REPORT.md)<br>[test/alio.test.mjs](../../../../sources/scvcoder__korean-law-alio-mcp/test/alio.test.mjs)<br>[test/build.test.mjs](../../../../sources/scvcoder__korean-law-alio-mcp/test/build.test.mjs)<br>[test/cli.test.mjs](../../../../sources/scvcoder__korean-law-alio-mcp/test/cli.test.mjs)<br>[test/index.mjs](../../../../sources/scvcoder__korean-law-alio-mcp/test/index.mjs)<br>[test/law.test.mjs](../../../../sources/scvcoder__korean-law-alio-mcp/test/law.test.mjs) |
| CI workflows | 1 | [.github/workflows/ci.yml](../../../../sources/scvcoder__korean-law-alio-mcp/.github/workflows/ci.yml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/scvcoder__korean-law-alio-mcp/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/scvcoder__korean-law-alio-mcp/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `test/index.mjs`, `src/index.ts`, `src/tools/knowledge-base.ts`.
2. Trace execution through entrypoints: `src/cli.ts`, `src/index.ts`.
3. Map agent/tool runtime through: `test/lib/runner.mjs`, `src/tool-registry.ts`, `src/tools/admin-appeals.ts`.
4. Inspect retrieval/memory/indexing through: `test/index.mjs`, `src/index.ts`, `src/tools/knowledge-base.ts`.
5. Verify behavior through test/eval files: `TEST-REPORT.md`, `test/alio.test.mjs`, `test/build.test.mjs`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 개요 국가법령정보센터와 알리오의 공공기관 내부규정을 검색·비교·분석하는 MCP. 도구 법제처 87 + ALIO 공공기관 규정 23 = 110개 MCP 도구. 데이터 1,600 법률, 10,000 행정규칙, 수만건 판. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, README.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
