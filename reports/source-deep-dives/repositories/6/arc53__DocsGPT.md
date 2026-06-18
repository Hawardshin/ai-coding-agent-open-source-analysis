# arc53/DocsGPT 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Private AI platform for agents, assistants and enterprise search. Built-in Agent Builder, Deep research, Document analysis, Multi-model support, and API connectivity for agents.

## 요약

- 조사 단위: `sources/arc53__DocsGPT` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,380 files, 200 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/test_memory_tool.py, tests/worker/test_ingest_checkpoint.py, tests/worker/test_ingest_connector.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | arc53/DocsGPT |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 17938 |
| Forks | 2062 |
| License | MIT |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/arc53__DocsGPT](../../../../sources/arc53__DocsGPT) |
| 기존 보고서 | [reports/llm-wiki/repositories/arc53__DocsGPT.md](../../../llm-wiki/repositories/arc53__DocsGPT.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1380 / 200 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .devcontainer, .github, application, deployment, docs, extensions, frontend, scripts, tests |
| 상위 확장자 | .py: 761, .tsx: 137, .ts: 129, .svg: 108, .mdx: 39, .yaml: 37, .json: 26, .md: 21, .yml: 20, .txt: 17, (none): 16, .png: 13 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 456 | [tests/__init__.py](../../../../sources/arc53__DocsGPT/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/arc53__DocsGPT/tests/conftest.py)<br>[tests/QA_TESTS.md](../../../../sources/arc53__DocsGPT/tests/QA_TESTS.md)<br>[tests/requirements.txt](../../../../sources/arc53__DocsGPT/tests/requirements.txt)<br>[tests/test_agent_token_tracking.py](../../../../sources/arc53__DocsGPT/tests/test_agent_token_tracking.py)<br>[tests/test_app_routes.py](../../../../sources/arc53__DocsGPT/tests/test_app_routes.py) |
| CI workflow | 14 | [.github/workflows/backend-release.yml](../../../../sources/arc53__DocsGPT/.github/workflows/backend-release.yml)<br>[.github/workflows/bandit.yaml](../../../../sources/arc53__DocsGPT/.github/workflows/bandit.yaml)<br>[.github/workflows/ci.yml](../../../../sources/arc53__DocsGPT/.github/workflows/ci.yml)<br>[.github/workflows/cife.yml](../../../../sources/arc53__DocsGPT/.github/workflows/cife.yml)<br>[.github/workflows/docker-develop-build.yml](../../../../sources/arc53__DocsGPT/.github/workflows/docker-develop-build.yml)<br>[.github/workflows/docker-develop-fe-build.yml](../../../../sources/arc53__DocsGPT/.github/workflows/docker-develop-fe-build.yml) |
| 컨테이너/배포 | 26 | [frontend/Dockerfile](../../../../sources/arc53__DocsGPT/frontend/Dockerfile)<br>[deployment/docker-compose-azure.yaml](../../../../sources/arc53__DocsGPT/deployment/docker-compose-azure.yaml)<br>[deployment/docker-compose-dev.yaml](../../../../sources/arc53__DocsGPT/deployment/docker-compose-dev.yaml)<br>[deployment/docker-compose-hub.yaml](../../../../sources/arc53__DocsGPT/deployment/docker-compose-hub.yaml)<br>[deployment/docker-compose-local.yaml](../../../../sources/arc53__DocsGPT/deployment/docker-compose-local.yaml)<br>[deployment/docker-compose.yaml](../../../../sources/arc53__DocsGPT/deployment/docker-compose.yaml) |
| 보안/정책 | 32 | [SECURITY.md](../../../../sources/arc53__DocsGPT/SECURITY.md)<br>[tests/test_auth.py](../../../../sources/arc53__DocsGPT/tests/test_auth.py)<br>[tests/test_zip_extraction_security.py](../../../../sources/arc53__DocsGPT/tests/test_zip_extraction_security.py)<br>[tests/security/__init__.py](../../../../sources/arc53__DocsGPT/tests/security/__init__.py)<br>[tests/security/test_encryption.py](../../../../sources/arc53__DocsGPT/tests/security/test_encryption.py)<br>[tests/security/test_safe_url.py](../../../../sources/arc53__DocsGPT/tests/security/test_safe_url.py) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/arc53__DocsGPT/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/test_memory_tool.py`, `tests/worker/test_ingest_checkpoint.py`, `tests/worker/test_ingest_connector.py`.
2. entrypoint를 따라 실행 흐름 확인: `frontend/src/App.tsx`, `frontend/src/index.css`, `frontend/src/main.tsx`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tests/e2e/specs/tier-b/agent-preview.spec.ts`, `tests/e2e/specs/tier-b/workflow-builder.spec.ts`.
4. retrieval/memory/indexing 확인: `tests/test_memory_tool.py`, `tests/worker/test_ingest_checkpoint.py`, `tests/worker/test_ingest_connector.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/QA_TESTS.md`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Private AI platform for agents, assistants and enterprise search. Built in Agent Builder, Deep research, Document analys. 핵심 구조 신호는 Python, README.md, AGENTS.md, LICENSE, tests, ci이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
