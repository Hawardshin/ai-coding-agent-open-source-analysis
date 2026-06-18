# anomalyco/opencode Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 5666 files, 710 directories.

## 요약

- 조사 단위: `sources/anomalyco__opencode` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 5,663 files, 708 directories, depth score 138, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/web/src/content/docs/mcp-servers.mdx, packages/web/src/content/docs/zh-tw/mcp-servers.mdx, packages/web/src/content/docs/zh-cn/mcp-servers.mdx이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | anomalyco/opencode |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 175712 |
| Forks | 21355 |
| License | none |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/anomalyco__opencode](../../../../sources/anomalyco__opencode) |
| Existing report | [reports/global-trending/repositories/anomalyco__opencode.md](../../../global-trending/repositories/anomalyco__opencode.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 5663 / 708 |
| Max observed depth | 10 |
| Top directories | .github, .husky, .opencode, .zed, github, infra, nix, packages, patches, perf, script, sdks, specs |
| Top extensions | .ts: 2015, .svg: 1251, .mdx: 627, .tsx: 524, .json: 330, .png: 215, .css: 156, .md: 130, .sql: 118, (none): 48, .aac: 45, .mp3: 45 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/web | packages workspace | 129 |
| packages/opencode | packages workspace | 56 |
| packages/ui | packages workspace | 37 |
| packages/tui | packages workspace | 35 |
| packages/stats | packages workspace | 17 |
| packages/sdk | packages workspace | 10 |
| packages/app | packages workspace | 8 |
| packages/containers | packages workspace | 5 |
| packages/server | packages workspace | 5 |
| packages/enterprise | packages workspace | 4 |
| packages/llm | packages workspace | 4 |
| packages/slack | packages workspace | 4 |
| packages/storybook | packages workspace | 4 |
| packages/core | packages workspace | 3 |
| packages/http-recorder | packages workspace | 3 |
| packages/plugin | packages workspace | 3 |
| packages/script | packages workspace | 3 |
| packages/function | packages workspace | 2 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | bun run --cwd packages/opencode --conditions=browser src/index.ts |
| serve-dev | package.json | dev:desktop | bun --cwd packages/desktop dev |
| serve-dev | package.json | dev:web | bun --cwd packages/app dev |
| serve-dev | package.json | dev:console | ulimit -n 10240 2>/dev/null; bun run --cwd packages/console/app dev |
| serve-dev | package.json | dev:stats | bun sst shell --stage=production -- bun run --cwd packages/stats/app dev |
| serve-dev | package.json | dev:storybook | bun --cwd packages/storybook storybook |
| quality | package.json | lint | oxlint |
| quality | package.json | typecheck | bun turbo typecheck |
| utility | package.json | upgrade-opentui | bun run script/upgrade-opentui.ts |
| utility | package.json | postinstall | bun run --cwd packages/core fix-node-pty |
| utility | package.json | prepare | husky |
| utility | package.json | random | echo 'Random script' |
| utility | package.json | sso | aws sso login --sso-session=opencode --no-browser |
| test | package.json | test | echo 'do not run tests from root' && exit 1 |


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
| mcp | [packages/web/src/content/docs/mcp-servers.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/mcp-servers.mdx) | mcp signal |
| mcp | [packages/web/src/content/docs/zh-tw/mcp-servers.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/zh-tw/mcp-servers.mdx) | mcp signal |
| mcp | [packages/web/src/content/docs/zh-cn/mcp-servers.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/zh-cn/mcp-servers.mdx) | mcp signal |
| mcp | [packages/web/src/content/docs/tr/mcp-servers.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/tr/mcp-servers.mdx) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/anomalyco__opencode/AGENTS.md) | agentRuntime signal |
| agentRuntime | [CONTEXT.md](../../../../sources/anomalyco__opencode/CONTEXT.md) | agentRuntime signal |
| agentRuntime | [specs/v2/tools.md](../../../../sources/anomalyco__opencode/specs/v2/tools.md) | agentRuntime signal |
| agentRuntime | [packages/web/src/content/docs/agents.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/agents.mdx) | agentRuntime signal |
| entrypoints | [packages/web/src/content/docs/server.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/server.mdx) | entrypoints signal |
| entrypoints | [packages/web/src/content/docs/zh-tw/server.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/zh-tw/server.mdx) | entrypoints signal |
| entrypoints | [packages/web/src/content/docs/zh-cn/server.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/zh-cn/server.mdx) | entrypoints signal |
| entrypoints | [packages/web/src/content/docs/tr/server.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/tr/server.mdx) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 57 | [packages/web/src/content/docs/server.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/server.mdx)<br>[packages/web/src/content/docs/zh-tw/server.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/zh-tw/server.mdx)<br>[packages/web/src/content/docs/zh-cn/server.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/zh-cn/server.mdx)<br>[packages/web/src/content/docs/tr/server.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/tr/server.mdx)<br>[packages/web/src/content/docs/th/server.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/th/server.mdx)<br>[packages/web/src/content/docs/ru/server.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/ru/server.mdx)<br>[packages/web/src/content/docs/pt-br/server.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/pt-br/server.mdx)<br>[packages/web/src/content/docs/pl/server.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/pl/server.mdx) |
| agentRuntime | 401 | [AGENTS.md](../../../../sources/anomalyco__opencode/AGENTS.md)<br>[CONTEXT.md](../../../../sources/anomalyco__opencode/CONTEXT.md)<br>[specs/v2/tools.md](../../../../sources/anomalyco__opencode/specs/v2/tools.md)<br>[packages/web/src/content/docs/agents.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/agents.mdx)<br>[packages/web/src/content/docs/skills.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/skills.mdx)<br>[packages/web/src/content/docs/tools.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/tools.mdx)<br>[packages/web/src/content/docs/zh-tw/agents.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/zh-tw/agents.mdx)<br>[packages/web/src/content/docs/zh-tw/skills.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/zh-tw/skills.mdx) |
| mcp | 45 | [packages/web/src/content/docs/mcp-servers.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/mcp-servers.mdx)<br>[packages/web/src/content/docs/zh-tw/mcp-servers.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/zh-tw/mcp-servers.mdx)<br>[packages/web/src/content/docs/zh-cn/mcp-servers.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/zh-cn/mcp-servers.mdx)<br>[packages/web/src/content/docs/tr/mcp-servers.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/tr/mcp-servers.mdx)<br>[packages/web/src/content/docs/th/mcp-servers.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/th/mcp-servers.mdx)<br>[packages/web/src/content/docs/ru/mcp-servers.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/ru/mcp-servers.mdx)<br>[packages/web/src/content/docs/pt-br/mcp-servers.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/pt-br/mcp-servers.mdx)<br>[packages/web/src/content/docs/pl/mcp-servers.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/pl/mcp-servers.mdx) |
| retrieval | 133 | [packages/web/src/content/docs/index.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/index.mdx)<br>[packages/web/src/content/docs/zh-tw/index.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/zh-tw/index.mdx)<br>[packages/web/src/content/docs/zh-cn/index.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/zh-cn/index.mdx)<br>[packages/web/src/content/docs/tr/index.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/tr/index.mdx)<br>[packages/web/src/content/docs/th/index.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/th/index.mdx)<br>[packages/web/src/content/docs/ru/index.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/ru/index.mdx)<br>[packages/web/src/content/docs/pt-br/index.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/pt-br/index.mdx)<br>[packages/web/src/content/docs/pl/index.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/pl/index.mdx) |
| spec | 10 | [packages/ui/src/assets/icons/file-types/architecture.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/architecture.svg)<br>[packages/ui/src/assets/icons/file-types/roadmap.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/roadmap.svg)<br>[packages/cli/src/framework/spec.ts](../../../../sources/anomalyco__opencode/packages/cli/src/framework/spec.ts)<br>[packages/app/create-effect-simplification-spec.md](../../../../sources/anomalyco__opencode/packages/app/create-effect-simplification-spec.md)<br>[packages/app/src/components/session/session-new-design-view.tsx](../../../../sources/anomalyco__opencode/packages/app/src/components/session/session-new-design-view.tsx)<br>[packages/app/e2e/smoke/session-timeline.spec.ts](../../../../sources/anomalyco__opencode/packages/app/e2e/smoke/session-timeline.spec.ts)<br>[packages/app/e2e/regression/prompt-thinking-level.spec.ts](../../../../sources/anomalyco__opencode/packages/app/e2e/regression/prompt-thinking-level.spec.ts)<br>[packages/app/e2e/regression/session-list-path-loading.spec.ts](../../../../sources/anomalyco__opencode/packages/app/e2e/regression/session-list-path-loading.spec.ts) |
| eval | 705 | [sdks/vscode/.vscode-test.mjs](../../../../sources/anomalyco__opencode/sdks/vscode/.vscode-test.mjs)<br>[perf/test-suite.md](../../../../sources/anomalyco__opencode/perf/test-suite.md)<br>[packages/ui/src/components/apply-patch-file.test.ts](../../../../sources/anomalyco__opencode/packages/ui/src/components/apply-patch-file.test.ts)<br>[packages/ui/src/components/markdown-stream.test.ts](../../../../sources/anomalyco__opencode/packages/ui/src/components/markdown-stream.test.ts)<br>[packages/ui/src/components/message-file.test.ts](../../../../sources/anomalyco__opencode/packages/ui/src/components/message-file.test.ts)<br>[packages/ui/src/components/message-part.test.ts](../../../../sources/anomalyco__opencode/packages/ui/src/components/message-part.test.ts)<br>[packages/ui/src/components/scroll-view.test.ts](../../../../sources/anomalyco__opencode/packages/ui/src/components/scroll-view.test.ts)<br>[packages/ui/src/components/session-diff.test.ts](../../../../sources/anomalyco__opencode/packages/ui/src/components/session-diff.test.ts) |
| security | 87 | [SECURITY.md](../../../../sources/anomalyco__opencode/SECURITY.md)<br>[specs/v2/provider-policy.md](../../../../sources/anomalyco__opencode/specs/v2/provider-policy.md)<br>[packages/ui/src/assets/icons/file-types/folder-guard-open.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/folder-guard-open.svg)<br>[packages/ui/src/assets/icons/file-types/folder-guard.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/folder-guard.svg)<br>[packages/ui/src/assets/icons/file-types/folder-policy-open.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/folder-policy-open.svg)<br>[packages/ui/src/assets/icons/file-types/folder-policy.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/folder-policy.svg)<br>[packages/ui/src/assets/icons/file-types/folder-sandbox-open.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/folder-sandbox-open.svg)<br>[packages/ui/src/assets/icons/file-types/folder-sandbox.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/folder-sandbox.svg) |
| ci | 31 | [packages/ui/src/assets/icons/file-types/azure-pipelines.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/azure-pipelines.svg)<br>[packages/ui/src/assets/icons/file-types/buildkite.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/buildkite.svg)<br>[packages/ui/src/assets/icons/file-types/circleci_light.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/circleci_light.svg)<br>[packages/ui/src/assets/icons/file-types/circleci.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/circleci.svg)<br>[packages/ui/src/assets/icons/file-types/jenkins.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/jenkins.svg)<br>[.github/workflows/beta.yml](../../../../sources/anomalyco__opencode/.github/workflows/beta.yml)<br>[.github/workflows/close-issues.yml](../../../../sources/anomalyco__opencode/.github/workflows/close-issues.yml)<br>[.github/workflows/close-prs.yml](../../../../sources/anomalyco__opencode/.github/workflows/close-prs.yml) |
| container | 7 | [packages/stats/server/Dockerfile](../../../../sources/anomalyco__opencode/packages/stats/server/Dockerfile)<br>[packages/opencode/Dockerfile](../../../../sources/anomalyco__opencode/packages/opencode/Dockerfile)<br>[packages/containers/tauri-linux/Dockerfile](../../../../sources/anomalyco__opencode/packages/containers/tauri-linux/Dockerfile)<br>[packages/containers/rust/Dockerfile](../../../../sources/anomalyco__opencode/packages/containers/rust/Dockerfile)<br>[packages/containers/publish/Dockerfile](../../../../sources/anomalyco__opencode/packages/containers/publish/Dockerfile)<br>[packages/containers/bun-node/Dockerfile](../../../../sources/anomalyco__opencode/packages/containers/bun-node/Dockerfile)<br>[packages/containers/base/Dockerfile](../../../../sources/anomalyco__opencode/packages/containers/base/Dockerfile) |
| instruction | 30 | [AGENTS.md](../../../../sources/anomalyco__opencode/AGENTS.md)<br>[packages/web/src/content/docs/agents.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/agents.mdx)<br>[packages/web/src/content/docs/zh-tw/agents.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/zh-tw/agents.mdx)<br>[packages/web/src/content/docs/zh-cn/agents.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/zh-cn/agents.mdx)<br>[packages/web/src/content/docs/tr/agents.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/tr/agents.mdx)<br>[packages/web/src/content/docs/th/agents.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/th/agents.mdx)<br>[packages/web/src/content/docs/ru/agents.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/ru/agents.mdx)<br>[packages/web/src/content/docs/pt-br/agents.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/pt-br/agents.mdx) |
| docs | 681 | [README.ar.md](../../../../sources/anomalyco__opencode/README.ar.md)<br>[README.bn.md](../../../../sources/anomalyco__opencode/README.bn.md)<br>[README.br.md](../../../../sources/anomalyco__opencode/README.br.md)<br>[README.bs.md](../../../../sources/anomalyco__opencode/README.bs.md)<br>[README.da.md](../../../../sources/anomalyco__opencode/README.da.md)<br>[README.de.md](../../../../sources/anomalyco__opencode/README.de.md)<br>[README.es.md](../../../../sources/anomalyco__opencode/README.es.md)<br>[README.fr.md](../../../../sources/anomalyco__opencode/README.fr.md) |
| config | 66 | [package.json](../../../../sources/anomalyco__opencode/package.json)<br>[tsconfig.json](../../../../sources/anomalyco__opencode/tsconfig.json)<br>[turbo.json](../../../../sources/anomalyco__opencode/turbo.json)<br>[sdks/vscode/package.json](../../../../sources/anomalyco__opencode/sdks/vscode/package.json)<br>[sdks/vscode/tsconfig.json](../../../../sources/anomalyco__opencode/sdks/vscode/tsconfig.json)<br>[packages/web/package.json](../../../../sources/anomalyco__opencode/packages/web/package.json)<br>[packages/web/tsconfig.json](../../../../sources/anomalyco__opencode/packages/web/tsconfig.json)<br>[packages/ui/package.json](../../../../sources/anomalyco__opencode/packages/ui/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 705 | [sdks/vscode/.vscode-test.mjs](../../../../sources/anomalyco__opencode/sdks/vscode/.vscode-test.mjs)<br>[perf/test-suite.md](../../../../sources/anomalyco__opencode/perf/test-suite.md)<br>[packages/ui/src/components/apply-patch-file.test.ts](../../../../sources/anomalyco__opencode/packages/ui/src/components/apply-patch-file.test.ts)<br>[packages/ui/src/components/markdown-stream.test.ts](../../../../sources/anomalyco__opencode/packages/ui/src/components/markdown-stream.test.ts)<br>[packages/ui/src/components/message-file.test.ts](../../../../sources/anomalyco__opencode/packages/ui/src/components/message-file.test.ts)<br>[packages/ui/src/components/message-part.test.ts](../../../../sources/anomalyco__opencode/packages/ui/src/components/message-part.test.ts) |
| CI workflows | 31 | [packages/ui/src/assets/icons/file-types/azure-pipelines.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/azure-pipelines.svg)<br>[packages/ui/src/assets/icons/file-types/buildkite.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/buildkite.svg)<br>[packages/ui/src/assets/icons/file-types/circleci_light.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/circleci_light.svg)<br>[packages/ui/src/assets/icons/file-types/circleci.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/circleci.svg)<br>[packages/ui/src/assets/icons/file-types/jenkins.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/jenkins.svg)<br>[.github/workflows/beta.yml](../../../../sources/anomalyco__opencode/.github/workflows/beta.yml) |
| Containers / deploy | 7 | [packages/stats/server/Dockerfile](../../../../sources/anomalyco__opencode/packages/stats/server/Dockerfile)<br>[packages/opencode/Dockerfile](../../../../sources/anomalyco__opencode/packages/opencode/Dockerfile)<br>[packages/containers/tauri-linux/Dockerfile](../../../../sources/anomalyco__opencode/packages/containers/tauri-linux/Dockerfile)<br>[packages/containers/rust/Dockerfile](../../../../sources/anomalyco__opencode/packages/containers/rust/Dockerfile)<br>[packages/containers/publish/Dockerfile](../../../../sources/anomalyco__opencode/packages/containers/publish/Dockerfile)<br>[packages/containers/bun-node/Dockerfile](../../../../sources/anomalyco__opencode/packages/containers/bun-node/Dockerfile) |
| Security / policy | 87 | [SECURITY.md](../../../../sources/anomalyco__opencode/SECURITY.md)<br>[specs/v2/provider-policy.md](../../../../sources/anomalyco__opencode/specs/v2/provider-policy.md)<br>[packages/ui/src/assets/icons/file-types/folder-guard-open.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/folder-guard-open.svg)<br>[packages/ui/src/assets/icons/file-types/folder-guard.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/folder-guard.svg)<br>[packages/ui/src/assets/icons/file-types/folder-policy-open.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/folder-policy-open.svg)<br>[packages/ui/src/assets/icons/file-types/folder-policy.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/folder-policy.svg) |
| Agent instructions | 30 | [AGENTS.md](../../../../sources/anomalyco__opencode/AGENTS.md)<br>[packages/web/src/content/docs/agents.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/agents.mdx)<br>[packages/web/src/content/docs/zh-tw/agents.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/zh-tw/agents.mdx)<br>[packages/web/src/content/docs/zh-cn/agents.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/zh-cn/agents.mdx)<br>[packages/web/src/content/docs/tr/agents.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/tr/agents.mdx)<br>[packages/web/src/content/docs/th/agents.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/th/agents.mdx) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `packages/web/src/content/docs/mcp-servers.mdx`, `packages/web/src/content/docs/zh-tw/mcp-servers.mdx`, `packages/web/src/content/docs/zh-cn/mcp-servers.mdx`.
2. Trace execution through entrypoints: `packages/web/src/content/docs/server.mdx`, `packages/web/src/content/docs/zh-tw/server.mdx`, `packages/web/src/content/docs/zh-cn/server.mdx`.
3. Map agent/tool runtime through: `AGENTS.md`, `CONTEXT.md`, `specs/v2/tools.md`.
4. Inspect retrieval/memory/indexing through: `packages/web/src/content/docs/index.mdx`, `packages/web/src/content/docs/zh-tw/index.mdx`, `packages/web/src/content/docs/zh-cn/index.mdx`.
5. Verify behavior through test/eval files: `sdks/vscode/.vscode-test.mjs`, `perf/test-suite.md`, `packages/ui/src/components/apply-patch-file.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 5666 files, 710 directories.. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, LICENSE, tests이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
