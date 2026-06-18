# kaplanelad/shellfirm Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 182 files, 33 directories.

## 요약

- 조사 단위: `sources/kaplanelad__shellfirm` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 182 files, 33 directories, depth score 110, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 mcp=shellfirm/src/mcp.rs, shellfirm/src/bin/cmd/mcp_cmd.rs이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | kaplanelad/shellfirm |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/kaplanelad__shellfirm](../../../../sources/kaplanelad__shellfirm) |
| Existing report | [reports/clone-structures/kaplanelad__shellfirm.md](../../../clone-structures/kaplanelad__shellfirm.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 182 / 33 |
| Max observed depth | 6 |
| Top directories | .cargo, .github, docs, npm, scripts, shellfirm |
| Top extensions | .rs: 70, .yaml: 46, .snap: 27, .md: 20, (none): 7, .json: 5, .toml: 3, .gif: 1, .lock: 1, .sh: 1, .yml: 1 |
| Source patterns | cli-first, agent/tool runtime, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 20 |
| .github | ci surface | 1 |
| npm | top-level component | 1 |
| scripts | top-level component | 1 |
| shellfirm | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | Makefile | build | make build |
| test | Makefile | test | make test |
| quality | Makefile | fmt | make fmt |
| quality | Makefile | clippy | make clippy |
| utility | Makefile | show-doc | make show-doc |
| utility | Makefile | validate-doc | make validate-doc |
| utility | Makefile | clean-doc | make clean-doc |
| utility | Makefile | all-validation | make all-validation |
| utility | Makefile | help | make help |


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
| mcp | [shellfirm/src/mcp.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/mcp.rs) | mcp signal |
| mcp | [shellfirm/src/bin/cmd/mcp_cmd.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/cmd/mcp_cmd.rs) | mcp signal |
| agentRuntime | [shellfirm/src/agent.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/agent.rs) | agentRuntime signal |
| agentRuntime | [shellfirm/src/context.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/context.rs) | agentRuntime signal |
| agentRuntime | [shellfirm/src/tui/tabs/context.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/tui/tabs/context.rs) | agentRuntime signal |
| entrypoints | [shellfirm/src/bin/shellfirm.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/shellfirm.rs) | entrypoints signal |
| entrypoints | [shellfirm/src/bin/cmd/audit_cmd.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/cmd/audit_cmd.rs) | entrypoints signal |
| entrypoints | [shellfirm/src/bin/cmd/check_cmd.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/cmd/check_cmd.rs) | entrypoints signal |
| entrypoints | [shellfirm/src/bin/cmd/command.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/cmd/command.rs) | entrypoints signal |
| config | [Cargo.lock](../../../../sources/kaplanelad__shellfirm/Cargo.lock) | config signal |
| config | [Cargo.toml](../../../../sources/kaplanelad__shellfirm/Cargo.toml) | config signal |
| config | [Makefile](../../../../sources/kaplanelad__shellfirm/Makefile) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 18 | [shellfirm/src/bin/shellfirm.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/shellfirm.rs)<br>[shellfirm/src/bin/cmd/audit_cmd.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/cmd/audit_cmd.rs)<br>[shellfirm/src/bin/cmd/check_cmd.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/cmd/check_cmd.rs)<br>[shellfirm/src/bin/cmd/command.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/cmd/command.rs)<br>[shellfirm/src/bin/cmd/completions_cmd.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/cmd/completions_cmd.rs)<br>[shellfirm/src/bin/cmd/config.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/cmd/config.rs)<br>[shellfirm/src/bin/cmd/connect_cmd.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/cmd/connect_cmd.rs)<br>[shellfirm/src/bin/cmd/default.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/cmd/default.rs) |
| agentRuntime | 3 | [shellfirm/src/agent.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/agent.rs)<br>[shellfirm/src/context.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/context.rs)<br>[shellfirm/src/tui/tabs/context.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/tui/tabs/context.rs) |
| mcp | 2 | [shellfirm/src/mcp.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/mcp.rs)<br>[shellfirm/src/bin/cmd/mcp_cmd.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/cmd/mcp_cmd.rs) |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 57 | [shellfirm/tests/checks.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/tests/checks.rs)<br>[shellfirm/tests/decision_matrix.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/tests/decision_matrix.rs)<br>[shellfirm/tests/escalation_matrix_proptest.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/tests/escalation_matrix_proptest.rs)<br>[shellfirm/tests/per_mode_resolution.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/tests/per_mode_resolution.rs)<br>[shellfirm/tests/pure_logic.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/tests/pure_logic.rs)<br>[shellfirm/tests/sandboxed_integration.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/tests/sandboxed_integration.rs)<br>[shellfirm/tests/tui_app.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/tests/tui_app.rs)<br>[shellfirm/tests/decisions/matrix.yaml](../../../../sources/kaplanelad__shellfirm/shellfirm/tests/decisions/matrix.yaml) |
| security | 4 | [shellfirm/src/audit.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/audit.rs)<br>[shellfirm/src/policy.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/policy.rs)<br>[shellfirm/src/bin/cmd/audit_cmd.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/cmd/audit_cmd.rs)<br>[shellfirm/src/bin/cmd/policy_cmd.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/cmd/policy_cmd.rs) |
| ci | 2 | [.github/workflows/ci.yaml](../../../../sources/kaplanelad__shellfirm/.github/workflows/ci.yaml)<br>[.github/workflows/release.yml](../../../../sources/kaplanelad__shellfirm/.github/workflows/release.yml) |
| container | 2 | [docs/docker/zsh/Dockerfile](../../../../sources/kaplanelad__shellfirm/docs/docker/zsh/Dockerfile)<br>[docs/docker/bash/Dockerfile](../../../../sources/kaplanelad__shellfirm/docs/docker/bash/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 18 | [README.md](../../../../sources/kaplanelad__shellfirm/README.md)<br>[docs/add-new-patterns.md](../../../../sources/kaplanelad__shellfirm/docs/add-new-patterns.md)<br>[docs/config.md](../../../../sources/kaplanelad__shellfirm/docs/config.md)<br>[docs/media/example.gif](../../../../sources/kaplanelad__shellfirm/docs/media/example.gif)<br>[docs/docker/zsh/Dockerfile](../../../../sources/kaplanelad__shellfirm/docs/docker/zsh/Dockerfile)<br>[docs/docker/zsh/README.md](../../../../sources/kaplanelad__shellfirm/docs/docker/zsh/README.md)<br>[docs/docker/bash/Dockerfile](../../../../sources/kaplanelad__shellfirm/docs/docker/bash/Dockerfile)<br>[docs/docker/bash/README.md](../../../../sources/kaplanelad__shellfirm/docs/docker/bash/README.md) |
| config | 9 | [Cargo.lock](../../../../sources/kaplanelad__shellfirm/Cargo.lock)<br>[Cargo.toml](../../../../sources/kaplanelad__shellfirm/Cargo.toml)<br>[Makefile](../../../../sources/kaplanelad__shellfirm/Makefile)<br>[shellfirm/Cargo.toml](../../../../sources/kaplanelad__shellfirm/shellfirm/Cargo.toml)<br>[npm/shellfirm/package.json](../../../../sources/kaplanelad__shellfirm/npm/shellfirm/package.json)<br>[npm/cli-win32-x64/package.json](../../../../sources/kaplanelad__shellfirm/npm/cli-win32-x64/package.json)<br>[npm/cli-linux-x64/package.json](../../../../sources/kaplanelad__shellfirm/npm/cli-linux-x64/package.json)<br>[npm/cli-darwin-x64/package.json](../../../../sources/kaplanelad__shellfirm/npm/cli-darwin-x64/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 57 | [shellfirm/tests/checks.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/tests/checks.rs)<br>[shellfirm/tests/decision_matrix.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/tests/decision_matrix.rs)<br>[shellfirm/tests/escalation_matrix_proptest.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/tests/escalation_matrix_proptest.rs)<br>[shellfirm/tests/per_mode_resolution.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/tests/per_mode_resolution.rs)<br>[shellfirm/tests/pure_logic.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/tests/pure_logic.rs)<br>[shellfirm/tests/sandboxed_integration.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/tests/sandboxed_integration.rs) |
| CI workflows | 2 | [.github/workflows/ci.yaml](../../../../sources/kaplanelad__shellfirm/.github/workflows/ci.yaml)<br>[.github/workflows/release.yml](../../../../sources/kaplanelad__shellfirm/.github/workflows/release.yml) |
| Containers / deploy | 2 | [docs/docker/zsh/Dockerfile](../../../../sources/kaplanelad__shellfirm/docs/docker/zsh/Dockerfile)<br>[docs/docker/bash/Dockerfile](../../../../sources/kaplanelad__shellfirm/docs/docker/bash/Dockerfile) |
| Security / policy | 4 | [shellfirm/src/audit.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/audit.rs)<br>[shellfirm/src/policy.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/policy.rs)<br>[shellfirm/src/bin/cmd/audit_cmd.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/cmd/audit_cmd.rs)<br>[shellfirm/src/bin/cmd/policy_cmd.rs](../../../../sources/kaplanelad__shellfirm/shellfirm/src/bin/cmd/policy_cmd.rs) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `shellfirm/src/mcp.rs`, `shellfirm/src/bin/cmd/mcp_cmd.rs`, `shellfirm/src/agent.rs`.
2. Trace execution through entrypoints: `shellfirm/src/bin/shellfirm.rs`, `shellfirm/src/bin/cmd/audit_cmd.rs`, `shellfirm/src/bin/cmd/check_cmd.rs`.
3. Map agent/tool runtime through: `shellfirm/src/agent.rs`, `shellfirm/src/context.rs`, `shellfirm/src/tui/tabs/context.rs`.
4. Verify behavior through test/eval files: `shellfirm/tests/checks.rs`, `shellfirm/tests/decision_matrix.rs`, `shellfirm/tests/escalation_matrix_proptest.rs`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 182 files, 33 directories.. 핵심 구조 신호는 Cargo.toml, Makefile, README.md, LICENSE, tests, ci이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
