# xorbitsai/inference 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Local clone structure analysis: 1884 files, 350 directories.

## 요약

- 조사 단위: `sources/xorbitsai__inference` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,884 files, 350 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=xinference/ui/web/ui/src/App.js, xinference/ui/web/ui/src/index.css, xinference/ui/web/ui/src/index.js이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | xorbitsai/inference |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 9359 |
| Forks | 836 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/xorbitsai__inference](../../../../sources/xorbitsai__inference) |
| 기존 보고서 | [reports/global-trending/repositories/xorbitsai__inference.md](../../../global-trending/repositories/xorbitsai__inference.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1884 / 350 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | .github, assets, benchmark, doc, examples, frontend, monitor, xinference |
| 상위 확장자 | .py: 954, .rst: 372, .po: 144, .tsx: 82, .js: 68, .json: 38, .png: 27, .ts: 23, .md: 22, .yaml: 19, .yml: 16, .txt: 15 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| benchmark | validation surface | 1 |
| doc | documentation surface | 1 |
| examples | top-level component | 1 |
| frontend | top-level component | 1 |
| monitor | top-level component | 1 |
| xinference | top-level component | 1 |


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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 12 | [xinference/ui/web/ui/src/App.js](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/src/App.js)<br>[xinference/ui/web/ui/src/index.css](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/src/index.css)<br>[xinference/ui/web/ui/src/index.js](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/src/index.js)<br>[xinference/thirdparty/whisper/__main__.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/whisper/__main__.py)<br>[xinference/thirdparty/melo/main.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/melo/main.py)<br>[xinference/thirdparty/indextts/s2mel/dac/__main__.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/indextts/s2mel/dac/__main__.py)<br>[xinference/thirdparty/cosyvoice/bin/average_model.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/cosyvoice/bin/average_model.py)<br>[xinference/thirdparty/cosyvoice/bin/export_jit.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/cosyvoice/bin/export_jit.py) |
| agentRuntime | 71 | [AGENTS.md](../../../../sources/xorbitsai__inference/AGENTS.md)<br>[xinference/thirdparty/fish_speech/tools/api_client.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/fish_speech/tools/api_client.py)<br>[xinference/thirdparty/fish_speech/tools/api_server.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/fish_speech/tools/api_server.py)<br>[xinference/thirdparty/fish_speech/tools/download_models.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/fish_speech/tools/download_models.py)<br>[xinference/thirdparty/fish_speech/tools/e2e_webui.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/fish_speech/tools/e2e_webui.py)<br>[xinference/thirdparty/fish_speech/tools/extract_model.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/fish_speech/tools/extract_model.py)<br>[xinference/thirdparty/fish_speech/tools/file.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/fish_speech/tools/file.py)<br>[xinference/thirdparty/fish_speech/tools/fish_e2e.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/fish_speech/tools/fish_e2e.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 162 | [xinference/ui/web/ui/src/index.css](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/src/index.css)<br>[xinference/ui/web/ui/src/index.js](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/src/index.js)<br>[xinference/ui/web/ui/src/scenes/user_management/index.js](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/src/scenes/user_management/index.js)<br>[xinference/ui/web/ui/src/scenes/security_settings/index.js](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/src/scenes/security_settings/index.js)<br>[xinference/ui/web/ui/src/scenes/running_models/index.js](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/src/scenes/running_models/index.js)<br>[xinference/ui/web/ui/src/scenes/register_model/index.js](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/src/scenes/register_model/index.js)<br>[xinference/ui/web/ui/src/scenes/monitoring/index.js](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/src/scenes/monitoring/index.js)<br>[xinference/ui/web/ui/src/scenes/logs/index.js](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/src/scenes/logs/index.js) |
| spec | 12 | [xinference/model/video/model_spec.json](../../../../sources/xorbitsai__inference/xinference/model/video/model_spec.json)<br>[xinference/model/rerank/model_spec.json](../../../../sources/xorbitsai__inference/xinference/model/rerank/model_spec.json)<br>[xinference/model/image/model_spec.json](../../../../sources/xorbitsai__inference/xinference/model/image/model_spec.json)<br>[xinference/model/embedding/model_spec.json](../../../../sources/xorbitsai__inference/xinference/model/embedding/model_spec.json)<br>[xinference/model/audio/model_spec.json](../../../../sources/xorbitsai__inference/xinference/model/audio/model_spec.json)<br>[xinference/deploy/docker/requirements_cpu/requirements_cpu-base.txt](../../../../sources/xorbitsai__inference/xinference/deploy/docker/requirements_cpu/requirements_cpu-base.txt)<br>[xinference/deploy/docker/requirements_cpu/requirements_cpu-ml.txt](../../../../sources/xorbitsai__inference/xinference/deploy/docker/requirements_cpu/requirements_cpu-ml.txt)<br>[xinference/deploy/docker/requirements_cpu/requirements_cpu-models.txt](../../../../sources/xorbitsai__inference/xinference/deploy/docker/requirements_cpu/requirements_cpu-models.txt) |
| eval | 162 | [xinference/thirdparty/melo/text/es_phonemizer/test.ipynb](../../../../sources/xorbitsai__inference/xinference/thirdparty/melo/text/es_phonemizer/test.ipynb)<br>[xinference/thirdparty/fish_speech/tools/llama/eval_in_context.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/fish_speech/tools/llama/eval_in_context.py)<br>[xinference/thirdparty/f5_tts/eval/ecapa_tdnn.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/f5_tts/eval/ecapa_tdnn.py)<br>[xinference/thirdparty/f5_tts/eval/eval_infer_batch.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/f5_tts/eval/eval_infer_batch.py)<br>[xinference/thirdparty/f5_tts/eval/eval_infer_batch.sh](../../../../sources/xorbitsai__inference/xinference/thirdparty/f5_tts/eval/eval_infer_batch.sh)<br>[xinference/thirdparty/f5_tts/eval/eval_librispeech_test_clean.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/f5_tts/eval/eval_librispeech_test_clean.py)<br>[xinference/thirdparty/f5_tts/eval/eval_seedtts_testset.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/f5_tts/eval/eval_seedtts_testset.py)<br>[xinference/thirdparty/f5_tts/eval/README.md](../../../../sources/xorbitsai__inference/xinference/thirdparty/f5_tts/eval/README.md) |
| security | 14 | [xinference/ui/web/ui/src/scenes/security_settings/index.js](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/src/scenes/security_settings/index.js)<br>[xinference/ui/web/ui/src/scenes/audit_log/index.js](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/src/scenes/audit_log/index.js)<br>[xinference/core/status_guard.py](../../../../sources/xorbitsai__inference/xinference/core/status_guard.py)<br>[xinference/client/tests/test_async_client_with_auth.py](../../../../sources/xorbitsai__inference/xinference/client/tests/test_async_client_with_auth.py)<br>[xinference/client/tests/test_client_with_auth.py](../../../../sources/xorbitsai__inference/xinference/client/tests/test_client_with_auth.py)<br>[xinference/api/oauth2/auth_service.py](../../../../sources/xorbitsai__inference/xinference/api/oauth2/auth_service.py)<br>[xinference/api/oauth2/advanced/audit.py](../../../../sources/xorbitsai__inference/xinference/api/oauth2/advanced/audit.py)<br>[xinference/api/oauth2/advanced/auth_service.py](../../../../sources/xorbitsai__inference/xinference/api/oauth2/advanced/auth_service.py) |
| ci | 6 | [.github/workflows/assign.yaml](../../../../sources/xorbitsai__inference/.github/workflows/assign.yaml)<br>[.github/workflows/docker-cd.yaml](../../../../sources/xorbitsai__inference/.github/workflows/docker-cd.yaml)<br>[.github/workflows/issue.yaml](../../../../sources/xorbitsai__inference/.github/workflows/issue.yaml)<br>[.github/workflows/pr_auto_run_gen_docs.yaml](../../../../sources/xorbitsai__inference/.github/workflows/pr_auto_run_gen_docs.yaml)<br>[.github/workflows/python.yaml](../../../../sources/xorbitsai__inference/.github/workflows/python.yaml)<br>[.github/workflows/release.yaml](../../../../sources/xorbitsai__inference/.github/workflows/release.yaml) |
| container | 22 | [xinference/deploy/__init__.py](../../../../sources/xorbitsai__inference/xinference/deploy/__init__.py)<br>[xinference/deploy/cmdline.py](../../../../sources/xorbitsai__inference/xinference/deploy/cmdline.py)<br>[xinference/deploy/local.py](../../../../sources/xorbitsai__inference/xinference/deploy/local.py)<br>[xinference/deploy/supervisor.py](../../../../sources/xorbitsai__inference/xinference/deploy/supervisor.py)<br>[xinference/deploy/utils.py](../../../../sources/xorbitsai__inference/xinference/deploy/utils.py)<br>[xinference/deploy/worker.py](../../../../sources/xorbitsai__inference/xinference/deploy/worker.py)<br>[xinference/deploy/test/__init__.py](../../../../sources/xorbitsai__inference/xinference/deploy/test/__init__.py)<br>[xinference/deploy/test/test_cmdline.py](../../../../sources/xorbitsai__inference/xinference/deploy/test/test_cmdline.py) |
| instruction | 1 | [AGENTS.md](../../../../sources/xorbitsai__inference/AGENTS.md) |
| docs | 568 | [README_ja_JP.md](../../../../sources/xorbitsai__inference/README_ja_JP.md)<br>[README_zh_CN.md](../../../../sources/xorbitsai__inference/README_zh_CN.md)<br>[README.md](../../../../sources/xorbitsai__inference/README.md)<br>[xinference/thirdparty/matcha/hifigan/README.md](../../../../sources/xorbitsai__inference/xinference/thirdparty/matcha/hifigan/README.md)<br>[xinference/thirdparty/indextts/utils/maskgct/models/codec/ns3_codec/README.md](../../../../sources/xorbitsai__inference/xinference/thirdparty/indextts/utils/maskgct/models/codec/ns3_codec/README.md)<br>[xinference/thirdparty/fish_speech/tools/sensevoice/README.md](../../../../sources/xorbitsai__inference/xinference/thirdparty/fish_speech/tools/sensevoice/README.md)<br>[xinference/thirdparty/fish_speech/fish_speech/text/chn_text_norm/README.md](../../../../sources/xorbitsai__inference/xinference/thirdparty/fish_speech/fish_speech/text/chn_text_norm/README.md)<br>[xinference/thirdparty/fish_speech/fish_speech/i18n/README.md](../../../../sources/xorbitsai__inference/xinference/thirdparty/fish_speech/fish_speech/i18n/README.md) |
| config | 12 | [pyproject.toml](../../../../sources/xorbitsai__inference/pyproject.toml)<br>[xinference/ui/web/ui/package.json](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/package.json)<br>[xinference/deploy/docker/requirements_cpu/requirements_cpu-base.txt](../../../../sources/xorbitsai__inference/xinference/deploy/docker/requirements_cpu/requirements_cpu-base.txt)<br>[xinference/deploy/docker/requirements_cpu/requirements_cpu-ml.txt](../../../../sources/xorbitsai__inference/xinference/deploy/docker/requirements_cpu/requirements_cpu-ml.txt)<br>[xinference/deploy/docker/requirements_cpu/requirements_cpu-models.txt](../../../../sources/xorbitsai__inference/xinference/deploy/docker/requirements_cpu/requirements_cpu-models.txt)<br>[xinference/deploy/docker/requirements_aarch64/requirements_aarch64.txt](../../../../sources/xorbitsai__inference/xinference/deploy/docker/requirements_aarch64/requirements_aarch64.txt)<br>[xinference/deploy/docker/requirements/requirements-base.txt](../../../../sources/xorbitsai__inference/xinference/deploy/docker/requirements/requirements-base.txt)<br>[xinference/deploy/docker/requirements/requirements-ml.txt](../../../../sources/xorbitsai__inference/xinference/deploy/docker/requirements/requirements-ml.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 162 | [xinference/thirdparty/melo/text/es_phonemizer/test.ipynb](../../../../sources/xorbitsai__inference/xinference/thirdparty/melo/text/es_phonemizer/test.ipynb)<br>[xinference/thirdparty/fish_speech/tools/llama/eval_in_context.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/fish_speech/tools/llama/eval_in_context.py)<br>[xinference/thirdparty/f5_tts/eval/ecapa_tdnn.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/f5_tts/eval/ecapa_tdnn.py)<br>[xinference/thirdparty/f5_tts/eval/eval_infer_batch.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/f5_tts/eval/eval_infer_batch.py)<br>[xinference/thirdparty/f5_tts/eval/eval_infer_batch.sh](../../../../sources/xorbitsai__inference/xinference/thirdparty/f5_tts/eval/eval_infer_batch.sh)<br>[xinference/thirdparty/f5_tts/eval/eval_librispeech_test_clean.py](../../../../sources/xorbitsai__inference/xinference/thirdparty/f5_tts/eval/eval_librispeech_test_clean.py) |
| CI workflow | 6 | [.github/workflows/assign.yaml](../../../../sources/xorbitsai__inference/.github/workflows/assign.yaml)<br>[.github/workflows/docker-cd.yaml](../../../../sources/xorbitsai__inference/.github/workflows/docker-cd.yaml)<br>[.github/workflows/issue.yaml](../../../../sources/xorbitsai__inference/.github/workflows/issue.yaml)<br>[.github/workflows/pr_auto_run_gen_docs.yaml](../../../../sources/xorbitsai__inference/.github/workflows/pr_auto_run_gen_docs.yaml)<br>[.github/workflows/python.yaml](../../../../sources/xorbitsai__inference/.github/workflows/python.yaml)<br>[.github/workflows/release.yaml](../../../../sources/xorbitsai__inference/.github/workflows/release.yaml) |
| 컨테이너/배포 | 22 | [xinference/deploy/__init__.py](../../../../sources/xorbitsai__inference/xinference/deploy/__init__.py)<br>[xinference/deploy/cmdline.py](../../../../sources/xorbitsai__inference/xinference/deploy/cmdline.py)<br>[xinference/deploy/local.py](../../../../sources/xorbitsai__inference/xinference/deploy/local.py)<br>[xinference/deploy/supervisor.py](../../../../sources/xorbitsai__inference/xinference/deploy/supervisor.py)<br>[xinference/deploy/utils.py](../../../../sources/xorbitsai__inference/xinference/deploy/utils.py)<br>[xinference/deploy/worker.py](../../../../sources/xorbitsai__inference/xinference/deploy/worker.py) |
| 보안/정책 | 14 | [xinference/ui/web/ui/src/scenes/security_settings/index.js](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/src/scenes/security_settings/index.js)<br>[xinference/ui/web/ui/src/scenes/audit_log/index.js](../../../../sources/xorbitsai__inference/xinference/ui/web/ui/src/scenes/audit_log/index.js)<br>[xinference/core/status_guard.py](../../../../sources/xorbitsai__inference/xinference/core/status_guard.py)<br>[xinference/client/tests/test_async_client_with_auth.py](../../../../sources/xorbitsai__inference/xinference/client/tests/test_async_client_with_auth.py)<br>[xinference/client/tests/test_client_with_auth.py](../../../../sources/xorbitsai__inference/xinference/client/tests/test_client_with_auth.py)<br>[xinference/api/oauth2/auth_service.py](../../../../sources/xorbitsai__inference/xinference/api/oauth2/auth_service.py) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/xorbitsai__inference/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `xinference/ui/web/ui/src/App.js`, `xinference/ui/web/ui/src/index.css`, `xinference/ui/web/ui/src/index.js`.
2. entrypoint를 따라 실행 흐름 확인: `xinference/ui/web/ui/src/App.js`, `xinference/ui/web/ui/src/index.css`, `xinference/ui/web/ui/src/index.js`.
3. agent/tool runtime 매핑: `AGENTS.md`, `xinference/thirdparty/fish_speech/tools/api_client.py`, `xinference/thirdparty/fish_speech/tools/api_server.py`.
4. retrieval/memory/indexing 확인: `xinference/ui/web/ui/src/index.css`, `xinference/ui/web/ui/src/index.js`, `xinference/ui/web/ui/src/scenes/user_management/index.js`.
5. test/eval 파일로 동작 검증: `xinference/thirdparty/melo/text/es_phonemizer/test.ipynb`, `xinference/thirdparty/fish_speech/tools/llama/eval_in_context.py`, `xinference/thirdparty/f5_tts/eval/ecapa_tdnn.py`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 Local clone structure analysis 1884 files, 350 directories.. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, LICENSE, tests이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
