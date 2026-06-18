# khoj-ai/khoj Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 701 files, 144 directories.

## 요약

- 조사 단위: `sources/khoj-ai__khoj` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 699 files, 143 directories, depth score 136, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/khoj/processor/tools/mcp.py이고, 의존성 단서는 openai, anthropic, mcp, langchain, fastapi, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | khoj-ai/khoj |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | Python |
| Stars | 35186 |
| Forks | 2252 |
| License | AGPL-3.0 |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/khoj-ai__khoj](../../../../sources/khoj-ai__khoj) |
| Existing report | [reports/llm-wiki/repositories/khoj-ai__khoj.md](../../../llm-wiki/repositories/khoj-ai__khoj.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 699 / 143 |
| Max observed depth | 11 |
| Top directories | .devcontainer, .github, documentation, scripts, src, tests |
| Top extensions | .py: 251, .tsx: 81, .png: 72, .md: 42, .svg: 34, .css: 27, .json: 25, .ts: 22, .markdown: 19, (none): 18, .js: 17, .yml: 15 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 42 |
| src | source boundary | 32 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| documentation | documentation surface | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | khoj | khoj |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | langchain |
| vectorStores | pgvector |
| modelRuntime | torch, transformers |
| webRuntime | fastapi |
| developerSurface | click |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [src/khoj/processor/tools/mcp.py](../../../../sources/khoj-ai__khoj/src/khoj/processor/tools/mcp.py) | mcp signal |
| agentRuntime | [src/khoj/processor/tools/__init__.py](../../../../sources/khoj-ai__khoj/src/khoj/processor/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [src/khoj/processor/tools/online_search.py](../../../../sources/khoj-ai__khoj/src/khoj/processor/tools/online_search.py) | agentRuntime signal |
| agentRuntime | [src/khoj/processor/tools/run_code.py](../../../../sources/khoj-ai__khoj/src/khoj/processor/tools/run_code.py) | agentRuntime signal |
| entrypoints | [src/khoj/main.py](../../../../sources/khoj-ai__khoj/src/khoj/main.py) | entrypoints signal |
| entrypoints | [src/interface/obsidian/src/main.ts](../../../../sources/khoj-ai__khoj/src/interface/obsidian/src/main.ts) | entrypoints signal |
| entrypoints | [src/interface/desktop/main.js](../../../../sources/khoj-ai__khoj/src/interface/desktop/main.js) | entrypoints signal |
| instruction | [documentation/docs/features/agents.md](../../../../sources/khoj-ai__khoj/documentation/docs/features/agents.md) | instruction signal |
| config | [pyproject.toml](../../../../sources/khoj-ai__khoj/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/khoj-ai__khoj/uv.lock) | config signal |
| config | [src/telemetry/requirements.txt](../../../../sources/khoj-ai__khoj/src/telemetry/requirements.txt) | config signal |
| config | [src/interface/web/package.json](../../../../sources/khoj-ai__khoj/src/interface/web/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [src/khoj/main.py](../../../../sources/khoj-ai__khoj/src/khoj/main.py)<br>[src/interface/obsidian/src/main.ts](../../../../sources/khoj-ai__khoj/src/interface/obsidian/src/main.ts)<br>[src/interface/desktop/main.js](../../../../sources/khoj-ai__khoj/src/interface/desktop/main.js) |
| agentRuntime | 12 | [src/khoj/processor/tools/__init__.py](../../../../sources/khoj-ai__khoj/src/khoj/processor/tools/__init__.py)<br>[src/khoj/processor/tools/mcp.py](../../../../sources/khoj-ai__khoj/src/khoj/processor/tools/mcp.py)<br>[src/khoj/processor/tools/online_search.py](../../../../sources/khoj-ai__khoj/src/khoj/processor/tools/online_search.py)<br>[src/khoj/processor/tools/run_code.py](../../../../sources/khoj-ai__khoj/src/khoj/processor/tools/run_code.py)<br>[src/khoj/interface/web/assets/icons/agents.svg](../../../../sources/khoj-ai__khoj/src/khoj/interface/web/assets/icons/agents.svg)<br>[src/interface/web/public/agents.svg](../../../../sources/khoj-ai__khoj/src/interface/web/public/agents.svg)<br>[src/interface/web/hooks/use-mobile.tsx](../../../../sources/khoj-ai__khoj/src/interface/web/hooks/use-mobile.tsx)<br>[src/interface/web/app/agents/agents.module.css](../../../../sources/khoj-ai__khoj/src/interface/web/app/agents/agents.module.css) |
| mcp | 1 | [src/khoj/processor/tools/mcp.py](../../../../sources/khoj-ai__khoj/src/khoj/processor/tools/mcp.py) |
| retrieval | 3 | [tests/test_memory_settings.py](../../../../sources/khoj-ai__khoj/tests/test_memory_settings.py)<br>[src/khoj/interface/web/home/index.html](../../../../sources/khoj-ai__khoj/src/khoj/interface/web/home/index.html)<br>[src/khoj/database/migrations/0003_vector_extension.py](../../../../sources/khoj-ai__khoj/src/khoj/database/migrations/0003_vector_extension.py) |
| spec | 2 | [src/telemetry/requirements.txt](../../../../sources/khoj-ai__khoj/src/telemetry/requirements.txt)<br>[documentation/assets/img/khoj_architecture.png](../../../../sources/khoj-ai__khoj/documentation/assets/img/khoj_architecture.png) |
| eval | 65 | [tests/__init__.py](../../../../sources/khoj-ai__khoj/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/khoj-ai__khoj/tests/conftest.py)<br>[tests/helpers.py](../../../../sources/khoj-ai__khoj/tests/helpers.py)<br>[tests/test_agents.py](../../../../sources/khoj-ai__khoj/tests/test_agents.py)<br>[tests/test_api_automation.py](../../../../sources/khoj-ai__khoj/tests/test_api_automation.py)<br>[tests/test_cli.py](../../../../sources/khoj-ai__khoj/tests/test_cli.py)<br>[tests/test_client.py](../../../../sources/khoj-ai__khoj/tests/test_client.py)<br>[tests/test_conversation_utils.py](../../../../sources/khoj-ai__khoj/tests/test_conversation_utils.py) |
| security | 3 | [src/khoj/routers/auth.py](../../../../sources/khoj-ai__khoj/src/khoj/routers/auth.py)<br>[src/interface/web/app/common/auth.ts](../../../../sources/khoj-ai__khoj/src/interface/web/app/common/auth.ts)<br>[documentation/docs/get-started/privacy-security.md](../../../../sources/khoj-ai__khoj/documentation/docs/get-started/privacy-security.md) |
| ci | 11 | [.github/workflows/build_khoj_el.yml](../../../../sources/khoj-ai__khoj/.github/workflows/build_khoj_el.yml)<br>[.github/workflows/desktop.yml](../../../../sources/khoj-ai__khoj/.github/workflows/desktop.yml)<br>[.github/workflows/dockerize_telemetry_server.yml](../../../../sources/khoj-ai__khoj/.github/workflows/dockerize_telemetry_server.yml)<br>[.github/workflows/dockerize.yml](../../../../sources/khoj-ai__khoj/.github/workflows/dockerize.yml)<br>[.github/workflows/github_pages_deploy.yml](../../../../sources/khoj-ai__khoj/.github/workflows/github_pages_deploy.yml)<br>[.github/workflows/pre-commit.yml](../../../../sources/khoj-ai__khoj/.github/workflows/pre-commit.yml)<br>[.github/workflows/pypi.yml](../../../../sources/khoj-ai__khoj/.github/workflows/pypi.yml)<br>[.github/workflows/release.yml](../../../../sources/khoj-ai__khoj/.github/workflows/release.yml) |
| container | 4 | [docker-compose.yml](../../../../sources/khoj-ai__khoj/docker-compose.yml)<br>[Dockerfile](../../../../sources/khoj-ai__khoj/Dockerfile)<br>[src/telemetry/Dockerfile](../../../../sources/khoj-ai__khoj/src/telemetry/Dockerfile)<br>[.devcontainer/Dockerfile](../../../../sources/khoj-ai__khoj/.devcontainer/Dockerfile) |
| instruction | 1 | [documentation/docs/features/agents.md](../../../../sources/khoj-ai__khoj/documentation/docs/features/agents.md) |
| docs | 53 | [README.md](../../../../sources/khoj-ai__khoj/README.md)<br>[src/khoj/processor/operator/README.md](../../../../sources/khoj-ai__khoj/src/khoj/processor/operator/README.md)<br>[src/khoj/app/README.md](../../../../sources/khoj-ai__khoj/src/khoj/app/README.md)<br>[src/interface/web/README.md](../../../../sources/khoj-ai__khoj/src/interface/web/README.md)<br>[src/interface/obsidian/README.md](../../../../sources/khoj-ai__khoj/src/interface/obsidian/README.md)<br>[src/interface/desktop/README.md](../../../../sources/khoj-ai__khoj/src/interface/desktop/README.md)<br>[documentation/docusaurus.config.js](../../../../sources/khoj-ai__khoj/documentation/docusaurus.config.js)<br>[documentation/README.md](../../../../sources/khoj-ai__khoj/documentation/README.md) |
| config | 9 | [pyproject.toml](../../../../sources/khoj-ai__khoj/pyproject.toml)<br>[uv.lock](../../../../sources/khoj-ai__khoj/uv.lock)<br>[src/telemetry/requirements.txt](../../../../sources/khoj-ai__khoj/src/telemetry/requirements.txt)<br>[src/interface/web/package.json](../../../../sources/khoj-ai__khoj/src/interface/web/package.json)<br>[src/interface/web/tsconfig.json](../../../../sources/khoj-ai__khoj/src/interface/web/tsconfig.json)<br>[src/interface/obsidian/package.json](../../../../sources/khoj-ai__khoj/src/interface/obsidian/package.json)<br>[src/interface/obsidian/tsconfig.json](../../../../sources/khoj-ai__khoj/src/interface/obsidian/tsconfig.json)<br>[src/interface/desktop/package.json](../../../../sources/khoj-ai__khoj/src/interface/desktop/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 65 | [tests/__init__.py](../../../../sources/khoj-ai__khoj/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/khoj-ai__khoj/tests/conftest.py)<br>[tests/helpers.py](../../../../sources/khoj-ai__khoj/tests/helpers.py)<br>[tests/test_agents.py](../../../../sources/khoj-ai__khoj/tests/test_agents.py)<br>[tests/test_api_automation.py](../../../../sources/khoj-ai__khoj/tests/test_api_automation.py)<br>[tests/test_cli.py](../../../../sources/khoj-ai__khoj/tests/test_cli.py) |
| CI workflows | 11 | [.github/workflows/build_khoj_el.yml](../../../../sources/khoj-ai__khoj/.github/workflows/build_khoj_el.yml)<br>[.github/workflows/desktop.yml](../../../../sources/khoj-ai__khoj/.github/workflows/desktop.yml)<br>[.github/workflows/dockerize_telemetry_server.yml](../../../../sources/khoj-ai__khoj/.github/workflows/dockerize_telemetry_server.yml)<br>[.github/workflows/dockerize.yml](../../../../sources/khoj-ai__khoj/.github/workflows/dockerize.yml)<br>[.github/workflows/github_pages_deploy.yml](../../../../sources/khoj-ai__khoj/.github/workflows/github_pages_deploy.yml)<br>[.github/workflows/pre-commit.yml](../../../../sources/khoj-ai__khoj/.github/workflows/pre-commit.yml) |
| Containers / deploy | 4 | [docker-compose.yml](../../../../sources/khoj-ai__khoj/docker-compose.yml)<br>[Dockerfile](../../../../sources/khoj-ai__khoj/Dockerfile)<br>[src/telemetry/Dockerfile](../../../../sources/khoj-ai__khoj/src/telemetry/Dockerfile)<br>[.devcontainer/Dockerfile](../../../../sources/khoj-ai__khoj/.devcontainer/Dockerfile) |
| Security / policy | 3 | [src/khoj/routers/auth.py](../../../../sources/khoj-ai__khoj/src/khoj/routers/auth.py)<br>[src/interface/web/app/common/auth.ts](../../../../sources/khoj-ai__khoj/src/interface/web/app/common/auth.ts)<br>[documentation/docs/get-started/privacy-security.md](../../../../sources/khoj-ai__khoj/documentation/docs/get-started/privacy-security.md) |
| Agent instructions | 1 | [documentation/docs/features/agents.md](../../../../sources/khoj-ai__khoj/documentation/docs/features/agents.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/khoj/processor/tools/mcp.py`, `src/khoj/processor/tools/__init__.py`, `src/khoj/processor/tools/online_search.py`.
2. Trace execution through entrypoints: `src/khoj/main.py`, `src/interface/obsidian/src/main.ts`, `src/interface/desktop/main.js`.
3. Map agent/tool runtime through: `src/khoj/processor/tools/__init__.py`, `src/khoj/processor/tools/mcp.py`, `src/khoj/processor/tools/online_search.py`.
4. Inspect retrieval/memory/indexing through: `tests/test_memory_settings.py`, `src/khoj/interface/web/home/index.html`, `src/khoj/database/migrations/0003_vector_extension.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/conftest.py`, `tests/helpers.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 701 files, 144 directories.. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, README.md, LICENSE이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 major metadata risk not obvious입니다.
