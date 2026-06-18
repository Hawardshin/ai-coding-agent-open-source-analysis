# Eric-Terminal/ETOS-LLM-Studio

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Eric-Terminal/ETOS-LLM-Studio |
| local path | sources/Eric-Terminal__ETOS-LLM-Studio |
| HEAD | 5093a29 |
| stars/forks | 0 / 0 |
| language | Swift |
| license |  |
| pushedAt | 2026-06-16T14:53:50Z |
| trendScore / priorityScore | 70 / 211 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 432 | docs/debug-tools-go/README.md, README.md, docs/debug-tools-go/tui_mcp_test.go |
| LLM wiki / memory / graph | 365 | docs/debug-tools-go/README.md, README.md, docs/site/design/memory-and-profile.md |
| Frontend / developer experience | 260 | ETOSCore/ETOSCore/LocalLLMBridge/README.md, README.md, docs/landing/package.json |
| Security / compliance | 148 | docs/debug-tools-go/README.md, README.md, docs/debug-tools-go/tui_mcp_test.go |
| RAG / retrieval | 133 | README.md, docs/site/design/memory-and-profile.md, docs/site/en/design/memory-and-profile.md |
| Local LLM / on-device inference | 121 | ETOSCore/ETOSCore/LocalLLMBridge/README.md, README.md, docs/landing/src/i18n.js |
| AI agent / tool use | 60 | README.md, docs/site/en/modules/tools-and-mcp.md, docs/site/modules/tools-and-mcp.md |
| Spec / doc-driven workflow | 17 | docs/landing/README.md, docs/site/README.md, docs/site/en/design/memory-and-profile.md |
| Infra / observability | 3 | docs/site/pnpm-lock.yaml |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, frontend-dx, graphMemory, infra-observability, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Go, Swift, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 798 |
| manifests | 11 |
| docs | 99 |
| tests | 4 |
| ci/ops | 2 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | ETOS LLM Studio |
| headings | ETOS LLM Studio / 📸 截图 / 👋 写在前面 / 主要功能 / 💸 关于收费与开源 / 🛠️ 技术栈 / 🏗️ 项目架构 / 🚀 编译指南 / 📬 联系方式 |
| excerpt | ETOS LLM Studio ! Swift https //img.shields.io/badge/Swift FA7343?style=flat square&logo=swift&logoColor=white ! Platform https //img.shields.io/badge/Platform iOS%20%7C%20watchOS blue?style=flat square&logo=apple&logoColor=white ! License https //img.shields.io/badge/License GPLv3 0052CC?style=flat square ! Build https //img.shields.io/badge/Build Passing 44CC11?style=flat square 一个运行在 iOS 和 Apple Watch 上的原生 AI 客户端。支持 OpenAI、Anthropic Claude、Google Gemini 与本机 GGUF / llama.cpp 模型，内置 MCP 工具调用、Agent Skills 技能包、本地 RAG 记忆、世界书、每日脉冲、应用锁与 SQLCipher 全盘加密、CloudKit / WatchConnectivity 双端同步以及 Siri 快捷指令。 English docs/readme/README EN.md 繁體中文 docs/readme/README ZH HANT.md 日本語 docs/readme/README JA.md Рус |


## 주요 파일

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

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

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


## 확장자 분포

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


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
