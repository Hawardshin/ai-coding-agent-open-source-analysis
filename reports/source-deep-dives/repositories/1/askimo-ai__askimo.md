# askimo-ai/askimo 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Chat, RAG search, multi-step Plans workflows, MCP tools, and Agents integration. Supports OpenAI, Claude, Gemini, Grok, Ollama, LM Studio and more

## 요약

- 조사 단위: `sources/askimo-ai__askimo` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 666 files, 249 directories, depth score 97, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=shared/src/test/kotlin/io/askimo/core/mcp/connectors/StdioMcpConnectorWindowsTest.kt, shared/src/main/kotlin/io/askimo/core/mcp/McpClientFactory.kt, shared/src/main/kotlin/io/askimo/core/mcp/McpConnector.kt이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | askimo-ai/askimo |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Kotlin |
| Stars | 145 |
| Forks | 22 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/askimo-ai__askimo](../../../../sources/askimo-ai__askimo) |
| 기존 보고서 | [reports/global-trending/repositories/askimo-ai__askimo.md](../../../global-trending/repositories/askimo-ai__askimo.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 666 / 249 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | .github, cli, desktop, desktop-shared, detekt-rules, gradle, public, shared, tools |
| 상위 확장자 | .kt: 553, .yml: 19, .png: 14, .properties: 12, .md: 9, .gif: 7, .json: 7, .kts: 7, .jpg: 6, (none): 6, .svg: 5, .ttf: 4 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 58 | [tools/macos/MACOS_SIGNING_SETUP.md](../../../../sources/askimo-ai__askimo/tools/macos/MACOS_SIGNING_SETUP.md)<br>[tools/macos/test-signing-local.sh](../../../../sources/askimo-ai__askimo/tools/macos/test-signing-local.sh)<br>[tools/installation/install.ps1](../../../../sources/askimo-ai__askimo/tools/installation/install.ps1)<br>[tools/installation/install.sh](../../../../sources/askimo-ai__askimo/tools/installation/install.sh)<br>[tools/installation/README.md](../../../../sources/askimo-ai__askimo/tools/installation/README.md)<br>[tools/git/pre-commit](../../../../sources/askimo-ai__askimo/tools/git/pre-commit)<br>[tools/git/README.md](../../../../sources/askimo-ai__askimo/tools/git/README.md)<br>[shared/src/test/kotlin/io/askimo/core/skills/ClaudeStreamJsonEventParserTest.kt](../../../../sources/askimo-ai__askimo/shared/src/test/kotlin/io/askimo/core/skills/ClaudeStreamJsonEventParserTest.kt) |
| mcp | 29 | [shared/src/test/kotlin/io/askimo/core/mcp/connectors/StdioMcpConnectorWindowsTest.kt](../../../../sources/askimo-ai__askimo/shared/src/test/kotlin/io/askimo/core/mcp/connectors/StdioMcpConnectorWindowsTest.kt)<br>[shared/src/main/kotlin/io/askimo/core/mcp/McpClientFactory.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/mcp/McpClientFactory.kt)<br>[shared/src/main/kotlin/io/askimo/core/mcp/McpConnector.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/mcp/McpConnector.kt)<br>[shared/src/main/kotlin/io/askimo/core/mcp/McpInstance.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/mcp/McpInstance.kt)<br>[shared/src/main/kotlin/io/askimo/core/mcp/McpInstanceService.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/mcp/McpInstanceService.kt)<br>[shared/src/main/kotlin/io/askimo/core/mcp/McpServerDefinition.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/mcp/McpServerDefinition.kt)<br>[shared/src/main/kotlin/io/askimo/core/mcp/McpServerTemplateRegistry.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/mcp/McpServerTemplateRegistry.kt)<br>[shared/src/main/kotlin/io/askimo/core/mcp/McpTransportConfig.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/mcp/McpTransportConfig.kt) |
| retrieval | 51 | [shared/src/test/kotlin/io/askimo/core/rag/MetadataAwareContentInjectorTest.kt](../../../../sources/askimo-ai__askimo/shared/src/test/kotlin/io/askimo/core/rag/MetadataAwareContentInjectorTest.kt)<br>[shared/src/test/kotlin/io/askimo/core/rag/indexing/HybridIndexerTest.kt](../../../../sources/askimo-ai__askimo/shared/src/test/kotlin/io/askimo/core/rag/indexing/HybridIndexerTest.kt)<br>[shared/src/test/kotlin/io/askimo/core/rag/filter/FilterChainTest.kt](../../../../sources/askimo-ai__askimo/shared/src/test/kotlin/io/askimo/core/rag/filter/FilterChainTest.kt)<br>[shared/src/test/kotlin/io/askimo/core/rag/filter/GitignoreFilterTest.kt](../../../../sources/askimo-ai__askimo/shared/src/test/kotlin/io/askimo/core/rag/filter/GitignoreFilterTest.kt)<br>[shared/src/test/kotlin/io/askimo/core/rag/filter/ProjectTypeFilterTest.kt](../../../../sources/askimo-ai__askimo/shared/src/test/kotlin/io/askimo/core/rag/filter/ProjectTypeFilterTest.kt)<br>[shared/src/main/kotlin/io/askimo/core/rag/HybridContentRetriever.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/rag/HybridContentRetriever.kt)<br>[shared/src/main/kotlin/io/askimo/core/rag/LuceneIndexer.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/rag/LuceneIndexer.kt)<br>[shared/src/main/kotlin/io/askimo/core/rag/LuceneKeywordRetriever.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/rag/LuceneKeywordRetriever.kt) |
| spec | 1 | [shared/src/main/resources/plans/system-design.yml](../../../../sources/askimo-ai__askimo/shared/src/main/resources/plans/system-design.yml) |
| eval | 82 | [tools/macos/test-signing-local.sh](../../../../sources/askimo-ai__askimo/tools/macos/test-signing-local.sh)<br>[shared/src/testFixtures/kotlin/io/askimo/test/extensions/AskimoTestHome.kt](../../../../sources/askimo-ai__askimo/shared/src/testFixtures/kotlin/io/askimo/test/extensions/AskimoTestHome.kt)<br>[shared/src/testFixtures/kotlin/io/askimo/test/extensions/RetryOnFailure.kt](../../../../sources/askimo-ai__askimo/shared/src/testFixtures/kotlin/io/askimo/test/extensions/RetryOnFailure.kt)<br>[shared/src/testFixtures/kotlin/io/askimo/test/extensions/TestSecureSessionManager.kt](../../../../sources/askimo-ai__askimo/shared/src/testFixtures/kotlin/io/askimo/test/extensions/TestSecureSessionManager.kt)<br>[shared/src/test/kotlin/io/askimo/core/vision/ImageProcessorTest.kt](../../../../sources/askimo-ai__askimo/shared/src/test/kotlin/io/askimo/core/vision/ImageProcessorTest.kt)<br>[shared/src/test/kotlin/io/askimo/core/util/FileUtilsTest.kt](../../../../sources/askimo-ai__askimo/shared/src/test/kotlin/io/askimo/core/util/FileUtilsTest.kt)<br>[shared/src/test/kotlin/io/askimo/core/skills/ClaudeStreamJsonEventParserTest.kt](../../../../sources/askimo-ai__askimo/shared/src/test/kotlin/io/askimo/core/skills/ClaudeStreamJsonEventParserTest.kt)<br>[shared/src/test/kotlin/io/askimo/core/skills/GeminiStreamJsonEventParserTest.kt](../../../../sources/askimo-ai__askimo/shared/src/test/kotlin/io/askimo/core/skills/GeminiStreamJsonEventParserTest.kt) |
| security | 14 | [shared/src/main/kotlin/io/askimo/core/security/EncryptionManager.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/security/EncryptionManager.kt)<br>[shared/src/main/kotlin/io/askimo/core/security/KeychainManager.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/security/KeychainManager.kt)<br>[shared/src/main/kotlin/io/askimo/core/security/SecureKeyManager.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/security/SecureKeyManager.kt)<br>[shared/src/main/kotlin/io/askimo/core/security/SecureSessionManager.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/security/SecureSessionManager.kt)<br>[cli/src/test/kotlin/io/askimo/core/security/EncryptionManagerTest.kt](../../../../sources/askimo-ai__askimo/cli/src/test/kotlin/io/askimo/core/security/EncryptionManagerTest.kt)<br>[cli/src/test/kotlin/io/askimo/core/security/KeychainManagerLinuxIntegrationTest.kt](../../../../sources/askimo-ai__askimo/cli/src/test/kotlin/io/askimo/core/security/KeychainManagerLinuxIntegrationTest.kt)<br>[cli/src/test/kotlin/io/askimo/core/security/KeychainManagerMacOSIntegrationTest.kt](../../../../sources/askimo-ai__askimo/cli/src/test/kotlin/io/askimo/core/security/KeychainManagerMacOSIntegrationTest.kt)<br>[cli/src/test/kotlin/io/askimo/core/security/KeychainManagerWindowsIntegrationTest.kt](../../../../sources/askimo-ai__askimo/cli/src/test/kotlin/io/askimo/core/security/KeychainManagerWindowsIntegrationTest.kt) |
| ci | 4 | [.github/workflows/format-check.yml](../../../../sources/askimo-ai__askimo/.github/workflows/format-check.yml)<br>[.github/workflows/publish.yml](../../../../sources/askimo-ai__askimo/.github/workflows/publish.yml)<br>[.github/workflows/release.yml](../../../../sources/askimo-ai__askimo/.github/workflows/release.yml)<br>[.github/workflows/shared-tests.yml](../../../../sources/askimo-ai__askimo/.github/workflows/shared-tests.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 7 | [README.md](../../../../sources/askimo-ai__askimo/README.md)<br>[tools/installation/README.md](../../../../sources/askimo-ai__askimo/tools/installation/README.md)<br>[tools/git/README.md](../../../../sources/askimo-ai__askimo/tools/git/README.md)<br>[desktop-shared/src/main/resources/images/backgrounds/README.md](../../../../sources/askimo-ai__askimo/desktop-shared/src/main/resources/images/backgrounds/README.md)<br>[desktop/README.md](../../../../sources/askimo-ai__askimo/desktop/README.md)<br>[desktop/src/main/resources/images/README.md](../../../../sources/askimo-ai__askimo/desktop/src/main/resources/images/README.md)<br>[cli/src/test/kotlin/io/askimo/core/security/README.md](../../../../sources/askimo-ai__askimo/cli/src/test/kotlin/io/askimo/core/security/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 82 | [tools/macos/test-signing-local.sh](../../../../sources/askimo-ai__askimo/tools/macos/test-signing-local.sh)<br>[shared/src/testFixtures/kotlin/io/askimo/test/extensions/AskimoTestHome.kt](../../../../sources/askimo-ai__askimo/shared/src/testFixtures/kotlin/io/askimo/test/extensions/AskimoTestHome.kt)<br>[shared/src/testFixtures/kotlin/io/askimo/test/extensions/RetryOnFailure.kt](../../../../sources/askimo-ai__askimo/shared/src/testFixtures/kotlin/io/askimo/test/extensions/RetryOnFailure.kt)<br>[shared/src/testFixtures/kotlin/io/askimo/test/extensions/TestSecureSessionManager.kt](../../../../sources/askimo-ai__askimo/shared/src/testFixtures/kotlin/io/askimo/test/extensions/TestSecureSessionManager.kt)<br>[shared/src/test/kotlin/io/askimo/core/vision/ImageProcessorTest.kt](../../../../sources/askimo-ai__askimo/shared/src/test/kotlin/io/askimo/core/vision/ImageProcessorTest.kt)<br>[shared/src/test/kotlin/io/askimo/core/util/FileUtilsTest.kt](../../../../sources/askimo-ai__askimo/shared/src/test/kotlin/io/askimo/core/util/FileUtilsTest.kt) |
| CI workflow | 4 | [.github/workflows/format-check.yml](../../../../sources/askimo-ai__askimo/.github/workflows/format-check.yml)<br>[.github/workflows/publish.yml](../../../../sources/askimo-ai__askimo/.github/workflows/publish.yml)<br>[.github/workflows/release.yml](../../../../sources/askimo-ai__askimo/.github/workflows/release.yml)<br>[.github/workflows/shared-tests.yml](../../../../sources/askimo-ai__askimo/.github/workflows/shared-tests.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 14 | [shared/src/main/kotlin/io/askimo/core/security/EncryptionManager.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/security/EncryptionManager.kt)<br>[shared/src/main/kotlin/io/askimo/core/security/KeychainManager.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/security/KeychainManager.kt)<br>[shared/src/main/kotlin/io/askimo/core/security/SecureKeyManager.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/security/SecureKeyManager.kt)<br>[shared/src/main/kotlin/io/askimo/core/security/SecureSessionManager.kt](../../../../sources/askimo-ai__askimo/shared/src/main/kotlin/io/askimo/core/security/SecureSessionManager.kt)<br>[cli/src/test/kotlin/io/askimo/core/security/EncryptionManagerTest.kt](../../../../sources/askimo-ai__askimo/cli/src/test/kotlin/io/askimo/core/security/EncryptionManagerTest.kt)<br>[cli/src/test/kotlin/io/askimo/core/security/KeychainManagerLinuxIntegrationTest.kt](../../../../sources/askimo-ai__askimo/cli/src/test/kotlin/io/askimo/core/security/KeychainManagerLinuxIntegrationTest.kt) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `shared/src/test/kotlin/io/askimo/core/mcp/connectors/StdioMcpConnectorWindowsTest.kt`, `shared/src/main/kotlin/io/askimo/core/mcp/McpClientFactory.kt`, `shared/src/main/kotlin/io/askimo/core/mcp/McpConnector.kt`.
2. agent/tool runtime 매핑: `tools/macos/MACOS_SIGNING_SETUP.md`, `tools/macos/test-signing-local.sh`, `tools/installation/install.ps1`.
3. retrieval/memory/indexing 확인: `shared/src/test/kotlin/io/askimo/core/rag/MetadataAwareContentInjectorTest.kt`, `shared/src/test/kotlin/io/askimo/core/rag/indexing/HybridIndexerTest.kt`, `shared/src/test/kotlin/io/askimo/core/rag/filter/FilterChainTest.kt`.
4. test/eval 파일로 동작 검증: `tools/macos/test-signing-local.sh`, `shared/src/testFixtures/kotlin/io/askimo/test/extensions/AskimoTestHome.kt`, `shared/src/testFixtures/kotlin/io/askimo/test/extensions/RetryOnFailure.kt`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Chat, RAG search, multi step Plans workflows, MCP tools, and Agents integration. Supports OpenAI, Claude, Gemini, Grok, . 핵심 구조 신호는 Kotlin, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
