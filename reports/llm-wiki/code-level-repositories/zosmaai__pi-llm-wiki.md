# zosmaai/pi-llm-wiki 코드 레벨 분석

생성일: 2026-06-17T23:31:16.219Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | persistent-llm-wiki |
| maturity | A integrated platform (98) |
| stars | 154 |
| language | TypeScript |
| tags | direct-llm-wiki, knowledge-base, korea-signal |
| files/code/source | 107/49/24 |
| tests/ci | 25/4 |
| local path | sources/zosmaai__pi-llm-wiki |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 36 | 5 | extensions/llm-wiki/lib/ingest-worker.ts:12 * Background ingest synthesis (issue #65, part of epic #63). |
| Parsing/OCR/document extraction | code | 23 | 3 | mcp/index.ts:12 * WIKI_MARKITDOWN_TIMEOUT_MS — PDF extraction timeout (default: 180000) |
| Chunking/splitting | code | 7 | 2 | extensions/llm-wiki/lib/embeddings.ts:332 res.on("data", (chunk) => { |
| Embedding/vector index | code | 14 | 9 | extensions/llm-wiki/lib/embeddings.ts:12 * Background semantic embeddings, computed at write time (issue #66, epic #63). |
| Retrieval/search/rerank | code | 33 | 7 | mcp/index.ts:117 "Search the wiki for pages relevant to a query. Returns matching page IDs, titles, types, and content previews.", |
| Wiki/graph/entity model | code | 53 | 8 | mcp/index.ts:220 .describe("Filter by page type (source, entity, concept, synthesis, analysis)"), |
| Memory/update lifecycle | code | 49 | 15 | extensions/llm-wiki/index.ts:88 // Agent working-memory (issue #80): capture what the agent *did* (its |
| Provenance/citation/evidence | code | 29 | 4 | mcp/index.ts:370 ) => { sourceId: string; packetPath: string; sourcePagePath: string }; |
| Evaluation/observability | code | 34 | 11 | extensions/llm-wiki/index.ts:18 } from "./lib/recall.js"; |
| Agent/MCP/tool surface | code | 57 | 20 | mcp/index.ts:4 * LLM Wiki MCP Server |

## 의존성 신호

_없음_

## 주요 파일 후보

### Ingestion/source intake

- `extensions/llm-wiki/lib/ingest-worker.ts`
- `extensions/llm-wiki/lib/runtime.ts`
- `extensions/llm-wiki/lib/subagent.ts`
- `extensions/llm-wiki/lib/task-config.ts`
- `extensions/llm-wiki/lib/tools.ts`
- `package.json`
- `.github/workflows/ci.yml`
- `.github/workflows/release.yml`
- `skills/llm-wiki/templates/config.yaml`
- `test/ingest-tool.test.ts`
- `test/ingest-worker.test.ts`
- `test/package-structure.test.ts`
- ... 6 more

### Parsing/OCR/document extraction

- `mcp/index.ts`
- `extensions/llm-wiki/lib/source-extractors.ts`
- `extensions/llm-wiki/lib/source-packet.ts`
- `test/e2e-binary-detection.test.ts`
- `test/e2e-docx.test.ts`
- `test/e2e-guardrails.test.ts`
- `test/e2e-html-normalization.test.ts`
- `test/helpers.ts`
- `test/ingest-worker.test.ts`
- `test/package-structure.test.ts`
- `test/source-capture.test.ts`
- `README.de.md`
- ... 6 more

### Chunking/splitting

- `extensions/llm-wiki/lib/embeddings.ts`
- `extensions/llm-wiki/lib/recall.ts`
- `test/e2e-docx.test.ts`
- `test/personal-wiki-paths.test.ts`
- `test/recall.test.ts`
- `CHANGELOG.md`
- `docs/api.md`

### Embedding/vector index

- `extensions/llm-wiki/lib/embeddings.ts`
- `extensions/llm-wiki/index.ts`
- `extensions/llm-wiki/lib/guardrails.ts`
- `extensions/llm-wiki/lib/indexing.ts`
- `extensions/llm-wiki/lib/observation.ts`
- `extensions/llm-wiki/lib/recall.ts`
- `extensions/llm-wiki/lib/runtime.ts`
- `extensions/llm-wiki/lib/task-config.ts`
- `extensions/llm-wiki/lib/tools.ts`
- `test/embeddings.test.ts`
- `test/indexing.test.ts`
- `test/recall.test.ts`
- ... 2 more

### Retrieval/search/rerank

- `mcp/index.ts`
- `extensions/llm-wiki/index.ts`
- `extensions/llm-wiki/lib/embeddings.ts`
- `extensions/llm-wiki/lib/observation.ts`
- `extensions/llm-wiki/lib/recall.ts`
- `extensions/llm-wiki/lib/tools.ts`
- `extensions/llm-wiki/lib/trajectory.ts`
- `package.json`
- `skills/llm-wiki/templates/config.yaml`
- `test/e2e-guardrails.test.ts`
- `test/embeddings.test.ts`
- `test/observation.test.ts`
- ... 6 more

### Wiki/graph/entity model

- `mcp/index.ts`
- `extensions/llm-wiki/lib/ingest-worker.ts`
- `extensions/llm-wiki/lib/metadata.ts`
- `extensions/llm-wiki/lib/recall.ts`
- `extensions/llm-wiki/lib/source-extractors.ts`
- `extensions/llm-wiki/lib/source-packet.ts`
- `extensions/llm-wiki/lib/tools.ts`
- `extensions/llm-wiki/lib/utils.ts`
- `package-lock.json`
- `package.json`
- `skills/llm-wiki/templates/config.yaml`
- `test/e2e-guardrails.test.ts`
- ... 6 more

### Memory/update lifecycle

- `extensions/llm-wiki/index.ts`
- `extensions/llm-wiki/lib/embeddings.ts`
- `extensions/llm-wiki/lib/guardrails.ts`
- `extensions/llm-wiki/lib/indexing.ts`
- `extensions/llm-wiki/lib/ingest-worker.ts`
- `extensions/llm-wiki/lib/metadata.ts`
- `extensions/llm-wiki/lib/observation.ts`
- `extensions/llm-wiki/lib/recall.ts`
- `extensions/llm-wiki/lib/retro.ts`
- `extensions/llm-wiki/lib/runtime.ts`
- `extensions/llm-wiki/lib/subagent.ts`
- `extensions/llm-wiki/lib/task-config.ts`
- ... 6 more

### Provenance/citation/evidence

- `mcp/index.ts`
- `extensions/llm-wiki/lib/ingest-worker.ts`
- `extensions/llm-wiki/lib/source-packet.ts`
- `extensions/llm-wiki/lib/tools.ts`
- `.github/workflows/release.yml`
- `test/e2e-binary-detection.test.ts`
- `test/ingest-worker.test.ts`
- `test/wiki-structure.test.ts`
- `CHANGELOG.md`
- `README.de.md`
- `README.es.md`
- `README.fr.md`
- ... 6 more

### Evaluation/observability

- `extensions/llm-wiki/index.ts`
- `extensions/llm-wiki/lib/embeddings.ts`
- `extensions/llm-wiki/lib/metadata.ts`
- `extensions/llm-wiki/lib/observation.ts`
- `extensions/llm-wiki/lib/recall.ts`
- `extensions/llm-wiki/lib/task-config.ts`
- `extensions/llm-wiki/lib/tools.ts`
- `extensions/llm-wiki/lib/trajectories-command.ts`
- `extensions/llm-wiki/lib/trajectory.ts`
- `extensions/llm-wiki/lib/utils.ts`
- `extensions/llm-wiki/lib/visible-status.ts`
- `test/observation.test.ts`
- ... 6 more

### Agent/MCP/tool surface

- `mcp/index.ts`
- `extensions/llm-wiki/index.ts`
- `extensions/llm-wiki/lib/embeddings.ts`
- `extensions/llm-wiki/lib/guardrails.ts`
- `extensions/llm-wiki/lib/indexing.ts`
- `extensions/llm-wiki/lib/ingest-worker.ts`
- `extensions/llm-wiki/lib/metadata.ts`
- `extensions/llm-wiki/lib/model-command.ts`
- `extensions/llm-wiki/lib/observation.ts`
- `extensions/llm-wiki/lib/recall.ts`
- `extensions/llm-wiki/lib/retro.ts`
- `extensions/llm-wiki/lib/runtime.ts`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| extensions/llm-wiki/lib/ingest-worker.ts | 12 | * Background ingest synthesis (issue #65, part of epic #63). |
| extensions/llm-wiki/lib/ingest-worker.ts | 194 | kind: "ingest", |
| extensions/llm-wiki/lib/ingest-worker.ts | 207 | export const INGEST_SYSTEM = `You are the LLM Wiki ingestion synthesizer. You turn a single captured source's extracted text into structured wiki knowledge. |
| extensions/llm-wiki/lib/runtime.ts | 23 | * infrastructure that issues #65 (background ingest), #66 (background |
| extensions/llm-wiki/lib/subagent.ts | 12 | * Wraps `agentLoop` so background tasks (ingest synthesis, topic inference, |
| extensions/llm-wiki/lib/task-config.ts | 8 | * The wiki's intelligent work (ingest synthesis, embeddings, topic inference) |
| extensions/llm-wiki/lib/tools.ts | 7 | import { runIngestSynthesis } from "./ingest-worker.js"; |
| extensions/llm-wiki/lib/tools.ts | 284 | label: "Wiki Ingest", |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| mcp/index.ts | 12 | * WIKI_MARKITDOWN_TIMEOUT_MS — PDF extraction timeout (default: 180000) |
| extensions/llm-wiki/lib/source-extractors.ts | 49 | { bytes: [0x50, 0x4b, 0x03, 0x04], format: "zip" }, // ZIP / DOCX / XLSX / PPTX / JAR |
| extensions/llm-wiki/lib/source-extractors.ts | 50 | { bytes: [0x25, 0x50, 0x44, 0x46], format: "pdf" }, // %PDF |
| extensions/llm-wiki/lib/source-extractors.ts | 109 | format: "pdf", |
| extensions/llm-wiki/lib/source-extractors.ts | 111 | extractorName: "markitdown", |
| extensions/llm-wiki/lib/source-extractors.ts | 112 | content_type: "application/pdf", |
| extensions/llm-wiki/lib/source-extractors.ts | 113 | matches: hasExtension(".pdf"), |
| extensions/llm-wiki/lib/source-extractors.ts | 136 | format: "docx", |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| extensions/llm-wiki/lib/embeddings.ts | 332 | res.on("data", (chunk) => { |
| extensions/llm-wiki/lib/embeddings.ts | 333 | data += chunk.toString(); |
| extensions/llm-wiki/lib/recall.ts | 242 | // ─── Chunk-Level Indexing ──────────────────────────── |
| extensions/llm-wiki/lib/recall.ts | 247 | /** Content of this chunk */ |
| extensions/llm-wiki/lib/recall.ts | 255 | * Each heading and its following content become one chunk. |
| extensions/llm-wiki/lib/recall.ts | 256 | * Content before the first heading becomes the intro chunk. |
| extensions/llm-wiki/lib/recall.ts | 271 | // Save previous chunk |
| extensions/llm-wiki/lib/recall.ts | 287 | // Save last chunk |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| extensions/llm-wiki/lib/embeddings.ts | 12 | * Background semantic embeddings, computed at write time (issue #66, epic #63). |
| extensions/llm-wiki/lib/embeddings.ts | 14 | * Every wiki page gets a normalized embedding vector stored in a sidecar |
| extensions/llm-wiki/lib/embeddings.ts | 15 | * (`meta/embeddings.json`), keyed by page id with a content hash for staleness |
| extensions/llm-wiki/lib/embeddings.ts | 16 | * detection. Embeddings are computed in the background via the #64 runtime so |
| extensions/llm-wiki/lib/embeddings.ts | 18 | * rank pages WITHOUT any embedding/LLM call in the query hot path. |
| extensions/llm-wiki/lib/embeddings.ts | 21 | * - Fully optional: with no embedding provider configured, `resolveEmbedder` |
| extensions/llm-wiki/lib/embeddings.ts | 24 | * - Embeddings have their OWN auth path (an embedding API key + an |
| extensions/llm-wiki/lib/embeddings.ts | 27 | * - The compute/store functions take an injected `Embedder`, so unit tests |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| mcp/index.ts | 117 | "Search the wiki for pages relevant to a query. Returns matching page IDs, titles, types, and content previews.", |
| mcp/index.ts | 119 | query: z.string().describe("Search query — use the user's full request or key terms"), |
| mcp/index.ts | 214 | description: "Search the wiki registry for pages matching a query.", |
| mcp/index.ts | 216 | query: z.string().describe("Search term"), |
| extensions/llm-wiki/index.ts | 210 | // 2. Search both personal + project vaults for relevant pages. |
| extensions/llm-wiki/index.ts | 253 | // Auto-injection recall: search ONLY the project vault with a relevance |
| extensions/llm-wiki/index.ts | 274 | // includePersonal=false here mirrors the auto-injection search scope. |
| extensions/llm-wiki/index.ts | 299 | "\n\n<wiki_status>LLM Wiki active — use wiki_recall for deeper search, wiki_observe to record observations, wiki_retro to save insights.</wiki_status>"; |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| mcp/index.ts | 220 | .describe("Filter by page type (source, entity, concept, synthesis, analysis)"), |
| extensions/llm-wiki/lib/ingest-worker.ts | 15 | * captured source's extracted text and writing the source page + entity / |
| extensions/llm-wiki/lib/ingest-worker.ts | 34 | entities: Type.Array( |
| extensions/llm-wiki/lib/ingest-worker.ts | 38 | description: "Entity name (person, org, tool, product).", |
| extensions/llm-wiki/lib/ingest-worker.ts | 40 | description: Type.String({ description: "One-line description of the entity." }), |
| extensions/llm-wiki/lib/ingest-worker.ts | 42 | { description: "Named entities mentioned in the source." }, |
| extensions/llm-wiki/lib/ingest-worker.ts | 88 | return `---\ntype: entity\ncreated: ${date}\nupdated: ${date}\nsources: [[[sources/${sourceId}]]]\n---\n\n# ${title}\n\n${desc}\n\n## Overview\n\n[Key facts]\n\n## Links\n\n- [[sources/${sourceId}]]\n`; |
| extensions/llm-wiki/lib/ingest-worker.ts | 117 | const entities = |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| extensions/llm-wiki/index.ts | 88 | // Agent working-memory (issue #80): capture what the agent *did* (its |
| extensions/llm-wiki/lib/embeddings.ts | 199 | * Stale-aware: pages whose hash + model already match are skipped (unless |
| extensions/llm-wiki/lib/embeddings.ts | 247 | * the backfill / re-embed-stale path used by the reindex command. |
| extensions/llm-wiki/lib/embeddings.ts | 269 | delete store.entries[id]; |
| extensions/llm-wiki/lib/embeddings.ts | 388 | * per label, error-isolated, drained at compaction/shutdown — all via #64. |
| extensions/llm-wiki/lib/embeddings.ts | 408 | * Launch a background reindex (embed all stale registered pages + prune |
| extensions/llm-wiki/lib/embeddings.ts | 416 | runtime.launchTask(ctx, `embed:reindex:${paths.root}`, async () => { |
| extensions/llm-wiki/lib/guardrails.ts | 49 | // Rebuild metadata at end of turn if wiki was modified, then refresh |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| mcp/index.ts | 370 | ) => { sourceId: string; packetPath: string; sourcePagePath: string }; |
| mcp/index.ts | 380 | text: `Insight saved: ${result.sourceId} — ${title}`, |
| mcp/index.ts | 414 | let result: { sourceId: string }; |
| mcp/index.ts | 423 | ) => Promise<{ sourceId: string }>; |
| mcp/index.ts | 437 | ) => Promise<{ sourceId: string }>; |
| mcp/index.ts | 450 | ) => { sourceId: string }; |
| mcp/index.ts | 469 | text: `Source captured: ${result.sourceId}`, |
| extensions/llm-wiki/lib/ingest-worker.ts | 55 | attribution: Type.Optional(Type.String()), |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| extensions/llm-wiki/index.ts | 18 | } from "./lib/recall.js"; |
| extensions/llm-wiki/index.ts | 64 | * Layered recall: |
| extensions/llm-wiki/index.ts | 89 | // tool-call trajectory), distill it into reusable skills, and recall past |
| extensions/llm-wiki/index.ts | 195 | // (issue #77). Without this, recall/observe/retro are invisible — they |
| extensions/llm-wiki/index.ts | 206 | // ─── Layered recall + topic inference hook ────────── |
| extensions/llm-wiki/index.ts | 253 | // Auto-injection recall: search ONLY the project vault with a relevance |
| extensions/llm-wiki/index.ts | 283 | // Recall-aware status line (issue #77): make it visible that recall |
| extensions/llm-wiki/lib/embeddings.ts | 23 | * search (lib/recall.ts) is untouched. This is the default. |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| mcp/index.ts | 4 | * LLM Wiki MCP Server |
| mcp/index.ts | 6 | * Exposes wiki tools over the Model Context Protocol (MCP). |
| mcp/index.ts | 7 | * Run: node mcp/index.js |
| mcp/index.ts | 8 | * Or via package.json: pi install npm:@zosmaai/pi-llm-wiki && node mcp/index.js |
| mcp/index.ts | 17 | import { McpServer } from "@modelcontextprotocol/server"; |
| mcp/index.ts | 18 | import { StdioServerTransport } from "@modelcontextprotocol/server/stdio"; |
| mcp/index.ts | 104 | // ─── MCP Server ───────────────────────────────────────── |
| mcp/index.ts | 481 | console.error("🧠 LLM Wiki MCP Server running on stdio"); |

## Gap

_없음_
