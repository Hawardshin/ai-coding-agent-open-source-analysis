# camel-ai/camel Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

🐫 CAMEL: The first and the best multi-agent framework. Finding the Scaling Law of Agents. https://www.camel-ai.org

## 요약

- 조사 단위: `sources/camel-ai__camel` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,221 files, 265 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=test/utils/test_mcp_client.py, test/utils/test_mcp_server.py, test/utils/test_mcp.py이고, 의존성 단서는 openai, anthropic, mcp, fastapi, pydantic, typer, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | camel-ai/camel |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 17219 |
| Forks | 1951 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/camel-ai__camel](../../../../sources/camel-ai__camel) |
| Existing report | [reports/global-trending/repositories/camel-ai__camel.md](../../../global-trending/repositories/camel-ai__camel.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2221 / 265 |
| Max observed depth | 8 |
| Top directories | .camel, .container, .github, apps, camel, data, docs, examples, licenses, misc, profiling, services, test |
| Top extensions | .py: 1131, .mdx: 524, .md: 155, .png: 154, .rst: 59, .ipynb: 49, .json: 26, .yaml: 18, .yml: 18, .txt: 17, (none): 9, .ts: 8 |
| Source patterns | monorepo/workspace, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
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


## How It Runs

| Category | Source | Name | Command |
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


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | chroma, qdrant, milvus, weaviate, pgvector, faiss |
| modelRuntime | transformers |
| webRuntime | fastapi |
| developerSurface | typer |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
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


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 307 | [test/conftest.py](../../../../sources/camel-ai__camel/test/conftest.py)<br>[test/test_all_exports.py](../../../../sources/camel-ai__camel/test/test_all_exports.py)<br>[test/test_generators.py](../../../../sources/camel-ai__camel/test/test_generators.py)<br>[test/test_human.py](../../../../sources/camel-ai__camel/test/test_human.py)<br>[test/workforce/test_workflow_memory.py](../../../../sources/camel-ai__camel/test/workforce/test_workflow_memory.py)<br>[test/workforce/test_workforce_callbacks.py](../../../../sources/camel-ai__camel/test/workforce/test_workforce_callbacks.py) |
| CI workflows | 13 | [.github/workflows/build_package.yml](../../../../sources/camel-ai__camel/.github/workflows/build_package.yml)<br>[.github/workflows/codeql.yml](../../../../sources/camel-ai__camel/.github/workflows/codeql.yml)<br>[.github/workflows/dependency-review.yml](../../../../sources/camel-ai__camel/.github/workflows/dependency-review.yml)<br>[.github/workflows/docs_release_auto_sync_pr.yml](../../../../sources/camel-ai__camel/.github/workflows/docs_release_auto_sync_pr.yml)<br>[.github/workflows/documentation.yml](../../../../sources/camel-ai__camel/.github/workflows/documentation.yml)<br>[.github/workflows/pr-label-automation.yml](../../../../sources/camel-ai__camel/.github/workflows/pr-label-automation.yml) |
| Containers / deploy | 6 | [examples/runtimes/ubuntu_docker_runtime/Dockerfile](../../../../sources/camel-ai__camel/examples/runtimes/ubuntu_docker_runtime/Dockerfile)<br>[camel/runtimes/Dockerfile.multi-toolkit](../../../../sources/camel-ai__camel/camel/runtimes/Dockerfile.multi-toolkit)<br>[camel/interpreters/docker/Dockerfile](../../../../sources/camel-ai__camel/camel/interpreters/docker/Dockerfile)<br>[.container/docker-compose.yaml](../../../../sources/camel-ai__camel/.container/docker-compose.yaml)<br>[.container/Dockerfile](../../../../sources/camel-ai__camel/.container/Dockerfile)<br>[.container/minimal_build/Dockerfile](../../../../sources/camel-ai__camel/.container/minimal_build/Dockerfile) |
| Security / policy | 7 | [SECURITY.md](../../../../sources/camel-ai__camel/SECURITY.md)<br>[test/runtimes/test_code_execution_with_llm_guard_runtime.py](../../../../sources/camel-ai__camel/test/runtimes/test_code_execution_with_llm_guard_runtime.py)<br>[examples/runtimes/code_execution_with_llm_guard_runtime.py](../../../../sources/camel-ai__camel/examples/runtimes/code_execution_with_llm_guard_runtime.py)<br>[docs/mintlify/reference/camel.runtime.llm_guard_runtime.mdx](../../../../sources/camel-ai__camel/docs/mintlify/reference/camel.runtime.llm_guard_runtime.mdx)<br>[docs/mintlify/reference/camel.runtimes.llm_guard_runtime.mdx](../../../../sources/camel-ai__camel/docs/mintlify/reference/camel.runtimes.llm_guard_runtime.mdx)<br>[camel/toolkits/open_api_specs/security_config.py](../../../../sources/camel-ai__camel/camel/toolkits/open_api_specs/security_config.py) |
| Agent instructions | 2 | [docs/mintlify/key_modules/agents.mdx](../../../../sources/camel-ai__camel/docs/mintlify/key_modules/agents.mdx)<br>[docs/key_modules/agents.md](../../../../sources/camel-ai__camel/docs/key_modules/agents.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `test/utils/test_mcp_client.py`, `test/utils/test_mcp_server.py`, `test/utils/test_mcp.py`.
2. Trace execution through entrypoints: `camel/toolkits/hybrid_browser_toolkit/ts/src/index.ts`.
3. Map agent/tool runtime through: `test/memories/context_creators/test_score_based.py`, `test/agents/test_agent_base.py`, `test/agents/test_agent_e2e.py`.
4. Inspect retrieval/memory/indexing through: `test/workforce/test_workflow_memory.py`, `test/toolkits/test_memory_toolkit.py`, `test/storages/vector_storages/test_all_vectordbs.py`.
5. Verify behavior through test/eval files: `test/conftest.py`, `test/test_all_exports.py`, `test/test_generators.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 🐫 CAMEL The first and the best multi agent framework. Finding the Scaling Law of Agents. https //www.camel ai.org. 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, LICENSE, openai이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
