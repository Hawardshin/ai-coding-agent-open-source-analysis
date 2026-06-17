# truera/trulens 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/truera__trulens |
| remote | https://github.com/truera/trulens |
| HEAD | 3fb807e (2026-06-02) feat(dashboard): thread-based grouping of records by conversation_id (#2527) |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 1234 |
| dirs | 318 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `🦑 Welcome to TruLens!`, `TruLens in the development workflow`, `Installation and Setup`, `Quick Usage`, `Key Features`, `🔭 OpenTelemetry-based tracing`, `🤖 Agentic evaluations`, `📊 Batch and inline evaluation`, `Inline — evaluate as the app runs`, `Batch — evaluate a pre-collected dataset using the TruLens 2.8 Run API`, `🔌 MCP support`, `🎯 Selector API`, `Supported LLM Providers`, `💡 Contributing & Community`

> 🦑 Welcome to TruLens! Don't just vibe check your LLM app! Systematically evaluate and track your LLM experiments with TruLens. As you develop your app including prompts, models, retrievers, knowledge sources and more, TruLens is the tool you need to understand its performance. Fine grained, stack agnostic instrumentation and comprehensive evaluations help you to identify failure modes & systematically iterate to improve your application. Read more about the core concepts behind TruLens including Feedback Functions, The RAG Triad, and Honest, Harmless and Helpful Evals. TruLens in the development workflow Build your first prototype then connect instrumentation and logging with TruLens. Decide what feedbacks you need, and specify them with TruLens to run alongside your app. Then iterate and compare versions of your app in an easy to use user interface 👇 Installation and Setup Install the

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| _trulens | dir |
| .agents | dir |
| .azure_pipelines | dir |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .grit | dir |
| .pre-commit-config.yaml | file |
| .vscode | dir |
| AGENTS.md | file |
| benchmarks | dir |
| conftest.py | file |
| CONTRIBUTING.md | file |
| CONTRIBUTORS.md | file |
| DEPRECATION.md | file |
| DEVELOPMENT.md | file |
| docker | dir |
| docs | dir |
| examples | dir |
| GOVERNANCE.md | file |
| LANGCHAIN_1X_MIGRATION.md | file |
| LICENSE | file |
| MAINTAINERS.md | file |
| Makefile | file |
| mkdocs.yml | file |
| package-lock.json | file |
| poetry.lock | file |
| POLICIES.md | file |
| pyproject.toml | file |
| README.md | file |
| release_dbs | dir |
| RELEASES.md | file |
| scripts | dir |
| src | dir |
| tests | dir |
| tools | dir |
| update_meta_yaml.py | file |
| zip_wheels.sh | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| src/ | 649 |
| examples/ | 217 |
| tests/ | 163 |
| docs/ | 156 |
| (root) | 23 |
| .azure_pipelines/ | 7 |
| .grit/ | 3 |
| scripts/ | 3 |
| _trulens/ | 2 |
| .github/ | 2 |
| .vscode/ | 2 |
| benchmarks/ | 2 |
| release_dbs/ | 2 |
| tools/ | 2 |
| docker/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 649 | preferred |
| docs/ | 156 | preferred |
| examples/ | 217 | preferred |
| tests/ | 163 | preferred |
| tools/ | 2 | preferred |
| scripts/ | 3 | preferred |
| src/dashboard/ | 292 | large |
| src/dashboard/react_components/ | 260 | large |
| examples/expositional/ | 120 | large |
| src/core/ | 118 | large |
| src/core/trulens/ | 115 | large |
| tests/unit/ | 106 | large |
| src/trulens_eval/ | 80 | large |
| src/trulens_eval/trulens_eval/ | 78 | large |
| examples/experimental/ | 67 | large |
| examples/expositional/frameworks/ | 52 | large |
| src/providers/ | 44 | large |
| docs/component_guides/ | 39 | large |
| docs/assets/ | 37 | large |
| examples/expositional/use_cases/ | 37 | large |
| src/apps/ | 34 | large |
| tests/e2e/ | 34 | large |
| src/dashboard/trulens/ | 28 | large |
| src/feedback/ | 26 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/frontend/package.json`
- `examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/frontend/tsconfig.json`
- `examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/frontend/vite.config.ts`
- `examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/monitoring_dashboard/pyproject.toml`
- `examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/pyproject.toml`
- `examples/expositional/use_cases/snowflake-ai-stack-agentic-eval/requirements.txt`
- `examples/expositional/use_cases/snowflake-ai-stack/requirements.txt`
- `poetry.lock`
- `pyproject.toml`
- `src/apps/gepa/pyproject.toml`
- `src/apps/langchain/pyproject.toml`
- `src/apps/langgraph/pyproject.toml`
- `src/apps/llamaindex/pyproject.toml`
- `src/apps/nemo/pyproject.toml`
- `src/benchmark/pyproject.toml`
- `src/connectors/snowflake/pyproject.toml`
- `src/core/pyproject.toml`
- `src/core/trulens/core/utils/requirements.txt`
- `src/dashboard/pyproject.toml`
- `src/dashboard/react_components/record_viewer/package.json`
- `src/dashboard/react_components/record_viewer/tsconfig.json`
- `src/dashboard/react_components/record_viewer/vite.config.ts`
- `src/dashboard/react_components/record_viewer_otel/package.json`
- `src/dashboard/react_components/record_viewer_otel/tsconfig.json`
- `src/dashboard/react_components/record_viewer_otel/vite.config.ts`
- `src/feedback/pyproject.toml`
- `src/hotspots/poetry.lock`
- `src/hotspots/pyproject.toml`
- `src/otel/semconv/pyproject.toml`
- `src/providers/bedrock/pyproject.toml`
- `src/providers/cortex/pyproject.toml`
- `src/providers/google/pyproject.toml`
- `src/providers/huggingface/pyproject.toml`
- `src/providers/langchain/pyproject.toml`
- `src/providers/litellm/pyproject.toml`
- `src/providers/openai/pyproject.toml`
- `src/trulens_eval/pyproject.toml`
- `tests/docs_notebooks/requirements.txt`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/frontend/package.json | support-intelligence-chat | dev, build, preview | react, react-dom |
| src/dashboard/react_components/record_viewer/package.json | recordviewer | build, dev, lint, prettier, preview, test | @emotion/react, @emotion/styled, @microlink/react-json-view, @mui/icons-material, @mui/material, @mui/x-tree-view, clsx, react, react-dom, streamlit-component-lib, uuid |
| src/dashboard/react_components/record_viewer_otel/package.json | recordviewer | build, dev, lint, prettier, preview, test, storybook, build-storybook, test:docker-storybook:run, test:docker-storybook:update | @emotion/react, @emotion/styled, @microlink/react-json-view, @mui/icons-material, @mui/material, @mui/x-tree-view, clsx, react, react-dom, streamlit-component-lib, uuid |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/monitoring_dashboard/pyproject.toml | ai-observability-dashboard | false | false | false | false |
| examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/pyproject.toml | openai-agent-sdk-snowflake-tools | false | true | false | false |
| pyproject.toml | trulens | true | false | true | true |
| src/apps/gepa/pyproject.toml | trulens-apps-gepa | true | false | false | false |
| src/apps/langchain/pyproject.toml | trulens-apps-langchain | true | false | false | false |
| src/apps/langgraph/pyproject.toml | trulens-apps-langgraph | true | false | false | false |
| src/apps/llamaindex/pyproject.toml | trulens-apps-llamaindex | true | false | false | false |
| src/apps/nemo/pyproject.toml | trulens-apps-nemo | true | false | false | false |
| src/benchmark/pyproject.toml | trulens-benchmark | true | false | false | false |
| src/connectors/snowflake/pyproject.toml | trulens-connectors-snowflake | true | false | false | false |
| src/core/pyproject.toml | trulens-core | true | false | false | false |
| src/dashboard/pyproject.toml | trulens-dashboard | true | false | false | false |
| src/feedback/pyproject.toml | trulens-feedback | true | false | false | false |
| src/hotspots/pyproject.toml | trulens-hotspots | true | false | false | false |
| src/otel/semconv/pyproject.toml | trulens-otel-semconv | true | false | false | false |
| src/providers/bedrock/pyproject.toml | trulens-providers-bedrock | true | false | false | false |
| src/providers/cortex/pyproject.toml | trulens-providers-cortex | true | false | false | false |
| src/providers/google/pyproject.toml | trulens-providers-google | true | false | false | false |
| src/providers/huggingface/pyproject.toml | trulens-providers-huggingface | true | false | false | false |
| src/providers/langchain/pyproject.toml | trulens-providers-langchain | true | false | false | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.azure_pipelines/README.md`
- `CONTRIBUTING.md`
- `README.md`
- `docs/CNAME`
- `docs/README.md`
- `docs/assets/favicon.svg`
- `docs/assets/favicon/android-chrome-192x192.png`
- `docs/assets/favicon/android-chrome-512x512.png`
- `docs/assets/favicon/apple-touch-icon.png`
- `docs/assets/favicon/browserconfig.xml`
- `docs/assets/favicon/favicon-16x16.png`
- `docs/assets/favicon/favicon-32x32.png`
- `docs/assets/favicon/favicon.ico`
- `docs/assets/favicon/mstile-144x144.png`
- `docs/assets/favicon/mstile-150x150.png`
- `docs/assets/favicon/mstile-310x150.png`
- `docs/assets/favicon/mstile-310x310.png`
- `docs/assets/favicon/mstile-70x70.png`
- `docs/assets/favicon/safari-pinned-tab.svg`
- `docs/assets/favicon/site.webmanifest`
- `docs/assets/images/Chain_Explore.png`
- `docs/assets/images/Evaluations.png`
- `docs/assets/images/Honest_Harmless_Helpful_Evals.png`
- `docs/assets/images/Leaderboard.png`
- `docs/assets/images/Neural_Network_Explainability.png`
- `docs/assets/images/RAG_Triad.png`
- `docs/assets/images/Range_of_Feedback_Functions.png`
- `docs/assets/images/TruLens_Architecture.png`
- `docs/assets/images/appui/apps.png`
- `docs/assets/images/appui/blank_session.png`
- `docs/assets/images/appui/running_session.png`
- `docs/assets/images/logos/cubeserv.svg`
- `docs/assets/images/logos/datec.png`
- `docs/assets/images/logos/equinix.svg`
- `docs/assets/images/logos/kbc.png`
- `docs/assets/images/logos/postgresql.svg`
- `docs/assets/images/logos/snowflake.svg`
- `docs/assets/images/logos/snowflake_logo.svg`
- `docs/assets/images/logos/tribbleai.png`
- `docs/assets/images/trulens_1_release_graphic_modular.png`
- `docs/assets/images/trulens_1_release_graphic_split.png`
- `docs/assets/videos/trulens_quickstart_dashboard_video.gif`
- `docs/blog/assets/agent_gpa.png`
- `docs/blog/assets/trulens_1_1_dashboard_updates/compare_app.png`
- `docs/blog/assets/trulens_1_1_dashboard_updates/compare_record.png`
- `docs/blog/assets/trulens_1_1_dashboard_updates/dashboard_global_features.gif`
- `docs/blog/assets/trulens_1_1_dashboard_updates/leaderboard_metadata.gif`
- `docs/blog/assets/trulens_1_1_dashboard_updates/record_page.gif`
- `docs/blog/assets/trulens_otel/langgraph_trace.png`
- `docs/blog/index.md`
- ... 30 more

### 에이전트 지침 후보

- `AGENTS.md`
- `docs/component_guides/instrumentation/mcp.md`
- `examples/experimental/langgraph_mcp.ipynb`
- `src/core/trulens/.agents/skills/trulens-dataset-curation/SKILL.md`
- `src/core/trulens/.agents/skills/trulens-diagnosis/SKILL.md`
- `src/core/trulens/.agents/skills/trulens-evaluation-setup/SKILL.md`
- `src/core/trulens/.agents/skills/trulens-evaluation-workflow/SKILL.md`
- `src/core/trulens/.agents/skills/trulens-guardrails/SKILL.md`
- `src/core/trulens/.agents/skills/trulens-instrumentation/SKILL.md`
- `src/core/trulens/.agents/skills/trulens-instrumentation/debug_utils.py`
- `src/core/trulens/.agents/skills/trulens-notebook-execution/SKILL.md`
- `src/core/trulens/.agents/skills/trulens-running-evaluations/SKILL.md`

### 스펙/템플릿/명령/스킬 후보

- `.azure_pipelines/templates/build-conda-packages.yaml`
- `.azure_pipelines/templates/env-setup.yaml`
- `.azure_pipelines/templates/run-precommits.yaml`
- `.azure_pipelines/templates/run-tests.yaml`
- `docs/contributing/design.md`
- `src/core/trulens/.agents/skills/trulens-dataset-curation/SKILL.md`
- `src/core/trulens/.agents/skills/trulens-diagnosis/SKILL.md`
- `src/core/trulens/.agents/skills/trulens-evaluation-setup/SKILL.md`
- `src/core/trulens/.agents/skills/trulens-evaluation-workflow/SKILL.md`
- `src/core/trulens/.agents/skills/trulens-guardrails/SKILL.md`
- `src/core/trulens/.agents/skills/trulens-instrumentation/SKILL.md`
- `src/core/trulens/.agents/skills/trulens-instrumentation/debug_utils.py`
- `src/core/trulens/.agents/skills/trulens-notebook-execution/SKILL.md`
- `src/core/trulens/.agents/skills/trulens-running-evaluations/SKILL.md`
- `src/feedback/trulens/feedback/templates/__init__.py`
- `src/feedback/trulens/feedback/templates/agent.py`
- `src/feedback/trulens/feedback/templates/base.py`
- `src/feedback/trulens/feedback/templates/quality.py`
- `src/feedback/trulens/feedback/templates/rag.py`
- `src/feedback/trulens/feedback/templates/safety.py`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `src/dashboard/react_components/record_viewer/src/utils/utils.test.ts`
- `src/dashboard/react_components/record_viewer_otel/src/functions/createNodeMap.test.ts`
- `src/dashboard/react_components/record_viewer_otel/src/functions/createTreeFromCalls.test.ts`
- `src/dashboard/react_components/record_viewer_otel/src/functions/deduplicateAttributes.test.ts`
- `src/dashboard/react_components/record_viewer_otel/src/functions/formatters.test.ts`
- `src/dashboard/react_components/record_viewer_otel/src/functions/getAttribute.test.ts`
- `src/dashboard/react_components/record_viewer_otel/src/functions/getDefaultExpandedItems.test.ts`
- `src/dashboard/react_components/record_viewer_otel/src/functions/getSpanTypeTitle.test.ts`
- `src/dashboard/react_components/record_viewer_otel/src/functions/getStableKey.test.ts`
- `src/dashboard/react_components/record_viewer_otel/src/functions/processCostAttributes.test.ts`
- `src/dashboard/react_components/record_viewer_otel/src/functions/processSpanType.test.ts`
- `src/dashboard/react_components/record_viewer_otel/src/functions/processTokenAttributes.test.tsx`
- `src/dashboard/react_components/record_viewer_otel/src/functions/removeUnnecessaryAttributes.test.ts`
- `src/dashboard/react_components/record_viewer_otel/src/functions/sortSpanKeys.test.ts`
- `src/dashboard/react_components/record_viewer_otel/src/functions/splitStringToTwoPartsByDelimiter.test.ts`
- `src/dashboard/react_components/record_viewer_otel/src/functions/uniq.test.ts`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots.spec.ts`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-jsonviewer--default.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-jsonviewer--empty.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-jsonviewer--with-array.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-jsonviewer--with-long-string.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-jsonviewer--with-nested-object.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-labelandvalue--default.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-labelandvalue--with-custom-alignment.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-labelandvalue--with-long-value.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-labelandvalue--with-react-node-value.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-nodedetails--default.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-nodedetails--generation-span-type.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-nodedetails--many-attributes.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-nodedetails--tool-invocation-span-type.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-nodedetails--without-input-id.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-nodedetails--without-span-type.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-panel--default.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-panel--expanded-content.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-panel--hidden-content.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-recordinfo--complex-tree.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-recordinfo--deep-nested-tree.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-recordinfo--default.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-recordinfo--with-nested-nodes.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-recordtable--default.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-recordtable--with-deeply-nested-nodes.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-recordtable--with-long-duration.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-recordtable--with-multiple-children.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-recordtable--with-nested-nodes.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-recordtable--with-orphaned-nodes.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-recordtable--with-selected-node.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-recordtree--deep-nested-tree.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-recordtree--default.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-recordtree--orphaned-children.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-recordtree--with-long-duration.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-recordtree--with-multiple-children.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-recordtree--with-nested-nodes.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-recordtree--with-selected-node.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-recordtree-spantypetag--default.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-recordtree-spantypetag--different-span-type.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-recordtree-spantypetag--with-custom-styling.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-section--default.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-section--long-content.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-section--with-children.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-section--without-body.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-section--without-subtitle.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-spantooltip--custom-child.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-spantooltip--default.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-spantooltip--llm-span.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-spantooltip--unknown-span-type.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-styledtooltip--default.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-styledtooltip--long-content.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-styledtooltip--with-button.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-styledtooltip--with-rich-content.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-tabs--custom-styling.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-tabs--default.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-tabs--many-tabs.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-tag--custom-styling.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-tag--default.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-tag--long-text.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-tag--with-both-icons.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-tag--with-left-icon.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-tag--with-right-icon.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-traceattributes--complex-attributes.png`
- `src/dashboard/react_components/record_viewer_otel/test/snapshots/components-traceattributes--cost-attributes.png`
- ... 40 more

### CI/Docker 후보

- `src/dashboard/react_components/record_viewer_otel/docker-compose.test.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 471 |
| .png | 148 |
| .ipynb | 127 |
| .md | 123 |
| .ts | 87 |
| .tsx | 64 |
| .json | 32 |
| .toml | 23 |
| .typed | 22 |
| .yaml | 19 |
| .scss | 13 |
| .svg | 13 |
| .gitignore | 10 |
| .csv | 9 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `tools/ 내부 책임 분리`
- `.azure_pipelines/templates/build-conda-packages.yaml 스펙/명령 의미`
- `.azure_pipelines/templates/env-setup.yaml 스펙/명령 의미`
- `.azure_pipelines/templates/run-precommits.yaml 스펙/명령 의미`
- `.azure_pipelines/templates/run-tests.yaml 스펙/명령 의미`
- `docs/contributing/design.md 스펙/명령 의미`
- `examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/frontend/package.json 실행 스크립트와 패키지 경계`
- `examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/frontend/tsconfig.json 실행 스크립트와 패키지 경계`
- `examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/frontend/vite.config.ts 실행 스크립트와 패키지 경계`
- `examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/monitoring_dashboard/pyproject.toml 실행 스크립트와 패키지 경계`
- `examples/expositional/frameworks/openai_agent_sdk/openai_agent_sdk_snowflake_tools/pyproject.toml 실행 스크립트와 패키지 경계`

