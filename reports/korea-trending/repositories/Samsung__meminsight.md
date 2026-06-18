# Samsung/meminsight

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/meminsight |
| local path | sources/Samsung__meminsight |
| HEAD | 74061aa |
| stars/forks | 82 / 13 |
| language | JavaScript |
| license | Apache-2.0 |
| pushedAt | 2023-04-07T10:38:42Z |
| trendScore / priorityScore | 69 / 218 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 328 | README.md, lifetime-analysis/build.gradle, package.json |
| Security / compliance | 113 | drivers/benchmarkDriver.ts, lifetime-analysis/src/main/java/com/samsung/memoryanalysis/allocstats/AllocationSiteStats.java, lifetime-analysis/src/test/java/com/samsung/memoryanalysis/AbstractTester.java |
| LLM wiki / memory / graph | 48 | README.md, package.json, doc/manual.md |
| Frontend / developer experience | 14 | README.md, package.json, doc/manual.md |
| RAG / retrieval | 8 | drivers/meminsight.ts |
| Spec / doc-driven workflow | 2 | package.json, doc/manual.md |
| Infra / observability | 1 | doc/manual.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | context-engineering, evalObservability, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, rag, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 439 |
| manifests | 3 |
| docs | 2 |
| tests | 308 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | Online Instrumentation / Offline Instrumentation / Issue Table View / All-Sites Timeline / Allocation Site View |
| excerpt | MemInsight ========== MemInsight is a memory profiler for web and node.js applications. Through code instrumentation, MemInsight collects a detailed trace of all the memory operations performed by an application during an execution. By processing this trace, MemInsight can automatically find interesting memory related issues like leaks or excessive, unnecessary allocation. For further details, see our technical report http //manu.sridharan.net/files/MemInsightTR.pdf . Prerequisites node.js http //nodejs.org v4.x other versions not supported Java http //www.oracle.com/technetwork/java/javase/downloads/jdk8 downloads 2133151.html version 7 or higher Gradle https //www.gradle.org/ We require th |


## 주요 파일

### Manifests

- README.md
- lifetime-analysis/build.gradle
- package.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| test | 185 |
| lifetime-analysis | 171 |
| lib | 65 |
| drivers | 6 |
| .gitignore | 1 |
| .travis.yml | 1 |
| bin | 1 |
| doc | 1 |
| Gruntfile.js | 1 |
| LICENSE.txt | 1 |
| npm-shrinkwrap.json | 1 |
| package.json | 1 |
| README.md | 1 |
| scripts | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .expected | 198 |
| .js | 90 |
| .ts | 53 |
| .java | 42 |
| .html | 24 |
| .css | 8 |
| [no-ext] | 6 |
| .py | 3 |
| .txt | 3 |
| .gradle | 2 |
| .json | 2 |
| .md | 2 |
| .bat | 1 |
| .jar | 1 |
| .properties | 1 |
| .psd | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
