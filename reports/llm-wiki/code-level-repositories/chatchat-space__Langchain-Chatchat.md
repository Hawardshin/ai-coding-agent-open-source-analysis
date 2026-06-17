# chatchat-space/Langchain-Chatchat 코드 레벨 분석

생성일: 2026-06-17T23:31:17.047Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | A integrated platform (86) |
| stars | 38186 |
| language | Python |
| tags | rag, knowledge-base, agent-knowledge, korea-signal |
| files/code/source | 470/293/260 |
| tests/ci | 41/9 |
| local path | sources/chatchat-space__Langchain-Chatchat |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 12 | 7 | libs/chatchat-server/chatchat/server/knowledge_base/kb_doc_api.py:412 this is usefull when user can copy files to content folder directly instead of upload through network. |
| Parsing/OCR/document extraction | code | 39 | 13 | libs/chatchat-server/chatchat/settings.py:170 PDF OCR 控制：只对宽高超过页面一定比例（图片宽/页面宽，图片高/页面高）的图片进行 OCR。 |
| Chunking/splitting | code | 33 | 25 | libs/chatchat-server/chatchat/settings.py:233 "RecursiveCharacterTextSplitter": { |
| Embedding/vector index | code | 68 | 29 | libs/chatchat-server/chatchat/server/localai_embeddings.py:19 from langchain_core.embeddings import Embeddings |
| Retrieval/search/rerank | code | 48 | 33 | tools/model_loaders/xinference_manager.py:10 from xinference.model import rerank as xf_rerank |
| Wiki/graph/entity model | doc-only | 1 | 0 | libs/chatchat-server/pyproject.toml:19 langchain-community = "0.0.36" |
| Memory/update lifecycle | code | 60 | 35 | tools/model_loaders/xinference_manager.py:18 "LLM": xf_llm.llm_family.cache, |
| Provenance/citation/evidence | absent | 0 | 0 |  |
| Evaluation/observability | code | 5 | 5 | libs/chatchat-server/chatchat/settings.py:605 2、text2promql 与大模型在意图理解、metric 选择、promql 转换等方面的能力有关, 可切换不同大模型进行测试; |
| Agent/MCP/tool surface | code | 97 | 66 | tools/autodl_start_script/model_registrations_emb.sh:12 -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36' \ |

## 의존성 신호

- LLM/app framework: langchain-chatchat, langchain_chatchat, ollama, anthropic, open_langchain_chatchat
- Vector/search store: pgvector, elasticsearch
- Document parsing/OCR: beautifulsoup4, pdfminer-six, pypdf, pypdfium2
- Persistence/database: aiosqlite, pgvector, sqlite-vss, upstash-redis

## 주요 파일 후보

### Ingestion/source intake

- `libs/chatchat-server/chatchat/server/knowledge_base/kb_doc_api.py`
- `libs/chatchat-server/chatchat/server/knowledge_base/utils.py`
- `libs/chatchat-server/chatchat/webui_pages/dialogue/dialogue.py`
- `libs/chatchat-server/chatchat/webui_pages/knowledge_base/knowledge_base.py`
- `libs/chatchat-server/chatchat/webui_pages/mcp/dialogue.py`
- `libs/chatchat-server/chatchat/server/db/repository/knowledge_file_repository.py`
- `libs/chatchat-server/chatchat/server/knowledge_base/kb_service/base.py`
- `.github/workflows/_release.yml`
- `.github/workflows/_test_release.yml`
- `libs/chatchat-server/README_en.md`
- `markdown_docs/server/db/repository/knowledge_file_repository.md`
- `markdown_docs/server/knowledge_base/kb_service/base.md`

### Parsing/OCR/document extraction

- `libs/chatchat-server/chatchat/settings.py`
- `libs/chatchat-server/chatchat/server/utils.py`
- `libs/chatchat-server/chatchat/server/knowledge_base/kb_summary_api.py`
- `libs/chatchat-server/chatchat/server/knowledge_base/utils.py`
- `libs/python-sdk/open_chatcaht/types/response/base.py`
- `libs/chatchat-server/chatchat/server/file_rag/document_loaders/mydocloader.py`
- `libs/chatchat-server/chatchat/server/file_rag/document_loaders/myimgloader.py`
- `libs/chatchat-server/chatchat/server/file_rag/document_loaders/mypdfloader.py`
- `libs/chatchat-server/chatchat/server/file_rag/document_loaders/mypptloader.py`
- `libs/chatchat-server/chatchat/server/file_rag/document_loaders/ocr.py`
- `libs/chatchat-server/chatchat/server/file_rag/text_splitter/ali_text_splitter.py`
- `libs/chatchat-server/chatchat/server/file_rag/text_splitter/chinese_text_splitter.py`
- ... 6 more

### Chunking/splitting

- `libs/chatchat-server/chatchat/settings.py`
- `libs/python-sdk/open_chatcaht/api_client.py`
- `libs/chatchat-server/chatchat/server/localai_embeddings.py`
- `libs/chatchat-server/chatchat/webui_pages/utils.py`
- `libs/chatchat-server/langchain_chatchat/chat_models/base.py`
- `libs/chatchat-server/langchain_chatchat/chat_models/platform_tools_message.py`
- `libs/chatchat-server/langchain_chatchat/embeddings/zhipuai.py`
- `libs/chatchat-server/chatchat/server/api_server/api_schemas.py`
- `libs/chatchat-server/chatchat/server/api_server/openai_routes.py`
- `libs/chatchat-server/chatchat/server/chat/chat.py`
- `libs/chatchat-server/chatchat/server/chat/kb_chat.py`
- `libs/chatchat-server/chatchat/server/knowledge_base/utils.py`
- ... 6 more

### Embedding/vector index

- `libs/chatchat-server/chatchat/server/localai_embeddings.py`
- `libs/chatchat-server/langchain_chatchat/embeddings/zhipuai.py`
- `tools/autodl_start_script/model_registrations_emb.sh`
- `tools/autodl_start_script/start_models_emb.sh`
- `tools/model_loaders/xinference_manager.py`
- `libs/chatchat-server/chatchat/cli.py`
- `libs/chatchat-server/chatchat/init_database.py`
- `libs/chatchat-server/chatchat/settings.py`
- `libs/chatchat-server/chatchat/startup.py`
- `libs/python-sdk/open_chatcaht/_constants.py`
- `libs/chatchat-server/chatchat/server/utils.py`
- `libs/chatchat-server/chatchat/webui_pages/utils.py`
- ... 6 more

### Retrieval/search/rerank

- `tools/model_loaders/xinference_manager.py`
- `libs/chatchat-server/chatchat/settings.py`
- `libs/chatchat-server/scripts/check_pydantic.sh`
- `libs/chatchat-server/chatchat/server/llm_api_stale.py`
- `libs/chatchat-server/chatchat/server/localai_embeddings.py`
- `libs/chatchat-server/chatchat/server/utils.py`
- `libs/chatchat-server/chatchat/webui_pages/utils.py`
- `libs/chatchat-server/langchain_chatchat/embeddings/zhipuai.py`
- `libs/chatchat-server/langchain_chatchat/utils/try_parse_json_object.py`
- `libs/chatchat-server/chatchat/server/api_server/mcp_routes.py`
- `libs/chatchat-server/chatchat/server/chat/kb_chat.py`
- `libs/chatchat-server/chatchat/server/reranker/reranker.py`
- ... 6 more

### Wiki/graph/entity model

- `libs/chatchat-server/pyproject.toml`

### Memory/update lifecycle

- `tools/model_loaders/xinference_manager.py`
- `libs/chatchat-server/chatchat/init_database.py`
- `libs/chatchat-server/chatchat/settings.py`
- `libs/python-sdk/open_chatcaht/api_client.py`
- `libs/python-sdk/open_chatcaht/utils.py`
- `libs/chatchat-server/chatchat/server/api_allinone_stale.py`
- `libs/chatchat-server/chatchat/server/llm_api_stale.py`
- `libs/chatchat-server/chatchat/server/utils.py`
- `libs/chatchat-server/chatchat/server/webui_allinone_stale.py`
- `libs/chatchat-server/chatchat/webui_pages/utils.py`
- `libs/chatchat-server/langchain_chatchat/chat_models/base.py`
- `libs/chatchat-server/langchain_chatchat/chat_models/platform_tools_message.py`
- ... 6 more

### Evaluation/observability

- `libs/chatchat-server/chatchat/settings.py`
- `libs/chatchat-server/chatchat/server/chat/chat.py`
- `libs/chatchat-server/chatchat/server/chat/file_chat.py`
- `libs/chatchat-server/chatchat/server/chat/kb_chat.py`
- `libs/chatchat-server/chatchat/server/agent/tools_factory/text2promql.py`

### Agent/MCP/tool surface

- `tools/autodl_start_script/model_registrations_emb.sh`
- `tools/autodl_start_script/model_registrations.sh`
- `tools/autodl_start_script/start_models_emb.sh`
- `tools/autodl_start_script/start_models.sh`
- `libs/chatchat-server/chatchat/settings.py`
- `libs/chatchat-server/chatchat/webui.py`
- `libs/chatchat-server/langchain_chatchat/__init__.py`
- `libs/chatchat-server/chatchat/server/llm_api_stale.py`
- `libs/chatchat-server/chatchat/server/localai_embeddings.py`
- `libs/chatchat-server/chatchat/server/utils.py`
- `libs/chatchat-server/chatchat/webui_pages/kb_chat.py`
- `libs/chatchat-server/chatchat/webui_pages/utils.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| libs/chatchat-server/chatchat/server/knowledge_base/kb_doc_api.py | 412 | this is usefull when user can copy files to content folder directly instead of upload through network. |
| libs/chatchat-server/chatchat/server/knowledge_base/utils.py | 189 | DocumentLoader = getattr(document_loaders_module, loader_name) |
| libs/chatchat-server/chatchat/server/knowledge_base/utils.py | 196 | DocumentLoader = getattr(document_loaders_module, "UnstructuredFileLoader") |
| libs/chatchat-server/chatchat/server/knowledge_base/utils.py | 216 | loader = DocumentLoader(file_path, **loader_kwargs) |
| libs/chatchat-server/chatchat/webui_pages/dialogue/dialogue.py | 91 | '''upload image for vision model using openai sdk''' |
| libs/chatchat-server/chatchat/webui_pages/knowledge_base/knowledge_base.py | 224 | "document_loader", |
| libs/chatchat-server/chatchat/webui_pages/knowledge_base/knowledge_base.py | 244 | ("document_loader", "文档加载器"): {}, |
| libs/chatchat-server/chatchat/webui_pages/mcp/dialogue.py | 89 | .connector-card { |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| libs/chatchat-server/chatchat/settings.py | 170 | PDF OCR 控制：只对宽高超过页面一定比例（图片宽/页面宽，图片高/页面高）的图片进行 OCR。 |
| libs/chatchat-server/chatchat/settings.py | 171 | 这样可以避免 PDF 中一些小图片的干扰，提高非扫描版 PDF 处理速度 |
| libs/chatchat-server/chatchat/server/utils.py | 483 | "data": ["doc1.docx", "doc2.pdf", "doc3.txt"], |
| libs/chatchat-server/chatchat/server/utils.py | 514 | "出处 [1] 广州市单位从业的特定人员参加工伤保险办事指引.docx：\n\n\t" |
| libs/chatchat-server/chatchat/server/knowledge_base/kb_summary_api.py | 121 | file_name: str = Body(..., examples=["test.pdf"]), |
| libs/chatchat-server/chatchat/server/knowledge_base/utils.py | 106 | "RapidOCRPDFLoader": [".pdf"], |
| libs/chatchat-server/chatchat/server/knowledge_base/utils.py | 107 | "RapidOCRDocLoader": [".docx"], |
| libs/chatchat-server/chatchat/server/knowledge_base/utils.py | 110 | ".pptx", |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| libs/chatchat-server/chatchat/settings.py | 233 | "RecursiveCharacterTextSplitter": { |
| libs/chatchat-server/chatchat/settings.py | 247 | TextSplitter配置项，如果你不明白其中的含义，就不要修改。 |
| libs/chatchat-server/chatchat/settings.py | 906 | "You are STRICTLY FORBIDDEN from starting your messages with \"Great\", \"Certainly\", \"Okay\", \"Sure\". You should NOT be conversational in your responses, but rather direct and to the point. For example you should NO |
| libs/python-sdk/open_chatcaht/api_client.py | 142 | async for chunk in r.aiter_text(None): |
| libs/python-sdk/open_chatcaht/api_client.py | 143 | if not chunk: # fastchat api yield empty bytes on start and end |
| libs/python-sdk/open_chatcaht/api_client.py | 147 | if chunk.startswith("data: "): |
| libs/python-sdk/open_chatcaht/api_client.py | 148 | data = json.loads(chunk_cache + chunk[6:-2]) |
| libs/python-sdk/open_chatcaht/api_client.py | 149 | elif chunk.startswith(":"): # skip sse comment line |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| libs/chatchat-server/chatchat/server/localai_embeddings.py | 19 | from langchain_core.embeddings import Embeddings |
| libs/chatchat-server/chatchat/server/localai_embeddings.py | 36 | def _create_retry_decorator(embeddings: LocalAIEmbeddings) -> Callable[[Any], Any]: |
| libs/chatchat-server/chatchat/server/localai_embeddings.py | 45 | stop=stop_after_attempt(embeddings.max_retries), |
| libs/chatchat-server/chatchat/server/localai_embeddings.py | 58 | def _async_retry_decorator(embeddings: LocalAIEmbeddings) -> Any: |
| libs/chatchat-server/chatchat/server/localai_embeddings.py | 67 | stop=stop_after_attempt(embeddings.max_retries), |
| libs/chatchat-server/chatchat/server/localai_embeddings.py | 90 | # https://stackoverflow.com/questions/76469415/getting-embeddings-of-length-1-from-langchain-openaiembeddings |
| libs/chatchat-server/chatchat/server/localai_embeddings.py | 92 | if any([len(d.embedding) == 1 for d in response.data]): |
| libs/chatchat-server/chatchat/server/localai_embeddings.py | 95 | raise openai.APIError("LocalAI API returned an empty embedding") |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| tools/model_loaders/xinference_manager.py | 10 | from xinference.model import rerank as xf_rerank |
| tools/model_loaders/xinference_manager.py | 15 | model_types = ["LLM", "embedding", "image", "rerank", "audio"] |
| tools/model_loaders/xinference_manager.py | 21 | "rerank": xf_rerank.core.cache, |
| tools/model_loaders/xinference_manager.py | 180 | elif model_type == "rerank": |
| libs/chatchat-server/chatchat/settings.py | 494 | "bing_search_url": "https://api.bing.microsoft.com/v7.0/search", |
| libs/chatchat-server/scripts/check_pydantic.sh | 16 | # Search for lines matching the pattern within the specified repository |
| libs/chatchat-server/chatchat/server/llm_api_stale.py | 204 | key = key.split("-")[-1] if re.search("port\|host", key) else key |
| libs/chatchat-server/chatchat/server/localai_embeddings.py | 319 | """Call out to LocalAI's embedding endpoint for embedding search docs. |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| libs/chatchat-server/pyproject.toml | 19 | langchain-community = "0.0.36" |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| tools/model_loaders/xinference_manager.py | 18 | "LLM": xf_llm.llm_family.cache, |
| tools/model_loaders/xinference_manager.py | 19 | "embedding": xf_embedding.core.cache, |
| tools/model_loaders/xinference_manager.py | 20 | "image": xf_image.core.cache, |
| tools/model_loaders/xinference_manager.py | 21 | "rerank": xf_rerank.core.cache, |
| tools/model_loaders/xinference_manager.py | 22 | "audio": xf_audio.core.cache, |
| libs/chatchat-server/chatchat/init_database.py | 115 | delete docs in database that not existed in local folder. |
| libs/chatchat-server/chatchat/init_database.py | 116 | it is used to delete database docs after user deleted some doc files in file browser |
| libs/chatchat-server/chatchat/init_database.py | 125 | delete doc files in local folder that not existed in database. |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| libs/chatchat-server/chatchat/settings.py | 605 | 2、text2promql 与大模型在意图理解、metric 选择、promql 转换等方面的能力有关, 可切换不同大模型进行测试; |
| libs/chatchat-server/chatchat/server/chat/chat.py | 152 | # Enable langchain-chatchat to support langfuse |
| libs/chatchat-server/chatchat/server/chat/chat.py | 159 | from langfuse import Langfuse |
| libs/chatchat-server/chatchat/server/chat/chat.py | 160 | from langfuse.callback import CallbackHandler |
| libs/chatchat-server/chatchat/server/chat/file_chat.py | 162 | # Enable langchain-chatchat to support langfuse |
| libs/chatchat-server/chatchat/server/chat/file_chat.py | 169 | from langfuse import Langfuse |
| libs/chatchat-server/chatchat/server/chat/file_chat.py | 170 | from langfuse.callback import CallbackHandler |
| libs/chatchat-server/chatchat/server/chat/kb_chat.py | 128 | # Enable langchain-chatchat to support langfuse |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| tools/autodl_start_script/model_registrations_emb.sh | 12 | -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36' \ |
| tools/autodl_start_script/model_registrations.sh | 12 | -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36' \ |
| tools/autodl_start_script/start_models_emb.sh | 12 | -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36' \ |
| tools/autodl_start_script/start_models.sh | 12 | -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36' \ |
| libs/chatchat-server/chatchat/settings.py | 175 | """每个知识库的初始化介绍，用于在初始化知识库时显示和Agent调用，没写则没有介绍，不会被Agent调用。""" |
| libs/chatchat-server/chatchat/settings.py | 248 | source 如果选择tiktoken则使用openai的方法 "huggingface" |
| libs/chatchat-server/chatchat/settings.py | 264 | platform_type: t.Literal["xinference", "ollama", "oneapi", "fastchat", "openai", "custom openai"] = "xinference" |
| libs/chatchat-server/chatchat/settings.py | 268 | """openai api url""" |

## Gap

- Provenance/citation/evidence
