# oracle-devrel/oracle-ai-developer-hub Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Technical resources for AI developers to build applications, agents, and systems using Oracle AI Database and OCI services

## 요약

- 조사 단위: `sources/oracle-devrel__oracle-ai-developer-hub` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,061 files, 510 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 retrieval=workshops/supplychain_demand_agent_workshop/images/agent_memory.png, workshops/supplychain_demand_agent_workshop/docs/part-3-vector-store.md, workshops/supplychain_demand_agent_workshop/app/frontend/index.html이고, 의존성 단서는 ollama, llama, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | oracle-devrel/oracle-ai-developer-hub |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Jupyter Notebook |
| Stars | 4191 |
| Forks | 758 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/oracle-devrel__oracle-ai-developer-hub](../../../../sources/oracle-devrel__oracle-ai-developer-hub) |
| Existing report | [reports/global-trending/repositories/oracle-devrel__oracle-ai-developer-hub.md](../../../global-trending/repositories/oracle-devrel__oracle-ai-developer-hub.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2061 / 510 |
| Max observed depth | 13 |
| Top directories | .github, apps, build-paths, docs, guides, notebooks, partners, workshops |
| Top extensions | .py: 547, .md: 260, .go: 197, .png: 171, .tsx: 120, .json: 77, .ipynb: 67, (none): 64, .js: 60, .tf: 58, .jsx: 42, .txt: 39 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| apps/picooraclaw | apps workspace | 32 |
| apps/oracle-database-java-agent-memory | apps workspace | 30 |
| apps/rag-to-memory-systems-demo | apps workspace | 19 |
| apps/oci-generative-ai-jet-ui | apps workspace | 16 |
| apps/tanstack-shoe-store | apps workspace | 12 |
| apps/supplychain-demand-planning-agent | apps workspace | 9 |
| apps/oracle-database-vector-search | apps workspace | 6 |
| apps/oracle-rag | apps workspace | 5 |
| apps/oracle-data-migration-harness | apps workspace | 4 |
| docs | documentation surface | 3 |
| apps/agentic_rag | apps workspace | 2 |
| apps/finance-ai-agent-demo | apps workspace | 2 |
| apps/FitTracker | apps workspace | 2 |
| apps/limitless-workflow | apps workspace | 2 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| apps/agent-reasoning | apps workspace | 1 |
| build-paths | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | ollama, llama |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [workshops/supplychain_demand_agent_workshop/images/agent_memory.png](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/images/agent_memory.png) | retrieval signal |
| retrieval | [workshops/supplychain_demand_agent_workshop/docs/part-3-vector-store.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/docs/part-3-vector-store.md) | retrieval signal |
| retrieval | [workshops/supplychain_demand_agent_workshop/app/frontend/index.html](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/app/frontend/index.html) | retrieval signal |
| retrieval | [workshops/soccer-analytics-agent/tests/test_episodic_memory.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/tests/test_episodic_memory.py) | retrieval signal |
| entrypoints | [workshops/supplychain_demand_agent_workshop/app/frontend/src/App.tsx](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/app/frontend/src/App.tsx) | entrypoints signal |
| entrypoints | [workshops/supplychain_demand_agent_workshop/app/frontend/src/main.tsx](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/app/frontend/src/main.tsx) | entrypoints signal |
| entrypoints | [workshops/supplychain_demand_agent_workshop/app/backend/main.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/app/backend/main.py) | entrypoints signal |
| entrypoints | [workshops/soccer-analytics-agent/soccer_agent/api/main.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/soccer_agent/api/main.py) | entrypoints signal |
| docs | [README.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/README.md) | docs signal |
| docs | [workshops/README.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/README.md) | docs signal |
| docs | [workshops/supplychain_demand_agent_workshop/README.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/README.md) | docs signal |
| docs | [workshops/supplychain_demand_agent_workshop/docs/part-1-setup.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/docs/part-1-setup.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 254 | [workshops/supplychain_demand_agent_workshop/app/frontend/src/App.tsx](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/app/frontend/src/App.tsx)<br>[workshops/supplychain_demand_agent_workshop/app/frontend/src/main.tsx](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/app/frontend/src/main.tsx)<br>[workshops/supplychain_demand_agent_workshop/app/backend/main.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/app/backend/main.py)<br>[workshops/soccer-analytics-agent/soccer_agent/api/main.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/soccer_agent/api/main.py)<br>[workshops/soccer-analytics-agent/frontend/src/App.tsx](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/frontend/src/App.tsx)<br>[workshops/soccer-analytics-agent/frontend/src/index.css](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/frontend/src/index.css)<br>[workshops/soccer-analytics-agent/frontend/src/main.tsx](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/frontend/src/main.tsx)<br>[workshops/enterprise-data-agent-harness-workshop/app/frontend/src/App.jsx](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/enterprise-data-agent-harness-workshop/app/frontend/src/App.jsx) |
| agentRuntime | 545 | [workshops/supplychain_demand_agent_workshop/images/agent_memory.png](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/images/agent_memory.png)<br>[workshops/supplychain_demand_agent_workshop/app/backend/agent/__init__.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/app/backend/agent/__init__.py)<br>[workshops/supplychain_demand_agent_workshop/app/backend/agent/streaming.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/app/backend/agent/streaming.py)<br>[workshops/supplychain_demand_agent_workshop/app/backend/agent/supervisor.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/app/backend/agent/supervisor.py)<br>[workshops/supplychain_demand_agent_workshop/app/backend/agent/tools.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/app/backend/agent/tools.py)<br>[workshops/soccer-analytics-agent/soccer_agent/memory/__init__.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/soccer_agent/memory/__init__.py)<br>[workshops/soccer-analytics-agent/soccer_agent/memory/episodic.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/soccer_agent/memory/episodic.py)<br>[workshops/soccer-analytics-agent/soccer_agent/memory/langchain_hybrid.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/soccer_agent/memory/langchain_hybrid.py) |
| mcp | 2 | [notebooks/claude_mcp_oracle_ai_database_memory_langchain.ipynb](../../../../sources/oracle-devrel__oracle-ai-developer-hub/notebooks/claude_mcp_oracle_ai_database_memory_langchain.ipynb)<br>[build-paths/skills/oracle-mcp-server-helper/SKILL.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/build-paths/skills/oracle-mcp-server-helper/SKILL.md) |
| retrieval | 509 | [workshops/supplychain_demand_agent_workshop/images/agent_memory.png](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/images/agent_memory.png)<br>[workshops/supplychain_demand_agent_workshop/docs/part-3-vector-store.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/docs/part-3-vector-store.md)<br>[workshops/supplychain_demand_agent_workshop/app/frontend/index.html](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/app/frontend/index.html)<br>[workshops/soccer-analytics-agent/tests/test_episodic_memory.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/tests/test_episodic_memory.py)<br>[workshops/soccer-analytics-agent/tests/test_memory_schema.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/tests/test_memory_schema.py)<br>[workshops/soccer-analytics-agent/tests/test_onnx_embedding.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/tests/test_onnx_embedding.py)<br>[workshops/soccer-analytics-agent/tests/test_semantic_memory.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/tests/test_semantic_memory.py)<br>[workshops/soccer-analytics-agent/tests/test_working_memory.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/tests/test_working_memory.py) |
| spec | 32 | [requirements-dev.txt](../../../../sources/oracle-devrel__oracle-ai-developer-hub/requirements-dev.txt)<br>[workshops/supplychain_demand_agent_workshop/app/backend/requirements.txt](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/app/backend/requirements.txt)<br>[workshops/soccer-analytics-agent/docs/ARCHITECTURE.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/docs/ARCHITECTURE.md)<br>[workshops/soccer-analytics-agent/docs/design/dataset-enhancement.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/docs/design/dataset-enhancement.md)<br>[workshops/soccer-analytics-agent/docs/design/elo-system.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/docs/design/elo-system.md)<br>[workshops/soccer-analytics-agent/docs/design/ml-models.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/docs/design/ml-models.md)<br>[workshops/semantic-search-github-issues/.devcontainer/requirements.txt](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/semantic-search-github-issues/.devcontainer/requirements.txt)<br>[workshops/information_retrieval_to_RAG/requirements.txt](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/information_retrieval_to_RAG/requirements.txt) |
| eval | 207 | [workshops/soccer-analytics-agent/tests/__init__.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/tests/__init__.py)<br>[workshops/soccer-analytics-agent/tests/conftest.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/tests/conftest.py)<br>[workshops/soccer-analytics-agent/tests/MANUAL_UI_TEST.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/tests/MANUAL_UI_TEST.md)<br>[workshops/soccer-analytics-agent/tests/test_agent_loop.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/tests/test_agent_loop.py)<br>[workshops/soccer-analytics-agent/tests/test_api.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/tests/test_api.py)<br>[workshops/soccer-analytics-agent/tests/test_bulk_inference.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/tests/test_bulk_inference.py)<br>[workshops/soccer-analytics-agent/tests/test_cli_chat.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/tests/test_cli_chat.py)<br>[workshops/soccer-analytics-agent/tests/test_db.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/tests/test_db.py) |
| security | 17 | [workshops/supplychain_demand_agent_workshop/docs/part-9-policy-agent.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/docs/part-9-policy-agent.md)<br>[apps/supplychain-demand-planning-agent/docs/part-9-policy-agent.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/supplychain-demand-planning-agent/docs/part-9-policy-agent.md)<br>[apps/rag-to-memory-systems-demo/tests/test_stores_policy_preference.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/rag-to-memory-systems-demo/tests/test_stores_policy_preference.py)<br>[apps/rag-to-memory-systems-demo/memory/stores/policy.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/rag-to-memory-systems-demo/memory/stores/policy.py)<br>[apps/picooraclaw/pkg/oracle/interface_compliance_test.go](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/picooraclaw/pkg/oracle/interface_compliance_test.go)<br>[apps/picooraclaw/pkg/auth/oauth_test.go](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/picooraclaw/pkg/auth/oauth_test.go)<br>[apps/picooraclaw/pkg/auth/oauth.go](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/picooraclaw/pkg/auth/oauth.go)<br>[apps/picooraclaw/pkg/auth/pkce_test.go](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/picooraclaw/pkg/auth/pkce_test.go) |
| ci | 14 | [apps/oci-generative-ai-jet-ui/.github/workflows/banned_file_changes_pr.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/oci-generative-ai-jet-ui/.github/workflows/banned_file_changes_pr.yml)<br>[apps/oci-generative-ai-jet-ui/.github/workflows/cla.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/oci-generative-ai-jet-ui/.github/workflows/cla.yml)<br>[apps/oci-generative-ai-jet-ui/.github/workflows/license_audit.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/oci-generative-ai-jet-ui/.github/workflows/license_audit.yml)<br>[apps/oci-generative-ai-jet-ui/.github/workflows/release-zip-file.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/oci-generative-ai-jet-ui/.github/workflows/release-zip-file.yml)<br>[apps/oci-generative-ai-jet-ui/.github/workflows/repolinter.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/oci-generative-ai-jet-ui/.github/workflows/repolinter.yml)<br>[apps/oci-generative-ai-jet-ui/.github/workflows/sonarcloud.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/oci-generative-ai-jet-ui/.github/workflows/sonarcloud.yml)<br>[.github/workflows/agentic_rag_integration.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/.github/workflows/agentic_rag_integration.yml)<br>[.github/workflows/agentic_rag_smoke.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/.github/workflows/agentic_rag_smoke.yml) |
| container | 138 | [workshops/supplychain_demand_agent_workshop/.devcontainer/docker-compose.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/.devcontainer/docker-compose.yml)<br>[workshops/soccer-analytics-agent/docker/docker-compose.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/docker/docker-compose.yml)<br>[workshops/information_retrieval_to_RAG/.devcontainer/docker-compose.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/information_retrieval_to_RAG/.devcontainer/docker-compose.yml)<br>[workshops/from_rag_to_agents_workshop/.devcontainer/docker-compose.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/from_rag_to_agents_workshop/.devcontainer/docker-compose.yml)<br>[workshops/enterprise-data-agent-harness-workshop/.devcontainer/docker-compose.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/enterprise-data-agent-harness-workshop/.devcontainer/docker-compose.yml)<br>[workshops/agent_memory_workshop/.devcontainer/docker-compose.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/agent_memory_workshop/.devcontainer/docker-compose.yml)<br>[build-paths/shared/templates/docker-compose.oracle-free.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/build-paths/shared/templates/docker-compose.oracle-free.yml)<br>[apps/supplychain-demand-planning-agent/docker-compose.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/supplychain-demand-planning-agent/docker-compose.yml) |
| instruction | 3 | [apps/limitless-workflow/AGENTS.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/limitless-workflow/AGENTS.md)<br>[apps/FitTracker/CLAUDE.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/FitTracker/CLAUDE.md)<br>[apps/agent-reasoning/interactive/AGENTS.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/agent-reasoning/interactive/AGENTS.md) |
| docs | 167 | [README.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/README.md)<br>[workshops/README.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/README.md)<br>[workshops/supplychain_demand_agent_workshop/README.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/README.md)<br>[workshops/supplychain_demand_agent_workshop/docs/part-1-setup.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/docs/part-1-setup.md)<br>[workshops/supplychain_demand_agent_workshop/docs/part-10-supervisor.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/docs/part-10-supervisor.md)<br>[workshops/supplychain_demand_agent_workshop/docs/part-11-chat-history.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/docs/part-11-chat-history.md)<br>[workshops/supplychain_demand_agent_workshop/docs/part-2-embeddings.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/docs/part-2-embeddings.md)<br>[workshops/supplychain_demand_agent_workshop/docs/part-3-vector-store.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/docs/part-3-vector-store.md) |
| config | 54 | [pyproject.toml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/pyproject.toml)<br>[requirements-dev.txt](../../../../sources/oracle-devrel__oracle-ai-developer-hub/requirements-dev.txt)<br>[workshops/supplychain_demand_agent_workshop/app/frontend/package.json](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/app/frontend/package.json)<br>[workshops/supplychain_demand_agent_workshop/app/frontend/tsconfig.json](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/app/frontend/tsconfig.json)<br>[workshops/supplychain_demand_agent_workshop/app/backend/requirements.txt](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/app/backend/requirements.txt)<br>[workshops/soccer-analytics-agent/pyproject.toml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/pyproject.toml)<br>[workshops/soccer-analytics-agent/uv.lock](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/uv.lock)<br>[workshops/soccer-analytics-agent/frontend/package.json](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/frontend/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 207 | [workshops/soccer-analytics-agent/tests/__init__.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/tests/__init__.py)<br>[workshops/soccer-analytics-agent/tests/conftest.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/tests/conftest.py)<br>[workshops/soccer-analytics-agent/tests/MANUAL_UI_TEST.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/tests/MANUAL_UI_TEST.md)<br>[workshops/soccer-analytics-agent/tests/test_agent_loop.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/tests/test_agent_loop.py)<br>[workshops/soccer-analytics-agent/tests/test_api.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/tests/test_api.py)<br>[workshops/soccer-analytics-agent/tests/test_bulk_inference.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/tests/test_bulk_inference.py) |
| CI workflows | 14 | [apps/oci-generative-ai-jet-ui/.github/workflows/banned_file_changes_pr.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/oci-generative-ai-jet-ui/.github/workflows/banned_file_changes_pr.yml)<br>[apps/oci-generative-ai-jet-ui/.github/workflows/cla.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/oci-generative-ai-jet-ui/.github/workflows/cla.yml)<br>[apps/oci-generative-ai-jet-ui/.github/workflows/license_audit.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/oci-generative-ai-jet-ui/.github/workflows/license_audit.yml)<br>[apps/oci-generative-ai-jet-ui/.github/workflows/release-zip-file.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/oci-generative-ai-jet-ui/.github/workflows/release-zip-file.yml)<br>[apps/oci-generative-ai-jet-ui/.github/workflows/repolinter.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/oci-generative-ai-jet-ui/.github/workflows/repolinter.yml)<br>[apps/oci-generative-ai-jet-ui/.github/workflows/sonarcloud.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/oci-generative-ai-jet-ui/.github/workflows/sonarcloud.yml) |
| Containers / deploy | 138 | [workshops/supplychain_demand_agent_workshop/.devcontainer/docker-compose.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/.devcontainer/docker-compose.yml)<br>[workshops/soccer-analytics-agent/docker/docker-compose.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/docker/docker-compose.yml)<br>[workshops/information_retrieval_to_RAG/.devcontainer/docker-compose.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/information_retrieval_to_RAG/.devcontainer/docker-compose.yml)<br>[workshops/from_rag_to_agents_workshop/.devcontainer/docker-compose.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/from_rag_to_agents_workshop/.devcontainer/docker-compose.yml)<br>[workshops/enterprise-data-agent-harness-workshop/.devcontainer/docker-compose.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/enterprise-data-agent-harness-workshop/.devcontainer/docker-compose.yml)<br>[workshops/agent_memory_workshop/.devcontainer/docker-compose.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/agent_memory_workshop/.devcontainer/docker-compose.yml) |
| Security / policy | 17 | [workshops/supplychain_demand_agent_workshop/docs/part-9-policy-agent.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/docs/part-9-policy-agent.md)<br>[apps/supplychain-demand-planning-agent/docs/part-9-policy-agent.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/supplychain-demand-planning-agent/docs/part-9-policy-agent.md)<br>[apps/rag-to-memory-systems-demo/tests/test_stores_policy_preference.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/rag-to-memory-systems-demo/tests/test_stores_policy_preference.py)<br>[apps/rag-to-memory-systems-demo/memory/stores/policy.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/rag-to-memory-systems-demo/memory/stores/policy.py)<br>[apps/picooraclaw/pkg/oracle/interface_compliance_test.go](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/picooraclaw/pkg/oracle/interface_compliance_test.go)<br>[apps/picooraclaw/pkg/auth/oauth_test.go](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/picooraclaw/pkg/auth/oauth_test.go) |
| Agent instructions | 3 | [apps/limitless-workflow/AGENTS.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/limitless-workflow/AGENTS.md)<br>[apps/FitTracker/CLAUDE.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/FitTracker/CLAUDE.md)<br>[apps/agent-reasoning/interactive/AGENTS.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/agent-reasoning/interactive/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `workshops/supplychain_demand_agent_workshop/images/agent_memory.png`, `workshops/supplychain_demand_agent_workshop/docs/part-3-vector-store.md`, `workshops/supplychain_demand_agent_workshop/app/frontend/index.html`.
2. Trace execution through entrypoints: `workshops/supplychain_demand_agent_workshop/app/frontend/src/App.tsx`, `workshops/supplychain_demand_agent_workshop/app/frontend/src/main.tsx`, `workshops/supplychain_demand_agent_workshop/app/backend/main.py`.
3. Map agent/tool runtime through: `workshops/supplychain_demand_agent_workshop/images/agent_memory.png`, `workshops/supplychain_demand_agent_workshop/app/backend/agent/__init__.py`, `workshops/supplychain_demand_agent_workshop/app/backend/agent/streaming.py`.
4. Inspect retrieval/memory/indexing through: `workshops/supplychain_demand_agent_workshop/images/agent_memory.png`, `workshops/supplychain_demand_agent_workshop/docs/part-3-vector-store.md`, `workshops/supplychain_demand_agent_workshop/app/frontend/index.html`.
5. Verify behavior through test/eval files: `workshops/soccer-analytics-agent/tests/__init__.py`, `workshops/soccer-analytics-agent/tests/conftest.py`, `workshops/soccer-analytics-agent/tests/MANUAL_UI_TEST.md`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Technical resources for AI developers to build applications, agents, and systems using Oracle AI Database and OCI servic. 핵심 구조 신호는 Jupyter Notebook, pyproject.toml, README.md, ollama, playwright, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
