# nanobrowser/nanobrowser Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 256 files, 81 directories.

## 요약

- 조사 단위: `sources/nanobrowser__nanobrowser` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 256 files, 81 directories, depth score 110, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=pages/side-panel/public/icons/planner.svg, packages/shared/lib/hooks/index.ts, packages/shared/lib/hooks/useStorage.tsx이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | nanobrowser/nanobrowser |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/nanobrowser__nanobrowser](../../../../sources/nanobrowser__nanobrowser) |
| Existing report | [reports/clone-structures/nanobrowser__nanobrowser.md](../../../clone-structures/nanobrowser__nanobrowser.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 256 / 81 |
| Max observed depth | 7 |
| Top directories | .github, .husky, chrome-extension, packages, pages |
| Top extensions | .ts: 109, .json: 36, (none): 33, .tsx: 16, .md: 13, .mjs: 12, .css: 7, .svg: 5, .yml: 5, .js: 4, .mts: 4, .html: 3 |
| Source patterns | monorepo/workspace, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/shared | packages workspace | 9 |
| packages/storage | packages workspace | 7 |
| packages/hmr | packages workspace | 5 |
| packages/ui | packages workspace | 5 |
| packages/dev-utils | packages workspace | 4 |
| packages/i18n | packages workspace | 4 |
| packages/schema-utils | packages workspace | 4 |
| packages/zipper | packages workspace | 4 |
| packages/vite-config | packages workspace | 2 |
| .github | ci surface | 1 |
| chrome-extension | top-level component | 1 |
| packages | source boundary | 1 |
| packages/tailwind-config | packages workspace | 1 |
| packages/tsconfig | packages workspace | 1 |
| pages | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | clean:bundle | rimraf dist && turbo clean:bundle |
| utility | package.json | clean:node_modules | pnpx rimraf node_modules && pnpx turbo clean:node_modules |
| utility | package.json | clean:turbo | rimraf .turbo && turbo clean:turbo |
| build | package.json | clean | pnpm clean:bundle && pnpm clean:turbo && pnpm clean:node_modules |
| utility | package.json | clean:install | pnpm clean:node_modules && pnpm install --frozen-lockfile |
| build | package.json | build | pnpm clean:bundle && turbo ready && turbo build |
| build | package.json | zip | pnpm build && pnpm -F zipper zip |
| serve-dev | package.json | dev | turbo ready && cross-env __DEV__=true turbo watch dev --concurrency 20 |
| build | package.json | e2e | pnpm build && pnpm zip && turbo e2e |
| quality | package.json | type-check | turbo type-check |
| quality | package.json | lint | turbo lint --continue -- --fix --cache --cache-location node_modules/.cache/.eslintcache |
| quality | package.json | lint:fix | turbo lint:fix --continue -- --fix --cache --cache-location node_modules/.cache/.eslintcache |
| quality | package.json | prettier | turbo prettier --continue -- --cache --cache-location node_modules/.cache/.prettiercache |
| utility | package.json | prepare | husky |
| utility | package.json | update-version | bash update_version.sh |


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
| agentRuntime | [pages/side-panel/public/icons/planner.svg](../../../../sources/nanobrowser__nanobrowser/pages/side-panel/public/icons/planner.svg) | agentRuntime signal |
| agentRuntime | [packages/shared/lib/hooks/index.ts](../../../../sources/nanobrowser__nanobrowser/packages/shared/lib/hooks/index.ts) | agentRuntime signal |
| agentRuntime | [packages/shared/lib/hooks/useStorage.tsx](../../../../sources/nanobrowser__nanobrowser/packages/shared/lib/hooks/useStorage.tsx) | agentRuntime signal |
| agentRuntime | [chrome-extension/src/background/browser/context.ts](../../../../sources/nanobrowser__nanobrowser/chrome-extension/src/background/browser/context.ts) | agentRuntime signal |
| entrypoints | [pages/side-panel/src/index.css](../../../../sources/nanobrowser__nanobrowser/pages/side-panel/src/index.css) | entrypoints signal |
| entrypoints | [pages/side-panel/src/index.tsx](../../../../sources/nanobrowser__nanobrowser/pages/side-panel/src/index.tsx) | entrypoints signal |
| entrypoints | [pages/options/src/index.css](../../../../sources/nanobrowser__nanobrowser/pages/options/src/index.css) | entrypoints signal |
| entrypoints | [pages/options/src/index.tsx](../../../../sources/nanobrowser__nanobrowser/pages/options/src/index.tsx) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/nanobrowser__nanobrowser/CLAUDE.md) | instruction signal |
| config | [package.json](../../../../sources/nanobrowser__nanobrowser/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/nanobrowser__nanobrowser/pnpm-workspace.yaml) | config signal |
| config | [turbo.json](../../../../sources/nanobrowser__nanobrowser/turbo.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 5 | [pages/side-panel/src/index.css](../../../../sources/nanobrowser__nanobrowser/pages/side-panel/src/index.css)<br>[pages/side-panel/src/index.tsx](../../../../sources/nanobrowser__nanobrowser/pages/side-panel/src/index.tsx)<br>[pages/options/src/index.css](../../../../sources/nanobrowser__nanobrowser/pages/options/src/index.css)<br>[pages/options/src/index.tsx](../../../../sources/nanobrowser__nanobrowser/pages/options/src/index.tsx)<br>[pages/content/src/index.ts](../../../../sources/nanobrowser__nanobrowser/pages/content/src/index.ts) |
| agentRuntime | 25 | [pages/side-panel/public/icons/planner.svg](../../../../sources/nanobrowser__nanobrowser/pages/side-panel/public/icons/planner.svg)<br>[packages/shared/lib/hooks/index.ts](../../../../sources/nanobrowser__nanobrowser/packages/shared/lib/hooks/index.ts)<br>[packages/shared/lib/hooks/useStorage.tsx](../../../../sources/nanobrowser__nanobrowser/packages/shared/lib/hooks/useStorage.tsx)<br>[chrome-extension/src/background/browser/context.ts](../../../../sources/nanobrowser__nanobrowser/chrome-extension/src/background/browser/context.ts)<br>[chrome-extension/src/background/agent/executor.ts](../../../../sources/nanobrowser__nanobrowser/chrome-extension/src/background/agent/executor.ts)<br>[chrome-extension/src/background/agent/helper.ts](../../../../sources/nanobrowser__nanobrowser/chrome-extension/src/background/agent/helper.ts)<br>[chrome-extension/src/background/agent/history.ts](../../../../sources/nanobrowser__nanobrowser/chrome-extension/src/background/agent/history.ts)<br>[chrome-extension/src/background/agent/types.ts](../../../../sources/nanobrowser__nanobrowser/chrome-extension/src/background/agent/types.ts) |
| mcp | 0 | not obvious |
| retrieval | 31 | [pages/side-panel/index.html](../../../../sources/nanobrowser__nanobrowser/pages/side-panel/index.html)<br>[pages/side-panel/src/index.css](../../../../sources/nanobrowser__nanobrowser/pages/side-panel/src/index.css)<br>[pages/side-panel/src/index.tsx](../../../../sources/nanobrowser__nanobrowser/pages/side-panel/src/index.tsx)<br>[pages/options/index.html](../../../../sources/nanobrowser__nanobrowser/pages/options/index.html)<br>[pages/options/src/index.css](../../../../sources/nanobrowser__nanobrowser/pages/options/src/index.css)<br>[pages/options/src/index.tsx](../../../../sources/nanobrowser__nanobrowser/pages/options/src/index.tsx)<br>[pages/content/src/index.ts](../../../../sources/nanobrowser__nanobrowser/pages/content/src/index.ts)<br>[packages/zipper/index.ts](../../../../sources/nanobrowser__nanobrowser/packages/zipper/index.ts) |
| spec | 0 | not obvious |
| eval | 1 | [chrome-extension/src/background/services/guardrails/__tests__/guardrails.test.ts](../../../../sources/nanobrowser__nanobrowser/chrome-extension/src/background/services/guardrails/__tests__/guardrails.test.ts) |
| security | 3 | [SECURITY.md](../../../../sources/nanobrowser__nanobrowser/SECURITY.md)<br>[chrome-extension/public/permission/index.html](../../../../sources/nanobrowser__nanobrowser/chrome-extension/public/permission/index.html)<br>[chrome-extension/public/permission/permission.js](../../../../sources/nanobrowser__nanobrowser/chrome-extension/public/permission/permission.js) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 1 | [CLAUDE.md](../../../../sources/nanobrowser__nanobrowser/CLAUDE.md) |
| docs | 8 | [README-es.md](../../../../sources/nanobrowser__nanobrowser/README-es.md)<br>[README-tr.md](../../../../sources/nanobrowser__nanobrowser/README-tr.md)<br>[README-zh-Hant.md](../../../../sources/nanobrowser__nanobrowser/README-zh-Hant.md)<br>[README.md](../../../../sources/nanobrowser__nanobrowser/README.md)<br>[packages/ui/README.md](../../../../sources/nanobrowser__nanobrowser/packages/ui/README.md)<br>[packages/shared/README.md](../../../../sources/nanobrowser__nanobrowser/packages/shared/README.md)<br>[packages/schema-utils/README.md](../../../../sources/nanobrowser__nanobrowser/packages/schema-utils/README.md)<br>[packages/i18n/README.md](../../../../sources/nanobrowser__nanobrowser/packages/i18n/README.md) |
| config | 30 | [package.json](../../../../sources/nanobrowser__nanobrowser/package.json)<br>[pnpm-workspace.yaml](../../../../sources/nanobrowser__nanobrowser/pnpm-workspace.yaml)<br>[turbo.json](../../../../sources/nanobrowser__nanobrowser/turbo.json)<br>[pages/side-panel/package.json](../../../../sources/nanobrowser__nanobrowser/pages/side-panel/package.json)<br>[pages/side-panel/tsconfig.json](../../../../sources/nanobrowser__nanobrowser/pages/side-panel/tsconfig.json)<br>[pages/options/package.json](../../../../sources/nanobrowser__nanobrowser/pages/options/package.json)<br>[pages/options/tsconfig.json](../../../../sources/nanobrowser__nanobrowser/pages/options/tsconfig.json)<br>[pages/content/package.json](../../../../sources/nanobrowser__nanobrowser/pages/content/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1 | [chrome-extension/src/background/services/guardrails/__tests__/guardrails.test.ts](../../../../sources/nanobrowser__nanobrowser/chrome-extension/src/background/services/guardrails/__tests__/guardrails.test.ts) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 3 | [SECURITY.md](../../../../sources/nanobrowser__nanobrowser/SECURITY.md)<br>[chrome-extension/public/permission/index.html](../../../../sources/nanobrowser__nanobrowser/chrome-extension/public/permission/index.html)<br>[chrome-extension/public/permission/permission.js](../../../../sources/nanobrowser__nanobrowser/chrome-extension/public/permission/permission.js) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/nanobrowser__nanobrowser/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `pages/side-panel/public/icons/planner.svg`, `packages/shared/lib/hooks/index.ts`, `packages/shared/lib/hooks/useStorage.tsx`.
2. Trace execution through entrypoints: `pages/side-panel/src/index.css`, `pages/side-panel/src/index.tsx`, `pages/options/src/index.css`.
3. Map agent/tool runtime through: `pages/side-panel/public/icons/planner.svg`, `packages/shared/lib/hooks/index.ts`, `packages/shared/lib/hooks/useStorage.tsx`.
4. Inspect retrieval/memory/indexing through: `pages/side-panel/index.html`, `pages/side-panel/src/index.css`, `pages/side-panel/src/index.tsx`.
5. Verify behavior through test/eval files: `chrome-extension/src/background/services/guardrails/__tests__/guardrails.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 256 files, 81 directories.. 핵심 구조 신호는 package.json, README.md, CLAUDE.md, LICENSE, react, tests이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
