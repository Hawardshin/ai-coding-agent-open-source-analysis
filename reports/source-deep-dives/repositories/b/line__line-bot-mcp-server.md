# line/line-bot-mcp-server 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

MCP server that integrates the LINE Messaging API to connect an AI Agent to the LINE Official Account.

## 요약

- 조사 단위: `sources/line__line-bot-mcp-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 78 files, 17 directories, depth score 95, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=test/tools/broadcastFlexMessage.test.ts, test/tools/broadcastTextMessage.test.ts, test/tools/cancelRichMenuDefault.test.ts이고, 의존성 단서는 modelcontextprotocol, puppeteer, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | line/line-bot-mcp-server |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 599 |
| Forks | 108 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/line__line-bot-mcp-server](../../../../sources/line__line-bot-mcp-server) |
| 기존 보고서 | [reports/global-trending/repositories/line__line-bot-mcp-server.md](../../../global-trending/repositories/line__line-bot-mcp-server.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 78 / 17 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, assets, richmenu-template, scripts, src, test |
| 상위 확장자 | .ts: 36, .md: 14, .yml: 8, .json: 6, (none): 5, .mjs: 3, .png: 3, .cjs: 1, .json5: 1, .sh: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 16 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| richmenu-template | top-level component | 1 |
| scripts | top-level component | 1 |
| test | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| test | package.json | build | npm run format:check && npm run typecheck:test && npm run clean && tsc && node scripts/chmod-bin.mjs |
| test | package.json | prettier | prettier "src/**/*.ts" "test/**/*.ts" |
| quality | package.json | format | npm run prettier -- --write |
| quality | package.json | format:check | npm run prettier -- -l |
| utility | package.json | clean | node scripts/clean.mjs |
| test | package.json | typecheck:test | tsc --project tsconfig.test.json |
| build | package.json | release | npm run build && npm publish --provenance --access public |
| quality | package.json | check:publint | publint |
| test | package.json | test | npm run build && vitest run |
| test | package.json | test:watch | vitest |
| entrypoint | package.json bin | index.js | ./dist/index.js |


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
| browserAutomation | puppeteer |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| agentRuntime | [test/tools/broadcastFlexMessage.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/broadcastFlexMessage.test.ts) | agentRuntime signal |
| agentRuntime | [test/tools/broadcastTextMessage.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/broadcastTextMessage.test.ts) | agentRuntime signal |
| agentRuntime | [test/tools/cancelRichMenuDefault.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/cancelRichMenuDefault.test.ts) | agentRuntime signal |
| agentRuntime | [test/tools/createRichMenu.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/createRichMenu.test.ts) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/line__line-bot-mcp-server/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/line__line-bot-mcp-server/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/line__line-bot-mcp-server/tsconfig.json) | config signal |
| ci | [.github/workflows/check-eol-newrelease.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/check-eol-newrelease.yml) | ci support |
| ci | [.github/workflows/close-issue.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/close-issue.yml) | ci support |
| container | [Dockerfile](../../../../sources/line__line-bot-mcp-server/Dockerfile) | container support |
| eval | [tsconfig.test.json](../../../../sources/line__line-bot-mcp-server/tsconfig.test.json) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/line__line-bot-mcp-server/src/index.ts) |
| agentRuntime | 25 | [test/tools/broadcastFlexMessage.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/broadcastFlexMessage.test.ts)<br>[test/tools/broadcastTextMessage.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/broadcastTextMessage.test.ts)<br>[test/tools/cancelRichMenuDefault.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/cancelRichMenuDefault.test.ts)<br>[test/tools/createRichMenu.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/createRichMenu.test.ts)<br>[test/tools/deleteRichMenu.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/deleteRichMenu.test.ts)<br>[test/tools/getFollowerIds.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/getFollowerIds.test.ts)<br>[test/tools/getMessageQuota.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/getMessageQuota.test.ts)<br>[test/tools/getProfile.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/getProfile.test.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [src/index.ts](../../../../sources/line__line-bot-mcp-server/src/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 17 | [tsconfig.test.json](../../../../sources/line__line-bot-mcp-server/tsconfig.test.json)<br>[test/tools/broadcastFlexMessage.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/broadcastFlexMessage.test.ts)<br>[test/tools/broadcastTextMessage.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/broadcastTextMessage.test.ts)<br>[test/tools/cancelRichMenuDefault.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/cancelRichMenuDefault.test.ts)<br>[test/tools/createRichMenu.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/createRichMenu.test.ts)<br>[test/tools/deleteRichMenu.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/deleteRichMenu.test.ts)<br>[test/tools/getFollowerIds.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/getFollowerIds.test.ts)<br>[test/tools/getMessageQuota.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/getMessageQuota.test.ts) |
| security | 2 | [.github/workflows/npm-audit.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/npm-audit.yml)<br>[.github/scripts/npm-audit.sh](../../../../sources/line__line-bot-mcp-server/.github/scripts/npm-audit.sh) |
| ci | 7 | [.github/workflows/check-eol-newrelease.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/check-eol-newrelease.yml)<br>[.github/workflows/close-issue.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/close-issue.yml)<br>[.github/workflows/create-draft-release.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/create-draft-release.yml)<br>[.github/workflows/label-issue.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/label-issue.yml)<br>[.github/workflows/npm-audit.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/npm-audit.yml)<br>[.github/workflows/release.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/test.yml) |
| container | 1 | [Dockerfile](../../../../sources/line__line-bot-mcp-server/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 2 | [README.ja.md](../../../../sources/line__line-bot-mcp-server/README.ja.md)<br>[README.md](../../../../sources/line__line-bot-mcp-server/README.md) |
| config | 2 | [package.json](../../../../sources/line__line-bot-mcp-server/package.json)<br>[tsconfig.json](../../../../sources/line__line-bot-mcp-server/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 17 | [tsconfig.test.json](../../../../sources/line__line-bot-mcp-server/tsconfig.test.json)<br>[test/tools/broadcastFlexMessage.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/broadcastFlexMessage.test.ts)<br>[test/tools/broadcastTextMessage.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/broadcastTextMessage.test.ts)<br>[test/tools/cancelRichMenuDefault.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/cancelRichMenuDefault.test.ts)<br>[test/tools/createRichMenu.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/createRichMenu.test.ts)<br>[test/tools/deleteRichMenu.test.ts](../../../../sources/line__line-bot-mcp-server/test/tools/deleteRichMenu.test.ts) |
| CI workflow | 7 | [.github/workflows/check-eol-newrelease.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/check-eol-newrelease.yml)<br>[.github/workflows/close-issue.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/close-issue.yml)<br>[.github/workflows/create-draft-release.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/create-draft-release.yml)<br>[.github/workflows/label-issue.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/label-issue.yml)<br>[.github/workflows/npm-audit.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/npm-audit.yml)<br>[.github/workflows/release.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/release.yml) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/line__line-bot-mcp-server/Dockerfile) |
| 보안/정책 | 2 | [.github/workflows/npm-audit.yml](../../../../sources/line__line-bot-mcp-server/.github/workflows/npm-audit.yml)<br>[.github/scripts/npm-audit.sh](../../../../sources/line__line-bot-mcp-server/.github/scripts/npm-audit.sh) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `test/tools/broadcastFlexMessage.test.ts`, `test/tools/broadcastTextMessage.test.ts`, `test/tools/cancelRichMenuDefault.test.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.ts`.
3. agent/tool runtime 매핑: `test/tools/broadcastFlexMessage.test.ts`, `test/tools/broadcastTextMessage.test.ts`, `test/tools/cancelRichMenuDefault.test.ts`.
4. retrieval/memory/indexing 확인: `src/index.ts`.
5. test/eval 파일로 동작 검증: `tsconfig.test.json`, `test/tools/broadcastFlexMessage.test.ts`, `test/tools/broadcastTextMessage.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 MCP server that integrates the LINE Messaging API to connect an AI Agent to the LINE Official Account.. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, README.md, LICENSE, modelcontextprotocol이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
