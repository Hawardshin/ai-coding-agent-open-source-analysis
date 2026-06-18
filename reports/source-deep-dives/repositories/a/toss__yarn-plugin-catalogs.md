# toss/yarn-plugin-catalogs Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

A Yarn plugin that enables "Catalogs" - a workspace feature for defining dependency version ranges as reusable constants across your project.

## 요약

- 조사 단위: `sources/toss__yarn-plugin-catalogs` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 42 files, 15 directories, depth score 82, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=.yarn/sdks/typescript/bin/tsc, .yarn/sdks/typescript/bin/tsserver이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | toss/yarn-plugin-catalogs |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 68 |
| Forks | 8 |
| License | MIT |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/toss__yarn-plugin-catalogs](../../../../sources/toss__yarn-plugin-catalogs) |
| Existing report | [reports/korea-trending/repositories/toss__yarn-plugin-catalogs.md](../../../korea-trending/repositories/toss__yarn-plugin-catalogs.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 42 / 15 |
| Max observed depth | 5 |
| Top directories | .github, .yarn, bundles, sources |
| Top extensions | .ts: 20, (none): 6, .js: 5, .json: 5, .yml: 3, .cjs: 1, .lock: 1, .md: 1 |
| Source patterns | cli-first, api/server, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| bundles | top-level component | 1 |
| sources | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | builder build plugin |
| serve-dev | package.json | build:dev | builder build plugin --no-minify |
| build | package.json | clean | rimraf bundles |
| test | package.json | test | yarn build:dev && vitest run |
| test | package.json | test:watch | yarn build && vitest watch |
| quality | package.json | typecheck | tsc --noEmit |


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
| entrypoints | [.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__yarn-plugin-catalogs/.yarn/sdks/typescript/bin/tsc) | entrypoints signal |
| entrypoints | [.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__yarn-plugin-catalogs/.yarn/sdks/typescript/bin/tsserver) | entrypoints signal |
| config | [package.json](../../../../sources/toss__yarn-plugin-catalogs/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/toss__yarn-plugin-catalogs/tsconfig.json) | config signal |
| config | [.yarn/sdks/typescript/package.json](../../../../sources/toss__yarn-plugin-catalogs/.yarn/sdks/typescript/package.json) | config signal |
| docs | [README.md](../../../../sources/toss__yarn-plugin-catalogs/README.md) | docs signal |
| eval | [sources/__tests__/apply-command.test.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/apply-command.test.ts) | eval signal |
| eval | [sources/__tests__/basic.test.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/basic.test.ts) | eval signal |
| eval | [sources/__tests__/default-groups.test.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/default-groups.test.ts) | eval signal |
| eval | [sources/__tests__/inheritance.test.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/inheritance.test.ts) | eval signal |
| ci | [.github/workflows/test.yml](../../../../sources/toss__yarn-plugin-catalogs/.github/workflows/test.yml) | ci support |
| manifest-entrypoint | [sources/index.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/index.ts) | package manifest entrypoint |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__yarn-plugin-catalogs/.yarn/sdks/typescript/bin/tsc)<br>[.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__yarn-plugin-catalogs/.yarn/sdks/typescript/bin/tsserver) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 2 | [sources/index.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/index.ts)<br>[sources/configuration/index.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/configuration/index.ts) |
| spec | 0 | not obvious |
| eval | 9 | [sources/__tests__/apply-command.test.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/apply-command.test.ts)<br>[sources/__tests__/basic.test.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/basic.test.ts)<br>[sources/__tests__/default-groups.test.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/default-groups.test.ts)<br>[sources/__tests__/inheritance.test.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/inheritance.test.ts)<br>[sources/__tests__/utils.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/utils.ts)<br>[sources/__tests__/validate-command.test.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/validate-command.test.ts)<br>[sources/__tests__/validate-project.test.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/validate-project.test.ts)<br>[sources/__tests__/validation.test.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/validation.test.ts) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/test.yml](../../../../sources/toss__yarn-plugin-catalogs/.github/workflows/test.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/toss__yarn-plugin-catalogs/README.md) |
| config | 3 | [package.json](../../../../sources/toss__yarn-plugin-catalogs/package.json)<br>[tsconfig.json](../../../../sources/toss__yarn-plugin-catalogs/tsconfig.json)<br>[.yarn/sdks/typescript/package.json](../../../../sources/toss__yarn-plugin-catalogs/.yarn/sdks/typescript/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 9 | [sources/__tests__/apply-command.test.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/apply-command.test.ts)<br>[sources/__tests__/basic.test.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/basic.test.ts)<br>[sources/__tests__/default-groups.test.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/default-groups.test.ts)<br>[sources/__tests__/inheritance.test.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/inheritance.test.ts)<br>[sources/__tests__/utils.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/utils.ts)<br>[sources/__tests__/validate-command.test.ts](../../../../sources/toss__yarn-plugin-catalogs/sources/__tests__/validate-command.test.ts) |
| CI workflows | 1 | [.github/workflows/test.yml](../../../../sources/toss__yarn-plugin-catalogs/.github/workflows/test.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `.yarn/sdks/typescript/bin/tsc`, `.yarn/sdks/typescript/bin/tsserver`, `package.json`.
2. Trace execution through entrypoints: `.yarn/sdks/typescript/bin/tsc`, `.yarn/sdks/typescript/bin/tsserver`.
3. Inspect retrieval/memory/indexing through: `sources/index.ts`, `sources/configuration/index.ts`.
4. Verify behavior through test/eval files: `sources/__tests__/apply-command.test.ts`, `sources/__tests__/basic.test.ts`, `sources/__tests__/default-groups.test.ts`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 A Yarn plugin that enables "Catalogs" a workspace feature for defining dependency version ranges as reusable constants a. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
