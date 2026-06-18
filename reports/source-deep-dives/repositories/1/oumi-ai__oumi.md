# oumi-ai/oumi 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Easily fine-tune, evaluate and deploy Gemma 4, Qwen3.5, Qwen3.6, gpt-oss, DeepSeek-R1, or any open source LLM / VLM!

## 요약

- 조사 단위: `sources/oumi-ai__oumi` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,459 files, 466 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/oumi/__main__.py, src/oumi/mcp/__main__.py, src/oumi/mcp/server.py이고, 의존성 단서는 mcp, pydantic, click, typer, torch, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | oumi-ai/oumi |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 9317 |
| Forks | 778 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/oumi-ai__oumi](../../../../sources/oumi-ai__oumi) |
| 기존 보고서 | [reports/global-trending/repositories/oumi-ai__oumi.md](../../../global-trending/repositories/oumi-ai__oumi.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1459 / 466 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .github, configs, data, docs, notebooks, platform, scripts, src, tests |
| 상위 확장자 | .py: 672, .yaml: 540, .md: 128, .ipynb: 26, .sh: 25, .jinja: 15, .png: 10, .txt: 7, (none): 6, .jsonl: 5, .json: 4, .pdf: 4 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | torch, transformers, vllm, llama |
| webRuntime | 없음 |
| developerSurface | click, typer |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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
| instruction | 0 | 명확하지 않음 |
| docs | 139 | [README.md](../../../../sources/oumi-ai__oumi/README.md)<br>[src/experimental/configs/projects/zephyr/README.md](../../../../sources/oumi-ai__oumi/src/experimental/configs/projects/zephyr/README.md)<br>[scripts/polaris/README.md](../../../../sources/oumi-ai__oumi/scripts/polaris/README.md)<br>[scripts/perlmutter/README.md](../../../../sources/oumi-ai__oumi/scripts/perlmutter/README.md)<br>[scripts/inference/README.md](../../../../sources/oumi-ai__oumi/scripts/inference/README.md)<br>[scripts/frontier/README.md](../../../../sources/oumi-ai__oumi/scripts/frontier/README.md)<br>[scripts/examples/evaluation/README.md](../../../../sources/oumi-ai__oumi/scripts/examples/evaluation/README.md)<br>[scripts/examples/batch_inference/README.md](../../../../sources/oumi-ai__oumi/scripts/examples/batch_inference/README.md) |
| config | 2 | [Makefile](../../../../sources/oumi-ai__oumi/Makefile)<br>[pyproject.toml](../../../../sources/oumi-ai__oumi/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 388 | [tests/__init__.py](../../../../sources/oumi-ai__oumi/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/oumi-ai__oumi/tests/conftest.py)<br>[tests/markers.py](../../../../sources/oumi-ai__oumi/tests/markers.py)<br>[tests/unit/__init__.py](../../../../sources/oumi-ai__oumi/tests/unit/__init__.py)<br>[tests/unit/conftest.py](../../../../sources/oumi-ai__oumi/tests/unit/conftest.py)<br>[tests/unit/test_train.py](../../../../sources/oumi-ai__oumi/tests/unit/test_train.py) |
| CI workflow | 8 | [.github/workflows/doctests.yaml](../../../../sources/oumi-ai__oumi/.github/workflows/doctests.yaml)<br>[.github/workflows/gpu_install_test.yaml](../../../../sources/oumi-ai__oumi/.github/workflows/gpu_install_test.yaml)<br>[.github/workflows/gpu_tests.yaml](../../../../sources/oumi-ai__oumi/.github/workflows/gpu_tests.yaml)<br>[.github/workflows/install_test.yaml](../../../../sources/oumi-ai__oumi/.github/workflows/install_test.yaml)<br>[.github/workflows/pretest.yaml](../../../../sources/oumi-ai__oumi/.github/workflows/pretest.yaml)<br>[.github/workflows/release_docker.yaml](../../../../sources/oumi-ai__oumi/.github/workflows/release_docker.yaml) |
| 컨테이너/배포 | 20 | [Dockerfile](../../../../sources/oumi-ai__oumi/Dockerfile)<br>[tests/unit/deploy/__init__.py](../../../../sources/oumi-ai__oumi/tests/unit/deploy/__init__.py)<br>[tests/unit/deploy/test_base_client.py](../../../../sources/oumi-ai__oumi/tests/unit/deploy/test_base_client.py)<br>[tests/unit/deploy/test_deploy_config.py](../../../../sources/oumi-ai__oumi/tests/unit/deploy/test_deploy_config.py)<br>[tests/unit/deploy/test_fireworks_client.py](../../../../sources/oumi-ai__oumi/tests/unit/deploy/test_fireworks_client.py)<br>[tests/unit/deploy/test_fireworks_errors.py](../../../../sources/oumi-ai__oumi/tests/unit/deploy/test_fireworks_errors.py) |
| 보안/정책 | 3 | [SECURITY.md](../../../../sources/oumi-ai__oumi/SECURITY.md)<br>[configs/projects/judges/generic/format_compliance.yaml](../../../../sources/oumi-ai__oumi/configs/projects/judges/generic/format_compliance.yaml)<br>[configs/projects/judges/code/security.yaml](../../../../sources/oumi-ai__oumi/configs/projects/judges/code/security.yaml) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/oumi/__main__.py`, `src/oumi/mcp/__main__.py`, `src/oumi/mcp/server.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/oumi/__main__.py`, `src/oumi/mcp/__main__.py`, `src/oumi/mcp/server.py`.
3. agent/tool runtime 매핑: `src/oumi/core/types/tool_call.py`, `src/oumi/core/synthesis/tool_router.py`, `src/oumi/core/configs/params/tool_params.py`.
4. retrieval/memory/indexing 확인: `docs/index.md`, `docs/_templates/autodoc2/index.jinja`, `configs/projects/limo/qwen2.5_7b_fft_yarn_deepspeed_memory_optimized_train.yaml`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/markers.py`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 Easily fine tune, evaluate and deploy Gemma 4, Qwen3.5, Qwen3.6, gpt oss, DeepSeek R1, or any open source LLM / VLM!. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, Makefile, README.md, LICENSE이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
