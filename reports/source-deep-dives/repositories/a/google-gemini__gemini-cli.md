# google-gemini/gemini-cli Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 2867 files, 267 directories.

## 요약

- 조사 단위: `sources/google-gemini__gemini-cli` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,856 files, 263 directories, depth score 138, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/test-utils/src/test-mcp-server-template.mjs, packages/test-utils/src/test-mcp-server.ts, packages/core/src/tools/list-mcp-resources.test.ts이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | google-gemini/gemini-cli |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 105365 |
| Forks | 14098 |
| License | Apache-2.0 |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/google-gemini__gemini-cli](../../../../sources/google-gemini__gemini-cli) |
| Existing report | [reports/global-trending/repositories/google-gemini__gemini-cli.md](../../../global-trending/repositories/google-gemini__gemini-cli.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2856 / 263 |
| Max observed depth | 10 |
| Top directories | .allstar, .gcp, .gemini, .github, .husky, docs, evals, integration-tests, memory-tests, packages, perf-tests, schemas, scripts, sea, third_party, tools |
| Top extensions | .ts: 1694, .tsx: 418, .md: 156, .snap: 120, .svg: 98, .responses: 72, .yml: 64, .js: 57, .json: 53, .png: 25, .toml: 24, (none): 22 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/core | packages workspace | 110 |
| docs | documentation surface | 31 |
| packages/test-utils | packages workspace | 23 |
| packages/sdk | packages workspace | 21 |
| packages/cli | packages workspace | 9 |
| packages/devtools | packages workspace | 8 |
| packages/vscode-ide-companion | packages workspace | 7 |
| packages/a2a-server | packages workspace | 6 |
| .github | ci surface | 1 |
| evals | top-level component | 1 |
| integration-tests | validation surface | 1 |
| memory-tests | validation surface | 1 |
| packages | source boundary | 1 |
| perf-tests | validation surface | 1 |
| schemas | top-level component | 1 |
| scripts | top-level component | 1 |
| sea | top-level component | 1 |
| third_party | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | start | cross-env NODE_ENV=development node scripts/start.js |
| serve-dev | package.json | start:prod | cross-env NODE_ENV=production node scripts/start.js |
| serve-dev | package.json | start:a2a-server | CODER_AGENT_PORT=41242 npm run start --workspace @google/gemini-cli-a2a-server |
| test | package.json | debug | cross-env DEBUG=1 node --inspect-brk scripts/start.js |
| utility | package.json | deflake | node scripts/deflake.js |
| test | package.json | deflake:test:integration:sandbox:none | npm run deflake -- --command="npm run test:integration:sandbox:none -- --retry=0" |
| test | package.json | deflake:test:integration:sandbox:docker | npm run deflake -- --command="npm run test:integration:sandbox:docker -- --retry=0" |
| utility | package.json | auth:npm | npx google-artifactregistry-auth |
| serve-dev | package.json | auth:docker | gcloud auth configure-docker us-west1-docker.pkg.dev |
| container | package.json | auth | npm run auth:npm && npm run auth:docker |
| utility | package.json | generate | node scripts/generate-git-commit-info.js |
| build | package.json | predocs:settings | npm run build --workspace @google/gemini-cli-core |
| utility | package.json | schema:settings | tsx ./scripts/generate-settings-schema.ts |
| utility | package.json | docs:settings | tsx ./scripts/generate-settings-doc.ts |
| utility | package.json | docs:keybindings | tsx ./scripts/generate-keybindings-doc.ts |
| build | package.json | build | node scripts/build.js |
| serve-dev | package.json | build-and-start | npm run build && npm run start -- |
| build | package.json | build:vscode | node scripts/build_vscode_companion.js |
| build | package.json | build:all | npm run build && npm run build:sandbox && npm run build:vscode |
| build | package.json | build:packages | npm run build --workspaces |
| build | package.json | build:sandbox | node scripts/build_sandbox.js |
| build | package.json | build:binary | node scripts/build_binary.js |
| serve-dev | package.json | bundle | npm run generate && npm run build --workspace=@google/gemini-cli-devtools && npm run bundle:browser-mcp -w @google/gemini-cli-core && node esbuild.config.js && node scripts/copy_bundle_assets.js |
| test | package.json | test | npm run test --workspaces --if-present && npm run test:sea-launch |
| test | package.json | test:ci | npm run test:ci --workspaces --if-present && npm run test:scripts && npm run test:sea-launch |
| test | package.json | test:scripts | vitest run --config ./scripts/tests/vitest.config.ts |
| test | package.json | test:sea-launch | vitest run sea/sea-launch.test.js |
| test | package.json | posttest | npm run build |
| test | package.json | test:always_passing_evals | vitest run --config evals/vitest.config.ts |
| test | package.json | test:all_evals | cross-env RUN_EVALS=1 vitest run --config evals/vitest.config.ts |
| test | package.json | test:e2e | cross-env VERBOSE=true KEEP_OUTPUT=true npm run test:integration:sandbox:none |
| test | package.json | test:integration:all | npm run test:integration:sandbox:none && npm run test:integration:sandbox:docker && npm run test:integration:sandbox:podman |
| test | package.json | test:integration:flaky | cross-env RUN_FLAKY_INTEGRATION=1 npm run test:integration:sandbox:none |
| test | package.json | test:integration:sandbox:none | cross-env GEMINI_SANDBOX=false vitest run --root ./integration-tests |
| test | package.json | test:memory | vitest run --root ./memory-tests |
| test | package.json | test:memory:update-baselines | cross-env UPDATE_MEMORY_BASELINES=true vitest run --root ./memory-tests |
| test | package.json | test:perf | vitest run --root ./perf-tests |
| test | package.json | test:perf:update-baselines | cross-env UPDATE_PERF_BASELINES=true vitest run --root ./perf-tests |
| test | package.json | test:integration:sandbox:docker | cross-env GEMINI_SANDBOX=docker npm run build:sandbox && cross-env GEMINI_SANDBOX=docker vitest run --root ./integration-tests |
| test | package.json | test:integration:sandbox:podman | cross-env GEMINI_SANDBOX=podman vitest run --root ./integration-tests |


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
| mcp | [packages/test-utils/src/test-mcp-server-template.mjs](../../../../sources/google-gemini__gemini-cli/packages/test-utils/src/test-mcp-server-template.mjs) | mcp signal |
| mcp | [packages/test-utils/src/test-mcp-server.ts](../../../../sources/google-gemini__gemini-cli/packages/test-utils/src/test-mcp-server.ts) | mcp signal |
| mcp | [packages/core/src/tools/list-mcp-resources.test.ts](../../../../sources/google-gemini__gemini-cli/packages/core/src/tools/list-mcp-resources.test.ts) | mcp signal |
| mcp | [packages/core/src/tools/list-mcp-resources.ts](../../../../sources/google-gemini__gemini-cli/packages/core/src/tools/list-mcp-resources.ts) | mcp signal |
| agentRuntime | [tools/gemini-cli-bot/ci-policy.toml](../../../../sources/google-gemini__gemini-cli/tools/gemini-cli-bot/ci-policy.toml) | agentRuntime signal |
| agentRuntime | [tools/gemini-cli-bot/README.md](../../../../sources/google-gemini__gemini-cli/tools/gemini-cli-bot/README.md) | agentRuntime signal |
| agentRuntime | [tools/gemini-cli-bot/metrics/history-helper.ts](../../../../sources/google-gemini__gemini-cli/tools/gemini-cli-bot/metrics/history-helper.ts) | agentRuntime signal |
| agentRuntime | [tools/gemini-cli-bot/metrics/index.ts](../../../../sources/google-gemini__gemini-cli/tools/gemini-cli-bot/metrics/index.ts) | agentRuntime signal |
| entrypoints | [third_party/get-ripgrep/src/index.js](../../../../sources/google-gemini__gemini-cli/third_party/get-ripgrep/src/index.js) | entrypoints signal |
| entrypoints | [packages/test-utils/src/index.ts](../../../../sources/google-gemini__gemini-cli/packages/test-utils/src/index.ts) | entrypoints signal |
| entrypoints | [packages/sdk/src/index.ts](../../../../sources/google-gemini__gemini-cli/packages/sdk/src/index.ts) | entrypoints signal |
| entrypoints | [packages/devtools/src/index.ts](../../../../sources/google-gemini__gemini-cli/packages/devtools/src/index.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 12 | [third_party/get-ripgrep/src/index.js](../../../../sources/google-gemini__gemini-cli/third_party/get-ripgrep/src/index.js)<br>[packages/test-utils/src/index.ts](../../../../sources/google-gemini__gemini-cli/packages/test-utils/src/index.ts)<br>[packages/sdk/src/index.ts](../../../../sources/google-gemini__gemini-cli/packages/sdk/src/index.ts)<br>[packages/devtools/src/index.ts](../../../../sources/google-gemini__gemini-cli/packages/devtools/src/index.ts)<br>[packages/devtools/client/src/App.tsx](../../../../sources/google-gemini__gemini-cli/packages/devtools/client/src/App.tsx)<br>[packages/devtools/client/src/main.tsx](../../../../sources/google-gemini__gemini-cli/packages/devtools/client/src/main.tsx)<br>[packages/core/src/index.test.ts](../../../../sources/google-gemini__gemini-cli/packages/core/src/index.test.ts)<br>[packages/core/src/index.ts](../../../../sources/google-gemini__gemini-cli/packages/core/src/index.ts) |
| agentRuntime | 695 | [tools/gemini-cli-bot/ci-policy.toml](../../../../sources/google-gemini__gemini-cli/tools/gemini-cli-bot/ci-policy.toml)<br>[tools/gemini-cli-bot/README.md](../../../../sources/google-gemini__gemini-cli/tools/gemini-cli-bot/README.md)<br>[tools/gemini-cli-bot/metrics/history-helper.ts](../../../../sources/google-gemini__gemini-cli/tools/gemini-cli-bot/metrics/history-helper.ts)<br>[tools/gemini-cli-bot/metrics/index.ts](../../../../sources/google-gemini__gemini-cli/tools/gemini-cli-bot/metrics/index.ts)<br>[tools/gemini-cli-bot/metrics/types.ts](../../../../sources/google-gemini__gemini-cli/tools/gemini-cli-bot/metrics/types.ts)<br>[tools/gemini-cli-bot/metrics/scripts/actions_spend.ts](../../../../sources/google-gemini__gemini-cli/tools/gemini-cli-bot/metrics/scripts/actions_spend.ts)<br>[tools/gemini-cli-bot/metrics/scripts/backlog_age.ts](../../../../sources/google-gemini__gemini-cli/tools/gemini-cli-bot/metrics/scripts/backlog_age.ts)<br>[tools/gemini-cli-bot/metrics/scripts/domain_expertise.ts](../../../../sources/google-gemini__gemini-cli/tools/gemini-cli-bot/metrics/scripts/domain_expertise.ts) |
| mcp | 70 | [packages/test-utils/src/test-mcp-server-template.mjs](../../../../sources/google-gemini__gemini-cli/packages/test-utils/src/test-mcp-server-template.mjs)<br>[packages/test-utils/src/test-mcp-server.ts](../../../../sources/google-gemini__gemini-cli/packages/test-utils/src/test-mcp-server.ts)<br>[packages/core/src/tools/list-mcp-resources.test.ts](../../../../sources/google-gemini__gemini-cli/packages/core/src/tools/list-mcp-resources.test.ts)<br>[packages/core/src/tools/list-mcp-resources.ts](../../../../sources/google-gemini__gemini-cli/packages/core/src/tools/list-mcp-resources.ts)<br>[packages/core/src/tools/mcp-client-manager.test.ts](../../../../sources/google-gemini__gemini-cli/packages/core/src/tools/mcp-client-manager.test.ts)<br>[packages/core/src/tools/mcp-client-manager.ts](../../../../sources/google-gemini__gemini-cli/packages/core/src/tools/mcp-client-manager.ts)<br>[packages/core/src/tools/mcp-client.test.ts](../../../../sources/google-gemini__gemini-cli/packages/core/src/tools/mcp-client.test.ts)<br>[packages/core/src/tools/mcp-client.ts](../../../../sources/google-gemini__gemini-cli/packages/core/src/tools/mcp-client.ts) |
| retrieval | 75 | [tools/gemini-cli-bot/metrics/index.ts](../../../../sources/google-gemini__gemini-cli/tools/gemini-cli-bot/metrics/index.ts)<br>[tools/gemini-cli-bot/.gemini/skills/memory/SKILL.md](../../../../sources/google-gemini__gemini-cli/tools/gemini-cli-bot/.gemini/skills/memory/SKILL.md)<br>[third_party/get-ripgrep/src/index.js](../../../../sources/google-gemini__gemini-cli/third_party/get-ripgrep/src/index.js)<br>[packages/test-utils/index.ts](../../../../sources/google-gemini__gemini-cli/packages/test-utils/index.ts)<br>[packages/test-utils/src/index.ts](../../../../sources/google-gemini__gemini-cli/packages/test-utils/src/index.ts)<br>[packages/test-utils/src/memory-baselines.ts](../../../../sources/google-gemini__gemini-cli/packages/test-utils/src/memory-baselines.ts)<br>[packages/test-utils/src/memory-test-harness.ts](../../../../sources/google-gemini__gemini-cli/packages/test-utils/src/memory-test-harness.ts)<br>[packages/sdk/index.ts](../../../../sources/google-gemini__gemini-cli/packages/sdk/index.ts) |
| spec | 4 | [ROADMAP.md](../../../../sources/google-gemini__gemini-cli/ROADMAP.md)<br>[packages/sdk/SDK_DESIGN.md](../../../../sources/google-gemini__gemini-cli/packages/sdk/SDK_DESIGN.md)<br>[packages/cli/src/config/extension-manager-themes.spec.ts](../../../../sources/google-gemini__gemini-cli/packages/cli/src/config/extension-manager-themes.spec.ts)<br>[docs/ide-integration/ide-companion-spec.md](../../../../sources/google-gemini__gemini-cli/docs/ide-integration/ide-companion-spec.md) |
| eval | 1278 | [sea/sea-launch.test.js](../../../../sources/google-gemini__gemini-cli/sea/sea-launch.test.js)<br>[scripts/eval_utils.js](../../../../sources/google-gemini__gemini-cli/scripts/eval_utils.js)<br>[scripts/run_eval_regression.js](../../../../sources/google-gemini__gemini-cli/scripts/run_eval_regression.js)<br>[scripts/seed-test-inbox.js](../../../../sources/google-gemini__gemini-cli/scripts/seed-test-inbox.js)<br>[scripts/test-windows-paths.js](../../../../sources/google-gemini__gemini-cli/scripts/test-windows-paths.js)<br>[scripts/tests/autogen.test.ts](../../../../sources/google-gemini__gemini-cli/scripts/tests/autogen.test.ts)<br>[scripts/tests/generate-keybindings-doc.test.ts](../../../../sources/google-gemini__gemini-cli/scripts/tests/generate-keybindings-doc.test.ts)<br>[scripts/tests/generate-settings-doc.test.ts](../../../../sources/google-gemini__gemini-cli/scripts/tests/generate-settings-doc.test.ts) |
| security | 157 | [SECURITY.md](../../../../sources/google-gemini__gemini-cli/SECURITY.md)<br>[tools/gemini-cli-bot/ci-policy.toml](../../../../sources/google-gemini__gemini-cli/tools/gemini-cli-bot/ci-policy.toml)<br>[scripts/build_sandbox.js](../../../../sources/google-gemini__gemini-cli/scripts/build_sandbox.js)<br>[scripts/sandbox_command.js](../../../../sources/google-gemini__gemini-cli/scripts/sandbox_command.js)<br>[packages/core/src/utils/oauth-flow.test.ts](../../../../sources/google-gemini__gemini-cli/packages/core/src/utils/oauth-flow.test.ts)<br>[packages/core/src/utils/oauth-flow.ts](../../../../sources/google-gemini__gemini-cli/packages/core/src/utils/oauth-flow.ts)<br>[packages/core/src/utils/security.test.ts](../../../../sources/google-gemini__gemini-cli/packages/core/src/utils/security.test.ts)<br>[packages/core/src/utils/security.ts](../../../../sources/google-gemini__gemini-cli/packages/core/src/utils/security.ts) |
| ci | 48 | [.github/workflows/agent-session-drift-check.yml](../../../../sources/google-gemini__gemini-cli/.github/workflows/agent-session-drift-check.yml)<br>[.github/workflows/build-unsigned-mac-binaries.yml](../../../../sources/google-gemini__gemini-cli/.github/workflows/build-unsigned-mac-binaries.yml)<br>[.github/workflows/chained_e2e.yml](../../../../sources/google-gemini__gemini-cli/.github/workflows/chained_e2e.yml)<br>[.github/workflows/ci.yml](../../../../sources/google-gemini__gemini-cli/.github/workflows/ci.yml)<br>[.github/workflows/community-report.yml](../../../../sources/google-gemini__gemini-cli/.github/workflows/community-report.yml)<br>[.github/workflows/deflake.yml](../../../../sources/google-gemini__gemini-cli/.github/workflows/deflake.yml)<br>[.github/workflows/docs-audit.yml](../../../../sources/google-gemini__gemini-cli/.github/workflows/docs-audit.yml)<br>[.github/workflows/docs-page-action.yml](../../../../sources/google-gemini__gemini-cli/.github/workflows/docs-page-action.yml) |
| container | 4 | [Dockerfile](../../../../sources/google-gemini__gemini-cli/Dockerfile)<br>[.gcp/Dockerfile.development](../../../../sources/google-gemini__gemini-cli/.gcp/Dockerfile.development)<br>[.gcp/Dockerfile.development.dockerignore](../../../../sources/google-gemini__gemini-cli/.gcp/Dockerfile.development.dockerignore)<br>[.gcp/Dockerfile.gemini-code-builder](../../../../sources/google-gemini__gemini-cli/.gcp/Dockerfile.gemini-code-builder) |
| instruction | 8 | [GEMINI.md](../../../../sources/google-gemini__gemini-cli/GEMINI.md)<br>[packages/vscode-ide-companion/GEMINI.md](../../../../sources/google-gemini__gemini-cli/packages/vscode-ide-companion/GEMINI.md)<br>[packages/test-utils/GEMINI.md](../../../../sources/google-gemini__gemini-cli/packages/test-utils/GEMINI.md)<br>[packages/sdk/GEMINI.md](../../../../sources/google-gemini__gemini-cli/packages/sdk/GEMINI.md)<br>[packages/devtools/GEMINI.md](../../../../sources/google-gemini__gemini-cli/packages/devtools/GEMINI.md)<br>[packages/core/GEMINI.md](../../../../sources/google-gemini__gemini-cli/packages/core/GEMINI.md)<br>[packages/cli/GEMINI.md](../../../../sources/google-gemini__gemini-cli/packages/cli/GEMINI.md)<br>[packages/a2a-server/GEMINI.md](../../../../sources/google-gemini__gemini-cli/packages/a2a-server/GEMINI.md) |
| docs | 134 | [README.md](../../../../sources/google-gemini__gemini-cli/README.md)<br>[tools/gemini-cli-bot/README.md](../../../../sources/google-gemini__gemini-cli/tools/gemini-cli-bot/README.md)<br>[perf-tests/README.md](../../../../sources/google-gemini__gemini-cli/perf-tests/README.md)<br>[packages/vscode-ide-companion/README.md](../../../../sources/google-gemini__gemini-cli/packages/vscode-ide-companion/README.md)<br>[packages/sdk/README.md](../../../../sources/google-gemini__gemini-cli/packages/sdk/README.md)<br>[packages/cli/src/commands/extensions/examples/themes-example/README.md](../../../../sources/google-gemini__gemini-cli/packages/cli/src/commands/extensions/examples/themes-example/README.md)<br>[packages/cli/src/commands/extensions/examples/policies/README.md](../../../../sources/google-gemini__gemini-cli/packages/cli/src/commands/extensions/examples/policies/README.md)<br>[packages/cli/src/commands/extensions/examples/mcp-server/README.md](../../../../sources/google-gemini__gemini-cli/packages/cli/src/commands/extensions/examples/mcp-server/README.md) |
| config | 23 | [Makefile](../../../../sources/google-gemini__gemini-cli/Makefile)<br>[package.json](../../../../sources/google-gemini__gemini-cli/package.json)<br>[tsconfig.json](../../../../sources/google-gemini__gemini-cli/tsconfig.json)<br>[third_party/get-ripgrep/package.json](../../../../sources/google-gemini__gemini-cli/third_party/get-ripgrep/package.json)<br>[perf-tests/tsconfig.json](../../../../sources/google-gemini__gemini-cli/perf-tests/tsconfig.json)<br>[packages/vscode-ide-companion/package.json](../../../../sources/google-gemini__gemini-cli/packages/vscode-ide-companion/package.json)<br>[packages/vscode-ide-companion/tsconfig.json](../../../../sources/google-gemini__gemini-cli/packages/vscode-ide-companion/tsconfig.json)<br>[packages/test-utils/package.json](../../../../sources/google-gemini__gemini-cli/packages/test-utils/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1278 | [sea/sea-launch.test.js](../../../../sources/google-gemini__gemini-cli/sea/sea-launch.test.js)<br>[scripts/eval_utils.js](../../../../sources/google-gemini__gemini-cli/scripts/eval_utils.js)<br>[scripts/run_eval_regression.js](../../../../sources/google-gemini__gemini-cli/scripts/run_eval_regression.js)<br>[scripts/seed-test-inbox.js](../../../../sources/google-gemini__gemini-cli/scripts/seed-test-inbox.js)<br>[scripts/test-windows-paths.js](../../../../sources/google-gemini__gemini-cli/scripts/test-windows-paths.js)<br>[scripts/tests/autogen.test.ts](../../../../sources/google-gemini__gemini-cli/scripts/tests/autogen.test.ts) |
| CI workflows | 48 | [.github/workflows/agent-session-drift-check.yml](../../../../sources/google-gemini__gemini-cli/.github/workflows/agent-session-drift-check.yml)<br>[.github/workflows/build-unsigned-mac-binaries.yml](../../../../sources/google-gemini__gemini-cli/.github/workflows/build-unsigned-mac-binaries.yml)<br>[.github/workflows/chained_e2e.yml](../../../../sources/google-gemini__gemini-cli/.github/workflows/chained_e2e.yml)<br>[.github/workflows/ci.yml](../../../../sources/google-gemini__gemini-cli/.github/workflows/ci.yml)<br>[.github/workflows/community-report.yml](../../../../sources/google-gemini__gemini-cli/.github/workflows/community-report.yml)<br>[.github/workflows/deflake.yml](../../../../sources/google-gemini__gemini-cli/.github/workflows/deflake.yml) |
| Containers / deploy | 4 | [Dockerfile](../../../../sources/google-gemini__gemini-cli/Dockerfile)<br>[.gcp/Dockerfile.development](../../../../sources/google-gemini__gemini-cli/.gcp/Dockerfile.development)<br>[.gcp/Dockerfile.development.dockerignore](../../../../sources/google-gemini__gemini-cli/.gcp/Dockerfile.development.dockerignore)<br>[.gcp/Dockerfile.gemini-code-builder](../../../../sources/google-gemini__gemini-cli/.gcp/Dockerfile.gemini-code-builder) |
| Security / policy | 157 | [SECURITY.md](../../../../sources/google-gemini__gemini-cli/SECURITY.md)<br>[tools/gemini-cli-bot/ci-policy.toml](../../../../sources/google-gemini__gemini-cli/tools/gemini-cli-bot/ci-policy.toml)<br>[scripts/build_sandbox.js](../../../../sources/google-gemini__gemini-cli/scripts/build_sandbox.js)<br>[scripts/sandbox_command.js](../../../../sources/google-gemini__gemini-cli/scripts/sandbox_command.js)<br>[packages/core/src/utils/oauth-flow.test.ts](../../../../sources/google-gemini__gemini-cli/packages/core/src/utils/oauth-flow.test.ts)<br>[packages/core/src/utils/oauth-flow.ts](../../../../sources/google-gemini__gemini-cli/packages/core/src/utils/oauth-flow.ts) |
| Agent instructions | 8 | [GEMINI.md](../../../../sources/google-gemini__gemini-cli/GEMINI.md)<br>[packages/vscode-ide-companion/GEMINI.md](../../../../sources/google-gemini__gemini-cli/packages/vscode-ide-companion/GEMINI.md)<br>[packages/test-utils/GEMINI.md](../../../../sources/google-gemini__gemini-cli/packages/test-utils/GEMINI.md)<br>[packages/sdk/GEMINI.md](../../../../sources/google-gemini__gemini-cli/packages/sdk/GEMINI.md)<br>[packages/devtools/GEMINI.md](../../../../sources/google-gemini__gemini-cli/packages/devtools/GEMINI.md)<br>[packages/core/GEMINI.md](../../../../sources/google-gemini__gemini-cli/packages/core/GEMINI.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `packages/test-utils/src/test-mcp-server-template.mjs`, `packages/test-utils/src/test-mcp-server.ts`, `packages/core/src/tools/list-mcp-resources.test.ts`.
2. Trace execution through entrypoints: `third_party/get-ripgrep/src/index.js`, `packages/test-utils/src/index.ts`, `packages/sdk/src/index.ts`.
3. Map agent/tool runtime through: `tools/gemini-cli-bot/ci-policy.toml`, `tools/gemini-cli-bot/README.md`, `tools/gemini-cli-bot/metrics/history-helper.ts`.
4. Inspect retrieval/memory/indexing through: `tools/gemini-cli-bot/metrics/index.ts`, `tools/gemini-cli-bot/.gemini/skills/memory/SKILL.md`, `third_party/get-ripgrep/src/index.js`.
5. Verify behavior through test/eval files: `sea/sea-launch.test.js`, `scripts/eval_utils.js`, `scripts/run_eval_regression.js`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 2867 files, 267 directories.. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, Makefile, README.md, LICENSE이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 major metadata risk not obvious입니다.
