# spiceai/spiceai Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

A portable accelerated SQL query, search, and LLM-inference engine, written in Rust, for data-grounded AI apps and agents.

## 요약

- 조사 단위: `sources/spiceai__spiceai` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 15,000 files, 324 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=tools/testoperator/src/main.rs, tools/spidapter/src/main.rs, tools/spiceschema/src/main.rs이고, 의존성 단서는 openai, mcp, click, transformers, opentelemetry, prometheus, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | spiceai/spiceai |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | Rust |
| Stars | 2960 |
| Forks | 200 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/spiceai__spiceai](../../../../sources/spiceai__spiceai) |
| Existing report | [reports/global-trending/repositories/spiceai__spiceai.md](../../../global-trending/repositories/spiceai__spiceai.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 15000 / 324 |
| Max observed depth | 8 |
| Top directories | .cargo, .ci, .config, .github, .schema, bin, crates, deploy, docs, examples, install, media, monitoring, scripts, test, tools |
| Top extensions | .snap: 13878, .yaml: 545, .md: 209, .rs: 169, .sql: 60, .toml: 27, .sh: 21, (none): 21, .bash: 10, .ctl: 8, .json: 7, .exp: 6 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 28 |
| crates/test-framework | crates workspace | 8 |
| crates/util | crates workspace | 4 |
| crates/tools | crates workspace | 3 |
| crates/token_provider | crates workspace | 2 |
| crates/tpc_extension | crates workspace | 2 |
| crates/turso-shared | crates workspace | 2 |
| crates/vortex | crates workspace | 2 |
| crates/workers | crates workspace | 2 |
| crates/yaml | crates workspace | 2 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| crates | source boundary | 1 |
| deploy | deployment surface | 1 |
| examples | top-level component | 1 |
| examples/cosmosdb-connector | examples workspace | 1 |
| examples/flatten-json-properties | examples workspace | 1 |
| examples/git-connector | examples workspace | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | all | make all |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build-cli | make build-cli |
| utility | Makefile | .PHONY | make .PHONY |
| serve-dev | Makefile | build-cli-dev | make build-cli-dev |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build-spiced | make build-spiced |
| utility | Makefile | .PHONY | make .PHONY |
| serve-dev | Makefile | build-spiced-dev | make build-spiced-dev |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build-validator | make build-validator |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build | make build |
| utility | Makefile | .PHONY | make .PHONY |
| serve-dev | Makefile | build-dev | make build-dev |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | build-testoperator-dev | make build-testoperator-dev |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | build-testoperator | make build-testoperator |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | transformers |
| webRuntime | none |
| developerSurface | click |
| observability | opentelemetry, prometheus |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [tools/testoperator/src/main.rs](../../../../sources/spiceai__spiceai/tools/testoperator/src/main.rs) | entrypoints signal |
| entrypoints | [tools/spidapter/src/main.rs](../../../../sources/spiceai__spiceai/tools/spidapter/src/main.rs) | entrypoints signal |
| entrypoints | [tools/spiceschema/src/main.rs](../../../../sources/spiceai__spiceai/tools/spiceschema/src/main.rs) | entrypoints signal |
| entrypoints | [tools/spicepodschema/src/main.rs](../../../../sources/spiceai__spiceai/tools/spicepodschema/src/main.rs) | entrypoints signal |
| container | [Dockerfile](../../../../sources/spiceai__spiceai/Dockerfile) | container signal |
| container | [Dockerfile-cuda](../../../../sources/spiceai__spiceai/Dockerfile-cuda) | container signal |
| container | [Dockerfile-cuda-release](../../../../sources/spiceai__spiceai/Dockerfile-cuda-release) | container signal |
| container | [Dockerfile-release](../../../../sources/spiceai__spiceai/Dockerfile-release) | container signal |
| config | [Cargo.lock](../../../../sources/spiceai__spiceai/Cargo.lock) | config signal |
| config | [Cargo.toml](../../../../sources/spiceai__spiceai/Cargo.toml) | config signal |
| config | [Makefile](../../../../sources/spiceai__spiceai/Makefile) | config signal |
| config | [tools/testoperator/Cargo.toml](../../../../sources/spiceai__spiceai/tools/testoperator/Cargo.toml) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 21 | [tools/testoperator/src/main.rs](../../../../sources/spiceai__spiceai/tools/testoperator/src/main.rs)<br>[tools/spidapter/src/main.rs](../../../../sources/spiceai__spiceai/tools/spidapter/src/main.rs)<br>[tools/spiceschema/src/main.rs](../../../../sources/spiceai__spiceai/tools/spiceschema/src/main.rs)<br>[tools/spicepodschema/src/main.rs](../../../../sources/spiceai__spiceai/tools/spicepodschema/src/main.rs)<br>[tools/spicepod-validator/src/main.rs](../../../../sources/spiceai__spiceai/tools/spicepod-validator/src/main.rs)<br>[tools/pr-builds/src/main.rs](../../../../sources/spiceai__spiceai/tools/pr-builds/src/main.rs)<br>[tools/parsley/src/main.rs](../../../../sources/spiceai__spiceai/tools/parsley/src/main.rs)<br>[tools/otelpublisher/src/main.rs](../../../../sources/spiceai__spiceai/tools/otelpublisher/src/main.rs) |
| agentRuntime | 335 | [tools/testoperator/Cargo.toml](../../../../sources/spiceai__spiceai/tools/testoperator/Cargo.toml)<br>[tools/testoperator/Dockerfile](../../../../sources/spiceai__spiceai/tools/testoperator/Dockerfile)<br>[tools/testoperator/README.md](../../../../sources/spiceai__spiceai/tools/testoperator/README.md)<br>[tools/testoperator/SPICED_METRICS.md](../../../../sources/spiceai__spiceai/tools/testoperator/SPICED_METRICS.md)<br>[tools/testoperator/src/health.rs](../../../../sources/spiceai__spiceai/tools/testoperator/src/health.rs)<br>[tools/testoperator/src/main.rs](../../../../sources/spiceai__spiceai/tools/testoperator/src/main.rs)<br>[tools/testoperator/src/metrics.rs](../../../../sources/spiceai__spiceai/tools/testoperator/src/metrics.rs)<br>[tools/testoperator/src/spiced_metrics.rs](../../../../sources/spiceai__spiceai/tools/testoperator/src/spiced_metrics.rs) |
| mcp | 1 | [crates/tools/src/mcp.rs](../../../../sources/spiceai__spiceai/crates/tools/src/mcp.rs) |
| retrieval | 754 | `tools/testoperator/dispatch/scenario/sf1/accelerated/indexes/file[parquet]-arrow-compound_hash_index.yaml`<br>`tools/testoperator/dispatch/scenario/sf1/accelerated/indexes/file[parquet]-arrow-pk_hash_index.yaml`<br>`tools/testoperator/dispatch/scenario/sf1/accelerated/indexes/file[parquet]-arrow-secondary_hash_index.yaml`<br>`tools/testoperator/dispatch/chbench/sf100/postgres-cayenne[file]-cdc-memory.yaml`<br>`tools/testoperator/dispatch/chbench/sf10/postgres-cayenne[file]-cdc-memory.yaml`<br>`tools/testoperator/dispatch/chbench/sf1/postgres-cayenne[file]-cdc-memory.yaml`<br>[test/tpc-bench/tpcds_index.sql](../../../../sources/spiceai__spiceai/test/tpc-bench/tpcds_index.sql)<br>[test/tpc-bench/tpch_index.sql](../../../../sources/spiceai__spiceai/test/tpc-bench/tpch_index.sql) |
| spec | 2 | [test/adbc/python/requirements.txt](../../../../sources/spiceai__spiceai/test/adbc/python/requirements.txt)<br>[docs/ROADMAP.md](../../../../sources/spiceai__spiceai/docs/ROADMAP.md) |
| eval | 14380 | [tools/testoperator/src/commands/bench/mod.rs](../../../../sources/spiceai__spiceai/tools/testoperator/src/commands/bench/mod.rs)<br>`tools/testoperator/dispatch/text_to_sql/bird_bench/bird-bench-small[california_schools].yaml`<br>`tools/testoperator/dispatch/text_to_sql/bird_bench/bird-bench-small[card_games].yaml`<br>`tools/testoperator/dispatch/text_to_sql/bird_bench/bird-bench-small[codebase_community].yaml`<br>`tools/testoperator/dispatch/text_to_sql/bird_bench/bird-bench-small[debit_card_specializing].yaml`<br>`tools/testoperator/dispatch/text_to_sql/bird_bench/bird-bench-small[european_football_2].yaml`<br>`tools/testoperator/dispatch/text_to_sql/bird_bench/bird-bench-small[financial].yaml`<br>`tools/testoperator/dispatch/text_to_sql/bird_bench/bird-bench-small[formula_1].yaml` |
| security | 3 | [SECURITY.md](../../../../sources/spiceai__spiceai/SECURITY.md)<br>[crates/util/src/cancel_guard_body.rs](../../../../sources/spiceai__spiceai/crates/util/src/cancel_guard_body.rs)<br>[crates/util/src/security.rs](../../../../sources/spiceai__spiceai/crates/util/src/security.rs) |
| ci | 0 | not obvious |
| container | 23 | [Dockerfile](../../../../sources/spiceai__spiceai/Dockerfile)<br>[Dockerfile-cuda](../../../../sources/spiceai__spiceai/Dockerfile-cuda)<br>[Dockerfile-cuda-release](../../../../sources/spiceai__spiceai/Dockerfile-cuda-release)<br>[Dockerfile-release](../../../../sources/spiceai__spiceai/Dockerfile-release)<br>[Dockerfile.local](../../../../sources/spiceai__spiceai/Dockerfile.local)<br>[tools/testoperator/Dockerfile](../../../../sources/spiceai__spiceai/tools/testoperator/Dockerfile)<br>[tools/spidapter/Dockerfile](../../../../sources/spiceai__spiceai/tools/spidapter/Dockerfile)<br>[test/tpc-bench/postgres-tpcds-bench/Dockerfile](../../../../sources/spiceai__spiceai/test/tpc-bench/postgres-tpcds-bench/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/spiceai__spiceai/CLAUDE.md) |
| docs | 206 | [README.md](../../../../sources/spiceai__spiceai/README.md)<br>[tools/testoperator/README.md](../../../../sources/spiceai__spiceai/tools/testoperator/README.md)<br>[tools/testoperator/dispatch/perf-cayenne-vs-duckdb/README.md](../../../../sources/spiceai__spiceai/tools/testoperator/dispatch/perf-cayenne-vs-duckdb/README.md)<br>[tools/spidapter/README.md](../../../../sources/spiceai__spiceai/tools/spidapter/README.md)<br>[tools/spicepodschema/README.md](../../../../sources/spiceai__spiceai/tools/spicepodschema/README.md)<br>[tools/cayenne-flightsql/README.md](../../../../sources/spiceai__spiceai/tools/cayenne-flightsql/README.md)<br>[test/tpc-bench/Readme.md](../../../../sources/spiceai__spiceai/test/tpc-bench/Readme.md)<br>[test/tpc-bench/oracle/Readme.md](../../../../sources/spiceai__spiceai/test/tpc-bench/oracle/Readme.md) |
| config | 28 | [Cargo.lock](../../../../sources/spiceai__spiceai/Cargo.lock)<br>[Cargo.toml](../../../../sources/spiceai__spiceai/Cargo.toml)<br>[Makefile](../../../../sources/spiceai__spiceai/Makefile)<br>[tools/testoperator/Cargo.toml](../../../../sources/spiceai__spiceai/tools/testoperator/Cargo.toml)<br>[tools/spidapter/Cargo.toml](../../../../sources/spiceai__spiceai/tools/spidapter/Cargo.toml)<br>[tools/spiceschema/Cargo.toml](../../../../sources/spiceai__spiceai/tools/spiceschema/Cargo.toml)<br>[tools/spicepodschema/Cargo.toml](../../../../sources/spiceai__spiceai/tools/spicepodschema/Cargo.toml)<br>[tools/spicepod-validator/Cargo.toml](../../../../sources/spiceai__spiceai/tools/spicepod-validator/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 14380 | [tools/testoperator/src/commands/bench/mod.rs](../../../../sources/spiceai__spiceai/tools/testoperator/src/commands/bench/mod.rs)<br>`tools/testoperator/dispatch/text_to_sql/bird_bench/bird-bench-small[california_schools].yaml`<br>`tools/testoperator/dispatch/text_to_sql/bird_bench/bird-bench-small[card_games].yaml`<br>`tools/testoperator/dispatch/text_to_sql/bird_bench/bird-bench-small[codebase_community].yaml`<br>`tools/testoperator/dispatch/text_to_sql/bird_bench/bird-bench-small[debit_card_specializing].yaml`<br>`tools/testoperator/dispatch/text_to_sql/bird_bench/bird-bench-small[european_football_2].yaml` |
| CI workflows | 0 | not obvious |
| Containers / deploy | 23 | [Dockerfile](../../../../sources/spiceai__spiceai/Dockerfile)<br>[Dockerfile-cuda](../../../../sources/spiceai__spiceai/Dockerfile-cuda)<br>[Dockerfile-cuda-release](../../../../sources/spiceai__spiceai/Dockerfile-cuda-release)<br>[Dockerfile-release](../../../../sources/spiceai__spiceai/Dockerfile-release)<br>[Dockerfile.local](../../../../sources/spiceai__spiceai/Dockerfile.local)<br>[tools/testoperator/Dockerfile](../../../../sources/spiceai__spiceai/tools/testoperator/Dockerfile) |
| Security / policy | 3 | [SECURITY.md](../../../../sources/spiceai__spiceai/SECURITY.md)<br>[crates/util/src/cancel_guard_body.rs](../../../../sources/spiceai__spiceai/crates/util/src/cancel_guard_body.rs)<br>[crates/util/src/security.rs](../../../../sources/spiceai__spiceai/crates/util/src/security.rs) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/spiceai__spiceai/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | large repository scan truncated at 15000 files |
| operation | CI workflow path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tools/testoperator/src/main.rs`, `tools/spidapter/src/main.rs`, `tools/spiceschema/src/main.rs`.
2. Trace execution through entrypoints: `tools/testoperator/src/main.rs`, `tools/spidapter/src/main.rs`, `tools/spiceschema/src/main.rs`.
3. Map agent/tool runtime through: `tools/testoperator/Cargo.toml`, `tools/testoperator/Dockerfile`, `tools/testoperator/README.md`.
4. Inspect retrieval/memory/indexing through: `tools/testoperator/dispatch/scenario/sf1/accelerated/indexes/file[parquet]-arrow-compound_hash_index.yaml`, `tools/testoperator/dispatch/scenario/sf1/accelerated/indexes/file[parquet]-arrow-pk_hash_index.yaml`, `tools/testoperator/dispatch/scenario/sf1/accelerated/indexes/file[parquet]-arrow-secondary_hash_index.yaml`.
5. Verify behavior through test/eval files: `tools/testoperator/src/commands/bench/mod.rs`, `tools/testoperator/dispatch/text_to_sql/bird_bench/bird-bench-small[california_schools].yaml`, `tools/testoperator/dispatch/text_to_sql/bird_bench/bird-bench-small[card_games].yaml`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 A portable accelerated SQL query, search, and LLM inference engine, written in Rust, for data grounded AI apps and agent. 핵심 구조 신호는 Rust, Cargo.toml, Dockerfile, Makefile, README.md, CLAUDE.md이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
