# kakao/varlog 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Scalable distributed log storage for strong consistency, total order, and high availability

## 요약

- 조사 단위: `sources/kakao__varlog` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 564 files, 173 directories, depth score 102, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=internal/benchmark/server/public/index.tmpl이고, 의존성 단서는 mcp, opentelemetry, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | kakao/varlog |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Go |
| Stars | 53 |
| Forks | 7 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/kakao__varlog](../../../../sources/kakao__varlog) |
| 기존 보고서 | [reports/korea-trending/repositories/kakao__varlog.md](../../../korea-trending/repositories/kakao__varlog.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 564 / 173 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .github, bin, cmd, covdata, docs, githooks, internal, pkg, proto, pylib, scripts, testdata, tests |
| 상위 확장자 | .go: 369, (none): 82, .json: 24, .log: 17, .proto: 13, .sst: 12, .py: 11, .md: 9, .sh: 7, .yaml: 4, .ct: 3, .yml: 3 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | opentelemetry, prometheus |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 12 | [pkg/rpc/server.go](../../../../sources/kakao__varlog/pkg/rpc/server.go)<br>[internal/storagenode/pprof/server.go](../../../../sources/kakao__varlog/internal/storagenode/pprof/server.go)<br>[internal/benchmark/server/server.go](../../../../sources/kakao__varlog/internal/benchmark/server/server.go)<br>[internal/admin/server.go](../../../../sources/kakao__varlog/internal/admin/server.go)<br>[cmd/rpc_test_server/main.go](../../../../sources/kakao__varlog/cmd/rpc_test_server/main.go)<br>[bin/start_varlogmr.py](../../../../sources/kakao__varlog/bin/start_varlogmr.py)<br>[bin/start_varlogsn.py](../../../../sources/kakao__varlog/bin/start_varlogsn.py)<br>[bin/vmr.py](../../../../sources/kakao__varlog/bin/vmr.py) |
| agentRuntime | 9 | [pkg/util/runner/runner_test.go](../../../../sources/kakao__varlog/pkg/util/runner/runner_test.go)<br>[pkg/util/runner/runner.go](../../../../sources/kakao__varlog/pkg/util/runner/runner.go)<br>[pkg/util/runner/state_string.go](../../../../sources/kakao__varlog/pkg/util/runner/state_string.go)<br>[pkg/util/runner/stopwaiter/stopwaiter_test.go](../../../../sources/kakao__varlog/pkg/util/runner/stopwaiter/stopwaiter_test.go)<br>[pkg/util/runner/stopwaiter/stopwaiter.go](../../../../sources/kakao__varlog/pkg/util/runner/stopwaiter/stopwaiter.go)<br>[pkg/rpc/interceptors/context_test.go](../../../../sources/kakao__varlog/pkg/rpc/interceptors/context_test.go)<br>[pkg/rpc/interceptors/context.go](../../../../sources/kakao__varlog/pkg/rpc/interceptors/context.go)<br>[internal/storagenode/logstream/executor_test.go](../../../../sources/kakao__varlog/internal/storagenode/logstream/executor_test.go) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [internal/benchmark/server/public/index.tmpl](../../../../sources/kakao__varlog/internal/benchmark/server/public/index.tmpl) |
| spec | 0 | 명확하지 않음 |
| eval | 156 | [tests/marshal_test.go](../../../../sources/kakao__varlog/tests/marshal_test.go)<br>[tests/it/admin_test.go](../../../../sources/kakao__varlog/tests/it/admin_test.go)<br>[tests/it/config.go](../../../../sources/kakao__varlog/tests/it/config.go)<br>[tests/it/testenv_test.go](../../../../sources/kakao__varlog/tests/it/testenv_test.go)<br>[tests/it/testenv.go](../../../../sources/kakao__varlog/tests/it/testenv.go)<br>[tests/it/mrconnector/mr_connector_test.go](../../../../sources/kakao__varlog/tests/it/mrconnector/mr_connector_test.go)<br>[tests/it/management/management_test.go](../../../../sources/kakao__varlog/tests/it/management/management_test.go)<br>[tests/it/management/vms_test.go](../../../../sources/kakao__varlog/tests/it/management/vms_test.go) |
| security | 0 | 명확하지 않음 |
| ci | 4 | [.github/workflows/ci.yaml](../../../../sources/kakao__varlog/.github/workflows/ci.yaml)<br>[.github/workflows/codeql.yml](../../../../sources/kakao__varlog/.github/workflows/codeql.yml)<br>[.github/workflows/containers.yaml](../../../../sources/kakao__varlog/.github/workflows/containers.yaml)<br>[.github/workflows/release.yaml](../../../../sources/kakao__varlog/.github/workflows/release.yaml) |
| container | 8 | [tests/ee/cluster/k8s/cluster.go](../../../../sources/kakao__varlog/tests/ee/cluster/k8s/cluster.go)<br>[tests/ee/cluster/k8s/config.go](../../../../sources/kakao__varlog/tests/ee/cluster/k8s/config.go)<br>[tests/ee/cluster/k8s/vault/vault.go](../../../../sources/kakao__varlog/tests/ee/cluster/k8s/vault/vault.go)<br>[tests/ee/cluster/k8s/podlabel/labels.go](../../../../sources/kakao__varlog/tests/ee/cluster/k8s/podlabel/labels.go)<br>[tests/ee/cluster/k8s/nodelabel/labels.go](../../../../sources/kakao__varlog/tests/ee/cluster/k8s/nodelabel/labels.go)<br>[tests/ee/cluster/k8s/client/client.go](../../../../sources/kakao__varlog/tests/ee/cluster/k8s/client/client.go)<br>[tests/ee/cluster/k8s/client/config.go](../../../../sources/kakao__varlog/tests/ee/cluster/k8s/client/config.go)<br>[tests/ee/cluster/k8s/client/patch.go](../../../../sources/kakao__varlog/tests/ee/cluster/k8s/client/patch.go) |
| instruction | 0 | 명확하지 않음 |
| docs | 4 | [README.md](../../../../sources/kakao__varlog/README.md)<br>[githooks/README.md](../../../../sources/kakao__varlog/githooks/README.md)<br>[docs/benchmark.md](../../../../sources/kakao__varlog/docs/benchmark.md)<br>[docs/RFCs/20220915_commit_context.md](../../../../sources/kakao__varlog/docs/RFCs/20220915_commit_context.md) |
| config | 2 | [go.mod](../../../../sources/kakao__varlog/go.mod)<br>[Makefile](../../../../sources/kakao__varlog/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 156 | [tests/marshal_test.go](../../../../sources/kakao__varlog/tests/marshal_test.go)<br>[tests/it/admin_test.go](../../../../sources/kakao__varlog/tests/it/admin_test.go)<br>[tests/it/config.go](../../../../sources/kakao__varlog/tests/it/config.go)<br>[tests/it/testenv_test.go](../../../../sources/kakao__varlog/tests/it/testenv_test.go)<br>[tests/it/testenv.go](../../../../sources/kakao__varlog/tests/it/testenv.go)<br>[tests/it/mrconnector/mr_connector_test.go](../../../../sources/kakao__varlog/tests/it/mrconnector/mr_connector_test.go) |
| CI workflow | 4 | [.github/workflows/ci.yaml](../../../../sources/kakao__varlog/.github/workflows/ci.yaml)<br>[.github/workflows/codeql.yml](../../../../sources/kakao__varlog/.github/workflows/codeql.yml)<br>[.github/workflows/containers.yaml](../../../../sources/kakao__varlog/.github/workflows/containers.yaml)<br>[.github/workflows/release.yaml](../../../../sources/kakao__varlog/.github/workflows/release.yaml) |
| 컨테이너/배포 | 8 | [tests/ee/cluster/k8s/cluster.go](../../../../sources/kakao__varlog/tests/ee/cluster/k8s/cluster.go)<br>[tests/ee/cluster/k8s/config.go](../../../../sources/kakao__varlog/tests/ee/cluster/k8s/config.go)<br>[tests/ee/cluster/k8s/vault/vault.go](../../../../sources/kakao__varlog/tests/ee/cluster/k8s/vault/vault.go)<br>[tests/ee/cluster/k8s/podlabel/labels.go](../../../../sources/kakao__varlog/tests/ee/cluster/k8s/podlabel/labels.go)<br>[tests/ee/cluster/k8s/nodelabel/labels.go](../../../../sources/kakao__varlog/tests/ee/cluster/k8s/nodelabel/labels.go)<br>[tests/ee/cluster/k8s/client/client.go](../../../../sources/kakao__varlog/tests/ee/cluster/k8s/client/client.go) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `internal/benchmark/server/public/index.tmpl`, `pkg/rpc/server.go`, `internal/storagenode/pprof/server.go`.
2. entrypoint를 따라 실행 흐름 확인: `pkg/rpc/server.go`, `internal/storagenode/pprof/server.go`, `internal/benchmark/server/server.go`.
3. agent/tool runtime 매핑: `pkg/util/runner/runner_test.go`, `pkg/util/runner/runner.go`, `pkg/util/runner/state_string.go`.
4. retrieval/memory/indexing 확인: `internal/benchmark/server/public/index.tmpl`.
5. test/eval 파일로 동작 검증: `tests/marshal_test.go`, `tests/it/admin_test.go`, `tests/it/config.go`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Scalable distributed log storage for strong consistency, total order, and high availability. 핵심 구조 신호는 Go, go.mod, Makefile, README.md, LICENSE, mcp이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
