# Eric-Terminal/ETOS-LLM-Studio Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

A native LLM client for iOS & Apple Watch. Run local GGUF models offline via llama.cpp, or connect to OpenAI/Claude/Gemini. Features local RAG, Model Context Protocol (MCP) tools, Siri Shortcuts, and cross-device sync. Built with Swift.

## 요약

- 조사 단위: `sources/Eric-Terminal__ETOS-LLM-Studio` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 815 files, 122 directories, depth score 120, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=ETOSCore/ETOSCore/Memory/AudioMemoryModels.swift, ETOSCore/ETOSCore/Memory/ConversationMemoryManager.swift, ETOSCore/ETOSCore/Memory/MemoryChunker.swift이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Eric-Terminal/ETOS-LLM-Studio |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Swift |
| Stars | 139 |
| Forks | 9 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Eric-Terminal__ETOS-LLM-Studio](../../../../sources/Eric-Terminal__ETOS-LLM-Studio) |
| Existing report | [reports/global-trending/repositories/Eric-Terminal__ETOS-LLM-Studio.md](../../../global-trending/repositories/Eric-Terminal__ETOS-LLM-Studio.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 815 / 122 |
| Max observed depth | 6 |
| Top directories | .github, assets, ci_scripts, Dependencies, docs, ETOS LLM Studio, ETOS LLM Studio.xcworkspace, ETOSCore, scripts |
| Top extensions | .swift: 646, .md: 53, .strings: 16, .png: 15, .go: 13, .html: 11, .js: 10, .json: 10, .cpp: 6, .xcscheme: 3, (none): 3, .css: 2 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 86 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| ci_scripts | ci surface | 1 |
| Dependencies | ci surface | 1 |
| ETOS LLM Studio | top-level component | 1 |
| ETOS LLM Studio.xcworkspace | top-level component | 1 |
| ETOSCore | top-level component | 1 |
| scripts | top-level component | 1 |


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
| retrieval | [ETOSCore/ETOSCore/Memory/AudioMemoryModels.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Memory/AudioMemoryModels.swift) | retrieval signal |
| retrieval | [ETOSCore/ETOSCore/Memory/ConversationMemoryManager.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Memory/ConversationMemoryManager.swift) | retrieval signal |
| retrieval | [ETOSCore/ETOSCore/Memory/MemoryChunker.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Memory/MemoryChunker.swift) | retrieval signal |
| retrieval | [ETOSCore/ETOSCore/Memory/MemoryEmbeddingService.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Memory/MemoryEmbeddingService.swift) | retrieval signal |
| entrypoints | [docs/landing/src/App.vue](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/landing/src/App.vue) | entrypoints signal |
| entrypoints | [docs/landing/src/main.js](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/landing/src/main.js) | entrypoints signal |
| entrypoints | [docs/debug-tools-go/main.go](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/debug-tools-go/main.go) | entrypoints signal |
| docs | [README.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/README.md) | docs signal |
| docs | [ETOSCore/ETOSCore/LocalLLMBridge/README.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/LocalLLMBridge/README.md) | docs signal |
| docs | [docs/PRIVACY_POLICY.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/PRIVACY_POLICY.md) | docs signal |
| docs | [docs/site/index.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/site/index.md) | docs signal |
| eval | [docs/debug-tools-go/main_test.go](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/debug-tools-go/main_test.go) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [docs/landing/src/App.vue](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/landing/src/App.vue)<br>[docs/landing/src/main.js](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/landing/src/main.js)<br>[docs/debug-tools-go/main.go](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/debug-tools-go/main.go) |
| agentRuntime | 26 | [ETOSCore/ETOSCore/Skills/SkillBundleImporter.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Skills/SkillBundleImporter.swift)<br>[ETOSCore/ETOSCore/Skills/SkillFrontmatterParser.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Skills/SkillFrontmatterParser.swift)<br>[ETOSCore/ETOSCore/Skills/SkillGitHubImporter.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Skills/SkillGitHubImporter.swift)<br>[ETOSCore/ETOSCore/Skills/SkillManager.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Skills/SkillManager.swift)<br>[ETOSCore/ETOSCore/Skills/SkillManifestResolver.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Skills/SkillManifestResolver.swift)<br>[ETOSCore/ETOSCore/Skills/SkillModels.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Skills/SkillModels.swift)<br>[ETOSCore/ETOSCore/Skills/SkillPaths.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Skills/SkillPaths.swift)<br>[ETOSCore/ETOSCore/Skills/SkillResourcePolicy.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Skills/SkillResourcePolicy.swift) |
| mcp | 34 | [ETOSCore/ETOSCore/MCP/MCPBuiltInAppToolServer.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/MCP/MCPBuiltInAppToolServer.swift)<br>[ETOSCore/ETOSCore/MCP/MCPBuiltInPersonalDataEventKit.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/MCP/MCPBuiltInPersonalDataEventKit.swift)<br>[ETOSCore/ETOSCore/MCP/MCPBuiltInPersonalDataHealth.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/MCP/MCPBuiltInPersonalDataHealth.swift)<br>[ETOSCore/ETOSCore/MCP/MCPBuiltInPersonalDataServer.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/MCP/MCPBuiltInPersonalDataServer.swift)<br>[ETOSCore/ETOSCore/MCP/MCPBuiltInSearchServer.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/MCP/MCPBuiltInSearchServer.swift)<br>[ETOSCore/ETOSCore/MCP/MCPClient.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/MCP/MCPClient.swift)<br>[ETOSCore/ETOSCore/MCP/MCPJSONRPCModels.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/MCP/MCPJSONRPCModels.swift)<br>[ETOSCore/ETOSCore/MCP/MCPManager.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/MCP/MCPManager.swift) |
| retrieval | 23 | [ETOSCore/ETOSCore/Memory/AudioMemoryModels.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Memory/AudioMemoryModels.swift)<br>[ETOSCore/ETOSCore/Memory/ConversationMemoryManager.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Memory/ConversationMemoryManager.swift)<br>[ETOSCore/ETOSCore/Memory/MemoryChunker.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Memory/MemoryChunker.swift)<br>[ETOSCore/ETOSCore/Memory/MemoryEmbeddingService.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Memory/MemoryEmbeddingService.swift)<br>[ETOSCore/ETOSCore/Memory/MemoryManager.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Memory/MemoryManager.swift)<br>[ETOSCore/ETOSCore/Memory/MemoryManagerSupport.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Memory/MemoryManagerSupport.swift)<br>[ETOSCore/ETOSCore/Memory/MemoryManagerTypes.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Memory/MemoryManagerTypes.swift)<br>[ETOSCore/ETOSCore/Memory/MemoryRawStore.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Memory/MemoryRawStore.swift) |
| spec | 10 | [docs/site/en/design/daily-pulse.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/site/en/design/daily-pulse.md)<br>[docs/site/en/design/index.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/site/en/design/index.md)<br>[docs/site/en/design/memory-and-profile.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/site/en/design/memory-and-profile.md)<br>[docs/site/en/design/prompt-assembly.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/site/en/design/prompt-assembly.md)<br>[docs/site/en/design/worldbook-and-tools.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/site/en/design/worldbook-and-tools.md)<br>[docs/site/design/daily-pulse.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/site/design/daily-pulse.md)<br>[docs/site/design/index.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/site/design/index.md)<br>[docs/site/design/memory-and-profile.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/site/design/memory-and-profile.md) |
| eval | 4 | [docs/debug-tools-go/main_test.go](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/debug-tools-go/main_test.go)<br>[docs/debug-tools-go/tui_mcp_test.go](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/debug-tools-go/tui_mcp_test.go)<br>[docs/debug-tools-go/tui_support_test.go](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/debug-tools-go/tui_support_test.go)<br>[docs/debug-tools-go/web_console_test.go](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/debug-tools-go/web_console_test.go) |
| security | 3 | [ETOSCore/ETOSCore/Security/AppLockManager.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Security/AppLockManager.swift)<br>[ETOSCore/ETOSCore/Security/DatabaseEncryptionManager.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Security/DatabaseEncryptionManager.swift)<br>[docs/PRIVACY_POLICY.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/PRIVACY_POLICY.md) |
| ci | 2 | [.github/workflows/debug-tools-go-release.yml](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/.github/workflows/debug-tools-go-release.yml)<br>[.github/workflows/pr-build-check.yml](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/.github/workflows/pr-build-check.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 106 | [README.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/README.md)<br>[ETOSCore/ETOSCore/LocalLLMBridge/README.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/LocalLLMBridge/README.md)<br>[docs/PRIVACY_POLICY.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/PRIVACY_POLICY.md)<br>[docs/site/index.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/site/index.md)<br>[docs/site/package.json](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/site/package.json)<br>[docs/site/pnpm-lock.yaml](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/site/pnpm-lock.yaml)<br>[docs/site/README.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/site/README.md)<br>[docs/site/tips/hidden-gems.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/site/tips/hidden-gems.md) |
| config | 3 | [docs/site/package.json](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/site/package.json)<br>[docs/landing/package.json](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/landing/package.json)<br>[docs/debug-tools-go/go.mod](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/debug-tools-go/go.mod) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 4 | [docs/debug-tools-go/main_test.go](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/debug-tools-go/main_test.go)<br>[docs/debug-tools-go/tui_mcp_test.go](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/debug-tools-go/tui_mcp_test.go)<br>[docs/debug-tools-go/tui_support_test.go](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/debug-tools-go/tui_support_test.go)<br>[docs/debug-tools-go/web_console_test.go](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/debug-tools-go/web_console_test.go) |
| CI workflows | 2 | [.github/workflows/debug-tools-go-release.yml](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/.github/workflows/debug-tools-go-release.yml)<br>[.github/workflows/pr-build-check.yml](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/.github/workflows/pr-build-check.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 3 | [ETOSCore/ETOSCore/Security/AppLockManager.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Security/AppLockManager.swift)<br>[ETOSCore/ETOSCore/Security/DatabaseEncryptionManager.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Security/DatabaseEncryptionManager.swift)<br>[docs/PRIVACY_POLICY.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/PRIVACY_POLICY.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `ETOSCore/ETOSCore/Memory/AudioMemoryModels.swift`, `ETOSCore/ETOSCore/Memory/ConversationMemoryManager.swift`, `ETOSCore/ETOSCore/Memory/MemoryChunker.swift`.
2. Trace execution through entrypoints: `docs/landing/src/App.vue`, `docs/landing/src/main.js`, `docs/debug-tools-go/main.go`.
3. Map agent/tool runtime through: `ETOSCore/ETOSCore/Skills/SkillBundleImporter.swift`, `ETOSCore/ETOSCore/Skills/SkillFrontmatterParser.swift`, `ETOSCore/ETOSCore/Skills/SkillGitHubImporter.swift`.
4. Inspect retrieval/memory/indexing through: `ETOSCore/ETOSCore/Memory/AudioMemoryModels.swift`, `ETOSCore/ETOSCore/Memory/ConversationMemoryManager.swift`, `ETOSCore/ETOSCore/Memory/MemoryChunker.swift`.
5. Verify behavior through test/eval files: `docs/debug-tools-go/main_test.go`, `docs/debug-tools-go/tui_mcp_test.go`, `docs/debug-tools-go/tui_support_test.go`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 A native LLM client for iOS & Apple Watch. Run local GGUF models offline via llama.cpp, or connect to OpenAI/Claude/Gemi. 핵심 구조 신호는 Swift, README.md, ci, docs, spec-artifacts이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
