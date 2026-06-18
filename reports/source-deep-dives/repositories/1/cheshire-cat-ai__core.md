# cheshire-cat-ai/core 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

AI agent microservice

## 요약

- 조사 단위: `sources/cheshire-cat-ai__core` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 133 files, 49 directories, depth score 91, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=tests/agents/test_agent_form.py, tests/agents/test_agent_tools.py, src/cat/context.py이고, 의존성 단서는 openai, mcp, fastapi, pydantic, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | cheshire-cat-ai/core |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 3045 |
| Forks | 405 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/cheshire-cat-ai__core](../../../../sources/cheshire-cat-ai__core) |
| 기존 보고서 | [reports/global-trending/repositories/cheshire-cat-ai__core.md](../../../global-trending/repositories/cheshire-cat-ai__core.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 133 / 49 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .tmp_deactivated_workflows_github, readme, src, tests, tests_giga |
| 상위 확장자 | .py: 99, .md: 13, .txt: 6, .json: 4, (none): 3, .yml: 2, .html: 1, .jpeg: 1, .lock: 1, .pdf: 1, .svg: 1, .toml: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 44 |
| src | source boundary | 28 |
| readme | top-level component | 1 |
| tests_giga | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | ccat | ccat |


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
| agentRuntime | [tests/agents/test_agent_form.py](../../../../sources/cheshire-cat-ai__core/tests/agents/test_agent_form.py) | agentRuntime signal |
| agentRuntime | [tests/agents/test_agent_tools.py](../../../../sources/cheshire-cat-ai__core/tests/agents/test_agent_tools.py) | agentRuntime signal |
| agentRuntime | [src/cat/context.py](../../../../sources/cheshire-cat-ai__core/src/cat/context.py) | agentRuntime signal |
| agentRuntime | [src/cat/services/agents/base.py](../../../../sources/cheshire-cat-ai__core/src/cat/services/agents/base.py) | agentRuntime signal |
| entrypoints | [src/cat/main.py](../../../../sources/cheshire-cat-ai__core/src/cat/main.py) | entrypoints signal |
| entrypoints | [src/cat/protocols/model_context/server.py](../../../../sources/cheshire-cat-ai__core/src/cat/protocols/model_context/server.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/cheshire-cat-ai__core/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/cheshire-cat-ai__core/uv.lock) | config signal |
| config | [tests/mocks/mock_plugin/requirements.txt](../../../../sources/cheshire-cat-ai__core/tests/mocks/mock_plugin/requirements.txt) | config signal |
| config | [src/cat/scaffold/plugins/ui/requirements.txt](../../../../sources/cheshire-cat-ai__core/src/cat/scaffold/plugins/ui/requirements.txt) | config signal |
| eval | [tests_giga/test_ambient_context.py](../../../../sources/cheshire-cat-ai__core/tests_giga/test_ambient_context.py) | eval support |
| eval | [tests/__init__.py](../../../../sources/cheshire-cat-ai__core/tests/__init__.py) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [src/cat/main.py](../../../../sources/cheshire-cat-ai__core/src/cat/main.py)<br>[src/cat/protocols/model_context/server.py](../../../../sources/cheshire-cat-ai__core/src/cat/protocols/model_context/server.py) |
| agentRuntime | 8 | [tests/agents/test_agent_form.py](../../../../sources/cheshire-cat-ai__core/tests/agents/test_agent_form.py)<br>[tests/agents/test_agent_tools.py](../../../../sources/cheshire-cat-ai__core/tests/agents/test_agent_tools.py)<br>[src/cat/context.py](../../../../sources/cheshire-cat-ai__core/src/cat/context.py)<br>[src/cat/services/agents/base.py](../../../../sources/cheshire-cat-ai__core/src/cat/services/agents/base.py)<br>[src/cat/services/agents/default.py](../../../../sources/cheshire-cat-ai__core/src/cat/services/agents/default.py)<br>[src/cat/routes/agents.py](../../../../sources/cheshire-cat-ai__core/src/cat/routes/agents.py)<br>[src/cat/mad_hatter/decorators/hook.py](../../../../sources/cheshire-cat-ai__core/src/cat/mad_hatter/decorators/hook.py)<br>[src/cat/mad_hatter/decorators/tool.py](../../../../sources/cheshire-cat-ai__core/src/cat/mad_hatter/decorators/tool.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 4 | [tests/mocks/mock_plugin/requirements.txt](../../../../sources/cheshire-cat-ai__core/tests/mocks/mock_plugin/requirements.txt)<br>[src/cat/scaffold/plugins/ui/requirements.txt](../../../../sources/cheshire-cat-ai__core/src/cat/scaffold/plugins/ui/requirements.txt)<br>[src/cat/scaffold/plugins/llms/requirements.txt](../../../../sources/cheshire-cat-ai__core/src/cat/scaffold/plugins/llms/requirements.txt)<br>[src/cat/scaffold/plugins/chats/requirements.txt](../../../../sources/cheshire-cat-ai__core/src/cat/scaffold/plugins/chats/requirements.txt) |
| eval | 36 | [tests_giga/test_ambient_context.py](../../../../sources/cheshire-cat-ai__core/tests_giga/test_ambient_context.py)<br>[tests/__init__.py](../../../../sources/cheshire-cat-ai__core/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/cheshire-cat-ai__core/tests/conftest.py)<br>[tests/test_cat_utils.py](../../../../sources/cheshire-cat-ai__core/tests/test_cat_utils.py)<br>[tests/test_config.py](../../../../sources/cheshire-cat-ai__core/tests/test_config.py)<br>[tests/utils.py](../../../../sources/cheshire-cat-ai__core/tests/utils.py)<br>[tests/routes/test_custom_endpoints.py](../../../../sources/cheshire-cat-ai__core/tests/routes/test_custom_endpoints.py)<br>[tests/routes/test_routes_base.py](../../../../sources/cheshire-cat-ai__core/tests/routes/test_routes_base.py) |
| security | 11 | [tests/routes/auth/test_custom_auth_handler.py](../../../../sources/cheshire-cat-ai__core/tests/routes/auth/test_custom_auth_handler.py)<br>[tests/routes/auth/test_env_api_key.py](../../../../sources/cheshire-cat-ai__core/tests/routes/auth/test_env_api_key.py)<br>[tests/routes/auth/test_jwt.py](../../../../sources/cheshire-cat-ai__core/tests/routes/auth/test_jwt.py)<br>[tests/routes/auth/test_permissions_registry.py](../../../../sources/cheshire-cat-ai__core/tests/routes/auth/test_permissions_registry.py)<br>[src/cat/routes/auth/oauth.py](../../../../sources/cheshire-cat-ai__core/src/cat/routes/auth/oauth.py)<br>[src/cat/routes/auth/default_idp/idp.html](../../../../sources/cheshire-cat-ai__core/src/cat/routes/auth/default_idp/idp.html)<br>[src/cat/routes/auth/default_idp/idp.py](../../../../sources/cheshire-cat-ai__core/src/cat/routes/auth/default_idp/idp.py)<br>[src/cat/auth/__init__.py](../../../../sources/cheshire-cat-ai__core/src/cat/auth/__init__.py) |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 9 | [README.md](../../../../sources/cheshire-cat-ai__core/README.md)<br>[src/cat/scaffold/plugins/readme.md](../../../../sources/cheshire-cat-ai__core/src/cat/scaffold/plugins/readme.md)<br>[src/cat/scaffold/plugins/ui/README.md](../../../../sources/cheshire-cat-ai__core/src/cat/scaffold/plugins/ui/README.md)<br>[src/cat/scaffold/plugins/llms/README.md](../../../../sources/cheshire-cat-ai__core/src/cat/scaffold/plugins/llms/README.md)<br>[src/cat/scaffold/plugins/chats/README.md](../../../../sources/cheshire-cat-ai__core/src/cat/scaffold/plugins/chats/README.md)<br>[src/cat/scaffold/data/readme.md](../../../../sources/cheshire-cat-ai__core/src/cat/scaffold/data/readme.md)<br>[src/cat/scaffold/data/uploads/readme.md](../../../../sources/cheshire-cat-ai__core/src/cat/scaffold/data/uploads/readme.md)<br>[readme/cheshire-cat.jpeg](../../../../sources/cheshire-cat-ai__core/readme/cheshire-cat.jpeg) |
| config | 6 | [pyproject.toml](../../../../sources/cheshire-cat-ai__core/pyproject.toml)<br>[uv.lock](../../../../sources/cheshire-cat-ai__core/uv.lock)<br>[tests/mocks/mock_plugin/requirements.txt](../../../../sources/cheshire-cat-ai__core/tests/mocks/mock_plugin/requirements.txt)<br>[src/cat/scaffold/plugins/ui/requirements.txt](../../../../sources/cheshire-cat-ai__core/src/cat/scaffold/plugins/ui/requirements.txt)<br>[src/cat/scaffold/plugins/llms/requirements.txt](../../../../sources/cheshire-cat-ai__core/src/cat/scaffold/plugins/llms/requirements.txt)<br>[src/cat/scaffold/plugins/chats/requirements.txt](../../../../sources/cheshire-cat-ai__core/src/cat/scaffold/plugins/chats/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 36 | [tests_giga/test_ambient_context.py](../../../../sources/cheshire-cat-ai__core/tests_giga/test_ambient_context.py)<br>[tests/__init__.py](../../../../sources/cheshire-cat-ai__core/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/cheshire-cat-ai__core/tests/conftest.py)<br>[tests/test_cat_utils.py](../../../../sources/cheshire-cat-ai__core/tests/test_cat_utils.py)<br>[tests/test_config.py](../../../../sources/cheshire-cat-ai__core/tests/test_config.py)<br>[tests/utils.py](../../../../sources/cheshire-cat-ai__core/tests/utils.py) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 11 | [tests/routes/auth/test_custom_auth_handler.py](../../../../sources/cheshire-cat-ai__core/tests/routes/auth/test_custom_auth_handler.py)<br>[tests/routes/auth/test_env_api_key.py](../../../../sources/cheshire-cat-ai__core/tests/routes/auth/test_env_api_key.py)<br>[tests/routes/auth/test_jwt.py](../../../../sources/cheshire-cat-ai__core/tests/routes/auth/test_jwt.py)<br>[tests/routes/auth/test_permissions_registry.py](../../../../sources/cheshire-cat-ai__core/tests/routes/auth/test_permissions_registry.py)<br>[src/cat/routes/auth/oauth.py](../../../../sources/cheshire-cat-ai__core/src/cat/routes/auth/oauth.py)<br>[src/cat/routes/auth/default_idp/idp.html](../../../../sources/cheshire-cat-ai__core/src/cat/routes/auth/default_idp/idp.html) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/agents/test_agent_form.py`, `tests/agents/test_agent_tools.py`, `src/cat/context.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/cat/main.py`, `src/cat/protocols/model_context/server.py`.
3. agent/tool runtime 매핑: `tests/agents/test_agent_form.py`, `tests/agents/test_agent_tools.py`, `src/cat/context.py`.
4. test/eval 파일로 동작 검증: `tests_giga/test_ambient_context.py`, `tests/__init__.py`, `tests/conftest.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 AI agent microservice. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, openai, mcp이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
