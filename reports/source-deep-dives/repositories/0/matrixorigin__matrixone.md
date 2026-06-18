# matrixorigin/matrixone 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

AI-native HTAP database with Git-for-Data and built-in vector search, serving as the data and memory backbone for intelligent agents and applications.

## 요약

- 조사 단위: `sources/matrixorigin__matrixone` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 6,458 files, 682 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=test/distributed/resources/vector/ca_specify_answer_dataset.csv, test/distributed/resources/vector/sift128_base_10k_2.csv.gz, test/distributed/resources/vector/sift128_base_10k.csv.gz이고, 의존성 단서는 mcp, langchain, cobra, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | matrixorigin/matrixone |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Go |
| Stars | 1847 |
| Forks | 299 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/matrixorigin__matrixone](../../../../sources/matrixorigin__matrixone) |
| 기존 보고서 | [reports/global-trending/repositories/matrixorigin__matrixone.md](../../../global-trending/repositories/matrixorigin__matrixone.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 6458 / 682 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .github, cgo, clients, cmd, docs, etc, LICENSES, optools, pkg, proto, test, thirdparties |
| 상위 확장자 | .go: 3389, .result: 1023, .sql: 814, .test: 235, .py: 207, .csv: 129, .parquet: 79, .md: 77, .h: 70, .rst: 53, (none): 50, .toml: 41 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
| agentFrameworks | langchain |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | cobra |
| observability | prometheus |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 18 | [pkg/vm/engine/tae/logtail/service/server.go](../../../../sources/matrixorigin__matrixone/pkg/vm/engine/tae/logtail/service/server.go)<br>[pkg/util/trace/impl/motrace/example/main.go](../../../../sources/matrixorigin__matrixone/pkg/util/trace/impl/motrace/example/main.go)<br>[pkg/util/status/server.go](../../../../sources/matrixorigin__matrixone/pkg/util/status/server.go)<br>[pkg/util/export/example/main.go](../../../../sources/matrixorigin__matrixone/pkg/util/export/example/main.go)<br>[pkg/udf/pythonservice/pyserver/server.py](../../../../sources/matrixorigin__matrixone/pkg/udf/pythonservice/pyserver/server.py)<br>[pkg/txn/rpc/server.go](../../../../sources/matrixorigin__matrixone/pkg/txn/rpc/server.go)<br>[pkg/sql/colexec/server.go](../../../../sources/matrixorigin__matrixone/pkg/sql/colexec/server.go)<br>[pkg/proxy/server.go](../../../../sources/matrixorigin__matrixone/pkg/proxy/server.go) |
| agentRuntime | 84 | [pkg/vm/engine/tae/rpc/tool_test.go](../../../../sources/matrixorigin__matrixone/pkg/vm/engine/tae/rpc/tool_test.go)<br>[pkg/vm/engine/tae/rpc/tool.go](../../../../sources/matrixorigin__matrixone/pkg/vm/engine/tae/rpc/tool.go)<br>[pkg/vm/engine/tae/logtail/tools.go](../../../../sources/matrixorigin__matrixone/pkg/vm/engine/tae/logtail/tools.go)<br>[pkg/vm/engine/tae/db/merge/executor.go](../../../../sources/matrixorigin__matrixone/pkg/vm/engine/tae/db/merge/executor.go)<br>[pkg/vm/engine/tae/db/gc/v3/executor.go](../../../../sources/matrixorigin__matrixone/pkg/vm/engine/tae/db/gc/v3/executor.go)<br>[pkg/vm/engine/tae/db/checkpoint/executor.go](../../../../sources/matrixorigin__matrixone/pkg/vm/engine/tae/db/checkpoint/executor.go)<br>[pkg/vm/engine/tae/db/checkpoint/runner_test.go](../../../../sources/matrixorigin__matrixone/pkg/vm/engine/tae/db/checkpoint/runner_test.go)<br>[pkg/vm/engine/tae/db/checkpoint/runner.go](../../../../sources/matrixorigin__matrixone/pkg/vm/engine/tae/db/checkpoint/runner.go) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 236 | [test/distributed/resources/vector/ca_specify_answer_dataset.csv](../../../../sources/matrixorigin__matrixone/test/distributed/resources/vector/ca_specify_answer_dataset.csv)<br>[test/distributed/resources/vector/sift128_base_10k_2.csv.gz](../../../../sources/matrixorigin__matrixone/test/distributed/resources/vector/sift128_base_10k_2.csv.gz)<br>[test/distributed/resources/vector/sift128_base_10k.csv.gz](../../../../sources/matrixorigin__matrixone/test/distributed/resources/vector/sift128_base_10k.csv.gz)<br>[test/distributed/resources/vector/vector.csv](../../../../sources/matrixorigin__matrixone/test/distributed/resources/vector/vector.csv)<br>[test/distributed/resources/load_data/string_to_vector_optional.parq](../../../../sources/matrixorigin__matrixone/test/distributed/resources/load_data/string_to_vector_optional.parq)<br>[test/distributed/resources/load_data/unique_index_duplicate.csv](../../../../sources/matrixorigin__matrixone/test/distributed/resources/load_data/unique_index_duplicate.csv)<br>[test/distributed/resources/load_data/unique_index_file.csv](../../../../sources/matrixorigin__matrixone/test/distributed/resources/load_data/unique_index_file.csv)<br>[test/distributed/cases/vector/vector_func.result](../../../../sources/matrixorigin__matrixone/test/distributed/cases/vector/vector_func.result) |
| spec | 18 | [pkg/udf/pythonservice/pyserver/requirements/base.txt](../../../../sources/matrixorigin__matrixone/pkg/udf/pythonservice/pyserver/requirements/base.txt)<br>[pkg/udf/pythonservice/pyserver/requirements/pytorch.txt](../../../../sources/matrixorigin__matrixone/pkg/udf/pythonservice/pyserver/requirements/pytorch.txt)<br>[pkg/frontend/databranchutils/BRANCH_HASHMAP_DESIGN.md](../../../../sources/matrixorigin__matrixone/pkg/frontend/databranchutils/BRANCH_HASHMAP_DESIGN.md)<br>[docs/rfcs/20211210_aoe_overall_design.md](../../../../sources/matrixorigin__matrixone/docs/rfcs/20211210_aoe_overall_design.md)<br>[docs/rfcs/20220503_tae_design.md](../../../../sources/matrixorigin__matrixone/docs/rfcs/20220503_tae_design.md)<br>[docs/rfcs/view_grant_support_design.md](../../../../sources/matrixorigin__matrixone/docs/rfcs/view_grant_support_design.md)<br>[docs/design/data_branch_pick.md](../../../../sources/matrixorigin__matrixone/docs/design/data_branch_pick.md)<br>[docs/design/data_branch_privilege.md](../../../../sources/matrixorigin__matrixone/docs/design/data_branch_privilege.md) |
| eval | 3914 | [test/distributed/resources/vector/ca_specify_answer_dataset.csv](../../../../sources/matrixorigin__matrixone/test/distributed/resources/vector/ca_specify_answer_dataset.csv)<br>[test/distributed/resources/vector/sift128_base_10k_2.csv.gz](../../../../sources/matrixorigin__matrixone/test/distributed/resources/vector/sift128_base_10k_2.csv.gz)<br>[test/distributed/resources/vector/sift128_base_10k.csv.gz](../../../../sources/matrixorigin__matrixone/test/distributed/resources/vector/sift128_base_10k.csv.gz)<br>[test/distributed/resources/vector/vector.csv](../../../../sources/matrixorigin__matrixone/test/distributed/resources/vector/vector.csv)<br>[test/distributed/resources/plugin/cat.wasm](../../../../sources/matrixorigin__matrixone/test/distributed/resources/plugin/cat.wasm)<br>[test/distributed/resources/plugin/filterStats.wasm](../../../../sources/matrixorigin__matrixone/test/distributed/resources/plugin/filterStats.wasm)<br>[test/distributed/resources/plugin/hello.wasm](../../../../sources/matrixorigin__matrixone/test/distributed/resources/plugin/hello.wasm)<br>[test/distributed/resources/plugin/multistream.json](../../../../sources/matrixorigin__matrixone/test/distributed/resources/plugin/multistream.json) |
| security | 15 | [test/distributed/cases/zz_accesscontrol/grant_view_nested_security.result](../../../../sources/matrixorigin__matrixone/test/distributed/cases/zz_accesscontrol/grant_view_nested_security.result)<br>[test/distributed/cases/zz_accesscontrol/grant_view_nested_security.sql](../../../../sources/matrixorigin__matrixone/test/distributed/cases/zz_accesscontrol/grant_view_nested_security.sql)<br>[test/distributed/cases/security/password.result](../../../../sources/matrixorigin__matrixone/test/distributed/cases/security/password.result)<br>[test/distributed/cases/security/password.sql](../../../../sources/matrixorigin__matrixone/test/distributed/cases/security/password.sql)<br>[test/distributed/cases/function/mo_ctl/mo_ctl_policy.result](../../../../sources/matrixorigin__matrixone/test/distributed/cases/function/mo_ctl/mo_ctl_policy.result)<br>[test/distributed/cases/function/mo_ctl/mo_ctl_policy.test](../../../../sources/matrixorigin__matrixone/test/distributed/cases/function/mo_ctl/mo_ctl_policy.test)<br>[pkg/vm/engine/change_handle_policy_test.go](../../../../sources/matrixorigin__matrixone/pkg/vm/engine/change_handle_policy_test.go)<br>[pkg/vm/engine/change_handle_policy.go](../../../../sources/matrixorigin__matrixone/pkg/vm/engine/change_handle_policy.go) |
| ci | 10 | [clients/python/.github/workflows/compatibility-test.yml](../../../../sources/matrixorigin__matrixone/clients/python/.github/workflows/compatibility-test.yml)<br>[clients/python/.github/workflows/test.yml](../../../../sources/matrixorigin__matrixone/clients/python/.github/workflows/test.yml)<br>[.github/workflows/entrypoint.yaml](../../../../sources/matrixorigin__matrixone/.github/workflows/entrypoint.yaml)<br>[.github/workflows/image-build.yml](../../../../sources/matrixorigin__matrixone/.github/workflows/image-build.yml)<br>[.github/workflows/merge-trigger-standalone.yaml](../../../../sources/matrixorigin__matrixone/.github/workflows/merge-trigger-standalone.yaml)<br>[.github/workflows/merge-trigger-tke.yaml](../../../../sources/matrixorigin__matrixone/.github/workflows/merge-trigger-tke.yaml)<br>[.github/workflows/merge-update-moc.yaml](../../../../sources/matrixorigin__matrixone/.github/workflows/merge-update-moc.yaml)<br>[.github/workflows/release.yml](../../../../sources/matrixorigin__matrixone/.github/workflows/release.yml) |
| container | 10 | [optools/images/Dockerfile](../../../../sources/matrixorigin__matrixone/optools/images/Dockerfile)<br>[optools/images/Dockerfile.dev](../../../../sources/matrixorigin__matrixone/optools/images/Dockerfile.dev)<br>[optools/images/pythonserver/Dockerfile](../../../../sources/matrixorigin__matrixone/optools/images/pythonserver/Dockerfile)<br>[optools/images/gpu/Dockerfile](../../../../sources/matrixorigin__matrixone/optools/images/gpu/Dockerfile)<br>[optools/images/gpu/Dockerfile.dev](../../../../sources/matrixorigin__matrixone/optools/images/gpu/Dockerfile.dev)<br>[optools/compose_bvt/Dockerfile.tester](../../../../sources/matrixorigin__matrixone/optools/compose_bvt/Dockerfile.tester)<br>[optools/bvt_ut/Dockerfile](../../../../sources/matrixorigin__matrixone/optools/bvt_ut/Dockerfile)<br>[etc/launch-tae-compose/compose.yaml](../../../../sources/matrixorigin__matrixone/etc/launch-tae-compose/compose.yaml) |
| instruction | 1 | [.github/copilot-instructions.md](../../../../sources/matrixorigin__matrixone/.github/copilot-instructions.md) |
| docs | 113 | [README_CN.md](../../../../sources/matrixorigin__matrixone/README_CN.md)<br>[README.md](../../../../sources/matrixorigin__matrixone/README.md)<br>[test/distributed/cases/README_CN.md](../../../../sources/matrixorigin__matrixone/test/distributed/cases/README_CN.md)<br>[test/distributed/cases/README.md](../../../../sources/matrixorigin__matrixone/test/distributed/cases/README.md)<br>[test/distributed/cases/geo/README.md](../../../../sources/matrixorigin__matrixone/test/distributed/cases/geo/README.md)<br>[proto/readme.md](../../../../sources/matrixorigin__matrixone/proto/readme.md)<br>[pkg/udf/pythonservice/demo/README_CN.md](../../../../sources/matrixorigin__matrixone/pkg/udf/pythonservice/demo/README_CN.md)<br>[pkg/udf/pythonservice/demo/README.md](../../../../sources/matrixorigin__matrixone/pkg/udf/pythonservice/demo/README.md) |
| config | 22 | [go.mod](../../../../sources/matrixorigin__matrixone/go.mod)<br>[Makefile](../../../../sources/matrixorigin__matrixone/Makefile)<br>[thirdparties/Makefile](../../../../sources/matrixorigin__matrixone/thirdparties/Makefile)<br>[pkg/udf/Makefile](../../../../sources/matrixorigin__matrixone/pkg/udf/Makefile)<br>[pkg/udf/pythonservice/pyserver/requirements/base.txt](../../../../sources/matrixorigin__matrixone/pkg/udf/pythonservice/pyserver/requirements/base.txt)<br>[pkg/udf/pythonservice/pyserver/requirements/pytorch.txt](../../../../sources/matrixorigin__matrixone/pkg/udf/pythonservice/pyserver/requirements/pytorch.txt)<br>[pkg/sql/plan/Makefile](../../../../sources/matrixorigin__matrixone/pkg/sql/plan/Makefile)<br>[pkg/sql/parsers/Makefile](../../../../sources/matrixorigin__matrixone/pkg/sql/parsers/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 3914 | [test/distributed/resources/vector/ca_specify_answer_dataset.csv](../../../../sources/matrixorigin__matrixone/test/distributed/resources/vector/ca_specify_answer_dataset.csv)<br>[test/distributed/resources/vector/sift128_base_10k_2.csv.gz](../../../../sources/matrixorigin__matrixone/test/distributed/resources/vector/sift128_base_10k_2.csv.gz)<br>[test/distributed/resources/vector/sift128_base_10k.csv.gz](../../../../sources/matrixorigin__matrixone/test/distributed/resources/vector/sift128_base_10k.csv.gz)<br>[test/distributed/resources/vector/vector.csv](../../../../sources/matrixorigin__matrixone/test/distributed/resources/vector/vector.csv)<br>[test/distributed/resources/plugin/cat.wasm](../../../../sources/matrixorigin__matrixone/test/distributed/resources/plugin/cat.wasm)<br>[test/distributed/resources/plugin/filterStats.wasm](../../../../sources/matrixorigin__matrixone/test/distributed/resources/plugin/filterStats.wasm) |
| CI workflow | 10 | [clients/python/.github/workflows/compatibility-test.yml](../../../../sources/matrixorigin__matrixone/clients/python/.github/workflows/compatibility-test.yml)<br>[clients/python/.github/workflows/test.yml](../../../../sources/matrixorigin__matrixone/clients/python/.github/workflows/test.yml)<br>[.github/workflows/entrypoint.yaml](../../../../sources/matrixorigin__matrixone/.github/workflows/entrypoint.yaml)<br>[.github/workflows/image-build.yml](../../../../sources/matrixorigin__matrixone/.github/workflows/image-build.yml)<br>[.github/workflows/merge-trigger-standalone.yaml](../../../../sources/matrixorigin__matrixone/.github/workflows/merge-trigger-standalone.yaml)<br>[.github/workflows/merge-trigger-tke.yaml](../../../../sources/matrixorigin__matrixone/.github/workflows/merge-trigger-tke.yaml) |
| 컨테이너/배포 | 10 | [optools/images/Dockerfile](../../../../sources/matrixorigin__matrixone/optools/images/Dockerfile)<br>[optools/images/Dockerfile.dev](../../../../sources/matrixorigin__matrixone/optools/images/Dockerfile.dev)<br>[optools/images/pythonserver/Dockerfile](../../../../sources/matrixorigin__matrixone/optools/images/pythonserver/Dockerfile)<br>[optools/images/gpu/Dockerfile](../../../../sources/matrixorigin__matrixone/optools/images/gpu/Dockerfile)<br>[optools/images/gpu/Dockerfile.dev](../../../../sources/matrixorigin__matrixone/optools/images/gpu/Dockerfile.dev)<br>[optools/compose_bvt/Dockerfile.tester](../../../../sources/matrixorigin__matrixone/optools/compose_bvt/Dockerfile.tester) |
| 보안/정책 | 15 | [test/distributed/cases/zz_accesscontrol/grant_view_nested_security.result](../../../../sources/matrixorigin__matrixone/test/distributed/cases/zz_accesscontrol/grant_view_nested_security.result)<br>[test/distributed/cases/zz_accesscontrol/grant_view_nested_security.sql](../../../../sources/matrixorigin__matrixone/test/distributed/cases/zz_accesscontrol/grant_view_nested_security.sql)<br>[test/distributed/cases/security/password.result](../../../../sources/matrixorigin__matrixone/test/distributed/cases/security/password.result)<br>[test/distributed/cases/security/password.sql](../../../../sources/matrixorigin__matrixone/test/distributed/cases/security/password.sql)<br>[test/distributed/cases/function/mo_ctl/mo_ctl_policy.result](../../../../sources/matrixorigin__matrixone/test/distributed/cases/function/mo_ctl/mo_ctl_policy.result)<br>[test/distributed/cases/function/mo_ctl/mo_ctl_policy.test](../../../../sources/matrixorigin__matrixone/test/distributed/cases/function/mo_ctl/mo_ctl_policy.test) |
| 에이전트 지시문 | 1 | [.github/copilot-instructions.md](../../../../sources/matrixorigin__matrixone/.github/copilot-instructions.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `test/distributed/resources/vector/ca_specify_answer_dataset.csv`, `test/distributed/resources/vector/sift128_base_10k_2.csv.gz`, `test/distributed/resources/vector/sift128_base_10k.csv.gz`.
2. entrypoint를 따라 실행 흐름 확인: `pkg/vm/engine/tae/logtail/service/server.go`, `pkg/util/trace/impl/motrace/example/main.go`, `pkg/util/status/server.go`.
3. agent/tool runtime 매핑: `pkg/vm/engine/tae/rpc/tool_test.go`, `pkg/vm/engine/tae/rpc/tool.go`, `pkg/vm/engine/tae/logtail/tools.go`.
4. retrieval/memory/indexing 확인: `test/distributed/resources/vector/ca_specify_answer_dataset.csv`, `test/distributed/resources/vector/sift128_base_10k_2.csv.gz`, `test/distributed/resources/vector/sift128_base_10k.csv.gz`.
5. test/eval 파일로 동작 검증: `test/distributed/resources/vector/ca_specify_answer_dataset.csv`, `test/distributed/resources/vector/sift128_base_10k_2.csv.gz`, `test/distributed/resources/vector/sift128_base_10k.csv.gz`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 AI native HTAP database with Git for Data and built in vector search, serving as the data and memory backbone for intell. 핵심 구조 신호는 Go, go.mod, Makefile, README.md, LICENSE, langchain이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
