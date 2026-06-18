# askimo-ai/askimo Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Chat, RAG search, multi-step Plans workflows, MCP tools, and Agents integration. Supports OpenAI, Claude, Gemini, Grok, Ollama, LM Studio and more

## 요약

- 조사 단위: `sources/askimo-ai__askimo` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 666 files, 249 directories, depth score 103, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=shared/src/test/kotlin/io/askimo/core/mcp/connectors/StdioMcpConnectorWindowsTest.kt, shared/src/main/kotlin/io/askimo/core/mcp/McpClientFactory.kt, shared/src/main/kotlin/io/askimo/core/mcp/McpConnector.kt이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | askimo-ai/askimo |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Kotlin |
| Stars | 145 |
| Forks | 22 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/askimo-ai__askimo](../../../../sources/askimo-ai__askimo) |
| Existing report | [reports/global-trending/repositories/askimo-ai__askimo.md](../../../global-trending/repositories/askimo-ai__askimo.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 666 / 249 |
| Max observed depth | 11 |
| Top directories | .github, cli, desktop, desktop-shared, detekt-rules, gradle, public, shared, tools |
| Top extensions | .kt: 553, .yml: 19, .png: 14, .properties: 12, .md: 9, .gif: 7, .json: 7, .kts: 7, .jpg: 6, (none): 6, .svg: 5, .ttf: 4 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| cli | top-level component | 1 |
| desktop | top-level component | 1 |
| desktop-shared | top-level component | 1 |
| detekt-rules | top-level component | 1 |
| gradle | top-level component | 1 |
| public | top-level component | 1 |
| shared | top-level component | 1 |
| tools | top-level component | 1 |


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
| mcp | [shared/src/test/kotlin/io/askimo/core/mcp/connectors/StdioMcpConnectorWindowsTest.kt](../../../../sources/askimo-ai__askimo/shared/src/test/kotlin/io/askimo/core/mcp/connectors/StdioMcpConnectorWindowsTest.kt) | mcp signal |
| mcp | [shared/src/main/kotlin/io/askimo/core/mcp/McpClientFactory.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/mcp/McpClientFactory.kt) | mcp signal |
| mcp | [shared/src/main/kotlin/io/askimo/core/mcp/McpConnector.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/mcp/McpConnector.kt) | mcp signal |
| mcp | [shared/src/main/kotlin/io/askimo/core/mcp/McpInstance.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/mcp/McpInstance.kt) | mcp signal |
| agentRuntime | [tools/macos/MACOS_SIGNING_SETUP.md](../../../../sources/askimo-ai__askimo/tools/macos/MACOS_SIGNING_SETUP.md) | agentRuntime signal |
| agentRuntime | [tools/macos/test-signing-local.sh](../../../../sources/askimo-ai__askimo/tools/macos/test-signing-local.sh) | agentRuntime signal |
| agentRuntime | [tools/installation/install.ps1](../../../../sources/askimo-ai__askimo/tools/installation/install.ps1) | agentRuntime signal |
| agentRuntime | [tools/installation/install.sh](../../../../sources/askimo-ai__askimo/tools/installation/install.sh) | agentRuntime signal |
| ci | [.github/workflows/format-check.yml](../../../../sources/askimo-ai__askimo/.github/workflows/format-check.yml) | ci support |
| ci | [.github/workflows/publish.yml](../../../../sources/askimo-ai__askimo/.github/workflows/publish.yml) | ci support |
| eval | [shared/src/testFixtures/kotlin/io/askimo/test/extensions/AskimoTestHome.kt](../../../../sources/askimo-ai__askimo/shared/src/testFixtures/kotlin/io/askimo/test/extensions/AskimoTestHome.kt) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 58 | [tools/macos/MACOS_SIGNING_SETUP.md](../../../../sources/askimo-ai__askimo/tools/macos/MACOS_SIGNING_SETUP.md)<br>[tools/macos/test-signing-local.sh](../../../../sources/askimo-ai__askimo/tools/macos/test-signing-local.sh)<br>[tools/installation/install.ps1](../../../../sources/askimo-ai__askimo/tools/installation/install.ps1)<br>[tools/installation/install.sh](../../../../sources/askimo-ai__askimo/tools/installation/install.sh)<br>[tools/installation/README.md](../../../../sources/askimo-ai__askimo/tools/installation/README.md)<br>[tools/git/pre-commit](../../../../sources/askimo-ai__askimo/tools/git/pre-commit)<br>[tools/git/README.md](../../../../sources/askimo-ai__askimo/tools/git/README.md)<br>[shared/src/test/kotlin/io/askimo/core/skills/ClaudeStreamJsonEventParserTest.kt](../../../../sources/askimo-ai__askimo/shared/src/test/kotlin/io/askimo/core/skills/ClaudeStreamJsonEventParserTest.kt) |
| mcp | 29 | [shared/src/test/kotlin/io/askimo/core/mcp/connectors/StdioMcpConnectorWindowsTest.kt](../../../../sources/askimo-ai__askimo/shared/src/test/kotlin/io/askimo/core/mcp/connectors/StdioMcpConnectorWindowsTest.kt)<br>[shared/src/main/kotlin/io/askimo/core/mcp/McpClientFactory.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/mcp/McpClientFactory.kt)<br>[shared/src/main/kotlin/io/askimo/core/mcp/McpConnector.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/mcp/McpConnector.kt)<br>[shared/src/main/kotlin/io/askimo/core/mcp/McpInstance.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/mcp/McpInstance.kt)<br>[shared/src/main/kotlin/io/askimo/core/mcp/McpInstanceService.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/mcp/McpInstanceService.kt)<br>[shared/src/main/kotlin/io/askimo/core/mcp/McpServerDefinition.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/mcp/McpServerDefinition.kt)<br>[shared/src/main/kotlin/io/askimo/core/mcp/McpServerTemplateRegistry.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/mcp/McpServerTemplateRegistry.kt)<br>[shared/src/main/kotlin/io/askimo/core/mcp/McpTransportConfig.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/mcp/McpTransportConfig.kt) |
| retrieval | 51 | [shared/src/test/kotlin/io/askimo/core/rag/MetadataAwareContentInjectorTest.kt](../../../../sources/askimo-ai__askimo/shared/src/test/kotlin/io/askimo/core/rag/MetadataAwareContentInjectorTest.kt)<br>[shared/src/test/kotlin/io/askimo/core/rag/indexing/HybridIndexerTest.kt](../../../../sources/askimo-ai__askimo/shared/src/test/kotlin/io/askimo/core/rag/indexing/HybridIndexerTest.kt)<br>[shared/src/test/kotlin/io/askimo/core/rag/filter/FilterChainTest.kt](../../../../sources/askimo-ai__askimo/shared/src/test/kotlin/io/askimo/core/rag/filter/FilterChainTest.kt)<br>[shared/src/test/kotlin/io/askimo/core/rag/filter/GitignoreFilterTest.kt](../../../../sources/askimo-ai__askimo/shared/src/test/kotlin/io/askimo/core/rag/filter/GitignoreFilterTest.kt)<br>[shared/src/test/kotlin/io/askimo/core/rag/filter/ProjectTypeFilterTest.kt](../../../../sources/askimo-ai__askimo/shared/src/test/kotlin/io/askimo/core/rag/filter/ProjectTypeFilterTest.kt)<br>[shared/src/main/kotlin/io/askimo/core/rag/HybridContentRetriever.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/rag/HybridContentRetriever.kt)<br>[shared/src/main/kotlin/io/askimo/core/rag/LuceneIndexer.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/rag/LuceneIndexer.kt)<br>[shared/src/main/kotlin/io/askimo/core/rag/LuceneKeywordRetriever.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/rag/LuceneKeywordRetriever.kt) |
| spec | 1 | [shared/src/main/resources/plans/system-design.yml](../../../../sources/askimo-ai__askimo/shared/src/main/resources/plans/system-design.yml) |
| eval | 82 | [tools/macos/test-signing-local.sh](../../../../sources/askimo-ai__askimo/tools/macos/test-signing-local.sh)<br>[shared/src/testFixtures/kotlin/io/askimo/test/extensions/AskimoTestHome.kt](../../../../sources/askimo-ai__askimo/shared/src/testFixtures/kotlin/io/askimo/test/extensions/AskimoTestHome.kt)<br>[shared/src/testFixtures/kotlin/io/askimo/test/extensions/RetryOnFailure.kt](../../../../sources/askimo-ai__askimo/shared/src/testFixtures/kotlin/io/askimo/test/extensions/RetryOnFailure.kt)<br>[shared/src/testFixtures/kotlin/io/askimo/test/extensions/TestSecureSessionManager.kt](../../../../sources/askimo-ai__askimo/shared/src/testFixtures/kotlin/io/askimo/test/extensions/TestSecureSessionManager.kt)<br>[shared/src/test/kotlin/io/askimo/core/vision/ImageProcessorTest.kt](../../../../sources/askimo-ai__askimo/shared/src/test/kotlin/io/askimo/core/vision/ImageProcessorTest.kt)<br>[shared/src/test/kotlin/io/askimo/core/util/FileUtilsTest.kt](../../../../sources/askimo-ai__askimo/shared/src/test/kotlin/io/askimo/core/util/FileUtilsTest.kt)<br>[shared/src/test/kotlin/io/askimo/core/skills/ClaudeStreamJsonEventParserTest.kt](../../../../sources/askimo-ai__askimo/shared/src/test/kotlin/io/askimo/core/skills/ClaudeStreamJsonEventParserTest.kt)<br>[shared/src/test/kotlin/io/askimo/core/skills/GeminiStreamJsonEventParserTest.kt](../../../../sources/askimo-ai__askimo/shared/src/test/kotlin/io/askimo/core/skills/GeminiStreamJsonEventParserTest.kt) |
| security | 14 | [shared/src/main/kotlin/io/askimo/core/security/EncryptionManager.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/security/EncryptionManager.kt)<br>[shared/src/main/kotlin/io/askimo/core/security/KeychainManager.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/security/KeychainManager.kt)<br>[shared/src/main/kotlin/io/askimo/core/security/SecureKeyManager.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/security/SecureKeyManager.kt)<br>[shared/src/main/kotlin/io/askimo/core/security/SecureSessionManager.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/security/SecureSessionManager.kt)<br>[cli/src/test/kotlin/io/askimo/core/security/EncryptionManagerTest.kt](../../../../sources/askimo-ai__askimo/cli/src/test/kotlin/io/askimo/core/security/EncryptionManagerTest.kt)<br>[cli/src/test/kotlin/io/askimo/core/security/KeychainManagerLinuxIntegrationTest.kt](../../../../sources/askimo-ai__askimo/cli/src/test/kotlin/io/askimo/core/security/KeychainManagerLinuxIntegrationTest.kt)<br>[cli/src/test/kotlin/io/askimo/core/security/KeychainManagerMacOSIntegrationTest.kt](../../../../sources/askimo-ai__askimo/cli/src/test/kotlin/io/askimo/core/security/KeychainManagerMacOSIntegrationTest.kt)<br>[cli/src/test/kotlin/io/askimo/core/security/KeychainManagerWindowsIntegrationTest.kt](../../../../sources/askimo-ai__askimo/cli/src/test/kotlin/io/askimo/core/security/KeychainManagerWindowsIntegrationTest.kt) |
| ci | 4 | [.github/workflows/format-check.yml](../../../../sources/askimo-ai__askimo/.github/workflows/format-check.yml)<br>[.github/workflows/publish.yml](../../../../sources/askimo-ai__askimo/.github/workflows/publish.yml)<br>[.github/workflows/release.yml](../../../../sources/askimo-ai__askimo/.github/workflows/release.yml)<br>[.github/workflows/shared-tests.yml](../../../../sources/askimo-ai__askimo/.github/workflows/shared-tests.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 7 | [README.md](../../../../sources/askimo-ai__askimo/README.md)<br>[tools/installation/README.md](../../../../sources/askimo-ai__askimo/tools/installation/README.md)<br>[tools/git/README.md](../../../../sources/askimo-ai__askimo/tools/git/README.md)<br>[desktop-shared/src/main/resources/images/backgrounds/README.md](../../../../sources/askimo-ai__askimo/desktop-shared/src/main/resources/images/backgrounds/README.md)<br>[desktop/README.md](../../../../sources/askimo-ai__askimo/desktop/README.md)<br>[desktop/src/main/resources/images/README.md](../../../../sources/askimo-ai__askimo/desktop/src/main/resources/images/README.md)<br>[cli/src/test/kotlin/io/askimo/core/security/README.md](../../../../sources/askimo-ai__askimo/cli/src/test/kotlin/io/askimo/core/security/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 82 | [tools/macos/test-signing-local.sh](../../../../sources/askimo-ai__askimo/tools/macos/test-signing-local.sh)<br>[shared/src/testFixtures/kotlin/io/askimo/test/extensions/AskimoTestHome.kt](../../../../sources/askimo-ai__askimo/shared/src/testFixtures/kotlin/io/askimo/test/extensions/AskimoTestHome.kt)<br>[shared/src/testFixtures/kotlin/io/askimo/test/extensions/RetryOnFailure.kt](../../../../sources/askimo-ai__askimo/shared/src/testFixtures/kotlin/io/askimo/test/extensions/RetryOnFailure.kt)<br>[shared/src/testFixtures/kotlin/io/askimo/test/extensions/TestSecureSessionManager.kt](../../../../sources/askimo-ai__askimo/shared/src/testFixtures/kotlin/io/askimo/test/extensions/TestSecureSessionManager.kt)<br>[shared/src/test/kotlin/io/askimo/core/vision/ImageProcessorTest.kt](../../../../sources/askimo-ai__askimo/shared/src/test/kotlin/io/askimo/core/vision/ImageProcessorTest.kt)<br>[shared/src/test/kotlin/io/askimo/core/util/FileUtilsTest.kt](../../../../sources/askimo-ai__askimo/shared/src/test/kotlin/io/askimo/core/util/FileUtilsTest.kt) |
| CI workflows | 4 | [.github/workflows/format-check.yml](../../../../sources/askimo-ai__askimo/.github/workflows/format-check.yml)<br>[.github/workflows/publish.yml](../../../../sources/askimo-ai__askimo/.github/workflows/publish.yml)<br>[.github/workflows/release.yml](../../../../sources/askimo-ai__askimo/.github/workflows/release.yml)<br>[.github/workflows/shared-tests.yml](../../../../sources/askimo-ai__askimo/.github/workflows/shared-tests.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 14 | [shared/src/main/kotlin/io/askimo/core/security/EncryptionManager.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/security/EncryptionManager.kt)<br>[shared/src/main/kotlin/io/askimo/core/security/KeychainManager.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/security/KeychainManager.kt)<br>[shared/src/main/kotlin/io/askimo/core/security/SecureKeyManager.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/security/SecureKeyManager.kt)<br>[shared/src/main/kotlin/io/askimo/core/security/SecureSessionManager.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/security/SecureSessionManager.kt)<br>[cli/src/test/kotlin/io/askimo/core/security/EncryptionManagerTest.kt](../../../../sources/askimo-ai__askimo/cli/src/test/kotlin/io/askimo/core/security/EncryptionManagerTest.kt)<br>[cli/src/test/kotlin/io/askimo/core/security/KeychainManagerLinuxIntegrationTest.kt](../../../../sources/askimo-ai__askimo/cli/src/test/kotlin/io/askimo/core/security/KeychainManagerLinuxIntegrationTest.kt) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `shared/src/test/kotlin/io/askimo/core/mcp/connectors/StdioMcpConnectorWindowsTest.kt`, `shared/src/main/kotlin/io/askimo/core/mcp/McpClientFactory.kt`, `shared/src/main/kotlin/io/askimo/core/mcp/McpConnector.kt`.
2. Map agent/tool runtime through: `tools/macos/MACOS_SIGNING_SETUP.md`, `tools/macos/test-signing-local.sh`, `tools/installation/install.ps1`.
3. Inspect retrieval/memory/indexing through: `shared/src/test/kotlin/io/askimo/core/rag/MetadataAwareContentInjectorTest.kt`, `shared/src/test/kotlin/io/askimo/core/rag/indexing/HybridIndexerTest.kt`, `shared/src/test/kotlin/io/askimo/core/rag/filter/FilterChainTest.kt`.
4. Verify behavior through test/eval files: `tools/macos/test-signing-local.sh`, `shared/src/testFixtures/kotlin/io/askimo/test/extensions/AskimoTestHome.kt`, `shared/src/testFixtures/kotlin/io/askimo/test/extensions/RetryOnFailure.kt`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Chat, RAG search, multi step Plans workflows, MCP tools, and Agents integration. Supports OpenAI, Claude, Gemini, Grok, . 핵심 구조 신호는 Kotlin, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
