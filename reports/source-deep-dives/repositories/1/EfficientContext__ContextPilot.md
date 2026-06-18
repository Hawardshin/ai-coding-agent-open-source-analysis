# EfficientContext/ContextPilot Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Accelerating Long Context LLM Inference with Accuracy-Preserving Context Optimization in SGLang, vLLM, llama.cpp, OpenClaw, RAG, and Agentic AI.

## 요약

- 조사 단위: `sources/EfficientContext__ContextPilot` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 192 files, 35 directories, depth score 110, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=opencode-plugin/src/index.test.ts, opencode-plugin/src/index.ts, openclaw-plugin/src/index.ts이고, 의존성 단서는 openai, fastapi, transformers, llama, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | EfficientContext/ContextPilot |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 115 |
| Forks | 5 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/EfficientContext__ContextPilot](../../../../sources/EfficientContext__ContextPilot) |
| Existing report | [reports/global-trending/repositories/EfficientContext__ContextPilot.md](../../../global-trending/repositories/EfficientContext__ContextPilot.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 192 / 35 |
| Max observed depth | 4 |
| Top directories | .github, .opencode, assets, contextpilot, docker, docs, examples, openclaw-plugin, opencode-plugin, scripts, skills, tests |
| Top extensions | .py: 101, .md: 29, .ts: 21, .json: 7, .png: 7, .sh: 6, .yml: 6, (none): 5, .example: 1, .jpg: 1, .lmcache: 1, .lock: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 39 |
| docs | documentation surface | 25 |
| examples/openclaw | examples workspace | 4 |
| examples/construct_rag_data | examples workspace | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| contextpilot | top-level component | 1 |
| docker | documentation surface | 1 |
| examples | top-level component | 1 |
| examples/offline | examples workspace | 1 |
| examples/README.md | examples workspace | 1 |
| openclaw-plugin | top-level component | 1 |
| opencode-plugin | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | pyproject.toml | contextpilot-llama-server | contextpilot-llama-server |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | transformers, llama |
| webRuntime | fastapi |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [opencode-plugin/src/index.test.ts](../../../../sources/EfficientContext__ContextPilot/opencode-plugin/src/index.test.ts) | entrypoints signal |
| entrypoints | [opencode-plugin/src/index.ts](../../../../sources/EfficientContext__ContextPilot/opencode-plugin/src/index.ts) | entrypoints signal |
| entrypoints | [openclaw-plugin/src/index.ts](../../../../sources/EfficientContext__ContextPilot/openclaw-plugin/src/index.ts) | entrypoints signal |
| container | [examples/openclaw/docker-compose.yml](../../../../sources/EfficientContext__ContextPilot/examples/openclaw/docker-compose.yml) | container signal |
| container | [examples/openclaw/Dockerfile](../../../../sources/EfficientContext__ContextPilot/examples/openclaw/Dockerfile) | container signal |
| container | [docker/Dockerfile](../../../../sources/EfficientContext__ContextPilot/docker/Dockerfile) | container signal |
| container | [docker/Dockerfile.lmcache](../../../../sources/EfficientContext__ContextPilot/docker/Dockerfile.lmcache) | container signal |
| config | [pyproject.toml](../../../../sources/EfficientContext__ContextPilot/pyproject.toml) | config signal |
| config | [requirements.txt](../../../../sources/EfficientContext__ContextPilot/requirements.txt) | config signal |
| config | [opencode-plugin/package.json](../../../../sources/EfficientContext__ContextPilot/opencode-plugin/package.json) | config signal |
| config | [opencode-plugin/tsconfig.json](../../../../sources/EfficientContext__ContextPilot/opencode-plugin/tsconfig.json) | config signal |
| ci | [.github/workflows/bump-plugin.yml](../../../../sources/EfficientContext__ContextPilot/.github/workflows/bump-plugin.yml) | ci signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [opencode-plugin/src/index.test.ts](../../../../sources/EfficientContext__ContextPilot/opencode-plugin/src/index.test.ts)<br>[opencode-plugin/src/index.ts](../../../../sources/EfficientContext__ContextPilot/opencode-plugin/src/index.ts)<br>[openclaw-plugin/src/index.ts](../../../../sources/EfficientContext__ContextPilot/openclaw-plugin/src/index.ts) |
| agentRuntime | 11 | [skills/contextpilot-savings/SKILL.md](../../../../sources/EfficientContext__ContextPilot/skills/contextpilot-savings/SKILL.md)<br>[examples/openclaw/SKILL.md](../../../../sources/EfficientContext__ContextPilot/examples/openclaw/SKILL.md)<br>[contextpilot/utils/tools.py](../../../../sources/EfficientContext__ContextPilot/contextpilot/utils/tools.py)<br>[contextpilot/context_ordering/__init__.py](../../../../sources/EfficientContext__ContextPilot/contextpilot/context_ordering/__init__.py)<br>[contextpilot/context_ordering/inter_scheduler.py](../../../../sources/EfficientContext__ContextPilot/contextpilot/context_ordering/inter_scheduler.py)<br>[contextpilot/context_ordering/intra_ordering.py](../../../../sources/EfficientContext__ContextPilot/contextpilot/context_ordering/intra_ordering.py)<br>[contextpilot/context_index/__init__.py](../../../../sources/EfficientContext__ContextPilot/contextpilot/context_index/__init__.py)<br>[contextpilot/context_index/compute_distance_cpu.py](../../../../sources/EfficientContext__ContextPilot/contextpilot/context_index/compute_distance_cpu.py) |
| mcp | 0 | not obvious |
| retrieval | 18 | [tests/test_context_index.py](../../../../sources/EfficientContext__ContextPilot/tests/test_context_index.py)<br>[tests/test_live_index.py](../../../../sources/EfficientContext__ContextPilot/tests/test_live_index.py)<br>[opencode-plugin/src/index.test.ts](../../../../sources/EfficientContext__ContextPilot/opencode-plugin/src/index.test.ts)<br>[opencode-plugin/src/index.ts](../../../../sources/EfficientContext__ContextPilot/opencode-plugin/src/index.ts)<br>[openclaw-plugin/src/index.ts](../../../../sources/EfficientContext__ContextPilot/openclaw-plugin/src/index.ts)<br>[openclaw-plugin/src/engine/index-construction.ts](../../../../sources/EfficientContext__ContextPilot/openclaw-plugin/src/engine/index-construction.ts)<br>[openclaw-plugin/src/engine/live-index.ts](../../../../sources/EfficientContext__ContextPilot/openclaw-plugin/src/engine/live-index.ts)<br>[examples/construct_rag_data/multihopRAG_bm25.py](../../../../sources/EfficientContext__ContextPilot/examples/construct_rag_data/multihopRAG_bm25.py) |
| spec | 1 | [requirements.txt](../../../../sources/EfficientContext__ContextPilot/requirements.txt) |
| eval | 49 | [tests/conftest.py](../../../../sources/EfficientContext__ContextPilot/tests/conftest.py)<br>[tests/e2e_monkeypatch_test.py](../../../../sources/EfficientContext__ContextPilot/tests/e2e_monkeypatch_test.py)<br>[tests/test_block_dedup_regression.py](../../../../sources/EfficientContext__ContextPilot/tests/test_block_dedup_regression.py)<br>[tests/test_cloud_adapters.py](../../../../sources/EfficientContext__ContextPilot/tests/test_cloud_adapters.py)<br>[tests/test_cloud_proxy_integration.py](../../../../sources/EfficientContext__ContextPilot/tests/test_cloud_proxy_integration.py)<br>[tests/test_context_index.py](../../../../sources/EfficientContext__ContextPilot/tests/test_context_index.py)<br>[tests/test_context_ordering.py](../../../../sources/EfficientContext__ContextPilot/tests/test_context_ordering.py)<br>[tests/test_contextpilot_savings_skill.py](../../../../sources/EfficientContext__ContextPilot/tests/test_contextpilot_savings_skill.py) |
| security | 0 | not obvious |
| ci | 5 | [.github/workflows/bump-plugin.yml](../../../../sources/EfficientContext__ContextPilot/.github/workflows/bump-plugin.yml)<br>[.github/workflows/release-plugin.yml](../../../../sources/EfficientContext__ContextPilot/.github/workflows/release-plugin.yml)<br>[.github/workflows/release.yml](../../../../sources/EfficientContext__ContextPilot/.github/workflows/release.yml)<br>[.github/workflows/sync-docs.yml](../../../../sources/EfficientContext__ContextPilot/.github/workflows/sync-docs.yml)<br>[.github/workflows/test.yml](../../../../sources/EfficientContext__ContextPilot/.github/workflows/test.yml) |
| container | 6 | [examples/openclaw/docker-compose.yml](../../../../sources/EfficientContext__ContextPilot/examples/openclaw/docker-compose.yml)<br>[examples/openclaw/Dockerfile](../../../../sources/EfficientContext__ContextPilot/examples/openclaw/Dockerfile)<br>[docker/Dockerfile](../../../../sources/EfficientContext__ContextPilot/docker/Dockerfile)<br>[docker/Dockerfile.lmcache](../../../../sources/EfficientContext__ContextPilot/docker/Dockerfile.lmcache)<br>[docker/Dockerfile.sglang](../../../../sources/EfficientContext__ContextPilot/docker/Dockerfile.sglang)<br>[docker/Dockerfile.vllm](../../../../sources/EfficientContext__ContextPilot/docker/Dockerfile.vllm) |
| instruction | 0 | not obvious |
| docs | 28 | [README.md](../../../../sources/EfficientContext__ContextPilot/README.md)<br>[openclaw-plugin/README.md](../../../../sources/EfficientContext__ContextPilot/openclaw-plugin/README.md)<br>[examples/README.md](../../../../sources/EfficientContext__ContextPilot/examples/README.md)<br>[examples/openclaw/README.md](../../../../sources/EfficientContext__ContextPilot/examples/openclaw/README.md)<br>[examples/offline/README.md](../../../../sources/EfficientContext__ContextPilot/examples/offline/README.md)<br>[docs/README.md](../../../../sources/EfficientContext__ContextPilot/docs/README.md)<br>[docs/reference/api.md](../../../../sources/EfficientContext__ContextPilot/docs/reference/api.md)<br>[docs/reference/benchmarks.md](../../../../sources/EfficientContext__ContextPilot/docs/reference/benchmarks.md) |
| config | 6 | [pyproject.toml](../../../../sources/EfficientContext__ContextPilot/pyproject.toml)<br>[requirements.txt](../../../../sources/EfficientContext__ContextPilot/requirements.txt)<br>[opencode-plugin/package.json](../../../../sources/EfficientContext__ContextPilot/opencode-plugin/package.json)<br>[opencode-plugin/tsconfig.json](../../../../sources/EfficientContext__ContextPilot/opencode-plugin/tsconfig.json)<br>[openclaw-plugin/package.json](../../../../sources/EfficientContext__ContextPilot/openclaw-plugin/package.json)<br>[openclaw-plugin/tsconfig.json](../../../../sources/EfficientContext__ContextPilot/openclaw-plugin/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 49 | [tests/conftest.py](../../../../sources/EfficientContext__ContextPilot/tests/conftest.py)<br>[tests/e2e_monkeypatch_test.py](../../../../sources/EfficientContext__ContextPilot/tests/e2e_monkeypatch_test.py)<br>[tests/test_block_dedup_regression.py](../../../../sources/EfficientContext__ContextPilot/tests/test_block_dedup_regression.py)<br>[tests/test_cloud_adapters.py](../../../../sources/EfficientContext__ContextPilot/tests/test_cloud_adapters.py)<br>[tests/test_cloud_proxy_integration.py](../../../../sources/EfficientContext__ContextPilot/tests/test_cloud_proxy_integration.py)<br>[tests/test_context_index.py](../../../../sources/EfficientContext__ContextPilot/tests/test_context_index.py) |
| CI workflows | 5 | [.github/workflows/bump-plugin.yml](../../../../sources/EfficientContext__ContextPilot/.github/workflows/bump-plugin.yml)<br>[.github/workflows/release-plugin.yml](../../../../sources/EfficientContext__ContextPilot/.github/workflows/release-plugin.yml)<br>[.github/workflows/release.yml](../../../../sources/EfficientContext__ContextPilot/.github/workflows/release.yml)<br>[.github/workflows/sync-docs.yml](../../../../sources/EfficientContext__ContextPilot/.github/workflows/sync-docs.yml)<br>[.github/workflows/test.yml](../../../../sources/EfficientContext__ContextPilot/.github/workflows/test.yml) |
| Containers / deploy | 6 | [examples/openclaw/docker-compose.yml](../../../../sources/EfficientContext__ContextPilot/examples/openclaw/docker-compose.yml)<br>[examples/openclaw/Dockerfile](../../../../sources/EfficientContext__ContextPilot/examples/openclaw/Dockerfile)<br>[docker/Dockerfile](../../../../sources/EfficientContext__ContextPilot/docker/Dockerfile)<br>[docker/Dockerfile.lmcache](../../../../sources/EfficientContext__ContextPilot/docker/Dockerfile.lmcache)<br>[docker/Dockerfile.sglang](../../../../sources/EfficientContext__ContextPilot/docker/Dockerfile.sglang)<br>[docker/Dockerfile.vllm](../../../../sources/EfficientContext__ContextPilot/docker/Dockerfile.vllm) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `opencode-plugin/src/index.test.ts`, `opencode-plugin/src/index.ts`, `openclaw-plugin/src/index.ts`.
2. Trace execution through entrypoints: `opencode-plugin/src/index.test.ts`, `opencode-plugin/src/index.ts`, `openclaw-plugin/src/index.ts`.
3. Map agent/tool runtime through: `skills/contextpilot-savings/SKILL.md`, `examples/openclaw/SKILL.md`, `contextpilot/utils/tools.py`.
4. Inspect retrieval/memory/indexing through: `tests/test_context_index.py`, `tests/test_live_index.py`, `opencode-plugin/src/index.test.ts`.
5. Verify behavior through test/eval files: `tests/conftest.py`, `tests/e2e_monkeypatch_test.py`, `tests/test_block_dedup_regression.py`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 Accelerating Long Context LLM Inference with Accuracy Preserving Context Optimization in SGLang, vLLM, llama.cpp, OpenCl. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, README.md, LICENSE, openai이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
