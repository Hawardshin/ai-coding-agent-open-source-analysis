# HKUDS/VideoRAG 코드 레벨 분석

생성일: 2026-06-17T23:31:43.313Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | B production-leaning (78) |
| stars | 3065 |
| language | Python |
| tags | rag, document-chat, korea-signal |
| files/code/source | 112/95/93 |
| tests/ci | 0/0 |
| local path | sources/HKUDS__VideoRAG |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 10 | 8 | Vimo-desktop/python_backend/videorag_api.py:998 @app.route('/api/sessions/<chat_id>/videos/upload', methods=['POST']) |
| Parsing/OCR/document extraction | doc-only | 1 | 0 | VideoRAG-algorithm/longervideos/dataset.json:401 "question": "Comparative analysis of the advantages and disadvantages of ColPali and traditional RAG in PDF processing." |
| Chunking/splitting | code | 14 | 14 | VideoRAG-algorithm/videorag/_op.py:52 # here somehow tricky, since the whole chunk tokens is list[list[list[int]]] for corpus(doc(chunk)),so it can't be decode entirely |
| Embedding/vector index | code | 21 | 18 | VideoRAG-algorithm/videorag_longervideos.py:26 embedding_model_name = "text-embedding-3-small", |
| Retrieval/search/rerank | code | 12 | 8 | VideoRAG-algorithm/videorag/_op.py:413 record = re.search(r"\((.*)\)", record) |
| Wiki/graph/entity model | code | 21 | 16 | VideoRAG-algorithm/videorag/_op.py:212 if len(record_attributes) < 4 or record_attributes[0] != '"entity"': |
| Memory/update lifecycle | code | 42 | 36 | Vimo-desktop/electron.vite.config.ts:44 watch: { |
| Provenance/citation/evidence | code | 11 | 8 | VideoRAG-algorithm/videorag/_op.py:225 source_id=entity_source_id, |
| Evaluation/observability | code | 14 | 11 | VideoRAG-algorithm/videorag/_op.py:657 eval(x.split('_')[-1]) # index |
| Agent/MCP/tool surface | code | 22 | 18 | VideoRAG-algorithm/longervideos/download.sh:5 courses="0-fights-in-animal-kingdom 1-nature-scenes 2-climate-week-at-columbia-engineering 3-black-myth-wukong 4-rag-lecture 5-ai-agent-lecture 6-daubechies-wavelet-lecture 7-daubechies-art-and-mathematics-lecture 8-tech |

## 의존성 신호

_없음_

## 주요 파일 후보

### Ingestion/source intake

- `Vimo-desktop/python_backend/videorag_api.py`
- `Vimo-desktop/src/preload/index.ts`
- `Vimo-desktop/src/main/handlers/videorag-handlers.ts`
- `Vimo-desktop/src/renderer/src/hooks/useChat.ts`
- `Vimo-desktop/src/renderer/src/hooks/useVideoRAG.ts`
- `Vimo-desktop/src/renderer/src/hooks/useVideoUpload.ts`
- `Vimo-desktop/src/renderer/src/utils/chat.ts`
- `Vimo-desktop/src/renderer/src/components/chat/WelcomeScreen.tsx`
- `README.md`
- `VideoRAG-algorithm/README.md`

### Parsing/OCR/document extraction

- `VideoRAG-algorithm/longervideos/dataset.json`

### Chunking/splitting

- `VideoRAG-algorithm/videorag/_op.py`
- `VideoRAG-algorithm/videorag/_splitter.py`
- `VideoRAG-algorithm/videorag/prompt.py`
- `VideoRAG-algorithm/videorag/videorag.py`
- `VideoRAG-algorithm/videorag/_videoutil/asr.py`
- `VideoRAG-algorithm/videorag/_videoutil/split.py`
- `Vimo-desktop/python_backend/videorag/_op.py`
- `Vimo-desktop/python_backend/videorag/_splitter.py`
- `Vimo-desktop/python_backend/videorag/prompt.py`
- `Vimo-desktop/python_backend/videorag/videorag.py`
- `Vimo-desktop/src/main/main.ts`
- `Vimo-desktop/python_backend/videorag/_videoutil/asr.py`
- ... 2 more

### Embedding/vector index

- `VideoRAG-algorithm/videorag_longervideos.py`
- `VideoRAG-algorithm/videorag/_llm.py`
- `VideoRAG-algorithm/videorag/_utils.py`
- `VideoRAG-algorithm/videorag/base.py`
- `VideoRAG-algorithm/videorag/videorag.py`
- `Vimo-desktop/python_backend/videorag_api.py`
- `VideoRAG-algorithm/videorag/_storage/gdb_networkx.py`
- `VideoRAG-algorithm/videorag/_storage/vdb_hnswlib.py`
- `VideoRAG-algorithm/videorag/_storage/vdb_nanovectordb.py`
- `VideoRAG-algorithm/videorag/_videoutil/feature.py`
- `Vimo-desktop/python_backend/videorag/_llm.py`
- `Vimo-desktop/python_backend/videorag/_utils.py`
- ... 6 more

### Retrieval/search/rerank

- `VideoRAG-algorithm/videorag/_op.py`
- `VideoRAG-algorithm/videorag/_utils.py`
- `VideoRAG-algorithm/videorag/base.py`
- `VideoRAG-algorithm/reproduce/quantitative_comparison/batch_quant_eval_download.py`
- `VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_download.py`
- `Vimo-desktop/python_backend/videorag/_op.py`
- `Vimo-desktop/python_backend/videorag/_utils.py`
- `Vimo-desktop/python_backend/videorag/base.py`
- `VideoRAG-algorithm/longervideos/dataset.json`
- `README.md`
- `VideoRAG-algorithm/README.md`
- `Vimo-desktop/README.md`

### Wiki/graph/entity model

- `VideoRAG-algorithm/videorag/_op.py`
- `VideoRAG-algorithm/videorag/_utils.py`
- `VideoRAG-algorithm/videorag/base.py`
- `VideoRAG-algorithm/videorag/prompt.py`
- `VideoRAG-algorithm/videorag/videorag.py`
- `VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_calculate.py`
- `VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_upload.py`
- `VideoRAG-algorithm/videorag/_storage/gdb_neo4j.py`
- `VideoRAG-algorithm/videorag/_storage/gdb_networkx.py`
- `Vimo-desktop/python_backend/videorag/_op.py`
- `Vimo-desktop/python_backend/videorag/_utils.py`
- `Vimo-desktop/python_backend/videorag/base.py`
- ... 6 more

### Memory/update lifecycle

- `Vimo-desktop/electron.vite.config.ts`
- `VideoRAG-algorithm/videorag/_llm.py`
- `VideoRAG-algorithm/videorag/_op.py`
- `VideoRAG-algorithm/videorag/base.py`
- `VideoRAG-algorithm/videorag/videorag.py`
- `Vimo-desktop/python_backend/videorag_api.py`
- `VideoRAG-algorithm/videorag/_storage/gdb_neo4j.py`
- `VideoRAG-algorithm/videorag/_storage/kv_json.py`
- `VideoRAG-algorithm/videorag/_storage/vdb_hnswlib.py`
- `VideoRAG-algorithm/videorag/_storage/vdb_nanovectordb.py`
- `Vimo-desktop/python_backend/videorag/_llm.py`
- `Vimo-desktop/python_backend/videorag/_op.py`
- ... 6 more

### Provenance/citation/evidence

- `VideoRAG-algorithm/videorag/_op.py`
- `VideoRAG-algorithm/videorag/prompt.py`
- `VideoRAG-algorithm/videorag/_storage/gdb_neo4j.py`
- `VideoRAG-algorithm/videorag/_storage/gdb_networkx.py`
- `Vimo-desktop/python_backend/videorag/_op.py`
- `Vimo-desktop/python_backend/videorag/prompt.py`
- `Vimo-desktop/python_backend/videorag/_storage/gdb_neo4j.py`
- `Vimo-desktop/python_backend/videorag/_storage/gdb_networkx.py`
- `VideoRAG-algorithm/longervideos/dataset.json`
- `README.md`
- `VideoRAG-algorithm/README.md`

### Evaluation/observability

- `VideoRAG-algorithm/videorag/_op.py`
- `VideoRAG-algorithm/videorag/videorag.py`
- `Vimo-desktop/python_backend/videorag_api.py`
- `VideoRAG-algorithm/reproduce/quantitative_comparison/batch_quant_eval_calculate.py`
- `VideoRAG-algorithm/reproduce/quantitative_comparison/batch_quant_eval_upload.py`
- `VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_calculate.py`
- `VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_upload.py`
- `VideoRAG-algorithm/videorag/_storage/vdb_nanovectordb.py`
- `VideoRAG-algorithm/videorag/_videoutil/caption.py`
- `Vimo-desktop/python_backend/videorag/_op.py`
- `Vimo-desktop/python_backend/videorag/_videoutil/caption.py`
- `VideoRAG-algorithm/longervideos/dataset.json`
- ... 2 more

### Agent/MCP/tool surface

- `VideoRAG-algorithm/longervideos/download.sh`
- `VideoRAG-algorithm/videorag/_llm.py`
- `VideoRAG-algorithm/videorag/_op.py`
- `VideoRAG-algorithm/reproduce/quantitative_comparison/batch_quant_eval_download.py`
- `VideoRAG-algorithm/reproduce/quantitative_comparison/batch_quant_eval_parse.py`
- `VideoRAG-algorithm/reproduce/quantitative_comparison/batch_quant_eval_upload.py`
- `VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_download.py`
- `VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_parse.py`
- `VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_upload.py`
- `Vimo-desktop/python_backend/videorag/_llm.py`
- `Vimo-desktop/python_backend/videorag/_op.py`
- `Vimo-desktop/python_backend/videorag/_videoutil/caption.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| Vimo-desktop/python_backend/videorag_api.py | 998 | @app.route('/api/sessions/<chat_id>/videos/upload', methods=['POST']) |
| Vimo-desktop/python_backend/videorag_api.py | 1000 | """Upload video for specific chat session and start indexing - asynchronous operation""" |
| Vimo-desktop/python_backend/videorag_api.py | 1001 | log_to_file(f"📝 API: Starting async video upload for chat_id: {chat_id}") |
| Vimo-desktop/src/preload/index.ts | 188 | uploadVideo: (chatId: string, videoPathList: string[], baseStoragePath: string) => ipcRenderer.invoke('videorag:upload-video', chatId, videoPathList, baseStoragePath), |
| Vimo-desktop/src/main/handlers/videorag-handlers.ts | 199 | if (endpoint.includes('/upload')) { |
| Vimo-desktop/src/main/handlers/videorag-handlers.ts | 200 | timeout = customTimeout \|\| 60000; // Video upload operation: 60 seconds |
| Vimo-desktop/src/main/handlers/videorag-handlers.ts | 542 | // Upload video for specific session and start indexing |
| Vimo-desktop/src/main/handlers/videorag-handlers.ts | 543 | ipcMain.handle('videorag:upload-video', async (_, chatId: string, videoPathList: string[], baseStoragePath: string) => { |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| VideoRAG-algorithm/longervideos/dataset.json | 401 | "question": "Comparative analysis of the advantages and disadvantages of ColPali and traditional RAG in PDF processing." |
| VideoRAG-algorithm/longervideos/dataset.json | 429 | "question": "How does ColPali improve PDF processing?" |
| VideoRAG-algorithm/longervideos/dataset.json | 457 | "question": "How does Gemini's ability to understand the visual layout of a PDF, such as the placement of figures and tables, impact its accuracy in extracting information like captions and reference lists compared to tr |
| VideoRAG-algorithm/longervideos/dataset.json | 477 | "question": "Compare and contrast Gemini Flash's PDF processing capabilities with those of GPT-4, highlighting specific examples from the transcript." |
| VideoRAG-algorithm/longervideos/dataset.json | 481 | "question": "Discuss the economic implications of using Gemini Flash versus traditional RAG systems for PDF processing, considering file size." |
| VideoRAG-algorithm/longervideos/dataset.json | 501 | "question": "What are the potential ethical concerns of using a proprietary API like Gemini for PDF processing, compared to open-source RAG solutions? Consider factors like data privacy, vendor lock-in, and the transpare |
| VideoRAG-algorithm/longervideos/dataset.json | 682 | "question": "Describe the process of using sub-agents and a super agent to analyze financial reports in a PDF format." |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| VideoRAG-algorithm/videorag/_op.py | 52 | # here somehow tricky, since the whole chunk tokens is list[list[list[int]]] for corpus(doc(chunk)),so it can't be decode entirely |
| VideoRAG-algorithm/videorag/_op.py | 54 | for i, chunk in enumerate(chunk_token): |
| VideoRAG-algorithm/videorag/_op.py | 59 | "content": chunk.strip(), |
| VideoRAG-algorithm/videorag/_op.py | 74 | # make sure each segment is not larger than max_token_size |
| VideoRAG-algorithm/videorag/_op.py | 86 | # add new segment |
| VideoRAG-algorithm/videorag/_op.py | 90 | # save the current chunk |
| VideoRAG-algorithm/videorag/_op.py | 91 | chunk = tiktoken_model.decode(chunk_token) |
| VideoRAG-algorithm/videorag/_op.py | 95 | "content": chunk.strip(), |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| VideoRAG-algorithm/videorag_longervideos.py | 26 | embedding_model_name = "text-embedding-3-small", |
| VideoRAG-algorithm/videorag/_llm.py | 152 | response = await openai_async_client.embeddings.create( |
| VideoRAG-algorithm/videorag/_llm.py | 155 | return np.array([dp.embedding for dp in response.data]) |
| VideoRAG-algorithm/videorag/_llm.py | 159 | embedding_model_name = "text-embedding-3-small", |
| VideoRAG-algorithm/videorag/_llm.py | 180 | embedding_model_name = "text-embedding-3-small", |
| VideoRAG-algorithm/videorag/_llm.py | 274 | response = await azure_openai_client.embeddings.create( |
| VideoRAG-algorithm/videorag/_llm.py | 277 | return np.array([dp.embedding for dp in response.data]) |
| VideoRAG-algorithm/videorag/_llm.py | 282 | embedding_model_name = "text-embedding-3-small", |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| VideoRAG-algorithm/videorag/_op.py | 413 | record = re.search(r"\((.*)\)", record) |
| VideoRAG-algorithm/videorag/_op.py | 613 | # visual retrieval |
| VideoRAG-algorithm/videorag/_op.py | 639 | # visual retrieval |
| VideoRAG-algorithm/videorag/_op.py | 699 | # visual retrieval |
| VideoRAG-algorithm/videorag/_op.py | 784 | # visual retrieval |
| VideoRAG-algorithm/videorag/_op.py | 810 | # visual retrieval |
| VideoRAG-algorithm/videorag/_op.py | 870 | # visual retrieval |
| VideoRAG-algorithm/videorag/_utils.py | 34 | maybe_json_str = re.search(r"{.*}", content, re.DOTALL) |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| VideoRAG-algorithm/videorag/_op.py | 212 | if len(record_attributes) < 4 or record_attributes[0] != '"entity"': |
| VideoRAG-algorithm/videorag/_op.py | 441 | f"{now_ticks} Processed {already_processed} chunks, {already_entities} entities(duplicated), {already_relations} relations(duplicated)\r", |
| VideoRAG-algorithm/videorag/_op.py | 473 | logger.warning("Didn't extract any entities, maybe your LLM is not working") |
| VideoRAG-algorithm/videorag/_utils.py | 16 | logger = logging.getLogger("nano-graphrag") |
| VideoRAG-algorithm/videorag/_utils.py | 139 | # Refer the utils functions of the official GraphRAG implementation: |
| VideoRAG-algorithm/videorag/_utils.py | 140 | # https://github.com/microsoft/graphrag |
| VideoRAG-algorithm/videorag/base.py | 145 | """Return the community representation with report and nodes""" |
| VideoRAG-algorithm/videorag/base.py | 149 | raise NotImplementedError("Node embedding is not used in nano-graphrag.") |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| Vimo-desktop/electron.vite.config.ts | 44 | watch: { |
| VideoRAG-algorithm/videorag/_llm.py | 116 | await hashing_kv.upsert( |
| VideoRAG-algorithm/videorag/_llm.py | 230 | await hashing_kv.upsert( |
| VideoRAG-algorithm/videorag/_llm.py | 336 | await hashing_kv.upsert( |
| VideoRAG-algorithm/videorag/_llm.py | 446 | await hashing_kv.upsert( |
| VideoRAG-algorithm/videorag/_op.py | 483 | await entity_vdb.upsert(data_for_vdb) |
| VideoRAG-algorithm/videorag/base.py | 75 | async def upsert(self, data: dict[str, dict]): |
| VideoRAG-algorithm/videorag/base.py | 99 | async def upsert(self, data: dict[str, T]): |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| VideoRAG-algorithm/videorag/_op.py | 225 | source_id=entity_source_id, |
| VideoRAG-algorithm/videorag/_op.py | 248 | source_id=edge_source_id, |
| VideoRAG-algorithm/videorag/_op.py | 266 | split_string_by_multi_markers(already_node["source_id"], [GRAPH_FIELD_SEP]) |
| VideoRAG-algorithm/videorag/_op.py | 280 | source_id = GRAPH_FIELD_SEP.join( |
| VideoRAG-algorithm/videorag/_op.py | 281 | set([dp["source_id"] for dp in nodes_data] + already_source_ids) |
| VideoRAG-algorithm/videorag/_op.py | 289 | source_id=source_id, |
| VideoRAG-algorithm/videorag/_op.py | 314 | split_string_by_multi_markers(already_edge["source_id"], [GRAPH_FIELD_SEP]) |
| VideoRAG-algorithm/videorag/_op.py | 325 | source_id = GRAPH_FIELD_SEP.join( |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| VideoRAG-algorithm/videorag/_op.py | 657 | eval(x.split('_')[-1]) # index |
| VideoRAG-algorithm/videorag/_op.py | 721 | start_time = eval(video_segments._data[video_name][index]["time"].split('-')[0]) |
| VideoRAG-algorithm/videorag/_op.py | 722 | end_time = eval(video_segments._data[video_name][index]["time"].split('-')[1]) |
| VideoRAG-algorithm/videorag/_op.py | 828 | eval(x.split('_')[-1]) # index |
| VideoRAG-algorithm/videorag/_op.py | 892 | start_time = eval(video_segments._data[video_name][index]["time"].split('-')[0]) |
| VideoRAG-algorithm/videorag/_op.py | 893 | end_time = eval(video_segments._data[video_name][index]["time"].split('-')[1]) |
| VideoRAG-algorithm/videorag/videorag.py | 126 | self.caption_model.eval() |
| Vimo-desktop/python_backend/videorag_api.py | 161 | self.embedder.eval() |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| VideoRAG-algorithm/longervideos/download.sh | 5 | courses="0-fights-in-animal-kingdom 1-nature-scenes 2-climate-week-at-columbia-engineering 3-black-myth-wukong 4-rag-lecture 5-ai-agent-lecture 6-daubechies-wavelet-lecture 7-daubechies-art-and-mathematics-lecture 8-tech |
| VideoRAG-algorithm/videorag/_llm.py | 3 | from openai import AsyncOpenAI, AsyncAzureOpenAI, APIConnectionError, RateLimitError |
| VideoRAG-algorithm/videorag/_llm.py | 4 | from ollama import AsyncClient |
| VideoRAG-algorithm/videorag/_llm.py | 85 | ##### OpenAI Configuration |
| VideoRAG-algorithm/videorag/_llm.py | 199 | ###### Azure OpenAI Configuration |
| VideoRAG-algorithm/videorag/_llm.py | 301 | ###### Ollama configuration |
| VideoRAG-algorithm/videorag/_llm.py | 306 | # Initialize the Ollama client |
| VideoRAG-algorithm/videorag/_llm.py | 326 | # Send the request to Ollama |

## Gap

- tests
- ci
