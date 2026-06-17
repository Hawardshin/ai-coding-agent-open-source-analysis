# Shubhamsaboo/awesome-llm-apps 코드 레벨 분석

생성일: 2026-06-17T23:31:53.873Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | curated-list/tutorial |
| maturity | C focused implementation (46) |
| stars | 114877 |
| language | Python |
| tags | rag, agent-knowledge, korea-signal |
| files/code/source | 1594/883/871 |
| tests/ci | 13/12 |
| local path | sources/Shubhamsaboo__awesome-llm-apps |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 116 | 70 | advanced_llm_apps/cursor_ai_experiments/ai_web_scrapper.py:5 st.title("AI Web Scraper") |
| Parsing/OCR/document extraction | code | 84 | 41 | advanced_llm_apps/resume_job_matcher/app.py:3 import fitz # PyMuPDF for PDF parsing |
| Chunking/splitting | code | 64 | 42 | rag_tutorials/agentic_rag_gpt5/agentic_rag_gpt5.py:170 for chunk in agent.run( |
| Embedding/vector index | code | 114 | 54 | rag_tutorials/agentic_rag_embedding_gemma/agentic_rag_embeddinggemma.py:3 from agno.knowledge.embedder.ollama import OllamaEmbedder |
| Retrieval/search/rerank | code | 319 | 178 | advanced_llm_apps/gpt_oss_critique_improvement_loop/streamlit_app.py:25 "Explain how to implement a binary search tree in Python.", |
| Wiki/graph/entity model | code | 42 | 7 | rag_tutorials/knowledge_graph_rag_citations/knowledge_graph_rag.py:33 class Entity: |
| Memory/update lifecycle | code | 307 | 164 | advanced_llm_apps/chat-with-tarots/app.py:139 st.info("Remember, the cards offer insights and reflections; your future is in your hands.") |
| Provenance/citation/evidence | code | 94 | 56 | advanced_llm_apps/cursor_ai_experiments/ai_web_scrapper.py:9 source_url = st.text_input("Enter the source URL:") |
| Evaluation/observability | code | 137 | 60 | advanced_llm_apps/gpt_oss_critique_improvement_loop/streamlit_app.py:220 # Summary metrics |
| Agent/MCP/tool surface | code | 825 | 453 | advanced_llm_apps/cursor_ai_experiments/ai_web_scrapper.py:11 # Input field for OpenAI API key |

## 의존성 신호

- LLM/app framework: openai, @ai-sdk/openai, @openai/apps-sdk-ui, @langchain/langgraph-cli, langchain-openai, autogen, anthropic, ollama
- Vector/search store: qdrant-client, faiss-cpu
- Graph/KG store: networkx
- Document parsing/OCR: pypdf, PyPDF2, beautifulsoup4
- Eval/observability: prometheus_client
- Persistence/database: @prisma/client, prisma, sqlalchemy, aioredis, aiosqlite, psycopg2-binary, redis, asyncpg

## 주요 파일 후보

### Ingestion/source intake

- `advanced_llm_apps/cursor_ai_experiments/ai_web_scrapper.py`
- `advanced_llm_apps/resume_job_matcher/app.py`
- `rag_tutorials/autonomous_rag/autorag.py`
- `rag_tutorials/contextualai_rag_agent/contextualai_rag_agent.py`
- `rag_tutorials/corrective_rag/corrective_rag.py`
- `rag_tutorials/deepseek_local_rag_agent/deepseek_rag_agent.py`
- `rag_tutorials/gemini_agentic_rag/agentic_rag_gemini.py`
- `rag_tutorials/hybrid_search_rag/main.py`
- `rag_tutorials/local_hybrid_search_rag/local_main.py`
- `rag_tutorials/qwen_local_rag/qwen_local_rag_agent.py`
- `rag_tutorials/rag_agent_cohere/rag_agent_cohere.py`
- `rag_tutorials/rag_chain/app.py`
- ... 6 more

### Parsing/OCR/document extraction

- `advanced_llm_apps/resume_job_matcher/app.py`
- `mcp_ai_agents/github_mcp_agent/github_agent.py`
- `mcp_ai_agents/multi_mcp_agent_router/agent_forge.py`
- `rag_tutorials/agentic_rag_embedding_gemma/agentic_rag_embeddinggemma.py`
- `rag_tutorials/autonomous_rag/autorag.py`
- `rag_tutorials/contextualai_rag_agent/contextualai_rag_agent.py`
- `rag_tutorials/corrective_rag/corrective_rag.py`
- `rag_tutorials/deepseek_local_rag_agent/deepseek_rag_agent.py`
- `rag_tutorials/gemini_agentic_rag/agentic_rag_gemini.py`
- `rag_tutorials/hybrid_search_rag/main.py`
- `rag_tutorials/local_hybrid_search_rag/local_main.py`
- `rag_tutorials/local_rag_agent/local_rag_agent.py`
- ... 6 more

### Chunking/splitting

- `rag_tutorials/agentic_rag_gpt5/agentic_rag_gpt5.py`
- `rag_tutorials/agentic_rag_with_reasoning/rag_reasoning_agent.py`
- `rag_tutorials/ai_blog_search/app.py`
- `rag_tutorials/corrective_rag/corrective_rag.py`
- `rag_tutorials/deepseek_local_rag_agent/deepseek_rag_agent.py`
- `rag_tutorials/gemini_agentic_rag/agentic_rag_gemini.py`
- `rag_tutorials/hybrid_search_rag/main.py`
- `rag_tutorials/knowledge_graph_rag_citations/knowledge_graph_rag.py`
- `rag_tutorials/llama3.1_local_rag/llama3.1_local_rag.py`
- `rag_tutorials/local_hybrid_search_rag/local_main.py`
- `rag_tutorials/qwen_local_rag/qwen_local_rag_agent.py`
- `rag_tutorials/rag_agent_cohere/rag_agent_cohere.py`
- ... 6 more

### Embedding/vector index

- `rag_tutorials/agentic_rag_embedding_gemma/agentic_rag_embeddinggemma.py`
- `advanced_ai_agents/multi_agent_apps/ai_news_and_podcast_agents/beifong/processors/embedding_processor.py`
- `advanced_ai_agents/multi_agent_apps/ai_news_and_podcast_agents/beifong/tools/embedding_search.py`
- `rag_tutorials/agentic_rag_gpt5/agentic_rag_gpt5.py`
- `rag_tutorials/agentic_rag_with_reasoning/rag_reasoning_agent.py`
- `rag_tutorials/ai_blog_search/app.py`
- `rag_tutorials/autonomous_rag/autorag.py`
- `rag_tutorials/corrective_rag/corrective_rag.py`
- `rag_tutorials/deepseek_local_rag_agent/deepseek_rag_agent.py`
- `rag_tutorials/gemini_agentic_rag/agentic_rag_gemini.py`
- `rag_tutorials/hybrid_search_rag/main.py`
- `rag_tutorials/knowledge_graph_rag_citations/knowledge_graph_rag.py`
- ... 6 more

### Retrieval/search/rerank

- `advanced_llm_apps/gpt_oss_critique_improvement_loop/streamlit_app.py`
- `always_on_agents/always_on_hn_briefing_agent/scout.py`
- `mcp_ai_agents/ai_travel_planner_mcp_agent_team/app.py`
- `mcp_ai_agents/multi_mcp_agent/multi_mcp_agent.py`
- `mcp_ai_agents/notion_mcp_agent/notion_mcp_agent.py`
- `rag_tutorials/agentic_rag_embedding_gemma/agentic_rag_embeddinggemma.py`
- `rag_tutorials/agentic_rag_gpt5/agentic_rag_gpt5.py`
- `rag_tutorials/agentic_rag_with_reasoning/rag_reasoning_agent.py`
- `rag_tutorials/ai_blog_search/app.py`
- `rag_tutorials/autonomous_rag/autorag.py`
- `rag_tutorials/contextualai_rag_agent/contextualai_rag_agent.py`
- `rag_tutorials/corrective_rag/corrective_rag.py`
- ... 6 more

### Wiki/graph/entity model

- `rag_tutorials/knowledge_graph_rag_citations/knowledge_graph_rag.py`
- `voice_ai_agents/ai_audio_tour_agent/manager.py`
- `advanced_ai_agents/single_agent_apps/ai_fraud_investigation_agent/fraud_investigation_agent.py`
- `advanced_llm_apps/cursor_ai_experiments/local_chatgpt_clone/chatgpt_clone_llama3.py`
- `advanced_llm_apps/llm_apps_with_memory_tutorials/llama3_stateful_chat/local_llama3_chat.py`
- `advanced_ai_agents/multi_agent_apps/agent_teams/ai_seo_audit_team/agent.py`
- `advanced_ai_agents/multi_agent_apps/ai_news_and_podcast_agents/beifong/tools/social/fb_post_extractor.py`
- `generative_ui_agents/ai-dashboard-canvas-agent/pnpm-lock.yaml`
- `generative_ui_agents/ai-deep-research-agent/package-lock.json`
- `generative_ui_agents/ai-financial-coach-agent/package-lock.json`
- `generative_ui_agents/ai-mcp-app-builder/pnpm-lock.yaml`
- `generative_ui_agents/generative-ui-starter-project/package-lock.json`
- ... 6 more

### Memory/update lifecycle

- `advanced_llm_apps/chat-with-tarots/app.py`
- `advanced_llm_apps/thinkpath_chatbot_app/main.js`
- `always_on_agents/always_on_hn_briefing_agent/scout.py`
- `generative_ui_agents/generative-ui-starter-project/serve.py`
- `mcp_ai_agents/browser_mcp_agent/main.py`
- `mcp_ai_agents/multi_mcp_agent_router/agent_forge.py`
- `mcp_ai_agents/multi_mcp_agent/multi_mcp_agent.py`
- `mcp_ai_agents/notion_mcp_agent/notion_mcp_agent.py`
- `rag_tutorials/agentic_rag_with_reasoning/rag_reasoning_agent.py`
- `rag_tutorials/ai_blog_search/app.py`
- `rag_tutorials/autonomous_rag/autorag.py`
- `rag_tutorials/contextualai_rag_agent/contextualai_rag_agent.py`
- ... 6 more

### Provenance/citation/evidence

- `advanced_llm_apps/cursor_ai_experiments/ai_web_scrapper.py`
- `mcp_ai_agents/multi_mcp_agent_router/agent_forge.py`
- `rag_tutorials/agentic_rag_with_reasoning/rag_reasoning_agent.py`
- `rag_tutorials/contextualai_rag_agent/contextualai_rag_agent.py`
- `rag_tutorials/knowledge_graph_rag_citations/knowledge_graph_rag.py`
- `starter_ai_agents/ai_medical_imaging_agent/ai_medical_imaging.py`
- `starter_ai_agents/ai_travel_agent/local_travel_agent.py`
- `starter_ai_agents/ai_travel_agent/travel_agent.py`
- `voice_ai_agents/customer_support_voice_agent/customer_support_voice_agent.py`
- `voice_ai_agents/insurance_claim_live_agent_team/agent.py`
- `voice_ai_agents/insurance_claim_live_agent_team/policies.py`
- `voice_ai_agents/insurance_claim_live_agent_team/schemas.py`
- ... 6 more

### Evaluation/observability

- `advanced_llm_apps/gpt_oss_critique_improvement_loop/streamlit_app.py`
- `always_on_agents/always_on_hn_briefing_agent/scout.py`
- `mcp_ai_agents/github_mcp_agent/github_agent.py`
- `rag_tutorials/contextualai_rag_agent/contextualai_rag_agent.py`
- `rag_tutorials/knowledge_graph_rag_citations/knowledge_graph_rag.py`
- `rag_tutorials/rag_failure_diagnostics_clinic/rag_failure_diagnostics_clinic.py`
- `starter_ai_agents/ai_life_insurance_advisor_agent/life_insurance_advisor_agent.py`
- `advanced_ai_agents/multi_agent_apps/ai_financial_coach_agent/ai_financial_coach_agent.py`
- `advanced_ai_agents/multi_agent_apps/ai_mental_wellbeing_agent/ai_mental_wellbeing_agent.py`
- `advanced_ai_agents/multi_agent_apps/product_launch_intelligence_agent/product_launch_intelligence_agent.py`
- `advanced_ai_agents/multi_agent_apps/trust_gated_agent_team/trust_gated_agents.py`
- `advanced_ai_agents/single_agent_apps/ai_agent_governance/ai_agent_governance.py`
- ... 6 more

### Agent/MCP/tool surface

- `advanced_llm_apps/cursor_ai_experiments/ai_web_scrapper.py`
- `advanced_llm_apps/cursor_ai_experiments/chatgpt_clone_llama3.py`
- `advanced_llm_apps/cursor_ai_experiments/multi_agent_researcher.py`
- `advanced_llm_apps/gpt_oss_critique_improvement_loop/streamlit_app.py`
- `advanced_llm_apps/resume_job_matcher/app.py`
- `advanced_llm_apps/thinkpath_chatbot_app/main.js`
- `always_on_agents/always_on_hn_briefing_agent/__init__.py`
- `always_on_agents/always_on_hn_briefing_agent/agent.py`
- `always_on_agents/always_on_hn_briefing_agent/scheduler_api.py`
- `always_on_agents/always_on_hn_briefing_agent/scout.py`
- `generative_ui_agents/ai-financial-coach-agent/entrypoint.sh`
- `generative_ui_agents/generative-ui-starter-project/docker-route-override.ts`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| advanced_llm_apps/cursor_ai_experiments/ai_web_scrapper.py | 5 | st.title("AI Web Scraper") |
| advanced_llm_apps/cursor_ai_experiments/ai_web_scrapper.py | 25 | if st.button("Scrape"): |
| advanced_llm_apps/cursor_ai_experiments/ai_web_scrapper.py | 48 | 4. Click on the "Scrape" button to start the scraping process. |
| advanced_llm_apps/resume_job_matcher/app.py | 17 | 3. Upload a Resume + Job Description to get a fit score and suggestions. |
| advanced_llm_apps/resume_job_matcher/app.py | 36 | resume_file = st.file_uploader("Upload Resume (PDF/TXT)", type=["pdf", "txt"]) |
| advanced_llm_apps/resume_job_matcher/app.py | 37 | job_file = st.file_uploader("Upload Job Description (PDF/TXT)", type=["pdf", "txt"]) |
| advanced_llm_apps/resume_job_matcher/app.py | 84 | st.warning("⚠️ Please upload both Resume and Job Description.") |
| rag_tutorials/autonomous_rag/autorag.py | 101 | The app allows users to upload PDF documents to enhance the knowledge base and |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| advanced_llm_apps/resume_job_matcher/app.py | 3 | import fitz # PyMuPDF for PDF parsing |
| advanced_llm_apps/resume_job_matcher/app.py | 20 | # Helper: Extract text from PDF |
| advanced_llm_apps/resume_job_matcher/app.py | 23 | with fitz.open(stream=file.read(), filetype="pdf") as doc: |
| advanced_llm_apps/resume_job_matcher/app.py | 29 | if file_name.type == "application/pdf": |
| advanced_llm_apps/resume_job_matcher/app.py | 36 | resume_file = st.file_uploader("Upload Resume (PDF/TXT)", type=["pdf", "txt"]) |
| advanced_llm_apps/resume_job_matcher/app.py | 37 | job_file = st.file_uploader("Upload Job Description (PDF/TXT)", type=["pdf", "txt"]) |
| mcp_ai_agents/github_mcp_agent/github_agent.py | 96 | - Use markdown formatting for better readability |
| mcp_ai_agents/multi_mcp_agent_router/agent_forge.py | 50 | "- Readability and maintainability\n\n" |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| rag_tutorials/agentic_rag_gpt5/agentic_rag_gpt5.py | 170 | for chunk in agent.run( |
| rag_tutorials/agentic_rag_gpt5/agentic_rag_gpt5.py | 175 | if hasattr(chunk, 'content') and chunk.content and isinstance(chunk.content, str): |
| rag_tutorials/agentic_rag_gpt5/agentic_rag_gpt5.py | 176 | answer_text += chunk.content |
| rag_tutorials/agentic_rag_with_reasoning/rag_reasoning_agent.py | 184 | for chunk in agent.run( |
| rag_tutorials/agentic_rag_with_reasoning/rag_reasoning_agent.py | 190 | if hasattr(chunk, 'reasoning_content') and chunk.reasoning_content: |
| rag_tutorials/agentic_rag_with_reasoning/rag_reasoning_agent.py | 191 | reasoning_text = chunk.reasoning_content |
| rag_tutorials/agentic_rag_with_reasoning/rag_reasoning_agent.py | 198 | if hasattr(chunk, 'content') and chunk.content and isinstance(chunk.content, str): |
| rag_tutorials/agentic_rag_with_reasoning/rag_reasoning_agent.py | 199 | answer_text += chunk.content |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| rag_tutorials/agentic_rag_embedding_gemma/agentic_rag_embeddinggemma.py | 3 | from agno.knowledge.embedder.ollama import OllamaEmbedder |
| rag_tutorials/agentic_rag_embedding_gemma/agentic_rag_embeddinggemma.py | 6 | from agno.vectordb.lancedb import LanceDb, SearchType |
| rag_tutorials/agentic_rag_embedding_gemma/agentic_rag_embeddinggemma.py | 18 | vector_db=LanceDb( |
| rag_tutorials/agentic_rag_embedding_gemma/agentic_rag_embeddinggemma.py | 20 | uri="tmp/lancedb", |
| rag_tutorials/agentic_rag_embedding_gemma/agentic_rag_embeddinggemma.py | 21 | search_type=SearchType.vector, |
| rag_tutorials/agentic_rag_embedding_gemma/agentic_rag_embeddinggemma.py | 22 | embedder=OllamaEmbedder(id="embeddinggemma:latest", dimensions=768), |
| rag_tutorials/agentic_rag_embedding_gemma/agentic_rag_embeddinggemma.py | 95 | - **EmbeddingGemma** for creating vector embeddings |
| rag_tutorials/agentic_rag_embedding_gemma/agentic_rag_embeddinggemma.py | 96 | - **LanceDB** as the local vector database |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| advanced_llm_apps/gpt_oss_critique_improvement_loop/streamlit_app.py | 25 | "Explain how to implement a binary search tree in Python.", |
| always_on_agents/always_on_hn_briefing_agent/scout.py | 149 | match = re.search(r"\d+", text) |
| mcp_ai_agents/ai_travel_planner_mcp_agent_team/app.py | 89 | role="Creates travel itineraries using Airbnb, Google Maps, and Google Search", |
| mcp_ai_agents/ai_travel_planner_mcp_agent_team/app.py | 98 | 🔍 Web search capabilities for current information, reviews, and travel updates |
| mcp_ai_agents/ai_travel_planner_mcp_agent_team/app.py | 168 | Use Airbnb MCP for real accommodation data, Google Maps MCP for ALL distance calculations and location services, and web search for current information. |
| mcp_ai_agents/multi_mcp_agent/multi_mcp_agent.py | 88 | • Repository management: create, clone, fork, search repositories |
| mcp_ai_agents/multi_mcp_agent/multi_mcp_agent.py | 90 | • Code analysis: search code, review diffs, suggest improvements |
| mcp_ai_agents/multi_mcp_agent/multi_mcp_agent.py | 95 | • Real-time web search and research |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| rag_tutorials/knowledge_graph_rag_citations/knowledge_graph_rag.py | 33 | class Entity: |
| rag_tutorials/knowledge_graph_rag_citations/knowledge_graph_rag.py | 34 | """Represents an entity extracted from documents.""" |
| rag_tutorials/knowledge_graph_rag_citations/knowledge_graph_rag.py | 45 | """Represents a relationship between entities.""" |
| rag_tutorials/knowledge_graph_rag_citations/knowledge_graph_rag.py | 89 | def add_entity(self, entity: Entity): |
| rag_tutorials/knowledge_graph_rag_citations/knowledge_graph_rag.py | 90 | """Add an entity to the knowledge graph.""" |
| rag_tutorials/knowledge_graph_rag_citations/knowledge_graph_rag.py | 94 | MERGE (e:Entity {id: $id}) |
| rag_tutorials/knowledge_graph_rag_citations/knowledge_graph_rag.py | 101 | id=entity.id, |
| rag_tutorials/knowledge_graph_rag_citations/knowledge_graph_rag.py | 102 | name=entity.name, |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| advanced_llm_apps/chat-with-tarots/app.py | 139 | st.info("Remember, the cards offer insights and reflections; your future is in your hands.") |
| advanced_llm_apps/thinkpath_chatbot_app/main.js | 244 | REMEMBER: Only execute the steps you're asked to. Don't provide a complete answer - just show your thinking for the specified steps. Use **bold text** for important terms and bullet points for clarity.`; |
| always_on_agents/always_on_hn_briefing_agent/scout.py | 311 | f"Watch mode: {watch_mode}", |
| always_on_agents/always_on_hn_briefing_agent/scout.py | 318 | f"<strong>Watch mode:</strong> {html.escape(watch_mode)}</p>", |
| generative_ui_agents/generative-ui-starter-project/serve.py | 15 | from langgraph.checkpoint.memory import MemorySaver |
| mcp_ai_agents/browser_mcp_agent/main.py | 144 | # unlock the button and refresh UI |
| mcp_ai_agents/multi_mcp_agent_router/agent_forge.py | 267 | """Sync wrapper around the async agent runner.""" |
| mcp_ai_agents/multi_mcp_agent/multi_mcp_agent.py | 63 | # Setup database for memory |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| advanced_llm_apps/cursor_ai_experiments/ai_web_scrapper.py | 9 | source_url = st.text_input("Enter the source URL:") |
| advanced_llm_apps/cursor_ai_experiments/ai_web_scrapper.py | 26 | if prompt and source_url and api_key: |
| advanced_llm_apps/cursor_ai_experiments/ai_web_scrapper.py | 30 | source=source_url, |
| mcp_ai_agents/multi_mcp_agent_router/agent_forge.py | 88 | "- Provide citations and references\n" |
| rag_tutorials/agentic_rag_with_reasoning/rag_reasoning_agent.py | 27 | 3. **Answers** your questions with citations |
| rag_tutorials/agentic_rag_with_reasoning/rag_reasoning_agent.py | 178 | citations = [] |
| rag_tutorials/agentic_rag_with_reasoning/rag_reasoning_agent.py | 205 | # Collect citations |
| rag_tutorials/agentic_rag_with_reasoning/rag_reasoning_agent.py | 206 | if hasattr(chunk, 'citations') and chunk.citations: |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| advanced_llm_apps/gpt_oss_critique_improvement_loop/streamlit_app.py | 220 | # Summary metrics |
| advanced_llm_apps/gpt_oss_critique_improvement_loop/streamlit_app.py | 224 | st.metric("Total Iterations", results["total_iterations"]) |
| advanced_llm_apps/gpt_oss_critique_improvement_loop/streamlit_app.py | 226 | st.metric("Improvement Rounds", max_iterations) |
| advanced_llm_apps/gpt_oss_critique_improvement_loop/streamlit_app.py | 228 | st.metric("Final Answer Length", len(results["final_answer"])) |
| always_on_agents/always_on_hn_briefing_agent/scout.py | 220 | title="A lightweight eval harness for tool-using LLM applications", |
| always_on_agents/always_on_hn_briefing_agent/scout.py | 226 | summary="Practical eval design for agents that call tools and produce user-facing artifacts.", |
| mcp_ai_agents/github_mcp_agent/github_agent.py | 40 | st.markdown("- Show repository health metrics") |
| rag_tutorials/contextualai_rag_agent/contextualai_rag_agent.py | 200 | st.subheader("Evaluation Result") |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| advanced_llm_apps/cursor_ai_experiments/ai_web_scrapper.py | 11 | # Input field for OpenAI API key |
| advanced_llm_apps/cursor_ai_experiments/ai_web_scrapper.py | 12 | api_key = st.text_input("Enter your OpenAI API key:", type="password") |
| advanced_llm_apps/cursor_ai_experiments/ai_web_scrapper.py | 18 | "model": "openai/gpt-4o-mini", |
| advanced_llm_apps/cursor_ai_experiments/ai_web_scrapper.py | 47 | 3. Enter your OpenAI API key. |
| advanced_llm_apps/cursor_ai_experiments/chatgpt_clone_llama3.py | 2 | from ollama import Client |
| advanced_llm_apps/cursor_ai_experiments/chatgpt_clone_llama3.py | 4 | # Initialize Ollama client |
| advanced_llm_apps/cursor_ai_experiments/chatgpt_clone_llama3.py | 38 | st.sidebar.info("This is a local ChatGPT clone using Ollama's llama3.1:latest model and Streamlit.") |
| advanced_llm_apps/cursor_ai_experiments/multi_agent_researcher.py | 2 | from crewai import Agent, Task, Crew, Process |

## Gap

_없음_
