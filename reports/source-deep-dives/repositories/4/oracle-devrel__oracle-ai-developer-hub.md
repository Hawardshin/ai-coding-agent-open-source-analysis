# oracle-devrel/oracle-ai-developer-hub 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Technical resources for AI developers to build applications, agents, and systems using Oracle AI Database and OCI services

## 요약

- 조사 단위: `sources/oracle-devrel__oracle-ai-developer-hub` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,061 files, 510 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 retrieval=workshops/supplychain_demand_agent_workshop/images/agent_memory.png, workshops/supplychain_demand_agent_workshop/docs/part-3-vector-store.md, workshops/supplychain_demand_agent_workshop/app/frontend/index.html이고, 의존성 단서는 ollama, llama, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | oracle-devrel/oracle-ai-developer-hub |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Jupyter Notebook |
| Stars | 4191 |
| Forks | 758 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/oracle-devrel__oracle-ai-developer-hub](../../../../sources/oracle-devrel__oracle-ai-developer-hub) |
| 기존 보고서 | [reports/global-trending/repositories/oracle-devrel__oracle-ai-developer-hub.md](../../../global-trending/repositories/oracle-devrel__oracle-ai-developer-hub.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2061 / 510 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .github, apps, build-paths, docs, guides, notebooks, partners, workshops |
| 상위 확장자 | .py: 547, .md: 260, .go: 197, .png: 171, .tsx: 120, .json: 77, .ipynb: 67, (none): 64, .js: 60, .tf: 58, .jsx: 42, .txt: 39 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | ollama, llama |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 207 | [workshops/soccer-analytics-agent/tests/__init__.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/tests/__init__.py)<br>[workshops/soccer-analytics-agent/tests/conftest.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/tests/conftest.py)<br>[workshops/soccer-analytics-agent/tests/MANUAL_UI_TEST.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/tests/MANUAL_UI_TEST.md)<br>[workshops/soccer-analytics-agent/tests/test_agent_loop.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/tests/test_agent_loop.py)<br>[workshops/soccer-analytics-agent/tests/test_api.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/tests/test_api.py)<br>[workshops/soccer-analytics-agent/tests/test_bulk_inference.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/tests/test_bulk_inference.py) |
| CI workflow | 14 | [apps/oci-generative-ai-jet-ui/.github/workflows/banned_file_changes_pr.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/oci-generative-ai-jet-ui/.github/workflows/banned_file_changes_pr.yml)<br>[apps/oci-generative-ai-jet-ui/.github/workflows/cla.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/oci-generative-ai-jet-ui/.github/workflows/cla.yml)<br>[apps/oci-generative-ai-jet-ui/.github/workflows/license_audit.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/oci-generative-ai-jet-ui/.github/workflows/license_audit.yml)<br>[apps/oci-generative-ai-jet-ui/.github/workflows/release-zip-file.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/oci-generative-ai-jet-ui/.github/workflows/release-zip-file.yml)<br>[apps/oci-generative-ai-jet-ui/.github/workflows/repolinter.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/oci-generative-ai-jet-ui/.github/workflows/repolinter.yml)<br>[apps/oci-generative-ai-jet-ui/.github/workflows/sonarcloud.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/oci-generative-ai-jet-ui/.github/workflows/sonarcloud.yml) |
| 컨테이너/배포 | 138 | [workshops/supplychain_demand_agent_workshop/.devcontainer/docker-compose.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/.devcontainer/docker-compose.yml)<br>[workshops/soccer-analytics-agent/docker/docker-compose.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/soccer-analytics-agent/docker/docker-compose.yml)<br>[workshops/information_retrieval_to_RAG/.devcontainer/docker-compose.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/information_retrieval_to_RAG/.devcontainer/docker-compose.yml)<br>[workshops/from_rag_to_agents_workshop/.devcontainer/docker-compose.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/from_rag_to_agents_workshop/.devcontainer/docker-compose.yml)<br>[workshops/enterprise-data-agent-harness-workshop/.devcontainer/docker-compose.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/enterprise-data-agent-harness-workshop/.devcontainer/docker-compose.yml)<br>[workshops/agent_memory_workshop/.devcontainer/docker-compose.yml](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/agent_memory_workshop/.devcontainer/docker-compose.yml) |
| 보안/정책 | 17 | [workshops/supplychain_demand_agent_workshop/docs/part-9-policy-agent.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/workshops/supplychain_demand_agent_workshop/docs/part-9-policy-agent.md)<br>[apps/supplychain-demand-planning-agent/docs/part-9-policy-agent.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/supplychain-demand-planning-agent/docs/part-9-policy-agent.md)<br>[apps/rag-to-memory-systems-demo/tests/test_stores_policy_preference.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/rag-to-memory-systems-demo/tests/test_stores_policy_preference.py)<br>[apps/rag-to-memory-systems-demo/memory/stores/policy.py](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/rag-to-memory-systems-demo/memory/stores/policy.py)<br>[apps/picooraclaw/pkg/oracle/interface_compliance_test.go](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/picooraclaw/pkg/oracle/interface_compliance_test.go)<br>[apps/picooraclaw/pkg/auth/oauth_test.go](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/picooraclaw/pkg/auth/oauth_test.go) |
| 에이전트 지시문 | 3 | [apps/limitless-workflow/AGENTS.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/limitless-workflow/AGENTS.md)<br>[apps/FitTracker/CLAUDE.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/FitTracker/CLAUDE.md)<br>[apps/agent-reasoning/interactive/AGENTS.md](../../../../sources/oracle-devrel__oracle-ai-developer-hub/apps/agent-reasoning/interactive/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `workshops/supplychain_demand_agent_workshop/images/agent_memory.png`, `workshops/supplychain_demand_agent_workshop/docs/part-3-vector-store.md`, `workshops/supplychain_demand_agent_workshop/app/frontend/index.html`.
2. entrypoint를 따라 실행 흐름 확인: `workshops/supplychain_demand_agent_workshop/app/frontend/src/App.tsx`, `workshops/supplychain_demand_agent_workshop/app/frontend/src/main.tsx`, `workshops/supplychain_demand_agent_workshop/app/backend/main.py`.
3. agent/tool runtime 매핑: `workshops/supplychain_demand_agent_workshop/images/agent_memory.png`, `workshops/supplychain_demand_agent_workshop/app/backend/agent/__init__.py`, `workshops/supplychain_demand_agent_workshop/app/backend/agent/streaming.py`.
4. retrieval/memory/indexing 확인: `workshops/supplychain_demand_agent_workshop/images/agent_memory.png`, `workshops/supplychain_demand_agent_workshop/docs/part-3-vector-store.md`, `workshops/supplychain_demand_agent_workshop/app/frontend/index.html`.
5. test/eval 파일로 동작 검증: `workshops/soccer-analytics-agent/tests/__init__.py`, `workshops/soccer-analytics-agent/tests/conftest.py`, `workshops/soccer-analytics-agent/tests/MANUAL_UI_TEST.md`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Technical resources for AI developers to build applications, agents, and systems using Oracle AI Database and OCI servic. 핵심 구조 신호는 Jupyter Notebook, pyproject.toml, README.md, ollama, playwright, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
