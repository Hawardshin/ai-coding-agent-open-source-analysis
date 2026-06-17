# xr843/fojin 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/xr843__fojin |
| remote | https://github.com/xr843/fojin |
| HEAD | a148abb (2026-06-17) Merge pull request #763 from xr843/fix/chat-stream-detached-session |
| branch | master |
| groups | llm-wiki-100 |
| files | 845 |
| dirs | 71 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `FoJin 佛津`, `The World's Encyclopedic Buddhist Digital Text Platform`, `Why FoJin?`, `Quick Start`, `Import CBETA catalog (auto-scans local xml-p5 directory or fetches from remote)`, `Import CBETA full text content (requires xml-p5 repository)`, `Generate embeddings for AI Q&A (supports incremental processing)`, `Import SuttaCentral Early Buddhist Texts`, `See all available importers (one-off importers live under archive/)`, `Features`, `Multi-Dimensional Search`, `Full-Text Reading`, `Parallel Reading (30 Languages)`, `Dictionary Lookup`, `Knowledge Graph`, `Trilingual Cross-Canon Parallel Reading (三语对读)`, `AI Q&A — "XiaoJin"`, `Master Persona Mode (法师模式)`

> <div align="center" FoJin 佛津 The World's Encyclopedic Buddhist Digital Text Platform 503 sources. 30 languages. 30 countries. 23,500+ full text volumes. One search. Aggregating the world's Buddhist digital heritage — 10,500+ texts with 23,500+ volumes of full content in Pali, Classical Chinese, Tibetan, and Sanskrit from 503 data sources. The first LLM driven trilingual cross canon parallel reading platform (CBETA × SuttaCentral × 84000), with chunk level alignment verified by LLM, plus CBETA style reading, AI powered Q&A with 14 Buddhist master personas (RAG + tradition scoped retrieval + citations), knowledge graph with 31K+ entities and 28K+ relations visualized on a 50K entity Deck.GL geo map, 32 dictionaries with 748K entries across 6 languages, timeline visualization, activity feed, collections, citations, annotations, bookmarks, and multi language parallel reading. Live Demo &nbsp

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .editorconfig | file |
| .env.example | file |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| backend | dir |
| CHANGELOG.md | file |
| CODE_OF_CONDUCT.md | file |
| CONTRIBUTING.md | file |
| datasets | dir |
| DECISIONS.md | file |
| deploy.sh | file |
| docker-compose.yml | file |
| docs | dir |
| e2e | dir |
| elasticsearch | dir |
| fojin-backup.sh | file |
| frontend | dir |
| LICENSE | file |
| NOTICE | file |
| README.md | file |
| SECURITY.md | file |
| workers | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| backend/ | 493 |
| frontend/ | 288 |
| docs/ | 26 |
| (root) | 15 |
| .github/ | 9 |
| workers/ | 7 |
| e2e/ | 5 |
| datasets/ | 1 |
| elasticsearch/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| frontend/ | 288 | preferred |
| backend/ | 493 | preferred |
| docs/ | 26 | preferred |
| backend/scripts/ | 158 | large |
| frontend/src/ | 155 | large |
| backend/alembic/ | 154 | large |
| backend/alembic/versions/ | 153 | large |
| backend/app/ | 119 | large |
| backend/scripts/archive/ | 119 | large |
| frontend/public/ | 116 | large |
| frontend/public/fonts/ | 105 | large |
| frontend/src/components/ | 65 | large |
| backend/tests/ | 50 | large |
| frontend/src/pages/ | 36 | large |
| backend/app/services/ | 34 | large |
| backend/app/api/ | 32 | large |
| backend/app/models/ | 18 | large |
| frontend/src/styles/ | 17 | large |
| backend/app/schemas/ | 15 | large |
| backend/app/core/ | 14 | large |
| docs/superpowers/ | 14 | large |
| frontend/src/utils/ | 10 | large |
| .github/ | 9 | large |
| docs/superpowers/plans/ | 8 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `backend/Dockerfile`
- `backend/pyproject.toml`
- `backend/requirements.txt`
- `docker-compose.yml`
- `e2e/package.json`
- `elasticsearch/Dockerfile`
- `frontend/Dockerfile`
- `frontend/package.json`
- `frontend/tsconfig.json`
- `frontend/vite.config.ts`
- `workers/prerender/package.json`
- `workers/prerender/tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| e2e/package.json | fojin-e2e | smoke |  |
| frontend/package.json | fojin-frontend | dev, build, preview, lint, lint:fix, format, format:check, test, test:watch, test:coverage, test:e2e, i18n:scan, i18n:check | @ant-design/charts, @deck.gl/core, @deck.gl/geo-layers, @deck.gl/layers, @deck.gl/react, @tanstack/react-query, antd, axios, d3, deck.gl, dompurify, html2canvas-pro, i18next, i18next-browser-languagedetector |
| workers/prerender/package.json | fojin-prerender | dev, deploy, typecheck |  |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| backend/pyproject.toml |  | false | false | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `backend/scripts/README.md`
- `datasets/alignments/README.md`
- `docs/CONTRIBUTING_zh.md`
- `docs/README_zh.md`
- `docs/SEO_SETUP.md`
- `docs/legal/dianjin-authorization-plan.md`
- `docs/mitra-alignment-integration.md`
- `docs/promotion/chinese-posts.md`
- `docs/screenshots/ai-chat-answer.png`
- `docs/screenshots/ai-chat-intro.png`
- `docs/screenshots/hero.png`
- `docs/screenshots/search.png`
- `docs/screenshots/sources.png`
- `docs/superpowers/plans/2026-03-22-timeline-dashboard.md`
- `docs/superpowers/plans/2026-03-24-admin-dashboard.md`
- `docs/superpowers/plans/2026-03-25-seo-optimization.md`
- `docs/superpowers/plans/2026-04-01-ai-chat-eval-system.md`
- `docs/superpowers/plans/2026-04-05-buddhist-geography-phase1.md`
- `docs/superpowers/plans/2026-06-01-frbr-works-quality-audit.md`
- `docs/superpowers/plans/2026-06-03-cross-canon-parallel-reading-pr1.md`
- `docs/superpowers/plans/2026-06-03-cross-canon-parallel-reading-pr2.md`
- `docs/superpowers/specs/2026-03-22-timeline-dashboard-design.md`
- `docs/superpowers/specs/2026-03-24-admin-dashboard-design.md`
- `docs/superpowers/specs/2026-03-30-umami-analytics-design.md`
- `docs/superpowers/specs/2026-06-03-cross-canon-parallel-reading-v1-design.md`
- `docs/superpowers/specs/2026-06-09-batch2-cross-canon-roadmap.md`
- `docs/superpowers/specs/2026-06-16-cross-canon-surfacing-design.md`
- `docs/works-audit/2026-06-01-findings.md`

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

- `docs/superpowers/specs/2026-03-22-timeline-dashboard-design.md`
- `docs/superpowers/specs/2026-03-24-admin-dashboard-design.md`
- `docs/superpowers/specs/2026-03-30-umami-analytics-design.md`
- `docs/superpowers/specs/2026-06-03-cross-canon-parallel-reading-v1-design.md`
- `docs/superpowers/specs/2026-06-09-batch2-cross-canon-roadmap.md`
- `docs/superpowers/specs/2026-06-16-cross-canon-surfacing-design.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `backend/tests/__init__.py`
- `backend/tests/conftest.py`
- `backend/tests/test_admin.py`
- `backend/tests/test_ai_diff_service.py`
- `backend/tests/test_alignment_ai_diff_endpoint.py`
- `backend/tests/test_alignment_juans_flag.py`
- `backend/tests/test_annotations_workflow.py`
- `backend/tests/test_api_key_rotate.py`
- `backend/tests/test_attachment_parser.py`
- `backend/tests/test_audit_works.py`
- `backend/tests/test_auth.py`
- `backend/tests/test_build_works.py`
- `backend/tests/test_chat_attachments.py`
- `backend/tests/test_chat_master_scope_wiring.py`
- `backend/tests/test_chat_reader_trust_boundary.py`
- `backend/tests/test_chat_sources_order.py`
- `backend/tests/test_chat_stream_heartbeat.py`
- `backend/tests/test_chat_stream_session_lifecycle.py`
- `backend/tests/test_chat_stream_token_auth.py`
- `backend/tests/test_citation_guard.py`
- `backend/tests/test_citations.py`
- `backend/tests/test_client_ip.py`
- `backend/tests/test_config.py`
- `backend/tests/test_crypto_versions.py`
- `backend/tests/test_exceptions.py`
- `backend/tests/test_gaiji_service.py`
- `backend/tests/test_health_check_probe.py`
- `backend/tests/test_kg.py`
- `backend/tests/test_llm_catalog.py`
- `backend/tests/test_oauth_exchange.py`
- `backend/tests/test_og_and_share_qa_seo.py`
- `backend/tests/test_password_change_audit.py`
- `backend/tests/test_precise_retrieval.py`
- `backend/tests/test_provenance.py`
- `backend/tests/test_quote_verifier.py`
- `backend/tests/test_rag_parallel_chunks_bulk.py`
- `backend/tests/test_root_sutra_recall.py`
- `backend/tests/test_schemas.py`
- `backend/tests/test_search_api.py`
- `backend/tests/test_search_gaiji.py`
- `backend/tests/test_semantic_search.py`
- `backend/tests/test_smoke.py`
- `backend/tests/test_source_health.py`
- `backend/tests/test_source_stats.py`
- `backend/tests/test_stats.py`
- `backend/tests/test_text_canon.py`
- `backend/tests/test_text_seo_jsonld.py`
- `backend/tests/test_urn.py`
- `backend/tests/test_works_api.py`
- `backend/tests/test_xml_parser.py`
- `e2e/tests/smoke.spec.ts`
- `frontend/e2e/homepage.spec.ts`
- `frontend/e2e/navigation.spec.ts`
- `frontend/e2e/search.spec.ts`
- `frontend/src/api/client.test.ts`
- `frontend/src/components/OtherVersions.test.tsx`
- `frontend/src/components/ProtectedRoute.test.tsx`
- `frontend/src/components/ReaderDictPopover.test.tsx`
- `frontend/src/components/parallel/AIDiffPopover.test.tsx`
- `frontend/src/components/parallel/AlignmentColumn.test.tsx`
- `frontend/src/components/parallel/buildAlignmentMap.test.ts`
- `frontend/src/components/parallel/useSelectedChunks.test.ts`
- `frontend/src/components/parallel/useSyncScroll.test.tsx`
- `frontend/src/components/search/SemanticCard.test.tsx`
- `frontend/src/pages/WorkDetailPage.test.tsx`
- `frontend/src/pages/sources/SourceCard.test.tsx`
- `frontend/src/stores/authStore.test.ts`
- `frontend/src/test/setup.ts`
- `frontend/src/types/branded.test.ts`
- `frontend/src/utils/citationMatch.test.ts`
- `frontend/src/utils/sanitize.test.ts`

### CI/Docker 후보

- `.github/workflows/alembic-dry-run.yml`
- `.github/workflows/ci.yml`
- `.github/workflows/security.yml`
- `.github/workflows/smoke.yml`
- `.github/workflows/stale.yml`
- `backend/Dockerfile`
- `docker-compose.yml`
- `elasticsearch/Dockerfile`
- `frontend/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 480 |
| .woff2 | 104 |
| .tsx | 94 |
| .ts | 49 |
| .md | 30 |
| .css | 18 |
| .json | 16 |
| .yml | 9 |
| .png | 8 |
| .sh | 5 |
| .svg | 5 |
| .txt | 3 |
| dockerfile | 3 |
| .dockerignore | 2 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `frontend/ 내부 책임 분리`
- `backend/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `backend/scripts/ 내부 책임 분리`
- `frontend/src/ 내부 책임 분리`
- `docs/superpowers/specs/2026-03-22-timeline-dashboard-design.md 스펙/명령 의미`
- `docs/superpowers/specs/2026-03-24-admin-dashboard-design.md 스펙/명령 의미`
- `docs/superpowers/specs/2026-03-30-umami-analytics-design.md 스펙/명령 의미`
- `docs/superpowers/specs/2026-06-03-cross-canon-parallel-reading-v1-design.md 스펙/명령 의미`
- `docs/superpowers/specs/2026-06-09-batch2-cross-canon-roadmap.md 스펙/명령 의미`
- `backend/Dockerfile 실행 스크립트와 패키지 경계`
- `backend/pyproject.toml 실행 스크립트와 패키지 경계`
- `backend/requirements.txt 실행 스크립트와 패키지 경계`
- `docker-compose.yml 실행 스크립트와 패키지 경계`
- `e2e/package.json 실행 스크립트와 패키지 경계`

