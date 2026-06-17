# otomata-tech/memento-core 코드 레벨 분석

생성일: 2026-06-17T23:31:46.419Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | A integrated platform (88) |
| stars | 0 |
| language | TypeScript |
| tags | rag, knowledge-base, agent-knowledge |
| files/code/source | 128/71/70 |
| tests/ci | 1/1 |
| local path | sources/otomata-tech__memento-core |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 14 | 9 | app/src/api.ts:124 ingestion: (id: string) => get<IngestionDetail>("/ingestion", { id }), |
| Parsing/OCR/document extraction | doc-only | 1 | 0 | docs/specs/knowledge-base.md:467 Quand une nouvelle source arrive (PDF, note, retour d'expérience) : |
| Chunking/splitting | code | 2 | 1 | supabase/functions/_shared/paths.ts:4 * `workspace/section[/...]/document` (pour un document). Le premier segment est |
| Embedding/vector index | code | 17 | 10 | server/drizzle/0006_block_embeddings.sql:1 -- Embeddings par bloc (issue #10) — hors DSL Drizzle, comme search_vector (0001). |
| Retrieval/search/rerank | code | 13 | 8 | app/functions/_proxy.ts:15 const target = SUPABASE + targetPath + (keepSearch ? url.search : ""); |
| Wiki/graph/entity model | code | 23 | 12 | app/src/api.ts:54 export interface BlockLink { id: string; relation: string; note: string \| null; toBlockId?: string; fromBlockId?: string } |
| Memory/update lifecycle | code | 24 | 20 | app/functions/_proxy.ts:18 headers.delete("host"); // redérivé de target par le runtime |
| Provenance/citation/evidence | code | 19 | 9 | app/src/api.ts:53 export interface BlockSource { sourceId?: string; kind?: string; title: string; ref: string \| null; citation: string \| null; locator: string \| null } |
| Evaluation/observability | code | 4 | 2 | supabase/functions/_shared/list.ts:3 * exhaustif de mem_search (top-k). Recall 100 % par construction — SQL pur, |
| Agent/MCP/tool surface | code | 35 | 27 | app/functions/_proxy.ts:3 // /mcp* → /functions/v1/mcp (SSE, query droppée comme Caddy) |

## 의존성 신호

- Persistence/database: @supabase/supabase-js, drizzle-orm, postgres, drizzle-kit

## 주요 파일 후보

### Ingestion/source intake

- `app/src/api.ts`
- `server/drizzle/0016_illegal_thunderball.sql`
- `supabase/functions/_shared/ingestion.ts`
- `supabase/functions/_shared/access.ts`
- `supabase/functions/_shared/urls.ts`
- `supabase/functions/_shared/write.ts`
- `supabase/functions/_smoke/idempotence_44.ts`
- `supabase/functions/api/index.ts`
- `supabase/functions/mcp/index.ts`
- `README.md`
- `docs/access-control.md`
- `docs/connect-mcp.md`
- ... 2 more

### Parsing/OCR/document extraction

- `docs/specs/knowledge-base.md`

### Chunking/splitting

- `supabase/functions/_shared/paths.ts`
- `docs/principles.md`

### Embedding/vector index

- `server/drizzle/0006_block_embeddings.sql`
- `server/src/backfill-embeddings.ts`
- `server/drizzle/0014_pg_cron_purge.sql`
- `supabase/functions/_shared/list.ts`
- `supabase/functions/_shared/search.ts`
- `supabase/functions/_shared/semantic.ts`
- `supabase/functions/_smoke/idempotence_44.ts`
- `supabase/functions/_smoke/search_42_43.ts`
- `supabase/functions/_smoke/seed.sql`
- `supabase/functions/mcp/index.ts`
- `server/package.json`
- `supabase/config.toml`
- ... 5 more

### Retrieval/search/rerank

- `app/functions/_proxy.ts`
- `app/src/api.ts`
- `app/src/router.ts`
- `server/drizzle/0001_search_vector.sql`
- `supabase/functions/_shared/search.ts`
- `supabase/functions/_smoke/search_42_43.ts`
- `supabase/functions/api/index.ts`
- `supabase/functions/mcp/index.ts`
- `CLAUDE.md`
- `docs/access-control.md`
- `docs/connect-mcp.md`
- `docs/principles.md`
- ... 1 more

### Wiki/graph/entity model

- `app/src/api.ts`
- `server/drizzle/0000_init.sql`
- `server/src/schema.ts`
- `app/src/lib/blocks.ts`
- `supabase/functions/_shared/documents.ts`
- `supabase/functions/_shared/graph.ts`
- `supabase/functions/_shared/list.ts`
- `supabase/functions/_shared/search.ts`
- `supabase/functions/_shared/semantic.ts`
- `supabase/functions/_shared/write.ts`
- `supabase/functions/_smoke/seed.sql`
- `supabase/functions/mcp/index.ts`
- ... 6 more

### Memory/update lifecycle

- `app/functions/_proxy.ts`
- `app/src/api.ts`
- `server/drizzle/0000_init.sql`
- `server/drizzle/0002_many_owl.sql`
- `server/drizzle/0003_puzzling_blue_shield.sql`
- `server/drizzle/0011_spicy_lilith.sql`
- `server/drizzle/0013_rate_limits.sql`
- `server/drizzle/0014_pg_cron_purge.sql`
- `server/drizzle/0016_illegal_thunderball.sql`
- `server/drizzle/0017_hard_eternals.sql`
- `supabase/functions/_shared/admin.ts`
- `supabase/functions/_shared/grants.ts`
- ... 6 more

### Provenance/citation/evidence

- `app/src/api.ts`
- `server/drizzle/0000_init.sql`
- `server/src/schema.ts`
- `server/src/seed.ts`
- `supabase/functions/_shared/documents.ts`
- `supabase/functions/_shared/ingestion.ts`
- `supabase/functions/_shared/write.ts`
- `supabase/functions/_smoke/seed.sql`
- `supabase/functions/mcp/index.ts`
- `server/drizzle/meta/0000_snapshot.json`
- `server/drizzle/meta/0002_snapshot.json`
- `server/drizzle/meta/0003_snapshot.json`
- ... 6 more

### Evaluation/observability

- `supabase/functions/_shared/list.ts`
- `supabase/functions/mcp/index.ts`
- `app/package-lock.json`
- `server/package-lock.json`

### Agent/MCP/tool surface

- `app/functions/_proxy.ts`
- `app/functions/mcp.ts`
- `app/src/api.ts`
- `app/src/hosts.ts`
- `server/drizzle/0005_enable_rls.sql`
- `server/drizzle/0012_tool_calls.sql`
- `server/drizzle/0016_illegal_thunderball.sql`
- `server/src/backfill-embeddings.ts`
- `server/src/schema.ts`
- `server/src/seed.ts`
- `app/functions/.well-known/[[path]].ts`
- `supabase/functions/_shared/admin.ts`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| app/src/api.ts | 124 | ingestion: (id: string) => get<IngestionDetail>("/ingestion", { id }), |
| app/src/api.ts | 136 | send<IngestionDetail>("POST", "/ingestion/apply", { id, acceptIds, edits }), |
| app/src/api.ts | 138 | send<{ id: string; status: string }>("POST", "/ingestion/reject", { id, reason }), |
| app/src/api.ts | 140 | send<IngestionDetail & { requested: number; hasNote: boolean }>("POST", "/ingestion/request-changes", { id, ...input }), |
| server/drizzle/0016_illegal_thunderball.sql | 1 | -- Ping-pong de revue (boucle propose-valide) : un humain peut renvoyer une ingestion |
| supabase/functions/_shared/ingestion.ts | 11 | * workspace de l'ingestion (pas de mutation cross-workspace via un change-set forgé). |
| supabase/functions/_shared/ingestion.ts | 13 | * L'état de chaque change (applied/error) est persisté dans le `proposal` jsonb : une ingestion |
| supabase/functions/_shared/ingestion.ts | 38 | // Cible primaire de chaque op → pour vérifier qu'elle vit dans le workspace de l'ingestion. |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| docs/specs/knowledge-base.md | 467 | Quand une nouvelle source arrive (PDF, note, retour d'expérience) : |
| docs/specs/knowledge-base.md | 469 | 1. **Conversion** — PDF/DOCX → markdown via un convertisseur (l'outil `ingest.py` |
| docs/specs/knowledge-base.md | 535 | 1. Récupère les docs (markdown déjà converti, ou PDF → markdown via un convertisseur) ; |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| supabase/functions/_shared/paths.ts | 4 | * `workspace/section[/...]/document` (pour un document). Le premier segment est |
| docs/principles.md | 32 | L'unité n'est ni le document ni le chunk : c'est le **bloc typé** (principe, règle, |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| server/drizzle/0006_block_embeddings.sql | 1 | -- Embeddings par bloc (issue #10) — hors DSL Drizzle, comme search_vector (0001). |
| server/drizzle/0006_block_embeddings.sql | 5 | CREATE EXTENSION IF NOT EXISTS vector; |
| server/drizzle/0006_block_embeddings.sql | 7 | ALTER TABLE mem_blocks ADD COLUMN IF NOT EXISTS embedding vector(1536); |
| server/drizzle/0006_block_embeddings.sql | 10 | -- HNSW cosine : bon rappel sans tuning, index vivant (pas de re-build comme ivfflat). |
| server/drizzle/0006_block_embeddings.sql | 12 | ON mem_blocks USING hnsw (embedding vector_cosine_ops); |
| server/src/backfill-embeddings.ts | 2 | * Backfill des embeddings de blocs (issue #10) : vectorise tout bloc à embedding |
| server/src/backfill-embeddings.ts | 9 | const MODEL = "text-embedding-3-small"; // garder aligné avec _shared/semantic.ts |
| server/src/backfill-embeddings.ts | 14 | const res = await fetch("https://api.openai.com/v1/embeddings", { |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| app/functions/_proxy.ts | 15 | const target = SUPABASE + targetPath + (keepSearch ? url.search : ""); |
| app/src/api.ts | 107 | search: (workspace: string, q: string, maxHits = 20) => get<SearchResult>("/search", { workspace, q, maxHits }), |
| app/src/api.ts | 174 | search: (q: string, maxHits = 30) => |
| app/src/api.ts | 175 | get<{ hits: PublicSearchHit[]; total: number; hasMore: boolean }>("/public/search", { q, maxHits }), |
| app/src/router.ts | 29 | { path: "/w/:ws/search", component: () => import("./views/ReaderView.vue") }, |
| server/drizzle/0001_search_vector.sql | 1 | -- Full-text search par bloc (spec §7). Hors DSL Drizzle : colonne tsvector |
| server/drizzle/0001_search_vector.sql | 4 | CREATE TEXT SEARCH CONFIGURATION french_unaccent ( COPY = french );--> statement-breakpoint |
| server/drizzle/0001_search_vector.sql | 5 | ALTER TEXT SEARCH CONFIGURATION french_unaccent |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| app/src/api.ts | 54 | export interface BlockLink { id: string; relation: string; note: string \| null; toBlockId?: string; fromBlockId?: string } |
| server/drizzle/0000_init.sql | 73 | "relation" "mem_link_relation" NOT NULL, |
| server/drizzle/0000_init.sql | 150 | CREATE UNIQUE INDEX "mem_links_from_to_rel" ON "mem_links" USING btree ("from_block_id","to_block_id","relation");--> statement-breakpoint |
| server/src/schema.ts | 250 | relation: linkRelation("relation").notNull(), |
| server/src/schema.ts | 256 | uniqueIndex("mem_links_from_to_rel").on(t.fromBlockId, t.toBlockId, t.relation), |
| app/src/lib/blocks.ts | 23 | /** Classe d'accent d'une relation (rouge pour les cas précieux, bleu pour les appuis). */ |
| app/src/lib/blocks.ts | 47 | * Voisins d'un bloc groupés par relation (dédup des liens symétriques). |
| app/src/lib/blocks.ts | 52 | ...center.linksFrom.map((l) => ({ rel: l.relation, otherId: l.toBlockId!, note: l.note })), |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| app/functions/_proxy.ts | 18 | headers.delete("host"); // redérivé de target par le runtime |
| app/src/api.ts | 113 | unpinWorkspace: (workspace: string) => send<{ slug: string }>("DELETE", "/prefs/pin", { workspace }), |
| app/src/api.ts | 147 | send<{ deleted: string }>("DELETE", "/admin/orgs", { orgSlug }), |
| app/src/api.ts | 160 | send<{ removed: string }>("DELETE", "/admin/members", { orgSlug, userId }), |
| app/src/api.ts | 168 | send<{ workspace: string; removed: string }>("DELETE", "/workspace/grants", { workspace, userId }), |
| server/drizzle/0000_init.sql | 134 | ALTER TABLE "mem_block_sources" ADD CONSTRAINT "mem_block_sources_block_id_mem_blocks_id_fk" FOREIGN KEY ("block_id") REFERENCES "public"."mem_blocks"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint |
| server/drizzle/0000_init.sql | 135 | ALTER TABLE "mem_block_sources" ADD CONSTRAINT "mem_block_sources_source_id_mem_sources_id_fk" FOREIGN KEY ("source_id") REFERENCES "public"."mem_sources"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakp |
| server/drizzle/0000_init.sql | 136 | ALTER TABLE "mem_blocks" ADD CONSTRAINT "mem_blocks_document_id_mem_documents_id_fk" FOREIGN KEY ("document_id") REFERENCES "public"."mem_documents"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| app/src/api.ts | 53 | export interface BlockSource { sourceId?: string; kind?: string; title: string; ref: string \| null; citation: string \| null; locator: string \| null } |
| app/src/api.ts | 73 | export interface IngestionSummary { id: string; title: string; status: string; sourceId: string \| null; createdBy: string \| null; createdAt: string; counts: IngestionCounts } |
| app/src/api.ts | 129 | attachSource: (input: { blockId: string; kind: string; title: string; ref?: string; citation?: string; locator?: string; reason?: string }) => |
| app/src/api.ts | 130 | send<{ blockId: string; sourceId: string }>("POST", "/block/source", input), |
| server/drizzle/0000_init.sql | 9 | "source_id" uuid NOT NULL, |
| server/drizzle/0000_init.sql | 12 | CONSTRAINT "mem_block_sources_block_id_source_id_pk" PRIMARY KEY("block_id","source_id") |
| server/drizzle/0000_init.sql | 58 | "source_id" uuid, |
| server/drizzle/0000_init.sql | 120 | "citation" text, |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| supabase/functions/_shared/list.ts | 3 | * exhaustif de mem_search (top-k). Recall 100 % par construction — SQL pur, |
| supabase/functions/mcp/index.ts | 99 | (déterministes, recall 100 %) et mem_revisions({since}) pour le delta de session. |
| supabase/functions/mcp/index.ts | 471 | "Énumération DÉTERMINISTE — recall 100 %, le complément de mem_search (top-k). Pour « liste tout », « lesquels », « qu'est-ce qui a changé depuis » → mem_list ; pour « combien » → mem_count. JAMAIS mem_search pour de l'e |
| app/package-lock.json | 885 | "node_modules/@supabase/phoenix": { |
| app/package-lock.json | 887 | "resolved": "https://registry.npmjs.org/@supabase/phoenix/-/phoenix-0.4.2.tgz", |
| app/package-lock.json | 909 | "@supabase/phoenix": "^0.4.2", |
| server/package-lock.json | 966 | "@opentelemetry/api": "^1.4.1", |
| server/package-lock.json | 1010 | "@opentelemetry/api": { |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| app/functions/_proxy.ts | 3 | // /mcp* → /functions/v1/mcp (SSE, query droppée comme Caddy) |
| app/functions/_proxy.ts | 4 | // /.well-known/* → /functions/v1/mcp{pathname} (discovery OAuth) |
| app/functions/mcp.ts | 1 | // /mcp → function mcp Supabase. Query droppée (mirror Caddy `rewrite * /functions/v1/mcp`). |
| app/functions/mcp.ts | 5 | proxyTo("/functions/v1/mcp", ctx.request, false); |
| app/src/api.ts | 1 | // Client REST minimal vers le backend Memento (/api miroir des verbes MCP). |
| app/src/hosts.ts | 4 | // mcp.mento.cc → endpoint MCP (pas de SPA humaine) |
| server/drizzle/0005_enable_rls.sql | 9 | -- `mcp`/`api` qui se connectent via DATABASE_URL en tant que rôle propriétaire des |
| server/drizzle/0012_tool_calls.sql | 1 | -- Journal des appels de tools MCP — schéma CANONIQUE otomata-calllog |

## Gap

_없음_
