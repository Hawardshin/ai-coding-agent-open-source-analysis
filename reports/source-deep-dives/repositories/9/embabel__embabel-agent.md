# embabel/embabel-agent Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Agent framework for the JVM. Pronounced Em-BAY-bel /ɛmˈbeɪbəl/

## 요약

- 조사 단위: `sources/embabel__embabel-agent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,799 files, 1,508 directories, depth score 118, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=embabel-agent-mcp/pom.xml, embabel-agent-mcp/embabel-agent-mcpserver/pom.xml, embabel-agent-mcp/embabel-agent-mcpserver/src/test/kotlin/com/embabel/agent/mcpserver/AbstractMcpServerConfigurationTest.kt이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | embabel/embabel-agent |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Kotlin |
| Stars | 3683 |
| Forks | 361 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/embabel__embabel-agent](../../../../sources/embabel__embabel-agent) |
| Existing report | [reports/global-trending/repositories/embabel__embabel-agent.md](../../../global-trending/repositories/embabel__embabel-agent.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1799 / 1508 |
| Max observed depth | 13 |
| Top directories | .github, embabel-agent-a2a, embabel-agent-api, embabel-agent-autoconfigure, embabel-agent-code, embabel-agent-common, embabel-agent-dependencies, embabel-agent-docs, embabel-agent-domain, embabel-agent-mcp, embabel-agent-observability, embabel-agent-onnx, embabel-agent-openai, embabel-agent-rag, embabel-agent-shell, embabel-agent-skills, embabel-agent-starters, embabel-agent-test-support, images, specs |
| Top extensions | .kt: 1303, .java: 192, .xml: 76, .adoc: 67, .md: 41, (none): 24, .imports: 21, .yml: 20, .properties: 9, .dot: 7, .png: 7, .txt: 6 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
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
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 782 | [embabel-agent-test-support/pom.xml](../../../../sources/embabel__embabel-agent/embabel-agent-test-support/pom.xml)<br>[embabel-agent-test-support/embabel-agent-test-internal/pom.xml](../../../../sources/embabel__embabel-agent/embabel-agent-test-support/embabel-agent-test-internal/pom.xml)<br>[embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/common/test/ai/FakeEmbeddingModelTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/common/test/ai/FakeEmbeddingModelTest.kt)<br>[embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/common/test/ai/config/FakeAiConfigurationTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/common/test/ai/config/FakeAiConfigurationTest.kt)<br>[embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/AgentTestApplicationTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/AgentTestApplicationTest.kt)<br>[embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/test/type/TestTypesTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/test/type/TestTypesTest.kt) |
| CI workflows | 10 | [embabel-agent-code/src/test/kotlin/com/embabel/coding/tools/ci/CiDataClassesTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-code/src/test/kotlin/com/embabel/coding/tools/ci/CiDataClassesTest.kt)<br>[embabel-agent-code/src/test/kotlin/com/embabel/coding/tools/ci/CiToolsTest.kt](../../../../sources/embabel__embabel-agent/embabel-agent-code/src/test/kotlin/com/embabel/coding/tools/ci/CiToolsTest.kt)<br>[embabel-agent-code/src/main/kotlin/com/embabel/coding/tools/ci/Ci.kt](../../../../sources/embabel__embabel-agent/embabel-agent-code/src/main/kotlin/com/embabel/coding/tools/ci/Ci.kt)<br>[embabel-agent-code/src/main/kotlin/com/embabel/coding/tools/ci/CiTools.kt](../../../../sources/embabel__embabel-agent/embabel-agent-code/src/main/kotlin/com/embabel/coding/tools/ci/CiTools.kt)<br>[embabel-agent-api/.github/workflows/maven.yml](../../../../sources/embabel__embabel-agent/embabel-agent-api/.github/workflows/maven.yml)<br>[.github/workflows/dependabot-insights.yml](../../../../sources/embabel__embabel-agent/.github/workflows/dependabot-insights.yml) |
| Containers / deploy | 3 | [embabel-agent-skills/docker/Dockerfile](../../../../sources/embabel__embabel-agent/embabel-agent-skills/docker/Dockerfile)<br>[embabel-agent-api/src/main/kotlin/com/embabel/agent/core/deployment/AgentPublisher.kt](../../../../sources/embabel__embabel-agent/embabel-agent-api/src/main/kotlin/com/embabel/agent/core/deployment/AgentPublisher.kt)<br>[embabel-agent-api/src/main/kotlin/com/embabel/agent/core/deployment/AgentScanningProperties.kt](../../../../sources/embabel__embabel-agent/embabel-agent-api/src/main/kotlin/com/embabel/agent/core/deployment/AgentScanningProperties.kt) |
| Security / policy | 17 | [embabel-agent-starters/embabel-agent-starter-mcpserver-security/pom.xml](../../../../sources/embabel__embabel-agent/embabel-agent-starters/embabel-agent-starter-mcpserver-security/pom.xml)<br>[embabel-agent-rag/embabel-agent-rag-core/src/main/kotlin/com/embabel/agent/rag/ingestion/policy/AlwaysRefreshContentRefreshPolicy.kt](../../../../sources/embabel__embabel-agent/embabel-agent-rag/embabel-agent-rag-core/src/main/kotlin/com/embabel/agent/rag/ingestion/policy/AlwaysRefreshContentRefreshPolicy.kt)<br>[embabel-agent-rag/embabel-agent-rag-core/src/main/kotlin/com/embabel/agent/rag/ingestion/policy/NeverRefreshExistingDocumentContentPolicy.kt](../../../../sources/embabel__embabel-agent/embabel-agent-rag/embabel-agent-rag-core/src/main/kotlin/com/embabel/agent/rag/ingestion/policy/NeverRefreshExistingDocumentContentPolicy.kt)<br>[embabel-agent-rag/embabel-agent-rag-core/src/main/kotlin/com/embabel/agent/rag/ingestion/policy/TtlContentRefreshPolicy.kt](../../../../sources/embabel__embabel-agent/embabel-agent-rag/embabel-agent-rag-core/src/main/kotlin/com/embabel/agent/rag/ingestion/policy/TtlContentRefreshPolicy.kt)<br>[embabel-agent-rag/embabel-agent-rag-core/src/main/kotlin/com/embabel/agent/rag/ingestion/policy/UrlSpecificContentRefreshPolicy.kt](../../../../sources/embabel__embabel-agent/embabel-agent-rag/embabel-agent-rag-core/src/main/kotlin/com/embabel/agent/rag/ingestion/policy/UrlSpecificContentRefreshPolicy.kt)<br>[embabel-agent-mcp/embabel-agent-mcp-security/pom.xml](../../../../sources/embabel__embabel-agent/embabel-agent-mcp/embabel-agent-mcp-security/pom.xml) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/embabel__embabel-agent/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review; primary entrypoint not obvious from path scan |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `embabel-agent-mcp/pom.xml`, `embabel-agent-mcp/embabel-agent-mcpserver/pom.xml`, `embabel-agent-mcp/embabel-agent-mcpserver/src/test/kotlin/com/embabel/agent/mcpserver/AbstractMcpServerConfigurationTest.kt`.
2. Map agent/tool runtime through: `embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/AgentTestApplicationTest.kt`, `embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/test/type/TestTypesTest.kt`, `embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/agent/test/models/OptionsConverterTestSupportTest.kt`.
3. Inspect retrieval/memory/indexing through: `embabel-agent-rag/pom.xml`, `embabel-agent-rag/embabel-agent-rag-tika/pom.xml`, `embabel-agent-rag/embabel-agent-rag-tika/README.md`.
4. Verify behavior through test/eval files: `embabel-agent-test-support/pom.xml`, `embabel-agent-test-support/embabel-agent-test-internal/pom.xml`, `embabel-agent-test-support/embabel-agent-test-internal/src/test/kotlin/com/embabel/common/test/ai/FakeEmbeddingModelTest.kt`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Agent framework for the JVM. Pronounced Em BAY bel /ɛmˈbeɪbəl/. 핵심 구조 신호는 Kotlin, pom.xml, README.md, CLAUDE.md, LICENSE, tests이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
