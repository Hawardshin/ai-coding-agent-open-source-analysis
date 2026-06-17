# nanbingxyz/5ire 코드 레벨 분석

생성일: 2026-06-17T23:31:52.722Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | A integrated platform (105) |
| stars | 5247 |
| language | TypeScript |
| tags | knowledge-base, agent-knowledge, korea-signal |
| files/code/source | 456/328/314 |
| tests/ci | 30/2 |
| local path | sources/nanbingxyz__5ire |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 12 | 12 | src/main/main.ts:72 import { DocumentLoader } from "./next/document-loader/DocumentLoader"; |
| Parsing/OCR/document extraction | code | 13 | 9 | src/consts.ts:26 docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', |
| Chunking/splitting | code | 29 | 27 | src/main/main.ts:477 nodeStream.on("data", (chunk: Buffer) => { |
| Embedding/vector index | code | 48 | 24 | src/main/environment.ts:25 * The folder where embedding models are stored. |
| Retrieval/search/rerank | code | 33 | 23 | src/mcp.config.ts:39 description: 'Tools to read, search, and manipulate Git repositories', |
| Wiki/graph/entity model | code | 9 | 6 | src/mcp.config.ts:52 args: ['-y', '--prefer-offline', '@mcp-get-community/server-macos'], |
| Memory/update lifecycle | code | 88 | 71 | src/hooks/useDeleteChat.ts:12 * @returns {boolean} delConfirmDialogOpen - Whether the delete confirmation dialog is open |
| Provenance/citation/evidence | code | 12 | 7 | src/main/util.ts:86 // 3. Block quotes (including nested quotes and citations, up to three levels, with length constraints) |
| Evaluation/observability | code | 5 | 3 | src/renderer/components/FolderSettingsDialog.tsx:246 precision={1} |
| Agent/MCP/tool surface | code | 96 | 72 | src/consts.ts:4 export const DEFAULT_PROVIDER = 'OpenAI'; |

## 의존성 신호

- LLM/app framework: @xenova/transformers
- Vector/search store: @lancedb/lancedb
- Eval/observability: @sentry/electron, @sentry/react
- Persistence/database: @electric-sql/pglite, @supabase/supabase-js, better-sqlite3, drizzle-orm, @types/better-sqlite3, drizzle-kit

## 주요 파일 후보

### Ingestion/source intake

- `src/main/main.ts`
- `src/main/preload.ts`
- `src/main/internal/bridge-connector.ts`
- `src/main/services/logger.ts`
- `src/main/next/document-loader/DocumentLoader.ts`
- `src/main/next/document-loader/EpubLoader.ts`
- `src/main/next/document-loader/FileURILoader.ts`
- `src/main/next/document-loader/HttpURILoader.ts`
- `src/main/next/document-loader/OfficeLoader.ts`
- `src/main/next/document-loader/PDFLoader.ts`
- `src/main/next/document-loader/TextLoader.ts`
- `src/renderer/pages/chat/Editor/Toolbar/ImgCtrl.tsx`

### Parsing/OCR/document extraction

- `src/consts.ts`
- `src/main/constants.ts`
- `src/main/setup.ts`
- `src/intellichat/mcp/ContentBlockConverter.ts`
- `src/intellichat/types/index.ts`
- `src/main/services/document-extractor.ts`
- `src/main/services/legacy-data-migrator.ts`
- `src/main/next/document-loader/OfficeLoader.ts`
- `src/main/next/document-loader/PDFLoader.ts`
- `package.json`
- `test/main/docloader.spec.ts`
- `README.md`
- ... 1 more

### Chunking/splitting

- `src/main/main.ts`
- `src/main/preload.ts`
- `src/main/util.ts`
- `src/renderer/App.tsx`
- `src/stores/useKnowledgeStore.ts`
- `src/intellichat/readers/AnthropicReader.ts`
- `src/intellichat/readers/BaseReader.ts`
- `src/intellichat/readers/GoogleReader.ts`
- `src/intellichat/readers/IChatReader.ts`
- `src/intellichat/readers/OllamaChatReader.ts`
- `src/intellichat/readers/OpenAIReader.ts`
- `src/intellichat/services/INextCharService.ts`
- ... 6 more

### Embedding/vector index

- `src/main/environment.ts`
- `src/main/main.ts`
- `src/main/preload.ts`
- `src/providers/LMStudio.ts`
- `src/providers/Ollama.ts`
- `src/providers/types.ts`
- `src/main/bridge/document-embedder-bridge.ts`
- `src/main/bridge/embedder-bridge.ts`
- `src/main/database/index.ts`
- `src/main/services/document-embedder.ts`
- `src/main/services/document-manager.ts`
- `src/main/services/embedder.ts`
- ... 6 more

### Retrieval/search/rerank

- `src/mcp.config.ts`
- `src/main/menu.ts`
- `src/main/preload.ts`
- `src/providers/Zhipu.ts`
- `src/stores/useAuthStore.ts`
- `src/utils/cache.ts`
- `src/intellichat/services/AnthropicChatService.ts`
- `src/main/database/types.ts`
- `src/main/services/document-manager.ts`
- `src/main/services/mcp-completion-handler.ts`
- `src/main/services/mcp-prompts-manager.ts`
- `src/renderer/components/Empty.tsx`
- ... 6 more

### Wiki/graph/entity model

- `src/mcp.config.ts`
- `src/main/menu.ts`
- `src/main/services/document-manager.ts`
- `src/main/database/schema/index.ts`
- `src/main/database/schema/relations.ts`
- `drizzle.config.ts`
- `CODE_OF_CONDUCT.md`
- `README.md`
- `docs/ARCHITECTURE.md`

### Memory/update lifecycle

- `src/hooks/useDeleteChat.ts`
- `src/hooks/useMarkdown.ts`
- `src/main/environment.ts`
- `src/main/main.ts`
- `src/main/mcp.ts`
- `src/main/preload.ts`
- `src/main/sqlite.ts`
- `src/providers/Azure.ts`
- `src/providers/Fire.ts`
- `src/providers/OpenAI.ts`
- `src/stores/useBookmarkStore.ts`
- `src/stores/useChatKnowledgeStore.ts`
- ... 6 more

### Provenance/citation/evidence

- `src/main/util.ts`
- `src/stores/useKnowledgeStore.ts`
- `src/utils/util.ts`
- `src/renderer/pages/bookmark/Bookmark.tsx`
- `src/renderer/pages/chat/CitationDialog.tsx`
- `src/renderer/pages/chat/index.tsx`
- `src/renderer/pages/chat/Message.tsx`
- `public/locales/en/translation.json`
- `public/locales/fr/translation.json`
- `public/locales/ru/translation.json`
- `public/locales/zh/translation.json`
- `CODE_OF_CONDUCT.md`

### Evaluation/observability

- `src/renderer/components/FolderSettingsDialog.tsx`
- `src/main/database/schema/tables.ts`
- `src/renderer/pages/chat/Editor/Toolbar/MaxTokensCtrl.tsx`
- `DEVELOPMENT.md`
- `docs/ARCHITECTURE.md`

### Agent/MCP/tool surface

- `src/consts.ts`
- `src/mcp.config.ts`
- `src/intellichat/types.ts`
- `src/main/environment.ts`
- `src/main/main.ts`
- `src/main/mcp.ts`
- `src/main/preload.ts`
- `src/providers/Anthropic.ts`
- `src/providers/Azure.ts`
- `src/providers/DeepSeek.ts`
- `src/providers/Doubao.ts`
- `src/providers/Fire.ts`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| src/main/main.ts | 72 | import { DocumentLoader } from "./next/document-loader/DocumentLoader"; |
| src/main/main.ts | 602 | ipcMain.handle("ingest-event", (_, data) => { |
| src/main/main.ts | 832 | ipcMain.handle("DocumentLoader::loadFromBuffer", (_, buffer, mimeType) => { |
| src/main/main.ts | 833 | return DocumentLoader.loadFromBuffer(buffer, mimeType); |
| src/main/main.ts | 835 | ipcMain.handle("DocumentLoader::loadFromURI", (_, url, mimeType) => { |
| src/main/main.ts | 836 | return DocumentLoader.loadFromURI(url, mimeType); |
| src/main/main.ts | 838 | ipcMain.handle("DocumentLoader::loadFromFilePath", (_, file, mimeType) => { |
| src/main/main.ts | 839 | return DocumentLoader.loadFromFilePath(file, mimeType); |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| src/consts.ts | 26 | docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', |
| src/consts.ts | 27 | pdf: 'application/pdf', |
| src/consts.ts | 29 | pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', |
| src/main/constants.ts | 44 | pdf: "application/pdf", |
| src/main/constants.ts | 46 | docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", |
| src/main/constants.ts | 48 | pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation", |
| src/main/setup.ts | 1 | import "pdf-parse/worker"; |
| src/main/setup.ts | 7 | import { PDFParse } from "pdf-parse"; |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| src/main/main.ts | 477 | nodeStream.on("data", (chunk: Buffer) => { |
| src/main/main.ts | 479 | event.sender.send("stream-data", requestId, new Uint8Array(chunk)); |
| src/main/preload.ts | 286 | getChunk: (id: string) => ipcRenderer.invoke("get-knowledge-chunk", id), |
| src/main/util.ts | 22 | // https://www.llamaindex.ai/blog/evaluating-the-ideal-chunk-size-for-a-rag-system-using-llamaindex-6207e5d3fec5 |
| src/main/util.ts | 30 | throw new Error('Chunk size and slide size must be positive'); |
| src/renderer/App.tsx | 69 | * @param {unknown} data - Import completion data containing collection ID, file info, and chunk count |
| src/stores/useKnowledgeStore.ts | 16 | cacheChunks: (chunk: IKnowledgeChunk[]) => void; |
| src/stores/useKnowledgeStore.ts | 45 | chunks.forEach((chunk) => { |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| src/main/environment.ts | 25 | * The folder where embedding models are stored. |
| src/main/environment.ts | 29 | * The folder where embedding cache is stored. |
| src/main/environment.ts | 49 | * Legacy vector database folder path |
| src/main/main.ts | 32 | import { DocumentEmbedderBridge } from "@/main/bridge/document-embedder-bridge"; |
| src/main/main.ts | 35 | import { EmbedderBridge } from "@/main/bridge/embedder-bridge"; |
| src/main/main.ts | 48 | import { DocumentEmbedder } from "@/main/services/document-embedder"; |
| src/main/main.ts | 52 | import { Embedder } from "@/main/services/embedder"; |
| src/main/main.ts | 56 | import { LegacyVectorDatabaseLoader } from "@/main/services/legacy-vector-database-loader"; |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| src/mcp.config.ts | 39 | description: 'Tools to read, search, and manipulate Git repositories', |
| src/mcp.config.ts | 74 | 'Read and search through your Obsidian vault or any directory containing Markdown notes.', |
| src/mcp.config.ts | 108 | 'A Model Context Protocol (MCP) server that provides search and crawl functionality using Search1API.', |
| src/main/menu.ts | 334 | label: 'Search Issues', |
| src/main/preload.ts | 283 | search: (collectionIds: string[], query: string) => ipcRenderer.invoke("search-knowledge", collectionIds, query), |
| src/providers/Zhipu.ts | 169 | description: `Base language model that can quickly execute complex tasks, with enhanced capabilities in tool calling, web search, code and agent tasks`, |
| src/providers/Zhipu.ts | 207 | description: `Ultra-fast inference speed, stronger concurrency guarantee and extreme cost-effectiveness, excellent performance in real-time web retrieval, long context processing, and multilingual support`, |
| src/stores/useAuthStore.ts | 42 | * and has not yet confirmed activation via email. In this case, we need to retrieve the local InactiveUser |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| src/mcp.config.ts | 52 | args: ['-y', '--prefer-offline', '@mcp-get-community/server-macos'], |
| src/mcp.config.ts | 71 | key: 'Obsidian', |
| src/mcp.config.ts | 74 | 'Read and search through your Obsidian vault or any directory containing Markdown notes.', |
| src/mcp.config.ts | 78 | 'mcp-obsidian', |
| src/main/menu.ts | 228 | label: 'Community Discussions', |
| src/main/menu.ts | 328 | label: 'Community Discussions', |
| src/main/menu.ts | 330 | shell.openExternal('https://www.electronjs.org/community'); |
| src/main/services/document-manager.ts | 433 | * Associate a collection with a target entity |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| src/hooks/useDeleteChat.ts | 12 | * @returns {boolean} delConfirmDialogOpen - Whether the delete confirmation dialog is open |
| src/hooks/useDeleteChat.ts | 14 | * @returns {Function} showDeleteConfirmation - Function to show delete confirmation for a specific chat |
| src/hooks/useDeleteChat.ts | 29 | * Shows the delete confirmation dialog for a specific chat |
| src/hooks/useDeleteChat.ts | 30 | * @param {IChat} [chat] - The chat to delete. If not provided, will delete current chat |
| src/hooks/useDeleteChat.ts | 54 | * Cancels the delete operation and closes the confirmation dialog |
| src/hooks/useMarkdown.ts | 98 | // remove the oldest entry if cache size exceeds limit |
| src/hooks/useMarkdown.ts | 100 | renderCache.delete(firstKey \|\| ""); |
| src/main/environment.ts | 29 | * The folder where embedding cache is stored. |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| src/main/util.ts | 86 | // 3. Block quotes (including nested quotes and citations, up to three levels, with length constraints) |
| src/stores/useKnowledgeStore.ts | 12 | citation: { open: boolean; content: string }; |
| src/stores/useKnowledgeStore.ts | 35 | citation: { open: false, content: '' }, |
| src/stores/useKnowledgeStore.ts | 38 | set({ citation: { open: true, content } }); |
| src/stores/useKnowledgeStore.ts | 41 | set({ citation: { open: false, content: '' } }); |
| src/utils/util.ts | 362 | const regex = /\[\(?\d+\)?\]\(citation#([a-z0-9-]+)\s*.*?\)/g; |
| src/utils/util.ts | 377 | // citation |
| src/utils/util.ts | 413 | const regex = /\[\(?\d+\)?\]\(citation#([a-z0-9-]+)\s*.*?\)/g; |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| src/renderer/components/FolderSettingsDialog.tsx | 246 | precision={1} |
| src/main/database/schema/tables.ts | 423 | * Metadata related to the turn, such as token usage or other metrics. |
| src/renderer/pages/chat/Editor/Toolbar/MaxTokensCtrl.tsx | 158 | precision={0} |
| DEVELOPMENT.md | 63 | We utilize [Axiom](https://axiom.co/) to collect anonymized minimal operational metrics and [Supabase](https://supabase.com/) for authorization and backing up settings. If these features aren't involved during developmen |
| docs/ARCHITECTURE.md | 318 | - Optional telemetry via Axiom |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| src/consts.ts | 4 | export const DEFAULT_PROVIDER = 'OpenAI'; |
| src/mcp.config.ts | 1 | import { IMCPConfig } from './types/mcp'; |
| src/mcp.config.ts | 10 | args: ['apple-notes-mcp'], |
| src/mcp.config.ts | 23 | '@modelcontextprotocol/server-filesystem', |
| src/mcp.config.ts | 33 | args: ['mcp-hn'], |
| src/mcp.config.ts | 41 | 'mcp-server-git', |
| src/mcp.config.ts | 52 | args: ['-y', '--prefer-offline', '@mcp-get-community/server-macos'], |
| src/mcp.config.ts | 59 | 'An MCP server gives LLMs read - only access to MySQL databases for schema inspection and query execution.', |

## Gap

_없음_
