# kakao/kafka-sink-connector

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakao/kafka-sink-connector |
| local path | sources/kakao__kafka-sink-connector |
| HEAD | da676e5 |
| stars/forks | 54 / 12 |
| language | Java |
| license | Apache-2.0 |
| pushedAt | 2023-11-13T05:03:18Z |
| trendScore / priorityScore | 66 / 160 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 32 | README.md, build.gradle, CONTRIBUTING.md |
| LLM wiki / memory / graph | 17 | NOTICE.md |
| Security / compliance | 3 | README.md, NOTICE.md |
| Spec / doc-driven workflow | 2 | NOTICE.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | graphMemory, korea-signal, llm-wiki-memory, security-compliance, spec-driven |
| stacks | Java/Kotlin |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 18 |
| manifests | 2 |
| docs | 3 |
| tests | 3 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | kafka-sink-connector |
| headings | kafka-sink-connector / Features / Configuration Properties / Configuration Example / Build / How to add kafka-sink-connector JAR file in Kafka Connect worker? / License |
| excerpt | kafka sink connector kafka sink connector is a Kafka Connect connector that reads JSON data from Apache Kafka and send JSON record to Another Kafka topic. Features Sink Record to Another Kafka topic Data Filtering by JsonPath https //github.com/json path/JsonPath Sampling Timestamp parsing Message key parsing Additional producer option linger.ms, batch.size Configuration Properties Required Name Type Description Sample O topics String A list of Kafka topics that the sink connector watches. my topic O kafka.sink.topic String The Kafka topic name to which the sink connector writes. relay topic O kafka.sink.bootstrap String The Kafka bootstrap server to which the sink connector writes. my kafka |


## 주요 파일

### Manifests

- README.md
- build.gradle


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 8 |
| gradle | 2 |
| build.gradle | 1 |
| CONTRIBUTING.md | 1 |
| gradlew | 1 |
| gradlew.bat | 1 |
| LICENSE | 1 |
| NOTICE.md | 1 |
| README.md | 1 |
| settings.gradle | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .java | 8 |
| .md | 3 |
| .gradle | 2 |
| [no-ext] | 2 |
| .bat | 1 |
| .jar | 1 |
| .properties | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
