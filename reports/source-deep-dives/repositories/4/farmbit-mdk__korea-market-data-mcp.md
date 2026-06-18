# farmbit-mdk/korea-market-data-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Open-source MCP server for reliable Korean stock, ETF, index, and market data access from AI agents, starting with Kiwoom Securities REST API.

## 요약

- 조사 단위: `sources/farmbit-mdk__korea-market-data-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 180 files, 21 directories, depth score 101, key references 10개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/tool-registry.test.ts, docs/getting-started/mcp-client-setup.md이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | farmbit-mdk/korea-market-data-mcp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/farmbit-mdk__korea-market-data-mcp](../../../../sources/farmbit-mdk__korea-market-data-mcp) |
| 기존 보고서 | [reports/korea-trending/repositories/farmbit-mdk__korea-market-data-mcp.md](../../../korea-trending/repositories/farmbit-mdk__korea-market-data-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 180 / 21 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | docs, examples, scripts, src, tests |
| 상위 확장자 | .md: 86, .ts: 72, .json: 16, .example: 3, (none): 3 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 62 |
| tests | validation surface | 26 |
| src | source boundary | 23 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | tsc -p tsconfig.json |
| serve-dev | package.json | dev | tsx src/index.ts |
| test | package.json | kiwoom:index:manual | tsx scripts/kiwoom-manual-index-test.ts |
| test | package.json | kiwoom:quote:manual | tsx scripts/kiwoom-manual-quote-test.ts |
| quality | package.json | kiwoom:setup:check | tsx scripts/kiwoom-setup-check.ts |
| test | package.json | kiwoom:token:manual | tsx scripts/kiwoom-manual-token-test.ts |
| serve-dev | package.json | start | node dist/index.js |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
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
| mcp | [tests/tool-registry.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/tool-registry.test.ts) | mcp signal |
| mcp | [docs/getting-started/mcp-client-setup.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/docs/getting-started/mcp-client-setup.md) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/AGENTS.md) | agentRuntime signal |
| agentRuntime | [src/tools/get-daily-chart.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/tools/get-daily-chart.ts) | agentRuntime signal |
| agentRuntime | [src/tools/get-etf-quote.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/tools/get-etf-quote.ts) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/farmbit-mdk__korea-market-data-mcp/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/farmbit-mdk__korea-market-data-mcp/tsconfig.json) | config signal |
| eval | [tests/compliance-security-docs.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/compliance-security-docs.test.ts) | eval support |
| eval | [tests/kiwoom-auth.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/kiwoom-auth.test.ts) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/index.ts) |
| agentRuntime | 15 | [AGENTS.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/AGENTS.md)<br>[tests/tool-registry.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/tool-registry.test.ts)<br>[src/tools/get-daily-chart.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/tools/get-daily-chart.ts)<br>[src/tools/get-etf-quote.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/tools/get-etf-quote.ts)<br>[src/tools/get-kiwoom-setup-status.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/tools/get-kiwoom-setup-status.ts)<br>[src/tools/get-kiwoom-stock-quote.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/tools/get-kiwoom-stock-quote.ts)<br>[src/tools/get-korean-market-data-context.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/tools/get-korean-market-data-context.ts)<br>[src/tools/get-market-index.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/tools/get-market-index.ts) |
| mcp | 2 | [tests/tool-registry.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/tool-registry.test.ts)<br>[docs/getting-started/mcp-client-setup.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/docs/getting-started/mcp-client-setup.md) |
| retrieval | 9 | [tests/kiwoom-market-index-client.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/kiwoom-market-index-client.test.ts)<br>[src/index.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/index.ts)<br>[src/tools/get-market-index.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/tools/get-market-index.ts)<br>[src/tools/index.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/tools/index.ts)<br>[src/schemas/index.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/schemas/index.ts)<br>[src/providers/mock/index.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/providers/mock/index.ts)<br>[src/providers/kiwoom/index-client.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/providers/kiwoom/index-client.ts)<br>[src/providers/kiwoom/index.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/providers/kiwoom/index.ts) |
| spec | 4 | [ROADMAP.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/ROADMAP.md)<br>[docs/architecture.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/docs/architecture.md)<br>[docs/provider-adapter-spec.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/docs/provider-adapter-spec.md)<br>[docs/tool-spec.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/docs/tool-spec.md) |
| eval | 34 | [tests/compliance-security-docs.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/compliance-security-docs.test.ts)<br>[tests/kiwoom-auth.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/kiwoom-auth.test.ts)<br>[tests/kiwoom-manual-quote-test.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/kiwoom-manual-quote-test.test.ts)<br>[tests/kiwoom-manual-token-test.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/kiwoom-manual-token-test.test.ts)<br>[tests/kiwoom-market-index-client.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/kiwoom-market-index-client.test.ts)<br>[tests/kiwoom-public-quote-tool.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/kiwoom-public-quote-tool.test.ts)<br>[tests/kiwoom-quote-client.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/kiwoom-quote-client.test.ts)<br>[tests/kiwoom-token-client.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/kiwoom-token-client.test.ts) |
| security | 12 | [SECURITY.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/SECURITY.md)<br>[tests/compliance-security-docs.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/compliance-security-docs.test.ts)<br>[tests/kiwoom-auth.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/kiwoom-auth.test.ts)<br>[tests/secret-redaction.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/secret-redaction.test.ts)<br>[src/safety/redact-secret.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/safety/redact-secret.ts)<br>[src/providers/kiwoom/auth.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/providers/kiwoom/auth.ts)<br>[docs/security/credential-handling.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/docs/security/credential-handling.md)<br>[docs/release/npm-access-policy.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/docs/release/npm-access-policy.md) |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [AGENTS.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/AGENTS.md) |
| docs | 81 | [README.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/README.md)<br>[examples/README.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/examples/README.md)<br>[docs/architecture.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/docs/architecture.md)<br>[docs/client-setup.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/docs/client-setup.md)<br>[docs/provider-adapter-spec.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/docs/provider-adapter-spec.md)<br>[docs/tool-spec.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/docs/tool-spec.md)<br>[docs/troubleshooting.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/docs/troubleshooting.md)<br>[docs/verification/claude-desktop-live-usage-result.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/docs/verification/claude-desktop-live-usage-result.md) |
| config | 2 | [package.json](../../../../sources/farmbit-mdk__korea-market-data-mcp/package.json)<br>[tsconfig.json](../../../../sources/farmbit-mdk__korea-market-data-mcp/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 34 | [tests/compliance-security-docs.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/compliance-security-docs.test.ts)<br>[tests/kiwoom-auth.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/kiwoom-auth.test.ts)<br>[tests/kiwoom-manual-quote-test.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/kiwoom-manual-quote-test.test.ts)<br>[tests/kiwoom-manual-token-test.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/kiwoom-manual-token-test.test.ts)<br>[tests/kiwoom-market-index-client.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/kiwoom-market-index-client.test.ts)<br>[tests/kiwoom-public-quote-tool.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/kiwoom-public-quote-tool.test.ts) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 12 | [SECURITY.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/SECURITY.md)<br>[tests/compliance-security-docs.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/compliance-security-docs.test.ts)<br>[tests/kiwoom-auth.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/kiwoom-auth.test.ts)<br>[tests/secret-redaction.test.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/tests/secret-redaction.test.ts)<br>[src/safety/redact-secret.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/safety/redact-secret.ts)<br>[src/providers/kiwoom/auth.ts](../../../../sources/farmbit-mdk__korea-market-data-mcp/src/providers/kiwoom/auth.ts) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/farmbit-mdk__korea-market-data-mcp/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/tool-registry.test.ts`, `docs/getting-started/mcp-client-setup.md`, `AGENTS.md`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tests/tool-registry.test.ts`, `src/tools/get-daily-chart.ts`.
4. retrieval/memory/indexing 확인: `tests/kiwoom-market-index-client.test.ts`, `src/index.ts`, `src/tools/get-market-index.ts`.
5. test/eval 파일로 동작 검증: `tests/compliance-security-docs.test.ts`, `tests/kiwoom-auth.test.ts`, `tests/kiwoom-manual-quote-test.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Open source MCP server for reliable Korean stock, ETF, index, and market data access from AI agents, starting with Kiwoo. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, LICENSE, modelcontextprotocol이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
