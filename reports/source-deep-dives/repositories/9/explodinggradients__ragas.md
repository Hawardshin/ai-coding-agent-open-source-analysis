# explodinggradients/ragas 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Local clone structure analysis: 694 files, 119 directories.

## 요약

- 조사 단위: `sources/explodinggradients__ragas` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 694 files, 119 directories, depth score 113, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=src/ragas/executor.py, src/ragas/prompt/metrics/context_entity_recall.py, src/ragas/prompt/metrics/context_recall.py이고, 의존성 단서는 openai, langchain, pydantic, typer, transformers, llama, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | explodinggradients/ragas |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/explodinggradients__ragas](../../../../sources/explodinggradients__ragas) |
| 기존 보고서 | [reports/clone-structures/explodinggradients__ragas.md](../../../clone-structures/explodinggradients__ragas.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 694 / 119 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .claude, .cursor, .github, docs, examples, scripts, src, tests |
| 상위 확장자 | .py: 387, .md: 163, .png: 41, .ipynb: 23, .css: 9, .yml: 9, (none): 9, .json: 7, .csv: 6, .txt: 6, .js: 5, .mdc: 5 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | 없음 |
| agentFrameworks | langchain |
| vectorStores | 없음 |
| modelRuntime | transformers, llama |
| webRuntime | 없음 |
| developerSurface | typer |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 41 | [src/ragas/executor.py](../../../../sources/explodinggradients__ragas/src/ragas/executor.py)<br>[src/ragas/prompt/metrics/context_entity_recall.py](../../../../sources/explodinggradients__ragas/src/ragas/prompt/metrics/context_entity_recall.py)<br>[src/ragas/prompt/metrics/context_recall.py](../../../../sources/explodinggradients__ragas/src/ragas/prompt/metrics/context_recall.py)<br>[src/ragas/prompt/metrics/context_relevance.py](../../../../sources/explodinggradients__ragas/src/ragas/prompt/metrics/context_relevance.py)<br>[src/ragas/metrics/collections/tool_call_f1/__init__.py](../../../../sources/explodinggradients__ragas/src/ragas/metrics/collections/tool_call_f1/__init__.py)<br>[src/ragas/metrics/collections/tool_call_f1/metric.py](../../../../sources/explodinggradients__ragas/src/ragas/metrics/collections/tool_call_f1/metric.py)<br>[src/ragas/metrics/collections/tool_call_f1/util.py](../../../../sources/explodinggradients__ragas/src/ragas/metrics/collections/tool_call_f1/util.py)<br>[src/ragas/metrics/collections/tool_call_accuracy/__init__.py](../../../../sources/explodinggradients__ragas/src/ragas/metrics/collections/tool_call_accuracy/__init__.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 48 | [tests/unit/test_graph.py](../../../../sources/explodinggradients__ragas/tests/unit/test_graph.py)<br>[tests/unit/test_knowledge_graph_clusters.py](../../../../sources/explodinggradients__ragas/tests/unit/test_knowledge_graph_clusters.py)<br>[tests/unit/test_knowledge_graph_save.py](../../../../sources/explodinggradients__ragas/tests/unit/test_knowledge_graph_save.py)<br>[src/ragas/testset/graph_queries.py](../../../../sources/explodinggradients__ragas/src/ragas/testset/graph_queries.py)<br>[src/ragas/testset/graph.py](../../../../sources/explodinggradients__ragas/src/ragas/testset/graph.py)<br>[src/ragas/integrations/llama_index.py](../../../../sources/explodinggradients__ragas/src/ragas/integrations/llama_index.py)<br>[examples/ragas_examples/rag_eval/__init__.py](../../../../sources/explodinggradients__ragas/examples/ragas_examples/rag_eval/__init__.py)<br>[examples/ragas_examples/rag_eval/evals.py](../../../../sources/explodinggradients__ragas/examples/ragas_examples/rag_eval/evals.py) |
| spec | 1 | [docs/_static/architecture.png](../../../../sources/explodinggradients__ragas/docs/_static/architecture.png) |
| eval | 186 | [tests/__init__.py](../../../../sources/explodinggradients__ragas/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/explodinggradients__ragas/tests/conftest.py)<br>[tests/test_quoted_spans.py](../../../../sources/explodinggradients__ragas/tests/test_quoted_spans.py)<br>[tests/utils/__init__.py](../../../../sources/explodinggradients__ragas/tests/utils/__init__.py)<br>[tests/utils/llm_setup.py](../../../../sources/explodinggradients__ragas/tests/utils/llm_setup.py)<br>[tests/utils/metric_comparison.py](../../../../sources/explodinggradients__ragas/tests/utils/metric_comparison.py)<br>[tests/unit/test_analytics.py](../../../../sources/explodinggradients__ragas/tests/unit/test_analytics.py)<br>[tests/unit/test_async_evaluation.py](../../../../sources/explodinggradients__ragas/tests/unit/test_async_evaluation.py) |
| security | 1 | [SECURITY.md](../../../../sources/explodinggradients__ragas/SECURITY.md) |
| ci | 8 | [.github/workflows/ci.yaml](../../../../sources/explodinggradients__ragas/.github/workflows/ci.yaml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/explodinggradients__ragas/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude-docs-apply.yml](../../../../sources/explodinggradients__ragas/.github/workflows/claude-docs-apply.yml)<br>[.github/workflows/claude-docs-check.yml](../../../../sources/explodinggradients__ragas/.github/workflows/claude-docs-check.yml)<br>[.github/workflows/claude.yml](../../../../sources/explodinggradients__ragas/.github/workflows/claude.yml)<br>[.github/workflows/issue-manager.yaml](../../../../sources/explodinggradients__ragas/.github/workflows/issue-manager.yaml)<br>[.github/workflows/publish-examples.yml](../../../../sources/explodinggradients__ragas/.github/workflows/publish-examples.yml)<br>[.github/workflows/python-publish.yml](../../../../sources/explodinggradients__ragas/.github/workflows/python-publish.yml) |
| container | 1 | [tests/benchmarks/Dockerfile](../../../../sources/explodinggradients__ragas/tests/benchmarks/Dockerfile) |
| instruction | 9 | [CLAUDE.md](../../../../sources/explodinggradients__ragas/CLAUDE.md)<br>[docs/howtos/integrations/gemini.md](../../../../sources/explodinggradients__ragas/docs/howtos/integrations/gemini.md)<br>[docs/concepts/test_data_generation/agents.md](../../../../sources/explodinggradients__ragas/docs/concepts/test_data_generation/agents.md)<br>[docs/concepts/metrics/available_metrics/agents.md](../../../../sources/explodinggradients__ragas/docs/concepts/metrics/available_metrics/agents.md)<br>[.cursor/rules/docs-diataxis-guidelines.mdc](../../../../sources/explodinggradients__ragas/.cursor/rules/docs-diataxis-guidelines.mdc)<br>[.cursor/rules/docs-structure.mdc](../../../../sources/explodinggradients__ragas/.cursor/rules/docs-structure.mdc)<br>[.cursor/rules/project-structure.mdc](../../../../sources/explodinggradients__ragas/.cursor/rules/project-structure.mdc)<br>[.cursor/rules/update-guide.mdc](../../../../sources/explodinggradients__ragas/.cursor/rules/update-guide.mdc) |
| docs | 251 | [mkdocs-pdf.yml](../../../../sources/explodinggradients__ragas/mkdocs-pdf.yml)<br>[mkdocs.yml](../../../../sources/explodinggradients__ragas/mkdocs.yml)<br>[README.md](../../../../sources/explodinggradients__ragas/README.md)<br>[tests/docs/__init__.py](../../../../sources/explodinggradients__ragas/tests/docs/__init__.py)<br>[tests/docs/test_run_config.py](../../../../sources/explodinggradients__ragas/tests/docs/test_run_config.py)<br>[src/ragas/backends/README.md](../../../../sources/explodinggradients__ragas/src/ragas/backends/README.md)<br>[examples/README.md](../../../../sources/explodinggradients__ragas/examples/README.md)<br>[examples/ragas_examples/ag_ui_agent_experiments/README.md](../../../../sources/explodinggradients__ragas/examples/ragas_examples/ag_ui_agent_experiments/README.md) |
| config | 6 | [Makefile](../../../../sources/explodinggradients__ragas/Makefile)<br>[pyproject.toml](../../../../sources/explodinggradients__ragas/pyproject.toml)<br>[examples/pyproject.toml](../../../../sources/explodinggradients__ragas/examples/pyproject.toml)<br>[examples/ragas_examples/rag_eval/pyproject.toml](../../../../sources/explodinggradients__ragas/examples/ragas_examples/rag_eval/pyproject.toml)<br>[examples/ragas_examples/improve_rag/pyproject.toml](../../../../sources/explodinggradients__ragas/examples/ragas_examples/improve_rag/pyproject.toml)<br>[docs/Makefile](../../../../sources/explodinggradients__ragas/docs/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 186 | [tests/__init__.py](../../../../sources/explodinggradients__ragas/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/explodinggradients__ragas/tests/conftest.py)<br>[tests/test_quoted_spans.py](../../../../sources/explodinggradients__ragas/tests/test_quoted_spans.py)<br>[tests/utils/__init__.py](../../../../sources/explodinggradients__ragas/tests/utils/__init__.py)<br>[tests/utils/llm_setup.py](../../../../sources/explodinggradients__ragas/tests/utils/llm_setup.py)<br>[tests/utils/metric_comparison.py](../../../../sources/explodinggradients__ragas/tests/utils/metric_comparison.py) |
| CI workflow | 8 | [.github/workflows/ci.yaml](../../../../sources/explodinggradients__ragas/.github/workflows/ci.yaml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/explodinggradients__ragas/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude-docs-apply.yml](../../../../sources/explodinggradients__ragas/.github/workflows/claude-docs-apply.yml)<br>[.github/workflows/claude-docs-check.yml](../../../../sources/explodinggradients__ragas/.github/workflows/claude-docs-check.yml)<br>[.github/workflows/claude.yml](../../../../sources/explodinggradients__ragas/.github/workflows/claude.yml)<br>[.github/workflows/issue-manager.yaml](../../../../sources/explodinggradients__ragas/.github/workflows/issue-manager.yaml) |
| 컨테이너/배포 | 1 | [tests/benchmarks/Dockerfile](../../../../sources/explodinggradients__ragas/tests/benchmarks/Dockerfile) |
| 보안/정책 | 1 | [SECURITY.md](../../../../sources/explodinggradients__ragas/SECURITY.md) |
| 에이전트 지시문 | 9 | [CLAUDE.md](../../../../sources/explodinggradients__ragas/CLAUDE.md)<br>[docs/howtos/integrations/gemini.md](../../../../sources/explodinggradients__ragas/docs/howtos/integrations/gemini.md)<br>[docs/concepts/test_data_generation/agents.md](../../../../sources/explodinggradients__ragas/docs/concepts/test_data_generation/agents.md)<br>[docs/concepts/metrics/available_metrics/agents.md](../../../../sources/explodinggradients__ragas/docs/concepts/metrics/available_metrics/agents.md)<br>[.cursor/rules/docs-diataxis-guidelines.mdc](../../../../sources/explodinggradients__ragas/.cursor/rules/docs-diataxis-guidelines.mdc)<br>[.cursor/rules/docs-structure.mdc](../../../../sources/explodinggradients__ragas/.cursor/rules/docs-structure.mdc) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/ragas/executor.py`, `src/ragas/prompt/metrics/context_entity_recall.py`, `src/ragas/prompt/metrics/context_recall.py`.
2. agent/tool runtime 매핑: `src/ragas/executor.py`, `src/ragas/prompt/metrics/context_entity_recall.py`, `src/ragas/prompt/metrics/context_recall.py`.
3. retrieval/memory/indexing 확인: `tests/unit/test_graph.py`, `tests/unit/test_knowledge_graph_clusters.py`, `tests/unit/test_knowledge_graph_save.py`.
4. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/test_quoted_spans.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 694 files, 119 directories.. 핵심 구조 신호는 pyproject.toml, Makefile, README.md, CLAUDE.md, LICENSE, openai이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
