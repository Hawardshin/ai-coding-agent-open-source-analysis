# cocoindex-io/cocoindex-code Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

A super light-weight embedded code search engine CLI (AST based) that just works - saves 70% token and improves speed for coding agent 🌟 Star if you like it!

## 요약

- 조사 단위: `sources/cocoindex-io__cocoindex-code` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 65 files, 16 directories, depth score 109, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=skills/ccc/SKILL.md, skills/ccc/references/management.md, skills/ccc/references/settings.md이고, 의존성 단서는 mcp, pydantic, typer, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | cocoindex-io/cocoindex-code |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 2100 |
| Forks | 166 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/cocoindex-io__cocoindex-code](../../../../sources/cocoindex-io__cocoindex-code) |
| Existing report | [reports/global-trending/repositories/cocoindex-io__cocoindex-code.md](../../../global-trending/repositories/cocoindex-io__cocoindex-code.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 65 / 16 |
| Max observed depth | 5 |
| Top directories | .claude-plugin, .github, docker, scripts, skills, src, tests |
| Top extensions | .py: 40, .md: 10, (none): 4, .yml: 3, .json: 2, .lock: 1, .sh: 1, .toml: 1, .ts: 1, .yaml: 1, .zip: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 27 |
| src | source boundary | 3 |
| .github | ci surface | 1 |
| docker | documentation surface | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | cocoindex-code | cocoindex-code |
| utility | pyproject.toml | ccc | ccc |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | transformers |
| webRuntime | none |
| developerSurface | typer |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [skills/ccc/SKILL.md](../../../../sources/cocoindex-io__cocoindex-code/skills/ccc/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/ccc/references/management.md](../../../../sources/cocoindex-io__cocoindex-code/skills/ccc/references/management.md) | agentRuntime signal |
| agentRuntime | [skills/ccc/references/settings.md](../../../../sources/cocoindex-io__cocoindex-code/skills/ccc/references/settings.md) | agentRuntime signal |
| entrypoints | [src/cocoindex_code/__main__.py](../../../../sources/cocoindex-io__cocoindex-code/src/cocoindex_code/__main__.py) | entrypoints signal |
| entrypoints | [src/cocoindex_code/server.py](../../../../sources/cocoindex-io__cocoindex-code/src/cocoindex_code/server.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/cocoindex-io__cocoindex-code/CLAUDE.md) | instruction signal |
| config | [pyproject.toml](../../../../sources/cocoindex-io__cocoindex-code/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/cocoindex-io__cocoindex-code/uv.lock) | config signal |
| ci | [.github/workflows/pre-commit.yml](../../../../sources/cocoindex-io__cocoindex-code/.github/workflows/pre-commit.yml) | ci support |
| ci | [.github/workflows/release.yml](../../../../sources/cocoindex-io__cocoindex-code/.github/workflows/release.yml) | ci support |
| container | [docker/docker-compose.yml](../../../../sources/cocoindex-io__cocoindex-code/docker/docker-compose.yml) | container support |
| container | [docker/Dockerfile](../../../../sources/cocoindex-io__cocoindex-code/docker/Dockerfile) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [src/cocoindex_code/__main__.py](../../../../sources/cocoindex-io__cocoindex-code/src/cocoindex_code/__main__.py)<br>[src/cocoindex_code/server.py](../../../../sources/cocoindex-io__cocoindex-code/src/cocoindex_code/server.py) |
| agentRuntime | 3 | [skills/ccc/SKILL.md](../../../../sources/cocoindex-io__cocoindex-code/skills/ccc/SKILL.md)<br>[skills/ccc/references/management.md](../../../../sources/cocoindex-io__cocoindex-code/skills/ccc/references/management.md)<br>[skills/ccc/references/settings.md](../../../../sources/cocoindex-io__cocoindex-code/skills/ccc/references/settings.md) |
| mcp | 0 | not obvious |
| retrieval | 1 | [tests/test_embed_params_forwarding.py](../../../../sources/cocoindex-io__cocoindex-code/tests/test_embed_params_forwarding.py) |
| spec | 0 | not obvious |
| eval | 23 | [tests/conftest.py](../../../../sources/cocoindex-io__cocoindex-code/tests/conftest.py)<br>[tests/example_toml_chunker.py](../../../../sources/cocoindex-io__cocoindex-code/tests/example_toml_chunker.py)<br>[tests/test_backward_compat.py](../../../../sources/cocoindex-io__cocoindex-code/tests/test_backward_compat.py)<br>[tests/test_chunker_registry.py](../../../../sources/cocoindex-io__cocoindex-code/tests/test_chunker_registry.py)<br>[tests/test_cli_helpers.py](../../../../sources/cocoindex-io__cocoindex-code/tests/test_cli_helpers.py)<br>[tests/test_client.py](../../../../sources/cocoindex-io__cocoindex-code/tests/test_client.py)<br>[tests/test_daemon.py](../../../../sources/cocoindex-io__cocoindex-code/tests/test_daemon.py)<br>[tests/test_e2e_daemon.py](../../../../sources/cocoindex-io__cocoindex-code/tests/test_e2e_daemon.py) |
| security | 2 | [SECURITY.md](../../../../sources/cocoindex-io__cocoindex-code/SECURITY.md)<br>[tests/e2e_docker_fixtures/sample_project/src/auth.py](../../../../sources/cocoindex-io__cocoindex-code/tests/e2e_docker_fixtures/sample_project/src/auth.py) |
| ci | 2 | [.github/workflows/pre-commit.yml](../../../../sources/cocoindex-io__cocoindex-code/.github/workflows/pre-commit.yml)<br>[.github/workflows/release.yml](../../../../sources/cocoindex-io__cocoindex-code/.github/workflows/release.yml) |
| container | 2 | [docker/docker-compose.yml](../../../../sources/cocoindex-io__cocoindex-code/docker/docker-compose.yml)<br>[docker/Dockerfile](../../../../sources/cocoindex-io__cocoindex-code/docker/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/cocoindex-io__cocoindex-code/CLAUDE.md) |
| docs | 2 | [README.md](../../../../sources/cocoindex-io__cocoindex-code/README.md)<br>[tests/e2e_docker_fixtures/sample_project/README.md](../../../../sources/cocoindex-io__cocoindex-code/tests/e2e_docker_fixtures/sample_project/README.md) |
| config | 2 | [pyproject.toml](../../../../sources/cocoindex-io__cocoindex-code/pyproject.toml)<br>[uv.lock](../../../../sources/cocoindex-io__cocoindex-code/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 23 | [tests/conftest.py](../../../../sources/cocoindex-io__cocoindex-code/tests/conftest.py)<br>[tests/example_toml_chunker.py](../../../../sources/cocoindex-io__cocoindex-code/tests/example_toml_chunker.py)<br>[tests/test_backward_compat.py](../../../../sources/cocoindex-io__cocoindex-code/tests/test_backward_compat.py)<br>[tests/test_chunker_registry.py](../../../../sources/cocoindex-io__cocoindex-code/tests/test_chunker_registry.py)<br>[tests/test_cli_helpers.py](../../../../sources/cocoindex-io__cocoindex-code/tests/test_cli_helpers.py)<br>[tests/test_client.py](../../../../sources/cocoindex-io__cocoindex-code/tests/test_client.py) |
| CI workflows | 2 | [.github/workflows/pre-commit.yml](../../../../sources/cocoindex-io__cocoindex-code/.github/workflows/pre-commit.yml)<br>[.github/workflows/release.yml](../../../../sources/cocoindex-io__cocoindex-code/.github/workflows/release.yml) |
| Containers / deploy | 2 | [docker/docker-compose.yml](../../../../sources/cocoindex-io__cocoindex-code/docker/docker-compose.yml)<br>[docker/Dockerfile](../../../../sources/cocoindex-io__cocoindex-code/docker/Dockerfile) |
| Security / policy | 2 | [SECURITY.md](../../../../sources/cocoindex-io__cocoindex-code/SECURITY.md)<br>[tests/e2e_docker_fixtures/sample_project/src/auth.py](../../../../sources/cocoindex-io__cocoindex-code/tests/e2e_docker_fixtures/sample_project/src/auth.py) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/cocoindex-io__cocoindex-code/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `skills/ccc/SKILL.md`, `skills/ccc/references/management.md`, `skills/ccc/references/settings.md`.
2. Trace execution through entrypoints: `src/cocoindex_code/__main__.py`, `src/cocoindex_code/server.py`.
3. Map agent/tool runtime through: `skills/ccc/SKILL.md`, `skills/ccc/references/management.md`, `skills/ccc/references/settings.md`.
4. Inspect retrieval/memory/indexing through: `tests/test_embed_params_forwarding.py`.
5. Verify behavior through test/eval files: `tests/conftest.py`, `tests/example_toml_chunker.py`, `tests/test_backward_compat.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 A super light weight embedded code search engine CLI AST based that just works saves 70% token and improves speed for co. 핵심 구조 신호는 Python, pyproject.toml, README.md, CLAUDE.md, LICENSE, mcp이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
