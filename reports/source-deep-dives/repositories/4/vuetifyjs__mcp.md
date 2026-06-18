# vuetifyjs/mcp 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

🤖 A Model Context Protocol (MCP) library for use with Agentic chat bots

## 요약

- 조사 단위: `sources/vuetifyjs__mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 37 files, 12 directories, depth score 83, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=src/tools/api.ts, src/tools/documentation.ts, src/tools/index.ts이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | vuetifyjs/mcp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 100 |
| Forks | 3 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/vuetifyjs__mcp](../../../../sources/vuetifyjs__mcp) |
| 기존 보고서 | [reports/global-trending/repositories/vuetifyjs__mcp.md](../../../global-trending/repositories/vuetifyjs__mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 37 / 12 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, bin, src |
| 상위 확장자 | .ts: 19, .md: 4, (none): 4, .json: 3, .js: 2, .yaml: 2, .yml: 2, .example: 1 |
| 소스 패턴 | monorepo/workspace, cli-first, agent/tool runtime, retrieval/vector path, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 13 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | rimraf dist && tsc |
| serve-dev | package.json | start | node dist/index.js |
| serve-dev | package.json | dev | pnpm watch && node --watch dist/index.js |
| serve-dev | package.json | watch | tsc --watch |
| quality | package.json | lint | eslint . --ext .js,.jsx,.ts,.tsx |
| quality | package.json | lint:fix | eslint . --ext .js,.jsx,.ts,.tsx --fix |
| build | package.json | release | pnpm build && bumpp -r |
| entrypoint | package.json bin | cli.js | bin/cli.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | modelcontextprotocol |
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
| agentRuntime | [src/tools/api.ts](../../../../sources/vuetifyjs__mcp/src/tools/api.ts) | agentRuntime signal |
| agentRuntime | [src/tools/documentation.ts](../../../../sources/vuetifyjs__mcp/src/tools/documentation.ts) | agentRuntime signal |
| agentRuntime | [src/tools/index.ts](../../../../sources/vuetifyjs__mcp/src/tools/index.ts) | agentRuntime signal |
| agentRuntime | [src/tools/issues.ts](../../../../sources/vuetifyjs__mcp/src/tools/issues.ts) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/vuetifyjs__mcp/src/index.ts) | entrypoints signal |
| entrypoints | [bin/cli.js](../../../../sources/vuetifyjs__mcp/bin/cli.js) | entrypoints signal |
| config | [package.json](../../../../sources/vuetifyjs__mcp/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/vuetifyjs__mcp/pnpm-workspace.yaml) | config signal |
| config | [tsconfig.json](../../../../sources/vuetifyjs__mcp/tsconfig.json) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/vuetifyjs__mcp/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/deploy.yml](../../../../sources/vuetifyjs__mcp/.github/workflows/deploy.yml) | ci support |
| container | [Dockerfile](../../../../sources/vuetifyjs__mcp/Dockerfile) | container support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [src/index.ts](../../../../sources/vuetifyjs__mcp/src/index.ts)<br>[bin/cli.js](../../../../sources/vuetifyjs__mcp/bin/cli.js) |
| agentRuntime | 7 | [src/tools/api.ts](../../../../sources/vuetifyjs__mcp/src/tools/api.ts)<br>[src/tools/documentation.ts](../../../../sources/vuetifyjs__mcp/src/tools/documentation.ts)<br>[src/tools/index.ts](../../../../sources/vuetifyjs__mcp/src/tools/index.ts)<br>[src/tools/issues.ts](../../../../sources/vuetifyjs__mcp/src/tools/issues.ts)<br>[src/tools/one/bin.ts](../../../../sources/vuetifyjs__mcp/src/tools/one/bin.ts)<br>[src/tools/one/link.ts](../../../../sources/vuetifyjs__mcp/src/tools/one/link.ts)<br>[src/tools/one/playground.ts](../../../../sources/vuetifyjs__mcp/src/tools/one/playground.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 4 | [src/index.ts](../../../../sources/vuetifyjs__mcp/src/index.ts)<br>[src/tools/index.ts](../../../../sources/vuetifyjs__mcp/src/tools/index.ts)<br>[src/resources/index.ts](../../../../sources/vuetifyjs__mcp/src/resources/index.ts)<br>[src/prompts/index.ts](../../../../sources/vuetifyjs__mcp/src/prompts/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 0 | 명확하지 않음 |
| security | 0 | 명확하지 않음 |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/vuetifyjs__mcp/.github/workflows/ci.yml)<br>[.github/workflows/deploy.yml](../../../../sources/vuetifyjs__mcp/.github/workflows/deploy.yml) |
| container | 1 | [Dockerfile](../../../../sources/vuetifyjs__mcp/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/vuetifyjs__mcp/README.md) |
| config | 3 | [package.json](../../../../sources/vuetifyjs__mcp/package.json)<br>[pnpm-workspace.yaml](../../../../sources/vuetifyjs__mcp/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/vuetifyjs__mcp/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 0 | 명확하지 않음 |
| CI workflow | 2 | [.github/workflows/ci.yml](../../../../sources/vuetifyjs__mcp/.github/workflows/ci.yml)<br>[.github/workflows/deploy.yml](../../../../sources/vuetifyjs__mcp/.github/workflows/deploy.yml) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/vuetifyjs__mcp/Dockerfile) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | test/eval 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/tools/api.ts`, `src/tools/documentation.ts`, `src/tools/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.ts`, `bin/cli.js`.
3. agent/tool runtime 매핑: `src/tools/api.ts`, `src/tools/documentation.ts`, `src/tools/index.ts`.
4. retrieval/memory/indexing 확인: `src/index.ts`, `src/tools/index.ts`, `src/resources/index.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 🤖 A Model Context Protocol MCP library for use with Agentic chat bots. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, README.md, modelcontextprotocol, vue이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
