# oumi-ai/oumi Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Easily fine-tune, evaluate and deploy Gemma 4, Qwen3.5, Qwen3.6, gpt-oss, DeepSeek-R1, or any open source LLM / VLM!

## 요약

- 조사 단위: `sources/oumi-ai__oumi` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,459 files, 466 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/oumi/__main__.py, src/oumi/mcp/__main__.py, src/oumi/mcp/server.py이고, 의존성 단서는 mcp, pydantic, click, typer, torch, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | oumi-ai/oumi |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 9317 |
| Forks | 778 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/oumi-ai__oumi](../../../../sources/oumi-ai__oumi) |
| Existing report | [reports/global-trending/repositories/oumi-ai__oumi.md](../../../global-trending/repositories/oumi-ai__oumi.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1459 / 466 |
| Max observed depth | 7 |
| Top directories | .github, configs, data, docs, notebooks, platform, scripts, src, tests |
| Top extensions | .py: 672, .yaml: 540, .md: 128, .ipynb: 26, .sh: 25, .jinja: 15, .png: 10, .txt: 7, (none): 6, .jsonl: 5, .json: 4, .pdf: 4 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 56 |
| src | source boundary | 44 |
| docs | documentation surface | 34 |
| .github | ci surface | 1 |
| configs | top-level component | 1 |
| data | top-level component | 1 |
| notebooks | top-level component | 1 |
| platform | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | help | make help |
| utility | Makefile | setup | make setup |
| utility | Makefile | install-miniconda | make install-miniconda |
| utility | Makefile | upgrade | make upgrade |
| utility | Makefile | clean | make clean |
| quality | Makefile | check | make check |
| utility | Makefile | torchfix | make torchfix |
| utility | Makefile | ty | make ty |
| quality | Makefile | format | make format |
| test | Makefile | test | make test |
| test | Makefile | coverage | make coverage |
| test | Makefile | coverage-unit | make coverage-unit |
| utility | Makefile | gcpssh | make gcpssh |
| utility | Makefile | gcpcode | make gcpcode |
| utility | Makefile | docs | make docs |
| build | Makefile | docs-rebuild | make docs-rebuild |
| utility | Makefile | docs-help | make docs-help |
| serve-dev | Makefile | docs-serve | make docs-serve |
| utility | Makefile | docs-copy-files | make docs-copy-files |
| utility | Makefile | docs-update-summaries | make docs-update-summaries |
| utility | pyproject.toml | oumi | oumi |
| utility | pyproject.toml | oumi-mcp | oumi-mcp |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | torch, transformers, vllm, llama |
| webRuntime | none |
| developerSurface | click, typer |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [src/oumi/__main__.py](../../../../sources/oumi-ai__oumi/src/oumi/__main__.py) | entrypoints signal |
| entrypoints | [src/oumi/mcp/__main__.py](../../../../sources/oumi-ai__oumi/src/oumi/mcp/__main__.py) | entrypoints signal |
| entrypoints | [src/oumi/mcp/server.py](../../../../sources/oumi-ai__oumi/src/oumi/mcp/server.py) | entrypoints signal |
| entrypoints | [src/oumi/cli/main.py](../../../../sources/oumi-ai__oumi/src/oumi/cli/main.py) | entrypoints signal |
| container | [Dockerfile](../../../../sources/oumi-ai__oumi/Dockerfile) | container signal |
| container | [tests/unit/deploy/__init__.py](../../../../sources/oumi-ai__oumi/tests/unit/deploy/__init__.py) | container signal |
| container | [tests/unit/deploy/test_base_client.py](../../../../sources/oumi-ai__oumi/tests/unit/deploy/test_base_client.py) | container signal |
| container | [tests/unit/deploy/test_deploy_config.py](../../../../sources/oumi-ai__oumi/tests/unit/deploy/test_deploy_config.py) | container signal |
| config | [Makefile](../../../../sources/oumi-ai__oumi/Makefile) | config signal |
| config | [pyproject.toml](../../../../sources/oumi-ai__oumi/pyproject.toml) | config signal |
| ci | [.github/workflows/doctests.yaml](../../../../sources/oumi-ai__oumi/.github/workflows/doctests.yaml) | ci signal |
| ci | [.github/workflows/gpu_install_test.yaml](../../../../sources/oumi-ai__oumi/.github/workflows/gpu_install_test.yaml) | ci signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [src/oumi/__main__.py](../../../../sources/oumi-ai__oumi/src/oumi/__main__.py)<br>[src/oumi/mcp/__main__.py](../../../../sources/oumi-ai__oumi/src/oumi/mcp/__main__.py)<br>[src/oumi/mcp/server.py](../../../../sources/oumi-ai__oumi/src/oumi/mcp/server.py)<br>[src/oumi/cli/main.py](../../../../sources/oumi-ai__oumi/src/oumi/cli/main.py) |
| agentRuntime | 3 | [src/oumi/core/types/tool_call.py](../../../../sources/oumi-ai__oumi/src/oumi/core/types/tool_call.py)<br>[src/oumi/core/synthesis/tool_router.py](../../../../sources/oumi-ai__oumi/src/oumi/core/synthesis/tool_router.py)<br>[src/oumi/core/configs/params/tool_params.py](../../../../sources/oumi-ai__oumi/src/oumi/core/configs/params/tool_params.py) |
| mcp | 35 | [tests/unit/mcp/__init__.py](../../../../sources/oumi-ai__oumi/tests/unit/mcp/__init__.py)<br>[tests/unit/mcp/test_client_cwd.py](../../../../sources/oumi-ai__oumi/tests/unit/mcp/test_client_cwd.py)<br>[tests/unit/mcp/test_config_service.py](../../../../sources/oumi-ai__oumi/tests/unit/mcp/test_config_service.py)<br>[tests/unit/mcp/test_docs_service.py](../../../../sources/oumi-ai__oumi/tests/unit/mcp/test_docs_service.py)<br>[tests/unit/mcp/test_job_recovery_and_control.py](../../../../sources/oumi-ai__oumi/tests/unit/mcp/test_job_recovery_and_control.py)<br>[tests/unit/mcp/test_job_registry.py](../../../../sources/oumi-ai__oumi/tests/unit/mcp/test_job_registry.py)<br>[tests/unit/mcp/test_server_tools.py](../../../../sources/oumi-ai__oumi/tests/unit/mcp/test_server_tools.py)<br>[tests/unit/mcp/test_sync_service.py](../../../../sources/oumi-ai__oumi/tests/unit/mcp/test_sync_service.py) |
| retrieval | 3 | [docs/index.md](../../../../sources/oumi-ai__oumi/docs/index.md)<br>[docs/_templates/autodoc2/index.jinja](../../../../sources/oumi-ai__oumi/docs/_templates/autodoc2/index.jinja)<br>[configs/projects/limo/qwen2.5_7b_fft_yarn_deepspeed_memory_optimized_train.yaml](../../../../sources/oumi-ai__oumi/configs/projects/limo/qwen2.5_7b_fft_yarn_deepspeed_memory_optimized_train.yaml) |
| spec | 1 | [platform/banking77-classifier/SPEC.md](../../../../sources/oumi-ai__oumi/platform/banking77-classifier/SPEC.md) |
| eval | 388 | [tests/__init__.py](../../../../sources/oumi-ai__oumi/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/oumi-ai__oumi/tests/conftest.py)<br>[tests/markers.py](../../../../sources/oumi-ai__oumi/tests/markers.py)<br>[tests/unit/__init__.py](../../../../sources/oumi-ai__oumi/tests/unit/__init__.py)<br>[tests/unit/conftest.py](../../../../sources/oumi-ai__oumi/tests/unit/conftest.py)<br>[tests/unit/test_train.py](../../../../sources/oumi-ai__oumi/tests/unit/test_train.py)<br>[tests/unit/utils/test_analysis_utils.py](../../../../sources/oumi-ai__oumi/tests/unit/utils/test_analysis_utils.py)<br>[tests/unit/utils/test_cache_utils.py](../../../../sources/oumi-ai__oumi/tests/unit/utils/test_cache_utils.py) |
| security | 3 | [SECURITY.md](../../../../sources/oumi-ai__oumi/SECURITY.md)<br>[configs/projects/judges/generic/format_compliance.yaml](../../../../sources/oumi-ai__oumi/configs/projects/judges/generic/format_compliance.yaml)<br>[configs/projects/judges/code/security.yaml](../../../../sources/oumi-ai__oumi/configs/projects/judges/code/security.yaml) |
| ci | 8 | [.github/workflows/doctests.yaml](../../../../sources/oumi-ai__oumi/.github/workflows/doctests.yaml)<br>[.github/workflows/gpu_install_test.yaml](../../../../sources/oumi-ai__oumi/.github/workflows/gpu_install_test.yaml)<br>[.github/workflows/gpu_tests.yaml](../../../../sources/oumi-ai__oumi/.github/workflows/gpu_tests.yaml)<br>[.github/workflows/install_test.yaml](../../../../sources/oumi-ai__oumi/.github/workflows/install_test.yaml)<br>[.github/workflows/pretest.yaml](../../../../sources/oumi-ai__oumi/.github/workflows/pretest.yaml)<br>[.github/workflows/release_docker.yaml](../../../../sources/oumi-ai__oumi/.github/workflows/release_docker.yaml)<br>[.github/workflows/release_pypi.yaml](../../../../sources/oumi-ai__oumi/.github/workflows/release_pypi.yaml)<br>[.github/workflows/stale.yml](../../../../sources/oumi-ai__oumi/.github/workflows/stale.yml) |
| container | 20 | [Dockerfile](../../../../sources/oumi-ai__oumi/Dockerfile)<br>[tests/unit/deploy/__init__.py](../../../../sources/oumi-ai__oumi/tests/unit/deploy/__init__.py)<br>[tests/unit/deploy/test_base_client.py](../../../../sources/oumi-ai__oumi/tests/unit/deploy/test_base_client.py)<br>[tests/unit/deploy/test_deploy_config.py](../../../../sources/oumi-ai__oumi/tests/unit/deploy/test_deploy_config.py)<br>[tests/unit/deploy/test_fireworks_client.py](../../../../sources/oumi-ai__oumi/tests/unit/deploy/test_fireworks_client.py)<br>[tests/unit/deploy/test_fireworks_errors.py](../../../../sources/oumi-ai__oumi/tests/unit/deploy/test_fireworks_errors.py)<br>[tests/unit/deploy/test_parasail_client.py](../../../../sources/oumi-ai__oumi/tests/unit/deploy/test_parasail_client.py)<br>[tests/unit/deploy/test_utils.py](../../../../sources/oumi-ai__oumi/tests/unit/deploy/test_utils.py) |
| instruction | 0 | not obvious |
| docs | 139 | [README.md](../../../../sources/oumi-ai__oumi/README.md)<br>[src/experimental/configs/projects/zephyr/README.md](../../../../sources/oumi-ai__oumi/src/experimental/configs/projects/zephyr/README.md)<br>[scripts/polaris/README.md](../../../../sources/oumi-ai__oumi/scripts/polaris/README.md)<br>[scripts/perlmutter/README.md](../../../../sources/oumi-ai__oumi/scripts/perlmutter/README.md)<br>[scripts/inference/README.md](../../../../sources/oumi-ai__oumi/scripts/inference/README.md)<br>[scripts/frontier/README.md](../../../../sources/oumi-ai__oumi/scripts/frontier/README.md)<br>[scripts/examples/evaluation/README.md](../../../../sources/oumi-ai__oumi/scripts/examples/evaluation/README.md)<br>[scripts/examples/batch_inference/README.md](../../../../sources/oumi-ai__oumi/scripts/examples/batch_inference/README.md) |
| config | 2 | [Makefile](../../../../sources/oumi-ai__oumi/Makefile)<br>[pyproject.toml](../../../../sources/oumi-ai__oumi/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 388 | [tests/__init__.py](../../../../sources/oumi-ai__oumi/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/oumi-ai__oumi/tests/conftest.py)<br>[tests/markers.py](../../../../sources/oumi-ai__oumi/tests/markers.py)<br>[tests/unit/__init__.py](../../../../sources/oumi-ai__oumi/tests/unit/__init__.py)<br>[tests/unit/conftest.py](../../../../sources/oumi-ai__oumi/tests/unit/conftest.py)<br>[tests/unit/test_train.py](../../../../sources/oumi-ai__oumi/tests/unit/test_train.py) |
| CI workflows | 8 | [.github/workflows/doctests.yaml](../../../../sources/oumi-ai__oumi/.github/workflows/doctests.yaml)<br>[.github/workflows/gpu_install_test.yaml](../../../../sources/oumi-ai__oumi/.github/workflows/gpu_install_test.yaml)<br>[.github/workflows/gpu_tests.yaml](../../../../sources/oumi-ai__oumi/.github/workflows/gpu_tests.yaml)<br>[.github/workflows/install_test.yaml](../../../../sources/oumi-ai__oumi/.github/workflows/install_test.yaml)<br>[.github/workflows/pretest.yaml](../../../../sources/oumi-ai__oumi/.github/workflows/pretest.yaml)<br>[.github/workflows/release_docker.yaml](../../../../sources/oumi-ai__oumi/.github/workflows/release_docker.yaml) |
| Containers / deploy | 20 | [Dockerfile](../../../../sources/oumi-ai__oumi/Dockerfile)<br>[tests/unit/deploy/__init__.py](../../../../sources/oumi-ai__oumi/tests/unit/deploy/__init__.py)<br>[tests/unit/deploy/test_base_client.py](../../../../sources/oumi-ai__oumi/tests/unit/deploy/test_base_client.py)<br>[tests/unit/deploy/test_deploy_config.py](../../../../sources/oumi-ai__oumi/tests/unit/deploy/test_deploy_config.py)<br>[tests/unit/deploy/test_fireworks_client.py](../../../../sources/oumi-ai__oumi/tests/unit/deploy/test_fireworks_client.py)<br>[tests/unit/deploy/test_fireworks_errors.py](../../../../sources/oumi-ai__oumi/tests/unit/deploy/test_fireworks_errors.py) |
| Security / policy | 3 | [SECURITY.md](../../../../sources/oumi-ai__oumi/SECURITY.md)<br>[configs/projects/judges/generic/format_compliance.yaml](../../../../sources/oumi-ai__oumi/configs/projects/judges/generic/format_compliance.yaml)<br>[configs/projects/judges/code/security.yaml](../../../../sources/oumi-ai__oumi/configs/projects/judges/code/security.yaml) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/oumi/__main__.py`, `src/oumi/mcp/__main__.py`, `src/oumi/mcp/server.py`.
2. Trace execution through entrypoints: `src/oumi/__main__.py`, `src/oumi/mcp/__main__.py`, `src/oumi/mcp/server.py`.
3. Map agent/tool runtime through: `src/oumi/core/types/tool_call.py`, `src/oumi/core/synthesis/tool_router.py`, `src/oumi/core/configs/params/tool_params.py`.
4. Inspect retrieval/memory/indexing through: `docs/index.md`, `docs/_templates/autodoc2/index.jinja`, `configs/projects/limo/qwen2.5_7b_fft_yarn_deepspeed_memory_optimized_train.yaml`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/conftest.py`, `tests/markers.py`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 Easily fine tune, evaluate and deploy Gemma 4, Qwen3.5, Qwen3.6, gpt oss, DeepSeek R1, or any open source LLM / VLM!. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, Makefile, README.md, LICENSE이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
