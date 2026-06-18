# mlc-ai/mlc-llm Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 693 files, 206 directories.

## 요약

- 조사 단위: `sources/mlc-ai__mlc-llm` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 693 files, 206 directories, depth score 111, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 api/server, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 entrypoints=python/mlc_llm/__main__.py, python/mlc_llm/bench/__main__.py이고, 의존성 단서는 openai, fastapi, express, torch, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | mlc-ai/mlc-llm |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/mlc-ai__mlc-llm](../../../../sources/mlc-ai__mlc-llm) |
| Existing report | [reports/clone-structures/mlc-ai__mlc-llm.md](../../../clone-structures/mlc-ai__mlc-llm.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 693 / 206 |
| Max observed depth | 12 |
| Top directories | .github, 3rdparty, android, ci, cmake, cpp, docs, examples, ios, python, scripts, site, tests, web |
| Top extensions | .py: 389, .cc: 44, .h: 41, .rst: 25, .md: 22, .swift: 18, (none): 18, .xml: 17, .json: 14, .kt: 14, .sh: 11, .png: 10 |
| Source patterns | api/server, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
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


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | torch, transformers |
| webRuntime | fastapi, express |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [python/mlc_llm/__main__.py](../../../../sources/mlc-ai__mlc-llm/python/mlc_llm/__main__.py)<br>[python/mlc_llm/bench/__main__.py](../../../../sources/mlc-ai__mlc-llm/python/mlc_llm/bench/__main__.py) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 9 | [tests/python/serve/test_embedding_engine.py](../../../../sources/mlc-ai__mlc-llm/tests/python/serve/test_embedding_engine.py)<br>[tests/python/serve/server/test_embedding_server.py](../../../../sources/mlc-ai__mlc-llm/tests/python/serve/server/test_embedding_server.py)<br>[tests/python/model/test_qwen3_embedding.py](../../../../sources/mlc-ai__mlc-llm/tests/python/model/test_qwen3_embedding.py)<br>[site/index.md](../../../../sources/mlc-ai__mlc-llm/site/index.md)<br>[python/mlc_llm/serve/embedding_engine.py](../../../../sources/mlc-ai__mlc-llm/python/mlc_llm/serve/embedding_engine.py)<br>[python/mlc_llm/compiler_pass/attach_cuda_graph_alloc_init_func.py](../../../../sources/mlc-ai__mlc-llm/python/mlc_llm/compiler_pass/attach_cuda_graph_alloc_init_func.py)<br>[python/mlc_llm/compiler_pass/attach_embedding_allocator.py](../../../../sources/mlc-ai__mlc-llm/python/mlc_llm/compiler_pass/attach_embedding_allocator.py)<br>[python/mlc_llm/compiler_pass/estimate_memory_usage.py](../../../../sources/mlc-ai__mlc-llm/python/mlc_llm/compiler_pass/estimate_memory_usage.py) |
| spec | 8 | [tests/python/serve/test_serve_async_engine_spec.py](../../../../sources/mlc-ai__mlc-llm/tests/python/serve/test_serve_async_engine_spec.py)<br>[tests/python/serve/test_serve_engine_spec.py](../../../../sources/mlc-ai__mlc-llm/tests/python/serve/test_serve_engine_spec.py)<br>[tests/python/op/test_batch_spec_verify.py](../../../../sources/mlc-ai__mlc-llm/tests/python/op/test_batch_spec_verify.py)<br>[python/requirements.txt](../../../../sources/mlc-ai__mlc-llm/python/requirements.txt)<br>[python/mlc_llm/op/batch_spec_verify.py](../../../../sources/mlc-ai__mlc-llm/python/mlc_llm/op/batch_spec_verify.py)<br>[python/mlc_llm/compiler_pass/attach_spec_decode_aux_funcs.py](../../../../sources/mlc-ai__mlc-llm/python/mlc_llm/compiler_pass/attach_spec_decode_aux_funcs.py)<br>[docs/requirements.txt](../../../../sources/mlc-ai__mlc-llm/docs/requirements.txt)<br>[cpp/serve/engine_actions/auto_spec_decode.cc](../../../../sources/mlc-ai__mlc-llm/cpp/serve/engine_actions/auto_spec_decode.cc) |
| eval | 72 | [tests/README.md](../../../../sources/mlc-ai__mlc-llm/tests/README.md)<br>[tests/python/__init__.py](../../../../sources/mlc-ai__mlc-llm/tests/python/__init__.py)<br>[tests/python/conftest.py](../../../../sources/mlc-ai__mlc-llm/tests/python/conftest.py)<br>[tests/python/tokenizers/test_streamer.py](../../../../sources/mlc-ai__mlc-llm/tests/python/tokenizers/test_streamer.py)<br>[tests/python/support/test_auto_config.py](../../../../sources/mlc-ai__mlc-llm/tests/python/support/test_auto_config.py)<br>[tests/python/support/test_auto_target.py](../../../../sources/mlc-ai__mlc-llm/tests/python/support/test_auto_target.py)<br>[tests/python/support/test_auto_weight.py](../../../../sources/mlc-ai__mlc-llm/tests/python/support/test_auto_weight.py)<br>[tests/python/support/test_cli_convert_weight.py](../../../../sources/mlc-ai__mlc-llm/tests/python/support/test_cli_convert_weight.py) |
| security | 0 | not obvious |
| ci | 12 | [ci/bash.sh](../../../../sources/mlc-ai__mlc-llm/ci/bash.sh)<br>[ci/build-environment.yaml](../../../../sources/mlc-ai__mlc-llm/ci/build-environment.yaml)<br>[ci/jenkinsfile.groovy](../../../../sources/mlc-ai__mlc-llm/ci/jenkinsfile.groovy)<br>[ci/task/build_clean.sh](../../../../sources/mlc-ai__mlc-llm/ci/task/build_clean.sh)<br>[ci/task/build_lib.sh](../../../../sources/mlc-ai__mlc-llm/ci/task/build_lib.sh)<br>[ci/task/build_win.bat](../../../../sources/mlc-ai__mlc-llm/ci/task/build_win.bat)<br>[ci/task/test_model_compile.sh](../../../../sources/mlc-ai__mlc-llm/ci/task/test_model_compile.sh)<br>[ci/task/test_unittest.sh](../../../../sources/mlc-ai__mlc-llm/ci/task/test_unittest.sh) |
| container | 8 | [docs/deploy/android.rst](../../../../sources/mlc-ai__mlc-llm/docs/deploy/android.rst)<br>[docs/deploy/cli.rst](../../../../sources/mlc-ai__mlc-llm/docs/deploy/cli.rst)<br>[docs/deploy/ide_integration.rst](../../../../sources/mlc-ai__mlc-llm/docs/deploy/ide_integration.rst)<br>[docs/deploy/ios.rst](../../../../sources/mlc-ai__mlc-llm/docs/deploy/ios.rst)<br>[docs/deploy/mlc_chat_config.rst](../../../../sources/mlc-ai__mlc-llm/docs/deploy/mlc_chat_config.rst)<br>[docs/deploy/python_engine.rst](../../../../sources/mlc-ai__mlc-llm/docs/deploy/python_engine.rst)<br>[docs/deploy/rest.rst](../../../../sources/mlc-ai__mlc-llm/docs/deploy/rest.rst)<br>[docs/deploy/webllm.rst](../../../../sources/mlc-ai__mlc-llm/docs/deploy/webllm.rst) |
| instruction | 0 | not obvious |
| docs | 71 | [README.md](../../../../sources/mlc-ai__mlc-llm/README.md)<br>[web/README.md](../../../../sources/mlc-ai__mlc-llm/web/README.md)<br>[tests/README.md](../../../../sources/mlc-ai__mlc-llm/tests/README.md)<br>[site/_config.yml](../../../../sources/mlc-ai__mlc-llm/site/_config.yml)<br>[site/.gitignore](../../../../sources/mlc-ai__mlc-llm/site/.gitignore)<br>[site/CNAME](../../../../sources/mlc-ai__mlc-llm/site/CNAME)<br>[site/Gemfile](../../../../sources/mlc-ai__mlc-llm/site/Gemfile)<br>[site/index.md](../../../../sources/mlc-ai__mlc-llm/site/index.md) |
| config | 7 | [pyproject.toml](../../../../sources/mlc-ai__mlc-llm/pyproject.toml)<br>[web/Makefile](../../../../sources/mlc-ai__mlc-llm/web/Makefile)<br>[python/requirements.txt](../../../../sources/mlc-ai__mlc-llm/python/requirements.txt)<br>[examples/rest/nodejs/package.json](../../../../sources/mlc-ai__mlc-llm/examples/rest/nodejs/package.json)<br>[examples/rest/nodejs/tsconfig.json](../../../../sources/mlc-ai__mlc-llm/examples/rest/nodejs/tsconfig.json)<br>[docs/Makefile](../../../../sources/mlc-ai__mlc-llm/docs/Makefile)<br>[docs/requirements.txt](../../../../sources/mlc-ai__mlc-llm/docs/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 72 | [tests/README.md](../../../../sources/mlc-ai__mlc-llm/tests/README.md)<br>[tests/python/__init__.py](../../../../sources/mlc-ai__mlc-llm/tests/python/__init__.py)<br>[tests/python/conftest.py](../../../../sources/mlc-ai__mlc-llm/tests/python/conftest.py)<br>[tests/python/tokenizers/test_streamer.py](../../../../sources/mlc-ai__mlc-llm/tests/python/tokenizers/test_streamer.py)<br>[tests/python/support/test_auto_config.py](../../../../sources/mlc-ai__mlc-llm/tests/python/support/test_auto_config.py)<br>[tests/python/support/test_auto_target.py](../../../../sources/mlc-ai__mlc-llm/tests/python/support/test_auto_target.py) |
| CI workflows | 12 | [ci/bash.sh](../../../../sources/mlc-ai__mlc-llm/ci/bash.sh)<br>[ci/build-environment.yaml](../../../../sources/mlc-ai__mlc-llm/ci/build-environment.yaml)<br>[ci/jenkinsfile.groovy](../../../../sources/mlc-ai__mlc-llm/ci/jenkinsfile.groovy)<br>[ci/task/build_clean.sh](../../../../sources/mlc-ai__mlc-llm/ci/task/build_clean.sh)<br>[ci/task/build_lib.sh](../../../../sources/mlc-ai__mlc-llm/ci/task/build_lib.sh)<br>[ci/task/build_win.bat](../../../../sources/mlc-ai__mlc-llm/ci/task/build_win.bat) |
| Containers / deploy | 8 | [docs/deploy/android.rst](../../../../sources/mlc-ai__mlc-llm/docs/deploy/android.rst)<br>[docs/deploy/cli.rst](../../../../sources/mlc-ai__mlc-llm/docs/deploy/cli.rst)<br>[docs/deploy/ide_integration.rst](../../../../sources/mlc-ai__mlc-llm/docs/deploy/ide_integration.rst)<br>[docs/deploy/ios.rst](../../../../sources/mlc-ai__mlc-llm/docs/deploy/ios.rst)<br>[docs/deploy/mlc_chat_config.rst](../../../../sources/mlc-ai__mlc-llm/docs/deploy/mlc_chat_config.rst)<br>[docs/deploy/python_engine.rst](../../../../sources/mlc-ai__mlc-llm/docs/deploy/python_engine.rst) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `python/mlc_llm/__main__.py`, `python/mlc_llm/bench/__main__.py`, `docs/deploy/android.rst`.
2. Trace execution through entrypoints: `python/mlc_llm/__main__.py`, `python/mlc_llm/bench/__main__.py`.
3. Inspect retrieval/memory/indexing through: `tests/python/serve/test_embedding_engine.py`, `tests/python/serve/server/test_embedding_server.py`, `tests/python/model/test_qwen3_embedding.py`.
4. Verify behavior through test/eval files: `tests/README.md`, `tests/python/__init__.py`, `tests/python/conftest.py`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 Local clone structure analysis 693 files, 206 directories.. 핵심 구조 신호는 pyproject.toml, README.md, LICENSE, openai, fastapi, torch이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing입니다.
