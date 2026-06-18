# langchain-ai/langgraph 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Local clone structure analysis: 666 files, 158 directories.

## 요약

- 조사 단위: `sources/langchain-ai__langgraph` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 666 files, 158 directories, depth score 120, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, libs/sdk-py/integration/graph/tools_agent.py, libs/prebuilt/tests/memory_assert.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | langchain-ai/langgraph |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 35062 |
| Forks | 5869 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/langchain-ai__langgraph](../../../../sources/langchain-ai__langgraph) |
| 기존 보고서 | [reports/global-trending/repositories/langchain-ai__langgraph.md](../../../global-trending/repositories/langchain-ai__langgraph.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 666 / 158 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .github, docs, examples, libs |
| 상위 확장자 | .py: 446, .ipynb: 35, .json: 30, .yml: 28, (none): 28, .toml: 21, .md: 18, .lock: 13, .typed: 13, .txt: 11, .ts: 7, .example: 5 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| libs/cli | libs workspace | 85 |
| libs/sdk-py | libs workspace | 57 |
| libs/langgraph | libs workspace | 21 |
| libs/checkpoint-conformance | libs workspace | 13 |
| libs/prebuilt | libs workspace | 10 |
| libs/checkpoint | libs workspace | 8 |
| docs | documentation surface | 5 |
| libs/checkpoint-postgres | libs workspace | 2 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| libs | source boundary | 1 |
| libs/checkpoint-sqlite | libs workspace | 1 |
| libs/sdk-js | libs workspace | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | all | make all |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | install | make install |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | lint | make lint |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | format | make format |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | lock | make lock |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | lock-upgrade | make lock-upgrade |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | test | make test |


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
| agentRuntime | [AGENTS.md](../../../../sources/langchain-ai__langgraph/AGENTS.md) | agentRuntime signal |
| agentRuntime | [libs/sdk-py/integration/graph/tools_agent.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/integration/graph/tools_agent.py) | agentRuntime signal |
| agentRuntime | [libs/prebuilt/tests/memory_assert.py](../../../../sources/langchain-ai__langgraph/libs/prebuilt/tests/memory_assert.py) | agentRuntime signal |
| agentRuntime | [libs/prebuilt/langgraph/prebuilt/tool_node.py](../../../../sources/langchain-ai__langgraph/libs/prebuilt/langgraph/prebuilt/tool_node.py) | agentRuntime signal |
| entrypoints | [libs/langgraph/langgraph/pregel/main.py](../../../../sources/langchain-ai__langgraph/libs/langgraph/langgraph/pregel/main.py) | entrypoints signal |
| entrypoints | [libs/langgraph/bench/__main__.py](../../../../sources/langchain-ai__langgraph/libs/langgraph/bench/__main__.py) | entrypoints signal |
| entrypoints | [libs/cli/uv-examples/monorepo/apps/agent/src/agent/__init__.py](../../../../sources/langchain-ai__langgraph/libs/cli/uv-examples/monorepo/apps/agent/src/agent/__init__.py) | entrypoints signal |
| entrypoints | [libs/cli/uv-examples/monorepo/apps/agent/src/agent/graph.py](../../../../sources/langchain-ai__langgraph/libs/cli/uv-examples/monorepo/apps/agent/src/agent/graph.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/langchain-ai__langgraph/CLAUDE.md) | instruction signal |
| config | [Makefile](../../../../sources/langchain-ai__langgraph/Makefile) | config signal |
| config | [libs/sdk-py/Makefile](../../../../sources/langchain-ai__langgraph/libs/sdk-py/Makefile) | config signal |
| config | [libs/sdk-py/pyproject.toml](../../../../sources/langchain-ai__langgraph/libs/sdk-py/pyproject.toml) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 11 | [libs/langgraph/langgraph/pregel/main.py](../../../../sources/langchain-ai__langgraph/libs/langgraph/langgraph/pregel/main.py)<br>[libs/langgraph/bench/__main__.py](../../../../sources/langchain-ai__langgraph/libs/langgraph/bench/__main__.py)<br>[libs/cli/uv-examples/monorepo/apps/agent/src/agent/__init__.py](../../../../sources/langchain-ai__langgraph/libs/cli/uv-examples/monorepo/apps/agent/src/agent/__init__.py)<br>[libs/cli/uv-examples/monorepo/apps/agent/src/agent/graph.py](../../../../sources/langchain-ai__langgraph/libs/cli/uv-examples/monorepo/apps/agent/src/agent/graph.py)<br>[libs/cli/python-monorepo-example/apps/agent/src/agent/__init__.py](../../../../sources/langchain-ai__langgraph/libs/cli/python-monorepo-example/apps/agent/src/agent/__init__.py)<br>[libs/cli/python-monorepo-example/apps/agent/src/agent/graph.py](../../../../sources/langchain-ai__langgraph/libs/cli/python-monorepo-example/apps/agent/src/agent/graph.py)<br>[libs/cli/python-monorepo-example/apps/agent/src/agent/state.py](../../../../sources/langchain-ai__langgraph/libs/cli/python-monorepo-example/apps/agent/src/agent/state.py)<br>[libs/cli/langgraph_cli/__main__.py](../../../../sources/langchain-ai__langgraph/libs/cli/langgraph_cli/__main__.py) |
| agentRuntime | 42 | [AGENTS.md](../../../../sources/langchain-ai__langgraph/AGENTS.md)<br>[libs/sdk-py/integration/graph/tools_agent.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/integration/graph/tools_agent.py)<br>[libs/prebuilt/tests/memory_assert.py](../../../../sources/langchain-ai__langgraph/libs/prebuilt/tests/memory_assert.py)<br>[libs/prebuilt/langgraph/prebuilt/tool_node.py](../../../../sources/langchain-ai__langgraph/libs/prebuilt/langgraph/prebuilt/tool_node.py)<br>[libs/prebuilt/langgraph/prebuilt/tool_validator.py](../../../../sources/langchain-ai__langgraph/libs/prebuilt/langgraph/prebuilt/tool_validator.py)<br>[libs/langgraph/tests/agents.py](../../../../sources/langchain-ai__langgraph/libs/langgraph/tests/agents.py)<br>[libs/langgraph/tests/memory_assert.py](../../../../sources/langchain-ai__langgraph/libs/langgraph/tests/memory_assert.py)<br>[libs/cli/uv-examples/simple/src/agent/__init__.py](../../../../sources/langchain-ai__langgraph/libs/cli/uv-examples/simple/src/agent/__init__.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 55 | [libs/sdk-py/tests/integration/test_factory_graph.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/tests/integration/test_factory_graph.py)<br>[libs/sdk-py/tests/integration/test_remote_graph_v3.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/tests/integration/test_remote_graph_v3.py)<br>[libs/sdk-py/integration/graph/__init__.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/integration/graph/__init__.py)<br>[libs/sdk-py/integration/graph/deep_agent.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/integration/graph/deep_agent.py)<br>[libs/sdk-py/integration/graph/factory_graph.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/integration/graph/factory_graph.py)<br>[libs/sdk-py/integration/graph/streaming_graph.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/integration/graph/streaming_graph.py)<br>[libs/sdk-py/integration/graph/tools_agent.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/integration/graph/tools_agent.py)<br>[libs/prebuilt/tests/memory_assert.py](../../../../sources/langchain-ai__langgraph/libs/prebuilt/tests/memory_assert.py) |
| spec | 14 | [libs/langgraph/tests/example_app/requirements.txt](../../../../sources/langchain-ai__langgraph/libs/langgraph/tests/example_app/requirements.txt)<br>[libs/cli/examples/graphs_reqs_b/requirements.txt](../../../../sources/langchain-ai__langgraph/libs/cli/examples/graphs_reqs_b/requirements.txt)<br>[libs/cli/examples/graphs_reqs_a/requirements.txt](../../../../sources/langchain-ai__langgraph/libs/cli/examples/graphs_reqs_a/requirements.txt)<br>[libs/checkpoint-conformance/langgraph/checkpoint/conformance/spec/__init__.py](../../../../sources/langchain-ai__langgraph/libs/checkpoint-conformance/langgraph/checkpoint/conformance/spec/__init__.py)<br>[libs/checkpoint-conformance/langgraph/checkpoint/conformance/spec/_delta_fixtures.py](../../../../sources/langchain-ai__langgraph/libs/checkpoint-conformance/langgraph/checkpoint/conformance/spec/_delta_fixtures.py)<br>[libs/checkpoint-conformance/langgraph/checkpoint/conformance/spec/test_copy_thread.py](../../../../sources/langchain-ai__langgraph/libs/checkpoint-conformance/langgraph/checkpoint/conformance/spec/test_copy_thread.py)<br>[libs/checkpoint-conformance/langgraph/checkpoint/conformance/spec/test_delete_for_runs.py](../../../../sources/langchain-ai__langgraph/libs/checkpoint-conformance/langgraph/checkpoint/conformance/spec/test_delete_for_runs.py)<br>[libs/checkpoint-conformance/langgraph/checkpoint/conformance/spec/test_delete_thread.py](../../../../sources/langchain-ai__langgraph/libs/checkpoint-conformance/langgraph/checkpoint/conformance/spec/test_delete_thread.py) |
| eval | 250 | [libs/sdk-py/tests/test_api_parity.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/tests/test_api_parity.py)<br>[libs/sdk-py/tests/test_assistants_client.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/tests/test_assistants_client.py)<br>[libs/sdk-py/tests/test_cache.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/tests/test_cache.py)<br>[libs/sdk-py/tests/test_client_exports.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/tests/test_client_exports.py)<br>[libs/sdk-py/tests/test_client_stream.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/tests/test_client_stream.py)<br>[libs/sdk-py/tests/test_crons_client.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/tests/test_crons_client.py)<br>[libs/sdk-py/tests/test_encryption.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/tests/test_encryption.py)<br>[libs/sdk-py/tests/test_errors.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/tests/test_errors.py) |
| security | 3 | [libs/sdk-py/langgraph_sdk/auth/__init__.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/langgraph_sdk/auth/__init__.py)<br>[libs/sdk-py/langgraph_sdk/auth/exceptions.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/langgraph_sdk/auth/exceptions.py)<br>[libs/sdk-py/langgraph_sdk/auth/types.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/langgraph_sdk/auth/types.py) |
| ci | 17 | [.github/workflows/_integration_test.yml](../../../../sources/langchain-ai__langgraph/.github/workflows/_integration_test.yml)<br>[.github/workflows/_lint.yml](../../../../sources/langchain-ai__langgraph/.github/workflows/_lint.yml)<br>[.github/workflows/_sdk_integration_test.yml](../../../../sources/langchain-ai__langgraph/.github/workflows/_sdk_integration_test.yml)<br>[.github/workflows/_test_langgraph.yml](../../../../sources/langchain-ai__langgraph/.github/workflows/_test_langgraph.yml)<br>[.github/workflows/_test_release.yml](../../../../sources/langchain-ai__langgraph/.github/workflows/_test_release.yml)<br>[.github/workflows/_test.yml](../../../../sources/langchain-ai__langgraph/.github/workflows/_test.yml)<br>[.github/workflows/baseline.yml](../../../../sources/langchain-ai__langgraph/.github/workflows/baseline.yml)<br>[.github/workflows/bench.yml](../../../../sources/langchain-ai__langgraph/.github/workflows/bench.yml) |
| container | 2 | [libs/sdk-py/integration/docker-compose.yml](../../../../sources/langchain-ai__langgraph/libs/sdk-py/integration/docker-compose.yml)<br>[libs/sdk-py/integration/Dockerfile](../../../../sources/langchain-ai__langgraph/libs/sdk-py/integration/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/langchain-ai__langgraph/AGENTS.md)<br>[CLAUDE.md](../../../../sources/langchain-ai__langgraph/CLAUDE.md) |
| docs | 16 | [README.md](../../../../sources/langchain-ai__langgraph/README.md)<br>[libs/sdk-py/README.md](../../../../sources/langchain-ai__langgraph/libs/sdk-py/README.md)<br>[libs/sdk-js/README.md](../../../../sources/langchain-ai__langgraph/libs/sdk-js/README.md)<br>[libs/prebuilt/README.md](../../../../sources/langchain-ai__langgraph/libs/prebuilt/README.md)<br>[libs/langgraph/README.md](../../../../sources/langchain-ai__langgraph/libs/langgraph/README.md)<br>[libs/cli/README.md](../../../../sources/langchain-ai__langgraph/libs/cli/README.md)<br>[libs/cli/js-examples/README.md](../../../../sources/langchain-ai__langgraph/libs/cli/js-examples/README.md)<br>[libs/checkpoint-sqlite/README.md](../../../../sources/langchain-ai__langgraph/libs/checkpoint-sqlite/README.md) |
| config | 54 | [Makefile](../../../../sources/langchain-ai__langgraph/Makefile)<br>[libs/sdk-py/Makefile](../../../../sources/langchain-ai__langgraph/libs/sdk-py/Makefile)<br>[libs/sdk-py/pyproject.toml](../../../../sources/langchain-ai__langgraph/libs/sdk-py/pyproject.toml)<br>[libs/sdk-py/uv.lock](../../../../sources/langchain-ai__langgraph/libs/sdk-py/uv.lock)<br>[libs/prebuilt/Makefile](../../../../sources/langchain-ai__langgraph/libs/prebuilt/Makefile)<br>[libs/prebuilt/pyproject.toml](../../../../sources/langchain-ai__langgraph/libs/prebuilt/pyproject.toml)<br>[libs/prebuilt/uv.lock](../../../../sources/langchain-ai__langgraph/libs/prebuilt/uv.lock)<br>[libs/langgraph/Makefile](../../../../sources/langchain-ai__langgraph/libs/langgraph/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 250 | [libs/sdk-py/tests/test_api_parity.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/tests/test_api_parity.py)<br>[libs/sdk-py/tests/test_assistants_client.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/tests/test_assistants_client.py)<br>[libs/sdk-py/tests/test_cache.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/tests/test_cache.py)<br>[libs/sdk-py/tests/test_client_exports.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/tests/test_client_exports.py)<br>[libs/sdk-py/tests/test_client_stream.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/tests/test_client_stream.py)<br>[libs/sdk-py/tests/test_crons_client.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/tests/test_crons_client.py) |
| CI workflow | 17 | [.github/workflows/_integration_test.yml](../../../../sources/langchain-ai__langgraph/.github/workflows/_integration_test.yml)<br>[.github/workflows/_lint.yml](../../../../sources/langchain-ai__langgraph/.github/workflows/_lint.yml)<br>[.github/workflows/_sdk_integration_test.yml](../../../../sources/langchain-ai__langgraph/.github/workflows/_sdk_integration_test.yml)<br>[.github/workflows/_test_langgraph.yml](../../../../sources/langchain-ai__langgraph/.github/workflows/_test_langgraph.yml)<br>[.github/workflows/_test_release.yml](../../../../sources/langchain-ai__langgraph/.github/workflows/_test_release.yml)<br>[.github/workflows/_test.yml](../../../../sources/langchain-ai__langgraph/.github/workflows/_test.yml) |
| 컨테이너/배포 | 2 | [libs/sdk-py/integration/docker-compose.yml](../../../../sources/langchain-ai__langgraph/libs/sdk-py/integration/docker-compose.yml)<br>[libs/sdk-py/integration/Dockerfile](../../../../sources/langchain-ai__langgraph/libs/sdk-py/integration/Dockerfile) |
| 보안/정책 | 3 | [libs/sdk-py/langgraph_sdk/auth/__init__.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/langgraph_sdk/auth/__init__.py)<br>[libs/sdk-py/langgraph_sdk/auth/exceptions.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/langgraph_sdk/auth/exceptions.py)<br>[libs/sdk-py/langgraph_sdk/auth/types.py](../../../../sources/langchain-ai__langgraph/libs/sdk-py/langgraph_sdk/auth/types.py) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/langchain-ai__langgraph/AGENTS.md)<br>[CLAUDE.md](../../../../sources/langchain-ai__langgraph/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `AGENTS.md`, `libs/sdk-py/integration/graph/tools_agent.py`, `libs/prebuilt/tests/memory_assert.py`.
2. entrypoint를 따라 실행 흐름 확인: `libs/langgraph/langgraph/pregel/main.py`, `libs/langgraph/bench/__main__.py`, `libs/cli/uv-examples/monorepo/apps/agent/src/agent/__init__.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `libs/sdk-py/integration/graph/tools_agent.py`, `libs/prebuilt/tests/memory_assert.py`.
4. retrieval/memory/indexing 확인: `libs/sdk-py/tests/integration/test_factory_graph.py`, `libs/sdk-py/tests/integration/test_remote_graph_v3.py`, `libs/sdk-py/integration/graph/__init__.py`.
5. test/eval 파일로 동작 검증: `libs/sdk-py/tests/test_api_parity.py`, `libs/sdk-py/tests/test_assistants_client.py`, `libs/sdk-py/tests/test_cache.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 666 files, 158 directories.. 핵심 구조 신호는 Python, Makefile, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
