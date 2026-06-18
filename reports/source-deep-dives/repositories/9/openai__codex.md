# openai/codex Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 4880 files, 715 directories.

## 요약

- 조사 단위: `sources/openai__codex` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 4,827 files, 702 directories, depth score 138, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=codex-rs/utils/plugins/src/mcp_connector.rs, codex-rs/tui/src/history_cell/mcp.rs, codex-rs/tui/src/history_cell/snapshots/codex_tui__history_cell__tests__active_mcp_tool_call_snapshot.snap이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | openai/codex |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 91749 |
| Forks | 13558 |
| License | none |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/openai__codex](../../../../sources/openai__codex) |
| Existing report | [reports/global-trending/repositories/openai__codex.md](../../../global-trending/repositories/openai__codex.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 4827 / 702 |
| Max observed depth | 10 |
| Top directories | .codex, .devcontainer, .github, codex-cli, codex-rs, docs, patches, scripts, sdk, third_party, tools |
| Top extensions | .rs: 2152, .ts: 580, .snap: 543, .txt: 442, .json: 301, .md: 165, .toml: 144, .bazel: 136, .py: 125, .sql: 39, .yml: 37, (none): 30 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 20 |
| .codex | top-level component | 1 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| codex-cli | top-level component | 1 |
| codex-rs | top-level component | 1 |
| patches | top-level component | 1 |
| scripts | top-level component | 1 |
| sdk | top-level component | 1 |
| third_party | top-level component | 1 |
| tools | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| quality | package.json | format | prettier --check *.json *.md docs/*.md .github/workflows/*.yml **/*.js |
| quality | package.json | format:fix | prettier --write *.json *.md docs/*.md .github/workflows/*.yml **/*.js |
| utility | package.json | write-hooks-schema | cargo run --manifest-path ./codex-rs/Cargo.toml -p codex-hooks --bin write_hooks_schema_fixtures |


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
| mcp | [codex-rs/utils/plugins/src/mcp_connector.rs](../../../../sources/openai__codex/codex-rs/utils/plugins/src/mcp_connector.rs) | mcp signal |
| mcp | [codex-rs/tui/src/history_cell/mcp.rs](../../../../sources/openai__codex/codex-rs/tui/src/history_cell/mcp.rs) | mcp signal |
| mcp | [codex-rs/tui/src/history_cell/snapshots/codex_tui__history_cell__tests__active_mcp_tool_call_snapshot.snap](../../../../sources/openai__codex/codex-rs/tui/src/history_cell/snapshots/codex_tui__history_cell__tests__active_mcp_tool_call_snapshot.snap) | mcp signal |
| mcp | [codex-rs/tui/src/history_cell/snapshots/codex_tui__history_cell__tests__completed_mcp_tool_call_error_snapshot.snap](../../../../sources/openai__codex/codex-rs/tui/src/history_cell/snapshots/codex_tui__history_cell__tests__completed_mcp_tool_call_error_snapshot.snap) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/openai__codex/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tools/argument-comment-lint/.gitignore](../../../../sources/openai__codex/tools/argument-comment-lint/.gitignore) | agentRuntime signal |
| agentRuntime | [tools/argument-comment-lint/argument-comment-lint](../../../../sources/openai__codex/tools/argument-comment-lint/argument-comment-lint) | agentRuntime signal |
| agentRuntime | [tools/argument-comment-lint/BUILD.bazel](../../../../sources/openai__codex/tools/argument-comment-lint/BUILD.bazel) | agentRuntime signal |
| entrypoints | [tools/argument-comment-lint/src/bin/argument-comment-lint.rs](../../../../sources/openai__codex/tools/argument-comment-lint/src/bin/argument-comment-lint.rs) | entrypoints signal |
| entrypoints | [sdk/typescript/src/index.ts](../../../../sources/openai__codex/sdk/typescript/src/index.ts) | entrypoints signal |
| entrypoints | [codex-rs/windows-sandbox-rs/src/bin/setup_main/main.rs](../../../../sources/openai__codex/codex-rs/windows-sandbox-rs/src/bin/setup_main/main.rs) | entrypoints signal |
| entrypoints | [codex-rs/windows-sandbox-rs/src/bin/setup_main/win.rs](../../../../sources/openai__codex/codex-rs/windows-sandbox-rs/src/bin/setup_main/win.rs) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 50 | [tools/argument-comment-lint/src/bin/argument-comment-lint.rs](../../../../sources/openai__codex/tools/argument-comment-lint/src/bin/argument-comment-lint.rs)<br>[sdk/typescript/src/index.ts](../../../../sources/openai__codex/sdk/typescript/src/index.ts)<br>[codex-rs/windows-sandbox-rs/src/bin/setup_main/main.rs](../../../../sources/openai__codex/codex-rs/windows-sandbox-rs/src/bin/setup_main/main.rs)<br>[codex-rs/windows-sandbox-rs/src/bin/setup_main/win.rs](../../../../sources/openai__codex/codex-rs/windows-sandbox-rs/src/bin/setup_main/win.rs)<br>[codex-rs/windows-sandbox-rs/src/bin/setup_main/win/firewall.rs](../../../../sources/openai__codex/codex-rs/windows-sandbox-rs/src/bin/setup_main/win/firewall.rs)<br>[codex-rs/windows-sandbox-rs/src/bin/setup_main/win/read_acl_mutex.rs](../../../../sources/openai__codex/codex-rs/windows-sandbox-rs/src/bin/setup_main/win/read_acl_mutex.rs)<br>[codex-rs/windows-sandbox-rs/src/bin/setup_main/win/sandbox_users.rs](../../../../sources/openai__codex/codex-rs/windows-sandbox-rs/src/bin/setup_main/win/sandbox_users.rs)<br>[codex-rs/windows-sandbox-rs/src/bin/setup_main/win/setup_runtime_bin.rs](../../../../sources/openai__codex/codex-rs/windows-sandbox-rs/src/bin/setup_main/win/setup_runtime_bin.rs) |
| agentRuntime | 481 | [AGENTS.md](../../../../sources/openai__codex/AGENTS.md)<br>[tools/argument-comment-lint/.gitignore](../../../../sources/openai__codex/tools/argument-comment-lint/.gitignore)<br>[tools/argument-comment-lint/argument-comment-lint](../../../../sources/openai__codex/tools/argument-comment-lint/argument-comment-lint)<br>[tools/argument-comment-lint/BUILD.bazel](../../../../sources/openai__codex/tools/argument-comment-lint/BUILD.bazel)<br>[tools/argument-comment-lint/Cargo.lock](../../../../sources/openai__codex/tools/argument-comment-lint/Cargo.lock)<br>[tools/argument-comment-lint/Cargo.toml](../../../../sources/openai__codex/tools/argument-comment-lint/Cargo.toml)<br>[tools/argument-comment-lint/driver.rs](../../../../sources/openai__codex/tools/argument-comment-lint/driver.rs)<br>[tools/argument-comment-lint/lint_aspect.bzl](../../../../sources/openai__codex/tools/argument-comment-lint/lint_aspect.bzl) |
| mcp | 106 | [codex-rs/utils/plugins/src/mcp_connector.rs](../../../../sources/openai__codex/codex-rs/utils/plugins/src/mcp_connector.rs)<br>[codex-rs/tui/src/history_cell/mcp.rs](../../../../sources/openai__codex/codex-rs/tui/src/history_cell/mcp.rs)<br>[codex-rs/tui/src/history_cell/snapshots/codex_tui__history_cell__tests__active_mcp_tool_call_snapshot.snap](../../../../sources/openai__codex/codex-rs/tui/src/history_cell/snapshots/codex_tui__history_cell__tests__active_mcp_tool_call_snapshot.snap)<br>[codex-rs/tui/src/history_cell/snapshots/codex_tui__history_cell__tests__completed_mcp_tool_call_error_snapshot.snap](../../../../sources/openai__codex/codex-rs/tui/src/history_cell/snapshots/codex_tui__history_cell__tests__completed_mcp_tool_call_error_snapshot.snap)<br>[codex-rs/tui/src/history_cell/snapshots/codex_tui__history_cell__tests__completed_mcp_tool_call_multiple_outputs_inline_snapshot.snap](../../../../sources/openai__codex/codex-rs/tui/src/history_cell/snapshots/codex_tui__history_cell__tests__completed_mcp_tool_call_multiple_outputs_inline_snapshot.snap)<br>[codex-rs/tui/src/history_cell/snapshots/codex_tui__history_cell__tests__completed_mcp_tool_call_multiple_outputs_snapshot.snap](../../../../sources/openai__codex/codex-rs/tui/src/history_cell/snapshots/codex_tui__history_cell__tests__completed_mcp_tool_call_multiple_outputs_snapshot.snap)<br>[codex-rs/tui/src/history_cell/snapshots/codex_tui__history_cell__tests__completed_mcp_tool_call_success_snapshot.snap](../../../../sources/openai__codex/codex-rs/tui/src/history_cell/snapshots/codex_tui__history_cell__tests__completed_mcp_tool_call_success_snapshot.snap)<br>[codex-rs/tui/src/history_cell/snapshots/codex_tui__history_cell__tests__completed_mcp_tool_call_wrapped_outputs_snapshot.snap](../../../../sources/openai__codex/codex-rs/tui/src/history_cell/snapshots/codex_tui__history_cell__tests__completed_mcp_tool_call_wrapped_outputs_snapshot.snap) |
| retrieval | 25 | [sdk/typescript/src/index.ts](../../../../sources/openai__codex/sdk/typescript/src/index.ts)<br>[codex-rs/tui/src/history_cell/snapshots/codex_tui__history_cell__tests__ps_output_chunk_leading_whitespace_snapshot.snap](../../../../sources/openai__codex/codex-rs/tui/src/history_cell/snapshots/codex_tui__history_cell__tests__ps_output_chunk_leading_whitespace_snapshot.snap)<br>[codex-rs/thread-store/src/in_memory.rs](../../../../sources/openai__codex/codex-rs/thread-store/src/in_memory.rs)<br>[codex-rs/state/src/model/graph.rs](../../../../sources/openai__codex/codex-rs/state/src/model/graph.rs)<br>[codex-rs/state/migrations/0016_memory_usage.sql](../../../../sources/openai__codex/codex-rs/state/migrations/0016_memory_usage.sql)<br>[codex-rs/state/migrations/0035_drop_memory_tables.sql](../../../../sources/openai__codex/codex-rs/state/migrations/0035_drop_memory_tables.sql)<br>[codex-rs/state/memory_migrations/0001_memories.sql](../../../../sources/openai__codex/codex-rs/state/memory_migrations/0001_memories.sql)<br>[codex-rs/rollout/src/session_index_tests.rs](../../../../sources/openai__codex/codex-rs/rollout/src/session_index_tests.rs) |
| spec | 42 | [codex-rs/tools/src/tool_spec_tests.rs](../../../../sources/openai__codex/codex-rs/tools/src/tool_spec_tests.rs)<br>[codex-rs/tools/src/tool_spec.rs](../../../../sources/openai__codex/codex-rs/tools/src/tool_spec.rs)<br>[codex-rs/skills/src/assets/samples/plugin-creator/references/plugin-json-spec.md](../../../../sources/openai__codex/codex-rs/skills/src/assets/samples/plugin-creator/references/plugin-json-spec.md)<br>[codex-rs/ext/goal/src/spec.rs](../../../../sources/openai__codex/codex-rs/ext/goal/src/spec.rs)<br>[codex-rs/core/src/tools/hosted_spec_tests.rs](../../../../sources/openai__codex/codex-rs/core/src/tools/hosted_spec_tests.rs)<br>[codex-rs/core/src/tools/hosted_spec.rs](../../../../sources/openai__codex/codex-rs/core/src/tools/hosted_spec.rs)<br>[codex-rs/core/src/tools/spec_plan_tests.rs](../../../../sources/openai__codex/codex-rs/core/src/tools/spec_plan_tests.rs)<br>[codex-rs/core/src/tools/spec_plan.rs](../../../../sources/openai__codex/codex-rs/core/src/tools/spec_plan.rs) |
| eval | 1334 | [workspace_root_test_launcher.bat.tpl](../../../../sources/openai__codex/workspace_root_test_launcher.bat.tpl)<br>[workspace_root_test_launcher.sh.tpl](../../../../sources/openai__codex/workspace_root_test_launcher.sh.tpl)<br>[tools/argument-comment-lint/test_wrapper_common.py](../../../../sources/openai__codex/tools/argument-comment-lint/test_wrapper_common.py)<br>[sdk/typescript/tests/abort.test.ts](../../../../sources/openai__codex/sdk/typescript/tests/abort.test.ts)<br>[sdk/typescript/tests/codexExecSpy.ts](../../../../sources/openai__codex/sdk/typescript/tests/codexExecSpy.ts)<br>[sdk/typescript/tests/exec.test.ts](../../../../sources/openai__codex/sdk/typescript/tests/exec.test.ts)<br>[sdk/typescript/tests/responsesProxy.ts](../../../../sources/openai__codex/sdk/typescript/tests/responsesProxy.ts)<br>[sdk/typescript/tests/run.test.ts](../../../../sources/openai__codex/sdk/typescript/tests/run.test.ts) |
| security | 206 | [SECURITY.md](../../../../sources/openai__codex/SECURITY.md)<br>[sdk/python/src/openai_codex/_sandbox.py](../../../../sources/openai__codex/sdk/python/src/openai_codex/_sandbox.py)<br>[docs/sandbox.md](../../../../sources/openai__codex/docs/sandbox.md)<br>[codex-rs/windows-sandbox-rs/BUILD.bazel](../../../../sources/openai__codex/codex-rs/windows-sandbox-rs/BUILD.bazel)<br>[codex-rs/windows-sandbox-rs/build.rs](../../../../sources/openai__codex/codex-rs/windows-sandbox-rs/build.rs)<br>[codex-rs/windows-sandbox-rs/Cargo.toml](../../../../sources/openai__codex/codex-rs/windows-sandbox-rs/Cargo.toml)<br>[codex-rs/windows-sandbox-rs/codex-windows-sandbox-setup.manifest](../../../../sources/openai__codex/codex-rs/windows-sandbox-rs/codex-windows-sandbox-setup.manifest)<br>[codex-rs/windows-sandbox-rs/sandbox_smoketests.py](../../../../sources/openai__codex/codex-rs/windows-sandbox-rs/sandbox_smoketests.py) |
| ci | 27 | [codex-rs/.github/workflows/cargo-audit.yml](../../../../sources/openai__codex/codex-rs/.github/workflows/cargo-audit.yml)<br>[.github/workflows/bazel.yml](../../../../sources/openai__codex/.github/workflows/bazel.yml)<br>[.github/workflows/blob-size-policy.yml](../../../../sources/openai__codex/.github/workflows/blob-size-policy.yml)<br>[.github/workflows/cargo-deny.yml](../../../../sources/openai__codex/.github/workflows/cargo-deny.yml)<br>[.github/workflows/ci.yml](../../../../sources/openai__codex/.github/workflows/ci.yml)<br>[.github/workflows/cla.yml](../../../../sources/openai__codex/.github/workflows/cla.yml)<br>[.github/workflows/close-stale-contributor-prs.yml](../../../../sources/openai__codex/.github/workflows/close-stale-contributor-prs.yml)<br>[.github/workflows/codespell.yml](../../../../sources/openai__codex/.github/workflows/codespell.yml) |
| container | 3 | [.github/workflows/Dockerfile.bazel](../../../../sources/openai__codex/.github/workflows/Dockerfile.bazel)<br>[.devcontainer/Dockerfile](../../../../sources/openai__codex/.devcontainer/Dockerfile)<br>[.devcontainer/Dockerfile.secure](../../../../sources/openai__codex/.devcontainer/Dockerfile.secure) |
| instruction | 26 | [AGENTS.md](../../../../sources/openai__codex/AGENTS.md)<br>[codex-rs/tui/src/bottom_pane/AGENTS.md](../../../../sources/openai__codex/codex-rs/tui/src/bottom_pane/AGENTS.md)<br>[.codex/skills/update-v8-version/SKILL.md](../../../../sources/openai__codex/.codex/skills/update-v8-version/SKILL.md)<br>[.codex/skills/update-v8-version/agents/openai.yaml](../../../../sources/openai__codex/.codex/skills/update-v8-version/agents/openai.yaml)<br>[.codex/skills/test-tui/SKILL.md](../../../../sources/openai__codex/.codex/skills/test-tui/SKILL.md)<br>[.codex/skills/remote-tests/SKILL.md](../../../../sources/openai__codex/.codex/skills/remote-tests/SKILL.md)<br>[.codex/skills/pushing-ci-changes/SKILL.md](../../../../sources/openai__codex/.codex/skills/pushing-ci-changes/SKILL.md)<br>[.codex/skills/codex-pr-body/SKILL.md](../../../../sources/openai__codex/.codex/skills/codex-pr-body/SKILL.md) |
| docs | 68 | [README.md](../../../../sources/openai__codex/README.md)<br>[tools/argument-comment-lint/README.md](../../../../sources/openai__codex/tools/argument-comment-lint/README.md)<br>[third_party/v8/README.md](../../../../sources/openai__codex/third_party/v8/README.md)<br>[sdk/typescript/README.md](../../../../sources/openai__codex/sdk/typescript/README.md)<br>[sdk/python-runtime/README.md](../../../../sources/openai__codex/sdk/python-runtime/README.md)<br>[sdk/python/README.md](../../../../sources/openai__codex/sdk/python/README.md)<br>[sdk/python/examples/README.md](../../../../sources/openai__codex/sdk/python/examples/README.md)<br>[sdk/python/docs/api-reference.md](../../../../sources/openai__codex/sdk/python/docs/api-reference.md) |
| config | 142 | [package.json](../../../../sources/openai__codex/package.json)<br>[pnpm-workspace.yaml](../../../../sources/openai__codex/pnpm-workspace.yaml)<br>[tools/argument-comment-lint/Cargo.lock](../../../../sources/openai__codex/tools/argument-comment-lint/Cargo.lock)<br>[tools/argument-comment-lint/Cargo.toml](../../../../sources/openai__codex/tools/argument-comment-lint/Cargo.toml)<br>[sdk/typescript/package.json](../../../../sources/openai__codex/sdk/typescript/package.json)<br>[sdk/typescript/tsconfig.json](../../../../sources/openai__codex/sdk/typescript/tsconfig.json)<br>[sdk/python-runtime/pyproject.toml](../../../../sources/openai__codex/sdk/python-runtime/pyproject.toml)<br>[sdk/python-runtime/uv.lock](../../../../sources/openai__codex/sdk/python-runtime/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1334 | [workspace_root_test_launcher.bat.tpl](../../../../sources/openai__codex/workspace_root_test_launcher.bat.tpl)<br>[workspace_root_test_launcher.sh.tpl](../../../../sources/openai__codex/workspace_root_test_launcher.sh.tpl)<br>[tools/argument-comment-lint/test_wrapper_common.py](../../../../sources/openai__codex/tools/argument-comment-lint/test_wrapper_common.py)<br>[sdk/typescript/tests/abort.test.ts](../../../../sources/openai__codex/sdk/typescript/tests/abort.test.ts)<br>[sdk/typescript/tests/codexExecSpy.ts](../../../../sources/openai__codex/sdk/typescript/tests/codexExecSpy.ts)<br>[sdk/typescript/tests/exec.test.ts](../../../../sources/openai__codex/sdk/typescript/tests/exec.test.ts) |
| CI workflows | 27 | [codex-rs/.github/workflows/cargo-audit.yml](../../../../sources/openai__codex/codex-rs/.github/workflows/cargo-audit.yml)<br>[.github/workflows/bazel.yml](../../../../sources/openai__codex/.github/workflows/bazel.yml)<br>[.github/workflows/blob-size-policy.yml](../../../../sources/openai__codex/.github/workflows/blob-size-policy.yml)<br>[.github/workflows/cargo-deny.yml](../../../../sources/openai__codex/.github/workflows/cargo-deny.yml)<br>[.github/workflows/ci.yml](../../../../sources/openai__codex/.github/workflows/ci.yml)<br>[.github/workflows/cla.yml](../../../../sources/openai__codex/.github/workflows/cla.yml) |
| Containers / deploy | 3 | [.github/workflows/Dockerfile.bazel](../../../../sources/openai__codex/.github/workflows/Dockerfile.bazel)<br>[.devcontainer/Dockerfile](../../../../sources/openai__codex/.devcontainer/Dockerfile)<br>[.devcontainer/Dockerfile.secure](../../../../sources/openai__codex/.devcontainer/Dockerfile.secure) |
| Security / policy | 206 | [SECURITY.md](../../../../sources/openai__codex/SECURITY.md)<br>[sdk/python/src/openai_codex/_sandbox.py](../../../../sources/openai__codex/sdk/python/src/openai_codex/_sandbox.py)<br>[docs/sandbox.md](../../../../sources/openai__codex/docs/sandbox.md)<br>[codex-rs/windows-sandbox-rs/BUILD.bazel](../../../../sources/openai__codex/codex-rs/windows-sandbox-rs/BUILD.bazel)<br>[codex-rs/windows-sandbox-rs/build.rs](../../../../sources/openai__codex/codex-rs/windows-sandbox-rs/build.rs)<br>[codex-rs/windows-sandbox-rs/Cargo.toml](../../../../sources/openai__codex/codex-rs/windows-sandbox-rs/Cargo.toml) |
| Agent instructions | 26 | [AGENTS.md](../../../../sources/openai__codex/AGENTS.md)<br>[codex-rs/tui/src/bottom_pane/AGENTS.md](../../../../sources/openai__codex/codex-rs/tui/src/bottom_pane/AGENTS.md)<br>[.codex/skills/update-v8-version/SKILL.md](../../../../sources/openai__codex/.codex/skills/update-v8-version/SKILL.md)<br>[.codex/skills/update-v8-version/agents/openai.yaml](../../../../sources/openai__codex/.codex/skills/update-v8-version/agents/openai.yaml)<br>[.codex/skills/test-tui/SKILL.md](../../../../sources/openai__codex/.codex/skills/test-tui/SKILL.md)<br>[.codex/skills/remote-tests/SKILL.md](../../../../sources/openai__codex/.codex/skills/remote-tests/SKILL.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `codex-rs/utils/plugins/src/mcp_connector.rs`, `codex-rs/tui/src/history_cell/mcp.rs`, `codex-rs/tui/src/history_cell/snapshots/codex_tui__history_cell__tests__active_mcp_tool_call_snapshot.snap`.
2. Trace execution through entrypoints: `tools/argument-comment-lint/src/bin/argument-comment-lint.rs`, `sdk/typescript/src/index.ts`, `codex-rs/windows-sandbox-rs/src/bin/setup_main/main.rs`.
3. Map agent/tool runtime through: `AGENTS.md`, `tools/argument-comment-lint/.gitignore`, `tools/argument-comment-lint/argument-comment-lint`.
4. Inspect retrieval/memory/indexing through: `sdk/typescript/src/index.ts`, `codex-rs/tui/src/history_cell/snapshots/codex_tui__history_cell__tests__ps_output_chunk_leading_whitespace_snapshot.snap`, `codex-rs/thread-store/src/in_memory.rs`.
5. Verify behavior through test/eval files: `workspace_root_test_launcher.bat.tpl`, `workspace_root_test_launcher.sh.tpl`, `tools/argument-comment-lint/test_wrapper_common.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 4880 files, 715 directories.. 핵심 구조 신호는 Rust, package.json, README.md, AGENTS.md, LICENSE, tests이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
