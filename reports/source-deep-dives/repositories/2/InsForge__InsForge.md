# InsForge/InsForge 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

The all-in-one, open-source backend platform for agentic coding. InsForge gives your coding agent database, auth, storage, compute, hosting, and AI gateway to ship full-stack apps end-to-end.

## 요약

- 조사 단위: `sources/InsForge__InsForge` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,319 files, 307 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/dashboard/src/features/dashboard/components/connect/mcp/CursorDeeplinkGenerator.tsx, packages/dashboard/src/features/dashboard/components/connect/mcp/helpers.tsx, packages/dashboard/src/features/dashboard/components/connect/mcp/index.ts이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | InsForge/InsForge |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 11848 |
| Forks | 1009 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/InsForge__InsForge](../../../../sources/InsForge__InsForge) |
| 기존 보고서 | [reports/global-trending/repositories/InsForge__InsForge.md](../../../global-trending/repositories/InsForge__InsForge.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1319 / 307 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .agents, .claude, .claude-plugin, .codex, .github, .gstack, assets, backend, deploy, docs, examples, frontend, functions, logs, openapi, packages, scripts |
| 상위 확장자 | .ts: 577, .tsx: 277, .md: 85, .mdx: 73, .svg: 70, .sql: 60, .png: 41, .sh: 29, .json: 20, .yml: 20, .yaml: 14, .js: 9 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/dashboard | packages workspace | 135 |
| docs | documentation surface | 73 |
| packages/ui | packages workspace | 15 |
| packages/shared-schemas | packages workspace | 8 |
| examples/python-ml-experiment-tracker | examples workspace | 6 |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| backend | top-level component | 1 |
| deploy | deployment surface | 1 |
| examples | top-level component | 1 |
| examples/oauth | examples workspace | 1 |
| frontend | top-level component | 1 |
| functions | top-level component | 1 |
| logs | top-level component | 1 |
| openapi | source boundary | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | turbo run dev |
| serve-dev | package.json | dev:debug | concurrently -n "backend,frontend" -c "cyan,magenta" "npm run dev:backend:debug" "npm run dev:frontend:debug" |
| serve-dev | package.json | dev:backend | cd backend && npm run dev |
| serve-dev | package.json | dev:backend:debug | cd backend && cross-env DEBUG_MODE=true npm run dev |
| serve-dev | package.json | dev:frontend | cd frontend && npm run dev |
| serve-dev | package.json | dev:frontend:debug | cd frontend && cross-env VITE_DEBUG_MODE=true npm run dev |
| build | package.json | build | turbo run build |
| serve-dev | package.json | start | cd backend && npm run start |
| serve-dev | package.json | start:prod | npm run build && npm run start |
| test | package.json | test | turbo run test |
| test | package.json | test:backend | cd backend && npm test |
| test | package.json | test:e2e | cd backend && npm run test:e2e |
| quality | package.json | lint | turbo run lint |
| quality | package.json | lint:fix | eslint . --fix |
| quality | package.json | format | prettier --write . |
| quality | package.json | format:check | prettier --check . |
| quality | package.json | typecheck | turbo run typecheck |
| utility | package.json | clean | turbo run clean |
| utility | package.json | install:all | npm install && cd backend && npm install && cd ../frontend && npm install |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | react |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [packages/dashboard/src/features/dashboard/components/connect/mcp/CursorDeeplinkGenerator.tsx](../../../../sources/InsForge__InsForge/packages/dashboard/src/features/dashboard/components/connect/mcp/CursorDeeplinkGenerator.tsx) | mcp signal |
| mcp | [packages/dashboard/src/features/dashboard/components/connect/mcp/helpers.tsx](../../../../sources/InsForge__InsForge/packages/dashboard/src/features/dashboard/components/connect/mcp/helpers.tsx) | mcp signal |
| mcp | [packages/dashboard/src/features/dashboard/components/connect/mcp/index.ts](../../../../sources/InsForge__InsForge/packages/dashboard/src/features/dashboard/components/connect/mcp/index.ts) | mcp signal |
| mcp | [packages/dashboard/src/features/dashboard/components/connect/mcp/QoderDeeplinkGenerator.tsx](../../../../sources/InsForge__InsForge/packages/dashboard/src/features/dashboard/components/connect/mcp/QoderDeeplinkGenerator.tsx) | mcp signal |
| agentRuntime | [packages/shared-schemas/src/memory-api.schema.ts](../../../../sources/InsForge__InsForge/packages/shared-schemas/src/memory-api.schema.ts) | agentRuntime signal |
| agentRuntime | [packages/dashboard/src/lib/hooks/useCloudProjectInfo.ts](../../../../sources/InsForge__InsForge/packages/dashboard/src/lib/hooks/useCloudProjectInfo.ts) | agentRuntime signal |
| agentRuntime | [packages/dashboard/src/lib/hooks/useConfirm.ts](../../../../sources/InsForge__InsForge/packages/dashboard/src/lib/hooks/useConfirm.ts) | agentRuntime signal |
| agentRuntime | [packages/dashboard/src/lib/hooks/useHealth.ts](../../../../sources/InsForge__InsForge/packages/dashboard/src/lib/hooks/useHealth.ts) | agentRuntime signal |
| entrypoints | [packages/ui/src/index.ts](../../../../sources/InsForge__InsForge/packages/ui/src/index.ts) | entrypoints signal |
| entrypoints | [packages/shared-schemas/src/index.ts](../../../../sources/InsForge__InsForge/packages/shared-schemas/src/index.ts) | entrypoints signal |
| entrypoints | [packages/dashboard/src/index.ts](../../../../sources/InsForge__InsForge/packages/dashboard/src/index.ts) | entrypoints signal |
| entrypoints | [functions/server.ts](../../../../sources/InsForge__InsForge/functions/server.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 7 | [packages/ui/src/index.ts](../../../../sources/InsForge__InsForge/packages/ui/src/index.ts)<br>[packages/shared-schemas/src/index.ts](../../../../sources/InsForge__InsForge/packages/shared-schemas/src/index.ts)<br>[packages/dashboard/src/index.ts](../../../../sources/InsForge__InsForge/packages/dashboard/src/index.ts)<br>[functions/server.ts](../../../../sources/InsForge__InsForge/functions/server.ts)<br>[frontend/src/App.tsx](../../../../sources/InsForge__InsForge/frontend/src/App.tsx)<br>[frontend/src/main.tsx](../../../../sources/InsForge__InsForge/frontend/src/main.tsx)<br>[backend/src/server.ts](../../../../sources/InsForge__InsForge/backend/src/server.ts) |
| agentRuntime | 109 | [packages/shared-schemas/src/memory-api.schema.ts](../../../../sources/InsForge__InsForge/packages/shared-schemas/src/memory-api.schema.ts)<br>[packages/dashboard/src/lib/hooks/useCloudProjectInfo.ts](../../../../sources/InsForge__InsForge/packages/dashboard/src/lib/hooks/useCloudProjectInfo.ts)<br>[packages/dashboard/src/lib/hooks/useConfirm.ts](../../../../sources/InsForge__InsForge/packages/dashboard/src/lib/hooks/useConfirm.ts)<br>[packages/dashboard/src/lib/hooks/useHealth.ts](../../../../sources/InsForge__InsForge/packages/dashboard/src/lib/hooks/useHealth.ts)<br>[packages/dashboard/src/lib/hooks/useMediaQuery.ts](../../../../sources/InsForge__InsForge/packages/dashboard/src/lib/hooks/useMediaQuery.ts)<br>[packages/dashboard/src/lib/hooks/useMetadata.ts](../../../../sources/InsForge__InsForge/packages/dashboard/src/lib/hooks/useMetadata.ts)<br>[packages/dashboard/src/lib/hooks/usePageSize.ts](../../../../sources/InsForge__InsForge/packages/dashboard/src/lib/hooks/usePageSize.ts)<br>[packages/dashboard/src/lib/hooks/useSmartPaste.ts](../../../../sources/InsForge__InsForge/packages/dashboard/src/lib/hooks/useSmartPaste.ts) |
| mcp | 31 | [packages/dashboard/src/features/dashboard/components/connect/mcp/CursorDeeplinkGenerator.tsx](../../../../sources/InsForge__InsForge/packages/dashboard/src/features/dashboard/components/connect/mcp/CursorDeeplinkGenerator.tsx)<br>[packages/dashboard/src/features/dashboard/components/connect/mcp/helpers.tsx](../../../../sources/InsForge__InsForge/packages/dashboard/src/features/dashboard/components/connect/mcp/helpers.tsx)<br>[packages/dashboard/src/features/dashboard/components/connect/mcp/index.ts](../../../../sources/InsForge__InsForge/packages/dashboard/src/features/dashboard/components/connect/mcp/index.ts)<br>[packages/dashboard/src/features/dashboard/components/connect/mcp/QoderDeeplinkGenerator.tsx](../../../../sources/InsForge__InsForge/packages/dashboard/src/features/dashboard/components/connect/mcp/QoderDeeplinkGenerator.tsx)<br>[docs/mcp-setup.mdx](../../../../sources/InsForge__InsForge/docs/mcp-setup.mdx)<br>[docs/images/mcp-setup/antigravity-1.png](../../../../sources/InsForge__InsForge/docs/images/mcp-setup/antigravity-1.png)<br>[docs/images/mcp-setup/Antigravity-MCP.mp4](../../../../sources/InsForge__InsForge/docs/images/mcp-setup/Antigravity-MCP.mp4)<br>[docs/images/mcp-setup/CC-MCP-1.mp4](../../../../sources/InsForge__InsForge/docs/images/mcp-setup/CC-MCP-1.mp4) |
| retrieval | 62 | [packages/ui/src/index.ts](../../../../sources/InsForge__InsForge/packages/ui/src/index.ts)<br>[packages/ui/src/lib/index.ts](../../../../sources/InsForge__InsForge/packages/ui/src/lib/index.ts)<br>[packages/ui/src/components/index.ts](../../../../sources/InsForge__InsForge/packages/ui/src/components/index.ts)<br>[packages/shared-schemas/src/index.ts](../../../../sources/InsForge__InsForge/packages/shared-schemas/src/index.ts)<br>[packages/shared-schemas/src/memory-api.schema.ts](../../../../sources/InsForge__InsForge/packages/shared-schemas/src/memory-api.schema.ts)<br>[packages/dashboard/src/index.ts](../../../../sources/InsForge__InsForge/packages/dashboard/src/index.ts)<br>[packages/dashboard/src/types/index.ts](../../../../sources/InsForge__InsForge/packages/dashboard/src/types/index.ts)<br>[packages/dashboard/src/router/index.ts](../../../../sources/InsForge__InsForge/packages/dashboard/src/router/index.ts) |
| spec | 8 | [packages/dashboard/tests/ui/auth-flow.spec.ts](../../../../sources/InsForge__InsForge/packages/dashboard/tests/ui/auth-flow.spec.ts)<br>[docs/superpowers/specs/2026-03-16-custom-smtp-design.md](../../../../sources/InsForge__InsForge/docs/superpowers/specs/2026-03-16-custom-smtp-design.md)<br>[docs/superpowers/specs/2026-04-07-compute-dashboard-ux-design.md](../../../../sources/InsForge__InsForge/docs/superpowers/specs/2026-04-07-compute-dashboard-ux-design.md)<br>[docs/superpowers/specs/2026-04-21-dtest-onboarding-design.md](../../../../sources/InsForge__InsForge/docs/superpowers/specs/2026-04-21-dtest-onboarding-design.md)<br>[docs/superpowers/specs/2026-04-22-s3-compatible-storage-gateway-design.md](../../../../sources/InsForge__InsForge/docs/superpowers/specs/2026-04-22-s3-compatible-storage-gateway-design.md)<br>[docs/superpowers/specs/2026-04-29-backend-branching-oss-design.md](../../../../sources/InsForge__InsForge/docs/superpowers/specs/2026-04-29-backend-branching-oss-design.md)<br>[docs/superpowers/specs/2026-05-24-posthog-analytics-layout-redesign-design.md](../../../../sources/InsForge__InsForge/docs/superpowers/specs/2026-05-24-posthog-analytics-layout-redesign-design.md)<br>[docs/superpowers/specs/2026-06-04-compute-container-logs-design.md](../../../../sources/InsForge__InsForge/docs/superpowers/specs/2026-06-04-compute-container-logs-design.md) |
| eval | 217 | [packages/ui/src/test/setup.ts](../../../../sources/InsForge__InsForge/packages/ui/src/test/setup.ts)<br>[packages/ui/src/lib/__tests__/utils.test.ts](../../../../sources/InsForge__InsForge/packages/ui/src/lib/__tests__/utils.test.ts)<br>[packages/ui/src/components/__tests__/Button.test.tsx](../../../../sources/InsForge__InsForge/packages/ui/src/components/__tests__/Button.test.tsx)<br>[packages/ui/src/components/__tests__/EmptyState.test.tsx](../../../../sources/InsForge__InsForge/packages/ui/src/components/__tests__/EmptyState.test.tsx)<br>[packages/ui/src/components/__tests__/Input.test.tsx](../../../../sources/InsForge__InsForge/packages/ui/src/components/__tests__/Input.test.tsx)<br>[packages/ui/src/components/__tests__/LoadingState.test.tsx](../../../../sources/InsForge__InsForge/packages/ui/src/components/__tests__/LoadingState.test.tsx)<br>[packages/ui/src/components/__tests__/SearchInput.test.tsx](../../../../sources/InsForge__InsForge/packages/ui/src/components/__tests__/SearchInput.test.tsx)<br>[packages/ui/src/components/__tests__/Skeleton.test.tsx](../../../../sources/InsForge__InsForge/packages/ui/src/components/__tests__/Skeleton.test.tsx) |
| security | 106 | [GITHUB_OAUTH_SETUP.md](../../../../sources/InsForge__InsForge/GITHUB_OAUTH_SETUP.md)<br>[GOOGLE_OAUTH_SETUP.md](../../../../sources/InsForge__InsForge/GOOGLE_OAUTH_SETUP.md)<br>[SECURITY.md](../../../../sources/InsForge__InsForge/SECURITY.md)<br>[packages/shared-schemas/src/auth-api.schema.ts](../../../../sources/InsForge__InsForge/packages/shared-schemas/src/auth-api.schema.ts)<br>[packages/shared-schemas/src/auth.schema.ts](../../../../sources/InsForge__InsForge/packages/shared-schemas/src/auth.schema.ts)<br>[packages/dashboard/tests/ui/auth-flow.spec.ts](../../../../sources/InsForge__InsForge/packages/dashboard/tests/ui/auth-flow.spec.ts)<br>[packages/dashboard/src/features/logs/services/audit.service.ts](../../../../sources/InsForge__InsForge/packages/dashboard/src/features/logs/services/audit.service.ts)<br>[packages/dashboard/src/features/functions/services/secret.service.ts](../../../../sources/InsForge__InsForge/packages/dashboard/src/features/functions/services/secret.service.ts) |
| ci | 8 | [.github/workflows/build-image.yml](../../../../sources/InsForge__InsForge/.github/workflows/build-image.yml)<br>[.github/workflows/check-migrations.yml](../../../../sources/InsForge__InsForge/.github/workflows/check-migrations.yml)<br>[.github/workflows/ci-premerge-check.yml](../../../../sources/InsForge__InsForge/.github/workflows/ci-premerge-check.yml)<br>[.github/workflows/e2e.yml](../../../../sources/InsForge__InsForge/.github/workflows/e2e.yml)<br>[.github/workflows/frontend-tests.yml](../../../../sources/InsForge__InsForge/.github/workflows/frontend-tests.yml)<br>[.github/workflows/integration-tests.yml](../../../../sources/InsForge__InsForge/.github/workflows/integration-tests.yml)<br>[.github/workflows/lint-and-format.yml](../../../../sources/InsForge__InsForge/.github/workflows/lint-and-format.yml)<br>[.github/workflows/unit-tests.yml](../../../../sources/InsForge__InsForge/.github/workflows/unit-tests.yml) |
| container | 24 | [docker-compose.dokploy.yml](../../../../sources/InsForge__InsForge/docker-compose.dokploy.yml)<br>[docker-compose.override.yml](../../../../sources/InsForge__InsForge/docker-compose.override.yml)<br>[docker-compose.prod.yml](../../../../sources/InsForge__InsForge/docker-compose.prod.yml)<br>[docker-compose.yml](../../../../sources/InsForge__InsForge/docker-compose.yml)<br>[Dockerfile](../../../../sources/InsForge__InsForge/Dockerfile)<br>[docs/deployment/deploy-to-aws-ec2.md](../../../../sources/InsForge__InsForge/docs/deployment/deploy-to-aws-ec2.md)<br>[docs/deployment/deploy-to-azure-virtual-machines.md](../../../../sources/InsForge__InsForge/docs/deployment/deploy-to-azure-virtual-machines.md)<br>[docs/deployment/deploy-to-containarium.md](../../../../sources/InsForge__InsForge/docs/deployment/deploy-to-containarium.md) |
| instruction | 7 | [.github/copilot-instructions.md](../../../../sources/InsForge__InsForge/.github/copilot-instructions.md)<br>[.codex/skills/insforge-dev/SKILL.md](../../../../sources/InsForge__InsForge/.codex/skills/insforge-dev/SKILL.md)<br>[.codex/skills/insforge-dev/ui/SKILL.md](../../../../sources/InsForge__InsForge/.codex/skills/insforge-dev/ui/SKILL.md)<br>[.codex/skills/insforge-dev/shared-schemas/SKILL.md](../../../../sources/InsForge__InsForge/.codex/skills/insforge-dev/shared-schemas/SKILL.md)<br>[.codex/skills/insforge-dev/docs/SKILL.md](../../../../sources/InsForge__InsForge/.codex/skills/insforge-dev/docs/SKILL.md)<br>[.codex/skills/insforge-dev/dashboard/SKILL.md](../../../../sources/InsForge__InsForge/.codex/skills/insforge-dev/dashboard/SKILL.md)<br>[.codex/skills/insforge-dev/backend/SKILL.md](../../../../sources/InsForge__InsForge/.codex/skills/insforge-dev/backend/SKILL.md) |
| docs | 195 | [README.md](../../../../sources/InsForge__InsForge/README.md)<br>[packages/ui/README.md](../../../../sources/InsForge__InsForge/packages/ui/README.md)<br>[packages/dashboard/README.md](../../../../sources/InsForge__InsForge/packages/dashboard/README.md)<br>[functions/examples/README.md](../../../../sources/InsForge__InsForge/functions/examples/README.md)<br>[examples/python-ml-experiment-tracker/README.md](../../../../sources/InsForge__InsForge/examples/python-ml-experiment-tracker/README.md)<br>[examples/python-ml-experiment-tracker/docs/dashboard-all-runs.png](../../../../sources/InsForge__InsForge/examples/python-ml-experiment-tracker/docs/dashboard-all-runs.png)<br>[examples/python-ml-experiment-tracker/docs/dashboard-chart.png](../../../../sources/InsForge__InsForge/examples/python-ml-experiment-tracker/docs/dashboard-chart.png)<br>[examples/python-ml-experiment-tracker/docs/demo.gif](../../../../sources/InsForge__InsForge/examples/python-ml-experiment-tracker/docs/demo.gif) |
| config | 14 | [package.json](../../../../sources/InsForge__InsForge/package.json)<br>[tsconfig.json](../../../../sources/InsForge__InsForge/tsconfig.json)<br>[turbo.json](../../../../sources/InsForge__InsForge/turbo.json)<br>[packages/ui/package.json](../../../../sources/InsForge__InsForge/packages/ui/package.json)<br>[packages/ui/tsconfig.json](../../../../sources/InsForge__InsForge/packages/ui/tsconfig.json)<br>[packages/shared-schemas/package.json](../../../../sources/InsForge__InsForge/packages/shared-schemas/package.json)<br>[packages/shared-schemas/tsconfig.json](../../../../sources/InsForge__InsForge/packages/shared-schemas/tsconfig.json)<br>[packages/dashboard/package.json](../../../../sources/InsForge__InsForge/packages/dashboard/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 217 | [packages/ui/src/test/setup.ts](../../../../sources/InsForge__InsForge/packages/ui/src/test/setup.ts)<br>[packages/ui/src/lib/__tests__/utils.test.ts](../../../../sources/InsForge__InsForge/packages/ui/src/lib/__tests__/utils.test.ts)<br>[packages/ui/src/components/__tests__/Button.test.tsx](../../../../sources/InsForge__InsForge/packages/ui/src/components/__tests__/Button.test.tsx)<br>[packages/ui/src/components/__tests__/EmptyState.test.tsx](../../../../sources/InsForge__InsForge/packages/ui/src/components/__tests__/EmptyState.test.tsx)<br>[packages/ui/src/components/__tests__/Input.test.tsx](../../../../sources/InsForge__InsForge/packages/ui/src/components/__tests__/Input.test.tsx)<br>[packages/ui/src/components/__tests__/LoadingState.test.tsx](../../../../sources/InsForge__InsForge/packages/ui/src/components/__tests__/LoadingState.test.tsx) |
| CI workflow | 8 | [.github/workflows/build-image.yml](../../../../sources/InsForge__InsForge/.github/workflows/build-image.yml)<br>[.github/workflows/check-migrations.yml](../../../../sources/InsForge__InsForge/.github/workflows/check-migrations.yml)<br>[.github/workflows/ci-premerge-check.yml](../../../../sources/InsForge__InsForge/.github/workflows/ci-premerge-check.yml)<br>[.github/workflows/e2e.yml](../../../../sources/InsForge__InsForge/.github/workflows/e2e.yml)<br>[.github/workflows/frontend-tests.yml](../../../../sources/InsForge__InsForge/.github/workflows/frontend-tests.yml)<br>[.github/workflows/integration-tests.yml](../../../../sources/InsForge__InsForge/.github/workflows/integration-tests.yml) |
| 컨테이너/배포 | 24 | [docker-compose.dokploy.yml](../../../../sources/InsForge__InsForge/docker-compose.dokploy.yml)<br>[docker-compose.override.yml](../../../../sources/InsForge__InsForge/docker-compose.override.yml)<br>[docker-compose.prod.yml](../../../../sources/InsForge__InsForge/docker-compose.prod.yml)<br>[docker-compose.yml](../../../../sources/InsForge__InsForge/docker-compose.yml)<br>[Dockerfile](../../../../sources/InsForge__InsForge/Dockerfile)<br>[docs/deployment/deploy-to-aws-ec2.md](../../../../sources/InsForge__InsForge/docs/deployment/deploy-to-aws-ec2.md) |
| 보안/정책 | 106 | [GITHUB_OAUTH_SETUP.md](../../../../sources/InsForge__InsForge/GITHUB_OAUTH_SETUP.md)<br>[GOOGLE_OAUTH_SETUP.md](../../../../sources/InsForge__InsForge/GOOGLE_OAUTH_SETUP.md)<br>[SECURITY.md](../../../../sources/InsForge__InsForge/SECURITY.md)<br>[packages/shared-schemas/src/auth-api.schema.ts](../../../../sources/InsForge__InsForge/packages/shared-schemas/src/auth-api.schema.ts)<br>[packages/shared-schemas/src/auth.schema.ts](../../../../sources/InsForge__InsForge/packages/shared-schemas/src/auth.schema.ts)<br>[packages/dashboard/tests/ui/auth-flow.spec.ts](../../../../sources/InsForge__InsForge/packages/dashboard/tests/ui/auth-flow.spec.ts) |
| 에이전트 지시문 | 7 | [.github/copilot-instructions.md](../../../../sources/InsForge__InsForge/.github/copilot-instructions.md)<br>[.codex/skills/insforge-dev/SKILL.md](../../../../sources/InsForge__InsForge/.codex/skills/insforge-dev/SKILL.md)<br>[.codex/skills/insforge-dev/ui/SKILL.md](../../../../sources/InsForge__InsForge/.codex/skills/insforge-dev/ui/SKILL.md)<br>[.codex/skills/insforge-dev/shared-schemas/SKILL.md](../../../../sources/InsForge__InsForge/.codex/skills/insforge-dev/shared-schemas/SKILL.md)<br>[.codex/skills/insforge-dev/docs/SKILL.md](../../../../sources/InsForge__InsForge/.codex/skills/insforge-dev/docs/SKILL.md)<br>[.codex/skills/insforge-dev/dashboard/SKILL.md](../../../../sources/InsForge__InsForge/.codex/skills/insforge-dev/dashboard/SKILL.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/dashboard/src/features/dashboard/components/connect/mcp/CursorDeeplinkGenerator.tsx`, `packages/dashboard/src/features/dashboard/components/connect/mcp/helpers.tsx`, `packages/dashboard/src/features/dashboard/components/connect/mcp/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `packages/ui/src/index.ts`, `packages/shared-schemas/src/index.ts`, `packages/dashboard/src/index.ts`.
3. agent/tool runtime 매핑: `packages/shared-schemas/src/memory-api.schema.ts`, `packages/dashboard/src/lib/hooks/useCloudProjectInfo.ts`, `packages/dashboard/src/lib/hooks/useConfirm.ts`.
4. retrieval/memory/indexing 확인: `packages/ui/src/index.ts`, `packages/ui/src/lib/index.ts`, `packages/ui/src/components/index.ts`.
5. test/eval 파일로 동작 검증: `packages/ui/src/test/setup.ts`, `packages/ui/src/lib/__tests__/utils.test.ts`, `packages/ui/src/components/__tests__/Button.test.tsx`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 The all in one, open source backend platform for agentic coding. InsForge gives your coding agent database, auth, storag. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, docker-compose.yml, README.md, LICENSE이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
