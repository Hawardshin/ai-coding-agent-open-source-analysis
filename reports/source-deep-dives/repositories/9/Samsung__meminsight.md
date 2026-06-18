# Samsung/meminsight 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Platform-Independent Memory Profiling Tool for Web Applications

## 요약

- 조사 단위: `sources/Samsung__meminsight` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 470 files, 69 directories, depth score 90, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=test/testdata/html/htmlTest9/index.html, test/testdata/html/htmlTest8/index.html, test/testdata/html/htmlTest7/index.html이고, 의존성 단서는 express, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | Samsung/meminsight |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | JavaScript |
| Stars | 82 |
| Forks | 13 |
| License | Apache-2.0 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Samsung__meminsight](../../../../sources/Samsung__meminsight) |
| 기존 보고서 | [reports/korea-trending/repositories/Samsung__meminsight.md](../../../korea-trending/repositories/Samsung__meminsight.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 470 / 69 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | bin, doc, drivers, lib, lifetime-analysis, scripts, test, thirdparty, vanillajs |
| 상위 확장자 | .expected: 198, .js: 96, .ts: 53, .java: 42, .html: 24, .png: 16, .css: 11, (none): 6, .py: 3, .txt: 3, .gif: 2, .gradle: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| test | package.json | test | (cat test/testSuite.txt \| sed 's/^/test\//' \| xargs ./node_modules/.bin/mocha --reporter spec --harmony) && cd lifetime-analysis && ./gradlew cleanTest test && cd .. |
| build | package.json | build | grunt typescript |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | express |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [lib/server/server.ts](../../../../sources/Samsung__meminsight/lib/server/server.ts)<br>[bin/meminsight](../../../../sources/Samsung__meminsight/bin/meminsight) |
| agentRuntime | 6 | [lifetime-analysis/src/main/java/com/samsung/memoryanalysis/context/Context.java](../../../../sources/Samsung__meminsight/lifetime-analysis/src/main/java/com/samsung/memoryanalysis/context/Context.java)<br>[lifetime-analysis/src/main/java/com/samsung/memoryanalysis/context/ContextAwareAnalysis.java](../../../../sources/Samsung__meminsight/lifetime-analysis/src/main/java/com/samsung/memoryanalysis/context/ContextAwareAnalysis.java)<br>[lifetime-analysis/src/main/java/com/samsung/memoryanalysis/context/ContextListener.java](../../../../sources/Samsung__meminsight/lifetime-analysis/src/main/java/com/samsung/memoryanalysis/context/ContextListener.java)<br>[lifetime-analysis/src/main/java/com/samsung/memoryanalysis/context/ContextProvider.java](../../../../sources/Samsung__meminsight/lifetime-analysis/src/main/java/com/samsung/memoryanalysis/context/ContextProvider.java)<br>[lifetime-analysis/src/main/java/com/samsung/memoryanalysis/context/DummyContextAwareAnalysis.java](../../../../sources/Samsung__meminsight/lifetime-analysis/src/main/java/com/samsung/memoryanalysis/context/DummyContextAwareAnalysis.java)<br>[lifetime-analysis/src/main/java/com/samsung/memoryanalysis/context/Variable.java](../../../../sources/Samsung__meminsight/lifetime-analysis/src/main/java/com/samsung/memoryanalysis/context/Variable.java) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 20 | [test/testdata/html/htmlTest9/index.html](../../../../sources/Samsung__meminsight/test/testdata/html/htmlTest9/index.html)<br>[test/testdata/html/htmlTest8/index.html](../../../../sources/Samsung__meminsight/test/testdata/html/htmlTest8/index.html)<br>[test/testdata/html/htmlTest7/index.html](../../../../sources/Samsung__meminsight/test/testdata/html/htmlTest7/index.html)<br>[test/testdata/html/htmlTest6/index.html](../../../../sources/Samsung__meminsight/test/testdata/html/htmlTest6/index.html)<br>[test/testdata/html/htmlTest5/index.html](../../../../sources/Samsung__meminsight/test/testdata/html/htmlTest5/index.html)<br>[test/testdata/html/htmlTest4/index.html](../../../../sources/Samsung__meminsight/test/testdata/html/htmlTest4/index.html)<br>[test/testdata/html/htmlTest3/index.html](../../../../sources/Samsung__meminsight/test/testdata/html/htmlTest3/index.html)<br>[test/testdata/html/htmlTest2/index.html](../../../../sources/Samsung__meminsight/test/testdata/html/htmlTest2/index.html) |
| spec | 0 | 명확하지 않음 |
| eval | 308 | [test/htmlMemTraceTests.ts](../../../../sources/Samsung__meminsight/test/htmlMemTraceTests.ts)<br>[test/lifetimeAnalysisInvokeTests.ts](../../../../sources/Samsung__meminsight/test/lifetimeAnalysisInvokeTests.ts)<br>[test/memTraceTests.ts](../../../../sources/Samsung__meminsight/test/memTraceTests.ts)<br>[test/testSuite.txt](../../../../sources/Samsung__meminsight/test/testSuite.txt)<br>[test/testdata/testAllocSiteStats1.js](../../../../sources/Samsung__meminsight/test/testdata/testAllocSiteStats1.js)<br>[test/testdata/testAllocSiteStats2.js](../../../../sources/Samsung__meminsight/test/testdata/testAllocSiteStats2.js)<br>[test/testdata/testAllocSiteStats3.js](../../../../sources/Samsung__meminsight/test/testdata/testAllocSiteStats3.js)<br>[test/testdata/testMemTrace1.js](../../../../sources/Samsung__meminsight/test/testdata/testMemTrace1.js) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 6 | [README.md](../../../../sources/Samsung__meminsight/README.md)<br>[doc/manual.md](../../../../sources/Samsung__meminsight/doc/manual.md)<br>[doc/meminsight-extended.pdf](../../../../sources/Samsung__meminsight/doc/meminsight-extended.pdf)<br>[doc/screenshots/alloc-site-view.png](../../../../sources/Samsung__meminsight/doc/screenshots/alloc-site-view.png)<br>[doc/screenshots/table-view.png](../../../../sources/Samsung__meminsight/doc/screenshots/table-view.png)<br>[doc/screenshots/timeline.png](../../../../sources/Samsung__meminsight/doc/screenshots/timeline.png) |
| config | 1 | [package.json](../../../../sources/Samsung__meminsight/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 308 | [test/htmlMemTraceTests.ts](../../../../sources/Samsung__meminsight/test/htmlMemTraceTests.ts)<br>[test/lifetimeAnalysisInvokeTests.ts](../../../../sources/Samsung__meminsight/test/lifetimeAnalysisInvokeTests.ts)<br>[test/memTraceTests.ts](../../../../sources/Samsung__meminsight/test/memTraceTests.ts)<br>[test/testSuite.txt](../../../../sources/Samsung__meminsight/test/testSuite.txt)<br>[test/testdata/testAllocSiteStats1.js](../../../../sources/Samsung__meminsight/test/testdata/testAllocSiteStats1.js)<br>[test/testdata/testAllocSiteStats2.js](../../../../sources/Samsung__meminsight/test/testdata/testAllocSiteStats2.js) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `test/testdata/html/htmlTest9/index.html`, `test/testdata/html/htmlTest8/index.html`, `test/testdata/html/htmlTest7/index.html`.
2. entrypoint를 따라 실행 흐름 확인: `lib/server/server.ts`, `bin/meminsight`.
3. agent/tool runtime 매핑: `lifetime-analysis/src/main/java/com/samsung/memoryanalysis/context/Context.java`, `lifetime-analysis/src/main/java/com/samsung/memoryanalysis/context/ContextAwareAnalysis.java`, `lifetime-analysis/src/main/java/com/samsung/memoryanalysis/context/ContextListener.java`.
4. retrieval/memory/indexing 확인: `test/testdata/html/htmlTest9/index.html`, `test/testdata/html/htmlTest8/index.html`, `test/testdata/html/htmlTest7/index.html`.
5. test/eval 파일로 동작 검증: `test/htmlMemTraceTests.ts`, `test/lifetimeAnalysisInvokeTests.ts`, `test/memTraceTests.ts`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Platform Independent Memory Profiling Tool for Web Applications. 핵심 구조 신호는 JavaScript, package.json, README.md, tests, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
