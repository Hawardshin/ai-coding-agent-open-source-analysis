# chatchat-space/Langchain-Chatchat 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Langchain-Chatchat（原Langchain-ChatGLM）基于 Langchain 与 ChatGLM, Qwen 与 Llama 等语言模型的 RAG 与 Agent 应用 | Langchain-Chatchat (formerly langchain-ChatGLM), local knowledge based LLM (like ChatGLM, Qwen and Llama) RAG and Agent app with langchain

## 요약

- 조사 단위: `sources/chatchat-space__Langchain-Chatchat` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 523 files, 138 directories, depth score 102, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 container=docker/docker-compose.yaml, docker/Dockerfile이고, 의존성 단서는 langchain, express, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | chatchat-space/Langchain-Chatchat |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | korea |
| Language | Python |
| Stars | 38186 |
| Forks | 6218 |
| License | Apache-2.0 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/chatchat-space__Langchain-Chatchat](../../../../sources/chatchat-space__Langchain-Chatchat) |
| 기존 보고서 | [reports/llm-wiki/repositories/chatchat-space__Langchain-Chatchat.md](../../../llm-wiki/repositories/chatchat-space__Langchain-Chatchat.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 523 / 138 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .github, docker, docs, libs, markdown_docs, tools |
| 상위 확장자 | .py: 281, .md: 115, .pickle: 39, .jpg: 16, .png: 16, (none): 12, .sh: 10, .yml: 7, .toml: 6, .svg: 4, .txt: 3, .csv: 2 |
| 소스 패턴 | api/server, agent/tool runtime, retrieval/vector path, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| libs/chatchat-server | libs workspace | 59 |
| libs/python-sdk | libs workspace | 36 |
| docs | documentation surface | 25 |
| .github | ci surface | 1 |
| docker | documentation surface | 1 |
| libs | source boundary | 1 |
| markdown_docs | documentation surface | 1 |
| tools | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | langchain |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | express |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 92 | [tools/model_loaders/xinference_manager.py](../../../../sources/chatchat-space__Langchain-Chatchat/tools/model_loaders/xinference_manager.py)<br>[tools/autodl_start_script/download_model.sh](../../../../sources/chatchat-space__Langchain-Chatchat/tools/autodl_start_script/download_model.sh)<br>[tools/autodl_start_script/model_registrations_emb.sh](../../../../sources/chatchat-space__Langchain-Chatchat/tools/autodl_start_script/model_registrations_emb.sh)<br>[tools/autodl_start_script/model_registrations.sh](../../../../sources/chatchat-space__Langchain-Chatchat/tools/autodl_start_script/model_registrations.sh)<br>[tools/autodl_start_script/start_chatchat.sh](../../../../sources/chatchat-space__Langchain-Chatchat/tools/autodl_start_script/start_chatchat.sh)<br>[tools/autodl_start_script/start_models_emb.sh](../../../../sources/chatchat-space__Langchain-Chatchat/tools/autodl_start_script/start_models_emb.sh)<br>[tools/autodl_start_script/start_models.sh](../../../../sources/chatchat-space__Langchain-Chatchat/tools/autodl_start_script/start_models.sh)<br>[tools/autodl_start_script/start_xinference.sh](../../../../sources/chatchat-space__Langchain-Chatchat/tools/autodl_start_script/start_xinference.sh) |
| mcp | 11 | [libs/chatchat-server/tests/unit_tests/test_mcp_prompts.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/chatchat-server/tests/unit_tests/test_mcp_prompts.py)<br>[libs/chatchat-server/tests/integration_tests/mcp_platform_tools/math_server.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/chatchat-server/tests/integration_tests/mcp_platform_tools/math_server.py)<br>[libs/chatchat-server/tests/integration_tests/mcp_platform_tools/test_mcp_platform_tools.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/chatchat-server/tests/integration_tests/mcp_platform_tools/test_mcp_platform_tools.py)<br>[libs/chatchat-server/langchain_chatchat/agent_toolkits/mcp_kit/client.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/chatchat-server/langchain_chatchat/agent_toolkits/mcp_kit/client.py)<br>[libs/chatchat-server/langchain_chatchat/agent_toolkits/mcp_kit/prompts.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/chatchat-server/langchain_chatchat/agent_toolkits/mcp_kit/prompts.py)<br>[libs/chatchat-server/langchain_chatchat/agent_toolkits/mcp_kit/tools.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/chatchat-server/langchain_chatchat/agent_toolkits/mcp_kit/tools.py)<br>[libs/chatchat-server/chatchat/webui_pages/mcp/__init__.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/chatchat-server/chatchat/webui_pages/mcp/__init__.py)<br>[libs/chatchat-server/chatchat/webui_pages/mcp/dialogue.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/chatchat-server/chatchat/webui_pages/mcp/dialogue.py) |
| retrieval | 119 | [markdown_docs/webui_pages/knowledge_base/knowledge_base.md](../../../../sources/chatchat-space__Langchain-Chatchat/markdown_docs/webui_pages/knowledge_base/knowledge_base.md)<br>[markdown_docs/server/memory/conversation_db_buffer_memory.md](../../../../sources/chatchat-space__Langchain-Chatchat/markdown_docs/server/memory/conversation_db_buffer_memory.md)<br>[markdown_docs/server/knowledge_base/kb_api.md](../../../../sources/chatchat-space__Langchain-Chatchat/markdown_docs/server/knowledge_base/kb_api.md)<br>[markdown_docs/server/knowledge_base/kb_doc_api.md](../../../../sources/chatchat-space__Langchain-Chatchat/markdown_docs/server/knowledge_base/kb_doc_api.md)<br>[markdown_docs/server/knowledge_base/kb_summary_api.md](../../../../sources/chatchat-space__Langchain-Chatchat/markdown_docs/server/knowledge_base/kb_summary_api.md)<br>[markdown_docs/server/knowledge_base/migrate.md](../../../../sources/chatchat-space__Langchain-Chatchat/markdown_docs/server/knowledge_base/migrate.md)<br>[markdown_docs/server/knowledge_base/utils.md](../../../../sources/chatchat-space__Langchain-Chatchat/markdown_docs/server/knowledge_base/utils.md)<br>[markdown_docs/server/knowledge_base/model/kb_document_model.md](../../../../sources/chatchat-space__Langchain-Chatchat/markdown_docs/server/knowledge_base/model/kb_document_model.md) |
| spec | 0 | 명확하지 않음 |
| eval | 50 | [libs/python-sdk/tests/__init__.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/tests/__init__.py)<br>[libs/python-sdk/tests/chat_test.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/tests/chat_test.py)<br>[libs/python-sdk/tests/kb_test.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/tests/kb_test.py)<br>[libs/python-sdk/tests/server_test.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/tests/server_test.py)<br>[libs/python-sdk/tests/standard_openai_test.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/tests/standard_openai_test.py)<br>[libs/python-sdk/tests/tools_test.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/tests/tools_test.py)<br>[libs/python-sdk/tests/装饰器声明请求_test.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/tests/装饰器声明请求_test.py)<br>[libs/python-sdk/tests/装饰器声明请求_test1.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/tests/装饰器声明请求_test1.py) |
| security | 0 | 명확하지 않음 |
| ci | 7 | [.github/workflows/_integration_test.yml](../../../../sources/chatchat-space__Langchain-Chatchat/.github/workflows/_integration_test.yml)<br>[.github/workflows/_release.yml](../../../../sources/chatchat-space__Langchain-Chatchat/.github/workflows/_release.yml)<br>[.github/workflows/_test_release.yml](../../../../sources/chatchat-space__Langchain-Chatchat/.github/workflows/_test_release.yml)<br>[.github/workflows/_test.yml](../../../../sources/chatchat-space__Langchain-Chatchat/.github/workflows/_test.yml)<br>[.github/workflows/close-issue.yml](../../../../sources/chatchat-space__Langchain-Chatchat/.github/workflows/close-issue.yml)<br>[.github/workflows/docker-build.yaml](../../../../sources/chatchat-space__Langchain-Chatchat/.github/workflows/docker-build.yaml)<br>[.github/workflows/label_ad_issue.yml](../../../../sources/chatchat-space__Langchain-Chatchat/.github/workflows/label_ad_issue.yml) |
| container | 2 | [docker/docker-compose.yaml](../../../../sources/chatchat-space__Langchain-Chatchat/docker/docker-compose.yaml)<br>[docker/Dockerfile](../../../../sources/chatchat-space__Langchain-Chatchat/docker/Dockerfile) |
| instruction | 1 | [markdown_docs/server/model_workers/gemini.md](../../../../sources/chatchat-space__Langchain-Chatchat/markdown_docs/server/model_workers/gemini.md) |
| docs | 59 | [README_en.md](../../../../sources/chatchat-space__Langchain-Chatchat/README_en.md)<br>[README.md](../../../../sources/chatchat-space__Langchain-Chatchat/README.md)<br>[libs/python-sdk/open_chatcaht/types/knowledge_base/doc/__init__.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/open_chatcaht/types/knowledge_base/doc/__init__.py)<br>[libs/python-sdk/open_chatcaht/types/knowledge_base/doc/delete_kb_docs_param.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/open_chatcaht/types/knowledge_base/doc/delete_kb_docs_param.py)<br>[libs/python-sdk/open_chatcaht/types/knowledge_base/doc/download_kb_doc_param.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/open_chatcaht/types/knowledge_base/doc/download_kb_doc_param.py)<br>[libs/python-sdk/open_chatcaht/types/knowledge_base/doc/list_kb_docs_file_param.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/open_chatcaht/types/knowledge_base/doc/list_kb_docs_file_param.py)<br>[libs/python-sdk/open_chatcaht/types/knowledge_base/doc/search_kb_docs_param.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/open_chatcaht/types/knowledge_base/doc/search_kb_docs_param.py)<br>[libs/python-sdk/open_chatcaht/types/knowledge_base/doc/search_temp_docs_param.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/open_chatcaht/types/knowledge_base/doc/search_temp_docs_param.py) |
| config | 4 | [pyproject.toml](../../../../sources/chatchat-space__Langchain-Chatchat/pyproject.toml)<br>[libs/python-sdk/pyproject.toml](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/pyproject.toml)<br>[libs/chatchat-server/Makefile](../../../../sources/chatchat-space__Langchain-Chatchat/libs/chatchat-server/Makefile)<br>[libs/chatchat-server/pyproject.toml](../../../../sources/chatchat-space__Langchain-Chatchat/libs/chatchat-server/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 50 | [libs/python-sdk/tests/__init__.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/tests/__init__.py)<br>[libs/python-sdk/tests/chat_test.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/tests/chat_test.py)<br>[libs/python-sdk/tests/kb_test.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/tests/kb_test.py)<br>[libs/python-sdk/tests/server_test.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/tests/server_test.py)<br>[libs/python-sdk/tests/standard_openai_test.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/tests/standard_openai_test.py)<br>[libs/python-sdk/tests/tools_test.py](../../../../sources/chatchat-space__Langchain-Chatchat/libs/python-sdk/tests/tools_test.py) |
| CI workflow | 7 | [.github/workflows/_integration_test.yml](../../../../sources/chatchat-space__Langchain-Chatchat/.github/workflows/_integration_test.yml)<br>[.github/workflows/_release.yml](../../../../sources/chatchat-space__Langchain-Chatchat/.github/workflows/_release.yml)<br>[.github/workflows/_test_release.yml](../../../../sources/chatchat-space__Langchain-Chatchat/.github/workflows/_test_release.yml)<br>[.github/workflows/_test.yml](../../../../sources/chatchat-space__Langchain-Chatchat/.github/workflows/_test.yml)<br>[.github/workflows/close-issue.yml](../../../../sources/chatchat-space__Langchain-Chatchat/.github/workflows/close-issue.yml)<br>[.github/workflows/docker-build.yaml](../../../../sources/chatchat-space__Langchain-Chatchat/.github/workflows/docker-build.yaml) |
| 컨테이너/배포 | 2 | [docker/docker-compose.yaml](../../../../sources/chatchat-space__Langchain-Chatchat/docker/docker-compose.yaml)<br>[docker/Dockerfile](../../../../sources/chatchat-space__Langchain-Chatchat/docker/Dockerfile) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [markdown_docs/server/model_workers/gemini.md](../../../../sources/chatchat-space__Langchain-Chatchat/markdown_docs/server/model_workers/gemini.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `docker/docker-compose.yaml`, `docker/Dockerfile`, `pyproject.toml`.
2. agent/tool runtime 매핑: `tools/model_loaders/xinference_manager.py`, `tools/autodl_start_script/download_model.sh`, `tools/autodl_start_script/model_registrations_emb.sh`.
3. retrieval/memory/indexing 확인: `markdown_docs/webui_pages/knowledge_base/knowledge_base.md`, `markdown_docs/server/memory/conversation_db_buffer_memory.md`, `markdown_docs/server/knowledge_base/kb_api.md`.
4. test/eval 파일로 동작 검증: `libs/python-sdk/tests/__init__.py`, `libs/python-sdk/tests/chat_test.py`, `libs/python-sdk/tests/kb_test.py`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 Langchain Chatchat（原Langchain ChatGLM）基于 Langchain 与 ChatGLM, Qwen 与 Llama 等语言模型的 RAG 与 Agent 应用 Langchain Chatchat form. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, langchain, ci이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
