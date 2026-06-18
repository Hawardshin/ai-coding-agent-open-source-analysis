# schmitech/orbit 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

A self-hosted AI infrastructure for private RAG and multi-model applications.

## 요약

- 조사 단위: `sources/schmitech__orbit` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,331 files, 236 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=server/main.py, docs/server.md, clients/orbitchat/src/App.tsx이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | schmitech/orbit |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 282 |
| Forks | 49 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/schmitech__orbit](../../../../sources/schmitech__orbit) |
| 기존 보고서 | [reports/global-trending/repositories/schmitech__orbit.md](../../../global-trending/repositories/schmitech__orbit.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1331 / 236 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | bin, clients, config, docker, docs, examples, install, server, utils |
| 상위 확장자 | .py: 717, .md: 236, .yaml: 143, .ts: 53, .tsx: 39, .sh: 29, .js: 20, .sql: 18, .json: 17, .pdf: 9, (none): 9, .example: 5 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 32 | [server/main.py](../../../../sources/schmitech__orbit/server/main.py)<br>[docs/server.md](../../../../sources/schmitech__orbit/docs/server.md)<br>[clients/orbitchat/src/App.tsx](../../../../sources/schmitech__orbit/clients/orbitchat/src/App.tsx)<br>[clients/orbitchat/src/index.css](../../../../sources/schmitech__orbit/clients/orbitchat/src/index.css)<br>[clients/orbitchat/src/main.tsx](../../../../sources/schmitech__orbit/clients/orbitchat/src/main.tsx)<br>[clients/orbitchat/bin/dev-server.js](../../../../sources/schmitech__orbit/clients/orbitchat/bin/dev-server.js)<br>[clients/orbitchat/bin/orbitchat.js](../../../../sources/schmitech__orbit/clients/orbitchat/bin/orbitchat.js)<br>[clients/openai-realtime-voice/src/main.ts](../../../../sources/schmitech__orbit/clients/openai-realtime-voice/src/main.ts) |
| agentRuntime | 22 | [server/tools/__init__.py](../../../../sources/schmitech__orbit/server/tools/__init__.py)<br>[server/tools/test_template_query.py](../../../../sources/schmitech__orbit/server/tools/test_template_query.py)<br>[server/retrievers/implementations/intent/agent/__init__.py](../../../../sources/schmitech__orbit/server/retrievers/implementations/intent/agent/__init__.py)<br>[server/retrievers/implementations/intent/agent/response_synthesizer.py](../../../../sources/schmitech__orbit/server/retrievers/implementations/intent/agent/response_synthesizer.py)<br>[server/retrievers/implementations/intent/agent/tool_definitions.py](../../../../sources/schmitech__orbit/server/retrievers/implementations/intent/agent/tool_definitions.py)<br>[server/retrievers/implementations/intent/agent/tool_executor.py](../../../../sources/schmitech__orbit/server/retrievers/implementations/intent/agent/tool_executor.py)<br>[server/inference/pipeline/steps/context_retrieval.py](../../../../sources/schmitech__orbit/server/inference/pipeline/steps/context_retrieval.py)<br>[examples/intent-templates/agent-template/agent-assistant-intro.md](../../../../sources/schmitech__orbit/examples/intent-templates/agent-template/agent-assistant-intro.md) |
| mcp | 9 | [server/tests/test_services/test_mcp_client_service.py](../../../../sources/schmitech__orbit/server/tests/test_services/test_mcp_client_service.py)<br>[server/tests/test_middleware/test_mcp_client.py](../../../../sources/schmitech__orbit/server/tests/test_middleware/test_mcp_client.py)<br>[server/tests/test_inference/test_mcp_agent_step.py](../../../../sources/schmitech__orbit/server/tests/test_inference/test_mcp_agent_step.py)<br>[server/services/mcp_client_service.py](../../../../sources/schmitech__orbit/server/services/mcp_client_service.py)<br>[server/inference/pipeline/steps/mcp_agent.py](../../../../sources/schmitech__orbit/server/inference/pipeline/steps/mcp_agent.py)<br>[docs/cookbook/use-orbit-with-openclaw-as-mcp-agent.md](../../../../sources/schmitech__orbit/docs/cookbook/use-orbit-with-openclaw-as-mcp-agent.md)<br>[docs/adapters/mcp-agent.md](../../../../sources/schmitech__orbit/docs/adapters/mcp-agent.md)<br>[config/mcp_client.yaml](../../../../sources/schmitech__orbit/config/mcp_client.yaml) |
| retrieval | 92 | [utils/vector/qdrant/create_qdrant_collection.py](../../../../sources/schmitech__orbit/utils/vector/qdrant/create_qdrant_collection.py)<br>[utils/vector/qdrant/delete_qdrant_collection.py](../../../../sources/schmitech__orbit/utils/vector/qdrant/delete_qdrant_collection.py)<br>[utils/vector/qdrant/list_qdrant_collections.py](../../../../sources/schmitech__orbit/utils/vector/qdrant/list_qdrant_collections.py)<br>[utils/vector/qdrant/qdrant-ec2-startup-guide.md](../../../../sources/schmitech__orbit/utils/vector/qdrant/qdrant-ec2-startup-guide.md)<br>[utils/vector/qdrant/query_qdrant_collection.py](../../../../sources/schmitech__orbit/utils/vector/qdrant/query_qdrant_collection.py)<br>[utils/vector/qdrant/README.md](../../../../sources/schmitech__orbit/utils/vector/qdrant/README.md)<br>[utils/vector/qdrant/start_qdrant.sh](../../../../sources/schmitech__orbit/utils/vector/qdrant/start_qdrant.sh)<br>[utils/vector/pinecone/create_pinecone_index.py](../../../../sources/schmitech__orbit/utils/vector/pinecone/create_pinecone_index.py) |
| spec | 14 | [install/generate_requirements.py](../../../../sources/schmitech__orbit/install/generate_requirements.py)<br>[docs/autocomplete-architecture.md](../../../../sources/schmitech__orbit/docs/autocomplete-architecture.md)<br>[docs/conversation-threading-architecture.md](../../../../sources/schmitech__orbit/docs/conversation-threading-architecture.md)<br>[docs/language-detection-architecture.md](../../../../sources/schmitech__orbit/docs/language-detection-architecture.md)<br>[docs/pipeline-inference-architecture.md](../../../../sources/schmitech__orbit/docs/pipeline-inference-architecture.md)<br>[docs/rate-limiting-architecture.md](../../../../sources/schmitech__orbit/docs/rate-limiting-architecture.md)<br>[docs/reranker-architecture.md](../../../../sources/schmitech__orbit/docs/reranker-architecture.md)<br>[docs/sql-retriever-architecture.md](../../../../sources/schmitech__orbit/docs/sql-retriever-architecture.md) |
| eval | 243 | [utils/vllm/test-query.sh](../../../../sources/schmitech__orbit/utils/vllm/test-query.sh)<br>[utils/vector/chroma/test_chroma_data.py](../../../../sources/schmitech__orbit/utils/vector/chroma/test_chroma_data.py)<br>[utils/templates/test_adapter_loading.py](../../../../sources/schmitech__orbit/utils/templates/test_adapter_loading.py)<br>[utils/templates/test_template_generator.py](../../../../sources/schmitech__orbit/utils/templates/test_template_generator.py)<br>[utils/templates/examples/sqlite/contact/contact_test_queries.md](../../../../sources/schmitech__orbit/utils/templates/examples/sqlite/contact/contact_test_queries.md)<br>[utils/scripts/test_microphone.py](../../../../sources/schmitech__orbit/utils/scripts/test_microphone.py)<br>[utils/scripts/test_vision_manual.py](../../../../sources/schmitech__orbit/utils/scripts/test_vision_manual.py)<br>[utils/duckdb/test_template.py](../../../../sources/schmitech__orbit/utils/duckdb/test_template.py) |
| security | 39 | [SECURITY.md](../../../../sources/schmitech__orbit/SECURITY.md)<br>[utils/scripts/get-auth-token.sh](../../../../sources/schmitech__orbit/utils/scripts/get-auth-token.sh)<br>[utils/scripts/sync_auth_backends.py](../../../../sources/schmitech__orbit/utils/scripts/sync_auth_backends.py)<br>[server/tests/test_services/test_admin_audit.py](../../../../sources/schmitech__orbit/server/tests/test_services/test_admin_audit.py)<br>[server/tests/test_services/test_audit_service.py](../../../../sources/schmitech__orbit/server/tests/test_services/test_audit_service.py)<br>[server/tests/test_middleware/test_admin_audit_middleware.py](../../../../sources/schmitech__orbit/server/tests/test_middleware/test_admin_audit_middleware.py)<br>[server/tests/test_auth/__init__.py](../../../../sources/schmitech__orbit/server/tests/test_auth/__init__.py)<br>[server/tests/test_auth/test_api_key_integration.py](../../../../sources/schmitech__orbit/server/tests/test_auth/test_api_key_integration.py) |
| ci | 0 | 명확하지 않음 |
| container | 3 | [docker/docker-compose.gpu.yml](../../../../sources/schmitech__orbit/docker/docker-compose.gpu.yml)<br>[docker/docker-compose.yml](../../../../sources/schmitech__orbit/docker/docker-compose.yml)<br>[docker/Dockerfile](../../../../sources/schmitech__orbit/docker/Dockerfile) |
| instruction | 2 | [CLAUDE.md](../../../../sources/schmitech__orbit/CLAUDE.md)<br>[clients/orbitchat/CLAUDE.md](../../../../sources/schmitech__orbit/clients/orbitchat/CLAUDE.md) |
| docs | 135 | [README.md](../../../../sources/schmitech__orbit/README.md)<br>[utils/vllm/README.md](../../../../sources/schmitech__orbit/utils/vllm/README.md)<br>[utils/vector/qdrant/README.md](../../../../sources/schmitech__orbit/utils/vector/qdrant/README.md)<br>[utils/vector/pinecone/README.md](../../../../sources/schmitech__orbit/utils/vector/pinecone/README.md)<br>[utils/templates/README.md](../../../../sources/schmitech__orbit/utils/templates/README.md)<br>[utils/templates/docs/creating-seed-templates.md](../../../../sources/schmitech__orbit/utils/templates/docs/creating-seed-templates.md)<br>[utils/templates/docs/enrichment-guide.md](../../../../sources/schmitech__orbit/utils/templates/docs/enrichment-guide.md)<br>[utils/templates/docs/scripts.md](../../../../sources/schmitech__orbit/utils/templates/docs/scripts.md) |
| config | 8 | [package.json](../../../../sources/schmitech__orbit/package.json)<br>[server/tests/pyproject.toml](../../../../sources/schmitech__orbit/server/tests/pyproject.toml)<br>[clients/orbitchat/package.json](../../../../sources/schmitech__orbit/clients/orbitchat/package.json)<br>[clients/orbitchat/tsconfig.json](../../../../sources/schmitech__orbit/clients/orbitchat/tsconfig.json)<br>[clients/openai-realtime-voice/package.json](../../../../sources/schmitech__orbit/clients/openai-realtime-voice/package.json)<br>[clients/openai-realtime-voice/tsconfig.json](../../../../sources/schmitech__orbit/clients/openai-realtime-voice/tsconfig.json)<br>[clients/node-api/package.json](../../../../sources/schmitech__orbit/clients/node-api/package.json)<br>[clients/node-api/tsconfig.json](../../../../sources/schmitech__orbit/clients/node-api/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 243 | [utils/vllm/test-query.sh](../../../../sources/schmitech__orbit/utils/vllm/test-query.sh)<br>[utils/vector/chroma/test_chroma_data.py](../../../../sources/schmitech__orbit/utils/vector/chroma/test_chroma_data.py)<br>[utils/templates/test_adapter_loading.py](../../../../sources/schmitech__orbit/utils/templates/test_adapter_loading.py)<br>[utils/templates/test_template_generator.py](../../../../sources/schmitech__orbit/utils/templates/test_template_generator.py)<br>[utils/templates/examples/sqlite/contact/contact_test_queries.md](../../../../sources/schmitech__orbit/utils/templates/examples/sqlite/contact/contact_test_queries.md)<br>[utils/scripts/test_microphone.py](../../../../sources/schmitech__orbit/utils/scripts/test_microphone.py) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 3 | [docker/docker-compose.gpu.yml](../../../../sources/schmitech__orbit/docker/docker-compose.gpu.yml)<br>[docker/docker-compose.yml](../../../../sources/schmitech__orbit/docker/docker-compose.yml)<br>[docker/Dockerfile](../../../../sources/schmitech__orbit/docker/Dockerfile) |
| 보안/정책 | 39 | [SECURITY.md](../../../../sources/schmitech__orbit/SECURITY.md)<br>[utils/scripts/get-auth-token.sh](../../../../sources/schmitech__orbit/utils/scripts/get-auth-token.sh)<br>[utils/scripts/sync_auth_backends.py](../../../../sources/schmitech__orbit/utils/scripts/sync_auth_backends.py)<br>[server/tests/test_services/test_admin_audit.py](../../../../sources/schmitech__orbit/server/tests/test_services/test_admin_audit.py)<br>[server/tests/test_services/test_audit_service.py](../../../../sources/schmitech__orbit/server/tests/test_services/test_audit_service.py)<br>[server/tests/test_middleware/test_admin_audit_middleware.py](../../../../sources/schmitech__orbit/server/tests/test_middleware/test_admin_audit_middleware.py) |
| 에이전트 지시문 | 2 | [CLAUDE.md](../../../../sources/schmitech__orbit/CLAUDE.md)<br>[clients/orbitchat/CLAUDE.md](../../../../sources/schmitech__orbit/clients/orbitchat/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `server/main.py`, `docs/server.md`, `clients/orbitchat/src/App.tsx`.
2. entrypoint를 따라 실행 흐름 확인: `server/main.py`, `docs/server.md`, `clients/orbitchat/src/App.tsx`.
3. agent/tool runtime 매핑: `server/tools/__init__.py`, `server/tools/test_template_query.py`, `server/retrievers/implementations/intent/agent/__init__.py`.
4. retrieval/memory/indexing 확인: `utils/vector/qdrant/create_qdrant_collection.py`, `utils/vector/qdrant/delete_qdrant_collection.py`, `utils/vector/qdrant/list_qdrant_collections.py`.
5. test/eval 파일로 동작 검증: `utils/vllm/test-query.sh`, `utils/vector/chroma/test_chroma_data.py`, `utils/templates/test_adapter_loading.py`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 A self hosted AI infrastructure for private RAG and multi model applications.. 핵심 구조 신호는 Python, package.json, README.md, CLAUDE.md, LICENSE, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
