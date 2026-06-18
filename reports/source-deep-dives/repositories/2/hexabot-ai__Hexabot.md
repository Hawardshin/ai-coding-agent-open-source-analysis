# hexabot-ai/Hexabot 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Hexabot v3 is an AI automation platform, combining workflows, actions, agents, and conversational channels in one runtime.

## 요약

- 조사 단위: `sources/hexabot-ai__Hexabot` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,798 files, 420 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/widget/src/index.css, packages/widget/src/main.tsx, packages/types/src/index.test.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | hexabot-ai/Hexabot |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | TypeScript |
| Stars | 974 |
| Forks | 218 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/hexabot-ai__Hexabot](../../../../sources/hexabot-ai__Hexabot) |
| 기존 보고서 | [reports/global-trending/repositories/hexabot-ai__Hexabot.md](../../../global-trending/repositories/hexabot-ai__Hexabot.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1798 / 420 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | .github, .husky, docker, packages |
| 상위 확장자 | .ts: 1190, .tsx: 383, .json: 70, .md: 31, (none): 27, .yml: 22, .scss: 21, .cjs: 14, .css: 12, .js: 4, .mts: 4, .html: 3 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/api | packages workspace | 110 |
| packages/graph | packages workspace | 62 |
| packages/frontend | packages workspace | 56 |
| packages/types | packages workspace | 38 |
| packages/widget | packages workspace | 22 |
| packages/cli | packages workspace | 6 |
| packages/agentic | packages workspace | 5 |
| .github | ci surface | 1 |
| docker | documentation surface | 1 |
| packages | source boundary | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | turbo run dev --parallel |
| build | package.json | build | turbo run build |
| quality | package.json | lint | turbo run lint |
| test | package.json | test | turbo run test |
| quality | package.json | typecheck | turbo run typecheck |
| quality | package.json | format | turbo run format |
| utility | package.json | clean | turbo run clean |
| utility | package.json | prepare | husky |
| build | package.json | release:prepatch | ./bump-version.sh publish alpha prepatch |
| build | package.json | release:preminor | ./bump-version.sh publish alpha preminor |
| build | package.json | release:prerelease | ./bump-version.sh publish alpha prerelease |
| build | package.json | release:alpha:prepatch | ./bump-version.sh publish alpha prepatch |
| build | package.json | release:alpha:preminor | ./bump-version.sh publish alpha preminor |
| build | package.json | release:alpha:premajor | ./bump-version.sh publish alpha premajor |
| build | package.json | release:alpha:prerelease | ./bump-version.sh publish alpha prerelease |
| build | package.json | release:beta:prepatch | ./bump-version.sh publish beta prepatch |
| build | package.json | release:beta:preminor | ./bump-version.sh publish beta preminor |
| build | package.json | release:beta:premajor | ./bump-version.sh publish beta premajor |
| build | package.json | release:beta:prerelease | ./bump-version.sh publish beta prerelease |
| build | package.json | release:stable:patch | ./bump-version.sh publish stable patch |
| build | package.json | release:stable:minor | ./bump-version.sh publish stable minor |
| build | package.json | release:stable:major | ./bump-version.sh publish stable major |
| test | package.json | release:promote:latest | ./bump-version.sh promote latest current |
| serve-dev | package.json | dev:api | turbo run dev --filter=@hexabot-ai/api --filter=@hexabot-ai/agentic --filter=@hexabot-ai/types --parallel |


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
| entrypoints | [packages/widget/src/index.css](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/index.css) | entrypoints signal |
| entrypoints | [packages/widget/src/main.tsx](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/main.tsx) | entrypoints signal |
| entrypoints | [packages/types/src/index.test.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/index.test.ts) | entrypoints signal |
| entrypoints | [packages/types/src/index.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/index.ts) | entrypoints signal |
| container | [packages/widget/Dockerfile](../../../../sources/hexabot-ai__Hexabot/packages/widget/Dockerfile) | container signal |
| container | [packages/frontend/Dockerfile](../../../../sources/hexabot-ai__Hexabot/packages/frontend/Dockerfile) | container signal |
| container | [packages/api/Dockerfile](../../../../sources/hexabot-ai__Hexabot/packages/api/Dockerfile) | container signal |
| container | [packages/api/Dockerfile.base](../../../../sources/hexabot-ai__Hexabot/packages/api/Dockerfile.base) | container signal |
| config | [package.json](../../../../sources/hexabot-ai__Hexabot/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/hexabot-ai__Hexabot/pnpm-workspace.yaml) | config signal |
| config | [turbo.json](../../../../sources/hexabot-ai__Hexabot/turbo.json) | config signal |
| config | [packages/widget/package.json](../../../../sources/hexabot-ai__Hexabot/packages/widget/package.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 19 | [packages/widget/src/index.css](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/index.css)<br>[packages/widget/src/main.tsx](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/main.tsx)<br>[packages/types/src/index.test.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/index.test.ts)<br>[packages/types/src/index.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/index.ts)<br>[packages/graph/src/index.test.ts](../../../../sources/hexabot-ai__Hexabot/packages/graph/src/index.test.ts)<br>[packages/graph/src/index.ts](../../../../sources/hexabot-ai__Hexabot/packages/graph/src/index.ts)<br>[packages/frontend/src/App.tsx](../../../../sources/hexabot-ai__Hexabot/packages/frontend/src/App.tsx)<br>[packages/frontend/src/main.tsx](../../../../sources/hexabot-ai__Hexabot/packages/frontend/src/main.tsx) |
| agentRuntime | 360 | [AGENTS.md](../../../../sources/hexabot-ai__Hexabot/AGENTS.md)<br>[packages/widget/AGENTS.md](../../../../sources/hexabot-ai__Hexabot/packages/widget/AGENTS.md)<br>[packages/widget/src/hooks/useSubscribeBroadcastChannel.ts](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/hooks/useSubscribeBroadcastChannel.ts)<br>[packages/widget/src/hooks/useTranslation.tsx](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/hooks/useTranslation.tsx)<br>[packages/widget/src/hooks/useTypewriter.ts](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/hooks/useTypewriter.ts)<br>[packages/types/AGENTS.md](../../../../sources/hexabot-ai__Hexabot/packages/types/AGENTS.md)<br>[packages/types/src/workflow/domain.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/workflow/domain.ts)<br>[packages/types/src/workflow/helpers.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/workflow/helpers.ts) |
| mcp | 63 | [packages/types/src/workflow/mcp-server.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/workflow/mcp-server.ts)<br>[packages/types/src/user/mcp-token.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/user/mcp-token.ts)<br>[packages/frontend/src/types/mcp-server.types.ts](../../../../sources/hexabot-ai__Hexabot/packages/frontend/src/types/mcp-server.types.ts)<br>[packages/frontend/src/components/profile/mcp-tokens.utils.test.ts](../../../../sources/hexabot-ai__Hexabot/packages/frontend/src/components/profile/mcp-tokens.utils.test.ts)<br>[packages/frontend/src/components/profile/mcp-tokens.utils.ts](../../../../sources/hexabot-ai__Hexabot/packages/frontend/src/components/profile/mcp-tokens.utils.ts)<br>[packages/frontend/src/components/mcp-servers/index.tsx](../../../../sources/hexabot-ai__Hexabot/packages/frontend/src/components/mcp-servers/index.tsx)<br>[packages/frontend/src/components/mcp-servers/McpServerForm.tsx](../../../../sources/hexabot-ai__Hexabot/packages/frontend/src/components/mcp-servers/McpServerForm.tsx)<br>[packages/frontend/src/components/mcp-servers/McpServerFormDialog.tsx](../../../../sources/hexabot-ai__Hexabot/packages/frontend/src/components/mcp-servers/McpServerFormDialog.tsx) |
| retrieval | 236 | [packages/widget/index.html](../../../../sources/hexabot-ai__Hexabot/packages/widget/index.html)<br>[packages/widget/src/index.css](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/index.css)<br>[packages/widget/src/translations/index.ts](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/translations/index.ts)<br>[packages/widget/public/index.html](../../../../sources/hexabot-ai__Hexabot/packages/widget/public/index.html)<br>[packages/types/src/index.test.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/index.test.ts)<br>[packages/types/src/index.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/index.ts)<br>[packages/types/src/workflow/index.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/workflow/index.ts)<br>[packages/types/src/workflow/memory-definition.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/workflow/memory-definition.ts) |
| spec | 167 | [packages/api/test/app.e2e-spec.ts](../../../../sources/hexabot-ai__Hexabot/packages/api/test/app.e2e-spec.ts)<br>[packages/api/src/app.service.spec.ts](../../../../sources/hexabot-ai__Hexabot/packages/api/src/app.service.spec.ts)<br>[packages/api/src/workflow/utils/memory-store.spec.ts](../../../../sources/hexabot-ai__Hexabot/packages/api/src/workflow/utils/memory-store.spec.ts)<br>[packages/api/src/workflow/utils/schema-instance.spec.ts](../../../../sources/hexabot-ai__Hexabot/packages/api/src/workflow/utils/schema-instance.spec.ts)<br>[packages/api/src/workflow/services/agentic.service.spec.ts](../../../../sources/hexabot-ai__Hexabot/packages/api/src/workflow/services/agentic.service.spec.ts)<br>[packages/api/src/workflow/services/mcp-client-pool.service.spec.ts](../../../../sources/hexabot-ai__Hexabot/packages/api/src/workflow/services/mcp-client-pool.service.spec.ts)<br>[packages/api/src/workflow/services/mcp-server.service.spec.ts](../../../../sources/hexabot-ai__Hexabot/packages/api/src/workflow/services/mcp-server.service.spec.ts)<br>[packages/api/src/workflow/services/memory-definition.service.spec.ts](../../../../sources/hexabot-ai__Hexabot/packages/api/src/workflow/services/memory-definition.service.spec.ts) |
| eval | 318 | [packages/widget/src/utils/SocketIoClient.test.ts](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/utils/SocketIoClient.test.ts)<br>[packages/widget/src/utils/webhook-url.test.ts](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/utils/webhook-url.test.ts)<br>[packages/widget/src/theme/theme.utils.test.ts](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/theme/theme.utils.test.ts)<br>[packages/widget/src/test/setup.ts](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/test/setup.ts)<br>[packages/widget/src/providers/ConfigProvider.test.tsx](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/providers/ConfigProvider.test.tsx)<br>[packages/widget/src/providers/ThemeProvider.test.tsx](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/providers/ThemeProvider.test.tsx)<br>[packages/widget/src/components/Message.test.tsx](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/components/Message.test.tsx)<br>[packages/types/src/index.test.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/index.test.ts) |
| security | 75 | [SECURITY.md](../../../../sources/hexabot-ai__Hexabot/SECURITY.md)<br>[packages/types/src/user/permission.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/user/permission.ts)<br>[packages/types/src/audit/audit-log.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/audit/audit-log.ts)<br>[packages/types/src/audit/index.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/audit/index.ts)<br>[packages/frontend/src/types/auth/login.types.ts](../../../../sources/hexabot-ai__Hexabot/packages/frontend/src/types/auth/login.types.ts)<br>[packages/frontend/src/types/auth/permission.types.ts](../../../../sources/hexabot-ai__Hexabot/packages/frontend/src/types/auth/permission.types.ts)<br>[packages/frontend/src/hooks/auth/useAuthRedirection.ts](../../../../sources/hexabot-ai__Hexabot/packages/frontend/src/hooks/auth/useAuthRedirection.ts)<br>[packages/frontend/src/contexts/auth.context.tsx](../../../../sources/hexabot-ai__Hexabot/packages/frontend/src/contexts/auth.context.tsx) |
| ci | 3 | [.github/workflows/main-ci.yml](../../../../sources/hexabot-ai__Hexabot/.github/workflows/main-ci.yml)<br>[.github/workflows/npm-promote.yml](../../../../sources/hexabot-ai__Hexabot/.github/workflows/npm-promote.yml)<br>[.github/workflows/npm-publish.yml](../../../../sources/hexabot-ai__Hexabot/.github/workflows/npm-publish.yml) |
| container | 17 | [packages/widget/Dockerfile](../../../../sources/hexabot-ai__Hexabot/packages/widget/Dockerfile)<br>[packages/frontend/Dockerfile](../../../../sources/hexabot-ai__Hexabot/packages/frontend/Dockerfile)<br>[packages/api/Dockerfile](../../../../sources/hexabot-ai__Hexabot/packages/api/Dockerfile)<br>[packages/api/Dockerfile.base](../../../../sources/hexabot-ai__Hexabot/packages/api/Dockerfile.base)<br>[docker/docker-compose.dev.yml](../../../../sources/hexabot-ai__Hexabot/docker/docker-compose.dev.yml)<br>[docker/docker-compose.nginx.dev.yml](../../../../sources/hexabot-ai__Hexabot/docker/docker-compose.nginx.dev.yml)<br>[docker/docker-compose.nginx.prod.yml](../../../../sources/hexabot-ai__Hexabot/docker/docker-compose.nginx.prod.yml)<br>[docker/docker-compose.nginx.yml](../../../../sources/hexabot-ai__Hexabot/docker/docker-compose.nginx.yml) |
| instruction | 8 | [AGENTS.md](../../../../sources/hexabot-ai__Hexabot/AGENTS.md)<br>[packages/widget/AGENTS.md](../../../../sources/hexabot-ai__Hexabot/packages/widget/AGENTS.md)<br>[packages/types/AGENTS.md](../../../../sources/hexabot-ai__Hexabot/packages/types/AGENTS.md)<br>[packages/graph/AGENTS.md](../../../../sources/hexabot-ai__Hexabot/packages/graph/AGENTS.md)<br>[packages/frontend/AGENTS.md](../../../../sources/hexabot-ai__Hexabot/packages/frontend/AGENTS.md)<br>[packages/cli/AGENTS.md](../../../../sources/hexabot-ai__Hexabot/packages/cli/AGENTS.md)<br>[packages/api/AGENTS.md](../../../../sources/hexabot-ai__Hexabot/packages/api/AGENTS.md)<br>[packages/agentic/AGENTS.md](../../../../sources/hexabot-ai__Hexabot/packages/agentic/AGENTS.md) |
| docs | 15 | [README.md](../../../../sources/hexabot-ai__Hexabot/README.md)<br>[packages/widget/README.md](../../../../sources/hexabot-ai__Hexabot/packages/widget/README.md)<br>[packages/types/README.md](../../../../sources/hexabot-ai__Hexabot/packages/types/README.md)<br>[packages/graph/README.md](../../../../sources/hexabot-ai__Hexabot/packages/graph/README.md)<br>[packages/frontend/README.md](../../../../sources/hexabot-ai__Hexabot/packages/frontend/README.md)<br>[packages/cli/README.md](../../../../sources/hexabot-ai__Hexabot/packages/cli/README.md)<br>[packages/api/README.md](../../../../sources/hexabot-ai__Hexabot/packages/api/README.md)<br>[packages/api/src/websocket/README.md](../../../../sources/hexabot-ai__Hexabot/packages/api/src/websocket/README.md) |
| config | 20 | [package.json](../../../../sources/hexabot-ai__Hexabot/package.json)<br>[pnpm-workspace.yaml](../../../../sources/hexabot-ai__Hexabot/pnpm-workspace.yaml)<br>[turbo.json](../../../../sources/hexabot-ai__Hexabot/turbo.json)<br>[packages/widget/package.json](../../../../sources/hexabot-ai__Hexabot/packages/widget/package.json)<br>[packages/widget/tsconfig.json](../../../../sources/hexabot-ai__Hexabot/packages/widget/tsconfig.json)<br>[packages/types/package.json](../../../../sources/hexabot-ai__Hexabot/packages/types/package.json)<br>[packages/types/tsconfig.json](../../../../sources/hexabot-ai__Hexabot/packages/types/tsconfig.json)<br>[packages/graph/package.json](../../../../sources/hexabot-ai__Hexabot/packages/graph/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 318 | [packages/widget/src/utils/SocketIoClient.test.ts](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/utils/SocketIoClient.test.ts)<br>[packages/widget/src/utils/webhook-url.test.ts](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/utils/webhook-url.test.ts)<br>[packages/widget/src/theme/theme.utils.test.ts](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/theme/theme.utils.test.ts)<br>[packages/widget/src/test/setup.ts](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/test/setup.ts)<br>[packages/widget/src/providers/ConfigProvider.test.tsx](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/providers/ConfigProvider.test.tsx)<br>[packages/widget/src/providers/ThemeProvider.test.tsx](../../../../sources/hexabot-ai__Hexabot/packages/widget/src/providers/ThemeProvider.test.tsx) |
| CI workflow | 3 | [.github/workflows/main-ci.yml](../../../../sources/hexabot-ai__Hexabot/.github/workflows/main-ci.yml)<br>[.github/workflows/npm-promote.yml](../../../../sources/hexabot-ai__Hexabot/.github/workflows/npm-promote.yml)<br>[.github/workflows/npm-publish.yml](../../../../sources/hexabot-ai__Hexabot/.github/workflows/npm-publish.yml) |
| 컨테이너/배포 | 17 | [packages/widget/Dockerfile](../../../../sources/hexabot-ai__Hexabot/packages/widget/Dockerfile)<br>[packages/frontend/Dockerfile](../../../../sources/hexabot-ai__Hexabot/packages/frontend/Dockerfile)<br>[packages/api/Dockerfile](../../../../sources/hexabot-ai__Hexabot/packages/api/Dockerfile)<br>[packages/api/Dockerfile.base](../../../../sources/hexabot-ai__Hexabot/packages/api/Dockerfile.base)<br>[docker/docker-compose.dev.yml](../../../../sources/hexabot-ai__Hexabot/docker/docker-compose.dev.yml)<br>[docker/docker-compose.nginx.dev.yml](../../../../sources/hexabot-ai__Hexabot/docker/docker-compose.nginx.dev.yml) |
| 보안/정책 | 75 | [SECURITY.md](../../../../sources/hexabot-ai__Hexabot/SECURITY.md)<br>[packages/types/src/user/permission.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/user/permission.ts)<br>[packages/types/src/audit/audit-log.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/audit/audit-log.ts)<br>[packages/types/src/audit/index.ts](../../../../sources/hexabot-ai__Hexabot/packages/types/src/audit/index.ts)<br>[packages/frontend/src/types/auth/login.types.ts](../../../../sources/hexabot-ai__Hexabot/packages/frontend/src/types/auth/login.types.ts)<br>[packages/frontend/src/types/auth/permission.types.ts](../../../../sources/hexabot-ai__Hexabot/packages/frontend/src/types/auth/permission.types.ts) |
| 에이전트 지시문 | 8 | [AGENTS.md](../../../../sources/hexabot-ai__Hexabot/AGENTS.md)<br>[packages/widget/AGENTS.md](../../../../sources/hexabot-ai__Hexabot/packages/widget/AGENTS.md)<br>[packages/types/AGENTS.md](../../../../sources/hexabot-ai__Hexabot/packages/types/AGENTS.md)<br>[packages/graph/AGENTS.md](../../../../sources/hexabot-ai__Hexabot/packages/graph/AGENTS.md)<br>[packages/frontend/AGENTS.md](../../../../sources/hexabot-ai__Hexabot/packages/frontend/AGENTS.md)<br>[packages/cli/AGENTS.md](../../../../sources/hexabot-ai__Hexabot/packages/cli/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/widget/src/index.css`, `packages/widget/src/main.tsx`, `packages/types/src/index.test.ts`.
2. entrypoint를 따라 실행 흐름 확인: `packages/widget/src/index.css`, `packages/widget/src/main.tsx`, `packages/types/src/index.test.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `packages/widget/AGENTS.md`, `packages/widget/src/hooks/useSubscribeBroadcastChannel.ts`.
4. retrieval/memory/indexing 확인: `packages/widget/index.html`, `packages/widget/src/index.css`, `packages/widget/src/translations/index.ts`.
5. test/eval 파일로 동작 검증: `packages/widget/src/utils/SocketIoClient.test.ts`, `packages/widget/src/utils/webhook-url.test.ts`, `packages/widget/src/theme/theme.utils.test.ts`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 Hexabot v3 is an AI automation platform, combining workflows, actions, agents, and conversational channels in one runtim. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
