# ultraworkers/claw-code Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 386 files, 99 directories.

## 요약

- 조사 단위: `sources/ultraworkers__claw-code` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 386 files, 99 directories, depth score 134, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=rust/crates/runtime/src/mcp_client.rs, rust/crates/runtime/src/mcp_lifecycle_hardened.rs, rust/crates/runtime/src/mcp_server.rs이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | ultraworkers/claw-code |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/ultraworkers__claw-code](../../../../sources/ultraworkers__claw-code) |
| Existing report | [reports/clone-structures/ultraworkers__claw-code.md](../../../clone-structures/ultraworkers__claw-code.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 386 / 99 |
| Max observed depth | 7 |
| Top directories | .claude, .github, .omx, .port_sessions, assets, docs, rust, scripts, src, tests |
| Top extensions | .rs: 101, .json: 96, .py: 82, .md: 49, .toml: 13, .sh: 11, (none): 9, .jsonl: 6, .png: 6, .yml: 6, .log: 3, .html: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 35 |
| src | source boundary | 15 |
| tests | validation surface | 8 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| rust | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


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
| mcp | [rust/crates/runtime/src/mcp_client.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/mcp_client.rs) | mcp signal |
| mcp | [rust/crates/runtime/src/mcp_lifecycle_hardened.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/mcp_lifecycle_hardened.rs) | mcp signal |
| mcp | [rust/crates/runtime/src/mcp_server.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/mcp_server.rs) | mcp signal |
| mcp | [rust/crates/runtime/src/mcp_stdio.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/mcp_stdio.rs) | mcp signal |
| agentRuntime | [src/context.py](../../../../sources/ultraworkers__claw-code/src/context.py) | agentRuntime signal |
| agentRuntime | [src/tool_pool.py](../../../../sources/ultraworkers__claw-code/src/tool_pool.py) | agentRuntime signal |
| agentRuntime | [src/Tool.py](../../../../sources/ultraworkers__claw-code/src/Tool.py) | agentRuntime signal |
| agentRuntime | [src/tools.py](../../../../sources/ultraworkers__claw-code/src/tools.py) | agentRuntime signal |
| entrypoints | [src/main.py](../../../../sources/ultraworkers__claw-code/src/main.py) | entrypoints signal |
| entrypoints | [src/reference_data/subsystems/server.json](../../../../sources/ultraworkers__claw-code/src/reference_data/subsystems/server.json) | entrypoints signal |
| entrypoints | [rust/crates/tools/src/lib.rs](../../../../sources/ultraworkers__claw-code/rust/crates/tools/src/lib.rs) | entrypoints signal |
| entrypoints | [rust/crates/telemetry/src/lib.rs](../../../../sources/ultraworkers__claw-code/rust/crates/telemetry/src/lib.rs) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 16 | [src/main.py](../../../../sources/ultraworkers__claw-code/src/main.py)<br>[src/reference_data/subsystems/server.json](../../../../sources/ultraworkers__claw-code/src/reference_data/subsystems/server.json)<br>[rust/crates/tools/src/lib.rs](../../../../sources/ultraworkers__claw-code/rust/crates/tools/src/lib.rs)<br>[rust/crates/telemetry/src/lib.rs](../../../../sources/ultraworkers__claw-code/rust/crates/telemetry/src/lib.rs)<br>[rust/crates/rusty-claude-cli/src/main.rs](../../../../sources/ultraworkers__claw-code/rust/crates/rusty-claude-cli/src/main.rs)<br>[rust/crates/runtime/src/lib.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/lib.rs)<br>[rust/crates/plugins/src/lib.rs](../../../../sources/ultraworkers__claw-code/rust/crates/plugins/src/lib.rs)<br>[rust/crates/mock-anthropic-service/src/lib.rs](../../../../sources/ultraworkers__claw-code/rust/crates/mock-anthropic-service/src/lib.rs) |
| agentRuntime | 25 | [src/context.py](../../../../sources/ultraworkers__claw-code/src/context.py)<br>[src/tool_pool.py](../../../../sources/ultraworkers__claw-code/src/tool_pool.py)<br>[src/Tool.py](../../../../sources/ultraworkers__claw-code/src/Tool.py)<br>[src/tools.py](../../../../sources/ultraworkers__claw-code/src/tools.py)<br>[src/skills/__init__.py](../../../../sources/ultraworkers__claw-code/src/skills/__init__.py)<br>[src/reference_data/tools_snapshot.json](../../../../sources/ultraworkers__claw-code/src/reference_data/tools_snapshot.json)<br>[src/reference_data/subsystems/hooks.json](../../../../sources/ultraworkers__claw-code/src/reference_data/subsystems/hooks.json)<br>[src/reference_data/subsystems/skills.json](../../../../sources/ultraworkers__claw-code/src/reference_data/subsystems/skills.json) |
| mcp | 8 | [rust/crates/runtime/src/mcp_client.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/mcp_client.rs)<br>[rust/crates/runtime/src/mcp_lifecycle_hardened.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/mcp_lifecycle_hardened.rs)<br>[rust/crates/runtime/src/mcp_server.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/mcp_server.rs)<br>[rust/crates/runtime/src/mcp_stdio.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/mcp_stdio.rs)<br>[rust/crates/runtime/src/mcp_tool_bridge.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/mcp_tool_bridge.rs)<br>[rust/crates/runtime/src/mcp.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/mcp.rs)<br>[docs/g007-mcp-lifecycle-mapping.md](../../../../sources/ultraworkers__claw-code/docs/g007-mcp-lifecycle-mapping.md)<br>[docs/g007-plugin-mcp-verification-map.md](../../../../sources/ultraworkers__claw-code/docs/g007-plugin-mcp-verification-map.md) |
| retrieval | 14 | [src/bootstrap_graph.py](../../../../sources/ultraworkers__claw-code/src/bootstrap_graph.py)<br>[src/command_graph.py](../../../../sources/ultraworkers__claw-code/src/command_graph.py)<br>[rust/crates/claw-rag-service/Cargo.toml](../../../../sources/ultraworkers__claw-code/rust/crates/claw-rag-service/Cargo.toml)<br>[rust/crates/claw-rag-service/Dockerfile](../../../../sources/ultraworkers__claw-code/rust/crates/claw-rag-service/Dockerfile)<br>[rust/crates/claw-rag-service/static/index.html](../../../../sources/ultraworkers__claw-code/rust/crates/claw-rag-service/static/index.html)<br>[rust/crates/claw-rag-service/src/chunk.rs](../../../../sources/ultraworkers__claw-code/rust/crates/claw-rag-service/src/chunk.rs)<br>[rust/crates/claw-rag-service/src/db.rs](../../../../sources/ultraworkers__claw-code/rust/crates/claw-rag-service/src/db.rs)<br>[rust/crates/claw-rag-service/src/embed.rs](../../../../sources/ultraworkers__claw-code/rust/crates/claw-rag-service/src/embed.rs) |
| spec | 8 | [prd.json](../../../../sources/ultraworkers__claw-code/prd.json)<br>[ROADMAP.md](../../../../sources/ultraworkers__claw-code/ROADMAP.md)<br>[tests/test_roadmap_helpers.py](../../../../sources/ultraworkers__claw-code/tests/test_roadmap_helpers.py)<br>[scripts/roadmap-check-ids.sh](../../../../sources/ultraworkers__claw-code/scripts/roadmap-check-ids.sh)<br>[scripts/roadmap-next-id.sh](../../../../sources/ultraworkers__claw-code/scripts/roadmap-next-id.sh)<br>[docs/g013-roadmap-pinpoints-693-695-verification-map.md](../../../../sources/ultraworkers__claw-code/docs/g013-roadmap-pinpoints-693-695-verification-map.md)<br>[docs/personal-assistant-roadmap.md](../../../../sources/ultraworkers__claw-code/docs/personal-assistant-roadmap.md)<br>[docs/roadmap-pr-goals.md](../../../../sources/ultraworkers__claw-code/docs/roadmap-pr-goals.md) |
| eval | 25 | [tests/__init__.py](../../../../sources/ultraworkers__claw-code/tests/__init__.py)<br>[tests/test_porting_workspace.py](../../../../sources/ultraworkers__claw-code/tests/test_porting_workspace.py)<br>[tests/test_pre_push_hook_contract.py](../../../../sources/ultraworkers__claw-code/tests/test_pre_push_hook_contract.py)<br>[tests/test_roadmap_helpers.py](../../../../sources/ultraworkers__claw-code/tests/test_roadmap_helpers.py)<br>[tests/test_security_scope.py](../../../../sources/ultraworkers__claw-code/tests/test_security_scope.py)<br>[rust/crates/tools/tests/path_scope_enforcement.rs](../../../../sources/ultraworkers__claw-code/rust/crates/tools/tests/path_scope_enforcement.rs)<br>[rust/crates/rusty-claude-cli/tests/cli_flags_and_config_defaults.rs](../../../../sources/ultraworkers__claw-code/rust/crates/rusty-claude-cli/tests/cli_flags_and_config_defaults.rs)<br>[rust/crates/rusty-claude-cli/tests/compact_output.rs](../../../../sources/ultraworkers__claw-code/rust/crates/rusty-claude-cli/tests/compact_output.rs) |
| security | 10 | [SECURITY.md](../../../../sources/ultraworkers__claw-code/SECURITY.md)<br>[tests/test_security_scope.py](../../../../sources/ultraworkers__claw-code/tests/test_security_scope.py)<br>[src/parity_audit.py](../../../../sources/ultraworkers__claw-code/src/parity_audit.py)<br>[rust/crates/runtime/src/oauth.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/oauth.rs)<br>[rust/crates/runtime/src/permission_enforcer.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/permission_enforcer.rs)<br>[rust/crates/runtime/src/policy_engine.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/policy_engine.rs)<br>[rust/crates/runtime/src/sandbox.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/sandbox.rs)<br>[rust/.sandbox-home/.rustup/settings.toml](../../../../sources/ultraworkers__claw-code/rust/.sandbox-home/.rustup/settings.toml) |
| ci | 3 | [.github/workflows/release.yml](../../../../sources/ultraworkers__claw-code/.github/workflows/release.yml)<br>[.github/workflows/rust-ci.yml](../../../../sources/ultraworkers__claw-code/.github/workflows/rust-ci.yml)<br>[.github/workflows/rust.yml](../../../../sources/ultraworkers__claw-code/.github/workflows/rust.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/ultraworkers__claw-code/docker-compose.yml)<br>[rust/crates/claw-rag-service/Dockerfile](../../../../sources/ultraworkers__claw-code/rust/crates/claw-rag-service/Dockerfile) |
| instruction | 2 | [CLAUDE.md](../../../../sources/ultraworkers__claw-code/CLAUDE.md)<br>[rust/CLAUDE.md](../../../../sources/ultraworkers__claw-code/rust/CLAUDE.md) |
| docs | 29 | [README.md](../../../../sources/ultraworkers__claw-code/README.md)<br>[rust/README.md](../../../../sources/ultraworkers__claw-code/rust/README.md)<br>[rust/crates/runtime/tests/fixtures/report_schema_v1/README.md](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/tests/fixtures/report_schema_v1/README.md)<br>[docs/anti-slop-triage.md](../../../../sources/ultraworkers__claw-code/docs/anti-slop-triage.md)<br>[docs/container.md](../../../../sources/ultraworkers__claw-code/docs/container.md)<br>[docs/g002-security-verification-map.md](../../../../sources/ultraworkers__claw-code/docs/g002-security-verification-map.md)<br>[docs/g003-boot-session-verification-map.md](../../../../sources/ultraworkers__claw-code/docs/g003-boot-session-verification-map.md)<br>[docs/g004-events-reports-contract.md](../../../../sources/ultraworkers__claw-code/docs/g004-events-reports-contract.md) |
| config | 13 | [rust/Cargo.lock](../../../../sources/ultraworkers__claw-code/rust/Cargo.lock)<br>[rust/Cargo.toml](../../../../sources/ultraworkers__claw-code/rust/Cargo.toml)<br>[rust/crates/tools/Cargo.toml](../../../../sources/ultraworkers__claw-code/rust/crates/tools/Cargo.toml)<br>[rust/crates/telemetry/Cargo.toml](../../../../sources/ultraworkers__claw-code/rust/crates/telemetry/Cargo.toml)<br>[rust/crates/rusty-claude-cli/Cargo.toml](../../../../sources/ultraworkers__claw-code/rust/crates/rusty-claude-cli/Cargo.toml)<br>[rust/crates/runtime/Cargo.toml](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/Cargo.toml)<br>[rust/crates/plugins/Cargo.toml](../../../../sources/ultraworkers__claw-code/rust/crates/plugins/Cargo.toml)<br>[rust/crates/mock-anthropic-service/Cargo.toml](../../../../sources/ultraworkers__claw-code/rust/crates/mock-anthropic-service/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 25 | [tests/__init__.py](../../../../sources/ultraworkers__claw-code/tests/__init__.py)<br>[tests/test_porting_workspace.py](../../../../sources/ultraworkers__claw-code/tests/test_porting_workspace.py)<br>[tests/test_pre_push_hook_contract.py](../../../../sources/ultraworkers__claw-code/tests/test_pre_push_hook_contract.py)<br>[tests/test_roadmap_helpers.py](../../../../sources/ultraworkers__claw-code/tests/test_roadmap_helpers.py)<br>[tests/test_security_scope.py](../../../../sources/ultraworkers__claw-code/tests/test_security_scope.py)<br>[rust/crates/tools/tests/path_scope_enforcement.rs](../../../../sources/ultraworkers__claw-code/rust/crates/tools/tests/path_scope_enforcement.rs) |
| CI workflows | 3 | [.github/workflows/release.yml](../../../../sources/ultraworkers__claw-code/.github/workflows/release.yml)<br>[.github/workflows/rust-ci.yml](../../../../sources/ultraworkers__claw-code/.github/workflows/rust-ci.yml)<br>[.github/workflows/rust.yml](../../../../sources/ultraworkers__claw-code/.github/workflows/rust.yml) |
| Containers / deploy | 2 | [docker-compose.yml](../../../../sources/ultraworkers__claw-code/docker-compose.yml)<br>[rust/crates/claw-rag-service/Dockerfile](../../../../sources/ultraworkers__claw-code/rust/crates/claw-rag-service/Dockerfile) |
| Security / policy | 10 | [SECURITY.md](../../../../sources/ultraworkers__claw-code/SECURITY.md)<br>[tests/test_security_scope.py](../../../../sources/ultraworkers__claw-code/tests/test_security_scope.py)<br>[src/parity_audit.py](../../../../sources/ultraworkers__claw-code/src/parity_audit.py)<br>[rust/crates/runtime/src/oauth.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/oauth.rs)<br>[rust/crates/runtime/src/permission_enforcer.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/permission_enforcer.rs)<br>[rust/crates/runtime/src/policy_engine.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/policy_engine.rs) |
| Agent instructions | 2 | [CLAUDE.md](../../../../sources/ultraworkers__claw-code/CLAUDE.md)<br>[rust/CLAUDE.md](../../../../sources/ultraworkers__claw-code/rust/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `rust/crates/runtime/src/mcp_client.rs`, `rust/crates/runtime/src/mcp_lifecycle_hardened.rs`, `rust/crates/runtime/src/mcp_server.rs`.
2. Trace execution through entrypoints: `src/main.py`, `src/reference_data/subsystems/server.json`, `rust/crates/tools/src/lib.rs`.
3. Map agent/tool runtime through: `src/context.py`, `src/tool_pool.py`, `src/Tool.py`.
4. Inspect retrieval/memory/indexing through: `src/bootstrap_graph.py`, `src/command_graph.py`, `rust/crates/claw-rag-service/Cargo.toml`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/test_porting_workspace.py`, `tests/test_pre_push_hook_contract.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 386 files, 99 directories.. 핵심 구조 신호는 docker-compose.yml, README.md, CLAUDE.md, LICENSE, tests, ci이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
