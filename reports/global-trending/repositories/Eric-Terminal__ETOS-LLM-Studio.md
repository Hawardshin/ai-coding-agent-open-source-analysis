# Eric-Terminal/ETOS-LLM-Studio

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Eric-Terminal/ETOS-LLM-Studio |
| local path | sources/Eric-Terminal__ETOS-LLM-Studio |
| HEAD | 5093a29 |
| stars/forks | 139 / 9 |
| language | Swift |
| license |  |
| pushedAt | 2026-06-16T14:53:50Z |
| trendScore / priorityScore | 172 / 460 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 430 | docs/debug-tools-go/README.md, README.md, docs/debug-tools-go/tui_mcp_test.go |
| Database / data infrastructure | 299 | docs/debug-tools-go/README.md, README.md, docs/debug-tools-go/tui_mcp_test.go |
| Developer tools / DX | 170 | ETOSCore/ETOSCore/LocalLLMBridge/README.md, README.md, docs/debug-tools-go/tui_support_test.go |
| RAG / retrieval / knowledge | 127 | README.md, docs/site/design/memory-and-profile.md, docs/site/en/design/memory-and-profile.md |
| Local LLM / inference | 121 | ETOSCore/ETOSCore/LocalLLMBridge/README.md, README.md, ETOSCore/ETOSCoreTests/LocalLLMChatTemplatePayloadTests.swift |
| Security / supply chain | 113 | docs/debug-tools-go/README.md, README.md, docs/debug-tools-go/tui_mcp_test.go |
| Cloud native / infrastructure | 96 | docs/debug-tools-go/tui_support_test.go, docs/debug-tools-go/main.go, docs/debug-tools-go/tui_support.go |
| Frontend / app framework | 89 | docs/landing/package.json, docs/site/design/prompt-assembly.md, docs/site/en/design/prompt-assembly.md |
| Coding agent / software automation | 71 | docs/landing/README.md, docs/site/en/modules/tools-and-mcp.md, docs/site/modules/tools-and-mcp.md |
| AI agent / orchestration | 48 | README.md, docs/site/en/modules/tools-and-mcp.md, docs/site/modules/tools-and-mcp.md |
| Data / ML platform | 13 | docs/site/en/design/prompt-assembly.md, ETOSCore/ETOSCoreTests/MemoryManagerTests.swift, ETOSCore/ETOSCoreTests/VectorAndHistorySearchTests.swift |
| Observability / evaluation | 2 | docs/site/en/design/worldbook-and-tools.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Go, Swift, C/C++ |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 798 |
| manifests | 11 |
| docs | 99 |
| tests | 4 |
| ci/ops | 2 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | ETOS LLM Studio | ETOS LLM Studio / 📸 截图 / 👋 写在前面 / 主要功能 / 💸 关于收费与开源 / 🛠️ 技术栈 / 🏗️ 项目架构 / 🚀 编译指南 / 📬 联系方式 | ETOS LLM Studio ! Swift https //img.shields.io/badge/Swift FA7343?style=flat square&logo=swift&logoColor=white ! Platform https //img.shields.io/badge/Platform iOS%20%7C%20watchOS blue?style=flat square&logo=apple&logoColor=white ! License https //img.shields.io/badge/License GPLv3 0052CC?style=flat square ! Build https //img.shields.io/badge/Build Passing 44CC11?style=flat square 一个运行在 iOS 和 Apple Watch 上的原生 AI 客户端。支持 OpenAI、Anthropic Claude、Google Gemini 与本机 GGUF / llama.cpp 模型，内置 MCP 工具调用、Agent Skills 技能包、本地 RAG 记忆、世界书、每日脉冲、应用锁与 SQLCipher 全盘加密、CloudKit / WatchConnectivity 双端同步以及 Siri 快捷指令。 English docs/readme/README EN.md 繁體中文 docs/readme/README ZH HANT.md 日本語 docs/readme/README JA.md Рус |


## Key Files

### Manifests

- docs/debug-tools-go/README.md
- docs/landing/README.md
- docs/site/README.md
- ETOSCore/ETOSCore/LocalLLMBridge/README.md
- README.md
- docs/debug-tools-go/go.mod
- docs/landing/package.json
- docs/site/package.json
- docs/debug-tools-go/go.sum
- ETOS LLM Studio.xcworkspace/xcshareddata/swiftpm/Package.resolved
- ETOSCore/ETOSCore.xcodeproj/project.xcworkspace/xcshareddata/swiftpm/Package.resolved


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| ETOSCore | 411 |
| ETOS LLM Studio | 280 |
| docs | 96 |
| .github | 2 |
| ETOS LLM Studio.xcworkspace | 2 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .gitmodules | 1 |
| ci_scripts | 1 |
| LICENSE.txt | 1 |
| README.md | 1 |
| scripts | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .swift | 646 |
| .md | 53 |
| .strings | 16 |
| .go | 13 |
| .html | 11 |
| .js | 10 |
| .json | 10 |
| .cpp | 6 |
| .xcscheme | 3 |
| [no-ext] | 3 |
| .css | 2 |
| .entitlements | 2 |
| .h | 2 |
| .pbxproj | 2 |
| .plist | 2 |
| .resolved | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
