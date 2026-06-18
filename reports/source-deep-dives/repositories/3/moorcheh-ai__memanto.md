# moorcheh-ai/memanto Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Memory that AI Agents Love!

## 요약

- 조사 단위: `sources/moorcheh-ai__memanto` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 245 files, 59 directories, depth score 126, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/test_memory_parsing.py, memanto/cli/commands/memory_mgmt.py, memanto/cli/commands/memory.py이고, 의존성 단서는 fastapi, pydantic, typer, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | moorcheh-ai/memanto |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Python |
| Stars | 946 |
| Forks | 313 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/moorcheh-ai__memanto](../../../../sources/moorcheh-ai__memanto) |
| Existing report | [reports/global-trending/repositories/moorcheh-ai__memanto.md](../../../global-trending/repositories/moorcheh-ai__memanto.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 245 / 59 |
| Max observed depth | 5 |
| Top directories | .github, assets, docs, examples, integrations, memanto, tests |
| Top extensions | .py: 168, .md: 32, (none): 9, .example: 6, .toml: 6, .png: 5, .txt: 4, .yml: 4, .gif: 2, .json: 2, .svg: 2, .yaml: 2 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| examples/langgraph-memanto | examples workspace | 18 |
| examples/claudecode-skills-memanto | examples workspace | 17 |
| docs | documentation surface | 15 |
| tests | validation surface | 15 |
| examples/crewai-memory | examples workspace | 14 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| examples | top-level component | 1 |
| integrations | top-level component | 1 |
| memanto | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | memanto | memanto |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | fastapi |
| developerSurface | typer |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [tests/test_memory_parsing.py](../../../../sources/moorcheh-ai__memanto/tests/test_memory_parsing.py) | retrieval signal |
| retrieval | [memanto/cli/commands/memory_mgmt.py](../../../../sources/moorcheh-ai__memanto/memanto/cli/commands/memory_mgmt.py) | retrieval signal |
| retrieval | [memanto/cli/commands/memory.py](../../../../sources/moorcheh-ai__memanto/memanto/cli/commands/memory.py) | retrieval signal |
| retrieval | [memanto/app/ui/static/index.html](../../../../sources/moorcheh-ai__memanto/memanto/app/ui/static/index.html) | retrieval signal |
| entrypoints | [memanto/__main__.py](../../../../sources/moorcheh-ai__memanto/memanto/__main__.py) | entrypoints signal |
| entrypoints | [memanto/cli/main.py](../../../../sources/moorcheh-ai__memanto/memanto/cli/main.py) | entrypoints signal |
| entrypoints | [memanto/app/main.py](../../../../sources/moorcheh-ai__memanto/memanto/app/main.py) | entrypoints signal |
| entrypoints | [integrations/mcp/memanto_mcp/__main__.py](../../../../sources/moorcheh-ai__memanto/integrations/mcp/memanto_mcp/__main__.py) | entrypoints signal |
| docs | [README.md](../../../../sources/moorcheh-ai__memanto/README.md) | docs signal |
| docs | [integrations/mcp/README.md](../../../../sources/moorcheh-ai__memanto/integrations/mcp/README.md) | docs signal |
| docs | [integrations/langgraph/README.md](../../../../sources/moorcheh-ai__memanto/integrations/langgraph/README.md) | docs signal |
| docs | [integrations/hermes-agents/README.md](../../../../sources/moorcheh-ai__memanto/integrations/hermes-agents/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 6 | [memanto/__main__.py](../../../../sources/moorcheh-ai__memanto/memanto/__main__.py)<br>[memanto/cli/main.py](../../../../sources/moorcheh-ai__memanto/memanto/cli/main.py)<br>[memanto/app/main.py](../../../../sources/moorcheh-ai__memanto/memanto/app/main.py)<br>[integrations/mcp/memanto_mcp/__main__.py](../../../../sources/moorcheh-ai__memanto/integrations/mcp/memanto_mcp/__main__.py)<br>[integrations/mcp/memanto_mcp/server.py](../../../../sources/moorcheh-ai__memanto/integrations/mcp/memanto_mcp/server.py)<br>[examples/langgraph-memanto/cross_session_recall/main.py](../../../../sources/moorcheh-ai__memanto/examples/langgraph-memanto/cross_session_recall/main.py) |
| agentRuntime | 31 | [memanto/cli/migrate/runner.py](../../../../sources/moorcheh-ai__memanto/memanto/cli/migrate/runner.py)<br>[memanto/cli/connect/agent_registry.py](../../../../sources/moorcheh-ai__memanto/memanto/cli/connect/agent_registry.py)<br>[memanto/cli/commands/agent.py](../../../../sources/moorcheh-ai__memanto/memanto/cli/commands/agent.py)<br>[memanto/cli/commands/memory_mgmt.py](../../../../sources/moorcheh-ai__memanto/memanto/cli/commands/memory_mgmt.py)<br>[memanto/cli/commands/memory.py](../../../../sources/moorcheh-ai__memanto/memanto/cli/commands/memory.py)<br>[memanto/app/services/agent_service.py](../../../../sources/moorcheh-ai__memanto/memanto/app/services/agent_service.py)<br>[memanto/app/services/memory_export_service.py](../../../../sources/moorcheh-ai__memanto/memanto/app/services/memory_export_service.py)<br>[memanto/app/services/memory_parsing_service.py](../../../../sources/moorcheh-ai__memanto/memanto/app/services/memory_parsing_service.py) |
| mcp | 15 | [integrations/mcp/.env.example](../../../../sources/moorcheh-ai__memanto/integrations/mcp/.env.example)<br>[integrations/mcp/LICENSE](../../../../sources/moorcheh-ai__memanto/integrations/mcp/LICENSE)<br>[integrations/mcp/pyproject.toml](../../../../sources/moorcheh-ai__memanto/integrations/mcp/pyproject.toml)<br>[integrations/mcp/README.md](../../../../sources/moorcheh-ai__memanto/integrations/mcp/README.md)<br>[integrations/mcp/tests/__init__.py](../../../../sources/moorcheh-ai__memanto/integrations/mcp/tests/__init__.py)<br>[integrations/mcp/tests/conftest.py](../../../../sources/moorcheh-ai__memanto/integrations/mcp/tests/conftest.py)<br>[integrations/mcp/tests/test_cli.py](../../../../sources/moorcheh-ai__memanto/integrations/mcp/tests/test_cli.py)<br>[integrations/mcp/tests/test_config.py](../../../../sources/moorcheh-ai__memanto/integrations/mcp/tests/test_config.py) |
| retrieval | 36 | [tests/test_memory_parsing.py](../../../../sources/moorcheh-ai__memanto/tests/test_memory_parsing.py)<br>[memanto/cli/commands/memory_mgmt.py](../../../../sources/moorcheh-ai__memanto/memanto/cli/commands/memory_mgmt.py)<br>[memanto/cli/commands/memory.py](../../../../sources/moorcheh-ai__memanto/memanto/cli/commands/memory.py)<br>[memanto/app/ui/static/index.html](../../../../sources/moorcheh-ai__memanto/memanto/app/ui/static/index.html)<br>[memanto/app/services/memory_export_service.py](../../../../sources/moorcheh-ai__memanto/memanto/app/services/memory_export_service.py)<br>[memanto/app/services/memory_parsing_service.py](../../../../sources/moorcheh-ai__memanto/memanto/app/services/memory_parsing_service.py)<br>[memanto/app/services/memory_read_service.py](../../../../sources/moorcheh-ai__memanto/memanto/app/services/memory_read_service.py)<br>[memanto/app/services/memory_write_service.py](../../../../sources/moorcheh-ai__memanto/memanto/app/services/memory_write_service.py) |
| spec | 9 | [tests/requirements.txt](../../../../sources/moorcheh-ai__memanto/tests/requirements.txt)<br>[examples/langgraph-memanto/requirements.txt](../../../../sources/moorcheh-ai__memanto/examples/langgraph-memanto/requirements.txt)<br>[examples/langgraph-memanto/memanto_base_store/langgraph-architecture-diagram.png](../../../../sources/moorcheh-ai__memanto/examples/langgraph-memanto/memanto_base_store/langgraph-architecture-diagram.png)<br>[examples/crewai-memory/requirements.txt](../../../../sources/moorcheh-ai__memanto/examples/crewai-memory/requirements.txt)<br>[examples/claudecode-skills-memanto/requirements.txt](../../../../sources/moorcheh-ai__memanto/examples/claudecode-skills-memanto/requirements.txt)<br>[docs/SESSION_ARCHITECTURE.md](../../../../sources/moorcheh-ai__memanto/docs/SESSION_ARCHITECTURE.md)<br>[assets/Architecture-diagram.png](../../../../sources/moorcheh-ai__memanto/assets/Architecture-diagram.png)<br>[assets/crewai-architecture.png](../../../../sources/moorcheh-ai__memanto/assets/crewai-architecture.png) |
| eval | 23 | [tests/__init__.py](../../../../sources/moorcheh-ai__memanto/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/moorcheh-ai__memanto/tests/conftest.py)<br>[tests/requirements.txt](../../../../sources/moorcheh-ai__memanto/tests/requirements.txt)<br>[tests/test_analyze.py](../../../../sources/moorcheh-ai__memanto/tests/test_analyze.py)<br>[tests/test_api.py](../../../../sources/moorcheh-ai__memanto/tests/test_api.py)<br>[tests/test_backend.py](../../../../sources/moorcheh-ai__memanto/tests/test_backend.py)<br>[tests/test_batch_memories.json](../../../../sources/moorcheh-ai__memanto/tests/test_batch_memories.json)<br>[tests/test_cli.py](../../../../sources/moorcheh-ai__memanto/tests/test_cli.py) |
| security | 3 | [SECURITY.md](../../../../sources/moorcheh-ai__memanto/SECURITY.md)<br>[memanto/app/utils/auth.py](../../../../sources/moorcheh-ai__memanto/memanto/app/utils/auth.py)<br>[memanto/app/routes/auth_deps.py](../../../../sources/moorcheh-ai__memanto/memanto/app/routes/auth_deps.py) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/moorcheh-ai__memanto/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/moorcheh-ai__memanto/.github/workflows/publish.yml)<br>[.github/workflows/release-integration.yml](../../../../sources/moorcheh-ai__memanto/.github/workflows/release-integration.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/moorcheh-ai__memanto/docker-compose.yml)<br>[Dockerfile](../../../../sources/moorcheh-ai__memanto/Dockerfile) |
| instruction | 1 | [examples/claudecode-skills-memanto/CLAUDE.md](../../../../sources/moorcheh-ai__memanto/examples/claudecode-skills-memanto/CLAUDE.md) |
| docs | 19 | [README.md](../../../../sources/moorcheh-ai__memanto/README.md)<br>[integrations/mcp/README.md](../../../../sources/moorcheh-ai__memanto/integrations/mcp/README.md)<br>[integrations/langgraph/README.md](../../../../sources/moorcheh-ai__memanto/integrations/langgraph/README.md)<br>[integrations/hermes-agents/README.md](../../../../sources/moorcheh-ai__memanto/integrations/hermes-agents/README.md)<br>[integrations/crewai/README.md](../../../../sources/moorcheh-ai__memanto/integrations/crewai/README.md)<br>[examples/langgraph-memanto/README.md](../../../../sources/moorcheh-ai__memanto/examples/langgraph-memanto/README.md)<br>[examples/langgraph-memanto/memanto_base_store/README.md](../../../../sources/moorcheh-ai__memanto/examples/langgraph-memanto/memanto_base_store/README.md)<br>[examples/crewai-memory/README.md](../../../../sources/moorcheh-ai__memanto/examples/crewai-memory/README.md) |
| config | 10 | [pyproject.toml](../../../../sources/moorcheh-ai__memanto/pyproject.toml)<br>[tests/requirements.txt](../../../../sources/moorcheh-ai__memanto/tests/requirements.txt)<br>[integrations/mcp/pyproject.toml](../../../../sources/moorcheh-ai__memanto/integrations/mcp/pyproject.toml)<br>[integrations/langgraph/pyproject.toml](../../../../sources/moorcheh-ai__memanto/integrations/langgraph/pyproject.toml)<br>[integrations/hermes-agents/pyproject.toml](../../../../sources/moorcheh-ai__memanto/integrations/hermes-agents/pyproject.toml)<br>[integrations/crewai/pyproject.toml](../../../../sources/moorcheh-ai__memanto/integrations/crewai/pyproject.toml)<br>[examples/langgraph-memanto/requirements.txt](../../../../sources/moorcheh-ai__memanto/examples/langgraph-memanto/requirements.txt)<br>[examples/crewai-memory/requirements.txt](../../../../sources/moorcheh-ai__memanto/examples/crewai-memory/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 23 | [tests/__init__.py](../../../../sources/moorcheh-ai__memanto/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/moorcheh-ai__memanto/tests/conftest.py)<br>[tests/requirements.txt](../../../../sources/moorcheh-ai__memanto/tests/requirements.txt)<br>[tests/test_analyze.py](../../../../sources/moorcheh-ai__memanto/tests/test_analyze.py)<br>[tests/test_api.py](../../../../sources/moorcheh-ai__memanto/tests/test_api.py)<br>[tests/test_backend.py](../../../../sources/moorcheh-ai__memanto/tests/test_backend.py) |
| CI workflows | 3 | [.github/workflows/ci.yml](../../../../sources/moorcheh-ai__memanto/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/moorcheh-ai__memanto/.github/workflows/publish.yml)<br>[.github/workflows/release-integration.yml](../../../../sources/moorcheh-ai__memanto/.github/workflows/release-integration.yml) |
| Containers / deploy | 2 | [docker-compose.yml](../../../../sources/moorcheh-ai__memanto/docker-compose.yml)<br>[Dockerfile](../../../../sources/moorcheh-ai__memanto/Dockerfile) |
| Security / policy | 3 | [SECURITY.md](../../../../sources/moorcheh-ai__memanto/SECURITY.md)<br>[memanto/app/utils/auth.py](../../../../sources/moorcheh-ai__memanto/memanto/app/utils/auth.py)<br>[memanto/app/routes/auth_deps.py](../../../../sources/moorcheh-ai__memanto/memanto/app/routes/auth_deps.py) |
| Agent instructions | 1 | [examples/claudecode-skills-memanto/CLAUDE.md](../../../../sources/moorcheh-ai__memanto/examples/claudecode-skills-memanto/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/test_memory_parsing.py`, `memanto/cli/commands/memory_mgmt.py`, `memanto/cli/commands/memory.py`.
2. Trace execution through entrypoints: `memanto/__main__.py`, `memanto/cli/main.py`, `memanto/app/main.py`.
3. Map agent/tool runtime through: `memanto/cli/migrate/runner.py`, `memanto/cli/connect/agent_registry.py`, `memanto/cli/commands/agent.py`.
4. Inspect retrieval/memory/indexing through: `tests/test_memory_parsing.py`, `memanto/cli/commands/memory_mgmt.py`, `memanto/cli/commands/memory.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/conftest.py`, `tests/requirements.txt`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Memory that AI Agents Love!. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, README.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
