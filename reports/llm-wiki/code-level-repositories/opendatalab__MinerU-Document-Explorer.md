# opendatalab/MinerU-Document-Explorer 코드 레벨 분석

생성일: 2026-06-17T23:31:33.286Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | A integrated platform (95) |
| stars | 586 |
| language | TypeScript |
| tags | rag, document-chat, agent-knowledge, korea-signal |
| files/code/source | 181/111/80 |
| tests/ci | 31/0 |
| local path | sources/opendatalab__MinerU-Document-Explorer |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 24 | 9 | src/db-schema.ts:204 // Version 3: Wiki provenance tracking + incremental ingest |
| Parsing/OCR/document extraction | code | 66 | 30 | src/doc-reading-config.ts:9 * 1. MINERU_API_KEY env var (injects into mineru credential slot) |
| Chunking/splitting | code | 26 | 14 | src/chunking.ts:14 // Chunking: 900 tokens per chunk with 15% overlap |
| Embedding/vector index | code | 54 | 20 | src/bench-rerank.ts:51 "Retrieval-augmented generation combines information retrieval with language models. Documents are embedded into vector spaces, retrieved based on query similarity, and used as context for generation.", |
| Retrieval/search/rerank | code | 82 | 32 | src/bench-rerank.ts:3 * QMD Reranker Benchmark |
| Wiki/graph/entity model | code | 32 | 9 | src/index.ts:257 getLinks(file: string, direction?: "forward" \| "backward" \| "both", linkType?: "wikilink" \| "markdown" \| "url" \| "all"): Promise<{ file: string; forward: Array<{ target: string; anchor: string \| null; line: number \| null |
| Memory/update lifecycle | code | 71 | 31 | src/bench-rerank.ts:6 * Reports device, parallelism, memory, VRAM, and throughput. |
| Provenance/citation/evidence | code | 12 | 5 | src/db-schema.ts:204 // Version 3: Wiki provenance tracking + incremental ingest |
| Evaluation/observability | code | 38 | 14 | src/bench-rerank.ts:3 * QMD Reranker Benchmark |
| Agent/MCP/tool surface | code | 63 | 24 | src/bench-rerank.ts:44 const QUERY = "How do AI agents work and what are their limitations?"; |

## 의존성 신호

- LLM/app framework: transformers
- Persistence/database: better-sqlite3, sqlite-vec, @types/better-sqlite3, sqlite-vec-darwin-arm64, sqlite-vec-darwin-x64, sqlite-vec-linux-arm64, sqlite-vec-linux-x64, sqlite-vec-windows-x64

## 주요 파일 후보

### Ingestion/source intake

- `src/db-schema.ts`
- `src/cli/qmd.ts`
- `src/wiki/lint.ts`
- `src/wiki/log.ts`
- `src/mcp/server/utils.ts`
- `src/mcp/tools/wiki.ts`
- `finetune/convert_gguf.py`
- `finetune/jobs/eval_common.py`
- `finetune/jobs/eval.py`
- `.github/ISSUE_TEMPLATE/feature_request.yml`
- `test/wiki-log.test.ts`
- `CHANGELOG.md`
- ... 6 more

### Parsing/OCR/document extraction

- `src/doc-reading-config.ts`
- `src/index.ts`
- `src/store.ts`
- `src/backends/docx.ts`
- `src/backends/indexing.ts`
- `src/backends/pdf.ts`
- `src/backends/pptx.ts`
- `src/backends/python-types.ts`
- `src/backends/python-utils.ts`
- `src/backends/registry.ts`
- `src/backends/shared.ts`
- `src/backends/types.ts`
- ... 6 more

### Chunking/splitting

- `src/chunking.ts`
- `src/bench-rerank.ts`
- `src/hybrid-search.ts`
- `src/llm.ts`
- `src/search.ts`
- `src/store.ts`
- `src/backends/markdown.ts`
- `src/backends/python-utils.ts`
- `src/backends/query-utils.ts`
- `src/backends/types.ts`
- `src/cli/qmd.ts`
- `src/mcp/server.ts`
- ... 6 more

### Embedding/vector index

- `src/bench-rerank.ts`
- `src/db-schema.ts`
- `src/hybrid-search.ts`
- `src/index.ts`
- `src/llm.ts`
- `src/maintenance.ts`
- `src/search.ts`
- `src/store.ts`
- `src/backends/indexing.ts`
- `src/backends/markdown.ts`
- `src/backends/query-utils.ts`
- `src/backends/shared.ts`
- ... 6 more

### Retrieval/search/rerank

- `src/bench-rerank.ts`
- `src/chunking.ts`
- `src/hybrid-search.ts`
- `src/index.ts`
- `src/llm.ts`
- `src/query-parser.ts`
- `src/search.ts`
- `src/store.ts`
- `src/backends/query-utils.ts`
- `src/backends/shared.ts`
- `src/cli/formatter.ts`
- `src/cli/qmd.ts`
- ... 6 more

### Wiki/graph/entity model

- `src/index.ts`
- `src/links.ts`
- `src/wiki/lint.ts`
- `src/mcp/tools/writing.ts`
- `finetune/reward.py`
- `finetune/dataset/analyze_data.py`
- `finetune/jobs/eval_common.py`
- `finetune/jobs/eval.py`
- `finetune/experiments/gepa/optimizer.py`
- `finetune/experiments/gepa/model.json`
- `finetune/experiments/grpo/grpo.yaml`
- `test/agent-experience.test.ts`
- ... 6 more

### Memory/update lifecycle

- `src/bench-rerank.ts`
- `src/chunking.ts`
- `src/collections.ts`
- `src/db-schema.ts`
- `src/doc-reading-config.ts`
- `src/embedded-skills.ts`
- `src/hybrid-search.ts`
- `src/index.ts`
- `src/llm.ts`
- `src/maintenance.ts`
- `src/store.ts`
- `src/backends/indexing.ts`
- ... 6 more

### Provenance/citation/evidence

- `src/db-schema.ts`
- `src/cli/qmd.ts`
- `src/mcp/server/utils.ts`
- `src/mcp/tools/wiki.ts`
- `src/mcp/tools/writing.ts`
- `CHANGELOG.md`
- `README.md`
- `docs/architecture.md`
- `skills/mineru-document-explorer/SKILL.md`
- `demo/AGENT-PROMPT-zh.md`
- `demo/AGENT-PROMPT.md`
- `demo/README.md`

### Evaluation/observability

- `src/bench-rerank.ts`
- `src/hybrid-search.ts`
- `src/llm.ts`
- `src/mcp/tools/core.ts`
- `finetune/eval.py`
- `finetune/reward.py`
- `finetune/train.py`
- `finetune/dataset/analyze_data.py`
- `finetune/jobs/eval_common.py`
- `finetune/jobs/eval.py`
- `finetune/jobs/sft.py`
- `finetune/experiments/gepa/dspy_gepa.py`
- ... 6 more

### Agent/MCP/tool surface

- `src/bench-rerank.ts`
- `src/doc-reading-config.ts`
- `src/embedded-skills.ts`
- `src/hybrid-search.ts`
- `src/index.ts`
- `src/store.ts`
- `src/backends/pdf.ts`
- `src/backends/types.ts`
- `src/cli/formatter.ts`
- `src/cli/qmd.ts`
- `src/mcp/server.ts`
- `src/backends/python/extract_pdf_pageindex.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| src/db-schema.ts | 204 | // Version 3: Wiki provenance tracking + incremental ingest |
| src/db-schema.ts | 219 | // Incremental ingest tracker (tracks content hash at last ingest time) |
| src/cli/qmd.ts | 2461 | console.log(" qmd wiki ingest <source> - Analyze source doc for wiki page creation"); |
| src/cli/qmd.ts | 3134 | case "ingest": { |
| src/cli/qmd.ts | 3137 | console.error("Usage: qmd wiki ingest <source-file> [--wiki <collection>] [--force]"); |
| src/cli/qmd.ts | 3143 | console.error(" --force re-ingest even if source hasn't changed."); |
| src/cli/qmd.ts | 3189 | // Incremental ingest check |
| src/cli/qmd.ts | 3207 | console.log(`${c.green}✓${c.reset} Source unchanged since last ingest (${previousIngest.ingested_at}).`); |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| src/doc-reading-config.ts | 9 | * 1. MINERU_API_KEY env var (injects into mineru credential slot) |
| src/doc-reading-config.ts | 17 | * "fullText": { "pdf": ["mineru_cloud", "pymupdf"] }, |
| src/doc-reading-config.ts | 18 | * "toc": { "pdf": ["native_bookmarks", "gpt_pageindex"] }, |
| src/doc-reading-config.ts | 19 | * "elements": { "pdf": ["mineru_agentic_ocr"], "docx": ["python_docx_local"], "pptx": ["python_pptx_local"] } |
| src/doc-reading-config.ts | 22 | * "mineru": { "api_key": "...", "api_url": "https://mineru.net/api/v4" } |
| src/doc-reading-config.ts | 28 | * fullText.pdf → ["pymupdf"] |
| src/doc-reading-config.ts | 29 | * toc.pdf → ["native_bookmarks"] |
| src/doc-reading-config.ts | 30 | * elements.pdf → [] (returns empty — no local PDF element extraction yet) |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| src/chunking.ts | 14 | // Chunking: 900 tokens per chunk with 15% overlap |
| src/chunking.ts | 17 | export const CHUNK_OVERLAP_TOKENS = Math.floor(CHUNK_SIZE_TOKENS * 0.15); // 135 tokens (15% overlap) |
| src/chunking.ts | 219 | * Chunk a document by actual token count using the LLM tokenizer. |
| src/chunking.ts | 239 | for (const chunk of charChunks) { |
| src/chunking.ts | 240 | const tokens = await llm.tokenize(chunk.text); |
| src/chunking.ts | 243 | results.push({ text: chunk.text, pos: chunk.pos, tokens: tokens.length }); |
| src/chunking.ts | 245 | const actualCharsPerToken = chunk.text.length / tokens.length; |
| src/chunking.ts | 248 | const subChunks = chunkDocument(chunk.text, safeMaxChars, Math.floor(overlapChars * actualCharsPerToken / 2), Math.floor(windowChars * actualCharsPerToken / 2)); |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| src/bench-rerank.ts | 51 | "Retrieval-augmented generation combines information retrieval with language models. Documents are embedded into vector spaces, retrieved based on query similarity, and used as context for generation.", |
| src/bench-rerank.ts | 54 | "Embedding models convert text into dense vector representations that capture semantic meaning. Similar texts produce similar vectors, enabling efficient similarity search and clustering.", |
| src/db-schema.ts | 99 | // sqlite-vec not available, skip vector indexes |
| src/hybrid-search.ts | 2 | * QMD Hybrid Search — orchestration over FTS, vector, RRF, reranking. |
| src/hybrid-search.ts | 59 | /** Embedding starting (vec/hyde queries) */ |
| src/hybrid-search.ts | 61 | /** Embedding complete */ |
| src/hybrid-search.ts | 320 | * Hybrid search: BM25 + vector + query expansion + RRF + chunked reranking. |
| src/hybrid-search.ts | 325 | * 3. Type-routed search: original→vector, lex→FTS, vec/hyde→vector |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| src/bench-rerank.ts | 3 | * QMD Reranker Benchmark |
| src/bench-rerank.ts | 9 | * bun src/bench-rerank.ts # full benchmark |
| src/bench-rerank.ts | 10 | * bun src/bench-rerank.ts --quick # quick smoke test (10 docs, 1 iteration) |
| src/bench-rerank.ts | 11 | * bun src/bench-rerank.ts --docs 100 # custom doc count |
| src/bench-rerank.ts | 29 | const RERANK_MODEL = "hf:ggml-org/Qwen3-Reranker-0.6B-Q8_0-GGUF/qwen3-reranker-0.6b-q8_0.gguf"; |
| src/bench-rerank.ts | 51 | "Retrieval-augmented generation combines information retrieval with language models. Documents are embedded into vector spaces, retrieved based on query similarity, and used as context for generation.", |
| src/bench-rerank.ts | 54 | "Embedding models convert text into dense vector representations that capture semantic meaning. Similar texts produce similar vectors, enabling efficient similarity search and clustering.", |
| src/bench-rerank.ts | 191 | console.log(" QMD Reranker Benchmark"); |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| src/index.ts | 257 | getLinks(file: string, direction?: "forward" \| "backward" \| "both", linkType?: "wikilink" \| "markdown" \| "url" \| "all"): Promise<{ file: string; forward: Array<{ target: string; anchor: string \| null; line: number \| null |
| src/index.ts | 537 | // Look up document title for wikilink title-based backlink resolution |
| src/index.ts | 545 | `SELECT source, anchor, line, link_type FROM links WHERE (target = ? OR (link_type = 'wikilink' AND (? LIKE '%/' \|\| target \|\| '.md' OR LOWER(target) = LOWER(?)))) AND link_type = ?` |
| src/index.ts | 549 | `SELECT source, anchor, line, link_type FROM links WHERE (target = ? OR (link_type = 'wikilink' AND (? LIKE '%/' \|\| target \|\| '.md' OR LOWER(target) = LOWER(?))))` |
| src/links.ts | 8 | export type LinkType = "wikilink" \| "markdown" \| "url"; |
| src/links.ts | 11 | target: string; // raw link target (wikilink name, relative path, or URL) |
| src/links.ts | 96 | links.push({ target, link_type: "wikilink", anchor, line: lineNum }); |
| src/wiki/lint.ts | 54 | // Build title→display_path map for wikilink title resolution |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| src/bench-rerank.ts | 6 | * Reports device, parallelism, memory, VRAM, and throughput. |
| src/bench-rerank.ts | 30 | const MODEL_CACHE = join(homedir(), ".cache", "qmd", "models"); |
| src/chunking.ts | 18 | // Fallback char-based approximation for sync chunking (~4 chars per token) |
| src/collections.ts | 60 | // SDK mode: optional in-memory config or custom config path |
| src/collections.ts | 66 | * - Inline config: use an in-memory CollectionConfig (saveConfig updates in place, no file I/O) |
| src/collections.ts | 127 | * - Inline config: returns the in-memory object directly |
| src/collections.ts | 162 | * - Inline config: updates the in-memory object (no file I/O) |
| src/collections.ts | 242 | delete collection.update; |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| src/db-schema.ts | 204 | // Version 3: Wiki provenance tracking + incremental ingest |
| src/db-schema.ts | 206 | // Source-to-wiki page provenance (which source docs feed which wiki pages) |
| src/cli/qmd.ts | 3426 | // Record source provenance |
| src/cli/qmd.ts | 3463 | console.log(" --source <file> Source document for provenance (for write)"); |
| src/mcp/server/utils.ts | 97 | lines.push(" - `doc_write` — write wiki pages (auto-logged). Pass `source` for provenance tracking."); |
| src/mcp/tools/wiki.ts | 37 | This tool does NOT generate wiki pages — it gives you context to do so. After calling this, use doc_write with the source parameter to create wiki pages and record provenance. |
| src/mcp/tools/wiki.ts | 42 | 3. Create summary page using doc_write with source=<source_path> |
| src/mcp/tools/wiki.ts | 158 | const sourceMetadata: Record<string, unknown> = { |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| src/bench-rerank.ts | 3 | * QMD Reranker Benchmark |
| src/bench-rerank.ts | 9 | * bun src/bench-rerank.ts # full benchmark |
| src/bench-rerank.ts | 50 | "Machine learning models require careful evaluation to avoid overfitting. Cross-validation, holdout sets, and metrics like precision, recall, and F1 score help assess generalization performance.", |
| src/bench-rerank.ts | 84 | // Benchmark runner |
| src/bench-rerank.ts | 141 | // Benchmark iterations |
| src/bench-rerank.ts | 191 | console.log(" QMD Reranker Benchmark"); |
| src/hybrid-search.ts | 87 | score: number; // blended score (full precision) |
| src/llm.ts | 906 | // Multiple contexts: split texts across contexts for parallel evaluation |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| src/bench-rerank.ts | 44 | const QUERY = "How do AI agents work and what are their limitations?"; |
| src/bench-rerank.ts | 48 | "Artificial intelligence agents are software systems that perceive their environment and take actions to achieve goals. They use techniques like reinforcement learning, planning, and natural language processing to operat |
| src/bench-rerank.ts | 55 | "Autonomous agents face challenges including hallucination, lack of grounding, limited planning horizons, and difficulty with multi-step reasoning. Safety and alignment remain open research problems.", |
| src/doc-reading-config.ts | 50 | \| "gpt_pageindex" // GPT PageIndex: LLM-inferred TOC via OpenAI-compatible API + Explorer PageIndex script |
| src/doc-reading-config.ts | 82 | openai?: { |
| src/doc-reading-config.ts | 84 | base_url?: string; // default: "https://api.openai.com/v1" |
| src/doc-reading-config.ts | 173 | openai: openaiOverride, |
| src/doc-reading-config.ts | 241 | /** OpenAI-compatible credentials for GPT PageIndex, or null if not configured. */ |

## Gap

- ci
