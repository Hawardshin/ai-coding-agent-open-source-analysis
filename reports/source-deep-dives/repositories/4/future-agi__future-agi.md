# future-agi/future-agi Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Open-source, end-to-end platform for evaluating, observing, and improving LLM and AI agent applications. Tracing · Evals · Simulations · Datasets · Gateway · Guardrails. Self-hostable. Apache 2.0.

## 요약

- 조사 단위: `sources/future-agi__future-agi` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 8,102 files, 1,292 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=futureagi/mcp_server/__init__.py, futureagi/mcp_server/admin.py, futureagi/mcp_server/apps.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | future-agi/future-agi |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 1182 |
| Forks | 260 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/future-agi__future-agi](../../../../sources/future-agi__future-agi) |
| Existing report | [reports/global-trending/repositories/future-agi__future-agi.md](../../../global-trending/repositories/future-agi__future-agi.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 8102 / 1292 |
| Max observed depth | 9 |
| Top directories | .github, .husky, agentcc-gateway, bin, deploy, frontend, futureagi |
| Top extensions | .jsx: 2696, .py: 2304, .js: 779, .bru: 727, .svg: 650, .go: 380, .yaml: 165, .png: 85, .webp: 45, .css: 39, .html: 36, .yml: 35 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| agentcc-gateway | top-level component | 1 |
| bin | top-level component | 1 |
| deploy | deployment surface | 1 |
| frontend | top-level component | 1 |
| futureagi | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | prepare | husky |
| quality | package.json | lint-staged | lint-staged |


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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
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
| instruction | 0 | not obvious |
| docs | 31 | [README.md](../../../../sources/future-agi__future-agi/README.md)<br>[futureagi/README.md](../../../../sources/future-agi__future-agi/futureagi/README.md)<br>[futureagi/tfc/temporal/simulate/README.md](../../../../sources/future-agi__future-agi/futureagi/tfc/temporal/simulate/README.md)<br>[futureagi/simulate/README.md](../../../../sources/future-agi__future-agi/futureagi/simulate/README.md)<br>[futureagi/model_serving/README.md](../../../../sources/future-agi__future-agi/futureagi/model_serving/README.md)<br>[futureagi/model_serving/docs/bruno.json](../../../../sources/future-agi__future-agi/futureagi/model_serving/docs/bruno.json)<br>[futureagi/model_serving/docs/README.md](../../../../sources/future-agi__future-agi/futureagi/model_serving/docs/README.md)<br>[futureagi/model_serving/docs/environments/Local.bru](../../../../sources/future-agi__future-agi/futureagi/model_serving/docs/environments/Local.bru) |
| config | 14 | [package.json](../../../../sources/future-agi__future-agi/package.json)<br>[futureagi/Makefile](../../../../sources/future-agi__future-agi/futureagi/Makefile)<br>[futureagi/pyproject.toml](../../../../sources/future-agi__future-agi/futureagi/pyproject.toml)<br>[futureagi/requirements-test.txt](../../../../sources/future-agi__future-agi/futureagi/requirements-test.txt)<br>[futureagi/requirements.txt](../../../../sources/future-agi__future-agi/futureagi/requirements.txt)<br>[futureagi/uv.lock](../../../../sources/future-agi__future-agi/futureagi/uv.lock)<br>[futureagi/model_serving/Makefile](../../../../sources/future-agi__future-agi/futureagi/model_serving/Makefile)<br>[futureagi/model_serving/pyproject.toml](../../../../sources/future-agi__future-agi/futureagi/model_serving/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1466 | [futureagi/docker-compose.observability.dev.yml](../../../../sources/future-agi__future-agi/futureagi/docker-compose.observability.dev.yml)<br>[futureagi/docker-compose.observability.yml](../../../../sources/future-agi__future-agi/futureagi/docker-compose.observability.yml)<br>[futureagi/docker-compose.sdk-test.yml](../../../../sources/future-agi__future-agi/futureagi/docker-compose.sdk-test.yml)<br>[futureagi/docker-compose.test-serving.yml](../../../../sources/future-agi__future-agi/futureagi/docker-compose.test-serving.yml)<br>[futureagi/docker-compose.test.yml](../../../../sources/future-agi__future-agi/futureagi/docker-compose.test.yml)<br>[futureagi/requirements-test.txt](../../../../sources/future-agi__future-agi/futureagi/requirements-test.txt) |
| CI workflows | 20 | [futureagi/agentic_eval/.github/workflows/auto-approve-hotfix.yml](../../../../sources/future-agi__future-agi/futureagi/agentic_eval/.github/workflows/auto-approve-hotfix.yml)<br>[futureagi/.github/workflows/auto-approve-hotfix.yml](../../../../sources/future-agi__future-agi/futureagi/.github/workflows/auto-approve-hotfix.yml)<br>[futureagi/.github/workflows/pr-tests.yml](../../../../sources/future-agi__future-agi/futureagi/.github/workflows/pr-tests.yml)<br>[.github/workflows/branch-name-check.yml](../../../../sources/future-agi__future-agi/.github/workflows/branch-name-check.yml)<br>[.github/workflows/frontend-auto-approve-hotfix.yml](../../../../sources/future-agi__future-agi/.github/workflows/frontend-auto-approve-hotfix.yml)<br>[.github/workflows/frontend-deploy-eu.yaml](../../../../sources/future-agi__future-agi/.github/workflows/frontend-deploy-eu.yaml) |
| Containers / deploy | 39 | [docker-compose.dev.yml](../../../../sources/future-agi__future-agi/docker-compose.dev.yml)<br>[docker-compose.frontend.yml](../../../../sources/future-agi__future-agi/docker-compose.frontend.yml)<br>[docker-compose.yml](../../../../sources/future-agi__future-agi/docker-compose.yml)<br>[futureagi/docker-compose.dev.yml](../../../../sources/future-agi__future-agi/futureagi/docker-compose.dev.yml)<br>[futureagi/docker-compose.observability.dev.yml](../../../../sources/future-agi__future-agi/futureagi/docker-compose.observability.dev.yml)<br>[futureagi/docker-compose.observability.yml](../../../../sources/future-agi__future-agi/futureagi/docker-compose.observability.yml) |
| Security / policy | 143 | [SECURITY.md](../../../../sources/future-agi__future-agi/SECURITY.md)<br>[futureagi/tfc/utils/audit.py](../../../../sources/future-agi__future-agi/futureagi/tfc/utils/audit.py)<br>[futureagi/tfc/temporal/drop_in/tests/test_retry_policy_propagation.py](../../../../sources/future-agi__future-agi/futureagi/tfc/temporal/drop_in/tests/test_retry_policy_propagation.py)<br>[futureagi/tfc/permissions/rbac.py](../../../../sources/future-agi__future-agi/futureagi/tfc/permissions/rbac.py)<br>[futureagi/tfc/middleware/auth_monitoring.py](../../../../sources/future-agi__future-agi/futureagi/tfc/middleware/auth_monitoring.py)<br>[futureagi/tfc/middleware/jwt_auth.py](../../../../sources/future-agi__future-agi/futureagi/tfc/middleware/jwt_auth.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `futureagi/mcp_server/__init__.py`, `futureagi/mcp_server/admin.py`, `futureagi/mcp_server/apps.py`.
2. Trace execution through entrypoints: `futureagi/model_serving/app/main.py`, `futureagi/code-executor/server.py`, `futureagi/bin/check_mypy.sh`.
3. Map agent/tool runtime through: `futureagi/tracer/services/clickhouse/query_builders/agent_graph.py`, `futureagi/tfc/temporal/drop_in/runner.py`, `futureagi/tfc/temporal/drop_in/workflow.py`.
4. Inspect retrieval/memory/indexing through: `futureagi/tracer/services/clickhouse/query_builders/agent_graph.py`, `futureagi/tracer/services/clickhouse/query_builders/annotation_graph.py`, `futureagi/tracer/migrations/0036_add_graph_query_indexes.py`.
5. Verify behavior through test/eval files: `futureagi/docker-compose.observability.dev.yml`, `futureagi/docker-compose.observability.yml`, `futureagi/docker-compose.sdk-test.yml`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Open source, end to end platform for evaluating, observing, and improving LLM and AI agent applications. Tracing · Evals. 핵심 구조 신호는 Python, package.json, docker-compose.yml, README.md, LICENSE, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
