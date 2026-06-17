# InternLM/HuixiangDou 코드 레벨 분석

생성일: 2026-06-17T23:31:55.367Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | graph-rag/kg |
| maturity | A integrated platform (104) |
| stars | 2492 |
| language | Python |
| tags | rag, agent-knowledge, korea-signal |
| files/code/source | 390/231/181 |
| tests/ci | 41/2 |
| local path | sources/InternLM__HuixiangDou |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 11 | 8 | web/front-end/src/components/upload-item/index.tsx:1 import UploadItem from './upload-item'; |
| Parsing/OCR/document extraction | code | 20 | 8 | huixiangdou/frontend/wechat.py:23 from bs4 import BeautifulSoup as BS |
| Chunking/splitting | code | 38 | 29 | evaluation/rejection/build_fs_and_filter.py:81 parser.add_argument('--chunk-size', default=768, help='Text chunksize') |
| Embedding/vector index | code | 31 | 15 | evaluation/end2end/main.py:72 distance = assistant.retriever.embedder.distance(text1=gt, text2=dt).tolist() |
| Retrieval/search/rerank | code | 62 | 32 | huixiangdou/gradio_ui.py:224 ui_web_search = gr.Radio(["no", "yes"], label="Enable web search", info="Disable by default ") |
| Wiki/graph/entity model | code | 21 | 15 | sft/reconstruct_filter_annotate.py:64 relation = completion.choices[0].message.content |
| Memory/update lifecycle | code | 48 | 34 | sft/reconstruct_filter_annotate.py:278 lmdeploy 是一个用于压缩、部署和服务 LLM（Large Language Model）的工具包。是一个服务端场景下，transformer 结构 LLM 部署工具，支持 GPU 服务端部署，速度有保障，支持 Tensor Parallel，多并发优化，功能全面，包括模型转换、缓存历史会话的 cache feature 等. 它还提供了 WebUI、命令行和 gRPC 客户端接入。 |
| Provenance/citation/evidence | code | 4 | 3 | huixiangdou/services/parallel_pipeline.py:202 citation = CitationGeneratePrompt(self.language) |
| Evaluation/observability | code | 34 | 13 | sft/reconstruct_check_llm.py:20 from sklearn.metrics import f1_score, precision_score, recall_score |
| Agent/MCP/tool surface | code | 33 | 13 | sft/reconstruct_check_llm.py:19 from openai import OpenAI |

## 의존성 신호

- LLM/app framework: openai, transformers, transformers_stream_generator, sentence_transformers, sentence-transformers, transformers-stream-generator
- Vector/search store: faiss-gpu
- Graph/KG store: networkx
- Document parsing/OCR: beautifulsoup4, pymupdf, python-docx, readability-lxml, unstructured
- Persistence/database: redis, db-sqlite3

## 주요 파일 후보

### Ingestion/source intake

- `web/front-end/src/components/upload-item/index.tsx`
- `web/front-end/src/components/upload-item/upload-item.tsx`
- `web/front-end/src/components/upload/delete-btn.tsx`
- `web/front-end/src/components/upload/index.tsx`
- `web/front-end/src/components/upload/upload.tsx`
- `web/front-end/src/locales/en-US/bean-detail.ts`
- `web/front-end/src/locales/en-US/components.ts`
- `web/front-end/src/locales/zh-CN/bean-detail.ts`
- `web/front-end/src/pages/bean-detail/components/import-docs/import-docs.tsx`
- `README.md`
- `web/proxy/traslate.txt`

### Parsing/OCR/document extraction

- `huixiangdou/frontend/wechat.py`
- `huixiangdou/primitive/file_operation.py`
- `huixiangdou/services/store.py`
- `huixiangdou/services/web_search.py`
- `web/front-end/src/components/upload/upload.tsx`
- `web/front-end/src/locales/en-US/bean-detail.ts`
- `web/front-end/src/locales/zh-CN/bean-detail.ts`
- `web/front-end/src/pages/bean-detail/components/integrate-feishu/integrate-feishu.tsx`
- `.readthedocs.yaml`
- `pyproject.toml`
- `README_zh.md`
- `README.md`
- ... 6 more

### Chunking/splitting

- `evaluation/rejection/build_fs_and_filter.py`
- `evaluation/rejection/plot.py`
- `huixiangdou/frontend/wechat.py`
- `huixiangdou/primitive/__init__.py`
- `huixiangdou/primitive/bm250kapi.py`
- `huixiangdou/primitive/chunk.py`
- `huixiangdou/primitive/embedder.py`
- `huixiangdou/primitive/entity.py`
- `huixiangdou/primitive/faiss.py`
- `huixiangdou/primitive/file_operation.py`
- `huixiangdou/primitive/llm_reranker.py`
- `huixiangdou/primitive/splitter.py`
- ... 6 more

### Embedding/vector index

- `evaluation/end2end/main.py`
- `evaluation/rejection/build_fs_and_filter.py`
- `evaluation/rerank/step1_create_candidates.py`
- `huixiangdou/primitive/__init__.py`
- `huixiangdou/primitive/embedder.py`
- `huixiangdou/primitive/faiss.py`
- `huixiangdou/primitive/llm_reranker.py`
- `huixiangdou/primitive/query.py`
- `huixiangdou/services/retriever.py`
- `huixiangdou/services/store.py`
- `unittest/primitive/test_embedder.py`
- `unittest/primitive/test_faiss.py`
- ... 6 more

### Retrieval/search/rerank

- `huixiangdou/gradio_ui.py`
- `evaluation/end2end/main.py`
- `evaluation/rejection/build_fs_and_filter.py`
- `evaluation/rejection/kg_filter.py`
- `evaluation/rerank/step1_create_candidates.py`
- `huixiangdou/primitive/bm250kapi.py`
- `huixiangdou/primitive/faiss.py`
- `huixiangdou/primitive/llm_reranker.py`
- `huixiangdou/primitive/splitter.py`
- `huixiangdou/services/helper.py`
- `huixiangdou/services/kg.py`
- `huixiangdou/services/parallel_pipeline.py`
- ... 6 more

### Wiki/graph/entity model

- `sft/reconstruct_filter_annotate.py`
- `sft/reconstruct_wechat_group.py`
- `evaluation/rejection/kg_filter.py`
- `huixiangdou/primitive/__init__.py`
- `huixiangdou/primitive/entity.py`
- `huixiangdou/services/__init__.py`
- `huixiangdou/services/helper.py`
- `huixiangdou/services/kg.py`
- `huixiangdou/services/retriever.py`
- `huixiangdou/services/sg_search.py`
- `huixiangdou/services/store.py`
- `unittest/primitive/test_entity.py`
- ... 6 more

### Memory/update lifecycle

- `sft/reconstruct_filter_annotate.py`
- `sft/reconstruct_wechat_group.py`
- `evaluation/rejection/build_fs_and_filter.py`
- `evaluation/rerank/step1_create_candidates.py`
- `huixiangdou/frontend/lark_group.py`
- `huixiangdou/frontend/wechat.py`
- `huixiangdou/services/kg.py`
- `huixiangdou/services/llm_server_hybrid.py`
- `huixiangdou/services/parallel_pipeline.py`
- `huixiangdou/services/prompt.py`
- `huixiangdou/services/retriever.py`
- `huixiangdou/services/serial_pipeline.py`
- ... 6 more

### Provenance/citation/evidence

- `huixiangdou/services/parallel_pipeline.py`
- `huixiangdou/services/prompt.py`
- `huixiangdou/services/serial_pipeline.py`
- `README.md`

### Evaluation/observability

- `sft/reconstruct_check_llm.py`
- `sft/reconstruct_filter_annotate.py`
- `sft/reconstruct_wechat_group.py`
- `evaluation/end2end/main.py`
- `evaluation/rejection/build_fs_and_filter.py`
- `evaluation/rejection/kg_filter.py`
- `evaluation/rerank/step1_create_candidates.py`
- `huixiangdou/primitive/embedder.py`
- `huixiangdou/primitive/llm_reranker.py`
- `huixiangdou/primitive/query.py`
- `huixiangdou/services/llm_server_hybrid.py`
- `huixiangdou/services/retriever.py`
- ... 6 more

### Agent/MCP/tool surface

- `sft/reconstruct_check_llm.py`
- `sft/reconstruct_filter_annotate.py`
- `huixiangdou/primitive/query.py`
- `huixiangdou/services/helper.py`
- `huixiangdou/services/llm_server_hybrid.py`
- `huixiangdou/services/llm.py`
- `huixiangdou/services/sg_search.py`
- `unittest/service/test_llm_client.py`
- `unittest/service/test_sg_search.py`
- `web/scheduler/huixiangdou_task.py`
- `web/service/cache.py`
- `web/service/chat.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| web/front-end/src/components/upload-item/index.tsx | 1 | import UploadItem from './upload-item'; |
| web/front-end/src/components/upload-item/index.tsx | 3 | export * from './upload-item'; |
| web/front-end/src/components/upload-item/upload-item.tsx | 4 | import styles from './upload-item.module.less'; |
| web/front-end/src/components/upload/delete-btn.tsx | 4 | import styles from './upload.module.less'; |
| web/front-end/src/components/upload/index.tsx | 1 | import Upload from './upload'; |
| web/front-end/src/components/upload/index.tsx | 3 | export * from './upload'; |
| web/front-end/src/components/upload/index.tsx | 4 | export default Upload; |
| web/front-end/src/components/upload/upload.tsx | 8 | import UploadItem, { UploadItemProps, UploadStatus } from '@components/upload-item'; |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| huixiangdou/frontend/wechat.py | 23 | from bs4 import BeautifulSoup as BS |
| huixiangdou/frontend/wechat.py | 25 | from readability import Document |
| huixiangdou/frontend/wechat.py | 937 | logger.debug('kimi ocr {} {}'.format( |
| huixiangdou/primitive/file_operation.py | 9 | from bs4 import BeautifulSoup |
| huixiangdou/primitive/file_operation.py | 40 | self.pdf_suffix = '.pdf' |
| huixiangdou/primitive/file_operation.py | 41 | self.ppt_suffix = '.pptx' |
| huixiangdou/primitive/file_operation.py | 43 | self.word_suffix = ['.docx', '.doc'] |
| huixiangdou/primitive/file_operation.py | 85 | return 'pdf' |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| evaluation/rejection/build_fs_and_filter.py | 81 | parser.add_argument('--chunk-size', default=768, help='Text chunksize') |
| evaluation/rejection/build_fs_and_filter.py | 300 | 'chunk{}.jsonl'.format(chunk_size)), 'a') as f: |
| evaluation/rejection/plot.py | 56 | for splitter in os.listdir('./'): |
| evaluation/rejection/plot.py | 58 | if not splitter.startswith('chunk_size'): |
| evaluation/rejection/plot.py | 61 | if not os.path.isdir(splitter): |
| evaluation/rejection/plot.py | 65 | for jsonl_file in os.listdir(splitter): |
| evaluation/rejection/plot.py | 69 | print(splitter, jsonl_file) |
| evaluation/rejection/plot.py | 72 | with open(os.path.join(splitter, jsonl_file)) as f: |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| evaluation/end2end/main.py | 72 | distance = assistant.retriever.embedder.distance(text1=gt, text2=dt).tolist() |
| evaluation/rejection/build_fs_and_filter.py | 119 | # fs_init = FeatureStore(embedder=cache.embedder, |
| evaluation/rejection/build_fs_and_filter.py | 231 | fs_init = FeatureStore(embedder=cache.embedder, |
| evaluation/rerank/step1_create_candidates.py | 101 | fs_init = FeatureStore(embedder=cache.embedder, config_path=config_path) |
| huixiangdou/primitive/__init__.py | 4 | from .embedder import Embedder # noqa E401 |
| huixiangdou/primitive/__init__.py | 5 | from .faiss import Faiss # noqa E401 |
| huixiangdou/primitive/embedder.py | 17 | class Embedder: |
| huixiangdou/primitive/embedder.py | 44 | raise ValueError('siliconclud remote embedder api token is None') |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| huixiangdou/gradio_ui.py | 224 | ui_web_search = gr.Radio(["no", "yes"], label="Enable web search", info="Disable by default ") |
| huixiangdou/gradio_ui.py | 227 | ui_code_search = gr.Radio(["yes", "no"], label="Enable code search", info="Enable by default ") |
| huixiangdou/gradio_ui.py | 232 | input_image = gr.Image(label='[Optional] Image-text retrieval needs `config-multimodal.ini`', render=show_image) |
| evaluation/end2end/main.py | 72 | distance = assistant.retriever.embedder.distance(text1=gt, text2=dt).tolist() |
| evaluation/rejection/build_fs_and_filter.py | 132 | # retriever = CacheRetriever(config_path=config_path).get( |
| evaluation/rejection/build_fs_and_filter.py | 158 | # retriever.reject_throttle = throttle |
| evaluation/rejection/build_fs_and_filter.py | 165 | # retriever.reject_throttle = max( |
| evaluation/rejection/build_fs_and_filter.py | 168 | # dt = retriever.is_relative(query=question, |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| sft/reconstruct_filter_annotate.py | 64 | relation = completion.choices[0].message.content |
| sft/reconstruct_filter_annotate.py | 65 | filtered_relation = ''.join([c for c in relation if c.isdigit()]) |
| sft/reconstruct_wechat_group.py | 284 | relation = llm.generate_response(prompt=prompt, backend='puyu') |
| sft/reconstruct_wechat_group.py | 285 | filtered_relation = ''.join([c for c in relation if c.isdigit()]) |
| evaluation/rejection/kg_filter.py | 13 | from huixiangdou.services import KnowledgeGraph |
| evaluation/rejection/kg_filter.py | 32 | kg = KnowledgeGraph(config_path=config_path, override=False) |
| huixiangdou/primitive/__init__.py | 18 | from .entity import NamedEntity2Chunk |
| huixiangdou/primitive/entity.py | 7 | """Save the relationship between Named Entity and Chunk to sqlite""" |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| sft/reconstruct_filter_annotate.py | 278 | lmdeploy 是一个用于压缩、部署和服务 LLM（Large Language Model）的工具包。是一个服务端场景下，transformer 结构 LLM 部署工具，支持 GPU 服务端部署，速度有保障，支持 Tensor Parallel，多并发优化，功能全面，包括模型转换、缓存历史会话的 cache feature 等. 它还提供了 WebUI、命令行和 gRPC 客户端接入。 |
| sft/reconstruct_wechat_group.py | 392 | lmdeploy 是一个用于压缩、部署和服务 LLM（Large Language Model）的工具包。是一个服务端场景下，transformer 结构 LLM 部署工具，支持 GPU 服务端部署，速度有保障，支持 Tensor Parallel，多并发优化，功能全面，包括模型转换、缓存历史会话的 cache feature 等. 它还提供了 WebUI、命令行和 gRPC 客户端接入。 |
| sft/reconstruct_wechat_group.py | 452 | # print('{} merge {}'.format(target['id'], chat['id'])) |
| evaluation/rejection/build_fs_and_filter.py | 118 | # cache = CacheRetriever(config_path=config_path) |
| evaluation/rejection/build_fs_and_filter.py | 119 | # fs_init = FeatureStore(embedder=cache.embedder, |
| evaluation/rejection/build_fs_and_filter.py | 230 | cache = CacheRetriever(config_path=config_path) |
| evaluation/rejection/build_fs_and_filter.py | 231 | fs_init = FeatureStore(embedder=cache.embedder, |
| evaluation/rerank/step1_create_candidates.py | 99 | cache = CacheRetriever(config_path=config_path) |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| huixiangdou/services/parallel_pipeline.py | 202 | citation = CitationGeneratePrompt(self.language) |
| huixiangdou/services/parallel_pipeline.py | 203 | prompt = citation.build(texts=context_texts, question=question) |
| huixiangdou/services/prompt.py | 119 | Please use only the provided search results (some of which may be irrelevant) to write accurate, engaging, and concise answers, and correctly cite them. Use an impartial and journalistic tone. For any factual statements, |
| huixiangdou/services/prompt.py | 133 | """Build generate prompt with citation format""" |
| huixiangdou/services/serial_pipeline.py | 137 | citation = CitationGeneratePrompt(self.language) |
| huixiangdou/services/serial_pipeline.py | 138 | prompt = citation.build(texts=context_texts, question=sess.query.text) |
| huixiangdou/services/serial_pipeline.py | 204 | citation = CitationGeneratePrompt(self.language) |
| huixiangdou/services/serial_pipeline.py | 205 | prompt = citation.build(texts=texts, question=sess.query.text) |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| sft/reconstruct_check_llm.py | 20 | from sklearn.metrics import f1_score, precision_score, recall_score |
| sft/reconstruct_filter_annotate.py | 20 | from sklearn.metrics import f1_score, precision_score, recall_score |
| sft/reconstruct_filter_annotate.py | 212 | def metric(llm_type: str, |
| sft/reconstruct_filter_annotate.py | 257 | precision = precision_score(gts, dts) |
| sft/reconstruct_filter_annotate.py | 258 | recall = recall_score(gts, dts) |
| sft/reconstruct_filter_annotate.py | 261 | logger.info('{}: {} {} {} {}'.format(llm_type, precision, recall, f1, |
| sft/reconstruct_filter_annotate.py | 281 | mmyolo : YOLO series toolbox and benchmark. Implemented RTMDet, RTMDet-Rotated,YOLOv5, YOLOv6, YOLOv7, YOLOv8,YOLOX, PPYOLOE, etc. |
| sft/reconstruct_filter_annotate.py | 416 | description='Annotate and metric LLM with CR task.') |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| sft/reconstruct_check_llm.py | 19 | from openai import OpenAI |
| sft/reconstruct_filter_annotate.py | 19 | from openai import OpenAI |
| sft/reconstruct_filter_annotate.py | 53 | client = OpenAI( |
| sft/reconstruct_filter_annotate.py | 267 | client = OpenAI( |
| huixiangdou/primitive/query.py | 20 | # - the scale of your embeddings (OpenAI's are unit normed. Many |
| huixiangdou/services/helper.py | 14 | from openai import OpenAI |
| huixiangdou/services/helper.py | 232 | client = OpenAI(api_key=token, base_url='https://api.moonshot.cn/v1') |
| huixiangdou/services/llm_server_hybrid.py | 13 | from openai import OpenAI |

## Gap

_없음_
