# Dicklesworthstone/mcp_agent_mail_rust 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Rust MCP server for multi-agent coordination: 34 tools, Git-backed archive, SQLite indexing, advisory file locks, and an interactive TUI console

## 요약

- 조사 단위: `sources/Dicklesworthstone__mcp_agent_mail_rust` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 3,433 files, 168 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=EXISTING_MCP_AGENT_MAIL_STRUCTURE.md, PLAN_TO_PORT_MCP_AGENT_MAIL_TO_RUST.md, tests/fixtures/golden_snapshots/mcp_cli_mode_deny_serve.txt이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | Dicklesworthstone/mcp_agent_mail_rust |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 89 |
| Forks | 23 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Dicklesworthstone__mcp_agent_mail_rust](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust) |
| 기존 보고서 | [reports/global-trending/repositories/Dicklesworthstone__mcp_agent_mail_rust.md](../../../global-trending/repositories/Dicklesworthstone__mcp_agent_mail_rust.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 3433 / 168 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .beads, .cargo, .github, benches, crates, docs, experimental, refactor, scripts, tests |
| 상위 확장자 | (none): 2198, .rs: 476, .sh: 208, .md: 155, .json: 116, .snap: 100, .txt: 83, .html: 22, .toml: 21, .sql: 12, .yml: 12, .py: 7 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 615 | [beads_test_coverage.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/beads_test_coverage.md)<br>[tests/docs_drift_ci.rs](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/docs_drift_ci.rs)<br>[tests/installer/test_install_artifact_fallback.sh](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/installer/test_install_artifact_fallback.sh)<br>[tests/installer/test_install_warn_git_251.sh](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/installer/test_install_warn_git_251.sh)<br>[tests/installer/test_launchd_plist_safety.sh](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/installer/test_launchd_plist_safety.sh)<br>[tests/golden/share/bundle/file_manifest.sha256](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/golden/share/bundle/file_manifest.sha256) |
| CI workflow | 12 | [.github/workflows/archive-fsync-matrix.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/.github/workflows/archive-fsync-matrix.yml)<br>[.github/workflows/archive-perf-gate.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/.github/workflows/archive-perf-gate.yml)<br>[.github/workflows/atc-perf-gate.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/.github/workflows/atc-perf-gate.yml)<br>[.github/workflows/ci.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/.github/workflows/ci.yml)<br>[.github/workflows/conformance-fixture-regen.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/.github/workflows/conformance-fixture-regen.yml)<br>[.github/workflows/dist.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/.github/workflows/dist.yml) |
| 컨테이너/배포 | 2 | [Dockerfile](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/Dockerfile)<br>[tests/e2e/Dockerfile.migration](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/e2e/Dockerfile.migration) |
| 보안/정책 | 2022 | [SECURITY.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/SECURITY.md)<br>[tests/fixtures/golden_snapshots/cli_help_guard.txt](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/fixtures/golden_snapshots/cli_help_guard.txt)<br>[tests/fixtures/golden_snapshots/mcp_deny_guard.txt](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/fixtures/golden_snapshots/mcp_deny_guard.txt)<br>[tests/fixtures/cli_help/guard_check.txt](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/fixtures/cli_help/guard_check.txt)<br>[tests/fixtures/cli_help/guard.txt](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/fixtures/cli_help/guard.txt)<br>[tests/e2e/test_bearer_auth.sh](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/tests/e2e/test_bearer_auth.sh) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/Dicklesworthstone__mcp_agent_mail_rust/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `EXISTING_MCP_AGENT_MAIL_STRUCTURE.md`, `PLAN_TO_PORT_MCP_AGENT_MAIL_TO_RUST.md`, `tests/fixtures/golden_snapshots/mcp_cli_mode_deny_serve.txt`.
2. entrypoint를 따라 실행 흐름 확인: `crates/mcp-agent-mail-tools/src/lib.rs`, `crates/mcp-agent-mail-test-helpers/src/lib.rs`, `crates/mcp-agent-mail-storage/src/lib.rs`.
3. agent/tool runtime 매핑: `AGENT_MAIL_RUST_VERSION_REPO_TRANSITION_PLAN.md`, `AGENTS.md`, `tests/fixtures/cli_help/agent_start.txt`.
4. retrieval/memory/indexing 확인: `tests/fixtures/corruption_corpus/recipes/valid_fk_graph.sql`, `experimental/mcp-agent-mail-wasm/www/index.html`, `experimental/mcp-agent-mail-wasm/www/index.js`.
5. test/eval 파일로 동작 검증: `beads_test_coverage.md`, `tests/docs_drift_ci.rs`, `tests/installer/test_install_artifact_fallback.sh`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Rust MCP server for multi agent coordination 34 tools, Git backed archive, SQLite indexing, advisory file locks, and an . 핵심 구조 신호는 Rust, Cargo.toml, Dockerfile, README.md, AGENTS.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
