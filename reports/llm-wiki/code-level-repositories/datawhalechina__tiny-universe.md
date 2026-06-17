# datawhalechina/tiny-universe 코드 레벨 분석

생성일: 2026-06-17T23:31:32.845Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | curated-list/tutorial |
| maturity | C focused implementation (46) |
| stars | 4916 |
| language | Jupyter Notebook |
| tags | rag, document-chat, agent-knowledge, korea-signal |
| files/code/source | 127/50/49 |
| tests/ci | 1/0 |
| local path | sources/datawhalechina__tiny-universe |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 8 | 5 | content/TinyDiffusion/ddpm/dataloader.py:5 from torch.utils.data import DataLoader |
| Parsing/OCR/document extraction | code | 6 | 1 | content/TinyRAG/RAG/utils.py:16 import html2text |
| Chunking/splitting | code | 8 | 2 | content/TinyGraphRAG/tinygraph/graph.py:70 self.chunk_path = os.path.join(working_dir, "chunk.json") |
| Embedding/vector index | code | 20 | 12 | content/TinyRAG/RAG/Embeddings.py:4 @File : Embeddings.py |
| Retrieval/search/rerank | code | 13 | 6 | content/TinyIMGRAG/IMGRAG/ImgRetrieval.py:8 @Desc : Image Generation and Retrieval Pipeline with careful GPU memory management |
| Wiki/graph/entity model | code | 7 | 2 | content/TinyGraphRAG/tinygraph/graph.py:71 self.community_path = os.path.join(working_dir, "community.json") |
| Memory/update lifecycle | code | 18 | 12 | content/TinyIMGRAG/main.py:8 @Desc : Image Generation and Retrieval Pipeline with careful GPU memory management |
| Provenance/citation/evidence | code | 3 | 1 | content/TinyGraphRAG/tinygraph/prompt.py:211 Do not include information where the supporting evidence for it is not provided. |
| Evaluation/observability | code | 23 | 14 | content/TinyEval/eval.py:7 from Eval.metrics import ( |
| Agent/MCP/tool surface | code | 14 | 4 | content/TinyAgent/tinyAgent/Agent.py:28 class Agent: |

## 의존성 신호

- LLM/app framework: transformers, openai
- Document parsing/OCR: PyPDF2, beautifulsoup4

## 주요 파일 후보

### Ingestion/source intake

- `content/TinyDiffusion/ddpm/dataloader.py`
- `content/TinyDiffusion/ddpm/diffusion.py`
- `content/TinyDiffusion/ddpm/metrics.py`
- `content/TinyDiffusion/ddpm/train.py`
- `content/TinyLLM/code/preprocess.py`
- `content/TinyDiffusion/readme.md`
- `content/TinyLLM/README.md`
- `content/TinyIMGRAG/packages/CLIP-main/README.md`

### Parsing/OCR/document extraction

- `content/TinyRAG/RAG/utils.py`
- `content/TinyIMGRAG/README.md`
- `content/TinyRAG/readme.md`
- `content/TinyRAG/requirements.txt`
- `content/TinyTransformer/readme.md`
- `content/TinyIMGRAG/packages/CLIP-main/model-card.md`

### Chunking/splitting

- `content/TinyGraphRAG/tinygraph/graph.py`
- `content/TinyLLM/code/preprocess.py`
- `content/CDDRS/CDDRS.md`
- `content/CDDRS/readme.md`
- `content/TinyGraphRAG/readme.md`
- `content/TinyLLM/README.md`
- `content/TinyRAG/readme.md`
- `content/TinyIMGRAG/packages/CLIP-main/model-card.md`

### Embedding/vector index

- `content/TinyRAG/RAG/Embeddings.py`
- `content/TinyGraphRAG/tinygraph/embedding/base.py`
- `content/TinyGraphRAG/tinygraph/embedding/zhipu.py`
- `content/TinyRAG/down_model.py`
- `content/TinyTransformer/tiny_transformer.py`
- `content/TinyDiffusion/ddpm/unet.py`
- `content/TinyGraphRAG/tinygraph/graph.py`
- `content/TinyGraphRAG/tinygraph/prompt.py`
- `content/TinyIMGRAG/IMGRAG/ImgRetrieval.py`
- `content/TinyLLM/code/model.py`
- `content/TinyRAG/RAG/VectorBase.py`
- `content/TinyIMGRAG/packages/CLIP-main/clip/model.py`
- ... 6 more

### Retrieval/search/rerank

- `content/TinyIMGRAG/IMGRAG/ImgRetrieval.py`
- `content/TinyIMGRAG/main.py`
- `content/TinyAgent/tinyAgent/tool.py`
- `content/TinyIMGRAG/IMGRAG/ImgEvaluator.py`
- `content/TinyIMGRAG/IMGRAG/ImgGenerator.py`
- `content/TinyIMGRAG/IMGRAG/RewritePrompt.py`
- `README.md`
- `content/CDDRS/CDDRS.md`
- `content/CDDRS/readme.md`
- `content/TinyAgent/readme.md`
- `content/TinyIMGRAG/README.md`
- `content/TinyRAG/readme.md`
- ... 1 more

### Wiki/graph/entity model

- `content/TinyGraphRAG/tinygraph/graph.py`
- `content/TinyGraphRAG/tinygraph/prompt.py`
- `README.md`
- `content/CDDRS/CDDRS.md`
- `content/CDDRS/readme.md`
- `content/TinyGraphRAG/readme.md`
- `content/TinyIMGRAG/packages/CLIP-main/model-card.md`

### Memory/update lifecycle

- `content/TinyIMGRAG/main.py`
- `content/TinyGraphRAG/tinygraph/graph.py`
- `content/TinyGraphRAG/tinygraph/prompt.py`
- `content/TinyIMGRAG/IMGRAG/ImgEvaluator.py`
- `content/TinyIMGRAG/IMGRAG/ImgGenerator.py`
- `content/TinyIMGRAG/IMGRAG/ImgRetrieval.py`
- `content/TinyIMGRAG/IMGRAG/RewritePrompt.py`
- `content/TinyLLM/code/model.py`
- `content/TinyLLM/code/train_vocab.py`
- `content/TinyIMGRAG/packages/CLIP-main/hubconf.py`
- `content/TinyIMGRAG/packages/CLIP-main/clip/clip.py`
- `content/TinyIMGRAG/packages/CLIP-main/clip/simple_tokenizer.py`
- ... 6 more

### Provenance/citation/evidence

- `content/TinyGraphRAG/tinygraph/prompt.py`
- `content/TinyGraphRAG/readme.md`
- `content/TinyIMGRAG/packages/CLIP-main/model-card.md`

### Evaluation/observability

- `content/TinyEval/eval.py`
- `content/TinyEval/inference.py`
- `content/TinyIMGRAG/main.py`
- `content/TinyAgent/tinyAgent/LLM.py`
- `content/TinyDiffusion/ddpm/metrics.py`
- `content/TinyDiffusion/ddpm/train.py`
- `content/TinyEval/Eval/metrics.py`
- `content/TinyLLM/code/model.py`
- `content/TinyLLM/code/train.py`
- `content/TinyEval/Eval/model/LLM.py`
- `content/TinyIMGRAG/packages/CLIP-main/clip/clip.py`
- `content/TinyIMGRAG/packages/CLIP-main/clip/model.py`
- ... 6 more

### Agent/MCP/tool surface

- `content/TinyAgent/tinyAgent/Agent.py`
- `content/TinyRAG/RAG/Embeddings.py`
- `content/TinyRAG/RAG/LLM.py`
- `content/TinyIMGRAG/packages/CLIP-main/setup.py`
- `README.md`
- `content/CDDRS/CDDRS.md`
- `content/CDDRS/readme.md`
- `content/TinyAgent/readme.md`
- `content/TinyIMGRAG/README.md`
- `content/TinyRAG/readme.md`
- `content/TinyRAG/requirements.txt`
- `content/TinyIMGRAG/packages/CLIP-main/model-card.md`
- ... 2 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| content/TinyDiffusion/ddpm/dataloader.py | 5 | from torch.utils.data import DataLoader |
| content/TinyDiffusion/ddpm/dataloader.py | 9 | def load_transformed_dataset(img_size=32, batch_size=128) -> DataLoader: |
| content/TinyDiffusion/ddpm/dataloader.py | 34 | # 创建 DataLoader |
| content/TinyDiffusion/ddpm/dataloader.py | 35 | train_loader = DataLoader(train_dataset, |
| content/TinyDiffusion/ddpm/dataloader.py | 40 | test_loader = DataLoader(test_dataset, |
| content/TinyDiffusion/ddpm/diffusion.py | 111 | from dataloader import load_transformed_dataset, show_tensor_image |
| content/TinyDiffusion/ddpm/metrics.py | 9 | from torch.utils.data import DataLoader, TensorDataset |
| content/TinyDiffusion/ddpm/metrics.py | 38 | dataloader = DataLoader(dataset, batch_size=32) |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| content/TinyRAG/RAG/utils.py | 16 | import html2text |
| content/TinyRAG/RAG/utils.py | 20 | from bs4 import BeautifulSoup |
| content/TinyRAG/RAG/utils.py | 47 | elif filename.endswith(".pdf"): |
| content/TinyRAG/RAG/utils.py | 111 | if file_path.endswith('.pdf'): |
| content/TinyRAG/RAG/utils.py | 122 | # 读取PDF文件 |
| content/TinyRAG/RAG/utils.py | 127 | text += reader.pages[page_num].extract_text() |
| content/TinyRAG/RAG/utils.py | 136 | # 使用BeautifulSoup从HTML中提取纯文本 |
| content/TinyRAG/RAG/utils.py | 137 | soup = BeautifulSoup(html_text, 'html.parser') |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| content/TinyGraphRAG/tinygraph/graph.py | 70 | self.chunk_path = os.path.join(working_dir, "chunk.json") |
| content/TinyGraphRAG/tinygraph/graph.py | 118 | def split_text(self,file_path:str, segment_length=300, overlap_length=50) -> Dict: |
| content/TinyGraphRAG/tinygraph/graph.py | 148 | chunks.update({compute_mdhash_id(segement, prefix="chunk-"): segement}) |
| content/TinyGraphRAG/tinygraph/graph.py | 248 | chunks = self.split_text(filepath) |
| content/TinyGraphRAG/tinygraph/graph.py | 277 | f"An error occurred while processing chunk '{chunk_id}'. SKIPPING..." |
| content/TinyLLM/code/preprocess.py | 171 | chunk = torch.from_numpy((m[start:end]).astype(np.int64)) |
| content/TinyLLM/code/preprocess.py | 173 | x = chunk[:-1] |
| content/TinyLLM/code/preprocess.py | 175 | y = chunk[1:] |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| content/TinyRAG/RAG/Embeddings.py | 4 | @File : Embeddings.py |
| content/TinyRAG/RAG/Embeddings.py | 23 | Base class for embeddings |
| content/TinyRAG/RAG/Embeddings.py | 46 | class for OpenAI embeddings |
| content/TinyRAG/RAG/Embeddings.py | 56 | def get_embedding(self, text: str, model: str = "text-embedding-3-large") -> List[float]: |
| content/TinyRAG/RAG/Embeddings.py | 59 | return self.client.embeddings.create(input=[text], model=model).data[0].embedding |
| content/TinyRAG/RAG/Embeddings.py | 65 | class for Jina embeddings |
| content/TinyRAG/RAG/Embeddings.py | 67 | def __init__(self, path: str = 'jinaai/jina-embeddings-v2-base-zh', is_api: bool = False) -> None: |
| content/TinyRAG/RAG/Embeddings.py | 86 | class for Zhipu embeddings |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| content/TinyIMGRAG/IMGRAG/ImgRetrieval.py | 8 | @Desc : Image Generation and Retrieval Pipeline with careful GPU memory management |
| content/TinyIMGRAG/main.py | 8 | @Desc : Image Generation and Retrieval Pipeline with careful GPU memory management |
| content/TinyIMGRAG/main.py | 113 | "but do not use 'A different conception'. I would like to use this conception to search " |
| content/TinyIMGRAG/main.py | 122 | """Validate which concepts are suitable for image retrieval""" |
| content/TinyIMGRAG/main.py | 139 | """Retrieve reference images using CLIP similarity""" |
| content/TinyIMGRAG/main.py | 207 | print(f"Valid concepts for retrieval: {valid_concepts}") |
| content/TinyIMGRAG/main.py | 210 | print("No valid concepts found for retrieval.") |
| content/TinyIMGRAG/main.py | 213 | # Step 5: Retrieve reference images |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| content/TinyGraphRAG/tinygraph/graph.py | 71 | self.community_path = os.path.join(working_dir, "community.json") |
| content/TinyGraphRAG/tinygraph/graph.py | 83 | 创建一个三元组（Triplet）并将其存储到Neo4j数据库中。 |
| content/TinyGraphRAG/tinygraph/graph.py | 95 | "MERGE (a:Entity {name: $subject_name, description: $subject_desc, chunks_id: $subject_chunks_id, entity_id: $subject_entity_id}) " |
| content/TinyGraphRAG/tinygraph/graph.py | 96 | "MERGE (b:Entity {name: $object_name, description: $object_desc, chunks_id: $object_chunks_id, entity_id: $object_entity_id}) " |
| content/TinyGraphRAG/tinygraph/graph.py | 108 | subject_entity_id=subject["entity id"], |
| content/TinyGraphRAG/tinygraph/graph.py | 112 | object_entity_id=object["entity id"], |
| content/TinyGraphRAG/tinygraph/graph.py | 175 | concept["entity id"] = compute_mdhash_id( |
| content/TinyGraphRAG/tinygraph/graph.py | 176 | concept["description"], prefix="entity-" |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| content/TinyIMGRAG/main.py | 8 | @Desc : Image Generation and Retrieval Pipeline with careful GPU memory management |
| content/TinyIMGRAG/main.py | 54 | """Clean up all models to free GPU memory""" |
| content/TinyIMGRAG/main.py | 79 | print("GPU cache cleared") |
| content/TinyGraphRAG/tinygraph/graph.py | 95 | "MERGE (a:Entity {name: $subject_name, description: $subject_desc, chunks_id: $subject_chunks_id, entity_id: $subject_entity_id}) " |
| content/TinyGraphRAG/tinygraph/graph.py | 96 | "MERGE (b:Entity {name: $object_name, description: $object_desc, chunks_id: $object_chunks_id, entity_id: $object_entity_id}) " |
| content/TinyGraphRAG/tinygraph/graph.py | 97 | "MERGE (a)-[r:Relationship {name: $predicate}]->(b) " |
| content/TinyGraphRAG/tinygraph/graph.py | 258 | # Merge new chunks with existing chunks |
| content/TinyGraphRAG/tinygraph/graph.py | 332 | # ================ Merge Entities ================ |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| content/TinyGraphRAG/tinygraph/prompt.py | 211 | Do not include information where the supporting evidence for it is not provided. |
| content/TinyGraphRAG/tinygraph/prompt.py | 292 | Do not include information where the supporting evidence for it is not provided. |
| content/TinyGraphRAG/tinygraph/prompt.py | 320 | Do not include information where the supporting evidence for it is not provided. |
| content/TinyGraphRAG/tinygraph/prompt.py | 343 | Do not include information where the supporting evidence for it is not provided. |
| content/TinyGraphRAG/readme.md | 920 | Do not include information where the supporting evidence for it is not provided. |
| content/TinyGraphRAG/readme.md | 1005 | Do not include information where the supporting evidence for it is not provided. |
| content/TinyGraphRAG/readme.md | 1251 | Do not include information where the supporting evidence for it is not provided. |
| content/TinyGraphRAG/readme.md | 1274 | Do not include information where the supporting evidence for it is not provided. |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| content/TinyEval/eval.py | 7 | from Eval.metrics import ( |
| content/TinyEval/eval.py | 48 | path = f"Eval/pred/{args.model}/" |
| content/TinyEval/eval.py | 69 | out_path = f"Eval/pred/{args.model}/result.json" |
| content/TinyEval/inference.py | 10 | from Eval.model.LLM import internlm2Chat, Qwen2Chat |
| content/TinyEval/inference.py | 17 | torch.backends.cudnn.benchmark = False |
| content/TinyEval/inference.py | 31 | model2path = json.load(open("Eval/config/model2path.json", "r")) |
| content/TinyEval/inference.py | 32 | model2maxlen = json.load(open("Eval/config/model2maxlen.json", "r")) |
| content/TinyEval/inference.py | 33 | adapter2path = json.load(open("Eval/config/adapter2path.json", "r")) |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| content/TinyAgent/tinyAgent/Agent.py | 28 | class Agent: |
| content/TinyAgent/tinyAgent/Agent.py | 75 | agent = Agent('/root/share/model_repos/internlm2-chat-7b') |
| content/TinyAgent/tinyAgent/Agent.py | 76 | prompt = agent.build_system_input() |
| content/TinyRAG/RAG/Embeddings.py | 46 | class for OpenAI embeddings |
| content/TinyRAG/RAG/Embeddings.py | 51 | from openai import OpenAI |
| content/TinyRAG/RAG/Embeddings.py | 52 | self.client = OpenAI() |
| content/TinyRAG/RAG/LLM.py | 49 | from openai import OpenAI |
| content/TinyRAG/RAG/LLM.py | 50 | client = OpenAI() |

## Gap

- ci
