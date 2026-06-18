# jundot/omlx 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

LLM inference server with continuous batching & SSD caching for Apple Silicon — managed from the macOS menu bar

## 요약

- 조사 단위: `sources/jundot__omlx` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 682 files, 77 directories, depth score 97, key references 6개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=omlx/server.py이고, 의존성 단서는 openai, mcp, fastapi, torch, transformers, vllm, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 6개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | jundot/omlx |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 16768 |
| Forks | 1419 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/jundot__omlx](../../../../sources/jundot__omlx) |
| 기존 보고서 | [reports/global-trending/repositories/jundot__omlx.md](../../../global-trending/repositories/jundot__omlx.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 682 / 77 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, apps, docs, Formula, omlx, packaging, scripts, tests |
| 상위 확장자 | .py: 365, .swift: 93, .png: 39, .woff2: 38, .json: 22, .jsonl: 20, .ttf: 20, .svg: 16, .js: 14, .html: 12, .md: 12, .css: 11 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 64 |
| docs | documentation surface | 34 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| Formula | top-level component | 1 |
| omlx | top-level component | 1 |
| packaging | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | omlx | omlx |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | torch, transformers, vllm |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [omlx/server.py](../../../../sources/jundot__omlx/omlx/server.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/jundot__omlx/pyproject.toml) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/jundot__omlx/.github/workflows/ci.yml) | ci signal |
| ci | [.github/workflows/update-formula.yml](../../../../sources/jundot__omlx/.github/workflows/update-formula.yml) | ci signal |
| eval | [tests/bench_grammar_bitmask.py](../../../../sources/jundot__omlx/tests/bench_grammar_bitmask.py) | eval support |
| eval | [tests/bench_results.csv](../../../../sources/jundot__omlx/tests/bench_results.csv) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [omlx/server.py](../../../../sources/jundot__omlx/omlx/server.py) |
| agentRuntime | 5 | [omlx/memory_monitor.py](../../../../sources/jundot__omlx/omlx/memory_monitor.py)<br>[omlx/patches/deepseek_v4/tool_parser_v4.py](../../../../sources/jundot__omlx/omlx/patches/deepseek_v4/tool_parser_v4.py)<br>[omlx/mcp/executor.py](../../../../sources/jundot__omlx/omlx/mcp/executor.py)<br>[omlx/mcp/tools.py](../../../../sources/jundot__omlx/omlx/mcp/tools.py)<br>[omlx/api/tool_calling.py](../../../../sources/jundot__omlx/omlx/api/tool_calling.py) |
| mcp | 16 | [mcp.example.json](../../../../sources/jundot__omlx/mcp.example.json)<br>[tests/test_mcp_client.py](../../../../sources/jundot__omlx/tests/test_mcp_client.py)<br>[tests/test_mcp_config.py](../../../../sources/jundot__omlx/tests/test_mcp_config.py)<br>[tests/test_mcp_executor.py](../../../../sources/jundot__omlx/tests/test_mcp_executor.py)<br>[tests/test_mcp_manager.py](../../../../sources/jundot__omlx/tests/test_mcp_manager.py)<br>[tests/test_mcp_routes.py](../../../../sources/jundot__omlx/tests/test_mcp_routes.py)<br>[tests/test_mcp_tools.py](../../../../sources/jundot__omlx/tests/test_mcp_tools.py)<br>[tests/test_mcp_types.py](../../../../sources/jundot__omlx/tests/test_mcp_types.py) |
| retrieval | 19 | [tests/test_audio_memory.py](../../../../sources/jundot__omlx/tests/test_audio_memory.py)<br>[tests/test_dflash_prefill_memory_guard.py](../../../../sources/jundot__omlx/tests/test_dflash_prefill_memory_guard.py)<br>[tests/test_embedding.py](../../../../sources/jundot__omlx/tests/test_embedding.py)<br>[tests/test_index_cache.py](../../../../sources/jundot__omlx/tests/test_index_cache.py)<br>[tests/test_memory_monitor_vlm_config.py](../../../../sources/jundot__omlx/tests/test_memory_monitor_vlm_config.py)<br>[tests/test_memory_monitor.py](../../../../sources/jundot__omlx/tests/test_memory_monitor.py)<br>[tests/test_proc_memory.py](../../../../sources/jundot__omlx/tests/test_proc_memory.py)<br>[tests/test_process_memory_enforcer.py](../../../../sources/jundot__omlx/tests/test_process_memory_enforcer.py) |
| spec | 0 | 명확하지 않음 |
| eval | 255 | [tests/bench_grammar_bitmask.py](../../../../sources/jundot__omlx/tests/bench_grammar_bitmask.py)<br>[tests/bench_results.csv](../../../../sources/jundot__omlx/tests/bench_results.csv)<br>[tests/conftest.py](../../../../sources/jundot__omlx/tests/conftest.py)<br>[tests/e2e_vision_cache.py](../../../../sources/jundot__omlx/tests/e2e_vision_cache.py)<br>[tests/mocks.py](../../../../sources/jundot__omlx/tests/mocks.py)<br>[tests/test_accuracy_benchmark.py](../../../../sources/jundot__omlx/tests/test_accuracy_benchmark.py)<br>[tests/test_active_models_visibility.py](../../../../sources/jundot__omlx/tests/test_active_models_visibility.py)<br>[tests/test_admin_api_key.py](../../../../sources/jundot__omlx/tests/test_admin_api_key.py) |
| security | 6 | [tests/test_admin_auth.py](../../../../sources/jundot__omlx/tests/test_admin_auth.py)<br>[tests/test_api_auth.py](../../../../sources/jundot__omlx/tests/test_api_auth.py)<br>[tests/test_dflash_prefill_memory_guard.py](../../../../sources/jundot__omlx/tests/test_dflash_prefill_memory_guard.py)<br>[tests/test_disconnect_guard.py](../../../../sources/jundot__omlx/tests/test_disconnect_guard.py)<br>[tests/test_scheduler_prefill_memory_guard.py](../../../../sources/jundot__omlx/tests/test_scheduler_prefill_memory_guard.py)<br>[omlx/admin/auth.py](../../../../sources/jundot__omlx/omlx/admin/auth.py) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/jundot__omlx/.github/workflows/ci.yml)<br>[.github/workflows/update-formula.yml](../../../../sources/jundot__omlx/.github/workflows/update-formula.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 46 | [README.fr.md](../../../../sources/jundot__omlx/README.fr.md)<br>[README.ja.md](../../../../sources/jundot__omlx/README.ja.md)<br>[README.ko.md](../../../../sources/jundot__omlx/README.ko.md)<br>[README.md](../../../../sources/jundot__omlx/README.md)<br>[README.zh.md](../../../../sources/jundot__omlx/README.zh.md)<br>[packaging/README.md](../../../../sources/jundot__omlx/packaging/README.md)<br>[omlx/patches/deepseek_v4/README.md](../../../../sources/jundot__omlx/omlx/patches/deepseek_v4/README.md)<br>[docs/CONTRIBUTING.md](../../../../sources/jundot__omlx/docs/CONTRIBUTING.md) |
| config | 1 | [pyproject.toml](../../../../sources/jundot__omlx/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 255 | [tests/bench_grammar_bitmask.py](../../../../sources/jundot__omlx/tests/bench_grammar_bitmask.py)<br>[tests/bench_results.csv](../../../../sources/jundot__omlx/tests/bench_results.csv)<br>[tests/conftest.py](../../../../sources/jundot__omlx/tests/conftest.py)<br>[tests/e2e_vision_cache.py](../../../../sources/jundot__omlx/tests/e2e_vision_cache.py)<br>[tests/mocks.py](../../../../sources/jundot__omlx/tests/mocks.py)<br>[tests/test_accuracy_benchmark.py](../../../../sources/jundot__omlx/tests/test_accuracy_benchmark.py) |
| CI workflow | 2 | [.github/workflows/ci.yml](../../../../sources/jundot__omlx/.github/workflows/ci.yml)<br>[.github/workflows/update-formula.yml](../../../../sources/jundot__omlx/.github/workflows/update-formula.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 6 | [tests/test_admin_auth.py](../../../../sources/jundot__omlx/tests/test_admin_auth.py)<br>[tests/test_api_auth.py](../../../../sources/jundot__omlx/tests/test_api_auth.py)<br>[tests/test_dflash_prefill_memory_guard.py](../../../../sources/jundot__omlx/tests/test_dflash_prefill_memory_guard.py)<br>[tests/test_disconnect_guard.py](../../../../sources/jundot__omlx/tests/test_disconnect_guard.py)<br>[tests/test_scheduler_prefill_memory_guard.py](../../../../sources/jundot__omlx/tests/test_scheduler_prefill_memory_guard.py)<br>[omlx/admin/auth.py](../../../../sources/jundot__omlx/omlx/admin/auth.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `omlx/server.py`, `pyproject.toml`, `.github/workflows/ci.yml`.
2. entrypoint를 따라 실행 흐름 확인: `omlx/server.py`.
3. agent/tool runtime 매핑: `omlx/memory_monitor.py`, `omlx/patches/deepseek_v4/tool_parser_v4.py`, `omlx/mcp/executor.py`.
4. retrieval/memory/indexing 확인: `tests/test_audio_memory.py`, `tests/test_dflash_prefill_memory_guard.py`, `tests/test_embedding.py`.
5. test/eval 파일로 동작 검증: `tests/bench_grammar_bitmask.py`, `tests/bench_results.csv`, `tests/conftest.py`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 LLM inference server with continuous batching & SSD caching for Apple Silicon — managed from the macOS menu bar. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, openai, mcp이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
