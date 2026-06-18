# naver/arcus-java-client

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/arcus-java-client |
| local path | sources/naver__arcus-java-client |
| HEAD | 07888ec |
| stars/forks | 55 / 49 |
| language | Java |
| license | Apache-2.0 |
| pushedAt | 2026-06-11T08:49:20Z |
| trendScore / priorityScore | 94 / 227 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 73 | README.md, pom.xml, docs/arcus-java-client-getting-started.md |
| Security / compliance | 71 | docs/user-guide/99-Appendix-A-client-notes.md, src/test/manual/net/spy/memcached/bulkoperation/LopInsertBulkMultipleValueTest.java, src/test/manual/net/spy/memcached/bulkoperation/SopInsertBulkMultipleValueTest.java |
| LLM wiki / memory / graph | 11 | README.md, docs/arcus-java-client-getting-started.md, docs/user-guide/01-arcus-cloud-basics.md |
| Spec / doc-driven workflow | 3 | README.md |
| Infra / observability | 2 | .github/workflows/ci.yml |


## 분류와 스택

| key | value |
| --- | --- |
| categories | graphMemory, infra-observability, korea-signal, llm-wiki-memory, security-compliance, spec-driven |
| stacks | Java/Kotlin |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 603 |
| manifests | 14 |
| docs | 20 |
| tests | 216 |
| ci/ops | 1 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Test cases may not run properly if you do not already have memcached |
| headings | arcus-java-client: Arcus Java Client [![CI][ciBadge]][ciLink] [![License][liBadge]][liLink] / JDK Requirements / Getting Started / Building / Test cases may not run properly if you do not already have memcached / and ZooKeeper installed on the local machine.  To skip tests, use skipTests. / Running Test Cases / The number of milliseconds of each tick / The number of ticks that the initial / synchronization phase can take |
| excerpt | arcus java client Arcus Java Client ! CI ciBadge ciLink ! License liBadge liLink This is a fork of spymemcached spymemcached with the following modifications to support Arcus memcached cloud. Collection data types List A doubly linked list. Set An unordered set of unique data. Map An unordered set of <field, value . B+Tree A B+Tree structure similar to sorted map. ZooKeeper based clustering spymemcached https //code.google.com/p/spymemcached/ "spymemcached" JDK Requirements Compatible with jdk version runtime requirements At least 1.6 build requirements At least 1.8 Getting Started The Maven artifact for arcus java client is in the central Maven repository. To use it, add the following depen |


## 주요 파일

### Manifests

- docs/user-guide/README.md
- README.md
- pom.xml
- src/main/java/net/spy/memcached/auth/package.html
- src/main/java/net/spy/memcached/compat/log/package.html
- src/main/java/net/spy/memcached/compat/package.html
- src/main/java/net/spy/memcached/internal/package.html
- src/main/java/net/spy/memcached/ops/package.html
- src/main/java/net/spy/memcached/package.html
- src/main/java/net/spy/memcached/protocol/ascii/package.html
- src/main/java/net/spy/memcached/protocol/binary/package.html
- src/main/java/net/spy/memcached/protocol/package.html
- src/main/java/net/spy/memcached/transcoders/package.html
- src/main/java/net/spy/memcached/util/package.html


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 568 |
| docs | 16 |
| .github | 4 |
| .idea | 2 |
| .gitignore | 1 |
| AUTHORS | 1 |
| buildfile | 1 |
| ChangeLog | 1 |
| checkstyle-suppressions.xml | 1 |
| checkstyle.xml | 1 |
| etc | 1 |
| LICENSE | 1 |
| LICENSE.txt-spymemcached | 1 |
| PATENTS | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .java | 555 |
| .md | 20 |
| .html | 12 |
| .xml | 7 |
| [no-ext] | 6 |
| .graffle | 1 |
| .txt-spymemcached | 1 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
