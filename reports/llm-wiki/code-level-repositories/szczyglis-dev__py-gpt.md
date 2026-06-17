# szczyglis-dev/py-gpt 코드 레벨 분석

생성일: 2026-06-17T23:31:56.224Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | rag-knowledge-platform |
| maturity | A integrated platform (100) |
| stars | 1827 |
| language | Python |
| tags | rag, agent-knowledge, korea-signal |
| files/code/source | 2369/1846/1626 |
| tests/ci | 120/0 |
| local path | sources/szczyglis-dev__py-gpt |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 94 | 48 | src/pygpt_net/config.py:81 "upload": "upload", |
| Parsing/OCR/document extraction | code | 61 | 26 | src/pygpt_net/core/filesystem/actions.py:79 extra_excluded = ["pdf", "docx", "doc", "xlsx", "xls", "pptx", "ppt"] |
| Chunking/splitting | code | 126 | 104 | src/pygpt_net/preload.py:318 "QProgressBar::chunk { background-color: #3f3f3f; }") |
| Embedding/vector index | code | 151 | 103 | src/pygpt_net/provider/llms/hugging_face_embedding.py:14 from llama_index.embeddings.huggingface_api import ( |
| Retrieval/search/rerank | code | 221 | 159 | src/pygpt_net/provider/loaders/web_chatgpt_retrieval.py:23 self.name = "ChatGPT Retrieval Plugin" |
| Wiki/graph/entity model | code | 33 | 24 | src/pygpt_net/plugin/telegram/worker.py:228 # Resolves @username, phone, or numeric id/entity |
| Memory/update lifecycle | code | 472 | 393 | src/pygpt_net/app.py:33 # set_env("QTWEBENGINE_CHROMIUM_FLAGS", "--enable-precise-memory-info", "", True) |
| Provenance/citation/evidence | code | 27 | 26 | src/pygpt_net/controller/assistant/threads.py:155 citations = [] |
| Evaluation/observability | code | 133 | 93 | src/pygpt_net/item/ctx.py:147 self.partial = False # not final output, used in cycle next ctx, force wait for final output, do not eval, etc |
| Agent/MCP/tool surface | code | 481 | 305 | src/pygpt_net/app_core.py:14 from .core.agents import Agents |

## 의존성 신호

- LLM/app framework: langchain, llama-index, ollama, openai

## 주요 파일 후보

### Ingestion/source intake

- `src/pygpt_net/config.py`
- `src/pygpt_net/controller/assistant/assistant.py`
- `src/pygpt_net/controller/assistant/files.py`
- `src/pygpt_net/controller/chat/attachment.py`
- `src/pygpt_net/controller/chat/files.py`
- `src/pygpt_net/controller/chat/input.py`
- `src/pygpt_net/controller/chat/text.py`
- `src/pygpt_net/controller/dialogs/confirm.py`
- `src/pygpt_net/controller/files/files.py`
- `src/pygpt_net/controller/lang/custom.py`
- `src/pygpt_net/controller/lang/mapping.py`
- `src/pygpt_net/controller/remote_store/batch.py`
- ... 6 more

### Parsing/OCR/document extraction

- `src/pygpt_net/core/filesystem/actions.py`
- `src/pygpt_net/core/text/utils.py`
- `src/pygpt_net/core/web/helpers.py`
- `src/pygpt_net/plugin/cmd_web/websearch.py`
- `src/pygpt_net/plugin/google/config.py`
- `src/pygpt_net/plugin/google/worker.py`
- `src/pygpt_net/plugin/mailer/runner.py`
- `src/pygpt_net/provider/loaders/file_docx.py`
- `src/pygpt_net/provider/loaders/file_pdf.py`
- `src/pygpt_net/core/render/markdown/parser.py`
- `src/pygpt_net/core/render/web/parser.py`
- `src/pygpt_net/provider/api/anthropic/__init__.py`
- ... 6 more

### Chunking/splitting

- `src/pygpt_net/preload.py`
- `src/pygpt_net/ui/__init__.py`
- `src/pygpt_net/controller/chat/output.py`
- `src/pygpt_net/controller/chat/render.py`
- `src/pygpt_net/controller/chat/response.py`
- `src/pygpt_net/controller/chat/stream_worker.py`
- `src/pygpt_net/controller/chat/stream.py`
- `src/pygpt_net/controller/layout/layout.py`
- `src/pygpt_net/controller/realtime/realtime.py`
- `src/pygpt_net/core/command/command.py`
- `src/pygpt_net/core/docker/docker.py`
- `src/pygpt_net/core/events/realtime.py`
- ... 6 more

### Embedding/vector index

- `src/pygpt_net/provider/llms/hugging_face_embedding.py`
- `src/pygpt_net/provider/llms/llama_index/x_ai/embedding.py`
- `src/pygpt_net/app.py`
- `src/pygpt_net/launcher.py`
- `src/pygpt_net/item/assistant.py`
- `src/pygpt_net/item/store.py`
- `src/pygpt_net/ui/main.py`
- `src/pygpt_net/controller/assistant/batch.py`
- `src/pygpt_net/controller/assistant/editor.py`
- `src/pygpt_net/controller/assistant/files.py`
- `src/pygpt_net/controller/config/placeholder.py`
- `src/pygpt_net/controller/dialogs/confirm.py`
- ... 6 more

### Retrieval/search/rerank

- `src/pygpt_net/provider/loaders/web_chatgpt_retrieval.py`
- `src/pygpt_net/provider/loaders/hub/chatgpt_retrieval/base.py`
- `src/pygpt_net/app.py`
- `src/pygpt_net/config.py`
- `src/pygpt_net/utils.py`
- `src/pygpt_net/controller/access/control.py`
- `src/pygpt_net/controller/chat/remote_tools.py`
- `src/pygpt_net/controller/chat/text.py`
- `src/pygpt_net/controller/ctx/ctx.py`
- `src/pygpt_net/controller/finder/finder.py`
- `src/pygpt_net/controller/idx/idx.py`
- `src/pygpt_net/controller/lang/mapping.py`
- ... 6 more

### Wiki/graph/entity model

- `src/pygpt_net/plugin/telegram/worker.py`
- `src/pygpt_net/data/js/app/custom.js`
- `src/pygpt_net/data/js/app/highlight.js`
- `src/pygpt_net/data/js/app/template.js`
- `src/pygpt_net/provider/api/anthropic/chat.py`
- `src/pygpt_net/ui/widget/node_editor/editor.py`
- `src/pygpt_net/data/js/highlight/languages/coq.js`
- `src/pygpt_net/data/js/highlight/languages/d.js`
- `src/pygpt_net/data/js/highlight/languages/markdown.js`
- `src/pygpt_net/data/js/highlight/languages/mathematica.js`
- `src/pygpt_net/data/js/highlight/languages/routeros.js`
- `src/pygpt_net/data/js/highlight/languages/scheme.js`
- ... 6 more

### Memory/update lifecycle

- `src/pygpt_net/app.py`
- `src/pygpt_net/launcher.py`
- `src/pygpt_net/utils.py`
- `src/pygpt_net/controller/__init__.py`
- `src/pygpt_net/item/assistant.py`
- `src/pygpt_net/item/ctx.py`
- `src/pygpt_net/migrations/Version20231227152900.py`
- `src/pygpt_net/migrations/Version20240222160000.py`
- `src/pygpt_net/tools/base.py`
- `src/pygpt_net/controller/assistant/assistant.py`
- `src/pygpt_net/controller/assistant/editor.py`
- `src/pygpt_net/controller/assistant/files.py`
- ... 6 more

### Provenance/citation/evidence

- `src/pygpt_net/controller/assistant/threads.py`
- `src/pygpt_net/controller/chat/stream_worker.py`
- `src/pygpt_net/controller/debug/debug.py`
- `src/pygpt_net/plugin/google/worker.py`
- `src/pygpt_net/provider/agents/openai/supervisor.py`
- `src/pygpt_net/provider/api/anthropic/chat.py`
- `src/pygpt_net/provider/api/anthropic/remote_tools.py`
- `src/pygpt_net/provider/api/google/stream.py`
- `src/pygpt_net/provider/api/google/utils.py`
- `src/pygpt_net/provider/api/openai/__init__.py`
- `src/pygpt_net/provider/api/openai/responses.py`
- `src/pygpt_net/provider/api/openai/stream.py`
- ... 6 more

### Evaluation/observability

- `src/pygpt_net/item/ctx.py`
- `src/pygpt_net/controller/agent/agent.py`
- `src/pygpt_net/controller/agent/llama.py`
- `src/pygpt_net/controller/chat/response.py`
- `src/pygpt_net/controller/idx/idx.py`
- `src/pygpt_net/plugin/wolfram/config.py`
- `src/pygpt_net/plugin/wolfram/worker.py`
- `src/pygpt_net/provider/vector_stores/pinecode.py`
- `src/pygpt_net/ui/menu/debug.py`
- `src/pygpt_net/core/agents/observer/__init__.py`
- `src/pygpt_net/core/agents/observer/evaluation.py`
- `src/pygpt_net/core/agents/runners/loop.py`
- ... 6 more

### Agent/MCP/tool surface

- `src/pygpt_net/app_core.py`
- `src/pygpt_net/app.py`
- `src/pygpt_net/launcher.py`
- `src/pygpt_net/controller/__init__.py`
- `src/pygpt_net/item/agent.py`
- `src/pygpt_net/item/builder_layout.py`
- `src/pygpt_net/item/ctx.py`
- `src/pygpt_net/item/model.py`
- `src/pygpt_net/item/preset.py`
- `src/pygpt_net/migrations/Version20260102190000.py`
- `src/pygpt_net/ui/main.py`
- `src/pygpt_net/controller/agent/__init__.py`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| src/pygpt_net/config.py | 81 | "upload": "upload", |
| src/pygpt_net/config.py | 202 | dir_data_allowed = ("img", "capture", "upload") |
| src/pygpt_net/config.py | 204 | if self.has("upload.data_dir") \ |
| src/pygpt_net/config.py | 205 | and self.get("upload.data_dir") \ |
| src/pygpt_net/controller/assistant/assistant.py | 115 | self.window.controller.chat.files.send("assistant", ctx) # upload attachments |
| src/pygpt_net/controller/assistant/files.py | 59 | Count attachments for upload |
| src/pygpt_net/controller/assistant/files.py | 252 | def upload( |
| src/pygpt_net/controller/assistant/files.py | 258 | Upload attachments to assistant |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| src/pygpt_net/core/filesystem/actions.py | 79 | extra_excluded = ["pdf", "docx", "doc", "xlsx", "xls", "pptx", "ppt"] |
| src/pygpt_net/core/filesystem/actions.py | 176 | extra_excluded = ["pdf", "docx", "doc", "xlsx", "xls", "pptx", "ppt"] |
| src/pygpt_net/core/text/utils.py | 22 | from bs4 import BeautifulSoup, NavigableString |
| src/pygpt_net/core/text/utils.py | 24 | soup = BeautifulSoup(html, 'lxml') |
| src/pygpt_net/core/text/utils.py | 26 | soup = BeautifulSoup(html, 'html.parser') |
| src/pygpt_net/core/text/utils.py | 52 | from bs4 import BeautifulSoup |
| src/pygpt_net/core/text/utils.py | 54 | soup = BeautifulSoup(html, 'lxml') |
| src/pygpt_net/core/text/utils.py | 56 | soup = BeautifulSoup(html, 'html.parser') |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| src/pygpt_net/preload.py | 318 | "QProgressBar::chunk { background-color: #3f3f3f; }") |
| src/pygpt_net/ui/__init__.py | 86 | # horizontal splitter |
| src/pygpt_net/ui/__init__.py | 115 | """Set initial splitter height""" |
| src/pygpt_net/ui/__init__.py | 128 | """Set initial splitter width""" |
| src/pygpt_net/controller/chat/output.py | 68 | # if stream then append chunk by chunk |
| src/pygpt_net/controller/chat/output.py | 72 | end = False # don't end if stream mode, append chunk by chunk |
| src/pygpt_net/controller/chat/render.py | 88 | data.get("chunk", ""), |
| src/pygpt_net/controller/chat/render.py | 154 | data.get("chunk", ""), |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| src/pygpt_net/provider/llms/hugging_face_embedding.py | 14 | from llama_index.embeddings.huggingface_api import ( |
| src/pygpt_net/provider/llms/llama_index/x_ai/embedding.py | 16 | from llama_index.core.embeddings import BaseEmbedding |
| src/pygpt_net/provider/llms/llama_index/x_ai/embedding.py | 21 | LlamaIndex xAI Embedding SDK wrapper. |
| src/pygpt_net/provider/llms/llama_index/x_ai/embedding.py | 48 | embeddings: List[List[float]] = [] |
| src/pygpt_net/provider/llms/llama_index/x_ai/embedding.py | 49 | async for (values, _shape) in self._client.embedder.embed( |
| src/pygpt_net/provider/llms/llama_index/x_ai/embedding.py | 52 | embeddings.append(list(values)) |
| src/pygpt_net/provider/llms/llama_index/x_ai/embedding.py | 53 | return embeddings |
| src/pygpt_net/app.py | 83 | - Custom vector store providers |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| src/pygpt_net/provider/loaders/web_chatgpt_retrieval.py | 23 | self.name = "ChatGPT Retrieval Plugin" |
| src/pygpt_net/provider/loaders/web_chatgpt_retrieval.py | 28 | "description": "read and index data from ChatGPT Retrieval Plugin", |
| src/pygpt_net/provider/loaders/hub/chatgpt_retrieval/base.py | 17 | """ChatGPT Retrieval Plugin reader.""" |
| src/pygpt_net/provider/loaders/hub/chatgpt_retrieval/base.py | 26 | """Chatgpt Retrieval Plugin.""" |
| src/pygpt_net/provider/loaders/hub/chatgpt_retrieval/base.py | 45 | """Load data from ChatGPT Retrieval Plugin.""" |
| src/pygpt_net/app.py | 87 | - Custom web search engine providers |
| src/pygpt_net/app.py | 340 | # web search engine providers |
| src/pygpt_net/config.py | 332 | result = _RE_VERSION.search(data) |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| src/pygpt_net/plugin/telegram/worker.py | 228 | # Resolves @username, phone, or numeric id/entity |
| src/pygpt_net/plugin/telegram/worker.py | 360 | entity = self._tl_resolve(client, chat) |
| src/pygpt_net/plugin/telegram/worker.py | 365 | msg = client.send_message(entity, text, parse_mode=(parse_mode.lower() if parse_mode else None), link_preview=not bool(p.get("disable_web_page_preview") or self.plugin.get_option_value("default_disable_preview"))) |
| src/pygpt_net/plugin/telegram/worker.py | 390 | entity = self._tl_resolve(client, chat) |
| src/pygpt_net/plugin/telegram/worker.py | 392 | msg = client.send_file(entity, local, caption=caption) |
| src/pygpt_net/plugin/telegram/worker.py | 416 | entity = self._tl_resolve(client, chat) |
| src/pygpt_net/plugin/telegram/worker.py | 418 | msg = client.send_file(entity, local, caption=caption, force_document=True) |
| src/pygpt_net/plugin/telegram/worker.py | 520 | ent = d.entity |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| src/pygpt_net/app.py | 33 | # set_env("QTWEBENGINE_CHROMIUM_FLAGS", "--enable-precise-memory-info", "", True) |
| src/pygpt_net/launcher.py | 350 | # self.window.core.debug.mem("INIT") # debug memory usage |
| src/pygpt_net/utils.py | 333 | """Clean memory by removing unused objects""" |
| src/pygpt_net/controller/__init__.py | 202 | mem_clean(force=True) # try to clean memory |
| src/pygpt_net/item/assistant.py | 164 | Delete file from assistant |
| src/pygpt_net/item/assistant.py | 195 | Delete attachment from assistant |
| src/pygpt_net/item/ctx.py | 584 | """Delete additional context data""" |
| src/pygpt_net/migrations/Version20231227152900.py | 73 | FOREIGN KEY(meta_id) REFERENCES ctx_meta(id) ON DELETE SET NULL |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| src/pygpt_net/controller/assistant/threads.py | 155 | citations = [] |
| src/pygpt_net/controller/assistant/threads.py | 172 | # citation |
| src/pygpt_net/controller/assistant/threads.py | 185 | citations.append(data) |
| src/pygpt_net/controller/assistant/threads.py | 205 | # citations |
| src/pygpt_net/controller/assistant/threads.py | 206 | if citations: |
| src/pygpt_net/controller/assistant/threads.py | 207 | ctx.doc_ids = citations |
| src/pygpt_net/controller/chat/stream_worker.py | 55 | citations: Optional[list] = field(default_factory=list) |
| src/pygpt_net/controller/chat/stream_worker.py | 311 | # xAI: collect citations (final response) -> ctx.urls |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| src/pygpt_net/item/ctx.py | 147 | self.partial = False # not final output, used in cycle next ctx, force wait for final output, do not eval, etc |
| src/pygpt_net/controller/agent/agent.py | 62 | # on input begin, unlock experts and reset evaluation steps |
| src/pygpt_net/controller/agent/agent.py | 67 | self.llama.reset_eval_step() # reset evaluation steps |
| src/pygpt_net/controller/agent/llama.py | 82 | """Reset evaluation step""" |
| src/pygpt_net/controller/agent/llama.py | 86 | """Next evaluation step""" |
| src/pygpt_net/controller/agent/llama.py | 91 | Get evaluation step |
| src/pygpt_net/controller/agent/llama.py | 93 | :return: evaluation step |
| src/pygpt_net/controller/agent/llama.py | 103 | self.reset_eval_step() # reset evaluation step |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| src/pygpt_net/app_core.py | 14 | from .core.agents import Agents |
| src/pygpt_net/app_core.py | 63 | self.agents = Agents(window) |
| src/pygpt_net/app.py | 89 | - Custom agents |
| src/pygpt_net/app.py | 126 | To register a custom agent: |
| src/pygpt_net/app.py | 128 | - Pass a list containing the agent instances as the `agents` keyword argument. |
| src/pygpt_net/app.py | 174 | agents = [ |
| src/pygpt_net/app.py | 189 | agents=agents, |
| src/pygpt_net/app.py | 233 | from pygpt_net.plugin.agent import Plugin as AgentPlugin |

## Gap

- ci
