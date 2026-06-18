# gpustack/gpustack Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

A GPU cluster manager that configures and orchestrates inference engines like vLLM and SGLang for high-performance AI model deployment.

## 요약

- 조사 단위: `sources/gpustack__gpustack` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,148 files, 224 directories, depth score 124, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=gpustack/main.py, gpustack/websocket_proxy/main.py, gpustack/server/server.py이고, 의존성 단서는 openai, fastapi, pydantic, transformers, vllm, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | gpustack/gpustack |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 5175 |
| Forks | 548 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/gpustack__gpustack](../../../../sources/gpustack__gpustack) |
| Existing report | [reports/global-trending/repositories/gpustack__gpustack.md](../../../global-trending/repositories/gpustack__gpustack.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1148 / 224 |
| Max observed depth | 8 |
| Top directories | .gemini, .github, benchmarks, charts, docker-compose, docs, gpustack, hack, pack, static, tests |
| Top extensions | .py: 453, .png: 264, (none): 112, .md: 110, .json: 91, .yaml: 35, .sh: 21, .yml: 12, .jinja: 11, .ps1: 11, .jpeg: 5, .js: 4 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
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


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | help | make help |
| utility | Makefile | .PHONY | make .PHONY |
| utility | pyproject.toml | gpustack | gpustack |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | transformers, vllm |
| webRuntime | fastapi |
| developerSurface | none |
| observability | prometheus |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [gpustack/main.py](../../../../sources/gpustack__gpustack/gpustack/main.py)<br>[gpustack/websocket_proxy/main.py](../../../../sources/gpustack__gpustack/gpustack/websocket_proxy/main.py)<br>[gpustack/server/server.py](../../../../sources/gpustack__gpustack/gpustack/server/server.py) |
| agentRuntime | 5 | [gpustack/worker/tools_manager.py](../../../../sources/gpustack__gpustack/gpustack/worker/tools_manager.py)<br>[gpustack/worker/benchmark/runner.py](../../../../sources/gpustack__gpustack/gpustack/worker/benchmark/runner.py)<br>[gpustack/assets/chat_templates/tool_chat_template_deepseekv32.jinja](../../../../sources/gpustack__gpustack/gpustack/assets/chat_templates/tool_chat_template_deepseekv32.jinja)<br>[gpustack/assets/chat_templates/tool_chat_template_llama3.1_json.jinja](../../../../sources/gpustack__gpustack/gpustack/assets/chat_templates/tool_chat_template_llama3.1_json.jinja)<br>[gpustack/assets/chat_templates/tool_chat_template_llama3.2_json.jinja](../../../../sources/gpustack__gpustack/gpustack/assets/chat_templates/tool_chat_template_llama3.2_json.jinja) |
| mcp | 0 | not obvious |
| retrieval | 13 | [gpustack/migrations/versions/2024_07_31_1203-8277680cfcb7_add_model_embedding_only.py](../../../../sources/gpustack__gpustack/gpustack/migrations/versions/2024_07_31_1203-8277680cfcb7_add_model_embedding_only.py)<br>[docs/index.md](../../../../sources/gpustack__gpustack/docs/index.md)<br>[docs/using-models/using-embedding-models.md](../../../../sources/gpustack__gpustack/docs/using-models/using-embedding-models.md)<br>[docs/user-guide/playground/embedding.md](../../../../sources/gpustack__gpustack/docs/user-guide/playground/embedding.md)<br>[docs/user-guide/playground/index.md](../../../../sources/gpustack__gpustack/docs/user-guide/playground/index.md)<br>[docs/image-selector/index.html](../../../../sources/gpustack__gpustack/docs/image-selector/index.html)<br>[docs/image-selector/versions/index.json](../../../../sources/gpustack__gpustack/docs/image-selector/versions/index.json)<br>[docs/assets/using-models/using-embedding-models/deploy-model.png](../../../../sources/gpustack__gpustack/docs/assets/using-models/using-embedding-models/deploy-model.png) |
| spec | 6 | [docs/architecture.md](../../../../sources/gpustack__gpustack/docs/architecture.md)<br>[docs/installation/requirements.md](../../../../sources/gpustack__gpustack/docs/installation/requirements.md)<br>[docs/assets/gpustack-architecture.png](../../../../sources/gpustack__gpustack/docs/assets/gpustack-architecture.png)<br>[docs/assets/gpustack-network-architecture.png](../../../../sources/gpustack__gpustack/docs/assets/gpustack-network-architecture.png)<br>[docs/assets/gpustack-v2-architecture.png](../../../../sources/gpustack__gpustack/docs/assets/gpustack-v2-architecture.png)<br>[benchmarks/requirements.txt](../../../../sources/gpustack__gpustack/benchmarks/requirements.txt) |
| eval | 204 | [tests/__init__.py](../../../../sources/gpustack__gpustack/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/gpustack__gpustack/tests/conftest.py)<br>[tests/worker/test_inference_backend_manager.py](../../../../sources/gpustack__gpustack/tests/worker/test_inference_backend_manager.py)<br>[tests/worker/test_logs.py](../../../../sources/gpustack__gpustack/tests/worker/test_logs.py)<br>[tests/worker/test_serve_manager.py](../../../../sources/gpustack__gpustack/tests/worker/test_serve_manager.py)<br>[tests/worker/backends/test_ascend_mindie.py](../../../../sources/gpustack__gpustack/tests/worker/backends/test_ascend_mindie.py)<br>[tests/worker/backends/test_backend.py](../../../../sources/gpustack__gpustack/tests/worker/backends/test_backend.py)<br>[tests/worker/backends/test_multinode_topology.py](../../../../sources/gpustack__gpustack/tests/worker/backends/test_multinode_topology.py) |
| security | 12 | [tests/cmd/test_reload_config_auth.py](../../../../sources/gpustack__gpustack/tests/cmd/test_reload_config_auth.py)<br>[tests/api/test_auth.py](../../../../sources/gpustack__gpustack/tests/api/test_auth.py)<br>[gpustack/security.py](../../../../sources/gpustack__gpustack/gpustack/security.py)<br>[gpustack/routes/auth.py](../../../../sources/gpustack__gpustack/gpustack/routes/auth.py)<br>[gpustack/cmd/local_auth.py](../../../../sources/gpustack__gpustack/gpustack/cmd/local_auth.py)<br>[gpustack/api/auth.py](../../../../sources/gpustack__gpustack/gpustack/api/auth.py)<br>[docs/assets/playground/audio-permission.png](../../../../sources/gpustack__gpustack/docs/assets/playground/audio-permission.png)<br>[charts/gpustack-chart/templates/image-pull-secret.yaml](../../../../sources/gpustack__gpustack/charts/gpustack-chart/templates/image-pull-secret.yaml) |
| ci | 5 | [.github/workflows/backport.yml](../../../../sources/gpustack__gpustack/.github/workflows/backport.yml)<br>[.github/workflows/ci.yml](../../../../sources/gpustack__gpustack/.github/workflows/ci.yml)<br>[.github/workflows/pack.yaml](../../../../sources/gpustack__gpustack/.github/workflows/pack.yaml)<br>[.github/workflows/pr.yml](../../../../sources/gpustack__gpustack/.github/workflows/pr.yml)<br>[.github/workflows/translate.yml](../../../../sources/gpustack__gpustack/.github/workflows/translate.yml) |
| container | 36 | [tests/k8s/test_template_render.py](../../../../sources/gpustack__gpustack/tests/k8s/test_template_render.py)<br>[pack/Dockerfile](../../../../sources/gpustack__gpustack/pack/Dockerfile)<br>[gpustack/k8s/__init__.py](../../../../sources/gpustack__gpustack/gpustack/k8s/__init__.py)<br>[gpustack/k8s/daemonset.jinja](../../../../sources/gpustack__gpustack/gpustack/k8s/daemonset.jinja)<br>[gpustack/k8s/image_pull_secrets.jinja](../../../../sources/gpustack__gpustack/gpustack/k8s/image_pull_secrets.jinja)<br>[gpustack/k8s/manifest_template.py](../../../../sources/gpustack__gpustack/gpustack/k8s/manifest_template.py)<br>[gpustack/k8s/manifests.jinja](../../../../sources/gpustack__gpustack/gpustack/k8s/manifests.jinja)<br>[gpustack/k8s/operator.jinja](../../../../sources/gpustack__gpustack/gpustack/k8s/operator.jinja) |
| instruction | 0 | not obvious |
| docs | 356 | [mkdocs.yml](../../../../sources/gpustack__gpustack/mkdocs.yml)<br>[README_CN.md](../../../../sources/gpustack__gpustack/README_CN.md)<br>[README_JP.md](../../../../sources/gpustack__gpustack/README_JP.md)<br>[README.md](../../../../sources/gpustack__gpustack/README.md)<br>[tests/websocket_proxy/README.md](../../../../sources/gpustack__gpustack/tests/websocket_proxy/README.md)<br>[gpustack/migrations/README](../../../../sources/gpustack__gpustack/gpustack/migrations/README)<br>[docs/api-reference.md](../../../../sources/gpustack__gpustack/docs/api-reference.md)<br>[docs/architecture.md](../../../../sources/gpustack__gpustack/docs/architecture.md) |
| config | 4 | [Makefile](../../../../sources/gpustack__gpustack/Makefile)<br>[pyproject.toml](../../../../sources/gpustack__gpustack/pyproject.toml)<br>[uv.lock](../../../../sources/gpustack__gpustack/uv.lock)<br>[benchmarks/requirements.txt](../../../../sources/gpustack__gpustack/benchmarks/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 204 | [tests/__init__.py](../../../../sources/gpustack__gpustack/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/gpustack__gpustack/tests/conftest.py)<br>[tests/worker/test_inference_backend_manager.py](../../../../sources/gpustack__gpustack/tests/worker/test_inference_backend_manager.py)<br>[tests/worker/test_logs.py](../../../../sources/gpustack__gpustack/tests/worker/test_logs.py)<br>[tests/worker/test_serve_manager.py](../../../../sources/gpustack__gpustack/tests/worker/test_serve_manager.py)<br>[tests/worker/backends/test_ascend_mindie.py](../../../../sources/gpustack__gpustack/tests/worker/backends/test_ascend_mindie.py) |
| CI workflows | 5 | [.github/workflows/backport.yml](../../../../sources/gpustack__gpustack/.github/workflows/backport.yml)<br>[.github/workflows/ci.yml](../../../../sources/gpustack__gpustack/.github/workflows/ci.yml)<br>[.github/workflows/pack.yaml](../../../../sources/gpustack__gpustack/.github/workflows/pack.yaml)<br>[.github/workflows/pr.yml](../../../../sources/gpustack__gpustack/.github/workflows/pr.yml)<br>[.github/workflows/translate.yml](../../../../sources/gpustack__gpustack/.github/workflows/translate.yml) |
| Containers / deploy | 36 | [tests/k8s/test_template_render.py](../../../../sources/gpustack__gpustack/tests/k8s/test_template_render.py)<br>[pack/Dockerfile](../../../../sources/gpustack__gpustack/pack/Dockerfile)<br>[gpustack/k8s/__init__.py](../../../../sources/gpustack__gpustack/gpustack/k8s/__init__.py)<br>[gpustack/k8s/daemonset.jinja](../../../../sources/gpustack__gpustack/gpustack/k8s/daemonset.jinja)<br>[gpustack/k8s/image_pull_secrets.jinja](../../../../sources/gpustack__gpustack/gpustack/k8s/image_pull_secrets.jinja)<br>[gpustack/k8s/manifest_template.py](../../../../sources/gpustack__gpustack/gpustack/k8s/manifest_template.py) |
| Security / policy | 12 | [tests/cmd/test_reload_config_auth.py](../../../../sources/gpustack__gpustack/tests/cmd/test_reload_config_auth.py)<br>[tests/api/test_auth.py](../../../../sources/gpustack__gpustack/tests/api/test_auth.py)<br>[gpustack/security.py](../../../../sources/gpustack__gpustack/gpustack/security.py)<br>[gpustack/routes/auth.py](../../../../sources/gpustack__gpustack/gpustack/routes/auth.py)<br>[gpustack/cmd/local_auth.py](../../../../sources/gpustack__gpustack/gpustack/cmd/local_auth.py)<br>[gpustack/api/auth.py](../../../../sources/gpustack__gpustack/gpustack/api/auth.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `gpustack/main.py`, `gpustack/websocket_proxy/main.py`, `gpustack/server/server.py`.
2. Trace execution through entrypoints: `gpustack/main.py`, `gpustack/websocket_proxy/main.py`, `gpustack/server/server.py`.
3. Map agent/tool runtime through: `gpustack/worker/tools_manager.py`, `gpustack/worker/benchmark/runner.py`, `gpustack/assets/chat_templates/tool_chat_template_deepseekv32.jinja`.
4. Inspect retrieval/memory/indexing through: `gpustack/migrations/versions/2024_07_31_1203-8277680cfcb7_add_model_embedding_only.py`, `docs/index.md`, `docs/using-models/using-embedding-models.md`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/conftest.py`, `tests/worker/test_inference_backend_manager.py`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 A GPU cluster manager that configures and orchestrates inference engines like vLLM and SGLang for high performance AI mo. 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, LICENSE, openai이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
