# schmitech/orbit Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A self-hosted AI infrastructure for private RAG and multi-model applications.

## 요약

- 조사 단위: `sources/schmitech__orbit` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,331 files, 236 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=server/main.py, docs/server.md, clients/orbitchat/src/App.tsx이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | schmitech/orbit |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 282 |
| Forks | 49 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/schmitech__orbit](../../../../sources/schmitech__orbit) |
| Existing report | [reports/global-trending/repositories/schmitech__orbit.md](../../../global-trending/repositories/schmitech__orbit.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1331 / 236 |
| Max observed depth | 8 |
| Top directories | bin, clients, config, docker, docs, examples, install, server, utils |
| Top extensions | .py: 717, .md: 236, .yaml: 143, .ts: 53, .tsx: 39, .sh: 29, .js: 20, .sql: 18, .json: 17, .pdf: 9, (none): 9, .example: 5 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| server | source boundary | 99 |
| docs | documentation surface | 31 |
| examples/intent-templates | examples workspace | 14 |
| examples/sample-files | examples workspace | 4 |
| bin | top-level component | 1 |
| clients | source boundary | 1 |
| config | top-level component | 1 |
| docker | documentation surface | 1 |
| examples | top-level component | 1 |
| examples/customer-orders | examples workspace | 1 |
| install | top-level component | 1 |
| utils | top-level component | 1 |


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
| entrypoints | [server/main.py](../../../../sources/schmitech__orbit/server/main.py) | entrypoints signal |
| entrypoints | [docs/server.md](../../../../sources/schmitech__orbit/docs/server.md) | entrypoints signal |
| entrypoints | [clients/orbitchat/src/App.tsx](../../../../sources/schmitech__orbit/clients/orbitchat/src/App.tsx) | entrypoints signal |
| entrypoints | [clients/orbitchat/src/index.css](../../../../sources/schmitech__orbit/clients/orbitchat/src/index.css) | entrypoints signal |
| container | [docker/docker-compose.gpu.yml](../../../../sources/schmitech__orbit/docker/docker-compose.gpu.yml) | container signal |
| container | [docker/docker-compose.yml](../../../../sources/schmitech__orbit/docker/docker-compose.yml) | container signal |
| container | [docker/Dockerfile](../../../../sources/schmitech__orbit/docker/Dockerfile) | container signal |
| config | [package.json](../../../../sources/schmitech__orbit/package.json) | config signal |
| config | [server/tests/pyproject.toml](../../../../sources/schmitech__orbit/server/tests/pyproject.toml) | config signal |
| config | [clients/orbitchat/package.json](../../../../sources/schmitech__orbit/clients/orbitchat/package.json) | config signal |
| config | [clients/orbitchat/tsconfig.json](../../../../sources/schmitech__orbit/clients/orbitchat/tsconfig.json) | config signal |
| eval | [utils/vllm/test-query.sh](../../../../sources/schmitech__orbit/utils/vllm/test-query.sh) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 32 | [server/main.py](../../../../sources/schmitech__orbit/server/main.py)<br>[docs/server.md](../../../../sources/schmitech__orbit/docs/server.md)<br>[clients/orbitchat/src/App.tsx](../../../../sources/schmitech__orbit/clients/orbitchat/src/App.tsx)<br>[clients/orbitchat/src/index.css](../../../../sources/schmitech__orbit/clients/orbitchat/src/index.css)<br>[clients/orbitchat/src/main.tsx](../../../../sources/schmitech__orbit/clients/orbitchat/src/main.tsx)<br>[clients/orbitchat/bin/dev-server.js](../../../../sources/schmitech__orbit/clients/orbitchat/bin/dev-server.js)<br>[clients/orbitchat/bin/orbitchat.js](../../../../sources/schmitech__orbit/clients/orbitchat/bin/orbitchat.js)<br>[clients/openai-realtime-voice/src/main.ts](../../../../sources/schmitech__orbit/clients/openai-realtime-voice/src/main.ts) |
| agentRuntime | 22 | [server/tools/__init__.py](../../../../sources/schmitech__orbit/server/tools/__init__.py)<br>[server/tools/test_template_query.py](../../../../sources/schmitech__orbit/server/tools/test_template_query.py)<br>[server/retrievers/implementations/intent/agent/__init__.py](../../../../sources/schmitech__orbit/server/retrievers/implementations/intent/agent/__init__.py)<br>[server/retrievers/implementations/intent/agent/response_synthesizer.py](../../../../sources/schmitech__orbit/server/retrievers/implementations/intent/agent/response_synthesizer.py)<br>[server/retrievers/implementations/intent/agent/tool_definitions.py](../../../../sources/schmitech__orbit/server/retrievers/implementations/intent/agent/tool_definitions.py)<br>[server/retrievers/implementations/intent/agent/tool_executor.py](../../../../sources/schmitech__orbit/server/retrievers/implementations/intent/agent/tool_executor.py)<br>[server/inference/pipeline/steps/context_retrieval.py](../../../../sources/schmitech__orbit/server/inference/pipeline/steps/context_retrieval.py)<br>[examples/intent-templates/agent-template/agent-assistant-intro.md](../../../../sources/schmitech__orbit/examples/intent-templates/agent-template/agent-assistant-intro.md) |
| mcp | 9 | [server/tests/test_services/test_mcp_client_service.py](../../../../sources/schmitech__orbit/server/tests/test_services/test_mcp_client_service.py)<br>[server/tests/test_middleware/test_mcp_client.py](../../../../sources/schmitech__orbit/server/tests/test_middleware/test_mcp_client.py)<br>[server/tests/test_inference/test_mcp_agent_step.py](../../../../sources/schmitech__orbit/server/tests/test_inference/test_mcp_agent_step.py)<br>[server/services/mcp_client_service.py](../../../../sources/schmitech__orbit/server/services/mcp_client_service.py)<br>[server/inference/pipeline/steps/mcp_agent.py](../../../../sources/schmitech__orbit/server/inference/pipeline/steps/mcp_agent.py)<br>[docs/cookbook/use-orbit-with-openclaw-as-mcp-agent.md](../../../../sources/schmitech__orbit/docs/cookbook/use-orbit-with-openclaw-as-mcp-agent.md)<br>[docs/adapters/mcp-agent.md](../../../../sources/schmitech__orbit/docs/adapters/mcp-agent.md)<br>[config/mcp_client.yaml](../../../../sources/schmitech__orbit/config/mcp_client.yaml) |
| retrieval | 92 | [utils/vector/qdrant/create_qdrant_collection.py](../../../../sources/schmitech__orbit/utils/vector/qdrant/create_qdrant_collection.py)<br>[utils/vector/qdrant/delete_qdrant_collection.py](../../../../sources/schmitech__orbit/utils/vector/qdrant/delete_qdrant_collection.py)<br>[utils/vector/qdrant/list_qdrant_collections.py](../../../../sources/schmitech__orbit/utils/vector/qdrant/list_qdrant_collections.py)<br>[utils/vector/qdrant/qdrant-ec2-startup-guide.md](../../../../sources/schmitech__orbit/utils/vector/qdrant/qdrant-ec2-startup-guide.md)<br>[utils/vector/qdrant/query_qdrant_collection.py](../../../../sources/schmitech__orbit/utils/vector/qdrant/query_qdrant_collection.py)<br>[utils/vector/qdrant/README.md](../../../../sources/schmitech__orbit/utils/vector/qdrant/README.md)<br>[utils/vector/qdrant/start_qdrant.sh](../../../../sources/schmitech__orbit/utils/vector/qdrant/start_qdrant.sh)<br>[utils/vector/pinecone/create_pinecone_index.py](../../../../sources/schmitech__orbit/utils/vector/pinecone/create_pinecone_index.py) |
| spec | 14 | [install/generate_requirements.py](../../../../sources/schmitech__orbit/install/generate_requirements.py)<br>[docs/autocomplete-architecture.md](../../../../sources/schmitech__orbit/docs/autocomplete-architecture.md)<br>[docs/conversation-threading-architecture.md](../../../../sources/schmitech__orbit/docs/conversation-threading-architecture.md)<br>[docs/language-detection-architecture.md](../../../../sources/schmitech__orbit/docs/language-detection-architecture.md)<br>[docs/pipeline-inference-architecture.md](../../../../sources/schmitech__orbit/docs/pipeline-inference-architecture.md)<br>[docs/rate-limiting-architecture.md](../../../../sources/schmitech__orbit/docs/rate-limiting-architecture.md)<br>[docs/reranker-architecture.md](../../../../sources/schmitech__orbit/docs/reranker-architecture.md)<br>[docs/sql-retriever-architecture.md](../../../../sources/schmitech__orbit/docs/sql-retriever-architecture.md) |
| eval | 243 | [utils/vllm/test-query.sh](../../../../sources/schmitech__orbit/utils/vllm/test-query.sh)<br>[utils/vector/chroma/test_chroma_data.py](../../../../sources/schmitech__orbit/utils/vector/chroma/test_chroma_data.py)<br>[utils/templates/test_adapter_loading.py](../../../../sources/schmitech__orbit/utils/templates/test_adapter_loading.py)<br>[utils/templates/test_template_generator.py](../../../../sources/schmitech__orbit/utils/templates/test_template_generator.py)<br>[utils/templates/examples/sqlite/contact/contact_test_queries.md](../../../../sources/schmitech__orbit/utils/templates/examples/sqlite/contact/contact_test_queries.md)<br>[utils/scripts/test_microphone.py](../../../../sources/schmitech__orbit/utils/scripts/test_microphone.py)<br>[utils/scripts/test_vision_manual.py](../../../../sources/schmitech__orbit/utils/scripts/test_vision_manual.py)<br>[utils/duckdb/test_template.py](../../../../sources/schmitech__orbit/utils/duckdb/test_template.py) |
| security | 39 | [SECURITY.md](../../../../sources/schmitech__orbit/SECURITY.md)<br>[utils/scripts/get-auth-token.sh](../../../../sources/schmitech__orbit/utils/scripts/get-auth-token.sh)<br>[utils/scripts/sync_auth_backends.py](../../../../sources/schmitech__orbit/utils/scripts/sync_auth_backends.py)<br>[server/tests/test_services/test_admin_audit.py](../../../../sources/schmitech__orbit/server/tests/test_services/test_admin_audit.py)<br>[server/tests/test_services/test_audit_service.py](../../../../sources/schmitech__orbit/server/tests/test_services/test_audit_service.py)<br>[server/tests/test_middleware/test_admin_audit_middleware.py](../../../../sources/schmitech__orbit/server/tests/test_middleware/test_admin_audit_middleware.py)<br>[server/tests/test_auth/__init__.py](../../../../sources/schmitech__orbit/server/tests/test_auth/__init__.py)<br>[server/tests/test_auth/test_api_key_integration.py](../../../../sources/schmitech__orbit/server/tests/test_auth/test_api_key_integration.py) |
| ci | 0 | not obvious |
| container | 3 | [docker/docker-compose.gpu.yml](../../../../sources/schmitech__orbit/docker/docker-compose.gpu.yml)<br>[docker/docker-compose.yml](../../../../sources/schmitech__orbit/docker/docker-compose.yml)<br>[docker/Dockerfile](../../../../sources/schmitech__orbit/docker/Dockerfile) |
| instruction | 2 | [CLAUDE.md](../../../../sources/schmitech__orbit/CLAUDE.md)<br>[clients/orbitchat/CLAUDE.md](../../../../sources/schmitech__orbit/clients/orbitchat/CLAUDE.md) |
| docs | 135 | [README.md](../../../../sources/schmitech__orbit/README.md)<br>[utils/vllm/README.md](../../../../sources/schmitech__orbit/utils/vllm/README.md)<br>[utils/vector/qdrant/README.md](../../../../sources/schmitech__orbit/utils/vector/qdrant/README.md)<br>[utils/vector/pinecone/README.md](../../../../sources/schmitech__orbit/utils/vector/pinecone/README.md)<br>[utils/templates/README.md](../../../../sources/schmitech__orbit/utils/templates/README.md)<br>[utils/templates/docs/creating-seed-templates.md](../../../../sources/schmitech__orbit/utils/templates/docs/creating-seed-templates.md)<br>[utils/templates/docs/enrichment-guide.md](../../../../sources/schmitech__orbit/utils/templates/docs/enrichment-guide.md)<br>[utils/templates/docs/scripts.md](../../../../sources/schmitech__orbit/utils/templates/docs/scripts.md) |
| config | 8 | [package.json](../../../../sources/schmitech__orbit/package.json)<br>[server/tests/pyproject.toml](../../../../sources/schmitech__orbit/server/tests/pyproject.toml)<br>[clients/orbitchat/package.json](../../../../sources/schmitech__orbit/clients/orbitchat/package.json)<br>[clients/orbitchat/tsconfig.json](../../../../sources/schmitech__orbit/clients/orbitchat/tsconfig.json)<br>[clients/openai-realtime-voice/package.json](../../../../sources/schmitech__orbit/clients/openai-realtime-voice/package.json)<br>[clients/openai-realtime-voice/tsconfig.json](../../../../sources/schmitech__orbit/clients/openai-realtime-voice/tsconfig.json)<br>[clients/node-api/package.json](../../../../sources/schmitech__orbit/clients/node-api/package.json)<br>[clients/node-api/tsconfig.json](../../../../sources/schmitech__orbit/clients/node-api/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 243 | [utils/vllm/test-query.sh](../../../../sources/schmitech__orbit/utils/vllm/test-query.sh)<br>[utils/vector/chroma/test_chroma_data.py](../../../../sources/schmitech__orbit/utils/vector/chroma/test_chroma_data.py)<br>[utils/templates/test_adapter_loading.py](../../../../sources/schmitech__orbit/utils/templates/test_adapter_loading.py)<br>[utils/templates/test_template_generator.py](../../../../sources/schmitech__orbit/utils/templates/test_template_generator.py)<br>[utils/templates/examples/sqlite/contact/contact_test_queries.md](../../../../sources/schmitech__orbit/utils/templates/examples/sqlite/contact/contact_test_queries.md)<br>[utils/scripts/test_microphone.py](../../../../sources/schmitech__orbit/utils/scripts/test_microphone.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 3 | [docker/docker-compose.gpu.yml](../../../../sources/schmitech__orbit/docker/docker-compose.gpu.yml)<br>[docker/docker-compose.yml](../../../../sources/schmitech__orbit/docker/docker-compose.yml)<br>[docker/Dockerfile](../../../../sources/schmitech__orbit/docker/Dockerfile) |
| Security / policy | 39 | [SECURITY.md](../../../../sources/schmitech__orbit/SECURITY.md)<br>[utils/scripts/get-auth-token.sh](../../../../sources/schmitech__orbit/utils/scripts/get-auth-token.sh)<br>[utils/scripts/sync_auth_backends.py](../../../../sources/schmitech__orbit/utils/scripts/sync_auth_backends.py)<br>[server/tests/test_services/test_admin_audit.py](../../../../sources/schmitech__orbit/server/tests/test_services/test_admin_audit.py)<br>[server/tests/test_services/test_audit_service.py](../../../../sources/schmitech__orbit/server/tests/test_services/test_audit_service.py)<br>[server/tests/test_middleware/test_admin_audit_middleware.py](../../../../sources/schmitech__orbit/server/tests/test_middleware/test_admin_audit_middleware.py) |
| Agent instructions | 2 | [CLAUDE.md](../../../../sources/schmitech__orbit/CLAUDE.md)<br>[clients/orbitchat/CLAUDE.md](../../../../sources/schmitech__orbit/clients/orbitchat/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `server/main.py`, `docs/server.md`, `clients/orbitchat/src/App.tsx`.
2. Trace execution through entrypoints: `server/main.py`, `docs/server.md`, `clients/orbitchat/src/App.tsx`.
3. Map agent/tool runtime through: `server/tools/__init__.py`, `server/tools/test_template_query.py`, `server/retrievers/implementations/intent/agent/__init__.py`.
4. Inspect retrieval/memory/indexing through: `utils/vector/qdrant/create_qdrant_collection.py`, `utils/vector/qdrant/delete_qdrant_collection.py`, `utils/vector/qdrant/list_qdrant_collections.py`.
5. Verify behavior through test/eval files: `utils/vllm/test-query.sh`, `utils/vector/chroma/test_chroma_data.py`, `utils/templates/test_adapter_loading.py`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 A self hosted AI infrastructure for private RAG and multi model applications.. 핵심 구조 신호는 Python, package.json, README.md, CLAUDE.md, LICENSE, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
