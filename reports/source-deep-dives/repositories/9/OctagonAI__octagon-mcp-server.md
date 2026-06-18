# OctagonAI/octagon-mcp-server 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

An MCP server for public & prediction markets research. Ask natural-language questions and get structured, source-backed answers across SEC filings, earnings transcripts, company financials, stock & crypto market data, and prediction markets news & research. Built for investors, analysts, and researchers who need fast, cited intelligence.

## 요약

- 조사 단위: `sources/OctagonAI__octagon-mcp-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 55 files, 17 directories, depth score 86, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=.claude-plugin/mcp.json이고, 의존성 단서는 openai, modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | OctagonAI/octagon-mcp-server |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 132 |
| Forks | 23 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/OctagonAI__octagon-mcp-server](../../../../sources/OctagonAI__octagon-mcp-server) |
| 기존 보고서 | [reports/global-trending/repositories/OctagonAI__octagon-mcp-server.md](../../../global-trending/repositories/OctagonAI__octagon-mcp-server.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 55 / 17 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | .claude-plugin, agents, examples, hooks, scripts, skills, src, tests |
| 상위 확장자 | .ts: 22, .md: 9, .js: 7, .json: 7, .sh: 3, (none): 3, .example: 1, .mjs: 1, .py: 1, .yaml: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 22 |
| tests | validation surface | 8 |
| agents | top-level component | 1 |
| examples | top-level component | 1 |
| hooks | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | prebuild | node scripts/write-version.mjs |
| build | package.json | build | tsc && node -e "require('fs').chmodSync('dist/index.js', '755')" |
| test | package.json | test | npm run build && node --test tests/*.test.js |
| serve-dev | package.json | start | node dist/index.js |
| quality | package.json | lint | echo "No linting configured" |
| quality | package.json | format | echo "No formatting configured" |
| build | package.json | prepare | npm run build |
| build | package.json | release | npm run build && npm publish |
| entrypoint | package.json bin | index.js | dist/index.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
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
| mcp | [.claude-plugin/mcp.json](../../../../sources/OctagonAI__octagon-mcp-server/.claude-plugin/mcp.json) | mcp signal |
| agentRuntime | [src/tools/deepResearchAgent.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/tools/deepResearchAgent.ts) | agentRuntime signal |
| agentRuntime | [src/tools/index.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/tools/index.ts) | agentRuntime signal |
| agentRuntime | [src/tools/octagonAgent.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/tools/octagonAgent.ts) | agentRuntime signal |
| agentRuntime | [src/tools/predictionMarketsAgent.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/tools/predictionMarketsAgent.ts) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/OctagonAI__octagon-mcp-server/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/OctagonAI__octagon-mcp-server/tsconfig.json) | config signal |
| container | [Dockerfile](../../../../sources/OctagonAI__octagon-mcp-server/Dockerfile) | container support |
| eval | [tests/docs-catalog.test.js](../../../../sources/OctagonAI__octagon-mcp-server/tests/docs-catalog.test.js) | eval support |
| eval | [tests/docs-corpus.test.js](../../../../sources/OctagonAI__octagon-mcp-server/tests/docs-corpus.test.js) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/index.ts) |
| agentRuntime | 16 | [src/tools/deepResearchAgent.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/tools/deepResearchAgent.ts)<br>[src/tools/index.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/tools/index.ts)<br>[src/tools/octagonAgent.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/tools/octagonAgent.ts)<br>[src/tools/predictionMarketsAgent.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/tools/predictionMarketsAgent.ts)<br>[src/tools/predictionMarketsHistory.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/tools/predictionMarketsHistory.ts)<br>[src/tools/shared.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/tools/shared.ts)<br>[src/docs/tools.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/docs/tools.ts)<br>[skills/stock-quote/SKILL.md](../../../../sources/OctagonAI__octagon-mcp-server/skills/stock-quote/SKILL.md) |
| mcp | 1 | [.claude-plugin/mcp.json](../../../../sources/OctagonAI__octagon-mcp-server/.claude-plugin/mcp.json) |
| retrieval | 3 | [src/index.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/index.ts)<br>[src/tools/index.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/tools/index.ts)<br>[src/docs/index.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/docs/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 8 | [tests/docs-catalog.test.js](../../../../sources/OctagonAI__octagon-mcp-server/tests/docs-catalog.test.js)<br>[tests/docs-corpus.test.js](../../../../sources/OctagonAI__octagon-mcp-server/tests/docs-corpus.test.js)<br>[tests/docs-fetcher.test.js](../../../../sources/OctagonAI__octagon-mcp-server/tests/docs-fetcher.test.js)<br>[tests/docs-search.test.js](../../../../sources/OctagonAI__octagon-mcp-server/tests/docs-search.test.js)<br>[tests/docs-tools.test.js](../../../../sources/OctagonAI__octagon-mcp-server/tests/docs-tools.test.js)<br>[tests/octagon-agent-threading.test.js](../../../../sources/OctagonAI__octagon-mcp-server/tests/octagon-agent-threading.test.js)<br>[tests/plugin-manifest.test.js](../../../../sources/OctagonAI__octagon-mcp-server/tests/plugin-manifest.test.js)<br>[skills/octagon-api-smoke-test/SKILL.md](../../../../sources/OctagonAI__octagon-mcp-server/skills/octagon-api-smoke-test/SKILL.md) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 1 | [Dockerfile](../../../../sources/OctagonAI__octagon-mcp-server/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 11 | [README.md](../../../../sources/OctagonAI__octagon-mcp-server/README.md)<br>[src/docs/catalog.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/docs/catalog.ts)<br>[src/docs/config.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/docs/config.ts)<br>[src/docs/content.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/docs/content.ts)<br>[src/docs/fetcher.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/docs/fetcher.ts)<br>[src/docs/index.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/docs/index.ts)<br>[src/docs/resources.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/docs/resources.ts)<br>[src/docs/search.ts](../../../../sources/OctagonAI__octagon-mcp-server/src/docs/search.ts) |
| config | 2 | [package.json](../../../../sources/OctagonAI__octagon-mcp-server/package.json)<br>[tsconfig.json](../../../../sources/OctagonAI__octagon-mcp-server/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 8 | [tests/docs-catalog.test.js](../../../../sources/OctagonAI__octagon-mcp-server/tests/docs-catalog.test.js)<br>[tests/docs-corpus.test.js](../../../../sources/OctagonAI__octagon-mcp-server/tests/docs-corpus.test.js)<br>[tests/docs-fetcher.test.js](../../../../sources/OctagonAI__octagon-mcp-server/tests/docs-fetcher.test.js)<br>[tests/docs-search.test.js](../../../../sources/OctagonAI__octagon-mcp-server/tests/docs-search.test.js)<br>[tests/docs-tools.test.js](../../../../sources/OctagonAI__octagon-mcp-server/tests/docs-tools.test.js)<br>[tests/octagon-agent-threading.test.js](../../../../sources/OctagonAI__octagon-mcp-server/tests/octagon-agent-threading.test.js) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/OctagonAI__octagon-mcp-server/Dockerfile) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `.claude-plugin/mcp.json`, `src/tools/deepResearchAgent.ts`, `src/tools/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.ts`.
3. agent/tool runtime 매핑: `src/tools/deepResearchAgent.ts`, `src/tools/index.ts`, `src/tools/octagonAgent.ts`.
4. retrieval/memory/indexing 확인: `src/index.ts`, `src/tools/index.ts`, `src/docs/index.ts`.
5. test/eval 파일로 동작 검증: `tests/docs-catalog.test.js`, `tests/docs-corpus.test.js`, `tests/docs-fetcher.test.js`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 An MCP server for public & prediction markets research. Ask natural language questions and get structured, source backed. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, README.md, LICENSE, openai이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
