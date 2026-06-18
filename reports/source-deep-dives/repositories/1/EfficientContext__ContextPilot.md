# EfficientContext/ContextPilot 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Accelerating Long Context LLM Inference with Accuracy-Preserving Context Optimization in SGLang, vLLM, llama.cpp, OpenClaw, RAG, and Agentic AI.

## 요약

- 조사 단위: `sources/EfficientContext__ContextPilot` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 192 files, 35 directories, depth score 104, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=opencode-plugin/src/index.test.ts, opencode-plugin/src/index.ts, openclaw-plugin/src/index.ts이고, 의존성 단서는 openai, fastapi, transformers, llama, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | EfficientContext/ContextPilot |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 115 |
| Forks | 5 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/EfficientContext__ContextPilot](../../../../sources/EfficientContext__ContextPilot) |
| 기존 보고서 | [reports/global-trending/repositories/EfficientContext__ContextPilot.md](../../../global-trending/repositories/EfficientContext__ContextPilot.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 192 / 35 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, .opencode, assets, contextpilot, docker, docs, examples, openclaw-plugin, opencode-plugin, scripts, skills, tests |
| 상위 확장자 | .py: 101, .md: 29, .ts: 21, .json: 7, .png: 7, .sh: 6, .yml: 6, (none): 5, .example: 1, .jpg: 1, .lmcache: 1, .lock: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | pyproject.toml | contextpilot-llama-server | contextpilot-llama-server |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | transformers, llama |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [opencode-plugin/src/index.test.ts](../../../../sources/EfficientContext__ContextPilot/opencode-plugin/src/index.test.ts)<br>[opencode-plugin/src/index.ts](../../../../sources/EfficientContext__ContextPilot/opencode-plugin/src/index.ts)<br>[openclaw-plugin/src/index.ts](../../../../sources/EfficientContext__ContextPilot/openclaw-plugin/src/index.ts) |
| agentRuntime | 11 | [skills/contextpilot-savings/SKILL.md](../../../../sources/EfficientContext__ContextPilot/skills/contextpilot-savings/SKILL.md)<br>[examples/openclaw/SKILL.md](../../../../sources/EfficientContext__ContextPilot/examples/openclaw/SKILL.md)<br>[contextpilot/utils/tools.py](../../../../sources/EfficientContext__ContextPilot/contextpilot/utils/tools.py)<br>[contextpilot/context_ordering/__init__.py](../../../../sources/EfficientContext__ContextPilot/contextpilot/context_ordering/__init__.py)<br>[contextpilot/context_ordering/inter_scheduler.py](../../../../sources/EfficientContext__ContextPilot/contextpilot/context_ordering/inter_scheduler.py)<br>[contextpilot/context_ordering/intra_ordering.py](../../../../sources/EfficientContext__ContextPilot/contextpilot/context_ordering/intra_ordering.py)<br>[contextpilot/context_index/__init__.py](../../../../sources/EfficientContext__ContextPilot/contextpilot/context_index/__init__.py)<br>[contextpilot/context_index/compute_distance_cpu.py](../../../../sources/EfficientContext__ContextPilot/contextpilot/context_index/compute_distance_cpu.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 18 | [tests/test_context_index.py](../../../../sources/EfficientContext__ContextPilot/tests/test_context_index.py)<br>[tests/test_live_index.py](../../../../sources/EfficientContext__ContextPilot/tests/test_live_index.py)<br>[opencode-plugin/src/index.test.ts](../../../../sources/EfficientContext__ContextPilot/opencode-plugin/src/index.test.ts)<br>[opencode-plugin/src/index.ts](../../../../sources/EfficientContext__ContextPilot/opencode-plugin/src/index.ts)<br>[openclaw-plugin/src/index.ts](../../../../sources/EfficientContext__ContextPilot/openclaw-plugin/src/index.ts)<br>[openclaw-plugin/src/engine/index-construction.ts](../../../../sources/EfficientContext__ContextPilot/openclaw-plugin/src/engine/index-construction.ts)<br>[openclaw-plugin/src/engine/live-index.ts](../../../../sources/EfficientContext__ContextPilot/openclaw-plugin/src/engine/live-index.ts)<br>[examples/construct_rag_data/multihopRAG_bm25.py](../../../../sources/EfficientContext__ContextPilot/examples/construct_rag_data/multihopRAG_bm25.py) |
| spec | 1 | [requirements.txt](../../../../sources/EfficientContext__ContextPilot/requirements.txt) |
| eval | 49 | [tests/conftest.py](../../../../sources/EfficientContext__ContextPilot/tests/conftest.py)<br>[tests/e2e_monkeypatch_test.py](../../../../sources/EfficientContext__ContextPilot/tests/e2e_monkeypatch_test.py)<br>[tests/test_block_dedup_regression.py](../../../../sources/EfficientContext__ContextPilot/tests/test_block_dedup_regression.py)<br>[tests/test_cloud_adapters.py](../../../../sources/EfficientContext__ContextPilot/tests/test_cloud_adapters.py)<br>[tests/test_cloud_proxy_integration.py](../../../../sources/EfficientContext__ContextPilot/tests/test_cloud_proxy_integration.py)<br>[tests/test_context_index.py](../../../../sources/EfficientContext__ContextPilot/tests/test_context_index.py)<br>[tests/test_context_ordering.py](../../../../sources/EfficientContext__ContextPilot/tests/test_context_ordering.py)<br>[tests/test_contextpilot_savings_skill.py](../../../../sources/EfficientContext__ContextPilot/tests/test_contextpilot_savings_skill.py) |
| security | 0 | 명확하지 않음 |
| ci | 5 | [.github/workflows/bump-plugin.yml](../../../../sources/EfficientContext__ContextPilot/.github/workflows/bump-plugin.yml)<br>[.github/workflows/release-plugin.yml](../../../../sources/EfficientContext__ContextPilot/.github/workflows/release-plugin.yml)<br>[.github/workflows/release.yml](../../../../sources/EfficientContext__ContextPilot/.github/workflows/release.yml)<br>[.github/workflows/sync-docs.yml](../../../../sources/EfficientContext__ContextPilot/.github/workflows/sync-docs.yml)<br>[.github/workflows/test.yml](../../../../sources/EfficientContext__ContextPilot/.github/workflows/test.yml) |
| container | 6 | [examples/openclaw/docker-compose.yml](../../../../sources/EfficientContext__ContextPilot/examples/openclaw/docker-compose.yml)<br>[examples/openclaw/Dockerfile](../../../../sources/EfficientContext__ContextPilot/examples/openclaw/Dockerfile)<br>[docker/Dockerfile](../../../../sources/EfficientContext__ContextPilot/docker/Dockerfile)<br>[docker/Dockerfile.lmcache](../../../../sources/EfficientContext__ContextPilot/docker/Dockerfile.lmcache)<br>[docker/Dockerfile.sglang](../../../../sources/EfficientContext__ContextPilot/docker/Dockerfile.sglang)<br>[docker/Dockerfile.vllm](../../../../sources/EfficientContext__ContextPilot/docker/Dockerfile.vllm) |
| instruction | 0 | 명확하지 않음 |
| docs | 28 | [README.md](../../../../sources/EfficientContext__ContextPilot/README.md)<br>[openclaw-plugin/README.md](../../../../sources/EfficientContext__ContextPilot/openclaw-plugin/README.md)<br>[examples/README.md](../../../../sources/EfficientContext__ContextPilot/examples/README.md)<br>[examples/openclaw/README.md](../../../../sources/EfficientContext__ContextPilot/examples/openclaw/README.md)<br>[examples/offline/README.md](../../../../sources/EfficientContext__ContextPilot/examples/offline/README.md)<br>[docs/README.md](../../../../sources/EfficientContext__ContextPilot/docs/README.md)<br>[docs/reference/api.md](../../../../sources/EfficientContext__ContextPilot/docs/reference/api.md)<br>[docs/reference/benchmarks.md](../../../../sources/EfficientContext__ContextPilot/docs/reference/benchmarks.md) |
| config | 6 | [pyproject.toml](../../../../sources/EfficientContext__ContextPilot/pyproject.toml)<br>[requirements.txt](../../../../sources/EfficientContext__ContextPilot/requirements.txt)<br>[opencode-plugin/package.json](../../../../sources/EfficientContext__ContextPilot/opencode-plugin/package.json)<br>[opencode-plugin/tsconfig.json](../../../../sources/EfficientContext__ContextPilot/opencode-plugin/tsconfig.json)<br>[openclaw-plugin/package.json](../../../../sources/EfficientContext__ContextPilot/openclaw-plugin/package.json)<br>[openclaw-plugin/tsconfig.json](../../../../sources/EfficientContext__ContextPilot/openclaw-plugin/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 49 | [tests/conftest.py](../../../../sources/EfficientContext__ContextPilot/tests/conftest.py)<br>[tests/e2e_monkeypatch_test.py](../../../../sources/EfficientContext__ContextPilot/tests/e2e_monkeypatch_test.py)<br>[tests/test_block_dedup_regression.py](../../../../sources/EfficientContext__ContextPilot/tests/test_block_dedup_regression.py)<br>[tests/test_cloud_adapters.py](../../../../sources/EfficientContext__ContextPilot/tests/test_cloud_adapters.py)<br>[tests/test_cloud_proxy_integration.py](../../../../sources/EfficientContext__ContextPilot/tests/test_cloud_proxy_integration.py)<br>[tests/test_context_index.py](../../../../sources/EfficientContext__ContextPilot/tests/test_context_index.py) |
| CI workflow | 5 | [.github/workflows/bump-plugin.yml](../../../../sources/EfficientContext__ContextPilot/.github/workflows/bump-plugin.yml)<br>[.github/workflows/release-plugin.yml](../../../../sources/EfficientContext__ContextPilot/.github/workflows/release-plugin.yml)<br>[.github/workflows/release.yml](../../../../sources/EfficientContext__ContextPilot/.github/workflows/release.yml)<br>[.github/workflows/sync-docs.yml](../../../../sources/EfficientContext__ContextPilot/.github/workflows/sync-docs.yml)<br>[.github/workflows/test.yml](../../../../sources/EfficientContext__ContextPilot/.github/workflows/test.yml) |
| 컨테이너/배포 | 6 | [examples/openclaw/docker-compose.yml](../../../../sources/EfficientContext__ContextPilot/examples/openclaw/docker-compose.yml)<br>[examples/openclaw/Dockerfile](../../../../sources/EfficientContext__ContextPilot/examples/openclaw/Dockerfile)<br>[docker/Dockerfile](../../../../sources/EfficientContext__ContextPilot/docker/Dockerfile)<br>[docker/Dockerfile.lmcache](../../../../sources/EfficientContext__ContextPilot/docker/Dockerfile.lmcache)<br>[docker/Dockerfile.sglang](../../../../sources/EfficientContext__ContextPilot/docker/Dockerfile.sglang)<br>[docker/Dockerfile.vllm](../../../../sources/EfficientContext__ContextPilot/docker/Dockerfile.vllm) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `opencode-plugin/src/index.test.ts`, `opencode-plugin/src/index.ts`, `openclaw-plugin/src/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `opencode-plugin/src/index.test.ts`, `opencode-plugin/src/index.ts`, `openclaw-plugin/src/index.ts`.
3. agent/tool runtime 매핑: `skills/contextpilot-savings/SKILL.md`, `examples/openclaw/SKILL.md`, `contextpilot/utils/tools.py`.
4. retrieval/memory/indexing 확인: `tests/test_context_index.py`, `tests/test_live_index.py`, `opencode-plugin/src/index.test.ts`.
5. test/eval 파일로 동작 검증: `tests/conftest.py`, `tests/e2e_monkeypatch_test.py`, `tests/test_block_dedup_regression.py`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 Accelerating Long Context LLM Inference with Accuracy Preserving Context Optimization in SGLang, vLLM, llama.cpp, OpenCl. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, README.md, LICENSE, openai이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
