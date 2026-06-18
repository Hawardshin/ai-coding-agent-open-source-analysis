# naver/arcus-c-client

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/arcus-c-client |
| local path | sources/naver__arcus-c-client |
| HEAD | b1e1438 |
| stars/forks | 13 / 16 |
| language | C++ |
| license | Apache-2.0 |
| pushedAt | 2026-02-04T04:32:17Z |
| trendScore / priorityScore | 66 / 163 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 9 | README.md, .github/workflows/CI.yml, docs/user-guide/07-btree-API.md |
| LLM wiki / memory / graph | 3 | README.md, docs/user-guide/01-arcus-cloud-basics.md |
| RAG / retrieval | 3 | docs/user-guide/README.md, docs/user-guide/03-key-value-API.md |
| Local LLM / on-device inference | 1 | docs/user-guide/10-appendix.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | evalObservability, example-rich, graphMemory, korea-signal, llm-wiki-memory, local-llm, rag |
| stacks | C/C++ |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 609 |
| manifests | 2 |
| docs | 129 |
| tests | 61 |
| ci/ops | 1 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | The number of milliseconds of each tick |
| headings | arcus-c-client: Arcus C Client / Build on Linux / ZooKeeper-based clustering / The number of milliseconds of each tick / The number of ticks that the initial / synchronization phase can take / The number of ticks that can pass between / sending a request and getting an acknowledgement / the directory where the snapshot is stored. / the port at which the clients will connect |
| excerpt | arcus c client Arcus C Client This is the C client library for Arcus memcached. It is based on libmemcached 0.53. Extensive changes are made to support Arcus collection API and ZooKeeper based clustering. The library assumes Arcus memcached, and the collection API list, set, b+tree is built in. Github project page https //github.com/naver/arcus Build on Linux Make sure to install auto tools such as autoheader. ./config/autorun.sh ./configure prefix=/install/directory make make install ZooKeeper based clustering The use of ZooKeeper based clustering is optional. To enable it, use enable zk integration along with with zookeeper when running configure. Make sure to install the ZooKeeper C libra |


## 주요 파일

### Manifests

- docs/user-guide/README.md
- README.md


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| libmemcached | 155 |
| docs | 125 |
| m4 | 89 |
| tests | 59 |
| libtest | 56 |
| clients | 35 |
| libhashkit | 31 |
| example | 10 |
| util | 10 |
| config | 5 |
| support | 5 |
| .github | 4 |
| arcus | 4 |
| poll | 3 |


## 확장자 분포

| ext | count |
| --- | --- |
| .h | 146 |
| .cc | 143 |
| .3 | 101 |
| .m4 | 89 |
| .hpp | 26 |
| .c | 25 |
| .am | 19 |
| .md | 16 |
| .1 | 10 |
| [no-ext] | 10 |
| .in | 8 |
| .sh | 3 |
| .pl | 2 |
| .ac | 1 |
| .cfg | 1 |
| .cpp | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
