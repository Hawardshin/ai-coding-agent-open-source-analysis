# stanford-oval/WikiChat 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/stanford-oval__WikiChat |
| remote | https://github.com/stanford-oval/WikiChat |
| HEAD | 803683b (2026-01-30) Merge pull request #58 from diegodlh/patch-1 |
| branch | main |
| groups | llm-wiki-100 |
| files | 163 |
| dirs | 20 |
| stack | unknown/mixed |

## 구조 해석

- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Table of Contents`, `Introduction`, `🚨 Announcements`, `Installation`, `System Requirements`, `Install Dependencies`, `Configure the LLM of Your Choice`, `Fill in the following values with your API keys. Make sure there is not extra space after the key.`, `Changes to this file are ignored by git, so you can safely store your keys here during development.`, `Configure Information Retrieval`, `Option 1 (Default): Use our free rate-limited Wikipedia search API`, `Option 2: Build your own index`, `Run WikiChat in Terminal`, `[Optional] Deploy WikiChat for Multi-user Access`, `Set up Cosmos DB`, `Run Chainlit`, `The Free Rate-limited Wikipedia Search API`, `Wikipedia Preprocessing`

> <p align="center" <img src="./public/img/logo light.png" width="120px" alt="WikiChat Logo" style="display block; margin 0 auto;" / <h1 align="center" <b WikiChat</b <br <a href="https //arxiv.org/abs/2305.14292" <img src="https //img.shields.io/badge/cs.CL 2305.14292 b31b1b" alt="arXiv" </a <a href="https //github.com/stanford oval/WikiChat/stargazers" <img src="https //img.shields.io/github/stars/stanford oval/WikiChat?style=social" alt="Github Stars" </a </h1 </p <p align="center" Stopping the Hallucination of Large Language Models </p <p align="center" <! <a href="https //stanford.edu" target=" blank" <img src="./public/img/stanford.png" width="140px" alt="Stanford University" / </a </p <p align="center" Online demo <a href="https //wikichat.genie.stanford.edu" target=" blank" https //wikichat.genie.stanford.edu </a <br </p https //github.com/user attachments/assets/3ac856ba 682c 4aed

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .chainlit | dir |
| .gitignore | file |
| backend_server.py | file |
| benchmark | dir |
| chainlit_callback_handler.py | file |
| chainlit.md | file |
| command_line_chatbot.py | file |
| conda_env.yaml | file |
| corpora.py | file |
| database.py | file |
| LICENSE | file |
| llm_config.yaml | file |
| pipelines | dir |
| pixi.lock | file |
| pixi.toml | file |
| preprocessing | dir |
| public | dir |
| README.md | file |
| retrieval | dir |
| tasks | dir |
| tests | dir |
| utils | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| benchmark/ | 43 |
| public/ | 23 |
| .chainlit/ | 21 |
| retrieval/ | 16 |
| preprocessing/ | 15 |
| (root) | 13 |
| pipelines/ | 12 |
| tasks/ | 8 |
| tests/ | 8 |
| utils/ | 4 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| tests/ | 8 | preferred |
| benchmark/ | 43 | large |
| benchmark/topics/ | 32 | large |
| public/ | 23 | large |
| .chainlit/ | 21 | large |
| .chainlit/translations/ | 20 | large |
| retrieval/ | 16 | large |
| preprocessing/ | 15 | large |
| pipelines/ | 12 | large |
| public/img/ | 10 | large |
| benchmark/prompts/ | 8 | large |
| pipelines/prompts/ | 8 | large |
| tasks/ | 8 | large |
| public/templates/ | 7 | large |
| retrieval/scripts/ | 5 | large |
| utils/ | 4 | large |
| public/js/ | 3 | large |
| public/templates/partials/ | 3 | large |
| benchmark/scripts/ | 2 | large |
| public/css/ | 2 | large |

## Manifest / 런타임 표면

### Manifest 파일

_없음_

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

- `public/templates/base.jinja2`
- `public/templates/partials/_loading_spinner.jinja2`
- `public/templates/partials/_no_results_alert.jinja2`
- `public/templates/partials/_search_form.jinja2`
- `public/templates/search.jinja2`
- `public/templates/search_api.jinja2`
- `public/templates/upload.jinja2`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/pytest.ini`
- `tests/test_collection.jsonl`
- `tests/test_collection_malformed.jsonl`
- `tests/test_custom_docling.py`
- `tests/test_index.py`
- `tests/test_pipelines.py`
- `tests/test_search_query.py`
- `tests/test_wikipedia_preprocessing.py`

### CI/Docker 후보

_없음_

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 59 |
| .json | 50 |
| .prompt | 16 |
| .png | 9 |
| .jinja2 | 7 |
| .js | 3 |
| .txt | 3 |
| .css | 2 |
| .jsonl | 2 |
| .md | 2 |
| .toml | 2 |
| .yaml | 2 |
| .gitignore | 1 |
| .ini | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `tests/ 내부 책임 분리`
- `benchmark/ 내부 책임 분리`
- `benchmark/topics/ 내부 책임 분리`
- `public/ 내부 책임 분리`
- `.chainlit/ 내부 책임 분리`
- `public/templates/base.jinja2 스펙/명령 의미`
- `public/templates/partials/_loading_spinner.jinja2 스펙/명령 의미`
- `public/templates/partials/_no_results_alert.jinja2 스펙/명령 의미`
- `public/templates/partials/_search_form.jinja2 스펙/명령 의미`
- `public/templates/search.jinja2 스펙/명령 의미`

