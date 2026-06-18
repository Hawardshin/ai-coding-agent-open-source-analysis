# comet-ml/opik 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Debug, evaluate, and monitor your LLM applications, RAG systems, and agentic workflows with comprehensive tracing, automated evaluations, and production-ready dashboards.

## 요약

- 조사 단위: `sources/comet-ml__opik` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 11,277 files, 2,013 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=sdks/python/tests/unit/evaluation/suite_evaluators/agentic/test_tool_registry.py, sdks/python/tests/unit/configurator/mcp/__init__.py, sdks/python/tests/unit/configurator/mcp/test_env.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | comet-ml/opik |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 19680 |
| Forks | 1524 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/comet-ml__opik](../../../../sources/comet-ml__opik) |
| 기존 보고서 | [reports/global-trending/repositories/comet-ml__opik.md](../../../global-trending/repositories/comet-ml__opik.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 11277 / 2013 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .agents, .claude, .github, .hooks, apps, deployment, extensions, scripts, sdks, tests_end_to_end, tests_load |
| 상위 확장자 | .ts: 3442, .py: 2714, .tsx: 1548, .java: 1541, .mdx: 564, .png: 452, .sql: 184, .md: 154, .rst: 122, .svg: 90, .yml: 83, .json: 55 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 2630 | [tests_load/pytest.ini](../../../../sources/comet-ml__opik/tests_load/pytest.ini)<br>[tests_load/README.md](../../../../sources/comet-ml__opik/tests_load/README.md)<br>[tests_load/requirements.txt](../../../../sources/comet-ml__opik/tests_load/requirements.txt)<br>[tests_load/tests/test_image_inference.py](../../../../sources/comet-ml__opik/tests_load/tests/test_image_inference.py)<br>[tests_load/tests/test_images_dataset_sample.py](../../../../sources/comet-ml__opik/tests_load/tests/test_images_dataset_sample.py)<br>[tests_load/tests/test_thread_ingestion.py](../../../../sources/comet-ml__opik/tests_load/tests/test_thread_ingestion.py) |
| CI workflow | 79 | [.github/workflows/actionlint.yml](../../../../sources/comet-ml__opik/.github/workflows/actionlint.yml)<br>[.github/workflows/backend_formatting_check.yml](../../../../sources/comet-ml__opik/.github/workflows/backend_formatting_check.yml)<br>[.github/workflows/backend_tests.yml](../../../../sources/comet-ml__opik/.github/workflows/backend_tests.yml)<br>[.github/workflows/build_and_publish_sdk.yaml](../../../../sources/comet-ml__opik/.github/workflows/build_and_publish_sdk.yaml)<br>[.github/workflows/build_and_push_docker.yaml](../../../../sources/comet-ml__opik/.github/workflows/build_and_push_docker.yaml)<br>[.github/workflows/build_apps.yml](../../../../sources/comet-ml__opik/.github/workflows/build_apps.yml) |
| 컨테이너/배포 | 49 | [deployment/helm_chart/opik/.gitignore](../../../../sources/comet-ml__opik/deployment/helm_chart/opik/.gitignore)<br>[deployment/helm_chart/opik/.helmignore](../../../../sources/comet-ml__opik/deployment/helm_chart/opik/.helmignore)<br>[deployment/helm_chart/opik/Chart.yaml](../../../../sources/comet-ml__opik/deployment/helm_chart/opik/Chart.yaml)<br>[deployment/helm_chart/opik/README.md](../../../../sources/comet-ml__opik/deployment/helm_chart/opik/README.md)<br>[deployment/helm_chart/opik/README.md.gotmpl](../../../../sources/comet-ml__opik/deployment/helm_chart/opik/README.md.gotmpl)<br>[deployment/helm_chart/opik/values.yaml](../../../../sources/comet-ml__opik/deployment/helm_chart/opik/values.yaml) |
| 보안/정책 | 107 | [sdks/typescript/src/opik/rest_api/serialization/types/Guardrail.ts](../../../../sources/comet-ml__opik/sdks/typescript/src/opik/rest_api/serialization/types/Guardrail.ts)<br>[sdks/typescript/src/opik/rest_api/serialization/types/Permission.ts](../../../../sources/comet-ml__opik/sdks/typescript/src/opik/rest_api/serialization/types/Permission.ts)<br>[sdks/typescript/src/opik/rest_api/api/types/Guardrail.ts](../../../../sources/comet-ml__opik/sdks/typescript/src/opik/rest_api/api/types/Guardrail.ts)<br>[sdks/typescript/src/opik/rest_api/api/types/Permission.ts](../../../../sources/comet-ml__opik/sdks/typescript/src/opik/rest_api/api/types/Permission.ts)<br>[sdks/python/tests/unit/runner/test_stability_guard.py](../../../../sources/comet-ml__opik/sdks/python/tests/unit/runner/test_stability_guard.py)<br>[sdks/python/tests/unit/evaluation/metrics/llm_judges/structure_output_compliance/__init__.py](../../../../sources/comet-ml__opik/sdks/python/tests/unit/evaluation/metrics/llm_judges/structure_output_compliance/__init__.py) |
| 에이전트 지시문 | 10 | [AGENTS.md](../../../../sources/comet-ml__opik/AGENTS.md)<br>[sdks/typescript/AGENTS.md](../../../../sources/comet-ml__opik/sdks/typescript/AGENTS.md)<br>[sdks/python/AGENTS.md](../../../../sources/comet-ml__opik/sdks/python/AGENTS.md)<br>[sdks/opik_optimizer/AGENTS.md](../../../../sources/comet-ml__opik/sdks/opik_optimizer/AGENTS.md)<br>[apps/opik-documentation/AGENTS.md](../../../../sources/comet-ml__opik/apps/opik-documentation/AGENTS.md)<br>[apps/opik-documentation/documentation/fern/docs-v2/integrations/gemini.mdx](../../../../sources/comet-ml__opik/apps/opik-documentation/documentation/fern/docs-v2/integrations/gemini.mdx) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `sdks/python/tests/unit/evaluation/suite_evaluators/agentic/test_tool_registry.py`, `sdks/python/tests/unit/configurator/mcp/__init__.py`, `sdks/python/tests/unit/configurator/mcp/test_env.py`.
2. entrypoint를 따라 실행 흐름 확인: `tests_end_to_end/e2e/services/opik-sdk-driver/src/opik_sdk_driver/main.py`, `sdks/typescript/src/opik/integrations/opik-vercel/src/index.ts`, `sdks/typescript/src/opik/integrations/opik-otel/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tests_end_to_end/e2e/agents/README.md`, `tests_end_to_end/e2e/agents/uninstrumented/agent.py`.
4. retrieval/memory/indexing 확인: `tests_load/tests/test_trace_span_retrieval.py`, `tests_end_to_end/e2e/fixtures/index.ts`, `tests_end_to_end/e2e/core/sdk/index.ts`.
5. test/eval 파일로 동작 검증: `tests_load/pytest.ini`, `tests_load/README.md`, `tests_load/requirements.txt`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Debug, evaluate, and monitor your LLM applications, RAG systems, and agentic workflows with comprehensive tracing, autom. 핵심 구조 신호는 Python, Makefile, README.md, AGENTS.md, LICENSE, tests이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
