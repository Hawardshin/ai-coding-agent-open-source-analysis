# tobocop2/lilbee Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Run and manage local AI models, search your files and code, and crawl the web, all in one program. Cited answers, local-first, with an MCP server for your coding agent. TUI, CLI, REST API, and Python library. Works with Ollama and LM Studio.

## 요약

- 조사 단위: `sources/tobocop2__lilbee` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 667 files, 87 directories, depth score 127, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=tools/qa/test_mcp_tools.py, tools/qa/drivers/mcp.py, tests/test_mcp_compat.py이고, 의존성 단서는 mcp, pydantic, typer, ollama, llama, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | tobocop2/lilbee |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 25 |
| Forks | 3 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/tobocop2__lilbee](../../../../sources/tobocop2__lilbee) |
| Existing report | [reports/global-trending/repositories/tobocop2__lilbee.md](../../../global-trending/repositories/tobocop2__lilbee.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 667 / 87 |
| Max observed depth | 6 |
| Top directories | .github, bucket, docs, examples, packaging, scripts, site, src, tests, tools |
| Top extensions | .py: 506, .yml: 36, .tcss: 33, .md: 31, .sh: 16, (none): 9, .json: 5, .toml: 4, .html: 3, .txt: 3, .css: 2, .lock: 2 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 64 |
| src | source boundary | 16 |
| docs | documentation surface | 14 |
| .github | ci surface | 1 |
| bucket | top-level component | 1 |
| examples | top-level component | 1 |
| examples/agent-integration | examples workspace | 1 |
| packaging | top-level component | 1 |
| scripts | top-level component | 1 |
| site | documentation surface | 1 |
| tools | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | lint | make lint |
| quality | Makefile | format | make format |
| quality | Makefile | format-check | make format-check |
| quality | Makefile | typecheck | make typecheck |
| test | Makefile | test | make test |
| test | Makefile | test-ci | make test-ci |
| test | Makefile | test-ci-serial | make test-ci-serial |
| test | Makefile | test-ci-forked | make test-ci-forked |
| quality | Makefile | imports-check | make imports-check |
| test | Makefile | test-integration | make test-integration |
| quality | Makefile | check | make check |
| utility | Makefile | install | make install |
| utility | Makefile | crawl-setup | make crawl-setup |
| utility | Makefile | dns-setup | make dns-setup |
| utility | Makefile | demo-prep | make demo-prep |
| utility | Makefile | demo | make demo |
| utility | Makefile | demo-publish | make demo-publish |
| build | Makefile | build | make build |
| utility | Makefile | publish | make publish |
| utility | pyproject.toml | lilbee | lilbee |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | ollama, llama |
| webRuntime | none |
| developerSurface | typer |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [tools/qa/test_mcp_tools.py](../../../../sources/tobocop2__lilbee/tools/qa/test_mcp_tools.py) | mcp signal |
| mcp | [tools/qa/drivers/mcp.py](../../../../sources/tobocop2__lilbee/tools/qa/drivers/mcp.py) | mcp signal |
| mcp | [tests/test_mcp_compat.py](../../../../sources/tobocop2__lilbee/tests/test_mcp_compat.py) | mcp signal |
| mcp | [tests/test_mcp_memory.py](../../../../sources/tobocop2__lilbee/tests/test_mcp_memory.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/tobocop2__lilbee/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tools/__init__.py](../../../../sources/tobocop2__lilbee/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [tools/build_pep503_indexes.py](../../../../sources/tobocop2__lilbee/tools/build_pep503_indexes.py) | agentRuntime signal |
| agentRuntime | [tools/stage_release_assets.py](../../../../sources/tobocop2__lilbee/tools/stage_release_assets.py) | agentRuntime signal |
| entrypoints | [src/lilbee/__main__.py](../../../../sources/tobocop2__lilbee/src/lilbee/__main__.py) | entrypoints signal |
| entrypoints | [site/main.js](../../../../sources/tobocop2__lilbee/site/main.js) | entrypoints signal |
| instruction | [examples/agent-integration/AGENTS.md](../../../../sources/tobocop2__lilbee/examples/agent-integration/AGENTS.md) | instruction signal |
| config | [Makefile](../../../../sources/tobocop2__lilbee/Makefile) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [src/lilbee/__main__.py](../../../../sources/tobocop2__lilbee/src/lilbee/__main__.py)<br>[site/main.js](../../../../sources/tobocop2__lilbee/site/main.js) |
| agentRuntime | 66 | [AGENTS.md](../../../../sources/tobocop2__lilbee/AGENTS.md)<br>[tools/__init__.py](../../../../sources/tobocop2__lilbee/tools/__init__.py)<br>[tools/build_pep503_indexes.py](../../../../sources/tobocop2__lilbee/tools/build_pep503_indexes.py)<br>[tools/stage_release_assets.py](../../../../sources/tobocop2__lilbee/tools/stage_release_assets.py)<br>[tools/wheel-build/build_lilbee_binary.sh](../../../../sources/tobocop2__lilbee/tools/wheel-build/build_lilbee_binary.sh)<br>[tools/wheel-build/build_llama_cpp.sh](../../../../sources/tobocop2__lilbee/tools/wheel-build/build_llama_cpp.sh)<br>[tools/wheel-build/cmake_args.sh](../../../../sources/tobocop2__lilbee/tools/wheel-build/cmake_args.sh)<br>[tools/wheel-build/fetch_llama_cpp.sh](../../../../sources/tobocop2__lilbee/tools/wheel-build/fetch_llama_cpp.sh) |
| mcp | 9 | [tools/qa/test_mcp_tools.py](../../../../sources/tobocop2__lilbee/tools/qa/test_mcp_tools.py)<br>[tools/qa/drivers/mcp.py](../../../../sources/tobocop2__lilbee/tools/qa/drivers/mcp.py)<br>[tests/test_mcp_compat.py](../../../../sources/tobocop2__lilbee/tests/test_mcp_compat.py)<br>[tests/test_mcp_memory.py](../../../../sources/tobocop2__lilbee/tests/test_mcp_memory.py)<br>[tests/test_mcp_model_tools.py](../../../../sources/tobocop2__lilbee/tests/test_mcp_model_tools.py)<br>[tests/test_mcp.py](../../../../sources/tobocop2__lilbee/tests/test_mcp.py)<br>[src/lilbee/mcp_server.py](../../../../sources/tobocop2__lilbee/src/lilbee/mcp_server.py)<br>[docs/agent-skills/lilbee-mcp-wiki/SKILL.md](../../../../sources/tobocop2__lilbee/docs/agent-skills/lilbee-mcp-wiki/SKILL.md) |
| retrieval | 106 | [tools/qa/test_e2e_index.py](../../../../sources/tobocop2__lilbee/tools/qa/test_e2e_index.py)<br>[tools/qa/test_e2e_wiki_synth.py](../../../../sources/tobocop2__lilbee/tools/qa/test_e2e_wiki_synth.py)<br>[tools/qa/test_http_wiki.py](../../../../sources/tobocop2__lilbee/tools/qa/test_http_wiki.py)<br>[tests/test_app_memory.py](../../../../sources/tobocop2__lilbee/tests/test_app_memory.py)<br>[tests/test_chat_memory_commands.py](../../../../sources/tobocop2__lilbee/tests/test_chat_memory_commands.py)<br>[tests/test_chat_wiki_controller_integration.py](../../../../sources/tobocop2__lilbee/tests/test_chat_wiki_controller_integration.py)<br>[tests/test_cli_memory.py](../../../../sources/tobocop2__lilbee/tests/test_cli_memory.py)<br>[tests/test_embed_truncation_surfacing.py](../../../../sources/tobocop2__lilbee/tests/test_embed_truncation_surfacing.py) |
| spec | 3 | [tools/qa/requirements.txt](../../../../sources/tobocop2__lilbee/tools/qa/requirements.txt)<br>[src/lilbee/providers/local_servers/spec.py](../../../../sources/tobocop2__lilbee/src/lilbee/providers/local_servers/spec.py)<br>[docs/architecture.md](../../../../sources/tobocop2__lilbee/docs/architecture.md) |
| eval | 231 | [tools/qa/test_cli_help.py](../../../../sources/tobocop2__lilbee/tools/qa/test_cli_help.py)<br>[tools/qa/test_cli_model.py](../../../../sources/tobocop2__lilbee/tools/qa/test_cli_model.py)<br>[tools/qa/test_cli_negative.py](../../../../sources/tobocop2__lilbee/tools/qa/test_cli_negative.py)<br>[tools/qa/test_cli_self_check_extras.py](../../../../sources/tobocop2__lilbee/tools/qa/test_cli_self_check_extras.py)<br>[tools/qa/test_cli_status.py](../../../../sources/tobocop2__lilbee/tools/qa/test_cli_status.py)<br>[tools/qa/test_e2e_chat.py](../../../../sources/tobocop2__lilbee/tools/qa/test_e2e_chat.py)<br>[tools/qa/test_e2e_crawl.py](../../../../sources/tobocop2__lilbee/tools/qa/test_e2e_crawl.py)<br>[tools/qa/test_e2e_index.py](../../../../sources/tobocop2__lilbee/tools/qa/test_e2e_index.py) |
| security | 7 | [SECURITY.md](../../../../sources/tobocop2__lilbee/SECURITY.md)<br>[tests/integration/fixtures/docs/auth-part1.md](../../../../sources/tobocop2__lilbee/tests/integration/fixtures/docs/auth-part1.md)<br>[tests/integration/fixtures/docs/auth-part2.md](../../../../sources/tobocop2__lilbee/tests/integration/fixtures/docs/auth-part2.md)<br>[tests/integration/fixtures/docs/auth-part3.md](../../../../sources/tobocop2__lilbee/tests/integration/fixtures/docs/auth-part3.md)<br>[src/lilbee/server/auth.py](../../../../sources/tobocop2__lilbee/src/lilbee/server/auth.py)<br>[src/lilbee/core/security.py](../../../../sources/tobocop2__lilbee/src/lilbee/core/security.py)<br>[.github/workflows/security-scan.yml](../../../../sources/tobocop2__lilbee/.github/workflows/security-scan.yml) |
| ci | 20 | [.github/workflows/attach-release-artifacts.yml](../../../../sources/tobocop2__lilbee/.github/workflows/attach-release-artifacts.yml)<br>[.github/workflows/aur-check.yml](../../../../sources/tobocop2__lilbee/.github/workflows/aur-check.yml)<br>[.github/workflows/build-cuda-executables.yml](../../../../sources/tobocop2__lilbee/.github/workflows/build-cuda-executables.yml)<br>[.github/workflows/build-default-wheels.yml](../../../../sources/tobocop2__lilbee/.github/workflows/build-default-wheels.yml)<br>[.github/workflows/build-extra-wheels.yml](../../../../sources/tobocop2__lilbee/.github/workflows/build-extra-wheels.yml)<br>[.github/workflows/ci.yml](../../../../sources/tobocop2__lilbee/.github/workflows/ci.yml)<br>[.github/workflows/emergency-publish.yml](../../../../sources/tobocop2__lilbee/.github/workflows/emergency-publish.yml)<br>[.github/workflows/flake-check.yml](../../../../sources/tobocop2__lilbee/.github/workflows/flake-check.yml) |
| container | 1 | [packaging/docker/Dockerfile](../../../../sources/tobocop2__lilbee/packaging/docker/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/tobocop2__lilbee/AGENTS.md)<br>[examples/agent-integration/AGENTS.md](../../../../sources/tobocop2__lilbee/examples/agent-integration/AGENTS.md) |
| docs | 35 | [README.md](../../../../sources/tobocop2__lilbee/README.md)<br>[tools/wheel-build/README.md](../../../../sources/tobocop2__lilbee/tools/wheel-build/README.md)<br>[tools/qa/README.md](../../../../sources/tobocop2__lilbee/tools/qa/README.md)<br>[tests/integration/fixtures/docs/api-perf.md](../../../../sources/tobocop2__lilbee/tests/integration/fixtures/docs/api-perf.md)<br>[tests/integration/fixtures/docs/auth-part1.md](../../../../sources/tobocop2__lilbee/tests/integration/fixtures/docs/auth-part1.md)<br>[tests/integration/fixtures/docs/auth-part2.md](../../../../sources/tobocop2__lilbee/tests/integration/fixtures/docs/auth-part2.md)<br>[tests/integration/fixtures/docs/auth-part3.md](../../../../sources/tobocop2__lilbee/tests/integration/fixtures/docs/auth-part3.md)<br>[tests/integration/fixtures/docs/db-perf.md](../../../../sources/tobocop2__lilbee/tests/integration/fixtures/docs/db-perf.md) |
| config | 4 | [Makefile](../../../../sources/tobocop2__lilbee/Makefile)<br>[pyproject.toml](../../../../sources/tobocop2__lilbee/pyproject.toml)<br>[uv.lock](../../../../sources/tobocop2__lilbee/uv.lock)<br>[tools/qa/requirements.txt](../../../../sources/tobocop2__lilbee/tools/qa/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 231 | [tools/qa/test_cli_help.py](../../../../sources/tobocop2__lilbee/tools/qa/test_cli_help.py)<br>[tools/qa/test_cli_model.py](../../../../sources/tobocop2__lilbee/tools/qa/test_cli_model.py)<br>[tools/qa/test_cli_negative.py](../../../../sources/tobocop2__lilbee/tools/qa/test_cli_negative.py)<br>[tools/qa/test_cli_self_check_extras.py](../../../../sources/tobocop2__lilbee/tools/qa/test_cli_self_check_extras.py)<br>[tools/qa/test_cli_status.py](../../../../sources/tobocop2__lilbee/tools/qa/test_cli_status.py)<br>[tools/qa/test_e2e_chat.py](../../../../sources/tobocop2__lilbee/tools/qa/test_e2e_chat.py) |
| CI workflows | 20 | [.github/workflows/attach-release-artifacts.yml](../../../../sources/tobocop2__lilbee/.github/workflows/attach-release-artifacts.yml)<br>[.github/workflows/aur-check.yml](../../../../sources/tobocop2__lilbee/.github/workflows/aur-check.yml)<br>[.github/workflows/build-cuda-executables.yml](../../../../sources/tobocop2__lilbee/.github/workflows/build-cuda-executables.yml)<br>[.github/workflows/build-default-wheels.yml](../../../../sources/tobocop2__lilbee/.github/workflows/build-default-wheels.yml)<br>[.github/workflows/build-extra-wheels.yml](../../../../sources/tobocop2__lilbee/.github/workflows/build-extra-wheels.yml)<br>[.github/workflows/ci.yml](../../../../sources/tobocop2__lilbee/.github/workflows/ci.yml) |
| Containers / deploy | 1 | [packaging/docker/Dockerfile](../../../../sources/tobocop2__lilbee/packaging/docker/Dockerfile) |
| Security / policy | 7 | [SECURITY.md](../../../../sources/tobocop2__lilbee/SECURITY.md)<br>[tests/integration/fixtures/docs/auth-part1.md](../../../../sources/tobocop2__lilbee/tests/integration/fixtures/docs/auth-part1.md)<br>[tests/integration/fixtures/docs/auth-part2.md](../../../../sources/tobocop2__lilbee/tests/integration/fixtures/docs/auth-part2.md)<br>[tests/integration/fixtures/docs/auth-part3.md](../../../../sources/tobocop2__lilbee/tests/integration/fixtures/docs/auth-part3.md)<br>[src/lilbee/server/auth.py](../../../../sources/tobocop2__lilbee/src/lilbee/server/auth.py)<br>[src/lilbee/core/security.py](../../../../sources/tobocop2__lilbee/src/lilbee/core/security.py) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/tobocop2__lilbee/AGENTS.md)<br>[examples/agent-integration/AGENTS.md](../../../../sources/tobocop2__lilbee/examples/agent-integration/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tools/qa/test_mcp_tools.py`, `tools/qa/drivers/mcp.py`, `tests/test_mcp_compat.py`.
2. Trace execution through entrypoints: `src/lilbee/__main__.py`, `site/main.js`.
3. Map agent/tool runtime through: `AGENTS.md`, `tools/__init__.py`, `tools/build_pep503_indexes.py`.
4. Inspect retrieval/memory/indexing through: `tools/qa/test_e2e_index.py`, `tools/qa/test_e2e_wiki_synth.py`, `tools/qa/test_http_wiki.py`.
5. Verify behavior through test/eval files: `tools/qa/test_cli_help.py`, `tools/qa/test_cli_model.py`, `tools/qa/test_cli_negative.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Run and manage local AI models, search your files and code, and crawl the web, all in one program. Cited answers, local . 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, AGENTS.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
