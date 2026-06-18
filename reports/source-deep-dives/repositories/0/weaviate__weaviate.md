# weaviate/weaviate Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 4747 files, 807 directories.

## 요약

- 조사 단위: `sources/weaviate__weaviate` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 4,747 files, 807 directories, depth score 138, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 eval=docker-compose-auth-test.yml, docker-compose-mcp-test.yml, docker-compose-namespaces-test.yml이고, 의존성 단서는 mcp, weaviate, opentelemetry, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 quality and evaluation comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | weaviate/weaviate |
| Topic | Evals, Observability, and Quality / 평가/관측/품질 |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/weaviate__weaviate](../../../../sources/weaviate__weaviate) |
| Existing report | [reports/clone-structures/weaviate__weaviate.md](../../../clone-structures/weaviate__weaviate.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 4747 / 807 |
| Max observed depth | 9 |
| Top directories | .claude, .github, adapters, ci, client, cluster, cmd, deprecations, docker-compose, docker-compose-raft, docs, entities, grpc, modules, openapi-specs, test, tools, usecases |
| Top extensions | .go: 4375, .py: 53, .sh: 43, .json: 32, .yaml: 27, .yml: 26, .s: 25, .c: 21, .db: 21, (none): 20, .md: 18, .proto: 17 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| client | source boundary | 8 |
| docs | documentation surface | 5 |
| .github | ci surface | 1 |
| adapters | top-level component | 1 |
| ci | ci surface | 1 |
| cluster | top-level component | 1 |
| cmd | source boundary | 1 |
| cmd/weaviate-server | cmd workspace | 1 |
| deprecations | top-level component | 1 |
| docker-compose | documentation surface | 1 |
| docker-compose-raft | documentation surface | 1 |
| entities | top-level component | 1 |
| grpc | top-level component | 1 |
| modules | top-level component | 1 |
| openapi-specs | source boundary | 1 |
| test | validation surface | 1 |
| tools | top-level component | 1 |
| usecases | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | help | make help |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | weaviate | make weaviate |
| utility | Makefile | weaviate-debug | make weaviate-debug |
| container | Makefile | weaviate-image | make weaviate-image |
| test | Makefile | test | make test |
| test | Makefile | test-integration | make test-integration |
| utility | Makefile | contextionary | make contextionary |
| utility | Makefile | monitoring | make monitoring |
| utility | Makefile | local | make local |
| utility | Makefile | local-oidc | make local-oidc |
| utility | Makefile | local-rbac | make local-rbac |
| utility | Makefile | debug | make debug |
| utility | Makefile | banner | make banner |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | mocks | make mocks |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | grpc | make grpc |
| utility | Makefile | deps | make deps |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | weaviate |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | opentelemetry, prometheus |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| eval | [docker-compose-auth-test.yml](../../../../sources/weaviate__weaviate/docker-compose-auth-test.yml) | eval signal |
| eval | [docker-compose-mcp-test.yml](../../../../sources/weaviate__weaviate/docker-compose-mcp-test.yml) | eval signal |
| eval | [docker-compose-namespaces-test.yml](../../../../sources/weaviate__weaviate/docker-compose-namespaces-test.yml) | eval signal |
| eval | [docker-compose-readonly-recovery-test.yml](../../../../sources/weaviate__weaviate/docker-compose-readonly-recovery-test.yml) | eval signal |
| entrypoints | [tools/telemetry-dashboard/main.go](../../../../sources/weaviate__weaviate/tools/telemetry-dashboard/main.go) | entrypoints signal |
| entrypoints | [tools/swagger_custom_code/main.go](../../../../sources/weaviate__weaviate/tools/swagger_custom_code/main.go) | entrypoints signal |
| entrypoints | [tools/release_template/main.go](../../../../sources/weaviate__weaviate/tools/release_template/main.go) | entrypoints signal |
| entrypoints | [tools/license_headers/main.go](../../../../sources/weaviate__weaviate/tools/license_headers/main.go) | entrypoints signal |
| config | [go.mod](../../../../sources/weaviate__weaviate/go.mod) | config signal |
| config | [Makefile](../../../../sources/weaviate__weaviate/Makefile) | config signal |
| config | [pyproject.toml](../../../../sources/weaviate__weaviate/pyproject.toml) | config signal |
| config | [test/benchmark_bm25/go.mod](../../../../sources/weaviate__weaviate/test/benchmark_bm25/go.mod) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 13 | [tools/telemetry-dashboard/main.go](../../../../sources/weaviate__weaviate/tools/telemetry-dashboard/main.go)<br>[tools/swagger_custom_code/main.go](../../../../sources/weaviate__weaviate/tools/swagger_custom_code/main.go)<br>[tools/release_template/main.go](../../../../sources/weaviate__weaviate/tools/release_template/main.go)<br>[tools/license_headers/main.go](../../../../sources/weaviate__weaviate/tools/license_headers/main.go)<br>[tools/dev/generate_release_notes/main.go](../../../../sources/weaviate__weaviate/tools/dev/generate_release_notes/main.go)<br>[test/benchmark_bm25/main.go](../../../../sources/weaviate__weaviate/test/benchmark_bm25/main.go)<br>[deprecations/main.go](../../../../sources/weaviate__weaviate/deprecations/main.go)<br>[cmd/weaviate-server/main.go](../../../../sources/weaviate__weaviate/cmd/weaviate-server/main.go) |
| agentRuntime | 97 | [usecases/schema/executor_test.go](../../../../sources/weaviate__weaviate/usecases/schema/executor_test.go)<br>[usecases/schema/executor.go](../../../../sources/weaviate__weaviate/usecases/schema/executor.go)<br>[tools/.gitignore](../../../../sources/weaviate__weaviate/tools/.gitignore)<br>[tools/async_checkpoint.sh](../../../../sources/weaviate__weaviate/tools/async_checkpoint.sh)<br>[tools/gen-code-from-swagger.sh](../../../../sources/weaviate__weaviate/tools/gen-code-from-swagger.sh)<br>[tools/generate-release-artifacts.sh](../../../../sources/weaviate__weaviate/tools/generate-release-artifacts.sh)<br>[tools/linter_error_groups.sh](../../../../sources/weaviate__weaviate/tools/linter_error_groups.sh)<br>[tools/linter_go_routines.sh](../../../../sources/weaviate__weaviate/tools/linter_go_routines.sh) |
| mcp | 51 | [docker-compose-mcp-test.yml](../../../../sources/weaviate__weaviate/docker-compose-mcp-test.yml)<br>[tools/dev/config.mcp.json](../../../../sources/weaviate__weaviate/tools/dev/config.mcp.json)<br>[tools/dev/config.mcp.yaml](../../../../sources/weaviate__weaviate/tools/dev/config.mcp.yaml)<br>[test/helper/mcp.go](../../../../sources/weaviate__weaviate/test/helper/mcp.go)<br>[test/acceptance/namespace/mcp_test.go](../../../../sources/weaviate__weaviate/test/acceptance/namespace/mcp_test.go)<br>[test/acceptance/mcp/get_config_test.go](../../../../sources/weaviate__weaviate/test/acceptance/mcp/get_config_test.go)<br>[test/acceptance/mcp/helpers_test.go](../../../../sources/weaviate__weaviate/test/acceptance/mcp/helpers_test.go)<br>[test/acceptance/mcp/objects_upsert_test.go](../../../../sources/weaviate__weaviate/test/acceptance/mcp/objects_upsert_test.go) |
| retrieval | 470 | [usecases/traverser/near_params_vector_test.go](../../../../sources/weaviate__weaviate/usecases/traverser/near_params_vector_test.go)<br>[usecases/traverser/near_params_vector.go](../../../../sources/weaviate__weaviate/usecases/traverser/near_params_vector.go)<br>[usecases/traverser/target_vector_param_helper.go](../../../../sources/weaviate__weaviate/usecases/traverser/target_vector_param_helper.go)<br>[usecases/sharding/remote_index_incoming.go](../../../../sources/weaviate__weaviate/usecases/sharding/remote_index_incoming.go)<br>[usecases/sharding/remote_index_test.go](../../../../sources/weaviate__weaviate/usecases/sharding/remote_index_test.go)<br>[usecases/sharding/remote_index.go](../../../../sources/weaviate__weaviate/usecases/sharding/remote_index.go)<br>[usecases/objects/vector.go](../../../../sources/weaviate__weaviate/usecases/objects/vector.go)<br>[usecases/objects/validation/vector_validation_test.go](../../../../sources/weaviate__weaviate/usecases/objects/validation/vector_validation_test.go) |
| spec | 448 | [usecases/export/ARCHITECTURE.md](../../../../sources/weaviate__weaviate/usecases/export/ARCHITECTURE.md)<br>[test/acceptance_with_python/__init__.py](../../../../sources/weaviate__weaviate/test/acceptance_with_python/__init__.py)<br>[test/acceptance_with_python/conftest.py](../../../../sources/weaviate__weaviate/test/acceptance_with_python/conftest.py)<br>[test/acceptance_with_python/get_debug_usage.py](../../../../sources/weaviate__weaviate/test/acceptance_with_python/get_debug_usage.py)<br>[test/acceptance_with_python/requirements.txt](../../../../sources/weaviate__weaviate/test/acceptance_with_python/requirements.txt)<br>[test/acceptance_with_python/run.sh](../../../../sources/weaviate__weaviate/test/acceptance_with_python/run.sh)<br>[test/acceptance_with_python/test_aggregate.py](../../../../sources/weaviate__weaviate/test/acceptance_with_python/test_aggregate.py)<br>[test/acceptance_with_python/test_ascii_fold_ignore.py](../../../../sources/weaviate__weaviate/test/acceptance_with_python/test_ascii_fold_ignore.py) |
| eval | 1871 | [docker-compose-auth-test.yml](../../../../sources/weaviate__weaviate/docker-compose-auth-test.yml)<br>[docker-compose-mcp-test.yml](../../../../sources/weaviate__weaviate/docker-compose-mcp-test.yml)<br>[docker-compose-namespaces-test.yml](../../../../sources/weaviate__weaviate/docker-compose-namespaces-test.yml)<br>[docker-compose-readonly-recovery-test.yml](../../../../sources/weaviate__weaviate/docker-compose-readonly-recovery-test.yml)<br>[docker-compose-test.yml](../../../../sources/weaviate__weaviate/docker-compose-test.yml)<br>[usecases/vectorizer/combine_test.go](../../../../sources/weaviate__weaviate/usecases/vectorizer/combine_test.go)<br>[usecases/vectorizer/distance_test.go](../../../../sources/weaviate__weaviate/usecases/vectorizer/distance_test.go)<br>[usecases/usagelimits/errors_test.go](../../../../sources/weaviate__weaviate/usecases/usagelimits/errors_test.go) |
| security | 99 | [docker-compose-auth-test.yml](../../../../sources/weaviate__weaviate/docker-compose-auth-test.yml)<br>[usecases/modulecomponents/gcpcommon/auth_broker_test.go](../../../../sources/weaviate__weaviate/usecases/modulecomponents/gcpcommon/auth_broker_test.go)<br>[usecases/modulecomponents/gcpcommon/auth_broker.go](../../../../sources/weaviate__weaviate/usecases/modulecomponents/gcpcommon/auth_broker.go)<br>[usecases/backup/auth_test.go](../../../../sources/weaviate__weaviate/usecases/backup/auth_test.go)<br>[usecases/auth/authorization/authorizer.go](../../../../sources/weaviate__weaviate/usecases/auth/authorization/authorizer.go)<br>[usecases/auth/authorization/controller.go](../../../../sources/weaviate__weaviate/usecases/auth/authorization/controller.go)<br>[usecases/auth/authorization/mock_authorizer.go](../../../../sources/weaviate__weaviate/usecases/auth/authorization/mock_authorizer.go)<br>[usecases/auth/authorization/mock_controller.go](../../../../sources/weaviate__weaviate/usecases/auth/authorization/mock_controller.go) |
| ci | 15 | [tools/ci/gcloud.sh](../../../../sources/weaviate__weaviate/tools/ci/gcloud.sh)<br>[tools/ci/sa.json.gpg](../../../../sources/weaviate__weaviate/tools/ci/sa.json.gpg)<br>[ci/docker_report.md.tpl](../../../../sources/weaviate__weaviate/ci/docker_report.md.tpl)<br>[ci/generate_docker_report.sh](../../../../sources/weaviate__weaviate/ci/generate_docker_report.sh)<br>[ci/push_docker.sh](../../../../sources/weaviate__weaviate/ci/push_docker.sh)<br>[.github/workflows/cleanup.yaml](../../../../sources/weaviate__weaviate/.github/workflows/cleanup.yaml)<br>[.github/workflows/create-cross-functional-issues.yml](../../../../sources/weaviate__weaviate/.github/workflows/create-cross-functional-issues.yml)<br>[.github/workflows/find-duplicates.yaml](../../../../sources/weaviate__weaviate/.github/workflows/find-duplicates.yaml) |
| container | 13 | [docker-compose-auth-test.yml](../../../../sources/weaviate__weaviate/docker-compose-auth-test.yml)<br>[docker-compose-debug.yml](../../../../sources/weaviate__weaviate/docker-compose-debug.yml)<br>[docker-compose-mcp-test.yml](../../../../sources/weaviate__weaviate/docker-compose-mcp-test.yml)<br>[docker-compose-namespaces-test.yml](../../../../sources/weaviate__weaviate/docker-compose-namespaces-test.yml)<br>[docker-compose-readonly-recovery-test.yml](../../../../sources/weaviate__weaviate/docker-compose-readonly-recovery-test.yml)<br>[docker-compose-test.yml](../../../../sources/weaviate__weaviate/docker-compose-test.yml)<br>[docker-compose.yml](../../../../sources/weaviate__weaviate/docker-compose.yml)<br>[Dockerfile](../../../../sources/weaviate__weaviate/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/weaviate__weaviate/CLAUDE.md) |
| docs | 14 | [README.md](../../../../sources/weaviate__weaviate/README.md)<br>[usecases/auth/authorization/docs/auth_calls.md](../../../../sources/weaviate__weaviate/usecases/auth/authorization/docs/auth_calls.md)<br>[usecases/auth/authorization/docs/generator.go](../../../../sources/weaviate__weaviate/usecases/auth/authorization/docs/generator.go)<br>[tools/telemetry-dashboard/README.md](../../../../sources/weaviate__weaviate/tools/telemetry-dashboard/README.md)<br>[tools/dev/README.md](../../../../sources/weaviate__weaviate/tools/dev/README.md)<br>[tools/dev/generate_release_notes/README.md](../../../../sources/weaviate__weaviate/tools/dev/generate_release_notes/README.md)<br>[tools/dev/bench/demo_indexing_mistakes_ui/README.md](../../../../sources/weaviate__weaviate/tools/dev/bench/demo_indexing_mistakes_ui/README.md)<br>[test/README.md](../../../../sources/weaviate__weaviate/test/README.md) |
| config | 6 | [go.mod](../../../../sources/weaviate__weaviate/go.mod)<br>[Makefile](../../../../sources/weaviate__weaviate/Makefile)<br>[pyproject.toml](../../../../sources/weaviate__weaviate/pyproject.toml)<br>[test/benchmark_bm25/go.mod](../../../../sources/weaviate__weaviate/test/benchmark_bm25/go.mod)<br>[test/acceptance_with_python/requirements.txt](../../../../sources/weaviate__weaviate/test/acceptance_with_python/requirements.txt)<br>[test/acceptance_with_go_client/go.mod](../../../../sources/weaviate__weaviate/test/acceptance_with_go_client/go.mod) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1871 | [docker-compose-auth-test.yml](../../../../sources/weaviate__weaviate/docker-compose-auth-test.yml)<br>[docker-compose-mcp-test.yml](../../../../sources/weaviate__weaviate/docker-compose-mcp-test.yml)<br>[docker-compose-namespaces-test.yml](../../../../sources/weaviate__weaviate/docker-compose-namespaces-test.yml)<br>[docker-compose-readonly-recovery-test.yml](../../../../sources/weaviate__weaviate/docker-compose-readonly-recovery-test.yml)<br>[docker-compose-test.yml](../../../../sources/weaviate__weaviate/docker-compose-test.yml)<br>[usecases/vectorizer/combine_test.go](../../../../sources/weaviate__weaviate/usecases/vectorizer/combine_test.go) |
| CI workflows | 15 | [tools/ci/gcloud.sh](../../../../sources/weaviate__weaviate/tools/ci/gcloud.sh)<br>[tools/ci/sa.json.gpg](../../../../sources/weaviate__weaviate/tools/ci/sa.json.gpg)<br>[ci/docker_report.md.tpl](../../../../sources/weaviate__weaviate/ci/docker_report.md.tpl)<br>[ci/generate_docker_report.sh](../../../../sources/weaviate__weaviate/ci/generate_docker_report.sh)<br>[ci/push_docker.sh](../../../../sources/weaviate__weaviate/ci/push_docker.sh)<br>[.github/workflows/cleanup.yaml](../../../../sources/weaviate__weaviate/.github/workflows/cleanup.yaml) |
| Containers / deploy | 13 | [docker-compose-auth-test.yml](../../../../sources/weaviate__weaviate/docker-compose-auth-test.yml)<br>[docker-compose-debug.yml](../../../../sources/weaviate__weaviate/docker-compose-debug.yml)<br>[docker-compose-mcp-test.yml](../../../../sources/weaviate__weaviate/docker-compose-mcp-test.yml)<br>[docker-compose-namespaces-test.yml](../../../../sources/weaviate__weaviate/docker-compose-namespaces-test.yml)<br>[docker-compose-readonly-recovery-test.yml](../../../../sources/weaviate__weaviate/docker-compose-readonly-recovery-test.yml)<br>[docker-compose-test.yml](../../../../sources/weaviate__weaviate/docker-compose-test.yml) |
| Security / policy | 99 | [docker-compose-auth-test.yml](../../../../sources/weaviate__weaviate/docker-compose-auth-test.yml)<br>[usecases/modulecomponents/gcpcommon/auth_broker_test.go](../../../../sources/weaviate__weaviate/usecases/modulecomponents/gcpcommon/auth_broker_test.go)<br>[usecases/modulecomponents/gcpcommon/auth_broker.go](../../../../sources/weaviate__weaviate/usecases/modulecomponents/gcpcommon/auth_broker.go)<br>[usecases/backup/auth_test.go](../../../../sources/weaviate__weaviate/usecases/backup/auth_test.go)<br>[usecases/auth/authorization/authorizer.go](../../../../sources/weaviate__weaviate/usecases/auth/authorization/authorizer.go)<br>[usecases/auth/authorization/controller.go](../../../../sources/weaviate__weaviate/usecases/auth/authorization/controller.go) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/weaviate__weaviate/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `docker-compose-auth-test.yml`, `docker-compose-mcp-test.yml`, `docker-compose-namespaces-test.yml`.
2. Trace execution through entrypoints: `tools/telemetry-dashboard/main.go`, `tools/swagger_custom_code/main.go`, `tools/release_template/main.go`.
3. Map agent/tool runtime through: `usecases/schema/executor_test.go`, `usecases/schema/executor.go`, `tools/.gitignore`.
4. Inspect retrieval/memory/indexing through: `usecases/traverser/near_params_vector_test.go`, `usecases/traverser/near_params_vector.go`, `usecases/traverser/target_vector_param_helper.go`.
5. Verify behavior through test/eval files: `docker-compose-auth-test.yml`, `docker-compose-mcp-test.yml`, `docker-compose-namespaces-test.yml`.

## Existing Repository Insight

평가/관측/품질 관점에서 Local clone structure analysis 4747 files, 807 directories.. 핵심 구조 신호는 pyproject.toml, go.mod, Dockerfile, docker-compose.yml, Makefile, mcp이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 평가/관측/품질 레포입니다. 활용 관점은 quality and evaluation comparison point이고, 후속 확인 포인트는 license metadata missing입니다.
