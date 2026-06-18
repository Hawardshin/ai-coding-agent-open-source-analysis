# pingcap/tidb 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

TiDB is built for agentic workloads that grow unpredictably, with ACID guarantees and native support for transactions, analytics, and vector search. No data silos. No noisy neighbors. No infrastructure ceiling.

## 요약

- 조사 단위: `sources/pingcap__tidb` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 7,373 files, 1,366 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/realtikvtest/pushdowntest/index_lookup_pushdown_test.go, tests/realtikvtest/addindextest4/partial_index_test.go, tests/realtikvtest/addindextest3/ingest_test.go이고, 의존성 단서는 openai, cobra, opentelemetry, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | pingcap/tidb |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Go |
| Stars | 40171 |
| Forks | 6195 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/pingcap__tidb](../../../../sources/pingcap__tidb) |
| 기존 보고서 | [reports/global-trending/repositories/pingcap__tidb.md](../../../global-trending/repositories/pingcap__tidb.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 7373 / 1366 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .agents, .claude, .github, br, cmd, docs, dumpling, hooks, LICENSES, lightning, pkg, tests, tools |
| 상위 확장자 | .go: 4163, .bazel: 786, .sql: 521, .sh: 275, .result: 265, .test: 261, .md: 246, .toml: 206, .json: 187, (none): 141, .png: 94, .csv: 84 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | cobra |
| observability | opentelemetry, prometheus |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 23 | [tools/tazel/main.go](../../../../sources/pingcap__tidb/tools/tazel/main.go)<br>[tools/gen-parquet/main.go](../../../../sources/pingcap__tidb/tools/gen-parquet/main.go)<br>[tools/fake-oauth/main.go](../../../../sources/pingcap__tidb/tools/fake-oauth/main.go)<br>[tools/dashboard-linter/main.go](../../../../sources/pingcap__tidb/tools/dashboard-linter/main.go)<br>[tests/llmtest/main.go](../../../../sources/pingcap__tidb/tests/llmtest/main.go)<br>[pkg/util/topsql/reporter/mock/server.go](../../../../sources/pingcap__tidb/pkg/util/topsql/reporter/mock/server.go)<br>[pkg/util/collate/ucaimpl/main.go](../../../../sources/pingcap__tidb/pkg/util/collate/ucaimpl/main.go)<br>[pkg/util/collate/ucadata/generator/main.go](../../../../sources/pingcap__tidb/pkg/util/collate/ucadata/generator/main.go) |
| agentRuntime | 1652 | [AGENTS.md](../../../../sources/pingcap__tidb/AGENTS.md)<br>[tools/tazel/ast.go](../../../../sources/pingcap__tidb/tools/tazel/ast.go)<br>[tools/tazel/BUILD.bazel](../../../../sources/pingcap__tidb/tools/tazel/BUILD.bazel)<br>[tools/tazel/main.go](../../../../sources/pingcap__tidb/tools/tazel/main.go)<br>[tools/tazel/util.go](../../../../sources/pingcap__tidb/tools/tazel/util.go)<br>[tools/patch-go/build.sh](../../../../sources/pingcap__tidb/tools/patch-go/build.sh)<br>[tools/patch-go/check.go](../../../../sources/pingcap__tidb/tools/patch-go/check.go)<br>[tools/patch-go/Dockerfile](../../../../sources/pingcap__tidb/tools/patch-go/Dockerfile) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 275 | [tests/realtikvtest/pushdowntest/index_lookup_pushdown_test.go](../../../../sources/pingcap__tidb/tests/realtikvtest/pushdowntest/index_lookup_pushdown_test.go)<br>[tests/realtikvtest/addindextest4/partial_index_test.go](../../../../sources/pingcap__tidb/tests/realtikvtest/addindextest4/partial_index_test.go)<br>[tests/realtikvtest/addindextest3/ingest_test.go](../../../../sources/pingcap__tidb/tests/realtikvtest/addindextest3/ingest_test.go)<br>[tests/realtikvtest/addindextest3/temp_index_test.go](../../../../sources/pingcap__tidb/tests/realtikvtest/addindextest3/temp_index_test.go)<br>[tests/realtikvtest/addindextest/add_index_test.go](../../../../sources/pingcap__tidb/tests/realtikvtest/addindextest/add_index_test.go)<br>[tests/integrationtest/t/clustered_index.test](../../../../sources/pingcap__tidb/tests/integrationtest/t/clustered_index.test)<br>[tests/integrationtest/t/explain_shard_index.test](../../../../sources/pingcap__tidb/tests/integrationtest/t/explain_shard_index.test)<br>[tests/integrationtest/t/index_join.test](../../../../sources/pingcap__tidb/tests/integrationtest/t/index_join.test) |
| spec | 221 | [roadmap.md](../../../../sources/pingcap__tidb/roadmap.md)<br>[tests/clusterintegrationtest/requirements.txt](../../../../sources/pingcap__tidb/tests/clusterintegrationtest/requirements.txt)<br>[docs/architecture.png](../../../../sources/pingcap__tidb/docs/architecture.png)<br>[docs/tidb-architecture.png](../../../../sources/pingcap__tidb/docs/tidb-architecture.png)<br>[docs/design/2018-07-01-refactor-aggregate-framework.md](../../../../sources/pingcap__tidb/docs/design/2018-07-01-refactor-aggregate-framework.md)<br>[docs/design/2018-07-19-row-format.md](../../../../sources/pingcap__tidb/docs/design/2018-07-19-row-format.md)<br>[docs/design/2018-07-22-enhance-propagations.md](../../../../sources/pingcap__tidb/docs/design/2018-07-22-enhance-propagations.md)<br>[docs/design/2018-08-10-restore-dropped-table.md](../../../../sources/pingcap__tidb/docs/design/2018-08-10-restore-dropped-table.md) |
| eval | 3854 | [tools/check/failpoint-go-test.sh](../../../../sources/pingcap__tidb/tools/check/failpoint-go-test.sh)<br>[tests/realtikvtest/BUILD.bazel](../../../../sources/pingcap__tidb/tests/realtikvtest/BUILD.bazel)<br>[tests/realtikvtest/testkit.go](../../../../sources/pingcap__tidb/tests/realtikvtest/testkit.go)<br>[tests/realtikvtest/txntest/BUILD.bazel](../../../../sources/pingcap__tidb/tests/realtikvtest/txntest/BUILD.bazel)<br>[tests/realtikvtest/txntest/isolation_test.go](../../../../sources/pingcap__tidb/tests/realtikvtest/txntest/isolation_test.go)<br>[tests/realtikvtest/txntest/main_test.go](../../../../sources/pingcap__tidb/tests/realtikvtest/txntest/main_test.go)<br>[tests/realtikvtest/txntest/replica_read_test.go](../../../../sources/pingcap__tidb/tests/realtikvtest/txntest/replica_read_test.go)<br>[tests/realtikvtest/txntest/shared_lock_test.go](../../../../sources/pingcap__tidb/tests/realtikvtest/txntest/shared_lock_test.go) |
| security | 40 | [SECURITY.md](../../../../sources/pingcap__tidb/SECURITY.md)<br>[tools/fake-oauth/BUILD.bazel](../../../../sources/pingcap__tidb/tools/fake-oauth/BUILD.bazel)<br>[tools/fake-oauth/main.go](../../../../sources/pingcap__tidb/tools/fake-oauth/main.go)<br>[pkg/util/security_test.go](../../../../sources/pingcap__tidb/pkg/util/security_test.go)<br>[pkg/util/security.go](../../../../sources/pingcap__tidb/pkg/util/security.go)<br>[pkg/util/tiflashcompute/dispatch_policy.go](../../../../sources/pingcap__tidb/pkg/util/tiflashcompute/dispatch_policy.go)<br>[pkg/timer/api/schedule_policy_test.go](../../../../sources/pingcap__tidb/pkg/timer/api/schedule_policy_test.go)<br>[pkg/privilege/privileges/tidb_auth_token_test.go](../../../../sources/pingcap__tidb/pkg/privilege/privileges/tidb_auth_token_test.go) |
| ci | 8 | [Jenkinsfile](../../../../sources/pingcap__tidb/Jenkinsfile)<br>[.github/workflows/bazel-build-crossbuild.yml](../../../../sources/pingcap__tidb/.github/workflows/bazel-build-crossbuild.yml)<br>[.github/workflows/bazel-lint-crossbuild.yml](../../../../sources/pingcap__tidb/.github/workflows/bazel-lint-crossbuild.yml)<br>[.github/workflows/check-bazel-prepare.yml](../../../../sources/pingcap__tidb/.github/workflows/check-bazel-prepare.yml)<br>[.github/workflows/generate-bazel-files.yml](../../../../sources/pingcap__tidb/.github/workflows/generate-bazel-files.yml)<br>[.github/workflows/integration-test-compile-br.yml](../../../../sources/pingcap__tidb/.github/workflows/integration-test-compile-br.yml)<br>[.github/workflows/integration-test-dumpling.yml](../../../../sources/pingcap__tidb/.github/workflows/integration-test-dumpling.yml)<br>[.github/workflows/update-bazel-files.yml](../../../../sources/pingcap__tidb/.github/workflows/update-bazel-files.yml) |
| container | 6 | [Dockerfile](../../../../sources/pingcap__tidb/Dockerfile)<br>[Dockerfile.enterprise](../../../../sources/pingcap__tidb/Dockerfile.enterprise)<br>[tools/patch-go/Dockerfile](../../../../sources/pingcap__tidb/tools/patch-go/Dockerfile)<br>[tests/globalkilltest/Dockerfile](../../../../sources/pingcap__tidb/tests/globalkilltest/Dockerfile)<br>[br/docker-compose.yaml](../../../../sources/pingcap__tidb/br/docker-compose.yaml)<br>[br/docker/Dockerfile](../../../../sources/pingcap__tidb/br/docker/Dockerfile) |
| instruction | 3 | [AGENTS.md](../../../../sources/pingcap__tidb/AGENTS.md)<br>[CLAUDE.md](../../../../sources/pingcap__tidb/CLAUDE.md)<br>[dumpling/tests/AGENTS.md](../../../../sources/pingcap__tidb/dumpling/tests/AGENTS.md) |
| docs | 281 | [README.md](../../../../sources/pingcap__tidb/README.md)<br>[tests/realtikvtest/scripts/next-gen/README.md](../../../../sources/pingcap__tidb/tests/realtikvtest/scripts/next-gen/README.md)<br>[tests/realtikvtest/scripts/classic/README.md](../../../../sources/pingcap__tidb/tests/realtikvtest/scripts/classic/README.md)<br>[tests/readonlytest/README.md](../../../../sources/pingcap__tidb/tests/readonlytest/README.md)<br>[tests/llmtest/README.md](../../../../sources/pingcap__tidb/tests/llmtest/README.md)<br>[tests/integrationtest2/README.md](../../../../sources/pingcap__tidb/tests/integrationtest2/README.md)<br>[tests/integrationtest/README.md](../../../../sources/pingcap__tidb/tests/integrationtest/README.md)<br>[tests/globalkilltest/README.md](../../../../sources/pingcap__tidb/tests/globalkilltest/README.md) |
| config | 7 | [go.mod](../../../../sources/pingcap__tidb/go.mod)<br>[Makefile](../../../../sources/pingcap__tidb/Makefile)<br>[tests/graceshutdown/Makefile](../../../../sources/pingcap__tidb/tests/graceshutdown/Makefile)<br>[tests/globalkilltest/Makefile](../../../../sources/pingcap__tidb/tests/globalkilltest/Makefile)<br>[tests/clusterintegrationtest/requirements.txt](../../../../sources/pingcap__tidb/tests/clusterintegrationtest/requirements.txt)<br>[pkg/parser/go.mod](../../../../sources/pingcap__tidb/pkg/parser/go.mod)<br>[pkg/parser/Makefile](../../../../sources/pingcap__tidb/pkg/parser/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 3854 | [tools/check/failpoint-go-test.sh](../../../../sources/pingcap__tidb/tools/check/failpoint-go-test.sh)<br>[tests/realtikvtest/BUILD.bazel](../../../../sources/pingcap__tidb/tests/realtikvtest/BUILD.bazel)<br>[tests/realtikvtest/testkit.go](../../../../sources/pingcap__tidb/tests/realtikvtest/testkit.go)<br>[tests/realtikvtest/txntest/BUILD.bazel](../../../../sources/pingcap__tidb/tests/realtikvtest/txntest/BUILD.bazel)<br>[tests/realtikvtest/txntest/isolation_test.go](../../../../sources/pingcap__tidb/tests/realtikvtest/txntest/isolation_test.go)<br>[tests/realtikvtest/txntest/main_test.go](../../../../sources/pingcap__tidb/tests/realtikvtest/txntest/main_test.go) |
| CI workflow | 8 | [Jenkinsfile](../../../../sources/pingcap__tidb/Jenkinsfile)<br>[.github/workflows/bazel-build-crossbuild.yml](../../../../sources/pingcap__tidb/.github/workflows/bazel-build-crossbuild.yml)<br>[.github/workflows/bazel-lint-crossbuild.yml](../../../../sources/pingcap__tidb/.github/workflows/bazel-lint-crossbuild.yml)<br>[.github/workflows/check-bazel-prepare.yml](../../../../sources/pingcap__tidb/.github/workflows/check-bazel-prepare.yml)<br>[.github/workflows/generate-bazel-files.yml](../../../../sources/pingcap__tidb/.github/workflows/generate-bazel-files.yml)<br>[.github/workflows/integration-test-compile-br.yml](../../../../sources/pingcap__tidb/.github/workflows/integration-test-compile-br.yml) |
| 컨테이너/배포 | 6 | [Dockerfile](../../../../sources/pingcap__tidb/Dockerfile)<br>[Dockerfile.enterprise](../../../../sources/pingcap__tidb/Dockerfile.enterprise)<br>[tools/patch-go/Dockerfile](../../../../sources/pingcap__tidb/tools/patch-go/Dockerfile)<br>[tests/globalkilltest/Dockerfile](../../../../sources/pingcap__tidb/tests/globalkilltest/Dockerfile)<br>[br/docker-compose.yaml](../../../../sources/pingcap__tidb/br/docker-compose.yaml)<br>[br/docker/Dockerfile](../../../../sources/pingcap__tidb/br/docker/Dockerfile) |
| 보안/정책 | 40 | [SECURITY.md](../../../../sources/pingcap__tidb/SECURITY.md)<br>[tools/fake-oauth/BUILD.bazel](../../../../sources/pingcap__tidb/tools/fake-oauth/BUILD.bazel)<br>[tools/fake-oauth/main.go](../../../../sources/pingcap__tidb/tools/fake-oauth/main.go)<br>[pkg/util/security_test.go](../../../../sources/pingcap__tidb/pkg/util/security_test.go)<br>[pkg/util/security.go](../../../../sources/pingcap__tidb/pkg/util/security.go)<br>[pkg/util/tiflashcompute/dispatch_policy.go](../../../../sources/pingcap__tidb/pkg/util/tiflashcompute/dispatch_policy.go) |
| 에이전트 지시문 | 3 | [AGENTS.md](../../../../sources/pingcap__tidb/AGENTS.md)<br>[CLAUDE.md](../../../../sources/pingcap__tidb/CLAUDE.md)<br>[dumpling/tests/AGENTS.md](../../../../sources/pingcap__tidb/dumpling/tests/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/realtikvtest/pushdowntest/index_lookup_pushdown_test.go`, `tests/realtikvtest/addindextest4/partial_index_test.go`, `tests/realtikvtest/addindextest3/ingest_test.go`.
2. entrypoint를 따라 실행 흐름 확인: `tools/tazel/main.go`, `tools/gen-parquet/main.go`, `tools/fake-oauth/main.go`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tools/tazel/ast.go`, `tools/tazel/BUILD.bazel`.
4. retrieval/memory/indexing 확인: `tests/realtikvtest/pushdowntest/index_lookup_pushdown_test.go`, `tests/realtikvtest/addindextest4/partial_index_test.go`, `tests/realtikvtest/addindextest3/ingest_test.go`.
5. test/eval 파일로 동작 검증: `tools/check/failpoint-go-test.sh`, `tests/realtikvtest/BUILD.bazel`, `tests/realtikvtest/testkit.go`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 TiDB is built for agentic workloads that grow unpredictably, with ACID guarantees and native support for transactions, a. 핵심 구조 신호는 Go, go.mod, Dockerfile, Makefile, README.md, AGENTS.md이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
