# getmaxun/maxun 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

🔥 The open-source no-code platform for web scraping, crawling, search and AI data extraction • Turn websites into structured APIs in minutes 🔥

## 요약

- 조사 단위: `sources/getmaxun__maxun` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 256 files, 68 directories, depth score 98, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=server/tsconfig.mcp.json, server/src/mcp-worker.ts, public/svg/mcp.svg이고, 의존성 단서는 anthropic, modelcontextprotocol, express, next, react, playwright, 검증/운영 단서는 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | getmaxun/maxun |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 15927 |
| Forks | 1329 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/getmaxun__maxun](../../../../sources/getmaxun__maxun) |
| 기존 보고서 | [reports/global-trending/repositories/getmaxun__maxun.md](../../../global-trending/repositories/getmaxun__maxun.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 256 / 68 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, browser, docs, legacy, maxun-core, public, server, src |
| 상위 확장자 | .ts: 97, .tsx: 92, .json: 17, .svg: 12, .js: 10, (none): 9, .md: 7, .sh: 3, .conf: 2, .yml: 2, .backend: 1, .css: 1 |
| 소스 패턴 | api/server, agent/tool runtime, retrieval/vector path, security/policy surface, containerized deploy, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| server | source boundary | 25 |
| src | source boundary | 17 |
| docs | documentation surface | 3 |
| .github | ci surface | 1 |
| browser | top-level component | 1 |
| legacy | top-level component | 1 |
| maxun-core | top-level component | 1 |
| public | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | start | npm run build:server && concurrently -k "npm run server" "npm run client" |
| serve-dev | package.json | server | cross-env NODE_OPTIONS='--max-old-space-size=4096' node server/dist/server/src/server.js |
| serve-dev | package.json | start:dev | concurrently -k "npm run server:dev" "npm run client" |
| serve-dev | package.json | server:dev | cross-env NODE_OPTIONS='--max-old-space-size=4096' nodemon server/src/server.ts |
| serve-dev | package.json | client | vite |
| serve-dev | package.json | build | vite build |
| serve-dev | package.json | build:server | tsc -p server/tsconfig.json |
| serve-dev | package.json | preview | vite preview |
| quality | package.json | lint | ./node_modules/.bin/eslint . |
| utility | package.json | migrate | sequelize-cli db:migrate |
| utility | package.json | migrate:undo | sequelize-cli db:migrate:undo |
| utility | package.json | migrate:undo:all | sequelize-cli db:migrate:undo:all |
| utility | package.json | seed | sequelize-cli db:seed:all |
| utility | package.json | seed:undo:all | sequelize-cli db:seed:undo:all |
| utility | package.json | migration:generate | sequelize-cli migration:generate --name |
| serve-dev | package.json | mcp:build | tsc --project server/tsconfig.mcp.json |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | anthropic |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | express, next, react |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [server/tsconfig.mcp.json](../../../../sources/getmaxun__maxun/server/tsconfig.mcp.json) | mcp signal |
| mcp | [server/src/mcp-worker.ts](../../../../sources/getmaxun__maxun/server/src/mcp-worker.ts) | mcp signal |
| mcp | [public/svg/mcp.svg](../../../../sources/getmaxun__maxun/public/svg/mcp.svg) | mcp signal |
| agentRuntime | [src/context/auth.tsx](../../../../sources/getmaxun__maxun/src/context/auth.tsx) | agentRuntime signal |
| agentRuntime | [src/context/browserActions.tsx](../../../../sources/getmaxun__maxun/src/context/browserActions.tsx) | agentRuntime signal |
| agentRuntime | [src/context/browserDimensions.tsx](../../../../sources/getmaxun__maxun/src/context/browserDimensions.tsx) | agentRuntime signal |
| agentRuntime | [src/context/browserSteps.tsx](../../../../sources/getmaxun__maxun/src/context/browserSteps.tsx) | agentRuntime signal |
| entrypoints | [src/App.tsx](../../../../sources/getmaxun__maxun/src/App.tsx) | entrypoints signal |
| entrypoints | [src/index.css](../../../../sources/getmaxun__maxun/src/index.css) | entrypoints signal |
| entrypoints | [src/index.tsx](../../../../sources/getmaxun__maxun/src/index.tsx) | entrypoints signal |
| entrypoints | [server/src/index.ts](../../../../sources/getmaxun__maxun/server/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/getmaxun__maxun/package.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 7 | [src/App.tsx](../../../../sources/getmaxun__maxun/src/App.tsx)<br>[src/index.css](../../../../sources/getmaxun__maxun/src/index.css)<br>[src/index.tsx](../../../../sources/getmaxun__maxun/src/index.tsx)<br>[server/src/index.ts](../../../../sources/getmaxun__maxun/server/src/index.ts)<br>[server/src/server.ts](../../../../sources/getmaxun__maxun/server/src/server.ts)<br>[maxun-core/src/index.ts](../../../../sources/getmaxun__maxun/maxun-core/src/index.ts)<br>[browser/server.ts](../../../../sources/getmaxun__maxun/browser/server.ts) |
| agentRuntime | 19 | [src/context/auth.tsx](../../../../sources/getmaxun__maxun/src/context/auth.tsx)<br>[src/context/browserActions.tsx](../../../../sources/getmaxun__maxun/src/context/browserActions.tsx)<br>[src/context/browserDimensions.tsx](../../../../sources/getmaxun__maxun/src/context/browserDimensions.tsx)<br>[src/context/browserSteps.tsx](../../../../sources/getmaxun__maxun/src/context/browserSteps.tsx)<br>[src/context/globalInfo.tsx](../../../../sources/getmaxun__maxun/src/context/globalInfo.tsx)<br>[src/context/socket.tsx](../../../../sources/getmaxun__maxun/src/context/socket.tsx)<br>[src/context/theme-provider.tsx](../../../../sources/getmaxun__maxun/src/context/theme-provider.tsx)<br>[src/api/workflow.ts](../../../../sources/getmaxun__maxun/src/api/workflow.ts) |
| mcp | 3 | [server/tsconfig.mcp.json](../../../../sources/getmaxun__maxun/server/tsconfig.mcp.json)<br>[server/src/mcp-worker.ts](../../../../sources/getmaxun__maxun/server/src/mcp-worker.ts)<br>[public/svg/mcp.svg](../../../../sources/getmaxun__maxun/public/svg/mcp.svg) |
| retrieval | 11 | [index.html](../../../../sources/getmaxun__maxun/index.html)<br>[src/index.css](../../../../sources/getmaxun__maxun/src/index.css)<br>[src/index.tsx](../../../../sources/getmaxun__maxun/src/index.tsx)<br>[src/components/action/action-settings/index.ts](../../../../sources/getmaxun__maxun/src/components/action/action-settings/index.ts)<br>[server/src/index.ts](../../../../sources/getmaxun__maxun/server/src/index.ts)<br>[server/src/workflow-management/scheduler/index.ts](../../../../sources/getmaxun__maxun/server/src/workflow-management/scheduler/index.ts)<br>[server/src/types/index.ts](../../../../sources/getmaxun__maxun/server/src/types/index.ts)<br>[server/src/routes/index.ts](../../../../sources/getmaxun__maxun/server/src/routes/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 0 | 명확하지 않음 |
| security | 5 | [src/context/auth.tsx](../../../../sources/getmaxun__maxun/src/context/auth.tsx)<br>[src/api/auth.ts](../../../../sources/getmaxun__maxun/src/api/auth.ts)<br>[server/src/utils/auth.ts](../../../../sources/getmaxun__maxun/server/src/utils/auth.ts)<br>[server/src/routes/auth.ts](../../../../sources/getmaxun__maxun/server/src/routes/auth.ts)<br>[server/src/middlewares/auth.ts](../../../../sources/getmaxun__maxun/server/src/middlewares/auth.ts) |
| ci | 0 | 명확하지 않음 |
| container | 4 | [docker-compose.yml](../../../../sources/getmaxun__maxun/docker-compose.yml)<br>[Dockerfile.backend](../../../../sources/getmaxun__maxun/Dockerfile.backend)<br>[Dockerfile.frontend](../../../../sources/getmaxun__maxun/Dockerfile.frontend)<br>[browser/Dockerfile](../../../../sources/getmaxun__maxun/browser/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 4 | [README.md](../../../../sources/getmaxun__maxun/README.md)<br>[maxun-core/README.md](../../../../sources/getmaxun__maxun/maxun-core/README.md)<br>[docs/nginx.conf](../../../../sources/getmaxun__maxun/docs/nginx.conf)<br>[docs/self-hosting-docker.md](../../../../sources/getmaxun__maxun/docs/self-hosting-docker.md) |
| config | 7 | [package.json](../../../../sources/getmaxun__maxun/package.json)<br>[tsconfig.json](../../../../sources/getmaxun__maxun/tsconfig.json)<br>[server/tsconfig.json](../../../../sources/getmaxun__maxun/server/tsconfig.json)<br>[maxun-core/package.json](../../../../sources/getmaxun__maxun/maxun-core/package.json)<br>[maxun-core/tsconfig.json](../../../../sources/getmaxun__maxun/maxun-core/tsconfig.json)<br>[browser/package.json](../../../../sources/getmaxun__maxun/browser/package.json)<br>[browser/tsconfig.json](../../../../sources/getmaxun__maxun/browser/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 0 | 명확하지 않음 |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 4 | [docker-compose.yml](../../../../sources/getmaxun__maxun/docker-compose.yml)<br>[Dockerfile.backend](../../../../sources/getmaxun__maxun/Dockerfile.backend)<br>[Dockerfile.frontend](../../../../sources/getmaxun__maxun/Dockerfile.frontend)<br>[browser/Dockerfile](../../../../sources/getmaxun__maxun/browser/Dockerfile) |
| 보안/정책 | 5 | [src/context/auth.tsx](../../../../sources/getmaxun__maxun/src/context/auth.tsx)<br>[src/api/auth.ts](../../../../sources/getmaxun__maxun/src/api/auth.ts)<br>[server/src/utils/auth.ts](../../../../sources/getmaxun__maxun/server/src/utils/auth.ts)<br>[server/src/routes/auth.ts](../../../../sources/getmaxun__maxun/server/src/routes/auth.ts)<br>[server/src/middlewares/auth.ts](../../../../sources/getmaxun__maxun/server/src/middlewares/auth.ts) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; test/eval 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `server/tsconfig.mcp.json`, `server/src/mcp-worker.ts`, `public/svg/mcp.svg`.
2. entrypoint를 따라 실행 흐름 확인: `src/App.tsx`, `src/index.css`, `src/index.tsx`.
3. agent/tool runtime 매핑: `src/context/auth.tsx`, `src/context/browserActions.tsx`, `src/context/browserDimensions.tsx`.
4. retrieval/memory/indexing 확인: `index.html`, `src/index.css`, `src/index.tsx`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 🔥 The open source no code platform for web scraping, crawling, search and AI data extraction • Turn websites into struc. 핵심 구조 신호는 TypeScript, package.json, docker-compose.yml, README.md, LICENSE, anthropic이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
