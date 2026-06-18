# jacob-bd/notebooklm-mcp-cli 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Programmatic access to Google NotebookLM — via command-line interface (CLI), Model Context Protocol (MCP) server, and AI agent skills.

## 요약

- 조사 단위: `sources/jacob-bd__notebooklm-mcp-cli` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 205 files, 22 directories, depth score 98, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test_mcp_auth_studio_failures.py, tests/test_mcp_e2e.py, tests/test_mcp_file_upload.py이고, 의존성 단서는 mcp, pydantic, typer, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | jacob-bd/notebooklm-mcp-cli |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 4941 |
| Forks | 772 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/jacob-bd__notebooklm-mcp-cli](../../../../sources/jacob-bd__notebooklm-mcp-cli) |
| 기존 보고서 | [reports/global-trending/repositories/jacob-bd__notebooklm-mcp-cli.md](../../../global-trending/repositories/jacob-bd__notebooklm-mcp-cli.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 205 / 22 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, desktop-extension, docs, scripts, src, tests |
| 상위 확장자 | .py: 171, .md: 23, .yml: 4, (none): 2, .jpg: 1, .json: 1, .lock: 1, .toml: 1, .txt: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 54 |
| src | source boundary | 51 |
| docs | documentation surface | 14 |
| .github | ci surface | 1 |
| desktop-extension | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | nlm | nlm |
| utility | pyproject.toml | notebooklm-mcp | notebooklm-mcp |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | typer |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [tests/test_mcp_auth_studio_failures.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_mcp_auth_studio_failures.py) | mcp signal |
| mcp | [tests/test_mcp_e2e.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_mcp_e2e.py) | mcp signal |
| mcp | [tests/test_mcp_file_upload.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_mcp_file_upload.py) | mcp signal |
| mcp | [tests/test_mcp_sources.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_mcp_sources.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/AGENTS.md) | agentRuntime signal |
| agentRuntime | [src/notebooklm_tools/mcp/tools/__init__.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [src/notebooklm_tools/mcp/tools/_utils.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/tools/_utils.py) | agentRuntime signal |
| agentRuntime | [src/notebooklm_tools/mcp/tools/auth.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/tools/auth.py) | agentRuntime signal |
| entrypoints | [src/notebooklm_tools/mcp/server.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/server.py) | entrypoints signal |
| entrypoints | [src/notebooklm_tools/mcp/tools/server.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/tools/server.py) | entrypoints signal |
| entrypoints | [src/notebooklm_tools/cli/main.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/cli/main.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/CLAUDE.md) | instruction signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [src/notebooklm_tools/mcp/server.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/server.py)<br>[src/notebooklm_tools/mcp/tools/server.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/tools/server.py)<br>[src/notebooklm_tools/cli/main.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/cli/main.py) |
| agentRuntime | 23 | [AGENTS.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/AGENTS.md)<br>[src/notebooklm_tools/mcp/tools/__init__.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/tools/__init__.py)<br>[src/notebooklm_tools/mcp/tools/_utils.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/tools/_utils.py)<br>[src/notebooklm_tools/mcp/tools/auth.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/tools/auth.py)<br>[src/notebooklm_tools/mcp/tools/batch.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/tools/batch.py)<br>[src/notebooklm_tools/mcp/tools/chat.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/tools/chat.py)<br>[src/notebooklm_tools/mcp/tools/cross_notebook.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/tools/cross_notebook.py)<br>[src/notebooklm_tools/mcp/tools/downloads.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/tools/downloads.py) |
| mcp | 28 | [tests/test_mcp_auth_studio_failures.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_mcp_auth_studio_failures.py)<br>[tests/test_mcp_e2e.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_mcp_e2e.py)<br>[tests/test_mcp_file_upload.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_mcp_file_upload.py)<br>[tests/test_mcp_sources.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_mcp_sources.py)<br>[tests/test_mcp_studio.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_mcp_studio.py)<br>[src/notebooklm_tools/mcp/__init__.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/__init__.py)<br>[src/notebooklm_tools/mcp/server.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/server.py)<br>[src/notebooklm_tools/mcp/tools/__init__.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/src/notebooklm_tools/mcp/tools/__init__.py) |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 72 | [tests/test_api_client.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_api_client.py)<br>[tests/test_auth_browser.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_auth_browser.py)<br>[tests/test_auth_migration.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_auth_migration.py)<br>[tests/test_cdp_proxy_bypass.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_cdp_proxy_bypass.py)<br>[tests/test_cdp_url_check.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_cdp_url_check.py)<br>[tests/test_coerce_list.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_coerce_list.py)<br>[tests/test_cookie_parsing.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_cookie_parsing.py)<br>[tests/test_download_integration.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_download_integration.py) |
| security | 12 | [tests/test_auth_browser.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_auth_browser.py)<br>[tests/test_auth_migration.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_auth_migration.py)<br>[tests/test_mcp_auth_studio_failures.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_mcp_auth_studio_failures.py)<br>[tests/test_profile_aware_headless_auth.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_profile_aware_headless_auth.py)<br>[tests/services/test_auth_health.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/services/test_auth_health.py)<br>[tests/services/test_auth_service.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/services/test_auth_service.py)<br>[tests/core/test_auth_check.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/core/test_auth_check.py)<br>[tests/core/test_auth_guard.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/core/test_auth_guard.py) |
| ci | 4 | [.github/workflows/lint-test.yml](../../../../sources/jacob-bd__notebooklm-mcp-cli/.github/workflows/lint-test.yml)<br>[.github/workflows/publish.yml](../../../../sources/jacob-bd__notebooklm-mcp-cli/.github/workflows/publish.yml)<br>[.github/workflows/release-gate.yml](../../../../sources/jacob-bd__notebooklm-mcp-cli/.github/workflows/release-gate.yml)<br>[.github/workflows/version-check.yml](../../../../sources/jacob-bd__notebooklm-mcp-cli/.github/workflows/version-check.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 3 | [AGENTS.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/AGENTS.md)<br>[CLAUDE.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/CLAUDE.md)<br>[GEMINI.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/GEMINI.md) |
| docs | 12 | [README.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/README.md)<br>[docs/API_REFERENCE.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/docs/API_REFERENCE.md)<br>[docs/AUTHENTICATION.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/docs/AUTHENTICATION.md)<br>[docs/CLI_GUIDE.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/docs/CLI_GUIDE.md)<br>[docs/FILE_UPLOAD_IMPLEMENTATION.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/docs/FILE_UPLOAD_IMPLEMENTATION.md)<br>[docs/GETTING_STARTED.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/docs/GETTING_STARTED.md)<br>[docs/KNOWN_ISSUES.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/docs/KNOWN_ISSUES.md)<br>[docs/MCP_CLI_TEST_PLAN.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/docs/MCP_CLI_TEST_PLAN.md) |
| config | 2 | [pyproject.toml](../../../../sources/jacob-bd__notebooklm-mcp-cli/pyproject.toml)<br>[uv.lock](../../../../sources/jacob-bd__notebooklm-mcp-cli/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 72 | [tests/test_api_client.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_api_client.py)<br>[tests/test_auth_browser.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_auth_browser.py)<br>[tests/test_auth_migration.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_auth_migration.py)<br>[tests/test_cdp_proxy_bypass.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_cdp_proxy_bypass.py)<br>[tests/test_cdp_url_check.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_cdp_url_check.py)<br>[tests/test_coerce_list.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_coerce_list.py) |
| CI workflow | 4 | [.github/workflows/lint-test.yml](../../../../sources/jacob-bd__notebooklm-mcp-cli/.github/workflows/lint-test.yml)<br>[.github/workflows/publish.yml](../../../../sources/jacob-bd__notebooklm-mcp-cli/.github/workflows/publish.yml)<br>[.github/workflows/release-gate.yml](../../../../sources/jacob-bd__notebooklm-mcp-cli/.github/workflows/release-gate.yml)<br>[.github/workflows/version-check.yml](../../../../sources/jacob-bd__notebooklm-mcp-cli/.github/workflows/version-check.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 12 | [tests/test_auth_browser.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_auth_browser.py)<br>[tests/test_auth_migration.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_auth_migration.py)<br>[tests/test_mcp_auth_studio_failures.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_mcp_auth_studio_failures.py)<br>[tests/test_profile_aware_headless_auth.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/test_profile_aware_headless_auth.py)<br>[tests/services/test_auth_health.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/services/test_auth_health.py)<br>[tests/services/test_auth_service.py](../../../../sources/jacob-bd__notebooklm-mcp-cli/tests/services/test_auth_service.py) |
| 에이전트 지시문 | 3 | [AGENTS.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/AGENTS.md)<br>[CLAUDE.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/CLAUDE.md)<br>[GEMINI.md](../../../../sources/jacob-bd__notebooklm-mcp-cli/GEMINI.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/test_mcp_auth_studio_failures.py`, `tests/test_mcp_e2e.py`, `tests/test_mcp_file_upload.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/notebooklm_tools/mcp/server.py`, `src/notebooklm_tools/mcp/tools/server.py`, `src/notebooklm_tools/cli/main.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `src/notebooklm_tools/mcp/tools/__init__.py`, `src/notebooklm_tools/mcp/tools/_utils.py`.
4. test/eval 파일로 동작 검증: `tests/test_api_client.py`, `tests/test_auth_browser.py`, `tests/test_auth_migration.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Programmatic access to Google NotebookLM — via command line interface CLI , Model Context Protocol MCP server, and AI ag. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
