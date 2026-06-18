# kakao/kafka-sink-connector Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Kafka Connect connector that reads JSON data from Apache Kafka and send JSON record to Another Kafka topic.

## 요약

- 조사 단위: `sources/kakao__kafka-sink-connector` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 18 files, 16 directories, depth score 34, key references 2개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=not obvious이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 2개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | kakao/kafka-sink-connector |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Java |
| Stars | 54 |
| Forks | 12 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/kakao__kafka-sink-connector](../../../../sources/kakao__kafka-sink-connector) |
| Existing report | [reports/korea-trending/repositories/kakao__kafka-sink-connector.md](../../../korea-trending/repositories/kakao__kafka-sink-connector.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 18 / 16 |
| Max observed depth | 9 |
| Top directories | gradle, src |
| Top extensions | .java: 8, .md: 3, .gradle: 2, (none): 2, .bat: 1, .jar: 1, .properties: 1 |
| Source patterns | eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 4 |
| gradle | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| eval | [src/test/java/com/kakao/connector/kafka/JsonPathTest.java](../../../../sources/kakao__kafka-sink-connector/src/test/java/com/kakao/connector/kafka/JsonPathTest.java) | eval support |
| eval | [src/test/java/com/kakao/connector/kafka/MessageKeyParsingTest.java](../../../../sources/kakao__kafka-sink-connector/src/test/java/com/kakao/connector/kafka/MessageKeyParsingTest.java) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 3 | [src/test/java/com/kakao/connector/kafka/JsonPathTest.java](../../../../sources/kakao__kafka-sink-connector/src/test/java/com/kakao/connector/kafka/JsonPathTest.java)<br>[src/test/java/com/kakao/connector/kafka/MessageKeyParsingTest.java](../../../../sources/kakao__kafka-sink-connector/src/test/java/com/kakao/connector/kafka/MessageKeyParsingTest.java)<br>[src/test/java/com/kakao/connector/kafka/TimestampParsingMessageTest.java](../../../../sources/kakao__kafka-sink-connector/src/test/java/com/kakao/connector/kafka/TimestampParsingMessageTest.java) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/kakao__kafka-sink-connector/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 3 | [src/test/java/com/kakao/connector/kafka/JsonPathTest.java](../../../../sources/kakao__kafka-sink-connector/src/test/java/com/kakao/connector/kafka/JsonPathTest.java)<br>[src/test/java/com/kakao/connector/kafka/MessageKeyParsingTest.java](../../../../sources/kakao__kafka-sink-connector/src/test/java/com/kakao/connector/kafka/MessageKeyParsingTest.java)<br>[src/test/java/com/kakao/connector/kafka/TimestampParsingMessageTest.java](../../../../sources/kakao__kafka-sink-connector/src/test/java/com/kakao/connector/kafka/TimestampParsingMessageTest.java) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `src/test/java/com/kakao/connector/kafka/JsonPathTest.java`, `src/test/java/com/kakao/connector/kafka/MessageKeyParsingTest.java`.
2. Verify behavior through test/eval files: `src/test/java/com/kakao/connector/kafka/JsonPathTest.java`, `src/test/java/com/kakao/connector/kafka/MessageKeyParsingTest.java`, `src/test/java/com/kakao/connector/kafka/TimestampParsingMessageTest.java`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Kafka Connect connector that reads JSON data from Apache Kafka and send JSON record to Another Kafka topic.. 핵심 구조 신호는 Java, build.gradle, README.md, LICENSE, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
