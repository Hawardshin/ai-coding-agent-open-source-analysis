# nhn/toast-haste.framework Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

TOAST Haste framework is a pure java implementation of asynchronous game server framework

## 요약

- 조사 단위: `sources/nhn__toast-haste.framework` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 153 files, 129 directories, depth score 58, key references 6개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 eval/test harness, security/policy surface 구조로 읽힌다. 핵심 소스 근거는 docs=README_KR.md, README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 6개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | nhn/toast-haste.framework |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Java |
| Stars | 100 |
| Forks | 29 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/nhn__toast-haste.framework](../../../../sources/nhn__toast-haste.framework) |
| Existing report | [reports/korea-trending/repositories/nhn__toast-haste.framework.md](../../../korea-trending/repositories/nhn__toast-haste.framework.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 153 / 129 |
| Max observed depth | 10 |
| Top directories | .github, all, bootstrap, common, example, framework, license, objectpool, protocol, security, transport, transport-tcp, transport-udp |
| Top extensions | .java: 126, .xml: 12, .txt: 8, .md: 5, .properties: 1, (none): 1 |
| Source patterns | eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| all | top-level component | 1 |
| bootstrap | top-level component | 1 |
| common | top-level component | 1 |
| example | top-level component | 1 |
| framework | top-level component | 1 |
| license | top-level component | 1 |
| objectpool | top-level component | 1 |
| protocol | top-level component | 1 |
| security | top-level component | 1 |
| transport | top-level component | 1 |
| transport-tcp | top-level component | 1 |
| transport-udp | top-level component | 1 |


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
| docs | [README_KR.md](../../../../sources/nhn__toast-haste.framework/README_KR.md) | docs signal |
| docs | [README.md](../../../../sources/nhn__toast-haste.framework/README.md) | docs signal |
| eval | [transport-udp/src/test/java/com/nhnent/haste/transport/udp/OutgoingCommandTest.java](../../../../sources/nhn__toast-haste.framework/transport-udp/src/test/java/com/nhnent/haste/transport/udp/OutgoingCommandTest.java) | eval signal |
| eval | [security/src/test/java/com/nhnent/haste/security/AesTest.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/AesTest.java) | eval signal |
| eval | [security/src/test/java/com/nhnent/haste/security/Base64.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/Base64.java) | eval signal |
| eval | [security/src/test/java/com/nhnent/haste/security/BigIntegerTest.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/BigIntegerTest.java) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 22 | [transport-udp/src/test/java/com/nhnent/haste/transport/udp/OutgoingCommandTest.java](../../../../sources/nhn__toast-haste.framework/transport-udp/src/test/java/com/nhnent/haste/transport/udp/OutgoingCommandTest.java)<br>[security/src/test/java/com/nhnent/haste/security/AesTest.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/AesTest.java)<br>[security/src/test/java/com/nhnent/haste/security/Base64.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/Base64.java)<br>[security/src/test/java/com/nhnent/haste/security/BigIntegerTest.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/BigIntegerTest.java)<br>[security/src/test/java/com/nhnent/haste/security/DiffieHellmanTest.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/DiffieHellmanTest.java)<br>[security/src/test/java/com/nhnent/haste/security/Md5Test.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/Md5Test.java)<br>[security/src/test/java/com/nhnent/haste/security/ShaTest.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/ShaTest.java)<br>[security/src/test/java/com/nhnent/haste/security/TestConstants.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/TestConstants.java) |
| security | 18 | [security/pom.xml](../../../../sources/nhn__toast-haste.framework/security/pom.xml)<br>[security/src/test/java/com/nhnent/haste/security/AesTest.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/AesTest.java)<br>[security/src/test/java/com/nhnent/haste/security/Base64.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/Base64.java)<br>[security/src/test/java/com/nhnent/haste/security/BigIntegerTest.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/BigIntegerTest.java)<br>[security/src/test/java/com/nhnent/haste/security/DiffieHellmanTest.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/DiffieHellmanTest.java)<br>[security/src/test/java/com/nhnent/haste/security/Md5Test.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/Md5Test.java)<br>[security/src/test/java/com/nhnent/haste/security/ShaTest.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/ShaTest.java)<br>[security/src/test/java/com/nhnent/haste/security/TestConstants.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/TestConstants.java) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 2 | [README_KR.md](../../../../sources/nhn__toast-haste.framework/README_KR.md)<br>[README.md](../../../../sources/nhn__toast-haste.framework/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 22 | [transport-udp/src/test/java/com/nhnent/haste/transport/udp/OutgoingCommandTest.java](../../../../sources/nhn__toast-haste.framework/transport-udp/src/test/java/com/nhnent/haste/transport/udp/OutgoingCommandTest.java)<br>[security/src/test/java/com/nhnent/haste/security/AesTest.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/AesTest.java)<br>[security/src/test/java/com/nhnent/haste/security/Base64.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/Base64.java)<br>[security/src/test/java/com/nhnent/haste/security/BigIntegerTest.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/BigIntegerTest.java)<br>[security/src/test/java/com/nhnent/haste/security/DiffieHellmanTest.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/DiffieHellmanTest.java)<br>[security/src/test/java/com/nhnent/haste/security/Md5Test.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/Md5Test.java) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 18 | [security/pom.xml](../../../../sources/nhn__toast-haste.framework/security/pom.xml)<br>[security/src/test/java/com/nhnent/haste/security/AesTest.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/AesTest.java)<br>[security/src/test/java/com/nhnent/haste/security/Base64.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/Base64.java)<br>[security/src/test/java/com/nhnent/haste/security/BigIntegerTest.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/BigIntegerTest.java)<br>[security/src/test/java/com/nhnent/haste/security/DiffieHellmanTest.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/DiffieHellmanTest.java)<br>[security/src/test/java/com/nhnent/haste/security/Md5Test.java](../../../../sources/nhn__toast-haste.framework/security/src/test/java/com/nhnent/haste/security/Md5Test.java) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `README_KR.md`, `README.md`, `transport-udp/src/test/java/com/nhnent/haste/transport/udp/OutgoingCommandTest.java`.
2. Verify behavior through test/eval files: `transport-udp/src/test/java/com/nhnent/haste/transport/udp/OutgoingCommandTest.java`, `security/src/test/java/com/nhnent/haste/security/AesTest.java`, `security/src/test/java/com/nhnent/haste/security/Base64.java`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 TOAST Haste framework is a pure java implementation of asynchronous game server framework. 핵심 구조 신호는 Java, pom.xml, README.md, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
