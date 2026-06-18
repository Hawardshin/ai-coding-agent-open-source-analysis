# line/liff-inspector Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

The universal DevTools for LIFF (WebView) browser

## 요약

- 조사 단위: `sources/line__liff-inspector` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 93 files, 23 directories, depth score 87, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/liff-inspector/src/index.test.ts, packages/liff-inspector/src/index.ts, packages/headless-inspector-core/src/index.test.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | line/liff-inspector |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 75 |
| Forks | 5 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/line__liff-inspector](../../../../sources/line__liff-inspector) |
| Existing report | [reports/korea-trending/repositories/line__liff-inspector.md](../../../korea-trending/repositories/line__liff-inspector.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 93 / 23 |
| Max observed depth | 6 |
| Top directories | .github, packages, scripts |
| Top extensions | .ts: 57, .json: 13, .md: 9, (none): 6, .js: 4, .yml: 4 |
| Source patterns | monorepo/workspace, cli-first, api/server, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/headless-inspector-cdp | packages workspace | 17 |
| packages/headless-inspector-core | packages workspace | 17 |
| packages/liff-inspector | packages workspace | 9 |
| packages/headless-inspector | packages workspace | 8 |
| .github | ci surface | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | npm run clean -ws && npm run build -ws |
| test | package.json | start:hi | npm run build && npm run serve -w @line/headless-inspector |
| test | package.json | start:hi:https | npm run build && npm run serve -w @line/headless-inspector -- --https |
| test | package.json | start:li | npm run build && npm run serve -w @line/liff-inspector |
| test | package.json | start:li:https | npm run build && npm run serve -w @line/liff-inspector -- --key=../../localhost-key.pem --cert=../../localhost.pem |
| quality | package.json | lint | npm run lint -ws |
| test | package.json | test | jest |
| quality | package.json | format | prettier --check . |
| quality | package.json | format:fix | prettier --write . |
| test | package.json | test:watch | npm run test -- --watch |
| test | package.json | code-check | npm run lint && npm run build && npm run test |
| utility | package.json | versionup | echo 'Error: Please use CI for versioning. Run the GitHub Actions workflow instead.' && exit 1 |
| build | package.json | release | echo 'Error: Please use CI for releases. Run the GitHub Actions workflow instead.' && exit 1 |
| utility | package.json | ci:versionup:patch | npm version patch --no-git-tag-version && npm run ci:update-package-versions && npm run ci:update-internal-deps |
| utility | package.json | ci:versionup:minor | npm version minor --no-git-tag-version && npm run ci:update-package-versions && npm run ci:update-internal-deps |
| utility | package.json | ci:versionup:major | npm version major --no-git-tag-version && npm run ci:update-package-versions && npm run ci:update-internal-deps |
| utility | package.json | ci:update-package-versions | npm --workspaces --include-workspace-root=false exec -- npm pkg set version="$(npm run -s print-version)" |
| quality | package.json | ci:update-internal-deps | node --experimental-strip-types scripts/update-internal-deps.ts $(npm run -s print-version) |
| build | package.json | commit-version | git add . && git commit -m "chore(release): v$(npm run -s print-version)" |
| build | package.json | ci:release | npm publish -ws --access public |
| utility | package.json | print-version | node -p "require('./package.json').version" |


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
| entrypoints | [packages/liff-inspector/src/index.test.ts](../../../../sources/line__liff-inspector/packages/liff-inspector/src/index.test.ts) | entrypoints signal |
| entrypoints | [packages/liff-inspector/src/index.ts](../../../../sources/line__liff-inspector/packages/liff-inspector/src/index.ts) | entrypoints signal |
| entrypoints | [packages/headless-inspector-core/src/index.test.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/index.test.ts) | entrypoints signal |
| entrypoints | [packages/headless-inspector-core/src/index.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/line__liff-inspector/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/line__liff-inspector/tsconfig.json) | config signal |
| config | [packages/liff-inspector/package.json](../../../../sources/line__liff-inspector/packages/liff-inspector/package.json) | config signal |
| config | [packages/liff-inspector/tsconfig.json](../../../../sources/line__liff-inspector/packages/liff-inspector/tsconfig.json) | config signal |
| ci | [.github/workflows/code-check.yml](../../../../sources/line__liff-inspector/.github/workflows/code-check.yml) | ci support |
| ci | [.github/workflows/create-release-pr.yml](../../../../sources/line__liff-inspector/.github/workflows/create-release-pr.yml) | ci support |
| eval | [scripts/update-internal-deps.test.ts](../../../../sources/line__liff-inspector/scripts/update-internal-deps.test.ts) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 9 | [packages/liff-inspector/src/index.test.ts](../../../../sources/line__liff-inspector/packages/liff-inspector/src/index.test.ts)<br>[packages/liff-inspector/src/index.ts](../../../../sources/line__liff-inspector/packages/liff-inspector/src/index.ts)<br>[packages/headless-inspector-core/src/index.test.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/index.test.ts)<br>[packages/headless-inspector-core/src/index.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/index.ts)<br>[packages/headless-inspector-cdp/src/index.test.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-cdp/src/index.test.ts)<br>[packages/headless-inspector-cdp/src/index.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-cdp/src/index.ts)<br>[packages/headless-inspector/src/index.ts](../../../../sources/line__liff-inspector/packages/headless-inspector/src/index.ts)<br>[packages/headless-inspector/src/server.ts](../../../../sources/line__liff-inspector/packages/headless-inspector/src/server.ts) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 12 | [packages/liff-inspector/src/index.test.ts](../../../../sources/line__liff-inspector/packages/liff-inspector/src/index.test.ts)<br>[packages/liff-inspector/src/index.ts](../../../../sources/line__liff-inspector/packages/liff-inspector/src/index.ts)<br>[packages/headless-inspector-core/src/index.test.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/index.test.ts)<br>[packages/headless-inspector-core/src/index.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/index.ts)<br>[packages/headless-inspector-core/src/interceptors/index.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/interceptors/index.ts)<br>[packages/headless-inspector-core/src/interceptors/network/index.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/interceptors/network/index.ts)<br>[packages/headless-inspector-core/src/interceptors/console/index.test.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/interceptors/console/index.test.ts)<br>[packages/headless-inspector-core/src/interceptors/console/index.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/interceptors/console/index.ts) |
| spec | 0 | not obvious |
| eval | 18 | [scripts/update-internal-deps.test.ts](../../../../sources/line__liff-inspector/scripts/update-internal-deps.test.ts)<br>[packages/liff-inspector/src/index.test.ts](../../../../sources/line__liff-inspector/packages/liff-inspector/src/index.test.ts)<br>[packages/headless-inspector-core/src/evemitter.test.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/evemitter.test.ts)<br>[packages/headless-inspector-core/src/index.test.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/index.test.ts)<br>[packages/headless-inspector-core/src/interceptors/network/fetch.test.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/interceptors/network/fetch.test.ts)<br>[packages/headless-inspector-core/src/interceptors/network/xhr.test.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/interceptors/network/xhr.test.ts)<br>[packages/headless-inspector-core/src/interceptors/console/index.test.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/interceptors/console/index.test.ts)<br>[packages/headless-inspector-cdp/src/index.test.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-cdp/src/index.test.ts) |
| security | 0 | not obvious |
| ci | 3 | [.github/workflows/code-check.yml](../../../../sources/line__liff-inspector/.github/workflows/code-check.yml)<br>[.github/workflows/create-release-pr.yml](../../../../sources/line__liff-inspector/.github/workflows/create-release-pr.yml)<br>[.github/workflows/release.yml](../../../../sources/line__liff-inspector/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 7 | [README_ja.md](../../../../sources/line__liff-inspector/README_ja.md)<br>[README.md](../../../../sources/line__liff-inspector/README.md)<br>[packages/liff-inspector/README_ja.md](../../../../sources/line__liff-inspector/packages/liff-inspector/README_ja.md)<br>[packages/liff-inspector/README.md](../../../../sources/line__liff-inspector/packages/liff-inspector/README.md)<br>[packages/headless-inspector-core/README.md](../../../../sources/line__liff-inspector/packages/headless-inspector-core/README.md)<br>[packages/headless-inspector-cdp/README.md](../../../../sources/line__liff-inspector/packages/headless-inspector-cdp/README.md)<br>[packages/headless-inspector/README.md](../../../../sources/line__liff-inspector/packages/headless-inspector/README.md) |
| config | 10 | [package.json](../../../../sources/line__liff-inspector/package.json)<br>[tsconfig.json](../../../../sources/line__liff-inspector/tsconfig.json)<br>[packages/liff-inspector/package.json](../../../../sources/line__liff-inspector/packages/liff-inspector/package.json)<br>[packages/liff-inspector/tsconfig.json](../../../../sources/line__liff-inspector/packages/liff-inspector/tsconfig.json)<br>[packages/headless-inspector-core/package.json](../../../../sources/line__liff-inspector/packages/headless-inspector-core/package.json)<br>[packages/headless-inspector-core/tsconfig.json](../../../../sources/line__liff-inspector/packages/headless-inspector-core/tsconfig.json)<br>[packages/headless-inspector-cdp/package.json](../../../../sources/line__liff-inspector/packages/headless-inspector-cdp/package.json)<br>[packages/headless-inspector-cdp/tsconfig.json](../../../../sources/line__liff-inspector/packages/headless-inspector-cdp/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 18 | [scripts/update-internal-deps.test.ts](../../../../sources/line__liff-inspector/scripts/update-internal-deps.test.ts)<br>[packages/liff-inspector/src/index.test.ts](../../../../sources/line__liff-inspector/packages/liff-inspector/src/index.test.ts)<br>[packages/headless-inspector-core/src/evemitter.test.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/evemitter.test.ts)<br>[packages/headless-inspector-core/src/index.test.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/index.test.ts)<br>[packages/headless-inspector-core/src/interceptors/network/fetch.test.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/interceptors/network/fetch.test.ts)<br>[packages/headless-inspector-core/src/interceptors/network/xhr.test.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/interceptors/network/xhr.test.ts) |
| CI workflows | 3 | [.github/workflows/code-check.yml](../../../../sources/line__liff-inspector/.github/workflows/code-check.yml)<br>[.github/workflows/create-release-pr.yml](../../../../sources/line__liff-inspector/.github/workflows/create-release-pr.yml)<br>[.github/workflows/release.yml](../../../../sources/line__liff-inspector/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `packages/liff-inspector/src/index.test.ts`, `packages/liff-inspector/src/index.ts`, `packages/headless-inspector-core/src/index.test.ts`.
2. Trace execution through entrypoints: `packages/liff-inspector/src/index.test.ts`, `packages/liff-inspector/src/index.ts`, `packages/headless-inspector-core/src/index.test.ts`.
3. Inspect retrieval/memory/indexing through: `packages/liff-inspector/src/index.test.ts`, `packages/liff-inspector/src/index.ts`, `packages/headless-inspector-core/src/index.test.ts`.
4. Verify behavior through test/eval files: `scripts/update-internal-deps.test.ts`, `packages/liff-inspector/src/index.test.ts`, `packages/headless-inspector-core/src/evemitter.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 The universal DevTools for LIFF WebView browser. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
