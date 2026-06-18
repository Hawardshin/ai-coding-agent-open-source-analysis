# potpie-ai/potpie 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Local clone structure analysis: 1494 files, 274 directories.

## 요약

- 조사 단위: `sources/potpie-ai__potpie` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,494 files, 274 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=potpie/context-engine/tests/unit/test_mcp_project_access.py, potpie/context-engine/adapters/inbound/mcp/__init__.py, potpie/context-engine/adapters/inbound/mcp/project_access.py이고, 의존성 단서는 openai, fastapi, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | potpie-ai/potpie |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | Python |
| Stars | 5456 |
| Forks | 637 |
| License | Apache License 2.0 |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/potpie-ai__potpie](../../../../sources/potpie-ai__potpie) |
| 기존 보고서 | [reports/clone-structures/potpie-ai__potpie.md](../../../clone-structures/potpie-ai__potpie.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1494 / 274 |
| 관측 최대 깊이 | 12 |
| 상위 디렉터리 | .github, assets, docs, legacy, potpie |
| 상위 확장자 | .py: 1246, .yaml: 60, .md: 49, .scm: 32, (none): 20, .sh: 15, .rs: 13, .toml: 8, .yml: 8, .conf: 7, .json: 7, .dockerfile: 6 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 14 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| legacy | top-level component | 1 |
| potpie | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [potpie/context-engine/tests/unit/test_mcp_project_access.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/tests/unit/test_mcp_project_access.py) | mcp signal |
| mcp | [potpie/context-engine/adapters/inbound/mcp/__init__.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/adapters/inbound/mcp/__init__.py) | mcp signal |
| mcp | [potpie/context-engine/adapters/inbound/mcp/project_access.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/adapters/inbound/mcp/project_access.py) | mcp signal |
| mcp | [potpie/context-engine/adapters/inbound/mcp/server.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/adapters/inbound/mcp/server.py) | mcp signal |
| agentRuntime | [potpie/sandbox/docker-compose.yml](../../../../sources/potpie-ai__potpie/potpie/sandbox/docker-compose.yml) | agentRuntime signal |
| agentRuntime | [potpie/sandbox/pyproject.toml](../../../../sources/potpie-ai__potpie/potpie/sandbox/pyproject.toml) | agentRuntime signal |
| agentRuntime | [potpie/sandbox/uv.lock](../../../../sources/potpie-ai__potpie/potpie/sandbox/uv.lock) | agentRuntime signal |
| agentRuntime | [potpie/sandbox/tests/unit/test_daytona_provider.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_daytona_provider.py) | agentRuntime signal |
| entrypoints | [potpie/sandbox/sandbox/parser_runner/__main__.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/sandbox/parser_runner/__main__.py) | entrypoints signal |
| entrypoints | [potpie/context-engine/host/daemon_runtime/__main__.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/host/daemon_runtime/__main__.py) | entrypoints signal |
| entrypoints | [potpie/context-engine/benchmarks/__main__.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/benchmarks/__main__.py) | entrypoints signal |
| instruction | [potpie/context-engine/adapters/inbound/cli/templates/claude_bundle/CLAUDE.md](../../../../sources/potpie-ai__potpie/potpie/context-engine/adapters/inbound/cli/templates/claude_bundle/CLAUDE.md) | instruction signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 7 | [potpie/sandbox/sandbox/parser_runner/__main__.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/sandbox/parser_runner/__main__.py)<br>[potpie/context-engine/host/daemon_runtime/__main__.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/host/daemon_runtime/__main__.py)<br>[potpie/context-engine/benchmarks/__main__.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/benchmarks/__main__.py)<br>[potpie/context-engine/adapters/inbound/mcp/server.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/adapters/inbound/mcp/server.py)<br>[potpie/context-engine/adapters/inbound/http/__main__.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/adapters/inbound/http/__main__.py)<br>[legacy/seed/__main__.py](../../../../sources/potpie-ai__potpie/legacy/seed/__main__.py)<br>[legacy/app/main.py](../../../../sources/potpie-ai__potpie/legacy/app/main.py) |
| agentRuntime | 967 | [potpie/sandbox/docker-compose.yml](../../../../sources/potpie-ai__potpie/potpie/sandbox/docker-compose.yml)<br>[potpie/sandbox/pyproject.toml](../../../../sources/potpie-ai__potpie/potpie/sandbox/pyproject.toml)<br>[potpie/sandbox/uv.lock](../../../../sources/potpie-ai__potpie/potpie/sandbox/uv.lock)<br>[potpie/sandbox/tests/unit/test_daytona_provider.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_daytona_provider.py)<br>[potpie/sandbox/tests/unit/test_eviction_policy.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_eviction_policy.py)<br>[potpie/sandbox/tests/unit/test_git_platform.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_git_platform.py)<br>[potpie/sandbox/tests/unit/test_local_auth.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_local_auth.py)<br>[potpie/sandbox/tests/unit/test_local_repo_cache.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_local_repo_cache.py) |
| mcp | 5 | [potpie/context-engine/tests/unit/test_mcp_project_access.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/tests/unit/test_mcp_project_access.py)<br>[potpie/context-engine/adapters/inbound/mcp/__init__.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/adapters/inbound/mcp/__init__.py)<br>[potpie/context-engine/adapters/inbound/mcp/project_access.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/adapters/inbound/mcp/project_access.py)<br>[potpie/context-engine/adapters/inbound/mcp/server.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/adapters/inbound/mcp/server.py)<br>[potpie/context-engine/adapters/inbound/mcp/tools/__init__.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/adapters/inbound/mcp/tools/__init__.py) |
| retrieval | 128 | [potpie/sandbox/sandbox/adapters/outbound/memory/__init__.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/sandbox/adapters/outbound/memory/__init__.py)<br>[potpie/sandbox/sandbox/adapters/outbound/memory/eviction.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/sandbox/adapters/outbound/memory/eviction.py)<br>[potpie/sandbox/sandbox/adapters/outbound/memory/locks.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/sandbox/adapters/outbound/memory/locks.py)<br>[potpie/sandbox/sandbox/adapters/outbound/memory/store.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/sandbox/adapters/outbound/memory/store.py)<br>[potpie/parsing/tests/test_py_graph.py](../../../../sources/potpie-ai__potpie/potpie/parsing/tests/test_py_graph.py)<br>[potpie/parsing/src/code_index.rs](../../../../sources/potpie-ai__potpie/potpie/parsing/src/code_index.rs)<br>[potpie/parsing/src/fff_search/content_index.rs](../../../../sources/potpie-ai__potpie/potpie/parsing/src/fff_search/content_index.rs)<br>[potpie/parsing/src/fff_search/file_index.rs](../../../../sources/potpie-ai__potpie/potpie/parsing/src/fff_search/file_index.rs) |
| spec | 11 | [potpie/context-engine/tests/unit/test_openapi_spec_scanner.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/tests/unit/test_openapi_spec_scanner.py)<br>[potpie/context-engine/adapters/outbound/scanners/openapi_spec.py](../../../../sources/potpie-ai__potpie/potpie/context-engine/adapters/outbound/scanners/openapi_spec.py)<br>[legacy/app/modules/intelligence/tools/requirement_verification_tool.py](../../../../sources/potpie-ai__potpie/legacy/app/modules/intelligence/tools/requirement_verification_tool.py)<br>[legacy/app/modules/intelligence/agents/chat_agents/system_agents/low_level_design_agent.py](../../../../sources/potpie-ai__potpie/legacy/app/modules/intelligence/agents/chat_agents/system_agents/low_level_design_agent.py)<br>[legacy/app/modules/intelligence/agents/chat_agents/system_agents/specgen/architecture_agent.py](../../../../sources/potpie-ai__potpie/legacy/app/modules/intelligence/agents/chat_agents/system_agents/specgen/architecture_agent.py)<br>[legacy/app/modules/intelligence/agents/chat_agents/system_agents/specgen/requirements_agent.py](../../../../sources/potpie-ai__potpie/legacy/app/modules/intelligence/agents/chat_agents/system_agents/specgen/requirements_agent.py)<br>[legacy/app/modules/intelligence/agents/chat_agents/system_agents/specgen/spec_gen_agent.py](../../../../sources/potpie-ai__potpie/legacy/app/modules/intelligence/agents/chat_agents/system_agents/specgen/spec_gen_agent.py)<br>[legacy/app/modules/intelligence/agents/chat_agents/system_agents/specgen/spec_models.py](../../../../sources/potpie-ai__potpie/legacy/app/modules/intelligence/agents/chat_agents/system_agents/specgen/spec_models.py) |
| eval | 367 | [potpie/sandbox/tests/unit/test_daytona_provider.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_daytona_provider.py)<br>[potpie/sandbox/tests/unit/test_eviction_policy.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_eviction_policy.py)<br>[potpie/sandbox/tests/unit/test_git_platform.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_git_platform.py)<br>[potpie/sandbox/tests/unit/test_local_auth.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_local_auth.py)<br>[potpie/sandbox/tests/unit/test_local_repo_cache.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_local_repo_cache.py)<br>[potpie/sandbox/tests/unit/test_parser_runner.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_parser_runner.py)<br>[potpie/sandbox/tests/unit/test_repo_cache_store.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_repo_cache_store.py)<br>[potpie/sandbox/tests/unit/test_sandbox_client.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_sandbox_client.py) |
| security | 189 | [potpie/sandbox/docker-compose.yml](../../../../sources/potpie-ai__potpie/potpie/sandbox/docker-compose.yml)<br>[potpie/sandbox/pyproject.toml](../../../../sources/potpie-ai__potpie/potpie/sandbox/pyproject.toml)<br>[potpie/sandbox/uv.lock](../../../../sources/potpie-ai__potpie/potpie/sandbox/uv.lock)<br>[potpie/sandbox/tests/unit/test_daytona_provider.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_daytona_provider.py)<br>[potpie/sandbox/tests/unit/test_eviction_policy.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_eviction_policy.py)<br>[potpie/sandbox/tests/unit/test_git_platform.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_git_platform.py)<br>[potpie/sandbox/tests/unit/test_local_auth.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_local_auth.py)<br>[potpie/sandbox/tests/unit/test_local_repo_cache.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_local_repo_cache.py) |
| ci | 7 | [legacy/deployment/stage/mom-api/Jenkinsfile_API](../../../../sources/potpie-ai__potpie/legacy/deployment/stage/mom-api/Jenkinsfile_API)<br>[legacy/deployment/stage/convo-server/Jenkinsfile_Convo](../../../../sources/potpie-ai__potpie/legacy/deployment/stage/convo-server/Jenkinsfile_Convo)<br>[legacy/deployment/stage/celery/Jenkinsfile_CELERY](../../../../sources/potpie-ai__potpie/legacy/deployment/stage/celery/Jenkinsfile_CELERY)<br>[legacy/deployment/prod/mom-api/Jenkinsfile_API_Prod](../../../../sources/potpie-ai__potpie/legacy/deployment/prod/mom-api/Jenkinsfile_API_Prod)<br>[legacy/deployment/prod/convo-server/Jenkinsfile_Convo_Prod](../../../../sources/potpie-ai__potpie/legacy/deployment/prod/convo-server/Jenkinsfile_Convo_Prod)<br>[legacy/deployment/prod/celery/Jenkinsfile_CELERY_Prod](../../../../sources/potpie-ai__potpie/legacy/deployment/prod/celery/Jenkinsfile_CELERY_Prod)<br>[.github/workflows/test.yml](../../../../sources/potpie-ai__potpie/.github/workflows/test.yml) |
| container | 30 | [potpie/sandbox/docker-compose.yml](../../../../sources/potpie-ai__potpie/potpie/sandbox/docker-compose.yml)<br>[potpie/sandbox/scripts/daytona-overrides/docker-compose.override.yaml](../../../../sources/potpie-ai__potpie/potpie/sandbox/scripts/daytona-overrides/docker-compose.override.yaml)<br>[potpie/sandbox/images/agent-sandbox/Dockerfile](../../../../sources/potpie-ai__potpie/potpie/sandbox/images/agent-sandbox/Dockerfile)<br>[potpie/sandbox/docker/Dockerfile.test](../../../../sources/potpie-ai__potpie/potpie/sandbox/docker/Dockerfile.test)<br>[legacy/compose.yaml](../../../../sources/potpie-ai__potpie/legacy/compose.yaml)<br>[legacy/dockerfile](../../../../sources/potpie-ai__potpie/legacy/dockerfile)<br>[legacy/deployment/stage/mom-api/api.Dockerfile](../../../../sources/potpie-ai__potpie/legacy/deployment/stage/mom-api/api.Dockerfile)<br>[legacy/deployment/stage/mom-api/Jenkinsfile_API](../../../../sources/potpie-ai__potpie/legacy/deployment/stage/mom-api/Jenkinsfile_API) |
| instruction | 2 | [potpie/context-engine/adapters/inbound/cli/templates/claude_bundle/CLAUDE.md](../../../../sources/potpie-ai__potpie/potpie/context-engine/adapters/inbound/cli/templates/claude_bundle/CLAUDE.md)<br>[potpie/context-engine/adapters/inbound/cli/templates/agent_bundle/AGENTS.md](../../../../sources/potpie-ai__potpie/potpie/context-engine/adapters/inbound/cli/templates/agent_bundle/AGENTS.md) |
| docs | 30 | [README.md](../../../../sources/potpie-ai__potpie/README.md)<br>[potpie/parsing/README.md](../../../../sources/potpie-ai__potpie/potpie/parsing/README.md)<br>[potpie/integrations/README.md](../../../../sources/potpie-ai__potpie/potpie/integrations/README.md)<br>[potpie/context-engine/benchmarks/README.md](../../../../sources/potpie-ai__potpie/potpie/context-engine/benchmarks/README.md)<br>[potpie/context-engine/benchmarks/fixtures/README.md](../../../../sources/potpie-ai__potpie/potpie/context-engine/benchmarks/fixtures/README.md)<br>[potpie/context-engine/adapters/inbound/cli/README.md](../../../../sources/potpie-ai__potpie/potpie/context-engine/adapters/inbound/cli/README.md)<br>[legacy/README.md](../../../../sources/potpie-ai__potpie/legacy/README.md)<br>[legacy/tests/README.md](../../../../sources/potpie-ai__potpie/legacy/tests/README.md) |
| config | 15 | [pyproject.toml](../../../../sources/potpie-ai__potpie/pyproject.toml)<br>[uv.lock](../../../../sources/potpie-ai__potpie/uv.lock)<br>[potpie/sandbox/pyproject.toml](../../../../sources/potpie-ai__potpie/potpie/sandbox/pyproject.toml)<br>[potpie/sandbox/uv.lock](../../../../sources/potpie-ai__potpie/potpie/sandbox/uv.lock)<br>[potpie/parsing/Cargo.lock](../../../../sources/potpie-ai__potpie/potpie/parsing/Cargo.lock)<br>[potpie/parsing/Cargo.toml](../../../../sources/potpie-ai__potpie/potpie/parsing/Cargo.toml)<br>[potpie/parsing/pyproject.toml](../../../../sources/potpie-ai__potpie/potpie/parsing/pyproject.toml)<br>[potpie/parsing/uv.lock](../../../../sources/potpie-ai__potpie/potpie/parsing/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 367 | [potpie/sandbox/tests/unit/test_daytona_provider.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_daytona_provider.py)<br>[potpie/sandbox/tests/unit/test_eviction_policy.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_eviction_policy.py)<br>[potpie/sandbox/tests/unit/test_git_platform.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_git_platform.py)<br>[potpie/sandbox/tests/unit/test_local_auth.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_local_auth.py)<br>[potpie/sandbox/tests/unit/test_local_repo_cache.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_local_repo_cache.py)<br>[potpie/sandbox/tests/unit/test_parser_runner.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_parser_runner.py) |
| CI workflow | 7 | [legacy/deployment/stage/mom-api/Jenkinsfile_API](../../../../sources/potpie-ai__potpie/legacy/deployment/stage/mom-api/Jenkinsfile_API)<br>[legacy/deployment/stage/convo-server/Jenkinsfile_Convo](../../../../sources/potpie-ai__potpie/legacy/deployment/stage/convo-server/Jenkinsfile_Convo)<br>[legacy/deployment/stage/celery/Jenkinsfile_CELERY](../../../../sources/potpie-ai__potpie/legacy/deployment/stage/celery/Jenkinsfile_CELERY)<br>[legacy/deployment/prod/mom-api/Jenkinsfile_API_Prod](../../../../sources/potpie-ai__potpie/legacy/deployment/prod/mom-api/Jenkinsfile_API_Prod)<br>[legacy/deployment/prod/convo-server/Jenkinsfile_Convo_Prod](../../../../sources/potpie-ai__potpie/legacy/deployment/prod/convo-server/Jenkinsfile_Convo_Prod)<br>[legacy/deployment/prod/celery/Jenkinsfile_CELERY_Prod](../../../../sources/potpie-ai__potpie/legacy/deployment/prod/celery/Jenkinsfile_CELERY_Prod) |
| 컨테이너/배포 | 30 | [potpie/sandbox/docker-compose.yml](../../../../sources/potpie-ai__potpie/potpie/sandbox/docker-compose.yml)<br>[potpie/sandbox/scripts/daytona-overrides/docker-compose.override.yaml](../../../../sources/potpie-ai__potpie/potpie/sandbox/scripts/daytona-overrides/docker-compose.override.yaml)<br>[potpie/sandbox/images/agent-sandbox/Dockerfile](../../../../sources/potpie-ai__potpie/potpie/sandbox/images/agent-sandbox/Dockerfile)<br>[potpie/sandbox/docker/Dockerfile.test](../../../../sources/potpie-ai__potpie/potpie/sandbox/docker/Dockerfile.test)<br>[legacy/compose.yaml](../../../../sources/potpie-ai__potpie/legacy/compose.yaml)<br>[legacy/dockerfile](../../../../sources/potpie-ai__potpie/legacy/dockerfile) |
| 보안/정책 | 189 | [potpie/sandbox/docker-compose.yml](../../../../sources/potpie-ai__potpie/potpie/sandbox/docker-compose.yml)<br>[potpie/sandbox/pyproject.toml](../../../../sources/potpie-ai__potpie/potpie/sandbox/pyproject.toml)<br>[potpie/sandbox/uv.lock](../../../../sources/potpie-ai__potpie/potpie/sandbox/uv.lock)<br>[potpie/sandbox/tests/unit/test_daytona_provider.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_daytona_provider.py)<br>[potpie/sandbox/tests/unit/test_eviction_policy.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_eviction_policy.py)<br>[potpie/sandbox/tests/unit/test_git_platform.py](../../../../sources/potpie-ai__potpie/potpie/sandbox/tests/unit/test_git_platform.py) |
| 에이전트 지시문 | 2 | [potpie/context-engine/adapters/inbound/cli/templates/claude_bundle/CLAUDE.md](../../../../sources/potpie-ai__potpie/potpie/context-engine/adapters/inbound/cli/templates/claude_bundle/CLAUDE.md)<br>[potpie/context-engine/adapters/inbound/cli/templates/agent_bundle/AGENTS.md](../../../../sources/potpie-ai__potpie/potpie/context-engine/adapters/inbound/cli/templates/agent_bundle/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `potpie/context-engine/tests/unit/test_mcp_project_access.py`, `potpie/context-engine/adapters/inbound/mcp/__init__.py`, `potpie/context-engine/adapters/inbound/mcp/project_access.py`.
2. entrypoint를 따라 실행 흐름 확인: `potpie/sandbox/sandbox/parser_runner/__main__.py`, `potpie/context-engine/host/daemon_runtime/__main__.py`, `potpie/context-engine/benchmarks/__main__.py`.
3. agent/tool runtime 매핑: `potpie/sandbox/docker-compose.yml`, `potpie/sandbox/pyproject.toml`, `potpie/sandbox/uv.lock`.
4. retrieval/memory/indexing 확인: `potpie/sandbox/sandbox/adapters/outbound/memory/__init__.py`, `potpie/sandbox/sandbox/adapters/outbound/memory/eviction.py`, `potpie/sandbox/sandbox/adapters/outbound/memory/locks.py`.
5. test/eval 파일로 동작 검증: `potpie/sandbox/tests/unit/test_daytona_provider.py`, `potpie/sandbox/tests/unit/test_eviction_policy.py`, `potpie/sandbox/tests/unit/test_git_platform.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 1494 files, 274 directories.. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, openai, fastapi이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 큰 메타데이터 위험이 명확하지 않음입니다.
