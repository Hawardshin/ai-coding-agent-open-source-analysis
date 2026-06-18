# openai/codex 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Local clone structure analysis: 4880 files, 715 directories.

## 요약

- 조사 단위: `sources/openai__codex` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 4,827 files, 702 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=codex-rs/utils/plugins/src/mcp_connector.rs, codex-rs/tui/src/history_cell/mcp.rs, codex-rs/tui/src/history_cell/snapshots/codex_tui__history_cell__tests__active_mcp_tool_call_snapshot.snap이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | openai/codex |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 91749 |
| Forks | 13558 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/openai__codex](../../../../sources/openai__codex) |
| 기존 보고서 | [reports/global-trending/repositories/openai__codex.md](../../../global-trending/repositories/openai__codex.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 4827 / 702 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .codex, .devcontainer, .github, codex-cli, codex-rs, docs, patches, scripts, sdk, third_party, tools |
| 상위 확장자 | .rs: 2152, .ts: 580, .snap: 543, .txt: 442, .json: 301, .md: 165, .toml: 144, .bazel: 136, .py: 125, .sql: 39, .yml: 37, (none): 30 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| quality | package.json | format | prettier --check *.json *.md docs/*.md .github/workflows/*.yml **/*.js |
| quality | package.json | format:fix | prettier --write *.json *.md docs/*.md .github/workflows/*.yml **/*.js |
| utility | package.json | write-hooks-schema | cargo run --manifest-path ./codex-rs/Cargo.toml -p codex-hooks --bin write_hooks_schema_fixtures |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1334 | [workspace_root_test_launcher.bat.tpl](../../../../sources/openai__codex/workspace_root_test_launcher.bat.tpl)<br>[workspace_root_test_launcher.sh.tpl](../../../../sources/openai__codex/workspace_root_test_launcher.sh.tpl)<br>[tools/argument-comment-lint/test_wrapper_common.py](../../../../sources/openai__codex/tools/argument-comment-lint/test_wrapper_common.py)<br>[sdk/typescript/tests/abort.test.ts](../../../../sources/openai__codex/sdk/typescript/tests/abort.test.ts)<br>[sdk/typescript/tests/codexExecSpy.ts](../../../../sources/openai__codex/sdk/typescript/tests/codexExecSpy.ts)<br>[sdk/typescript/tests/exec.test.ts](../../../../sources/openai__codex/sdk/typescript/tests/exec.test.ts) |
| CI workflow | 27 | [codex-rs/.github/workflows/cargo-audit.yml](../../../../sources/openai__codex/codex-rs/.github/workflows/cargo-audit.yml)<br>[.github/workflows/bazel.yml](../../../../sources/openai__codex/.github/workflows/bazel.yml)<br>[.github/workflows/blob-size-policy.yml](../../../../sources/openai__codex/.github/workflows/blob-size-policy.yml)<br>[.github/workflows/cargo-deny.yml](../../../../sources/openai__codex/.github/workflows/cargo-deny.yml)<br>[.github/workflows/ci.yml](../../../../sources/openai__codex/.github/workflows/ci.yml)<br>[.github/workflows/cla.yml](../../../../sources/openai__codex/.github/workflows/cla.yml) |
| 컨테이너/배포 | 3 | [.github/workflows/Dockerfile.bazel](../../../../sources/openai__codex/.github/workflows/Dockerfile.bazel)<br>[.devcontainer/Dockerfile](../../../../sources/openai__codex/.devcontainer/Dockerfile)<br>[.devcontainer/Dockerfile.secure](../../../../sources/openai__codex/.devcontainer/Dockerfile.secure) |
| 보안/정책 | 206 | [SECURITY.md](../../../../sources/openai__codex/SECURITY.md)<br>[sdk/python/src/openai_codex/_sandbox.py](../../../../sources/openai__codex/sdk/python/src/openai_codex/_sandbox.py)<br>[docs/sandbox.md](../../../../sources/openai__codex/docs/sandbox.md)<br>[codex-rs/windows-sandbox-rs/BUILD.bazel](../../../../sources/openai__codex/codex-rs/windows-sandbox-rs/BUILD.bazel)<br>[codex-rs/windows-sandbox-rs/build.rs](../../../../sources/openai__codex/codex-rs/windows-sandbox-rs/build.rs)<br>[codex-rs/windows-sandbox-rs/Cargo.toml](../../../../sources/openai__codex/codex-rs/windows-sandbox-rs/Cargo.toml) |
| 에이전트 지시문 | 26 | [AGENTS.md](../../../../sources/openai__codex/AGENTS.md)<br>[codex-rs/tui/src/bottom_pane/AGENTS.md](../../../../sources/openai__codex/codex-rs/tui/src/bottom_pane/AGENTS.md)<br>[.codex/skills/update-v8-version/SKILL.md](../../../../sources/openai__codex/.codex/skills/update-v8-version/SKILL.md)<br>[.codex/skills/update-v8-version/agents/openai.yaml](../../../../sources/openai__codex/.codex/skills/update-v8-version/agents/openai.yaml)<br>[.codex/skills/test-tui/SKILL.md](../../../../sources/openai__codex/.codex/skills/test-tui/SKILL.md)<br>[.codex/skills/remote-tests/SKILL.md](../../../../sources/openai__codex/.codex/skills/remote-tests/SKILL.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `codex-rs/utils/plugins/src/mcp_connector.rs`, `codex-rs/tui/src/history_cell/mcp.rs`, `codex-rs/tui/src/history_cell/snapshots/codex_tui__history_cell__tests__active_mcp_tool_call_snapshot.snap`.
2. entrypoint를 따라 실행 흐름 확인: `tools/argument-comment-lint/src/bin/argument-comment-lint.rs`, `sdk/typescript/src/index.ts`, `codex-rs/windows-sandbox-rs/src/bin/setup_main/main.rs`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tools/argument-comment-lint/.gitignore`, `tools/argument-comment-lint/argument-comment-lint`.
4. retrieval/memory/indexing 확인: `sdk/typescript/src/index.ts`, `codex-rs/tui/src/history_cell/snapshots/codex_tui__history_cell__tests__ps_output_chunk_leading_whitespace_snapshot.snap`, `codex-rs/thread-store/src/in_memory.rs`.
5. test/eval 파일로 동작 검증: `workspace_root_test_launcher.bat.tpl`, `workspace_root_test_launcher.sh.tpl`, `tools/argument-comment-lint/test_wrapper_common.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 4880 files, 715 directories.. 핵심 구조 신호는 Rust, package.json, README.md, AGENTS.md, LICENSE, tests이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
