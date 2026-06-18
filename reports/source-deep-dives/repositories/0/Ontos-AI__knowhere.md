# Ontos-AI/knowhere Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Knowhere extracts, parses, and outputs structured chunks ready for AI Agents and RAG.

## 요약

- 조사 단위: `sources/Ontos-AI__knowhere` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,046 files, 198 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

데이터/벡터 플랫폼 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 retrieval=packages/shared-python/shared/utils/chunk_refs.py, packages/shared-python/shared/services/storage/zip_chunk_schema.py, packages/shared-python/shared/services/retrieval/__init__.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Ontos-AI/knowhere |
| Topic | Data and Vector Platforms / 데이터/벡터 플랫폼 |
| Region | global |
| Language | Python |
| Stars | 1502 |
| Forks | 160 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Ontos-AI__knowhere](../../../../sources/Ontos-AI__knowhere) |
| Existing report | [reports/global-trending/repositories/Ontos-AI__knowhere.md](../../../global-trending/repositories/Ontos-AI__knowhere.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2046 / 198 |
| Max observed depth | 8 |
| Top directories | .github, apps, deploy, docs, packages |
| Top extensions | .html: 676, .jpg: 601, .py: 576, .json: 90, .md: 46, .yml: 9, (none): 8, .txt: 6, .png: 5, .ini: 4, .toml: 4, .jpeg: 3 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/shared-python | packages workspace | 67 |
| apps/worker | apps workspace | 60 |
| apps/api | apps workspace | 20 |
| docs | documentation surface | 14 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| deploy | deployment surface | 1 |
| packages | source boundary | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | lint | make lint |
| quality | Makefile | lint-fix | make lint-fix |
| quality | Makefile | typecheck | make typecheck |
| quality | Makefile | check | make check |
| test | Makefile | test-doc-agent | make test-doc-agent |


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
| retrieval | [packages/shared-python/shared/utils/chunk_refs.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/utils/chunk_refs.py) | retrieval signal |
| retrieval | [packages/shared-python/shared/services/storage/zip_chunk_schema.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/storage/zip_chunk_schema.py) | retrieval signal |
| retrieval | [packages/shared-python/shared/services/retrieval/__init__.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/retrieval/__init__.py) | retrieval signal |
| retrieval | [packages/shared-python/shared/services/retrieval/app_service.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/retrieval/app_service.py) | retrieval signal |
| entrypoints | [apps/api/main.py](../../../../sources/Ontos-AI__knowhere/apps/api/main.py) | entrypoints signal |
| container | [deploy/README.md](../../../../sources/Ontos-AI__knowhere/deploy/README.md) | container signal |
| container | [deploy/local-dev/docker-compose.dev.yml](../../../../sources/Ontos-AI__knowhere/deploy/local-dev/docker-compose.dev.yml) | container signal |
| container | [deploy/local-dev/README.md](../../../../sources/Ontos-AI__knowhere/deploy/local-dev/README.md) | container signal |
| container | [deploy/local-dev/start-dev.sh](../../../../sources/Ontos-AI__knowhere/deploy/local-dev/start-dev.sh) | container signal |
| config | [Makefile](../../../../sources/Ontos-AI__knowhere/Makefile) | config signal |
| config | [pyproject.toml](../../../../sources/Ontos-AI__knowhere/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/Ontos-AI__knowhere/uv.lock) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [apps/api/main.py](../../../../sources/Ontos-AI__knowhere/apps/api/main.py) |
| agentRuntime | 36 | [AGENTS.md](../../../../sources/Ontos-AI__knowhere/AGENTS.md)<br>[CONTEXT.md](../../../../sources/Ontos-AI__knowhere/CONTEXT.md)<br>[packages/shared-python/shared/services/retrieval/workflow/__init__.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/retrieval/workflow/__init__.py)<br>[packages/shared-python/shared/services/retrieval/workflow/orchestrator.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/retrieval/workflow/orchestrator.py)<br>[packages/shared-python/shared/services/retrieval/workflow/plan_service.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/retrieval/workflow/plan_service.py)<br>[packages/shared-python/shared/services/retrieval/workflow/planner.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/retrieval/workflow/planner.py)<br>[packages/shared-python/shared/services/retrieval/workflow/reference_projection.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/retrieval/workflow/reference_projection.py)<br>[packages/shared-python/shared/services/retrieval/workflow/run_request.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/retrieval/workflow/run_request.py) |
| mcp | 2 | [apps/api/app/mcp/__init__.py](../../../../sources/Ontos-AI__knowhere/apps/api/app/mcp/__init__.py)<br>[apps/api/app/mcp/retrieval_server.py](../../../../sources/Ontos-AI__knowhere/apps/api/app/mcp/retrieval_server.py) |
| retrieval | 108 | [packages/shared-python/shared/utils/chunk_refs.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/utils/chunk_refs.py)<br>[packages/shared-python/shared/services/storage/zip_chunk_schema.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/storage/zip_chunk_schema.py)<br>[packages/shared-python/shared/services/retrieval/__init__.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/retrieval/__init__.py)<br>[packages/shared-python/shared/services/retrieval/app_service.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/retrieval/app_service.py)<br>[packages/shared-python/shared/services/retrieval/cache_service.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/retrieval/cache_service.py)<br>[packages/shared-python/shared/services/retrieval/llm_adapter.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/retrieval/llm_adapter.py)<br>[packages/shared-python/shared/services/retrieval/publication_content.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/retrieval/publication_content.py)<br>[packages/shared-python/shared/services/retrieval/publication_models.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/retrieval/publication_models.py) |
| spec | 5 | [docs/adr/0001-keep-routes-and-worker-tasks-as-adapters.md](../../../../sources/Ontos-AI__knowhere/docs/adr/0001-keep-routes-and-worker-tasks-as-adapters.md)<br>[docs/adr/0002-use-typed-workflow-outcomes.md](../../../../sources/Ontos-AI__knowhere/docs/adr/0002-use-typed-workflow-outcomes.md)<br>[docs/adr/0003-keep-retrieval-workflow-policy-explicit.md](../../../../sources/Ontos-AI__knowhere/docs/adr/0003-keep-retrieval-workflow-policy-explicit.md)<br>[docs/adr/README.md](../../../../sources/Ontos-AI__knowhere/docs/adr/README.md)<br>[apps/worker/requirements.txt](../../../../sources/Ontos-AI__knowhere/apps/worker/requirements.txt) |
| eval | 70 | [packages/shared-python/shared/services/retrieval/agentic/core/trace.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/retrieval/agentic/core/trace.py)<br>[packages/shared-python/shared/services/redis/redis_monitor.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/redis/redis_monitor.py)<br>[docs/assets/benchmark.png](../../../../sources/Ontos-AI__knowhere/docs/assets/benchmark.png)<br>[apps/worker/tests/conftest.py](../../../../sources/Ontos-AI__knowhere/apps/worker/tests/conftest.py)<br>[apps/worker/tests/support/__init__.py](../../../../sources/Ontos-AI__knowhere/apps/worker/tests/support/__init__.py)<br>[apps/worker/tests/support/contract_database.py](../../../../sources/Ontos-AI__knowhere/apps/worker/tests/support/contract_database.py)<br>[apps/worker/tests/support/worker_parse_contract.py](../../../../sources/Ontos-AI__knowhere/apps/worker/tests/support/worker_parse_contract.py)<br>[apps/worker/tests/support/worker_url_upload_contract.py](../../../../sources/Ontos-AI__knowhere/apps/worker/tests/support/worker_url_upload_contract.py) |
| security | 23 | [SECURITY.md](../../../../sources/Ontos-AI__knowhere/SECURITY.md)<br>[packages/shared-python/shared/utils/security_utils.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/utils/security_utils.py)<br>[packages/shared-python/shared/services/webhook/qstash_secret_resolver.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/webhook/qstash_secret_resolver.py)<br>[packages/shared-python/shared/services/webhook/secret_resolver.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/webhook/secret_resolver.py)<br>[packages/shared-python/shared/services/redis/retry_policy.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/redis/retry_policy.py)<br>[packages/shared-python/shared/services/http/url_security.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/http/url_security.py)<br>[packages/shared-python/shared/services/auth/__init__.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/auth/__init__.py)<br>[packages/shared-python/shared/services/auth/user_table_bootstrap.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/auth/user_table_bootstrap.py) |
| ci | 4 | [.github/workflows/build-images.yml](../../../../sources/Ontos-AI__knowhere/.github/workflows/build-images.yml)<br>[.github/workflows/codeql.yml](../../../../sources/Ontos-AI__knowhere/.github/workflows/codeql.yml)<br>[.github/workflows/pr-ci.yml](../../../../sources/Ontos-AI__knowhere/.github/workflows/pr-ci.yml)<br>[.github/workflows/secret-scan.yml](../../../../sources/Ontos-AI__knowhere/.github/workflows/secret-scan.yml) |
| container | 10 | [deploy/README.md](../../../../sources/Ontos-AI__knowhere/deploy/README.md)<br>[deploy/local-dev/docker-compose.dev.yml](../../../../sources/Ontos-AI__knowhere/deploy/local-dev/docker-compose.dev.yml)<br>[deploy/local-dev/README.md](../../../../sources/Ontos-AI__knowhere/deploy/local-dev/README.md)<br>[deploy/local-dev/start-dev.sh](../../../../sources/Ontos-AI__knowhere/deploy/local-dev/start-dev.sh)<br>[deploy/local-dev/stop-dev.sh](../../../../sources/Ontos-AI__knowhere/deploy/local-dev/stop-dev.sh)<br>[deploy/local-dev/postgres/init/01-init.sql](../../../../sources/Ontos-AI__knowhere/deploy/local-dev/postgres/init/01-init.sql)<br>[deploy/local-dev/localstack/init/setup-aws-resources.sh](../../../../sources/Ontos-AI__knowhere/deploy/local-dev/localstack/init/setup-aws-resources.sh)<br>[deploy/docker/.dockerignore](../../../../sources/Ontos-AI__knowhere/deploy/docker/.dockerignore) |
| instruction | 1 | [AGENTS.md](../../../../sources/Ontos-AI__knowhere/AGENTS.md) |
| docs | 16 | [README.md](../../../../sources/Ontos-AI__knowhere/README.md)<br>[docs/assets/benchmark.png](../../../../sources/Ontos-AI__knowhere/docs/assets/benchmark.png)<br>[docs/assets/step-1-parse-build-memory.png](../../../../sources/Ontos-AI__knowhere/docs/assets/step-1-parse-build-memory.png)<br>[docs/assets/step-2-agentic-retrieval.png](../../../../sources/Ontos-AI__knowhere/docs/assets/step-2-agentic-retrieval.png)<br>[docs/adr/0001-keep-routes-and-worker-tasks-as-adapters.md](../../../../sources/Ontos-AI__knowhere/docs/adr/0001-keep-routes-and-worker-tasks-as-adapters.md)<br>[docs/adr/0002-use-typed-workflow-outcomes.md](../../../../sources/Ontos-AI__knowhere/docs/adr/0002-use-typed-workflow-outcomes.md)<br>[docs/adr/0003-keep-retrieval-workflow-policy-explicit.md](../../../../sources/Ontos-AI__knowhere/docs/adr/0003-keep-retrieval-workflow-policy-explicit.md)<br>[docs/adr/README.md](../../../../sources/Ontos-AI__knowhere/docs/adr/README.md) |
| config | 7 | [Makefile](../../../../sources/Ontos-AI__knowhere/Makefile)<br>[pyproject.toml](../../../../sources/Ontos-AI__knowhere/pyproject.toml)<br>[uv.lock](../../../../sources/Ontos-AI__knowhere/uv.lock)<br>[packages/shared-python/pyproject.toml](../../../../sources/Ontos-AI__knowhere/packages/shared-python/pyproject.toml)<br>[apps/worker/pyproject.toml](../../../../sources/Ontos-AI__knowhere/apps/worker/pyproject.toml)<br>[apps/worker/requirements.txt](../../../../sources/Ontos-AI__knowhere/apps/worker/requirements.txt)<br>[apps/api/pyproject.toml](../../../../sources/Ontos-AI__knowhere/apps/api/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 70 | [packages/shared-python/shared/services/retrieval/agentic/core/trace.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/retrieval/agentic/core/trace.py)<br>[packages/shared-python/shared/services/redis/redis_monitor.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/redis/redis_monitor.py)<br>[docs/assets/benchmark.png](../../../../sources/Ontos-AI__knowhere/docs/assets/benchmark.png)<br>[apps/worker/tests/conftest.py](../../../../sources/Ontos-AI__knowhere/apps/worker/tests/conftest.py)<br>[apps/worker/tests/support/__init__.py](../../../../sources/Ontos-AI__knowhere/apps/worker/tests/support/__init__.py)<br>[apps/worker/tests/support/contract_database.py](../../../../sources/Ontos-AI__knowhere/apps/worker/tests/support/contract_database.py) |
| CI workflows | 4 | [.github/workflows/build-images.yml](../../../../sources/Ontos-AI__knowhere/.github/workflows/build-images.yml)<br>[.github/workflows/codeql.yml](../../../../sources/Ontos-AI__knowhere/.github/workflows/codeql.yml)<br>[.github/workflows/pr-ci.yml](../../../../sources/Ontos-AI__knowhere/.github/workflows/pr-ci.yml)<br>[.github/workflows/secret-scan.yml](../../../../sources/Ontos-AI__knowhere/.github/workflows/secret-scan.yml) |
| Containers / deploy | 10 | [deploy/README.md](../../../../sources/Ontos-AI__knowhere/deploy/README.md)<br>[deploy/local-dev/docker-compose.dev.yml](../../../../sources/Ontos-AI__knowhere/deploy/local-dev/docker-compose.dev.yml)<br>[deploy/local-dev/README.md](../../../../sources/Ontos-AI__knowhere/deploy/local-dev/README.md)<br>[deploy/local-dev/start-dev.sh](../../../../sources/Ontos-AI__knowhere/deploy/local-dev/start-dev.sh)<br>[deploy/local-dev/stop-dev.sh](../../../../sources/Ontos-AI__knowhere/deploy/local-dev/stop-dev.sh)<br>[deploy/local-dev/postgres/init/01-init.sql](../../../../sources/Ontos-AI__knowhere/deploy/local-dev/postgres/init/01-init.sql) |
| Security / policy | 23 | [SECURITY.md](../../../../sources/Ontos-AI__knowhere/SECURITY.md)<br>[packages/shared-python/shared/utils/security_utils.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/utils/security_utils.py)<br>[packages/shared-python/shared/services/webhook/qstash_secret_resolver.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/webhook/qstash_secret_resolver.py)<br>[packages/shared-python/shared/services/webhook/secret_resolver.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/webhook/secret_resolver.py)<br>[packages/shared-python/shared/services/redis/retry_policy.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/redis/retry_policy.py)<br>[packages/shared-python/shared/services/http/url_security.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/http/url_security.py) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/Ontos-AI__knowhere/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `packages/shared-python/shared/utils/chunk_refs.py`, `packages/shared-python/shared/services/storage/zip_chunk_schema.py`, `packages/shared-python/shared/services/retrieval/__init__.py`.
2. Trace execution through entrypoints: `apps/api/main.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `CONTEXT.md`, `packages/shared-python/shared/services/retrieval/workflow/__init__.py`.
4. Inspect retrieval/memory/indexing through: `packages/shared-python/shared/utils/chunk_refs.py`, `packages/shared-python/shared/services/storage/zip_chunk_schema.py`, `packages/shared-python/shared/services/retrieval/__init__.py`.
5. Verify behavior through test/eval files: `packages/shared-python/shared/services/retrieval/agentic/core/trace.py`, `packages/shared-python/shared/services/redis/redis_monitor.py`, `docs/assets/benchmark.png`.

## Existing Repository Insight

데이터/벡터 플랫폼 관점에서 Knowhere extracts, parses, and outputs structured chunks ready for AI Agents and RAG.. 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, AGENTS.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 데이터/벡터 플랫폼 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
