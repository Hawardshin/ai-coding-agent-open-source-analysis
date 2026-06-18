# openai/chatgpt-retrieval-plugin 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

The ChatGPT Retrieval Plugin lets you easily find personal or work documents by asking questions in natural language.

## 요약

- 조사 단위: `sources/openai__chatgpt-retrieval-plugin` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 122 files, 70 directories, depth score 98, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=examples/providers/supabase/migrations/20230414142107_init_pg_vector.sql, examples/memory/ai-plugin.json, examples/memory/main.py이고, 의존성 단서는 openai, llama-index, fastapi, pydantic, llama, chroma, 검증/운영 단서는 test/eval 경로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | openai/chatgpt-retrieval-plugin |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 21190 |
| Forks | 3600 |
| License | MIT |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/openai__chatgpt-retrieval-plugin](../../../../sources/openai__chatgpt-retrieval-plugin) |
| 기존 보고서 | [reports/llm-wiki/repositories/openai__chatgpt-retrieval-plugin.md](../../../llm-wiki/repositories/openai__chatgpt-retrieval-plugin.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 122 / 70 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, .well-known, assets, datastore, docs, examples, local_server, models, scripts, server, services, tests |
| 상위 확장자 | .py: 51, .md: 30, .json: 10, .yaml: 6, (none): 6, .ipynb: 5, .png: 4, .sql: 2, .toml: 2, .yml: 2, .example: 1, .jsonl: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 29 |
| tests | validation surface | 19 |
| examples/memory | examples workspace | 10 |
| examples/docker | examples workspace | 6 |
| examples/authentication-methods | examples workspace | 4 |
| server | source boundary | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| datastore | top-level component | 1 |
| examples | top-level component | 1 |
| examples/function-calling | examples workspace | 1 |
| examples/providers | examples workspace | 1 |
| local_server | source boundary | 1 |
| models | top-level component | 1 |
| scripts | top-level component | 1 |
| services | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | heroku-push | make heroku-push |
| utility | Makefile | heroku-login | make heroku-login |
| serve-dev | pyproject.toml | start | start |
| serve-dev | pyproject.toml | dev | dev |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | 없음 |
| agentFrameworks | llama-index |
| vectorStores | chroma, qdrant, milvus, weaviate, pgvector |
| modelRuntime | llama |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [examples/providers/supabase/migrations/20230414142107_init_pg_vector.sql](../../../../sources/openai__chatgpt-retrieval-plugin/examples/providers/supabase/migrations/20230414142107_init_pg_vector.sql) | retrieval signal |
| retrieval | [examples/memory/ai-plugin.json](../../../../sources/openai__chatgpt-retrieval-plugin/examples/memory/ai-plugin.json) | retrieval signal |
| retrieval | [examples/memory/main.py](../../../../sources/openai__chatgpt-retrieval-plugin/examples/memory/main.py) | retrieval signal |
| retrieval | [examples/memory/openapi.yaml](../../../../sources/openai__chatgpt-retrieval-plugin/examples/memory/openapi.yaml) | retrieval signal |
| entrypoints | [server/main.py](../../../../sources/openai__chatgpt-retrieval-plugin/server/main.py) | entrypoints signal |
| entrypoints | [local_server/main.py](../../../../sources/openai__chatgpt-retrieval-plugin/local_server/main.py) | entrypoints signal |
| entrypoints | [examples/authentication-methods/no-auth/main.py](../../../../sources/openai__chatgpt-retrieval-plugin/examples/authentication-methods/no-auth/main.py) | entrypoints signal |
| docs | [README.md](../../../../sources/openai__chatgpt-retrieval-plugin/README.md) | docs signal |
| docs | [scripts/process_zip/README.md](../../../../sources/openai__chatgpt-retrieval-plugin/scripts/process_zip/README.md) | docs signal |
| docs | [scripts/process_jsonl/README.md](../../../../sources/openai__chatgpt-retrieval-plugin/scripts/process_jsonl/README.md) | docs signal |
| docs | [scripts/process_json/README.md](../../../../sources/openai__chatgpt-retrieval-plugin/scripts/process_json/README.md) | docs signal |
| eval | [tests/__init__.py](../../../../sources/openai__chatgpt-retrieval-plugin/tests/__init__.py) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [server/main.py](../../../../sources/openai__chatgpt-retrieval-plugin/server/main.py)<br>[local_server/main.py](../../../../sources/openai__chatgpt-retrieval-plugin/local_server/main.py)<br>[examples/memory/main.py](../../../../sources/openai__chatgpt-retrieval-plugin/examples/memory/main.py)<br>[examples/authentication-methods/no-auth/main.py](../../../../sources/openai__chatgpt-retrieval-plugin/examples/authentication-methods/no-auth/main.py) |
| agentRuntime | 4 | [examples/memory/ai-plugin.json](../../../../sources/openai__chatgpt-retrieval-plugin/examples/memory/ai-plugin.json)<br>[examples/memory/main.py](../../../../sources/openai__chatgpt-retrieval-plugin/examples/memory/main.py)<br>[examples/memory/openapi.yaml](../../../../sources/openai__chatgpt-retrieval-plugin/examples/memory/openapi.yaml)<br>[examples/memory/README.md](../../../../sources/openai__chatgpt-retrieval-plugin/examples/memory/README.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 5 | [examples/providers/supabase/migrations/20230414142107_init_pg_vector.sql](../../../../sources/openai__chatgpt-retrieval-plugin/examples/providers/supabase/migrations/20230414142107_init_pg_vector.sql)<br>[examples/memory/ai-plugin.json](../../../../sources/openai__chatgpt-retrieval-plugin/examples/memory/ai-plugin.json)<br>[examples/memory/main.py](../../../../sources/openai__chatgpt-retrieval-plugin/examples/memory/main.py)<br>[examples/memory/openapi.yaml](../../../../sources/openai__chatgpt-retrieval-plugin/examples/memory/openapi.yaml)<br>[examples/memory/README.md](../../../../sources/openai__chatgpt-retrieval-plugin/examples/memory/README.md) |
| spec | 0 | 명확하지 않음 |
| eval | 17 | [tests/__init__.py](../../../../sources/openai__chatgpt-retrieval-plugin/tests/__init__.py)<br>[tests/datastore/providers/zilliz/test_zilliz_datastore.py](../../../../sources/openai__chatgpt-retrieval-plugin/tests/datastore/providers/zilliz/test_zilliz_datastore.py)<br>[tests/datastore/providers/weaviate/docker-compose.yml](../../../../sources/openai__chatgpt-retrieval-plugin/tests/datastore/providers/weaviate/docker-compose.yml)<br>[tests/datastore/providers/weaviate/test_weaviate_datastore.py](../../../../sources/openai__chatgpt-retrieval-plugin/tests/datastore/providers/weaviate/test_weaviate_datastore.py)<br>[tests/datastore/providers/supabase/test_supabase_datastore.py](../../../../sources/openai__chatgpt-retrieval-plugin/tests/datastore/providers/supabase/test_supabase_datastore.py)<br>[tests/datastore/providers/redis/test_redis_datastore.py](../../../../sources/openai__chatgpt-retrieval-plugin/tests/datastore/providers/redis/test_redis_datastore.py)<br>[tests/datastore/providers/qdrant/test_qdrant_datastore.py](../../../../sources/openai__chatgpt-retrieval-plugin/tests/datastore/providers/qdrant/test_qdrant_datastore.py)<br>[tests/datastore/providers/postgres/test_postgres_datastore.py](../../../../sources/openai__chatgpt-retrieval-plugin/tests/datastore/providers/postgres/test_postgres_datastore.py) |
| security | 3 | [examples/authentication-methods/oauth/ai-plugin.json](../../../../sources/openai__chatgpt-retrieval-plugin/examples/authentication-methods/oauth/ai-plugin.json)<br>[examples/authentication-methods/no-auth/ai-plugin.json](../../../../sources/openai__chatgpt-retrieval-plugin/examples/authentication-methods/no-auth/ai-plugin.json)<br>[examples/authentication-methods/no-auth/main.py](../../../../sources/openai__chatgpt-retrieval-plugin/examples/authentication-methods/no-auth/main.py) |
| ci | 0 | 명확하지 않음 |
| container | 12 | [Dockerfile](../../../../sources/openai__chatgpt-retrieval-plugin/Dockerfile)<br>[tests/datastore/providers/weaviate/docker-compose.yml](../../../../sources/openai__chatgpt-retrieval-plugin/tests/datastore/providers/weaviate/docker-compose.yml)<br>[examples/docker/redis/docker-compose.yml](../../../../sources/openai__chatgpt-retrieval-plugin/examples/docker/redis/docker-compose.yml)<br>[examples/docker/qdrant/docker-compose.yaml](../../../../sources/openai__chatgpt-retrieval-plugin/examples/docker/qdrant/docker-compose.yaml)<br>[examples/docker/milvus/docker-compose.yaml](../../../../sources/openai__chatgpt-retrieval-plugin/examples/docker/milvus/docker-compose.yaml)<br>[examples/docker/elasticsearch/docker-compose.yaml](../../../../sources/openai__chatgpt-retrieval-plugin/examples/docker/elasticsearch/docker-compose.yaml)<br>[docs/deployment/flyio.md](../../../../sources/openai__chatgpt-retrieval-plugin/docs/deployment/flyio.md)<br>[docs/deployment/heroku.md](../../../../sources/openai__chatgpt-retrieval-plugin/docs/deployment/heroku.md) |
| instruction | 0 | 명확하지 않음 |
| docs | 30 | [README.md](../../../../sources/openai__chatgpt-retrieval-plugin/README.md)<br>[scripts/process_zip/README.md](../../../../sources/openai__chatgpt-retrieval-plugin/scripts/process_zip/README.md)<br>[scripts/process_jsonl/README.md](../../../../sources/openai__chatgpt-retrieval-plugin/scripts/process_jsonl/README.md)<br>[scripts/process_json/README.md](../../../../sources/openai__chatgpt-retrieval-plugin/scripts/process_json/README.md)<br>[examples/memory/README.md](../../../../sources/openai__chatgpt-retrieval-plugin/examples/memory/README.md)<br>[examples/function-calling/README.md](../../../../sources/openai__chatgpt-retrieval-plugin/examples/function-calling/README.md)<br>[examples/docker/qdrant/README.md](../../../../sources/openai__chatgpt-retrieval-plugin/examples/docker/qdrant/README.md)<br>[examples/docker/elasticsearch/README.md](../../../../sources/openai__chatgpt-retrieval-plugin/examples/docker/elasticsearch/README.md) |
| config | 3 | [Makefile](../../../../sources/openai__chatgpt-retrieval-plugin/Makefile)<br>[poetry.lock](../../../../sources/openai__chatgpt-retrieval-plugin/poetry.lock)<br>[pyproject.toml](../../../../sources/openai__chatgpt-retrieval-plugin/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 17 | [tests/__init__.py](../../../../sources/openai__chatgpt-retrieval-plugin/tests/__init__.py)<br>[tests/datastore/providers/zilliz/test_zilliz_datastore.py](../../../../sources/openai__chatgpt-retrieval-plugin/tests/datastore/providers/zilliz/test_zilliz_datastore.py)<br>[tests/datastore/providers/weaviate/docker-compose.yml](../../../../sources/openai__chatgpt-retrieval-plugin/tests/datastore/providers/weaviate/docker-compose.yml)<br>[tests/datastore/providers/weaviate/test_weaviate_datastore.py](../../../../sources/openai__chatgpt-retrieval-plugin/tests/datastore/providers/weaviate/test_weaviate_datastore.py)<br>[tests/datastore/providers/supabase/test_supabase_datastore.py](../../../../sources/openai__chatgpt-retrieval-plugin/tests/datastore/providers/supabase/test_supabase_datastore.py)<br>[tests/datastore/providers/redis/test_redis_datastore.py](../../../../sources/openai__chatgpt-retrieval-plugin/tests/datastore/providers/redis/test_redis_datastore.py) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 12 | [Dockerfile](../../../../sources/openai__chatgpt-retrieval-plugin/Dockerfile)<br>[tests/datastore/providers/weaviate/docker-compose.yml](../../../../sources/openai__chatgpt-retrieval-plugin/tests/datastore/providers/weaviate/docker-compose.yml)<br>[examples/docker/redis/docker-compose.yml](../../../../sources/openai__chatgpt-retrieval-plugin/examples/docker/redis/docker-compose.yml)<br>[examples/docker/qdrant/docker-compose.yaml](../../../../sources/openai__chatgpt-retrieval-plugin/examples/docker/qdrant/docker-compose.yaml)<br>[examples/docker/milvus/docker-compose.yaml](../../../../sources/openai__chatgpt-retrieval-plugin/examples/docker/milvus/docker-compose.yaml)<br>[examples/docker/elasticsearch/docker-compose.yaml](../../../../sources/openai__chatgpt-retrieval-plugin/examples/docker/elasticsearch/docker-compose.yaml) |
| 보안/정책 | 3 | [examples/authentication-methods/oauth/ai-plugin.json](../../../../sources/openai__chatgpt-retrieval-plugin/examples/authentication-methods/oauth/ai-plugin.json)<br>[examples/authentication-methods/no-auth/ai-plugin.json](../../../../sources/openai__chatgpt-retrieval-plugin/examples/authentication-methods/no-auth/ai-plugin.json)<br>[examples/authentication-methods/no-auth/main.py](../../../../sources/openai__chatgpt-retrieval-plugin/examples/authentication-methods/no-auth/main.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `examples/providers/supabase/migrations/20230414142107_init_pg_vector.sql`, `examples/memory/ai-plugin.json`, `examples/memory/main.py`.
2. entrypoint를 따라 실행 흐름 확인: `server/main.py`, `local_server/main.py`, `examples/memory/main.py`.
3. agent/tool runtime 매핑: `examples/memory/ai-plugin.json`, `examples/memory/main.py`, `examples/memory/openapi.yaml`.
4. retrieval/memory/indexing 확인: `examples/providers/supabase/migrations/20230414142107_init_pg_vector.sql`, `examples/memory/ai-plugin.json`, `examples/memory/main.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/datastore/providers/zilliz/test_zilliz_datastore.py`, `tests/datastore/providers/weaviate/docker-compose.yml`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 The ChatGPT Retrieval Plugin lets you easily find personal or work documents by asking questions in natural language.. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, Makefile, README.md, LICENSE이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
