# HKUDS/LightRAG 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Local clone structure analysis: 679 files, 124 directories.

## 요약

- 조사 단위: `sources/HKUDS__LightRAG` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 679 files, 124 directories, depth score 120, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/pipeline/test_doc_status_chunk_preservation.py, tests/pipeline/test_graph_keyed_locks.py, tests/llm/test_asymmetric_embedding.py이고, 의존성 단서는 openai, anthropic, langchain, llama-index, fastapi, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | HKUDS/LightRAG |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 36711 |
| Forks | 5182 |
| License | MIT |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/HKUDS__LightRAG](../../../../sources/HKUDS__LightRAG) |
| 기존 보고서 | [reports/llm-wiki/repositories/HKUDS__LightRAG.md](../../../llm-wiki/repositories/HKUDS__LightRAG.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 679 / 124 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .claude, .clinerules, .github, assets, docs, examples, k8s-deploy, lightrag, lightrag_webui, prompts, README.assets, reproduce, scripts, tests |
| 상위 확장자 | .py: 374, .tsx: 74, .md: 52, .yml: 29, .json: 25, .ts: 25, .sh: 22, .yaml: 15, .png: 12, (none): 10, .jsonl: 8, .txt: 7 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | 없음 |
| agentFrameworks | langchain, llama-index |
| vectorStores | qdrant, milvus, pgvector, faiss |
| modelRuntime | ollama, llama |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [lightrag_webui/src/App.tsx](../../../../sources/HKUDS__LightRAG/lightrag_webui/src/App.tsx)<br>[lightrag_webui/src/index.css](../../../../sources/HKUDS__LightRAG/lightrag_webui/src/index.css)<br>[lightrag_webui/src/main.tsx](../../../../sources/HKUDS__LightRAG/lightrag_webui/src/main.tsx) |
| agentRuntime | 30 | [AGENTS.md](../../../../sources/HKUDS__LightRAG/AGENTS.md)<br>[tests/tools/__init__.py](../../../../sources/HKUDS__LightRAG/tests/tools/__init__.py)<br>[tests/tools/test_rebuild_vdb.py](../../../../sources/HKUDS__LightRAG/tests/tools/test_rebuild_vdb.py)<br>[lightrag_webui/src/hooks/useDebounce.tsx](../../../../sources/HKUDS__LightRAG/lightrag_webui/src/hooks/useDebounce.tsx)<br>[lightrag_webui/src/hooks/useLightragGraph.tsx](../../../../sources/HKUDS__LightRAG/lightrag_webui/src/hooks/useLightragGraph.tsx)<br>[lightrag_webui/src/hooks/useRandomGraph.tsx](../../../../sources/HKUDS__LightRAG/lightrag_webui/src/hooks/useRandomGraph.tsx)<br>[lightrag_webui/src/hooks/useTheme.tsx](../../../../sources/HKUDS__LightRAG/lightrag_webui/src/hooks/useTheme.tsx)<br>[lightrag_webui/src/contexts/context.ts](../../../../sources/HKUDS__LightRAG/lightrag_webui/src/contexts/context.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 65 | [tests/pipeline/test_doc_status_chunk_preservation.py](../../../../sources/HKUDS__LightRAG/tests/pipeline/test_doc_status_chunk_preservation.py)<br>[tests/pipeline/test_graph_keyed_locks.py](../../../../sources/HKUDS__LightRAG/tests/pipeline/test_graph_keyed_locks.py)<br>[tests/llm/test_asymmetric_embedding.py](../../../../sources/HKUDS__LightRAG/tests/llm/test_asymmetric_embedding.py)<br>[tests/llm/voyageai_impl/test_voyageai_embed.py](../../../../sources/HKUDS__LightRAG/tests/llm/voyageai_impl/test_voyageai_embed.py)<br>[tests/kg/test_batch_graph_operations.py](../../../../sources/HKUDS__LightRAG/tests/kg/test_batch_graph_operations.py)<br>[tests/kg/test_graph_storage.py](../../../../sources/HKUDS__LightRAG/tests/kg/test_graph_storage.py)<br>[tests/kg/qdrant_impl/test_qdrant_deferred_embedding.py](../../../../sources/HKUDS__LightRAG/tests/kg/qdrant_impl/test_qdrant_deferred_embedding.py)<br>[tests/kg/postgres_impl/test_postgres_get_knowledge_graph_all.py](../../../../sources/HKUDS__LightRAG/tests/kg/postgres_impl/test_postgres_get_knowledge_graph_all.py) |
| spec | 6 | [requirements-offline-llm.txt](../../../../sources/HKUDS__LightRAG/requirements-offline-llm.txt)<br>[requirements-offline-storage.txt](../../../../sources/HKUDS__LightRAG/requirements-offline-storage.txt)<br>[requirements-offline.txt](../../../../sources/HKUDS__LightRAG/requirements-offline.txt)<br>[scripts/setup/lib/storage_requirements.sh](../../../../sources/HKUDS__LightRAG/scripts/setup/lib/storage_requirements.sh)<br>[lightrag/tools/lightrag_visualizer/requirements.txt](../../../../sources/HKUDS__LightRAG/lightrag/tools/lightrag_visualizer/requirements.txt)<br>[lightrag/evaluation/sample_documents/02_rag_architecture.md](../../../../sources/HKUDS__LightRAG/lightrag/evaluation/sample_documents/02_rag_architecture.md) |
| eval | 235 | [tests/__init__.py](../../../../sources/HKUDS__LightRAG/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/HKUDS__LightRAG/tests/conftest.py)<br>[tests/test_create_prefixed_exception.py](../../../../sources/HKUDS__LightRAG/tests/test_create_prefixed_exception.py)<br>[tests/workspace/__init__.py](../../../../sources/HKUDS__LightRAG/tests/workspace/__init__.py)<br>[tests/workspace/README_WORKSPACE_ISOLATION_TESTS.md](../../../../sources/HKUDS__LightRAG/tests/workspace/README_WORKSPACE_ISOLATION_TESTS.md)<br>[tests/workspace/test_workspace_isolation.py](../../../../sources/HKUDS__LightRAG/tests/workspace/test_workspace_isolation.py)<br>[tests/workspace/test_workspace_migration_isolation.py](../../../../sources/HKUDS__LightRAG/tests/workspace/test_workspace_migration_isolation.py)<br>[tests/workspace/test_workspace_path_validation.py](../../../../sources/HKUDS__LightRAG/tests/workspace/test_workspace_path_validation.py) |
| security | 7 | [SECURITY.md](../../../../sources/HKUDS__LightRAG/SECURITY.md)<br>[tests/parser/docx/test_ir_builder_security.py](../../../../sources/HKUDS__LightRAG/tests/parser/docx/test_ir_builder_security.py)<br>[tests/api/auth/__init__.py](../../../../sources/HKUDS__LightRAG/tests/api/auth/__init__.py)<br>[tests/api/auth/test_auth.py](../../../../sources/HKUDS__LightRAG/tests/api/auth/test_auth.py)<br>[tests/api/auth/test_token_auto_renewal.py](../../../../sources/HKUDS__LightRAG/tests/api/auth/test_token_auto_renewal.py)<br>[lightrag/api/auth.py](../../../../sources/HKUDS__LightRAG/lightrag/api/auth.py)<br>[k8s-deploy/lightrag/templates/secret.yaml](../../../../sources/HKUDS__LightRAG/k8s-deploy/lightrag/templates/secret.yaml) |
| ci | 8 | [.github/workflows/copilot-setup-steps.yml](../../../../sources/HKUDS__LightRAG/.github/workflows/copilot-setup-steps.yml)<br>[.github/workflows/docker-build-lite.yml](../../../../sources/HKUDS__LightRAG/.github/workflows/docker-build-lite.yml)<br>[.github/workflows/docker-build-manual.yml](../../../../sources/HKUDS__LightRAG/.github/workflows/docker-build-manual.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/HKUDS__LightRAG/.github/workflows/docker-publish.yml)<br>[.github/workflows/linting.yaml](../../../../sources/HKUDS__LightRAG/.github/workflows/linting.yaml)<br>[.github/workflows/pypi-publish.yml](../../../../sources/HKUDS__LightRAG/.github/workflows/pypi-publish.yml)<br>[.github/workflows/stale.yaml](../../../../sources/HKUDS__LightRAG/.github/workflows/stale.yaml)<br>[.github/workflows/tests.yml](../../../../sources/HKUDS__LightRAG/.github/workflows/tests.yml) |
| container | 6 | [docker-compose-full.yml](../../../../sources/HKUDS__LightRAG/docker-compose-full.yml)<br>[docker-compose.podman.yml](../../../../sources/HKUDS__LightRAG/docker-compose.podman.yml)<br>[docker-compose.yml](../../../../sources/HKUDS__LightRAG/docker-compose.yml)<br>[Dockerfile](../../../../sources/HKUDS__LightRAG/Dockerfile)<br>[Dockerfile.lite](../../../../sources/HKUDS__LightRAG/Dockerfile.lite)<br>[Dockerfile.postgres](../../../../sources/HKUDS__LightRAG/Dockerfile.postgres) |
| instruction | 2 | [AGENTS.md](../../../../sources/HKUDS__LightRAG/AGENTS.md)<br>[CLAUDE.md](../../../../sources/HKUDS__LightRAG/CLAUDE.md) |
| docs | 46 | [README-zh.md](../../../../sources/HKUDS__LightRAG/README-zh.md)<br>[README.md](../../../../sources/HKUDS__LightRAG/README.md)<br>[tests/workspace/README_WORKSPACE_ISOLATION_TESTS.md](../../../../sources/HKUDS__LightRAG/tests/workspace/README_WORKSPACE_ISOLATION_TESTS.md)<br>[README.assets/b2aaf634151b4706892693ffb43d9093.png](../../../../sources/HKUDS__LightRAG/README.assets/b2aaf634151b4706892693ffb43d9093.png)<br>[README.assets/iShot_2025-03-23_12.40.08.png](../../../../sources/HKUDS__LightRAG/README.assets/iShot_2025-03-23_12.40.08.png)<br>[lightrag_webui/README.md](../../../../sources/HKUDS__LightRAG/lightrag_webui/README.md)<br>[lightrag/tools/README_CLEAN_LLM_QUERY_CACHE.md](../../../../sources/HKUDS__LightRAG/lightrag/tools/README_CLEAN_LLM_QUERY_CACHE.md)<br>[lightrag/tools/README_MIGRATE_LLM_CACHE.md](../../../../sources/HKUDS__LightRAG/lightrag/tools/README_MIGRATE_LLM_CACHE.md) |
| config | 9 | [Makefile](../../../../sources/HKUDS__LightRAG/Makefile)<br>[pyproject.toml](../../../../sources/HKUDS__LightRAG/pyproject.toml)<br>[requirements-offline-llm.txt](../../../../sources/HKUDS__LightRAG/requirements-offline-llm.txt)<br>[requirements-offline-storage.txt](../../../../sources/HKUDS__LightRAG/requirements-offline-storage.txt)<br>[requirements-offline.txt](../../../../sources/HKUDS__LightRAG/requirements-offline.txt)<br>[uv.lock](../../../../sources/HKUDS__LightRAG/uv.lock)<br>[lightrag_webui/package.json](../../../../sources/HKUDS__LightRAG/lightrag_webui/package.json)<br>[lightrag_webui/tsconfig.json](../../../../sources/HKUDS__LightRAG/lightrag_webui/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 235 | [tests/__init__.py](../../../../sources/HKUDS__LightRAG/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/HKUDS__LightRAG/tests/conftest.py)<br>[tests/test_create_prefixed_exception.py](../../../../sources/HKUDS__LightRAG/tests/test_create_prefixed_exception.py)<br>[tests/workspace/__init__.py](../../../../sources/HKUDS__LightRAG/tests/workspace/__init__.py)<br>[tests/workspace/README_WORKSPACE_ISOLATION_TESTS.md](../../../../sources/HKUDS__LightRAG/tests/workspace/README_WORKSPACE_ISOLATION_TESTS.md)<br>[tests/workspace/test_workspace_isolation.py](../../../../sources/HKUDS__LightRAG/tests/workspace/test_workspace_isolation.py) |
| CI workflow | 8 | [.github/workflows/copilot-setup-steps.yml](../../../../sources/HKUDS__LightRAG/.github/workflows/copilot-setup-steps.yml)<br>[.github/workflows/docker-build-lite.yml](../../../../sources/HKUDS__LightRAG/.github/workflows/docker-build-lite.yml)<br>[.github/workflows/docker-build-manual.yml](../../../../sources/HKUDS__LightRAG/.github/workflows/docker-build-manual.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/HKUDS__LightRAG/.github/workflows/docker-publish.yml)<br>[.github/workflows/linting.yaml](../../../../sources/HKUDS__LightRAG/.github/workflows/linting.yaml)<br>[.github/workflows/pypi-publish.yml](../../../../sources/HKUDS__LightRAG/.github/workflows/pypi-publish.yml) |
| 컨테이너/배포 | 6 | [docker-compose-full.yml](../../../../sources/HKUDS__LightRAG/docker-compose-full.yml)<br>[docker-compose.podman.yml](../../../../sources/HKUDS__LightRAG/docker-compose.podman.yml)<br>[docker-compose.yml](../../../../sources/HKUDS__LightRAG/docker-compose.yml)<br>[Dockerfile](../../../../sources/HKUDS__LightRAG/Dockerfile)<br>[Dockerfile.lite](../../../../sources/HKUDS__LightRAG/Dockerfile.lite)<br>[Dockerfile.postgres](../../../../sources/HKUDS__LightRAG/Dockerfile.postgres) |
| 보안/정책 | 7 | [SECURITY.md](../../../../sources/HKUDS__LightRAG/SECURITY.md)<br>[tests/parser/docx/test_ir_builder_security.py](../../../../sources/HKUDS__LightRAG/tests/parser/docx/test_ir_builder_security.py)<br>[tests/api/auth/__init__.py](../../../../sources/HKUDS__LightRAG/tests/api/auth/__init__.py)<br>[tests/api/auth/test_auth.py](../../../../sources/HKUDS__LightRAG/tests/api/auth/test_auth.py)<br>[tests/api/auth/test_token_auto_renewal.py](../../../../sources/HKUDS__LightRAG/tests/api/auth/test_token_auto_renewal.py)<br>[lightrag/api/auth.py](../../../../sources/HKUDS__LightRAG/lightrag/api/auth.py) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/HKUDS__LightRAG/AGENTS.md)<br>[CLAUDE.md](../../../../sources/HKUDS__LightRAG/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/pipeline/test_doc_status_chunk_preservation.py`, `tests/pipeline/test_graph_keyed_locks.py`, `tests/llm/test_asymmetric_embedding.py`.
2. entrypoint를 따라 실행 흐름 확인: `lightrag_webui/src/App.tsx`, `lightrag_webui/src/index.css`, `lightrag_webui/src/main.tsx`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tests/tools/__init__.py`, `tests/tools/test_rebuild_vdb.py`.
4. retrieval/memory/indexing 확인: `tests/pipeline/test_doc_status_chunk_preservation.py`, `tests/pipeline/test_graph_keyed_locks.py`, `tests/llm/test_asymmetric_embedding.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/test_create_prefixed_exception.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Local clone structure analysis 679 files, 124 directories.. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, Makefile, README.md이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 큰 메타데이터 위험이 명확하지 않음입니다.
