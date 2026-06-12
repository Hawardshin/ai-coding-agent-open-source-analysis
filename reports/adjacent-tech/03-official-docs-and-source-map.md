# 공식 문서와 소스맵: Context Engineering, RAG, Local LLM, Agent Harness

기준일: 2026-06-13 KST.  
대상: 새로 clone한 50개 레포지토리와 공식 문서.  
목적: "공식 문서가 말하는 설계 철학"과 "clone된 코드에서 확인할 위치"를 연결한다.

## 1. 공식 문서에서 확인한 큰 흐름

### Context engineering은 prompt 작성이 아니라 runtime context 운영이다

Anthropic의 context engineering 문서는 context를 LLM inference에 포함되는 token 집합으로 정의하고, agent가 오래 돌수록 system prompt, tools, MCP, external data, message history가 계속 바뀌기 때문에 매 inference마다 무엇을 넣을지 선택해야 한다고 설명한다. LangChain 공식 문서도 agent 실패 원인을 "모델이 부족함"과 "올바른 context가 전달되지 않음"으로 나누고, 후자가 reliability의 핵심 병목이라고 둔다.

소스 관점에서 이 철학은 다음 레포에 직접 반영된다.

- `langchain-ai/langchain`: middleware로 model context, tool context, lifecycle context를 조작한다.
- `mem0ai/mem0`, `getzep/zep`: long-term memory를 context source로 분리한다.
- `BerriAI/litellm`: provider/model routing과 budget/fallback을 context-runtime 경계에 둔다.
- `pydantic/pydantic-ai`, `guardrails-ai/guardrails`: output/schema/action contract를 context의 일부로 만든다.

### RAG 평가는 retrieval과 generation을 분리해야 한다

Promptfoo 공식 RAG eval 문서는 RAG를 vector store retrieval과 LLM output generation 두 단계로 나눠 각각 평가하라고 설명한다. Ragas 공식 문서는 context precision/recall, faithfulness, response relevancy 같은 RAG metric을 전면에 둔다. Phoenix 공식 문서는 model call, retrieval, tool use, custom logic을 trace span으로 보며, eval/experiment loop로 개선하라고 설명한다.

소스 관점에서 이 철학은 다음처럼 보인다.

- `explodinggradients/ragas`: metric, dataset, testset generation.
- `promptfoo/promptfoo`: YAML/CLI provider/assertion 기반 regression test.
- `Arize-ai/phoenix`: OpenTelemetry/OpenInference 기반 trace ingestion.
- `langfuse/langfuse`: traces, prompt management, evals, datasets.
- `truera/trulens`: instrumentation과 feedback function.

### Local LLM 문서는 context length와 hardware budget을 제품 문제로 다룬다

Ollama context length 문서는 VRAM별 기본 context와 agent/coding tool에 필요한 큰 context를 명시한다. vLLM 공식 문서는 PagedAttention, continuous batching, prefix caching, structured outputs, tool/reasoning parsers, OpenAI-compatible API server를 핵심 기능으로 둔다. SGLang 공식 문서는 RadixAttention, prefix caching, multi-GPU parallelism, OpenAI API compatibility를 production serving의 중심으로 설명한다.

소스 관점에서 이 철학은 다음처럼 분리된다.

- `ollama/ollama`: local runtime/registry/model UX.
- `ggml-org/llama.cpp`: GGUF/quant/backend/kernel.
- `vllm-project/vllm`, `sgl-project/sglang`, `NVIDIA/TensorRT-LLM`: serving engine과 scheduler/kernel 최적화.
- `mudler/LocalAI`, `xorbitsai/inference`, `BerriAI/litellm`: API/gateway/control plane.

## 2. 공식 문서 우선 읽기 경로

처음부터 50개 문서를 모두 읽으면 구조가 흐려진다. 아래 순서가 가장 덜 어색하다.

1. Context/harness 개념: Anthropic context engineering, Anthropic long-running harness, LangChain context engineering.
2. RAG 기본과 graph 확장: LlamaIndex, LangChain retrieval, Haystack, Microsoft GraphRAG, LightRAG.
3. Local/model serving: Ollama context length, llama.cpp docs, vLLM docs, SGLang docs, TensorRT-LLM docs.
4. Retrieval storage: Qdrant, Milvus, Chroma, Weaviate, LanceDB, pgvector, Typesense.
5. Eval/observability: Promptfoo RAG eval, Ragas, Phoenix, Langfuse, DeepEval, TruLens.
6. Gateway/control: LiteLLM, Guardrails, Pydantic AI, HumanLayer.

## 3. 레포별 공식 문서와 소스맵

| # | 레포 | 공식 문서 | clone 소스에서 먼저 볼 위치 | 문서가 말하는 핵심 |
| -: | --- | --- | --- | --- |
| 1 | `vllm-project/vllm` | <https://docs.vllm.ai/> | `sources/vllm-project__vllm/vllm/`, `vllm/entrypoints/openai/`, `csrc/`, `rust/`, `docs/` | high-throughput serving engine. OpenAI-compatible server, PagedAttention, continuous batching, prefix caching, structured output, tool/reasoning parser. |
| 2 | `ggml-org/llama.cpp` | <https://github.com/ggml-org/llama.cpp/tree/master/docs> | `sources/ggml-org__llama.cpp/src/`, `ggml/`, `tools/server/`, `examples/`, `gguf-py/` | local/edge LLM runtime. GGUF, quantization, CPU/GPU offload, portable C/C++ backend. |
| 3 | `ollama/ollama` | <https://docs.ollama.com/> | `sources/ollama__ollama/server/`, `cmd/`, `api/`, `app/`, `docs/` | local model pull/run/serve UX. Modelfile, registry, context length, desktop/API integrations. |
| 4 | `sgl-project/sglang` | <https://docs.sglang.io/> | `sources/sgl-project__sglang/python/`, `sgl-kernel/`, `sgl-model-gateway/`, `experimental/sgl-router/` | production serving with RadixAttention, prefix caching, multimodal, OpenAI-compatible APIs, multi-GPU scale. |
| 5 | `huggingface/text-generation-inference` | <https://huggingface.co/docs/text-generation-inference/> | `sources/huggingface__text-generation-inference/launcher/`, `router/`, `server/`, `backends/`, `clients/` | Hugging Face serving reference. Router/server/backend separation. Archived status means new adoption risk. |
| 6 | `huggingface/transformers` | <https://huggingface.co/docs/transformers/> | `sources/huggingface__transformers/src/transformers/`, `docs/`, `examples/` | model definition/tokenizer/pipeline framework. Serving engines depend on this ecosystem. |
| 7 | `huggingface/accelerate` | <https://huggingface.co/docs/accelerate/> | `sources/huggingface__accelerate/src/accelerate/`, `examples/`, `docs/` | distributed training/inference launcher and device/mixed precision abstraction. |
| 8 | `mlc-ai/mlc-llm` | <https://llm.mlc.ai/docs/> | `sources/mlc-ai__mlc-llm/python/`, `cpp/`, `docs/` | compile/quantize/deploy LLMs to heterogeneous devices through TVM/MLC runtime. |
| 9 | `EricLBuehler/mistral.rs` | <https://github.com/EricLBuehler/mistral.rs> | `sources/EricLBuehler__mistral.rs/mistralrs-core/`, `mistralrs-server/`, `docs/` | Rust local inference/server alternative with OpenAI-compatible serving and quantized models. |
| 10 | `mudler/LocalAI` | <https://localai.io/> | `sources/mudler__LocalAI/backend/`, `core/`, `api/`, `pkg/`, `docs/` | self-hosted local OpenAI-compatible API over multiple AI backends. |
| 11 | `oobabooga/text-generation-webui` | <https://github.com/oobabooga/text-generation-webui/wiki> | `sources/oobabooga__text-generation-webui/modules/`, `extensions/`, root launch scripts | local model experiment UI, loaders, parameters, extensions. AGPL risk. |
| 12 | `lm-sys/FastChat` | <https://github.com/lm-sys/FastChat> | `sources/lm-sys__FastChat/fastchat/serve/`, `fastchat/model/`, `fastchat/llm_judge/` | controller/worker serving and historical chat/eval infrastructure. |
| 13 | `NVIDIA/TensorRT-LLM` | <https://nvidia.github.io/TensorRT-LLM/> | `sources/NVIDIA__TensorRT-LLM/tensorrt_llm/`, `cpp/`, `examples/`, `benchmarks/` | NVIDIA-optimized LLM inference, TensorRT engine build/runtime, kernels, quantization. |
| 14 | `microsoft/BitNet` | <https://github.com/microsoft/BitNet> | `sources/microsoft__BitNet/src/`, `docs/`, examples/scripts | low-bit/1-bit inference research and efficient local runtime direction. |
| 15 | `xorbitsai/inference` | <https://inference.readthedocs.io/> | `sources/xorbitsai__inference/xinference/`, `frontend/`, `examples/` | Xinference model serving platform for LLM/embedding/rerank/multimodal models. |
| 16 | `run-llama/llama_index` | <https://docs.llamaindex.ai/> | `sources/run-llama__llama_index/llama-index-core/`, `llama-index-integrations/`, `docs/` | data connectors, indexing, retrievers, query engines, agents/workflows. |
| 17 | `langchain-ai/langchain` | <https://docs.langchain.com/> | `sources/langchain-ai__langchain/libs/langchain/`, `libs/core/`, `libs/community/` | models/messages/tools/retrievers/agents, context engineering through middleware. |
| 18 | `deepset-ai/haystack` | <https://docs.haystack.deepset.ai/> | `sources/deepset-ai__haystack/haystack/`, docs/components/pipelines | component pipeline architecture for production RAG. |
| 19 | `microsoft/graphrag` | <https://microsoft.github.io/graphrag/> | `sources/microsoft__graphrag/graphrag/`, `packages/`, `docs/`, `examples_notebooks/` | graph-based indexing/query. TextUnits, entities, relationships, community summaries, local/global/DRIFT search. |
| 20 | `HKUDS/LightRAG` | <https://github.com/HKUDS/LightRAG> | `sources/HKUDS__LightRAG/lightrag/`, `examples/`, `docs/` | lightweight graph-enhanced RAG, simpler alternative to heavier GraphRAG pipelines. |
| 21 | `mem0ai/mem0` | <https://docs.mem0.ai/> | `sources/mem0ai__mem0/mem0/`, `server/`, `cli/`, `docs/` | agent memory extraction, storage, retrieval, user/session memory integration. |
| 22 | `getzep/zep` | <https://help.getzep.com/> | `sources/getzep__zep/zep_cloud/`, SDK/client directories, examples | long-term conversational memory and graph memory API for agents. |
| 23 | `stanford-oval/storm` | <https://storm.genie.stanford.edu/> | `sources/stanford-oval__storm/knowledge_storm/`, `frontend/`, examples | research/source discovery and long-form report generation system. |
| 24 | `weaviate/Verba` | <https://github.com/weaviate/Verba> | `sources/weaviate__Verba/goldenverba/`, `frontend/` | Weaviate-backed RAG reference app. Archived status means reference-only stance. |
| 25 | `khoj-ai/khoj` | <https://docs.khoj.dev/> | `sources/khoj-ai__khoj/src/khoj/`, server/web app directories | personal knowledge assistant, search/chat/agent UX with local/private options. |
| 26 | `QuivrHQ/quivr` | <https://docs.quivr.com/> | `sources/QuivrHQ__quivr/core/`, API/frontend/docs | second-brain RAG app: documents, brains, chat, retrieval UX. |
| 27 | `infiniflow/ragflow` | <https://ragflow.io/docs/dev/> | `sources/infiniflow__ragflow/api/`, `agent/`, `rag/`, `web/`, `docs/` | document intelligence-first RAG platform, parsing/chunking/workflow/agent UI. |
| 28 | `qdrant/qdrant` | <https://qdrant.tech/documentation/> | `sources/qdrant__qdrant/src/`, `lib/`, `docs/` | Rust vector DB with collections, payload filters, HNSW/vector search, snapshots. |
| 29 | `milvus-io/milvus` | <https://milvus.io/docs/> | `sources/milvus-io__milvus/internal/`, `pkg/`, `cmd/`, `client/`, `docs/` | distributed vector DB: proxy, coordinators, query/data/index nodes. |
| 30 | `chroma-core/chroma` | <https://docs.trychroma.com/> | `sources/chroma-core__chroma/chromadb/`, Rust crates, `docs/` | developer-friendly vector store with local/server modes and collection API. |
| 31 | `weaviate/weaviate` | <https://weaviate.io/developers/weaviate> | `sources/weaviate__weaviate/adapters/`, `entities/`, `modules/`, `usecases/` | vector/hybrid/generative search platform with modules and schema. |
| 32 | `lancedb/lancedb` | <https://lancedb.github.io/lancedb/> | `sources/lancedb__lancedb/python/`, Rust crates, `docs/` | Lance table/lakehouse-style vector data and multimodal retrieval. |
| 33 | `pgvector/pgvector` | <https://github.com/pgvector/pgvector> | `sources/pgvector__pgvector/src/`, SQL extension files, README | PostgreSQL vector type, distance operators, indexes, SQL-native retrieval. |
| 34 | `timescale/pgvectorscale` | <https://github.com/timescale/pgvectorscale> | `sources/timescale__pgvectorscale/pgvectorscale/`, extension source | Postgres vector search acceleration extension layered around pgvector. |
| 35 | `facebookresearch/faiss` | <https://faiss.ai/> | `sources/facebookresearch__faiss/faiss/`, `gpu/`, `benchs/`, `demos/` | ANN search library, CPU/GPU index algorithms, no DB/server layer by default. |
| 36 | `typesense/typesense` | <https://typesense.org/docs/> | `sources/typesense__typesense/src/`, `include/`, tests | typo-tolerant keyword search plus vector/hybrid search server. GPL-3.0 check. |
| 37 | `explodinggradients/ragas` | <https://docs.ragas.io/> | `sources/explodinggradients__ragas/src/ragas/`, `docs/` | systematic eval loop, RAG metrics, datasets, testset generation. |
| 38 | `promptfoo/promptfoo` | <https://www.promptfoo.dev/docs/> | `sources/promptfoo__promptfoo/src/`, `site/docs/` | CLI/CI prompt and provider testing, assertions, red teaming, RAG eval. |
| 39 | `confident-ai/deepeval` | <https://docs.confident-ai.com/> | `sources/confident-ai__deepeval/deepeval/`, `docs/` | pytest-like LLM evaluation, metrics, RAG/agent testing. |
| 40 | `truera/trulens` | <https://www.trulens.org/> | `sources/truera__trulens/src/`, `docs/`, examples | feedback functions, instrumentation, RAG/LLM observability. |
| 41 | `Arize-ai/phoenix` | <https://arize.com/docs/phoenix> | `sources/Arize-ai__phoenix/src/`, `packages/`, `docs/` | OpenTelemetry/OpenInference trace, evals, datasets, experiments, prompt iteration. |
| 42 | `langfuse/langfuse` | <https://langfuse.com/docs> | `sources/langfuse__langfuse/web/`, `packages/`, SDK directories | traces, prompt management, evals, datasets, self-hostable LLM observability product. |
| 43 | `agenta-ai/agenta` | <https://docs.agenta.ai/> | `sources/agenta-ai__agenta/agenta-web/`, `api/`, `sdk/`, `docs/` | prompt/eval/deployment workflow and LLMOps platform. |
| 44 | `BerriAI/litellm` | <https://docs.litellm.ai/> | `sources/BerriAI__litellm/litellm/`, `proxy_server/`, `docs/` | OpenAI-format gateway over 100+ providers, proxy, router, fallback, budgets. |
| 45 | `stanfordnlp/dspy` | <https://dspy.ai/> | `sources/stanfordnlp__dspy/dspy/`, `docs/`, examples | signatures/modules/optimizers: prompt as optimizable program. |
| 46 | `pydantic/pydantic-ai` | <https://ai.pydantic.dev/> | `sources/pydantic__pydantic-ai/pydantic_ai_slim/`, `docs/`, examples | typed agent framework, structured output, dependency injection, tool schemas. |
| 47 | `guardrails-ai/guardrails` | <https://www.guardrailsai.com/docs> | `sources/guardrails-ai__guardrails/guardrails/`, `docs/` | output validation, schema/validators, reask/repair loop. |
| 48 | `humanlayer/humanlayer` | <https://docs.humanlayer.dev/> | `sources/humanlayer__humanlayer/packages/`, `apps/`, `docs/` | human approval and human-in-the-loop control plane for tool/action agents. |
| 49 | `microsoft/promptflow` | <https://microsoft.github.io/promptflow/> | `sources/microsoft__promptflow/src/`, `docs/`, examples | flow-based LLM app development, evaluation, deployment, Azure integration. |
| 50 | `openai/evals` | <https://github.com/openai/evals> | `sources/openai__evals/evals/`, `docs/`, `examples/` | eval registry/framework, graders, solvers, datasets, model evaluation harness. |

## 4. 읽기 우선순위별 핵심 질문

### Context engineering 문서를 읽을 때

- 어떤 context가 transient이고 어떤 context가 persistent인가?
- tool list는 고정인가, permission/state에 따라 줄어드는가?
- long-running task에서 compaction, note-taking, memory, sub-agent가 어떻게 연결되는가?
- retrieval을 precomputed index에 맡길지, agentic search로 runtime에 탐색하게 할지?

### RAG/GraphRAG 문서를 읽을 때

- chunking 단위와 metadata는 어떤 실패를 만들 수 있는가?
- hybrid retrieval이 필요한 질의는 무엇인가?
- GraphRAG indexing cost를 정당화할 "전역/관계 질문"이 실제로 있는가?
- retrieved context가 answer에 사용됐는지 어떻게 평가하는가?

### Local LLM/vLLM 문서를 읽을 때

- 목표가 developer UX인가, OpenAI-compatible private API인가, GPU throughput인가?
- context length를 늘렸을 때 VRAM/KV cache/latency가 감당되는가?
- model format은 GGUF, HF safetensors, TensorRT engine, compiled artifact 중 무엇인가?
- structured output/tool call/reasoning parser가 필요한가?

### Eval/observability 문서를 읽을 때

- trace에 prompt, retrieved docs, tool args, user identifiers가 저장되는가?
- eval은 retrieval만, generation만, end-to-end 중 어디를 검증하는가?
- metric threshold가 CI gate인지, dashboard signal인지, human review queue인지?
- production trace를 dataset으로 승격하는 workflow가 있는가?

## 5. 공식 근거 링크

- Anthropic, Effective context engineering for AI agents: <https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents>
- Anthropic, Effective harnesses for long-running agents: <https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents>
- LangChain docs, Context engineering in agents: <https://docs.langchain.com/oss/python/langchain/context-engineering>
- vLLM docs: <https://docs.vllm.ai/>
- Ollama context length: <https://docs.ollama.com/context-length>
- SGLang docs: <https://docs.sglang.io/>
- Microsoft GraphRAG docs: <https://microsoft.github.io/graphrag/>
- Promptfoo, Evaluating RAG pipelines: <https://www.promptfoo.dev/docs/guides/evaluate-rag/>
- Ragas docs: <https://docs.ragas.io/>
- Phoenix docs: <https://arize.com/docs/phoenix>
- Langfuse docs: <https://langfuse.com/docs>
- LiteLLM docs: <https://docs.litellm.ai/>
