# videosdk-live/agents 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Open-source framework for developing real-time multimodal conversational AI agents.

## 요약

- 조사 단위: `sources/videosdk-live__agents` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 496 files, 193 directories, depth score 113, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=videosdk-agents/videosdk/agents/mcp/mcp_manager.py, videosdk-agents/videosdk/agents/mcp/mcp_server.py, examples/mcp_example.py이고, 의존성 단서는 openai, anthropic, mcp, langchain, click, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | videosdk-live/agents |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 629 |
| Forks | 92 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/videosdk-live__agents](../../../../sources/videosdk-live__agents) |
| 기존 보고서 | [reports/global-trending/repositories/videosdk-live__agents.md](../../../global-trending/repositories/videosdk-live__agents.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 496 / 193 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .github, examples, scripts, use_case_examples, videosdk-agents, videosdk-plugins |
| 상위 확장자 | .py: 343, .md: 90, .toml: 37, .txt: 6, .html: 3, .json: 3, .dylib: 2, .ogg: 2, .yml: 2, (none): 2, .example: 1, .js: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| examples/conversational_graph | examples workspace | 4 |
| examples/langgraph | examples workspace | 3 |
| examples/avatar | examples workspace | 2 |
| examples/langchain | examples workspace | 2 |
| examples/mcp_server_examples | examples workspace | 2 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| examples/a2a | examples workspace | 1 |
| examples/human_in_the_loop | examples workspace | 1 |
| examples/mcp_example.py | examples workspace | 1 |
| examples/mem0 | examples workspace | 1 |
| examples/observability_hooks.py | examples workspace | 1 |
| examples/test_workflow_pipeline.py | examples workspace | 1 |
| scripts | top-level component | 1 |
| use_case_examples | top-level component | 1 |
| videosdk-agents | top-level component | 1 |
| videosdk-plugins | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | langchain |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | click |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [videosdk-agents/videosdk/agents/mcp/mcp_manager.py](../../../../sources/videosdk-live__agents/videosdk-agents/videosdk/agents/mcp/mcp_manager.py) | mcp signal |
| mcp | [videosdk-agents/videosdk/agents/mcp/mcp_server.py](../../../../sources/videosdk-live__agents/videosdk-agents/videosdk/agents/mcp/mcp_server.py) | mcp signal |
| mcp | [examples/mcp_example.py](../../../../sources/videosdk-live__agents/examples/mcp_example.py) | mcp signal |
| mcp | [examples/mcp_server_examples/mcp_current_time_example.py](../../../../sources/videosdk-live__agents/examples/mcp_server_examples/mcp_current_time_example.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/videosdk-live__agents/AGENTS.md) | agentRuntime signal |
| agentRuntime | [SKILLS.md](../../../../sources/videosdk-live__agents/SKILLS.md) | agentRuntime signal |
| agentRuntime | [videosdk-plugins/SKILLS.md](../../../../sources/videosdk-live__agents/videosdk-plugins/SKILLS.md) | agentRuntime signal |
| agentRuntime | [videosdk-plugins/videosdk-plugins-xai/SKILLS.md](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-xai/SKILLS.md) | agentRuntime signal |
| entrypoints | [examples/a2a/main.py](../../../../sources/videosdk-live__agents/examples/a2a/main.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/videosdk-live__agents/CLAUDE.md) | instruction signal |
| config | [pyproject.toml](../../../../sources/videosdk-live__agents/pyproject.toml) | config signal |
| config | [requirements.txt](../../../../sources/videosdk-live__agents/requirements.txt) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [examples/a2a/main.py](../../../../sources/videosdk-live__agents/examples/a2a/main.py) |
| agentRuntime | 176 | [AGENTS.md](../../../../sources/videosdk-live__agents/AGENTS.md)<br>[SKILLS.md](../../../../sources/videosdk-live__agents/SKILLS.md)<br>[videosdk-plugins/SKILLS.md](../../../../sources/videosdk-live__agents/videosdk-plugins/SKILLS.md)<br>[videosdk-plugins/videosdk-plugins-xai/SKILLS.md](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-xai/SKILLS.md)<br>[videosdk-plugins/videosdk-plugins-ultravox/SKILLS.md](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-ultravox/SKILLS.md)<br>[videosdk-plugins/videosdk-plugins-turn-detector/SKILLS.md](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-turn-detector/SKILLS.md)<br>[videosdk-plugins/videosdk-plugins-speechify/SKILLS.md](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-speechify/SKILLS.md)<br>[videosdk-plugins/videosdk-plugins-smallestai/SKILLS.md](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-smallestai/SKILLS.md) |
| mcp | 6 | [videosdk-agents/videosdk/agents/mcp/mcp_manager.py](../../../../sources/videosdk-live__agents/videosdk-agents/videosdk/agents/mcp/mcp_manager.py)<br>[videosdk-agents/videosdk/agents/mcp/mcp_server.py](../../../../sources/videosdk-live__agents/videosdk-agents/videosdk/agents/mcp/mcp_server.py)<br>[examples/mcp_example.py](../../../../sources/videosdk-live__agents/examples/mcp_example.py)<br>[examples/mcp_server_examples/mcp_current_time_example.py](../../../../sources/videosdk-live__agents/examples/mcp_server_examples/mcp_current_time_example.py)<br>[examples/mcp_server_examples/mcp_server_example.py](../../../../sources/videosdk-live__agents/examples/mcp_server_examples/mcp_server_example.py)<br>[examples/human_in_the_loop/discord_mcp_server.py](../../../../sources/videosdk-live__agents/examples/human_in_the_loop/discord_mcp_server.py) |
| retrieval | 11 | [videosdk-plugins/videosdk-plugins-langchain/videosdk/plugins/langchain/graph.py](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-langchain/videosdk/plugins/langchain/graph.py)<br>[videosdk-agents/videosdk/agents/graph_adapter.py](../../../../sources/videosdk-live__agents/videosdk-agents/videosdk/agents/graph_adapter.py)<br>[videosdk-agents/videosdk/agents/knowledge_base/__init__.py](../../../../sources/videosdk-live__agents/videosdk-agents/videosdk/agents/knowledge_base/__init__.py)<br>[videosdk-agents/videosdk/agents/knowledge_base/base.py](../../../../sources/videosdk-live__agents/videosdk-agents/videosdk/agents/knowledge_base/base.py)<br>[videosdk-agents/videosdk/agents/knowledge_base/config.py](../../../../sources/videosdk-live__agents/videosdk-agents/videosdk/agents/knowledge_base/config.py)<br>[use_case_examples/custom_rag_agent.py](../../../../sources/videosdk-live__agents/use_case_examples/custom_rag_agent.py)<br>[examples/mem0/memory_agent.py](../../../../sources/videosdk-live__agents/examples/mem0/memory_agent.py)<br>[examples/conversational_graph/customer_support.py](../../../../sources/videosdk-live__agents/examples/conversational_graph/customer_support.py) |
| spec | 4 | [requirements.txt](../../../../sources/videosdk-live__agents/requirements.txt)<br>[examples/langgraph/requirements.txt](../../../../sources/videosdk-live__agents/examples/langgraph/requirements.txt)<br>[examples/langchain/requirements.txt](../../../../sources/videosdk-live__agents/examples/langchain/requirements.txt)<br>[examples/avatar/avatar_server_examples/requirements.txt](../../../../sources/videosdk-live__agents/examples/avatar/avatar_server_examples/requirements.txt) |
| eval | 4 | [videosdk-agents/videosdk/agents/debug/tracing.py](../../../../sources/videosdk-live__agents/videosdk-agents/videosdk/agents/debug/tracing.py)<br>[use_case_examples/vision/quality_inspection_agent.py](../../../../sources/videosdk-live__agents/use_case_examples/vision/quality_inspection_agent.py)<br>[examples/observability_hooks.py](../../../../sources/videosdk-live__agents/examples/observability_hooks.py)<br>[examples/test_workflow_pipeline.py](../../../../sources/videosdk-live__agents/examples/test_workflow_pipeline.py) |
| security | 1 | [videosdk-agents/videosdk/agents/avatar/avatar_auth.py](../../../../sources/videosdk-live__agents/videosdk-agents/videosdk/agents/avatar/avatar_auth.py) |
| ci | 2 | [.github/workflows/build-and-deploy-docs.yml](../../../../sources/videosdk-live__agents/.github/workflows/build-and-deploy-docs.yml)<br>[.github/workflows/main.yml](../../../../sources/videosdk-live__agents/.github/workflows/main.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [AGENTS.md](../../../../sources/videosdk-live__agents/AGENTS.md)<br>[CLAUDE.md](../../../../sources/videosdk-live__agents/CLAUDE.md) |
| docs | 40 | [README.md](../../../../sources/videosdk-live__agents/README.md)<br>[videosdk-plugins/videosdk-plugins-xai/README.md](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-xai/README.md)<br>[videosdk-plugins/videosdk-plugins-ultravox/README.md](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-ultravox/README.md)<br>[videosdk-plugins/videosdk-plugins-turn-detector/README.md](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-turn-detector/README.md)<br>[videosdk-plugins/videosdk-plugins-speechify/README.md](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-speechify/README.md)<br>[videosdk-plugins/videosdk-plugins-smallestai/README.md](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-smallestai/README.md)<br>[videosdk-plugins/videosdk-plugins-simli/README.md](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-simli/README.md)<br>[videosdk-plugins/videosdk-plugins-silero/README.md](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-silero/README.md) |
| config | 43 | [pyproject.toml](../../../../sources/videosdk-live__agents/pyproject.toml)<br>[requirements.txt](../../../../sources/videosdk-live__agents/requirements.txt)<br>[uv.lock](../../../../sources/videosdk-live__agents/uv.lock)<br>[videosdk-plugins/videosdk-plugins-xai/pyproject.toml](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-xai/pyproject.toml)<br>[videosdk-plugins/videosdk-plugins-ultravox/pyproject.toml](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-ultravox/pyproject.toml)<br>[videosdk-plugins/videosdk-plugins-turn-detector/pyproject.toml](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-turn-detector/pyproject.toml)<br>[videosdk-plugins/videosdk-plugins-speechify/pyproject.toml](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-speechify/pyproject.toml)<br>[videosdk-plugins/videosdk-plugins-smallestai/pyproject.toml](../../../../sources/videosdk-live__agents/videosdk-plugins/videosdk-plugins-smallestai/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 4 | [videosdk-agents/videosdk/agents/debug/tracing.py](../../../../sources/videosdk-live__agents/videosdk-agents/videosdk/agents/debug/tracing.py)<br>[use_case_examples/vision/quality_inspection_agent.py](../../../../sources/videosdk-live__agents/use_case_examples/vision/quality_inspection_agent.py)<br>[examples/observability_hooks.py](../../../../sources/videosdk-live__agents/examples/observability_hooks.py)<br>[examples/test_workflow_pipeline.py](../../../../sources/videosdk-live__agents/examples/test_workflow_pipeline.py) |
| CI workflow | 2 | [.github/workflows/build-and-deploy-docs.yml](../../../../sources/videosdk-live__agents/.github/workflows/build-and-deploy-docs.yml)<br>[.github/workflows/main.yml](../../../../sources/videosdk-live__agents/.github/workflows/main.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [videosdk-agents/videosdk/agents/avatar/avatar_auth.py](../../../../sources/videosdk-live__agents/videosdk-agents/videosdk/agents/avatar/avatar_auth.py) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/videosdk-live__agents/AGENTS.md)<br>[CLAUDE.md](../../../../sources/videosdk-live__agents/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `videosdk-agents/videosdk/agents/mcp/mcp_manager.py`, `videosdk-agents/videosdk/agents/mcp/mcp_server.py`, `examples/mcp_example.py`.
2. entrypoint를 따라 실행 흐름 확인: `examples/a2a/main.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `SKILLS.md`, `videosdk-plugins/SKILLS.md`.
4. retrieval/memory/indexing 확인: `videosdk-plugins/videosdk-plugins-langchain/videosdk/plugins/langchain/graph.py`, `videosdk-agents/videosdk/agents/graph_adapter.py`, `videosdk-agents/videosdk/agents/knowledge_base/__init__.py`.
5. test/eval 파일로 동작 검증: `videosdk-agents/videosdk/agents/debug/tracing.py`, `use_case_examples/vision/quality_inspection_agent.py`, `examples/observability_hooks.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Open source framework for developing real time multimodal conversational AI agents.. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, README.md, AGENTS.md, CLAUDE.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
