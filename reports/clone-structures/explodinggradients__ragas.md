# explodinggradients/ragas 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/explodinggradients__ragas |
| remote | https://github.com/explodinggradients/ragas |
| HEAD | 298b682 (2026-02-24) fix: allow fork contributors in check-docs CI workflow (#2606) |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 694 |
| dirs | 119 |
| stack | Python |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Key Features`, `:shield: Installation`, `:fire: Quickstart`, `Clone a Complete Example Project`, `List available templates`, `Create a RAG evaluation project`, `Specify where you want to create it.`, `Evaluate your LLM App`, `Setup your LLM`, `Create a custom aspect evaluator`, `Score your application's output`, `Want help in improving your AI application using evals?`, `🫂 Community`, `Contributors`, `🔍 Open Analytics`, `Cite Us`

> <h1 align="center" <img style="vertical align middle" height="200" src="https //raw.githubusercontent.com/vibrantlabsai/ragas/main/docs/ static/imgs/logo.png" </h1 <p align="center" <i Supercharge Your LLM Application Evaluations 🚀</i </p <p align="center" <a href="https //github.com/vibrantlabsai/ragas/releases" <img alt="Latest release" src="https //img.shields.io/github/release/vibrantlabsai/ragas.svg" </a <a href="https //www.python.org/" <img alt="Made with Python" src="https //img.shields.io/badge/Made%20with Python 1f425f.svg?color=purple" </a <a href="https //github.com/vibrantlabsai/ragas/blob/master/LICENSE" <img alt="License Apache 2.0" src="https //img.shields.io/github/license/vibrantlabsai/ragas.svg?color=green" </a <a href="https //pypi.org/project/ragas/" <img alt="Ragas Downloads per month" src="https //static.pepy.tech/badge/ragas/month" </a <a href="https //discord.gg

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .claude | dir |
| .cursor | dir |
| .dockerignore | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| .readthedocs.yml | file |
| CLAUDE.md | file |
| CODE_OF_CONDUCT.md | file |
| CONTRIBUTING.md | file |
| docs | dir |
| examples | dir |
| LICENSE | file |
| Makefile | file |
| mkdocs-pdf.yml | file |
| mkdocs.yml | file |
| pyproject.toml | file |
| README.md | file |
| scripts | dir |
| SECURITY.md | file |
| src | dir |
| tests | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| docs/ | 243 |
| src/ | 241 |
| tests/ | 113 |
| examples/ | 59 |
| (root) | 15 |
| .github/ | 12 |
| .cursor/ | 8 |
| .claude/ | 2 |
| scripts/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 241 | preferred |
| docs/ | 243 | preferred |
| examples/ | 59 | preferred |
| tests/ | 113 | preferred |
| scripts/ | 1 | preferred |
| src/ragas/ | 241 | large |
| src/ragas/metrics/ | 114 | large |
| docs/howtos/ | 98 | large |
| tests/unit/ | 71 | large |
| docs/_static/ | 58 | large |
| examples/ragas_examples/ | 47 | large |
| docs/howtos/integrations/ | 43 | large |
| docs/concepts/ | 33 | large |
| src/ragas/testset/ | 33 | large |
| tests/e2e/ | 30 | large |
| docs/_static/imgs/ | 29 | large |
| src/ragas/prompt/ | 23 | large |
| docs/concepts/metrics/ | 22 | large |
| docs/howtos/customizations/ | 22 | large |
| tests/e2e/metrics_migration/ | 22 | large |
| docs/references/ | 19 | large |
| docs/howtos/applications/ | 18 | large |
| src/ragas/integrations/ | 15 | large |
| docs/getstarted/ | 14 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `examples/pyproject.toml`
- `examples/ragas_examples/improve_rag/pyproject.toml`
- `examples/ragas_examples/rag_eval/pyproject.toml`
- `pyproject.toml`
- `tests/benchmarks/Dockerfile`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| examples/pyproject.toml | ragas-examples | false | true | false | false |
| examples/ragas_examples/improve_rag/pyproject.toml | improve-rag | false | true | false | false |
| examples/ragas_examples/rag_eval/pyproject.toml | rag-eval | false | true | false | false |
| pyproject.toml | ragas | false | true | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs/INSTALL`
- `docs/Makefile`
- `docs/_static/annotated_data.json`
- `docs/_static/architecture.png`
- `docs/_static/bar_plot.png`
- `docs/_static/css/highlight_ipython3.css`
- `docs/_static/css/highlight_ipython3_dark.css`
- `docs/_static/css/highlight_ipython3_light.css`
- `docs/_static/css/highlight_python.css`
- `docs/_static/css/highlight_python_dark.css`
- `docs/_static/css/highlight_python_light.css`
- `docs/_static/css/ragas.css`
- `docs/_static/edited_chain_runs.json`
- `docs/_static/favicon.ico`
- `docs/_static/imgs/_langgraph_agent_evaluation_28_0.jpg`
- `docs/_static/imgs/after_training.png`
- `docs/_static/imgs/annotation.png`
- `docs/_static/imgs/bar-graph.svg`
- `docs/_static/imgs/before_training.png`
- `docs/_static/imgs/compare-emb-results.png`
- `docs/_static/imgs/compare-embeddings.jpeg`
- `docs/_static/imgs/compare-llm-result.png`
- `docs/_static/imgs/compare-llms-front.jpeg`
- `docs/_static/imgs/compare-llms-testset.png`
- `docs/_static/imgs/component-wise-metrics.png`
- `docs/_static/imgs/eval-evolve.png`
- `docs/_static/imgs/experiments_quickstart/hello_world.gif`
- `docs/_static/imgs/experiments_quickstart/output_first_experiment.png`
- `docs/_static/imgs/howto_improve_rag_mlflow.png`
- `docs/_static/imgs/kg_rag.png`
- `docs/_static/imgs/langsmith-tracing-faithfullness.png`
- `docs/_static/imgs/langsmith-tracing-overview.png`
- `docs/_static/imgs/logo-black.svg`
- `docs/_static/imgs/logo.png`
- `docs/_static/imgs/metrics_mindmap.png`
- `docs/_static/imgs/question_types.png`
- `docs/_static/imgs/quickstart-output.png`
- `docs/_static/imgs/ragas-logo.png`
- `docs/_static/imgs/ragas_workflow_white.png`
- `docs/_static/imgs/results/rag_eval_result.png`
- `docs/_static/imgs/scenario_rag.png`
- `docs/_static/imgs/testset_output.png`
- `docs/_static/imgs/trace-langsmith.png`
- `docs/_static/js/commonroom.js`
- `docs/_static/js/header_border.js`
- `docs/_static/js/mathjax.js`
- `docs/_static/js/mendable_chat_bubble.js`
- `docs/_static/js/toggle.js`
- ... 30 more

### 에이전트 지침 후보

- `.claude/commands/create-pr.md`
- `.claude/commands/fix-github-issue.md`
- `.cursor/commands/git-pr.md`
- `.cursor/commands/update-howto-guide.md`
- `.cursor/rules/docs-diataxis-guidelines.mdc`
- `.cursor/rules/docs-structure.mdc`
- `.cursor/rules/project-structure.mdc`
- `.cursor/rules/update-guide.mdc`
- `.cursor/rules/use-uv-cli.mdc`
- `.cursor/worktrees.json`
- `CLAUDE.md`
- `docs/concepts/metrics/available_metrics/agents.md`
- `docs/concepts/test_data_generation/agents.md`
- `docs/howtos/integrations/gemini.md`

### 스펙/템플릿/명령/스킬 후보

- `.claude/commands/create-pr.md`
- `.claude/commands/fix-github-issue.md`
- `.cursor/commands/git-pr.md`
- `.cursor/commands/update-howto-guide.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/__init__.py`
- `tests/benchmarks/Dockerfile`
- `tests/benchmarks/benchmark_eval.py`
- `tests/benchmarks/benchmark_testsetgen.py`
- `tests/benchmarks/utils.py`
- `tests/conftest.py`
- `tests/docs/__init__.py`
- `tests/docs/test_run_config.py`
- `tests/e2e/__init__.py`
- `tests/e2e/metrics_migration/__init__.py`
- `tests/e2e/metrics_migration/base_migration_test.py`
- `tests/e2e/metrics_migration/conftest.py`
- `tests/e2e/metrics_migration/metric_score_diff.ipynb`
- `tests/e2e/metrics_migration/plan-for-metrics-migration.md`
- `tests/e2e/metrics_migration/test_answer_accuracy_migration.py`
- `tests/e2e/metrics_migration/test_answer_correctness_migration.py`
- `tests/e2e/metrics_migration/test_answer_relevancy_migration.py`
- `tests/e2e/metrics_migration/test_bleu_migration.py`
- `tests/e2e/metrics_migration/test_context_entity_recall_migration.py`
- `tests/e2e/metrics_migration/test_context_precision_migration.py`
- `tests/e2e/metrics_migration/test_context_recall_migration.py`
- `tests/e2e/metrics_migration/test_context_relevance_migration.py`
- `tests/e2e/metrics_migration/test_factual_correctness_migration.py`
- `tests/e2e/metrics_migration/test_faithfulness_migration.py`
- `tests/e2e/metrics_migration/test_noise_sensitivity_migration.py`
- `tests/e2e/metrics_migration/test_response_groundedness_migration.py`
- `tests/e2e/metrics_migration/test_rouge_migration.py`
- `tests/e2e/metrics_migration/test_semantic_similarity_migration.py`
- `tests/e2e/metrics_migration/test_string_migration.py`
- `tests/e2e/metrics_migration/test_summary_score_migration.py`
- `tests/e2e/metrics_migration/test_utils.py`
- `tests/e2e/test_adaptation.py`
- `tests/e2e/test_amnesty_in_ci.py`
- `tests/e2e/test_dataset_utils.py`
- `tests/e2e/test_dspy_integration.py`
- `tests/e2e/test_fullflow.py`
- `tests/e2e/test_langchain_llm_attributes.py`
- `tests/e2e/test_testset_generation.py`
- `tests/test_quoted_spans.py`
- `tests/unit/backends/test_gdrive_backend.py`
- `tests/unit/backends/test_inmemory.py`
- `tests/unit/backends/test_local_csv.py`
- `tests/unit/backends/test_local_jsonl.py`
- `tests/unit/integrations/test_ag_ui.py`
- `tests/unit/integrations/test_tracing.py`
- `tests/unit/integrations/test_tracing_simple.py`
- `tests/unit/llms/test_adapters.py`
- `tests/unit/llms/test_instructor_factory.py`
- `tests/unit/llms/test_llm.py`
- `tests/unit/llms/test_system_prompt.py`
- `tests/unit/prompt/test_base_prompt.py`
- `tests/unit/prompt/test_dynamic_few_shot_prompt.py`
- `tests/unit/prompt/test_prompt_mixin.py`
- `tests/unit/prompt/test_prompt_save_load.py`
- `tests/unit/prompt/test_prompt_utils.py`
- `tests/unit/test_analytics.py`
- `tests/unit/test_async_evaluation.py`
- `tests/unit/test_async_utils.py`
- `tests/unit/test_average_precision_algorithm.py`
- `tests/unit/test_cache.py`
- `tests/unit/test_cancellation.py`
- `tests/unit/test_chrf_score.py`
- `tests/unit/test_chrf_score_collections.py`
- `tests/unit/test_cli.py`
- `tests/unit/test_cosine_relationship_builders.py`
- `tests/unit/test_cost.py`
- `tests/unit/test_datacompy_score_collections.py`
- `tests/unit/test_dataset_schema.py`
- `tests/unit/test_datatable_inheritance.py`
- `tests/unit/test_domain_specific_rubrics_collections.py`
- `tests/unit/test_dspy_adapter.py`
- `tests/unit/test_dspy_optimizer.py`
- `tests/unit/test_embeddings.py`
- `tests/unit/test_embeddings_caching.py`
- `tests/unit/test_engine.py`
- `tests/unit/test_executor.py`
- `tests/unit/test_executor_in_jupyter.ipynb`
- `tests/unit/test_experiment.py`
- `tests/unit/test_graph.py`
- `tests/unit/test_import.py`
- ... 33 more

### CI/Docker 후보

- `.github/workflows/ci.yaml`
- `.github/workflows/claude-code-review.yml`
- `.github/workflows/claude-docs-apply.yml`
- `.github/workflows/claude-docs-check.yml`
- `.github/workflows/claude.yml`
- `.github/workflows/issue-manager.yaml`
- `.github/workflows/publish-examples.yml`
- `.github/workflows/python-publish.yml`
- `tests/benchmarks/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 387 |
| .md | 163 |
| .png | 41 |
| .ipynb | 23 |
| .css | 9 |
| .yml | 9 |
| .json | 7 |
| .csv | 6 |
| .txt | 6 |
| .js | 5 |
| .mdc | 5 |
| .gif | 4 |
| .toml | 4 |
| .yaml | 3 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `.claude/commands/create-pr.md 스펙/명령 의미`
- `.claude/commands/fix-github-issue.md 스펙/명령 의미`
- `.cursor/commands/git-pr.md 스펙/명령 의미`
- `.cursor/commands/update-howto-guide.md 스펙/명령 의미`
- `examples/pyproject.toml 실행 스크립트와 패키지 경계`
- `examples/ragas_examples/improve_rag/pyproject.toml 실행 스크립트와 패키지 경계`
- `examples/ragas_examples/rag_eval/pyproject.toml 실행 스크립트와 패키지 경계`
- `pyproject.toml 실행 스크립트와 패키지 경계`
- `tests/benchmarks/Dockerfile 실행 스크립트와 패키지 경계`

