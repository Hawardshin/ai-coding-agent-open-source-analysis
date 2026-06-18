# PleasePrompto/notebooklm-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

MCP server for NotebookLM - Let your AI agents (Claude Code, Codex) research documentation directly with grounded, citation-backed answers from Gemini. Persistent auth, library management, cross-client sharing. Zero hallucinations, just your knowledge base.

## 요약

- 조사 단위: `sources/PleasePrompto__notebooklm-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 50 files, 12 directories, depth score 67, key references 7개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=src/tools/definitions.ts, src/tools/handlers.ts, src/tools/index.ts이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | PleasePrompto/notebooklm-mcp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | TypeScript |
| Stars | 2810 |
| Forks | 393 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/PleasePrompto__notebooklm-mcp](../../../../sources/PleasePrompto__notebooklm-mcp) |
| 기존 보고서 | [reports/llm-wiki/repositories/PleasePrompto__notebooklm-mcp.md](../../../llm-wiki/repositories/PleasePrompto__notebooklm-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 50 / 12 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | docs, src |
| 상위 확장자 | .ts: 36, .md: 6, .json: 4, (none): 3, .js: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 14 |
| docs | documentation surface | 6 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | tsc |
| build | package.json | postbuild | chmod +x dist/index.js |
| serve-dev | package.json | watch | tsc --watch |
| serve-dev | package.json | dev | tsx watch src/index.ts |
| build | package.json | prepare | npm run build |
| test | package.json | test | tsx src/index.ts |
| quality | package.json | lint | eslint src |
| quality | package.json | lint:fix | eslint src --fix |
| quality | package.json | format | prettier --write src |
| quality | package.json | format:check | prettier --check src |
| build | package.json | check | npm run format:check && npm run lint && npm run build |
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
| agentRuntime | [src/tools/definitions.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/tools/definitions.ts) | agentRuntime signal |
| agentRuntime | [src/tools/handlers.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/tools/handlers.ts) | agentRuntime signal |
| agentRuntime | [src/tools/index.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/tools/index.ts) | agentRuntime signal |
| agentRuntime | [src/tools/definitions/ask-question.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/tools/definitions/ask-question.ts) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/PleasePrompto__notebooklm-mcp/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/PleasePrompto__notebooklm-mcp/tsconfig.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/index.ts) |
| agentRuntime | 9 | [src/tools/definitions.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/tools/definitions.ts)<br>[src/tools/handlers.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/tools/handlers.ts)<br>[src/tools/index.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/tools/index.ts)<br>[src/tools/definitions/ask-question.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/tools/definitions/ask-question.ts)<br>[src/tools/definitions/notebook-management.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/tools/definitions/notebook-management.ts)<br>[src/tools/definitions/session-management.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/tools/definitions/session-management.ts)<br>[src/tools/definitions/sources.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/tools/definitions/sources.ts)<br>[src/tools/definitions/system.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/tools/definitions/system.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 2 | [src/index.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/index.ts)<br>[src/tools/index.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/tools/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 0 | 명확하지 않음 |
| security | 2 | [src/auth/account-switcher.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/auth/account-switcher.ts)<br>[src/auth/auth-manager.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/auth/auth-manager.ts) |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 5 | [README.md](../../../../sources/PleasePrompto__notebooklm-mcp/README.md)<br>[docs/configuration.md](../../../../sources/PleasePrompto__notebooklm-mcp/docs/configuration.md)<br>[docs/tools.md](../../../../sources/PleasePrompto__notebooklm-mcp/docs/tools.md)<br>[docs/troubleshooting.md](../../../../sources/PleasePrompto__notebooklm-mcp/docs/troubleshooting.md)<br>[docs/usage-guide.md](../../../../sources/PleasePrompto__notebooklm-mcp/docs/usage-guide.md) |
| config | 2 | [package.json](../../../../sources/PleasePrompto__notebooklm-mcp/package.json)<br>[tsconfig.json](../../../../sources/PleasePrompto__notebooklm-mcp/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 0 | 명확하지 않음 |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 2 | [src/auth/account-switcher.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/auth/account-switcher.ts)<br>[src/auth/auth-manager.ts](../../../../sources/PleasePrompto__notebooklm-mcp/src/auth/auth-manager.ts) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음; test/eval 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/tools/definitions.ts`, `src/tools/handlers.ts`, `src/tools/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.ts`.
3. agent/tool runtime 매핑: `src/tools/definitions.ts`, `src/tools/handlers.ts`, `src/tools/index.ts`.
4. retrieval/memory/indexing 확인: `src/index.ts`, `src/tools/index.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 MCP server for NotebookLM Let your AI agents Claude Code, Codex research documentation directly with grounded, citation . 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, modelcontextprotocol, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
