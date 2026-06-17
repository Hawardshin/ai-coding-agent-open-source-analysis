# confident-ai/deepeval 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/confident-ai__deepeval |
| remote | https://github.com/confident-ai/deepeval |
| HEAD | c399fb4 (2026-06-10) updated docs |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 2022 |
| dirs | 438 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `🔥 Metrics and Features`, `🔌 Integrations`, `Frameworks`, `☁️ Platform + Ecosystem`, `🤖 Vibe-Coder QuickStart`, `🚀 Human QuickStart`, `Installation`, `Create an account (highly recommended)`, `Write your first test case`, `Evals With Full Traceability`, `This metric will be run on your trace end to end.`, `This metric will be run on your trace end to end.`, `This metric will be run on your trace end to end.`, `This metric will be run on your trace end to end.`, `This metric will be run on your trace end to end.`, `This metric will be run on your trace end to end.`, `This metric will be run on your trace end to end.`, `This metric will be run on your trace end to end.`

> <p align="center" <picture <source media="(prefers color scheme dark)" srcset="assets/hero/wordmark dark.svg" <img alt="DeepEval." src="assets/hero/wordmark light.svg" width="520" </picture </p <p align="center" <h1 align="center" The LLM Evaluation Framework</h1 </p <p align="center" <a href="https //trendshift.io/repositories/5917" target=" blank" <img src="https //trendshift.io/api/badge/repositories/5917" alt="confident ai%2Fdeepeval Trendshift" style="width 250px; height 55px;" width="250" height="55"/ </a </p <p align="center" <a href="https //discord.gg/3SEyvpgu2f" <img alt="discord invite" src="https //dcbadge.limes.pink/api/server/3SEyvpgu2f?style=flat" </a <a href="https //www.reddit.com/r/deepeval/" <img alt="reddit community" src="https //img.shields.io/badge/Reddit r%2Fdeepeval FF4500?logo=reddit&logoColor=white" </a </p <h4 align="center" <p <a href="https //deepeval.com/do

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .claude-plugin | dir |
| .cursor-plugin | dir |
| .env.example | file |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| .scripts | dir |
| .vscode | dir |
| assets | dir |
| CITATION.cff | file |
| CONTRIBUTING.md | file |
| deepeval | dir |
| demo_trace_scope | dir |
| docs | dir |
| examples | dir |
| LICENSE.md | file |
| MAINTAINERS.md | file |
| MANIFEST.in | file |
| manual_after_evals_iterator.py | file |
| poetry.lock | file |
| pyproject.toml | file |
| README.md | file |
| scripts | dir |
| skills | dir |
| test_agentcore_agent.py | file |
| test_pydantic_agent.py | file |
| tests | dir |
| typescript | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| tests/ | 646 |
| deepeval/ | 588 |
| docs/ | 533 |
| typescript/ | 173 |
| skills/ | 28 |
| examples/ | 15 |
| (root) | 14 |
| .github/ | 12 |
| assets/ | 4 |
| .claude-plugin/ | 2 |
| .scripts/ | 2 |
| demo_trace_scope/ | 2 |
| .cursor-plugin/ | 1 |
| .vscode/ | 1 |
| scripts/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 533 | preferred |
| examples/ | 15 | preferred |
| tests/ | 646 | preferred |
| skills/ | 28 | preferred |
| scripts/ | 1 | preferred |
| deepeval/ | 588 | large |
| tests/test_integrations/ | 305 | large |
| docs/content/ | 232 | large |
| tests/test_core/ | 230 | large |
| deepeval/metrics/ | 196 | large |
| typescript/ | 173 | large |
| docs/src/ | 137 | large |
| docs/content/docs/ | 134 | large |
| deepeval/benchmarks/ | 127 | large |
| tests/test_core/test_tracing/ | 119 | large |
| docs/public/ | 87 | large |
| typescript/src/ | 71 | large |
| docs/public/icons/ | 67 | large |
| deepeval/benchmarks/big_bench_hard/ | 60 | large |
| docs/src/components/ | 60 | large |
| tests/test_integrations/test_langchain/ | 58 | large |
| docs/src/sections/ | 51 | large |
| tests/test_metrics/ | 51 | large |
| typescript/test/ | 51 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `docs/package.json`
- `docs/tsconfig.json`
- `docs/yarn.lock`
- `poetry.lock`
- `pyproject.toml`
- `typescript/package.json`
- `typescript/tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| docs/package.json | new_docs | build, dev, start, types:check, contributors, changelog-contributors, repo-contributors, prebuild, postinstall | @radix-ui/react-popover, fumadocs-core, fumadocs-mdx, fumadocs-ui, katex, lucide-react, mdast-util-directive, mermaid, next, next-themes, react, react-dom, rehype-katex, remark-directive |
| typescript/package.json | deepeval | build, test, lint, lint:fix | @opentelemetry/api, @opentelemetry/exporter-trace-otlp-grpc, @opentelemetry/exporter-trace-otlp-proto, @opentelemetry/resources, @opentelemetry/sdk-trace-base, @opentelemetry/sdk-trace-node, @opentelemetry/semantic-conventions, @sentry/node, axios, cli-progress, csv-parser, dotenv, open, openai |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | deepeval | true | false | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `deepeval/integrations/README.md`
- `deepeval/integrations/pydantic_ai/README.md`
- `deepeval/red_teaming/README.md`
- `docs/.gitignore`
- `docs/README.md`
- `docs/app/(home)/layout.tsx`
- `docs/app/(home)/page.tsx`
- `docs/app/api/search/route.ts`
- `docs/app/apple-icon.png`
- `docs/app/blog/[[...slug]]/page.tsx`
- `docs/app/blog/layout.tsx`
- `docs/app/changelog/[[...slug]]/page.tsx`
- `docs/app/changelog/layout.tsx`
- `docs/app/docs/[[...slug]]/page.tsx`
- `docs/app/docs/layout.tsx`
- `docs/app/enterprise/page.tsx`
- `docs/app/favicon.ico`
- `docs/app/global.css`
- `docs/app/guides/[[...slug]]/page.tsx`
- `docs/app/guides/layout.tsx`
- `docs/app/icon.png`
- `docs/app/icon.svg`
- `docs/app/integrations/[[...slug]]/page.tsx`
- `docs/app/integrations/layout.tsx`
- `docs/app/layout.tsx`
- `docs/app/llms-full.txt/route.ts`
- `docs/app/llms.mdx/blog/[[...slug]]/route.ts`
- `docs/app/llms.mdx/changelog/[[...slug]]/route.ts`
- `docs/app/llms.mdx/docs/[[...slug]]/route.ts`
- `docs/app/llms.mdx/guides/[[...slug]]/route.ts`
- `docs/app/llms.mdx/integrations/[[...slug]]/route.ts`
- `docs/app/llms.mdx/tutorials/[[...slug]]/route.ts`
- `docs/app/llms.txt/route.ts`
- `docs/app/og/blog/[...slug]/route.tsx`
- `docs/app/og/docs/[...slug]/route.tsx`
- `docs/app/robots.ts`
- `docs/app/sitemap.ts`
- `docs/app/tutorials/[[...slug]]/page.tsx`
- `docs/app/tutorials/layout.tsx`
- `docs/components/lang/code-term.tsx`
- `docs/components/lang/language-provider.tsx`
- `docs/components/language-selector/language-selector.module.scss`
- `docs/components/language-selector/language-selector.tsx`
- `docs/components/mdx-anchor.tsx`
- `docs/components/mdx.tsx`
- `docs/content/blog/deepeval-alternatives-compared.mdx`
- `docs/content/blog/deepeval-got-a-new-look.mdx`
- `docs/content/blog/deepeval-vs-arize.mdx`
- ... 30 more

### 에이전트 지침 후보

- `assets/confident-mcp-architecture.png`
- `deepeval/metrics/mcp/__init__.py`
- `deepeval/metrics/mcp/mcp_task_completion.py`
- `deepeval/metrics/mcp/multi_turn_mcp_use_metric.py`
- `deepeval/metrics/mcp/schema.py`
- `deepeval/metrics/mcp/template.py`
- `deepeval/metrics/mcp_use_metric/__init__.py`
- `deepeval/metrics/mcp_use_metric/mcp_use_metric.py`
- `deepeval/metrics/mcp_use_metric/schema.py`
- `deepeval/metrics/mcp_use_metric/template.py`
- `deepeval/test_case/mcp.py`
- `docs/content/docs/(concepts)/evaluation-mcp.mdx`
- `docs/content/docs/(mcp)/meta.json`
- `docs/content/docs/(mcp)/metrics-mcp-task-completion.mdx`
- `docs/content/docs/(mcp)/metrics-mcp-use.mdx`
- `docs/content/docs/(mcp)/metrics-multi-turn-mcp-use.mdx`
- `docs/content/docs/(use-cases)/getting-started-mcp.mdx`
- `examples/mcp_evaluation/mcp_eval_multi_turn.py`
- `examples/mcp_evaluation/mcp_eval_single_turn.py`
- `skills/README.md`
- `skills/deepeval-otel/LICENSE`
- `skills/deepeval-otel/SKILL.md`
- `skills/deepeval-otel/references/endpoint-and-exporter.md`
- `skills/deepeval-otel/references/gen-ai-fallbacks.md`
- `skills/deepeval-otel/references/span-attributes.md`
- `skills/deepeval-otel/references/trace-attributes.md`
- `skills/deepeval-otel/templates/confident_otel_setup.py`
- `skills/deepeval-tracing/LICENSE`
- `skills/deepeval-tracing/SKILL.md`
- `skills/deepeval-tracing/references/integrations.md`
- `skills/deepeval-tracing/references/tracing.md`
- `skills/deepeval/LICENSE`
- `skills/deepeval/SKILL.md`
- `skills/deepeval/references/artifact-contracts.md`
- `skills/deepeval/references/choose-use-case.md`
- `skills/deepeval/references/confident-ai.md`
- `skills/deepeval/references/datasets.md`
- `skills/deepeval/references/intake.md`
- `skills/deepeval/references/iteration-loop.md`
- `skills/deepeval/references/metrics.md`
- `skills/deepeval/references/pytest-e2e-evals.md`
- `skills/deepeval/references/synthetic-data.md`
- `skills/deepeval/references/traced-evals.md`
- `skills/deepeval/templates/metrics.py`
- `skills/deepeval/templates/test_multi_turn_e2e.py`
- `skills/deepeval/templates/test_single_turn_no_tracing.py`
- `skills/deepeval/templates/test_single_turn_tracing.py`
- `tests/test_metrics/test_mcp_task_completetion_metric.py`
- `tests/test_metrics/test_mcp_use_metric.py`
- `tests/test_metrics/test_multi_turn_mcp_use_metric.py`

### 스펙/템플릿/명령/스킬 후보

- `deepeval/synthesizer/templates/__init__.py`
- `deepeval/synthesizer/templates/template.py`
- `deepeval/synthesizer/templates/template_extraction.py`
- `deepeval/synthesizer/templates/template_prompt.py`
- `skills/deepeval-otel/templates/confident_otel_setup.py`
- `skills/deepeval/templates/metrics.py`
- `skills/deepeval/templates/test_multi_turn_e2e.py`
- `skills/deepeval/templates/test_single_turn_no_tracing.py`
- `skills/deepeval/templates/test_single_turn_tracing.py`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `deepeval/cli/test/__init__.py`
- `deepeval/cli/test/command.py`
- `deepeval/integrations/hugging_face/tests/test_callbacks.py`
- `tests/__init__.py`
- `tests/test_confident/goldens.json`
- `tests/test_confident/goldens_multi_turn.json`
- `tests/test_confident/simulator/example_simulator.py`
- `tests/test_confident/test_annotation.py`
- `tests/test_confident/test_compare.py`
- `tests/test_confident/test_conversational_g_eval_upload.py`
- `tests/test_confident/test_dataset.py`
- `tests/test_confident/test_evaluate.py`
- `tests/test_confident/test_g_eval_upload.py`
- `tests/test_confident/test_prompt.py`
- `tests/test_confident/test_region_autodetect_request_routing.py`
- `tests/test_core/__init__.py`
- `tests/test_core/conftest.py`
- `tests/test_core/helpers.py`
- `tests/test_core/stubs.py`
- `tests/test_core/test_cli/__init__.py`
- `tests/test_core/test_cli/test_check_if_valid_file.py`
- `tests/test_core/test_cli/test_cli.py`
- `tests/test_core/test_config/__init__.py`
- `tests/test_core/test_config/test_deprecated_computed_aliases.py`
- `tests/test_core/test_config/test_settings.py`
- `tests/test_core/test_core.py`
- `tests/test_core/test_dataset_test_run_tracer.py`
- `tests/test_core/test_datasets/convo_goldens.csv`
- `tests/test_core/test_datasets/convo_goldens.json`
- `tests/test_core/test_datasets/goldens.csv`
- `tests/test_core/test_datasets/goldens.json`
- `tests/test_core/test_datasets/test_dataset.py`
- `tests/test_core/test_drop_trace_and_span.py`
- `tests/test_core/test_evaluation/test_async_trace_metric_isolation.py`
- `tests/test_core/test_evaluation/test_console_report.py`
- `tests/test_core/test_evaluation/test_end_to_end/__init__.py`
- `tests/test_core/test_evaluation/test_end_to_end/test_configs.py`
- `tests/test_core/test_evaluation/test_end_to_end/test_skip_reset.py`
- `tests/test_core/test_evaluation/test_execute/test_error_boundary.py`
- `tests/test_core/test_evaluation/test_execute/test_execute_conversational_test_case.py`
- `tests/test_core/test_evaluation/test_execute/test_execute_llm_test_case.py`
- `tests/test_core/test_evaluation/test_execute/test_execute_mllm_test_case.py`
- `tests/test_core/test_evaluation/test_execute/test_execute_timeouts.py`
- `tests/test_core/test_evaluation/test_local_store.py`
- `tests/test_core/test_evaluation/test_printing.py`
- `tests/test_core/test_evaluation/test_results_extraction.py`
- `tests/test_core/test_evaluation/test_trace_results_extraction.py`
- `tests/test_core/test_evaluation/test_trace_scope_assert_test.py`
- `tests/test_core/test_imports.py`
- `tests/test_core/test_models/test_amazon_bedrock_model.py`
- `tests/test_core/test_models/test_anthropic_model.py`
- `tests/test_core/test_models/test_azure_model.py`
- `tests/test_core/test_models/test_azure_retry_config.py`
- `tests/test_core/test_models/test_bedrock_retry_config.py`
- `tests/test_core/test_models/test_deepseek_model.py`
- `tests/test_core/test_models/test_embedding_models/__init__.py`
- `tests/test_core/test_models/test_embedding_models/test_azure_embedding_model.py`
- `tests/test_core/test_models/test_embedding_models/test_local_embedding_model.py`
- `tests/test_core/test_models/test_embedding_models/test_ollama_embedding_model.py`
- `tests/test_core/test_models/test_embedding_models/test_openai_embedding_model.py`
- `tests/test_core/test_models/test_gemini_model.py`
- `tests/test_core/test_models/test_grok_model.py`
- `tests/test_core/test_models/test_kimi_model.py`
- `tests/test_core/test_models/test_litellm_model.py`
- `tests/test_core/test_models/test_local_model.py`
- `tests/test_core/test_models/test_models_utils.py`
- `tests/test_core/test_models/test_ollama_model.py`
- `tests/test_core/test_models/test_openai_extractors.py`
- `tests/test_core/test_models/test_openai_model.py`
- `tests/test_core/test_models/test_openai_retry_policy.py`
- `tests/test_core/test_models/test_openrouter_model.py`
- `tests/test_core/test_models/test_portkey_model.py`
- `tests/test_core/test_optimization/test_copro/__init__.py`
- `tests/test_core/test_optimization/test_copro/test_configs.py`
- `tests/test_core/test_optimization/test_copro/test_loop.py`
- `tests/test_core/test_optimization/test_gepa/__init__.py`
- `tests/test_core/test_optimization/test_gepa/test_gepa_config.py`
- `tests/test_core/test_optimization/test_gepa/test_loop.py`
- `tests/test_core/test_optimization/test_miprov2/test_report_contract.py`
- `tests/test_core/test_optimization/test_mutations/__init__.py`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/black.yml`
- `.github/workflows/changelog.yml`
- `.github/workflows/full_test_core_for_pr.yml`
- `.github/workflows/release.yml`
- `.github/workflows/test_confident.yml`
- `.github/workflows/test_core.yml`
- `.github/workflows/test_integrations.yml`
- `.github/workflows/test_metrics.yml`
- `.github/workflows/typescript_lint.yml`
- `.github/workflows/typescript_test.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 923 |
| .json | 329 |
| .mdx | 206 |
| .ts | 175 |
| .tsx | 104 |
| .svg | 63 |
| .txt | 60 |
| .scss | 46 |
| .md | 33 |
| .png | 29 |
| .mjs | 10 |
| .yml | 10 |
| .ipynb | 6 |
| .gitignore | 3 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `skills/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `deepeval/synthesizer/templates/__init__.py 스펙/명령 의미`
- `deepeval/synthesizer/templates/template.py 스펙/명령 의미`
- `deepeval/synthesizer/templates/template_extraction.py 스펙/명령 의미`
- `deepeval/synthesizer/templates/template_prompt.py 스펙/명령 의미`
- `skills/deepeval-otel/templates/confident_otel_setup.py 스펙/명령 의미`
- `docs/package.json 실행 스크립트와 패키지 경계`
- `docs/tsconfig.json 실행 스크립트와 패키지 경계`
- `docs/yarn.lock 실행 스크립트와 패키지 경계`
- `poetry.lock 실행 스크립트와 패키지 경계`
- `pyproject.toml 실행 스크립트와 패키지 경계`

