# tobi/qmd 코드 레벨 분석

생성일: 2026-06-17T23:31:27.572Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | A integrated platform (98) |
| stars | 26713 |
| language | TypeScript |
| tags | knowledge-base, document-chat, korea-signal |
| files/code/source | 143/82/51 |
| tests/ci | 37/3 |
| local path | sources/tobi__qmd |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 5 | 4 | finetune/convert_gguf.py:84 parser.add_argument("--no-upload", action="store_true", help="Don't upload to HF Hub") |
| Parsing/OCR/document extraction | code | 4 | 1 | src/mcp/server.ts:68 * Encodes special characters but preserves forward slashes for readability. |
| Chunking/splitting | code | 22 | 9 | src/ast.ts:382 * Metadata about a code symbol within a chunk. |
| Embedding/vector index | code | 34 | 13 | src/bench-rerank.ts:51 "Retrieval-augmented generation combines information retrieval with language models. Documents are embedded into vector spaces, retrieved based on query similarity, and used as context for generation.", |
| Retrieval/search/rerank | code | 57 | 25 | src/bench-rerank.ts:3 * QMD Reranker Benchmark |
| Wiki/graph/entity model | code | 14 | 5 | finetune/reward.py:17 Entity (20) - Named entity preservation in lex/vec lines |
| Memory/update lifecycle | code | 49 | 21 | src/ast.ts:222 * Load and cache a grammar for the given language. |
| Provenance/citation/evidence | code | 6 | 2 | src/store.ts:4535 * Original-query retrieval paths are the primary evidence and get 2x weight: |
| Evaluation/observability | code | 37 | 20 | src/bench-rerank.ts:3 * QMD Reranker Benchmark |
| Agent/MCP/tool surface | code | 31 | 8 | src/bench-rerank.ts:44 const QUERY = "How do AI agents work and what are their limitations?"; |

## 의존성 신호

- LLM/app framework: transformers
- Persistence/database: better-sqlite3, sqlite-vec, @types/better-sqlite3, sqlite-vec-darwin-arm64, sqlite-vec-darwin-x64, sqlite-vec-linux-arm64, sqlite-vec-linux-x64, sqlite-vec-windows-x64

## 주요 파일 후보

### Ingestion/source intake

- `finetune/convert_gguf.py`
- `finetune/convert_onnx.py`
- `finetune/jobs/eval_common.py`
- `finetune/jobs/eval.py`
- `CHANGELOG.md`

### Parsing/OCR/document extraction

- `src/mcp/server.ts`
- `finetune/data/fix_hyde_checkpoint.json`
- `test/cli.test.ts`
- `CHANGELOG.md`

### Chunking/splitting

- `src/ast.ts`
- `src/bench-rerank.ts`
- `src/index.ts`
- `src/llm.ts`
- `src/store.ts`
- `src/cli/qmd.ts`
- `src/mcp/server.ts`
- `finetune/eval_retrieval.py`
- `finetune/reward.py`
- `src/bench/fixtures/example.json`
- `test/ast-chunking.test.ts`
- `test/cli-exit-lifecycle.test.ts`
- ... 6 more

### Embedding/vector index

- `src/bench-rerank.ts`
- `src/collections.ts`
- `src/db.ts`
- `src/index.ts`
- `src/llm.ts`
- `src/maintenance.ts`
- `src/store.ts`
- `src/bench/bench.ts`
- `src/cli/qmd.ts`
- `src/mcp/server.ts`
- `finetune/benchmark.py`
- `finetune/train.py`
- ... 6 more

### Retrieval/search/rerank

- `src/bench-rerank.ts`
- `src/collections.ts`
- `src/db.ts`
- `src/index.ts`
- `src/llm.ts`
- `src/store.ts`
- `src/bench/bench.ts`
- `src/bench/score.ts`
- `src/bench/types.ts`
- `src/cli/formatter.ts`
- `src/cli/qmd.ts`
- `src/mcp/server.ts`
- ... 6 more

### Wiki/graph/entity model

- `finetune/reward.py`
- `finetune/dataset/analyze_data.py`
- `finetune/jobs/eval_common.py`
- `finetune/jobs/eval.py`
- `finetune/experiments/gepa/optimizer.py`
- `finetune/data/fix_hyde_checkpoint.json`
- `finetune/experiments/gepa/model.json`
- `finetune/experiments/grpo/grpo.yaml`
- `CHANGELOG.md`
- `finetune/README.md`
- `finetune/SCORING.md`
- `finetune/evals/queries.txt`
- ... 2 more

### Memory/update lifecycle

- `src/ast.ts`
- `src/bench-rerank.ts`
- `src/collections.ts`
- `src/db.ts`
- `src/index.ts`
- `src/llm.ts`
- `src/maintenance.ts`
- `src/store.ts`
- `src/cli/qmd.ts`
- `src/mcp/server.ts`
- `migrate-schema.ts`
- `finetune/benchmark.py`
- ... 6 more

### Provenance/citation/evidence

- `src/store.ts`
- `src/cli/qmd.ts`
- `.github/workflows/publish.yml`
- `finetune/data/fix_hyde_checkpoint.json`
- `test/store.test.ts`
- `CHANGELOG.md`

### Evaluation/observability

- `src/bench-rerank.ts`
- `src/llm.ts`
- `src/store.ts`
- `src/bench/bench.ts`
- `src/bench/score.ts`
- `src/bench/types.ts`
- `src/mcp/server.ts`
- `finetune/benchmark.py`
- `finetune/eval_retrieval.py`
- `finetune/eval.py`
- `finetune/reward.py`
- `finetune/train_unsloth.py`
- ... 6 more

### Agent/MCP/tool surface

- `src/bench-rerank.ts`
- `src/index.ts`
- `src/store.ts`
- `src/cli/formatter.ts`
- `src/cli/qmd.ts`
- `src/mcp/server.ts`
- `finetune/convert_gguf.py`
- `finetune/experiments/gepa/dspy_gepa.py`
- `src/test-preload.ts`
- `package.json`
- `pnpm-lock.yaml`
- `.claude-plugin/marketplace.json`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| finetune/convert_gguf.py | 84 | parser.add_argument("--no-upload", action="store_true", help="Don't upload to HF Hub") |
| finetune/convert_gguf.py | 180 | # Step 6: Upload |
| finetune/convert_gguf.py | 192 | # Upload README |
| finetune/convert_onnx.py | 27 | uv run convert_onnx.py --size 1.7B --no-upload |
| finetune/convert_onnx.py | 313 | """Upload ONNX model to HuggingFace Hub.""" |
| finetune/convert_onnx.py | 321 | commit_message="Upload ONNX model", |
| finetune/convert_onnx.py | 389 | "--no-upload", action="store_true", help="Don't upload to HF Hub", |
| finetune/convert_onnx.py | 451 | # Upload |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| src/mcp/server.ts | 68 | * Encodes special characters but preserves forward slashes for readability. |
| finetune/data/fix_hyde_checkpoint.json | 1 | {"processed_queries": {"1000": "Capitals quiz: Paris (France), Tokyo (Japan), Canberra (Australia), Bras\u00edlia (Brazil), Ottawa (Canada). Quiz includes 50+ capitals.", "1001": "Trivia: The universe is 13.8 billion yea |
| test/cli.test.ts | 166 | - Export to PDF |
| CHANGELOG.md | 456 | PDF ingestion) now get a fair ranking. |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| src/ast.ts | 382 | * Metadata about a code symbol within a chunk. |
| src/bench-rerank.ts | 151 | const chunk = docs.slice(i * chunkSize, (i + 1) * chunkSize); |
| src/bench-rerank.ts | 152 | return chunk.length > 0 ? contexts[i]!.rankAll(QUERY, chunk) : Promise.resolve([]); |
| src/index.ts | 167 | /** Chunk strategy: "auto" (default, uses AST for code files) or "regex" (legacy) */ |
| src/llm.ts | 54 | process.stdout.write = ((chunk: StdoutChunk, encodingOrCallback?: BufferEncoding \| WriteCallback, callback?: WriteCallback) => { |
| src/llm.ts | 56 | return process.stderr.write(chunk, encodingOrCallback); |
| src/llm.ts | 58 | return process.stderr.write(chunk, encodingOrCallback, callback); |
| src/llm.ts | 1365 | chunks.map(async (chunk, i) => { |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| src/bench-rerank.ts | 51 | "Retrieval-augmented generation combines information retrieval with language models. Documents are embedded into vector spaces, retrieved based on query similarity, and used as context for generation.", |
| src/bench-rerank.ts | 54 | "Embedding models convert text into dense vector representations that capture semantic meaning. Similar texts produce similar vectors, enabling efficient similarity search and clustering.", |
| src/collections.ts | 37 | * Model configuration for embedding, reranking, and generation |
| src/db.ts | 55 | // Vector search won't work, but BM25 and other operations are unaffected. |
| src/index.ts | 180 | * Options for searchVector() — vector similarity search. |
| src/index.ts | 231 | /** Vector similarity search (embedding model, no reranking) */ |
| src/index.ts | 290 | /** Generate vector embeddings for documents that need them */ |
| src/index.ts | 294 | /** Restrict embedding to documents in one collection. */ |

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
| finetune/reward.py | 17 | Entity (20) - Named entity preservation in lex/vec lines |
| finetune/reward.py | 51 | # Words that commonly start queries but aren't named entities. |
| finetune/reward.py | 52 | # Used for position-0 entity detection to avoid false positives. |
| finetune/reward.py | 141 | """Extract named entities using heuristics. |
| finetune/reward.py | 147 | Position-0 words are also detected as entities if they are capitalized and |
| finetune/reward.py | 150 | Compound chaining extends one level from a directly-detected entity: |
| finetune/reward.py | 153 | entities = set() |
| finetune/reward.py | 167 | entities.add(clean.lower()) |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| src/ast.ts | 222 | * Load and cache a grammar for the given language. |
| src/ast.ts | 240 | grammarCache.delete(wasmKey); |
| src/ast.ts | 292 | parser.delete(); |
| src/ast.ts | 315 | tree.delete(); |
| src/ast.ts | 316 | parser.delete(); |
| src/bench-rerank.ts | 6 | * Reports device, parallelism, memory, VRAM, and throughput. |
| src/bench-rerank.ts | 30 | const MODEL_CACHE = join(homedir(), ".cache", "qmd", "models"); |
| src/collections.ts | 70 | // SDK mode: optional in-memory config or custom config path |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| src/store.ts | 4535 | * Original-query retrieval paths are the primary evidence and get 2x weight: |
| src/cli/qmd.ts | 3135 | const sourcePath = resolve(sourceDir, entry); |
| src/cli/qmd.ts | 3137 | const stat = statSync(sourcePath); |
| src/cli/qmd.ts | 3139 | copyDirectoryContents(sourcePath, targetPath); |
| src/cli/qmd.ts | 3141 | copyFileSync(sourcePath, targetPath); |
| .github/workflows/publish.yml | 40 | - run: npm publish --provenance --access public |
| finetune/data/fix_hyde_checkpoint.json | 1 | {"processed_queries": {"1000": "Capitals quiz: Paris (France), Tokyo (Japan), Canberra (Australia), Bras\u00edlia (Brazil), Ottawa (Canada). Quiz includes 50+ capitals.", "1001": "Trivia: The universe is 13.8 billion yea |
| test/store.test.ts | 2261 | test("hybrid RRF weights boost original vector evidence over expansion-only hits", () => { |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| src/bench-rerank.ts | 3 | * QMD Reranker Benchmark |
| src/bench-rerank.ts | 9 | * bun src/bench-rerank.ts # full benchmark |
| src/bench-rerank.ts | 50 | "Machine learning models require careful evaluation to avoid overfitting. Cross-validation, holdout sets, and metrics like precision, recall, and F1 score help assess generalization performance.", |
| src/bench-rerank.ts | 84 | // Benchmark runner |
| src/bench-rerank.ts | 141 | // Benchmark iterations |
| src/bench-rerank.ts | 191 | console.log(" QMD Reranker Benchmark"); |
| src/llm.ts | 1358 | // Multiple contexts: split texts across contexts for parallel evaluation |
| src/llm.ts | 1604 | // Split documents across contexts for parallel evaluation. |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| src/bench-rerank.ts | 44 | const QUERY = "How do AI agents work and what are their limitations?"; |
| src/bench-rerank.ts | 48 | "Artificial intelligence agents are software systems that perceive their environment and take actions to achieve goals. They use techniques like reinforcement learning, planning, and natural language processing to operat |
| src/bench-rerank.ts | 55 | "Autonomous agents face challenges including hallucination, lack of grounding, limited planning horizons, and difficulty with multi-step reasoning. Safety and alignment remain open research problems.", |
| src/index.ts | 115 | // Re-export getDefaultDbPath for CLI/MCP that need the default database location |
| src/store.ts | 6 | * CLI or MCP consumers. |
| src/store.ts | 3261 | * Check if a token is a hyphenated compound word (e.g., multi-agent, DEC-0054, gpt-4). |
| src/store.ts | 3271 | * inside FTS5 quotes: "multi agent" matches "multi-agent" in porter tokenizer. |
| src/store.ts | 3304 | * - Hyphenated tokens: multi-agent, DEC-0054, gpt-4 → treated as phrases |

## Gap

_없음_
