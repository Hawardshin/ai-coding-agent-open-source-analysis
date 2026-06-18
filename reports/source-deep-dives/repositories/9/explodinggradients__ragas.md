# explodinggradients/ragas Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 694 files, 119 directories.

## 요약

- 조사 단위: `sources/explodinggradients__ragas` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 694 files, 119 directories, depth score 125, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=src/ragas/executor.py, src/ragas/prompt/metrics/context_entity_recall.py, src/ragas/prompt/metrics/context_recall.py이고, 의존성 단서는 openai, langchain, pydantic, typer, transformers, llama, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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


## Repository Context

| Field | Value |
| --- | --- |
| Repository | explodinggradients/ragas |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/explodinggradients__ragas](../../../../sources/explodinggradients__ragas) |
| Existing report | [reports/clone-structures/explodinggradients__ragas.md](../../../clone-structures/explodinggradients__ragas.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 694 / 119 |
| Max observed depth | 6 |
| Top directories | .claude, .cursor, .github, docs, examples, scripts, src, tests |
| Top extensions | .py: 387, .md: 163, .png: 41, .ipynb: 23, .css: 9, .yml: 9, (none): 9, .json: 7, .csv: 6, .txt: 6, .js: 5, .mdc: 5 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 72 |
| tests | validation surface | 47 |
| src | source boundary | 30 |
| examples/ragas_examples | examples workspace | 18 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| examples/pyproject.toml | examples workspace | 1 |
| examples/README.md | examples workspace | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | help | make help |
| utility | Makefile | setup-venv | make setup-venv |
| utility | Makefile | install-minimal | make install-minimal |
| utility | Makefile | install | make install |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | format | make format |
| quality | Makefile | type | make type |
| quality | Makefile | check | make check |
| utility | Makefile | benchmarks | make benchmarks |
| container | Makefile | benchmarks-docker | make benchmarks-docker |
| test | Makefile | benchmarks-test | make benchmarks-test |
| utility | Makefile | run-ci | make run-ci |
| quality | Makefile | run-ci-format-check | make run-ci-format-check |
| quality | Makefile | run-ci-type | make run-ci-type |
| test | Makefile | run-ci-tests | make run-ci-tests |
| utility | Makefile | run-ci-fast | make run-ci-fast |
| utility | Makefile | clean | make clean |
| test | Makefile | test | make test |
| test | Makefile | test-all | make test-all |
| test | Makefile | test-e2e | make test-e2e |
| utility | pyproject.toml | ragas | ragas |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | none |
| agentFrameworks | langchain |
| vectorStores | none |
| modelRuntime | transformers, llama |
| webRuntime | none |
| developerSurface | typer |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [src/ragas/executor.py](../../../../sources/explodinggradients__ragas/src/ragas/executor.py) | agentRuntime signal |
| agentRuntime | [src/ragas/prompt/metrics/context_entity_recall.py](../../../../sources/explodinggradients__ragas/src/ragas/prompt/metrics/context_entity_recall.py) | agentRuntime signal |
| agentRuntime | [src/ragas/prompt/metrics/context_recall.py](../../../../sources/explodinggradients__ragas/src/ragas/prompt/metrics/context_recall.py) | agentRuntime signal |
| agentRuntime | [src/ragas/prompt/metrics/context_relevance.py](../../../../sources/explodinggradients__ragas/src/ragas/prompt/metrics/context_relevance.py) | agentRuntime signal |
| instruction | [CLAUDE.md](../../../../sources/explodinggradients__ragas/CLAUDE.md) | instruction signal |
| instruction | [docs/howtos/integrations/gemini.md](../../../../sources/explodinggradients__ragas/docs/howtos/integrations/gemini.md) | instruction signal |
| instruction | [docs/concepts/test_data_generation/agents.md](../../../../sources/explodinggradients__ragas/docs/concepts/test_data_generation/agents.md) | instruction signal |
| instruction | [docs/concepts/metrics/available_metrics/agents.md](../../../../sources/explodinggradients__ragas/docs/concepts/metrics/available_metrics/agents.md) | instruction signal |
| config | [Makefile](../../../../sources/explodinggradients__ragas/Makefile) | config signal |
| config | [pyproject.toml](../../../../sources/explodinggradients__ragas/pyproject.toml) | config signal |
| config | [examples/pyproject.toml](../../../../sources/explodinggradients__ragas/examples/pyproject.toml) | config signal |
| config | [examples/ragas_examples/rag_eval/pyproject.toml](../../../../sources/explodinggradients__ragas/examples/ragas_examples/rag_eval/pyproject.toml) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 41 | [src/ragas/executor.py](../../../../sources/explodinggradients__ragas/src/ragas/executor.py)<br>[src/ragas/prompt/metrics/context_entity_recall.py](../../../../sources/explodinggradients__ragas/src/ragas/prompt/metrics/context_entity_recall.py)<br>[src/ragas/prompt/metrics/context_recall.py](../../../../sources/explodinggradients__ragas/src/ragas/prompt/metrics/context_recall.py)<br>[src/ragas/prompt/metrics/context_relevance.py](../../../../sources/explodinggradients__ragas/src/ragas/prompt/metrics/context_relevance.py)<br>[src/ragas/metrics/collections/tool_call_f1/__init__.py](../../../../sources/explodinggradients__ragas/src/ragas/metrics/collections/tool_call_f1/__init__.py)<br>[src/ragas/metrics/collections/tool_call_f1/metric.py](../../../../sources/explodinggradients__ragas/src/ragas/metrics/collections/tool_call_f1/metric.py)<br>[src/ragas/metrics/collections/tool_call_f1/util.py](../../../../sources/explodinggradients__ragas/src/ragas/metrics/collections/tool_call_f1/util.py)<br>[src/ragas/metrics/collections/tool_call_accuracy/__init__.py](../../../../sources/explodinggradients__ragas/src/ragas/metrics/collections/tool_call_accuracy/__init__.py) |
| mcp | 0 | not obvious |
| retrieval | 48 | [tests/unit/test_graph.py](../../../../sources/explodinggradients__ragas/tests/unit/test_graph.py)<br>[tests/unit/test_knowledge_graph_clusters.py](../../../../sources/explodinggradients__ragas/tests/unit/test_knowledge_graph_clusters.py)<br>[tests/unit/test_knowledge_graph_save.py](../../../../sources/explodinggradients__ragas/tests/unit/test_knowledge_graph_save.py)<br>[src/ragas/testset/graph_queries.py](../../../../sources/explodinggradients__ragas/src/ragas/testset/graph_queries.py)<br>[src/ragas/testset/graph.py](../../../../sources/explodinggradients__ragas/src/ragas/testset/graph.py)<br>[src/ragas/integrations/llama_index.py](../../../../sources/explodinggradients__ragas/src/ragas/integrations/llama_index.py)<br>[examples/ragas_examples/rag_eval/__init__.py](../../../../sources/explodinggradients__ragas/examples/ragas_examples/rag_eval/__init__.py)<br>[examples/ragas_examples/rag_eval/evals.py](../../../../sources/explodinggradients__ragas/examples/ragas_examples/rag_eval/evals.py) |
| spec | 1 | [docs/_static/architecture.png](../../../../sources/explodinggradients__ragas/docs/_static/architecture.png) |
| eval | 186 | [tests/__init__.py](../../../../sources/explodinggradients__ragas/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/explodinggradients__ragas/tests/conftest.py)<br>[tests/test_quoted_spans.py](../../../../sources/explodinggradients__ragas/tests/test_quoted_spans.py)<br>[tests/utils/__init__.py](../../../../sources/explodinggradients__ragas/tests/utils/__init__.py)<br>[tests/utils/llm_setup.py](../../../../sources/explodinggradients__ragas/tests/utils/llm_setup.py)<br>[tests/utils/metric_comparison.py](../../../../sources/explodinggradients__ragas/tests/utils/metric_comparison.py)<br>[tests/unit/test_analytics.py](../../../../sources/explodinggradients__ragas/tests/unit/test_analytics.py)<br>[tests/unit/test_async_evaluation.py](../../../../sources/explodinggradients__ragas/tests/unit/test_async_evaluation.py) |
| security | 1 | [SECURITY.md](../../../../sources/explodinggradients__ragas/SECURITY.md) |
| ci | 8 | [.github/workflows/ci.yaml](../../../../sources/explodinggradients__ragas/.github/workflows/ci.yaml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/explodinggradients__ragas/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude-docs-apply.yml](../../../../sources/explodinggradients__ragas/.github/workflows/claude-docs-apply.yml)<br>[.github/workflows/claude-docs-check.yml](../../../../sources/explodinggradients__ragas/.github/workflows/claude-docs-check.yml)<br>[.github/workflows/claude.yml](../../../../sources/explodinggradients__ragas/.github/workflows/claude.yml)<br>[.github/workflows/issue-manager.yaml](../../../../sources/explodinggradients__ragas/.github/workflows/issue-manager.yaml)<br>[.github/workflows/publish-examples.yml](../../../../sources/explodinggradients__ragas/.github/workflows/publish-examples.yml)<br>[.github/workflows/python-publish.yml](../../../../sources/explodinggradients__ragas/.github/workflows/python-publish.yml) |
| container | 1 | [tests/benchmarks/Dockerfile](../../../../sources/explodinggradients__ragas/tests/benchmarks/Dockerfile) |
| instruction | 9 | [CLAUDE.md](../../../../sources/explodinggradients__ragas/CLAUDE.md)<br>[docs/howtos/integrations/gemini.md](../../../../sources/explodinggradients__ragas/docs/howtos/integrations/gemini.md)<br>[docs/concepts/test_data_generation/agents.md](../../../../sources/explodinggradients__ragas/docs/concepts/test_data_generation/agents.md)<br>[docs/concepts/metrics/available_metrics/agents.md](../../../../sources/explodinggradients__ragas/docs/concepts/metrics/available_metrics/agents.md)<br>[.cursor/rules/docs-diataxis-guidelines.mdc](../../../../sources/explodinggradients__ragas/.cursor/rules/docs-diataxis-guidelines.mdc)<br>[.cursor/rules/docs-structure.mdc](../../../../sources/explodinggradients__ragas/.cursor/rules/docs-structure.mdc)<br>[.cursor/rules/project-structure.mdc](../../../../sources/explodinggradients__ragas/.cursor/rules/project-structure.mdc)<br>[.cursor/rules/update-guide.mdc](../../../../sources/explodinggradients__ragas/.cursor/rules/update-guide.mdc) |
| docs | 251 | [mkdocs-pdf.yml](../../../../sources/explodinggradients__ragas/mkdocs-pdf.yml)<br>[mkdocs.yml](../../../../sources/explodinggradients__ragas/mkdocs.yml)<br>[README.md](../../../../sources/explodinggradients__ragas/README.md)<br>[tests/docs/__init__.py](../../../../sources/explodinggradients__ragas/tests/docs/__init__.py)<br>[tests/docs/test_run_config.py](../../../../sources/explodinggradients__ragas/tests/docs/test_run_config.py)<br>[src/ragas/backends/README.md](../../../../sources/explodinggradients__ragas/src/ragas/backends/README.md)<br>[examples/README.md](../../../../sources/explodinggradients__ragas/examples/README.md)<br>[examples/ragas_examples/ag_ui_agent_experiments/README.md](../../../../sources/explodinggradients__ragas/examples/ragas_examples/ag_ui_agent_experiments/README.md) |
| config | 6 | [Makefile](../../../../sources/explodinggradients__ragas/Makefile)<br>[pyproject.toml](../../../../sources/explodinggradients__ragas/pyproject.toml)<br>[examples/pyproject.toml](../../../../sources/explodinggradients__ragas/examples/pyproject.toml)<br>[examples/ragas_examples/rag_eval/pyproject.toml](../../../../sources/explodinggradients__ragas/examples/ragas_examples/rag_eval/pyproject.toml)<br>[examples/ragas_examples/improve_rag/pyproject.toml](../../../../sources/explodinggradients__ragas/examples/ragas_examples/improve_rag/pyproject.toml)<br>[docs/Makefile](../../../../sources/explodinggradients__ragas/docs/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 186 | [tests/__init__.py](../../../../sources/explodinggradients__ragas/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/explodinggradients__ragas/tests/conftest.py)<br>[tests/test_quoted_spans.py](../../../../sources/explodinggradients__ragas/tests/test_quoted_spans.py)<br>[tests/utils/__init__.py](../../../../sources/explodinggradients__ragas/tests/utils/__init__.py)<br>[tests/utils/llm_setup.py](../../../../sources/explodinggradients__ragas/tests/utils/llm_setup.py)<br>[tests/utils/metric_comparison.py](../../../../sources/explodinggradients__ragas/tests/utils/metric_comparison.py) |
| CI workflows | 8 | [.github/workflows/ci.yaml](../../../../sources/explodinggradients__ragas/.github/workflows/ci.yaml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/explodinggradients__ragas/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude-docs-apply.yml](../../../../sources/explodinggradients__ragas/.github/workflows/claude-docs-apply.yml)<br>[.github/workflows/claude-docs-check.yml](../../../../sources/explodinggradients__ragas/.github/workflows/claude-docs-check.yml)<br>[.github/workflows/claude.yml](../../../../sources/explodinggradients__ragas/.github/workflows/claude.yml)<br>[.github/workflows/issue-manager.yaml](../../../../sources/explodinggradients__ragas/.github/workflows/issue-manager.yaml) |
| Containers / deploy | 1 | [tests/benchmarks/Dockerfile](../../../../sources/explodinggradients__ragas/tests/benchmarks/Dockerfile) |
| Security / policy | 1 | [SECURITY.md](../../../../sources/explodinggradients__ragas/SECURITY.md) |
| Agent instructions | 9 | [CLAUDE.md](../../../../sources/explodinggradients__ragas/CLAUDE.md)<br>[docs/howtos/integrations/gemini.md](../../../../sources/explodinggradients__ragas/docs/howtos/integrations/gemini.md)<br>[docs/concepts/test_data_generation/agents.md](../../../../sources/explodinggradients__ragas/docs/concepts/test_data_generation/agents.md)<br>[docs/concepts/metrics/available_metrics/agents.md](../../../../sources/explodinggradients__ragas/docs/concepts/metrics/available_metrics/agents.md)<br>[.cursor/rules/docs-diataxis-guidelines.mdc](../../../../sources/explodinggradients__ragas/.cursor/rules/docs-diataxis-guidelines.mdc)<br>[.cursor/rules/docs-structure.mdc](../../../../sources/explodinggradients__ragas/.cursor/rules/docs-structure.mdc) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/ragas/executor.py`, `src/ragas/prompt/metrics/context_entity_recall.py`, `src/ragas/prompt/metrics/context_recall.py`.
2. Map agent/tool runtime through: `src/ragas/executor.py`, `src/ragas/prompt/metrics/context_entity_recall.py`, `src/ragas/prompt/metrics/context_recall.py`.
3. Inspect retrieval/memory/indexing through: `tests/unit/test_graph.py`, `tests/unit/test_knowledge_graph_clusters.py`, `tests/unit/test_knowledge_graph_save.py`.
4. Verify behavior through test/eval files: `tests/__init__.py`, `tests/conftest.py`, `tests/test_quoted_spans.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 694 files, 119 directories.. 핵심 구조 신호는 pyproject.toml, Makefile, README.md, CLAUDE.md, LICENSE, openai이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
