# getzep/graphiti 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Build Real-Time Knowledge Graphs for AI Agents

## 요약

- 조사 단위: `sources/getzep__graphiti` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 352 files, 72 directories, depth score 121, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp_server/.env.example, mcp_server/.python-version, mcp_server/main.py이고, 의존성 단서는 openai, anthropic, langchain, langgraph, pydantic, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | getzep/graphiti |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | Python |
| Stars | 27553 |
| Forks | 2761 |
| License | Apache-2.0 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/getzep__graphiti](../../../../sources/getzep__graphiti) |
| 기존 보고서 | [reports/llm-wiki/repositories/getzep__graphiti.md](../../../llm-wiki/repositories/getzep__graphiti.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 352 / 72 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, examples, graphiti_core, images, mcp_server, server, signatures, spec, tests |
| 상위 확장자 | .py: 255, .md: 23, .yml: 23, (none): 7, .example: 6, .json: 5, .yaml: 5, .ini: 4, .lock: 4, .toml: 4, .sh: 3, .txt: 3 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 43 |
| server | source boundary | 17 |
| examples/opentelemetry | examples workspace | 3 |
| examples/quickstart | examples workspace | 3 |
| examples/ecommerce | examples workspace | 2 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| examples/azure-openai | examples workspace | 1 |
| examples/gliner2 | examples workspace | 1 |
| examples/langgraph-agent | examples workspace | 1 |
| examples/wizard_of_oz | examples workspace | 1 |
| graphiti_core | top-level component | 1 |
| images | top-level component | 1 |
| mcp_server | source boundary | 1 |
| signatures | top-level component | 1 |
| spec | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | all | make all |
| utility | Makefile | install | make install |
| quality | Makefile | format | make format |
| quality | Makefile | lint | make lint |
| test | Makefile | test | make test |
| quality | Makefile | check | make check |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | 없음 |
| agentFrameworks | langchain, langgraph |
| vectorStores | 없음 |
| modelRuntime | transformers |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [mcp_server/.env.example](../../../../sources/getzep__graphiti/mcp_server/.env.example) | mcp signal |
| mcp | [mcp_server/.python-version](../../../../sources/getzep__graphiti/mcp_server/.python-version) | mcp signal |
| mcp | [mcp_server/main.py](../../../../sources/getzep__graphiti/mcp_server/main.py) | mcp signal |
| mcp | [mcp_server/pyproject.toml](../../../../sources/getzep__graphiti/mcp_server/pyproject.toml) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/getzep__graphiti/AGENTS.md) | agentRuntime signal |
| agentRuntime | [examples/wizard_of_oz/runner.py](../../../../sources/getzep__graphiti/examples/wizard_of_oz/runner.py) | agentRuntime signal |
| agentRuntime | [examples/langgraph-agent/agent.ipynb](../../../../sources/getzep__graphiti/examples/langgraph-agent/agent.ipynb) | agentRuntime signal |
| agentRuntime | [examples/ecommerce/runner.ipynb](../../../../sources/getzep__graphiti/examples/ecommerce/runner.ipynb) | agentRuntime signal |
| entrypoints | [server/graph_service/main.py](../../../../sources/getzep__graphiti/server/graph_service/main.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/getzep__graphiti/CLAUDE.md) | instruction signal |
| config | [Makefile](../../../../sources/getzep__graphiti/Makefile) | config signal |
| config | [pyproject.toml](../../../../sources/getzep__graphiti/pyproject.toml) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [server/graph_service/main.py](../../../../sources/getzep__graphiti/server/graph_service/main.py)<br>[mcp_server/main.py](../../../../sources/getzep__graphiti/mcp_server/main.py) |
| agentRuntime | 5 | [AGENTS.md](../../../../sources/getzep__graphiti/AGENTS.md)<br>[examples/wizard_of_oz/runner.py](../../../../sources/getzep__graphiti/examples/wizard_of_oz/runner.py)<br>[examples/langgraph-agent/agent.ipynb](../../../../sources/getzep__graphiti/examples/langgraph-agent/agent.ipynb)<br>[examples/ecommerce/runner.ipynb](../../../../sources/getzep__graphiti/examples/ecommerce/runner.ipynb)<br>[examples/ecommerce/runner.py](../../../../sources/getzep__graphiti/examples/ecommerce/runner.py) |
| mcp | 59 | [mcp_server/.env.example](../../../../sources/getzep__graphiti/mcp_server/.env.example)<br>[mcp_server/.python-version](../../../../sources/getzep__graphiti/mcp_server/.python-version)<br>[mcp_server/main.py](../../../../sources/getzep__graphiti/mcp_server/main.py)<br>[mcp_server/pyproject.toml](../../../../sources/getzep__graphiti/mcp_server/pyproject.toml)<br>[mcp_server/pytest.ini](../../../../sources/getzep__graphiti/mcp_server/pytest.ini)<br>[mcp_server/README.md](../../../../sources/getzep__graphiti/mcp_server/README.md)<br>[mcp_server/uv.lock](../../../../sources/getzep__graphiti/mcp_server/uv.lock)<br>[mcp_server/tests/__init__.py](../../../../sources/getzep__graphiti/mcp_server/tests/__init__.py) |
| retrieval | 23 | [tests/evals/eval_e2e_graph_building.py](../../../../sources/getzep__graphiti/tests/evals/eval_e2e_graph_building.py)<br>[server/graph_service/__init__.py](../../../../sources/getzep__graphiti/server/graph_service/__init__.py)<br>[server/graph_service/config.py](../../../../sources/getzep__graphiti/server/graph_service/config.py)<br>[server/graph_service/main.py](../../../../sources/getzep__graphiti/server/graph_service/main.py)<br>[server/graph_service/zep_graphiti.py](../../../../sources/getzep__graphiti/server/graph_service/zep_graphiti.py)<br>[server/graph_service/routers/__init__.py](../../../../sources/getzep__graphiti/server/graph_service/routers/__init__.py)<br>[server/graph_service/routers/ingest.py](../../../../sources/getzep__graphiti/server/graph_service/routers/ingest.py)<br>[server/graph_service/routers/retrieve.py](../../../../sources/getzep__graphiti/server/graph_service/routers/retrieve.py) |
| spec | 2 | [spec/driver-operations-redesign.md](../../../../sources/getzep__graphiti/spec/driver-operations-redesign.md)<br>[examples/quickstart/requirements.txt](../../../../sources/getzep__graphiti/examples/quickstart/requirements.txt) |
| eval | 70 | [docker-compose.test.yml](../../../../sources/getzep__graphiti/docker-compose.test.yml)<br>[OTEL_TRACING.md](../../../../sources/getzep__graphiti/OTEL_TRACING.md)<br>[tests/helpers_test.py](../../../../sources/getzep__graphiti/tests/helpers_test.py)<br>[tests/test_add_triplet.py](../../../../sources/getzep__graphiti/tests/test_add_triplet.py)<br>[tests/test_edge_int.py](../../../../sources/getzep__graphiti/tests/test_edge_int.py)<br>[tests/test_entity_exclusion_int.py](../../../../sources/getzep__graphiti/tests/test_entity_exclusion_int.py)<br>[tests/test_graphiti_int.py](../../../../sources/getzep__graphiti/tests/test_graphiti_int.py)<br>[tests/test_graphiti_mock.py](../../../../sources/getzep__graphiti/tests/test_graphiti_mock.py) |
| security | 4 | [SECURITY.md](../../../../sources/getzep__graphiti/SECURITY.md)<br>[tests/test_node_label_security.py](../../../../sources/getzep__graphiti/tests/test_node_label_security.py)<br>[tests/utils/search/test_search_security.py](../../../../sources/getzep__graphiti/tests/utils/search/test_search_security.py)<br>[.github/secret_scanning.yml](../../../../sources/getzep__graphiti/.github/secret_scanning.yml) |
| ci | 15 | [.github/workflows/ai-moderator.yml](../../../../sources/getzep__graphiti/.github/workflows/ai-moderator.yml)<br>[.github/workflows/cla.yml](../../../../sources/getzep__graphiti/.github/workflows/cla.yml)<br>[.github/workflows/claude-code-review-manual.yml](../../../../sources/getzep__graphiti/.github/workflows/claude-code-review-manual.yml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/getzep__graphiti/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/getzep__graphiti/.github/workflows/claude.yml)<br>[.github/workflows/codeql.yml](../../../../sources/getzep__graphiti/.github/workflows/codeql.yml)<br>[.github/workflows/lint.yml](../../../../sources/getzep__graphiti/.github/workflows/lint.yml)<br>[.github/workflows/mcp-server-tests.yml](../../../../sources/getzep__graphiti/.github/workflows/mcp-server-tests.yml) |
| container | 8 | [docker-compose.test.yml](../../../../sources/getzep__graphiti/docker-compose.test.yml)<br>[docker-compose.yml](../../../../sources/getzep__graphiti/docker-compose.yml)<br>[Dockerfile](../../../../sources/getzep__graphiti/Dockerfile)<br>[mcp_server/docker/docker-compose-falkordb.yml](../../../../sources/getzep__graphiti/mcp_server/docker/docker-compose-falkordb.yml)<br>[mcp_server/docker/docker-compose-neo4j.yml](../../../../sources/getzep__graphiti/mcp_server/docker/docker-compose-neo4j.yml)<br>[mcp_server/docker/docker-compose.yml](../../../../sources/getzep__graphiti/mcp_server/docker/docker-compose.yml)<br>[mcp_server/docker/Dockerfile](../../../../sources/getzep__graphiti/mcp_server/docker/Dockerfile)<br>[mcp_server/docker/Dockerfile.standalone](../../../../sources/getzep__graphiti/mcp_server/docker/Dockerfile.standalone) |
| instruction | 2 | [AGENTS.md](../../../../sources/getzep__graphiti/AGENTS.md)<br>[CLAUDE.md](../../../../sources/getzep__graphiti/CLAUDE.md) |
| docs | 12 | [README.md](../../../../sources/getzep__graphiti/README.md)<br>[tests/evals/data/longmemeval_data/README.md](../../../../sources/getzep__graphiti/tests/evals/data/longmemeval_data/README.md)<br>[server/README.md](../../../../sources/getzep__graphiti/server/README.md)<br>[mcp_server/README.md](../../../../sources/getzep__graphiti/mcp_server/README.md)<br>[mcp_server/tests/README.md](../../../../sources/getzep__graphiti/mcp_server/tests/README.md)<br>[mcp_server/docs/cursor_rules.md](../../../../sources/getzep__graphiti/mcp_server/docs/cursor_rules.md)<br>[mcp_server/docker/README-falkordb-combined.md](../../../../sources/getzep__graphiti/mcp_server/docker/README-falkordb-combined.md)<br>[mcp_server/docker/README.md](../../../../sources/getzep__graphiti/mcp_server/docker/README.md) |
| config | 11 | [Makefile](../../../../sources/getzep__graphiti/Makefile)<br>[pyproject.toml](../../../../sources/getzep__graphiti/pyproject.toml)<br>[uv.lock](../../../../sources/getzep__graphiti/uv.lock)<br>[server/Makefile](../../../../sources/getzep__graphiti/server/Makefile)<br>[server/pyproject.toml](../../../../sources/getzep__graphiti/server/pyproject.toml)<br>[server/uv.lock](../../../../sources/getzep__graphiti/server/uv.lock)<br>[mcp_server/pyproject.toml](../../../../sources/getzep__graphiti/mcp_server/pyproject.toml)<br>[mcp_server/uv.lock](../../../../sources/getzep__graphiti/mcp_server/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 70 | [docker-compose.test.yml](../../../../sources/getzep__graphiti/docker-compose.test.yml)<br>[OTEL_TRACING.md](../../../../sources/getzep__graphiti/OTEL_TRACING.md)<br>[tests/helpers_test.py](../../../../sources/getzep__graphiti/tests/helpers_test.py)<br>[tests/test_add_triplet.py](../../../../sources/getzep__graphiti/tests/test_add_triplet.py)<br>[tests/test_edge_int.py](../../../../sources/getzep__graphiti/tests/test_edge_int.py)<br>[tests/test_entity_exclusion_int.py](../../../../sources/getzep__graphiti/tests/test_entity_exclusion_int.py) |
| CI workflow | 15 | [.github/workflows/ai-moderator.yml](../../../../sources/getzep__graphiti/.github/workflows/ai-moderator.yml)<br>[.github/workflows/cla.yml](../../../../sources/getzep__graphiti/.github/workflows/cla.yml)<br>[.github/workflows/claude-code-review-manual.yml](../../../../sources/getzep__graphiti/.github/workflows/claude-code-review-manual.yml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/getzep__graphiti/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/getzep__graphiti/.github/workflows/claude.yml)<br>[.github/workflows/codeql.yml](../../../../sources/getzep__graphiti/.github/workflows/codeql.yml) |
| 컨테이너/배포 | 8 | [docker-compose.test.yml](../../../../sources/getzep__graphiti/docker-compose.test.yml)<br>[docker-compose.yml](../../../../sources/getzep__graphiti/docker-compose.yml)<br>[Dockerfile](../../../../sources/getzep__graphiti/Dockerfile)<br>[mcp_server/docker/docker-compose-falkordb.yml](../../../../sources/getzep__graphiti/mcp_server/docker/docker-compose-falkordb.yml)<br>[mcp_server/docker/docker-compose-neo4j.yml](../../../../sources/getzep__graphiti/mcp_server/docker/docker-compose-neo4j.yml)<br>[mcp_server/docker/docker-compose.yml](../../../../sources/getzep__graphiti/mcp_server/docker/docker-compose.yml) |
| 보안/정책 | 4 | [SECURITY.md](../../../../sources/getzep__graphiti/SECURITY.md)<br>[tests/test_node_label_security.py](../../../../sources/getzep__graphiti/tests/test_node_label_security.py)<br>[tests/utils/search/test_search_security.py](../../../../sources/getzep__graphiti/tests/utils/search/test_search_security.py)<br>[.github/secret_scanning.yml](../../../../sources/getzep__graphiti/.github/secret_scanning.yml) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/getzep__graphiti/AGENTS.md)<br>[CLAUDE.md](../../../../sources/getzep__graphiti/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `mcp_server/.env.example`, `mcp_server/.python-version`, `mcp_server/main.py`.
2. entrypoint를 따라 실행 흐름 확인: `server/graph_service/main.py`, `mcp_server/main.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `examples/wizard_of_oz/runner.py`, `examples/langgraph-agent/agent.ipynb`.
4. retrieval/memory/indexing 확인: `tests/evals/eval_e2e_graph_building.py`, `server/graph_service/__init__.py`, `server/graph_service/config.py`.
5. test/eval 파일로 동작 검증: `docker-compose.test.yml`, `OTEL_TRACING.md`, `tests/helpers_test.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Build Real Time Knowledge Graphs for AI Agents. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, Makefile, README.md이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
