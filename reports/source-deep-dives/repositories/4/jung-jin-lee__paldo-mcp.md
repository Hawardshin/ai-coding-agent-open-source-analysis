# jung-jin-lee/paldo-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

MCP server exposing NVIDIA Nemotron-Personas-Korea (7M Korean synthetic personas) to Claude Code

## 요약

- 조사 단위: `sources/jung-jin-lee__paldo-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 38 files, 9 directories, depth score 66, key references 9개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/paldo-mcp/package.json, packages/paldo-mcp/paldo-mcp-0.3.0.tgz, packages/paldo-mcp/tsconfig.json이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | jung-jin-lee/paldo-mcp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/jung-jin-lee__paldo-mcp](../../../../sources/jung-jin-lee__paldo-mcp) |
| 기존 보고서 | [reports/korea-trending/repositories/jung-jin-lee__paldo-mcp.md](../../../korea-trending/repositories/jung-jin-lee__paldo-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 38 / 9 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .claude-plugin, examples, packages |
| 상위 확장자 | .ts: 21, .json: 7, .md: 6, (none): 2, .lock: 1, .tgz: 1 |
| 소스 패턴 | monorepo/workspace, api/server, agent/tool runtime, retrieval/vector path |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/paldo-mcp | packages workspace | 25 |
| packages/core | packages workspace | 4 |
| examples | top-level component | 1 |
| packages | source boundary | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | bun run --filter '*' build |
| quality | package.json | typecheck | bun run --filter '*' typecheck |
| test | package.json | test | bun test |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
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
| mcp | [packages/paldo-mcp/package.json](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/package.json) | mcp signal |
| mcp | [packages/paldo-mcp/paldo-mcp-0.3.0.tgz](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/paldo-mcp-0.3.0.tgz) | mcp signal |
| mcp | [packages/paldo-mcp/tsconfig.json](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/tsconfig.json) | mcp signal |
| mcp | [packages/paldo-mcp/src/claude-config.ts](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/src/claude-config.ts) | mcp signal |
| entrypoints | [packages/paldo-mcp/src/index.ts](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/src/index.ts) | entrypoints signal |
| entrypoints | [packages/paldo-mcp/src/server.ts](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/src/server.ts) | entrypoints signal |
| entrypoints | [packages/core/src/index.ts](../../../../sources/jung-jin-lee__paldo-mcp/packages/core/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/jung-jin-lee__paldo-mcp/package.json) | config signal |
| config | [packages/core/package.json](../../../../sources/jung-jin-lee__paldo-mcp/packages/core/package.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [packages/paldo-mcp/src/index.ts](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/src/index.ts)<br>[packages/paldo-mcp/src/server.ts](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/src/server.ts)<br>[packages/core/src/index.ts](../../../../sources/jung-jin-lee__paldo-mcp/packages/core/src/index.ts) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 19 | [packages/paldo-mcp/package.json](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/package.json)<br>[packages/paldo-mcp/paldo-mcp-0.3.0.tgz](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/paldo-mcp-0.3.0.tgz)<br>[packages/paldo-mcp/tsconfig.json](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/tsconfig.json)<br>[packages/paldo-mcp/src/claude-config.ts](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/src/claude-config.ts)<br>[packages/paldo-mcp/src/download.ts](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/src/download.ts)<br>[packages/paldo-mcp/src/format.ts](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/src/format.ts)<br>[packages/paldo-mcp/src/index.ts](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/src/index.ts)<br>[packages/paldo-mcp/src/paths.ts](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/src/paths.ts) |
| retrieval | 3 | [packages/paldo-mcp/src/index.ts](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/src/index.ts)<br>[packages/paldo-mcp/src/embeddings/embed.ts](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/src/embeddings/embed.ts)<br>[packages/core/src/index.ts](../../../../sources/jung-jin-lee__paldo-mcp/packages/core/src/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 0 | 명확하지 않음 |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 2 | [README.en.md](../../../../sources/jung-jin-lee__paldo-mcp/README.en.md)<br>[README.md](../../../../sources/jung-jin-lee__paldo-mcp/README.md) |
| config | 5 | [package.json](../../../../sources/jung-jin-lee__paldo-mcp/package.json)<br>[packages/paldo-mcp/package.json](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/package.json)<br>[packages/paldo-mcp/tsconfig.json](../../../../sources/jung-jin-lee__paldo-mcp/packages/paldo-mcp/tsconfig.json)<br>[packages/core/package.json](../../../../sources/jung-jin-lee__paldo-mcp/packages/core/package.json)<br>[packages/core/tsconfig.json](../../../../sources/jung-jin-lee__paldo-mcp/packages/core/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 0 | 명확하지 않음 |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음; test/eval 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/paldo-mcp/package.json`, `packages/paldo-mcp/paldo-mcp-0.3.0.tgz`, `packages/paldo-mcp/tsconfig.json`.
2. entrypoint를 따라 실행 흐름 확인: `packages/paldo-mcp/src/index.ts`, `packages/paldo-mcp/src/server.ts`, `packages/core/src/index.ts`.
3. retrieval/memory/indexing 확인: `packages/paldo-mcp/src/index.ts`, `packages/paldo-mcp/src/embeddings/embed.ts`, `packages/core/src/index.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 MCP server exposing NVIDIA Nemotron Personas Korea 7M Korean synthetic personas to Claude Code. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
