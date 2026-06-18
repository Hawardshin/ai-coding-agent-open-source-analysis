# naver/hadoop Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Public hadoop release repository

## 요약

- 조사 단위: `sources/naver__hadoop` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 5,962 files, 1,698 directories, depth score 113, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=hadoop-yarn-project/hadoop-yarn/bin/slaves.sh, hadoop-yarn-project/hadoop-yarn/bin/start-yarn.cmd, hadoop-yarn-project/hadoop-yarn/bin/start-yarn.sh이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/hadoop |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Java |
| Stars | 41 |
| Forks | 29 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver__hadoop](../../../../sources/naver__hadoop) |
| Existing report | [reports/korea-trending/repositories/naver__hadoop.md](../../../korea-trending/repositories/naver__hadoop.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 5962 / 1698 |
| Max observed depth | 13 |
| Top directories | dev-support, hadoop-assemblies, hadoop-client, hadoop-common-project, hadoop-dist, hadoop-hdfs-project, hadoop-mapreduce-project, hadoop-maven-plugins, hadoop-minicluster, hadoop-project, hadoop-project-dist, hadoop-tools, hadoop-yarn-project |
| Top extensions | .java: 4880, .xml: 218, .c: 104, .md: 86, .properties: 64, .proto: 60, (none): 57, .h: 51, .html: 51, .png: 41, .sh: 41, .txt: 37 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| dev-support | top-level component | 1 |
| hadoop-assemblies | top-level component | 1 |
| hadoop-client | source boundary | 1 |
| hadoop-common-project | top-level component | 1 |
| hadoop-dist | top-level component | 1 |
| hadoop-hdfs-project | top-level component | 1 |
| hadoop-mapreduce-project | top-level component | 1 |
| hadoop-maven-plugins | top-level component | 1 |
| hadoop-minicluster | top-level component | 1 |
| hadoop-project | top-level component | 1 |
| hadoop-project-dist | top-level component | 1 |
| hadoop-tools | top-level component | 1 |
| hadoop-yarn-project | top-level component | 1 |


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
| entrypoints | [hadoop-yarn-project/hadoop-yarn/bin/slaves.sh](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/bin/slaves.sh) | entrypoints signal |
| entrypoints | [hadoop-yarn-project/hadoop-yarn/bin/start-yarn.cmd](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/bin/start-yarn.cmd) | entrypoints signal |
| entrypoints | [hadoop-yarn-project/hadoop-yarn/bin/start-yarn.sh](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/bin/start-yarn.sh) | entrypoints signal |
| entrypoints | [hadoop-yarn-project/hadoop-yarn/bin/stop-yarn.cmd](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/bin/stop-yarn.cmd) | entrypoints signal |
| docs | [README.md](../../../../sources/naver__hadoop/README.md) | docs signal |
| docs | [README.txt](../../../../sources/naver__hadoop/README.txt) | docs signal |
| docs | [hadoop-yarn-project/hadoop-yarn/README](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/README) | docs signal |
| docs | [hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/site.xml](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/site.xml) | docs signal |
| eval | [hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/pom.xml](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/pom.xml) | eval signal |
| eval | [hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/capacity-scheduler.xml](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/capacity-scheduler.xml) | eval signal |
| eval | [hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/core-site.xml](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/core-site.xml) | eval signal |
| eval | [hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/krb5.conf](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/krb5.conf) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 51 | [hadoop-yarn-project/hadoop-yarn/bin/slaves.sh](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/bin/slaves.sh)<br>[hadoop-yarn-project/hadoop-yarn/bin/start-yarn.cmd](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/bin/start-yarn.cmd)<br>[hadoop-yarn-project/hadoop-yarn/bin/start-yarn.sh](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/bin/start-yarn.sh)<br>[hadoop-yarn-project/hadoop-yarn/bin/stop-yarn.cmd](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/bin/stop-yarn.cmd)<br>[hadoop-yarn-project/hadoop-yarn/bin/stop-yarn.sh](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/bin/stop-yarn.sh)<br>[hadoop-yarn-project/hadoop-yarn/bin/yarn](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/bin/yarn)<br>[hadoop-yarn-project/hadoop-yarn/bin/yarn-config.cmd](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/bin/yarn-config.cmd)<br>[hadoop-yarn-project/hadoop-yarn/bin/yarn-config.sh](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/bin/yarn-config.sh) |
| agentRuntime | 243 | [hadoop-tools/hadoop-rumen/src/test/java/org/apache/hadoop/tools/rumen/ConcatenatedInputFilesDemuxer.java](../../../../sources/naver__hadoop/hadoop-tools/hadoop-rumen/src/test/java/org/apache/hadoop/tools/rumen/ConcatenatedInputFilesDemuxer.java)<br>[hadoop-tools/hadoop-rumen/src/test/java/org/apache/hadoop/tools/rumen/HistogramRawTestData.java](../../../../sources/naver__hadoop/hadoop-tools/hadoop-rumen/src/test/java/org/apache/hadoop/tools/rumen/HistogramRawTestData.java)<br>[hadoop-tools/hadoop-rumen/src/test/java/org/apache/hadoop/tools/rumen/TestHistograms.java](../../../../sources/naver__hadoop/hadoop-tools/hadoop-rumen/src/test/java/org/apache/hadoop/tools/rumen/TestHistograms.java)<br>[hadoop-tools/hadoop-rumen/src/test/java/org/apache/hadoop/tools/rumen/TestPiecewiseLinearInterpolation.java](../../../../sources/naver__hadoop/hadoop-tools/hadoop-rumen/src/test/java/org/apache/hadoop/tools/rumen/TestPiecewiseLinearInterpolation.java)<br>[hadoop-tools/hadoop-rumen/src/test/java/org/apache/hadoop/tools/rumen/TestRandomSeedGenerator.java](../../../../sources/naver__hadoop/hadoop-tools/hadoop-rumen/src/test/java/org/apache/hadoop/tools/rumen/TestRandomSeedGenerator.java)<br>[hadoop-tools/hadoop-rumen/src/main/java/org/apache/hadoop/tools/rumen/AbstractClusterStory.java](../../../../sources/naver__hadoop/hadoop-tools/hadoop-rumen/src/main/java/org/apache/hadoop/tools/rumen/AbstractClusterStory.java)<br>[hadoop-tools/hadoop-rumen/src/main/java/org/apache/hadoop/tools/rumen/Anonymizer.java](../../../../sources/naver__hadoop/hadoop-tools/hadoop-rumen/src/main/java/org/apache/hadoop/tools/rumen/Anonymizer.java)<br>[hadoop-tools/hadoop-rumen/src/main/java/org/apache/hadoop/tools/rumen/CDFPiecewiseLinearRandomGenerator.java](../../../../sources/naver__hadoop/hadoop-tools/hadoop-rumen/src/main/java/org/apache/hadoop/tools/rumen/CDFPiecewiseLinearRandomGenerator.java) |
| mcp | 0 | not obvious |
| retrieval | 27 | [hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/markdown/index.md](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/markdown/index.md)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/markdown/registry/index.md](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/markdown/registry/index.md)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-common/src/main/java/org/apache/hadoop/yarn/state/Graph.java](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-common/src/main/java/org/apache/hadoop/yarn/state/Graph.java)<br>[hadoop-tools/hadoop-sls/src/site/resources/images/sls_cluster_memory.png](../../../../sources/naver__hadoop/hadoop-tools/hadoop-sls/src/site/resources/images/sls_cluster_memory.png)<br>[hadoop-tools/hadoop-sls/src/site/resources/images/sls_queue_allocated_memory.png](../../../../sources/naver__hadoop/hadoop-tools/hadoop-sls/src/site/resources/images/sls_queue_allocated_memory.png)<br>[hadoop-tools/hadoop-openstack/src/site/markdown/index.md](../../../../sources/naver__hadoop/hadoop-tools/hadoop-openstack/src/site/markdown/index.md)<br>[hadoop-tools/hadoop-azure/src/site/markdown/index.md](../../../../sources/naver__hadoop/hadoop-tools/hadoop-azure/src/site/markdown/index.md)<br>[hadoop-tools/hadoop-aws/src/site/markdown/tools/hadoop-aws/index.md](../../../../sources/naver__hadoop/hadoop-tools/hadoop-aws/src/site/markdown/tools/hadoop-aws/index.md) |
| spec | 4 | [install_requirements.sh](../../../../sources/naver__hadoop/install_requirements.sh)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/resources/yarn_architecture.gif](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/resources/yarn_architecture.gif)<br>[hadoop-hdfs-project/hadoop-hdfs/src/main/docs/src/documentation/resources/images/architecture.gif](../../../../sources/naver__hadoop/hadoop-hdfs-project/hadoop-hdfs/src/main/docs/src/documentation/resources/images/architecture.gif)<br>[hadoop-common-project/hadoop-common/src/main/docs/src/documentation/resources/images/architecture.gif](../../../../sources/naver__hadoop/hadoop-common-project/hadoop-common/src/main/docs/src/documentation/resources/images/architecture.gif) |
| eval | 2079 | [hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/pom.xml](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/pom.xml)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/capacity-scheduler.xml](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/capacity-scheduler.xml)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/core-site.xml](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/core-site.xml)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/krb5.conf](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/krb5.conf)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/log4j.properties](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/log4j.properties)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/proto/test_token.proto](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/proto/test_token.proto)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/java/org/apache/hadoop/yarn/server/ContainerTokenIdentifierForTest.java](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/java/org/apache/hadoop/yarn/server/ContainerTokenIdentifierForTest.java)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/java/org/apache/hadoop/yarn/server/MiniYARNCluster.java](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/java/org/apache/hadoop/yarn/server/MiniYARNCluster.java) |
| security | 338 | [hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/markdown/registry/registry-security.md](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/markdown/registry/registry-security.md)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/resources/hadoop-policy.xml](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/resources/hadoop-policy.xml)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/resources/META-INF/services/org.apache.hadoop.security.token.TokenRenewer](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/resources/META-INF/services/org.apache.hadoop.security.token.TokenRenewer)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-nodemanager/src/main/resources/META-INF/services/org.apache.hadoop.security.SecurityInfo](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-nodemanager/src/main/resources/META-INF/services/org.apache.hadoop.security.SecurityInfo)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-nodemanager/src/main/resources/META-INF/services/org.apache.hadoop.security.token.TokenIdentifier](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-nodemanager/src/main/resources/META-INF/services/org.apache.hadoop.security.token.TokenIdentifier)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-common/src/main/resources/META-INF/services/org.apache.hadoop.security.SecurityInfo](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-common/src/main/resources/META-INF/services/org.apache.hadoop.security.SecurityInfo)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-common/src/test/java/org/apache/hadoop/yarn/server/security/TestApplicationACLsManager.java](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-common/src/test/java/org/apache/hadoop/yarn/server/security/TestApplicationACLsManager.java)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-common/src/test/java/org/apache/hadoop/yarn/security/TestYARNTokenIdentifier.java](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-common/src/test/java/org/apache/hadoop/yarn/security/TestYARNTokenIdentifier.java) |
| ci | 1 | [hadoop-common-project/hadoop-common/src/main/java/org/apache/hadoop/util/hash/JenkinsHash.java](../../../../sources/naver__hadoop/hadoop-common-project/hadoop-common/src/main/java/org/apache/hadoop/util/hash/JenkinsHash.java) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 218 | [README.md](../../../../sources/naver__hadoop/README.md)<br>[README.txt](../../../../sources/naver__hadoop/README.txt)<br>[hadoop-yarn-project/hadoop-yarn/README](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/README)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/site.xml](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/site.xml)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/resources/yarn_architecture.gif](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/resources/yarn_architecture.gif)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/resources/images/rm-ha-overview.png](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/resources/images/rm-ha-overview.png)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/resources/images/timeline_structure.jpg](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/resources/images/timeline_structure.jpg)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/resources/css/site.css](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/resources/css/site.css) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 2079 | [hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/pom.xml](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/pom.xml)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/capacity-scheduler.xml](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/capacity-scheduler.xml)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/core-site.xml](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/core-site.xml)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/krb5.conf](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/krb5.conf)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/log4j.properties](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/log4j.properties)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/proto/test_token.proto](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/proto/test_token.proto) |
| CI workflows | 1 | [hadoop-common-project/hadoop-common/src/main/java/org/apache/hadoop/util/hash/JenkinsHash.java](../../../../sources/naver__hadoop/hadoop-common-project/hadoop-common/src/main/java/org/apache/hadoop/util/hash/JenkinsHash.java) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 338 | [hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/markdown/registry/registry-security.md](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/markdown/registry/registry-security.md)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/resources/hadoop-policy.xml](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/resources/hadoop-policy.xml)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/resources/META-INF/services/org.apache.hadoop.security.token.TokenRenewer](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-resourcemanager/src/test/resources/META-INF/services/org.apache.hadoop.security.token.TokenRenewer)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-nodemanager/src/main/resources/META-INF/services/org.apache.hadoop.security.SecurityInfo](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-nodemanager/src/main/resources/META-INF/services/org.apache.hadoop.security.SecurityInfo)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-nodemanager/src/main/resources/META-INF/services/org.apache.hadoop.security.token.TokenIdentifier](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-nodemanager/src/main/resources/META-INF/services/org.apache.hadoop.security.token.TokenIdentifier)<br>[hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-common/src/main/resources/META-INF/services/org.apache.hadoop.security.SecurityInfo](../../../../sources/naver__hadoop/hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-common/src/main/resources/META-INF/services/org.apache.hadoop.security.SecurityInfo) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `hadoop-yarn-project/hadoop-yarn/bin/slaves.sh`, `hadoop-yarn-project/hadoop-yarn/bin/start-yarn.cmd`, `hadoop-yarn-project/hadoop-yarn/bin/start-yarn.sh`.
2. Trace execution through entrypoints: `hadoop-yarn-project/hadoop-yarn/bin/slaves.sh`, `hadoop-yarn-project/hadoop-yarn/bin/start-yarn.cmd`, `hadoop-yarn-project/hadoop-yarn/bin/start-yarn.sh`.
3. Map agent/tool runtime through: `hadoop-tools/hadoop-rumen/src/test/java/org/apache/hadoop/tools/rumen/ConcatenatedInputFilesDemuxer.java`, `hadoop-tools/hadoop-rumen/src/test/java/org/apache/hadoop/tools/rumen/HistogramRawTestData.java`, `hadoop-tools/hadoop-rumen/src/test/java/org/apache/hadoop/tools/rumen/TestHistograms.java`.
4. Inspect retrieval/memory/indexing through: `hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/markdown/index.md`, `hadoop-yarn-project/hadoop-yarn/hadoop-yarn-site/src/site/markdown/registry/index.md`, `hadoop-yarn-project/hadoop-yarn/hadoop-yarn-common/src/main/java/org/apache/hadoop/yarn/state/Graph.java`.
5. Verify behavior through test/eval files: `hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/pom.xml`, `hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/capacity-scheduler.xml`, `hadoop-yarn-project/hadoop-yarn/hadoop-yarn-server/hadoop-yarn-server-tests/src/test/resources/core-site.xml`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Public hadoop release repository. 핵심 구조 신호는 Java, pom.xml, README.md, docs, spec-artifacts이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
