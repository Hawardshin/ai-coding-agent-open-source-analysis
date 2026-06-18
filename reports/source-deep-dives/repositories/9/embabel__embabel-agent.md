# embabel/embabel-agent 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Agent framework for the JVM. Pronounced Em-BAY-bel /ɛmˈbeɪbəl/

## 요약

- 조사 단위: `sources/embabel__embabel-agent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,799 files, 1,508 directories, depth score 112, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=embabel-agent-mcp/pom.xml, embabel-agent-mcp/embabel-agent-mcpserver/pom.xml, embabel-agent-mcp/embabel-agent-mcpserver/src/test/kotlin/com/embabel/agent/mcpserver/AbstractMcpServerConfigurationTest.kt이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | embabel/embabel-agent |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Kotlin |
| Stars | 3683 |
| Forks | 361 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/embabel__embabel-agent](../../../../sources/embabel__embabel-agent) |
| 기존 보고서 | [reports/global-trending/repositories/embabel__embabel-agent.md](../../../global-trending/repositories/embabel__embabel-agent.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1799 / 1508 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .github, embabel-agent-a2a, embabel-agent-api, embabel-agent-autoconfigure, embabel-agent-code, embabel-agent-common, embabel-agent-dependencies, embabel-agent-docs, embabel-agent-domain, embabel-agent-mcp, embabel-agent-observability, embabel-agent-onnx, embabel-agent-openai, embabel-agent-rag, embabel-agent-shell, embabel-agent-skills, embabel-agent-starters, embabel-agent-test-support, images, specs |
| 상위 확장자 | .kt: 1303, .java: 192, .xml: 76, .adoc: 67, .md: 41, (none): 24, .imports: 21, .yml: 20, .properties: 9, .dot: 7, .png: 7, .txt: 6 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| embabel-agent-a2a | top-level component | 1 |
| embabel-agent-api | source boundary | 1 |
| embabel-agent-autoconfigure | top-level component | 1 |
| embabel-agent-code | top-level component | 1 |
| embabel-agent-common | top-level component | 1 |
| embabel-agent-dependencies | ci surface | 1 |
| embabel-agent-docs | documentation surface | 1 |
| embabel-agent-domain | top-level component | 1 |
| embabel-agent-mcp | top-level component | 1 |
| embabel-agent-observability | top-level component | 1 |
| embabel-agent-onnx | top-level component | 1 |
| embabel-agent-openai | top-level component | 1 |
| embabel-agent-rag | top-level component | 1 |
| embabel-agent-shell | top-level component | 1 |
| embabel-agent-skills | top-level component | 1 |
| embabel-agent-starters | top-level component | 1 |
| embabel-agent-test-support | validation surface | 1 |


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
| mcp | [embabel-agent-mcp/pom.xml](../../../../sources/embabel__embabel-agent/embabel-agent-mcp/pom.xml) | mcp signal |
| mcp | [embabel-agent-mcp/embabel-agent-mcpserver/pom.xml](../../../../sources/embabel__embabel-agent/embabel-agent-mcp/embabel-agent-mcpserver/pom.xml) | mcp signal |
| mcp | [embabel-agent-mcp/embabel-agent-mcpserver/src/test/kotlin/com/embabel/agent/mcpserver/AbstractMcpServerConfigurationTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-mcp/embabel-agent-mcpserver/src/test/kotlin/com/embabel/agent/mcpserver/AbstractMcpServerConfigurationTest.kt) | mcp signal |
| mcp | [embabel-agent-mcp/embabel-agent-mcpserver/src/test/kotlin/com/embabel/agent/mcpserver/McpToolExportTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-mcp/embabel-agent-mcpserver/src/test/kotlin/com/embabel/agent/mcpserver/McpToolExportTest.kt) | mcp signal |
| agentRuntime | [embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/AgentTestApplicationTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/AgentTestApplicationTest.kt) | agentRuntime signal |
| agentRuntime | [embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/test/type/TestTypesTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/test/type/TestTypesTest.kt) | agentRuntime signal |
| agentRuntime | [embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/test/models/OptionsConverterTestSupportTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/test/models/OptionsConverterTestSupportTest.kt) | agentRuntime signal |
| agentRuntime | [embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/test/dsl/AgentBuilderUtilsTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/test/dsl/AgentBuilderUtilsTest.kt) | agentRuntime signal |
| instruction | [CLAUDE.md](../../../../sources/embabel__embabel-agent/CLAUDE.md) | instruction signal |
| ci | [embabel-agent-code/src/test/kotlin/com/embabel/coding/tools/ci/CiDataClassesTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-code/src/test/kotlin/com/embabel/coding/tools/ci/CiDataClassesTest.kt) | ci support |
| ci | [embabel-agent-code/src/test/kotlin/com/embabel/coding/tools/ci/CiToolsTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-code/src/test/kotlin/com/embabel/coding/tools/ci/CiToolsTest.kt) | ci support |
| container | [embabel-agent-skills/docker/Dockerfile](../../../../sources/embabel__embabel-agent/embabel-agent-skills/docker/Dockerfile) | container support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 1364 | [embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/AgentTestApplicationTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/AgentTestApplicationTest.kt)<br>[embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/test/type/TestTypesTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/test/type/TestTypesTest.kt)<br>[embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/test/models/OptionsConverterTestSupportTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/test/models/OptionsConverterTestSupportTest.kt)<br>[embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/test/dsl/AgentBuilderUtilsTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/test/dsl/AgentBuilderUtilsTest.kt)<br>[embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/test/dsl/DslAgentsTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/test/dsl/DslAgentsTest.kt)<br>[embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/test/domain/GardenOfEdenTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/test/domain/GardenOfEdenTest.kt)<br>[embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/test/domain/SimplyMagicTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/test/domain/SimplyMagicTest.kt)<br>[embabel-agent-test-support/embabel-agent-test-internal/src/main/kotlin/com/embabel/agent/AgentTestApplication.kt](../../../../sources/embabel__embabel-agent/embabel-agent-test-support/embabel-agent-test-internal/src/main/kotlin/com/embabel/agent/AgentTestApplication.kt) |
| mcp | 56 | [embabel-agent-mcp/pom.xml](../../../../sources/embabel__embabel-agent/embabel-agent-mcp/pom.xml)<br>[embabel-agent-mcp/embabel-agent-mcpserver/pom.xml](../../../../sources/embabel__embabel-agent/embabel-agent-mcp/embabel-agent-mcpserver/pom.xml)<br>[embabel-agent-mcp/embabel-agent-mcpserver/src/test/kotlin/com/embabel/agent/mcpserver/AbstractMcpServerConfigurationTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-mcp/embabel-agent-mcpserver/src/test/kotlin/com/embabel/agent/mcpserver/AbstractMcpServerConfigurationTest.kt)<br>[embabel-agent-mcp/embabel-agent-mcpserver/src/test/kotlin/com/embabel/agent/mcpserver/McpToolExportTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-mcp/embabel-agent-mcpserver/src/test/kotlin/com/embabel/agent/mcpserver/McpToolExportTest.kt)<br>[embabel-agent-mcp/embabel-agent-mcpserver/src/test/kotlin/com/embabel/agent/mcpserver/ServerInfoFactoryAndUnifiedBannerToolTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-mcp/embabel-agent-mcpserver/src/test/kotlin/com/embabel/agent/mcpserver/ServerInfoFactoryAndUnifiedBannerToolTest.kt)<br>[embabel-agent-mcp/embabel-agent-mcpserver/src/test/kotlin/com/embabel/agent/mcpserver/sync/AsyncFactoriesTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-mcp/embabel-agent-mcpserver/src/test/kotlin/com/embabel/agent/mcpserver/sync/AsyncFactoriesTest.kt)<br>[embabel-agent-mcp/embabel-agent-mcpserver/src/test/kotlin/com/embabel/agent/mcpserver/sync/McpPromptFactoryExtendedTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-mcp/embabel-agent-mcpserver/src/test/kotlin/com/embabel/agent/mcpserver/sync/McpPromptFactoryExtendedTest.kt)<br>[embabel-agent-mcp/embabel-agent-mcpserver/src/test/kotlin/com/embabel/agent/mcpserver/sync/McpPromptFactoryTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-mcp/embabel-agent-mcpserver/src/test/kotlin/com/embabel/agent/mcpserver/sync/McpPromptFactoryTest.kt) |
| retrieval | 198 | [embabel-agent-rag/pom.xml](../../../../sources/embabel__embabel-agent/embabel-agent-rag/pom.xml)<br>[embabel-agent-rag/embabel-agent-rag-tika/pom.xml](../../../../sources/embabel__embabel-agent/embabel-agent-rag/embabel-agent-rag-tika/pom.xml)<br>[embabel-agent-rag/embabel-agent-rag-tika/README.md](../../../../sources/embabel__embabel-agent/embabel-agent-rag/embabel-agent-rag-tika/README.md)<br>[embabel-agent-rag/embabel-agent-rag-tika/src/test/resources/application-test.properties](../../../../sources/embabel__embabel-agent/embabel-agent-rag/embabel-agent-rag-tika/src/test/resources/application-test.properties)<br>[embabel-agent-rag/embabel-agent-rag-tika/src/test/kotlin/com/embabel/agent/rag/.gitkeep](../../../../sources/embabel__embabel-agent/embabel-agent-rag/embabel-agent-rag-tika/src/test/kotlin/com/embabel/agent/rag/.gitkeep)<br>[embabel-agent-rag/embabel-agent-rag-tika/src/test/kotlin/com/embabel/agent/rag/ingestion/HttpContentFetcherTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-rag/embabel-agent-rag-tika/src/test/kotlin/com/embabel/agent/rag/ingestion/HttpContentFetcherTest.kt)<br>[embabel-agent-rag/embabel-agent-rag-tika/src/test/kotlin/com/embabel/agent/rag/ingestion/TikaHierarchicalContentReaderTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-rag/embabel-agent-rag-tika/src/test/kotlin/com/embabel/agent/rag/ingestion/TikaHierarchicalContentReaderTest.kt)<br>[embabel-agent-rag/embabel-agent-rag-tika/src/test/java/com/embabel/agent/rag/ingestion/DirectoryParsingConfigTest.java](../../../../sources/embabel__embabel-agent/embabel-agent-rag/embabel-agent-rag-tika/src/test/java/com/embabel/agent/rag/ingestion/DirectoryParsingConfigTest.java) |
| spec | 13 | [embabel-agent-skills/src/main/kotlin/com/embabel/agent/skills/spec/SkillDefinition.kt](../../../../sources/embabel__embabel-agent/embabel-agent-skills/src/main/kotlin/com/embabel/agent/skills/spec/SkillDefinition.kt)<br>[embabel-agent-skills/src/main/kotlin/com/embabel/agent/skills/spec/SkillMetadata.kt](../../../../sources/embabel__embabel-agent/embabel-agent-skills/src/main/kotlin/com/embabel/agent/skills/spec/SkillMetadata.kt)<br>[embabel-agent-docs/src/main/asciidoc/roadmap/roadmap.adoc](../../../../sources/embabel__embabel-agent/embabel-agent-docs/src/main/asciidoc/roadmap/roadmap.adoc)<br>[embabel-agent-docs/src/main/asciidoc/reference/diagrams/architecture/embabel_agent_platform_model.dot](../../../../sources/embabel__embabel-agent/embabel-agent-docs/src/main/asciidoc/reference/diagrams/architecture/embabel_agent_platform_model.dot)<br>[embabel-agent-docs/src/main/asciidoc/reference/diagrams/architecture/embabel_agentic_tool_hierarchy.dot](../../../../sources/embabel__embabel-agent/embabel-agent-docs/src/main/asciidoc/reference/diagrams/architecture/embabel_agentic_tool_hierarchy.dot)<br>[embabel-agent-docs/src/main/asciidoc/reference/diagrams/architecture/embabel_agentic_tools.dot](../../../../sources/embabel__embabel-agent/embabel-agent-docs/src/main/asciidoc/reference/diagrams/architecture/embabel_agentic_tools.dot)<br>[embabel-agent-docs/src/main/asciidoc/reference/diagrams/architecture/embabel_execution_context.dot](../../../../sources/embabel__embabel-agent/embabel-agent-docs/src/main/asciidoc/reference/diagrams/architecture/embabel_execution_context.dot)<br>[embabel-agent-docs/src/main/asciidoc/reference/diagrams/architecture/embabel_planning_system.dot](../../../../sources/embabel__embabel-agent/embabel-agent-docs/src/main/asciidoc/reference/diagrams/architecture/embabel_planning_system.dot) |
| eval | 782 | [embabel-agent-test-support/pom.xml](../../../../sources/embabel__embabel-agent/embabel-agent-test-support/pom.xml)<br>[embabel-agent-test-support/embabel-agent-test-internal/pom.xml](../../../../sources/embabel__embabel-agent/embabel-agent-test-support/embabel-agent-test-internal/pom.xml)<br>[embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/common/test/ai/FakeEmbeddingModelTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/common/test/ai/FakeEmbeddingModelTest.kt)<br>[embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/common/test/ai/config/FakeAiConfigurationTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/common/test/ai/config/FakeAiConfigurationTest.kt)<br>[embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/AgentTestApplicationTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/AgentTestApplicationTest.kt)<br>[embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/test/type/TestTypesTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/test/type/TestTypesTest.kt)<br>[embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/test/models/OptionsConverterTestSupportTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/test/models/OptionsConverterTestSupportTest.kt)<br>[embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/test/dsl/AgentBuilderUtilsTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/test/dsl/AgentBuilderUtilsTest.kt) |
| security | 17 | [embabel-agent-starters/embabel-agent-starter-mcpserver-security/pom.xml](../../../../sources/embabel__embabel-agent/embabel-agent-starters/embabel-agent-starter-mcpserver-security/pom.xml)<br>[embabel-agent-rag/embabel-agent-rag-core/src/main/kotlin/com/embabel/agent/rag/ingestion/policy/AlwaysRefreshContentRefreshPolicy.kt](../../../../sources/embabel__embabel-agent/embabel-agent-rag/embabel-agent-rag-core/src/main/kotlin/com/embabel/agent/rag/ingestion/policy/AlwaysRefreshContentRefreshPolicy.kt)<br>[embabel-agent-rag/embabel-agent-rag-core/src/main/kotlin/com/embabel/agent/rag/ingestion/policy/NeverRefreshExistingDocumentContentPolicy.kt](../../../../sources/embabel__embabel-agent/embabel-agent-rag/embabel-agent-rag-core/src/main/kotlin/com/embabel/agent/rag/ingestion/policy/NeverRefreshExistingDocumentContentPolicy.kt)<br>[embabel-agent-rag/embabel-agent-rag-core/src/main/kotlin/com/embabel/agent/rag/ingestion/policy/TtlContentRefreshPolicy.kt](../../../../sources/embabel__embabel-agent/embabel-agent-rag/embabel-agent-rag-core/src/main/kotlin/com/embabel/agent/rag/ingestion/policy/TtlContentRefreshPolicy.kt)<br>[embabel-agent-rag/embabel-agent-rag-core/src/main/kotlin/com/embabel/agent/rag/ingestion/policy/UrlSpecificContentRefreshPolicy.kt](../../../../sources/embabel__embabel-agent/embabel-agent-rag/embabel-agent-rag-core/src/main/kotlin/com/embabel/agent/rag/ingestion/policy/UrlSpecificContentRefreshPolicy.kt)<br>[embabel-agent-mcp/embabel-agent-mcp-security/pom.xml](../../../../sources/embabel__embabel-agent/embabel-agent-mcp/embabel-agent-mcp-security/pom.xml)<br>[embabel-agent-mcp/embabel-agent-mcp-security/src/test/kotlin/com/embabel/agent/mcpserver/security/SecureAgentToolAspectTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-mcp/embabel-agent-mcp-security/src/test/kotlin/com/embabel/agent/mcpserver/security/SecureAgentToolAspectTest.kt)<br>[embabel-agent-mcp/embabel-agent-mcp-security/src/main/kotlin/com/embabel/agent/mcpserver/security/SecureAgentTool.kt](../../../../sources/embabel__embabel-agent/embabel-agent-mcp/embabel-agent-mcp-security/src/main/kotlin/com/embabel/agent/mcpserver/security/SecureAgentTool.kt) |
| ci | 10 | [embabel-agent-code/src/test/kotlin/com/embabel/coding/tools/ci/CiDataClassesTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-code/src/test/kotlin/com/embabel/coding/tools/ci/CiDataClassesTest.kt)<br>[embabel-agent-code/src/test/kotlin/com/embabel/coding/tools/ci/CiToolsTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-code/src/test/kotlin/com/embabel/coding/tools/ci/CiToolsTest.kt)<br>[embabel-agent-code/src/main/kotlin/com/embabel/coding/tools/ci/Ci.kt](../../../../sources/embabel__embabel-agent/embabel-agent-code/src/main/kotlin/com/embabel/coding/tools/ci/Ci.kt)<br>[embabel-agent-code/src/main/kotlin/com/embabel/coding/tools/ci/CiTools.kt](../../../../sources/embabel__embabel-agent/embabel-agent-code/src/main/kotlin/com/embabel/coding/tools/ci/CiTools.kt)<br>[embabel-agent-api/.github/workflows/maven.yml](../../../../sources/embabel__embabel-agent/embabel-agent-api/.github/workflows/maven.yml)<br>[.github/workflows/dependabot-insights.yml](../../../../sources/embabel__embabel-agent/.github/workflows/dependabot-insights.yml)<br>[.github/workflows/deploy-docs.yml](../../../../sources/embabel__embabel-agent/.github/workflows/deploy-docs.yml)<br>[.github/workflows/deploy-snapshots.yml](../../../../sources/embabel__embabel-agent/.github/workflows/deploy-snapshots.yml) |
| container | 3 | [embabel-agent-skills/docker/Dockerfile](../../../../sources/embabel__embabel-agent/embabel-agent-skills/docker/Dockerfile)<br>[embabel-agent-api/src/main/kotlin/com/embabel/agent/core/deployment/AgentPublisher.kt](../../../../sources/embabel__embabel-agent/embabel-agent-api/src/main/kotlin/com/embabel/agent/core/deployment/AgentPublisher.kt)<br>[embabel-agent-api/src/main/kotlin/com/embabel/agent/core/deployment/AgentScanningProperties.kt](../../../../sources/embabel__embabel-agent/embabel-agent-api/src/main/kotlin/com/embabel/agent/core/deployment/AgentScanningProperties.kt) |
| instruction | 1 | [CLAUDE.md](../../../../sources/embabel__embabel-agent/CLAUDE.md) |
| docs | 40 | [README-appendix.md](../../../../sources/embabel__embabel-agent/README-appendix.md)<br>[README.md](../../../../sources/embabel__embabel-agent/README.md)<br>[embabel-agent-starters/embabel-agent-starter-shell/README.md](../../../../sources/embabel__embabel-agent/embabel-agent-starters/embabel-agent-starter-shell/README.md)<br>[embabel-agent-skills/README.md](../../../../sources/embabel__embabel-agent/embabel-agent-skills/README.md)<br>[embabel-agent-skills/docker/README.md](../../../../sources/embabel__embabel-agent/embabel-agent-skills/docker/README.md)<br>[embabel-agent-shell/README.md](../../../../sources/embabel__embabel-agent/embabel-agent-shell/README.md)<br>[embabel-agent-rag/embabel-agent-rag-tika/README.md](../../../../sources/embabel__embabel-agent/embabel-agent-rag/embabel-agent-rag-tika/README.md)<br>[embabel-agent-rag/embabel-agent-rag-pipeline/README.md](../../../../sources/embabel__embabel-agent/embabel-agent-rag/embabel-agent-rag-pipeline/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 782 | [embabel-agent-test-support/pom.xml](../../../../sources/embabel__embabel-agent/embabel-agent-test-support/pom.xml)<br>[embabel-agent-test-support/embabel-agent-test-internal/pom.xml](../../../../sources/embabel__embabel-agent/embabel-agent-test-support/embabel-agent-test-internal/pom.xml)<br>[embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/common/test/ai/FakeEmbeddingModelTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/common/test/ai/FakeEmbeddingModelTest.kt)<br>[embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/common/test/ai/config/FakeAiConfigurationTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/common/test/ai/config/FakeAiConfigurationTest.kt)<br>[embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/AgentTestApplicationTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/AgentTestApplicationTest.kt)<br>[embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/test/type/TestTypesTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/test/type/TestTypesTest.kt) |
| CI workflow | 10 | [embabel-agent-code/src/test/kotlin/com/embabel/coding/tools/ci/CiDataClassesTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-code/src/test/kotlin/com/embabel/coding/tools/ci/CiDataClassesTest.kt)<br>[embabel-agent-code/src/test/kotlin/com/embabel/coding/tools/ci/CiToolsTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-code/src/test/kotlin/com/embabel/coding/tools/ci/CiToolsTest.kt)<br>[embabel-agent-code/src/main/kotlin/com/embabel/coding/tools/ci/Ci.kt](../../../../sources/embabel__embabel-agent/embabel-agent-code/src/main/kotlin/com/embabel/coding/tools/ci/Ci.kt)<br>[embabel-agent-code/src/main/kotlin/com/embabel/coding/tools/ci/CiTools.kt](../../../../sources/embabel__embabel-agent/embabel-agent-code/src/main/kotlin/com/embabel/coding/tools/ci/CiTools.kt)<br>[embabel-agent-api/.github/workflows/maven.yml](../../../../sources/embabel__embabel-agent/embabel-agent-api/.github/workflows/maven.yml)<br>[.github/workflows/dependabot-insights.yml](../../../../sources/embabel__embabel-agent/.github/workflows/dependabot-insights.yml) |
| 컨테이너/배포 | 3 | [embabel-agent-skills/docker/Dockerfile](../../../../sources/embabel__embabel-agent/embabel-agent-skills/docker/Dockerfile)<br>[embabel-agent-api/src/main/kotlin/com/embabel/agent/core/deployment/AgentPublisher.kt](../../../../sources/embabel__embabel-agent/embabel-agent-api/src/main/kotlin/com/embabel/agent/core/deployment/AgentPublisher.kt)<br>[embabel-agent-api/src/main/kotlin/com/embabel/agent/core/deployment/AgentScanningProperties.kt](../../../../sources/embabel__embabel-agent/embabel-agent-api/src/main/kotlin/com/embabel/agent/core/deployment/AgentScanningProperties.kt) |
| 보안/정책 | 17 | [embabel-agent-starters/embabel-agent-starter-mcpserver-security/pom.xml](../../../../sources/embabel__embabel-agent/embabel-agent-starters/embabel-agent-starter-mcpserver-security/pom.xml)<br>[embabel-agent-rag/embabel-agent-rag-core/src/main/kotlin/com/embabel/agent/rag/ingestion/policy/AlwaysRefreshContentRefreshPolicy.kt](../../../../sources/embabel__embabel-agent/embabel-agent-rag/embabel-agent-rag-core/src/main/kotlin/com/embabel/agent/rag/ingestion/policy/AlwaysRefreshContentRefreshPolicy.kt)<br>[embabel-agent-rag/embabel-agent-rag-core/src/main/kotlin/com/embabel/agent/rag/ingestion/policy/NeverRefreshExistingDocumentContentPolicy.kt](../../../../sources/embabel__embabel-agent/embabel-agent-rag/embabel-agent-rag-core/src/main/kotlin/com/embabel/agent/rag/ingestion/policy/NeverRefreshExistingDocumentContentPolicy.kt)<br>[embabel-agent-rag/embabel-agent-rag-core/src/main/kotlin/com/embabel/agent/rag/ingestion/policy/TtlContentRefreshPolicy.kt](../../../../sources/embabel__embabel-agent/embabel-agent-rag/embabel-agent-rag-core/src/main/kotlin/com/embabel/agent/rag/ingestion/policy/TtlContentRefreshPolicy.kt)<br>[embabel-agent-rag/embabel-agent-rag-core/src/main/kotlin/com/embabel/agent/rag/ingestion/policy/UrlSpecificContentRefreshPolicy.kt](../../../../sources/embabel__embabel-agent/embabel-agent-rag/embabel-agent-rag-core/src/main/kotlin/com/embabel/agent/rag/ingestion/policy/UrlSpecificContentRefreshPolicy.kt)<br>[embabel-agent-mcp/embabel-agent-mcp-security/pom.xml](../../../../sources/embabel__embabel-agent/embabel-agent-mcp/embabel-agent-mcp-security/pom.xml) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/embabel__embabel-agent/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요; path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `embabel-agent-mcp/pom.xml`, `embabel-agent-mcp/embabel-agent-mcpserver/pom.xml`, `embabel-agent-mcp/embabel-agent-mcpserver/src/test/kotlin/com/embabel/agent/mcpserver/AbstractMcpServerConfigurationTest.kt`.
2. agent/tool runtime 매핑: `embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/AgentTestApplicationTest.kt`, `embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/test/type/TestTypesTest.kt`, `embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/test/models/OptionsConverterTestSupportTest.kt`.
3. retrieval/memory/indexing 확인: `embabel-agent-rag/pom.xml`, `embabel-agent-rag/embabel-agent-rag-tika/pom.xml`, `embabel-agent-rag/embabel-agent-rag-tika/README.md`.
4. test/eval 파일로 동작 검증: `embabel-agent-test-support/pom.xml`, `embabel-agent-test-support/embabel-agent-test-internal/pom.xml`, `embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/common/test/ai/FakeEmbeddingModelTest.kt`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Agent framework for the JVM. Pronounced Em BAY bel /ɛmˈbeɪbəl/. 핵심 구조 신호는 Kotlin, pom.xml, README.md, CLAUDE.md, LICENSE, tests이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
