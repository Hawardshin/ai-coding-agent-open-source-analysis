# livekit/agents 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

A framework for building realtime voice AI agents 🤖🎙️📹

## 요약

- 조사 단위: `sources/livekit__agents` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,251 files, 389 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=livekit-agents/livekit/agents/llm/mcp.py, examples/voice_agents/zapier_mcp_integration.py, examples/voice_agents/mcp/mcp-agent.py이고, 의존성 단서는 openai, anthropic, mcp, langchain, pydantic, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | livekit/agents |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 11023 |
| Forks | 3238 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/livekit__agents](../../../../sources/livekit__agents) |
| 기존 보고서 | [reports/global-trending/repositories/livekit__agents.md](../../../global-trending/repositories/livekit__agents.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1251 / 389 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .github, examples, livekit-agents, livekit-plugins, scripts, tests |
| 상위 확장자 | .py: 886, .md: 123, .toml: 74, .typed: 71, (none): 33, .txt: 17, .yml: 14, .ogg: 8, .yaml: 4, .wav: 3, .c: 2, .json: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 46 |
| examples/voice_agents | examples workspace | 11 |
| examples/avatar | examples workspace | 2 |
| examples/avatar_agents | examples workspace | 2 |
| examples/drive-thru | examples workspace | 2 |
| examples/frontdesk | examples workspace | 2 |
| examples/healthcare | examples workspace | 2 |
| examples/hotel_receptionist | examples workspace | 2 |
| examples/inference | examples workspace | 2 |
| examples/survey | examples workspace | 2 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| examples/Dockerfile-example | examples workspace | 1 |
| examples/other | examples workspace | 1 |
| livekit-agents | top-level component | 1 |
| livekit-plugins | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | install | make install |
| quality | Makefile | format | make format |
| quality | Makefile | format-check | make format-check |
| quality | Makefile | lint | make lint |
| quality | Makefile | lint-fix | make lint-fix |
| quality | Makefile | type-check | make type-check |
| quality | Makefile | check | make check |
| utility | Makefile | fix | make fix |
| test | Makefile | unit-tests | make unit-tests |
| utility | Makefile | link-rtc | make link-rtc |
| utility | Makefile | link-rtc-local | make link-rtc-local |
| utility | Makefile | link-rtc-version | make link-rtc-version |
| utility | Makefile | unlink-rtc | make unlink-rtc |
| utility | Makefile | status | make status |
| utility | Makefile | doctor | make doctor |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | langchain |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [livekit-agents/livekit/agents/llm/mcp.py](../../../../sources/livekit__agents/livekit-agents/livekit/agents/llm/mcp.py) | mcp signal |
| mcp | [examples/voice_agents/zapier_mcp_integration.py](../../../../sources/livekit__agents/examples/voice_agents/zapier_mcp_integration.py) | mcp signal |
| mcp | [examples/voice_agents/mcp/mcp-agent.py](../../../../sources/livekit__agents/examples/voice_agents/mcp/mcp-agent.py) | mcp signal |
| mcp | [examples/voice_agents/mcp/server.py](../../../../sources/livekit__agents/examples/voice_agents/mcp/server.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/livekit__agents/AGENTS.md) | agentRuntime signal |
| agentRuntime | [livekit-plugins/livekit-plugins-xai/livekit/plugins/xai/tools.py](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-xai/livekit/plugins/xai/tools.py) | agentRuntime signal |
| agentRuntime | [livekit-plugins/livekit-plugins-openai/livekit/plugins/openai/tools.py](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-openai/livekit/plugins/openai/tools.py) | agentRuntime signal |
| agentRuntime | [livekit-plugins/livekit-plugins-mistralai/livekit/plugins/mistralai/tools.py](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-mistralai/livekit/plugins/mistralai/tools.py) | agentRuntime signal |
| entrypoints | [livekit-plugins/livekit-blingfire/src/main.cpp](../../../../sources/livekit__agents/livekit-plugins/livekit-blingfire/src/main.cpp) | entrypoints signal |
| entrypoints | [livekit-agents/livekit/agents/__main__.py](../../../../sources/livekit__agents/livekit-agents/livekit/agents/__main__.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/livekit__agents/CLAUDE.md) | instruction signal |
| config | [makefile](../../../../sources/livekit__agents/makefile) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [livekit-plugins/livekit-blingfire/src/main.cpp](../../../../sources/livekit__agents/livekit-plugins/livekit-blingfire/src/main.cpp)<br>[livekit-agents/livekit/agents/__main__.py](../../../../sources/livekit__agents/livekit-agents/livekit/agents/__main__.py)<br>[examples/voice_agents/mcp/server.py](../../../../sources/livekit__agents/examples/voice_agents/mcp/server.py) |
| agentRuntime | 240 | [AGENTS.md](../../../../sources/livekit__agents/AGENTS.md)<br>[livekit-plugins/livekit-plugins-xai/livekit/plugins/xai/tools.py](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-xai/livekit/plugins/xai/tools.py)<br>[livekit-plugins/livekit-plugins-openai/livekit/plugins/openai/tools.py](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-openai/livekit/plugins/openai/tools.py)<br>[livekit-plugins/livekit-plugins-mistralai/livekit/plugins/mistralai/tools.py](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-mistralai/livekit/plugins/mistralai/tools.py)<br>[livekit-plugins/livekit-plugins-google/livekit/plugins/google/tools.py](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-google/livekit/plugins/google/tools.py)<br>[livekit-plugins/livekit-plugins-anthropic/livekit/plugins/anthropic/tools.py](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-anthropic/livekit/plugins/anthropic/tools.py)<br>[livekit-agents/livekit/agents/__init__.py](../../../../sources/livekit__agents/livekit-agents/livekit/agents/__init__.py)<br>[livekit-agents/livekit/agents/__main__.py](../../../../sources/livekit__agents/livekit-agents/livekit/agents/__main__.py) |
| mcp | 4 | [livekit-agents/livekit/agents/llm/mcp.py](../../../../sources/livekit__agents/livekit-agents/livekit/agents/llm/mcp.py)<br>[examples/voice_agents/zapier_mcp_integration.py](../../../../sources/livekit__agents/examples/voice_agents/zapier_mcp_integration.py)<br>[examples/voice_agents/mcp/mcp-agent.py](../../../../sources/livekit__agents/examples/voice_agents/mcp/mcp-agent.py)<br>[examples/voice_agents/mcp/server.py](../../../../sources/livekit__agents/examples/voice_agents/mcp/server.py) |
| retrieval | 7 | [tests/test_supervised_proc_memory.py](../../../../sources/livekit__agents/tests/test_supervised_proc_memory.py)<br>[examples/voice_agents/llamaindex-rag/.gitignore](../../../../sources/livekit__agents/examples/voice_agents/llamaindex-rag/.gitignore)<br>[examples/voice_agents/llamaindex-rag/chat_engine.py](../../../../sources/livekit__agents/examples/voice_agents/llamaindex-rag/chat_engine.py)<br>[examples/voice_agents/llamaindex-rag/query_engine.py](../../../../sources/livekit__agents/examples/voice_agents/llamaindex-rag/query_engine.py)<br>[examples/voice_agents/llamaindex-rag/README.md](../../../../sources/livekit__agents/examples/voice_agents/llamaindex-rag/README.md)<br>[examples/voice_agents/llamaindex-rag/retrieval.py](../../../../sources/livekit__agents/examples/voice_agents/llamaindex-rag/retrieval.py)<br>[examples/voice_agents/llamaindex-rag/data/raw_data.txt](../../../../sources/livekit__agents/examples/voice_agents/llamaindex-rag/data/raw_data.txt) |
| spec | 11 | [examples/voice_agents/requirements.txt](../../../../sources/livekit__agents/examples/voice_agents/requirements.txt)<br>[examples/survey/requirements.txt](../../../../sources/livekit__agents/examples/survey/requirements.txt)<br>[examples/other/text-to-speech/requirements.txt](../../../../sources/livekit__agents/examples/other/text-to-speech/requirements.txt)<br>[examples/inference/requirements.txt](../../../../sources/livekit__agents/examples/inference/requirements.txt)<br>[examples/hotel_receptionist/requirements.txt](../../../../sources/livekit__agents/examples/hotel_receptionist/requirements.txt)<br>[examples/healthcare/requirements.txt](../../../../sources/livekit__agents/examples/healthcare/requirements.txt)<br>[examples/frontdesk/requirements.txt](../../../../sources/livekit__agents/examples/frontdesk/requirements.txt)<br>[examples/drive-thru/requirements.txt](../../../../sources/livekit__agents/examples/drive-thru/requirements.txt) |
| eval | 145 | [tests/__init__.py](../../../../sources/livekit__agents/tests/__init__.py)<br>[tests/.gitattributes](../../../../sources/livekit__agents/tests/.gitattributes)<br>[tests/.gitignore](../../../../sources/livekit__agents/tests/.gitignore)<br>[tests/change-sophie.opus](../../../../sources/livekit__agents/tests/change-sophie.opus)<br>[tests/change-sophie.wav](../../../../sources/livekit__agents/tests/change-sophie.wav)<br>[tests/concurrency.py](../../../../sources/livekit__agents/tests/concurrency.py)<br>[tests/conftest.py](../../../../sources/livekit__agents/tests/conftest.py)<br>[tests/docker-compose.yml](../../../../sources/livekit__agents/tests/docker-compose.yml) |
| security | 1 | [livekit-plugins/livekit-plugins-nvidia/livekit/plugins/nvidia/auth.py](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-nvidia/livekit/plugins/nvidia/auth.py) |
| ci | 12 | [.github/workflows/auto-assign.yml](../../../../sources/livekit__agents/.github/workflows/auto-assign.yml)<br>[.github/workflows/build.yml](../../../../sources/livekit__agents/.github/workflows/build.yml)<br>[.github/workflows/ci.yml](../../../../sources/livekit__agents/.github/workflows/ci.yml)<br>[.github/workflows/deploy-examples.yml](../../../../sources/livekit__agents/.github/workflows/deploy-examples.yml)<br>[.github/workflows/download-stats.yml](../../../../sources/livekit__agents/.github/workflows/download-stats.yml)<br>[.github/workflows/evals.yml](../../../../sources/livekit__agents/.github/workflows/evals.yml)<br>[.github/workflows/publish-docs.yml](../../../../sources/livekit__agents/.github/workflows/publish-docs.yml)<br>[.github/workflows/publish.yml](../../../../sources/livekit__agents/.github/workflows/publish.yml) |
| container | 11 | [tests/docker-compose.yml](../../../../sources/livekit__agents/tests/docker-compose.yml)<br>[tests/Dockerfile.tests](../../../../sources/livekit__agents/tests/Dockerfile.tests)<br>[tests/Dockerfile.toxiproxy](../../../../sources/livekit__agents/tests/Dockerfile.toxiproxy)<br>[examples/Dockerfile-example](../../../../sources/livekit__agents/examples/Dockerfile-example)<br>[examples/survey/Dockerfile](../../../../sources/livekit__agents/examples/survey/Dockerfile)<br>[examples/inference/Dockerfile](../../../../sources/livekit__agents/examples/inference/Dockerfile)<br>[examples/hotel_receptionist/Dockerfile](../../../../sources/livekit__agents/examples/hotel_receptionist/Dockerfile)<br>[examples/healthcare/Dockerfile](../../../../sources/livekit__agents/examples/healthcare/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/livekit__agents/AGENTS.md)<br>[CLAUDE.md](../../../../sources/livekit__agents/CLAUDE.md) |
| docs | 106 | [README.md](../../../../sources/livekit__agents/README.md)<br>[livekit-plugins/livekit-plugins-xai/README.md](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-xai/README.md)<br>[livekit-plugins/livekit-plugins-upliftai/README.md](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-upliftai/README.md)<br>[livekit-plugins/livekit-plugins-ultravox/README.md](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-ultravox/README.md)<br>[livekit-plugins/livekit-plugins-turn-detector/README.md](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-turn-detector/README.md)<br>[livekit-plugins/livekit-plugins-trugen/README.md](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-trugen/README.md)<br>[livekit-plugins/livekit-plugins-telnyx/README.md](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-telnyx/README.md)<br>[livekit-plugins/livekit-plugins-tavus/README.md](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-tavus/README.md) |
| config | 88 | [makefile](../../../../sources/livekit__agents/makefile)<br>[pyproject.toml](../../../../sources/livekit__agents/pyproject.toml)<br>[uv.lock](../../../../sources/livekit__agents/uv.lock)<br>[tests/Makefile](../../../../sources/livekit__agents/tests/Makefile)<br>[livekit-plugins/livekit-plugins-xai/pyproject.toml](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-xai/pyproject.toml)<br>[livekit-plugins/livekit-plugins-upliftai/pyproject.toml](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-upliftai/pyproject.toml)<br>[livekit-plugins/livekit-plugins-ultravox/pyproject.toml](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-ultravox/pyproject.toml)<br>[livekit-plugins/livekit-plugins-turn-detector/pyproject.toml](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-turn-detector/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 145 | [tests/__init__.py](../../../../sources/livekit__agents/tests/__init__.py)<br>[tests/.gitattributes](../../../../sources/livekit__agents/tests/.gitattributes)<br>[tests/.gitignore](../../../../sources/livekit__agents/tests/.gitignore)<br>[tests/change-sophie.opus](../../../../sources/livekit__agents/tests/change-sophie.opus)<br>[tests/change-sophie.wav](../../../../sources/livekit__agents/tests/change-sophie.wav)<br>[tests/concurrency.py](../../../../sources/livekit__agents/tests/concurrency.py) |
| CI workflow | 12 | [.github/workflows/auto-assign.yml](../../../../sources/livekit__agents/.github/workflows/auto-assign.yml)<br>[.github/workflows/build.yml](../../../../sources/livekit__agents/.github/workflows/build.yml)<br>[.github/workflows/ci.yml](../../../../sources/livekit__agents/.github/workflows/ci.yml)<br>[.github/workflows/deploy-examples.yml](../../../../sources/livekit__agents/.github/workflows/deploy-examples.yml)<br>[.github/workflows/download-stats.yml](../../../../sources/livekit__agents/.github/workflows/download-stats.yml)<br>[.github/workflows/evals.yml](../../../../sources/livekit__agents/.github/workflows/evals.yml) |
| 컨테이너/배포 | 11 | [tests/docker-compose.yml](../../../../sources/livekit__agents/tests/docker-compose.yml)<br>[tests/Dockerfile.tests](../../../../sources/livekit__agents/tests/Dockerfile.tests)<br>[tests/Dockerfile.toxiproxy](../../../../sources/livekit__agents/tests/Dockerfile.toxiproxy)<br>[examples/Dockerfile-example](../../../../sources/livekit__agents/examples/Dockerfile-example)<br>[examples/survey/Dockerfile](../../../../sources/livekit__agents/examples/survey/Dockerfile)<br>[examples/inference/Dockerfile](../../../../sources/livekit__agents/examples/inference/Dockerfile) |
| 보안/정책 | 1 | [livekit-plugins/livekit-plugins-nvidia/livekit/plugins/nvidia/auth.py](../../../../sources/livekit__agents/livekit-plugins/livekit-plugins-nvidia/livekit/plugins/nvidia/auth.py) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/livekit__agents/AGENTS.md)<br>[CLAUDE.md](../../../../sources/livekit__agents/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `livekit-agents/livekit/agents/llm/mcp.py`, `examples/voice_agents/zapier_mcp_integration.py`, `examples/voice_agents/mcp/mcp-agent.py`.
2. entrypoint를 따라 실행 흐름 확인: `livekit-plugins/livekit-blingfire/src/main.cpp`, `livekit-agents/livekit/agents/__main__.py`, `examples/voice_agents/mcp/server.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `livekit-plugins/livekit-plugins-xai/livekit/plugins/xai/tools.py`, `livekit-plugins/livekit-plugins-openai/livekit/plugins/openai/tools.py`.
4. retrieval/memory/indexing 확인: `tests/test_supervised_proc_memory.py`, `examples/voice_agents/llamaindex-rag/.gitignore`, `examples/voice_agents/llamaindex-rag/chat_engine.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/.gitattributes`, `tests/.gitignore`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A framework for building realtime voice AI agents 🤖🎙️📹. 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, AGENTS.md, CLAUDE.md이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
