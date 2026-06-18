# workbookbulb863/korean-law-alio-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Search and analyze Korean laws, administrative rules, and public institution regulations using 110 MCP tools to provide accurate legal data for AI models.

## 요약

- 조사 단위: `sources/workbookbulb863__korean-law-alio-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 146 files, 13 directories, depth score 111, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=test/index.mjs, src/index.ts, src/tools/knowledge-base.ts이고, 의존성 단서는 modelcontextprotocol, express, commander, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | workbookbulb863/korean-law-alio-mcp |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | TypeScript |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/workbookbulb863__korean-law-alio-mcp](../../../../sources/workbookbulb863__korean-law-alio-mcp) |
| 기존 보고서 | [reports/korea-trending/repositories/workbookbulb863__korean-law-alio-mcp.md](../../../korea-trending/repositories/workbookbulb863__korean-law-alio-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 146 / 13 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .claude-plugin, .github, docs, src, test |
| 상위 확장자 | .ts: 106, .md: 14, .mjs: 8, .json: 5, (none): 5, .cjs: 3, .example: 1, .png: 1, .toml: 1, .yml: 1, .zip: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 48 |
| docs | documentation surface | 5 |
| .github | ci surface | 1 |
| test | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | tsc |
| serve-dev | package.json | watch | tsc --watch |
| serve-dev | package.json | start | node build/index.js |
| serve-dev | package.json | start:sse | node build/index.js --mode sse --port 3000 |
| build | package.json | cli | node build/cli.js |
| build | package.json | alio:sync | node build/scripts/alio-sync.js |
| test | package.json | test | npm run build && node test/index.mjs |
| test | package.json | test:build | node test/build.test.mjs |
| test | package.json | test:router | node test/router.test.mjs |
| test | package.json | test:cli | node test/cli.test.mjs |
| test | package.json | test:alio | node test/alio.test.mjs |
| test | package.json | test:law | node test/law.test.mjs |
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
| webRuntime | express |
| developerSurface | commander |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [test/index.mjs](../../../../sources/workbookbulb863__korean-law-alio-mcp/test/index.mjs) | retrieval signal |
| retrieval | [src/index.ts](../../../../sources/workbookbulb863__korean-law-alio-mcp/src/index.ts) | retrieval signal |
| retrieval | [src/tools/knowledge-base.ts](../../../../sources/workbookbulb863__korean-law-alio-mcp/src/tools/knowledge-base.ts) | retrieval signal |
| retrieval | [src/lib/alio/index-loader.ts](../../../../sources/workbookbulb863__korean-law-alio-mcp/src/lib/alio/index-loader.ts) | retrieval signal |
| entrypoints | [src/cli.ts](../../../../sources/workbookbulb863__korean-law-alio-mcp/src/cli.ts) | entrypoints signal |
| docs | [README-EN-UPSTREAM.md](../../../../sources/workbookbulb863__korean-law-alio-mcp/README-EN-UPSTREAM.md) | docs signal |
| docs | [README-EN.md](../../../../sources/workbookbulb863__korean-law-alio-mcp/README-EN.md) | docs signal |
| docs | [README-UPSTREAM.md](../../../../sources/workbookbulb863__korean-law-alio-mcp/README-UPSTREAM.md) | docs signal |
| docs | [README.md](../../../../sources/workbookbulb863__korean-law-alio-mcp/README.md) | docs signal |
| eval | [TEST-REPORT.md](../../../../sources/workbookbulb863__korean-law-alio-mcp/TEST-REPORT.md) | eval signal |
| eval | [test/alio.test.mjs](../../../../sources/workbookbulb863__korean-law-alio-mcp/test/alio.test.mjs) | eval signal |
| eval | [test/build.test.mjs](../../../../sources/workbookbulb863__korean-law-alio-mcp/test/build.test.mjs) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [src/cli.ts](../../../../sources/workbookbulb863__korean-law-alio-mcp/src/cli.ts)<br>[src/index.ts](../../../../sources/workbookbulb863__korean-law-alio-mcp/src/index.ts) |
| agentRuntime | 71 | [test/lib/runner.mjs](../../../../sources/workbookbulb863__korean-law-alio-mcp/test/lib/runner.mjs)<br>[src/tool-registry.ts](../../../../sources/workbookbulb863__korean-law-alio-mcp/src/tool-registry.ts)<br>[src/tools/admin-appeals.ts](../../../../sources/workbookbulb863__korean-law-alio-mcp/src/tools/admin-appeals.ts)<br>[src/tools/admin-rule.ts](../../../../sources/workbookbulb863__korean-law-alio-mcp/src/tools/admin-rule.ts)<br>[src/tools/advanced-search.ts](../../../../sources/workbookbulb863__korean-law-alio-mcp/src/tools/advanced-search.ts)<br>[src/tools/annex.ts](../../../../sources/workbookbulb863__korean-law-alio-mcp/src/tools/annex.ts)<br>[src/tools/article-compare.ts](../../../../sources/workbookbulb863__korean-law-alio-mcp/src/tools/article-compare.ts)<br>[src/tools/article-detail.ts](../../../../sources/workbookbulb863__korean-law-alio-mcp/src/tools/article-detail.ts) |
| mcp | 3 | [.mcp.json](../../../../sources/workbookbulb863__korean-law-alio-mcp/.mcp.json)<br>[test/lib/mcp_korean_law_alio_v1.7-alpha.1.zip](../../../../sources/workbookbulb863__korean-law-alio-mcp/test/lib/mcp_korean_law_alio_v1.7-alpha.1.zip)<br>[src/tool-registry.ts](../../../../sources/workbookbulb863__korean-law-alio-mcp/src/tool-registry.ts) |
| retrieval | 4 | [test/index.mjs](../../../../sources/workbookbulb863__korean-law-alio-mcp/test/index.mjs)<br>[src/index.ts](../../../../sources/workbookbulb863__korean-law-alio-mcp/src/index.ts)<br>[src/tools/knowledge-base.ts](../../../../sources/workbookbulb863__korean-law-alio-mcp/src/tools/knowledge-base.ts)<br>[src/lib/alio/index-loader.ts](../../../../sources/workbookbulb863__korean-law-alio-mcp/src/lib/alio/index-loader.ts) |
| spec | 3 | [ROADMAP-UPSTREAM.md](../../../../sources/workbookbulb863__korean-law-alio-mcp/ROADMAP-UPSTREAM.md)<br>[ROADMAP.md](../../../../sources/workbookbulb863__korean-law-alio-mcp/ROADMAP.md)<br>[docs/ARCHITECTURE.md](../../../../sources/workbookbulb863__korean-law-alio-mcp/docs/ARCHITECTURE.md) |
| eval | 15 | [TEST-REPORT.md](../../../../sources/workbookbulb863__korean-law-alio-mcp/TEST-REPORT.md)<br>[test/alio.test.mjs](../../../../sources/workbookbulb863__korean-law-alio-mcp/test/alio.test.mjs)<br>[test/build.test.mjs](../../../../sources/workbookbulb863__korean-law-alio-mcp/test/build.test.mjs)<br>[test/cli.test.mjs](../../../../sources/workbookbulb863__korean-law-alio-mcp/test/cli.test.mjs)<br>[test/index.mjs](../../../../sources/workbookbulb863__korean-law-alio-mcp/test/index.mjs)<br>[test/law.test.mjs](../../../../sources/workbookbulb863__korean-law-alio-mcp/test/law.test.mjs)<br>[test/router.test.mjs](../../../../sources/workbookbulb863__korean-law-alio-mcp/test/router.test.mjs)<br>[test/test-admin-rule.cjs](../../../../sources/workbookbulb863__korean-law-alio-mcp/test/test-admin-rule.cjs) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/workbookbulb863__korean-law-alio-mcp/.github/workflows/ci.yml) |
| container | 1 | [Dockerfile](../../../../sources/workbookbulb863__korean-law-alio-mcp/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/workbookbulb863__korean-law-alio-mcp/CLAUDE.md) |
| docs | 7 | [README-EN-UPSTREAM.md](../../../../sources/workbookbulb863__korean-law-alio-mcp/README-EN-UPSTREAM.md)<br>[README-EN.md](../../../../sources/workbookbulb863__korean-law-alio-mcp/README-EN.md)<br>[README-UPSTREAM.md](../../../../sources/workbookbulb863__korean-law-alio-mcp/README-UPSTREAM.md)<br>[README.md](../../../../sources/workbookbulb863__korean-law-alio-mcp/README.md)<br>[docs/API.md](../../../../sources/workbookbulb863__korean-law-alio-mcp/docs/API.md)<br>[docs/ARCHITECTURE.md](../../../../sources/workbookbulb863__korean-law-alio-mcp/docs/ARCHITECTURE.md)<br>[docs/DEVELOPMENT.md](../../../../sources/workbookbulb863__korean-law-alio-mcp/docs/DEVELOPMENT.md) |
| config | 2 | [package.json](../../../../sources/workbookbulb863__korean-law-alio-mcp/package.json)<br>[tsconfig.json](../../../../sources/workbookbulb863__korean-law-alio-mcp/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 15 | [TEST-REPORT.md](../../../../sources/workbookbulb863__korean-law-alio-mcp/TEST-REPORT.md)<br>[test/alio.test.mjs](../../../../sources/workbookbulb863__korean-law-alio-mcp/test/alio.test.mjs)<br>[test/build.test.mjs](../../../../sources/workbookbulb863__korean-law-alio-mcp/test/build.test.mjs)<br>[test/cli.test.mjs](../../../../sources/workbookbulb863__korean-law-alio-mcp/test/cli.test.mjs)<br>[test/index.mjs](../../../../sources/workbookbulb863__korean-law-alio-mcp/test/index.mjs)<br>[test/law.test.mjs](../../../../sources/workbookbulb863__korean-law-alio-mcp/test/law.test.mjs) |
| CI workflow | 1 | [.github/workflows/ci.yml](../../../../sources/workbookbulb863__korean-law-alio-mcp/.github/workflows/ci.yml) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/workbookbulb863__korean-law-alio-mcp/Dockerfile) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/workbookbulb863__korean-law-alio-mcp/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `test/index.mjs`, `src/index.ts`, `src/tools/knowledge-base.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/cli.ts`, `src/index.ts`.
3. agent/tool runtime 매핑: `test/lib/runner.mjs`, `src/tool-registry.ts`, `src/tools/admin-appeals.ts`.
4. retrieval/memory/indexing 확인: `test/index.mjs`, `src/index.ts`, `src/tools/knowledge-base.ts`.
5. test/eval 파일로 동작 검증: `TEST-REPORT.md`, `test/alio.test.mjs`, `test/build.test.mjs`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Search and analyze Korean laws, administrative rules, and public institution regulations using 110 MCP tools to provide . 핵심 구조 신호는 TypeScript, package.json, Dockerfile, README.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
