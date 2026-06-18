# toss/es-git Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

A modern Git library built for Node.js with blazing-fast installation and rock-solid stability, powered by N-API.

## 요약

- 조사 단위: `sources/toss__es-git` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,070 files, 258 directories, depth score 104, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/index.rs이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | toss/es-git |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Rust |
| Stars | 319 |
| Forks | 12 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/toss__es-git](../../../../sources/toss__es-git) |
| Existing report | [reports/korea-trending/repositories/toss__es-git.md](../../../korea-trending/repositories/toss__es-git.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1070 / 258 |
| Max observed depth | 7 |
| Top directories | .cargo, .github, .scripts, .yarn, benchmarks, docs, src, tests, transforms |
| Top extensions | .md: 743, (none): 151, .ts: 57, .rs: 40, .sample: 40, .json: 10, .png: 6, .toml: 5, .js: 3, .yml: 3, .lock: 2, .mts: 2 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 116 |
| docs | documentation surface | 77 |
| src | source boundary | 3 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| transforms | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | napi build --platform --release --no-const-enum --pipe="yarn transform:dts" |
| build | package.json | build:debug | DEBUG="napi:*" napi build --platform --no-const-enum --pipe="yarn transform:dts" |
| utility | package.json | transform:dts | jscodeshift -t transforms/dts.mjs index.d.ts |
| quality | package.json | check | biome check |
| quality | package.json | check:fix | biome check --write --unsafe |


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
| entrypoints | [src/index.rs](../../../../sources/toss__es-git/src/index.rs) | entrypoints signal |
| config | [Cargo.lock](../../../../sources/toss__es-git/Cargo.lock) | config signal |
| config | [Cargo.toml](../../../../sources/toss__es-git/Cargo.toml) | config signal |
| config | [package.json](../../../../sources/toss__es-git/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/toss__es-git/tsconfig.json) | config signal |
| docs | [README-ko_kr.md](../../../../sources/toss__es-git/README-ko_kr.md) | docs signal |
| docs | [README.md](../../../../sources/toss__es-git/README.md) | docs signal |
| docs | [docs/.gitignore](../../../../sources/toss__es-git/docs/.gitignore) | docs signal |
| docs | [docs/getting-started.md](../../../../sources/toss__es-git/docs/getting-started.md) | docs signal |
| eval | [tests/annotated-commit.spec.ts](../../../../sources/toss__es-git/tests/annotated-commit.spec.ts) | eval signal |
| eval | [tests/apply.spec.ts](../../../../sources/toss__es-git/tests/apply.spec.ts) | eval signal |
| eval | [tests/attr.spec.ts](../../../../sources/toss__es-git/tests/attr.spec.ts) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.rs](../../../../sources/toss__es-git/src/index.rs) |
| agentRuntime | 40 | [tests/fixtures/tag/_git/hooks/applypatch-msg.sample](../../../../sources/toss__es-git/tests/fixtures/tag/_git/hooks/applypatch-msg.sample)<br>[tests/fixtures/tag/_git/hooks/commit-msg.sample](../../../../sources/toss__es-git/tests/fixtures/tag/_git/hooks/commit-msg.sample)<br>[tests/fixtures/tag/_git/hooks/fsmonitor-watchman.sample](../../../../sources/toss__es-git/tests/fixtures/tag/_git/hooks/fsmonitor-watchman.sample)<br>[tests/fixtures/tag/_git/hooks/post-update.sample](../../../../sources/toss__es-git/tests/fixtures/tag/_git/hooks/post-update.sample)<br>[tests/fixtures/tag/_git/hooks/pre-applypatch.sample](../../../../sources/toss__es-git/tests/fixtures/tag/_git/hooks/pre-applypatch.sample)<br>[tests/fixtures/tag/_git/hooks/pre-commit.sample](../../../../sources/toss__es-git/tests/fixtures/tag/_git/hooks/pre-commit.sample)<br>[tests/fixtures/tag/_git/hooks/pre-merge-commit.sample](../../../../sources/toss__es-git/tests/fixtures/tag/_git/hooks/pre-merge-commit.sample)<br>[tests/fixtures/tag/_git/hooks/pre-push.sample](../../../../sources/toss__es-git/tests/fixtures/tag/_git/hooks/pre-push.sample) |
| mcp | 0 | not obvious |
| retrieval | 46 | [index.d.ts](../../../../sources/toss__es-git/index.d.ts)<br>[index.js](../../../../sources/toss__es-git/index.js)<br>[tests/index.spec.ts](../../../../sources/toss__es-git/tests/index.spec.ts)<br>[src/index.rs](../../../../sources/toss__es-git/src/index.rs)<br>[docs/index.md](../../../../sources/toss__es-git/docs/index.md)<br>[docs/reference/Stash/Methods/index.md](../../../../sources/toss__es-git/docs/reference/Stash/Methods/index.md)<br>[docs/reference/Repository/Methods/index.md](../../../../sources/toss__es-git/docs/reference/Repository/Methods/index.md)<br>[docs/reference/Index/Methods/addAll.md](../../../../sources/toss__es-git/docs/reference/Index/Methods/addAll.md) |
| spec | 34 | [tests/annotated-commit.spec.ts](../../../../sources/toss__es-git/tests/annotated-commit.spec.ts)<br>[tests/apply.spec.ts](../../../../sources/toss__es-git/tests/apply.spec.ts)<br>[tests/attr.spec.ts](../../../../sources/toss__es-git/tests/attr.spec.ts)<br>[tests/blame.spec.ts](../../../../sources/toss__es-git/tests/blame.spec.ts)<br>[tests/blob.spec.ts](../../../../sources/toss__es-git/tests/blob.spec.ts)<br>[tests/branch.spec.ts](../../../../sources/toss__es-git/tests/branch.spec.ts)<br>[tests/checkout.spec.ts](../../../../sources/toss__es-git/tests/checkout.spec.ts)<br>[tests/cherrypick.spec.ts](../../../../sources/toss__es-git/tests/cherrypick.spec.ts) |
| eval | 228 | [tests/annotated-commit.spec.ts](../../../../sources/toss__es-git/tests/annotated-commit.spec.ts)<br>[tests/apply.spec.ts](../../../../sources/toss__es-git/tests/apply.spec.ts)<br>[tests/attr.spec.ts](../../../../sources/toss__es-git/tests/attr.spec.ts)<br>[tests/blame.spec.ts](../../../../sources/toss__es-git/tests/blame.spec.ts)<br>[tests/blob.spec.ts](../../../../sources/toss__es-git/tests/blob.spec.ts)<br>[tests/branch.spec.ts](../../../../sources/toss__es-git/tests/branch.spec.ts)<br>[tests/checkout.spec.ts](../../../../sources/toss__es-git/tests/checkout.spec.ts)<br>[tests/cherrypick.spec.ts](../../../../sources/toss__es-git/tests/cherrypick.spec.ts) |
| security | 0 | not obvious |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/toss__es-git/.github/workflows/ci.yml)<br>[.github/workflows/docs.yaml](../../../../sources/toss__es-git/.github/workflows/docs.yaml)<br>[.github/workflows/release.yml](../../../../sources/toss__es-git/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 769 | [README-ko_kr.md](../../../../sources/toss__es-git/README-ko_kr.md)<br>[README.md](../../../../sources/toss__es-git/README.md)<br>[docs/.gitignore](../../../../sources/toss__es-git/docs/.gitignore)<br>[docs/getting-started.md](../../../../sources/toss__es-git/docs/getting-started.md)<br>[docs/index.md](../../../../sources/toss__es-git/docs/index.md)<br>[docs/package.json](../../../../sources/toss__es-git/docs/package.json)<br>[docs/performance.md](../../../../sources/toss__es-git/docs/performance.md)<br>[docs/README.md](../../../../sources/toss__es-git/docs/README.md) |
| config | 9 | [Cargo.lock](../../../../sources/toss__es-git/Cargo.lock)<br>[Cargo.toml](../../../../sources/toss__es-git/Cargo.toml)<br>[package.json](../../../../sources/toss__es-git/package.json)<br>[tsconfig.json](../../../../sources/toss__es-git/tsconfig.json)<br>[docs/package.json](../../../../sources/toss__es-git/docs/package.json)<br>[docs/tsconfig.json](../../../../sources/toss__es-git/docs/tsconfig.json)<br>[benchmarks/package.json](../../../../sources/toss__es-git/benchmarks/package.json)<br>[benchmarks/tsconfig.json](../../../../sources/toss__es-git/benchmarks/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 228 | [tests/annotated-commit.spec.ts](../../../../sources/toss__es-git/tests/annotated-commit.spec.ts)<br>[tests/apply.spec.ts](../../../../sources/toss__es-git/tests/apply.spec.ts)<br>[tests/attr.spec.ts](../../../../sources/toss__es-git/tests/attr.spec.ts)<br>[tests/blame.spec.ts](../../../../sources/toss__es-git/tests/blame.spec.ts)<br>[tests/blob.spec.ts](../../../../sources/toss__es-git/tests/blob.spec.ts)<br>[tests/branch.spec.ts](../../../../sources/toss__es-git/tests/branch.spec.ts) |
| CI workflows | 3 | [.github/workflows/ci.yml](../../../../sources/toss__es-git/.github/workflows/ci.yml)<br>[.github/workflows/docs.yaml](../../../../sources/toss__es-git/.github/workflows/docs.yaml)<br>[.github/workflows/release.yml](../../../../sources/toss__es-git/.github/workflows/release.yml) |
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

1. Start from key references: `src/index.rs`, `Cargo.lock`, `Cargo.toml`.
2. Trace execution through entrypoints: `src/index.rs`.
3. Map agent/tool runtime through: `tests/fixtures/tag/_git/hooks/applypatch-msg.sample`, `tests/fixtures/tag/_git/hooks/commit-msg.sample`, `tests/fixtures/tag/_git/hooks/fsmonitor-watchman.sample`.
4. Inspect retrieval/memory/indexing through: `index.d.ts`, `index.js`, `tests/index.spec.ts`.
5. Verify behavior through test/eval files: `tests/annotated-commit.spec.ts`, `tests/apply.spec.ts`, `tests/attr.spec.ts`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 A modern Git library built for Node.js with blazing fast installation and rock solid stability, powered by N API.. 핵심 구조 신호는 Rust, package.json, Cargo.toml, README.md, LICENSE, tests이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
