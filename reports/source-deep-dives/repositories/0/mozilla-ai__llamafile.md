# mozilla-ai/llamafile Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Distribute and run LLMs with a single file.

## 요약

- 조사 단위: `sources/mozilla-ai__llamafile` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 662 files, 48 directories, depth score 105, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=docs/whisperfile/server.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | mozilla-ai/llamafile |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | C++ |
| Stars | 24999 |
| Forks | 1398 |
| License | NOASSERTION |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/mozilla-ai__llamafile](../../../../sources/mozilla-ai__llamafile) |
| Existing report | [reports/global-trending/repositories/mozilla-ai__llamafile.md](../../../global-trending/repositories/mozilla-ai__llamafile.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 662 / 48 |
| Max observed depth | 4 |
| Top directories | .github, .llamafile_plugin, diffusionfile, docs, llama.cpp, llama.cpp.patches, llamafile, localscore, models, scripts, stable-diffusion.cpp, stable-diffusion.cpp.patches, tests, third_party, tools, whisper.cpp, whisper.cpp.patches, whisperfile |
| Top extensions | .h: 126, .cpp: 125, .c: 113, .gperf: 91, .patch: 42, .md: 37, .sh: 18, .mk: 16, .yml: 15, .pem: 13, .py: 13, (none): 9 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 40 |
| tests | validation surface | 33 |
| .github | ci surface | 1 |
| diffusionfile | top-level component | 1 |
| llama.cpp | top-level component | 1 |
| llama.cpp.patches | top-level component | 1 |
| llamafile | top-level component | 1 |
| localscore | top-level component | 1 |
| models | top-level component | 1 |
| scripts | top-level component | 1 |
| stable-diffusion.cpp | top-level component | 1 |
| stable-diffusion.cpp.patches | top-level component | 1 |
| third_party | top-level component | 1 |
| tools | top-level component | 1 |
| whisper.cpp | top-level component | 1 |
| whisper.cpp.patches | top-level component | 1 |
| whisperfile | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .SUFFIXES | make .SUFFIXES |
| utility | Makefile | .DELETE_ON_ERROR | make .DELETE_ON_ERROR |
| utility | Makefile | .FEATURES | make .FEATURES |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | install | make install |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | check | make check |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | cuda | make cuda |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | cublas | make cublas |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | rocm | make rocm |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | vulkan | make vulkan |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | cosmocc | make cosmocc |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | cosmocc-ci | make cosmocc-ci |


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
| entrypoints | [docs/whisperfile/server.md](../../../../sources/mozilla-ai__llamafile/docs/whisperfile/server.md) | entrypoints signal |
| config | [Makefile](../../../../sources/mozilla-ai__llamafile/Makefile) | config signal |
| config | [tests/integration/pyproject.toml](../../../../sources/mozilla-ai__llamafile/tests/integration/pyproject.toml) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/mozilla-ai__llamafile/.github/workflows/ci.yml) | ci signal |
| ci | [.github/workflows/docs.yml](../../../../sources/mozilla-ai__llamafile/.github/workflows/docs.yml) | ci signal |
| ci | [.github/workflows/editorconfig.yml](../../../../sources/mozilla-ai__llamafile/.github/workflows/editorconfig.yml) | ci signal |
| ci | [.github/workflows/labeler.yml](../../../../sources/mozilla-ai__llamafile/.github/workflows/labeler.yml) | ci signal |
| eval | [tests/BUILD.mk](../../../../sources/mozilla-ai__llamafile/tests/BUILD.mk) | eval support |
| eval | [tests/extract_data_uris_test.cpp](../../../../sources/mozilla-ai__llamafile/tests/extract_data_uris_test.cpp) | eval support |
| instruction | [docs/AGENTS.md](../../../../sources/mozilla-ai__llamafile/docs/AGENTS.md) | instruction support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [docs/whisperfile/server.md](../../../../sources/mozilla-ai__llamafile/docs/whisperfile/server.md) |
| agentRuntime | 14 | [tools/check_patches.sh](../../../../sources/mozilla-ai__llamafile/tools/check_patches.sh)<br>[tools/generate_patches.sh](../../../../sources/mozilla-ai__llamafile/tools/generate_patches.sh)<br>[third_party/mbedtls/memory_buffer_alloc.c](../../../../sources/mozilla-ai__llamafile/third_party/mbedtls/memory_buffer_alloc.c)<br>[third_party/mbedtls/memory_buffer_alloc.h](../../../../sources/mozilla-ai__llamafile/third_party/mbedtls/memory_buffer_alloc.h)<br>[llama.cpp.patches/patches/tools_server_server-models.cpp.patch](../../../../sources/mozilla-ai__llamafile/llama.cpp.patches/patches/tools_server_server-models.cpp.patch)<br>[llama.cpp.patches/patches/tools_server_server-queue.cpp.patch](../../../../sources/mozilla-ai__llamafile/llama.cpp.patches/patches/tools_server_server-queue.cpp.patch)<br>[llama.cpp.patches/patches/tools_server_server.cpp.patch](../../../../sources/mozilla-ai__llamafile/llama.cpp.patches/patches/tools_server_server.cpp.patch)<br>[docs/AGENTS.md](../../../../sources/mozilla-ai__llamafile/docs/AGENTS.md) |
| mcp | 0 | not obvious |
| retrieval | 4 | [third_party/mbedtls/memory_buffer_alloc.c](../../../../sources/mozilla-ai__llamafile/third_party/mbedtls/memory_buffer_alloc.c)<br>[third_party/mbedtls/memory_buffer_alloc.h](../../../../sources/mozilla-ai__llamafile/third_party/mbedtls/memory_buffer_alloc.h)<br>[docs/index.md](../../../../sources/mozilla-ai__llamafile/docs/index.md)<br>[docs/whisperfile/index.md](../../../../sources/mozilla-ai__llamafile/docs/whisperfile/index.md) |
| spec | 1 | [docs/skills/llamafile/architecture.md](../../../../sources/mozilla-ai__llamafile/docs/skills/llamafile/architecture.md) |
| eval | 35 | [tests/BUILD.mk](../../../../sources/mozilla-ai__llamafile/tests/BUILD.mk)<br>[tests/extract_data_uris_test.cpp](../../../../sources/mozilla-ai__llamafile/tests/extract_data_uris_test.cpp)<br>[tests/fa_helpers_test.cpp](../../../../sources/mozilla-ai__llamafile/tests/fa_helpers_test.cpp)<br>[tests/gpu_backend_test.cpp](../../../../sources/mozilla-ai__llamafile/tests/gpu_backend_test.cpp)<br>[tests/strsm/build_and_run.sh](../../../../sources/mozilla-ai__llamafile/tests/strsm/build_and_run.sh)<br>[tests/strsm/BUILD.mk](../../../../sources/mozilla-ai__llamafile/tests/strsm/BUILD.mk)<br>[tests/strsm/strsm_test.cu](../../../../sources/mozilla-ai__llamafile/tests/strsm/strsm_test.cu)<br>[tests/sgemm/BUILD.mk](../../../../sources/mozilla-ai__llamafile/tests/sgemm/BUILD.mk) |
| security | 0 | not obvious |
| ci | 6 | [.github/workflows/ci.yml](../../../../sources/mozilla-ai__llamafile/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/mozilla-ai__llamafile/.github/workflows/docs.yml)<br>[.github/workflows/editorconfig.yml](../../../../sources/mozilla-ai__llamafile/.github/workflows/editorconfig.yml)<br>[.github/workflows/labeler.yml](../../../../sources/mozilla-ai__llamafile/.github/workflows/labeler.yml)<br>[.github/workflows/pages-redirect.yml](../../../../sources/mozilla-ai__llamafile/.github/workflows/pages-redirect.yml)<br>[.github/workflows/update-llama-cpp.yml](../../../../sources/mozilla-ai__llamafile/.github/workflows/update-llama-cpp.yml) |
| container | 0 | not obvious |
| instruction | 1 | [docs/AGENTS.md](../../../../sources/mozilla-ai__llamafile/docs/AGENTS.md) |
| docs | 43 | [README_0.10.0.md](../../../../sources/mozilla-ai__llamafile/README_0.10.0.md)<br>[README.md](../../../../sources/mozilla-ai__llamafile/README.md)<br>[third_party/stb/README.llamafile](../../../../sources/mozilla-ai__llamafile/third_party/stb/README.llamafile)<br>[third_party/sqlite/README.llamafile](../../../../sources/mozilla-ai__llamafile/third_party/sqlite/README.llamafile)<br>[third_party/mbedtls/README.cosmo](../../../../sources/mozilla-ai__llamafile/third_party/mbedtls/README.cosmo)<br>[third_party/mbedtls/README.llamafile](../../../../sources/mozilla-ai__llamafile/third_party/mbedtls/README.llamafile)<br>[third_party/double-conversion/README.llamafile](../../../../sources/mozilla-ai__llamafile/third_party/double-conversion/README.llamafile)<br>[tests/integration/README.md](../../../../sources/mozilla-ai__llamafile/tests/integration/README.md) |
| config | 2 | [Makefile](../../../../sources/mozilla-ai__llamafile/Makefile)<br>[tests/integration/pyproject.toml](../../../../sources/mozilla-ai__llamafile/tests/integration/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 35 | [tests/BUILD.mk](../../../../sources/mozilla-ai__llamafile/tests/BUILD.mk)<br>[tests/extract_data_uris_test.cpp](../../../../sources/mozilla-ai__llamafile/tests/extract_data_uris_test.cpp)<br>[tests/fa_helpers_test.cpp](../../../../sources/mozilla-ai__llamafile/tests/fa_helpers_test.cpp)<br>[tests/gpu_backend_test.cpp](../../../../sources/mozilla-ai__llamafile/tests/gpu_backend_test.cpp)<br>[tests/strsm/build_and_run.sh](../../../../sources/mozilla-ai__llamafile/tests/strsm/build_and_run.sh)<br>[tests/strsm/BUILD.mk](../../../../sources/mozilla-ai__llamafile/tests/strsm/BUILD.mk) |
| CI workflows | 6 | [.github/workflows/ci.yml](../../../../sources/mozilla-ai__llamafile/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/mozilla-ai__llamafile/.github/workflows/docs.yml)<br>[.github/workflows/editorconfig.yml](../../../../sources/mozilla-ai__llamafile/.github/workflows/editorconfig.yml)<br>[.github/workflows/labeler.yml](../../../../sources/mozilla-ai__llamafile/.github/workflows/labeler.yml)<br>[.github/workflows/pages-redirect.yml](../../../../sources/mozilla-ai__llamafile/.github/workflows/pages-redirect.yml)<br>[.github/workflows/update-llama-cpp.yml](../../../../sources/mozilla-ai__llamafile/.github/workflows/update-llama-cpp.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [docs/AGENTS.md](../../../../sources/mozilla-ai__llamafile/docs/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `docs/whisperfile/server.md`, `Makefile`, `tests/integration/pyproject.toml`.
2. Trace execution through entrypoints: `docs/whisperfile/server.md`.
3. Map agent/tool runtime through: `tools/check_patches.sh`, `tools/generate_patches.sh`, `third_party/mbedtls/memory_buffer_alloc.c`.
4. Inspect retrieval/memory/indexing through: `third_party/mbedtls/memory_buffer_alloc.c`, `third_party/mbedtls/memory_buffer_alloc.h`, `docs/index.md`.
5. Verify behavior through test/eval files: `tests/BUILD.mk`, `tests/extract_data_uris_test.cpp`, `tests/fa_helpers_test.cpp`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 Distribute and run LLMs with a single file.. 핵심 구조 신호는 C++, Makefile, README.md, LICENSE, tests, ci이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
