# zed-industries/zed Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Code at the speed of thought – Zed is a high-performance, multiplayer code editor from the creators of Atom and Tree-sitter.

## 요약

- 조사 단위: `sources/zed-industries__zed` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 3,833 files, 849 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=tooling/xtask/src/main.rs, tooling/perf/src/main.rs, script/update_top_ranking_issues/main.py이고, 의존성 단서는 anthropic, ollama, llama, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | zed-industries/zed |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | global |
| Language | Rust |
| Stars | 85449 |
| Forks | 9119 |
| License | NOASSERTION |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/zed-industries__zed](../../../../sources/zed-industries__zed) |
| Existing report | [reports/global-trending/repositories/zed-industries__zed.md](../../../global-trending/repositories/zed-industries__zed.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 3833 / 849 |
| Max observed depth | 8 |
| Top directories | .agents, .cargo, .cloudflare, .config, .factory, .github, .zed, assets, ci, crates, docs, extensions, legal, nix, script, tooling |
| Top extensions | .rs: 1846, .svg: 413, .json: 361, .toml: 296, .md: 271, .scm: 149, (none): 118, .wit: 77, .yml: 55, .txt: 27, .proto: 25, .nix: 16 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 53 |
| crates/sandbox | crates workspace | 14 |
| crates/vim | crates workspace | 12 |
| crates/project | crates workspace | 9 |
| crates/collab | crates workspace | 8 |
| crates/settings_ui | crates workspace | 6 |
| crates/zed | crates workspace | 5 |
| crates/ui | crates workspace | 4 |
| crates/eval_cli | crates workspace | 3 |
| crates/workspace | crates workspace | 3 |
| crates/worktree | crates workspace | 3 |
| crates/cli | crates workspace | 2 |
| crates/edit_prediction_cli | crates workspace | 2 |
| crates/gpui | crates workspace | 2 |
| crates/gpui_web | crates workspace | 2 |
| crates/oauth_callback_server | crates workspace | 2 |
| crates/remote_server | crates workspace | 2 |
| crates/worktree_benchmarks | crates workspace | 2 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | anthropic |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | ollama, llama |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [tooling/xtask/src/main.rs](../../../../sources/zed-industries__zed/tooling/xtask/src/main.rs) | entrypoints signal |
| entrypoints | [tooling/perf/src/main.rs](../../../../sources/zed-industries__zed/tooling/perf/src/main.rs) | entrypoints signal |
| entrypoints | [script/update_top_ranking_issues/main.py](../../../../sources/zed-industries__zed/script/update_top_ranking_issues/main.py) | entrypoints signal |
| entrypoints | [crates/ztracing_macro/src/lib.rs](../../../../sources/zed-industries__zed/crates/ztracing_macro/src/lib.rs) | entrypoints signal |
| config | [Cargo.lock](../../../../sources/zed-industries__zed/Cargo.lock) | config signal |
| config | [Cargo.toml](../../../../sources/zed-industries__zed/Cargo.toml) | config signal |
| config | [tooling/xtask/Cargo.toml](../../../../sources/zed-industries__zed/tooling/xtask/Cargo.toml) | config signal |
| config | [tooling/perf/Cargo.toml](../../../../sources/zed-industries__zed/tooling/perf/Cargo.toml) | config signal |
| ci | [ci/Dockerfile.namespace](../../../../sources/zed-industries__zed/ci/Dockerfile.namespace) | ci signal |
| ci | [.github/workflows/add_commented_closed_issue_to_project.yml](../../../../sources/zed-industries__zed/.github/workflows/add_commented_closed_issue_to_project.yml) | ci signal |
| ci | [.github/workflows/after_release.yml](../../../../sources/zed-industries__zed/.github/workflows/after_release.yml) | ci signal |
| ci | [.github/workflows/autofix_pr.yml](../../../../sources/zed-industries__zed/.github/workflows/autofix_pr.yml) | ci signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 38 | [tooling/xtask/src/main.rs](../../../../sources/zed-industries__zed/tooling/xtask/src/main.rs)<br>[tooling/perf/src/main.rs](../../../../sources/zed-industries__zed/tooling/perf/src/main.rs)<br>[script/update_top_ranking_issues/main.py](../../../../sources/zed-industries__zed/script/update_top_ranking_issues/main.py)<br>[crates/ztracing_macro/src/lib.rs](../../../../sources/zed-industries__zed/crates/ztracing_macro/src/lib.rs)<br>[crates/ztracing/src/lib.rs](../../../../sources/zed-industries__zed/crates/ztracing/src/lib.rs)<br>[crates/zed_actions/src/lib.rs](../../../../sources/zed-industries__zed/crates/zed_actions/src/lib.rs)<br>[crates/zed/src/main.rs](../../../../sources/zed-industries__zed/crates/zed/src/main.rs)<br>[crates/zed/resources/windows/bin/x64/OpenConsole.exe](../../../../sources/zed-industries__zed/crates/zed/resources/windows/bin/x64/OpenConsole.exe) |
| agentRuntime | 227 | [sandbox-bubblewrap-next-steps.md](../../../../sources/zed-industries__zed/sandbox-bubblewrap-next-steps.md)<br>[tooling/xtask/src/tasks/sandbox_tests.rs](../../../../sources/zed-industries__zed/tooling/xtask/src/tasks/sandbox_tests.rs)<br>[tooling/xtask/src/tasks/workflow_checks.rs](../../../../sources/zed-industries__zed/tooling/xtask/src/tasks/workflow_checks.rs)<br>[tooling/xtask/src/tasks/workflow_checks/check_run_patterns.rs](../../../../sources/zed-industries__zed/tooling/xtask/src/tasks/workflow_checks/check_run_patterns.rs)<br>[docs/AGENTS.md](../../../../sources/zed-industries__zed/docs/AGENTS.md)<br>[docs/src/extensions/agent-servers.md](../../../../sources/zed-industries__zed/docs/src/extensions/agent-servers.md)<br>[docs/src/ai/agent-panel.md](../../../../sources/zed-industries__zed/docs/src/ai/agent-panel.md)<br>[docs/src/ai/agent-profiles.md](../../../../sources/zed-industries__zed/docs/src/ai/agent-profiles.md) |
| mcp | 3 | [docs/src/extensions/mcp-extensions.md](../../../../sources/zed-industries__zed/docs/src/extensions/mcp-extensions.md)<br>[docs/src/ai/mcp.md](../../../../sources/zed-industries__zed/docs/src/ai/mcp.md)<br>[crates/settings_ui/src/pages/mcp_servers_page.rs](../../../../sources/zed-industries__zed/crates/settings_ui/src/pages/mcp_servers_page.rs) |
| retrieval | 9 | [docs/theme/index.hbs](../../../../sources/zed-industries__zed/docs/theme/index.hbs)<br>[crates/rope/src/chunk.rs](../../../../sources/zed-industries__zed/crates/rope/src/chunk.rs)<br>[crates/project/src/debugger/memory.rs](../../../../sources/zed-industries__zed/crates/project/src/debugger/memory.rs)<br>[crates/language/src/buffer/row_chunk.rs](../../../../sources/zed-industries__zed/crates/language/src/buffer/row_chunk.rs)<br>[crates/gpui_web/examples/hello_web/index.html](../../../../sources/zed-industries__zed/crates/gpui_web/examples/hello_web/index.html)<br>[crates/git_ui/src/git_graph.rs](../../../../sources/zed-industries__zed/crates/git_ui/src/git_graph.rs)<br>[crates/debugger_ui/src/session/running/memory_view.rs](../../../../sources/zed-industries__zed/crates/debugger_ui/src/session/running/memory_view.rs)<br>[crates/channel/src/channel_store/channel_index.rs](../../../../sources/zed-industries__zed/crates/channel/src/channel_store/channel_index.rs) |
| spec | 1 | [crates/edit_prediction/src/example_spec.rs](../../../../sources/zed-industries__zed/crates/edit_prediction/src/example_spec.rs) |
| eval | 505 | [tooling/xtask/src/tasks/sandbox_tests.rs](../../../../sources/zed-industries__zed/tooling/xtask/src/tasks/sandbox_tests.rs)<br>[tooling/xtask/src/tasks/wsl_sandbox_tests.rs](../../../../sources/zed-industries__zed/tooling/xtask/src/tasks/wsl_sandbox_tests.rs)<br>[tooling/xtask/src/tasks/workflows/extension_tests.rs](../../../../sources/zed-industries__zed/tooling/xtask/src/tasks/workflows/extension_tests.rs)<br>[tooling/xtask/src/tasks/workflows/run_tests.rs](../../../../sources/zed-industries__zed/tooling/xtask/src/tasks/workflows/run_tests.rs)<br>[tooling/xtask/src/tasks/workflows/extensions/run_tests.rs](../../../../sources/zed-industries__zed/tooling/xtask/src/tasks/workflows/extensions/run_tests.rs)<br>[script/drop-test-dbs](../../../../sources/zed-industries__zed/script/drop-test-dbs)<br>[script/randomized-test-ci](../../../../sources/zed-industries__zed/script/randomized-test-ci)<br>[script/randomized-test-minimize](../../../../sources/zed-industries__zed/script/randomized-test-minimize) |
| security | 29 | [sandbox-bubblewrap-next-steps.md](../../../../sources/zed-industries__zed/sandbox-bubblewrap-next-steps.md)<br>[tooling/xtask/src/tasks/compliance.rs](../../../../sources/zed-industries__zed/tooling/xtask/src/tasks/compliance.rs)<br>[tooling/xtask/src/tasks/sandbox_tests.rs](../../../../sources/zed-industries__zed/tooling/xtask/src/tasks/sandbox_tests.rs)<br>[tooling/xtask/src/tasks/wsl_sandbox_tests.rs](../../../../sources/zed-industries__zed/tooling/xtask/src/tasks/wsl_sandbox_tests.rs)<br>[tooling/xtask/src/tasks/workflows/compliance_check.rs](../../../../sources/zed-industries__zed/tooling/xtask/src/tasks/workflows/compliance_check.rs)<br>[tooling/compliance/Cargo.toml](../../../../sources/zed-industries__zed/tooling/compliance/Cargo.toml)<br>[tooling/compliance/src/checks.rs](../../../../sources/zed-industries__zed/tooling/compliance/src/checks.rs)<br>[tooling/compliance/src/git.rs](../../../../sources/zed-industries__zed/tooling/compliance/src/git.rs) |
| ci | 42 | [ci/Dockerfile.namespace](../../../../sources/zed-industries__zed/ci/Dockerfile.namespace)<br>[.github/workflows/add_commented_closed_issue_to_project.yml](../../../../sources/zed-industries__zed/.github/workflows/add_commented_closed_issue_to_project.yml)<br>[.github/workflows/after_release.yml](../../../../sources/zed-industries__zed/.github/workflows/after_release.yml)<br>[.github/workflows/autofix_pr.yml](../../../../sources/zed-industries__zed/.github/workflows/autofix_pr.yml)<br>[.github/workflows/bump_collab_staging.yml](../../../../sources/zed-industries__zed/.github/workflows/bump_collab_staging.yml)<br>[.github/workflows/bump_patch_version.yml](../../../../sources/zed-industries__zed/.github/workflows/bump_patch_version.yml)<br>[.github/workflows/bump_zed_version.yml](../../../../sources/zed-industries__zed/.github/workflows/bump_zed_version.yml)<br>[.github/workflows/catch_blank_issues.yml](../../../../sources/zed-industries__zed/.github/workflows/catch_blank_issues.yml) |
| container | 12 | [compose.yml](../../../../sources/zed-industries__zed/compose.yml)<br>[Dockerfile-collab](../../../../sources/zed-industries__zed/Dockerfile-collab)<br>[Dockerfile-collab.dockerignore](../../../../sources/zed-industries__zed/Dockerfile-collab.dockerignore)<br>[Dockerfile-cross.dockerignore](../../../../sources/zed-industries__zed/Dockerfile-cross.dockerignore)<br>[Dockerfile-distros](../../../../sources/zed-industries__zed/Dockerfile-distros)<br>[Dockerfile-distros.dockerignore](../../../../sources/zed-industries__zed/Dockerfile-distros.dockerignore)<br>[crates/eval_cli/Dockerfile](../../../../sources/zed-industries__zed/crates/eval_cli/Dockerfile)<br>[crates/eval_cli/Dockerfile.dockerignore](../../../../sources/zed-industries__zed/crates/eval_cli/Dockerfile.dockerignore) |
| instruction | 2 | [docs/AGENTS.md](../../../../sources/zed-industries__zed/docs/AGENTS.md)<br>[docs/src/ai/agents.md](../../../../sources/zed-industries__zed/docs/src/ai/agents.md) |
| docs | 245 | [README.md](../../../../sources/zed-industries__zed/README.md)<br>[nix/livekit-libwebrtc/README.md](../../../../sources/zed-industries__zed/nix/livekit-libwebrtc/README.md)<br>[extensions/README.md](../../../../sources/zed-industries__zed/extensions/README.md)<br>[extensions/test-extension/README.md](../../../../sources/zed-industries__zed/extensions/test-extension/README.md)<br>[docs/.gitignore](../../../../sources/zed-industries__zed/docs/.gitignore)<br>[docs/.prettierignore](../../../../sources/zed-industries__zed/docs/.prettierignore)<br>[docs/.prettierrc](../../../../sources/zed-industries__zed/docs/.prettierrc)<br>[docs/.rules](../../../../sources/zed-industries__zed/docs/.rules) |
| config | 252 | [Cargo.lock](../../../../sources/zed-industries__zed/Cargo.lock)<br>[Cargo.toml](../../../../sources/zed-industries__zed/Cargo.toml)<br>[tooling/xtask/Cargo.toml](../../../../sources/zed-industries__zed/tooling/xtask/Cargo.toml)<br>[tooling/perf/Cargo.toml](../../../../sources/zed-industries__zed/tooling/perf/Cargo.toml)<br>[tooling/compliance/Cargo.toml](../../../../sources/zed-industries__zed/tooling/compliance/Cargo.toml)<br>[script/update_top_ranking_issues/pyproject.toml](../../../../sources/zed-industries__zed/script/update_top_ranking_issues/pyproject.toml)<br>[script/update_top_ranking_issues/uv.lock](../../../../sources/zed-industries__zed/script/update_top_ranking_issues/uv.lock)<br>[script/danger/package.json](../../../../sources/zed-industries__zed/script/danger/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 505 | [tooling/xtask/src/tasks/sandbox_tests.rs](../../../../sources/zed-industries__zed/tooling/xtask/src/tasks/sandbox_tests.rs)<br>[tooling/xtask/src/tasks/wsl_sandbox_tests.rs](../../../../sources/zed-industries__zed/tooling/xtask/src/tasks/wsl_sandbox_tests.rs)<br>[tooling/xtask/src/tasks/workflows/extension_tests.rs](../../../../sources/zed-industries__zed/tooling/xtask/src/tasks/workflows/extension_tests.rs)<br>[tooling/xtask/src/tasks/workflows/run_tests.rs](../../../../sources/zed-industries__zed/tooling/xtask/src/tasks/workflows/run_tests.rs)<br>[tooling/xtask/src/tasks/workflows/extensions/run_tests.rs](../../../../sources/zed-industries__zed/tooling/xtask/src/tasks/workflows/extensions/run_tests.rs)<br>[script/drop-test-dbs](../../../../sources/zed-industries__zed/script/drop-test-dbs) |
| CI workflows | 42 | [ci/Dockerfile.namespace](../../../../sources/zed-industries__zed/ci/Dockerfile.namespace)<br>[.github/workflows/add_commented_closed_issue_to_project.yml](../../../../sources/zed-industries__zed/.github/workflows/add_commented_closed_issue_to_project.yml)<br>[.github/workflows/after_release.yml](../../../../sources/zed-industries__zed/.github/workflows/after_release.yml)<br>[.github/workflows/autofix_pr.yml](../../../../sources/zed-industries__zed/.github/workflows/autofix_pr.yml)<br>[.github/workflows/bump_collab_staging.yml](../../../../sources/zed-industries__zed/.github/workflows/bump_collab_staging.yml)<br>[.github/workflows/bump_patch_version.yml](../../../../sources/zed-industries__zed/.github/workflows/bump_patch_version.yml) |
| Containers / deploy | 12 | [compose.yml](../../../../sources/zed-industries__zed/compose.yml)<br>[Dockerfile-collab](../../../../sources/zed-industries__zed/Dockerfile-collab)<br>[Dockerfile-collab.dockerignore](../../../../sources/zed-industries__zed/Dockerfile-collab.dockerignore)<br>[Dockerfile-cross.dockerignore](../../../../sources/zed-industries__zed/Dockerfile-cross.dockerignore)<br>[Dockerfile-distros](../../../../sources/zed-industries__zed/Dockerfile-distros)<br>[Dockerfile-distros.dockerignore](../../../../sources/zed-industries__zed/Dockerfile-distros.dockerignore) |
| Security / policy | 29 | [sandbox-bubblewrap-next-steps.md](../../../../sources/zed-industries__zed/sandbox-bubblewrap-next-steps.md)<br>[tooling/xtask/src/tasks/compliance.rs](../../../../sources/zed-industries__zed/tooling/xtask/src/tasks/compliance.rs)<br>[tooling/xtask/src/tasks/sandbox_tests.rs](../../../../sources/zed-industries__zed/tooling/xtask/src/tasks/sandbox_tests.rs)<br>[tooling/xtask/src/tasks/wsl_sandbox_tests.rs](../../../../sources/zed-industries__zed/tooling/xtask/src/tasks/wsl_sandbox_tests.rs)<br>[tooling/xtask/src/tasks/workflows/compliance_check.rs](../../../../sources/zed-industries__zed/tooling/xtask/src/tasks/workflows/compliance_check.rs)<br>[tooling/compliance/Cargo.toml](../../../../sources/zed-industries__zed/tooling/compliance/Cargo.toml) |
| Agent instructions | 2 | [docs/AGENTS.md](../../../../sources/zed-industries__zed/docs/AGENTS.md)<br>[docs/src/ai/agents.md](../../../../sources/zed-industries__zed/docs/src/ai/agents.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tooling/xtask/src/main.rs`, `tooling/perf/src/main.rs`, `script/update_top_ranking_issues/main.py`.
2. Trace execution through entrypoints: `tooling/xtask/src/main.rs`, `tooling/perf/src/main.rs`, `script/update_top_ranking_issues/main.py`.
3. Map agent/tool runtime through: `sandbox-bubblewrap-next-steps.md`, `tooling/xtask/src/tasks/sandbox_tests.rs`, `tooling/xtask/src/tasks/workflow_checks.rs`.
4. Inspect retrieval/memory/indexing through: `docs/theme/index.hbs`, `crates/rope/src/chunk.rs`, `crates/project/src/debugger/memory.rs`.
5. Verify behavior through test/eval files: `tooling/xtask/src/tasks/sandbox_tests.rs`, `tooling/xtask/src/tasks/wsl_sandbox_tests.rs`, `tooling/xtask/src/tasks/workflows/extension_tests.rs`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 Code at the speed of thought – Zed is a high performance, multiplayer code editor from the creators of Atom and Tree sit. 핵심 구조 신호는 Rust, Cargo.toml, README.md, anthropic, ollama, ci이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
