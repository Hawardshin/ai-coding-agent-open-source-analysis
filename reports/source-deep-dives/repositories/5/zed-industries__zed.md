# zed-industries/zed 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Code at the speed of thought – Zed is a high-performance, multiplayer code editor from the creators of Atom and Tree-sitter.

## 요약

- 조사 단위: `sources/zed-industries__zed` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 3,833 files, 849 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=tooling/xtask/src/main.rs, tooling/perf/src/main.rs, script/update_top_ranking_issues/main.py이고, 의존성 단서는 anthropic, ollama, llama, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | zed-industries/zed |
| 주제 | 개발 생산성/DevTools / 개발 생산성/DevTools |
| Region | global |
| Language | Rust |
| Stars | 85449 |
| Forks | 9119 |
| License | NOASSERTION |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/zed-industries__zed](../../../../sources/zed-industries__zed) |
| 기존 보고서 | [reports/global-trending/repositories/zed-industries__zed.md](../../../global-trending/repositories/zed-industries__zed.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 3833 / 849 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .agents, .cargo, .cloudflare, .config, .factory, .github, .zed, assets, ci, crates, docs, extensions, legal, nix, script, tooling |
| 상위 확장자 | .rs: 1846, .svg: 413, .json: 361, .toml: 296, .md: 271, .scm: 149, (none): 118, .wit: 77, .yml: 55, .txt: 27, .proto: 25, .nix: 16 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | anthropic |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | ollama, llama |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 505 | [tooling/xtask/src/tasks/sandbox_tests.rs](../../../../sources/zed-industries__zed/tooling/xtask/src/tasks/sandbox_tests.rs)<br>[tooling/xtask/src/tasks/wsl_sandbox_tests.rs](../../../../sources/zed-industries__zed/tooling/xtask/src/tasks/wsl_sandbox_tests.rs)<br>[tooling/xtask/src/tasks/workflows/extension_tests.rs](../../../../sources/zed-industries__zed/tooling/xtask/src/tasks/workflows/extension_tests.rs)<br>[tooling/xtask/src/tasks/workflows/run_tests.rs](../../../../sources/zed-industries__zed/tooling/xtask/src/tasks/workflows/run_tests.rs)<br>[tooling/xtask/src/tasks/workflows/extensions/run_tests.rs](../../../../sources/zed-industries__zed/tooling/xtask/src/tasks/workflows/extensions/run_tests.rs)<br>[script/drop-test-dbs](../../../../sources/zed-industries__zed/script/drop-test-dbs) |
| CI workflow | 42 | [ci/Dockerfile.namespace](../../../../sources/zed-industries__zed/ci/Dockerfile.namespace)<br>[.github/workflows/add_commented_closed_issue_to_project.yml](../../../../sources/zed-industries__zed/.github/workflows/add_commented_closed_issue_to_project.yml)<br>[.github/workflows/after_release.yml](../../../../sources/zed-industries__zed/.github/workflows/after_release.yml)<br>[.github/workflows/autofix_pr.yml](../../../../sources/zed-industries__zed/.github/workflows/autofix_pr.yml)<br>[.github/workflows/bump_collab_staging.yml](../../../../sources/zed-industries__zed/.github/workflows/bump_collab_staging.yml)<br>[.github/workflows/bump_patch_version.yml](../../../../sources/zed-industries__zed/.github/workflows/bump_patch_version.yml) |
| 컨테이너/배포 | 12 | [compose.yml](../../../../sources/zed-industries__zed/compose.yml)<br>[Dockerfile-collab](../../../../sources/zed-industries__zed/Dockerfile-collab)<br>[Dockerfile-collab.dockerignore](../../../../sources/zed-industries__zed/Dockerfile-collab.dockerignore)<br>[Dockerfile-cross.dockerignore](../../../../sources/zed-industries__zed/Dockerfile-cross.dockerignore)<br>[Dockerfile-distros](../../../../sources/zed-industries__zed/Dockerfile-distros)<br>[Dockerfile-distros.dockerignore](../../../../sources/zed-industries__zed/Dockerfile-distros.dockerignore) |
| 보안/정책 | 29 | [sandbox-bubblewrap-next-steps.md](../../../../sources/zed-industries__zed/sandbox-bubblewrap-next-steps.md)<br>[tooling/xtask/src/tasks/compliance.rs](../../../../sources/zed-industries__zed/tooling/xtask/src/tasks/compliance.rs)<br>[tooling/xtask/src/tasks/sandbox_tests.rs](../../../../sources/zed-industries__zed/tooling/xtask/src/tasks/sandbox_tests.rs)<br>[tooling/xtask/src/tasks/wsl_sandbox_tests.rs](../../../../sources/zed-industries__zed/tooling/xtask/src/tasks/wsl_sandbox_tests.rs)<br>[tooling/xtask/src/tasks/workflows/compliance_check.rs](../../../../sources/zed-industries__zed/tooling/xtask/src/tasks/workflows/compliance_check.rs)<br>[tooling/compliance/Cargo.toml](../../../../sources/zed-industries__zed/tooling/compliance/Cargo.toml) |
| 에이전트 지시문 | 2 | [docs/AGENTS.md](../../../../sources/zed-industries__zed/docs/AGENTS.md)<br>[docs/src/ai/agents.md](../../../../sources/zed-industries__zed/docs/src/ai/agents.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tooling/xtask/src/main.rs`, `tooling/perf/src/main.rs`, `script/update_top_ranking_issues/main.py`.
2. entrypoint를 따라 실행 흐름 확인: `tooling/xtask/src/main.rs`, `tooling/perf/src/main.rs`, `script/update_top_ranking_issues/main.py`.
3. agent/tool runtime 매핑: `sandbox-bubblewrap-next-steps.md`, `tooling/xtask/src/tasks/sandbox_tests.rs`, `tooling/xtask/src/tasks/workflow_checks.rs`.
4. retrieval/memory/indexing 확인: `docs/theme/index.hbs`, `crates/rope/src/chunk.rs`, `crates/project/src/debugger/memory.rs`.
5. test/eval 파일로 동작 검증: `tooling/xtask/src/tasks/sandbox_tests.rs`, `tooling/xtask/src/tasks/wsl_sandbox_tests.rs`, `tooling/xtask/src/tasks/workflows/extension_tests.rs`.

## 기존 레포 인사이트

개발 생산성/DevTools 관점에서 Code at the speed of thought – Zed is a high performance, multiplayer code editor from the creators of Atom and Tree sit. 핵심 구조 신호는 Rust, Cargo.toml, README.md, anthropic, ollama, ci이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
