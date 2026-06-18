# wassim249/fastapi-langgraph-agent-production-ready-template Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A production-ready FastAPI template for building AI agent applications with LangGraph integration. This template provides a robust foundation for building scalable, secure, and maintainable AI agent services.

## 요약

- 조사 단위: `sources/wassim249__fastapi-langgraph-agent-production-ready-template` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 93 files, 28 directories, depth score 118, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, docs/memory.md, app/services/memory.py이고, 의존성 단서는 openai, langchain, langgraph, fastapi, pydantic, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | wassim249/fastapi-langgraph-agent-production-ready-template |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 2413 |
| Forks | 568 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/wassim249__fastapi-langgraph-agent-production-ready-template](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template) |
| Existing report | [reports/global-trending/repositories/wassim249__fastapi-langgraph-agent-production-ready-template.md](../../../global-trending/repositories/wassim249__fastapi-langgraph-agent-production-ready-template.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 93 / 28 |
| Max observed depth | 5 |
| Top directories | .cursor, .github, alembic, app, docs, evals, grafana, prometheus, scripts, typings |
| Top extensions | .py: 44, .md: 21, (none): 9, .sh: 3, .yaml: 3, .yml: 3, .png: 2, .baseline: 1, .example: 1, .ini: 1, .json: 1, .lock: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 18 |
| .github | ci surface | 1 |
| alembic | top-level component | 1 |
| app | top-level component | 1 |
| evals | top-level component | 1 |
| grafana | top-level component | 1 |
| prometheus | top-level component | 1 |
| scripts | top-level component | 1 |
| typings | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | install | make install |
| serve-dev | Makefile | dev | make dev |
| utility | Makefile | staging | make staging |
| utility | Makefile | prod | make prod |
| serve-dev | Makefile | _serve | make _serve |
| utility | Makefile | migrate | make migrate |
| utility | Makefile | migration | make migration |
| utility | Makefile | migrate-downgrade | make migrate-downgrade |
| utility | Makefile | migrate-history | make migrate-history |
| utility | Makefile | eval | make eval |
| utility | Makefile | eval-quick | make eval-quick |
| utility | Makefile | eval-no-report | make eval-no-report |
| quality | Makefile | lint | make lint |
| quality | Makefile | format | make format |
| quality | Makefile | typecheck | make typecheck |
| quality | Makefile | check | make check |
| utility | Makefile | pre-commit | make pre-commit |
| utility | Makefile | pre-commit-update | make pre-commit-update |
| build | Makefile | docker-build | make docker-build |
| container | Makefile | docker-up | make docker-up |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | none |
| agentFrameworks | langchain, langgraph |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | fastapi |
| developerSurface | none |
| observability | prometheus |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [AGENTS.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/AGENTS.md) | agentRuntime signal |
| agentRuntime | [docs/memory.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docs/memory.md) | agentRuntime signal |
| agentRuntime | [app/services/memory.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/services/memory.py) | agentRuntime signal |
| agentRuntime | [app/core/langgraph/tools/__init__.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/core/langgraph/tools/__init__.py) | agentRuntime signal |
| entrypoints | [evals/main.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/evals/main.py) | entrypoints signal |
| entrypoints | [app/main.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/main.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/CLAUDE.md) | instruction signal |
| instruction | [.cursor/rules/project-main-rules.mdc](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/.cursor/rules/project-main-rules.mdc) | instruction signal |
| config | [Makefile](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/Makefile) | config signal |
| config | [pyproject.toml](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/uv.lock) | config signal |
| ci | [.github/workflows/ci.yaml](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/.github/workflows/ci.yaml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [evals/main.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/evals/main.py)<br>[app/main.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/main.py) |
| agentRuntime | 6 | [AGENTS.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/AGENTS.md)<br>[docs/memory.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docs/memory.md)<br>[app/services/memory.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/services/memory.py)<br>[app/core/langgraph/tools/__init__.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/core/langgraph/tools/__init__.py)<br>[app/core/langgraph/tools/ask_human.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/core/langgraph/tools/ask_human.py)<br>[app/core/langgraph/tools/duckduckgo_search.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/core/langgraph/tools/duckduckgo_search.py) |
| mcp | 0 | not obvious |
| retrieval | 5 | [docs/memory.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docs/memory.md)<br>[app/utils/graph.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/utils/graph.py)<br>[app/services/memory.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/services/memory.py)<br>[app/schemas/graph.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/schemas/graph.py)<br>[app/core/langgraph/graph.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/core/langgraph/graph.py) |
| spec | 1 | [docs/architecture.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docs/architecture.md) |
| eval | 3 | [docs/evaluation.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docs/evaluation.md)<br>[docs/observability.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docs/observability.md)<br>[app/core/observability.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/core/observability.py) |
| security | 4 | [SECURITY.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/SECURITY.md)<br>[app/utils/auth.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/utils/auth.py)<br>[app/schemas/auth.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/schemas/auth.py)<br>[app/api/v1/auth.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/api/v1/auth.py) |
| ci | 2 | [.github/workflows/ci.yaml](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/.github/workflows/ci.yaml)<br>[.github/workflows/deploy.yaml](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/.github/workflows/deploy.yaml) |
| container | 2 | [docker-compose.yml](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docker-compose.yml)<br>[Dockerfile](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/Dockerfile) |
| instruction | 3 | [AGENTS.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/AGENTS.md)<br>[CLAUDE.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/CLAUDE.md)<br>[.cursor/rules/project-main-rules.mdc](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/.cursor/rules/project-main-rules.mdc) |
| docs | 14 | [README.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/README.md)<br>[docs/architecture.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docs/architecture.md)<br>[docs/atlas-cloud-logo-dark.png](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docs/atlas-cloud-logo-dark.png)<br>[docs/atlas-cloud-logo.png](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docs/atlas-cloud-logo.png)<br>[docs/authentication.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docs/authentication.md)<br>[docs/configuration.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docs/configuration.md)<br>[docs/database.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docs/database.md)<br>[docs/docker.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docs/docker.md) |
| config | 3 | [Makefile](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/Makefile)<br>[pyproject.toml](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/pyproject.toml)<br>[uv.lock](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 3 | [docs/evaluation.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docs/evaluation.md)<br>[docs/observability.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docs/observability.md)<br>[app/core/observability.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/core/observability.py) |
| CI workflows | 2 | [.github/workflows/ci.yaml](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/.github/workflows/ci.yaml)<br>[.github/workflows/deploy.yaml](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/.github/workflows/deploy.yaml) |
| Containers / deploy | 2 | [docker-compose.yml](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/docker-compose.yml)<br>[Dockerfile](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/Dockerfile) |
| Security / policy | 4 | [SECURITY.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/SECURITY.md)<br>[app/utils/auth.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/utils/auth.py)<br>[app/schemas/auth.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/schemas/auth.py)<br>[app/api/v1/auth.py](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/app/api/v1/auth.py) |
| Agent instructions | 3 | [AGENTS.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/AGENTS.md)<br>[CLAUDE.md](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/CLAUDE.md)<br>[.cursor/rules/project-main-rules.mdc](../../../../sources/wassim249__fastapi-langgraph-agent-production-ready-template/.cursor/rules/project-main-rules.mdc) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `AGENTS.md`, `docs/memory.md`, `app/services/memory.py`.
2. Trace execution through entrypoints: `evals/main.py`, `app/main.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `docs/memory.md`, `app/services/memory.py`.
4. Inspect retrieval/memory/indexing through: `docs/memory.md`, `app/utils/graph.py`, `app/services/memory.py`.
5. Verify behavior through test/eval files: `docs/evaluation.md`, `docs/observability.md`, `app/core/observability.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 A production ready FastAPI template for building AI agent applications with LangGraph integration. This template provide. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, Makefile, README.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
