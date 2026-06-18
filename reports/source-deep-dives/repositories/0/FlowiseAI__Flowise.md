# FlowiseAI/Flowise 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Build AI Agents, Visually

## 요약

- 조사 단위: `sources/FlowiseAI__Flowise` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,444 files, 699 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/server/src/services/mcp-server/index.test.ts, packages/server/src/services/mcp-server/index.ts, packages/server/src/services/mcp-endpoint/index.test.ts이고, 의존성 단서는 express, react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | FlowiseAI/Flowise |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 53689 |
| Forks | 24531 |
| License | NOASSERTION |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/FlowiseAI__Flowise](../../../../sources/FlowiseAI__Flowise) |
| 기존 보고서 | [reports/global-trending/repositories/FlowiseAI__Flowise.md](../../../global-trending/repositories/FlowiseAI__Flowise.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2444 / 699 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .changeset, .github, .husky, assets, docker, i18n, images, metrics, packages |
| 상위 확장자 | .ts: 1312, .jsx: 285, .svg: 283, .tsx: 155, .js: 102, .json: 90, .png: 85, .md: 39, (none): 20, .yml: 19, .html: 12, .css: 11 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/ui | packages workspace | 84 |
| packages/server | packages workspace | 82 |
| packages/components | packages workspace | 37 |
| packages/observe | packages workspace | 17 |
| packages/agentflow | packages workspace | 10 |
| packages/api-documentation | packages workspace | 5 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| docker | documentation surface | 1 |
| i18n | top-level component | 1 |
| images | top-level component | 1 |
| metrics | top-level component | 1 |
| packages | source boundary | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | turbo run build |
| serve-dev | package.json | build:docker | turbo run build --filter=!@flowiseai/agentflow --filter=!@flowiseai/observe |
| build | package.json | build-force | pnpm clean && turbo run build --force |
| serve-dev | package.json | dev | turbo run dev --parallel --no-cache |
| serve-dev | package.json | start | run-script-os |
| serve-dev | package.json | start:windows | cd packages/server/bin && run start |
| serve-dev | package.json | start:default | cd packages/server/bin && ./run start |
| serve-dev | package.json | start-worker | run-script-os |
| serve-dev | package.json | start-worker:windows | cd packages/server/bin && run worker |
| serve-dev | package.json | start-worker:default | cd packages/server/bin && ./run worker |
| utility | package.json | user | run-script-os |
| serve-dev | package.json | user:windows | cd packages/server/bin && run user |
| serve-dev | package.json | user:default | cd packages/server/bin && ./run user |
| test | package.json | test | turbo run test |
| test | package.json | test:coverage | turbo run test:coverage |
| utility | package.json | clean | pnpm -r clean |
| utility | package.json | nuke | pnpm -r nuke && rimraf node_modules .turbo |
| quality | package.json | format | prettier --write "**/*.{ts,tsx,md}" |
| quality | package.json | lint | eslint "**/*.{js,jsx,ts,tsx,json,md}" |
| quality | package.json | lint-fix | pnpm lint --fix |
| utility | package.json | quick | pretty-quick --staged |
| utility | package.json | postinstall | husky install |
| quality | package.json | migration:create | pnpm typeorm migration:create |
| utility | package.json | changeset | changeset |
| utility | package.json | changeset:version | changeset version |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | express, react |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [packages/server/src/services/mcp-server/index.test.ts](../../../../sources/FlowiseAI__Flowise/packages/server/src/services/mcp-server/index.test.ts) | mcp signal |
| mcp | [packages/server/src/services/mcp-server/index.ts](../../../../sources/FlowiseAI__Flowise/packages/server/src/services/mcp-server/index.ts) | mcp signal |
| mcp | [packages/server/src/services/mcp-endpoint/index.test.ts](../../../../sources/FlowiseAI__Flowise/packages/server/src/services/mcp-endpoint/index.test.ts) | mcp signal |
| mcp | [packages/server/src/services/mcp-endpoint/index.ts](../../../../sources/FlowiseAI__Flowise/packages/server/src/services/mcp-endpoint/index.ts) | mcp signal |
| agentRuntime | [packages/ui/src/views/tools/CustomMcpServerDialog.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/views/tools/CustomMcpServerDialog.jsx) | agentRuntime signal |
| agentRuntime | [packages/ui/src/views/tools/HowToUseFunctionDialog.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/views/tools/HowToUseFunctionDialog.jsx) | agentRuntime signal |
| agentRuntime | [packages/ui/src/views/tools/index.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/views/tools/index.jsx) | agentRuntime signal |
| agentRuntime | [packages/ui/src/views/tools/PasteJSONDialog.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/views/tools/PasteJSONDialog.jsx) | agentRuntime signal |
| entrypoints | [packages/ui/src/App.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/App.jsx) | entrypoints signal |
| entrypoints | [packages/ui/src/index.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/index.jsx) | entrypoints signal |
| entrypoints | [packages/server/src/index.ts](../../../../sources/FlowiseAI__Flowise/packages/server/src/index.ts) | entrypoints signal |
| entrypoints | [packages/server/bin/.gitattributes](../../../../sources/FlowiseAI__Flowise/packages/server/bin/.gitattributes) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 16 | [packages/ui/src/App.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/App.jsx)<br>[packages/ui/src/index.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/index.jsx)<br>[packages/server/src/index.ts](../../../../sources/FlowiseAI__Flowise/packages/server/src/index.ts)<br>[packages/server/bin/.gitattributes](../../../../sources/FlowiseAI__Flowise/packages/server/bin/.gitattributes)<br>[packages/server/bin/dev](../../../../sources/FlowiseAI__Flowise/packages/server/bin/dev)<br>[packages/server/bin/dev.cmd](../../../../sources/FlowiseAI__Flowise/packages/server/bin/dev.cmd)<br>[packages/server/bin/run](../../../../sources/FlowiseAI__Flowise/packages/server/bin/run)<br>[packages/server/bin/run.cmd](../../../../sources/FlowiseAI__Flowise/packages/server/bin/run.cmd) |
| agentRuntime | 249 | [packages/ui/src/views/tools/CustomMcpServerDialog.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/views/tools/CustomMcpServerDialog.jsx)<br>[packages/ui/src/views/tools/HowToUseFunctionDialog.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/views/tools/HowToUseFunctionDialog.jsx)<br>[packages/ui/src/views/tools/index.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/views/tools/index.jsx)<br>[packages/ui/src/views/tools/PasteJSONDialog.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/views/tools/PasteJSONDialog.jsx)<br>[packages/ui/src/views/tools/ToolDialog.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/views/tools/ToolDialog.jsx)<br>[packages/ui/src/store/context/ConfigContext.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/store/context/ConfigContext.jsx)<br>[packages/ui/src/store/context/ConfirmContext.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/store/context/ConfirmContext.jsx)<br>[packages/ui/src/store/context/ConfirmContextProvider.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/store/context/ConfirmContextProvider.jsx) |
| mcp | 39 | [packages/server/src/services/mcp-server/index.test.ts](../../../../sources/FlowiseAI__Flowise/packages/server/src/services/mcp-server/index.test.ts)<br>[packages/server/src/services/mcp-server/index.ts](../../../../sources/FlowiseAI__Flowise/packages/server/src/services/mcp-server/index.ts)<br>[packages/server/src/services/mcp-endpoint/index.test.ts](../../../../sources/FlowiseAI__Flowise/packages/server/src/services/mcp-endpoint/index.test.ts)<br>[packages/server/src/services/mcp-endpoint/index.ts](../../../../sources/FlowiseAI__Flowise/packages/server/src/services/mcp-endpoint/index.ts)<br>[packages/server/src/services/custom-mcp-servers/index.test.ts](../../../../sources/FlowiseAI__Flowise/packages/server/src/services/custom-mcp-servers/index.test.ts)<br>[packages/server/src/services/custom-mcp-servers/index.ts](../../../../sources/FlowiseAI__Flowise/packages/server/src/services/custom-mcp-servers/index.ts)<br>[packages/server/src/routes/mcp-server/index.ts](../../../../sources/FlowiseAI__Flowise/packages/server/src/routes/mcp-server/index.ts)<br>[packages/server/src/routes/mcp-endpoint/index.test.ts](../../../../sources/FlowiseAI__Flowise/packages/server/src/routes/mcp-endpoint/index.test.ts) |
| retrieval | 301 | [packages/ui/index.html](../../../../sources/FlowiseAI__Flowise/packages/ui/index.html)<br>[packages/ui/src/index.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/index.jsx)<br>[packages/ui/src/views/workspace/index.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/views/workspace/index.jsx)<br>[packages/ui/src/views/variables/index.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/views/variables/index.jsx)<br>[packages/ui/src/views/users/index.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/views/users/index.jsx)<br>[packages/ui/src/views/tools/index.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/views/tools/index.jsx)<br>[packages/ui/src/views/settings/index.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/views/settings/index.jsx)<br>[packages/ui/src/views/serverlogs/index.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/views/serverlogs/index.jsx) |
| spec | 2 | [packages/observe/ARCHITECTURE.md](../../../../sources/FlowiseAI__Flowise/packages/observe/ARCHITECTURE.md)<br>[packages/agentflow/ARCHITECTURE.md](../../../../sources/FlowiseAI__Flowise/packages/agentflow/ARCHITECTURE.md) |
| eval | 164 | [artillery-load-test.yml](../../../../sources/FlowiseAI__Flowise/artillery-load-test.yml)<br>[packages/ui/src/utils/genericHelper.test.js](../../../../sources/FlowiseAI__Flowise/packages/ui/src/utils/genericHelper.test.js)<br>[packages/ui/src/utils/xmlTagUtils.test.js](../../../../sources/FlowiseAI__Flowise/packages/ui/src/utils/xmlTagUtils.test.js)<br>[packages/server/src/Interface.Evaluation.ts](../../../../sources/FlowiseAI__Flowise/packages/server/src/Interface.Evaluation.ts)<br>[packages/server/src/utils/apiKey.test.ts](../../../../sources/FlowiseAI__Flowise/packages/server/src/utils/apiKey.test.ts)<br>[packages/server/src/utils/callbackDispatcher.test.ts](../../../../sources/FlowiseAI__Flowise/packages/server/src/utils/callbackDispatcher.test.ts)<br>[packages/server/src/utils/ipValidation.test.ts](../../../../sources/FlowiseAI__Flowise/packages/server/src/utils/ipValidation.test.ts)<br>[packages/server/src/utils/logger.test.ts](../../../../sources/FlowiseAI__Flowise/packages/server/src/utils/logger.test.ts) |
| security | 26 | [SECURITY.md](../../../../sources/FlowiseAI__Flowise/SECURITY.md)<br>[packages/ui/src/views/auth/confirm-email-change.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/views/auth/confirm-email-change.jsx)<br>[packages/ui/src/views/auth/expired.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/views/auth/expired.jsx)<br>[packages/ui/src/views/auth/forgotPassword.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/views/auth/forgotPassword.jsx)<br>[packages/ui/src/views/auth/login.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/views/auth/login.jsx)<br>[packages/ui/src/views/auth/loginActivity.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/views/auth/loginActivity.jsx)<br>[packages/ui/src/views/auth/rateLimited.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/views/auth/rateLimited.jsx)<br>[packages/ui/src/views/auth/register.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/views/auth/register.jsx) |
| ci | 8 | [.github/workflows/docker-image-dockerhub.yml](../../../../sources/FlowiseAI__Flowise/.github/workflows/docker-image-dockerhub.yml)<br>[.github/workflows/docker-image-ecr.yml](../../../../sources/FlowiseAI__Flowise/.github/workflows/docker-image-ecr.yml)<br>[.github/workflows/main.yml](../../../../sources/FlowiseAI__Flowise/.github/workflows/main.yml)<br>[.github/workflows/proprietary-path-guard.yml](../../../../sources/FlowiseAI__Flowise/.github/workflows/proprietary-path-guard.yml)<br>[.github/workflows/publish-agentflow.yml](../../../../sources/FlowiseAI__Flowise/.github/workflows/publish-agentflow.yml)<br>[.github/workflows/publish-observe.yml](../../../../sources/FlowiseAI__Flowise/.github/workflows/publish-observe.yml)<br>[.github/workflows/publish-package.yml](../../../../sources/FlowiseAI__Flowise/.github/workflows/publish-package.yml)<br>[.github/workflows/test_docker_build.yml](../../../../sources/FlowiseAI__Flowise/.github/workflows/test_docker_build.yml) |
| container | 8 | [Dockerfile](../../../../sources/FlowiseAI__Flowise/Dockerfile)<br>[metrics/otel/compose.yaml](../../../../sources/FlowiseAI__Flowise/metrics/otel/compose.yaml)<br>[docker/docker-compose-queue-prebuilt.yml](../../../../sources/FlowiseAI__Flowise/docker/docker-compose-queue-prebuilt.yml)<br>[docker/docker-compose-queue-source.yml](../../../../sources/FlowiseAI__Flowise/docker/docker-compose-queue-source.yml)<br>[docker/docker-compose.yml](../../../../sources/FlowiseAI__Flowise/docker/docker-compose.yml)<br>[docker/Dockerfile](../../../../sources/FlowiseAI__Flowise/docker/Dockerfile)<br>[docker/worker/docker-compose.yml](../../../../sources/FlowiseAI__Flowise/docker/worker/docker-compose.yml)<br>[docker/worker/Dockerfile](../../../../sources/FlowiseAI__Flowise/docker/worker/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 27 | [README.md](../../../../sources/FlowiseAI__Flowise/README.md)<br>[packages/ui/README-ZH.md](../../../../sources/FlowiseAI__Flowise/packages/ui/README-ZH.md)<br>[packages/ui/README.md](../../../../sources/FlowiseAI__Flowise/packages/ui/README.md)<br>[packages/server/README-ZH.md](../../../../sources/FlowiseAI__Flowise/packages/server/README-ZH.md)<br>[packages/server/README.md](../../../../sources/FlowiseAI__Flowise/packages/server/README.md)<br>[packages/observe/README.md](../../../../sources/FlowiseAI__Flowise/packages/observe/README.md)<br>[packages/observe/examples/README.md](../../../../sources/FlowiseAI__Flowise/packages/observe/examples/README.md)<br>[packages/components/README-ZH.md](../../../../sources/FlowiseAI__Flowise/packages/components/README-ZH.md) |
| config | 19 | [package.json](../../../../sources/FlowiseAI__Flowise/package.json)<br>[pnpm-workspace.yaml](../../../../sources/FlowiseAI__Flowise/pnpm-workspace.yaml)<br>[turbo.json](../../../../sources/FlowiseAI__Flowise/turbo.json)<br>[packages/ui/package.json](../../../../sources/FlowiseAI__Flowise/packages/ui/package.json)<br>[packages/server/package.json](../../../../sources/FlowiseAI__Flowise/packages/server/package.json)<br>[packages/server/tsconfig.json](../../../../sources/FlowiseAI__Flowise/packages/server/tsconfig.json)<br>[packages/observe/package.json](../../../../sources/FlowiseAI__Flowise/packages/observe/package.json)<br>[packages/observe/tsconfig.json](../../../../sources/FlowiseAI__Flowise/packages/observe/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 164 | [artillery-load-test.yml](../../../../sources/FlowiseAI__Flowise/artillery-load-test.yml)<br>[packages/ui/src/utils/genericHelper.test.js](../../../../sources/FlowiseAI__Flowise/packages/ui/src/utils/genericHelper.test.js)<br>[packages/ui/src/utils/xmlTagUtils.test.js](../../../../sources/FlowiseAI__Flowise/packages/ui/src/utils/xmlTagUtils.test.js)<br>[packages/server/src/Interface.Evaluation.ts](../../../../sources/FlowiseAI__Flowise/packages/server/src/Interface.Evaluation.ts)<br>[packages/server/src/utils/apiKey.test.ts](../../../../sources/FlowiseAI__Flowise/packages/server/src/utils/apiKey.test.ts)<br>[packages/server/src/utils/callbackDispatcher.test.ts](../../../../sources/FlowiseAI__Flowise/packages/server/src/utils/callbackDispatcher.test.ts) |
| CI workflow | 8 | [.github/workflows/docker-image-dockerhub.yml](../../../../sources/FlowiseAI__Flowise/.github/workflows/docker-image-dockerhub.yml)<br>[.github/workflows/docker-image-ecr.yml](../../../../sources/FlowiseAI__Flowise/.github/workflows/docker-image-ecr.yml)<br>[.github/workflows/main.yml](../../../../sources/FlowiseAI__Flowise/.github/workflows/main.yml)<br>[.github/workflows/proprietary-path-guard.yml](../../../../sources/FlowiseAI__Flowise/.github/workflows/proprietary-path-guard.yml)<br>[.github/workflows/publish-agentflow.yml](../../../../sources/FlowiseAI__Flowise/.github/workflows/publish-agentflow.yml)<br>[.github/workflows/publish-observe.yml](../../../../sources/FlowiseAI__Flowise/.github/workflows/publish-observe.yml) |
| 컨테이너/배포 | 8 | [Dockerfile](../../../../sources/FlowiseAI__Flowise/Dockerfile)<br>[metrics/otel/compose.yaml](../../../../sources/FlowiseAI__Flowise/metrics/otel/compose.yaml)<br>[docker/docker-compose-queue-prebuilt.yml](../../../../sources/FlowiseAI__Flowise/docker/docker-compose-queue-prebuilt.yml)<br>[docker/docker-compose-queue-source.yml](../../../../sources/FlowiseAI__Flowise/docker/docker-compose-queue-source.yml)<br>[docker/docker-compose.yml](../../../../sources/FlowiseAI__Flowise/docker/docker-compose.yml)<br>[docker/Dockerfile](../../../../sources/FlowiseAI__Flowise/docker/Dockerfile) |
| 보안/정책 | 26 | [SECURITY.md](../../../../sources/FlowiseAI__Flowise/SECURITY.md)<br>[packages/ui/src/views/auth/confirm-email-change.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/views/auth/confirm-email-change.jsx)<br>[packages/ui/src/views/auth/expired.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/views/auth/expired.jsx)<br>[packages/ui/src/views/auth/forgotPassword.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/views/auth/forgotPassword.jsx)<br>[packages/ui/src/views/auth/login.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/views/auth/login.jsx)<br>[packages/ui/src/views/auth/loginActivity.jsx](../../../../sources/FlowiseAI__Flowise/packages/ui/src/views/auth/loginActivity.jsx) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/server/src/services/mcp-server/index.test.ts`, `packages/server/src/services/mcp-server/index.ts`, `packages/server/src/services/mcp-endpoint/index.test.ts`.
2. entrypoint를 따라 실행 흐름 확인: `packages/ui/src/App.jsx`, `packages/ui/src/index.jsx`, `packages/server/src/index.ts`.
3. agent/tool runtime 매핑: `packages/ui/src/views/tools/CustomMcpServerDialog.jsx`, `packages/ui/src/views/tools/HowToUseFunctionDialog.jsx`, `packages/ui/src/views/tools/index.jsx`.
4. retrieval/memory/indexing 확인: `packages/ui/index.html`, `packages/ui/src/index.jsx`, `packages/ui/src/views/workspace/index.jsx`.
5. test/eval 파일로 동작 검증: `artillery-load-test.yml`, `packages/ui/src/utils/genericHelper.test.js`, `packages/ui/src/utils/xmlTagUtils.test.js`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Build AI Agents, Visually. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, README.md, react, ci이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
