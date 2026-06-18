# xr843/fojin Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Buddhist Digital Text Platform — 9,200+ texts, 500+ sources, 8 UI languages, AI Q&A (RAG), knowledge graph, full-text search

## 요약

- 조사 단위: `sources/xr843__fojin` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 845 files, 71 directories, depth score 116, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=workers/prerender/src/index.ts, frontend/index.html, frontend/src/components/search/index.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | xr843/fojin |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 312 |
| Forks | 53 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/xr843__fojin](../../../../sources/xr843__fojin) |
| Existing report | [reports/llm-wiki/repositories/xr843__fojin.md](../../../llm-wiki/repositories/xr843__fojin.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 845 / 71 |
| Max observed depth | 5 |
| Top directories | .github, backend, datasets, docs, e2e, elasticsearch, frontend, workers |
| Top extensions | .py: 480, .woff2: 104, .tsx: 94, .ts: 49, .md: 30, .css: 18, .json: 16, (none): 11, .yml: 9, .png: 8, .sh: 5, .svg: 5 |
| Source patterns | cli-first, api/server, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 37 |
| .github | ci surface | 1 |
| backend | top-level component | 1 |
| datasets | top-level component | 1 |
| e2e | validation surface | 1 |
| elasticsearch | top-level component | 1 |
| frontend | top-level component | 1 |
| workers | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


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
| retrieval | [workers/prerender/src/index.ts](../../../../sources/xr843__fojin/workers/prerender/src/index.ts) | retrieval signal |
| retrieval | [frontend/index.html](../../../../sources/xr843__fojin/frontend/index.html) | retrieval signal |
| retrieval | [frontend/src/components/search/index.ts](../../../../sources/xr843__fojin/frontend/src/components/search/index.ts) | retrieval signal |
| retrieval | [backend/tests/test_precise_retrieval.py](../../../../sources/xr843__fojin/backend/tests/test_precise_retrieval.py) | retrieval signal |
| entrypoints | [frontend/src/App.tsx](../../../../sources/xr843__fojin/frontend/src/App.tsx) | entrypoints signal |
| entrypoints | [frontend/src/main.tsx](../../../../sources/xr843__fojin/frontend/src/main.tsx) | entrypoints signal |
| entrypoints | [backend/app/main.py](../../../../sources/xr843__fojin/backend/app/main.py) | entrypoints signal |
| docs | [README.md](../../../../sources/xr843__fojin/README.md) | docs signal |
| docs | [docs/CONTRIBUTING_zh.md](../../../../sources/xr843__fojin/docs/CONTRIBUTING_zh.md) | docs signal |
| docs | [docs/mitra-alignment-integration.md](../../../../sources/xr843__fojin/docs/mitra-alignment-integration.md) | docs signal |
| docs | [docs/README_zh.md](../../../../sources/xr843__fojin/docs/README_zh.md) | docs signal |
| eval | [frontend/src/utils/citationMatch.test.ts](../../../../sources/xr843__fojin/frontend/src/utils/citationMatch.test.ts) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [workers/prerender/src/index.ts](../../../../sources/xr843__fojin/workers/prerender/src/index.ts)<br>[frontend/src/App.tsx](../../../../sources/xr843__fojin/frontend/src/App.tsx)<br>[frontend/src/main.tsx](../../../../sources/xr843__fojin/frontend/src/main.tsx)<br>[backend/app/main.py](../../../../sources/xr843__fojin/backend/app/main.py) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 24 | [workers/prerender/src/index.ts](../../../../sources/xr843__fojin/workers/prerender/src/index.ts)<br>[frontend/index.html](../../../../sources/xr843__fojin/frontend/index.html)<br>[frontend/src/components/search/index.ts](../../../../sources/xr843__fojin/frontend/src/components/search/index.ts)<br>[backend/tests/test_precise_retrieval.py](../../../../sources/xr843__fojin/backend/tests/test_precise_retrieval.py)<br>[backend/tests/test_rag_parallel_chunks_bulk.py](../../../../sources/xr843__fojin/backend/tests/test_rag_parallel_chunks_bulk.py)<br>[backend/scripts/archive/seed/seed_knowledge_graph.py](../../../../sources/xr843__fojin/backend/scripts/archive/seed/seed_knowledge_graph.py)<br>[backend/scripts/archive/misc/embedding_server.py](../../../../sources/xr843__fojin/backend/scripts/archive/misc/embedding_server.py)<br>[backend/scripts/archive/misc/init_es_index.py](../../../../sources/xr843__fojin/backend/scripts/archive/misc/init_es_index.py) |
| spec | 12 | [frontend/e2e/homepage.spec.ts](../../../../sources/xr843__fojin/frontend/e2e/homepage.spec.ts)<br>[frontend/e2e/navigation.spec.ts](../../../../sources/xr843__fojin/frontend/e2e/navigation.spec.ts)<br>[frontend/e2e/search.spec.ts](../../../../sources/xr843__fojin/frontend/e2e/search.spec.ts)<br>[e2e/tests/smoke.spec.ts](../../../../sources/xr843__fojin/e2e/tests/smoke.spec.ts)<br>[docs/superpowers/specs/2026-03-22-timeline-dashboard-design.md](../../../../sources/xr843__fojin/docs/superpowers/specs/2026-03-22-timeline-dashboard-design.md)<br>[docs/superpowers/specs/2026-03-24-admin-dashboard-design.md](../../../../sources/xr843__fojin/docs/superpowers/specs/2026-03-24-admin-dashboard-design.md)<br>[docs/superpowers/specs/2026-03-30-umami-analytics-design.md](../../../../sources/xr843__fojin/docs/superpowers/specs/2026-03-30-umami-analytics-design.md)<br>[docs/superpowers/specs/2026-06-03-cross-canon-parallel-reading-v1-design.md](../../../../sources/xr843__fojin/docs/superpowers/specs/2026-06-03-cross-canon-parallel-reading-v1-design.md) |
| eval | 80 | [frontend/src/utils/citationMatch.test.ts](../../../../sources/xr843__fojin/frontend/src/utils/citationMatch.test.ts)<br>[frontend/src/utils/sanitize.test.ts](../../../../sources/xr843__fojin/frontend/src/utils/sanitize.test.ts)<br>[frontend/src/types/branded.test.ts](../../../../sources/xr843__fojin/frontend/src/types/branded.test.ts)<br>[frontend/src/test/setup.ts](../../../../sources/xr843__fojin/frontend/src/test/setup.ts)<br>[frontend/src/stores/authStore.test.ts](../../../../sources/xr843__fojin/frontend/src/stores/authStore.test.ts)<br>[frontend/src/pages/WorkDetailPage.test.tsx](../../../../sources/xr843__fojin/frontend/src/pages/WorkDetailPage.test.tsx)<br>[frontend/src/pages/sources/SourceCard.test.tsx](../../../../sources/xr843__fojin/frontend/src/pages/sources/SourceCard.test.tsx)<br>[frontend/src/components/OtherVersions.test.tsx](../../../../sources/xr843__fojin/frontend/src/components/OtherVersions.test.tsx) |
| security | 29 | [SECURITY.md](../../../../sources/xr843__fojin/SECURITY.md)<br>[docs/works-audit/2026-06-01-findings.md](../../../../sources/xr843__fojin/docs/works-audit/2026-06-01-findings.md)<br>[docs/superpowers/plans/2026-06-01-frbr-works-quality-audit.md](../../../../sources/xr843__fojin/docs/superpowers/plans/2026-06-01-frbr-works-quality-audit.md)<br>[backend/tests/test_audit_works.py](../../../../sources/xr843__fojin/backend/tests/test_audit_works.py)<br>[backend/tests/test_auth.py](../../../../sources/xr843__fojin/backend/tests/test_auth.py)<br>[backend/tests/test_chat_stream_token_auth.py](../../../../sources/xr843__fojin/backend/tests/test_chat_stream_token_auth.py)<br>[backend/tests/test_citation_guard.py](../../../../sources/xr843__fojin/backend/tests/test_citation_guard.py)<br>[backend/tests/test_oauth_exchange.py](../../../../sources/xr843__fojin/backend/tests/test_oauth_exchange.py) |
| ci | 5 | [.github/workflows/alembic-dry-run.yml](../../../../sources/xr843__fojin/.github/workflows/alembic-dry-run.yml)<br>[.github/workflows/ci.yml](../../../../sources/xr843__fojin/.github/workflows/ci.yml)<br>[.github/workflows/security.yml](../../../../sources/xr843__fojin/.github/workflows/security.yml)<br>[.github/workflows/smoke.yml](../../../../sources/xr843__fojin/.github/workflows/smoke.yml)<br>[.github/workflows/stale.yml](../../../../sources/xr843__fojin/.github/workflows/stale.yml) |
| container | 4 | [docker-compose.yml](../../../../sources/xr843__fojin/docker-compose.yml)<br>[frontend/Dockerfile](../../../../sources/xr843__fojin/frontend/Dockerfile)<br>[elasticsearch/Dockerfile](../../../../sources/xr843__fojin/elasticsearch/Dockerfile)<br>[backend/Dockerfile](../../../../sources/xr843__fojin/backend/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 29 | [README.md](../../../../sources/xr843__fojin/README.md)<br>[docs/CONTRIBUTING_zh.md](../../../../sources/xr843__fojin/docs/CONTRIBUTING_zh.md)<br>[docs/mitra-alignment-integration.md](../../../../sources/xr843__fojin/docs/mitra-alignment-integration.md)<br>[docs/README_zh.md](../../../../sources/xr843__fojin/docs/README_zh.md)<br>[docs/SEO_SETUP.md](../../../../sources/xr843__fojin/docs/SEO_SETUP.md)<br>[docs/works-audit/2026-06-01-findings.md](../../../../sources/xr843__fojin/docs/works-audit/2026-06-01-findings.md)<br>[docs/superpowers/specs/2026-03-22-timeline-dashboard-design.md](../../../../sources/xr843__fojin/docs/superpowers/specs/2026-03-22-timeline-dashboard-design.md)<br>[docs/superpowers/specs/2026-03-24-admin-dashboard-design.md](../../../../sources/xr843__fojin/docs/superpowers/specs/2026-03-24-admin-dashboard-design.md) |
| config | 8 | [workers/prerender/package.json](../../../../sources/xr843__fojin/workers/prerender/package.json)<br>[workers/prerender/tsconfig.json](../../../../sources/xr843__fojin/workers/prerender/tsconfig.json)<br>[frontend/package.json](../../../../sources/xr843__fojin/frontend/package.json)<br>[frontend/tsconfig.json](../../../../sources/xr843__fojin/frontend/tsconfig.json)<br>[e2e/package.json](../../../../sources/xr843__fojin/e2e/package.json)<br>[backend/pyproject.toml](../../../../sources/xr843__fojin/backend/pyproject.toml)<br>[backend/requirements-dev.txt](../../../../sources/xr843__fojin/backend/requirements-dev.txt)<br>[backend/requirements.txt](../../../../sources/xr843__fojin/backend/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 80 | [frontend/src/utils/citationMatch.test.ts](../../../../sources/xr843__fojin/frontend/src/utils/citationMatch.test.ts)<br>[frontend/src/utils/sanitize.test.ts](../../../../sources/xr843__fojin/frontend/src/utils/sanitize.test.ts)<br>[frontend/src/types/branded.test.ts](../../../../sources/xr843__fojin/frontend/src/types/branded.test.ts)<br>[frontend/src/test/setup.ts](../../../../sources/xr843__fojin/frontend/src/test/setup.ts)<br>[frontend/src/stores/authStore.test.ts](../../../../sources/xr843__fojin/frontend/src/stores/authStore.test.ts)<br>[frontend/src/pages/WorkDetailPage.test.tsx](../../../../sources/xr843__fojin/frontend/src/pages/WorkDetailPage.test.tsx) |
| CI workflows | 5 | [.github/workflows/alembic-dry-run.yml](../../../../sources/xr843__fojin/.github/workflows/alembic-dry-run.yml)<br>[.github/workflows/ci.yml](../../../../sources/xr843__fojin/.github/workflows/ci.yml)<br>[.github/workflows/security.yml](../../../../sources/xr843__fojin/.github/workflows/security.yml)<br>[.github/workflows/smoke.yml](../../../../sources/xr843__fojin/.github/workflows/smoke.yml)<br>[.github/workflows/stale.yml](../../../../sources/xr843__fojin/.github/workflows/stale.yml) |
| Containers / deploy | 4 | [docker-compose.yml](../../../../sources/xr843__fojin/docker-compose.yml)<br>[frontend/Dockerfile](../../../../sources/xr843__fojin/frontend/Dockerfile)<br>[elasticsearch/Dockerfile](../../../../sources/xr843__fojin/elasticsearch/Dockerfile)<br>[backend/Dockerfile](../../../../sources/xr843__fojin/backend/Dockerfile) |
| Security / policy | 29 | [SECURITY.md](../../../../sources/xr843__fojin/SECURITY.md)<br>[docs/works-audit/2026-06-01-findings.md](../../../../sources/xr843__fojin/docs/works-audit/2026-06-01-findings.md)<br>[docs/superpowers/plans/2026-06-01-frbr-works-quality-audit.md](../../../../sources/xr843__fojin/docs/superpowers/plans/2026-06-01-frbr-works-quality-audit.md)<br>[backend/tests/test_audit_works.py](../../../../sources/xr843__fojin/backend/tests/test_audit_works.py)<br>[backend/tests/test_auth.py](../../../../sources/xr843__fojin/backend/tests/test_auth.py)<br>[backend/tests/test_chat_stream_token_auth.py](../../../../sources/xr843__fojin/backend/tests/test_chat_stream_token_auth.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `workers/prerender/src/index.ts`, `frontend/index.html`, `frontend/src/components/search/index.ts`.
2. Trace execution through entrypoints: `workers/prerender/src/index.ts`, `frontend/src/App.tsx`, `frontend/src/main.tsx`.
3. Inspect retrieval/memory/indexing through: `workers/prerender/src/index.ts`, `frontend/index.html`, `frontend/src/components/search/index.ts`.
4. Verify behavior through test/eval files: `frontend/src/utils/citationMatch.test.ts`, `frontend/src/utils/sanitize.test.ts`, `frontend/src/types/branded.test.ts`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Buddhist Digital Text Platform — 9,200+ texts, 500+ sources, 8 UI languages, AI Q&A RAG , knowledge graph, full text sea. 핵심 구조 신호는 Python, docker-compose.yml, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
