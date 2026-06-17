# openai/chatgpt-retrieval-plugin 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/openai__chatgpt-retrieval-plugin |
| remote | https://github.com/openai/chatgpt-retrieval-plugin |
| HEAD | b28ddce (2024-04-24) [Feature] Addition of MongoDB Atlas datastore (#428) |
| branch | main |
| groups | llm-wiki-100 |
| files | 122 |
| dirs | 70 |
| stack | Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `ChatGPT Retrieval Plugin`, `Introduction`, `Table of Contents`, `Quickstart`, `About`, `Retrieval Plugin`, `Retrieval Plugin with Custom GPTs`, `Retrieval Plugin with Function Calling`, `ChatGPT Plugins Model`, `API Endpoints`, `Memory Feature`, `Security`, `Choosing an Embeddings Model`, `Development`, `Setup`, `Using the plugin with Azure OpenAI`, `Choosing a Vector Database`, `Running the API locally`

> ChatGPT Retrieval Plugin Build Custom GPTs with a Retrieval Plugin backend to give ChatGPT access to personal documents. Introduction The ChatGPT Retrieval Plugin repository provides a flexible solution for semantic search and retrieval of personal or organizational documents using natural language queries. It is a standalone retrieval backend, and can be used with ChatGPT custom GPTs, function calling with the chat completions or assistants APIs, or with the ChatGPT plugins model (deprecated). ChatGPT and the Assistants API both natively support retrieval from uploaded files, so you should use the Retrieval Plugin as a backend only if you want more granular control of your retrieval system (e.g. document text chunk length, embedding model / size, etc.). The repository is organized into several directories Directory Description datastore Contains the core logic for storing and querying d

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .dockerignore | file |
| .env.example | file |
| .github | dir |
| .gitignore | file |
| .well-known | dir |
| assets | dir |
| datastore | dir |
| Dockerfile | file |
| docs | dir |
| examples | dir |
| LICENSE | file |
| local_server | dir |
| Makefile | file |
| models | dir |
| poetry.lock | file |
| pyproject.toml | file |
| README.md | file |
| scripts | dir |
| server | dir |
| services | dir |
| tests | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| examples/ | 27 |
| docs/ | 22 |
| datastore/ | 20 |
| tests/ | 17 |
| (root) | 9 |
| scripts/ | 9 |
| services/ | 6 |
| local_server/ | 4 |
| .well-known/ | 3 |
| models/ | 2 |
| .github/ | 1 |
| assets/ | 1 |
| server/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| server/ | 1 | preferred |
| docs/ | 22 | preferred |
| examples/ | 27 | preferred |
| tests/ | 17 | preferred |
| scripts/ | 9 | preferred |
| datastore/ | 20 | large |
| datastore/providers/ | 17 | large |
| tests/datastore/ | 16 | large |
| tests/datastore/providers/ | 16 | large |
| docs/providers/ | 15 | large |
| examples/providers/ | 9 | large |
| examples/docker/ | 8 | large |
| docs/deployment/ | 6 | large |
| services/ | 6 | large |
| examples/authentication-methods/ | 5 | large |
| examples/docker/qdrant/ | 4 | large |
| examples/memory/ | 4 | large |
| examples/providers/supabase/ | 4 | large |
| local_server/ | 4 | large |
| .well-known/ | 3 | large |
| scripts/process_json/ | 3 | large |
| scripts/process_jsonl/ | 3 | large |
| scripts/process_zip/ | 3 | large |
| examples/authentication-methods/no-auth/ | 2 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Dockerfile`
- `examples/docker/redis/docker-compose.yml`
- `poetry.lock`
- `pyproject.toml`
- `tests/datastore/providers/weaviate/docker-compose.yml`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | chatgpt-retrieval-plugin | true | false | false | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `docs/deployment/flyio.md`
- `docs/deployment/heroku.md`
- `docs/deployment/other-options.md`
- `docs/deployment/removing-unused-dependencies.md`
- `docs/deployment/render-thumbnail.png`
- `docs/deployment/render.md`
- `docs/deprecated/plugins.md`
- `docs/providers/analyticdb/setup.md`
- `docs/providers/azurecosmosdb/setup.md`
- `docs/providers/azuresearch/setup.md`
- `docs/providers/chroma/setup.md`
- `docs/providers/elasticsearch/setup.md`
- `docs/providers/llama/setup.md`
- `docs/providers/milvus/setup.md`
- `docs/providers/mongodb/setup.md`
- `docs/providers/pinecone/setup.md`
- `docs/providers/postgres/setup.md`
- `docs/providers/qdrant/setup.md`
- `docs/providers/redis/setup.md`
- `docs/providers/supabase/setup.md`
- `docs/providers/weaviate/setup.md`
- `docs/providers/zilliz/setup.md`
- `examples/docker/elasticsearch/README.md`
- `examples/docker/qdrant/README.md`
- `examples/function-calling/README.md`
- `examples/memory/README.md`
- `scripts/process_json/README.md`
- `scripts/process_jsonl/README.md`
- `scripts/process_zip/README.md`

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/__init__.py`
- `tests/datastore/providers/analyticdb/test_analyticdb_datastore.py`
- `tests/datastore/providers/azurecosmosdb/test_azurecosmosdb_datastore.py`
- `tests/datastore/providers/azuresearch/test_azuresearch_datastore.py`
- `tests/datastore/providers/chroma/test_chroma_datastore.py`
- `tests/datastore/providers/elasticsearch/test_elasticsearch_datastore.py`
- `tests/datastore/providers/llama/test_llama_datastore.py`
- `tests/datastore/providers/milvus/test_milvus_datastore.py`
- `tests/datastore/providers/mongodb_atlas/test_integration.py`
- `tests/datastore/providers/mongodb_atlas/test_mongodb_datastore.py`
- `tests/datastore/providers/postgres/test_postgres_datastore.py`
- `tests/datastore/providers/qdrant/test_qdrant_datastore.py`
- `tests/datastore/providers/redis/test_redis_datastore.py`
- `tests/datastore/providers/supabase/test_supabase_datastore.py`
- `tests/datastore/providers/weaviate/docker-compose.yml`
- `tests/datastore/providers/weaviate/test_weaviate_datastore.py`
- `tests/datastore/providers/zilliz/test_zilliz_datastore.py`

### CI/Docker 후보

- `Dockerfile`
- `examples/docker/elasticsearch/docker-compose.yaml`
- `examples/docker/milvus/docker-compose.yaml`
- `examples/docker/qdrant/docker-compose.yaml`
- `examples/docker/redis/docker-compose.yml`
- `tests/datastore/providers/weaviate/docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 51 |
| .md | 30 |
| .json | 10 |
| .yaml | 6 |
| .ipynb | 5 |
| .png | 4 |
| .gitignore | 2 |
| .sql | 2 |
| .toml | 2 |
| .yml | 2 |
| .dockerignore | 1 |
| .example | 1 |
| .jsonl | 1 |
| .lock | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `server/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `examples/docker/redis/docker-compose.yml 실행 스크립트와 패키지 경계`
- `poetry.lock 실행 스크립트와 패키지 경계`
- `pyproject.toml 실행 스크립트와 패키지 경계`
- `tests/datastore/providers/weaviate/docker-compose.yml 실행 스크립트와 패키지 경계`

