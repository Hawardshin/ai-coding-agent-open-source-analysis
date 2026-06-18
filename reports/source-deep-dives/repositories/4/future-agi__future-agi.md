# future-agi/future-agi 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Open-source, end-to-end platform for evaluating, observing, and improving LLM and AI agent applications. Tracing · Evals · Simulations · Datasets · Gateway · Guardrails. Self-hostable. Apache 2.0.

## 요약

- 조사 단위: `sources/future-agi__future-agi` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 8,102 files, 1,292 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=futureagi/mcp_server/__init__.py, futureagi/mcp_server/admin.py, futureagi/mcp_server/apps.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | future-agi/future-agi |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 1182 |
| Forks | 260 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/future-agi__future-agi](../../../../sources/future-agi__future-agi) |
| 기존 보고서 | [reports/global-trending/repositories/future-agi__future-agi.md](../../../global-trending/repositories/future-agi__future-agi.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 8102 / 1292 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .github, .husky, agentcc-gateway, bin, deploy, frontend, futureagi |
| 상위 확장자 | .jsx: 2696, .py: 2304, .js: 779, .bru: 727, .svg: 650, .go: 380, .yaml: 165, .png: 85, .webp: 45, .css: 39, .html: 36, .yml: 35 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| agentcc-gateway | top-level component | 1 |
| bin | top-level component | 1 |
| deploy | deployment surface | 1 |
| frontend | top-level component | 1 |
| futureagi | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | prepare | husky |
| quality | package.json | lint-staged | lint-staged |


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
| mcp | [futureagi/mcp_server/__init__.py](../../../../sources/future-agi__future-agi/futureagi/mcp_server/__init__.py) | mcp signal |
| mcp | [futureagi/mcp_server/admin.py](../../../../sources/future-agi__future-agi/futureagi/mcp_server/admin.py) | mcp signal |
| mcp | [futureagi/mcp_server/apps.py](../../../../sources/future-agi__future-agi/futureagi/mcp_server/apps.py) | mcp signal |
| mcp | [futureagi/mcp_server/constants.py](../../../../sources/future-agi__future-agi/futureagi/mcp_server/constants.py) | mcp signal |
| agentRuntime | [futureagi/tracer/services/clickhouse/query_builders/agent_graph.py](../../../../sources/future-agi__future-agi/futureagi/tracer/services/clickhouse/query_builders/agent_graph.py) | agentRuntime signal |
| agentRuntime | [futureagi/tfc/temporal/drop_in/runner.py](../../../../sources/future-agi__future-agi/futureagi/tfc/temporal/drop_in/runner.py) | agentRuntime signal |
| agentRuntime | [futureagi/tfc/temporal/drop_in/workflow.py](../../../../sources/future-agi__future-agi/futureagi/tfc/temporal/drop_in/workflow.py) | agentRuntime signal |
| agentRuntime | [futureagi/tfc/temporal/agent_prompt_optimiser/__init__.py](../../../../sources/future-agi__future-agi/futureagi/tfc/temporal/agent_prompt_optimiser/__init__.py) | agentRuntime signal |
| entrypoints | [futureagi/model_serving/app/main.py](../../../../sources/future-agi__future-agi/futureagi/model_serving/app/main.py) | entrypoints signal |
| entrypoints | [futureagi/code-executor/server.py](../../../../sources/future-agi__future-agi/futureagi/code-executor/server.py) | entrypoints signal |
| entrypoints | [futureagi/bin/check_mypy.sh](../../../../sources/future-agi__future-agi/futureagi/bin/check_mypy.sh) | entrypoints signal |
| entrypoints | [futureagi/bin/generate_mypy_baseline.sh](../../../../sources/future-agi__future-agi/futureagi/bin/generate_mypy_baseline.sh) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 23 | [futureagi/model_serving/app/main.py](../../../../sources/future-agi__future-agi/futureagi/model_serving/app/main.py)<br>[futureagi/code-executor/server.py](../../../../sources/future-agi__future-agi/futureagi/code-executor/server.py)<br>[futureagi/bin/check_mypy.sh](../../../../sources/future-agi__future-agi/futureagi/bin/check_mypy.sh)<br>[futureagi/bin/generate_mypy_baseline.sh](../../../../sources/future-agi__future-agi/futureagi/bin/generate_mypy_baseline.sh)<br>[futureagi/bin/run_tests_docker.sh](../../../../sources/future-agi__future-agi/futureagi/bin/run_tests_docker.sh)<br>[futureagi/bin/setup-pre-commit.sh](../../../../sources/future-agi__future-agi/futureagi/bin/setup-pre-commit.sh)<br>[futureagi/bin/temporal-worker](../../../../sources/future-agi__future-agi/futureagi/bin/temporal-worker)<br>[futureagi/bin/test](../../../../sources/future-agi__future-agi/futureagi/bin/test) |
| agentRuntime | 945 | [futureagi/tracer/services/clickhouse/query_builders/agent_graph.py](../../../../sources/future-agi__future-agi/futureagi/tracer/services/clickhouse/query_builders/agent_graph.py)<br>[futureagi/tfc/temporal/drop_in/runner.py](../../../../sources/future-agi__future-agi/futureagi/tfc/temporal/drop_in/runner.py)<br>[futureagi/tfc/temporal/drop_in/workflow.py](../../../../sources/future-agi__future-agi/futureagi/tfc/temporal/drop_in/workflow.py)<br>[futureagi/tfc/temporal/agent_prompt_optimiser/__init__.py](../../../../sources/future-agi__future-agi/futureagi/tfc/temporal/agent_prompt_optimiser/__init__.py)<br>[futureagi/tfc/temporal/agent_prompt_optimiser/activities.py](../../../../sources/future-agi__future-agi/futureagi/tfc/temporal/agent_prompt_optimiser/activities.py)<br>[futureagi/tfc/temporal/agent_prompt_optimiser/client.py](../../../../sources/future-agi__future-agi/futureagi/tfc/temporal/agent_prompt_optimiser/client.py)<br>[futureagi/tfc/temporal/agent_prompt_optimiser/eval_activities.py](../../../../sources/future-agi__future-agi/futureagi/tfc/temporal/agent_prompt_optimiser/eval_activities.py)<br>[futureagi/tfc/temporal/agent_prompt_optimiser/types.py](../../../../sources/future-agi__future-agi/futureagi/tfc/temporal/agent_prompt_optimiser/types.py) |
| mcp | 80 | [futureagi/mcp_server/__init__.py](../../../../sources/future-agi__future-agi/futureagi/mcp_server/__init__.py)<br>[futureagi/mcp_server/admin.py](../../../../sources/future-agi__future-agi/futureagi/mcp_server/admin.py)<br>[futureagi/mcp_server/apps.py](../../../../sources/future-agi__future-agi/futureagi/mcp_server/apps.py)<br>[futureagi/mcp_server/constants.py](../../../../sources/future-agi__future-agi/futureagi/mcp_server/constants.py)<br>[futureagi/mcp_server/exceptions.py](../../../../sources/future-agi__future-agi/futureagi/mcp_server/exceptions.py)<br>[futureagi/mcp_server/mcp_app.py](../../../../sources/future-agi__future-agi/futureagi/mcp_server/mcp_app.py)<br>[futureagi/mcp_server/oauth_provider.py](../../../../sources/future-agi__future-agi/futureagi/mcp_server/oauth_provider.py)<br>[futureagi/mcp_server/oauth_utils.py](../../../../sources/future-agi__future-agi/futureagi/mcp_server/oauth_utils.py) |
| retrieval | 264 | [futureagi/tracer/services/clickhouse/query_builders/agent_graph.py](../../../../sources/future-agi__future-agi/futureagi/tracer/services/clickhouse/query_builders/agent_graph.py)<br>[futureagi/tracer/services/clickhouse/query_builders/annotation_graph.py](../../../../sources/future-agi__future-agi/futureagi/tracer/services/clickhouse/query_builders/annotation_graph.py)<br>[futureagi/tracer/migrations/0036_add_graph_query_indexes.py](../../../../sources/future-agi__future-agi/futureagi/tracer/migrations/0036_add_graph_query_indexes.py)<br>[futureagi/tfc/templates/admin/index.html](../../../../sources/future-agi__future-agi/futureagi/tfc/templates/admin/index.html)<br>[futureagi/simulate/models/scenario_graph.py](../../../../sources/future-agi__future-agi/futureagi/simulate/models/scenario_graph.py)<br>[futureagi/model_serving/app/servable_models/embedding_model.py](../../../../sources/future-agi__future-agi/futureagi/model_serving/app/servable_models/embedding_model.py)<br>[futureagi/model_serving/app/servable_models/embedding_models.py](../../../../sources/future-agi__future-agi/futureagi/model_serving/app/servable_models/embedding_models.py)<br>[futureagi/model_hub/utils/ground_truth_retrieval.py](../../../../sources/future-agi__future-agi/futureagi/model_hub/utils/ground_truth_retrieval.py) |
| spec | 6 | [futureagi/requirements-test.txt](../../../../sources/future-agi__future-agi/futureagi/requirements-test.txt)<br>[futureagi/requirements.txt](../../../../sources/future-agi__future-agi/futureagi/requirements.txt)<br>[futureagi/model_serving/requirements.txt](../../../../sources/future-agi__future-agi/futureagi/model_serving/requirements.txt)<br>[futureagi/agentic_eval/requirements-test.txt](../../../../sources/future-agi__future-agi/futureagi/agentic_eval/requirements-test.txt)<br>[frontend/public/assets/icons/home/ic_design.svg](../../../../sources/future-agi__future-agi/frontend/public/assets/icons/home/ic_design.svg)<br>[.github/assets/architecture.svg](../../../../sources/future-agi__future-agi/.github/assets/architecture.svg) |
| eval | 1466 | [futureagi/docker-compose.observability.dev.yml](../../../../sources/future-agi__future-agi/futureagi/docker-compose.observability.dev.yml)<br>[futureagi/docker-compose.observability.yml](../../../../sources/future-agi__future-agi/futureagi/docker-compose.observability.yml)<br>[futureagi/docker-compose.sdk-test.yml](../../../../sources/future-agi__future-agi/futureagi/docker-compose.sdk-test.yml)<br>[futureagi/docker-compose.test-serving.yml](../../../../sources/future-agi__future-agi/futureagi/docker-compose.test-serving.yml)<br>[futureagi/docker-compose.test.yml](../../../../sources/future-agi__future-agi/futureagi/docker-compose.test.yml)<br>[futureagi/requirements-test.txt](../../../../sources/future-agi__future-agi/futureagi/requirements-test.txt)<br>[futureagi/tracer/views/custom_eval_config.py](../../../../sources/future-agi__future-agi/futureagi/tracer/views/custom_eval_config.py)<br>[futureagi/tracer/views/eval_task.py](../../../../sources/future-agi__future-agi/futureagi/tracer/views/eval_task.py) |
| security | 143 | [SECURITY.md](../../../../sources/future-agi__future-agi/SECURITY.md)<br>[futureagi/tfc/utils/audit.py](../../../../sources/future-agi__future-agi/futureagi/tfc/utils/audit.py)<br>[futureagi/tfc/temporal/drop_in/tests/test_retry_policy_propagation.py](../../../../sources/future-agi__future-agi/futureagi/tfc/temporal/drop_in/tests/test_retry_policy_propagation.py)<br>[futureagi/tfc/permissions/rbac.py](../../../../sources/future-agi__future-agi/futureagi/tfc/permissions/rbac.py)<br>[futureagi/tfc/middleware/auth_monitoring.py](../../../../sources/future-agi__future-agi/futureagi/tfc/middleware/auth_monitoring.py)<br>[futureagi/tfc/middleware/jwt_auth.py](../../../../sources/future-agi__future-agi/futureagi/tfc/middleware/jwt_auth.py)<br>[futureagi/simulate/migrations/0044_agentdefinition_webhook_secret.py](../../../../sources/future-agi__future-agi/futureagi/simulate/migrations/0044_agentdefinition_webhook_secret.py)<br>[futureagi/simulate/migrations/0046_remove_agentdefinition_webhook_secret.py](../../../../sources/future-agi__future-agi/futureagi/simulate/migrations/0046_remove_agentdefinition_webhook_secret.py) |
| ci | 20 | [futureagi/agentic_eval/.github/workflows/auto-approve-hotfix.yml](../../../../sources/future-agi__future-agi/futureagi/agentic_eval/.github/workflows/auto-approve-hotfix.yml)<br>[futureagi/.github/workflows/auto-approve-hotfix.yml](../../../../sources/future-agi__future-agi/futureagi/.github/workflows/auto-approve-hotfix.yml)<br>[futureagi/.github/workflows/pr-tests.yml](../../../../sources/future-agi__future-agi/futureagi/.github/workflows/pr-tests.yml)<br>[.github/workflows/branch-name-check.yml](../../../../sources/future-agi__future-agi/.github/workflows/branch-name-check.yml)<br>[.github/workflows/frontend-auto-approve-hotfix.yml](../../../../sources/future-agi__future-agi/.github/workflows/frontend-auto-approve-hotfix.yml)<br>[.github/workflows/frontend-deploy-eu.yaml](../../../../sources/future-agi__future-agi/.github/workflows/frontend-deploy-eu.yaml)<br>[.github/workflows/frontend-deploy-gcp.yaml](../../../../sources/future-agi__future-agi/.github/workflows/frontend-deploy-gcp.yaml)<br>[.github/workflows/frontend-dev-cdn.yaml](../../../../sources/future-agi__future-agi/.github/workflows/frontend-dev-cdn.yaml) |
| container | 39 | [docker-compose.dev.yml](../../../../sources/future-agi__future-agi/docker-compose.dev.yml)<br>[docker-compose.frontend.yml](../../../../sources/future-agi__future-agi/docker-compose.frontend.yml)<br>[docker-compose.yml](../../../../sources/future-agi__future-agi/docker-compose.yml)<br>[futureagi/docker-compose.dev.yml](../../../../sources/future-agi__future-agi/futureagi/docker-compose.dev.yml)<br>[futureagi/docker-compose.observability.dev.yml](../../../../sources/future-agi__future-agi/futureagi/docker-compose.observability.dev.yml)<br>[futureagi/docker-compose.observability.yml](../../../../sources/future-agi__future-agi/futureagi/docker-compose.observability.yml)<br>[futureagi/docker-compose.peerdb.yml](../../../../sources/future-agi__future-agi/futureagi/docker-compose.peerdb.yml)<br>[futureagi/docker-compose.sdk-test.yml](../../../../sources/future-agi__future-agi/futureagi/docker-compose.sdk-test.yml) |
| instruction | 0 | 명확하지 않음 |
| docs | 31 | [README.md](../../../../sources/future-agi__future-agi/README.md)<br>[futureagi/README.md](../../../../sources/future-agi__future-agi/futureagi/README.md)<br>[futureagi/tfc/temporal/simulate/README.md](../../../../sources/future-agi__future-agi/futureagi/tfc/temporal/simulate/README.md)<br>[futureagi/simulate/README.md](../../../../sources/future-agi__future-agi/futureagi/simulate/README.md)<br>[futureagi/model_serving/README.md](../../../../sources/future-agi__future-agi/futureagi/model_serving/README.md)<br>[futureagi/model_serving/docs/bruno.json](../../../../sources/future-agi__future-agi/futureagi/model_serving/docs/bruno.json)<br>[futureagi/model_serving/docs/README.md](../../../../sources/future-agi__future-agi/futureagi/model_serving/docs/README.md)<br>[futureagi/model_serving/docs/environments/Local.bru](../../../../sources/future-agi__future-agi/futureagi/model_serving/docs/environments/Local.bru) |
| config | 14 | [package.json](../../../../sources/future-agi__future-agi/package.json)<br>[futureagi/Makefile](../../../../sources/future-agi__future-agi/futureagi/Makefile)<br>[futureagi/pyproject.toml](../../../../sources/future-agi__future-agi/futureagi/pyproject.toml)<br>[futureagi/requirements-test.txt](../../../../sources/future-agi__future-agi/futureagi/requirements-test.txt)<br>[futureagi/requirements.txt](../../../../sources/future-agi__future-agi/futureagi/requirements.txt)<br>[futureagi/uv.lock](../../../../sources/future-agi__future-agi/futureagi/uv.lock)<br>[futureagi/model_serving/Makefile](../../../../sources/future-agi__future-agi/futureagi/model_serving/Makefile)<br>[futureagi/model_serving/pyproject.toml](../../../../sources/future-agi__future-agi/futureagi/model_serving/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1466 | [futureagi/docker-compose.observability.dev.yml](../../../../sources/future-agi__future-agi/futureagi/docker-compose.observability.dev.yml)<br>[futureagi/docker-compose.observability.yml](../../../../sources/future-agi__future-agi/futureagi/docker-compose.observability.yml)<br>[futureagi/docker-compose.sdk-test.yml](../../../../sources/future-agi__future-agi/futureagi/docker-compose.sdk-test.yml)<br>[futureagi/docker-compose.test-serving.yml](../../../../sources/future-agi__future-agi/futureagi/docker-compose.test-serving.yml)<br>[futureagi/docker-compose.test.yml](../../../../sources/future-agi__future-agi/futureagi/docker-compose.test.yml)<br>[futureagi/requirements-test.txt](../../../../sources/future-agi__future-agi/futureagi/requirements-test.txt) |
| CI workflow | 20 | [futureagi/agentic_eval/.github/workflows/auto-approve-hotfix.yml](../../../../sources/future-agi__future-agi/futureagi/agentic_eval/.github/workflows/auto-approve-hotfix.yml)<br>[futureagi/.github/workflows/auto-approve-hotfix.yml](../../../../sources/future-agi__future-agi/futureagi/.github/workflows/auto-approve-hotfix.yml)<br>[futureagi/.github/workflows/pr-tests.yml](../../../../sources/future-agi__future-agi/futureagi/.github/workflows/pr-tests.yml)<br>[.github/workflows/branch-name-check.yml](../../../../sources/future-agi__future-agi/.github/workflows/branch-name-check.yml)<br>[.github/workflows/frontend-auto-approve-hotfix.yml](../../../../sources/future-agi__future-agi/.github/workflows/frontend-auto-approve-hotfix.yml)<br>[.github/workflows/frontend-deploy-eu.yaml](../../../../sources/future-agi__future-agi/.github/workflows/frontend-deploy-eu.yaml) |
| 컨테이너/배포 | 39 | [docker-compose.dev.yml](../../../../sources/future-agi__future-agi/docker-compose.dev.yml)<br>[docker-compose.frontend.yml](../../../../sources/future-agi__future-agi/docker-compose.frontend.yml)<br>[docker-compose.yml](../../../../sources/future-agi__future-agi/docker-compose.yml)<br>[futureagi/docker-compose.dev.yml](../../../../sources/future-agi__future-agi/futureagi/docker-compose.dev.yml)<br>[futureagi/docker-compose.observability.dev.yml](../../../../sources/future-agi__future-agi/futureagi/docker-compose.observability.dev.yml)<br>[futureagi/docker-compose.observability.yml](../../../../sources/future-agi__future-agi/futureagi/docker-compose.observability.yml) |
| 보안/정책 | 143 | [SECURITY.md](../../../../sources/future-agi__future-agi/SECURITY.md)<br>[futureagi/tfc/utils/audit.py](../../../../sources/future-agi__future-agi/futureagi/tfc/utils/audit.py)<br>[futureagi/tfc/temporal/drop_in/tests/test_retry_policy_propagation.py](../../../../sources/future-agi__future-agi/futureagi/tfc/temporal/drop_in/tests/test_retry_policy_propagation.py)<br>[futureagi/tfc/permissions/rbac.py](../../../../sources/future-agi__future-agi/futureagi/tfc/permissions/rbac.py)<br>[futureagi/tfc/middleware/auth_monitoring.py](../../../../sources/future-agi__future-agi/futureagi/tfc/middleware/auth_monitoring.py)<br>[futureagi/tfc/middleware/jwt_auth.py](../../../../sources/future-agi__future-agi/futureagi/tfc/middleware/jwt_auth.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `futureagi/mcp_server/__init__.py`, `futureagi/mcp_server/admin.py`, `futureagi/mcp_server/apps.py`.
2. entrypoint를 따라 실행 흐름 확인: `futureagi/model_serving/app/main.py`, `futureagi/code-executor/server.py`, `futureagi/bin/check_mypy.sh`.
3. agent/tool runtime 매핑: `futureagi/tracer/services/clickhouse/query_builders/agent_graph.py`, `futureagi/tfc/temporal/drop_in/runner.py`, `futureagi/tfc/temporal/drop_in/workflow.py`.
4. retrieval/memory/indexing 확인: `futureagi/tracer/services/clickhouse/query_builders/agent_graph.py`, `futureagi/tracer/services/clickhouse/query_builders/annotation_graph.py`, `futureagi/tracer/migrations/0036_add_graph_query_indexes.py`.
5. test/eval 파일로 동작 검증: `futureagi/docker-compose.observability.dev.yml`, `futureagi/docker-compose.observability.yml`, `futureagi/docker-compose.sdk-test.yml`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Open source, end to end platform for evaluating, observing, and improving LLM and AI agent applications. Tracing · Evals. 핵심 구조 신호는 Python, package.json, docker-compose.yml, README.md, LICENSE, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
