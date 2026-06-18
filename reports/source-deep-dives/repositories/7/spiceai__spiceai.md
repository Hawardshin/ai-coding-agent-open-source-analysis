# spiceai/spiceai 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

A portable accelerated SQL query, search, and LLM-inference engine, written in Rust, for data-grounded AI apps and agents.

## 요약

- 조사 단위: `sources/spiceai__spiceai` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 15,000 files, 324 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=tools/testoperator/src/main.rs, tools/spidapter/src/main.rs, tools/spiceschema/src/main.rs이고, 의존성 단서는 openai, mcp, click, transformers, opentelemetry, prometheus, 검증/운영 단서는 test/eval 경로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | spiceai/spiceai |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | Rust |
| Stars | 2960 |
| Forks | 200 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/spiceai__spiceai](../../../../sources/spiceai__spiceai) |
| 기존 보고서 | [reports/global-trending/repositories/spiceai__spiceai.md](../../../global-trending/repositories/spiceai__spiceai.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 15000 / 324 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .cargo, .ci, .config, .github, .schema, bin, crates, deploy, docs, examples, install, media, monitoring, scripts, test, tools |
| 상위 확장자 | .snap: 13878, .yaml: 545, .md: 209, .rs: 169, .sql: 60, .toml: 27, .sh: 21, (none): 21, .bash: 10, .ctl: 8, .json: 7, .exp: 6 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | transformers |
| webRuntime | 없음 |
| developerSurface | click |
| observability | opentelemetry, prometheus |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 21 | [tools/testoperator/src/main.rs](../../../../sources/spiceai__spiceai/tools/testoperator/src/main.rs)<br>[tools/spidapter/src/main.rs](../../../../sources/spiceai__spiceai/tools/spidapter/src/main.rs)<br>[tools/spiceschema/src/main.rs](../../../../sources/spiceai__spiceai/tools/spiceschema/src/main.rs)<br>[tools/spicepodschema/src/main.rs](../../../../sources/spiceai__spiceai/tools/spicepodschema/src/main.rs)<br>[tools/spicepod-validator/src/main.rs](../../../../sources/spiceai__spiceai/tools/spicepod-validator/src/main.rs)<br>[tools/pr-builds/src/main.rs](../../../../sources/spiceai__spiceai/tools/pr-builds/src/main.rs)<br>[tools/parsley/src/main.rs](../../../../sources/spiceai__spiceai/tools/parsley/src/main.rs)<br>[tools/otelpublisher/src/main.rs](../../../../sources/spiceai__spiceai/tools/otelpublisher/src/main.rs) |
| agentRuntime | 335 | [tools/testoperator/Cargo.toml](../../../../sources/spiceai__spiceai/tools/testoperator/Cargo.toml)<br>[tools/testoperator/Dockerfile](../../../../sources/spiceai__spiceai/tools/testoperator/Dockerfile)<br>[tools/testoperator/README.md](../../../../sources/spiceai__spiceai/tools/testoperator/README.md)<br>[tools/testoperator/SPICED_METRICS.md](../../../../sources/spiceai__spiceai/tools/testoperator/SPICED_METRICS.md)<br>[tools/testoperator/src/health.rs](../../../../sources/spiceai__spiceai/tools/testoperator/src/health.rs)<br>[tools/testoperator/src/main.rs](../../../../sources/spiceai__spiceai/tools/testoperator/src/main.rs)<br>[tools/testoperator/src/metrics.rs](../../../../sources/spiceai__spiceai/tools/testoperator/src/metrics.rs)<br>[tools/testoperator/src/spiced_metrics.rs](../../../../sources/spiceai__spiceai/tools/testoperator/src/spiced_metrics.rs) |
| mcp | 1 | [crates/tools/src/mcp.rs](../../../../sources/spiceai__spiceai/crates/tools/src/mcp.rs) |
| retrieval | 754 | `tools/testoperator/dispatch/scenario/sf1/accelerated/indexes/file[parquet]-arrow-compound_hash_index.yaml`<br>`tools/testoperator/dispatch/scenario/sf1/accelerated/indexes/file[parquet]-arrow-pk_hash_index.yaml`<br>`tools/testoperator/dispatch/scenario/sf1/accelerated/indexes/file[parquet]-arrow-secondary_hash_index.yaml`<br>`tools/testoperator/dispatch/chbench/sf100/postgres-cayenne[file]-cdc-memory.yaml`<br>`tools/testoperator/dispatch/chbench/sf10/postgres-cayenne[file]-cdc-memory.yaml`<br>`tools/testoperator/dispatch/chbench/sf1/postgres-cayenne[file]-cdc-memory.yaml`<br>[test/tpc-bench/tpcds_index.sql](../../../../sources/spiceai__spiceai/test/tpc-bench/tpcds_index.sql)<br>[test/tpc-bench/tpch_index.sql](../../../../sources/spiceai__spiceai/test/tpc-bench/tpch_index.sql) |
| spec | 2 | [test/adbc/python/requirements.txt](../../../../sources/spiceai__spiceai/test/adbc/python/requirements.txt)<br>[docs/ROADMAP.md](../../../../sources/spiceai__spiceai/docs/ROADMAP.md) |
| eval | 14380 | [tools/testoperator/src/commands/bench/mod.rs](../../../../sources/spiceai__spiceai/tools/testoperator/src/commands/bench/mod.rs)<br>`tools/testoperator/dispatch/text_to_sql/bird_bench/bird-bench-small[california_schools].yaml`<br>`tools/testoperator/dispatch/text_to_sql/bird_bench/bird-bench-small[card_games].yaml`<br>`tools/testoperator/dispatch/text_to_sql/bird_bench/bird-bench-small[codebase_community].yaml`<br>`tools/testoperator/dispatch/text_to_sql/bird_bench/bird-bench-small[debit_card_specializing].yaml`<br>`tools/testoperator/dispatch/text_to_sql/bird_bench/bird-bench-small[european_football_2].yaml`<br>`tools/testoperator/dispatch/text_to_sql/bird_bench/bird-bench-small[financial].yaml`<br>`tools/testoperator/dispatch/text_to_sql/bird_bench/bird-bench-small[formula_1].yaml` |
| security | 3 | [SECURITY.md](../../../../sources/spiceai__spiceai/SECURITY.md)<br>[crates/util/src/cancel_guard_body.rs](../../../../sources/spiceai__spiceai/crates/util/src/cancel_guard_body.rs)<br>[crates/util/src/security.rs](../../../../sources/spiceai__spiceai/crates/util/src/security.rs) |
| ci | 0 | 명확하지 않음 |
| container | 23 | [Dockerfile](../../../../sources/spiceai__spiceai/Dockerfile)<br>[Dockerfile-cuda](../../../../sources/spiceai__spiceai/Dockerfile-cuda)<br>[Dockerfile-cuda-release](../../../../sources/spiceai__spiceai/Dockerfile-cuda-release)<br>[Dockerfile-release](../../../../sources/spiceai__spiceai/Dockerfile-release)<br>[Dockerfile.local](../../../../sources/spiceai__spiceai/Dockerfile.local)<br>[tools/testoperator/Dockerfile](../../../../sources/spiceai__spiceai/tools/testoperator/Dockerfile)<br>[tools/spidapter/Dockerfile](../../../../sources/spiceai__spiceai/tools/spidapter/Dockerfile)<br>[test/tpc-bench/postgres-tpcds-bench/Dockerfile](../../../../sources/spiceai__spiceai/test/tpc-bench/postgres-tpcds-bench/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/spiceai__spiceai/CLAUDE.md) |
| docs | 206 | [README.md](../../../../sources/spiceai__spiceai/README.md)<br>[tools/testoperator/README.md](../../../../sources/spiceai__spiceai/tools/testoperator/README.md)<br>[tools/testoperator/dispatch/perf-cayenne-vs-duckdb/README.md](../../../../sources/spiceai__spiceai/tools/testoperator/dispatch/perf-cayenne-vs-duckdb/README.md)<br>[tools/spidapter/README.md](../../../../sources/spiceai__spiceai/tools/spidapter/README.md)<br>[tools/spicepodschema/README.md](../../../../sources/spiceai__spiceai/tools/spicepodschema/README.md)<br>[tools/cayenne-flightsql/README.md](../../../../sources/spiceai__spiceai/tools/cayenne-flightsql/README.md)<br>[test/tpc-bench/Readme.md](../../../../sources/spiceai__spiceai/test/tpc-bench/Readme.md)<br>[test/tpc-bench/oracle/Readme.md](../../../../sources/spiceai__spiceai/test/tpc-bench/oracle/Readme.md) |
| config | 28 | [Cargo.lock](../../../../sources/spiceai__spiceai/Cargo.lock)<br>[Cargo.toml](../../../../sources/spiceai__spiceai/Cargo.toml)<br>[Makefile](../../../../sources/spiceai__spiceai/Makefile)<br>[tools/testoperator/Cargo.toml](../../../../sources/spiceai__spiceai/tools/testoperator/Cargo.toml)<br>[tools/spidapter/Cargo.toml](../../../../sources/spiceai__spiceai/tools/spidapter/Cargo.toml)<br>[tools/spiceschema/Cargo.toml](../../../../sources/spiceai__spiceai/tools/spiceschema/Cargo.toml)<br>[tools/spicepodschema/Cargo.toml](../../../../sources/spiceai__spiceai/tools/spicepodschema/Cargo.toml)<br>[tools/spicepod-validator/Cargo.toml](../../../../sources/spiceai__spiceai/tools/spicepod-validator/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 14380 | [tools/testoperator/src/commands/bench/mod.rs](../../../../sources/spiceai__spiceai/tools/testoperator/src/commands/bench/mod.rs)<br>`tools/testoperator/dispatch/text_to_sql/bird_bench/bird-bench-small[california_schools].yaml`<br>`tools/testoperator/dispatch/text_to_sql/bird_bench/bird-bench-small[card_games].yaml`<br>`tools/testoperator/dispatch/text_to_sql/bird_bench/bird-bench-small[codebase_community].yaml`<br>`tools/testoperator/dispatch/text_to_sql/bird_bench/bird-bench-small[debit_card_specializing].yaml`<br>`tools/testoperator/dispatch/text_to_sql/bird_bench/bird-bench-small[european_football_2].yaml` |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 23 | [Dockerfile](../../../../sources/spiceai__spiceai/Dockerfile)<br>[Dockerfile-cuda](../../../../sources/spiceai__spiceai/Dockerfile-cuda)<br>[Dockerfile-cuda-release](../../../../sources/spiceai__spiceai/Dockerfile-cuda-release)<br>[Dockerfile-release](../../../../sources/spiceai__spiceai/Dockerfile-release)<br>[Dockerfile.local](../../../../sources/spiceai__spiceai/Dockerfile.local)<br>[tools/testoperator/Dockerfile](../../../../sources/spiceai__spiceai/tools/testoperator/Dockerfile) |
| 보안/정책 | 3 | [SECURITY.md](../../../../sources/spiceai__spiceai/SECURITY.md)<br>[crates/util/src/cancel_guard_body.rs](../../../../sources/spiceai__spiceai/crates/util/src/cancel_guard_body.rs)<br>[crates/util/src/security.rs](../../../../sources/spiceai__spiceai/crates/util/src/security.rs) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/spiceai__spiceai/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 큰 레포라 15000개 파일에서 스캔이 잘림 |
| operation | CI workflow 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tools/testoperator/src/main.rs`, `tools/spidapter/src/main.rs`, `tools/spiceschema/src/main.rs`.
2. entrypoint를 따라 실행 흐름 확인: `tools/testoperator/src/main.rs`, `tools/spidapter/src/main.rs`, `tools/spiceschema/src/main.rs`.
3. agent/tool runtime 매핑: `tools/testoperator/Cargo.toml`, `tools/testoperator/Dockerfile`, `tools/testoperator/README.md`.
4. retrieval/memory/indexing 확인: `tools/testoperator/dispatch/scenario/sf1/accelerated/indexes/file[parquet]-arrow-compound_hash_index.yaml`, `tools/testoperator/dispatch/scenario/sf1/accelerated/indexes/file[parquet]-arrow-pk_hash_index.yaml`, `tools/testoperator/dispatch/scenario/sf1/accelerated/indexes/file[parquet]-arrow-secondary_hash_index.yaml`.
5. test/eval 파일로 동작 검증: `tools/testoperator/src/commands/bench/mod.rs`, `tools/testoperator/dispatch/text_to_sql/bird_bench/bird-bench-small[california_schools].yaml`, `tools/testoperator/dispatch/text_to_sql/bird_bench/bird-bench-small[card_games].yaml`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 A portable accelerated SQL query, search, and LLM inference engine, written in Rust, for data grounded AI apps and agent. 핵심 구조 신호는 Rust, Cargo.toml, Dockerfile, Makefile, README.md, CLAUDE.md이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
