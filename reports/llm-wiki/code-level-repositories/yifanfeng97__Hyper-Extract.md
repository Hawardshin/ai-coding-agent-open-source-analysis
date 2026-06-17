# yifanfeng97/Hyper-Extract 코드 레벨 분석

생성일: 2026-06-17T23:31:43.890Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | graph-rag/kg |
| maturity | A integrated platform (89) |
| stars | 1571 |
| language | Python |
| tags | rag, knowledge-base, agent-knowledge |
| files/code/source | 434/134/52 |
| tests/ci | 97/5 |
| local path | sources/yifanfeng97__Hyper-Extract |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | doc-only | 11 | 0 | mkdocs.yml:142 - tutorials/knowledge-base/step2-ingest.md |
| Parsing/OCR/document extraction | code | 17 | 3 | hyperextract/__init__.py:1 """HyperExtract - AI-powered data structure extraction from unstructured text. |
| Chunking/splitting | code | 40 | 20 | hyperextract/types/__init__.py:25 * *Logic*: It treats every text chunk as a partial view of the *same* object and uses LLM to merge them. |
| Embedding/vector index | code | 132 | 25 | hyperextract/cli/cli.py:115 ("he config --help", "Manage LLM/Embedder config"), |
| Retrieval/search/rerank | code | 105 | 18 | hyperextract/cli/cli.py:129 ("he build-index <ka_path>", "Build semantic search index"), |
| Wiki/graph/entity model | code | 199 | 26 | hyperextract/cli/cli.py:457 node_count = len(data.get("nodes", data.get("entities", []))) |
| Memory/update lifecycle | code | 75 | 18 | hyperextract/types/__init__.py:25 * *Logic*: It treats every text chunk as a partial view of the *same* object and uses LLM to merge them. |
| Provenance/citation/evidence | code | 20 | 2 | hyperextract/methods/registry.py:170 description="Atom: Temporal knowledge graph extraction with evidence attribution", |
| Evaluation/observability | code | 25 | 2 | hyperextract/types/graph.py:53 "Extract ALL relevant entities, concepts, or nodes from the following text with high precision.\n\n" |
| Agent/MCP/tool surface | code | 141 | 23 | hyperextract/cli/config.py:17 "openai": { |

## 의존성 신호

- LLM/app framework: langchain, langchain-community, langchain-openai, langchain-anthropic, langchain-google-genai
- Vector/search store: faiss, faiss-cpu

## 주요 파일 후보

### Ingestion/source intake

- `mkdocs.yml`
- `.github/workflows/docs.yml`
- `.github/workflows/publish.yml`
- `.github/workflows/test.yml`
- `docs/en/tutorials/index.md`
- `docs/en/tutorials/knowledge-base/index.md`
- `docs/en/tutorials/knowledge-base/step1-setup.md`
- `docs/en/tutorials/knowledge-base/step2-ingest.md`
- `docs/en/tutorials/knowledge-base/step3-query.md`
- `docs/zh/tutorials/knowledge-base/index.md`
- `docs/zh/tutorials/knowledge-base/step1-setup.md`

### Parsing/OCR/document extraction

- `hyperextract/__init__.py`
- `hyperextract/types/__init__.py`
- `hyperextract/methods/typical/atom.py`
- `examples/en/autotypes/graph_demo.py`
- `README_ZH.md`
- `README.md`
- `docs/en/index.md`
- `hyperextract/cli/README.md`
- `docs/en/resources/faq.md`
- `docs/zh/resources/faq.md`
- `docs/en/tutorials/knowledge-base/step2-ingest.md`
- `docs/en/tutorials/research-assistant/index.md`
- ... 5 more

### Chunking/splitting

- `hyperextract/types/__init__.py`
- `hyperextract/types/base.py`
- `hyperextract/types/graph.py`
- `hyperextract/types/hypergraph.py`
- `hyperextract/types/list.py`
- `hyperextract/types/model.py`
- `hyperextract/types/set.py`
- `hyperextract/types/spatial_graph.py`
- `hyperextract/types/spatio_temporal_graph.py`
- `hyperextract/types/temporal_graph.py`
- `hyperextract/utils/client.py`
- `hyperextract/methods/rag/cog_rag.py`
- ... 6 more

### Embedding/vector index

- `hyperextract/cli/cli.py`
- `hyperextract/cli/config.py`
- `hyperextract/templates/__init__.py`
- `hyperextract/types/base.py`
- `hyperextract/types/graph.py`
- `hyperextract/types/hypergraph.py`
- `hyperextract/types/list.py`
- `hyperextract/types/model.py`
- `hyperextract/types/set.py`
- `hyperextract/types/spatial_graph.py`
- `hyperextract/types/spatio_temporal_graph.py`
- `hyperextract/types/temporal_graph.py`
- ... 6 more

### Retrieval/search/rerank

- `hyperextract/cli/cli.py`
- `hyperextract/methods/__init__.py`
- `hyperextract/methods/registry.py`
- `hyperextract/types/base.py`
- `hyperextract/types/graph.py`
- `hyperextract/types/hypergraph.py`
- `hyperextract/types/list.py`
- `hyperextract/types/model.py`
- `hyperextract/types/set.py`
- `hyperextract/cli/commands/list.py`
- `hyperextract/methods/rag/__init__.py`
- `hyperextract/methods/rag/cog_rag.py`
- ... 6 more

### Wiki/graph/entity model

- `hyperextract/cli/cli.py`
- `hyperextract/methods/registry.py`
- `hyperextract/types/__init__.py`
- `hyperextract/types/base.py`
- `hyperextract/types/graph.py`
- `hyperextract/types/hypergraph.py`
- `hyperextract/types/list.py`
- `hyperextract/types/spatial_graph.py`
- `hyperextract/types/spatio_temporal_graph.py`
- `hyperextract/types/temporal_graph.py`
- `hyperextract/cli/commands/list.py`
- `hyperextract/methods/rag/__init__.py`
- ... 6 more

### Memory/update lifecycle

- `hyperextract/types/__init__.py`
- `hyperextract/types/base.py`
- `hyperextract/types/graph.py`
- `hyperextract/types/hypergraph.py`
- `hyperextract/types/list.py`
- `hyperextract/types/model.py`
- `hyperextract/types/set.py`
- `hyperextract/types/spatial_graph.py`
- `hyperextract/types/spatio_temporal_graph.py`
- `hyperextract/types/temporal_graph.py`
- `hyperextract/methods/rag/cog_rag.py`
- `hyperextract/methods/rag/graph_rag.py`
- ... 6 more

### Provenance/citation/evidence

- `hyperextract/methods/registry.py`
- `hyperextract/methods/typical/atom.py`
- `hyperextract-skills/record-designer/cases/product-features.yaml`
- `hyperextract/templates/presets/legal/case_citation.yaml`
- `hyperextract/templates/presets/legal/case_fact_timeline.yaml`
- `examples/en/templates/legal_template.py`
- `README.md`
- `hyperextract/templates/README.md`
- `docs/en/concepts/methods.md`
- `docs/en/python/core-concepts.md`
- `docs/en/cli/commands/talk.md`
- `docs/en/python/guides/using-methods.md`
- ... 6 more

### Evaluation/observability

- `hyperextract/types/graph.py`
- `hyperextract/methods/typical/itext2kg.py`
- `hyperextract-skills/record-designer/cases/earnings-summary.yaml`
- `README.md`
- `hyperextract/templates/README.md`
- `docs/en/cli/workflow.md`
- `docs/en/templates/how-to-choose.md`
- `docs/en/cli/commands/search.md`
- `docs/en/python/guides/search-and-chat.md`
- `docs/en/python/guides/using-methods.md`
- `docs/en/templates/choosing/by-task.md`
- `docs/en/templates/reference/finance.md`
- ... 6 more

### Agent/MCP/tool surface

- `hyperextract/cli/config.py`
- `hyperextract/types/base.py`
- `hyperextract/types/graph.py`
- `hyperextract/types/hypergraph.py`
- `hyperextract/types/list.py`
- `hyperextract/types/model.py`
- `hyperextract/types/set.py`
- `hyperextract/types/spatial_graph.py`
- `hyperextract/types/spatio_temporal_graph.py`
- `hyperextract/types/temporal_graph.py`
- `hyperextract/utils/client.py`
- `hyperextract/cli/commands/config.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| mkdocs.yml | 142 | - tutorials/knowledge-base/step2-ingest.md |
| mkdocs.yml | 232 | - zh/tutorials/knowledge-base/step2-ingest.md |
| .github/workflows/docs.yml | 84 | - name: Upload Pages artifact |
| .github/workflows/docs.yml | 85 | uses: actions/upload-pages-artifact@v5 |
| .github/workflows/publish.yml | 49 | - name: Upload distribution packages |
| .github/workflows/publish.yml | 50 | uses: actions/upload-artifact@v7 |
| .github/workflows/test.yml | 62 | - name: Upload coverage to Codecov |
| docs/en/tutorials/index.md | 29 | - Incremental document ingestion |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| hyperextract/__init__.py | 1 | """HyperExtract - AI-powered data structure extraction from unstructured text. |
| hyperextract/types/__init__.py | 4 | Each AutoType is designed to extract a specific structure of knowledge from unstructured text, |
| hyperextract/methods/typical/atom.py | 209 | You are a precise knowledge extraction engine designed to distill unstructured text into a structured Knowledge Graph. |
| examples/en/autotypes/graph_demo.py | 5 | This demo shows how to build a knowledge graph from unstructured text. |
| README_ZH.md | 58 | he parse paper.pdf -t general/academic_graph -o ./paper_kb/ |
| README.md | 38 | Hyper-Extract is an intelligent, LLM-powered knowledge extraction and evolution framework. It radically simplifies transforming highly unstructured texts into persistent, predictable, and strongly-typed **Knowledge Abstr |
| README.md | 58 | he parse paper.pdf -t general/academic_graph -o ./paper_kb/ |
| README.md | 68 | Automatically identify companies, executives, financial metrics, and their relationships from unstructured reports. |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| hyperextract/types/__init__.py | 25 | * *Logic*: It treats every text chunk as a partial view of the *same* object and uses LLM to merge them. |
| hyperextract/types/__init__.py | 32 | * *Logic*: You define a unique key (e.g., monster name). If the same monster appears in chunk 1 and chunk 10, `AutoSet` intelligently merges their attributes. |
| hyperextract/types/base.py | 11 | from langchain_text_splitters import RecursiveCharacterTextSplitter |
| hyperextract/types/base.py | 61 | chunk_size: Maximum chunk size for splitting long texts. |
| hyperextract/types/base.py | 82 | # Initialize text splitter for chunking long documents |
| hyperextract/types/base.py | 83 | self.text_splitter = RecursiveCharacterTextSplitter( |
| hyperextract/types/base.py | 260 | "stage=extract_single_chunk_result chunk=0 result_summary=%s", |
| hyperextract/types/base.py | 265 | chunks = self.text_splitter.split_text(text) |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| hyperextract/cli/cli.py | 115 | ("he config --help", "Manage LLM/Embedder config"), |
| hyperextract/cli/cli.py | 762 | """Build vector index for Knowledge Abstract.""" |
| hyperextract/cli/config.py | 20 | "default_embedder": "text-embedding-3-small", |
| hyperextract/cli/config.py | 25 | "default_embedder": "text-embedding-v4", |
| hyperextract/cli/config.py | 63 | model: str = "text-embedding-3-small" |
| hyperextract/cli/config.py | 79 | model=data.get("model", "text-embedding-3-small"), |
| hyperextract/cli/config.py | 91 | self.embedder = EmbedderConfig() |
| hyperextract/cli/config.py | 104 | if "embedder" in data: |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| hyperextract/cli/cli.py | 129 | ("he build-index <ka_path>", "Build semantic search index"), |
| hyperextract/cli/cli.py | 137 | ("he search <ka_path> <query>", "Semantic search"), |
| hyperextract/cli/cli.py | 183 | "Enter number or search keyword", |
| hyperextract/cli/cli.py | 236 | False, "--no-index", help="Skip building search index" |
| hyperextract/cli/cli.py | 361 | progress.update(task, description="Building search index...") |
| hyperextract/cli/cli.py | 377 | f"[dim] he build-index {output} # Build index to enable search/talk[/dim]" |
| hyperextract/cli/cli.py | 391 | f'[dim] he search {output} "keyword" # Semantic search[/dim]' |
| hyperextract/cli/cli.py | 437 | f'[dim] he search {ka_path} "keyword" # Search specific content[/dim]' |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| hyperextract/cli/cli.py | 457 | node_count = len(data.get("nodes", data.get("entities", []))) |
| hyperextract/cli/cli.py | 458 | edge_count = len(data.get("edges", data.get("relations", []))) |
| hyperextract/methods/registry.py | 106 | Graph_RAG, |
| hyperextract/methods/registry.py | 111 | name="graph_rag", |
| hyperextract/methods/registry.py | 112 | method_class=Graph_RAG, |
| hyperextract/methods/registry.py | 114 | description="Graph-RAG: Graph-based Retrieval-Augmented Generation with Community detection", |
| hyperextract/methods/registry.py | 121 | description="Lightweight Graph-based RAG with binary edges for entity-relationship extraction", |
| hyperextract/methods/registry.py | 128 | description="Hypergraph-based RAG with n-ary hyperedges for complex multi-entity relationships", |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| hyperextract/types/__init__.py | 25 | * *Logic*: It treats every text chunk as a partial view of the *same* object and uses LLM to merge them. |
| hyperextract/types/base.py | 28 | extracted from text. It handles the full lifecycle from extraction to serialization. |
| hyperextract/types/base.py | 33 | - Store and aggregate extracted knowledge with configurable merge strategies |
| hyperextract/types/base.py | 170 | # ==================== Lifecycle Hooks: State Management ==================== |
| hyperextract/types/base.py | 208 | 3. Invalidate vector index (self.clear_index()) |
| hyperextract/types/base.py | 217 | """HOOK: Merge new data into state (UPDATE). |
| hyperextract/types/base.py | 219 | Called by feed() where the data provided is INCREMENTAL. |
| hyperextract/types/base.py | 222 | 1. Merge incoming_data into current data state (optimized for incremental updates) |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| hyperextract/methods/registry.py | 170 | description="Atom: Temporal knowledge graph extraction with evidence attribution", |
| hyperextract/methods/typical/atom.py | 130 | "A list of exact string copies of the atomic facts or sentences from the source text that provide evidence for this relationship. " |
| hyperextract/methods/typical/atom.py | 210 | Your goal is to extract all meaningful relationships (edges) between entities, while rigorously capturing their temporal bounds and grounding evidence. |
| hyperextract/methods/typical/atom.py | 219 | 6. **Evidence (`atomic_facts`)**: The exact source sentences/facts supporting this edge. |
| hyperextract/methods/typical/atom.py | 238 | #### 3. Evidence Attribution (atomic_facts) |
| hyperextract/methods/typical/atom.py | 239 | - For every relationship extracted, identify the specific sentence(s) or atomic fact(s) in the source text that provide the evidence. |
| hyperextract/methods/typical/atom.py | 291 | 6. **atomic_facts**: Merge all evidence strings into a single list. Remove exact duplicate strings. |
| hyperextract/methods/typical/atom.py | 308 | - Evidence attribution: atomic_facts field traces each extracted edge to source facts |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| hyperextract/types/graph.py | 53 | "Extract ALL relevant entities, concepts, or nodes from the following text with high precision.\n\n" |
| hyperextract/methods/typical/itext2kg.py | 87 | The predicates should be chosen with precision to accurately reflect the expressed relationships. |
| hyperextract-skills/record-designer/cases/earnings-summary.yaml | 9 | en: 'Earnings Summary Template - Extract key financial metrics and performance summary from financial reports' |
| hyperextract-skills/record-designer/cases/earnings-summary.yaml | 50 | en: 'You are a professional financial analyst responsible for accurately extracting core financial data from financial reports. Ensure precision and completeness of the data.' |
| hyperextract-skills/record-designer/cases/earnings-summary.yaml | 62 | - 'Amounts are in hundred millions of CNY by default, preserve original precision' |
| README.md | 68 | Automatically identify companies, executives, financial metrics, and their relationships from unstructured reports. |
| hyperextract/templates/README.md | 280 | \| [earnings_summary](./presets/finance/earnings_summary.yaml) \| model \| Extract earnings call key metrics \| Earnings call transcripts \| |
| docs/en/cli/workflow.md | 78 | - **Nodes**: Authors, concepts, models, metrics |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| hyperextract/cli/config.py | 17 | "openai": { |
| hyperextract/cli/config.py | 18 | "base_url": "https://api.openai.com/v1", |
| hyperextract/types/base.py | 45 | llm_client: BaseChatModel, |
| hyperextract/types/base.py | 58 | llm_client: Language model client for extraction. |
| hyperextract/types/base.py | 67 | self.llm_client = llm_client |
| hyperextract/types/base.py | 79 | \| self.llm_client.with_structured_output(self._data_schema) |
| hyperextract/types/base.py | 108 | llm_client=self.llm_client, |
| hyperextract/types/base.py | 500 | qa_chain = qa_prompt \| self.llm_client |

## Gap

_없음_
