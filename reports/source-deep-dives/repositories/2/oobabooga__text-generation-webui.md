# oobabooga/text-generation-webui Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 358 files, 64 directories.

## 요약

- 조사 단위: `sources/oobabooga__text-generation-webui` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 358 files, 64 directories, depth score 119, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=server.py, js/main.js, desktop/main.js이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | oobabooga/text-generation-webui |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/oobabooga__text-generation-webui](../../../../sources/oobabooga__text-generation-webui) |
| Existing report | [reports/clone-structures/oobabooga__text-generation-webui.md](../../../clone-structures/oobabooga__text-generation-webui.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 358 / 64 |
| Max observed depth | 6 |
| Top directories | .github, css, desktop, docker, docs, extensions, js, modules, requirements, user_data |
| Top extensions | .py: 97, .woff: 38, .woff2: 38, .txt: 35, .md: 24, .ttf: 22, .css: 17, .js: 16, .yml: 13, .yaml: 12, (none): 9, .gbnf: 8 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 18 |
| .github | ci surface | 1 |
| css | top-level component | 1 |
| desktop | top-level component | 1 |
| docker | documentation surface | 1 |
| extensions | top-level component | 1 |
| js | top-level component | 1 |
| modules | top-level component | 1 |
| requirements | top-level component | 1 |
| user_data | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


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
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [server.py](../../../../sources/oobabooga__text-generation-webui/server.py) | entrypoints signal |
| entrypoints | [js/main.js](../../../../sources/oobabooga__text-generation-webui/js/main.js) | entrypoints signal |
| entrypoints | [desktop/main.js](../../../../sources/oobabooga__text-generation-webui/desktop/main.js) | entrypoints signal |
| container | [docker/TensorRT-LLM/Dockerfile](../../../../sources/oobabooga__text-generation-webui/docker/TensorRT-LLM/Dockerfile) | container signal |
| container | [docker/nvidia/docker-compose.yml](../../../../sources/oobabooga__text-generation-webui/docker/nvidia/docker-compose.yml) | container signal |
| container | [docker/nvidia/Dockerfile](../../../../sources/oobabooga__text-generation-webui/docker/nvidia/Dockerfile) | container signal |
| container | [docker/intel/docker-compose.yml](../../../../sources/oobabooga__text-generation-webui/docker/intel/docker-compose.yml) | container signal |
| config | [requirements/portable/requirements_amd.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_amd.txt) | config signal |
| config | [requirements/portable/requirements_apple_intel.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_apple_intel.txt) | config signal |
| config | [requirements/portable/requirements_apple_silicon.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_apple_silicon.txt) | config signal |
| config | [requirements/portable/requirements_cpu_only.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_cpu_only.txt) | config signal |
| ci | [.github/workflows/build-everything-tgw.yml](../../../../sources/oobabooga__text-generation-webui/.github/workflows/build-everything-tgw.yml) | ci signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [server.py](../../../../sources/oobabooga__text-generation-webui/server.py)<br>[js/main.js](../../../../sources/oobabooga__text-generation-webui/js/main.js)<br>[desktop/main.js](../../../../sources/oobabooga__text-generation-webui/desktop/main.js) |
| agentRuntime | 7 | [user_data/tools/calculate.py](../../../../sources/oobabooga__text-generation-webui/user_data/tools/calculate.py)<br>[user_data/tools/fetch_webpage.py](../../../../sources/oobabooga__text-generation-webui/user_data/tools/fetch_webpage.py)<br>[user_data/tools/get_datetime.py](../../../../sources/oobabooga__text-generation-webui/user_data/tools/get_datetime.py)<br>[user_data/tools/roll_dice.py](../../../../sources/oobabooga__text-generation-webui/user_data/tools/roll_dice.py)<br>[user_data/tools/web_search.py](../../../../sources/oobabooga__text-generation-webui/user_data/tools/web_search.py)<br>[modules/tool_parsing.py](../../../../sources/oobabooga__text-generation-webui/modules/tool_parsing.py)<br>[modules/tool_use.py](../../../../sources/oobabooga__text-generation-webui/modules/tool_use.py) |
| mcp | 0 | not obvious |
| retrieval | 1 | [modules/api/cache_embedding_model.py](../../../../sources/oobabooga__text-generation-webui/modules/api/cache_embedding_model.py) |
| spec | 24 | [requirements/portable/requirements_amd.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_amd.txt)<br>[requirements/portable/requirements_apple_intel.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_apple_intel.txt)<br>[requirements/portable/requirements_apple_silicon.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_apple_silicon.txt)<br>[requirements/portable/requirements_cpu_only.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_cpu_only.txt)<br>[requirements/portable/requirements_cuda131.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_cuda131.txt)<br>[requirements/portable/requirements_ik_cpu_only.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_ik_cpu_only.txt)<br>[requirements/portable/requirements_ik_cuda131.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_ik_cuda131.txt)<br>[requirements/portable/requirements_ik.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_ik.txt) |
| eval | 4 | [extensions/superboogav2/benchmark.py](../../../../sources/oobabooga__text-generation-webui/extensions/superboogav2/benchmark.py)<br>[extensions/superboogav2/benchmark_texts/aircraft_lease.txt](../../../../sources/oobabooga__text-generation-webui/extensions/superboogav2/benchmark_texts/aircraft_lease.txt)<br>[extensions/superboogav2/benchmark_texts/questions.json](../../../../sources/oobabooga__text-generation-webui/extensions/superboogav2/benchmark_texts/questions.json)<br>[extensions/silero_tts/test_tts.py](../../../../sources/oobabooga__text-generation-webui/extensions/silero_tts/test_tts.py) |
| security | 0 | not obvious |
| ci | 7 | [.github/workflows/build-everything-tgw.yml](../../../../sources/oobabooga__text-generation-webui/.github/workflows/build-everything-tgw.yml)<br>[.github/workflows/build-portable-release-cuda.yml](../../../../sources/oobabooga__text-generation-webui/.github/workflows/build-portable-release-cuda.yml)<br>[.github/workflows/build-portable-release-ik-cuda.yml](../../../../sources/oobabooga__text-generation-webui/.github/workflows/build-portable-release-ik-cuda.yml)<br>[.github/workflows/build-portable-release-ik.yml](../../../../sources/oobabooga__text-generation-webui/.github/workflows/build-portable-release-ik.yml)<br>[.github/workflows/build-portable-release-rocm.yml](../../../../sources/oobabooga__text-generation-webui/.github/workflows/build-portable-release-rocm.yml)<br>[.github/workflows/build-portable-release-vulkan.yml](../../../../sources/oobabooga__text-generation-webui/.github/workflows/build-portable-release-vulkan.yml)<br>[.github/workflows/build-portable-release.yml](../../../../sources/oobabooga__text-generation-webui/.github/workflows/build-portable-release.yml) |
| container | 9 | [docker/TensorRT-LLM/Dockerfile](../../../../sources/oobabooga__text-generation-webui/docker/TensorRT-LLM/Dockerfile)<br>[docker/nvidia/docker-compose.yml](../../../../sources/oobabooga__text-generation-webui/docker/nvidia/docker-compose.yml)<br>[docker/nvidia/Dockerfile](../../../../sources/oobabooga__text-generation-webui/docker/nvidia/Dockerfile)<br>[docker/intel/docker-compose.yml](../../../../sources/oobabooga__text-generation-webui/docker/intel/docker-compose.yml)<br>[docker/intel/Dockerfile](../../../../sources/oobabooga__text-generation-webui/docker/intel/Dockerfile)<br>[docker/cpu/docker-compose.yml](../../../../sources/oobabooga__text-generation-webui/docker/cpu/docker-compose.yml)<br>[docker/cpu/Dockerfile](../../../../sources/oobabooga__text-generation-webui/docker/cpu/Dockerfile)<br>[docker/amd/docker-compose.yml](../../../../sources/oobabooga__text-generation-webui/docker/amd/docker-compose.yml) |
| instruction | 0 | not obvious |
| docs | 22 | [README.md](../../../../sources/oobabooga__text-generation-webui/README.md)<br>[extensions/whisper_stt/readme.md](../../../../sources/oobabooga__text-generation-webui/extensions/whisper_stt/readme.md)<br>[extensions/superboogav2/README.md](../../../../sources/oobabooga__text-generation-webui/extensions/superboogav2/README.md)<br>[extensions/sd_api_pictures/README.MD](../../../../sources/oobabooga__text-generation-webui/extensions/sd_api_pictures/README.MD)<br>[extensions/ngrok/README.md](../../../../sources/oobabooga__text-generation-webui/extensions/ngrok/README.md)<br>[docs/01 - Chat Tab.md](../../../../sources/oobabooga__text-generation-webui/docs/01 - Chat Tab.md)<br>[docs/02 - Default and Notebook Tabs.md](../../../../sources/oobabooga__text-generation-webui/docs/02 - Default and Notebook Tabs.md)<br>[docs/03 - Parameters Tab.md](../../../../sources/oobabooga__text-generation-webui/docs/03 - Parameters Tab.md) |
| config | 25 | [requirements/portable/requirements_amd.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_amd.txt)<br>[requirements/portable/requirements_apple_intel.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_apple_intel.txt)<br>[requirements/portable/requirements_apple_silicon.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_apple_silicon.txt)<br>[requirements/portable/requirements_cpu_only.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_cpu_only.txt)<br>[requirements/portable/requirements_cuda131.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_cuda131.txt)<br>[requirements/portable/requirements_ik_cpu_only.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_ik_cpu_only.txt)<br>[requirements/portable/requirements_ik_cuda131.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_ik_cuda131.txt)<br>[requirements/portable/requirements_ik.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_ik.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 4 | [extensions/superboogav2/benchmark.py](../../../../sources/oobabooga__text-generation-webui/extensions/superboogav2/benchmark.py)<br>[extensions/superboogav2/benchmark_texts/aircraft_lease.txt](../../../../sources/oobabooga__text-generation-webui/extensions/superboogav2/benchmark_texts/aircraft_lease.txt)<br>[extensions/superboogav2/benchmark_texts/questions.json](../../../../sources/oobabooga__text-generation-webui/extensions/superboogav2/benchmark_texts/questions.json)<br>[extensions/silero_tts/test_tts.py](../../../../sources/oobabooga__text-generation-webui/extensions/silero_tts/test_tts.py) |
| CI workflows | 7 | [.github/workflows/build-everything-tgw.yml](../../../../sources/oobabooga__text-generation-webui/.github/workflows/build-everything-tgw.yml)<br>[.github/workflows/build-portable-release-cuda.yml](../../../../sources/oobabooga__text-generation-webui/.github/workflows/build-portable-release-cuda.yml)<br>[.github/workflows/build-portable-release-ik-cuda.yml](../../../../sources/oobabooga__text-generation-webui/.github/workflows/build-portable-release-ik-cuda.yml)<br>[.github/workflows/build-portable-release-ik.yml](../../../../sources/oobabooga__text-generation-webui/.github/workflows/build-portable-release-ik.yml)<br>[.github/workflows/build-portable-release-rocm.yml](../../../../sources/oobabooga__text-generation-webui/.github/workflows/build-portable-release-rocm.yml)<br>[.github/workflows/build-portable-release-vulkan.yml](../../../../sources/oobabooga__text-generation-webui/.github/workflows/build-portable-release-vulkan.yml) |
| Containers / deploy | 9 | [docker/TensorRT-LLM/Dockerfile](../../../../sources/oobabooga__text-generation-webui/docker/TensorRT-LLM/Dockerfile)<br>[docker/nvidia/docker-compose.yml](../../../../sources/oobabooga__text-generation-webui/docker/nvidia/docker-compose.yml)<br>[docker/nvidia/Dockerfile](../../../../sources/oobabooga__text-generation-webui/docker/nvidia/Dockerfile)<br>[docker/intel/docker-compose.yml](../../../../sources/oobabooga__text-generation-webui/docker/intel/docker-compose.yml)<br>[docker/intel/Dockerfile](../../../../sources/oobabooga__text-generation-webui/docker/intel/Dockerfile)<br>[docker/cpu/docker-compose.yml](../../../../sources/oobabooga__text-generation-webui/docker/cpu/docker-compose.yml) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `server.py`, `js/main.js`, `desktop/main.js`.
2. Trace execution through entrypoints: `server.py`, `js/main.js`, `desktop/main.js`.
3. Map agent/tool runtime through: `user_data/tools/calculate.py`, `user_data/tools/fetch_webpage.py`, `user_data/tools/get_datetime.py`.
4. Inspect retrieval/memory/indexing through: `modules/api/cache_embedding_model.py`.
5. Verify behavior through test/eval files: `extensions/superboogav2/benchmark.py`, `extensions/superboogav2/benchmark_texts/aircraft_lease.txt`, `extensions/superboogav2/benchmark_texts/questions.json`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 Local clone structure analysis 358 files, 64 directories.. 핵심 구조 신호는 README.md, LICENSE, ci, docs, spec-artifacts, 358 files이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, license metadata missing입니다.
