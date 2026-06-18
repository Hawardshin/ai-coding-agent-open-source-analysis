# Zoo-Code-Org/Zoo-Code Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Zoo Code gives you a whole dev team of AI agents in your code editor.

## 요약

- 조사 단위: `sources/Zoo-Code-Org__Zoo-Code` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,412 files, 391 directories, depth score 128, key references 12개입니다.
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
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | Zoo-Code-Org/Zoo-Code |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 1009 |
| Forks | 136 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Zoo-Code-Org__Zoo-Code](../../../../sources/Zoo-Code-Org__Zoo-Code) |
| Existing report | [reports/global-trending/repositories/Zoo-Code-Org__Zoo-Code.md](../../../global-trending/repositories/Zoo-Code-Org__Zoo-Code.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2412 / 391 |
| Max observed depth | 9 |
| Top directories | .changeset, .github, .husky, .roo, apps, locales, packages, releases, schemas, scripts, src, webview-ui |
| Top extensions | .ts: 1341, .json: 377, .tsx: 359, .md: 95, .png: 83, (none): 36, .xml: 32, .snap: 27, .yml: 19, .mjs: 14, .js: 9, .css: 3 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 66 |
| apps/vscode-e2e | apps workspace | 33 |
| apps/cli | apps workspace | 10 |
| packages/core | packages workspace | 5 |
| packages/types | packages workspace | 5 |
| packages/ipc | packages workspace | 4 |
| packages/cloud | packages workspace | 3 |
| packages/telemetry | packages workspace | 3 |
| packages/vscode-shim | packages workspace | 3 |
| apps/vscode-nightly | apps workspace | 2 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| locales | top-level component | 1 |
| packages | source boundary | 1 |
| packages/config-eslint | packages workspace | 1 |
| packages/config-typescript | packages workspace | 1 |
| releases | top-level component | 1 |
| schemas | top-level component | 1 |


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
| test | package.json | test:coverage | turbo test:coverage --log-order grouped --output-logs new-only |
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
| utility | package.json | knip | knip |
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
| mcp | [webview-ui/src/utils/mcp.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/utils/mcp.ts) | mcp signal |
| mcp | [webview-ui/src/i18n/locales/zh-TW/mcp.json](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/i18n/locales/zh-TW/mcp.json) | mcp signal |
| mcp | [webview-ui/src/i18n/locales/zh-CN/mcp.json](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/i18n/locales/zh-CN/mcp.json) | mcp signal |
| mcp | [webview-ui/src/i18n/locales/vi/mcp.json](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/i18n/locales/vi/mcp.json) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/Zoo-Code-Org__Zoo-Code/AGENTS.md) | agentRuntime signal |
| agentRuntime | [webview-ui/AGENTS.md](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/AGENTS.md) | agentRuntime signal |
| agentRuntime | [webview-ui/src/utils/context-mentions.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/utils/context-mentions.ts) | agentRuntime signal |
| agentRuntime | [webview-ui/src/utils/__tests__/context-mentions.spec.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/utils/__tests__/context-mentions.spec.ts) | agentRuntime signal |
| entrypoints | [webview-ui/src/App.tsx](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/App.tsx) | entrypoints signal |
| entrypoints | [webview-ui/src/index.css](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/index.css) | entrypoints signal |
| entrypoints | [webview-ui/src/index.tsx](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/index.tsx) | entrypoints signal |
| entrypoints | [packages/vscode-shim/src/index.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/packages/vscode-shim/src/index.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 193 | [webview-ui/src/App.tsx](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/App.tsx)<br>[webview-ui/src/index.css](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/index.css)<br>[webview-ui/src/index.tsx](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/index.tsx)<br>[packages/vscode-shim/src/index.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/packages/vscode-shim/src/index.ts)<br>[packages/types/src/cli.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/packages/types/src/cli.ts)<br>[packages/types/src/index.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/packages/types/src/index.ts)<br>[packages/telemetry/src/index.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/packages/telemetry/src/index.ts)<br>[packages/ipc/src/index.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/packages/ipc/src/index.ts) |
| agentRuntime | 248 | [AGENTS.md](../../../../sources/Zoo-Code-Org__Zoo-Code/AGENTS.md)<br>[webview-ui/AGENTS.md](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/AGENTS.md)<br>[webview-ui/src/utils/context-mentions.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/utils/context-mentions.ts)<br>[webview-ui/src/utils/__tests__/context-mentions.spec.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/utils/__tests__/context-mentions.spec.ts)<br>[webview-ui/src/hooks/useAutoApprovalState.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/hooks/useAutoApprovalState.ts)<br>[webview-ui/src/hooks/useAutoApprovalToggles.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/hooks/useAutoApprovalToggles.ts)<br>[webview-ui/src/hooks/useEscapeKey.spec.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/hooks/useEscapeKey.spec.ts)<br>[webview-ui/src/hooks/useEscapeKey.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/hooks/useEscapeKey.ts) |
| mcp | 72 | [webview-ui/src/utils/mcp.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/utils/mcp.ts)<br>[webview-ui/src/i18n/locales/zh-TW/mcp.json](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/i18n/locales/zh-TW/mcp.json)<br>[webview-ui/src/i18n/locales/zh-CN/mcp.json](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/i18n/locales/zh-CN/mcp.json)<br>[webview-ui/src/i18n/locales/vi/mcp.json](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/i18n/locales/vi/mcp.json)<br>[webview-ui/src/i18n/locales/tr/mcp.json](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/i18n/locales/tr/mcp.json)<br>[webview-ui/src/i18n/locales/ru/mcp.json](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/i18n/locales/ru/mcp.json)<br>[webview-ui/src/i18n/locales/pt-BR/mcp.json](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/i18n/locales/pt-BR/mcp.json)<br>[webview-ui/src/i18n/locales/pl/mcp.json](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/i18n/locales/pl/mcp.json) |
| retrieval | 132 | [webview-ui/index.html](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/index.html)<br>[webview-ui/src/index.css](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/index.css)<br>[webview-ui/src/index.tsx](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/index.tsx)<br>[webview-ui/src/components/ui/index.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/components/ui/index.ts)<br>[webview-ui/src/components/ui/hooks/index.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/components/ui/hooks/index.ts)<br>[webview-ui/src/components/settings/providers/index.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/components/settings/providers/index.ts)<br>[webview-ui/src/components/chat/context-management/index.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/components/chat/context-management/index.ts)<br>[src/utils/logging/index.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/src/utils/logging/index.ts) |
| spec | 537 | [webview-ui/src/utils/__tests__/batchConsecutive.spec.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/utils/__tests__/batchConsecutive.spec.ts)<br>[webview-ui/src/utils/__tests__/command-parser.spec.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/utils/__tests__/command-parser.spec.ts)<br>[webview-ui/src/utils/__tests__/context-mentions.spec.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/utils/__tests__/context-mentions.spec.ts)<br>[webview-ui/src/utils/__tests__/format.spec.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/utils/__tests__/format.spec.ts)<br>[webview-ui/src/utils/__tests__/highlightDiff.spec.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/utils/__tests__/highlightDiff.spec.ts)<br>[webview-ui/src/utils/__tests__/markdown.spec.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/utils/__tests__/markdown.spec.ts)<br>[webview-ui/src/utils/__tests__/model-utils.spec.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/utils/__tests__/model-utils.spec.ts)<br>[webview-ui/src/utils/__tests__/sourceMapUtils.spec.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/utils/__tests__/sourceMapUtils.spec.ts) |
| eval | 735 | [webview-ui/src/utils/test-utils.tsx](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/utils/test-utils.tsx)<br>[webview-ui/src/utils/__tests__/batchConsecutive.spec.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/utils/__tests__/batchConsecutive.spec.ts)<br>[webview-ui/src/utils/__tests__/command-parser.spec.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/utils/__tests__/command-parser.spec.ts)<br>[webview-ui/src/utils/__tests__/context-mentions.spec.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/utils/__tests__/context-mentions.spec.ts)<br>[webview-ui/src/utils/__tests__/format.spec.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/utils/__tests__/format.spec.ts)<br>[webview-ui/src/utils/__tests__/highlightDiff.spec.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/utils/__tests__/highlightDiff.spec.ts)<br>[webview-ui/src/utils/__tests__/markdown.spec.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/utils/__tests__/markdown.spec.ts)<br>[webview-ui/src/utils/__tests__/model-utils.spec.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/utils/__tests__/model-utils.spec.ts) |
| security | 15 | [SECURITY.md](../../../../sources/Zoo-Code-Org__Zoo-Code/SECURITY.md)<br>[webview-ui/src/oauth/urls.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/oauth/urls.ts)<br>[src/services/zoo-code-auth.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/src/services/zoo-code-auth.ts)<br>[src/services/mcp/utils/oauth.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/src/services/mcp/utils/oauth.ts)<br>[src/services/mcp/utils/__tests__/oauth.spec.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/src/services/mcp/utils/__tests__/oauth.spec.ts)<br>[src/services/__tests__/zoo-code-auth.test.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/src/services/__tests__/zoo-code-auth.test.ts)<br>[src/integrations/openai-codex/oauth.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/src/integrations/openai-codex/oauth.ts)<br>[src/core/ignore/__tests__/RooIgnoreController.security.spec.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/src/core/ignore/__tests__/RooIgnoreController.security.spec.ts) |
| ci | 9 | [.github/workflows/cli-release.yml](../../../../sources/Zoo-Code-Org__Zoo-Code/.github/workflows/cli-release.yml)<br>[.github/workflows/code-qa.yml](../../../../sources/Zoo-Code-Org__Zoo-Code/.github/workflows/code-qa.yml)<br>[.github/workflows/codeql.yml](../../../../sources/Zoo-Code-Org__Zoo-Code/.github/workflows/codeql.yml)<br>[.github/workflows/e2e.yml](../../../../sources/Zoo-Code-Org__Zoo-Code/.github/workflows/e2e.yml)<br>[.github/workflows/label-pr-review-state.yml](../../../../sources/Zoo-Code-Org__Zoo-Code/.github/workflows/label-pr-review-state.yml)<br>[.github/workflows/marketplace-publish.yml](../../../../sources/Zoo-Code-Org__Zoo-Code/.github/workflows/marketplace-publish.yml)<br>[.github/workflows/nightly-publish.yml](../../../../sources/Zoo-Code-Org__Zoo-Code/.github/workflows/nightly-publish.yml)<br>[.github/workflows/release-validation.yml](../../../../sources/Zoo-Code-Org__Zoo-Code/.github/workflows/release-validation.yml) |
| container | 0 | not obvious |
| instruction | 3 | [AGENTS.md](../../../../sources/Zoo-Code-Org__Zoo-Code/AGENTS.md)<br>[webview-ui/AGENTS.md](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/AGENTS.md)<br>[apps/vscode-e2e/AGENTS.md](../../../../sources/Zoo-Code-Org__Zoo-Code/apps/vscode-e2e/AGENTS.md) |
| docs | 25 | [README.md](../../../../sources/Zoo-Code-Org__Zoo-Code/README.md)<br>[src/integrations/terminal/README.md](../../../../sources/Zoo-Code-Org__Zoo-Code/src/integrations/terminal/README.md)<br>[src/assets/docs/demo.gif](../../../../sources/Zoo-Code-Org__Zoo-Code/src/assets/docs/demo.gif)<br>[packages/types/npm/README.md](../../../../sources/Zoo-Code-Org__Zoo-Code/packages/types/npm/README.md)<br>[packages/ipc/README.md](../../../../sources/Zoo-Code-Org__Zoo-Code/packages/ipc/README.md)<br>[locales/zh-TW/README.md](../../../../sources/Zoo-Code-Org__Zoo-Code/locales/zh-TW/README.md)<br>[locales/zh-CN/README.md](../../../../sources/Zoo-Code-Org__Zoo-Code/locales/zh-CN/README.md)<br>[locales/vi/README.md](../../../../sources/Zoo-Code-Org__Zoo-Code/locales/vi/README.md) |
| config | 31 | [package.json](../../../../sources/Zoo-Code-Org__Zoo-Code/package.json)<br>[pnpm-workspace.yaml](../../../../sources/Zoo-Code-Org__Zoo-Code/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/Zoo-Code-Org__Zoo-Code/tsconfig.json)<br>[turbo.json](../../../../sources/Zoo-Code-Org__Zoo-Code/turbo.json)<br>[webview-ui/package.json](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/package.json)<br>[webview-ui/tsconfig.json](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/tsconfig.json)<br>[webview-ui/turbo.json](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/turbo.json)<br>[src/package.json](../../../../sources/Zoo-Code-Org__Zoo-Code/src/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 735 | [webview-ui/src/utils/test-utils.tsx](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/utils/test-utils.tsx)<br>[webview-ui/src/utils/__tests__/batchConsecutive.spec.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/utils/__tests__/batchConsecutive.spec.ts)<br>[webview-ui/src/utils/__tests__/command-parser.spec.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/utils/__tests__/command-parser.spec.ts)<br>[webview-ui/src/utils/__tests__/context-mentions.spec.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/utils/__tests__/context-mentions.spec.ts)<br>[webview-ui/src/utils/__tests__/format.spec.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/utils/__tests__/format.spec.ts)<br>[webview-ui/src/utils/__tests__/highlightDiff.spec.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/utils/__tests__/highlightDiff.spec.ts) |
| CI workflows | 9 | [.github/workflows/cli-release.yml](../../../../sources/Zoo-Code-Org__Zoo-Code/.github/workflows/cli-release.yml)<br>[.github/workflows/code-qa.yml](../../../../sources/Zoo-Code-Org__Zoo-Code/.github/workflows/code-qa.yml)<br>[.github/workflows/codeql.yml](../../../../sources/Zoo-Code-Org__Zoo-Code/.github/workflows/codeql.yml)<br>[.github/workflows/e2e.yml](../../../../sources/Zoo-Code-Org__Zoo-Code/.github/workflows/e2e.yml)<br>[.github/workflows/label-pr-review-state.yml](../../../../sources/Zoo-Code-Org__Zoo-Code/.github/workflows/label-pr-review-state.yml)<br>[.github/workflows/marketplace-publish.yml](../../../../sources/Zoo-Code-Org__Zoo-Code/.github/workflows/marketplace-publish.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 15 | [SECURITY.md](../../../../sources/Zoo-Code-Org__Zoo-Code/SECURITY.md)<br>[webview-ui/src/oauth/urls.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/src/oauth/urls.ts)<br>[src/services/zoo-code-auth.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/src/services/zoo-code-auth.ts)<br>[src/services/mcp/utils/oauth.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/src/services/mcp/utils/oauth.ts)<br>[src/services/mcp/utils/__tests__/oauth.spec.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/src/services/mcp/utils/__tests__/oauth.spec.ts)<br>[src/services/__tests__/zoo-code-auth.test.ts](../../../../sources/Zoo-Code-Org__Zoo-Code/src/services/__tests__/zoo-code-auth.test.ts) |
| Agent instructions | 3 | [AGENTS.md](../../../../sources/Zoo-Code-Org__Zoo-Code/AGENTS.md)<br>[webview-ui/AGENTS.md](../../../../sources/Zoo-Code-Org__Zoo-Code/webview-ui/AGENTS.md)<br>[apps/vscode-e2e/AGENTS.md](../../../../sources/Zoo-Code-Org__Zoo-Code/apps/vscode-e2e/AGENTS.md) |


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
3. Map agent/tool runtime through: `AGENTS.md`, `webview-ui/AGENTS.md`, `webview-ui/src/utils/context-mentions.ts`.
4. Inspect retrieval/memory/indexing through: `webview-ui/index.html`, `webview-ui/src/index.css`, `webview-ui/src/index.tsx`.
5. Verify behavior through test/eval files: `webview-ui/src/utils/test-utils.tsx`, `webview-ui/src/utils/__tests__/batchConsecutive.spec.ts`, `webview-ui/src/utils/__tests__/command-parser.spec.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Zoo Code gives you a whole dev team of AI agents in your code editor.. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, LICENSE, vscode이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
