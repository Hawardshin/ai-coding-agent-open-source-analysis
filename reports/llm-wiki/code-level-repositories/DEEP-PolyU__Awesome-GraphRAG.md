# DEEP-PolyU/Awesome-GraphRAG 코드 레벨 분석

생성일: 2026-06-17T23:31:32.334Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | curated-list/tutorial |
| maturity | D small/demo/list (0) |
| stars | 2474 |
| language |  |
| tags | rag, knowledge-base, korea-signal |
| files/code/source | 2/0/0 |
| tests/ci | 0/0 |
| local path | sources/DEEP-PolyU__Awesome-GraphRAG |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | absent | 0 | 0 |  |
| Parsing/OCR/document extraction | doc-only | 1 | 0 | README.md:131 - (CoRL 2023) **Sayplan: Grounding large language models using 3d scene graphs for scalable robot task planning** [[Paper]](https://proceedings.mlr.press/v229/rana23a/rana23a.pdf) |
| Chunking/splitting | absent | 0 | 0 |  |
| Embedding/vector index | doc-only | 1 | 0 | README.md:335 - [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/topoteretes/cognee) Cognee: Open-source memory engine that turns data into knowledge graphs via |
| Retrieval/search/rerank | doc-only | 1 | 0 | README.md:12 This repository contains a curated list of resources on graph-based retrieval-augmented generation (GraphRAG), which are classified according to "[**A Survey of Graph Retrieval-Augmented Generation for Customized Large L |
| Wiki/graph/entity model | doc-only | 1 | 0 | README.md:1 # Awesome-GraphRAG (GraphRAG Survey) |
| Memory/update lifecycle | doc-only | 1 | 0 | README.md:19 - **[2026-05-17]** Our **[MemGraphRAG](https://github.com/XMUDeepLIT/MemGraphRAG)** for memory-enhanced RAG is accepted by KDD'26. |
| Provenance/citation/evidence | doc-only | 1 | 0 | README.md:15 **📃 Please [cite our paper](#-citation)** if you find our survey or repository helpful! |
| Evaluation/observability | doc-only | 1 | 0 | README.md:25 - **[2026-01-26]** Our **[GraphRAG Benchmark](https://github.com/GraphRAG-Bench/GraphRAG-Benchmark)** is accepted by ICLR’26. |
| Agent/MCP/tool surface | doc-only | 1 | 0 | README.md:112 - (arXiv 2025) **Multi-Agent GraphRAG: A Text-to-Cypher Framework for Labeled Property Graphs** [[Paper]](https://arxiv.org/abs/2510.09156) |

## 의존성 신호

_없음_

## 주요 파일 후보

### Parsing/OCR/document extraction

- `README.md`

### Embedding/vector index

- `README.md`

### Retrieval/search/rerank

- `README.md`

### Wiki/graph/entity model

- `README.md`

### Memory/update lifecycle

- `README.md`

### Provenance/citation/evidence

- `README.md`

### Evaluation/observability

- `README.md`

### Agent/MCP/tool surface

- `README.md`

## Evidence lines

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| README.md | 131 | - (CoRL 2023) **Sayplan: Grounding large language models using 3d scene graphs for scalable robot task planning** [[Paper]](https://proceedings.mlr.press/v229/rana23a/rana23a.pdf) |
| README.md | 140 | - (EMNLP 2025) **MaGiX: A Multi-Granular Adaptive Graph Intelligence Framework for Enhancing Cross-Lingual RAG** [[Paper]](https://aclanthology.org/anthology-files/anthology-files/pdf/findings/2025.findings-emnlp.279.pdf |
| README.md | 152 | - (EDBT 2025) **DBCopilot: Natural Language Querying over Massive Databases via Schema Routing** [[Paper]](https://openproceedings.org/2025/conf/edbt/paper-209.pdf) |
| README.md | 154 | - (EMNLP 2024) **Structure Guided Prompt: Instructing Large Language Model in Multi-Step Reasoning by Exploring Graph Structure of the Text** [[Paper]](https://aclanthology.org/2024.emnlp-main.528.pdf) |
| README.md | 161 | - (ACL 2019) **Using Local Knowledge Graph Construction to Scale Seq2Seq Models to Multi-Document Inputs** [[Paper]](https://aclanthology.org/D19-1428.pdf) |
| README.md | 213 | - (EMNLP 2024) **Structure Guided Prompt: Instructing Large Language Model in Multi-Step Reasoning by Exploring Graph Structure of the Text** [[Paper]](https://aclanthology.org/2024.emnlp-main.528.pdf) |
| README.md | 249 | - (arXiv 2024) **MuseGraph: Graph-oriented Instruction Tuning of Large Language Models for Generic Graph Mining** [[Paper]](https://arXiv.org/pdf/2403.04780) |
| README.md | 254 | - (ICML 2024) **Llaga: Large language and graph assistant** [[Paper]](https://openreview.net/pdf?id=B48Pzc4oKi) |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| README.md | 335 | - [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/topoteretes/cognee) Cognee: Open-source memory engine that turns data into knowledge graphs via |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| README.md | 12 | This repository contains a curated list of resources on graph-based retrieval-augmented generation (GraphRAG), which are classified according to "[**A Survey of Graph Retrieval-Augmented Generation for Customized Large L |
| README.md | 21 | - **[2026-04-07]** Our **[BAPO](https://github.com/Liushiyu-0709/BAPO-Reliable-Search.git)** for reliable agentic search is accepted by ACL'26. |
| README.md | 52 | entity relationships and domain hierarchies, **(ii) graph-aware retrieval mechanisms** that enable multi-hop reasoning and context-preserving knowledge acquisition, and **(iii) structure-guided |
| README.md | 53 | knowledge search algorithms** that ensure efficient retrieval across large-scale corpora. |
| README.md | 77 | - [Knowledge Retrieval](#knowledge-retrieval) |
| README.md | 78 | - [Semantics Similarity-based Retriever](#semantics-similarity-based-retriever) |
| README.md | 79 | - [Logical Reasoning-based Retriever](#logical-reasoning-based-retriever) |
| README.md | 80 | - [LLM-based Retriever](#llm-based-retriever) |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| README.md | 1 | # Awesome-GraphRAG (GraphRAG Survey) |
| README.md | 7 | <a href="http://makeapullrequest.com"><img src="https://img.shields.io/github/last-commit/DEEP-PolyU/Awesome-GraphRAG?color=blue"/></a> |
| README.md | 8 | <a href="http://makeapullrequest.com"><img src="https://img.shields.io/github/stars/DEEP-PolyU/Awesome-GraphRAG"/></a> |
| README.md | 12 | This repository contains a curated list of resources on graph-based retrieval-augmented generation (GraphRAG), which are classified according to "[**A Survey of Graph Retrieval-Augmented Generation for Customized Large L |
| README.md | 23 | - **[2026-04-07]** Our **[LogicPoison](https://github.com/Jord8061/logicPoison.git)**, a GraphRAG attack model, is accepted by ACL'26. |
| README.md | 24 | - **[2026-01-26]** Our **[LinearRAG](https://github.com/DEEP-PolyU/LinearRAG)** for efficient GraphRAG is accepted by ICLR’26. |
| README.md | 25 | - **[2026-01-26]** Our **[GraphRAG Benchmark](https://github.com/GraphRAG-Bench/GraphRAG-Benchmark)** is accepted by ICLR’26. |
| README.md | 27 | - **[2025-10-27]** We release **[LinearRAG](https://github.com/DEEP-PolyU/LinearRAG)**, a relation-free graph construction method for efficient GraphRAG. |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| README.md | 19 | - **[2026-05-17]** Our **[MemGraphRAG](https://github.com/XMUDeepLIT/MemGraphRAG)** for memory-enhanced RAG is accepted by KDD'26. |
| README.md | 114 | - (ICML 2025) **HippoRAG2: From RAG to Memory: Non-Parametric Continual Learning for Large Language Models** [[Paper]](https://arxiv.org/abs/2502.14802) |
| README.md | 302 | \| SimpleQuestion \| Simple Question Answering \| [[arXiv 2015]](https://arXiv.org/abs/1506.02075) \| [[Github]](https://github.com/Jerryzhao-z/simple-question-answering-with-memory-networks) \| |
| README.md | 335 | - [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/topoteretes/cognee) Cognee: Open-source memory engine that turns data into knowledge graphs via |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| README.md | 15 | **📃 Please [cite our paper](#-citation)** if you find our survey or repository helpful! |
| README.md | 67 | - [🍀 Citation](#-citation) |
| README.md | 162 | - (SIGIR 2019) **Answering complex questions by joining multi-document evidence with quasi knowledge graphs** [[Paper]](https://dl.acm.org/doi/10.1145/3331184.3331252) |
| README.md | 221 | - (arXiv 2025) **CG-RAG: Research Question Answering by Citation Graph Retrieval-Augmented LLMs** [[Paper]](https://arxiv.org/abs/2501.15067) |
| README.md | 321 | - [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/bibinprathap/VeritasGraph) Graph RAG pipeline that runs locally with ollama and has full source |
| README.md | 337 | # 🍀 Citation |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| README.md | 25 | - **[2026-01-26]** Our **[GraphRAG Benchmark](https://github.com/GraphRAG-Bench/GraphRAG-Benchmark)** is accepted by ICLR’26. |
| README.md | 28 | - **[2025-06-06]** We release the **[GraphRAG Benchmark](https://github.com/GraphRAG-Bench/GraphRAG-Benchmark.git)** for evaluating GraphRAG models. |
| README.md | 29 | - **[2025-05-14]** We release the [GraphRAG Benchmark dataset](https://huggingface.co/datasets/GraphRAG-Bench/GraphRAG-Bench). |
| README.md | 299 | \| GraphRAG-Bench \| GraphRAG evaluation \| [[arXiv 2025]](https://arxiv.org/abs/2506.05690) \| [[Github]](https://github.com/GraphRAG-Bench/GraphRAG-Benchmark) \| |
| README.md | 301 | \| PolyG \| GraphRAG evaluation \| [[arXiv 2025]](https://arxiv.org/pdf/2504.02112) \| [[Github]](https://github.com/Liu-rj/PolyG) \| |
| README.md | 322 | - [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://graphrag-bench.github.io/) GraphRAG-Bench: A Comprehensive Benchmark and Analysis for Graph Retrieval-Augm |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| README.md | 112 | - (arXiv 2025) **Multi-Agent GraphRAG: A Text-to-Cypher Framework for Labeled Property Graphs** [[Paper]](https://arxiv.org/abs/2510.09156) |
| README.md | 130 | - (NeurIPS 2023) **Avis: Autonomous visual information seeking with large language model agent** [[Paper]](https://openreview.net/forum?id=7EMphtUgCI&noteId=yGw4rbGozi) |
| README.md | 148 | - (arXiv 2025) **Youtu-GraphRAG: Vertically Unified Agents for Graph Retrieval-Augmented Complex Reasoning** [[Paper]](https://www.arxiv.org/abs/2508.19855) |
| README.md | 155 | - (EMNLP 2024 Findings) **GraphReader: Building Graph-based Agent to Enhance Long-Context Abilities of Large Language Models** [[Paper]](https://aclanthology.org/2024.findings-emnlp.746/) |
| README.md | 321 | - [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/bibinprathap/VeritasGraph) Graph RAG pipeline that runs locally with ollama and has full source |
| README.md | 324 | - [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/apecloud/ApeRAG) ApeRAG: Production-ready GraphRAG with multi-modal indexing, AI agents, MCP su |
| README.md | 325 | - [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/getzep/graphiti) Graphiti: Build Real-Time Knowledge Graphs for AI Agents. |
| README.md | 333 | - [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/vitali87/code-graph-rag) Code-Graph-RAG: A graph-based RAG system that analyzes multi-language |

## Gap

- Provenance/citation/evidence
- Evaluation/observability
- Memory/update lifecycle
- tests
- ci
