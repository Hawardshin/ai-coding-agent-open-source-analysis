# luhengshiwo/LLMForEverybody 코드 레벨 분석

생성일: 2026-06-17T23:31:55.188Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | curated-list/template |
| maturity | D small/demo/list (0) |
| stars | 6742 |
| language | Jupyter Notebook |
| tags | rag, document-chat, agent-knowledge |
| files/code/source | 493/0/0 |
| tests/ci | 0/0 |
| local path | sources/luhengshiwo__LLMForEverybody |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | doc-only | 9 | 0 | 01-第一章-预训练/大模型训练框架（三）DeepSpeed.md:145 from torch.utils.data import TensorDataset, DataLoader |
| Parsing/OCR/document extraction | doc-only | 82 | 0 | README.en.md:52 \| 2018-06-11 \| [GPT-1](https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf) \| A generative Transformer with pre-training plus fine-tuning \| [<img src="https://learnllm.ai/video_c |
| Chunking/splitting | doc-only | 11 | 0 | 07-第七章-Agent/搭配Knowledge-Graph的RAG架构.md:32 在RAG（Retrieval-Augmented Generation）框架中，我们将文档切成小段（chunk），然后通过检索模块找到与查询相关的文档片段。这种方法可以提高生成文本的准确性和相关性，同时保持生成文本的时效性和专业性。 |
| Embedding/vector index | doc-only | 67 | 0 | README.en.md:381 [Vector databases embrace LLMs](07-第七章-Agent/向量数据库拥抱大模型.md) |
| Retrieval/search/rerank | doc-only | 54 | 0 | docs/en/07-agent-and-rag/graphrag-unlocking-llm-retrieval-over-narrative-private-data.md:1 # GraphRAG: Unlocking LLM Retrieval Over Narrative Private Data |
| Wiki/graph/entity model | doc-only | 28 | 0 | README.en.md:385 [GraphRAG: unlocking LLM retrieval over narrative private data, Chinese translation](<07-第七章-Agent/GraphRAG解锁大模型对叙述性私人数据的检索能力（中文翻译）.md>) |
| Memory/update lifecycle | doc-only | 130 | 0 | README.en.md:35 👉 Watch on [bilibili](https://space.bilibili.com/37863979/lists?sid=7144646) |
| Provenance/citation/evidence | doc-only | 14 | 0 | 06-第六章-Prompt Engineering/万字长文Prompt-Engineering-解锁大模型的力量.md:110 > Language models can confidently invent fake answers, especially when asked about esoteric topics or for citations and URLs. In the same way that a sheet of notes can help a student do better on a test, providing refere |
| Evaluation/observability | doc-only | 85 | 0 | README.en.md:116 - 🐰[Chapter 9: LLM evaluation metrics](#chapter-9-llm-evaluation-metrics) |
| Agent/MCP/tool surface | doc-only | 122 | 0 | README.en.md:52 \| 2018-06-11 \| [GPT-1](https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf) \| A generative Transformer with pre-training plus fine-tuning \| [<img src="https://learnllm.ai/video_c |

## 의존성 신호

_없음_

## 주요 파일 후보

### Ingestion/source intake

- `01-第一章-预训练/大模型训练框架（三）DeepSpeed.md`
- `01-第一章-预训练/大模型训练框架（二）FSDP.md`
- `01-第一章-预训练/大模型训练框架（四）Megatron-LM.md`
- `docs/en/01-pre-training/llm-training-frameworks-part-2-fsdp.md`
- `docs/en/01-pre-training/llm-training-frameworks-part-3-deepspeed.md`
- `docs/en/01-pre-training/llm-training-frameworks-part-4-megatron-lm.md`
- `docs/ru/01-предобучение/фреймворки-обучения-llm-часть-2-fsdp.md`
- `docs/ru/01-предобучение/фреймворки-обучения-llm-часть-3-deepspeed.md`
- `docs/ru/01-предобучение/фреймворки-обучения-llm-часть-4-megatron-lm.md`

### Parsing/OCR/document extraction

- `README.en.md`
- `README.md`
- `README.ru.md`
- `00-序-AGI之路/智能涌现和AGI的起源.md`
- `01-第一章-预训练/为什么会发展出Multi-Query-Attention和Group-Query-Attention.md`
- `01-第一章-预训练/为什么大型语言模型都在使用SwiGLU作为激活函数？.md`
- `01-第一章-预训练/最简单的方式理解Mamba（中文翻译）.md`
- `01-第一章-预训练/大模型分布式训练并行技术（二）数据并行.md`
- `01-第一章-预训练/混合专家模型MoE详解节选.md`
- `01-第一章-预训练/看懂FlashAttention需要的数学储备是？高考数学最后一道大题！.md`
- `01-第一章-预训练/神经网络的优化器（一）概述.md`
- `01-第一章-预训练/神经网络的优化器（八）RMSprop.md`
- ... 6 more

### Chunking/splitting

- `07-第七章-Agent/搭配Knowledge-Graph的RAG架构.md`
- `docs/ru/translation-notes.md`
- `docs/en/00-agi-road/llm-papers-2024.md`
- `docs/en/01-pre-training/the-easiest-way-to-understand-mamba.md`
- `docs/en/01-pre-training/what-changed-in-flashattention-v2-vs-v1.md`
- `docs/en/07-agent-and-rag/practical-guide-to-enterprise-rag.md`
- `docs/en/07-agent-and-rag/rag-architecture-with-knowledge-graph.md`
- `docs/en/09-evaluation-metrics/what-evaluation-metrics-do-llms-have.md`
- `docs/en/12-business-and-professional-strategy/genai-main-battlefield-from-imitator-to-platform-controller.md`
- `docs/ru/00-путь-к-agi/обзор-статей-llm-2024.md`
- `docs/ru/07-agent-и-rag/rag-arhitektura-s-knowledge-graph.md`

### Embedding/vector index

- `README.en.md`
- `01-第一章-预训练/10分钟搞清楚为什么Transformer中使用LayerNorm而不是BatchNorm.md`
- `01-第一章-预训练/什么是大模型的位置编码Position-Encoding.md`
- `01-第一章-预训练/从欧拉公式的美到旋转位置编码RoPE.md`
- `01-第一章-预训练/复变函数在大模型位置编码中的应用.md`
- `06-第六章-Prompt Engineering/万字长文Prompt-Engineering-解锁大模型的力量.md`
- `07-第七章-Agent/10分钟了解如何进行多模态RAG.md`
- `07-第七章-Agent/向量数据库拥抱大模型.md`
- `11-第十一章-数学/linear-algebra/0基础学习AI大模型必备数学知识之线性代数（二）.md`
- `docs/ru/translation-notes.md`
- `docs/en/00-agi-road/llm-papers-2018.md`
- `docs/en/00-agi-road/llm-papers-2023.md`
- ... 6 more

### Retrieval/search/rerank

- `docs/en/07-agent-and-rag/graphrag-unlocking-llm-retrieval-over-narrative-private-data.md`
- `README.en.md`
- `02-第二章-部署与推理/vLLM使用PagedAttention轻松、快速且廉价地提供LLM服务（中文版翻译）.md`
- `02-第二章-部署与推理/大模型推理框架（二）vLLM.md`
- `07-第七章-Agent/10分钟了解如何进行多模态RAG.md`
- `07-第七章-Agent/向量数据库拥抱大模型.md`
- `07-第七章-Agent/干货-落地企业级RAG的实践指南.md`
- `07-第七章-Agent/开发大模型or使用大模型.md`
- `07-第七章-Agent/搭配Knowledge-Graph的RAG架构.md`
- `08-第八章-大模型企业落地/CRUDETL工程师的末日从NL2SQL到ChatBI.md`
- `08-第八章-大模型企业落地/大模型落地难点之幻觉.md`
- `09-第九章-评估指标/大模型性能评测之大海捞针.md`
- ... 6 more

### Wiki/graph/entity model

- `README.en.md`
- `README.md`
- `README.ru.md`
- `07-第七章-Agent/GraphRAG解锁大模型对叙述性私人数据的检索能力（中文翻译）.md`
- `07-第七章-Agent/搭配Knowledge-Graph的RAG架构.md`
- `docs/en/index.md`
- `docs/ru/index.md`
- `docs/ru/translation-notes.md`
- `docs/en/00-agi-road/intelligence-emergence-and-the-origin-of-agi.md`
- `docs/en/00-agi-road/llm-papers-2018.md`
- `docs/en/00-agi-road/llm-papers-2019.md`
- `docs/en/00-agi-road/llm-papers-2024.md`
- ... 6 more

### Memory/update lifecycle

- `README.en.md`
- `01-第一章-预训练/FlashAttentionv2相比于v1有哪些更新？.md`
- `01-第一章-预训练/一文了解Deepseek系列中的MLA技术.md`
- `01-第一章-预训练/为什么会发展出Multi-Query-Attention和Group-Query-Attention.md`
- `01-第一章-预训练/大模型分布式训练并行技术（二）数据并行.md`
- `01-第一章-预训练/大模型并行策略[中文翻译].md`
- `01-第一章-预训练/看懂FlashAttention需要的数学储备是？高考数学最后一道大题！.md`
- `02-第二章-部署与推理/vLLM使用PagedAttention轻松、快速且廉价地提供LLM服务（中文版翻译）.md`
- `02-第二章-部署与推理/大模型output-token为什么比input-token贵？.md`
- `02-第二章-部署与推理/大模型推理框架（一）综述.md`
- `02-第二章-部署与推理/大模型推理框架（二）vLLM.md`
- `02-第二章-部署与推理/大模型推理框架（四）TensorRT-LLM.md`
- ... 6 more

### Provenance/citation/evidence

- `06-第六章-Prompt Engineering/万字长文Prompt-Engineering-解锁大模型的力量.md`
- `08-第八章-大模型企业落地/大模型应用涌现出的新工作机会-红队测试Red-teaming.md`
- `09-第九章-评估指标/大模型性能评测之数星星.md`
- `docs/en/00-agi-road/llm-papers-2022.md`
- `docs/en/00-agi-road/what-is-scaling-law.md`
- `docs/en/06-prompt-engineering/long-guide-to-prompt-engineering-unlocking-llm-power.md`
- `docs/en/07-agent-and-rag/graphrag-unlocking-llm-retrieval-over-narrative-private-data.md`
- `docs/en/08-llm-adoption-in-business/new-profession-red-teaming-for-llm-applications.md`
- `docs/en/09-evaluation-metrics/llm-evaluation-counting-stars.md`
- `docs/en/11-mathematics/math-for-ai-llm-from-scratch-probability-and-statistics-part-1-bayes-and-distributions.md`
- `docs/ru/06-prompt-engineering/bolshoy-tekst-prompt-engineering-raskryvaem-silu-llm.md`
- `docs/ru/08-внедрение-llm-в-бизнесе/novaya-professiya-v-llm-prilozheniyah-red-teaming.md`
- ... 2 more

### Evaluation/observability

- `README.en.md`
- `README.ru.md`
- `02-第二章-部署与推理/大模型推理框架（三）Text generation inference (TGI).md`
- `03-第三章-微调/大模型微调框架（一）综述.md`
- `03-第三章-微调/大模型微调框架（三）LLama-Factory.md`
- `07-第七章-Agent/开发大模型or使用大模型.md`
- `08-第八章-大模型企业落地/CRUDETL工程师的末日从NL2SQL到ChatBI.md`
- `08-第八章-大模型企业落地/大模型落地难点之幻觉.md`
- `09-第九章-评估指标/大模型性能评测之数星星.md`
- `09-第九章-评估指标/大模型有哪些评估指标？.md`
- `00-序-AGI之路/大模型年度论文总结/2019.md`
- `00-序-AGI之路/大模型年度论文总结/2023.md`
- ... 6 more

### Agent/MCP/tool surface

- `README.en.md`
- `README.md`
- `README.ru.md`
- `00-序-AGI之路/智能涌现和AGI的起源.md`
- `01-第一章-预训练/全网最全的大模型分词器（Tokenizer）总结.md`
- `01-第一章-预训练/最简单的方式理解Mamba（中文翻译）.md`
- `01-第一章-预训练/搞懂大模型的分词器（二）.md`
- `01-第一章-预训练/神经网络的激活函数（二）Sigmiod、Softmax和Tanh.md`
- `02-第二章-部署与推理/10分钟私有化部署大模型到本地.md`
- `02-第二章-部署与推理/vLLM使用PagedAttention轻松、快速且廉价地提供LLM服务（中文版翻译）.md`
- `02-第二章-部署与推理/大模型推理框架（一）综述.md`
- `02-第二章-部署与推理/大模型推理框架（五）Ollama.md`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| 01-第一章-预训练/大模型训练框架（三）DeepSpeed.md | 145 | from torch.utils.data import TensorDataset, DataLoader |
| 01-第一章-预训练/大模型训练框架（三）DeepSpeed.md | 167 | dataloader = DataLoader(dataset=dataset, batch_size=batch_size) |
| 01-第一章-预训练/大模型训练框架（三）DeepSpeed.md | 174 | model, optimizer, dataloader = accelerator.prepare(model, optimizer, dataloader) |
| 01-第一章-预训练/大模型训练框架（三）DeepSpeed.md | 178 | for batch in dataloader: |
| 01-第一章-预训练/大模型训练框架（二）FSDP.md | 163 | for data, target in dataloader: |
| 01-第一章-预训练/大模型训练框架（四）Megatron-LM.md | 19 | 1. **数据加载**：它带有一个高效的 DataLoader，其中数据在训练前被 tokenize 和 shuffle。它还将数据拆分为带有索引的编号序列，并将索引存储，因此 tokenize 只需要计算一次； |
| docs/en/01-pre-training/llm-training-frameworks-part-2-fsdp.md | 159 | for data, target in dataloader: |
| docs/en/01-pre-training/llm-training-frameworks-part-3-deepspeed.md | 71 | - Define the model, dataloader, and optimizer. |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| README.en.md | 52 | \| 2018-06-11 \| [GPT-1](https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf) \| A generative Transformer with pre-training plus fine-tuning \| [<img src="https://learnllm.ai/video_c |
| README.en.md | 54 | \| 2019-02-14 \| [GPT-2](https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf) \| Large-scale unsupervised text generation \| [<img src="https://learnllm.ai/video_cover/gpt2.j |
| README.en.md | 67 | \| 2023-02-27 \| [LLaMA-1](https://arxiv.org/pdf/2302.13971) \| An efficient open pre-trained base model \| [<img src="https://learnllm.ai/video_cover/llama-1.jpg" width="200">](https://www.bilibili.com/video/BV1PqNMzZEw2) \| |
| README.md | 54 | \| 2018-06-11 \| [GPT-1](https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf) \| 预训练 + 微调的生成式 Transformer \| [<img src="https://learnllm.ai/video_cover/gpt1.jpg" width="200">](https: |
| README.md | 56 | \| 2019-02-14 \| [GPT-2](https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf) \| 大规模无监督文本生成 \| [<img src="https://learnllm.ai/video_cover/gpt2.jpg" width="200">](https://www. |
| README.md | 69 | \| 2023-02-27 \| [LLaMA-1](https://arxiv.org/pdf/2302.13971) \| 高效开源预训练基座模型 \| [<img src="https://learnllm.ai/video_cover/llama-1.jpg" width="200">](https://www.bilibili.com/video/BV1PqNMzZEw2) \| [![LearnLLM.AI](https://img. |
| README.ru.md | 54 | \| 2018-06-11 \| [GPT-1](https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf) \| Генеративный Transformer: предварительное обучение + тонкая настройка \| [<img src="https://learnllm. |
| README.ru.md | 56 | \| 2019-02-14 \| [GPT-2](https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf) \| Масштабная безнадзорная генерация текста \| [<img src="https://learnllm.ai/video_cover/gpt2.j |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| 07-第七章-Agent/搭配Knowledge-Graph的RAG架构.md | 32 | 在RAG（Retrieval-Augmented Generation）框架中，我们将文档切成小段（chunk），然后通过检索模块找到与查询相关的文档片段。这种方法可以提高生成文本的准确性和相关性，同时保持生成文本的时效性和专业性。 |
| 07-第七章-Agent/搭配Knowledge-Graph的RAG架构.md | 34 | 然而，在实际文本中，chunk与chunk之间是存在关联的，而RAG技术并未充分考虑到这种关联性。为了解决这一问题，我们可以引入知识图谱，将文档中的chunk之间的关系表示为图结构。在检索时，不仅可以找到与查询相关的文档片段，还可以根据知识图谱中的关系找到与查询相关的chunk之间的关联信息。 |
| 07-第七章-Agent/搭配Knowledge-Graph的RAG架构.md | 39 | 在每一个实体上，存储了该chunk的信息；在每一个关系上，存储了chunk之间的关系信息。 |
| 07-第七章-Agent/搭配Knowledge-Graph的RAG架构.md | 49 | 2. Knowledge Graph的的构建不是生成传统意义上的实体关系图，而是借用了图数据库的思想，将文档中的chunk之间的关系表示为图结构； |
| docs/ru/translation-notes.md | 83 | - `RAG`, `GraphRAG`, `Baseline RAG`, `Vector DB`, `embedding`, `retrieval`, `query`, `LVLM`, `LLaVA`, `BridgeTower`, `semantic search`, `Long Context`, `Knowledge Graph`, `chunk`, `Load & Process`, `Split/Chunking`, `hyb |
| docs/en/00-agi-road/llm-papers-2024.md | 107 | The training system is especially notable. DeepSeek-V3 uses FP8 mixed precision training, DualPipe bidirectional pipeline parallelism, and overlap of computation and communication, completing training on 2048 H800 GPUs. |
| docs/en/01-pre-training/the-easiest-way-to-understand-mamba.md | 202 | The FlashAttention authors realized that if these GPU memory regions are used especially carefully, memory-bound operations can be much more efficient. They used a technique called tiling: a small chunk of data is moved |
| docs/en/01-pre-training/what-changed-in-flashattention-v2-vs-v1.md | 67 | The second major V2 update is parallel computation along the sequence-length dimension. The goal is to improve GPU SM utilization, especially when processing long sequences. In V1, computation was first parallelized acro |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| README.en.md | 381 | [Vector databases embrace LLMs](07-第七章-Agent/向量数据库拥抱大模型.md) |
| 01-第一章-预训练/10分钟搞清楚为什么Transformer中使用LayerNorm而不是BatchNorm.md | 67 | [2] [Build Better Deep Learning Models with Batch and Layer Normalization](https://www.pinecone.io/learn/batch-layer-normalization/) |
| 01-第一章-预训练/什么是大模型的位置编码Position-Encoding.md | 155 | [5] [RoFormer: Enhanced Transformer with Rotary Position Embedding](https://arxiv.org/abs/2104.09864) |
| 01-第一章-预训练/从欧拉公式的美到旋转位置编码RoPE.md | 160 | [5] [RoFormer: Enhanced Transformer with Rotary Position Embedding](https://arxiv.org/abs/2104.09864) |
| 01-第一章-预训练/复变函数在大模型位置编码中的应用.md | 64 | 毕业十年后，我再一次领略了复数的魅力，这次是在大模型的位置编码中。复数的数学特性和运算规则为Transformer提供了一种新的位置编码方法，这种方法被称为RoPE（Rotary Position Embedding）。 |
| 01-第一章-预训练/复变函数在大模型位置编码中的应用.md | 114 | [1] [RoFormer: Enhanced Transformer with Rotary Position Embedding](https://arxiv.org/abs/2104.09864) |
| 06-第六章-Prompt Engineering/万字长文Prompt-Engineering-解锁大模型的力量.md | 313 | **Embedding** |
| 06-第六章-Prompt Engineering/万字长文Prompt-Engineering-解锁大模型的力量.md | 315 | 如果作为输入的一部分提供，模型可以利用外部信息源。 这可以帮助模型生成更明智和最新的响应。 例如，如果用户询问有关特定电影的问题，则将有关电影的高质量信息（例如演员、导演等）添加到模型的输入中可能会很有用。 Embedding 可用于实现高效的知识检索，从而可以在运行时动态地将相关信息添加到模型输入中。 |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| docs/en/07-agent-and-rag/graphrag-unlocking-llm-retrieval-over-narrative-private-data.md | 1 | # GraphRAG: Unlocking LLM Retrieval Over Narrative Private Data |
| docs/en/07-agent-and-rag/graphrag-unlocking-llm-retrieval-over-narrative-private-data.md | 21 | Retrieval-Augmented Generation (`RAG`) is a technique that searches for information based on a user query and provides the results as support for a generative AI answer. This technique is an important part of most LLM-ba |
| docs/en/07-agent-and-rag/graphrag-unlocking-llm-retrieval-over-narrative-private-data.md | 32 | In this study, we used thousands of news articles from Russian and Ukrainian sources from June 2023, translated into English, to create a private dataset for LLM-based retrieval. The dataset is too large to fit into the |
| docs/en/07-agent-and-rag/graphrag-unlocking-llm-retrieval-over-narrative-private-data.md | 58 | Using an LLM-generated knowledge graph, GraphRAG substantially improves the "retrieval" part of RAG: the context window is filled with more relevant content, which gives better answers and records sources of evidence. |
| docs/en/07-agent-and-rag/graphrag-unlocking-llm-retrieval-over-narrative-private-data.md | 66 | Baseline RAG struggles with queries that require summarizing information from the whole dataset to produce an answer. Queries like "What are the top 5 themes in the data?" work poorly because Baseline RAG relies on vecto |
| docs/en/07-agent-and-rag/graphrag-unlocking-llm-retrieval-over-narrative-private-data.md | 78 | Looking at the Baseline RAG result, we can see that the listed themes have little to do with the war between the two countries. As expected, vector search retrieved irrelevant texts and inserted them into the LLM context |
| README.en.md | 385 | [GraphRAG: unlocking LLM retrieval over narrative private data, Chinese translation](<07-第七章-Agent/GraphRAG解锁大模型对叙述性私人数据的检索能力（中文翻译）.md>) |
| 02-第二章-部署与推理/vLLM使用PagedAttention轻松、快速且廉价地提供LLM服务（中文版翻译）.md | 65 | PageAttention 的内存共享功能大大降低了复杂采样算法（例如parallel sampling和beam search）的内存开销，最多可减少 55% 的内存使用量。这可以转化为高达 2.2 倍的吞吐量提升。这使得此类采样方法在 LLM 服务中变得实用。 |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| README.en.md | 385 | [GraphRAG: unlocking LLM retrieval over narrative private data, Chinese translation](<07-第七章-Agent/GraphRAG解锁大模型对叙述性私人数据的检索能力（中文翻译）.md>) |
| README.md | 387 | [GraphRAG：解锁大模型对叙述性私人数据的检索能力（中文翻译）](<07-第七章-Agent/GraphRAG解锁大模型对叙述性私人数据的检索能力（中文翻译）.md>) |
| README.ru.md | 420 | [GraphRAG: раскрываем способность LLM искать по повествовательным приватным данным, перевод на китайский](<07-第七章-Agent/GraphRAG解锁大模型对叙述性私人数据的检索能力（中文翻译）.md>) |
| 07-第七章-Agent/GraphRAG解锁大模型对叙述性私人数据的检索能力（中文翻译）.md | 1 | GraphRAG: 解锁大模型对叙述性私有数据的检索能力（中文翻译） |
| 07-第七章-Agent/GraphRAG解锁大模型对叙述性私人数据的检索能力（中文翻译）.md | 3 | https://www.microsoft.com/en-us/research/blog/graphrag-unlocking-llm-discovery-on-narrative-private-data/ |
| 07-第七章-Agent/GraphRAG解锁大模型对叙述性私人数据的检索能力（中文翻译）.md | 6 | 在前一段时间，微软开源的GraphRAG引起了一些轰动，我看了很多资料，其中最有价值应该是这篇微软自己的博客：https://www.microsoft.com/en-us/research/blog/graphrag-unlocking-llm-discovery-on-narrative-private-data/ |
| 07-第七章-Agent/GraphRAG解锁大模型对叙述性私人数据的检索能力（中文翻译）.md | 18 | LLM 面临的最大挑战（也是最大的机遇）或许是将其强大的能力扩展到解决训练数据之外的问题，并使用 LLM 从未见过的数据获得可比的结果。这为数据调查开辟了新的可能性，例如根据上下文和数据集识别主题和语义概念。在本文中，我们介绍了微软研究院创建的 GraphRAG，这是增强 LLM 能力的一项重大进步。 |
| 07-第七章-Agent/GraphRAG解锁大模型对叙述性私人数据的检索能力（中文翻译）.md | 20 | 检索增强生成 (RAG) 是一种根据用户查询搜索信息并提供结果作为生成 AI 答案的参考的技术。该技术是大多数基于 LLM 的工具的重要组成部分，大多数 RAG 方法都使用向量相似性作为搜索技术。GraphRAG 使用 LLM 生成的知识图谱，在对复杂信息进行文档分析时显著提高问答性能。这建立在我们最近的[研究基础](https://www.microsoft.com/en-us/research/publication/can-gen |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| README.en.md | 35 | 👉 Watch on [bilibili](https://space.bilibili.com/37863979/lists?sid=7144646) |
| README.en.md | 37 | 👉 Watch on [YouTube](https://www.youtube.com/@learnllm-ai) |
| 01-第一章-预训练/FlashAttentionv2相比于v1有哪些更新？.md | 7 | FlashAttention不需要在全局内存上实现 X 和 A 矩阵，而是将上述公式中的整个计算融合到单个 CUDA 内核中。这要求我们设计一种算法来仔细管理片上内存(on-chip memory)（如流算法），因为 NVIDIA GPU 的共享内存(SRAM)很小。 |
| 01-第一章-预训练/FlashAttentionv2相比于v1有哪些更新？.md | 63 | - thread block：一个thread block可以包含多个warp，同一个block中的thread可以同步，也可以通过shared memory进行通信。thread block是GPU执行的最小单位（the smallest unit of execution on the GPU）。一个warp中的threads必然在同一个block中，如果block所含thread数量不是warp大小的整数倍，那么多出的那个warp |
| 01-第一章-预训练/FlashAttentionv2相比于v1有哪些更新？.md | 82 | [1] [FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness](https://arxiv.org/abs/2205.14135) |
| 01-第一章-预训练/一文了解Deepseek系列中的MLA技术.md | 13 | 3. KV Cache，prefilling&decoding |
| 01-第一章-预训练/一文了解Deepseek系列中的MLA技术.md | 35 | ## 二，KV Cache：推理阶段的工程优化 |
| 01-第一章-预训练/一文了解Deepseek系列中的MLA技术.md | 37 | KV Cache是GPT2开始就存在的工程优化。它主要用于在生成阶段（decode）缓存之前计算的键值对，避免重复计算，从而节省计算资源和时间。 |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| 06-第六章-Prompt Engineering/万字长文Prompt-Engineering-解锁大模型的力量.md | 110 | > Language models can confidently invent fake answers, especially when asked about esoteric topics or for citations and URLs. In the same way that a sheet of notes can help a student do better on a test, providing refere |
| 06-第六章-Prompt Engineering/万字长文Prompt-Engineering-解锁大模型的力量.md | 122 | >prompts: 将下述文本翻译成中文，要用专业术语，并符合中国人的阅读习惯，''' Language models can confidently invent fake answers, especially when asked about esoteric topics or for citations and URLs. In the same way that a sheet of notes can help a stu |
| 08-第八章-大模型企业落地/大模型应用涌现出的新工作机会-红队测试Red-teaming.md | 90 | '''There is a popular myth that suggests Salieri wanted to kill Mozart, but historians and scholars have found no evidence to support this claim.''' |
| 09-第九章-评估指标/大模型性能评测之数星星.md | 43 | [1] [Counting-Stars (★): A Multi-evidence, Position-aware, and Scalable Benchmark for Evaluating Long-Context Large Language Models](https://arxiv.org/pdf/2403.11802) |
| docs/en/00-agi-road/llm-papers-2022.md | 41 | This idea had enormous later influence. Many open-source models later achieved strong results with relatively smaller parameter counts, and Chinchilla is part of that lineage. |
| docs/en/00-agi-road/what-is-scaling-law.md | 15 | A law is a statement about an objective pattern in how things develop and change under certain conditions. It is supported by practice and evidence. |
| docs/en/06-prompt-engineering/long-guide-to-prompt-engineering-unlocking-llm-power.md | 124 | > Language models can confidently invent fake answers, especially when asked about esoteric topics or for citations and URLs. In the same way that a sheet of notes can help a student do better on a test, providing refere |
| docs/en/06-prompt-engineering/long-guide-to-prompt-engineering-unlocking-llm-power.md | 130 | > Result: language models can confidently invent false answers, especially when asked about esoteric topics, citations, and URLs. In the same way that a sheet of notes can help a student do better on a test, providing re |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| README.en.md | 116 | - 🐰[Chapter 9: LLM evaluation metrics](#chapter-9-llm-evaluation-metrics) |
| README.en.md | 407 | ### Chapter 9: LLM evaluation metrics |
| README.en.md | 409 | [What evaluation metrics do LLMs have?](09-第九章-评估指标/大模型有哪些评估指标？.md) |
| README.en.md | 411 | [LLM performance evaluation: Needle In A Haystack](09-第九章-评估指标/大模型性能评测之大海捞针.md) |
| README.en.md | 413 | [Evaluation metrics: LLM performance test for counting stars](09-第九章-评估指标/大模型性能评测之数星星.md) |
| README.ru.md | 118 | - 🐰[Глава 9: Метрики оценки LLM](#chapter-9-evaluation-metrics) |
| README.ru.md | 444 | <a id="chapter-9-evaluation-metrics"></a> |
| 02-第二章-部署与推理/大模型推理框架（三）Text generation inference (TGI).md | 63 | 2. **生产就绪**：TGI集成了分布式追踪（使用Open Telemetry）和Prometheus指标，满足生产环境的需求。 |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| README.en.md | 52 | \| 2018-06-11 \| [GPT-1](https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf) \| A generative Transformer with pre-training plus fine-tuning \| [<img src="https://learnllm.ai/video_c |
| README.en.md | 54 | \| 2019-02-14 \| [GPT-2](https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf) \| Large-scale unsupervised text generation \| [<img src="https://learnllm.ai/video_cover/gpt2.j |
| README.en.md | 61 | \| 2021-07-07 \| [CodeX](https://arxiv.org/abs/2107.03374) \| A GPT-family model for code generation \| [<img src="https://learnllm.ai/video_cover/codex.jpg" width="200">](https://www.bilibili.com/video/BV1JC67BEE7b) \| [![Le |
| README.en.md | 113 | - 🦁[Chapter 7: Agent](#chapter-7-agent) |
| README.en.md | 297 | [LLM inference frameworks (5): Ollama](02-第二章-部署与推理/大模型推理框架（五）Ollama.md) |
| README.en.md | 359 | ### Chapter 7: Agent |
| README.en.md | 363 | [How to design agent architecture: follow OpenAI or Anthropic?](07-第七章-Agent/如何设计智能体架构：参考OpenAI还是Anthropic.md) |
| README.en.md | 365 | [MCP: basic concepts, quick start, and internal principles](07-第七章-Agent/MCP：基础概念、快速应用和背后原理.md) |

## Gap

- Provenance/citation/evidence
- Evaluation/observability
- Memory/update lifecycle
- tests
- ci
