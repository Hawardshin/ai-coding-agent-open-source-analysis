# kakao/varlog Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Scalable distributed log storage for strong consistency, total order, and high availability

## 요약

- 조사 단위: `sources/kakao__varlog` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 564 files, 173 directories, depth score 108, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=internal/benchmark/server/public/index.tmpl이고, 의존성 단서는 mcp, opentelemetry, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | kakao/varlog |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Go |
| Stars | 53 |
| Forks | 7 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/kakao__varlog](../../../../sources/kakao__varlog) |
| Existing report | [reports/korea-trending/repositories/kakao__varlog.md](../../../korea-trending/repositories/kakao__varlog.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 564 / 173 |
| Max observed depth | 8 |
| Top directories | .github, bin, cmd, covdata, docs, githooks, internal, pkg, proto, pylib, scripts, testdata, tests |
| Top extensions | .go: 369, (none): 82, .json: 24, .log: 17, .proto: 13, .sst: 12, .py: 11, .md: 9, .sh: 7, .yaml: 4, .ct: 3, .yml: 3 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 49 |
| docs | documentation surface | 3 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| cmd | source boundary | 1 |
| cmd/rpc_test_server | cmd workspace | 1 |
| covdata | top-level component | 1 |
| githooks | top-level component | 1 |
| internal | top-level component | 1 |
| pkg | top-level component | 1 |
| proto | top-level component | 1 |
| pylib | source boundary | 1 |
| scripts | top-level component | 1 |
| testdata | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | all | make all |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | precommit | make precommit |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build | make build |
| utility | Makefile | varlogmr | make varlogmr |
| utility | Makefile | varlogadm | make varlogadm |
| utility | Makefile | varlogsn | make varlogsn |
| utility | Makefile | varlogctl | make varlogctl |
| utility | Makefile | varlogcli | make varlogcli |
| utility | Makefile | mrtool | make mrtool |
| utility | Makefile | benchmark | make benchmark |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | test | make test |
| test | Makefile | test_coverage | make test_coverage |
| test | Makefile | generate_coverage_profile | make generate_coverage_profile |
| test | Makefile | test_e2e_local_coverage | make test_e2e_local_coverage |
| test | Makefile | test_e2e_local | make test_e2e_local |
| test | Makefile | test_e2e_k8s | make test_e2e_k8s |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | opentelemetry, prometheus |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [internal/benchmark/server/public/index.tmpl](../../../../sources/kakao__varlog/internal/benchmark/server/public/index.tmpl) | retrieval signal |
| entrypoints | [pkg/rpc/server.go](../../../../sources/kakao__varlog/pkg/rpc/server.go) | entrypoints signal |
| entrypoints | [internal/storagenode/pprof/server.go](../../../../sources/kakao__varlog/internal/storagenode/pprof/server.go) | entrypoints signal |
| entrypoints | [internal/benchmark/server/server.go](../../../../sources/kakao__varlog/internal/benchmark/server/server.go) | entrypoints signal |
| entrypoints | [internal/admin/server.go](../../../../sources/kakao__varlog/internal/admin/server.go) | entrypoints signal |
| docs | [README.md](../../../../sources/kakao__varlog/README.md) | docs signal |
| docs | [githooks/README.md](../../../../sources/kakao__varlog/githooks/README.md) | docs signal |
| docs | [docs/benchmark.md](../../../../sources/kakao__varlog/docs/benchmark.md) | docs signal |
| docs | [docs/RFCs/20220915_commit_context.md](../../../../sources/kakao__varlog/docs/RFCs/20220915_commit_context.md) | docs signal |
| eval | [tests/marshal_test.go](../../../../sources/kakao__varlog/tests/marshal_test.go) | eval signal |
| eval | [tests/it/admin_test.go](../../../../sources/kakao__varlog/tests/it/admin_test.go) | eval signal |
| eval | [tests/it/config.go](../../../../sources/kakao__varlog/tests/it/config.go) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 12 | [pkg/rpc/server.go](../../../../sources/kakao__varlog/pkg/rpc/server.go)<br>[internal/storagenode/pprof/server.go](../../../../sources/kakao__varlog/internal/storagenode/pprof/server.go)<br>[internal/benchmark/server/server.go](../../../../sources/kakao__varlog/internal/benchmark/server/server.go)<br>[internal/admin/server.go](../../../../sources/kakao__varlog/internal/admin/server.go)<br>[cmd/rpc_test_server/main.go](../../../../sources/kakao__varlog/cmd/rpc_test_server/main.go)<br>[bin/start_varlogmr.py](../../../../sources/kakao__varlog/bin/start_varlogmr.py)<br>[bin/start_varlogsn.py](../../../../sources/kakao__varlog/bin/start_varlogsn.py)<br>[bin/vmr.py](../../../../sources/kakao__varlog/bin/vmr.py) |
| agentRuntime | 9 | [pkg/util/runner/runner_test.go](../../../../sources/kakao__varlog/pkg/util/runner/runner_test.go)<br>[pkg/util/runner/runner.go](../../../../sources/kakao__varlog/pkg/util/runner/runner.go)<br>[pkg/util/runner/state_string.go](../../../../sources/kakao__varlog/pkg/util/runner/state_string.go)<br>[pkg/util/runner/stopwaiter/stopwaiter_test.go](../../../../sources/kakao__varlog/pkg/util/runner/stopwaiter/stopwaiter_test.go)<br>[pkg/util/runner/stopwaiter/stopwaiter.go](../../../../sources/kakao__varlog/pkg/util/runner/stopwaiter/stopwaiter.go)<br>[pkg/rpc/interceptors/context_test.go](../../../../sources/kakao__varlog/pkg/rpc/interceptors/context_test.go)<br>[pkg/rpc/interceptors/context.go](../../../../sources/kakao__varlog/pkg/rpc/interceptors/context.go)<br>[internal/storagenode/logstream/executor_test.go](../../../../sources/kakao__varlog/internal/storagenode/logstream/executor_test.go) |
| mcp | 0 | not obvious |
| retrieval | 1 | [internal/benchmark/server/public/index.tmpl](../../../../sources/kakao__varlog/internal/benchmark/server/public/index.tmpl) |
| spec | 0 | not obvious |
| eval | 156 | [tests/marshal_test.go](../../../../sources/kakao__varlog/tests/marshal_test.go)<br>[tests/it/admin_test.go](../../../../sources/kakao__varlog/tests/it/admin_test.go)<br>[tests/it/config.go](../../../../sources/kakao__varlog/tests/it/config.go)<br>[tests/it/testenv_test.go](../../../../sources/kakao__varlog/tests/it/testenv_test.go)<br>[tests/it/testenv.go](../../../../sources/kakao__varlog/tests/it/testenv.go)<br>[tests/it/mrconnector/mr_connector_test.go](../../../../sources/kakao__varlog/tests/it/mrconnector/mr_connector_test.go)<br>[tests/it/management/management_test.go](../../../../sources/kakao__varlog/tests/it/management/management_test.go)<br>[tests/it/management/vms_test.go](../../../../sources/kakao__varlog/tests/it/management/vms_test.go) |
| security | 0 | not obvious |
| ci | 4 | [.github/workflows/ci.yaml](../../../../sources/kakao__varlog/.github/workflows/ci.yaml)<br>[.github/workflows/codeql.yml](../../../../sources/kakao__varlog/.github/workflows/codeql.yml)<br>[.github/workflows/containers.yaml](../../../../sources/kakao__varlog/.github/workflows/containers.yaml)<br>[.github/workflows/release.yaml](../../../../sources/kakao__varlog/.github/workflows/release.yaml) |
| container | 8 | [tests/ee/cluster/k8s/cluster.go](../../../../sources/kakao__varlog/tests/ee/cluster/k8s/cluster.go)<br>[tests/ee/cluster/k8s/config.go](../../../../sources/kakao__varlog/tests/ee/cluster/k8s/config.go)<br>[tests/ee/cluster/k8s/vault/vault.go](../../../../sources/kakao__varlog/tests/ee/cluster/k8s/vault/vault.go)<br>[tests/ee/cluster/k8s/podlabel/labels.go](../../../../sources/kakao__varlog/tests/ee/cluster/k8s/podlabel/labels.go)<br>[tests/ee/cluster/k8s/nodelabel/labels.go](../../../../sources/kakao__varlog/tests/ee/cluster/k8s/nodelabel/labels.go)<br>[tests/ee/cluster/k8s/client/client.go](../../../../sources/kakao__varlog/tests/ee/cluster/k8s/client/client.go)<br>[tests/ee/cluster/k8s/client/config.go](../../../../sources/kakao__varlog/tests/ee/cluster/k8s/client/config.go)<br>[tests/ee/cluster/k8s/client/patch.go](../../../../sources/kakao__varlog/tests/ee/cluster/k8s/client/patch.go) |
| instruction | 0 | not obvious |
| docs | 4 | [README.md](../../../../sources/kakao__varlog/README.md)<br>[githooks/README.md](../../../../sources/kakao__varlog/githooks/README.md)<br>[docs/benchmark.md](../../../../sources/kakao__varlog/docs/benchmark.md)<br>[docs/RFCs/20220915_commit_context.md](../../../../sources/kakao__varlog/docs/RFCs/20220915_commit_context.md) |
| config | 2 | [go.mod](../../../../sources/kakao__varlog/go.mod)<br>[Makefile](../../../../sources/kakao__varlog/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 156 | [tests/marshal_test.go](../../../../sources/kakao__varlog/tests/marshal_test.go)<br>[tests/it/admin_test.go](../../../../sources/kakao__varlog/tests/it/admin_test.go)<br>[tests/it/config.go](../../../../sources/kakao__varlog/tests/it/config.go)<br>[tests/it/testenv_test.go](../../../../sources/kakao__varlog/tests/it/testenv_test.go)<br>[tests/it/testenv.go](../../../../sources/kakao__varlog/tests/it/testenv.go)<br>[tests/it/mrconnector/mr_connector_test.go](../../../../sources/kakao__varlog/tests/it/mrconnector/mr_connector_test.go) |
| CI workflows | 4 | [.github/workflows/ci.yaml](../../../../sources/kakao__varlog/.github/workflows/ci.yaml)<br>[.github/workflows/codeql.yml](../../../../sources/kakao__varlog/.github/workflows/codeql.yml)<br>[.github/workflows/containers.yaml](../../../../sources/kakao__varlog/.github/workflows/containers.yaml)<br>[.github/workflows/release.yaml](../../../../sources/kakao__varlog/.github/workflows/release.yaml) |
| Containers / deploy | 8 | [tests/ee/cluster/k8s/cluster.go](../../../../sources/kakao__varlog/tests/ee/cluster/k8s/cluster.go)<br>[tests/ee/cluster/k8s/config.go](../../../../sources/kakao__varlog/tests/ee/cluster/k8s/config.go)<br>[tests/ee/cluster/k8s/vault/vault.go](../../../../sources/kakao__varlog/tests/ee/cluster/k8s/vault/vault.go)<br>[tests/ee/cluster/k8s/podlabel/labels.go](../../../../sources/kakao__varlog/tests/ee/cluster/k8s/podlabel/labels.go)<br>[tests/ee/cluster/k8s/nodelabel/labels.go](../../../../sources/kakao__varlog/tests/ee/cluster/k8s/nodelabel/labels.go)<br>[tests/ee/cluster/k8s/client/client.go](../../../../sources/kakao__varlog/tests/ee/cluster/k8s/client/client.go) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `internal/benchmark/server/public/index.tmpl`, `pkg/rpc/server.go`, `internal/storagenode/pprof/server.go`.
2. Trace execution through entrypoints: `pkg/rpc/server.go`, `internal/storagenode/pprof/server.go`, `internal/benchmark/server/server.go`.
3. Map agent/tool runtime through: `pkg/util/runner/runner_test.go`, `pkg/util/runner/runner.go`, `pkg/util/runner/state_string.go`.
4. Inspect retrieval/memory/indexing through: `internal/benchmark/server/public/index.tmpl`.
5. Verify behavior through test/eval files: `tests/marshal_test.go`, `tests/it/admin_test.go`, `tests/it/config.go`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Scalable distributed log storage for strong consistency, total order, and high availability. 핵심 구조 신호는 Go, go.mod, Makefile, README.md, LICENSE, mcp이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
