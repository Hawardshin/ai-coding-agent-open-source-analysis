# Samsung/meminsight Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Platform-Independent Memory Profiling Tool for Web Applications

## 요약

- 조사 단위: `sources/Samsung__meminsight` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 470 files, 69 directories, depth score 96, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=test/testdata/html/htmlTest9/index.html, test/testdata/html/htmlTest8/index.html, test/testdata/html/htmlTest7/index.html이고, 의존성 단서는 express, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Samsung/meminsight |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | JavaScript |
| Stars | 82 |
| Forks | 13 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/Samsung__meminsight](../../../../sources/Samsung__meminsight) |
| Existing report | [reports/korea-trending/repositories/Samsung__meminsight.md](../../../korea-trending/repositories/Samsung__meminsight.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 470 / 69 |
| Max observed depth | 10 |
| Top directories | bin, doc, drivers, lib, lifetime-analysis, scripts, test, thirdparty, vanillajs |
| Top extensions | .expected: 198, .js: 96, .ts: 53, .java: 42, .html: 24, .png: 16, .css: 11, (none): 6, .py: 3, .txt: 3, .gif: 2, .gradle: 2 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| lib | source boundary | 3 |
| bin | top-level component | 1 |
| doc | documentation surface | 1 |
| drivers | top-level component | 1 |
| lifetime-analysis | top-level component | 1 |
| scripts | top-level component | 1 |
| test | validation surface | 1 |
| thirdparty | top-level component | 1 |
| vanillajs | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| test | package.json | test | (cat test/testSuite.txt \| sed 's/^/test\//' \| xargs ./node_modules/.bin/mocha --reporter spec --harmony) && cd lifetime-analysis && ./gradlew cleanTest test && cd .. |
| build | package.json | build | grunt typescript |


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
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [test/testdata/html/htmlTest9/index.html](../../../../sources/Samsung__meminsight/test/testdata/html/htmlTest9/index.html) | retrieval signal |
| retrieval | [test/testdata/html/htmlTest8/index.html](../../../../sources/Samsung__meminsight/test/testdata/html/htmlTest8/index.html) | retrieval signal |
| retrieval | [test/testdata/html/htmlTest7/index.html](../../../../sources/Samsung__meminsight/test/testdata/html/htmlTest7/index.html) | retrieval signal |
| retrieval | [test/testdata/html/htmlTest6/index.html](../../../../sources/Samsung__meminsight/test/testdata/html/htmlTest6/index.html) | retrieval signal |
| entrypoints | [lib/server/server.ts](../../../../sources/Samsung__meminsight/lib/server/server.ts) | entrypoints signal |
| entrypoints | [bin/meminsight](../../../../sources/Samsung__meminsight/bin/meminsight) | entrypoints signal |
| docs | [README.md](../../../../sources/Samsung__meminsight/README.md) | docs signal |
| docs | [doc/manual.md](../../../../sources/Samsung__meminsight/doc/manual.md) | docs signal |
| docs | [doc/meminsight-extended.pdf](../../../../sources/Samsung__meminsight/doc/meminsight-extended.pdf) | docs signal |
| docs | [doc/screenshots/alloc-site-view.png](../../../../sources/Samsung__meminsight/doc/screenshots/alloc-site-view.png) | docs signal |
| eval | [test/htmlMemTraceTests.ts](../../../../sources/Samsung__meminsight/test/htmlMemTraceTests.ts) | eval signal |
| eval | [test/lifetimeAnalysisInvokeTests.ts](../../../../sources/Samsung__meminsight/test/lifetimeAnalysisInvokeTests.ts) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [lib/server/server.ts](../../../../sources/Samsung__meminsight/lib/server/server.ts)<br>[bin/meminsight](../../../../sources/Samsung__meminsight/bin/meminsight) |
| agentRuntime | 6 | [lifetime-analysis/src/main/java/com/samsung/memoryanalysis/context/Context.java](../../../../sources/Samsung__meminsight/lifetime-analysis/src/main/java/com/samsung/memoryanalysis/context/Context.java)<br>[lifetime-analysis/src/main/java/com/samsung/memoryanalysis/context/ContextAwareAnalysis.java](../../../../sources/Samsung__meminsight/lifetime-analysis/src/main/java/com/samsung/memoryanalysis/context/ContextAwareAnalysis.java)<br>[lifetime-analysis/src/main/java/com/samsung/memoryanalysis/context/ContextListener.java](../../../../sources/Samsung__meminsight/lifetime-analysis/src/main/java/com/samsung/memoryanalysis/context/ContextListener.java)<br>[lifetime-analysis/src/main/java/com/samsung/memoryanalysis/context/ContextProvider.java](../../../../sources/Samsung__meminsight/lifetime-analysis/src/main/java/com/samsung/memoryanalysis/context/ContextProvider.java)<br>[lifetime-analysis/src/main/java/com/samsung/memoryanalysis/context/DummyContextAwareAnalysis.java](../../../../sources/Samsung__meminsight/lifetime-analysis/src/main/java/com/samsung/memoryanalysis/context/DummyContextAwareAnalysis.java)<br>[lifetime-analysis/src/main/java/com/samsung/memoryanalysis/context/Variable.java](../../../../sources/Samsung__meminsight/lifetime-analysis/src/main/java/com/samsung/memoryanalysis/context/Variable.java) |
| mcp | 0 | not obvious |
| retrieval | 20 | [test/testdata/html/htmlTest9/index.html](../../../../sources/Samsung__meminsight/test/testdata/html/htmlTest9/index.html)<br>[test/testdata/html/htmlTest8/index.html](../../../../sources/Samsung__meminsight/test/testdata/html/htmlTest8/index.html)<br>[test/testdata/html/htmlTest7/index.html](../../../../sources/Samsung__meminsight/test/testdata/html/htmlTest7/index.html)<br>[test/testdata/html/htmlTest6/index.html](../../../../sources/Samsung__meminsight/test/testdata/html/htmlTest6/index.html)<br>[test/testdata/html/htmlTest5/index.html](../../../../sources/Samsung__meminsight/test/testdata/html/htmlTest5/index.html)<br>[test/testdata/html/htmlTest4/index.html](../../../../sources/Samsung__meminsight/test/testdata/html/htmlTest4/index.html)<br>[test/testdata/html/htmlTest3/index.html](../../../../sources/Samsung__meminsight/test/testdata/html/htmlTest3/index.html)<br>[test/testdata/html/htmlTest2/index.html](../../../../sources/Samsung__meminsight/test/testdata/html/htmlTest2/index.html) |
| spec | 0 | not obvious |
| eval | 308 | [test/htmlMemTraceTests.ts](../../../../sources/Samsung__meminsight/test/htmlMemTraceTests.ts)<br>[test/lifetimeAnalysisInvokeTests.ts](../../../../sources/Samsung__meminsight/test/lifetimeAnalysisInvokeTests.ts)<br>[test/memTraceTests.ts](../../../../sources/Samsung__meminsight/test/memTraceTests.ts)<br>[test/testSuite.txt](../../../../sources/Samsung__meminsight/test/testSuite.txt)<br>[test/testdata/testAllocSiteStats1.js](../../../../sources/Samsung__meminsight/test/testdata/testAllocSiteStats1.js)<br>[test/testdata/testAllocSiteStats2.js](../../../../sources/Samsung__meminsight/test/testdata/testAllocSiteStats2.js)<br>[test/testdata/testAllocSiteStats3.js](../../../../sources/Samsung__meminsight/test/testdata/testAllocSiteStats3.js)<br>[test/testdata/testMemTrace1.js](../../../../sources/Samsung__meminsight/test/testdata/testMemTrace1.js) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 6 | [README.md](../../../../sources/Samsung__meminsight/README.md)<br>[doc/manual.md](../../../../sources/Samsung__meminsight/doc/manual.md)<br>[doc/meminsight-extended.pdf](../../../../sources/Samsung__meminsight/doc/meminsight-extended.pdf)<br>[doc/screenshots/alloc-site-view.png](../../../../sources/Samsung__meminsight/doc/screenshots/alloc-site-view.png)<br>[doc/screenshots/table-view.png](../../../../sources/Samsung__meminsight/doc/screenshots/table-view.png)<br>[doc/screenshots/timeline.png](../../../../sources/Samsung__meminsight/doc/screenshots/timeline.png) |
| config | 1 | [package.json](../../../../sources/Samsung__meminsight/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 308 | [test/htmlMemTraceTests.ts](../../../../sources/Samsung__meminsight/test/htmlMemTraceTests.ts)<br>[test/lifetimeAnalysisInvokeTests.ts](../../../../sources/Samsung__meminsight/test/lifetimeAnalysisInvokeTests.ts)<br>[test/memTraceTests.ts](../../../../sources/Samsung__meminsight/test/memTraceTests.ts)<br>[test/testSuite.txt](../../../../sources/Samsung__meminsight/test/testSuite.txt)<br>[test/testdata/testAllocSiteStats1.js](../../../../sources/Samsung__meminsight/test/testdata/testAllocSiteStats1.js)<br>[test/testdata/testAllocSiteStats2.js](../../../../sources/Samsung__meminsight/test/testdata/testAllocSiteStats2.js) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `test/testdata/html/htmlTest9/index.html`, `test/testdata/html/htmlTest8/index.html`, `test/testdata/html/htmlTest7/index.html`.
2. Trace execution through entrypoints: `lib/server/server.ts`, `bin/meminsight`.
3. Map agent/tool runtime through: `lifetime-analysis/src/main/java/com/samsung/memoryanalysis/context/Context.java`, `lifetime-analysis/src/main/java/com/samsung/memoryanalysis/context/ContextAwareAnalysis.java`, `lifetime-analysis/src/main/java/com/samsung/memoryanalysis/context/ContextListener.java`.
4. Inspect retrieval/memory/indexing through: `test/testdata/html/htmlTest9/index.html`, `test/testdata/html/htmlTest8/index.html`, `test/testdata/html/htmlTest7/index.html`.
5. Verify behavior through test/eval files: `test/htmlMemTraceTests.ts`, `test/lifetimeAnalysisInvokeTests.ts`, `test/memTraceTests.ts`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Platform Independent Memory Profiling Tool for Web Applications. 핵심 구조 신호는 JavaScript, package.json, README.md, tests, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 ci signal not obvious, needs deeper structural scan입니다.
