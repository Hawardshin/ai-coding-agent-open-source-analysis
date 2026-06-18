# toss/nestjs-aop Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

A way to gracefully apply AOP to nestjs

## 요약

- 조사 단위: `sources/toss__nestjs-aop` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 38 files, 9 directories, depth score 79, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/index.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | toss/nestjs-aop |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 257 |
| Forks | 31 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/toss__nestjs-aop](../../../../sources/toss__nestjs-aop) |
| Existing report | [reports/korea-trending/repositories/toss__nestjs-aop.md](../../../korea-trending/repositories/toss__nestjs-aop.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 38 / 9 |
| Max observed depth | 4 |
| Top directories | .github, docs, src |
| Top extensions | .ts: 17, .md: 8, .js: 3, .json: 3, (none): 3, .yaml: 2, .toml: 1, .yml: 1 |
| Source patterns | monorepo/workspace, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 12 |
| docs | documentation surface | 2 |
| .github | ci surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| test | package.json | test | jest --maxWorkers 4 |
| build | package.json | build | rm -rf dist && tsc -p tsconfig.build.json |


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
| entrypoints | [src/index.ts](../../../../sources/toss__nestjs-aop/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/toss__nestjs-aop/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/toss__nestjs-aop/pnpm-workspace.yaml) | config signal |
| config | [tsconfig.json](../../../../sources/toss__nestjs-aop/tsconfig.json) | config signal |
| docs | [readme_kr.md](../../../../sources/toss__nestjs-aop/readme_kr.md) | docs signal |
| docs | [README.md](../../../../sources/toss__nestjs-aop/README.md) | docs signal |
| docs | [docs/migration-guide-v2.md](../../../../sources/toss__nestjs-aop/docs/migration-guide-v2.md) | docs signal |
| eval | [src/__test__/aop.module.test.ts](../../../../sources/toss__nestjs-aop/src/__test__/aop.module.test.ts) | eval signal |
| eval | [src/__test__/controller.test.ts](../../../../sources/toss__nestjs-aop/src/__test__/controller.test.ts) | eval signal |
| eval | [src/__test__/getter-setter.test.ts](../../../../sources/toss__nestjs-aop/src/__test__/getter-setter.test.ts) | eval signal |
| eval | [src/__test__/inheritance.test.ts](../../../../sources/toss__nestjs-aop/src/__test__/inheritance.test.ts) | eval signal |
| ci | [.github/workflows/ci.yml](../../../../sources/toss__nestjs-aop/.github/workflows/ci.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/toss__nestjs-aop/src/index.ts) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 2 | [src/index.ts](../../../../sources/toss__nestjs-aop/src/index.ts)<br>[src/utils/index.ts](../../../../sources/toss__nestjs-aop/src/utils/index.ts) |
| spec | 0 | not obvious |
| eval | 8 | [src/__test__/aop.module.test.ts](../../../../sources/toss__nestjs-aop/src/__test__/aop.module.test.ts)<br>[src/__test__/controller.test.ts](../../../../sources/toss__nestjs-aop/src/__test__/controller.test.ts)<br>[src/__test__/getter-setter.test.ts](../../../../sources/toss__nestjs-aop/src/__test__/getter-setter.test.ts)<br>[src/__test__/inheritance.test.ts](../../../../sources/toss__nestjs-aop/src/__test__/inheritance.test.ts)<br>[src/__test__/fixture/aop-testing.decorator.ts](../../../../sources/toss__nestjs-aop/src/__test__/fixture/aop-testing.decorator.ts)<br>[src/__test__/fixture/aop-testing.module.ts](../../../../sources/toss__nestjs-aop/src/__test__/fixture/aop-testing.module.ts)<br>[src/__test__/fixture/auto-cache.decorator.ts](../../../../sources/toss__nestjs-aop/src/__test__/fixture/auto-cache.decorator.ts)<br>[src/__test__/fixture/observable.decorator.ts](../../../../sources/toss__nestjs-aop/src/__test__/fixture/observable.decorator.ts) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/toss__nestjs-aop/.github/workflows/ci.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 3 | [readme_kr.md](../../../../sources/toss__nestjs-aop/readme_kr.md)<br>[README.md](../../../../sources/toss__nestjs-aop/README.md)<br>[docs/migration-guide-v2.md](../../../../sources/toss__nestjs-aop/docs/migration-guide-v2.md) |
| config | 3 | [package.json](../../../../sources/toss__nestjs-aop/package.json)<br>[pnpm-workspace.yaml](../../../../sources/toss__nestjs-aop/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/toss__nestjs-aop/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 8 | [src/__test__/aop.module.test.ts](../../../../sources/toss__nestjs-aop/src/__test__/aop.module.test.ts)<br>[src/__test__/controller.test.ts](../../../../sources/toss__nestjs-aop/src/__test__/controller.test.ts)<br>[src/__test__/getter-setter.test.ts](../../../../sources/toss__nestjs-aop/src/__test__/getter-setter.test.ts)<br>[src/__test__/inheritance.test.ts](../../../../sources/toss__nestjs-aop/src/__test__/inheritance.test.ts)<br>[src/__test__/fixture/aop-testing.decorator.ts](../../../../sources/toss__nestjs-aop/src/__test__/fixture/aop-testing.decorator.ts)<br>[src/__test__/fixture/aop-testing.module.ts](../../../../sources/toss__nestjs-aop/src/__test__/fixture/aop-testing.module.ts) |
| CI workflows | 1 | [.github/workflows/ci.yml](../../../../sources/toss__nestjs-aop/.github/workflows/ci.yml) |
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

1. Start from key references: `src/index.ts`, `package.json`, `pnpm-workspace.yaml`.
2. Trace execution through entrypoints: `src/index.ts`.
3. Inspect retrieval/memory/indexing through: `src/index.ts`, `src/utils/index.ts`.
4. Verify behavior through test/eval files: `src/__test__/aop.module.test.ts`, `src/__test__/controller.test.ts`, `src/__test__/getter-setter.test.ts`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 A way to gracefully apply AOP to nestjs. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
