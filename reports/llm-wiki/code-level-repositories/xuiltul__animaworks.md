# xuiltul/animaworks 코드 레벨 분석

생성일: 2026-06-17T23:31:57.779Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | graph-rag/kg |
| maturity | A integrated platform (108) |
| stars | 240 |
| language | Python |
| tags | rag, agent-knowledge, korea-signal |
| files/code/source | 2694/1660/701 |
| tests/ci | 120/10 |
| local path | sources/xuiltul__animaworks |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 47 | 24 | core/_anima_messaging.py:1141 # ── Neo4j realtime ingest ──────────────────────────────── |
| Parsing/OCR/document extraction | code | 45 | 7 | core/execution/agent_sdk.py:18 Implementation is split across submodules for readability: |
| Chunking/splitting | code | 162 | 62 | core/_agent_cycle.py:50 """Accumulate chunk usage into the streaming accumulator dict.""" |
| Embedding/vector index | code | 223 | 65 | core/_agent_executor.py:280 Used by build_system_prompt for Tier 3 vector-based skill matching. |
| Retrieval/search/rerank | code | 461 | 158 | core/memory/retrieval/__init__.py:4 """Backend-agnostic memory retrieval pipeline (RRF, rerank, confidence gate).""" |
| Wiki/graph/entity model | code | 156 | 61 | core/config/schemas.py:231 description="Enable Legacy NetworkX graph nodes/edges for facts and entities.", |
| Memory/update lifecycle | code | 1195 | 382 | core/_agent_cycle.py:28 from core.memory.shortterm import SessionState, ShortTermMemory |
| Provenance/citation/evidence | code | 138 | 40 | core/schemas.py:139 # Provenance tracking (Phase 2) |
| Evaluation/observability | code | 135 | 38 | core/_agent_priming.py:27 """Mixin: priming (auto-recall), context fitting, pre-flight size check.""" |
| Agent/MCP/tool surface | code | 606 | 166 | core/_agent_cycle.py:9 Extracted from ``core.agent.AgentCore`` as a Mixin. All ``self`` references |

## 의존성 신호

- LLM/app framework: anthropic, openai-codex, openai-codex-cli-bin, litellm, sentence-transformers
- Vector/search store: chromadb
- Graph/KG store: networkx, neo4j
- Persistence/database: redis

## 주요 파일 후보

### Ingestion/source intake

- `core/_anima_messaging.py`
- `core/image_artifacts.py`
- `server/slack_avatar_upload.py`
- `core/config/schemas.py`
- `core/lifecycle/system_consolidation.py`
- `core/memory/consolidation.py`
- `core/memory/fact_invalidation.py`
- `core/skills/guard.py`
- `server/routes/animas.py`
- `server/routes/assets.py`
- `server/routes/system.py`
- `core/memory/backend/base.py`
- ... 6 more

### Parsing/OCR/document extraction

- `core/execution/agent_sdk.py`
- `core/skills/guard.py`
- `core/tooling/handler_files.py`
- `core/tools/_slack_markdown.py`
- `core/tools/gmail.py`
- `core/tools/web_search.py`
- `core/i18n/strings/misc.py`
- `tests/evaluation/test_visualization.py`
- `tests/unit/test_skill_router.py`
- `tests/evaluation/framework/visualization.py`
- `tests/unit/frontend/test_responsive_design.py`
- `tests/evaluation/scripts/demo_analysis_visualization.py`
- ... 6 more

### Chunking/splitting

- `core/_agent_cycle.py`
- `core/_anima_heartbeat.py`
- `core/_anima_inbox.py`
- `core/_anima_lifecycle.py`
- `core/_anima_messaging.py`
- `core/discord_webhooks.py`
- `core/config/schemas.py`
- `core/execution/_litellm_streaming.py`
- `core/execution/_sdk_security.py`
- `core/execution/_streaming.py`
- `core/execution/_tool_summary.py`
- `core/execution/base.py`
- ... 6 more

### Embedding/vector index

- `core/_agent_executor.py`
- `core/gpu.py`
- `server/app.py`
- `core/config/schemas.py`
- `core/execution/codex_sdk.py`
- `core/memory/consolidation.py`
- `core/memory/contradiction.py`
- `core/memory/distillation.py`
- `core/memory/entity_index.py`
- `core/memory/fact_invalidation.py`
- `core/memory/forgetting.py`
- `core/memory/housekeeping.py`
- ... 6 more

### Retrieval/search/rerank

- `core/memory/retrieval/__init__.py`
- `core/memory/retrieval/access_boost.py`
- `core/memory/retrieval/confidence_gate.py`
- `core/memory/retrieval/entity.py`
- `core/memory/retrieval/pipeline.py`
- `core/memory/retrieval/query_expansion.py`
- `core/memory/retrieval/reranker.py`
- `core/memory/retrieval/rrf.py`
- `core/memory/retrieval/temporal.py`
- `core/memory/retrieval/types.py`
- `core/memory/retrieval/unified_search.py`
- `core/_agent_cycle.py`
- ... 6 more

### Wiki/graph/entity model

- `core/config/schemas.py`
- `core/lifecycle/system_consolidation.py`
- `core/memory/entity_index.py`
- `core/memory/fact_extraction.py`
- `core/memory/fact_invalidation.py`
- `core/memory/facts.py`
- `core/memory/rag_search.py`
- `core/notification/reply_routing.py`
- `core/skills/guard.py`
- `core/skills/hub.py`
- `core/skills/models.py`
- `core/skills/policy.py`
- ... 6 more

### Memory/update lifecycle

- `core/_agent_cycle.py`
- `core/_agent_executor.py`
- `core/_agent_priming.py`
- `core/_agent_prompt_log.py`
- `core/_anima_heartbeat.py`
- `core/_anima_inbox.py`
- `core/_anima_lifecycle.py`
- `core/_anima_messaging.py`
- `core/agent.py`
- `core/anima_factory.py`
- `core/anima.py`
- `core/asset_reconciler.py`
- ... 6 more

### Provenance/citation/evidence

- `core/schemas.py`
- `core/execution/_sanitize.py`
- `core/goals/judge.py`
- `core/memory/_activity_replay.py`
- `core/memory/consolidation.py`
- `core/memory/fact_extraction.py`
- `core/memory/fact_invalidation.py`
- `core/memory/forgetting.py`
- `core/memory/search_metadata.py`
- `core/skills/guard.py`
- `core/skills/models.py`
- `core/skills/probation_promotion.py`
- ... 6 more

### Evaluation/observability

- `core/_agent_priming.py`
- `core/audit.py`
- `core/fd_limits.py`
- `server/usage_governor.py`
- `core/execution/_sdk_security.py`
- `core/memory/fact_observability.py`
- `core/skills/curator.py`
- `core/skills/guard.py`
- `core/skills/index.py`
- `core/skills/router.py`
- `core/tooling/prompt_db.py`
- `core/tools/aws_collector.py`
- ... 6 more

### Agent/MCP/tool surface

- `core/_agent_cycle.py`
- `core/_agent_executor.py`
- `core/_agent_priming.py`
- `core/_agent_prompt_log.py`
- `core/_anima_heartbeat.py`
- `core/_anima_inbox.py`
- `core/_anima_lifecycle.py`
- `core/_anima_messaging.py`
- `core/agent.py`
- `core/anima_factory.py`
- `core/anima.py`
- `core/asset_reconciler.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| core/_anima_messaging.py | 1141 | # ── Neo4j realtime ingest ──────────────────────────────── |
| core/_anima_messaging.py | 1152 | """Fire-and-forget Neo4j ingest of the latest conversation turn.""" |
| core/_anima_messaging.py | 1199 | logger.debug("[%s] Neo4j realtime ingest check failed", self.name, exc_info=True) |
| core/_anima_messaging.py | 1208 | """Ingest a single conversation turn into Neo4j.""" |
| core/_anima_messaging.py | 1216 | logger.debug("[%s] Realtime Neo4j ingest complete", self.name) |
| core/_anima_messaging.py | 1218 | logger.debug("[%s] Realtime Neo4j ingest failed", self.name, exc_info=True) |
| core/image_artifacts.py | 31 | "upload.wikimedia.org", |
| server/slack_avatar_upload.py | 7 | """Upload Slack avatar PNGs to XSERVER for public hosting. |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| core/execution/agent_sdk.py | 18 | Implementation is split across submodules for readability: |
| core/skills/guard.py | 57 | ".pdf", |
| core/skills/guard.py | 59 | ".docx", |
| core/skills/guard.py | 62 | ".pptx", |
| core/tooling/handler_files.py | 920 | from bs4 import BeautifulSoup |
| core/tooling/handler_files.py | 923 | soup = BeautifulSoup(body, "html.parser") |
| core/tools/_slack_markdown.py | 109 | Markdown tables are converted to bullet-list format for readability |
| core/tools/gmail.py | 674 | animaworks-tool gmail draft --to "宛先" --subject "件名" --body "本文" --attachment /path/to/file.pdf |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| core/_agent_cycle.py | 50 | """Accumulate chunk usage into the streaming accumulator dict.""" |
| core/_agent_cycle.py | 766 | async for chunk in self._run_cycle_streaming_inner( |
| core/_agent_cycle.py | 776 | if chunk.get("type") == "cycle_done": |
| core/_agent_cycle.py | 777 | cycle_result = chunk.get("cycle_result") |
| core/_agent_cycle.py | 785 | yield chunk |
| core/_agent_cycle.py | 992 | async for chunk in active_executor.execute_streaming( |
| core/_agent_cycle.py | 1004 | if chunk["type"] == "done": |
| core/_agent_cycle.py | 1005 | full_text_parts.append(chunk["full_text"]) |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| core/_agent_executor.py | 280 | Used by build_system_prompt for Tier 3 vector-based skill matching. |
| core/gpu.py | 19 | _VALID_COMPONENTS = {"embedding", "nli", "reranker"} |
| core/gpu.py | 60 | "embedding": "auto", |
| core/gpu.py | 65 | "embedding": "embedding_device", |
| core/gpu.py | 84 | ``embedding`` preserves the historical ``rag.use_gpu`` behavior when the |
| core/gpu.py | 106 | if component == "embedding" and not _embedding_auto_uses_gpu(config): |
| core/gpu.py | 151 | embedding_device = _component_devices.get("embedding") |
| core/gpu.py | 156 | embedding_device = resolve_device("embedding") |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| core/memory/retrieval/__init__.py | 4 | """Backend-agnostic memory retrieval pipeline (RRF, rerank, confidence gate).""" |
| core/memory/retrieval/__init__.py | 6 | from core.memory.retrieval.confidence_gate import GateResult, apply_confidence_gate |
| core/memory/retrieval/__init__.py | 7 | from core.memory.retrieval.pipeline import PipelineResult, RetrievalPipeline |
| core/memory/retrieval/__init__.py | 8 | from core.memory.retrieval.reranker import CrossEncoderReranker, get_reranker |
| core/memory/retrieval/__init__.py | 9 | from core.memory.retrieval.rrf import legacy_result_key, reciprocal_rank_fusion, rrf_merge |
| core/memory/retrieval/__init__.py | 10 | from core.memory.retrieval.types import RetrievalCandidate |
| core/memory/retrieval/access_boost.py | 4 | """Access-count LTP boost for final retrieval ranking.""" |
| core/memory/retrieval/confidence_gate.py | 4 | """Retrieval confidence gate — abstain when evidence is weak.""" |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| core/config/schemas.py | 231 | description="Enable Legacy NetworkX graph nodes/edges for facts and entities.", |
| core/config/schemas.py | 236 | description="Maximum co-mentioned memory/fact carriers connected per entity.", |
| core/config/schemas.py | 240 | description="Reduce graph edge weights for high-fanout entity nodes.", |
| core/lifecycle/system_consolidation.py | 291 | """Run batch community detection if the anima uses the Neo4j backend.""" |
| core/lifecycle/system_consolidation.py | 303 | from core.memory.graph.community import CommunityDetector |
| core/lifecycle/system_consolidation.py | 314 | "Community detection for %s: detected=%d stored=%d memberships=%d", |
| core/lifecycle/system_consolidation.py | 321 | logger.exception("Community detection failed for anima=%s", anima_name) |
| core/lifecycle/system_consolidation.py | 327 | logger.debug("Failed to close Neo4j backend after community detection", exc_info=True) |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| core/_agent_cycle.py | 28 | from core.memory.shortterm import SessionState, ShortTermMemory |
| core/_agent_cycle.py | 72 | from core.memory.token_usage import TokenUsageLogger |
| core/_agent_cycle.py | 102 | """Clear stale runtime state for non-chat sessions before execution.""" |
| core/_agent_cycle.py | 138 | """Run one agent cycle with autonomous memory search. |
| core/_agent_cycle.py | 147 | externalized to short-term memory and automatically continued. |
| core/_agent_cycle.py | 240 | # ── Priming: Automatic memory retrieval ──────────────── |
| core/_agent_cycle.py | 265 | self.memory, |
| core/_agent_cycle.py | 294 | logger.info("Injected short-term memory into system prompt") |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| core/schemas.py | 139 | # Provenance tracking (Phase 2) |
| core/execution/_sanitize.py | 18 | provenance-aware trust resolution (Phase 1 foundation). |
| core/execution/_sanitize.py | 149 | origin: Origin category of the data (optional, provenance Phase 1). |
| core/execution/_sanitize.py | 190 | origin: Origin category of the data (optional, provenance Phase 1). |
| core/execution/_sanitize.py | 193 | ``evidence``, ``guardrail``). Omitted by default for backwards |
| core/goals/judge.py | 200 | "Judge this goal using only the supplied evidence.\n" |
| core/memory/_activity_replay.py | 353 | source_id = _source_id(event, group_index, event_index) |
| core/memory/_activity_replay.py | 355 | "id": f"sem:{ctx['group_id']}:{source_id}", |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| core/_agent_priming.py | 27 | """Mixin: priming (auto-recall), context fitting, pre-flight size check.""" |
| core/audit.py | 85 | """Audit metrics for a single Anima.""" |
| core/audit.py | 117 | """Organisation-wide audit report aggregating all Anima metrics.""" |
| core/audit.py | 324 | OrgAuditReport with per-anima metrics and org-level aggregates. |
| core/fd_limits.py | 3 | """File-descriptor utilities (limits + lightweight runtime metrics).""" |
| server/usage_governor.py | 276 | # ── Rule evaluation ────────────────────────────────────────────────────────── |
| core/execution/_sdk_security.py | 155 | checks use parsed argv for precision. |
| core/memory/fact_observability.py | 7 | """Shared observability helpers for fact extraction and related indexes.""" |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| core/_agent_cycle.py | 9 | Extracted from ``core.agent.AgentCore`` as a Mixin. All ``self`` references |
| core/_agent_cycle.py | 34 | logger = logging.getLogger("animaworks.agent") |
| core/_agent_cycle.py | 123 | logger.debug("Failed to clear non-chat Codex thread ID", exc_info=True) |
| core/_agent_cycle.py | 138 | """Run one agent cycle with autonomous memory search. |
| core/_agent_cycle.py | 143 | - Mode C (codex): ``CodexSDKExecutor`` -- Codex CLI wrapper |
| core/_agent_cycle.py | 144 | - Mode S (SDK): ``AgentSDKExecutor`` -- Claude Agent SDK |
| core/_agent_cycle.py | 367 | # ── Mode C: Codex SDK ───────────────────────────── |
| core/_agent_cycle.py | 404 | logger.debug("Failed to clear Codex thread ID after Mode C threshold", exc_info=True) |

## Gap

_없음_
