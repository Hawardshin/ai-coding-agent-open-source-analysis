# mlc-ai/mlc-llm 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Local clone structure analysis: 693 files, 206 directories.

## 요약

- 조사 단위: `sources/mlc-ai__mlc-llm` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 693 files, 206 directories, depth score 99, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 api/server, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 entrypoints=python/mlc_llm/__main__.py, python/mlc_llm/bench/__main__.py이고, 의존성 단서는 openai, fastapi, express, torch, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | mlc-ai/mlc-llm |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/mlc-ai__mlc-llm](../../../../sources/mlc-ai__mlc-llm) |
| 기존 보고서 | [reports/clone-structures/mlc-ai__mlc-llm.md](../../../clone-structures/mlc-ai__mlc-llm.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 693 / 206 |
| 관측 최대 깊이 | 12 |
| 상위 디렉터리 | .github, 3rdparty, android, ci, cmake, cpp, docs, examples, ios, python, scripts, site, tests, web |
| 상위 확장자 | .py: 389, .cc: 44, .h: 41, .rst: 25, .md: 22, .swift: 18, (none): 18, .xml: 17, .json: 14, .kt: 14, .sh: 11, .png: 10 |
| 소스 패턴 | api/server, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 48 |
| docs | documentation surface | 22 |
| examples/rest | examples workspace | 3 |
| web | source boundary | 3 |
| .github | ci surface | 1 |
| 3rdparty | top-level component | 1 |
| android | top-level component | 1 |
| ci | ci surface | 1 |
| cmake | top-level component | 1 |
| cpp | top-level component | 1 |
| examples | top-level component | 1 |
| ios | top-level component | 1 |
| python | top-level component | 1 |
| scripts | top-level component | 1 |
| site | documentation surface | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | torch, transformers |
| webRuntime | fastapi, express |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [python/mlc_llm/__main__.py](../../../../sources/mlc-ai__mlc-llm/python/mlc_llm/__main__.py) | entrypoints signal |
| entrypoints | [python/mlc_llm/bench/__main__.py](../../../../sources/mlc-ai__mlc-llm/python/mlc_llm/bench/__main__.py) | entrypoints signal |
| container | [docs/deploy/android.rst](../../../../sources/mlc-ai__mlc-llm/docs/deploy/android.rst) | container signal |
| container | [docs/deploy/cli.rst](../../../../sources/mlc-ai__mlc-llm/docs/deploy/cli.rst) | container signal |
| container | [docs/deploy/ide_integration.rst](../../../../sources/mlc-ai__mlc-llm/docs/deploy/ide_integration.rst) | container signal |
| container | [docs/deploy/ios.rst](../../../../sources/mlc-ai__mlc-llm/docs/deploy/ios.rst) | container signal |
| config | [pyproject.toml](../../../../sources/mlc-ai__mlc-llm/pyproject.toml) | config signal |
| config | [web/Makefile](../../../../sources/mlc-ai__mlc-llm/web/Makefile) | config signal |
| config | [python/requirements.txt](../../../../sources/mlc-ai__mlc-llm/python/requirements.txt) | config signal |
| config | [examples/rest/nodejs/package.json](../../../../sources/mlc-ai__mlc-llm/examples/rest/nodejs/package.json) | config signal |
| ci | [ci/bash.sh](../../../../sources/mlc-ai__mlc-llm/ci/bash.sh) | ci signal |
| ci | [ci/build-environment.yaml](../../../../sources/mlc-ai__mlc-llm/ci/build-environment.yaml) | ci signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [python/mlc_llm/__main__.py](../../../../sources/mlc-ai__mlc-llm/python/mlc_llm/__main__.py)<br>[python/mlc_llm/bench/__main__.py](../../../../sources/mlc-ai__mlc-llm/python/mlc_llm/bench/__main__.py) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 9 | [tests/python/serve/test_embedding_engine.py](../../../../sources/mlc-ai__mlc-llm/tests/python/serve/test_embedding_engine.py)<br>[tests/python/serve/server/test_embedding_server.py](../../../../sources/mlc-ai__mlc-llm/tests/python/serve/server/test_embedding_server.py)<br>[tests/python/model/test_qwen3_embedding.py](../../../../sources/mlc-ai__mlc-llm/tests/python/model/test_qwen3_embedding.py)<br>[site/index.md](../../../../sources/mlc-ai__mlc-llm/site/index.md)<br>[python/mlc_llm/serve/embedding_engine.py](../../../../sources/mlc-ai__mlc-llm/python/mlc_llm/serve/embedding_engine.py)<br>[python/mlc_llm/compiler_pass/attach_cuda_graph_alloc_init_func.py](../../../../sources/mlc-ai__mlc-llm/python/mlc_llm/compiler_pass/attach_cuda_graph_alloc_init_func.py)<br>[python/mlc_llm/compiler_pass/attach_embedding_allocator.py](../../../../sources/mlc-ai__mlc-llm/python/mlc_llm/compiler_pass/attach_embedding_allocator.py)<br>[python/mlc_llm/compiler_pass/estimate_memory_usage.py](../../../../sources/mlc-ai__mlc-llm/python/mlc_llm/compiler_pass/estimate_memory_usage.py) |
| spec | 8 | [tests/python/serve/test_serve_async_engine_spec.py](../../../../sources/mlc-ai__mlc-llm/tests/python/serve/test_serve_async_engine_spec.py)<br>[tests/python/serve/test_serve_engine_spec.py](../../../../sources/mlc-ai__mlc-llm/tests/python/serve/test_serve_engine_spec.py)<br>[tests/python/op/test_batch_spec_verify.py](../../../../sources/mlc-ai__mlc-llm/tests/python/op/test_batch_spec_verify.py)<br>[python/requirements.txt](../../../../sources/mlc-ai__mlc-llm/python/requirements.txt)<br>[python/mlc_llm/op/batch_spec_verify.py](../../../../sources/mlc-ai__mlc-llm/python/mlc_llm/op/batch_spec_verify.py)<br>[python/mlc_llm/compiler_pass/attach_spec_decode_aux_funcs.py](../../../../sources/mlc-ai__mlc-llm/python/mlc_llm/compiler_pass/attach_spec_decode_aux_funcs.py)<br>[docs/requirements.txt](../../../../sources/mlc-ai__mlc-llm/docs/requirements.txt)<br>[cpp/serve/engine_actions/auto_spec_decode.cc](../../../../sources/mlc-ai__mlc-llm/cpp/serve/engine_actions/auto_spec_decode.cc) |
| eval | 72 | [tests/README.md](../../../../sources/mlc-ai__mlc-llm/tests/README.md)<br>[tests/python/__init__.py](../../../../sources/mlc-ai__mlc-llm/tests/python/__init__.py)<br>[tests/python/conftest.py](../../../../sources/mlc-ai__mlc-llm/tests/python/conftest.py)<br>[tests/python/tokenizers/test_streamer.py](../../../../sources/mlc-ai__mlc-llm/tests/python/tokenizers/test_streamer.py)<br>[tests/python/support/test_auto_config.py](../../../../sources/mlc-ai__mlc-llm/tests/python/support/test_auto_config.py)<br>[tests/python/support/test_auto_target.py](../../../../sources/mlc-ai__mlc-llm/tests/python/support/test_auto_target.py)<br>[tests/python/support/test_auto_weight.py](../../../../sources/mlc-ai__mlc-llm/tests/python/support/test_auto_weight.py)<br>[tests/python/support/test_cli_convert_weight.py](../../../../sources/mlc-ai__mlc-llm/tests/python/support/test_cli_convert_weight.py) |
| security | 0 | 명확하지 않음 |
| ci | 12 | [ci/bash.sh](../../../../sources/mlc-ai__mlc-llm/ci/bash.sh)<br>[ci/build-environment.yaml](../../../../sources/mlc-ai__mlc-llm/ci/build-environment.yaml)<br>[ci/jenkinsfile.groovy](../../../../sources/mlc-ai__mlc-llm/ci/jenkinsfile.groovy)<br>[ci/task/build_clean.sh](../../../../sources/mlc-ai__mlc-llm/ci/task/build_clean.sh)<br>[ci/task/build_lib.sh](../../../../sources/mlc-ai__mlc-llm/ci/task/build_lib.sh)<br>[ci/task/build_win.bat](../../../../sources/mlc-ai__mlc-llm/ci/task/build_win.bat)<br>[ci/task/test_model_compile.sh](../../../../sources/mlc-ai__mlc-llm/ci/task/test_model_compile.sh)<br>[ci/task/test_unittest.sh](../../../../sources/mlc-ai__mlc-llm/ci/task/test_unittest.sh) |
| container | 8 | [docs/deploy/android.rst](../../../../sources/mlc-ai__mlc-llm/docs/deploy/android.rst)<br>[docs/deploy/cli.rst](../../../../sources/mlc-ai__mlc-llm/docs/deploy/cli.rst)<br>[docs/deploy/ide_integration.rst](../../../../sources/mlc-ai__mlc-llm/docs/deploy/ide_integration.rst)<br>[docs/deploy/ios.rst](../../../../sources/mlc-ai__mlc-llm/docs/deploy/ios.rst)<br>[docs/deploy/mlc_chat_config.rst](../../../../sources/mlc-ai__mlc-llm/docs/deploy/mlc_chat_config.rst)<br>[docs/deploy/python_engine.rst](../../../../sources/mlc-ai__mlc-llm/docs/deploy/python_engine.rst)<br>[docs/deploy/rest.rst](../../../../sources/mlc-ai__mlc-llm/docs/deploy/rest.rst)<br>[docs/deploy/webllm.rst](../../../../sources/mlc-ai__mlc-llm/docs/deploy/webllm.rst) |
| instruction | 0 | 명확하지 않음 |
| docs | 71 | [README.md](../../../../sources/mlc-ai__mlc-llm/README.md)<br>[web/README.md](../../../../sources/mlc-ai__mlc-llm/web/README.md)<br>[tests/README.md](../../../../sources/mlc-ai__mlc-llm/tests/README.md)<br>[site/_config.yml](../../../../sources/mlc-ai__mlc-llm/site/_config.yml)<br>[site/.gitignore](../../../../sources/mlc-ai__mlc-llm/site/.gitignore)<br>[site/CNAME](../../../../sources/mlc-ai__mlc-llm/site/CNAME)<br>[site/Gemfile](../../../../sources/mlc-ai__mlc-llm/site/Gemfile)<br>[site/index.md](../../../../sources/mlc-ai__mlc-llm/site/index.md) |
| config | 7 | [pyproject.toml](../../../../sources/mlc-ai__mlc-llm/pyproject.toml)<br>[web/Makefile](../../../../sources/mlc-ai__mlc-llm/web/Makefile)<br>[python/requirements.txt](../../../../sources/mlc-ai__mlc-llm/python/requirements.txt)<br>[examples/rest/nodejs/package.json](../../../../sources/mlc-ai__mlc-llm/examples/rest/nodejs/package.json)<br>[examples/rest/nodejs/tsconfig.json](../../../../sources/mlc-ai__mlc-llm/examples/rest/nodejs/tsconfig.json)<br>[docs/Makefile](../../../../sources/mlc-ai__mlc-llm/docs/Makefile)<br>[docs/requirements.txt](../../../../sources/mlc-ai__mlc-llm/docs/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 72 | [tests/README.md](../../../../sources/mlc-ai__mlc-llm/tests/README.md)<br>[tests/python/__init__.py](../../../../sources/mlc-ai__mlc-llm/tests/python/__init__.py)<br>[tests/python/conftest.py](../../../../sources/mlc-ai__mlc-llm/tests/python/conftest.py)<br>[tests/python/tokenizers/test_streamer.py](../../../../sources/mlc-ai__mlc-llm/tests/python/tokenizers/test_streamer.py)<br>[tests/python/support/test_auto_config.py](../../../../sources/mlc-ai__mlc-llm/tests/python/support/test_auto_config.py)<br>[tests/python/support/test_auto_target.py](../../../../sources/mlc-ai__mlc-llm/tests/python/support/test_auto_target.py) |
| CI workflow | 12 | [ci/bash.sh](../../../../sources/mlc-ai__mlc-llm/ci/bash.sh)<br>[ci/build-environment.yaml](../../../../sources/mlc-ai__mlc-llm/ci/build-environment.yaml)<br>[ci/jenkinsfile.groovy](../../../../sources/mlc-ai__mlc-llm/ci/jenkinsfile.groovy)<br>[ci/task/build_clean.sh](../../../../sources/mlc-ai__mlc-llm/ci/task/build_clean.sh)<br>[ci/task/build_lib.sh](../../../../sources/mlc-ai__mlc-llm/ci/task/build_lib.sh)<br>[ci/task/build_win.bat](../../../../sources/mlc-ai__mlc-llm/ci/task/build_win.bat) |
| 컨테이너/배포 | 8 | [docs/deploy/android.rst](../../../../sources/mlc-ai__mlc-llm/docs/deploy/android.rst)<br>[docs/deploy/cli.rst](../../../../sources/mlc-ai__mlc-llm/docs/deploy/cli.rst)<br>[docs/deploy/ide_integration.rst](../../../../sources/mlc-ai__mlc-llm/docs/deploy/ide_integration.rst)<br>[docs/deploy/ios.rst](../../../../sources/mlc-ai__mlc-llm/docs/deploy/ios.rst)<br>[docs/deploy/mlc_chat_config.rst](../../../../sources/mlc-ai__mlc-llm/docs/deploy/mlc_chat_config.rst)<br>[docs/deploy/python_engine.rst](../../../../sources/mlc-ai__mlc-llm/docs/deploy/python_engine.rst) |
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

1. 핵심 참조에서 시작: `python/mlc_llm/__main__.py`, `python/mlc_llm/bench/__main__.py`, `docs/deploy/android.rst`.
2. entrypoint를 따라 실행 흐름 확인: `python/mlc_llm/__main__.py`, `python/mlc_llm/bench/__main__.py`.
3. retrieval/memory/indexing 확인: `tests/python/serve/test_embedding_engine.py`, `tests/python/serve/server/test_embedding_server.py`, `tests/python/model/test_qwen3_embedding.py`.
4. test/eval 파일로 동작 검증: `tests/README.md`, `tests/python/__init__.py`, `tests/python/conftest.py`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 Local clone structure analysis 693 files, 206 directories.. 핵심 구조 신호는 pyproject.toml, README.md, LICENSE, openai, fastapi, torch이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
