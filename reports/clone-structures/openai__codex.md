# openai/codex 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/openai__codex |
| remote | https://github.com/openai/codex |
| HEAD | d2f6d23 (2026-06-10) Remove async-trait from extension contributors (#27383) |
| branch | main |
| groups | core-agent-30, previous-clone-inventory-107 |
| files | 4880 |
| dirs | 715 |
| stack | Node/TypeScript/JavaScript, Rust |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Quickstart`, `Installing and running Codex CLI`, `Install using npm`, `Install using Homebrew`, `Using Codex with your ChatGPT plan`, `Docs`

> <p align="center" <strong Codex CLI</strong is a coding agent from OpenAI that runs locally on your computer. <p align="center" <img src="https //github.com/openai/codex/blob/main/.github/codex cli splash.png" alt="Codex CLI splash" width="80%" / </p </br If you want Codex in your code editor (VS Code, Cursor, Windsurf), <a href="https //developers.openai.com/codex/ide" install in your IDE.</a </br If you want the desktop app experience, run <code codex app</code or visit <a href="https //chatgpt.com/codex?app landing page=true" the Codex App page</a . </br If you are looking for the <em cloud based agent</em from OpenAI, <strong Codex Web</strong , go to <a href="https //chatgpt.com/codex" chatgpt.com/codex</a .</p Quickstart Installing and running Codex CLI Run the following on Mac or Linux to install Codex CLI Run the following on Windows to install Codex CLI Codex CLI can also be ins

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .bazelignore | file |
| .bazelrc | file |
| .bazelversion | file |
| .codespellignore | file |
| .codespellrc | file |
| .codex | dir |
| .devcontainer | dir |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .markdownlint-cli2.yaml | file |
| .npmrc | file |
| .prettierignore | file |
| .prettierrc.toml | file |
| .vscode | dir |
| AGENTS.md | file |
| announcement_tip.toml | file |
| BUILD.bazel | file |
| CHANGELOG.md | file |
| cliff.toml | file |
| codex-cli | dir |
| codex-rs | dir |
| defs.bzl | file |
| docs | dir |
| flake.lock | file |
| flake.nix | file |
| justfile | file |
| LICENSE | file |
| MODULE.bazel | file |
| MODULE.bazel.lock | file |
| NOTICE | file |
| package.json | file |
| patches | dir |
| pnpm-lock.yaml | file |
| pnpm-workspace.yaml | file |
| rbe.bzl | file |
| README.md | file |
| scripts | dir |
| sdk | dir |
| SECURITY.md | file |
| third_party | dir |
| tools | dir |
| workspace_root_test_launcher.bat.tpl | file |
| workspace_root_test_launcher.sh.tpl | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| codex-rs/ | 4497 |
| sdk/ | 114 |
| .github/ | 75 |
| scripts/ | 35 |
| (root) | 32 |
| patches/ | 29 |
| tools/ | 27 |
| .codex/ | 24 |
| docs/ | 15 |
| .devcontainer/ | 11 |
| third_party/ | 11 |
| codex-cli/ | 7 |
| .vscode/ | 3 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 15 | preferred |
| tools/ | 27 | preferred |
| scripts/ | 35 | preferred |
| codex-rs/ | 4497 | large |
| codex-rs/tui/ | 1211 | large |
| codex-rs/app-server-protocol/ | 863 | large |
| codex-rs/tui/src/ | 837 | large |
| codex-rs/app-server-protocol/schema/ | 815 | large |
| codex-rs/core/ | 512 | large |
| codex-rs/tui/frames/ | 360 | large |
| codex-rs/core/src/ | 350 | large |
| codex-rs/app-server/ | 164 | large |
| codex-rs/core/tests/ | 143 | large |
| codex-rs/utils/ | 116 | large |
| sdk/ | 114 | large |
| codex-rs/ext/ | 100 | large |
| codex-rs/apply-patch/ | 91 | large |
| codex-rs/app-server/tests/ | 90 | large |
| codex-rs/apply-patch/tests/ | 82 | large |
| sdk/python/ | 79 | large |
| .github/ | 75 | large |
| codex-rs/app-server/src/ | 71 | large |
| codex-rs/state/ | 67 | large |
| codex-rs/config/ | 59 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `.devcontainer/Dockerfile`
- `.devcontainer/codex-install/package.json`
- `.devcontainer/codex-install/pnpm-lock.yaml`
- `.devcontainer/codex-install/pnpm-workspace.yaml`
- `codex-cli/package.json`
- `codex-rs/Cargo.toml`
- `codex-rs/agent-graph-store/Cargo.toml`
- `codex-rs/agent-identity/Cargo.toml`
- `codex-rs/analytics/Cargo.toml`
- `codex-rs/ansi-escape/Cargo.toml`
- `codex-rs/app-server-client/Cargo.toml`
- `codex-rs/app-server-daemon/Cargo.toml`
- `codex-rs/app-server-protocol/Cargo.toml`
- `codex-rs/app-server-test-client/Cargo.toml`
- `codex-rs/app-server-transport/Cargo.toml`
- `codex-rs/app-server/Cargo.toml`
- `codex-rs/app-server/tests/common/Cargo.toml`
- `codex-rs/apply-patch/Cargo.toml`
- `codex-rs/arg0/Cargo.toml`
- `codex-rs/async-utils/Cargo.toml`
- `codex-rs/aws-auth/Cargo.toml`
- `codex-rs/backend-client/Cargo.toml`
- `codex-rs/bwrap/Cargo.toml`
- `codex-rs/chatgpt/Cargo.toml`
- `codex-rs/cli/Cargo.toml`
- `codex-rs/cloud-config/Cargo.toml`
- `codex-rs/cloud-tasks-client/Cargo.toml`
- `codex-rs/cloud-tasks-mock-client/Cargo.toml`
- `codex-rs/cloud-tasks/Cargo.toml`
- `codex-rs/code-mode/Cargo.toml`
- `codex-rs/codex-api/Cargo.toml`
- `codex-rs/codex-backend-openapi-models/Cargo.toml`
- `codex-rs/codex-client/Cargo.toml`
- `codex-rs/codex-experimental-api-macros/Cargo.toml`
- `codex-rs/codex-mcp/Cargo.toml`
- `codex-rs/collaboration-mode-templates/Cargo.toml`
- `codex-rs/config/Cargo.toml`
- `codex-rs/connectors/Cargo.toml`
- `codex-rs/context-fragments/Cargo.toml`
- `codex-rs/core-api/Cargo.toml`
- `codex-rs/core-plugins/Cargo.toml`
- `codex-rs/core-skills/Cargo.toml`
- `codex-rs/core/Cargo.toml`
- `codex-rs/core/tests/common/Cargo.toml`
- `codex-rs/exec-server/Cargo.toml`
- `codex-rs/exec/Cargo.toml`
- `codex-rs/execpolicy-legacy/Cargo.toml`
- `codex-rs/execpolicy/Cargo.toml`
- `codex-rs/ext/extension-api/Cargo.toml`
- `codex-rs/ext/goal/Cargo.toml`
- `codex-rs/ext/guardian/Cargo.toml`
- `codex-rs/ext/image-generation/Cargo.toml`
- `codex-rs/ext/mcp/Cargo.toml`
- `codex-rs/ext/memories/Cargo.toml`
- `codex-rs/ext/skills/Cargo.toml`
- `codex-rs/ext/web-search/Cargo.toml`
- `codex-rs/external-agent-migration/Cargo.toml`
- `codex-rs/external-agent-sessions/Cargo.toml`
- `codex-rs/features/Cargo.toml`
- `codex-rs/feedback/Cargo.toml`
- `codex-rs/file-search/Cargo.toml`
- `codex-rs/file-system/Cargo.toml`
- `codex-rs/file-watcher/Cargo.toml`
- `codex-rs/git-utils/Cargo.toml`
- `codex-rs/hooks/Cargo.toml`
- `codex-rs/install-context/Cargo.toml`
- `codex-rs/keyring-store/Cargo.toml`
- `codex-rs/linux-sandbox/Cargo.toml`
- `codex-rs/lmstudio/Cargo.toml`
- `codex-rs/login/Cargo.toml`
- `codex-rs/mcp-server/Cargo.toml`
- `codex-rs/mcp-server/tests/common/Cargo.toml`
- `codex-rs/memories/read/Cargo.toml`
- `codex-rs/memories/write/Cargo.toml`
- `codex-rs/message-history/Cargo.toml`
- `codex-rs/model-provider-info/Cargo.toml`
- `codex-rs/model-provider/Cargo.toml`
- `codex-rs/models-manager/Cargo.toml`
- `codex-rs/network-proxy/Cargo.toml`
- `codex-rs/ollama/Cargo.toml`
- ... 20 more

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| .devcontainer/codex-install/package.json | codex-devcontainer-install |  | @openai/codex |
| codex-cli/package.json | @openai/codex |  |  |
| codex-rs/responses-api-proxy/npm/package.json | @openai/codex-responses-api-proxy |  |  |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| codex-rs/Cargo.toml |  | true |      "aws-auth",     "analytics",     "agent-graph-store",     "agent-identity",     "backend-client",     "bwrap",     "ansi-escape",     "async-utils",     "app-server",     "app |
| codex-rs/agent-graph-store/Cargo.toml | codex-agent-graph-store | false |  |
| codex-rs/agent-identity/Cargo.toml | codex-agent-identity | false |  |
| codex-rs/analytics/Cargo.toml | codex-analytics | false |  |
| codex-rs/ansi-escape/Cargo.toml | codex-ansi-escape | false |  |
| codex-rs/app-server-client/Cargo.toml | codex-app-server-client | false |  |
| codex-rs/app-server-daemon/Cargo.toml | codex-app-server-daemon | false |  |
| codex-rs/app-server-protocol/Cargo.toml | codex-app-server-protocol | false |  |
| codex-rs/app-server-test-client/Cargo.toml | codex-app-server-test-client | false |  |
| codex-rs/app-server-transport/Cargo.toml | codex-app-server-transport | false |  |
| codex-rs/app-server/Cargo.toml | codex-app-server | false |  |
| codex-rs/app-server/tests/common/Cargo.toml | app_test_support | false |  |
| codex-rs/apply-patch/Cargo.toml | codex-apply-patch | false |  |
| codex-rs/arg0/Cargo.toml | codex-arg0 | false |  |
| codex-rs/async-utils/Cargo.toml | codex-async-utils | false |  |
| codex-rs/aws-auth/Cargo.toml | codex-aws-auth | false |  |
| codex-rs/backend-client/Cargo.toml | codex-backend-client | false |  |
| codex-rs/bwrap/Cargo.toml | codex-bwrap | false |  |
| codex-rs/chatgpt/Cargo.toml | codex-chatgpt | false |  |
| codex-rs/cli/Cargo.toml | codex-cli | false |  |
| codex-rs/cloud-config/Cargo.toml | codex-cloud-config | false |  |
| codex-rs/cloud-tasks-client/Cargo.toml | codex-cloud-tasks-client | false |  |
| codex-rs/cloud-tasks-mock-client/Cargo.toml | codex-cloud-tasks-mock-client | false |  |
| codex-rs/cloud-tasks/Cargo.toml | codex-cloud-tasks | false |  |
| codex-rs/code-mode/Cargo.toml | codex-code-mode | false |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.devcontainer/README.md`
- `.github/workflows/README.md`
- `README.md`
- `codex-cli/scripts/README.md`
- `codex-rs/README.md`
- `codex-rs/ansi-escape/README.md`
- `codex-rs/app-server-client/README.md`
- `codex-rs/app-server-daemon/README.md`
- `codex-rs/app-server-test-client/README.md`
- `codex-rs/app-server/README.md`
- `codex-rs/apply-patch/tests/fixtures/scenarios/README.md`
- `codex-rs/chatgpt/README.md`
- `codex-rs/codex-api/README.md`
- `codex-rs/codex-client/README.md`
- `codex-rs/config/src/loader/README.md`
- `codex-rs/core/README.md`
- `codex-rs/docs/bazel.md`
- `codex-rs/docs/codex_mcp_interface.md`
- `codex-rs/docs/protocol_v1.md`
- `codex-rs/exec-server/README.md`
- `codex-rs/execpolicy-legacy/README.md`
- `codex-rs/execpolicy/README.md`
- `codex-rs/file-search/README.md`
- `codex-rs/git-utils/README.md`
- `codex-rs/linux-sandbox/README.md`
- `codex-rs/memories/README.md`
- `codex-rs/network-proxy/README.md`
- `codex-rs/otel/README.md`
- `codex-rs/process-hardening/README.md`
- `codex-rs/protocol/README.md`
- `codex-rs/responses-api-proxy/README.md`
- `codex-rs/responses-api-proxy/npm/README.md`
- `codex-rs/rollout-trace/README.md`
- `codex-rs/shell-escalation/README.md`
- `codex-rs/stdio-to-uds/README.md`
- `codex-rs/thread-manager-sample/README.md`
- `codex-rs/thread-store/README.md`
- `codex-rs/tools/README.md`
- `codex-rs/utils/cargo-bin/README.md`
- `codex-rs/utils/pty/README.md`
- `codex-rs/utils/stream-parser/README.md`
- `codex-rs/utils/template/README.md`
- `codex-rs/vendor/bubblewrap/README.md`
- `codex-rs/vendor/bubblewrap/tests/use-as-subproject/README`
- `docs/CLA.md`
- `docs/agents_md.md`
- `docs/authentication.md`
- `docs/config.md`
- `docs/contributing.md`
- `docs/example-config.md`
- ... 19 more

### 에이전트 지침 후보

- `.codex/environments/environment.toml`
- `.codex/environments/setup.py`
- `.codex/skills/babysit-pr/SKILL.md`
- `.codex/skills/babysit-pr/agents/openai.yaml`
- `.codex/skills/babysit-pr/references/github-api-notes.md`
- `.codex/skills/babysit-pr/references/heuristics.md`
- `.codex/skills/babysit-pr/scripts/gh_pr_watch.py`
- `.codex/skills/babysit-pr/scripts/test_gh_pr_watch.py`
- `.codex/skills/code-review-breaking-changes/SKILL.md`
- `.codex/skills/code-review-change-size/SKILL.md`
- `.codex/skills/code-review-context/SKILL.md`
- `.codex/skills/code-review-testing/SKILL.md`
- `.codex/skills/code-review/SKILL.md`
- `.codex/skills/codex-bug/SKILL.md`
- `.codex/skills/codex-issue-digest/SKILL.md`
- `.codex/skills/codex-issue-digest/agents/openai.yaml`
- `.codex/skills/codex-issue-digest/scripts/collect_issue_digest.py`
- `.codex/skills/codex-issue-digest/scripts/test_collect_issue_digest.py`
- `.codex/skills/codex-pr-body/SKILL.md`
- `.codex/skills/pushing-ci-changes/SKILL.md`
- `.codex/skills/remote-tests/SKILL.md`
- `.codex/skills/test-tui/SKILL.md`
- `.codex/skills/update-v8-version/SKILL.md`
- `.codex/skills/update-v8-version/agents/openai.yaml`
- `AGENTS.md`
- `codex-rs/app-server-protocol/src/protocol/v2/mcp.rs`
- `codex-rs/app-server/src/mcp_refresh.rs`
- `codex-rs/app-server/src/request_processors/mcp_processor.rs`
- `codex-rs/app-server/src/skills_watcher.rs`
- `codex-rs/app-server/tests/suite/v2/executor_skills.rs`
- `codex-rs/app-server/tests/suite/v2/mcp_resource.rs`
- `codex-rs/app-server/tests/suite/v2/mcp_server_elicitation.rs`
- `codex-rs/app-server/tests/suite/v2/mcp_server_status.rs`
- `codex-rs/app-server/tests/suite/v2/mcp_tool.rs`
- `codex-rs/app-server/tests/suite/v2/skills_list.rs`
- `codex-rs/cli/src/mcp_cmd.rs`
- `codex-rs/cli/tests/mcp_add_remove.rs`
- `codex-rs/cli/tests/mcp_list.rs`
- `codex-rs/codex-mcp/BUILD.bazel`
- `codex-rs/codex-mcp/Cargo.toml`
- `codex-rs/codex-mcp/src/auth_elicitation.rs`
- `codex-rs/codex-mcp/src/codex_apps.rs`
- `codex-rs/codex-mcp/src/connection_manager.rs`
- `codex-rs/codex-mcp/src/connection_manager_tests.rs`
- `codex-rs/codex-mcp/src/elicitation.rs`
- `codex-rs/codex-mcp/src/lib.rs`
- `codex-rs/codex-mcp/src/mcp/auth.rs`
- `codex-rs/codex-mcp/src/mcp/mod.rs`
- `codex-rs/codex-mcp/src/mcp/mod_tests.rs`
- `codex-rs/codex-mcp/src/rmcp_client.rs`
- `codex-rs/codex-mcp/src/runtime.rs`
- `codex-rs/codex-mcp/src/server.rs`
- `codex-rs/codex-mcp/src/tools.rs`
- `codex-rs/config/src/mcp_edit.rs`
- `codex-rs/config/src/mcp_edit_tests.rs`
- `codex-rs/config/src/mcp_types.rs`
- `codex-rs/config/src/mcp_types_tests.rs`
- `codex-rs/config/src/skills_config.rs`
- `codex-rs/core-skills/BUILD.bazel`
- `codex-rs/core-skills/Cargo.toml`
- `codex-rs/core-skills/src/config_rules.rs`
- `codex-rs/core-skills/src/injection.rs`
- `codex-rs/core-skills/src/injection_tests.rs`
- `codex-rs/core-skills/src/invocation_utils.rs`
- `codex-rs/core-skills/src/invocation_utils_tests.rs`
- `codex-rs/core-skills/src/lib.rs`
- `codex-rs/core-skills/src/loader.rs`
- `codex-rs/core-skills/src/loader_tests.rs`
- `codex-rs/core-skills/src/manager.rs`
- `codex-rs/core-skills/src/manager_tests.rs`
- `codex-rs/core-skills/src/mention_counts.rs`
- `codex-rs/core-skills/src/model.rs`
- `codex-rs/core-skills/src/remote.rs`
- `codex-rs/core-skills/src/render.rs`
- `codex-rs/core-skills/src/skill_instructions.rs`
- `codex-rs/core-skills/src/system.rs`
- `codex-rs/core/src/context/available_skills_instructions.rs`
- `codex-rs/core/src/mcp.rs`
- `codex-rs/core/src/mcp_openai_file.rs`
- `codex-rs/core/src/mcp_skill_dependencies.rs`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `.codex/skills/babysit-pr/SKILL.md`
- `.codex/skills/babysit-pr/agents/openai.yaml`
- `.codex/skills/babysit-pr/references/github-api-notes.md`
- `.codex/skills/babysit-pr/references/heuristics.md`
- `.codex/skills/babysit-pr/scripts/gh_pr_watch.py`
- `.codex/skills/babysit-pr/scripts/test_gh_pr_watch.py`
- `.codex/skills/code-review-breaking-changes/SKILL.md`
- `.codex/skills/code-review-change-size/SKILL.md`
- `.codex/skills/code-review-context/SKILL.md`
- `.codex/skills/code-review-testing/SKILL.md`
- `.codex/skills/code-review/SKILL.md`
- `.codex/skills/codex-bug/SKILL.md`
- `.codex/skills/codex-issue-digest/SKILL.md`
- `.codex/skills/codex-issue-digest/agents/openai.yaml`
- `.codex/skills/codex-issue-digest/scripts/collect_issue_digest.py`
- `.codex/skills/codex-issue-digest/scripts/test_collect_issue_digest.py`
- `.codex/skills/codex-pr-body/SKILL.md`
- `.codex/skills/pushing-ci-changes/SKILL.md`
- `.codex/skills/remote-tests/SKILL.md`
- `.codex/skills/test-tui/SKILL.md`
- `.codex/skills/update-v8-version/SKILL.md`
- `.codex/skills/update-v8-version/agents/openai.yaml`
- `codex-rs/collaboration-mode-templates/templates/default.md`
- `codex-rs/collaboration-mode-templates/templates/execute.md`
- `codex-rs/collaboration-mode-templates/templates/pair_programming.md`
- `codex-rs/collaboration-mode-templates/templates/plan.md`
- `codex-rs/core/templates/agents/orchestrator.md`
- `codex-rs/core/templates/collab/experimental_prompt.md`
- `codex-rs/core/templates/model_instructions/gpt-5.2-codex_instructions_template.md`
- `codex-rs/core/templates/personalities/gpt-5.2-codex_friendly.md`
- `codex-rs/core/templates/personalities/gpt-5.2-codex_pragmatic.md`
- `codex-rs/core/templates/review/history_message_completed.md`
- `codex-rs/core/templates/review/history_message_interrupted.md`
- `codex-rs/core/templates/search_tool/request_plugin_install_description.md`
- `codex-rs/core/templates/search_tool/tool_description.md`
- `codex-rs/ext/goal/templates/goals/budget_limit.md`
- `codex-rs/ext/goal/templates/goals/continuation.md`
- `codex-rs/ext/goal/templates/goals/objective_updated.md`
- `codex-rs/ext/memories/templates/memories/read_path.md`
- `codex-rs/ext/skills/BUILD.bazel`
- `codex-rs/ext/skills/Cargo.toml`
- `codex-rs/ext/skills/src/catalog.rs`
- `codex-rs/ext/skills/src/extension.rs`
- `codex-rs/ext/skills/src/lib.rs`
- `codex-rs/ext/skills/src/provider.rs`
- `codex-rs/ext/skills/src/provider/executor.rs`
- `codex-rs/ext/skills/src/provider/host.rs`
- `codex-rs/ext/skills/src/render.rs`
- `codex-rs/ext/skills/src/selection.rs`
- `codex-rs/ext/skills/src/sources.rs`
- `codex-rs/ext/skills/src/state.rs`
- `codex-rs/ext/skills/tests/executor_file_system_authority.rs`
- `codex-rs/ext/skills/tests/skills_extension.rs`
- `codex-rs/memories/write/templates/extensions/ad_hoc/instructions.md`
- `codex-rs/memories/write/templates/memories/consolidation.md`
- `codex-rs/memories/write/templates/memories/stage_one_input.md`
- `codex-rs/memories/write/templates/memories/stage_one_system.md`
- `codex-rs/prompts/templates/agents/hierarchical.md`
- `codex-rs/prompts/templates/apply_patch_tool_instructions.md`
- `codex-rs/prompts/templates/compact/prompt.md`
- `codex-rs/prompts/templates/compact/summary_prefix.md`
- `codex-rs/prompts/templates/goals/budget_limit.md`
- `codex-rs/prompts/templates/goals/continuation.md`
- `codex-rs/prompts/templates/goals/objective_updated.md`
- `codex-rs/prompts/templates/permissions/approval_policy/never.md`
- `codex-rs/prompts/templates/permissions/approval_policy/on_failure.md`
- `codex-rs/prompts/templates/permissions/approval_policy/on_request.md`
- `codex-rs/prompts/templates/permissions/approval_policy/on_request_rule_request_permission.md`
- `codex-rs/prompts/templates/permissions/approval_policy/unless_trusted.md`
- `codex-rs/prompts/templates/permissions/sandbox_mode/danger_full_access.md`
- `codex-rs/prompts/templates/permissions/sandbox_mode/read_only.md`
- `codex-rs/prompts/templates/permissions/sandbox_mode/workspace_write.md`
- `codex-rs/prompts/templates/realtime/backend_prompt.md`
- `codex-rs/prompts/templates/realtime/realtime_end.md`
- `codex-rs/prompts/templates/realtime/realtime_start.md`
- `codex-rs/prompts/templates/review/exit_interrupted.xml`
- `codex-rs/prompts/templates/review/exit_success.xml`
- `codex-rs/prompts/templates/review/rubric.md`
- `codex-rs/skills/BUILD.bazel`
- `codex-rs/skills/Cargo.toml`
- `codex-rs/skills/build.rs`
- `codex-rs/skills/src/assets/samples/imagegen/LICENSE.txt`
- `codex-rs/skills/src/assets/samples/imagegen/SKILL.md`
- `codex-rs/skills/src/assets/samples/imagegen/agents/openai.yaml`
- `codex-rs/skills/src/assets/samples/imagegen/assets/imagegen-small.svg`
- `codex-rs/skills/src/assets/samples/imagegen/assets/imagegen.png`
- `codex-rs/skills/src/assets/samples/imagegen/references/cli.md`
- `codex-rs/skills/src/assets/samples/imagegen/references/codex-network.md`
- `codex-rs/skills/src/assets/samples/imagegen/references/image-api.md`
- `codex-rs/skills/src/assets/samples/imagegen/references/prompting.md`
- `codex-rs/skills/src/assets/samples/imagegen/references/sample-prompts.md`
- `codex-rs/skills/src/assets/samples/imagegen/scripts/image_gen.py`
- `codex-rs/skills/src/assets/samples/imagegen/scripts/remove_chroma_key.py`
- `codex-rs/skills/src/assets/samples/openai-docs/LICENSE.txt`
- `codex-rs/skills/src/assets/samples/openai-docs/SKILL.md`
- `codex-rs/skills/src/assets/samples/openai-docs/agents/openai.yaml`
- `codex-rs/skills/src/assets/samples/openai-docs/assets/openai-small.svg`
- `codex-rs/skills/src/assets/samples/openai-docs/assets/openai.png`
- `codex-rs/skills/src/assets/samples/openai-docs/references/latest-model.md`
- `codex-rs/skills/src/assets/samples/openai-docs/references/prompting-guide.md`
- ... 31 more

## 테스트 / CI / 배포 표면

### 테스트 후보

- `codex-rs/app-server-protocol/tests/schema_fixtures.rs`
- `codex-rs/app-server-transport/src/transport/remote_control/tests/clients_tests.rs`
- `codex-rs/app-server-transport/src/transport/remote_control/tests/pairing_tests.rs`
- `codex-rs/app-server/tests/all.rs`
- `codex-rs/app-server/tests/common/BUILD.bazel`
- `codex-rs/app-server/tests/common/Cargo.toml`
- `codex-rs/app-server/tests/common/analytics_server.rs`
- `codex-rs/app-server/tests/common/auth_fixtures.rs`
- `codex-rs/app-server/tests/common/config.rs`
- `codex-rs/app-server/tests/common/lib.rs`
- `codex-rs/app-server/tests/common/mock_model_server.rs`
- `codex-rs/app-server/tests/common/models_cache.rs`
- `codex-rs/app-server/tests/common/responses.rs`
- `codex-rs/app-server/tests/common/rollout.rs`
- `codex-rs/app-server/tests/common/test_app_server.rs`
- `codex-rs/app-server/tests/suite/auth.rs`
- `codex-rs/app-server/tests/suite/conversation_summary.rs`
- `codex-rs/app-server/tests/suite/fuzzy_file_search.rs`
- `codex-rs/app-server/tests/suite/mod.rs`
- `codex-rs/app-server/tests/suite/strict_config.rs`
- `codex-rs/app-server/tests/suite/v2/account.rs`
- `codex-rs/app-server/tests/suite/v2/analytics.rs`
- `codex-rs/app-server/tests/suite/v2/app_list.rs`
- `codex-rs/app-server/tests/suite/v2/attestation.rs`
- `codex-rs/app-server/tests/suite/v2/client_metadata.rs`
- `codex-rs/app-server/tests/suite/v2/collaboration_mode_list.rs`
- `codex-rs/app-server/tests/suite/v2/command_exec.rs`
- `codex-rs/app-server/tests/suite/v2/compaction.rs`
- `codex-rs/app-server/tests/suite/v2/config_rpc.rs`
- `codex-rs/app-server/tests/suite/v2/connection_handling_websocket.rs`
- `codex-rs/app-server/tests/suite/v2/connection_handling_websocket_unix.rs`
- `codex-rs/app-server/tests/suite/v2/dynamic_tools.rs`
- `codex-rs/app-server/tests/suite/v2/executor_skills.rs`
- `codex-rs/app-server/tests/suite/v2/experimental_api.rs`
- `codex-rs/app-server/tests/suite/v2/experimental_feature_list.rs`
- `codex-rs/app-server/tests/suite/v2/external_agent_config.rs`
- `codex-rs/app-server/tests/suite/v2/fs.rs`
- `codex-rs/app-server/tests/suite/v2/hooks_list.rs`
- `codex-rs/app-server/tests/suite/v2/imagegen_extension.rs`
- `codex-rs/app-server/tests/suite/v2/initialize.rs`
- `codex-rs/app-server/tests/suite/v2/marketplace_add.rs`
- `codex-rs/app-server/tests/suite/v2/marketplace_remove.rs`
- `codex-rs/app-server/tests/suite/v2/marketplace_upgrade.rs`
- `codex-rs/app-server/tests/suite/v2/mcp_resource.rs`
- `codex-rs/app-server/tests/suite/v2/mcp_server_elicitation.rs`
- `codex-rs/app-server/tests/suite/v2/mcp_server_status.rs`
- `codex-rs/app-server/tests/suite/v2/mcp_tool.rs`
- `codex-rs/app-server/tests/suite/v2/memory_reset.rs`
- `codex-rs/app-server/tests/suite/v2/mod.rs`
- `codex-rs/app-server/tests/suite/v2/model_list.rs`
- `codex-rs/app-server/tests/suite/v2/model_provider_capabilities_read.rs`
- `codex-rs/app-server/tests/suite/v2/output_schema.rs`
- `codex-rs/app-server/tests/suite/v2/permission_profile_list.rs`
- `codex-rs/app-server/tests/suite/v2/plan_item.rs`
- `codex-rs/app-server/tests/suite/v2/plugin_install.rs`
- `codex-rs/app-server/tests/suite/v2/plugin_list.rs`
- `codex-rs/app-server/tests/suite/v2/plugin_read.rs`
- `codex-rs/app-server/tests/suite/v2/plugin_share.rs`
- `codex-rs/app-server/tests/suite/v2/plugin_uninstall.rs`
- `codex-rs/app-server/tests/suite/v2/process_exec.rs`
- `codex-rs/app-server/tests/suite/v2/rate_limits.rs`
- `codex-rs/app-server/tests/suite/v2/realtime_conversation.rs`
- `codex-rs/app-server/tests/suite/v2/remote_control.rs`
- `codex-rs/app-server/tests/suite/v2/remote_thread_store.rs`
- `codex-rs/app-server/tests/suite/v2/request_permissions.rs`
- `codex-rs/app-server/tests/suite/v2/request_user_input.rs`
- `codex-rs/app-server/tests/suite/v2/review.rs`
- `codex-rs/app-server/tests/suite/v2/safety_check_downgrade.rs`
- `codex-rs/app-server/tests/suite/v2/skills_list.rs`
- `codex-rs/app-server/tests/suite/v2/thread_archive.rs`
- `codex-rs/app-server/tests/suite/v2/thread_fork.rs`
- `codex-rs/app-server/tests/suite/v2/thread_inject_items.rs`
- `codex-rs/app-server/tests/suite/v2/thread_list.rs`
- `codex-rs/app-server/tests/suite/v2/thread_loaded_list.rs`
- `codex-rs/app-server/tests/suite/v2/thread_memory_mode_set.rs`
- `codex-rs/app-server/tests/suite/v2/thread_metadata_update.rs`
- `codex-rs/app-server/tests/suite/v2/thread_name_websocket.rs`
- `codex-rs/app-server/tests/suite/v2/thread_read.rs`
- `codex-rs/app-server/tests/suite/v2/thread_resume.rs`
- `codex-rs/app-server/tests/suite/v2/thread_rollback.rs`
- ... 40 more

### CI/Docker 후보

- `.devcontainer/Dockerfile`
- `.github/workflows/Dockerfile.bazel`
- `.github/workflows/README.md`
- `.github/workflows/bazel.yml`
- `.github/workflows/blob-size-policy.yml`
- `.github/workflows/cargo-deny.yml`
- `.github/workflows/ci.yml`
- `.github/workflows/cla.yml`
- `.github/workflows/close-stale-contributor-prs.yml`
- `.github/workflows/codespell.yml`
- `.github/workflows/issue-deduplicator.yml`
- `.github/workflows/issue-labeler.yml`
- `.github/workflows/python-runtime-build.yml`
- `.github/workflows/python-runtime-release.yml`
- `.github/workflows/python-sdk-release.yml`
- `.github/workflows/rust-ci-full-nextest-platform.yml`
- `.github/workflows/rust-ci-full.yml`
- `.github/workflows/rust-ci.yml`
- `.github/workflows/rust-release-argument-comment-lint.yml`
- `.github/workflows/rust-release-prepare.yml`
- `.github/workflows/rust-release-windows.yml`
- `.github/workflows/rust-release-zsh.yml`
- `.github/workflows/rust-release.yml`
- `.github/workflows/rusty-v8-release.yml`
- `.github/workflows/sdk.yml`
- `.github/workflows/v8-canary.yml`
- `.github/workflows/zstd`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .rs | 2152 |
| .ts | 580 |
| .snap | 543 |
| .txt | 443 |
| .json | 304 |
| .md | 170 |
| .toml | 144 |
| .bazel | 137 |
| .py | 128 |
| .sql | 39 |
| .yml | 38 |
| .sh | 35 |
| .patch | 29 |
| .yaml | 15 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `tools/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `codex-rs/ 내부 책임 분리`
- `codex-rs/tui/ 내부 책임 분리`
- `.codex/skills/babysit-pr/SKILL.md 스펙/명령 의미`
- `.codex/skills/babysit-pr/agents/openai.yaml 스펙/명령 의미`
- `.codex/skills/babysit-pr/references/github-api-notes.md 스펙/명령 의미`
- `.codex/skills/babysit-pr/references/heuristics.md 스펙/명령 의미`
- `.codex/skills/babysit-pr/scripts/gh_pr_watch.py 스펙/명령 의미`
- `.devcontainer/Dockerfile 실행 스크립트와 패키지 경계`
- `.devcontainer/codex-install/package.json 실행 스크립트와 패키지 경계`
- `.devcontainer/codex-install/pnpm-lock.yaml 실행 스크립트와 패키지 경계`
- `.devcontainer/codex-install/pnpm-workspace.yaml 실행 스크립트와 패키지 경계`
- `codex-cli/package.json 실행 스크립트와 패키지 경계`

