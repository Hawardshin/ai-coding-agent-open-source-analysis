# naver/nbase-arc

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/nbase-arc |
| local path | sources/naver__nbase-arc |
| HEAD | 5cc17be |
| stars/forks | 180 / 35 |
| language | C |
| license | Apache-2.0 |
| pushedAt | 2023-04-12T03:17:50Z |
| trendScore / priorityScore | 123 / 307 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Security / compliance | 73 | README.md, redis/deps/README.md, doc/state-machine-replicator.md |
| Korean language / Korea domain | 72 | README.md, api/java/pom.xml, doc/quick-start.md |
| LLM wiki / memory / graph | 44 | integration_test/README.md, README.md, redis/README.md |
| Infra / observability | 10 | doc/arc-cli.md, doc/configuration-master.md, doc/failure-detection-and-failover.md |
| Spec / doc-driven workflow | 3 | integration_test/README.md, confmaster/README.md, doc/quick-start.md |
| RAG / retrieval | 2 | redis/deps/lua/doc/luac.html |


## 분류와 스택

| key | value |
| --- | --- |
| categories | context-engineering, evalObservability, example-rich, graphMemory, infra-observability, korea-signal, llm-wiki-memory, rag, sdk-api, security-compliance, spec-driven |
| stacks | Python, Java/Kotlin, C/C++, Ruby |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 1385 |
| manifests | 39 |
| docs | 44 |
| tests | 415 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | Introduction / Features / Quick start / Documents / Discussions / Related Projects / License |
| excerpt | Introduction nbase arc n base ARC is an open source distributed memory store based on Redis. It provides a zone of clusters where each cluster is composed of synchronously replicated Redis server groups that can scale in/out without service interruption. ! Overview /doc/images/overview.png Features Multi cluster zone You can make multiple clusters within a single zone. Each cluster is distinguished by its name. Configuration master manages all cluster information safely. Configuration master also does failure detection and automatic fail over of the cluster components A Cluster is a single big Redis server Clients access Redis servers indirectly via gateways. A cluster acts like a single big |


## 주요 파일

### Manifests

- integration_test/README.md
- confmaster/README.md
- gateway/README.md
- README.md
- redis/README.md
- api/arcci/README.md
- api/java/README.md
- redis/deps/hiredis/README.md
- redis/deps/README.md
- integration_test/Makefile
- api/Makefile
- confmaster/Makefile
- confmaster/pom.xml
- gateway/Makefile
- Makefile
- redis/Makefile
- smr/Makefile
- smr/test/cs/Makefile
- smr/test/Makefile
- smr/test/unit/Makefile


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| redis | 580 |
| api | 317 |
| confmaster | 209 |
| smr | 92 |
| integration_test | 60 |
| gateway | 55 |
| tools | 47 |
| doc | 20 |
| .gitignore | 1 |
| LICENSE | 1 |
| Makefile | 1 |
| NOTICE | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .java | 361 |
| .c | 308 |
| .h | 221 |
| .py | 116 |
| [no-ext] | 90 |
| .tcl | 86 |
| .md | 31 |
| .sh | 22 |
| .in | 20 |
| .lua | 20 |
| .xml | 19 |
| .cc | 15 |
| .rb | 7 |
| .conf | 5 |
| .html | 5 |
| .properties | 5 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
