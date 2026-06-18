# aws-samples/generative-ai-use-cases 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Application implementation with business use cases for safely utilizing generative AI in business operations

## 요약

- 조사 단위: `sources/aws-samples__generative-ai-use-cases` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 968 files, 145 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 retrieval=packages/web/index.html, packages/web/src/index.css, packages/web/src/prompts/index.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | aws-samples/generative-ai-use-cases |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | TypeScript |
| Stars | 1354 |
| Forks | 431 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/aws-samples__generative-ai-use-cases](../../../../sources/aws-samples__generative-ai-use-cases) |
| 기존 보고서 | [reports/global-trending/repositories/aws-samples__generative-ai-use-cases.md](../../../global-trending/repositories/aws-samples__generative-ai-use-cases.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 968 / 145 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .github, .husky, .kiro, browser-extension, docs, packages, scripts |
| 상위 확장자 | .ts: 349, .tsx: 176, .png: 135, .md: 78, .geojson: 49, .json: 35, (none): 27, .gif: 18, .py: 17, .yml: 15, .yaml: 12, .js: 10 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/web | packages workspace | 71 |
| packages/cdk | packages workspace | 65 |
| docs | documentation surface | 38 |
| packages/types | packages workspace | 6 |
| packages/common | packages workspace | 5 |
| packages/eslint-plugin-i18nhelper | packages workspace | 4 |
| .github | ci surface | 1 |
| browser-extension | top-level component | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | lint | run-s custom-lint:build root:lint web:lint:fix cdk:lint cdk:lambda-build-dryrun |
| test | package.json | test | run-s web:test |
| quality | package.json | root:lint | npx prettier --write . |
| serve-dev | package.json | web:devw | source ./setup-env.sh ${npm_config_env} && VITE_APP_VERSION=${npm_package_version} npm -w packages/web run dev |
| serve-dev | package.json | web:devww | powershell ./web_devw_win.ps1 |
| serve-dev | package.json | web:dev | VITE_APP_VERSION=${npm_package_version} npm -w packages/web run dev |
| serve-dev | package.json | web:build | VITE_APP_VERSION=${npm_package_version} npm -w packages/web run build -- |
| serve-dev | package.json | web:build:analyze | VITE_APP_VERSION=${npm_package_version} npm -w packages/web run build -- --mode analyze |
| quality | package.json | web:lint | npm -w packages/web run lint |
| quality | package.json | web:lint:fix | npm -w packages/web run lint:fix |
| test | package.json | web:test | npm -w packages/web run test |
| build | package.json | cdk:build | npm -w packages/cdk run build |
| utility | package.json | cdk:deploy | npm -w packages/cdk run cdk deploy -- --all |
| build | package.json | cdk:deploy:quick | npm -w packages/cdk run cdk deploy -- --all --asset-parallelism --asset-prebuild=false --concurrency 3 --method=direct --require-approval never --force |
| build | package.json | cdk:deploy:quick:hotswap | npm -w packages/cdk run cdk deploy -- --all --asset-parallelism --asset-prebuild=false --concurrency 3 --method=direct --require-approval never --force --hotswap |
| utility | package.json | cdk:diff | npm -w packages/cdk run cdk diff -- --all |
| utility | package.json | cdk:destroy | npm -w packages/cdk run cdk destroy -- --all |
| quality | package.json | cdk:lint | npm -w packages/cdk run lint |
| build | package.json | cdk:lambda-build-dryrun | npm -w packages/cdk run lambda-build-dryrun |
| test | package.json | cdk:test | npm -w packages/cdk run test |
| test | package.json | cdk:test:update-snapshot | npm -w packages/cdk run test -- --update-snapshot |
| test | package.json | cdk:test:e2e | source ./setup-env.sh ${npm_config_env} && ./scripts/run-e2e-tests.sh |
| serve-dev | package.json | dev:docker | source ./setup-env.sh ${npm_config_env} && docker compose -f docker-compose.dev.yml up --build |
| serve-dev | package.json | dev:docker:stop | docker compose -f docker-compose.dev.yml down |
| utility | package.json | extension:ci | cd browser-extension && npm ci |
| serve-dev | package.json | extension:dev | cd browser-extension && npm run dev |
| serve-dev | package.json | extension:devw | source ./setup-env.sh && cd browser-extension && npm run dev |
| build | package.json | extension:build | cd browser-extension && npm run build |
| build | package.json | extension:buildw | source ./setup-env.sh && cd browser-extension && npm run build |
| quality | package.json | extension:lint | npx prettier --write browser-extension/. && cd browser-extension |
| build | package.json | custom-lint:build | npm -w packages/eslint-plugin-i18nhelper run build |
| serve-dev | package.json | docs:dev | mkdocs serve |
| build | package.json | docs:build | mkdocs build |
| utility | package.json | docs:gh-deploy | mkdocs gh-deploy -- |
| utility | package.json | prepare | husky |


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
| retrieval | [packages/web/index.html](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/index.html) | retrieval signal |
| retrieval | [packages/web/src/index.css](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/index.css) | retrieval signal |
| retrieval | [packages/web/src/prompts/index.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/prompts/index.ts) | retrieval signal |
| retrieval | [packages/web/src/prompts/diagrams/git-graph.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/prompts/diagrams/git-graph.ts) | retrieval signal |
| entrypoints | [packages/web/src/App.tsx](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/App.tsx) | entrypoints signal |
| entrypoints | [packages/web/src/main.tsx](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/main.tsx) | entrypoints signal |
| entrypoints | [packages/types/src/index.d.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/types/src/index.d.ts) | entrypoints signal |
| docs | [mkdocs.yml](../../../../sources/aws-samples__generative-ai-use-cases/mkdocs.yml) | docs signal |
| docs | [README_ja.md](../../../../sources/aws-samples__generative-ai-use-cases/README_ja.md) | docs signal |
| docs | [README_ko.md](../../../../sources/aws-samples__generative-ai-use-cases/README_ko.md) | docs signal |
| docs | [README.md](../../../../sources/aws-samples__generative-ai-use-cases/README.md) | docs signal |
| eval | [scripts/run-e2e-tests.sh](../../../../sources/aws-samples__generative-ai-use-cases/scripts/run-e2e-tests.sh) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 9 | [packages/web/src/App.tsx](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/App.tsx)<br>[packages/web/src/index.css](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/index.css)<br>[packages/web/src/main.tsx](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/main.tsx)<br>[packages/types/src/index.d.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/types/src/index.d.ts)<br>[packages/eslint-plugin-i18nhelper/src/index.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/eslint-plugin-i18nhelper/src/index.ts)<br>[packages/common/src/index.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/common/src/index.ts)<br>[packages/cdk/bin/generative-ai-use-cases.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/bin/generative-ai-use-cases.ts)<br>[browser-extension/src/index.html](../../../../sources/aws-samples__generative-ai-use-cases/browser-extension/src/index.html) |
| agentRuntime | 98 | [packages/web/tests/hooks/useGeoJSON.test.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/tests/hooks/useGeoJSON.test.ts)<br>[packages/web/src/hooks/useAgentCore.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/hooks/useAgentCore.ts)<br>[packages/web/src/hooks/useAgentCoreApi.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/hooks/useAgentCoreApi.ts)<br>[packages/web/src/hooks/useBranding.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/hooks/useBranding.ts)<br>[packages/web/src/hooks/useChat.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/hooks/useChat.ts)<br>[packages/web/src/hooks/useChatApi.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/hooks/useChatApi.ts)<br>[packages/web/src/hooks/useChatList.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/hooks/useChatList.ts)<br>[packages/web/src/hooks/useDiagram.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/hooks/useDiagram.ts) |
| mcp | 14 | [packages/types/src/mcp-servers.d.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/types/src/mcp-servers.d.ts)<br>[packages/types/src/mcp.d.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/types/src/mcp.d.ts)<br>[packages/cdk/mcp-api/.gitignore](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/mcp-api/.gitignore)<br>[packages/cdk/mcp-api/.python-version](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/mcp-api/.python-version)<br>[packages/cdk/mcp-api/app.py](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/mcp-api/app.py)<br>[packages/cdk/mcp-api/Dockerfile](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/mcp-api/Dockerfile)<br>[packages/cdk/mcp-api/mcp.json](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/mcp-api/mcp.json)<br>[packages/cdk/mcp-api/pyproject.toml](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/mcp-api/pyproject.toml) |
| retrieval | 39 | [packages/web/index.html](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/index.html)<br>[packages/web/src/index.css](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/index.css)<br>[packages/web/src/prompts/index.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/prompts/index.ts)<br>[packages/web/src/prompts/diagrams/git-graph.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/prompts/diagrams/git-graph.ts)<br>[packages/web/src/prompts/diagrams/index.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/prompts/diagrams/index.ts)<br>[packages/web/src/hooks/useSpeechToSpeech/index.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/hooks/useSpeechToSpeech/index.ts)<br>[packages/web/src/components/ECharts/chart-options/index.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/components/ECharts/chart-options/index.ts)<br>[packages/types/src/index.d.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/types/src/index.d.ts) |
| spec | 3 | [requirements.txt](../../../../sources/aws-samples__generative-ai-use-cases/requirements.txt)<br>[packages/web/src/prompts/diagrams/architecture.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/prompts/diagrams/architecture.ts)<br>[packages/web/src/prompts/diagrams/requirement-diagram.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/prompts/diagrams/requirement-diagram.ts) |
| eval | 23 | [scripts/run-e2e-tests.sh](../../../../sources/aws-samples__generative-ai-use-cases/scripts/run-e2e-tests.sh)<br>[packages/web/tests/use-case-builder/items.test.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/tests/use-case-builder/items.test.ts)<br>[packages/web/tests/use-case-builder/placeholders.test.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/tests/use-case-builder/placeholders.test.ts)<br>[packages/web/tests/hooks/useGeoJSON.test.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/tests/hooks/useGeoJSON.test.ts)<br>[packages/web/tests/components/ECharts/chart-options-heatmap.test.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/tests/components/ECharts/chart-options-heatmap.test.ts)<br>[packages/web/tests/components/ECharts/chart-options-map.test.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/tests/components/ECharts/chart-options-map.test.ts)<br>[packages/web/tests/components/ECharts/EChartsRenderer.test.tsx](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/tests/components/ECharts/EChartsRenderer.test.tsx)<br>[packages/web/tests/components/ECharts/EChartsWithToggle.test.tsx](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/tests/components/ECharts/EChartsWithToggle.test.tsx) |
| security | 6 | [packages/cdk/lib/guardrail-stack.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/lib/guardrail-stack.ts)<br>[packages/cdk/lib/utils/s3-access-policy.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/lib/utils/s3-access-policy.ts)<br>[packages/cdk/lib/construct/auth.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/lib/construct/auth.ts)<br>[packages/cdk/lib/construct/guardrail.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/lib/construct/guardrail.ts)<br>[packages/cdk/lambda/utils/auth.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/lambda/utils/auth.ts)<br>[packages/cdk/lambda/agentBuilder/utils/auth-utils.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/lambda/agentBuilder/utils/auth-utils.ts) |
| ci | 10 | [.github/workflows/browser-extension.yml](../../../../sources/aws-samples__generative-ai-use-cases/.github/workflows/browser-extension.yml)<br>[.github/workflows/close-stale-issues.yml](../../../../sources/aws-samples__generative-ai-use-cases/.github/workflows/close-stale-issues.yml)<br>[.github/workflows/deny-cdk-context-json.yml](../../../../sources/aws-samples__generative-ai-use-cases/.github/workflows/deny-cdk-context-json.yml)<br>[.github/workflows/genu-auto-deploy.yml](../../../../sources/aws-samples__generative-ai-use-cases/.github/workflows/genu-auto-deploy.yml)<br>[.github/workflows/gh-pages.yml](../../../../sources/aws-samples__generative-ai-use-cases/.github/workflows/gh-pages.yml)<br>[.github/workflows/node.js.yml](../../../../sources/aws-samples__generative-ai-use-cases/.github/workflows/node.js.yml)<br>[.github/workflows/publish-release.yml](../../../../sources/aws-samples__generative-ai-use-cases/.github/workflows/publish-release.yml)<br>[.github/workflows/python.yml](../../../../sources/aws-samples__generative-ai-use-cases/.github/workflows/python.yml) |
| container | 13 | [docker-compose.dev.yml](../../../../sources/aws-samples__generative-ai-use-cases/docker-compose.dev.yml)<br>[packages/web/Dockerfile.dev](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/Dockerfile.dev)<br>[packages/web/src/components/charts/ModelExecutionsChart.tsx](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/components/charts/ModelExecutionsChart.tsx)<br>[packages/web/src/components/charts/TokensTimeSeriesChart.tsx](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/components/charts/TokensTimeSeriesChart.tsx)<br>[packages/web/src/components/charts/types.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/components/charts/types.ts)<br>[packages/web/src/components/charts/UsecaseDistributionChart.tsx](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/components/charts/UsecaseDistributionChart.tsx)<br>[packages/cdk/mcp-api/Dockerfile](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/mcp-api/Dockerfile)<br>[packages/cdk/lambda-python/research-agent-core-runtime/docker-compose.yml](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/lambda-python/research-agent-core-runtime/docker-compose.yml) |
| instruction | 0 | 명확하지 않음 |
| docs | 223 | [mkdocs.yml](../../../../sources/aws-samples__generative-ai-use-cases/mkdocs.yml)<br>[README_ja.md](../../../../sources/aws-samples__generative-ai-use-cases/README_ja.md)<br>[README_ko.md](../../../../sources/aws-samples__generative-ai-use-cases/README_ko.md)<br>[README.md](../../../../sources/aws-samples__generative-ai-use-cases/README.md)<br>[packages/cdk/rag-docs/docs/bedrock-ug.pdf](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/rag-docs/docs/bedrock-ug.pdf)<br>[packages/cdk/rag-docs/docs/bedrock-ug.pdf.metadata.json](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/rag-docs/docs/bedrock-ug.pdf.metadata.json)<br>[packages/cdk/rag-docs/docs/nova-ug.pdf](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/rag-docs/docs/nova-ug.pdf)<br>[packages/cdk/rag-docs/docs/nova-ug.pdf.metadata.json](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/rag-docs/docs/nova-ug.pdf.metadata.json) |
| config | 23 | [package.json](../../../../sources/aws-samples__generative-ai-use-cases/package.json)<br>[requirements.txt](../../../../sources/aws-samples__generative-ai-use-cases/requirements.txt)<br>[packages/web/package.json](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/package.json)<br>[packages/web/tsconfig.json](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/tsconfig.json)<br>[packages/types/package.json](../../../../sources/aws-samples__generative-ai-use-cases/packages/types/package.json)<br>[packages/eslint-plugin-i18nhelper/package.json](../../../../sources/aws-samples__generative-ai-use-cases/packages/eslint-plugin-i18nhelper/package.json)<br>[packages/eslint-plugin-i18nhelper/tsconfig.json](../../../../sources/aws-samples__generative-ai-use-cases/packages/eslint-plugin-i18nhelper/tsconfig.json)<br>[packages/common/package.json](../../../../sources/aws-samples__generative-ai-use-cases/packages/common/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 23 | [scripts/run-e2e-tests.sh](../../../../sources/aws-samples__generative-ai-use-cases/scripts/run-e2e-tests.sh)<br>[packages/web/tests/use-case-builder/items.test.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/tests/use-case-builder/items.test.ts)<br>[packages/web/tests/use-case-builder/placeholders.test.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/tests/use-case-builder/placeholders.test.ts)<br>[packages/web/tests/hooks/useGeoJSON.test.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/tests/hooks/useGeoJSON.test.ts)<br>[packages/web/tests/components/ECharts/chart-options-heatmap.test.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/tests/components/ECharts/chart-options-heatmap.test.ts)<br>[packages/web/tests/components/ECharts/chart-options-map.test.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/tests/components/ECharts/chart-options-map.test.ts) |
| CI workflow | 10 | [.github/workflows/browser-extension.yml](../../../../sources/aws-samples__generative-ai-use-cases/.github/workflows/browser-extension.yml)<br>[.github/workflows/close-stale-issues.yml](../../../../sources/aws-samples__generative-ai-use-cases/.github/workflows/close-stale-issues.yml)<br>[.github/workflows/deny-cdk-context-json.yml](../../../../sources/aws-samples__generative-ai-use-cases/.github/workflows/deny-cdk-context-json.yml)<br>[.github/workflows/genu-auto-deploy.yml](../../../../sources/aws-samples__generative-ai-use-cases/.github/workflows/genu-auto-deploy.yml)<br>[.github/workflows/gh-pages.yml](../../../../sources/aws-samples__generative-ai-use-cases/.github/workflows/gh-pages.yml)<br>[.github/workflows/node.js.yml](../../../../sources/aws-samples__generative-ai-use-cases/.github/workflows/node.js.yml) |
| 컨테이너/배포 | 13 | [docker-compose.dev.yml](../../../../sources/aws-samples__generative-ai-use-cases/docker-compose.dev.yml)<br>[packages/web/Dockerfile.dev](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/Dockerfile.dev)<br>[packages/web/src/components/charts/ModelExecutionsChart.tsx](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/components/charts/ModelExecutionsChart.tsx)<br>[packages/web/src/components/charts/TokensTimeSeriesChart.tsx](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/components/charts/TokensTimeSeriesChart.tsx)<br>[packages/web/src/components/charts/types.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/components/charts/types.ts)<br>[packages/web/src/components/charts/UsecaseDistributionChart.tsx](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/components/charts/UsecaseDistributionChart.tsx) |
| 보안/정책 | 6 | [packages/cdk/lib/guardrail-stack.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/lib/guardrail-stack.ts)<br>[packages/cdk/lib/utils/s3-access-policy.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/lib/utils/s3-access-policy.ts)<br>[packages/cdk/lib/construct/auth.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/lib/construct/auth.ts)<br>[packages/cdk/lib/construct/guardrail.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/lib/construct/guardrail.ts)<br>[packages/cdk/lambda/utils/auth.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/lambda/utils/auth.ts)<br>[packages/cdk/lambda/agentBuilder/utils/auth-utils.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/lambda/agentBuilder/utils/auth-utils.ts) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/web/index.html`, `packages/web/src/index.css`, `packages/web/src/prompts/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `packages/web/src/App.tsx`, `packages/web/src/index.css`, `packages/web/src/main.tsx`.
3. agent/tool runtime 매핑: `packages/web/tests/hooks/useGeoJSON.test.ts`, `packages/web/src/hooks/useAgentCore.ts`, `packages/web/src/hooks/useAgentCoreApi.ts`.
4. retrieval/memory/indexing 확인: `packages/web/index.html`, `packages/web/src/index.css`, `packages/web/src/prompts/index.ts`.
5. test/eval 파일로 동작 검증: `scripts/run-e2e-tests.sh`, `packages/web/tests/use-case-builder/items.test.ts`, `packages/web/tests/use-case-builder/placeholders.test.ts`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Application implementation with business use cases for safely utilizing generative AI in business operations. 핵심 구조 신호는 TypeScript, package.json, requirements.txt, README.md, LICENSE, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
