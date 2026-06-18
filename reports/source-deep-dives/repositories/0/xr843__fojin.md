# xr843/fojin 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Buddhist Digital Text Platform — 9,200+ texts, 500+ sources, 8 UI languages, AI Q&A (RAG), knowledge graph, full-text search

## 요약

- 조사 단위: `sources/xr843__fojin` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 845 files, 71 directories, depth score 110, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=workers/prerender/src/index.ts, frontend/index.html, frontend/src/components/search/index.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | xr843/fojin |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 312 |
| Forks | 53 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/xr843__fojin](../../../../sources/xr843__fojin) |
| 기존 보고서 | [reports/llm-wiki/repositories/xr843__fojin.md](../../../llm-wiki/repositories/xr843__fojin.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 845 / 71 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, backend, datasets, docs, e2e, elasticsearch, frontend, workers |
| 상위 확장자 | .py: 480, .woff2: 104, .tsx: 94, .ts: 49, .md: 30, .css: 18, .json: 16, (none): 11, .yml: 9, .png: 8, .sh: 5, .svg: 5 |
| 소스 패턴 | cli-first, api/server, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 37 |
| .github | ci surface | 1 |
| backend | top-level component | 1 |
| datasets | top-level component | 1 |
| e2e | validation surface | 1 |
| elasticsearch | top-level component | 1 |
| frontend | top-level component | 1 |
| workers | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [workers/prerender/src/index.ts](../../../../sources/xr843__fojin/workers/prerender/src/index.ts)<br>[frontend/src/App.tsx](../../../../sources/xr843__fojin/frontend/src/App.tsx)<br>[frontend/src/main.tsx](../../../../sources/xr843__fojin/frontend/src/main.tsx)<br>[backend/app/main.py](../../../../sources/xr843__fojin/backend/app/main.py) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 24 | [workers/prerender/src/index.ts](../../../../sources/xr843__fojin/workers/prerender/src/index.ts)<br>[frontend/index.html](../../../../sources/xr843__fojin/frontend/index.html)<br>[frontend/src/components/search/index.ts](../../../../sources/xr843__fojin/frontend/src/components/search/index.ts)<br>[backend/tests/test_precise_retrieval.py](../../../../sources/xr843__fojin/backend/tests/test_precise_retrieval.py)<br>[backend/tests/test_rag_parallel_chunks_bulk.py](../../../../sources/xr843__fojin/backend/tests/test_rag_parallel_chunks_bulk.py)<br>[backend/scripts/archive/seed/seed_knowledge_graph.py](../../../../sources/xr843__fojin/backend/scripts/archive/seed/seed_knowledge_graph.py)<br>[backend/scripts/archive/misc/embedding_server.py](../../../../sources/xr843__fojin/backend/scripts/archive/misc/embedding_server.py)<br>[backend/scripts/archive/misc/init_es_index.py](../../../../sources/xr843__fojin/backend/scripts/archive/misc/init_es_index.py) |
| spec | 12 | [frontend/e2e/homepage.spec.ts](../../../../sources/xr843__fojin/frontend/e2e/homepage.spec.ts)<br>[frontend/e2e/navigation.spec.ts](../../../../sources/xr843__fojin/frontend/e2e/navigation.spec.ts)<br>[frontend/e2e/search.spec.ts](../../../../sources/xr843__fojin/frontend/e2e/search.spec.ts)<br>[e2e/tests/smoke.spec.ts](../../../../sources/xr843__fojin/e2e/tests/smoke.spec.ts)<br>[docs/superpowers/specs/2026-03-22-timeline-dashboard-design.md](../../../../sources/xr843__fojin/docs/superpowers/specs/2026-03-22-timeline-dashboard-design.md)<br>[docs/superpowers/specs/2026-03-24-admin-dashboard-design.md](../../../../sources/xr843__fojin/docs/superpowers/specs/2026-03-24-admin-dashboard-design.md)<br>[docs/superpowers/specs/2026-03-30-umami-analytics-design.md](../../../../sources/xr843__fojin/docs/superpowers/specs/2026-03-30-umami-analytics-design.md)<br>[docs/superpowers/specs/2026-06-03-cross-canon-parallel-reading-v1-design.md](../../../../sources/xr843__fojin/docs/superpowers/specs/2026-06-03-cross-canon-parallel-reading-v1-design.md) |
| eval | 80 | [frontend/src/utils/citationMatch.test.ts](../../../../sources/xr843__fojin/frontend/src/utils/citationMatch.test.ts)<br>[frontend/src/utils/sanitize.test.ts](../../../../sources/xr843__fojin/frontend/src/utils/sanitize.test.ts)<br>[frontend/src/types/branded.test.ts](../../../../sources/xr843__fojin/frontend/src/types/branded.test.ts)<br>[frontend/src/test/setup.ts](../../../../sources/xr843__fojin/frontend/src/test/setup.ts)<br>[frontend/src/stores/authStore.test.ts](../../../../sources/xr843__fojin/frontend/src/stores/authStore.test.ts)<br>[frontend/src/pages/WorkDetailPage.test.tsx](../../../../sources/xr843__fojin/frontend/src/pages/WorkDetailPage.test.tsx)<br>[frontend/src/pages/sources/SourceCard.test.tsx](../../../../sources/xr843__fojin/frontend/src/pages/sources/SourceCard.test.tsx)<br>[frontend/src/components/OtherVersions.test.tsx](../../../../sources/xr843__fojin/frontend/src/components/OtherVersions.test.tsx) |
| security | 29 | [SECURITY.md](../../../../sources/xr843__fojin/SECURITY.md)<br>[docs/works-audit/2026-06-01-findings.md](../../../../sources/xr843__fojin/docs/works-audit/2026-06-01-findings.md)<br>[docs/superpowers/plans/2026-06-01-frbr-works-quality-audit.md](../../../../sources/xr843__fojin/docs/superpowers/plans/2026-06-01-frbr-works-quality-audit.md)<br>[backend/tests/test_audit_works.py](../../../../sources/xr843__fojin/backend/tests/test_audit_works.py)<br>[backend/tests/test_auth.py](../../../../sources/xr843__fojin/backend/tests/test_auth.py)<br>[backend/tests/test_chat_stream_token_auth.py](../../../../sources/xr843__fojin/backend/tests/test_chat_stream_token_auth.py)<br>[backend/tests/test_citation_guard.py](../../../../sources/xr843__fojin/backend/tests/test_citation_guard.py)<br>[backend/tests/test_oauth_exchange.py](../../../../sources/xr843__fojin/backend/tests/test_oauth_exchange.py) |
| ci | 5 | [.github/workflows/alembic-dry-run.yml](../../../../sources/xr843__fojin/.github/workflows/alembic-dry-run.yml)<br>[.github/workflows/ci.yml](../../../../sources/xr843__fojin/.github/workflows/ci.yml)<br>[.github/workflows/security.yml](../../../../sources/xr843__fojin/.github/workflows/security.yml)<br>[.github/workflows/smoke.yml](../../../../sources/xr843__fojin/.github/workflows/smoke.yml)<br>[.github/workflows/stale.yml](../../../../sources/xr843__fojin/.github/workflows/stale.yml) |
| container | 4 | [docker-compose.yml](../../../../sources/xr843__fojin/docker-compose.yml)<br>[frontend/Dockerfile](../../../../sources/xr843__fojin/frontend/Dockerfile)<br>[elasticsearch/Dockerfile](../../../../sources/xr843__fojin/elasticsearch/Dockerfile)<br>[backend/Dockerfile](../../../../sources/xr843__fojin/backend/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 29 | [README.md](../../../../sources/xr843__fojin/README.md)<br>[docs/CONTRIBUTING_zh.md](../../../../sources/xr843__fojin/docs/CONTRIBUTING_zh.md)<br>[docs/mitra-alignment-integration.md](../../../../sources/xr843__fojin/docs/mitra-alignment-integration.md)<br>[docs/README_zh.md](../../../../sources/xr843__fojin/docs/README_zh.md)<br>[docs/SEO_SETUP.md](../../../../sources/xr843__fojin/docs/SEO_SETUP.md)<br>[docs/works-audit/2026-06-01-findings.md](../../../../sources/xr843__fojin/docs/works-audit/2026-06-01-findings.md)<br>[docs/superpowers/specs/2026-03-22-timeline-dashboard-design.md](../../../../sources/xr843__fojin/docs/superpowers/specs/2026-03-22-timeline-dashboard-design.md)<br>[docs/superpowers/specs/2026-03-24-admin-dashboard-design.md](../../../../sources/xr843__fojin/docs/superpowers/specs/2026-03-24-admin-dashboard-design.md) |
| config | 8 | [workers/prerender/package.json](../../../../sources/xr843__fojin/workers/prerender/package.json)<br>[workers/prerender/tsconfig.json](../../../../sources/xr843__fojin/workers/prerender/tsconfig.json)<br>[frontend/package.json](../../../../sources/xr843__fojin/frontend/package.json)<br>[frontend/tsconfig.json](../../../../sources/xr843__fojin/frontend/tsconfig.json)<br>[e2e/package.json](../../../../sources/xr843__fojin/e2e/package.json)<br>[backend/pyproject.toml](../../../../sources/xr843__fojin/backend/pyproject.toml)<br>[backend/requirements-dev.txt](../../../../sources/xr843__fojin/backend/requirements-dev.txt)<br>[backend/requirements.txt](../../../../sources/xr843__fojin/backend/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 80 | [frontend/src/utils/citationMatch.test.ts](../../../../sources/xr843__fojin/frontend/src/utils/citationMatch.test.ts)<br>[frontend/src/utils/sanitize.test.ts](../../../../sources/xr843__fojin/frontend/src/utils/sanitize.test.ts)<br>[frontend/src/types/branded.test.ts](../../../../sources/xr843__fojin/frontend/src/types/branded.test.ts)<br>[frontend/src/test/setup.ts](../../../../sources/xr843__fojin/frontend/src/test/setup.ts)<br>[frontend/src/stores/authStore.test.ts](../../../../sources/xr843__fojin/frontend/src/stores/authStore.test.ts)<br>[frontend/src/pages/WorkDetailPage.test.tsx](../../../../sources/xr843__fojin/frontend/src/pages/WorkDetailPage.test.tsx) |
| CI workflow | 5 | [.github/workflows/alembic-dry-run.yml](../../../../sources/xr843__fojin/.github/workflows/alembic-dry-run.yml)<br>[.github/workflows/ci.yml](../../../../sources/xr843__fojin/.github/workflows/ci.yml)<br>[.github/workflows/security.yml](../../../../sources/xr843__fojin/.github/workflows/security.yml)<br>[.github/workflows/smoke.yml](../../../../sources/xr843__fojin/.github/workflows/smoke.yml)<br>[.github/workflows/stale.yml](../../../../sources/xr843__fojin/.github/workflows/stale.yml) |
| 컨테이너/배포 | 4 | [docker-compose.yml](../../../../sources/xr843__fojin/docker-compose.yml)<br>[frontend/Dockerfile](../../../../sources/xr843__fojin/frontend/Dockerfile)<br>[elasticsearch/Dockerfile](../../../../sources/xr843__fojin/elasticsearch/Dockerfile)<br>[backend/Dockerfile](../../../../sources/xr843__fojin/backend/Dockerfile) |
| 보안/정책 | 29 | [SECURITY.md](../../../../sources/xr843__fojin/SECURITY.md)<br>[docs/works-audit/2026-06-01-findings.md](../../../../sources/xr843__fojin/docs/works-audit/2026-06-01-findings.md)<br>[docs/superpowers/plans/2026-06-01-frbr-works-quality-audit.md](../../../../sources/xr843__fojin/docs/superpowers/plans/2026-06-01-frbr-works-quality-audit.md)<br>[backend/tests/test_audit_works.py](../../../../sources/xr843__fojin/backend/tests/test_audit_works.py)<br>[backend/tests/test_auth.py](../../../../sources/xr843__fojin/backend/tests/test_auth.py)<br>[backend/tests/test_chat_stream_token_auth.py](../../../../sources/xr843__fojin/backend/tests/test_chat_stream_token_auth.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `workers/prerender/src/index.ts`, `frontend/index.html`, `frontend/src/components/search/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `workers/prerender/src/index.ts`, `frontend/src/App.tsx`, `frontend/src/main.tsx`.
3. retrieval/memory/indexing 확인: `workers/prerender/src/index.ts`, `frontend/index.html`, `frontend/src/components/search/index.ts`.
4. test/eval 파일로 동작 검증: `frontend/src/utils/citationMatch.test.ts`, `frontend/src/utils/sanitize.test.ts`, `frontend/src/types/branded.test.ts`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Buddhist Digital Text Platform — 9,200+ texts, 500+ sources, 8 UI languages, AI Q&A RAG , knowledge graph, full text sea. 핵심 구조 신호는 Python, docker-compose.yml, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
