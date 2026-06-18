# vespa-engine/vespa 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

The AI search platform

## 요약

- 조사 단위: `sources/vespa-engine__vespa` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 15,000 files, 3,346 directories, depth score 107, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=vespamalloc/src/vespamalloc/util/index.h, vespalib/src/vespa/vespalib/util/memory_allocator.h, vespalib/src/vespa/vespalib/util/memory_trap.cpp이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | vespa-engine/vespa |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Java |
| Stars | 6962 |
| Forks | 720 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/vespa-engine__vespa](../../../../sources/vespa-engine__vespa) |
| 기존 보고서 | [reports/global-trending/repositories/vespa-engine__vespa.md](../../../global-trending/repositories/vespa-engine__vespa.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 15000 / 3346 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .buildkite, .copr, .github, abi-check-plugin, annotations, application, bundle-plugin, bundle-plugin-test, client, cloud, clustercontroller-apps, clustercontroller-core, clustercontroller-reindexer, clustercontroller-utils, cmake, component, config, config-application-package, config-bundle, config-class-plugin |
| 상위 확장자 | .cpp: 3851, .java: 3742, .h: 3372, .txt: 1193, (none): 1170, .cfg: 224, .dat: 192, .xml: 179, .hpp: 158, .sh: 130, .json: 99, .tbf: 98 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [vespaclient/bin/vdsgetsystemstate.sh](../../../../sources/vespa-engine__vespa/vespaclient/bin/vdsgetsystemstate.sh)<br>[logserver/src/main/java/com/yahoo/logserver/Server.java](../../../../sources/vespa-engine__vespa/logserver/src/main/java/com/yahoo/logserver/Server.java)<br>[logserver/bin/logserver-start.sh](../../../../sources/vespa-engine__vespa/logserver/bin/logserver-start.sh)<br>[integration/tmgrammar/playground/main.js](../../../../sources/vespa-engine__vespa/integration/tmgrammar/playground/main.js) |
| agentRuntime | 136 | [vespalib/src/vespa/vespalib/util/executor_idle_tracking.cpp](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/executor_idle_tracking.cpp)<br>[vespalib/src/vespa/vespalib/util/executor_idle_tracking.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/executor_idle_tracking.h)<br>[vespalib/src/vespa/vespalib/util/executor_stats.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/executor_stats.h)<br>[vespalib/src/vespa/vespalib/util/executor.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/executor.h)<br>[vespalib/src/vespa/vespalib/util/memory_allocator.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/memory_allocator.h)<br>[vespalib/src/vespa/vespalib/util/memory_trap.cpp](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/memory_trap.cpp)<br>[vespalib/src/vespa/vespalib/util/memory_trap.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/memory_trap.h)<br>[vespalib/src/vespa/vespalib/util/memory.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/memory.h) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 466 | [vespamalloc/src/vespamalloc/util/index.h](../../../../sources/vespa-engine__vespa/vespamalloc/src/vespamalloc/util/index.h)<br>[vespalib/src/vespa/vespalib/util/memory_allocator.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/memory_allocator.h)<br>[vespalib/src/vespa/vespalib/util/memory_trap.cpp](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/memory_trap.cpp)<br>[vespalib/src/vespa/vespalib/util/memory_trap.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/memory_trap.h)<br>[vespalib/src/vespa/vespalib/util/memory.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/memory.h)<br>[vespalib/src/vespa/vespalib/util/process_memory_stats.cpp](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/process_memory_stats.cpp)<br>[vespalib/src/vespa/vespalib/util/process_memory_stats.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/process_memory_stats.h)<br>[vespalib/src/vespa/vespalib/util/small_vector.cpp](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/small_vector.cpp) |
| spec | 81 | [zkfacade/abi-spec.json](../../../../sources/vespa-engine__vespa/zkfacade/abi-spec.json)<br>[zkfacade/leakage-spec.json](../../../../sources/vespa-engine__vespa/zkfacade/leakage-spec.json)<br>[vespalog/abi-spec.json](../../../../sources/vespa-engine__vespa/vespalog/abi-spec.json)<br>[vespalog/leakage-spec.json](../../../../sources/vespa-engine__vespa/vespalog/leakage-spec.json)<br>[vespalib/src/vespa/vespalib/net/socket_spec.cpp](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/net/socket_spec.cpp)<br>[vespalib/src/vespa/vespalib/net/socket_spec.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/net/socket_spec.h)<br>[vespalib/src/vespa/vespalib/datastore/compaction_spec.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/datastore/compaction_spec.h)<br>[vespalib/src/tests/net/socket_spec/CMakeLists.txt](../../../../sources/vespa-engine__vespa/vespalib/src/tests/net/socket_spec/CMakeLists.txt) |
| eval | 5808 | [zookeeper-server/zookeeper-server-common/src/test/java/com/yahoo/vespa/zookeeper/ConfiguratorTest.java](../../../../sources/vespa-engine__vespa/zookeeper-server/zookeeper-server-common/src/test/java/com/yahoo/vespa/zookeeper/ConfiguratorTest.java)<br>[zookeeper-server/zookeeper-server-common/src/test/java/com/yahoo/vespa/zookeeper/ReconfigurerTest.java](../../../../sources/vespa-engine__vespa/zookeeper-server/zookeeper-server-common/src/test/java/com/yahoo/vespa/zookeeper/ReconfigurerTest.java)<br>[zookeeper-client-common/src/test/java/com/yahoo/vespa/zookeeper/client/ZkClientConfigBuilderTest.java](../../../../sources/vespa-engine__vespa/zookeeper-client-common/src/test/java/com/yahoo/vespa/zookeeper/client/ZkClientConfigBuilderTest.java)<br>[zkfacade/abi-spec.json](../../../../sources/vespa-engine__vespa/zkfacade/abi-spec.json)<br>[zkfacade/leakage-spec.json](../../../../sources/vespa-engine__vespa/zkfacade/leakage-spec.json)<br>[zkfacade/src/test/java/com/yahoo/vespa/curator/ConnectionSpecTest.java](../../../../sources/vespa-engine__vespa/zkfacade/src/test/java/com/yahoo/vespa/curator/ConnectionSpecTest.java)<br>[zkfacade/src/test/java/com/yahoo/vespa/curator/CuratorCompletionWaiterTest.java](../../../../sources/vespa-engine__vespa/zkfacade/src/test/java/com/yahoo/vespa/curator/CuratorCompletionWaiterTest.java)<br>[zkfacade/src/test/java/com/yahoo/vespa/curator/CuratorCounterTest.java](../../../../sources/vespa-engine__vespa/zkfacade/src/test/java/com/yahoo/vespa/curator/CuratorCounterTest.java) |
| security | 180 | [SECURITY.md](../../../../sources/vespa-engine__vespa/SECURITY.md)<br>[vespalib/src/vespa/vespalib/util/generation_guard.cpp](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/generation_guard.cpp)<br>[vespalib/src/vespa/vespalib/util/generation_guard.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/generation_guard.h)<br>[vespalib/src/vespa/vespalib/util/guard.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/guard.h)<br>[vespalib/src/vespa/vespalib/util/malloc_mmap_guard.cpp](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/malloc_mmap_guard.cpp)<br>[vespalib/src/vespa/vespalib/util/malloc_mmap_guard.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/malloc_mmap_guard.h)<br>[vespalib/src/vespa/vespalib/util/retain_guard.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/retain_guard.h)<br>[vespalib/src/vespa/vespalib/test/peer_policy_utils.cpp](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/test/peer_policy_utils.cpp) |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 159 | [README-cmake.md](../../../../sources/vespa-engine__vespa/README-cmake.md)<br>[README.md](../../../../sources/vespa-engine__vespa/README.md)<br>[zookeeper-server/README](../../../../sources/vespa-engine__vespa/zookeeper-server/README)<br>[zookeeper-server/src/main/javadoc/README](../../../../sources/vespa-engine__vespa/zookeeper-server/src/main/javadoc/README)<br>[zookeeper-common/README.md](../../../../sources/vespa-engine__vespa/zookeeper-common/README.md)<br>[zookeeper-common/src/main/javadoc/README](../../../../sources/vespa-engine__vespa/zookeeper-common/src/main/javadoc/README)<br>[zookeeper-command-line-client/README](../../../../sources/vespa-engine__vespa/zookeeper-command-line-client/README)<br>[zookeeper-command-line-client/src/main/javadoc/README](../../../../sources/vespa-engine__vespa/zookeeper-command-line-client/src/main/javadoc/README) |
| config | 4 | [integration/tmgrammar/tools/package.json](../../../../sources/vespa-engine__vespa/integration/tmgrammar/tools/package.json)<br>[integration/tmgrammar/playground/package.json](../../../../sources/vespa-engine__vespa/integration/tmgrammar/playground/package.json)<br>[integration/schema-language-server/clients/vscode/package.json](../../../../sources/vespa-engine__vespa/integration/schema-language-server/clients/vscode/package.json)<br>[integration/schema-language-server/clients/vscode/tsconfig.json](../../../../sources/vespa-engine__vespa/integration/schema-language-server/clients/vscode/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 5808 | [zookeeper-server/zookeeper-server-common/src/test/java/com/yahoo/vespa/zookeeper/ConfiguratorTest.java](../../../../sources/vespa-engine__vespa/zookeeper-server/zookeeper-server-common/src/test/java/com/yahoo/vespa/zookeeper/ConfiguratorTest.java)<br>[zookeeper-server/zookeeper-server-common/src/test/java/com/yahoo/vespa/zookeeper/ReconfigurerTest.java](../../../../sources/vespa-engine__vespa/zookeeper-server/zookeeper-server-common/src/test/java/com/yahoo/vespa/zookeeper/ReconfigurerTest.java)<br>[zookeeper-client-common/src/test/java/com/yahoo/vespa/zookeeper/client/ZkClientConfigBuilderTest.java](../../../../sources/vespa-engine__vespa/zookeeper-client-common/src/test/java/com/yahoo/vespa/zookeeper/client/ZkClientConfigBuilderTest.java)<br>[zkfacade/abi-spec.json](../../../../sources/vespa-engine__vespa/zkfacade/abi-spec.json)<br>[zkfacade/leakage-spec.json](../../../../sources/vespa-engine__vespa/zkfacade/leakage-spec.json)<br>[zkfacade/src/test/java/com/yahoo/vespa/curator/ConnectionSpecTest.java](../../../../sources/vespa-engine__vespa/zkfacade/src/test/java/com/yahoo/vespa/curator/ConnectionSpecTest.java) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 180 | [SECURITY.md](../../../../sources/vespa-engine__vespa/SECURITY.md)<br>[vespalib/src/vespa/vespalib/util/generation_guard.cpp](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/generation_guard.cpp)<br>[vespalib/src/vespa/vespalib/util/generation_guard.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/generation_guard.h)<br>[vespalib/src/vespa/vespalib/util/guard.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/guard.h)<br>[vespalib/src/vespa/vespalib/util/malloc_mmap_guard.cpp](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/malloc_mmap_guard.cpp)<br>[vespalib/src/vespa/vespalib/util/malloc_mmap_guard.h](../../../../sources/vespa-engine__vespa/vespalib/src/vespa/vespalib/util/malloc_mmap_guard.h) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요; 큰 레포라 15000개 파일에서 스캔이 잘림 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `vespamalloc/src/vespamalloc/util/index.h`, `vespalib/src/vespa/vespalib/util/memory_allocator.h`, `vespalib/src/vespa/vespalib/util/memory_trap.cpp`.
2. entrypoint를 따라 실행 흐름 확인: `vespaclient/bin/vdsgetsystemstate.sh`, `logserver/src/main/java/com/yahoo/logserver/Server.java`, `logserver/bin/logserver-start.sh`.
3. agent/tool runtime 매핑: `vespalib/src/vespa/vespalib/util/executor_idle_tracking.cpp`, `vespalib/src/vespa/vespalib/util/executor_idle_tracking.h`, `vespalib/src/vespa/vespalib/util/executor_stats.h`.
4. retrieval/memory/indexing 확인: `vespamalloc/src/vespamalloc/util/index.h`, `vespalib/src/vespa/vespalib/util/memory_allocator.h`, `vespalib/src/vespa/vespalib/util/memory_trap.cpp`.
5. test/eval 파일로 동작 검증: `zookeeper-server/zookeeper-server-common/src/test/java/com/yahoo/vespa/zookeeper/ConfiguratorTest.java`, `zookeeper-server/zookeeper-server-common/src/test/java/com/yahoo/vespa/zookeeper/ReconfigurerTest.java`, `zookeeper-client-common/src/test/java/com/yahoo/vespa/zookeeper/client/ZkClientConfigBuilderTest.java`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 The AI search platform. 핵심 구조 신호는 Java, pom.xml, README.md, LICENSE, tests, ci이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
