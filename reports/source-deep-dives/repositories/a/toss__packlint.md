# toss/packlint Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Lint Package.json in large JavaScript Monorepos

## 요약

- 조사 단위: `sources/toss__packlint` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 92 files, 29 directories, depth score 96, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/core/src/index.ts, packages/command/src/index.ts, packages/cli/src/index.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | toss/packlint |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 35 |
| Forks | 5 |
| License | MIT |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/toss__packlint](../../../../sources/toss__packlint) |
| Existing report | [reports/korea-trending/repositories/toss__packlint.md](../../../korea-trending/repositories/toss__packlint.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 92 / 29 |
| Max observed depth | 6 |
| Top directories | .changeset, .github, .yarn, packages |
| Top extensions | .ts: 39, .json: 13, .js: 10, .md: 9, (none): 8, .mjs: 4, .yml: 4, .cjs: 3, .lock: 1, .toml: 1 |
| Source patterns | monorepo/workspace, cli-first, api/server, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/command | packages workspace | 11 |
| packages/core | packages workspace | 9 |
| packages/cli | packages workspace | 8 |
| .github | ci surface | 1 |
| packages | source boundary | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | turbo run build |
| serve-dev | package.json | dev | turbo run dev |
| quality | package.json | typecheck | turbo run typecheck |
| utility | package.json | changeset:publish | changeset publish |
| utility | package.json | changeset:version | changeset version |
| quality | package.json | lint:all | yarn eslint --fix |
| quality | package.json | packlint:all | yarn packlint -R |
| utility | package.json | prepack | turbo run prepack |
| test | package.json | test:all | yarn vitest run |


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
| entrypoints | [packages/core/src/index.ts](../../../../sources/toss__packlint/packages/core/src/index.ts) | entrypoints signal |
| entrypoints | [packages/command/src/index.ts](../../../../sources/toss__packlint/packages/command/src/index.ts) | entrypoints signal |
| entrypoints | [packages/cli/src/index.ts](../../../../sources/toss__packlint/packages/cli/src/index.ts) | entrypoints signal |
| entrypoints | [packages/cli/src/main.ts](../../../../sources/toss__packlint/packages/cli/src/main.ts) | entrypoints signal |
| config | [package.json](../../../../sources/toss__packlint/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/toss__packlint/tsconfig.json) | config signal |
| config | [turbo.json](../../../../sources/toss__packlint/turbo.json) | config signal |
| config | [packages/core/package.json](../../../../sources/toss__packlint/packages/core/package.json) | config signal |
| docs | [README.md](../../../../sources/toss__packlint/README.md) | docs signal |
| docs | [packages/core/README.md](../../../../sources/toss__packlint/packages/core/README.md) | docs signal |
| docs | [packages/command/README.md](../../../../sources/toss__packlint/packages/command/README.md) | docs signal |
| docs | [packages/cli/README.md](../../../../sources/toss__packlint/packages/cli/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 9 | [packages/core/src/index.ts](../../../../sources/toss__packlint/packages/core/src/index.ts)<br>[packages/command/src/index.ts](../../../../sources/toss__packlint/packages/command/src/index.ts)<br>[packages/cli/src/index.ts](../../../../sources/toss__packlint/packages/cli/src/index.ts)<br>[packages/cli/src/main.ts](../../../../sources/toss__packlint/packages/cli/src/main.ts)<br>[packages/cli/bin/index.js](../../../../sources/toss__packlint/packages/cli/bin/index.js)<br>[.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__packlint/.yarn/sdks/typescript/bin/tsc)<br>[.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__packlint/.yarn/sdks/typescript/bin/tsserver)<br>[.yarn/sdks/prettier/bin/prettier.cjs](../../../../sources/toss__packlint/.yarn/sdks/prettier/bin/prettier.cjs) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 12 | [packages/core/src/index.ts](../../../../sources/toss__packlint/packages/core/src/index.ts)<br>[packages/core/src/testing/index.ts](../../../../sources/toss__packlint/packages/core/src/testing/index.ts)<br>[packages/core/src/operations/index.ts](../../../../sources/toss__packlint/packages/core/src/operations/index.ts)<br>[packages/core/src/models/index.ts](../../../../sources/toss__packlint/packages/core/src/models/index.ts)<br>[packages/core/src/contexts/index.ts](../../../../sources/toss__packlint/packages/core/src/contexts/index.ts)<br>[packages/command/src/index.ts](../../../../sources/toss__packlint/packages/command/src/index.ts)<br>[packages/command/src/operations/index.ts](../../../../sources/toss__packlint/packages/command/src/operations/index.ts)<br>[packages/command/src/commands/index.ts](../../../../sources/toss__packlint/packages/command/src/commands/index.ts) |
| spec | 2 | [packages/command/src/operations/merge-package-json.spec.ts](../../../../sources/toss__packlint/packages/command/src/operations/merge-package-json.spec.ts)<br>[packages/command/src/operations/sort-package-json.spec.ts](../../../../sources/toss__packlint/packages/command/src/operations/sort-package-json.spec.ts) |
| eval | 2 | [packages/command/src/operations/merge-package-json.spec.ts](../../../../sources/toss__packlint/packages/command/src/operations/merge-package-json.spec.ts)<br>[packages/command/src/operations/sort-package-json.spec.ts](../../../../sources/toss__packlint/packages/command/src/operations/sort-package-json.spec.ts) |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/toss__packlint/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__packlint/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 5 | [README.md](../../../../sources/toss__packlint/README.md)<br>[packages/core/README.md](../../../../sources/toss__packlint/packages/core/README.md)<br>[packages/command/README.md](../../../../sources/toss__packlint/packages/command/README.md)<br>[packages/cli/README.md](../../../../sources/toss__packlint/packages/cli/README.md)<br>[.changeset/README.md](../../../../sources/toss__packlint/.changeset/README.md) |
| config | 12 | [package.json](../../../../sources/toss__packlint/package.json)<br>[tsconfig.json](../../../../sources/toss__packlint/tsconfig.json)<br>[turbo.json](../../../../sources/toss__packlint/turbo.json)<br>[packages/core/package.json](../../../../sources/toss__packlint/packages/core/package.json)<br>[packages/core/tsconfig.json](../../../../sources/toss__packlint/packages/core/tsconfig.json)<br>[packages/command/package.json](../../../../sources/toss__packlint/packages/command/package.json)<br>[packages/command/tsconfig.json](../../../../sources/toss__packlint/packages/command/tsconfig.json)<br>[packages/cli/package.json](../../../../sources/toss__packlint/packages/cli/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 2 | [packages/command/src/operations/merge-package-json.spec.ts](../../../../sources/toss__packlint/packages/command/src/operations/merge-package-json.spec.ts)<br>[packages/command/src/operations/sort-package-json.spec.ts](../../../../sources/toss__packlint/packages/command/src/operations/sort-package-json.spec.ts) |
| CI workflows | 2 | [.github/workflows/ci.yml](../../../../sources/toss__packlint/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__packlint/.github/workflows/release.yml) |
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

1. Start from key references: `packages/core/src/index.ts`, `packages/command/src/index.ts`, `packages/cli/src/index.ts`.
2. Trace execution through entrypoints: `packages/core/src/index.ts`, `packages/command/src/index.ts`, `packages/cli/src/index.ts`.
3. Inspect retrieval/memory/indexing through: `packages/core/src/index.ts`, `packages/core/src/testing/index.ts`, `packages/core/src/operations/index.ts`.
4. Verify behavior through test/eval files: `packages/command/src/operations/merge-package-json.spec.ts`, `packages/command/src/operations/sort-package-json.spec.ts`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Lint Package.json in large JavaScript Monorepos. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
