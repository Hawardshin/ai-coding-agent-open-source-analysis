# oobabooga/text-generation-webui 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Local clone structure analysis: 358 files, 64 directories.

## 요약

- 조사 단위: `sources/oobabooga__text-generation-webui` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 358 files, 64 directories, depth score 107, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=server.py, js/main.js, desktop/main.js이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | oobabooga/text-generation-webui |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/oobabooga__text-generation-webui](../../../../sources/oobabooga__text-generation-webui) |
| 기존 보고서 | [reports/clone-structures/oobabooga__text-generation-webui.md](../../../clone-structures/oobabooga__text-generation-webui.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 358 / 64 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, css, desktop, docker, docs, extensions, js, modules, requirements, user_data |
| 상위 확장자 | .py: 97, .woff: 38, .woff2: 38, .txt: 35, .md: 24, .ttf: 22, .css: 17, .js: 16, .yml: 13, .yaml: 12, (none): 9, .gbnf: 8 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [server.py](../../../../sources/oobabooga__text-generation-webui/server.py)<br>[js/main.js](../../../../sources/oobabooga__text-generation-webui/js/main.js)<br>[desktop/main.js](../../../../sources/oobabooga__text-generation-webui/desktop/main.js) |
| agentRuntime | 7 | [user_data/tools/calculate.py](../../../../sources/oobabooga__text-generation-webui/user_data/tools/calculate.py)<br>[user_data/tools/fetch_webpage.py](../../../../sources/oobabooga__text-generation-webui/user_data/tools/fetch_webpage.py)<br>[user_data/tools/get_datetime.py](../../../../sources/oobabooga__text-generation-webui/user_data/tools/get_datetime.py)<br>[user_data/tools/roll_dice.py](../../../../sources/oobabooga__text-generation-webui/user_data/tools/roll_dice.py)<br>[user_data/tools/web_search.py](../../../../sources/oobabooga__text-generation-webui/user_data/tools/web_search.py)<br>[modules/tool_parsing.py](../../../../sources/oobabooga__text-generation-webui/modules/tool_parsing.py)<br>[modules/tool_use.py](../../../../sources/oobabooga__text-generation-webui/modules/tool_use.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [modules/api/cache_embedding_model.py](../../../../sources/oobabooga__text-generation-webui/modules/api/cache_embedding_model.py) |
| spec | 24 | [requirements/portable/requirements_amd.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_amd.txt)<br>[requirements/portable/requirements_apple_intel.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_apple_intel.txt)<br>[requirements/portable/requirements_apple_silicon.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_apple_silicon.txt)<br>[requirements/portable/requirements_cpu_only.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_cpu_only.txt)<br>[requirements/portable/requirements_cuda131.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_cuda131.txt)<br>[requirements/portable/requirements_ik_cpu_only.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_ik_cpu_only.txt)<br>[requirements/portable/requirements_ik_cuda131.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_ik_cuda131.txt)<br>[requirements/portable/requirements_ik.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_ik.txt) |
| eval | 4 | [extensions/superboogav2/benchmark.py](../../../../sources/oobabooga__text-generation-webui/extensions/superboogav2/benchmark.py)<br>[extensions/superboogav2/benchmark_texts/aircraft_lease.txt](../../../../sources/oobabooga__text-generation-webui/extensions/superboogav2/benchmark_texts/aircraft_lease.txt)<br>[extensions/superboogav2/benchmark_texts/questions.json](../../../../sources/oobabooga__text-generation-webui/extensions/superboogav2/benchmark_texts/questions.json)<br>[extensions/silero_tts/test_tts.py](../../../../sources/oobabooga__text-generation-webui/extensions/silero_tts/test_tts.py) |
| security | 0 | 명확하지 않음 |
| ci | 7 | [.github/workflows/build-everything-tgw.yml](../../../../sources/oobabooga__text-generation-webui/.github/workflows/build-everything-tgw.yml)<br>[.github/workflows/build-portable-release-cuda.yml](../../../../sources/oobabooga__text-generation-webui/.github/workflows/build-portable-release-cuda.yml)<br>[.github/workflows/build-portable-release-ik-cuda.yml](../../../../sources/oobabooga__text-generation-webui/.github/workflows/build-portable-release-ik-cuda.yml)<br>[.github/workflows/build-portable-release-ik.yml](../../../../sources/oobabooga__text-generation-webui/.github/workflows/build-portable-release-ik.yml)<br>[.github/workflows/build-portable-release-rocm.yml](../../../../sources/oobabooga__text-generation-webui/.github/workflows/build-portable-release-rocm.yml)<br>[.github/workflows/build-portable-release-vulkan.yml](../../../../sources/oobabooga__text-generation-webui/.github/workflows/build-portable-release-vulkan.yml)<br>[.github/workflows/build-portable-release.yml](../../../../sources/oobabooga__text-generation-webui/.github/workflows/build-portable-release.yml) |
| container | 9 | [docker/TensorRT-LLM/Dockerfile](../../../../sources/oobabooga__text-generation-webui/docker/TensorRT-LLM/Dockerfile)<br>[docker/nvidia/docker-compose.yml](../../../../sources/oobabooga__text-generation-webui/docker/nvidia/docker-compose.yml)<br>[docker/nvidia/Dockerfile](../../../../sources/oobabooga__text-generation-webui/docker/nvidia/Dockerfile)<br>[docker/intel/docker-compose.yml](../../../../sources/oobabooga__text-generation-webui/docker/intel/docker-compose.yml)<br>[docker/intel/Dockerfile](../../../../sources/oobabooga__text-generation-webui/docker/intel/Dockerfile)<br>[docker/cpu/docker-compose.yml](../../../../sources/oobabooga__text-generation-webui/docker/cpu/docker-compose.yml)<br>[docker/cpu/Dockerfile](../../../../sources/oobabooga__text-generation-webui/docker/cpu/Dockerfile)<br>[docker/amd/docker-compose.yml](../../../../sources/oobabooga__text-generation-webui/docker/amd/docker-compose.yml) |
| instruction | 0 | 명확하지 않음 |
| docs | 22 | [README.md](../../../../sources/oobabooga__text-generation-webui/README.md)<br>[extensions/whisper_stt/readme.md](../../../../sources/oobabooga__text-generation-webui/extensions/whisper_stt/readme.md)<br>[extensions/superboogav2/README.md](../../../../sources/oobabooga__text-generation-webui/extensions/superboogav2/README.md)<br>[extensions/sd_api_pictures/README.MD](../../../../sources/oobabooga__text-generation-webui/extensions/sd_api_pictures/README.MD)<br>[extensions/ngrok/README.md](../../../../sources/oobabooga__text-generation-webui/extensions/ngrok/README.md)<br>[docs/01 - Chat Tab.md](../../../../sources/oobabooga__text-generation-webui/docs/01 - Chat Tab.md)<br>[docs/02 - Default and Notebook Tabs.md](../../../../sources/oobabooga__text-generation-webui/docs/02 - Default and Notebook Tabs.md)<br>[docs/03 - Parameters Tab.md](../../../../sources/oobabooga__text-generation-webui/docs/03 - Parameters Tab.md) |
| config | 25 | [requirements/portable/requirements_amd.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_amd.txt)<br>[requirements/portable/requirements_apple_intel.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_apple_intel.txt)<br>[requirements/portable/requirements_apple_silicon.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_apple_silicon.txt)<br>[requirements/portable/requirements_cpu_only.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_cpu_only.txt)<br>[requirements/portable/requirements_cuda131.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_cuda131.txt)<br>[requirements/portable/requirements_ik_cpu_only.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_ik_cpu_only.txt)<br>[requirements/portable/requirements_ik_cuda131.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_ik_cuda131.txt)<br>[requirements/portable/requirements_ik.txt](../../../../sources/oobabooga__text-generation-webui/requirements/portable/requirements_ik.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 4 | [extensions/superboogav2/benchmark.py](../../../../sources/oobabooga__text-generation-webui/extensions/superboogav2/benchmark.py)<br>[extensions/superboogav2/benchmark_texts/aircraft_lease.txt](../../../../sources/oobabooga__text-generation-webui/extensions/superboogav2/benchmark_texts/aircraft_lease.txt)<br>[extensions/superboogav2/benchmark_texts/questions.json](../../../../sources/oobabooga__text-generation-webui/extensions/superboogav2/benchmark_texts/questions.json)<br>[extensions/silero_tts/test_tts.py](../../../../sources/oobabooga__text-generation-webui/extensions/silero_tts/test_tts.py) |
| CI workflow | 7 | [.github/workflows/build-everything-tgw.yml](../../../../sources/oobabooga__text-generation-webui/.github/workflows/build-everything-tgw.yml)<br>[.github/workflows/build-portable-release-cuda.yml](../../../../sources/oobabooga__text-generation-webui/.github/workflows/build-portable-release-cuda.yml)<br>[.github/workflows/build-portable-release-ik-cuda.yml](../../../../sources/oobabooga__text-generation-webui/.github/workflows/build-portable-release-ik-cuda.yml)<br>[.github/workflows/build-portable-release-ik.yml](../../../../sources/oobabooga__text-generation-webui/.github/workflows/build-portable-release-ik.yml)<br>[.github/workflows/build-portable-release-rocm.yml](../../../../sources/oobabooga__text-generation-webui/.github/workflows/build-portable-release-rocm.yml)<br>[.github/workflows/build-portable-release-vulkan.yml](../../../../sources/oobabooga__text-generation-webui/.github/workflows/build-portable-release-vulkan.yml) |
| 컨테이너/배포 | 9 | [docker/TensorRT-LLM/Dockerfile](../../../../sources/oobabooga__text-generation-webui/docker/TensorRT-LLM/Dockerfile)<br>[docker/nvidia/docker-compose.yml](../../../../sources/oobabooga__text-generation-webui/docker/nvidia/docker-compose.yml)<br>[docker/nvidia/Dockerfile](../../../../sources/oobabooga__text-generation-webui/docker/nvidia/Dockerfile)<br>[docker/intel/docker-compose.yml](../../../../sources/oobabooga__text-generation-webui/docker/intel/docker-compose.yml)<br>[docker/intel/Dockerfile](../../../../sources/oobabooga__text-generation-webui/docker/intel/Dockerfile)<br>[docker/cpu/docker-compose.yml](../../../../sources/oobabooga__text-generation-webui/docker/cpu/docker-compose.yml) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `server.py`, `js/main.js`, `desktop/main.js`.
2. entrypoint를 따라 실행 흐름 확인: `server.py`, `js/main.js`, `desktop/main.js`.
3. agent/tool runtime 매핑: `user_data/tools/calculate.py`, `user_data/tools/fetch_webpage.py`, `user_data/tools/get_datetime.py`.
4. retrieval/memory/indexing 확인: `modules/api/cache_embedding_model.py`.
5. test/eval 파일로 동작 검증: `extensions/superboogav2/benchmark.py`, `extensions/superboogav2/benchmark_texts/aircraft_lease.txt`, `extensions/superboogav2/benchmark_texts/questions.json`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 Local clone structure analysis 358 files, 64 directories.. 핵심 구조 신호는 README.md, LICENSE, ci, docs, spec-artifacts, 358 files이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음입니다.
