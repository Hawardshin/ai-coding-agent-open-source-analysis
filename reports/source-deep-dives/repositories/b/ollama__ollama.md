# ollama/ollama Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 1233 files, 230 directories.

## 요약

- 조사 단위: `sources/ollama__ollama` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,233 files, 230 directories, depth score 131, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=docs/images/cline-mcp.png, docs/images/codex-mcp.png, docs/images/goose-mcp-1.png이고, 의존성 단서는 cobra, ollama, llama, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | ollama/ollama |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 174404 |
| Forks | 16664 |
| License | MIT |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/ollama__ollama](../../../../sources/ollama__ollama) |
| Existing report | [reports/global-trending/repositories/ollama__ollama.md](../../../global-trending/repositories/ollama__ollama.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1233 / 230 |
| Max observed depth | 10 |
| Top directories | .github, anthropic, api, app, auth, cmake, cmd, convert, discover, docs, envconfig, format, fs, harmony, integration, internal, kvcache, llama, llm, logutil |
| Top extensions | .go: 730, (none): 82, .png: 62, .mdx: 55, .json: 45, .h: 44, .tsx: 39, .ts: 33, .md: 26, .gotmpl: 22, .svg: 16, .sh: 9 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
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


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | ollama, llama |
| webRuntime | none |
| developerSurface | cobra |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 17 | [main.go](../../../../sources/ollama__ollama/main.go)<br>[x/mlxrunner/server.go](../../../../sources/ollama__ollama/x/mlxrunner/server.go)<br>[x/mlxrunner/mlx/generator/main.go](../../../../sources/ollama__ollama/x/mlxrunner/mlx/generator/main.go)<br>[x/imagegen/server.go](../../../../sources/ollama__ollama/x/imagegen/server.go)<br>[x/imagegen/cmd/engine/main.go](../../../../sources/ollama__ollama/x/imagegen/cmd/engine/main.go)<br>[server/internal/registry/server.go](../../../../sources/ollama__ollama/server/internal/registry/server.go)<br>[llm/server.go](../../../../sources/ollama__ollama/llm/server.go)<br>[docs/tools/extract-examples/main.go](../../../../sources/ollama__ollama/docs/tools/extract-examples/main.go) |
| agentRuntime | 58 | [AGENTS.md](../../../../sources/ollama__ollama/AGENTS.md)<br>[x/tools/bash.go](../../../../sources/ollama__ollama/x/tools/bash.go)<br>[x/tools/registry_test.go](../../../../sources/ollama__ollama/x/tools/registry_test.go)<br>[x/tools/registry.go](../../../../sources/ollama__ollama/x/tools/registry.go)<br>[x/tools/webfetch.go](../../../../sources/ollama__ollama/x/tools/webfetch.go)<br>[x/tools/websearch_test.go](../../../../sources/ollama__ollama/x/tools/websearch_test.go)<br>[x/tools/websearch.go](../../../../sources/ollama__ollama/x/tools/websearch.go)<br>[x/mlxrunner/runner.go](../../../../sources/ollama__ollama/x/mlxrunner/runner.go) |
| mcp | 4 | [docs/images/cline-mcp.png](../../../../sources/ollama__ollama/docs/images/cline-mcp.png)<br>[docs/images/codex-mcp.png](../../../../sources/ollama__ollama/docs/images/codex-mcp.png)<br>[docs/images/goose-mcp-1.png](../../../../sources/ollama__ollama/docs/images/goose-mcp-1.png)<br>[docs/images/goose-mcp-2.png](../../../../sources/ollama__ollama/docs/images/goose-mcp-2.png) |
| retrieval | 19 | [x/mlxrunner/status_memory_test.go](../../../../sources/ollama__ollama/x/mlxrunner/status_memory_test.go)<br>[x/mlxrunner/status_memory.go](../../../../sources/ollama__ollama/x/mlxrunner/status_memory.go)<br>[x/mlxrunner/model/embedding_test.go](../../../../sources/ollama__ollama/x/mlxrunner/model/embedding_test.go)<br>[x/mlxrunner/model/embedding.go](../../../../sources/ollama__ollama/x/mlxrunner/model/embedding.go)<br>[x/mlxrunner/mlx/memory.go](../../../../sources/ollama__ollama/x/mlxrunner/mlx/memory.go)<br>[x/mlxrunner/mlx/include/mlx/c/graph_utils.h](../../../../sources/ollama__ollama/x/mlxrunner/mlx/include/mlx/c/graph_utils.h)<br>[x/mlxrunner/mlx/include/mlx/c/memory.h](../../../../sources/ollama__ollama/x/mlxrunner/mlx/include/mlx/c/memory.h)<br>[x/mlxrunner/mlx/include/mlx/c/vector.h](../../../../sources/ollama__ollama/x/mlxrunner/mlx/include/mlx/c/vector.h) |
| spec | 0 | not obvious |
| eval | 291 | [x/transfer/transfer_test.go](../../../../sources/ollama__ollama/x/transfer/transfer_test.go)<br>[x/tools/registry_test.go](../../../../sources/ollama__ollama/x/tools/registry_test.go)<br>[x/tools/websearch_test.go](../../../../sources/ollama__ollama/x/tools/websearch_test.go)<br>[x/tokenizer/tokenizer_benchmark_test.go](../../../../sources/ollama__ollama/x/tokenizer/tokenizer_benchmark_test.go)<br>[x/tokenizer/tokenizer_correctness_test.go](../../../../sources/ollama__ollama/x/tokenizer/tokenizer_correctness_test.go)<br>[x/tokenizer/tokenizer_ggml_parity_test.go](../../../../sources/ollama__ollama/x/tokenizer/tokenizer_ggml_parity_test.go)<br>[x/tokenizer/tokenizer_load_test.go](../../../../sources/ollama__ollama/x/tokenizer/tokenizer_load_test.go)<br>[x/server/show_test.go](../../../../sources/ollama__ollama/x/server/show_test.go) |
| security | 11 | [SECURITY.md](../../../../sources/ollama__ollama/SECURITY.md)<br>[server/auth_test.go](../../../../sources/ollama__ollama/server/auth_test.go)<br>[server/auth.go](../../../../sources/ollama__ollama/server/auth.go)<br>[internal/cloud/policy_test.go](../../../../sources/ollama__ollama/internal/cloud/policy_test.go)<br>[internal/cloud/policy.go](../../../../sources/ollama__ollama/internal/cloud/policy.go)<br>[auth/auth.go](../../../../sources/ollama__ollama/auth/auth.go)<br>[app/tools/cloud_policy_test.go](../../../../sources/ollama__ollama/app/tools/cloud_policy_test.go)<br>[app/tools/cloud_policy.go](../../../../sources/ollama__ollama/app/tools/cloud_policy.go) |
| ci | 5 | [.github/workflows/latest.yaml](../../../../sources/ollama__ollama/.github/workflows/latest.yaml)<br>[.github/workflows/release.yaml](../../../../sources/ollama__ollama/.github/workflows/release.yaml)<br>[.github/workflows/test-install.yaml](../../../../sources/ollama__ollama/.github/workflows/test-install.yaml)<br>[.github/workflows/test-llamacpp-update.yaml](../../../../sources/ollama__ollama/.github/workflows/test-llamacpp-update.yaml)<br>[.github/workflows/test.yaml](../../../../sources/ollama__ollama/.github/workflows/test.yaml) |
| container | 1 | [Dockerfile](../../../../sources/ollama__ollama/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/ollama__ollama/AGENTS.md)<br>[CLAUDE.md](../../../../sources/ollama__ollama/CLAUDE.md) |
| docs | 134 | [README.md](../../../../sources/ollama__ollama/README.md)<br>[x/mlxrunner/mlx/include/mlx/c/README.md](../../../../sources/ollama__ollama/x/mlxrunner/mlx/include/mlx/c/README.md)<br>[x/imagegen/README.md](../../../../sources/ollama__ollama/x/imagegen/README.md)<br>[x/imagegen/tokenizer/README.md](../../../../sources/ollama__ollama/x/imagegen/tokenizer/README.md)<br>[x/imagegen/mlx/README.md](../../../../sources/ollama__ollama/x/imagegen/mlx/README.md)<br>[x/imagegen/docs/blob-format.md](../../../../sources/ollama__ollama/x/imagegen/docs/blob-format.md)<br>[x/imagegen/cmd/engine/README.md](../../../../sources/ollama__ollama/x/imagegen/cmd/engine/README.md)<br>[runner/README.md](../../../../sources/ollama__ollama/runner/README.md) |
| config | 3 | [go.mod](../../../../sources/ollama__ollama/go.mod)<br>[app/ui/app/package.json](../../../../sources/ollama__ollama/app/ui/app/package.json)<br>[app/ui/app/tsconfig.json](../../../../sources/ollama__ollama/app/ui/app/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 291 | [x/transfer/transfer_test.go](../../../../sources/ollama__ollama/x/transfer/transfer_test.go)<br>[x/tools/registry_test.go](../../../../sources/ollama__ollama/x/tools/registry_test.go)<br>[x/tools/websearch_test.go](../../../../sources/ollama__ollama/x/tools/websearch_test.go)<br>[x/tokenizer/tokenizer_benchmark_test.go](../../../../sources/ollama__ollama/x/tokenizer/tokenizer_benchmark_test.go)<br>[x/tokenizer/tokenizer_correctness_test.go](../../../../sources/ollama__ollama/x/tokenizer/tokenizer_correctness_test.go)<br>[x/tokenizer/tokenizer_ggml_parity_test.go](../../../../sources/ollama__ollama/x/tokenizer/tokenizer_ggml_parity_test.go) |
| CI workflows | 5 | [.github/workflows/latest.yaml](../../../../sources/ollama__ollama/.github/workflows/latest.yaml)<br>[.github/workflows/release.yaml](../../../../sources/ollama__ollama/.github/workflows/release.yaml)<br>[.github/workflows/test-install.yaml](../../../../sources/ollama__ollama/.github/workflows/test-install.yaml)<br>[.github/workflows/test-llamacpp-update.yaml](../../../../sources/ollama__ollama/.github/workflows/test-llamacpp-update.yaml)<br>[.github/workflows/test.yaml](../../../../sources/ollama__ollama/.github/workflows/test.yaml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/ollama__ollama/Dockerfile) |
| Security / policy | 11 | [SECURITY.md](../../../../sources/ollama__ollama/SECURITY.md)<br>[server/auth_test.go](../../../../sources/ollama__ollama/server/auth_test.go)<br>[server/auth.go](../../../../sources/ollama__ollama/server/auth.go)<br>[internal/cloud/policy_test.go](../../../../sources/ollama__ollama/internal/cloud/policy_test.go)<br>[internal/cloud/policy.go](../../../../sources/ollama__ollama/internal/cloud/policy.go)<br>[auth/auth.go](../../../../sources/ollama__ollama/auth/auth.go) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/ollama__ollama/AGENTS.md)<br>[CLAUDE.md](../../../../sources/ollama__ollama/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `docs/images/cline-mcp.png`, `docs/images/codex-mcp.png`, `docs/images/goose-mcp-1.png`.
2. Trace execution through entrypoints: `main.go`, `x/mlxrunner/server.go`, `x/mlxrunner/mlx/generator/main.go`.
3. Map agent/tool runtime through: `AGENTS.md`, `x/tools/bash.go`, `x/tools/registry_test.go`.
4. Inspect retrieval/memory/indexing through: `x/mlxrunner/status_memory_test.go`, `x/mlxrunner/status_memory.go`, `x/mlxrunner/model/embedding_test.go`.
5. Verify behavior through test/eval files: `x/transfer/transfer_test.go`, `x/tools/registry_test.go`, `x/tools/websearch_test.go`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 1233 files, 230 directories.. 핵심 구조 신호는 Go, go.mod, Dockerfile, README.md, AGENTS.md, CLAUDE.md이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 major metadata risk not obvious입니다.
