# QwenLM/qwen-code Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 3114 files, 460 directories.

## 요약

- 조사 단위: `sources/QwenLM__qwen-code` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,955 files, 437 directories, depth score 138, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/sdk-typescript/src/mcp/createSdkMcpServer.ts, packages/sdk-typescript/src/mcp/formatters.ts, packages/sdk-typescript/src/mcp/SdkControlServerTransport.ts이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | QwenLM/qwen-code |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/QwenLM__qwen-code](../../../../sources/QwenLM__qwen-code) |
| Existing report | [reports/clone-structures/QwenLM__qwen-code.md](../../../clone-structures/QwenLM__qwen-code.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2955 / 437 |
| Max observed depth | 13 |
| Top directories | .github, .husky, .qwen, docs, docs-site, eslint-rules, integration-tests, packages, scripts |
| Top extensions | .ts: 1947, .tsx: 434, .md: 214, .js: 73, .json: 59, .java: 36, .yml: 26, .snap: 25, .py: 24, (none): 23, .sh: 22, .css: 16 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/core | packages workspace | 90 |
| docs | documentation surface | 62 |
| packages/vscode-ide-companion | packages workspace | 45 |
| packages/cli | packages workspace | 34 |
| packages/webui | packages workspace | 25 |
| packages/channels | packages workspace | 20 |
| packages/web-templates | packages workspace | 14 |
| packages/sdk-typescript | packages workspace | 11 |
| packages/acp-bridge | packages workspace | 4 |
| packages/sdk-java | packages workspace | 2 |
| packages/sdk-python | packages workspace | 2 |
| .github | ci surface | 1 |
| docs-site | documentation surface | 1 |
| eslint-rules | top-level component | 1 |
| integration-tests | validation surface | 1 |
| packages | source boundary | 1 |
| packages/zed-extension | packages workspace | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | start | cross-env node scripts/start.js |
| serve-dev | package.json | dev | node scripts/dev.js |
| test | package.json | debug | cross-env DEBUG=1 node --inspect-brk scripts/start.js |
| utility | package.json | generate | node scripts/generate-git-commit-info.js |
| utility | package.json | generate:settings-schema | node --import tsx/esm scripts/generate-settings-schema.ts |
| build | package.json | build | cross-env NODE_OPTIONS="--max-old-space-size=3072" node scripts/build.js |
| serve-dev | package.json | build-and-start | npm run build && npm run start |
| build | package.json | build:vscode | node scripts/build_vscode_companion.js |
| build | package.json | build:all | npm run build && npm run build:sandbox && npm run build:vscode |
| build | package.json | build:packages | npm run build --workspaces |
| build | package.json | build:sandbox | node scripts/build_sandbox.js |
| build | package.json | bundle | npm run generate && node esbuild.config.js && node scripts/copy_bundle_assets.js |
| test | package.json | test | cross-env NODE_OPTIONS="--max-old-space-size=3072" npm run test --workspaces --if-present --parallel |
| test | package.json | test:ci | cross-env NODE_OPTIONS="--max-old-space-size=3072" npm run test:ci --workspaces --if-present --parallel && npm run test:scripts |
| test | package.json | test:scripts | vitest run --config ./scripts/tests/vitest.config.ts |
| test | package.json | test:e2e | cross-env VERBOSE=true KEEP_OUTPUT=true npm run test:integration:sandbox:none |
| test | package.json | test:integration:all | npm run test:integration:sandbox:none && npm run test:integration:sandbox:docker && npm run test:integration:sandbox:podman |
| test | package.json | test:integration:sandbox:none | cross-env QWEN_SANDBOX=false vitest run --root ./integration-tests |
| test | package.json | test:integration:sandbox:docker | cross-env QWEN_SANDBOX=docker npm run build:sandbox && QWEN_SANDBOX=docker vitest run --root ./integration-tests |
| test | package.json | test:integration:sandbox:podman | cross-env QWEN_SANDBOX=podman vitest run --root ./integration-tests |
| test | package.json | test:integration:sdk:sandbox:none | cross-env QWEN_SANDBOX=false vitest run --root ./integration-tests --poolOptions.threads.maxThreads 2 sdk-typescript |
| test | package.json | test:integration:sdk:sandbox:docker | cross-env QWEN_SANDBOX=docker npm run build:sandbox && QWEN_SANDBOX=docker vitest run --root ./integration-tests --poolOptions.threads.maxThreads 2 sdk-typescript |
| test | package.json | test:sdk:python | python3 -m pytest -c packages/sdk-python/pyproject.toml packages/sdk-python/tests -q |
| test | package.json | test:integration:cli:sandbox:none | cross-env QWEN_SANDBOX=false vitest run --root ./integration-tests cli |
| test | package.json | test:integration:cli:sandbox:docker | cross-env QWEN_SANDBOX=docker npm run build:sandbox && QWEN_SANDBOX=docker vitest run --root ./integration-tests cli |
| test | package.json | test:integration:interactive:sandbox:none | cross-env QWEN_SANDBOX=false vitest run --root ./integration-tests interactive |
| test | package.json | test:integration:interactive:sandbox:docker | cross-env QWEN_SANDBOX=docker npm run build:sandbox && QWEN_SANDBOX=docker vitest run --root ./integration-tests interactive |
| test | package.json | test:terminal-bench | cross-env VERBOSE=true KEEP_OUTPUT=true vitest run --config ./vitest.terminal-bench.config.ts --root ./integration-tests |
| test | package.json | test:terminal-bench:oracle | cross-env VERBOSE=true KEEP_OUTPUT=true vitest run --config ./vitest.terminal-bench.config.ts --root ./integration-tests -t 'oracle' |
| test | package.json | test:terminal-bench:qwen | cross-env VERBOSE=true KEEP_OUTPUT=true vitest run --config ./vitest.terminal-bench.config.ts --root ./integration-tests -t 'qwen' |
| test | package.json | lint | eslint . --ext .ts,.tsx && eslint integration-tests |
| test | package.json | lint:fix | eslint . --fix && eslint integration-tests --fix |
| test | package.json | lint:ci | eslint . --ext .ts,.tsx --max-warnings 0 && eslint integration-tests --max-warnings 0 |
| quality | package.json | lint:sdk:python | python3 -m ruff check --config packages/sdk-python/pyproject.toml packages/sdk-python |
| quality | package.json | lint:all | node scripts/lint.js |
| quality | package.json | format | prettier --experimental-cli --write . |
| quality | package.json | typecheck | npm run typecheck --workspaces --if-present |
| quality | package.json | typecheck:sdk:python | python3 -m mypy --config-file packages/sdk-python/pyproject.toml packages/sdk-python/src |
| utility | package.json | smoke:sdk:python | python3 packages/sdk-python/scripts/smoke_real.py |
| build | package.json | build:sdk:python | python3 -m build packages/sdk-python |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | react |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [packages/sdk-typescript/src/mcp/createSdkMcpServer.ts](../../../../sources/QwenLM__qwen-code/packages/sdk-typescript/src/mcp/createSdkMcpServer.ts) | mcp signal |
| mcp | [packages/sdk-typescript/src/mcp/formatters.ts](../../../../sources/QwenLM__qwen-code/packages/sdk-typescript/src/mcp/formatters.ts) | mcp signal |
| mcp | [packages/sdk-typescript/src/mcp/SdkControlServerTransport.ts](../../../../sources/QwenLM__qwen-code/packages/sdk-typescript/src/mcp/SdkControlServerTransport.ts) | mcp signal |
| mcp | [packages/sdk-typescript/src/mcp/tool.ts](../../../../sources/QwenLM__qwen-code/packages/sdk-typescript/src/mcp/tool.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/QwenLM__qwen-code/AGENTS.md) | agentRuntime signal |
| agentRuntime | [scripts/sandbox_command.js](../../../../sources/QwenLM__qwen-code/scripts/sandbox_command.js) | agentRuntime signal |
| agentRuntime | [packages/webui/src/hooks/useFollowupSuggestions.ts](../../../../sources/QwenLM__qwen-code/packages/webui/src/hooks/useFollowupSuggestions.ts) | agentRuntime signal |
| agentRuntime | [packages/webui/src/hooks/useLocalStorage.ts](../../../../sources/QwenLM__qwen-code/packages/webui/src/hooks/useLocalStorage.ts) | agentRuntime signal |
| entrypoints | [packages/webui/src/index.ts](../../../../sources/QwenLM__qwen-code/packages/webui/src/index.ts) | entrypoints signal |
| entrypoints | [packages/webui/src/components/layout/Main.tsx](../../../../sources/QwenLM__qwen-code/packages/webui/src/components/layout/Main.tsx) | entrypoints signal |
| entrypoints | [packages/webui/.storybook/main.ts](../../../../sources/QwenLM__qwen-code/packages/webui/.storybook/main.ts) | entrypoints signal |
| entrypoints | [packages/web-templates/src/index.ts](../../../../sources/QwenLM__qwen-code/packages/web-templates/src/index.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 20 | [packages/webui/src/index.ts](../../../../sources/QwenLM__qwen-code/packages/webui/src/index.ts)<br>[packages/webui/src/components/layout/Main.tsx](../../../../sources/QwenLM__qwen-code/packages/webui/src/components/layout/Main.tsx)<br>[packages/webui/.storybook/main.ts](../../../../sources/QwenLM__qwen-code/packages/webui/.storybook/main.ts)<br>[packages/web-templates/src/index.ts](../../../../sources/QwenLM__qwen-code/packages/web-templates/src/index.ts)<br>[packages/web-templates/src/insight/src/App.tsx](../../../../sources/QwenLM__qwen-code/packages/web-templates/src/insight/src/App.tsx)<br>[packages/web-templates/src/export-html/src/index.html](../../../../sources/QwenLM__qwen-code/packages/web-templates/src/export-html/src/index.html)<br>[packages/web-templates/src/export-html/src/main.tsx](../../../../sources/QwenLM__qwen-code/packages/web-templates/src/export-html/src/main.tsx)<br>[packages/sdk-typescript/src/index.ts](../../../../sources/QwenLM__qwen-code/packages/sdk-typescript/src/index.ts) |
| agentRuntime | 538 | [AGENTS.md](../../../../sources/QwenLM__qwen-code/AGENTS.md)<br>[scripts/sandbox_command.js](../../../../sources/QwenLM__qwen-code/scripts/sandbox_command.js)<br>[packages/webui/src/hooks/useFollowupSuggestions.ts](../../../../sources/QwenLM__qwen-code/packages/webui/src/hooks/useFollowupSuggestions.ts)<br>[packages/webui/src/hooks/useLocalStorage.ts](../../../../sources/QwenLM__qwen-code/packages/webui/src/hooks/useLocalStorage.ts)<br>[packages/webui/src/hooks/useTheme.ts](../../../../sources/QwenLM__qwen-code/packages/webui/src/hooks/useTheme.ts)<br>[packages/webui/src/context/PlatformContext.tsx](../../../../sources/QwenLM__qwen-code/packages/webui/src/context/PlatformContext.tsx)<br>[packages/web-templates/src/export-html/src/components/hooks.ts](../../../../sources/QwenLM__qwen-code/packages/web-templates/src/export-html/src/components/hooks.ts)<br>[packages/vscode-ide-companion/src/webview/hooks/useCompletionTrigger.ts](../../../../sources/QwenLM__qwen-code/packages/vscode-ide-companion/src/webview/hooks/useCompletionTrigger.ts) |
| mcp | 75 | [packages/sdk-typescript/src/mcp/createSdkMcpServer.ts](../../../../sources/QwenLM__qwen-code/packages/sdk-typescript/src/mcp/createSdkMcpServer.ts)<br>[packages/sdk-typescript/src/mcp/formatters.ts](../../../../sources/QwenLM__qwen-code/packages/sdk-typescript/src/mcp/formatters.ts)<br>[packages/sdk-typescript/src/mcp/SdkControlServerTransport.ts](../../../../sources/QwenLM__qwen-code/packages/sdk-typescript/src/mcp/SdkControlServerTransport.ts)<br>[packages/sdk-typescript/src/mcp/tool.ts](../../../../sources/QwenLM__qwen-code/packages/sdk-typescript/src/mcp/tool.ts)<br>[packages/core/src/tools/mcp-client-manager.test.ts](../../../../sources/QwenLM__qwen-code/packages/core/src/tools/mcp-client-manager.test.ts)<br>[packages/core/src/tools/mcp-client-manager.ts](../../../../sources/QwenLM__qwen-code/packages/core/src/tools/mcp-client-manager.ts)<br>[packages/core/src/tools/mcp-client.test.ts](../../../../sources/QwenLM__qwen-code/packages/core/src/tools/mcp-client.test.ts)<br>[packages/core/src/tools/mcp-client.ts](../../../../sources/QwenLM__qwen-code/packages/core/src/tools/mcp-client.ts) |
| retrieval | 128 | [packages/webui/src/index.ts](../../../../sources/QwenLM__qwen-code/packages/webui/src/index.ts)<br>[packages/webui/src/components/toolcalls/index.ts](../../../../sources/QwenLM__qwen-code/packages/webui/src/components/toolcalls/index.ts)<br>[packages/webui/src/components/toolcalls/shared/index.ts](../../../../sources/QwenLM__qwen-code/packages/webui/src/components/toolcalls/shared/index.ts)<br>[packages/webui/src/components/messages/MarkdownRenderer/index.ts](../../../../sources/QwenLM__qwen-code/packages/webui/src/components/messages/MarkdownRenderer/index.ts)<br>[packages/webui/src/components/messages/Assistant/index.ts](../../../../sources/QwenLM__qwen-code/packages/webui/src/components/messages/Assistant/index.ts)<br>[packages/webui/src/components/icons/index.ts](../../../../sources/QwenLM__qwen-code/packages/webui/src/components/icons/index.ts)<br>[packages/webui/src/components/ChatViewer/index.ts](../../../../sources/QwenLM__qwen-code/packages/webui/src/components/ChatViewer/index.ts)<br>[packages/webui/src/adapters/index.ts](../../../../sources/QwenLM__qwen-code/packages/webui/src/adapters/index.ts) |
| spec | 44 | [packages/core/src/skills/bundled/review/DESIGN.md](../../../../sources/QwenLM__qwen-code/packages/core/src/skills/bundled/review/DESIGN.md)<br>[integration-tests/concurrent-runner/requirements.txt](../../../../sources/QwenLM__qwen-code/integration-tests/concurrent-runner/requirements.txt)<br>[docs/users/ide-integration/ide-companion-spec.md](../../../../sources/QwenLM__qwen-code/docs/users/ide-integration/ide-companion-spec.md)<br>[docs/plans/2026-03-22-agent-tool-display-design.md](../../../../sources/QwenLM__qwen-code/docs/plans/2026-03-22-agent-tool-display-design.md)<br>[docs/plans/memory-diagnostics-reference-design.md](../../../../sources/QwenLM__qwen-code/docs/plans/memory-diagnostics-reference-design.md)<br>[docs/developers/architecture.md](../../../../sources/QwenLM__qwen-code/docs/developers/architecture.md)<br>[docs/developers/roadmap.md](../../../../sources/QwenLM__qwen-code/docs/developers/roadmap.md)<br>[docs/design/2026-05-15-async-memory-recall-design.md](../../../../sources/QwenLM__qwen-code/docs/design/2026-05-15-async-memory-recall-design.md) |
| eval | 1068 | [scripts/benchmark-api-latency.mjs](../../../../sources/QwenLM__qwen-code/scripts/benchmark-api-latency.mjs)<br>[scripts/test-rewind-e2e.sh](../../../../sources/QwenLM__qwen-code/scripts/test-rewind-e2e.sh)<br>[scripts/test-windows-paths.js](../../../../sources/QwenLM__qwen-code/scripts/test-windows-paths.js)<br>[scripts/tests/check-i18n.test.ts](../../../../sources/QwenLM__qwen-code/scripts/tests/check-i18n.test.ts)<br>[scripts/tests/dev.test.js](../../../../sources/QwenLM__qwen-code/scripts/tests/dev.test.js)<br>[scripts/tests/generate-changelog.test.js](../../../../sources/QwenLM__qwen-code/scripts/tests/generate-changelog.test.js)<br>[scripts/tests/get-release-version-python-sdk.test.js](../../../../sources/QwenLM__qwen-code/scripts/tests/get-release-version-python-sdk.test.js)<br>[scripts/tests/get-release-version.test.js](../../../../sources/QwenLM__qwen-code/scripts/tests/get-release-version.test.js) |
| security | 60 | [SECURITY.md](../../../../sources/QwenLM__qwen-code/SECURITY.md)<br>[scripts/build_sandbox.js](../../../../sources/QwenLM__qwen-code/scripts/build_sandbox.js)<br>[scripts/sandbox_command.js](../../../../sources/QwenLM__qwen-code/scripts/sandbox_command.js)<br>[packages/core/src/tools/computer-use/permission-detector.test.ts](../../../../sources/QwenLM__qwen-code/packages/core/src/tools/computer-use/permission-detector.test.ts)<br>[packages/core/src/tools/computer-use/permission-detector.ts](../../../../sources/QwenLM__qwen-code/packages/core/src/tools/computer-use/permission-detector.ts)<br>[packages/core/src/permissions/permission-manager.test.ts](../../../../sources/QwenLM__qwen-code/packages/core/src/permissions/permission-manager.test.ts)<br>[packages/core/src/permissions/permission-manager.ts](../../../../sources/QwenLM__qwen-code/packages/core/src/permissions/permission-manager.ts)<br>[packages/core/src/mcp/google-auth-provider.test.ts](../../../../sources/QwenLM__qwen-code/packages/core/src/mcp/google-auth-provider.test.ts) |
| ci | 20 | [.github/workflows/build-and-publish-image.yml](../../../../sources/QwenLM__qwen-code/.github/workflows/build-and-publish-image.yml)<br>[.github/workflows/check-issue-completeness.yml](../../../../sources/QwenLM__qwen-code/.github/workflows/check-issue-completeness.yml)<br>[.github/workflows/ci.yml](../../../../sources/QwenLM__qwen-code/.github/workflows/ci.yml)<br>[.github/workflows/desktop-release.yml](../../../../sources/QwenLM__qwen-code/.github/workflows/desktop-release.yml)<br>[.github/workflows/docs-page-action.yml](../../../../sources/QwenLM__qwen-code/.github/workflows/docs-page-action.yml)<br>[.github/workflows/e2e.yml](../../../../sources/QwenLM__qwen-code/.github/workflows/e2e.yml)<br>[.github/workflows/gemini-scheduled-pr-triage.yml](../../../../sources/QwenLM__qwen-code/.github/workflows/gemini-scheduled-pr-triage.yml)<br>[.github/workflows/qwen-automated-issue-triage.yml](../../../../sources/QwenLM__qwen-code/.github/workflows/qwen-automated-issue-triage.yml) |
| container | 5 | [Dockerfile](../../../../sources/QwenLM__qwen-code/Dockerfile)<br>[integration-tests/terminal-bench/ci-tasks/swe-bench-astropy-1/docker-compose.yaml](../../../../sources/QwenLM__qwen-code/integration-tests/terminal-bench/ci-tasks/swe-bench-astropy-1/docker-compose.yaml)<br>[integration-tests/terminal-bench/ci-tasks/swe-bench-astropy-1/Dockerfile](../../../../sources/QwenLM__qwen-code/integration-tests/terminal-bench/ci-tasks/swe-bench-astropy-1/Dockerfile)<br>[integration-tests/terminal-bench/ci-tasks/hello-world/docker-compose.yaml](../../../../sources/QwenLM__qwen-code/integration-tests/terminal-bench/ci-tasks/hello-world/docker-compose.yaml)<br>[integration-tests/terminal-bench/ci-tasks/hello-world/Dockerfile](../../../../sources/QwenLM__qwen-code/integration-tests/terminal-bench/ci-tasks/hello-world/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/QwenLM__qwen-code/AGENTS.md) |
| docs | 170 | [README.md](../../../../sources/QwenLM__qwen-code/README.md)<br>[packages/zed-extension/README.md](../../../../sources/QwenLM__qwen-code/packages/zed-extension/README.md)<br>[packages/webui/README.md](../../../../sources/QwenLM__qwen-code/packages/webui/README.md)<br>[packages/webui/examples/README.md](../../../../sources/QwenLM__qwen-code/packages/webui/examples/README.md)<br>[packages/webui/docs/WEBUI_MIGRATION_PLAN_EN.md](../../../../sources/QwenLM__qwen-code/packages/webui/docs/WEBUI_MIGRATION_PLAN_EN.md)<br>[packages/vscode-ide-companion/README.md](../../../../sources/QwenLM__qwen-code/packages/vscode-ide-companion/README.md)<br>[packages/sdk-typescript/README.md](../../../../sources/QwenLM__qwen-code/packages/sdk-typescript/README.md)<br>[packages/sdk-python/README.md](../../../../sources/QwenLM__qwen-code/packages/sdk-python/README.md) |
| config | 42 | [Makefile](../../../../sources/QwenLM__qwen-code/Makefile)<br>[package.json](../../../../sources/QwenLM__qwen-code/package.json)<br>[tsconfig.json](../../../../sources/QwenLM__qwen-code/tsconfig.json)<br>[packages/webui/package.json](../../../../sources/QwenLM__qwen-code/packages/webui/package.json)<br>[packages/webui/tsconfig.json](../../../../sources/QwenLM__qwen-code/packages/webui/tsconfig.json)<br>[packages/web-templates/package.json](../../../../sources/QwenLM__qwen-code/packages/web-templates/package.json)<br>[packages/web-templates/tsconfig.json](../../../../sources/QwenLM__qwen-code/packages/web-templates/tsconfig.json)<br>[packages/web-templates/src/insight/package.json](../../../../sources/QwenLM__qwen-code/packages/web-templates/src/insight/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1068 | [scripts/benchmark-api-latency.mjs](../../../../sources/QwenLM__qwen-code/scripts/benchmark-api-latency.mjs)<br>[scripts/test-rewind-e2e.sh](../../../../sources/QwenLM__qwen-code/scripts/test-rewind-e2e.sh)<br>[scripts/test-windows-paths.js](../../../../sources/QwenLM__qwen-code/scripts/test-windows-paths.js)<br>[scripts/tests/check-i18n.test.ts](../../../../sources/QwenLM__qwen-code/scripts/tests/check-i18n.test.ts)<br>[scripts/tests/dev.test.js](../../../../sources/QwenLM__qwen-code/scripts/tests/dev.test.js)<br>[scripts/tests/generate-changelog.test.js](../../../../sources/QwenLM__qwen-code/scripts/tests/generate-changelog.test.js) |
| CI workflows | 20 | [.github/workflows/build-and-publish-image.yml](../../../../sources/QwenLM__qwen-code/.github/workflows/build-and-publish-image.yml)<br>[.github/workflows/check-issue-completeness.yml](../../../../sources/QwenLM__qwen-code/.github/workflows/check-issue-completeness.yml)<br>[.github/workflows/ci.yml](../../../../sources/QwenLM__qwen-code/.github/workflows/ci.yml)<br>[.github/workflows/desktop-release.yml](../../../../sources/QwenLM__qwen-code/.github/workflows/desktop-release.yml)<br>[.github/workflows/docs-page-action.yml](../../../../sources/QwenLM__qwen-code/.github/workflows/docs-page-action.yml)<br>[.github/workflows/e2e.yml](../../../../sources/QwenLM__qwen-code/.github/workflows/e2e.yml) |
| Containers / deploy | 5 | [Dockerfile](../../../../sources/QwenLM__qwen-code/Dockerfile)<br>[integration-tests/terminal-bench/ci-tasks/swe-bench-astropy-1/docker-compose.yaml](../../../../sources/QwenLM__qwen-code/integration-tests/terminal-bench/ci-tasks/swe-bench-astropy-1/docker-compose.yaml)<br>[integration-tests/terminal-bench/ci-tasks/swe-bench-astropy-1/Dockerfile](../../../../sources/QwenLM__qwen-code/integration-tests/terminal-bench/ci-tasks/swe-bench-astropy-1/Dockerfile)<br>[integration-tests/terminal-bench/ci-tasks/hello-world/docker-compose.yaml](../../../../sources/QwenLM__qwen-code/integration-tests/terminal-bench/ci-tasks/hello-world/docker-compose.yaml)<br>[integration-tests/terminal-bench/ci-tasks/hello-world/Dockerfile](../../../../sources/QwenLM__qwen-code/integration-tests/terminal-bench/ci-tasks/hello-world/Dockerfile) |
| Security / policy | 60 | [SECURITY.md](../../../../sources/QwenLM__qwen-code/SECURITY.md)<br>[scripts/build_sandbox.js](../../../../sources/QwenLM__qwen-code/scripts/build_sandbox.js)<br>[scripts/sandbox_command.js](../../../../sources/QwenLM__qwen-code/scripts/sandbox_command.js)<br>[packages/core/src/tools/computer-use/permission-detector.test.ts](../../../../sources/QwenLM__qwen-code/packages/core/src/tools/computer-use/permission-detector.test.ts)<br>[packages/core/src/tools/computer-use/permission-detector.ts](../../../../sources/QwenLM__qwen-code/packages/core/src/tools/computer-use/permission-detector.ts)<br>[packages/core/src/permissions/permission-manager.test.ts](../../../../sources/QwenLM__qwen-code/packages/core/src/permissions/permission-manager.test.ts) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/QwenLM__qwen-code/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `packages/sdk-typescript/src/mcp/createSdkMcpServer.ts`, `packages/sdk-typescript/src/mcp/formatters.ts`, `packages/sdk-typescript/src/mcp/SdkControlServerTransport.ts`.
2. Trace execution through entrypoints: `packages/webui/src/index.ts`, `packages/webui/src/components/layout/Main.tsx`, `packages/webui/.storybook/main.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `scripts/sandbox_command.js`, `packages/webui/src/hooks/useFollowupSuggestions.ts`.
4. Inspect retrieval/memory/indexing through: `packages/webui/src/index.ts`, `packages/webui/src/components/toolcalls/index.ts`, `packages/webui/src/components/toolcalls/shared/index.ts`.
5. Verify behavior through test/eval files: `scripts/benchmark-api-latency.mjs`, `scripts/test-rewind-e2e.sh`, `scripts/test-windows-paths.js`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 3114 files, 460 directories.. 핵심 구조 신호는 package.json, Dockerfile, Makefile, README.md, AGENTS.md, react이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
