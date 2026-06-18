# pingcap/tidb Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

TiDB is built for agentic workloads that grow unpredictably, with ACID guarantees and native support for transactions, analytics, and vector search. No data silos. No noisy neighbors. No infrastructure ceiling.

## 요약

- 조사 단위: `sources/pingcap__tidb` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 7,373 files, 1,366 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/realtikvtest/pushdowntest/index_lookup_pushdown_test.go, tests/realtikvtest/addindextest4/partial_index_test.go, tests/realtikvtest/addindextest3/ingest_test.go이고, 의존성 단서는 openai, cobra, opentelemetry, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | pingcap/tidb |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Go |
| Stars | 40171 |
| Forks | 6195 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/pingcap__tidb](../../../../sources/pingcap__tidb) |
| Existing report | [reports/global-trending/repositories/pingcap__tidb.md](../../../global-trending/repositories/pingcap__tidb.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 7373 / 1366 |
| Max observed depth | 8 |
| Top directories | .agents, .claude, .github, br, cmd, docs, dumpling, hooks, LICENSES, lightning, pkg, tests, tools |
| Top extensions | .go: 4163, .bazel: 786, .sql: 521, .sh: 275, .result: 265, .test: 261, .md: 246, .toml: 206, .json: 187, (none): 141, .png: 94, .csv: 84 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 99 |
| docs | documentation surface | 54 |
| .github | ci surface | 1 |
| br | top-level component | 1 |
| cmd | source boundary | 1 |
| cmd/benchdb | cmd workspace | 1 |
| cmd/benchkv | cmd workspace | 1 |
| cmd/benchraw | cmd workspace | 1 |
| cmd/importer | cmd workspace | 1 |
| cmd/tidb-server | cmd workspace | 1 |
| dumpling | top-level component | 1 |
| hooks | top-level component | 1 |
| LICENSES | top-level component | 1 |
| lightning | top-level component | 1 |
| pkg | top-level component | 1 |
| tools | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | help | make help |
| utility | Makefile | default | make default |
| utility | Makefile | .PHONY | make .PHONY |
| serve-dev | Makefile | server-admin-check | make server-admin-check |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | buildsucc | make buildsucc |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | all | make all |
| utility | Makefile | .PHONY | make .PHONY |
| serve-dev | Makefile | dev | make dev |
| serve-dev | Makefile | dev | make dev |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | check-setup | make check-setup |
| quality | Makefile | check-setup | make check-setup |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | precheck | make precheck |
| quality | Makefile | precheck | make precheck |
| utility | Makefile | .PHONY | make .PHONY |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | cobra |
| observability | opentelemetry, prometheus |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [tests/realtikvtest/pushdowntest/index_lookup_pushdown_test.go](../../../../sources/pingcap__tidb/tests/realtikvtest/pushdowntest/index_lookup_pushdown_test.go) | retrieval signal |
| retrieval | [tests/realtikvtest/addindextest4/partial_index_test.go](../../../../sources/pingcap__tidb/tests/realtikvtest/addindextest4/partial_index_test.go) | retrieval signal |
| retrieval | [tests/realtikvtest/addindextest3/ingest_test.go](../../../../sources/pingcap__tidb/tests/realtikvtest/addindextest3/ingest_test.go) | retrieval signal |
| retrieval | [tests/realtikvtest/addindextest3/temp_index_test.go](../../../../sources/pingcap__tidb/tests/realtikvtest/addindextest3/temp_index_test.go) | retrieval signal |
| entrypoints | [tools/tazel/main.go](../../../../sources/pingcap__tidb/tools/tazel/main.go) | entrypoints signal |
| entrypoints | [tools/gen-parquet/main.go](../../../../sources/pingcap__tidb/tools/gen-parquet/main.go) | entrypoints signal |
| entrypoints | [tools/fake-oauth/main.go](../../../../sources/pingcap__tidb/tools/fake-oauth/main.go) | entrypoints signal |
| entrypoints | [tools/dashboard-linter/main.go](../../../../sources/pingcap__tidb/tools/dashboard-linter/main.go) | entrypoints signal |
| docs | [README.md](../../../../sources/pingcap__tidb/README.md) | docs signal |
| docs | [tests/realtikvtest/scripts/next-gen/README.md](../../../../sources/pingcap__tidb/tests/realtikvtest/scripts/next-gen/README.md) | docs signal |
| docs | [tests/realtikvtest/scripts/classic/README.md](../../../../sources/pingcap__tidb/tests/realtikvtest/scripts/classic/README.md) | docs signal |
| docs | [tests/readonlytest/README.md](../../../../sources/pingcap__tidb/tests/readonlytest/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 23 | [tools/tazel/main.go](../../../../sources/pingcap__tidb/tools/tazel/main.go)<br>[tools/gen-parquet/main.go](../../../../sources/pingcap__tidb/tools/gen-parquet/main.go)<br>[tools/fake-oauth/main.go](../../../../sources/pingcap__tidb/tools/fake-oauth/main.go)<br>[tools/dashboard-linter/main.go](../../../../sources/pingcap__tidb/tools/dashboard-linter/main.go)<br>[tests/llmtest/main.go](../../../../sources/pingcap__tidb/tests/llmtest/main.go)<br>[pkg/util/topsql/reporter/mock/server.go](../../../../sources/pingcap__tidb/pkg/util/topsql/reporter/mock/server.go)<br>[pkg/util/collate/ucaimpl/main.go](../../../../sources/pingcap__tidb/pkg/util/collate/ucaimpl/main.go)<br>[pkg/util/collate/ucadata/generator/main.go](../../../../sources/pingcap__tidb/pkg/util/collate/ucadata/generator/main.go) |
| agentRuntime | 1652 | [AGENTS.md](../../../../sources/pingcap__tidb/AGENTS.md)<br>[tools/tazel/ast.go](../../../../sources/pingcap__tidb/tools/tazel/ast.go)<br>[tools/tazel/BUILD.bazel](../../../../sources/pingcap__tidb/tools/tazel/BUILD.bazel)<br>[tools/tazel/main.go](../../../../sources/pingcap__tidb/tools/tazel/main.go)<br>[tools/tazel/util.go](../../../../sources/pingcap__tidb/tools/tazel/util.go)<br>[tools/patch-go/build.sh](../../../../sources/pingcap__tidb/tools/patch-go/build.sh)<br>[tools/patch-go/check.go](../../../../sources/pingcap__tidb/tools/patch-go/check.go)<br>[tools/patch-go/Dockerfile](../../../../sources/pingcap__tidb/tools/patch-go/Dockerfile) |
| mcp | 0 | not obvious |
| retrieval | 275 | [tests/realtikvtest/pushdowntest/index_lookup_pushdown_test.go](../../../../sources/pingcap__tidb/tests/realtikvtest/pushdowntest/index_lookup_pushdown_test.go)<br>[tests/realtikvtest/addindextest4/partial_index_test.go](../../../../sources/pingcap__tidb/tests/realtikvtest/addindextest4/partial_index_test.go)<br>[tests/realtikvtest/addindextest3/ingest_test.go](../../../../sources/pingcap__tidb/tests/realtikvtest/addindextest3/ingest_test.go)<br>[tests/realtikvtest/addindextest3/temp_index_test.go](../../../../sources/pingcap__tidb/tests/realtikvtest/addindextest3/temp_index_test.go)<br>[tests/realtikvtest/addindextest/add_index_test.go](../../../../sources/pingcap__tidb/tests/realtikvtest/addindextest/add_index_test.go)<br>[tests/integrationtest/t/clustered_index.test](../../../../sources/pingcap__tidb/tests/integrationtest/t/clustered_index.test)<br>[tests/integrationtest/t/explain_shard_index.test](../../../../sources/pingcap__tidb/tests/integrationtest/t/explain_shard_index.test)<br>[tests/integrationtest/t/index_join.test](../../../../sources/pingcap__tidb/tests/integrationtest/t/index_join.test) |
| spec | 221 | [roadmap.md](../../../../sources/pingcap__tidb/roadmap.md)<br>[tests/clusterintegrationtest/requirements.txt](../../../../sources/pingcap__tidb/tests/clusterintegrationtest/requirements.txt)<br>[docs/architecture.png](../../../../sources/pingcap__tidb/docs/architecture.png)<br>[docs/tidb-architecture.png](../../../../sources/pingcap__tidb/docs/tidb-architecture.png)<br>[docs/design/2018-07-01-refactor-aggregate-framework.md](../../../../sources/pingcap__tidb/docs/design/2018-07-01-refactor-aggregate-framework.md)<br>[docs/design/2018-07-19-row-format.md](../../../../sources/pingcap__tidb/docs/design/2018-07-19-row-format.md)<br>[docs/design/2018-07-22-enhance-propagations.md](../../../../sources/pingcap__tidb/docs/design/2018-07-22-enhance-propagations.md)<br>[docs/design/2018-08-10-restore-dropped-table.md](../../../../sources/pingcap__tidb/docs/design/2018-08-10-restore-dropped-table.md) |
| eval | 3854 | [tools/check/failpoint-go-test.sh](../../../../sources/pingcap__tidb/tools/check/failpoint-go-test.sh)<br>[tests/realtikvtest/BUILD.bazel](../../../../sources/pingcap__tidb/tests/realtikvtest/BUILD.bazel)<br>[tests/realtikvtest/testkit.go](../../../../sources/pingcap__tidb/tests/realtikvtest/testkit.go)<br>[tests/realtikvtest/txntest/BUILD.bazel](../../../../sources/pingcap__tidb/tests/realtikvtest/txntest/BUILD.bazel)<br>[tests/realtikvtest/txntest/isolation_test.go](../../../../sources/pingcap__tidb/tests/realtikvtest/txntest/isolation_test.go)<br>[tests/realtikvtest/txntest/main_test.go](../../../../sources/pingcap__tidb/tests/realtikvtest/txntest/main_test.go)<br>[tests/realtikvtest/txntest/replica_read_test.go](../../../../sources/pingcap__tidb/tests/realtikvtest/txntest/replica_read_test.go)<br>[tests/realtikvtest/txntest/shared_lock_test.go](../../../../sources/pingcap__tidb/tests/realtikvtest/txntest/shared_lock_test.go) |
| security | 40 | [SECURITY.md](../../../../sources/pingcap__tidb/SECURITY.md)<br>[tools/fake-oauth/BUILD.bazel](../../../../sources/pingcap__tidb/tools/fake-oauth/BUILD.bazel)<br>[tools/fake-oauth/main.go](../../../../sources/pingcap__tidb/tools/fake-oauth/main.go)<br>[pkg/util/security_test.go](../../../../sources/pingcap__tidb/pkg/util/security_test.go)<br>[pkg/util/security.go](../../../../sources/pingcap__tidb/pkg/util/security.go)<br>[pkg/util/tiflashcompute/dispatch_policy.go](../../../../sources/pingcap__tidb/pkg/util/tiflashcompute/dispatch_policy.go)<br>[pkg/timer/api/schedule_policy_test.go](../../../../sources/pingcap__tidb/pkg/timer/api/schedule_policy_test.go)<br>[pkg/privilege/privileges/tidb_auth_token_test.go](../../../../sources/pingcap__tidb/pkg/privilege/privileges/tidb_auth_token_test.go) |
| ci | 8 | [Jenkinsfile](../../../../sources/pingcap__tidb/Jenkinsfile)<br>[.github/workflows/bazel-build-crossbuild.yml](../../../../sources/pingcap__tidb/.github/workflows/bazel-build-crossbuild.yml)<br>[.github/workflows/bazel-lint-crossbuild.yml](../../../../sources/pingcap__tidb/.github/workflows/bazel-lint-crossbuild.yml)<br>[.github/workflows/check-bazel-prepare.yml](../../../../sources/pingcap__tidb/.github/workflows/check-bazel-prepare.yml)<br>[.github/workflows/generate-bazel-files.yml](../../../../sources/pingcap__tidb/.github/workflows/generate-bazel-files.yml)<br>[.github/workflows/integration-test-compile-br.yml](../../../../sources/pingcap__tidb/.github/workflows/integration-test-compile-br.yml)<br>[.github/workflows/integration-test-dumpling.yml](../../../../sources/pingcap__tidb/.github/workflows/integration-test-dumpling.yml)<br>[.github/workflows/update-bazel-files.yml](../../../../sources/pingcap__tidb/.github/workflows/update-bazel-files.yml) |
| container | 6 | [Dockerfile](../../../../sources/pingcap__tidb/Dockerfile)<br>[Dockerfile.enterprise](../../../../sources/pingcap__tidb/Dockerfile.enterprise)<br>[tools/patch-go/Dockerfile](../../../../sources/pingcap__tidb/tools/patch-go/Dockerfile)<br>[tests/globalkilltest/Dockerfile](../../../../sources/pingcap__tidb/tests/globalkilltest/Dockerfile)<br>[br/docker-compose.yaml](../../../../sources/pingcap__tidb/br/docker-compose.yaml)<br>[br/docker/Dockerfile](../../../../sources/pingcap__tidb/br/docker/Dockerfile) |
| instruction | 3 | [AGENTS.md](../../../../sources/pingcap__tidb/AGENTS.md)<br>[CLAUDE.md](../../../../sources/pingcap__tidb/CLAUDE.md)<br>[dumpling/tests/AGENTS.md](../../../../sources/pingcap__tidb/dumpling/tests/AGENTS.md) |
| docs | 281 | [README.md](../../../../sources/pingcap__tidb/README.md)<br>[tests/realtikvtest/scripts/next-gen/README.md](../../../../sources/pingcap__tidb/tests/realtikvtest/scripts/next-gen/README.md)<br>[tests/realtikvtest/scripts/classic/README.md](../../../../sources/pingcap__tidb/tests/realtikvtest/scripts/classic/README.md)<br>[tests/readonlytest/README.md](../../../../sources/pingcap__tidb/tests/readonlytest/README.md)<br>[tests/llmtest/README.md](../../../../sources/pingcap__tidb/tests/llmtest/README.md)<br>[tests/integrationtest2/README.md](../../../../sources/pingcap__tidb/tests/integrationtest2/README.md)<br>[tests/integrationtest/README.md](../../../../sources/pingcap__tidb/tests/integrationtest/README.md)<br>[tests/globalkilltest/README.md](../../../../sources/pingcap__tidb/tests/globalkilltest/README.md) |
| config | 7 | [go.mod](../../../../sources/pingcap__tidb/go.mod)<br>[Makefile](../../../../sources/pingcap__tidb/Makefile)<br>[tests/graceshutdown/Makefile](../../../../sources/pingcap__tidb/tests/graceshutdown/Makefile)<br>[tests/globalkilltest/Makefile](../../../../sources/pingcap__tidb/tests/globalkilltest/Makefile)<br>[tests/clusterintegrationtest/requirements.txt](../../../../sources/pingcap__tidb/tests/clusterintegrationtest/requirements.txt)<br>[pkg/parser/go.mod](../../../../sources/pingcap__tidb/pkg/parser/go.mod)<br>[pkg/parser/Makefile](../../../../sources/pingcap__tidb/pkg/parser/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 3854 | [tools/check/failpoint-go-test.sh](../../../../sources/pingcap__tidb/tools/check/failpoint-go-test.sh)<br>[tests/realtikvtest/BUILD.bazel](../../../../sources/pingcap__tidb/tests/realtikvtest/BUILD.bazel)<br>[tests/realtikvtest/testkit.go](../../../../sources/pingcap__tidb/tests/realtikvtest/testkit.go)<br>[tests/realtikvtest/txntest/BUILD.bazel](../../../../sources/pingcap__tidb/tests/realtikvtest/txntest/BUILD.bazel)<br>[tests/realtikvtest/txntest/isolation_test.go](../../../../sources/pingcap__tidb/tests/realtikvtest/txntest/isolation_test.go)<br>[tests/realtikvtest/txntest/main_test.go](../../../../sources/pingcap__tidb/tests/realtikvtest/txntest/main_test.go) |
| CI workflows | 8 | [Jenkinsfile](../../../../sources/pingcap__tidb/Jenkinsfile)<br>[.github/workflows/bazel-build-crossbuild.yml](../../../../sources/pingcap__tidb/.github/workflows/bazel-build-crossbuild.yml)<br>[.github/workflows/bazel-lint-crossbuild.yml](../../../../sources/pingcap__tidb/.github/workflows/bazel-lint-crossbuild.yml)<br>[.github/workflows/check-bazel-prepare.yml](../../../../sources/pingcap__tidb/.github/workflows/check-bazel-prepare.yml)<br>[.github/workflows/generate-bazel-files.yml](../../../../sources/pingcap__tidb/.github/workflows/generate-bazel-files.yml)<br>[.github/workflows/integration-test-compile-br.yml](../../../../sources/pingcap__tidb/.github/workflows/integration-test-compile-br.yml) |
| Containers / deploy | 6 | [Dockerfile](../../../../sources/pingcap__tidb/Dockerfile)<br>[Dockerfile.enterprise](../../../../sources/pingcap__tidb/Dockerfile.enterprise)<br>[tools/patch-go/Dockerfile](../../../../sources/pingcap__tidb/tools/patch-go/Dockerfile)<br>[tests/globalkilltest/Dockerfile](../../../../sources/pingcap__tidb/tests/globalkilltest/Dockerfile)<br>[br/docker-compose.yaml](../../../../sources/pingcap__tidb/br/docker-compose.yaml)<br>[br/docker/Dockerfile](../../../../sources/pingcap__tidb/br/docker/Dockerfile) |
| Security / policy | 40 | [SECURITY.md](../../../../sources/pingcap__tidb/SECURITY.md)<br>[tools/fake-oauth/BUILD.bazel](../../../../sources/pingcap__tidb/tools/fake-oauth/BUILD.bazel)<br>[tools/fake-oauth/main.go](../../../../sources/pingcap__tidb/tools/fake-oauth/main.go)<br>[pkg/util/security_test.go](../../../../sources/pingcap__tidb/pkg/util/security_test.go)<br>[pkg/util/security.go](../../../../sources/pingcap__tidb/pkg/util/security.go)<br>[pkg/util/tiflashcompute/dispatch_policy.go](../../../../sources/pingcap__tidb/pkg/util/tiflashcompute/dispatch_policy.go) |
| Agent instructions | 3 | [AGENTS.md](../../../../sources/pingcap__tidb/AGENTS.md)<br>[CLAUDE.md](../../../../sources/pingcap__tidb/CLAUDE.md)<br>[dumpling/tests/AGENTS.md](../../../../sources/pingcap__tidb/dumpling/tests/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/realtikvtest/pushdowntest/index_lookup_pushdown_test.go`, `tests/realtikvtest/addindextest4/partial_index_test.go`, `tests/realtikvtest/addindextest3/ingest_test.go`.
2. Trace execution through entrypoints: `tools/tazel/main.go`, `tools/gen-parquet/main.go`, `tools/fake-oauth/main.go`.
3. Map agent/tool runtime through: `AGENTS.md`, `tools/tazel/ast.go`, `tools/tazel/BUILD.bazel`.
4. Inspect retrieval/memory/indexing through: `tests/realtikvtest/pushdowntest/index_lookup_pushdown_test.go`, `tests/realtikvtest/addindextest4/partial_index_test.go`, `tests/realtikvtest/addindextest3/ingest_test.go`.
5. Verify behavior through test/eval files: `tools/check/failpoint-go-test.sh`, `tests/realtikvtest/BUILD.bazel`, `tests/realtikvtest/testkit.go`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 TiDB is built for agentic workloads that grow unpredictably, with ACID guarantees and native support for transactions, a. 핵심 구조 신호는 Go, go.mod, Dockerfile, Makefile, README.md, AGENTS.md이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
