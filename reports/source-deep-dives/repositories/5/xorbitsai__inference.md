# xorbitsai/inference Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 1884 files, 350 directories.

## 요약

- 조사 단위: `sources/xorbitsai__inference` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,884 files, 350 directories, depth score 134, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=xinference/ui/web/ui/src/App.js, xinference/ui/web/ui/src/index.css, xinference/ui/web/ui/src/index.js이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | xorbitsai/inference |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 9359 |
| Forks | 836 |
| License | none |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/xorbitsai__inference](../../../../sources/xorbitsai__inference) |
| Existing report | [reports/global-trending/repositories/xorbitsai__inference.md](../../../global-trending/repositories/xorbitsai__inference.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1884 / 350 |
| Max observed depth | 11 |
| Top directories | .github, assets, benchmark, doc, examples, frontend, monitor, xinference |
| Top extensions | .py: 954, .rst: 372, .po: 144, .tsx: 82, .js: 68, .json: 38, .png: 27, .ts: 23, .md: 22, .yaml: 19, .yml: 16, .txt: 15 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| benchmark | validation surface | 1 |
| doc | documentation surface | 1 |
| examples | top-level component | 1 |
| frontend | top-level component | 1 |
| monitor | top-level component | 1 |
| xinference | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [xinference/ui/web/ui/src/App.js](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/src/App.js) | entrypoints signal |
| entrypoints | [xinference/ui/web/ui/src/index.css](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/src/index.css) | entrypoints signal |
| entrypoints | [xinference/ui/web/ui/src/index.js](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/src/index.js) | entrypoints signal |
| entrypoints | [xinference/thirdparty/whisper/__main__.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/whisper/__main__.py) | entrypoints signal |
| container | [xinference/deploy/__init__.py](../../../../sources/xorbitsai__inference/xinference/deploy/__init__.py) | container signal |
| container | [xinference/deploy/cmdline.py](../../../../sources/xorbitsai__inference/xinference/deploy/cmdline.py) | container signal |
| container | [xinference/deploy/local.py](../../../../sources/xorbitsai__inference/xinference/deploy/local.py) | container signal |
| container | [xinference/deploy/supervisor.py](../../../../sources/xorbitsai__inference/xinference/deploy/supervisor.py) | container signal |
| config | [pyproject.toml](../../../../sources/xorbitsai__inference/pyproject.toml) | config signal |
| config | [xinference/ui/web/ui/package.json](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/package.json) | config signal |
| config | [xinference/deploy/docker/requirements_cpu/requirements_cpu-base.txt](../../../../sources/xorbitsai__inference/xinference/deploy/docker/requirements_cpu/requirements_cpu-base.txt) | config signal |
| config | [xinference/deploy/docker/requirements_cpu/requirements_cpu-ml.txt](../../../../sources/xorbitsai__inference/xinference/deploy/docker/requirements_cpu/requirements_cpu-ml.txt) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 12 | [xinference/ui/web/ui/src/App.js](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/src/App.js)<br>[xinference/ui/web/ui/src/index.css](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/src/index.css)<br>[xinference/ui/web/ui/src/index.js](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/src/index.js)<br>[xinference/thirdparty/whisper/__main__.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/whisper/__main__.py)<br>[xinference/thirdparty/melo/main.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/melo/main.py)<br>[xinference/thirdparty/indextts/s2mel/dac/__main__.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/indextts/s2mel/dac/__main__.py)<br>[xinference/thirdparty/cosyvoice/bin/average_model.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/cosyvoice/bin/average_model.py)<br>[xinference/thirdparty/cosyvoice/bin/export_jit.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/cosyvoice/bin/export_jit.py) |
| agentRuntime | 71 | [AGENTS.md](../../../../sources/xorbitsai__inference/AGENTS.md)<br>[xinference/thirdparty/fish_speech/tools/api_client.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/fish_speech/tools/api_client.py)<br>[xinference/thirdparty/fish_speech/tools/api_server.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/fish_speech/tools/api_server.py)<br>[xinference/thirdparty/fish_speech/tools/download_models.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/fish_speech/tools/download_models.py)<br>[xinference/thirdparty/fish_speech/tools/e2e_webui.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/fish_speech/tools/e2e_webui.py)<br>[xinference/thirdparty/fish_speech/tools/extract_model.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/fish_speech/tools/extract_model.py)<br>[xinference/thirdparty/fish_speech/tools/file.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/fish_speech/tools/file.py)<br>[xinference/thirdparty/fish_speech/tools/fish_e2e.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/fish_speech/tools/fish_e2e.py) |
| mcp | 0 | not obvious |
| retrieval | 162 | [xinference/ui/web/ui/src/index.css](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/src/index.css)<br>[xinference/ui/web/ui/src/index.js](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/src/index.js)<br>[xinference/ui/web/ui/src/scenes/user_management/index.js](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/src/scenes/user_management/index.js)<br>[xinference/ui/web/ui/src/scenes/security_settings/index.js](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/src/scenes/security_settings/index.js)<br>[xinference/ui/web/ui/src/scenes/running_models/index.js](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/src/scenes/running_models/index.js)<br>[xinference/ui/web/ui/src/scenes/register_model/index.js](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/src/scenes/register_model/index.js)<br>[xinference/ui/web/ui/src/scenes/monitoring/index.js](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/src/scenes/monitoring/index.js)<br>[xinference/ui/web/ui/src/scenes/logs/index.js](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/src/scenes/logs/index.js) |
| spec | 12 | [xinference/model/video/model_spec.json](../../../../sources/xorbitsai__inference/xinference/model/video/model_spec.json)<br>[xinference/model/rerank/model_spec.json](../../../../sources/xorbitsai__inference/xinference/model/rerank/model_spec.json)<br>[xinference/model/image/model_spec.json](../../../../sources/xorbitsai__inference/xinference/model/image/model_spec.json)<br>[xinference/model/embedding/model_spec.json](../../../../sources/xorbitsai__inference/xinference/model/embedding/model_spec.json)<br>[xinference/model/audio/model_spec.json](../../../../sources/xorbitsai__inference/xinference/model/audio/model_spec.json)<br>[xinference/deploy/docker/requirements_cpu/requirements_cpu-base.txt](../../../../sources/xorbitsai__inference/xinference/deploy/docker/requirements_cpu/requirements_cpu-base.txt)<br>[xinference/deploy/docker/requirements_cpu/requirements_cpu-ml.txt](../../../../sources/xorbitsai__inference/xinference/deploy/docker/requirements_cpu/requirements_cpu-ml.txt)<br>[xinference/deploy/docker/requirements_cpu/requirements_cpu-models.txt](../../../../sources/xorbitsai__inference/xinference/deploy/docker/requirements_cpu/requirements_cpu-models.txt) |
| eval | 162 | [xinference/thirdparty/melo/text/es_phonemizer/test.ipynb](../../../../sources/xorbitsai__inference/xinference/thirdparty/melo/text/es_phonemizer/test.ipynb)<br>[xinference/thirdparty/fish_speech/tools/llama/eval_in_context.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/fish_speech/tools/llama/eval_in_context.py)<br>[xinference/thirdparty/f5_tts/eval/ecapa_tdnn.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/f5_tts/eval/ecapa_tdnn.py)<br>[xinference/thirdparty/f5_tts/eval/eval_infer_batch.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/f5_tts/eval/eval_infer_batch.py)<br>[xinference/thirdparty/f5_tts/eval/eval_infer_batch.sh](../../../../sources/xorbitsai__inference/xinference/thirdparty/f5_tts/eval/eval_infer_batch.sh)<br>[xinference/thirdparty/f5_tts/eval/eval_librispeech_test_clean.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/f5_tts/eval/eval_librispeech_test_clean.py)<br>[xinference/thirdparty/f5_tts/eval/eval_seedtts_testset.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/f5_tts/eval/eval_seedtts_testset.py)<br>[xinference/thirdparty/f5_tts/eval/README.md](../../../../sources/xorbitsai__inference/xinference/thirdparty/f5_tts/eval/README.md) |
| security | 14 | [xinference/ui/web/ui/src/scenes/security_settings/index.js](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/src/scenes/security_settings/index.js)<br>[xinference/ui/web/ui/src/scenes/audit_log/index.js](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/src/scenes/audit_log/index.js)<br>[xinference/core/status_guard.py](../../../../sources/xorbitsai__inference/xinference/core/status_guard.py)<br>[xinference/client/tests/test_async_client_with_auth.py](../../../../sources/xorbitsai__inference/xinference/client/tests/test_async_client_with_auth.py)<br>[xinference/client/tests/test_client_with_auth.py](../../../../sources/xorbitsai__inference/xinference/client/tests/test_client_with_auth.py)<br>[xinference/api/oauth2/auth_service.py](../../../../sources/xorbitsai__inference/xinference/api/oauth2/auth_service.py)<br>[xinference/api/oauth2/advanced/audit.py](../../../../sources/xorbitsai__inference/xinference/api/oauth2/advanced/audit.py)<br>[xinference/api/oauth2/advanced/auth_service.py](../../../../sources/xorbitsai__inference/xinference/api/oauth2/advanced/auth_service.py) |
| ci | 6 | [.github/workflows/assign.yaml](../../../../sources/xorbitsai__inference/.github/workflows/assign.yaml)<br>[.github/workflows/docker-cd.yaml](../../../../sources/xorbitsai__inference/.github/workflows/docker-cd.yaml)<br>[.github/workflows/issue.yaml](../../../../sources/xorbitsai__inference/.github/workflows/issue.yaml)<br>[.github/workflows/pr_auto_run_gen_docs.yaml](../../../../sources/xorbitsai__inference/.github/workflows/pr_auto_run_gen_docs.yaml)<br>[.github/workflows/python.yaml](../../../../sources/xorbitsai__inference/.github/workflows/python.yaml)<br>[.github/workflows/release.yaml](../../../../sources/xorbitsai__inference/.github/workflows/release.yaml) |
| container | 22 | [xinference/deploy/__init__.py](../../../../sources/xorbitsai__inference/xinference/deploy/__init__.py)<br>[xinference/deploy/cmdline.py](../../../../sources/xorbitsai__inference/xinference/deploy/cmdline.py)<br>[xinference/deploy/local.py](../../../../sources/xorbitsai__inference/xinference/deploy/local.py)<br>[xinference/deploy/supervisor.py](../../../../sources/xorbitsai__inference/xinference/deploy/supervisor.py)<br>[xinference/deploy/utils.py](../../../../sources/xorbitsai__inference/xinference/deploy/utils.py)<br>[xinference/deploy/worker.py](../../../../sources/xorbitsai__inference/xinference/deploy/worker.py)<br>[xinference/deploy/test/__init__.py](../../../../sources/xorbitsai__inference/xinference/deploy/test/__init__.py)<br>[xinference/deploy/test/test_cmdline.py](../../../../sources/xorbitsai__inference/xinference/deploy/test/test_cmdline.py) |
| instruction | 1 | [AGENTS.md](../../../../sources/xorbitsai__inference/AGENTS.md) |
| docs | 568 | [README_ja_JP.md](../../../../sources/xorbitsai__inference/README_ja_JP.md)<br>[README_zh_CN.md](../../../../sources/xorbitsai__inference/README_zh_CN.md)<br>[README.md](../../../../sources/xorbitsai__inference/README.md)<br>[xinference/thirdparty/matcha/hifigan/README.md](../../../../sources/xorbitsai__inference/xinference/thirdparty/matcha/hifigan/README.md)<br>[xinference/thirdparty/indextts/utils/maskgct/models/codec/ns3_codec/README.md](../../../../sources/xorbitsai__inference/xinference/thirdparty/indextts/utils/maskgct/models/codec/ns3_codec/README.md)<br>[xinference/thirdparty/fish_speech/tools/sensevoice/README.md](../../../../sources/xorbitsai__inference/xinference/thirdparty/fish_speech/tools/sensevoice/README.md)<br>[xinference/thirdparty/fish_speech/fish_speech/text/chn_text_norm/README.md](../../../../sources/xorbitsai__inference/xinference/thirdparty/fish_speech/fish_speech/text/chn_text_norm/README.md)<br>[xinference/thirdparty/fish_speech/fish_speech/i18n/README.md](../../../../sources/xorbitsai__inference/xinference/thirdparty/fish_speech/fish_speech/i18n/README.md) |
| config | 12 | [pyproject.toml](../../../../sources/xorbitsai__inference/pyproject.toml)<br>[xinference/ui/web/ui/package.json](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/package.json)<br>[xinference/deploy/docker/requirements_cpu/requirements_cpu-base.txt](../../../../sources/xorbitsai__inference/xinference/deploy/docker/requirements_cpu/requirements_cpu-base.txt)<br>[xinference/deploy/docker/requirements_cpu/requirements_cpu-ml.txt](../../../../sources/xorbitsai__inference/xinference/deploy/docker/requirements_cpu/requirements_cpu-ml.txt)<br>[xinference/deploy/docker/requirements_cpu/requirements_cpu-models.txt](../../../../sources/xorbitsai__inference/xinference/deploy/docker/requirements_cpu/requirements_cpu-models.txt)<br>[xinference/deploy/docker/requirements_aarch64/requirements_aarch64.txt](../../../../sources/xorbitsai__inference/xinference/deploy/docker/requirements_aarch64/requirements_aarch64.txt)<br>[xinference/deploy/docker/requirements/requirements-base.txt](../../../../sources/xorbitsai__inference/xinference/deploy/docker/requirements/requirements-base.txt)<br>[xinference/deploy/docker/requirements/requirements-ml.txt](../../../../sources/xorbitsai__inference/xinference/deploy/docker/requirements/requirements-ml.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 162 | [xinference/thirdparty/melo/text/es_phonemizer/test.ipynb](../../../../sources/xorbitsai__inference/xinference/thirdparty/melo/text/es_phonemizer/test.ipynb)<br>[xinference/thirdparty/fish_speech/tools/llama/eval_in_context.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/fish_speech/tools/llama/eval_in_context.py)<br>[xinference/thirdparty/f5_tts/eval/ecapa_tdnn.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/f5_tts/eval/ecapa_tdnn.py)<br>[xinference/thirdparty/f5_tts/eval/eval_infer_batch.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/f5_tts/eval/eval_infer_batch.py)<br>[xinference/thirdparty/f5_tts/eval/eval_infer_batch.sh](../../../../sources/xorbitsai__inference/xinference/thirdparty/f5_tts/eval/eval_infer_batch.sh)<br>[xinference/thirdparty/f5_tts/eval/eval_librispeech_test_clean.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/f5_tts/eval/eval_librispeech_test_clean.py) |
| CI workflows | 6 | [.github/workflows/assign.yaml](../../../../sources/xorbitsai__inference/.github/workflows/assign.yaml)<br>[.github/workflows/docker-cd.yaml](../../../../sources/xorbitsai__inference/.github/workflows/docker-cd.yaml)<br>[.github/workflows/issue.yaml](../../../../sources/xorbitsai__inference/.github/workflows/issue.yaml)<br>[.github/workflows/pr_auto_run_gen_docs.yaml](../../../../sources/xorbitsai__inference/.github/workflows/pr_auto_run_gen_docs.yaml)<br>[.github/workflows/python.yaml](../../../../sources/xorbitsai__inference/.github/workflows/python.yaml)<br>[.github/workflows/release.yaml](../../../../sources/xorbitsai__inference/.github/workflows/release.yaml) |
| Containers / deploy | 22 | [xinference/deploy/__init__.py](../../../../sources/xorbitsai__inference/xinference/deploy/__init__.py)<br>[xinference/deploy/cmdline.py](../../../../sources/xorbitsai__inference/xinference/deploy/cmdline.py)<br>[xinference/deploy/local.py](../../../../sources/xorbitsai__inference/xinference/deploy/local.py)<br>[xinference/deploy/supervisor.py](../../../../sources/xorbitsai__inference/xinference/deploy/supervisor.py)<br>[xinference/deploy/utils.py](../../../../sources/xorbitsai__inference/xinference/deploy/utils.py)<br>[xinference/deploy/worker.py](../../../../sources/xorbitsai__inference/xinference/deploy/worker.py) |
| Security / policy | 14 | [xinference/ui/web/ui/src/scenes/security_settings/index.js](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/src/scenes/security_settings/index.js)<br>[xinference/ui/web/ui/src/scenes/audit_log/index.js](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/src/scenes/audit_log/index.js)<br>[xinference/core/status_guard.py](../../../../sources/xorbitsai__inference/xinference/core/status_guard.py)<br>[xinference/client/tests/test_async_client_with_auth.py](../../../../sources/xorbitsai__inference/xinference/client/tests/test_async_client_with_auth.py)<br>[xinference/client/tests/test_client_with_auth.py](../../../../sources/xorbitsai__inference/xinference/client/tests/test_client_with_auth.py)<br>[xinference/api/oauth2/auth_service.py](../../../../sources/xorbitsai__inference/xinference/api/oauth2/auth_service.py) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/xorbitsai__inference/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `xinference/ui/web/ui/src/App.js`, `xinference/ui/web/ui/src/index.css`, `xinference/ui/web/ui/src/index.js`.
2. Trace execution through entrypoints: `xinference/ui/web/ui/src/App.js`, `xinference/ui/web/ui/src/index.css`, `xinference/ui/web/ui/src/index.js`.
3. Map agent/tool runtime through: `AGENTS.md`, `xinference/thirdparty/fish_speech/tools/api_client.py`, `xinference/thirdparty/fish_speech/tools/api_server.py`.
4. Inspect retrieval/memory/indexing through: `xinference/ui/web/ui/src/index.css`, `xinference/ui/web/ui/src/index.js`, `xinference/ui/web/ui/src/scenes/user_management/index.js`.
5. Verify behavior through test/eval files: `xinference/thirdparty/melo/text/es_phonemizer/test.ipynb`, `xinference/thirdparty/fish_speech/tools/llama/eval_in_context.py`, `xinference/thirdparty/f5_tts/eval/ecapa_tdnn.py`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 Local clone structure analysis 1884 files, 350 directories.. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, LICENSE, tests이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing입니다.
