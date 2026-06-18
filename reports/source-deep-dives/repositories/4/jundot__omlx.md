# jundot/omlx Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

LLM inference server with continuous batching & SSD caching for Apple Silicon — managed from the macOS menu bar

## 요약

- 조사 단위: `sources/jundot__omlx` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 682 files, 77 directories, depth score 103, key references 6개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=omlx/server.py이고, 의존성 단서는 openai, mcp, fastapi, torch, transformers, vllm, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 6개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | jundot/omlx |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 16768 |
| Forks | 1419 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/jundot__omlx](../../../../sources/jundot__omlx) |
| Existing report | [reports/global-trending/repositories/jundot__omlx.md](../../../global-trending/repositories/jundot__omlx.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 682 / 77 |
| Max observed depth | 6 |
| Top directories | .github, apps, docs, Formula, omlx, packaging, scripts, tests |
| Top extensions | .py: 365, .swift: 93, .png: 39, .woff2: 38, .json: 22, .jsonl: 20, .ttf: 20, .svg: 16, .js: 14, .html: 12, .md: 12, .css: 11 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 64 |
| docs | documentation surface | 34 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| Formula | top-level component | 1 |
| omlx | top-level component | 1 |
| packaging | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | omlx | omlx |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | torch, transformers, vllm |
| webRuntime | fastapi |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [omlx/server.py](../../../../sources/jundot__omlx/omlx/server.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/jundot__omlx/pyproject.toml) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/jundot__omlx/.github/workflows/ci.yml) | ci signal |
| ci | [.github/workflows/update-formula.yml](../../../../sources/jundot__omlx/.github/workflows/update-formula.yml) | ci signal |
| eval | [tests/bench_grammar_bitmask.py](../../../../sources/jundot__omlx/tests/bench_grammar_bitmask.py) | eval support |
| eval | [tests/bench_results.csv](../../../../sources/jundot__omlx/tests/bench_results.csv) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [omlx/server.py](../../../../sources/jundot__omlx/omlx/server.py) |
| agentRuntime | 5 | [omlx/memory_monitor.py](../../../../sources/jundot__omlx/omlx/memory_monitor.py)<br>[omlx/patches/deepseek_v4/tool_parser_v4.py](../../../../sources/jundot__omlx/omlx/patches/deepseek_v4/tool_parser_v4.py)<br>[omlx/mcp/executor.py](../../../../sources/jundot__omlx/omlx/mcp/executor.py)<br>[omlx/mcp/tools.py](../../../../sources/jundot__omlx/omlx/mcp/tools.py)<br>[omlx/api/tool_calling.py](../../../../sources/jundot__omlx/omlx/api/tool_calling.py) |
| mcp | 16 | [mcp.example.json](../../../../sources/jundot__omlx/mcp.example.json)<br>[tests/test_mcp_client.py](../../../../sources/jundot__omlx/tests/test_mcp_client.py)<br>[tests/test_mcp_config.py](../../../../sources/jundot__omlx/tests/test_mcp_config.py)<br>[tests/test_mcp_executor.py](../../../../sources/jundot__omlx/tests/test_mcp_executor.py)<br>[tests/test_mcp_manager.py](../../../../sources/jundot__omlx/tests/test_mcp_manager.py)<br>[tests/test_mcp_routes.py](../../../../sources/jundot__omlx/tests/test_mcp_routes.py)<br>[tests/test_mcp_tools.py](../../../../sources/jundot__omlx/tests/test_mcp_tools.py)<br>[tests/test_mcp_types.py](../../../../sources/jundot__omlx/tests/test_mcp_types.py) |
| retrieval | 19 | [tests/test_audio_memory.py](../../../../sources/jundot__omlx/tests/test_audio_memory.py)<br>[tests/test_dflash_prefill_memory_guard.py](../../../../sources/jundot__omlx/tests/test_dflash_prefill_memory_guard.py)<br>[tests/test_embedding.py](../../../../sources/jundot__omlx/tests/test_embedding.py)<br>[tests/test_index_cache.py](../../../../sources/jundot__omlx/tests/test_index_cache.py)<br>[tests/test_memory_monitor_vlm_config.py](../../../../sources/jundot__omlx/tests/test_memory_monitor_vlm_config.py)<br>[tests/test_memory_monitor.py](../../../../sources/jundot__omlx/tests/test_memory_monitor.py)<br>[tests/test_proc_memory.py](../../../../sources/jundot__omlx/tests/test_proc_memory.py)<br>[tests/test_process_memory_enforcer.py](../../../../sources/jundot__omlx/tests/test_process_memory_enforcer.py) |
| spec | 0 | not obvious |
| eval | 255 | [tests/bench_grammar_bitmask.py](../../../../sources/jundot__omlx/tests/bench_grammar_bitmask.py)<br>[tests/bench_results.csv](../../../../sources/jundot__omlx/tests/bench_results.csv)<br>[tests/conftest.py](../../../../sources/jundot__omlx/tests/conftest.py)<br>[tests/e2e_vision_cache.py](../../../../sources/jundot__omlx/tests/e2e_vision_cache.py)<br>[tests/mocks.py](../../../../sources/jundot__omlx/tests/mocks.py)<br>[tests/test_accuracy_benchmark.py](../../../../sources/jundot__omlx/tests/test_accuracy_benchmark.py)<br>[tests/test_active_models_visibility.py](../../../../sources/jundot__omlx/tests/test_active_models_visibility.py)<br>[tests/test_admin_api_key.py](../../../../sources/jundot__omlx/tests/test_admin_api_key.py) |
| security | 6 | [tests/test_admin_auth.py](../../../../sources/jundot__omlx/tests/test_admin_auth.py)<br>[tests/test_api_auth.py](../../../../sources/jundot__omlx/tests/test_api_auth.py)<br>[tests/test_dflash_prefill_memory_guard.py](../../../../sources/jundot__omlx/tests/test_dflash_prefill_memory_guard.py)<br>[tests/test_disconnect_guard.py](../../../../sources/jundot__omlx/tests/test_disconnect_guard.py)<br>[tests/test_scheduler_prefill_memory_guard.py](../../../../sources/jundot__omlx/tests/test_scheduler_prefill_memory_guard.py)<br>[omlx/admin/auth.py](../../../../sources/jundot__omlx/omlx/admin/auth.py) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/jundot__omlx/.github/workflows/ci.yml)<br>[.github/workflows/update-formula.yml](../../../../sources/jundot__omlx/.github/workflows/update-formula.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 46 | [README.fr.md](../../../../sources/jundot__omlx/README.fr.md)<br>[README.ja.md](../../../../sources/jundot__omlx/README.ja.md)<br>[README.ko.md](../../../../sources/jundot__omlx/README.ko.md)<br>[README.md](../../../../sources/jundot__omlx/README.md)<br>[README.zh.md](../../../../sources/jundot__omlx/README.zh.md)<br>[packaging/README.md](../../../../sources/jundot__omlx/packaging/README.md)<br>[omlx/patches/deepseek_v4/README.md](../../../../sources/jundot__omlx/omlx/patches/deepseek_v4/README.md)<br>[docs/CONTRIBUTING.md](../../../../sources/jundot__omlx/docs/CONTRIBUTING.md) |
| config | 1 | [pyproject.toml](../../../../sources/jundot__omlx/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 255 | [tests/bench_grammar_bitmask.py](../../../../sources/jundot__omlx/tests/bench_grammar_bitmask.py)<br>[tests/bench_results.csv](../../../../sources/jundot__omlx/tests/bench_results.csv)<br>[tests/conftest.py](../../../../sources/jundot__omlx/tests/conftest.py)<br>[tests/e2e_vision_cache.py](../../../../sources/jundot__omlx/tests/e2e_vision_cache.py)<br>[tests/mocks.py](../../../../sources/jundot__omlx/tests/mocks.py)<br>[tests/test_accuracy_benchmark.py](../../../../sources/jundot__omlx/tests/test_accuracy_benchmark.py) |
| CI workflows | 2 | [.github/workflows/ci.yml](../../../../sources/jundot__omlx/.github/workflows/ci.yml)<br>[.github/workflows/update-formula.yml](../../../../sources/jundot__omlx/.github/workflows/update-formula.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 6 | [tests/test_admin_auth.py](../../../../sources/jundot__omlx/tests/test_admin_auth.py)<br>[tests/test_api_auth.py](../../../../sources/jundot__omlx/tests/test_api_auth.py)<br>[tests/test_dflash_prefill_memory_guard.py](../../../../sources/jundot__omlx/tests/test_dflash_prefill_memory_guard.py)<br>[tests/test_disconnect_guard.py](../../../../sources/jundot__omlx/tests/test_disconnect_guard.py)<br>[tests/test_scheduler_prefill_memory_guard.py](../../../../sources/jundot__omlx/tests/test_scheduler_prefill_memory_guard.py)<br>[omlx/admin/auth.py](../../../../sources/jundot__omlx/omlx/admin/auth.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `omlx/server.py`, `pyproject.toml`, `.github/workflows/ci.yml`.
2. Trace execution through entrypoints: `omlx/server.py`.
3. Map agent/tool runtime through: `omlx/memory_monitor.py`, `omlx/patches/deepseek_v4/tool_parser_v4.py`, `omlx/mcp/executor.py`.
4. Inspect retrieval/memory/indexing through: `tests/test_audio_memory.py`, `tests/test_dflash_prefill_memory_guard.py`, `tests/test_embedding.py`.
5. Verify behavior through test/eval files: `tests/bench_grammar_bitmask.py`, `tests/bench_results.csv`, `tests/conftest.py`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 LLM inference server with continuous batching & SSD caching for Apple Silicon — managed from the macOS menu bar. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, openai, mcp이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
