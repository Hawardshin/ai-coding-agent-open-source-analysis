# dcostenco/prism-coder Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Persistent memory + local AI for coding agents. 1.7B–32B open-weight LLM fleet, cross-session Mind Palace, cognitive routing, L3 grounding verifier, multi-agent Hivemind. Works with Claude Code, Cursor, VS Code. Offline-first, HIPAA-ready. Free tier included.

## 요약

- 조사 단위: `sources/dcostenco__prism-coder` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 449 files, 87 directories, depth score 129, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=examples/langgraph-agent/mcp_client.py, docs/prism_mcp_demo.mp4, .well-known/mcp/server-card.json이고, 의존성 단서는 openai, anthropic, modelcontextprotocol, commander, transformers, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | dcostenco/prism-coder |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 147 |
| Forks | 24 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/dcostenco__prism-coder](../../../../sources/dcostenco__prism-coder) |
| Existing report | [reports/global-trending/repositories/dcostenco__prism-coder.md](../../../global-trending/repositories/dcostenco__prism-coder.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 449 / 87 |
| Max observed depth | 6 |
| Top directories | .agents, .claude, .github, .well-known, adapters, Brave-Gemini-Research-MCP-Server, docs, examples, packages, scripts, skills, src, supabase, tests, training, vertex-ai |
| Top extensions | .ts: 259, .md: 56, .py: 28, .sql: 27, .json: 16, (none): 11, .jpg: 9, .yml: 9, .png: 5, .js: 4, .mjs: 4, .sh: 4 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
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


## How It Runs

| Category | Source | Name | Command |
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


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | transformers |
| webRuntime | none |
| developerSurface | commander |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
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


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 135 | [benchmark.ts](../../../../sources/dcostenco__prism-coder/benchmark.ts)<br>[test-fallback.ts](../../../../sources/dcostenco__prism-coder/test-fallback.ts)<br>[test-yahoo.ts](../../../../sources/dcostenco__prism-coder/test-yahoo.ts)<br>[vertex-ai/test_claude_vertex.py](../../../../sources/dcostenco__prism-coder/vertex-ai/test_claude_vertex.py)<br>[vertex-ai/test_gemini_vertex.py](../../../../sources/dcostenco__prism-coder/vertex-ai/test_gemini_vertex.py)<br>[vertex-ai/test_hybrid_search_pipeline.ts](../../../../sources/dcostenco__prism-coder/vertex-ai/test_hybrid_search_pipeline.ts) |
| CI workflows | 6 | [.github/workflows/ci.yml](../../../../sources/dcostenco__prism-coder/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/dcostenco__prism-coder/.github/workflows/codeql.yml)<br>[.github/workflows/link-check.yml](../../../../sources/dcostenco__prism-coder/.github/workflows/link-check.yml)<br>[.github/workflows/publish-prism-coder.yml](../../../../sources/dcostenco__prism-coder/.github/workflows/publish-prism-coder.yml)<br>[.github/workflows/publish.yml](../../../../sources/dcostenco__prism-coder/.github/workflows/publish.yml)<br>[.github/workflows/update-i18n.yml](../../../../sources/dcostenco__prism-coder/.github/workflows/update-i18n.yml) |
| Containers / deploy | 3 | [docker-compose.yml](../../../../sources/dcostenco__prism-coder/docker-compose.yml)<br>[Dockerfile](../../../../sources/dcostenco__prism-coder/Dockerfile)<br>[Dockerfile.smithery](../../../../sources/dcostenco__prism-coder/Dockerfile.smithery) |
| Security / policy | 6 | [SECURITY_AUDIT.md](../../../../sources/dcostenco__prism-coder/SECURITY_AUDIT.md)<br>[SECURITY.md](../../../../sources/dcostenco__prism-coder/SECURITY.md)<br>[tests/security-hardening.test.ts](../../../../sources/dcostenco__prism-coder/tests/security-hardening.test.ts)<br>[tests/verification-audit-fixes.test.ts](../../../../sources/dcostenco__prism-coder/tests/verification-audit-fixes.test.ts)<br>[tests/dashboard/auth.test.ts](../../../../sources/dcostenco__prism-coder/tests/dashboard/auth.test.ts)<br>[supabase/migrations/035_rpc_soft_delete_and_write_security.sql](../../../../sources/dcostenco__prism-coder/supabase/migrations/035_rpc_soft_delete_and_write_security.sql) |
| Agent instructions | 1 | [GEMINI.md](../../../../sources/dcostenco__prism-coder/GEMINI.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `examples/langgraph-agent/mcp_client.py`, `docs/prism_mcp_demo.mp4`, `.well-known/mcp/server-card.json`.
2. Trace execution through entrypoints: `server.json`, `src/cli.ts`, `src/server.ts`.
3. Map agent/tool runtime through: `tests/skill-routing.test.ts`, `tests/verification/runner.test.ts`, `tests/tools/cli-load.test.ts`.
4. Inspect retrieval/memory/indexing through: `index.html`, `index.ts`, `tests/test_knowledge_system.js`.
5. Verify behavior through test/eval files: `benchmark.ts`, `test-fallback.ts`, `test-yahoo.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Persistent memory + local AI for coding agents. 1.7B–32B open weight LLM fleet, cross session Mind Palace, cognitive rou. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, docker-compose.yml, README.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
