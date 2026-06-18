# continuedev/continue Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 3044 files, 511 directories.

## 요약

- 조사 단위: `sources/continuedev__continue` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,981 files, 498 directories, depth score 138, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/config-yaml/src/schemas/mcp/convertJson.test.ts, packages/config-yaml/src/schemas/mcp/convertJson.ts, packages/config-yaml/src/schemas/mcp/index.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | continuedev/continue |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 33891 |
| Forks | 4697 |
| License | Apache-2.0 |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/continuedev__continue](../../../../sources/continuedev__continue) |
| Existing report | [reports/global-trending/repositories/continuedev__continue.md](../../../global-trending/repositories/continuedev__continue.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2981 / 498 |
| Max observed depth | 12 |
| Top directories | .claude, .continue, .github, .husky, actions, binary, core, docs, docs-site, eval, extensions, gui, manual-testing-sandbox, media, packages, scripts, skills, sync |
| Top extensions | .ts: 1416, .tsx: 351, .png: 271, .mdx: 152, .md: 124, .json: 116, .kt: 86, .scm: 68, .py: 51, .js: 48, (none): 41, .yml: 36 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/continue-sdk | packages workspace | 51 |
| packages/config-yaml | packages workspace | 29 |
| packages/openai-adapters | packages workspace | 26 |
| docs | documentation surface | 25 |
| packages/terminal-security | packages workspace | 13 |
| packages/fetch | packages workspace | 11 |
| packages/llm-info | packages workspace | 5 |
| packages/config-types | packages workspace | 4 |
| .github | ci surface | 1 |
| actions | top-level component | 1 |
| binary | top-level component | 1 |
| core | top-level component | 1 |
| docs-site | documentation surface | 1 |
| eval | top-level component | 1 |
| extensions | top-level component | 1 |
| gui | top-level component | 1 |
| manual-testing-sandbox | validation surface | 1 |
| media | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | tsc:watch | concurrently -n gui,vscode,core,binary -c cyan,magenta,yellow,green "npm run tsc:watch:gui" "npm run tsc:watch:vscode" "npm run tsc:watch:core" "npm run tsc:watch:binary" |
| serve-dev | package.json | tsc:watch:gui | tsc --project gui/tsconfig.json --watch --noEmit --pretty |
| serve-dev | package.json | tsc:watch:vscode | tsc --project extensions/vscode/tsconfig.json --watch --noEmit --pretty |
| serve-dev | package.json | tsc:watch:core | tsc --project core/tsconfig.json --watch --noEmit --pretty |
| serve-dev | package.json | tsc:watch:binary | tsc --project binary/tsconfig.json --watch --noEmit --pretty |
| quality | package.json | format | prettier --write "**/*.{js,jsx,ts,tsx,json,css,md}" --ignore-path .gitignore --ignore-path .prettierignore |
| quality | package.json | format:check | prettier --check "**/*.{js,jsx,ts,tsx,json,css,md}" --ignore-path .gitignore --ignore-path .prettierignore |
| utility | package.json | prepare | husky |


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
| mcp | [packages/config-yaml/src/schemas/mcp/convertJson.test.ts](../../../../sources/continuedev__continue/packages/config-yaml/src/schemas/mcp/convertJson.test.ts) | mcp signal |
| mcp | [packages/config-yaml/src/schemas/mcp/convertJson.ts](../../../../sources/continuedev__continue/packages/config-yaml/src/schemas/mcp/convertJson.ts) | mcp signal |
| mcp | [packages/config-yaml/src/schemas/mcp/index.ts](../../../../sources/continuedev__continue/packages/config-yaml/src/schemas/mcp/index.ts) | mcp signal |
| mcp | [packages/config-yaml/src/schemas/mcp/json.ts](../../../../sources/continuedev__continue/packages/config-yaml/src/schemas/mcp/json.ts) | mcp signal |
| agentRuntime | [skills/cn-check.zip](../../../../sources/continuedev__continue/skills/cn-check.zip) | agentRuntime signal |
| agentRuntime | [skills/cn-check/SKILL.md](../../../../sources/continuedev__continue/skills/cn-check/SKILL.md) | agentRuntime signal |
| agentRuntime | [packages/config-yaml/src/__tests__/packages/test-org/agent-with-non-existing-block.yaml](../../../../sources/continuedev__continue/packages/config-yaml/src/__tests__/packages/test-org/agent-with-non-existing-block.yaml) | agentRuntime signal |
| agentRuntime | [packages/config-yaml/src/__tests__/packages/test-org/agent.yaml](../../../../sources/continuedev__continue/packages/config-yaml/src/__tests__/packages/test-org/agent.yaml) | agentRuntime signal |
| entrypoints | [packages/terminal-security/src/index.ts](../../../../sources/continuedev__continue/packages/terminal-security/src/index.ts) | entrypoints signal |
| entrypoints | [packages/openai-adapters/src/index.ts](../../../../sources/continuedev__continue/packages/openai-adapters/src/index.ts) | entrypoints signal |
| entrypoints | [packages/llm-info/src/index.ts](../../../../sources/continuedev__continue/packages/llm-info/src/index.ts) | entrypoints signal |
| entrypoints | [packages/fetch/src/index.ts](../../../../sources/continuedev__continue/packages/fetch/src/index.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 14 | [packages/terminal-security/src/index.ts](../../../../sources/continuedev__continue/packages/terminal-security/src/index.ts)<br>[packages/openai-adapters/src/index.ts](../../../../sources/continuedev__continue/packages/openai-adapters/src/index.ts)<br>[packages/llm-info/src/index.ts](../../../../sources/continuedev__continue/packages/llm-info/src/index.ts)<br>[packages/fetch/src/index.ts](../../../../sources/continuedev__continue/packages/fetch/src/index.ts)<br>[packages/continue-sdk/typescript/src/index.ts](../../../../sources/continuedev__continue/packages/continue-sdk/typescript/src/index.ts)<br>[packages/continue-sdk/typescript/api/src/index.ts](../../../../sources/continuedev__continue/packages/continue-sdk/typescript/api/src/index.ts)<br>[packages/config-yaml/src/cli.ts](../../../../sources/continuedev__continue/packages/config-yaml/src/cli.ts)<br>[packages/config-yaml/src/index.ts](../../../../sources/continuedev__continue/packages/config-yaml/src/index.ts) |
| agentRuntime | 300 | [skills/cn-check.zip](../../../../sources/continuedev__continue/skills/cn-check.zip)<br>[skills/cn-check/SKILL.md](../../../../sources/continuedev__continue/skills/cn-check/SKILL.md)<br>[packages/config-yaml/src/__tests__/packages/test-org/agent-with-non-existing-block.yaml](../../../../sources/continuedev__continue/packages/config-yaml/src/__tests__/packages/test-org/agent-with-non-existing-block.yaml)<br>[packages/config-yaml/src/__tests__/packages/test-org/agent.yaml](../../../../sources/continuedev__continue/packages/config-yaml/src/__tests__/packages/test-org/agent.yaml)<br>[gui/src/redux/hooks.ts](../../../../sources/continuedev__continue/gui/src/redux/hooks.ts)<br>[gui/src/hooks/ParallelListeners.tsx](../../../../sources/continuedev__continue/gui/src/hooks/ParallelListeners.tsx)<br>[gui/src/hooks/useAppendedString.ts](../../../../sources/continuedev__continue/gui/src/hooks/useAppendedString.ts)<br>[gui/src/hooks/useArrayState.ts](../../../../sources/continuedev__continue/gui/src/hooks/useArrayState.ts) |
| mcp | 36 | [packages/config-yaml/src/schemas/mcp/convertJson.test.ts](../../../../sources/continuedev__continue/packages/config-yaml/src/schemas/mcp/convertJson.test.ts)<br>[packages/config-yaml/src/schemas/mcp/convertJson.ts](../../../../sources/continuedev__continue/packages/config-yaml/src/schemas/mcp/convertJson.ts)<br>[packages/config-yaml/src/schemas/mcp/index.ts](../../../../sources/continuedev__continue/packages/config-yaml/src/schemas/mcp/index.ts)<br>[packages/config-yaml/src/schemas/mcp/json.ts](../../../../sources/continuedev__continue/packages/config-yaml/src/schemas/mcp/json.ts)<br>[gui/src/pages/gui/ToolCallDiv/mcp-ext-apps.d.ts](../../../../sources/continuedev__continue/gui/src/pages/gui/ToolCallDiv/mcp-ext-apps.d.ts)<br>[extensions/cli/src/mcp-flag.integration.test.ts](../../../../sources/continuedev__continue/extensions/cli/src/mcp-flag.integration.test.ts)<br>[extensions/cli/spec/mcp.md](../../../../sources/continuedev__continue/extensions/cli/spec/mcp.md)<br>[docs/reference/continue-mcp.mdx](../../../../sources/continuedev__continue/docs/reference/continue-mcp.mdx) |
| retrieval | 121 | [scripts/util/index.js](../../../../sources/continuedev__continue/scripts/util/index.js)<br>[packages/terminal-security/src/index.ts](../../../../sources/continuedev__continue/packages/terminal-security/src/index.ts)<br>[packages/openai-adapters/src/index.ts](../../../../sources/continuedev__continue/packages/openai-adapters/src/index.ts)<br>[packages/llm-info/src/index.ts](../../../../sources/continuedev__continue/packages/llm-info/src/index.ts)<br>[packages/fetch/src/index.ts](../../../../sources/continuedev__continue/packages/fetch/src/index.ts)<br>[packages/continue-sdk/typescript/src/index.ts](../../../../sources/continuedev__continue/packages/continue-sdk/typescript/src/index.ts)<br>[packages/continue-sdk/typescript/api/src/index.ts](../../../../sources/continuedev__continue/packages/continue-sdk/typescript/api/src/index.ts)<br>[packages/continue-sdk/typescript/api/src/models/index.ts](../../../../sources/continuedev__continue/packages/continue-sdk/typescript/api/src/models/index.ts) |
| spec | 17 | [packages/continue-sdk/python/api/requirements.txt](../../../../sources/continuedev__continue/packages/continue-sdk/python/api/requirements.txt)<br>[packages/continue-sdk/python/api/test-requirements.txt](../../../../sources/continuedev__continue/packages/continue-sdk/python/api/test-requirements.txt)<br>[manual-testing-sandbox/requirements.txt](../../../../sources/continuedev__continue/manual-testing-sandbox/requirements.txt)<br>[extensions/cli/src/e2e/spec.md](../../../../sources/continuedev__continue/extensions/cli/src/e2e/spec.md)<br>[extensions/cli/spec/config-loading.md](../../../../sources/continuedev__continue/extensions/cli/spec/config-loading.md)<br>[extensions/cli/spec/ctrl-c-behavior.md](../../../../sources/continuedev__continue/extensions/cli/spec/ctrl-c-behavior.md)<br>[extensions/cli/spec/index.md](../../../../sources/continuedev__continue/extensions/cli/spec/index.md)<br>[extensions/cli/spec/mcp.md](../../../../sources/continuedev__continue/extensions/cli/spec/mcp.md) |
| eval | 490 | [packages/terminal-security/test/terminalCommandSecurity.test.ts](../../../../sources/continuedev__continue/packages/terminal-security/test/terminalCommandSecurity.test.ts)<br>[packages/openai-adapters/src/test/adapter-test-utils.ts](../../../../sources/continuedev__continue/packages/openai-adapters/src/test/adapter-test-utils.ts)<br>[packages/openai-adapters/src/test/anthropic-adapter.vitest.ts](../../../../sources/continuedev__continue/packages/openai-adapters/src/test/anthropic-adapter.vitest.ts)<br>[packages/openai-adapters/src/test/anthropic-caching-scenarios.live.test.ts](../../../../sources/continuedev__continue/packages/openai-adapters/src/test/anthropic-caching-scenarios.live.test.ts)<br>[packages/openai-adapters/src/test/anthropic-caching.live.test.ts](../../../../sources/continuedev__continue/packages/openai-adapters/src/test/anthropic-caching.live.test.ts)<br>[packages/openai-adapters/src/test/asksage-adapter.vitest.ts](../../../../sources/continuedev__continue/packages/openai-adapters/src/test/asksage-adapter.vitest.ts)<br>[packages/openai-adapters/src/test/cli-tools.test.ts](../../../../sources/continuedev__continue/packages/openai-adapters/src/test/cli-tools.test.ts)<br>[packages/openai-adapters/src/test/convertToolsToVercel.test.ts](../../../../sources/continuedev__continue/packages/openai-adapters/src/test/convertToolsToVercel.test.ts) |
| security | 77 | [SECURITY.md](../../../../sources/continuedev__continue/SECURITY.md)<br>[packages/terminal-security/package-lock.json](../../../../sources/continuedev__continue/packages/terminal-security/package-lock.json)<br>[packages/terminal-security/package.json](../../../../sources/continuedev__continue/packages/terminal-security/package.json)<br>[packages/terminal-security/tsconfig.json](../../../../sources/continuedev__continue/packages/terminal-security/tsconfig.json)<br>[packages/terminal-security/vitest.config.ts](../../../../sources/continuedev__continue/packages/terminal-security/vitest.config.ts)<br>[packages/terminal-security/test/terminalCommandSecurity.test.ts](../../../../sources/continuedev__continue/packages/terminal-security/test/terminalCommandSecurity.test.ts)<br>[packages/terminal-security/src/evaluateTerminalCommandSecurity.ts](../../../../sources/continuedev__continue/packages/terminal-security/src/evaluateTerminalCommandSecurity.ts)<br>[packages/terminal-security/src/index.ts](../../../../sources/continuedev__continue/packages/terminal-security/src/index.ts) |
| ci | 36 | [packages/continue-sdk/python/api/.gitlab-ci.yml](../../../../sources/continuedev__continue/packages/continue-sdk/python/api/.gitlab-ci.yml)<br>[packages/continue-sdk/python/api/.github/workflows/python.yml](../../../../sources/continuedev__continue/packages/continue-sdk/python/api/.github/workflows/python.yml)<br>[extensions/cli/.github/workflows/release.yml](../../../../sources/continuedev__continue/extensions/cli/.github/workflows/release.yml)<br>[.github/workflows/auto-assign-issue.yaml](../../../../sources/continuedev__continue/.github/workflows/auto-assign-issue.yaml)<br>[.github/workflows/auto-fix-failed-tests.yml](../../../../sources/continuedev__continue/.github/workflows/auto-fix-failed-tests.yml)<br>[.github/workflows/auto-release.yml](../../../../sources/continuedev__continue/.github/workflows/auto-release.yml)<br>[.github/workflows/cla.yaml](../../../../sources/continuedev__continue/.github/workflows/cla.yaml)<br>[.github/workflows/cli-pr-checks.yml](../../../../sources/continuedev__continue/.github/workflows/cli-pr-checks.yml) |
| container | 3 | [manual-testing-sandbox/Dockerfile](../../../../sources/continuedev__continue/manual-testing-sandbox/Dockerfile)<br>[extensions/vscode/textmate-syntaxes/Dockerfile.tmLanguage](../../../../sources/continuedev__continue/extensions/vscode/textmate-syntaxes/Dockerfile.tmLanguage)<br>[core/deploy/constants.ts](../../../../sources/continuedev__continue/core/deploy/constants.ts) |
| instruction | 2 | [extensions/cli/AGENTS.md](../../../../sources/continuedev__continue/extensions/cli/AGENTS.md)<br>[docs/customize/model-providers/top-level/gemini.mdx](../../../../sources/continuedev__continue/docs/customize/model-providers/top-level/gemini.mdx) |
| docs | 501 | [README.md](../../../../sources/continuedev__continue/README.md)<br>[sync/src/README.md](../../../../sources/continuedev__continue/sync/src/README.md)<br>[packages/openai-adapters/README.md](../../../../sources/continuedev__continue/packages/openai-adapters/README.md)<br>[packages/llm-info/README.md](../../../../sources/continuedev__continue/packages/llm-info/README.md)<br>[packages/continue-sdk/README.md](../../../../sources/continuedev__continue/packages/continue-sdk/README.md)<br>[packages/continue-sdk/typescript/README.md](../../../../sources/continuedev__continue/packages/continue-sdk/typescript/README.md)<br>[packages/continue-sdk/typescript/api/README.md](../../../../sources/continuedev__continue/packages/continue-sdk/typescript/api/README.md)<br>[packages/continue-sdk/python/README.md](../../../../sources/continuedev__continue/packages/continue-sdk/python/README.md) |
| config | 45 | [package.json](../../../../sources/continuedev__continue/package.json)<br>[tsconfig.json](../../../../sources/continuedev__continue/tsconfig.json)<br>[sync/Cargo.lock](../../../../sources/continuedev__continue/sync/Cargo.lock)<br>[sync/Cargo.toml](../../../../sources/continuedev__continue/sync/Cargo.toml)<br>[packages/terminal-security/package.json](../../../../sources/continuedev__continue/packages/terminal-security/package.json)<br>[packages/terminal-security/tsconfig.json](../../../../sources/continuedev__continue/packages/terminal-security/tsconfig.json)<br>[packages/openai-adapters/package.json](../../../../sources/continuedev__continue/packages/openai-adapters/package.json)<br>[packages/openai-adapters/tsconfig.json](../../../../sources/continuedev__continue/packages/openai-adapters/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 490 | [packages/terminal-security/test/terminalCommandSecurity.test.ts](../../../../sources/continuedev__continue/packages/terminal-security/test/terminalCommandSecurity.test.ts)<br>[packages/openai-adapters/src/test/adapter-test-utils.ts](../../../../sources/continuedev__continue/packages/openai-adapters/src/test/adapter-test-utils.ts)<br>[packages/openai-adapters/src/test/anthropic-adapter.vitest.ts](../../../../sources/continuedev__continue/packages/openai-adapters/src/test/anthropic-adapter.vitest.ts)<br>[packages/openai-adapters/src/test/anthropic-caching-scenarios.live.test.ts](../../../../sources/continuedev__continue/packages/openai-adapters/src/test/anthropic-caching-scenarios.live.test.ts)<br>[packages/openai-adapters/src/test/anthropic-caching.live.test.ts](../../../../sources/continuedev__continue/packages/openai-adapters/src/test/anthropic-caching.live.test.ts)<br>[packages/openai-adapters/src/test/asksage-adapter.vitest.ts](../../../../sources/continuedev__continue/packages/openai-adapters/src/test/asksage-adapter.vitest.ts) |
| CI workflows | 36 | [packages/continue-sdk/python/api/.gitlab-ci.yml](../../../../sources/continuedev__continue/packages/continue-sdk/python/api/.gitlab-ci.yml)<br>[packages/continue-sdk/python/api/.github/workflows/python.yml](../../../../sources/continuedev__continue/packages/continue-sdk/python/api/.github/workflows/python.yml)<br>[extensions/cli/.github/workflows/release.yml](../../../../sources/continuedev__continue/extensions/cli/.github/workflows/release.yml)<br>[.github/workflows/auto-assign-issue.yaml](../../../../sources/continuedev__continue/.github/workflows/auto-assign-issue.yaml)<br>[.github/workflows/auto-fix-failed-tests.yml](../../../../sources/continuedev__continue/.github/workflows/auto-fix-failed-tests.yml)<br>[.github/workflows/auto-release.yml](../../../../sources/continuedev__continue/.github/workflows/auto-release.yml) |
| Containers / deploy | 3 | [manual-testing-sandbox/Dockerfile](../../../../sources/continuedev__continue/manual-testing-sandbox/Dockerfile)<br>[extensions/vscode/textmate-syntaxes/Dockerfile.tmLanguage](../../../../sources/continuedev__continue/extensions/vscode/textmate-syntaxes/Dockerfile.tmLanguage)<br>[core/deploy/constants.ts](../../../../sources/continuedev__continue/core/deploy/constants.ts) |
| Security / policy | 77 | [SECURITY.md](../../../../sources/continuedev__continue/SECURITY.md)<br>[packages/terminal-security/package-lock.json](../../../../sources/continuedev__continue/packages/terminal-security/package-lock.json)<br>[packages/terminal-security/package.json](../../../../sources/continuedev__continue/packages/terminal-security/package.json)<br>[packages/terminal-security/tsconfig.json](../../../../sources/continuedev__continue/packages/terminal-security/tsconfig.json)<br>[packages/terminal-security/vitest.config.ts](../../../../sources/continuedev__continue/packages/terminal-security/vitest.config.ts)<br>[packages/terminal-security/test/terminalCommandSecurity.test.ts](../../../../sources/continuedev__continue/packages/terminal-security/test/terminalCommandSecurity.test.ts) |
| Agent instructions | 2 | [extensions/cli/AGENTS.md](../../../../sources/continuedev__continue/extensions/cli/AGENTS.md)<br>[docs/customize/model-providers/top-level/gemini.mdx](../../../../sources/continuedev__continue/docs/customize/model-providers/top-level/gemini.mdx) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `packages/config-yaml/src/schemas/mcp/convertJson.test.ts`, `packages/config-yaml/src/schemas/mcp/convertJson.ts`, `packages/config-yaml/src/schemas/mcp/index.ts`.
2. Trace execution through entrypoints: `packages/terminal-security/src/index.ts`, `packages/openai-adapters/src/index.ts`, `packages/llm-info/src/index.ts`.
3. Map agent/tool runtime through: `skills/cn-check.zip`, `skills/cn-check/SKILL.md`, `packages/config-yaml/src/__tests__/packages/test-org/agent-with-non-existing-block.yaml`.
4. Inspect retrieval/memory/indexing through: `scripts/util/index.js`, `packages/terminal-security/src/index.ts`, `packages/openai-adapters/src/index.ts`.
5. Verify behavior through test/eval files: `packages/terminal-security/test/terminalCommandSecurity.test.ts`, `packages/openai-adapters/src/test/adapter-test-utils.ts`, `packages/openai-adapters/src/test/anthropic-adapter.vitest.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 3044 files, 511 directories.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, tests, ci이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 major metadata risk not obvious입니다.
