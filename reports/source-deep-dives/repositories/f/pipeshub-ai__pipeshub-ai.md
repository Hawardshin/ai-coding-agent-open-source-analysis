# pipeshub-ai/pipeshub-ai 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

PipesHub is a fully extensible and explainable workplace AI platform for enterprise search and workflow automation

## 요약

- 조사 단위: `sources/pipeshub-ai__pipeshub-ai` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 3,438 files, 1,025 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=frontend/electron/main.ts, backend/nodejs/apps/src/app.ts, backend/nodejs/apps/src/index.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | pipeshub-ai/pipeshub-ai |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 2989 |
| Forks | 465 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/pipeshub-ai__pipeshub-ai](../../../../sources/pipeshub-ai__pipeshub-ai) |
| 기존 보고서 | [reports/global-trending/repositories/pipeshub-ai__pipeshub-ai.md](../../../global-trending/repositories/pipeshub-ai__pipeshub-ai.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 3438 / 1025 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .gemini, .github, backend, deployment, docs, frontend, integration-tests, logs, scripts |
| 상위 확장자 | .py: 1457, .ts: 996, .tsx: 431, .svg: 236, .md: 116, .json: 60, .yaml: 43, .yml: 19, (none): 19, .hbs: 12, .mjs: 9, .otf: 6 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 12 |
| .github | ci surface | 1 |
| backend | top-level component | 1 |
| deployment | deployment surface | 1 |
| frontend | top-level component | 1 |
| integration-tests | validation surface | 1 |
| logs | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1097 | [integration-tests/.env.example](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/.env.example)<br>[integration-tests/conftest.py](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/conftest.py)<br>[integration-tests/env.local.template](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/env.local.template)<br>[integration-tests/env.prod.template](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/env.prod.template)<br>[integration-tests/pyproject.toml](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/pyproject.toml)<br>[integration-tests/pytest.ini](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/pytest.ini) |
| CI workflow | 11 | [.github/workflows/claude.yml](../../../../sources/pipeshub-ai__pipeshub-ai/.github/workflows/claude.yml)<br>[.github/workflows/codeql.yml](../../../../sources/pipeshub-ai__pipeshub-ai/.github/workflows/codeql.yml)<br>[.github/workflows/electron-build-reusable.yml](../../../../sources/pipeshub-ai__pipeshub-ai/.github/workflows/electron-build-reusable.yml)<br>[.github/workflows/electron-build.yml](../../../../sources/pipeshub-ai__pipeshub-ai/.github/workflows/electron-build.yml)<br>[.github/workflows/electron-pr-build.yml](../../../../sources/pipeshub-ai__pipeshub-ai/.github/workflows/electron-pr-build.yml)<br>[.github/workflows/integration-tests.yml](../../../../sources/pipeshub-ai__pipeshub-ai/.github/workflows/integration-tests.yml) |
| 컨테이너/배포 | 45 | [Dockerfile](../../../../sources/pipeshub-ai__pipeshub-ai/Dockerfile)<br>[Dockerfile.base](../../../../sources/pipeshub-ai__pipeshub-ai/Dockerfile.base)<br>[Dockerfile.integration](../../../../sources/pipeshub-ai__pipeshub-ai/Dockerfile.integration)<br>[deployment/sandbox/Dockerfile](../../../../sources/pipeshub-ai__pipeshub-ai/deployment/sandbox/Dockerfile)<br>[deployment/helm/local-install-metrics-server.sh](../../../../sources/pipeshub-ai__pipeshub-ai/deployment/helm/local-install-metrics-server.sh)<br>[deployment/helm/local-setup-kind-cluster.sh](../../../../sources/pipeshub-ai__pipeshub-ai/deployment/helm/local-setup-kind-cluster.sh) |
| 보안/정책 | 237 | [SECURITY.md](../../../../sources/pipeshub-ai__pipeshub-ai/SECURITY.md)<br>[integration-tests/validation/schemas/edges/permission.yaml](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/validation/schemas/edges/permission.yaml)<br>[integration-tests/storage/test_auth.py](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/storage/test_auth.py)<br>[integration-tests/response-validation/oauth_provider/integration_test_oauthProvider.py](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/response-validation/oauth_provider/integration_test_oauthProvider.py)<br>[integration-tests/response-validation/oauth_app/integration_test_oauthApps.py](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/response-validation/oauth_app/integration_test_oauthApps.py)<br>[integration-tests/response-validation/auth/integration_test_orgAuthConfig.py](../../../../sources/pipeshub-ai__pipeshub-ai/integration-tests/response-validation/auth/integration_test_orgAuthConfig.py) |
| 에이전트 지시문 | 2 | [CLAUDE.md](../../../../sources/pipeshub-ai__pipeshub-ai/CLAUDE.md)<br>[frontend/CLAUDE.md](../../../../sources/pipeshub-ai__pipeshub-ai/frontend/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `frontend/electron/main.ts`, `backend/nodejs/apps/src/app.ts`, `backend/nodejs/apps/src/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `frontend/electron/main.ts`, `backend/nodejs/apps/src/app.ts`, `backend/nodejs/apps/src/index.ts`.
3. agent/tool runtime 매핑: `integration-tests/response-validation/enterprise-search/agents/integration_test_agents.py`, `frontend/lib/hooks/use-breakpoint.ts`, `frontend/lib/hooks/use-chat-speech-config.ts`.
4. retrieval/memory/indexing 확인: `integration-tests/validation/graph_edge_validator.py`, `integration-tests/validation/graph_entity_validator.py`, `integration-tests/helper/graph_provider_utils.py`.
5. test/eval 파일로 동작 검증: `integration-tests/.env.example`, `integration-tests/conftest.py`, `integration-tests/env.local.template`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 PipesHub is a fully extensible and explainable workplace AI platform for enterprise search and workflow automation. 핵심 구조 신호는 Python, Dockerfile, README.md, CLAUDE.md, LICENSE, tests이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
