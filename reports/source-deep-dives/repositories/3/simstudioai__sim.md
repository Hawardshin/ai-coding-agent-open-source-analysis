# simstudioai/sim 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Build, deploy, and orchestrate AI agents. Sim is the central intelligence layer for your AI workforce.

## 요약

- 조사 단위: `sources/simstudioai__sim` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 11,531 files, 2,601 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/testing/src/mocks/mcp-oauth.mock.ts, packages/db/migrations/0210_mcp_oauth.sql, apps/sim/public/email/broadcast/v0.5/mcp.png이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | simstudioai/sim |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 28809 |
| Forks | 3662 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/simstudioai__sim](../../../../sources/simstudioai__sim) |
| 기존 보고서 | [reports/global-trending/repositories/simstudioai__sim.md](../../../global-trending/repositories/simstudioai__sim.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 11531 / 2601 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .agents, .claude, .cursor, .devcontainer, .github, .husky, apps, docker, helm, packages, scripts |
| 상위 확장자 | .ts: 8295, .mdx: 1310, .tsx: 744, .json: 330, .png: 283, .sql: 239, .md: 112, .yaml: 61, .svg: 26, .yml: 17, (none): 17, .mdc: 15 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| apps/sim | apps workspace | 94 |
| apps/docs | apps workspace | 30 |
| apps/realtime | apps workspace | 27 |
| packages/testing | packages workspace | 27 |
| packages/security | packages workspace | 20 |
| packages/db | packages workspace | 13 |
| packages/audit | packages workspace | 12 |
| packages/workflow-persistence | packages workspace | 12 |
| packages/utils | packages workspace | 10 |
| packages/ts-sdk | packages workspace | 8 |
| packages/logger | packages workspace | 7 |
| packages/workflow-authz | packages workspace | 7 |
| packages/workflow-types | packages workspace | 6 |
| packages/auth | packages workspace | 5 |
| packages/cli | packages workspace | 5 |
| packages/python-sdk | packages workspace | 4 |
| packages/realtime-protocol | packages workspace | 2 |
| .devcontainer | deployment surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | turbo run build |
| serve-dev | package.json | dev | turbo run dev |
| serve-dev | package.json | dev:sockets | cd apps/realtime && bun run dev |
| serve-dev | package.json | dev:full | bunx concurrently -n "App,Realtime" -c "cyan,magenta" "cd apps/sim && bun run dev" "cd apps/realtime && bun run dev" |
| serve-dev | package.json | dev:full:capped | bunx concurrently -n "App,Realtime" -c "cyan,magenta" "cd apps/sim && bun run dev:capped" "cd apps/realtime && bun run dev" |
| test | package.json | test | turbo run test |
| quality | package.json | format | turbo run format |
| quality | package.json | format:check | turbo run format:check |
| quality | package.json | lint | turbo run lint |
| quality | package.json | lint:check | turbo run lint:check |
| test | package.json | lint:helm | helm lint ./helm/sim --strict --values ./helm/sim/test/values-lint.yaml |
| quality | package.json | lint:all | turbo run lint && bun run lint:helm |
| quality | package.json | check | turbo run format:check |
| quality | package.json | check:boundaries | bun run scripts/check-monorepo-boundaries.ts |
| quality | package.json | check:api-validation | bun run scripts/check-api-validation-contracts.ts --check |
| quality | package.json | check:api-validation:strict | bun run scripts/check-api-validation-contracts.ts --check --enforce-boundary-baseline |
| quality | package.json | check:realtime-prune | bun run scripts/check-realtime-prune-graph.ts |
| quality | package.json | check:zustand-v5 | bun run scripts/check-zustand-v5-selectors.ts |
| quality | package.json | check:react-query | bun run scripts/check-react-query-patterns.ts --check |
| quality | package.json | check:utils | bun run scripts/check-utils-enforcement.ts |
| quality | package.json | check:migrations | bun run scripts/check-migrations-safety.ts |
| utility | package.json | mship-contracts:generate | bun run scripts/sync-mothership-stream-contract.ts |
| quality | package.json | mship-contracts:check | bun run scripts/sync-mothership-stream-contract.ts --check |
| utility | package.json | mship-tools:generate | bun run scripts/sync-tool-catalog.ts |
| quality | package.json | mship-tools:check | bun run scripts/sync-tool-catalog.ts --check |
| utility | package.json | trace-spans-contract:generate | bun run scripts/sync-trace-spans-contract.ts |
| quality | package.json | trace-spans-contract:check | bun run scripts/sync-trace-spans-contract.ts --check |
| utility | package.json | trace-attributes-contract:generate | bun run scripts/sync-trace-attributes-contract.ts |
| quality | package.json | trace-attributes-contract:check | bun run scripts/sync-trace-attributes-contract.ts --check |
| utility | package.json | trace-attribute-values-contract:generate | bun run scripts/sync-trace-attribute-values-contract.ts |
| quality | package.json | trace-attribute-values-contract:check | bun run scripts/sync-trace-attribute-values-contract.ts --check |
| utility | package.json | trace-events-contract:generate | bun run scripts/sync-trace-events-contract.ts |
| quality | package.json | trace-events-contract:check | bun run scripts/sync-trace-events-contract.ts --check |
| utility | package.json | metrics-contract:generate | bun run scripts/sync-metrics-contract.ts |
| quality | package.json | metrics-contract:check | bun run scripts/sync-metrics-contract.ts --check |
| utility | package.json | mship:generate | bun run scripts/generate-mship-contracts.ts |
| quality | package.json | mship:check | bun run scripts/generate-mship-contracts.ts --check |
| utility | package.json | prepare | bun husky |
| quality | package.json | type-check | turbo run type-check |
| build | package.json | release | bun run scripts/create-single-release.ts |


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
| mcp | [packages/testing/src/mocks/mcp-oauth.mock.ts](../../../../sources/simstudioai__sim/packages/testing/src/mocks/mcp-oauth.mock.ts) | mcp signal |
| mcp | [packages/db/migrations/0210_mcp_oauth.sql](../../../../sources/simstudioai__sim/packages/db/migrations/0210_mcp_oauth.sql) | mcp signal |
| mcp | [apps/sim/public/email/broadcast/v0.5/mcp.png](../../../../sources/simstudioai__sim/apps/sim/public/email/broadcast/v0.5/mcp.png) | mcp signal |
| mcp | [apps/sim/public/blog/v0-5/mcp.png](../../../../sources/simstudioai__sim/apps/sim/public/blog/v0-5/mcp.png) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/simstudioai__sim/AGENTS.md) | agentRuntime signal |
| agentRuntime | [packages/workflow-types/package.json](../../../../sources/simstudioai__sim/packages/workflow-types/package.json) | agentRuntime signal |
| agentRuntime | [packages/workflow-types/tsconfig.json](../../../../sources/simstudioai__sim/packages/workflow-types/tsconfig.json) | agentRuntime signal |
| agentRuntime | [packages/workflow-types/src/blocks.ts](../../../../sources/simstudioai__sim/packages/workflow-types/src/blocks.ts) | agentRuntime signal |
| entrypoints | [packages/workflow-persistence/src/index.ts](../../../../sources/simstudioai__sim/packages/workflow-persistence/src/index.ts) | entrypoints signal |
| entrypoints | [packages/workflow-authz/src/index.ts](../../../../sources/simstudioai__sim/packages/workflow-authz/src/index.ts) | entrypoints signal |
| entrypoints | [packages/utils/src/index.ts](../../../../sources/simstudioai__sim/packages/utils/src/index.ts) | entrypoints signal |
| entrypoints | [packages/ts-sdk/src/index.test.ts](../../../../sources/simstudioai__sim/packages/ts-sdk/src/index.test.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 37 | [packages/workflow-persistence/src/index.ts](../../../../sources/simstudioai__sim/packages/workflow-persistence/src/index.ts)<br>[packages/workflow-authz/src/index.ts](../../../../sources/simstudioai__sim/packages/workflow-authz/src/index.ts)<br>[packages/utils/src/index.ts](../../../../sources/simstudioai__sim/packages/utils/src/index.ts)<br>[packages/ts-sdk/src/index.test.ts](../../../../sources/simstudioai__sim/packages/ts-sdk/src/index.test.ts)<br>[packages/ts-sdk/src/index.ts](../../../../sources/simstudioai__sim/packages/ts-sdk/src/index.ts)<br>[packages/testing/src/index.ts](../../../../sources/simstudioai__sim/packages/testing/src/index.ts)<br>[packages/logger/src/index.test.ts](../../../../sources/simstudioai__sim/packages/logger/src/index.test.ts)<br>[packages/logger/src/index.ts](../../../../sources/simstudioai__sim/packages/logger/src/index.ts) |
| agentRuntime | 6030 | [AGENTS.md](../../../../sources/simstudioai__sim/AGENTS.md)<br>[packages/workflow-types/package.json](../../../../sources/simstudioai__sim/packages/workflow-types/package.json)<br>[packages/workflow-types/tsconfig.json](../../../../sources/simstudioai__sim/packages/workflow-types/tsconfig.json)<br>[packages/workflow-types/src/blocks.ts](../../../../sources/simstudioai__sim/packages/workflow-types/src/blocks.ts)<br>[packages/workflow-types/src/workflow.ts](../../../../sources/simstudioai__sim/packages/workflow-types/src/workflow.ts)<br>[packages/workflow-persistence/package.json](../../../../sources/simstudioai__sim/packages/workflow-persistence/package.json)<br>[packages/workflow-persistence/tsconfig.json](../../../../sources/simstudioai__sim/packages/workflow-persistence/tsconfig.json)<br>[packages/workflow-persistence/src/index.ts](../../../../sources/simstudioai__sim/packages/workflow-persistence/src/index.ts) |
| mcp | 130 | [packages/testing/src/mocks/mcp-oauth.mock.ts](../../../../sources/simstudioai__sim/packages/testing/src/mocks/mcp-oauth.mock.ts)<br>[packages/db/migrations/0210_mcp_oauth.sql](../../../../sources/simstudioai__sim/packages/db/migrations/0210_mcp_oauth.sql)<br>[apps/sim/public/email/broadcast/v0.5/mcp.png](../../../../sources/simstudioai__sim/apps/sim/public/email/broadcast/v0.5/mcp.png)<br>[apps/sim/public/blog/v0-5/mcp.png](../../../../sources/simstudioai__sim/apps/sim/public/blog/v0-5/mcp.png)<br>[apps/sim/lib/mcp/client.test.ts](../../../../sources/simstudioai__sim/apps/sim/lib/mcp/client.test.ts)<br>[apps/sim/lib/mcp/client.ts](../../../../sources/simstudioai__sim/apps/sim/lib/mcp/client.ts)<br>[apps/sim/lib/mcp/connection-manager.test.ts](../../../../sources/simstudioai__sim/apps/sim/lib/mcp/connection-manager.test.ts)<br>[apps/sim/lib/mcp/connection-manager.ts](../../../../sources/simstudioai__sim/apps/sim/lib/mcp/connection-manager.ts) |
| retrieval | 1048 | [scripts/check-realtime-prune-graph.ts](../../../../sources/simstudioai__sim/scripts/check-realtime-prune-graph.ts)<br>[packages/workflow-persistence/src/index.ts](../../../../sources/simstudioai__sim/packages/workflow-persistence/src/index.ts)<br>[packages/workflow-authz/src/index.ts](../../../../sources/simstudioai__sim/packages/workflow-authz/src/index.ts)<br>[packages/utils/src/index.ts](../../../../sources/simstudioai__sim/packages/utils/src/index.ts)<br>[packages/ts-sdk/src/index.test.ts](../../../../sources/simstudioai__sim/packages/ts-sdk/src/index.test.ts)<br>[packages/ts-sdk/src/index.ts](../../../../sources/simstudioai__sim/packages/ts-sdk/src/index.ts)<br>[packages/testing/src/index.ts](../../../../sources/simstudioai__sim/packages/testing/src/index.ts)<br>[packages/testing/src/types/index.ts](../../../../sources/simstudioai__sim/packages/testing/src/types/index.ts) |
| spec | 6 | [apps/sim/lib/guardrails/requirements.txt](../../../../sources/simstudioai__sim/apps/sim/lib/guardrails/requirements.txt)<br>[.cursor/rules/sim-architecture.mdc](../../../../sources/simstudioai__sim/.cursor/rules/sim-architecture.mdc)<br>[.cursor/commands/emcn-design-review.md](../../../../sources/simstudioai__sim/.cursor/commands/emcn-design-review.md)<br>[.claude/rules/sim-architecture.md](../../../../sources/simstudioai__sim/.claude/rules/sim-architecture.md)<br>[.claude/commands/emcn-design-review.md](../../../../sources/simstudioai__sim/.claude/commands/emcn-design-review.md)<br>[.agents/skills/emcn-design-review/SKILL.md](../../../../sources/simstudioai__sim/.agents/skills/emcn-design-review/SKILL.md) |
| eval | 669 | [scripts/check-migrations-safety.test.ts](../../../../sources/simstudioai__sim/scripts/check-migrations-safety.test.ts)<br>[scripts/sync-trace-attribute-values-contract.ts](../../../../sources/simstudioai__sim/scripts/sync-trace-attribute-values-contract.ts)<br>[scripts/sync-trace-attributes-contract.ts](../../../../sources/simstudioai__sim/scripts/sync-trace-attributes-contract.ts)<br>[scripts/sync-trace-events-contract.ts](../../../../sources/simstudioai__sim/scripts/sync-trace-events-contract.ts)<br>[scripts/sync-trace-spans-contract.ts](../../../../sources/simstudioai__sim/scripts/sync-trace-spans-contract.ts)<br>[packages/utils/src/errors.test.ts](../../../../sources/simstudioai__sim/packages/utils/src/errors.test.ts)<br>[packages/utils/src/formatting.test.ts](../../../../sources/simstudioai__sim/packages/utils/src/formatting.test.ts)<br>[packages/utils/src/helpers.test.ts](../../../../sources/simstudioai__sim/packages/utils/src/helpers.test.ts) |
| security | 295 | [packages/testing/src/mocks/audit.mock.ts](../../../../sources/simstudioai__sim/packages/testing/src/mocks/audit.mock.ts)<br>[packages/testing/src/mocks/auth-oauth-utils.mock.ts](../../../../sources/simstudioai__sim/packages/testing/src/mocks/auth-oauth-utils.mock.ts)<br>[packages/testing/src/mocks/auth.mock.ts](../../../../sources/simstudioai__sim/packages/testing/src/mocks/auth.mock.ts)<br>[packages/testing/src/mocks/hybrid-auth.mock.ts](../../../../sources/simstudioai__sim/packages/testing/src/mocks/hybrid-auth.mock.ts)<br>[packages/testing/src/mocks/mcp-oauth.mock.ts](../../../../sources/simstudioai__sim/packages/testing/src/mocks/mcp-oauth.mock.ts)<br>[packages/testing/src/factories/permission.factory.ts](../../../../sources/simstudioai__sim/packages/testing/src/factories/permission.factory.ts)<br>[packages/testing/src/assertions/permission.assertions.ts](../../../../sources/simstudioai__sim/packages/testing/src/assertions/permission.assertions.ts)<br>[packages/security/package.json](../../../../sources/simstudioai__sim/packages/security/package.json) |
| ci | 10 | [.github/workflows/ci.yml](../../../../sources/simstudioai__sim/.github/workflows/ci.yml)<br>[.github/workflows/companion-pr-check.yml](../../../../sources/simstudioai__sim/.github/workflows/companion-pr-check.yml)<br>[.github/workflows/docs-embeddings.yml](../../../../sources/simstudioai__sim/.github/workflows/docs-embeddings.yml)<br>[.github/workflows/i18n.yml](../../../../sources/simstudioai__sim/.github/workflows/i18n.yml)<br>[.github/workflows/images.yml](../../../../sources/simstudioai__sim/.github/workflows/images.yml)<br>[.github/workflows/migrations.yml](../../../../sources/simstudioai__sim/.github/workflows/migrations.yml)<br>[.github/workflows/publish-cli.yml](../../../../sources/simstudioai__sim/.github/workflows/publish-cli.yml)<br>[.github/workflows/publish-python-sdk.yml](../../../../sources/simstudioai__sim/.github/workflows/publish-python-sdk.yml) |
| container | 91 | [docker-compose.local.yml](../../../../sources/simstudioai__sim/docker-compose.local.yml)<br>[docker-compose.ollama.yml](../../../../sources/simstudioai__sim/docker-compose.ollama.yml)<br>[docker-compose.prod.yml](../../../../sources/simstudioai__sim/docker-compose.prod.yml)<br>[helm/sim/.helmignore](../../../../sources/simstudioai__sim/helm/sim/.helmignore)<br>[helm/sim/Chart.yaml](../../../../sources/simstudioai__sim/helm/sim/Chart.yaml)<br>[helm/sim/README.md](../../../../sources/simstudioai__sim/helm/sim/README.md)<br>[helm/sim/values.schema.json](../../../../sources/simstudioai__sim/helm/sim/values.schema.json)<br>[helm/sim/values.yaml](../../../../sources/simstudioai__sim/helm/sim/values.yaml) |
| instruction | 25 | [AGENTS.md](../../../../sources/simstudioai__sim/AGENTS.md)<br>[CLAUDE.md](../../../../sources/simstudioai__sim/CLAUDE.md)<br>[apps/sim/AGENTS.md](../../../../sources/simstudioai__sim/apps/sim/AGENTS.md)<br>[apps/sim/triggers/AGENTS.md](../../../../sources/simstudioai__sim/apps/sim/triggers/AGENTS.md)<br>[apps/sim/tools/AGENTS.md](../../../../sources/simstudioai__sim/apps/sim/tools/AGENTS.md)<br>[apps/sim/stores/AGENTS.md](../../../../sources/simstudioai__sim/apps/sim/stores/AGENTS.md)<br>[apps/sim/hooks/AGENTS.md](../../../../sources/simstudioai__sim/apps/sim/hooks/AGENTS.md)<br>[apps/sim/hooks/queries/AGENTS.md](../../../../sources/simstudioai__sim/apps/sim/hooks/queries/AGENTS.md) |
| docs | 1608 | [README.md](../../../../sources/simstudioai__sim/README.md)<br>[scripts/README.md](../../../../sources/simstudioai__sim/scripts/README.md)<br>[packages/README.md](../../../../sources/simstudioai__sim/packages/README.md)<br>[packages/ts-sdk/README.md](../../../../sources/simstudioai__sim/packages/ts-sdk/README.md)<br>[packages/python-sdk/README.md](../../../../sources/simstudioai__sim/packages/python-sdk/README.md)<br>[packages/cli/README.md](../../../../sources/simstudioai__sim/packages/cli/README.md)<br>[helm/sim/README.md](../../../../sources/simstudioai__sim/helm/sim/README.md)<br>[apps/sim/scripts/load/README.md](../../../../sources/simstudioai__sim/apps/sim/scripts/load/README.md) |
| config | 38 | [package.json](../../../../sources/simstudioai__sim/package.json)<br>[turbo.json](../../../../sources/simstudioai__sim/turbo.json)<br>[scripts/tsconfig.json](../../../../sources/simstudioai__sim/scripts/tsconfig.json)<br>[packages/workflow-types/package.json](../../../../sources/simstudioai__sim/packages/workflow-types/package.json)<br>[packages/workflow-types/tsconfig.json](../../../../sources/simstudioai__sim/packages/workflow-types/tsconfig.json)<br>[packages/workflow-persistence/package.json](../../../../sources/simstudioai__sim/packages/workflow-persistence/package.json)<br>[packages/workflow-persistence/tsconfig.json](../../../../sources/simstudioai__sim/packages/workflow-persistence/tsconfig.json)<br>[packages/workflow-authz/package.json](../../../../sources/simstudioai__sim/packages/workflow-authz/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 669 | [scripts/check-migrations-safety.test.ts](../../../../sources/simstudioai__sim/scripts/check-migrations-safety.test.ts)<br>[scripts/sync-trace-attribute-values-contract.ts](../../../../sources/simstudioai__sim/scripts/sync-trace-attribute-values-contract.ts)<br>[scripts/sync-trace-attributes-contract.ts](../../../../sources/simstudioai__sim/scripts/sync-trace-attributes-contract.ts)<br>[scripts/sync-trace-events-contract.ts](../../../../sources/simstudioai__sim/scripts/sync-trace-events-contract.ts)<br>[scripts/sync-trace-spans-contract.ts](../../../../sources/simstudioai__sim/scripts/sync-trace-spans-contract.ts)<br>[packages/utils/src/errors.test.ts](../../../../sources/simstudioai__sim/packages/utils/src/errors.test.ts) |
| CI workflow | 10 | [.github/workflows/ci.yml](../../../../sources/simstudioai__sim/.github/workflows/ci.yml)<br>[.github/workflows/companion-pr-check.yml](../../../../sources/simstudioai__sim/.github/workflows/companion-pr-check.yml)<br>[.github/workflows/docs-embeddings.yml](../../../../sources/simstudioai__sim/.github/workflows/docs-embeddings.yml)<br>[.github/workflows/i18n.yml](../../../../sources/simstudioai__sim/.github/workflows/i18n.yml)<br>[.github/workflows/images.yml](../../../../sources/simstudioai__sim/.github/workflows/images.yml)<br>[.github/workflows/migrations.yml](../../../../sources/simstudioai__sim/.github/workflows/migrations.yml) |
| 컨테이너/배포 | 91 | [docker-compose.local.yml](../../../../sources/simstudioai__sim/docker-compose.local.yml)<br>[docker-compose.ollama.yml](../../../../sources/simstudioai__sim/docker-compose.ollama.yml)<br>[docker-compose.prod.yml](../../../../sources/simstudioai__sim/docker-compose.prod.yml)<br>[helm/sim/.helmignore](../../../../sources/simstudioai__sim/helm/sim/.helmignore)<br>[helm/sim/Chart.yaml](../../../../sources/simstudioai__sim/helm/sim/Chart.yaml)<br>[helm/sim/README.md](../../../../sources/simstudioai__sim/helm/sim/README.md) |
| 보안/정책 | 295 | [packages/testing/src/mocks/audit.mock.ts](../../../../sources/simstudioai__sim/packages/testing/src/mocks/audit.mock.ts)<br>[packages/testing/src/mocks/auth-oauth-utils.mock.ts](../../../../sources/simstudioai__sim/packages/testing/src/mocks/auth-oauth-utils.mock.ts)<br>[packages/testing/src/mocks/auth.mock.ts](../../../../sources/simstudioai__sim/packages/testing/src/mocks/auth.mock.ts)<br>[packages/testing/src/mocks/hybrid-auth.mock.ts](../../../../sources/simstudioai__sim/packages/testing/src/mocks/hybrid-auth.mock.ts)<br>[packages/testing/src/mocks/mcp-oauth.mock.ts](../../../../sources/simstudioai__sim/packages/testing/src/mocks/mcp-oauth.mock.ts)<br>[packages/testing/src/factories/permission.factory.ts](../../../../sources/simstudioai__sim/packages/testing/src/factories/permission.factory.ts) |
| 에이전트 지시문 | 25 | [AGENTS.md](../../../../sources/simstudioai__sim/AGENTS.md)<br>[CLAUDE.md](../../../../sources/simstudioai__sim/CLAUDE.md)<br>[apps/sim/AGENTS.md](../../../../sources/simstudioai__sim/apps/sim/AGENTS.md)<br>[apps/sim/triggers/AGENTS.md](../../../../sources/simstudioai__sim/apps/sim/triggers/AGENTS.md)<br>[apps/sim/tools/AGENTS.md](../../../../sources/simstudioai__sim/apps/sim/tools/AGENTS.md)<br>[apps/sim/stores/AGENTS.md](../../../../sources/simstudioai__sim/apps/sim/stores/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/testing/src/mocks/mcp-oauth.mock.ts`, `packages/db/migrations/0210_mcp_oauth.sql`, `apps/sim/public/email/broadcast/v0.5/mcp.png`.
2. entrypoint를 따라 실행 흐름 확인: `packages/workflow-persistence/src/index.ts`, `packages/workflow-authz/src/index.ts`, `packages/utils/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `packages/workflow-types/package.json`, `packages/workflow-types/tsconfig.json`.
4. retrieval/memory/indexing 확인: `scripts/check-realtime-prune-graph.ts`, `packages/workflow-persistence/src/index.ts`, `packages/workflow-authz/src/index.ts`.
5. test/eval 파일로 동작 검증: `scripts/check-migrations-safety.test.ts`, `scripts/sync-trace-attribute-values-contract.ts`, `scripts/sync-trace-attributes-contract.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Build, deploy, and orchestrate AI agents. Sim is the central intelligence layer for your AI workforce.. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
