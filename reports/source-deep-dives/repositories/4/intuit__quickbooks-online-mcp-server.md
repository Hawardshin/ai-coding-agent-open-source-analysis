# intuit/quickbooks-online-mcp-server 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

The QuickBooks MCP Server lets AI assistants access QuickBooks data via a standard interface. It uses the Model Context Protocol to expose QBO features as callable tools, enabling developers to build AI apps that fetch real-time QBO data through MCP.

## 요약

- 조사 단위: `sources/intuit__quickbooks-online-mcp-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 339 files, 19 directories, depth score 107, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=src/server/qbo-mcp-server.ts이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | intuit/quickbooks-online-mcp-server |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 285 |
| Forks | 148 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/intuit__quickbooks-online-mcp-server](../../../../sources/intuit__quickbooks-online-mcp-server) |
| 기존 보고서 | [reports/global-trending/repositories/intuit__quickbooks-online-mcp-server.md](../../../global-trending/repositories/intuit__quickbooks-online-mcp-server.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 339 / 19 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, docs, scripts, src, tests |
| 상위 확장자 | .ts: 318, .md: 8, .json: 4, (none): 3, .mjs: 2, .yml: 2, .example: 1, .js: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 46 |
| tests | validation surface | 28 |
| docs | documentation surface | 6 |
| .github | ci surface | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | tsc && shx chmod +x dist/*.js |
| build | package.json | prepare | npm run build |
| serve-dev | package.json | watch | tsc --watch |
| quality | package.json | lint:fix | eslint --fix |
| quality | package.json | lint | eslint . |
| serve-dev | package.json | auth | node dist/auth-server.js |
| test | package.json | test | NODE_OPTIONS='--experimental-vm-modules' jest |
| test | package.json | test:watch | NODE_OPTIONS='--experimental-vm-modules' jest --watch |
| test | package.json | test:coverage | NODE_OPTIONS='--experimental-vm-modules' jest --coverage |
| entrypoint | package.json bin | index.js | ./dist/index.js |


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
| mcp | [src/server/qbo-mcp-server.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/server/qbo-mcp-server.ts) | mcp signal |
| agentRuntime | [src/types/tool-definition.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/types/tool-definition.ts) | agentRuntime signal |
| agentRuntime | [src/types/tool-response.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/types/tool-response.ts) | agentRuntime signal |
| agentRuntime | [src/tools/create-account.tool.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/tools/create-account.tool.ts) | agentRuntime signal |
| agentRuntime | [src/tools/create-attachable.tool.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/tools/create-attachable.tool.ts) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/intuit__quickbooks-online-mcp-server/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/intuit__quickbooks-online-mcp-server/tsconfig.json) | config signal |
| ci | [.github/workflows/claude-code-review.yml](../../../../sources/intuit__quickbooks-online-mcp-server/.github/workflows/claude-code-review.yml) | ci support |
| ci | [.github/workflows/claude.yml](../../../../sources/intuit__quickbooks-online-mcp-server/.github/workflows/claude.yml) | ci support |
| eval | [tsconfig.test.json](../../../../sources/intuit__quickbooks-online-mcp-server/tsconfig.test.json) | eval support |
| eval | [tests/unit/helpers/build-quickbooks-search-criteria.test.ts](../../../../sources/intuit__quickbooks-online-mcp-server/tests/unit/helpers/build-quickbooks-search-criteria.test.ts) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/index.ts) |
| agentRuntime | 142 | [src/types/tool-definition.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/types/tool-definition.ts)<br>[src/types/tool-response.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/types/tool-response.ts)<br>[src/tools/create-account.tool.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/tools/create-account.tool.ts)<br>[src/tools/create-attachable.tool.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/tools/create-attachable.tool.ts)<br>[src/tools/create-bill-payment.tool.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/tools/create-bill-payment.tool.ts)<br>[src/tools/create-bill.tool.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/tools/create-bill.tool.ts)<br>[src/tools/create-class.tool.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/tools/create-class.tool.ts)<br>[src/tools/create-credit-memo.tool.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/tools/create-credit-memo.tool.ts) |
| mcp | 1 | [src/server/qbo-mcp-server.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/server/qbo-mcp-server.ts) |
| retrieval | 1 | [src/index.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/index.ts) |
| spec | 2 | [docs/ARCHITECTURE.md](../../../../sources/intuit__quickbooks-online-mcp-server/docs/ARCHITECTURE.md)<br>[docs/plans/2026-01-13-full-api-coverage-design.md](../../../../sources/intuit__quickbooks-online-mcp-server/docs/plans/2026-01-13-full-api-coverage-design.md) |
| eval | 27 | [tsconfig.test.json](../../../../sources/intuit__quickbooks-online-mcp-server/tsconfig.test.json)<br>[tests/unit/helpers/build-quickbooks-search-criteria.test.ts](../../../../sources/intuit__quickbooks-online-mcp-server/tests/unit/helpers/build-quickbooks-search-criteria.test.ts)<br>[tests/unit/helpers/format-error.test.ts](../../../../sources/intuit__quickbooks-online-mcp-server/tests/unit/helpers/format-error.test.ts)<br>[tests/unit/helpers/register-tool.test.ts](../../../../sources/intuit__quickbooks-online-mcp-server/tests/unit/helpers/register-tool.test.ts)<br>[tests/unit/handlers/bill.handlers.test.ts](../../../../sources/intuit__quickbooks-online-mcp-server/tests/unit/handlers/bill.handlers.test.ts)<br>[tests/unit/handlers/budget.handlers.test.ts](../../../../sources/intuit__quickbooks-online-mcp-server/tests/unit/handlers/budget.handlers.test.ts)<br>[tests/unit/handlers/budget.prototype-shape.test.ts](../../../../sources/intuit__quickbooks-online-mcp-server/tests/unit/handlers/budget.prototype-shape.test.ts)<br>[tests/unit/handlers/class.handlers.test.ts](../../../../sources/intuit__quickbooks-online-mcp-server/tests/unit/handlers/class.handlers.test.ts) |
| security | 3 | [tests/unit/clients/quickbooks-client.auth.test.ts](../../../../sources/intuit__quickbooks-online-mcp-server/tests/unit/clients/quickbooks-client.auth.test.ts)<br>[src/auth-server.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/auth-server.ts)<br>[src/types/intuit-oauth.d.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/types/intuit-oauth.d.ts) |
| ci | 2 | [.github/workflows/claude-code-review.yml](../../../../sources/intuit__quickbooks-online-mcp-server/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/intuit__quickbooks-online-mcp-server/.github/workflows/claude.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 4 | [README.md](../../../../sources/intuit__quickbooks-online-mcp-server/README.md)<br>[docs/ARCHITECTURE.md](../../../../sources/intuit__quickbooks-online-mcp-server/docs/ARCHITECTURE.md)<br>[docs/TESTING.md](../../../../sources/intuit__quickbooks-online-mcp-server/docs/TESTING.md)<br>[docs/plans/2026-01-13-full-api-coverage-design.md](../../../../sources/intuit__quickbooks-online-mcp-server/docs/plans/2026-01-13-full-api-coverage-design.md) |
| config | 2 | [package.json](../../../../sources/intuit__quickbooks-online-mcp-server/package.json)<br>[tsconfig.json](../../../../sources/intuit__quickbooks-online-mcp-server/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 27 | [tsconfig.test.json](../../../../sources/intuit__quickbooks-online-mcp-server/tsconfig.test.json)<br>[tests/unit/helpers/build-quickbooks-search-criteria.test.ts](../../../../sources/intuit__quickbooks-online-mcp-server/tests/unit/helpers/build-quickbooks-search-criteria.test.ts)<br>[tests/unit/helpers/format-error.test.ts](../../../../sources/intuit__quickbooks-online-mcp-server/tests/unit/helpers/format-error.test.ts)<br>[tests/unit/helpers/register-tool.test.ts](../../../../sources/intuit__quickbooks-online-mcp-server/tests/unit/helpers/register-tool.test.ts)<br>[tests/unit/handlers/bill.handlers.test.ts](../../../../sources/intuit__quickbooks-online-mcp-server/tests/unit/handlers/bill.handlers.test.ts)<br>[tests/unit/handlers/budget.handlers.test.ts](../../../../sources/intuit__quickbooks-online-mcp-server/tests/unit/handlers/budget.handlers.test.ts) |
| CI workflow | 2 | [.github/workflows/claude-code-review.yml](../../../../sources/intuit__quickbooks-online-mcp-server/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/intuit__quickbooks-online-mcp-server/.github/workflows/claude.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 3 | [tests/unit/clients/quickbooks-client.auth.test.ts](../../../../sources/intuit__quickbooks-online-mcp-server/tests/unit/clients/quickbooks-client.auth.test.ts)<br>[src/auth-server.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/auth-server.ts)<br>[src/types/intuit-oauth.d.ts](../../../../sources/intuit__quickbooks-online-mcp-server/src/types/intuit-oauth.d.ts) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/server/qbo-mcp-server.ts`, `src/types/tool-definition.ts`, `src/types/tool-response.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.ts`.
3. agent/tool runtime 매핑: `src/types/tool-definition.ts`, `src/types/tool-response.ts`, `src/tools/create-account.tool.ts`.
4. retrieval/memory/indexing 확인: `src/index.ts`.
5. test/eval 파일로 동작 검증: `tsconfig.test.json`, `tests/unit/helpers/build-quickbooks-search-criteria.test.ts`, `tests/unit/helpers/format-error.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 The QuickBooks MCP Server lets AI assistants access QuickBooks data via a standard interface. It uses the Model Context . 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, modelcontextprotocol, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
