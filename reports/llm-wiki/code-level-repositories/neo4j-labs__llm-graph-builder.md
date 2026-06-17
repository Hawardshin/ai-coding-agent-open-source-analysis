# neo4j-labs/llm-graph-builder 코드 레벨 분석

생성일: 2026-06-17T23:31:28.807Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | graph-rag/kg |
| maturity | A integrated platform (97) |
| stars | 4799 |
| language | Jupyter Notebook |
| tags | rag, knowledge-base, document-chat |
| files/code/source | 255/188/188 |
| tests/ci | 0/3 |
| local path | sources/neo4j-labs__llm-graph-builder |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 19 | 15 | backend/locustperf.py:54 # with self.client.post("/your-upload-endpoint", files=files, catch_response=True) as response: |
| Parsing/OCR/document extraction | code | 19 | 13 | backend/test_commutiesqa.py:33 source_node.file_type = 'pdf' |
| Chunking/splitting | code | 32 | 30 | backend/Performance_test.py:38 #Chunk |
| Embedding/vector index | code | 42 | 37 | backend/Performance_test.py:61 # "mode": "graph+vector", |
| Retrieval/search/rerank | code | 28 | 25 | backend/test_commutiesqa.py:212 final_list.append(test_chatbot_qna(model_name, mode='entity search+vector')) |
| Wiki/graph/entity model | code | 47 | 41 | backend/score.py:27 from src.entities.source_extract_params import SourceScanExtractParams, get_source_scan_extract_params |
| Memory/update lifecycle | code | 33 | 28 | backend/dbtest.py:27 session.run("MATCH (n) DETACH DELETE n") |
| Provenance/citation/evidence | code | 14 | 14 | backend/score.py:144 source = params.source_url if params.source_url is not None else params.wiki_query |
| Evaluation/observability | code | 16 | 13 | backend/score.py:967 @app.post('/metric') |
| Agent/MCP/tool surface | code | 15 | 10 | backend/Performance_test.py:60 # "model": "openai-gpt-3.5", |

## 의존성 신호

- LLM/app framework: langchain, langchain-aws, langchain-anthropic, langchain-fireworks, langchain-community, langchain-core, langchain-experimental, langchain_google_genai
- Graph/KG store: @neo4j-devtools/word-color, @neo4j-ndl/base, @neo4j-ndl/react, @neo4j-nvl/base, @neo4j-nvl/react, langchain-neo4j, neo4j
- Document parsing/OCR: PyPDF2, PyMuPDF, unstructured, unstructured-client, unstructured-inference
- Eval/observability: ragas

## 주요 파일 후보

### Ingestion/source intake

- `backend/locustperf.py`
- `backend/score.py`
- `backend/test_integrationqa.py`
- `backend/src/main.py`
- `backend/src/document_sources/gcs_bucket.py`
- `frontend/src/components/FileTable.tsx`
- `frontend/src/utils/Constants.ts`
- `frontend/src/utils/FileAPI.ts`
- `frontend/src/utils/Utils.ts`
- `frontend/src/components/Layout/DrawerDropzone.tsx`
- `frontend/src/components/Layout/PageLayout.tsx`
- `frontend/src/components/DataSources/Local/DropZone.tsx`
- ... 6 more

### Parsing/OCR/document extraction

- `backend/test_commutiesqa.py`
- `backend/test_integrationqa.py`
- `backend/src/create_chunks.py`
- `backend/src/graphDB_dataAccess.py`
- `backend/src/main.py`
- `backend/src/document_sources/gcs_bucket.py`
- `backend/src/document_sources/local_file.py`
- `backend/src/document_sources/s3_bucket.py`
- `frontend/src/utils/Constants.ts`
- `frontend/src/components/Layout/PageLayout.tsx`
- `frontend/src/components/DataSources/AWS/S3Modal.tsx`
- `frontend/src/components/DataSources/Local/DropZone.tsx`
- ... 6 more

### Chunking/splitting

- `backend/Performance_test.py`
- `backend/score.py`
- `backend/src/chunkid_entities.py`
- `backend/src/communities.py`
- `backend/src/create_chunks.py`
- `backend/src/graph_query.py`
- `backend/src/graphDB_dataAccess.py`
- `backend/src/main.py`
- `backend/src/make_relationships.py`
- `backend/src/post_processing.py`
- `backend/src/QA_integration.py`
- `backend/src/document_sources/gcs_bucket.py`
- ... 6 more

### Embedding/vector index

- `backend/Performance_test.py`
- `backend/score.py`
- `backend/test_commutiesqa.py`
- `backend/test_integrationqa.py`
- `backend/src/communities.py`
- `backend/src/graph_query.py`
- `backend/src/graphDB_dataAccess.py`
- `backend/src/main.py`
- `backend/src/make_relationships.py`
- `backend/src/neighbours.py`
- `backend/src/post_processing.py`
- `backend/src/QA_integration.py`
- ... 6 more

### Retrieval/search/rerank

- `backend/test_commutiesqa.py`
- `backend/test_integrationqa.py`
- `backend/src/chunkid_entities.py`
- `backend/src/create_chunks.py`
- `backend/src/graph_query.py`
- `backend/src/llm.py`
- `backend/src/main.py`
- `backend/src/QA_integration.py`
- `backend/src/document_sources/wikipedia.py`
- `backend/src/document_sources/youtube.py`
- `backend/src/shared/common_fn.py`
- `backend/src/shared/constants.py`
- ... 6 more

### Wiki/graph/entity model

- `backend/score.py`
- `backend/test_commutiesqa.py`
- `backend/test_integrationqa.py`
- `backend/src/chunkid_entities.py`
- `backend/src/communities.py`
- `backend/src/graph_query.py`
- `backend/src/graphDB_dataAccess.py`
- `backend/src/llm.py`
- `backend/src/main.py`
- `backend/src/make_relationships.py`
- `backend/src/post_processing.py`
- `backend/src/QA_integration.py`
- ... 6 more

### Memory/update lifecycle

- `backend/dbtest.py`
- `backend/score.py`
- `backend/test_commutiesqa.py`
- `backend/test_integrationqa.py`
- `backend/src/communities.py`
- `backend/src/graphDB_dataAccess.py`
- `backend/src/main.py`
- `backend/src/make_relationships.py`
- `backend/src/post_processing.py`
- `backend/src/document_sources/gcs_bucket.py`
- `backend/src/document_sources/s3_bucket.py`
- `backend/src/shared/common_fn.py`
- ... 6 more

### Provenance/citation/evidence

- `backend/score.py`
- `backend/test_commutiesqa.py`
- `backend/test_integrationqa.py`
- `backend/src/main.py`
- `backend/src/document_sources/gcs_bucket.py`
- `backend/src/document_sources/web_pages.py`
- `backend/src/entities/source_extract_params.py`
- `frontend/src/types.ts`
- `frontend/src/components/Content.tsx`
- `frontend/src/components/FileTable.tsx`
- `frontend/src/hooks/useSourceInput.tsx`
- `frontend/src/services/URLScan.ts`
- ... 2 more

### Evaluation/observability

- `backend/score.py`
- `backend/src/llm.py`
- `backend/src/QA_integration.py`
- `backend/src/ragas_eval.py`
- `frontend/src/types.ts`
- `frontend/src/services/GetRagasMetric.ts`
- `frontend/src/utils/Constants.ts`
- `frontend/src/components/ChatBot/Chatbot.tsx`
- `frontend/src/components/ChatBot/ChatInfoModal.tsx`
- `frontend/src/components/ChatBot/MetricsCheckbox.tsx`
- `frontend/src/components/ChatBot/MetricsTab.tsx`
- `frontend/src/components/ChatBot/MultiModeMetrics.tsx`
- ... 4 more

### Agent/MCP/tool surface

- `backend/Performance_test.py`
- `backend/test_commutiesqa.py`
- `backend/src/graphDB_dataAccess.py`
- `backend/src/llm.py`
- `backend/src/main.py`
- `backend/src/ragas_eval.py`
- `backend/src/shared/common_fn.py`
- `backend/src/shared/constants.py`
- `frontend/src/utils/Constants.ts`
- `frontend/src/components/ChatBot/NotAvailableMetric.tsx`
- `backend/example.env`
- `data/llm_comparision.json`
- ... 3 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| backend/locustperf.py | 54 | # with self.client.post("/your-upload-endpoint", files=files, catch_response=True) as response: |
| backend/locustperf.py | 60 | # response.failure("Failed UPLOAD request") |
| backend/score.py | 194 | logging.exception(f'File Failed in upload: {e}') |
| backend/score.py | 201 | logging.exception(f'Exception Stack trace upload:{e}') |
| backend/score.py | 573 | @app.post("/upload") |
| backend/score.py | 582 | """Upload a large file in chunks and create a source node.""" |
| backend/score.py | 590 | json_obj = {'api_name':'upload','db_url':credentials.uri,'userName':credentials.userName, 'database':credentials.database, 'chunkNumber':chunkNumber,'totalChunks':totalChunks, |
| backend/score.py | 593 | print("upload log obj",json_obj) |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| backend/test_commutiesqa.py | 33 | source_node.file_type = 'pdf' |
| backend/test_commutiesqa.py | 44 | file_name = 'About Amazon.pdf' |
| backend/test_commutiesqa.py | 45 | shutil.copyfile('/workspaces/llm-graph-builder/backend/files/About Amazon.pdf', |
| backend/test_integrationqa.py | 42 | source_node.file_type = 'pdf' |
| backend/test_integrationqa.py | 69 | file_name = 'About Amazon.pdf' |
| backend/test_integrationqa.py | 71 | shutil.copyfile('/workspaces/llm-graph-builder/backend/files/About Amazon.pdf', merged_file_path) |
| backend/src/create_chunks.py | 52 | # PDF or paginated document |
| backend/src/graphDB_dataAccess.py | 139 | file: File object containing the PDF file to be used |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| backend/Performance_test.py | 38 | #Chunk |
| backend/score.py | 451 | """Extract entities from chunk IDs.""" |
| backend/score.py | 463 | message="Unable to extract entities from chunk ids" |
| backend/score.py | 1073 | message = "Unable to get chunk text response" |
| backend/src/chunkid_entities.py | 103 | chunk_data (list): List of chunk data records. |
| backend/src/chunkid_entities.py | 106 | list: List of chunk properties. |
| backend/src/chunkid_entities.py | 114 | for chunk in record["chunks"]: |
| backend/src/chunkid_entities.py | 115 | chunk.update(doc_properties) |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| backend/Performance_test.py | 61 | # "mode": "graph+vector", |
| backend/score.py | 357 | logging.info('Entity Embeddings created') |
| backend/score.py | 548 | """Connect to the Neo4j database and check vector dimensions.""" |
| backend/score.py | 919 | """Drop and re-create the vector index in the graph database.""" |
| backend/score.py | 933 | message="Unable to drop and re-create vector index with correct dimesion as per application configuration" |
| backend/score.py | 935 | logging.exception(f'Exception into drop and re-create vector index with correct dimesion as per application configuration:{error_message}') |
| backend/score.py | 1179 | """Fetch available embedding models for a given provider.""" |
| backend/score.py | 1196 | message="Unable to fetch embedding models" |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| backend/test_commutiesqa.py | 212 | final_list.append(test_chatbot_qna(model_name, mode='entity search+vector')) |
| backend/test_integrationqa.py | 428 | "entity search+vector" |
| backend/src/chunkid_entities.py | 135 | Processes chunk IDs to retrieve chunk data. |
| backend/src/chunkid_entities.py | 195 | Processes entity IDs to retrieve local community data. |
| backend/src/chunkid_entities.py | 239 | Processes community IDs to retrieve community data. |
| backend/src/create_chunks.py | 60 | match = re.search(r'(?:v=)([0-9A-Za-z_-]{11})\s*', self.pages[0].metadata.get('source', '')) |
| backend/src/graph_query.py | 184 | logging.info("Executing query to retrieve completed documents.") |
| backend/src/graph_query.py | 281 | logging.error(f"An error occurred schema retrieval. Error: {str(e)}") |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| backend/score.py | 27 | from src.entities.source_extract_params import SourceScanExtractParams, get_source_scan_extract_params |
| backend/score.py | 28 | from src.entities.user_credential import Neo4jCredentials, get_neo4j_credentials |
| backend/score.py | 357 | logging.info('Entity Embeddings created') |
| backend/score.py | 374 | logging.info('Updated source node with community related counts') |
| backend/score.py | 448 | entities=Form(), |
| backend/score.py | 451 | """Extract entities from chunk IDs.""" |
| backend/score.py | 454 | result = await asyncio.to_thread(get_entities_from_chunkids,credentials, nodedetails, entities, mode) |
| backend/score.py | 457 | json_obj = {'api_name':'chunk_entities','db_url':credentials.uri, 'userName':credentials.userName, 'database':credentials.database, 'nodedetails':nodedetails,'entities':entities, |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| backend/dbtest.py | 27 | session.run("MATCH (n) DETACH DELETE n") |
| backend/score.py | 703 | """Delete documents and their entities from the graph database.""" |
| backend/score.py | 718 | message=f"Unable to delete document {filenames}" |
| backend/score.py | 757 | logging.info(f'Result of document status in refresh : {result}') |
| backend/score.py | 844 | """Delete unconnected (orphan) nodes from the graph database.""" |
| backend/score.py | 854 | return create_api_response('Success',data=result,message="Unconnected entities delete successfully") |
| backend/score.py | 857 | message="Unable to delete the unconnected nodes" |
| backend/score.py | 859 | logging.exception(f'Exception in delete the unconnected nodes:{error_message}') |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| backend/score.py | 144 | source = params.source_url if params.source_url is not None else params.wiki_query |
| backend/score.py | 171 | 'source_url': params.source_url, |
| backend/score.py | 192 | json_obj = {'error_message':error_message, 'status':'Success','db_url':credentials.uri, 'userName':credentials.userName, 'database':credentials.database,'success_count':1, 'source_type': params.source_type, 'source_url': |
| backend/score.py | 199 | json_obj = {'error_message':error_message, 'status':'Failed','db_url':credentials.uri, 'userName':credentials.userName, 'database':credentials.database,'failed_count':1, 'source_type': params.source_type, 'source_url':pa |
| backend/score.py | 230 | elif params.source_type == 's3 bucket' and params.source_url: |
| backend/score.py | 234 | elif params.source_type == 'youtube' and params.source_url: |
| backend/score.py | 264 | json_obj['source_url'] = params.source_url |
| backend/score.py | 287 | 'db_url':credentials.uri,'model': params.model, 'userName':credentials.userName, 'database':credentials.database,'failed_count':1, 'source_type': params.source_type, 'source_url':params.source_url, 'wiki_query':params.wi |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| backend/score.py | 967 | @app.post('/metric') |
| backend/score.py | 977 | """Calculate RAGAS metrics for a given question, context, and answer.""" |
| backend/score.py | 990 | message='Failed to calculate evaluation metrics.', |
| backend/score.py | 991 | error=result.get("error", "Ragas evaluation returned null") |
| backend/score.py | 993 | data = {mode: {metric: result[metric][i] for metric in result} for i, mode in enumerate(mode_list)} |
| backend/score.py | 996 | json_obj = {'api_name':'metric', 'question':question, 'context':context, 'answer':answer, 'model':model,'mode':mode, |
| backend/score.py | 1001 | logging.exception(f"Error while calculating evaluation metrics: {e}") |
| backend/score.py | 1004 | message="Error while calculating evaluation metrics", |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| backend/Performance_test.py | 60 | # "model": "openai-gpt-3.5", |
| backend/test_commutiesqa.py | 203 | models = ['openai-gpt-3.5','openai-gpt-4o','openai-gpt-4o-mini','gemini-1.5-pro','azure_ai_gpt_35','azure_ai_gpt_4o','ollama_llama3','groq_llama3_70b','anthropic_claude_3_5_sonnet','fireworks_v3p1_405b','bedrock_claude_3 |
| backend/test_commutiesqa.py | 219 | # test_populate_graph_schema_from_text('openai-gpt-4o') |
| backend/src/graphDB_dataAccess.py | 140 | model: Type of model to use ('Diffbot'or'OpenAI GPT') |
| backend/src/llm.py | 36 | if "GEMINI" in model: |
| backend/src/llm.py | 55 | elif "OPENAI" in model: |
| backend/src/llm.py | 84 | elif "ANTHROPIC" in model: |
| backend/src/llm.py | 92 | if not model_name.startswith("claude-opus-4-7"): |

## Gap

- tests
