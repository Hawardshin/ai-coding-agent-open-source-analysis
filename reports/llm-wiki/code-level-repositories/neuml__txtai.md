# neuml/txtai 코드 레벨 분석

생성일: 2026-06-17T23:31:48.896Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | A integrated platform (92) |
| stars | 12669 |
| language | Python |
| tags | rag, agent-knowledge, korea-signal |
| files/code/source | 576/373/268 |
| tests/ci | 94/9 |
| local path | sources/neuml__txtai |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 7 | 4 | src/python/txtai/cloud/hub.py:62 # Upload files |
| Parsing/OCR/document extraction | code | 15 | 4 | src/python/txtai/pipeline/data/filetohtml.py:12 from tika import detector, parser |
| Chunking/splitting | code | 40 | 25 | src/python/txtai/data/questions.py:21 stride: chunk size for splitting data for QA tasks |
| Embedding/vector index | code | 149 | 69 | src/python/txtai/embeddings/__init__.py:2 Embeddings imports |
| Retrieval/search/rerank | code | 127 | 63 | src/python/txtai/ann/base.py:13 Base class for ANN instances. This class builds vector indexes to support similarity search. |
| Wiki/graph/entity model | code | 23 | 7 | src/python/txtai/graph/base.py:45 self.relations = {} |
| Memory/update lifecycle | code | 105 | 55 | src/python/txtai/agent/base.py:24 def __init__(self, template=None, memory=None, **kwargs): |
| Provenance/citation/evidence | doc-only | 5 | 0 | README.md:159 \| [Build RAG pipelines with txtai](https://github.com/neuml/txtai/blob/master/examples/52_Build_RAG_pipelines_with_txtai.ipynb) [▶️](https://www.youtube.com/watch?v=t_OeAc8NVfQ) \| Guide on retrieval augmented generation |
| Evaluation/observability | code | 19 | 9 | src/python/txtai/pipeline/hfpipeline.py:60 # Model quantization. Compresses model to int8 precision, improves runtime performance. Only supported on CPU. |
| Agent/MCP/tool surface | code | 40 | 12 | src/python/txtai/__init__.py:8 from .agent import Agent |

## 의존성 신호

_없음_

## 주요 파일 후보

### Ingestion/source intake

- `src/python/txtai/cloud/hub.py`
- `src/python/txtai/cloud/storage.py`
- `src/python/txtai/api/routers/__init__.py`
- `src/python/txtai/api/routers/upload.py`
- `examples/workflows.py`
- `test/python/testcloud.py`
- `test/python/testapi/testapipipeline.py`

### Parsing/OCR/document extraction

- `src/python/txtai/pipeline/data/filetohtml.py`
- `src/python/txtai/pipeline/data/htmltomd.py`
- `src/python/txtai/pipeline/data/textractor.py`
- `setup.py`
- `test/python/testarchive.py`
- `test/python/testoptional.py`
- `test/python/testworkflow.py`
- `test/python/testapi/testapipipeline.py`
- `test/python/testpipeline/testdata/testfiletohtml.py`
- `test/python/testpipeline/testdata/testtextractor.py`
- `README.md`
- `docs/further.md`
- ... 3 more

### Chunking/splitting

- `src/python/txtai/data/questions.py`
- `src/python/txtai/data/texts.py`
- `src/python/txtai/models/tokendetection.py`
- `src/python/txtai/pipeline/hfmodel.py`
- `src/python/txtai/workflow/base.py`
- `src/python/txtai/ann/dense/ggml.py`
- `src/python/txtai/api/routers/openai.py`
- `src/python/txtai/api/routers/segmentation.py`
- `src/python/txtai/models/pooling/base.py`
- `src/python/txtai/pipeline/audio/audiomixer.py`
- `src/python/txtai/pipeline/audio/audiostream.py`
- `src/python/txtai/pipeline/audio/microphone.py`
- ... 6 more

### Embedding/vector index

- `src/python/txtai/embeddings/__init__.py`
- `src/python/txtai/embeddings/base.py`
- `src/python/txtai/agent/tool/embeddings.py`
- `src/python/txtai/api/routers/embeddings.py`
- `src/python/txtai/embeddings/index/functions.py`
- `src/python/txtai/embeddings/index/indexes.py`
- `src/python/txtai/embeddings/index/indexids.py`
- `src/python/txtai/embeddings/index/reducer.py`
- `src/python/txtai/embeddings/index/stream.py`
- `src/python/txtai/embeddings/index/transform.py`
- `src/python/txtai/embeddings/search/base.py`
- `src/python/txtai/embeddings/search/errors.py`
- ... 6 more

### Retrieval/search/rerank

- `src/python/txtai/ann/base.py`
- `src/python/txtai/api/base.py`
- `src/python/txtai/api/cluster.py`
- `src/python/txtai/app/base.py`
- `src/python/txtai/cloud/base.py`
- `src/python/txtai/console/base.py`
- `src/python/txtai/data/questions.py`
- `src/python/txtai/database/base.py`
- `src/python/txtai/database/duckdb.py`
- `src/python/txtai/database/rdbms.py`
- `src/python/txtai/embeddings/__init__.py`
- `src/python/txtai/embeddings/base.py`
- ... 6 more

### Wiki/graph/entity model

- `src/python/txtai/graph/base.py`
- `src/python/txtai/graph/networkx.py`
- `src/python/txtai/graph/topics.py`
- `src/python/txtai/api/routers/__init__.py`
- `src/python/txtai/api/routers/entity.py`
- `src/python/txtai/pipeline/text/__init__.py`
- `src/python/txtai/pipeline/text/entity.py`
- `mkdocs.yml`
- `examples/benchmarks.py`
- `test/python/testgraph.py`
- `test/python/testoptional.py`
- `test/python/testapi/testapipipeline.py`
- ... 6 more

### Memory/update lifecycle

- `src/python/txtai/agent/base.py`
- `src/python/txtai/ann/base.py`
- `src/python/txtai/api/base.py`
- `src/python/txtai/api/cluster.py`
- `src/python/txtai/app/base.py`
- `src/python/txtai/cloud/base.py`
- `src/python/txtai/cloud/hub.py`
- `src/python/txtai/data/texts.py`
- `src/python/txtai/database/base.py`
- `src/python/txtai/database/client.py`
- `src/python/txtai/database/duckdb.py`
- `src/python/txtai/database/rdbms.py`
- ... 6 more

### Provenance/citation/evidence

- `README.md`
- `docs/usecases.md`
- `docs/pipeline/llm/llm.md`
- `docs/pipeline/llm/rag.md`
- `docs/examples.md`

### Evaluation/observability

- `src/python/txtai/pipeline/hfpipeline.py`
- `src/python/txtai/ann/dense/annoy.py`
- `src/python/txtai/ann/dense/hnsw.py`
- `src/python/txtai/ann/dense/pgvector.py`
- `src/python/txtai/ann/sparse/ivfsparse.py`
- `src/python/txtai/models/pooling/last.py`
- `src/python/txtai/pipeline/train/hfonnx.py`
- `src/python/txtai/pipeline/train/hftrainer.py`
- `src/python/txtai/vectors/dense/words.py`
- `mkdocs.yml`
- `examples/baseball.py`
- `examples/benchmarks.py`
- ... 6 more

### Agent/MCP/tool surface

- `src/python/txtai/__init__.py`
- `src/python/txtai/agent/__init__.py`
- `src/python/txtai/agent/base.py`
- `src/python/txtai/agent/factory.py`
- `src/python/txtai/agent/placeholder.py`
- `src/python/txtai/api/application.py`
- `src/python/txtai/app/base.py`
- `src/python/txtai/agent/tool/factory.py`
- `src/python/txtai/api/routers/__init__.py`
- `src/python/txtai/api/routers/agent.py`
- `src/python/txtai/api/routers/openai.py`
- `setup.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| src/python/txtai/cloud/hub.py | 62 | # Upload files |
| src/python/txtai/cloud/hub.py | 96 | # Upload file |
| src/python/txtai/cloud/storage.py | 101 | # Upload files |
| src/python/txtai/api/routers/__init__.py | 25 | from . import upload |
| src/python/txtai/api/routers/upload.py | 2 | Defines API paths for upload endpoints. |
| src/python/txtai/api/routers/upload.py | 18 | @router.post("/upload") |
| src/python/txtai/api/routers/upload.py | 19 | def upload(files: List[UploadFile] = File(), suffix: str = Form(default=None)): |
| src/python/txtai/api/routers/upload.py | 24 | data: list of files to upload |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| src/python/txtai/pipeline/data/filetohtml.py | 12 | from tika import detector, parser |
| src/python/txtai/pipeline/data/filetohtml.py | 14 | TIKA = True |
| src/python/txtai/pipeline/data/filetohtml.py | 16 | TIKA = False |
| src/python/txtai/pipeline/data/filetohtml.py | 39 | backend: backend to use to extract content, supports "tika", "docling" or "available" (default) which finds the first available |
| src/python/txtai/pipeline/data/filetohtml.py | 47 | backend = "tika" if Tika.available() else "docling" if Docling.available() else None |
| src/python/txtai/pipeline/data/filetohtml.py | 50 | self.backend = Tika() if backend == "tika" else Docling() if backend == "docling" else None |
| src/python/txtai/pipeline/data/filetohtml.py | 66 | class Tika: |
| src/python/txtai/pipeline/data/filetohtml.py | 68 | File to HTML conversion via Apache Tika. |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| src/python/txtai/data/questions.py | 21 | stride: chunk size for splitting data for QA tasks |
| src/python/txtai/data/texts.py | 50 | Concatenates tokenized text into chunks of maxlength. This method guarantees that each chunk is maxlength |
| src/python/txtai/data/texts.py | 68 | # Ensure total is multiple of maxlength, drop last incomplete chunk |
| src/python/txtai/models/tokendetection.py | 64 | token_type_ids: segment token indices |
| src/python/txtai/pipeline/hfmodel.py | 118 | for chunk in self.batch(ids, tokenizer.model_max_length - 1): |
| src/python/txtai/pipeline/hfmodel.py | 120 | if chunk[-1] != tokenizer.eos_token_id: |
| src/python/txtai/pipeline/hfmodel.py | 121 | chunk.append(tokenizer.eos_token_id) |
| src/python/txtai/pipeline/hfmodel.py | 124 | mask = [1] * len(chunk) |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| src/python/txtai/embeddings/__init__.py | 2 | Embeddings imports |
| src/python/txtai/embeddings/__init__.py | 5 | from .base import Embeddings |
| src/python/txtai/embeddings/base.py | 2 | Embeddings module |
| src/python/txtai/embeddings/base.py | 22 | class Embeddings: |
| src/python/txtai/embeddings/base.py | 24 | Embeddings databases are the engine that delivers semantic search. Data is transformed into embeddings vectors where similar concepts |
| src/python/txtai/embeddings/base.py | 32 | Creates a new embeddings index. Embeddings indexes are thread-safe for read operations but writes must be synchronized. |
| src/python/txtai/embeddings/base.py | 35 | config: embeddings configuration |
| src/python/txtai/embeddings/base.py | 36 | models: models cache, used for model sharing between embeddings |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| src/python/txtai/ann/base.py | 13 | Base class for ANN instances. This class builds vector indexes to support similarity search. |
| src/python/txtai/ann/base.py | 71 | def search(self, queries, limit): |
| src/python/txtai/api/base.py | 28 | def search(self, query, limit=None, weights=None, index=None, parameters=None, graph=False, request=None): |
| src/python/txtai/api/base.py | 29 | # When search is invoked via the API, limit is set from the request |
| src/python/txtai/api/base.py | 30 | # When search is invoked directly, limit is set using the method parameter |
| src/python/txtai/api/base.py | 41 | return self.cluster.search(query, limit, weights, index, parameters, graph) |
| src/python/txtai/api/base.py | 43 | return super().search(query, limit, weights, index, parameters, graph) |
| src/python/txtai/api/cluster.py | 41 | def search(self, query, limit=None, weights=None, index=None, parameters=None, graph=False): |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| src/python/txtai/graph/base.py | 45 | self.relations = {} |
| src/python/txtai/graph/base.py | 329 | Run community detection on the graph. |
| src/python/txtai/graph/base.py | 410 | relations, attributes = None, {} |
| src/python/txtai/graph/base.py | 415 | relations = document.get(self.relationships) |
| src/python/txtai/graph/base.py | 437 | self.addrelations(index, relations) |
| src/python/txtai/graph/base.py | 570 | def addrelations(self, node, relations): |
| src/python/txtai/graph/base.py | 576 | relations: list of relationships to add |
| src/python/txtai/graph/base.py | 580 | if relations: |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| src/python/txtai/agent/base.py | 24 | def __init__(self, template=None, memory=None, **kwargs): |
| src/python/txtai/agent/base.py | 29 | template: optional prompt jinja template, must include {{ text }} and {{ memory }} placeholders |
| src/python/txtai/agent/base.py | 30 | memory: number of prior outputs to keep as "memory", defaults to None for no memory |
| src/python/txtai/agent/base.py | 48 | # Agent memory |
| src/python/txtai/agent/base.py | 49 | self.memory = {} |
| src/python/txtai/agent/base.py | 50 | self.window = memory |
| src/python/txtai/agent/base.py | 57 | {% if memory %} |
| src/python/txtai/agent/base.py | 60 | {{ memory }} |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| README.md | 159 | \| [Build RAG pipelines with txtai](https://github.com/neuml/txtai/blob/master/examples/52_Build_RAG_pipelines_with_txtai.ipynb) [▶️](https://www.youtube.com/watch?v=t_OeAc8NVfQ) \| Guide on retrieval augmented generation |
| docs/usecases.md | 67 | \| [Build RAG pipelines with txtai](https://github.com/neuml/txtai/blob/master/examples/52_Build_RAG_pipelines_with_txtai.ipynb) [▶️](https://www.youtube.com/watch?v=t_OeAc8NVfQ) \| Guide on retrieval augmented generation |
| docs/pipeline/llm/llm.md | 141 | \| [Build RAG pipelines with txtai](https://github.com/neuml/txtai/blob/master/examples/52_Build_RAG_pipelines_with_txtai.ipynb) [▶️](https://www.youtube.com/watch?v=t_OeAc8NVfQ) \| Guide on retrieval augmented generation |
| docs/pipeline/llm/rag.md | 96 | \| [Build RAG pipelines with txtai](https://github.com/neuml/txtai/blob/master/examples/52_Build_RAG_pipelines_with_txtai.ipynb) [▶️](https://www.youtube.com/watch?v=t_OeAc8NVfQ) \| Guide on retrieval augmented generation |
| docs/examples.md | 34 | \| [Build RAG pipelines with txtai](https://github.com/neuml/txtai/blob/master/examples/52_Build_RAG_pipelines_with_txtai.ipynb) [▶️](https://www.youtube.com/watch?v=t_OeAc8NVfQ) \| Guide on retrieval augmented generation |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| src/python/txtai/pipeline/hfpipeline.py | 60 | # Model quantization. Compresses model to int8 precision, improves runtime performance. Only supported on CPU. |
| src/python/txtai/ann/dense/annoy.py | 30 | self.backend = AnnoyIndex(self.config["dimensions"], self.config["metric"]) |
| src/python/txtai/ann/dense/annoy.py | 35 | self.config["metric"] = "dot" |
| src/python/txtai/ann/dense/annoy.py | 38 | self.backend = AnnoyIndex(self.config["dimensions"], self.config["metric"]) |
| src/python/txtai/ann/dense/hnsw.py | 35 | self.backend = Index(dim=self.config["dimensions"], space=self.config["metric"]) |
| src/python/txtai/ann/dense/hnsw.py | 40 | self.config["metric"] = "ip" |
| src/python/txtai/ann/dense/hnsw.py | 48 | self.backend = Index(dim=self.config["dimensions"], space=self.config["metric"]) |
| src/python/txtai/ann/dense/pgvector.py | 240 | if self.setting("precision") == "half": |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| src/python/txtai/__init__.py | 8 | from .agent import Agent |
| src/python/txtai/agent/__init__.py | 2 | Agent imports |
| src/python/txtai/agent/__init__.py | 7 | from .base import Agent |
| src/python/txtai/agent/__init__.py | 12 | from .placeholder import Agent |
| src/python/txtai/agent/base.py | 2 | Agent module |
| src/python/txtai/agent/base.py | 14 | class Agent: |
| src/python/txtai/agent/base.py | 16 | An agent automatically creates workflows to answer multi-faceted user requests. Agents iteratively prompt and/or interface with tools to |
| src/python/txtai/agent/base.py | 19 | Agents excel at complex tasks where multiple tools and/or methods are required. They incorporate a level of randomness similar to different |

## Gap

- Provenance/citation/evidence
