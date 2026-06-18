# chrisryugj/lexdiff 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

한국 법령 AI 검색 — 자연어 질문 → 법령·판례 원문 근거 답변. Verbatim RAG · 신구조문 비교 · 3단 위임법령 · 영향 추적 · 조례 벤치마킹 (Next.js 16 · Gemini 3 Flash) | Korean Legal AI with verbatim RAG over govt API

## 요약

- 조사 단위: `sources/chrisryugj__lexdiff` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 711 files, 152 directories, depth score 118, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=supabase/migrations/001_relation_graph.sql, src/domain/index.ts, src/domain/search/index.ts이고, 의존성 단서는 mcp, modelcontextprotocol, express, next, react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | chrisryugj/lexdiff |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | TypeScript |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/chrisryugj__lexdiff](../../../../sources/chrisryugj__lexdiff) |
| 기존 보고서 | [reports/korea-trending/repositories/chrisryugj__lexdiff.md](../../../korea-trending/repositories/chrisryugj__lexdiff.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 711 / 152 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | __tests__, .backup_20251102224016, .claude, .github, %programdata%, app, certs, components, demo, docs, evaluation, hooks, important-docs, lib, logs, public, scripts, src, styles, supabase |
| 상위 확장자 | .ts: 284, .tsx: 149, .md: 125, .mjs: 35, .json: 24, .mts: 14, .sql: 10, .svg: 10, .css: 7, .html: 6, .png: 6, .sh: 6 |
| 소스 패턴 | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| lib | source boundary | 49 |
| docs | documentation surface | 40 |
| src | source boundary | 5 |
| __tests__ | validation surface | 1 |
| .github | ci surface | 1 |
| %programdata% | top-level component | 1 |
| app | top-level component | 1 |
| certs | top-level component | 1 |
| components | top-level component | 1 |
| demo | top-level component | 1 |
| evaluation | top-level component | 1 |
| hooks | top-level component | 1 |
| important-docs | documentation surface | 1 |
| logs | top-level component | 1 |
| public | top-level component | 1 |
| scripts | top-level component | 1 |
| styles | top-level component | 1 |
| supabase | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | next build |
| serve-dev | package.json | dev | next dev |
| quality | package.json | lint | eslint . |
| test | package.json | test | vitest |
| test | package.json | test:run | vitest run |
| test | package.json | test:coverage | vitest run --coverage |
| serve-dev | package.json | restart | scripts\restart-dev.cmd |
| serve-dev | package.json | start | next start |
| serve-dev | package.json | log-viewer | node scripts/log-viewer-server.mjs |
| utility | package.json | download:ordinances | node scripts/download-all-ordinances.mjs |
| utility | package.json | download:ordinances:fast | node scripts/download-all-ordinances.mjs 500 |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp, modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | express, next, react |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [supabase/migrations/001_relation_graph.sql](../../../../sources/chrisryugj__lexdiff/supabase/migrations/001_relation_graph.sql) | retrieval signal |
| retrieval | [src/domain/index.ts](../../../../sources/chrisryugj__lexdiff/src/domain/index.ts) | retrieval signal |
| retrieval | [src/domain/search/index.ts](../../../../sources/chrisryugj__lexdiff/src/domain/search/index.ts) | retrieval signal |
| retrieval | [src/domain/search/services/index.ts](../../../../sources/chrisryugj__lexdiff/src/domain/search/services/index.ts) | retrieval signal |
| entrypoints | [lib/supabase/server.ts](../../../../sources/chrisryugj__lexdiff/lib/supabase/server.ts) | entrypoints signal |
| entrypoints | [demo/src/index.ts](../../../../sources/chrisryugj__lexdiff/demo/src/index.ts) | entrypoints signal |
| docs | [README.md](../../../../sources/chrisryugj__lexdiff/README.md) | docs signal |
| docs | [scripts/README.md](../../../../sources/chrisryugj__lexdiff/scripts/README.md) | docs signal |
| docs | [evaluation/README.md](../../../../sources/chrisryugj__lexdiff/evaluation/README.md) | docs signal |
| docs | [docs/01-ANALYSIS_REPORT.md](../../../../sources/chrisryugj__lexdiff/docs/01-ANALYSIS_REPORT.md) | docs signal |
| eval | [scripts/e2e-fcrag-test.mjs](../../../../sources/chrisryugj__lexdiff/scripts/e2e-fcrag-test.mjs) | eval signal |
| eval | [scripts/test-annex-match.ts](../../../../sources/chrisryugj__lexdiff/scripts/test-annex-match.ts) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [lib/supabase/server.ts](../../../../sources/chrisryugj__lexdiff/lib/supabase/server.ts)<br>[demo/src/index.ts](../../../../sources/chrisryugj__lexdiff/demo/src/index.ts) |
| agentRuntime | 53 | [lib/fc-rag/tool-adapter.ts](../../../../sources/chrisryugj__lexdiff/lib/fc-rag/tool-adapter.ts)<br>[lib/fc-rag/tool-cache.ts](../../../../sources/chrisryugj__lexdiff/lib/fc-rag/tool-cache.ts)<br>[lib/fc-rag/tool-registry.ts](../../../../sources/chrisryugj__lexdiff/lib/fc-rag/tool-registry.ts)<br>[lib/fc-rag/tool-tiers.ts](../../../../sources/chrisryugj__lexdiff/lib/fc-rag/tool-tiers.ts)<br>[hooks/law-viewer-modal-fetchers.ts](../../../../sources/chrisryugj__lexdiff/hooks/law-viewer-modal-fetchers.ts)<br>[hooks/use-ai-gate.ts](../../../../sources/chrisryugj__lexdiff/hooks/use-ai-gate.ts)<br>[hooks/use-api-key.ts](../../../../sources/chrisryugj__lexdiff/hooks/use-api-key.ts)<br>[hooks/use-content-click-handlers.ts](../../../../sources/chrisryugj__lexdiff/hooks/use-content-click-handlers.ts) |
| mcp | 5 | [.mcp.json](../../../../sources/chrisryugj__lexdiff/.mcp.json)<br>[lib/fc-rag/claude-mcp-config.json](../../../../sources/chrisryugj__lexdiff/lib/fc-rag/claude-mcp-config.json)<br>[lib/fc-rag/tool-registry.ts](../../../../sources/chrisryugj__lexdiff/lib/fc-rag/tool-registry.ts)<br>[important-docs/11-LEGAL_MCP_BOT_ARCHITECTURE.md](../../../../sources/chrisryugj__lexdiff/important-docs/11-LEGAL_MCP_BOT_ARCHITECTURE.md)<br>[docs/18-CLI-FIRST-MCP-ARCHITECTURE-REVIEW.md](../../../../sources/chrisryugj__lexdiff/docs/18-CLI-FIRST-MCP-ARCHITECTURE-REVIEW.md) |
| retrieval | 87 | [supabase/migrations/001_relation_graph.sql](../../../../sources/chrisryugj__lexdiff/supabase/migrations/001_relation_graph.sql)<br>[src/domain/index.ts](../../../../sources/chrisryugj__lexdiff/src/domain/index.ts)<br>[src/domain/search/index.ts](../../../../sources/chrisryugj__lexdiff/src/domain/search/index.ts)<br>[src/domain/search/services/index.ts](../../../../sources/chrisryugj__lexdiff/src/domain/search/services/index.ts)<br>[src/domain/patterns/index.ts](../../../../sources/chrisryugj__lexdiff/src/domain/patterns/index.ts)<br>[lib/rag-response-cache.ts](../../../../sources/chrisryugj__lexdiff/lib/rag-response-cache.ts)<br>[lib/relation-graph/database.types.ts](../../../../sources/chrisryugj__lexdiff/lib/relation-graph/database.types.ts)<br>[lib/relation-graph/impact-analysis.ts](../../../../sources/chrisryugj__lexdiff/lib/relation-graph/impact-analysis.ts) |
| spec | 17 | [important-docs/05-RAG_ARCHITECTURE.md](../../../../sources/chrisryugj__lexdiff/important-docs/05-RAG_ARCHITECTURE.md)<br>[important-docs/09-COMPONENT_ARCHITECTURE.md](../../../../sources/chrisryugj__lexdiff/important-docs/09-COMPONENT_ARCHITECTURE.md)<br>[important-docs/11-LEGAL_MCP_BOT_ARCHITECTURE.md](../../../../sources/chrisryugj__lexdiff/important-docs/11-LEGAL_MCP_BOT_ARCHITECTURE.md)<br>[important-docs/14-GRAPHRAG_UPGRADE_PRD.md](../../../../sources/chrisryugj__lexdiff/important-docs/14-GRAPHRAG_UPGRADE_PRD.md)<br>[important-docs/16-LAW_IMPACT_TRACKER_PRD.md](../../../../sources/chrisryugj__lexdiff/important-docs/16-LAW_IMPACT_TRACKER_PRD.md)<br>[important-docs/19-LAW_ANALYSIS_TOOLKIT_PRD.md](../../../../sources/chrisryugj__lexdiff/important-docs/19-LAW_ANALYSIS_TOOLKIT_PRD.md)<br>[important-docs/archive/DESIGN_ANALYSIS_REPORT.md](../../../../sources/chrisryugj__lexdiff/important-docs/archive/DESIGN_ANALYSIS_REPORT.md)<br>[important-docs/archive/DESIGN_IMPROVEMENT_PLAN.md](../../../../sources/chrisryugj__lexdiff/important-docs/archive/DESIGN_IMPROVEMENT_PLAN.md) |
| eval | 89 | [scripts/e2e-fcrag-test.mjs](../../../../sources/chrisryugj__lexdiff/scripts/e2e-fcrag-test.mjs)<br>[scripts/test-annex-match.ts](../../../../sources/chrisryugj__lexdiff/scripts/test-annex-match.ts)<br>[scripts/test-api-exhaustive.ts](../../../../sources/chrisryugj__lexdiff/scripts/test-api-exhaustive.ts)<br>[scripts/test-civil-servant-gwangjin.ts](../../../../sources/chrisryugj__lexdiff/scripts/test-civil-servant-gwangjin.ts)<br>[scripts/test-classifier-exhaustive.ts](../../../../sources/chrisryugj__lexdiff/scripts/test-classifier-exhaustive.ts)<br>[scripts/test-classifier-round2.ts](../../../../sources/chrisryugj__lexdiff/scripts/test-classifier-round2.ts)<br>[scripts/test-eflaw.mjs](../../../../sources/chrisryugj__lexdiff/scripts/test-eflaw.mjs)<br>[scripts/test-endpoints-e2e.mjs](../../../../sources/chrisryugj__lexdiff/scripts/test-endpoints-e2e.mjs) |
| security | 12 | [ui-audit/2026-03-20-23-29.json](../../../../sources/chrisryugj__lexdiff/ui-audit/2026-03-20-23-29.json)<br>[ui-audit/2026-03-20-23-29.md](../../../../sources/chrisryugj__lexdiff/ui-audit/2026-03-20-23-29.md)<br>[ui-audit/screenshots/home-desktop-delay-check.png](../../../../sources/chrisryugj__lexdiff/ui-audit/screenshots/home-desktop-delay-check.png)<br>[ui-audit/screenshots/step-00-home-desktop.png](../../../../sources/chrisryugj__lexdiff/ui-audit/screenshots/step-00-home-desktop.png)<br>[ui-audit/screenshots/step-01-search-result-desktop.png](../../../../sources/chrisryugj__lexdiff/ui-audit/screenshots/step-01-search-result-desktop.png)<br>[ui-audit/screenshots/step-02-home-mobile.png](../../../../sources/chrisryugj__lexdiff/ui-audit/screenshots/step-02-home-mobile.png)<br>[ui-audit/screenshots/step-03-search-result-mobile.png](../../../../sources/chrisryugj__lexdiff/ui-audit/screenshots/step-03-search-result-mobile.png)<br>[lib/api-auth.ts](../../../../sources/chrisryugj__lexdiff/lib/api-auth.ts) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/chrisryugj__lexdiff/.github/workflows/ci.yml)<br>[.github/workflows/rag-eval-weekly.yml](../../../../sources/chrisryugj__lexdiff/.github/workflows/rag-eval-weekly.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [CLAUDE.md](../../../../sources/chrisryugj__lexdiff/CLAUDE.md)<br>[.claude/sync/CLAUDE.md](../../../../sources/chrisryugj__lexdiff/.claude/sync/CLAUDE.md) |
| docs | 35 | [README.md](../../../../sources/chrisryugj__lexdiff/README.md)<br>[scripts/README.md](../../../../sources/chrisryugj__lexdiff/scripts/README.md)<br>[evaluation/README.md](../../../../sources/chrisryugj__lexdiff/evaluation/README.md)<br>[docs/01-ANALYSIS_REPORT.md](../../../../sources/chrisryugj__lexdiff/docs/01-ANALYSIS_REPORT.md)<br>[docs/02-GEMINI_FILE_SEARCH_GUIDE.md](../../../../sources/chrisryugj__lexdiff/docs/02-GEMINI_FILE_SEARCH_GUIDE.md)<br>[docs/03-NEXT_STEPS.md](../../../../sources/chrisryugj__lexdiff/docs/03-NEXT_STEPS.md)<br>[docs/04-REFACTORING_PLAN.md](../../../../sources/chrisryugj__lexdiff/docs/04-REFACTORING_PLAN.md)<br>[docs/05-LAW_VIEWER_ARCHITECTURE.md](../../../../sources/chrisryugj__lexdiff/docs/05-LAW_VIEWER_ARCHITECTURE.md) |
| config | 5 | [package.json](../../../../sources/chrisryugj__lexdiff/package.json)<br>[tsconfig.json](../../../../sources/chrisryugj__lexdiff/tsconfig.json)<br>[evaluation/requirements.txt](../../../../sources/chrisryugj__lexdiff/evaluation/requirements.txt)<br>[demo/package.json](../../../../sources/chrisryugj__lexdiff/demo/package.json)<br>[demo/tsconfig.json](../../../../sources/chrisryugj__lexdiff/demo/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 89 | [scripts/e2e-fcrag-test.mjs](../../../../sources/chrisryugj__lexdiff/scripts/e2e-fcrag-test.mjs)<br>[scripts/test-annex-match.ts](../../../../sources/chrisryugj__lexdiff/scripts/test-annex-match.ts)<br>[scripts/test-api-exhaustive.ts](../../../../sources/chrisryugj__lexdiff/scripts/test-api-exhaustive.ts)<br>[scripts/test-civil-servant-gwangjin.ts](../../../../sources/chrisryugj__lexdiff/scripts/test-civil-servant-gwangjin.ts)<br>[scripts/test-classifier-exhaustive.ts](../../../../sources/chrisryugj__lexdiff/scripts/test-classifier-exhaustive.ts)<br>[scripts/test-classifier-round2.ts](../../../../sources/chrisryugj__lexdiff/scripts/test-classifier-round2.ts) |
| CI workflow | 2 | [.github/workflows/ci.yml](../../../../sources/chrisryugj__lexdiff/.github/workflows/ci.yml)<br>[.github/workflows/rag-eval-weekly.yml](../../../../sources/chrisryugj__lexdiff/.github/workflows/rag-eval-weekly.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 12 | [ui-audit/2026-03-20-23-29.json](../../../../sources/chrisryugj__lexdiff/ui-audit/2026-03-20-23-29.json)<br>[ui-audit/2026-03-20-23-29.md](../../../../sources/chrisryugj__lexdiff/ui-audit/2026-03-20-23-29.md)<br>[ui-audit/screenshots/home-desktop-delay-check.png](../../../../sources/chrisryugj__lexdiff/ui-audit/screenshots/home-desktop-delay-check.png)<br>[ui-audit/screenshots/step-00-home-desktop.png](../../../../sources/chrisryugj__lexdiff/ui-audit/screenshots/step-00-home-desktop.png)<br>[ui-audit/screenshots/step-01-search-result-desktop.png](../../../../sources/chrisryugj__lexdiff/ui-audit/screenshots/step-01-search-result-desktop.png)<br>[ui-audit/screenshots/step-02-home-mobile.png](../../../../sources/chrisryugj__lexdiff/ui-audit/screenshots/step-02-home-mobile.png) |
| 에이전트 지시문 | 2 | [CLAUDE.md](../../../../sources/chrisryugj__lexdiff/CLAUDE.md)<br>[.claude/sync/CLAUDE.md](../../../../sources/chrisryugj__lexdiff/.claude/sync/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `supabase/migrations/001_relation_graph.sql`, `src/domain/index.ts`, `src/domain/search/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `lib/supabase/server.ts`, `demo/src/index.ts`.
3. agent/tool runtime 매핑: `lib/fc-rag/tool-adapter.ts`, `lib/fc-rag/tool-cache.ts`, `lib/fc-rag/tool-registry.ts`.
4. retrieval/memory/indexing 확인: `supabase/migrations/001_relation_graph.sql`, `src/domain/index.ts`, `src/domain/search/index.ts`.
5. test/eval 파일로 동작 검증: `scripts/e2e-fcrag-test.mjs`, `scripts/test-annex-match.ts`, `scripts/test-api-exhaustive.ts`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 한국 법령 AI 검색 — 자연어 질문 → 법령·판례 원문 근거 답변. Verbatim RAG · 신구조문 비교 · 3단 위임법령 · 영향 추적 · 조례 벤치마킹 Next.js 16 · Gemini 3 Flash Ko. 핵심 구조 신호는 TypeScript, package.json, README.md, CLAUDE.md, LICENSE, modelcontextprotocol이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
