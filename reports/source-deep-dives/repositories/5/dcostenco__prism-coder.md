# dcostenco/prism-coder 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Persistent memory + local AI for coding agents. 1.7B–32B open-weight LLM fleet, cross-session Mind Palace, cognitive routing, L3 grounding verifier, multi-agent Hivemind. Works with Claude Code, Cursor, VS Code. Offline-first, HIPAA-ready. Free tier included.

## 요약

- 조사 단위: `sources/dcostenco__prism-coder` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 449 files, 87 directories, depth score 123, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=examples/langgraph-agent/mcp_client.py, docs/prism_mcp_demo.mp4, .well-known/mcp/server-card.json이고, 의존성 단서는 openai, anthropic, modelcontextprotocol, commander, transformers, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | dcostenco/prism-coder |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 147 |
| Forks | 24 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/dcostenco__prism-coder](../../../../sources/dcostenco__prism-coder) |
| 기존 보고서 | [reports/global-trending/repositories/dcostenco__prism-coder.md](../../../global-trending/repositories/dcostenco__prism-coder.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 449 / 87 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .agents, .claude, .github, .well-known, adapters, Brave-Gemini-Research-MCP-Server, docs, examples, packages, scripts, skills, src, supabase, tests, training, vertex-ai |
| 상위 확장자 | .ts: 259, .md: 56, .py: 28, .sql: 27, .json: 16, (none): 11, .jpg: 9, .yml: 9, .png: 5, .js: 4, .mjs: 4, .sh: 4 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 56 |
| src | source boundary | 36 |
| docs | documentation surface | 34 |
| examples/langgraph-agent | examples workspace | 3 |
| examples/vercel-ai-sdk-prism | examples workspace | 3 |
| packages/prism-coder | packages workspace | 2 |
| .github | ci surface | 1 |
| adapters | top-level component | 1 |
| Brave-Gemini-Research-MCP-Server | source boundary | 1 |
| examples | top-level component | 1 |
| examples/adversarial-eval-demo | examples workspace | 1 |
| examples/langgraph-ts | examples workspace | 1 |
| examples/multi-agent-hivemind | examples workspace | 1 |
| examples/skills | examples workspace | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| supabase | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | tsc && npm run chmod-bins |
| serve-dev | package.json | chmod-bins | node -e "['dist/cli.js','dist/server.js','dist/utils/universalImporter.js'].forEach(f => { try { require('fs').chmodSync(f, 0o755); } catch (e) { console.warn('chmod skipped', f, e.message); } })" |
| build | package.json | prepublishOnly | npm run build |
| quality | package.json | lint:dashboard | node scripts/lint-dashboard-es5.cjs |
| serve-dev | package.json | start | node dist/server.js |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| test | package.json | test:load | vitest run tests/load/ |
| test | package.json | test:ci | vitest run --reporter=junit --outputFile=test-results.xml |
| test | package.json | test:mcp | node ./test_cross_mcp.js |
| build | package.json | import | node dist/utils/universalImporter.js |
| entrypoint | package.json bin | cli.js | dist/cli.js |
| entrypoint | package.json bin | server.js | dist/server.js |
| entrypoint | package.json bin | server.js | dist/server.js |
| entrypoint | package.json bin | universalImporter.js | dist/utils/universalImporter.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | transformers |
| webRuntime | 없음 |
| developerSurface | commander |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [examples/langgraph-agent/mcp_client.py](../../../../sources/dcostenco__prism-coder/examples/langgraph-agent/mcp_client.py) | mcp signal |
| mcp | [docs/prism_mcp_demo.mp4](../../../../sources/dcostenco__prism-coder/docs/prism_mcp_demo.mp4) | mcp signal |
| mcp | [.well-known/mcp/server-card.json](../../../../sources/dcostenco__prism-coder/.well-known/mcp/server-card.json) | mcp signal |
| agentRuntime | [tests/skill-routing.test.ts](../../../../sources/dcostenco__prism-coder/tests/skill-routing.test.ts) | agentRuntime signal |
| agentRuntime | [tests/verification/runner.test.ts](../../../../sources/dcostenco__prism-coder/tests/verification/runner.test.ts) | agentRuntime signal |
| agentRuntime | [tests/tools/cli-load.test.ts](../../../../sources/dcostenco__prism-coder/tests/tools/cli-load.test.ts) | agentRuntime signal |
| agentRuntime | [tests/tools/cognitiveRoute.test.ts](../../../../sources/dcostenco__prism-coder/tests/tools/cognitiveRoute.test.ts) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/dcostenco__prism-coder/server.json) | entrypoints signal |
| entrypoints | [src/cli.ts](../../../../sources/dcostenco__prism-coder/src/cli.ts) | entrypoints signal |
| entrypoints | [src/server.ts](../../../../sources/dcostenco__prism-coder/src/server.ts) | entrypoints signal |
| entrypoints | [src/dashboard/server.ts](../../../../sources/dcostenco__prism-coder/src/dashboard/server.ts) | entrypoints signal |
| instruction | [GEMINI.md](../../../../sources/dcostenco__prism-coder/GEMINI.md) | instruction signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 6 | [server.json](../../../../sources/dcostenco__prism-coder/server.json)<br>[src/cli.ts](../../../../sources/dcostenco__prism-coder/src/cli.ts)<br>[src/server.ts](../../../../sources/dcostenco__prism-coder/src/server.ts)<br>[src/dashboard/server.ts](../../../../sources/dcostenco__prism-coder/src/dashboard/server.ts)<br>[packages/prism-coder/bin/prism-coder.js](../../../../sources/dcostenco__prism-coder/packages/prism-coder/bin/prism-coder.js)<br>[examples/langgraph-agent/main.py](../../../../sources/dcostenco__prism-coder/examples/langgraph-agent/main.py) |
| agentRuntime | 55 | [tests/skill-routing.test.ts](../../../../sources/dcostenco__prism-coder/tests/skill-routing.test.ts)<br>[tests/verification/runner.test.ts](../../../../sources/dcostenco__prism-coder/tests/verification/runner.test.ts)<br>[tests/tools/cli-load.test.ts](../../../../sources/dcostenco__prism-coder/tests/tools/cli-load.test.ts)<br>[tests/tools/cognitiveRoute.test.ts](../../../../sources/dcostenco__prism-coder/tests/tools/cognitiveRoute.test.ts)<br>[tests/tools/compactionHandler.test.ts](../../../../sources/dcostenco__prism-coder/tests/tools/compactionHandler.test.ts)<br>[tests/tools/definitions.test.ts](../../../../sources/dcostenco__prism-coder/tests/tools/definitions.test.ts)<br>[tests/tools/graphHandlers.test.ts](../../../../sources/dcostenco__prism-coder/tests/tools/graphHandlers.test.ts)<br>[tests/tools/ingestHandler.test.ts](../../../../sources/dcostenco__prism-coder/tests/tools/ingestHandler.test.ts) |
| mcp | 3 | [examples/langgraph-agent/mcp_client.py](../../../../sources/dcostenco__prism-coder/examples/langgraph-agent/mcp_client.py)<br>[docs/prism_mcp_demo.mp4](../../../../sources/dcostenco__prism-coder/docs/prism_mcp_demo.mp4)<br>[.well-known/mcp/server-card.json](../../../../sources/dcostenco__prism-coder/.well-known/mcp/server-card.json) |
| retrieval | 27 | [index.html](../../../../sources/dcostenco__prism-coder/index.html)<br>[index.ts](../../../../sources/dcostenco__prism-coder/index.ts)<br>[tests/test_knowledge_system.js](../../../../sources/dcostenco__prism-coder/tests/test_knowledge_system.js)<br>[tests/v40-behavioral-memory.test.ts](../../../../sources/dcostenco__prism-coder/tests/v40-behavioral-memory.test.ts)<br>[supabase/migrations/015_session_memory.sql](../../../../sources/dcostenco__prism-coder/supabase/migrations/015_session_memory.sql)<br>[supabase/migrations/016_knowledge_accumulation.sql](../../../../sources/dcostenco__prism-coder/supabase/migrations/016_knowledge_accumulation.sql)<br>[supabase/migrations/026_active_behavioral_memory.sql](../../../../sources/dcostenco__prism-coder/supabase/migrations/026_active_behavioral_memory.sql)<br>[supabase/migrations/033_memory_links.sql](../../../../sources/dcostenco__prism-coder/supabase/migrations/033_memory_links.sql) |
| spec | 2 | [ROADMAP.md](../../../../sources/dcostenco__prism-coder/ROADMAP.md)<br>[docs/ARCHITECTURE.md](../../../../sources/dcostenco__prism-coder/docs/ARCHITECTURE.md) |
| eval | 135 | [benchmark.ts](../../../../sources/dcostenco__prism-coder/benchmark.ts)<br>[test-fallback.ts](../../../../sources/dcostenco__prism-coder/test-fallback.ts)<br>[test-yahoo.ts](../../../../sources/dcostenco__prism-coder/test-yahoo.ts)<br>[vertex-ai/test_claude_vertex.py](../../../../sources/dcostenco__prism-coder/vertex-ai/test_claude_vertex.py)<br>[vertex-ai/test_gemini_vertex.py](../../../../sources/dcostenco__prism-coder/vertex-ai/test_gemini_vertex.py)<br>[vertex-ai/test_hybrid_search_pipeline.ts](../../../../sources/dcostenco__prism-coder/vertex-ai/test_hybrid_search_pipeline.ts)<br>[vertex-ai/test_pipeline_benchmark.ts](../../../../sources/dcostenco__prism-coder/vertex-ai/test_pipeline_benchmark.ts)<br>[vertex-ai/test_realworld_comparison.ts](../../../../sources/dcostenco__prism-coder/vertex-ai/test_realworld_comparison.ts) |
| security | 6 | [SECURITY_AUDIT.md](../../../../sources/dcostenco__prism-coder/SECURITY_AUDIT.md)<br>[SECURITY.md](../../../../sources/dcostenco__prism-coder/SECURITY.md)<br>[tests/security-hardening.test.ts](../../../../sources/dcostenco__prism-coder/tests/security-hardening.test.ts)<br>[tests/verification-audit-fixes.test.ts](../../../../sources/dcostenco__prism-coder/tests/verification-audit-fixes.test.ts)<br>[tests/dashboard/auth.test.ts](../../../../sources/dcostenco__prism-coder/tests/dashboard/auth.test.ts)<br>[supabase/migrations/035_rpc_soft_delete_and_write_security.sql](../../../../sources/dcostenco__prism-coder/supabase/migrations/035_rpc_soft_delete_and_write_security.sql) |
| ci | 6 | [.github/workflows/ci.yml](../../../../sources/dcostenco__prism-coder/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/dcostenco__prism-coder/.github/workflows/codeql.yml)<br>[.github/workflows/link-check.yml](../../../../sources/dcostenco__prism-coder/.github/workflows/link-check.yml)<br>[.github/workflows/publish-prism-coder.yml](../../../../sources/dcostenco__prism-coder/.github/workflows/publish-prism-coder.yml)<br>[.github/workflows/publish.yml](../../../../sources/dcostenco__prism-coder/.github/workflows/publish.yml)<br>[.github/workflows/update-i18n.yml](../../../../sources/dcostenco__prism-coder/.github/workflows/update-i18n.yml) |
| container | 3 | [docker-compose.yml](../../../../sources/dcostenco__prism-coder/docker-compose.yml)<br>[Dockerfile](../../../../sources/dcostenco__prism-coder/Dockerfile)<br>[Dockerfile.smithery](../../../../sources/dcostenco__prism-coder/Dockerfile.smithery) |
| instruction | 1 | [GEMINI.md](../../../../sources/dcostenco__prism-coder/GEMINI.md) |
| docs | 53 | [README.md](../../../../sources/dcostenco__prism-coder/README.md)<br>[tests/README.md](../../../../sources/dcostenco__prism-coder/tests/README.md)<br>[tests/benchmarks/prism-routing-100/README.md](../../../../sources/dcostenco__prism-coder/tests/benchmarks/prism-routing-100/README.md)<br>[tests/benchmarks/locomo-plus-cognitive/README.md](../../../../sources/dcostenco__prism-coder/tests/benchmarks/locomo-plus-cognitive/README.md)<br>[tests/benchmarks/cascade-14b-32b-opus/README.md](../../../../sources/dcostenco__prism-coder/tests/benchmarks/cascade-14b-32b-opus/README.md)<br>[examples/vercel-ai-sdk-prism/README.md](../../../../sources/dcostenco__prism-coder/examples/vercel-ai-sdk-prism/README.md)<br>[examples/skills/aba-precision-protocol/README.md](../../../../sources/dcostenco__prism-coder/examples/skills/aba-precision-protocol/README.md)<br>[examples/multi-agent-hivemind/README.md](../../../../sources/dcostenco__prism-coder/examples/multi-agent-hivemind/README.md) |
| config | 5 | [package.json](../../../../sources/dcostenco__prism-coder/package.json)<br>[tsconfig.json](../../../../sources/dcostenco__prism-coder/tsconfig.json)<br>[packages/prism-coder/package.json](../../../../sources/dcostenco__prism-coder/packages/prism-coder/package.json)<br>[examples/vercel-ai-sdk-prism/package.json](../../../../sources/dcostenco__prism-coder/examples/vercel-ai-sdk-prism/package.json)<br>[examples/vercel-ai-sdk-prism/tsconfig.json](../../../../sources/dcostenco__prism-coder/examples/vercel-ai-sdk-prism/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 135 | [benchmark.ts](../../../../sources/dcostenco__prism-coder/benchmark.ts)<br>[test-fallback.ts](../../../../sources/dcostenco__prism-coder/test-fallback.ts)<br>[test-yahoo.ts](../../../../sources/dcostenco__prism-coder/test-yahoo.ts)<br>[vertex-ai/test_claude_vertex.py](../../../../sources/dcostenco__prism-coder/vertex-ai/test_claude_vertex.py)<br>[vertex-ai/test_gemini_vertex.py](../../../../sources/dcostenco__prism-coder/vertex-ai/test_gemini_vertex.py)<br>[vertex-ai/test_hybrid_search_pipeline.ts](../../../../sources/dcostenco__prism-coder/vertex-ai/test_hybrid_search_pipeline.ts) |
| CI workflow | 6 | [.github/workflows/ci.yml](../../../../sources/dcostenco__prism-coder/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/dcostenco__prism-coder/.github/workflows/codeql.yml)<br>[.github/workflows/link-check.yml](../../../../sources/dcostenco__prism-coder/.github/workflows/link-check.yml)<br>[.github/workflows/publish-prism-coder.yml](../../../../sources/dcostenco__prism-coder/.github/workflows/publish-prism-coder.yml)<br>[.github/workflows/publish.yml](../../../../sources/dcostenco__prism-coder/.github/workflows/publish.yml)<br>[.github/workflows/update-i18n.yml](../../../../sources/dcostenco__prism-coder/.github/workflows/update-i18n.yml) |
| 컨테이너/배포 | 3 | [docker-compose.yml](../../../../sources/dcostenco__prism-coder/docker-compose.yml)<br>[Dockerfile](../../../../sources/dcostenco__prism-coder/Dockerfile)<br>[Dockerfile.smithery](../../../../sources/dcostenco__prism-coder/Dockerfile.smithery) |
| 보안/정책 | 6 | [SECURITY_AUDIT.md](../../../../sources/dcostenco__prism-coder/SECURITY_AUDIT.md)<br>[SECURITY.md](../../../../sources/dcostenco__prism-coder/SECURITY.md)<br>[tests/security-hardening.test.ts](../../../../sources/dcostenco__prism-coder/tests/security-hardening.test.ts)<br>[tests/verification-audit-fixes.test.ts](../../../../sources/dcostenco__prism-coder/tests/verification-audit-fixes.test.ts)<br>[tests/dashboard/auth.test.ts](../../../../sources/dcostenco__prism-coder/tests/dashboard/auth.test.ts)<br>[supabase/migrations/035_rpc_soft_delete_and_write_security.sql](../../../../sources/dcostenco__prism-coder/supabase/migrations/035_rpc_soft_delete_and_write_security.sql) |
| 에이전트 지시문 | 1 | [GEMINI.md](../../../../sources/dcostenco__prism-coder/GEMINI.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `examples/langgraph-agent/mcp_client.py`, `docs/prism_mcp_demo.mp4`, `.well-known/mcp/server-card.json`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`, `src/cli.ts`, `src/server.ts`.
3. agent/tool runtime 매핑: `tests/skill-routing.test.ts`, `tests/verification/runner.test.ts`, `tests/tools/cli-load.test.ts`.
4. retrieval/memory/indexing 확인: `index.html`, `index.ts`, `tests/test_knowledge_system.js`.
5. test/eval 파일로 동작 검증: `benchmark.ts`, `test-fallback.ts`, `test-yahoo.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Persistent memory + local AI for coding agents. 1.7B–32B open weight LLM fleet, cross session Mind Palace, cognitive rou. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, docker-compose.yml, README.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
