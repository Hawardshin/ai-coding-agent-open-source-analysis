# truera/trulens 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Local clone structure analysis: 1234 files, 318 directories.

## 요약

- 조사 단위: `sources/truera__trulens` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,232 files, 317 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=examples/experimental/langgraph_mcp.ipynb, docs/component_guides/instrumentation/mcp.md이고, 의존성 단서는 openai, langchain, langgraph, llamaindex, llama, 검증/운영 단서는 test/eval 경로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | truera/trulens |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/truera__trulens](../../../../sources/truera__trulens) |
| 기존 보고서 | [reports/clone-structures/truera__trulens.md](../../../clone-structures/truera__trulens.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1232 / 317 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | _trulens, .agents, .azure_pipelines, .github, .grit, benchmarks, docker, docs, examples, release_dbs, scripts, src, tests, tools |
| 상위 확장자 | .py: 471, .png: 148, .ipynb: 127, .md: 123, .ts: 87, .tsx: 64, .json: 30, .toml: 23, .typed: 22, .yaml: 19, (none): 16, .scss: 13 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 99 |
| tests | validation surface | 55 |
| examples/expositional | examples workspace | 23 |
| docs | documentation surface | 15 |
| examples/dev | examples workspace | 3 |
| examples/experimental | examples workspace | 2 |
| examples/quickstart | examples workspace | 2 |
| _trulens | top-level component | 1 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| docker | documentation surface | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| release_dbs | top-level component | 1 |
| scripts | top-level component | 1 |
| tools | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .ONESHELL | make .ONESHELL |
| utility | Makefile | env | make env |
| test | Makefile | env-tests | make env-tests |
| utility | Makefile | clean-env | make clean-env |
| utility | Makefile | clean-caches | make clean-caches |
| test | Makefile | env-tests-basic | make env-tests-basic |
| test | Makefile | env-tests-optional | make env-tests-optional |
| test | Makefile | env-tests-snowflake | make env-tests-snowflake |
| test | Makefile | env-tests-db | make env-tests-db |
| test | Makefile | env-tests-notebook | make env-tests-notebook |
| utility | Makefile | lock | make lock |
| utility | Makefile | pip-install | make pip-install |
| build | Makefile | conda-build | make conda-build |
| quality | Makefile | lint | make lint |
| quality | Makefile | format | make format |
| utility | Makefile | precommit-hooks | make precommit-hooks |
| utility | Makefile | run-precommit | make run-precommit |
| utility | Makefile | lab | make lab |
| utility | Makefile | docs | make docs |
| serve-dev | Makefile | docs-serve | make docs-serve |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | 없음 |
| agentFrameworks | langchain, langgraph, llamaindex |
| vectorStores | 없음 |
| modelRuntime | llama |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [examples/experimental/langgraph_mcp.ipynb](../../../../sources/truera__trulens/examples/experimental/langgraph_mcp.ipynb) | mcp signal |
| mcp | [docs/component_guides/instrumentation/mcp.md](../../../../sources/truera__trulens/docs/component_guides/instrumentation/mcp.md) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/truera__trulens/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tools/systemd/init_conda.sh](../../../../sources/truera__trulens/tools/systemd/init_conda.sh) | agentRuntime signal |
| agentRuntime | [tools/systemd/trulens.service](../../../../sources/truera__trulens/tools/systemd/trulens.service) | agentRuntime signal |
| agentRuntime | [src/feedback/trulens/feedback/templates/agent.py](../../../../sources/truera__trulens/src/feedback/trulens/feedback/templates/agent.py) | agentRuntime signal |
| entrypoints | [src/hotspots/trulens/hotspots/__main__.py](../../../../sources/truera__trulens/src/hotspots/trulens/hotspots/__main__.py) | entrypoints signal |
| entrypoints | [src/dashboard/trulens/dashboard/main.py](../../../../sources/truera__trulens/src/dashboard/trulens/dashboard/main.py) | entrypoints signal |
| entrypoints | [src/dashboard/react_components/record_viewer_otel/src/main.tsx](../../../../sources/truera__trulens/src/dashboard/react_components/record_viewer_otel/src/main.tsx) | entrypoints signal |
| entrypoints | [src/dashboard/react_components/record_viewer_otel/.storybook/main.ts](../../../../sources/truera__trulens/src/dashboard/react_components/record_viewer_otel/.storybook/main.ts) | entrypoints signal |
| config | [Makefile](../../../../sources/truera__trulens/Makefile) | config signal |
| config | [poetry.lock](../../../../sources/truera__trulens/poetry.lock) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 9 | [src/hotspots/trulens/hotspots/__main__.py](../../../../sources/truera__trulens/src/hotspots/trulens/hotspots/__main__.py)<br>[src/dashboard/trulens/dashboard/main.py](../../../../sources/truera__trulens/src/dashboard/trulens/dashboard/main.py)<br>[src/dashboard/react_components/record_viewer_otel/src/main.tsx](../../../../sources/truera__trulens/src/dashboard/react_components/record_viewer_otel/src/main.tsx)<br>[src/dashboard/react_components/record_viewer_otel/.storybook/main.ts](../../../../sources/truera__trulens/src/dashboard/react_components/record_viewer_otel/.storybook/main.ts)<br>[src/dashboard/react_components/record_viewer/src/main.tsx](../../../../sources/truera__trulens/src/dashboard/react_components/record_viewer/src/main.tsx)<br>[examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/server.py](../../../../sources/truera__trulens/examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/server.py)<br>[examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/frontend/src/App.tsx](../../../../sources/truera__trulens/examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/frontend/src/App.tsx)<br>[examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/frontend/src/index.css](../../../../sources/truera__trulens/examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/frontend/src/index.css) |
| agentRuntime | 22 | [AGENTS.md](../../../../sources/truera__trulens/AGENTS.md)<br>[tools/systemd/init_conda.sh](../../../../sources/truera__trulens/tools/systemd/init_conda.sh)<br>[tools/systemd/trulens.service](../../../../sources/truera__trulens/tools/systemd/trulens.service)<br>[src/feedback/trulens/feedback/templates/agent.py](../../../../sources/truera__trulens/src/feedback/trulens/feedback/templates/agent.py)<br>[src/core/trulens/.agents/skills/trulens-running-evaluations/SKILL.md](../../../../sources/truera__trulens/src/core/trulens/.agents/skills/trulens-running-evaluations/SKILL.md)<br>[src/core/trulens/.agents/skills/trulens-notebook-execution/SKILL.md](../../../../sources/truera__trulens/src/core/trulens/.agents/skills/trulens-notebook-execution/SKILL.md)<br>[src/core/trulens/.agents/skills/trulens-instrumentation/debug_utils.py](../../../../sources/truera__trulens/src/core/trulens/.agents/skills/trulens-instrumentation/debug_utils.py)<br>[src/core/trulens/.agents/skills/trulens-instrumentation/SKILL.md](../../../../sources/truera__trulens/src/core/trulens/.agents/skills/trulens-instrumentation/SKILL.md) |
| mcp | 2 | [examples/experimental/langgraph_mcp.ipynb](../../../../sources/truera__trulens/examples/experimental/langgraph_mcp.ipynb)<br>[docs/component_guides/instrumentation/mcp.md](../../../../sources/truera__trulens/docs/component_guides/instrumentation/mcp.md) |
| retrieval | 97 | [tests/util/llama_index_mock_embedder.py](../../../../sources/truera__trulens/tests/util/llama_index_mock_embedder.py)<br>[tests/unit/test_otel_rag_triad.py](../../../../sources/truera__trulens/tests/unit/test_otel_rag_triad.py)<br>[tests/unit/test_otel_tru_graph.py](../../../../sources/truera__trulens/tests/unit/test_otel_tru_graph.py)<br>[tests/unit/static/golden/test_otel_tru_graph_test_function_api_smoke.csv](../../../../sources/truera__trulens/tests/unit/static/golden/test_otel_tru_graph_test_function_api_smoke.csv)<br>[tests/unit/static/golden/test_otel_tru_graph_test_smoke.csv](../../../../sources/truera__trulens/tests/unit/static/golden/test_otel_tru_graph_test_smoke.csv)<br>[tests/unit/data/test_otel_spans/retrieval_span.json](../../../../sources/truera__trulens/tests/unit/data/test_otel_spans/retrieval_span.json)<br>[tests/integration/test_rag_triad_pipeline.py](../../../../sources/truera__trulens/tests/integration/test_rag_triad_pipeline.py)<br>[tests/e2e/test_embedding_feedback.py](../../../../sources/truera__trulens/tests/e2e/test_embedding_feedback.py) |
| spec | 8 | [tests/docs_notebooks/requirements.txt](../../../../sources/truera__trulens/tests/docs_notebooks/requirements.txt)<br>[src/dashboard/react_components/record_viewer_otel/test/snapshots.spec.ts](../../../../sources/truera__trulens/src/dashboard/react_components/record_viewer_otel/test/snapshots.spec.ts)<br>[src/core/trulens/core/utils/requirements.optional.txt](../../../../sources/truera__trulens/src/core/trulens/core/utils/requirements.optional.txt)<br>[src/core/trulens/core/utils/requirements.txt](../../../../sources/truera__trulens/src/core/trulens/core/utils/requirements.txt)<br>[examples/expositional/use_cases/snowflake-ai-stack-agentic-eval/requirements.txt](../../../../sources/truera__trulens/examples/expositional/use_cases/snowflake-ai-stack-agentic-eval/requirements.txt)<br>[examples/expositional/use_cases/snowflake-ai-stack/requirements.txt](../../../../sources/truera__trulens/examples/expositional/use_cases/snowflake-ai-stack/requirements.txt)<br>[docs/contributing/design.md](../../../../sources/truera__trulens/docs/contributing/design.md)<br>[docs/assets/images/TruLens_Architecture.png](../../../../sources/truera__trulens/docs/assets/images/TruLens_Architecture.png) |
| eval | 453 | [tests/__init__.py](../../../../sources/truera__trulens/tests/__init__.py)<br>[tests/_mods.py](../../../../sources/truera__trulens/tests/_mods.py)<br>[tests/.gitignore](../../../../sources/truera__trulens/tests/.gitignore)<br>[tests/api.ipynb](../../../../sources/truera__trulens/tests/api.ipynb)<br>[tests/README.md](../../../../sources/truera__trulens/tests/README.md)<br>[tests/test.py](../../../../sources/truera__trulens/tests/test.py)<br>[tests/utils.py](../../../../sources/truera__trulens/tests/utils.py)<br>[tests/util/df_comparison.py](../../../../sources/truera__trulens/tests/util/df_comparison.py) |
| security | 5 | [tests/unit/test_otel_guardrail_spans.py](../../../../sources/truera__trulens/tests/unit/test_otel_guardrail_spans.py)<br>[tests/unit/test_otel_guardrail.py](../../../../sources/truera__trulens/tests/unit/test_otel_guardrail.py)<br>[examples/expositional/use_cases/snowflake_auth_methods.ipynb](../../../../sources/truera__trulens/examples/expositional/use_cases/snowflake_auth_methods.ipynb)<br>[docs/component_guides/runtime_evaluation/guardrail_context_filtering.png](../../../../sources/truera__trulens/docs/component_guides/runtime_evaluation/guardrail_context_filtering.png)<br>[docs/component_guides/runtime_evaluation/simple_guardrail_flow.png](../../../../sources/truera__trulens/docs/component_guides/runtime_evaluation/simple_guardrail_flow.png) |
| ci | 0 | 명확하지 않음 |
| container | 2 | [src/dashboard/react_components/record_viewer_otel/docker-compose.test.yml](../../../../sources/truera__trulens/src/dashboard/react_components/record_viewer_otel/docker-compose.test.yml)<br>[src/dashboard/react_components/record_viewer_otel/Dockerfile.test](../../../../sources/truera__trulens/src/dashboard/react_components/record_viewer_otel/Dockerfile.test) |
| instruction | 1 | [AGENTS.md](../../../../sources/truera__trulens/AGENTS.md) |
| docs | 189 | [mkdocs.yml](../../../../sources/truera__trulens/mkdocs.yml)<br>[README.md](../../../../sources/truera__trulens/README.md)<br>[tests/README.md](../../../../sources/truera__trulens/tests/README.md)<br>[tests/unit/streamlit/README.md](../../../../sources/truera__trulens/tests/unit/streamlit/README.md)<br>[src/trulens_eval/README.md](../../../../sources/truera__trulens/src/trulens_eval/README.md)<br>[src/providers/openai/README.md](../../../../sources/truera__trulens/src/providers/openai/README.md)<br>[src/providers/litellm/README.md](../../../../sources/truera__trulens/src/providers/litellm/README.md)<br>[src/providers/langchain/README.md](../../../../sources/truera__trulens/src/providers/langchain/README.md) |
| config | 37 | [Makefile](../../../../sources/truera__trulens/Makefile)<br>[poetry.lock](../../../../sources/truera__trulens/poetry.lock)<br>[pyproject.toml](../../../../sources/truera__trulens/pyproject.toml)<br>[tests/docs_notebooks/requirements.txt](../../../../sources/truera__trulens/tests/docs_notebooks/requirements.txt)<br>[src/trulens_eval/pyproject.toml](../../../../sources/truera__trulens/src/trulens_eval/pyproject.toml)<br>[src/providers/openai/pyproject.toml](../../../../sources/truera__trulens/src/providers/openai/pyproject.toml)<br>[src/providers/litellm/pyproject.toml](../../../../sources/truera__trulens/src/providers/litellm/pyproject.toml)<br>[src/providers/langchain/pyproject.toml](../../../../sources/truera__trulens/src/providers/langchain/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 453 | [tests/__init__.py](../../../../sources/truera__trulens/tests/__init__.py)<br>[tests/_mods.py](../../../../sources/truera__trulens/tests/_mods.py)<br>[tests/.gitignore](../../../../sources/truera__trulens/tests/.gitignore)<br>[tests/api.ipynb](../../../../sources/truera__trulens/tests/api.ipynb)<br>[tests/README.md](../../../../sources/truera__trulens/tests/README.md)<br>[tests/test.py](../../../../sources/truera__trulens/tests/test.py) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 2 | [src/dashboard/react_components/record_viewer_otel/docker-compose.test.yml](../../../../sources/truera__trulens/src/dashboard/react_components/record_viewer_otel/docker-compose.test.yml)<br>[src/dashboard/react_components/record_viewer_otel/Dockerfile.test](../../../../sources/truera__trulens/src/dashboard/react_components/record_viewer_otel/Dockerfile.test) |
| 보안/정책 | 5 | [tests/unit/test_otel_guardrail_spans.py](../../../../sources/truera__trulens/tests/unit/test_otel_guardrail_spans.py)<br>[tests/unit/test_otel_guardrail.py](../../../../sources/truera__trulens/tests/unit/test_otel_guardrail.py)<br>[examples/expositional/use_cases/snowflake_auth_methods.ipynb](../../../../sources/truera__trulens/examples/expositional/use_cases/snowflake_auth_methods.ipynb)<br>[docs/component_guides/runtime_evaluation/guardrail_context_filtering.png](../../../../sources/truera__trulens/docs/component_guides/runtime_evaluation/guardrail_context_filtering.png)<br>[docs/component_guides/runtime_evaluation/simple_guardrail_flow.png](../../../../sources/truera__trulens/docs/component_guides/runtime_evaluation/simple_guardrail_flow.png) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/truera__trulens/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `examples/experimental/langgraph_mcp.ipynb`, `docs/component_guides/instrumentation/mcp.md`, `AGENTS.md`.
2. entrypoint를 따라 실행 흐름 확인: `src/hotspots/trulens/hotspots/__main__.py`, `src/dashboard/trulens/dashboard/main.py`, `src/dashboard/react_components/record_viewer_otel/src/main.tsx`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tools/systemd/init_conda.sh`, `tools/systemd/trulens.service`.
4. retrieval/memory/indexing 확인: `tests/util/llama_index_mock_embedder.py`, `tests/unit/test_otel_rag_triad.py`, `tests/unit/test_otel_tru_graph.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/_mods.py`, `tests/.gitignore`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 1234 files, 318 directories.. 핵심 구조 신호는 pyproject.toml, Makefile, README.md, AGENTS.md, LICENSE, openai이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
