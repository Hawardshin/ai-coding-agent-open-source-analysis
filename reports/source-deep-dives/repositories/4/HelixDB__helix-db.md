# HelixDB/helix-db Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

HelixDB is an OLTP graph-vector database built in Rust.

## 요약

- 조사 단위: `sources/HelixDB__helix-db` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 121 files, 35 directories, depth score 98, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=sdks/typescript/src/index.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | HelixDB/helix-db |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Rust |
| Stars | 5370 |
| Forks | 298 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/HelixDB__helix-db](../../../../sources/HelixDB__helix-db) |
| Existing report | [reports/global-trending/repositories/HelixDB__helix-db.md](../../../global-trending/repositories/HelixDB__helix-db.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 121 / 35 |
| Max observed depth | 5 |
| Top directories | .github, assets, helix-cli, metrics, sdks |
| Top extensions | .rs: 49, .md: 11, .ts: 10, .yml: 9, .toml: 7, .py: 6, .json: 5, .lock: 5, (none): 5, .go: 4, .sh: 4, .png: 2 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| helix-cli | top-level component | 1 |
| metrics | top-level component | 1 |
| sdks | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


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
| retrieval | [sdks/typescript/src/index.ts](../../../../sources/HelixDB__helix-db/sdks/typescript/src/index.ts) | retrieval signal |
| entrypoints | [sdks/rust/example/src/main.rs](../../../../sources/HelixDB__helix-db/sdks/rust/example/src/main.rs) | entrypoints signal |
| entrypoints | [sdks/go/cmd/generate-parity-fixtures/main.go](../../../../sources/HelixDB__helix-db/sdks/go/cmd/generate-parity-fixtures/main.go) | entrypoints signal |
| entrypoints | [helix-cli/src/main.rs](../../../../sources/HelixDB__helix-db/helix-cli/src/main.rs) | entrypoints signal |
| docs | [README.md](../../../../sources/HelixDB__helix-db/README.md) | docs signal |
| docs | [sdks/typescript/README.md](../../../../sources/HelixDB__helix-db/sdks/typescript/README.md) | docs signal |
| docs | [sdks/tests/parity/README.md](../../../../sources/HelixDB__helix-db/sdks/tests/parity/README.md) | docs signal |
| docs | [sdks/rust/README.md](../../../../sources/HelixDB__helix-db/sdks/rust/README.md) | docs signal |
| eval | [sdks/typescript/test/basic.test.ts](../../../../sources/HelixDB__helix-db/sdks/typescript/test/basic.test.ts) | eval signal |
| eval | [sdks/typescript/test/client.test.ts](../../../../sources/HelixDB__helix-db/sdks/typescript/test/client.test.ts) | eval signal |
| eval | [sdks/typescript/test/types.test-d.ts](../../../../sources/HelixDB__helix-db/sdks/typescript/test/types.test-d.ts) | eval signal |
| eval | [sdks/typescript/scripts/nested-dsl.test.ts](../../../../sources/HelixDB__helix-db/sdks/typescript/scripts/nested-dsl.test.ts) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [sdks/typescript/src/index.ts](../../../../sources/HelixDB__helix-db/sdks/typescript/src/index.ts)<br>[sdks/rust/example/src/main.rs](../../../../sources/HelixDB__helix-db/sdks/rust/example/src/main.rs)<br>[sdks/go/cmd/generate-parity-fixtures/main.go](../../../../sources/HelixDB__helix-db/sdks/go/cmd/generate-parity-fixtures/main.go)<br>[helix-cli/src/main.rs](../../../../sources/HelixDB__helix-db/helix-cli/src/main.rs) |
| agentRuntime | 1 | [helix-cli/src/commands/skills.rs](../../../../sources/HelixDB__helix-db/helix-cli/src/commands/skills.rs) |
| mcp | 0 | not obvious |
| retrieval | 1 | [sdks/typescript/src/index.ts](../../../../sources/HelixDB__helix-db/sdks/typescript/src/index.ts) |
| spec | 0 | not obvious |
| eval | 14 | [sdks/typescript/test/basic.test.ts](../../../../sources/HelixDB__helix-db/sdks/typescript/test/basic.test.ts)<br>[sdks/typescript/test/client.test.ts](../../../../sources/HelixDB__helix-db/sdks/typescript/test/client.test.ts)<br>[sdks/typescript/test/types.test-d.ts](../../../../sources/HelixDB__helix-db/sdks/typescript/test/types.test-d.ts)<br>[sdks/typescript/scripts/nested-dsl.test.ts](../../../../sources/HelixDB__helix-db/sdks/typescript/scripts/nested-dsl.test.ts)<br>[sdks/tests/register_metadata_tests.rs](../../../../sources/HelixDB__helix-db/sdks/tests/register_metadata_tests.rs)<br>[sdks/tests/parity/README.md](../../../../sources/HelixDB__helix-db/sdks/tests/parity/README.md)<br>[sdks/python/tests/test_client.py](../../../../sources/HelixDB__helix-db/sdks/python/tests/test_client.py)<br>[sdks/python/tests/test_dsl.py](../../../../sources/HelixDB__helix-db/sdks/python/tests/test_dsl.py) |
| security | 1 | [helix-cli/src/commands/auth.rs](../../../../sources/HelixDB__helix-db/helix-cli/src/commands/auth.rs) |
| ci | 5 | [.github/workflows/cli_tests.yml](../../../../sources/HelixDB__helix-db/.github/workflows/cli_tests.yml)<br>[.github/workflows/cli.yml](../../../../sources/HelixDB__helix-db/.github/workflows/cli.yml)<br>[.github/workflows/macos-x64-quickfix.yml](../../../../sources/HelixDB__helix-db/.github/workflows/macos-x64-quickfix.yml)<br>[.github/workflows/parity_tests.yml](../../../../sources/HelixDB__helix-db/.github/workflows/parity_tests.yml)<br>[.github/workflows/s3_push.yml](../../../../sources/HelixDB__helix-db/.github/workflows/s3_push.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 9 | [README.md](../../../../sources/HelixDB__helix-db/README.md)<br>[sdks/typescript/README.md](../../../../sources/HelixDB__helix-db/sdks/typescript/README.md)<br>[sdks/tests/parity/README.md](../../../../sources/HelixDB__helix-db/sdks/tests/parity/README.md)<br>[sdks/rust/README.md](../../../../sources/HelixDB__helix-db/sdks/rust/README.md)<br>[sdks/rust/helix-dsl-macros/README.md](../../../../sources/HelixDB__helix-db/sdks/rust/helix-dsl-macros/README.md)<br>[sdks/python/README.md](../../../../sources/HelixDB__helix-db/sdks/python/README.md)<br>[sdks/go/README.md](../../../../sources/HelixDB__helix-db/sdks/go/README.md)<br>[helix-cli/README.md](../../../../sources/HelixDB__helix-db/helix-cli/README.md) |
| config | 15 | [Cargo.lock](../../../../sources/HelixDB__helix-db/Cargo.lock)<br>[Cargo.toml](../../../../sources/HelixDB__helix-db/Cargo.toml)<br>[sdks/typescript/package.json](../../../../sources/HelixDB__helix-db/sdks/typescript/package.json)<br>[sdks/typescript/tsconfig.json](../../../../sources/HelixDB__helix-db/sdks/typescript/tsconfig.json)<br>[sdks/rust/Cargo.lock](../../../../sources/HelixDB__helix-db/sdks/rust/Cargo.lock)<br>[sdks/rust/Cargo.toml](../../../../sources/HelixDB__helix-db/sdks/rust/Cargo.toml)<br>[sdks/rust/helix-dsl-macros/Cargo.lock](../../../../sources/HelixDB__helix-db/sdks/rust/helix-dsl-macros/Cargo.lock)<br>[sdks/rust/helix-dsl-macros/Cargo.toml](../../../../sources/HelixDB__helix-db/sdks/rust/helix-dsl-macros/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 14 | [sdks/typescript/test/basic.test.ts](../../../../sources/HelixDB__helix-db/sdks/typescript/test/basic.test.ts)<br>[sdks/typescript/test/client.test.ts](../../../../sources/HelixDB__helix-db/sdks/typescript/test/client.test.ts)<br>[sdks/typescript/test/types.test-d.ts](../../../../sources/HelixDB__helix-db/sdks/typescript/test/types.test-d.ts)<br>[sdks/typescript/scripts/nested-dsl.test.ts](../../../../sources/HelixDB__helix-db/sdks/typescript/scripts/nested-dsl.test.ts)<br>[sdks/tests/register_metadata_tests.rs](../../../../sources/HelixDB__helix-db/sdks/tests/register_metadata_tests.rs)<br>[sdks/tests/parity/README.md](../../../../sources/HelixDB__helix-db/sdks/tests/parity/README.md) |
| CI workflows | 5 | [.github/workflows/cli_tests.yml](../../../../sources/HelixDB__helix-db/.github/workflows/cli_tests.yml)<br>[.github/workflows/cli.yml](../../../../sources/HelixDB__helix-db/.github/workflows/cli.yml)<br>[.github/workflows/macos-x64-quickfix.yml](../../../../sources/HelixDB__helix-db/.github/workflows/macos-x64-quickfix.yml)<br>[.github/workflows/parity_tests.yml](../../../../sources/HelixDB__helix-db/.github/workflows/parity_tests.yml)<br>[.github/workflows/s3_push.yml](../../../../sources/HelixDB__helix-db/.github/workflows/s3_push.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [helix-cli/src/commands/auth.rs](../../../../sources/HelixDB__helix-db/helix-cli/src/commands/auth.rs) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `sdks/typescript/src/index.ts`, `sdks/rust/example/src/main.rs`, `sdks/go/cmd/generate-parity-fixtures/main.go`.
2. Trace execution through entrypoints: `sdks/typescript/src/index.ts`, `sdks/rust/example/src/main.rs`, `sdks/go/cmd/generate-parity-fixtures/main.go`.
3. Map agent/tool runtime through: `helix-cli/src/commands/skills.rs`.
4. Inspect retrieval/memory/indexing through: `sdks/typescript/src/index.ts`.
5. Verify behavior through test/eval files: `sdks/typescript/test/basic.test.ts`, `sdks/typescript/test/client.test.ts`, `sdks/typescript/test/types.test-d.ts`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 HelixDB is an OLTP graph vector database built in Rust.. 핵심 구조 신호는 Rust, Cargo.toml, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
