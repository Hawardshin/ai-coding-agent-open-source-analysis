# dangamsoft/cafe-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Korean Saju (Four Pillars) MCP server for Claude, ChatGPT, and AI agents

## 요약

- 조사 단위: `sources/dangamsoft__cafe-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 18 files, 4 directories, depth score 57, key references 4개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=.github/workflows/publish-mcp.yml이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 4개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | dangamsoft/cafe-mcp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | JavaScript |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/dangamsoft__cafe-mcp](../../../../sources/dangamsoft__cafe-mcp) |
| 기존 보고서 | [reports/korea-trending/repositories/dangamsoft__cafe-mcp.md](../../../korea-trending/repositories/dangamsoft__cafe-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 18 / 4 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | .github, ontology |
| 상위 확장자 | .ttl: 8, .json: 3, .md: 3, (none): 2, .js: 1, .yml: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| ontology | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| entrypoint | package.json bin | index.js | index.js |


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
| mcp | [.github/workflows/publish-mcp.yml](../../../../sources/dangamsoft__cafe-mcp/.github/workflows/publish-mcp.yml) | mcp signal |
| entrypoints | [server.json](../../../../sources/dangamsoft__cafe-mcp/server.json) | entrypoints signal |
| config | [package.json](../../../../sources/dangamsoft__cafe-mcp/package.json) | config signal |
| manifest-entrypoint | [index.js](../../../../sources/dangamsoft__cafe-mcp/index.js) | package manifest entrypoint |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [server.json](../../../../sources/dangamsoft__cafe-mcp/server.json) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 1 | [.github/workflows/publish-mcp.yml](../../../../sources/dangamsoft__cafe-mcp/.github/workflows/publish-mcp.yml) |
| retrieval | 1 | [index.js](../../../../sources/dangamsoft__cafe-mcp/index.js) |
| spec | 0 | 명확하지 않음 |
| eval | 0 | 명확하지 않음 |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/publish-mcp.yml](../../../../sources/dangamsoft__cafe-mcp/.github/workflows/publish-mcp.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 2 | [README.md](../../../../sources/dangamsoft__cafe-mcp/README.md)<br>[ontology/README.md](../../../../sources/dangamsoft__cafe-mcp/ontology/README.md) |
| config | 1 | [package.json](../../../../sources/dangamsoft__cafe-mcp/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 0 | 명확하지 않음 |
| CI workflow | 1 | [.github/workflows/publish-mcp.yml](../../../../sources/dangamsoft__cafe-mcp/.github/workflows/publish-mcp.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음; test/eval 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `.github/workflows/publish-mcp.yml`, `server.json`, `package.json`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`.
3. retrieval/memory/indexing 확인: `index.js`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Korean Saju Four Pillars MCP server for Claude, ChatGPT, and AI agents. 핵심 구조 신호는 JavaScript, package.json, README.md, LICENSE, modelcontextprotocol, ci이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
