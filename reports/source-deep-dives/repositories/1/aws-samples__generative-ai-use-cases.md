# aws-samples/generative-ai-use-cases Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Application implementation with business use cases for safely utilizing generative AI in business operations

## 요약

- 조사 단위: `sources/aws-samples__generative-ai-use-cases` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 968 files, 145 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 retrieval=packages/web/index.html, packages/web/src/index.css, packages/web/src/prompts/index.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | aws-samples/generative-ai-use-cases |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | TypeScript |
| Stars | 1354 |
| Forks | 431 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/aws-samples__generative-ai-use-cases](../../../../sources/aws-samples__generative-ai-use-cases) |
| Existing report | [reports/global-trending/repositories/aws-samples__generative-ai-use-cases.md](../../../global-trending/repositories/aws-samples__generative-ai-use-cases.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 968 / 145 |
| Max observed depth | 8 |
| Top directories | .github, .husky, .kiro, browser-extension, docs, packages, scripts |
| Top extensions | .ts: 349, .tsx: 176, .png: 135, .md: 78, .geojson: 49, .json: 35, (none): 27, .gif: 18, .py: 17, .yml: 15, .yaml: 12, .js: 10 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
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


## How It Runs

| Category | Source | Name | Command |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
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
| instruction | 0 | not obvious |
| docs | 223 | [mkdocs.yml](../../../../sources/aws-samples__generative-ai-use-cases/mkdocs.yml)<br>[README_ja.md](../../../../sources/aws-samples__generative-ai-use-cases/README_ja.md)<br>[README_ko.md](../../../../sources/aws-samples__generative-ai-use-cases/README_ko.md)<br>[README.md](../../../../sources/aws-samples__generative-ai-use-cases/README.md)<br>[packages/cdk/rag-docs/docs/bedrock-ug.pdf](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/rag-docs/docs/bedrock-ug.pdf)<br>[packages/cdk/rag-docs/docs/bedrock-ug.pdf.metadata.json](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/rag-docs/docs/bedrock-ug.pdf.metadata.json)<br>[packages/cdk/rag-docs/docs/nova-ug.pdf](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/rag-docs/docs/nova-ug.pdf)<br>[packages/cdk/rag-docs/docs/nova-ug.pdf.metadata.json](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/rag-docs/docs/nova-ug.pdf.metadata.json) |
| config | 23 | [package.json](../../../../sources/aws-samples__generative-ai-use-cases/package.json)<br>[requirements.txt](../../../../sources/aws-samples__generative-ai-use-cases/requirements.txt)<br>[packages/web/package.json](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/package.json)<br>[packages/web/tsconfig.json](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/tsconfig.json)<br>[packages/types/package.json](../../../../sources/aws-samples__generative-ai-use-cases/packages/types/package.json)<br>[packages/eslint-plugin-i18nhelper/package.json](../../../../sources/aws-samples__generative-ai-use-cases/packages/eslint-plugin-i18nhelper/package.json)<br>[packages/eslint-plugin-i18nhelper/tsconfig.json](../../../../sources/aws-samples__generative-ai-use-cases/packages/eslint-plugin-i18nhelper/tsconfig.json)<br>[packages/common/package.json](../../../../sources/aws-samples__generative-ai-use-cases/packages/common/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 23 | [scripts/run-e2e-tests.sh](../../../../sources/aws-samples__generative-ai-use-cases/scripts/run-e2e-tests.sh)<br>[packages/web/tests/use-case-builder/items.test.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/tests/use-case-builder/items.test.ts)<br>[packages/web/tests/use-case-builder/placeholders.test.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/tests/use-case-builder/placeholders.test.ts)<br>[packages/web/tests/hooks/useGeoJSON.test.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/tests/hooks/useGeoJSON.test.ts)<br>[packages/web/tests/components/ECharts/chart-options-heatmap.test.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/tests/components/ECharts/chart-options-heatmap.test.ts)<br>[packages/web/tests/components/ECharts/chart-options-map.test.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/tests/components/ECharts/chart-options-map.test.ts) |
| CI workflows | 10 | [.github/workflows/browser-extension.yml](../../../../sources/aws-samples__generative-ai-use-cases/.github/workflows/browser-extension.yml)<br>[.github/workflows/close-stale-issues.yml](../../../../sources/aws-samples__generative-ai-use-cases/.github/workflows/close-stale-issues.yml)<br>[.github/workflows/deny-cdk-context-json.yml](../../../../sources/aws-samples__generative-ai-use-cases/.github/workflows/deny-cdk-context-json.yml)<br>[.github/workflows/genu-auto-deploy.yml](../../../../sources/aws-samples__generative-ai-use-cases/.github/workflows/genu-auto-deploy.yml)<br>[.github/workflows/gh-pages.yml](../../../../sources/aws-samples__generative-ai-use-cases/.github/workflows/gh-pages.yml)<br>[.github/workflows/node.js.yml](../../../../sources/aws-samples__generative-ai-use-cases/.github/workflows/node.js.yml) |
| Containers / deploy | 13 | [docker-compose.dev.yml](../../../../sources/aws-samples__generative-ai-use-cases/docker-compose.dev.yml)<br>[packages/web/Dockerfile.dev](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/Dockerfile.dev)<br>[packages/web/src/components/charts/ModelExecutionsChart.tsx](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/components/charts/ModelExecutionsChart.tsx)<br>[packages/web/src/components/charts/TokensTimeSeriesChart.tsx](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/components/charts/TokensTimeSeriesChart.tsx)<br>[packages/web/src/components/charts/types.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/components/charts/types.ts)<br>[packages/web/src/components/charts/UsecaseDistributionChart.tsx](../../../../sources/aws-samples__generative-ai-use-cases/packages/web/src/components/charts/UsecaseDistributionChart.tsx) |
| Security / policy | 6 | [packages/cdk/lib/guardrail-stack.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/lib/guardrail-stack.ts)<br>[packages/cdk/lib/utils/s3-access-policy.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/lib/utils/s3-access-policy.ts)<br>[packages/cdk/lib/construct/auth.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/lib/construct/auth.ts)<br>[packages/cdk/lib/construct/guardrail.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/lib/construct/guardrail.ts)<br>[packages/cdk/lambda/utils/auth.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/lambda/utils/auth.ts)<br>[packages/cdk/lambda/agentBuilder/utils/auth-utils.ts](../../../../sources/aws-samples__generative-ai-use-cases/packages/cdk/lambda/agentBuilder/utils/auth-utils.ts) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `packages/web/index.html`, `packages/web/src/index.css`, `packages/web/src/prompts/index.ts`.
2. Trace execution through entrypoints: `packages/web/src/App.tsx`, `packages/web/src/index.css`, `packages/web/src/main.tsx`.
3. Map agent/tool runtime through: `packages/web/tests/hooks/useGeoJSON.test.ts`, `packages/web/src/hooks/useAgentCore.ts`, `packages/web/src/hooks/useAgentCoreApi.ts`.
4. Inspect retrieval/memory/indexing through: `packages/web/index.html`, `packages/web/src/index.css`, `packages/web/src/prompts/index.ts`.
5. Verify behavior through test/eval files: `scripts/run-e2e-tests.sh`, `packages/web/tests/use-case-builder/items.test.ts`, `packages/web/tests/use-case-builder/placeholders.test.ts`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Application implementation with business use cases for safely utilizing generative AI in business operations. 핵심 구조 신호는 TypeScript, package.json, requirements.txt, README.md, LICENSE, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
