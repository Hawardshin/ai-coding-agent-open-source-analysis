# arc53/DocsGPT Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Private AI platform for agents, assistants and enterprise search. Built-in Agent Builder, Deep research, Document analysis, Multi-model support, and API connectivity for agents.

## 요약

- 조사 단위: `sources/arc53__DocsGPT` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,380 files, 200 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/test_memory_tool.py, tests/worker/test_ingest_checkpoint.py, tests/worker/test_ingest_connector.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | arc53/DocsGPT |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 17938 |
| Forks | 2062 |
| License | MIT |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/arc53__DocsGPT](../../../../sources/arc53__DocsGPT) |
| Existing report | [reports/llm-wiki/repositories/arc53__DocsGPT.md](../../../llm-wiki/repositories/arc53__DocsGPT.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1380 / 200 |
| Max observed depth | 6 |
| Top directories | .devcontainer, .github, application, deployment, docs, extensions, frontend, scripts, tests |
| Top extensions | .py: 761, .tsx: 137, .ts: 129, .svg: 108, .mdx: 39, .yaml: 37, .json: 26, .md: 21, .yml: 20, .txt: 17, (none): 16, .png: 13 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 159 |
| docs | documentation surface | 36 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| application | top-level component | 1 |
| deployment | deployment surface | 1 |
| extensions | top-level component | 1 |
| frontend | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [tests/test_memory_tool.py](../../../../sources/arc53__DocsGPT/tests/test_memory_tool.py) | retrieval signal |
| retrieval | [tests/worker/test_ingest_checkpoint.py](../../../../sources/arc53__DocsGPT/tests/worker/test_ingest_checkpoint.py) | retrieval signal |
| retrieval | [tests/worker/test_ingest_connector.py](../../../../sources/arc53__DocsGPT/tests/worker/test_ingest_connector.py) | retrieval signal |
| retrieval | [tests/worker/test_ingest_worker.py](../../../../sources/arc53__DocsGPT/tests/worker/test_ingest_worker.py) | retrieval signal |
| entrypoints | [frontend/src/App.tsx](../../../../sources/arc53__DocsGPT/frontend/src/App.tsx) | entrypoints signal |
| entrypoints | [frontend/src/index.css](../../../../sources/arc53__DocsGPT/frontend/src/index.css) | entrypoints signal |
| entrypoints | [frontend/src/main.tsx](../../../../sources/arc53__DocsGPT/frontend/src/main.tsx) | entrypoints signal |
| entrypoints | [extensions/react-widget/src/App.tsx](../../../../sources/arc53__DocsGPT/extensions/react-widget/src/App.tsx) | entrypoints signal |
| docs | [README.md](../../../../sources/arc53__DocsGPT/README.md) | docs signal |
| docs | [tests/e2e/README.md](../../../../sources/arc53__DocsGPT/tests/e2e/README.md) | docs signal |
| docs | [tests/e2e/fixtures/docs/_generate.py](../../../../sources/arc53__DocsGPT/tests/e2e/fixtures/docs/_generate.py) | docs signal |
| docs | [tests/e2e/fixtures/docs/corrupt.pdf](../../../../sources/arc53__DocsGPT/tests/e2e/fixtures/docs/corrupt.pdf) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 7 | [frontend/src/App.tsx](../../../../sources/arc53__DocsGPT/frontend/src/App.tsx)<br>[frontend/src/index.css](../../../../sources/arc53__DocsGPT/frontend/src/index.css)<br>[frontend/src/main.tsx](../../../../sources/arc53__DocsGPT/frontend/src/main.tsx)<br>[extensions/react-widget/src/App.tsx](../../../../sources/arc53__DocsGPT/extensions/react-widget/src/App.tsx)<br>[extensions/react-widget/src/index.html](../../../../sources/arc53__DocsGPT/extensions/react-widget/src/index.html)<br>[extensions/react-widget/src/index.ts](../../../../sources/arc53__DocsGPT/extensions/react-widget/src/index.ts)<br>[extensions/react-widget/src/main.tsx](../../../../sources/arc53__DocsGPT/extensions/react-widget/src/main.tsx) |
| agentRuntime | 196 | [AGENTS.md](../../../../sources/arc53__DocsGPT/AGENTS.md)<br>[tests/e2e/specs/tier-b/agent-preview.spec.ts](../../../../sources/arc53__DocsGPT/tests/e2e/specs/tier-b/agent-preview.spec.ts)<br>[tests/e2e/specs/tier-b/workflow-builder.spec.ts](../../../../sources/arc53__DocsGPT/tests/e2e/specs/tier-b/workflow-builder.spec.ts)<br>[tests/e2e/specs/tier-a/agent-pin.spec.ts](../../../../sources/arc53__DocsGPT/tests/e2e/specs/tier-a/agent-pin.spec.ts)<br>[tests/e2e/specs/tier-a/agent-share-user.spec.ts](../../../../sources/arc53__DocsGPT/tests/e2e/specs/tier-a/agent-share-user.spec.ts)<br>[tests/e2e/specs/tier-a/agents.spec.ts](../../../../sources/arc53__DocsGPT/tests/e2e/specs/tier-a/agents.spec.ts)<br>[tests/e2e/specs/tier-a/tools.spec.ts](../../../../sources/arc53__DocsGPT/tests/e2e/specs/tier-a/tools.spec.ts)<br>[tests/e2e/helpers/agents.ts](../../../../sources/arc53__DocsGPT/tests/e2e/helpers/agents.ts) |
| mcp | 11 | [tests/services/test_mcp_server.py](../../../../sources/arc53__DocsGPT/tests/services/test_mcp_server.py)<br>[tests/integration/test_mcp.py](../../../../sources/arc53__DocsGPT/tests/integration/test_mcp.py)<br>[tests/api/user/test_tools_mcp_pg.py](../../../../sources/arc53__DocsGPT/tests/api/user/test_tools_mcp_pg.py)<br>[tests/api/user/test_tools_mcp.py](../../../../sources/arc53__DocsGPT/tests/api/user/test_tools_mcp.py)<br>[tests/agents/test_mcp_tool.py](../../../../sources/arc53__DocsGPT/tests/agents/test_mcp_tool.py)<br>[tests/agents/tools/test_mcp_tool.py](../../../../sources/arc53__DocsGPT/tests/agents/tools/test_mcp_tool.py)<br>[frontend/src/assets/toolIcons/tool_mcp_tool.svg](../../../../sources/arc53__DocsGPT/frontend/src/assets/toolIcons/tool_mcp_tool.svg)<br>[docs/content/Guides/Integrations/mcp-tool-integration.mdx](../../../../sources/arc53__DocsGPT/docs/content/Guides/Integrations/mcp-tool-integration.mdx) |
| retrieval | 39 | [tests/test_memory_tool.py](../../../../sources/arc53__DocsGPT/tests/test_memory_tool.py)<br>[tests/worker/test_ingest_checkpoint.py](../../../../sources/arc53__DocsGPT/tests/worker/test_ingest_checkpoint.py)<br>[tests/worker/test_ingest_connector.py](../../../../sources/arc53__DocsGPT/tests/worker/test_ingest_connector.py)<br>[tests/worker/test_ingest_worker.py](../../../../sources/arc53__DocsGPT/tests/worker/test_ingest_worker.py)<br>[tests/vectorstore/test_vector_creator.py](../../../../sources/arc53__DocsGPT/tests/vectorstore/test_vector_creator.py)<br>[tests/storage/db/repositories/test_ingest_chunk_progress.py](../../../../sources/arc53__DocsGPT/tests/storage/db/repositories/test_ingest_chunk_progress.py)<br>[tests/parser/file/test_embedding_pipeline.py](../../../../sources/arc53__DocsGPT/tests/parser/file/test_embedding_pipeline.py)<br>[tests/agents/test_workflow_agent_graph.py](../../../../sources/arc53__DocsGPT/tests/agents/test_workflow_agent_graph.py) |
| spec | 39 | [tests/requirements.txt](../../../../sources/arc53__DocsGPT/tests/requirements.txt)<br>[tests/e2e/specs/tier-c/ui-smoke.spec.ts](../../../../sources/arc53__DocsGPT/tests/e2e/specs/tier-c/ui-smoke.spec.ts)<br>[tests/e2e/specs/tier-b/agent-preview.spec.ts](../../../../sources/arc53__DocsGPT/tests/e2e/specs/tier-b/agent-preview.spec.ts)<br>[tests/e2e/specs/tier-b/artifacts.spec.ts](../../../../sources/arc53__DocsGPT/tests/e2e/specs/tier-b/artifacts.spec.ts)<br>[tests/e2e/specs/tier-b/chunks.spec.ts](../../../../sources/arc53__DocsGPT/tests/e2e/specs/tier-b/chunks.spec.ts)<br>[tests/e2e/specs/tier-b/conversation-visibility.spec.ts](../../../../sources/arc53__DocsGPT/tests/e2e/specs/tier-b/conversation-visibility.spec.ts)<br>[tests/e2e/specs/tier-b/folders.spec.ts](../../../../sources/arc53__DocsGPT/tests/e2e/specs/tier-b/folders.spec.ts)<br>[tests/e2e/specs/tier-b/images.spec.ts](../../../../sources/arc53__DocsGPT/tests/e2e/specs/tier-b/images.spec.ts) |
| eval | 456 | [tests/__init__.py](../../../../sources/arc53__DocsGPT/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/arc53__DocsGPT/tests/conftest.py)<br>[tests/QA_TESTS.md](../../../../sources/arc53__DocsGPT/tests/QA_TESTS.md)<br>[tests/requirements.txt](../../../../sources/arc53__DocsGPT/tests/requirements.txt)<br>[tests/test_agent_token_tracking.py](../../../../sources/arc53__DocsGPT/tests/test_agent_token_tracking.py)<br>[tests/test_app_routes.py](../../../../sources/arc53__DocsGPT/tests/test_app_routes.py)<br>[tests/test_app.py](../../../../sources/arc53__DocsGPT/tests/test_app.py)<br>[tests/test_asgi.py](../../../../sources/arc53__DocsGPT/tests/test_asgi.py) |
| security | 32 | [SECURITY.md](../../../../sources/arc53__DocsGPT/SECURITY.md)<br>[tests/test_auth.py](../../../../sources/arc53__DocsGPT/tests/test_auth.py)<br>[tests/test_zip_extraction_security.py](../../../../sources/arc53__DocsGPT/tests/test_zip_extraction_security.py)<br>[tests/security/__init__.py](../../../../sources/arc53__DocsGPT/tests/security/__init__.py)<br>[tests/security/test_encryption.py](../../../../sources/arc53__DocsGPT/tests/security/test_encryption.py)<br>[tests/security/test_safe_url.py](../../../../sources/arc53__DocsGPT/tests/security/test_safe_url.py)<br>[tests/parser/connectors/test_auth_token_leakage.py](../../../../sources/arc53__DocsGPT/tests/parser/connectors/test_auth_token_leakage.py)<br>[tests/parser/connectors/test_google_drive_auth.py](../../../../sources/arc53__DocsGPT/tests/parser/connectors/test_google_drive_auth.py) |
| ci | 14 | [.github/workflows/backend-release.yml](../../../../sources/arc53__DocsGPT/.github/workflows/backend-release.yml)<br>[.github/workflows/bandit.yaml](../../../../sources/arc53__DocsGPT/.github/workflows/bandit.yaml)<br>[.github/workflows/ci.yml](../../../../sources/arc53__DocsGPT/.github/workflows/ci.yml)<br>[.github/workflows/cife.yml](../../../../sources/arc53__DocsGPT/.github/workflows/cife.yml)<br>[.github/workflows/docker-develop-build.yml](../../../../sources/arc53__DocsGPT/.github/workflows/docker-develop-build.yml)<br>[.github/workflows/docker-develop-fe-build.yml](../../../../sources/arc53__DocsGPT/.github/workflows/docker-develop-fe-build.yml)<br>[.github/workflows/labeler.yml](../../../../sources/arc53__DocsGPT/.github/workflows/labeler.yml)<br>[.github/workflows/lint.yml](../../../../sources/arc53__DocsGPT/.github/workflows/lint.yml) |
| container | 26 | [frontend/Dockerfile](../../../../sources/arc53__DocsGPT/frontend/Dockerfile)<br>[deployment/docker-compose-azure.yaml](../../../../sources/arc53__DocsGPT/deployment/docker-compose-azure.yaml)<br>[deployment/docker-compose-dev.yaml](../../../../sources/arc53__DocsGPT/deployment/docker-compose-dev.yaml)<br>[deployment/docker-compose-hub.yaml](../../../../sources/arc53__DocsGPT/deployment/docker-compose-hub.yaml)<br>[deployment/docker-compose-local.yaml](../../../../sources/arc53__DocsGPT/deployment/docker-compose-local.yaml)<br>[deployment/docker-compose.yaml](../../../../sources/arc53__DocsGPT/deployment/docker-compose.yaml)<br>[deployment/optional/docker-compose.optional.ollama-cpu.yaml](../../../../sources/arc53__DocsGPT/deployment/optional/docker-compose.optional.ollama-cpu.yaml)<br>[deployment/optional/docker-compose.optional.ollama-gpu.yaml](../../../../sources/arc53__DocsGPT/deployment/optional/docker-compose.optional.ollama-gpu.yaml) |
| instruction | 1 | [AGENTS.md](../../../../sources/arc53__DocsGPT/AGENTS.md) |
| docs | 98 | [README.md](../../../../sources/arc53__DocsGPT/README.md)<br>[tests/e2e/README.md](../../../../sources/arc53__DocsGPT/tests/e2e/README.md)<br>[tests/e2e/fixtures/docs/_generate.py](../../../../sources/arc53__DocsGPT/tests/e2e/fixtures/docs/_generate.py)<br>[tests/e2e/fixtures/docs/corrupt.pdf](../../../../sources/arc53__DocsGPT/tests/e2e/fixtures/docs/corrupt.pdf)<br>[tests/e2e/fixtures/docs/notes.txt](../../../../sources/arc53__DocsGPT/tests/e2e/fixtures/docs/notes.txt)<br>[tests/e2e/fixtures/docs/oversize.pdf](../../../../sources/arc53__DocsGPT/tests/e2e/fixtures/docs/oversize.pdf)<br>[tests/e2e/fixtures/docs/readme.md](../../../../sources/arc53__DocsGPT/tests/e2e/fixtures/docs/readme.md)<br>[tests/e2e/fixtures/docs/small.pdf](../../../../sources/arc53__DocsGPT/tests/e2e/fixtures/docs/small.pdf) |
| config | 9 | [tests/requirements.txt](../../../../sources/arc53__DocsGPT/tests/requirements.txt)<br>[tests/e2e/package.json](../../../../sources/arc53__DocsGPT/tests/e2e/package.json)<br>[tests/e2e/tsconfig.json](../../../../sources/arc53__DocsGPT/tests/e2e/tsconfig.json)<br>[frontend/package.json](../../../../sources/arc53__DocsGPT/frontend/package.json)<br>[frontend/tsconfig.json](../../../../sources/arc53__DocsGPT/frontend/tsconfig.json)<br>[extensions/react-widget/package.json](../../../../sources/arc53__DocsGPT/extensions/react-widget/package.json)<br>[extensions/react-widget/tsconfig.json](../../../../sources/arc53__DocsGPT/extensions/react-widget/tsconfig.json)<br>[docs/package.json](../../../../sources/arc53__DocsGPT/docs/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 456 | [tests/__init__.py](../../../../sources/arc53__DocsGPT/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/arc53__DocsGPT/tests/conftest.py)<br>[tests/QA_TESTS.md](../../../../sources/arc53__DocsGPT/tests/QA_TESTS.md)<br>[tests/requirements.txt](../../../../sources/arc53__DocsGPT/tests/requirements.txt)<br>[tests/test_agent_token_tracking.py](../../../../sources/arc53__DocsGPT/tests/test_agent_token_tracking.py)<br>[tests/test_app_routes.py](../../../../sources/arc53__DocsGPT/tests/test_app_routes.py) |
| CI workflows | 14 | [.github/workflows/backend-release.yml](../../../../sources/arc53__DocsGPT/.github/workflows/backend-release.yml)<br>[.github/workflows/bandit.yaml](../../../../sources/arc53__DocsGPT/.github/workflows/bandit.yaml)<br>[.github/workflows/ci.yml](../../../../sources/arc53__DocsGPT/.github/workflows/ci.yml)<br>[.github/workflows/cife.yml](../../../../sources/arc53__DocsGPT/.github/workflows/cife.yml)<br>[.github/workflows/docker-develop-build.yml](../../../../sources/arc53__DocsGPT/.github/workflows/docker-develop-build.yml)<br>[.github/workflows/docker-develop-fe-build.yml](../../../../sources/arc53__DocsGPT/.github/workflows/docker-develop-fe-build.yml) |
| Containers / deploy | 26 | [frontend/Dockerfile](../../../../sources/arc53__DocsGPT/frontend/Dockerfile)<br>[deployment/docker-compose-azure.yaml](../../../../sources/arc53__DocsGPT/deployment/docker-compose-azure.yaml)<br>[deployment/docker-compose-dev.yaml](../../../../sources/arc53__DocsGPT/deployment/docker-compose-dev.yaml)<br>[deployment/docker-compose-hub.yaml](../../../../sources/arc53__DocsGPT/deployment/docker-compose-hub.yaml)<br>[deployment/docker-compose-local.yaml](../../../../sources/arc53__DocsGPT/deployment/docker-compose-local.yaml)<br>[deployment/docker-compose.yaml](../../../../sources/arc53__DocsGPT/deployment/docker-compose.yaml) |
| Security / policy | 32 | [SECURITY.md](../../../../sources/arc53__DocsGPT/SECURITY.md)<br>[tests/test_auth.py](../../../../sources/arc53__DocsGPT/tests/test_auth.py)<br>[tests/test_zip_extraction_security.py](../../../../sources/arc53__DocsGPT/tests/test_zip_extraction_security.py)<br>[tests/security/__init__.py](../../../../sources/arc53__DocsGPT/tests/security/__init__.py)<br>[tests/security/test_encryption.py](../../../../sources/arc53__DocsGPT/tests/security/test_encryption.py)<br>[tests/security/test_safe_url.py](../../../../sources/arc53__DocsGPT/tests/security/test_safe_url.py) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/arc53__DocsGPT/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `tests/test_memory_tool.py`, `tests/worker/test_ingest_checkpoint.py`, `tests/worker/test_ingest_connector.py`.
2. Trace execution through entrypoints: `frontend/src/App.tsx`, `frontend/src/index.css`, `frontend/src/main.tsx`.
3. Map agent/tool runtime through: `AGENTS.md`, `tests/e2e/specs/tier-b/agent-preview.spec.ts`, `tests/e2e/specs/tier-b/workflow-builder.spec.ts`.
4. Inspect retrieval/memory/indexing through: `tests/test_memory_tool.py`, `tests/worker/test_ingest_checkpoint.py`, `tests/worker/test_ingest_connector.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/conftest.py`, `tests/QA_TESTS.md`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Private AI platform for agents, assistants and enterprise search. Built in Agent Builder, Deep research, Document analys. 핵심 구조 신호는 Python, README.md, AGENTS.md, LICENSE, tests, ci이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
