# truera/trulens Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 1234 files, 318 directories.

## 요약

- 조사 단위: `sources/truera__trulens` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,232 files, 317 directories, depth score 134, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=examples/experimental/langgraph_mcp.ipynb, docs/component_guides/instrumentation/mcp.md이고, 의존성 단서는 openai, langchain, langgraph, llamaindex, llama, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | truera/trulens |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/truera__trulens](../../../../sources/truera__trulens) |
| Existing report | [reports/clone-structures/truera__trulens.md](../../../clone-structures/truera__trulens.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1232 / 317 |
| Max observed depth | 8 |
| Top directories | _trulens, .agents, .azure_pipelines, .github, .grit, benchmarks, docker, docs, examples, release_dbs, scripts, src, tests, tools |
| Top extensions | .py: 471, .png: 148, .ipynb: 127, .md: 123, .ts: 87, .tsx: 64, .json: 30, .toml: 23, .typed: 22, .yaml: 19, (none): 16, .scss: 13 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
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


## How It Runs

| Category | Source | Name | Command |
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


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | none |
| agentFrameworks | langchain, langgraph, llamaindex |
| vectorStores | none |
| modelRuntime | llama |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 9 | [src/hotspots/trulens/hotspots/__main__.py](../../../../sources/truera__trulens/src/hotspots/trulens/hotspots/__main__.py)<br>[src/dashboard/trulens/dashboard/main.py](../../../../sources/truera__trulens/src/dashboard/trulens/dashboard/main.py)<br>[src/dashboard/react_components/record_viewer_otel/src/main.tsx](../../../../sources/truera__trulens/src/dashboard/react_components/record_viewer_otel/src/main.tsx)<br>[src/dashboard/react_components/record_viewer_otel/.storybook/main.ts](../../../../sources/truera__trulens/src/dashboard/react_components/record_viewer_otel/.storybook/main.ts)<br>[src/dashboard/react_components/record_viewer/src/main.tsx](../../../../sources/truera__trulens/src/dashboard/react_components/record_viewer/src/main.tsx)<br>[examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/server.py](../../../../sources/truera__trulens/examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/server.py)<br>[examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/frontend/src/App.tsx](../../../../sources/truera__trulens/examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/frontend/src/App.tsx)<br>[examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/frontend/src/index.css](../../../../sources/truera__trulens/examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/frontend/src/index.css) |
| agentRuntime | 22 | [AGENTS.md](../../../../sources/truera__trulens/AGENTS.md)<br>[tools/systemd/init_conda.sh](../../../../sources/truera__trulens/tools/systemd/init_conda.sh)<br>[tools/systemd/trulens.service](../../../../sources/truera__trulens/tools/systemd/trulens.service)<br>[src/feedback/trulens/feedback/templates/agent.py](../../../../sources/truera__trulens/src/feedback/trulens/feedback/templates/agent.py)<br>[src/core/trulens/.agents/skills/trulens-running-evaluations/SKILL.md](../../../../sources/truera__trulens/src/core/trulens/.agents/skills/trulens-running-evaluations/SKILL.md)<br>[src/core/trulens/.agents/skills/trulens-notebook-execution/SKILL.md](../../../../sources/truera__trulens/src/core/trulens/.agents/skills/trulens-notebook-execution/SKILL.md)<br>[src/core/trulens/.agents/skills/trulens-instrumentation/debug_utils.py](../../../../sources/truera__trulens/src/core/trulens/.agents/skills/trulens-instrumentation/debug_utils.py)<br>[src/core/trulens/.agents/skills/trulens-instrumentation/SKILL.md](../../../../sources/truera__trulens/src/core/trulens/.agents/skills/trulens-instrumentation/SKILL.md) |
| mcp | 2 | [examples/experimental/langgraph_mcp.ipynb](../../../../sources/truera__trulens/examples/experimental/langgraph_mcp.ipynb)<br>[docs/component_guides/instrumentation/mcp.md](../../../../sources/truera__trulens/docs/component_guides/instrumentation/mcp.md) |
| retrieval | 97 | [tests/util/llama_index_mock_embedder.py](../../../../sources/truera__trulens/tests/util/llama_index_mock_embedder.py)<br>[tests/unit/test_otel_rag_triad.py](../../../../sources/truera__trulens/tests/unit/test_otel_rag_triad.py)<br>[tests/unit/test_otel_tru_graph.py](../../../../sources/truera__trulens/tests/unit/test_otel_tru_graph.py)<br>[tests/unit/static/golden/test_otel_tru_graph_test_function_api_smoke.csv](../../../../sources/truera__trulens/tests/unit/static/golden/test_otel_tru_graph_test_function_api_smoke.csv)<br>[tests/unit/static/golden/test_otel_tru_graph_test_smoke.csv](../../../../sources/truera__trulens/tests/unit/static/golden/test_otel_tru_graph_test_smoke.csv)<br>[tests/unit/data/test_otel_spans/retrieval_span.json](../../../../sources/truera__trulens/tests/unit/data/test_otel_spans/retrieval_span.json)<br>[tests/integration/test_rag_triad_pipeline.py](../../../../sources/truera__trulens/tests/integration/test_rag_triad_pipeline.py)<br>[tests/e2e/test_embedding_feedback.py](../../../../sources/truera__trulens/tests/e2e/test_embedding_feedback.py) |
| spec | 8 | [tests/docs_notebooks/requirements.txt](../../../../sources/truera__trulens/tests/docs_notebooks/requirements.txt)<br>[src/dashboard/react_components/record_viewer_otel/test/snapshots.spec.ts](../../../../sources/truera__trulens/src/dashboard/react_components/record_viewer_otel/test/snapshots.spec.ts)<br>[src/core/trulens/core/utils/requirements.optional.txt](../../../../sources/truera__trulens/src/core/trulens/core/utils/requirements.optional.txt)<br>[src/core/trulens/core/utils/requirements.txt](../../../../sources/truera__trulens/src/core/trulens/core/utils/requirements.txt)<br>[examples/expositional/use_cases/snowflake-ai-stack-agentic-eval/requirements.txt](../../../../sources/truera__trulens/examples/expositional/use_cases/snowflake-ai-stack-agentic-eval/requirements.txt)<br>[examples/expositional/use_cases/snowflake-ai-stack/requirements.txt](../../../../sources/truera__trulens/examples/expositional/use_cases/snowflake-ai-stack/requirements.txt)<br>[docs/contributing/design.md](../../../../sources/truera__trulens/docs/contributing/design.md)<br>[docs/assets/images/TruLens_Architecture.png](../../../../sources/truera__trulens/docs/assets/images/TruLens_Architecture.png) |
| eval | 453 | [tests/__init__.py](../../../../sources/truera__trulens/tests/__init__.py)<br>[tests/_mods.py](../../../../sources/truera__trulens/tests/_mods.py)<br>[tests/.gitignore](../../../../sources/truera__trulens/tests/.gitignore)<br>[tests/api.ipynb](../../../../sources/truera__trulens/tests/api.ipynb)<br>[tests/README.md](../../../../sources/truera__trulens/tests/README.md)<br>[tests/test.py](../../../../sources/truera__trulens/tests/test.py)<br>[tests/utils.py](../../../../sources/truera__trulens/tests/utils.py)<br>[tests/util/df_comparison.py](../../../../sources/truera__trulens/tests/util/df_comparison.py) |
| security | 5 | [tests/unit/test_otel_guardrail_spans.py](../../../../sources/truera__trulens/tests/unit/test_otel_guardrail_spans.py)<br>[tests/unit/test_otel_guardrail.py](../../../../sources/truera__trulens/tests/unit/test_otel_guardrail.py)<br>[examples/expositional/use_cases/snowflake_auth_methods.ipynb](../../../../sources/truera__trulens/examples/expositional/use_cases/snowflake_auth_methods.ipynb)<br>[docs/component_guides/runtime_evaluation/guardrail_context_filtering.png](../../../../sources/truera__trulens/docs/component_guides/runtime_evaluation/guardrail_context_filtering.png)<br>[docs/component_guides/runtime_evaluation/simple_guardrail_flow.png](../../../../sources/truera__trulens/docs/component_guides/runtime_evaluation/simple_guardrail_flow.png) |
| ci | 0 | not obvious |
| container | 2 | [src/dashboard/react_components/record_viewer_otel/docker-compose.test.yml](../../../../sources/truera__trulens/src/dashboard/react_components/record_viewer_otel/docker-compose.test.yml)<br>[src/dashboard/react_components/record_viewer_otel/Dockerfile.test](../../../../sources/truera__trulens/src/dashboard/react_components/record_viewer_otel/Dockerfile.test) |
| instruction | 1 | [AGENTS.md](../../../../sources/truera__trulens/AGENTS.md) |
| docs | 189 | [mkdocs.yml](../../../../sources/truera__trulens/mkdocs.yml)<br>[README.md](../../../../sources/truera__trulens/README.md)<br>[tests/README.md](../../../../sources/truera__trulens/tests/README.md)<br>[tests/unit/streamlit/README.md](../../../../sources/truera__trulens/tests/unit/streamlit/README.md)<br>[src/trulens_eval/README.md](../../../../sources/truera__trulens/src/trulens_eval/README.md)<br>[src/providers/openai/README.md](../../../../sources/truera__trulens/src/providers/openai/README.md)<br>[src/providers/litellm/README.md](../../../../sources/truera__trulens/src/providers/litellm/README.md)<br>[src/providers/langchain/README.md](../../../../sources/truera__trulens/src/providers/langchain/README.md) |
| config | 37 | [Makefile](../../../../sources/truera__trulens/Makefile)<br>[poetry.lock](../../../../sources/truera__trulens/poetry.lock)<br>[pyproject.toml](../../../../sources/truera__trulens/pyproject.toml)<br>[tests/docs_notebooks/requirements.txt](../../../../sources/truera__trulens/tests/docs_notebooks/requirements.txt)<br>[src/trulens_eval/pyproject.toml](../../../../sources/truera__trulens/src/trulens_eval/pyproject.toml)<br>[src/providers/openai/pyproject.toml](../../../../sources/truera__trulens/src/providers/openai/pyproject.toml)<br>[src/providers/litellm/pyproject.toml](../../../../sources/truera__trulens/src/providers/litellm/pyproject.toml)<br>[src/providers/langchain/pyproject.toml](../../../../sources/truera__trulens/src/providers/langchain/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 453 | [tests/__init__.py](../../../../sources/truera__trulens/tests/__init__.py)<br>[tests/_mods.py](../../../../sources/truera__trulens/tests/_mods.py)<br>[tests/.gitignore](../../../../sources/truera__trulens/tests/.gitignore)<br>[tests/api.ipynb](../../../../sources/truera__trulens/tests/api.ipynb)<br>[tests/README.md](../../../../sources/truera__trulens/tests/README.md)<br>[tests/test.py](../../../../sources/truera__trulens/tests/test.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 2 | [src/dashboard/react_components/record_viewer_otel/docker-compose.test.yml](../../../../sources/truera__trulens/src/dashboard/react_components/record_viewer_otel/docker-compose.test.yml)<br>[src/dashboard/react_components/record_viewer_otel/Dockerfile.test](../../../../sources/truera__trulens/src/dashboard/react_components/record_viewer_otel/Dockerfile.test) |
| Security / policy | 5 | [tests/unit/test_otel_guardrail_spans.py](../../../../sources/truera__trulens/tests/unit/test_otel_guardrail_spans.py)<br>[tests/unit/test_otel_guardrail.py](../../../../sources/truera__trulens/tests/unit/test_otel_guardrail.py)<br>[examples/expositional/use_cases/snowflake_auth_methods.ipynb](../../../../sources/truera__trulens/examples/expositional/use_cases/snowflake_auth_methods.ipynb)<br>[docs/component_guides/runtime_evaluation/guardrail_context_filtering.png](../../../../sources/truera__trulens/docs/component_guides/runtime_evaluation/guardrail_context_filtering.png)<br>[docs/component_guides/runtime_evaluation/simple_guardrail_flow.png](../../../../sources/truera__trulens/docs/component_guides/runtime_evaluation/simple_guardrail_flow.png) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/truera__trulens/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `examples/experimental/langgraph_mcp.ipynb`, `docs/component_guides/instrumentation/mcp.md`, `AGENTS.md`.
2. Trace execution through entrypoints: `src/hotspots/trulens/hotspots/__main__.py`, `src/dashboard/trulens/dashboard/main.py`, `src/dashboard/react_components/record_viewer_otel/src/main.tsx`.
3. Map agent/tool runtime through: `AGENTS.md`, `tools/systemd/init_conda.sh`, `tools/systemd/trulens.service`.
4. Inspect retrieval/memory/indexing through: `tests/util/llama_index_mock_embedder.py`, `tests/unit/test_otel_rag_triad.py`, `tests/unit/test_otel_tru_graph.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/_mods.py`, `tests/.gitignore`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 1234 files, 318 directories.. 핵심 구조 신호는 pyproject.toml, Makefile, README.md, AGENTS.md, LICENSE, openai이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
