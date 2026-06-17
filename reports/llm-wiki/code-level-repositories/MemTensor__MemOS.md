# MemTensor/MemOS 코드 레벨 분석

생성일: 2026-06-17T23:31:51.317Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | A integrated platform (108) |
| stars | 9913 |
| language | TypeScript |
| tags | rag, agent-knowledge, korea-signal |
| files/code/source | 1734/1365/973 |
| tests/ci | 120/10 |
| local path | sources/MemTensor__MemOS |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 63 | 32 | apps/memos-local-openclaw/index.ts:19 import { IngestWorker } from "./src/ingest/worker"; |
| Parsing/OCR/document extraction | code | 45 | 13 | apps/MemOS-Cloud-OpenClaw-Plugin/index.js:6 extractText, |
| Chunking/splitting | code | 180 | 111 | apps/memos-local-openclaw/index.ts:36 /** Remove near-duplicate hits based on summary word overlap (>70%). Keeps first (highest-scored) hit. */ |
| Embedding/vector index | code | 491 | 239 | apps/memos-local-openclaw/src/embedding/index.ts:10 export class Embedder { |
| Retrieval/search/rerank | code | 589 | 316 | apps/memos-local-plugin/core/pipeline/retrieval-repos.ts:3 * `RetrievalRepos` surface the retrieval pipeline consumes. |
| Wiki/graph/entity model | code | 129 | 79 | apps/memos-local-openclaw/index.ts:793 let relation: "before" \| "current" \| "after" = "before"; |
| Memory/update lifecycle | code | 911 | 497 | apps/MemOS-Cloud-OpenClaw-Plugin/index.js:289 memory: memoryCandidates, |
| Provenance/citation/evidence | code | 126 | 75 | apps/memos-local-openclaw/index.ts:88 lines.push("Citations are disabled, so avoid mentioning internal memory ids unless the user asks."); |
| Evaluation/observability | code | 263 | 165 | apps/MemOS-Cloud-OpenClaw-Plugin/index.js:369 throw new Error("invalid JSON output from recall filter model"); |
| Agent/MCP/tool surface | code | 631 | 310 | apps/MemOS-Cloud-OpenClaw-Plugin/index.js:445 log.info?.(`[memos-cloud] Multi-agent mode enabled. Allowed agents: [${cfg.allowedAgents.join(", ")}]`); |

## 의존성 신호

- LLM/app framework: @huggingface/transformers
- Document parsing/OCR: markitdown
- Persistence/database: better-sqlite3, @types/better-sqlite3, PGH, PGH003

## 주요 파일 후보

### Ingestion/source intake

- `apps/memos-local-openclaw/index.ts`
- `apps/memos-local-openclaw/src/index.ts`
- `packages/adapter-base/src/index.ts`
- `packages/memos-core/src/index.ts`
- `src/memos/api/product_models.py`
- `src/memos/mem_reader/multi_modal_struct.py`
- `src/memos/memos_tools/dinding_report_bot.py`
- `apps/memos-local-openclaw/src/embedding/index.ts`
- `apps/memos-local-openclaw/src/ingest/task-processor.ts`
- `apps/memos-local-openclaw/src/ingest/worker.ts`
- `apps/memos-local-openclaw/src/recall/engine.ts`
- `apps/memos-local-openclaw/src/storage/sqlite.ts`
- ... 6 more

### Parsing/OCR/document extraction

- `apps/MemOS-Cloud-OpenClaw-Plugin/index.js`
- `src/memos/configs/parser.py`
- `src/memos/mem_os/core.py`
- `src/memos/mem_reader/memory.py`
- `src/memos/mem_reader/strategy_struct.py`
- `src/memos/parsers/factory.py`
- `src/memos/parsers/markitdown.py`
- `src/memos/templates/mem_feedback_prompts.py`
- `src/memos/templates/skill_mem_prompt.py`
- `src/memos/mem_reader/read_multi_modal/utils.py`
- `apps/memos-local-plugin/core/llm/prompts/retrieval-filter.ts`
- `src/memos/memories/textual/prefer_text_memory/spliter.py`
- ... 6 more

### Chunking/splitting

- `apps/memos-local-openclaw/index.ts`
- `apps/memos-local-openclaw/src/types.ts`
- `apps/memos-local-plugin/bridge/stdio.ts`
- `packages/memos-core/src/types.ts`
- `src/memos/api/config.py`
- `src/memos/chunkers/base.py`
- `src/memos/chunkers/charactertext_chunker.py`
- `src/memos/chunkers/factory.py`
- `src/memos/chunkers/markdown_chunker.py`
- `src/memos/chunkers/sentence_chunker.py`
- `src/memos/chunkers/simple_chunker.py`
- `src/memos/configs/chunker.py`
- ... 6 more

### Embedding/vector index

- `apps/memos-local-openclaw/src/embedding/index.ts`
- `apps/memos-local-openclaw/src/embedding/local.ts`
- `apps/memos-local-plugin/core/embedding/cache.ts`
- `apps/memos-local-plugin/core/embedding/embedder.ts`
- `apps/memos-local-plugin/core/embedding/index.ts`
- `apps/memos-local-plugin/core/embedding/normalize.ts`
- `apps/memos-local-plugin/core/embedding/retry-worker.ts`
- `apps/memos-local-plugin/core/embedding/types.ts`
- `apps/memos-local-plugin/server/routes/embeddings.ts`
- `packages/memos-core/src/embedding/index.ts`
- `packages/memos-core/src/embedding/local.ts`
- `apps/memos-local-openclaw/src/embedding/providers/cohere.ts`
- ... 6 more

### Retrieval/search/rerank

- `apps/memos-local-plugin/core/pipeline/retrieval-repos.ts`
- `apps/memos-local-plugin/core/retrieval/decision-guidance.ts`
- `apps/memos-local-plugin/core/retrieval/events.ts`
- `apps/memos-local-plugin/core/retrieval/index.ts`
- `apps/memos-local-plugin/core/retrieval/injector.ts`
- `apps/memos-local-plugin/core/retrieval/llm-filter.ts`
- `apps/memos-local-plugin/core/retrieval/query-builder.ts`
- `apps/memos-local-plugin/core/retrieval/ranker.ts`
- `apps/memos-local-plugin/core/retrieval/retrieve.ts`
- `apps/memos-local-plugin/core/retrieval/tier1-skill.ts`
- `apps/memos-local-plugin/core/retrieval/tier2-experience.ts`
- `apps/memos-local-plugin/core/retrieval/tier2-trace.ts`
- ... 6 more

### Wiki/graph/entity model

- `apps/memos-local-openclaw/index.ts`
- `apps/memos-local-openclaw/scripts/mock-skills.ts`
- `apps/memos-local-openclaw/src/types.ts`
- `packages/memos-core/src/types.ts`
- `src/memos/api/config.py`
- `src/memos/api/mcp_serve.py`
- `src/memos/configs/graph_db.py`
- `src/memos/dream/plugin.py`
- `src/memos/dream/types.py`
- `src/memos/graph_dbs/factory.py`
- `src/memos/graph_dbs/neo4j_community.py`
- `src/memos/graph_dbs/neo4j.py`
- ... 6 more

### Memory/update lifecycle

- `apps/MemOS-Cloud-OpenClaw-Plugin/index.js`
- `apps/memos-local-openclaw/index.ts`
- `apps/memos-local-openclaw/install.ps1`
- `apps/memos-local-openclaw/install.sh`
- `apps/memos-local-plugin/install.ps1`
- `apps/memos-local-plugin/install.sh`
- `src/memos/hello_world.py`
- `apps/MemOS-Cloud-OpenClaw-Plugin/scripts/sync-version.js`
- `apps/memos-local-openclaw/scripts/mock-skills.ts`
- `apps/memos-local-openclaw/scripts/postinstall.cjs`
- `apps/memos-local-openclaw/scripts/refresh-skill.ts`
- `apps/memos-local-openclaw/scripts/refresh-summaries.ts`
- ... 6 more

### Provenance/citation/evidence

- `apps/memos-local-openclaw/index.ts`
- `apps/memos-local-plugin/agent-contract/dto.ts`
- `apps/memos-local-plugin/core/types.ts`
- `src/memos/api/product_models.py`
- `src/memos/configs/graph_db.py`
- `src/memos/graph_dbs/base.py`
- `src/memos/graph_dbs/neo4j.py`
- `src/memos/graph_dbs/polardb.py`
- `src/memos/graph_dbs/postgres.py`
- `src/memos/templates/advanced_search_prompts.py`
- `src/memos/templates/cloud_service_prompt.py`
- `src/memos/templates/mem_reader_prompts.py`
- ... 6 more

### Evaluation/observability

- `apps/MemOS-Cloud-OpenClaw-Plugin/index.js`
- `apps/memos-local-openclaw/index.ts`
- `apps/memos-local-openclaw/install.ps1`
- `apps/memos-local-openclaw/install.sh`
- `src/memos/utils.py`
- `apps/memos-local-openclaw/scripts/generate-telemetry-credentials.cjs`
- `apps/memos-local-openclaw/scripts/mock-skills.ts`
- `apps/memos-local-openclaw/scripts/refresh-skill.ts`
- `apps/memos-local-openclaw/src/config.ts`
- `apps/memos-local-openclaw/src/index.ts`
- `apps/memos-local-openclaw/src/telemetry.ts`
- `apps/memos-local-openclaw/src/types.ts`
- ... 6 more

### Agent/MCP/tool surface

- `apps/MemOS-Cloud-OpenClaw-Plugin/index.js`
- `apps/memos-local-openclaw/index.ts`
- `apps/memos-local-plugin/install.ps1`
- `apps/memos-local-plugin/install.sh`
- `apps/memos-local-plugin/vite.config.ts`
- `src/memos/hello_world.py`
- `apps/memos-local-openclaw/scripts/refresh-summaries.ts`
- `apps/memos-local-openclaw/src/openclaw-api.ts`
- `apps/memos-local-openclaw/src/types.ts`
- `apps/memos-local-plugin/agent-contract/dto.ts`
- `apps/memos-local-plugin/agent-contract/log-record.ts`
- `apps/memos-local-plugin/agent-contract/memory-core.ts`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| apps/memos-local-openclaw/index.ts | 19 | import { IngestWorker } from "./src/ingest/worker"; |
| apps/memos-local-openclaw/index.ts | 27 | import { getHubStatus, connectToHub } from "./src/client/connector"; |
| apps/memos-local-openclaw/index.ts | 31 | import { Summarizer } from "./src/ingest/providers"; |
| apps/memos-local-openclaw/src/index.ts | 6 | import { IngestWorker } from "./ingest/worker"; |
| apps/memos-local-openclaw/src/index.ts | 17 | /** Wait for all pending ingest operations to complete. */ |
| packages/adapter-base/src/index.ts | 16 | ingest(event: MemoryEvent): Promise<void>; |
| packages/adapter-base/src/index.ts | 50 | await this.core.ingest({ |
| packages/memos-core/src/index.ts | 6 | import { IngestWorker } from "./ingest/worker"; |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| apps/MemOS-Cloud-OpenClaw-Plugin/index.js | 6 | extractText, |
| apps/MemOS-Cloud-OpenClaw-Plugin/index.js | 178 | const content = stripOpenClawInjectedPrefix(extractText(msg.content)); |
| apps/MemOS-Cloud-OpenClaw-Plugin/index.js | 183 | const content = extractText(msg.content); |
| apps/MemOS-Cloud-OpenClaw-Plugin/index.js | 196 | const content = stripOpenClawInjectedPrefix(extractText(msg.content)); |
| apps/MemOS-Cloud-OpenClaw-Plugin/index.js | 200 | const content = extractText(msg.content); |
| src/memos/configs/parser.py | 23 | "markitdown": MarkItDownParserConfig, |
| src/memos/mem_os/core.py | 245 | doc_extensions = {".txt", ".pdf", ".json", ".md", ".ppt", ".pptx"} |
| src/memos/mem_reader/memory.py | 43 | "doc_type": "", # pdf, txt, etc. |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| apps/memos-local-openclaw/index.ts | 36 | /** Remove near-duplicate hits based on summary word overlap (>70%). Keeps first (highest-scored) hit. */ |
| apps/memos-local-openclaw/index.ts | 47 | let overlap = 0; |
| apps/memos-local-openclaw/index.ts | 48 | for (const w of wordsB) { if (wordsA.has(w)) overlap++; } |
| apps/memos-local-openclaw/index.ts | 49 | return overlap / Math.min(wordsA.size, wordsB.size) > 0.7; |
| apps/memos-local-openclaw/index.ts | 458 | const chunk = store.getChunk(chunkId); |
| apps/memos-local-openclaw/index.ts | 459 | if (!chunk) { |
| apps/memos-local-openclaw/index.ts | 470 | sourceChunkId: chunk.id, |
| apps/memos-local-openclaw/index.ts | 471 | sourceAgent: chunk.owner \|\| "", |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| apps/memos-local-openclaw/src/embedding/index.ts | 10 | export class Embedder { |
| apps/memos-local-openclaw/src/embedding/index.ts | 77 | modelHealth.recordSuccess("embedding", modelInfo); |
| apps/memos-local-openclaw/src/embedding/index.ts | 80 | modelHealth.recordError("embedding", modelInfo, String(err)); |
| apps/memos-local-openclaw/src/embedding/index.ts | 82 | this.log.warn(`Embedding provider '${provider}' failed, falling back to local: ${err}`); |
| apps/memos-local-openclaw/src/embedding/index.ts | 102 | return response.embeddings; |
| apps/memos-local-openclaw/src/embedding/local.ts | 10 | log.info("Loading local embedding model (first call may download ~23MB)..."); |
| apps/memos-local-openclaw/src/embedding/local.ts | 16 | log.info("Local embedding model ready"); |
| apps/memos-local-plugin/core/embedding/cache.ts | 2 | * In-memory LRU cache for embedding vectors. |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| apps/memos-local-plugin/core/pipeline/retrieval-repos.ts | 3 | * `RetrievalRepos` surface the retrieval pipeline consumes. |
| apps/memos-local-plugin/core/pipeline/retrieval-repos.ts | 5 | * Keeping this translation in `core/pipeline/` means the retrieval module |
| apps/memos-local-plugin/core/pipeline/retrieval-repos.ts | 10 | import type { RetrievalRepos } from "../retrieval/types.js"; |
| apps/memos-local-plugin/core/pipeline/retrieval-repos.ts | 111 | // V7 §2.4.6 — expose just enough of the policies repo for retrieval |
| apps/memos-local-plugin/core/retrieval/decision-guidance.ts | 2 | * V7 §2.4.6 — collect decision guidance for the current retrieval. |
| apps/memos-local-plugin/core/retrieval/decision-guidance.ts | 22 | * beyond what the repos do. Cheap to call on every retrieval. |
| apps/memos-local-plugin/core/retrieval/events.ts | 2 | * Retrieval-scoped event bus. |
| apps/memos-local-plugin/core/retrieval/events.ts | 6 | * to "only retrieval" without type-unioning every kind in `core/`. |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| apps/memos-local-openclaw/index.ts | 793 | let relation: "before" \| "current" \| "after" = "before"; |
| apps/memos-local-openclaw/index.ts | 794 | if (chunk.id === chunkId) relation = "current"; |
| apps/memos-local-openclaw/index.ts | 795 | else if (chunk.createdAt > anchorTs) relation = "after"; |
| apps/memos-local-openclaw/index.ts | 798 | relation, |
| apps/memos-local-openclaw/index.ts | 807 | .map((e) => `[${e.relation}] ${rl(e.role)}: ${e.excerpt}`) |
| apps/memos-local-openclaw/index.ts | 917 | `- 🔧 ${rs.skill.name} (${rs.relation}, v${rs.versionAt}) — call skill_get(skillId="${rs.skill.id}") or skill_get(taskId="${taskId}") to get the full guide` |
| apps/memos-local-openclaw/index.ts | 933 | relatedSkills: relatedSkills.map(rs => ({ skillId: rs.skill.id, name: rs.skill.name, relation: rs.relation })), |
| apps/memos-local-openclaw/scripts/mock-skills.ts | 51 | relation TEXT NOT NULL DEFAULT 'generated_from', |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| apps/MemOS-Cloud-OpenClaw-Plugin/index.js | 289 | memory: memoryCandidates, |
| apps/MemOS-Cloud-OpenClaw-Plugin/index.js | 298 | const memoryIdx = normalizeIndexList(keep.memory, lists.memoryList.length); |
| apps/MemOS-Cloud-OpenClaw-Plugin/index.js | 323 | memory: ["number index"], |
| apps/MemOS-Cloud-OpenClaw-Plugin/index.js | 338 | "You are a strict memory relevance judge. Return JSON only. Keep only items directly useful for answering current user query. If unsure, do not keep.", |
| apps/MemOS-Cloud-OpenClaw-Plugin/index.js | 397 | lists.candidatePayload.memory.length > 0 \|\| |
| apps/MemOS-Cloud-OpenClaw-Plugin/index.js | 407 | `[memos-cloud] recall filter applied: memory ${lists.memoryList.length}->${filtered.memory_detail_list?.length ?? 0}, ` + |
| apps/MemOS-Cloud-OpenClaw-Plugin/index.js | 421 | description: "MemOS Cloud recall + add memory via lifecycle hooks", |
| apps/MemOS-Cloud-OpenClaw-Plugin/index.js | 422 | kind: "lifecycle", |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| apps/memos-local-openclaw/index.ts | 88 | lines.push("Citations are disabled, so avoid mentioning internal memory ids unless the user asks."); |
| apps/memos-local-plugin/agent-contract/dto.ts | 323 | * Optional evidence — trace ids and / or policy ids that justified |
| apps/memos-local-plugin/agent-contract/dto.ts | 346 | * the viewer can render entry-level evidence chips with |
| apps/memos-local-plugin/core/types.ts | 173 | /** Source episodes that contributed evidence. */ |
| apps/memos-local-plugin/core/types.ts | 226 | /** Optional evidence — trace ids or policy ids contributing to this entry. */ |
| apps/memos-local-plugin/core/types.ts | 243 | /** Episodes that contributed evidence (audit trail). */ |
| apps/memos-local-plugin/core/types.ts | 254 | * can offer "归档 / 取消归档" without deleting evidence. |
| apps/memos-local-plugin/core/types.ts | 325 | evidence: Record<string, unknown>; |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| apps/MemOS-Cloud-OpenClaw-Plugin/index.js | 369 | throw new Error("invalid JSON output from recall filter model"); |
| apps/MemOS-Cloud-OpenClaw-Plugin/index.js | 392 | log.warn?.("[memos-cloud] recall filter enabled but missing recallFilterBaseUrl/recallFilterModel; skip filter"); |
| apps/MemOS-Cloud-OpenClaw-Plugin/index.js | 407 | `[memos-cloud] recall filter applied: memory ${lists.memoryList.length}->${filtered.memory_detail_list?.length ?? 0}, ` + |
| apps/MemOS-Cloud-OpenClaw-Plugin/index.js | 413 | log.warn?.(`[memos-cloud] recall filter failed: ${String(err)}`); |
| apps/MemOS-Cloud-OpenClaw-Plugin/index.js | 421 | description: "MemOS Cloud recall + add memory via lifecycle hooks", |
| apps/MemOS-Cloud-OpenClaw-Plugin/index.js | 473 | log.info?.(`[memos-cloud] recall skipped: agent "${ctx?.agentId}" not in allowedAgents [${cfg.allowedAgents?.join(", ")}]`); |
| apps/MemOS-Cloud-OpenClaw-Plugin/index.js | 481 | warnMissingApiKey(log, "recall"); |
| apps/MemOS-Cloud-OpenClaw-Plugin/index.js | 501 | log.warn?.(`[memos-cloud] recall failed: ${String(err)}`); |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| apps/MemOS-Cloud-OpenClaw-Plugin/index.js | 445 | log.info?.(`[memos-cloud] Multi-agent mode enabled. Allowed agents: [${cfg.allowedAgents.join(", ")}]`); |
| apps/MemOS-Cloud-OpenClaw-Plugin/index.js | 450 | log.info?.(`[memos-cloud] Per-agent overrides configured for: [${overrideAgentIds.join(", ")}]`); |
| apps/MemOS-Cloud-OpenClaw-Plugin/index.js | 473 | log.info?.(`[memos-cloud] recall skipped: agent "${ctx?.agentId}" not in allowedAgents [${cfg.allowedAgents?.join(", ")}]`); |
| apps/MemOS-Cloud-OpenClaw-Plugin/index.js | 507 | log.info?.(`[memos-cloud] add skipped: agent "${ctx?.agentId}" not in allowedAgents [${cfg.allowedAgents?.join(", ")}]`); |
| apps/memos-local-openclaw/index.ts | 387 | // Current agent ID — updated by hooks, read by tools for owner isolation. |
| apps/memos-local-openclaw/index.ts | 388 | // Falls back to "main" when no hook has fired yet (single-agent setups). |
| apps/memos-local-openclaw/index.ts | 390 | const getCurrentOwner = () => `agent:${currentAgentId}`; |
| apps/memos-local-openclaw/index.ts | 433 | store.recordApiLog(toolName, { ...inputParams, type: "tool_call" }, outputText, dur, ok); |

## Gap

_없음_
