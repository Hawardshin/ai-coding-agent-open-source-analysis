# chatchat-space/Langchain-Chatchat Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Langchain-Chatchat（原Langchain-ChatGLM）基于 Langchain 与 ChatGLM, Qwen 与 Llama 等语言模型的 RAG 与 Agent 应用 | Langchain-Chatchat (formerly langchain-ChatGLM), local knowledge based LLM (like ChatGLM, Qwen and Llama) RAG and Agent app with langchain

## 요약

- 조사 단위: `sources/chatchat-space__Langchain-Chatchat` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 523 files, 138 directories, depth score 108, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 container=docker/docker-compose.yaml, docker/Dockerfile이고, 의존성 단서는 langchain, express, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | chatchat-space/Langchain-Chatchat |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | korea |
| Language | Python |
| Stars | 38186 |
| Forks | 6218 |
| License | Apache-2.0 |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/chatchat-space__Langchain-Chatchat](../../../../sources/chatchat-space__Langchain-Chatchat) |
| Existing report | [reports/llm-wiki/repositories/chatchat-space__Langchain-Chatchat.md](../../../llm-wiki/repositories/chatchat-space__Langchain-Chatchat.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 523 / 138 |
| Max observed depth | 9 |
| Top directories | .github, docker, docs, libs, markdown_docs, tools |
| Top extensions | .py: 281, .md: 115, .pickle: 39, .jpg: 16, .png: 16, (none): 12, .sh: 10, .yml: 7, .toml: 6, .svg: 4, .txt: 3, .csv: 2 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| libs/chatchat-server | libs workspace | 59 |
| libs/python-sdk | libs workspace | 36 |
| docs | documentation surface | 25 |
| .github | ci surface | 1 |
| docker | documentation surface | 1 |
| libs | source boundary | 1 |
| markdown_docs | documentation surface | 1 |
| tools | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | langchain |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | express |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| container | [docker/docker-compose.yaml](../../../../sources/chatchat-space__Langchain-Chatchat/docker/docker-compose.yaml) | container signal |
| container | [docker/Dockerfile](../../../../sources/chatchat-space__Langchain-Chatchat/docker/Dockerfile) | container signal |
| config | [pyproject.toml](../../../../sources/chatchat-space__Langchain-Chatchat/pyproject.toml) | config signal |
| config | [libs/python-sdk/pyproject.toml](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/pyproject.toml) | config signal |
| config | [libs/chatchat-server/Makefile](../../../../sources/chatchat-space__Langchain-Chatchat/libs/chatchat-server/Makefile) | config signal |
| config | [libs/chatchat-server/pyproject.toml](../../../../sources/chatchat-space__Langchain-Chatchat/libs/chatchat-server/pyproject.toml) | config signal |
| ci | [.github/workflows/_integration_test.yml](../../../../sources/chatchat-space__Langchain-Chatchat/.github/workflows/_integration_test.yml) | ci signal |
| ci | [.github/workflows/_release.yml](../../../../sources/chatchat-space__Langchain-Chatchat/.github/workflows/_release.yml) | ci signal |
| ci | [.github/workflows/_test_release.yml](../../../../sources/chatchat-space__Langchain-Chatchat/.github/workflows/_test_release.yml) | ci signal |
| ci | [.github/workflows/_test.yml](../../../../sources/chatchat-space__Langchain-Chatchat/.github/workflows/_test.yml) | ci signal |
| eval | [libs/python-sdk/tests/__init__.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/tests/__init__.py) | eval support |
| eval | [libs/python-sdk/tests/chat_test.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/tests/chat_test.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 92 | [tools/model_loaders/xinference_manager.py](../../../../sources/chatchat-space__Langchain-Chatchat/tools/model_loaders/xinference_manager.py)<br>[tools/autodl_start_script/download_model.sh](../../../../sources/chatchat-space__Langchain-Chatchat/tools/autodl_start_script/download_model.sh)<br>[tools/autodl_start_script/model_registrations_emb.sh](../../../../sources/chatchat-space__Langchain-Chatchat/tools/autodl_start_script/model_registrations_emb.sh)<br>[tools/autodl_start_script/model_registrations.sh](../../../../sources/chatchat-space__Langchain-Chatchat/tools/autodl_start_script/model_registrations.sh)<br>[tools/autodl_start_script/start_chatchat.sh](../../../../sources/chatchat-space__Langchain-Chatchat/tools/autodl_start_script/start_chatchat.sh)<br>[tools/autodl_start_script/start_models_emb.sh](../../../../sources/chatchat-space__Langchain-Chatchat/tools/autodl_start_script/start_models_emb.sh)<br>[tools/autodl_start_script/start_models.sh](../../../../sources/chatchat-space__Langchain-Chatchat/tools/autodl_start_script/start_models.sh)<br>[tools/autodl_start_script/start_xinference.sh](../../../../sources/chatchat-space__Langchain-Chatchat/tools/autodl_start_script/start_xinference.sh) |
| mcp | 11 | [libs/chatchat-server/tests/unit_tests/test_mcp_prompts.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/chatchat-server/tests/unit_tests/test_mcp_prompts.py)<br>[libs/chatchat-server/tests/integration_tests/mcp_platform_tools/math_server.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/chatchat-server/tests/integration_tests/mcp_platform_tools/math_server.py)<br>[libs/chatchat-server/tests/integration_tests/mcp_platform_tools/test_mcp_platform_tools.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/chatchat-server/tests/integration_tests/mcp_platform_tools/test_mcp_platform_tools.py)<br>[libs/chatchat-server/langchain_chatchat/agent_toolkits/mcp_kit/client.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/chatchat-server/langchain_chatchat/agent_toolkits/mcp_kit/client.py)<br>[libs/chatchat-server/langchain_chatchat/agent_toolkits/mcp_kit/prompts.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/chatchat-server/langchain_chatchat/agent_toolkits/mcp_kit/prompts.py)<br>[libs/chatchat-server/langchain_chatchat/agent_toolkits/mcp_kit/tools.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/chatchat-server/langchain_chatchat/agent_toolkits/mcp_kit/tools.py)<br>[libs/chatchat-server/chatchat/webui_pages/mcp/__init__.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/chatchat-server/chatchat/webui_pages/mcp/__init__.py)<br>[libs/chatchat-server/chatchat/webui_pages/mcp/dialogue.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/chatchat-server/chatchat/webui_pages/mcp/dialogue.py) |
| retrieval | 119 | [markdown_docs/webui_pages/knowledge_base/knowledge_base.md](../../../../sources/chatchat-space__Langchain-Chatchat/markdown_docs/webui_pages/knowledge_base/knowledge_base.md)<br>[markdown_docs/server/memory/conversation_db_buffer_memory.md](../../../../sources/chatchat-space__Langchain-Chatchat/markdown_docs/server/memory/conversation_db_buffer_memory.md)<br>[markdown_docs/server/knowledge_base/kb_api.md](../../../../sources/chatchat-space__Langchain-Chatchat/markdown_docs/server/knowledge_base/kb_api.md)<br>[markdown_docs/server/knowledge_base/kb_doc_api.md](../../../../sources/chatchat-space__Langchain-Chatchat/markdown_docs/server/knowledge_base/kb_doc_api.md)<br>[markdown_docs/server/knowledge_base/kb_summary_api.md](../../../../sources/chatchat-space__Langchain-Chatchat/markdown_docs/server/knowledge_base/kb_summary_api.md)<br>[markdown_docs/server/knowledge_base/migrate.md](../../../../sources/chatchat-space__Langchain-Chatchat/markdown_docs/server/knowledge_base/migrate.md)<br>[markdown_docs/server/knowledge_base/utils.md](../../../../sources/chatchat-space__Langchain-Chatchat/markdown_docs/server/knowledge_base/utils.md)<br>[markdown_docs/server/knowledge_base/model/kb_document_model.md](../../../../sources/chatchat-space__Langchain-Chatchat/markdown_docs/server/knowledge_base/model/kb_document_model.md) |
| spec | 0 | not obvious |
| eval | 50 | [libs/python-sdk/tests/__init__.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/tests/__init__.py)<br>[libs/python-sdk/tests/chat_test.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/tests/chat_test.py)<br>[libs/python-sdk/tests/kb_test.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/tests/kb_test.py)<br>[libs/python-sdk/tests/server_test.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/tests/server_test.py)<br>[libs/python-sdk/tests/standard_openai_test.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/tests/standard_openai_test.py)<br>[libs/python-sdk/tests/tools_test.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/tests/tools_test.py)<br>[libs/python-sdk/tests/装饰器声明请求_test.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/tests/装饰器声明请求_test.py)<br>[libs/python-sdk/tests/装饰器声明请求_test1.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/tests/装饰器声明请求_test1.py) |
| security | 0 | not obvious |
| ci | 7 | [.github/workflows/_integration_test.yml](../../../../sources/chatchat-space__Langchain-Chatchat/.github/workflows/_integration_test.yml)<br>[.github/workflows/_release.yml](../../../../sources/chatchat-space__Langchain-Chatchat/.github/workflows/_release.yml)<br>[.github/workflows/_test_release.yml](../../../../sources/chatchat-space__Langchain-Chatchat/.github/workflows/_test_release.yml)<br>[.github/workflows/_test.yml](../../../../sources/chatchat-space__Langchain-Chatchat/.github/workflows/_test.yml)<br>[.github/workflows/close-issue.yml](../../../../sources/chatchat-space__Langchain-Chatchat/.github/workflows/close-issue.yml)<br>[.github/workflows/docker-build.yaml](../../../../sources/chatchat-space__Langchain-Chatchat/.github/workflows/docker-build.yaml)<br>[.github/workflows/label_ad_issue.yml](../../../../sources/chatchat-space__Langchain-Chatchat/.github/workflows/label_ad_issue.yml) |
| container | 2 | [docker/docker-compose.yaml](../../../../sources/chatchat-space__Langchain-Chatchat/docker/docker-compose.yaml)<br>[docker/Dockerfile](../../../../sources/chatchat-space__Langchain-Chatchat/docker/Dockerfile) |
| instruction | 1 | [markdown_docs/server/model_workers/gemini.md](../../../../sources/chatchat-space__Langchain-Chatchat/markdown_docs/server/model_workers/gemini.md) |
| docs | 59 | [README_en.md](../../../../sources/chatchat-space__Langchain-Chatchat/README_en.md)<br>[README.md](../../../../sources/chatchat-space__Langchain-Chatchat/README.md)<br>[libs/python-sdk/open_chatcaht/types/knowledge_base/doc/__init__.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/open_chatcaht/types/knowledge_base/doc/__init__.py)<br>[libs/python-sdk/open_chatcaht/types/knowledge_base/doc/delete_kb_docs_param.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/open_chatcaht/types/knowledge_base/doc/delete_kb_docs_param.py)<br>[libs/python-sdk/open_chatcaht/types/knowledge_base/doc/download_kb_doc_param.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/open_chatcaht/types/knowledge_base/doc/download_kb_doc_param.py)<br>[libs/python-sdk/open_chatcaht/types/knowledge_base/doc/list_kb_docs_file_param.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/open_chatcaht/types/knowledge_base/doc/list_kb_docs_file_param.py)<br>[libs/python-sdk/open_chatcaht/types/knowledge_base/doc/search_kb_docs_param.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/open_chatcaht/types/knowledge_base/doc/search_kb_docs_param.py)<br>[libs/python-sdk/open_chatcaht/types/knowledge_base/doc/search_temp_docs_param.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/open_chatcaht/types/knowledge_base/doc/search_temp_docs_param.py) |
| config | 4 | [pyproject.toml](../../../../sources/chatchat-space__Langchain-Chatchat/pyproject.toml)<br>[libs/python-sdk/pyproject.toml](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/pyproject.toml)<br>[libs/chatchat-server/Makefile](../../../../sources/chatchat-space__Langchain-Chatchat/libs/chatchat-server/Makefile)<br>[libs/chatchat-server/pyproject.toml](../../../../sources/chatchat-space__Langchain-Chatchat/libs/chatchat-server/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 50 | [libs/python-sdk/tests/__init__.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/tests/__init__.py)<br>[libs/python-sdk/tests/chat_test.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/tests/chat_test.py)<br>[libs/python-sdk/tests/kb_test.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/tests/kb_test.py)<br>[libs/python-sdk/tests/server_test.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/tests/server_test.py)<br>[libs/python-sdk/tests/standard_openai_test.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/tests/standard_openai_test.py)<br>[libs/python-sdk/tests/tools_test.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/tests/tools_test.py) |
| CI workflows | 7 | [.github/workflows/_integration_test.yml](../../../../sources/chatchat-space__Langchain-Chatchat/.github/workflows/_integration_test.yml)<br>[.github/workflows/_release.yml](../../../../sources/chatchat-space__Langchain-Chatchat/.github/workflows/_release.yml)<br>[.github/workflows/_test_release.yml](../../../../sources/chatchat-space__Langchain-Chatchat/.github/workflows/_test_release.yml)<br>[.github/workflows/_test.yml](../../../../sources/chatchat-space__Langchain-Chatchat/.github/workflows/_test.yml)<br>[.github/workflows/close-issue.yml](../../../../sources/chatchat-space__Langchain-Chatchat/.github/workflows/close-issue.yml)<br>[.github/workflows/docker-build.yaml](../../../../sources/chatchat-space__Langchain-Chatchat/.github/workflows/docker-build.yaml) |
| Containers / deploy | 2 | [docker/docker-compose.yaml](../../../../sources/chatchat-space__Langchain-Chatchat/docker/docker-compose.yaml)<br>[docker/Dockerfile](../../../../sources/chatchat-space__Langchain-Chatchat/docker/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [markdown_docs/server/model_workers/gemini.md](../../../../sources/chatchat-space__Langchain-Chatchat/markdown_docs/server/model_workers/gemini.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `docker/docker-compose.yaml`, `docker/Dockerfile`, `pyproject.toml`.
2. Map agent/tool runtime through: `tools/model_loaders/xinference_manager.py`, `tools/autodl_start_script/download_model.sh`, `tools/autodl_start_script/model_registrations_emb.sh`.
3. Inspect retrieval/memory/indexing through: `markdown_docs/webui_pages/knowledge_base/knowledge_base.md`, `markdown_docs/server/memory/conversation_db_buffer_memory.md`, `markdown_docs/server/knowledge_base/kb_api.md`.
4. Verify behavior through test/eval files: `libs/python-sdk/tests/__init__.py`, `libs/python-sdk/tests/chat_test.py`, `libs/python-sdk/tests/kb_test.py`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 Langchain Chatchat（原Langchain ChatGLM）基于 Langchain 与 ChatGLM, Qwen 与 Llama 等语言模型的 RAG 与 Agent 应用 Langchain Chatchat form. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, langchain, ci이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
