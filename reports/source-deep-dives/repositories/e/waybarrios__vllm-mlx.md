# waybarrios/vllm-mlx Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

OpenAI and Anthropic compatible server for Apple Silicon. Run LLMs and vision-language models (Llama, Qwen-VL, LLaVA) with continuous batching, MCP tool calling, and multimodal support. Native MLX backend, 400+ tok/s. Works with Claude Code.

## 요약

- 조사 단위: `sources/waybarrios__vllm-mlx` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 363 files, 42 directories, depth score 117, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp.example.json, vllm_mlx/mcp/__init__.py, vllm_mlx/mcp/client.py이고, 의존성 단서는 mcp, fastapi, torch, transformers, vllm, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | waybarrios/vllm-mlx |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 1350 |
| Forks | 188 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/waybarrios__vllm-mlx](../../../../sources/waybarrios__vllm-mlx) |
| Existing report | [reports/global-trending/repositories/waybarrios__vllm-mlx.md](../../../global-trending/repositories/waybarrios__vllm-mlx.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 363 / 42 |
| Max observed depth | 4 |
| Top directories | .github, benchmarks, docs, examples, scripts, tests, vllm_mlx |
| Top extensions | .py: 236, .md: 96, .json: 9, .wav: 6, .yml: 6, .sh: 3, .toml: 2, (none): 2, .ini: 1, .mp3: 1, .yaml: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 54 |
| tests | validation surface | 38 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| examples | top-level component | 1 |
| examples/mcp_chat.py | examples workspace | 1 |
| examples/mcp_tool_use.py | examples workspace | 1 |
| scripts | top-level component | 1 |
| vllm_mlx | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | vllm-mlx | vllm-mlx |
| utility | pyproject.toml | vllm-mlx-chat | vllm-mlx-chat |
| utility | pyproject.toml | vllm-mlx-text-chat | vllm-mlx-text-chat |
| utility | pyproject.toml | vllm-mlx-bench | vllm-mlx-bench |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | torch, transformers, vllm |
| webRuntime | fastapi |
| developerSurface | none |
| observability | prometheus |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [mcp.example.json](../../../../sources/waybarrios__vllm-mlx/mcp.example.json) | mcp signal |
| mcp | [vllm_mlx/mcp/__init__.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/mcp/__init__.py) | mcp signal |
| mcp | [vllm_mlx/mcp/client.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/mcp/client.py) | mcp signal |
| mcp | [vllm_mlx/mcp/config.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/mcp/config.py) | mcp signal |
| agentRuntime | [vllm_mlx/memory_cache.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/memory_cache.py) | agentRuntime signal |
| agentRuntime | [vllm_mlx/tool_parsers/__init__.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/tool_parsers/__init__.py) | agentRuntime signal |
| agentRuntime | [vllm_mlx/tool_parsers/abstract_tool_parser.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/tool_parsers/abstract_tool_parser.py) | agentRuntime signal |
| agentRuntime | [vllm_mlx/tool_parsers/auto_tool_parser.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/tool_parsers/auto_tool_parser.py) | agentRuntime signal |
| entrypoints | [vllm_mlx/server.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/server.py) | entrypoints signal |
| entrypoints | [docs/zh/guides/server.md](../../../../sources/waybarrios__vllm-mlx/docs/zh/guides/server.md) | entrypoints signal |
| entrypoints | [docs/guides/server.md](../../../../sources/waybarrios__vllm-mlx/docs/guides/server.md) | entrypoints signal |
| entrypoints | [docs/fr/guides/server.md](../../../../sources/waybarrios__vllm-mlx/docs/fr/guides/server.md) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 5 | [vllm_mlx/server.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/server.py)<br>[docs/zh/guides/server.md](../../../../sources/waybarrios__vllm-mlx/docs/zh/guides/server.md)<br>[docs/guides/server.md](../../../../sources/waybarrios__vllm-mlx/docs/guides/server.md)<br>[docs/fr/guides/server.md](../../../../sources/waybarrios__vllm-mlx/docs/fr/guides/server.md)<br>[docs/es/guides/server.md](../../../../sources/waybarrios__vllm-mlx/docs/es/guides/server.md) |
| agentRuntime | 26 | [vllm_mlx/memory_cache.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/memory_cache.py)<br>[vllm_mlx/tool_parsers/__init__.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/tool_parsers/__init__.py)<br>[vllm_mlx/tool_parsers/abstract_tool_parser.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/tool_parsers/abstract_tool_parser.py)<br>[vllm_mlx/tool_parsers/auto_tool_parser.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/tool_parsers/auto_tool_parser.py)<br>[vllm_mlx/tool_parsers/deepseek_tool_parser.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/tool_parsers/deepseek_tool_parser.py)<br>[vllm_mlx/tool_parsers/functionary_tool_parser.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/tool_parsers/functionary_tool_parser.py)<br>[vllm_mlx/tool_parsers/gemma4_tool_parser.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/tool_parsers/gemma4_tool_parser.py)<br>[vllm_mlx/tool_parsers/glm47_tool_parser.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/tool_parsers/glm47_tool_parser.py) |
| mcp | 16 | [mcp.example.json](../../../../sources/waybarrios__vllm-mlx/mcp.example.json)<br>[vllm_mlx/mcp/__init__.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/mcp/__init__.py)<br>[vllm_mlx/mcp/client.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/mcp/client.py)<br>[vllm_mlx/mcp/config.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/mcp/config.py)<br>[vllm_mlx/mcp/executor.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/mcp/executor.py)<br>[vllm_mlx/mcp/manager.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/mcp/manager.py)<br>[vllm_mlx/mcp/security.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/mcp/security.py)<br>[vllm_mlx/mcp/tools.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/mcp/tools.py) |
| retrieval | 10 | [vllm_mlx/embedding.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/embedding.py)<br>[vllm_mlx/memory_cache.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/memory_cache.py)<br>[vllm_mlx/vision_embedding_cache.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/vision_embedding_cache.py)<br>[tests/test_memory_cache_mlx.py](../../../../sources/waybarrios__vllm-mlx/tests/test_memory_cache_mlx.py)<br>[tests/test_memory_cache.py](../../../../sources/waybarrios__vllm-mlx/tests/test_memory_cache.py)<br>[tests/test_memory_stability.py](../../../../sources/waybarrios__vllm-mlx/tests/test_memory_stability.py)<br>[docs/index.md](../../../../sources/waybarrios__vllm-mlx/docs/index.md)<br>[docs/zh/index.md](../../../../sources/waybarrios__vllm-mlx/docs/zh/index.md) |
| spec | 1 | [docs/development/architecture.md](../../../../sources/waybarrios__vllm-mlx/docs/development/architecture.md) |
| eval | 116 | [vlm_benchmark_results.json](../../../../sources/waybarrios__vllm-mlx/vlm_benchmark_results.json)<br>[vllm_mlx/bench_serve.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/bench_serve.py)<br>[vllm_mlx/benchmark.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/benchmark.py)<br>[vllm_mlx/bench_serve_prompts/long.json](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/bench_serve_prompts/long.json)<br>[vllm_mlx/bench_serve_prompts/medium.json](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/bench_serve_prompts/medium.json)<br>[vllm_mlx/bench_serve_prompts/short.json](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/bench_serve_prompts/short.json)<br>[vllm_mlx/bench_serve_prompts/thinking.json](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/bench_serve_prompts/thinking.json)<br>[vllm_mlx/bench_serve_prompts/warm_prompts_example.json](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/bench_serve_prompts/warm_prompts_example.json) |
| security | 2 | [vllm_mlx/mcp/security.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/mcp/security.py)<br>[tests/test_mcp_security.py](../../../../sources/waybarrios__vllm-mlx/tests/test_mcp_security.py) |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/waybarrios__vllm-mlx/.github/workflows/ci.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 95 | [README.es.md](../../../../sources/waybarrios__vllm-mlx/README.es.md)<br>[README.fr.md](../../../../sources/waybarrios__vllm-mlx/README.fr.md)<br>[README.md](../../../../sources/waybarrios__vllm-mlx/README.md)<br>[README.zh.md](../../../../sources/waybarrios__vllm-mlx/README.zh.md)<br>[docs/index.md](../../../../sources/waybarrios__vllm-mlx/docs/index.md)<br>[docs/zh/index.md](../../../../sources/waybarrios__vllm-mlx/docs/zh/index.md)<br>[docs/zh/reference/cli.md](../../../../sources/waybarrios__vllm-mlx/docs/zh/reference/cli.md)<br>[docs/zh/reference/configuration.md](../../../../sources/waybarrios__vllm-mlx/docs/zh/reference/configuration.md) |
| config | 1 | [pyproject.toml](../../../../sources/waybarrios__vllm-mlx/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 116 | [vlm_benchmark_results.json](../../../../sources/waybarrios__vllm-mlx/vlm_benchmark_results.json)<br>[vllm_mlx/bench_serve.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/bench_serve.py)<br>[vllm_mlx/benchmark.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/benchmark.py)<br>[vllm_mlx/bench_serve_prompts/long.json](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/bench_serve_prompts/long.json)<br>[vllm_mlx/bench_serve_prompts/medium.json](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/bench_serve_prompts/medium.json)<br>[vllm_mlx/bench_serve_prompts/short.json](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/bench_serve_prompts/short.json) |
| CI workflows | 1 | [.github/workflows/ci.yml](../../../../sources/waybarrios__vllm-mlx/.github/workflows/ci.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 2 | [vllm_mlx/mcp/security.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/mcp/security.py)<br>[tests/test_mcp_security.py](../../../../sources/waybarrios__vllm-mlx/tests/test_mcp_security.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `mcp.example.json`, `vllm_mlx/mcp/__init__.py`, `vllm_mlx/mcp/client.py`.
2. Trace execution through entrypoints: `vllm_mlx/server.py`, `docs/zh/guides/server.md`, `docs/guides/server.md`.
3. Map agent/tool runtime through: `vllm_mlx/memory_cache.py`, `vllm_mlx/tool_parsers/__init__.py`, `vllm_mlx/tool_parsers/abstract_tool_parser.py`.
4. Inspect retrieval/memory/indexing through: `vllm_mlx/embedding.py`, `vllm_mlx/memory_cache.py`, `vllm_mlx/vision_embedding_cache.py`.
5. Verify behavior through test/eval files: `vlm_benchmark_results.json`, `vllm_mlx/bench_serve.py`, `vllm_mlx/benchmark.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 OpenAI and Anthropic compatible server for Apple Silicon. Run LLMs and vision language models Llama, Qwen VL, LLaVA with. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, mcp, fastapi이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
