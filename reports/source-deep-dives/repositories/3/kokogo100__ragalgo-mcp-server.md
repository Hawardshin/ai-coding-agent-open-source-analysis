# kokogo100/ragalgo-mcp-server 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Dynamic RAG Engine for AI Reliability. We provide mathematically scored context & sanitized data to prevent hallucinations in both static & volatile domains (starting with Korean Finance).

## 요약

- 조사 단위: `sources/kokogo100__ragalgo-mcp-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 31 files, 6 directories, depth score 94, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=src/tools/chart.ts, src/tools/financials.ts, src/tools/news.ts이고, 의존성 단서는 modelcontextprotocol, express, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | kokogo100/ragalgo-mcp-server |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | JavaScript |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/kokogo100__ragalgo-mcp-server](../../../../sources/kokogo100__ragalgo-mcp-server) |
| 기존 보고서 | [reports/korea-trending/repositories/kokogo100__ragalgo-mcp-server.md](../../../korea-trending/repositories/kokogo100__ragalgo-mcp-server.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 31 / 6 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | .github, docs, src |
| 상위 확장자 | .ts: 12, .md: 5, .json: 4, (none): 4, .png: 2, .cjs: 1, .mjs: 1, .yaml: 1, .yml: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 11 |
| docs | documentation surface | 7 |
| .github | ci surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | npx tsc |
| serve-dev | package.json | start | node dist/index.js |
| serve-dev | package.json | dev | npx tsx src/index.ts |
| entrypoint | package.json bin | index.js | ./dist/index.js |


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
| agentRuntime | [src/tools/chart.ts](../../../../sources/kokogo100__ragalgo-mcp-server/src/tools/chart.ts) | agentRuntime signal |
| agentRuntime | [src/tools/financials.ts](../../../../sources/kokogo100__ragalgo-mcp-server/src/tools/financials.ts) | agentRuntime signal |
| agentRuntime | [src/tools/news.ts](../../../../sources/kokogo100__ragalgo-mcp-server/src/tools/news.ts) | agentRuntime signal |
| agentRuntime | [src/tools/research.ts](../../../../sources/kokogo100__ragalgo-mcp-server/src/tools/research.ts) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/kokogo100__ragalgo-mcp-server/server.json) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/kokogo100__ragalgo-mcp-server/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/kokogo100__ragalgo-mcp-server/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/kokogo100__ragalgo-mcp-server/tsconfig.json) | config signal |
| ci | [.github/workflows/npm-publish.yml](../../../../sources/kokogo100__ragalgo-mcp-server/.github/workflows/npm-publish.yml) | ci support |
| container | [Dockerfile](../../../../sources/kokogo100__ragalgo-mcp-server/Dockerfile) | container support |
| eval | [test_zod.mjs](../../../../sources/kokogo100__ragalgo-mcp-server/test_zod.mjs) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [server.json](../../../../sources/kokogo100__ragalgo-mcp-server/server.json)<br>[src/index.ts](../../../../sources/kokogo100__ragalgo-mcp-server/src/index.ts) |
| agentRuntime | 8 | [src/tools/chart.ts](../../../../sources/kokogo100__ragalgo-mcp-server/src/tools/chart.ts)<br>[src/tools/financials.ts](../../../../sources/kokogo100__ragalgo-mcp-server/src/tools/financials.ts)<br>[src/tools/news.ts](../../../../sources/kokogo100__ragalgo-mcp-server/src/tools/news.ts)<br>[src/tools/research.ts](../../../../sources/kokogo100__ragalgo-mcp-server/src/tools/research.ts)<br>[src/tools/rooms.ts](../../../../sources/kokogo100__ragalgo-mcp-server/src/tools/rooms.ts)<br>[src/tools/snapshots.ts](../../../../sources/kokogo100__ragalgo-mcp-server/src/tools/snapshots.ts)<br>[src/tools/tags.ts](../../../../sources/kokogo100__ragalgo-mcp-server/src/tools/tags.ts)<br>[src/tools/trends.ts](../../../../sources/kokogo100__ragalgo-mcp-server/src/tools/trends.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [src/index.ts](../../../../sources/kokogo100__ragalgo-mcp-server/src/index.ts) |
| spec | 3 | [architecture.png](../../../../sources/kokogo100__ragalgo-mcp-server/architecture.png)<br>[docs/CKN_Architecture_EN.md](../../../../sources/kokogo100__ragalgo-mcp-server/docs/CKN_Architecture_EN.md)<br>[docs/CKN_Architecture_KR.md](../../../../sources/kokogo100__ragalgo-mcp-server/docs/CKN_Architecture_KR.md) |
| eval | 1 | [test_zod.mjs](../../../../sources/kokogo100__ragalgo-mcp-server/test_zod.mjs) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/npm-publish.yml](../../../../sources/kokogo100__ragalgo-mcp-server/.github/workflows/npm-publish.yml) |
| container | 1 | [Dockerfile](../../../../sources/kokogo100__ragalgo-mcp-server/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 5 | [README.md](../../../../sources/kokogo100__ragalgo-mcp-server/README.md)<br>[docs/CKN_Architecture_EN.md](../../../../sources/kokogo100__ragalgo-mcp-server/docs/CKN_Architecture_EN.md)<br>[docs/CKN_Architecture_KR.md](../../../../sources/kokogo100__ragalgo-mcp-server/docs/CKN_Architecture_KR.md)<br>[docs/RagAlgo_Report_EN.md](../../../../sources/kokogo100__ragalgo-mcp-server/docs/RagAlgo_Report_EN.md)<br>[docs/RagAlgo_Report_KR.md](../../../../sources/kokogo100__ragalgo-mcp-server/docs/RagAlgo_Report_KR.md) |
| config | 2 | [package.json](../../../../sources/kokogo100__ragalgo-mcp-server/package.json)<br>[tsconfig.json](../../../../sources/kokogo100__ragalgo-mcp-server/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1 | [test_zod.mjs](../../../../sources/kokogo100__ragalgo-mcp-server/test_zod.mjs) |
| CI workflow | 1 | [.github/workflows/npm-publish.yml](../../../../sources/kokogo100__ragalgo-mcp-server/.github/workflows/npm-publish.yml) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/kokogo100__ragalgo-mcp-server/Dockerfile) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/tools/chart.ts`, `src/tools/financials.ts`, `src/tools/news.ts`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`, `src/index.ts`.
3. agent/tool runtime 매핑: `src/tools/chart.ts`, `src/tools/financials.ts`, `src/tools/news.ts`.
4. retrieval/memory/indexing 확인: `src/index.ts`.
5. test/eval 파일로 동작 검증: `test_zod.mjs`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Dynamic RAG Engine for AI Reliability. We provide mathematically scored context & sanitized data to prevent hallucinatio. 핵심 구조 신호는 JavaScript, package.json, Dockerfile, README.md, modelcontextprotocol, ci이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
