# The-Pocket/PocketFlow 코드 레벨 분석

생성일: 2026-06-17T23:31:49.107Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | A integrated platform (91) |
| stars | 10769 |
| language | Python |
| tags | rag, agent-knowledge, korea-signal |
| files/code/source | 493/269/257 |
| tests/ci | 10/0 |
| local path | sources/The-Pocket__PocketFlow |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 8 | 5 | cookbook/pocketflow-lead-generation/flow.py:18 scrape = ScrapeLeads() |
| Parsing/OCR/document extraction | code | 13 | 9 | cookbook/pocketflow-invoice/create_invoice.py:1 """Generate a sample invoice PDF for testing the invoice processor.""" |
| Chunking/splitting | code | 16 | 7 | cookbook/pocketflow-agentic-rag/utils.py:26 "rag": "RAG = Retrieval Augmented Generation. Offline: chunk, embed, store. Online: embed query, retrieve top-K, generate answer with context.", |
| Embedding/vector index | code | 36 | 11 | cookbook/pocketflow-tool-embeddings/flow.py:5 """Create a flow for text embedding""" |
| Retrieval/search/rerank | code | 68 | 33 | utils/update_pocketflow_mdc.py:45 fm_match = re.search(r'^---\s*(.+?)\s*---', content, re.DOTALL) |
| Wiki/graph/entity model | doc-only | 1 | 0 | cookbook/pocketflow-structured-output/data.txt:24 - managed inventory and vendor relations |
| Memory/update lifecycle | code | 61 | 16 | cookbook/pocketflow-a2a/task_manager.py:41 # Upsert the task in the store (initial state: submitted) |
| Provenance/citation/evidence | code | 4 | 2 | cookbook/pocketflow-debate/nodes.py:10 prompt = f"""You are an expert advocate arguing FOR this claim. Be specific, use evidence and logical reasoning. |
| Evaluation/observability | code | 30 | 17 | cookbook/pocketflow-chat-guardrail/main.py:51 Return your evaluation in YAML format: |
| Agent/MCP/tool surface | code | 203 | 85 | setup.py:9 description="Pocket Flow: 100-line LLM framework. Let Agents build Agents!", |

## 의존성 신호

- LLM/app framework: openai, anthropic
- Vector/search store: faiss-cpu
- Document parsing/OCR: PyMuPDF

## 주요 파일 후보

### Ingestion/source intake

- `cookbook/pocketflow-lead-generation/flow.py`
- `cookbook/pocketflow-tool-crawler/main.py`
- `cookbook/pocketflow-tool-crawler/nodes.py`
- `cookbook/pocketflow-tool-crawler/tools/crawler.py`
- `cookbook/pocketflow-voice-chat/utils/speech_to_text.py`
- `README.md`
- `cookbook/README.md`
- `cookbook/pocketflow-tool-crawler/README.md`

### Parsing/OCR/document extraction

- `cookbook/pocketflow-invoice/create_invoice.py`
- `cookbook/pocketflow-invoice/main.py`
- `cookbook/pocketflow-invoice/nodes.py`
- `cookbook/pocketflow-structured-output/main.py`
- `cookbook/pocketflow-tool-pdf-vision/flow.py`
- `cookbook/pocketflow-tool-pdf-vision/nodes.py`
- `cookbook/pocketflow-tool-crawler/tools/crawler.py`
- `cookbook/pocketflow-tool-pdf-vision/tools/pdf.py`
- `cookbook/pocketflow-tool-pdf-vision/tools/vision.py`
- `cookbook/pocketflow-invoice/README.md`
- `cookbook/pocketflow-invoice/requirements.txt`
- `cookbook/pocketflow-tool-pdf-vision/README.md`
- ... 1 more

### Chunking/splitting

- `cookbook/pocketflow-agentic-rag/utils.py`
- `cookbook/pocketflow-batch-node/nodes.py`
- `cookbook/pocketflow-fastapi-websocket/nodes.py`
- `cookbook/pocketflow-llm-streaming/main.py`
- `cookbook/pocketflow-llm-streaming/utils.py`
- `cookbook/pocketflow-rag/nodes.py`
- `cookbook/pocketflow-fastapi-websocket/utils/stream_llm.py`
- `tests/test_async_batch_node.py`
- `tests/test_batch_node.py`
- `docs/utility_function/chunking.md`
- `cookbook/pocketflow-batch-node/README.md`
- `docs/core_abstraction/batch.md`
- ... 4 more

### Embedding/vector index

- `cookbook/pocketflow-tool-embeddings/flow.py`
- `cookbook/pocketflow-tool-embeddings/main.py`
- `cookbook/pocketflow-tool-embeddings/nodes.py`
- `cookbook/pocketflow-chat-memory/utils/get_embedding.py`
- `cookbook/pocketflow-tool-embeddings/tools/embeddings.py`
- `cookbook/pocketflow-chat-memory/main.py`
- `cookbook/pocketflow-chat-memory/nodes.py`
- `cookbook/pocketflow-rag/main.py`
- `cookbook/pocketflow-rag/nodes.py`
- `cookbook/pocketflow-rag/utils.py`
- `cookbook/pocketflow-chat-memory/utils/vector_index.py`
- `cookbook/pocketflow-tool-embeddings/README.md`
- ... 6 more

### Retrieval/search/rerank

- `utils/update_pocketflow_mdc.py`
- `cookbook/pocketflow-a2a/a2a_server.py`
- `cookbook/pocketflow-a2a/flow.py`
- `cookbook/pocketflow-a2a/nodes.py`
- `cookbook/pocketflow-agent/flow.py`
- `cookbook/pocketflow-agent/nodes.py`
- `cookbook/pocketflow-agent/utils.py`
- `cookbook/pocketflow-agentic-rag/nodes.py`
- `cookbook/pocketflow-agentic-rag/utils.py`
- `cookbook/pocketflow-chat-memory/flow.py`
- `cookbook/pocketflow-chat-memory/main.py`
- `cookbook/pocketflow-chat-memory/nodes.py`
- ... 6 more

### Wiki/graph/entity model

- `cookbook/pocketflow-structured-output/data.txt`

### Memory/update lifecycle

- `cookbook/pocketflow-a2a/task_manager.py`
- `cookbook/pocketflow-chat-memory/main.py`
- `cookbook/pocketflow-coding-agent/nodes.py`
- `cookbook/pocketflow-coding-agent/setup_test_project.py`
- `cookbook/pocketflow-fastapi-background/main.py`
- `cookbook/pocketflow-fastapi-hitl/server.py`
- `cookbook/pocketflow-multi-agent/main.py`
- `cookbook/pocketflow-parallel-batch/main.py`
- `cookbook/pocketflow-self-healing-mermaid/nodes.py`
- `cookbook/pocketflow-tracing/test_tracing.py`
- `cookbook/pocketflow-voice-chat/nodes.py`
- `cookbook/pocketflow-coding-agent/test_project/db.py`
- ... 6 more

### Provenance/citation/evidence

- `cookbook/pocketflow-debate/nodes.py`
- `cookbook/pocketflow-visualization/visualize.py`
- `cookbook/pocketflow-debate/README.md`
- `cookbook/data/PaulGrahamEssaysLarge/avg.txt`

### Evaluation/observability

- `cookbook/pocketflow-chat-guardrail/main.py`
- `cookbook/pocketflow-judge/nodes.py`
- `cookbook/pocketflow-map-reduce/main.py`
- `cookbook/pocketflow-map-reduce/nodes.py`
- `cookbook/pocketflow-newsletter/nodes.py`
- `cookbook/pocketflow-supervisor/nodes.py`
- `cookbook/pocketflow-tao/nodes.py`
- `cookbook/pocketflow-text2sql/populate_db.py`
- `cookbook/pocketflow-thinking/nodes.py`
- `cookbook/pocketflow-tracing/setup.py`
- `cookbook/pocketflow-tracing/test_tracing.py`
- `cookbook/pocketflow-tracing/tracing/__init__.py`
- ... 6 more

### Agent/MCP/tool surface

- `setup.py`
- `cookbook/pocketflow-a2a/a2a_client.py`
- `cookbook/pocketflow-a2a/a2a_server.py`
- `cookbook/pocketflow-a2a/flow.py`
- `cookbook/pocketflow-a2a/main.py`
- `cookbook/pocketflow-a2a/nodes.py`
- `cookbook/pocketflow-a2a/task_manager.py`
- `cookbook/pocketflow-a2a/utils.py`
- `cookbook/pocketflow-agent-skills/nodes.py`
- `cookbook/pocketflow-agent-skills/utils.py`
- `cookbook/pocketflow-agent/flow.py`
- `cookbook/pocketflow-agent/main.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| cookbook/pocketflow-lead-generation/flow.py | 18 | scrape = ScrapeLeads() |
| cookbook/pocketflow-lead-generation/flow.py | 24 | scrape >> enrich >> score >> personalize |
| cookbook/pocketflow-lead-generation/flow.py | 26 | return Flow(start=scrape) |
| cookbook/pocketflow-tool-crawler/main.py | 5 | """Run the web crawler flow""" |
| cookbook/pocketflow-tool-crawler/nodes.py | 2 | from tools.crawler import WebCrawler |
| cookbook/pocketflow-tool-crawler/nodes.py | 17 | crawler = WebCrawler(base_url, max_pages) |
| cookbook/pocketflow-tool-crawler/nodes.py | 18 | return crawler.crawl() |
| cookbook/pocketflow-tool-crawler/tools/crawler.py | 7 | """Simple web crawler that extracts content and follows links""" |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| cookbook/pocketflow-invoice/create_invoice.py | 1 | """Generate a sample invoice PDF for testing the invoice processor.""" |
| cookbook/pocketflow-invoice/create_invoice.py | 6 | def create_sample_invoice(output_path="invoice.pdf"): |
| cookbook/pocketflow-invoice/create_invoice.py | 7 | """Creates a realistic-looking invoice PDF with line items, tax, and total.""" |
| cookbook/pocketflow-invoice/main.py | 9 | # Get PDF path from command line args (--path=invoice.pdf) |
| cookbook/pocketflow-invoice/main.py | 10 | pdf_path = "invoice.pdf" |
| cookbook/pocketflow-invoice/main.py | 17 | print(f"Error: PDF file '{pdf_path}' not found.") |
| cookbook/pocketflow-invoice/nodes.py | 3 | import fitz # PyMuPDF |
| cookbook/pocketflow-invoice/nodes.py | 8 | """Extracts structured invoice data from a PDF using GPT-4o vision.""" |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| cookbook/pocketflow-agentic-rag/utils.py | 26 | "rag": "RAG = Retrieval Augmented Generation. Offline: chunk, embed, store. Online: embed query, retrieve top-K, generate answer with context.", |
| cookbook/pocketflow-batch-node/nodes.py | 8 | """Initialize with chunk size.""" |
| cookbook/pocketflow-batch-node/nodes.py | 24 | def exec(self, chunk): |
| cookbook/pocketflow-batch-node/nodes.py | 25 | """Process a single chunk of the CSV. |
| cookbook/pocketflow-batch-node/nodes.py | 28 | chunk: pandas DataFrame containing chunk_size rows |
| cookbook/pocketflow-batch-node/nodes.py | 31 | dict: Statistics for this chunk |
| cookbook/pocketflow-batch-node/nodes.py | 34 | "total_sales": chunk["amount"].sum(), |
| cookbook/pocketflow-batch-node/nodes.py | 35 | "num_transactions": len(chunk), |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| cookbook/pocketflow-tool-embeddings/flow.py | 5 | """Create a flow for text embedding""" |
| cookbook/pocketflow-tool-embeddings/flow.py | 6 | # Create embedding node |
| cookbook/pocketflow-tool-embeddings/flow.py | 7 | embedding = EmbeddingNode() |
| cookbook/pocketflow-tool-embeddings/flow.py | 10 | return Flow(start=embedding) |
| cookbook/pocketflow-tool-embeddings/main.py | 18 | print("Embedding dimension:", len(shared["embedding"])) |
| cookbook/pocketflow-tool-embeddings/main.py | 19 | print("First 5 values:", shared["embedding"][:5]) |
| cookbook/pocketflow-tool-embeddings/nodes.py | 2 | from tools.embeddings import get_embedding |
| cookbook/pocketflow-tool-embeddings/nodes.py | 5 | """Node for getting embeddings from OpenAI API""" |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| utils/update_pocketflow_mdc.py | 45 | fm_match = re.search(r'^---\s*(.+?)\s*---', content, re.DOTALL) |
| utils/update_pocketflow_mdc.py | 50 | title_match = re.search(r'title:\s*"?([^"\n]+)"?', frontmatter_text) |
| utils/update_pocketflow_mdc.py | 51 | parent_match = re.search(r'parent:\s*"?([^"\n]+)"?', frontmatter_text) |
| utils/update_pocketflow_mdc.py | 52 | nav_order_match = re.search(r'nav_order:\s*(\d+)', frontmatter_text) |
| utils/update_pocketflow_mdc.py | 75 | heading_match = re.search(r'#\s+(.+)', content) |
| cookbook/pocketflow-a2a/a2a_server.py | 45 | description="Answers questions using web search results when necessary.", |
| cookbook/pocketflow-a2a/a2a_server.py | 46 | tags=["research", "qa", "web search"], |
| cookbook/pocketflow-a2a/flow.py | 9 | 1. DecideAction node decides whether to search or answer |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| cookbook/pocketflow-structured-output/data.txt | 24 | - managed inventory and vendor relations |
| cookbook/pocketflow-structured-output/data.txt | 42 | Community College \| 2004-2006 |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| cookbook/pocketflow-a2a/task_manager.py | 41 | # Upsert the task in the store (initial state: submitted) |
| cookbook/pocketflow-a2a/task_manager.py | 42 | # We create the task first so its state can be tracked, even if the sync execution fails |
| cookbook/pocketflow-chat-memory/main.py | 5 | Run an interactive chat interface with memory retrieval. |
| cookbook/pocketflow-chat-memory/main.py | 15 | print("PocketFlow Chat with Memory") |
| cookbook/pocketflow-coding-agent/nodes.py | 13 | memory_file = os.path.join(workdir, ".memory.md") |
| cookbook/pocketflow-coding-agent/nodes.py | 19 | memory_file = os.path.join(workdir, ".memory.md") |
| cookbook/pocketflow-coding-agent/nodes.py | 60 | memory = load_memory(workdir) |
| cookbook/pocketflow-coding-agent/nodes.py | 68 | if memory: |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| cookbook/pocketflow-debate/nodes.py | 10 | prompt = f"""You are an expert advocate arguing FOR this claim. Be specific, use evidence and logical reasoning. |
| cookbook/pocketflow-debate/nodes.py | 103 | Which argument is stronger? Evaluate the quality of reasoning, evidence, and persuasiveness of each side. |
| cookbook/pocketflow-visualization/visualize.py | 177 | source_id = link["source"] |
| cookbook/pocketflow-visualization/visualize.py | 179 | source_group = node_groups.get(source_id, 0) |
| cookbook/pocketflow-debate/README.md | 8 | - Advocate FOR presents evidence-based supporting arguments |
| cookbook/pocketflow-debate/README.md | 48 | 3. **JudgeDebate** evaluates both arguments for reasoning quality, evidence, and persuasiveness, then picks a winner |
| cookbook/pocketflow-debate/README.md | 85 | 💬 The FOR argument provided stronger empirical evidence with specific studies |
| cookbook/pocketflow-debate/README.md | 92 | ⚖️ Verdict: The FOR argument provided stronger empirical evidence... |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| cookbook/pocketflow-chat-guardrail/main.py | 51 | Return your evaluation in YAML format: |
| cookbook/pocketflow-judge/nodes.py | 45 | Return your evaluation in YAML format: |
| cookbook/pocketflow-map-reduce/main.py | 16 | print("\nDetailed evaluation results:") |
| cookbook/pocketflow-map-reduce/main.py | 17 | for filename, evaluation in shared.get("evaluations", {}).items(): |
| cookbook/pocketflow-map-reduce/main.py | 18 | qualified = "✓" if evaluation.get("qualifies", False) else "✗" |
| cookbook/pocketflow-map-reduce/main.py | 19 | name = evaluation.get("candidate_name", "Unknown") |
| cookbook/pocketflow-map-reduce/nodes.py | 46 | Return your evaluation in YAML format: |
| cookbook/pocketflow-map-reduce/nodes.py | 79 | for filename, evaluation in evaluations.items(): |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| setup.py | 9 | description="Pocket Flow: 100-line LLM framework. Let Agents build Agents!", |
| cookbook/pocketflow-a2a/a2a_client.py | 47 | "--agent-url", |
| cookbook/pocketflow-a2a/a2a_client.py | 49 | help="URL of the PocketFlow A2A agent server.", |
| cookbook/pocketflow-a2a/a2a_client.py | 52 | """Minimal CLI client to interact with an A2A agent.""" |
| cookbook/pocketflow-a2a/a2a_client.py | 54 | print(colorize(C_BRIGHT_MAGENTA, f"Connecting to agent at: {agent_url}")) |
| cookbook/pocketflow-a2a/a2a_client.py | 110 | print(colorize(C_RED, f"Error from agent (Code: {response.error.code}): {response.error.message}")) |
| cookbook/pocketflow-a2a/a2a_client.py | 117 | final_answer = "Agent did not provide a final artifact." |
| cookbook/pocketflow-a2a/a2a_server.py | 28 | @click.option("--port", "port", default=10003) # Use a different port from other agents |

## Gap

- ci
