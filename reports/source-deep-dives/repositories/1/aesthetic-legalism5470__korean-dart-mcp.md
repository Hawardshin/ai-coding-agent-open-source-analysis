# aesthetic-legalism5470/korean-dart-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Access OpenDART financial data and corporate filings via MCP. Analyze disclosures, financial statements, and XBRL data directly in your AI assistant.

## 요약

- 조사 단위: `sources/aesthetic-legalism5470__korean-dart-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 50 files, 7 directories, depth score 85, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=src/server/mcp-server.ts, .claude-plugin/korean_dart_mcp_v3.1.zip이고, 의존성 단서는 modelcontextprotocol, commander, 검증/운영 단서는 test/eval 경로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | aesthetic-legalism5470/korean-dart-mcp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/aesthetic-legalism5470__korean-dart-mcp](../../../../sources/aesthetic-legalism5470__korean-dart-mcp) |
| 기존 보고서 | [reports/korea-trending/repositories/aesthetic-legalism5470__korean-dart-mcp.md](../../../korea-trending/repositories/aesthetic-legalism5470__korean-dart-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 50 / 7 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | .claude-plugin, scripts, src |
| 상위 확장자 | .ts: 27, .mjs: 10, .json: 5, .md: 4, (none): 2, .example: 1, .zip: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 24 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | tsc |
| serve-dev | package.json | watch | tsc --watch |
| serve-dev | package.json | start | node build/index.js |
| build | package.json | cli | node build/cli.js |
| build | package.json | prepublishOnly | npm run build |
| entrypoint | package.json bin | index.js | build/index.js |
| entrypoint | package.json bin | cli.js | build/cli.js |


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
| mcp | [src/server/mcp-server.ts](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/src/server/mcp-server.ts) | mcp signal |
| mcp | [.claude-plugin/korean_dart_mcp_v3.1.zip](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/.claude-plugin/korean_dart_mcp_v3.1.zip) | mcp signal |
| agentRuntime | [src/tools/_helpers.ts](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/src/tools/_helpers.ts) | agentRuntime signal |
| agentRuntime | [src/tools/buffett-quality-snapshot.ts](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/src/tools/buffett-quality-snapshot.ts) | agentRuntime signal |
| agentRuntime | [src/tools/disclosure-anomaly.ts](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/src/tools/disclosure-anomaly.ts) | agentRuntime signal |
| agentRuntime | [src/tools/download-document.ts](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/src/tools/download-document.ts) | agentRuntime signal |
| entrypoints | [src/cli.ts](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/src/cli.ts) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/src/index.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/CLAUDE.md) | instruction signal |
| config | [package.json](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/tsconfig.json) | config signal |
| eval | [scripts/bench-concurrency.mjs](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/scripts/bench-concurrency.mjs) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [src/cli.ts](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/src/cli.ts)<br>[src/index.ts](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/src/index.ts) |
| agentRuntime | 17 | [src/tools/_helpers.ts](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/src/tools/_helpers.ts)<br>[src/tools/buffett-quality-snapshot.ts](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/src/tools/buffett-quality-snapshot.ts)<br>[src/tools/disclosure-anomaly.ts](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/src/tools/disclosure-anomaly.ts)<br>[src/tools/download-document.ts](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/src/tools/download-document.ts)<br>[src/tools/get-attachments.ts](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/src/tools/get-attachments.ts)<br>[src/tools/get-company.ts](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/src/tools/get-company.ts)<br>[src/tools/get-corporate-event.ts](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/src/tools/get-corporate-event.ts)<br>[src/tools/get-executive-compensation.ts](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/src/tools/get-executive-compensation.ts) |
| mcp | 2 | [src/server/mcp-server.ts](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/src/server/mcp-server.ts)<br>[.claude-plugin/korean_dart_mcp_v3.1.zip](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/.claude-plugin/korean_dart_mcp_v3.1.zip) |
| retrieval | 2 | [src/index.ts](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/src/index.ts)<br>[src/tools/index.ts](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/src/tools/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 5 | [src/tools/buffett-quality-snapshot.ts](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/src/tools/buffett-quality-snapshot.ts)<br>[scripts/bench-concurrency.mjs](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/scripts/bench-concurrency.mjs)<br>[scripts/field-test-v0_8.mjs](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/scripts/field-test-v0_8.mjs)<br>[scripts/field-test-v0_9.mjs](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/scripts/field-test-v0_9.mjs)<br>[scripts/test-xbrl-markdown.mjs](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/scripts/test-xbrl-markdown.mjs) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [CLAUDE.md](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/CLAUDE.md) |
| docs | 2 | [README-EN.md](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/README-EN.md)<br>[README.md](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/README.md) |
| config | 2 | [package.json](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/package.json)<br>[tsconfig.json](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 5 | [src/tools/buffett-quality-snapshot.ts](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/src/tools/buffett-quality-snapshot.ts)<br>[scripts/bench-concurrency.mjs](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/scripts/bench-concurrency.mjs)<br>[scripts/field-test-v0_8.mjs](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/scripts/field-test-v0_8.mjs)<br>[scripts/field-test-v0_9.mjs](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/scripts/field-test-v0_9.mjs)<br>[scripts/test-xbrl-markdown.mjs](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/scripts/test-xbrl-markdown.mjs) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/aesthetic-legalism5470__korean-dart-mcp/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/server/mcp-server.ts`, `.claude-plugin/korean_dart_mcp_v3.1.zip`, `src/tools/_helpers.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/cli.ts`, `src/index.ts`.
3. agent/tool runtime 매핑: `src/tools/_helpers.ts`, `src/tools/buffett-quality-snapshot.ts`, `src/tools/disclosure-anomaly.ts`.
4. retrieval/memory/indexing 확인: `src/index.ts`, `src/tools/index.ts`.
5. test/eval 파일로 동작 검증: `src/tools/buffett-quality-snapshot.ts`, `scripts/bench-concurrency.mjs`, `scripts/field-test-v0_8.mjs`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Access OpenDART financial data and corporate filings via MCP. Analyze disclosures, financial statements, and XBRL data d. 핵심 구조 신호는 TypeScript, package.json, README.md, CLAUDE.md, LICENSE, modelcontextprotocol이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
