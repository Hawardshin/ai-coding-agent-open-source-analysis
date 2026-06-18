# comet-ml/opik Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Debug, evaluate, and monitor your LLM applications, RAG systems, and agentic workflows with comprehensive tracing, automated evaluations, and production-ready dashboards.

## 요약

- 조사 단위: `sources/comet-ml__opik` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 11,277 files, 2,013 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=sdks/python/tests/unit/evaluation/suite_evaluators/agentic/test_tool_registry.py, sdks/python/tests/unit/configurator/mcp/__init__.py, sdks/python/tests/unit/configurator/mcp/test_env.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | comet-ml/opik |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 19680 |
| Forks | 1524 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/comet-ml__opik](../../../../sources/comet-ml__opik) |
| Existing report | [reports/global-trending/repositories/comet-ml__opik.md](../../../global-trending/repositories/comet-ml__opik.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 11277 / 2013 |
| Max observed depth | 13 |
| Top directories | .agents, .claude, .github, .hooks, apps, deployment, extensions, scripts, sdks, tests_end_to_end, tests_load |
| Top extensions | .ts: 3442, .py: 2714, .tsx: 1548, .java: 1541, .mdx: 564, .png: 452, .sql: 184, .md: 154, .rst: 122, .svg: 90, .yml: 83, .json: 55 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| apps/opik-python-backend | apps workspace | 32 |
| apps/opik-documentation | apps workspace | 7 |
| apps/opik-backend | apps workspace | 2 |
| apps/opik-frontend | apps workspace | 2 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| apps/opik-guardrails-backend | apps workspace | 1 |
| apps/opik-sandbox-executor-python | apps workspace | 1 |
| deployment | deployment surface | 1 |
| extensions | top-level component | 1 |
| scripts | top-level component | 1 |
| sdks | top-level component | 1 |
| tests_end_to_end | validation surface | 1 |
| tests_load | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | cursor | make cursor |
| utility | Makefile | codex | make codex |
| utility | Makefile | claude | make claude |
| utility | Makefile | clean-agents | make clean-agents |
| utility | Makefile | hooks | make hooks |
| utility | Makefile | hooks-remove | make hooks-remove |
| utility | Makefile | precommit-sdks | make precommit-sdks |
| utility | Makefile | precommit-sdks-all | make precommit-sdks-all |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [sdks/python/tests/unit/evaluation/suite_evaluators/agentic/test_tool_registry.py](../../../../sources/comet-ml__opik/sdks/python/tests/unit/evaluation/suite_evaluators/agentic/test_tool_registry.py) | mcp signal |
| mcp | [sdks/python/tests/unit/configurator/mcp/__init__.py](../../../../sources/comet-ml__opik/sdks/python/tests/unit/configurator/mcp/__init__.py) | mcp signal |
| mcp | [sdks/python/tests/unit/configurator/mcp/test_env.py](../../../../sources/comet-ml__opik/sdks/python/tests/unit/configurator/mcp/test_env.py) | mcp signal |
| mcp | [sdks/python/tests/unit/configurator/mcp/test_install.py](../../../../sources/comet-ml__opik/sdks/python/tests/unit/configurator/mcp/test_install.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/comet-ml__opik/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests_end_to_end/e2e/agents/README.md](../../../../sources/comet-ml__opik/tests_end_to_end/e2e/agents/README.md) | agentRuntime signal |
| agentRuntime | [tests_end_to_end/e2e/agents/uninstrumented/agent.py](../../../../sources/comet-ml__opik/tests_end_to_end/e2e/agents/uninstrumented/agent.py) | agentRuntime signal |
| agentRuntime | [tests_end_to_end/e2e/agents/known-failing/agent.py](../../../../sources/comet-ml__opik/tests_end_to_end/e2e/agents/known-failing/agent.py) | agentRuntime signal |
| entrypoints | [tests_end_to_end/e2e/services/opik-sdk-driver/src/opik_sdk_driver/main.py](../../../../sources/comet-ml__opik/tests_end_to_end/e2e/services/opik-sdk-driver/src/opik_sdk_driver/main.py) | entrypoints signal |
| entrypoints | [sdks/typescript/src/opik/integrations/opik-vercel/src/index.ts](../../../../sources/comet-ml__opik/sdks/typescript/src/opik/integrations/opik-vercel/src/index.ts) | entrypoints signal |
| entrypoints | [sdks/typescript/src/opik/integrations/opik-otel/src/index.ts](../../../../sources/comet-ml__opik/sdks/typescript/src/opik/integrations/opik-otel/src/index.ts) | entrypoints signal |
| entrypoints | [sdks/typescript/src/opik/integrations/opik-openai/src/index.ts](../../../../sources/comet-ml__opik/sdks/typescript/src/opik/integrations/opik-openai/src/index.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4255 | [tests_end_to_end/e2e/services/opik-sdk-driver/src/opik_sdk_driver/main.py](../../../../sources/comet-ml__opik/tests_end_to_end/e2e/services/opik-sdk-driver/src/opik_sdk_driver/main.py)<br>[sdks/typescript/src/opik/integrations/opik-vercel/src/index.ts](../../../../sources/comet-ml__opik/sdks/typescript/src/opik/integrations/opik-vercel/src/index.ts)<br>[sdks/typescript/src/opik/integrations/opik-otel/src/index.ts](../../../../sources/comet-ml__opik/sdks/typescript/src/opik/integrations/opik-otel/src/index.ts)<br>[sdks/typescript/src/opik/integrations/opik-openai/src/index.ts](../../../../sources/comet-ml__opik/sdks/typescript/src/opik/integrations/opik-openai/src/index.ts)<br>[sdks/typescript/src/opik/integrations/opik-langchain/src/index.ts](../../../../sources/comet-ml__opik/sdks/typescript/src/opik/integrations/opik-langchain/src/index.ts)<br>[sdks/typescript/src/opik/integrations/opik-gemini/src/index.ts](../../../../sources/comet-ml__opik/sdks/typescript/src/opik/integrations/opik-gemini/src/index.ts)<br>[sdks/python/src/opik/cli/__main__.py](../../../../sources/comet-ml__opik/sdks/python/src/opik/cli/__main__.py)<br>[sdks/python/src/opik/cli/main.py](../../../../sources/comet-ml__opik/sdks/python/src/opik/cli/main.py) |
| agentRuntime | 526 | [AGENTS.md](../../../../sources/comet-ml__opik/AGENTS.md)<br>[tests_end_to_end/e2e/agents/README.md](../../../../sources/comet-ml__opik/tests_end_to_end/e2e/agents/README.md)<br>[tests_end_to_end/e2e/agents/uninstrumented/agent.py](../../../../sources/comet-ml__opik/tests_end_to_end/e2e/agents/uninstrumented/agent.py)<br>[tests_end_to_end/e2e/agents/known-failing/agent.py](../../../../sources/comet-ml__opik/tests_end_to_end/e2e/agents/known-failing/agent.py)<br>[tests_end_to_end/e2e/agents/known-failing/harness.ts](../../../../sources/comet-ml__opik/tests_end_to_end/e2e/agents/known-failing/harness.ts)<br>[tests_end_to_end/e2e/agents/known-failing/suite.json](../../../../sources/comet-ml__opik/tests_end_to_end/e2e/agents/known-failing/suite.json)<br>[sdks/typescript/AGENTS.md](../../../../sources/comet-ml__opik/sdks/typescript/AGENTS.md)<br>[sdks/typescript/tests/unit/context.test.ts](../../../../sources/comet-ml__opik/sdks/typescript/tests/unit/context.test.ts) |
| mcp | 36 | [sdks/python/tests/unit/evaluation/suite_evaluators/agentic/test_tool_registry.py](../../../../sources/comet-ml__opik/sdks/python/tests/unit/evaluation/suite_evaluators/agentic/test_tool_registry.py)<br>[sdks/python/tests/unit/configurator/mcp/__init__.py](../../../../sources/comet-ml__opik/sdks/python/tests/unit/configurator/mcp/__init__.py)<br>[sdks/python/tests/unit/configurator/mcp/test_env.py](../../../../sources/comet-ml__opik/sdks/python/tests/unit/configurator/mcp/test_env.py)<br>[sdks/python/tests/unit/configurator/mcp/test_install.py](../../../../sources/comet-ml__opik/sdks/python/tests/unit/configurator/mcp/test_install.py)<br>[sdks/python/tests/unit/configurator/mcp/test_json_config.py](../../../../sources/comet-ml__opik/sdks/python/tests/unit/configurator/mcp/test_json_config.py)<br>[sdks/python/tests/unit/configurator/mcp/test_spec.py](../../../../sources/comet-ml__opik/sdks/python/tests/unit/configurator/mcp/test_spec.py)<br>[sdks/python/tests/unit/configurator/mcp/test_targets.py](../../../../sources/comet-ml__opik/sdks/python/tests/unit/configurator/mcp/test_targets.py)<br>[sdks/python/tests/unit/cli/test_mcp.py](../../../../sources/comet-ml__opik/sdks/python/tests/unit/cli/test_mcp.py) |
| retrieval | 405 | [tests_load/tests/test_trace_span_retrieval.py](../../../../sources/comet-ml__opik/tests_load/tests/test_trace_span_retrieval.py)<br>[tests_end_to_end/e2e/fixtures/index.ts](../../../../sources/comet-ml__opik/tests_end_to_end/e2e/fixtures/index.ts)<br>[tests_end_to_end/e2e/core/sdk/index.ts](../../../../sources/comet-ml__opik/tests_end_to_end/e2e/core/sdk/index.ts)<br>[tests_end_to_end/e2e/core/backend/index.ts](../../../../sources/comet-ml__opik/tests_end_to_end/e2e/core/backend/index.ts)<br>[tests_end_to_end/e2e/core/artifacts/index.ts](../../../../sources/comet-ml__opik/tests_end_to_end/e2e/core/artifacts/index.ts)<br>[sdks/typescript/tests/utils/index.ts](../../../../sources/comet-ml__opik/sdks/typescript/tests/utils/index.ts)<br>[sdks/typescript/src/opik/index.ts](../../../../sources/comet-ml__opik/sdks/typescript/src/opik/index.ts)<br>[sdks/typescript/src/opik/runner/index.ts](../../../../sources/comet-ml__opik/sdks/typescript/src/opik/runner/index.ts) |
| spec | 95 | [tests_load/requirements.txt](../../../../sources/comet-ml__opik/tests_load/requirements.txt)<br>[tests_load/suite/python_sdk/requirements.txt](../../../../sources/comet-ml__opik/tests_load/suite/python_sdk/requirements.txt)<br>[tests_end_to_end/visual-tests/tests/visual-comparison.spec.ts](../../../../sources/comet-ml__opik/tests_end_to_end/visual-tests/tests/visual-comparison.spec.ts)<br>[tests_end_to_end/typescript-tests/tests/seed-for-planner.spec.ts](../../../../sources/comet-ml__opik/tests_end_to_end/typescript-tests/tests/seed-for-planner.spec.ts)<br>[tests_end_to_end/typescript-tests/tests/tracing/span-search.spec.ts](../../../../sources/comet-ml__opik/tests_end_to_end/typescript-tests/tests/tracing/span-search.spec.ts)<br>[tests_end_to_end/typescript-tests/tests/tracing/threads.spec.ts](../../../../sources/comet-ml__opik/tests_end_to_end/typescript-tests/tests/tracing/threads.spec.ts)<br>[tests_end_to_end/typescript-tests/tests/tracing/trace-attachments.spec.ts](../../../../sources/comet-ml__opik/tests_end_to_end/typescript-tests/tests/tracing/trace-attachments.spec.ts)<br>[tests_end_to_end/typescript-tests/tests/tracing/trace-search.spec.ts](../../../../sources/comet-ml__opik/tests_end_to_end/typescript-tests/tests/tracing/trace-search.spec.ts) |
| eval | 2630 | [tests_load/pytest.ini](../../../../sources/comet-ml__opik/tests_load/pytest.ini)<br>[tests_load/README.md](../../../../sources/comet-ml__opik/tests_load/README.md)<br>[tests_load/requirements.txt](../../../../sources/comet-ml__opik/tests_load/requirements.txt)<br>[tests_load/tests/test_image_inference.py](../../../../sources/comet-ml__opik/tests_load/tests/test_image_inference.py)<br>[tests_load/tests/test_images_dataset_sample.py](../../../../sources/comet-ml__opik/tests_load/tests/test_images_dataset_sample.py)<br>[tests_load/tests/test_thread_ingestion.py](../../../../sources/comet-ml__opik/tests_load/tests/test_thread_ingestion.py)<br>[tests_load/tests/test_trace_span_ingestion.py](../../../../sources/comet-ml__opik/tests_load/tests/test_trace_span_ingestion.py)<br>[tests_load/tests/test_trace_span_retrieval.py](../../../../sources/comet-ml__opik/tests_load/tests/test_trace_span_retrieval.py) |
| security | 107 | [sdks/typescript/src/opik/rest_api/serialization/types/Guardrail.ts](../../../../sources/comet-ml__opik/sdks/typescript/src/opik/rest_api/serialization/types/Guardrail.ts)<br>[sdks/typescript/src/opik/rest_api/serialization/types/Permission.ts](../../../../sources/comet-ml__opik/sdks/typescript/src/opik/rest_api/serialization/types/Permission.ts)<br>[sdks/typescript/src/opik/rest_api/api/types/Guardrail.ts](../../../../sources/comet-ml__opik/sdks/typescript/src/opik/rest_api/api/types/Guardrail.ts)<br>[sdks/typescript/src/opik/rest_api/api/types/Permission.ts](../../../../sources/comet-ml__opik/sdks/typescript/src/opik/rest_api/api/types/Permission.ts)<br>[sdks/python/tests/unit/runner/test_stability_guard.py](../../../../sources/comet-ml__opik/sdks/python/tests/unit/runner/test_stability_guard.py)<br>[sdks/python/tests/unit/evaluation/metrics/llm_judges/structure_output_compliance/__init__.py](../../../../sources/comet-ml__opik/sdks/python/tests/unit/evaluation/metrics/llm_judges/structure_output_compliance/__init__.py)<br>[sdks/python/tests/unit/evaluation/metrics/llm_judges/structure_output_compliance/test_metric.py](../../../../sources/comet-ml__opik/sdks/python/tests/unit/evaluation/metrics/llm_judges/structure_output_compliance/test_metric.py)<br>[sdks/python/tests/unit/evaluation/metrics/llm_judges/structure_output_compliance/test_parser.py](../../../../sources/comet-ml__opik/sdks/python/tests/unit/evaluation/metrics/llm_judges/structure_output_compliance/test_parser.py) |
| ci | 79 | [.github/workflows/actionlint.yml](../../../../sources/comet-ml__opik/.github/workflows/actionlint.yml)<br>[.github/workflows/backend_formatting_check.yml](../../../../sources/comet-ml__opik/.github/workflows/backend_formatting_check.yml)<br>[.github/workflows/backend_tests.yml](../../../../sources/comet-ml__opik/.github/workflows/backend_tests.yml)<br>[.github/workflows/build_and_publish_sdk.yaml](../../../../sources/comet-ml__opik/.github/workflows/build_and_publish_sdk.yaml)<br>[.github/workflows/build_and_push_docker.yaml](../../../../sources/comet-ml__opik/.github/workflows/build_and_push_docker.yaml)<br>[.github/workflows/build_apps.yml](../../../../sources/comet-ml__opik/.github/workflows/build_apps.yml)<br>[.github/workflows/cleanup_e2e_docker.yaml](../../../../sources/comet-ml__opik/.github/workflows/cleanup_e2e_docker.yaml)<br>[.github/workflows/clickhouse_migration_cluster_check.yml](../../../../sources/comet-ml__opik/.github/workflows/clickhouse_migration_cluster_check.yml) |
| container | 49 | [deployment/helm_chart/opik/.gitignore](../../../../sources/comet-ml__opik/deployment/helm_chart/opik/.gitignore)<br>[deployment/helm_chart/opik/.helmignore](../../../../sources/comet-ml__opik/deployment/helm_chart/opik/.helmignore)<br>[deployment/helm_chart/opik/Chart.yaml](../../../../sources/comet-ml__opik/deployment/helm_chart/opik/Chart.yaml)<br>[deployment/helm_chart/opik/README.md](../../../../sources/comet-ml__opik/deployment/helm_chart/opik/README.md)<br>[deployment/helm_chart/opik/README.md.gotmpl](../../../../sources/comet-ml__opik/deployment/helm_chart/opik/README.md.gotmpl)<br>[deployment/helm_chart/opik/values.yaml](../../../../sources/comet-ml__opik/deployment/helm_chart/opik/values.yaml)<br>[deployment/helm_chart/opik/templates/_helpers.tpl](../../../../sources/comet-ml__opik/deployment/helm_chart/opik/templates/_helpers.tpl)<br>[deployment/helm_chart/opik/templates/additonal-ca-certs.yaml](../../../../sources/comet-ml__opik/deployment/helm_chart/opik/templates/additonal-ca-certs.yaml) |
| instruction | 10 | [AGENTS.md](../../../../sources/comet-ml__opik/AGENTS.md)<br>[sdks/typescript/AGENTS.md](../../../../sources/comet-ml__opik/sdks/typescript/AGENTS.md)<br>[sdks/python/AGENTS.md](../../../../sources/comet-ml__opik/sdks/python/AGENTS.md)<br>[sdks/opik_optimizer/AGENTS.md](../../../../sources/comet-ml__opik/sdks/opik_optimizer/AGENTS.md)<br>[apps/opik-documentation/AGENTS.md](../../../../sources/comet-ml__opik/apps/opik-documentation/AGENTS.md)<br>[apps/opik-documentation/documentation/fern/docs-v2/integrations/gemini.mdx](../../../../sources/comet-ml__opik/apps/opik-documentation/documentation/fern/docs-v2/integrations/gemini.mdx)<br>[apps/opik-documentation/documentation/fern/docs/tracing/integrations/gemini.mdx](../../../../sources/comet-ml__opik/apps/opik-documentation/documentation/fern/docs/tracing/integrations/gemini.mdx)<br>[apps/opik-backend/AGENTS.md](../../../../sources/comet-ml__opik/apps/opik-backend/AGENTS.md) |
| docs | 408 | [readme_AR.md](../../../../sources/comet-ml__opik/readme_AR.md)<br>[readme_CN.md](../../../../sources/comet-ml__opik/readme_CN.md)<br>[readme_DE.md](../../../../sources/comet-ml__opik/readme_DE.md)<br>[readme_ES.md](../../../../sources/comet-ml__opik/readme_ES.md)<br>[readme_FR.md](../../../../sources/comet-ml__opik/readme_FR.md)<br>[readme_HI.md](../../../../sources/comet-ml__opik/readme_HI.md)<br>[readme_JP.md](../../../../sources/comet-ml__opik/readme_JP.md)<br>[readme_KO.md](../../../../sources/comet-ml__opik/readme_KO.md) |
| config | 63 | [Makefile](../../../../sources/comet-ml__opik/Makefile)<br>[tests_load/requirements.txt](../../../../sources/comet-ml__opik/tests_load/requirements.txt)<br>[tests_load/suite/python_sdk/requirements.txt](../../../../sources/comet-ml__opik/tests_load/suite/python_sdk/requirements.txt)<br>[tests_end_to_end/visual-tests/package.json](../../../../sources/comet-ml__opik/tests_end_to_end/visual-tests/package.json)<br>[tests_end_to_end/visual-tests/tsconfig.json](../../../../sources/comet-ml__opik/tests_end_to_end/visual-tests/tsconfig.json)<br>[tests_end_to_end/typescript-tests/package.json](../../../../sources/comet-ml__opik/tests_end_to_end/typescript-tests/package.json)<br>[tests_end_to_end/typescript-tests/tsconfig.json](../../../../sources/comet-ml__opik/tests_end_to_end/typescript-tests/tsconfig.json)<br>[tests_end_to_end/test-helper-service/requirements.txt](../../../../sources/comet-ml__opik/tests_end_to_end/test-helper-service/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 2630 | [tests_load/pytest.ini](../../../../sources/comet-ml__opik/tests_load/pytest.ini)<br>[tests_load/README.md](../../../../sources/comet-ml__opik/tests_load/README.md)<br>[tests_load/requirements.txt](../../../../sources/comet-ml__opik/tests_load/requirements.txt)<br>[tests_load/tests/test_image_inference.py](../../../../sources/comet-ml__opik/tests_load/tests/test_image_inference.py)<br>[tests_load/tests/test_images_dataset_sample.py](../../../../sources/comet-ml__opik/tests_load/tests/test_images_dataset_sample.py)<br>[tests_load/tests/test_thread_ingestion.py](../../../../sources/comet-ml__opik/tests_load/tests/test_thread_ingestion.py) |
| CI workflows | 79 | [.github/workflows/actionlint.yml](../../../../sources/comet-ml__opik/.github/workflows/actionlint.yml)<br>[.github/workflows/backend_formatting_check.yml](../../../../sources/comet-ml__opik/.github/workflows/backend_formatting_check.yml)<br>[.github/workflows/backend_tests.yml](../../../../sources/comet-ml__opik/.github/workflows/backend_tests.yml)<br>[.github/workflows/build_and_publish_sdk.yaml](../../../../sources/comet-ml__opik/.github/workflows/build_and_publish_sdk.yaml)<br>[.github/workflows/build_and_push_docker.yaml](../../../../sources/comet-ml__opik/.github/workflows/build_and_push_docker.yaml)<br>[.github/workflows/build_apps.yml](../../../../sources/comet-ml__opik/.github/workflows/build_apps.yml) |
| Containers / deploy | 49 | [deployment/helm_chart/opik/.gitignore](../../../../sources/comet-ml__opik/deployment/helm_chart/opik/.gitignore)<br>[deployment/helm_chart/opik/.helmignore](../../../../sources/comet-ml__opik/deployment/helm_chart/opik/.helmignore)<br>[deployment/helm_chart/opik/Chart.yaml](../../../../sources/comet-ml__opik/deployment/helm_chart/opik/Chart.yaml)<br>[deployment/helm_chart/opik/README.md](../../../../sources/comet-ml__opik/deployment/helm_chart/opik/README.md)<br>[deployment/helm_chart/opik/README.md.gotmpl](../../../../sources/comet-ml__opik/deployment/helm_chart/opik/README.md.gotmpl)<br>[deployment/helm_chart/opik/values.yaml](../../../../sources/comet-ml__opik/deployment/helm_chart/opik/values.yaml) |
| Security / policy | 107 | [sdks/typescript/src/opik/rest_api/serialization/types/Guardrail.ts](../../../../sources/comet-ml__opik/sdks/typescript/src/opik/rest_api/serialization/types/Guardrail.ts)<br>[sdks/typescript/src/opik/rest_api/serialization/types/Permission.ts](../../../../sources/comet-ml__opik/sdks/typescript/src/opik/rest_api/serialization/types/Permission.ts)<br>[sdks/typescript/src/opik/rest_api/api/types/Guardrail.ts](../../../../sources/comet-ml__opik/sdks/typescript/src/opik/rest_api/api/types/Guardrail.ts)<br>[sdks/typescript/src/opik/rest_api/api/types/Permission.ts](../../../../sources/comet-ml__opik/sdks/typescript/src/opik/rest_api/api/types/Permission.ts)<br>[sdks/python/tests/unit/runner/test_stability_guard.py](../../../../sources/comet-ml__opik/sdks/python/tests/unit/runner/test_stability_guard.py)<br>[sdks/python/tests/unit/evaluation/metrics/llm_judges/structure_output_compliance/__init__.py](../../../../sources/comet-ml__opik/sdks/python/tests/unit/evaluation/metrics/llm_judges/structure_output_compliance/__init__.py) |
| Agent instructions | 10 | [AGENTS.md](../../../../sources/comet-ml__opik/AGENTS.md)<br>[sdks/typescript/AGENTS.md](../../../../sources/comet-ml__opik/sdks/typescript/AGENTS.md)<br>[sdks/python/AGENTS.md](../../../../sources/comet-ml__opik/sdks/python/AGENTS.md)<br>[sdks/opik_optimizer/AGENTS.md](../../../../sources/comet-ml__opik/sdks/opik_optimizer/AGENTS.md)<br>[apps/opik-documentation/AGENTS.md](../../../../sources/comet-ml__opik/apps/opik-documentation/AGENTS.md)<br>[apps/opik-documentation/documentation/fern/docs-v2/integrations/gemini.mdx](../../../../sources/comet-ml__opik/apps/opik-documentation/documentation/fern/docs-v2/integrations/gemini.mdx) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `sdks/python/tests/unit/evaluation/suite_evaluators/agentic/test_tool_registry.py`, `sdks/python/tests/unit/configurator/mcp/__init__.py`, `sdks/python/tests/unit/configurator/mcp/test_env.py`.
2. Trace execution through entrypoints: `tests_end_to_end/e2e/services/opik-sdk-driver/src/opik_sdk_driver/main.py`, `sdks/typescript/src/opik/integrations/opik-vercel/src/index.ts`, `sdks/typescript/src/opik/integrations/opik-otel/src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `tests_end_to_end/e2e/agents/README.md`, `tests_end_to_end/e2e/agents/uninstrumented/agent.py`.
4. Inspect retrieval/memory/indexing through: `tests_load/tests/test_trace_span_retrieval.py`, `tests_end_to_end/e2e/fixtures/index.ts`, `tests_end_to_end/e2e/core/sdk/index.ts`.
5. Verify behavior through test/eval files: `tests_load/pytest.ini`, `tests_load/README.md`, `tests_load/requirements.txt`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Debug, evaluate, and monitor your LLM applications, RAG systems, and agentic workflows with comprehensive tracing, autom. 핵심 구조 신호는 Python, Makefile, README.md, AGENTS.md, LICENSE, tests이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
