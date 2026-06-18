# kubeai-project/kubeai 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

AI Inference Operator for Kubernetes. The easiest way to serve ML models in production. Supports VLMs, LLMs, embeddings, and speech-to-text.

## 요약

- 조사 단위: `sources/kubeai-project__kubeai` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 430 files, 109 directories, depth score 111, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=hack/vllm-mock-metrics/main.go, examples/private-deep-chat/main.go, cmd/main.go이고, 의존성 단서는 opentelemetry, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | kubeai-project/kubeai |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | Go |
| Stars | 1210 |
| Forks | 125 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/kubeai-project__kubeai](../../../../sources/kubeai-project__kubeai) |
| 기존 보고서 | [reports/global-trending/repositories/kubeai-project__kubeai.md](../../../global-trending/repositories/kubeai-project__kubeai.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 430 / 109 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, api, benchmarks, charts, cmd, components, docs, examples, hack, internal, manifests, proposals, test |
| 상위 확장자 | .yaml: 143, .go: 100, .md: 50, .png: 30, (none): 27, .sh: 23, .json: 11, .yml: 11, .py: 8, .txt: 6, .js: 4, .mod: 3 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [hack/vllm-mock-metrics/main.go](../../../../sources/kubeai-project__kubeai/hack/vllm-mock-metrics/main.go)<br>[examples/private-deep-chat/main.go](../../../../sources/kubeai-project__kubeai/examples/private-deep-chat/main.go)<br>[cmd/main.go](../../../../sources/kubeai-project__kubeai/cmd/main.go)<br>[benchmarks/multi-turn-chat-go/main.go](../../../../sources/kubeai-project__kubeai/benchmarks/multi-turn-chat-go/main.go) |
| agentRuntime | 2 | [benchmarks/multi-turn-chat-go/benchmark/runner_test.go](../../../../sources/kubeai-project__kubeai/benchmarks/multi-turn-chat-go/benchmark/runner_test.go)<br>[benchmarks/multi-turn-chat-go/benchmark/runner.go](../../../../sources/kubeai-project__kubeai/benchmarks/multi-turn-chat-go/benchmark/runner.go) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 6 | [manifests/models/bge-embed-text-cpu.yaml](../../../../sources/kubeai-project__kubeai/manifests/models/bge-embed-text-cpu.yaml)<br>[manifests/models/nomic-embed-text-cpu.yaml](../../../../sources/kubeai-project__kubeai/manifests/models/nomic-embed-text-cpu.yaml)<br>[examples/private-deep-chat/static/index.html](../../../../sources/kubeai-project__kubeai/examples/private-deep-chat/static/index.html)<br>[docs/index.yaml](../../../../sources/kubeai-project__kubeai/docs/index.yaml)<br>[docs/how-to/configure-embedding-models.md](../../../../sources/kubeai-project__kubeai/docs/how-to/configure-embedding-models.md)<br>[docs/blog/index.md](../../../../sources/kubeai-project__kubeai/docs/blog/index.md) |
| spec | 4 | [test/e2e/openai-python-client/requirements.txt](../../../../sources/kubeai-project__kubeai/test/e2e/openai-python-client/requirements.txt)<br>[examples/k8s-api-clients/python/requirements.txt](../../../../sources/kubeai-project__kubeai/examples/k8s-api-clients/python/requirements.txt)<br>[docs/requirements.txt](../../../../sources/kubeai-project__kubeai/docs/requirements.txt)<br>[benchmarks/chat-py/requirements.txt](../../../../sources/kubeai-project__kubeai/benchmarks/chat-py/requirements.txt) |
| eval | 97 | [test/utils/utils.go](../../../../sources/kubeai-project__kubeai/test/utils/utils.go)<br>[test/integration/adapter_test.go](../../../../sources/kubeai-project__kubeai/test/integration/adapter_test.go)<br>[test/integration/autoscaler_state_test.go](../../../../sources/kubeai-project__kubeai/test/integration/autoscaler_state_test.go)<br>[test/integration/autoscaling_ha_test.go](../../../../sources/kubeai-project__kubeai/test/integration/autoscaling_ha_test.go)<br>[test/integration/cache_shared_filesystem_test.go](../../../../sources/kubeai-project__kubeai/test/integration/cache_shared_filesystem_test.go)<br>[test/integration/external_proxy_test.go](../../../../sources/kubeai-project__kubeai/test/integration/external_proxy_test.go)<br>[test/integration/main_test.go](../../../../sources/kubeai-project__kubeai/test/integration/main_test.go)<br>[test/integration/messenger_test.go](../../../../sources/kubeai-project__kubeai/test/integration/messenger_test.go) |
| security | 3 | [proposals/diagrams/auth-with-label-selector.excalidraw.png](../../../../sources/kubeai-project__kubeai/proposals/diagrams/auth-with-label-selector.excalidraw.png)<br>[charts/kubeai/templates/aws-secret.yaml](../../../../sources/kubeai-project__kubeai/charts/kubeai/templates/aws-secret.yaml)<br>[charts/kubeai/templates/huggingface-secret.yaml](../../../../sources/kubeai-project__kubeai/charts/kubeai/templates/huggingface-secret.yaml) |
| ci | 8 | [.github/workflows/build-push-kubeai.yml](../../../../sources/kubeai-project__kubeai/.github/workflows/build-push-kubeai.yml)<br>[.github/workflows/build-push-model-loader.yml](../../../../sources/kubeai-project__kubeai/.github/workflows/build-push-model-loader.yml)<br>[.github/workflows/create-gh-release.yml](../../../../sources/kubeai-project__kubeai/.github/workflows/create-gh-release.yml)<br>[.github/workflows/docs-lint.yml](../../../../sources/kubeai-project__kubeai/.github/workflows/docs-lint.yml)<br>[.github/workflows/helm-lint.yml](../../../../sources/kubeai-project__kubeai/.github/workflows/helm-lint.yml)<br>[.github/workflows/publish-docs.yml](../../../../sources/kubeai-project__kubeai/.github/workflows/publish-docs.yml)<br>[.github/workflows/release-helm-chart.yml](../../../../sources/kubeai-project__kubeai/.github/workflows/release-helm-chart.yml)<br>[.github/workflows/tests.yml](../../../../sources/kubeai-project__kubeai/.github/workflows/tests.yml) |
| container | 39 | [Dockerfile](../../../../sources/kubeai-project__kubeai/Dockerfile)<br>[examples/private-deep-chat/Dockerfile](../../../../sources/kubeai-project__kubeai/examples/private-deep-chat/Dockerfile)<br>[examples/ollama-builtin/Dockerfile](../../../../sources/kubeai-project__kubeai/examples/ollama-builtin/Dockerfile)<br>[components/model-loader/Dockerfile](../../../../sources/kubeai-project__kubeai/components/model-loader/Dockerfile)<br>[charts/.gitignore](../../../../sources/kubeai-project__kubeai/charts/.gitignore)<br>[charts/models/.helmignore](../../../../sources/kubeai-project__kubeai/charts/models/.helmignore)<br>[charts/models/Chart.yaml](../../../../sources/kubeai-project__kubeai/charts/models/Chart.yaml)<br>[charts/models/custom-values.yaml](../../../../sources/kubeai-project__kubeai/charts/models/custom-values.yaml) |
| instruction | 0 | 명확하지 않음 |
| docs | 74 | [mkdocs.yml](../../../../sources/kubeai-project__kubeai/mkdocs.yml)<br>[examples/priority-examples/README.md](../../../../sources/kubeai-project__kubeai/examples/priority-examples/README.md)<br>[docs/CNAME](../../../../sources/kubeai-project__kubeai/docs/CNAME)<br>[docs/index.yaml](../../../../sources/kubeai-project__kubeai/docs/index.yaml)<br>[docs/README.md](../../../../sources/kubeai-project__kubeai/docs/README.md)<br>[docs/requirements.txt](../../../../sources/kubeai-project__kubeai/docs/requirements.txt)<br>[docs/tutorials/langchain.md](../../../../sources/kubeai-project__kubeai/docs/tutorials/langchain.md)<br>[docs/tutorials/langtrace.md](../../../../sources/kubeai-project__kubeai/docs/tutorials/langtrace.md) |
| config | 12 | [go.mod](../../../../sources/kubeai-project__kubeai/go.mod)<br>[Makefile](../../../../sources/kubeai-project__kubeai/Makefile)<br>[test/e2e/openai-python-client/requirements.txt](../../../../sources/kubeai-project__kubeai/test/e2e/openai-python-client/requirements.txt)<br>[examples/private-deep-chat/go.mod](../../../../sources/kubeai-project__kubeai/examples/private-deep-chat/go.mod)<br>[examples/k8s-api-clients/python/requirements.txt](../../../../sources/kubeai-project__kubeai/examples/k8s-api-clients/python/requirements.txt)<br>[docs/requirements.txt](../../../../sources/kubeai-project__kubeai/docs/requirements.txt)<br>[benchmarks/multi-turn-chat-k6/Makefile](../../../../sources/kubeai-project__kubeai/benchmarks/multi-turn-chat-k6/Makefile)<br>[benchmarks/multi-turn-chat-go/go.mod](../../../../sources/kubeai-project__kubeai/benchmarks/multi-turn-chat-go/go.mod) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 97 | [test/utils/utils.go](../../../../sources/kubeai-project__kubeai/test/utils/utils.go)<br>[test/integration/adapter_test.go](../../../../sources/kubeai-project__kubeai/test/integration/adapter_test.go)<br>[test/integration/autoscaler_state_test.go](../../../../sources/kubeai-project__kubeai/test/integration/autoscaler_state_test.go)<br>[test/integration/autoscaling_ha_test.go](../../../../sources/kubeai-project__kubeai/test/integration/autoscaling_ha_test.go)<br>[test/integration/cache_shared_filesystem_test.go](../../../../sources/kubeai-project__kubeai/test/integration/cache_shared_filesystem_test.go)<br>[test/integration/external_proxy_test.go](../../../../sources/kubeai-project__kubeai/test/integration/external_proxy_test.go) |
| CI workflow | 8 | [.github/workflows/build-push-kubeai.yml](../../../../sources/kubeai-project__kubeai/.github/workflows/build-push-kubeai.yml)<br>[.github/workflows/build-push-model-loader.yml](../../../../sources/kubeai-project__kubeai/.github/workflows/build-push-model-loader.yml)<br>[.github/workflows/create-gh-release.yml](../../../../sources/kubeai-project__kubeai/.github/workflows/create-gh-release.yml)<br>[.github/workflows/docs-lint.yml](../../../../sources/kubeai-project__kubeai/.github/workflows/docs-lint.yml)<br>[.github/workflows/helm-lint.yml](../../../../sources/kubeai-project__kubeai/.github/workflows/helm-lint.yml)<br>[.github/workflows/publish-docs.yml](../../../../sources/kubeai-project__kubeai/.github/workflows/publish-docs.yml) |
| 컨테이너/배포 | 39 | [Dockerfile](../../../../sources/kubeai-project__kubeai/Dockerfile)<br>[examples/private-deep-chat/Dockerfile](../../../../sources/kubeai-project__kubeai/examples/private-deep-chat/Dockerfile)<br>[examples/ollama-builtin/Dockerfile](../../../../sources/kubeai-project__kubeai/examples/ollama-builtin/Dockerfile)<br>[components/model-loader/Dockerfile](../../../../sources/kubeai-project__kubeai/components/model-loader/Dockerfile)<br>[charts/.gitignore](../../../../sources/kubeai-project__kubeai/charts/.gitignore)<br>[charts/models/.helmignore](../../../../sources/kubeai-project__kubeai/charts/models/.helmignore) |
| 보안/정책 | 3 | [proposals/diagrams/auth-with-label-selector.excalidraw.png](../../../../sources/kubeai-project__kubeai/proposals/diagrams/auth-with-label-selector.excalidraw.png)<br>[charts/kubeai/templates/aws-secret.yaml](../../../../sources/kubeai-project__kubeai/charts/kubeai/templates/aws-secret.yaml)<br>[charts/kubeai/templates/huggingface-secret.yaml](../../../../sources/kubeai-project__kubeai/charts/kubeai/templates/huggingface-secret.yaml) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `hack/vllm-mock-metrics/main.go`, `examples/private-deep-chat/main.go`, `cmd/main.go`.
2. entrypoint를 따라 실행 흐름 확인: `hack/vllm-mock-metrics/main.go`, `examples/private-deep-chat/main.go`, `cmd/main.go`.
3. agent/tool runtime 매핑: `benchmarks/multi-turn-chat-go/benchmark/runner_test.go`, `benchmarks/multi-turn-chat-go/benchmark/runner.go`.
4. retrieval/memory/indexing 확인: `manifests/models/bge-embed-text-cpu.yaml`, `manifests/models/nomic-embed-text-cpu.yaml`, `examples/private-deep-chat/static/index.html`.
5. test/eval 파일로 동작 검증: `test/utils/utils.go`, `test/integration/adapter_test.go`, `test/integration/autoscaler_state_test.go`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 AI Inference Operator for Kubernetes. The easiest way to serve ML models in production. Supports VLMs, LLMs, embeddings,. 핵심 구조 신호는 Go, go.mod, Dockerfile, Makefile, LICENSE, tests이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
