# line/armeria 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Your go-to microservice framework for any situation, from the creator of Netty et al. You can build any type of microservice leveraging your favorite technologies, including gRPC, Thrift, Kotlin, Retrofit, Reactive Streams, Spring Boot and Dropwizard.

## 요약

- 조사 단위: `sources/line__armeria` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 6,248 files, 4,005 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=xds-api/src/main/proto/envoy/extensions/resource_monitors/cgroup_memory/v3/cgroup_memory.proto, xds-api/src/main/proto/envoy/admin/v3/memory.proto, xds-api/src/main/proto/envoy/admin/v2alpha/memory.proto이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | line/armeria |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Java |
| Stars | 5117 |
| Forks | 998 |
| License | Apache-2.0 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/line__armeria](../../../../sources/line__armeria) |
| 기존 보고서 | [reports/korea-trending/repositories/line__armeria.md](../../../korea-trending/repositories/line__armeria.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 6248 / 4005 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .claude, .claude-plugin, .github, ai, annotation-processor, athenz, benchmarks, brave, bucket4j, buildSrc, consul, core, docs-client, dropwizard2, eureka, examples, gradle, graphql, graphql-protocol, grpc |
| 상위 확장자 | .java: 4109, .proto: 703, .mdx: 263, .gradle: 176, .png: 117, .txt: 81, .yml: 72, .scala: 65, .kt: 60, .tsx: 60, (none): 43, .json: 30 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| examples/context-propagation | examples workspace | 14 |
| .github | ci surface | 1 |
| ai | top-level component | 1 |
| annotation-processor | top-level component | 1 |
| athenz | top-level component | 1 |
| benchmarks | validation surface | 1 |
| brave | top-level component | 1 |
| bucket4j | top-level component | 1 |
| buildSrc | source boundary | 1 |
| consul | top-level component | 1 |
| core | top-level component | 1 |
| docs-client | documentation surface | 1 |
| dropwizard2 | top-level component | 1 |
| eureka | top-level component | 1 |
| examples | top-level component | 1 |
| examples/dropwizard | examples workspace | 1 |
| examples/proxy-server | examples workspace | 1 |
| examples/server-sent-events | examples workspace | 1 |


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
| retrieval | [xds-api/src/main/proto/envoy/extensions/resource_monitors/cgroup_memory/v3/cgroup_memory.proto](../../../../sources/line__armeria/xds-api/src/main/proto/envoy/extensions/resource_monitors/cgroup_memory/v3/cgroup_memory.proto) | retrieval signal |
| retrieval | [xds-api/src/main/proto/envoy/admin/v3/memory.proto](../../../../sources/line__armeria/xds-api/src/main/proto/envoy/admin/v3/memory.proto) | retrieval signal |
| retrieval | [xds-api/src/main/proto/envoy/admin/v2alpha/memory.proto](../../../../sources/line__armeria/xds-api/src/main/proto/envoy/admin/v2alpha/memory.proto) | retrieval signal |
| retrieval | [testing-internal/src/main/webapp/index.jsp](../../../../sources/line__armeria/testing-internal/src/main/webapp/index.jsp) | retrieval signal |
| entrypoints | [examples/dropwizard/server.yaml](../../../../sources/line__armeria/examples/dropwizard/server.yaml) | entrypoints signal |
| entrypoints | [docs-client/src/index.css](../../../../sources/line__armeria/docs-client/src/index.css) | entrypoints signal |
| entrypoints | [docs-client/src/index.html](../../../../sources/line__armeria/docs-client/src/index.html) | entrypoints signal |
| entrypoints | [docs-client/src/index.tsx](../../../../sources/line__armeria/docs-client/src/index.tsx) | entrypoints signal |
| docs | [README.md](../../../../sources/line__armeria/README.md) | docs signal |
| docs | [xds/docs/DEVELOPER.md](../../../../sources/line__armeria/xds/docs/DEVELOPER.md) | docs signal |
| docs | [xds/docs/resources/duplicate_resource_nodes.plantuml](../../../../sources/line__armeria/xds/docs/resources/duplicate_resource_nodes.plantuml) | docs signal |
| docs | [xds/docs/resources/duplicate_resource_nodes.png](../../../../sources/line__armeria/xds/docs/resources/duplicate_resource_nodes.png) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 5 | [examples/dropwizard/server.yaml](../../../../sources/line__armeria/examples/dropwizard/server.yaml)<br>[docs-client/src/index.css](../../../../sources/line__armeria/docs-client/src/index.css)<br>[docs-client/src/index.html](../../../../sources/line__armeria/docs-client/src/index.html)<br>[docs-client/src/index.tsx](../../../../sources/line__armeria/docs-client/src/index.tsx)<br>[core/src/main/java/com/linecorp/armeria/server/Server.java](../../../../sources/line__armeria/core/src/main/java/com/linecorp/armeria/server/Server.java) |
| agentRuntime | 48 | [xds-api/tools/API_SHAS](../../../../sources/line__armeria/xds-api/tools/API_SHAS)<br>[xds-api/tools/envoy_release](../../../../sources/line__armeria/xds-api/tools/envoy_release)<br>[xds-api/tools/update-api.sh](../../../../sources/line__armeria/xds-api/tools/update-api.sh)<br>[xds-api/tools/update-sha.sh](../../../../sources/line__armeria/xds-api/tools/update-sha.sh)<br>[xds-api/tools/upstream-patch.sh](../../../../sources/line__armeria/xds-api/tools/upstream-patch.sh)<br>[xds-api/src/main/proto/xds/core/v3/context_params.proto](../../../../sources/line__armeria/xds-api/src/main/proto/xds/core/v3/context_params.proto)<br>[xds-api/src/main/proto/envoy/admin/v3/memory.proto](../../../../sources/line__armeria/xds-api/src/main/proto/envoy/admin/v3/memory.proto)<br>[xds-api/src/main/proto/envoy/admin/v2alpha/memory.proto](../../../../sources/line__armeria/xds-api/src/main/proto/envoy/admin/v2alpha/memory.proto) |
| mcp | 12 | [xds-api/src/main/proto/envoy/extensions/filters/http/mcp_router/v3/mcp_router.proto](../../../../sources/line__armeria/xds-api/src/main/proto/envoy/extensions/filters/http/mcp_router/v3/mcp_router.proto)<br>[xds-api/src/main/proto/envoy/extensions/filters/http/mcp/v3/mcp.proto](../../../../sources/line__armeria/xds-api/src/main/proto/envoy/extensions/filters/http/mcp/v3/mcp.proto)<br>[ai/mcp/build.gradle](../../../../sources/line__armeria/ai/mcp/build.gradle)<br>[ai/mcp/src/test/java/io/modelcontextprotocol/ArmeriaStreamableIntegrationTests.java](../../../../sources/line__armeria/ai/mcp/src/test/java/io/modelcontextprotocol/ArmeriaStreamableIntegrationTests.java)<br>[ai/mcp/src/test/java/com/linecorp/armeria/server/ai/mcp/ArmeriaStatelessIntegrationTests.java](../../../../sources/line__armeria/ai/mcp/src/test/java/com/linecorp/armeria/server/ai/mcp/ArmeriaStatelessIntegrationTests.java)<br>[ai/mcp/src/test/java/com/linecorp/armeria/server/ai/mcp/ArmeriaStreamableMcpAsyncServerTests.java](../../../../sources/line__armeria/ai/mcp/src/test/java/com/linecorp/armeria/server/ai/mcp/ArmeriaStreamableMcpAsyncServerTests.java)<br>[ai/mcp/src/test/java/com/linecorp/armeria/server/ai/mcp/ArmeriaStreamableMcpSyncServerTests.java](../../../../sources/line__armeria/ai/mcp/src/test/java/com/linecorp/armeria/server/ai/mcp/ArmeriaStreamableMcpSyncServerTests.java)<br>[ai/mcp/src/main/java/com/linecorp/armeria/server/ai/mcp/ArmeriaStatelessServerTransport.java](../../../../sources/line__armeria/ai/mcp/src/main/java/com/linecorp/armeria/server/ai/mcp/ArmeriaStatelessServerTransport.java) |
| retrieval | 44 | [xds-api/src/main/proto/envoy/extensions/resource_monitors/cgroup_memory/v3/cgroup_memory.proto](../../../../sources/line__armeria/xds-api/src/main/proto/envoy/extensions/resource_monitors/cgroup_memory/v3/cgroup_memory.proto)<br>[xds-api/src/main/proto/envoy/admin/v3/memory.proto](../../../../sources/line__armeria/xds-api/src/main/proto/envoy/admin/v3/memory.proto)<br>[xds-api/src/main/proto/envoy/admin/v2alpha/memory.proto](../../../../sources/line__armeria/xds-api/src/main/proto/envoy/admin/v2alpha/memory.proto)<br>[testing-internal/src/main/webapp/index.jsp](../../../../sources/line__armeria/testing-internal/src/main/webapp/index.jsp)<br>[testing-internal/src/main/webapp/日本語/index.jsp](../../../../sources/line__armeria/testing-internal/src/main/webapp/日本語/index.jsp)<br>[site-new/src/theme/NotFound/Content/index.module.css](../../../../sources/line__armeria/site-new/src/theme/NotFound/Content/index.module.css)<br>[site-new/src/theme/NotFound/Content/index.tsx](../../../../sources/line__armeria/site-new/src/theme/NotFound/Content/index.tsx)<br>[site-new/src/theme/Layout/index.tsx](../../../../sources/line__armeria/site-new/src/theme/Layout/index.tsx) |
| spec | 14 | [site-new/src/design/armeria_draft.pdf](../../../../sources/line__armeria/site-new/src/design/armeria_draft.pdf)<br>[site-new/src/design/armeria_guideline.pdf](../../../../sources/line__armeria/site-new/src/design/armeria_guideline.pdf)<br>[site-new/src/design/armeria_icon_and_text_horiz_grayscale.svg](../../../../sources/line__armeria/site-new/src/design/armeria_icon_and_text_horiz_grayscale.svg)<br>[site-new/src/design/armeria_icon_and_text_horiz_inverted_grayscale.svg](../../../../sources/line__armeria/site-new/src/design/armeria_icon_and_text_horiz_inverted_grayscale.svg)<br>[site-new/src/design/armeria_icon_and_text_horiz_inverted_pink.svg](../../../../sources/line__armeria/site-new/src/design/armeria_icon_and_text_horiz_inverted_pink.svg)<br>[site-new/src/design/armeria_icon_and_text_horiz_inverted.svg](../../../../sources/line__armeria/site-new/src/design/armeria_icon_and_text_horiz_inverted.svg)<br>[site-new/src/design/armeria_icon_and_text_horiz.svg](../../../../sources/line__armeria/site-new/src/design/armeria_icon_and_text_horiz.svg)<br>[site-new/src/design/armeria_icon_and_text_vert.svg](../../../../sources/line__armeria/site-new/src/design/armeria_icon_and_text_vert.svg) |
| eval | 1774 | [zookeeper3/src/test/java/com/linecorp/armeria/server/zookeeper/CuratorServiceDiscoveryCompatibilityTest.java](../../../../sources/line__armeria/zookeeper3/src/test/java/com/linecorp/armeria/server/zookeeper/CuratorServiceDiscoveryCompatibilityTest.java)<br>[zookeeper3/src/test/java/com/linecorp/armeria/server/zookeeper/CuratorServiceExternalClientUsageTest.java](../../../../sources/line__armeria/zookeeper3/src/test/java/com/linecorp/armeria/server/zookeeper/CuratorServiceExternalClientUsageTest.java)<br>[zookeeper3/src/test/java/com/linecorp/armeria/server/zookeeper/ServerSetRegistrationTest.java](../../../../sources/line__armeria/zookeeper3/src/test/java/com/linecorp/armeria/server/zookeeper/ServerSetRegistrationTest.java)<br>[zookeeper3/src/test/java/com/linecorp/armeria/server/zookeeper/ZooKeeperRegistrationTest.java](../../../../sources/line__armeria/zookeeper3/src/test/java/com/linecorp/armeria/server/zookeeper/ZooKeeperRegistrationTest.java)<br>[zookeeper3/src/test/java/com/linecorp/armeria/common/zookeeper/ZooKeeperExtension.java](../../../../sources/line__armeria/zookeeper3/src/test/java/com/linecorp/armeria/common/zookeeper/ZooKeeperExtension.java)<br>[zookeeper3/src/test/java/com/linecorp/armeria/common/zookeeper/ZooKeeperTestUtil.java](../../../../sources/line__armeria/zookeeper3/src/test/java/com/linecorp/armeria/common/zookeeper/ZooKeeperTestUtil.java)<br>[zookeeper3/src/test/java/com/linecorp/armeria/common/zookeeper/ZooKeeperTestUtilTest.java](../../../../sources/line__armeria/zookeeper3/src/test/java/com/linecorp/armeria/common/zookeeper/ZooKeeperTestUtilTest.java)<br>[zookeeper3/src/test/java/com/linecorp/armeria/client/zookeeper/CuratorDiscoverySpecTest.java](../../../../sources/line__armeria/zookeeper3/src/test/java/com/linecorp/armeria/client/zookeeper/CuratorDiscoverySpecTest.java) |
| security | 153 | [xds-api/src/main/proto/xds/annotations/v3/security.proto](../../../../sources/line__armeria/xds-api/src/main/proto/xds/annotations/v3/security.proto)<br>[xds-api/src/main/proto/udpa/annotations/security.proto](../../../../sources/line__armeria/xds-api/src/main/proto/udpa/annotations/security.proto)<br>[xds-api/src/main/proto/envoy/type/hash_policy.proto](../../../../sources/line__armeria/xds-api/src/main/proto/envoy/type/hash_policy.proto)<br>[xds-api/src/main/proto/envoy/type/v3/hash_policy.proto](../../../../sources/line__armeria/xds-api/src/main/proto/envoy/type/v3/hash_policy.proto)<br>[xds-api/src/main/proto/envoy/service/secret/v3/sds.proto](../../../../sources/line__armeria/xds-api/src/main/proto/envoy/service/secret/v3/sds.proto)<br>[xds-api/src/main/proto/envoy/service/redis_auth/v3/redis_external_auth.proto](../../../../sources/line__armeria/xds-api/src/main/proto/envoy/service/redis_auth/v3/redis_external_auth.proto)<br>[xds-api/src/main/proto/envoy/service/auth/v3/attribute_context.proto](../../../../sources/line__armeria/xds-api/src/main/proto/envoy/service/auth/v3/attribute_context.proto)<br>[xds-api/src/main/proto/envoy/service/auth/v3/external_auth.proto](../../../../sources/line__armeria/xds-api/src/main/proto/envoy/service/auth/v3/external_auth.proto) |
| ci | 12 | [.github/workflows/actions_build.yml](../../../../sources/line__armeria/.github/workflows/actions_build.yml)<br>[.github/workflows/e2e-chaos-tests.yml](../../../../sources/line__armeria/.github/workflows/e2e-chaos-tests.yml)<br>[.github/workflows/gradle-cache-check.yml](../../../../sources/line__armeria/.github/workflows/gradle-cache-check.yml)<br>[.github/workflows/gradle-enterprise-postjob.yml](../../../../sources/line__armeria/.github/workflows/gradle-enterprise-postjob.yml)<br>[.github/workflows/pr-stale.yml](../../../../sources/line__armeria/.github/workflows/pr-stale.yml)<br>[.github/workflows/public-suffixes.yml](../../../../sources/line__armeria/.github/workflows/public-suffixes.yml)<br>[.github/workflows/publish-release.yml](../../../../sources/line__armeria/.github/workflows/publish-release.yml)<br>[.github/workflows/publish-site.yml](../../../../sources/line__armeria/.github/workflows/publish-site.yml) |
| container | 51 | [kubernetes/build.gradle.kts](../../../../sources/line__armeria/kubernetes/build.gradle.kts)<br>[kubernetes/src/test/resources/META-INF/services/com.linecorp.armeria.common.FlagsProvider](../../../../sources/line__armeria/kubernetes/src/test/resources/META-INF/services/com.linecorp.armeria.common.FlagsProvider)<br>[kubernetes/src/test/resources/META-INF/services/reactor.blockhound.integration.BlockHoundIntegration](../../../../sources/line__armeria/kubernetes/src/test/resources/META-INF/services/reactor.blockhound.integration.BlockHoundIntegration)<br>[kubernetes/src/test/java/com/linecorp/armeria/client/kubernetes/ArmeriaAsyncBodyTest.java](../../../../sources/line__armeria/kubernetes/src/test/java/com/linecorp/armeria/client/kubernetes/ArmeriaAsyncBodyTest.java)<br>[kubernetes/src/test/java/com/linecorp/armeria/client/kubernetes/ArmeriaHttpClientNewWebSocketBuilderTest.java](../../../../sources/line__armeria/kubernetes/src/test/java/com/linecorp/armeria/client/kubernetes/ArmeriaHttpClientNewWebSocketBuilderTest.java)<br>[kubernetes/src/test/java/com/linecorp/armeria/client/kubernetes/ArmeriaHttpClientProxyTest.java](../../../../sources/line__armeria/kubernetes/src/test/java/com/linecorp/armeria/client/kubernetes/ArmeriaHttpClientProxyTest.java)<br>[kubernetes/src/test/java/com/linecorp/armeria/client/kubernetes/ArmeriaHttpClientTest.java](../../../../sources/line__armeria/kubernetes/src/test/java/com/linecorp/armeria/client/kubernetes/ArmeriaHttpClientTest.java)<br>[kubernetes/src/test/java/com/linecorp/armeria/client/kubernetes/ArmeriaHttpConfiguredClientTest.java](../../../../sources/line__armeria/kubernetes/src/test/java/com/linecorp/armeria/client/kubernetes/ArmeriaHttpConfiguredClientTest.java) |
| instruction | 0 | 명확하지 않음 |
| docs | 144 | [README.md](../../../../sources/line__armeria/README.md)<br>[xds/docs/DEVELOPER.md](../../../../sources/line__armeria/xds/docs/DEVELOPER.md)<br>[xds/docs/resources/duplicate_resource_nodes.plantuml](../../../../sources/line__armeria/xds/docs/resources/duplicate_resource_nodes.plantuml)<br>[xds/docs/resources/duplicate_resource_nodes.png](../../../../sources/line__armeria/xds/docs/resources/duplicate_resource_nodes.png)<br>[xds/docs/resources/resource_tree.plantuml](../../../../sources/line__armeria/xds/docs/resources/resource_tree.plantuml)<br>[xds/docs/resources/resource_tree.png](../../../../sources/line__armeria/xds/docs/resources/resource_tree.png)<br>[site-new/docusaurus.config.ts](../../../../sources/line__armeria/site-new/docusaurus.config.ts)<br>[site-new/README.md](../../../../sources/line__armeria/site-new/README.md) |
| config | 6 | [site-new/package.json](../../../../sources/line__armeria/site-new/package.json)<br>[site-new/tsconfig.json](../../../../sources/line__armeria/site-new/tsconfig.json)<br>[docs-client/package.json](../../../../sources/line__armeria/docs-client/package.json)<br>[docs-client/tsconfig.json](../../../../sources/line__armeria/docs-client/tsconfig.json)<br>[.github/actions/package.json](../../../../sources/line__armeria/.github/actions/package.json)<br>[.github/actions/tsconfig.json](../../../../sources/line__armeria/.github/actions/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1774 | [zookeeper3/src/test/java/com/linecorp/armeria/server/zookeeper/CuratorServiceDiscoveryCompatibilityTest.java](../../../../sources/line__armeria/zookeeper3/src/test/java/com/linecorp/armeria/server/zookeeper/CuratorServiceDiscoveryCompatibilityTest.java)<br>[zookeeper3/src/test/java/com/linecorp/armeria/server/zookeeper/CuratorServiceExternalClientUsageTest.java](../../../../sources/line__armeria/zookeeper3/src/test/java/com/linecorp/armeria/server/zookeeper/CuratorServiceExternalClientUsageTest.java)<br>[zookeeper3/src/test/java/com/linecorp/armeria/server/zookeeper/ServerSetRegistrationTest.java](../../../../sources/line__armeria/zookeeper3/src/test/java/com/linecorp/armeria/server/zookeeper/ServerSetRegistrationTest.java)<br>[zookeeper3/src/test/java/com/linecorp/armeria/server/zookeeper/ZooKeeperRegistrationTest.java](../../../../sources/line__armeria/zookeeper3/src/test/java/com/linecorp/armeria/server/zookeeper/ZooKeeperRegistrationTest.java)<br>[zookeeper3/src/test/java/com/linecorp/armeria/common/zookeeper/ZooKeeperExtension.java](../../../../sources/line__armeria/zookeeper3/src/test/java/com/linecorp/armeria/common/zookeeper/ZooKeeperExtension.java)<br>[zookeeper3/src/test/java/com/linecorp/armeria/common/zookeeper/ZooKeeperTestUtil.java](../../../../sources/line__armeria/zookeeper3/src/test/java/com/linecorp/armeria/common/zookeeper/ZooKeeperTestUtil.java) |
| CI workflow | 12 | [.github/workflows/actions_build.yml](../../../../sources/line__armeria/.github/workflows/actions_build.yml)<br>[.github/workflows/e2e-chaos-tests.yml](../../../../sources/line__armeria/.github/workflows/e2e-chaos-tests.yml)<br>[.github/workflows/gradle-cache-check.yml](../../../../sources/line__armeria/.github/workflows/gradle-cache-check.yml)<br>[.github/workflows/gradle-enterprise-postjob.yml](../../../../sources/line__armeria/.github/workflows/gradle-enterprise-postjob.yml)<br>[.github/workflows/pr-stale.yml](../../../../sources/line__armeria/.github/workflows/pr-stale.yml)<br>[.github/workflows/public-suffixes.yml](../../../../sources/line__armeria/.github/workflows/public-suffixes.yml) |
| 컨테이너/배포 | 51 | [kubernetes/build.gradle.kts](../../../../sources/line__armeria/kubernetes/build.gradle.kts)<br>[kubernetes/src/test/resources/META-INF/services/com.linecorp.armeria.common.FlagsProvider](../../../../sources/line__armeria/kubernetes/src/test/resources/META-INF/services/com.linecorp.armeria.common.FlagsProvider)<br>[kubernetes/src/test/resources/META-INF/services/reactor.blockhound.integration.BlockHoundIntegration](../../../../sources/line__armeria/kubernetes/src/test/resources/META-INF/services/reactor.blockhound.integration.BlockHoundIntegration)<br>[kubernetes/src/test/java/com/linecorp/armeria/client/kubernetes/ArmeriaAsyncBodyTest.java](../../../../sources/line__armeria/kubernetes/src/test/java/com/linecorp/armeria/client/kubernetes/ArmeriaAsyncBodyTest.java)<br>[kubernetes/src/test/java/com/linecorp/armeria/client/kubernetes/ArmeriaHttpClientNewWebSocketBuilderTest.java](../../../../sources/line__armeria/kubernetes/src/test/java/com/linecorp/armeria/client/kubernetes/ArmeriaHttpClientNewWebSocketBuilderTest.java)<br>[kubernetes/src/test/java/com/linecorp/armeria/client/kubernetes/ArmeriaHttpClientProxyTest.java](../../../../sources/line__armeria/kubernetes/src/test/java/com/linecorp/armeria/client/kubernetes/ArmeriaHttpClientProxyTest.java) |
| 보안/정책 | 153 | [xds-api/src/main/proto/xds/annotations/v3/security.proto](../../../../sources/line__armeria/xds-api/src/main/proto/xds/annotations/v3/security.proto)<br>[xds-api/src/main/proto/udpa/annotations/security.proto](../../../../sources/line__armeria/xds-api/src/main/proto/udpa/annotations/security.proto)<br>[xds-api/src/main/proto/envoy/type/hash_policy.proto](../../../../sources/line__armeria/xds-api/src/main/proto/envoy/type/hash_policy.proto)<br>[xds-api/src/main/proto/envoy/type/v3/hash_policy.proto](../../../../sources/line__armeria/xds-api/src/main/proto/envoy/type/v3/hash_policy.proto)<br>[xds-api/src/main/proto/envoy/service/secret/v3/sds.proto](../../../../sources/line__armeria/xds-api/src/main/proto/envoy/service/secret/v3/sds.proto)<br>[xds-api/src/main/proto/envoy/service/redis_auth/v3/redis_external_auth.proto](../../../../sources/line__armeria/xds-api/src/main/proto/envoy/service/redis_auth/v3/redis_external_auth.proto) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `xds-api/src/main/proto/envoy/extensions/resource_monitors/cgroup_memory/v3/cgroup_memory.proto`, `xds-api/src/main/proto/envoy/admin/v3/memory.proto`, `xds-api/src/main/proto/envoy/admin/v2alpha/memory.proto`.
2. entrypoint를 따라 실행 흐름 확인: `examples/dropwizard/server.yaml`, `docs-client/src/index.css`, `docs-client/src/index.html`.
3. agent/tool runtime 매핑: `xds-api/tools/API_SHAS`, `xds-api/tools/envoy_release`, `xds-api/tools/update-api.sh`.
4. retrieval/memory/indexing 확인: `xds-api/src/main/proto/envoy/extensions/resource_monitors/cgroup_memory/v3/cgroup_memory.proto`, `xds-api/src/main/proto/envoy/admin/v3/memory.proto`, `xds-api/src/main/proto/envoy/admin/v2alpha/memory.proto`.
5. test/eval 파일로 동작 검증: `zookeeper3/src/test/java/com/linecorp/armeria/server/zookeeper/CuratorServiceDiscoveryCompatibilityTest.java`, `zookeeper3/src/test/java/com/linecorp/armeria/server/zookeeper/CuratorServiceExternalClientUsageTest.java`, `zookeeper3/src/test/java/com/linecorp/armeria/server/zookeeper/ServerSetRegistrationTest.java`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Your go to microservice framework for any situation, from the creator of Netty et al. You can build any type of microser. 핵심 구조 신호는 Java, build.gradle, README.md, tests, ci, docs이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
