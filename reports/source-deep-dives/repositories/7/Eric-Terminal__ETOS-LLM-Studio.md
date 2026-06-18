# Eric-Terminal/ETOS-LLM-Studio 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

A native LLM client for iOS & Apple Watch. Run local GGUF models offline via llama.cpp, or connect to OpenAI/Claude/Gemini. Features local RAG, Model Context Protocol (MCP) tools, Siri Shortcuts, and cross-device sync. Built with Swift.

## 요약

- 조사 단위: `sources/Eric-Terminal__ETOS-LLM-Studio` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 815 files, 122 directories, depth score 114, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=ETOSCore/ETOSCore/Memory/AudioMemoryModels.swift, ETOSCore/ETOSCore/Memory/ConversationMemoryManager.swift, ETOSCore/ETOSCore/Memory/MemoryChunker.swift이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Eric-Terminal/ETOS-LLM-Studio |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Swift |
| Stars | 139 |
| Forks | 9 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Eric-Terminal__ETOS-LLM-Studio](../../../../sources/Eric-Terminal__ETOS-LLM-Studio) |
| 기존 보고서 | [reports/global-trending/repositories/Eric-Terminal__ETOS-LLM-Studio.md](../../../global-trending/repositories/Eric-Terminal__ETOS-LLM-Studio.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 815 / 122 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, assets, ci_scripts, Dependencies, docs, ETOS LLM Studio, ETOS LLM Studio.xcworkspace, ETOSCore, scripts |
| 상위 확장자 | .swift: 646, .md: 53, .strings: 16, .png: 15, .go: 13, .html: 11, .js: 10, .json: 10, .cpp: 6, .xcscheme: 3, (none): 3, .css: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [docs/landing/src/App.vue](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/landing/src/App.vue)<br>[docs/landing/src/main.js](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/landing/src/main.js)<br>[docs/debug-tools-go/main.go](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/debug-tools-go/main.go) |
| agentRuntime | 26 | [ETOSCore/ETOSCore/Skills/SkillBundleImporter.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Skills/SkillBundleImporter.swift)<br>[ETOSCore/ETOSCore/Skills/SkillFrontmatterParser.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Skills/SkillFrontmatterParser.swift)<br>[ETOSCore/ETOSCore/Skills/SkillGitHubImporter.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Skills/SkillGitHubImporter.swift)<br>[ETOSCore/ETOSCore/Skills/SkillManager.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Skills/SkillManager.swift)<br>[ETOSCore/ETOSCore/Skills/SkillManifestResolver.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Skills/SkillManifestResolver.swift)<br>[ETOSCore/ETOSCore/Skills/SkillModels.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Skills/SkillModels.swift)<br>[ETOSCore/ETOSCore/Skills/SkillPaths.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Skills/SkillPaths.swift)<br>[ETOSCore/ETOSCore/Skills/SkillResourcePolicy.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Skills/SkillResourcePolicy.swift) |
| mcp | 34 | [ETOSCore/ETOSCore/MCP/MCPBuiltInAppToolServer.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/MCP/MCPBuiltInAppToolServer.swift)<br>[ETOSCore/ETOSCore/MCP/MCPBuiltInPersonalDataEventKit.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/MCP/MCPBuiltInPersonalDataEventKit.swift)<br>[ETOSCore/ETOSCore/MCP/MCPBuiltInPersonalDataHealth.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/MCP/MCPBuiltInPersonalDataHealth.swift)<br>[ETOSCore/ETOSCore/MCP/MCPBuiltInPersonalDataServer.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/MCP/MCPBuiltInPersonalDataServer.swift)<br>[ETOSCore/ETOSCore/MCP/MCPBuiltInSearchServer.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/MCP/MCPBuiltInSearchServer.swift)<br>[ETOSCore/ETOSCore/MCP/MCPClient.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/MCP/MCPClient.swift)<br>[ETOSCore/ETOSCore/MCP/MCPJSONRPCModels.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/MCP/MCPJSONRPCModels.swift)<br>[ETOSCore/ETOSCore/MCP/MCPManager.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/MCP/MCPManager.swift) |
| retrieval | 23 | [ETOSCore/ETOSCore/Memory/AudioMemoryModels.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Memory/AudioMemoryModels.swift)<br>[ETOSCore/ETOSCore/Memory/ConversationMemoryManager.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Memory/ConversationMemoryManager.swift)<br>[ETOSCore/ETOSCore/Memory/MemoryChunker.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Memory/MemoryChunker.swift)<br>[ETOSCore/ETOSCore/Memory/MemoryEmbeddingService.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Memory/MemoryEmbeddingService.swift)<br>[ETOSCore/ETOSCore/Memory/MemoryManager.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Memory/MemoryManager.swift)<br>[ETOSCore/ETOSCore/Memory/MemoryManagerSupport.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Memory/MemoryManagerSupport.swift)<br>[ETOSCore/ETOSCore/Memory/MemoryManagerTypes.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Memory/MemoryManagerTypes.swift)<br>[ETOSCore/ETOSCore/Memory/MemoryRawStore.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Memory/MemoryRawStore.swift) |
| spec | 10 | [docs/site/en/design/daily-pulse.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/site/en/design/daily-pulse.md)<br>[docs/site/en/design/index.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/site/en/design/index.md)<br>[docs/site/en/design/memory-and-profile.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/site/en/design/memory-and-profile.md)<br>[docs/site/en/design/prompt-assembly.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/site/en/design/prompt-assembly.md)<br>[docs/site/en/design/worldbook-and-tools.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/site/en/design/worldbook-and-tools.md)<br>[docs/site/design/daily-pulse.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/site/design/daily-pulse.md)<br>[docs/site/design/index.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/site/design/index.md)<br>[docs/site/design/memory-and-profile.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/site/design/memory-and-profile.md) |
| eval | 4 | [docs/debug-tools-go/main_test.go](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/debug-tools-go/main_test.go)<br>[docs/debug-tools-go/tui_mcp_test.go](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/debug-tools-go/tui_mcp_test.go)<br>[docs/debug-tools-go/tui_support_test.go](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/debug-tools-go/tui_support_test.go)<br>[docs/debug-tools-go/web_console_test.go](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/debug-tools-go/web_console_test.go) |
| security | 3 | [ETOSCore/ETOSCore/Security/AppLockManager.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Security/AppLockManager.swift)<br>[ETOSCore/ETOSCore/Security/DatabaseEncryptionManager.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Security/DatabaseEncryptionManager.swift)<br>[docs/PRIVACY_POLICY.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/PRIVACY_POLICY.md) |
| ci | 2 | [.github/workflows/debug-tools-go-release.yml](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/.github/workflows/debug-tools-go-release.yml)<br>[.github/workflows/pr-build-check.yml](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/.github/workflows/pr-build-check.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 106 | [README.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/README.md)<br>[ETOSCore/ETOSCore/LocalLLMBridge/README.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/LocalLLMBridge/README.md)<br>[docs/PRIVACY_POLICY.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/PRIVACY_POLICY.md)<br>[docs/site/index.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/site/index.md)<br>[docs/site/package.json](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/site/package.json)<br>[docs/site/pnpm-lock.yaml](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/site/pnpm-lock.yaml)<br>[docs/site/README.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/site/README.md)<br>[docs/site/tips/hidden-gems.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/site/tips/hidden-gems.md) |
| config | 3 | [docs/site/package.json](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/site/package.json)<br>[docs/landing/package.json](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/landing/package.json)<br>[docs/debug-tools-go/go.mod](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/debug-tools-go/go.mod) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 4 | [docs/debug-tools-go/main_test.go](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/debug-tools-go/main_test.go)<br>[docs/debug-tools-go/tui_mcp_test.go](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/debug-tools-go/tui_mcp_test.go)<br>[docs/debug-tools-go/tui_support_test.go](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/debug-tools-go/tui_support_test.go)<br>[docs/debug-tools-go/web_console_test.go](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/debug-tools-go/web_console_test.go) |
| CI workflow | 2 | [.github/workflows/debug-tools-go-release.yml](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/.github/workflows/debug-tools-go-release.yml)<br>[.github/workflows/pr-build-check.yml](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/.github/workflows/pr-build-check.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 3 | [ETOSCore/ETOSCore/Security/AppLockManager.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Security/AppLockManager.swift)<br>[ETOSCore/ETOSCore/Security/DatabaseEncryptionManager.swift](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/ETOSCore/ETOSCore/Security/DatabaseEncryptionManager.swift)<br>[docs/PRIVACY_POLICY.md](../../../../sources/Eric-Terminal__ETOS-LLM-Studio/docs/PRIVACY_POLICY.md) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `ETOSCore/ETOSCore/Memory/AudioMemoryModels.swift`, `ETOSCore/ETOSCore/Memory/ConversationMemoryManager.swift`, `ETOSCore/ETOSCore/Memory/MemoryChunker.swift`.
2. entrypoint를 따라 실행 흐름 확인: `docs/landing/src/App.vue`, `docs/landing/src/main.js`, `docs/debug-tools-go/main.go`.
3. agent/tool runtime 매핑: `ETOSCore/ETOSCore/Skills/SkillBundleImporter.swift`, `ETOSCore/ETOSCore/Skills/SkillFrontmatterParser.swift`, `ETOSCore/ETOSCore/Skills/SkillGitHubImporter.swift`.
4. retrieval/memory/indexing 확인: `ETOSCore/ETOSCore/Memory/AudioMemoryModels.swift`, `ETOSCore/ETOSCore/Memory/ConversationMemoryManager.swift`, `ETOSCore/ETOSCore/Memory/MemoryChunker.swift`.
5. test/eval 파일로 동작 검증: `docs/debug-tools-go/main_test.go`, `docs/debug-tools-go/tui_mcp_test.go`, `docs/debug-tools-go/tui_support_test.go`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 A native LLM client for iOS & Apple Watch. Run local GGUF models offline via llama.cpp, or connect to OpenAI/Claude/Gemi. 핵심 구조 신호는 Swift, README.md, ci, docs, spec-artifacts이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
