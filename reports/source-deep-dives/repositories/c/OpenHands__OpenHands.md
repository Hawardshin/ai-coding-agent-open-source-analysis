# OpenHands/OpenHands 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

🙌 OpenHands: AI-Driven Development

## 요약

- 조사 단위: `sources/OpenHands__OpenHands` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,433 files, 365 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/unit/server/routes/test_mcp_routes.py, tests/unit/mcp/test_mcp_integration.py, openhands/app_server/mcp/mcp_router.py이고, 의존성 단서는 openai, anthropic, gemini, mcp, fastapi, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | OpenHands/OpenHands |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 77562 |
| Forks | 9858 |
| License | NOASSERTION |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/OpenHands__OpenHands](../../../../sources/OpenHands__OpenHands) |
| 기존 보고서 | [reports/global-trending/repositories/OpenHands__OpenHands.md](../../../global-trending/repositories/OpenHands__OpenHands.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2433 / 365 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .agents, .devcontainer, .github, .openhands, containers, dev_config, enterprise, frontend, kind, openhands, openhands-ui, scripts, skills, tests |
| 상위 확장자 | .py: 839, .tsx: 721, .ts: 510, .svg: 124, .md: 77, .j2: 34, .yml: 34, (none): 19, .json: 12, .sh: 9, .yaml: 8, .css: 7 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 56 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| containers | top-level component | 1 |
| dev_config | top-level component | 1 |
| enterprise | top-level component | 1 |
| frontend | top-level component | 1 |
| kind | top-level component | 1 |
| openhands | top-level component | 1 |
| openhands-ui | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | Makefile | build | make build |
| quality | Makefile | check-dependencies | make check-dependencies |
| quality | Makefile | check-system | make check-system |
| quality | Makefile | check-python | make check-python |
| quality | Makefile | check-npm | make check-npm |
| quality | Makefile | check-nodejs | make check-nodejs |
| quality | Makefile | check-docker | make check-docker |
| quality | Makefile | check-tmux | make check-tmux |
| quality | Makefile | check-poetry | make check-poetry |
| utility | Makefile | install-python-dependencies | make install-python-dependencies |
| utility | Makefile | install-frontend-dependencies | make install-frontend-dependencies |
| utility | Makefile | install-pre-commit-hooks | make install-pre-commit-hooks |
| quality | Makefile | lint-backend | make lint-backend |
| quality | Makefile | lint-frontend | make lint-frontend |
| quality | Makefile | lint | make lint |
| utility | Makefile | kind | make kind |
| test | Makefile | test-frontend | make test-frontend |
| test | Makefile | test | make test |
| build | Makefile | build-frontend | make build-frontend |
| serve-dev | Makefile | start-backend | make start-backend |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic, gemini |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | opentelemetry |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [tests/unit/server/routes/test_mcp_routes.py](../../../../sources/OpenHands__OpenHands/tests/unit/server/routes/test_mcp_routes.py) | mcp signal |
| mcp | [tests/unit/mcp/test_mcp_integration.py](../../../../sources/OpenHands__OpenHands/tests/unit/mcp/test_mcp_integration.py) | mcp signal |
| mcp | [openhands/app_server/mcp/mcp_router.py](../../../../sources/OpenHands__OpenHands/openhands/app_server/mcp/mcp_router.py) | mcp signal |
| mcp | [frontend/src/utils/mcp-config.ts](../../../../sources/OpenHands__OpenHands/frontend/src/utils/mcp-config.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/OpenHands__OpenHands/AGENTS.md) | agentRuntime signal |
| agentRuntime | [skills/add_agent.md](../../../../sources/OpenHands__OpenHands/skills/add_agent.md) | agentRuntime signal |
| agentRuntime | [skills/add_repo_inst.md](../../../../sources/OpenHands__OpenHands/skills/add_repo_inst.md) | agentRuntime signal |
| agentRuntime | [skills/address_pr_comments.md](../../../../sources/OpenHands__OpenHands/skills/address_pr_comments.md) | agentRuntime signal |
| entrypoints | [openhands-ui/.storybook/main.ts](../../../../sources/OpenHands__OpenHands/openhands-ui/.storybook/main.ts) | entrypoints signal |
| entrypoints | [openhands/server/__main__.py](../../../../sources/OpenHands__OpenHands/openhands/server/__main__.py) | entrypoints signal |
| entrypoints | [frontend/src/index.css](../../../../sources/OpenHands__OpenHands/frontend/src/index.css) | entrypoints signal |
| entrypoints | [frontend/src/icons/server.svg](../../../../sources/OpenHands__OpenHands/frontend/src/icons/server.svg) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [openhands-ui/.storybook/main.ts](../../../../sources/OpenHands__OpenHands/openhands-ui/.storybook/main.ts)<br>[openhands/server/__main__.py](../../../../sources/OpenHands__OpenHands/openhands/server/__main__.py)<br>[frontend/src/index.css](../../../../sources/OpenHands__OpenHands/frontend/src/index.css)<br>[frontend/src/icons/server.svg](../../../../sources/OpenHands__OpenHands/frontend/src/icons/server.svg) |
| agentRuntime | 364 | [AGENTS.md](../../../../sources/OpenHands__OpenHands/AGENTS.md)<br>[skills/add_agent.md](../../../../sources/OpenHands__OpenHands/skills/add_agent.md)<br>[skills/add_repo_inst.md](../../../../sources/OpenHands__OpenHands/skills/add_repo_inst.md)<br>[skills/address_pr_comments.md](../../../../sources/OpenHands__OpenHands/skills/address_pr_comments.md)<br>[skills/agent_memory.md](../../../../sources/OpenHands__OpenHands/skills/agent_memory.md)<br>[skills/agent-builder.md](../../../../sources/OpenHands__OpenHands/skills/agent-builder.md)<br>[skills/azure_devops.md](../../../../sources/OpenHands__OpenHands/skills/azure_devops.md)<br>[skills/bitbucket_data_center.md](../../../../sources/OpenHands__OpenHands/skills/bitbucket_data_center.md) |
| mcp | 20 | [tests/unit/server/routes/test_mcp_routes.py](../../../../sources/OpenHands__OpenHands/tests/unit/server/routes/test_mcp_routes.py)<br>[tests/unit/mcp/test_mcp_integration.py](../../../../sources/OpenHands__OpenHands/tests/unit/mcp/test_mcp_integration.py)<br>[openhands/app_server/mcp/mcp_router.py](../../../../sources/OpenHands__OpenHands/openhands/app_server/mcp/mcp_router.py)<br>[frontend/src/utils/mcp-config.ts](../../../../sources/OpenHands__OpenHands/frontend/src/utils/mcp-config.ts)<br>[frontend/src/routes/mcp-settings.tsx](../../../../sources/OpenHands__OpenHands/frontend/src/routes/mcp-settings.tsx)<br>[frontend/src/hooks/mutation/use-add-mcp-server.ts](../../../../sources/OpenHands__OpenHands/frontend/src/hooks/mutation/use-add-mcp-server.ts)<br>[frontend/src/hooks/mutation/use-delete-mcp-server.ts](../../../../sources/OpenHands__OpenHands/frontend/src/hooks/mutation/use-delete-mcp-server.ts)<br>[frontend/src/hooks/mutation/use-update-mcp-server.ts](../../../../sources/OpenHands__OpenHands/frontend/src/hooks/mutation/use-update-mcp-server.ts) |
| retrieval | 28 | [tests/unit/utils/test_chunk_localizer.py](../../../../sources/OpenHands__OpenHands/tests/unit/utils/test_chunk_localizer.py)<br>[skills/agent_memory.md](../../../../sources/OpenHands__OpenHands/skills/agent_memory.md)<br>[openhands-ui/index.css](../../../../sources/OpenHands__OpenHands/openhands-ui/index.css)<br>[openhands-ui/index.ts](../../../../sources/OpenHands__OpenHands/openhands-ui/index.ts)<br>[openhands-ui/components/spinner/index.css](../../../../sources/OpenHands__OpenHands/openhands-ui/components/spinner/index.css)<br>[openhands-ui/components/interactive-chip/index.css](../../../../sources/OpenHands__OpenHands/openhands-ui/components/interactive-chip/index.css)<br>[openhands-ui/components/button/index.css](../../../../sources/OpenHands__OpenHands/openhands-ui/components/button/index.css)<br>[openhands/app_server/utils/chunk_localizer.py](../../../../sources/OpenHands__OpenHands/openhands/app_server/utils/chunk_localizer.py) |
| spec | 17 | [tests/unit/app_server/test_docker_sandbox_spec_service_injector.py](../../../../sources/OpenHands__OpenHands/tests/unit/app_server/test_docker_sandbox_spec_service_injector.py)<br>[tests/unit/app_server/test_dynamic_remote_sandbox_spec_service.py](../../../../sources/OpenHands__OpenHands/tests/unit/app_server/test_dynamic_remote_sandbox_spec_service.py)<br>[openhands/app_server/sandbox/docker_sandbox_spec_service.py](../../../../sources/OpenHands__OpenHands/openhands/app_server/sandbox/docker_sandbox_spec_service.py)<br>[openhands/app_server/sandbox/dynamic_remote_sandbox_spec_service.py](../../../../sources/OpenHands__OpenHands/openhands/app_server/sandbox/dynamic_remote_sandbox_spec_service.py)<br>[openhands/app_server/sandbox/preset_sandbox_spec_service.py](../../../../sources/OpenHands__OpenHands/openhands/app_server/sandbox/preset_sandbox_spec_service.py)<br>[openhands/app_server/sandbox/process_sandbox_spec_service.py](../../../../sources/OpenHands__OpenHands/openhands/app_server/sandbox/process_sandbox_spec_service.py)<br>[openhands/app_server/sandbox/remote_sandbox_spec_service.py](../../../../sources/OpenHands__OpenHands/openhands/app_server/sandbox/remote_sandbox_spec_service.py)<br>[openhands/app_server/sandbox/sandbox_spec_models.py](../../../../sources/OpenHands__OpenHands/openhands/app_server/sandbox/sandbox_spec_models.py) |
| eval | 572 | [tests/__init__.py](../../../../sources/OpenHands__OpenHands/tests/__init__.py)<br>[tests/unit/__init__.py](../../../../sources/OpenHands__OpenHands/tests/unit/__init__.py)<br>[tests/unit/README.md](../../../../sources/OpenHands__OpenHands/tests/unit/README.md)<br>[tests/unit/test_analytics_context.py](../../../../sources/OpenHands__OpenHands/tests/unit/test_analytics_context.py)<br>[tests/unit/test_analytics_service.py](../../../../sources/OpenHands__OpenHands/tests/unit/test_analytics_service.py)<br>[tests/unit/test_analytics_user_base.py](../../../../sources/OpenHands__OpenHands/tests/unit/test_analytics_user_base.py)<br>[tests/unit/test_azure_devops.py](../../../../sources/OpenHands__OpenHands/tests/unit/test_azure_devops.py)<br>[tests/unit/test_enterprise_migration_integrity.py](../../../../sources/OpenHands__OpenHands/tests/unit/test_enterprise_migration_integrity.py) |
| security | 116 | [tests/unit/storage/data_models/test_secret_store.py](../../../../sources/OpenHands__OpenHands/tests/unit/storage/data_models/test_secret_store.py)<br>[tests/unit/app_server/test_docker_sandbox_service.py](../../../../sources/OpenHands__OpenHands/tests/unit/app_server/test_docker_sandbox_service.py)<br>[tests/unit/app_server/test_docker_sandbox_spec_service_injector.py](../../../../sources/OpenHands__OpenHands/tests/unit/app_server/test_docker_sandbox_spec_service_injector.py)<br>[tests/unit/app_server/test_dynamic_remote_sandbox_spec_service.py](../../../../sources/OpenHands__OpenHands/tests/unit/app_server/test_dynamic_remote_sandbox_spec_service.py)<br>[tests/unit/app_server/test_process_sandbox_service.py](../../../../sources/OpenHands__OpenHands/tests/unit/app_server/test_process_sandbox_service.py)<br>[tests/unit/app_server/test_remote_sandbox_service.py](../../../../sources/OpenHands__OpenHands/tests/unit/app_server/test_remote_sandbox_service.py)<br>[tests/unit/app_server/test_sandbox_secrets_router.py](../../../../sources/OpenHands__OpenHands/tests/unit/app_server/test_sandbox_secrets_router.py)<br>[tests/unit/app_server/test_sandbox_service.py](../../../../sources/OpenHands__OpenHands/tests/unit/app_server/test_sandbox_service.py) |
| ci | 24 | [.github/workflows/_build-image.yml](../../../../sources/OpenHands__OpenHands/.github/workflows/_build-image.yml)<br>[.github/workflows/check-package-versions.yml](../../../../sources/OpenHands__OpenHands/.github/workflows/check-package-versions.yml)<br>[.github/workflows/check-version-consistency.yml](../../../../sources/OpenHands__OpenHands/.github/workflows/check-version-consistency.yml)<br>[.github/workflows/enterprise-check-migrations.yml](../../../../sources/OpenHands__OpenHands/.github/workflows/enterprise-check-migrations.yml)<br>[.github/workflows/fe-e2e-tests.yml](../../../../sources/OpenHands__OpenHands/.github/workflows/fe-e2e-tests.yml)<br>[.github/workflows/fe-unit-tests.yml](../../../../sources/OpenHands__OpenHands/.github/workflows/fe-unit-tests.yml)<br>[.github/workflows/ghcr-build.yml](../../../../sources/OpenHands__OpenHands/.github/workflows/ghcr-build.yml)<br>[.github/workflows/issue-opened.yml](../../../../sources/OpenHands__OpenHands/.github/workflows/issue-opened.yml) |
| container | 5 | [docker-compose.yml](../../../../sources/OpenHands__OpenHands/docker-compose.yml)<br>[enterprise/Dockerfile](../../../../sources/OpenHands__OpenHands/enterprise/Dockerfile)<br>[containers/dev/compose.yml](../../../../sources/OpenHands__OpenHands/containers/dev/compose.yml)<br>[containers/dev/Dockerfile](../../../../sources/OpenHands__OpenHands/containers/dev/Dockerfile)<br>[containers/app/Dockerfile](../../../../sources/OpenHands__OpenHands/containers/app/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/OpenHands__OpenHands/AGENTS.md) |
| docs | 32 | [README.md](../../../../sources/OpenHands__OpenHands/README.md)<br>[tests/unit/README.md](../../../../sources/OpenHands__OpenHands/tests/unit/README.md)<br>[skills/README.md](../../../../sources/OpenHands__OpenHands/skills/README.md)<br>[openhands-ui/README.md](../../../../sources/OpenHands__OpenHands/openhands-ui/README.md)<br>[openhands/app_server/README.md](../../../../sources/OpenHands__OpenHands/openhands/app_server/README.md)<br>[openhands/app_server/utils/README.md](../../../../sources/OpenHands__OpenHands/openhands/app_server/utils/README.md)<br>[openhands/app_server/user/README.md](../../../../sources/OpenHands__OpenHands/openhands/app_server/user/README.md)<br>[openhands/app_server/services/README.md](../../../../sources/OpenHands__OpenHands/openhands/app_server/services/README.md) |
| config | 12 | [Makefile](../../../../sources/OpenHands__OpenHands/Makefile)<br>[poetry.lock](../../../../sources/OpenHands__OpenHands/poetry.lock)<br>[pyproject.toml](../../../../sources/OpenHands__OpenHands/pyproject.toml)<br>[uv.lock](../../../../sources/OpenHands__OpenHands/uv.lock)<br>[openhands-ui/package.json](../../../../sources/OpenHands__OpenHands/openhands-ui/package.json)<br>[openhands-ui/tsconfig.json](../../../../sources/OpenHands__OpenHands/openhands-ui/tsconfig.json)<br>[frontend/package.json](../../../../sources/OpenHands__OpenHands/frontend/package.json)<br>[frontend/tsconfig.json](../../../../sources/OpenHands__OpenHands/frontend/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 572 | [tests/__init__.py](../../../../sources/OpenHands__OpenHands/tests/__init__.py)<br>[tests/unit/__init__.py](../../../../sources/OpenHands__OpenHands/tests/unit/__init__.py)<br>[tests/unit/README.md](../../../../sources/OpenHands__OpenHands/tests/unit/README.md)<br>[tests/unit/test_analytics_context.py](../../../../sources/OpenHands__OpenHands/tests/unit/test_analytics_context.py)<br>[tests/unit/test_analytics_service.py](../../../../sources/OpenHands__OpenHands/tests/unit/test_analytics_service.py)<br>[tests/unit/test_analytics_user_base.py](../../../../sources/OpenHands__OpenHands/tests/unit/test_analytics_user_base.py) |
| CI workflow | 24 | [.github/workflows/_build-image.yml](../../../../sources/OpenHands__OpenHands/.github/workflows/_build-image.yml)<br>[.github/workflows/check-package-versions.yml](../../../../sources/OpenHands__OpenHands/.github/workflows/check-package-versions.yml)<br>[.github/workflows/check-version-consistency.yml](../../../../sources/OpenHands__OpenHands/.github/workflows/check-version-consistency.yml)<br>[.github/workflows/enterprise-check-migrations.yml](../../../../sources/OpenHands__OpenHands/.github/workflows/enterprise-check-migrations.yml)<br>[.github/workflows/fe-e2e-tests.yml](../../../../sources/OpenHands__OpenHands/.github/workflows/fe-e2e-tests.yml)<br>[.github/workflows/fe-unit-tests.yml](../../../../sources/OpenHands__OpenHands/.github/workflows/fe-unit-tests.yml) |
| 컨테이너/배포 | 5 | [docker-compose.yml](../../../../sources/OpenHands__OpenHands/docker-compose.yml)<br>[enterprise/Dockerfile](../../../../sources/OpenHands__OpenHands/enterprise/Dockerfile)<br>[containers/dev/compose.yml](../../../../sources/OpenHands__OpenHands/containers/dev/compose.yml)<br>[containers/dev/Dockerfile](../../../../sources/OpenHands__OpenHands/containers/dev/Dockerfile)<br>[containers/app/Dockerfile](../../../../sources/OpenHands__OpenHands/containers/app/Dockerfile) |
| 보안/정책 | 116 | [tests/unit/storage/data_models/test_secret_store.py](../../../../sources/OpenHands__OpenHands/tests/unit/storage/data_models/test_secret_store.py)<br>[tests/unit/app_server/test_docker_sandbox_service.py](../../../../sources/OpenHands__OpenHands/tests/unit/app_server/test_docker_sandbox_service.py)<br>[tests/unit/app_server/test_docker_sandbox_spec_service_injector.py](../../../../sources/OpenHands__OpenHands/tests/unit/app_server/test_docker_sandbox_spec_service_injector.py)<br>[tests/unit/app_server/test_dynamic_remote_sandbox_spec_service.py](../../../../sources/OpenHands__OpenHands/tests/unit/app_server/test_dynamic_remote_sandbox_spec_service.py)<br>[tests/unit/app_server/test_process_sandbox_service.py](../../../../sources/OpenHands__OpenHands/tests/unit/app_server/test_process_sandbox_service.py)<br>[tests/unit/app_server/test_remote_sandbox_service.py](../../../../sources/OpenHands__OpenHands/tests/unit/app_server/test_remote_sandbox_service.py) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/OpenHands__OpenHands/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/unit/server/routes/test_mcp_routes.py`, `tests/unit/mcp/test_mcp_integration.py`, `openhands/app_server/mcp/mcp_router.py`.
2. entrypoint를 따라 실행 흐름 확인: `openhands-ui/.storybook/main.ts`, `openhands/server/__main__.py`, `frontend/src/index.css`.
3. agent/tool runtime 매핑: `AGENTS.md`, `skills/add_agent.md`, `skills/add_repo_inst.md`.
4. retrieval/memory/indexing 확인: `tests/unit/utils/test_chunk_localizer.py`, `skills/agent_memory.md`, `openhands-ui/index.css`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/unit/__init__.py`, `tests/unit/README.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 🙌 OpenHands AI Driven Development. 핵심 구조 신호는 Python, pyproject.toml, docker-compose.yml, Makefile, README.md, AGENTS.md이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
