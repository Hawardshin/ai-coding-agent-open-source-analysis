# JeongSeongMok/tossinvest-openapi-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

토스증권 Open API(Toss Securities Open API)를 AI 에이전트가 쉽게 탐색·연동하도록 돕는 MCP 서버 (stdio). Claude·Cursor·Codex 지원.

## 요약

- 조사 단위: `sources/JeongSeongMok__tossinvest-openapi-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 22 files, 3 directories, depth score 77, key references 7개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/index.ts, src/server.ts이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | JeongSeongMok/tossinvest-openapi-mcp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/JeongSeongMok__tossinvest-openapi-mcp](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp) |
| 기존 보고서 | [reports/korea-trending/repositories/JeongSeongMok__tossinvest-openapi-mcp.md](../../../korea-trending/repositories/JeongSeongMok__tossinvest-openapi-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 22 / 3 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | docs, src |
| 상위 확장자 | .ts: 6, .json: 5, .md: 4, (none): 4, .html: 1, .txt: 1, .xml: 1 |
| 소스 패턴 | cli-first, api/server, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 6 |
| src | source boundary | 6 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | tsc |
| serve-dev | package.json | watch | tsc --watch |
| serve-dev | package.json | start | node dist/index.js |
| build | package.json | prepare | npm run build |
| build | package.json | prepublishOnly | npm run build |
| entrypoint | package.json bin | index.js | dist/index.js |


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
| entrypoints | [src/index.ts](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/src/index.ts) | entrypoints signal |
| entrypoints | [src/server.ts](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/src/server.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/CLAUDE.md) | instruction signal |
| config | [package.json](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/tsconfig.json) | config signal |
| container | [Dockerfile](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/Dockerfile) | container support |
| eval | [src/spec/store.ts](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/src/spec/store.ts) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [src/index.ts](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/src/index.ts)<br>[src/server.ts](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/src/server.ts) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 2 | [src/index.ts](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/src/index.ts)<br>[docs/index.html](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/docs/index.html) |
| spec | 1 | [src/spec/store.ts](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/src/spec/store.ts) |
| eval | 1 | [src/spec/store.ts](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/src/spec/store.ts) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 1 | [Dockerfile](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/CLAUDE.md) |
| docs | 7 | [README.en.md](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/README.en.md)<br>[README.ja.md](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/README.ja.md)<br>[README.md](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/README.md)<br>[docs/.nojekyll](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/docs/.nojekyll)<br>[docs/index.html](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/docs/index.html)<br>[docs/robots.txt](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/docs/robots.txt)<br>[docs/sitemap.xml](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/docs/sitemap.xml) |
| config | 2 | [package.json](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/package.json)<br>[tsconfig.json](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1 | [src/spec/store.ts](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/src/spec/store.ts) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/Dockerfile) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/JeongSeongMok__tossinvest-openapi-mcp/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/index.ts`, `src/server.ts`, `CLAUDE.md`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.ts`, `src/server.ts`.
3. retrieval/memory/indexing 확인: `src/index.ts`, `docs/index.html`.
4. test/eval 파일로 동작 검증: `src/spec/store.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 토스증권 Open API Toss Securities Open API 를 AI 에이전트가 쉽게 탐색·연동하도록 돕는 MCP 서버 stdio . Claude·Cursor·Codex 지원.. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, README.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
