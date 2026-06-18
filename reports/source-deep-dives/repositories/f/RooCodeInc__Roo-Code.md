# RooCodeInc/Roo-Code Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 3013 files, 548 directories.

## 요약

- 조사 단위: `sources/RooCodeInc__Roo-Code` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 3,009 files, 547 directories, depth score 134, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=webview-ui/src/utils/mcp.ts, webview-ui/src/i18n/locales/zh-TW/mcp.json, webview-ui/src/i18n/locales/zh-CN/mcp.json이고, 의존성 단서는 vscode, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | RooCodeInc/Roo-Code |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/RooCodeInc__Roo-Code](../../../../sources/RooCodeInc__Roo-Code) |
| Existing report | [reports/clone-structures/RooCodeInc__Roo-Code.md](../../../clone-structures/RooCodeInc__Roo-Code.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 3009 / 547 |
| Max observed depth | 9 |
| Top directories | .changeset, .github, .husky, .roo, apps, locales, packages, releases, schemas, scripts, src, webview-ui |
| Top extensions | .ts: 1175, .png: 396, .tsx: 374, .md: 333, .json: 326, .mdx: 226, (none): 36, .xml: 32, .snap: 27, .yml: 15, .css: 14, .mjs: 13 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 66 |
| apps/docs | apps workspace | 36 |
| apps/vscode-e2e | apps workspace | 19 |
| packages/types | packages workspace | 5 |
| packages/core | packages workspace | 4 |
| packages/ipc | packages workspace | 4 |
| packages/vscode-shim | packages workspace | 3 |
| apps/cli | apps workspace | 2 |
| apps/vscode-nightly | apps workspace | 2 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| locales | top-level component | 1 |
| packages | source boundary | 1 |
| packages/config-eslint | packages workspace | 1 |
| packages/config-typescript | packages workspace | 1 |
| releases | top-level component | 1 |
| schemas | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | preinstall | node scripts/bootstrap.mjs |
| utility | package.json | prepare | husky |
| utility | package.json | install | node scripts/bootstrap.mjs |
| utility | package.json | install:all | node scripts/bootstrap.mjs |
| quality | package.json | lint | turbo lint --log-order grouped --output-logs new-only |
| quality | package.json | check-types | turbo check-types --log-order grouped --output-logs new-only |
| test | package.json | test | turbo test --log-order grouped --output-logs new-only |
| quality | package.json | format | turbo format --log-order grouped --output-logs new-only |
| build | package.json | build | turbo build --log-order grouped --output-logs new-only |
| build | package.json | bundle | turbo bundle --log-order grouped --output-logs new-only |
| build | package.json | bundle:nightly | turbo bundle:nightly --log-order grouped --output-logs new-only |
| utility | package.json | vsix | turbo vsix --log-order grouped --output-logs new-only |
| utility | package.json | vsix:nightly | turbo vsix:nightly --log-order grouped --output-logs new-only |
| serve-dev | package.json | clean | turbo clean --log-order grouped --output-logs new-only && rimraf dist out bin .vite-port .turbo |
| utility | package.json | install:vsix | pnpm install --frozen-lockfile && pnpm clean && pnpm vsix && node scripts/install-vsix.js |
| utility | package.json | install:vsix:nightly | pnpm install --frozen-lockfile && pnpm clean && pnpm vsix:nightly && node scripts/install-vsix.js --nightly |
| serve-dev | package.json | code-server:install | node scripts/code-server.js |
| utility | package.json | changeset:version | cp CHANGELOG.md src/CHANGELOG.md && changeset version && cp -vf src/CHANGELOG.md . |
| utility | package.json | knip | knip --include files |
| quality | package.json | npm:publish:types | pnpm --filter @roo-code/types npm:publish |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | vscode |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [webview-ui/src/utils/mcp.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/mcp.ts) | mcp signal |
| mcp | [webview-ui/src/i18n/locales/zh-TW/mcp.json](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/i18n/locales/zh-TW/mcp.json) | mcp signal |
| mcp | [webview-ui/src/i18n/locales/zh-CN/mcp.json](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/i18n/locales/zh-CN/mcp.json) | mcp signal |
| mcp | [webview-ui/src/i18n/locales/vi/mcp.json](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/i18n/locales/vi/mcp.json) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/RooCodeInc__Roo-Code/AGENTS.md) | agentRuntime signal |
| agentRuntime | [webview-ui/src/utils/context-mentions.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/context-mentions.ts) | agentRuntime signal |
| agentRuntime | [webview-ui/src/utils/__tests__/context-mentions.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/context-mentions.spec.ts) | agentRuntime signal |
| agentRuntime | [webview-ui/src/hooks/useAutoApprovalState.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/hooks/useAutoApprovalState.ts) | agentRuntime signal |
| entrypoints | [webview-ui/src/App.tsx](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/App.tsx) | entrypoints signal |
| entrypoints | [webview-ui/src/index.css](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/index.css) | entrypoints signal |
| entrypoints | [webview-ui/src/index.tsx](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/index.tsx) | entrypoints signal |
| entrypoints | [packages/vscode-shim/src/index.ts](../../../../sources/RooCodeInc__Roo-Code/packages/vscode-shim/src/index.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 213 | [webview-ui/src/App.tsx](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/App.tsx)<br>[webview-ui/src/index.css](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/index.css)<br>[webview-ui/src/index.tsx](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/index.tsx)<br>[packages/vscode-shim/src/index.ts](../../../../sources/RooCodeInc__Roo-Code/packages/vscode-shim/src/index.ts)<br>[packages/types/src/cli.ts](../../../../sources/RooCodeInc__Roo-Code/packages/types/src/cli.ts)<br>[packages/types/src/index.ts](../../../../sources/RooCodeInc__Roo-Code/packages/types/src/index.ts)<br>[packages/ipc/src/index.ts](../../../../sources/RooCodeInc__Roo-Code/packages/ipc/src/index.ts)<br>[packages/core/src/cli.ts](../../../../sources/RooCodeInc__Roo-Code/packages/core/src/cli.ts) |
| agentRuntime | 247 | [AGENTS.md](../../../../sources/RooCodeInc__Roo-Code/AGENTS.md)<br>[webview-ui/src/utils/context-mentions.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/context-mentions.ts)<br>[webview-ui/src/utils/__tests__/context-mentions.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/context-mentions.spec.ts)<br>[webview-ui/src/hooks/useAutoApprovalState.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/hooks/useAutoApprovalState.ts)<br>[webview-ui/src/hooks/useAutoApprovalToggles.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/hooks/useAutoApprovalToggles.ts)<br>[webview-ui/src/hooks/useEscapeKey.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/hooks/useEscapeKey.spec.ts)<br>[webview-ui/src/hooks/useEscapeKey.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/hooks/useEscapeKey.ts)<br>[webview-ui/src/hooks/useScrollLifecycle.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/hooks/useScrollLifecycle.ts) |
| mcp | 81 | [webview-ui/src/utils/mcp.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/mcp.ts)<br>[webview-ui/src/i18n/locales/zh-TW/mcp.json](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/i18n/locales/zh-TW/mcp.json)<br>[webview-ui/src/i18n/locales/zh-CN/mcp.json](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/i18n/locales/zh-CN/mcp.json)<br>[webview-ui/src/i18n/locales/vi/mcp.json](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/i18n/locales/vi/mcp.json)<br>[webview-ui/src/i18n/locales/tr/mcp.json](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/i18n/locales/tr/mcp.json)<br>[webview-ui/src/i18n/locales/ru/mcp.json](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/i18n/locales/ru/mcp.json)<br>[webview-ui/src/i18n/locales/pt-BR/mcp.json](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/i18n/locales/pt-BR/mcp.json)<br>[webview-ui/src/i18n/locales/pl/mcp.json](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/i18n/locales/pl/mcp.json) |
| retrieval | 159 | [webview-ui/index.html](../../../../sources/RooCodeInc__Roo-Code/webview-ui/index.html)<br>[webview-ui/src/index.css](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/index.css)<br>[webview-ui/src/index.tsx](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/index.tsx)<br>[webview-ui/src/components/ui/index.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/components/ui/index.ts)<br>[webview-ui/src/components/ui/hooks/index.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/components/ui/hooks/index.ts)<br>[webview-ui/src/components/settings/providers/index.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/components/settings/providers/index.ts)<br>[webview-ui/src/components/chat/context-management/index.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/components/chat/context-management/index.ts)<br>[src/utils/logging/index.ts](../../../../sources/RooCodeInc__Roo-Code/src/utils/logging/index.ts) |
| spec | 470 | [webview-ui/src/utils/__tests__/batchConsecutive.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/batchConsecutive.spec.ts)<br>[webview-ui/src/utils/__tests__/command-parser.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/command-parser.spec.ts)<br>[webview-ui/src/utils/__tests__/context-mentions.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/context-mentions.spec.ts)<br>[webview-ui/src/utils/__tests__/format.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/format.spec.ts)<br>[webview-ui/src/utils/__tests__/highlightDiff.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/highlightDiff.spec.ts)<br>[webview-ui/src/utils/__tests__/markdown.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/markdown.spec.ts)<br>[webview-ui/src/utils/__tests__/model-utils.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/model-utils.spec.ts)<br>[webview-ui/src/utils/__tests__/sourceMapUtils.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/sourceMapUtils.spec.ts) |
| eval | 643 | [webview-ui/src/utils/test-utils.tsx](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/test-utils.tsx)<br>[webview-ui/src/utils/__tests__/batchConsecutive.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/batchConsecutive.spec.ts)<br>[webview-ui/src/utils/__tests__/command-parser.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/command-parser.spec.ts)<br>[webview-ui/src/utils/__tests__/context-mentions.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/context-mentions.spec.ts)<br>[webview-ui/src/utils/__tests__/format.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/format.spec.ts)<br>[webview-ui/src/utils/__tests__/highlightDiff.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/highlightDiff.spec.ts)<br>[webview-ui/src/utils/__tests__/markdown.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/markdown.spec.ts)<br>[webview-ui/src/utils/__tests__/model-utils.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/model-utils.spec.ts) |
| security | 4 | [SECURITY.md](../../../../sources/RooCodeInc__Roo-Code/SECURITY.md)<br>[webview-ui/src/oauth/urls.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/oauth/urls.ts)<br>[src/integrations/openai-codex/oauth.ts](../../../../sources/RooCodeInc__Roo-Code/src/integrations/openai-codex/oauth.ts)<br>[src/core/ignore/__tests__/RooIgnoreController.security.spec.ts](../../../../sources/RooCodeInc__Roo-Code/src/core/ignore/__tests__/RooIgnoreController.security.spec.ts) |
| ci | 7 | [.github/workflows/changeset-release.yml](../../../../sources/RooCodeInc__Roo-Code/.github/workflows/changeset-release.yml)<br>[.github/workflows/cli-release.yml](../../../../sources/RooCodeInc__Roo-Code/.github/workflows/cli-release.yml)<br>[.github/workflows/code-qa.yml](../../../../sources/RooCodeInc__Roo-Code/.github/workflows/code-qa.yml)<br>[.github/workflows/codeql.yml](../../../../sources/RooCodeInc__Roo-Code/.github/workflows/codeql.yml)<br>[.github/workflows/docs-pages.yml](../../../../sources/RooCodeInc__Roo-Code/.github/workflows/docs-pages.yml)<br>[.github/workflows/marketplace-publish.yml](../../../../sources/RooCodeInc__Roo-Code/.github/workflows/marketplace-publish.yml)<br>[.github/workflows/nightly-publish.yml](../../../../sources/RooCodeInc__Roo-Code/.github/workflows/nightly-publish.yml) |
| container | 0 | not obvious |
| instruction | 2 | [AGENTS.md](../../../../sources/RooCodeInc__Roo-Code/AGENTS.md)<br>[apps/docs/docs/providers/gemini.md](../../../../sources/RooCodeInc__Roo-Code/apps/docs/docs/providers/gemini.md) |
| docs | 928 | [README.md](../../../../sources/RooCodeInc__Roo-Code/README.md)<br>[src/integrations/terminal/README.md](../../../../sources/RooCodeInc__Roo-Code/src/integrations/terminal/README.md)<br>[src/assets/docs/demo.gif](../../../../sources/RooCodeInc__Roo-Code/src/assets/docs/demo.gif)<br>[packages/types/npm/README.md](../../../../sources/RooCodeInc__Roo-Code/packages/types/npm/README.md)<br>[packages/ipc/README.md](../../../../sources/RooCodeInc__Roo-Code/packages/ipc/README.md)<br>[locales/zh-TW/README.md](../../../../sources/RooCodeInc__Roo-Code/locales/zh-TW/README.md)<br>[locales/zh-CN/README.md](../../../../sources/RooCodeInc__Roo-Code/locales/zh-CN/README.md)<br>[locales/vi/README.md](../../../../sources/RooCodeInc__Roo-Code/locales/vi/README.md) |
| config | 29 | [package.json](../../../../sources/RooCodeInc__Roo-Code/package.json)<br>[pnpm-workspace.yaml](../../../../sources/RooCodeInc__Roo-Code/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/RooCodeInc__Roo-Code/tsconfig.json)<br>[turbo.json](../../../../sources/RooCodeInc__Roo-Code/turbo.json)<br>[webview-ui/package.json](../../../../sources/RooCodeInc__Roo-Code/webview-ui/package.json)<br>[webview-ui/tsconfig.json](../../../../sources/RooCodeInc__Roo-Code/webview-ui/tsconfig.json)<br>[webview-ui/turbo.json](../../../../sources/RooCodeInc__Roo-Code/webview-ui/turbo.json)<br>[src/package.json](../../../../sources/RooCodeInc__Roo-Code/src/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 643 | [webview-ui/src/utils/test-utils.tsx](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/test-utils.tsx)<br>[webview-ui/src/utils/__tests__/batchConsecutive.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/batchConsecutive.spec.ts)<br>[webview-ui/src/utils/__tests__/command-parser.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/command-parser.spec.ts)<br>[webview-ui/src/utils/__tests__/context-mentions.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/context-mentions.spec.ts)<br>[webview-ui/src/utils/__tests__/format.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/format.spec.ts)<br>[webview-ui/src/utils/__tests__/highlightDiff.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/highlightDiff.spec.ts) |
| CI workflows | 7 | [.github/workflows/changeset-release.yml](../../../../sources/RooCodeInc__Roo-Code/.github/workflows/changeset-release.yml)<br>[.github/workflows/cli-release.yml](../../../../sources/RooCodeInc__Roo-Code/.github/workflows/cli-release.yml)<br>[.github/workflows/code-qa.yml](../../../../sources/RooCodeInc__Roo-Code/.github/workflows/code-qa.yml)<br>[.github/workflows/codeql.yml](../../../../sources/RooCodeInc__Roo-Code/.github/workflows/codeql.yml)<br>[.github/workflows/docs-pages.yml](../../../../sources/RooCodeInc__Roo-Code/.github/workflows/docs-pages.yml)<br>[.github/workflows/marketplace-publish.yml](../../../../sources/RooCodeInc__Roo-Code/.github/workflows/marketplace-publish.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 4 | [SECURITY.md](../../../../sources/RooCodeInc__Roo-Code/SECURITY.md)<br>[webview-ui/src/oauth/urls.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/oauth/urls.ts)<br>[src/integrations/openai-codex/oauth.ts](../../../../sources/RooCodeInc__Roo-Code/src/integrations/openai-codex/oauth.ts)<br>[src/core/ignore/__tests__/RooIgnoreController.security.spec.ts](../../../../sources/RooCodeInc__Roo-Code/src/core/ignore/__tests__/RooIgnoreController.security.spec.ts) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/RooCodeInc__Roo-Code/AGENTS.md)<br>[apps/docs/docs/providers/gemini.md](../../../../sources/RooCodeInc__Roo-Code/apps/docs/docs/providers/gemini.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `webview-ui/src/utils/mcp.ts`, `webview-ui/src/i18n/locales/zh-TW/mcp.json`, `webview-ui/src/i18n/locales/zh-CN/mcp.json`.
2. Trace execution through entrypoints: `webview-ui/src/App.tsx`, `webview-ui/src/index.css`, `webview-ui/src/index.tsx`.
3. Map agent/tool runtime through: `AGENTS.md`, `webview-ui/src/utils/context-mentions.ts`, `webview-ui/src/utils/__tests__/context-mentions.spec.ts`.
4. Inspect retrieval/memory/indexing through: `webview-ui/index.html`, `webview-ui/src/index.css`, `webview-ui/src/index.tsx`.
5. Verify behavior through test/eval files: `webview-ui/src/utils/test-utils.tsx`, `webview-ui/src/utils/__tests__/batchConsecutive.spec.ts`, `webview-ui/src/utils/__tests__/command-parser.spec.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 3013 files, 548 directories.. 핵심 구조 신호는 package.json, README.md, AGENTS.md, LICENSE, vscode, tests이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
