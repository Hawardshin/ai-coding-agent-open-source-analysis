# pipeshub-ai/pipeshub-ai Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

PipesHub is a fully extensible and explainable workplace AI platform for enterprise search and workflow automation

## 요약

- 조사 단위: `sources/pipeshub-ai__pipeshub-ai` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 3,438 files, 1,025 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=frontend/electron/main.ts, backend/nodejs/apps/src/app.ts, backend/nodejs/apps/src/index.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | pipeshub-ai/pipeshub-ai |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 2989 |
| Forks | 465 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/pipeshub-ai__pipeshub-ai](../../../../sources/pipeshub-ai__pipeshub-ai) |
| Existing report | [reports/global-trending/repositories/pipeshub-ai__pipeshub-ai.md](../../../global-trending/repositories/pipeshub-ai__pipeshub-ai.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 3438 / 1025 |
| Max observed depth | 10 |
| Top directories | .gemini, .github, backend, deployment, docs, frontend, integration-tests, logs, scripts |
| Top extensions | .py: 1457, .ts: 996, .tsx: 431, .svg: 236, .md: 116, .json: 60, .yaml: 43, .yml: 19, (none): 19, .hbs: 12, .mjs: 9, .otf: 6 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 12 |
| .github | ci surface | 1 |
| backend | top-level component | 1 |
| deployment | deployment surface | 1 |
| frontend | top-level component | 1 |
| integration-tests | validation surface | 1 |
| logs | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


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
| entrypoints | [frontend/electron/main.ts](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/electron/main.ts) | entrypoints signal |
| entrypoints | [backend/nodejs/apps/src/app.ts](../../../../sources/pipeshub-ai__pipeshub-ai/backend/nodejs/apps/src/app.ts) | entrypoints signal |
| entrypoints | [backend/nodejs/apps/src/index.ts](../../../../sources/pipeshub-ai__pipeshub-ai/backend/nodejs/apps/src/index.ts) | entrypoints signal |
| entrypoints | [backend/nodejs/apps/src/integrations/slack-bot/src/index.ts](../../../../sources/pipeshub-ai__pipeshub-ai/backend/nodejs/apps/src/integrations/slack-bot/src/index.ts) | entrypoints signal |
| container | [Dockerfile](../../../../sources/pipeshub-ai__pipeshub-ai/Dockerfile) | container signal |
| container | [Dockerfile.base](../../../../sources/pipeshub-ai__pipeshub-ai/Dockerfile.base) | container signal |
| container | [Dockerfile.integration](../../../../sources/pipeshub-ai__pipeshub-ai/Dockerfile.integration) | container signal |
| container | [deployment/sandbox/Dockerfile](../../../../sources/pipeshub-ai__pipeshub-ai/deployment/sandbox/Dockerfile) | container signal |
| config | [scripts/Makefile](../../../../sources/pipeshub-ai__pipeshub-ai/scripts/Makefile) | config signal |
| config | [integration-tests/pyproject.toml](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/pyproject.toml) | config signal |
| config | [integration-tests/uv.lock](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/uv.lock) | config signal |
| config | [frontend/package.json](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [frontend/electron/main.ts](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/electron/main.ts)<br>[backend/nodejs/apps/src/app.ts](../../../../sources/pipeshub-ai__pipeshub-ai/backend/nodejs/apps/src/app.ts)<br>[backend/nodejs/apps/src/index.ts](../../../../sources/pipeshub-ai__pipeshub-ai/backend/nodejs/apps/src/index.ts)<br>[backend/nodejs/apps/src/integrations/slack-bot/src/index.ts](../../../../sources/pipeshub-ai__pipeshub-ai/backend/nodejs/apps/src/integrations/slack-bot/src/index.ts) |
| agentRuntime | 342 | [integration-tests/response-validation/enterprise-search/agents/integration_test_agents.py](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/response-validation/enterprise-search/agents/integration_test_agents.py)<br>[frontend/lib/hooks/use-breakpoint.ts](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/lib/hooks/use-breakpoint.ts)<br>[frontend/lib/hooks/use-chat-speech-config.ts](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/lib/hooks/use-chat-speech-config.ts)<br>[frontend/lib/hooks/use-chat-speech-recognition.ts](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/lib/hooks/use-chat-speech-recognition.ts)<br>[frontend/lib/hooks/use-chat-speech-synthesis.ts](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/lib/hooks/use-chat-speech-synthesis.ts)<br>[frontend/lib/hooks/use-initialize-user-profile.ts](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/lib/hooks/use-initialize-user-profile.ts)<br>[frontend/lib/hooks/use-is-mobile.ts](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/lib/hooks/use-is-mobile.ts)<br>[frontend/lib/hooks/use-server-speech-recognition.ts](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/lib/hooks/use-server-speech-recognition.ts) |
| mcp | 7 | [frontend/.mcp.json](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/.mcp.json)<br>[backend/python/tests/unit/agents/tools/test_tool_registry.py](../../../../sources/pipeshub-ai__pipeshub-ai/backend/python/tests/unit/agents/tools/test_tool_registry.py)<br>[backend/nodejs/apps/tests/modules/mcp/routes/mcp.routes.test.ts](../../../../sources/pipeshub-ai__pipeshub-ai/backend/nodejs/apps/tests/modules/mcp/routes/mcp.routes.test.ts)<br>[backend/nodejs/apps/tests/modules/mcp/controller/mcp.controller.test.ts](../../../../sources/pipeshub-ai__pipeshub-ai/backend/nodejs/apps/tests/modules/mcp/controller/mcp.controller.test.ts)<br>[backend/nodejs/apps/tests/helpers/mock-mcp-global.ts](../../../../sources/pipeshub-ai__pipeshub-ai/backend/nodejs/apps/tests/helpers/mock-mcp-global.ts)<br>[backend/nodejs/apps/src/modules/mcp/routes/mcp.routes.ts](../../../../sources/pipeshub-ai__pipeshub-ai/backend/nodejs/apps/src/modules/mcp/routes/mcp.routes.ts)<br>[backend/nodejs/apps/src/modules/mcp/controller/mcp.controller.ts](../../../../sources/pipeshub-ai__pipeshub-ai/backend/nodejs/apps/src/modules/mcp/controller/mcp.controller.ts) |
| retrieval | 252 | [integration-tests/validation/graph_edge_validator.py](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/validation/graph_edge_validator.py)<br>[integration-tests/validation/graph_entity_validator.py](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/validation/graph_entity_validator.py)<br>[integration-tests/helper/graph_provider_utils.py](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/helper/graph_provider_utils.py)<br>[integration-tests/helper/graph_provider.py](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/helper/graph_provider.py)<br>[integration-tests/connectors/confluence/confluence_knowledge_hub_test_utils.py](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/connectors/confluence/confluence_knowledge_hub_test_utils.py)<br>[frontend/types/index.ts](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/types/index.ts)<br>[frontend/tests/e2e/knowledge-base/kb-basic.spec.ts](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/tests/e2e/knowledge-base/kb-basic.spec.ts)<br>[frontend/tests/e2e/knowledge-base/kb-upload.helpers.ts](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/tests/e2e/knowledge-base/kb-upload.helpers.ts) |
| spec | 33 | [frontend/tests/e2e/workspace/general.spec.ts](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/tests/e2e/workspace/general.spec.ts)<br>[frontend/tests/e2e/workspace/labs.spec.ts](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/tests/e2e/workspace/labs.spec.ts)<br>[frontend/tests/e2e/workspace/profile.spec.ts](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/tests/e2e/workspace/profile.spec.ts)<br>[frontend/tests/e2e/workspace/prompts.spec.ts](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/tests/e2e/workspace/prompts.spec.ts)<br>[frontend/tests/e2e/workspace/services.spec.ts](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/tests/e2e/workspace/services.spec.ts)<br>[frontend/tests/e2e/users/users-actions.spec.ts](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/tests/e2e/users/users-actions.spec.ts)<br>[frontend/tests/e2e/users/users-bulk.spec.ts](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/tests/e2e/users/users-bulk.spec.ts)<br>[frontend/tests/e2e/users/users-invite.spec.ts](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/tests/e2e/users/users-invite.spec.ts) |
| eval | 1097 | [integration-tests/.env.example](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/.env.example)<br>[integration-tests/conftest.py](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/conftest.py)<br>[integration-tests/env.local.template](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/env.local.template)<br>[integration-tests/env.prod.template](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/env.prod.template)<br>[integration-tests/pyproject.toml](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/pyproject.toml)<br>[integration-tests/pytest.ini](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/pytest.ini)<br>[integration-tests/README.md](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/README.md)<br>[integration-tests/uv.lock](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/uv.lock) |
| security | 237 | [SECURITY.md](../../../../sources/pipeshub-ai__pipeshub-ai/SECURITY.md)<br>[integration-tests/validation/schemas/edges/permission.yaml](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/validation/schemas/edges/permission.yaml)<br>[integration-tests/storage/test_auth.py](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/storage/test_auth.py)<br>[integration-tests/response-validation/oauth_provider/integration_test_oauthProvider.py](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/response-validation/oauth_provider/integration_test_oauthProvider.py)<br>[integration-tests/response-validation/oauth_app/integration_test_oauthApps.py](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/response-validation/oauth_app/integration_test_oauthApps.py)<br>[integration-tests/response-validation/auth/integration_test_orgAuthConfig.py](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/response-validation/auth/integration_test_orgAuthConfig.py)<br>[integration-tests/response-validation/auth/integration_test_userAccount.py](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/response-validation/auth/integration_test_userAccount.py)<br>[integration-tests/response-validation/auth/utils/__init__.py](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/response-validation/auth/utils/__init__.py) |
| ci | 11 | [.github/workflows/claude.yml](../../../../sources/pipeshub-ai__pipeshub-ai/.github/workflows/claude.yml)<br>[.github/workflows/codeql.yml](../../../../sources/pipeshub-ai__pipeshub-ai/.github/workflows/codeql.yml)<br>[.github/workflows/electron-build-reusable.yml](../../../../sources/pipeshub-ai__pipeshub-ai/.github/workflows/electron-build-reusable.yml)<br>[.github/workflows/electron-build.yml](../../../../sources/pipeshub-ai__pipeshub-ai/.github/workflows/electron-build.yml)<br>[.github/workflows/electron-pr-build.yml](../../../../sources/pipeshub-ai__pipeshub-ai/.github/workflows/electron-pr-build.yml)<br>[.github/workflows/integration-tests.yml](../../../../sources/pipeshub-ai__pipeshub-ai/.github/workflows/integration-tests.yml)<br>[.github/workflows/main.yml](../../../../sources/pipeshub-ai__pipeshub-ai/.github/workflows/main.yml)<br>[.github/workflows/openapi-validator.yml](../../../../sources/pipeshub-ai__pipeshub-ai/.github/workflows/openapi-validator.yml) |
| container | 45 | [Dockerfile](../../../../sources/pipeshub-ai__pipeshub-ai/Dockerfile)<br>[Dockerfile.base](../../../../sources/pipeshub-ai__pipeshub-ai/Dockerfile.base)<br>[Dockerfile.integration](../../../../sources/pipeshub-ai__pipeshub-ai/Dockerfile.integration)<br>[deployment/sandbox/Dockerfile](../../../../sources/pipeshub-ai__pipeshub-ai/deployment/sandbox/Dockerfile)<br>[deployment/helm/local-install-metrics-server.sh](../../../../sources/pipeshub-ai__pipeshub-ai/deployment/helm/local-install-metrics-server.sh)<br>[deployment/helm/local-setup-kind-cluster.sh](../../../../sources/pipeshub-ai__pipeshub-ai/deployment/helm/local-setup-kind-cluster.sh)<br>[deployment/helm/pipeshub-ai/.gitignore](../../../../sources/pipeshub-ai__pipeshub-ai/deployment/helm/pipeshub-ai/.gitignore)<br>[deployment/helm/pipeshub-ai/.helmignore](../../../../sources/pipeshub-ai__pipeshub-ai/deployment/helm/pipeshub-ai/.helmignore) |
| instruction | 2 | [CLAUDE.md](../../../../sources/pipeshub-ai__pipeshub-ai/CLAUDE.md)<br>[frontend/CLAUDE.md](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/CLAUDE.md) |
| docs | 109 | [README.md](../../../../sources/pipeshub-ai__pipeshub-ai/README.md)<br>[integration-tests/README.md](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/README.md)<br>[frontend/README.md](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/README.md)<br>[frontend/tests/e2e/README.md](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/tests/e2e/README.md)<br>[frontend/scripts/electron/README.md](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/scripts/electron/README.md)<br>[frontend/docs/backend-api-format.md](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/docs/backend-api-format.md)<br>[frontend/docs/code-samples.md](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/docs/code-samples.md)<br>[frontend/docs/component-usage.md](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/docs/component-usage.md) |
| config | 10 | [scripts/Makefile](../../../../sources/pipeshub-ai__pipeshub-ai/scripts/Makefile)<br>[integration-tests/pyproject.toml](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/pyproject.toml)<br>[integration-tests/uv.lock](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/uv.lock)<br>[frontend/package.json](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/package.json)<br>[frontend/tsconfig.json](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/tsconfig.json)<br>[frontend/electron/package.json](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/electron/package.json)<br>[frontend/electron/tsconfig.json](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/electron/tsconfig.json)<br>[backend/python/pyproject.toml](../../../../sources/pipeshub-ai__pipeshub-ai/backend/python/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1097 | [integration-tests/.env.example](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/.env.example)<br>[integration-tests/conftest.py](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/conftest.py)<br>[integration-tests/env.local.template](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/env.local.template)<br>[integration-tests/env.prod.template](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/env.prod.template)<br>[integration-tests/pyproject.toml](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/pyproject.toml)<br>[integration-tests/pytest.ini](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/pytest.ini) |
| CI workflows | 11 | [.github/workflows/claude.yml](../../../../sources/pipeshub-ai__pipeshub-ai/.github/workflows/claude.yml)<br>[.github/workflows/codeql.yml](../../../../sources/pipeshub-ai__pipeshub-ai/.github/workflows/codeql.yml)<br>[.github/workflows/electron-build-reusable.yml](../../../../sources/pipeshub-ai__pipeshub-ai/.github/workflows/electron-build-reusable.yml)<br>[.github/workflows/electron-build.yml](../../../../sources/pipeshub-ai__pipeshub-ai/.github/workflows/electron-build.yml)<br>[.github/workflows/electron-pr-build.yml](../../../../sources/pipeshub-ai__pipeshub-ai/.github/workflows/electron-pr-build.yml)<br>[.github/workflows/integration-tests.yml](../../../../sources/pipeshub-ai__pipeshub-ai/.github/workflows/integration-tests.yml) |
| Containers / deploy | 45 | [Dockerfile](../../../../sources/pipeshub-ai__pipeshub-ai/Dockerfile)<br>[Dockerfile.base](../../../../sources/pipeshub-ai__pipeshub-ai/Dockerfile.base)<br>[Dockerfile.integration](../../../../sources/pipeshub-ai__pipeshub-ai/Dockerfile.integration)<br>[deployment/sandbox/Dockerfile](../../../../sources/pipeshub-ai__pipeshub-ai/deployment/sandbox/Dockerfile)<br>[deployment/helm/local-install-metrics-server.sh](../../../../sources/pipeshub-ai__pipeshub-ai/deployment/helm/local-install-metrics-server.sh)<br>[deployment/helm/local-setup-kind-cluster.sh](../../../../sources/pipeshub-ai__pipeshub-ai/deployment/helm/local-setup-kind-cluster.sh) |
| Security / policy | 237 | [SECURITY.md](../../../../sources/pipeshub-ai__pipeshub-ai/SECURITY.md)<br>[integration-tests/validation/schemas/edges/permission.yaml](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/validation/schemas/edges/permission.yaml)<br>[integration-tests/storage/test_auth.py](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/storage/test_auth.py)<br>[integration-tests/response-validation/oauth_provider/integration_test_oauthProvider.py](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/response-validation/oauth_provider/integration_test_oauthProvider.py)<br>[integration-tests/response-validation/oauth_app/integration_test_oauthApps.py](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/response-validation/oauth_app/integration_test_oauthApps.py)<br>[integration-tests/response-validation/auth/integration_test_orgAuthConfig.py](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/response-validation/auth/integration_test_orgAuthConfig.py) |
| Agent instructions | 2 | [CLAUDE.md](../../../../sources/pipeshub-ai__pipeshub-ai/CLAUDE.md)<br>[frontend/CLAUDE.md](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `frontend/electron/main.ts`, `backend/nodejs/apps/src/app.ts`, `backend/nodejs/apps/src/index.ts`.
2. Trace execution through entrypoints: `frontend/electron/main.ts`, `backend/nodejs/apps/src/app.ts`, `backend/nodejs/apps/src/index.ts`.
3. Map agent/tool runtime through: `integration-tests/response-validation/enterprise-search/agents/integration_test_agents.py`, `frontend/lib/hooks/use-breakpoint.ts`, `frontend/lib/hooks/use-chat-speech-config.ts`.
4. Inspect retrieval/memory/indexing through: `integration-tests/validation/graph_edge_validator.py`, `integration-tests/validation/graph_entity_validator.py`, `integration-tests/helper/graph_provider_utils.py`.
5. Verify behavior through test/eval files: `integration-tests/.env.example`, `integration-tests/conftest.py`, `integration-tests/env.local.template`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 PipesHub is a fully extensible and explainable workplace AI platform for enterprise search and workflow automation. 핵심 구조 신호는 Python, Dockerfile, README.md, CLAUDE.md, LICENSE, tests이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
