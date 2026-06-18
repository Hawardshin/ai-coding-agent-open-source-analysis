# cisco-ai-defense/mcp-scanner Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Scan MCP servers for potential threats & security findings.

## 요약

- 조사 단위: `sources/cisco-ai-defense__mcp-scanner` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 408 files, 67 directories, depth score 117, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp_scanner_entry.py, mcp-scanner.spec, tests/test_custom_variable_mcp.py이고, 의존성 단서는 openai, mcp, fastapi, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | cisco-ai-defense/mcp-scanner |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 965 |
| Forks | 116 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/cisco-ai-defense__mcp-scanner](../../../../sources/cisco-ai-defense__mcp-scanner) |
| Existing report | [reports/global-trending/repositories/cisco-ai-defense__mcp-scanner.md](../../../global-trending/repositories/cisco-ai-defense__mcp-scanner.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 408 / 67 |
| Max observed depth | 6 |
| Top directories | .github, claude-code-plugin, docs, evals, examples, images, mcpscanner, tests |
| Top extensions | .py: 325, .md: 40, .json: 10, .yara: 10, .txt: 4, .yml: 4, .rego: 3, .sh: 3, (none): 3, .example: 1, .gif: 1, .lock: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 51 |
| docs | documentation surface | 18 |
| examples/example-malicious-servers | examples workspace | 3 |
| examples/example-oauth-server-clients | examples workspace | 2 |
| .github | ci surface | 1 |
| claude-code-plugin | top-level component | 1 |
| evals | top-level component | 1 |
| examples | top-level component | 1 |
| examples/explicit_auth_example.py | examples workspace | 1 |
| examples/mcp_complete_server.py | examples workspace | 1 |
| examples/mcp_docstring_analyzer.py | examples workspace | 1 |
| examples/oauth_example.py | examples workspace | 1 |
| examples/readiness | examples workspace | 1 |
| images | top-level component | 1 |
| mcpscanner | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | mcp-scanner | mcp-scanner |
| utility | pyproject.toml | mcp-scanner-api | mcp-scanner-api |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | fastapi |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [mcp_scanner_entry.py](../../../../sources/cisco-ai-defense__mcp-scanner/mcp_scanner_entry.py) | mcp signal |
| mcp | [mcp-scanner.spec](../../../../sources/cisco-ai-defense__mcp-scanner/mcp-scanner.spec) | mcp signal |
| mcp | [tests/test_custom_variable_mcp.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_custom_variable_mcp.py) | mcp signal |
| mcp | [tests/threat_files/malicious_mcp_server.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/threat_files/malicious_mcp_server.py) | mcp signal |
| agentRuntime | [tests/readiness/fixtures/tool_overloaded_scope.json](../../../../sources/cisco-ai-defense__mcp-scanner/tests/readiness/fixtures/tool_overloaded_scope.json) | agentRuntime signal |
| agentRuntime | [tests/readiness/fixtures/tool_self_referencing.json](../../../../sources/cisco-ai-defense__mcp-scanner/tests/readiness/fixtures/tool_self_referencing.json) | agentRuntime signal |
| agentRuntime | [tests/readiness/fixtures/tool_with_long_timeout.json](../../../../sources/cisco-ai-defense__mcp-scanner/tests/readiness/fixtures/tool_with_long_timeout.json) | agentRuntime signal |
| agentRuntime | [tests/readiness/fixtures/tool_with_resources.json](../../../../sources/cisco-ai-defense__mcp-scanner/tests/readiness/fixtures/tool_with_resources.json) | agentRuntime signal |
| entrypoints | [tests/threat_files/cross_file_malicious/server.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/threat_files/cross_file_malicious/server.py) | entrypoints signal |
| entrypoints | [mcpscanner/server.py](../../../../sources/cisco-ai-defense__mcp-scanner/mcpscanner/server.py) | entrypoints signal |
| entrypoints | [examples/example-malicious-servers/server.py](../../../../sources/cisco-ai-defense__mcp-scanner/examples/example-malicious-servers/server.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/cisco-ai-defense__mcp-scanner/pyproject.toml) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [tests/threat_files/cross_file_malicious/server.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/threat_files/cross_file_malicious/server.py)<br>[mcpscanner/server.py](../../../../sources/cisco-ai-defense__mcp-scanner/mcpscanner/server.py)<br>[examples/example-malicious-servers/server.py](../../../../sources/cisco-ai-defense__mcp-scanner/examples/example-malicious-servers/server.py) |
| agentRuntime | 20 | [tests/readiness/fixtures/tool_overloaded_scope.json](../../../../sources/cisco-ai-defense__mcp-scanner/tests/readiness/fixtures/tool_overloaded_scope.json)<br>[tests/readiness/fixtures/tool_self_referencing.json](../../../../sources/cisco-ai-defense__mcp-scanner/tests/readiness/fixtures/tool_self_referencing.json)<br>[tests/readiness/fixtures/tool_with_long_timeout.json](../../../../sources/cisco-ai-defense__mcp-scanner/tests/readiness/fixtures/tool_with_long_timeout.json)<br>[tests/readiness/fixtures/tool_with_resources.json](../../../../sources/cisco-ai-defense__mcp-scanner/tests/readiness/fixtures/tool_with_resources.json)<br>[mcpscanner/data/yara_rules/tool_poisoning.yara](../../../../sources/cisco-ai-defense__mcp-scanner/mcpscanner/data/yara_rules/tool_poisoning.yara)<br>[mcpscanner/core/static_analysis/context_extractor.py](../../../../sources/cisco-ai-defense__mcp-scanner/mcpscanner/core/static_analysis/context_extractor.py)<br>[evals/behavioral-analysis/data/tool-poisoning/api_key_harvesting_environment.py](../../../../sources/cisco-ai-defense__mcp-scanner/evals/behavioral-analysis/data/tool-poisoning/api_key_harvesting_environment.py)<br>[evals/behavioral-analysis/data/tool-poisoning/conditional_behavior_privileged_users.py](../../../../sources/cisco-ai-defense__mcp-scanner/evals/behavioral-analysis/data/tool-poisoning/conditional_behavior_privileged_users.py) |
| mcp | 11 | [mcp_scanner_entry.py](../../../../sources/cisco-ai-defense__mcp-scanner/mcp_scanner_entry.py)<br>[mcp-scanner.spec](../../../../sources/cisco-ai-defense__mcp-scanner/mcp-scanner.spec)<br>[tests/test_custom_variable_mcp.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_custom_variable_mcp.py)<br>[tests/threat_files/malicious_mcp_server.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/threat_files/malicious_mcp_server.py)<br>[mcpscanner/core/mcp_models.py](../../../../sources/cisco-ai-defense__mcp-scanner/mcpscanner/core/mcp_models.py)<br>[images/mcp_scanner.gif](../../../../sources/cisco-ai-defense__mcp-scanner/images/mcp_scanner.gif)<br>[examples/mcp_complete_server.py](../../../../sources/cisco-ai-defense__mcp-scanner/examples/mcp_complete_server.py)<br>[examples/mcp_docstring_analyzer.py](../../../../sources/cisco-ai-defense__mcp-scanner/examples/mcp_docstring_analyzer.py) |
| retrieval | 3 | [mcpscanner/core/static_analysis/interprocedural/call_graph_analyzer.py](../../../../sources/cisco-ai-defense__mcp-scanner/mcpscanner/core/static_analysis/interprocedural/call_graph_analyzer.py)<br>[mcpscanner/core/static_analysis/interprocedural/treesitter_call_graph.py](../../../../sources/cisco-ai-defense__mcp-scanner/mcpscanner/core/static_analysis/interprocedural/treesitter_call_graph.py)<br>[evals/behavioral-analysis/data/resource-exhaustion/memory_exhaustion_attack.py](../../../../sources/cisco-ai-defense__mcp-scanner/evals/behavioral-analysis/data/resource-exhaustion/memory_exhaustion_attack.py) |
| spec | 1 | [docs/architecture.md](../../../../sources/cisco-ai-defense__mcp-scanner/docs/architecture.md) |
| eval | 74 | [tests/test_api_analyzer.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_api_analyzer.py)<br>[tests/test_auth.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_auth.py)<br>[tests/test_base.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_base.py)<br>[tests/test_bedrock_integration.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_bedrock_integration.py)<br>[tests/test_cli.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_cli.py)<br>[tests/test_config_parser.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_config_parser.py)<br>[tests/test_config.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_config.py)<br>[tests/test_custom_variable_mcp.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_custom_variable_mcp.py) |
| security | 15 | [SECURITY.md](../../../../sources/cisco-ai-defense__mcp-scanner/SECURITY.md)<br>[tests/test_auth.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_auth.py)<br>[mcpscanner/core/auth.py](../../../../sources/cisco-ai-defense__mcp-scanner/mcpscanner/core/auth.py)<br>[examples/explicit_auth_example.py](../../../../sources/cisco-ai-defense__mcp-scanner/examples/explicit_auth_example.py)<br>[examples/oauth_example.py](../../../../sources/cisco-ai-defense__mcp-scanner/examples/oauth_example.py)<br>[examples/readiness/combined_security_readiness_example.py](../../../../sources/cisco-ai-defense__mcp-scanner/examples/readiness/combined_security_readiness_example.py)<br>[examples/example-oauth-server-clients/oauth_sse_server.py](../../../../sources/cisco-ai-defense__mcp-scanner/examples/example-oauth-server-clients/oauth_sse_server.py)<br>[examples/example-oauth-server-clients/oauth_test_scan.py](../../../../sources/cisco-ai-defense__mcp-scanner/examples/example-oauth-server-clients/oauth_test_scan.py) |
| ci | 4 | [.github/workflows/build-macos.yml](../../../../sources/cisco-ai-defense__mcp-scanner/.github/workflows/build-macos.yml)<br>[.github/workflows/ci-cd-run.yml](../../../../sources/cisco-ai-defense__mcp-scanner/.github/workflows/ci-cd-run.yml)<br>[.github/workflows/python-tests.yml](../../../../sources/cisco-ai-defense__mcp-scanner/.github/workflows/python-tests.yml)<br>[.github/workflows/release.yml](../../../../sources/cisco-ai-defense__mcp-scanner/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 21 | [README.md](../../../../sources/cisco-ai-defense__mcp-scanner/README.md)<br>[tests/static_analysis/README.md](../../../../sources/cisco-ai-defense__mcp-scanner/tests/static_analysis/README.md)<br>[tests/behavioral/README.md](../../../../sources/cisco-ai-defense__mcp-scanner/tests/behavioral/README.md)<br>[examples/example-malicious-servers/README.md](../../../../sources/cisco-ai-defense__mcp-scanner/examples/example-malicious-servers/README.md)<br>[evals/README.md](../../../../sources/cisco-ai-defense__mcp-scanner/evals/README.md)<br>[docs/api-reference.md](../../../../sources/cisco-ai-defense__mcp-scanner/docs/api-reference.md)<br>[docs/architecture.md](../../../../sources/cisco-ai-defense__mcp-scanner/docs/architecture.md)<br>[docs/authentication.md](../../../../sources/cisco-ai-defense__mcp-scanner/docs/authentication.md) |
| config | 2 | [pyproject.toml](../../../../sources/cisco-ai-defense__mcp-scanner/pyproject.toml)<br>[uv.lock](../../../../sources/cisco-ai-defense__mcp-scanner/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 74 | [tests/test_api_analyzer.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_api_analyzer.py)<br>[tests/test_auth.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_auth.py)<br>[tests/test_base.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_base.py)<br>[tests/test_bedrock_integration.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_bedrock_integration.py)<br>[tests/test_cli.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_cli.py)<br>[tests/test_config_parser.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_config_parser.py) |
| CI workflows | 4 | [.github/workflows/build-macos.yml](../../../../sources/cisco-ai-defense__mcp-scanner/.github/workflows/build-macos.yml)<br>[.github/workflows/ci-cd-run.yml](../../../../sources/cisco-ai-defense__mcp-scanner/.github/workflows/ci-cd-run.yml)<br>[.github/workflows/python-tests.yml](../../../../sources/cisco-ai-defense__mcp-scanner/.github/workflows/python-tests.yml)<br>[.github/workflows/release.yml](../../../../sources/cisco-ai-defense__mcp-scanner/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 15 | [SECURITY.md](../../../../sources/cisco-ai-defense__mcp-scanner/SECURITY.md)<br>[tests/test_auth.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_auth.py)<br>[mcpscanner/core/auth.py](../../../../sources/cisco-ai-defense__mcp-scanner/mcpscanner/core/auth.py)<br>[examples/explicit_auth_example.py](../../../../sources/cisco-ai-defense__mcp-scanner/examples/explicit_auth_example.py)<br>[examples/oauth_example.py](../../../../sources/cisco-ai-defense__mcp-scanner/examples/oauth_example.py)<br>[examples/readiness/combined_security_readiness_example.py](../../../../sources/cisco-ai-defense__mcp-scanner/examples/readiness/combined_security_readiness_example.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `mcp_scanner_entry.py`, `mcp-scanner.spec`, `tests/test_custom_variable_mcp.py`.
2. Trace execution through entrypoints: `tests/threat_files/cross_file_malicious/server.py`, `mcpscanner/server.py`, `examples/example-malicious-servers/server.py`.
3. Map agent/tool runtime through: `tests/readiness/fixtures/tool_overloaded_scope.json`, `tests/readiness/fixtures/tool_self_referencing.json`, `tests/readiness/fixtures/tool_with_long_timeout.json`.
4. Inspect retrieval/memory/indexing through: `mcpscanner/core/static_analysis/interprocedural/call_graph_analyzer.py`, `mcpscanner/core/static_analysis/interprocedural/treesitter_call_graph.py`, `evals/behavioral-analysis/data/resource-exhaustion/memory_exhaustion_attack.py`.
5. Verify behavior through test/eval files: `tests/test_api_analyzer.py`, `tests/test_auth.py`, `tests/test_base.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Scan MCP servers for potential threats & security findings.. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, openai, mcp이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
