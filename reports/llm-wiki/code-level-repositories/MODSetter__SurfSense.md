# MODSetter/SurfSense 코드 레벨 분석

생성일: 2026-06-17T23:31:47.568Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | A integrated platform (108) |
| stars | 14914 |
| language | Python |
| tags | rag, document-chat, agent-knowledge |
| files/code/source | 3288/2754/2313 |
| tests/ci | 120/17 |
| local path | sources/MODSetter__SurfSense |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 599 | 387 | surfsense_backend/app/celery_app.py:202 # Default queue : fast, user-facing tasks (file upload, podcast, reindex, …) |
| Parsing/OCR/document extraction | code | 183 | 95 | surfsense_evals/scripts/analyze_failure_timing.py:6 on 2405.09818v1.pdf::Q007 — print the full error message + raw payload |
| Chunking/splitting | code | 197 | 126 | surfsense_backend/app/app.py:772 # http.response.start on every body chunk, breaking SSE/streaming endpoints. |
| Embedding/vector index | code | 142 | 81 | docker/scripts/migrate-database.ps1:54 $PG14Image = "pgvector/pgvector:pg14" |
| Retrieval/search/rerank | code | 647 | 425 | surfsense_evals/src/surfsense_evals/core/metrics/retrieval.py:1 """Retrieval metrics: Recall@k, MRR, nDCG@k. |
| Wiki/graph/entity model | code | 124 | 66 | surfsense_obsidian/esbuild.config.mjs:21 "obsidian", |
| Memory/update lifecycle | code | 1045 | 717 | surfsense_obsidian/esbuild.config.mjs:48 await context.watch(); |
| Provenance/citation/evidence | code | 186 | 95 | surfsense_backend/app/db.py:1745 ) # Enable/disable citations |
| Evaluation/observability | code | 179 | 120 | surfsense_backend/app/app.py:52 from app.observability import metrics as ot_metrics |
| Agent/MCP/tool surface | code | 778 | 524 | surfsense_backend/app/app.py:26 from app.agents.chat.runtime.checkpointer import ( |

## 의존성 신호

- LLM/app framework: sentence-transformers, langchain-unstructured, langchain-daytona, langchain, langchain-community, litellm, langchain-litellm
- Vector/search store: pgvector, elasticsearch
- Document parsing/OCR: pypdf, unstructured, unstructured-client, langchain-unstructured
- Eval/observability: opentelemetry-api, opentelemetry-sdk, opentelemetry-exporter-otlp, opentelemetry-semantic-conventions, opentelemetry-instrumentation-fastapi, opentelemetry-instrumentation-sqlalchemy, opentelemetry-instrumentation-psycopg, opentelemetry-instrumentation-redis
- Persistence/database: drizzle-orm, pg, postgres, @types/pg, drizzle-kit, asyncpg, pgvector, redis

## 주요 파일 후보

### Ingestion/source intake

- `surfsense_backend/app/celery_app.py`
- `surfsense_backend/app/db.py`
- `surfsense_evals/scripts/inspect_first30.py`
- `surfsense_evals/scripts/patch_manifest_for_parallel_ingest.py`
- `surfsense_evals/scripts/retry_failed_questions.py`
- `surfsense_obsidian/src/queue.ts`
- `surfsense_web/app/layout.tsx`
- `surfsense_web/components/onboarding-tour.tsx`
- `surfsense_web/components/search-space-form.tsx`
- `surfsense_web/contexts/login-gate.tsx`
- `surfsense_web/hooks/use-connectors-sync.ts`
- `surfsense_web/hooks/use-search-source-connectors.ts`
- ... 6 more

### Parsing/OCR/document extraction

- `surfsense_evals/scripts/analyze_failure_timing.py`
- `surfsense_evals/scripts/analyze_failures.py`
- `surfsense_evals/scripts/check_uploaded_status.py`
- `surfsense_evals/scripts/compute_adjusted_accuracy.py`
- `surfsense_evals/scripts/compute_blog_extras.py`
- `surfsense_evals/scripts/inspect_first30.py`
- `surfsense_evals/scripts/patch_manifest_for_parallel_ingest.py`
- `surfsense_evals/scripts/retry_failed_questions.py`
- `surfsense_evals/scripts/test_context_overflow_hypothesis.py`
- `surfsense_obsidian/src/sync-engine.ts`
- `surfsense_web/lib/env-config.ts`
- `surfsense_web/lib/supported-extensions.ts`
- ... 6 more

### Chunking/splitting

- `surfsense_backend/app/app.py`
- `surfsense_backend/app/db.py`
- `surfsense_backend/scripts/create_sandbox_snapshot.py`
- `surfsense_obsidian/src/excludes.ts`
- `surfsense_obsidian/src/sync-engine.ts`
- `surfsense_web/i18n/request.ts`
- `surfsense_backend/alembic/versions/105_add_chunks_document_id_index.py`
- `surfsense_backend/alembic/versions/85_add_public_chat_snapshots_table.py`
- `surfsense_backend/app/etl_pipeline/picture_describer.py`
- `surfsense_backend/app/gateway/agent_invoke.py`
- `surfsense_backend/app/indexing_pipeline/document_chunker.py`
- `surfsense_backend/app/indexing_pipeline/document_persistence.py`
- ... 6 more

### Embedding/vector index

- `docker/scripts/migrate-database.ps1`
- `docker/scripts/migrate-database.sh`
- `surfsense_backend/app/app.py`
- `surfsense_backend/app/db.py`
- `surfsense_backend/alembic/versions/0_initial_schema.py`
- `surfsense_backend/alembic/versions/122_migrate_and_drop_old_memory_tables.py`
- `surfsense_backend/alembic/versions/141_unique_chat_message_turn_role.py`
- `surfsense_backend/alembic/versions/146_drop_surfsense_docs_tables.py`
- `surfsense_backend/alembic/versions/31_add_elasticsearch_connector_enums.py`
- `surfsense_backend/alembic/versions/60_add_surfsense_docs_tables.py`
- `surfsense_backend/alembic/versions/73_add_user_memories_table.py`
- `surfsense_backend/alembic/versions/96_add_shared_memories_table.py`
- ... 6 more

### Retrieval/search/rerank

- `surfsense_evals/src/surfsense_evals/core/metrics/retrieval.py`
- `surfsense_obsidian/esbuild.config.mjs`
- `surfsense_web/instrumentation-client.ts`
- `surfsense_backend/app/app.py`
- `surfsense_backend/app/db.py`
- `surfsense_backend/app/users.py`
- `surfsense_desktop/src/preload.ts`
- `surfsense_obsidian/src/settings.ts`
- `surfsense_obsidian/src/sync-engine.ts`
- `surfsense_web/app/not-found.tsx`
- `surfsense_web/components/onboarding-tour.tsx`
- `surfsense_web/components/search-space-form.tsx`
- ... 6 more

### Wiki/graph/entity model

- `surfsense_obsidian/esbuild.config.mjs`
- `surfsense_backend/app/db.py`
- `surfsense_obsidian/src/api-client.ts`
- `surfsense_obsidian/src/attachments-confirm-modal.ts`
- `surfsense_obsidian/src/excludes.ts`
- `surfsense_obsidian/src/folder-suggest-modal.ts`
- `surfsense_obsidian/src/main.ts`
- `surfsense_obsidian/src/payload.ts`
- `surfsense_obsidian/src/queue.ts`
- `surfsense_obsidian/src/settings.ts`
- `surfsense_obsidian/src/status-bar.ts`
- `surfsense_obsidian/src/status-modal.ts`
- ... 6 more

### Memory/update lifecycle

- `surfsense_obsidian/esbuild.config.mjs`
- `surfsense_web/playwright.config.ts`
- `docker/scripts/install.ps1`
- `docker/scripts/install.sh`
- `docker/scripts/migrate-database.ps1`
- `docker/scripts/migrate-database.sh`
- `surfsense_backend/app/app.py`
- `surfsense_backend/app/celery_app.py`
- `surfsense_backend/app/db.py`
- `surfsense_backend/app/users.py`
- `surfsense_backend/app/zero_publication.py`
- `surfsense_backend/scripts/create_sandbox_snapshot.py`
- ... 6 more

### Provenance/citation/evidence

- `surfsense_backend/app/db.py`
- `surfsense_obsidian/src/payload.ts`
- `surfsense_obsidian/src/queue.ts`
- `surfsense_web/components/markdown-viewer.tsx`
- `surfsense_backend/alembic/versions/51_add_new_llm_config_table.py`
- `surfsense_backend/app/connectors/webcrawler_connector.py`
- `surfsense_backend/app/etl_pipeline/picture_describer.py`
- `surfsense_backend/app/prompts/__init__.py`
- `surfsense_backend/app/prompts/default_system_instructions.py`
- `surfsense_backend/app/retriever/chunks_hybrid_search.py`
- `surfsense_backend/app/retriever/documents_hybrid_search.py`
- `surfsense_backend/app/routes/new_llm_config_routes.py`
- ... 6 more

### Evaluation/observability

- `surfsense_backend/app/app.py`
- `surfsense_backend/app/celery_app.py`
- `surfsense_evals/scripts/compute_adjusted_accuracy.py`
- `surfsense_evals/scripts/summarise_crag_run.py`
- `surfsense_evals/scripts/summarise_parser_compare_run.py`
- `surfsense_web/lib/connector-telemetry.ts`
- `surfsense_backend/app/etl_pipeline/etl_pipeline_service.py`
- `surfsense_backend/app/gateway/agent_invoke.py`
- `surfsense_backend/app/gateway/auth_invariant.py`
- `surfsense_backend/app/gateway/byo_long_poll.py`
- `surfsense_backend/app/gateway/inbox_processor.py`
- `surfsense_backend/app/gateway/ratelimit.py`
- ... 6 more

### Agent/MCP/tool surface

- `surfsense_backend/app/app.py`
- `surfsense_backend/app/celery_app.py`
- `surfsense_backend/app/db.py`
- `surfsense_backend/scripts/verify_chat_image_capability.py`
- `surfsense_desktop/src/preload.ts`
- `surfsense_evals/scripts/analyze_failure_timing.py`
- `surfsense_evals/scripts/compute_adjusted_accuracy.py`
- `surfsense_evals/scripts/retry_failed_questions.py`
- `surfsense_web/app/global-error.tsx`
- `surfsense_web/app/layout.tsx`
- `surfsense_web/components/search-space-form.tsx`
- `surfsense_web/hooks/use-agent-actions-query.ts`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| surfsense_backend/app/celery_app.py | 202 | # Default queue : fast, user-facing tasks (file upload, podcast, reindex, …) |
| surfsense_backend/app/celery_app.py | 235 | # Route slow connector/indexing tasks to a dedicated queue so they |
| surfsense_backend/app/celery_app.py | 238 | # Connector indexing tasks → connectors queue |
| surfsense_backend/app/celery_app.py | 266 | # for each connector, we have ONE schedule that checks the database at the configured interval |
| surfsense_backend/app/celery_app.py | 269 | "check-periodic-connector-schedules": { |
| surfsense_backend/app/celery_app.py | 276 | # Cleanup stale connector indexing notifications every 5 minutes |
| surfsense_backend/app/db.py | 1422 | # indexed because connector indexers consult it as a change-detection |
| surfsense_backend/app/db.py | 1435 | # Populated from markdown at ingestion time, or from blocknote_document migration. |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| surfsense_evals/scripts/analyze_failure_timing.py | 6 | on 2405.09818v1.pdf::Q007 — print the full error message + raw payload |
| surfsense_evals/scripts/analyze_failure_timing.py | 76 | print("Intrinsic failure: 30MB Anthropic input limit on 2405.09818v1.pdf::Q007") |
| surfsense_evals/scripts/analyze_failure_timing.py | 79 | if row["qid"] == "2405.09818v1.pdf::Q007" and row["arm"] == "native_pdf": |
| surfsense_evals/scripts/analyze_failure_timing.py | 86 | print(f" PDF size on disk: {size_mb:.1f} MB") |
| surfsense_evals/scripts/analyze_failure_timing.py | 93 | # 3) Per-PDF: which PDFs are pathological? |
| surfsense_evals/scripts/analyze_failure_timing.py | 96 | print("Per-PDF failure breakdown across all 6 arms (only PDFs with failures)") |
| surfsense_evals/scripts/analyze_failures.py | 2 | failure, group by arm + PDF, and dump the underlying error strings so |
| surfsense_evals/scripts/analyze_failures.py | 7 | * per-PDF failure count across all arms (which docs are pathological?) |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| surfsense_backend/app/app.py | 772 | # http.response.start on every body chunk, breaking SSE/streaming endpoints. |
| surfsense_backend/app/db.py | 1490 | "Chunk", back_populates="document", cascade="all, delete-orphan" |
| surfsense_backend/app/db.py | 1521 | class Chunk(BaseModel, TimestampMixin): |
| surfsense_backend/scripts/create_sandbox_snapshot.py | 96 | on_logs=lambda chunk: print(chunk, end="", flush=True), |
| surfsense_obsidian/src/excludes.ts | 6 | * segment (so `templates` excludes `templates/foo.md` and `notes/templates/x.md`). |
| surfsense_obsidian/src/sync-engine.ts | 697 | const chunk = bytes.subarray(i, i + chunkSize); |
| surfsense_obsidian/src/sync-engine.ts | 698 | binary += String.fromCharCode(...Array.from(chunk)); |
| surfsense_web/i18n/request.ts | 9 | // This typically corresponds to the `[locale]` segment |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| docker/scripts/migrate-database.ps1 | 54 | $PG14Image = "pgvector/pgvector:pg14" |
| docker/scripts/migrate-database.sh | 67 | PG14_IMAGE="pgvector/pgvector:pg14" |
| surfsense_backend/app/app.py | 575 | """Pre-load/JIT the embedding model so the first KB search is fast. |
| surfsense_backend/app/app.py | 584 | Safety: behind the embedding global lock (run in a worker thread), bounded |
| surfsense_backend/app/app.py | 597 | "[startup] Embedding model warmup completed in %.3fs", |
| surfsense_backend/app/app.py | 602 | "[startup] Embedding model warmup failed in %.3fs (non-fatal — first " |
| surfsense_backend/app/app.py | 639 | # Phase 2 — embedding warmup so the first lazy ``search_knowledge_base`` |
| surfsense_backend/app/app.py | 645 | "[startup] Embedding warmup hit timeout/error — skipping; " |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| surfsense_evals/src/surfsense_evals/core/metrics/retrieval.py | 1 | """Retrieval metrics: Recall@k, MRR, nDCG@k. |
| surfsense_evals/src/surfsense_evals/core/metrics/retrieval.py | 21 | """Aggregated retrieval scores.""" |
| surfsense_obsidian/esbuild.config.mjs | 28 | "@codemirror/search", |
| surfsense_web/instrumentation-client.ts | 64 | const params = new URLSearchParams(window.location.search); |
| surfsense_backend/app/app.py | 575 | """Pre-load/JIT the embedding model so the first KB search is fast. |
| surfsense_backend/app/app.py | 577 | With lazy KB retrieval (OpenCode-style), the main agent no longer embeds |
| surfsense_backend/app/app.py | 582 | cost off the first real search. |
| surfsense_backend/app/app.py | 586 | and swallow so the worst case is the first real search pays the cold cost. |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| surfsense_obsidian/esbuild.config.mjs | 21 | "obsidian", |
| surfsense_backend/app/db.py | 111 | "OBSIDIAN_CONNECTOR" # Self-hosted only - Local Obsidian vault indexing |
| surfsense_backend/app/db.py | 337 | "description": "Join the SurfSense community on Reddit", |
| surfsense_backend/app/db.py | 343 | "description": "Join the SurfSense community on Discord", |
| surfsense_backend/app/db.py | 1894 | # Mirrors migration 129; backs the ``/obsidian/connect`` upsert. |
| surfsense_obsidian/src/api-client.ts | 1 | import { requestUrl, type RequestUrlParam, type RequestUrlResponse } from "obsidian"; |
| surfsense_obsidian/src/api-client.ts | 15 | * SurfSense backend client used by the Obsidian plugin. |
| surfsense_obsidian/src/api-client.ts | 18 | * - Use Obsidian `requestUrl` only — no `fetch`, no `axios`, no |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| surfsense_obsidian/esbuild.config.mjs | 48 | await context.watch(); |
| surfsense_web/playwright.config.ts | 61 | // Local stays on webpack dev (Turbopack caused stale-lock panics in E2E). |
| docker/scripts/install.ps1 | 169 | Write-Info "Recent logs from migrations / zero-cache / backend:" |
| docker/scripts/install.ps1 | 172 | Invoke-NativeSafe { docker compose logs --tail=60 migrations zero-cache backend 2>&1 } \| Write-Host |
| docker/scripts/install.ps1 | 181 | Write-Host " 3. Hard reset zero db: cd $InstallDir; docker compose down; docker volume rm surfsense-zero-cache; docker compose up -d --wait" |
| docker/scripts/install.sh | 172 | info "Recent logs from migrations / zero-cache / backend:" |
| docker/scripts/install.sh | 173 | (cd "${INSTALL_DIR}" && ${DC} logs --tail=60 migrations zero-cache backend 2>&1) \|\| true |
| docker/scripts/install.sh | 178 | echo " 3. Hard reset zero db: cd ${INSTALL_DIR} && ${DC} down && docker volume rm surfsense-zero-cache && ${DC} up -d --wait" |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| surfsense_backend/app/db.py | 1745 | ) # Enable/disable citations |
| surfsense_backend/app/db.py | 1962 | - Citation toggle (enable/disable citation instructions) |
| surfsense_backend/app/db.py | 1996 | # Citation toggle - when enabled, SURFSENSE_CITATION_INSTRUCTIONS is injected |
| surfsense_backend/app/db.py | 1997 | # When disabled, an anti-citation prompt is injected instead |
| surfsense_obsidian/src/payload.ts | 137 | sourcePath: string, |
| surfsense_obsidian/src/payload.ts | 145 | sourcePath, |
| surfsense_obsidian/src/queue.ts | 20 | * blow away document versions, citations, and the document_id used |
| surfsense_web/components/markdown-viewer.tsx | 7 | import { processChildrenWithCitations } from "@/components/citations/citation-renderer"; |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| surfsense_backend/app/app.py | 52 | from app.observability import metrics as ot_metrics |
| surfsense_backend/app/app.py | 53 | from app.observability.bootstrap import init_otel, shutdown_otel |
| surfsense_backend/app/app.py | 756 | from opentelemetry import trace |
| surfsense_backend/app/celery_app.py | 17 | from opentelemetry import trace |
| surfsense_backend/app/celery_app.py | 42 | from app.observability import metrics as ot_metrics |
| surfsense_backend/app/celery_app.py | 109 | from app.observability.bootstrap import init_otel |
| surfsense_backend/app/celery_app.py | 111 | init_otel(app=None, traces=True, metrics=True, logs=True) |
| surfsense_evals/scripts/compute_adjusted_accuracy.py | 105 | print(" succeed on retry; eval harness has no built-in retry today).") |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| surfsense_backend/app/app.py | 26 | from app.agents.chat.runtime.checkpointer import ( |
| surfsense_backend/app/app.py | 462 | throwaway agent is genuinely thrown away and immediately collected. |
| surfsense_backend/app/app.py | 479 | from langchain.agents import create_agent |
| surfsense_backend/app/app.py | 480 | from langchain.agents.middleware import ( |
| surfsense_backend/app/app.py | 490 | from app.agents.chat.shared.context import SurfSenseContextSchema |
| surfsense_backend/app/app.py | 513 | # because the throwaway agent is immediately collected. |
| surfsense_backend/app/app.py | 562 | "[startup] Agent JIT warmup completed in %.3fs", |
| surfsense_backend/app/app.py | 567 | "[startup] Agent JIT warmup failed in %.3fs (non-fatal — first " |

## Gap

_없음_
