# henrydaum/second-brain 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Second Brain is an agentic framework that acts as an operating system, using local file intelligence, workflow automation, and LLMs to complete tasks and communicate over multiple modalities and messaging platforms.

## 요약

- 조사 단위: `sources/henrydaum__second-brain` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 133 files, 21 directories, depth score 100, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test_frontend_mcp.py, agent/tool_registry.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | henrydaum/second-brain |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 556 |
| Forks | 64 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/henrydaum__second-brain](../../../../sources/henrydaum__second-brain) |
| 기존 보고서 | [reports/global-trending/repositories/henrydaum__second-brain.md](../../../global-trending/repositories/henrydaum__second-brain.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 133 / 21 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, agent, attachments, config, events, pipeline, plugins, runtime, scripts, state_machine, stress, templates, tests |
| 상위 확장자 | .py: 121, .md: 5, .txt: 2, (none): 2, .ico: 1, .pyw: 1, .yml: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 27 |
| .github | ci surface | 1 |
| agent | top-level component | 1 |
| attachments | top-level component | 1 |
| config | top-level component | 1 |
| events | top-level component | 1 |
| pipeline | top-level component | 1 |
| plugins | top-level component | 1 |
| runtime | top-level component | 1 |
| scripts | top-level component | 1 |
| state_machine | top-level component | 1 |
| stress | top-level component | 1 |
| templates | top-level component | 1 |


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
| mcp | [tests/test_frontend_mcp.py](../../../../sources/henrydaum__second-brain/tests/test_frontend_mcp.py) | mcp signal |
| mcp | [agent/tool_registry.py](../../../../sources/henrydaum__second-brain/agent/tool_registry.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/henrydaum__second-brain/AGENTS.md) | agentRuntime signal |
| agentRuntime | [templates/tool_template.py](../../../../sources/henrydaum__second-brain/templates/tool_template.py) | agentRuntime signal |
| agentRuntime | [runtime/agent_scope.py](../../../../sources/henrydaum__second-brain/runtime/agent_scope.py) | agentRuntime signal |
| agentRuntime | [runtime/context.py](../../../../sources/henrydaum__second-brain/runtime/context.py) | agentRuntime signal |
| entrypoints | [main.py](../../../../sources/henrydaum__second-brain/main.py) | entrypoints signal |
| entrypoints | [main.pyw](../../../../sources/henrydaum__second-brain/main.pyw) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/henrydaum__second-brain/CLAUDE.md) | instruction signal |
| config | [requirements-dev.txt](../../../../sources/henrydaum__second-brain/requirements-dev.txt) | config signal |
| config | [requirements.txt](../../../../sources/henrydaum__second-brain/requirements.txt) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/henrydaum__second-brain/.github/workflows/ci.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [main.py](../../../../sources/henrydaum__second-brain/main.py)<br>[main.pyw](../../../../sources/henrydaum__second-brain/main.pyw) |
| agentRuntime | 9 | [AGENTS.md](../../../../sources/henrydaum__second-brain/AGENTS.md)<br>[templates/tool_template.py](../../../../sources/henrydaum__second-brain/templates/tool_template.py)<br>[runtime/agent_scope.py](../../../../sources/henrydaum__second-brain/runtime/agent_scope.py)<br>[runtime/context.py](../../../../sources/henrydaum__second-brain/runtime/context.py)<br>[runtime/hooks.py](../../../../sources/henrydaum__second-brain/runtime/hooks.py)<br>[plugins/helpers/memory_paths.py](../../../../sources/henrydaum__second-brain/plugins/helpers/memory_paths.py)<br>[agent/system_prompt_static.md](../../../../sources/henrydaum__second-brain/agent/system_prompt_static.md)<br>[agent/system_prompt.py](../../../../sources/henrydaum__second-brain/agent/system_prompt.py) |
| mcp | 2 | [tests/test_frontend_mcp.py](../../../../sources/henrydaum__second-brain/tests/test_frontend_mcp.py)<br>[agent/tool_registry.py](../../../../sources/henrydaum__second-brain/agent/tool_registry.py) |
| retrieval | 2 | [tests/test_memory_prompt.py](../../../../sources/henrydaum__second-brain/tests/test_memory_prompt.py)<br>[plugins/helpers/memory_paths.py](../../../../sources/henrydaum__second-brain/plugins/helpers/memory_paths.py) |
| spec | 2 | [requirements-dev.txt](../../../../sources/henrydaum__second-brain/requirements-dev.txt)<br>[requirements.txt](../../../../sources/henrydaum__second-brain/requirements.txt) |
| eval | 24 | [tests/__init__.py](../../../../sources/henrydaum__second-brain/tests/__init__.py)<br>[tests/test_agent_scope.py](../../../../sources/henrydaum__second-brain/tests/test_agent_scope.py)<br>[tests/test_commands.py](../../../../sources/henrydaum__second-brain/tests/test_commands.py)<br>[tests/test_config.py](../../../../sources/henrydaum__second-brain/tests/test_config.py)<br>[tests/test_conversation_loop.py](../../../../sources/henrydaum__second-brain/tests/test_conversation_loop.py)<br>[tests/test_database.py](../../../../sources/henrydaum__second-brain/tests/test_database.py)<br>[tests/test_frontend_manager.py](../../../../sources/henrydaum__second-brain/tests/test_frontend_manager.py)<br>[tests/test_frontend_mcp.py](../../../../sources/henrydaum__second-brain/tests/test_frontend_mcp.py) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/henrydaum__second-brain/.github/workflows/ci.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [AGENTS.md](../../../../sources/henrydaum__second-brain/AGENTS.md)<br>[CLAUDE.md](../../../../sources/henrydaum__second-brain/CLAUDE.md) |
| docs | 2 | [README.md](../../../../sources/henrydaum__second-brain/README.md)<br>[stress/README.md](../../../../sources/henrydaum__second-brain/stress/README.md) |
| config | 2 | [requirements-dev.txt](../../../../sources/henrydaum__second-brain/requirements-dev.txt)<br>[requirements.txt](../../../../sources/henrydaum__second-brain/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 24 | [tests/__init__.py](../../../../sources/henrydaum__second-brain/tests/__init__.py)<br>[tests/test_agent_scope.py](../../../../sources/henrydaum__second-brain/tests/test_agent_scope.py)<br>[tests/test_commands.py](../../../../sources/henrydaum__second-brain/tests/test_commands.py)<br>[tests/test_config.py](../../../../sources/henrydaum__second-brain/tests/test_config.py)<br>[tests/test_conversation_loop.py](../../../../sources/henrydaum__second-brain/tests/test_conversation_loop.py)<br>[tests/test_database.py](../../../../sources/henrydaum__second-brain/tests/test_database.py) |
| CI workflow | 1 | [.github/workflows/ci.yml](../../../../sources/henrydaum__second-brain/.github/workflows/ci.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/henrydaum__second-brain/AGENTS.md)<br>[CLAUDE.md](../../../../sources/henrydaum__second-brain/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/test_frontend_mcp.py`, `agent/tool_registry.py`, `AGENTS.md`.
2. entrypoint를 따라 실행 흐름 확인: `main.py`, `main.pyw`.
3. agent/tool runtime 매핑: `AGENTS.md`, `templates/tool_template.py`, `runtime/agent_scope.py`.
4. retrieval/memory/indexing 확인: `tests/test_memory_prompt.py`, `plugins/helpers/memory_paths.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/test_agent_scope.py`, `tests/test_commands.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Second Brain is an agentic framework that acts as an operating system, using local file intelligence, workflow automatio. 핵심 구조 신호는 Python, requirements.txt, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
