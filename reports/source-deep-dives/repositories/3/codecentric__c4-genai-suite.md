# codecentric/c4-genai-suite 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

c4 GenAI Suite

## 요약

- 조사 단위: `sources/codecentric__c4-genai-suite` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,420 files, 267 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=services/reis/rei_s/mcp.py, e2e/tests/extension/mcp-server.spec.ts, dev/mcp-tool-as-server/.dockerignore이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | codecentric/c4-genai-suite |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 171 |
| Forks | 20 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/codecentric__c4-genai-suite](../../../../sources/codecentric__c4-genai-suite) |
| 기존 보고서 | [reports/global-trending/repositories/codecentric__c4-genai-suite.md](../../../global-trending/repositories/codecentric__c4-genai-suite.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1420 / 267 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .github, .husky, backend, demo, dev, e2e, frontend, helm-chart, scripts, services |
| 상위 확장자 | .ts: 693, .py: 230, .tsx: 193, .yaml: 66, (none): 62, .json: 39, .md: 31, .env: 13, .js: 13, .png: 7, .example: 6, .mjs: 6 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| services/reis | services workspace | 56 |
| services/eval | services workspace | 11 |
| services/confluence-importer | services workspace | 6 |
| .github | ci surface | 1 |
| backend | top-level component | 1 |
| demo | top-level component | 1 |
| dev | top-level component | 1 |
| e2e | validation surface | 1 |
| frontend | top-level component | 1 |
| helm-chart | deployment surface | 1 |
| scripts | top-level component | 1 |
| services | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | prepare | husky && npm run install-all && npm run env |
| utility | package.json | install-all | (cd backend && npm install) && (cd frontend && npm install) && (cd services/reis && command -v uv && uv sync \|\| echo 'uv not installed, skipping') |
| utility | package.json | env | node scripts/env-setup.js --noOverwrites |
| utility | package.json | env:fix | node scripts/env-setup.js |
| test | package.json | dev | node scripts/run-tests.js --devSetup |
| test | package.json | dev:force | node scripts/run-tests.js --devSetup --forceUsingRunningServices |
| test | package.json | test | npm run test:frontend && npm run test:backend && npm run test:e2e |
| test | package.json | test:force | node scripts/run-tests.js --forceUsingRunningServices && cd frontend && npm run test |
| test | package.json | test:e2e | node scripts/run-tests.js |
| test | package.json | test:e2e:noKill | node scripts/run-tests.js --noAutoKill |
| test | package.json | test:e2e:ui | node scripts/run-tests.js --noAutoKill --ui |
| test | package.json | test:e2e:debug | node scripts/run-tests.js --debug |
| test | package.json | test:e2e:debug:expensive | node scripts/run-tests.js --withoutNormalTests --debug |
| test | package.json | test:e2e:expensive | node scripts/run-tests.js --withoutNormalTests --noAutoKill |
| test | package.json | test:e2e:expensive-ui | node scripts/run-tests.js --withoutNormalTests --noAutoKill --ui |
| test | package.json | test:e2e:codegen | npx playwright codegen http://localhost:5173/login |
| test | package.json | test:frontend | cd frontend && npm run test |
| test | package.json | test:backend | cd backend && npm run test |
| test | package.json | test:reis | cd services/reis && uv run pytest |
| test | package.json | generate-apis | npm run generate-specs && npm run generate-clients |
| test | package.json | generate-specs | npm run generate-specs-backend && npm run generate-specs-reis |
| utility | package.json | generate-clients | npm run generate-clients-frontend && npm run generate-clients-backend |
| test | package.json | generate-specs-reis | (cd ./services/reis && command -v uv && uv run python rei_s/generate_open_api.py \|\| echo 'uv not installed, skipping') |
| test | package.json | generate-specs-backend | (cd ./backend && npm run generate-openapi-dev) |
| utility | package.json | generate-clients-backend | cd ./backend && npm run generate-tools && npm run generate-reis && npm run generate-executor |
| utility | package.json | generate-clients-frontend | cd ./frontend && npm run generate-api |


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
| mcp | [services/reis/rei_s/mcp.py](../../../../sources/codecentric__c4-genai-suite/services/reis/rei_s/mcp.py) | mcp signal |
| mcp | [e2e/tests/extension/mcp-server.spec.ts](../../../../sources/codecentric__c4-genai-suite/e2e/tests/extension/mcp-server.spec.ts) | mcp signal |
| mcp | [dev/mcp-tool-as-server/.dockerignore](../../../../sources/codecentric__c4-genai-suite/dev/mcp-tool-as-server/.dockerignore) | mcp signal |
| mcp | [dev/mcp-tool-as-server/.gitignore](../../../../sources/codecentric__c4-genai-suite/dev/mcp-tool-as-server/.gitignore) | mcp signal |
| agentRuntime | [frontend/src/pages/admin/users/hooks/useDeleteUser.tsx](../../../../sources/codecentric__c4-genai-suite/frontend/src/pages/admin/users/hooks/useDeleteUser.tsx) | agentRuntime signal |
| agentRuntime | [frontend/src/pages/admin/users/hooks/useUpsertUser.tsx](../../../../sources/codecentric__c4-genai-suite/frontend/src/pages/admin/users/hooks/useUpsertUser.tsx) | agentRuntime signal |
| agentRuntime | [frontend/src/pages/admin/user-groups/hooks/useDeleteUserGroup.tsx](../../../../sources/codecentric__c4-genai-suite/frontend/src/pages/admin/user-groups/hooks/useDeleteUserGroup.tsx) | agentRuntime signal |
| agentRuntime | [frontend/src/pages/admin/user-groups/hooks/useUpdateUserGroup.tsx](../../../../sources/codecentric__c4-genai-suite/frontend/src/pages/admin/user-groups/hooks/useUpdateUserGroup.tsx) | agentRuntime signal |
| entrypoints | [services/eval/llm_eval/main.py](../../../../sources/codecentric__c4-genai-suite/services/eval/llm_eval/main.py) | entrypoints signal |
| entrypoints | [services/confluence-importer/main.py](../../../../sources/codecentric__c4-genai-suite/services/confluence-importer/main.py) | entrypoints signal |
| entrypoints | [services/confluence-importer/.run/main.py.run.xml](../../../../sources/codecentric__c4-genai-suite/services/confluence-importer/.run/main.py.run.xml) | entrypoints signal |
| entrypoints | [frontend/src/App.tsx](../../../../sources/codecentric__c4-genai-suite/frontend/src/App.tsx) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 10 | [services/eval/llm_eval/main.py](../../../../sources/codecentric__c4-genai-suite/services/eval/llm_eval/main.py)<br>[services/confluence-importer/main.py](../../../../sources/codecentric__c4-genai-suite/services/confluence-importer/main.py)<br>[services/confluence-importer/.run/main.py.run.xml](../../../../sources/codecentric__c4-genai-suite/services/confluence-importer/.run/main.py.run.xml)<br>[frontend/src/App.tsx](../../../../sources/codecentric__c4-genai-suite/frontend/src/App.tsx)<br>[frontend/src/index.css](../../../../sources/codecentric__c4-genai-suite/frontend/src/index.css)<br>[frontend/src/main.tsx](../../../../sources/codecentric__c4-genai-suite/frontend/src/main.tsx)<br>[dev/oauth-mock/src/server.ts](../../../../sources/codecentric__c4-genai-suite/dev/oauth-mock/src/server.ts)<br>[dev/mcp-tool-as-server/src/index.ts](../../../../sources/codecentric__c4-genai-suite/dev/mcp-tool-as-server/src/index.ts) |
| agentRuntime | 72 | [frontend/src/pages/admin/users/hooks/useDeleteUser.tsx](../../../../sources/codecentric__c4-genai-suite/frontend/src/pages/admin/users/hooks/useDeleteUser.tsx)<br>[frontend/src/pages/admin/users/hooks/useUpsertUser.tsx](../../../../sources/codecentric__c4-genai-suite/frontend/src/pages/admin/users/hooks/useUpsertUser.tsx)<br>[frontend/src/pages/admin/user-groups/hooks/useDeleteUserGroup.tsx](../../../../sources/codecentric__c4-genai-suite/frontend/src/pages/admin/user-groups/hooks/useDeleteUserGroup.tsx)<br>[frontend/src/pages/admin/user-groups/hooks/useUpdateUserGroup.tsx](../../../../sources/codecentric__c4-genai-suite/frontend/src/pages/admin/user-groups/hooks/useUpdateUserGroup.tsx)<br>[frontend/src/pages/admin/files/hooks.ts](../../../../sources/codecentric__c4-genai-suite/frontend/src/pages/admin/files/hooks.ts)<br>[frontend/src/pages/admin/extensions/hooks.ts](../../../../sources/codecentric__c4-genai-suite/frontend/src/pages/admin/extensions/hooks.ts)<br>[frontend/src/pages/admin/evals/metrics/hooks/useMetricMutations.ts](../../../../sources/codecentric__c4-genai-suite/frontend/src/pages/admin/evals/metrics/hooks/useMetricMutations.ts)<br>[frontend/src/pages/admin/evals/metrics/hooks/useMetricQueries.ts](../../../../sources/codecentric__c4-genai-suite/frontend/src/pages/admin/evals/metrics/hooks/useMetricQueries.ts) |
| mcp | 12 | [services/reis/rei_s/mcp.py](../../../../sources/codecentric__c4-genai-suite/services/reis/rei_s/mcp.py)<br>[e2e/tests/extension/mcp-server.spec.ts](../../../../sources/codecentric__c4-genai-suite/e2e/tests/extension/mcp-server.spec.ts)<br>[dev/mcp-tool-as-server/.dockerignore](../../../../sources/codecentric__c4-genai-suite/dev/mcp-tool-as-server/.dockerignore)<br>[dev/mcp-tool-as-server/.gitignore](../../../../sources/codecentric__c4-genai-suite/dev/mcp-tool-as-server/.gitignore)<br>[dev/mcp-tool-as-server/Dockerfile](../../../../sources/codecentric__c4-genai-suite/dev/mcp-tool-as-server/Dockerfile)<br>[dev/mcp-tool-as-server/package-lock.json](../../../../sources/codecentric__c4-genai-suite/dev/mcp-tool-as-server/package-lock.json)<br>[dev/mcp-tool-as-server/package.json](../../../../sources/codecentric__c4-genai-suite/dev/mcp-tool-as-server/package.json)<br>[dev/mcp-tool-as-server/tsconfig.json](../../../../sources/codecentric__c4-genai-suite/dev/mcp-tool-as-server/tsconfig.json) |
| retrieval | 74 | [services/reis/migrate_from_rag_server.md](../../../../sources/codecentric__c4-genai-suite/services/reis/migrate_from_rag_server.md)<br>[services/reis/tests/unit/vector_store_azure_ai_test.py](../../../../sources/codecentric__c4-genai-suite/services/reis/tests/unit/vector_store_azure_ai_test.py)<br>[services/reis/tests/e2e/vector_store_azure_ai_test.py](../../../../sources/codecentric__c4-genai-suite/services/reis/tests/e2e/vector_store_azure_ai_test.py)<br>[services/reis/tests/e2e/vector_store_pgvector_test.py](../../../../sources/codecentric__c4-genai-suite/services/reis/tests/e2e/vector_store_pgvector_test.py)<br>[services/reis/tests/data/env_wrong_embedding_type.env](../../../../sources/codecentric__c4-genai-suite/services/reis/tests/data/env_wrong_embedding_type.env)<br>[services/reis/tests/data/response_get_index.py](../../../../sources/codecentric__c4-genai-suite/services/reis/tests/data/response_get_index.py)<br>[services/reis/docs/rag.webp](../../../../sources/codecentric__c4-genai-suite/services/reis/docs/rag.webp)<br>[services/eval/tests/unit/qa_catalog/test_graph_utils.py](../../../../sources/codecentric__c4-genai-suite/services/eval/tests/unit/qa_catalog/test_graph_utils.py) |
| spec | 104 | [services/reis/reis-dev-spec.json](../../../../sources/codecentric__c4-genai-suite/services/reis/reis-dev-spec.json)<br>[services/eval/eval-dev-spec.json](../../../../sources/codecentric__c4-genai-suite/services/eval/eval-dev-spec.json)<br>[services/eval/ROADMAP.md](../../../../sources/codecentric__c4-genai-suite/services/eval/ROADMAP.md)<br>[frontend/src/pages/login/LoginPage.integration.spec.tsx](../../../../sources/codecentric__c4-genai-suite/frontend/src/pages/login/LoginPage.integration.spec.tsx)<br>[frontend/src/pages/chat/Conversations.ui-unit.spec.tsx](../../../../sources/codecentric__c4-genai-suite/frontend/src/pages/chat/Conversations.ui-unit.spec.tsx)<br>[frontend/src/pages/chat/SourcesChunkPreview.ui-unit.spec.tsx](../../../../sources/codecentric__c4-genai-suite/frontend/src/pages/chat/SourcesChunkPreview.ui-unit.spec.tsx)<br>[frontend/src/pages/chat/files/Files.ui-unit.spec.tsx](../../../../sources/codecentric__c4-genai-suite/frontend/src/pages/chat/files/Files.ui-unit.spec.tsx)<br>[frontend/src/pages/chat/conversation/ChatInput.ui-unit.spec.tsx](../../../../sources/codecentric__c4-genai-suite/frontend/src/pages/chat/conversation/ChatInput.ui-unit.spec.tsx) |
| eval | 476 | [services/reis/reis-dev-spec.json](../../../../sources/codecentric__c4-genai-suite/services/reis/reis-dev-spec.json)<br>[services/reis/tests/__init__.py](../../../../sources/codecentric__c4-genai-suite/services/reis/tests/__init__.py)<br>[services/reis/tests/conftest.py](../../../../sources/codecentric__c4-genai-suite/services/reis/tests/conftest.py)<br>[services/reis/tests/unit/__init__.py](../../../../sources/codecentric__c4-genai-suite/services/reis/tests/unit/__init__.py)<br>[services/reis/tests/unit/app_multi_worker_test.py](../../../../sources/codecentric__c4-genai-suite/services/reis/tests/unit/app_multi_worker_test.py)<br>[services/reis/tests/unit/app_test.py](../../../../sources/codecentric__c4-genai-suite/services/reis/tests/unit/app_test.py)<br>[services/reis/tests/unit/config_test.py](../../../../sources/codecentric__c4-genai-suite/services/reis/tests/unit/config_test.py)<br>[services/reis/tests/unit/format_providers_test.py](../../../../sources/codecentric__c4-genai-suite/services/reis/tests/unit/format_providers_test.py) |
| security | 55 | [services/reis/tests/unit/tmp_file_permission_test.py](../../../../sources/codecentric__c4-genai-suite/services/reis/tests/unit/tmp_file_permission_test.py)<br>[services/eval/llm_eval/auth/user_principal.py](../../../../sources/codecentric__c4-genai-suite/services/eval/llm_eval/auth/user_principal.py)<br>[helm-chart/tests/secret-backend_test.yaml](../../../../sources/codecentric__c4-genai-suite/helm-chart/tests/secret-backend_test.yaml)<br>[helm-chart/tests/secret-reis_test.yaml](../../../../sources/codecentric__c4-genai-suite/helm-chart/tests/secret-reis_test.yaml)<br>[helm-chart/templates/network-policy-backend.yaml](../../../../sources/codecentric__c4-genai-suite/helm-chart/templates/network-policy-backend.yaml)<br>[helm-chart/templates/network-policy-reis.yaml](../../../../sources/codecentric__c4-genai-suite/helm-chart/templates/network-policy-reis.yaml)<br>[helm-chart/templates/secret-backend.yaml](../../../../sources/codecentric__c4-genai-suite/helm-chart/templates/secret-backend.yaml)<br>[helm-chart/templates/secret-reis.yaml](../../../../sources/codecentric__c4-genai-suite/helm-chart/templates/secret-reis.yaml) |
| ci | 19 | [.github/workflows/backend.yaml](../../../../sources/codecentric__c4-genai-suite/.github/workflows/backend.yaml)<br>[.github/workflows/build-container-images.yaml](../../../../sources/codecentric__c4-genai-suite/.github/workflows/build-container-images.yaml)<br>[.github/workflows/build-dev-helper-container-images.yaml](../../../../sources/codecentric__c4-genai-suite/.github/workflows/build-dev-helper-container-images.yaml)<br>[.github/workflows/confluence-importer.yaml](../../../../sources/codecentric__c4-genai-suite/.github/workflows/confluence-importer.yaml)<br>[.github/workflows/dependabot.yaml](../../../../sources/codecentric__c4-genai-suite/.github/workflows/dependabot.yaml)<br>[.github/workflows/dependency-review.yaml](../../../../sources/codecentric__c4-genai-suite/.github/workflows/dependency-review.yaml)<br>[.github/workflows/e2e-complete.yaml](../../../../sources/codecentric__c4-genai-suite/.github/workflows/e2e-complete.yaml)<br>[.github/workflows/e2e-template.yaml](../../../../sources/codecentric__c4-genai-suite/.github/workflows/e2e-template.yaml) |
| container | 15 | [docker-compose-dev.yml](../../../../sources/codecentric__c4-genai-suite/docker-compose-dev.yml)<br>[docker-compose.yml](../../../../sources/codecentric__c4-genai-suite/docker-compose.yml)<br>[Dockerfile](../../../../sources/codecentric__c4-genai-suite/Dockerfile)<br>[services/reis/Dockerfile](../../../../sources/codecentric__c4-genai-suite/services/reis/Dockerfile)<br>[services/eval/Dockerfile](../../../../sources/codecentric__c4-genai-suite/services/eval/Dockerfile)<br>[services/confluence-importer/Dockerfile](../../../../sources/codecentric__c4-genai-suite/services/confluence-importer/Dockerfile)<br>[frontend/Dockerfile](../../../../sources/codecentric__c4-genai-suite/frontend/Dockerfile)<br>[e2e/postgres/docker-compose.yml](../../../../sources/codecentric__c4-genai-suite/e2e/postgres/docker-compose.yml) |
| instruction | 0 | 명확하지 않음 |
| docs | 36 | [README.md](../../../../sources/codecentric__c4-genai-suite/README.md)<br>[services/reis/README.md](../../../../sources/codecentric__c4-genai-suite/services/reis/README.md)<br>[services/reis/docs/Configuration.md](../../../../sources/codecentric__c4-genai-suite/services/reis/docs/Configuration.md)<br>[services/reis/docs/rag.webp](../../../../sources/codecentric__c4-genai-suite/services/reis/docs/rag.webp)<br>[services/eval/README.md](../../../../sources/codecentric__c4-genai-suite/services/eval/README.md)<br>[services/eval/llm_eval/alembic/README.md](../../../../sources/codecentric__c4-genai-suite/services/eval/llm_eval/alembic/README.md)<br>[services/confluence-importer/README.md](../../../../sources/codecentric__c4-genai-suite/services/confluence-importer/README.md)<br>[scripts/README.md](../../../../sources/codecentric__c4-genai-suite/scripts/README.md) |
| config | 18 | [package.json](../../../../sources/codecentric__c4-genai-suite/package.json)<br>[services/reis/pyproject.toml](../../../../sources/codecentric__c4-genai-suite/services/reis/pyproject.toml)<br>[services/reis/uv.lock](../../../../sources/codecentric__c4-genai-suite/services/reis/uv.lock)<br>[services/eval/pyproject.toml](../../../../sources/codecentric__c4-genai-suite/services/eval/pyproject.toml)<br>[services/eval/uv.lock](../../../../sources/codecentric__c4-genai-suite/services/eval/uv.lock)<br>[services/confluence-importer/pyproject.toml](../../../../sources/codecentric__c4-genai-suite/services/confluence-importer/pyproject.toml)<br>[services/confluence-importer/uv.lock](../../../../sources/codecentric__c4-genai-suite/services/confluence-importer/uv.lock)<br>[scripts/package.json](../../../../sources/codecentric__c4-genai-suite/scripts/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 476 | [services/reis/reis-dev-spec.json](../../../../sources/codecentric__c4-genai-suite/services/reis/reis-dev-spec.json)<br>[services/reis/tests/__init__.py](../../../../sources/codecentric__c4-genai-suite/services/reis/tests/__init__.py)<br>[services/reis/tests/conftest.py](../../../../sources/codecentric__c4-genai-suite/services/reis/tests/conftest.py)<br>[services/reis/tests/unit/__init__.py](../../../../sources/codecentric__c4-genai-suite/services/reis/tests/unit/__init__.py)<br>[services/reis/tests/unit/app_multi_worker_test.py](../../../../sources/codecentric__c4-genai-suite/services/reis/tests/unit/app_multi_worker_test.py)<br>[services/reis/tests/unit/app_test.py](../../../../sources/codecentric__c4-genai-suite/services/reis/tests/unit/app_test.py) |
| CI workflow | 19 | [.github/workflows/backend.yaml](../../../../sources/codecentric__c4-genai-suite/.github/workflows/backend.yaml)<br>[.github/workflows/build-container-images.yaml](../../../../sources/codecentric__c4-genai-suite/.github/workflows/build-container-images.yaml)<br>[.github/workflows/build-dev-helper-container-images.yaml](../../../../sources/codecentric__c4-genai-suite/.github/workflows/build-dev-helper-container-images.yaml)<br>[.github/workflows/confluence-importer.yaml](../../../../sources/codecentric__c4-genai-suite/.github/workflows/confluence-importer.yaml)<br>[.github/workflows/dependabot.yaml](../../../../sources/codecentric__c4-genai-suite/.github/workflows/dependabot.yaml)<br>[.github/workflows/dependency-review.yaml](../../../../sources/codecentric__c4-genai-suite/.github/workflows/dependency-review.yaml) |
| 컨테이너/배포 | 15 | [docker-compose-dev.yml](../../../../sources/codecentric__c4-genai-suite/docker-compose-dev.yml)<br>[docker-compose.yml](../../../../sources/codecentric__c4-genai-suite/docker-compose.yml)<br>[Dockerfile](../../../../sources/codecentric__c4-genai-suite/Dockerfile)<br>[services/reis/Dockerfile](../../../../sources/codecentric__c4-genai-suite/services/reis/Dockerfile)<br>[services/eval/Dockerfile](../../../../sources/codecentric__c4-genai-suite/services/eval/Dockerfile)<br>[services/confluence-importer/Dockerfile](../../../../sources/codecentric__c4-genai-suite/services/confluence-importer/Dockerfile) |
| 보안/정책 | 55 | [services/reis/tests/unit/tmp_file_permission_test.py](../../../../sources/codecentric__c4-genai-suite/services/reis/tests/unit/tmp_file_permission_test.py)<br>[services/eval/llm_eval/auth/user_principal.py](../../../../sources/codecentric__c4-genai-suite/services/eval/llm_eval/auth/user_principal.py)<br>[helm-chart/tests/secret-backend_test.yaml](../../../../sources/codecentric__c4-genai-suite/helm-chart/tests/secret-backend_test.yaml)<br>[helm-chart/tests/secret-reis_test.yaml](../../../../sources/codecentric__c4-genai-suite/helm-chart/tests/secret-reis_test.yaml)<br>[helm-chart/templates/network-policy-backend.yaml](../../../../sources/codecentric__c4-genai-suite/helm-chart/templates/network-policy-backend.yaml)<br>[helm-chart/templates/network-policy-reis.yaml](../../../../sources/codecentric__c4-genai-suite/helm-chart/templates/network-policy-reis.yaml) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `services/reis/rei_s/mcp.py`, `e2e/tests/extension/mcp-server.spec.ts`, `dev/mcp-tool-as-server/.dockerignore`.
2. entrypoint를 따라 실행 흐름 확인: `services/eval/llm_eval/main.py`, `services/confluence-importer/main.py`, `services/confluence-importer/.run/main.py.run.xml`.
3. agent/tool runtime 매핑: `frontend/src/pages/admin/users/hooks/useDeleteUser.tsx`, `frontend/src/pages/admin/users/hooks/useUpsertUser.tsx`, `frontend/src/pages/admin/user-groups/hooks/useDeleteUserGroup.tsx`.
4. retrieval/memory/indexing 확인: `services/reis/migrate_from_rag_server.md`, `services/reis/tests/unit/vector_store_azure_ai_test.py`, `services/reis/tests/e2e/vector_store_azure_ai_test.py`.
5. test/eval 파일로 동작 검증: `services/reis/reis-dev-spec.json`, `services/reis/tests/__init__.py`, `services/reis/tests/conftest.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 c4 GenAI Suite. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, docker-compose.yml, README.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
