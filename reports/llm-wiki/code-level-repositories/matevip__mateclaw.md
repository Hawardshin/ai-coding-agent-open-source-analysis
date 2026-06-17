# matevip/mateclaw 코드 레벨 분석

생성일: 2026-06-17T23:31:19.765Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | persistent-llm-wiki |
| maturity | A integrated platform (104) |
| stars | 624 |
| language | Java |
| tags | direct-llm-wiki, knowledge-base, agent-knowledge |
| files/code/source | 2830/2197/1718 |
| tests/ci | 120/3 |
| local path | sources/matevip__mateclaw |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 166 | 109 | mateclaw-ui/vite.config.ts:22 // CI artifact upload is opt-in and the Docker image build doesn't waste |
| Parsing/OCR/document extraction | code | 202 | 98 | mateclaw-ui/src/composables/useGlobalFileDownloadClick.ts:4 // `[报告.docx](/api/v1/files/generated/<id>)` into a plain same-origin |
| Chunking/splitting | code | 202 | 124 | mateclaw-ui/vite.config.ts:84 // 1. Cache: bumping a business chunk doesn't invalidate the |
| Embedding/vector index | code | 114 | 65 | mateclaw-server/src/main/resources/db/migration/h2/V104__wiki_chunk_embedding_text_version.sql:1 -- V104: track which input format a chunk's stored embedding was generated against. |
| Retrieval/search/rerank | code | 252 | 134 | mateclaw-server/src/main/java/vip/mate/wiki/retrieval/SnippetExtractor.java:1 package vip.mate.wiki.retrieval; |
| Wiki/graph/entity model | code | 255 | 175 | mateclaw-ui/src/api/index.ts:800 // Lightweight {slug, title, archived} list for wikilink resolution. Never |
| Memory/update lifecycle | code | 1063 | 706 | mateclaw-ui/vite.config.ts:23 // memory generating an HTML report it never reads. |
| Provenance/citation/evidence | code | 168 | 96 | mateclaw-ui/src/api/index.ts:849 http.get(`/wiki/kb/${kbId}/pages/${pageId}/citations`), |
| Evaluation/observability | code | 240 | 129 | mateclaw-ui/src/api/index.ts:644 // sidestep JS Number precision loss on 19-digit Snowflake IDs. |
| Agent/MCP/tool surface | code | 1131 | 675 | mateclaw-ui/src/api/index.ts:102 // ==================== Agent ==================== |

## 의존성 신호

_없음_

## 주요 파일 후보

### Ingestion/source intake

- `mateclaw-ui/vite.config.ts`
- `mateclaw-ui/src/api/index.ts`
- `mateclaw-ui/src/composables/useFileDrop.ts`
- `mateclaw-ui/src/stores/useWikiStore.ts`
- `mateclaw-ui/src/utils/wavEncoder.ts`
- `mateclaw-ui/src/i18n/locales/en-US.ts`
- `mateclaw-server/src/main/java/vip/mate/agent/AgentService.java`
- `mateclaw-server/src/main/java/vip/mate/agent/BaseAgent.java`
- `mateclaw-server/src/main/java/vip/mate/channel/MediaPathGuard.java`
- `mateclaw-server/src/main/java/vip/mate/stt/AudioMimeTypes.java`
- `mateclaw-server/src/main/java/vip/mate/wiki/WikiProperties.java`
- `mateclaw-server/src/main/resources/db/migration/h2/V105__wiki_transformation.sql`
- ... 6 more

### Parsing/OCR/document extraction

- `mateclaw-ui/src/composables/useGlobalFileDownloadClick.ts`
- `mateclaw-ui/src/types/index.ts`
- `mateclaw-ui/src/i18n/locales/en-US.ts`
- `mateclaw-ui/src/i18n/locales/zh-CN.ts`
- `mateclaw-server/src/main/resources/db/data-en.sql`
- `mateclaw-server/src/main/resources/db/data-kingbase-en.sql`
- `mateclaw-server/src/main/resources/db/data-kingbase-zh.sql`
- `mateclaw-server/src/main/resources/db/data-mysql-en.sql`
- `mateclaw-server/src/main/resources/db/data-mysql-zh.sql`
- `mateclaw-server/src/main/resources/db/data-zh.sql`
- `mateclaw-server/src/main/java/vip/mate/agent/AgentGraphBuilder.java`
- `mateclaw-server/src/main/java/vip/mate/agent/BaseAgent.java`
- ... 6 more

### Chunking/splitting

- `mateclaw-ui/vite.config.ts`
- `mateclaw-ui/src/api/index.ts`
- `mateclaw-ui/src/composables/useGlobalFileDownloadClick.ts`
- `mateclaw-ui/src/types/index.ts`
- `mateclaw-ui/src/utils/wavEncoder.ts`
- `mateclaw-ui/src/composables/chat/useChat.ts`
- `mateclaw-ui/src/composables/chat/useStream.ts`
- `mateclaw-ui/src/i18n/locales/en-US.ts`
- `mateclaw-ui/src/i18n/locales/zh-CN.ts`
- `mateclaw-ui/src/views/Settings/Models/composables/useProviderForm.ts`
- `mateclaw-server/src/main/java/vip/mate/agent/AgentGraphBuilder.java`
- `mateclaw-server/src/main/java/vip/mate/agent/AgentService.java`
- ... 6 more

### Embedding/vector index

- `mateclaw-server/src/main/resources/db/migration/h2/V104__wiki_chunk_embedding_text_version.sql`
- `mateclaw-server/src/main/resources/db/migration/h2/V107__wiki_page_embedding.sql`
- `mateclaw-server/src/main/resources/db/migration/h2/V13__wiki_chunk_embedding.sql`
- `mateclaw-server/src/main/resources/db/migration/h2/V14__embedding_model_config.sql`
- `mateclaw-server/src/main/resources/db/migration/kingbase/V104__wiki_chunk_embedding_text_version.sql`
- `mateclaw-server/src/main/resources/db/migration/kingbase/V107__wiki_page_embedding.sql`
- `mateclaw-server/src/main/resources/db/migration/kingbase/V13__wiki_chunk_embedding.sql`
- `mateclaw-server/src/main/resources/db/migration/kingbase/V14__embedding_model_config.sql`
- `mateclaw-server/src/main/resources/db/migration/mysql/V104__wiki_chunk_embedding_text_version.sql`
- `mateclaw-server/src/main/resources/db/migration/mysql/V107__wiki_page_embedding.sql`
- `mateclaw-server/src/main/resources/db/migration/mysql/V13__wiki_chunk_embedding.sql`
- `mateclaw-server/src/main/resources/db/migration/mysql/V14__embedding_model_config.sql`
- ... 6 more

### Retrieval/search/rerank

- `mateclaw-server/src/main/java/vip/mate/wiki/retrieval/SnippetExtractor.java`
- `mateclaw-ui/src/api/index.ts`
- `mateclaw-ui/src/composables/useMcpServers.ts`
- `mateclaw-ui/src/composables/usePixelarticons.ts`
- `mateclaw-ui/src/composables/useToolLabel.ts`
- `mateclaw-ui/src/stores/useWikiStore.ts`
- `mateclaw-ui/src/types/index.ts`
- `mateclaw-ui/src/utils/agentIconColor.ts`
- `mateclaw-ui/src/i18n/locales/en-US.ts`
- `mateclaw-ui/src/i18n/locales/zh-CN.ts`
- `mateclaw-ui/src/views/mcp/catalog.ts`
- `mateclaw-server/src/main/resources/db/data-en.sql`
- ... 6 more

### Wiki/graph/entity model

- `mateclaw-ui/src/api/index.ts`
- `mateclaw-ui/src/composables/useGlobalWikilinkClick.ts`
- `mateclaw-ui/src/composables/useMarkdownRenderer.ts`
- `mateclaw-ui/src/composables/useStreamingMarkdown.ts`
- `mateclaw-ui/src/composables/wikilink.ts`
- `mateclaw-ui/src/stores/useWikiStore.ts`
- `mateclaw-ui/src/types/index.ts`
- `mateclaw-ui/src/i18n/locales/en-US.ts`
- `mateclaw-ui/src/i18n/locales/zh-CN.ts`
- `mateclaw-server/src/main/java/vip/mate/agent/AgentGraphBuilder.java`
- `mateclaw-server/src/main/java/vip/mate/agent/AgentService.java`
- `mateclaw-server/src/main/java/vip/mate/agent/BaseAgent.java`
- ... 6 more

### Memory/update lifecycle

- `mateclaw-ui/vite.config.ts`
- `mateclaw-ui/src/api/index.ts`
- `mateclaw-ui/src/composables/capabilities.ts`
- `mateclaw-ui/src/composables/useAuthenticatedAttachment.ts`
- `mateclaw-ui/src/composables/useBreakpoint.ts`
- `mateclaw-ui/src/composables/useEChartsRenderer.ts`
- `mateclaw-ui/src/composables/useGlobalFileDownloadClick.ts`
- `mateclaw-ui/src/composables/useGlobalWikilinkClick.ts`
- `mateclaw-ui/src/composables/useKatexRenderer.ts`
- `mateclaw-ui/src/composables/useMarkdownRenderer.ts`
- `mateclaw-ui/src/composables/useMcpServers.ts`
- `mateclaw-ui/src/composables/useMermaidRenderer.ts`
- ... 6 more

### Provenance/citation/evidence

- `mateclaw-ui/src/api/index.ts`
- `mateclaw-ui/src/stores/useGoalStore.ts`
- `mateclaw-ui/src/types/index.ts`
- `mateclaw-ui/src/composables/chat/useChat.ts`
- `mateclaw-ui/src/i18n/locales/en-US.ts`
- `mateclaw-ui/src/i18n/locales/zh-CN.ts`
- `mateclaw-server/src/main/resources/db/schema-mysql.sql`
- `mateclaw-server/src/main/resources/db/schema.sql`
- `mateclaw-server/src/main/java/vip/mate/agent/AgentAuthoringTool.java`
- `mateclaw-server/src/main/java/vip/mate/agent/AgentService.java`
- `mateclaw-server/src/main/java/vip/mate/agent/GraphEventPublisher.java`
- `mateclaw-server/src/main/java/vip/mate/channel/ChannelMessageRouter.java`
- ... 6 more

### Evaluation/observability

- `mateclaw-ui/src/api/index.ts`
- `mateclaw-ui/src/composables/useEChartsRenderer.ts`
- `mateclaw-ui/src/composables/useNotificationCenter.ts`
- `mateclaw-ui/src/composables/useWorkflowGraph.ts`
- `mateclaw-ui/src/types/index.ts`
- `mateclaw-ui/src/composables/chat/useChat.ts`
- `mateclaw-ui/src/composables/chat/useStream.ts`
- `mateclaw-ui/src/i18n/locales/en-US.ts`
- `mateclaw-server/src/main/resources/db/data-en.sql`
- `mateclaw-server/src/main/resources/db/data-kingbase-en.sql`
- `mateclaw-server/src/main/resources/db/data-kingbase-zh.sql`
- `mateclaw-server/src/main/resources/db/data-mysql-en.sql`
- ... 6 more

### Agent/MCP/tool surface

- `mateclaw-ui/src/api/index.ts`
- `mateclaw-ui/src/composables/capabilities.ts`
- `mateclaw-ui/src/composables/useLiveAgent.ts`
- `mateclaw-ui/src/composables/useMarkdownRenderer.ts`
- `mateclaw-ui/src/composables/useMcpServers.ts`
- `mateclaw-ui/src/composables/useToolLabel.ts`
- `mateclaw-ui/src/router/index.ts`
- `mateclaw-ui/src/stores/useAgentStore.ts`
- `mateclaw-ui/src/stores/useWorkspaceStore.ts`
- `mateclaw-ui/src/types/chatError.ts`
- `mateclaw-ui/src/types/index.ts`
- `mateclaw-ui/src/utils/agentIconColor.ts`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| mateclaw-ui/vite.config.ts | 22 | // CI artifact upload is opt-in and the Docker image build doesn't waste |
| mateclaw-ui/src/api/index.ts | 135 | return http.post('/chat/upload', formData, { |
| mateclaw-ui/src/api/index.ts | 409 | return http.post('/skills/install/upload', formData, { |
| mateclaw-ui/src/api/index.ts | 780 | http.post(`/wiki/knowledge-bases/${kbId}/raw/upload`, formData, { |
| mateclaw-ui/src/composables/useFileDrop.ts | 4 | * Drag-and-drop file upload helper. |
| mateclaw-ui/src/stores/useWikiStore.ts | 29 | // Two-stage ingestion progress: backend writes total after routing and |
| mateclaw-ui/src/utils/wavEncoder.ts | 32 | /** WAV-encoded audio bytes ready to upload. */ |
| mateclaw-ui/src/i18n/locales/en-US.ts | 276 | uploadFailed: 'File upload failed', |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| mateclaw-ui/src/composables/useGlobalFileDownloadClick.ts | 4 | // `[报告.docx](/api/v1/files/generated/<id>)` into a plain same-origin |
| mateclaw-ui/src/composables/useGlobalFileDownloadClick.ts | 34 | // The markdown link label is the human filename ("报告.docx"); prefer it |
| mateclaw-ui/src/types/index.ts | 578 | { key: 'robot_code', label: '机器人编码', placeholder: '留空将自动使用 AppKey（适用于自建应用机器人）', type: 'text', tooltip: '钉钉机器人 robotCode，用于发送附件（图片 / DOCX）和 AI Card。绝大多数自建应用机器人 robotCode == AppKey，不填会自动 fallback；只有第三方应用 / 单独申请的机器人才必须显式填' |
| mateclaw-ui/src/i18n/locales/en-US.ts | 659 | 'wiki.ocr.enabled': 'Image OCR / vision-in pipeline for wiki uploads — captions images via a vision model on upload', |
| mateclaw-ui/src/i18n/locales/en-US.ts | 2370 | dirHint: 'One path or glob pattern per line; lines starting with # are comments. Examples:\n/data/docs\n/data/ocr/**/*.txt\n/data/reports/*.{xlsx,csv}', |
| mateclaw-ui/src/i18n/locales/en-US.ts | 3052 | step1: 'Upload', step1Desc: 'Legal or sales drops a PDF', |
| mateclaw-ui/src/i18n/locales/en-US.ts | 3053 | step2: 'Extract', step2Desc: 'OCR / text extraction', |
| mateclaw-ui/src/i18n/locales/en-US.ts | 3999 | extract_pdf_text: 'Extract PDF', |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| mateclaw-ui/vite.config.ts | 84 | // 1. Cache: bumping a business chunk doesn't invalidate the |
| mateclaw-ui/vite.config.ts | 88 | // chunk lets each Worker on the chunk run with a smaller |
| mateclaw-ui/src/api/index.ts | 531 | // safely sit in a path segment (slash / space / etc.) — those rows would |
| mateclaw-ui/src/composables/useGlobalFileDownloadClick.ts | 35 | // when it carries an extension, otherwise fall back to the URL's last segment. |
| mateclaw-ui/src/types/index.ts | 219 | * instead of jammed text in toolArgs. The depth-1 child is the segment itself; |
| mateclaw-ui/src/types/index.ts | 227 | /** For a delegation segment: heartbeat flagged the subagent as stalled (no progress). */ |
| mateclaw-ui/src/types/index.ts | 229 | /** For a delegation segment: spawned fire-and-forget, runs detached (result via task_output). */ |
| mateclaw-ui/src/types/index.ts | 234 | * Iteration index this segment belongs to (0-based). Set by iteration_start — |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| mateclaw-server/src/main/resources/db/migration/h2/V104__wiki_chunk_embedding_text_version.sql | 1 | -- V104: track which input format a chunk's stored embedding was generated against. |
| mateclaw-server/src/main/resources/db/migration/h2/V104__wiki_chunk_embedding_text_version.sql | 2 | -- The embedding input builder concatenates raw title / header breadcrumb / page |
| mateclaw-server/src/main/resources/db/migration/h2/V107__wiki_page_embedding.sql | 1 | -- Page-level embedding so synthesis pages produced by transformations can be |
| mateclaw-server/src/main/resources/db/migration/h2/V107__wiki_page_embedding.sql | 8 | ALTER TABLE mate_wiki_page ADD COLUMN IF NOT EXISTS embedding BLOB DEFAULT NULL; |
| mateclaw-server/src/main/resources/db/migration/h2/V13__wiki_chunk_embedding.sql | 1 | -- V13: Add embedding column to mate_wiki_chunk (RFC-011 Phase 2) |
| mateclaw-server/src/main/resources/db/migration/h2/V13__wiki_chunk_embedding.sql | 3 | ALTER TABLE mate_wiki_chunk ADD COLUMN IF NOT EXISTS embedding BLOB DEFAULT NULL; |
| mateclaw-server/src/main/resources/db/migration/h2/V14__embedding_model_config.sql | 1 | -- V14: Embedding model UI config (对标 Dify) |
| mateclaw-server/src/main/resources/db/migration/h2/V14__embedding_model_config.sql | 2 | -- 区分 chat / embedding 两种模型类型，让 embedding 也能通过 Settings/Models UI 管理 |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| mateclaw-server/src/main/java/vip/mate/wiki/retrieval/SnippetExtractor.java | 1 | package vip.mate.wiki.retrieval; |
| mateclaw-ui/src/api/index.ts | 200 | /** Paginated skill listing with search, source, status, and sort filters. */ |
| mateclaw-ui/src/api/index.ts | 397 | http.get('/skills/install/hub/search', { params: { q, limit } }), |
| mateclaw-ui/src/api/index.ts | 873 | // RFC-032: Search preview |
| mateclaw-ui/src/api/index.ts | 875 | http.post(`/wiki/kb/${kbId}/search-preview`, data), |
| mateclaw-ui/src/composables/useMcpServers.ts | 10 | * server list, search/pagination state, and CRUD helpers — the page and |
| mateclaw-ui/src/composables/useMcpServers.ts | 22 | const search = ref('') |
| mateclaw-ui/src/composables/useMcpServers.ts | 27 | // Reset both pages whenever the search input changes — prevents pointing |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| mateclaw-ui/src/api/index.ts | 800 | // Lightweight {slug, title, archived} list for wikilink resolution. Never |
| mateclaw-ui/src/api/index.ts | 802 | // authoritative resolution index used by the viewer's wikilink postprocess. |
| mateclaw-ui/src/api/index.ts | 825 | // Cross-KB lookup used by the global wikilink click handler — chat |
| mateclaw-ui/src/api/index.ts | 843 | // RFC-029: Relations |
| mateclaw-ui/src/api/index.ts | 847 | http.get(`/wiki/kb/${kbId}/pages/${encodeURIComponent(slugA)}/relation/${encodeURIComponent(slugB)}`), |
| mateclaw-ui/src/api/index.ts | 851 | // Entity-level knowledge graph |
| mateclaw-ui/src/api/index.ts | 853 | http.get(`/wiki/kb/${kbId}/entities`, { params }), |
| mateclaw-ui/src/api/index.ts | 855 | http.get(`/wiki/kb/${kbId}/entity-graph`, { params: { limit } }), |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| mateclaw-ui/vite.config.ts | 23 | // memory generating an HTML report it never reads. |
| mateclaw-ui/vite.config.ts | 84 | // 1. Cache: bumping a business chunk doesn't invalidate the |
| mateclaw-ui/src/api/index.ts | 32 | // in sync. |
| mateclaw-ui/src/api/index.ts | 115 | delete: (id: string \| number) => http.delete(`/agents/${id}`), |
| mateclaw-ui/src/api/index.ts | 119 | /** Lightweight capability snapshot used by the chat console attachment hint. */ |
| mateclaw-ui/src/api/index.ts | 145 | 'Cache-Control': 'no-cache', |
| mateclaw-ui/src/api/index.ts | 178 | delete: (conversationId: string) => |
| mateclaw-ui/src/api/index.ts | 179 | http.delete(`/conversations/${conversationId}`), |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| mateclaw-ui/src/api/index.ts | 849 | http.get(`/wiki/kb/${kbId}/pages/${pageId}/citations`), |
| mateclaw-ui/src/api/index.ts | 1324 | evidence?: string |
| mateclaw-ui/src/stores/useGoalStore.ts | 321 | // ==================== Followup attribution helpers ==================== |
| mateclaw-ui/src/types/index.ts | 107 | // Runtime model attribution (assistant messages): the model that actually produced this reply |
| mateclaw-ui/src/types/index.ts | 420 | citation?: string |
| mateclaw-ui/src/types/index.ts | 498 | sourceUrl: string |
| mateclaw-ui/src/composables/chat/useChat.ts | 383 | // for followup attribution, message_complete for the evaluating halo, |
| mateclaw-ui/src/composables/chat/useChat.ts | 508 | // Auto-followup attribution: if the goal evaluator just decided to |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| mateclaw-ui/src/api/index.ts | 644 | // sidestep JS Number precision loss on 19-digit Snowflake IDs. |
| mateclaw-ui/src/api/index.ts | 1011 | // for the Snowflake-precision contract. |
| mateclaw-ui/src/api/index.ts | 1316 | // them as strings to dodge JS Number precision loss. See CLAUDE.md |
| mateclaw-ui/src/api/index.ts | 1317 | // "ID Handling — Snowflake Precision Convention". |
| mateclaw-ui/src/api/index.ts | 1402 | * snowflake ids as strings (CLAUDE.md precision convention); callers should |
| mateclaw-ui/src/composables/useEChartsRenderer.ts | 24 | * to prevent XSS via ECharts formatter evaluation. |
| mateclaw-ui/src/composables/useNotificationCenter.ts | 36 | * ID precision — counts can come through as either number or stringified |
| mateclaw-ui/src/composables/useWorkflowGraph.ts | 31 | // Snowflake IDs lose precision when round-tripped through JS Number, so |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| mateclaw-ui/src/api/index.ts | 102 | // ==================== Agent ==================== |
| mateclaw-ui/src/api/index.ts | 105 | * @param params.enabled when `true`, restricts the result to enabled agents |
| mateclaw-ui/src/api/index.ts | 106 | * (used by chat selectors so disabled agents disappear from the picker). |
| mateclaw-ui/src/api/index.ts | 109 | list: (params?: { enabled?: boolean }) => http.get('/agents', { params }), |
| mateclaw-ui/src/api/index.ts | 110 | get: (id: string \| number) => http.get(`/agents/${id}`), |
| mateclaw-ui/src/api/index.ts | 111 | create: (data: any) => http.post('/agents', data), |
| mateclaw-ui/src/api/index.ts | 113 | generate: (requirement: string) => http.post('/agents/generate', { requirement }), |
| mateclaw-ui/src/api/index.ts | 114 | update: (id: string \| number, data: any) => http.put(`/agents/${id}`, data), |

## Gap

_없음_
