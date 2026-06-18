# synapseorch-ai/synapse-ai Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Build AI agents that actually do things. Synapse is an open-source platform for creating, connecting, and orchestrating AI agents powered by any LLM — local, cloud or CLIs.

## 요약

- 조사 단위: `sources/synapseorch-ai__synapse-ai` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 283 files, 65 directories, depth score 123, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=backend/examples/mcp_pack.bundle.json, backend/core/mcp_client.py, backend/core/mcp_oauth_state.py이고, 의존성 단서는 anthropic, mcp, fastapi, ollama, llama, chroma, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | synapseorch-ai/synapse-ai |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 282 |
| Forks | 50 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/synapseorch-ai__synapse-ai](../../../../sources/synapseorch-ai__synapse-ai) |
| Existing report | [reports/global-trending/repositories/synapseorch-ai__synapse-ai.md](../../../global-trending/repositories/synapseorch-ai__synapse-ai.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 283 / 65 |
| Max observed depth | 9 |
| Top directories | .github, backend, bin, docker, docs, frontend, infra, scripts, synapse |
| Top extensions | .py: 124, .tsx: 46, .ts: 29, .json: 18, .svg: 17, .yml: 6, (none): 6, .js: 5, .md: 5, .yaml: 5, .txt: 4, .sh: 3 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
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


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | node scripts/bundle-frontend.js |
| build | package.json | prepublishOnly | npm run build |
| utility | package.json | preuninstall | node scripts/preuninstall.js |
| utility | pyproject.toml | synapse | synapse |
| entrypoint | package.json bin | synapse.js | ./bin/synapse.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | anthropic |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | chroma |
| modelRuntime | ollama, llama |
| webRuntime | fastapi |
| developerSurface | none |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
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
| instruction | 0 | not obvious |
| docs | 3 | [README.md](../../../../sources/synapseorch-ai__synapse-ai/README.md)<br>[frontend/README.md](../../../../sources/synapseorch-ai__synapse-ai/frontend/README.md)<br>[docs/cli.md](../../../../sources/synapseorch-ai__synapse-ai/docs/cli.md) |
| config | 9 | [package.json](../../../../sources/synapseorch-ai__synapse-ai/package.json)<br>[pyproject.toml](../../../../sources/synapseorch-ai__synapse-ai/pyproject.toml)<br>[frontend/package.json](../../../../sources/synapseorch-ai__synapse-ai/frontend/package.json)<br>[frontend/tsconfig.json](../../../../sources/synapseorch-ai__synapse-ai/frontend/tsconfig.json)<br>[backend/package.json](../../../../sources/synapseorch-ai__synapse-ai/backend/package.json)<br>[backend/requirements-coding.txt](../../../../sources/synapseorch-ai__synapse-ai/backend/requirements-coding.txt)<br>[backend/requirements-messaging.txt](../../../../sources/synapseorch-ai__synapse-ai/backend/requirements-messaging.txt)<br>[backend/requirements-worker.txt](../../../../sources/synapseorch-ai__synapse-ai/backend/requirements-worker.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 2 | [backend/tests/__init__.py](../../../../sources/synapseorch-ai__synapse-ai/backend/tests/__init__.py)<br>[backend/tests/test_cache.py](../../../../sources/synapseorch-ai__synapse-ai/backend/tests/test_cache.py) |
| CI workflows | 3 | [.github/workflows/codacy.yml](../../../../sources/synapseorch-ai__synapse-ai/.github/workflows/codacy.yml)<br>[.github/workflows/codeql.yml](../../../../sources/synapseorch-ai__synapse-ai/.github/workflows/codeql.yml)<br>[.github/workflows/publish.yml](../../../../sources/synapseorch-ai__synapse-ai/.github/workflows/publish.yml) |
| Containers / deploy | 9 | [docker-compose.yml](../../../../sources/synapseorch-ai__synapse-ai/docker-compose.yml)<br>[Dockerfile](../../../../sources/synapseorch-ai__synapse-ai/Dockerfile)<br>[Dockerfile.backend](../../../../sources/synapseorch-ai__synapse-ai/Dockerfile.backend)<br>[Dockerfile.frontend](../../../../sources/synapseorch-ai__synapse-ai/Dockerfile.frontend)<br>[Dockerfile.worker](../../../../sources/synapseorch-ai__synapse-ai/Dockerfile.worker)<br>[infra/k8s/api-deployment.yaml](../../../../sources/synapseorch-ai__synapse-ai/infra/k8s/api-deployment.yaml) |
| Security / policy | 9 | [frontend/src/app/api/auth/status/route.ts](../../../../sources/synapseorch-ai__synapse-ai/frontend/src/app/api/auth/status/route.ts)<br>[frontend/src/app/api/auth/logout/route.ts](../../../../sources/synapseorch-ai__synapse-ai/frontend/src/app/api/auth/logout/route.ts)<br>[frontend/src/app/api/auth/login/route.ts](../../../../sources/synapseorch-ai__synapse-ai/frontend/src/app/api/auth/login/route.ts)<br>[backend/tools/sandbox.Dockerfile](../../../../sources/synapseorch-ai__synapse-ai/backend/tools/sandbox.Dockerfile)<br>[backend/tools/sandbox.py](../../../../sources/synapseorch-ai__synapse-ai/backend/tools/sandbox.py)<br>[backend/core/internal_auth.py](../../../../sources/synapseorch-ai__synapse-ai/backend/core/internal_auth.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `backend/examples/mcp_pack.bundle.json`, `backend/core/mcp_client.py`, `backend/core/mcp_oauth_state.py`.
2. Trace execution through entrypoints: `synapse/__main__.py`, `bin/synapse`, `bin/synapse.bat`.
3. Map agent/tool runtime through: `frontend/src/app/api/agents/generate-prompt/route.ts`, `frontend/src/app/api/agent-types/route.ts`, `backend/tools/__init__.py`.
4. Inspect retrieval/memory/indexing through: `frontend/src/types/index.ts`, `frontend/src/store/index.ts`, `frontend/src/components/settings/index.ts`.
5. Verify behavior through test/eval files: `backend/tests/__init__.py`, `backend/tests/test_cache.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Build AI agents that actually do things. Synapse is an open source platform for creating, connecting, and orchestrating . 핵심 구조 신호는 Python, package.json, pyproject.toml, Dockerfile, docker-compose.yml, README.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
