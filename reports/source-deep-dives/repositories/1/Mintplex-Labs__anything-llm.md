# Mintplex-Labs/anything-llm Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Stop renting your intelligence. Own it with AnythingLLM. Everything you need for a powerful local-first agent experience

## 요약

- 조사 단위: `sources/Mintplex-Labs__anything-llm` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,402 files, 783 directories, depth score 121, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=frontend/src/App.jsx, frontend/src/index.css, frontend/src/main.jsx이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Mintplex-Labs/anything-llm |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | JavaScript |
| Stars | 61740 |
| Forks | 6739 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/Mintplex-Labs__anything-llm](../../../../sources/Mintplex-Labs__anything-llm) |
| Existing report | [reports/global-trending/repositories/Mintplex-Labs__anything-llm.md](../../../global-trending/repositories/Mintplex-Labs__anything-llm.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1402 / 783 |
| Max observed depth | 11 |
| Top directories | .devcontainer, .github, browser-extension, cloud-deployments, collector, docker, embed, extras, frontend, images, locales, server |
| Top extensions | .js: 640, .jsx: 445, .png: 107, .sql: 40, .md: 30, (none): 26, .yaml: 23, .json: 20, .svg: 12, .mjs: 9, .yml: 7, .css: 6 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
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


## How It Runs

| Category | Source | Name | Command |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [frontend/src/App.jsx](../../../../sources/Mintplex-Labs__anything-llm/frontend/src/App.jsx)<br>[frontend/src/index.css](../../../../sources/Mintplex-Labs__anything-llm/frontend/src/index.css)<br>[frontend/src/main.jsx](../../../../sources/Mintplex-Labs__anything-llm/frontend/src/main.jsx) |
| agentRuntime | 251 | [server/utils/telegramBot/chat/agent.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/telegramBot/chat/agent.js)<br>[server/utils/helpers/agents.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/helpers/agents.js)<br>[server/utils/chats/agents.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/chats/agents.js)<br>[server/utils/agents/defaults.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/agents/defaults.js)<br>[server/utils/agents/ephemeral.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/agents/ephemeral.js)<br>[server/utils/agents/imported-manifest.schema.json](../../../../sources/Mintplex-Labs__anything-llm/server/utils/agents/imported-manifest.schema.json)<br>[server/utils/agents/imported.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/agents/imported.js)<br>[server/utils/agents/index.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/agents/index.js) |
| mcp | 4 | [server/utils/MCP/index.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/MCP/index.js)<br>[server/utils/MCP/hypervisor/index.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/MCP/hypervisor/index.js)<br>[frontend/src/media/agents/mcp-logo.svg](../../../../sources/Mintplex-Labs__anything-llm/frontend/src/media/agents/mcp-logo.svg)<br>[extras/support/announcements/assets/mcp.jpg](../../../../sources/Mintplex-Labs__anything-llm/extras/support/announcements/assets/mcp.jpg) |
| retrieval | 565 | [server/index.js](../../../../sources/Mintplex-Labs__anything-llm/server/index.js)<br>[server/utils/vectorDbProviders/zilliz/index.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/vectorDbProviders/zilliz/index.js)<br>[server/utils/vectorDbProviders/weaviate/index.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/vectorDbProviders/weaviate/index.js)<br>[server/utils/vectorDbProviders/qdrant/index.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/vectorDbProviders/qdrant/index.js)<br>[server/utils/vectorDbProviders/pinecone/index.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/vectorDbProviders/pinecone/index.js)<br>[server/utils/vectorDbProviders/pgvector/index.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/vectorDbProviders/pgvector/index.js)<br>[server/utils/vectorDbProviders/milvus/index.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/vectorDbProviders/milvus/index.js)<br>[server/utils/vectorDbProviders/lance/index.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/vectorDbProviders/lance/index.js) |
| spec | 0 | not obvious |
| eval | 28 | [server/utils/agents/aibitat/plugins/create-files/pptx/test-themes.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/agents/aibitat/plugins/create-files/pptx/test-themes.js)<br>[server/utils/agents/aibitat/plugins/create-files/docx/test-themes.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/agents/aibitat/plugins/create-files/docx/test-themes.js)<br>[server/endpoints/api/openai/compatibility-test-script.cjs](../../../../sources/Mintplex-Labs__anything-llm/server/endpoints/api/openai/compatibility-test-script.cjs)<br>[server/__tests__/utils/vectorDbProviders/pgvector/index.test.js](../../../../sources/Mintplex-Labs__anything-llm/server/__tests__/utils/vectorDbProviders/pgvector/index.test.js)<br>[server/__tests__/utils/TextSplitter/index.test.js](../../../../sources/Mintplex-Labs__anything-llm/server/__tests__/utils/TextSplitter/index.test.js)<br>[server/__tests__/utils/SQLConnectors/connectionParser.test.js](../../../../sources/Mintplex-Labs__anything-llm/server/__tests__/utils/SQLConnectors/connectionParser.test.js)<br>[server/__tests__/utils/safeJSONStringify/safeJSONStringify.test.js](../../../../sources/Mintplex-Labs__anything-llm/server/__tests__/utils/safeJSONStringify/safeJSONStringify.test.js)<br>[server/__tests__/utils/middleware/workspaceDeletionProtection.test.js](../../../../sources/Mintplex-Labs__anything-llm/server/__tests__/utils/middleware/workspaceDeletionProtection.test.js) |
| security | 3 | [SECURITY.md](../../../../sources/Mintplex-Labs__anything-llm/SECURITY.md)<br>[server/endpoints/api/auth/index.js](../../../../sources/Mintplex-Labs__anything-llm/server/endpoints/api/auth/index.js)<br>[frontend/src/pages/GeneralSettings/Security/index.jsx](../../../../sources/Mintplex-Labs__anything-llm/frontend/src/pages/GeneralSettings/Security/index.jsx) |
| ci | 9 | [.github/workflows/build-and-push-image-semver.yaml](../../../../sources/Mintplex-Labs__anything-llm/.github/workflows/build-and-push-image-semver.yaml)<br>[.github/workflows/build-and-push-image.yaml](../../../../sources/Mintplex-Labs__anything-llm/.github/workflows/build-and-push-image.yaml)<br>[.github/workflows/build-qa-tag.yaml](../../../../sources/Mintplex-Labs__anything-llm/.github/workflows/build-qa-tag.yaml)<br>[.github/workflows/check-package-versions.yaml](../../../../sources/Mintplex-Labs__anything-llm/.github/workflows/check-package-versions.yaml)<br>[.github/workflows/check-translations.yaml](../../../../sources/Mintplex-Labs__anything-llm/.github/workflows/check-translations.yaml)<br>[.github/workflows/cleanup-qa-tag.yaml](../../../../sources/Mintplex-Labs__anything-llm/.github/workflows/cleanup-qa-tag.yaml)<br>[.github/workflows/lint.yaml](../../../../sources/Mintplex-Labs__anything-llm/.github/workflows/lint.yaml)<br>[.github/workflows/run-tests.yaml](../../../../sources/Mintplex-Labs__anything-llm/.github/workflows/run-tests.yaml) |
| container | 22 | [docker/docker-compose.yml](../../../../sources/Mintplex-Labs__anything-llm/docker/docker-compose.yml)<br>[docker/Dockerfile](../../../../sources/Mintplex-Labs__anything-llm/docker/Dockerfile)<br>[cloud-deployments/openshift/Dockerfile](../../../../sources/Mintplex-Labs__anything-llm/cloud-deployments/openshift/Dockerfile)<br>[cloud-deployments/huggingface-spaces/Dockerfile](../../../../sources/Mintplex-Labs__anything-llm/cloud-deployments/huggingface-spaces/Dockerfile)<br>[cloud-deployments/helm/charts/anythingllm/.helmignore](../../../../sources/Mintplex-Labs__anything-llm/cloud-deployments/helm/charts/anythingllm/.helmignore)<br>[cloud-deployments/helm/charts/anythingllm/Chart.yaml](../../../../sources/Mintplex-Labs__anything-llm/cloud-deployments/helm/charts/anythingllm/Chart.yaml)<br>[cloud-deployments/helm/charts/anythingllm/README.md](../../../../sources/Mintplex-Labs__anything-llm/cloud-deployments/helm/charts/anythingllm/README.md)<br>[cloud-deployments/helm/charts/anythingllm/README.md.gotmpl](../../../../sources/Mintplex-Labs__anything-llm/cloud-deployments/helm/charts/anythingllm/README.md.gotmpl) |
| instruction | 0 | not obvious |
| docs | 12 | [README.md](../../../../sources/Mintplex-Labs__anything-llm/README.md)<br>[server/storage/README.md](../../../../sources/Mintplex-Labs__anything-llm/server/storage/README.md)<br>[server/storage/models/README.md](../../../../sources/Mintplex-Labs__anything-llm/server/storage/models/README.md)<br>[locales/README.fa-IR.md](../../../../sources/Mintplex-Labs__anything-llm/locales/README.fa-IR.md)<br>[locales/README.ja-JP.md](../../../../sources/Mintplex-Labs__anything-llm/locales/README.ja-JP.md)<br>[locales/README.tr-TR.md](../../../../sources/Mintplex-Labs__anything-llm/locales/README.tr-TR.md)<br>[locales/README.zh-CN.md](../../../../sources/Mintplex-Labs__anything-llm/locales/README.zh-CN.md)<br>[extras/translator/README.md](../../../../sources/Mintplex-Labs__anything-llm/extras/translator/README.md) |
| config | 4 | [package.json](../../../../sources/Mintplex-Labs__anything-llm/package.json)<br>[server/package.json](../../../../sources/Mintplex-Labs__anything-llm/server/package.json)<br>[frontend/package.json](../../../../sources/Mintplex-Labs__anything-llm/frontend/package.json)<br>[collector/package.json](../../../../sources/Mintplex-Labs__anything-llm/collector/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 28 | [server/utils/agents/aibitat/plugins/create-files/pptx/test-themes.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/agents/aibitat/plugins/create-files/pptx/test-themes.js)<br>[server/utils/agents/aibitat/plugins/create-files/docx/test-themes.js](../../../../sources/Mintplex-Labs__anything-llm/server/utils/agents/aibitat/plugins/create-files/docx/test-themes.js)<br>[server/endpoints/api/openai/compatibility-test-script.cjs](../../../../sources/Mintplex-Labs__anything-llm/server/endpoints/api/openai/compatibility-test-script.cjs)<br>[server/__tests__/utils/vectorDbProviders/pgvector/index.test.js](../../../../sources/Mintplex-Labs__anything-llm/server/__tests__/utils/vectorDbProviders/pgvector/index.test.js)<br>[server/__tests__/utils/TextSplitter/index.test.js](../../../../sources/Mintplex-Labs__anything-llm/server/__tests__/utils/TextSplitter/index.test.js)<br>[server/__tests__/utils/SQLConnectors/connectionParser.test.js](../../../../sources/Mintplex-Labs__anything-llm/server/__tests__/utils/SQLConnectors/connectionParser.test.js) |
| CI workflows | 9 | [.github/workflows/build-and-push-image-semver.yaml](../../../../sources/Mintplex-Labs__anything-llm/.github/workflows/build-and-push-image-semver.yaml)<br>[.github/workflows/build-and-push-image.yaml](../../../../sources/Mintplex-Labs__anything-llm/.github/workflows/build-and-push-image.yaml)<br>[.github/workflows/build-qa-tag.yaml](../../../../sources/Mintplex-Labs__anything-llm/.github/workflows/build-qa-tag.yaml)<br>[.github/workflows/check-package-versions.yaml](../../../../sources/Mintplex-Labs__anything-llm/.github/workflows/check-package-versions.yaml)<br>[.github/workflows/check-translations.yaml](../../../../sources/Mintplex-Labs__anything-llm/.github/workflows/check-translations.yaml)<br>[.github/workflows/cleanup-qa-tag.yaml](../../../../sources/Mintplex-Labs__anything-llm/.github/workflows/cleanup-qa-tag.yaml) |
| Containers / deploy | 22 | [docker/docker-compose.yml](../../../../sources/Mintplex-Labs__anything-llm/docker/docker-compose.yml)<br>[docker/Dockerfile](../../../../sources/Mintplex-Labs__anything-llm/docker/Dockerfile)<br>[cloud-deployments/openshift/Dockerfile](../../../../sources/Mintplex-Labs__anything-llm/cloud-deployments/openshift/Dockerfile)<br>[cloud-deployments/huggingface-spaces/Dockerfile](../../../../sources/Mintplex-Labs__anything-llm/cloud-deployments/huggingface-spaces/Dockerfile)<br>[cloud-deployments/helm/charts/anythingllm/.helmignore](../../../../sources/Mintplex-Labs__anything-llm/cloud-deployments/helm/charts/anythingllm/.helmignore)<br>[cloud-deployments/helm/charts/anythingllm/Chart.yaml](../../../../sources/Mintplex-Labs__anything-llm/cloud-deployments/helm/charts/anythingllm/Chart.yaml) |
| Security / policy | 3 | [SECURITY.md](../../../../sources/Mintplex-Labs__anything-llm/SECURITY.md)<br>[server/endpoints/api/auth/index.js](../../../../sources/Mintplex-Labs__anything-llm/server/endpoints/api/auth/index.js)<br>[frontend/src/pages/GeneralSettings/Security/index.jsx](../../../../sources/Mintplex-Labs__anything-llm/frontend/src/pages/GeneralSettings/Security/index.jsx) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `frontend/src/App.jsx`, `frontend/src/index.css`, `frontend/src/main.jsx`.
2. Trace execution through entrypoints: `frontend/src/App.jsx`, `frontend/src/index.css`, `frontend/src/main.jsx`.
3. Map agent/tool runtime through: `server/utils/telegramBot/chat/agent.js`, `server/utils/helpers/agents.js`, `server/utils/chats/agents.js`.
4. Inspect retrieval/memory/indexing through: `server/index.js`, `server/utils/vectorDbProviders/zilliz/index.js`, `server/utils/vectorDbProviders/weaviate/index.js`.
5. Verify behavior through test/eval files: `server/utils/agents/aibitat/plugins/create-files/pptx/test-themes.js`, `server/utils/agents/aibitat/plugins/create-files/docx/test-themes.js`, `server/endpoints/api/openai/compatibility-test-script.cjs`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 Stop renting your intelligence. Own it with AnythingLLM. Everything you need for a powerful local first agent experience. 핵심 구조 신호는 JavaScript, package.json, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
