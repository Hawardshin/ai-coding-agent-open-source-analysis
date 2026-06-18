# gpustack/gpustack 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

A GPU cluster manager that configures and orchestrates inference engines like vLLM and SGLang for high-performance AI model deployment.

## 요약

- 조사 단위: `sources/gpustack__gpustack` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,148 files, 224 directories, depth score 118, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=gpustack/main.py, gpustack/websocket_proxy/main.py, gpustack/server/server.py이고, 의존성 단서는 openai, fastapi, pydantic, transformers, vllm, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | gpustack/gpustack |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 5175 |
| Forks | 548 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/gpustack__gpustack](../../../../sources/gpustack__gpustack) |
| 기존 보고서 | [reports/global-trending/repositories/gpustack__gpustack.md](../../../global-trending/repositories/gpustack__gpustack.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1148 / 224 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .gemini, .github, benchmarks, charts, docker-compose, docs, gpustack, hack, pack, static, tests |
| 상위 확장자 | .py: 453, .png: 264, (none): 112, .md: 110, .json: 91, .yaml: 35, .sh: 21, .yml: 12, .jinja: 11, .ps1: 11, .jpeg: 5, .js: 4 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 53 |
| tests | validation surface | 45 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| charts | top-level component | 1 |
| docker-compose | documentation surface | 1 |
| gpustack | top-level component | 1 |
| hack | top-level component | 1 |
| pack | top-level component | 1 |
| static | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | help | make help |
| utility | Makefile | .PHONY | make .PHONY |
| utility | pyproject.toml | gpustack | gpustack |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | transformers, vllm |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | prometheus |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [gpustack/main.py](../../../../sources/gpustack__gpustack/gpustack/main.py) | entrypoints signal |
| entrypoints | [gpustack/websocket_proxy/main.py](../../../../sources/gpustack__gpustack/gpustack/websocket_proxy/main.py) | entrypoints signal |
| entrypoints | [gpustack/server/server.py](../../../../sources/gpustack__gpustack/gpustack/server/server.py) | entrypoints signal |
| container | [tests/k8s/test_template_render.py](../../../../sources/gpustack__gpustack/tests/k8s/test_template_render.py) | container signal |
| container | [pack/Dockerfile](../../../../sources/gpustack__gpustack/pack/Dockerfile) | container signal |
| container | [gpustack/k8s/__init__.py](../../../../sources/gpustack__gpustack/gpustack/k8s/__init__.py) | container signal |
| container | [gpustack/k8s/daemonset.jinja](../../../../sources/gpustack__gpustack/gpustack/k8s/daemonset.jinja) | container signal |
| config | [Makefile](../../../../sources/gpustack__gpustack/Makefile) | config signal |
| config | [pyproject.toml](../../../../sources/gpustack__gpustack/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/gpustack__gpustack/uv.lock) | config signal |
| config | [benchmarks/requirements.txt](../../../../sources/gpustack__gpustack/benchmarks/requirements.txt) | config signal |
| ci | [.github/workflows/backport.yml](../../../../sources/gpustack__gpustack/.github/workflows/backport.yml) | ci signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [gpustack/main.py](../../../../sources/gpustack__gpustack/gpustack/main.py)<br>[gpustack/websocket_proxy/main.py](../../../../sources/gpustack__gpustack/gpustack/websocket_proxy/main.py)<br>[gpustack/server/server.py](../../../../sources/gpustack__gpustack/gpustack/server/server.py) |
| agentRuntime | 5 | [gpustack/worker/tools_manager.py](../../../../sources/gpustack__gpustack/gpustack/worker/tools_manager.py)<br>[gpustack/worker/benchmark/runner.py](../../../../sources/gpustack__gpustack/gpustack/worker/benchmark/runner.py)<br>[gpustack/assets/chat_templates/tool_chat_template_deepseekv32.jinja](../../../../sources/gpustack__gpustack/gpustack/assets/chat_templates/tool_chat_template_deepseekv32.jinja)<br>[gpustack/assets/chat_templates/tool_chat_template_llama3.1_json.jinja](../../../../sources/gpustack__gpustack/gpustack/assets/chat_templates/tool_chat_template_llama3.1_json.jinja)<br>[gpustack/assets/chat_templates/tool_chat_template_llama3.2_json.jinja](../../../../sources/gpustack__gpustack/gpustack/assets/chat_templates/tool_chat_template_llama3.2_json.jinja) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 13 | [gpustack/migrations/versions/2024_07_31_1203-8277680cfcb7_add_model_embedding_only.py](../../../../sources/gpustack__gpustack/gpustack/migrations/versions/2024_07_31_1203-8277680cfcb7_add_model_embedding_only.py)<br>[docs/index.md](../../../../sources/gpustack__gpustack/docs/index.md)<br>[docs/using-models/using-embedding-models.md](../../../../sources/gpustack__gpustack/docs/using-models/using-embedding-models.md)<br>[docs/user-guide/playground/embedding.md](../../../../sources/gpustack__gpustack/docs/user-guide/playground/embedding.md)<br>[docs/user-guide/playground/index.md](../../../../sources/gpustack__gpustack/docs/user-guide/playground/index.md)<br>[docs/image-selector/index.html](../../../../sources/gpustack__gpustack/docs/image-selector/index.html)<br>[docs/image-selector/versions/index.json](../../../../sources/gpustack__gpustack/docs/image-selector/versions/index.json)<br>[docs/assets/using-models/using-embedding-models/deploy-model.png](../../../../sources/gpustack__gpustack/docs/assets/using-models/using-embedding-models/deploy-model.png) |
| spec | 6 | [docs/architecture.md](../../../../sources/gpustack__gpustack/docs/architecture.md)<br>[docs/installation/requirements.md](../../../../sources/gpustack__gpustack/docs/installation/requirements.md)<br>[docs/assets/gpustack-architecture.png](../../../../sources/gpustack__gpustack/docs/assets/gpustack-architecture.png)<br>[docs/assets/gpustack-network-architecture.png](../../../../sources/gpustack__gpustack/docs/assets/gpustack-network-architecture.png)<br>[docs/assets/gpustack-v2-architecture.png](../../../../sources/gpustack__gpustack/docs/assets/gpustack-v2-architecture.png)<br>[benchmarks/requirements.txt](../../../../sources/gpustack__gpustack/benchmarks/requirements.txt) |
| eval | 204 | [tests/__init__.py](../../../../sources/gpustack__gpustack/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/gpustack__gpustack/tests/conftest.py)<br>[tests/worker/test_inference_backend_manager.py](../../../../sources/gpustack__gpustack/tests/worker/test_inference_backend_manager.py)<br>[tests/worker/test_logs.py](../../../../sources/gpustack__gpustack/tests/worker/test_logs.py)<br>[tests/worker/test_serve_manager.py](../../../../sources/gpustack__gpustack/tests/worker/test_serve_manager.py)<br>[tests/worker/backends/test_ascend_mindie.py](../../../../sources/gpustack__gpustack/tests/worker/backends/test_ascend_mindie.py)<br>[tests/worker/backends/test_backend.py](../../../../sources/gpustack__gpustack/tests/worker/backends/test_backend.py)<br>[tests/worker/backends/test_multinode_topology.py](../../../../sources/gpustack__gpustack/tests/worker/backends/test_multinode_topology.py) |
| security | 12 | [tests/cmd/test_reload_config_auth.py](../../../../sources/gpustack__gpustack/tests/cmd/test_reload_config_auth.py)<br>[tests/api/test_auth.py](../../../../sources/gpustack__gpustack/tests/api/test_auth.py)<br>[gpustack/security.py](../../../../sources/gpustack__gpustack/gpustack/security.py)<br>[gpustack/routes/auth.py](../../../../sources/gpustack__gpustack/gpustack/routes/auth.py)<br>[gpustack/cmd/local_auth.py](../../../../sources/gpustack__gpustack/gpustack/cmd/local_auth.py)<br>[gpustack/api/auth.py](../../../../sources/gpustack__gpustack/gpustack/api/auth.py)<br>[docs/assets/playground/audio-permission.png](../../../../sources/gpustack__gpustack/docs/assets/playground/audio-permission.png)<br>[charts/gpustack-chart/templates/image-pull-secret.yaml](../../../../sources/gpustack__gpustack/charts/gpustack-chart/templates/image-pull-secret.yaml) |
| ci | 5 | [.github/workflows/backport.yml](../../../../sources/gpustack__gpustack/.github/workflows/backport.yml)<br>[.github/workflows/ci.yml](../../../../sources/gpustack__gpustack/.github/workflows/ci.yml)<br>[.github/workflows/pack.yaml](../../../../sources/gpustack__gpustack/.github/workflows/pack.yaml)<br>[.github/workflows/pr.yml](../../../../sources/gpustack__gpustack/.github/workflows/pr.yml)<br>[.github/workflows/translate.yml](../../../../sources/gpustack__gpustack/.github/workflows/translate.yml) |
| container | 36 | [tests/k8s/test_template_render.py](../../../../sources/gpustack__gpustack/tests/k8s/test_template_render.py)<br>[pack/Dockerfile](../../../../sources/gpustack__gpustack/pack/Dockerfile)<br>[gpustack/k8s/__init__.py](../../../../sources/gpustack__gpustack/gpustack/k8s/__init__.py)<br>[gpustack/k8s/daemonset.jinja](../../../../sources/gpustack__gpustack/gpustack/k8s/daemonset.jinja)<br>[gpustack/k8s/image_pull_secrets.jinja](../../../../sources/gpustack__gpustack/gpustack/k8s/image_pull_secrets.jinja)<br>[gpustack/k8s/manifest_template.py](../../../../sources/gpustack__gpustack/gpustack/k8s/manifest_template.py)<br>[gpustack/k8s/manifests.jinja](../../../../sources/gpustack__gpustack/gpustack/k8s/manifests.jinja)<br>[gpustack/k8s/operator.jinja](../../../../sources/gpustack__gpustack/gpustack/k8s/operator.jinja) |
| instruction | 0 | 명확하지 않음 |
| docs | 356 | [mkdocs.yml](../../../../sources/gpustack__gpustack/mkdocs.yml)<br>[README_CN.md](../../../../sources/gpustack__gpustack/README_CN.md)<br>[README_JP.md](../../../../sources/gpustack__gpustack/README_JP.md)<br>[README.md](../../../../sources/gpustack__gpustack/README.md)<br>[tests/websocket_proxy/README.md](../../../../sources/gpustack__gpustack/tests/websocket_proxy/README.md)<br>[gpustack/migrations/README](../../../../sources/gpustack__gpustack/gpustack/migrations/README)<br>[docs/api-reference.md](../../../../sources/gpustack__gpustack/docs/api-reference.md)<br>[docs/architecture.md](../../../../sources/gpustack__gpustack/docs/architecture.md) |
| config | 4 | [Makefile](../../../../sources/gpustack__gpustack/Makefile)<br>[pyproject.toml](../../../../sources/gpustack__gpustack/pyproject.toml)<br>[uv.lock](../../../../sources/gpustack__gpustack/uv.lock)<br>[benchmarks/requirements.txt](../../../../sources/gpustack__gpustack/benchmarks/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 204 | [tests/__init__.py](../../../../sources/gpustack__gpustack/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/gpustack__gpustack/tests/conftest.py)<br>[tests/worker/test_inference_backend_manager.py](../../../../sources/gpustack__gpustack/tests/worker/test_inference_backend_manager.py)<br>[tests/worker/test_logs.py](../../../../sources/gpustack__gpustack/tests/worker/test_logs.py)<br>[tests/worker/test_serve_manager.py](../../../../sources/gpustack__gpustack/tests/worker/test_serve_manager.py)<br>[tests/worker/backends/test_ascend_mindie.py](../../../../sources/gpustack__gpustack/tests/worker/backends/test_ascend_mindie.py) |
| CI workflow | 5 | [.github/workflows/backport.yml](../../../../sources/gpustack__gpustack/.github/workflows/backport.yml)<br>[.github/workflows/ci.yml](../../../../sources/gpustack__gpustack/.github/workflows/ci.yml)<br>[.github/workflows/pack.yaml](../../../../sources/gpustack__gpustack/.github/workflows/pack.yaml)<br>[.github/workflows/pr.yml](../../../../sources/gpustack__gpustack/.github/workflows/pr.yml)<br>[.github/workflows/translate.yml](../../../../sources/gpustack__gpustack/.github/workflows/translate.yml) |
| 컨테이너/배포 | 36 | [tests/k8s/test_template_render.py](../../../../sources/gpustack__gpustack/tests/k8s/test_template_render.py)<br>[pack/Dockerfile](../../../../sources/gpustack__gpustack/pack/Dockerfile)<br>[gpustack/k8s/__init__.py](../../../../sources/gpustack__gpustack/gpustack/k8s/__init__.py)<br>[gpustack/k8s/daemonset.jinja](../../../../sources/gpustack__gpustack/gpustack/k8s/daemonset.jinja)<br>[gpustack/k8s/image_pull_secrets.jinja](../../../../sources/gpustack__gpustack/gpustack/k8s/image_pull_secrets.jinja)<br>[gpustack/k8s/manifest_template.py](../../../../sources/gpustack__gpustack/gpustack/k8s/manifest_template.py) |
| 보안/정책 | 12 | [tests/cmd/test_reload_config_auth.py](../../../../sources/gpustack__gpustack/tests/cmd/test_reload_config_auth.py)<br>[tests/api/test_auth.py](../../../../sources/gpustack__gpustack/tests/api/test_auth.py)<br>[gpustack/security.py](../../../../sources/gpustack__gpustack/gpustack/security.py)<br>[gpustack/routes/auth.py](../../../../sources/gpustack__gpustack/gpustack/routes/auth.py)<br>[gpustack/cmd/local_auth.py](../../../../sources/gpustack__gpustack/gpustack/cmd/local_auth.py)<br>[gpustack/api/auth.py](../../../../sources/gpustack__gpustack/gpustack/api/auth.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `gpustack/main.py`, `gpustack/websocket_proxy/main.py`, `gpustack/server/server.py`.
2. entrypoint를 따라 실행 흐름 확인: `gpustack/main.py`, `gpustack/websocket_proxy/main.py`, `gpustack/server/server.py`.
3. agent/tool runtime 매핑: `gpustack/worker/tools_manager.py`, `gpustack/worker/benchmark/runner.py`, `gpustack/assets/chat_templates/tool_chat_template_deepseekv32.jinja`.
4. retrieval/memory/indexing 확인: `gpustack/migrations/versions/2024_07_31_1203-8277680cfcb7_add_model_embedding_only.py`, `docs/index.md`, `docs/using-models/using-embedding-models.md`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/worker/test_inference_backend_manager.py`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 A GPU cluster manager that configures and orchestrates inference engines like vLLM and SGLang for high performance AI mo. 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, LICENSE, openai이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
