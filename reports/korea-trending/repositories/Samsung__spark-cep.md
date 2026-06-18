# Samsung/spark-cep

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/spark-cep |
| local path | sources/Samsung__spark-cep |
| HEAD | c5a90e1 |
| stars/forks | 58 / 17 |
| language | Scala |
| license | Apache-2.0 |
| pushedAt | 2017-04-12T07:18:18Z |
| trendScore / priorityScore | 67 / 165 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Security / compliance | 29 | project/Build.scala, project/Dependencies.scala, src/main/scala/org/apache/spark/sql/streaming/examples/JsonInputStreamQuery.scala |
| LLM wiki / memory / graph | 12 | README.md, src/main/scala/org/apache/spark/sql/streaming/StreamSQLParser.scala, src/main/scala/org/apache/spark/sql/streaming/StreamStrategies.scala |
| AI agent / tool use | 3 | src/main/scala/org/apache/spark/sql/streaming/StreamSQLContext.scala, src/main/scala/org/apache/spark/sql/streaming/StreamStrategies.scala |
| Korean language / Korea domain | 3 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, example-rich, graphMemory, korea-signal, llm-wiki-memory, security-compliance |
| stacks | Java/Kotlin |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 44 |
| manifests | 1 |
| docs | 1 |
| tests | 5 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Spark CEP |
| headings | Spark CEP / Quick Start / Creating StreamSQLContext / Running SQL on DStreams / Stream Relation Join / Time Based Windowing Join/Aggregation / External Source API Support for Kafka / How to Build and Deploy |
| excerpt | Spark CEP Spark CEP is a stream processing engine on top of Apache Spark supporting continuous query language. It has following improvements comparing to the existing Spark Streaming query engines. Support more efficient windowed aggregation. Support "Insert Into" query. Quick Start Creating StreamSQLContext StreamSQLContext is the main entry point for all streaming sql related functionalities. StreamSQLContext can be created by Or you could use HiveContext to get full Hive semantics support, like Running SQL on DStreams Stream Relation Join Time Based Windowing Join/Aggregation Note For time based windowing join, the sliding size should be same for all the joined streams. This is the limita |


## 주요 파일

### Manifests

- README.md


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 35 |
| project | 4 |
| .gitignore | 1 |
| LICENSE | 1 |
| README.md | 1 |
| sbt | 1 |
| scalastyle-config.xml | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .scala | 29 |
| .json | 4 |
| [no-ext] | 3 |
| .java | 2 |
| .properties | 2 |
| .xml | 2 |
| .md | 1 |
| .sbt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
