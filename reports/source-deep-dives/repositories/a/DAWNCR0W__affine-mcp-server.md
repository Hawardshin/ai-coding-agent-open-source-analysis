# DAWNCR0W/affine-mcp-server 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Model Context Protocol server for AFFiNE. Connect AI assistants to AFFiNE workspaces, documents, databases, and collaboration APIs over stdio or HTTP.

## 요약

- 조사 단위: `sources/DAWNCR0W__affine-mcp-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 119 files, 15 directories, depth score 106, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/util/mcp.ts이고, 의존성 단서는 modelcontextprotocol, express, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | DAWNCR0W/affine-mcp-server |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 201 |
| Forks | 59 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/DAWNCR0W__affine-mcp-server](../../../../sources/DAWNCR0W__affine-mcp-server) |
| 기존 보고서 | [reports/global-trending/repositories/DAWNCR0W__affine-mcp-server.md](../../../global-trending/repositories/DAWNCR0W__affine-mcp-server.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 119 / 15 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | .github, bin, docker, docs, scripts, src, tests |
| 상위 확장자 | .mjs: 42, .ts: 37, .md: 13, .yml: 10, (none): 6, .json: 4, .sh: 3, .png: 2, .example: 1, .yaml: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 42 |
| src | source boundary | 21 |
| docs | documentation surface | 11 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| docker | documentation surface | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | clean | node -e "require('fs').rmSync('dist',{ recursive: true, force: true })" |
| build | package.json | build | npm run clean && tsc -p tsconfig.json |
| serve-dev | package.json | dev | tsx watch src/index.ts |
| serve-dev | package.json | start | node dist/index.js |
| serve-dev | package.json | start:http | MCP_TRANSPORT=http node dist/index.js |
| test | package.json | test | npm run test:tool-manifest |
| test | package.json | test:cli-version | node tests/test-cli-version.mjs |
| test | package.json | test:cli-commands | node tests/test-cli-commands.mjs |
| test | package.json | test:cli-live | node tests/test-cli-live.mjs |
| test | package.json | test:tool-manifest | node scripts/verify-tool-manifest.mjs |
| test | package.json | test:tool-filtering | node tests/test-tool-filtering.mjs |
| test | package.json | test:comprehensive | bash tests/run-comprehensive.sh |
| test | package.json | test:comprehensive:raw | node test-comprehensive.mjs |
| test | package.json | test:e2e | bash tests/run-e2e.sh |
| test | package.json | test:db-create | node tests/test-database-creation.mjs |
| test | package.json | test:db-cells | node tests/test-database-cells.mjs |
| test | package.json | test:db-linked-doc | node tests/test-database-linked-doc.mjs |
| test | package.json | test:db-ui-rows | node tests/test-database-ui-rows.mjs |
| test | package.json | test:db-schema | node tests/test-database-schema.mjs |
| test | package.json | test:data-view | node tests/test-data-view.mjs |
| test | package.json | test:doc-discovery | node tests/test-doc-discovery.mjs |
| test | package.json | test:doc-properties | node tests/test-doc-properties.mjs |
| test | package.json | test:icons | node tests/test-icons.mjs |
| test | package.json | test:read-doc-linked-refs | node tests/test-read-doc-linked-refs.mjs |
| test | package.json | test:find-doc-by-title | node tests/test-find-doc-by-title.mjs |
| test | package.json | test:create-placement | node tests/test-create-placement.mjs |
| test | package.json | test:surface-elements | node tests/test-surface-elements.mjs |
| test | package.json | test:surface-element-gating | node scripts/verify-surface-element-gating.mjs |
| test | package.json | test:edgeless-seed | node tests/test-edgeless-canvas-setup.mjs |
| test | package.json | test:edgeless-ui | npx playwright test tests/playwright/verify-edgeless-canvas.pw.ts --config tests/playwright/playwright.config.ts |
| test | package.json | test:capabilities-fidelity | node tests/test-capabilities-fidelity.mjs |
| test | package.json | test:native-template | node tests/test-native-template-instantiation.mjs |
| test | package.json | test:data-view-ui | npx playwright test tests/playwright/verify-data-view.pw.ts --config tests/playwright/playwright.config.ts |
| test | package.json | test:bearer | node tests/test-bearer-auth.mjs |
| test | package.json | test:http-email-password | node tests/test-http-email-password.mjs |
| test | package.json | test:http-bearer | node tests/test-http-bearer.mjs |
| test | package.json | test:oauth-http | node tests/test-oauth-http.mjs |
| test | package.json | test:organize | node tests/test-organize-tools.mjs |
| test | package.json | test:create-doc-folder-placement | node tests/test-create-doc-folder-placement.mjs |
| test | package.json | test:supporting-tools | node tests/test-supporting-tools.mjs |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | express |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [src/util/mcp.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/util/mcp.ts) | mcp signal |
| agentRuntime | [tool-manifest.json](../../../../sources/DAWNCR0W__affine-mcp-server/tool-manifest.json) | agentRuntime signal |
| agentRuntime | [src/tools/accessTokens.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/tools/accessTokens.ts) | agentRuntime signal |
| agentRuntime | [src/tools/auth.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/tools/auth.ts) | agentRuntime signal |
| agentRuntime | [src/tools/blobStorage.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/tools/blobStorage.ts) | agentRuntime signal |
| entrypoints | [src/cli.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/cli.ts) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/index.ts) | entrypoints signal |
| entrypoints | [bin/affine-mcp](../../../../sources/DAWNCR0W__affine-mcp-server/bin/affine-mcp) | entrypoints signal |
| config | [package.json](../../../../sources/DAWNCR0W__affine-mcp-server/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/DAWNCR0W__affine-mcp-server/tsconfig.json) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/DAWNCR0W__affine-mcp-server/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/docker.yml](../../../../sources/DAWNCR0W__affine-mcp-server/.github/workflows/docker.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [src/cli.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/cli.ts)<br>[src/index.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/index.ts)<br>[bin/affine-mcp](../../../../sources/DAWNCR0W__affine-mcp-server/bin/affine-mcp) |
| agentRuntime | 16 | [tool-manifest.json](../../../../sources/DAWNCR0W__affine-mcp-server/tool-manifest.json)<br>[src/tools/accessTokens.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/tools/accessTokens.ts)<br>[src/tools/auth.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/tools/auth.ts)<br>[src/tools/blobStorage.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/tools/blobStorage.ts)<br>[src/tools/comments.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/tools/comments.ts)<br>[src/tools/docs.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/tools/docs.ts)<br>[src/tools/history.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/tools/history.ts)<br>[src/tools/icons.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/tools/icons.ts) |
| mcp | 1 | [src/util/mcp.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/util/mcp.ts) |
| retrieval | 1 | [src/index.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 50 | [test-comprehensive.mjs](../../../../sources/DAWNCR0W__affine-mcp-server/test-comprehensive.mjs)<br>[tests/acquire-credentials.mjs](../../../../sources/DAWNCR0W__affine-mcp-server/tests/acquire-credentials.mjs)<br>[tests/generate-test-env.sh](../../../../sources/DAWNCR0W__affine-mcp-server/tests/generate-test-env.sh)<br>[tests/run-comprehensive.sh](../../../../sources/DAWNCR0W__affine-mcp-server/tests/run-comprehensive.sh)<br>[tests/run-e2e.sh](../../../../sources/DAWNCR0W__affine-mcp-server/tests/run-e2e.sh)<br>[tests/test-bearer-auth.mjs](../../../../sources/DAWNCR0W__affine-mcp-server/tests/test-bearer-auth.mjs)<br>[tests/test-canvas-tool-map-demo.mjs](../../../../sources/DAWNCR0W__affine-mcp-server/tests/test-canvas-tool-map-demo.mjs)<br>[tests/test-capabilities-fidelity.mjs](../../../../sources/DAWNCR0W__affine-mcp-server/tests/test-capabilities-fidelity.mjs) |
| security | 6 | [SECURITY.md](../../../../sources/DAWNCR0W__affine-mcp-server/SECURITY.md)<br>[tests/test-bearer-auth.mjs](../../../../sources/DAWNCR0W__affine-mcp-server/tests/test-bearer-auth.mjs)<br>[tests/test-oauth-http.mjs](../../../../sources/DAWNCR0W__affine-mcp-server/tests/test-oauth-http.mjs)<br>[src/auth.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/auth.ts)<br>[src/oauth.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/oauth.ts)<br>[src/tools/auth.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/tools/auth.ts) |
| ci | 5 | [.github/workflows/ci.yml](../../../../sources/DAWNCR0W__affine-mcp-server/.github/workflows/ci.yml)<br>[.github/workflows/docker.yml](../../../../sources/DAWNCR0W__affine-mcp-server/.github/workflows/docker.yml)<br>[.github/workflows/e2e.yml](../../../../sources/DAWNCR0W__affine-mcp-server/.github/workflows/e2e.yml)<br>[.github/workflows/enforce-pr-base.yml](../../../../sources/DAWNCR0W__affine-mcp-server/.github/workflows/enforce-pr-base.yml)<br>[.github/workflows/npm-publish.yml](../../../../sources/DAWNCR0W__affine-mcp-server/.github/workflows/npm-publish.yml) |
| container | 2 | [Dockerfile](../../../../sources/DAWNCR0W__affine-mcp-server/Dockerfile)<br>[docker/docker-compose.yml](../../../../sources/DAWNCR0W__affine-mcp-server/docker/docker-compose.yml) |
| instruction | 0 | 명확하지 않음 |
| docs | 9 | [README.md](../../../../sources/DAWNCR0W__affine-mcp-server/README.md)<br>[docs/client-setup.md](../../../../sources/DAWNCR0W__affine-mcp-server/docs/client-setup.md)<br>[docs/configuration-and-deployment.md](../../../../sources/DAWNCR0W__affine-mcp-server/docs/configuration-and-deployment.md)<br>[docs/edgeless-canvas-cookbook.md](../../../../sources/DAWNCR0W__affine-mcp-server/docs/edgeless-canvas-cookbook.md)<br>[docs/getting-started.md](../../../../sources/DAWNCR0W__affine-mcp-server/docs/getting-started.md)<br>[docs/tool-reference.md](../../../../sources/DAWNCR0W__affine-mcp-server/docs/tool-reference.md)<br>[docs/workflow-recipes.md](../../../../sources/DAWNCR0W__affine-mcp-server/docs/workflow-recipes.md)<br>[docs/assets/edgeless-canvas-demo-advanced-dark.png](../../../../sources/DAWNCR0W__affine-mcp-server/docs/assets/edgeless-canvas-demo-advanced-dark.png) |
| config | 2 | [package.json](../../../../sources/DAWNCR0W__affine-mcp-server/package.json)<br>[tsconfig.json](../../../../sources/DAWNCR0W__affine-mcp-server/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 50 | [test-comprehensive.mjs](../../../../sources/DAWNCR0W__affine-mcp-server/test-comprehensive.mjs)<br>[tests/acquire-credentials.mjs](../../../../sources/DAWNCR0W__affine-mcp-server/tests/acquire-credentials.mjs)<br>[tests/generate-test-env.sh](../../../../sources/DAWNCR0W__affine-mcp-server/tests/generate-test-env.sh)<br>[tests/run-comprehensive.sh](../../../../sources/DAWNCR0W__affine-mcp-server/tests/run-comprehensive.sh)<br>[tests/run-e2e.sh](../../../../sources/DAWNCR0W__affine-mcp-server/tests/run-e2e.sh)<br>[tests/test-bearer-auth.mjs](../../../../sources/DAWNCR0W__affine-mcp-server/tests/test-bearer-auth.mjs) |
| CI workflow | 5 | [.github/workflows/ci.yml](../../../../sources/DAWNCR0W__affine-mcp-server/.github/workflows/ci.yml)<br>[.github/workflows/docker.yml](../../../../sources/DAWNCR0W__affine-mcp-server/.github/workflows/docker.yml)<br>[.github/workflows/e2e.yml](../../../../sources/DAWNCR0W__affine-mcp-server/.github/workflows/e2e.yml)<br>[.github/workflows/enforce-pr-base.yml](../../../../sources/DAWNCR0W__affine-mcp-server/.github/workflows/enforce-pr-base.yml)<br>[.github/workflows/npm-publish.yml](../../../../sources/DAWNCR0W__affine-mcp-server/.github/workflows/npm-publish.yml) |
| 컨테이너/배포 | 2 | [Dockerfile](../../../../sources/DAWNCR0W__affine-mcp-server/Dockerfile)<br>[docker/docker-compose.yml](../../../../sources/DAWNCR0W__affine-mcp-server/docker/docker-compose.yml) |
| 보안/정책 | 6 | [SECURITY.md](../../../../sources/DAWNCR0W__affine-mcp-server/SECURITY.md)<br>[tests/test-bearer-auth.mjs](../../../../sources/DAWNCR0W__affine-mcp-server/tests/test-bearer-auth.mjs)<br>[tests/test-oauth-http.mjs](../../../../sources/DAWNCR0W__affine-mcp-server/tests/test-oauth-http.mjs)<br>[src/auth.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/auth.ts)<br>[src/oauth.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/oauth.ts)<br>[src/tools/auth.ts](../../../../sources/DAWNCR0W__affine-mcp-server/src/tools/auth.ts) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/util/mcp.ts`, `tool-manifest.json`, `src/tools/accessTokens.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/cli.ts`, `src/index.ts`, `bin/affine-mcp`.
3. agent/tool runtime 매핑: `tool-manifest.json`, `src/tools/accessTokens.ts`, `src/tools/auth.ts`.
4. retrieval/memory/indexing 확인: `src/index.ts`.
5. test/eval 파일로 동작 검증: `test-comprehensive.mjs`, `tests/acquire-credentials.mjs`, `tests/generate-test-env.sh`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Model Context Protocol server for AFFiNE. Connect AI assistants to AFFiNE workspaces, documents, databases, and collabor. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, README.md, LICENSE, modelcontextprotocol이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
