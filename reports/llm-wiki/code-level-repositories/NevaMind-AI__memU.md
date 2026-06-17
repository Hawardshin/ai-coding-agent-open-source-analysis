# NevaMind-AI/memU 코드 레벨 분석

생성일: 2026-06-17T23:31:50.539Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | A integrated platform (103) |
| stars | 13884 |
| language | Python |
| tags | rag, agent-knowledge, korea-signal |
| files/code/source | 215/151/115 |
| tests/ci | 17/3 |
| local path | sources/NevaMind-AI__memU |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 12 | 1 | src/memu/app/memorize.py:101 role="ingest", |
| Parsing/OCR/document extraction | code | 3 | 1 | src/memu/prompts/preprocess/audio.py:10 3. Add paragraph breaks where they improve readability or reflect topic shifts. |
| Chunking/splitting | code | 7 | 6 | src/memu/app/memorize.py:496 for segment in segments: |
| Embedding/vector index | code | 73 | 41 | src/memu/embedding/__init__.py:1 from memu.embedding.http_client import HTTPEmbeddingClient |
| Retrieval/search/rerank | code | 55 | 16 | src/memu/prompts/retrieve/pre_retrieval_decision.py:3 Determine whether the current query requires retrieving information from memory or can be answered directly without retrieval. |
| Wiki/graph/entity model | code | 31 | 15 | src/memu/app/memorize.py:144 produces={"resources", "items", "relations", "category_updates"}, |
| Memory/update lifecycle | code | 110 | 54 | src/memu/app/crud.py:55 msg = "List memory items workflow failed to produce a response" |
| Provenance/citation/evidence | code | 7 | 3 | src/memu/app/settings.py:157 description="When category retrieval is insufficient, follow [ref:ITEM_ID] citations to fetch referenced items.", |
| Evaluation/observability | code | 29 | 5 | src/memu/client/__init__.py:2 memU Client Wrapper for Auto-Recall Memory Injection. |
| Agent/MCP/tool surface | code | 65 | 24 | src/memu/app/crud.py:615 llm_client = self._get_step_llm_client(step_context) |

## 의존성 신호

- LLM/app framework: openai, langchain-core, langchain-openai, memu.client.openai_wrapper
- Vector/search store: pgvector
- Persistence/database: pgvector, sqlalchemy, PGH

## 주요 파일 후보

### Ingestion/source intake

- `src/memu/app/memorize.py`
- `.github/workflows/release-please.yml`
- `examples/sealos_support_agent.py`
- `README.md`
- `docs/architecture.md`
- `docs/sealos_use_case.md`
- `readme/README_en.md`
- `readme/README_es.md`
- `readme/README_fr.md`
- `readme/README_ja.md`
- `readme/README_ko.md`
- `readme/README_zh.md`

### Parsing/OCR/document extraction

- `src/memu/prompts/preprocess/audio.py`
- `.github/ISSUE_TEMPLATE/hackathon_task.yml`
- `examples/resources/docs/doc1.txt`

### Chunking/splitting

- `src/memu/app/memorize.py`
- `src/memu/database/models.py`
- `src/memu/database/postgres/models.py`
- `src/memu/database/sqlite/models.py`
- `src/memu/prompts/category_summary/category.py`
- `src/memu/prompts/preprocess/conversation.py`
- `examples/resources/logs/log3.txt`

### Embedding/vector index

- `src/memu/embedding/__init__.py`
- `src/memu/embedding/http_client.py`
- `src/memu/embedding/openai_sdk.py`
- `src/memu/embedding/backends/__init__.py`
- `src/memu/embedding/backends/base.py`
- `src/memu/embedding/backends/doubao.py`
- `src/memu/embedding/backends/openai.py`
- `src/memu/app/crud.py`
- `src/memu/app/memorize.py`
- `src/memu/app/patch.py`
- `src/memu/app/retrieve.py`
- `src/memu/app/service.py`
- ... 6 more

### Retrieval/search/rerank

- `src/memu/prompts/retrieve/pre_retrieval_decision.py`
- `src/memu/app/memorize.py`
- `src/memu/app/retrieve.py`
- `src/memu/app/service.py`
- `src/memu/app/settings.py`
- `src/memu/client/openai_wrapper.py`
- `src/memu/integrations/langgraph.py`
- `src/memu/prompts/__init__.py`
- `src/memu/database/inmemory/vector.py`
- `src/memu/database/sqlite/sqlite.py`
- `src/memu/prompts/memory_type/tool.py`
- `src/memu/prompts/retrieve/llm_category_ranker.py`
- ... 6 more

### Wiki/graph/entity model

- `src/memu/app/memorize.py`
- `src/memu/app/retrieve.py`
- `src/memu/database/interfaces.py`
- `src/memu/database/state.py`
- `src/memu/database/inmemory/models.py`
- `src/memu/database/inmemory/repo.py`
- `src/memu/database/postgres/models.py`
- `src/memu/database/postgres/postgres.py`
- `src/memu/database/repositories/category_item.py`
- `src/memu/database/sqlite/models.py`
- `src/memu/database/sqlite/sqlite.py`
- `src/memu/prompts/retrieve/query_rewriter.py`
- ... 6 more

### Memory/update lifecycle

- `src/memu/app/crud.py`
- `src/memu/app/memorize.py`
- `src/memu/app/patch.py`
- `src/memu/app/retrieve.py`
- `src/memu/app/service.py`
- `src/memu/app/settings.py`
- `src/memu/client/__init__.py`
- `src/memu/client/openai_wrapper.py`
- `src/memu/database/factory.py`
- `src/memu/database/models.py`
- `src/memu/embedding/openai_sdk.py`
- `src/memu/integrations/langgraph.py`
- ... 6 more

### Provenance/citation/evidence

- `src/memu/app/settings.py`
- `src/memu/utils/references.py`
- `src/memu/prompts/category_summary/category_with_refs.py`
- `tests/test_references.py`
- `CONTRIBUTING.md`
- `LICENSE.txt`
- `examples/resources/docs/doc2.txt`

### Evaluation/observability

- `src/memu/client/__init__.py`
- `src/memu/client/openai_wrapper.py`
- `src/memu/prompts/memory_type/skill.py`
- `src/memu/prompts/retrieve/judger.py`
- `src/memu/prompts/retrieve/pre_retrieval_decision.py`
- `examples/resources/conversations/conv1.json`
- `examples/example_2_skill_extraction.py`
- `examples/sealos-assistant/main.py`
- `tests/test_client_wrapper.py`
- `README.md`
- `docs/architecture.md`
- `docs/HACKATHON_MAD_COMBOS.md`
- ... 6 more

### Agent/MCP/tool surface

- `src/memu/app/crud.py`
- `src/memu/app/memorize.py`
- `src/memu/app/patch.py`
- `src/memu/app/retrieve.py`
- `src/memu/app/service.py`
- `src/memu/app/settings.py`
- `src/memu/client/__init__.py`
- `src/memu/client/openai_wrapper.py`
- `src/memu/embedding/http_client.py`
- `src/memu/embedding/openai_sdk.py`
- `src/memu/integrations/langgraph.py`
- `src/memu/llm/http_client.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| src/memu/app/memorize.py | 101 | role="ingest", |
| .github/workflows/release-please.yml | 87 | - name: Upload wheel artifact |
| .github/workflows/release-please.yml | 88 | uses: actions/upload-artifact@v6 |
| .github/workflows/release-please.yml | 116 | - name: Upload sdist artifact |
| .github/workflows/release-please.yml | 117 | uses: actions/upload-artifact@v6 |
| .github/workflows/release-please.yml | 149 | - name: Upload binaries to release |
| .github/workflows/release-please.yml | 150 | uses: svenstaro/upload-release-action@v2 |
| examples/sealos_support_agent.py | 40 | # 2. MEMORY INGESTION (PHASE 1) |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| src/memu/prompts/preprocess/audio.py | 10 | 3. Add paragraph breaks where they improve readability or reflect topic shifts. |
| .github/ISSUE_TEMPLATE/hackathon_task.yml | 61 | - Quality (readability, modularity) |
| examples/resources/docs/doc1.txt | 18 | - Text documents (PDF, TXT, DOC) |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| src/memu/app/memorize.py | 496 | for segment in segments: |
| src/memu/app/memorize.py | 497 | start_idx = int(segment.get("start", 0)) |
| src/memu/app/memorize.py | 498 | end_idx = int(segment.get("end", max_idx)) |
| src/memu/app/memorize.py | 853 | """Preprocess conversation data with segmentation, returns list of resources (one per segment).""" |
| src/memu/app/memorize.py | 868 | # Generate caption for each segment and return as separate resources |
| src/memu/app/memorize.py | 873 | for segment in segments: |
| src/memu/app/memorize.py | 874 | start = int(segment.get("start", 0)) |
| src/memu/app/memorize.py | 875 | end = int(segment.get("end", max_idx)) |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| src/memu/embedding/__init__.py | 1 | from memu.embedding.http_client import HTTPEmbeddingClient |
| src/memu/embedding/__init__.py | 2 | from memu.embedding.openai_sdk import OpenAIEmbeddingSDKClient |
| src/memu/embedding/http_client.py | 10 | from memu.embedding.backends.base import EmbeddingBackend |
| src/memu/embedding/http_client.py | 11 | from memu.embedding.backends.doubao import DoubaoEmbeddingBackend, DoubaoMultimodalEmbeddingInput |
| src/memu/embedding/http_client.py | 12 | from memu.embedding.backends.openai import OpenAIEmbeddingBackend |
| src/memu/embedding/http_client.py | 28 | """HTTP client for embedding APIs.""" |
| src/memu/embedding/http_client.py | 50 | overrides.get("embeddings") |
| src/memu/embedding/http_client.py | 51 | or overrides.get("embedding") |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| src/memu/prompts/retrieve/pre_retrieval_decision.py | 3 | Determine whether the current query requires retrieving information from memory or can be answered directly without retrieval. |
| src/memu/prompts/retrieve/pre_retrieval_decision.py | 4 | If retrieval is required, rewrite the query to include relevant contextual information. |
| src/memu/prompts/retrieve/pre_retrieval_decision.py | 10 | 4. Decide whether memory retrieval is required based on the criteria. |
| src/memu/prompts/retrieve/pre_retrieval_decision.py | 11 | 5. If retrieval is needed, rewrite the query to incorporate relevant context from the query context. |
| src/memu/prompts/retrieve/pre_retrieval_decision.py | 12 | 6. If retrieval is not needed, keep the original query unchanged. |
| src/memu/prompts/retrieve/pre_retrieval_decision.py | 21 | - **RETRIEVE** for: |
| src/memu/prompts/retrieve/pre_retrieval_decision.py | 27 | - If retrieval is not required, return the original query exactly. |
| src/memu/prompts/retrieve/pre_retrieval_decision.py | 33 | RETRIEVE or NO_RETRIEVE |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| src/memu/app/memorize.py | 144 | produces={"resources", "items", "relations", "category_updates"}, |
| src/memu/app/memorize.py | 161 | requires={"resources", "items", "relations", "ctx", "store", "category_ids"}, |
| src/memu/app/memorize.py | 242 | relations: list[CategoryItem] = [] |
| src/memu/app/memorize.py | 271 | relations.extend(rels) |
| src/memu/app/memorize.py | 278 | "relations": relations, |
| src/memu/app/memorize.py | 304 | relations = [rel.model_dump() for rel in state.get("relations", [])] |
| src/memu/app/memorize.py | 315 | "relations": relations, |
| src/memu/app/memorize.py | 322 | "relations": relations, |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| src/memu/app/crud.py | 55 | msg = "List memory items workflow failed to produce a response" |
| src/memu/app/crud.py | 75 | msg = "List memory categories workflow failed to produce a response" |
| src/memu/app/crud.py | 96 | msg = "Clear memory workflow failed to produce a response" |
| src/memu/app/crud.py | 289 | msg = f"Invalid memory type: '{memory_type}', must be one of {get_args(MemoryType)}" |
| src/memu/app/crud.py | 313 | msg = "Create memory item workflow failed to produce a response" |
| src/memu/app/crud.py | 328 | msg = "At least one of memory type, memory content, or memory categories is required for UPDATE operation" |
| src/memu/app/crud.py | 331 | msg = f"Invalid memory type: '{memory_type}', must be one of {get_args(MemoryType)}" |
| src/memu/app/crud.py | 356 | msg = "Update memory item workflow failed to produce a response" |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| src/memu/app/settings.py | 157 | description="When category retrieval is insufficient, follow [ref:ITEM_ID] citations to fetch referenced items.", |
| src/memu/app/settings.py | 237 | description="Enable inline [ref:ITEM_ID] citations in category summaries linking to source memory items.", |
| src/memu/utils/references.py | 4 | References are inline citations in the format [ref:ITEM_ID] that link |
| src/memu/utils/references.py | 25 | text: Text containing [ref:ITEM_ID] citations |
| src/memu/utils/references.py | 54 | Remove all [ref:...] citations from text for clean display. |
| src/memu/utils/references.py | 79 | Convert [ref:ID] format to numbered citations [1], [2], etc. |
| src/memu/utils/references.py | 85 | Text with numbered citations and a reference list at the end |
| src/memu/utils/references.py | 126 | text: Text containing [ref:ITEM_ID] citations |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| src/memu/client/__init__.py | 2 | memU Client Wrapper for Auto-Recall Memory Injection. |
| src/memu/client/__init__.py | 14 | # Wrap the client for auto-recall |
| src/memu/client/openai_wrapper.py | 2 | OpenAI Client Wrapper for Auto-Recall Memory Injection. |
| src/memu/client/openai_wrapper.py | 86 | """Wrapped create method with auto-recall injection.""" |
| src/memu/client/openai_wrapper.py | 111 | """Async wrapped create method with auto-recall injection.""" |
| src/memu/client/openai_wrapper.py | 228 | Wrap an OpenAI client for auto-recall memory injection. |
| src/memu/client/openai_wrapper.py | 241 | Wrapped client with auto-recall enabled |
| src/memu/prompts/memory_type/skill.py | 58 | - Metrics to track (error rates, response times, etc.) |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| src/memu/app/crud.py | 615 | llm_client = self._get_step_llm_client(step_context) |
| src/memu/app/crud.py | 620 | llm_client=llm_client, |
| src/memu/app/crud.py | 656 | llm_client: Any \| None = None, |
| src/memu/app/crud.py | 662 | client = llm_client or self._get_llm_client() |
| src/memu/app/memorize.py | 187 | llm_client = self._get_step_llm_client(step_context) |
| src/memu/app/memorize.py | 192 | llm_client=llm_client, |
| src/memu/app/memorize.py | 200 | llm_client = self._get_step_llm_client(step_context) |
| src/memu/app/memorize.py | 216 | llm_client=llm_client, |

## Gap

_없음_
