# griptape-ai/griptape Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Modular Python framework for AI agents and workflows with chain-of-thought reasoning, tools, and memory.

## 요약

- 조사 단위: `sources/griptape-ai__griptape` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,624 files, 325 directories, depth score 115, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/unit/tools/test_mcp_tool.py, griptape/tools/mcp/__init__.py, griptape/tools/mcp/requirements.txt이고, 의존성 단서는 openai, anthropic, pydantic, torch, transformers, ollama, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | griptape-ai/griptape |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 2541 |
| Forks | 237 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/griptape-ai__griptape](../../../../sources/griptape-ai__griptape) |
| Existing report | [reports/global-trending/repositories/griptape-ai__griptape.md](../../../global-trending/repositories/griptape-ai__griptape.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1624 / 325 |
| Max observed depth | 8 |
| Top directories | .github, docs, griptape, tests |
| Top extensions | .py: 1220, .txt: 212, .md: 90, .j2: 32, .yml: 15, .png: 9, (none): 8, .csv: 5, .css: 4, .jpg: 3, .map: 3, .svg: 3 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 130 |
| docs | documentation surface | 43 |
| .github | ci surface | 1 |
| griptape | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | install | make install |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | test | make test |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | lint | make lint |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | format | make format |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | check | make check |
| utility | Makefile | .PHONY | make .PHONY |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | qdrant, pgvector |
| modelRuntime | torch, transformers, ollama, llama |
| webRuntime | none |
| developerSurface | none |
| observability | opentelemetry |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [tests/unit/tools/test_mcp_tool.py](../../../../sources/griptape-ai__griptape/tests/unit/tools/test_mcp_tool.py) | mcp signal |
| mcp | [griptape/tools/mcp/__init__.py](../../../../sources/griptape-ai__griptape/griptape/tools/mcp/__init__.py) | mcp signal |
| mcp | [griptape/tools/mcp/requirements.txt](../../../../sources/griptape-ai__griptape/griptape/tools/mcp/requirements.txt) | mcp signal |
| mcp | [griptape/tools/mcp/sessions.py](../../../../sources/griptape-ai__griptape/griptape/tools/mcp/sessions.py) | mcp signal |
| agentRuntime | [tests/unit/tools/__init__.py](../../../../sources/griptape-ai__griptape/tests/unit/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [tests/unit/tools/test_base_tool.py](../../../../sources/griptape-ai__griptape/tests/unit/tools/test_base_tool.py) | agentRuntime signal |
| agentRuntime | [tests/unit/tools/test_calculator.py](../../../../sources/griptape-ai__griptape/tests/unit/tools/test_calculator.py) | agentRuntime signal |
| agentRuntime | [tests/unit/tools/test_computer.py](../../../../sources/griptape-ai__griptape/tests/unit/tools/test_computer.py) | agentRuntime signal |
| instruction | [docs/griptape-framework/structures/agents.md](../../../../sources/griptape-ai__griptape/docs/griptape-framework/structures/agents.md) | instruction signal |
| config | [Makefile](../../../../sources/griptape-ai__griptape/Makefile) | config signal |
| config | [pyproject.toml](../../../../sources/griptape-ai__griptape/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/griptape-ai__griptape/uv.lock) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 235 | [tests/unit/tools/__init__.py](../../../../sources/griptape-ai__griptape/tests/unit/tools/__init__.py)<br>[tests/unit/tools/test_base_tool.py](../../../../sources/griptape-ai__griptape/tests/unit/tools/test_base_tool.py)<br>[tests/unit/tools/test_calculator.py](../../../../sources/griptape-ai__griptape/tests/unit/tools/test_calculator.py)<br>[tests/unit/tools/test_computer.py](../../../../sources/griptape-ai__griptape/tests/unit/tools/test_computer.py)<br>[tests/unit/tools/test_date_time.py](../../../../sources/griptape-ai__griptape/tests/unit/tools/test_date_time.py)<br>[tests/unit/tools/test_email_tool.py](../../../../sources/griptape-ai__griptape/tests/unit/tools/test_email_tool.py)<br>[tests/unit/tools/test_extraction_tool.py](../../../../sources/griptape-ai__griptape/tests/unit/tools/test_extraction_tool.py)<br>[tests/unit/tools/test_file_manager.py](../../../../sources/griptape-ai__griptape/tests/unit/tools/test_file_manager.py) |
| mcp | 7 | [tests/unit/tools/test_mcp_tool.py](../../../../sources/griptape-ai__griptape/tests/unit/tools/test_mcp_tool.py)<br>[griptape/tools/mcp/__init__.py](../../../../sources/griptape-ai__griptape/griptape/tools/mcp/__init__.py)<br>[griptape/tools/mcp/requirements.txt](../../../../sources/griptape-ai__griptape/griptape/tools/mcp/requirements.txt)<br>[griptape/tools/mcp/sessions.py](../../../../sources/griptape-ai__griptape/griptape/tools/mcp/sessions.py)<br>[griptape/tools/mcp/tool.py](../../../../sources/griptape-ai__griptape/griptape/tools/mcp/tool.py)<br>[docs/griptape-framework/tools/official-tools/src/mcp_tool_1.py](../../../../sources/griptape-ai__griptape/docs/griptape-framework/tools/official-tools/src/mcp_tool_1.py)<br>[docs/griptape-framework/tools/official-tools/logs/mcp_tool_1.txt](../../../../sources/griptape-ai__griptape/docs/griptape-framework/tools/official-tools/logs/mcp_tool_1.txt) |
| retrieval | 355 | [tests/unit/utils/test_load_artifact_from_memory.py](../../../../sources/griptape-ai__griptape/tests/unit/utils/test_load_artifact_from_memory.py)<br>[tests/unit/tools/test_rag_tool.py](../../../../sources/griptape-ai__griptape/tests/unit/tools/test_rag_tool.py)<br>[tests/unit/tools/test_vector_store_tool.py](../../../../sources/griptape-ai__griptape/tests/unit/tools/test_vector_store_tool.py)<br>[tests/unit/tasks/test_rag_task.py](../../../../sources/griptape-ai__griptape/tests/unit/tasks/test_rag_task.py)<br>[tests/unit/memory/__init__.py](../../../../sources/griptape-ai__griptape/tests/unit/memory/__init__.py)<br>[tests/unit/memory/tool/__init__.py](../../../../sources/griptape-ai__griptape/tests/unit/memory/tool/__init__.py)<br>[tests/unit/memory/tool/test_task_memory.py](../../../../sources/griptape-ai__griptape/tests/unit/memory/tool/test_task_memory.py)<br>[tests/unit/memory/tool/storage/__init__.py](../../../../sources/griptape-ai__griptape/tests/unit/memory/tool/storage/__init__.py) |
| spec | 18 | [tests/mocks/mock_tool_kwargs/requirements.txt](../../../../sources/griptape-ai__griptape/tests/mocks/mock_tool_kwargs/requirements.txt)<br>[tests/mocks/mock_tool/requirements.txt](../../../../sources/griptape-ai__griptape/tests/mocks/mock_tool/requirements.txt)<br>[tests/mocks/invalid_mock_tool/requirements.txt](../../../../sources/griptape-ai__griptape/tests/mocks/invalid_mock_tool/requirements.txt)<br>[griptape/tools/vector_store/requirements.txt](../../../../sources/griptape-ai__griptape/griptape/tools/vector_store/requirements.txt)<br>[griptape/tools/variation_image_generation/requirements.txt](../../../../sources/griptape-ai__griptape/griptape/tools/variation_image_generation/requirements.txt)<br>[griptape/tools/rag/requirements.txt](../../../../sources/griptape-ai__griptape/griptape/tools/rag/requirements.txt)<br>[griptape/tools/query/requirements.txt](../../../../sources/griptape-ai__griptape/griptape/tools/query/requirements.txt)<br>[griptape/tools/prompt_summary/requirements.txt](../../../../sources/griptape-ai__griptape/griptape/tools/prompt_summary/requirements.txt) |
| eval | 469 | [tests/__init__.py](../../../../sources/griptape-ai__griptape/tests/__init__.py)<br>[tests/utils/__init__.py](../../../../sources/griptape-ai__griptape/tests/utils/__init__.py)<br>[tests/utils/aws.py](../../../../sources/griptape-ai__griptape/tests/utils/aws.py)<br>[tests/utils/defaults.py](../../../../sources/griptape-ai__griptape/tests/utils/defaults.py)<br>[tests/utils/expected_spans.py](../../../../sources/griptape-ai__griptape/tests/utils/expected_spans.py)<br>[tests/utils/postgres.py](../../../../sources/griptape-ai__griptape/tests/utils/postgres.py)<br>[tests/utils/structure_tester.py](../../../../sources/griptape-ai__griptape/tests/utils/structure_tester.py)<br>[tests/utils/test_reference_utils.py](../../../../sources/griptape-ai__griptape/tests/utils/test_reference_utils.py) |
| security | 0 | not obvious |
| ci | 6 | [.github/workflows/code-checks.yml](../../../../sources/griptape-ai__griptape/.github/workflows/code-checks.yml)<br>[.github/workflows/create-stable-release.yml](../../../../sources/griptape-ai__griptape/.github/workflows/create-stable-release.yml)<br>[.github/workflows/docs-integration-tests.yml](../../../../sources/griptape-ai__griptape/.github/workflows/docs-integration-tests.yml)<br>[.github/workflows/publish.yml](../../../../sources/griptape-ai__griptape/.github/workflows/publish.yml)<br>[.github/workflows/pull-request-links.yml](../../../../sources/griptape-ai__griptape/.github/workflows/pull-request-links.yml)<br>[.github/workflows/unit-tests.yml](../../../../sources/griptape-ai__griptape/.github/workflows/unit-tests.yml) |
| container | 3 | [tests/mocks/mock_tool/Dockerfile](../../../../sources/griptape-ai__griptape/tests/mocks/mock_tool/Dockerfile)<br>[tests/mocks/invalid_mock_tool/Dockerfile](../../../../sources/griptape-ai__griptape/tests/mocks/invalid_mock_tool/Dockerfile)<br>[griptape/tools/computer/resources/Dockerfile](../../../../sources/griptape-ai__griptape/griptape/tools/computer/resources/Dockerfile) |
| instruction | 1 | [docs/griptape-framework/structures/agents.md](../../../../sources/griptape-ai__griptape/docs/griptape-framework/structures/agents.md) |
| docs | 577 | [mkdocs.yml](../../../../sources/griptape-ai__griptape/mkdocs.yml)<br>[README.md](../../../../sources/griptape-ai__griptape/README.md)<br>[docs/contributing.md](../../../../sources/griptape-ai__griptape/docs/contributing.md)<br>[docs/gen_ref_pages.py](../../../../sources/griptape-ai__griptape/docs/gen_ref_pages.py)<br>[docs/index.md](../../../../sources/griptape-ai__griptape/docs/index.md)<br>[docs/recipes/amazon-dynamodb-sessions.md](../../../../sources/griptape-ai__griptape/docs/recipes/amazon-dynamodb-sessions.md)<br>[docs/recipes/load-and-query-pinecone.md](../../../../sources/griptape-ai__griptape/docs/recipes/load-and-query-pinecone.md)<br>[docs/recipes/load-query-and-chat-marqo.md](../../../../sources/griptape-ai__griptape/docs/recipes/load-query-and-chat-marqo.md) |
| config | 20 | [Makefile](../../../../sources/griptape-ai__griptape/Makefile)<br>[pyproject.toml](../../../../sources/griptape-ai__griptape/pyproject.toml)<br>[uv.lock](../../../../sources/griptape-ai__griptape/uv.lock)<br>[tests/mocks/mock_tool_kwargs/requirements.txt](../../../../sources/griptape-ai__griptape/tests/mocks/mock_tool_kwargs/requirements.txt)<br>[tests/mocks/mock_tool/requirements.txt](../../../../sources/griptape-ai__griptape/tests/mocks/mock_tool/requirements.txt)<br>[tests/mocks/invalid_mock_tool/requirements.txt](../../../../sources/griptape-ai__griptape/tests/mocks/invalid_mock_tool/requirements.txt)<br>[griptape/tools/vector_store/requirements.txt](../../../../sources/griptape-ai__griptape/griptape/tools/vector_store/requirements.txt)<br>[griptape/tools/variation_image_generation/requirements.txt](../../../../sources/griptape-ai__griptape/griptape/tools/variation_image_generation/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 469 | [tests/__init__.py](../../../../sources/griptape-ai__griptape/tests/__init__.py)<br>[tests/utils/__init__.py](../../../../sources/griptape-ai__griptape/tests/utils/__init__.py)<br>[tests/utils/aws.py](../../../../sources/griptape-ai__griptape/tests/utils/aws.py)<br>[tests/utils/defaults.py](../../../../sources/griptape-ai__griptape/tests/utils/defaults.py)<br>[tests/utils/expected_spans.py](../../../../sources/griptape-ai__griptape/tests/utils/expected_spans.py)<br>[tests/utils/postgres.py](../../../../sources/griptape-ai__griptape/tests/utils/postgres.py) |
| CI workflows | 6 | [.github/workflows/code-checks.yml](../../../../sources/griptape-ai__griptape/.github/workflows/code-checks.yml)<br>[.github/workflows/create-stable-release.yml](../../../../sources/griptape-ai__griptape/.github/workflows/create-stable-release.yml)<br>[.github/workflows/docs-integration-tests.yml](../../../../sources/griptape-ai__griptape/.github/workflows/docs-integration-tests.yml)<br>[.github/workflows/publish.yml](../../../../sources/griptape-ai__griptape/.github/workflows/publish.yml)<br>[.github/workflows/pull-request-links.yml](../../../../sources/griptape-ai__griptape/.github/workflows/pull-request-links.yml)<br>[.github/workflows/unit-tests.yml](../../../../sources/griptape-ai__griptape/.github/workflows/unit-tests.yml) |
| Containers / deploy | 3 | [tests/mocks/mock_tool/Dockerfile](../../../../sources/griptape-ai__griptape/tests/mocks/mock_tool/Dockerfile)<br>[tests/mocks/invalid_mock_tool/Dockerfile](../../../../sources/griptape-ai__griptape/tests/mocks/invalid_mock_tool/Dockerfile)<br>[griptape/tools/computer/resources/Dockerfile](../../../../sources/griptape-ai__griptape/griptape/tools/computer/resources/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [docs/griptape-framework/structures/agents.md](../../../../sources/griptape-ai__griptape/docs/griptape-framework/structures/agents.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/unit/tools/test_mcp_tool.py`, `griptape/tools/mcp/__init__.py`, `griptape/tools/mcp/requirements.txt`.
2. Map agent/tool runtime through: `tests/unit/tools/__init__.py`, `tests/unit/tools/test_base_tool.py`, `tests/unit/tools/test_calculator.py`.
3. Inspect retrieval/memory/indexing through: `tests/unit/utils/test_load_artifact_from_memory.py`, `tests/unit/tools/test_rag_tool.py`, `tests/unit/tools/test_vector_store_tool.py`.
4. Verify behavior through test/eval files: `tests/__init__.py`, `tests/utils/__init__.py`, `tests/utils/aws.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Modular Python framework for AI agents and workflows with chain of thought reasoning, tools, and memory.. 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, LICENSE, openai이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
