# lm-sys/FastChat 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/lm-sys__FastChat |
| remote | https://github.com/lm-sys/FastChat |
| HEAD | 587d5cf (2025-06-02) Update constants.py (#3733) |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 219 |
| dirs | 35 |
| stack | Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `FastChat`, `News`, `Contents`, `Install`, `Method 1: With pip`, `Method 2: From source`, `Model Weights`, `Vicuna Weights`, `Other Models`, `Inference with Command Line Interface`, `Serving with Web GUI`, `Launch Chatbot Arena (side-by-side battle UI)`, `worker 0`, `worker 1`, `API`, `OpenAI-Compatible RESTful APIs & SDK`, `Hugging Face Generation APIs`, `LangChain Integration`

> FastChat Demo Discord X FastChat is an open platform for training, serving, and evaluating large language model based chatbots. FastChat powers Chatbot Arena (lmarena.ai), serving over 10 million chat requests for 70+ LLMs. Chatbot Arena has collected over 1.5M human votes from side by side LLM battles to compile an online LLM Elo leaderboard. FastChat's core features include The training and evaluation code for state of the art models (e.g., Vicuna, MT Bench). A distributed multi model serving system with web UI and OpenAI compatible RESTful APIs. News [2024/03] 🔥 We released Chatbot Arena technical report. [2023/09] We released LMSYS Chat 1M , a large scale real world LLM conversation dataset. Read the report. [2023/08] We released Vicuna v1.5 based on Llama 2 with 4K and 16K context lengths. Download weights. [2023/07] We released Chatbot Arena Conversations , a dataset containing 33

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .github | dir |
| .gitignore | file |
| .pylintrc | file |
| assets | dir |
| data | dir |
| docker | dir |
| docs | dir |
| fastchat | dir |
| format.sh | file |
| LICENSE | file |
| playground | dir |
| pyproject.toml | file |
| README.md | file |
| scripts | dir |
| tests | dir |
| theme.json | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| fastchat/ | 153 |
| docs/ | 23 |
| tests/ | 10 |
| playground/ | 9 |
| (root) | 7 |
| assets/ | 6 |
| scripts/ | 6 |
| .github/ | 2 |
| docker/ | 2 |
| data/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 23 | preferred |
| tests/ | 10 | preferred |
| scripts/ | 6 | preferred |
| fastchat/ | 153 | large |
| fastchat/serve/ | 78 | large |
| fastchat/serve/monitor/ | 40 | large |
| fastchat/model/ | 19 | large |
| fastchat/data/ | 17 | large |
| fastchat/llm_judge/ | 16 | large |
| fastchat/train/ | 12 | large |
| playground/ | 9 | large |
| assets/ | 6 | large |
| docs/commands/ | 6 | large |
| fastchat/llm_judge/data/ | 6 | large |
| fastchat/modules/ | 5 | large |
| playground/test_embedding/ | 4 | large |
| fastchat/serve/vision/ | 3 | large |
| .github/ | 2 | large |
| docker/ | 2 | large |
| fastchat/protocol/ | 2 | large |
| fastchat/serve/example_images/ | 2 | large |
| fastchat/serve/gateway/ | 2 | large |
| .github/workflows/ | 1 | large |
| data/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `docker/Dockerfile`
- `docker/docker-compose.yml`
- `pyproject.toml`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | fschat | false | false | false | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `docs/arena.md`
- `docs/awq.md`
- `docs/commands/conv_release.md`
- `docs/commands/data_cleaning.md`
- `docs/commands/leaderboard.md`
- `docs/commands/local_cluster.md`
- `docs/commands/pypi.md`
- `docs/commands/webserver.md`
- `docs/dashinfer_integration.md`
- `docs/dataset_release.md`
- `docs/exllama_v2.md`
- `docs/gptq.md`
- `docs/langchain_integration.md`
- `docs/lightllm_integration.md`
- `docs/mlx_integration.md`
- `docs/model_support.md`
- `docs/openai_api.md`
- `docs/server_arch.md`
- `docs/third_party_ui.md`
- `docs/training.md`
- `docs/vicuna_weights_version.md`
- `docs/vllm_integration.md`
- `docs/xFasterTransformer.md`
- `fastchat/llm_judge/README.md`
- `fastchat/serve/gateway/README.md`
- `fastchat/serve/monitor/classify/README.md`
- `fastchat/serve/monitor/vote_time_stats/README.md`
- `playground/test_embedding/README.md`
- `tests/README.md`

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

- `docs/commands/conv_release.md`
- `docs/commands/data_cleaning.md`
- `docs/commands/leaderboard.md`
- `docs/commands/local_cluster.md`
- `docs/commands/pypi.md`
- `docs/commands/webserver.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/README.md`
- `tests/killall_python.sh`
- `tests/launch_openai_api_test_server.py`
- `tests/load_test.py`
- `tests/test_cli.py`
- `tests/test_cli_inputs.txt`
- `tests/test_image_utils.py`
- `tests/test_openai_api.py`
- `tests/test_openai_langchain.py`
- `tests/test_openai_vision_api.py`

### CI/Docker 후보

- `.github/workflows/python-package.yml`
- `docker/Dockerfile`
- `docker/docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 148 |
| .md | 32 |
| .sh | 9 |
| .jsonl | 5 |
| .png | 5 |
| .json | 4 |
| .jpg | 2 |
| .yaml | 2 |
| .yml | 2 |
| .conf | 1 |
| .gif | 1 |
| .gitignore | 1 |
| .ipynb | 1 |
| .jpeg | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `fastchat/ 내부 책임 분리`
- `fastchat/serve/ 내부 책임 분리`
- `docs/commands/conv_release.md 스펙/명령 의미`
- `docs/commands/data_cleaning.md 스펙/명령 의미`
- `docs/commands/leaderboard.md 스펙/명령 의미`
- `docs/commands/local_cluster.md 스펙/명령 의미`
- `docs/commands/pypi.md 스펙/명령 의미`
- `docker/Dockerfile 실행 스크립트와 패키지 경계`
- `docker/docker-compose.yml 실행 스크립트와 패키지 경계`
- `pyproject.toml 실행 스크립트와 패키지 경계`

