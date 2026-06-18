# timescale/pgvectorscale Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 96 files, 25 directories.

## 요약

- 조사 단위: `sources/timescale__pgvectorscale` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 96 files, 25 directories, depth score 96, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

데이터/벡터 플랫폼 관점에서 cli-first, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=pgvectorscale/src/bin/pgrx_embed.rs, pgvectorscale/src/access_method/pg_vector.rs, pgvectorscale/src/access_method/graph/mod.rs이고, 의존성 단서는 pgvector, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | timescale/pgvectorscale |
| Topic | Data and Vector Platforms / 데이터/벡터 플랫폼 |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/timescale__pgvectorscale](../../../../sources/timescale__pgvectorscale) |
| Existing report | [reports/clone-structures/timescale__pgvectorscale.md](../../../clone-structures/timescale__pgvectorscale.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 96 / 25 |
| Max observed depth | 5 |
| Top directories | .cargo, .github, pgvectorscale, scripts, tests |
| Top extensions | .rs: 47, .sql: 11, .yml: 9, (none): 7, .md: 5, .py: 4, .toml: 4, .yaml: 4, .sh: 2, .txt: 2, .control: 1 |
| Source patterns | cli-first, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 8 |
| .github | ci surface | 1 |
| pgvectorscale | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | format | make format |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build | make build |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | install-pgrx | make install-pgrx |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | init-pgrx | make init-pgrx |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | install-debug | make install-debug |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | install-release | make install-release |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | package | make package |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | shellcheck | make shellcheck |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | shfmt | make shfmt |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | test-python-setup | make test-python-setup |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | pgvector |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [pgvectorscale/src/bin/pgrx_embed.rs](../../../../sources/timescale__pgvectorscale/pgvectorscale/src/bin/pgrx_embed.rs) | retrieval signal |
| retrieval | [pgvectorscale/src/access_method/pg_vector.rs](../../../../sources/timescale__pgvectorscale/pgvectorscale/src/access_method/pg_vector.rs) | retrieval signal |
| retrieval | [pgvectorscale/src/access_method/graph/mod.rs](../../../../sources/timescale__pgvectorscale/pgvectorscale/src/access_method/graph/mod.rs) | retrieval signal |
| retrieval | [pgvectorscale/src/access_method/graph/neighbor_store.rs](../../../../sources/timescale__pgvectorscale/pgvectorscale/src/access_method/graph/neighbor_store.rs) | retrieval signal |
| config | [Cargo.toml](../../../../sources/timescale__pgvectorscale/Cargo.toml) | config signal |
| config | [Makefile](../../../../sources/timescale__pgvectorscale/Makefile) | config signal |
| config | [tests/requirements.txt](../../../../sources/timescale__pgvectorscale/tests/requirements.txt) | config signal |
| config | [scripts/requirements.txt](../../../../sources/timescale__pgvectorscale/scripts/requirements.txt) | config signal |
| ci | [.github/workflows/code_checks.yml](../../../../sources/timescale__pgvectorscale/.github/workflows/code_checks.yml) | ci support |
| ci | [.github/workflows/deb-packager.yaml](../../../../sources/timescale__pgvectorscale/.github/workflows/deb-packager.yaml) | ci support |
| eval | [tests/__init__.py](../../../../sources/timescale__pgvectorscale/tests/__init__.py) | eval support |
| eval | [tests/conftest.py](../../../../sources/timescale__pgvectorscale/tests/conftest.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [pgvectorscale/src/bin/pgrx_embed.rs](../../../../sources/timescale__pgvectorscale/pgvectorscale/src/bin/pgrx_embed.rs) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 7 | [pgvectorscale/src/bin/pgrx_embed.rs](../../../../sources/timescale__pgvectorscale/pgvectorscale/src/bin/pgrx_embed.rs)<br>[pgvectorscale/src/access_method/pg_vector.rs](../../../../sources/timescale__pgvectorscale/pgvectorscale/src/access_method/pg_vector.rs)<br>[pgvectorscale/src/access_method/graph/mod.rs](../../../../sources/timescale__pgvectorscale/pgvectorscale/src/access_method/graph/mod.rs)<br>[pgvectorscale/src/access_method/graph/neighbor_store.rs](../../../../sources/timescale__pgvectorscale/pgvectorscale/src/access_method/graph/neighbor_store.rs)<br>[pgvectorscale/src/access_method/graph/neighbor_with_distance.rs](../../../../sources/timescale__pgvectorscale/pgvectorscale/src/access_method/graph/neighbor_with_distance.rs)<br>[pgvectorscale/src/access_method/graph/start_nodes.rs](../../../../sources/timescale__pgvectorscale/pgvectorscale/src/access_method/graph/start_nodes.rs)<br>[pgvectorscale/sql/timescale_vector--0.0.1--0.0.2.sql](../../../../sources/timescale__pgvectorscale/pgvectorscale/sql/timescale_vector--0.0.1--0.0.2.sql) |
| spec | 2 | [tests/requirements.txt](../../../../sources/timescale__pgvectorscale/tests/requirements.txt)<br>[scripts/requirements.txt](../../../../sources/timescale__pgvectorscale/scripts/requirements.txt) |
| eval | 12 | [tests/__init__.py](../../../../sources/timescale__pgvectorscale/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/timescale__pgvectorscale/tests/conftest.py)<br>[tests/requirements.txt](../../../../sources/timescale__pgvectorscale/tests/requirements.txt)<br>[tests/test_basic_operations.py](../../../../sources/timescale__pgvectorscale/tests/test_basic_operations.py)<br>[tests/test_concurrent_inserts.py](../../../../sources/timescale__pgvectorscale/tests/test_concurrent_inserts.py)<br>[scripts/run-python-tests.sh](../../../../sources/timescale__pgvectorscale/scripts/run-python-tests.sh)<br>[pgvectorscale/src/access_method/upgrade_test.rs](../../../../sources/timescale__pgvectorscale/pgvectorscale/src/access_method/upgrade_test.rs)<br>[pgvectorscale/src/access_method/sbq/tests.rs](../../../../sources/timescale__pgvectorscale/pgvectorscale/src/access_method/sbq/tests.rs) |
| security | 0 | not obvious |
| ci | 5 | [.github/workflows/code_checks.yml](../../../../sources/timescale__pgvectorscale/.github/workflows/code_checks.yml)<br>[.github/workflows/deb-packager.yaml](../../../../sources/timescale__pgvectorscale/.github/workflows/deb-packager.yaml)<br>[.github/workflows/pgrx_test.yaml](../../../../sources/timescale__pgvectorscale/.github/workflows/pgrx_test.yaml)<br>[.github/workflows/python_tests.yml](../../../../sources/timescale__pgvectorscale/.github/workflows/python_tests.yml)<br>[.github/workflows/shellcheck.yaml](../../../../sources/timescale__pgvectorscale/.github/workflows/shellcheck.yaml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/timescale__pgvectorscale/README.md) |
| config | 6 | [Cargo.toml](../../../../sources/timescale__pgvectorscale/Cargo.toml)<br>[Makefile](../../../../sources/timescale__pgvectorscale/Makefile)<br>[tests/requirements.txt](../../../../sources/timescale__pgvectorscale/tests/requirements.txt)<br>[scripts/requirements.txt](../../../../sources/timescale__pgvectorscale/scripts/requirements.txt)<br>[pgvectorscale/Cargo.toml](../../../../sources/timescale__pgvectorscale/pgvectorscale/Cargo.toml)<br>[pgvectorscale/pgvectorscale_derive/Cargo.toml](../../../../sources/timescale__pgvectorscale/pgvectorscale/pgvectorscale_derive/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 12 | [tests/__init__.py](../../../../sources/timescale__pgvectorscale/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/timescale__pgvectorscale/tests/conftest.py)<br>[tests/requirements.txt](../../../../sources/timescale__pgvectorscale/tests/requirements.txt)<br>[tests/test_basic_operations.py](../../../../sources/timescale__pgvectorscale/tests/test_basic_operations.py)<br>[tests/test_concurrent_inserts.py](../../../../sources/timescale__pgvectorscale/tests/test_concurrent_inserts.py)<br>[scripts/run-python-tests.sh](../../../../sources/timescale__pgvectorscale/scripts/run-python-tests.sh) |
| CI workflows | 5 | [.github/workflows/code_checks.yml](../../../../sources/timescale__pgvectorscale/.github/workflows/code_checks.yml)<br>[.github/workflows/deb-packager.yaml](../../../../sources/timescale__pgvectorscale/.github/workflows/deb-packager.yaml)<br>[.github/workflows/pgrx_test.yaml](../../../../sources/timescale__pgvectorscale/.github/workflows/pgrx_test.yaml)<br>[.github/workflows/python_tests.yml](../../../../sources/timescale__pgvectorscale/.github/workflows/python_tests.yml)<br>[.github/workflows/shellcheck.yaml](../../../../sources/timescale__pgvectorscale/.github/workflows/shellcheck.yaml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `pgvectorscale/src/bin/pgrx_embed.rs`, `pgvectorscale/src/access_method/pg_vector.rs`, `pgvectorscale/src/access_method/graph/mod.rs`.
2. Trace execution through entrypoints: `pgvectorscale/src/bin/pgrx_embed.rs`.
3. Inspect retrieval/memory/indexing through: `pgvectorscale/src/bin/pgrx_embed.rs`, `pgvectorscale/src/access_method/pg_vector.rs`, `pgvectorscale/src/access_method/graph/mod.rs`.
4. Verify behavior through test/eval files: `tests/__init__.py`, `tests/conftest.py`, `tests/requirements.txt`.

## Existing Repository Insight

데이터/벡터 플랫폼 관점에서 Local clone structure analysis 96 files, 25 directories.. 핵심 구조 신호는 Cargo.toml, Makefile, README.md, LICENSE, pgvector, tests이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 데이터/벡터 플랫폼 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing입니다.
