# synapseorch-ai/synapse-ai 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Build AI agents that actually do things. Synapse is an open-source platform for creating, connecting, and orchestrating AI agents powered by any LLM — local, cloud or CLIs.

## 요약

- 조사 단위: `sources/synapseorch-ai__synapse-ai` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 283 files, 65 directories, depth score 117, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=backend/examples/mcp_pack.bundle.json, backend/core/mcp_client.py, backend/core/mcp_oauth_state.py이고, 의존성 단서는 anthropic, mcp, fastapi, ollama, llama, chroma, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | synapseorch-ai/synapse-ai |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 282 |
| Forks | 50 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/synapseorch-ai__synapse-ai](../../../../sources/synapseorch-ai__synapse-ai) |
| 기존 보고서 | [reports/global-trending/repositories/synapseorch-ai__synapse-ai.md](../../../global-trending/repositories/synapseorch-ai__synapse-ai.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 283 / 65 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .github, backend, bin, docker, docs, frontend, infra, scripts, synapse |
| 상위 확장자 | .py: 124, .tsx: 46, .ts: 29, .json: 18, .svg: 17, .yml: 6, (none): 6, .js: 5, .md: 5, .yaml: 5, .txt: 4, .sh: 3 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 2 |
| .github | ci surface | 1 |
| backend | top-level component | 1 |
| bin | top-level component | 1 |
| docker | documentation surface | 1 |
| frontend | top-level component | 1 |
| infra | top-level component | 1 |
| scripts | top-level component | 1 |
| synapse | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | node scripts/bundle-frontend.js |
| build | package.json | prepublishOnly | npm run build |
| utility | package.json | preuninstall | node scripts/preuninstall.js |
| utility | pyproject.toml | synapse | synapse |
| entrypoint | package.json bin | synapse.js | ./bin/synapse.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | anthropic |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | chroma |
| modelRuntime | ollama, llama |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [backend/examples/mcp_pack.bundle.json](../../../../sources/synapseorch-ai__synapse-ai/backend/examples/mcp_pack.bundle.json) | mcp signal |
| mcp | [backend/core/mcp_client.py](../../../../sources/synapseorch-ai__synapse-ai/backend/core/mcp_client.py) | mcp signal |
| mcp | [backend/core/mcp_oauth_state.py](../../../../sources/synapseorch-ai__synapse-ai/backend/core/mcp_oauth_state.py) | mcp signal |
| agentRuntime | [frontend/src/app/api/agents/generate-prompt/route.ts](../../../../sources/synapseorch-ai__synapse-ai/frontend/src/app/api/agents/generate-prompt/route.ts) | agentRuntime signal |
| agentRuntime | [frontend/src/app/api/agent-types/route.ts](../../../../sources/synapseorch-ai__synapse-ai/frontend/src/app/api/agent-types/route.ts) | agentRuntime signal |
| agentRuntime | [backend/tools/__init__.py](../../../../sources/synapseorch-ai__synapse-ai/backend/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [backend/tools/bash.py](../../../../sources/synapseorch-ai__synapse-ai/backend/tools/bash.py) | agentRuntime signal |
| entrypoints | [synapse/__main__.py](../../../../sources/synapseorch-ai__synapse-ai/synapse/__main__.py) | entrypoints signal |
| entrypoints | [bin/synapse](../../../../sources/synapseorch-ai__synapse-ai/bin/synapse) | entrypoints signal |
| entrypoints | [bin/synapse.bat](../../../../sources/synapseorch-ai__synapse-ai/bin/synapse.bat) | entrypoints signal |
| entrypoints | [bin/synapse.js](../../../../sources/synapseorch-ai__synapse-ai/bin/synapse.js) | entrypoints signal |
| config | [package.json](../../../../sources/synapseorch-ai__synapse-ai/package.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 6 | [synapse/__main__.py](../../../../sources/synapseorch-ai__synapse-ai/synapse/__main__.py)<br>[bin/synapse](../../../../sources/synapseorch-ai__synapse-ai/bin/synapse)<br>[bin/synapse.bat](../../../../sources/synapseorch-ai__synapse-ai/bin/synapse.bat)<br>[bin/synapse.js](../../../../sources/synapseorch-ai__synapse-ai/bin/synapse.js)<br>[backend/main.py](../../../../sources/synapseorch-ai__synapse-ai/backend/main.py)<br>[backend/core/server.py](../../../../sources/synapseorch-ai__synapse-ai/backend/core/server.py) |
| agentRuntime | 30 | [frontend/src/app/api/agents/generate-prompt/route.ts](../../../../sources/synapseorch-ai__synapse-ai/frontend/src/app/api/agents/generate-prompt/route.ts)<br>[frontend/src/app/api/agent-types/route.ts](../../../../sources/synapseorch-ai__synapse-ai/frontend/src/app/api/agent-types/route.ts)<br>[backend/tools/__init__.py](../../../../sources/synapseorch-ai__synapse-ai/backend/tools/__init__.py)<br>[backend/tools/bash.py](../../../../sources/synapseorch-ai__synapse-ai/backend/tools/bash.py)<br>[backend/tools/code_indexer.py](../../../../sources/synapseorch-ai__synapse-ai/backend/tools/code_indexer.py)<br>[backend/tools/code_search.py](../../../../sources/synapseorch-ai__synapse-ai/backend/tools/code_search.py)<br>[backend/tools/collect_data.py](../../../../sources/synapseorch-ai__synapse-ai/backend/tools/collect_data.py)<br>[backend/tools/file_reader.py](../../../../sources/synapseorch-ai__synapse-ai/backend/tools/file_reader.py) |
| mcp | 3 | [backend/examples/mcp_pack.bundle.json](../../../../sources/synapseorch-ai__synapse-ai/backend/examples/mcp_pack.bundle.json)<br>[backend/core/mcp_client.py](../../../../sources/synapseorch-ai__synapse-ai/backend/core/mcp_client.py)<br>[backend/core/mcp_oauth_state.py](../../../../sources/synapseorch-ai__synapse-ai/backend/core/mcp_oauth_state.py) |
| retrieval | 5 | [frontend/src/types/index.ts](../../../../sources/synapseorch-ai__synapse-ai/frontend/src/types/index.ts)<br>[frontend/src/store/index.ts](../../../../sources/synapseorch-ai__synapse-ai/frontend/src/store/index.ts)<br>[frontend/src/components/settings/index.ts](../../../../sources/synapseorch-ai__synapse-ai/frontend/src/components/settings/index.ts)<br>[backend/examples/index.json](../../../../sources/synapseorch-ai__synapse-ai/backend/examples/index.json)<br>[backend/core/memory.py](../../../../sources/synapseorch-ai__synapse-ai/backend/core/memory.py) |
| spec | 5 | [backend/requirements-coding.txt](../../../../sources/synapseorch-ai__synapse-ai/backend/requirements-coding.txt)<br>[backend/requirements-messaging.txt](../../../../sources/synapseorch-ai__synapse-ai/backend/requirements-messaging.txt)<br>[backend/requirements-worker.txt](../../../../sources/synapseorch-ai__synapse-ai/backend/requirements-worker.txt)<br>[backend/requirements.txt](../../../../sources/synapseorch-ai__synapse-ai/backend/requirements.txt)<br>[backend/core/native_builder/agents/requirements_analyst.json](../../../../sources/synapseorch-ai__synapse-ai/backend/core/native_builder/agents/requirements_analyst.json) |
| eval | 2 | [backend/tests/__init__.py](../../../../sources/synapseorch-ai__synapse-ai/backend/tests/__init__.py)<br>[backend/tests/test_cache.py](../../../../sources/synapseorch-ai__synapse-ai/backend/tests/test_cache.py) |
| security | 9 | [frontend/src/app/api/auth/status/route.ts](../../../../sources/synapseorch-ai__synapse-ai/frontend/src/app/api/auth/status/route.ts)<br>[frontend/src/app/api/auth/logout/route.ts](../../../../sources/synapseorch-ai__synapse-ai/frontend/src/app/api/auth/logout/route.ts)<br>[frontend/src/app/api/auth/login/route.ts](../../../../sources/synapseorch-ai__synapse-ai/frontend/src/app/api/auth/login/route.ts)<br>[backend/tools/sandbox.Dockerfile](../../../../sources/synapseorch-ai__synapse-ai/backend/tools/sandbox.Dockerfile)<br>[backend/tools/sandbox.py](../../../../sources/synapseorch-ai__synapse-ai/backend/tools/sandbox.py)<br>[backend/core/internal_auth.py](../../../../sources/synapseorch-ai__synapse-ai/backend/core/internal_auth.py)<br>[backend/core/mcp_oauth_state.py](../../../../sources/synapseorch-ai__synapse-ai/backend/core/mcp_oauth_state.py)<br>[backend/core/user_auth.py](../../../../sources/synapseorch-ai__synapse-ai/backend/core/user_auth.py) |
| ci | 3 | [.github/workflows/codacy.yml](../../../../sources/synapseorch-ai__synapse-ai/.github/workflows/codacy.yml)<br>[.github/workflows/codeql.yml](../../../../sources/synapseorch-ai__synapse-ai/.github/workflows/codeql.yml)<br>[.github/workflows/publish.yml](../../../../sources/synapseorch-ai__synapse-ai/.github/workflows/publish.yml) |
| container | 9 | [docker-compose.yml](../../../../sources/synapseorch-ai__synapse-ai/docker-compose.yml)<br>[Dockerfile](../../../../sources/synapseorch-ai__synapse-ai/Dockerfile)<br>[Dockerfile.backend](../../../../sources/synapseorch-ai__synapse-ai/Dockerfile.backend)<br>[Dockerfile.frontend](../../../../sources/synapseorch-ai__synapse-ai/Dockerfile.frontend)<br>[Dockerfile.worker](../../../../sources/synapseorch-ai__synapse-ai/Dockerfile.worker)<br>[infra/k8s/api-deployment.yaml](../../../../sources/synapseorch-ai__synapse-ai/infra/k8s/api-deployment.yaml)<br>[infra/k8s/pgbouncer-deployment.yaml](../../../../sources/synapseorch-ai__synapse-ai/infra/k8s/pgbouncer-deployment.yaml)<br>[infra/k8s/worker-deployment.yaml](../../../../sources/synapseorch-ai__synapse-ai/infra/k8s/worker-deployment.yaml) |
| instruction | 0 | 명확하지 않음 |
| docs | 3 | [README.md](../../../../sources/synapseorch-ai__synapse-ai/README.md)<br>[frontend/README.md](../../../../sources/synapseorch-ai__synapse-ai/frontend/README.md)<br>[docs/cli.md](../../../../sources/synapseorch-ai__synapse-ai/docs/cli.md) |
| config | 9 | [package.json](../../../../sources/synapseorch-ai__synapse-ai/package.json)<br>[pyproject.toml](../../../../sources/synapseorch-ai__synapse-ai/pyproject.toml)<br>[frontend/package.json](../../../../sources/synapseorch-ai__synapse-ai/frontend/package.json)<br>[frontend/tsconfig.json](../../../../sources/synapseorch-ai__synapse-ai/frontend/tsconfig.json)<br>[backend/package.json](../../../../sources/synapseorch-ai__synapse-ai/backend/package.json)<br>[backend/requirements-coding.txt](../../../../sources/synapseorch-ai__synapse-ai/backend/requirements-coding.txt)<br>[backend/requirements-messaging.txt](../../../../sources/synapseorch-ai__synapse-ai/backend/requirements-messaging.txt)<br>[backend/requirements-worker.txt](../../../../sources/synapseorch-ai__synapse-ai/backend/requirements-worker.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 2 | [backend/tests/__init__.py](../../../../sources/synapseorch-ai__synapse-ai/backend/tests/__init__.py)<br>[backend/tests/test_cache.py](../../../../sources/synapseorch-ai__synapse-ai/backend/tests/test_cache.py) |
| CI workflow | 3 | [.github/workflows/codacy.yml](../../../../sources/synapseorch-ai__synapse-ai/.github/workflows/codacy.yml)<br>[.github/workflows/codeql.yml](../../../../sources/synapseorch-ai__synapse-ai/.github/workflows/codeql.yml)<br>[.github/workflows/publish.yml](../../../../sources/synapseorch-ai__synapse-ai/.github/workflows/publish.yml) |
| 컨테이너/배포 | 9 | [docker-compose.yml](../../../../sources/synapseorch-ai__synapse-ai/docker-compose.yml)<br>[Dockerfile](../../../../sources/synapseorch-ai__synapse-ai/Dockerfile)<br>[Dockerfile.backend](../../../../sources/synapseorch-ai__synapse-ai/Dockerfile.backend)<br>[Dockerfile.frontend](../../../../sources/synapseorch-ai__synapse-ai/Dockerfile.frontend)<br>[Dockerfile.worker](../../../../sources/synapseorch-ai__synapse-ai/Dockerfile.worker)<br>[infra/k8s/api-deployment.yaml](../../../../sources/synapseorch-ai__synapse-ai/infra/k8s/api-deployment.yaml) |
| 보안/정책 | 9 | [frontend/src/app/api/auth/status/route.ts](../../../../sources/synapseorch-ai__synapse-ai/frontend/src/app/api/auth/status/route.ts)<br>[frontend/src/app/api/auth/logout/route.ts](../../../../sources/synapseorch-ai__synapse-ai/frontend/src/app/api/auth/logout/route.ts)<br>[frontend/src/app/api/auth/login/route.ts](../../../../sources/synapseorch-ai__synapse-ai/frontend/src/app/api/auth/login/route.ts)<br>[backend/tools/sandbox.Dockerfile](../../../../sources/synapseorch-ai__synapse-ai/backend/tools/sandbox.Dockerfile)<br>[backend/tools/sandbox.py](../../../../sources/synapseorch-ai__synapse-ai/backend/tools/sandbox.py)<br>[backend/core/internal_auth.py](../../../../sources/synapseorch-ai__synapse-ai/backend/core/internal_auth.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `backend/examples/mcp_pack.bundle.json`, `backend/core/mcp_client.py`, `backend/core/mcp_oauth_state.py`.
2. entrypoint를 따라 실행 흐름 확인: `synapse/__main__.py`, `bin/synapse`, `bin/synapse.bat`.
3. agent/tool runtime 매핑: `frontend/src/app/api/agents/generate-prompt/route.ts`, `frontend/src/app/api/agent-types/route.ts`, `backend/tools/__init__.py`.
4. retrieval/memory/indexing 확인: `frontend/src/types/index.ts`, `frontend/src/store/index.ts`, `frontend/src/components/settings/index.ts`.
5. test/eval 파일로 동작 검증: `backend/tests/__init__.py`, `backend/tests/test_cache.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Build AI agents that actually do things. Synapse is an open source platform for creating, connecting, and orchestrating . 핵심 구조 신호는 Python, package.json, pyproject.toml, Dockerfile, docker-compose.yml, README.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
