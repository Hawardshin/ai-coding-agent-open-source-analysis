# openai/chatgpt-retrieval-plugin Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

The ChatGPT Retrieval Plugin lets you easily find personal or work documents by asking questions in natural language.

## 요약

- 조사 단위: `sources/openai__chatgpt-retrieval-plugin` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 122 files, 70 directories, depth score 104, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=examples/providers/supabase/migrations/20230414142107_init_pg_vector.sql, examples/memory/ai-plugin.json, examples/memory/main.py이고, 의존성 단서는 openai, llama-index, fastapi, pydantic, llama, chroma, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | openai/chatgpt-retrieval-plugin |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 21190 |
| Forks | 3600 |
| License | MIT |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/openai__chatgpt-retrieval-plugin](../../../../sources/openai__chatgpt-retrieval-plugin) |
| Existing report | [reports/llm-wiki/repositories/openai__chatgpt-retrieval-plugin.md](../../../llm-wiki/repositories/openai__chatgpt-retrieval-plugin.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 122 / 70 |
| Max observed depth | 5 |
| Top directories | .github, .well-known, assets, datastore, docs, examples, local_server, models, scripts, server, services, tests |
| Top extensions | .py: 51, .md: 30, .json: 10, .yaml: 6, (none): 6, .ipynb: 5, .png: 4, .sql: 2, .toml: 2, .yml: 2, .example: 1, .jsonl: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
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


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | heroku-push | make heroku-push |
| utility | Makefile | heroku-login | make heroku-login |
| serve-dev | pyproject.toml | start | start |
| serve-dev | pyproject.toml | dev | dev |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | none |
| agentFrameworks | llama-index |
| vectorStores | chroma, qdrant, milvus, weaviate, pgvector |
| modelRuntime | llama |
| webRuntime | fastapi |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [server/main.py](../../../../sources/openai__chatgpt-retrieval-plugin/server/main.py)<br>[local_server/main.py](../../../../sources/openai__chatgpt-retrieval-plugin/local_server/main.py)<br>[examples/memory/main.py](../../../../sources/openai__chatgpt-retrieval-plugin/examples/memory/main.py)<br>[examples/authentication-methods/no-auth/main.py](../../../../sources/openai__chatgpt-retrieval-plugin/examples/authentication-methods/no-auth/main.py) |
| agentRuntime | 4 | [examples/memory/ai-plugin.json](../../../../sources/openai__chatgpt-retrieval-plugin/examples/memory/ai-plugin.json)<br>[examples/memory/main.py](../../../../sources/openai__chatgpt-retrieval-plugin/examples/memory/main.py)<br>[examples/memory/openapi.yaml](../../../../sources/openai__chatgpt-retrieval-plugin/examples/memory/openapi.yaml)<br>[examples/memory/README.md](../../../../sources/openai__chatgpt-retrieval-plugin/examples/memory/README.md) |
| mcp | 0 | not obvious |
| retrieval | 5 | [examples/providers/supabase/migrations/20230414142107_init_pg_vector.sql](../../../../sources/openai__chatgpt-retrieval-plugin/examples/providers/supabase/migrations/20230414142107_init_pg_vector.sql)<br>[examples/memory/ai-plugin.json](../../../../sources/openai__chatgpt-retrieval-plugin/examples/memory/ai-plugin.json)<br>[examples/memory/main.py](../../../../sources/openai__chatgpt-retrieval-plugin/examples/memory/main.py)<br>[examples/memory/openapi.yaml](../../../../sources/openai__chatgpt-retrieval-plugin/examples/memory/openapi.yaml)<br>[examples/memory/README.md](../../../../sources/openai__chatgpt-retrieval-plugin/examples/memory/README.md) |
| spec | 0 | not obvious |
| eval | 17 | [tests/__init__.py](../../../../sources/openai__chatgpt-retrieval-plugin/tests/__init__.py)<br>[tests/datastore/providers/zilliz/test_zilliz_datastore.py](../../../../sources/openai__chatgpt-retrieval-plugin/tests/datastore/providers/zilliz/test_zilliz_datastore.py)<br>[tests/datastore/providers/weaviate/docker-compose.yml](../../../../sources/openai__chatgpt-retrieval-plugin/tests/datastore/providers/weaviate/docker-compose.yml)<br>[tests/datastore/providers/weaviate/test_weaviate_datastore.py](../../../../sources/openai__chatgpt-retrieval-plugin/tests/datastore/providers/weaviate/test_weaviate_datastore.py)<br>[tests/datastore/providers/supabase/test_supabase_datastore.py](../../../../sources/openai__chatgpt-retrieval-plugin/tests/datastore/providers/supabase/test_supabase_datastore.py)<br>[tests/datastore/providers/redis/test_redis_datastore.py](../../../../sources/openai__chatgpt-retrieval-plugin/tests/datastore/providers/redis/test_redis_datastore.py)<br>[tests/datastore/providers/qdrant/test_qdrant_datastore.py](../../../../sources/openai__chatgpt-retrieval-plugin/tests/datastore/providers/qdrant/test_qdrant_datastore.py)<br>[tests/datastore/providers/postgres/test_postgres_datastore.py](../../../../sources/openai__chatgpt-retrieval-plugin/tests/datastore/providers/postgres/test_postgres_datastore.py) |
| security | 3 | [examples/authentication-methods/oauth/ai-plugin.json](../../../../sources/openai__chatgpt-retrieval-plugin/examples/authentication-methods/oauth/ai-plugin.json)<br>[examples/authentication-methods/no-auth/ai-plugin.json](../../../../sources/openai__chatgpt-retrieval-plugin/examples/authentication-methods/no-auth/ai-plugin.json)<br>[examples/authentication-methods/no-auth/main.py](../../../../sources/openai__chatgpt-retrieval-plugin/examples/authentication-methods/no-auth/main.py) |
| ci | 0 | not obvious |
| container | 12 | [Dockerfile](../../../../sources/openai__chatgpt-retrieval-plugin/Dockerfile)<br>[tests/datastore/providers/weaviate/docker-compose.yml](../../../../sources/openai__chatgpt-retrieval-plugin/tests/datastore/providers/weaviate/docker-compose.yml)<br>[examples/docker/redis/docker-compose.yml](../../../../sources/openai__chatgpt-retrieval-plugin/examples/docker/redis/docker-compose.yml)<br>[examples/docker/qdrant/docker-compose.yaml](../../../../sources/openai__chatgpt-retrieval-plugin/examples/docker/qdrant/docker-compose.yaml)<br>[examples/docker/milvus/docker-compose.yaml](../../../../sources/openai__chatgpt-retrieval-plugin/examples/docker/milvus/docker-compose.yaml)<br>[examples/docker/elasticsearch/docker-compose.yaml](../../../../sources/openai__chatgpt-retrieval-plugin/examples/docker/elasticsearch/docker-compose.yaml)<br>[docs/deployment/flyio.md](../../../../sources/openai__chatgpt-retrieval-plugin/docs/deployment/flyio.md)<br>[docs/deployment/heroku.md](../../../../sources/openai__chatgpt-retrieval-plugin/docs/deployment/heroku.md) |
| instruction | 0 | not obvious |
| docs | 30 | [README.md](../../../../sources/openai__chatgpt-retrieval-plugin/README.md)<br>[scripts/process_zip/README.md](../../../../sources/openai__chatgpt-retrieval-plugin/scripts/process_zip/README.md)<br>[scripts/process_jsonl/README.md](../../../../sources/openai__chatgpt-retrieval-plugin/scripts/process_jsonl/README.md)<br>[scripts/process_json/README.md](../../../../sources/openai__chatgpt-retrieval-plugin/scripts/process_json/README.md)<br>[examples/memory/README.md](../../../../sources/openai__chatgpt-retrieval-plugin/examples/memory/README.md)<br>[examples/function-calling/README.md](../../../../sources/openai__chatgpt-retrieval-plugin/examples/function-calling/README.md)<br>[examples/docker/qdrant/README.md](../../../../sources/openai__chatgpt-retrieval-plugin/examples/docker/qdrant/README.md)<br>[examples/docker/elasticsearch/README.md](../../../../sources/openai__chatgpt-retrieval-plugin/examples/docker/elasticsearch/README.md) |
| config | 3 | [Makefile](../../../../sources/openai__chatgpt-retrieval-plugin/Makefile)<br>[poetry.lock](../../../../sources/openai__chatgpt-retrieval-plugin/poetry.lock)<br>[pyproject.toml](../../../../sources/openai__chatgpt-retrieval-plugin/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 17 | [tests/__init__.py](../../../../sources/openai__chatgpt-retrieval-plugin/tests/__init__.py)<br>[tests/datastore/providers/zilliz/test_zilliz_datastore.py](../../../../sources/openai__chatgpt-retrieval-plugin/tests/datastore/providers/zilliz/test_zilliz_datastore.py)<br>[tests/datastore/providers/weaviate/docker-compose.yml](../../../../sources/openai__chatgpt-retrieval-plugin/tests/datastore/providers/weaviate/docker-compose.yml)<br>[tests/datastore/providers/weaviate/test_weaviate_datastore.py](../../../../sources/openai__chatgpt-retrieval-plugin/tests/datastore/providers/weaviate/test_weaviate_datastore.py)<br>[tests/datastore/providers/supabase/test_supabase_datastore.py](../../../../sources/openai__chatgpt-retrieval-plugin/tests/datastore/providers/supabase/test_supabase_datastore.py)<br>[tests/datastore/providers/redis/test_redis_datastore.py](../../../../sources/openai__chatgpt-retrieval-plugin/tests/datastore/providers/redis/test_redis_datastore.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 12 | [Dockerfile](../../../../sources/openai__chatgpt-retrieval-plugin/Dockerfile)<br>[tests/datastore/providers/weaviate/docker-compose.yml](../../../../sources/openai__chatgpt-retrieval-plugin/tests/datastore/providers/weaviate/docker-compose.yml)<br>[examples/docker/redis/docker-compose.yml](../../../../sources/openai__chatgpt-retrieval-plugin/examples/docker/redis/docker-compose.yml)<br>[examples/docker/qdrant/docker-compose.yaml](../../../../sources/openai__chatgpt-retrieval-plugin/examples/docker/qdrant/docker-compose.yaml)<br>[examples/docker/milvus/docker-compose.yaml](../../../../sources/openai__chatgpt-retrieval-plugin/examples/docker/milvus/docker-compose.yaml)<br>[examples/docker/elasticsearch/docker-compose.yaml](../../../../sources/openai__chatgpt-retrieval-plugin/examples/docker/elasticsearch/docker-compose.yaml) |
| Security / policy | 3 | [examples/authentication-methods/oauth/ai-plugin.json](../../../../sources/openai__chatgpt-retrieval-plugin/examples/authentication-methods/oauth/ai-plugin.json)<br>[examples/authentication-methods/no-auth/ai-plugin.json](../../../../sources/openai__chatgpt-retrieval-plugin/examples/authentication-methods/no-auth/ai-plugin.json)<br>[examples/authentication-methods/no-auth/main.py](../../../../sources/openai__chatgpt-retrieval-plugin/examples/authentication-methods/no-auth/main.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `examples/providers/supabase/migrations/20230414142107_init_pg_vector.sql`, `examples/memory/ai-plugin.json`, `examples/memory/main.py`.
2. Trace execution through entrypoints: `server/main.py`, `local_server/main.py`, `examples/memory/main.py`.
3. Map agent/tool runtime through: `examples/memory/ai-plugin.json`, `examples/memory/main.py`, `examples/memory/openapi.yaml`.
4. Inspect retrieval/memory/indexing through: `examples/providers/supabase/migrations/20230414142107_init_pg_vector.sql`, `examples/memory/ai-plugin.json`, `examples/memory/main.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/datastore/providers/zilliz/test_zilliz_datastore.py`, `tests/datastore/providers/weaviate/docker-compose.yml`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 The ChatGPT Retrieval Plugin lets you easily find personal or work documents by asking questions in natural language.. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, Makefile, README.md, LICENSE이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
