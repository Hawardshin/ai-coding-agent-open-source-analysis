# waybarrios/vllm-mlx 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

OpenAI and Anthropic compatible server for Apple Silicon. Run LLMs and vision-language models (Llama, Qwen-VL, LLaVA) with continuous batching, MCP tool calling, and multimodal support. Native MLX backend, 400+ tok/s. Works with Claude Code.

## 요약

- 조사 단위: `sources/waybarrios__vllm-mlx` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 363 files, 42 directories, depth score 111, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp.example.json, vllm_mlx/mcp/__init__.py, vllm_mlx/mcp/client.py이고, 의존성 단서는 mcp, fastapi, torch, transformers, vllm, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | waybarrios/vllm-mlx |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 1350 |
| Forks | 188 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/waybarrios__vllm-mlx](../../../../sources/waybarrios__vllm-mlx) |
| 기존 보고서 | [reports/global-trending/repositories/waybarrios__vllm-mlx.md](../../../global-trending/repositories/waybarrios__vllm-mlx.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 363 / 42 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, benchmarks, docs, examples, scripts, tests, vllm_mlx |
| 상위 확장자 | .py: 236, .md: 96, .json: 9, .wav: 6, .yml: 6, .sh: 3, .toml: 2, (none): 2, .ini: 1, .mp3: 1, .yaml: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | vllm-mlx | vllm-mlx |
| utility | pyproject.toml | vllm-mlx-chat | vllm-mlx-chat |
| utility | pyproject.toml | vllm-mlx-text-chat | vllm-mlx-text-chat |
| utility | pyproject.toml | vllm-mlx-bench | vllm-mlx-bench |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | torch, transformers, vllm |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | prometheus |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 5 | [vllm_mlx/server.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/server.py)<br>[docs/zh/guides/server.md](../../../../sources/waybarrios__vllm-mlx/docs/zh/guides/server.md)<br>[docs/guides/server.md](../../../../sources/waybarrios__vllm-mlx/docs/guides/server.md)<br>[docs/fr/guides/server.md](../../../../sources/waybarrios__vllm-mlx/docs/fr/guides/server.md)<br>[docs/es/guides/server.md](../../../../sources/waybarrios__vllm-mlx/docs/es/guides/server.md) |
| agentRuntime | 26 | [vllm_mlx/memory_cache.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/memory_cache.py)<br>[vllm_mlx/tool_parsers/__init__.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/tool_parsers/__init__.py)<br>[vllm_mlx/tool_parsers/abstract_tool_parser.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/tool_parsers/abstract_tool_parser.py)<br>[vllm_mlx/tool_parsers/auto_tool_parser.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/tool_parsers/auto_tool_parser.py)<br>[vllm_mlx/tool_parsers/deepseek_tool_parser.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/tool_parsers/deepseek_tool_parser.py)<br>[vllm_mlx/tool_parsers/functionary_tool_parser.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/tool_parsers/functionary_tool_parser.py)<br>[vllm_mlx/tool_parsers/gemma4_tool_parser.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/tool_parsers/gemma4_tool_parser.py)<br>[vllm_mlx/tool_parsers/glm47_tool_parser.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/tool_parsers/glm47_tool_parser.py) |
| mcp | 16 | [mcp.example.json](../../../../sources/waybarrios__vllm-mlx/mcp.example.json)<br>[vllm_mlx/mcp/__init__.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/mcp/__init__.py)<br>[vllm_mlx/mcp/client.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/mcp/client.py)<br>[vllm_mlx/mcp/config.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/mcp/config.py)<br>[vllm_mlx/mcp/executor.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/mcp/executor.py)<br>[vllm_mlx/mcp/manager.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/mcp/manager.py)<br>[vllm_mlx/mcp/security.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/mcp/security.py)<br>[vllm_mlx/mcp/tools.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/mcp/tools.py) |
| retrieval | 10 | [vllm_mlx/embedding.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/embedding.py)<br>[vllm_mlx/memory_cache.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/memory_cache.py)<br>[vllm_mlx/vision_embedding_cache.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/vision_embedding_cache.py)<br>[tests/test_memory_cache_mlx.py](../../../../sources/waybarrios__vllm-mlx/tests/test_memory_cache_mlx.py)<br>[tests/test_memory_cache.py](../../../../sources/waybarrios__vllm-mlx/tests/test_memory_cache.py)<br>[tests/test_memory_stability.py](../../../../sources/waybarrios__vllm-mlx/tests/test_memory_stability.py)<br>[docs/index.md](../../../../sources/waybarrios__vllm-mlx/docs/index.md)<br>[docs/zh/index.md](../../../../sources/waybarrios__vllm-mlx/docs/zh/index.md) |
| spec | 1 | [docs/development/architecture.md](../../../../sources/waybarrios__vllm-mlx/docs/development/architecture.md) |
| eval | 116 | [vlm_benchmark_results.json](../../../../sources/waybarrios__vllm-mlx/vlm_benchmark_results.json)<br>[vllm_mlx/bench_serve.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/bench_serve.py)<br>[vllm_mlx/benchmark.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/benchmark.py)<br>[vllm_mlx/bench_serve_prompts/long.json](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/bench_serve_prompts/long.json)<br>[vllm_mlx/bench_serve_prompts/medium.json](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/bench_serve_prompts/medium.json)<br>[vllm_mlx/bench_serve_prompts/short.json](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/bench_serve_prompts/short.json)<br>[vllm_mlx/bench_serve_prompts/thinking.json](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/bench_serve_prompts/thinking.json)<br>[vllm_mlx/bench_serve_prompts/warm_prompts_example.json](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/bench_serve_prompts/warm_prompts_example.json) |
| security | 2 | [vllm_mlx/mcp/security.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/mcp/security.py)<br>[tests/test_mcp_security.py](../../../../sources/waybarrios__vllm-mlx/tests/test_mcp_security.py) |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/waybarrios__vllm-mlx/.github/workflows/ci.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 95 | [README.es.md](../../../../sources/waybarrios__vllm-mlx/README.es.md)<br>[README.fr.md](../../../../sources/waybarrios__vllm-mlx/README.fr.md)<br>[README.md](../../../../sources/waybarrios__vllm-mlx/README.md)<br>[README.zh.md](../../../../sources/waybarrios__vllm-mlx/README.zh.md)<br>[docs/index.md](../../../../sources/waybarrios__vllm-mlx/docs/index.md)<br>[docs/zh/index.md](../../../../sources/waybarrios__vllm-mlx/docs/zh/index.md)<br>[docs/zh/reference/cli.md](../../../../sources/waybarrios__vllm-mlx/docs/zh/reference/cli.md)<br>[docs/zh/reference/configuration.md](../../../../sources/waybarrios__vllm-mlx/docs/zh/reference/configuration.md) |
| config | 1 | [pyproject.toml](../../../../sources/waybarrios__vllm-mlx/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 116 | [vlm_benchmark_results.json](../../../../sources/waybarrios__vllm-mlx/vlm_benchmark_results.json)<br>[vllm_mlx/bench_serve.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/bench_serve.py)<br>[vllm_mlx/benchmark.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/benchmark.py)<br>[vllm_mlx/bench_serve_prompts/long.json](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/bench_serve_prompts/long.json)<br>[vllm_mlx/bench_serve_prompts/medium.json](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/bench_serve_prompts/medium.json)<br>[vllm_mlx/bench_serve_prompts/short.json](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/bench_serve_prompts/short.json) |
| CI workflow | 1 | [.github/workflows/ci.yml](../../../../sources/waybarrios__vllm-mlx/.github/workflows/ci.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 2 | [vllm_mlx/mcp/security.py](../../../../sources/waybarrios__vllm-mlx/vllm_mlx/mcp/security.py)<br>[tests/test_mcp_security.py](../../../../sources/waybarrios__vllm-mlx/tests/test_mcp_security.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `mcp.example.json`, `vllm_mlx/mcp/__init__.py`, `vllm_mlx/mcp/client.py`.
2. entrypoint를 따라 실행 흐름 확인: `vllm_mlx/server.py`, `docs/zh/guides/server.md`, `docs/guides/server.md`.
3. agent/tool runtime 매핑: `vllm_mlx/memory_cache.py`, `vllm_mlx/tool_parsers/__init__.py`, `vllm_mlx/tool_parsers/abstract_tool_parser.py`.
4. retrieval/memory/indexing 확인: `vllm_mlx/embedding.py`, `vllm_mlx/memory_cache.py`, `vllm_mlx/vision_embedding_cache.py`.
5. test/eval 파일로 동작 검증: `vlm_benchmark_results.json`, `vllm_mlx/bench_serve.py`, `vllm_mlx/benchmark.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 OpenAI and Anthropic compatible server for Apple Silicon. Run LLMs and vision language models Llama, Qwen VL, LLaVA with. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, mcp, fastapi이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
