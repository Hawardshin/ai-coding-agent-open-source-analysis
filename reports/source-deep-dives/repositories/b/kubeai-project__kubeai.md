# kubeai-project/kubeai Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

AI Inference Operator for Kubernetes. The easiest way to serve ML models in production. Supports VLMs, LLMs, embeddings, and speech-to-text.

## 요약

- 조사 단위: `sources/kubeai-project__kubeai` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 430 files, 109 directories, depth score 117, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=hack/vllm-mock-metrics/main.go, examples/private-deep-chat/main.go, cmd/main.go이고, 의존성 단서는 opentelemetry, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | kubeai-project/kubeai |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | Go |
| Stars | 1210 |
| Forks | 125 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/kubeai-project__kubeai](../../../../sources/kubeai-project__kubeai) |
| Existing report | [reports/global-trending/repositories/kubeai-project__kubeai.md](../../../global-trending/repositories/kubeai-project__kubeai.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 430 / 109 |
| Max observed depth | 6 |
| Top directories | .github, api, benchmarks, charts, cmd, components, docs, examples, hack, internal, manifests, proposals, test |
| Top extensions | .yaml: 143, .go: 100, .md: 50, .png: 30, (none): 27, .sh: 23, .json: 11, .yml: 11, .py: 8, .txt: 6, .js: 4, .mod: 3 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 44 |
| api | source boundary | 5 |
| examples/private-deep-chat | examples workspace | 4 |
| examples/k8s-api-clients | examples workspace | 2 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| charts | top-level component | 1 |
| cmd | source boundary | 1 |
| cmd/main.go | cmd workspace | 1 |
| components | top-level component | 1 |
| examples | top-level component | 1 |
| examples/ollama-builtin | examples workspace | 1 |
| examples/priority-examples | examples workspace | 1 |
| hack | top-level component | 1 |
| internal | top-level component | 1 |
| manifests | top-level component | 1 |
| proposals | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | all | make all |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | manifests | make manifests |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | generate | make generate |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | fmt | make fmt |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | vet | make vet |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | test-unit | make test-unit |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | test-integration | make test-integration |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | helm-dependency-build | make helm-dependency-build |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | test-e2e | make test-e2e |


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
| observability | opentelemetry, prometheus |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [hack/vllm-mock-metrics/main.go](../../../../sources/kubeai-project__kubeai/hack/vllm-mock-metrics/main.go) | entrypoints signal |
| entrypoints | [examples/private-deep-chat/main.go](../../../../sources/kubeai-project__kubeai/examples/private-deep-chat/main.go) | entrypoints signal |
| entrypoints | [cmd/main.go](../../../../sources/kubeai-project__kubeai/cmd/main.go) | entrypoints signal |
| entrypoints | [benchmarks/multi-turn-chat-go/main.go](../../../../sources/kubeai-project__kubeai/benchmarks/multi-turn-chat-go/main.go) | entrypoints signal |
| container | [Dockerfile](../../../../sources/kubeai-project__kubeai/Dockerfile) | container signal |
| container | [examples/private-deep-chat/Dockerfile](../../../../sources/kubeai-project__kubeai/examples/private-deep-chat/Dockerfile) | container signal |
| container | [examples/ollama-builtin/Dockerfile](../../../../sources/kubeai-project__kubeai/examples/ollama-builtin/Dockerfile) | container signal |
| container | [components/model-loader/Dockerfile](../../../../sources/kubeai-project__kubeai/components/model-loader/Dockerfile) | container signal |
| config | [go.mod](../../../../sources/kubeai-project__kubeai/go.mod) | config signal |
| config | [Makefile](../../../../sources/kubeai-project__kubeai/Makefile) | config signal |
| config | [test/e2e/openai-python-client/requirements.txt](../../../../sources/kubeai-project__kubeai/test/e2e/openai-python-client/requirements.txt) | config signal |
| config | [examples/private-deep-chat/go.mod](../../../../sources/kubeai-project__kubeai/examples/private-deep-chat/go.mod) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [hack/vllm-mock-metrics/main.go](../../../../sources/kubeai-project__kubeai/hack/vllm-mock-metrics/main.go)<br>[examples/private-deep-chat/main.go](../../../../sources/kubeai-project__kubeai/examples/private-deep-chat/main.go)<br>[cmd/main.go](../../../../sources/kubeai-project__kubeai/cmd/main.go)<br>[benchmarks/multi-turn-chat-go/main.go](../../../../sources/kubeai-project__kubeai/benchmarks/multi-turn-chat-go/main.go) |
| agentRuntime | 2 | [benchmarks/multi-turn-chat-go/benchmark/runner_test.go](../../../../sources/kubeai-project__kubeai/benchmarks/multi-turn-chat-go/benchmark/runner_test.go)<br>[benchmarks/multi-turn-chat-go/benchmark/runner.go](../../../../sources/kubeai-project__kubeai/benchmarks/multi-turn-chat-go/benchmark/runner.go) |
| mcp | 0 | not obvious |
| retrieval | 6 | [manifests/models/bge-embed-text-cpu.yaml](../../../../sources/kubeai-project__kubeai/manifests/models/bge-embed-text-cpu.yaml)<br>[manifests/models/nomic-embed-text-cpu.yaml](../../../../sources/kubeai-project__kubeai/manifests/models/nomic-embed-text-cpu.yaml)<br>[examples/private-deep-chat/static/index.html](../../../../sources/kubeai-project__kubeai/examples/private-deep-chat/static/index.html)<br>[docs/index.yaml](../../../../sources/kubeai-project__kubeai/docs/index.yaml)<br>[docs/how-to/configure-embedding-models.md](../../../../sources/kubeai-project__kubeai/docs/how-to/configure-embedding-models.md)<br>[docs/blog/index.md](../../../../sources/kubeai-project__kubeai/docs/blog/index.md) |
| spec | 4 | [test/e2e/openai-python-client/requirements.txt](../../../../sources/kubeai-project__kubeai/test/e2e/openai-python-client/requirements.txt)<br>[examples/k8s-api-clients/python/requirements.txt](../../../../sources/kubeai-project__kubeai/examples/k8s-api-clients/python/requirements.txt)<br>[docs/requirements.txt](../../../../sources/kubeai-project__kubeai/docs/requirements.txt)<br>[benchmarks/chat-py/requirements.txt](../../../../sources/kubeai-project__kubeai/benchmarks/chat-py/requirements.txt) |
| eval | 97 | [test/utils/utils.go](../../../../sources/kubeai-project__kubeai/test/utils/utils.go)<br>[test/integration/adapter_test.go](../../../../sources/kubeai-project__kubeai/test/integration/adapter_test.go)<br>[test/integration/autoscaler_state_test.go](../../../../sources/kubeai-project__kubeai/test/integration/autoscaler_state_test.go)<br>[test/integration/autoscaling_ha_test.go](../../../../sources/kubeai-project__kubeai/test/integration/autoscaling_ha_test.go)<br>[test/integration/cache_shared_filesystem_test.go](../../../../sources/kubeai-project__kubeai/test/integration/cache_shared_filesystem_test.go)<br>[test/integration/external_proxy_test.go](../../../../sources/kubeai-project__kubeai/test/integration/external_proxy_test.go)<br>[test/integration/main_test.go](../../../../sources/kubeai-project__kubeai/test/integration/main_test.go)<br>[test/integration/messenger_test.go](../../../../sources/kubeai-project__kubeai/test/integration/messenger_test.go) |
| security | 3 | [proposals/diagrams/auth-with-label-selector.excalidraw.png](../../../../sources/kubeai-project__kubeai/proposals/diagrams/auth-with-label-selector.excalidraw.png)<br>[charts/kubeai/templates/aws-secret.yaml](../../../../sources/kubeai-project__kubeai/charts/kubeai/templates/aws-secret.yaml)<br>[charts/kubeai/templates/huggingface-secret.yaml](../../../../sources/kubeai-project__kubeai/charts/kubeai/templates/huggingface-secret.yaml) |
| ci | 8 | [.github/workflows/build-push-kubeai.yml](../../../../sources/kubeai-project__kubeai/.github/workflows/build-push-kubeai.yml)<br>[.github/workflows/build-push-model-loader.yml](../../../../sources/kubeai-project__kubeai/.github/workflows/build-push-model-loader.yml)<br>[.github/workflows/create-gh-release.yml](../../../../sources/kubeai-project__kubeai/.github/workflows/create-gh-release.yml)<br>[.github/workflows/docs-lint.yml](../../../../sources/kubeai-project__kubeai/.github/workflows/docs-lint.yml)<br>[.github/workflows/helm-lint.yml](../../../../sources/kubeai-project__kubeai/.github/workflows/helm-lint.yml)<br>[.github/workflows/publish-docs.yml](../../../../sources/kubeai-project__kubeai/.github/workflows/publish-docs.yml)<br>[.github/workflows/release-helm-chart.yml](../../../../sources/kubeai-project__kubeai/.github/workflows/release-helm-chart.yml)<br>[.github/workflows/tests.yml](../../../../sources/kubeai-project__kubeai/.github/workflows/tests.yml) |
| container | 39 | [Dockerfile](../../../../sources/kubeai-project__kubeai/Dockerfile)<br>[examples/private-deep-chat/Dockerfile](../../../../sources/kubeai-project__kubeai/examples/private-deep-chat/Dockerfile)<br>[examples/ollama-builtin/Dockerfile](../../../../sources/kubeai-project__kubeai/examples/ollama-builtin/Dockerfile)<br>[components/model-loader/Dockerfile](../../../../sources/kubeai-project__kubeai/components/model-loader/Dockerfile)<br>[charts/.gitignore](../../../../sources/kubeai-project__kubeai/charts/.gitignore)<br>[charts/models/.helmignore](../../../../sources/kubeai-project__kubeai/charts/models/.helmignore)<br>[charts/models/Chart.yaml](../../../../sources/kubeai-project__kubeai/charts/models/Chart.yaml)<br>[charts/models/custom-values.yaml](../../../../sources/kubeai-project__kubeai/charts/models/custom-values.yaml) |
| instruction | 0 | not obvious |
| docs | 74 | [mkdocs.yml](../../../../sources/kubeai-project__kubeai/mkdocs.yml)<br>[examples/priority-examples/README.md](../../../../sources/kubeai-project__kubeai/examples/priority-examples/README.md)<br>[docs/CNAME](../../../../sources/kubeai-project__kubeai/docs/CNAME)<br>[docs/index.yaml](../../../../sources/kubeai-project__kubeai/docs/index.yaml)<br>[docs/README.md](../../../../sources/kubeai-project__kubeai/docs/README.md)<br>[docs/requirements.txt](../../../../sources/kubeai-project__kubeai/docs/requirements.txt)<br>[docs/tutorials/langchain.md](../../../../sources/kubeai-project__kubeai/docs/tutorials/langchain.md)<br>[docs/tutorials/langtrace.md](../../../../sources/kubeai-project__kubeai/docs/tutorials/langtrace.md) |
| config | 12 | [go.mod](../../../../sources/kubeai-project__kubeai/go.mod)<br>[Makefile](../../../../sources/kubeai-project__kubeai/Makefile)<br>[test/e2e/openai-python-client/requirements.txt](../../../../sources/kubeai-project__kubeai/test/e2e/openai-python-client/requirements.txt)<br>[examples/private-deep-chat/go.mod](../../../../sources/kubeai-project__kubeai/examples/private-deep-chat/go.mod)<br>[examples/k8s-api-clients/python/requirements.txt](../../../../sources/kubeai-project__kubeai/examples/k8s-api-clients/python/requirements.txt)<br>[docs/requirements.txt](../../../../sources/kubeai-project__kubeai/docs/requirements.txt)<br>[benchmarks/multi-turn-chat-k6/Makefile](../../../../sources/kubeai-project__kubeai/benchmarks/multi-turn-chat-k6/Makefile)<br>[benchmarks/multi-turn-chat-go/go.mod](../../../../sources/kubeai-project__kubeai/benchmarks/multi-turn-chat-go/go.mod) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 97 | [test/utils/utils.go](../../../../sources/kubeai-project__kubeai/test/utils/utils.go)<br>[test/integration/adapter_test.go](../../../../sources/kubeai-project__kubeai/test/integration/adapter_test.go)<br>[test/integration/autoscaler_state_test.go](../../../../sources/kubeai-project__kubeai/test/integration/autoscaler_state_test.go)<br>[test/integration/autoscaling_ha_test.go](../../../../sources/kubeai-project__kubeai/test/integration/autoscaling_ha_test.go)<br>[test/integration/cache_shared_filesystem_test.go](../../../../sources/kubeai-project__kubeai/test/integration/cache_shared_filesystem_test.go)<br>[test/integration/external_proxy_test.go](../../../../sources/kubeai-project__kubeai/test/integration/external_proxy_test.go) |
| CI workflows | 8 | [.github/workflows/build-push-kubeai.yml](../../../../sources/kubeai-project__kubeai/.github/workflows/build-push-kubeai.yml)<br>[.github/workflows/build-push-model-loader.yml](../../../../sources/kubeai-project__kubeai/.github/workflows/build-push-model-loader.yml)<br>[.github/workflows/create-gh-release.yml](../../../../sources/kubeai-project__kubeai/.github/workflows/create-gh-release.yml)<br>[.github/workflows/docs-lint.yml](../../../../sources/kubeai-project__kubeai/.github/workflows/docs-lint.yml)<br>[.github/workflows/helm-lint.yml](../../../../sources/kubeai-project__kubeai/.github/workflows/helm-lint.yml)<br>[.github/workflows/publish-docs.yml](../../../../sources/kubeai-project__kubeai/.github/workflows/publish-docs.yml) |
| Containers / deploy | 39 | [Dockerfile](../../../../sources/kubeai-project__kubeai/Dockerfile)<br>[examples/private-deep-chat/Dockerfile](../../../../sources/kubeai-project__kubeai/examples/private-deep-chat/Dockerfile)<br>[examples/ollama-builtin/Dockerfile](../../../../sources/kubeai-project__kubeai/examples/ollama-builtin/Dockerfile)<br>[components/model-loader/Dockerfile](../../../../sources/kubeai-project__kubeai/components/model-loader/Dockerfile)<br>[charts/.gitignore](../../../../sources/kubeai-project__kubeai/charts/.gitignore)<br>[charts/models/.helmignore](../../../../sources/kubeai-project__kubeai/charts/models/.helmignore) |
| Security / policy | 3 | [proposals/diagrams/auth-with-label-selector.excalidraw.png](../../../../sources/kubeai-project__kubeai/proposals/diagrams/auth-with-label-selector.excalidraw.png)<br>[charts/kubeai/templates/aws-secret.yaml](../../../../sources/kubeai-project__kubeai/charts/kubeai/templates/aws-secret.yaml)<br>[charts/kubeai/templates/huggingface-secret.yaml](../../../../sources/kubeai-project__kubeai/charts/kubeai/templates/huggingface-secret.yaml) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `hack/vllm-mock-metrics/main.go`, `examples/private-deep-chat/main.go`, `cmd/main.go`.
2. Trace execution through entrypoints: `hack/vllm-mock-metrics/main.go`, `examples/private-deep-chat/main.go`, `cmd/main.go`.
3. Map agent/tool runtime through: `benchmarks/multi-turn-chat-go/benchmark/runner_test.go`, `benchmarks/multi-turn-chat-go/benchmark/runner.go`.
4. Inspect retrieval/memory/indexing through: `manifests/models/bge-embed-text-cpu.yaml`, `manifests/models/nomic-embed-text-cpu.yaml`, `examples/private-deep-chat/static/index.html`.
5. Verify behavior through test/eval files: `test/utils/utils.go`, `test/integration/adapter_test.go`, `test/integration/autoscaler_state_test.go`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 AI Inference Operator for Kubernetes. The easiest way to serve ML models in production. Supports VLMs, LLMs, embeddings,. 핵심 구조 신호는 Go, go.mod, Dockerfile, Makefile, LICENSE, tests이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
