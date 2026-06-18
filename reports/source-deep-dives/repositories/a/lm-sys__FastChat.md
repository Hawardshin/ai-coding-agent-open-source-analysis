# lm-sys/FastChat 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Local clone structure analysis: 219 files, 35 directories.

## 요약

- 조사 단위: `sources/lm-sys__FastChat` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 219 files, 35 directories, depth score 75, key references 8개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 api/server, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 eval=tests/killall_python.sh, tests/launch_openai_api_test_server.py, tests/load_test.py이고, 의존성 단서는 openai, anthropic, fastapi, pydantic, torch, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 품질/평가 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | lm-sys/FastChat |
| 주제 | 평가/관측/품질 / 평가/관측/품질 |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/lm-sys__FastChat](../../../../sources/lm-sys__FastChat) |
| 기존 보고서 | [reports/clone-structures/lm-sys__FastChat.md](../../../clone-structures/lm-sys__FastChat.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 219 / 35 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, assets, data, docker, docs, fastchat, playground, scripts, tests |
| 상위 확장자 | .py: 148, .md: 32, .sh: 9, .jsonl: 5, .png: 5, .json: 4, (none): 4, .jpg: 2, .yaml: 2, .yml: 2, .conf: 1, .gif: 1 |
| 소스 패턴 | api/server, retrieval/vector path, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 24 |
| tests | validation surface | 12 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| data | top-level component | 1 |
| docker | documentation surface | 1 |
| fastchat | top-level component | 1 |
| playground | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | torch, transformers |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| eval | [tests/killall_python.sh](../../../../sources/lm-sys__FastChat/tests/killall_python.sh) | eval signal |
| eval | [tests/launch_openai_api_test_server.py](../../../../sources/lm-sys__FastChat/tests/launch_openai_api_test_server.py) | eval signal |
| eval | [tests/load_test.py](../../../../sources/lm-sys__FastChat/tests/load_test.py) | eval signal |
| eval | [tests/README.md](../../../../sources/lm-sys__FastChat/tests/README.md) | eval signal |
| config | [pyproject.toml](../../../../sources/lm-sys__FastChat/pyproject.toml) | config signal |
| ci | [.github/workflows/python-package.yml](../../../../sources/lm-sys__FastChat/.github/workflows/python-package.yml) | ci signal |
| container | [docker/docker-compose.yml](../../../../sources/lm-sys__FastChat/docker/docker-compose.yml) | container support |
| container | [docker/Dockerfile](../../../../sources/lm-sys__FastChat/docker/Dockerfile) | container support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 4 | [playground/test_embedding/README.md](../../../../sources/lm-sys__FastChat/playground/test_embedding/README.md)<br>[playground/test_embedding/test_classification.py](../../../../sources/lm-sys__FastChat/playground/test_embedding/test_classification.py)<br>[playground/test_embedding/test_semantic_search.py](../../../../sources/lm-sys__FastChat/playground/test_embedding/test_semantic_search.py)<br>[playground/test_embedding/test_sentence_similarity.py](../../../../sources/lm-sys__FastChat/playground/test_embedding/test_sentence_similarity.py) |
| spec | 0 | 명확하지 않음 |
| eval | 66 | [tests/killall_python.sh](../../../../sources/lm-sys__FastChat/tests/killall_python.sh)<br>[tests/launch_openai_api_test_server.py](../../../../sources/lm-sys__FastChat/tests/launch_openai_api_test_server.py)<br>[tests/load_test.py](../../../../sources/lm-sys__FastChat/tests/load_test.py)<br>[tests/README.md](../../../../sources/lm-sys__FastChat/tests/README.md)<br>[tests/test_cli_inputs.txt](../../../../sources/lm-sys__FastChat/tests/test_cli_inputs.txt)<br>[tests/test_cli.py](../../../../sources/lm-sys__FastChat/tests/test_cli.py)<br>[tests/test_image_utils.py](../../../../sources/lm-sys__FastChat/tests/test_image_utils.py)<br>[tests/test_openai_api.py](../../../../sources/lm-sys__FastChat/tests/test_openai_api.py) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/python-package.yml](../../../../sources/lm-sys__FastChat/.github/workflows/python-package.yml) |
| container | 2 | [docker/docker-compose.yml](../../../../sources/lm-sys__FastChat/docker/docker-compose.yml)<br>[docker/Dockerfile](../../../../sources/lm-sys__FastChat/docker/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 30 | [README.md](../../../../sources/lm-sys__FastChat/README.md)<br>[tests/README.md](../../../../sources/lm-sys__FastChat/tests/README.md)<br>[playground/test_embedding/README.md](../../../../sources/lm-sys__FastChat/playground/test_embedding/README.md)<br>[fastchat/serve/monitor/vote_time_stats/README.md](../../../../sources/lm-sys__FastChat/fastchat/serve/monitor/vote_time_stats/README.md)<br>[fastchat/serve/monitor/classify/README.md](../../../../sources/lm-sys__FastChat/fastchat/serve/monitor/classify/README.md)<br>[fastchat/serve/gateway/README.md](../../../../sources/lm-sys__FastChat/fastchat/serve/gateway/README.md)<br>[fastchat/llm_judge/README.md](../../../../sources/lm-sys__FastChat/fastchat/llm_judge/README.md)<br>[docs/arena.md](../../../../sources/lm-sys__FastChat/docs/arena.md) |
| config | 1 | [pyproject.toml](../../../../sources/lm-sys__FastChat/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 66 | [tests/killall_python.sh](../../../../sources/lm-sys__FastChat/tests/killall_python.sh)<br>[tests/launch_openai_api_test_server.py](../../../../sources/lm-sys__FastChat/tests/launch_openai_api_test_server.py)<br>[tests/load_test.py](../../../../sources/lm-sys__FastChat/tests/load_test.py)<br>[tests/README.md](../../../../sources/lm-sys__FastChat/tests/README.md)<br>[tests/test_cli_inputs.txt](../../../../sources/lm-sys__FastChat/tests/test_cli_inputs.txt)<br>[tests/test_cli.py](../../../../sources/lm-sys__FastChat/tests/test_cli.py) |
| CI workflow | 1 | [.github/workflows/python-package.yml](../../../../sources/lm-sys__FastChat/.github/workflows/python-package.yml) |
| 컨테이너/배포 | 2 | [docker/docker-compose.yml](../../../../sources/lm-sys__FastChat/docker/docker-compose.yml)<br>[docker/Dockerfile](../../../../sources/lm-sys__FastChat/docker/Dockerfile) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/killall_python.sh`, `tests/launch_openai_api_test_server.py`, `tests/load_test.py`.
2. retrieval/memory/indexing 확인: `playground/test_embedding/README.md`, `playground/test_embedding/test_classification.py`, `playground/test_embedding/test_semantic_search.py`.
3. test/eval 파일로 동작 검증: `tests/killall_python.sh`, `tests/launch_openai_api_test_server.py`, `tests/load_test.py`.

## 기존 레포 인사이트

평가/관측/품질 관점에서 Local clone structure analysis 219 files, 35 directories.. 핵심 구조 신호는 pyproject.toml, README.md, LICENSE, openai, anthropic, fastapi이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 평가/관측/품질 레포입니다. 활용 관점은 품질/평가 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
