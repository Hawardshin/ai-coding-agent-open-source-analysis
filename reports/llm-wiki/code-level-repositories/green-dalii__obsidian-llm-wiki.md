# green-dalii/obsidian-llm-wiki 코드 레벨 분석

생성일: 2026-06-17T23:31:16.409Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | persistent-llm-wiki |
| maturity | A integrated platform (99) |
| stars | 101 |
| language | TypeScript |
| tags | direct-llm-wiki, knowledge-base, korea-signal |
| files/code/source | 151/124/76 |
| tests/ci | 45/1 |
| local path | sources/green-dalii__obsidian-llm-wiki |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 35 | 20 | src/wiki/prompts/ingestion.ts:1 // Ingestion prompts — source analysis, entity resolution |
| Parsing/OCR/document extraction | code | 4 | 2 | src/llm-client.ts:154 private extractText(content: Array<{ type: string; text?: string }>): string { |
| Chunking/splitting | code | 7 | 6 | src/llm-client.ts:279 onChunk: (chunk: string) => void; |
| Embedding/vector index | code | 6 | 4 | src/wiki/page-factory.ts:496 // text through the model, a known corruption vector). Skip the LLM entirely: |
| Retrieval/search/rerank | code | 14 | 6 | src/wiki/query-engine.ts:9 import { parseIndexForPages, localKeywordMatch } from '../core/index-search'; |
| Wiki/graph/entity model | code | 111 | 53 | src/constants.ts:18 entities: 'entities', |
| Memory/update lifecycle | code | 58 | 33 | src/constants.ts:76 * Token budget for append-to-reviewed-page (incremental short addition). |
| Provenance/citation/evidence | code | 29 | 17 | src/core/report.ts:46 sourcePath?: string |
| Evaluation/observability | code | 12 | 6 | src/main.ts:118 // Delayed evaluation: this closure captures autoMaintainManager by reference, |
| Agent/MCP/tool surface | code | 52 | 23 | src/llm-client-wrapper.ts:8 // fallback internally (anthropic → openai → none, see llm-client.ts |

## 의존성 신호

_없음_

## 주요 파일 후보

### Ingestion/source intake

- `src/wiki/prompts/ingestion.ts`
- `src/main.ts`
- `src/prompts.ts`
- `src/types.ts`
- `src/schema/auto-maintain.ts`
- `src/texts/de.ts`
- `src/texts/en.ts`
- `src/texts/es.ts`
- `src/texts/fr.ts`
- `src/texts/ja.ts`
- `src/texts/ko.ts`
- `src/texts/pt.ts`
- ... 6 more

### Parsing/OCR/document extraction

- `src/llm-client.ts`
- `src/core/truncation-retry.ts`
- `src/__tests__/core/truncation-retry.test.ts`
- `CHANGELOG.md`

### Chunking/splitting

- `src/llm-client.ts`
- `src/types.ts`
- `src/core/sse-parser.ts`
- `src/wiki/query-engine.ts`
- `src/wiki/lint/controller.ts`
- `src/wiki/lint/duplicate-detection.ts`
- `src/__tests__/core/sse-parser.test.ts`

### Embedding/vector index

- `src/wiki/page-factory.ts`
- `src/wiki/source-analyzer.ts`
- `src/wiki/lint/controller.ts`
- `src/wiki/prompts/generation.ts`
- `CHANGELOG.md`
- `CLAUDE.md`

### Retrieval/search/rerank

- `src/wiki/query-engine.ts`
- `src/wiki/source-analyzer.ts`
- `src/wiki/prompts/fixes.ts`
- `src/wiki/prompts/ingestion.ts`
- `src/wiki/prompts/lint.ts`
- `esbuild.config.mjs`
- `src/__tests__/core/index-search.test.ts`
- `CHANGELOG.md`
- `CLAUDE.md`
- `CONTRIBUTING.md`
- `README.md`
- `ROADMAP.md`
- ... 2 more

### Wiki/graph/entity model

- `src/constants.ts`
- `src/llm-client.ts`
- `src/main.ts`
- `src/types.ts`
- `src/core/batch-limits.ts`
- `src/core/batch-merger.ts`
- `src/core/conflict-resolver.ts`
- `src/core/convergence-detector.ts`
- `src/core/dead-link-detector.ts`
- `src/core/frontmatter.ts`
- `src/core/prompt-builders.ts`
- `src/core/slug.ts`
- ... 6 more

### Memory/update lifecycle

- `src/constants.ts`
- `src/llm-client.ts`
- `src/main.ts`
- `src/prompts.ts`
- `src/types.ts`
- `src/core/batch-merger.ts`
- `src/core/conflict-resolver.ts`
- `src/core/frontmatter.ts`
- `src/core/report.ts`
- `src/core/slug.ts`
- `src/schema/analyze.ts`
- `src/schema/auto-maintain.ts`
- ... 6 more

### Provenance/citation/evidence

- `src/core/report.ts`
- `src/schema/schema-manager.ts`
- `src/texts/fr.ts`
- `src/wiki/query-engine.ts`
- `src/wiki/source-analyzer.ts`
- `src/wiki/wiki-engine.ts`
- `src/wiki/lint/controller.ts`
- `src/wiki/lint/fix-dead-link.ts`
- `src/wiki/lint/fix-runners.ts`
- `src/wiki/lint/merge-duplicates.ts`
- `src/wiki/lint/report-builder.ts`
- `src/wiki/lint/scanners.ts`
- ... 6 more

### Evaluation/observability

- `src/main.ts`
- `src/wiki/query-engine.ts`
- `src/wiki/wiki-engine.ts`
- `src/wiki/lint/controller.ts`
- `src/wiki/prompts/conversation.ts`
- `src/wiki/prompts/ingestion.ts`
- `package-lock.json`
- `pnpm-lock.yaml`
- `CHANGELOG.md`
- `CLAUDE.md`
- `ROADMAP.md`
- `docs/README_DE.md`

### Agent/MCP/tool surface

- `src/llm-client-wrapper.ts`
- `src/llm-client.ts`
- `src/main.ts`
- `src/types.ts`
- `src/core/sse-parser.ts`
- `src/core/token-cap.ts`
- `src/schema/analyze.ts`
- `src/texts/de.ts`
- `src/texts/en.ts`
- `src/texts/es.ts`
- `src/texts/fr.ts`
- `src/texts/ja.ts`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| src/wiki/prompts/ingestion.ts | 1 | // Ingestion prompts — source analysis, entity resolution |
| src/main.ts | 145 | id: 'ingest-source', |
| src/main.ts | 151 | id: 'ingest-folder', |
| src/main.ts | 192 | id: 'cancel-ingestion', |
| src/main.ts | 204 | id: 'ingest-active-file', |
| src/main.ts | 375 | // ==================== Ingestion ==================== |
| src/main.ts | 417 | console.error('Single ingest failed:', e); |
| src/main.ts | 444 | console.error('Ingest active file failed:', e); |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| src/llm-client.ts | 154 | private extractText(content: Array<{ type: string; text?: string }>): string { |
| src/llm-client.ts | 237 | extractText: (r) => this.extractText(r.content \|\| []), |
| src/llm-client.ts | 348 | fullText = this.extractText(data.content \|\| []); |
| src/llm-client.ts | 475 | extractText: (r) => { |
| src/llm-client.ts | 777 | extractText: (r) => r.choices[0]?.message?.content \|\| r.initialText, |
| src/core/truncation-retry.ts | 9 | * 4. Return extractText(retryResponse) |
| src/core/truncation-retry.ts | 33 | extractText: (response: T) => string; |
| src/core/truncation-retry.ts | 52 | let text = opts.extractText(initialResponse); |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| src/llm-client.ts | 279 | onChunk: (chunk: string) => void; |
| src/llm-client.ts | 518 | onChunk: (chunk: string) => void; |
| src/llm-client.ts | 963 | onChunk: (chunk: string) => void; |
| src/types.ts | 249 | onChunk: (chunk: string) => void; |
| src/core/sse-parser.ts | 20 | /** Text chunk extracted from this event. Empty string if no text content. */ |
| src/wiki/query-engine.ts | 388 | onChunk: (chunk) => { |
| src/wiki/query-engine.ts | 390 | this.accumulatedResponse += chunk; |
| src/wiki/lint/controller.ts | 214 | const chunk = batches.slice(i, i + concurrency); |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| src/wiki/page-factory.ts | 496 | // text through the model, a known corruption vector). Skip the LLM entirely: |
| src/wiki/source-analyzer.ts | 404 | // Replaces the old approach of embedding ~200K chars of page list in prompt. |
| src/wiki/lint/controller.ts | 131 | // b. Embedding-based prefilter: use a local embedding model to compute |
| src/wiki/lint/controller.ts | 869 | // wraps it in "## [timestamp] Wiki Lint Report" (H2). Embedding H1 inside |
| src/wiki/prompts/generation.ts | 41 | - Rotary Position Embedding (Japanese wiki) → ["RoPE", "回転位置埋め込み"] |
| src/wiki/prompts/generation.ts | 113 | - Rotary Position Embedding (Japanese wiki) → ["RoPE", "回転位置埋め込み"] |
| CHANGELOG.md | 340 | - Vector search (Ollama embeddings) — <1% of users have this |
| CLAUDE.md | 59 | \| Vector search (Ollama embeddings) \| Audit 1 \| Requires Ollama + embedding model; <1% of users have this \| |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| src/wiki/query-engine.ts | 9 | import { parseIndexForPages, localKeywordMatch } from '../core/index-search'; |
| src/wiki/query-engine.ts | 345 | // Phase 1 & 2: Build wiki context (search → found → context ready) |
| src/wiki/source-analyzer.ts | 33 | import { matchExtractedToExisting } from '../core/index-search'; |
| src/wiki/prompts/fixes.ts | 17 | 2. If no alias match, search for semantic similarity (translations, abbreviations, alternative phrasings) |
| src/wiki/prompts/ingestion.ts | 85 | 9. Broad TECHNOLOGY paradigm or architectural pattern → concept (technology). Examples: transformer architecture, deep learning, attention mechanism, retrieval-augmented generation |
| src/wiki/prompts/lint.ts | 71 | - Include names that someone might search for when looking for this concept |
| src/wiki/prompts/lint.ts | 83 | generateAliases: `You are a knowledge curator. Given a wiki page's title and body, suggest alternative names (aliases) someone might search for when looking for this concept. |
| esbuild.config.mjs | 31 | '@codemirror/search', |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| src/constants.ts | 18 | entities: 'entities', |
| src/constants.ts | 37 | /** Maximum custom entity/concept limit per type (settings UI cap). */ |
| src/constants.ts | 40 | /** Minimum custom entity/concept limit per type. */ |
| src/constants.ts | 70 | * Token budget for full page generation (entity/concept/source-summary). |
| src/constants.ts | 96 | * Token budget for entity dedup resolution (lightweight matching prompt). |
| src/llm-client.ts | 1 | import { requestUrl, Notice } from 'obsidian'; |
| src/llm-client.ts | 18 | // emitted via Obsidian Notice once at the end of a request cycle so users |
| src/llm-client.ts | 36 | // Notice may not be available in non-Obsidian contexts (tests). Console |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| src/constants.ts | 76 | * Token budget for append-to-reviewed-page (incremental short addition). |
| src/constants.ts | 96 | * Token budget for entity dedup resolution (lightweight matching prompt). |
| src/constants.ts | 138 | * Token budget for query suggest-save dedup check. |
| src/llm-client.ts | 10 | // directive. We probe at Test Connection time and cache the result on |
| src/llm-client.ts | 70 | // Returns a deduplicated string[] of field names that the caller can cache |
| src/llm-client.ts | 593 | // Maintained as a per-client cache. main.ts hydrates this from |
| src/llm-client.ts | 597 | // #137: cross-request cache of field names this baseUrl has rejected. |
| src/llm-client.ts | 865 | // was sent. Confirms the dialect cache so subsequent calls skip the probe. |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| src/core/report.ts | 46 | sourcePath?: string |
| src/core/report.ts | 50 | if (sourcePath) { |
| src/core/report.ts | 51 | const leftPath = sourcePath.replace(/\.md$/, ''); |
| src/schema/schema-manager.ts | 58 | 5. **Mentions in Source**: Verbatim quotes with source attribution — see [Mentions Format](#mentions-format) below |
| src/schema/schema-manager.ts | 77 | 6. **Mentions in Source**: Verbatim quotes with source attribution — see [Mentions Format](#mentions-format) below |
| src/schema/schema-manager.ts | 105 | "Mentions in Source" entries use academic-footnote style with source attribution. The format is: |
| src/schema/schema-manager.ts | 131 | - Contradictions: Preserve both sides with attribution, add to ## Contradictions section |
| src/texts/fr.ts | 405 | lintReportSummary: "Aperçu de l'état du wiki : {total} pages au total, {aliasesMissing} pages sans alias, {duplicates} pages dupliquées, {deadLinks} liens cassés ({deadLinkFromDup} impliquent des doublons), {orphans} pag |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| src/main.ts | 118 | // Delayed evaluation: this closure captures autoMaintainManager by reference, |
| src/wiki/query-engine.ts | 292 | // LLM evaluation failed, skip suggestion |
| src/wiki/wiki-engine.ts | 1080 | // Use minute-precision timestamp so multiple entries on the same day are distinguishable. |
| src/wiki/lint/controller.ts | 444 | // seconds for the user-facing summary; sub-second precision is noise here. |
| src/wiki/prompts/conversation.ts | 4 | evaluateConversationValue: `You are a Wiki knowledge evaluation assistant. Determine whether the following conversation contains substantive knowledge worth saving to the Wiki. |
| src/wiki/prompts/conversation.ts | 9 | Evaluation Criteria: |
| src/wiki/prompts/ingestion.ts | 74 | - other: observable, instantiable concrete things (a specific dataset, benchmark, physical instrument) that do not fit any category above. NOT for abstract ideas, paradigms, or techniques — those are concepts |
| package-lock.json | 6519 | "@opentelemetry/api": "^1.9.0", |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| src/llm-client-wrapper.ts | 8 | // fallback internally (anthropic → openai → none, see llm-client.ts |
| src/llm-client-wrapper.ts | 16 | // has its own complete dialect fallback chain, and Gemini (and other |
| src/llm-client-wrapper.ts | 20 | import { LLMClient } from './types'; |
| src/llm-client-wrapper.ts | 32 | * Returns a new LLMClient whose `createMessage` injects advanced settings |
| src/llm-client-wrapper.ts | 37 | client: LLMClient, |
| src/llm-client-wrapper.ts | 39 | ): LLMClient { |
| src/llm-client-wrapper.ts | 44 | (client as unknown as { createMessage: LLMClient['createMessage'] }).createMessage = async (params) => { |
| src/llm-client.ts | 2 | import { LLMClient } from './types'; |

## Gap

_없음_
