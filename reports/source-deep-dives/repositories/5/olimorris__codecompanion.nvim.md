# olimorris/codecompanion.nvim 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

✨ AI Coding, Vim Style

## 요약

- 조사 단위: `sources/olimorris__codecompanion.nvim` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 687 files, 141 directories, depth score 114, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/stubs/mcp/tools.jsonl, tests/mocks/mcp_client_transport.lua, tests/mcp/test_mcp_client.lua이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | olimorris/codecompanion.nvim |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Lua |
| Stars | 6672 |
| Forks | 424 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/olimorris__codecompanion.nvim](../../../../sources/olimorris__codecompanion.nvim) |
| 기존 보고서 | [reports/global-trending/repositories/olimorris__codecompanion.nvim.md](../../../global-trending/repositories/olimorris__codecompanion.nvim.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 687 / 141 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .codecompanion, .github, doc, lua, plugin, queries, scripts, tests |
| 상위 확장자 | .lua: 433, .txt: 81, .md: 69, .scm: 21, (none): 21, .yml: 11, .json: 4, .png: 3, .sh: 3, .example: 2, .js: 2, .jsonl: 2 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 91 |
| .github | ci surface | 1 |
| doc | documentation surface | 1 |
| lua | top-level component | 1 |
| plugin | top-level component | 1 |
| queries | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | all | make all |
| utility | Makefile | docs | make docs |
| quality | Makefile | format | make format |
| test | Makefile | test | make test |
| test | Makefile | test_file | make test_file |
| utility | Makefile | deps | make deps |


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
| mcp | [tests/stubs/mcp/tools.jsonl](../../../../sources/olimorris__codecompanion.nvim/tests/stubs/mcp/tools.jsonl) | mcp signal |
| mcp | [tests/mocks/mcp_client_transport.lua](../../../../sources/olimorris__codecompanion.nvim/tests/mocks/mcp_client_transport.lua) | mcp signal |
| mcp | [tests/mcp/test_mcp_client.lua](../../../../sources/olimorris__codecompanion.nvim/tests/mcp/test_mcp_client.lua) | mcp signal |
| mcp | [tests/mcp/test_mcp_tools.lua](../../../../sources/olimorris__codecompanion.nvim/tests/mcp/test_mcp_tools.lua) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/olimorris__codecompanion.nvim/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/stubs/workflow.lua](../../../../sources/olimorris__codecompanion.nvim/tests/stubs/workflow.lua) | agentRuntime signal |
| agentRuntime | [tests/scripts/context_management.lua](../../../../sources/olimorris__codecompanion.nvim/tests/scripts/context_management.lua) | agentRuntime signal |
| instruction | [CLAUDE.md](../../../../sources/olimorris__codecompanion.nvim/CLAUDE.md) | instruction signal |
| instruction | [tests/stubs/rules/CLAUDE.md](../../../../sources/olimorris__codecompanion.nvim/tests/stubs/rules/CLAUDE.md) | instruction signal |
| config | [Makefile](../../../../sources/olimorris__codecompanion.nvim/Makefile) | config signal |
| config | [doc/package.json](../../../../sources/olimorris__codecompanion.nvim/doc/package.json) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/olimorris__codecompanion.nvim/.github/workflows/ci.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 150 | [AGENTS.md](../../../../sources/olimorris__codecompanion.nvim/AGENTS.md)<br>[tests/stubs/workflow.lua](../../../../sources/olimorris__codecompanion.nvim/tests/stubs/workflow.lua)<br>[tests/stubs/mcp/tools.jsonl](../../../../sources/olimorris__codecompanion.nvim/tests/stubs/mcp/tools.jsonl)<br>[tests/scripts/context_management.lua](../../../../sources/olimorris__codecompanion.nvim/tests/scripts/context_management.lua)<br>[tests/scripts/tool_testing/.env.example](../../../../sources/olimorris__codecompanion.nvim/tests/scripts/tool_testing/.env.example)<br>[tests/scripts/tool_testing/config.local.lua.example](../../../../sources/olimorris__codecompanion.nvim/tests/scripts/tool_testing/config.local.lua.example)<br>[tests/scripts/tool_testing/config.lua](../../../../sources/olimorris__codecompanion.nvim/tests/scripts/tool_testing/config.lua)<br>[tests/scripts/tool_testing/README.md](../../../../sources/olimorris__codecompanion.nvim/tests/scripts/tool_testing/README.md) |
| mcp | 14 | [tests/stubs/mcp/tools.jsonl](../../../../sources/olimorris__codecompanion.nvim/tests/stubs/mcp/tools.jsonl)<br>[tests/mocks/mcp_client_transport.lua](../../../../sources/olimorris__codecompanion.nvim/tests/mocks/mcp_client_transport.lua)<br>[tests/mcp/test_mcp_client.lua](../../../../sources/olimorris__codecompanion.nvim/tests/mcp/test_mcp_client.lua)<br>[tests/mcp/test_mcp_tools.lua](../../../../sources/olimorris__codecompanion.nvim/tests/mcp/test_mcp_tools.lua)<br>[tests/mcp/test_mcp.lua](../../../../sources/olimorris__codecompanion.nvim/tests/mcp/test_mcp.lua)<br>[tests/interactions/chat/tools/test_tool_registry.lua](../../../../sources/olimorris__codecompanion.nvim/tests/interactions/chat/tools/test_tool_registry.lua)<br>[lua/codecompanion/mcp/client.lua](../../../../sources/olimorris__codecompanion.nvim/lua/codecompanion/mcp/client.lua)<br>[lua/codecompanion/mcp/init.lua](../../../../sources/olimorris__codecompanion.nvim/lua/codecompanion/mcp/init.lua) |
| retrieval | 5 | [tests/interactions/chat/tools/builtin/test_memory.lua](../../../../sources/olimorris__codecompanion.nvim/tests/interactions/chat/tools/builtin/test_memory.lua)<br>[lua/codecompanion/interactions/chat/tools/builtin/memory.lua](../../../../sources/olimorris__codecompanion.nvim/lua/codecompanion/interactions/chat/tools/builtin/memory.lua)<br>[doc/index.md](../../../../sources/olimorris__codecompanion.nvim/doc/index.md)<br>[doc/usage/chat-buffer/index.md](../../../../sources/olimorris__codecompanion.nvim/doc/usage/chat-buffer/index.md)<br>[doc/.vitepress/theme/index.js](../../../../sources/olimorris__codecompanion.nvim/doc/.vitepress/theme/index.js) |
| spec | 1 | [doc/architecture.md](../../../../sources/olimorris__codecompanion.nvim/doc/architecture.md) |
| eval | 323 | [tests/config.lua](../../../../sources/olimorris__codecompanion.nvim/tests/config.lua)<br>[tests/expectations.lua](../../../../sources/olimorris__codecompanion.nvim/tests/expectations.lua)<br>[tests/helpers.lua](../../../../sources/olimorris__codecompanion.nvim/tests/helpers.lua)<br>[tests/log.lua](../../../../sources/olimorris__codecompanion.nvim/tests/log.lua)<br>[tests/test_cmds.lua](../../../../sources/olimorris__codecompanion.nvim/tests/test_cmds.lua)<br>[tests/test_diff.lua](../../../../sources/olimorris__codecompanion.nvim/tests/test_diff.lua)<br>[tests/test_extensions.lua](../../../../sources/olimorris__codecompanion.nvim/tests/test_extensions.lua)<br>[tests/test_has.lua](../../../../sources/olimorris__codecompanion.nvim/tests/test_has.lua) |
| security | 3 | [tests/stubs/acp/permission_two_step.jsonl](../../../../sources/olimorris__codecompanion.nvim/tests/stubs/acp/permission_two_step.jsonl)<br>[tests/interactions/chat/acp/test_permission_request.lua](../../../../sources/olimorris__codecompanion.nvim/tests/interactions/chat/acp/test_permission_request.lua)<br>[lua/codecompanion/interactions/chat/acp/request_permission.lua](../../../../sources/olimorris__codecompanion.nvim/lua/codecompanion/interactions/chat/acp/request_permission.lua) |
| ci | 9 | [.github/workflows/ci.yml](../../../../sources/olimorris__codecompanion.nvim/.github/workflows/ci.yml)<br>[.github/workflows/claude.yml](../../../../sources/olimorris__codecompanion.nvim/.github/workflows/claude.yml)<br>[.github/workflows/format.yml](../../../../sources/olimorris__codecompanion.nvim/.github/workflows/format.yml)<br>[.github/workflows/release.yml](../../../../sources/olimorris__codecompanion.nvim/.github/workflows/release.yml)<br>[.github/workflows/require-checklist.yml](../../../../sources/olimorris__codecompanion.nvim/.github/workflows/require-checklist.yml)<br>[.github/workflows/rockspec.yml](../../../../sources/olimorris__codecompanion.nvim/.github/workflows/rockspec.yml)<br>[.github/workflows/spelling.yaml](../../../../sources/olimorris__codecompanion.nvim/.github/workflows/spelling.yaml)<br>[.github/workflows/sponsors.yml](../../../../sources/olimorris__codecompanion.nvim/.github/workflows/sponsors.yml) |
| container | 1 | [Dockerfile](../../../../sources/olimorris__codecompanion.nvim/Dockerfile) |
| instruction | 3 | [AGENTS.md](../../../../sources/olimorris__codecompanion.nvim/AGENTS.md)<br>[CLAUDE.md](../../../../sources/olimorris__codecompanion.nvim/CLAUDE.md)<br>[tests/stubs/rules/CLAUDE.md](../../../../sources/olimorris__codecompanion.nvim/tests/stubs/rules/CLAUDE.md) |
| docs | 51 | [README.md](../../../../sources/olimorris__codecompanion.nvim/README.md)<br>[tests/scripts/tool_testing/README.md](../../../../sources/olimorris__codecompanion.nvim/tests/scripts/tool_testing/README.md)<br>[doc/.gitignore](../../../../sources/olimorris__codecompanion.nvim/doc/.gitignore)<br>[doc/agent-client-protocol.md](../../../../sources/olimorris__codecompanion.nvim/doc/agent-client-protocol.md)<br>[doc/architecture.md](../../../../sources/olimorris__codecompanion.nvim/doc/architecture.md)<br>[doc/codecompanion.txt](../../../../sources/olimorris__codecompanion.nvim/doc/codecompanion.txt)<br>[doc/getting-started.md](../../../../sources/olimorris__codecompanion.nvim/doc/getting-started.md)<br>[doc/index.md](../../../../sources/olimorris__codecompanion.nvim/doc/index.md) |
| config | 2 | [Makefile](../../../../sources/olimorris__codecompanion.nvim/Makefile)<br>[doc/package.json](../../../../sources/olimorris__codecompanion.nvim/doc/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 323 | [tests/config.lua](../../../../sources/olimorris__codecompanion.nvim/tests/config.lua)<br>[tests/expectations.lua](../../../../sources/olimorris__codecompanion.nvim/tests/expectations.lua)<br>[tests/helpers.lua](../../../../sources/olimorris__codecompanion.nvim/tests/helpers.lua)<br>[tests/log.lua](../../../../sources/olimorris__codecompanion.nvim/tests/log.lua)<br>[tests/test_cmds.lua](../../../../sources/olimorris__codecompanion.nvim/tests/test_cmds.lua)<br>[tests/test_diff.lua](../../../../sources/olimorris__codecompanion.nvim/tests/test_diff.lua) |
| CI workflow | 9 | [.github/workflows/ci.yml](../../../../sources/olimorris__codecompanion.nvim/.github/workflows/ci.yml)<br>[.github/workflows/claude.yml](../../../../sources/olimorris__codecompanion.nvim/.github/workflows/claude.yml)<br>[.github/workflows/format.yml](../../../../sources/olimorris__codecompanion.nvim/.github/workflows/format.yml)<br>[.github/workflows/release.yml](../../../../sources/olimorris__codecompanion.nvim/.github/workflows/release.yml)<br>[.github/workflows/require-checklist.yml](../../../../sources/olimorris__codecompanion.nvim/.github/workflows/require-checklist.yml)<br>[.github/workflows/rockspec.yml](../../../../sources/olimorris__codecompanion.nvim/.github/workflows/rockspec.yml) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/olimorris__codecompanion.nvim/Dockerfile) |
| 보안/정책 | 3 | [tests/stubs/acp/permission_two_step.jsonl](../../../../sources/olimorris__codecompanion.nvim/tests/stubs/acp/permission_two_step.jsonl)<br>[tests/interactions/chat/acp/test_permission_request.lua](../../../../sources/olimorris__codecompanion.nvim/tests/interactions/chat/acp/test_permission_request.lua)<br>[lua/codecompanion/interactions/chat/acp/request_permission.lua](../../../../sources/olimorris__codecompanion.nvim/lua/codecompanion/interactions/chat/acp/request_permission.lua) |
| 에이전트 지시문 | 3 | [AGENTS.md](../../../../sources/olimorris__codecompanion.nvim/AGENTS.md)<br>[CLAUDE.md](../../../../sources/olimorris__codecompanion.nvim/CLAUDE.md)<br>[tests/stubs/rules/CLAUDE.md](../../../../sources/olimorris__codecompanion.nvim/tests/stubs/rules/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/stubs/mcp/tools.jsonl`, `tests/mocks/mcp_client_transport.lua`, `tests/mcp/test_mcp_client.lua`.
2. agent/tool runtime 매핑: `AGENTS.md`, `tests/stubs/workflow.lua`, `tests/stubs/mcp/tools.jsonl`.
3. retrieval/memory/indexing 확인: `tests/interactions/chat/tools/builtin/test_memory.lua`, `lua/codecompanion/interactions/chat/tools/builtin/memory.lua`, `doc/index.md`.
4. test/eval 파일로 동작 검증: `tests/config.lua`, `tests/expectations.lua`, `tests/helpers.lua`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 ✨ AI Coding, Vim Style. 핵심 구조 신호는 Lua, Dockerfile, Makefile, README.md, AGENTS.md, CLAUDE.md이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
