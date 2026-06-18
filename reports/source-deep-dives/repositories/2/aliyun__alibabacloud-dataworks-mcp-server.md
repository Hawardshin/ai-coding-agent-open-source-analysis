# aliyun/alibabacloud-dataworks-mcp-server 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

A Model Context Protocol (MCP) server that provides tools for AI, allowing it to interact with the DataWorks Open API through a standardized interface. This implementation is based on the Aliyun Open API and enables AI agents to perform cloud resources operations seamlessly.

## 요약

- 조사 단위: `sources/aliyun__alibabacloud-dataworks-mcp-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 32 files, 12 directories, depth score 74, key references 8개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/mcp/index.ts이고, 의존성 단서는 openai, anthropic, modelcontextprotocol, express, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | aliyun/alibabacloud-dataworks-mcp-server |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 43 |
| Forks | 16 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/aliyun__alibabacloud-dataworks-mcp-server](../../../../sources/aliyun__alibabacloud-dataworks-mcp-server) |
| 기존 보고서 | [reports/global-trending/repositories/aliyun__alibabacloud-dataworks-mcp-server.md](../../../global-trending/repositories/aliyun__alibabacloud-dataworks-mcp-server.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 32 / 12 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .githooks, scripts, src |
| 상위 확장자 | .ts: 20, .json: 3, .png: 2, (none): 2, .md: 1, .mjs: 1, .sh: 1, .txt: 1, .yaml: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 11 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | tsc && node -e "require('fs').chmodSync('build/index.js', '755')" |
| test | package.json | test | npm run build && node --test scripts/verify-sdk8-id-migration.test.mjs |
| utility | package.json | githooks:install | sh scripts/install-githooks.sh |
| utility | package.json | prepare | sh scripts/install-githooks.sh |
| serve-dev | package.json | start | pnpm run build; REGION=cn-shanghai node build/index.js |
| test | package.json | dev | pnpm run build; npx @modelcontextprotocol/inspector -e NODE_ENV=development -e REGION=cn-shanghai -e ALIBABA_CLOUD_ACCESS_KEY_ID=your_aliyun_key_id -e ALIBABA_CLOUD_ACCESS_KEY_SECRET=your_aliyun_key_secret node build/ind |
| serve-dev | package.json | restart | pnpm run build; REGION=cn-shanghai node build/index.js |
| serve-dev | package.json | pre-start | pnpm run build; REGION=cn-shanghai NODE_ENV=development VERBOSE=true node build/index.js |
| entrypoint | package.json bin | index.js | ./build/index.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | express |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [src/mcp/index.ts](../../../../sources/aliyun__alibabacloud-dataworks-mcp-server/src/mcp/index.ts) | mcp signal |
| agentRuntime | [src/tools/callTool.ts](../../../../sources/aliyun__alibabacloud-dataworks-mcp-server/src/tools/callTool.ts) | agentRuntime signal |
| agentRuntime | [src/tools/utils/convertTimestamps.ts](../../../../sources/aliyun__alibabacloud-dataworks-mcp-server/src/tools/utils/convertTimestamps.ts) | agentRuntime signal |
| agentRuntime | [src/tools/utils/toTimestamps.ts](../../../../sources/aliyun__alibabacloud-dataworks-mcp-server/src/tools/utils/toTimestamps.ts) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/aliyun__alibabacloud-dataworks-mcp-server/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/aliyun__alibabacloud-dataworks-mcp-server/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/aliyun__alibabacloud-dataworks-mcp-server/tsconfig.json) | config signal |
| eval | [scripts/verify-sdk8-id-migration.test.mjs](../../../../sources/aliyun__alibabacloud-dataworks-mcp-server/scripts/verify-sdk8-id-migration.test.mjs) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/aliyun__alibabacloud-dataworks-mcp-server/src/index.ts) |
| agentRuntime | 3 | [src/tools/callTool.ts](../../../../sources/aliyun__alibabacloud-dataworks-mcp-server/src/tools/callTool.ts)<br>[src/tools/utils/convertTimestamps.ts](../../../../sources/aliyun__alibabacloud-dataworks-mcp-server/src/tools/utils/convertTimestamps.ts)<br>[src/tools/utils/toTimestamps.ts](../../../../sources/aliyun__alibabacloud-dataworks-mcp-server/src/tools/utils/toTimestamps.ts) |
| mcp | 1 | [src/mcp/index.ts](../../../../sources/aliyun__alibabacloud-dataworks-mcp-server/src/mcp/index.ts) |
| retrieval | 5 | [src/index.ts](../../../../sources/aliyun__alibabacloud-dataworks-mcp-server/src/index.ts)<br>[src/openApiClient/index.ts](../../../../sources/aliyun__alibabacloud-dataworks-mcp-server/src/openApiClient/index.ts)<br>[src/mcp/index.ts](../../../../sources/aliyun__alibabacloud-dataworks-mcp-server/src/mcp/index.ts)<br>[src/constants/index.ts](../../../../sources/aliyun__alibabacloud-dataworks-mcp-server/src/constants/index.ts)<br>[src/actions/index.ts](../../../../sources/aliyun__alibabacloud-dataworks-mcp-server/src/actions/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 1 | [scripts/verify-sdk8-id-migration.test.mjs](../../../../sources/aliyun__alibabacloud-dataworks-mcp-server/scripts/verify-sdk8-id-migration.test.mjs) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/aliyun__alibabacloud-dataworks-mcp-server/README.md) |
| config | 2 | [package.json](../../../../sources/aliyun__alibabacloud-dataworks-mcp-server/package.json)<br>[tsconfig.json](../../../../sources/aliyun__alibabacloud-dataworks-mcp-server/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1 | [scripts/verify-sdk8-id-migration.test.mjs](../../../../sources/aliyun__alibabacloud-dataworks-mcp-server/scripts/verify-sdk8-id-migration.test.mjs) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/mcp/index.ts`, `src/tools/callTool.ts`, `src/tools/utils/convertTimestamps.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.ts`.
3. agent/tool runtime 매핑: `src/tools/callTool.ts`, `src/tools/utils/convertTimestamps.ts`, `src/tools/utils/toTimestamps.ts`.
4. retrieval/memory/indexing 확인: `src/index.ts`, `src/openApiClient/index.ts`, `src/mcp/index.ts`.
5. test/eval 파일로 동작 검증: `scripts/verify-sdk8-id-migration.test.mjs`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A Model Context Protocol MCP server that provides tools for AI, allowing it to interact with the DataWorks Open API thro. 핵심 구조 신호는 TypeScript, package.json, README.md, openai, anthropic, modelcontextprotocol이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
