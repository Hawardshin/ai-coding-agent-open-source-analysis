# naver/arcus-zookeeper

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/arcus-zookeeper |
| local path | sources/naver__arcus-zookeeper |
| HEAD | 074deb8 |
| stars/forks | 7 / 12 |
| language | Java |
| license | Apache-2.0 |
| pushedAt | 2026-03-31T09:12:37Z |
| trendScore / priorityScore | 66 / 208 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Security / compliance | 120 | zookeeper-contrib/zookeeper-contrib-monitoring/nagios/README.txt, zookeeper-recipes/zookeeper-recipes-election/README.txt, zookeeper-recipes/zookeeper-recipes-lock/README.txt |
| LLM wiki / memory / graph | 23 | LICENSE.txt, README-ZK.md, zookeeper-contrib/zookeeper-contrib-zooinspector/licences/Apache Software Licence v2.0.txt |
| Spec / doc-driven workflow | 21 | README.md, zookeeper-contrib/zookeeper-contrib-rest/README.txt, zookeeper-contrib/zookeeper-contrib-rest/pom.xml |
| AI agent / tool use | 14 | bin/zkServer.sh, zookeeper-contrib/zookeeper-contrib-rest/src/python/demo_master_election.py |
| Infra / observability | 5 | zookeeper-contrib/zookeeper-contrib-monitoring/nagios/README.txt, pom.xml |
| Korean language / Korea domain | 3 | README.md |
| Frontend / developer experience | 1 | zookeeper-contrib/zookeeper-contrib-huebrowser/zkui/Makefile |
| RAG / retrieval | 1 | zookeeper-contrib/zookeeper-contrib-zkpython/src/test/get_set_test.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, localRuntime, rag, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin, C/C++ |
| capabilities | Graph/memory store, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 1096 |
| manifests | 24 |
| docs | 18 |
| tests | 356 |
| ci/ops | 1 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | Build C library on Linux / Build Server and Java library on Linux / Build Troubleshooting / Arcus Contributors |
| excerpt | This is a branch off of ZooKeeper release 3.5.9. We have made some minor changes to the C client library src/c . So, we package that and distribute it along with arcus memcached and arcus c client. They rely on the modified library. Github project page https //github.com/naver/arcus Build C library on Linux dependency requirements automake 1.12 or higher version // for using serial tests option https //issues.apache.org/jira/browse/ZOOKEEPER 1893 autoconf 2.59 or higher version cppunit 1.11 or higher version In the top directory, run the following to generate necessary headers and scripts. Then wrap the whole C library directory in a tarball and distribute that file. ant compile jute cd zook |


## 주요 파일

### Manifests

- README.md
- pom.xml
- zookeeper-assembly/pom.xml
- zookeeper-client/pom.xml
- zookeeper-contrib/pom.xml
- zookeeper-contrib/zookeeper-contrib-zooinspector/pom.xml
- zookeeper-docs/pom.xml
- zookeeper-jute/pom.xml
- zookeeper-recipes/pom.xml
- zookeeper-server/pom.xml
- dev/docker/Dockerfile
- zookeeper-client/zookeeper-client-c/pom.xml
- zookeeper-contrib/zookeeper-contrib-huebrowser/zkui/Makefile
- zookeeper-contrib/zookeeper-contrib-loggraph/pom.xml
- zookeeper-contrib/zookeeper-contrib-rest/pom.xml
- zookeeper-recipes/zookeeper-recipes-election/pom.xml
- zookeeper-recipes/zookeeper-recipes-lock/pom.xml
- zookeeper-recipes/zookeeper-recipes-queue/pom.xml
- zookeeper-contrib/zookeeper-contrib-huebrowser/zkui/src/zkui/static/js/package.yml
- zookeeper-jute/src/main/java/org/apache/jute/compiler/generated/package.html


### Spec / Docs / Prompt Artifacts

- zookeeper-contrib/zookeeper-contrib-rest/SPEC.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| zookeeper-server | 574 |
| zookeeper-contrib | 269 |
| zookeeper-client | 76 |
| zookeeper-recipes | 56 |
| zookeeper-jute | 39 |
| zookeeper-docs | 29 |
| zookeeper-it | 12 |
| bin | 11 |
| conf | 4 |
| zookeeper-assembly | 4 |
| dev | 2 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .travis.yml | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .java | 697 |
| .txt | 48 |
| .xml | 46 |
| .h | 39 |
| .cc | 34 |
| .py | 33 |
| [no-ext] | 32 |
| .js | 21 |
| .sh | 19 |
| .md | 18 |
| .c | 15 |
| .t | 11 |
| .am | 10 |
| .html | 10 |
| .cfg | 8 |
| .mako | 7 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
