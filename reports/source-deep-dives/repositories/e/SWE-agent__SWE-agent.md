# SWE-agent/SWE-agent Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 407 files, 113 directories.

## 요약

- 조사 단위: `sources/SWE-agent__SWE-agent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 407 files, 113 directories, depth score 130, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=tools/windowed_edit_rewrite/config.yaml, tools/windowed_edit_rewrite/install.sh, tools/windowed_edit_rewrite/bin/edit이고, 의존성 단서는 vscode, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | SWE-agent/SWE-agent |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/SWE-agent__SWE-agent](../../../../sources/SWE-agent__SWE-agent) |
| Existing report | [reports/clone-structures/SWE-agent__SWE-agent.md](../../../clone-structures/SWE-agent__SWE-agent.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 407 / 113 |
| Max observed depth | 8 |
| Top directories | .cursor, .devcontainer, .github, assets, config, docs, sweagent, tests, tools, trajectories |
| Top extensions | .py: 100, .md: 68, (none): 54, .yaml: 51, .traj: 22, .png: 17, .sh: 17, .json: 15, .svg: 15, .yml: 10, .css: 6, .html: 4 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 51 |
| docs | documentation surface | 39 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| config | top-level component | 1 |
| sweagent | top-level component | 1 |
| tools | top-level component | 1 |
| trajectories | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | sweagent | sweagent |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | vscode |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [tools/windowed_edit_rewrite/config.yaml](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_rewrite/config.yaml) | agentRuntime signal |
| agentRuntime | [tools/windowed_edit_rewrite/install.sh](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_rewrite/install.sh) | agentRuntime signal |
| agentRuntime | [tools/windowed_edit_rewrite/bin/edit](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_rewrite/bin/edit) | agentRuntime signal |
| agentRuntime | [tools/windowed_edit_replace/config.yaml](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_replace/config.yaml) | agentRuntime signal |
| entrypoints | [tools/windowed_edit_replace/bin/edit](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_replace/bin/edit) | entrypoints signal |
| entrypoints | [tools/windowed_edit_replace/bin/insert](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_replace/bin/insert) | entrypoints signal |
| entrypoints | [tools/windowed_edit_linting/bin/edit](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_linting/bin/edit) | entrypoints signal |
| instruction | [.cursor/rules/general.mdc](../../../../sources/SWE-agent__SWE-agent/.cursor/rules/general.mdc) | instruction signal |
| instruction | [.cursor/rules/project-overview.mdc](../../../../sources/SWE-agent__SWE-agent/.cursor/rules/project-overview.mdc) | instruction signal |
| config | [pyproject.toml](../../../../sources/SWE-agent__SWE-agent/pyproject.toml) | config signal |
| ci | [.github/workflows/build-docs.yaml](../../../../sources/SWE-agent__SWE-agent/.github/workflows/build-docs.yaml) | ci support |
| ci | [.github/workflows/check-links-periodic.yaml](../../../../sources/SWE-agent__SWE-agent/.github/workflows/check-links-periodic.yaml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 44 | [tools/windowed_edit_rewrite/bin/edit](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_rewrite/bin/edit)<br>[tools/windowed_edit_replace/bin/edit](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_replace/bin/edit)<br>[tools/windowed_edit_replace/bin/insert](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_replace/bin/insert)<br>[tools/windowed_edit_linting/bin/edit](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_linting/bin/edit)<br>[tools/windowed/bin/_state](../../../../sources/SWE-agent__SWE-agent/tools/windowed/bin/_state)<br>[tools/windowed/bin/create](../../../../sources/SWE-agent__SWE-agent/tools/windowed/bin/create)<br>[tools/windowed/bin/goto](../../../../sources/SWE-agent__SWE-agent/tools/windowed/bin/goto)<br>[tools/windowed/bin/open](../../../../sources/SWE-agent__SWE-agent/tools/windowed/bin/open) |
| agentRuntime | 113 | [tools/windowed_edit_rewrite/config.yaml](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_rewrite/config.yaml)<br>[tools/windowed_edit_rewrite/install.sh](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_rewrite/install.sh)<br>[tools/windowed_edit_rewrite/bin/edit](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_rewrite/bin/edit)<br>[tools/windowed_edit_replace/config.yaml](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_replace/config.yaml)<br>[tools/windowed_edit_replace/install.sh](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_replace/install.sh)<br>[tools/windowed_edit_replace/bin/edit](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_replace/bin/edit)<br>[tools/windowed_edit_replace/bin/insert](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_replace/bin/insert)<br>[tools/windowed_edit_linting/config.yaml](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_linting/config.yaml) |
| mcp | 0 | not obvious |
| retrieval | 8 | [tests/test_data/data_sources/ctf/web/i_got_id_demo/index.html](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/web/i_got_id_demo/index.html)<br>[sweagent/inspector/index.html](../../../../sources/SWE-agent__SWE-agent/sweagent/inspector/index.html)<br>[docs/index.md](../../../../sources/SWE-agent__SWE-agent/docs/index.md)<br>[docs/usage/index.md](../../../../sources/SWE-agent__SWE-agent/docs/usage/index.md)<br>[docs/usage/memory_sentinel.py](../../../../sources/SWE-agent__SWE-agent/docs/usage/memory_sentinel.py)<br>[docs/reference/index.md](../../../../sources/SWE-agent__SWE-agent/docs/reference/index.md)<br>[docs/installation/index.md](../../../../sources/SWE-agent__SWE-agent/docs/installation/index.md)<br>[docs/background/index.md](../../../../sources/SWE-agent__SWE-agent/docs/background/index.md) |
| spec | 2 | [docs/background/architecture.md](../../../../sources/SWE-agent__SWE-agent/docs/background/architecture.md)<br>[docs/assets/architecture.png](../../../../sources/SWE-agent__SWE-agent/docs/assets/architecture.png) |
| eval | 88 | [trajectories/demonstrations/human_thought__swe-bench-HumanEvalFix-python__lcb__t-0.00__p-0.95__c-4.00__install-0/humanevalfix-python-0.traj](../../../../sources/SWE-agent__SWE-agent/trajectories/demonstrations/human_thought__swe-bench-HumanEvalFix-python__lcb__t-0.00__p-0.95__c-4.00__install-0/humanevalfix-python-0.traj)<br>[tools/web_browser/test_console.html](../../../../sources/SWE-agent__SWE-agent/tools/web_browser/test_console.html)<br>[tests/__init__.py](../../../../sources/SWE-agent__SWE-agent/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/SWE-agent__SWE-agent/tests/conftest.py)<br>[tests/test_agent.py](../../../../sources/SWE-agent__SWE-agent/tests/test_agent.py)<br>[tests/test_batch_instance.py](../../../../sources/SWE-agent__SWE-agent/tests/test_batch_instance.py)<br>[tests/test_env_utils.py](../../../../sources/SWE-agent__SWE-agent/tests/test_env_utils.py)<br>[tests/test_env.py](../../../../sources/SWE-agent__SWE-agent/tests/test_env.py) |
| security | 1 | [SECURITY.md](../../../../sources/SWE-agent__SWE-agent/SECURITY.md) |
| ci | 4 | [.github/workflows/build-docs.yaml](../../../../sources/SWE-agent__SWE-agent/.github/workflows/build-docs.yaml)<br>[.github/workflows/check-links-periodic.yaml](../../../../sources/SWE-agent__SWE-agent/.github/workflows/check-links-periodic.yaml)<br>[.github/workflows/check-links-pr.yaml](../../../../sources/SWE-agent__SWE-agent/.github/workflows/check-links-pr.yaml)<br>[.github/workflows/pytest.yaml](../../../../sources/SWE-agent__SWE-agent/.github/workflows/pytest.yaml) |
| container | 6 | [tests/test_data/data_sources/ctf/web/i_got_id_demo/docker-compose.yml](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/web/i_got_id_demo/docker-compose.yml)<br>[tests/test_data/data_sources/ctf/web/i_got_id_demo/Dockerfile](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/web/i_got_id_demo/Dockerfile)<br>[tests/test_data/data_sources/ctf/pwn/warmup/docker-compose.yml](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/pwn/warmup/docker-compose.yml)<br>[tests/test_data/data_sources/ctf/pwn/warmup/Dockerfile](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/pwn/warmup/Dockerfile)<br>[tests/test_data/data_sources/ctf/crypto/Katy/docker-compose.yml](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/crypto/Katy/docker-compose.yml)<br>[tests/test_data/data_sources/ctf/crypto/Katy/Dockerfile](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/crypto/Katy/Dockerfile) |
| instruction | 2 | [.cursor/rules/general.mdc](../../../../sources/SWE-agent__SWE-agent/.cursor/rules/general.mdc)<br>[.cursor/rules/project-overview.mdc](../../../../sources/SWE-agent__SWE-agent/.cursor/rules/project-overview.mdc) |
| docs | 100 | [mkdocs.yml](../../../../sources/SWE-agent__SWE-agent/mkdocs.yml)<br>[README.md](../../../../sources/SWE-agent__SWE-agent/README.md)<br>[trajectories/README.md](../../../../sources/SWE-agent__SWE-agent/trajectories/README.md)<br>[tools/review_on_submit_m/README.md](../../../../sources/SWE-agent__SWE-agent/tools/review_on_submit_m/README.md)<br>[tests/test_data/data_sources/ctf/rev/rock/README.md](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/rev/rock/README.md)<br>[tests/test_data/data_sources/ctf/pwn/warmup/README.md](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/pwn/warmup/README.md)<br>[tests/test_data/data_sources/ctf/misc/networking_1/README.md](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/misc/networking_1/README.md)<br>[tests/test_data/data_sources/ctf/forensics/flash/README.md](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/forensics/flash/README.md) |
| config | 1 | [pyproject.toml](../../../../sources/SWE-agent__SWE-agent/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 88 | [trajectories/demonstrations/human_thought__swe-bench-HumanEvalFix-python__lcb__t-0.00__p-0.95__c-4.00__install-0/humanevalfix-python-0.traj](../../../../sources/SWE-agent__SWE-agent/trajectories/demonstrations/human_thought__swe-bench-HumanEvalFix-python__lcb__t-0.00__p-0.95__c-4.00__install-0/humanevalfix-python-0.traj)<br>[tools/web_browser/test_console.html](../../../../sources/SWE-agent__SWE-agent/tools/web_browser/test_console.html)<br>[tests/__init__.py](../../../../sources/SWE-agent__SWE-agent/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/SWE-agent__SWE-agent/tests/conftest.py)<br>[tests/test_agent.py](../../../../sources/SWE-agent__SWE-agent/tests/test_agent.py)<br>[tests/test_batch_instance.py](../../../../sources/SWE-agent__SWE-agent/tests/test_batch_instance.py) |
| CI workflows | 4 | [.github/workflows/build-docs.yaml](../../../../sources/SWE-agent__SWE-agent/.github/workflows/build-docs.yaml)<br>[.github/workflows/check-links-periodic.yaml](../../../../sources/SWE-agent__SWE-agent/.github/workflows/check-links-periodic.yaml)<br>[.github/workflows/check-links-pr.yaml](../../../../sources/SWE-agent__SWE-agent/.github/workflows/check-links-pr.yaml)<br>[.github/workflows/pytest.yaml](../../../../sources/SWE-agent__SWE-agent/.github/workflows/pytest.yaml) |
| Containers / deploy | 6 | [tests/test_data/data_sources/ctf/web/i_got_id_demo/docker-compose.yml](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/web/i_got_id_demo/docker-compose.yml)<br>[tests/test_data/data_sources/ctf/web/i_got_id_demo/Dockerfile](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/web/i_got_id_demo/Dockerfile)<br>[tests/test_data/data_sources/ctf/pwn/warmup/docker-compose.yml](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/pwn/warmup/docker-compose.yml)<br>[tests/test_data/data_sources/ctf/pwn/warmup/Dockerfile](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/pwn/warmup/Dockerfile)<br>[tests/test_data/data_sources/ctf/crypto/Katy/docker-compose.yml](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/crypto/Katy/docker-compose.yml)<br>[tests/test_data/data_sources/ctf/crypto/Katy/Dockerfile](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/crypto/Katy/Dockerfile) |
| Security / policy | 1 | [SECURITY.md](../../../../sources/SWE-agent__SWE-agent/SECURITY.md) |
| Agent instructions | 2 | [.cursor/rules/general.mdc](../../../../sources/SWE-agent__SWE-agent/.cursor/rules/general.mdc)<br>[.cursor/rules/project-overview.mdc](../../../../sources/SWE-agent__SWE-agent/.cursor/rules/project-overview.mdc) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tools/windowed_edit_rewrite/config.yaml`, `tools/windowed_edit_rewrite/install.sh`, `tools/windowed_edit_rewrite/bin/edit`.
2. Trace execution through entrypoints: `tools/windowed_edit_rewrite/bin/edit`, `tools/windowed_edit_replace/bin/edit`, `tools/windowed_edit_replace/bin/insert`.
3. Map agent/tool runtime through: `tools/windowed_edit_rewrite/config.yaml`, `tools/windowed_edit_rewrite/install.sh`, `tools/windowed_edit_rewrite/bin/edit`.
4. Inspect retrieval/memory/indexing through: `tests/test_data/data_sources/ctf/web/i_got_id_demo/index.html`, `sweagent/inspector/index.html`, `docs/index.md`.
5. Verify behavior through test/eval files: `trajectories/demonstrations/human_thought__swe-bench-HumanEvalFix-python__lcb__t-0.00__p-0.95__c-4.00__install-0/humanevalfix-python-0.traj`, `tools/web_browser/test_console.html`, `tests/__init__.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 407 files, 113 directories.. 핵심 구조 신호는 pyproject.toml, README.md, LICENSE, vscode, pydantic, tests이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
