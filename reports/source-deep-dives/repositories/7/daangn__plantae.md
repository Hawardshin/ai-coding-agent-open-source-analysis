# daangn/plantae Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Plantae is a Request & Response API based middleware generator compatible with the various http clients (Fetch, Ky, Axios)

## 요약

- 조사 단위: `sources/daangn__plantae` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 790 files, 28 directories, depth score 112, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/plugin-timeout/src/index.ts, packages/plugin-retry/src/index.ts, packages/plantae/src/index.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | daangn/plantae |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 72 |
| Forks | 1 |
| License | MIT |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/daangn__plantae](../../../../sources/daangn__plantae) |
| Existing report | [reports/korea-trending/repositories/daangn__plantae.md](../../../korea-trending/repositories/daangn__plantae.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 790 / 28 |
| Max observed depth | 5 |
| Top directories | .changeset, .github, .yarn, packages |
| Top extensions | .zip: 725, .ts: 19, .json: 13, (none): 10, .js: 8, .md: 7, .yml: 4, .cjs: 2, .lock: 1, .yaml: 1 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/plantae | packages workspace | 16 |
| packages/plugin-retry | packages workspace | 5 |
| packages/plugin-timeout | packages workspace | 5 |
| .github | ci surface | 1 |
| packages | source boundary | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | ultra -r build |
| build | package.json | build:dts | ultra -r --build build:dts |
| utility | package.json | clean | ultra -r clean |
| quality | package.json | check | biome check |
| quality | package.json | format | biome format --write |
| quality | package.json | lint | biome lint |
| build | package.json | release | yarn build && yarn changeset publish |
| test | package.json | test | yarn build && ultra -r test |
| quality | package.json | typecheck | tsc --noEmit |
| utility | package.json | version | changeset version && yarn install --no-immutable |
| utility | package.json | version:snapshot | changeset version --snapshot main && yarn install --no-immutable |


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
| entrypoints | [packages/plugin-timeout/src/index.ts](../../../../sources/daangn__plantae/packages/plugin-timeout/src/index.ts) | entrypoints signal |
| entrypoints | [packages/plugin-retry/src/index.ts](../../../../sources/daangn__plantae/packages/plugin-retry/src/index.ts) | entrypoints signal |
| entrypoints | [packages/plantae/src/index.ts](../../../../sources/daangn__plantae/packages/plantae/src/index.ts) | entrypoints signal |
| entrypoints | [.yarn/sdks/typescript/bin/tsc](../../../../sources/daangn__plantae/.yarn/sdks/typescript/bin/tsc) | entrypoints signal |
| config | [package.json](../../../../sources/daangn__plantae/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/daangn__plantae/tsconfig.json) | config signal |
| config | [packages/plugin-timeout/package.json](../../../../sources/daangn__plantae/packages/plugin-timeout/package.json) | config signal |
| config | [packages/plugin-timeout/tsconfig.json](../../../../sources/daangn__plantae/packages/plugin-timeout/tsconfig.json) | config signal |
| docs | [packages/plugin-timeout/README.md](../../../../sources/daangn__plantae/packages/plugin-timeout/README.md) | docs signal |
| docs | [packages/plugin-retry/README.md](../../../../sources/daangn__plantae/packages/plugin-retry/README.md) | docs signal |
| docs | [packages/plantae/README.md](../../../../sources/daangn__plantae/packages/plantae/README.md) | docs signal |
| docs | [.changeset/README.md](../../../../sources/daangn__plantae/.changeset/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 6 | [packages/plugin-timeout/src/index.ts](../../../../sources/daangn__plantae/packages/plugin-timeout/src/index.ts)<br>[packages/plugin-retry/src/index.ts](../../../../sources/daangn__plantae/packages/plugin-retry/src/index.ts)<br>[packages/plantae/src/index.ts](../../../../sources/daangn__plantae/packages/plantae/src/index.ts)<br>[.yarn/sdks/typescript/bin/tsc](../../../../sources/daangn__plantae/.yarn/sdks/typescript/bin/tsc)<br>[.yarn/sdks/typescript/bin/tsserver](../../../../sources/daangn__plantae/.yarn/sdks/typescript/bin/tsserver)<br>[.yarn/sdks/eslint/bin/eslint.js](../../../../sources/daangn__plantae/.yarn/sdks/eslint/bin/eslint.js) |
| agentRuntime | 2 | [.yarn/cache/agent-base-npm-6.0.2-428f325a93-f52b6872cc.zip](../../../../sources/daangn__plantae/.yarn/cache/agent-base-npm-6.0.2-428f325a93-f52b6872cc.zip)<br>[.yarn/cache/agent-base-npm-7.1.0-4b12ba5111-f7828f9914.zip](../../../../sources/daangn__plantae/.yarn/cache/agent-base-npm-7.1.0-4b12ba5111-f7828f9914.zip) |
| mcp | 0 | not obvious |
| retrieval | 8 | [packages/plugin-timeout/src/index.ts](../../../../sources/daangn__plantae/packages/plugin-timeout/src/index.ts)<br>[packages/plugin-retry/src/index.ts](../../../../sources/daangn__plantae/packages/plugin-retry/src/index.ts)<br>[packages/plantae/src/index.ts](../../../../sources/daangn__plantae/packages/plantae/src/index.ts)<br>[packages/plantae/src/ky/index.ts](../../../../sources/daangn__plantae/packages/plantae/src/ky/index.ts)<br>[packages/plantae/src/fetch/index.ts](../../../../sources/daangn__plantae/packages/plantae/src/fetch/index.ts)<br>[packages/plantae/src/axios/index.ts](../../../../sources/daangn__plantae/packages/plantae/src/axios/index.ts)<br>[.yarn/sdks/prettier/index.js](../../../../sources/daangn__plantae/.yarn/sdks/prettier/index.js)<br>[.yarn/cache/@changesets-get-dependents-graph-npm-1.3.6-ddd5f64f78-d2cbbc5041.zip](../../../../sources/daangn__plantae/.yarn/cache/@changesets-get-dependents-graph-npm-1.3.6-ddd5f64f78-d2cbbc5041.zip) |
| spec | 3 | [packages/plantae/src/ky/createKyHooks.spec.ts](../../../../sources/daangn__plantae/packages/plantae/src/ky/createKyHooks.spec.ts)<br>[packages/plantae/src/fetch/createFetch.spec.ts](../../../../sources/daangn__plantae/packages/plantae/src/fetch/createFetch.spec.ts)<br>[packages/plantae/src/axios/createAxiosInterceptors.spec.ts](../../../../sources/daangn__plantae/packages/plantae/src/axios/createAxiosInterceptors.spec.ts) |
| eval | 6 | [packages/plantae/src/test/utils.ts](../../../../sources/daangn__plantae/packages/plantae/src/test/utils.ts)<br>[packages/plantae/src/test/worker.ts](../../../../sources/daangn__plantae/packages/plantae/src/test/worker.ts)<br>[packages/plantae/src/ky/createKyHooks.spec.ts](../../../../sources/daangn__plantae/packages/plantae/src/ky/createKyHooks.spec.ts)<br>[packages/plantae/src/fetch/createFetch.spec.ts](../../../../sources/daangn__plantae/packages/plantae/src/fetch/createFetch.spec.ts)<br>[packages/plantae/src/axios/createAxiosInterceptors.spec.ts](../../../../sources/daangn__plantae/packages/plantae/src/axios/createAxiosInterceptors.spec.ts)<br>[.yarn/cache/safe-regex-test-npm-1.0.0-e94a09b84e-bc566d8beb.zip](../../../../sources/daangn__plantae/.yarn/cache/safe-regex-test-npm-1.0.0-e94a09b84e-bc566d8beb.zip) |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/daangn__plantae/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/daangn__plantae/.github/workflows/publish.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 4 | [packages/plugin-timeout/README.md](../../../../sources/daangn__plantae/packages/plugin-timeout/README.md)<br>[packages/plugin-retry/README.md](../../../../sources/daangn__plantae/packages/plugin-retry/README.md)<br>[packages/plantae/README.md](../../../../sources/daangn__plantae/packages/plantae/README.md)<br>[.changeset/README.md](../../../../sources/daangn__plantae/.changeset/README.md) |
| config | 11 | [package.json](../../../../sources/daangn__plantae/package.json)<br>[tsconfig.json](../../../../sources/daangn__plantae/tsconfig.json)<br>[packages/plugin-timeout/package.json](../../../../sources/daangn__plantae/packages/plugin-timeout/package.json)<br>[packages/plugin-timeout/tsconfig.json](../../../../sources/daangn__plantae/packages/plugin-timeout/tsconfig.json)<br>[packages/plugin-retry/package.json](../../../../sources/daangn__plantae/packages/plugin-retry/package.json)<br>[packages/plugin-retry/tsconfig.json](../../../../sources/daangn__plantae/packages/plugin-retry/tsconfig.json)<br>[packages/plantae/package.json](../../../../sources/daangn__plantae/packages/plantae/package.json)<br>[packages/plantae/tsconfig.json](../../../../sources/daangn__plantae/packages/plantae/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 6 | [packages/plantae/src/test/utils.ts](../../../../sources/daangn__plantae/packages/plantae/src/test/utils.ts)<br>[packages/plantae/src/test/worker.ts](../../../../sources/daangn__plantae/packages/plantae/src/test/worker.ts)<br>[packages/plantae/src/ky/createKyHooks.spec.ts](../../../../sources/daangn__plantae/packages/plantae/src/ky/createKyHooks.spec.ts)<br>[packages/plantae/src/fetch/createFetch.spec.ts](../../../../sources/daangn__plantae/packages/plantae/src/fetch/createFetch.spec.ts)<br>[packages/plantae/src/axios/createAxiosInterceptors.spec.ts](../../../../sources/daangn__plantae/packages/plantae/src/axios/createAxiosInterceptors.spec.ts)<br>[.yarn/cache/safe-regex-test-npm-1.0.0-e94a09b84e-bc566d8beb.zip](../../../../sources/daangn__plantae/.yarn/cache/safe-regex-test-npm-1.0.0-e94a09b84e-bc566d8beb.zip) |
| CI workflows | 2 | [.github/workflows/ci.yml](../../../../sources/daangn__plantae/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/daangn__plantae/.github/workflows/publish.yml) |
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

1. Start from key references: `packages/plugin-timeout/src/index.ts`, `packages/plugin-retry/src/index.ts`, `packages/plantae/src/index.ts`.
2. Trace execution through entrypoints: `packages/plugin-timeout/src/index.ts`, `packages/plugin-retry/src/index.ts`, `packages/plantae/src/index.ts`.
3. Map agent/tool runtime through: `.yarn/cache/agent-base-npm-6.0.2-428f325a93-f52b6872cc.zip`, `.yarn/cache/agent-base-npm-7.1.0-4b12ba5111-f7828f9914.zip`.
4. Inspect retrieval/memory/indexing through: `packages/plugin-timeout/src/index.ts`, `packages/plugin-retry/src/index.ts`, `packages/plantae/src/index.ts`.
5. Verify behavior through test/eval files: `packages/plantae/src/test/utils.ts`, `packages/plantae/src/test/worker.ts`, `packages/plantae/src/ky/createKyHooks.spec.ts`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Plantae is a Request & Response API based middleware generator compatible with the various http clients Fetch, Ky, Axios. 핵심 구조 신호는 TypeScript, package.json, LICENSE, ci이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
