# dbt-labs/dbt-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

A MCP (Model Context Protocol) server for interacting with dbt.

## 요약

- 조사 단위: `sources/dbt-labs__dbt-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 507 files, 105 directories, depth score 123, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/unit/mcp_server_metadata/__init__.py, tests/unit/mcp_server_metadata/test_tools.py, tests/unit/mcp/__init__.py이고, 의존성 단서는 openai, mcp, fastapi, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | dbt-labs/dbt-mcp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 581 |
| Forks | 124 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/dbt-labs__dbt-mcp](../../../../sources/dbt-labs__dbt-mcp) |
| 기존 보고서 | [reports/global-trending/repositories/dbt-labs__dbt-mcp.md](../../../global-trending/repositories/dbt-labs__dbt-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 507 / 105 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .changes, .claude, .github, .task, docs, evals, examples, scripts, src, tests, ui |
| 상위 확장자 | .py: 236, .md: 181, (none): 22, .gql: 11, .yml: 10, .toml: 9, .json: 7, .lock: 6, .yaml: 6, .ts: 5, .css: 2, .example: 2 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 73 |
| tests | validation surface | 62 |
| examples/aws_strands_agent | examples workspace | 8 |
| examples/ai_sdk_agent | examples workspace | 5 |
| examples/crewai_agent | examples workspace | 4 |
| examples/langgraph_agent | examples workspace | 4 |
| examples/openai_agent | examples workspace | 4 |
| examples/openai_responses | examples workspace | 4 |
| examples/remote_mcp | examples workspace | 4 |
| docs | documentation surface | 3 |
| examples/google_adk_agent | examples workspace | 3 |
| examples/pydantic_ai_agent | examples workspace | 3 |
| examples/ag2_agent | examples workspace | 2 |
| .github | ci surface | 1 |
| evals | top-level component | 1 |
| examples | top-level component | 1 |
| scripts | top-level component | 1 |
| ui | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | dbt-mcp | dbt-mcp |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
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
| mcp | [tests/unit/mcp_server_metadata/__init__.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/mcp_server_metadata/__init__.py) | mcp signal |
| mcp | [tests/unit/mcp_server_metadata/test_tools.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/mcp_server_metadata/test_tools.py) | mcp signal |
| mcp | [tests/unit/mcp/__init__.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/mcp/__init__.py) | mcp signal |
| mcp | [tests/unit/mcp/test_dispatcher.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/mcp/test_dispatcher.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/dbt-labs__dbt-mcp/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/unit/tools/test_definitions.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/tools/test_definitions.py) | agentRuntime signal |
| agentRuntime | [tests/unit/tools/test_disable_tools.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/tools/test_disable_tools.py) | agentRuntime signal |
| agentRuntime | [tests/unit/tools/test_injection.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/tools/test_injection.py) | agentRuntime signal |
| entrypoints | [ui/src/App.css](../../../../sources/dbt-labs__dbt-mcp/ui/src/App.css) | entrypoints signal |
| entrypoints | [ui/src/App.tsx](../../../../sources/dbt-labs__dbt-mcp/ui/src/App.tsx) | entrypoints signal |
| entrypoints | [ui/src/index.css](../../../../sources/dbt-labs__dbt-mcp/ui/src/index.css) | entrypoints signal |
| entrypoints | [ui/src/main.tsx](../../../../sources/dbt-labs__dbt-mcp/ui/src/main.tsx) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 15 | [ui/src/App.css](../../../../sources/dbt-labs__dbt-mcp/ui/src/App.css)<br>[ui/src/App.tsx](../../../../sources/dbt-labs__dbt-mcp/ui/src/App.tsx)<br>[ui/src/index.css](../../../../sources/dbt-labs__dbt-mcp/ui/src/index.css)<br>[ui/src/main.tsx](../../../../sources/dbt-labs__dbt-mcp/ui/src/main.tsx)<br>[src/dbt_mcp/main.py](../../../../sources/dbt-labs__dbt-mcp/src/dbt_mcp/main.py)<br>[src/dbt_mcp/mcp/server.py](../../../../sources/dbt-labs__dbt-mcp/src/dbt_mcp/mcp/server.py)<br>[src/client/main.py](../../../../sources/dbt-labs__dbt-mcp/src/client/main.py)<br>[examples/remote_mcp/main.py](../../../../sources/dbt-labs__dbt-mcp/examples/remote_mcp/main.py) |
| agentRuntime | 37 | [AGENTS.md](../../../../sources/dbt-labs__dbt-mcp/AGENTS.md)<br>[tests/unit/tools/test_definitions.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/tools/test_definitions.py)<br>[tests/unit/tools/test_disable_tools.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/tools/test_disable_tools.py)<br>[tests/unit/tools/test_injection.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/tools/test_injection.py)<br>[tests/unit/tools/test_precedence.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/tools/test_precedence.py)<br>[tests/unit/tools/test_product_docs.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/tools/test_product_docs.py)<br>[tests/unit/tools/test_tool_names.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/tools/test_tool_names.py)<br>[tests/unit/tools/test_toolsets.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/tools/test_toolsets.py) |
| mcp | 217 | [tests/unit/mcp_server_metadata/__init__.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/mcp_server_metadata/__init__.py)<br>[tests/unit/mcp_server_metadata/test_tools.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/mcp_server_metadata/test_tools.py)<br>[tests/unit/mcp/__init__.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/mcp/__init__.py)<br>[tests/unit/mcp/test_dispatcher.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/mcp/test_dispatcher.py)<br>[tests/unit/config/test_mcp_lock_symlink.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/config/test_mcp_lock_symlink.py)<br>[tests/integration/remote_mcp/test_remote_mcp.py](../../../../sources/dbt-labs__dbt-mcp/tests/integration/remote_mcp/test_remote_mcp.py)<br>[src/remote_mcp/__init__.py](../../../../sources/dbt-labs__dbt-mcp/src/remote_mcp/__init__.py)<br>[src/remote_mcp/session.py](../../../../sources/dbt-labs__dbt-mcp/src/remote_mcp/session.py) |
| retrieval | 3 | [ui/index.html](../../../../sources/dbt-labs__dbt-mcp/ui/index.html)<br>[ui/src/index.css](../../../../sources/dbt-labs__dbt-mcp/ui/src/index.css)<br>[examples/ai_sdk_agent/src/index.ts](../../../../sources/dbt-labs__dbt-mcp/examples/ai_sdk_agent/src/index.ts) |
| spec | 1 | [examples/aws_strands_agent/requirements.txt](../../../../sources/dbt-labs__dbt-mcp/examples/aws_strands_agent/requirements.txt) |
| eval | 101 | [tests/__init__.py](../../../../sources/dbt-labs__dbt-mcp/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/dbt-labs__dbt-mcp/tests/conftest.py)<br>[tests/env_vars.py](../../../../sources/dbt-labs__dbt-mcp/tests/env_vars.py)<br>[tests/unit/__init__.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/__init__.py)<br>[tests/unit/tracking/test_tracking.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/tracking/test_tracking.py)<br>[tests/unit/tools/test_definitions.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/tools/test_definitions.py)<br>[tests/unit/tools/test_disable_tools.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/tools/test_disable_tools.py)<br>[tests/unit/tools/test_injection.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/tools/test_injection.py) |
| security | 19 | [tests/unit/oauth/test_credentials_provider.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/oauth/test_credentials_provider.py)<br>[tests/unit/oauth/test_dbt_platform.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/oauth/test_dbt_platform.py)<br>[tests/unit/oauth/test_fastapi_app_pagination.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/oauth/test_fastapi_app_pagination.py)<br>[tests/unit/oauth/test_refresh.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/oauth/test_refresh.py)<br>[tests/unit/oauth/test_token_provider.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/oauth/test_token_provider.py)<br>[tests/unit/oauth/test_token_refresh_at_startup.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/oauth/test_token_refresh_at_startup.py)<br>[tests/unit/oauth/test_token.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/oauth/test_token.py)<br>[tests/unit/oauth/test_validate_settings_has_token.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/oauth/test_validate_settings_has_token.py) |
| ci | 6 | [.github/workflows/changelog-check.yml](../../../../sources/dbt-labs__dbt-mcp/.github/workflows/changelog-check.yml)<br>[.github/workflows/codeowners-check.yml](../../../../sources/dbt-labs__dbt-mcp/.github/workflows/codeowners-check.yml)<br>[.github/workflows/create-release-pr.yml](../../../../sources/dbt-labs__dbt-mcp/.github/workflows/create-release-pr.yml)<br>[.github/workflows/integration-tests-pr.yaml](../../../../sources/dbt-labs__dbt-mcp/.github/workflows/integration-tests-pr.yaml)<br>[.github/workflows/release.yml](../../../../sources/dbt-labs__dbt-mcp/.github/workflows/release.yml)<br>[.github/workflows/run-checks-pr.yaml](../../../../sources/dbt-labs__dbt-mcp/.github/workflows/run-checks-pr.yaml) |
| container | 1 | [Dockerfile](../../../../sources/dbt-labs__dbt-mcp/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/dbt-labs__dbt-mcp/AGENTS.md)<br>[CLAUDE.md](../../../../sources/dbt-labs__dbt-mcp/CLAUDE.md) |
| docs | 15 | [README.md](../../../../sources/dbt-labs__dbt-mcp/README.md)<br>[ui/README.md](../../../../sources/dbt-labs__dbt-mcp/ui/README.md)<br>[src/dbt_mcp/tools/readme_mappings.py](../../../../sources/dbt-labs__dbt-mcp/src/dbt_mcp/tools/readme_mappings.py)<br>[examples/remote_mcp/README.md](../../../../sources/dbt-labs__dbt-mcp/examples/remote_mcp/README.md)<br>[examples/pydantic_ai_agent/README.md](../../../../sources/dbt-labs__dbt-mcp/examples/pydantic_ai_agent/README.md)<br>[examples/openai_responses/README.md](../../../../sources/dbt-labs__dbt-mcp/examples/openai_responses/README.md)<br>[examples/openai_agent/README.md](../../../../sources/dbt-labs__dbt-mcp/examples/openai_agent/README.md)<br>[examples/langgraph_agent/README.md](../../../../sources/dbt-labs__dbt-mcp/examples/langgraph_agent/README.md) |
| config | 21 | [pyproject.toml](../../../../sources/dbt-labs__dbt-mcp/pyproject.toml)<br>[uv.lock](../../../../sources/dbt-labs__dbt-mcp/uv.lock)<br>[ui/package.json](../../../../sources/dbt-labs__dbt-mcp/ui/package.json)<br>[ui/pnpm-workspace.yaml](../../../../sources/dbt-labs__dbt-mcp/ui/pnpm-workspace.yaml)<br>[ui/tsconfig.json](../../../../sources/dbt-labs__dbt-mcp/ui/tsconfig.json)<br>[examples/remote_mcp/pyproject.toml](../../../../sources/dbt-labs__dbt-mcp/examples/remote_mcp/pyproject.toml)<br>[examples/remote_mcp/uv.lock](../../../../sources/dbt-labs__dbt-mcp/examples/remote_mcp/uv.lock)<br>[examples/pydantic_ai_agent/pyproject.toml](../../../../sources/dbt-labs__dbt-mcp/examples/pydantic_ai_agent/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 101 | [tests/__init__.py](../../../../sources/dbt-labs__dbt-mcp/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/dbt-labs__dbt-mcp/tests/conftest.py)<br>[tests/env_vars.py](../../../../sources/dbt-labs__dbt-mcp/tests/env_vars.py)<br>[tests/unit/__init__.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/__init__.py)<br>[tests/unit/tracking/test_tracking.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/tracking/test_tracking.py)<br>[tests/unit/tools/test_definitions.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/tools/test_definitions.py) |
| CI workflow | 6 | [.github/workflows/changelog-check.yml](../../../../sources/dbt-labs__dbt-mcp/.github/workflows/changelog-check.yml)<br>[.github/workflows/codeowners-check.yml](../../../../sources/dbt-labs__dbt-mcp/.github/workflows/codeowners-check.yml)<br>[.github/workflows/create-release-pr.yml](../../../../sources/dbt-labs__dbt-mcp/.github/workflows/create-release-pr.yml)<br>[.github/workflows/integration-tests-pr.yaml](../../../../sources/dbt-labs__dbt-mcp/.github/workflows/integration-tests-pr.yaml)<br>[.github/workflows/release.yml](../../../../sources/dbt-labs__dbt-mcp/.github/workflows/release.yml)<br>[.github/workflows/run-checks-pr.yaml](../../../../sources/dbt-labs__dbt-mcp/.github/workflows/run-checks-pr.yaml) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/dbt-labs__dbt-mcp/Dockerfile) |
| 보안/정책 | 19 | [tests/unit/oauth/test_credentials_provider.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/oauth/test_credentials_provider.py)<br>[tests/unit/oauth/test_dbt_platform.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/oauth/test_dbt_platform.py)<br>[tests/unit/oauth/test_fastapi_app_pagination.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/oauth/test_fastapi_app_pagination.py)<br>[tests/unit/oauth/test_refresh.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/oauth/test_refresh.py)<br>[tests/unit/oauth/test_token_provider.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/oauth/test_token_provider.py)<br>[tests/unit/oauth/test_token_refresh_at_startup.py](../../../../sources/dbt-labs__dbt-mcp/tests/unit/oauth/test_token_refresh_at_startup.py) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/dbt-labs__dbt-mcp/AGENTS.md)<br>[CLAUDE.md](../../../../sources/dbt-labs__dbt-mcp/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/unit/mcp_server_metadata/__init__.py`, `tests/unit/mcp_server_metadata/test_tools.py`, `tests/unit/mcp/__init__.py`.
2. entrypoint를 따라 실행 흐름 확인: `ui/src/App.css`, `ui/src/App.tsx`, `ui/src/index.css`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tests/unit/tools/test_definitions.py`, `tests/unit/tools/test_disable_tools.py`.
4. retrieval/memory/indexing 확인: `ui/index.html`, `ui/src/index.css`, `examples/ai_sdk_agent/src/index.ts`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/env_vars.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A MCP Model Context Protocol server for interacting with dbt.. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, README.md, AGENTS.md, CLAUDE.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
