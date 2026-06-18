# Ontos-AI/knowhere 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Knowhere extracts, parses, and outputs structured chunks ready for AI Agents and RAG.

## 요약

- 조사 단위: `sources/Ontos-AI__knowhere` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,046 files, 198 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

데이터/벡터 플랫폼 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 retrieval=packages/shared-python/shared/utils/chunk_refs.py, packages/shared-python/shared/services/storage/zip_chunk_schema.py, packages/shared-python/shared/services/retrieval/__init__.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Ontos-AI/knowhere |
| 주제 | 데이터/벡터 플랫폼 / 데이터/벡터 플랫폼 |
| Region | global |
| Language | Python |
| Stars | 1502 |
| Forks | 160 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Ontos-AI__knowhere](../../../../sources/Ontos-AI__knowhere) |
| 기존 보고서 | [reports/global-trending/repositories/Ontos-AI__knowhere.md](../../../global-trending/repositories/Ontos-AI__knowhere.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2046 / 198 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .github, apps, deploy, docs, packages |
| 상위 확장자 | .html: 676, .jpg: 601, .py: 576, .json: 90, .md: 46, .yml: 9, (none): 8, .txt: 6, .png: 5, .ini: 4, .toml: 4, .jpeg: 3 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/shared-python | packages workspace | 67 |
| apps/worker | apps workspace | 60 |
| apps/api | apps workspace | 20 |
| docs | documentation surface | 14 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| deploy | deployment surface | 1 |
| packages | source boundary | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | lint | make lint |
| quality | Makefile | lint-fix | make lint-fix |
| quality | Makefile | typecheck | make typecheck |
| quality | Makefile | check | make check |
| test | Makefile | test-doc-agent | make test-doc-agent |


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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 70 | [packages/shared-python/shared/services/retrieval/agentic/core/trace.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/retrieval/agentic/core/trace.py)<br>[packages/shared-python/shared/services/redis/redis_monitor.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/redis/redis_monitor.py)<br>[docs/assets/benchmark.png](../../../../sources/Ontos-AI__knowhere/docs/assets/benchmark.png)<br>[apps/worker/tests/conftest.py](../../../../sources/Ontos-AI__knowhere/apps/worker/tests/conftest.py)<br>[apps/worker/tests/support/__init__.py](../../../../sources/Ontos-AI__knowhere/apps/worker/tests/support/__init__.py)<br>[apps/worker/tests/support/contract_database.py](../../../../sources/Ontos-AI__knowhere/apps/worker/tests/support/contract_database.py) |
| CI workflow | 4 | [.github/workflows/build-images.yml](../../../../sources/Ontos-AI__knowhere/.github/workflows/build-images.yml)<br>[.github/workflows/codeql.yml](../../../../sources/Ontos-AI__knowhere/.github/workflows/codeql.yml)<br>[.github/workflows/pr-ci.yml](../../../../sources/Ontos-AI__knowhere/.github/workflows/pr-ci.yml)<br>[.github/workflows/secret-scan.yml](../../../../sources/Ontos-AI__knowhere/.github/workflows/secret-scan.yml) |
| 컨테이너/배포 | 10 | [deploy/README.md](../../../../sources/Ontos-AI__knowhere/deploy/README.md)<br>[deploy/local-dev/docker-compose.dev.yml](../../../../sources/Ontos-AI__knowhere/deploy/local-dev/docker-compose.dev.yml)<br>[deploy/local-dev/README.md](../../../../sources/Ontos-AI__knowhere/deploy/local-dev/README.md)<br>[deploy/local-dev/start-dev.sh](../../../../sources/Ontos-AI__knowhere/deploy/local-dev/start-dev.sh)<br>[deploy/local-dev/stop-dev.sh](../../../../sources/Ontos-AI__knowhere/deploy/local-dev/stop-dev.sh)<br>[deploy/local-dev/postgres/init/01-init.sql](../../../../sources/Ontos-AI__knowhere/deploy/local-dev/postgres/init/01-init.sql) |
| 보안/정책 | 23 | [SECURITY.md](../../../../sources/Ontos-AI__knowhere/SECURITY.md)<br>[packages/shared-python/shared/utils/security_utils.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/utils/security_utils.py)<br>[packages/shared-python/shared/services/webhook/qstash_secret_resolver.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/webhook/qstash_secret_resolver.py)<br>[packages/shared-python/shared/services/webhook/secret_resolver.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/webhook/secret_resolver.py)<br>[packages/shared-python/shared/services/redis/retry_policy.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/redis/retry_policy.py)<br>[packages/shared-python/shared/services/http/url_security.py](../../../../sources/Ontos-AI__knowhere/packages/shared-python/shared/services/http/url_security.py) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/Ontos-AI__knowhere/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/shared-python/shared/utils/chunk_refs.py`, `packages/shared-python/shared/services/storage/zip_chunk_schema.py`, `packages/shared-python/shared/services/retrieval/__init__.py`.
2. entrypoint를 따라 실행 흐름 확인: `apps/api/main.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `CONTEXT.md`, `packages/shared-python/shared/services/retrieval/workflow/__init__.py`.
4. retrieval/memory/indexing 확인: `packages/shared-python/shared/utils/chunk_refs.py`, `packages/shared-python/shared/services/storage/zip_chunk_schema.py`, `packages/shared-python/shared/services/retrieval/__init__.py`.
5. test/eval 파일로 동작 검증: `packages/shared-python/shared/services/retrieval/agentic/core/trace.py`, `packages/shared-python/shared/services/redis/redis_monitor.py`, `docs/assets/benchmark.png`.

## 기존 레포 인사이트

데이터/벡터 플랫폼 관점에서 Knowhere extracts, parses, and outputs structured chunks ready for AI Agents and RAG.. 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, AGENTS.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 데이터/벡터 플랫폼 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
