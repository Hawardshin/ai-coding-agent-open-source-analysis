# langroid/langroid 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Harness LLMs with Multi-Agent Programming

## 요약

- 조사 단위: `sources/langroid__langroid` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 723 files, 95 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/main/test_concurrent_rag_simple.py, tests/main/test_vector_stores.py, tests/extras/test_hf_vector_stores.py이고, 의존성 단서는 openai, mcp, pydantic, typer, torch, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | langroid/langroid |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 4040 |
| Forks | 376 |
| License | MIT |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/langroid__langroid](../../../../sources/langroid__langroid) |
| 기존 보고서 | [reports/llm-wiki/repositories/langroid__langroid.md](../../../llm-wiki/repositories/langroid__langroid.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 723 / 95 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .chainlit, .claude-plugin, .github, ai-instructions, ai-notes, docs, examples, issues, langroid, plugins, public, release-notes, scripts, tests |
| 상위 확장자 | .py: 432, .md: 147, .png: 44, .txt: 17, .yml: 11, .json: 10, (none): 9, .pdf: 8, .ipynb: 6, .csv: 5, .toml: 4, .gif: 3 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 55 |
| docs | documentation surface | 31 |
| examples/mcp | examples workspace | 16 |
| examples/docqa | examples workspace | 11 |
| examples/chainlit | examples workspace | 3 |
| examples/langdb | examples workspace | 3 |
| examples/portkey | examples workspace | 3 |
| examples/basic | examples workspace | 2 |
| examples/multi-agent-debate | examples workspace | 2 |
| .github | ci surface | 1 |
| ai-instructions | top-level component | 1 |
| ai-notes | top-level component | 1 |
| examples | top-level component | 1 |
| examples/extract | examples workspace | 1 |
| examples/kg-chat | examples workspace | 1 |
| examples/README.md | examples workspace | 1 |
| issues | top-level component | 1 |
| langroid | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | setup | make setup |
| utility | Makefile | update | make update |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | type-check | make type-check |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | lint | make lint |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | stubs | make stubs |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | tests | make tests |
| utility | Makefile | docs | make docs |
| utility | Makefile | nodocs | make nodocs |
| utility | Makefile | loc | make loc |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | repomix | make repomix |
| test | Makefile | repomix-no-tests | make repomix-no-tests |
| test | Makefile | repomix-no-tests-no-examples | make repomix-no-tests-no-examples |
| utility | Makefile | repomix-all | make repomix-all |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | chroma, qdrant, weaviate, pgvector |
| modelRuntime | torch, transformers |
| webRuntime | 없음 |
| developerSurface | typer |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [tests/main/test_concurrent_rag_simple.py](../../../../sources/langroid__langroid/tests/main/test_concurrent_rag_simple.py) | retrieval signal |
| retrieval | [tests/main/test_vector_stores.py](../../../../sources/langroid__langroid/tests/main/test_vector_stores.py) | retrieval signal |
| retrieval | [tests/extras/test_hf_vector_stores.py](../../../../sources/langroid__langroid/tests/extras/test_hf_vector_stores.py) | retrieval signal |
| retrieval | [tests/extras/test_llamacpp_embedding_formats.py](../../../../sources/langroid__langroid/tests/extras/test_llamacpp_embedding_formats.py) | retrieval signal |
| entrypoints | [langroid/pydantic_v1/main.py](../../../../sources/langroid__langroid/langroid/pydantic_v1/main.py) | entrypoints signal |
| entrypoints | [examples/multi-agent-debate/main.py](../../../../sources/langroid__langroid/examples/multi-agent-debate/main.py) | entrypoints signal |
| entrypoints | [examples/basic/multi-agent-search-critic-no-orch/main.py](../../../../sources/langroid__langroid/examples/basic/multi-agent-search-critic-no-orch/main.py) | entrypoints signal |
| entrypoints | [examples/basic/multi-agent-search-critic/main.py](../../../../sources/langroid__langroid/examples/basic/multi-agent-search-critic/main.py) | entrypoints signal |
| docs | [mkdocs.yml](../../../../sources/langroid__langroid/mkdocs.yml) | docs signal |
| docs | [README.md](../../../../sources/langroid__langroid/README.md) | docs signal |
| docs | [tests/README.md](../../../../sources/langroid__langroid/tests/README.md) | docs signal |
| docs | [tests/main/mcp/weather-server-python/README.md](../../../../sources/langroid__langroid/tests/main/mcp/weather-server-python/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [langroid/pydantic_v1/main.py](../../../../sources/langroid__langroid/langroid/pydantic_v1/main.py)<br>[examples/multi-agent-debate/main.py](../../../../sources/langroid__langroid/examples/multi-agent-debate/main.py)<br>[examples/basic/multi-agent-search-critic-no-orch/main.py](../../../../sources/langroid__langroid/examples/basic/multi-agent-search-critic-no-orch/main.py)<br>[examples/basic/multi-agent-search-critic/main.py](../../../../sources/langroid__langroid/examples/basic/multi-agent-search-critic/main.py) |
| agentRuntime | 81 | [plugins/langroid/skills/patterns/agent-handler-validation-with-state.md](../../../../sources/langroid__langroid/plugins/langroid/skills/patterns/agent-handler-validation-with-state.md)<br>[plugins/langroid/skills/patterns/agent-tool-handler-with-state.md](../../../../sources/langroid__langroid/plugins/langroid/skills/patterns/agent-tool-handler-with-state.md)<br>[plugins/langroid/skills/patterns/done-sequences-specific-tool.md](../../../../sources/langroid__langroid/plugins/langroid/skills/patterns/done-sequences-specific-tool.md)<br>[plugins/langroid/skills/patterns/mcp-tool-integration.md](../../../../sources/langroid__langroid/plugins/langroid/skills/patterns/mcp-tool-integration.md)<br>[plugins/langroid/skills/patterns/quiet-mode.md](../../../../sources/langroid__langroid/plugins/langroid/skills/patterns/quiet-mode.md)<br>[plugins/langroid/skills/patterns/run-batch-tasks.md](../../../../sources/langroid__langroid/plugins/langroid/skills/patterns/run-batch-tasks.md)<br>[plugins/langroid/skills/patterns/SKILL.md](../../../../sources/langroid__langroid/plugins/langroid/skills/patterns/SKILL.md)<br>[plugins/langroid/skills/patterns/task-return-tool.md](../../../../sources/langroid__langroid/plugins/langroid/skills/patterns/task-return-tool.md) |
| mcp | 26 | [tests/main/test_mcp_tools.py](../../../../sources/langroid__langroid/tests/main/test_mcp_tools.py)<br>[tests/main/mcp/weather-server-python/pyproject.toml](../../../../sources/langroid__langroid/tests/main/mcp/weather-server-python/pyproject.toml)<br>[tests/main/mcp/weather-server-python/README.md](../../../../sources/langroid__langroid/tests/main/mcp/weather-server-python/README.md)<br>[tests/main/mcp/weather-server-python/uv.lock](../../../../sources/langroid__langroid/tests/main/mcp/weather-server-python/uv.lock)<br>[tests/main/mcp/weather-server-python/weather.py](../../../../sources/langroid__langroid/tests/main/mcp/weather-server-python/weather.py)<br>[plugins/langroid/skills/patterns/mcp-tool-integration.md](../../../../sources/langroid__langroid/plugins/langroid/skills/patterns/mcp-tool-integration.md)<br>[langroid/agent/tools/mcp/__init__.py](../../../../sources/langroid__langroid/langroid/agent/tools/mcp/__init__.py)<br>[langroid/agent/tools/mcp/decorators.py](../../../../sources/langroid__langroid/langroid/agent/tools/mcp/decorators.py) |
| retrieval | 46 | [tests/main/test_concurrent_rag_simple.py](../../../../sources/langroid__langroid/tests/main/test_concurrent_rag_simple.py)<br>[tests/main/test_vector_stores.py](../../../../sources/langroid__langroid/tests/main/test_vector_stores.py)<br>[tests/extras/test_hf_vector_stores.py](../../../../sources/langroid__langroid/tests/extras/test_hf_vector_stores.py)<br>[tests/extras/test_llamacpp_embedding_formats.py](../../../../sources/langroid__langroid/tests/extras/test_llamacpp_embedding_formats.py)<br>[langroid/vector_store/__init__.py](../../../../sources/langroid__langroid/langroid/vector_store/__init__.py)<br>[langroid/vector_store/base.py](../../../../sources/langroid__langroid/langroid/vector_store/base.py)<br>[langroid/vector_store/chromadb.py](../../../../sources/langroid__langroid/langroid/vector_store/chromadb.py)<br>[langroid/vector_store/lancedb.py](../../../../sources/langroid__langroid/langroid/vector_store/lancedb.py) |
| spec | 6 | [issues/qdrant-lock-issue-spec-changes.md](../../../../sources/langroid__langroid/issues/qdrant-lock-issue-spec-changes.md)<br>[examples/portkey/requirements.txt](../../../../sources/langroid__langroid/examples/portkey/requirements.txt)<br>[examples/langdb/requirements.txt](../../../../sources/langroid__langroid/examples/langdb/requirements.txt)<br>[examples/docqa/streamlit-app/requirements.txt](../../../../sources/langroid__langroid/examples/docqa/streamlit-app/requirements.txt)<br>[docs/blog/posts/langroid-architecture.md](../../../../sources/langroid__langroid/docs/blog/posts/langroid-architecture.md)<br>[.github/workflows/requirements-torch.txt](../../../../sources/langroid__langroid/.github/workflows/requirements-torch.txt) |
| eval | 151 | [llms-no-tests-compressed.txt](../../../../sources/langroid__langroid/llms-no-tests-compressed.txt)<br>[llms-no-tests-no-examples-compressed.txt](../../../../sources/langroid__langroid/llms-no-tests-no-examples-compressed.txt)<br>[llms-no-tests-no-examples.txt](../../../../sources/langroid__langroid/llms-no-tests-no-examples.txt)<br>[llms-no-tests.txt](../../../../sources/langroid__langroid/llms-no-tests.txt)<br>[tests/__init__.py](../../../../sources/langroid__langroid/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/langroid__langroid/tests/conftest.py)<br>[tests/README.md](../../../../sources/langroid__langroid/tests/README.md)<br>[tests/test_pdf_parser_extra.py](../../../../sources/langroid__langroid/tests/test_pdf_parser_extra.py) |
| security | 3 | [SECURITY.md](../../../../sources/langroid__langroid/SECURITY.md)<br>[tests/main/test_handle_message_security.py](../../../../sources/langroid__langroid/tests/main/test_handle_message_security.py)<br>[tests/main/sql_chat/test_sql_chat_security.py](../../../../sources/langroid__langroid/tests/main/sql_chat/test_sql_chat_security.py) |
| ci | 6 | [.github/workflows/docker-publish.yml](../../../../sources/langroid__langroid/.github/workflows/docker-publish.yml)<br>[.github/workflows/mkdocs-deploy.yml](../../../../sources/langroid__langroid/.github/workflows/mkdocs-deploy.yml)<br>[.github/workflows/pytest-subset.yml](../../../../sources/langroid__langroid/.github/workflows/pytest-subset.yml)<br>[.github/workflows/pytest.yml](../../../../sources/langroid__langroid/.github/workflows/pytest.yml)<br>[.github/workflows/requirements-torch.txt](../../../../sources/langroid__langroid/.github/workflows/requirements-torch.txt)<br>[.github/workflows/validate.yml](../../../../sources/langroid__langroid/.github/workflows/validate.yml) |
| container | 4 | [Dockerfile](../../../../sources/langroid__langroid/Dockerfile)<br>[tests/main/docker-compose-arango.yml](../../../../sources/langroid__langroid/tests/main/docker-compose-arango.yml)<br>[tests/main/docker-compose-neo4j.yml](../../../../sources/langroid__langroid/tests/main/docker-compose-neo4j.yml)<br>[tests/main/docker-compose-weaviate.yml](../../../../sources/langroid__langroid/tests/main/docker-compose-weaviate.yml) |
| instruction | 2 | [CLAUDE.md](../../../../sources/langroid__langroid/CLAUDE.md)<br>[docs/notes/gemini.md](../../../../sources/langroid__langroid/docs/notes/gemini.md) |
| docs | 133 | [mkdocs.yml](../../../../sources/langroid__langroid/mkdocs.yml)<br>[README.md](../../../../sources/langroid__langroid/README.md)<br>[tests/README.md](../../../../sources/langroid__langroid/tests/README.md)<br>[tests/main/mcp/weather-server-python/README.md](../../../../sources/langroid__langroid/tests/main/mcp/weather-server-python/README.md)<br>[examples/README.md](../../../../sources/langroid__langroid/examples/README.md)<br>[examples/portkey/README.md](../../../../sources/langroid__langroid/examples/portkey/README.md)<br>[examples/multi-agent-debate/README.md](../../../../sources/langroid__langroid/examples/multi-agent-debate/README.md)<br>[examples/langdb/README.md](../../../../sources/langroid__langroid/examples/langdb/README.md) |
| config | 9 | [Makefile](../../../../sources/langroid__langroid/Makefile)<br>[pyproject.toml](../../../../sources/langroid__langroid/pyproject.toml)<br>[uv.lock](../../../../sources/langroid__langroid/uv.lock)<br>[tests/main/mcp/weather-server-python/pyproject.toml](../../../../sources/langroid__langroid/tests/main/mcp/weather-server-python/pyproject.toml)<br>[tests/main/mcp/weather-server-python/uv.lock](../../../../sources/langroid__langroid/tests/main/mcp/weather-server-python/uv.lock)<br>[examples/portkey/requirements.txt](../../../../sources/langroid__langroid/examples/portkey/requirements.txt)<br>[examples/langdb/requirements.txt](../../../../sources/langroid__langroid/examples/langdb/requirements.txt)<br>[examples/docqa/streamlit-app/requirements.txt](../../../../sources/langroid__langroid/examples/docqa/streamlit-app/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 151 | [llms-no-tests-compressed.txt](../../../../sources/langroid__langroid/llms-no-tests-compressed.txt)<br>[llms-no-tests-no-examples-compressed.txt](../../../../sources/langroid__langroid/llms-no-tests-no-examples-compressed.txt)<br>[llms-no-tests-no-examples.txt](../../../../sources/langroid__langroid/llms-no-tests-no-examples.txt)<br>[llms-no-tests.txt](../../../../sources/langroid__langroid/llms-no-tests.txt)<br>[tests/__init__.py](../../../../sources/langroid__langroid/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/langroid__langroid/tests/conftest.py) |
| CI workflow | 6 | [.github/workflows/docker-publish.yml](../../../../sources/langroid__langroid/.github/workflows/docker-publish.yml)<br>[.github/workflows/mkdocs-deploy.yml](../../../../sources/langroid__langroid/.github/workflows/mkdocs-deploy.yml)<br>[.github/workflows/pytest-subset.yml](../../../../sources/langroid__langroid/.github/workflows/pytest-subset.yml)<br>[.github/workflows/pytest.yml](../../../../sources/langroid__langroid/.github/workflows/pytest.yml)<br>[.github/workflows/requirements-torch.txt](../../../../sources/langroid__langroid/.github/workflows/requirements-torch.txt)<br>[.github/workflows/validate.yml](../../../../sources/langroid__langroid/.github/workflows/validate.yml) |
| 컨테이너/배포 | 4 | [Dockerfile](../../../../sources/langroid__langroid/Dockerfile)<br>[tests/main/docker-compose-arango.yml](../../../../sources/langroid__langroid/tests/main/docker-compose-arango.yml)<br>[tests/main/docker-compose-neo4j.yml](../../../../sources/langroid__langroid/tests/main/docker-compose-neo4j.yml)<br>[tests/main/docker-compose-weaviate.yml](../../../../sources/langroid__langroid/tests/main/docker-compose-weaviate.yml) |
| 보안/정책 | 3 | [SECURITY.md](../../../../sources/langroid__langroid/SECURITY.md)<br>[tests/main/test_handle_message_security.py](../../../../sources/langroid__langroid/tests/main/test_handle_message_security.py)<br>[tests/main/sql_chat/test_sql_chat_security.py](../../../../sources/langroid__langroid/tests/main/sql_chat/test_sql_chat_security.py) |
| 에이전트 지시문 | 2 | [CLAUDE.md](../../../../sources/langroid__langroid/CLAUDE.md)<br>[docs/notes/gemini.md](../../../../sources/langroid__langroid/docs/notes/gemini.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/main/test_concurrent_rag_simple.py`, `tests/main/test_vector_stores.py`, `tests/extras/test_hf_vector_stores.py`.
2. entrypoint를 따라 실행 흐름 확인: `langroid/pydantic_v1/main.py`, `examples/multi-agent-debate/main.py`, `examples/basic/multi-agent-search-critic-no-orch/main.py`.
3. agent/tool runtime 매핑: `plugins/langroid/skills/patterns/agent-handler-validation-with-state.md`, `plugins/langroid/skills/patterns/agent-tool-handler-with-state.md`, `plugins/langroid/skills/patterns/done-sequences-specific-tool.md`.
4. retrieval/memory/indexing 확인: `tests/main/test_concurrent_rag_simple.py`, `tests/main/test_vector_stores.py`, `tests/extras/test_hf_vector_stores.py`.
5. test/eval 파일로 동작 검증: `llms-no-tests-compressed.txt`, `llms-no-tests-no-examples-compressed.txt`, `llms-no-tests-no-examples.txt`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Harness LLMs with Multi Agent Programming. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, Makefile, README.md, CLAUDE.md이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
