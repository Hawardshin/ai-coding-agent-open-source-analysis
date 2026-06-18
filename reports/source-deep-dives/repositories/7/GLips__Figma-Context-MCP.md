# GLips/Figma-Context-MCP 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

MCP server to provide Figma layout information to AI coding agents like Cursor

## 요약

- 조사 단위: `sources/GLips__Figma-Context-MCP` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 101 files, 21 directories, depth score 109, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/mcp-server.ts, src/mcp/index.ts, src/mcp/progress.ts이고, 의존성 단서는 modelcontextprotocol, express, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | GLips/Figma-Context-MCP |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 15139 |
| Forks | 1198 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/GLips__Figma-Context-MCP](../../../../sources/GLips__Figma-Context-MCP) |
| 기존 보고서 | [reports/global-trending/repositories/GLips__Figma-Context-MCP.md](../../../global-trending/repositories/GLips__Figma-Context-MCP.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 101 / 21 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .claude, .github, scripts, src |
| 상위 확장자 | .ts: 75, .md: 8, .json: 5, .yml: 5, (none): 4, .example: 1, .js: 1, .mjs: 1, .yaml: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 41 |
| .github | ci surface | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | tsup --dts |
| quality | package.json | type-check | tsc --noEmit |
| test | package.json | test | vitest run |
| serve-dev | package.json | start | node dist/bin.js |
| serve-dev | package.json | start:cli | cross-env NODE_ENV=cli node dist/bin.js |
| serve-dev | package.json | start:http | node dist/bin.js |
| serve-dev | package.json | dev | cross-env NODE_ENV=development tsup --watch |
| serve-dev | package.json | dev:cli | cross-env NODE_ENV=development tsup --watch -- --stdio |
| quality | package.json | lint | eslint . |
| quality | package.json | format | prettier --write "src/**/*.ts" |
| test | package.json | inspect | pnpx @modelcontextprotocol/inspector |
| utility | package.json | benchmark:simplify | tsx scripts/benchmark-simplify.ts |
| build | package.json | prepack | pnpm build |
| entrypoint | package.json bin | bin.js | dist/bin.js |


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
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [src/mcp-server.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp-server.ts) | mcp signal |
| mcp | [src/mcp/index.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/index.ts) | mcp signal |
| mcp | [src/mcp/progress.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/progress.ts) | mcp signal |
| mcp | [src/mcp/validation-capture.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/validation-capture.ts) | mcp signal |
| agentRuntime | [src/mcp/tools/download-figma-images-tool.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/tools/download-figma-images-tool.ts) | agentRuntime signal |
| agentRuntime | [src/mcp/tools/get-figma-data-tool.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/tools/get-figma-data-tool.ts) | agentRuntime signal |
| agentRuntime | [src/mcp/tools/index.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/tools/index.ts) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/GLips__Figma-Context-MCP/server.json) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/GLips__Figma-Context-MCP/src/index.ts) | entrypoints signal |
| entrypoints | [src/server.ts](../../../../sources/GLips__Figma-Context-MCP/src/server.ts) | entrypoints signal |
| entrypoints | [src/tests/server.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/server.test.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/GLips__Figma-Context-MCP/CLAUDE.md) | instruction signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [server.json](../../../../sources/GLips__Figma-Context-MCP/server.json)<br>[src/index.ts](../../../../sources/GLips__Figma-Context-MCP/src/index.ts)<br>[src/server.ts](../../../../sources/GLips__Figma-Context-MCP/src/server.ts)<br>[src/tests/server.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/server.test.ts) |
| agentRuntime | 3 | [src/mcp/tools/download-figma-images-tool.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/tools/download-figma-images-tool.ts)<br>[src/mcp/tools/get-figma-data-tool.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/tools/get-figma-data-tool.ts)<br>[src/mcp/tools/index.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/tools/index.ts) |
| mcp | 7 | [src/mcp-server.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp-server.ts)<br>[src/mcp/index.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/index.ts)<br>[src/mcp/progress.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/progress.ts)<br>[src/mcp/validation-capture.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/validation-capture.ts)<br>[src/mcp/tools/download-figma-images-tool.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/tools/download-figma-images-tool.ts)<br>[src/mcp/tools/get-figma-data-tool.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/tools/get-figma-data-tool.ts)<br>[src/mcp/tools/index.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/tools/index.ts) |
| retrieval | 6 | [src/index.ts](../../../../sources/GLips__Figma-Context-MCP/src/index.ts)<br>[src/telemetry/index.ts](../../../../sources/GLips__Figma-Context-MCP/src/telemetry/index.ts)<br>[src/services/errors/index.ts](../../../../sources/GLips__Figma-Context-MCP/src/services/errors/index.ts)<br>[src/mcp/index.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/index.ts)<br>[src/mcp/tools/index.ts](../../../../sources/GLips__Figma-Context-MCP/src/mcp/tools/index.ts)<br>[src/extractors/index.ts](../../../../sources/GLips__Figma-Context-MCP/src/extractors/index.ts) |
| spec | 3 | [ROADMAP.md](../../../../sources/GLips__Figma-Context-MCP/ROADMAP.md)<br>[src/utils/serializable-design.ts](../../../../sources/GLips__Figma-Context-MCP/src/utils/serializable-design.ts)<br>[src/extractors/design-extractor.ts](../../../../sources/GLips__Figma-Context-MCP/src/extractors/design-extractor.ts) |
| eval | 18 | [src/tests/benchmark.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/benchmark.test.ts)<br>[src/tests/config.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/config.test.ts)<br>[src/tests/effects.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/effects.test.ts)<br>[src/tests/error-meta.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/error-meta.test.ts)<br>[src/tests/finalize.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/finalize.test.ts)<br>[src/tests/http-header-auth.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/http-header-auth.test.ts)<br>[src/tests/image-processing.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/image-processing.test.ts)<br>[src/tests/integration.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/integration.test.ts) |
| security | 1 | [src/tests/http-header-auth.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/http-header-auth.test.ts) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/GLips__Figma-Context-MCP/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/GLips__Figma-Context-MCP/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [CLAUDE.md](../../../../sources/GLips__Figma-Context-MCP/CLAUDE.md) |
| docs | 2 | [README.md](../../../../sources/GLips__Figma-Context-MCP/README.md)<br>[src/extractors/README.md](../../../../sources/GLips__Figma-Context-MCP/src/extractors/README.md) |
| config | 2 | [package.json](../../../../sources/GLips__Figma-Context-MCP/package.json)<br>[tsconfig.json](../../../../sources/GLips__Figma-Context-MCP/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 18 | [src/tests/benchmark.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/benchmark.test.ts)<br>[src/tests/config.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/config.test.ts)<br>[src/tests/effects.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/effects.test.ts)<br>[src/tests/error-meta.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/error-meta.test.ts)<br>[src/tests/finalize.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/finalize.test.ts)<br>[src/tests/http-header-auth.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/http-header-auth.test.ts) |
| CI workflow | 2 | [.github/workflows/ci.yml](../../../../sources/GLips__Figma-Context-MCP/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/GLips__Figma-Context-MCP/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [src/tests/http-header-auth.test.ts](../../../../sources/GLips__Figma-Context-MCP/src/tests/http-header-auth.test.ts) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/GLips__Figma-Context-MCP/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/mcp-server.ts`, `src/mcp/index.ts`, `src/mcp/progress.ts`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`, `src/index.ts`, `src/server.ts`.
3. agent/tool runtime 매핑: `src/mcp/tools/download-figma-images-tool.ts`, `src/mcp/tools/get-figma-data-tool.ts`, `src/mcp/tools/index.ts`.
4. retrieval/memory/indexing 확인: `src/index.ts`, `src/telemetry/index.ts`, `src/services/errors/index.ts`.
5. test/eval 파일로 동작 검증: `src/tests/benchmark.test.ts`, `src/tests/config.test.ts`, `src/tests/effects.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 MCP server to provide Figma layout information to AI coding agents like Cursor. 핵심 구조 신호는 TypeScript, package.json, README.md, CLAUDE.md, LICENSE, modelcontextprotocol이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
