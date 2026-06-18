# Lumiaqian/openspec-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Local clone structure analysis: 74 files, 15 directories.

## 요약

- 조사 단위: `sources/Lumiaqian__openspec-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 74 files, 15 directories, depth score 93, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=web/src/hooks/useWebSocket.ts, src/server/tools/ai-context.ts, src/server/tools/approval.ts이고, 의존성 단서는 modelcontextprotocol, commander, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Lumiaqian/openspec-mcp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | TypeScript |
| Stars | 25 |
| Forks | 3 |
| License | MIT License |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/Lumiaqian__openspec-mcp](../../../../sources/Lumiaqian__openspec-mcp) |
| 기존 보고서 | [reports/clone-structures/Lumiaqian__openspec-mcp.md](../../../clone-structures/Lumiaqian__openspec-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 74 / 15 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, src, web |
| 상위 확장자 | .ts: 46, .tsx: 11, .json: 7, .js: 2, .md: 2, .yml: 2, (none): 2, .css: 1, .html: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 30 |
| web | source boundary | 9 |
| .github | ci surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | tsc |
| build | package.json | build:web | npm --prefix web run build |
| serve-dev | package.json | dev | tsx watch src/index.ts |
| serve-dev | package.json | start | node dist/index.js |
| serve-dev | package.json | start:dashboard | node dist/index.js --dashboard |
| test | package.json | test | vitest |
| build | package.json | prepublishOnly | npm run build && npm run build:web |
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
| developerSurface | commander |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| agentRuntime | [web/src/hooks/useWebSocket.ts](../../../../sources/Lumiaqian__openspec-mcp/web/src/hooks/useWebSocket.ts) | agentRuntime signal |
| agentRuntime | [src/server/tools/ai-context.ts](../../../../sources/Lumiaqian__openspec-mcp/src/server/tools/ai-context.ts) | agentRuntime signal |
| agentRuntime | [src/server/tools/approval.ts](../../../../sources/Lumiaqian__openspec-mcp/src/server/tools/approval.ts) | agentRuntime signal |
| agentRuntime | [src/server/tools/archive.ts](../../../../sources/Lumiaqian__openspec-mcp/src/server/tools/archive.ts) | agentRuntime signal |
| entrypoints | [web/src/App.tsx](../../../../sources/Lumiaqian__openspec-mcp/web/src/App.tsx) | entrypoints signal |
| entrypoints | [web/src/index.css](../../../../sources/Lumiaqian__openspec-mcp/web/src/index.css) | entrypoints signal |
| entrypoints | [web/src/main.tsx](../../../../sources/Lumiaqian__openspec-mcp/web/src/main.tsx) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/Lumiaqian__openspec-mcp/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/Lumiaqian__openspec-mcp/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/Lumiaqian__openspec-mcp/tsconfig.json) | config signal |
| config | [web/package.json](../../../../sources/Lumiaqian__openspec-mcp/web/package.json) | config signal |
| config | [web/tsconfig.json](../../../../sources/Lumiaqian__openspec-mcp/web/tsconfig.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 5 | [web/src/App.tsx](../../../../sources/Lumiaqian__openspec-mcp/web/src/App.tsx)<br>[web/src/index.css](../../../../sources/Lumiaqian__openspec-mcp/web/src/index.css)<br>[web/src/main.tsx](../../../../sources/Lumiaqian__openspec-mcp/web/src/main.tsx)<br>[src/index.ts](../../../../sources/Lumiaqian__openspec-mcp/src/index.ts)<br>[src/api/server.ts](../../../../sources/Lumiaqian__openspec-mcp/src/api/server.ts) |
| agentRuntime | 19 | [web/src/hooks/useWebSocket.ts](../../../../sources/Lumiaqian__openspec-mcp/web/src/hooks/useWebSocket.ts)<br>[src/server/tools/ai-context.ts](../../../../sources/Lumiaqian__openspec-mcp/src/server/tools/ai-context.ts)<br>[src/server/tools/approval.ts](../../../../sources/Lumiaqian__openspec-mcp/src/server/tools/approval.ts)<br>[src/server/tools/archive.ts](../../../../sources/Lumiaqian__openspec-mcp/src/server/tools/archive.ts)<br>[src/server/tools/context.ts](../../../../sources/Lumiaqian__openspec-mcp/src/server/tools/context.ts)<br>[src/server/tools/critique.ts](../../../../sources/Lumiaqian__openspec-mcp/src/server/tools/critique.ts)<br>[src/server/tools/cross-service.ts](../../../../sources/Lumiaqian__openspec-mcp/src/server/tools/cross-service.ts)<br>[src/server/tools/generator.ts](../../../../sources/Lumiaqian__openspec-mcp/src/server/tools/generator.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 3 | [web/index.html](../../../../sources/Lumiaqian__openspec-mcp/web/index.html)<br>[web/src/index.css](../../../../sources/Lumiaqian__openspec-mcp/web/src/index.css)<br>[src/index.ts](../../../../sources/Lumiaqian__openspec-mcp/src/index.ts) |
| spec | 3 | [src/core/spec-critic.test.ts](../../../../sources/Lumiaqian__openspec-mcp/src/core/spec-critic.test.ts)<br>[src/core/spec-critic.ts](../../../../sources/Lumiaqian__openspec-mcp/src/core/spec-critic.ts)<br>[src/core/spec-parser.ts](../../../../sources/Lumiaqian__openspec-mcp/src/core/spec-parser.ts) |
| eval | 5 | [src/core/approval-manager.test.ts](../../../../sources/Lumiaqian__openspec-mcp/src/core/approval-manager.test.ts)<br>[src/core/spec-critic.test.ts](../../../../sources/Lumiaqian__openspec-mcp/src/core/spec-critic.test.ts)<br>[src/core/spec-critic.ts](../../../../sources/Lumiaqian__openspec-mcp/src/core/spec-critic.ts)<br>[src/core/spec-parser.ts](../../../../sources/Lumiaqian__openspec-mcp/src/core/spec-parser.ts)<br>[src/core/task-parser.test.ts](../../../../sources/Lumiaqian__openspec-mcp/src/core/task-parser.test.ts) |
| security | 0 | 명확하지 않음 |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/Lumiaqian__openspec-mcp/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/Lumiaqian__openspec-mcp/.github/workflows/publish.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 2 | [README.md](../../../../sources/Lumiaqian__openspec-mcp/README.md)<br>[README.zh.md](../../../../sources/Lumiaqian__openspec-mcp/README.zh.md) |
| config | 4 | [package.json](../../../../sources/Lumiaqian__openspec-mcp/package.json)<br>[tsconfig.json](../../../../sources/Lumiaqian__openspec-mcp/tsconfig.json)<br>[web/package.json](../../../../sources/Lumiaqian__openspec-mcp/web/package.json)<br>[web/tsconfig.json](../../../../sources/Lumiaqian__openspec-mcp/web/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 5 | [src/core/approval-manager.test.ts](../../../../sources/Lumiaqian__openspec-mcp/src/core/approval-manager.test.ts)<br>[src/core/spec-critic.test.ts](../../../../sources/Lumiaqian__openspec-mcp/src/core/spec-critic.test.ts)<br>[src/core/spec-critic.ts](../../../../sources/Lumiaqian__openspec-mcp/src/core/spec-critic.ts)<br>[src/core/spec-parser.ts](../../../../sources/Lumiaqian__openspec-mcp/src/core/spec-parser.ts)<br>[src/core/task-parser.test.ts](../../../../sources/Lumiaqian__openspec-mcp/src/core/task-parser.test.ts) |
| CI workflow | 2 | [.github/workflows/ci.yml](../../../../sources/Lumiaqian__openspec-mcp/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/Lumiaqian__openspec-mcp/.github/workflows/publish.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `web/src/hooks/useWebSocket.ts`, `src/server/tools/ai-context.ts`, `src/server/tools/approval.ts`.
2. entrypoint를 따라 실행 흐름 확인: `web/src/App.tsx`, `web/src/index.css`, `web/src/main.tsx`.
3. agent/tool runtime 매핑: `web/src/hooks/useWebSocket.ts`, `src/server/tools/ai-context.ts`, `src/server/tools/approval.ts`.
4. retrieval/memory/indexing 확인: `web/index.html`, `web/src/index.css`, `src/index.ts`.
5. test/eval 파일로 동작 검증: `src/core/approval-manager.test.ts`, `src/core/spec-critic.test.ts`, `src/core/spec-critic.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 74 files, 15 directories.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, modelcontextprotocol, tests이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 큰 메타데이터 위험이 명확하지 않음입니다.
