# daangn/urlpack Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Pure JavaScript toolkit for data URLs (MessagePack, Base58 and Base62)

## 요약

- 조사 단위: `sources/daangn__urlpack` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 102 files, 28 directories, depth score 90, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/qrjson/src/index.ts, packages/msgpack/src/index.ts, packages/json/src/index.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | daangn/urlpack |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 61 |
| Forks | 4 |
| License | MIT |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/daangn__urlpack](../../../../sources/daangn__urlpack) |
| Existing report | [reports/korea-trending/repositories/daangn__urlpack.md](../../../korea-trending/repositories/daangn__urlpack.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 102 / 28 |
| Max observed depth | 5 |
| Top directories | .changeset, .github, .yarn, benchmarks, packages |
| Top extensions | .ts: 36, (none): 19, .json: 17, .md: 16, .js: 8, .yml: 3, .cjs: 1, .lock: 1, .res: 1 |
| Source patterns | monorepo/workspace, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/json | packages workspace | 7 |
| packages/msgpack | packages workspace | 7 |
| packages/base10 | packages workspace | 6 |
| packages/base58 | packages workspace | 6 |
| packages/base62 | packages workspace | 6 |
| packages/qrjson | packages workspace | 6 |
| packages/base-codec | packages workspace | 5 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| packages | source boundary | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| quality | package.json | typecheck | tsc --noEmit |
| test | package.json | test | node --test |
| test | package.json | test:watch | node --test --watch |


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
| entrypoints | [packages/qrjson/src/index.ts](../../../../sources/daangn__urlpack/packages/qrjson/src/index.ts) | entrypoints signal |
| entrypoints | [packages/msgpack/src/index.ts](../../../../sources/daangn__urlpack/packages/msgpack/src/index.ts) | entrypoints signal |
| entrypoints | [packages/json/src/index.ts](../../../../sources/daangn__urlpack/packages/json/src/index.ts) | entrypoints signal |
| entrypoints | [packages/base62/src/index.ts](../../../../sources/daangn__urlpack/packages/base62/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/daangn__urlpack/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/daangn__urlpack/tsconfig.json) | config signal |
| config | [packages/qrjson/package.json](../../../../sources/daangn__urlpack/packages/qrjson/package.json) | config signal |
| config | [packages/qrjson/tsconfig.json](../../../../sources/daangn__urlpack/packages/qrjson/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/daangn__urlpack/README.md) | docs signal |
| docs | [packages/qrjson/README.md](../../../../sources/daangn__urlpack/packages/qrjson/README.md) | docs signal |
| docs | [packages/msgpack/README.md](../../../../sources/daangn__urlpack/packages/msgpack/README.md) | docs signal |
| docs | [packages/json/README.md](../../../../sources/daangn__urlpack/packages/json/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 7 | [packages/qrjson/src/index.ts](../../../../sources/daangn__urlpack/packages/qrjson/src/index.ts)<br>[packages/msgpack/src/index.ts](../../../../sources/daangn__urlpack/packages/msgpack/src/index.ts)<br>[packages/json/src/index.ts](../../../../sources/daangn__urlpack/packages/json/src/index.ts)<br>[packages/base62/src/index.ts](../../../../sources/daangn__urlpack/packages/base62/src/index.ts)<br>[packages/base58/src/index.ts](../../../../sources/daangn__urlpack/packages/base58/src/index.ts)<br>[packages/base10/src/index.ts](../../../../sources/daangn__urlpack/packages/base10/src/index.ts)<br>[packages/base-codec/src/index.ts](../../../../sources/daangn__urlpack/packages/base-codec/src/index.ts) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 7 | [packages/qrjson/src/index.ts](../../../../sources/daangn__urlpack/packages/qrjson/src/index.ts)<br>[packages/msgpack/src/index.ts](../../../../sources/daangn__urlpack/packages/msgpack/src/index.ts)<br>[packages/json/src/index.ts](../../../../sources/daangn__urlpack/packages/json/src/index.ts)<br>[packages/base62/src/index.ts](../../../../sources/daangn__urlpack/packages/base62/src/index.ts)<br>[packages/base58/src/index.ts](../../../../sources/daangn__urlpack/packages/base58/src/index.ts)<br>[packages/base10/src/index.ts](../../../../sources/daangn__urlpack/packages/base10/src/index.ts)<br>[packages/base-codec/src/index.ts](../../../../sources/daangn__urlpack/packages/base-codec/src/index.ts) |
| spec | 1 | [packages/json/tests/codec.spec.ts](../../../../sources/daangn__urlpack/packages/json/tests/codec.spec.ts) |
| eval | 7 | [packages/qrjson/tests/codec.test.ts](../../../../sources/daangn__urlpack/packages/qrjson/tests/codec.test.ts)<br>[packages/msgpack/tests/codec.test.ts](../../../../sources/daangn__urlpack/packages/msgpack/tests/codec.test.ts)<br>[packages/msgpack/tests/decode-complex.test.ts](../../../../sources/daangn__urlpack/packages/msgpack/tests/decode-complex.test.ts)<br>[packages/json/tests/codec.spec.ts](../../../../sources/daangn__urlpack/packages/json/tests/codec.spec.ts)<br>[packages/base62/tests/codec.test.ts](../../../../sources/daangn__urlpack/packages/base62/tests/codec.test.ts)<br>[packages/base58/tests/codec.test.ts](../../../../sources/daangn__urlpack/packages/base58/tests/codec.test.ts)<br>[packages/base10/tests/codec.test.ts](../../../../sources/daangn__urlpack/packages/base10/tests/codec.test.ts) |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/daangn__urlpack/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/daangn__urlpack/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 9 | [README.md](../../../../sources/daangn__urlpack/README.md)<br>[packages/qrjson/README.md](../../../../sources/daangn__urlpack/packages/qrjson/README.md)<br>[packages/msgpack/README.md](../../../../sources/daangn__urlpack/packages/msgpack/README.md)<br>[packages/json/README.md](../../../../sources/daangn__urlpack/packages/json/README.md)<br>[packages/base62/README.md](../../../../sources/daangn__urlpack/packages/base62/README.md)<br>[packages/base58/README.md](../../../../sources/daangn__urlpack/packages/base58/README.md)<br>[packages/base10/README.md](../../../../sources/daangn__urlpack/packages/base10/README.md)<br>[packages/base-codec/README.md](../../../../sources/daangn__urlpack/packages/base-codec/README.md) |
| config | 16 | [package.json](../../../../sources/daangn__urlpack/package.json)<br>[tsconfig.json](../../../../sources/daangn__urlpack/tsconfig.json)<br>[packages/qrjson/package.json](../../../../sources/daangn__urlpack/packages/qrjson/package.json)<br>[packages/qrjson/tsconfig.json](../../../../sources/daangn__urlpack/packages/qrjson/tsconfig.json)<br>[packages/msgpack/package.json](../../../../sources/daangn__urlpack/packages/msgpack/package.json)<br>[packages/msgpack/tsconfig.json](../../../../sources/daangn__urlpack/packages/msgpack/tsconfig.json)<br>[packages/json/package.json](../../../../sources/daangn__urlpack/packages/json/package.json)<br>[packages/json/tsconfig.json](../../../../sources/daangn__urlpack/packages/json/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 7 | [packages/qrjson/tests/codec.test.ts](../../../../sources/daangn__urlpack/packages/qrjson/tests/codec.test.ts)<br>[packages/msgpack/tests/codec.test.ts](../../../../sources/daangn__urlpack/packages/msgpack/tests/codec.test.ts)<br>[packages/msgpack/tests/decode-complex.test.ts](../../../../sources/daangn__urlpack/packages/msgpack/tests/decode-complex.test.ts)<br>[packages/json/tests/codec.spec.ts](../../../../sources/daangn__urlpack/packages/json/tests/codec.spec.ts)<br>[packages/base62/tests/codec.test.ts](../../../../sources/daangn__urlpack/packages/base62/tests/codec.test.ts)<br>[packages/base58/tests/codec.test.ts](../../../../sources/daangn__urlpack/packages/base58/tests/codec.test.ts) |
| CI workflows | 2 | [.github/workflows/ci.yml](../../../../sources/daangn__urlpack/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/daangn__urlpack/.github/workflows/release.yml) |
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

1. Start from key references: `packages/qrjson/src/index.ts`, `packages/msgpack/src/index.ts`, `packages/json/src/index.ts`.
2. Trace execution through entrypoints: `packages/qrjson/src/index.ts`, `packages/msgpack/src/index.ts`, `packages/json/src/index.ts`.
3. Inspect retrieval/memory/indexing through: `packages/qrjson/src/index.ts`, `packages/msgpack/src/index.ts`, `packages/json/src/index.ts`.
4. Verify behavior through test/eval files: `packages/qrjson/tests/codec.test.ts`, `packages/msgpack/tests/codec.test.ts`, `packages/msgpack/tests/decode-complex.test.ts`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Pure JavaScript toolkit for data URLs MessagePack, Base58 and Base62. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
