# plastic-labs/honcho 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Memory library for building stateful agents

## 요약

- 조사 단위: `sources/plastic-labs__honcho` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 867 files, 168 directories, depth score 125, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/test_models_vector_dim.py, tests/vector_store/__init__.py, tests/vector_store/test_lancedb.py이고, 의존성 단서는 openai, anthropic, gemini, fastapi, pydantic, pgvector, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | plastic-labs/honcho |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Python |
| Stars | 5239 |
| Forks | 637 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/plastic-labs__honcho](../../../../sources/plastic-labs__honcho) |
| 기존 보고서 | [reports/global-trending/repositories/plastic-labs__honcho.md](../../../global-trending/repositories/plastic-labs__honcho.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 867 / 168 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .claude, .github, assets, database, docker, docs, examples, honcho-cli, mcp, migrations, scripts, sdks, src, tests |
| 상위 확장자 | .py: 397, .mdx: 245, .json: 46, .ts: 44, .md: 42, .png: 33, .svg: 11, (none): 11, .lock: 9, .toml: 9, .yml: 9, .example: 3 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 60 |
| docs | documentation surface | 43 |
| src | source boundary | 16 |
| examples/zo | examples workspace | 11 |
| examples/crewai | examples workspace | 6 |
| examples/langgraph | examples workspace | 5 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| database | top-level component | 1 |
| docker | documentation surface | 1 |
| examples | top-level component | 1 |
| honcho-cli | top-level component | 1 |
| mcp | top-level component | 1 |
| migrations | top-level component | 1 |
| scripts | top-level component | 1 |
| sdks | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic, gemini |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | pgvector |
| modelRuntime | 없음 |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | prometheus |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [tests/test_models_vector_dim.py](../../../../sources/plastic-labs__honcho/tests/test_models_vector_dim.py) | retrieval signal |
| retrieval | [tests/vector_store/__init__.py](../../../../sources/plastic-labs__honcho/tests/vector_store/__init__.py) | retrieval signal |
| retrieval | [tests/vector_store/test_lancedb.py](../../../../sources/plastic-labs__honcho/tests/vector_store/test_lancedb.py) | retrieval signal |
| retrieval | [tests/vector_store/test_namespace_dim_probes.py](../../../../sources/plastic-labs__honcho/tests/vector_store/test_namespace_dim_probes.py) | retrieval signal |
| entrypoints | [src/main.py](../../../../sources/plastic-labs__honcho/src/main.py) | entrypoints signal |
| entrypoints | [src/deriver/__main__.py](../../../../sources/plastic-labs__honcho/src/deriver/__main__.py) | entrypoints signal |
| entrypoints | [sdks/typescript/src/index.ts](../../../../sources/plastic-labs__honcho/sdks/typescript/src/index.ts) | entrypoints signal |
| entrypoints | [mcp/src/index.ts](../../../../sources/plastic-labs__honcho/mcp/src/index.ts) | entrypoints signal |
| docs | [README.md](../../../../sources/plastic-labs__honcho/README.md) | docs signal |
| docs | [tests/unified/README.md](../../../../sources/plastic-labs__honcho/tests/unified/README.md) | docs signal |
| docs | [tests/live_llm/README.md](../../../../sources/plastic-labs__honcho/tests/live_llm/README.md) | docs signal |
| docs | [tests/deriver/README.md](../../../../sources/plastic-labs__honcho/tests/deriver/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 8 | [src/main.py](../../../../sources/plastic-labs__honcho/src/main.py)<br>[src/deriver/__main__.py](../../../../sources/plastic-labs__honcho/src/deriver/__main__.py)<br>[sdks/typescript/src/index.ts](../../../../sources/plastic-labs__honcho/sdks/typescript/src/index.ts)<br>[mcp/src/index.ts](../../../../sources/plastic-labs__honcho/mcp/src/index.ts)<br>[mcp/src/server.ts](../../../../sources/plastic-labs__honcho/mcp/src/server.ts)<br>[honcho-cli/src/honcho_cli/main.py](../../../../sources/plastic-labs__honcho/honcho-cli/src/honcho_cli/main.py)<br>[examples/langgraph/typescript/main.ts](../../../../sources/plastic-labs__honcho/examples/langgraph/typescript/main.ts)<br>[examples/langgraph/python/main.py](../../../../sources/plastic-labs__honcho/examples/langgraph/python/main.py) |
| agentRuntime | 32 | [tests/unified/runner.py](../../../../sources/plastic-labs__honcho/tests/unified/runner.py)<br>[tests/bench/runner_common.py](../../../../sources/plastic-labs__honcho/tests/bench/runner_common.py)<br>[src/utils/agent_tools.py](../../../../sources/plastic-labs__honcho/src/utils/agent_tools.py)<br>[src/telemetry/events/agent.py](../../../../sources/plastic-labs__honcho/src/telemetry/events/agent.py)<br>[src/llm/executor.py](../../../../sources/plastic-labs__honcho/src/llm/executor.py)<br>[src/llm/tool_loop.py](../../../../sources/plastic-labs__honcho/src/llm/tool_loop.py)<br>[mcp/src/tools/conclusions.ts](../../../../sources/plastic-labs__honcho/mcp/src/tools/conclusions.ts)<br>[mcp/src/tools/peers.ts](../../../../sources/plastic-labs__honcho/mcp/src/tools/peers.ts) |
| mcp | 20 | [mcp/.dev.vars.example](../../../../sources/plastic-labs__honcho/mcp/.dev.vars.example)<br>[mcp/.gitignore](../../../../sources/plastic-labs__honcho/mcp/.gitignore)<br>[mcp/bun.lock](../../../../sources/plastic-labs__honcho/mcp/bun.lock)<br>[mcp/instructions.md](../../../../sources/plastic-labs__honcho/mcp/instructions.md)<br>[mcp/package.json](../../../../sources/plastic-labs__honcho/mcp/package.json)<br>[mcp/README.md](../../../../sources/plastic-labs__honcho/mcp/README.md)<br>[mcp/tsconfig.json](../../../../sources/plastic-labs__honcho/mcp/tsconfig.json)<br>[mcp/wrangler.toml](../../../../sources/plastic-labs__honcho/mcp/wrangler.toml) |
| retrieval | 31 | [tests/test_models_vector_dim.py](../../../../sources/plastic-labs__honcho/tests/test_models_vector_dim.py)<br>[tests/vector_store/__init__.py](../../../../sources/plastic-labs__honcho/tests/vector_store/__init__.py)<br>[tests/vector_store/test_lancedb.py](../../../../sources/plastic-labs__honcho/tests/vector_store/test_lancedb.py)<br>[tests/vector_store/test_namespace_dim_probes.py](../../../../sources/plastic-labs__honcho/tests/vector_store/test_namespace_dim_probes.py)<br>[tests/vector_store/test_turbopuffer.py](../../../../sources/plastic-labs__honcho/tests/vector_store/test_turbopuffer.py)<br>[tests/unified/test_cases/dream_knowledge_updates_and_patterns.json](../../../../sources/plastic-labs__honcho/tests/unified/test_cases/dream_knowledge_updates_and_patterns.json)<br>[tests/telemetry/test_embedding_call_event.py](../../../../sources/plastic-labs__honcho/tests/telemetry/test_embedding_call_event.py)<br>[tests/startup/test_embedding_validator.py](../../../../sources/plastic-labs__honcho/tests/startup/test_embedding_validator.py) |
| spec | 5 | [docs/v3/documentation/core-concepts/architecture.mdx](../../../../sources/plastic-labs__honcho/docs/v3/documentation/core-concepts/architecture.mdx)<br>[docs/v3/documentation/core-concepts/design-patterns.mdx](../../../../sources/plastic-labs__honcho/docs/v3/documentation/core-concepts/design-patterns.mdx)<br>[docs/v2/documentation/core-concepts/architecture.mdx](../../../../sources/plastic-labs__honcho/docs/v2/documentation/core-concepts/architecture.mdx)<br>[docs/v1/getting-started/architecture.mdx](../../../../sources/plastic-labs__honcho/docs/v1/getting-started/architecture.mdx)<br>[docs/images/architecture.png](../../../../sources/plastic-labs__honcho/docs/images/architecture.png) |
| eval | 231 | [tests/__init__.py](../../../../sources/plastic-labs__honcho/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/plastic-labs__honcho/tests/conftest.py)<br>[tests/test_advanced_filters.py](../../../../sources/plastic-labs__honcho/tests/test_advanced_filters.py)<br>[tests/test_config.py](../../../../sources/plastic-labs__honcho/tests/test_config.py)<br>[tests/test_datetime_parsing.py](../../../../sources/plastic-labs__honcho/tests/test_datetime_parsing.py)<br>[tests/test_db_resilience.py](../../../../sources/plastic-labs__honcho/tests/test_db_resilience.py)<br>[tests/test_dependencies.py](../../../../sources/plastic-labs__honcho/tests/test_dependencies.py)<br>[tests/test_generate_jwt_script.py](../../../../sources/plastic-labs__honcho/tests/test_generate_jwt_script.py) |
| security | 4 | [src/security.py](../../../../sources/plastic-labs__honcho/src/security.py)<br>[scripts/generate_jwt_secret.py](../../../../sources/plastic-labs__honcho/scripts/generate_jwt_secret.py)<br>[docs/images/integrations/n8n/Bearer_auth_cred.png](../../../../sources/plastic-labs__honcho/docs/images/integrations/n8n/Bearer_auth_cred.png)<br>[.github/ISSUE_TEMPLATE/6-security-report.md](../../../../sources/plastic-labs__honcho/.github/ISSUE_TEMPLATE/6-security-report.md) |
| ci | 7 | [.github/workflows/docker-build.yml](../../../../sources/plastic-labs__honcho/.github/workflows/docker-build.yml)<br>[.github/workflows/fly-deploy-prod.yml](../../../../sources/plastic-labs__honcho/.github/workflows/fly-deploy-prod.yml)<br>[.github/workflows/fly-deploy.yml](../../../../sources/plastic-labs__honcho/.github/workflows/fly-deploy.yml)<br>[.github/workflows/start-fly-runner.yml](../../../../sources/plastic-labs__honcho/.github/workflows/start-fly-runner.yml)<br>[.github/workflows/staticanalysis.yml](../../../../sources/plastic-labs__honcho/.github/workflows/staticanalysis.yml)<br>[.github/workflows/unified-tests.yml](../../../../sources/plastic-labs__honcho/.github/workflows/unified-tests.yml)<br>[.github/workflows/unittest.yml](../../../../sources/plastic-labs__honcho/.github/workflows/unittest.yml) |
| container | 2 | [docker-compose.yml.example](../../../../sources/plastic-labs__honcho/docker-compose.yml.example)<br>[Dockerfile](../../../../sources/plastic-labs__honcho/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/plastic-labs__honcho/CLAUDE.md) |
| docs | 313 | [README.md](../../../../sources/plastic-labs__honcho/README.md)<br>[tests/unified/README.md](../../../../sources/plastic-labs__honcho/tests/unified/README.md)<br>[tests/live_llm/README.md](../../../../sources/plastic-labs__honcho/tests/live_llm/README.md)<br>[tests/deriver/README.md](../../../../sources/plastic-labs__honcho/tests/deriver/README.md)<br>[tests/bench/README.md](../../../../sources/plastic-labs__honcho/tests/bench/README.md)<br>[tests/alembic/README.md](../../../../sources/plastic-labs__honcho/tests/alembic/README.md)<br>[src/webhooks/README.md](../../../../sources/plastic-labs__honcho/src/webhooks/README.md)<br>[sdks/typescript/README.md](../../../../sources/plastic-labs__honcho/sdks/typescript/README.md) |
| config | 17 | [pyproject.toml](../../../../sources/plastic-labs__honcho/pyproject.toml)<br>[uv.lock](../../../../sources/plastic-labs__honcho/uv.lock)<br>[sdks/typescript/package.json](../../../../sources/plastic-labs__honcho/sdks/typescript/package.json)<br>[sdks/typescript/tsconfig.json](../../../../sources/plastic-labs__honcho/sdks/typescript/tsconfig.json)<br>[sdks/python/pyproject.toml](../../../../sources/plastic-labs__honcho/sdks/python/pyproject.toml)<br>[mcp/package.json](../../../../sources/plastic-labs__honcho/mcp/package.json)<br>[mcp/tsconfig.json](../../../../sources/plastic-labs__honcho/mcp/tsconfig.json)<br>[honcho-cli/pyproject.toml](../../../../sources/plastic-labs__honcho/honcho-cli/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 231 | [tests/__init__.py](../../../../sources/plastic-labs__honcho/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/plastic-labs__honcho/tests/conftest.py)<br>[tests/test_advanced_filters.py](../../../../sources/plastic-labs__honcho/tests/test_advanced_filters.py)<br>[tests/test_config.py](../../../../sources/plastic-labs__honcho/tests/test_config.py)<br>[tests/test_datetime_parsing.py](../../../../sources/plastic-labs__honcho/tests/test_datetime_parsing.py)<br>[tests/test_db_resilience.py](../../../../sources/plastic-labs__honcho/tests/test_db_resilience.py) |
| CI workflow | 7 | [.github/workflows/docker-build.yml](../../../../sources/plastic-labs__honcho/.github/workflows/docker-build.yml)<br>[.github/workflows/fly-deploy-prod.yml](../../../../sources/plastic-labs__honcho/.github/workflows/fly-deploy-prod.yml)<br>[.github/workflows/fly-deploy.yml](../../../../sources/plastic-labs__honcho/.github/workflows/fly-deploy.yml)<br>[.github/workflows/start-fly-runner.yml](../../../../sources/plastic-labs__honcho/.github/workflows/start-fly-runner.yml)<br>[.github/workflows/staticanalysis.yml](../../../../sources/plastic-labs__honcho/.github/workflows/staticanalysis.yml)<br>[.github/workflows/unified-tests.yml](../../../../sources/plastic-labs__honcho/.github/workflows/unified-tests.yml) |
| 컨테이너/배포 | 2 | [docker-compose.yml.example](../../../../sources/plastic-labs__honcho/docker-compose.yml.example)<br>[Dockerfile](../../../../sources/plastic-labs__honcho/Dockerfile) |
| 보안/정책 | 4 | [src/security.py](../../../../sources/plastic-labs__honcho/src/security.py)<br>[scripts/generate_jwt_secret.py](../../../../sources/plastic-labs__honcho/scripts/generate_jwt_secret.py)<br>[docs/images/integrations/n8n/Bearer_auth_cred.png](../../../../sources/plastic-labs__honcho/docs/images/integrations/n8n/Bearer_auth_cred.png)<br>[.github/ISSUE_TEMPLATE/6-security-report.md](../../../../sources/plastic-labs__honcho/.github/ISSUE_TEMPLATE/6-security-report.md) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/plastic-labs__honcho/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/test_models_vector_dim.py`, `tests/vector_store/__init__.py`, `tests/vector_store/test_lancedb.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/main.py`, `src/deriver/__main__.py`, `sdks/typescript/src/index.ts`.
3. agent/tool runtime 매핑: `tests/unified/runner.py`, `tests/bench/runner_common.py`, `src/utils/agent_tools.py`.
4. retrieval/memory/indexing 확인: `tests/test_models_vector_dim.py`, `tests/vector_store/__init__.py`, `tests/vector_store/test_lancedb.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/test_advanced_filters.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Memory library for building stateful agents. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, README.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
