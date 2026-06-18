# doorman11991/smallcode Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 290 files, 55 directories.

## 요약

- 조사 단위: `sources/Doorman11991__smallcode` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 290 files, 55 directories, depth score 122, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp.json, src/tools/mcp_client.js, marrow/src/tools/mcp_client.ms이고, 의존성 단서는 express, playwright, puppeteer, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | doorman11991/smallcode |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/Doorman11991__smallcode](../../../../sources/Doorman11991__smallcode) |
| Existing report | [reports/clone-structures/doorman11991__smallcode.md](../../../clone-structures/doorman11991__smallcode.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 290 / 55 |
| Max observed depth | 5 |
| Top directories | .github, .smallcode, bench, bin, docs, extensions, knowledge, marrow, profiles, scripts, skills, src, test, tmpsmallcode-artifactslinux |
| Top extensions | .js: 146, .ms: 67, .ts: 26, .md: 21, .json: 8, .marrow: 7, (none): 5, .toml: 4, .example: 1, .gz: 1, .ps1: 1, .py: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 40 |
| docs | documentation surface | 3 |
| .github | ci surface | 1 |
| bench | validation surface | 1 |
| bin | top-level component | 1 |
| extensions | top-level component | 1 |
| knowledge | top-level component | 1 |
| marrow | top-level component | 1 |
| profiles | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| test | validation surface | 1 |
| tmpsmallcode-artifactslinux | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | node build.js |
| serve-dev | package.json | start | node bin/smallcode.js |
| serve-dev | package.json | dev | node bin/smallcode.js |
| utility | package.json | eval | node bin/smallcode.js --eval classify_accuracy |
| utility | package.json | mcp | node bin/smallcode.js --mcp |
| utility | package.json | bench | node bench/harness.js --suite smoke |
| utility | package.json | bench:smoke | node bench/harness.js --suite smoke |
| utility | package.json | bench:polyglot | node bench/harness.js --suite polyglot-mini |
| utility | package.json | bench:tools | node bench/harness.js --suite tool-use |
| utility | package.json | bench:list | node bench/harness.js --list |
| utility | package.json | bench:diff | node bench/diff.js |
| test | package.json | test | node --test test/*.test.js |
| test | package.json | test:e2e | node test/e2e_smoke.js |
| test | package.json | test:e2e:offline | node test/e2e_offline.js |
| utility | package.json | rag:index | node bin/rag-index.js |
| entrypoint | package.json bin | smallcode.js | bin/smallcode.js |
| entrypoint | package.json bin | smallcode.js | bin/smallcode.js |
| entrypoint | package.json bin | init.js | bin/init.js |
| entrypoint | package.json bin | rag-index.js | bin/rag-index.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | express |
| developerSurface | none |
| observability | none |
| browserAutomation | playwright, puppeteer |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [mcp.json](../../../../sources/Doorman11991__smallcode/mcp.json) | mcp signal |
| mcp | [src/tools/mcp_client.js](../../../../sources/Doorman11991__smallcode/src/tools/mcp_client.js) | mcp signal |
| mcp | [marrow/src/tools/mcp_client.ms](../../../../sources/Doorman11991__smallcode/marrow/src/tools/mcp_client.ms) | mcp signal |
| mcp | [marrow/src/core/mcp_server.ms](../../../../sources/Doorman11991__smallcode/marrow/src/core/mcp_server.ms) | mcp signal |
| agentRuntime | [test/skills.test.js](../../../../sources/Doorman11991__smallcode/test/skills.test.js) | agentRuntime signal |
| agentRuntime | [src/tools/dedup.js](../../../../sources/Doorman11991__smallcode/src/tools/dedup.js) | agentRuntime signal |
| agentRuntime | [src/tools/file_tree.js](../../../../sources/Doorman11991__smallcode/src/tools/file_tree.js) | agentRuntime signal |
| agentRuntime | [src/tools/hybrid_search.js](../../../../sources/Doorman11991__smallcode/src/tools/hybrid_search.js) | agentRuntime signal |
| entrypoints | [bin/bonescript_guide.js](../../../../sources/Doorman11991__smallcode/bin/bonescript_guide.js) | entrypoints signal |
| entrypoints | [bin/cognition_adapter.js](../../../../sources/Doorman11991__smallcode/bin/cognition_adapter.js) | entrypoints signal |
| entrypoints | [bin/commands.js](../../../../sources/Doorman11991__smallcode/bin/commands.js) | entrypoints signal |
| entrypoints | [bin/config.js](../../../../sources/Doorman11991__smallcode/bin/config.js) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 24 | [bin/bonescript_guide.js](../../../../sources/Doorman11991__smallcode/bin/bonescript_guide.js)<br>[bin/cognition_adapter.js](../../../../sources/Doorman11991__smallcode/bin/cognition_adapter.js)<br>[bin/commands.js](../../../../sources/Doorman11991__smallcode/bin/commands.js)<br>[bin/config.js](../../../../sources/Doorman11991__smallcode/bin/config.js)<br>[bin/escalation.js](../../../../sources/Doorman11991__smallcode/bin/escalation.js)<br>[bin/eval_runner.js](../../../../sources/Doorman11991__smallcode/bin/eval_runner.js)<br>[bin/executor.js](../../../../sources/Doorman11991__smallcode/bin/executor.js)<br>[bin/features_adapter.js](../../../../sources/Doorman11991__smallcode/bin/features_adapter.js) |
| agentRuntime | 63 | [test/skills.test.js](../../../../sources/Doorman11991__smallcode/test/skills.test.js)<br>[src/tools/dedup.js](../../../../sources/Doorman11991__smallcode/src/tools/dedup.js)<br>[src/tools/file_tree.js](../../../../sources/Doorman11991__smallcode/src/tools/file_tree.js)<br>[src/tools/hybrid_search.js](../../../../sources/Doorman11991__smallcode/src/tools/hybrid_search.js)<br>[src/tools/liquid_tool_parser.js](../../../../sources/Doorman11991__smallcode/src/tools/liquid_tool_parser.js)<br>[src/tools/mcp_client.js](../../../../sources/Doorman11991__smallcode/src/tools/mcp_client.js)<br>[src/tools/read_tracker.js](../../../../sources/Doorman11991__smallcode/src/tools/read_tracker.js)<br>[src/tools/run_tests.js](../../../../sources/Doorman11991__smallcode/src/tools/run_tests.js) |
| mcp | 5 | [mcp.json](../../../../sources/Doorman11991__smallcode/mcp.json)<br>[src/tools/mcp_client.js](../../../../sources/Doorman11991__smallcode/src/tools/mcp_client.js)<br>[marrow/src/tools/mcp_client.ms](../../../../sources/Doorman11991__smallcode/marrow/src/tools/mcp_client.ms)<br>[marrow/src/core/mcp_server.ms](../../../../sources/Doorman11991__smallcode/marrow/src/core/mcp_server.ms)<br>[bin/mcp_bridge.js](../../../../sources/Doorman11991__smallcode/bin/mcp_bridge.js) |
| retrieval | 25 | [test/rag.test.js](../../../../sources/Doorman11991__smallcode/test/rag.test.js)<br>[src/session/dependency_graph.js](../../../../sources/Doorman11991__smallcode/src/session/dependency_graph.js)<br>[src/rag/curated_repos.json](../../../../sources/Doorman11991__smallcode/src/rag/curated_repos.json)<br>[src/rag/index_store.js](../../../../sources/Doorman11991__smallcode/src/rag/index_store.js)<br>[src/rag/retriever.js](../../../../sources/Doorman11991__smallcode/src/rag/retriever.js)<br>[src/memory/evidence.js](../../../../sources/Doorman11991__smallcode/src/memory/evidence.js)<br>[src/knowledge/loader.js](../../../../sources/Doorman11991__smallcode/src/knowledge/loader.js)<br>[src/compiled/providers/index.js](../../../../sources/Doorman11991__smallcode/src/compiled/providers/index.js) |
| spec | 1 | [ARCHITECTURE.md](../../../../sources/Doorman11991__smallcode/ARCHITECTURE.md) |
| eval | 39 | [test/bench_diff.test.js](../../../../sources/Doorman11991__smallcode/test/bench_diff.test.js)<br>[test/config_normalize.test.js](../../../../sources/Doorman11991__smallcode/test/config_normalize.test.js)<br>[test/contract.test.js](../../../../sources/Doorman11991__smallcode/test/contract.test.js)<br>[test/dedup_idempotent.test.js](../../../../sources/Doorman11991__smallcode/test/dedup_idempotent.test.js)<br>[test/e2e_offline.js](../../../../sources/Doorman11991__smallcode/test/e2e_offline.js)<br>[test/e2e_smoke.js](../../../../sources/Doorman11991__smallcode/test/e2e_smoke.js)<br>[test/hybrid_search.test.js](../../../../sources/Doorman11991__smallcode/test/hybrid_search.test.js)<br>[test/liquid_tool_parser.test.js](../../../../sources/Doorman11991__smallcode/test/liquid_tool_parser.test.js) |
| security | 12 | [SECURITY.md](../../../../sources/Doorman11991__smallcode/SECURITY.md)<br>[test/read_guard.test.js](../../../../sources/Doorman11991__smallcode/test/read_guard.test.js)<br>[test/ssrf_guard.test.js](../../../../sources/Doorman11991__smallcode/test/ssrf_guard.test.js)<br>[src/session/contract_guard.js](../../../../sources/Doorman11991__smallcode/src/session/contract_guard.js)<br>[src/session/read_guard.js](../../../../sources/Doorman11991__smallcode/src/session/read_guard.js)<br>[src/security/sanitize.js](../../../../sources/Doorman11991__smallcode/src/security/sanitize.js)<br>[src/compiled/providers/ssrf_guard.js](../../../../sources/Doorman11991__smallcode/src/compiled/providers/ssrf_guard.js)<br>[src/compiled/providers/ssrf_guard.ts](../../../../sources/Doorman11991__smallcode/src/compiled/providers/ssrf_guard.ts) |
| ci | 1 | [.github/workflows/build.yml](../../../../sources/Doorman11991__smallcode/.github/workflows/build.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 6 | [README_zh-CN.md](../../../../sources/Doorman11991__smallcode/README_zh-CN.md)<br>[README.md](../../../../sources/Doorman11991__smallcode/README.md)<br>[skills/README.md](../../../../sources/Doorman11991__smallcode/skills/README.md)<br>[knowledge/README.md](../../../../sources/Doorman11991__smallcode/knowledge/README.md)<br>[docs/rag-harness.md](../../../../sources/Doorman11991__smallcode/docs/rag-harness.md)<br>[bench/README.md](../../../../sources/Doorman11991__smallcode/bench/README.md) |
| config | 2 | [package.json](../../../../sources/Doorman11991__smallcode/package.json)<br>[src/compiled/tsconfig.json](../../../../sources/Doorman11991__smallcode/src/compiled/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 39 | [test/bench_diff.test.js](../../../../sources/Doorman11991__smallcode/test/bench_diff.test.js)<br>[test/config_normalize.test.js](../../../../sources/Doorman11991__smallcode/test/config_normalize.test.js)<br>[test/contract.test.js](../../../../sources/Doorman11991__smallcode/test/contract.test.js)<br>[test/dedup_idempotent.test.js](../../../../sources/Doorman11991__smallcode/test/dedup_idempotent.test.js)<br>[test/e2e_offline.js](../../../../sources/Doorman11991__smallcode/test/e2e_offline.js)<br>[test/e2e_smoke.js](../../../../sources/Doorman11991__smallcode/test/e2e_smoke.js) |
| CI workflows | 1 | [.github/workflows/build.yml](../../../../sources/Doorman11991__smallcode/.github/workflows/build.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 12 | [SECURITY.md](../../../../sources/Doorman11991__smallcode/SECURITY.md)<br>[test/read_guard.test.js](../../../../sources/Doorman11991__smallcode/test/read_guard.test.js)<br>[test/ssrf_guard.test.js](../../../../sources/Doorman11991__smallcode/test/ssrf_guard.test.js)<br>[src/session/contract_guard.js](../../../../sources/Doorman11991__smallcode/src/session/contract_guard.js)<br>[src/session/read_guard.js](../../../../sources/Doorman11991__smallcode/src/session/read_guard.js)<br>[src/security/sanitize.js](../../../../sources/Doorman11991__smallcode/src/security/sanitize.js) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `mcp.json`, `src/tools/mcp_client.js`, `marrow/src/tools/mcp_client.ms`.
2. Trace execution through entrypoints: `bin/bonescript_guide.js`, `bin/cognition_adapter.js`, `bin/commands.js`.
3. Map agent/tool runtime through: `test/skills.test.js`, `src/tools/dedup.js`, `src/tools/file_tree.js`.
4. Inspect retrieval/memory/indexing through: `test/rag.test.js`, `src/session/dependency_graph.js`, `src/rag/curated_repos.json`.
5. Verify behavior through test/eval files: `test/bench_diff.test.js`, `test/config_normalize.test.js`, `test/contract.test.js`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 290 files, 55 directories.. 핵심 구조 신호는 package.json, README.md, LICENSE, tests, ci, docs이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
