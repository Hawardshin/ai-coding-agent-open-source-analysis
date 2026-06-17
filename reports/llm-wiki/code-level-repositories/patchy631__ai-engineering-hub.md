# patchy631/ai-engineering-hub 코드 레벨 분석

생성일: 2026-06-17T23:31:54.605Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | curated-list/tutorial |
| maturity | C focused implementation (46) |
| stars | 35839 |
| language | Jupyter Notebook |
| tags | rag, document-chat, agent-knowledge |
| files/code/source | 1253/710/700 |
| tests/ci | 1/7 |
| local path | sources/patchy631__ai-engineering-hub |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 145 | 84 | code-model-comparison/code_ingestion.py:1 from gitingest import ingest |
| Parsing/OCR/document extraction | code | 105 | 65 | agentic_rag_deepseek/app_deep_seek.py:24 """Creates a Crew with the given PDF tool (if any) and a web search tool.""" |
| Chunking/splitting | code | 95 | 77 | ai-podcast-generation/app_oss.py:53 .script-segment { |
| Embedding/vector index | code | 118 | 70 | context-engineering-workflow/src/rag/embeddings.py:31 return [r.embeddings for r in resp.results] |
| Retrieval/search/rerank | code | 194 | 131 | paralegal-agent-crew/src/retrieval/retriever_rerank.py:17 class Retriever: |
| Wiki/graph/entity model | code | 31 | 7 | fastest-rag-milvus-groq/rag.py:182 "payload": {"context": result["entity"]["context"]} |
| Memory/update lifecycle | code | 210 | 99 | ai-podcast-generator/app.py:166 # Step 4: Merge Audio |
| Provenance/citation/evidence | code | 53 | 33 | ai_news_generator/app.py:66 "well-organized research briefs with proper citations " |
| Evaluation/observability | code | 117 | 57 | ai-podcast-generation/app_oss.py:346 st.metric("📊 Total Lines", podcast_script.total_lines) |
| Agent/MCP/tool surface | code | 457 | 242 | acp-code/acp_client.py:10 agent="research_drafter", |

## 의존성 신호

- LLM/app framework: @ai-sdk/openai, @openai/apps-sdk-ui, openai, @anthropic-ai/sdk, @langchain/core, @langchain/langgraph, @langchain/openai, crewai
- Vector/search store: llama-index-vector-stores-qdrant, qdrant-client, pymilvus, llama-index-vector-stores-milvus, lancedb
- Graph/KG store: networkx
- Document parsing/OCR: beautifulsoup4, pypdf, pypdf2, pdfplumber, PyMuPDF
- Eval/observability: deepeval
- Persistence/database: aiosqlite, sqlalchemy, livekit-plugins-deepgram, langchain-mongodb

## 주요 파일 후보

### Ingestion/source intake

- `code-model-comparison/code_ingestion.py`
- `minimaxm2-vs-sonnet4-5-vs-kimik2-vs-gemini3/code_ingestion.py`
- `sonnet4-vs-o4/code_ingestion.py`
- `sonnet4-vs-qwen3-coder/code_ingestion.py`
- `ai-podcast-generation/app_oss.py`
- `ai-podcast-generation/app.py`
- `ai-podcast-generator/app.py`
- `ai-podcast-generator/scraper.py`
- `audio-analysis-toolkit/app.py`
- `chat-with-code/app.py`
- `code-model-comparison/app.py`
- `context-engineering-workflow/app.py`
- ... 6 more

### Parsing/OCR/document extraction

- `agentic_rag_deepseek/app_deep_seek.py`
- `agentic_rag/app_deep_seek.py`
- `agentic_rag/app_llama3.2.py`
- `agentic_rag/app.py`
- `code-model-comparison/app.py`
- `code-model-comparison/code_evaluation_opik.py`
- `code-model-comparison/model_service.py`
- `Colivara-deepseek-website-RAG/app.py`
- `context-engineering-workflow/app.py`
- `corrective-rag/app.py`
- `database-memory-agent/app.py`
- `database-memory-agent/ingest_data.py`
- ... 6 more

### Chunking/splitting

- `ai-podcast-generation/app_oss.py`
- `ai-podcast-generation/app.py`
- `ai-podcast-generator/app.py`
- `ai-podcast-generator/tts_converter.py`
- `chat-with-audios/app.py`
- `code-model-comparison/app.py`
- `code-model-comparison/model_service.py`
- `Colivara-deepseek-website-RAG/app.py`
- `context-engineering-workflow/app.py`
- `cursor_linkup_mcp/rag.py`
- `database-memory-agent/ingest_data.py`
- `deepseek-multimodal-RAG/app.py`
- ... 6 more

### Embedding/vector index

- `context-engineering-workflow/src/rag/embeddings.py`
- `notebook-lm-clone/src/embeddings/embedding_generator.py`
- `paralegal-agent-crew/src/embeddings/embed_data.py`
- `audio-analysis-toolkit/app.py`
- `chat-with-audios/app.py`
- `chat-with-audios/rag_code.py`
- `chat-with-code/app.py`
- `colbert-rag/colbert.py`
- `Colivara-deepseek-website-RAG/app.py`
- `context-engineering-workflow/app.py`
- `corrective-rag/app.py`
- `cursor_linkup_mcp/rag.py`
- ... 6 more

### Retrieval/search/rerank

- `paralegal-agent-crew/src/retrieval/retriever_rerank.py`
- `acp-code/smolagents_acp_server.py`
- `agent-with-mcp-memory/server.py`
- `agentic_rag_deepseek/app_deep_seek.py`
- `agentic_rag/app_deep_seek.py`
- `agentic_rag/app_llama3.2.py`
- `agentic_rag/app.py`
- `ai_news_generator/app.py`
- `autogen-stock-analyst/custom_autogen_model.py`
- `chat-with-audios/app.py`
- `chat-with-audios/rag_code.py`
- `chat-with-code/app.py`
- ... 6 more

### Wiki/graph/entity model

- `fastest-rag-milvus-groq/rag.py`
- `multimodal-rag-assemblyai/main.py`
- `zep-memory-assistant/prompt.py`
- `context-engineering-workflow/src/rag/retriever.py`
- `notebook-lm-clone/src/vector_database/milvus_vector_db.py`
- `paralegal-agent-crew/src/indexing/milvus_vdb.py`
- `open-agent-builder/components/app/(home)/sections/workflow-builder/ToolsNodePanel.tsx`
- `amazon-product-analysis-server/package-lock.json`
- `database-memory-agent/pyproject.toml`
- `open-agent-builder/package-lock.json`
- `streaming-ai-chatbot/package-lock.json`
- `stock-portfolio-analysis-agent/frontend/pnpm-lock.yaml`
- ... 6 more

### Memory/update lifecycle

- `ai-podcast-generator/app.py`
- `amazon-product-analysis-server/index.ts`
- `art_mcp_rl/mcp_server.py`
- `audio-analysis-toolkit/app.py`
- `context-engineering-workflow/app.py`
- `database-memory-agent/app.py`
- `database-memory-agent/planning.py`
- `deepseek-multimodal-RAG/rag_code.py`
- `fastest-rag-milvus-groq/app.py`
- `fastest-rag-milvus-groq/start_server.py`
- `financial-analyst-deepseek/finance_crew.py`
- `finetune-studio-mcp-app/server.ts`
- ... 6 more

### Provenance/citation/evidence

- `ai_news_generator/app.py`
- `context-engineering-workflow/app.py`
- `gpt-oss-vs-qwen3/code_evaluation_opik.py`
- `Multi-Agent-deep-researcher-mcp-windows-linux/agents.py`
- `multimodal-rag-assemblyai/main.py`
- `multiplatform_deep_researcher/flow.py`
- `notebook-lm-clone/app.py`
- `openai-swarm-ollama/app.py`
- `paralegal-agent-crew/app.py`
- `context-engineering-workflow/src/generation/generation.py`
- `context-engineering-workflow/src/rag/rag_pipeline.py`
- `context-engineering-workflow/src/tools/arxiv_tool.py`
- ... 6 more

### Evaluation/observability

- `ai-podcast-generation/app_oss.py`
- `ai-podcast-generation/app.py`
- `audio-analysis-toolkit/app.py`
- `code-model-comparison/app.py`
- `code-model-comparison/code_evaluation_opik.py`
- `Colivara-deepseek-website-RAG/rag_code.py`
- `context-engineering-workflow/app.py`
- `corrective-rag/workflow.py`
- `database-memory-agent/planning.py`
- `database-memory-agent/tools.py`
- `deepseek-multimodal-RAG/rag_code.py`
- `finetune-studio-mcp-app/server.ts`
- ... 6 more

### Agent/MCP/tool surface

- `acp-code/acp_client.py`
- `acp-code/crew_acp_server.py`
- `acp-code/smolagents_acp_server.py`
- `agent-with-mcp-memory/server.py`
- `agentic_rag_deepseek/app_deep_seek.py`
- `agentic_rag/app_deep_seek.py`
- `agentic_rag/app_llama3.2.py`
- `agentic_rag/app.py`
- `ai_news_generator/app.py`
- `ai-podcast-generation/app_oss.py`
- `ai-podcast-generation/app.py`
- `amazon-product-analysis-server/index.ts`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| code-model-comparison/code_ingestion.py | 1 | from gitingest import ingest |
| code-model-comparison/code_ingestion.py | 14 | summary, structure, content = ingest(repo_url) |
| minimaxm2-vs-sonnet4-5-vs-kimik2-vs-gemini3/code_ingestion.py | 1 | from gitingest import ingest |
| minimaxm2-vs-sonnet4-5-vs-kimik2-vs-gemini3/code_ingestion.py | 14 | summary, structure, content = ingest(repo_url) |
| sonnet4-vs-o4/code_ingestion.py | 1 | from gitingest import ingest |
| sonnet4-vs-o4/code_ingestion.py | 7 | summary, structure, content = ingest(repo_url) |
| sonnet4-vs-qwen3-coder/code_ingestion.py | 1 | from gitingest import ingest |
| sonnet4-vs-qwen3-coder/code_ingestion.py | 7 | summary, structure, content = ingest(repo_url) |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| agentic_rag_deepseek/app_deep_seek.py | 24 | """Creates a Crew with the given PDF tool (if any) and a web search tool.""" |
| agentic_rag_deepseek/app_deep_seek.py | 31 | "for the user query: {query}. Always try to use the PDF search tool first. " |
| agentic_rag_deepseek/app_deep_seek.py | 32 | "If you are not able to retrieve the information from the PDF search tool, " |
| agentic_rag_deepseek/app_deep_seek.py | 109 | """Displays the uploaded PDF in an iframe.""" |
| agentic_rag_deepseek/app_deep_seek.py | 113 | src="data:application/pdf;base64,{base64_pdf}" |
| agentic_rag_deepseek/app_deep_seek.py | 116 | type="application/pdf" |
| agentic_rag_deepseek/app_deep_seek.py | 127 | st.header("Add Your PDF Document") |
| agentic_rag_deepseek/app_deep_seek.py | 128 | uploaded_file = st.file_uploader("Choose a PDF file", type=["pdf"]) |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| ai-podcast-generation/app_oss.py | 53 | .script-segment { |
| ai-podcast-generation/app_oss.py | 357 | st.markdown(f'<div class="script-segment speaker-1"><strong>👩 {speaker}:</strong> {dialogue}</div>', unsafe_allow_html=True) |
| ai-podcast-generation/app_oss.py | 359 | st.markdown(f'<div class="script-segment speaker-2"><strong>👨 {speaker}:</strong> {dialogue}</div>', unsafe_allow_html=True) |
| ai-podcast-generation/app.py | 53 | .script-segment { |
| ai-podcast-generation/app.py | 342 | st.markdown(f'<div class="script-segment speaker-1"><strong>👩 {speaker}:</strong> {dialogue}</div>', unsafe_allow_html=True) |
| ai-podcast-generation/app.py | 344 | st.markdown(f'<div class="script-segment speaker-2"><strong>👨 {speaker}:</strong> {dialogue}</div>', unsafe_allow_html=True) |
| ai-podcast-generator/app.py | 131 | # Parse script to get segment count |
| ai-podcast-generator/app.py | 145 | progress_text.text(f"Processing segment {i}/{total_segments} ...") |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| context-engineering-workflow/src/rag/embeddings.py | 31 | return [r.embeddings for r in resp.results] |
| context-engineering-workflow/src/rag/embeddings.py | 48 | return resp.results[0].embeddings[0] |
| notebook-lm-clone/src/embeddings/embedding_generator.py | 15 | """Document chunk with its embedding vector""" |
| notebook-lm-clone/src/embeddings/embedding_generator.py | 17 | embedding: np.ndarray |
| notebook-lm-clone/src/embeddings/embedding_generator.py | 23 | 'vector': self.embedding.tolist(), |
| notebook-lm-clone/src/embeddings/embedding_generator.py | 45 | logger.info(f"Initializing embedding model: {self.model_name}") |
| notebook-lm-clone/src/embeddings/embedding_generator.py | 51 | logger.info(f"Model initialized successfully. Embedding dimension: {self.embedding_dim}") |
| notebook-lm-clone/src/embeddings/embedding_generator.py | 54 | logger.error(f"Failed to initialize embedding model: {str(e)}") |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| paralegal-agent-crew/src/retrieval/retriever_rerank.py | 17 | class Retriever: |
| paralegal-agent-crew/src/retrieval/retriever_rerank.py | 28 | def search(self, query: str, top_k: Optional[int] = None): |
| paralegal-agent-crew/src/retrieval/retriever_rerank.py | 29 | """Search for relevant documents using vector similarity.""" |
| paralegal-agent-crew/src/retrieval/retriever_rerank.py | 37 | # Perform vector search |
| paralegal-agent-crew/src/retrieval/retriever_rerank.py | 38 | search_results = self.vector_db.search( |
| paralegal-agent-crew/src/retrieval/retriever_rerank.py | 61 | nodes_with_scores = self.search(query, top_k) |
| paralegal-agent-crew/src/retrieval/retriever_rerank.py | 69 | nodes_with_scores = self.search(query, top_k) |
| paralegal-agent-crew/src/retrieval/retriever_rerank.py | 83 | # Return top-k retrieval results formatted as citation dicts |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| fastest-rag-milvus-groq/rag.py | 182 | "payload": {"context": result["entity"]["context"]} |
| multimodal-rag-assemblyai/main.py | 112 | "text": hit.entity.get("text"), |
| multimodal-rag-assemblyai/main.py | 113 | "source": hit.entity.get("source"), |
| multimodal-rag-assemblyai/main.py | 114 | "content_type": hit.entity.get("content_type"), |
| zep-memory-assistant/prompt.py | 13 | You will receive "MEMORY CONTEXT" containing FACTS and ENTITIES from previous conversations. This context is presented in third-person perspective. When you see: |
| zep-memory-assistant/prompt.py | 16 | - Other names: These are other entities mentioned in conversations related to the user (e.g., family members, friends) |
| zep-memory-assistant/prompt.py | 20 | 2. Identify key relationships and situations from entity descriptions |
| context-engineering-workflow/src/rag/retriever.py | 94 | "text": hit.entity.get("text"), |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| ai-podcast-generator/app.py | 166 | # Step 4: Merge Audio |
| ai-podcast-generator/app.py | 205 | raise Exception("No valid audio segments to merge") |
| amazon-product-analysis-server/index.ts | 72 | "Cache-Control": "public, max-age=86400", // Cache for 24 hours |
| art_mcp_rl/mcp_server.py | 8 | # ── Initialize in-memory SQLite database ─────────────────────────────── |
| art_mcp_rl/mcp_server.py | 9 | DB = sqlite3.connect(":memory:") |
| art_mcp_rl/mcp_server.py | 64 | INSERT INTO projects VALUES (2, 'Brand Refresh', 2, 3, 'completed', 200000); |
| audio-analysis-toolkit/app.py | 116 | /* Uploaded file X/delete button */ |
| audio-analysis-toolkit/app.py | 156 | div.stApp, .block-container, .main, .main > div:first-child, .st-emotion-cache-uf99v8, .st-emotion-cache-1wrcr25, .st-emotion-cache-18ni7ap { |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| ai_news_generator/app.py | 66 | "well-organized research briefs with proper citations " |
| ai_news_generator/app.py | 84 | "while ensuring all facts and citations from the research " |
| ai_news_generator/app.py | 102 | 4. Include all relevant citations and sources |
| ai_news_generator/app.py | 108 | - All citations and links to original sources |
| ai_news_generator/app.py | 119 | 2. Maintains all factual accuracy and citations from the research |
| ai_news_generator/app.py | 124 | 4. Preserves all source citations in [Source: URL] format |
| ai_news_generator/app.py | 130 | - Includes Inline citations hyperlinked to the original source url |
| context-engineering-workflow/app.py | 38 | .citation-item { |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| ai-podcast-generation/app_oss.py | 346 | st.metric("📊 Total Lines", podcast_script.total_lines) |
| ai-podcast-generation/app_oss.py | 348 | st.metric("⏱️ Est. Duration", podcast_script.estimated_duration) |
| ai-podcast-generation/app_oss.py | 350 | st.metric("📚 Source Type", source_info['type']) |
| ai-podcast-generation/app.py | 331 | st.metric("📊 Total Lines", podcast_script.total_lines) |
| ai-podcast-generation/app.py | 333 | st.metric("⏱️ Est. Duration", podcast_script.estimated_duration) |
| ai-podcast-generation/app.py | 335 | st.metric("📚 Source Type", source_info['type']) |
| audio-analysis-toolkit/app.py | 205 | .metric-card { |
| audio-analysis-toolkit/app.py | 239 | .metric-card { |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| acp-code/acp_client.py | 10 | agent="research_drafter", |
| acp-code/acp_client.py | 17 | agent="research_verifier", |
| acp-code/crew_acp_server.py | 4 | from crewai import Crew, Task, Agent, LLM |
| acp-code/crew_acp_server.py | 14 | @server.agent() |
| acp-code/crew_acp_server.py | 16 | """Agent that creates a general research summary on a given topic.""" |
| acp-code/crew_acp_server.py | 18 | agent = Agent( |
| acp-code/crew_acp_server.py | 28 | agent=agent |
| acp-code/crew_acp_server.py | 31 | crew = Crew(agents=[agent], tasks=[task]) |

## Gap

_없음_
