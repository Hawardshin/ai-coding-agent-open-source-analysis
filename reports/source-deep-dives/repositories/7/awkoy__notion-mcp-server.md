# awkoy/notion-mcp-server 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Notion MCP server for Claude, Cursor, ChatGPT & Claude Desktop. Connect AI agents to Notion via Model Context Protocol — pages, databases, blocks, comments, files.

## 요약

- 조사 단위: `sources/awkoy__notion-mcp-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 98 files, 16 directories, depth score 105, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp-registry-submission/README.md, mcp-registry-submission/server.yaml이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | awkoy/notion-mcp-server |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 156 |
| Forks | 28 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/awkoy__notion-mcp-server](../../../../sources/awkoy__notion-mcp-server) |
| 기존 보고서 | [reports/global-trending/repositories/awkoy__notion-mcp-server.md](../../../global-trending/repositories/awkoy__notion-mcp-server.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 98 / 16 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | .github, mcp-registry-submission, src, tests |
| 상위 확장자 | .ts: 77, .yml: 5, (none): 5, .json: 4, .md: 4, .yaml: 2, .png: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 25 |
| src | source boundary | 13 |
| .github | ci surface | 1 |
| mcp-registry-submission | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | shx rm -rf build && tsc && shx chmod +x build/*.js |
| build | package.json | prepare | npm run build |
| serve-dev | package.json | watch | tsc --watch |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| test | package.json | inspector | npx @modelcontextprotocol/inspector build/index.js -e NOTION_TOKEN=your_notion_token -e NOTION_PAGE_ID=your_notion_page_id |
| entrypoint | package.json bin | index.js | build/index.js |


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
| mcp | [mcp-registry-submission/README.md](../../../../sources/awkoy__notion-mcp-server/mcp-registry-submission/README.md) | mcp signal |
| mcp | [mcp-registry-submission/server.yaml](../../../../sources/awkoy__notion-mcp-server/mcp-registry-submission/server.yaml) | mcp signal |
| agentRuntime | [src/tools/index.ts](../../../../sources/awkoy__notion-mcp-server/src/tools/index.ts) | agentRuntime signal |
| agentRuntime | [src/tools/resources.ts](../../../../sources/awkoy__notion-mcp-server/src/tools/resources.ts) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/awkoy__notion-mcp-server/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/awkoy__notion-mcp-server/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/awkoy__notion-mcp-server/tsconfig.json) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/awkoy__notion-mcp-server/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/publish-docker.yml](../../../../sources/awkoy__notion-mcp-server/.github/workflows/publish-docker.yml) | ci support |
| container | [docker-compose.yml](../../../../sources/awkoy__notion-mcp-server/docker-compose.yml) | container support |
| container | [Dockerfile](../../../../sources/awkoy__notion-mcp-server/Dockerfile) | container support |
| eval | [tests/config.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/config.test.ts) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [src/index.ts](../../../../sources/awkoy__notion-mcp-server/src/index.ts)<br>[mcp-registry-submission/server.yaml](../../../../sources/awkoy__notion-mcp-server/mcp-registry-submission/server.yaml) |
| agentRuntime | 2 | [src/tools/index.ts](../../../../sources/awkoy__notion-mcp-server/src/tools/index.ts)<br>[src/tools/resources.ts](../../../../sources/awkoy__notion-mcp-server/src/tools/resources.ts) |
| mcp | 2 | [mcp-registry-submission/README.md](../../../../sources/awkoy__notion-mcp-server/mcp-registry-submission/README.md)<br>[mcp-registry-submission/server.yaml](../../../../sources/awkoy__notion-mcp-server/mcp-registry-submission/server.yaml) |
| retrieval | 7 | [src/index.ts](../../../../sources/awkoy__notion-mcp-server/src/index.ts)<br>[src/tools/index.ts](../../../../sources/awkoy__notion-mcp-server/src/tools/index.ts)<br>[src/server/index.ts](../../../../sources/awkoy__notion-mcp-server/src/server/index.ts)<br>[src/prompts/index.ts](../../../../sources/awkoy__notion-mcp-server/src/prompts/index.ts)<br>[src/operations/index.ts](../../../../sources/awkoy__notion-mcp-server/src/operations/index.ts)<br>[src/dispatch/index.ts](../../../../sources/awkoy__notion-mcp-server/src/dispatch/index.ts)<br>[src/config/index.ts](../../../../sources/awkoy__notion-mcp-server/src/config/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 23 | [tests/config.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/config.test.ts)<br>[tests/dispatch.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/dispatch.test.ts)<br>[tests/files.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/files.test.ts)<br>[tests/filter-dsl.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/filter-dsl.test.ts)<br>[tests/handlers.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/handlers.test.ts)<br>[tests/http-auth.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/http-auth.test.ts)<br>[tests/http-config.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/http-config.test.ts)<br>[tests/http-integration.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/http-integration.test.ts) |
| security | 3 | [tests/http-auth.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/http-auth.test.ts)<br>[src/services/auth.ts](../../../../sources/awkoy__notion-mcp-server/src/services/auth.ts)<br>[src/server/auth.ts](../../../../sources/awkoy__notion-mcp-server/src/server/auth.ts) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/awkoy__notion-mcp-server/.github/workflows/ci.yml)<br>[.github/workflows/publish-docker.yml](../../../../sources/awkoy__notion-mcp-server/.github/workflows/publish-docker.yml)<br>[.github/workflows/publish-npm.yml](../../../../sources/awkoy__notion-mcp-server/.github/workflows/publish-npm.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/awkoy__notion-mcp-server/docker-compose.yml)<br>[Dockerfile](../../../../sources/awkoy__notion-mcp-server/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 2 | [README.md](../../../../sources/awkoy__notion-mcp-server/README.md)<br>[mcp-registry-submission/README.md](../../../../sources/awkoy__notion-mcp-server/mcp-registry-submission/README.md) |
| config | 2 | [package.json](../../../../sources/awkoy__notion-mcp-server/package.json)<br>[tsconfig.json](../../../../sources/awkoy__notion-mcp-server/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 23 | [tests/config.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/config.test.ts)<br>[tests/dispatch.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/dispatch.test.ts)<br>[tests/files.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/files.test.ts)<br>[tests/filter-dsl.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/filter-dsl.test.ts)<br>[tests/handlers.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/handlers.test.ts)<br>[tests/http-auth.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/http-auth.test.ts) |
| CI workflow | 3 | [.github/workflows/ci.yml](../../../../sources/awkoy__notion-mcp-server/.github/workflows/ci.yml)<br>[.github/workflows/publish-docker.yml](../../../../sources/awkoy__notion-mcp-server/.github/workflows/publish-docker.yml)<br>[.github/workflows/publish-npm.yml](../../../../sources/awkoy__notion-mcp-server/.github/workflows/publish-npm.yml) |
| 컨테이너/배포 | 2 | [docker-compose.yml](../../../../sources/awkoy__notion-mcp-server/docker-compose.yml)<br>[Dockerfile](../../../../sources/awkoy__notion-mcp-server/Dockerfile) |
| 보안/정책 | 3 | [tests/http-auth.test.ts](../../../../sources/awkoy__notion-mcp-server/tests/http-auth.test.ts)<br>[src/services/auth.ts](../../../../sources/awkoy__notion-mcp-server/src/services/auth.ts)<br>[src/server/auth.ts](../../../../sources/awkoy__notion-mcp-server/src/server/auth.ts) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `mcp-registry-submission/README.md`, `mcp-registry-submission/server.yaml`, `src/tools/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.ts`, `mcp-registry-submission/server.yaml`.
3. agent/tool runtime 매핑: `src/tools/index.ts`, `src/tools/resources.ts`.
4. retrieval/memory/indexing 확인: `src/index.ts`, `src/tools/index.ts`, `src/server/index.ts`.
5. test/eval 파일로 동작 검증: `tests/config.test.ts`, `tests/dispatch.test.ts`, `tests/files.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Notion MCP server for Claude, Cursor, ChatGPT & Claude Desktop. Connect AI agents to Notion via Model Context Protocol —. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, docker-compose.yml, README.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
