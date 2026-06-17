# StarTrail-org/LEANN 코드 레벨 분석

생성일: 2026-06-17T23:31:49.697Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | A integrated platform (103) |
| stars | 12182 |
| language | Python |
| tags | rag, korea-signal |
| files/code/source | 252/165/115 |
| tests/ci | 49/6 |
| local path | sources/StarTrail-org__LEANN |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 8 | 5 | apps/colqwen_rag.py:29 from torch.utils.data import DataLoader # noqa: E402 |
| Parsing/OCR/document extraction | code | 28 | 13 | apps/colqwen_rag.py:3 ColQwen RAG - Easy-to-use multimodal PDF retrieval with ColQwen2/ColPali |
| Chunking/splitting | code | 39 | 22 | packages/leann-core/src/leann/chunking_utils.py:48 Calculate safe chunk size accounting for overlap and safety margin. |
| Embedding/vector index | code | 130 | 53 | packages/leann-backend-diskann/leann_backend_diskann/diskann_embedding_server.py:2 DiskANN-specific embedding server |
| Retrieval/search/rerank | code | 121 | 58 | apps/browser_rag.py:166 print("- 'Find my search history about programming'") |
| Wiki/graph/entity model | code | 11 | 3 | apps/base_rag_example.py:104 help=f"Embedding model to use (default: {embedding_model_default}), we provide facebook/contriever, text-embedding-3-small,mlx-community/Qwen3-Embedding-0.6B-8bit or nomic-embed-text", |
| Memory/update lifecycle | code | 88 | 31 | apps/browser_rag.py:167 print("- 'What YouTube videos did I watch recently?'") |
| Provenance/citation/evidence | code | 3 | 1 | packages/leann-core/src/leann/cli.py:1800 source_path = doc.metadata.get("source", "") |
| Evaluation/observability | code | 58 | 37 | apps/colqwen_rag.py:81 ).eval() |
| Agent/MCP/tool surface | code | 73 | 27 | apps/claude_rag.py:2 Claude RAG example using the unified interface. |

## 의존성 신호

- LLM/app framework: sentence-transformers, llama-index-core, llama-index-readers-file, llama-index-embeddings-huggingface, openai, transformers, ollama, llama-index
- Vector/search store: leann-backend-hnsw, leann_backend_hnsw, faiss-cpu, llama-index-vector-stores-faiss
- Document parsing/OCR: PyPDF2, pymupdf, pdfplumber, pypdfium2, beautifulsoup4, python-docx, docx2txt

## 주요 파일 후보

### Ingestion/source intake

- `apps/colqwen_rag.py`
- `apps/multimodal/vision-based-pdf-multi-vector/leann_multi_vector.py`
- `apps/multimodal/vision-based-pdf-multi-vector/multi-vector-leann-paper-example.py`
- `scripts/hf_upload.py`
- `benchmarks/laion/setup_laion.py`
- `.github/workflows/build-reusable.yml`
- `.github/workflows/release-manual.yml`
- `data/PrideandPrejudice.txt`

### Parsing/OCR/document extraction

- `apps/colqwen_rag.py`
- `apps/document_rag.py`
- `apps/chatgpt_data/chatgpt_reader.py`
- `apps/email_data/email.py`
- `apps/multimodal/vision-based-pdf-multi-vector/leann_multi_vector.py`
- `apps/multimodal/vision-based-pdf-multi-vector/multi-vector-leann-similarity-map.py`
- `packages/leann-core/src/leann/cli.py`
- `benchmarks/compare_faiss_vs_leann.py`
- `benchmarks/faiss_only.py`
- `benchmarks/financebench/setup_financebench.py`
- `benchmarks/update/bench_hnsw_rng_recompute.py`
- `benchmarks/update/bench_update_vs_offline_search.py`
- ... 6 more

### Chunking/splitting

- `packages/leann-core/src/leann/chunking_utils.py`
- `apps/browser_rag.py`
- `apps/chatgpt_rag.py`
- `apps/claude_rag.py`
- `apps/code_rag.py`
- `apps/document_rag.py`
- `apps/email_rag.py`
- `apps/imessage_rag.py`
- `apps/wechat_rag.py`
- `apps/history_data/wechat_history.py`
- `packages/leann-backend-hnsw/leann_backend_hnsw/convert_to_csr.py`
- `packages/leann-core/src/leann/api.py`
- ... 6 more

### Embedding/vector index

- `packages/leann-backend-diskann/leann_backend_diskann/diskann_embedding_server.py`
- `packages/leann-backend-diskann/leann_backend_diskann/embedding_pb2.py`
- `packages/leann-backend-hnsw/leann_backend_hnsw/hnsw_embedding_server.py`
- `packages/leann-core/src/leann/embedding_compute.py`
- `packages/leann-core/src/leann/embedding_server_manager.py`
- `apps/code_rag.py`
- `apps/colqwen_rag.py`
- `apps/image_rag.py`
- `apps/semantic_file_search/leann_index_builder.py`
- `apps/semantic_file_search/leann-plus-temporal-search.py`
- `apps/semantic_file_search/spotlight_index_dump.py`
- `packages/leann/__init__.py`
- ... 6 more

### Retrieval/search/rerank

- `apps/browser_rag.py`
- `apps/chatgpt_rag.py`
- `apps/claude_rag.py`
- `apps/code_rag.py`
- `apps/colqwen_rag.py`
- `apps/image_rag.py`
- `apps/slack_rag.py`
- `apps/twitter_rag.py`
- `apps/wechat_rag.py`
- `apps/chatgpt_data/chatgpt_reader.py`
- `apps/history_data/history.py`
- `apps/semantic_file_search/leann-plus-temporal-search.py`
- ... 6 more

### Wiki/graph/entity model

- `apps/base_rag_example.py`
- `benchmarks/benchmark_embeddings.py`
- `benchmarks/simple_mac_tpt_test.py`
- `examples/mlx_demo.py`
- `README.md`
- `data/PrideandPrejudice.txt`
- `docs/configuration-guide.md`
- `docs/CONTRIBUTING.md`
- `docs/metadata_filtering.md`
- `docs/roadmap.md`
- `docs/slack-setup-guide.md`

### Memory/update lifecycle

- `apps/browser_rag.py`
- `apps/colqwen_rag.py`
- `apps/image_rag.py`
- `apps/email_data/email.py`
- `apps/gemini_data/gemini_reader.py`
- `apps/qwen_data/qwen_reader.py`
- `apps/slack_data/slack_mcp_reader.py`
- `apps/multimodal/vision-based-pdf-multi-vector/leann_multi_vector.py`
- `apps/multimodal/vision-based-pdf-multi-vector/multi-vector-leann-similarity-map.py`
- `packages/leann-backend-diskann/leann_backend_diskann/diskann_backend.py`
- `packages/leann-backend-diskann/leann_backend_diskann/graph_partition.py`
- `packages/leann-backend-hnsw/leann_backend_hnsw/convert_to_csr.py`
- ... 6 more

### Provenance/citation/evidence

- `packages/leann-core/src/leann/cli.py`
- `benchmarks/financebench/README.md`
- `skills/leann-memory/instructions.md`

### Evaluation/observability

- `apps/colqwen_rag.py`
- `apps/multimodal/vision-based-pdf-multi-vector/leann_multi_vector.py`
- `apps/multimodal/vision-based-pdf-multi-vector/vidore_v1_benchmark.py`
- `apps/multimodal/vision-based-pdf-multi-vector/vidore_v2_benchmark.py`
- `packages/leann-backend-diskann/leann_backend_diskann/diskann_backend.py`
- `packages/leann-backend-diskann/leann_backend_diskann/diskann_embedding_server.py`
- `packages/leann-backend-flashlib-ivf/leann_backend_flashlib_ivf/flashlib_ivf_backend.py`
- `packages/leann-backend-flashlib/leann_backend_flashlib/flashlib_backend.py`
- `packages/leann-backend-hnsw/leann_backend_hnsw/hnsw_embedding_server.py`
- `packages/leann-core/src/leann/api.py`
- `packages/leann-core/src/leann/embedding_compute.py`
- `packages/leann-core/src/leann/embedding_server_manager.py`
- ... 6 more

### Agent/MCP/tool surface

- `apps/claude_rag.py`
- `apps/gemini_rag.py`
- `apps/slack_rag.py`
- `apps/twitter_rag.py`
- `apps/claude_data/claude_reader.py`
- `apps/gemini_data/gemini_reader.py`
- `apps/slack_data/__init__.py`
- `apps/slack_data/slack_mcp_reader.py`
- `apps/twitter_data/__init__.py`
- `apps/twitter_data/twitter_mcp_reader.py`
- `apps/multimodal/vision-based-pdf-multi-vector/multi-vector-leann-similarity-map.py`
- `packages/leann-backend-diskann/leann_backend_diskann/diskann_embedding_server.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| apps/colqwen_rag.py | 29 | from torch.utils.data import DataLoader # noqa: E402 |
| apps/colqwen_rag.py | 339 | dataloader = DataLoader(dataset, batch_size=1, shuffle=False, collate_fn=lambda x: x) |
| apps/colqwen_rag.py | 343 | for batch in tqdm(dataloader, desc="Embedding images"): |
| apps/multimodal/vision-based-pdf-multi-vector/leann_multi_vector.py | 309 | from torch.utils.data import DataLoader |
| apps/multimodal/vision-based-pdf-multi-vector/leann_multi_vector.py | 314 | dataloader = DataLoader( |
| apps/multimodal/vision-based-pdf-multi-vector/leann_multi_vector.py | 322 | for batch_doc in tqdm(dataloader, desc="Embedding images"): |
| apps/multimodal/vision-based-pdf-multi-vector/multi-vector-leann-paper-example.py | 31 | from torch.utils.data import DataLoader |
| apps/multimodal/vision-based-pdf-multi-vector/multi-vector-leann-paper-example.py | 62 | dataloader = DataLoader( |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| apps/colqwen_rag.py | 3 | ColQwen RAG - Easy-to-use multimodal PDF retrieval with ColQwen2/ColPali |
| apps/colqwen_rag.py | 33 | sys.path.append(str(_repo_root / "apps" / "multimodal" / "vision-based-pdf-multi-vector")) |
| apps/colqwen_rag.py | 38 | """Easy-to-use ColQwen RAG system for multimodal PDF retrieval.""" |
| apps/colqwen_rag.py | 184 | Build multimodal index from PDF files. |
| apps/colqwen_rag.py | 187 | pdf_paths: List of PDF file paths |
| apps/colqwen_rag.py | 228 | "No PDF pages were converted to images, so there is nothing to embed.\n" |
| apps/colqwen_rag.py | 234 | "- Re-run with a known-good PDF\n" |
| apps/colqwen_rag.py | 366 | parser = argparse.ArgumentParser(description="ColQwen RAG - Easy multimodal PDF retrieval") |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| packages/leann-core/src/leann/chunking_utils.py | 48 | Calculate safe chunk size accounting for overlap and safety margin. |
| packages/leann-core/src/leann/chunking_utils.py | 52 | overlap_size: Overlap units (tokens for traditional, chars for AST) |
| packages/leann-core/src/leann/chunking_utils.py | 57 | Safe chunk size: tokens for traditional, characters for AST |
| packages/leann-core/src/leann/chunking_utils.py | 63 | # Max chunk = chunk_size + overlap, so chunk_size = limit - overlap |
| packages/leann-core/src/leann/chunking_utils.py | 79 | max_tokens: Maximum tokens allowed per chunk |
| packages/leann-core/src/leann/chunking_utils.py | 87 | for i, chunk in enumerate(chunks): |
| packages/leann-core/src/leann/chunking_utils.py | 88 | estimated_tokens = estimate_token_count(chunk) |
| packages/leann-core/src/leann/chunking_utils.py | 91 | # Truncate chunk to fit token limit |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| packages/leann-backend-diskann/leann_backend_diskann/diskann_embedding_server.py | 2 | DiskANN-specific embedding server |
| packages/leann-backend-diskann/leann_backend_diskann/diskann_embedding_server.py | 55 | Create and start a ZMQ-based embedding server for DiskANN backend. |
| packages/leann-backend-diskann/leann_backend_diskann/diskann_embedding_server.py | 59 | logger.info(f"Using embedding mode: {embedding_mode}") |
| packages/leann-backend-diskann/leann_backend_diskann/diskann_embedding_server.py | 61 | # Add leann-core to path for unified embedding computation |
| packages/leann-backend-diskann/leann_backend_diskann/diskann_embedding_server.py | 70 | logger.info("Successfully imported unified embedding computation module") |
| packages/leann-backend-diskann/leann_backend_diskann/diskann_embedding_server.py | 72 | logger.error(f"Failed to import embedding computation module: {e}") |
| packages/leann-backend-diskann/leann_backend_diskann/diskann_embedding_server.py | 79 | logger.info("Starting warmup embedding request...") |
| packages/leann-backend-diskann/leann_backend_diskann/diskann_embedding_server.py | 165 | f"✅ PROTOBUF: Node ID request for {len(node_ids)} node embeddings: {node_ids[:10]}" |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| apps/browser_rag.py | 166 | print("- 'Find my search history about programming'") |
| apps/chatgpt_rag.py | 67 | export_path: Path to search for exports |
| apps/chatgpt_rag.py | 179 | print("- 'Search for conversations about cooking recipes'") |
| apps/claude_rag.py | 67 | export_path: Path to search for exports |
| apps/claude_rag.py | 182 | print("- 'Search for conversations about debugging techniques'") |
| apps/code_rag.py | 190 | print("- 'Show me the search implementation'") |
| apps/colqwen_rag.py | 3 | ColQwen RAG - Easy-to-use multimodal PDF retrieval with ColQwen2/ColPali |
| apps/colqwen_rag.py | 7 | python -m apps.colqwen_rag search my_index "How does attention work?" |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| apps/base_rag_example.py | 104 | help=f"Embedding model to use (default: {embedding_model_default}), we provide facebook/contriever, text-embedding-3-small,mlx-community/Qwen3-Embedding-0.6B-8bit or nomic-embed-text", |
| benchmarks/benchmark_embeddings.py | 12 | MODEL_NAME_MLX = "mlx-community/Qwen3-Embedding-0.6B-4bit-DWQ" |
| benchmarks/simple_mac_tpt_test.py | 275 | config = BenchmarkConfig(model_path="mlx-community/all-MiniLM-L6-v2-4bit", use_mlx=True) |
| examples/mlx_demo.py | 15 | embedding_model="mlx-community/Qwen3-Embedding-0.6B-4bit-DWQ", |
| examples/mlx_demo.py | 24 | "The mlx-community organization provides pre-trained models in MLX format.", |
| README.md | 35 | <h3>💬 Join our Slack community!</h3> |
| README.md | 37 | We'd love for you to be part of the LEANN community!<br> |
| README.md | 379 | --embedding-model MODEL # e.g., facebook/contriever, text-embedding-3-small, mlx-community/Qwen3-Embedding-0.6B-8bit or nomic-embed-text |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| apps/browser_rag.py | 167 | print("- 'What YouTube videos did I watch recently?'") |
| apps/colqwen_rag.py | 50 | # Use float32 on MPS to avoid memory issues, float16 on CUDA, bfloat16 on CPU |
| apps/colqwen_rag.py | 75 | # For MPS, load on CPU first then move to avoid memory allocation issues |
| apps/colqwen_rag.py | 94 | # For MPS, load on CPU first then move to avoid memory allocation issues |
| apps/colqwen_rag.py | 111 | if "memory" in str(e).lower() or "offload" in str(e).lower(): |
| apps/colqwen_rag.py | 112 | print(f"⚠️ Memory constraint on {self.device}, using CPU with optimizations...") |
| apps/image_rag.py | 197 | with tempfile.NamedTemporaryFile(mode="wb", suffix=".pkl", delete=False) as f: |
| apps/email_data/email.py | 132 | 2. Converting them to mbox format in memory |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| packages/leann-core/src/leann/cli.py | 1800 | source_path = doc.metadata.get("source", "") |
| packages/leann-core/src/leann/cli.py | 1803 | (source_path or file_path).endswith(ext) for ext in code_file_exts |
| packages/leann-core/src/leann/cli.py | 1818 | "file_path": file_path or source_path, |
| packages/leann-core/src/leann/cli.py | 1820 | "source": source_path, |
| benchmarks/financebench/README.md | 73 | - **Exact Match Rate**: 0.7% (substring overlap with evidence) |
| skills/leann-memory/instructions.md | 51 | 3. Present the most relevant results with source attribution |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| apps/colqwen_rag.py | 81 | ).eval() |
| apps/colqwen_rag.py | 89 | ).eval() |
| apps/colqwen_rag.py | 100 | ).eval() |
| apps/colqwen_rag.py | 108 | ).eval() |
| apps/colqwen_rag.py | 122 | ).eval() |
| apps/colqwen_rag.py | 130 | ).eval() |
| apps/multimodal/vision-based-pdf-multi-vector/leann_multi_vector.py | 281 | ).eval() |
| apps/multimodal/vision-based-pdf-multi-vector/leann_multi_vector.py | 290 | ).eval() |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| apps/claude_rag.py | 2 | Claude RAG example using the unified interface. |
| apps/claude_rag.py | 3 | Supports Claude export data from JSON files. |
| apps/claude_rag.py | 20 | """RAG example for Claude conversation data.""" |
| apps/claude_rag.py | 30 | name="Claude", |
| apps/claude_rag.py | 31 | description="Process and query Claude conversation exports with LEANN", |
| apps/claude_rag.py | 36 | """Add Claude-specific arguments.""" |
| apps/claude_rag.py | 37 | claude_group = parser.add_argument_group("Claude Parameters") |
| apps/claude_rag.py | 42 | help="Path to Claude export file (.json or .zip) or directory containing exports (default: ./claude_export)", |

## Gap

_없음_
