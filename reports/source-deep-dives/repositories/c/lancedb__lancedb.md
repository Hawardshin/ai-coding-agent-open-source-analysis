# lancedb/lancedb Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 586 files, 114 directories.

## 요약

- 조사 단위: `sources/lancedb__lancedb` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 586 files, 114 directories, depth score 122, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, python/AGENTS.md, python/python/lancedb/context.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | lancedb/lancedb |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/lancedb__lancedb](../../../../sources/lancedb__lancedb) |
| Existing report | [reports/clone-structures/lancedb__lancedb.md](../../../clone-structures/lancedb__lancedb.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 586 / 114 |
| Max observed depth | 8 |
| Top directories | .agents, .cargo, .github, ci, dockerfiles, docs, java, nodejs, python, rust |
| Top extensions | .md: 160, .py: 118, .rs: 113, .ts: 44, .yml: 32, .json: 20, .png: 19, (none): 13, .toml: 11, .sh: 7, .txt: 7, .svg: 5 |
| Source patterns | monorepo/workspace, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 40 |
| .github | ci surface | 1 |
| ci | ci surface | 1 |
| dockerfiles | documentation surface | 1 |
| java | top-level component | 1 |
| nodejs | top-level component | 1 |
| python | top-level component | 1 |
| rust | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | licenses | make licenses |


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
| agentRuntime | [AGENTS.md](../../../../sources/lancedb__lancedb/AGENTS.md) | agentRuntime signal |
| agentRuntime | [python/AGENTS.md](../../../../sources/lancedb__lancedb/python/AGENTS.md) | agentRuntime signal |
| agentRuntime | [python/python/lancedb/context.py](../../../../sources/lancedb__lancedb/python/python/lancedb/context.py) | agentRuntime signal |
| agentRuntime | [nodejs/AGENTS.md](../../../../sources/lancedb__lancedb/nodejs/AGENTS.md) | agentRuntime signal |
| entrypoints | [rust/lancedb/src/index.rs](../../../../sources/lancedb__lancedb/rust/lancedb/src/index.rs) | entrypoints signal |
| entrypoints | [python/src/index.rs](../../../../sources/lancedb__lancedb/python/src/index.rs) | entrypoints signal |
| entrypoints | [nodejs/src/index.rs](../../../../sources/lancedb__lancedb/nodejs/src/index.rs) | entrypoints signal |
| entrypoints | [docs/src/index.md](../../../../sources/lancedb__lancedb/docs/src/index.md) | entrypoints signal |
| config | [Cargo.lock](../../../../sources/lancedb__lancedb/Cargo.lock) | config signal |
| config | [Cargo.toml](../../../../sources/lancedb__lancedb/Cargo.toml) | config signal |
| config | [Makefile](../../../../sources/lancedb__lancedb/Makefile) | config signal |
| config | [rust/lancedb/Cargo.toml](../../../../sources/lancedb__lancedb/rust/lancedb/Cargo.toml) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [rust/lancedb/src/index.rs](../../../../sources/lancedb__lancedb/rust/lancedb/src/index.rs)<br>[python/src/index.rs](../../../../sources/lancedb__lancedb/python/src/index.rs)<br>[nodejs/src/index.rs](../../../../sources/lancedb__lancedb/nodejs/src/index.rs)<br>[docs/src/index.md](../../../../sources/lancedb__lancedb/docs/src/index.md) |
| agentRuntime | 6 | [AGENTS.md](../../../../sources/lancedb__lancedb/AGENTS.md)<br>[python/AGENTS.md](../../../../sources/lancedb__lancedb/python/AGENTS.md)<br>[python/python/lancedb/context.py](../../../../sources/lancedb__lancedb/python/python/lancedb/context.py)<br>[nodejs/AGENTS.md](../../../../sources/lancedb__lancedb/nodejs/AGENTS.md)<br>[.agents/skills/README.md](../../../../sources/lancedb__lancedb/.agents/skills/README.md)<br>[.agents/skills/lancedb-update-lance-dependency/SKILL.md](../../../../sources/lancedb__lancedb/.agents/skills/lancedb-update-lance-dependency/SKILL.md) |
| mcp | 0 | not obvious |
| retrieval | 44 | [rust/lancedb/tests/embedding_registry_test.rs](../../../../sources/lancedb__lancedb/rust/lancedb/tests/embedding_registry_test.rs)<br>[rust/lancedb/src/index.rs](../../../../sources/lancedb__lancedb/rust/lancedb/src/index.rs)<br>[rust/lancedb/src/table/create_index.rs](../../../../sources/lancedb__lancedb/rust/lancedb/src/table/create_index.rs)<br>[rust/lancedb/src/index/scalar.rs](../../../../sources/lancedb__lancedb/rust/lancedb/src/index/scalar.rs)<br>[rust/lancedb/src/index/vector.rs](../../../../sources/lancedb__lancedb/rust/lancedb/src/index/vector.rs)<br>[rust/lancedb/src/index/waiter.rs](../../../../sources/lancedb__lancedb/rust/lancedb/src/index/waiter.rs)<br>[python/src/index.rs](../../../../sources/lancedb__lancedb/python/src/index.rs)<br>[python/python/tests/test_index.py](../../../../sources/lancedb__lancedb/python/python/tests/test_index.py) |
| spec | 3 | [python/python/tests/test_lsm_write_spec.py](../../../../sources/lancedb__lancedb/python/python/tests/test_lsm_write_spec.py)<br>[docs/requirements.txt](../../../../sources/lancedb__lancedb/docs/requirements.txt)<br>[ci/parse_requirements.py](../../../../sources/lancedb__lancedb/ci/parse_requirements.py) |
| eval | 86 | [rust/lancedb/tests/embedding_registry_test.rs](../../../../sources/lancedb__lancedb/rust/lancedb/tests/embedding_registry_test.rs)<br>[rust/lancedb/tests/embeddings_parallel_test.rs](../../../../sources/lancedb__lancedb/rust/lancedb/tests/embeddings_parallel_test.rs)<br>[rust/lancedb/tests/object_store_test.rs](../../../../sources/lancedb__lancedb/rust/lancedb/tests/object_store_test.rs)<br>[rust/lancedb/src/test_utils.rs](../../../../sources/lancedb__lancedb/rust/lancedb/src/test_utils.rs)<br>[rust/lancedb/src/test_utils/connection.rs](../../../../sources/lancedb__lancedb/rust/lancedb/src/test_utils/connection.rs)<br>[rust/lancedb/src/test_utils/datagen.rs](../../../../sources/lancedb__lancedb/rust/lancedb/src/test_utils/datagen.rs)<br>[rust/lancedb/src/test_utils/embeddings.rs](../../../../sources/lancedb__lancedb/rust/lancedb/src/test_utils/embeddings.rs)<br>[python/tests/test_expr.py](../../../../sources/lancedb__lancedb/python/tests/test_expr.py) |
| security | 0 | not obvious |
| ci | 35 | [ci/bump_version.sh](../../../../sources/lancedb__lancedb/ci/bump_version.sh)<br>[ci/check_breaking_changes.py](../../../../sources/lancedb__lancedb/ci/check_breaking_changes.py)<br>[ci/check_lance_release.py](../../../../sources/lancedb__lancedb/ci/check_lance_release.py)<br>[ci/create_lancedb_test_connection.sh](../../../../sources/lancedb__lancedb/ci/create_lancedb_test_connection.sh)<br>[ci/mock_openai.py](../../../../sources/lancedb__lancedb/ci/mock_openai.py)<br>[ci/parse_requirements.py](../../../../sources/lancedb__lancedb/ci/parse_requirements.py)<br>[ci/run_with_docker_compose.sh](../../../../sources/lancedb__lancedb/ci/run_with_docker_compose.sh)<br>[ci/run_with_test_connection.sh](../../../../sources/lancedb__lancedb/ci/run_with_test_connection.sh) |
| container | 2 | [docker-compose.yml](../../../../sources/lancedb__lancedb/docker-compose.yml)<br>[dockerfiles/Dockerfile](../../../../sources/lancedb__lancedb/dockerfiles/Dockerfile) |
| instruction | 3 | [AGENTS.md](../../../../sources/lancedb__lancedb/AGENTS.md)<br>[python/AGENTS.md](../../../../sources/lancedb__lancedb/python/AGENTS.md)<br>[nodejs/AGENTS.md](../../../../sources/lancedb__lancedb/nodejs/AGENTS.md) |
| docs | 202 | [README.md](../../../../sources/lancedb__lancedb/README.md)<br>[rust/lancedb/README.md](../../../../sources/lancedb__lancedb/rust/lancedb/README.md)<br>[python/README.md](../../../../sources/lancedb__lancedb/python/README.md)<br>[python/python/tests/docs/test_basic.py](../../../../sources/lancedb__lancedb/python/python/tests/docs/test_basic.py)<br>[python/python/tests/docs/test_binary_vector.py](../../../../sources/lancedb__lancedb/python/python/tests/docs/test_binary_vector.py)<br>[python/python/tests/docs/test_distance_range.py](../../../../sources/lancedb__lancedb/python/python/tests/docs/test_distance_range.py)<br>[python/python/tests/docs/test_embeddings_optional.py](../../../../sources/lancedb__lancedb/python/python/tests/docs/test_embeddings_optional.py)<br>[python/python/tests/docs/test_guide_index.py](../../../../sources/lancedb__lancedb/python/python/tests/docs/test_guide_index.py) |
| config | 28 | [Cargo.lock](../../../../sources/lancedb__lancedb/Cargo.lock)<br>[Cargo.toml](../../../../sources/lancedb__lancedb/Cargo.toml)<br>[Makefile](../../../../sources/lancedb__lancedb/Makefile)<br>[rust/lancedb/Cargo.toml](../../../../sources/lancedb__lancedb/rust/lancedb/Cargo.toml)<br>[rust/lancedb/Makefile](../../../../sources/lancedb__lancedb/rust/lancedb/Makefile)<br>[python/Cargo.toml](../../../../sources/lancedb__lancedb/python/Cargo.toml)<br>[python/Makefile](../../../../sources/lancedb__lancedb/python/Makefile)<br>[python/pyproject.toml](../../../../sources/lancedb__lancedb/python/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 86 | [rust/lancedb/tests/embedding_registry_test.rs](../../../../sources/lancedb__lancedb/rust/lancedb/tests/embedding_registry_test.rs)<br>[rust/lancedb/tests/embeddings_parallel_test.rs](../../../../sources/lancedb__lancedb/rust/lancedb/tests/embeddings_parallel_test.rs)<br>[rust/lancedb/tests/object_store_test.rs](../../../../sources/lancedb__lancedb/rust/lancedb/tests/object_store_test.rs)<br>[rust/lancedb/src/test_utils.rs](../../../../sources/lancedb__lancedb/rust/lancedb/src/test_utils.rs)<br>[rust/lancedb/src/test_utils/connection.rs](../../../../sources/lancedb__lancedb/rust/lancedb/src/test_utils/connection.rs)<br>[rust/lancedb/src/test_utils/datagen.rs](../../../../sources/lancedb__lancedb/rust/lancedb/src/test_utils/datagen.rs) |
| CI workflows | 35 | [ci/bump_version.sh](../../../../sources/lancedb__lancedb/ci/bump_version.sh)<br>[ci/check_breaking_changes.py](../../../../sources/lancedb__lancedb/ci/check_breaking_changes.py)<br>[ci/check_lance_release.py](../../../../sources/lancedb__lancedb/ci/check_lance_release.py)<br>[ci/create_lancedb_test_connection.sh](../../../../sources/lancedb__lancedb/ci/create_lancedb_test_connection.sh)<br>[ci/mock_openai.py](../../../../sources/lancedb__lancedb/ci/mock_openai.py)<br>[ci/parse_requirements.py](../../../../sources/lancedb__lancedb/ci/parse_requirements.py) |
| Containers / deploy | 2 | [docker-compose.yml](../../../../sources/lancedb__lancedb/docker-compose.yml)<br>[dockerfiles/Dockerfile](../../../../sources/lancedb__lancedb/dockerfiles/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 3 | [AGENTS.md](../../../../sources/lancedb__lancedb/AGENTS.md)<br>[python/AGENTS.md](../../../../sources/lancedb__lancedb/python/AGENTS.md)<br>[nodejs/AGENTS.md](../../../../sources/lancedb__lancedb/nodejs/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `AGENTS.md`, `python/AGENTS.md`, `python/python/lancedb/context.py`.
2. Trace execution through entrypoints: `rust/lancedb/src/index.rs`, `python/src/index.rs`, `nodejs/src/index.rs`.
3. Map agent/tool runtime through: `AGENTS.md`, `python/AGENTS.md`, `python/python/lancedb/context.py`.
4. Inspect retrieval/memory/indexing through: `rust/lancedb/tests/embedding_registry_test.rs`, `rust/lancedb/src/index.rs`, `rust/lancedb/src/table/create_index.rs`.
5. Verify behavior through test/eval files: `rust/lancedb/tests/embedding_registry_test.rs`, `rust/lancedb/tests/embeddings_parallel_test.rs`, `rust/lancedb/tests/object_store_test.rs`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 586 files, 114 directories.. 핵심 구조 신호는 Cargo.toml, docker-compose.yml, Makefile, README.md, AGENTS.md, tests이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
