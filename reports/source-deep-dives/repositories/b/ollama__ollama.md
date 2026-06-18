# ollama/ollama 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Local clone structure analysis: 1233 files, 230 directories.

## 요약

- 조사 단위: `sources/ollama__ollama` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,233 files, 230 directories, depth score 119, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=docs/images/cline-mcp.png, docs/images/codex-mcp.png, docs/images/goose-mcp-1.png이고, 의존성 단서는 cobra, ollama, llama, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | ollama/ollama |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 174404 |
| Forks | 16664 |
| License | MIT |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/ollama__ollama](../../../../sources/ollama__ollama) |
| 기존 보고서 | [reports/global-trending/repositories/ollama__ollama.md](../../../global-trending/repositories/ollama__ollama.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1233 / 230 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .github, anthropic, api, app, auth, cmake, cmd, convert, discover, docs, envconfig, format, fs, harmony, integration, internal, kvcache, llama, llm, logutil |
| 상위 확장자 | .go: 730, (none): 82, .png: 62, .mdx: 55, .json: 45, .h: 44, .tsx: 39, .ts: 33, .md: 26, .gotmpl: 22, .svg: 16, .sh: 9 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 41 |
| api | source boundary | 6 |
| server | source boundary | 4 |
| cmd/runner | cmd workspace | 2 |
| .github | ci surface | 1 |
| anthropic | top-level component | 1 |
| app | top-level component | 1 |
| auth | top-level component | 1 |
| cmake | top-level component | 1 |
| cmd | source boundary | 1 |
| cmd/launch | cmd workspace | 1 |
| convert | top-level component | 1 |
| discover | top-level component | 1 |
| envconfig | top-level component | 1 |
| format | top-level component | 1 |
| fs | top-level component | 1 |
| harmony | top-level component | 1 |
| integration | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | ollama, llama |
| webRuntime | 없음 |
| developerSurface | cobra |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [docs/images/cline-mcp.png](../../../../sources/ollama__ollama/docs/images/cline-mcp.png) | mcp signal |
| mcp | [docs/images/codex-mcp.png](../../../../sources/ollama__ollama/docs/images/codex-mcp.png) | mcp signal |
| mcp | [docs/images/goose-mcp-1.png](../../../../sources/ollama__ollama/docs/images/goose-mcp-1.png) | mcp signal |
| mcp | [docs/images/goose-mcp-2.png](../../../../sources/ollama__ollama/docs/images/goose-mcp-2.png) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/ollama__ollama/AGENTS.md) | agentRuntime signal |
| agentRuntime | [x/tools/bash.go](../../../../sources/ollama__ollama/x/tools/bash.go) | agentRuntime signal |
| agentRuntime | [x/tools/registry_test.go](../../../../sources/ollama__ollama/x/tools/registry_test.go) | agentRuntime signal |
| agentRuntime | [x/tools/registry.go](../../../../sources/ollama__ollama/x/tools/registry.go) | agentRuntime signal |
| entrypoints | [main.go](../../../../sources/ollama__ollama/main.go) | entrypoints signal |
| entrypoints | [x/mlxrunner/server.go](../../../../sources/ollama__ollama/x/mlxrunner/server.go) | entrypoints signal |
| entrypoints | [x/mlxrunner/mlx/generator/main.go](../../../../sources/ollama__ollama/x/mlxrunner/mlx/generator/main.go) | entrypoints signal |
| entrypoints | [x/imagegen/server.go](../../../../sources/ollama__ollama/x/imagegen/server.go) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 17 | [main.go](../../../../sources/ollama__ollama/main.go)<br>[x/mlxrunner/server.go](../../../../sources/ollama__ollama/x/mlxrunner/server.go)<br>[x/mlxrunner/mlx/generator/main.go](../../../../sources/ollama__ollama/x/mlxrunner/mlx/generator/main.go)<br>[x/imagegen/server.go](../../../../sources/ollama__ollama/x/imagegen/server.go)<br>[x/imagegen/cmd/engine/main.go](../../../../sources/ollama__ollama/x/imagegen/cmd/engine/main.go)<br>[server/internal/registry/server.go](../../../../sources/ollama__ollama/server/internal/registry/server.go)<br>[llm/server.go](../../../../sources/ollama__ollama/llm/server.go)<br>[docs/tools/extract-examples/main.go](../../../../sources/ollama__ollama/docs/tools/extract-examples/main.go) |
| agentRuntime | 58 | [AGENTS.md](../../../../sources/ollama__ollama/AGENTS.md)<br>[x/tools/bash.go](../../../../sources/ollama__ollama/x/tools/bash.go)<br>[x/tools/registry_test.go](../../../../sources/ollama__ollama/x/tools/registry_test.go)<br>[x/tools/registry.go](../../../../sources/ollama__ollama/x/tools/registry.go)<br>[x/tools/webfetch.go](../../../../sources/ollama__ollama/x/tools/webfetch.go)<br>[x/tools/websearch_test.go](../../../../sources/ollama__ollama/x/tools/websearch_test.go)<br>[x/tools/websearch.go](../../../../sources/ollama__ollama/x/tools/websearch.go)<br>[x/mlxrunner/runner.go](../../../../sources/ollama__ollama/x/mlxrunner/runner.go) |
| mcp | 4 | [docs/images/cline-mcp.png](../../../../sources/ollama__ollama/docs/images/cline-mcp.png)<br>[docs/images/codex-mcp.png](../../../../sources/ollama__ollama/docs/images/codex-mcp.png)<br>[docs/images/goose-mcp-1.png](../../../../sources/ollama__ollama/docs/images/goose-mcp-1.png)<br>[docs/images/goose-mcp-2.png](../../../../sources/ollama__ollama/docs/images/goose-mcp-2.png) |
| retrieval | 19 | [x/mlxrunner/status_memory_test.go](../../../../sources/ollama__ollama/x/mlxrunner/status_memory_test.go)<br>[x/mlxrunner/status_memory.go](../../../../sources/ollama__ollama/x/mlxrunner/status_memory.go)<br>[x/mlxrunner/model/embedding_test.go](../../../../sources/ollama__ollama/x/mlxrunner/model/embedding_test.go)<br>[x/mlxrunner/model/embedding.go](../../../../sources/ollama__ollama/x/mlxrunner/model/embedding.go)<br>[x/mlxrunner/mlx/memory.go](../../../../sources/ollama__ollama/x/mlxrunner/mlx/memory.go)<br>[x/mlxrunner/mlx/include/mlx/c/graph_utils.h](../../../../sources/ollama__ollama/x/mlxrunner/mlx/include/mlx/c/graph_utils.h)<br>[x/mlxrunner/mlx/include/mlx/c/memory.h](../../../../sources/ollama__ollama/x/mlxrunner/mlx/include/mlx/c/memory.h)<br>[x/mlxrunner/mlx/include/mlx/c/vector.h](../../../../sources/ollama__ollama/x/mlxrunner/mlx/include/mlx/c/vector.h) |
| spec | 0 | 명확하지 않음 |
| eval | 291 | [x/transfer/transfer_test.go](../../../../sources/ollama__ollama/x/transfer/transfer_test.go)<br>[x/tools/registry_test.go](../../../../sources/ollama__ollama/x/tools/registry_test.go)<br>[x/tools/websearch_test.go](../../../../sources/ollama__ollama/x/tools/websearch_test.go)<br>[x/tokenizer/tokenizer_benchmark_test.go](../../../../sources/ollama__ollama/x/tokenizer/tokenizer_benchmark_test.go)<br>[x/tokenizer/tokenizer_correctness_test.go](../../../../sources/ollama__ollama/x/tokenizer/tokenizer_correctness_test.go)<br>[x/tokenizer/tokenizer_ggml_parity_test.go](../../../../sources/ollama__ollama/x/tokenizer/tokenizer_ggml_parity_test.go)<br>[x/tokenizer/tokenizer_load_test.go](../../../../sources/ollama__ollama/x/tokenizer/tokenizer_load_test.go)<br>[x/server/show_test.go](../../../../sources/ollama__ollama/x/server/show_test.go) |
| security | 11 | [SECURITY.md](../../../../sources/ollama__ollama/SECURITY.md)<br>[server/auth_test.go](../../../../sources/ollama__ollama/server/auth_test.go)<br>[server/auth.go](../../../../sources/ollama__ollama/server/auth.go)<br>[internal/cloud/policy_test.go](../../../../sources/ollama__ollama/internal/cloud/policy_test.go)<br>[internal/cloud/policy.go](../../../../sources/ollama__ollama/internal/cloud/policy.go)<br>[auth/auth.go](../../../../sources/ollama__ollama/auth/auth.go)<br>[app/tools/cloud_policy_test.go](../../../../sources/ollama__ollama/app/tools/cloud_policy_test.go)<br>[app/tools/cloud_policy.go](../../../../sources/ollama__ollama/app/tools/cloud_policy.go) |
| ci | 5 | [.github/workflows/latest.yaml](../../../../sources/ollama__ollama/.github/workflows/latest.yaml)<br>[.github/workflows/release.yaml](../../../../sources/ollama__ollama/.github/workflows/release.yaml)<br>[.github/workflows/test-install.yaml](../../../../sources/ollama__ollama/.github/workflows/test-install.yaml)<br>[.github/workflows/test-llamacpp-update.yaml](../../../../sources/ollama__ollama/.github/workflows/test-llamacpp-update.yaml)<br>[.github/workflows/test.yaml](../../../../sources/ollama__ollama/.github/workflows/test.yaml) |
| container | 1 | [Dockerfile](../../../../sources/ollama__ollama/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/ollama__ollama/AGENTS.md)<br>[CLAUDE.md](../../../../sources/ollama__ollama/CLAUDE.md) |
| docs | 134 | [README.md](../../../../sources/ollama__ollama/README.md)<br>[x/mlxrunner/mlx/include/mlx/c/README.md](../../../../sources/ollama__ollama/x/mlxrunner/mlx/include/mlx/c/README.md)<br>[x/imagegen/README.md](../../../../sources/ollama__ollama/x/imagegen/README.md)<br>[x/imagegen/tokenizer/README.md](../../../../sources/ollama__ollama/x/imagegen/tokenizer/README.md)<br>[x/imagegen/mlx/README.md](../../../../sources/ollama__ollama/x/imagegen/mlx/README.md)<br>[x/imagegen/docs/blob-format.md](../../../../sources/ollama__ollama/x/imagegen/docs/blob-format.md)<br>[x/imagegen/cmd/engine/README.md](../../../../sources/ollama__ollama/x/imagegen/cmd/engine/README.md)<br>[runner/README.md](../../../../sources/ollama__ollama/runner/README.md) |
| config | 3 | [go.mod](../../../../sources/ollama__ollama/go.mod)<br>[app/ui/app/package.json](../../../../sources/ollama__ollama/app/ui/app/package.json)<br>[app/ui/app/tsconfig.json](../../../../sources/ollama__ollama/app/ui/app/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 291 | [x/transfer/transfer_test.go](../../../../sources/ollama__ollama/x/transfer/transfer_test.go)<br>[x/tools/registry_test.go](../../../../sources/ollama__ollama/x/tools/registry_test.go)<br>[x/tools/websearch_test.go](../../../../sources/ollama__ollama/x/tools/websearch_test.go)<br>[x/tokenizer/tokenizer_benchmark_test.go](../../../../sources/ollama__ollama/x/tokenizer/tokenizer_benchmark_test.go)<br>[x/tokenizer/tokenizer_correctness_test.go](../../../../sources/ollama__ollama/x/tokenizer/tokenizer_correctness_test.go)<br>[x/tokenizer/tokenizer_ggml_parity_test.go](../../../../sources/ollama__ollama/x/tokenizer/tokenizer_ggml_parity_test.go) |
| CI workflow | 5 | [.github/workflows/latest.yaml](../../../../sources/ollama__ollama/.github/workflows/latest.yaml)<br>[.github/workflows/release.yaml](../../../../sources/ollama__ollama/.github/workflows/release.yaml)<br>[.github/workflows/test-install.yaml](../../../../sources/ollama__ollama/.github/workflows/test-install.yaml)<br>[.github/workflows/test-llamacpp-update.yaml](../../../../sources/ollama__ollama/.github/workflows/test-llamacpp-update.yaml)<br>[.github/workflows/test.yaml](../../../../sources/ollama__ollama/.github/workflows/test.yaml) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/ollama__ollama/Dockerfile) |
| 보안/정책 | 11 | [SECURITY.md](../../../../sources/ollama__ollama/SECURITY.md)<br>[server/auth_test.go](../../../../sources/ollama__ollama/server/auth_test.go)<br>[server/auth.go](../../../../sources/ollama__ollama/server/auth.go)<br>[internal/cloud/policy_test.go](../../../../sources/ollama__ollama/internal/cloud/policy_test.go)<br>[internal/cloud/policy.go](../../../../sources/ollama__ollama/internal/cloud/policy.go)<br>[auth/auth.go](../../../../sources/ollama__ollama/auth/auth.go) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/ollama__ollama/AGENTS.md)<br>[CLAUDE.md](../../../../sources/ollama__ollama/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `docs/images/cline-mcp.png`, `docs/images/codex-mcp.png`, `docs/images/goose-mcp-1.png`.
2. entrypoint를 따라 실행 흐름 확인: `main.go`, `x/mlxrunner/server.go`, `x/mlxrunner/mlx/generator/main.go`.
3. agent/tool runtime 매핑: `AGENTS.md`, `x/tools/bash.go`, `x/tools/registry_test.go`.
4. retrieval/memory/indexing 확인: `x/mlxrunner/status_memory_test.go`, `x/mlxrunner/status_memory.go`, `x/mlxrunner/model/embedding_test.go`.
5. test/eval 파일로 동작 검증: `x/transfer/transfer_test.go`, `x/tools/registry_test.go`, `x/tools/websearch_test.go`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 1233 files, 230 directories.. 핵심 구조 신호는 Go, go.mod, Dockerfile, README.md, AGENTS.md, CLAUDE.md이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 큰 메타데이터 위험이 명확하지 않음입니다.
