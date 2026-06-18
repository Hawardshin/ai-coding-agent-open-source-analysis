# vstorm-co/pydantic-ai-backend Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

File Storage & Sandbox Backends for Pydantic AI: console tools for file operations, Docker-isolated sandboxes for safe execution, and permission system with presets for access control. Enables secure multi-user handling and testing in agents via in-memory, local, or containerized storage.

## 요약

- 조사 단위: `sources/vstorm-co__pydantic-ai-backend` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 108 files, 25 directories, depth score 108, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=src/pydantic_ai_backends/backends/docker/sandbox.py, examples/predictive_analytics/agent.py이고, 의존성 단서는 pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | vstorm-co/pydantic-ai-backend |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 102 |
| Forks | 21 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/vstorm-co__pydantic-ai-backend](../../../../sources/vstorm-co__pydantic-ai-backend) |
| Existing report | [reports/global-trending/repositories/vstorm-co__pydantic-ai-backend.md](../../../global-trending/repositories/vstorm-co__pydantic-ai-backend.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 108 / 25 |
| Max observed depth | 5 |
| Top directories | .github, assets, docs, examples, src, tests |
| Top extensions | .py: 50, .md: 36, .png: 4, .yml: 4, .html: 3, (none): 3, .css: 2, .json: 2, .js: 1, .toml: 1, .txt: 1, .yaml: 1 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 39 |
| tests | validation surface | 22 |
| examples/predictive_analytics | examples workspace | 6 |
| examples/web_production | examples workspace | 3 |
| src | source boundary | 3 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| examples | top-level component | 1 |
| examples/local_cli | examples workspace | 1 |
| examples/README.md | examples workspace | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | install | make install |
| utility | Makefile | sync | make sync |
| test | Makefile | test | make test |
| test | Makefile | test-fast | make test-fast |
| quality | Makefile | lint | make lint |
| quality | Makefile | format | make format |
| quality | Makefile | typecheck | make typecheck |
| quality | Makefile | typecheck-mypy | make typecheck-mypy |
| utility | Makefile | all | make all |
| utility | Makefile | clean | make clean |


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
| agentRuntime | [src/pydantic_ai_backends/backends/docker/sandbox.py](../../../../sources/vstorm-co__pydantic-ai-backend/src/pydantic_ai_backends/backends/docker/sandbox.py) | agentRuntime signal |
| agentRuntime | [examples/predictive_analytics/agent.py](../../../../sources/vstorm-co__pydantic-ai-backend/examples/predictive_analytics/agent.py) | agentRuntime signal |
| entrypoints | [examples/web_production/server.py](../../../../sources/vstorm-co__pydantic-ai-backend/examples/web_production/server.py) | entrypoints signal |
| entrypoints | [examples/predictive_analytics/server.py](../../../../sources/vstorm-co__pydantic-ai-backend/examples/predictive_analytics/server.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/vstorm-co__pydantic-ai-backend/CLAUDE.md) | instruction signal |
| config | [Makefile](../../../../sources/vstorm-co__pydantic-ai-backend/Makefile) | config signal |
| config | [pyproject.toml](../../../../sources/vstorm-co__pydantic-ai-backend/pyproject.toml) | config signal |
| config | [examples/predictive_analytics/requirements.txt](../../../../sources/vstorm-co__pydantic-ai-backend/examples/predictive_analytics/requirements.txt) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/vstorm-co__pydantic-ai-backend/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/docs.yml](../../../../sources/vstorm-co__pydantic-ai-backend/.github/workflows/docs.yml) | ci support |
| eval | [tests/__init__.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/__init__.py) | eval support |
| eval | [tests/test_backends_extended.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_backends_extended.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [examples/web_production/server.py](../../../../sources/vstorm-co__pydantic-ai-backend/examples/web_production/server.py)<br>[examples/predictive_analytics/server.py](../../../../sources/vstorm-co__pydantic-ai-backend/examples/predictive_analytics/server.py) |
| agentRuntime | 2 | [src/pydantic_ai_backends/backends/docker/sandbox.py](../../../../sources/vstorm-co__pydantic-ai-backend/src/pydantic_ai_backends/backends/docker/sandbox.py)<br>[examples/predictive_analytics/agent.py](../../../../sources/vstorm-co__pydantic-ai-backend/examples/predictive_analytics/agent.py) |
| mcp | 0 | not obvious |
| retrieval | 6 | [examples/web_production/templates/index.html](../../../../sources/vstorm-co__pydantic-ai-backend/examples/web_production/templates/index.html)<br>[examples/predictive_analytics/static/index.html](../../../../sources/vstorm-co__pydantic-ai-backend/examples/predictive_analytics/static/index.html)<br>[docs/index.md](../../../../sources/vstorm-co__pydantic-ai-backend/docs/index.md)<br>[docs/examples/index.md](../../../../sources/vstorm-co__pydantic-ai-backend/docs/examples/index.md)<br>[docs/concepts/index.md](../../../../sources/vstorm-co__pydantic-ai-backend/docs/concepts/index.md)<br>[docs/api/index.md](../../../../sources/vstorm-co__pydantic-ai-backend/docs/api/index.md) |
| spec | 3 | [examples/predictive_analytics/requirements.txt](../../../../sources/vstorm-co__pydantic-ai-backend/examples/predictive_analytics/requirements.txt)<br>[docs/assets/architecture.png](../../../../sources/vstorm-co__pydantic-ai-backend/docs/assets/architecture.png)<br>[assets/architecture.png](../../../../sources/vstorm-co__pydantic-ai-backend/assets/architecture.png) |
| eval | 18 | [tests/__init__.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/__init__.py)<br>[tests/test_backends_extended.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_backends_extended.py)<br>[tests/test_backends.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_backends.py)<br>[tests/test_capability.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_capability.py)<br>[tests/test_console_permissions.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_console_permissions.py)<br>[tests/test_console.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_console.py)<br>[tests/test_daytona_sandbox.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_daytona_sandbox.py)<br>[tests/test_docker_sandbox.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_docker_sandbox.py) |
| security | 6 | [tests/test_daytona_sandbox.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_daytona_sandbox.py)<br>[tests/test_docker_sandbox.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_docker_sandbox.py)<br>[tests/test_kubernetes_sandbox.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_kubernetes_sandbox.py)<br>[src/pydantic_ai_backends/backends/docker/sandbox.py](../../../../sources/vstorm-co__pydantic-ai-backend/src/pydantic_ai_backends/backends/docker/sandbox.py)<br>[docs/examples/docker-sandbox.md](../../../../sources/vstorm-co__pydantic-ai-backend/docs/examples/docker-sandbox.md)<br>[docs/examples/kubernetes-sandbox.md](../../../../sources/vstorm-co__pydantic-ai-backend/docs/examples/kubernetes-sandbox.md) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/vstorm-co__pydantic-ai-backend/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/vstorm-co__pydantic-ai-backend/.github/workflows/docs.yml)<br>[.github/workflows/publish.yml](../../../../sources/vstorm-co__pydantic-ai-backend/.github/workflows/publish.yml) |
| container | 0 | not obvious |
| instruction | 1 | [CLAUDE.md](../../../../sources/vstorm-co__pydantic-ai-backend/CLAUDE.md) |
| docs | 37 | [mkdocs.yml](../../../../sources/vstorm-co__pydantic-ai-backend/mkdocs.yml)<br>[README.md](../../../../sources/vstorm-co__pydantic-ai-backend/README.md)<br>[examples/README.md](../../../../sources/vstorm-co__pydantic-ai-backend/examples/README.md)<br>[examples/web_production/README.md](../../../../sources/vstorm-co__pydantic-ai-backend/examples/web_production/README.md)<br>[examples/predictive_analytics/README.md](../../../../sources/vstorm-co__pydantic-ai-backend/examples/predictive_analytics/README.md)<br>[examples/local_cli/README.md](../../../../sources/vstorm-co__pydantic-ai-backend/examples/local_cli/README.md)<br>[docs/changelog.md](../../../../sources/vstorm-co__pydantic-ai-backend/docs/changelog.md)<br>[docs/getting-help.md](../../../../sources/vstorm-co__pydantic-ai-backend/docs/getting-help.md) |
| config | 3 | [Makefile](../../../../sources/vstorm-co__pydantic-ai-backend/Makefile)<br>[pyproject.toml](../../../../sources/vstorm-co__pydantic-ai-backend/pyproject.toml)<br>[examples/predictive_analytics/requirements.txt](../../../../sources/vstorm-co__pydantic-ai-backend/examples/predictive_analytics/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 18 | [tests/__init__.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/__init__.py)<br>[tests/test_backends_extended.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_backends_extended.py)<br>[tests/test_backends.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_backends.py)<br>[tests/test_capability.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_capability.py)<br>[tests/test_console_permissions.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_console_permissions.py)<br>[tests/test_console.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_console.py) |
| CI workflows | 3 | [.github/workflows/ci.yml](../../../../sources/vstorm-co__pydantic-ai-backend/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/vstorm-co__pydantic-ai-backend/.github/workflows/docs.yml)<br>[.github/workflows/publish.yml](../../../../sources/vstorm-co__pydantic-ai-backend/.github/workflows/publish.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 6 | [tests/test_daytona_sandbox.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_daytona_sandbox.py)<br>[tests/test_docker_sandbox.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_docker_sandbox.py)<br>[tests/test_kubernetes_sandbox.py](../../../../sources/vstorm-co__pydantic-ai-backend/tests/test_kubernetes_sandbox.py)<br>[src/pydantic_ai_backends/backends/docker/sandbox.py](../../../../sources/vstorm-co__pydantic-ai-backend/src/pydantic_ai_backends/backends/docker/sandbox.py)<br>[docs/examples/docker-sandbox.md](../../../../sources/vstorm-co__pydantic-ai-backend/docs/examples/docker-sandbox.md)<br>[docs/examples/kubernetes-sandbox.md](../../../../sources/vstorm-co__pydantic-ai-backend/docs/examples/kubernetes-sandbox.md) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/vstorm-co__pydantic-ai-backend/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/pydantic_ai_backends/backends/docker/sandbox.py`, `examples/predictive_analytics/agent.py`, `examples/web_production/server.py`.
2. Trace execution through entrypoints: `examples/web_production/server.py`, `examples/predictive_analytics/server.py`.
3. Map agent/tool runtime through: `src/pydantic_ai_backends/backends/docker/sandbox.py`, `examples/predictive_analytics/agent.py`.
4. Inspect retrieval/memory/indexing through: `examples/web_production/templates/index.html`, `examples/predictive_analytics/static/index.html`, `docs/index.md`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/test_backends_extended.py`, `tests/test_backends.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 File Storage & Sandbox Backends for Pydantic AI console tools for file operations, Docker isolated sandboxes for safe ex. 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
