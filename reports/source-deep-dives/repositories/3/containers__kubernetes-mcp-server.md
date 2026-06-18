# containers/kubernetes-mcp-server Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Model Context Protocol (MCP) server for Kubernetes and OpenShift

## 요약

- 조사 단위: `sources/containers__kubernetes-mcp-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 616 files, 198 directories, depth score 123, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=server.json, python/kubernetes_mcp_server/__main__.py, npm/kubernetes-mcp-server/bin/index.js이고, 의존성 단서는 mcp, modelcontextprotocol, cobra, opentelemetry, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | containers/kubernetes-mcp-server |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | Go |
| Stars | 1699 |
| Forks | 365 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/containers__kubernetes-mcp-server](../../../../sources/containers__kubernetes-mcp-server) |
| Existing report | [reports/global-trending/repositories/containers__kubernetes-mcp-server.md](../../../global-trending/repositories/containers__kubernetes-mcp-server.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 616 / 198 |
| Max observed depth | 6 |
| Top directories | .github, charts, cmd, dev, docs, evals, hack, internal, npm, pkg, python |
| Top extensions | .go: 278, .yaml: 161, .sh: 93, .json: 28, .md: 27, (none): 8, .py: 4, .toml: 4, .png: 3, .jpg: 2, .yml: 2, .gotmpl: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 19 |
| .github | ci surface | 1 |
| charts | top-level component | 1 |
| cmd | source boundary | 1 |
| cmd/kubernetes-mcp-server | cmd workspace | 1 |
| dev | top-level component | 1 |
| evals | top-level component | 1 |
| hack | top-level component | 1 |
| internal | top-level component | 1 |
| npm | top-level component | 1 |
| pkg | top-level component | 1 |
| python | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | clean | make clean |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build | make build |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build-multiarch | make build-multiarch |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build-all-platforms | make build-all-platforms |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | test | make test |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | test-update-snapshots | make test-update-snapshots |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | format | make format |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | tidy | make tidy |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | golangci-lint | make golangci-lint |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp, modelcontextprotocol |
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
| entrypoints | [server.json](../../../../sources/containers__kubernetes-mcp-server/server.json) | entrypoints signal |
| entrypoints | [python/kubernetes_mcp_server/__main__.py](../../../../sources/containers__kubernetes-mcp-server/python/kubernetes_mcp_server/__main__.py) | entrypoints signal |
| entrypoints | [npm/kubernetes-mcp-server/bin/index.js](../../../../sources/containers__kubernetes-mcp-server/npm/kubernetes-mcp-server/bin/index.js) | entrypoints signal |
| entrypoints | [internal/tools/update-readme/main.go](../../../../sources/containers__kubernetes-mcp-server/internal/tools/update-readme/main.go) | entrypoints signal |
| container | [Dockerfile](../../../../sources/containers__kubernetes-mcp-server/Dockerfile) | container signal |
| container | [pkg/toolsets/helm/helm.go](../../../../sources/containers__kubernetes-mcp-server/pkg/toolsets/helm/helm.go) | container signal |
| container | [pkg/toolsets/helm/toolset.go](../../../../sources/containers__kubernetes-mcp-server/pkg/toolsets/helm/toolset.go) | container signal |
| container | [pkg/kubernetes/accesscontrol_round_tripper_test.go](../../../../sources/containers__kubernetes-mcp-server/pkg/kubernetes/accesscontrol_round_tripper_test.go) | container signal |
| config | [go.mod](../../../../sources/containers__kubernetes-mcp-server/go.mod) | config signal |
| config | [Makefile](../../../../sources/containers__kubernetes-mcp-server/Makefile) | config signal |
| config | [python/pyproject.toml](../../../../sources/containers__kubernetes-mcp-server/python/pyproject.toml) | config signal |
| config | [evals/tasks/kiali/Makefile](../../../../sources/containers__kubernetes-mcp-server/evals/tasks/kiali/Makefile) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 5 | [server.json](../../../../sources/containers__kubernetes-mcp-server/server.json)<br>[python/kubernetes_mcp_server/__main__.py](../../../../sources/containers__kubernetes-mcp-server/python/kubernetes_mcp_server/__main__.py)<br>[npm/kubernetes-mcp-server/bin/index.js](../../../../sources/containers__kubernetes-mcp-server/npm/kubernetes-mcp-server/bin/index.js)<br>[internal/tools/update-readme/main.go](../../../../sources/containers__kubernetes-mcp-server/internal/tools/update-readme/main.go)<br>[cmd/kubernetes-mcp-server/main.go](../../../../sources/containers__kubernetes-mcp-server/cmd/kubernetes-mcp-server/main.go) |
| agentRuntime | 34 | [AGENTS.md](../../../../sources/containers__kubernetes-mcp-server/AGENTS.md)<br>[pkg/toolsets/kubevirt/vm/lifecycle/tool.go](../../../../sources/containers__kubernetes-mcp-server/pkg/toolsets/kubevirt/vm/lifecycle/tool.go)<br>[pkg/toolsets/kubevirt/vm/guestagent/tool_test.go](../../../../sources/containers__kubernetes-mcp-server/pkg/toolsets/kubevirt/vm/guestagent/tool_test.go)<br>[pkg/toolsets/kubevirt/vm/guestagent/tool.go](../../../../sources/containers__kubernetes-mcp-server/pkg/toolsets/kubevirt/vm/guestagent/tool.go)<br>[pkg/toolsets/kubevirt/vm/create/tool_test.go](../../../../sources/containers__kubernetes-mcp-server/pkg/toolsets/kubevirt/vm/create/tool_test.go)<br>[pkg/toolsets/kubevirt/vm/create/tool.go](../../../../sources/containers__kubernetes-mcp-server/pkg/toolsets/kubevirt/vm/create/tool.go)<br>[pkg/toolsets/kubevirt/vm/clone/tool.go](../../../../sources/containers__kubernetes-mcp-server/pkg/toolsets/kubevirt/vm/clone/tool.go)<br>[pkg/toolsets/kiali/tools/defaults.go](../../../../sources/containers__kubernetes-mcp-server/pkg/toolsets/kiali/tools/defaults.go) |
| mcp | 109 | [python/kubernetes_mcp_server/__init__.py](../../../../sources/containers__kubernetes-mcp-server/python/kubernetes_mcp_server/__init__.py)<br>[python/kubernetes_mcp_server/__main__.py](../../../../sources/containers__kubernetes-mcp-server/python/kubernetes_mcp_server/__main__.py)<br>[python/kubernetes_mcp_server/kubernetes_mcp_server.py](../../../../sources/containers__kubernetes-mcp-server/python/kubernetes_mcp_server/kubernetes_mcp_server.py)<br>[pkg/mcp/common_crd_test.go](../../../../sources/containers__kubernetes-mcp-server/pkg/mcp/common_crd_test.go)<br>[pkg/mcp/common_test.go](../../../../sources/containers__kubernetes-mcp-server/pkg/mcp/common_test.go)<br>[pkg/mcp/configuration_test.go](../../../../sources/containers__kubernetes-mcp-server/pkg/mcp/configuration_test.go)<br>[pkg/mcp/confirmation_test.go](../../../../sources/containers__kubernetes-mcp-server/pkg/mcp/confirmation_test.go)<br>[pkg/mcp/elicit_test.go](../../../../sources/containers__kubernetes-mcp-server/pkg/mcp/elicit_test.go) |
| retrieval | 3 | [pkg/toolsets/kiali/tools/get_mesh_traffic_graph.go](../../../../sources/containers__kubernetes-mcp-server/pkg/toolsets/kiali/tools/get_mesh_traffic_graph.go)<br>[npm/kubernetes-mcp-server/bin/index.js](../../../../sources/containers__kubernetes-mcp-server/npm/kubernetes-mcp-server/bin/index.js)<br>[evals/tasks/kiali/topology-workload-graph/topology-workload-graph.yaml](../../../../sources/containers__kubernetes-mcp-server/evals/tasks/kiali/topology-workload-graph/topology-workload-graph.yaml) |
| spec | 0 | not obvious |
| eval | 161 | [pkg/toolsets/toolsets_test.go](../../../../sources/containers__kubernetes-mcp-server/pkg/toolsets/toolsets_test.go)<br>[pkg/toolsets/tekton/params_test.go](../../../../sources/containers__kubernetes-mcp-server/pkg/toolsets/tekton/params_test.go)<br>[pkg/toolsets/tekton/tekton_test.go](../../../../sources/containers__kubernetes-mcp-server/pkg/toolsets/tekton/tekton_test.go)<br>[pkg/toolsets/kubevirt/vm_troubleshoot_test.go](../../../../sources/containers__kubernetes-mcp-server/pkg/toolsets/kubevirt/vm_troubleshoot_test.go)<br>[pkg/toolsets/kubevirt/windows_golden_image_test.go](../../../../sources/containers__kubernetes-mcp-server/pkg/toolsets/kubevirt/windows_golden_image_test.go)<br>[pkg/toolsets/kubevirt/vm/guestagent/tool_test.go](../../../../sources/containers__kubernetes-mcp-server/pkg/toolsets/kubevirt/vm/guestagent/tool_test.go)<br>[pkg/toolsets/kubevirt/vm/create/tool_test.go](../../../../sources/containers__kubernetes-mcp-server/pkg/toolsets/kubevirt/vm/create/tool_test.go)<br>[pkg/toolsets/kubevirt/internal/defaults/defaults_test.go](../../../../sources/containers__kubernetes-mcp-server/pkg/toolsets/kubevirt/internal/defaults/defaults_test.go) |
| security | 23 | [pkg/oauth/state_test.go](../../../../sources/containers__kubernetes-mcp-server/pkg/oauth/state_test.go)<br>[pkg/oauth/state.go](../../../../sources/containers__kubernetes-mcp-server/pkg/oauth/state.go)<br>[pkg/mcp/testdata/helm-chart-secret/Chart.yaml](../../../../sources/containers__kubernetes-mcp-server/pkg/mcp/testdata/helm-chart-secret/Chart.yaml)<br>[pkg/mcp/testdata/helm-chart-secret/templates/secret.yaml](../../../../sources/containers__kubernetes-mcp-server/pkg/mcp/testdata/helm-chart-secret/templates/secret.yaml)<br>[pkg/kubernetes/auth.go](../../../../sources/containers__kubernetes-mcp-server/pkg/kubernetes/auth.go)<br>[pkg/kubernetes/rbac_validator_test.go](../../../../sources/containers__kubernetes-mcp-server/pkg/kubernetes/rbac_validator_test.go)<br>[pkg/kubernetes/rbac_validator.go](../../../../sources/containers__kubernetes-mcp-server/pkg/kubernetes/rbac_validator.go)<br>[evals/tasks/core/fix-rbac-wrong-resource/cleanup.sh](../../../../sources/containers__kubernetes-mcp-server/evals/tasks/core/fix-rbac-wrong-resource/cleanup.sh) |
| ci | 16 | [charts/kubernetes-mcp-server/ci/configmap-numeric-test-values.yaml](../../../../sources/containers__kubernetes-mcp-server/charts/kubernetes-mcp-server/ci/configmap-numeric-test-values.yaml)<br>[charts/kubernetes-mcp-server/ci/httproute-test-values.yaml](../../../../sources/containers__kubernetes-mcp-server/charts/kubernetes-mcp-server/ci/httproute-test-values.yaml)<br>[charts/kubernetes-mcp-server/ci/sa-automount-test-values.yaml](../../../../sources/containers__kubernetes-mcp-server/charts/kubernetes-mcp-server/ci/sa-automount-test-values.yaml)<br>[charts/kubernetes-mcp-server/ci/security-context-test-values.yaml](../../../../sources/containers__kubernetes-mcp-server/charts/kubernetes-mcp-server/ci/security-context-test-values.yaml)<br>[charts/kubernetes-mcp-server/ci/tpl-test-values.yaml](../../../../sources/containers__kubernetes-mcp-server/charts/kubernetes-mcp-server/ci/tpl-test-values.yaml)<br>[.github/workflows/build.yaml](../../../../sources/containers__kubernetes-mcp-server/.github/workflows/build.yaml)<br>[.github/workflows/check-go-version.yaml](../../../../sources/containers__kubernetes-mcp-server/.github/workflows/check-go-version.yaml)<br>[.github/workflows/helm.yaml](../../../../sources/containers__kubernetes-mcp-server/.github/workflows/helm.yaml) |
| container | 79 | [Dockerfile](../../../../sources/containers__kubernetes-mcp-server/Dockerfile)<br>[pkg/toolsets/helm/helm.go](../../../../sources/containers__kubernetes-mcp-server/pkg/toolsets/helm/helm.go)<br>[pkg/toolsets/helm/toolset.go](../../../../sources/containers__kubernetes-mcp-server/pkg/toolsets/helm/toolset.go)<br>[pkg/kubernetes/accesscontrol_round_tripper_test.go](../../../../sources/containers__kubernetes-mcp-server/pkg/kubernetes/accesscontrol_round_tripper_test.go)<br>[pkg/kubernetes/accesscontrol_round_tripper.go](../../../../sources/containers__kubernetes-mcp-server/pkg/kubernetes/accesscontrol_round_tripper.go)<br>[pkg/kubernetes/auth.go](../../../../sources/containers__kubernetes-mcp-server/pkg/kubernetes/auth.go)<br>[pkg/kubernetes/common_test.go](../../../../sources/containers__kubernetes-mcp-server/pkg/kubernetes/common_test.go)<br>[pkg/kubernetes/configuration.go](../../../../sources/containers__kubernetes-mcp-server/pkg/kubernetes/configuration.go) |
| instruction | 1 | [AGENTS.md](../../../../sources/containers__kubernetes-mcp-server/AGENTS.md) |
| docs | 30 | [README.md](../../../../sources/containers__kubernetes-mcp-server/README.md)<br>[pkg/kiali/tests/README.md](../../../../sources/containers__kubernetes-mcp-server/pkg/kiali/tests/README.md)<br>[evals/README.md](../../../../sources/containers__kubernetes-mcp-server/evals/README.md)<br>[evals/tasks/README.md](../../../../sources/containers__kubernetes-mcp-server/evals/tasks/README.md)<br>[evals/tasks/tekton/README.md](../../../../sources/containers__kubernetes-mcp-server/evals/tasks/tekton/README.md)<br>[evals/tasks/kubevirt/README.md](../../../../sources/containers__kubernetes-mcp-server/evals/tasks/kubevirt/README.md)<br>[evals/tasks/kubevirt/windows-golden-image-success/README.md](../../../../sources/containers__kubernetes-mcp-server/evals/tasks/kubevirt/windows-golden-image-success/README.md)<br>[evals/tasks/kubevirt/helpers/README.md](../../../../sources/containers__kubernetes-mcp-server/evals/tasks/kubevirt/helpers/README.md) |
| config | 4 | [go.mod](../../../../sources/containers__kubernetes-mcp-server/go.mod)<br>[Makefile](../../../../sources/containers__kubernetes-mcp-server/Makefile)<br>[python/pyproject.toml](../../../../sources/containers__kubernetes-mcp-server/python/pyproject.toml)<br>[evals/tasks/kiali/Makefile](../../../../sources/containers__kubernetes-mcp-server/evals/tasks/kiali/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 161 | [pkg/toolsets/toolsets_test.go](../../../../sources/containers__kubernetes-mcp-server/pkg/toolsets/toolsets_test.go)<br>[pkg/toolsets/tekton/params_test.go](../../../../sources/containers__kubernetes-mcp-server/pkg/toolsets/tekton/params_test.go)<br>[pkg/toolsets/tekton/tekton_test.go](../../../../sources/containers__kubernetes-mcp-server/pkg/toolsets/tekton/tekton_test.go)<br>[pkg/toolsets/kubevirt/vm_troubleshoot_test.go](../../../../sources/containers__kubernetes-mcp-server/pkg/toolsets/kubevirt/vm_troubleshoot_test.go)<br>[pkg/toolsets/kubevirt/windows_golden_image_test.go](../../../../sources/containers__kubernetes-mcp-server/pkg/toolsets/kubevirt/windows_golden_image_test.go)<br>[pkg/toolsets/kubevirt/vm/guestagent/tool_test.go](../../../../sources/containers__kubernetes-mcp-server/pkg/toolsets/kubevirt/vm/guestagent/tool_test.go) |
| CI workflows | 16 | [charts/kubernetes-mcp-server/ci/configmap-numeric-test-values.yaml](../../../../sources/containers__kubernetes-mcp-server/charts/kubernetes-mcp-server/ci/configmap-numeric-test-values.yaml)<br>[charts/kubernetes-mcp-server/ci/httproute-test-values.yaml](../../../../sources/containers__kubernetes-mcp-server/charts/kubernetes-mcp-server/ci/httproute-test-values.yaml)<br>[charts/kubernetes-mcp-server/ci/sa-automount-test-values.yaml](../../../../sources/containers__kubernetes-mcp-server/charts/kubernetes-mcp-server/ci/sa-automount-test-values.yaml)<br>[charts/kubernetes-mcp-server/ci/security-context-test-values.yaml](../../../../sources/containers__kubernetes-mcp-server/charts/kubernetes-mcp-server/ci/security-context-test-values.yaml)<br>[charts/kubernetes-mcp-server/ci/tpl-test-values.yaml](../../../../sources/containers__kubernetes-mcp-server/charts/kubernetes-mcp-server/ci/tpl-test-values.yaml)<br>[.github/workflows/build.yaml](../../../../sources/containers__kubernetes-mcp-server/.github/workflows/build.yaml) |
| Containers / deploy | 79 | [Dockerfile](../../../../sources/containers__kubernetes-mcp-server/Dockerfile)<br>[pkg/toolsets/helm/helm.go](../../../../sources/containers__kubernetes-mcp-server/pkg/toolsets/helm/helm.go)<br>[pkg/toolsets/helm/toolset.go](../../../../sources/containers__kubernetes-mcp-server/pkg/toolsets/helm/toolset.go)<br>[pkg/kubernetes/accesscontrol_round_tripper_test.go](../../../../sources/containers__kubernetes-mcp-server/pkg/kubernetes/accesscontrol_round_tripper_test.go)<br>[pkg/kubernetes/accesscontrol_round_tripper.go](../../../../sources/containers__kubernetes-mcp-server/pkg/kubernetes/accesscontrol_round_tripper.go)<br>[pkg/kubernetes/auth.go](../../../../sources/containers__kubernetes-mcp-server/pkg/kubernetes/auth.go) |
| Security / policy | 23 | [pkg/oauth/state_test.go](../../../../sources/containers__kubernetes-mcp-server/pkg/oauth/state_test.go)<br>[pkg/oauth/state.go](../../../../sources/containers__kubernetes-mcp-server/pkg/oauth/state.go)<br>[pkg/mcp/testdata/helm-chart-secret/Chart.yaml](../../../../sources/containers__kubernetes-mcp-server/pkg/mcp/testdata/helm-chart-secret/Chart.yaml)<br>[pkg/mcp/testdata/helm-chart-secret/templates/secret.yaml](../../../../sources/containers__kubernetes-mcp-server/pkg/mcp/testdata/helm-chart-secret/templates/secret.yaml)<br>[pkg/kubernetes/auth.go](../../../../sources/containers__kubernetes-mcp-server/pkg/kubernetes/auth.go)<br>[pkg/kubernetes/rbac_validator_test.go](../../../../sources/containers__kubernetes-mcp-server/pkg/kubernetes/rbac_validator_test.go) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/containers__kubernetes-mcp-server/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `server.json`, `python/kubernetes_mcp_server/__main__.py`, `npm/kubernetes-mcp-server/bin/index.js`.
2. Trace execution through entrypoints: `server.json`, `python/kubernetes_mcp_server/__main__.py`, `npm/kubernetes-mcp-server/bin/index.js`.
3. Map agent/tool runtime through: `AGENTS.md`, `pkg/toolsets/kubevirt/vm/lifecycle/tool.go`, `pkg/toolsets/kubevirt/vm/guestagent/tool_test.go`.
4. Inspect retrieval/memory/indexing through: `pkg/toolsets/kiali/tools/get_mesh_traffic_graph.go`, `npm/kubernetes-mcp-server/bin/index.js`, `evals/tasks/kiali/topology-workload-graph/topology-workload-graph.yaml`.
5. Verify behavior through test/eval files: `pkg/toolsets/toolsets_test.go`, `pkg/toolsets/tekton/params_test.go`, `pkg/toolsets/tekton/tekton_test.go`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 Model Context Protocol MCP server for Kubernetes and OpenShift. 핵심 구조 신호는 Go, go.mod, Dockerfile, Makefile, README.md, AGENTS.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
