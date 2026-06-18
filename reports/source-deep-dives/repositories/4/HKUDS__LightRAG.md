# HKUDS/LightRAG Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 679 files, 124 directories.

## 요약

- 조사 단위: `sources/HKUDS__LightRAG` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 679 files, 124 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/pipeline/test_doc_status_chunk_preservation.py, tests/pipeline/test_graph_keyed_locks.py, tests/llm/test_asymmetric_embedding.py이고, 의존성 단서는 openai, anthropic, langchain, llama-index, fastapi, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | HKUDS/LightRAG |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 36711 |
| Forks | 5182 |
| License | MIT |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/HKUDS__LightRAG](../../../../sources/HKUDS__LightRAG) |
| Existing report | [reports/llm-wiki/repositories/HKUDS__LightRAG.md](../../../llm-wiki/repositories/HKUDS__LightRAG.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 679 / 124 |
| Max observed depth | 8 |
| Top directories | .claude, .clinerules, .github, assets, docs, examples, k8s-deploy, lightrag, lightrag_webui, prompts, README.assets, reproduce, scripts, tests |
| Top extensions | .py: 374, .tsx: 74, .md: 52, .yml: 29, .json: 25, .ts: 25, .sh: 22, .yaml: 15, .png: 12, (none): 10, .jsonl: 8, .txt: 7 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 73 |
| docs | documentation surface | 25 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| examples | top-level component | 1 |
| k8s-deploy | deployment surface | 1 |
| lightrag | top-level component | 1 |
| lightrag_webui | source boundary | 1 |
| prompts | top-level component | 1 |
| README.assets | top-level component | 1 |
| reproduce | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| serve-dev | Makefile | dev | make dev |
| serve-dev | pyproject.toml | lightrag-server | lightrag-server |
| utility | pyproject.toml | lightrag-gunicorn | lightrag-gunicorn |
| utility | pyproject.toml | lightrag-hash-password | lightrag-hash-password |
| utility | pyproject.toml | lightrag-download-cache | lightrag-download-cache |
| utility | pyproject.toml | lightrag-clean-llmqc | lightrag-clean-llmqc |
| build | pyproject.toml | lightrag-rebuild-vdb | lightrag-rebuild-vdb |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | none |
| agentFrameworks | langchain, llama-index |
| vectorStores | qdrant, milvus, pgvector, faiss |
| modelRuntime | ollama, llama |
| webRuntime | fastapi |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [tests/pipeline/test_doc_status_chunk_preservation.py](../../../../sources/HKUDS__LightRAG/tests/pipeline/test_doc_status_chunk_preservation.py) | retrieval signal |
| retrieval | [tests/pipeline/test_graph_keyed_locks.py](../../../../sources/HKUDS__LightRAG/tests/pipeline/test_graph_keyed_locks.py) | retrieval signal |
| retrieval | [tests/llm/test_asymmetric_embedding.py](../../../../sources/HKUDS__LightRAG/tests/llm/test_asymmetric_embedding.py) | retrieval signal |
| retrieval | [tests/llm/voyageai_impl/test_voyageai_embed.py](../../../../sources/HKUDS__LightRAG/tests/llm/voyageai_impl/test_voyageai_embed.py) | retrieval signal |
| entrypoints | [lightrag_webui/src/App.tsx](../../../../sources/HKUDS__LightRAG/lightrag_webui/src/App.tsx) | entrypoints signal |
| entrypoints | [lightrag_webui/src/index.css](../../../../sources/HKUDS__LightRAG/lightrag_webui/src/index.css) | entrypoints signal |
| entrypoints | [lightrag_webui/src/main.tsx](../../../../sources/HKUDS__LightRAG/lightrag_webui/src/main.tsx) | entrypoints signal |
| docs | [README-zh.md](../../../../sources/HKUDS__LightRAG/README-zh.md) | docs signal |
| docs | [README.md](../../../../sources/HKUDS__LightRAG/README.md) | docs signal |
| docs | [tests/workspace/README_WORKSPACE_ISOLATION_TESTS.md](../../../../sources/HKUDS__LightRAG/tests/workspace/README_WORKSPACE_ISOLATION_TESTS.md) | docs signal |
| docs | [README.assets/b2aaf634151b4706892693ffb43d9093.png](../../../../sources/HKUDS__LightRAG/README.assets/b2aaf634151b4706892693ffb43d9093.png) | docs signal |
| eval | [tests/__init__.py](../../../../sources/HKUDS__LightRAG/tests/__init__.py) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [lightrag_webui/src/App.tsx](../../../../sources/HKUDS__LightRAG/lightrag_webui/src/App.tsx)<br>[lightrag_webui/src/index.css](../../../../sources/HKUDS__LightRAG/lightrag_webui/src/index.css)<br>[lightrag_webui/src/main.tsx](../../../../sources/HKUDS__LightRAG/lightrag_webui/src/main.tsx) |
| agentRuntime | 30 | [AGENTS.md](../../../../sources/HKUDS__LightRAG/AGENTS.md)<br>[tests/tools/__init__.py](../../../../sources/HKUDS__LightRAG/tests/tools/__init__.py)<br>[tests/tools/test_rebuild_vdb.py](../../../../sources/HKUDS__LightRAG/tests/tools/test_rebuild_vdb.py)<br>[lightrag_webui/src/hooks/useDebounce.tsx](../../../../sources/HKUDS__LightRAG/lightrag_webui/src/hooks/useDebounce.tsx)<br>[lightrag_webui/src/hooks/useLightragGraph.tsx](../../../../sources/HKUDS__LightRAG/lightrag_webui/src/hooks/useLightragGraph.tsx)<br>[lightrag_webui/src/hooks/useRandomGraph.tsx](../../../../sources/HKUDS__LightRAG/lightrag_webui/src/hooks/useRandomGraph.tsx)<br>[lightrag_webui/src/hooks/useTheme.tsx](../../../../sources/HKUDS__LightRAG/lightrag_webui/src/hooks/useTheme.tsx)<br>[lightrag_webui/src/contexts/context.ts](../../../../sources/HKUDS__LightRAG/lightrag_webui/src/contexts/context.ts) |
| mcp | 0 | not obvious |
| retrieval | 65 | [tests/pipeline/test_doc_status_chunk_preservation.py](../../../../sources/HKUDS__LightRAG/tests/pipeline/test_doc_status_chunk_preservation.py)<br>[tests/pipeline/test_graph_keyed_locks.py](../../../../sources/HKUDS__LightRAG/tests/pipeline/test_graph_keyed_locks.py)<br>[tests/llm/test_asymmetric_embedding.py](../../../../sources/HKUDS__LightRAG/tests/llm/test_asymmetric_embedding.py)<br>[tests/llm/voyageai_impl/test_voyageai_embed.py](../../../../sources/HKUDS__LightRAG/tests/llm/voyageai_impl/test_voyageai_embed.py)<br>[tests/kg/test_batch_graph_operations.py](../../../../sources/HKUDS__LightRAG/tests/kg/test_batch_graph_operations.py)<br>[tests/kg/test_graph_storage.py](../../../../sources/HKUDS__LightRAG/tests/kg/test_graph_storage.py)<br>[tests/kg/qdrant_impl/test_qdrant_deferred_embedding.py](../../../../sources/HKUDS__LightRAG/tests/kg/qdrant_impl/test_qdrant_deferred_embedding.py)<br>[tests/kg/postgres_impl/test_postgres_get_knowledge_graph_all.py](../../../../sources/HKUDS__LightRAG/tests/kg/postgres_impl/test_postgres_get_knowledge_graph_all.py) |
| spec | 6 | [requirements-offline-llm.txt](../../../../sources/HKUDS__LightRAG/requirements-offline-llm.txt)<br>[requirements-offline-storage.txt](../../../../sources/HKUDS__LightRAG/requirements-offline-storage.txt)<br>[requirements-offline.txt](../../../../sources/HKUDS__LightRAG/requirements-offline.txt)<br>[scripts/setup/lib/storage_requirements.sh](../../../../sources/HKUDS__LightRAG/scripts/setup/lib/storage_requirements.sh)<br>[lightrag/tools/lightrag_visualizer/requirements.txt](../../../../sources/HKUDS__LightRAG/lightrag/tools/lightrag_visualizer/requirements.txt)<br>[lightrag/evaluation/sample_documents/02_rag_architecture.md](../../../../sources/HKUDS__LightRAG/lightrag/evaluation/sample_documents/02_rag_architecture.md) |
| eval | 235 | [tests/__init__.py](../../../../sources/HKUDS__LightRAG/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/HKUDS__LightRAG/tests/conftest.py)<br>[tests/test_create_prefixed_exception.py](../../../../sources/HKUDS__LightRAG/tests/test_create_prefixed_exception.py)<br>[tests/workspace/__init__.py](../../../../sources/HKUDS__LightRAG/tests/workspace/__init__.py)<br>[tests/workspace/README_WORKSPACE_ISOLATION_TESTS.md](../../../../sources/HKUDS__LightRAG/tests/workspace/README_WORKSPACE_ISOLATION_TESTS.md)<br>[tests/workspace/test_workspace_isolation.py](../../../../sources/HKUDS__LightRAG/tests/workspace/test_workspace_isolation.py)<br>[tests/workspace/test_workspace_migration_isolation.py](../../../../sources/HKUDS__LightRAG/tests/workspace/test_workspace_migration_isolation.py)<br>[tests/workspace/test_workspace_path_validation.py](../../../../sources/HKUDS__LightRAG/tests/workspace/test_workspace_path_validation.py) |
| security | 7 | [SECURITY.md](../../../../sources/HKUDS__LightRAG/SECURITY.md)<br>[tests/parser/docx/test_ir_builder_security.py](../../../../sources/HKUDS__LightRAG/tests/parser/docx/test_ir_builder_security.py)<br>[tests/api/auth/__init__.py](../../../../sources/HKUDS__LightRAG/tests/api/auth/__init__.py)<br>[tests/api/auth/test_auth.py](../../../../sources/HKUDS__LightRAG/tests/api/auth/test_auth.py)<br>[tests/api/auth/test_token_auto_renewal.py](../../../../sources/HKUDS__LightRAG/tests/api/auth/test_token_auto_renewal.py)<br>[lightrag/api/auth.py](../../../../sources/HKUDS__LightRAG/lightrag/api/auth.py)<br>[k8s-deploy/lightrag/templates/secret.yaml](../../../../sources/HKUDS__LightRAG/k8s-deploy/lightrag/templates/secret.yaml) |
| ci | 8 | [.github/workflows/copilot-setup-steps.yml](../../../../sources/HKUDS__LightRAG/.github/workflows/copilot-setup-steps.yml)<br>[.github/workflows/docker-build-lite.yml](../../../../sources/HKUDS__LightRAG/.github/workflows/docker-build-lite.yml)<br>[.github/workflows/docker-build-manual.yml](../../../../sources/HKUDS__LightRAG/.github/workflows/docker-build-manual.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/HKUDS__LightRAG/.github/workflows/docker-publish.yml)<br>[.github/workflows/linting.yaml](../../../../sources/HKUDS__LightRAG/.github/workflows/linting.yaml)<br>[.github/workflows/pypi-publish.yml](../../../../sources/HKUDS__LightRAG/.github/workflows/pypi-publish.yml)<br>[.github/workflows/stale.yaml](../../../../sources/HKUDS__LightRAG/.github/workflows/stale.yaml)<br>[.github/workflows/tests.yml](../../../../sources/HKUDS__LightRAG/.github/workflows/tests.yml) |
| container | 6 | [docker-compose-full.yml](../../../../sources/HKUDS__LightRAG/docker-compose-full.yml)<br>[docker-compose.podman.yml](../../../../sources/HKUDS__LightRAG/docker-compose.podman.yml)<br>[docker-compose.yml](../../../../sources/HKUDS__LightRAG/docker-compose.yml)<br>[Dockerfile](../../../../sources/HKUDS__LightRAG/Dockerfile)<br>[Dockerfile.lite](../../../../sources/HKUDS__LightRAG/Dockerfile.lite)<br>[Dockerfile.postgres](../../../../sources/HKUDS__LightRAG/Dockerfile.postgres) |
| instruction | 2 | [AGENTS.md](../../../../sources/HKUDS__LightRAG/AGENTS.md)<br>[CLAUDE.md](../../../../sources/HKUDS__LightRAG/CLAUDE.md) |
| docs | 46 | [README-zh.md](../../../../sources/HKUDS__LightRAG/README-zh.md)<br>[README.md](../../../../sources/HKUDS__LightRAG/README.md)<br>[tests/workspace/README_WORKSPACE_ISOLATION_TESTS.md](../../../../sources/HKUDS__LightRAG/tests/workspace/README_WORKSPACE_ISOLATION_TESTS.md)<br>[README.assets/b2aaf634151b4706892693ffb43d9093.png](../../../../sources/HKUDS__LightRAG/README.assets/b2aaf634151b4706892693ffb43d9093.png)<br>[README.assets/iShot_2025-03-23_12.40.08.png](../../../../sources/HKUDS__LightRAG/README.assets/iShot_2025-03-23_12.40.08.png)<br>[lightrag_webui/README.md](../../../../sources/HKUDS__LightRAG/lightrag_webui/README.md)<br>[lightrag/tools/README_CLEAN_LLM_QUERY_CACHE.md](../../../../sources/HKUDS__LightRAG/lightrag/tools/README_CLEAN_LLM_QUERY_CACHE.md)<br>[lightrag/tools/README_MIGRATE_LLM_CACHE.md](../../../../sources/HKUDS__LightRAG/lightrag/tools/README_MIGRATE_LLM_CACHE.md) |
| config | 9 | [Makefile](../../../../sources/HKUDS__LightRAG/Makefile)<br>[pyproject.toml](../../../../sources/HKUDS__LightRAG/pyproject.toml)<br>[requirements-offline-llm.txt](../../../../sources/HKUDS__LightRAG/requirements-offline-llm.txt)<br>[requirements-offline-storage.txt](../../../../sources/HKUDS__LightRAG/requirements-offline-storage.txt)<br>[requirements-offline.txt](../../../../sources/HKUDS__LightRAG/requirements-offline.txt)<br>[uv.lock](../../../../sources/HKUDS__LightRAG/uv.lock)<br>[lightrag_webui/package.json](../../../../sources/HKUDS__LightRAG/lightrag_webui/package.json)<br>[lightrag_webui/tsconfig.json](../../../../sources/HKUDS__LightRAG/lightrag_webui/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 235 | [tests/__init__.py](../../../../sources/HKUDS__LightRAG/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/HKUDS__LightRAG/tests/conftest.py)<br>[tests/test_create_prefixed_exception.py](../../../../sources/HKUDS__LightRAG/tests/test_create_prefixed_exception.py)<br>[tests/workspace/__init__.py](../../../../sources/HKUDS__LightRAG/tests/workspace/__init__.py)<br>[tests/workspace/README_WORKSPACE_ISOLATION_TESTS.md](../../../../sources/HKUDS__LightRAG/tests/workspace/README_WORKSPACE_ISOLATION_TESTS.md)<br>[tests/workspace/test_workspace_isolation.py](../../../../sources/HKUDS__LightRAG/tests/workspace/test_workspace_isolation.py) |
| CI workflows | 8 | [.github/workflows/copilot-setup-steps.yml](../../../../sources/HKUDS__LightRAG/.github/workflows/copilot-setup-steps.yml)<br>[.github/workflows/docker-build-lite.yml](../../../../sources/HKUDS__LightRAG/.github/workflows/docker-build-lite.yml)<br>[.github/workflows/docker-build-manual.yml](../../../../sources/HKUDS__LightRAG/.github/workflows/docker-build-manual.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/HKUDS__LightRAG/.github/workflows/docker-publish.yml)<br>[.github/workflows/linting.yaml](../../../../sources/HKUDS__LightRAG/.github/workflows/linting.yaml)<br>[.github/workflows/pypi-publish.yml](../../../../sources/HKUDS__LightRAG/.github/workflows/pypi-publish.yml) |
| Containers / deploy | 6 | [docker-compose-full.yml](../../../../sources/HKUDS__LightRAG/docker-compose-full.yml)<br>[docker-compose.podman.yml](../../../../sources/HKUDS__LightRAG/docker-compose.podman.yml)<br>[docker-compose.yml](../../../../sources/HKUDS__LightRAG/docker-compose.yml)<br>[Dockerfile](../../../../sources/HKUDS__LightRAG/Dockerfile)<br>[Dockerfile.lite](../../../../sources/HKUDS__LightRAG/Dockerfile.lite)<br>[Dockerfile.postgres](../../../../sources/HKUDS__LightRAG/Dockerfile.postgres) |
| Security / policy | 7 | [SECURITY.md](../../../../sources/HKUDS__LightRAG/SECURITY.md)<br>[tests/parser/docx/test_ir_builder_security.py](../../../../sources/HKUDS__LightRAG/tests/parser/docx/test_ir_builder_security.py)<br>[tests/api/auth/__init__.py](../../../../sources/HKUDS__LightRAG/tests/api/auth/__init__.py)<br>[tests/api/auth/test_auth.py](../../../../sources/HKUDS__LightRAG/tests/api/auth/test_auth.py)<br>[tests/api/auth/test_token_auto_renewal.py](../../../../sources/HKUDS__LightRAG/tests/api/auth/test_token_auto_renewal.py)<br>[lightrag/api/auth.py](../../../../sources/HKUDS__LightRAG/lightrag/api/auth.py) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/HKUDS__LightRAG/AGENTS.md)<br>[CLAUDE.md](../../../../sources/HKUDS__LightRAG/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/pipeline/test_doc_status_chunk_preservation.py`, `tests/pipeline/test_graph_keyed_locks.py`, `tests/llm/test_asymmetric_embedding.py`.
2. Trace execution through entrypoints: `lightrag_webui/src/App.tsx`, `lightrag_webui/src/index.css`, `lightrag_webui/src/main.tsx`.
3. Map agent/tool runtime through: `AGENTS.md`, `tests/tools/__init__.py`, `tests/tools/test_rebuild_vdb.py`.
4. Inspect retrieval/memory/indexing through: `tests/pipeline/test_doc_status_chunk_preservation.py`, `tests/pipeline/test_graph_keyed_locks.py`, `tests/llm/test_asymmetric_embedding.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/conftest.py`, `tests/test_create_prefixed_exception.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Local clone structure analysis 679 files, 124 directories.. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, Makefile, README.md이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 major metadata risk not obvious입니다.
