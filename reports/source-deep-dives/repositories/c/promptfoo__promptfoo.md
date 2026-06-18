# promptfoo/promptfoo 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Local clone structure analysis: 5400 files, 1002 directories.

## 요약

- 조사 단위: `sources/promptfoo__promptfoo` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 5,398 files, 1,001 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=test/smoke/mcp.test.ts, test/redteam/plugins/mcp.test.ts, test/providers/openai/responses/mcp.test.ts이고, 의존성 단서는 openai, anthropic, claude, express, commander, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | promptfoo/promptfoo |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 22326 |
| Forks | 1995 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/promptfoo__promptfoo](../../../../sources/promptfoo__promptfoo) |
| 기존 보고서 | [reports/global-trending/repositories/promptfoo__promptfoo.md](../../../global-trending/repositories/promptfoo__promptfoo.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 5398 / 1001 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .agents, .claude, .claude-plugin, .cursor, .devcontainer, .github, .husky, architecture, code-scan-action, docs, drizzle, examples, helm, plugins, scripts, site, src, test, tools |
| 상위 확장자 | .ts: 1950, .md: 833, .tsx: 631, .yaml: 625, .png: 367, .json: 164, .jpg: 109, .js: 106, .py: 103, .svg: 89, .txt: 85, .css: 75 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 94 |
| docs | documentation surface | 4 |
| examples/integration-browser | examples workspace | 3 |
| examples/integration-opentelemetry | examples workspace | 3 |
| examples/provider-golang | examples workspace | 3 |
| examples/provider-http | examples workspace | 3 |
| examples/claude-agent-sdk | examples workspace | 2 |
| examples/config-websockets | examples workspace | 2 |
| examples/eval-f-score | examples workspace | 2 |
| examples/eval-image-classification | examples workspace | 2 |
| examples/eval-rag-full | examples workspace | 2 |
| examples/integration-crewai | examples workspace | 2 |
| examples/integration-docker | examples workspace | 2 |
| examples/integration-google-adk | examples workspace | 2 |
| examples/integration-langchain | examples workspace | 2 |
| examples/integration-pydantic-ai | examples workspace | 2 |
| examples/integration-strands-agents | examples workspace | 2 |
| examples/openai-agents | examples workspace | 2 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | audit:fix | npm audit fix && npm audit fix --prefix src/app && npm audit fix --prefix site |
| utility | package.json | architecture:baseline | tsx scripts/regenerateEdgeBaseline.ts |
| quality | package.json | architecture:check | tsx scripts/checkArchitectureBoundaries.ts |
| build | package.json | bin | dist/src/entrypoint.js |
| build | package.json | build:app | npm run build --prefix src/app |
| build | package.json | build:clean | shx rm -rf dist |
| serve-dev | package.json | build:watch | NODE_OPTIONS='--max-old-space-size=8192' tsdown --watch |
| build | package.json | build | concurrently -g --kill-others-on-fail "npm run tsc" "NODE_OPTIONS='--max-old-space-size=8192' tsdown" "npm run build:app" |
| build | package.json | postbuild | tsx scripts/postbuild.ts |
| utility | package.json | citation:generate | tsx scripts/generateCitation.ts |
| utility | package.json | db:generate | npx drizzle-kit generate |
| utility | package.json | db:migrate | tsx src/migrate.ts |
| utility | package.json | db:studio | npx drizzle-kit studio |
| utility | package.json | openapi:generate | tsx scripts/generateOpenApi.ts |
| quality | package.json | openapi:check | tsx scripts/generateOpenApi.ts --check |
| quality | package.json | modelAuditSchema:generate | python3 scripts/generate_modelaudit_schema.py && npx @biomejs/biome format --write site/static/schemas/modelaudit site/static/examples/modelaudit |
| serve-dev | package.json | dev:app | npm run dev --prefix src/app |
| utility | package.json | storybook | npm run storybook --prefix src/app |
| serve-dev | package.json | dev:server | tsx watch src/server/index.ts |
| serve-dev | package.json | dev | concurrently "npm run dev:server" "npm run dev:app" |
| quality | package.json | f | git diff --name-only --diff-filter=ACMRTUXB origin/main \| grep -E '\.(js\|jsx\|mjs\|cjs\|ts\|tsx\|json)$' \| xargs npx @biomejs/biome check --write && git diff --name-only --diff-filter=ACMRTUXB origin/main \| grep -E '\.(css\|sc |
| quality | package.json | format:check | npx @biomejs/biome check && prettier --check '**/*.{css,scss,html,md,mdc,mdx,yaml,yml}' |
| quality | package.json | format:check:prettier | prettier --check '**/*.{css,scss,html,md,mdc,mdx,yaml,yml}' |
| quality | package.json | format | npx @biomejs/biome check --write . && prettier --write '**/*.{css,scss,html,md,mdc,mdx,yaml,yml}' |
| quality | package.json | jsonSchema:generate | npx -y tsx scripts/generateJsonSchema.ts > site/static/config-schema.json && npx @biomejs/biome format --write site/static/config-schema.json |
| utility | package.json | knip | knip |
| quality | package.json | l | git diff --name-only --diff-filter=ACMRTUXB origin/main \| grep -E '\.(js\|ts\|tsx)$' \| xargs npx @biomejs/biome lint --write |
| quality | package.json | lint:ci | npx @biomejs/biome ci . |
| quality | package.json | lint:site | npx @biomejs/biome lint site |
| quality | package.json | lint:src | npx @biomejs/biome lint src |
| test | package.json | lint:tests | npx @biomejs/biome lint test |
| quality | package.json | lint | npm run lint:src |
| serve-dev | package.json | local:web | npm run dev --prefix src/app |
| utility | package.json | local | tsx src/localEntrypoint.ts |
| serve-dev | package.json | preversion | command -v gh >/dev/null 2>&1 \|\| (echo "Error: GitHub CLI required." && exit 1) && [ "$(git rev-parse --abbrev-ref HEAD)" = "main" ] \|\| (echo "Error: Must be on main branch to version" && exit 1) && git pull origin main |
| build | package.json | changelog:release | node scripts/update-changelog-version.cjs |
| build | package.json | postversion | npm run changelog:release && npm run citation:generate && git add CHANGELOG.md CITATION.cff && git commit --amend --no-edit && gh pr create --repo promptfoo/promptfoo --title "chore: bump version $npm_package_version" -- |
| build | package.json | prepublishOnly | node -e "if (!process.env.PROMPTFOO_POSTHOG_KEY) { console.error('Error: PROMPTFOO_POSTHOG_KEY must be set'); process.exit(1); }" && npm run build:clean && npm run build |
| test | package.json | test:app | npm --prefix src/app run test -- |
| test | package.json | test:app:browser | npm --prefix src/app run test:browser -- |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic, claude |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | express |
| developerSurface | commander |
| observability | opentelemetry |
| browserAutomation | playwright, puppeteer |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [test/smoke/mcp.test.ts](../../../../sources/promptfoo__promptfoo/test/smoke/mcp.test.ts) | mcp signal |
| mcp | [test/redteam/plugins/mcp.test.ts](../../../../sources/promptfoo__promptfoo/test/redteam/plugins/mcp.test.ts) | mcp signal |
| mcp | [test/providers/openai/responses/mcp.test.ts](../../../../sources/promptfoo__promptfoo/test/providers/openai/responses/mcp.test.ts) | mcp signal |
| mcp | [test/providers/mcp/authProvider.test.ts](../../../../sources/promptfoo__promptfoo/test/providers/mcp/authProvider.test.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/promptfoo__promptfoo/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tools/biome/no-direct-process-env-mutation.grit](../../../../sources/promptfoo__promptfoo/tools/biome/no-direct-process-env-mutation.grit) | agentRuntime signal |
| agentRuntime | [test/AGENTS.md](../../../../sources/promptfoo__promptfoo/test/AGENTS.md) | agentRuntime signal |
| agentRuntime | [test/util/agent/agentClient.test.ts](../../../../sources/promptfoo__promptfoo/test/util/agent/agentClient.test.ts) | agentRuntime signal |
| entrypoints | [test/util/server.test.ts](../../../../sources/promptfoo__promptfoo/test/util/server.test.ts) | entrypoints signal |
| entrypoints | [test/server/server.test.ts](../../../../sources/promptfoo__promptfoo/test/server/server.test.ts) | entrypoints signal |
| entrypoints | [test/commands/mcp/server.test.ts](../../../../sources/promptfoo__promptfoo/test/commands/mcp/server.test.ts) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/promptfoo__promptfoo/src/index.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 28 | [test/util/server.test.ts](../../../../sources/promptfoo__promptfoo/test/util/server.test.ts)<br>[test/server/server.test.ts](../../../../sources/promptfoo__promptfoo/test/server/server.test.ts)<br>[test/commands/mcp/server.test.ts](../../../../sources/promptfoo__promptfoo/test/commands/mcp/server.test.ts)<br>[src/index.ts](../../../../sources/promptfoo__promptfoo/src/index.ts)<br>[src/main.ts](../../../../sources/promptfoo__promptfoo/src/main.ts)<br>[src/util/server.ts](../../../../sources/promptfoo__promptfoo/src/util/server.ts)<br>[src/types/api/server.ts](../../../../sources/promptfoo__promptfoo/src/types/api/server.ts)<br>[src/server/server.ts](../../../../sources/promptfoo__promptfoo/src/server/server.ts) |
| agentRuntime | 303 | [AGENTS.md](../../../../sources/promptfoo__promptfoo/AGENTS.md)<br>[tools/biome/no-direct-process-env-mutation.grit](../../../../sources/promptfoo__promptfoo/tools/biome/no-direct-process-env-mutation.grit)<br>[test/AGENTS.md](../../../../sources/promptfoo__promptfoo/test/AGENTS.md)<br>[test/util/agent/agentClient.test.ts](../../../../sources/promptfoo__promptfoo/test/util/agent/agentClient.test.ts)<br>[test/util/agent/fsOperations.test.ts](../../../../sources/promptfoo__promptfoo/test/util/agent/fsOperations.test.ts)<br>[test/util/agent/targetLink.test.ts](../../../../sources/promptfoo__promptfoo/test/util/agent/targetLink.test.ts)<br>[test/smoke/fixtures/providers/skill-metadata-esm.mjs](../../../../sources/promptfoo__promptfoo/test/smoke/fixtures/providers/skill-metadata-esm.mjs)<br>[test/smoke/fixtures/configs/skill-used-provider-esm.yaml](../../../../sources/promptfoo__promptfoo/test/smoke/fixtures/configs/skill-used-provider-esm.yaml) |
| mcp | 127 | [test/smoke/mcp.test.ts](../../../../sources/promptfoo__promptfoo/test/smoke/mcp.test.ts)<br>[test/redteam/plugins/mcp.test.ts](../../../../sources/promptfoo__promptfoo/test/redteam/plugins/mcp.test.ts)<br>[test/providers/openai/responses/mcp.test.ts](../../../../sources/promptfoo__promptfoo/test/providers/openai/responses/mcp.test.ts)<br>[test/providers/mcp/authProvider.test.ts](../../../../sources/promptfoo__promptfoo/test/providers/mcp/authProvider.test.ts)<br>[test/providers/mcp/client.test.ts](../../../../sources/promptfoo__promptfoo/test/providers/mcp/client.test.ts)<br>[test/providers/mcp/gemini-schema-e2e.test.ts](../../../../sources/promptfoo__promptfoo/test/providers/mcp/gemini-schema-e2e.test.ts)<br>[test/providers/mcp/optionalDependency.test.ts](../../../../sources/promptfoo__promptfoo/test/providers/mcp/optionalDependency.test.ts)<br>[test/providers/mcp/provider.test.ts](../../../../sources/promptfoo__promptfoo/test/providers/mcp/provider.test.ts) |
| retrieval | 176 | [test/index.test.ts](../../../../sources/promptfoo__promptfoo/test/index.test.ts)<br>[test/util/exportToFile/index.test.ts](../../../../sources/promptfoo__promptfoo/test/util/exportToFile/index.test.ts)<br>[test/types/index.test.ts](../../../../sources/promptfoo__promptfoo/test/types/index.test.ts)<br>[test/redteam/index.test.ts](../../../../sources/promptfoo__promptfoo/test/redteam/index.test.ts)<br>[test/redteam/strategies/index.test.ts](../../../../sources/promptfoo__promptfoo/test/redteam/strategies/index.test.ts)<br>[test/redteam/providers/voiceCrescendo/index.test.ts](../../../../sources/promptfoo__promptfoo/test/redteam/providers/voiceCrescendo/index.test.ts)<br>[test/redteam/providers/hydra/index.test.ts](../../../../sources/promptfoo__promptfoo/test/redteam/providers/hydra/index.test.ts)<br>[test/redteam/providers/custom/index.test.ts](../../../../sources/promptfoo__promptfoo/test/redteam/providers/custom/index.test.ts) |
| spec | 41 | [test/architecture/evaluatorStoreBoundary.test.ts](../../../../sources/promptfoo__promptfoo/test/architecture/evaluatorStoreBoundary.test.ts)<br>[test/architecture/providerRedteamBoundary.test.ts](../../../../sources/promptfoo__promptfoo/test/architecture/providerRedteamBoundary.test.ts)<br>[src/providers/elevenlabs/tts/voice-design.ts](../../../../sources/promptfoo__promptfoo/src/providers/elevenlabs/tts/voice-design.ts)<br>[src/app/src/hooks/useIsPrinting.spec.ts](../../../../sources/promptfoo__promptfoo/src/app/src/hooks/useIsPrinting.spec.ts)<br>[site/static/img/docs/indirect-web-pwn-architecture.png](../../../../sources/promptfoo__promptfoo/site/static/img/docs/indirect-web-pwn-architecture.png)<br>[site/static/img/docs/red-team-basic-architecture.png](../../../../sources/promptfoo__promptfoo/site/static/img/docs/red-team-basic-architecture.png)<br>[site/static/img/blog/rag-architecture/basic_input_flow.png](../../../../sources/promptfoo__promptfoo/site/static/img/blog/rag-architecture/basic_input_flow.png)<br>[site/static/img/blog/rag-architecture/basic_rag_flow.png](../../../../sources/promptfoo__promptfoo/site/static/img/blog/rag-architecture/basic_rag_flow.png) |
| eval | 1708 | [test/account.test.ts](../../../../sources/promptfoo__promptfoo/test/account.test.ts)<br>[test/AGENTS.md](../../../../sources/promptfoo__promptfoo/test/AGENTS.md)<br>[test/cache.test.ts](../../../../sources/promptfoo__promptfoo/test/cache.test.ts)<br>[test/CLAUDE.md](../../../../sources/promptfoo__promptfoo/test/CLAUDE.md)<br>[test/config-schema.test.ts](../../../../sources/promptfoo__promptfoo/test/config-schema.test.ts)<br>[test/constants.test.ts](../../../../sources/promptfoo__promptfoo/test/constants.test.ts)<br>[test/csv.test.ts](../../../../sources/promptfoo__promptfoo/test/csv.test.ts)<br>[test/database.test.ts](../../../../sources/promptfoo__promptfoo/test/database.test.ts) |
| security | 218 | [SECURITY.md](../../../../sources/promptfoo__promptfoo/SECURITY.md)<br>[test/util/oauth.test.ts](../../../../sources/promptfoo__promptfoo/test/util/oauth.test.ts)<br>[test/redteam/plugins/policy.test.ts](../../../../sources/promptfoo__promptfoo/test/redteam/plugins/policy.test.ts)<br>[test/redteam/plugins/rbac.test.ts](../../../../sources/promptfoo__promptfoo/test/redteam/plugins/rbac.test.ts)<br>[test/redteam/plugins/policy/utils.test.ts](../../../../sources/promptfoo__promptfoo/test/redteam/plugins/policy/utils.test.ts)<br>[test/redteam/plugins/policy/validators.test.ts](../../../../sources/promptfoo__promptfoo/test/redteam/plugins/policy/validators.test.ts)<br>[test/providers/openclaw-device-auth.test.ts](../../../../sources/promptfoo__promptfoo/test/providers/openclaw-device-auth.test.ts)<br>[test/providers/http/auth.test.ts](../../../../sources/promptfoo__promptfoo/test/providers/http/auth.test.ts) |
| ci | 16 | [site/docs/integrations/azure-pipelines.md](../../../../sources/promptfoo__promptfoo/site/docs/integrations/azure-pipelines.md)<br>[site/docs/integrations/jenkins.md](../../../../sources/promptfoo__promptfoo/site/docs/integrations/jenkins.md)<br>[code-scan-action/.github/workflows/test-event.json](../../../../sources/promptfoo__promptfoo/code-scan-action/.github/workflows/test-event.json)<br>[code-scan-action/.github/workflows/test-scan.yml](../../../../sources/promptfoo__promptfoo/code-scan-action/.github/workflows/test-scan.yml)<br>[.github/workflows/deploy-launcher.yml](../../../../sources/promptfoo__promptfoo/.github/workflows/deploy-launcher.yml)<br>[.github/workflows/docker.yml](../../../../sources/promptfoo__promptfoo/.github/workflows/docker.yml)<br>[.github/workflows/image-actions.yml](../../../../sources/promptfoo__promptfoo/.github/workflows/image-actions.yml)<br>[.github/workflows/main.yml](../../../../sources/promptfoo__promptfoo/.github/workflows/main.yml) |
| container | 22 | [Dockerfile](../../../../sources/promptfoo__promptfoo/Dockerfile)<br>[site/static/img/blog/grok-4-political-bias/charts/contrarian-scatter.jpg](../../../../sources/promptfoo__promptfoo/site/static/img/blog/grok-4-political-bias/charts/contrarian-scatter.jpg)<br>[site/static/img/blog/grok-4-political-bias/charts/extremism-comparison.jpg](../../../../sources/promptfoo__promptfoo/site/static/img/blog/grok-4-political-bias/charts/extremism-comparison.jpg)<br>[site/static/img/blog/grok-4-political-bias/charts/judge-agreement-heatmap.jpg](../../../../sources/promptfoo__promptfoo/site/static/img/blog/grok-4-political-bias/charts/judge-agreement-heatmap.jpg)<br>[site/static/img/blog/grok-4-political-bias/charts/musk-bias-comparison.jpg](../../../../sources/promptfoo__promptfoo/site/static/img/blog/grok-4-political-bias/charts/musk-bias-comparison.jpg)<br>[site/static/img/blog/grok-4-political-bias/charts/political-bias-likert-scale.png](../../../../sources/promptfoo__promptfoo/site/static/img/blog/grok-4-political-bias/charts/political-bias-likert-scale.png)<br>[site/static/img/blog/grok-4-political-bias/charts/political-distribution-violin.jpg](../../../../sources/promptfoo__promptfoo/site/static/img/blog/grok-4-political-bias/charts/political-distribution-violin.jpg)<br>[site/static/img/blog/grok-4-political-bias/charts/political-spectrum.jpg](../../../../sources/promptfoo__promptfoo/site/static/img/blog/grok-4-political-bias/charts/political-spectrum.jpg) |
| instruction | 43 | [AGENTS.md](../../../../sources/promptfoo__promptfoo/AGENTS.md)<br>[CLAUDE.md](../../../../sources/promptfoo__promptfoo/CLAUDE.md)<br>[test/AGENTS.md](../../../../sources/promptfoo__promptfoo/test/AGENTS.md)<br>[test/CLAUDE.md](../../../../sources/promptfoo__promptfoo/test/CLAUDE.md)<br>[test/fixtures/agent-skills/AGENTS.md](../../../../sources/promptfoo__promptfoo/test/fixtures/agent-skills/AGENTS.md)<br>[test/agentSkills/AGENTS.md](../../../../sources/promptfoo__promptfoo/test/agentSkills/AGENTS.md)<br>[src/validators/AGENTS.md](../../../../sources/promptfoo__promptfoo/src/validators/AGENTS.md)<br>[src/util/AGENTS.md](../../../../sources/promptfoo__promptfoo/src/util/AGENTS.md) |
| docs | 1579 | [README.md](../../../../sources/promptfoo__promptfoo/README.md)<br>[test/site/markdown.test.ts](../../../../sources/promptfoo__promptfoo/test/site/markdown.test.ts)<br>[test/examples/readme.test.ts](../../../../sources/promptfoo__promptfoo/test/examples/readme.test.ts)<br>[src/redteam/strategies/promptInjections/README.md](../../../../sources/promptfoo__promptfoo/src/redteam/strategies/promptInjections/README.md)<br>[src/redteam/providers/README.md](../../../../sources/promptfoo__promptfoo/src/redteam/providers/README.md)<br>[src/redteam/plugins/policy/evals/README.md](../../../../sources/promptfoo__promptfoo/src/redteam/plugins/policy/evals/README.md)<br>[site/.gitignore](../../../../sources/promptfoo__promptfoo/site/.gitignore)<br>[site/AGENTS.md](../../../../sources/promptfoo__promptfoo/site/AGENTS.md) |
| config | 52 | [package.json](../../../../sources/promptfoo__promptfoo/package.json)<br>[pnpm-workspace.yaml](../../../../sources/promptfoo__promptfoo/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/promptfoo__promptfoo/tsconfig.json)<br>[test/smoke/fixtures/providers/go.mod](../../../../sources/promptfoo__promptfoo/test/smoke/fixtures/providers/go.mod)<br>[test/smoke/fixtures/frontend-ts-provider/tsconfig.json](../../../../sources/promptfoo__promptfoo/test/smoke/fixtures/frontend-ts-provider/tsconfig.json)<br>[src/golang/go.mod](../../../../sources/promptfoo__promptfoo/src/golang/go.mod)<br>[src/app/package.json](../../../../sources/promptfoo__promptfoo/src/app/package.json)<br>[src/app/tsconfig.json](../../../../sources/promptfoo__promptfoo/src/app/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1708 | [test/account.test.ts](../../../../sources/promptfoo__promptfoo/test/account.test.ts)<br>[test/AGENTS.md](../../../../sources/promptfoo__promptfoo/test/AGENTS.md)<br>[test/cache.test.ts](../../../../sources/promptfoo__promptfoo/test/cache.test.ts)<br>[test/CLAUDE.md](../../../../sources/promptfoo__promptfoo/test/CLAUDE.md)<br>[test/config-schema.test.ts](../../../../sources/promptfoo__promptfoo/test/config-schema.test.ts)<br>[test/constants.test.ts](../../../../sources/promptfoo__promptfoo/test/constants.test.ts) |
| CI workflow | 16 | [site/docs/integrations/azure-pipelines.md](../../../../sources/promptfoo__promptfoo/site/docs/integrations/azure-pipelines.md)<br>[site/docs/integrations/jenkins.md](../../../../sources/promptfoo__promptfoo/site/docs/integrations/jenkins.md)<br>[code-scan-action/.github/workflows/test-event.json](../../../../sources/promptfoo__promptfoo/code-scan-action/.github/workflows/test-event.json)<br>[code-scan-action/.github/workflows/test-scan.yml](../../../../sources/promptfoo__promptfoo/code-scan-action/.github/workflows/test-scan.yml)<br>[.github/workflows/deploy-launcher.yml](../../../../sources/promptfoo__promptfoo/.github/workflows/deploy-launcher.yml)<br>[.github/workflows/docker.yml](../../../../sources/promptfoo__promptfoo/.github/workflows/docker.yml) |
| 컨테이너/배포 | 22 | [Dockerfile](../../../../sources/promptfoo__promptfoo/Dockerfile)<br>[site/static/img/blog/grok-4-political-bias/charts/contrarian-scatter.jpg](../../../../sources/promptfoo__promptfoo/site/static/img/blog/grok-4-political-bias/charts/contrarian-scatter.jpg)<br>[site/static/img/blog/grok-4-political-bias/charts/extremism-comparison.jpg](../../../../sources/promptfoo__promptfoo/site/static/img/blog/grok-4-political-bias/charts/extremism-comparison.jpg)<br>[site/static/img/blog/grok-4-political-bias/charts/judge-agreement-heatmap.jpg](../../../../sources/promptfoo__promptfoo/site/static/img/blog/grok-4-political-bias/charts/judge-agreement-heatmap.jpg)<br>[site/static/img/blog/grok-4-political-bias/charts/musk-bias-comparison.jpg](../../../../sources/promptfoo__promptfoo/site/static/img/blog/grok-4-political-bias/charts/musk-bias-comparison.jpg)<br>[site/static/img/blog/grok-4-political-bias/charts/political-bias-likert-scale.png](../../../../sources/promptfoo__promptfoo/site/static/img/blog/grok-4-political-bias/charts/political-bias-likert-scale.png) |
| 보안/정책 | 218 | [SECURITY.md](../../../../sources/promptfoo__promptfoo/SECURITY.md)<br>[test/util/oauth.test.ts](../../../../sources/promptfoo__promptfoo/test/util/oauth.test.ts)<br>[test/redteam/plugins/policy.test.ts](../../../../sources/promptfoo__promptfoo/test/redteam/plugins/policy.test.ts)<br>[test/redteam/plugins/rbac.test.ts](../../../../sources/promptfoo__promptfoo/test/redteam/plugins/rbac.test.ts)<br>[test/redteam/plugins/policy/utils.test.ts](../../../../sources/promptfoo__promptfoo/test/redteam/plugins/policy/utils.test.ts)<br>[test/redteam/plugins/policy/validators.test.ts](../../../../sources/promptfoo__promptfoo/test/redteam/plugins/policy/validators.test.ts) |
| 에이전트 지시문 | 43 | [AGENTS.md](../../../../sources/promptfoo__promptfoo/AGENTS.md)<br>[CLAUDE.md](../../../../sources/promptfoo__promptfoo/CLAUDE.md)<br>[test/AGENTS.md](../../../../sources/promptfoo__promptfoo/test/AGENTS.md)<br>[test/CLAUDE.md](../../../../sources/promptfoo__promptfoo/test/CLAUDE.md)<br>[test/fixtures/agent-skills/AGENTS.md](../../../../sources/promptfoo__promptfoo/test/fixtures/agent-skills/AGENTS.md)<br>[test/agentSkills/AGENTS.md](../../../../sources/promptfoo__promptfoo/test/agentSkills/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `test/smoke/mcp.test.ts`, `test/redteam/plugins/mcp.test.ts`, `test/providers/openai/responses/mcp.test.ts`.
2. entrypoint를 따라 실행 흐름 확인: `test/util/server.test.ts`, `test/server/server.test.ts`, `test/commands/mcp/server.test.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tools/biome/no-direct-process-env-mutation.grit`, `test/AGENTS.md`.
4. retrieval/memory/indexing 확인: `test/index.test.ts`, `test/util/exportToFile/index.test.ts`, `test/types/index.test.ts`.
5. test/eval 파일로 동작 검증: `test/account.test.ts`, `test/AGENTS.md`, `test/cache.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 5400 files, 1002 directories.. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, README.md, AGENTS.md, CLAUDE.md이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
