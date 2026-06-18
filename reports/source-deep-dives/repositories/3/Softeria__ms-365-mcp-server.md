# Softeria/ms-365-mcp-server 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

A Model Context Protocol (MCP) server for interacting with Microsoft 365 and Office services through the Graph API

## 요약

- 조사 단위: `sources/Softeria__ms-365-mcp-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 111 files, 12 directories, depth score 105, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=test/mcp-instructions.test.ts, src/mcp-instructions.ts, bin/modules/generate-mcp-tools.mjs이고, 의존성 단서는 modelcontextprotocol, express, commander, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Softeria/ms-365-mcp-server |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 785 |
| Forks | 303 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Softeria__ms-365-mcp-server](../../../../sources/Softeria__ms-365-mcp-server) |
| 기존 보고서 | [reports/global-trending/repositories/Softeria__ms-365-mcp-server.md](../../../global-trending/repositories/Softeria__ms-365-mcp-server.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 111 / 12 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | .github, bin, docs, examples, src, test |
| 상위 확장자 | .ts: 78, .js: 6, .json: 6, (none): 6, .md: 5, .mjs: 5, .yml: 2, .bicep: 1, .example: 1, .ps1: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 18 |
| docs | documentation surface | 2 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| examples | top-level component | 1 |
| examples/azure-container-apps | examples workspace | 1 |
| test | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | generate | node bin/generate-graph-client.mjs |
| build | package.json | build | tsup |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| serve-dev | package.json | dev | tsx src/index.ts |
| serve-dev | package.json | dev:http | tsx --watch src/index.ts --http 127.0.0.1:3000 -v |
| quality | package.json | format | prettier --write "**/*.{ts,mts,js,mjs,json,md}" |
| quality | package.json | format:check | prettier --check "**/*.{ts,mts,js,mjs,json,md}" |
| quality | package.json | lint | eslint . |
| quality | package.json | lint:fix | eslint . --fix |
| test | package.json | verify | npm run generate && npm run lint && npm run format:check && npm run build && npm run test |
| test | package.json | inspector | npx @modelcontextprotocol/inspector tsx src/index.ts |
| entrypoint | package.json bin | index.js | dist/index.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | express |
| developerSurface | commander |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [test/mcp-instructions.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/mcp-instructions.test.ts) | mcp signal |
| mcp | [src/mcp-instructions.ts](../../../../sources/Softeria__ms-365-mcp-server/src/mcp-instructions.ts) | mcp signal |
| mcp | [bin/modules/generate-mcp-tools.mjs](../../../../sources/Softeria__ms-365-mcp-server/bin/modules/generate-mcp-tools.mjs) | mcp signal |
| agentRuntime | [test/tool-filtering.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/tool-filtering.test.ts) | agentRuntime signal |
| agentRuntime | [test/tool-schema.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/tool-schema.test.ts) | agentRuntime signal |
| agentRuntime | [src/tool-categories.ts](../../../../sources/Softeria__ms-365-mcp-server/src/tool-categories.ts) | agentRuntime signal |
| agentRuntime | [src/lib/tool-schema.ts](../../../../sources/Softeria__ms-365-mcp-server/src/lib/tool-schema.ts) | agentRuntime signal |
| entrypoints | [src/cli.ts](../../../../sources/Softeria__ms-365-mcp-server/src/cli.ts) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/Softeria__ms-365-mcp-server/src/index.ts) | entrypoints signal |
| entrypoints | [src/server.ts](../../../../sources/Softeria__ms-365-mcp-server/src/server.ts) | entrypoints signal |
| entrypoints | [bin/generate-graph-client.mjs](../../../../sources/Softeria__ms-365-mcp-server/bin/generate-graph-client.mjs) | entrypoints signal |
| config | [package.json](../../../../sources/Softeria__ms-365-mcp-server/package.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 8 | [src/cli.ts](../../../../sources/Softeria__ms-365-mcp-server/src/cli.ts)<br>[src/index.ts](../../../../sources/Softeria__ms-365-mcp-server/src/index.ts)<br>[src/server.ts](../../../../sources/Softeria__ms-365-mcp-server/src/server.ts)<br>[bin/generate-graph-client.mjs](../../../../sources/Softeria__ms-365-mcp-server/bin/generate-graph-client.mjs)<br>[bin/modules/download-openapi.mjs](../../../../sources/Softeria__ms-365-mcp-server/bin/modules/download-openapi.mjs)<br>[bin/modules/extract-descriptions.mjs](../../../../sources/Softeria__ms-365-mcp-server/bin/modules/extract-descriptions.mjs)<br>[bin/modules/generate-mcp-tools.mjs](../../../../sources/Softeria__ms-365-mcp-server/bin/modules/generate-mcp-tools.mjs)<br>[bin/modules/simplified-openapi.mjs](../../../../sources/Softeria__ms-365-mcp-server/bin/modules/simplified-openapi.mjs) |
| agentRuntime | 4 | [test/tool-filtering.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/tool-filtering.test.ts)<br>[test/tool-schema.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/tool-schema.test.ts)<br>[src/tool-categories.ts](../../../../sources/Softeria__ms-365-mcp-server/src/tool-categories.ts)<br>[src/lib/tool-schema.ts](../../../../sources/Softeria__ms-365-mcp-server/src/lib/tool-schema.ts) |
| mcp | 3 | [test/mcp-instructions.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/mcp-instructions.test.ts)<br>[src/mcp-instructions.ts](../../../../sources/Softeria__ms-365-mcp-server/src/mcp-instructions.ts)<br>[bin/modules/generate-mcp-tools.mjs](../../../../sources/Softeria__ms-365-mcp-server/bin/modules/generate-mcp-tools.mjs) |
| retrieval | 8 | [test/graph-api.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/graph-api.test.ts)<br>[test/graph-resilience.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/graph-resilience.test.ts)<br>[src/graph-client.ts](../../../../sources/Softeria__ms-365-mcp-server/src/graph-client.ts)<br>[src/graph-tools.ts](../../../../sources/Softeria__ms-365-mcp-server/src/graph-tools.ts)<br>[src/index.ts](../../../../sources/Softeria__ms-365-mcp-server/src/index.ts)<br>[src/lib/graph-resilience.ts](../../../../sources/Softeria__ms-365-mcp-server/src/lib/graph-resilience.ts)<br>[src/__tests__/graph-tools.test.ts](../../../../sources/Softeria__ms-365-mcp-server/src/__tests__/graph-tools.test.ts)<br>[bin/generate-graph-client.mjs](../../../../sources/Softeria__ms-365-mcp-server/bin/generate-graph-client.mjs) |
| spec | 0 | 명확하지 않음 |
| eval | 50 | [test-calendar-fix.js](../../../../sources/Softeria__ms-365-mcp-server/test-calendar-fix.js)<br>[test-real-calendar.js](../../../../sources/Softeria__ms-365-mcp-server/test-real-calendar.js)<br>[test/allowed-scopes.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/allowed-scopes.test.ts)<br>[test/audit-log.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/audit-log.test.ts)<br>[test/auth-paths.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/auth-paths.test.ts)<br>[test/auth-pinning.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/auth-pinning.test.ts)<br>[test/auth-silent-error.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/auth-silent-error.test.ts)<br>[test/auth-storage.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/auth-storage.test.ts) |
| security | 14 | [SECURITY.md](../../../../sources/Softeria__ms-365-mcp-server/SECURITY.md)<br>[test/audit-log.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/audit-log.test.ts)<br>[test/auth-paths.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/auth-paths.test.ts)<br>[test/auth-pinning.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/auth-pinning.test.ts)<br>[test/auth-silent-error.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/auth-silent-error.test.ts)<br>[test/auth-storage.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/auth-storage.test.ts)<br>[test/auth-tools.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/auth-tools.test.ts)<br>[test/discovery-auth.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/discovery-auth.test.ts) |
| ci | 2 | [.github/workflows/build.yml](../../../../sources/Softeria__ms-365-mcp-server/.github/workflows/build.yml)<br>[.github/workflows/release.yml](../../../../sources/Softeria__ms-365-mcp-server/.github/workflows/release.yml) |
| container | 1 | [Dockerfile](../../../../sources/Softeria__ms-365-mcp-server/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 4 | [README.md](../../../../sources/Softeria__ms-365-mcp-server/README.md)<br>[src/generated/README.md](../../../../sources/Softeria__ms-365-mcp-server/src/generated/README.md)<br>[examples/azure-container-apps/README.md](../../../../sources/Softeria__ms-365-mcp-server/examples/azure-container-apps/README.md)<br>[docs/deployment.md](../../../../sources/Softeria__ms-365-mcp-server/docs/deployment.md) |
| config | 2 | [package.json](../../../../sources/Softeria__ms-365-mcp-server/package.json)<br>[tsconfig.json](../../../../sources/Softeria__ms-365-mcp-server/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 50 | [test-calendar-fix.js](../../../../sources/Softeria__ms-365-mcp-server/test-calendar-fix.js)<br>[test-real-calendar.js](../../../../sources/Softeria__ms-365-mcp-server/test-real-calendar.js)<br>[test/allowed-scopes.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/allowed-scopes.test.ts)<br>[test/audit-log.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/audit-log.test.ts)<br>[test/auth-paths.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/auth-paths.test.ts)<br>[test/auth-pinning.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/auth-pinning.test.ts) |
| CI workflow | 2 | [.github/workflows/build.yml](../../../../sources/Softeria__ms-365-mcp-server/.github/workflows/build.yml)<br>[.github/workflows/release.yml](../../../../sources/Softeria__ms-365-mcp-server/.github/workflows/release.yml) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/Softeria__ms-365-mcp-server/Dockerfile) |
| 보안/정책 | 14 | [SECURITY.md](../../../../sources/Softeria__ms-365-mcp-server/SECURITY.md)<br>[test/audit-log.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/audit-log.test.ts)<br>[test/auth-paths.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/auth-paths.test.ts)<br>[test/auth-pinning.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/auth-pinning.test.ts)<br>[test/auth-silent-error.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/auth-silent-error.test.ts)<br>[test/auth-storage.test.ts](../../../../sources/Softeria__ms-365-mcp-server/test/auth-storage.test.ts) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `test/mcp-instructions.test.ts`, `src/mcp-instructions.ts`, `bin/modules/generate-mcp-tools.mjs`.
2. entrypoint를 따라 실행 흐름 확인: `src/cli.ts`, `src/index.ts`, `src/server.ts`.
3. agent/tool runtime 매핑: `test/tool-filtering.test.ts`, `test/tool-schema.test.ts`, `src/tool-categories.ts`.
4. retrieval/memory/indexing 확인: `test/graph-api.test.ts`, `test/graph-resilience.test.ts`, `src/graph-client.ts`.
5. test/eval 파일로 동작 검증: `test-calendar-fix.js`, `test-real-calendar.js`, `test/allowed-scopes.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A Model Context Protocol MCP server for interacting with Microsoft 365 and Office services through the Graph API. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, README.md, LICENSE, modelcontextprotocol이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
