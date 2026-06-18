# vespa-engine/vespa Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

The AI search platform

## 요약

- 조사 단위: `sources/vespa-engine__vespa` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 15,000 files, 3,346 directories, depth score 113, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=vespamalloc/src/vespamalloc/util/index.h, vespalib/src/vespa/vespalib/util/memory_allocator.h, vespalib/src/vespa/vespalib/util/memory_trap.cpp이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | vespa-engine/vespa |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Java |
| Stars | 6962 |
| Forks | 720 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/vespa-engine__vespa](../../../../sources/vespa-engine__vespa) |
| Existing report | [reports/global-trending/repositories/vespa-engine__vespa.md](../../../global-trending/repositories/vespa-engine__vespa.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 15000 / 3346 |
| Max observed depth | 13 |
| Top directories | .buildkite, .copr, .github, abi-check-plugin, annotations, application, bundle-plugin, bundle-plugin-test, client, cloud, clustercontroller-apps, clustercontroller-core, clustercontroller-reindexer, clustercontroller-utils, cmake, component, config, config-application-package, config-bundle, config-class-plugin |
| Top extensions | .cpp: 3851, .java: 3742, .h: 3372, .txt: 1193, (none): 1170, .cfg: 224, .dat: 192, .xml: 179, .hpp: 158, .sh: 130, .json: 99, .tbf: 98 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| abi-check-plugin | top-level component | 1 |
| annotations | top-level component | 1 |
| application | top-level component | 1 |
| bundle-plugin | top-level component | 1 |
| bundle-plugin-test | validation surface | 1 |
| client | source boundary | 1 |
| cloud | top-level component | 1 |
| clustercontroller-apps | source boundary | 1 |
| clustercontroller-core | top-level component | 1 |
| clustercontroller-reindexer | top-level component | 1 |
| clustercontroller-utils | top-level component | 1 |
| cmake | top-level component | 1 |
| component | top-level component | 1 |
| config | top-level component | 1 |
| config-application-package | top-level component | 1 |
| config-bundle | top-level component | 1 |
| config-class-plugin | top-level component | 1 |


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
| retrieval | [vespamalloc/src/vespamalloc/util/index.h](../../../../sources/vespa-engine__vespa/vespamalloc/src/vespamalloc/util/index.h) | retrieval signal |
| retrieval | [vespalib/src/vespa/vespalib/util/memory_allocator.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/memory_allocator.h) | retrieval signal |
| retrieval | [vespalib/src/vespa/vespalib/util/memory_trap.cpp](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/memory_trap.cpp) | retrieval signal |
| retrieval | [vespalib/src/vespa/vespalib/util/memory_trap.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/memory_trap.h) | retrieval signal |
| entrypoints | [vespaclient/bin/vdsgetsystemstate.sh](../../../../sources/vespa-engine__vespa/vespaclient/bin/vdsgetsystemstate.sh) | entrypoints signal |
| entrypoints | [logserver/src/main/java/com/yahoo/logserver/Server.java](../../../../sources/vespa-engine__vespa/logserver/src/main/java/com/yahoo/logserver/Server.java) | entrypoints signal |
| entrypoints | [logserver/bin/logserver-start.sh](../../../../sources/vespa-engine__vespa/logserver/bin/logserver-start.sh) | entrypoints signal |
| entrypoints | [integration/tmgrammar/playground/main.js](../../../../sources/vespa-engine__vespa/integration/tmgrammar/playground/main.js) | entrypoints signal |
| docs | [README-cmake.md](../../../../sources/vespa-engine__vespa/README-cmake.md) | docs signal |
| docs | [README.md](../../../../sources/vespa-engine__vespa/README.md) | docs signal |
| docs | [zookeeper-server/README](../../../../sources/vespa-engine__vespa/zookeeper-server/README) | docs signal |
| docs | [zookeeper-server/src/main/javadoc/README](../../../../sources/vespa-engine__vespa/zookeeper-server/src/main/javadoc/README) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [vespaclient/bin/vdsgetsystemstate.sh](../../../../sources/vespa-engine__vespa/vespaclient/bin/vdsgetsystemstate.sh)<br>[logserver/src/main/java/com/yahoo/logserver/Server.java](../../../../sources/vespa-engine__vespa/logserver/src/main/java/com/yahoo/logserver/Server.java)<br>[logserver/bin/logserver-start.sh](../../../../sources/vespa-engine__vespa/logserver/bin/logserver-start.sh)<br>[integration/tmgrammar/playground/main.js](../../../../sources/vespa-engine__vespa/integration/tmgrammar/playground/main.js) |
| agentRuntime | 136 | [vespalib/src/vespa/vespalib/util/executor_idle_tracking.cpp](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/executor_idle_tracking.cpp)<br>[vespalib/src/vespa/vespalib/util/executor_idle_tracking.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/executor_idle_tracking.h)<br>[vespalib/src/vespa/vespalib/util/executor_stats.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/executor_stats.h)<br>[vespalib/src/vespa/vespalib/util/executor.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/executor.h)<br>[vespalib/src/vespa/vespalib/util/memory_allocator.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/memory_allocator.h)<br>[vespalib/src/vespa/vespalib/util/memory_trap.cpp](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/memory_trap.cpp)<br>[vespalib/src/vespa/vespalib/util/memory_trap.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/memory_trap.h)<br>[vespalib/src/vespa/vespalib/util/memory.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/memory.h) |
| mcp | 0 | not obvious |
| retrieval | 466 | [vespamalloc/src/vespamalloc/util/index.h](../../../../sources/vespa-engine__vespa/vespamalloc/src/vespamalloc/util/index.h)<br>[vespalib/src/vespa/vespalib/util/memory_allocator.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/memory_allocator.h)<br>[vespalib/src/vespa/vespalib/util/memory_trap.cpp](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/memory_trap.cpp)<br>[vespalib/src/vespa/vespalib/util/memory_trap.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/memory_trap.h)<br>[vespalib/src/vespa/vespalib/util/memory.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/memory.h)<br>[vespalib/src/vespa/vespalib/util/process_memory_stats.cpp](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/process_memory_stats.cpp)<br>[vespalib/src/vespa/vespalib/util/process_memory_stats.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/process_memory_stats.h)<br>[vespalib/src/vespa/vespalib/util/small_vector.cpp](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/small_vector.cpp) |
| spec | 81 | [zkfacade/abi-spec.json](../../../../sources/vespa-engine__vespa/zkfacade/abi-spec.json)<br>[zkfacade/leakage-spec.json](../../../../sources/vespa-engine__vespa/zkfacade/leakage-spec.json)<br>[vespalog/abi-spec.json](../../../../sources/vespa-engine__vespa/vespalog/abi-spec.json)<br>[vespalog/leakage-spec.json](../../../../sources/vespa-engine__vespa/vespalog/leakage-spec.json)<br>[vespalib/src/vespa/vespalib/net/socket_spec.cpp](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/net/socket_spec.cpp)<br>[vespalib/src/vespa/vespalib/net/socket_spec.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/net/socket_spec.h)<br>[vespalib/src/vespa/vespalib/datastore/compaction_spec.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/datastore/compaction_spec.h)<br>[vespalib/src/tests/net/socket_spec/CMakeLists.txt](../../../../sources/vespa-engine__vespa/vespalib/src/tests/net/socket_spec/CMakeLists.txt) |
| eval | 5808 | [zookeeper-server/zookeeper-server-common/src/test/java/com/yahoo/vespa/zookeeper/ConfiguratorTest.java](../../../../sources/vespa-engine__vespa/zookeeper-server/zookeeper-server-common/src/test/java/com/yahoo/vespa/zookeeper/ConfiguratorTest.java)<br>[zookeeper-server/zookeeper-server-common/src/test/java/com/yahoo/vespa/zookeeper/ReconfigurerTest.java](../../../../sources/vespa-engine__vespa/zookeeper-server/zookeeper-server-common/src/test/java/com/yahoo/vespa/zookeeper/ReconfigurerTest.java)<br>[zookeeper-client-common/src/test/java/com/yahoo/vespa/zookeeper/client/ZkClientConfigBuilderTest.java](../../../../sources/vespa-engine__vespa/zookeeper-client-common/src/test/java/com/yahoo/vespa/zookeeper/client/ZkClientConfigBuilderTest.java)<br>[zkfacade/abi-spec.json](../../../../sources/vespa-engine__vespa/zkfacade/abi-spec.json)<br>[zkfacade/leakage-spec.json](../../../../sources/vespa-engine__vespa/zkfacade/leakage-spec.json)<br>[zkfacade/src/test/java/com/yahoo/vespa/curator/ConnectionSpecTest.java](../../../../sources/vespa-engine__vespa/zkfacade/src/test/java/com/yahoo/vespa/curator/ConnectionSpecTest.java)<br>[zkfacade/src/test/java/com/yahoo/vespa/curator/CuratorCompletionWaiterTest.java](../../../../sources/vespa-engine__vespa/zkfacade/src/test/java/com/yahoo/vespa/curator/CuratorCompletionWaiterTest.java)<br>[zkfacade/src/test/java/com/yahoo/vespa/curator/CuratorCounterTest.java](../../../../sources/vespa-engine__vespa/zkfacade/src/test/java/com/yahoo/vespa/curator/CuratorCounterTest.java) |
| security | 180 | [SECURITY.md](../../../../sources/vespa-engine__vespa/SECURITY.md)<br>[vespalib/src/vespa/vespalib/util/generation_guard.cpp](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/generation_guard.cpp)<br>[vespalib/src/vespa/vespalib/util/generation_guard.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/generation_guard.h)<br>[vespalib/src/vespa/vespalib/util/guard.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/guard.h)<br>[vespalib/src/vespa/vespalib/util/malloc_mmap_guard.cpp](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/malloc_mmap_guard.cpp)<br>[vespalib/src/vespa/vespalib/util/malloc_mmap_guard.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/malloc_mmap_guard.h)<br>[vespalib/src/vespa/vespalib/util/retain_guard.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/retain_guard.h)<br>[vespalib/src/vespa/vespalib/test/peer_policy_utils.cpp](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/test/peer_policy_utils.cpp) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 159 | [README-cmake.md](../../../../sources/vespa-engine__vespa/README-cmake.md)<br>[README.md](../../../../sources/vespa-engine__vespa/README.md)<br>[zookeeper-server/README](../../../../sources/vespa-engine__vespa/zookeeper-server/README)<br>[zookeeper-server/src/main/javadoc/README](../../../../sources/vespa-engine__vespa/zookeeper-server/src/main/javadoc/README)<br>[zookeeper-common/README.md](../../../../sources/vespa-engine__vespa/zookeeper-common/README.md)<br>[zookeeper-common/src/main/javadoc/README](../../../../sources/vespa-engine__vespa/zookeeper-common/src/main/javadoc/README)<br>[zookeeper-command-line-client/README](../../../../sources/vespa-engine__vespa/zookeeper-command-line-client/README)<br>[zookeeper-command-line-client/src/main/javadoc/README](../../../../sources/vespa-engine__vespa/zookeeper-command-line-client/src/main/javadoc/README) |
| config | 4 | [integration/tmgrammar/tools/package.json](../../../../sources/vespa-engine__vespa/integration/tmgrammar/tools/package.json)<br>[integration/tmgrammar/playground/package.json](../../../../sources/vespa-engine__vespa/integration/tmgrammar/playground/package.json)<br>[integration/schema-language-server/clients/vscode/package.json](../../../../sources/vespa-engine__vespa/integration/schema-language-server/clients/vscode/package.json)<br>[integration/schema-language-server/clients/vscode/tsconfig.json](../../../../sources/vespa-engine__vespa/integration/schema-language-server/clients/vscode/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 5808 | [zookeeper-server/zookeeper-server-common/src/test/java/com/yahoo/vespa/zookeeper/ConfiguratorTest.java](../../../../sources/vespa-engine__vespa/zookeeper-server/zookeeper-server-common/src/test/java/com/yahoo/vespa/zookeeper/ConfiguratorTest.java)<br>[zookeeper-server/zookeeper-server-common/src/test/java/com/yahoo/vespa/zookeeper/ReconfigurerTest.java](../../../../sources/vespa-engine__vespa/zookeeper-server/zookeeper-server-common/src/test/java/com/yahoo/vespa/zookeeper/ReconfigurerTest.java)<br>[zookeeper-client-common/src/test/java/com/yahoo/vespa/zookeeper/client/ZkClientConfigBuilderTest.java](../../../../sources/vespa-engine__vespa/zookeeper-client-common/src/test/java/com/yahoo/vespa/zookeeper/client/ZkClientConfigBuilderTest.java)<br>[zkfacade/abi-spec.json](../../../../sources/vespa-engine__vespa/zkfacade/abi-spec.json)<br>[zkfacade/leakage-spec.json](../../../../sources/vespa-engine__vespa/zkfacade/leakage-spec.json)<br>[zkfacade/src/test/java/com/yahoo/vespa/curator/ConnectionSpecTest.java](../../../../sources/vespa-engine__vespa/zkfacade/src/test/java/com/yahoo/vespa/curator/ConnectionSpecTest.java) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 180 | [SECURITY.md](../../../../sources/vespa-engine__vespa/SECURITY.md)<br>[vespalib/src/vespa/vespalib/util/generation_guard.cpp](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/generation_guard.cpp)<br>[vespalib/src/vespa/vespalib/util/generation_guard.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/generation_guard.h)<br>[vespalib/src/vespa/vespalib/util/guard.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/guard.h)<br>[vespalib/src/vespa/vespalib/util/malloc_mmap_guard.cpp](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/malloc_mmap_guard.cpp)<br>[vespalib/src/vespa/vespalib/util/malloc_mmap_guard.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/malloc_mmap_guard.h) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review; large repository scan truncated at 15000 files |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `vespamalloc/src/vespamalloc/util/index.h`, `vespalib/src/vespa/vespalib/util/memory_allocator.h`, `vespalib/src/vespa/vespalib/util/memory_trap.cpp`.
2. Trace execution through entrypoints: `vespaclient/bin/vdsgetsystemstate.sh`, `logserver/src/main/java/com/yahoo/logserver/Server.java`, `logserver/bin/logserver-start.sh`.
3. Map agent/tool runtime through: `vespalib/src/vespa/vespalib/util/executor_idle_tracking.cpp`, `vespalib/src/vespa/vespalib/util/executor_idle_tracking.h`, `vespalib/src/vespa/vespalib/util/executor_stats.h`.
4. Inspect retrieval/memory/indexing through: `vespamalloc/src/vespamalloc/util/index.h`, `vespalib/src/vespa/vespalib/util/memory_allocator.h`, `vespalib/src/vespa/vespalib/util/memory_trap.cpp`.
5. Verify behavior through test/eval files: `zookeeper-server/zookeeper-server-common/src/test/java/com/yahoo/vespa/zookeeper/ConfiguratorTest.java`, `zookeeper-server/zookeeper-server-common/src/test/java/com/yahoo/vespa/zookeeper/ReconfigurerTest.java`, `zookeeper-client-common/src/test/java/com/yahoo/vespa/zookeeper/client/ZkClientConfigBuilderTest.java`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 The AI search platform. 핵심 구조 신호는 Java, pom.xml, README.md, LICENSE, tests, ci이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
