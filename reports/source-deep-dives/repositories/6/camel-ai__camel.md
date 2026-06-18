# camel-ai/camel 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

🐫 CAMEL: The first and the best multi-agent framework. Finding the Scaling Law of Agents. https://www.camel-ai.org

## 요약

- 조사 단위: `sources/camel-ai__camel` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,221 files, 265 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=test/utils/test_mcp_client.py, test/utils/test_mcp_server.py, test/utils/test_mcp.py이고, 의존성 단서는 openai, anthropic, mcp, fastapi, pydantic, typer, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | camel-ai/camel |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 17219 |
| Forks | 1951 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/camel-ai__camel](../../../../sources/camel-ai__camel) |
| 기존 보고서 | [reports/global-trending/repositories/camel-ai__camel.md](../../../global-trending/repositories/camel-ai__camel.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2221 / 265 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .camel, .container, .github, apps, camel, data, docs, examples, licenses, misc, profiling, services, test |
| 상위 확장자 | .py: 1131, .mdx: 524, .md: 155, .png: 154, .rst: 59, .ipynb: 49, .json: 26, .yaml: 18, .yml: 18, .txt: 17, (none): 9, .ts: 8 |
| 소스 패턴 | monorepo/workspace, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| examples/usecases | examples workspace | 47 |
| docs | documentation surface | 33 |
| examples/toolkits | examples workspace | 23 |
| examples/agents | examples workspace | 13 |
| examples/storages | examples workspace | 6 |
| examples/memories | examples workspace | 5 |
| services/agent_mcp | services workspace | 4 |
| examples/runtimes | examples workspace | 3 |
| examples/workforce | examples workspace | 3 |
| apps/dilemma | apps workspace | 2 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| camel | top-level component | 1 |
| data | top-level component | 1 |
| examples | top-level component | 1 |
| examples/debug | examples workspace | 1 |
| examples/knowledge_graph | examples workspace | 1 |
| examples/observability | examples workspace | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | default | make default |
| utility | Makefile | install | make install |
| utility | Makefile | install-editable | make install-editable |
| utility | Makefile | install-e | make install-e |
| utility | Makefile | uninstall | make uninstall |
| build | Makefile | build | make build |
| quality | Makefile | pylint-install | make pylint-install |
| utility | Makefile | flake8-install | make flake8-install |
| quality | Makefile | py-format-install | make py-format-install |
| quality | Makefile | ruff-install | make ruff-install |
| quality | Makefile | mypy-install | make mypy-install |
| utility | Makefile | pre-commit-install | make pre-commit-install |
| utility | Makefile | docs-install | make docs-install |
| test | Makefile | pytest-install | make pytest-install |
| test | Makefile | test-install | make test-install |
| quality | Makefile | pylint | make pylint |
| utility | Makefile | flake8 | make flake8 |
| quality | Makefile | py-format | make py-format |
| quality | Makefile | ruff | make ruff |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | chroma, qdrant, milvus, weaviate, pgvector, faiss |
| modelRuntime | transformers |
| webRuntime | fastapi |
| developerSurface | typer |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [test/utils/test_mcp_client.py](../../../../sources/camel-ai__camel/test/utils/test_mcp_client.py) | mcp signal |
| mcp | [test/utils/test_mcp_server.py](../../../../sources/camel-ai__camel/test/utils/test_mcp_server.py) | mcp signal |
| mcp | [test/utils/test_mcp.py](../../../../sources/camel-ai__camel/test/utils/test_mcp.py) | mcp signal |
| mcp | [test/toolkits/test_mcp_toolkit.py](../../../../sources/camel-ai__camel/test/toolkits/test_mcp_toolkit.py) | mcp signal |
| agentRuntime | [test/memories/context_creators/test_score_based.py](../../../../sources/camel-ai__camel/test/memories/context_creators/test_score_based.py) | agentRuntime signal |
| agentRuntime | [test/agents/test_agent_base.py](../../../../sources/camel-ai__camel/test/agents/test_agent_base.py) | agentRuntime signal |
| agentRuntime | [test/agents/test_agent_e2e.py](../../../../sources/camel-ai__camel/test/agents/test_agent_e2e.py) | agentRuntime signal |
| agentRuntime | [test/agents/test_chat_agent.py](../../../../sources/camel-ai__camel/test/agents/test_chat_agent.py) | agentRuntime signal |
| entrypoints | [camel/toolkits/hybrid_browser_toolkit/ts/src/index.ts](../../../../sources/camel-ai__camel/camel/toolkits/hybrid_browser_toolkit/ts/src/index.ts) | entrypoints signal |
| instruction | [docs/mintlify/key_modules/agents.mdx](../../../../sources/camel-ai__camel/docs/mintlify/key_modules/agents.mdx) | instruction signal |
| instruction | [docs/key_modules/agents.md](../../../../sources/camel-ai__camel/docs/key_modules/agents.md) | instruction signal |
| config | [Makefile](../../../../sources/camel-ai__camel/Makefile) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [camel/toolkits/hybrid_browser_toolkit/ts/src/index.ts](../../../../sources/camel-ai__camel/camel/toolkits/hybrid_browser_toolkit/ts/src/index.ts) |
| agentRuntime | 142 | [test/memories/context_creators/test_score_based.py](../../../../sources/camel-ai__camel/test/memories/context_creators/test_score_based.py)<br>[test/agents/test_agent_base.py](../../../../sources/camel-ai__camel/test/agents/test_agent_base.py)<br>[test/agents/test_agent_e2e.py](../../../../sources/camel-ai__camel/test/agents/test_agent_e2e.py)<br>[test/agents/test_chat_agent.py](../../../../sources/camel-ai__camel/test/agents/test_chat_agent.py)<br>[test/agents/test_critic_agent.py](../../../../sources/camel-ai__camel/test/agents/test_critic_agent.py)<br>[test/agents/test_knowledge_agent.py](../../../../sources/camel-ai__camel/test/agents/test_knowledge_agent.py)<br>[test/agents/test_mcp_agent.py](../../../../sources/camel-ai__camel/test/agents/test_mcp_agent.py)<br>[test/agents/test_openai_responses_api_e2e.py](../../../../sources/camel-ai__camel/test/agents/test_openai_responses_api_e2e.py) |
| mcp | 109 | [test/utils/test_mcp_client.py](../../../../sources/camel-ai__camel/test/utils/test_mcp_client.py)<br>[test/utils/test_mcp_server.py](../../../../sources/camel-ai__camel/test/utils/test_mcp_server.py)<br>[test/utils/test_mcp.py](../../../../sources/camel-ai__camel/test/utils/test_mcp.py)<br>[test/toolkits/test_mcp_toolkit.py](../../../../sources/camel-ai__camel/test/toolkits/test_mcp_toolkit.py)<br>[test/services/test_agent_mcp_server.py](../../../../sources/camel-ai__camel/test/services/test_agent_mcp_server.py)<br>[test/agents/test_mcp_agent.py](../../../../sources/camel-ai__camel/test/agents/test_mcp_agent.py)<br>[services/agent_mcp/agent_config.py](../../../../sources/camel-ai__camel/services/agent_mcp/agent_config.py)<br>[services/agent_mcp/agent_mcp_server.py](../../../../sources/camel-ai__camel/services/agent_mcp/agent_mcp_server.py) |
| retrieval | 136 | [test/workforce/test_workflow_memory.py](../../../../sources/camel-ai__camel/test/workforce/test_workflow_memory.py)<br>[test/toolkits/test_memory_toolkit.py](../../../../sources/camel-ai__camel/test/toolkits/test_memory_toolkit.py)<br>[test/storages/vector_storages/test_all_vectordbs.py](../../../../sources/camel-ai__camel/test/storages/vector_storages/test_all_vectordbs.py)<br>[test/storages/vector_storages/test_faiss.py](../../../../sources/camel-ai__camel/test/storages/vector_storages/test_faiss.py)<br>[test/storages/vector_storages/test_milvus.py](../../../../sources/camel-ai__camel/test/storages/vector_storages/test_milvus.py)<br>[test/storages/vector_storages/test_oceanbase.py](../../../../sources/camel-ai__camel/test/storages/vector_storages/test_oceanbase.py)<br>[test/storages/vector_storages/test_pgvector.py](../../../../sources/camel-ai__camel/test/storages/vector_storages/test_pgvector.py)<br>[test/storages/vector_storages/test_qdrant.py](../../../../sources/camel-ai__camel/test/storages/vector_storages/test_qdrant.py) |
| spec | 15 | [examples/usecases/youtube_ocr/requirements.txt](../../../../sources/camel-ai__camel/examples/usecases/youtube_ocr/requirements.txt)<br>[examples/usecases/pptx_toolkit_usecase/requirements.txt](../../../../sources/camel-ai__camel/examples/usecases/pptx_toolkit_usecase/requirements.txt)<br>[examples/usecases/multi_agent_research_assistant/requirements.txt](../../../../sources/camel-ai__camel/examples/usecases/multi_agent_research_assistant/requirements.txt)<br>[examples/usecases/mistral_OCR/requirements.txt](../../../../sources/camel-ai__camel/examples/usecases/mistral_OCR/requirements.txt)<br>[examples/usecases/codeforces_question_solver/requirements.txt](../../../../sources/camel-ai__camel/examples/usecases/codeforces_question_solver/requirements.txt)<br>[examples/usecases/cloudfare_mcp_camel/requirements.txt](../../../../sources/camel-ai__camel/examples/usecases/cloudfare_mcp_camel/requirements.txt)<br>[examples/usecases/chat_with_youtube/requirements.txt](../../../../sources/camel-ai__camel/examples/usecases/chat_with_youtube/requirements.txt)<br>[examples/usecases/chat_with_github/requirements.txt](../../../../sources/camel-ai__camel/examples/usecases/chat_with_github/requirements.txt) |
| eval | 307 | [test/conftest.py](../../../../sources/camel-ai__camel/test/conftest.py)<br>[test/test_all_exports.py](../../../../sources/camel-ai__camel/test/test_all_exports.py)<br>[test/test_generators.py](../../../../sources/camel-ai__camel/test/test_generators.py)<br>[test/test_human.py](../../../../sources/camel-ai__camel/test/test_human.py)<br>[test/workforce/test_workflow_memory.py](../../../../sources/camel-ai__camel/test/workforce/test_workflow_memory.py)<br>[test/workforce/test_workforce_callbacks.py](../../../../sources/camel-ai__camel/test/workforce/test_workforce_callbacks.py)<br>[test/workforce/test_workforce_pipeline.py](../../../../sources/camel-ai__camel/test/workforce/test_workforce_pipeline.py)<br>[test/workforce/test_workforce_single_agent.py](../../../../sources/camel-ai__camel/test/workforce/test_workforce_single_agent.py) |
| security | 7 | [SECURITY.md](../../../../sources/camel-ai__camel/SECURITY.md)<br>[test/runtimes/test_code_execution_with_llm_guard_runtime.py](../../../../sources/camel-ai__camel/test/runtimes/test_code_execution_with_llm_guard_runtime.py)<br>[examples/runtimes/code_execution_with_llm_guard_runtime.py](../../../../sources/camel-ai__camel/examples/runtimes/code_execution_with_llm_guard_runtime.py)<br>[docs/mintlify/reference/camel.runtime.llm_guard_runtime.mdx](../../../../sources/camel-ai__camel/docs/mintlify/reference/camel.runtime.llm_guard_runtime.mdx)<br>[docs/mintlify/reference/camel.runtimes.llm_guard_runtime.mdx](../../../../sources/camel-ai__camel/docs/mintlify/reference/camel.runtimes.llm_guard_runtime.mdx)<br>[camel/toolkits/open_api_specs/security_config.py](../../../../sources/camel-ai__camel/camel/toolkits/open_api_specs/security_config.py)<br>[camel/runtimes/llm_guard_runtime.py](../../../../sources/camel-ai__camel/camel/runtimes/llm_guard_runtime.py) |
| ci | 13 | [.github/workflows/build_package.yml](../../../../sources/camel-ai__camel/.github/workflows/build_package.yml)<br>[.github/workflows/codeql.yml](../../../../sources/camel-ai__camel/.github/workflows/codeql.yml)<br>[.github/workflows/dependency-review.yml](../../../../sources/camel-ai__camel/.github/workflows/dependency-review.yml)<br>[.github/workflows/docs_release_auto_sync_pr.yml](../../../../sources/camel-ai__camel/.github/workflows/docs_release_auto_sync_pr.yml)<br>[.github/workflows/documentation.yml](../../../../sources/camel-ai__camel/.github/workflows/documentation.yml)<br>[.github/workflows/pr-label-automation.yml](../../../../sources/camel-ai__camel/.github/workflows/pr-label-automation.yml)<br>[.github/workflows/pre_commit.yml](../../../../sources/camel-ai__camel/.github/workflows/pre_commit.yml)<br>[.github/workflows/profiling.yml](../../../../sources/camel-ai__camel/.github/workflows/profiling.yml) |
| container | 6 | [examples/runtimes/ubuntu_docker_runtime/Dockerfile](../../../../sources/camel-ai__camel/examples/runtimes/ubuntu_docker_runtime/Dockerfile)<br>[camel/runtimes/Dockerfile.multi-toolkit](../../../../sources/camel-ai__camel/camel/runtimes/Dockerfile.multi-toolkit)<br>[camel/interpreters/docker/Dockerfile](../../../../sources/camel-ai__camel/camel/interpreters/docker/Dockerfile)<br>[.container/docker-compose.yaml](../../../../sources/camel-ai__camel/.container/docker-compose.yaml)<br>[.container/Dockerfile](../../../../sources/camel-ai__camel/.container/Dockerfile)<br>[.container/minimal_build/Dockerfile](../../../../sources/camel-ai__camel/.container/minimal_build/Dockerfile) |
| instruction | 2 | [docs/mintlify/key_modules/agents.mdx](../../../../sources/camel-ai__camel/docs/mintlify/key_modules/agents.mdx)<br>[docs/key_modules/agents.md](../../../../sources/camel-ai__camel/docs/key_modules/agents.md) |
| docs | 946 | [README.ja.md](../../../../sources/camel-ai__camel/README.ja.md)<br>[README.md](../../../../sources/camel-ai__camel/README.md)<br>[README.zh.md](../../../../sources/camel-ai__camel/README.zh.md)<br>[test/docs/test_docs_sync.py](../../../../sources/camel-ai__camel/test/docs/test_docs_sync.py)<br>[services/README.md](../../../../sources/camel-ai__camel/services/README.md)<br>[examples/usecases/youtube_ocr/README.md](../../../../sources/camel-ai__camel/examples/usecases/youtube_ocr/README.md)<br>[examples/usecases/pptx_toolkit_usecase/README.md](../../../../sources/camel-ai__camel/examples/usecases/pptx_toolkit_usecase/README.md)<br>[examples/usecases/multi_agent_research_assistant/README.md](../../../../sources/camel-ai__camel/examples/usecases/multi_agent_research_assistant/README.md) |
| config | 17 | [Makefile](../../../../sources/camel-ai__camel/Makefile)<br>[pyproject.toml](../../../../sources/camel-ai__camel/pyproject.toml)<br>[uv.lock](../../../../sources/camel-ai__camel/uv.lock)<br>[examples/usecases/youtube_ocr/requirements.txt](../../../../sources/camel-ai__camel/examples/usecases/youtube_ocr/requirements.txt)<br>[examples/usecases/pptx_toolkit_usecase/requirements.txt](../../../../sources/camel-ai__camel/examples/usecases/pptx_toolkit_usecase/requirements.txt)<br>[examples/usecases/multi_agent_research_assistant/requirements.txt](../../../../sources/camel-ai__camel/examples/usecases/multi_agent_research_assistant/requirements.txt)<br>[examples/usecases/mistral_OCR/requirements.txt](../../../../sources/camel-ai__camel/examples/usecases/mistral_OCR/requirements.txt)<br>[examples/usecases/codeforces_question_solver/requirements.txt](../../../../sources/camel-ai__camel/examples/usecases/codeforces_question_solver/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 307 | [test/conftest.py](../../../../sources/camel-ai__camel/test/conftest.py)<br>[test/test_all_exports.py](../../../../sources/camel-ai__camel/test/test_all_exports.py)<br>[test/test_generators.py](../../../../sources/camel-ai__camel/test/test_generators.py)<br>[test/test_human.py](../../../../sources/camel-ai__camel/test/test_human.py)<br>[test/workforce/test_workflow_memory.py](../../../../sources/camel-ai__camel/test/workforce/test_workflow_memory.py)<br>[test/workforce/test_workforce_callbacks.py](../../../../sources/camel-ai__camel/test/workforce/test_workforce_callbacks.py) |
| CI workflow | 13 | [.github/workflows/build_package.yml](../../../../sources/camel-ai__camel/.github/workflows/build_package.yml)<br>[.github/workflows/codeql.yml](../../../../sources/camel-ai__camel/.github/workflows/codeql.yml)<br>[.github/workflows/dependency-review.yml](../../../../sources/camel-ai__camel/.github/workflows/dependency-review.yml)<br>[.github/workflows/docs_release_auto_sync_pr.yml](../../../../sources/camel-ai__camel/.github/workflows/docs_release_auto_sync_pr.yml)<br>[.github/workflows/documentation.yml](../../../../sources/camel-ai__camel/.github/workflows/documentation.yml)<br>[.github/workflows/pr-label-automation.yml](../../../../sources/camel-ai__camel/.github/workflows/pr-label-automation.yml) |
| 컨테이너/배포 | 6 | [examples/runtimes/ubuntu_docker_runtime/Dockerfile](../../../../sources/camel-ai__camel/examples/runtimes/ubuntu_docker_runtime/Dockerfile)<br>[camel/runtimes/Dockerfile.multi-toolkit](../../../../sources/camel-ai__camel/camel/runtimes/Dockerfile.multi-toolkit)<br>[camel/interpreters/docker/Dockerfile](../../../../sources/camel-ai__camel/camel/interpreters/docker/Dockerfile)<br>[.container/docker-compose.yaml](../../../../sources/camel-ai__camel/.container/docker-compose.yaml)<br>[.container/Dockerfile](../../../../sources/camel-ai__camel/.container/Dockerfile)<br>[.container/minimal_build/Dockerfile](../../../../sources/camel-ai__camel/.container/minimal_build/Dockerfile) |
| 보안/정책 | 7 | [SECURITY.md](../../../../sources/camel-ai__camel/SECURITY.md)<br>[test/runtimes/test_code_execution_with_llm_guard_runtime.py](../../../../sources/camel-ai__camel/test/runtimes/test_code_execution_with_llm_guard_runtime.py)<br>[examples/runtimes/code_execution_with_llm_guard_runtime.py](../../../../sources/camel-ai__camel/examples/runtimes/code_execution_with_llm_guard_runtime.py)<br>[docs/mintlify/reference/camel.runtime.llm_guard_runtime.mdx](../../../../sources/camel-ai__camel/docs/mintlify/reference/camel.runtime.llm_guard_runtime.mdx)<br>[docs/mintlify/reference/camel.runtimes.llm_guard_runtime.mdx](../../../../sources/camel-ai__camel/docs/mintlify/reference/camel.runtimes.llm_guard_runtime.mdx)<br>[camel/toolkits/open_api_specs/security_config.py](../../../../sources/camel-ai__camel/camel/toolkits/open_api_specs/security_config.py) |
| 에이전트 지시문 | 2 | [docs/mintlify/key_modules/agents.mdx](../../../../sources/camel-ai__camel/docs/mintlify/key_modules/agents.mdx)<br>[docs/key_modules/agents.md](../../../../sources/camel-ai__camel/docs/key_modules/agents.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `test/utils/test_mcp_client.py`, `test/utils/test_mcp_server.py`, `test/utils/test_mcp.py`.
2. entrypoint를 따라 실행 흐름 확인: `camel/toolkits/hybrid_browser_toolkit/ts/src/index.ts`.
3. agent/tool runtime 매핑: `test/memories/context_creators/test_score_based.py`, `test/agents/test_agent_base.py`, `test/agents/test_agent_e2e.py`.
4. retrieval/memory/indexing 확인: `test/workforce/test_workflow_memory.py`, `test/toolkits/test_memory_toolkit.py`, `test/storages/vector_storages/test_all_vectordbs.py`.
5. test/eval 파일로 동작 검증: `test/conftest.py`, `test/test_all_exports.py`, `test/test_generators.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 🐫 CAMEL The first and the best multi agent framework. Finding the Scaling Law of Agents. https //www.camel ai.org. 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, LICENSE, openai이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
