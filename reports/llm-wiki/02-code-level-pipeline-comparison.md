# LLM Wiki 100 Code-Level Pipeline Comparison

작성일: 2026-06-17T23:31:58.667Z

이 문서는 `data/llm-wiki-repositories.json`의 100개 로컬 클론을 같은 정적 코드 스캔 기준으로 다시 비교한 결과다. 기존 구조 분석이 README, manifest, 디렉터리 표면을 본 1차 분석이라면, 이 문서는 실제 소스에서 ingestion, parsing, chunking, embedding, retrieval, wiki/graph, memory update, provenance, eval/observability, agent/MCP 신호를 찾는다.

## 산출물

- 정규화 데이터: `data/llm-wiki-code-level-analysis-100.json`
- 전체 비교 보고서: `reports/llm-wiki/02-code-level-pipeline-comparison.md`
- 레포별 코드 분석: `reports/llm-wiki/code-level-repositories/*.md`

## 방법

- `rg` 기반 정적 스캔으로 각 레포의 텍스트/코드 파일을 조사했다.
- `node_modules`, `.git`, build artifact, lock file, binary/media 파일은 제외했다.
- `code`는 테스트/문서가 아닌 소스 파일에서 직접 매치된 경우, `doc`은 README/docs/config 등에서만 매치된 경우다.
- 이 분석은 실행/동작 검증이 아니라 코드 표면 비교다. 따라서 false positive/negative가 있을 수 있고, 상위 후보는 레포별 보고서의 evidence line으로 재검토해야 한다.

## 전체 커버리지

| metric | value |
| --- | --- |
| 분석 레포 | 100 |
| 로컬 clone 존재 | 100 |
| 평균 code files | 545 |
| 평균 maturity score | 81 |

## 단계별 구현 신호

| phase | code repos | doc-only repos | matched total |
| --- | --- | --- | --- |
| Ingestion/source intake | 78 | 15 | 93 |
| Parsing/OCR/document extraction | 78 | 18 | 96 |
| Chunking/splitting | 84 | 10 | 94 |
| Embedding/vector index | 80 | 17 | 97 |
| Retrieval/search/rerank | 90 | 10 | 100 |
| Wiki/graph/entity model | 79 | 20 | 99 |
| Memory/update lifecycle | 87 | 12 | 99 |
| Provenance/citation/evidence | 75 | 20 | 95 |
| Evaluation/observability | 84 | 13 | 97 |
| Agent/MCP/tool surface | 87 | 13 | 100 |

## 의존성 기반 신호

| capability | repos |
| --- | --- |
| LLM/app framework | 65 |
| Vector/search store | 42 |
| Graph/KG store | 26 |
| Document parsing/OCR | 45 |
| Eval/observability | 21 |
| Persistence/database | 45 |

## 유형 분포

| type | count |
| --- | --- |
| rag-knowledge-platform | 37 |
| graph-rag/kg | 30 |
| curated-list/tutorial | 14 |
| persistent-llm-wiki | 11 |
| curated-list/template | 4 |
| agent-memory/tooling | 3 |
| mixed/partial-kb | 1 |

## 성숙도 분포

| band | count |
| --- | --- |
| A integrated platform | 70 |
| B production-leaning | 6 |
| C focused implementation | 12 |
| D small/demo/list | 12 |

## 코드 레벨 상위 후보

| repo | type | maturity | stars | pipeline | memory | report |
| --- | --- | --- | --- | --- | --- | --- |
| infiniflow/ragflow | graph-rag/kg | A integrated platform 108 | 83027 | 5 | 3 | reports/llm-wiki/code-level-repositories/infiniflow__ragflow.md |
| PaddlePaddle/PaddleOCR | rag-knowledge-platform | A integrated platform 108 | 82807 | 5 | 3 | reports/llm-wiki/code-level-repositories/PaddlePaddle__PaddleOCR.md |
| onyx-dot-app/onyx | rag-knowledge-platform | A integrated platform 108 | 30391 | 5 | 3 | reports/llm-wiki/code-level-repositories/onyx-dot-app__onyx.md |
| labring/FastGPT | rag-knowledge-platform | A integrated platform 108 | 28496 | 5 | 3 | reports/llm-wiki/code-level-repositories/labring__FastGPT.md |
| arc53/DocsGPT | graph-rag/kg | A integrated platform 108 | 17938 | 5 | 3 | reports/llm-wiki/code-level-repositories/arc53__DocsGPT.md |
| Tencent/WeKnora | graph-rag/kg | A integrated platform 108 | 16422 | 5 | 3 | reports/llm-wiki/code-level-repositories/Tencent__WeKnora.md |
| langbot-app/LangBot | rag-knowledge-platform | A integrated platform 108 | 16358 | 5 | 3 | reports/llm-wiki/code-level-repositories/langbot-app__LangBot.md |
| MODSetter/SurfSense | rag-knowledge-platform | A integrated platform 108 | 14914 | 5 | 3 | reports/llm-wiki/code-level-repositories/MODSetter__SurfSense.md |
| MemTensor/MemOS | rag-knowledge-platform | A integrated platform 108 | 9913 | 5 | 3 | reports/llm-wiki/code-level-repositories/MemTensor__MemOS.md |
| VoltAgent/voltagent | rag-knowledge-platform | A integrated platform 108 | 9661 | 5 | 3 | reports/llm-wiki/code-level-repositories/VoltAgent__voltagent.md |
| OpenSPG/KAG | graph-rag/kg | A integrated platform 108 | 8834 | 5 | 3 | reports/llm-wiki/code-level-repositories/OpenSPG__KAG.md |
| kreuzberg-dev/kreuzberg | rag-knowledge-platform | A integrated platform 108 | 8500 | 5 | 3 | reports/llm-wiki/code-level-repositories/kreuzberg-dev__kreuzberg.md |
| LearningCircuit/local-deep-research | rag-knowledge-platform | A integrated platform 108 | 8493 | 5 | 3 | reports/llm-wiki/code-level-repositories/LearningCircuit__local-deep-research.md |
| raphaelmansuy/edgequake | graph-rag/kg | A integrated platform 108 | 2003 | 5 | 3 | reports/llm-wiki/code-level-repositories/raphaelmansuy__edgequake.md |
| semantica-agi/semantica | graph-rag/kg | A integrated platform 108 | 1225 | 5 | 3 | reports/llm-wiki/code-level-repositories/semantica-agi__semantica.md |
| apecloud/ApeRAG | graph-rag/kg | A integrated platform 108 | 1193 | 5 | 3 | reports/llm-wiki/code-level-repositories/apecloud__ApeRAG.md |
| xr843/fojin | graph-rag/kg | A integrated platform 108 | 312 | 5 | 3 | reports/llm-wiki/code-level-repositories/xr843__fojin.md |
| xuiltul/animaworks | graph-rag/kg | A integrated platform 108 | 240 | 5 | 3 | reports/llm-wiki/code-level-repositories/xuiltul__animaworks.md |
| zhimaAi/ChatClaw | rag-knowledge-platform | A integrated platform 107 | 291 | 5 | 3 | reports/llm-wiki/code-level-repositories/zhimaAi__ChatClaw.md |
| HKUDS/LightRAG | graph-rag/kg | A integrated platform 106 | 36711 | 5 | 3 | reports/llm-wiki/code-level-repositories/HKUDS__LightRAG.md |
| yusufkaraaslan/Skill_Seekers | graph-rag/kg | A integrated platform 106 | 14134 | 5 | 3 | reports/llm-wiki/code-level-repositories/yusufkaraaslan__Skill_Seekers.md |
| langroid/langroid | graph-rag/kg | A integrated platform 106 | 4040 | 5 | 3 | reports/llm-wiki/code-level-repositories/langroid__langroid.md |
| nanbingxyz/5ire | rag-knowledge-platform | A integrated platform 105 | 5247 | 5 | 3 | reports/llm-wiki/code-level-repositories/nanbingxyz__5ire.md |
| joungminsung/OpenDocuments | rag-knowledge-platform | A integrated platform 105 | 80 | 5 | 3 | reports/llm-wiki/code-level-repositories/joungminsung__OpenDocuments.md |
| abhigyanpatwari/GitNexus | graph-rag/kg | A integrated platform 104 | 42381 | 5 | 3 | reports/llm-wiki/code-level-repositories/abhigyanpatwari__GitNexus.md |
| getzep/graphiti | graph-rag/kg | A integrated platform 104 | 27553 | 5 | 3 | reports/llm-wiki/code-level-repositories/getzep__graphiti.md |
| llmware-ai/llmware | rag-knowledge-platform | A integrated platform 104 | 14837 | 5 | 3 | reports/llm-wiki/code-level-repositories/llmware-ai__llmware.md |
| neomjs/neo | graph-rag/kg | A integrated platform 104 | 3206 | 5 | 3 | reports/llm-wiki/code-level-repositories/neomjs__neo.md |
| InternLM/HuixiangDou | graph-rag/kg | A integrated platform 104 | 2492 | 5 | 3 | reports/llm-wiki/code-level-repositories/InternLM__HuixiangDou.md |
| 1517005260/graph-rag-agent | graph-rag/kg | A integrated platform 104 | 2227 | 5 | 3 | reports/llm-wiki/code-level-repositories/1517005260__graph-rag-agent.md |

## Direct LLM Wiki 구현 비교

| repo | type | maturity | ingest | wiki | update | provenance | eval | report |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| nashsu/llm_wiki | persistent-llm-wiki | 101 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/nashsu__llm_wiki.md |
| ohbryt/bb-wiki | persistent-llm-wiki | 47 | code | code | code | code | doc | reports/llm-wiki/code-level-repositories/ohbryt__bb-wiki.md |
| SamurAIGPT/llm-wiki-agent | persistent-llm-wiki | 72 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/SamurAIGPT__llm-wiki-agent.md |
| Egonex-AI/Understand-Anything | persistent-llm-wiki | 90 | doc | code | code | code | code | reports/llm-wiki/code-level-repositories/Egonex-AI__Understand-Anything.md |
| zosmaai/pi-llm-wiki | persistent-llm-wiki | 98 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/zosmaai__pi-llm-wiki.md |
| green-dalii/obsidian-llm-wiki | persistent-llm-wiki | 99 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/green-dalii__obsidian-llm-wiki.md |
| stanford-oval/WikiChat | persistent-llm-wiki | 94 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/stanford-oval__WikiChat.md |
| matevip/mateclaw | persistent-llm-wiki | 104 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/matevip__mateclaw.md |
| AgriciDaniel/claude-obsidian | persistent-llm-wiki | 98 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/AgriciDaniel__claude-obsidian.md |
| Ar9av/obsidian-wiki | persistent-llm-wiki | 88 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/Ar9av__obsidian-wiki.md |
| hjhun/llm-wiki | persistent-llm-wiki | 100 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/hjhun__llm-wiki.md |

## GraphRAG/KG 상위 구현

| repo | type | graphFiles | retrieval | vector | deps | report |
| --- | --- | --- | --- | --- | --- | --- |
| infiniflow/ragflow | graph-rag/kg | 260 | code | code | LLM/app framework: openai-speech-stream-player, anthropic, ollama, openai, litellm; Vector/search store: elasticsearch-dsl, opensearch-py, elasticsearch, github.com/elastic/go-elasticsearch/v8, github.com/elastic/elastic-transport-go/v8 | reports/llm-wiki/code-level-repositories/infiniflow__ragflow.md |
| PaddlePaddle/PaddleOCR | rag-knowledge-platform | 15 | code | code | LLM/app framework: langchain-paddleocr, langchain-core, langchain-tests; Document parsing/OCR: @paddleocr/paddleocr-js, python_docx, python-docx, beautifulsoup4, langchain-paddleocr, paddleocr, paddleocr_mcp, docx2markdown | reports/llm-wiki/code-level-repositories/PaddlePaddle__PaddleOCR.md |
| onyx-dot-app/onyx | rag-knowledge-platform | 102 | code | code | LLM/app framework: litellm, openai, langchain-core, sentence-transformers, transformers; Vector/search store: opensearch-py, github.com/alecthomas/chroma/v2 | reports/llm-wiki/code-level-repositories/onyx-dot-app__onyx.md |
| labring/FastGPT | rag-knowledge-platform | 14 | code | code | LLM/app framework: openai, @llamaindex/liteparse; Vector/search store: @zilliz/milvus2-sdk-node | reports/llm-wiki/code-level-repositories/labring__FastGPT.md |
| arc53/DocsGPT | graph-rag/kg | 2 | code | code | LLM/app framework: anthropic, langchain, langchain-community, langchain-core, langchain-openai, langchain-text-splitters, openai, sentence-transformers; Vector/search store: faiss-cpu | reports/llm-wiki/code-level-repositories/arc53__DocsGPT.md |
| Tencent/WeKnora | graph-rag/kg | 106 | code | code | LLM/app framework: github.com/ollama/ollama, github.com/sashabaranov/go-openai; Vector/search store: github.com/elastic/go-elasticsearch/v7, github.com/elastic/go-elasticsearch/v8, github.com/milvus-io/milvus/client/v2, github.com/opensearch-project/opensearch-go/v4, github.com/pgvector/pgvector-go, github.com/qdrant/go-client, github.com/weaviate/weaviate, github.com/weaviate/weaviate-go-client/v5 | reports/llm-wiki/code-level-repositories/Tencent__WeKnora.md |
| langbot-app/LangBot | rag-knowledge-platform | 190 | code | code | LLM/app framework: anthropic, ollama, openai, langchain, langchain-core, langchain-text-splitters, litellm; Vector/search store: chromadb, pymilvus, pgvector | reports/llm-wiki/code-level-repositories/langbot-app__LangBot.md |
| MODSetter/SurfSense | rag-knowledge-platform | 66 | code | code | LLM/app framework: sentence-transformers, langchain-unstructured, langchain-daytona, langchain, langchain-community, litellm, langchain-litellm; Vector/search store: pgvector, elasticsearch | reports/llm-wiki/code-level-repositories/MODSetter__SurfSense.md |
| MemTensor/MemOS | rag-knowledge-platform | 79 | code | code | LLM/app framework: @huggingface/transformers; Document parsing/OCR: markitdown | reports/llm-wiki/code-level-repositories/MemTensor__MemOS.md |
| VoltAgent/voltagent | rag-knowledge-platform | 34 | code | code | LLM/app framework: @anthropic-ai/sdk, @ai-sdk/openai, @chroma-core/ollama, @chroma-core/openai; Vector/search store: @chroma-core/default-embed, @chroma-core/ollama, @chroma-core/openai, chromadb, @lancedb/lancedb | reports/llm-wiki/code-level-repositories/VoltAgent__voltagent.md |
| OpenSPG/KAG | graph-rag/kg | 97 | code | code | LLM/app framework: openai, ollama; Graph/KG store: networkx, neo4j | reports/llm-wiki/code-level-repositories/OpenSPG__KAG.md |
| kreuzberg-dev/kreuzberg | rag-knowledge-platform | 92 | code | code | LLM/app framework: candle-transformers; Vector/search store: Elastic-2.0 | reports/llm-wiki/code-level-repositories/kreuzberg-dev__kreuzberg.md |
| LearningCircuit/local-deep-research | rag-knowledge-platform | 42 | code | code | LLM/app framework: langchain, langchain-community, langchain-core, langchain-ollama, langchain-openai, langchain-anthropic, openai, sentence-transformers; Vector/search store: faiss-cpu, elasticsearch | reports/llm-wiki/code-level-repositories/LearningCircuit__local-deep-research.md |
| raphaelmansuy/edgequake | graph-rag/kg | 394 | code | code | LLM/app framework: async-openai; Eval/observability: metrics-exporter-prometheus, opentelemetry, opentelemetry_sdk, opentelemetry-otlp, tracing-opentelemetry | reports/llm-wiki/code-level-repositories/raphaelmansuy__edgequake.md |
| semantica-agi/semantica | graph-rag/kg | 214 | code | code | LLM/app framework: transformers, sentence-transformers, openai, anthropic, ollama, litellm; Vector/search store: faiss-cpu, qdrant-client, weaviate-client, pinecone-client, pymilvus, pgvector, faiss-gpu | reports/llm-wiki/code-level-repositories/semantica-agi__semantica.md |
| apecloud/ApeRAG | graph-rag/kg | 39 | code | code | LLM/app framework: langchain, llama-index, openai, llama-index-embeddings-langchain, llama-index-vector-stores-qdrant, litellm, sentence-transformers, transformers; Vector/search store: qdrant-client, elasticsearch, llama-index-vector-stores-qdrant, pgvector | reports/llm-wiki/code-level-repositories/apecloud__ApeRAG.md |
| xr843/fojin | graph-rag/kg | 104 | code | code | LLM/app framework: openai; Vector/search store: elasticsearch, pgvector | reports/llm-wiki/code-level-repositories/xr843__fojin.md |
| xuiltul/animaworks | graph-rag/kg | 61 | code | code | LLM/app framework: anthropic, openai-codex, openai-codex-cli-bin, litellm, sentence-transformers; Vector/search store: chromadb | reports/llm-wiki/code-level-repositories/xuiltul__animaworks.md |
| zhimaAi/ChatClaw | rag-knowledge-platform | 1 | code | code | LLM/app framework: github.com/cloudwego/eino-ext/components/embedding/ollama, github.com/cloudwego/eino-ext/components/embedding/openai, github.com/cloudwego/eino-ext/components/model/ollama, github.com/cloudwego/eino-ext/components/model/openai, github.com/anthropics/anthropic-sdk-go, github.com/cloudwego/eino-ext/libs/acl/openai, github.com/eino-contrib/ollama, github.com/meguminnnnnnnnn/go-openai; Document parsing/OCR: @vue-office/docx, github.com/nguyenthenguyen/docx | reports/llm-wiki/code-level-repositories/zhimaAi__ChatClaw.md |
| HKUDS/LightRAG | graph-rag/kg | 46 | code | code | LLM/app framework: anthropic, llama-index, llama-index-llms-openai, ollama, openai, langchain-text-splitters, langchain-experimental; Vector/search store: faiss-cpu, opensearch-py, pgvector, pymilvus, qdrant-client | reports/llm-wiki/code-level-repositories/HKUDS__LightRAG.md |
| yusufkaraaslan/Skill_Seekers | graph-rag/kg | 16 | code | code | LLM/app framework: openai, haystack-ai, langchain, langchain-community, langchain-openai, llama-index, llama-index-core, llama-index-llms-openai; Vector/search store: chromadb, faiss-cpu, pinecone-client, qdrant-client, weaviate-client, pinecone | reports/llm-wiki/code-level-repositories/yusufkaraaslan__Skill_Seekers.md |
| langroid/langroid | graph-rag/kg | 24 | code | code | LLM/app framework: openai, sentence-transformers, transformers, litellm; Vector/search store: qdrant-client, lancedb, chromadb, weaviate-client, pinecone-client, pgvector, meilisearch-python-sdk | reports/llm-wiki/code-level-repositories/langroid__langroid.md |
| nanbingxyz/5ire | rag-knowledge-platform | 6 | code | code | LLM/app framework: @xenova/transformers; Vector/search store: @lancedb/lancedb | reports/llm-wiki/code-level-repositories/nanbingxyz__5ire.md |
| joungminsung/OpenDocuments | rag-knowledge-platform | 3 | code | code | LLM/app framework: opendocuments-model-ollama; Vector/search store: @lancedb/lancedb | reports/llm-wiki/code-level-repositories/joungminsung__OpenDocuments.md |
| abhigyanpatwari/GitNexus | graph-rag/kg | 99 | code | code | LLM/app framework: @langchain/anthropic, @langchain/core, @langchain/google-genai, @langchain/langgraph, @langchain/ollama, @langchain/openai, langchain, @huggingface/transformers | reports/llm-wiki/code-level-repositories/abhigyanpatwari__GitNexus.md |

## RAG 지식베이스 상위 구현

| repo | maturity | ingest | parse | chunk | vector | retrieve | report |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PaddlePaddle/PaddleOCR | 108 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/PaddlePaddle__PaddleOCR.md |
| onyx-dot-app/onyx | 108 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/onyx-dot-app__onyx.md |
| labring/FastGPT | 108 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/labring__FastGPT.md |
| langbot-app/LangBot | 108 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/langbot-app__LangBot.md |
| MODSetter/SurfSense | 108 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/MODSetter__SurfSense.md |
| MemTensor/MemOS | 108 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/MemTensor__MemOS.md |
| VoltAgent/voltagent | 108 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/VoltAgent__voltagent.md |
| kreuzberg-dev/kreuzberg | 108 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/kreuzberg-dev__kreuzberg.md |
| LearningCircuit/local-deep-research | 108 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/LearningCircuit__local-deep-research.md |
| zhimaAi/ChatClaw | 107 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/zhimaAi__ChatClaw.md |
| nanbingxyz/5ire | 105 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/nanbingxyz__5ire.md |
| joungminsung/OpenDocuments | 105 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/joungminsung__OpenDocuments.md |
| llmware-ai/llmware | 104 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/llmware-ai__llmware.md |
| axoviq-ai/synthadoc | 104 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/axoviq-ai__synthadoc.md |
| bzsanti/oxidizePdf | 104 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/bzsanti__oxidizePdf.md |
| NevaMind-AI/memU | 103 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/NevaMind-AI__memU.md |
| StarTrail-org/LEANN | 103 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/StarTrail-org__LEANN.md |
| arthurpanhku/DocSentinel | 102 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/arthurpanhku__DocSentinel.md |
| khoj-ai/khoj | 101 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/khoj-ai__khoj.md |
| opendataloader-project/opendataloader-pdf | 100 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/opendataloader-project__opendataloader-pdf.md |
| szczyglis-dev/py-gpt | 100 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/szczyglis-dev__py-gpt.md |
| zhitongblog/solomd | 100 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/zhitongblog__solomd.md |
| memvid/memvid | 99 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/memvid__memvid.md |
| tobi/qmd | 98 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/tobi__qmd.md |
| openai/chatgpt-retrieval-plugin | 98 | code | code | code | code | code | reports/llm-wiki/code-level-repositories/openai__chatgpt-retrieval-plugin.md |

## 전체 100개 compact matrix

| no | repo | type | maturity | stars | ingest | parse | chunk | vector | retrieve | wiki | update | prov | eval | agent | report |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | nashsu/llm_wiki | persistent-llm-wiki | 101 | 11791 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/nashsu__llm_wiki.md |
| 2 | Tencent/WeKnora | graph-rag/kg | 108 | 16422 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/Tencent__WeKnora.md |
| 3 | ohbryt/bb-wiki | persistent-llm-wiki | 47 | 0 | code | doc | doc | doc | code | code | code | code | doc | doc | reports/llm-wiki/code-level-repositories/ohbryt__bb-wiki.md |
| 4 | SamurAIGPT/llm-wiki-agent | persistent-llm-wiki | 72 | 2959 | code | code | - | - | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/SamurAIGPT__llm-wiki-agent.md |
| 5 | axoviq-ai/synthadoc | rag-knowledge-platform | 104 | 464 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/axoviq-ai__synthadoc.md |
| 6 | arthurpanhku/DocSentinel | rag-knowledge-platform | 102 | 88 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/arthurpanhku__DocSentinel.md |
| 7 | joungminsung/OpenDocuments | rag-knowledge-platform | 105 | 80 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/joungminsung__OpenDocuments.md |
| 8 | safishamsi/graphify | graph-rag/kg | 103 | 68688 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/safishamsi__graphify.md |
| 9 | tirth8205/code-review-graph | graph-rag/kg | 103 | 18632 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/tirth8205__code-review-graph.md |
| 10 | Egonex-AI/Understand-Anything | persistent-llm-wiki | 90 | 62740 | doc | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/Egonex-AI__Understand-Anything.md |
| 11 | raphaelmansuy/edgequake | graph-rag/kg | 108 | 2003 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/raphaelmansuy__edgequake.md |
| 12 | zosmaai/pi-llm-wiki | persistent-llm-wiki | 98 | 154 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/zosmaai__pi-llm-wiki.md |
| 13 | green-dalii/obsidian-llm-wiki | persistent-llm-wiki | 99 | 101 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/green-dalii__obsidian-llm-wiki.md |
| 14 | chatchat-space/Langchain-Chatchat | rag-knowledge-platform | 86 | 38186 | code | code | code | code | code | doc | code | - | code | code | reports/llm-wiki/code-level-repositories/chatchat-space__Langchain-Chatchat.md |
| 15 | stanford-oval/WikiChat | persistent-llm-wiki | 94 | 1602 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/stanford-oval__WikiChat.md |
| 16 | labring/FastGPT | rag-knowledge-platform | 108 | 28496 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/labring__FastGPT.md |
| 17 | memvid/memvid | rag-knowledge-platform | 99 | 15665 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/memvid__memvid.md |
| 18 | matevip/mateclaw | persistent-llm-wiki | 104 | 624 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/matevip__mateclaw.md |
| 19 | VectifyAI/PageIndex | agent-memory/tooling | 48 | 33160 | doc | code | code | doc | code | doc | code | doc | doc | code | reports/llm-wiki/code-level-repositories/VectifyAI__PageIndex.md |
| 20 | enescingoz/awesome-n8n-templates | curated-list/tutorial | 4 | 23064 | doc | doc | doc | doc | doc | doc | doc | doc | doc | doc | reports/llm-wiki/code-level-repositories/enescingoz__awesome-n8n-templates.md |
| 21 | AgriciDaniel/claude-obsidian | persistent-llm-wiki | 98 | 7035 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/AgriciDaniel__claude-obsidian.md |
| 22 | semantica-agi/semantica | graph-rag/kg | 108 | 1225 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/semantica-agi__semantica.md |
| 23 | NirDiamant/RAG_Techniques | curated-list/tutorial | 46 | 28013 | - | code | code | code | code | doc | doc | doc | code | code | reports/llm-wiki/code-level-repositories/NirDiamant__RAG_Techniques.md |
| 24 | HKUDS/LightRAG | graph-rag/kg | 106 | 36711 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/HKUDS__LightRAG.md |
| 25 | linny006/rag-radar | curated-list/tutorial | 23 | 1 | doc | doc | - | doc | code | doc | code | doc | doc | doc | reports/llm-wiki/code-level-repositories/linny006__rag-radar.md |
| 26 | khoj-ai/khoj | rag-knowledge-platform | 101 | 35186 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/khoj-ai__khoj.md |
| 27 | Ar9av/obsidian-wiki | persistent-llm-wiki | 88 | 2232 | code | code | code | doc | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/Ar9av__obsidian-wiki.md |
| 28 | VectifyAI/OpenKB | rag-knowledge-platform | 98 | 2083 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/VectifyAI__OpenKB.md |
| 29 | IAAR-Shanghai/Awesome-AI-Memory | curated-list/tutorial | 0 | 996 | doc | doc | doc | doc | doc | doc | doc | doc | doc | doc | reports/llm-wiki/code-level-repositories/IAAR-Shanghai__Awesome-AI-Memory.md |
| 30 | zhimaAi/ChatClaw | rag-knowledge-platform | 107 | 291 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/zhimaAi__ChatClaw.md |
| 31 | benmaster82/Kwipu | graph-rag/kg | 63 | 248 | - | code | code | code | code | code | code | doc | doc | code | reports/llm-wiki/code-level-repositories/benmaster82__Kwipu.md |
| 32 | studyield/studyield | graph-rag/kg | 99 | 50 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/studyield__studyield.md |
| 33 | iikarus/Dragon-Brain | graph-rag/kg | 84 | 48 | code | doc | doc | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/iikarus__Dragon-Brain.md |
| 34 | iammonth1997/paperwiki-research-compiler | curated-list/template | 4 | 0 | doc | doc | - | doc | doc | doc | doc | doc | doc | doc | reports/llm-wiki/code-level-repositories/iammonth1997__paperwiki-research-compiler.md |
| 35 | abhigyanpatwari/GitNexus | graph-rag/kg | 104 | 42381 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/abhigyanpatwari__GitNexus.md |
| 36 | onyx-dot-app/onyx | rag-knowledge-platform | 108 | 30391 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/onyx-dot-app__onyx.md |
| 37 | getzep/graphiti | graph-rag/kg | 104 | 27553 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/getzep__graphiti.md |
| 38 | openai/chatgpt-retrieval-plugin | rag-knowledge-platform | 98 | 21190 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/openai__chatgpt-retrieval-plugin.md |
| 39 | tobi/qmd | rag-knowledge-platform | 98 | 26713 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/tobi__qmd.md |
| 40 | OpenSPG/KAG | graph-rag/kg | 108 | 8834 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/OpenSPG__KAG.md |
| 41 | neo4j-labs/llm-graph-builder | graph-rag/kg | 97 | 4799 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/neo4j-labs__llm-graph-builder.md |
| 42 | HKUST-KnowComp/AutoSchemaKG | graph-rag/kg | 91 | 761 | code | code | code | code | code | code | code | doc | code | code | reports/llm-wiki/code-level-repositories/HKUST-KnowComp__AutoSchemaKG.md |
| 43 | xr843/fojin | graph-rag/kg | 108 | 312 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/xr843__fojin.md |
| 44 | arc53/DocsGPT | graph-rag/kg | 108 | 17938 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/arc53__DocsGPT.md |
| 45 | kreuzberg-dev/kreuzberg | rag-knowledge-platform | 108 | 8500 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/kreuzberg-dev__kreuzberg.md |
| 46 | OSU-NLP-Group/HippoRAG | graph-rag/kg | 59 | 3631 | - | - | code | code | code | code | code | doc | code | code | reports/llm-wiki/code-level-repositories/OSU-NLP-Group__HippoRAG.md |
| 47 | DEEP-PolyU/Awesome-GraphRAG | curated-list/tutorial | 0 | 2474 | - | doc | - | doc | doc | doc | doc | doc | doc | doc | reports/llm-wiki/code-level-repositories/DEEP-PolyU__Awesome-GraphRAG.md |
| 48 | marswangyang/personal-ai-memory | rag-knowledge-platform | 79 | 48 | code | - | code | code | code | doc | code | code | code | code | reports/llm-wiki/code-level-repositories/marswangyang__personal-ai-memory.md |
| 49 | datawhalechina/tiny-universe | curated-list/tutorial | 46 | 4916 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/datawhalechina__tiny-universe.md |
| 50 | GiovanniPasq/agentic-rag-for-dummies | curated-list/tutorial | 46 | 3502 | code | code | code | code | code | code | code | - | code | code | reports/llm-wiki/code-level-repositories/GiovanniPasq__agentic-rag-for-dummies.md |
| 51 | opendatalab/MinerU-Document-Explorer | rag-knowledge-platform | 95 | 586 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/opendatalab__MinerU-Document-Explorer.md |
| 52 | pathwaycom/llm-app | rag-knowledge-platform | 77 | 59331 | doc | code | code | code | code | code | code | doc | code | code | reports/llm-wiki/code-level-repositories/pathwaycom__llm-app.md |
| 53 | infiniflow/ragflow | graph-rag/kg | 108 | 83027 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/infiniflow__ragflow.md |
| 54 | NirDiamant/GenAI_Agents | curated-list/tutorial | 15 | 22688 | doc | code | doc | doc | doc | doc | doc | doc | doc | code | reports/llm-wiki/code-level-repositories/NirDiamant__GenAI_Agents.md |
| 55 | PaddlePaddle/PaddleOCR | rag-knowledge-platform | 108 | 82807 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/PaddlePaddle__PaddleOCR.md |
| 56 | opendataloader-project/opendataloader-pdf | rag-knowledge-platform | 100 | 25243 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/opendataloader-project__opendataloader-pdf.md |
| 57 | LearningCircuit/local-deep-research | rag-knowledge-platform | 108 | 8493 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/LearningCircuit__local-deep-research.md |
| 58 | Marker-Inc-Korea/AutoRAG | rag-knowledge-platform | 96 | 4832 | code | code | code | code | code | doc | code | code | code | code | reports/llm-wiki/code-level-repositories/Marker-Inc-Korea__AutoRAG.md |
| 59 | phonghhd/EvoNet-AI-Core | graph-rag/kg | 83 | 4 | code | - | code | code | code | code | code | doc | code | code | reports/llm-wiki/code-level-repositories/phonghhd__EvoNet-AI-Core.md |
| 60 | hjhun/llm-wiki | persistent-llm-wiki | 100 | 0 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/hjhun__llm-wiki.md |
| 61 | neomjs/neo | graph-rag/kg | 104 | 3206 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/neomjs__neo.md |
| 62 | HKUDS/VideoRAG | rag-knowledge-platform | 78 | 3065 | code | doc | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/HKUDS__VideoRAG.md |
| 63 | 1517005260/graph-rag-agent | graph-rag/kg | 104 | 2227 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/1517005260__graph-rag-agent.md |
| 64 | SaiAkhil066/CORTEX-AI-SUPER-RAG | graph-rag/kg | 87 | 1727 | code | code | code | code | code | code | code | - | code | code | reports/llm-wiki/code-level-repositories/SaiAkhil066__CORTEX-AI-SUPER-RAG.md |
| 65 | yifanfeng97/Hyper-Extract | graph-rag/kg | 89 | 1571 | doc | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/yifanfeng97__Hyper-Extract.md |
| 66 | KalyanKS-NLP/rag-zero-to-hero-guide | curated-list/tutorial | 0 | 1348 | doc | doc | doc | doc | doc | doc | doc | doc | doc | doc | reports/llm-wiki/code-level-repositories/KalyanKS-NLP__rag-zero-to-hero-guide.md |
| 67 | apecloud/ApeRAG | graph-rag/kg | 108 | 1193 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/apecloud__ApeRAG.md |
| 68 | onlybooks/llm | curated-list/template | 25 | 200 | - | - | - | code | code | - | - | - | - | code | reports/llm-wiki/code-level-repositories/onlybooks__llm.md |
| 69 | bzsanti/oxidizePdf | rag-knowledge-platform | 104 | 176 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/bzsanti__oxidizePdf.md |
| 70 | kkollsga/kglite | graph-rag/kg | 104 | 31 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/kkollsga__kglite.md |
| 71 | jee3m/augmentative-knowledge-hooks | curated-list/template | 4 | 0 | - | doc | doc | doc | doc | doc | doc | doc | - | doc | reports/llm-wiki/code-level-repositories/jee3m__augmentative-knowledge-hooks.md |
| 72 | otomata-tech/memento-core | rag-knowledge-platform | 88 | 0 | code | doc | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/otomata-tech__memento-core.md |
| 73 | langbot-app/LangBot | rag-knowledge-platform | 108 | 16358 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/langbot-app__LangBot.md |
| 74 | MODSetter/SurfSense | rag-knowledge-platform | 108 | 14914 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/MODSetter__SurfSense.md |
| 75 | yusufkaraaslan/Skill_Seekers | graph-rag/kg | 106 | 14134 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/yusufkaraaslan__Skill_Seekers.md |
| 76 | neuml/txtai | rag-knowledge-platform | 92 | 12669 | code | code | code | code | code | code | code | doc | code | code | reports/llm-wiki/code-level-repositories/neuml__txtai.md |
| 77 | The-Pocket/PocketFlow | rag-knowledge-platform | 91 | 10769 | code | code | code | code | code | doc | code | code | code | code | reports/llm-wiki/code-level-repositories/The-Pocket__PocketFlow.md |
| 78 | WangRongsheng/awesome-LLM-resources | curated-list/tutorial | 0 | 8550 | doc | doc | - | doc | doc | doc | doc | doc | doc | doc | reports/llm-wiki/code-level-repositories/WangRongsheng__awesome-LLM-resources.md |
| 79 | StarTrail-org/LEANN | rag-knowledge-platform | 103 | 12182 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/StarTrail-org__LEANN.md |
| 80 | aristoapp/awesome-second-brain | curated-list/tutorial | 0 | 422 | doc | doc | doc | doc | doc | doc | doc | doc | doc | doc | reports/llm-wiki/code-level-repositories/aristoapp__awesome-second-brain.md |
| 81 | stanford-oval/storm | rag-knowledge-platform | 92 | 28424 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/stanford-oval__storm.md |
| 82 | llmware-ai/llmware | rag-knowledge-platform | 104 | 14837 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/llmware-ai__llmware.md |
| 83 | NevaMind-AI/memU | rag-knowledge-platform | 103 | 13884 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/NevaMind-AI__memU.md |
| 84 | MemTensor/MemOS | rag-knowledge-platform | 108 | 9913 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/MemTensor__MemOS.md |
| 85 | VoltAgent/voltagent | rag-knowledge-platform | 108 | 9661 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/VoltAgent__voltagent.md |
| 86 | langroid/langroid | graph-rag/kg | 106 | 4040 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/langroid__langroid.md |
| 87 | OrionStarAI/Orion | mixed/partial-kb | 44 | 811 | - | doc | code | - | code | doc | code | code | code | doc | reports/llm-wiki/code-level-repositories/OrionStarAI__Orion.md |
| 88 | nanbingxyz/5ire | rag-knowledge-platform | 105 | 5247 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/nanbingxyz__5ire.md |
| 89 | PleasePrompto/notebooklm-mcp | agent-memory/tooling | 53 | 2810 | code | doc | code | - | code | doc | code | code | - | code | reports/llm-wiki/code-level-repositories/PleasePrompto__notebooklm-mcp.md |
| 90 | eugeniughelbur/obsidian-second-brain | rag-knowledge-platform | 88 | 2519 | code | code | code | doc | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/eugeniughelbur__obsidian-second-brain.md |
| 91 | zhitongblog/solomd | rag-knowledge-platform | 100 | 376 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/zhitongblog__solomd.md |
| 92 | Shubhamsaboo/awesome-llm-apps | curated-list/tutorial | 46 | 114877 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/Shubhamsaboo__awesome-llm-apps.md |
| 93 | patchy631/ai-engineering-hub | curated-list/tutorial | 46 | 35839 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/patchy631__ai-engineering-hub.md |
| 94 | NirDiamant/agents-towards-production | curated-list/tutorial | 46 | 20762 | code | code | code | doc | code | doc | doc | - | code | code | reports/llm-wiki/code-level-repositories/NirDiamant__agents-towards-production.md |
| 95 | luhengshiwo/LLMForEverybody | curated-list/template | 0 | 6742 | doc | doc | doc | doc | doc | doc | doc | doc | doc | doc | reports/llm-wiki/code-level-repositories/luhengshiwo__LLMForEverybody.md |
| 96 | InternLM/HuixiangDou | graph-rag/kg | 104 | 2492 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/InternLM__HuixiangDou.md |
| 97 | szczyglis-dev/py-gpt | rag-knowledge-platform | 100 | 1827 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/szczyglis-dev__py-gpt.md |
| 98 | jegly/Box | agent-memory/tooling | 70 | 595 | doc | doc | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/jegly__Box.md |
| 99 | xuiltul/animaworks | graph-rag/kg | 108 | 240 | code | code | code | code | code | code | code | code | code | code | reports/llm-wiki/code-level-repositories/xuiltul__animaworks.md |
| 100 | FalkorDB/FalkorDB | graph-rag/kg | 45 | 4597 | doc | doc | doc | doc | code | code | code | doc | code | doc | reports/llm-wiki/code-level-repositories/FalkorDB__FalkorDB.md |

## 해석

- persistent LLM wiki 구현은 RAG 제품보다 적지만, `wikiGraph`, `memoryUpdate`, `provenance`가 함께 있는지가 실제 차이를 만든다.
- RAG knowledge platform형은 ingestion -> parsing -> chunking -> embedding -> retrieval 파이프라인이 비교적 뚜렷하다. 그러나 wiki page lifecycle이나 conflict handling은 별도 구현 신호가 약한 경우가 많다.
- GraphRAG/KG형은 entity/relation/graph store 신호가 강하지만, 사람이 읽는 wiki page와 source provenance를 얼마나 유지하는지는 레포별 확인이 필요하다.
- awesome list/tutorial 성격의 레포는 stars가 높아도 code-level maturity가 낮게 나오는 것이 정상이다. 이들은 구현체가 아니라 학습/큐레이션 자료로 분리해서 봐야 한다.
- `evalObservability`와 `provenance`는 전체적으로 약한 축이다. 운영 가능한 LLM wiki/spec memory를 만들 때 가장 먼저 보강해야 할 부분이다.

## 데이터 사용법

각 레포의 상세 evidence는 `data/llm-wiki-code-level-analysis-100.json`의 `repositories[].dimensions`와 레포별 Markdown에 들어 있다. 특정 설계 후보를 뽑을 때는 stars보다 `type`, `maturity.score`, `phaseMarks`, `dependencies.byCapability`를 함께 봐야 한다.
