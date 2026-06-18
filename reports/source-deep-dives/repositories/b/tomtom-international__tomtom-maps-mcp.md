# tomtom-international/tomtom-maps-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

A Model Context Protocol (MCP) server providing TomTom's location services, search, routing, and traffic data to AI agents.

## 요약

- 조사 단위: `sources/tomtom-international__tomtom-maps-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 282 files, 68 directories, depth score 121, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=bin/tomtom-mcp-http.js, bin/tomtom-mcp.js, .agents/skills/mcp-builder/LICENSE.txt이고, 의존성 단서는 anthropic, mcp, modelcontextprotocol, express, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | tomtom-international/tomtom-maps-mcp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 47 |
| Forks | 22 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/tomtom-international__tomtom-maps-mcp](../../../../sources/tomtom-international__tomtom-maps-mcp) |
| 기존 보고서 | [reports/global-trending/repositories/tomtom-international__tomtom-maps-mcp.md](../../../global-trending/repositories/tomtom-international__tomtom-maps-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 282 / 68 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .agents, .claude, .github, bin, docs, e2e, images, scripts, src, tests, ui |
| 상위 확장자 | .ts: 163, .md: 21, .css: 18, .html: 18, .png: 11, (none): 10, .js: 9, .json: 9, .yml: 9, .py: 3, .cjs: 2, .txt: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 70 |
| docs | documentation surface | 7 |
| tests | validation surface | 3 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| e2e | validation surface | 1 |
| images | top-level component | 1 |
| scripts | top-level component | 1 |
| ui | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build:ts | tsc --emitDeclarationOnly --declaration --declarationMap |
| build | package.json | build:rollup | rollup -c |
| build | package.json | build:apps | cross-env NODE_OPTIONS="--no-warnings --loader ts-node/esm" node scripts/build-apps.ts |
| build | package.json | build:apps:search | cross-env NODE_OPTIONS="--no-warnings --loader ts-node/esm" CATEGORY=search node scripts/build-apps.ts |
| build | package.json | build:apps:routing | cross-env NODE_OPTIONS="--no-warnings --loader ts-node/esm" CATEGORY=routing node scripts/build-apps.ts |
| build | package.json | build:apps:traffic | cross-env NODE_OPTIONS="--no-warnings --loader ts-node/esm" CATEGORY=traffic node scripts/build-apps.ts |
| build | package.json | build:apps:map | cross-env NODE_OPTIONS="--no-warnings --loader ts-node/esm" CATEGORY=map node scripts/build-apps.ts |
| build | package.json | build:apps:data-viz | cross-env NODE_OPTIONS="--no-warnings --loader ts-node/esm" CATEGORY=data-viz node scripts/build-apps.ts |
| build | package.json | build:mcpb | node scripts/build-mcpb.cjs |
| build | package.json | build | npm run build:ts && npm run build:rollup && npm run build:apps |
| build | package.json | build:bin | shx chmod +x bin/tomtom-mcp.js && shx chmod +x bin/tomtom-mcp-http.js |
| serve-dev | package.json | start | node dist/index.esm.js |
| serve-dev | package.json | start:http | node dist/indexHttp.esm.js |
| serve-dev | package.json | dev | cross-env NODE_OPTIONS="--no-warnings --loader ts-node/esm" node src/index.ts |
| serve-dev | package.json | dev:http | cross-env NODE_OPTIONS="--no-warnings --loader ts-node/esm" node src/indexHttp.ts |
| test | package.json | test | vitest run --coverage |
| test | package.json | test:watch | vitest --watch |
| test | package.json | test:ui | vitest --ui |
| test | package.json | test:tools:stdio | node tests/test-stdio-tools.js |
| test | package.json | test:tools:http | node tests/test-http-tools.js |
| test | package.json | test:all | npm run test && npm run test:tools:stdio && npm run test:tools:http |
| quality | package.json | type-check | tsc --noEmit |
| quality | package.json | lint | eslint src |
| quality | package.json | lint:fix | eslint src --fix |
| quality | package.json | lint:report | eslint src --format json --output-file eslint-report.json |
| quality | package.json | format | prettier --write "src/**/*.{ts,tsx,js,jsx,json}" |
| quality | package.json | format:check | prettier --check "src/**/*.{ts,tsx,js,jsx,json}" |
| utility | package.json | publish:npm | npm publish --access restricted |
| test | package.json | test:e2e | npx playwright test |
| test | package.json | test:e2e:debug | npx playwright test --debug |
| test | package.json | test:e2e:setup | npm run build && npm run ui:build && npx playwright install chromium |
| serve-dev | package.json | ui | concurrently --names mcp,ui --prefix-colors blue,green "node dist/indexHttp.esm.js" "cd ui && npm run start" |
| build | package.json | ui:build | cd ui && npm install && npm run build |
| test | package.json | clean | shx rm -rf dist coverage eslint-report.json |
| utility | package.json | generate:icons | node scripts/generate-poi-icon-data.cjs |
| build | package.json | prebuild | npm run clean && node scripts/generate-version.cjs |
| entrypoint | package.json bin | tomtom-mcp.js | ./bin/tomtom-mcp.js |
| entrypoint | package.json bin | tomtom-mcp-http.js | ./bin/tomtom-mcp-http.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | anthropic |
| agentProtocols | mcp, modelcontextprotocol |
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
| mcp | [bin/tomtom-mcp-http.js](../../../../sources/tomtom-international__tomtom-maps-mcp/bin/tomtom-mcp-http.js) | mcp signal |
| mcp | [bin/tomtom-mcp.js](../../../../sources/tomtom-international__tomtom-maps-mcp/bin/tomtom-mcp.js) | mcp signal |
| mcp | [.agents/skills/mcp-builder/LICENSE.txt](../../../../sources/tomtom-international__tomtom-maps-mcp/.agents/skills/mcp-builder/LICENSE.txt) | mcp signal |
| mcp | [.agents/skills/mcp-builder/SKILL.md](../../../../sources/tomtom-international__tomtom-maps-mcp/.agents/skills/mcp-builder/SKILL.md) | mcp signal |
| agentRuntime | [skills-lock.json](../../../../sources/tomtom-international__tomtom-maps-mcp/skills-lock.json) | agentRuntime signal |
| agentRuntime | [ui/sandbox.html](../../../../sources/tomtom-international__tomtom-maps-mcp/ui/sandbox.html) | agentRuntime signal |
| agentRuntime | [ui/src/sandbox.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/ui/src/sandbox.ts) | agentRuntime signal |
| agentRuntime | [src/tools/appTools.test.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/src/tools/appTools.test.ts) | agentRuntime signal |
| entrypoints | [ui/src/index.tsx](../../../../sources/tomtom-international__tomtom-maps-mcp/ui/src/index.tsx) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/src/index.ts) | entrypoints signal |
| instruction | [.github/copilot-instructions.md](../../../../sources/tomtom-international__tomtom-maps-mcp/.github/copilot-instructions.md) | instruction signal |
| config | [package.json](../../../../sources/tomtom-international__tomtom-maps-mcp/package.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [ui/src/index.tsx](../../../../sources/tomtom-international__tomtom-maps-mcp/ui/src/index.tsx)<br>[src/index.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/src/index.ts)<br>[bin/tomtom-mcp-http.js](../../../../sources/tomtom-international__tomtom-maps-mcp/bin/tomtom-mcp-http.js)<br>[bin/tomtom-mcp.js](../../../../sources/tomtom-international__tomtom-maps-mcp/bin/tomtom-mcp.js) |
| agentRuntime | 37 | [skills-lock.json](../../../../sources/tomtom-international__tomtom-maps-mcp/skills-lock.json)<br>[ui/sandbox.html](../../../../sources/tomtom-international__tomtom-maps-mcp/ui/sandbox.html)<br>[ui/src/sandbox.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/ui/src/sandbox.ts)<br>[src/tools/appTools.test.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/src/tools/appTools.test.ts)<br>[src/tools/appTools.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/src/tools/appTools.ts)<br>[src/tools/dataVizOrbisTools.test.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/src/tools/dataVizOrbisTools.test.ts)<br>[src/tools/dataVizOrbisTools.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/src/tools/dataVizOrbisTools.ts)<br>[src/tools/mapOrbisTools.test.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/src/tools/mapOrbisTools.test.ts) |
| mcp | 12 | [bin/tomtom-mcp-http.js](../../../../sources/tomtom-international__tomtom-maps-mcp/bin/tomtom-mcp-http.js)<br>[bin/tomtom-mcp.js](../../../../sources/tomtom-international__tomtom-maps-mcp/bin/tomtom-mcp.js)<br>[.agents/skills/mcp-builder/LICENSE.txt](../../../../sources/tomtom-international__tomtom-maps-mcp/.agents/skills/mcp-builder/LICENSE.txt)<br>[.agents/skills/mcp-builder/SKILL.md](../../../../sources/tomtom-international__tomtom-maps-mcp/.agents/skills/mcp-builder/SKILL.md)<br>[.agents/skills/mcp-builder/scripts/connections.py](../../../../sources/tomtom-international__tomtom-maps-mcp/.agents/skills/mcp-builder/scripts/connections.py)<br>[.agents/skills/mcp-builder/scripts/evaluation.py](../../../../sources/tomtom-international__tomtom-maps-mcp/.agents/skills/mcp-builder/scripts/evaluation.py)<br>[.agents/skills/mcp-builder/scripts/example_evaluation.xml](../../../../sources/tomtom-international__tomtom-maps-mcp/.agents/skills/mcp-builder/scripts/example_evaluation.xml)<br>[.agents/skills/mcp-builder/scripts/requirements.txt](../../../../sources/tomtom-international__tomtom-maps-mcp/.agents/skills/mcp-builder/scripts/requirements.txt) |
| retrieval | 5 | [ui/index.html](../../../../sources/tomtom-international__tomtom-maps-mcp/ui/index.html)<br>[ui/src/index.tsx](../../../../sources/tomtom-international__tomtom-maps-mcp/ui/src/index.tsx)<br>[src/index.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/src/index.ts)<br>[src/schemas/index.test.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/src/schemas/index.test.ts)<br>[src/schemas/index.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/src/schemas/index.ts) |
| spec | 3 | [e2e/tools.spec.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/e2e/tools.spec.ts)<br>[e2e/ui.spec.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/e2e/ui.spec.ts)<br>[.agents/skills/mcp-builder/scripts/requirements.txt](../../../../sources/tomtom-international__tomtom-maps-mcp/.agents/skills/mcp-builder/scripts/requirements.txt) |
| eval | 65 | [tests/test-http-tools.js](../../../../sources/tomtom-international__tomtom-maps-mcp/tests/test-http-tools.js)<br>[tests/test-stdio-tools.js](../../../../sources/tomtom-international__tomtom-maps-mcp/tests/test-stdio-tools.js)<br>[src/appConfig.test.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/src/appConfig.test.ts)<br>[src/createServer.test.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/src/createServer.test.ts)<br>[src/indexHttp.integration.test.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/src/indexHttp.integration.test.ts)<br>[src/indexHttp.test.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/src/indexHttp.test.ts)<br>[src/utils/apiErrorHandler.test.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/src/utils/apiErrorHandler.test.ts)<br>[src/utils/copyrightUtils.test.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/src/utils/copyrightUtils.test.ts) |
| security | 7 | [ui/sandbox.html](../../../../sources/tomtom-international__tomtom-maps-mcp/ui/sandbox.html)<br>[ui/src/sandbox.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/ui/src/sandbox.ts)<br>[src/auth/auth.integration.test.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/src/auth/auth.integration.test.ts)<br>[src/auth/authTestUtils.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/src/auth/authTestUtils.ts)<br>[src/auth/jwtVerifier.test.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/src/auth/jwtVerifier.test.ts)<br>[src/auth/jwtVerifier.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/src/auth/jwtVerifier.ts)<br>[src/auth/ulsApiKeyResolver.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/src/auth/ulsApiKeyResolver.ts) |
| ci | 6 | [.github/workflows/build-mcpb.yml](../../../../sources/tomtom-international__tomtom-maps-mcp/.github/workflows/build-mcpb.yml)<br>[.github/workflows/build.yml](../../../../sources/tomtom-international__tomtom-maps-mcp/.github/workflows/build.yml)<br>[.github/workflows/prepare-release.yml](../../../../sources/tomtom-international__tomtom-maps-mcp/.github/workflows/prepare-release.yml)<br>[.github/workflows/quality_checks.yml](../../../../sources/tomtom-international__tomtom-maps-mcp/.github/workflows/quality_checks.yml)<br>[.github/workflows/release.yml](../../../../sources/tomtom-international__tomtom-maps-mcp/.github/workflows/release.yml)<br>[.github/workflows/veracode.yml](../../../../sources/tomtom-international__tomtom-maps-mcp/.github/workflows/veracode.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/tomtom-international__tomtom-maps-mcp/docker-compose.yml)<br>[Dockerfile](../../../../sources/tomtom-international__tomtom-maps-mcp/Dockerfile) |
| instruction | 1 | [.github/copilot-instructions.md](../../../../sources/tomtom-international__tomtom-maps-mcp/.github/copilot-instructions.md) |
| docs | 7 | [README.md](../../../../sources/tomtom-international__tomtom-maps-mcp/README.md)<br>[docs/claude-desktop-setup.md](../../../../sources/tomtom-international__tomtom-maps-mcp/docs/claude-desktop-setup.md)<br>[docs/cursor-setup.md](../../../../sources/tomtom-international__tomtom-maps-mcp/docs/cursor-setup.md)<br>[docs/vscode-setup.md](../../../../sources/tomtom-international__tomtom-maps-mcp/docs/vscode-setup.md)<br>[docs/windsurf-setup.md](../../../../sources/tomtom-international__tomtom-maps-mcp/docs/windsurf-setup.md)<br>[docs/smolagents/smolagents_example.py](../../../../sources/tomtom-international__tomtom-maps-mcp/docs/smolagents/smolagents_example.py)<br>[docs/smolagents/smolagents-setup.md](../../../../sources/tomtom-international__tomtom-maps-mcp/docs/smolagents/smolagents-setup.md) |
| config | 5 | [package.json](../../../../sources/tomtom-international__tomtom-maps-mcp/package.json)<br>[tsconfig.json](../../../../sources/tomtom-international__tomtom-maps-mcp/tsconfig.json)<br>[ui/package.json](../../../../sources/tomtom-international__tomtom-maps-mcp/ui/package.json)<br>[ui/tsconfig.json](../../../../sources/tomtom-international__tomtom-maps-mcp/ui/tsconfig.json)<br>[.agents/skills/mcp-builder/scripts/requirements.txt](../../../../sources/tomtom-international__tomtom-maps-mcp/.agents/skills/mcp-builder/scripts/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 65 | [tests/test-http-tools.js](../../../../sources/tomtom-international__tomtom-maps-mcp/tests/test-http-tools.js)<br>[tests/test-stdio-tools.js](../../../../sources/tomtom-international__tomtom-maps-mcp/tests/test-stdio-tools.js)<br>[src/appConfig.test.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/src/appConfig.test.ts)<br>[src/createServer.test.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/src/createServer.test.ts)<br>[src/indexHttp.integration.test.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/src/indexHttp.integration.test.ts)<br>[src/indexHttp.test.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/src/indexHttp.test.ts) |
| CI workflow | 6 | [.github/workflows/build-mcpb.yml](../../../../sources/tomtom-international__tomtom-maps-mcp/.github/workflows/build-mcpb.yml)<br>[.github/workflows/build.yml](../../../../sources/tomtom-international__tomtom-maps-mcp/.github/workflows/build.yml)<br>[.github/workflows/prepare-release.yml](../../../../sources/tomtom-international__tomtom-maps-mcp/.github/workflows/prepare-release.yml)<br>[.github/workflows/quality_checks.yml](../../../../sources/tomtom-international__tomtom-maps-mcp/.github/workflows/quality_checks.yml)<br>[.github/workflows/release.yml](../../../../sources/tomtom-international__tomtom-maps-mcp/.github/workflows/release.yml)<br>[.github/workflows/veracode.yml](../../../../sources/tomtom-international__tomtom-maps-mcp/.github/workflows/veracode.yml) |
| 컨테이너/배포 | 2 | [docker-compose.yml](../../../../sources/tomtom-international__tomtom-maps-mcp/docker-compose.yml)<br>[Dockerfile](../../../../sources/tomtom-international__tomtom-maps-mcp/Dockerfile) |
| 보안/정책 | 7 | [ui/sandbox.html](../../../../sources/tomtom-international__tomtom-maps-mcp/ui/sandbox.html)<br>[ui/src/sandbox.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/ui/src/sandbox.ts)<br>[src/auth/auth.integration.test.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/src/auth/auth.integration.test.ts)<br>[src/auth/authTestUtils.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/src/auth/authTestUtils.ts)<br>[src/auth/jwtVerifier.test.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/src/auth/jwtVerifier.test.ts)<br>[src/auth/jwtVerifier.ts](../../../../sources/tomtom-international__tomtom-maps-mcp/src/auth/jwtVerifier.ts) |
| 에이전트 지시문 | 1 | [.github/copilot-instructions.md](../../../../sources/tomtom-international__tomtom-maps-mcp/.github/copilot-instructions.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `bin/tomtom-mcp-http.js`, `bin/tomtom-mcp.js`, `.agents/skills/mcp-builder/LICENSE.txt`.
2. entrypoint를 따라 실행 흐름 확인: `ui/src/index.tsx`, `src/index.ts`, `bin/tomtom-mcp-http.js`.
3. agent/tool runtime 매핑: `skills-lock.json`, `ui/sandbox.html`, `ui/src/sandbox.ts`.
4. retrieval/memory/indexing 확인: `ui/index.html`, `ui/src/index.tsx`, `src/index.ts`.
5. test/eval 파일로 동작 검증: `tests/test-http-tools.js`, `tests/test-stdio-tools.js`, `src/appConfig.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A Model Context Protocol MCP server providing TomTom's location services, search, routing, and traffic data to AI agents. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, docker-compose.yml, README.md, anthropic이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
