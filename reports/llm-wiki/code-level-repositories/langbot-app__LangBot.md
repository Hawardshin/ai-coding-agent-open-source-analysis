# langbot-app/LangBot 코드 레벨 분석

생성일: 2026-06-17T23:31:46.760Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | A integrated platform (108) |
| stars | 16358 |
| language | Python |
| tags | rag, agent-knowledge, korea-signal |
| files/code/source | 938/768/601 |
| tests/ci | 120/13 |
| local path | sources/langbot-app__LangBot |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 63 | 32 | src/langbot/libs/coze_server_api/client.py:28 connector = aiohttp.TCPConnector( |
| Parsing/OCR/document extraction | code | 32 | 19 | src/langbot/libs/deerflow_api/stream_utils.py:12 def extract_text(content: typing.Any) -> str: |
| Chunking/splitting | code | 34 | 25 | src/langbot/libs/coze_server_api/client.py:161 async for chunk in response.content: |
| Embedding/vector index | code | 115 | 54 | src/langbot/pkg/box/service.py:174 embedder that knows the real topology). |
| Retrieval/search/rerank | code | 119 | 62 | src/langbot/libs/wecom_ai_bot_api/api.py:306 utf8_match = re.search(r"filename\*=UTF-8''([^;\s]+)", content_disposition, re.IGNORECASE) |
| Wiki/graph/entity model | code | 266 | 190 | src/langbot/libs/qq_official_api/api.py:8 import langbot_plugin.api.entities.builtin.platform.events as platform_events |
| Memory/update lifecycle | code | 195 | 136 | src/langbot/libs/deerflow_api/client.py:120 response = await client.delete(url, headers=self.headers) |
| Provenance/citation/evidence | code | 11 | 8 | src/langbot/pkg/box/service.py:452 source_path: str = '', |
| Evaluation/observability | code | 30 | 14 | src/langbot/pkg/box/service.py:15 from ..telemetry import features as telemetry_features |
| Agent/MCP/tool surface | code | 179 | 83 | src/langbot/libs/weknora_api/client.py:68 Agent 智能对话（SSE 流式） |

## 의존성 신호

- LLM/app framework: anthropic, ollama, openai, langchain, langchain-core, langchain-text-splitters, litellm
- Vector/search store: chromadb, pymilvus, pgvector
- Document parsing/OCR: PyPDF2, python-docx, beautifulsoup4
- Persistence/database: aiosqlite, sqlalchemy, asyncpg, pgvector

## 주요 파일 후보

### Ingestion/source intake

- `src/langbot/libs/coze_server_api/client.py`
- `src/langbot/libs/openclaw_weixin_api/client.py`
- `src/langbot/libs/qq_official_api/api.py`
- `src/langbot/libs/wecom_api/api.py`
- `src/langbot/libs/wecom_customer_service_api/api.py`
- `src/langbot/pkg/box/connector.py`
- `src/langbot/pkg/box/service.py`
- `src/langbot/pkg/core/app.py`
- `src/langbot/pkg/plugin/connector.py`
- `src/langbot/pkg/plugin/handler.py`
- `src/langbot/templates/embed/widget.js`
- `src/langbot/libs/dify_service_api/v1/client.py`
- ... 6 more

### Parsing/OCR/document extraction

- `src/langbot/libs/deerflow_api/stream_utils.py`
- `src/langbot/libs/wecom_ai_bot_api/api.py`
- `src/langbot/pkg/vector/filter_utils.py`
- `src/langbot/pkg/vector/vdb.py`
- `src/langbot/templates/embed/widget.js`
- `src/langbot/pkg/platform/sources/lark.py`
- `src/langbot/pkg/platform/sources/telegram.py`
- `src/langbot/pkg/provider/runners/deerflowapi.py`
- `src/langbot/pkg/rag/knowledge/kbmgr.py`
- `src/langbot/pkg/provider/tools/loaders/skill_authoring.py`
- `web/src/i18n/locales/en-US.ts`
- `web/src/i18n/locales/es-ES.ts`
- ... 6 more

### Chunking/splitting

- `src/langbot/libs/coze_server_api/client.py`
- `src/langbot/libs/deerflow_api/client.py`
- `src/langbot/libs/openclaw_weixin_api/client.py`
- `src/langbot/libs/wecom_ai_bot_api/api.py`
- `src/langbot/libs/wecom_ai_bot_api/ws_client.py`
- `src/langbot/libs/weknora_api/client.py`
- `src/langbot/pkg/plugin/connector.py`
- `src/langbot/libs/dify_service_api/v1/client.py`
- `src/langbot/pkg/entity/persistence/rag.py`
- `src/langbot/pkg/entity/persistence/vector.py`
- `src/langbot/pkg/platform/sources/lark.py`
- `src/langbot/pkg/platform/sources/qqofficial.py`
- ... 6 more

### Embedding/vector index

- `src/langbot/pkg/box/service.py`
- `src/langbot/pkg/core/app.py`
- `src/langbot/pkg/plugin/handler.py`
- `src/langbot/pkg/telemetry/heartbeat.py`
- `src/langbot/pkg/vector/filter_utils.py`
- `src/langbot/pkg/vector/mgr.py`
- `src/langbot/pkg/vector/vdb.py`
- `src/langbot/pkg/core/stages/build_app.py`
- `src/langbot/pkg/entity/dto/space_model.py`
- `src/langbot/pkg/entity/persistence/model.py`
- `src/langbot/pkg/entity/persistence/monitoring.py`
- `src/langbot/pkg/entity/persistence/vector.py`
- ... 6 more

### Retrieval/search/rerank

- `src/langbot/libs/wecom_ai_bot_api/api.py`
- `src/langbot/pkg/platform/botmgr.py`
- `src/langbot/pkg/plugin/connector.py`
- `src/langbot/pkg/plugin/handler.py`
- `src/langbot/pkg/vector/mgr.py`
- `src/langbot/pkg/vector/vdb.py`
- `src/langbot/pkg/entity/persistence/model.py`
- `src/langbot/pkg/entity/persistence/monitoring.py`
- `src/langbot/pkg/pipeline/preproc/preproc.py`
- `src/langbot/pkg/platform/sources/satori.py`
- `src/langbot/pkg/provider/modelmgr/modelmgr.py`
- `src/langbot/pkg/provider/modelmgr/requester.py`
- ... 6 more

### Wiki/graph/entity model

- `src/langbot/libs/qq_official_api/api.py`
- `src/langbot/libs/slack_api/api.py`
- `src/langbot/libs/wecom_api/api.py`
- `src/langbot/libs/wecom_customer_service_api/api.py`
- `src/langbot/pkg/box/connector.py`
- `src/langbot/pkg/box/service.py`
- `src/langbot/pkg/command/cmdmgr.py`
- `src/langbot/pkg/command/operator.py`
- `src/langbot/pkg/core/app.py`
- `src/langbot/pkg/core/taskmgr.py`
- `src/langbot/pkg/persistence/mgr.py`
- `src/langbot/pkg/pipeline/aggregator.py`
- ... 6 more

### Memory/update lifecycle

- `src/langbot/libs/deerflow_api/client.py`
- `src/langbot/libs/dingtalk_api/api.py`
- `src/langbot/libs/qq_official_api/api.py`
- `src/langbot/libs/wecom_ai_bot_api/ws_client.py`
- `src/langbot/libs/wecom_customer_service_api/api.py`
- `src/langbot/pkg/box/connector.py`
- `src/langbot/pkg/box/service.py`
- `src/langbot/pkg/box/workspace.py`
- `src/langbot/pkg/config/manager.py`
- `src/langbot/pkg/persistence/alembic_runner.py`
- `src/langbot/pkg/pipeline/aggregator.py`
- `src/langbot/pkg/pipeline/controller.py`
- ... 6 more

### Provenance/citation/evidence

- `src/langbot/pkg/box/service.py`
- `src/langbot/pkg/api/http/service/skill.py`
- `src/langbot/pkg/provider/tools/loaders/mcp_stdio.py`
- `src/langbot/pkg/provider/tools/loaders/skill_authoring.py`
- `src/langbot/pkg/api/http/controller/groups/plugins.py`
- `web/src/app/infra/http/BackendClient.ts`
- `web/src/app/home/skills/components/SkillZipPreviewPanel.tsx`
- `web/src/app/home/skills/components/skill-form/SkillForm.tsx`
- `web/package-lock.json`
- `web/pnpm-lock.yaml`
- `tests/unit_tests/provider/test_skill_tools.py`

### Evaluation/observability

- `src/langbot/pkg/box/service.py`
- `src/langbot/pkg/core/app.py`
- `src/langbot/pkg/telemetry/features.py`
- `src/langbot/pkg/telemetry/heartbeat.py`
- `src/langbot/pkg/telemetry/telemetry.py`
- `src/langbot/pkg/core/stages/build_app.py`
- `src/langbot/pkg/provider/runners/localagent.py`
- `src/langbot/pkg/provider/tools/toolmgr.py`
- `src/langbot/pkg/api/http/service/monitoring.py`
- `src/langbot/pkg/pipeline/process/handlers/chat.py`
- `src/langbot/pkg/api/http/controller/groups/monitoring.py`
- `web/scripts/check-i18n.mjs`
- ... 6 more

### Agent/MCP/tool surface

- `src/langbot/libs/weknora_api/client.py`
- `src/langbot/pkg/box/policy.py`
- `src/langbot/pkg/box/service.py`
- `src/langbot/pkg/box/workspace.py`
- `src/langbot/pkg/core/app.py`
- `src/langbot/pkg/pipeline/pipelinemgr.py`
- `src/langbot/pkg/plugin/connector.py`
- `src/langbot/pkg/plugin/handler.py`
- `src/langbot/pkg/provider/__init__.py`
- `src/langbot/pkg/skill/manager.py`
- `src/langbot/pkg/telemetry/features.py`
- `src/langbot/pkg/telemetry/heartbeat.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| src/langbot/libs/coze_server_api/client.py | 28 | connector = aiohttp.TCPConnector( |
| src/langbot/libs/coze_server_api/client.py | 44 | self.session = aiohttp.ClientSession(headers=headers, timeout=timeout, connector=connector) |
| src/langbot/libs/coze_server_api/client.py | 53 | async def upload( |
| src/langbot/libs/coze_server_api/client.py | 76 | url = f'{self.api_base}/v1/files/upload' |
| src/langbot/libs/openclaw_weixin_api/client.py | 306 | """Encrypt and upload media to WeChat CDN. |
| src/langbot/libs/openclaw_weixin_api/client.py | 309 | file_bytes: Raw file bytes to upload. |
| src/langbot/libs/openclaw_weixin_api/client.py | 336 | # 4. Get upload URL |
| src/langbot/libs/openclaw_weixin_api/client.py | 351 | raise ApiError('Failed to get upload URL', status=0) |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| src/langbot/libs/deerflow_api/stream_utils.py | 12 | def extract_text(content: typing.Any) -> str: |
| src/langbot/libs/deerflow_api/stream_utils.py | 20 | return extract_text(content.get('content')) |
| src/langbot/libs/deerflow_api/stream_utils.py | 22 | return extract_text(content['kwargs'].get('content')) |
| src/langbot/libs/deerflow_api/stream_utils.py | 33 | parts.append(extract_text(item['content'])) |
| src/langbot/libs/deerflow_api/stream_utils.py | 80 | text = extract_text(msg.get('content')) |
| src/langbot/libs/deerflow_api/stream_utils.py | 119 | text = extract_text(msg.get('content')) |
| src/langbot/libs/deerflow_api/stream_utils.py | 149 | return extract_text(msg_obj.get('content')) |
| src/langbot/libs/deerflow_api/stream_utils.py | 159 | return extract_text(msg_obj.get('content')) |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| src/langbot/libs/coze_server_api/client.py | 161 | async for chunk in response.content: |
| src/langbot/libs/coze_server_api/client.py | 162 | chunk = chunk.decode('utf-8') |
| src/langbot/libs/coze_server_api/client.py | 163 | if chunk != '\n': |
| src/langbot/libs/coze_server_api/client.py | 164 | if chunk.startswith('event:'): |
| src/langbot/libs/coze_server_api/client.py | 165 | chunk_type = chunk.replace('event:', '', 1).strip() |
| src/langbot/libs/coze_server_api/client.py | 166 | elif chunk.startswith('data:'): |
| src/langbot/libs/coze_server_api/client.py | 167 | chunk_data = chunk.replace('data:', '', 1).strip() |
| src/langbot/libs/deerflow_api/client.py | 178 | async for chunk in resp.aiter_bytes(8192): |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| src/langbot/pkg/box/service.py | 174 | embedder that knows the real topology). |
| src/langbot/pkg/core/app.py | 44 | from ..vector import mgr as vectordb_mgr |
| src/langbot/pkg/plugin/handler.py | 508 | message=f'Embedding model with embedding_model_uuid {embedding_model_uuid} not found', |
| src/langbot/pkg/plugin/handler.py | 548 | search_type = data.get('search_type', 'vector') |
| src/langbot/pkg/telemetry/heartbeat.py | 51 | 'vdb': config.get('vdb', {}).get('use', 'chroma'), |
| src/langbot/pkg/vector/filter_utils.py | 3 | Canonical filter format (Chroma-style ``where`` syntax): |
| src/langbot/pkg/vector/filter_utils.py | 62 | silently ignored (useful for Milvus / pgvector which only store a fixed |
| src/langbot/pkg/vector/mgr.py | 19 | if vdb_type == 'chroma': |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| src/langbot/libs/wecom_ai_bot_api/api.py | 306 | utf8_match = re.search(r"filename\*=UTF-8''([^;\s]+)", content_disposition, re.IGNORECASE) |
| src/langbot/libs/wecom_ai_bot_api/api.py | 310 | match = re.search(r'filename="?([^";\s]+)"?', content_disposition, re.IGNORECASE) |
| src/langbot/pkg/platform/botmgr.py | 72 | return bool(re.search(expected, actual)) |
| src/langbot/pkg/plugin/connector.py | 802 | """Retrieve knowledge using a KnowledgeEngine instance.""" |
| src/langbot/pkg/plugin/connector.py | 878 | """Call plugin to retrieve knowledge. |
| src/langbot/pkg/plugin/handler.py | 650 | """Retrieve documents from any knowledge base (unrestricted).""" |
| src/langbot/pkg/plugin/handler.py | 663 | entries = await kb.retrieve( |
| src/langbot/pkg/plugin/handler.py | 713 | """Retrieve documents from a knowledge base within the pipeline's scope.""" |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| src/langbot/libs/qq_official_api/api.py | 8 | import langbot_plugin.api.entities.builtin.platform.events as platform_events |
| src/langbot/libs/slack_api/api.py | 7 | import langbot_plugin.api.entities.builtin.platform.events as platform_events |
| src/langbot/libs/wecom_api/api.py | 12 | import langbot_plugin.api.entities.builtin.platform.message as platform_message |
| src/langbot/libs/wecom_customer_service_api/api.py | 11 | import langbot_plugin.api.entities.builtin.platform.message as platform_message |
| src/langbot/pkg/box/connector.py | 11 | from langbot_plugin.entities.io.actions.enums import CommonAction |
| src/langbot/pkg/box/service.py | 39 | import langbot_plugin.api.entities.builtin.pipeline.query as pipeline_query |
| src/langbot/pkg/command/cmdmgr.py | 8 | import langbot_plugin.api.entities.builtin.provider.session as provider_session |
| src/langbot/pkg/command/cmdmgr.py | 9 | import langbot_plugin.api.entities.builtin.pipeline.query as pipeline_query |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| src/langbot/libs/deerflow_api/client.py | 120 | response = await client.delete(url, headers=self.headers) |
| src/langbot/libs/deerflow_api/client.py | 123 | operation='delete thread', |
| src/langbot/libs/dingtalk_api/api.py | 588 | # Clear message handlers to prevent stale callbacks |
| src/langbot/libs/qq_official_api/api.py | 597 | # Cancel previous token refresh task if any |
| src/langbot/libs/qq_official_api/api.py | 612 | # Refresh token if needed |
| src/langbot/libs/qq_official_api/api.py | 719 | # Track token refresh task to avoid leaks |
| src/langbot/libs/qq_official_api/api.py | 822 | """Safely invoke a callback, handling both sync and async functions.""" |
| src/langbot/libs/wecom_ai_bot_api/ws_client.py | 97 | # Dedup: skip sending when content hasn't changed |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| src/langbot/pkg/box/service.py | 452 | source_path: str = '', |
| src/langbot/pkg/box/service.py | 460 | source_path, |
| src/langbot/pkg/api/http/service/skill.py | 157 | source_path=str(data.get('source_path', '') or ''), |
| src/langbot/pkg/api/http/service/skill.py | 188 | source_path: str = '', |
| src/langbot/pkg/api/http/service/skill.py | 195 | source_path=source_path, |
| src/langbot/pkg/api/http/service/skill.py | 216 | source_path=str(data.get('source_path', '') or ''), |
| src/langbot/pkg/provider/tools/loaders/mcp_stdio.py | 221 | source_path = normalize_host_path(host_path) |
| src/langbot/pkg/provider/tools/loaders/mcp_stdio.py | 222 | if not source_path: |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| src/langbot/pkg/box/service.py | 15 | from ..telemetry import features as telemetry_features |
| src/langbot/pkg/box/service.py | 787 | # ── Observability ───────────────────────────────────────────────── |
| src/langbot/pkg/core/app.py | 45 | from ..telemetry import telemetry as telemetry_module |
| src/langbot/pkg/core/app.py | 156 | telemetry: telemetry_module.TelemetryManager = None |
| src/langbot/pkg/core/app.py | 203 | # Telemetry instance heartbeat (startup + daily); respects |
| src/langbot/pkg/core/app.py | 205 | if self.telemetry is not None: |
| src/langbot/pkg/core/app.py | 206 | from ..telemetry import heartbeat as telemetry_heartbeat |
| src/langbot/pkg/core/app.py | 210 | name='telemetry-heartbeat', |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| src/langbot/libs/weknora_api/client.py | 68 | Agent 智能对话（SSE 流式） |
| src/langbot/libs/weknora_api/client.py | 71 | - agent_query: Agent 开始处理 |
| src/langbot/libs/weknora_api/client.py | 73 | - tool_call: 工具调用 |
| src/langbot/libs/weknora_api/client.py | 103 | f'/agent-chat/{session_id}', |
| src/langbot/pkg/box/policy.py | 27 | """Determines when agent execution is routed through the sandbox.""" |
| src/langbot/pkg/box/policy.py | 33 | """Only non-default sessions are sandboxed (e.g. sub-agents, MCP).""" |
| src/langbot/pkg/box/policy.py | 36 | """Every agent exec call is routed through the sandbox.""" |
| src/langbot/pkg/box/policy.py | 58 | """Controls which tools are available to the current agent/session. |

## Gap

_없음_
