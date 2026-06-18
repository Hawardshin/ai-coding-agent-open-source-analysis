# inkeep/agents 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Create AI Agents in a No-Code Visual Builder or TypeScript SDK with full 2-way sync. For shipping AI assistants and multi-agent AI workflows.

## 요약

- 조사 단위: `sources/inkeep__agents` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 5,083 files, 748 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=test-agents/tools/invalid-mcp-tool.ts, test-agents/agents/invalid-mcp.ts, packages/agents-work-apps/src/slack/mcp/auth.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | inkeep/agents |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 1205 |
| Forks | 144 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/inkeep__agents](../../../../sources/inkeep__agents) |
| 기존 보고서 | [reports/global-trending/repositories/inkeep__agents.md](../../../global-trending/repositories/inkeep__agents.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 5083 / 748 |
| 관측 최대 깊이 | 12 |
| 상위 디렉터리 | .ai-dev, .changeset, .cursor, .github, .husky, .opencode, agents-api, agents-cli, agents-cookbook, agents-docs, agents-manage-ui, agents-ui-demo, create-agents-template, packages, patches, scripts, test-agents |
| 상위 확장자 | .ts: 3092, .tsx: 635, .svg: 452, .mdx: 236, .json: 175, .txt: 129, .png: 67, .sql: 67, .md: 54, .sh: 27, .yml: 23, (none): 18 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/agents-work-apps | packages workspace | 70 |
| packages/agents-core | packages workspace | 58 |
| packages/agents-mcp | packages workspace | 35 |
| packages/create-agents | packages workspace | 10 |
| packages/ai-sdk-provider | packages workspace | 9 |
| packages/agents-sdk | packages workspace | 6 |
| packages/agents-email | packages workspace | 4 |
| .github | ci surface | 1 |
| agents-api | source boundary | 1 |
| agents-cli | top-level component | 1 |
| agents-cookbook | top-level component | 1 |
| agents-docs | documentation surface | 1 |
| agents-manage-ui | top-level component | 1 |
| agents-ui-demo | top-level component | 1 |
| create-agents-template | top-level component | 1 |
| packages | source boundary | 1 |
| patches | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | sync:licenses | node scripts/sync-licenses.mjs |
| build | package.json | prebuild | pnpm install --frozen-lockfile && pnpm sync:licenses |
| build | package.json | build | turbo build --filter='!agents-cookbook-templates' |
| utility | package.json | knip | turbo knip |
| serve-dev | package.json | dev | turbo dev --filter=@inkeep/agents-api --filter=@inkeep/agents-manage-ui --filter=@inkeep/agents-docs --filter=@inkeep/agents-core --filter=@inkeep/agents-sdk |
| utility | package.json | prepack | pnpm sync:licenses && turbo prepack |
| serve-dev | package.json | dev:apis | turbo dev:apis |
| test | package.json | test | turbo test --filter='!agents-cookbook-templates' |
| test | package.json | test:e2e | turbo test:e2e |
| test | package.json | test:watch | turbo test:watch |
| test | package.json | test:coverage | turbo test:coverage --filter='!agents-cookbook-templates' |
| test | package.json | coverage | pnpm test:coverage && node scripts/merge-coverage.mjs && node scripts/generate-badges.mjs |
| test | package.json | coverage:report | node scripts/merge-coverage.mjs |
| test | package.json | coverage:badges | node scripts/generate-badges.mjs |
| test | package.json | coverage:diff | node scripts/coverage-diff.mjs |
| test | package.json | coverage:enforce | node scripts/enforce-coverage-change.mjs |
| test | package.json | coverage:check | pnpm coverage:diff && pnpm coverage:enforce |
| quality | package.json | lint | turbo lint |
| quality | package.json | lint:fix | turbo lint:fix |
| quality | package.json | format | pnpm format:check --write |
| quality | package.json | format:check | biome check --linter-enabled=false |
| quality | package.json | typecheck | turbo typecheck --filter='!agents-cookbook-templates' |
| serve-dev | package.json | typecheck:watch | turbo typecheck:watch |
| quality | package.json | check:fast | pnpm typecheck |
| quality | package.json | precheck | pnpm install --frozen-lockfile |
| quality | package.json | check | turbo check --filter='!agents-cookbook-templates' && pnpm format:check && pnpm check:env-descriptions && pnpm check:route-handler-patterns && pnpm check:dal-boundary && pnpm check:changeset-packages && pnpm check:package |
| quality | package.json | check:husky | turbo check:husky --filter='!agents-cookbook-templates' --filter='!@inkeep/agents-docs' |
| quality | package.json | check:prepush | turbo check:prepush --filter='!agents-cookbook-templates' --filter='!@inkeep/agents-docs' |
| quality | package.json | check:fix | biome check --write |
| utility | package.json | validate:ai-artifacts | pnpx tsx scripts/validate-ai-artifacts.ts |
| build | package.json | clean | pnpm -r --parallel exec rm -rf node_modules/ dist/ build/ .next/ .turbo/ |
| utility | package.json | clean:turbo | rm -rf .turbo/ |
| utility | package.json | turbo:login | turbo login && turbo link |
| utility | package.json | turbo:setup-cache | sh scripts/setup-turbo-cache.sh |
| utility | package.json | prepare | husky |
| utility | package.json | bump | node scripts/quick-changeset.mjs |
| utility | package.json | version | changeset version |
| build | package.json | release | changeset publish |
| serve-dev | package.json | release-dev | changeset version --snapshot dev && changeset publish --tag dev |
| utility | package.json | generate:keys | bash scripts/generate-jwt-keys.sh |


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
| mcp | [test-agents/tools/invalid-mcp-tool.ts](../../../../sources/inkeep__agents/test-agents/tools/invalid-mcp-tool.ts) | mcp signal |
| mcp | [test-agents/agents/invalid-mcp.ts](../../../../sources/inkeep__agents/test-agents/agents/invalid-mcp.ts) | mcp signal |
| mcp | [packages/agents-work-apps/src/slack/mcp/auth.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/slack/mcp/auth.ts) | mcp signal |
| mcp | [packages/agents-work-apps/src/slack/mcp/index.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/slack/mcp/index.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/inkeep__agents/AGENTS.md) | agentRuntime signal |
| agentRuntime | [test-agents/tools/bad-credential-403-tool.ts](../../../../sources/inkeep__agents/test-agents/tools/bad-credential-403-tool.ts) | agentRuntime signal |
| agentRuntime | [test-agents/tools/faulty-api-tool.ts](../../../../sources/inkeep__agents/test-agents/tools/faulty-api-tool.ts) | agentRuntime signal |
| entrypoints | [packages/create-agents/src/index.ts](../../../../sources/inkeep__agents/packages/create-agents/src/index.ts) | entrypoints signal |
| entrypoints | [packages/ai-sdk-provider/src/index.ts](../../../../sources/inkeep__agents/packages/ai-sdk-provider/src/index.ts) | entrypoints signal |
| entrypoints | [packages/agents-sdk/src/index.ts](../../../../sources/inkeep__agents/packages/agents-sdk/src/index.ts) | entrypoints signal |
| entrypoints | [packages/agents-mcp/src/index.ts](../../../../sources/inkeep__agents/packages/agents-mcp/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/inkeep__agents/package.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 18 | [packages/create-agents/src/index.ts](../../../../sources/inkeep__agents/packages/create-agents/src/index.ts)<br>[packages/ai-sdk-provider/src/index.ts](../../../../sources/inkeep__agents/packages/ai-sdk-provider/src/index.ts)<br>[packages/agents-sdk/src/index.ts](../../../../sources/inkeep__agents/packages/agents-sdk/src/index.ts)<br>[packages/agents-mcp/src/index.ts](../../../../sources/inkeep__agents/packages/agents-mcp/src/index.ts)<br>[packages/agents-mcp/src/mcp-server/server.ts](../../../../sources/inkeep__agents/packages/agents-mcp/src/mcp-server/server.ts)<br>[packages/agents-email/src/index.ts](../../../../sources/inkeep__agents/packages/agents-email/src/index.ts)<br>[packages/agents-core/src/index.ts](../../../../sources/inkeep__agents/packages/agents-core/src/index.ts)<br>[packages/agents-core/src/types/server.ts](../../../../sources/inkeep__agents/packages/agents-core/src/types/server.ts) |
| agentRuntime | 4900 | [AGENTS.md](../../../../sources/inkeep__agents/AGENTS.md)<br>[test-agents/tools/bad-credential-403-tool.ts](../../../../sources/inkeep__agents/test-agents/tools/bad-credential-403-tool.ts)<br>[test-agents/tools/faulty-api-tool.ts](../../../../sources/inkeep__agents/test-agents/tools/faulty-api-tool.ts)<br>[test-agents/tools/invalid-mcp-tool.ts](../../../../sources/inkeep__agents/test-agents/tools/invalid-mcp-tool.ts)<br>[test-agents/tools/parallel-tools.ts](../../../../sources/inkeep__agents/test-agents/tools/parallel-tools.ts)<br>[test-agents/tools/slow-tool.ts](../../../../sources/inkeep__agents/test-agents/tools/slow-tool.ts)<br>[test-agents/agents/bad-credential-403-agent.ts](../../../../sources/inkeep__agents/test-agents/agents/bad-credential-403-agent.ts)<br>[test-agents/agents/faulty-api-tool-agent.ts](../../../../sources/inkeep__agents/test-agents/agents/faulty-api-tool-agent.ts) |
| mcp | 1449 | [test-agents/tools/invalid-mcp-tool.ts](../../../../sources/inkeep__agents/test-agents/tools/invalid-mcp-tool.ts)<br>[test-agents/agents/invalid-mcp.ts](../../../../sources/inkeep__agents/test-agents/agents/invalid-mcp.ts)<br>[packages/agents-work-apps/src/slack/mcp/auth.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/slack/mcp/auth.ts)<br>[packages/agents-work-apps/src/slack/mcp/index.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/slack/mcp/index.ts)<br>[packages/agents-work-apps/src/slack/mcp/utils.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/slack/mcp/utils.ts)<br>[packages/agents-work-apps/src/github/mcp/auth.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/github/mcp/auth.ts)<br>[packages/agents-work-apps/src/github/mcp/index.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/github/mcp/index.ts)<br>[packages/agents-work-apps/src/github/mcp/schemas.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/github/mcp/schemas.ts) |
| retrieval | 109 | [test-agents/index.ts](../../../../sources/inkeep__agents/test-agents/index.ts)<br>[scripts/cache-debug/index.ts](../../../../sources/inkeep__agents/scripts/cache-debug/index.ts)<br>[packages/create-agents/src/index.ts](../../../../sources/inkeep__agents/packages/create-agents/src/index.ts)<br>[packages/ai-sdk-provider/src/index.ts](../../../../sources/inkeep__agents/packages/ai-sdk-provider/src/index.ts)<br>[packages/agents-work-apps/src/slack/index.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/slack/index.ts)<br>[packages/agents-work-apps/src/slack/services/index.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/slack/services/index.ts)<br>[packages/agents-work-apps/src/slack/services/events/index.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/slack/services/events/index.ts)<br>[packages/agents-work-apps/src/slack/services/commands/index.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/slack/services/commands/index.ts) |
| spec | 1 | [agents-manage-ui/src/components/ui/password-requirements.tsx](../../../../sources/inkeep__agents/agents-manage-ui/src/components/ui/password-requirements.tsx) |
| eval | 861 | [test-agents/.gitignore](../../../../sources/inkeep__agents/test-agents/.gitignore)<br>[test-agents/CHANGELOG.md](../../../../sources/inkeep__agents/test-agents/CHANGELOG.md)<br>[test-agents/index.ts](../../../../sources/inkeep__agents/test-agents/index.ts)<br>[test-agents/inkeep.config.ts](../../../../sources/inkeep__agents/test-agents/inkeep.config.ts)<br>[test-agents/knip.config.ts](../../../../sources/inkeep__agents/test-agents/knip.config.ts)<br>[test-agents/package.json](../../../../sources/inkeep__agents/test-agents/package.json)<br>[test-agents/tools/bad-credential-403-tool.ts](../../../../sources/inkeep__agents/test-agents/tools/bad-credential-403-tool.ts)<br>[test-agents/tools/faulty-api-tool.ts](../../../../sources/inkeep__agents/test-agents/tools/faulty-api-tool.ts) |
| security | 123 | [scripts/setup-oauth-client.ts](../../../../sources/inkeep__agents/scripts/setup-oauth-client.ts)<br>[packages/agents-work-apps/src/slack/services/security.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/slack/services/security.ts)<br>[packages/agents-work-apps/src/slack/routes/oauth.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/slack/routes/oauth.ts)<br>[packages/agents-work-apps/src/slack/mcp/auth.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/slack/mcp/auth.ts)<br>[packages/agents-work-apps/src/github/mcp/auth.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/github/mcp/auth.ts)<br>[packages/agents-work-apps/src/__tests__/slack/oauth.test.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/__tests__/slack/oauth.test.ts)<br>[packages/agents-work-apps/src/__tests__/slack/security.test.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/__tests__/slack/security.test.ts)<br>[packages/agents-work-apps/src/__tests__/slack/mcp/auth.test.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/__tests__/slack/mcp/auth.test.ts) |
| ci | 13 | [.github/workflows/auto-format.yml](../../../../sources/inkeep__agents/.github/workflows/auto-format.yml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/inkeep__agents/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/inkeep__agents/.github/workflows/claude.yml)<br>[.github/workflows/inkeep-content-writer.yml](../../../../sources/inkeep__agents/.github/workflows/inkeep-content-writer.yml)<br>[.github/workflows/inkeep-sync.yml](../../../../sources/inkeep__agents/.github/workflows/inkeep-sync.yml)<br>[.github/workflows/model-sync.yml](../../../../sources/inkeep__agents/.github/workflows/model-sync.yml)<br>[.github/workflows/monorepo-pr-bridge.yml](../../../../sources/inkeep__agents/.github/workflows/monorepo-pr-bridge.yml)<br>[.github/workflows/publish-skills.yml](../../../../sources/inkeep__agents/.github/workflows/publish-skills.yml) |
| container | 38 | [docker-compose.dbs.yml](../../../../sources/inkeep__agents/docker-compose.dbs.yml)<br>[docker-compose.isolated.yml](../../../../sources/inkeep__agents/docker-compose.isolated.yml)<br>[docker-compose.visual.yml](../../../../sources/inkeep__agents/docker-compose.visual.yml)<br>[docker-compose.yml](../../../../sources/inkeep__agents/docker-compose.yml)<br>[Dockerfile.manage-ui-test](../../../../sources/inkeep__agents/Dockerfile.manage-ui-test)<br>[create-agents-template/docker-compose.db.yml](../../../../sources/inkeep__agents/create-agents-template/docker-compose.db.yml)<br>[create-agents-template/docker-compose.yml](../../../../sources/inkeep__agents/create-agents-template/docker-compose.yml)<br>[create-agents-template/Dockerfile.agents-api](../../../../sources/inkeep__agents/create-agents-template/Dockerfile.agents-api) |
| instruction | 2 | [AGENTS.md](../../../../sources/inkeep__agents/AGENTS.md)<br>`agents-docs/content/api-reference/(openapi)/agents.mdx` |
| docs | 21 | [README.md](../../../../sources/inkeep__agents/README.md)<br>[scripts/workflows/README.md](../../../../sources/inkeep__agents/scripts/workflows/README.md)<br>[packages/create-agents/README.md](../../../../sources/inkeep__agents/packages/create-agents/README.md)<br>[packages/ai-sdk-provider/README.md](../../../../sources/inkeep__agents/packages/ai-sdk-provider/README.md)<br>[packages/agents-work-apps/src/slack/README.md](../../../../sources/inkeep__agents/packages/agents-work-apps/src/slack/README.md)<br>[packages/agents-sdk/README.md](../../../../sources/inkeep__agents/packages/agents-sdk/README.md)<br>[packages/agents-mcp/README.md](../../../../sources/inkeep__agents/packages/agents-mcp/README.md)<br>[packages/agents-core/README.md](../../../../sources/inkeep__agents/packages/agents-core/README.md) |
| config | 49 | [package.json](../../../../sources/inkeep__agents/package.json)<br>[pnpm-workspace.yaml](../../../../sources/inkeep__agents/pnpm-workspace.yaml)<br>[turbo.json](../../../../sources/inkeep__agents/turbo.json)<br>[test-agents/package.json](../../../../sources/inkeep__agents/test-agents/package.json)<br>[packages/create-agents/package.json](../../../../sources/inkeep__agents/packages/create-agents/package.json)<br>[packages/create-agents/tsconfig.json](../../../../sources/inkeep__agents/packages/create-agents/tsconfig.json)<br>[packages/create-agents/turbo.json](../../../../sources/inkeep__agents/packages/create-agents/turbo.json)<br>[packages/ai-sdk-provider/package.json](../../../../sources/inkeep__agents/packages/ai-sdk-provider/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 861 | [test-agents/.gitignore](../../../../sources/inkeep__agents/test-agents/.gitignore)<br>[test-agents/CHANGELOG.md](../../../../sources/inkeep__agents/test-agents/CHANGELOG.md)<br>[test-agents/index.ts](../../../../sources/inkeep__agents/test-agents/index.ts)<br>[test-agents/inkeep.config.ts](../../../../sources/inkeep__agents/test-agents/inkeep.config.ts)<br>[test-agents/knip.config.ts](../../../../sources/inkeep__agents/test-agents/knip.config.ts)<br>[test-agents/package.json](../../../../sources/inkeep__agents/test-agents/package.json) |
| CI workflow | 13 | [.github/workflows/auto-format.yml](../../../../sources/inkeep__agents/.github/workflows/auto-format.yml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/inkeep__agents/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/inkeep__agents/.github/workflows/claude.yml)<br>[.github/workflows/inkeep-content-writer.yml](../../../../sources/inkeep__agents/.github/workflows/inkeep-content-writer.yml)<br>[.github/workflows/inkeep-sync.yml](../../../../sources/inkeep__agents/.github/workflows/inkeep-sync.yml)<br>[.github/workflows/model-sync.yml](../../../../sources/inkeep__agents/.github/workflows/model-sync.yml) |
| 컨테이너/배포 | 38 | [docker-compose.dbs.yml](../../../../sources/inkeep__agents/docker-compose.dbs.yml)<br>[docker-compose.isolated.yml](../../../../sources/inkeep__agents/docker-compose.isolated.yml)<br>[docker-compose.visual.yml](../../../../sources/inkeep__agents/docker-compose.visual.yml)<br>[docker-compose.yml](../../../../sources/inkeep__agents/docker-compose.yml)<br>[Dockerfile.manage-ui-test](../../../../sources/inkeep__agents/Dockerfile.manage-ui-test)<br>[create-agents-template/docker-compose.db.yml](../../../../sources/inkeep__agents/create-agents-template/docker-compose.db.yml) |
| 보안/정책 | 123 | [scripts/setup-oauth-client.ts](../../../../sources/inkeep__agents/scripts/setup-oauth-client.ts)<br>[packages/agents-work-apps/src/slack/services/security.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/slack/services/security.ts)<br>[packages/agents-work-apps/src/slack/routes/oauth.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/slack/routes/oauth.ts)<br>[packages/agents-work-apps/src/slack/mcp/auth.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/slack/mcp/auth.ts)<br>[packages/agents-work-apps/src/github/mcp/auth.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/github/mcp/auth.ts)<br>[packages/agents-work-apps/src/__tests__/slack/oauth.test.ts](../../../../sources/inkeep__agents/packages/agents-work-apps/src/__tests__/slack/oauth.test.ts) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/inkeep__agents/AGENTS.md)<br>`agents-docs/content/api-reference/(openapi)/agents.mdx` |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `test-agents/tools/invalid-mcp-tool.ts`, `test-agents/agents/invalid-mcp.ts`, `packages/agents-work-apps/src/slack/mcp/auth.ts`.
2. entrypoint를 따라 실행 흐름 확인: `packages/create-agents/src/index.ts`, `packages/ai-sdk-provider/src/index.ts`, `packages/agents-sdk/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `test-agents/tools/bad-credential-403-tool.ts`, `test-agents/tools/faulty-api-tool.ts`.
4. retrieval/memory/indexing 확인: `test-agents/index.ts`, `scripts/cache-debug/index.ts`, `packages/create-agents/src/index.ts`.
5. test/eval 파일로 동작 검증: `test-agents/.gitignore`, `test-agents/CHANGELOG.md`, `test-agents/index.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Create AI Agents in a No Code Visual Builder or TypeScript SDK with full 2 way sync. For shipping AI assistants and mult. 핵심 구조 신호는 TypeScript, package.json, docker-compose.yml, README.md, AGENTS.md, tests이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
