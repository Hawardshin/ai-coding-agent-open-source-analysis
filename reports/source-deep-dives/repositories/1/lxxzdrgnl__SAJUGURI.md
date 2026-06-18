# lxxzdrgnl/SAJUGURI Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

AI-Powered Saju(Korean Astrology) Analysis Service (Built with LLM & RAG)

## 요약

- 조사 단위: `sources/lxxzdrgnl__SAJUGURI` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 558 files, 114 directories, depth score 125, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 retrieval=packages/design/src/index.ts, packages/core/src/index.ts, packages/api-client/src/index.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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


## Repository Context

| Field | Value |
| --- | --- |
| Repository | lxxzdrgnl/SAJUGURI |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/lxxzdrgnl__SAJUGURI](../../../../sources/lxxzdrgnl__SAJUGURI) |
| Existing report | [reports/korea-trending/repositories/lxxzdrgnl__SAJUGURI.md](../../../korea-trending/repositories/lxxzdrgnl__SAJUGURI.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 558 / 114 |
| Max observed depth | 8 |
| Top directories | .claude, .github, apps, backend, docs, frontend, packages, screenshot |
| Top extensions | .py: 216, .ts: 105, .tsx: 95, .vue: 40, .md: 28, .json: 21, (none): 11, .png: 9, .svg: 6, .webp: 5, .mjs: 4, .yaml: 4 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 32 |
| packages/api-client | packages workspace | 17 |
| packages/design | packages workspace | 10 |
| packages/core | packages workspace | 8 |
| apps/web | apps workspace | 6 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| backend | top-level component | 1 |
| frontend | top-level component | 1 |
| packages | source boundary | 1 |
| screenshot | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | turbo dev --filter=web |
| build | package.json | build | turbo build |
| test | package.json | test | turbo test |
| quality | package.json | typecheck | turbo typecheck |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [packages/design/src/index.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/design/src/index.ts) | retrieval signal |
| retrieval | [packages/core/src/index.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/core/src/index.ts) | retrieval signal |
| retrieval | [packages/api-client/src/index.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/api-client/src/index.ts) | retrieval signal |
| retrieval | [frontend/pages/index.vue](../../../../sources/lxxzdrgnl__SAJUGURI/frontend/pages/index.vue) | retrieval signal |
| entrypoints | [backend/main.py](../../../../sources/lxxzdrgnl__SAJUGURI/backend/main.py) | entrypoints signal |
| docs | [README.md](../../../../sources/lxxzdrgnl__SAJUGURI/README.md) | docs signal |
| docs | [frontend/README.md](../../../../sources/lxxzdrgnl__SAJUGURI/frontend/README.md) | docs signal |
| docs | [docs/deploy-web-server.md](../../../../sources/lxxzdrgnl__SAJUGURI/docs/deploy-web-server.md) | docs signal |
| docs | [docs/design.md](../../../../sources/lxxzdrgnl__SAJUGURI/docs/design.md) | docs signal |
| eval | [packages/design/src/tokens.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/design/src/tokens.test.ts) | eval signal |
| eval | [packages/core/src/recentInput.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/core/src/recentInput.test.ts) | eval signal |
| eval | [packages/core/src/solar.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/core/src/solar.test.ts) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [packages/design/src/index.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/design/src/index.ts)<br>[packages/core/src/index.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/core/src/index.ts)<br>[packages/api-client/src/index.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/api-client/src/index.ts)<br>[backend/main.py](../../../../sources/lxxzdrgnl__SAJUGURI/backend/main.py) |
| agentRuntime | 8 | [AGENTS.md](../../../../sources/lxxzdrgnl__SAJUGURI/AGENTS.md)<br>[backend/llm/tools/__init__.py](../../../../sources/lxxzdrgnl__SAJUGURI/backend/llm/tools/__init__.py)<br>[backend/llm/tools/chart_payloads.py](../../../../sources/lxxzdrgnl__SAJUGURI/backend/llm/tools/chart_payloads.py)<br>[backend/llm/tools/saju_tools.py](../../../../sources/lxxzdrgnl__SAJUGURI/backend/llm/tools/saju_tools.py)<br>[backend/llm/reports/runner.py](../../../../sources/lxxzdrgnl__SAJUGURI/backend/llm/reports/runner.py)<br>[backend/engine/analysis/context_ranker.py](../../../../sources/lxxzdrgnl__SAJUGURI/backend/engine/analysis/context_ranker.py)<br>[apps/web/lib/hooks/useGenerationJob.ts](../../../../sources/lxxzdrgnl__SAJUGURI/apps/web/lib/hooks/useGenerationJob.ts)<br>[apps/web/lib/hooks/useShareModal.ts](../../../../sources/lxxzdrgnl__SAJUGURI/apps/web/lib/hooks/useShareModal.ts) |
| mcp | 0 | not obvious |
| retrieval | 21 | [packages/design/src/index.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/design/src/index.ts)<br>[packages/core/src/index.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/core/src/index.ts)<br>[packages/api-client/src/index.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/api-client/src/index.ts)<br>[frontend/pages/index.vue](../../../../sources/lxxzdrgnl__SAJUGURI/frontend/pages/index.vue)<br>[frontend/pages/question/index.vue](../../../../sources/lxxzdrgnl__SAJUGURI/frontend/pages/question/index.vue)<br>[frontend/pages/daily/index.vue](../../../../sources/lxxzdrgnl__SAJUGURI/frontend/pages/daily/index.vue)<br>[frontend/pages/chat/index.vue](../../../../sources/lxxzdrgnl__SAJUGURI/frontend/pages/chat/index.vue)<br>[backend/scripts/etl/ingest_corpus.py](../../../../sources/lxxzdrgnl__SAJUGURI/backend/scripts/etl/ingest_corpus.py) |
| spec | 11 | [packages/design/package.json](../../../../sources/lxxzdrgnl__SAJUGURI/packages/design/package.json)<br>[packages/design/tsconfig.json](../../../../sources/lxxzdrgnl__SAJUGURI/packages/design/tsconfig.json)<br>[packages/design/src/index.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/design/src/index.ts)<br>[packages/design/src/tokens.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/design/src/tokens.test.ts)<br>[packages/design/src/tokens.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/design/src/tokens.ts)<br>[docs/design.md](../../../../sources/lxxzdrgnl__SAJUGURI/docs/design.md)<br>[docs/superpowers/specs/2026-04-30-chat-agent-design.md](../../../../sources/lxxzdrgnl__SAJUGURI/docs/superpowers/specs/2026-04-30-chat-agent-design.md)<br>[docs/superpowers/specs/2026-06-02-multi-domain-divination-platform-design.md](../../../../sources/lxxzdrgnl__SAJUGURI/docs/superpowers/specs/2026-06-02-multi-domain-divination-platform-design.md) |
| eval | 87 | [packages/design/src/tokens.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/design/src/tokens.test.ts)<br>[packages/core/src/recentInput.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/core/src/recentInput.test.ts)<br>[packages/core/src/solar.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/core/src/solar.test.ts)<br>[packages/core/src/sse.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/core/src/sse.test.ts)<br>[packages/core/src/storage.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/core/src/storage.test.ts)<br>[packages/api-client/src/auth.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/api-client/src/auth.test.ts)<br>[packages/api-client/src/chat.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/api-client/src/chat.test.ts)<br>[packages/api-client/src/cities.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/api-client/src/cities.test.ts) |
| security | 16 | [packages/api-client/src/auth.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/api-client/src/auth.test.ts)<br>[packages/api-client/src/auth.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/api-client/src/auth.ts)<br>[frontend/stores/auth.ts](../../../../sources/lxxzdrgnl__SAJUGURI/frontend/stores/auth.ts)<br>[frontend/plugins/auth.client.ts](../../../../sources/lxxzdrgnl__SAJUGURI/frontend/plugins/auth.client.ts)<br>[frontend/pages/auth/callback.vue](../../../../sources/lxxzdrgnl__SAJUGURI/frontend/pages/auth/callback.vue)<br>[docs/superpowers/plans/2026-06-12-phase1b-auth-profiles-deploy.md](../../../../sources/lxxzdrgnl__SAJUGURI/docs/superpowers/plans/2026-06-12-phase1b-auth-profiles-deploy.md)<br>[backend/tests/test_auth_cookie.py](../../../../sources/lxxzdrgnl__SAJUGURI/backend/tests/test_auth_cookie.py)<br>[backend/tests/test_auth_native_mode.py](../../../../sources/lxxzdrgnl__SAJUGURI/backend/tests/test_auth_native_mode.py) |
| ci | 2 | [.github/workflows/deploy-backend.yml](../../../../sources/lxxzdrgnl__SAJUGURI/.github/workflows/deploy-backend.yml)<br>[.github/workflows/deploy-web.yml](../../../../sources/lxxzdrgnl__SAJUGURI/.github/workflows/deploy-web.yml) |
| container | 4 | [docker-compose.yml](../../../../sources/lxxzdrgnl__SAJUGURI/docker-compose.yml)<br>[frontend/Dockerfile](../../../../sources/lxxzdrgnl__SAJUGURI/frontend/Dockerfile)<br>[backend/Dockerfile](../../../../sources/lxxzdrgnl__SAJUGURI/backend/Dockerfile)<br>[apps/web/Dockerfile](../../../../sources/lxxzdrgnl__SAJUGURI/apps/web/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/lxxzdrgnl__SAJUGURI/AGENTS.md) |
| docs | 28 | [README.md](../../../../sources/lxxzdrgnl__SAJUGURI/README.md)<br>[frontend/README.md](../../../../sources/lxxzdrgnl__SAJUGURI/frontend/README.md)<br>[docs/deploy-web-server.md](../../../../sources/lxxzdrgnl__SAJUGURI/docs/deploy-web-server.md)<br>[docs/design.md](../../../../sources/lxxzdrgnl__SAJUGURI/docs/design.md)<br>[docs/superpowers/specs/2026-04-30-chat-agent-design.md](../../../../sources/lxxzdrgnl__SAJUGURI/docs/superpowers/specs/2026-04-30-chat-agent-design.md)<br>[docs/superpowers/specs/2026-06-02-multi-domain-divination-platform-design.md](../../../../sources/lxxzdrgnl__SAJUGURI/docs/superpowers/specs/2026-06-02-multi-domain-divination-platform-design.md)<br>[docs/superpowers/specs/2026-06-12-mobile-ui-overhaul-design.md](../../../../sources/lxxzdrgnl__SAJUGURI/docs/superpowers/specs/2026-06-12-mobile-ui-overhaul-design.md)<br>[docs/superpowers/specs/2026-06-13-compatibility-report-design.md](../../../../sources/lxxzdrgnl__SAJUGURI/docs/superpowers/specs/2026-06-13-compatibility-report-design.md) |
| config | 17 | [package.json](../../../../sources/lxxzdrgnl__SAJUGURI/package.json)<br>[pnpm-workspace.yaml](../../../../sources/lxxzdrgnl__SAJUGURI/pnpm-workspace.yaml)<br>[turbo.json](../../../../sources/lxxzdrgnl__SAJUGURI/turbo.json)<br>[packages/design/package.json](../../../../sources/lxxzdrgnl__SAJUGURI/packages/design/package.json)<br>[packages/design/tsconfig.json](../../../../sources/lxxzdrgnl__SAJUGURI/packages/design/tsconfig.json)<br>[packages/core/package.json](../../../../sources/lxxzdrgnl__SAJUGURI/packages/core/package.json)<br>[packages/core/tsconfig.json](../../../../sources/lxxzdrgnl__SAJUGURI/packages/core/tsconfig.json)<br>[packages/api-client/package.json](../../../../sources/lxxzdrgnl__SAJUGURI/packages/api-client/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 87 | [packages/design/src/tokens.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/design/src/tokens.test.ts)<br>[packages/core/src/recentInput.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/core/src/recentInput.test.ts)<br>[packages/core/src/solar.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/core/src/solar.test.ts)<br>[packages/core/src/sse.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/core/src/sse.test.ts)<br>[packages/core/src/storage.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/core/src/storage.test.ts)<br>[packages/api-client/src/auth.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/api-client/src/auth.test.ts) |
| CI workflows | 2 | [.github/workflows/deploy-backend.yml](../../../../sources/lxxzdrgnl__SAJUGURI/.github/workflows/deploy-backend.yml)<br>[.github/workflows/deploy-web.yml](../../../../sources/lxxzdrgnl__SAJUGURI/.github/workflows/deploy-web.yml) |
| Containers / deploy | 4 | [docker-compose.yml](../../../../sources/lxxzdrgnl__SAJUGURI/docker-compose.yml)<br>[frontend/Dockerfile](../../../../sources/lxxzdrgnl__SAJUGURI/frontend/Dockerfile)<br>[backend/Dockerfile](../../../../sources/lxxzdrgnl__SAJUGURI/backend/Dockerfile)<br>[apps/web/Dockerfile](../../../../sources/lxxzdrgnl__SAJUGURI/apps/web/Dockerfile) |
| Security / policy | 16 | [packages/api-client/src/auth.test.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/api-client/src/auth.test.ts)<br>[packages/api-client/src/auth.ts](../../../../sources/lxxzdrgnl__SAJUGURI/packages/api-client/src/auth.ts)<br>[frontend/stores/auth.ts](../../../../sources/lxxzdrgnl__SAJUGURI/frontend/stores/auth.ts)<br>[frontend/plugins/auth.client.ts](../../../../sources/lxxzdrgnl__SAJUGURI/frontend/plugins/auth.client.ts)<br>[frontend/pages/auth/callback.vue](../../../../sources/lxxzdrgnl__SAJUGURI/frontend/pages/auth/callback.vue)<br>[docs/superpowers/plans/2026-06-12-phase1b-auth-profiles-deploy.md](../../../../sources/lxxzdrgnl__SAJUGURI/docs/superpowers/plans/2026-06-12-phase1b-auth-profiles-deploy.md) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/lxxzdrgnl__SAJUGURI/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `packages/design/src/index.ts`, `packages/core/src/index.ts`, `packages/api-client/src/index.ts`.
2. Trace execution through entrypoints: `packages/design/src/index.ts`, `packages/core/src/index.ts`, `packages/api-client/src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `backend/llm/tools/__init__.py`, `backend/llm/tools/chart_payloads.py`.
4. Inspect retrieval/memory/indexing through: `packages/design/src/index.ts`, `packages/core/src/index.ts`, `packages/api-client/src/index.ts`.
5. Verify behavior through test/eval files: `packages/design/src/tokens.test.ts`, `packages/core/src/recentInput.test.ts`, `packages/core/src/solar.test.ts`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 AI Powered Saju Korean Astrology Analysis Service Built with LLM & RAG. 핵심 구조 신호는 Python, package.json, docker-compose.yml, README.md, AGENTS.md, ci이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
