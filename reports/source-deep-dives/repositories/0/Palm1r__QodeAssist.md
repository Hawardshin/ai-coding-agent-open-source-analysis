# Palm1r/QodeAssist 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

QodeAssist is an AI-powered coding assistant plugin for Qt Creator

## 요약

- 조사 단위: `sources/Palm1r__QodeAssist` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 562 files, 43 directories, depth score 61, key references 4개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 ci=.github/workflows/build_cmake.yml, .github/workflows/README.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 4개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Palm1r/QodeAssist |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | C++ |
| Stars | 410 |
| Forks | 57 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Palm1r__QodeAssist](../../../../sources/Palm1r__QodeAssist) |
| 기존 보고서 | [reports/global-trending/repositories/Palm1r__QodeAssist.md](../../../global-trending/repositories/Palm1r__QodeAssist.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 562 / 43 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, chat, ChatView, context, docs, logger, mcp, pluginllmcore, providers, resources, settings, sources, TaskFlow, templates, test, tools, UIControls, widgets |
| 상위 확장자 | .hpp: 226, .cpp: 172, .svg: 33, .qml: 32, .txt: 22, .toml: 18, .md: 17, .ts: 14, .png: 10, .h: 5, (none): 4, .qrc: 3 |
| 소스 패턴 | agent/tool runtime, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 14 |
| .github | ci surface | 1 |
| chat | top-level component | 1 |
| ChatView | top-level component | 1 |
| context | top-level component | 1 |
| logger | top-level component | 1 |
| mcp | top-level component | 1 |
| pluginllmcore | top-level component | 1 |
| providers | top-level component | 1 |
| resources | top-level component | 1 |
| settings | top-level component | 1 |
| sources | top-level component | 1 |
| TaskFlow | top-level component | 1 |
| templates | top-level component | 1 |
| test | validation surface | 1 |
| tools | top-level component | 1 |
| UIControls | top-level component | 1 |
| widgets | top-level component | 1 |


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
| ci | [.github/workflows/build_cmake.yml](../../../../sources/Palm1r__QodeAssist/.github/workflows/build_cmake.yml) | ci signal |
| ci | [.github/workflows/README.md](../../../../sources/Palm1r__QodeAssist/.github/workflows/README.md) | ci signal |
| eval | [test/ClaudeCacheControlTest.cpp](../../../../sources/Palm1r__QodeAssist/test/ClaudeCacheControlTest.cpp) | eval support |
| eval | [test/CMakeLists.txt](../../../../sources/Palm1r__QodeAssist/test/CMakeLists.txt) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 77 | [tools/BuildProjectTool.cpp](../../../../sources/Palm1r__QodeAssist/tools/BuildProjectTool.cpp)<br>[tools/BuildProjectTool.hpp](../../../../sources/Palm1r__QodeAssist/tools/BuildProjectTool.hpp)<br>[tools/CreateNewFileTool.cpp](../../../../sources/Palm1r__QodeAssist/tools/CreateNewFileTool.cpp)<br>[tools/CreateNewFileTool.hpp](../../../../sources/Palm1r__QodeAssist/tools/CreateNewFileTool.hpp)<br>[tools/EditFileTool.cpp](../../../../sources/Palm1r__QodeAssist/tools/EditFileTool.cpp)<br>[tools/EditFileTool.hpp](../../../../sources/Palm1r__QodeAssist/tools/EditFileTool.hpp)<br>[tools/ExecuteTerminalCommandTool.cpp](../../../../sources/Palm1r__QodeAssist/tools/ExecuteTerminalCommandTool.cpp)<br>[tools/ExecuteTerminalCommandTool.hpp](../../../../sources/Palm1r__QodeAssist/tools/ExecuteTerminalCommandTool.hpp) |
| mcp | 6 | [mcp/McpClientsManager.cpp](../../../../sources/Palm1r__QodeAssist/mcp/McpClientsManager.cpp)<br>[mcp/McpClientsManager.hpp](../../../../sources/Palm1r__QodeAssist/mcp/McpClientsManager.hpp)<br>[mcp/McpServerConnection.cpp](../../../../sources/Palm1r__QodeAssist/mcp/McpServerConnection.cpp)<br>[mcp/McpServerConnection.hpp](../../../../sources/Palm1r__QodeAssist/mcp/McpServerConnection.hpp)<br>[mcp/McpServerManager.cpp](../../../../sources/Palm1r__QodeAssist/mcp/McpServerManager.cpp)<br>[mcp/McpServerManager.hpp](../../../../sources/Palm1r__QodeAssist/mcp/McpServerManager.hpp) |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 7 | [test/ClaudeCacheControlTest.cpp](../../../../sources/Palm1r__QodeAssist/test/ClaudeCacheControlTest.cpp)<br>[test/CMakeLists.txt](../../../../sources/Palm1r__QodeAssist/test/CMakeLists.txt)<br>[test/CodeHandlerTest.cpp](../../../../sources/Palm1r__QodeAssist/test/CodeHandlerTest.cpp)<br>[test/DocumentContextReaderTest.cpp](../../../../sources/Palm1r__QodeAssist/test/DocumentContextReaderTest.cpp)<br>[test/LLMSuggestionTest.cpp](../../../../sources/Palm1r__QodeAssist/test/LLMSuggestionTest.cpp)<br>[test/TestUtils.hpp](../../../../sources/Palm1r__QodeAssist/test/TestUtils.hpp)<br>[test/unittest_main.cpp](../../../../sources/Palm1r__QodeAssist/test/unittest_main.cpp) |
| security | 0 | 명확하지 않음 |
| ci | 2 | [.github/workflows/build_cmake.yml](../../../../sources/Palm1r__QodeAssist/.github/workflows/build_cmake.yml)<br>[.github/workflows/README.md](../../../../sources/Palm1r__QodeAssist/.github/workflows/README.md) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 15 | [README.md](../../../../sources/Palm1r__QodeAssist/README.md)<br>[docs/agent-roles.md](../../../../sources/Palm1r__QodeAssist/docs/agent-roles.md)<br>[docs/chat-summarization.md](../../../../sources/Palm1r__QodeAssist/docs/chat-summarization.md)<br>[docs/claude-configuration.md](../../../../sources/Palm1r__QodeAssist/docs/claude-configuration.md)<br>[docs/file-context.md](../../../../sources/Palm1r__QodeAssist/docs/file-context.md)<br>[docs/google-ai-configuration.md](../../../../sources/Palm1r__QodeAssist/docs/google-ai-configuration.md)<br>[docs/ignoring-files.md](../../../../sources/Palm1r__QodeAssist/docs/ignoring-files.md)<br>[docs/llamacpp-configuration.md](../../../../sources/Palm1r__QodeAssist/docs/llamacpp-configuration.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 7 | [test/ClaudeCacheControlTest.cpp](../../../../sources/Palm1r__QodeAssist/test/ClaudeCacheControlTest.cpp)<br>[test/CMakeLists.txt](../../../../sources/Palm1r__QodeAssist/test/CMakeLists.txt)<br>[test/CodeHandlerTest.cpp](../../../../sources/Palm1r__QodeAssist/test/CodeHandlerTest.cpp)<br>[test/DocumentContextReaderTest.cpp](../../../../sources/Palm1r__QodeAssist/test/DocumentContextReaderTest.cpp)<br>[test/LLMSuggestionTest.cpp](../../../../sources/Palm1r__QodeAssist/test/LLMSuggestionTest.cpp)<br>[test/TestUtils.hpp](../../../../sources/Palm1r__QodeAssist/test/TestUtils.hpp) |
| CI workflow | 2 | [.github/workflows/build_cmake.yml](../../../../sources/Palm1r__QodeAssist/.github/workflows/build_cmake.yml)<br>[.github/workflows/README.md](../../../../sources/Palm1r__QodeAssist/.github/workflows/README.md) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `.github/workflows/build_cmake.yml`, `.github/workflows/README.md`, `test/ClaudeCacheControlTest.cpp`.
2. agent/tool runtime 매핑: `tools/BuildProjectTool.cpp`, `tools/BuildProjectTool.hpp`, `tools/CreateNewFileTool.cpp`.
3. test/eval 파일로 동작 검증: `test/ClaudeCacheControlTest.cpp`, `test/CMakeLists.txt`, `test/CodeHandlerTest.cpp`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 QodeAssist is an AI powered coding assistant plugin for Qt Creator. 핵심 구조 신호는 C++, README.md, LICENSE, tests, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
