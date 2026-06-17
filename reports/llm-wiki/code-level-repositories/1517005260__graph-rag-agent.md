# 1517005260/graph-rag-agent 코드 레벨 분석

생성일: 2026-06-17T23:31:43.561Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | graph-rag/kg |
| maturity | A integrated platform (104) |
| stars | 2227 |
| language | Python |
| tags | rag, knowledge-base, agent-knowledge |
| files/code/source | 276/233/222 |
| tests/ci | 15/1 |
| local path | sources/1517005260__graph-rag-agent |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 10 | 5 | graphrag_agent/pipelines/ingestion/__init__.py:1 from graphrag_agent.pipelines.ingestion.document_processor import DocumentProcessor |
| Parsing/OCR/document extraction | code | 9 | 2 | graphrag_agent/pipelines/ingestion/document_processor.py:129 extension: 文件扩展名（包括'.'，如'.pdf'） |
| Chunking/splitting | code | 48 | 35 | server/routers/chat.py:101 async for chunk in process_chat_stream( |
| Embedding/vector index | code | 36 | 27 | graphrag_agent/cache_manager/vector_similarity/embeddings.py:47 # 导入并复用现有的embedding模型 |
| Retrieval/search/rerank | code | 65 | 47 | server/routers/knowledge_graph.py:293 @router.post("/entities/search") |
| Wiki/graph/entity model | code | 76 | 60 | server/routers/__init__.py:2 from . import chat, feedback, knowledge_graph, source |
| Memory/update lifecycle | code | 59 | 49 | server/routers/chat.py:186 "Cache-Control": "no-cache", |
| Provenance/citation/evidence | code | 39 | 31 | server/models/schemas.py:27 source_id: str |
| Evaluation/observability | code | 51 | 32 | graphrag_agent/__init__.py:88 from graphrag_agent.evaluation.core import ( |
| Agent/MCP/tool surface | code | 75 | 52 | server/services/agent_service.py:6 # 创建Agent管理类 |

## 의존성 신호

- LLM/app framework: langchain, langchain_community, langchain_core, langchain_neo4j, langchain_openai, sentence_transformers
- Vector/search store: faiss-cpu
- Graph/KG store: langchain_neo4j
- Document parsing/OCR: PyPDF2, python-docx

## 주요 파일 후보

### Ingestion/source intake

- `graphrag_agent/pipelines/ingestion/__init__.py`
- `graphrag_agent/pipelines/ingestion/document_processor.py`
- `graphrag_agent/__init__.py`
- `graphrag_agent/integrations/build/build_graph.py`
- `graphrag_agent/integrations/build/incremental_graph_builder.py`
- `graphrag_agent/pipelines/ingestion/readme.md`
- `AGENTS.md`
- `CLAUDE.md`
- `readme.md`
- `graphrag_agent/readme.md`

### Parsing/OCR/document extraction

- `graphrag_agent/pipelines/ingestion/document_processor.py`
- `graphrag_agent/pipelines/ingestion/file_reader.py`
- `AGENTS.md`
- `CLAUDE.md`
- `readme.md`
- `requirements.txt`
- `assets/start.md`
- `graphrag_agent/readme.md`
- `graphrag_agent/pipelines/ingestion/readme.md`

### Chunking/splitting

- `server/routers/chat.py`
- `server/services/chat_service.py`
- `server/services/kg_service.py`
- `server/utils/neo4j_batch.py`
- `frontend/utils/api.py`
- `graphrag_agent/agents/base.py`
- `graphrag_agent/agents/deep_research_agent.py`
- `graphrag_agent/agents/fusion_agent.py`
- `graphrag_agent/config/settings.py`
- `graphrag_agent/graph/graph_consistency_validator.py`
- `graphrag_agent/models/test_stream_model.py`
- `graphrag_agent/search/retrieval_adapter.py`
- ... 6 more

### Embedding/vector index

- `graphrag_agent/cache_manager/vector_similarity/embeddings.py`
- `graphrag_agent/graph/indexing/embedding_manager.py`
- `graphrag_agent/agents/base.py`
- `graphrag_agent/cache_manager/__init__.py`
- `graphrag_agent/config/settings.py`
- `graphrag_agent/models/get_models.py`
- `graphrag_agent/search/local_search.py`
- `graphrag_agent/search/utils.py`
- `graphrag_agent/cache_manager/vector_similarity/__init__.py`
- `graphrag_agent/cache_manager/vector_similarity/matcher.py`
- `graphrag_agent/graph/core/graph_connection.py`
- `graphrag_agent/graph/indexing/chunk_indexer.py`
- ... 6 more

### Retrieval/search/rerank

- `server/routers/knowledge_graph.py`
- `server/services/chat_service.py`
- `server/services/kg_service.py`
- `graphrag_agent/evaluation/metrics/retrieval_metrics.py`
- `graphrag_agent/agents/multi_agent/core/retrieval_result.py`
- `graphrag_agent/agents/multi_agent/executor/retrieval_executor.py`
- `graphrag_agent/agents/multi_agent/tools/retrieval_adapter.py`
- `graphrag_agent/__init__.py`
- `frontend/components/chat.py`
- `frontend/components/debug.py`
- `frontend/utils/api.py`
- `frontend/utils/helpers.py`
- ... 6 more

### Wiki/graph/entity model

- `server/routers/__init__.py`
- `server/routers/knowledge_graph.py`
- `server/services/kg_service.py`
- `frontend/app.py`
- `graphrag_agent/__init__.py`
- `frontend/components/chat.py`
- `frontend/components/debug.py`
- `frontend/components/sidebar.py`
- `frontend/components/styles.py`
- `frontend/utils/api.py`
- `graphrag_agent/agents/deep_research_agent.py`
- `graphrag_agent/agents/fusion_agent.py`
- ... 6 more

### Memory/update lifecycle

- `server/routers/chat.py`
- `server/routers/knowledge_graph.py`
- `server/services/agent_service.py`
- `server/services/chat_service.py`
- `server/utils/cache.py`
- `frontend/utils/api.py`
- `frontend/utils/performance.py`
- `frontend/utils/state.py`
- `graphrag_agent/agents/base.py`
- `graphrag_agent/agents/deep_research_agent.py`
- `graphrag_agent/agents/fusion_agent.py`
- `graphrag_agent/agents/graph_agent.py`
- ... 6 more

### Provenance/citation/evidence

- `server/models/schemas.py`
- `server/routers/source.py`
- `server/services/kg_service.py`
- `server/utils/neo4j_batch.py`
- `frontend/components/chat.py`
- `frontend/components/debug.py`
- `frontend/utils/api.py`
- `graphrag_agent/search/retrieval_adapter.py`
- `frontend/components/knowledge_graph/management.py`
- `graphrag_agent/agents/multi_agent/orchestrator.py`
- `graphrag_agent/config/prompts/executor_prompts.py`
- `graphrag_agent/graph/extraction/graph_writer.py`
- ... 6 more

### Evaluation/observability

- `graphrag_agent/__init__.py`
- `frontend/components/debug.py`
- `frontend/utils/performance.py`
- `graphrag_agent/agents/base.py`
- `graphrag_agent/cache_manager/manager.py`
- `frontend/components/knowledge_graph/display.py`
- `graphrag_agent/agents/multi_agent/orchestrator.py`
- `graphrag_agent/evaluation/core/__init__.py`
- `graphrag_agent/evaluation/core/base_evaluator.py`
- `graphrag_agent/evaluation/core/base_metric.py`
- `graphrag_agent/evaluation/core/evaluation_data.py`
- `graphrag_agent/evaluation/evaluator_config/__init__.py`
- ... 6 more

### Agent/MCP/tool surface

- `server/services/agent_service.py`
- `setup.py`
- `graphrag_agent/__init__.py`
- `frontend/components/chat.py`
- `frontend/components/debug.py`
- `frontend/components/sidebar.py`
- `frontend/components/styles.py`
- `graphrag_agent/agents/base.py`
- `graphrag_agent/agents/deep_research_agent.py`
- `graphrag_agent/agents/fusion_agent.py`
- `graphrag_agent/agents/graph_agent.py`
- `graphrag_agent/agents/hybrid_agent.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| graphrag_agent/pipelines/ingestion/__init__.py | 1 | from graphrag_agent.pipelines.ingestion.document_processor import DocumentProcessor |
| graphrag_agent/pipelines/ingestion/__init__.py | 2 | from graphrag_agent.pipelines.ingestion.file_reader import FileReader |
| graphrag_agent/pipelines/ingestion/__init__.py | 3 | from graphrag_agent.pipelines.ingestion.text_chunker import ChineseTextChunker |
| graphrag_agent/pipelines/ingestion/document_processor.py | 4 | from graphrag_agent.pipelines.ingestion.file_reader import FileReader |
| graphrag_agent/pipelines/ingestion/document_processor.py | 5 | from graphrag_agent.pipelines.ingestion.text_chunker import ChineseTextChunker |
| graphrag_agent/__init__.py | 7 | 1. 准备文档 (files/) - 使用 pipelines.ingestion 模块 |
| graphrag_agent/__init__.py | 15 | from graphrag_agent.pipelines.ingestion import ( |
| graphrag_agent/integrations/build/build_graph.py | 27 | from graphrag_agent.pipelines.ingestion.document_processor import DocumentProcessor |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| graphrag_agent/pipelines/ingestion/document_processor.py | 129 | extension: 文件扩展名（包括'.'，如'.pdf'） |
| graphrag_agent/pipelines/ingestion/document_processor.py | 136 | '.pdf': 'PDF文档', |
| graphrag_agent/pipelines/ingestion/document_processor.py | 139 | '.docx': 'Word文档', |
| graphrag_agent/pipelines/ingestion/file_reader.py | 5 | from docx import Document |
| graphrag_agent/pipelines/ingestion/file_reader.py | 18 | - PDF (PDF文档) |
| graphrag_agent/pipelines/ingestion/file_reader.py | 20 | - DOCX (Word文档) |
| graphrag_agent/pipelines/ingestion/file_reader.py | 41 | file_extensions: 文件扩展名列表，如 ['.txt', '.pdf']，如不指定则读取所有支持的格式 |
| graphrag_agent/pipelines/ingestion/file_reader.py | 49 | '.pdf': self._read_pdf, |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| server/routers/chat.py | 101 | async for chunk in process_chat_stream( |
| server/routers/chat.py | 110 | if isinstance(chunk, dict): |
| server/routers/chat.py | 112 | if "execution_log" in chunk and debug: |
| server/routers/chat.py | 113 | log_entry = chunk["execution_log"] |
| server/routers/chat.py | 130 | elif "status" in chunk: |
| server/routers/chat.py | 132 | yield "data: " + json.dumps(chunk) + "\n\n" |
| server/routers/chat.py | 144 | "content": str(chunk) |
| server/routers/chat.py | 153 | "content": chunk |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| graphrag_agent/cache_manager/vector_similarity/embeddings.py | 47 | # 导入并复用现有的embedding模型 |
| graphrag_agent/cache_manager/vector_similarity/embeddings.py | 54 | raise ImportError(f"无法导入embedding模型: {e}") |
| graphrag_agent/cache_manager/vector_similarity/embeddings.py | 61 | # 使用OpenAI embedding模型 |
| graphrag_agent/cache_manager/vector_similarity/embeddings.py | 62 | embeddings = self.model.embed_documents(texts) |
| graphrag_agent/cache_manager/vector_similarity/embeddings.py | 63 | embeddings = np.array(embeddings, dtype=np.float32) |
| graphrag_agent/cache_manager/vector_similarity/embeddings.py | 66 | norms = np.linalg.norm(embeddings, axis=1, keepdims=True) |
| graphrag_agent/cache_manager/vector_similarity/embeddings.py | 67 | embeddings = embeddings / (norms + 1e-8) |
| graphrag_agent/cache_manager/vector_similarity/embeddings.py | 69 | return embeddings |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| server/routers/knowledge_graph.py | 293 | @router.post("/entities/search") |
| server/routers/knowledge_graph.py | 348 | @router.post("/relations/search") |
| server/services/chat_service.py | 423 | round_match = re.search(r'\[深度研究\]\s*开始第(\d+)轮迭代', line) |
| server/services/chat_service.py | 433 | elif re.search(r'\[深度研究\]\s*执行查询:', line): |
| server/services/chat_service.py | 438 | elif re.search(r'\[深度研究\]\s*发现有用信息:', line): |
| server/services/chat_service.py | 501 | if re.search(r'开始第\d+轮迭代', line) or re.search(r'> \d+\.', line): |
| server/services/chat_service.py | 547 | round_match = re.search(r'开始第(\d+)轮迭代', line) |
| server/services/chat_service.py | 559 | query_match = re.search(r'> (\d+)\. (.+)', line) |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| server/routers/__init__.py | 2 | from . import chat, feedback, knowledge_graph, source |
| server/routers/__init__.py | 10 | api_router.include_router(knowledge_graph.router, tags=["知识图谱"]) |
| server/routers/knowledge_graph.py | 24 | @router.get("/knowledge_graph") |
| server/routers/knowledge_graph.py | 25 | async def knowledge_graph(limit: int = 100, query: Optional[str] = None): |
| server/routers/knowledge_graph.py | 170 | }) AS entities |
| server/routers/knowledge_graph.py | 191 | entities, |
| server/routers/knowledge_graph.py | 204 | for entity in community_data[0].get("entities", []): |
| server/routers/knowledge_graph.py | 205 | entity_labels = entity.get("labels", []) |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| server/routers/chat.py | 186 | "Cache-Control": "no-cache", |
| server/routers/knowledge_graph.py | 518 | @router.post("/entity/delete") |
| server/routers/knowledge_graph.py | 549 | DELETE r |
| server/routers/knowledge_graph.py | 557 | DELETE e |
| server/routers/knowledge_graph.py | 680 | DELETE r |
| server/routers/knowledge_graph.py | 766 | @router.post("/relation/delete") |
| server/routers/knowledge_graph.py | 790 | DELETE r |
| server/services/agent_service.py | 80 | memory_content = agent.memory.get(config) |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| server/models/schemas.py | 27 | source_id: str |
| server/routers/source.py | 23 | content = get_source_content(request.source_id) |
| server/routers/source.py | 37 | info = get_source_file_info(request.source_id) |
| server/services/kg_service.py | 594 | def get_source_content(source_id: str) -> str: |
| server/services/kg_service.py | 599 | source_id: 源ID |
| server/services/kg_service.py | 605 | if not source_id: |
| server/services/kg_service.py | 609 | if len(source_id) == 40: # SHA1哈希的长度 |
| server/services/kg_service.py | 615 | params = {"id": source_id} |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| graphrag_agent/__init__.py | 88 | from graphrag_agent.evaluation.core import ( |
| graphrag_agent/__init__.py | 97 | from graphrag_agent.evaluation.evaluators import ( |
| frontend/components/debug.py | 119 | st.metric("实体数量", kg.get("entity_count", 0)) |
| frontend/components/debug.py | 120 | st.metric("关系数量", kg.get("relation_count", 0)) |
| frontend/utils/performance.py | 32 | st.metric("平均响应时间", f"{avg_time:.2f}s") |
| frontend/utils/performance.py | 34 | st.metric("最大响应时间", f"{max_time:.2f}s") |
| frontend/utils/performance.py | 36 | st.metric("最小响应时间", f"{min_time:.2f}s") |
| frontend/utils/performance.py | 57 | st.metric("平均反馈处理时间", f"{avg_feedback_time:.2f}s") |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| server/services/agent_service.py | 6 | # 创建Agent管理类 |
| server/services/agent_service.py | 8 | """Agent管理类""" |
| server/services/agent_service.py | 11 | """初始化Agent管理器""" |
| server/services/agent_service.py | 12 | # 导入各种Agent |
| server/services/agent_service.py | 13 | from graphrag_agent.agents.graph_agent import GraphAgent |
| server/services/agent_service.py | 14 | from graphrag_agent.agents.hybrid_agent import HybridAgent |
| server/services/agent_service.py | 15 | from graphrag_agent.agents.naive_rag_agent import NaiveRagAgent |
| server/services/agent_service.py | 16 | from graphrag_agent.agents.deep_research_agent import DeepResearchAgent |

## Gap

_없음_
