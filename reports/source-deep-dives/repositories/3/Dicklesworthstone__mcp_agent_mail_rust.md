# Dicklesworthstone/mcp_agent_mail_rust Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Rust MCP server for multi-agent coordination: 34 tools, Git-backed archive, SQLite indexing, advisory file locks, and an interactive TUI console

## 요약

- 조사 단위: `sources/Dicklesworthstone__mcp_agent_mail_rust` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 3,433 files, 168 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=EXISTING_MCP_AGENT_MAIL_STRUCTURE.md, PLAN_TO_PORT_MCP_AGENT_MAIL_TO_RUST.md, tests/fixtures/golden_snapshots/mcp_cli_mode_deny_serve.txt이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Dicklesworthstone/mcp_agent_mail_rust |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 89 |
| Forks | 23 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Dicklesworthstone__mcp_agent_mail_rust](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust) |
| Existing report | [reports/global-trending/repositories/Dicklesworthstone__mcp_agent_mail_rust.md](../../../global-trending/repositories/Dicklesworthstone__mcp_agent_mail_rust.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 3433 / 168 |
| Max observed depth | 8 |
| Top directories | .beads, .cargo, .github, benches, crates, docs, experimental, refactor, scripts, tests |
| Top extensions | (none): 2198, .rs: 476, .sh: 208, .md: 155, .json: 116, .snap: 100, .txt: 83, .html: 22, .toml: 21, .sql: 12, .yml: 12, .py: 7 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 85 |
| tests | validation surface | 71 |
| crates/mcp-agent-mail-tools | crates workspace | 22 |
| crates/mcp-agent-mail-guard | crates workspace | 18 |
| crates/mcp-agent-mail-server | crates workspace | 13 |
| crates/mcp-agent-mail-core | crates workspace | 8 |
| crates/mcp-agent-mail-conformance | crates workspace | 7 |
| crates/mcp-agent-mail-cli | crates workspace | 6 |
| crates/mcp-agent-mail-db | crates workspace | 5 |
| crates/mcp-agent-mail-search-core | crates workspace | 5 |
| crates/mcp-agent-mail-share | crates workspace | 5 |
| crates/mcp-agent-mail-storage | crates workspace | 5 |
| crates/mcp-agent-mail | crates workspace | 2 |
| crates/mcp-agent-mail-agent-detect | crates workspace | 2 |
| crates/mcp-agent-mail-test-helpers | crates workspace | 2 |
| .github | ci surface | 1 |
| benches | validation surface | 1 |
| crates | source boundary | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
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
| mcp | [EXISTING_MCP_AGENT_MAIL_STRUCTURE.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/EXISTING_MCP_AGENT_MAIL_STRUCTURE.md) | mcp signal |
| mcp | [PLAN_TO_PORT_MCP_AGENT_MAIL_TO_RUST.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/PLAN_TO_PORT_MCP_AGENT_MAIL_TO_RUST.md) | mcp signal |
| mcp | [tests/fixtures/golden_snapshots/mcp_cli_mode_deny_serve.txt](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/fixtures/golden_snapshots/mcp_cli_mode_deny_serve.txt) | mcp signal |
| mcp | [tests/fixtures/golden_snapshots/mcp_deny_archive.txt](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/fixtures/golden_snapshots/mcp_deny_archive.txt) | mcp signal |
| agentRuntime | [AGENT_MAIL_RUST_VERSION_REPO_TRANSITION_PLAN.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/AGENT_MAIL_RUST_VERSION_REPO_TRANSITION_PLAN.md) | agentRuntime signal |
| agentRuntime | [AGENTS.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/fixtures/cli_help/agent_start.txt](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/fixtures/cli_help/agent_start.txt) | agentRuntime signal |
| agentRuntime | [tests/fixtures/cli_help/agent.txt](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/fixtures/cli_help/agent.txt) | agentRuntime signal |
| entrypoints | [crates/mcp-agent-mail-tools/src/lib.rs](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/crates/mcp-agent-mail-tools/src/lib.rs) | entrypoints signal |
| entrypoints | [crates/mcp-agent-mail-test-helpers/src/lib.rs](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/crates/mcp-agent-mail-test-helpers/src/lib.rs) | entrypoints signal |
| entrypoints | [crates/mcp-agent-mail-storage/src/lib.rs](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/crates/mcp-agent-mail-storage/src/lib.rs) | entrypoints signal |
| entrypoints | [crates/mcp-agent-mail-share/src/lib.rs](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/crates/mcp-agent-mail-share/src/lib.rs) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 16 | [crates/mcp-agent-mail-tools/src/lib.rs](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/crates/mcp-agent-mail-tools/src/lib.rs)<br>[crates/mcp-agent-mail-test-helpers/src/lib.rs](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/crates/mcp-agent-mail-test-helpers/src/lib.rs)<br>[crates/mcp-agent-mail-storage/src/lib.rs](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/crates/mcp-agent-mail-storage/src/lib.rs)<br>[crates/mcp-agent-mail-share/src/lib.rs](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/crates/mcp-agent-mail-share/src/lib.rs)<br>[crates/mcp-agent-mail-server/src/lib.rs](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/crates/mcp-agent-mail-server/src/lib.rs)<br>[crates/mcp-agent-mail-search-core/src/lib.rs](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/crates/mcp-agent-mail-search-core/src/lib.rs)<br>[crates/mcp-agent-mail-guard/src/lib.rs](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/crates/mcp-agent-mail-guard/src/lib.rs)<br>[crates/mcp-agent-mail-db/src/lib.rs](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/crates/mcp-agent-mail-db/src/lib.rs) |
| agentRuntime | 31 | [AGENT_MAIL_RUST_VERSION_REPO_TRANSITION_PLAN.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/AGENT_MAIL_RUST_VERSION_REPO_TRANSITION_PLAN.md)<br>[AGENTS.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/AGENTS.md)<br>[tests/fixtures/cli_help/agent_start.txt](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/fixtures/cli_help/agent_start.txt)<br>[tests/fixtures/cli_help/agent.txt](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/fixtures/cli_help/agent.txt)<br>[tests/conformance/fixtures/tool_descriptions.json](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/conformance/fixtures/tool_descriptions.json)<br>[docs/AGENT_HEALTH_SCORING.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/docs/AGENT_HEALTH_SCORING.md)<br>[docs/planning/AGENT_MAIL_RUST_VERSION_REPO_TRANSITION_PLAN.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/docs/planning/AGENT_MAIL_RUST_VERSION_REPO_TRANSITION_PLAN.md)<br>[docs/archive/agent-session-notes/CONTEXT_SETUP_LOG.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/docs/archive/agent-session-notes/CONTEXT_SETUP_LOG.md) |
| mcp | 2912 | [EXISTING_MCP_AGENT_MAIL_STRUCTURE.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/EXISTING_MCP_AGENT_MAIL_STRUCTURE.md)<br>[PLAN_TO_PORT_MCP_AGENT_MAIL_TO_RUST.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/PLAN_TO_PORT_MCP_AGENT_MAIL_TO_RUST.md)<br>[tests/fixtures/golden_snapshots/mcp_cli_mode_deny_serve.txt](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/fixtures/golden_snapshots/mcp_cli_mode_deny_serve.txt)<br>[tests/fixtures/golden_snapshots/mcp_deny_archive.txt](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/fixtures/golden_snapshots/mcp_deny_archive.txt)<br>[tests/fixtures/golden_snapshots/mcp_deny_doctor.txt](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/fixtures/golden_snapshots/mcp_deny_doctor.txt)<br>[tests/fixtures/golden_snapshots/mcp_deny_guard.txt](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/fixtures/golden_snapshots/mcp_deny_guard.txt)<br>[tests/fixtures/golden_snapshots/mcp_deny_migrate.txt](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/fixtures/golden_snapshots/mcp_deny_migrate.txt)<br>[tests/fixtures/golden_snapshots/mcp_deny_robot.txt](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/fixtures/golden_snapshots/mcp_deny_robot.txt) |
| retrieval | 16 | [tests/fixtures/corruption_corpus/recipes/valid_fk_graph.sql](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/fixtures/corruption_corpus/recipes/valid_fk_graph.sql)<br>[experimental/mcp-agent-mail-wasm/www/index.html](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/experimental/mcp-agent-mail-wasm/www/index.html)<br>[experimental/mcp-agent-mail-wasm/www/index.js](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/experimental/mcp-agent-mail-wasm/www/index.js)<br>[docs/INDEX.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/docs/INDEX.md)<br>[crates/mcp-agent-mail-tools/src/reservation_index.rs](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/crates/mcp-agent-mail-tools/src/reservation_index.rs)<br>[crates/mcp-agent-mail-storage/tests/libgit2_index_race_immunity.rs](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/crates/mcp-agent-mail-storage/tests/libgit2_index_race_immunity.rs)<br>[crates/mcp-agent-mail-share/viewer_assets/index.html](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/crates/mcp-agent-mail-share/viewer_assets/index.html)<br>[crates/mcp-agent-mail-server/templates/mail_index.html](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/crates/mcp-agent-mail-server/templates/mail_index.html) |
| spec | 31 | [PROPOSED_ARCHITECTURE.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/PROPOSED_ARCHITECTURE.md)<br>[tests/e2e/test_t16_traceability.sh](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/e2e/test_t16_traceability.sh)<br>[docs/ADR-001-dual-mode-invariants.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/docs/ADR-001-dual-mode-invariants.md)<br>[docs/ADR-002-single-binary-cli-opt-in.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/docs/ADR-002-single-binary-cli-opt-in.md)<br>[docs/ADR-003-search-v3-architecture.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/docs/ADR-003-search-v3-architecture.md)<br>[docs/DESIGN_git_lock.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/docs/DESIGN_git_lock.md)<br>[docs/PERF-archive-batch-fix-design.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/docs/PERF-archive-batch-fix-design.md)<br>[docs/SPEC-artifacts-bundle-schema.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/docs/SPEC-artifacts-bundle-schema.md) |
| eval | 615 | [beads_test_coverage.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/beads_test_coverage.md)<br>[tests/docs_drift_ci.rs](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/docs_drift_ci.rs)<br>[tests/installer/test_install_artifact_fallback.sh](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/installer/test_install_artifact_fallback.sh)<br>[tests/installer/test_install_warn_git_251.sh](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/installer/test_install_warn_git_251.sh)<br>[tests/installer/test_launchd_plist_safety.sh](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/installer/test_launchd_plist_safety.sh)<br>[tests/golden/share/bundle/file_manifest.sha256](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/golden/share/bundle/file_manifest.sha256)<br>[tests/golden/share/bundle/manifest_standard.json](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/golden/share/bundle/manifest_standard.json)<br>[tests/golden/cli/robot/thread/md.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/golden/cli/robot/thread/md.md) |
| security | 2022 | [SECURITY.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/SECURITY.md)<br>[tests/fixtures/golden_snapshots/cli_help_guard.txt](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/fixtures/golden_snapshots/cli_help_guard.txt)<br>[tests/fixtures/golden_snapshots/mcp_deny_guard.txt](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/fixtures/golden_snapshots/mcp_deny_guard.txt)<br>[tests/fixtures/cli_help/guard_check.txt](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/fixtures/cli_help/guard_check.txt)<br>[tests/fixtures/cli_help/guard.txt](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/fixtures/cli_help/guard.txt)<br>[tests/e2e/test_bearer_auth.sh](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/e2e/test_bearer_auth.sh)<br>[tests/e2e/test_contact_policy.sh](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/e2e/test_contact_policy.sh)<br>[tests/e2e/test_guard_live_mcp.sh](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/e2e/test_guard_live_mcp.sh) |
| ci | 12 | [.github/workflows/archive-fsync-matrix.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/.github/workflows/archive-fsync-matrix.yml)<br>[.github/workflows/archive-perf-gate.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/.github/workflows/archive-perf-gate.yml)<br>[.github/workflows/atc-perf-gate.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/.github/workflows/atc-perf-gate.yml)<br>[.github/workflows/ci.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/.github/workflows/ci.yml)<br>[.github/workflows/conformance-fixture-regen.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/.github/workflows/conformance-fixture-regen.yml)<br>[.github/workflows/dist.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/.github/workflows/dist.yml)<br>[.github/workflows/docker.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/.github/workflows/docker.yml)<br>[.github/workflows/notify-acfs.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/.github/workflows/notify-acfs.yml) |
| container | 2 | [Dockerfile](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/Dockerfile)<br>[tests/e2e/Dockerfile.migration](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/e2e/Dockerfile.migration) |
| instruction | 1 | [AGENTS.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/AGENTS.md) |
| docs | 124 | [README.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/README.md)<br>[tests/fixtures/reservation_regression/README.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/fixtures/reservation_regression/README.md)<br>[tests/fixtures/corruption_corpus/README.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/fixtures/corruption_corpus/README.md)<br>[experimental/README.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/experimental/README.md)<br>[docs/ADR-001-dual-mode-invariants.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/docs/ADR-001-dual-mode-invariants.md)<br>[docs/ADR-002-single-binary-cli-opt-in.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/docs/ADR-002-single-binary-cli-opt-in.md)<br>[docs/ADR-003-search-v3-architecture.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/docs/ADR-003-search-v3-architecture.md)<br>[docs/AGENT_HEALTH_SCORING.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/docs/AGENT_HEALTH_SCORING.md) |
| config | 20 | [Cargo.lock](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/Cargo.lock)<br>[Cargo.toml](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/Cargo.toml)<br>[experimental/mcp-agent-mail-wasm/Cargo.toml](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/experimental/mcp-agent-mail-wasm/Cargo.toml)<br>[crates/mcp-agent-mail-tools/Cargo.toml](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/crates/mcp-agent-mail-tools/Cargo.toml)<br>[crates/mcp-agent-mail-test-helpers/Cargo.toml](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/crates/mcp-agent-mail-test-helpers/Cargo.toml)<br>[crates/mcp-agent-mail-storage/Cargo.toml](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/crates/mcp-agent-mail-storage/Cargo.toml)<br>[crates/mcp-agent-mail-storage/fuzz/Cargo.lock](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/crates/mcp-agent-mail-storage/fuzz/Cargo.lock)<br>[crates/mcp-agent-mail-storage/fuzz/Cargo.toml](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/crates/mcp-agent-mail-storage/fuzz/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 615 | [beads_test_coverage.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/beads_test_coverage.md)<br>[tests/docs_drift_ci.rs](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/docs_drift_ci.rs)<br>[tests/installer/test_install_artifact_fallback.sh](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/installer/test_install_artifact_fallback.sh)<br>[tests/installer/test_install_warn_git_251.sh](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/installer/test_install_warn_git_251.sh)<br>[tests/installer/test_launchd_plist_safety.sh](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/installer/test_launchd_plist_safety.sh)<br>[tests/golden/share/bundle/file_manifest.sha256](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/golden/share/bundle/file_manifest.sha256) |
| CI workflows | 12 | [.github/workflows/archive-fsync-matrix.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/.github/workflows/archive-fsync-matrix.yml)<br>[.github/workflows/archive-perf-gate.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/.github/workflows/archive-perf-gate.yml)<br>[.github/workflows/atc-perf-gate.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/.github/workflows/atc-perf-gate.yml)<br>[.github/workflows/ci.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/.github/workflows/ci.yml)<br>[.github/workflows/conformance-fixture-regen.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/.github/workflows/conformance-fixture-regen.yml)<br>[.github/workflows/dist.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/.github/workflows/dist.yml) |
| Containers / deploy | 2 | [Dockerfile](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/Dockerfile)<br>[tests/e2e/Dockerfile.migration](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/e2e/Dockerfile.migration) |
| Security / policy | 2022 | [SECURITY.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/SECURITY.md)<br>[tests/fixtures/golden_snapshots/cli_help_guard.txt](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/fixtures/golden_snapshots/cli_help_guard.txt)<br>[tests/fixtures/golden_snapshots/mcp_deny_guard.txt](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/fixtures/golden_snapshots/mcp_deny_guard.txt)<br>[tests/fixtures/cli_help/guard_check.txt](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/fixtures/cli_help/guard_check.txt)<br>[tests/fixtures/cli_help/guard.txt](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/fixtures/cli_help/guard.txt)<br>[tests/e2e/test_bearer_auth.sh](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/e2e/test_bearer_auth.sh) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `EXISTING_MCP_AGENT_MAIL_STRUCTURE.md`, `PLAN_TO_PORT_MCP_AGENT_MAIL_TO_RUST.md`, `tests/fixtures/golden_snapshots/mcp_cli_mode_deny_serve.txt`.
2. Trace execution through entrypoints: `crates/mcp-agent-mail-tools/src/lib.rs`, `crates/mcp-agent-mail-test-helpers/src/lib.rs`, `crates/mcp-agent-mail-storage/src/lib.rs`.
3. Map agent/tool runtime through: `AGENT_MAIL_RUST_VERSION_REPO_TRANSITION_PLAN.md`, `AGENTS.md`, `tests/fixtures/cli_help/agent_start.txt`.
4. Inspect retrieval/memory/indexing through: `tests/fixtures/corruption_corpus/recipes/valid_fk_graph.sql`, `experimental/mcp-agent-mail-wasm/www/index.html`, `experimental/mcp-agent-mail-wasm/www/index.js`.
5. Verify behavior through test/eval files: `beads_test_coverage.md`, `tests/docs_drift_ci.rs`, `tests/installer/test_install_artifact_fallback.sh`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Rust MCP server for multi agent coordination 34 tools, Git backed archive, SQLite indexing, advisory file locks, and an . 핵심 구조 신호는 Rust, Cargo.toml, Dockerfile, README.md, AGENTS.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
