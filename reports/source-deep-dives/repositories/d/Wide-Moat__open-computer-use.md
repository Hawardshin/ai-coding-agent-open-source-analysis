# Wide-Moat/open-computer-use Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

MCP server that gives any LLM its own computer — managed Docker workspaces with live browser, terminal, code execution, document skills, and autonomous sub-agents. Self-hosted, open-source, pluggable into any model.

## 요약

- 조사 단위: `sources/Wide-Moat__open-computer-use` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 771 files, 148 directories, depth score 131, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test-mcp-endpoint-live.sh, tests/test-mcp-native-surface.sh, tests/orchestrator/test_mcp_resources.py이고, 의존성 단서는 openai, react, click, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Wide-Moat/open-computer-use |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 101 |
| Forks | 21 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Wide-Moat__open-computer-use](../../../../sources/Wide-Moat__open-computer-use) |
| Existing report | [reports/global-trending/repositories/Wide-Moat__open-computer-use.md](../../../global-trending/repositories/Wide-Moat__open-computer-use.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 771 / 148 |
| Max observed depth | 8 |
| Top directories | .githooks, .github, .vale, computer-use-server, contracts, cron, data, docs, examples, fonts, helm, openwebui, scripts, settings-wrapper, skills, tests |
| Top extensions | .md: 216, .py: 130, .xsd: 78, .ttf: 75, .txt: 44, .sh: 29, .yml: 24, .js: 23, (none): 23, .yaml: 22, .woff: 20, .woff2: 20 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 59 |
| docs | documentation surface | 44 |
| examples/helm | examples workspace | 7 |
| .github | ci surface | 1 |
| computer-use-server | source boundary | 1 |
| contracts | top-level component | 1 |
| cron | top-level component | 1 |
| data | top-level component | 1 |
| examples | top-level component | 1 |
| fonts | top-level component | 1 |
| helm | deployment surface | 1 |
| openwebui | source boundary | 1 |
| scripts | top-level component | 1 |
| settings-wrapper | top-level component | 1 |
| skills | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | react |
| developerSurface | click |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [tests/test-mcp-endpoint-live.sh](../../../../sources/Wide-Moat__open-computer-use/tests/test-mcp-endpoint-live.sh) | mcp signal |
| mcp | [tests/test-mcp-native-surface.sh](../../../../sources/Wide-Moat__open-computer-use/tests/test-mcp-native-surface.sh) | mcp signal |
| mcp | [tests/orchestrator/test_mcp_resources.py](../../../../sources/Wide-Moat__open-computer-use/tests/orchestrator/test_mcp_resources.py) | mcp signal |
| mcp | [tests/orchestrator/test_mcp_tools.py](../../../../sources/Wide-Moat__open-computer-use/tests/orchestrator/test_mcp_tools.py) | mcp signal |
| agentRuntime | [skills/README.md](../../../../sources/Wide-Moat__open-computer-use/skills/README.md) | agentRuntime signal |
| agentRuntime | [skills/public/xlsx/LICENSE.txt](../../../../sources/Wide-Moat__open-computer-use/skills/public/xlsx/LICENSE.txt) | agentRuntime signal |
| agentRuntime | [skills/public/xlsx/preview_data.py](../../../../sources/Wide-Moat__open-computer-use/skills/public/xlsx/preview_data.py) | agentRuntime signal |
| agentRuntime | [skills/public/xlsx/recalc.py](../../../../sources/Wide-Moat__open-computer-use/skills/public/xlsx/recalc.py) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/Wide-Moat__open-computer-use/server.json) | entrypoints signal |
| entrypoints | [computer-use-server/bin/list-subagent-models](../../../../sources/Wide-Moat__open-computer-use/computer-use-server/bin/list-subagent-models) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/Wide-Moat__open-computer-use/CLAUDE.md) | instruction signal |
| config | [package.json](../../../../sources/Wide-Moat__open-computer-use/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [server.json](../../../../sources/Wide-Moat__open-computer-use/server.json)<br>[computer-use-server/bin/list-subagent-models](../../../../sources/Wide-Moat__open-computer-use/computer-use-server/bin/list-subagent-models) |
| agentRuntime | 336 | [skills/README.md](../../../../sources/Wide-Moat__open-computer-use/skills/README.md)<br>[skills/public/xlsx/LICENSE.txt](../../../../sources/Wide-Moat__open-computer-use/skills/public/xlsx/LICENSE.txt)<br>[skills/public/xlsx/preview_data.py](../../../../sources/Wide-Moat__open-computer-use/skills/public/xlsx/preview_data.py)<br>[skills/public/xlsx/recalc.py](../../../../sources/Wide-Moat__open-computer-use/skills/public/xlsx/recalc.py)<br>[skills/public/xlsx/SKILL.md](../../../../sources/Wide-Moat__open-computer-use/skills/public/xlsx/SKILL.md)<br>[skills/public/webapp-testing/LICENSE.txt](../../../../sources/Wide-Moat__open-computer-use/skills/public/webapp-testing/LICENSE.txt)<br>[skills/public/webapp-testing/SKILL.md](../../../../sources/Wide-Moat__open-computer-use/skills/public/webapp-testing/SKILL.md)<br>[skills/public/webapp-testing/scripts/with_server.py](../../../../sources/Wide-Moat__open-computer-use/skills/public/webapp-testing/scripts/with_server.py) |
| mcp | 22 | [tests/test-mcp-endpoint-live.sh](../../../../sources/Wide-Moat__open-computer-use/tests/test-mcp-endpoint-live.sh)<br>[tests/test-mcp-native-surface.sh](../../../../sources/Wide-Moat__open-computer-use/tests/test-mcp-native-surface.sh)<br>[tests/orchestrator/test_mcp_resources.py](../../../../sources/Wide-Moat__open-computer-use/tests/orchestrator/test_mcp_resources.py)<br>[tests/orchestrator/test_mcp_tools.py](../../../../sources/Wide-Moat__open-computer-use/tests/orchestrator/test_mcp_tools.py)<br>[tests/integration/test_mcp_auth.py](../../../../sources/Wide-Moat__open-computer-use/tests/integration/test_mcp_auth.py)<br>[tests/integration/test_mcp_tools.py](../../../../sources/Wide-Moat__open-computer-use/tests/integration/test_mcp_tools.py)<br>[skills/examples/mcp-builder/SKILL.md](../../../../sources/Wide-Moat__open-computer-use/skills/examples/mcp-builder/SKILL.md)<br>[skills/examples/mcp-builder/scripts/connections.py](../../../../sources/Wide-Moat__open-computer-use/skills/examples/mcp-builder/scripts/connections.py) |
| retrieval | 6 | [tests/patches/test_fix_skip_embedding_chat_files.py](../../../../sources/Wide-Moat__open-computer-use/tests/patches/test_fix_skip_embedding_chat_files.py)<br>[tests/patches/test_fix_skip_rag_files_native_fc.py](../../../../sources/Wide-Moat__open-computer-use/tests/patches/test_fix_skip_rag_files_native_fc.py)<br>[tests/patches/fixtures/retrieval_v0.9.1.py](../../../../sources/Wide-Moat__open-computer-use/tests/patches/fixtures/retrieval_v0.9.1.py)<br>[tests/patches/fixtures/retrieval_v0.9.2.py](../../../../sources/Wide-Moat__open-computer-use/tests/patches/fixtures/retrieval_v0.9.2.py)<br>[openwebui/patches/fix_skip_embedding_chat_files.py](../../../../sources/Wide-Moat__open-computer-use/openwebui/patches/fix_skip_embedding_chat_files.py)<br>[openwebui/patches/fix_skip_rag_files_native_fc.py](../../../../sources/Wide-Moat__open-computer-use/openwebui/patches/fix_skip_rag_files_native_fc.py) |
| spec | 197 | [requirements.txt](../../../../sources/Wide-Moat__open-computer-use/requirements.txt)<br>[tests/test_requirements.py](../../../../sources/Wide-Moat__open-computer-use/tests/test_requirements.py)<br>[skills/public/frontend-design/LICENSE.txt](../../../../sources/Wide-Moat__open-computer-use/skills/public/frontend-design/LICENSE.txt)<br>[skills/public/frontend-design/SKILL.md](../../../../sources/Wide-Moat__open-computer-use/skills/public/frontend-design/SKILL.md)<br>[skills/examples/slack-gif-creator/requirements.txt](../../../../sources/Wide-Moat__open-computer-use/skills/examples/slack-gif-creator/requirements.txt)<br>[skills/examples/mcp-builder/scripts/requirements.txt](../../../../sources/Wide-Moat__open-computer-use/skills/examples/mcp-builder/scripts/requirements.txt)<br>[skills/examples/canvas-design/LICENSE.txt](../../../../sources/Wide-Moat__open-computer-use/skills/examples/canvas-design/LICENSE.txt)<br>[skills/examples/canvas-design/SKILL.md](../../../../sources/Wide-Moat__open-computer-use/skills/examples/canvas-design/SKILL.md) |
| eval | 80 | [docker-compose.test.yml](../../../../sources/Wide-Moat__open-computer-use/docker-compose.test.yml)<br>[tests/README.md](../../../../sources/Wide-Moat__open-computer-use/tests/README.md)<br>[tests/test_codex_toml_converter.py](../../../../sources/Wide-Moat__open-computer-use/tests/test_codex_toml_converter.py)<br>[tests/test_default_resolver_no_legacy_global.py](../../../../sources/Wide-Moat__open-computer-use/tests/test_default_resolver_no_legacy_global.py)<br>[tests/test_filter.py](../../../../sources/Wide-Moat__open-computer-use/tests/test_filter.py)<br>[tests/test_init_sh_unchanged.sh](../../../../sources/Wide-Moat__open-computer-use/tests/test_init_sh_unchanged.sh)<br>[tests/test_opencode_alias_map_drop.py](../../../../sources/Wide-Moat__open-computer-use/tests/test_opencode_alias_map_drop.py)<br>[tests/test_requirements.py](../../../../sources/Wide-Moat__open-computer-use/tests/test_requirements.py) |
| security | 27 | [SECURITY.md](../../../../sources/Wide-Moat__open-computer-use/SECURITY.md)<br>[tests/security/test_path_traversal_app.py](../../../../sources/Wide-Moat__open-computer-use/tests/security/test_path_traversal_app.py)<br>[tests/security/test_path_traversal_docker.py](../../../../sources/Wide-Moat__open-computer-use/tests/security/test_path_traversal_docker.py)<br>[tests/security/test_path_traversal_settings.py](../../../../sources/Wide-Moat__open-computer-use/tests/security/test_path_traversal_settings.py)<br>[tests/security/test_safe_path_util.py](../../../../sources/Wide-Moat__open-computer-use/tests/security/test_safe_path_util.py)<br>[tests/security/test_xss_preview.py](../../../../sources/Wide-Moat__open-computer-use/tests/security/test_xss_preview.py)<br>[tests/integration/test_mcp_auth.py](../../../../sources/Wide-Moat__open-computer-use/tests/integration/test_mcp_auth.py)<br>[skills/public/sub-agent/references/security-review.md](../../../../sources/Wide-Moat__open-computer-use/skills/public/sub-agent/references/security-review.md) |
| ci | 11 | [.github/workflows/build.yml](../../../../sources/Wide-Moat__open-computer-use/.github/workflows/build.yml)<br>[.github/workflows/codeql.yml](../../../../sources/Wide-Moat__open-computer-use/.github/workflows/codeql.yml)<br>[.github/workflows/contracts-lint.yml](../../../../sources/Wide-Moat__open-computer-use/.github/workflows/contracts-lint.yml)<br>[.github/workflows/docs-lint.yml](../../../../sources/Wide-Moat__open-computer-use/.github/workflows/docs-lint.yml)<br>[.github/workflows/helm.yml](../../../../sources/Wide-Moat__open-computer-use/.github/workflows/helm.yml)<br>[.github/workflows/identity-lint.yml](../../../../sources/Wide-Moat__open-computer-use/.github/workflows/identity-lint.yml)<br>[.github/workflows/release-chart.yml](../../../../sources/Wide-Moat__open-computer-use/.github/workflows/release-chart.yml)<br>[.github/workflows/release.yml](../../../../sources/Wide-Moat__open-computer-use/.github/workflows/release.yml) |
| container | 34 | [docker-compose.test.yml](../../../../sources/Wide-Moat__open-computer-use/docker-compose.test.yml)<br>[docker-compose.webui.yml](../../../../sources/Wide-Moat__open-computer-use/docker-compose.webui.yml)<br>[docker-compose.yml](../../../../sources/Wide-Moat__open-computer-use/docker-compose.yml)<br>[Dockerfile](../../../../sources/Wide-Moat__open-computer-use/Dockerfile)<br>[settings-wrapper/Dockerfile](../../../../sources/Wide-Moat__open-computer-use/settings-wrapper/Dockerfile)<br>[openwebui/Dockerfile](../../../../sources/Wide-Moat__open-computer-use/openwebui/Dockerfile)<br>[helm/computer-use-server/.helmignore](../../../../sources/Wide-Moat__open-computer-use/helm/computer-use-server/.helmignore)<br>[helm/computer-use-server/Chart.yaml](../../../../sources/Wide-Moat__open-computer-use/helm/computer-use-server/Chart.yaml) |
| instruction | 1 | [CLAUDE.md](../../../../sources/Wide-Moat__open-computer-use/CLAUDE.md) |
| docs | 152 | [README.md](../../../../sources/Wide-Moat__open-computer-use/README.md)<br>[tests/README.md](../../../../sources/Wide-Moat__open-computer-use/tests/README.md)<br>[tests/integration/README.md](../../../../sources/Wide-Moat__open-computer-use/tests/integration/README.md)<br>[skills/README.md](../../../../sources/Wide-Moat__open-computer-use/skills/README.md)<br>[settings-wrapper/README.md](../../../../sources/Wide-Moat__open-computer-use/settings-wrapper/README.md)<br>[openwebui/README.md](../../../../sources/Wide-Moat__open-computer-use/openwebui/README.md)<br>[openwebui/tools/README.md](../../../../sources/Wide-Moat__open-computer-use/openwebui/tools/README.md)<br>[openwebui/patches/README.md](../../../../sources/Wide-Moat__open-computer-use/openwebui/patches/README.md) |
| config | 6 | [package.json](../../../../sources/Wide-Moat__open-computer-use/package.json)<br>[requirements.txt](../../../../sources/Wide-Moat__open-computer-use/requirements.txt)<br>[skills/examples/slack-gif-creator/requirements.txt](../../../../sources/Wide-Moat__open-computer-use/skills/examples/slack-gif-creator/requirements.txt)<br>[skills/examples/mcp-builder/scripts/requirements.txt](../../../../sources/Wide-Moat__open-computer-use/skills/examples/mcp-builder/scripts/requirements.txt)<br>[settings-wrapper/requirements.txt](../../../../sources/Wide-Moat__open-computer-use/settings-wrapper/requirements.txt)<br>[computer-use-server/requirements.txt](../../../../sources/Wide-Moat__open-computer-use/computer-use-server/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 80 | [docker-compose.test.yml](../../../../sources/Wide-Moat__open-computer-use/docker-compose.test.yml)<br>[tests/README.md](../../../../sources/Wide-Moat__open-computer-use/tests/README.md)<br>[tests/test_codex_toml_converter.py](../../../../sources/Wide-Moat__open-computer-use/tests/test_codex_toml_converter.py)<br>[tests/test_default_resolver_no_legacy_global.py](../../../../sources/Wide-Moat__open-computer-use/tests/test_default_resolver_no_legacy_global.py)<br>[tests/test_filter.py](../../../../sources/Wide-Moat__open-computer-use/tests/test_filter.py)<br>[tests/test_init_sh_unchanged.sh](../../../../sources/Wide-Moat__open-computer-use/tests/test_init_sh_unchanged.sh) |
| CI workflows | 11 | [.github/workflows/build.yml](../../../../sources/Wide-Moat__open-computer-use/.github/workflows/build.yml)<br>[.github/workflows/codeql.yml](../../../../sources/Wide-Moat__open-computer-use/.github/workflows/codeql.yml)<br>[.github/workflows/contracts-lint.yml](../../../../sources/Wide-Moat__open-computer-use/.github/workflows/contracts-lint.yml)<br>[.github/workflows/docs-lint.yml](../../../../sources/Wide-Moat__open-computer-use/.github/workflows/docs-lint.yml)<br>[.github/workflows/helm.yml](../../../../sources/Wide-Moat__open-computer-use/.github/workflows/helm.yml)<br>[.github/workflows/identity-lint.yml](../../../../sources/Wide-Moat__open-computer-use/.github/workflows/identity-lint.yml) |
| Containers / deploy | 34 | [docker-compose.test.yml](../../../../sources/Wide-Moat__open-computer-use/docker-compose.test.yml)<br>[docker-compose.webui.yml](../../../../sources/Wide-Moat__open-computer-use/docker-compose.webui.yml)<br>[docker-compose.yml](../../../../sources/Wide-Moat__open-computer-use/docker-compose.yml)<br>[Dockerfile](../../../../sources/Wide-Moat__open-computer-use/Dockerfile)<br>[settings-wrapper/Dockerfile](../../../../sources/Wide-Moat__open-computer-use/settings-wrapper/Dockerfile)<br>[openwebui/Dockerfile](../../../../sources/Wide-Moat__open-computer-use/openwebui/Dockerfile) |
| Security / policy | 27 | [SECURITY.md](../../../../sources/Wide-Moat__open-computer-use/SECURITY.md)<br>[tests/security/test_path_traversal_app.py](../../../../sources/Wide-Moat__open-computer-use/tests/security/test_path_traversal_app.py)<br>[tests/security/test_path_traversal_docker.py](../../../../sources/Wide-Moat__open-computer-use/tests/security/test_path_traversal_docker.py)<br>[tests/security/test_path_traversal_settings.py](../../../../sources/Wide-Moat__open-computer-use/tests/security/test_path_traversal_settings.py)<br>[tests/security/test_safe_path_util.py](../../../../sources/Wide-Moat__open-computer-use/tests/security/test_safe_path_util.py)<br>[tests/security/test_xss_preview.py](../../../../sources/Wide-Moat__open-computer-use/tests/security/test_xss_preview.py) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/Wide-Moat__open-computer-use/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/test-mcp-endpoint-live.sh`, `tests/test-mcp-native-surface.sh`, `tests/orchestrator/test_mcp_resources.py`.
2. Trace execution through entrypoints: `server.json`, `computer-use-server/bin/list-subagent-models`.
3. Map agent/tool runtime through: `skills/README.md`, `skills/public/xlsx/LICENSE.txt`, `skills/public/xlsx/preview_data.py`.
4. Inspect retrieval/memory/indexing through: `tests/patches/test_fix_skip_embedding_chat_files.py`, `tests/patches/test_fix_skip_rag_files_native_fc.py`, `tests/patches/fixtures/retrieval_v0.9.1.py`.
5. Verify behavior through test/eval files: `docker-compose.test.yml`, `tests/README.md`, `tests/test_codex_toml_converter.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 MCP server that gives any LLM its own computer — managed Docker workspaces with live browser, terminal, code execution, . 핵심 구조 신호는 Python, package.json, requirements.txt, Dockerfile, docker-compose.yml, README.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
