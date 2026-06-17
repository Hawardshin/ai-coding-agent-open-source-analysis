# VoltAgent/voltagent 코드 레벨 분석

생성일: 2026-06-17T23:31:52.072Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | A integrated platform (108) |
| stars | 9661 |
| language | TypeScript |
| tags | rag, agent-knowledge, korea-signal |
| files/code/source | 2811/1665/1010 |
| tests/ci | 120/7 |
| local path | sources/VoltAgent__voltagent |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 51 | 6 | packages/sdk/src/observability.ts:7 "VoltAgentObservabilitySDK has been removed. Please migrate to the eval ingestion helpers in VoltOpsRestClient.", |
| Parsing/OCR/document extraction | code | 36 | 6 | packages/core/src/agent/guardrail.ts:5 import { extractText } from "../utils/message-helpers"; |
| Chunking/splitting | code | 163 | 66 | packages/a2a-server/src/server.ts:36 function sanitizeSegment(segment: string): string { |
| Embedding/vector index | code | 177 | 54 | packages/core/src/registries/embedding-model-router-types.generated.ts:11 "text-embedding-3-large", |
| Retrieval/search/rerank | code | 341 | 93 | packages/core/src/index.ts:263 export * from "./retriever"; |
| Wiki/graph/entity model | code | 107 | 34 | packages/langfuse-exporter/src/exporter.ts:47 "entity.id", |
| Memory/update lifecycle | code | 806 | 224 | packages/a2a-server/src/server.ts:213 this.activeOperations.delete(this.makeOperationKey(agentId, taskId)); |
| Provenance/citation/evidence | code | 51 | 22 | packages/create-voltagent-app/src/types.ts:19 sourcePath: string; |
| Evaluation/observability | code | 434 | 170 | packages/ag-ui/src/voltagent-agent.ts:62 * Optional function to derive userId for VoltAgent memory/telemetry. |
| Agent/MCP/tool surface | code | 1178 | 328 | packages/a2a-server/src/index.ts:6 export * from "./adapters/agent"; |

## 의존성 신호

- LLM/app framework: @anthropic-ai/sdk, @ai-sdk/openai, @chroma-core/ollama, @chroma-core/openai
- Vector/search store: @chroma-core/default-embed, @chroma-core/ollama, @chroma-core/openai, chromadb, @lancedb/lancedb
- Persistence/database: @chat-adapter/state-redis

## 주요 파일 후보

### Ingestion/source intake

- `packages/sdk/src/observability.ts`
- `website/src/pages/pricing.tsx`
- `website/src/components/hero/index.tsx`
- `website/src/components/ops/Deployment.tsx`
- `website/src/pages/tutorial/mcp.tsx`
- `website/src/pages/voltops/rag.tsx`
- `announcements.json`
- `website/src/components/usecases/usecases.json`
- `website/src/components/mcp-list/data/ahref.json`
- `website/scripts/generate-model-docs.js`
- `examples/next-js-chatbot-starter-template/components/ai-elements/prompt-input.tsx`
- `examples/with-nextjs-resumable-stream/components/ai-elements/prompt-input.tsx`
- ... 6 more

### Parsing/OCR/document extraction

- `packages/core/src/agent/guardrail.ts`
- `packages/core/src/registries/model-provider-types.generated.ts`
- `packages/core/src/utils/message-helpers.ts`
- `packages/create-voltagent-app/src/utils/animation.ts`
- `packages/server-core/src/routes/definitions.ts`
- `website/src/pages/voltops/rag.tsx`
- `website/package-lock.json`
- `website/src/components/usecases/usecases.json`
- `packages/core/src/utils/message-helpers.spec.ts`
- `packages/core/src/agent/guardrails/defaults.spec.ts`
- `examples/with-hooks/src/index.ts`
- `examples/with-playwright/src/tools/outputTool.ts`
- ... 6 more

### Chunking/splitting

- `packages/a2a-server/src/server.ts`
- `packages/ag-ui/src/voltagent-agent.ts`
- `packages/mcp-server/src/server.ts`
- `packages/rag/src/index.ts`
- `packages/rag/src/types.ts`
- `packages/sandbox-e2b/src/index.ts`
- `packages/serverless-hono/src/routes.ts`
- `packages/core/src/agent/agent.ts`
- `packages/core/src/agent/tool-input-coercion.ts`
- `packages/core/src/retriever/voltagent-rag-retriever.ts`
- `packages/core/src/triggers/catalog.ts`
- `packages/internal/src/utils/async-iterable-stream.ts`
- ... 6 more

### Embedding/vector index

- `packages/core/src/registries/embedding-model-router-types.generated.ts`
- `packages/core/src/registries/embedding-model-router-types.ts`
- `packages/core/src/tool/routing/embedding.ts`
- `packages/core/src/memory/adapters/embedding/ai-sdk.ts`
- `packages/core/src/memory/adapters/embedding/types.ts`
- `packages/core/scripts/generate-model-provider-registry.js`
- `packages/core/src/index.ts`
- `packages/libsql/src/edge.ts`
- `packages/libsql/src/index.ts`
- `packages/libsql/src/vector-adapter-edge.ts`
- `packages/libsql/src/vector-adapter.ts`
- `packages/libsql/src/vector-core.ts`
- ... 6 more

### Retrieval/search/rerank

- `packages/core/src/index.ts`
- `packages/core/src/types.ts`
- `packages/libsql/src/vector-adapter-edge.ts`
- `packages/libsql/src/vector-adapter.ts`
- `packages/libsql/src/vector-core.ts`
- `packages/postgres/src/vector-adapter.ts`
- `packages/sdk/src/types.ts`
- `packages/server-hono/src/zod-openapi-compat.ts`
- `packages/serverless-hono/src/routes.ts`
- `packages/voltagent-memory/src/index.ts`
- `packages/core/src/agent/agent.ts`
- `packages/core/src/agent/types.ts`
- ... 6 more

### Wiki/graph/entity model

- `packages/langfuse-exporter/src/exporter.ts`
- `packages/libsql/src/observability-core.ts`
- `packages/core/src/agent/eval.ts`
- `packages/core/src/agent/guardrail.ts`
- `packages/core/src/agent/types.ts`
- `packages/core/src/logger/events.ts`
- `packages/core/src/observability/types.ts`
- `packages/core/src/voltops/types.ts`
- `packages/rag/src/chunkers/html-chunker.ts`
- `packages/server-core/src/utils/ui-templates.ts`
- `packages/server-core/src/websocket/observability-handler.ts`
- `packages/core/src/agent/open-telemetry/trace-context.ts`
- ... 6 more

### Memory/update lifecycle

- `packages/a2a-server/src/server.ts`
- `packages/ag-ui/src/voltagent-agent.ts`
- `packages/cloudflare-d1/src/index.ts`
- `packages/cloudflare-d1/src/memory-adapter.ts`
- `packages/core/src/index.ts`
- `packages/core/src/types.ts`
- `packages/core/src/voltagent.ts`
- `packages/create-voltagent-app/src/cli.ts`
- `packages/create-voltagent-app/src/project-creator.ts`
- `packages/e2e/src/message-persistence.shared.ts`
- `packages/langfuse-exporter/src/exporter.ts`
- `packages/libsql/src/edge.ts`
- ... 6 more

### Provenance/citation/evidence

- `packages/create-voltagent-app/src/types.ts`
- `packages/rag/src/types.ts`
- `packages/core/src/workflow/core.ts`
- `packages/core/src/workflow/types.ts`
- `packages/create-voltagent-app/src/utils/file-manager.ts`
- `packages/create-voltagent-app/src/utils/templates.ts`
- `packages/rag/src/chunkers/code-chunker.ts`
- `packages/rag/src/chunkers/html-chunker.ts`
- `packages/rag/src/chunkers/json-chunker.ts`
- `packages/rag/src/chunkers/latex-chunker.ts`
- `packages/rag/src/chunkers/markdown-chunker.ts`
- `packages/rag/src/chunkers/neural-chunker.ts`
- ... 6 more

### Evaluation/observability

- `packages/ag-ui/src/voltagent-agent.ts`
- `packages/cli/src/index.ts`
- `packages/core/src/index.ts`
- `packages/core/src/types.ts`
- `packages/core/src/voltagent.ts`
- `packages/langfuse-exporter/src/exporter.ts`
- `packages/langfuse-exporter/src/processor.ts`
- `packages/libsql/src/edge.ts`
- `packages/libsql/src/index.ts`
- `packages/libsql/src/observability-adapter-edge.ts`
- `packages/libsql/src/observability-adapter.ts`
- `packages/libsql/src/observability-core.ts`
- ... 6 more

### Agent/MCP/tool surface

- `packages/a2a-server/src/index.ts`
- `packages/a2a-server/src/server.ts`
- `packages/a2a-server/src/types.ts`
- `packages/ag-ui/src/copilotkit.ts`
- `packages/ag-ui/src/index.ts`
- `packages/ag-ui/src/voltagent-agent.ts`
- `packages/cli/src/index.ts`
- `packages/core/src/index.ts`
- `packages/core/src/types.ts`
- `packages/core/src/voltagent.ts`
- `packages/create-voltagent-app/src/cli.ts`
- `packages/create-voltagent-app/src/project-creator.ts`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| packages/sdk/src/observability.ts | 7 | "VoltAgentObservabilitySDK has been removed. Please migrate to the eval ingestion helpers in VoltOpsRestClient.", |
| website/src/pages/pricing.tsx | 245 | name: "Files per Upload", |
| website/src/pages/pricing.tsx | 374 | {/* Plus Connector */} |
| website/src/components/hero/index.tsx | 215 | {/* Two boxes with connector */} |
| website/src/components/hero/index.tsx | 246 | {/* Plus Connector */} |
| website/src/components/ops/Deployment.tsx | 202 | message: "Upload complete. Verifying deployment...", |
| website/src/components/ops/Deployment.tsx | 250 | { time: 18000, action: "showLog", logIndex: 16 }, // Upload complete... |
| website/src/pages/tutorial/mcp.tsx | 124 | universal connector for any external system. |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| packages/core/src/agent/guardrail.ts | 5 | import { extractText } from "../utils/message-helpers"; |
| packages/core/src/agent/guardrail.ts | 222 | return extractText(message.content as any); |
| packages/core/src/registries/model-provider-types.generated.ts | 112 | "qwen-vl-ocr", |
| packages/core/src/registries/model-provider-types.generated.ts | 170 | "qwen-vl-ocr", |
| packages/core/src/registries/model-provider-types.generated.ts | 540 | "rednote-hilab/dots.ocr", |
| packages/core/src/registries/model-provider-types.generated.ts | 1208 | "deepseek/deepseek-ocr", |
| packages/core/src/registries/model-provider-types.generated.ts | 1332 | "nvidia/nemoretriever-ocr-v1", |
| packages/core/src/utils/message-helpers.ts | 100 | * extractText(content); // "Hello" |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| packages/a2a-server/src/server.ts | 36 | function sanitizeSegment(segment: string): string { |
| packages/a2a-server/src/server.ts | 37 | return encodeURIComponent(segment.replace(/^\/+\|\/+$/g, "")); |
| packages/a2a-server/src/server.ts | 428 | for await (const chunk of streamResult.textStream) { |
| packages/a2a-server/src/server.ts | 429 | if (!chunk) { |
| packages/a2a-server/src/server.ts | 433 | aggregatedText += chunk; |
| packages/ag-ui/src/voltagent-agent.ts | 481 | // Ignore explicit start; we'll synthesize start when first chunk/end arrives to avoid duplicates |
| packages/mcp-server/src/server.ts | 685 | for await (const chunk of req) { |
| packages/mcp-server/src/server.ts | 686 | if (typeof chunk === "string") { |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| packages/core/src/registries/embedding-model-router-types.generated.ts | 11 | "text-embedding-3-large", |
| packages/core/src/registries/embedding-model-router-types.generated.ts | 12 | "text-embedding-3-small", |
| packages/core/src/registries/embedding-model-router-types.generated.ts | 13 | "text-embedding-ada-002", |
| packages/core/src/registries/embedding-model-router-types.generated.ts | 19 | "text-embedding-3-large", |
| packages/core/src/registries/embedding-model-router-types.generated.ts | 20 | "text-embedding-3-small", |
| packages/core/src/registries/embedding-model-router-types.generated.ts | 21 | "text-embedding-ada-002", |
| packages/core/src/registries/embedding-model-router-types.generated.ts | 24 | "workers-ai/@cf/pfnet/plamo-embedding-1b", |
| packages/core/src/registries/embedding-model-router-types.generated.ts | 25 | "workers-ai/@cf/qwen/qwen3-embedding-0.6b", |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| packages/core/src/index.ts | 263 | export * from "./retriever"; |
| packages/core/src/types.ts | 234 | * Global tool routing defaults (search + call workflow). |
| packages/libsql/src/vector-adapter-edge.ts | 3 | * Provides vector storage and similarity search using remote Turso database |
| packages/libsql/src/vector-adapter-edge.ts | 35 | * Production-ready vector storage with similarity search |
| packages/libsql/src/vector-adapter.ts | 3 | * Provides vector storage and similarity search using LibSQL/Turso database |
| packages/libsql/src/vector-adapter.ts | 36 | * Production-ready vector storage with similarity search |
| packages/libsql/src/vector-core.ts | 269 | async search(queryVector: number[], options?: VectorSearchOptions): Promise<SearchResult[]> { |
| packages/libsql/src/vector-core.ts | 292 | "search vectors", |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| packages/langfuse-exporter/src/exporter.ts | 47 | "entity.id", |
| packages/langfuse-exporter/src/exporter.ts | 48 | "entity.type", |
| packages/langfuse-exporter/src/exporter.ts | 49 | "entity.name", |
| packages/langfuse-exporter/src/exporter.ts | 194 | if (traceName === undefined && attrs["entity.name"] != null) |
| packages/langfuse-exporter/src/exporter.ts | 195 | traceName = String(attrs["entity.name"]); |
| packages/libsql/src/observability-core.ts | 211 | const entityId = (span.attributes?.["entity.id"] as string) \|\| null; |
| packages/libsql/src/observability-core.ts | 212 | const entityType = (span.attributes?.["entity.type"] as string) \|\| null; |
| packages/core/src/agent/eval.ts | 138 | "entity.id": host.id, |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| packages/a2a-server/src/server.ts | 213 | this.activeOperations.delete(this.makeOperationKey(agentId, taskId)); |
| packages/a2a-server/src/server.ts | 523 | cancellationSet?.delete(record.id); |
| packages/a2a-server/src/server.ts | 569 | cancellationSet?.delete(record.id); |
| packages/ag-ui/src/voltagent-agent.ts | 62 | * Optional function to derive userId for VoltAgent memory/telemetry. |
| packages/ag-ui/src/voltagent-agent.ts | 237 | const memory = this.agent.getMemory?.(); |
| packages/ag-ui/src/voltagent-agent.ts | 238 | if (!memory) { |
| packages/ag-ui/src/voltagent-agent.ts | 243 | await memory.updateWorkingMemory({ |
| packages/ag-ui/src/voltagent-agent.ts | 248 | // Non-fatal: working memory might be disabled or misconfigured |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| packages/create-voltagent-app/src/types.ts | 19 | sourcePath: string; |
| packages/rag/src/types.ts | 14 | sourceId?: string; |
| packages/core/src/workflow/core.ts | 1113 | // Resolve trace lineage for resume/replay links |
| packages/core/src/workflow/types.ts | 339 | * Internal replay lineage context for deterministic time-travel executions |
| packages/core/src/workflow/types.ts | 419 | * Source execution ID used for replay lineage |
| packages/create-voltagent-app/src/utils/file-manager.ts | 28 | const sourceContent = await fileManager.readFile(templateFile.sourcePath); |
| packages/create-voltagent-app/src/utils/file-manager.ts | 40 | console.error(`Error processing template file ${templateFile.sourcePath}: ${error}`); |
| packages/create-voltagent-app/src/utils/templates.ts | 12 | const sourcePath = path.resolve(__dirname, "..", "..", "templates"); |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| packages/ag-ui/src/voltagent-agent.ts | 62 | * Optional function to derive userId for VoltAgent memory/telemetry. |
| packages/cli/src/index.ts | 7 | import { registerEvalCommand } from "./commands/eval"; |
| packages/core/src/index.ts | 100 | // Observability exports |
| packages/core/src/index.ts | 101 | export { VoltAgentObservability } from "./observability"; |
| packages/core/src/index.ts | 102 | export { WebSocketSpanProcessor, WebSocketEventEmitter } from "./observability"; |
| packages/core/src/index.ts | 103 | export { LocalStorageSpanProcessor } from "./observability"; |
| packages/core/src/index.ts | 104 | export { InMemoryStorageAdapter as InMemoryObservabilityAdapter } from "./observability"; |
| packages/core/src/index.ts | 105 | export { WebSocketLogProcessor } from "./observability"; |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| packages/a2a-server/src/index.ts | 6 | export * from "./adapters/agent"; |
| packages/a2a-server/src/server.ts | 2 | import { type Agent, convertUsage } from "@voltagent/core"; |
| packages/a2a-server/src/server.ts | 3 | import { buildAgentCard } from "./adapters/agent"; |
| packages/a2a-server/src/server.ts | 62 | private readonly configuredAgents = new Map<string, Agent>(); |
| packages/a2a-server/src/server.ts | 63 | private readonly agentFilter: A2AFilterFunction<Agent> \| undefined; |
| packages/a2a-server/src/server.ts | 69 | if (config.agents) { |
| packages/a2a-server/src/server.ts | 70 | for (const [key, agent] of Object.entries(config.agents)) { |
| packages/a2a-server/src/server.ts | 71 | const identifier = agent.id?.trim() \|\| key; |

## Gap

_없음_
