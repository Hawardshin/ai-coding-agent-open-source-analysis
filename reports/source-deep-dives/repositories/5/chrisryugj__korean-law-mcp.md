# chrisryugj/korean-law-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

국가법령정보MCP v4.4 | 법제처 42개 API → 9개 MCP 도구. 법령·판례·조례·조약 + 다단계 리서치(legal_research) + 정밀분석(legal_analysis: 인용검증·판례생사·행위시법·영향그래프) | 42 Korean legal APIs → 9 MCP tools

## 요약

- 조사 단위: `sources/chrisryugj__korean-law-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 144 files, 13 directories, depth score 118, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=src/index.ts, src/tools/knowledge-base.ts, src/tools/scenarios/index.ts이고, 의존성 단서는 modelcontextprotocol, express, commander, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | chrisryugj/korean-law-mcp |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | TypeScript |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/chrisryugj__korean-law-mcp](../../../../sources/chrisryugj__korean-law-mcp) |
| 기존 보고서 | [reports/korea-trending/repositories/chrisryugj__korean-law-mcp.md](../../../korea-trending/repositories/chrisryugj__korean-law-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 144 / 13 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .claude, .claude-plugin, .github, docs, src, test |
| 상위 확장자 | .ts: 100, .cjs: 17, .md: 13, .json: 5, (none): 4, .example: 1, .gif: 1, .toml: 1, .txt: 1, .yml: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 48 |
| docs | documentation surface | 8 |
| .github | ci surface | 1 |
| test | validation surface | 1 |


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
| webRuntime | express |
| developerSurface | commander |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [src/index.ts](../../../../sources/chrisryugj__korean-law-mcp/src/index.ts) | retrieval signal |
| retrieval | [src/tools/knowledge-base.ts](../../../../sources/chrisryugj__korean-law-mcp/src/tools/knowledge-base.ts) | retrieval signal |
| retrieval | [src/tools/scenarios/index.ts](../../../../sources/chrisryugj__korean-law-mcp/src/tools/scenarios/index.ts) | retrieval signal |
| retrieval | [docs/FTC-RAG-INTEGRATION.md](../../../../sources/chrisryugj__korean-law-mcp/docs/FTC-RAG-INTEGRATION.md) | retrieval signal |
| entrypoints | [src/cli.ts](../../../../sources/chrisryugj__korean-law-mcp/src/cli.ts) | entrypoints signal |
| docs | [README-EN.md](../../../../sources/chrisryugj__korean-law-mcp/README-EN.md) | docs signal |
| docs | [README.md](../../../../sources/chrisryugj__korean-law-mcp/README.md) | docs signal |
| docs | [docs/API.md](../../../../sources/chrisryugj__korean-law-mcp/docs/API.md) | docs signal |
| docs | [docs/ARCHITECTURE.md](../../../../sources/chrisryugj__korean-law-mcp/docs/ARCHITECTURE.md) | docs signal |
| eval | [test-results-final.txt](../../../../sources/chrisryugj__korean-law-mcp/test-results-final.txt) | eval signal |
| eval | [test/test-admin-rule.cjs](../../../../sources/chrisryugj__korean-law-mcp/test/test-admin-rule.cjs) | eval signal |
| eval | [test/test-all-tools.cjs](../../../../sources/chrisryugj__korean-law-mcp/test/test-all-tools.cjs) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [src/cli.ts](../../../../sources/chrisryugj__korean-law-mcp/src/cli.ts)<br>[src/index.ts](../../../../sources/chrisryugj__korean-law-mcp/src/index.ts) |
| agentRuntime | 71 | [src/tool-registry.ts](../../../../sources/chrisryugj__korean-law-mcp/src/tool-registry.ts)<br>[src/tools/admin-appeals.ts](../../../../sources/chrisryugj__korean-law-mcp/src/tools/admin-appeals.ts)<br>[src/tools/admin-rule.ts](../../../../sources/chrisryugj__korean-law-mcp/src/tools/admin-rule.ts)<br>[src/tools/advanced-search.ts](../../../../sources/chrisryugj__korean-law-mcp/src/tools/advanced-search.ts)<br>[src/tools/annex.ts](../../../../sources/chrisryugj__korean-law-mcp/src/tools/annex.ts)<br>[src/tools/applicable-law.ts](../../../../sources/chrisryugj__korean-law-mcp/src/tools/applicable-law.ts)<br>[src/tools/article-compare.ts](../../../../sources/chrisryugj__korean-law-mcp/src/tools/article-compare.ts)<br>[src/tools/article-detail.ts](../../../../sources/chrisryugj__korean-law-mcp/src/tools/article-detail.ts) |
| mcp | 1 | [src/tool-registry.ts](../../../../sources/chrisryugj__korean-law-mcp/src/tool-registry.ts) |
| retrieval | 4 | [src/index.ts](../../../../sources/chrisryugj__korean-law-mcp/src/index.ts)<br>[src/tools/knowledge-base.ts](../../../../sources/chrisryugj__korean-law-mcp/src/tools/knowledge-base.ts)<br>[src/tools/scenarios/index.ts](../../../../sources/chrisryugj__korean-law-mcp/src/tools/scenarios/index.ts)<br>[docs/FTC-RAG-INTEGRATION.md](../../../../sources/chrisryugj__korean-law-mcp/docs/FTC-RAG-INTEGRATION.md) |
| spec | 2 | [ROADMAP.md](../../../../sources/chrisryugj__korean-law-mcp/ROADMAP.md)<br>[docs/ARCHITECTURE.md](../../../../sources/chrisryugj__korean-law-mcp/docs/ARCHITECTURE.md) |
| eval | 18 | [test-results-final.txt](../../../../sources/chrisryugj__korean-law-mcp/test-results-final.txt)<br>[test/test-admin-rule.cjs](../../../../sources/chrisryugj__korean-law-mcp/test/test-admin-rule.cjs)<br>[test/test-all-tools.cjs](../../../../sources/chrisryugj__korean-law-mcp/test/test-all-tools.cjs)<br>[test/test-chain-full-research-precedent-retry.cjs](../../../../sources/chrisryugj__korean-law-mcp/test/test-chain-full-research-precedent-retry.cjs)<br>[test/test-chain-search-detail-integration.cjs](../../../../sources/chrisryugj__korean-law-mcp/test/test-chain-search-detail-integration.cjs)<br>[test/test-compact-query-planner.cjs](../../../../sources/chrisryugj__korean-law-mcp/test/test-compact-query-planner.cjs)<br>[test/test-empty-html-retry.cjs](../../../../sources/chrisryugj__korean-law-mcp/test/test-empty-html-retry.cjs)<br>[test/test-external-https-proxy.cjs](../../../../sources/chrisryugj__korean-law-mcp/test/test-external-https-proxy.cjs) |
| security | 1 | [src/tools/scenarios/compliance.ts](../../../../sources/chrisryugj__korean-law-mcp/src/tools/scenarios/compliance.ts) |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/chrisryugj__korean-law-mcp/.github/workflows/ci.yml) |
| container | 1 | [Dockerfile](../../../../sources/chrisryugj__korean-law-mcp/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/chrisryugj__korean-law-mcp/CLAUDE.md) |
| docs | 7 | [README-EN.md](../../../../sources/chrisryugj__korean-law-mcp/README-EN.md)<br>[README.md](../../../../sources/chrisryugj__korean-law-mcp/README.md)<br>[docs/API.md](../../../../sources/chrisryugj__korean-law-mcp/docs/API.md)<br>[docs/ARCHITECTURE.md](../../../../sources/chrisryugj__korean-law-mcp/docs/ARCHITECTURE.md)<br>[docs/DEVELOPMENT.md](../../../../sources/chrisryugj__korean-law-mcp/docs/DEVELOPMENT.md)<br>[docs/FTC-RAG-INTEGRATION.md](../../../../sources/chrisryugj__korean-law-mcp/docs/FTC-RAG-INTEGRATION.md)<br>[docs/PRECEDENT-SEARCH-GUIDELINES.md](../../../../sources/chrisryugj__korean-law-mcp/docs/PRECEDENT-SEARCH-GUIDELINES.md) |
| config | 2 | [package.json](../../../../sources/chrisryugj__korean-law-mcp/package.json)<br>[tsconfig.json](../../../../sources/chrisryugj__korean-law-mcp/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 18 | [test-results-final.txt](../../../../sources/chrisryugj__korean-law-mcp/test-results-final.txt)<br>[test/test-admin-rule.cjs](../../../../sources/chrisryugj__korean-law-mcp/test/test-admin-rule.cjs)<br>[test/test-all-tools.cjs](../../../../sources/chrisryugj__korean-law-mcp/test/test-all-tools.cjs)<br>[test/test-chain-full-research-precedent-retry.cjs](../../../../sources/chrisryugj__korean-law-mcp/test/test-chain-full-research-precedent-retry.cjs)<br>[test/test-chain-search-detail-integration.cjs](../../../../sources/chrisryugj__korean-law-mcp/test/test-chain-search-detail-integration.cjs)<br>[test/test-compact-query-planner.cjs](../../../../sources/chrisryugj__korean-law-mcp/test/test-compact-query-planner.cjs) |
| CI workflow | 1 | [.github/workflows/ci.yml](../../../../sources/chrisryugj__korean-law-mcp/.github/workflows/ci.yml) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/chrisryugj__korean-law-mcp/Dockerfile) |
| 보안/정책 | 1 | [src/tools/scenarios/compliance.ts](../../../../sources/chrisryugj__korean-law-mcp/src/tools/scenarios/compliance.ts) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/chrisryugj__korean-law-mcp/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/index.ts`, `src/tools/knowledge-base.ts`, `src/tools/scenarios/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/cli.ts`, `src/index.ts`.
3. agent/tool runtime 매핑: `src/tool-registry.ts`, `src/tools/admin-appeals.ts`, `src/tools/admin-rule.ts`.
4. retrieval/memory/indexing 확인: `src/index.ts`, `src/tools/knowledge-base.ts`, `src/tools/scenarios/index.ts`.
5. test/eval 파일로 동작 검증: `test-results-final.txt`, `test/test-admin-rule.cjs`, `test/test-all-tools.cjs`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 국가법령정보MCP v4.4 법제처 42개 API → 9개 MCP 도구. 법령·판례·조례·조약 + 다단계 리서치 legal research + 정밀분석 legal analysis 인용검증·판례생사·행위시법·영향그래프 . 핵심 구조 신호는 TypeScript, package.json, Dockerfile, README.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
