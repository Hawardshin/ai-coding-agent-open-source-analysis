# marswangyang/personal-ai-memory 코드 레벨 분석

생성일: 2026-06-17T23:31:32.499Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | B production-leaning (79) |
| stars | 48 |
| language | TypeScript |
| tags | rag, knowledge-base, korea-signal |
| files/code/source | 100/82/63 |
| tests/ci | 19/1 |
| local path | sources/marswangyang__personal-ai-memory |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 1 | 1 | src/contents/gemini-injector.tsx:188 // ─── DOM Conversation Scraper ───────────────────────────────────────────────── |
| Parsing/OCR/document extraction | absent | 0 | 0 |  |
| Chunking/splitting | code | 12 | 9 | src/background/chunking.ts:4 // We split long content into overlapping character windows so each chunk fits |
| Embedding/vector index | code | 20 | 10 | src/background/embedding.ts:5 * All embedding requests are processed through a serialized task queue |
| Retrieval/search/rerank | code | 22 | 11 | src/background/chunking.ts:5 // comfortably. Overlap preserves cross-boundary context for better retrieval. |
| Wiki/graph/entity model | doc-only | 2 | 0 | pnpm-lock.yaml:2374 entities@2.2.0: |
| Memory/update lifecycle | code | 71 | 51 | src/background/chunking.ts:1 import type { MemoryRecord } from "../types/memory"; |
| Provenance/citation/evidence | code | 2 | 1 | src/popup/components/FavoritePromptsSection.tsx:212 const sourceId = e.dataTransfer.getData(DRAG_TYPE) |
| Evaluation/observability | code | 27 | 15 | src/background/embedding.ts:20 // CSP blocks ("script-src 'self' 'wasm-unsafe-eval'" does not allow blob:). |
| Agent/MCP/tool surface | code | 51 | 26 | src/background/db.ts:207 * Bulk existence check for chat_message UUIDs (from Claude conversation history). |

## 의존성 신호

- LLM/app framework: @xenova/transformers

## 주요 파일 후보

### Ingestion/source intake

- `src/contents/gemini-injector.tsx`

### Chunking/splitting

- `src/background/chunking.ts`
- `src/background/db.ts`
- `src/background/domSync.ts`
- `src/background/index.ts`
- `src/background/injector.ts`
- `src/background/search.ts`
- `src/contents/interceptor.ts`
- `src/types/memory.ts`
- `src/popup/components/MemoryTableView.tsx`
- `tests/unit/background/chunkText.test.ts`
- `README.md`
- `README-multi-lan/README.en.md`

### Embedding/vector index

- `src/background/embedding.ts`
- `src/background/syncEmbeddings.ts`
- `src/background/db.ts`
- `src/background/domSync.ts`
- `src/background/index.ts`
- `src/background/offscreen.ts`
- `src/background/search.ts`
- `src/tabs/offscreen.tsx`
- `src/types/memory.ts`
- `src/types/messages.ts`
- `CHANGELOG.md`
- `README.md`
- ... 6 more

### Retrieval/search/rerank

- `src/background/chunking.ts`
- `src/background/domSync.ts`
- `src/background/index.ts`
- `src/background/perplexityBgFetch.ts`
- `src/background/search.ts`
- `src/contents/interceptor.ts`
- `src/i18n/translations.ts`
- `src/tabs/onboarding.tsx`
- `src/types/messages.ts`
- `src/utils/recall-helpers.ts`
- `src/popup/components/MemoryTableView.tsx`
- `pnpm-lock.yaml`
- ... 6 more

### Wiki/graph/entity model

- `pnpm-lock.yaml`
- `tests/unit/importers/geminiTakeout.test.ts`

### Memory/update lifecycle

- `src/background/chunking.ts`
- `src/background/db.ts`
- `src/background/domSync.ts`
- `src/background/embedding.ts`
- `src/background/index.ts`
- `src/background/injector.ts`
- `src/background/offscreen.ts`
- `src/background/perplexityBgFetch.ts`
- `src/background/search.ts`
- `src/background/syncEmbeddings.ts`
- `src/constants/prompts.ts`
- `src/contents/chatgpt-injector.tsx`
- ... 6 more

### Provenance/citation/evidence

- `src/popup/components/FavoritePromptsSection.tsx`
- `tests/unit/importers/claudeConversations.test.ts`

### Evaluation/observability

- `src/background/embedding.ts`
- `src/background/index.ts`
- `src/contents/chatgpt-injector.tsx`
- `src/contents/claude-injector.tsx`
- `src/contents/gemini-injector.tsx`
- `src/contents/grok-injector.tsx`
- `src/contents/onboarding-overlay.tsx`
- `src/contents/perplexity-injector.tsx`
- `src/i18n/recall-messages.ts`
- `src/i18n/translations.ts`
- `src/tabs/onboarding.tsx`
- `src/utils/onboarding-highlight.ts`
- ... 6 more

### Agent/MCP/tool surface

- `src/background/db.ts`
- `src/background/domSync.ts`
- `src/background/index.ts`
- `src/background/injector.ts`
- `src/contents/chatgpt-injector.tsx`
- `src/contents/claude-injector.tsx`
- `src/contents/gemini-injector.tsx`
- `src/contents/interceptor.ts`
- `src/contents/memory-float-ui.tsx`
- `src/contents/onboarding-overlay.tsx`
- `src/i18n/translations.ts`
- `src/importers/base.ts`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| src/contents/gemini-injector.tsx | 188 | // ─── DOM Conversation Scraper ───────────────────────────────────────────────── |
| src/contents/gemini-injector.tsx | 347 | * Wait until the conversation DOM has fully settled, then scrape. |
| src/contents/gemini-injector.tsx | 364 | // Hard timeout: disconnect observer and do a final scrape after MAX_WAIT_MS |
| src/contents/gemini-injector.tsx | 373 | // Scrape on each settle (content dedup in sendCapturedTurn prevents re-sending). |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| src/background/chunking.ts | 4 | // We split long content into overlapping character windows so each chunk fits |
| src/background/chunking.ts | 5 | // comfortably. Overlap preserves cross-boundary context for better retrieval. |
| src/background/chunking.ts | 8 | export const CHUNK_OVERLAP_CHARS = 75; // ~15% overlap to avoid cutting mid-sentence |
| src/background/chunking.ts | 23 | * Expands a single MemoryRecord into one or more chunk records. |
| src/background/chunking.ts | 25 | * Long content is split; each chunk gets a unique id, chunkIndex, and parentId. |
| src/background/db.ts | 17 | // v1: adds parentId index to support chunk → parent queries |
| src/background/db.ts | 228 | * Chunk records use `dom:${messageId}-c0` etc., so we only check the parent key. |
| src/background/db.ts | 232 | // A single chunk also means the parent was stored — check both. |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| src/background/embedding.ts | 5 | * All embedding requests are processed through a serialized task queue |
| src/background/embedding.ts | 57 | resolve: (embedding: Float32Array) => void |
| src/background/embedding.ts | 73 | const embedding = new Float32Array(output.data as ArrayBuffer \| number[]) |
| src/background/embedding.ts | 74 | task.resolve(embedding) |
| src/background/embedding.ts | 86 | * Enqueues a text embedding request. Returns a Promise that resolves with |
| src/background/embedding.ts | 103 | ): Promise<Array<{ success: true; embedding: Float32Array } \| { success: false; error: string }>> { |
| src/background/embedding.ts | 104 | const results: Array<{ success: true; embedding: Float32Array } \| { success: false; error: string }> = [] |
| src/background/embedding.ts | 107 | const embedding = await embed(text) |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| src/background/chunking.ts | 5 | // comfortably. Overlap preserves cross-boundary context for better retrieval. |
| src/background/domSync.ts | 6 | import { miniSearch } from "./search"; |
| src/background/index.ts | 41 | import { handleSearchMemories, hydrateSearchIndex, miniSearch } from "./search"; |
| src/background/index.ts | 516 | error: "Search timed out (embedding may still be loading)", |
| src/background/index.ts | 528 | console.warn("[AI Memory] Search failed:", err); |
| src/background/index.ts | 625 | if (status === "complete" && url.includes("www.perplexity.ai/search/")) { |
| src/background/index.ts | 723 | console.error("[AI Memory] Search error:", err); |
| src/background/perplexityBgFetch.ts | 13 | * Matches https://www.perplexity.ai/search/<slug> |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| pnpm-lock.yaml | 2374 | entities@2.2.0: |
| pnpm-lock.yaml | 2377 | entities@3.0.1: |
| pnpm-lock.yaml | 2381 | entities@4.5.0: |
| pnpm-lock.yaml | 2385 | entities@7.0.1: |
| pnpm-lock.yaml | 5573 | entities: 4.5.0 |
| pnpm-lock.yaml | 6194 | entities: 2.2.0 |
| pnpm-lock.yaml | 6226 | entities@2.2.0: {} |
| pnpm-lock.yaml | 6228 | entities@3.0.1: {} |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| src/background/chunking.ts | 1 | import type { MemoryRecord } from "../types/memory"; |
| src/background/db.ts | 6 | } from "../types/memory"; |
| src/background/db.ts | 26 | // ─── Memory Record DAO ────────────────────────────────────────────────────── |
| src/background/db.ts | 59 | /** Soft-delete a record (sets isDeleted = true). */ |
| src/background/db.ts | 64 | /** Hard-delete all memory records and conversation titles from the DB. */ |
| src/background/db.ts | 141 | console.warn("[AI Memory] Failed to log error to DB:", message); |
| src/background/db.ts | 155 | /** Upsert a conversation title (create or update). */ |
| src/background/db.ts | 189 | /** Delete a conversation title. */ |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| src/popup/components/FavoritePromptsSection.tsx | 212 | const sourceId = e.dataTransfer.getData(DRAG_TYPE) |
| src/popup/components/FavoritePromptsSection.tsx | 213 | if (!sourceId \|\| sourceId === targetId) { |
| src/popup/components/FavoritePromptsSection.tsx | 218 | const sourceIdx = prompts.findIndex((p) => p.id === sourceId) |
| tests/unit/importers/claudeConversations.test.ts | 17 | content: [{ type: 'text', text: 'hihi', citations: [] }], |
| tests/unit/importers/claudeConversations.test.ts | 25 | content: [{ type: 'text', text: "Hey! How's it going?", citations: [] }], |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| src/background/embedding.ts | 20 | // CSP blocks ("script-src 'self' 'wasm-unsafe-eval'" does not allow blob:). |
| src/background/index.ts | 111 | // Strip recall-injected templates from user messages |
| src/background/index.ts | 120 | return { success: false, error: 'No records after recall template filter' } |
| src/contents/chatgpt-injector.tsx | 2 | * ChatGPT Recall Button — Content Script |
| src/contents/chatgpt-injector.tsx | 4 | * Injects a "🧠 Recall" button adjacent to the ChatGPT composer send button. |
| src/contents/chatgpt-injector.tsx | 19 | import { handleRecallClick as sharedHandleRecallClick } from "../utils/recall-helpers"; |
| src/contents/chatgpt-injector.tsx | 20 | import { createRecallButton as sharedCreateRecallButton } from "../utils/recall-button"; |
| src/contents/chatgpt-injector.tsx | 26 | const BUTTON_ID = "ai-memory-recall-btn"; |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| src/background/db.ts | 207 | * Bulk existence check for chat_message UUIDs (from Claude conversation history). |
| src/background/domSync.ts | 78 | // Gemini migration dedup: existing records may have random XHR-captured UUIDs |
| src/background/index.ts | 16 | import { ClaudeAdapter } from "./adapters/claude"; |
| src/background/index.ts | 17 | import { GeminiAdapter } from "./adapters/gemini"; |
| src/background/index.ts | 593 | "https://chat.openai.com", |
| src/background/index.ts | 595 | "https://claude.ai", |
| src/background/index.ts | 596 | "https://gemini.google.com", |
| src/background/index.ts | 618 | // Inject on 'loading' so our fetch wrapper is in place before the page's scripts run (critical for Gemini). |

## Gap

_없음_
