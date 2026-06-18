# mozilla-ai/llamafile 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Distribute and run LLMs with a single file.

## 요약

- 조사 단위: `sources/mozilla-ai__llamafile` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 662 files, 48 directories, depth score 99, key references 10개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=docs/whisperfile/server.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | mozilla-ai/llamafile |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | C++ |
| Stars | 24999 |
| Forks | 1398 |
| License | NOASSERTION |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/mozilla-ai__llamafile](../../../../sources/mozilla-ai__llamafile) |
| 기존 보고서 | [reports/global-trending/repositories/mozilla-ai__llamafile.md](../../../global-trending/repositories/mozilla-ai__llamafile.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 662 / 48 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, .llamafile_plugin, diffusionfile, docs, llama.cpp, llama.cpp.patches, llamafile, localscore, models, scripts, stable-diffusion.cpp, stable-diffusion.cpp.patches, tests, third_party, tools, whisper.cpp, whisper.cpp.patches, whisperfile |
| 상위 확장자 | .h: 126, .cpp: 125, .c: 113, .gperf: 91, .patch: 42, .md: 37, .sh: 18, .mk: 16, .yml: 15, .pem: 13, .py: 13, (none): 9 |
| 소스 패턴 | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [docs/whisperfile/server.md](../../../../sources/mozilla-ai__llamafile/docs/whisperfile/server.md) |
| agentRuntime | 14 | [tools/check_patches.sh](../../../../sources/mozilla-ai__llamafile/tools/check_patches.sh)<br>[tools/generate_patches.sh](../../../../sources/mozilla-ai__llamafile/tools/generate_patches.sh)<br>[third_party/mbedtls/memory_buffer_alloc.c](../../../../sources/mozilla-ai__llamafile/third_party/mbedtls/memory_buffer_alloc.c)<br>[third_party/mbedtls/memory_buffer_alloc.h](../../../../sources/mozilla-ai__llamafile/third_party/mbedtls/memory_buffer_alloc.h)<br>[llama.cpp.patches/patches/tools_server_server-models.cpp.patch](../../../../sources/mozilla-ai__llamafile/llama.cpp.patches/patches/tools_server_server-models.cpp.patch)<br>[llama.cpp.patches/patches/tools_server_server-queue.cpp.patch](../../../../sources/mozilla-ai__llamafile/llama.cpp.patches/patches/tools_server_server-queue.cpp.patch)<br>[llama.cpp.patches/patches/tools_server_server.cpp.patch](../../../../sources/mozilla-ai__llamafile/llama.cpp.patches/patches/tools_server_server.cpp.patch)<br>[docs/AGENTS.md](../../../../sources/mozilla-ai__llamafile/docs/AGENTS.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 4 | [third_party/mbedtls/memory_buffer_alloc.c](../../../../sources/mozilla-ai__llamafile/third_party/mbedtls/memory_buffer_alloc.c)<br>[third_party/mbedtls/memory_buffer_alloc.h](../../../../sources/mozilla-ai__llamafile/third_party/mbedtls/memory_buffer_alloc.h)<br>[docs/index.md](../../../../sources/mozilla-ai__llamafile/docs/index.md)<br>[docs/whisperfile/index.md](../../../../sources/mozilla-ai__llamafile/docs/whisperfile/index.md) |
| spec | 1 | [docs/skills/llamafile/architecture.md](../../../../sources/mozilla-ai__llamafile/docs/skills/llamafile/architecture.md) |
| eval | 35 | [tests/BUILD.mk](../../../../sources/mozilla-ai__llamafile/tests/BUILD.mk)<br>[tests/extract_data_uris_test.cpp](../../../../sources/mozilla-ai__llamafile/tests/extract_data_uris_test.cpp)<br>[tests/fa_helpers_test.cpp](../../../../sources/mozilla-ai__llamafile/tests/fa_helpers_test.cpp)<br>[tests/gpu_backend_test.cpp](../../../../sources/mozilla-ai__llamafile/tests/gpu_backend_test.cpp)<br>[tests/strsm/build_and_run.sh](../../../../sources/mozilla-ai__llamafile/tests/strsm/build_and_run.sh)<br>[tests/strsm/BUILD.mk](../../../../sources/mozilla-ai__llamafile/tests/strsm/BUILD.mk)<br>[tests/strsm/strsm_test.cu](../../../../sources/mozilla-ai__llamafile/tests/strsm/strsm_test.cu)<br>[tests/sgemm/BUILD.mk](../../../../sources/mozilla-ai__llamafile/tests/sgemm/BUILD.mk) |
| security | 0 | 명확하지 않음 |
| ci | 6 | [.github/workflows/ci.yml](../../../../sources/mozilla-ai__llamafile/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/mozilla-ai__llamafile/.github/workflows/docs.yml)<br>[.github/workflows/editorconfig.yml](../../../../sources/mozilla-ai__llamafile/.github/workflows/editorconfig.yml)<br>[.github/workflows/labeler.yml](../../../../sources/mozilla-ai__llamafile/.github/workflows/labeler.yml)<br>[.github/workflows/pages-redirect.yml](../../../../sources/mozilla-ai__llamafile/.github/workflows/pages-redirect.yml)<br>[.github/workflows/update-llama-cpp.yml](../../../../sources/mozilla-ai__llamafile/.github/workflows/update-llama-cpp.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [docs/AGENTS.md](../../../../sources/mozilla-ai__llamafile/docs/AGENTS.md) |
| docs | 43 | [README_0.10.0.md](../../../../sources/mozilla-ai__llamafile/README_0.10.0.md)<br>[README.md](../../../../sources/mozilla-ai__llamafile/README.md)<br>[third_party/stb/README.llamafile](../../../../sources/mozilla-ai__llamafile/third_party/stb/README.llamafile)<br>[third_party/sqlite/README.llamafile](../../../../sources/mozilla-ai__llamafile/third_party/sqlite/README.llamafile)<br>[third_party/mbedtls/README.cosmo](../../../../sources/mozilla-ai__llamafile/third_party/mbedtls/README.cosmo)<br>[third_party/mbedtls/README.llamafile](../../../../sources/mozilla-ai__llamafile/third_party/mbedtls/README.llamafile)<br>[third_party/double-conversion/README.llamafile](../../../../sources/mozilla-ai__llamafile/third_party/double-conversion/README.llamafile)<br>[tests/integration/README.md](../../../../sources/mozilla-ai__llamafile/tests/integration/README.md) |
| config | 2 | [Makefile](../../../../sources/mozilla-ai__llamafile/Makefile)<br>[tests/integration/pyproject.toml](../../../../sources/mozilla-ai__llamafile/tests/integration/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 35 | [tests/BUILD.mk](../../../../sources/mozilla-ai__llamafile/tests/BUILD.mk)<br>[tests/extract_data_uris_test.cpp](../../../../sources/mozilla-ai__llamafile/tests/extract_data_uris_test.cpp)<br>[tests/fa_helpers_test.cpp](../../../../sources/mozilla-ai__llamafile/tests/fa_helpers_test.cpp)<br>[tests/gpu_backend_test.cpp](../../../../sources/mozilla-ai__llamafile/tests/gpu_backend_test.cpp)<br>[tests/strsm/build_and_run.sh](../../../../sources/mozilla-ai__llamafile/tests/strsm/build_and_run.sh)<br>[tests/strsm/BUILD.mk](../../../../sources/mozilla-ai__llamafile/tests/strsm/BUILD.mk) |
| CI workflow | 6 | [.github/workflows/ci.yml](../../../../sources/mozilla-ai__llamafile/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/mozilla-ai__llamafile/.github/workflows/docs.yml)<br>[.github/workflows/editorconfig.yml](../../../../sources/mozilla-ai__llamafile/.github/workflows/editorconfig.yml)<br>[.github/workflows/labeler.yml](../../../../sources/mozilla-ai__llamafile/.github/workflows/labeler.yml)<br>[.github/workflows/pages-redirect.yml](../../../../sources/mozilla-ai__llamafile/.github/workflows/pages-redirect.yml)<br>[.github/workflows/update-llama-cpp.yml](../../../../sources/mozilla-ai__llamafile/.github/workflows/update-llama-cpp.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [docs/AGENTS.md](../../../../sources/mozilla-ai__llamafile/docs/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `docs/whisperfile/server.md`, `Makefile`, `tests/integration/pyproject.toml`.
2. entrypoint를 따라 실행 흐름 확인: `docs/whisperfile/server.md`.
3. agent/tool runtime 매핑: `tools/check_patches.sh`, `tools/generate_patches.sh`, `third_party/mbedtls/memory_buffer_alloc.c`.
4. retrieval/memory/indexing 확인: `third_party/mbedtls/memory_buffer_alloc.c`, `third_party/mbedtls/memory_buffer_alloc.h`, `docs/index.md`.
5. test/eval 파일로 동작 검증: `tests/BUILD.mk`, `tests/extract_data_uris_test.cpp`, `tests/fa_helpers_test.cpp`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 Distribute and run LLMs with a single file.. 핵심 구조 신호는 C++, Makefile, README.md, LICENSE, tests, ci이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
