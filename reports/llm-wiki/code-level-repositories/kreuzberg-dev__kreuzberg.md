# kreuzberg-dev/kreuzberg 코드 레벨 분석

생성일: 2026-06-17T23:31:32.078Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | A integrated platform (108) |
| stars | 8500 |
| language | Rust |
| tags | rag, document-chat, agent-knowledge, korea-signal |
| files/code/source | 6421/2502/1849 |
| tests/ci | 120/20 |
| local path | sources/kreuzberg-dev__kreuzberg |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 91 | 34 | packages/go/v5/binding.go:4701 // including host/port settings, CORS configuration, and upload limits. |
| Parsing/OCR/document extraction | code | 3375 | 704 | packages/go/v5/binding.go:69 // ErrOcr is returned when OCR error. |
| Chunking/splitting | code | 539 | 202 | packages/csharp/src/Kreuzberg/ChunkingConfig.cs:17 /// Configures text chunking for document content, including chunk size, |
| Embedding/vector index | code | 644 | 241 | packages/php/src/EmbeddingBackend.php:17 * Embedding vector dimension. Must be `> 0` and must match the length of |
| Retrieval/search/rerank | code | 322 | 152 | packages/go/v5/binding.go:767 // RerankerModelType reranker model types supported by Kreuzberg. |
| Wiki/graph/entity model | code | 201 | 92 | packages/go/v5/binding.go:995 // - Entity extraction (NER) |
| Memory/update lifecycle | code | 853 | 477 | packages/go/v5/binding.go:73 // ErrCache is returned when cache error. |
| Provenance/citation/evidence | code | 247 | 149 | packages/go/v5/binding.go:1122 // InlineTypeFootnoteRef InlineTypeFootnoteRef footnote reference marker. |
| Evaluation/observability | code | 523 | 243 | packages/go/v5/binding.go:428 // // Threshold calibration is deferred to the Stage 0 benchmark harness. |
| Agent/MCP/tool surface | code | 270 | 71 | packages/go/v5/binding.go:422 // model: "openai/gpt-4o-mini".to_string(), |

## 의존성 신호

- LLM/app framework: candle-transformers
- Vector/search store: Elastic-2.0
- Document parsing/OCR: markitdown, mineru, pdfminer-six, pdfplumber, pymupdf-layout, pymupdf4llm, pypdf, unstructured
- Eval/observability: opentelemetry, opentelemetry_sdk, tracing-opentelemetry
- Persistence/database: PGH003

## 주요 파일 후보

### Ingestion/source intake

- `packages/go/v5/binding.go`
- `packages/php/src/Kreuzberg.php`
- `packages/php/stubs/kreuzberg_extension.php`
- `packages/csharp/src/Kreuzberg/KreuzbergConverter.cs`
- `packages/csharp/src/Kreuzberg/ServerConfig.cs`
- `packages/dart/rust/src/lib.rs`
- `packages/java/dev/kreuzberg/Kreuzberg.java`
- `packages/java/dev/kreuzberg/KreuzbergRs.java`
- `packages/java/dev/kreuzberg/ServerConfig.java`
- `packages/swift/Sources/Kreuzberg/Kreuzberg.swift`
- `packages/elixir/native/kreuzberg_nif/src/lib.rs`
- `packages/kotlin-android/src/main/kotlin/dev/kreuzberg/Kreuzberg.kt`
- ... 6 more

### Parsing/OCR/document extraction

- `packages/go/v5/binding.go`
- `packages/php/src/Kreuzberg.php`
- `packages/php/src/OcrBackend.php`
- `packages/php/stubs/kreuzberg_extension.php`
- `packages/python/kreuzberg/api.py`
- `packages/python/kreuzberg/exceptions.py`
- `packages/python/kreuzberg/options.py`
- `packages/csharp/src/Kreuzberg/AnnotationKind.cs`
- `packages/csharp/src/Kreuzberg/ArchiveEntry.cs`
- `packages/csharp/src/Kreuzberg/BatchBytesItem.cs`
- `packages/csharp/src/Kreuzberg/ContentFilterConfig.cs`
- `packages/csharp/src/Kreuzberg/DocumentRevision.cs`
- ... 6 more

### Chunking/splitting

- `packages/csharp/src/Kreuzberg/ChunkingConfig.cs`
- `packages/java/dev/kreuzberg/ChunkingConfig.java`
- `packages/kotlin-android/src/main/kotlin/dev/kreuzberg/ChunkingConfig.kt`
- `packages/go/v5/binding.go`
- `packages/php/src/Kreuzberg.php`
- `packages/php/stubs/kreuzberg_extension.php`
- `packages/python/kreuzberg/__init__.py`
- `packages/python/kreuzberg/api.py`
- `packages/python/kreuzberg/options.py`
- `packages/typescript/src/index.ts`
- `packages/csharp/src/Kreuzberg/Chunk.cs`
- `packages/csharp/src/Kreuzberg/ChunkerType.cs`
- ... 6 more

### Embedding/vector index

- `packages/php/src/EmbeddingBackend.php`
- `packages/csharp/src/Kreuzberg/EmbeddingConfig.cs`
- `packages/csharp/src/Kreuzberg/EmbeddingException.cs`
- `packages/csharp/src/Kreuzberg/EmbeddingModelType.cs`
- `packages/csharp/src/Kreuzberg/EmbeddingPreset.cs`
- `packages/java/dev/kreuzberg/EmbeddingConfig.java`
- `packages/java/dev/kreuzberg/EmbeddingException.java`
- `packages/java/dev/kreuzberg/EmbeddingModelType.java`
- `packages/java/dev/kreuzberg/EmbeddingPreset.java`
- `packages/kotlin-android/src/main/kotlin/dev/kreuzberg/EmbeddingConfig.kt`
- `packages/kotlin-android/src/main/kotlin/dev/kreuzberg/EmbeddingModelType.kt`
- `packages/kotlin-android/src/main/kotlin/dev/kreuzberg/EmbeddingPreset.kt`
- ... 6 more

### Retrieval/search/rerank

- `packages/go/v5/binding.go`
- `packages/go/v5/trait_bridges.go`
- `packages/php/src/Kreuzberg.php`
- `packages/php/src/RerankerBackend.php`
- `packages/php/stubs/kreuzberg_extension.php`
- `packages/python/kreuzberg/__init__.py`
- `packages/python/kreuzberg/api.py`
- `packages/python/kreuzberg/exceptions.py`
- `packages/python/kreuzberg/options.py`
- `packages/typescript/src/index.ts`
- `packages/csharp/src/Kreuzberg/BridgeAdapters.cs`
- `packages/csharp/src/Kreuzberg/KreuzbergConverter.cs`
- ... 6 more

### Wiki/graph/entity model

- `packages/go/v5/binding.go`
- `packages/php/src/LlmBackend.php`
- `packages/php/stubs/kreuzberg_extension.php`
- `packages/python/kreuzberg/__init__.py`
- `packages/python/kreuzberg/api.py`
- `packages/python/kreuzberg/options.py`
- `packages/typescript/src/index.ts`
- `packages/csharp/src/Kreuzberg/Entity.cs`
- `packages/csharp/src/Kreuzberg/EntityCategory.cs`
- `packages/csharp/src/Kreuzberg/EpubMetadata.cs`
- `packages/csharp/src/Kreuzberg/ExtractionConfig.cs`
- `packages/csharp/src/Kreuzberg/ExtractionResult.cs`
- ... 6 more

### Memory/update lifecycle

- `packages/go/v5/binding.go`
- `packages/go/v5/trait_bridges.go`
- `packages/php/src/Kreuzberg.php`
- `packages/php/stubs/kreuzberg_extension.php`
- `packages/python/kreuzberg/api.py`
- `packages/python/kreuzberg/exceptions.py`
- `packages/python/kreuzberg/options.py`
- `packages/csharp/src/Kreuzberg/BridgeAdapters.cs`
- `packages/csharp/src/Kreuzberg/CacheException.cs`
- `packages/csharp/src/Kreuzberg/CacheStats.cs`
- `packages/csharp/src/Kreuzberg/EmbeddingConfig.cs`
- `packages/csharp/src/Kreuzberg/EmbeddingModelType.cs`
- ... 6 more

### Provenance/citation/evidence

- `packages/go/v5/binding.go`
- `packages/php/stubs/kreuzberg_extension.php`
- `packages/python/kreuzberg/__init__.py`
- `packages/python/kreuzberg/api.py`
- `packages/python/kreuzberg/options.py`
- `packages/typescript/src/index.ts`
- `packages/csharp/src/Kreuzberg/BibtexMetadata.cs`
- `packages/csharp/src/Kreuzberg/CaptioningEnrichmentConfig.cs`
- `packages/csharp/src/Kreuzberg/CitationMetadata.cs`
- `packages/csharp/src/Kreuzberg/ContentLayer.cs`
- `packages/csharp/src/Kreuzberg/DjotContent.cs`
- `packages/csharp/src/Kreuzberg/DocumentStructure.cs`
- ... 6 more

### Evaluation/observability

- `packages/go/v5/binding.go`
- `packages/php/stubs/kreuzberg_extension.php`
- `packages/csharp/src/Kreuzberg/ExtractionResult.cs`
- `packages/csharp/src/Kreuzberg/VlmFallbackPolicy.cs`
- `packages/dart/rust/src/lib.rs`
- `packages/java/dev/kreuzberg/VlmFallbackPolicy.java`
- `packages/ruby/lib/kreuzberg/native.rb`
- `packages/swift/Sources/Kreuzberg/Kreuzberg.swift`
- `packages/kotlin-android/src/main/kotlin/dev/kreuzberg/ExtractionResult.kt`
- `packages/kotlin-android/src/main/kotlin/dev/kreuzberg/VlmFallbackPolicy.kt`
- `scripts/install.sh`
- `crates/kreuzberg-node/index.d.ts`
- ... 6 more

### Agent/MCP/tool surface

- `packages/go/v5/binding.go`
- `packages/php/src/Kreuzberg.php`
- `packages/php/stubs/kreuzberg_extension.php`
- `packages/python/kreuzberg/options.py`
- `packages/csharp/src/Kreuzberg/ChunkSizing.cs`
- `packages/csharp/src/Kreuzberg/EmbeddingModelType.cs`
- `packages/csharp/src/Kreuzberg/KreuzbergConverter.cs`
- `packages/csharp/src/Kreuzberg/LlmConfig.cs`
- `packages/csharp/src/Kreuzberg/LlmUsage.cs`
- `packages/dart/rust/src/lib.rs`
- `packages/java/dev/kreuzberg/ChunkSizing.java`
- `packages/java/dev/kreuzberg/EmbeddingModelType.java`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| packages/go/v5/binding.go | 4701 | // including host/port settings, CORS configuration, and upload limits. |
| packages/go/v5/binding.go | 8369 | // Use this when the caller already has plain text (e.g. a RAG ingest pipeline |
| packages/php/src/Kreuzberg.php | 364 | * Use this when the caller already has plain text (e.g. a RAG ingest pipeline |
| packages/php/stubs/kreuzberg_extension.php | 2069 | * including host/port settings, CORS configuration, and upload limits. |
| packages/csharp/src/Kreuzberg/KreuzbergConverter.cs | 810 | /// Use this when the caller already has plain text (e.g. a RAG ingest pipeline |
| packages/csharp/src/Kreuzberg/ServerConfig.cs | 18 | /// including host/port settings, CORS configuration, and upload limits. |
| packages/java/dev/kreuzberg/Kreuzberg.java | 464 | * Use this when the caller already has plain text (e.g. a RAG ingest pipeline |
| packages/java/dev/kreuzberg/KreuzbergRs.java | 884 | * Use this when the caller already has plain text (e.g. a RAG ingest pipeline |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| packages/go/v5/binding.go | 69 | // ErrOcr is returned when OCR error. |
| packages/go/v5/binding.go | 70 | ErrOcr = errors.New("OCR error") |
| packages/go/v5/binding.go | 152 | // source format: JPEG for embedded PDF images, PNG for rasterised content, |
| packages/go/v5/binding.go | 328 | // `Structured` returns JSON with full OCR element data including bounding |
| packages/go/v5/binding.go | 343 | // OutputFormatStructured structured JSON format with full OCR element metadata. |
| packages/go/v5/binding.go | 397 | // VlmFallbackPolicy policy controlling when VLM (Vision Language Model) OCR is used as a fallback. |
| packages/go/v5/binding.go | 453 | // VlmFallbackPolicyOnLowQuality try the classical OCR backend first. If the quality score is below |
| packages/go/v5/binding.go | 478 | // VlmFallbackPolicyAlways skip the classical OCR backend entirely. Every page is sent to the VLM. |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| packages/csharp/src/Kreuzberg/ChunkingConfig.cs | 17 | /// Configures text chunking for document content, including chunk size, |
| packages/csharp/src/Kreuzberg/ChunkingConfig.cs | 18 | /// overlap, trimming behavior, and optional embeddings. |
| packages/csharp/src/Kreuzberg/ChunkingConfig.cs | 25 | /// Maximum size per chunk (in units determined by `sizing`). |
| packages/csharp/src/Kreuzberg/ChunkingConfig.cs | 36 | /// Overlap between chunks (in units determined by `sizing`). |
| packages/csharp/src/Kreuzberg/ChunkingConfig.cs | 41 | public ulong Overlap { get; init; } = 200; |
| packages/csharp/src/Kreuzberg/ChunkingConfig.cs | 44 | /// Whether to trim whitespace from chunk boundaries. |
| packages/csharp/src/Kreuzberg/ChunkingConfig.cs | 52 | /// Type of chunker to use (Text or Markdown). |
| packages/csharp/src/Kreuzberg/ChunkingConfig.cs | 60 | /// Optional embedding configuration for chunk embeddings. |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| packages/php/src/EmbeddingBackend.php | 17 | * Embedding vector dimension. Must be `> 0` and must match the length of |
| packages/php/src/EmbeddingBackend.php | 25 | * Embed a batch of texts, returning one vector per input in order. |
| packages/csharp/src/Kreuzberg/EmbeddingConfig.cs | 15 | /// Embedding configuration for text chunks. |
| packages/csharp/src/Kreuzberg/EmbeddingConfig.cs | 17 | /// Configures embedding generation using ONNX models via the vendored embedding engine. |
| packages/csharp/src/Kreuzberg/EmbeddingConfig.cs | 18 | /// Requires the `embeddings` feature to be enabled. |
| packages/csharp/src/Kreuzberg/EmbeddingConfig.cs | 23 | /// The embedding model to use (defaults to "balanced" preset if not specified) |
| packages/csharp/src/Kreuzberg/EmbeddingConfig.cs | 29 | /// Whether to normalize embedding vectors (recommended for cosine similarity) |
| packages/csharp/src/Kreuzberg/EmbeddingConfig.cs | 35 | /// Batch size for embedding generation |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| packages/go/v5/binding.go | 767 | // RerankerModelType reranker model types supported by Kreuzberg. |
| packages/go/v5/binding.go | 803 | // place the weight elsewhere (e.g. `"model.onnx"` for `rozgo/bge-reranker-v2-m3`, |
| packages/go/v5/binding.go | 809 | // `rozgo/bge-reranker-v2-m3`, which ships the weights in a co-located |
| packages/go/v5/binding.go | 838 | // RerankerModelTypeLlm provider-hosted reranker via liter-llm (e.g. Cohere, Jina, Voyage). |
| packages/go/v5/binding.go | 840 | // The model in the nested `LlmConfig` must be a rerank-capable model ID |
| packages/go/v5/binding.go | 841 | // (e.g. `"cohere/rerank-english-v3.0"`). |
| packages/go/v5/binding.go | 860 | // RerankerModelTypePlugin in-process reranker registered via the plugin system. |
| packages/go/v5/binding.go | 4476 | // The reranker model to use (defaults to "balanced" preset if not specified). |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| packages/go/v5/binding.go | 995 | // - Entity extraction (NER) |
| packages/go/v5/binding.go | 2025 | // EntityCategory standard entity categories produced by built-in NER backends. |
| packages/go/v5/binding.go | 3365 | // nesting depth, iteration count, entity / token length, total |
| packages/go/v5/binding.go | 3470 | // Named-entity recognition configuration. When set, the NER post-processor runs at |
| packages/go/v5/binding.go | 3471 | // the Middle stage and populates `ExtractionResult::entities`. |
| packages/go/v5/binding.go | 3902 | // Backend that runs the entity detection. |
| packages/go/v5/binding.go | 3904 | // Entity categories to detect. Defaults to a sensible PERSON/ORG/LOCATION/EMAIL set |
| packages/go/v5/binding.go | 3914 | // Arbitrary user-supplied entity labels for zero-shot detection. |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| packages/go/v5/binding.go | 73 | // ErrCache is returned when cache error. |
| packages/go/v5/binding.go | 74 | ErrCache = errors.New("cache error") |
| packages/go/v5/binding.go | 573 | // Optional cache directory override for tokenizer files. |
| packages/go/v5/binding.go | 574 | // Defaults to hf-hub's standard cache (`~/.cache/huggingface/`). |
| packages/go/v5/binding.go | 704 | // model lifecycle. |
| packages/go/v5/binding.go | 869 | // `acceleration`) are ignored — the host owns the model lifecycle. |
| packages/go/v5/binding.go | 936 | // WhisperModelSmall WhisperModelSmall better accuracy with higher memory and cache use. |
| packages/go/v5/binding.go | 938 | // WhisperModelMedium WhisperModelMedium high quality; slower and more memory-intensive. |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| packages/go/v5/binding.go | 1122 | // InlineTypeFootnoteRef InlineTypeFootnoteRef footnote reference marker. |
| packages/go/v5/binding.go | 1132 | // RelationshipKindFootnoteReference RelationshipKindFootnoteReference footnote marker -> footnote definition. |
| packages/go/v5/binding.go | 1134 | // RelationshipKindCitationReference RelationshipKindCitationReference citation marker -> bibliography entry. |
| packages/go/v5/binding.go | 1158 | // ContentLayerFootnote ContentLayerFootnote footnote content. |
| packages/go/v5/binding.go | 1159 | ContentLayerFootnote ContentLayer = "Footnote" |
| packages/go/v5/binding.go | 1166 | // Variants: Title, Heading, Paragraph, List, ListItem, Table, Image, Code, Quote, Formula, Footnote, Group, PageBreak, Slide, DefinitionList, DefinitionItem, Citation, Admonition, RawBlock, MetadataBlock |
| packages/go/v5/binding.go | 1375 | // NodeContentFootnote footnote reference content. |
| packages/go/v5/binding.go | 1377 | // The footnote body text. |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| packages/go/v5/binding.go | 428 | // // Threshold calibration is deferred to the Stage 0 benchmark harness. |
| packages/go/v5/binding.go | 458 | // reasonable starting point; calibrate with the Stage 0 benchmark harness. |
| packages/go/v5/binding.go | 5412 | // Contains metrics, structural analysis, imports/exports, comments, |
| packages/php/stubs/kreuzberg_extension.php | 2963 | * Contains metrics, structural analysis, imports/exports, comments, |
| packages/csharp/src/Kreuzberg/ExtractionResult.cs | 239 | /// Contains metrics, structural analysis, imports/exports, comments, |
| packages/csharp/src/Kreuzberg/VlmFallbackPolicy.cs | 45 | /// reasonable starting point; calibrate with the Stage 0 benchmark harness. |
| packages/java/dev/kreuzberg/VlmFallbackPolicy.java | 52 | * reasonable starting point; calibrate with the Stage 0 benchmark harness. |
| packages/ruby/lib/kreuzberg/native.rb | 288 | ## reasonable starting point; calibrate with the Stage 0 benchmark harness. |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| packages/go/v5/binding.go | 422 | // model: "openai/gpt-4o-mini".to_string(), |
| packages/go/v5/binding.go | 545 | // available on HuggingFace Hub can be used, including OpenAI-compatible tokenizers |
| packages/go/v5/binding.go | 673 | // `"openai/text-embedding-3-small"`). |
| packages/go/v5/binding.go | 3837 | // model = "openai/gpt-4o" |
| packages/go/v5/binding.go | 3842 | // Examples: `"openai/gpt-4o"`, `"anthropic/claude-sonnet-4-20250514"`, |
| packages/go/v5/binding.go | 3878 | // model = "openai/gpt-4o" |
| packages/go/v5/binding.go | 5492 | // The LLM model identifier (e.g. "openai/gpt-4o", "anthropic/claude-sonnet-4-20250514"). |
| packages/go/v5/binding.go | 8153 | // Used by `kreuzberg-cli`, the api/mcp endpoints, and generated language |

## Gap

_없음_
