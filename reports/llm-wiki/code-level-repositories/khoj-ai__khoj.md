# khoj-ai/khoj 코드 레벨 분석

생성일: 2026-06-17T23:31:22.374Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | A integrated platform (101) |
| stars | 35186 |
| language | Python |
| tags | rag, knowledge-base, document-chat, agent-knowledge |
| files/code/source | 568/375/347 |
| tests/ci | 62/15 |
| local path | sources/khoj-ai__khoj |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 25 | 13 | src/khoj/routers/storage.py:24 """Upload webp image to an S3 bucket""" |
| Parsing/OCR/document extraction | code | 35 | 24 | src/interface/desktop/main.js:22 const binaryFileTypes = ['pdf', 'jpg', 'jpeg', 'png', 'webp'] |
| Chunking/splitting | code | 18 | 17 | src/interface/desktop/chatutils.js:452 // Split the chunk into lines |
| Embedding/vector index | code | 37 | 19 | src/khoj/processor/embeddings.py:50 with timer(f"Loaded embedding model {self.model_name}", logger): |
| Retrieval/search/rerank | code | 88 | 48 | src/khoj/configure.py:258 # Initialize Search Models from Config and initialize content |
| Wiki/graph/entity model | code | 42 | 24 | src/khoj/configure.py:144 # Request from Desktop, Emacs, Obsidian clients |
| Memory/update lifecycle | code | 104 | 70 | src/khoj/configure.py:12 from asgiref.sync import sync_to_async |
| Provenance/citation/evidence | code | 2 | 2 | src/khoj/configure.py:82 Attribution: https://gist.github.com/bryanhelmig/6fb091f23c1a4b7462dddce51cfaa1ca |
| Evaluation/observability | code | 23 | 15 | src/khoj/configure.py:292 message = "📡 Telemetry disabled" if state.telemetry_disabled else "📡 Telemetry enabled" |
| Agent/MCP/tool surface | code | 110 | 84 | src/khoj/configure.py:9 import openai |

## 의존성 신호

_없음_

## 주요 파일 후보

### Ingestion/source intake

- `src/khoj/routers/storage.py`
- `src/interface/obsidian/src/api.ts`
- `src/interface/obsidian/src/utils.ts`
- `src/khoj/database/adapters/__init__.py`
- `src/khoj/database/migrations/0069_webscraper_serverchatsettings_web_scraper.py`
- `src/khoj/database/models/__init__.py`
- `src/khoj/processor/image/generate.py`
- `src/khoj/processor/tools/online_search.py`
- `src/khoj/processor/tools/run_code.py`
- `src/interface/web/app/search/page.tsx`
- `src/interface/web/app/components/agentCard/agentCard.tsx`
- `src/interface/web/app/components/allConversations/allConversations.tsx`
- ... 6 more

### Parsing/OCR/document extraction

- `src/interface/desktop/main.js`
- `src/khoj/routers/api_content.py`
- `src/khoj/routers/helpers.py`
- `src/khoj/search_type/text_search.py`
- `src/khoj/utils/config.py`
- `src/khoj/utils/helpers.py`
- `src/interface/obsidian/src/chat_view.ts`
- `src/interface/obsidian/src/search_modal.ts`
- `src/interface/obsidian/src/settings.ts`
- `src/interface/obsidian/src/utils.ts`
- `src/khoj/database/migrations/0004_content_types_and_more.py`
- `src/khoj/database/migrations/0047_alter_entry_file_type.py`
- ... 6 more

### Chunking/splitting

- `src/interface/desktop/chatutils.js`
- `src/khoj/routers/api_chat.py`
- `src/khoj/routers/helpers.py`
- `src/khoj/utils/helpers.py`
- `src/interface/obsidian/src/chat_view.ts`
- `src/interface/obsidian/src/interact_with_files.ts`
- `src/khoj/processor/content/text_to_entries.py`
- `src/interface/web/app/common/chatFunctions.ts`
- `src/khoj/processor/content/github/github_to_entries.py`
- `src/khoj/processor/content/notion/notion_to_entries.py`
- `src/khoj/processor/content/org_mode/org_to_entries.py`
- `src/khoj/processor/conversation/anthropic/anthropic_chat.py`
- ... 6 more

### Embedding/vector index

- `src/khoj/processor/embeddings.py`
- `src/khoj/database/migrations/0005_embeddings_corpus_id.py`
- `src/khoj/database/migrations/0006_embeddingsdates.py`
- `src/khoj/database/migrations/0010_rename_embeddings_entry_and_more.py`
- `src/khoj/database/migrations/0024_alter_entry_embeddings.py`
- `src/khoj/configure.py`
- `src/khoj/app/settings.py`
- `src/khoj/routers/helpers.py`
- `src/khoj/search_type/text_search.py`
- `src/khoj/utils/models.py`
- `src/khoj/utils/state.py`
- `src/khoj/database/adapters/__init__.py`
- ... 6 more

### Retrieval/search/rerank

- `src/khoj/configure.py`
- `src/interface/obsidian/esbuild.config.mjs`
- `src/khoj/processor/embeddings.py`
- `src/khoj/routers/api_chat.py`
- `src/khoj/routers/api_subscription.py`
- `src/khoj/routers/api.py`
- `src/khoj/routers/helpers.py`
- `src/khoj/routers/research.py`
- `src/khoj/routers/web_client.py`
- `src/khoj/search_type/text_search.py`
- `src/khoj/utils/constants.py`
- `src/khoj/utils/helpers.py`
- ... 6 more

### Wiki/graph/entity model

- `src/khoj/configure.py`
- `src/khoj/main.py`
- `src/interface/desktop/chatutils.js`
- `src/interface/obsidian/esbuild.config.mjs`
- `src/khoj/routers/api.py`
- `src/khoj/utils/helpers.py`
- `src/interface/obsidian/src/api.ts`
- `src/interface/obsidian/src/chat_view.ts`
- `src/interface/obsidian/src/interact_with_files.ts`
- `src/interface/obsidian/src/main.ts`
- `src/interface/obsidian/src/pane_view.ts`
- `src/interface/obsidian/src/search_modal.ts`
- ... 6 more

### Memory/update lifecycle

- `src/khoj/configure.py`
- `src/interface/desktop/main.js`
- `src/interface/desktop/renderer.js`
- `src/interface/obsidian/esbuild.config.mjs`
- `src/khoj/routers/api_agents.py`
- `src/khoj/routers/api_automation.py`
- `src/khoj/routers/api_chat.py`
- `src/khoj/routers/api_content.py`
- `src/khoj/routers/api_memories.py`
- `src/khoj/routers/api_phone.py`
- `src/khoj/routers/api_subscription.py`
- `src/khoj/routers/api.py`
- ... 6 more

### Provenance/citation/evidence

- `src/khoj/configure.py`
- `src/khoj/processor/conversation/prompts.py`

### Evaluation/observability

- `src/khoj/configure.py`
- `src/telemetry/telemetry.py`
- `src/khoj/routers/api_chat.py`
- `src/khoj/routers/helpers.py`
- `src/khoj/utils/constants.py`
- `src/khoj/utils/helpers.py`
- `src/khoj/utils/state.py`
- `src/interface/obsidian/src/interact_with_files.ts`
- `src/interface/obsidian/src/settings.ts`
- `src/interface/obsidian/src/utils.ts`
- `src/khoj/database/models/__init__.py`
- `src/khoj/processor/operator/grounding_agent_uitars.py`
- ... 6 more

### Agent/MCP/tool surface

- `src/khoj/configure.py`
- `src/khoj/database/admin.py`
- `src/khoj/processor/embeddings.py`
- `src/khoj/routers/api_agents.py`
- `src/khoj/routers/api_chat.py`
- `src/khoj/routers/api.py`
- `src/khoj/routers/helpers.py`
- `src/khoj/routers/research.py`
- `src/khoj/routers/web_client.py`
- `src/khoj/search_type/text_search.py`
- `src/khoj/utils/constants.py`
- `src/khoj/utils/helpers.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| src/khoj/routers/storage.py | 24 | """Upload webp image to an S3 bucket""" |
| src/khoj/routers/storage.py | 26 | logger.info("AWS is not enabled. Skipping image upload") |
| src/khoj/routers/storage.py | 43 | logger.error(f"Failed to upload image to S3: {e}") |
| src/khoj/routers/storage.py | 48 | """Upload khoj generated image to an S3 bucket""" |
| src/khoj/routers/storage.py | 57 | """Upload user attached image to an S3 bucket""" |
| src/interface/obsidian/src/api.ts | 26 | throw new Error(`Failed to upload batch: ${response.status} ${text}`); |
| src/interface/obsidian/src/utils.ts | 198 | // Upload files in batches |
| src/interface/obsidian/src/utils.ts | 217 | console.error('Khoj: Failed to upload batch:', err); |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| src/interface/desktop/main.js | 22 | const binaryFileTypes = ['pdf', 'jpg', 'jpeg', 'png', 'webp'] |
| src/interface/desktop/main.js | 100 | case 'pdf': |
| src/interface/desktop/main.js | 101 | return 'application/pdf'; |
| src/khoj/routers/api_content.py | 31 | from khoj.processor.content.docx.docx_to_entries import DocxToEntries |
| src/khoj/routers/api_content.py | 32 | from khoj.processor.content.pdf.pdf_to_entries import PdfToEntries |
| src/khoj/routers/api_content.py | 64 | pdf: Optional[dict[str, bytes]] = None |
| src/khoj/routers/api_content.py | 67 | docx: Optional[dict[str, bytes]] = None |
| src/khoj/routers/api_content.py | 476 | supported_files = ["org", "markdown", "pdf", "plaintext", "docx"] |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| src/interface/desktop/chatutils.js | 452 | // Split the chunk into lines |
| src/interface/desktop/chatutils.js | 468 | const chunk = convertMessageChunkToJson(rawChunk); |
| src/interface/desktop/chatutils.js | 469 | console.debug("Chunk:", chunk); |
| src/interface/desktop/chatutils.js | 470 | if (!chunk \|\| !chunk.type) return; |
| src/interface/desktop/chatutils.js | 471 | if (chunk.type ==='status') { |
| src/interface/desktop/chatutils.js | 472 | console.log(`status: ${chunk.data}`); |
| src/interface/desktop/chatutils.js | 473 | const statusMessage = chunk.data; |
| src/interface/desktop/chatutils.js | 475 | } else if (chunk.type === 'start_llm_response') { |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| src/khoj/processor/embeddings.py | 50 | with timer(f"Loaded embedding model {self.model_name}", logger): |
| src/khoj/processor/embeddings.py | 81 | return response.json()["embeddings"] |
| src/khoj/processor/embeddings.py | 91 | response = client.embeddings.create(input=docs, model=self.model_name, encoding_format="float") |
| src/khoj/processor/embeddings.py | 92 | return [item.embedding for item in response.data] |
| src/khoj/processor/embeddings.py | 103 | f"Unsupported inference endpoint: {self.inference_endpoint_type}. Generating embeddings locally instead." |
| src/khoj/processor/embeddings.py | 107 | embeddings = [] |
| src/khoj/processor/embeddings.py | 112 | embeddings += generated_embeddings |
| src/khoj/processor/embeddings.py | 114 | return embeddings |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| src/khoj/configure.py | 258 | # Initialize Search Models from Config and initialize content |
| src/khoj/configure.py | 296 | logger.error(f"Failed to load some search models: {e}", exc_info=True) |
| src/khoj/configure.py | 320 | # Import APIs here to setup search types before while configuring server |
| src/khoj/configure.py | 426 | # Extract core search types |
| src/khoj/configure.py | 429 | # Dynamically generate search type enum by merging core search types with configured plugin search types |
| src/interface/obsidian/esbuild.config.mjs | 28 | '@codemirror/search', |
| src/khoj/processor/embeddings.py | 120 | model_name: str = "mixedbread-ai/mxbai-rerank-xsmall-v1", |
| src/khoj/routers/api_chat.py | 1111 | ChatEvent.STATUS, "Document search failed. I'll try respond without document references" |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| src/khoj/configure.py | 144 | # Request from Desktop, Emacs, Obsidian clients |
| src/khoj/main.py | 74 | "app://obsidian.md", # To allow access from Obsidian desktop app |
| src/khoj/main.py | 75 | "capacitor://localhost", # To allow access from Obsidian iOS app using Capacitor.JS |
| src/khoj/main.py | 76 | "http://localhost", # To allow access from Obsidian Android app |
| src/interface/desktop/chatutils.js | 161 | if (onlineReference.knowledgeGraph && onlineReference.knowledgeGraph.length > 0) { |
| src/interface/desktop/chatutils.js | 162 | numOnlineReferences += onlineReference.knowledgeGraph.length; |
| src/interface/desktop/chatutils.js | 163 | for (let index in onlineReference.knowledgeGraph) { |
| src/interface/desktop/chatutils.js | 164 | let reference = onlineReference.knowledgeGraph[index]; |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| src/khoj/configure.py | 12 | from asgiref.sync import sync_to_async |
| src/khoj/configure.py | 74 | in mixed sync/async which has the effect of duplicating connections. |
| src/khoj/configure.py | 465 | logger.debug(f"🗑️ Deleted {num_user_ratelimit_requests + num_ratelimit_requests} stale rate limit requests") |
| src/interface/desktop/main.js | 159 | // Don't sync if token or hostURL is not set or if already syncing |
| src/interface/desktop/main.js | 198 | // Only push files that have been modified since last sync |
| src/interface/desktop/main.js | 204 | // Collect all updated or newly created files since last sync to index on Khoj server |
| src/interface/desktop/main.js | 262 | state["error"] = `Looks like you're out of space to sync your files. <a href="https://app.khoj.dev/settings#subscription">Upgrade your plan</a> to unlock more space.`; |
| src/interface/desktop/main.js | 269 | state["error"] = `Sync was unsuccessful at ${currentTime.toLocaleTimeString()}. Contact team@khoj.dev to report this issue.`; |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| src/khoj/configure.py | 82 | Attribution: https://gist.github.com/bryanhelmig/6fb091f23c1a4b7462dddce51cfaa1ca |
| src/khoj/processor/conversation/prompts.py | 21 | - Provide inline citations to documents and websites referenced. Add them inline in markdown format to directly support your claim. |
| src/khoj/processor/conversation/prompts.py | 43 | - Provide inline citations to documents and websites referenced. Add them inline in markdown format to directly support your claim. |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| src/khoj/configure.py | 292 | message = "📡 Telemetry disabled" if state.telemetry_disabled else "📡 Telemetry enabled" |
| src/khoj/configure.py | 436 | if state.telemetry_disabled or not state.telemetry: |
| src/khoj/configure.py | 440 | logger.info(f"📡 Uploading telemetry to {constants.telemetry_server}...") |
| src/khoj/configure.py | 441 | logger.debug(f"Telemetry state:\n{state.telemetry}") |
| src/khoj/configure.py | 442 | for log in state.telemetry: |
| src/khoj/configure.py | 451 | response = requests.post(constants.telemetry_server, json=state.telemetry) |
| src/khoj/configure.py | 454 | logger.error(f"📡 Error uploading telemetry: {e}", exc_info=True) |
| src/khoj/configure.py | 456 | state.telemetry = [] |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| src/khoj/configure.py | 9 | import openai |
| src/khoj/configure.py | 256 | state.openai_client = openai.OpenAI(api_key=ai_model_api.api_key, base_url=ai_model_api.api_base_url) |
| src/khoj/configure.py | 333 | app.include_router(api_agents, prefix="/api/agents") |
| src/khoj/database/admin.py | 18 | Agent, |
| src/khoj/database/admin.py | 199 | @admin.register(Agent) |
| src/khoj/database/admin.py | 217 | "agent", |
| src/khoj/database/admin.py | 329 | list_filter = ("agent", "client", "user") |
| src/khoj/processor/embeddings.py | 56 | elif self.inference_endpoint_type == SearchModelConfig.ApiType.OPENAI: |

## Gap

_없음_
