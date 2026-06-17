# raphaelmansuy/edgequake 코드 레벨 분석

생성일: 2026-06-17T23:31:16.071Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | graph-rag/kg |
| maturity | A integrated platform (108) |
| stars | 2003 |
| language | Rust |
| tags | rag, knowledge-base, document-chat, korea-signal |
| files/code/source | 2755/1709/1272 |
| tests/ci | 120/21 |
| local path | sources/raphaelmansuy__edgequake |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 526 | 208 | edgequake_webui/src/hooks/use-ingestion-progress.ts:2 * @module use-ingestion-progress |
| Parsing/OCR/document extraction | code | 631 | 267 | quickstart.sh:543 # This is the First-Principle correct behaviour: the vision LLM (PDF → Markdown) |
| Chunking/splitting | code | 462 | 236 | edgequake/benches/chunking_bench.rs:4 use edgequake_pipeline::chunker::{Chunker, ChunkerConfig}; |
| Embedding/vector index | code | 641 | 269 | edgequake_webui/src/components/workspace/embedding-model-selector.tsx:3 * @description Dropdown selector for choosing embedding model when creating a workspace. |
| Retrieval/search/rerank | code | 562 | 225 | edgequake/crates/edgequake-query/src/chunk_retrieval.rs:1 //! Chunk retrieval from entities and relationships. |
| Wiki/graph/entity model | code | 838 | 394 | quickstart.sh:410 # JSON output. Always prefer gpt-5.4-* models for entity extraction. |
| Memory/update lifecycle | code | 1135 | 520 | quickstart.sh:248 # § Step 2 — Download / refresh compose file |
| Provenance/citation/evidence | code | 435 | 194 | edgequake_webui/src/components/lineage/entity-provenance-panel.tsx:4 * Based on WebUI Specification Document WEBUI-006 (15-webui-lineage-viz.md) |
| Evaluation/observability | code | 589 | 256 | scripts/compare_against_pymupdf.py:68 precision = true_positives / len(pred_set) if pred_set else 0 |
| Agent/MCP/tool surface | code | 445 | 154 | quickstart.sh:166 # container itself — NOT to the host machine where Ollama is running. |

## 의존성 신호

- LLM/app framework: async-openai
- Eval/observability: metrics-exporter-prometheus, opentelemetry, opentelemetry_sdk, opentelemetry-otlp, tracing-opentelemetry
- Persistence/database: postgres, redis, redis-queue

## 주요 파일 후보

### Ingestion/source intake

- `edgequake_webui/src/hooks/use-ingestion-progress.ts`
- `edgequake_webui/src/stores/use-ingestion-store.ts`
- `edgequake_webui/src/types/ingestion.ts`
- `edgequake_webui/src/components/documents/ingestion-progress-panel.tsx`
- `edgequake/crates/edgequake-pipeline/src/ingestion_types.rs`
- `edgequake/crates/edgequake-core/src/orchestrator/ingestion.rs`
- `quickstart.sh`
- `test_docker_e2e.py`
- `verify_docker.sh`
- `scripts/deploy_migration.sh`
- `scripts/spec006_no_adhoc_resource_budget.sh`
- `scripts/spec013_entity_type_audit.py`
- ... 6 more

### Parsing/OCR/document extraction

- `quickstart.sh`
- `test_docker_e2e.py`
- `scripts/analyze_f1_gap.py`
- `scripts/analyze_headers.py`
- `scripts/audit_docs_links.py`
- `scripts/check_fonts.py`
- `scripts/check_pymupdf_spans.py`
- `scripts/compare_against_pymupdf.py`
- `scripts/eval_comprehensive.py`
- `scripts/eval_micro.py`
- `scripts/eval_pymupdf_pipeline.py`
- `scripts/generate_gold_pymupdf4llm.py`
- ... 6 more

### Chunking/splitting

- `edgequake/benches/chunking_bench.rs`
- `scripts/eval_pymupdf_pipeline.py`
- `edgequake/docker/init.sql`
- `edgequake/migrations/020_add_circuit_breaker_to_tasks.sql`
- `edgequake/migrations/021_add_failed_chunks_table.sql`
- `sdks/go/edgequake_coverage_test.go`
- `sdks/go/edgequake_test.go`
- `sdks/go/services.go`
- `edgequake_webui/e2e/helpers/navigation.ts`
- `edgequake_webui/src/hooks/index.ts`
- `edgequake_webui/src/hooks/use-chunk-progress.ts`
- `edgequake_webui/src/hooks/use-lineage.ts`
- ... 6 more

### Embedding/vector index

- `edgequake_webui/src/components/workspace/embedding-model-selector.tsx`
- `edgequake_webui/src/components/workspace/rebuild-embeddings-button.tsx`
- `edgequake/crates/edgequake-core/src/types/embedding.rs`
- `edgequake/crates/edgequake-pipeline/src/pipeline/helpers/embeddings.rs`
- `edgequake/crates/edgequake-api/src/handlers/workspaces/bulk_ops/rebuild_embeddings.rs`
- `quickstart.sh`
- `edgequake_webui/run-e2e-interactive.sh`
- `scripts/test_migration_e2e.sh`
- `edgequake/benches/query_bench.rs`
- `edgequake/benches/storage_bench.rs`
- `edgequake/docker/init-age-db.sh`
- `edgequake/docker/init-extensions.sql`
- ... 6 more

### Retrieval/search/rerank

- `edgequake/crates/edgequake-query/src/chunk_retrieval.rs`
- `scripts/inject_frontmatter.py`
- `scripts/test_cascade_delete.py`
- `edgequake_webui/scripts/apply-live-stack-gate.py`
- `edgequake_webui/scripts/validate-e2e-flake.py`
- `edgequake/docker/init-age-db.sh`
- `edgequake/docker/init-extensions.sql`
- `edgequake/docker/init.sql`
- `edgequake/migrations/001_init_database.sql`
- `edgequake/migrations/010_add_conversations_tables.sql`
- `edgequake/migrations/011_tenant_performance_indexes.sql`
- `edgequake/migrations/012_audit_logs_table.sql`
- ... 6 more

### Wiki/graph/entity model

- `quickstart.sh`
- `edgequake_webui/playwright.spec013-ui.config.ts`
- `scripts/spec006_no_unguarded_community_api.sh`
- `scripts/spec013_entity_type_audit.py`
- `scripts/test_cascade_delete.py`
- `edgequake/benches/query_bench.rs`
- `edgequake/benches/storage_bench.rs`
- `edgequake/docker/init.sql`
- `edgequake/migrations/001_init_database.sql`
- `edgequake/migrations/002_add_tasks_table.sql`
- `edgequake/migrations/005_add_audit_log_table.sql`
- `edgequake/migrations/006_add_is_manual_flags.sql`
- ... 6 more

### Memory/update lifecycle

- `quickstart.sh`
- `test_docker_e2e.py`
- `verify_docker.sh`
- `edgequake_webui/next.config.ts`
- `edgequake_webui/playwright.config.noserver.ts`
- `scripts/compare_against_pymupdf.py`
- `scripts/merge_features.py`
- `scripts/test_cascade_delete.py`
- `scripts/update_migration_checksums.sh`
- `edgequake_webui/scripts/safe-build.sh`
- `edgequake_webui/scripts/validate-e2e-flake.py`
- `edgequake/benches/graph_performance.rs`
- ... 6 more

### Provenance/citation/evidence

- `edgequake_webui/src/components/lineage/entity-provenance-panel.tsx`
- `sdks/rust/src/resources/provenance.rs`
- `sdks/typescript/src/resources/provenance.ts`
- `edgequake/crates/edgequake-api/src/handlers/lineage_types/provenance.rs`
- `edgequake/crates/edgequake-api/src/handlers/lineage/entity_provenance.rs`
- `edgequake/docker/init.sql`
- `edgequake/migrations/001_init_database.sql`
- `edgequake/migrations/002_add_tasks_table.sql`
- `edgequake/migrations/036_add_edge_property_indexes.sql`
- `sdks/go/client.go`
- `sdks/go/e2e_test.go`
- `sdks/go/edgequake_coverage_test.go`
- ... 6 more

### Evaluation/observability

- `scripts/compare_against_pymupdf.py`
- `scripts/eval_comprehensive.py`
- `scripts/eval_micro.py`
- `scripts/eval_pymupdf_pipeline.py`
- `scripts/full_validation.py`
- `scripts/release_gates.sh`
- `edgequake/migrations/016_workspace_metrics_history.sql`
- `edgequake/src/main.rs`
- `legacy/edgequake-pdf/eval.sh`
- `legacy/edgequake-pdf/run_tests.sh`
- `sdks/go/e2e_test.go`
- `sdks/go/edgequake_coverage_test.go`
- ... 6 more

### Agent/MCP/tool surface

- `quickstart.sh`
- `scripts/audit_docs_links.py`
- `scripts/fix_workspace_tests.py`
- `edgequake/docker/init.sql`
- `edgequake/src/main.rs`
- `mcp/src/client.ts`
- `mcp/src/config.ts`
- `mcp/src/errors.ts`
- `mcp/src/index.ts`
- `mcp/src/server.ts`
- `sdks/go/client.go`
- `sdks/go/edgequake_coverage_test.go`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| edgequake_webui/src/hooks/use-ingestion-progress.ts | 2 | * @module use-ingestion-progress |
| edgequake_webui/src/hooks/use-ingestion-progress.ts | 3 | * @description Hook for tracking document ingestion progress via WebSocket/polling. |
| edgequake_webui/src/hooks/use-ingestion-progress.ts | 20 | import { useIngestionStore } from "@/stores/use-ingestion-store"; |
| edgequake_webui/src/hooks/use-ingestion-progress.ts | 21 | import type { IngestionProgress } from "@/types/ingestion"; |
| edgequake_webui/src/hooks/use-ingestion-progress.ts | 48 | /** Cancel the ingestion job */ |
| edgequake_webui/src/hooks/use-ingestion-progress.ts | 55 | * Hook to track ingestion progress for a specific track ID. |
| edgequake_webui/src/hooks/use-ingestion-progress.ts | 102 | queryKey: ["ingestion-progress", trackId], |
| edgequake_webui/src/hooks/use-ingestion-progress.ts | 200 | * Hook to get all active ingestion tracks. |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| quickstart.sh | 543 | # This is the First-Principle correct behaviour: the vision LLM (PDF → Markdown) |
| quickstart.sh | 652 | printf " 2. Upload a PDF or paste text to build your knowledge graph\n" |
| test_docker_e2e.py | 103 | print(" 5. Upload a PDF document") |
| scripts/analyze_f1_gap.py | 2 | """Analyze F1 gap for a specific PDF file.""" |
| scripts/analyze_f1_gap.py | 13 | pdf_dir = Path("edgequake/crates/edgequake-pdf/test-data/real_dataset") |
| scripts/analyze_f1_gap.py | 14 | pdf_path = pdf_dir / f"{pdf_name}.pdf" |
| scripts/analyze_f1_gap.py | 18 | print(f"PDF not found: {pdf_path}") |
| scripts/analyze_f1_gap.py | 33 | "pdfium", |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| edgequake/benches/chunking_bench.rs | 4 | use edgequake_pipeline::chunker::{Chunker, ChunkerConfig}; |
| edgequake/benches/chunking_bench.rs | 13 | let chunker = Chunker::new(config); |
| edgequake/benches/chunking_bench.rs | 17 | b.iter(\|\| chunker.chunk(black_box(&text), black_box("doc-1"))) |
| edgequake/benches/chunking_bench.rs | 23 | let chunker = Chunker::new(config); |
| edgequake/benches/chunking_bench.rs | 30 | b.iter(\|\| chunker.chunk(black_box(&text), black_box("doc-1"))) |
| edgequake/benches/chunking_bench.rs | 38 | let chunker = Chunker::new(config); |
| edgequake/benches/chunking_bench.rs | 46 | b.iter(\|\| chunker.chunk(black_box(&text), black_box("doc-1"))) |
| edgequake/benches/chunking_bench.rs | 58 | let default_chunker = Chunker::new(ChunkerConfig::default()); |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| edgequake_webui/src/components/workspace/embedding-model-selector.tsx | 3 | * @description Dropdown selector for choosing embedding model when creating a workspace. |
| edgequake_webui/src/components/workspace/embedding-model-selector.tsx | 4 | * Displays ALL available embedding models per provider with their dimensions. |
| edgequake_webui/src/components/workspace/embedding-model-selector.tsx | 6 | * @implements SPEC-032: Ollama/LM Studio provider support - Workspace embedding selection |
| edgequake_webui/src/components/workspace/embedding-model-selector.tsx | 7 | * @iteration OODA #19-20 - Workspace embedding UI |
| edgequake_webui/src/components/workspace/embedding-model-selector.tsx | 10 | * @enforces BR0303 - Embedding model must be chosen at workspace creation |
| edgequake_webui/src/components/workspace/embedding-model-selector.tsx | 42 | /** Currently selected embedding model */ |
| edgequake_webui/src/components/workspace/embedding-model-selector.tsx | 44 | /** Callback when embedding selection changes */ |
| edgequake_webui/src/components/workspace/embedding-model-selector.tsx | 54 | * Embedding model selector component for workspace creation. |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| edgequake/crates/edgequake-query/src/chunk_retrieval.rs | 1 | //! Chunk retrieval from entities and relationships. |
| edgequake/crates/edgequake-query/src/chunk_retrieval.rs | 3 | //! This module provides functionality to retrieve text chunks that are related |
| edgequake/crates/edgequake-query/src/chunk_retrieval.rs | 9 | //! - **FEAT0113**: Entity-based chunk retrieval via source tracking |
| edgequake/crates/edgequake-query/src/chunk_retrieval.rs | 36 | /// Vector-based: Rerank chunks by similarity to query. |
| edgequake/crates/edgequake-query/src/chunk_retrieval.rs | 40 | /// Retrieve chunks related to entities using source IDs. |
| edgequake/crates/edgequake-query/src/chunk_retrieval.rs | 64 | // Step 2: Retrieve chunks from KV storage |
| edgequake/crates/edgequake-query/src/chunk_retrieval.rs | 94 | // Rerank by vector similarity if embedding provided |
| edgequake/crates/edgequake-query/src/chunk_retrieval.rs | 116 | /// Retrieve chunks related to relationships. |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| quickstart.sh | 410 | # JSON output. Always prefer gpt-5.4-* models for entity extraction. |
| edgequake_webui/playwright.spec013-ui.config.ts | 13 | /issue-(216\|218\|231\|232\|233\|236\|workspace-server-default)-.*\.spec\.ts\|entity-types-strict-limit\.spec\.ts/, |
| scripts/spec006_no_unguarded_community_api.sh | 2 | # SPEC-006 P6: community detection must be guarded at API boundary. |
| scripts/spec006_no_unguarded_community_api.sh | 14 | echo "SPEC-006 violation: unguarded community detection in API layer:" |
| scripts/spec006_no_unguarded_community_api.sh | 24 | if ! rg -q 'detect_communities_unchecked' "$ROOT/edgequake/crates/edgequake-storage/src/community.rs"; then |
| scripts/spec006_no_unguarded_community_api.sh | 25 | echo "SPEC-006 violation: community.rs must define detect_communities_unchecked" |
| scripts/spec006_no_unguarded_community_api.sh | 30 | --glob '!**/community.rs' \ |
| scripts/spec006_no_unguarded_community_api.sh | 34 | echo "SPEC-006 violation: detect_communities_unchecked only allowed in community.rs + graph_community.rs:" |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| quickstart.sh | 248 | # § Step 2 — Download / refresh compose file |
| quickstart.sh | 250 | # picked up on re-runs without manual cache clearing. (ADR-002) |
| quickstart.sh | 269 | # Called when the user chose "Fresh Start". Requires "DELETE" confirmation. |
| quickstart.sh | 272 | ui_warn "This will permanently delete ALL EdgeQuake data (PostgreSQL volumes, graph)." |
| quickstart.sh | 274 | printf " Type ${C_BOLD}DELETE${C_RESET} to confirm, or press Enter to cancel: " |
| quickstart.sh | 276 | if [ "${_TTY_INPUT:-}" = "DELETE" ]; then |
| quickstart.sh | 355 | "Fresh Start — WARNING: DELETE all data and start over (irreversible)" \ |
| quickstart.sh | 521 | ui_warn "Remember to start Ollama before uploading documents." |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| edgequake_webui/src/components/lineage/entity-provenance-panel.tsx | 4 | * Based on WebUI Specification Document WEBUI-006 (15-webui-lineage-viz.md) |
| edgequake_webui/src/components/lineage/entity-provenance-panel.tsx | 6 | * @implements UC0302 - User views entity extraction provenance |
| edgequake_webui/src/components/lineage/entity-provenance-panel.tsx | 25 | import { useEntityProvenance } from '@/hooks/use-lineage'; |
| edgequake_webui/src/components/lineage/entity-provenance-panel.tsx | 37 | /** Entity ID to show provenance for */ |
| edgequake_webui/src/components/lineage/entity-provenance-panel.tsx | 52 | * Displays provenance information for an entity including: |
| edgequake_webui/src/components/lineage/entity-provenance-panel.tsx | 65 | const { data: provenance, isLoading, error } = useEntityProvenance(entityId); |
| edgequake_webui/src/components/lineage/entity-provenance-panel.tsx | 89 | <CardTitle className="text-base">Entity Provenance</CardTitle> |
| edgequake_webui/src/components/lineage/entity-provenance-panel.tsx | 96 | Failed to load provenance: {(error as Error).message} |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| scripts/compare_against_pymupdf.py | 68 | precision = true_positives / len(pred_set) if pred_set else 0 |
| scripts/compare_against_pymupdf.py | 69 | recall = true_positives / len(gold_set) if gold_set else 0 |
| scripts/compare_against_pymupdf.py | 71 | 2 * precision * recall / (precision + recall) if (precision + recall) > 0 else 0 |
| scripts/compare_against_pymupdf.py | 75 | "precision": precision, |
| scripts/compare_against_pymupdf.py | 76 | "recall": recall, |
| scripts/compare_against_pymupdf.py | 188 | f" F1: {scores['f1']:.3f} (P: {scores['precision']:.3f}, R: {scores['recall']:.3f})" |
| scripts/compare_against_pymupdf.py | 202 | total_p = sum(r[1]["precision"] for r in results) / len(results) |
| scripts/compare_against_pymupdf.py | 203 | total_r = sum(r[1]["recall"] for r in results) / len(results) |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| quickstart.sh | 166 | # container itself — NOT to the host machine where Ollama is running. |
| quickstart.sh | 181 | # http://my-ollama-server:PORT → unchanged (custom remote host) |
| quickstart.sh | 239 | printf ' EDGEQUAKE_LLM_PROVIDER=openai \\\n' |
| quickstart.sh | 378 | ui_info "Tip: export OPENAI_API_KEY=sk-... before running to use OpenAI." |
| quickstart.sh | 383 | "OpenAI — cloud API (GPT-5.4 family) · requires OPENAI_API_KEY" \ |
| quickstart.sh | 384 | "Ollama — fully local, free to run · requires Ollama daemon on port 11434" |
| quickstart.sh | 387 | 1) LLM_PROVIDER="openai" ;; |
| quickstart.sh | 388 | 2) LLM_PROVIDER="ollama" ;; |

## Gap

_없음_
