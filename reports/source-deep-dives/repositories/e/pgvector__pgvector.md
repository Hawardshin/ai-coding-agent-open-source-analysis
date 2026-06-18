# pgvector/pgvector Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 150 files, 11 directories.

## 요약

- 조사 단위: `sources/pgvector__pgvector` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 150 files, 11 directories, depth score 85, key references 9개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

데이터/벡터 플랫폼 관점에서 retrieval/vector path, eval/test harness, containerized deploy 구조로 읽힌다. 핵심 소스 근거는 retrieval=vector.control, test/t/003_ivfflat_vector_build_recall.pl, test/t/004_ivfflat_vector_insert_recall.pl이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | pgvector/pgvector |
| Topic | Data and Vector Platforms / 데이터/벡터 플랫폼 |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/pgvector__pgvector](../../../../sources/pgvector__pgvector) |
| Existing report | [reports/clone-structures/pgvector__pgvector.md](../../../clone-structures/pgvector__pgvector.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 150 / 11 |
| Max observed depth | 5 |
| Top directories | .github, sql, src, test |
| Top extensions | .sql: 51, .pl: 45, .c: 19, .out: 14, .h: 8, (none): 5, .md: 2, .pm: 2, .control: 1, .json: 1, .win: 1, .yml: 1 |
| Source patterns | retrieval/vector path, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 3 |
| .github | ci surface | 1 |
| sql | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | all | make all |
| quality | Makefile | prove_installcheck | make prove_installcheck |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | dist | make dist |
| utility | Makefile | .PHONY | make .PHONY |
| container | Makefile | docker | make docker |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | docker-release | make docker-release |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | docker-release-trixie | make docker-release-trixie |


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
| retrieval | [vector.control](../../../../sources/pgvector__pgvector/vector.control) | retrieval signal |
| retrieval | [test/t/003_ivfflat_vector_build_recall.pl](../../../../sources/pgvector__pgvector/test/t/003_ivfflat_vector_build_recall.pl) | retrieval signal |
| retrieval | [test/t/004_ivfflat_vector_insert_recall.pl](../../../../sources/pgvector__pgvector/test/t/004_ivfflat_vector_insert_recall.pl) | retrieval signal |
| retrieval | [test/t/012_hnsw_vector_build_recall.pl](../../../../sources/pgvector__pgvector/test/t/012_hnsw_vector_build_recall.pl) | retrieval signal |
| container | [Dockerfile](../../../../sources/pgvector__pgvector/Dockerfile) | container signal |
| config | [Makefile](../../../../sources/pgvector__pgvector/Makefile) | config signal |
| ci | [.github/workflows/build.yml](../../../../sources/pgvector__pgvector/.github/workflows/build.yml) | ci support |
| eval | [test/t/001_ivfflat_wal.pl](../../../../sources/pgvector__pgvector/test/t/001_ivfflat_wal.pl) | eval support |
| eval | [test/t/002_ivfflat_vacuum.pl](../../../../sources/pgvector__pgvector/test/t/002_ivfflat_vacuum.pl) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 53 | [vector.control](../../../../sources/pgvector__pgvector/vector.control)<br>[test/t/003_ivfflat_vector_build_recall.pl](../../../../sources/pgvector__pgvector/test/t/003_ivfflat_vector_build_recall.pl)<br>[test/t/004_ivfflat_vector_insert_recall.pl](../../../../sources/pgvector__pgvector/test/t/004_ivfflat_vector_insert_recall.pl)<br>[test/t/012_hnsw_vector_build_recall.pl](../../../../sources/pgvector__pgvector/test/t/012_hnsw_vector_build_recall.pl)<br>[test/t/013_hnsw_vector_insert_recall.pl](../../../../sources/pgvector__pgvector/test/t/013_hnsw_vector_insert_recall.pl)<br>[test/t/014_hnsw_vector_vacuum_recall.pl](../../../../sources/pgvector__pgvector/test/t/014_hnsw_vector_vacuum_recall.pl)<br>[test/t/015_hnsw_vector_duplicates.pl](../../../../sources/pgvector__pgvector/test/t/015_hnsw_vector_duplicates.pl)<br>[test/t/045_hnsw_low_memory_build.pl](../../../../sources/pgvector__pgvector/test/t/045_hnsw_low_memory_build.pl) |
| spec | 0 | not obvious |
| eval | 75 | [test/t/001_ivfflat_wal.pl](../../../../sources/pgvector__pgvector/test/t/001_ivfflat_wal.pl)<br>[test/t/002_ivfflat_vacuum.pl](../../../../sources/pgvector__pgvector/test/t/002_ivfflat_vacuum.pl)<br>[test/t/003_ivfflat_vector_build_recall.pl](../../../../sources/pgvector__pgvector/test/t/003_ivfflat_vector_build_recall.pl)<br>[test/t/004_ivfflat_vector_insert_recall.pl](../../../../sources/pgvector__pgvector/test/t/004_ivfflat_vector_insert_recall.pl)<br>[test/t/005_ivfflat_query_recall.pl](../../../../sources/pgvector__pgvector/test/t/005_ivfflat_query_recall.pl)<br>[test/t/006_ivfflat_lists.pl](../../../../sources/pgvector__pgvector/test/t/006_ivfflat_lists.pl)<br>[test/t/007_ivfflat_inserts.pl](../../../../sources/pgvector__pgvector/test/t/007_ivfflat_inserts.pl)<br>[test/t/008_ivfflat_centers.pl](../../../../sources/pgvector__pgvector/test/t/008_ivfflat_centers.pl) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/build.yml](../../../../sources/pgvector__pgvector/.github/workflows/build.yml) |
| container | 1 | [Dockerfile](../../../../sources/pgvector__pgvector/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/pgvector__pgvector/README.md) |
| config | 1 | [Makefile](../../../../sources/pgvector__pgvector/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 75 | [test/t/001_ivfflat_wal.pl](../../../../sources/pgvector__pgvector/test/t/001_ivfflat_wal.pl)<br>[test/t/002_ivfflat_vacuum.pl](../../../../sources/pgvector__pgvector/test/t/002_ivfflat_vacuum.pl)<br>[test/t/003_ivfflat_vector_build_recall.pl](../../../../sources/pgvector__pgvector/test/t/003_ivfflat_vector_build_recall.pl)<br>[test/t/004_ivfflat_vector_insert_recall.pl](../../../../sources/pgvector__pgvector/test/t/004_ivfflat_vector_insert_recall.pl)<br>[test/t/005_ivfflat_query_recall.pl](../../../../sources/pgvector__pgvector/test/t/005_ivfflat_query_recall.pl)<br>[test/t/006_ivfflat_lists.pl](../../../../sources/pgvector__pgvector/test/t/006_ivfflat_lists.pl) |
| CI workflows | 1 | [.github/workflows/build.yml](../../../../sources/pgvector__pgvector/.github/workflows/build.yml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/pgvector__pgvector/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `vector.control`, `test/t/003_ivfflat_vector_build_recall.pl`, `test/t/004_ivfflat_vector_insert_recall.pl`.
2. Inspect retrieval/memory/indexing through: `vector.control`, `test/t/003_ivfflat_vector_build_recall.pl`, `test/t/004_ivfflat_vector_insert_recall.pl`.
3. Verify behavior through test/eval files: `test/t/001_ivfflat_wal.pl`, `test/t/002_ivfflat_vacuum.pl`, `test/t/003_ivfflat_vector_build_recall.pl`.

## Existing Repository Insight

데이터/벡터 플랫폼 관점에서 Local clone structure analysis 150 files, 11 directories.. 핵심 구조 신호는 Dockerfile, Makefile, README.md, LICENSE, tests, ci이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 데이터/벡터 플랫폼 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing입니다.
