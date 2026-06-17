# joungminsung/OpenDocuments 코드 레벨 분석

생성일: 2026-06-17T23:31:13.944Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | A integrated platform (105) |
| stars | 80 |
| language | TypeScript |
| tags | rag, knowledge-base, document-chat, agent-knowledge, korea-signal |
| files/code/source | 447/303/211 |
| tests/ci | 91/4 |
| local path | sources/joungminsung__OpenDocuments |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 128 | 48 | packages/cli/src/index.ts:13 import { connectorCommand } from './commands/connector.js' |
| Parsing/OCR/document extraction | code | 39 | 10 | packages/server/src/bootstrap.ts:409 'opendocuments-parser-pdf', |
| Chunking/splitting | code | 62 | 29 | packages/core/src/index.ts:50 export { chunkText, semanticChunkText, type ChunkOptions, type TextChunk } from './ingest/chunker.js' |
| Embedding/vector index | code | 103 | 38 | packages/core/src/index.ts:42 export type { VectorDB, VectorDocument, VectorSearchResult, VectorSearchOpts } from './storage/vector-db.js' |
| Retrieval/search/rerank | code | 132 | 47 | packages/cli/src/index.ts:21 import { searchCommand } from './commands/search.js' |
| Wiki/graph/entity model | code | 11 | 3 | packages/core/src/index.ts:31 export { fetchCommunityPlugins, filterCommunityPlugins, type CommunityPlugin } from './plugin/community-registry.js' |
| Memory/update lifecycle | code | 112 | 53 | packages/client/src/index.ts:55 await this.request(`/documents/${id}`, { method: 'DELETE' }) |
| Provenance/citation/evidence | code | 77 | 29 | packages/cli/src/commands/ask.ts:89 log.dim(` ${chalk.cyan(src.sourcePath)}`) |
| Evaluation/observability | code | 31 | 18 | packages/core/src/index.ts:86 export { hitAtK, reciprocalRank, nDCG, evaluate, type GoldCase, type EvalSummary } from './rag/eval.js' |
| Agent/MCP/tool surface | code | 69 | 25 | packages/core/src/index.ts:19 } from './utils/ollama.js' |

## 의존성 신호

- LLM/app framework: opendocuments-model-ollama
- Vector/search store: @lancedb/lancedb
- Document parsing/OCR: cheerio, mammoth, @types/cheerio
- Persistence/database: better-sqlite3, @types/better-sqlite3

## 주요 파일 후보

### Ingestion/source intake

- `packages/cli/src/index.ts`
- `packages/client/src/index.ts`
- `packages/core/src/index.ts`
- `packages/server/src/bootstrap.ts`
- `packages/cli/src/commands/completion.ts`
- `packages/cli/src/commands/connector.ts`
- `packages/cli/src/commands/index-cmd.ts`
- `packages/cli/src/commands/init.ts`
- `packages/cli/src/commands/plugin.ts`
- `packages/core/src/auth/api-key.ts`
- `packages/core/src/connector/manager.ts`
- `packages/core/src/events/bus.ts`
- ... 6 more

### Parsing/OCR/document extraction

- `packages/server/src/bootstrap.ts`
- `packages/cli/src/commands/index-cmd.ts`
- `packages/cli/src/commands/init.ts`
- `packages/core/src/utils/file-discovery.ts`
- `packages/web/src/components/documents/UploadZone.tsx`
- `plugins/connector-web-crawler/src/index.ts`
- `plugins/parser-docx/src/index.ts`
- `plugins/parser-html/src/index.ts`
- `plugins/parser-pdf/src/index.ts`
- `plugins/parser-pptx/src/index.ts`
- `package-lock.json`
- `plugins/connector-web-crawler/package.json`
- ... 6 more

### Chunking/splitting

- `packages/core/src/index.ts`
- `packages/cli/src/commands/ask.ts`
- `packages/cli/src/commands/model.ts`
- `packages/cli/src/commands/search.ts`
- `packages/core/src/ingest/chunk-strategies.ts`
- `packages/core/src/ingest/chunker.ts`
- `packages/core/src/ingest/document-store.ts`
- `packages/core/src/ingest/pipeline.ts`
- `packages/core/src/parsers/structured.ts`
- `packages/core/src/plugin/interfaces.ts`
- `packages/core/src/rag/context-window.ts`
- `packages/core/src/rag/contextual.ts`
- ... 6 more

### Embedding/vector index

- `packages/core/src/index.ts`
- `packages/server/src/bootstrap.ts`
- `packages/cli/src/commands/backup.ts`
- `packages/cli/src/commands/doctor.ts`
- `packages/cli/src/commands/init.ts`
- `packages/cli/src/commands/model.ts`
- `packages/cli/src/commands/plugin.ts`
- `packages/cli/src/commands/search.ts`
- `packages/cli/src/utils/ollama.ts`
- `packages/core/src/config/defaults.ts`
- `packages/core/src/config/env-loader.ts`
- `packages/core/src/config/schema.ts`
- ... 6 more

### Retrieval/search/rerank

- `packages/cli/src/index.ts`
- `packages/core/src/index.ts`
- `packages/server/src/bootstrap.ts`
- `packages/cli/src/commands/completion.ts`
- `packages/cli/src/commands/init.ts`
- `packages/cli/src/commands/plugin.ts`
- `packages/cli/src/commands/search.ts`
- `packages/core/src/auth/api-key.ts`
- `packages/core/src/config/schema.ts`
- `packages/core/src/ingest/chunker.ts`
- `packages/core/src/ingest/document-store.ts`
- `packages/core/src/ingest/pipeline.ts`
- ... 6 more

### Wiki/graph/entity model

- `packages/core/src/index.ts`
- `packages/core/src/plugin/community-registry.ts`
- `packages/web/src/components/plugins/PluginMarketplace.tsx`
- `package-lock.json`
- `docs-site/package-lock.json`
- `packages/core/tests/document/managers.test.ts`
- `CODE_OF_CONDUCT.md`
- `CONTRIBUTING.md`
- `README.md`
- `docs-site/guide/architecture.md`
- `docs-site/plugins/index.md`

### Memory/update lifecycle

- `packages/client/src/index.ts`
- `packages/core/src/index.ts`
- `packages/server/src/bootstrap.ts`
- `packages/cli/src/commands/connector.ts`
- `packages/cli/src/commands/document.ts`
- `packages/cli/src/commands/index-cmd.ts`
- `packages/cli/src/commands/model.ts`
- `packages/cli/src/commands/plugin.ts`
- `packages/cli/src/commands/workspace.ts`
- `packages/cli/src/utils/bootstrap.ts`
- `packages/cli/src/utils/ollama.ts`
- `packages/core/src/config/loader.ts`
- ... 6 more

### Provenance/citation/evidence

- `packages/cli/src/commands/ask.ts`
- `packages/cli/src/commands/index-cmd.ts`
- `packages/cli/src/commands/plugin.ts`
- `packages/cli/src/commands/search.ts`
- `packages/core/src/connector/manager.ts`
- `packages/core/src/ingest/document-store.ts`
- `packages/core/src/ingest/pipeline.ts`
- `packages/core/src/plugin/interfaces.ts`
- `packages/core/src/rag/cross-workspace.ts`
- `packages/core/src/rag/engine.ts`
- `packages/core/src/rag/generator.ts`
- `packages/server/src/mcp/server.ts`
- ... 6 more

### Evaluation/observability

- `packages/core/src/index.ts`
- `packages/core/src/config/defaults.ts`
- `packages/core/src/config/env-loader.ts`
- `packages/core/src/config/schema.ts`
- `packages/core/src/ingest/document-store.ts`
- `packages/core/src/ingest/pipeline.ts`
- `packages/core/src/plugin/interfaces.ts`
- `packages/core/src/rag/cross-lingual.ts`
- `packages/core/src/rag/eval.ts`
- `packages/core/src/rag/propositions.ts`
- `packages/core/src/security/redactor.ts`
- `packages/core/src/telemetry/collector.ts`
- ... 6 more

### Agent/MCP/tool surface

- `packages/core/src/index.ts`
- `packages/server/src/bootstrap.ts`
- `packages/server/src/index.ts`
- `packages/cli/src/commands/doctor.ts`
- `packages/cli/src/commands/init.ts`
- `packages/cli/src/commands/model.ts`
- `packages/cli/src/commands/start.ts`
- `packages/cli/src/utils/ollama.ts`
- `packages/core/src/auth/oauth.ts`
- `packages/core/src/config/defaults.ts`
- `packages/core/src/config/env-loader.ts`
- `packages/core/src/config/loader.ts`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| packages/cli/src/index.ts | 13 | import { connectorCommand } from './commands/connector.js' |
| packages/client/src/index.ts | 47 | const res = await fetch(`${this.baseUrl}/api/v1/documents/upload`, { |
| packages/client/src/index.ts | 50 | if (!res.ok) throw new Error('Upload failed') |
| packages/core/src/index.ts | 50 | export { chunkText, semanticChunkText, type ChunkOptions, type TextChunk } from './ingest/chunker.js' |
| packages/core/src/index.ts | 51 | export { selectChunkStrategy, dispatchChunk, type ChunkStrategy, type ChunkDispatchContext } from './ingest/chunk-strategies.js' |
| packages/core/src/index.ts | 52 | export { MiddlewareRunner } from './ingest/middleware.js' |
| packages/core/src/index.ts | 53 | export { DocumentStore, type CreateDocumentInput, type StoredChunk, type SearchResult } from './ingest/document-store.js' |
| packages/core/src/index.ts | 55 | export { IngestPipeline, type IngestInput, type IngestResult, type IngestPipelineOptions } from './ingest/pipeline.js' |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| packages/server/src/bootstrap.ts | 409 | 'opendocuments-parser-pdf', |
| packages/server/src/bootstrap.ts | 410 | 'opendocuments-parser-docx', |
| packages/server/src/bootstrap.ts | 415 | 'opendocuments-parser-pptx', |
| packages/cli/src/commands/index-cmd.ts | 60 | new Set(['.md', '.mdx', '.txt', '.pdf', '.docx', '.xlsx', '.html', '.ipynb', '.eml']), |
| packages/cli/src/commands/init.ts | 298 | { name: `Enterprise ${chalk.dim('-- Google Drive, Notion, Confluence, PDF, DOCX')}`, value: 'enterprise' }, |
| packages/cli/src/commands/init.ts | 488 | enterprise: ['@opendocuments/parser-pdf', '@opendocuments/parser-docx', '@opendocuments/parser-xlsx', '@opendocuments/connector-gdrive', '@opendocuments/connector-notion', '@opendocuments/connector-confluence'], |
| packages/cli/src/commands/init.ts | 489 | all: ['@opendocuments/parser-pdf', '@opendocuments/parser-docx', '@opendocuments/parser-xlsx', '@opendocuments/parser-html', '@opendocuments/parser-jupyter', '@opendocuments/parser-email', '@opendocuments/parser-code', ' |
| packages/core/src/utils/file-discovery.ts | 8 | '.pdf', '.docx', '.pptx', // document parsers |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| packages/core/src/index.ts | 50 | export { chunkText, semanticChunkText, type ChunkOptions, type TextChunk } from './ingest/chunker.js' |
| packages/core/src/index.ts | 51 | export { selectChunkStrategy, dispatchChunk, type ChunkStrategy, type ChunkDispatchContext } from './ingest/chunk-strategies.js' |
| packages/core/src/index.ts | 93 | export { ChunkRelationManager, type ChunkRelation, type RelationType } from './document/chunk-relations.js' |
| packages/cli/src/commands/ask.ts | 18 | for await (const chunk of process.stdin) chunks.push(chunk) |
| packages/cli/src/commands/ask.ts | 55 | if (event.type === 'chunk') process.stdout.write(event.data as string) |
| packages/cli/src/commands/ask.ts | 82 | if (event.type === 'chunk') { |
| packages/cli/src/commands/model.ts | 352 | for await (const chunk of llm.generate(opts.prompt, { maxTokens: 64, temperature: 0.1 })) { |
| packages/cli/src/commands/model.ts | 353 | output += chunk |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| packages/core/src/index.ts | 42 | export type { VectorDB, VectorDocument, VectorSearchResult, VectorSearchOpts } from './storage/vector-db.js' |
| packages/core/src/index.ts | 43 | export { createLanceDB } from './storage/lancedb.js' |
| packages/server/src/bootstrap.ts | 76 | name: '@opendocuments/stub-embedder', |
| packages/server/src/bootstrap.ts | 80 | capabilities: { embedding: true }, |
| packages/server/src/bootstrap.ts | 84 | return { healthy: false, message: 'Stub embedder -- no real model configured. Search will not work.' } |
| packages/server/src/bootstrap.ts | 116 | const embedder = createStubEmbedder(dimensions) |
| packages/server/src/bootstrap.ts | 118 | return { embedder, llm } |
| packages/server/src/bootstrap.ts | 183 | ): Promise<{ embedder: ModelPlugin; llm: ModelPlugin }> { |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| packages/cli/src/index.ts | 21 | import { searchCommand } from './commands/search.js' |
| packages/core/src/index.ts | 67 | export { Retriever, type RetrieveOptions } from './rag/retriever.js' |
| packages/core/src/index.ts | 74 | export { rerankResults } from './rag/reranker.js' |
| packages/server/src/bootstrap.ts | 84 | return { healthy: false, message: 'Stub embedder -- no real model configured. Search will not work.' } |
| packages/server/src/bootstrap.ts | 467 | if (usingStubEmbedder) log.fail(' Embedding: using zero-vector stubs (search will not work)') |
| packages/server/src/bootstrap.ts | 600 | // Load web search provider if Tavily API key is configured |
| packages/server/src/bootstrap.ts | 605 | const wsModuleName = '@opendocuments/connector-web-search' |
| packages/server/src/bootstrap.ts | 616 | log.ok('Web search provider (Tavily) loaded') |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| packages/core/src/index.ts | 31 | export { fetchCommunityPlugins, filterCommunityPlugins, type CommunityPlugin } from './plugin/community-registry.js' |
| packages/core/src/index.ts | 93 | export { ChunkRelationManager, type ChunkRelation, type RelationType } from './document/chunk-relations.js' |
| packages/core/src/plugin/community-registry.ts | 4 | 'https://raw.githubusercontent.com/joungminsung/OpenDocuments/main/community-plugins.json' |
| packages/core/src/plugin/community-registry.ts | 8 | * A community-contributed plugin listed in the GitHub-hosted registry. |
| packages/core/src/plugin/community-registry.ts | 23 | * Fetch the community plugin listing from GitHub. |
| packages/core/src/plugin/community-registry.ts | 43 | throw new Error('Community plugin registry is not an array') |
| packages/core/src/plugin/community-registry.ts | 55 | * Filter community plugins by an optional text query and/or type. |
| packages/web/src/components/plugins/PluginMarketplace.tsx | 101 | Search npm for community plugins. Packages starting with <span className="font-mono">opendocuments-</span> or <span className="font-mono">@opendocuments/</span> can be installed directly. |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| packages/client/src/index.ts | 55 | await this.request(`/documents/${id}`, { method: 'DELETE' }) |
| packages/core/src/index.ts | 77 | export { RAGCache, createQueryCache, createEmbeddingCache, createWebSearchCache } from './rag/cache.js' |
| packages/server/src/bootstrap.ts | 653 | // 16. Start auto-purge scheduler (hard-delete soft-deleted records older than 30 days) |
| packages/server/src/bootstrap.ts | 660 | // Hard delete documents that have been soft-deleted for 30+ days |
| packages/server/src/bootstrap.ts | 669 | dbRef.run('DELETE FROM conversations WHERE deleted_at IS NOT NULL AND deleted_at < ?', [thirtyDaysAgo]) |
| packages/cli/src/commands/connector.ts | 22 | const syncInfo = c.lastSyncedAt ? `last sync: ${c.lastSyncedAt}` : 'never synced' |
| packages/cli/src/commands/connector.ts | 30 | cmd.command('sync [name]') |
| packages/cli/src/commands/connector.ts | 31 | .description('Sync a connector (or all)') |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| packages/cli/src/commands/ask.ts | 89 | log.dim(` ${chalk.cyan(src.sourcePath)}`) |
| packages/cli/src/commands/index-cmd.ts | 39 | const existing = docs.find(d => d.source_path === file) |
| packages/cli/src/commands/index-cmd.ts | 48 | sourcePath: file, fileType: extname(file), |
| packages/cli/src/commands/index-cmd.ts | 69 | sourcePath: change.path, fileType: extname(change.path), |
| packages/cli/src/commands/plugin.ts | 129 | return { sourceId: ref.sourceId, title: ref.sourcePath, content: '' } |
| packages/cli/src/commands/search.ts | 25 | console.log(chalk.cyan(` ${i + 1}.`), chalk.dim(`[${(r.score * 100).toFixed(0)}%]`), chalk.white(r.sourcePath)) |
| packages/core/src/connector/manager.ts | 71 | this.eventBus.emit('document:discovered', { documentId: discovered.sourceId, source: plugin.name }) |
| packages/core/src/connector/manager.ts | 75 | const existing = this.store.getDocumentBySourcePath(discovered.sourcePath) |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| packages/core/src/index.ts | 86 | export { hitAtK, reciprocalRank, nDCG, evaluate, type GoldCase, type EvalSummary } from './rag/eval.js' |
| packages/core/src/index.ts | 102 | export { TelemetryCollector, type TelemetryEvent } from './telemetry/collector.js' |
| packages/core/src/config/defaults.ts | 23 | telemetry: { enabled: false }, |
| packages/core/src/config/env-loader.ts | 183 | // ── Telemetry ──────────────────────────────────────────────────────────── |
| packages/core/src/config/env-loader.ts | 185 | config.telemetry = { enabled: env.OPENDOCUMENTS_TELEMETRY_ENABLED === 'true' } |
| packages/core/src/config/schema.ts | 79 | telemetry: z.object({ |
| packages/core/src/ingest/document-store.ts | 37 | * recall on question-style queries and paraphrased facts. |
| packages/core/src/ingest/document-store.ts | 54 | * Exposed here for debugging / evaluation tooling. |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| packages/core/src/index.ts | 19 | } from './utils/ollama.js' |
| packages/server/src/bootstrap.ts | 51 | ollama: 'opendocuments-model-ollama', |
| packages/server/src/bootstrap.ts | 52 | openai: 'opendocuments-model-openai', |
| packages/server/src/bootstrap.ts | 53 | anthropic: 'opendocuments-model-anthropic', |
| packages/server/src/bootstrap.ts | 58 | 'openai-compatible': 'opendocuments-model-openai-compatible', |
| packages/server/src/bootstrap.ts | 62 | ollama: 1024, |
| packages/server/src/bootstrap.ts | 63 | openai: 1536, |
| packages/server/src/bootstrap.ts | 107 | yield ' 1. Install Ollama: https://ollama.com\n' |

## Gap

_없음_
