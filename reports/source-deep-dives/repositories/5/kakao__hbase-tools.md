# kakao/hbase-tools Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Collection of command-line tools for HBase

## 요약

- 조사 단위: `sources/kakao__hbase-tools` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 162 files, 193 directories, depth score 62, key references 8개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README.md, hbase0.98/README.md, hbase0.98/hbase-table-stat-0.98/README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | kakao/hbase-tools |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Java |
| Stars | 60 |
| Forks | 23 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/kakao__hbase-tools](../../../../sources/kakao__hbase-tools) |
| Existing report | [reports/korea-trending/repositories/kakao__hbase-tools.md](../../../korea-trending/repositories/kakao__hbase-tools.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 162 / 193 |
| Max observed depth | 11 |
| Top directories | hbase0.94, hbase0.96, hbase0.98, hbase1.0, hbase1.2, resource |
| Top extensions | .java: 120, .xml: 25, .md: 8, .args: 2, .sh: 2, .gif: 1, .html: 1, .js: 1, .txt: 1, (none): 1 |
| Source patterns | retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| hbase0.94 | top-level component | 1 |
| hbase0.96 | top-level component | 1 |
| hbase0.98 | top-level component | 1 |
| hbase1.0 | top-level component | 1 |
| hbase1.2 | top-level component | 1 |
| resource | top-level component | 1 |


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
| docs | [README.md](../../../../sources/kakao__hbase-tools/README.md) | docs signal |
| docs | [hbase0.98/README.md](../../../../sources/kakao__hbase-tools/hbase0.98/README.md) | docs signal |
| docs | [hbase0.98/hbase-table-stat-0.98/README.md](../../../../sources/kakao__hbase-tools/hbase0.98/hbase-table-stat-0.98/README.md) | docs signal |
| docs | [hbase0.98/hbase-snapshot-0.98/README.md](../../../../sources/kakao__hbase-tools/hbase0.98/hbase-snapshot-0.98/README.md) | docs signal |
| eval | [hbase1.2/hbase-common-1.2/src/test/java/org/apache/hadoop/hbase/zookeeper/MiniZooKeeperCluster.java](../../../../sources/kakao__hbase-tools/hbase1.2/hbase-common-1.2/src/test/java/org/apache/hadoop/hbase/zookeeper/MiniZooKeeperCluster.java) | eval signal |
| eval | [hbase1.0/hbase-table-stat-1.0/src/test/java/com/kakao/hbase/stat/print/FormatterTest.java](../../../../sources/kakao__hbase-tools/hbase1.0/hbase-table-stat-1.0/src/test/java/com/kakao/hbase/stat/print/FormatterTest.java) | eval signal |
| eval | [hbase1.0/hbase-table-stat-1.0/src/test/java/com/kakao/hbase/stat/load/LoadIOTest.java](../../../../sources/kakao__hbase-tools/hbase1.0/hbase-table-stat-1.0/src/test/java/com/kakao/hbase/stat/load/LoadIOTest.java) | eval signal |
| eval | [hbase1.0/hbase-manager-1.0/src/test/java/com/kakao/hbase/manager/command/MCTest.java](../../../../sources/kakao__hbase-tools/hbase1.0/hbase-manager-1.0/src/test/java/com/kakao/hbase/manager/command/MCTest.java) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 1 | [hbase0.98/hbase-table-stat-0.98/src/main/resources/webapp/index.html](../../../../sources/kakao__hbase-tools/hbase0.98/hbase-table-stat-0.98/src/main/resources/webapp/index.html) |
| spec | 0 | not obvious |
| eval | 57 | [hbase1.2/hbase-common-1.2/src/test/java/org/apache/hadoop/hbase/zookeeper/MiniZooKeeperCluster.java](../../../../sources/kakao__hbase-tools/hbase1.2/hbase-common-1.2/src/test/java/org/apache/hadoop/hbase/zookeeper/MiniZooKeeperCluster.java)<br>[hbase1.0/hbase-table-stat-1.0/src/test/java/com/kakao/hbase/stat/print/FormatterTest.java](../../../../sources/kakao__hbase-tools/hbase1.0/hbase-table-stat-1.0/src/test/java/com/kakao/hbase/stat/print/FormatterTest.java)<br>[hbase1.0/hbase-table-stat-1.0/src/test/java/com/kakao/hbase/stat/load/LoadIOTest.java](../../../../sources/kakao__hbase-tools/hbase1.0/hbase-table-stat-1.0/src/test/java/com/kakao/hbase/stat/load/LoadIOTest.java)<br>[hbase1.0/hbase-manager-1.0/src/test/java/com/kakao/hbase/manager/command/MCTest.java](../../../../sources/kakao__hbase-tools/hbase1.0/hbase-manager-1.0/src/test/java/com/kakao/hbase/manager/command/MCTest.java)<br>[hbase1.0/hbase-common-1.0/src/test/java/org/apache/hadoop/hbase/zookeeper/MiniZooKeeperCluster.java](../../../../sources/kakao__hbase-tools/hbase1.0/hbase-common-1.0/src/test/java/org/apache/hadoop/hbase/zookeeper/MiniZooKeeperCluster.java)<br>[hbase0.98/hbase-table-stat-0.98/src/test/java/com/kakao/hbase/stat/ArgsTest.java](../../../../sources/kakao__hbase-tools/hbase0.98/hbase-table-stat-0.98/src/test/java/com/kakao/hbase/stat/ArgsTest.java)<br>[hbase0.98/hbase-table-stat-0.98/src/test/java/com/kakao/hbase/stat/StatTestBase.java](../../../../sources/kakao__hbase-tools/hbase0.98/hbase-table-stat-0.98/src/test/java/com/kakao/hbase/stat/StatTestBase.java)<br>[hbase0.98/hbase-table-stat-0.98/src/test/java/com/kakao/hbase/stat/TableStatOptionTest.java](../../../../sources/kakao__hbase-tools/hbase0.98/hbase-table-stat-0.98/src/test/java/com/kakao/hbase/stat/TableStatOptionTest.java) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 6 | [README.md](../../../../sources/kakao__hbase-tools/README.md)<br>[hbase0.98/README.md](../../../../sources/kakao__hbase-tools/hbase0.98/README.md)<br>[hbase0.98/hbase-table-stat-0.98/README.md](../../../../sources/kakao__hbase-tools/hbase0.98/hbase-table-stat-0.98/README.md)<br>[hbase0.98/hbase-snapshot-0.98/README.md](../../../../sources/kakao__hbase-tools/hbase0.98/hbase-snapshot-0.98/README.md)<br>[hbase0.98/hbase-manager-0.98/README.md](../../../../sources/kakao__hbase-tools/hbase0.98/hbase-manager-0.98/README.md)<br>[hbase0.98/hbase-common-0.98/README.md](../../../../sources/kakao__hbase-tools/hbase0.98/hbase-common-0.98/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 57 | [hbase1.2/hbase-common-1.2/src/test/java/org/apache/hadoop/hbase/zookeeper/MiniZooKeeperCluster.java](../../../../sources/kakao__hbase-tools/hbase1.2/hbase-common-1.2/src/test/java/org/apache/hadoop/hbase/zookeeper/MiniZooKeeperCluster.java)<br>[hbase1.0/hbase-table-stat-1.0/src/test/java/com/kakao/hbase/stat/print/FormatterTest.java](../../../../sources/kakao__hbase-tools/hbase1.0/hbase-table-stat-1.0/src/test/java/com/kakao/hbase/stat/print/FormatterTest.java)<br>[hbase1.0/hbase-table-stat-1.0/src/test/java/com/kakao/hbase/stat/load/LoadIOTest.java](../../../../sources/kakao__hbase-tools/hbase1.0/hbase-table-stat-1.0/src/test/java/com/kakao/hbase/stat/load/LoadIOTest.java)<br>[hbase1.0/hbase-manager-1.0/src/test/java/com/kakao/hbase/manager/command/MCTest.java](../../../../sources/kakao__hbase-tools/hbase1.0/hbase-manager-1.0/src/test/java/com/kakao/hbase/manager/command/MCTest.java)<br>[hbase1.0/hbase-common-1.0/src/test/java/org/apache/hadoop/hbase/zookeeper/MiniZooKeeperCluster.java](../../../../sources/kakao__hbase-tools/hbase1.0/hbase-common-1.0/src/test/java/org/apache/hadoop/hbase/zookeeper/MiniZooKeeperCluster.java)<br>[hbase0.98/hbase-table-stat-0.98/src/test/java/com/kakao/hbase/stat/ArgsTest.java](../../../../sources/kakao__hbase-tools/hbase0.98/hbase-table-stat-0.98/src/test/java/com/kakao/hbase/stat/ArgsTest.java) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `README.md`, `hbase0.98/README.md`, `hbase0.98/hbase-table-stat-0.98/README.md`.
2. Inspect retrieval/memory/indexing through: `hbase0.98/hbase-table-stat-0.98/src/main/resources/webapp/index.html`.
3. Verify behavior through test/eval files: `hbase1.2/hbase-common-1.2/src/test/java/org/apache/hadoop/hbase/zookeeper/MiniZooKeeperCluster.java`, `hbase1.0/hbase-table-stat-1.0/src/test/java/com/kakao/hbase/stat/print/FormatterTest.java`, `hbase1.0/hbase-table-stat-1.0/src/test/java/com/kakao/hbase/stat/load/LoadIOTest.java`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Collection of command line tools for HBase. 핵심 구조 신호는 Java, README.md, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
