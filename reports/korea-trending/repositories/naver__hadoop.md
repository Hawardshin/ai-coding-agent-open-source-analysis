# naver/hadoop

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/hadoop |
| local path | sources/naver__hadoop |
| HEAD | 0c0a80f |
| stars/forks | 41 / 29 |
| language | Java |
| license | Apache-2.0 |
| pushedAt | 2022-11-03T00:31:17Z |
| trendScore / priorityScore | 66 / 220 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Security / compliance | 242 | README.txt, hadoop-assemblies/pom.xml, hadoop-client/pom.xml |
| AI agent / tool use | 42 | hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/java/org/apache/hadoop/yarn/server/resourcemanager/reservation/TestGreedyReservationAgent.java |
| LLM wiki / memory / graph | 16 | README.md, README.txt, hadoop-mapreduce-project/.eclipse.templates/README.txt |
| Frontend / developer experience | 4 | hadoop-project/pom.xml, hadoop-hdfs-project/hadoop-hdfs-httpfs/pom.xml, hadoop-tools/hadoop-aws/pom.xml |
| Korean language / Korea domain | 4 | README.md |
| RAG / retrieval | 3 | hadoop-tools/hadoop-aws/src/test/java/org/apache/hadoop/fs/s3native/InMemoryNativeFileSystemStore.java |
| Spec / doc-driven workflow | 1 | hadoop-mapreduce-project/hadoop-mapreduce-client/hadoop-mapreduce-client-app/src/test/java/org/apache/hadoop/mapreduce/v2/app/MRAppBenchmark.java |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, example-rich, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, rag, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin, C/C++ |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 7365 |
| manifests | 40 |
| docs | 117 |
| tests | 2397 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | What is this repository? / Features / Build / Package Naming |
| excerpt | What is this repository? This repository is based on Apache Hadoop 2.7.1 source code. It is used to make Naver's large scale multi tenant hadoop cluster, which is called C3. The C3 users can execute several data processing jobs with MapReduce, Spark and Hive on CPU, and execute Deep Learning algorithms on GPU. And also they can run long live applications on docker container. Recently hadoop's new features is adding to Hadoop 2.8 or Hadoop 3.0. However if you are using hadoop cluster for years in production, your hadoop version maybe is not hadoop 2.8 or 3.0, because these versions is not recommended for production cluster yet. Thus you can't use very useful new features GPU scheduler, docker |


## 주요 파일

### Manifests

- README.md
- hadoop-assemblies/pom.xml
- hadoop-client/pom.xml
- hadoop-common-project/hadoop-auth-examples/pom.xml
- hadoop-common-project/pom.xml
- hadoop-dist/pom.xml
- hadoop-hdfs-project/pom.xml
- hadoop-mapreduce-project/hadoop-mapreduce-examples/pom.xml
- hadoop-mapreduce-project/pom.xml
- hadoop-maven-plugins/pom.xml
- hadoop-minicluster/pom.xml
- hadoop-project-dist/pom.xml
- hadoop-project/pom.xml
- hadoop-tools/pom.xml
- hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/pom.xml
- hadoop-yarn-project/pom.xml
- pom.xml
- hadoop-common-project/hadoop-annotations/pom.xml
- hadoop-common-project/hadoop-auth/pom.xml
- hadoop-common-project/hadoop-common/pom.xml


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| hadoop-yarn-project | 1801 |
| hadoop-common-project | 1782 |
| hadoop-hdfs-project | 1689 |
| hadoop-mapreduce-project | 1377 |
| hadoop-tools | 676 |
| hadoop-assemblies | 11 |
| dev-support | 6 |
| hadoop-maven-plugins | 5 |
| hadoop-project | 4 |
| hadoop-project-dist | 2 |
| .gitattributes | 1 |
| .gitignore | 1 |
| BUILDING.txt | 1 |
| hadoop-client | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .java | 6385 |
| .xml | 218 |
| .c | 104 |
| .md | 86 |
| .properties | 64 |
| .proto | 60 |
| .h | 51 |
| .html | 51 |
| [no-ext] | 48 |
| .sh | 41 |
| .txt | 37 |
| .css | 29 |
| .cmd | 19 |
| .vm | 13 |
| .conf | 12 |
| .tgz | 12 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
