# Mintplex-Labs/anything-llm 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Stop renting your intelligence. Own it with AnythingLLM. Everything you need for a powerful local-first agent experience

## 요약

- 조사 단위: `sources/Mintplex-Labs__anything-llm` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,402 files, 783 directories, depth score 115, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=frontend/src/App.jsx, frontend/src/index.css, frontend/src/main.jsx이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Mintplex-Labs/anything-llm |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | JavaScript |
| Stars | 61740 |
| Forks | 6739 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Mintplex-Labs__anything-llm](../../../../sources/Mintplex-Labs__anything-llm) |
| 기존 보고서 | [reports/global-trending/repositories/Mintplex-Labs__anything-llm.md](../../../global-trending/repositories/Mintplex-Labs__anything-llm.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1402 / 783 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | .devcontainer, .github, browser-extension, cloud-deployments, collector, docker, embed, extras, frontend, images, locales, server |
| 상위 확장자 | .js: 640, .jsx: 445, .png: 107, .sql: 40, .md: 30, (none): 26, .yaml: 23, .json: 20, .svg: 12, .mjs: 9, .yml: 7, .css: 6 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| server | source boundary | 109 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| browser-extension | top-level component | 1 |
| cloud-deployments | deployment surface | 1 |
| collector | top-level component | 1 |
| docker | documentation surface | 1 |
| embed | top-level component | 1 |
| extras | top-level component | 1 |
| frontend | top-level component | 1 |
| images | top-level component | 1 |
| locales | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| test | package.json | test | jest |
| serve-dev | package.json | lint | cd server && yarn lint && cd ../frontend && yarn lint && cd ../collector && yarn lint |
| serve-dev | package.json | lint:ci | cd server && yarn lint:check && cd ../frontend && yarn lint:check && cd ../collector && yarn lint:check |
| serve-dev | package.json | setup | cd server && yarn && cd ../collector && yarn && cd ../frontend && yarn && cd .. && yarn setup:envs && yarn prisma:setup && echo "Please run yarn dev:server, yarn dev:collector, and yarn dev:frontend in separate terminal |
| serve-dev | package.json | setup:envs | cp -n ./frontend/.env.example ./frontend/.env; cp -n ./server/.env.example ./server/.env.development; cp -n ./collector/.env.example ./collector/.env; cp -n ./docker/.env.example ./docker/.env; echo "All ENV files copied |
| serve-dev | package.json | dev:server | cd server && yarn dev |
| serve-dev | package.json | dev:collector | cd collector && yarn dev |
| serve-dev | package.json | dev:frontend | cd frontend && yarn dev |
| serve-dev | package.json | dev | npx concurrently "yarn dev:server" "yarn dev:frontend" "yarn dev:collector" |
| serve-dev | package.json | prisma:generate | cd server && npx prisma generate |
| serve-dev | package.json | prisma:migrate | cd server && npx prisma migrate dev --name init |
| serve-dev | package.json | prisma:seed | cd server && npx prisma db seed |
| utility | package.json | prisma:setup | yarn prisma:generate && yarn prisma:migrate && yarn prisma:seed |
| serve-dev | package.json | prisma:reset | truncate -s 0 server/storage/anythingllm.db && yarn prisma:migrate |
| serve-dev | package.json | prod:server | cd server && yarn start |
| build | package.json | prod:frontend | cd frontend && yarn build |
| quality | package.json | generate:cloudformation | node cloud-deployments/aws/cloudformation/generate.mjs |
| utility | package.json | generate::gcp_deployment | node cloud-deployments/gcp/deployment/generate.mjs |
| utility | package.json | translations:verify | cd frontend/src/locales && node verifyTranslations.mjs |
| quality | package.json | translations:normalize | cd frontend/src/locales && node normalizeEn.mjs && cd ../../.. && cd frontend && yarn lint && cd .. && yarn translations:verify |
| utility | package.json | translations:prune | cd frontend/src/locales && node findUnusedTranslations.mjs --delete && cd ../../../ && yarn translations:normalize |
| quality | package.json | translations:create | cd extras/translator && node index.mjs --all && cd ../../frontend && yarn lint && cd ../.. |


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
| entrypoints | [frontend/src/App.jsx](../../../../sources/Mintplex-Labs__anything-llm/frontend/src/App.jsx) | entrypoints signal |
| entrypoints | [frontend/src/index.css](../../../../sources/Mintplex-Labs__anything-llm/frontend/src/index.css) | entrypoints signal |
| entrypoints | [frontend/src/main.jsx](../../../../sources/Mintplex-Labs__anything-llm/frontend/src/main.jsx) | entrypoints signal |
| container | [docker/docker-compose.yml](../../../../sources/Mintplex-Labs__anything-llm/docker/docker-compose.yml) | container signal |
| container | [docker/Dockerfile](../../../../sources/Mintplex-Labs__anything-llm/docker/Dockerfile) | container signal |
| container | [cloud-deployments/openshift/Dockerfile](../../../../sources/Mintplex-Labs__anything-llm/cloud-deployments/openshift/Dockerfile) | container signal |
| container | [cloud-deployments/huggingface-spaces/Dockerfile](../../../../sources/Mintplex-Labs__anything-llm/cloud-deployments/huggingface-spaces/Dockerfile) | container signal |
| config | [package.json](../../../../sources/Mintplex-Labs__anything-llm/package.json) | config signal |
| config | [server/package.json](../../../../sources/Mintplex-Labs__anything-llm/server/package.json) | config signal |
| config | [frontend/package.json](../../../../sources/Mintplex-Labs__anything-llm/frontend/package.json) | config signal |
| config | [collector/package.json](../../../../sources/Mintplex-Labs__anything-llm/collector/package.json) | config signal |
| ci | [.github/workflows/build-and-push-image-semver.yaml](../../../../sources/Mintplex-Labs__anything-llm/.github/workflows/build-and-push-image-semver.yaml) | ci signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [frontend/src/App.jsx](../../../../sources/Mintplex-Labs__anything-llm/frontend/src/App.jsx)<br>[frontend/src/index.css](../../../../sources/Mintplex-Labs__anything-llm/frontend/src/index.css)<br>[frontend/src/main.jsx](../../../../sources/Mintplex-Labs__anything-llm/frontend/src/main.jsx) |
| agentRuntime | 251 | [server/utils/telegramBot/chat/agent.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/telegramBot/chat/agent.js)<br>[server/utils/helpers/agents.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/helpers/agents.js)<br>[server/utils/chats/agents.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/chats/agents.js)<br>[server/utils/agents/defaults.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/agents/defaults.js)<br>[server/utils/agents/ephemeral.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/agents/ephemeral.js)<br>[server/utils/agents/imported-manifest.schema.json](../../../../sources/Mintplex-Labs__anything-llm/server/utils/agents/imported-manifest.schema.json)<br>[server/utils/agents/imported.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/agents/imported.js)<br>[server/utils/agents/index.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/agents/index.js) |
| mcp | 4 | [server/utils/MCP/index.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/MCP/index.js)<br>[server/utils/MCP/hypervisor/index.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/MCP/hypervisor/index.js)<br>[frontend/src/media/agents/mcp-logo.svg](../../../../sources/Mintplex-Labs__anything-llm/frontend/src/media/agents/mcp-logo.svg)<br>[extras/support/announcements/assets/mcp.jpg](../../../../sources/Mintplex-Labs__anything-llm/extras/support/announcements/assets/mcp.jpg) |
| retrieval | 565 | [server/index.js](../../../../sources/Mintplex-Labs__anything-llm/server/index.js)<br>[server/utils/vectorDbProviders/zilliz/index.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/vectorDbProviders/zilliz/index.js)<br>[server/utils/vectorDbProviders/weaviate/index.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/vectorDbProviders/weaviate/index.js)<br>[server/utils/vectorDbProviders/qdrant/index.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/vectorDbProviders/qdrant/index.js)<br>[server/utils/vectorDbProviders/pinecone/index.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/vectorDbProviders/pinecone/index.js)<br>[server/utils/vectorDbProviders/pgvector/index.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/vectorDbProviders/pgvector/index.js)<br>[server/utils/vectorDbProviders/milvus/index.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/vectorDbProviders/milvus/index.js)<br>[server/utils/vectorDbProviders/lance/index.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/vectorDbProviders/lance/index.js) |
| spec | 0 | 명확하지 않음 |
| eval | 28 | [server/utils/agents/aibitat/plugins/create-files/pptx/test-themes.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/agents/aibitat/plugins/create-files/pptx/test-themes.js)<br>[server/utils/agents/aibitat/plugins/create-files/docx/test-themes.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/agents/aibitat/plugins/create-files/docx/test-themes.js)<br>[server/endpoints/api/openai/compatibility-test-script.cjs](../../../../sources/Mintplex-Labs__anything-llm/server/endpoints/api/openai/compatibility-test-script.cjs)<br>[server/__tests__/utils/vectorDbProviders/pgvector/index.test.js](../../../../sources/Mintplex-Labs__anything-llm/server/__tests__/utils/vectorDbProviders/pgvector/index.test.js)<br>[server/__tests__/utils/TextSplitter/index.test.js](../../../../sources/Mintplex-Labs__anything-llm/server/__tests__/utils/TextSplitter/index.test.js)<br>[server/__tests__/utils/SQLConnectors/connectionParser.test.js](../../../../sources/Mintplex-Labs__anything-llm/server/__tests__/utils/SQLConnectors/connectionParser.test.js)<br>[server/__tests__/utils/safeJSONStringify/safeJSONStringify.test.js](../../../../sources/Mintplex-Labs__anything-llm/server/__tests__/utils/safeJSONStringify/safeJSONStringify.test.js)<br>[server/__tests__/utils/middleware/workspaceDeletionProtection.test.js](../../../../sources/Mintplex-Labs__anything-llm/server/__tests__/utils/middleware/workspaceDeletionProtection.test.js) |
| security | 3 | [SECURITY.md](../../../../sources/Mintplex-Labs__anything-llm/SECURITY.md)<br>[server/endpoints/api/auth/index.js](../../../../sources/Mintplex-Labs__anything-llm/server/endpoints/api/auth/index.js)<br>[frontend/src/pages/GeneralSettings/Security/index.jsx](../../../../sources/Mintplex-Labs__anything-llm/frontend/src/pages/GeneralSettings/Security/index.jsx) |
| ci | 9 | [.github/workflows/build-and-push-image-semver.yaml](../../../../sources/Mintplex-Labs__anything-llm/.github/workflows/build-and-push-image-semver.yaml)<br>[.github/workflows/build-and-push-image.yaml](../../../../sources/Mintplex-Labs__anything-llm/.github/workflows/build-and-push-image.yaml)<br>[.github/workflows/build-qa-tag.yaml](../../../../sources/Mintplex-Labs__anything-llm/.github/workflows/build-qa-tag.yaml)<br>[.github/workflows/check-package-versions.yaml](../../../../sources/Mintplex-Labs__anything-llm/.github/workflows/check-package-versions.yaml)<br>[.github/workflows/check-translations.yaml](../../../../sources/Mintplex-Labs__anything-llm/.github/workflows/check-translations.yaml)<br>[.github/workflows/cleanup-qa-tag.yaml](../../../../sources/Mintplex-Labs__anything-llm/.github/workflows/cleanup-qa-tag.yaml)<br>[.github/workflows/lint.yaml](../../../../sources/Mintplex-Labs__anything-llm/.github/workflows/lint.yaml)<br>[.github/workflows/run-tests.yaml](../../../../sources/Mintplex-Labs__anything-llm/.github/workflows/run-tests.yaml) |
| container | 22 | [docker/docker-compose.yml](../../../../sources/Mintplex-Labs__anything-llm/docker/docker-compose.yml)<br>[docker/Dockerfile](../../../../sources/Mintplex-Labs__anything-llm/docker/Dockerfile)<br>[cloud-deployments/openshift/Dockerfile](../../../../sources/Mintplex-Labs__anything-llm/cloud-deployments/openshift/Dockerfile)<br>[cloud-deployments/huggingface-spaces/Dockerfile](../../../../sources/Mintplex-Labs__anything-llm/cloud-deployments/huggingface-spaces/Dockerfile)<br>[cloud-deployments/helm/charts/anythingllm/.helmignore](../../../../sources/Mintplex-Labs__anything-llm/cloud-deployments/helm/charts/anythingllm/.helmignore)<br>[cloud-deployments/helm/charts/anythingllm/Chart.yaml](../../../../sources/Mintplex-Labs__anything-llm/cloud-deployments/helm/charts/anythingllm/Chart.yaml)<br>[cloud-deployments/helm/charts/anythingllm/README.md](../../../../sources/Mintplex-Labs__anything-llm/cloud-deployments/helm/charts/anythingllm/README.md)<br>[cloud-deployments/helm/charts/anythingllm/README.md.gotmpl](../../../../sources/Mintplex-Labs__anything-llm/cloud-deployments/helm/charts/anythingllm/README.md.gotmpl) |
| instruction | 0 | 명확하지 않음 |
| docs | 12 | [README.md](../../../../sources/Mintplex-Labs__anything-llm/README.md)<br>[server/storage/README.md](../../../../sources/Mintplex-Labs__anything-llm/server/storage/README.md)<br>[server/storage/models/README.md](../../../../sources/Mintplex-Labs__anything-llm/server/storage/models/README.md)<br>[locales/README.fa-IR.md](../../../../sources/Mintplex-Labs__anything-llm/locales/README.fa-IR.md)<br>[locales/README.ja-JP.md](../../../../sources/Mintplex-Labs__anything-llm/locales/README.ja-JP.md)<br>[locales/README.tr-TR.md](../../../../sources/Mintplex-Labs__anything-llm/locales/README.tr-TR.md)<br>[locales/README.zh-CN.md](../../../../sources/Mintplex-Labs__anything-llm/locales/README.zh-CN.md)<br>[extras/translator/README.md](../../../../sources/Mintplex-Labs__anything-llm/extras/translator/README.md) |
| config | 4 | [package.json](../../../../sources/Mintplex-Labs__anything-llm/package.json)<br>[server/package.json](../../../../sources/Mintplex-Labs__anything-llm/server/package.json)<br>[frontend/package.json](../../../../sources/Mintplex-Labs__anything-llm/frontend/package.json)<br>[collector/package.json](../../../../sources/Mintplex-Labs__anything-llm/collector/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 28 | [server/utils/agents/aibitat/plugins/create-files/pptx/test-themes.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/agents/aibitat/plugins/create-files/pptx/test-themes.js)<br>[server/utils/agents/aibitat/plugins/create-files/docx/test-themes.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/agents/aibitat/plugins/create-files/docx/test-themes.js)<br>[server/endpoints/api/openai/compatibility-test-script.cjs](../../../../sources/Mintplex-Labs__anything-llm/server/endpoints/api/openai/compatibility-test-script.cjs)<br>[server/__tests__/utils/vectorDbProviders/pgvector/index.test.js](../../../../sources/Mintplex-Labs__anything-llm/server/__tests__/utils/vectorDbProviders/pgvector/index.test.js)<br>[server/__tests__/utils/TextSplitter/index.test.js](../../../../sources/Mintplex-Labs__anything-llm/server/__tests__/utils/TextSplitter/index.test.js)<br>[server/__tests__/utils/SQLConnectors/connectionParser.test.js](../../../../sources/Mintplex-Labs__anything-llm/server/__tests__/utils/SQLConnectors/connectionParser.test.js) |
| CI workflow | 9 | [.github/workflows/build-and-push-image-semver.yaml](../../../../sources/Mintplex-Labs__anything-llm/.github/workflows/build-and-push-image-semver.yaml)<br>[.github/workflows/build-and-push-image.yaml](../../../../sources/Mintplex-Labs__anything-llm/.github/workflows/build-and-push-image.yaml)<br>[.github/workflows/build-qa-tag.yaml](../../../../sources/Mintplex-Labs__anything-llm/.github/workflows/build-qa-tag.yaml)<br>[.github/workflows/check-package-versions.yaml](../../../../sources/Mintplex-Labs__anything-llm/.github/workflows/check-package-versions.yaml)<br>[.github/workflows/check-translations.yaml](../../../../sources/Mintplex-Labs__anything-llm/.github/workflows/check-translations.yaml)<br>[.github/workflows/cleanup-qa-tag.yaml](../../../../sources/Mintplex-Labs__anything-llm/.github/workflows/cleanup-qa-tag.yaml) |
| 컨테이너/배포 | 22 | [docker/docker-compose.yml](../../../../sources/Mintplex-Labs__anything-llm/docker/docker-compose.yml)<br>[docker/Dockerfile](../../../../sources/Mintplex-Labs__anything-llm/docker/Dockerfile)<br>[cloud-deployments/openshift/Dockerfile](../../../../sources/Mintplex-Labs__anything-llm/cloud-deployments/openshift/Dockerfile)<br>[cloud-deployments/huggingface-spaces/Dockerfile](../../../../sources/Mintplex-Labs__anything-llm/cloud-deployments/huggingface-spaces/Dockerfile)<br>[cloud-deployments/helm/charts/anythingllm/.helmignore](../../../../sources/Mintplex-Labs__anything-llm/cloud-deployments/helm/charts/anythingllm/.helmignore)<br>[cloud-deployments/helm/charts/anythingllm/Chart.yaml](../../../../sources/Mintplex-Labs__anything-llm/cloud-deployments/helm/charts/anythingllm/Chart.yaml) |
| 보안/정책 | 3 | [SECURITY.md](../../../../sources/Mintplex-Labs__anything-llm/SECURITY.md)<br>[server/endpoints/api/auth/index.js](../../../../sources/Mintplex-Labs__anything-llm/server/endpoints/api/auth/index.js)<br>[frontend/src/pages/GeneralSettings/Security/index.jsx](../../../../sources/Mintplex-Labs__anything-llm/frontend/src/pages/GeneralSettings/Security/index.jsx) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `frontend/src/App.jsx`, `frontend/src/index.css`, `frontend/src/main.jsx`.
2. entrypoint를 따라 실행 흐름 확인: `frontend/src/App.jsx`, `frontend/src/index.css`, `frontend/src/main.jsx`.
3. agent/tool runtime 매핑: `server/utils/telegramBot/chat/agent.js`, `server/utils/helpers/agents.js`, `server/utils/chats/agents.js`.
4. retrieval/memory/indexing 확인: `server/index.js`, `server/utils/vectorDbProviders/zilliz/index.js`, `server/utils/vectorDbProviders/weaviate/index.js`.
5. test/eval 파일로 동작 검증: `server/utils/agents/aibitat/plugins/create-files/pptx/test-themes.js`, `server/utils/agents/aibitat/plugins/create-files/docx/test-themes.js`, `server/endpoints/api/openai/compatibility-test-script.cjs`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 Stop renting your intelligence. Own it with AnythingLLM. Everything you need for a powerful local first agent experience. 핵심 구조 신호는 JavaScript, package.json, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
