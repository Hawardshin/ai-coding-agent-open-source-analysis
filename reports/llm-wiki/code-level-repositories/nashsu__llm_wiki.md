# nashsu/llm_wiki 코드 레벨 분석

생성일: 2026-06-17T23:31:12.093Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | persistent-llm-wiki |
| maturity | A integrated platform (101) |
| stars | 11791 |
| language | TypeScript |
| tags | direct-llm-wiki, rag, knowledge-base, document-chat, korea-signal |
| files/code/source | 350/315/188 |
| tests/ci | 114/2 |
| local path | sources/nashsu__llm_wiki |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 100 | 61 | src/App.tsx:318 // ingest queue / graph cache are actually cleared before the new |
| Parsing/OCR/document extraction | code | 70 | 31 | src/lib/changelog.ts:67 "Improved MinerU PDF previews by extracting images from MinerU result archives and rewriting them into Markdown image links.", |
| Chunking/splitting | code | 37 | 19 | src/lib/dedup_embedding.ts:33 * Default 1500 chars (matches chunker default). |
| Embedding/vector index | code | 60 | 29 | src/lib/dedup_embedding.ts:4 * Vector-embedding candidate generation for duplicate-page scan. |
| Retrieval/search/rerank | code | 81 | 47 | src/lib/anytxt-search.ts:5 import type { WebSearchResult } from "./web-search" |
| Wiki/graph/entity model | code | 79 | 37 | src/lib/changelog.ts:273 "外部删除原始文件后的清理更可靠：相关 wiki 页面、index 条目、正文 wikilink 和 `related:` 引用会一致清理，也覆盖带路径和 `.md` 后缀的引用。", |
| Memory/update lifecycle | code | 137 | 84 | src/App.tsx:131 // Cache hit requires BOTH the timestamp AND the in-memory |
| Provenance/citation/evidence | code | 37 | 23 | src/lib/extract-source-images.ts:97 function uniqueDestName(index: number, sourcePath: string): string { |
| Evaluation/observability | code | 9 | 5 | src/lib/dedup-runner.ts:32 // Conservative defaults: keep enough neighbors for recall while cutting the |
| Agent/MCP/tool surface | code | 102 | 42 | src/App.tsx:212 // (e.g. a corrected Anthropic model ID shipped in a release) |

## 의존성 신호

- Vector/search store: lancedb
- Document parsing/OCR: docx-rs

## 주요 파일 후보

### Ingestion/source intake

- `src/App.tsx`
- `src/commands/file-sync.ts`
- `src/lib/changelog.ts`
- `src/lib/claude-cli-transport.ts`
- `src/lib/clip-watcher.ts`
- `src/lib/dedup-queue.ts`
- `src/lib/dedup-runner.ts`
- `src/lib/dedup-storage.ts`
- `src/lib/deep-research.ts`
- `src/lib/embedding.ts`
- `src/lib/extract-source-images.ts`
- `src/lib/has-usable-llm.ts`
- ... 6 more

### Parsing/OCR/document extraction

- `src/lib/changelog.ts`
- `src/lib/extract-source-images.ts`
- `src/lib/file-types.ts`
- `src/lib/graph-relevance.ts`
- `src/lib/image-caption-pipeline.ts`
- `src/lib/ingest-queue.ts`
- `src/lib/ingest.ts`
- `src/lib/mineru.ts`
- `src/lib/path-utils.ts`
- `src/lib/source-lifecycle.ts`
- `src/lib/source-watch-config.ts`
- `src/lib/text-chunker.ts`
- ... 6 more

### Chunking/splitting

- `src/lib/dedup_embedding.ts`
- `src/lib/detect-language.ts`
- `src/lib/embedding.ts`
- `src/lib/endpoint-normalizer.ts`
- `src/lib/graph-relevance.ts`
- `src/lib/ingest.ts`
- `src/lib/lint.ts`
- `src/lib/llm-client.ts`
- `src/lib/llm-providers.ts`
- `src/lib/mineru.ts`
- `src/lib/scheduled-import.ts`
- `src/lib/text-chunker.ts`
- ... 6 more

### Embedding/vector index

- `src/lib/dedup_embedding.ts`
- `src/lib/embedding.ts`
- `src/components/settings/sections/embedding-section.tsx`
- `src/App.tsx`
- `src/lib/changelog.ts`
- `src/lib/dedup-runner.ts`
- `src/lib/endpoint-normalizer.ts`
- `src/lib/image-caption-pipeline.ts`
- `src/lib/ingest-queue.ts`
- `src/lib/ingest.ts`
- `src/lib/search.ts`
- `src/lib/source-lifecycle.ts`
- ... 6 more

### Retrieval/search/rerank

- `src/lib/anytxt-search.ts`
- `src/lib/changelog.ts`
- `src/lib/dedup-runner.ts`
- `src/lib/deep-research.ts`
- `src/lib/embedding.ts`
- `src/lib/endpoint-normalizer.ts`
- `src/lib/greeting-detector.ts`
- `src/lib/image-caption-pipeline.ts`
- `src/lib/ingest.ts`
- `src/lib/llm-providers.ts`
- `src/lib/markdown-image-resolver.ts`
- `src/lib/optimize-research-topic.ts`
- ... 6 more

### Wiki/graph/entity model

- `src/lib/changelog.ts`
- `src/lib/dedup-runner.ts`
- `src/lib/dedup.ts`
- `src/lib/deep-research.ts`
- `src/lib/enrich-wikilinks.ts`
- `src/lib/frontmatter.ts`
- `src/lib/graph-insights.ts`
- `src/lib/graph-relevance.ts`
- `src/lib/ingest-sanitize.ts`
- `src/lib/ingest.ts`
- `src/lib/latex-to-unicode.ts`
- `src/lib/lint-fixes.ts`
- ... 6 more

### Memory/update lifecycle

- `src/App.tsx`
- `src/commands/file-sync.ts`
- `src/lib/changelog.ts`
- `src/lib/claude-cli-transport.ts`
- `src/lib/clip-watcher.ts`
- `src/lib/dedup_embedding.ts`
- `src/lib/dedup-queue.ts`
- `src/lib/dedup-runner.ts`
- `src/lib/dedup-storage.ts`
- `src/lib/dedup.ts`
- `src/lib/deep-research.ts`
- `src/lib/embedding.ts`
- ... 6 more

### Provenance/citation/evidence

- `src/lib/extract-source-images.ts`
- `src/lib/ingest-queue.ts`
- `src/lib/ingest.ts`
- `src/lib/mineru.ts`
- `src/lib/output-language.ts`
- `src/lib/scheduled-import.ts`
- `src/lib/source-identity.ts`
- `src/lib/source-lifecycle.ts`
- `src/lib/templates.ts`
- `src/lib/web-search.ts`
- `src/lib/wiki-graph.ts`
- `src/stores/review-store.ts`
- ... 6 more

### Evaluation/observability

- `src/lib/dedup-runner.ts`
- `src/lib/ingest.ts`
- `src/lib/templates.ts`
- `src/lib/vision-caption.ts`
- `extension/Readability.js`
- `src/test-helpers/real-content.ts`
- `package-lock.json`
- `src/lib/embedding.real-llm.test.ts`
- `README.md`

### Agent/MCP/tool surface

- `src/App.tsx`
- `src/lib/azure-openai.ts`
- `src/lib/changelog.ts`
- `src/lib/claude-cli-transport.ts`
- `src/lib/codex-cli-transport.ts`
- `src/lib/dedup-runner.ts`
- `src/lib/deep-research.ts`
- `src/lib/embedding.ts`
- `src/lib/endpoint-normalizer.ts`
- `src/lib/has-usable-llm.ts`
- `src/lib/image-caption-pipeline.ts`
- `src/lib/ingest.ts`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| src/App.tsx | 318 | // ingest queue / graph cache are actually cleared before the new |
| src/App.tsx | 332 | // Restore ingest queue (resume interrupted tasks). Keyed by the |
| src/App.tsx | 336 | // may enqueue ingest tasks and require an active project queue. |
| src/App.tsx | 338 | const { restoreQueue } = await import("@/lib/ingest-queue") |
| src/App.tsx | 341 | console.error("Failed to restore ingest queue:", err) |
| src/App.tsx | 377 | import("@/lib/scheduled-import").then(({ startScheduledImport }) => { |
| src/App.tsx | 486 | import("@/lib/scheduled-import").then(({ stopScheduledImport }) => { |
| src/commands/file-sync.ts | 3 | import { normalizeSourceWatchConfig } from "@/lib/source-watch-config" |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| src/lib/changelog.ts | 67 | "Improved MinerU PDF previews by extracting images from MinerU result archives and rewriting them into Markdown image links.", |
| src/lib/changelog.ts | 68 | "Converted MinerU HTML tables inside Markdown output into Markdown tables for cleaner preview and ingest.", |
| src/lib/changelog.ts | 69 | "Hardened MinerU image handling for spaces, parentheses, path traversal, duplicate names, and partial image-save failures.", |
| src/lib/changelog.ts | 72 | "改进 MinerU PDF 预览：从 MinerU 结果压缩包提取图片，并重写为 Markdown 图片引用。", |
| src/lib/changelog.ts | 73 | "将 MinerU Markdown 输出中的 HTML 表格转换为 Markdown 表格，让预览和摄取更干净。", |
| src/lib/changelog.ts | 74 | "强化 MinerU 图片处理，覆盖空格、括号、路径穿越、重名图片和图片保存部分失败等边界。", |
| src/lib/changelog.ts | 84 | "Improved MinerU PDF parsing, local CLI provider resolution, API/MCP settings, and source/image ingestion reliability.", |
| src/lib/changelog.ts | 89 | "优化 MinerU PDF 解析、本地 CLI Provider 解析、API/MCP 设置，以及资料与图片摄取稳定性。", |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| src/lib/dedup_embedding.ts | 33 | * Default 1500 chars (matches chunker default). |
| src/lib/dedup_embedding.ts | 68 | * Mirrors embedPage's chunker input but keeps it short for similarity comparison. |
| src/lib/detect-language.ts | 282 | // ([ãõç]) than ES, and their common-word sets overlap heavily (`que`, `de`, |
| src/lib/embedding.ts | 4 | * 1. chunkMarkdown(content) (src/lib/text-chunker.ts) |
| src/lib/embedding.ts | 5 | * 2. for each chunk: |
| src/lib/embedding.ts | 29 | import { chunkMarkdown, type Chunk } from "@/lib/text-chunker" |
| src/lib/embedding.ts | 105 | * actually got through. Chunker config should be tuned to minimise |
| src/lib/embedding.ts | 201 | lastEmbeddingError = `Endpoint rejected input even at ${current.length} chars — server context smaller than expected. Lower Settings → Embedding → Max Chunk Chars (${bodyText.slice(0, 160)}).` |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| src/lib/dedup_embedding.ts | 4 | * Vector-embedding candidate generation for duplicate-page scan. |
| src/lib/dedup_embedding.ts | 8 | * Uses real fetchEmbedding() from ./embedding (raw text → vector API). |
| src/lib/dedup_embedding.ts | 10 | import { fetchEmbedding } from "./embedding" |
| src/lib/dedup_embedding.ts | 26 | * If too many embeddings fail, callers should fall back to the old full scan |
| src/lib/dedup_embedding.ts | 31 | * Per-page character budget for the embedding input text. |
| src/lib/dedup_embedding.ts | 32 | * Real pages can be megabytes; we cap to stay within embedding context windows. |
| src/lib/dedup_embedding.ts | 50 | * zero, vectors differ in length, or either is null/undefined (embedding failed). |
| src/lib/dedup_embedding.ts | 67 | * Build the embedding input text from a page. |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| src/lib/anytxt-search.ts | 5 | import type { WebSearchResult } from "./web-search" |
| src/lib/anytxt-search.ts | 128 | "Convert the user's search or research topics into concise AnyTXT local file search keyword queries.", |
| src/lib/anytxt-search.ts | 133 | "- Produce 1-3 search queries total.", |
| src/lib/changelog.ts | 137 | "Added a local MCP server for agent clients, using the same project, search, graph, and file APIs as the desktop app.", |
| src/lib/changelog.ts | 152 | "Fixed graph search rendering errors and stabilized graph controls during filtering and search.", |
| src/lib/changelog.ts | 167 | "Improved source import, monitoring, chat search controls, graph controls, wiki generation reliability, and Mermaid rendering stability.", |
| src/lib/changelog.ts | 183 | "Deep Research can now use AnyTXT local file search alongside web search, with configurable research sources.", |
| src/lib/changelog.ts | 199 | "Improved local API and search reliability, including shared backend search behavior.", |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| src/lib/changelog.ts | 273 | "外部删除原始文件后的清理更可靠：相关 wiki 页面、index 条目、正文 wikilink 和 `related:` 引用会一致清理，也覆盖带路径和 `.md` 后缀的引用。", |
| src/lib/changelog.ts | 303 | "Right-click delete in the Knowledge tree for entity / concept pages, with full reference cleanup: every body `[[wikilink]]`, `index.md` listing entry, and `related:` frontmatter array pointing at the deleted page is rew |
| src/lib/changelog.ts | 311 | "Knowledge 知识树新增右键删除 entity / concept 页面：删除时自动清理所有引用 —— 文中的 `[[wikilink]]`、`index.md` 的目录条目、其它页面 frontmatter `related:` 数组里指向被删页的 slug，全都在同一步重写干净，不再留断链让 FrontmatterPanel 显示警告图标。", |
| src/lib/changelog.ts | 316 | "所有删除入口（Sources 删原始文档、Lint 删孤儿页、Knowledge 树右键）现在都走同一个清理辅助函数，任意路径删除都会触发完整清扫 —— 不会再有一条路径清掉 wikilink 但漏掉 `related:` 留下断引的不一致。", |
| src/lib/changelog.ts | 326 | "Settings → Maintenance: new \"Detect duplicate entities / concepts\" tool. The LLM scans every wiki page and surfaces likely-duplicate groups (English vs Chinese name, plural vs singular, abbreviation vs full form). You |
| src/lib/changelog.ts | 327 | "Re-ingesting an entity / concept page that already exists now preserves earlier contributions: an LLM merge step combines old + new bodies instead of clobbering, with length / structure sanity checks and a backup snapsh |
| src/lib/changelog.ts | 336 | "重新 ingest 同名 entity / concept 页时，由 LLM 把新旧版本合并成一份完整内容，不再直接覆盖丢失之前的贡献；包含长度/结构 sanity 检查，失败时自动备份原版本。", |
| src/lib/changelog.ts | 350 | "Visual frontmatter panel for wiki pages: type-coded chips for entity / concept / query, clickable source and related cards that navigate directly to the linked file or page.", |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| src/App.tsx | 131 | // Cache hit requires BOTH the timestamp AND the in-memory |
| src/App.tsx | 148 | `[update-check] skipped: cache hit (last check ${ageMin} min ago, ` + |
| src/App.tsx | 149 | `cache window ${UPDATE_CHECK_CACHE_MS / 60_000} min). ` + |
| src/App.tsx | 214 | // `llmConfig` snapshot from a previous launch would keep the |
| src/App.tsx | 285 | console.warn("[general] failed to sync autostart:", err) |
| src/App.tsx | 318 | // ingest queue / graph cache are actually cleared before the new |
| src/App.tsx | 328 | // Bump data version so any cached graphs/views invalidate |
| src/App.tsx | 335 | // Await this before starting file sync: watcher events for raw/sources |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| src/lib/extract-source-images.ts | 97 | function uniqueDestName(index: number, sourcePath: string): string { |
| src/lib/extract-source-images.ts | 98 | const name = getFileName(sourcePath).replace(/[<>:"\|?*\x00-\x1f]/g, "_") |
| src/lib/extract-source-images.ts | 138 | * Extract every embedded image from `sourcePath` and save them to |
| src/lib/extract-source-images.ts | 153 | sourcePath: string, |
| src/lib/extract-source-images.ts | 157 | const sp = normalizePath(sourcePath) |
| src/lib/extract-source-images.ts | 172 | { sourcePath: sp, destDir, relTo }, |
| src/lib/extract-source-images.ts | 202 | sourcePath: string, |
| src/lib/extract-source-images.ts | 210 | const sp = normalizePath(sourcePath) |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| src/lib/dedup-runner.ts | 32 | // Conservative defaults: keep enough neighbors for recall while cutting the |
| src/lib/dedup-runner.ts | 243 | // Preserve recall for small/medium wikis: a weak or non-multilingual |
| src/lib/ingest.ts | 1871 | " SEARCH: automated technical debt detection AI generated code \| software quality metrics LLM code generation \| static analysis tools agentic software development", |
| src/lib/templates.ts | 552 | ## Metrics / Success Criteria |
| src/lib/vision-caption.ts | 55 | * metric" for a literal screenshot of a SQL query. |
| extension/Readability.js | 1025 | * grabArticle - Using a variety of metrics (content score, classname, element types), find the content that is |
| src/test-helpers/real-content.ts | 37 | various long text classification benchmark datasets. Our experiments show that |
| src/test-helpers/real-content.ts | 731 | **BGE**, **E5**) for initial recall, rerank with a cross-encoder, and |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| src/App.tsx | 212 | // (e.g. a corrected Anthropic model ID shipped in a release) |
| src/lib/azure-openai.ts | 8 | return url.hostname.toLowerCase().endsWith(".openai.azure.com") |
| src/lib/azure-openai.ts | 10 | return /(^\|\/\/)[^/?#]+\.openai\.azure\.com(?::\d+)?(?:[/?#]\|$)/i.test(trimmed) |
| src/lib/azure-openai.ts | 40 | /^(https?:\/\/[^/]+\.openai\.azure\.com)\/openai\/deployments\/([^/]+)(?:\/chat\/completions)?$/i, |
| src/lib/azure-openai.ts | 50 | const resourceOnly = withoutQuery.match(/^(https?:\/\/[^/]+\.openai\.azure\.com)(?:\/openai)?$/i) |
| src/lib/azure-openai.ts | 73 | const deploymentPath = `/openai/deployments/${encodeURIComponent(deployment)}/chat/completions` |
| src/lib/azure-openai.ts | 78 | return `${parsed.resourceBase}/openai/deployments/${dep}/chat/completions?api-version=${version}` |
| src/lib/changelog.ts | 35 | "Improved MCP and local CLI provider reliability, including MCP version reporting and running Codex CLI from the project root.", |

## Gap

_없음_
