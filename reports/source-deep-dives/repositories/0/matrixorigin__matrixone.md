# matrixorigin/matrixone Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

AI-native HTAP database with Git-for-Data and built-in vector search, serving as the data and memory backbone for intelligent agents and applications.

## 요약

- 조사 단위: `sources/matrixorigin__matrixone` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 6,458 files, 682 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=test/distributed/resources/vector/ca_specify_answer_dataset.csv, test/distributed/resources/vector/sift128_base_10k_2.csv.gz, test/distributed/resources/vector/sift128_base_10k.csv.gz이고, 의존성 단서는 mcp, langchain, cobra, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | matrixorigin/matrixone |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Go |
| Stars | 1847 |
| Forks | 299 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/matrixorigin__matrixone](../../../../sources/matrixorigin__matrixone) |
| Existing report | [reports/global-trending/repositories/matrixorigin__matrixone.md](../../../global-trending/repositories/matrixorigin__matrixone.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 6458 / 682 |
| Max observed depth | 9 |
| Top directories | .github, cgo, clients, cmd, docs, etc, LICENSES, optools, pkg, proto, test, thirdparties |
| Top extensions | .go: 3389, .result: 1023, .sql: 814, .test: 235, .py: 207, .csv: 129, .parquet: 79, .md: 77, .h: 70, .rst: 53, (none): 50, .toml: 41 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 32 |
| .github | ci surface | 1 |
| cgo | top-level component | 1 |
| clients | source boundary | 1 |
| cmd | source boundary | 1 |
| cmd/mo-dashboard | cmd workspace | 1 |
| cmd/mo-debug | cmd workspace | 1 |
| cmd/mo-inspect | cmd workspace | 1 |
| cmd/mo-service | cmd workspace | 1 |
| cmd/mo-tool | cmd workspace | 1 |
| etc | top-level component | 1 |
| LICENSES | top-level component | 1 |
| optools | top-level component | 1 |
| pkg | top-level component | 1 |
| proto | top-level component | 1 |
| test | validation surface | 1 |
| thirdparties | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | all | make all |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | vendor-build | make vendor-build |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | config | make config |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | generate-pb | make generate-pb |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | pb | make pb |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | cgo | make cgo |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | thirdparties | make thirdparties |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | jieba-dict | make jieba-dict |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build | make build |
| utility | Makefile | .PHONY | make .PHONY |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
| agentFrameworks | langchain |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | cobra |
| observability | prometheus |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [test/distributed/resources/vector/ca_specify_answer_dataset.csv](../../../../sources/matrixorigin__matrixone/test/distributed/resources/vector/ca_specify_answer_dataset.csv) | retrieval signal |
| retrieval | [test/distributed/resources/vector/sift128_base_10k_2.csv.gz](../../../../sources/matrixorigin__matrixone/test/distributed/resources/vector/sift128_base_10k_2.csv.gz) | retrieval signal |
| retrieval | [test/distributed/resources/vector/sift128_base_10k.csv.gz](../../../../sources/matrixorigin__matrixone/test/distributed/resources/vector/sift128_base_10k.csv.gz) | retrieval signal |
| retrieval | [test/distributed/resources/vector/vector.csv](../../../../sources/matrixorigin__matrixone/test/distributed/resources/vector/vector.csv) | retrieval signal |
| entrypoints | [pkg/vm/engine/tae/logtail/service/server.go](../../../../sources/matrixorigin__matrixone/pkg/vm/engine/tae/logtail/service/server.go) | entrypoints signal |
| entrypoints | [pkg/util/trace/impl/motrace/example/main.go](../../../../sources/matrixorigin__matrixone/pkg/util/trace/impl/motrace/example/main.go) | entrypoints signal |
| entrypoints | [pkg/util/status/server.go](../../../../sources/matrixorigin__matrixone/pkg/util/status/server.go) | entrypoints signal |
| entrypoints | [pkg/util/export/example/main.go](../../../../sources/matrixorigin__matrixone/pkg/util/export/example/main.go) | entrypoints signal |
| docs | [README_CN.md](../../../../sources/matrixorigin__matrixone/README_CN.md) | docs signal |
| docs | [README.md](../../../../sources/matrixorigin__matrixone/README.md) | docs signal |
| docs | [test/distributed/cases/README_CN.md](../../../../sources/matrixorigin__matrixone/test/distributed/cases/README_CN.md) | docs signal |
| docs | [test/distributed/cases/README.md](../../../../sources/matrixorigin__matrixone/test/distributed/cases/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 18 | [pkg/vm/engine/tae/logtail/service/server.go](../../../../sources/matrixorigin__matrixone/pkg/vm/engine/tae/logtail/service/server.go)<br>[pkg/util/trace/impl/motrace/example/main.go](../../../../sources/matrixorigin__matrixone/pkg/util/trace/impl/motrace/example/main.go)<br>[pkg/util/status/server.go](../../../../sources/matrixorigin__matrixone/pkg/util/status/server.go)<br>[pkg/util/export/example/main.go](../../../../sources/matrixorigin__matrixone/pkg/util/export/example/main.go)<br>[pkg/udf/pythonservice/pyserver/server.py](../../../../sources/matrixorigin__matrixone/pkg/udf/pythonservice/pyserver/server.py)<br>[pkg/txn/rpc/server.go](../../../../sources/matrixorigin__matrixone/pkg/txn/rpc/server.go)<br>[pkg/sql/colexec/server.go](../../../../sources/matrixorigin__matrixone/pkg/sql/colexec/server.go)<br>[pkg/proxy/server.go](../../../../sources/matrixorigin__matrixone/pkg/proxy/server.go) |
| agentRuntime | 84 | [pkg/vm/engine/tae/rpc/tool_test.go](../../../../sources/matrixorigin__matrixone/pkg/vm/engine/tae/rpc/tool_test.go)<br>[pkg/vm/engine/tae/rpc/tool.go](../../../../sources/matrixorigin__matrixone/pkg/vm/engine/tae/rpc/tool.go)<br>[pkg/vm/engine/tae/logtail/tools.go](../../../../sources/matrixorigin__matrixone/pkg/vm/engine/tae/logtail/tools.go)<br>[pkg/vm/engine/tae/db/merge/executor.go](../../../../sources/matrixorigin__matrixone/pkg/vm/engine/tae/db/merge/executor.go)<br>[pkg/vm/engine/tae/db/gc/v3/executor.go](../../../../sources/matrixorigin__matrixone/pkg/vm/engine/tae/db/gc/v3/executor.go)<br>[pkg/vm/engine/tae/db/checkpoint/executor.go](../../../../sources/matrixorigin__matrixone/pkg/vm/engine/tae/db/checkpoint/executor.go)<br>[pkg/vm/engine/tae/db/checkpoint/runner_test.go](../../../../sources/matrixorigin__matrixone/pkg/vm/engine/tae/db/checkpoint/runner_test.go)<br>[pkg/vm/engine/tae/db/checkpoint/runner.go](../../../../sources/matrixorigin__matrixone/pkg/vm/engine/tae/db/checkpoint/runner.go) |
| mcp | 0 | not obvious |
| retrieval | 236 | [test/distributed/resources/vector/ca_specify_answer_dataset.csv](../../../../sources/matrixorigin__matrixone/test/distributed/resources/vector/ca_specify_answer_dataset.csv)<br>[test/distributed/resources/vector/sift128_base_10k_2.csv.gz](../../../../sources/matrixorigin__matrixone/test/distributed/resources/vector/sift128_base_10k_2.csv.gz)<br>[test/distributed/resources/vector/sift128_base_10k.csv.gz](../../../../sources/matrixorigin__matrixone/test/distributed/resources/vector/sift128_base_10k.csv.gz)<br>[test/distributed/resources/vector/vector.csv](../../../../sources/matrixorigin__matrixone/test/distributed/resources/vector/vector.csv)<br>[test/distributed/resources/load_data/string_to_vector_optional.parq](../../../../sources/matrixorigin__matrixone/test/distributed/resources/load_data/string_to_vector_optional.parq)<br>[test/distributed/resources/load_data/unique_index_duplicate.csv](../../../../sources/matrixorigin__matrixone/test/distributed/resources/load_data/unique_index_duplicate.csv)<br>[test/distributed/resources/load_data/unique_index_file.csv](../../../../sources/matrixorigin__matrixone/test/distributed/resources/load_data/unique_index_file.csv)<br>[test/distributed/cases/vector/vector_func.result](../../../../sources/matrixorigin__matrixone/test/distributed/cases/vector/vector_func.result) |
| spec | 18 | [pkg/udf/pythonservice/pyserver/requirements/base.txt](../../../../sources/matrixorigin__matrixone/pkg/udf/pythonservice/pyserver/requirements/base.txt)<br>[pkg/udf/pythonservice/pyserver/requirements/pytorch.txt](../../../../sources/matrixorigin__matrixone/pkg/udf/pythonservice/pyserver/requirements/pytorch.txt)<br>[pkg/frontend/databranchutils/BRANCH_HASHMAP_DESIGN.md](../../../../sources/matrixorigin__matrixone/pkg/frontend/databranchutils/BRANCH_HASHMAP_DESIGN.md)<br>[docs/rfcs/20211210_aoe_overall_design.md](../../../../sources/matrixorigin__matrixone/docs/rfcs/20211210_aoe_overall_design.md)<br>[docs/rfcs/20220503_tae_design.md](../../../../sources/matrixorigin__matrixone/docs/rfcs/20220503_tae_design.md)<br>[docs/rfcs/view_grant_support_design.md](../../../../sources/matrixorigin__matrixone/docs/rfcs/view_grant_support_design.md)<br>[docs/design/data_branch_pick.md](../../../../sources/matrixorigin__matrixone/docs/design/data_branch_pick.md)<br>[docs/design/data_branch_privilege.md](../../../../sources/matrixorigin__matrixone/docs/design/data_branch_privilege.md) |
| eval | 3914 | [test/distributed/resources/vector/ca_specify_answer_dataset.csv](../../../../sources/matrixorigin__matrixone/test/distributed/resources/vector/ca_specify_answer_dataset.csv)<br>[test/distributed/resources/vector/sift128_base_10k_2.csv.gz](../../../../sources/matrixorigin__matrixone/test/distributed/resources/vector/sift128_base_10k_2.csv.gz)<br>[test/distributed/resources/vector/sift128_base_10k.csv.gz](../../../../sources/matrixorigin__matrixone/test/distributed/resources/vector/sift128_base_10k.csv.gz)<br>[test/distributed/resources/vector/vector.csv](../../../../sources/matrixorigin__matrixone/test/distributed/resources/vector/vector.csv)<br>[test/distributed/resources/plugin/cat.wasm](../../../../sources/matrixorigin__matrixone/test/distributed/resources/plugin/cat.wasm)<br>[test/distributed/resources/plugin/filterStats.wasm](../../../../sources/matrixorigin__matrixone/test/distributed/resources/plugin/filterStats.wasm)<br>[test/distributed/resources/plugin/hello.wasm](../../../../sources/matrixorigin__matrixone/test/distributed/resources/plugin/hello.wasm)<br>[test/distributed/resources/plugin/multistream.json](../../../../sources/matrixorigin__matrixone/test/distributed/resources/plugin/multistream.json) |
| security | 15 | [test/distributed/cases/zz_accesscontrol/grant_view_nested_security.result](../../../../sources/matrixorigin__matrixone/test/distributed/cases/zz_accesscontrol/grant_view_nested_security.result)<br>[test/distributed/cases/zz_accesscontrol/grant_view_nested_security.sql](../../../../sources/matrixorigin__matrixone/test/distributed/cases/zz_accesscontrol/grant_view_nested_security.sql)<br>[test/distributed/cases/security/password.result](../../../../sources/matrixorigin__matrixone/test/distributed/cases/security/password.result)<br>[test/distributed/cases/security/password.sql](../../../../sources/matrixorigin__matrixone/test/distributed/cases/security/password.sql)<br>[test/distributed/cases/function/mo_ctl/mo_ctl_policy.result](../../../../sources/matrixorigin__matrixone/test/distributed/cases/function/mo_ctl/mo_ctl_policy.result)<br>[test/distributed/cases/function/mo_ctl/mo_ctl_policy.test](../../../../sources/matrixorigin__matrixone/test/distributed/cases/function/mo_ctl/mo_ctl_policy.test)<br>[pkg/vm/engine/change_handle_policy_test.go](../../../../sources/matrixorigin__matrixone/pkg/vm/engine/change_handle_policy_test.go)<br>[pkg/vm/engine/change_handle_policy.go](../../../../sources/matrixorigin__matrixone/pkg/vm/engine/change_handle_policy.go) |
| ci | 10 | [clients/python/.github/workflows/compatibility-test.yml](../../../../sources/matrixorigin__matrixone/clients/python/.github/workflows/compatibility-test.yml)<br>[clients/python/.github/workflows/test.yml](../../../../sources/matrixorigin__matrixone/clients/python/.github/workflows/test.yml)<br>[.github/workflows/entrypoint.yaml](../../../../sources/matrixorigin__matrixone/.github/workflows/entrypoint.yaml)<br>[.github/workflows/image-build.yml](../../../../sources/matrixorigin__matrixone/.github/workflows/image-build.yml)<br>[.github/workflows/merge-trigger-standalone.yaml](../../../../sources/matrixorigin__matrixone/.github/workflows/merge-trigger-standalone.yaml)<br>[.github/workflows/merge-trigger-tke.yaml](../../../../sources/matrixorigin__matrixone/.github/workflows/merge-trigger-tke.yaml)<br>[.github/workflows/merge-update-moc.yaml](../../../../sources/matrixorigin__matrixone/.github/workflows/merge-update-moc.yaml)<br>[.github/workflows/release.yml](../../../../sources/matrixorigin__matrixone/.github/workflows/release.yml) |
| container | 10 | [optools/images/Dockerfile](../../../../sources/matrixorigin__matrixone/optools/images/Dockerfile)<br>[optools/images/Dockerfile.dev](../../../../sources/matrixorigin__matrixone/optools/images/Dockerfile.dev)<br>[optools/images/pythonserver/Dockerfile](../../../../sources/matrixorigin__matrixone/optools/images/pythonserver/Dockerfile)<br>[optools/images/gpu/Dockerfile](../../../../sources/matrixorigin__matrixone/optools/images/gpu/Dockerfile)<br>[optools/images/gpu/Dockerfile.dev](../../../../sources/matrixorigin__matrixone/optools/images/gpu/Dockerfile.dev)<br>[optools/compose_bvt/Dockerfile.tester](../../../../sources/matrixorigin__matrixone/optools/compose_bvt/Dockerfile.tester)<br>[optools/bvt_ut/Dockerfile](../../../../sources/matrixorigin__matrixone/optools/bvt_ut/Dockerfile)<br>[etc/launch-tae-compose/compose.yaml](../../../../sources/matrixorigin__matrixone/etc/launch-tae-compose/compose.yaml) |
| instruction | 1 | [.github/copilot-instructions.md](../../../../sources/matrixorigin__matrixone/.github/copilot-instructions.md) |
| docs | 113 | [README_CN.md](../../../../sources/matrixorigin__matrixone/README_CN.md)<br>[README.md](../../../../sources/matrixorigin__matrixone/README.md)<br>[test/distributed/cases/README_CN.md](../../../../sources/matrixorigin__matrixone/test/distributed/cases/README_CN.md)<br>[test/distributed/cases/README.md](../../../../sources/matrixorigin__matrixone/test/distributed/cases/README.md)<br>[test/distributed/cases/geo/README.md](../../../../sources/matrixorigin__matrixone/test/distributed/cases/geo/README.md)<br>[proto/readme.md](../../../../sources/matrixorigin__matrixone/proto/readme.md)<br>[pkg/udf/pythonservice/demo/README_CN.md](../../../../sources/matrixorigin__matrixone/pkg/udf/pythonservice/demo/README_CN.md)<br>[pkg/udf/pythonservice/demo/README.md](../../../../sources/matrixorigin__matrixone/pkg/udf/pythonservice/demo/README.md) |
| config | 22 | [go.mod](../../../../sources/matrixorigin__matrixone/go.mod)<br>[Makefile](../../../../sources/matrixorigin__matrixone/Makefile)<br>[thirdparties/Makefile](../../../../sources/matrixorigin__matrixone/thirdparties/Makefile)<br>[pkg/udf/Makefile](../../../../sources/matrixorigin__matrixone/pkg/udf/Makefile)<br>[pkg/udf/pythonservice/pyserver/requirements/base.txt](../../../../sources/matrixorigin__matrixone/pkg/udf/pythonservice/pyserver/requirements/base.txt)<br>[pkg/udf/pythonservice/pyserver/requirements/pytorch.txt](../../../../sources/matrixorigin__matrixone/pkg/udf/pythonservice/pyserver/requirements/pytorch.txt)<br>[pkg/sql/plan/Makefile](../../../../sources/matrixorigin__matrixone/pkg/sql/plan/Makefile)<br>[pkg/sql/parsers/Makefile](../../../../sources/matrixorigin__matrixone/pkg/sql/parsers/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 3914 | [test/distributed/resources/vector/ca_specify_answer_dataset.csv](../../../../sources/matrixorigin__matrixone/test/distributed/resources/vector/ca_specify_answer_dataset.csv)<br>[test/distributed/resources/vector/sift128_base_10k_2.csv.gz](../../../../sources/matrixorigin__matrixone/test/distributed/resources/vector/sift128_base_10k_2.csv.gz)<br>[test/distributed/resources/vector/sift128_base_10k.csv.gz](../../../../sources/matrixorigin__matrixone/test/distributed/resources/vector/sift128_base_10k.csv.gz)<br>[test/distributed/resources/vector/vector.csv](../../../../sources/matrixorigin__matrixone/test/distributed/resources/vector/vector.csv)<br>[test/distributed/resources/plugin/cat.wasm](../../../../sources/matrixorigin__matrixone/test/distributed/resources/plugin/cat.wasm)<br>[test/distributed/resources/plugin/filterStats.wasm](../../../../sources/matrixorigin__matrixone/test/distributed/resources/plugin/filterStats.wasm) |
| CI workflows | 10 | [clients/python/.github/workflows/compatibility-test.yml](../../../../sources/matrixorigin__matrixone/clients/python/.github/workflows/compatibility-test.yml)<br>[clients/python/.github/workflows/test.yml](../../../../sources/matrixorigin__matrixone/clients/python/.github/workflows/test.yml)<br>[.github/workflows/entrypoint.yaml](../../../../sources/matrixorigin__matrixone/.github/workflows/entrypoint.yaml)<br>[.github/workflows/image-build.yml](../../../../sources/matrixorigin__matrixone/.github/workflows/image-build.yml)<br>[.github/workflows/merge-trigger-standalone.yaml](../../../../sources/matrixorigin__matrixone/.github/workflows/merge-trigger-standalone.yaml)<br>[.github/workflows/merge-trigger-tke.yaml](../../../../sources/matrixorigin__matrixone/.github/workflows/merge-trigger-tke.yaml) |
| Containers / deploy | 10 | [optools/images/Dockerfile](../../../../sources/matrixorigin__matrixone/optools/images/Dockerfile)<br>[optools/images/Dockerfile.dev](../../../../sources/matrixorigin__matrixone/optools/images/Dockerfile.dev)<br>[optools/images/pythonserver/Dockerfile](../../../../sources/matrixorigin__matrixone/optools/images/pythonserver/Dockerfile)<br>[optools/images/gpu/Dockerfile](../../../../sources/matrixorigin__matrixone/optools/images/gpu/Dockerfile)<br>[optools/images/gpu/Dockerfile.dev](../../../../sources/matrixorigin__matrixone/optools/images/gpu/Dockerfile.dev)<br>[optools/compose_bvt/Dockerfile.tester](../../../../sources/matrixorigin__matrixone/optools/compose_bvt/Dockerfile.tester) |
| Security / policy | 15 | [test/distributed/cases/zz_accesscontrol/grant_view_nested_security.result](../../../../sources/matrixorigin__matrixone/test/distributed/cases/zz_accesscontrol/grant_view_nested_security.result)<br>[test/distributed/cases/zz_accesscontrol/grant_view_nested_security.sql](../../../../sources/matrixorigin__matrixone/test/distributed/cases/zz_accesscontrol/grant_view_nested_security.sql)<br>[test/distributed/cases/security/password.result](../../../../sources/matrixorigin__matrixone/test/distributed/cases/security/password.result)<br>[test/distributed/cases/security/password.sql](../../../../sources/matrixorigin__matrixone/test/distributed/cases/security/password.sql)<br>[test/distributed/cases/function/mo_ctl/mo_ctl_policy.result](../../../../sources/matrixorigin__matrixone/test/distributed/cases/function/mo_ctl/mo_ctl_policy.result)<br>[test/distributed/cases/function/mo_ctl/mo_ctl_policy.test](../../../../sources/matrixorigin__matrixone/test/distributed/cases/function/mo_ctl/mo_ctl_policy.test) |
| Agent instructions | 1 | [.github/copilot-instructions.md](../../../../sources/matrixorigin__matrixone/.github/copilot-instructions.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `test/distributed/resources/vector/ca_specify_answer_dataset.csv`, `test/distributed/resources/vector/sift128_base_10k_2.csv.gz`, `test/distributed/resources/vector/sift128_base_10k.csv.gz`.
2. Trace execution through entrypoints: `pkg/vm/engine/tae/logtail/service/server.go`, `pkg/util/trace/impl/motrace/example/main.go`, `pkg/util/status/server.go`.
3. Map agent/tool runtime through: `pkg/vm/engine/tae/rpc/tool_test.go`, `pkg/vm/engine/tae/rpc/tool.go`, `pkg/vm/engine/tae/logtail/tools.go`.
4. Inspect retrieval/memory/indexing through: `test/distributed/resources/vector/ca_specify_answer_dataset.csv`, `test/distributed/resources/vector/sift128_base_10k_2.csv.gz`, `test/distributed/resources/vector/sift128_base_10k.csv.gz`.
5. Verify behavior through test/eval files: `test/distributed/resources/vector/ca_specify_answer_dataset.csv`, `test/distributed/resources/vector/sift128_base_10k_2.csv.gz`, `test/distributed/resources/vector/sift128_base_10k.csv.gz`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 AI native HTAP database with Git for Data and built in vector search, serving as the data and memory backbone for intell. 핵심 구조 신호는 Go, go.mod, Makefile, README.md, LICENSE, langchain이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
