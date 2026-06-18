# homeassistant-ai/ha-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

The Unofficial and Awesome Home Assistant MCP Server

## 요약

- 조사 단위: `sources/homeassistant-ai__ha-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 822 files, 131 directories, depth score 125, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/src/unit/test_tools_mcp_component.py, tests/src/e2e/workflows/services/test_ha_mcp_tools_refusal.py, tests/lab-setup/setup-ha-mcp.sh이고, 의존성 단서는 openai, mcp, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | homeassistant-ai/ha-mcp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 3449 |
| Forks | 138 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/homeassistant-ai__ha-mcp](../../../../sources/homeassistant-ai__ha-mcp) |
| 기존 보고서 | [reports/global-trending/repositories/homeassistant-ai__ha-mcp.md](../../../global-trending/repositories/homeassistant-ai__ha-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 822 / 131 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .claude, .gemini, .github, custom_components, docs, homeassistant-addon, homeassistant-addon-dev, homeassistant-addon-webhook-proxy, packaging, rules, scripts, site, src, templates, tests |
| 상위 확장자 | .py: 533, .md: 44, .yml: 44, .yaml: 43, .json: 24, .svg: 24, .png: 23, (none): 21, .astro: 12, .mjs: 6, .sh: 4, .js: 3 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 89 |
| src | source boundary | 77 |
| docs | documentation surface | 3 |
| .github | ci surface | 1 |
| custom_components | top-level component | 1 |
| homeassistant-addon | top-level component | 1 |
| homeassistant-addon-dev | top-level component | 1 |
| homeassistant-addon-webhook-proxy | source boundary | 1 |
| packaging | top-level component | 1 |
| rules | top-level component | 1 |
| scripts | top-level component | 1 |
| site | documentation surface | 1 |
| templates | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | ha-mcp | ha-mcp |
| test | pyproject.toml | ha-mcp-smoke-test | ha-mcp-smoke-test |
| test | pyproject.toml | hamcp-test-env | hamcp-test-env |
| utility | pyproject.toml | ha-mcp-web | ha-mcp-web |
| utility | pyproject.toml | ha-mcp-sse | ha-mcp-sse |
| utility | pyproject.toml | ha-mcp-oauth | ha-mcp-oauth |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
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
| mcp | [tests/src/unit/test_tools_mcp_component.py](../../../../sources/homeassistant-ai__ha-mcp/tests/src/unit/test_tools_mcp_component.py) | mcp signal |
| mcp | [tests/src/e2e/workflows/services/test_ha_mcp_tools_refusal.py](../../../../sources/homeassistant-ai__ha-mcp/tests/src/e2e/workflows/services/test_ha_mcp_tools_refusal.py) | mcp signal |
| mcp | [tests/lab-setup/setup-ha-mcp.sh](../../../../sources/homeassistant-ai__ha-mcp/tests/lab-setup/setup-ha-mcp.sh) | mcp signal |
| mcp | [src/ha_mcp/__init__.py](../../../../sources/homeassistant-ai__ha-mcp/src/ha_mcp/__init__.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/homeassistant-ai__ha-mcp/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/AGENTS.md](../../../../sources/homeassistant-ai__ha-mcp/tests/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/uat/AGENTS.md](../../../../sources/homeassistant-ai__ha-mcp/tests/uat/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/src/e2e/tools/__init__.py](../../../../sources/homeassistant-ai__ha-mcp/tests/src/e2e/tools/__init__.py) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/homeassistant-ai__ha-mcp/server.json) | entrypoints signal |
| entrypoints | [tests/haos_image_build/screenshot_engine_mock/server.py](../../../../sources/homeassistant-ai__ha-mcp/tests/haos_image_build/screenshot_engine_mock/server.py) | entrypoints signal |
| entrypoints | [src/ha_mcp/__main__.py](../../../../sources/homeassistant-ai__ha-mcp/src/ha_mcp/__main__.py) | entrypoints signal |
| entrypoints | [src/ha_mcp/server.py](../../../../sources/homeassistant-ai__ha-mcp/src/ha_mcp/server.py) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [server.json](../../../../sources/homeassistant-ai__ha-mcp/server.json)<br>[tests/haos_image_build/screenshot_engine_mock/server.py](../../../../sources/homeassistant-ai__ha-mcp/tests/haos_image_build/screenshot_engine_mock/server.py)<br>[src/ha_mcp/__main__.py](../../../../sources/homeassistant-ai__ha-mcp/src/ha_mcp/__main__.py)<br>[src/ha_mcp/server.py](../../../../sources/homeassistant-ai__ha-mcp/src/ha_mcp/server.py) |
| agentRuntime | 89 | [AGENTS.md](../../../../sources/homeassistant-ai__ha-mcp/AGENTS.md)<br>[tests/AGENTS.md](../../../../sources/homeassistant-ai__ha-mcp/tests/AGENTS.md)<br>[tests/uat/AGENTS.md](../../../../sources/homeassistant-ai__ha-mcp/tests/uat/AGENTS.md)<br>[tests/src/e2e/tools/__init__.py](../../../../sources/homeassistant-ai__ha-mcp/tests/src/e2e/tools/__init__.py)<br>[tests/src/e2e/tools/test_bm25_fuzzy_search.py](../../../../sources/homeassistant-ai__ha-mcp/tests/src/e2e/tools/test_bm25_fuzzy_search.py)<br>[tests/src/e2e/tools/test_create_custom_tool.py](../../../../sources/homeassistant-ai__ha-mcp/tests/src/e2e/tools/test_create_custom_tool.py)<br>[tests/src/e2e/tools/test_dashboard_screenshot_sidecar.py](../../../../sources/homeassistant-ai__ha-mcp/tests/src/e2e/tools/test_dashboard_screenshot_sidecar.py)<br>[tests/src/e2e/tools/test_deep_search_bulk_fetch.py](../../../../sources/homeassistant-ai__ha-mcp/tests/src/e2e/tools/test_deep_search_bulk_fetch.py) |
| mcp | 134 | [tests/src/unit/test_tools_mcp_component.py](../../../../sources/homeassistant-ai__ha-mcp/tests/src/unit/test_tools_mcp_component.py)<br>[tests/src/e2e/workflows/services/test_ha_mcp_tools_refusal.py](../../../../sources/homeassistant-ai__ha-mcp/tests/src/e2e/workflows/services/test_ha_mcp_tools_refusal.py)<br>[tests/lab-setup/setup-ha-mcp.sh](../../../../sources/homeassistant-ai__ha-mcp/tests/lab-setup/setup-ha-mcp.sh)<br>[src/ha_mcp/__init__.py](../../../../sources/homeassistant-ai__ha-mcp/src/ha_mcp/__init__.py)<br>[src/ha_mcp/__main__.py](../../../../sources/homeassistant-ai__ha-mcp/src/ha_mcp/__main__.py)<br>[src/ha_mcp/_pypi_marker](../../../../sources/homeassistant-ai__ha-mcp/src/ha_mcp/_pypi_marker)<br>[src/ha_mcp/_version.py](../../../../sources/homeassistant-ai__ha-mcp/src/ha_mcp/_version.py)<br>[src/ha_mcp/backup_manager.py](../../../../sources/homeassistant-ai__ha-mcp/src/ha_mcp/backup_manager.py) |
| retrieval | 1 | [site/src/pages/index.astro](../../../../sources/homeassistant-ai__ha-mcp/site/src/pages/index.astro) |
| spec | 2 | [tests/haos_image_build/requirements.txt](../../../../sources/homeassistant-ai__ha-mcp/tests/haos_image_build/requirements.txt)<br>[docs/superpowers/specs/2026-05-21-1288-auto-backup-design.md](../../../../sources/homeassistant-ai__ha-mcp/docs/superpowers/specs/2026-05-21-1288-auto-backup-design.md) |
| eval | 512 | [tests/__init__.py](../../../../sources/homeassistant-ai__ha-mcp/tests/__init__.py)<br>[tests/.env.test](../../../../sources/homeassistant-ai__ha-mcp/tests/.env.test)<br>[tests/AGENTS.md](../../../../sources/homeassistant-ai__ha-mcp/tests/AGENTS.md)<br>[tests/pytest.ini](../../../../sources/homeassistant-ai__ha-mcp/tests/pytest.ini)<br>[tests/README.md](../../../../sources/homeassistant-ai__ha-mcp/tests/README.md)<br>[tests/test_constants.py](../../../../sources/homeassistant-ai__ha-mcp/tests/test_constants.py)<br>[tests/test_env_manager.py](../../../../sources/homeassistant-ai__ha-mcp/tests/test_env_manager.py)<br>[tests/uat/_inprocess.py](../../../../sources/homeassistant-ai__ha-mcp/tests/uat/_inprocess.py) |
| security | 35 | [SECURITY.md](../../../../sources/homeassistant-ai__ha-mcp/SECURITY.md)<br>[tests/src/unit/test_caller_token_auth.py](../../../../sources/homeassistant-ai__ha-mcp/tests/src/unit/test_caller_token_auth.py)<br>[tests/src/unit/test_classify_sandbox_error.py](../../../../sources/homeassistant-ai__ha-mcp/tests/src/unit/test_classify_sandbox_error.py)<br>[tests/src/unit/test_oauth_metadata_http.py](../../../../sources/homeassistant-ai__ha-mcp/tests/src/unit/test_oauth_metadata_http.py)<br>[tests/src/unit/test_oauth.py](../../../../sources/homeassistant-ai__ha-mcp/tests/src/unit/test_oauth.py)<br>[tests/src/unit/test_python_sandbox.py](../../../../sources/homeassistant-ai__ha-mcp/tests/src/unit/test_python_sandbox.py)<br>[tests/src/unit/test_server_policy_wiring.py](../../../../sources/homeassistant-ai__ha-mcp/tests/src/unit/test_server_policy_wiring.py)<br>[tests/src/unit/policy/__init__.py](../../../../sources/homeassistant-ai__ha-mcp/tests/src/unit/policy/__init__.py) |
| ci | 29 | [.github/workflows/_build-and-release.yml](../../../../sources/homeassistant-ai__ha-mcp/.github/workflows/_build-and-release.yml)<br>[.github/workflows/_update-addon-config.yml](../../../../sources/homeassistant-ai__ha-mcp/.github/workflows/_update-addon-config.yml)<br>[.github/workflows/addon-publish-dev.yml](../../../../sources/homeassistant-ai__ha-mcp/.github/workflows/addon-publish-dev.yml)<br>[.github/workflows/addon-publish.yml](../../../../sources/homeassistant-ai__ha-mcp/.github/workflows/addon-publish.yml)<br>[.github/workflows/build-binary.yml](../../../../sources/homeassistant-ai__ha-mcp/.github/workflows/build-binary.yml)<br>[.github/workflows/build-haos-test-image.yml](../../../../sources/homeassistant-ai__ha-mcp/.github/workflows/build-haos-test-image.yml)<br>[.github/workflows/close-inactive-issues.yml](../../../../sources/homeassistant-ai__ha-mcp/.github/workflows/close-inactive-issues.yml)<br>[.github/workflows/close-needs-info.yml](../../../../sources/homeassistant-ai__ha-mcp/.github/workflows/close-needs-info.yml) |
| container | 7 | [docker-compose.screenshot.yml](../../../../sources/homeassistant-ai__ha-mcp/docker-compose.screenshot.yml)<br>[docker-compose.yml](../../../../sources/homeassistant-ai__ha-mcp/docker-compose.yml)<br>[Dockerfile](../../../../sources/homeassistant-ai__ha-mcp/Dockerfile)<br>[tests/haos_image_build/screenshot_engine_mock/Dockerfile](../../../../sources/homeassistant-ai__ha-mcp/tests/haos_image_build/screenshot_engine_mock/Dockerfile)<br>[homeassistant-addon-webhook-proxy/Dockerfile](../../../../sources/homeassistant-ai__ha-mcp/homeassistant-addon-webhook-proxy/Dockerfile)<br>[homeassistant-addon-dev/Dockerfile](../../../../sources/homeassistant-ai__ha-mcp/homeassistant-addon-dev/Dockerfile)<br>[homeassistant-addon/Dockerfile](../../../../sources/homeassistant-ai__ha-mcp/homeassistant-addon/Dockerfile) |
| instruction | 5 | [AGENTS.md](../../../../sources/homeassistant-ai__ha-mcp/AGENTS.md)<br>[tests/AGENTS.md](../../../../sources/homeassistant-ai__ha-mcp/tests/AGENTS.md)<br>[tests/uat/AGENTS.md](../../../../sources/homeassistant-ai__ha-mcp/tests/uat/AGENTS.md)<br>[site/AGENTS.md](../../../../sources/homeassistant-ai__ha-mcp/site/AGENTS.md)<br>[site/src/data/AGENTS.md](../../../../sources/homeassistant-ai__ha-mcp/site/src/data/AGENTS.md) |
| docs | 70 | [README.md](../../../../sources/homeassistant-ai__ha-mcp/README.md)<br>[tests/README.md](../../../../sources/homeassistant-ai__ha-mcp/tests/README.md)<br>[tests/uat/README.md](../../../../sources/homeassistant-ai__ha-mcp/tests/uat/README.md)<br>[tests/uat/stories/README.md](../../../../sources/homeassistant-ai__ha-mcp/tests/uat/stories/README.md)<br>[tests/lab-setup/README.md](../../../../sources/homeassistant-ai__ha-mcp/tests/lab-setup/README.md)<br>[tests/initial_test_state/custom_components/hacs/validate/README.md](../../../../sources/homeassistant-ai__ha-mcp/tests/initial_test_state/custom_components/hacs/validate/README.md)<br>[tests/haos_image_build/README.md](../../../../sources/homeassistant-ai__ha-mcp/tests/haos_image_build/README.md)<br>[site/.gitignore](../../../../sources/homeassistant-ai__ha-mcp/site/.gitignore) |
| config | 6 | [pyproject.toml](../../../../sources/homeassistant-ai__ha-mcp/pyproject.toml)<br>[uv.lock](../../../../sources/homeassistant-ai__ha-mcp/uv.lock)<br>[tests/js/package.json](../../../../sources/homeassistant-ai__ha-mcp/tests/js/package.json)<br>[tests/haos_image_build/requirements.txt](../../../../sources/homeassistant-ai__ha-mcp/tests/haos_image_build/requirements.txt)<br>[site/package.json](../../../../sources/homeassistant-ai__ha-mcp/site/package.json)<br>[site/tsconfig.json](../../../../sources/homeassistant-ai__ha-mcp/site/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 512 | [tests/__init__.py](../../../../sources/homeassistant-ai__ha-mcp/tests/__init__.py)<br>[tests/.env.test](../../../../sources/homeassistant-ai__ha-mcp/tests/.env.test)<br>[tests/AGENTS.md](../../../../sources/homeassistant-ai__ha-mcp/tests/AGENTS.md)<br>[tests/pytest.ini](../../../../sources/homeassistant-ai__ha-mcp/tests/pytest.ini)<br>[tests/README.md](../../../../sources/homeassistant-ai__ha-mcp/tests/README.md)<br>[tests/test_constants.py](../../../../sources/homeassistant-ai__ha-mcp/tests/test_constants.py) |
| CI workflow | 29 | [.github/workflows/_build-and-release.yml](../../../../sources/homeassistant-ai__ha-mcp/.github/workflows/_build-and-release.yml)<br>[.github/workflows/_update-addon-config.yml](../../../../sources/homeassistant-ai__ha-mcp/.github/workflows/_update-addon-config.yml)<br>[.github/workflows/addon-publish-dev.yml](../../../../sources/homeassistant-ai__ha-mcp/.github/workflows/addon-publish-dev.yml)<br>[.github/workflows/addon-publish.yml](../../../../sources/homeassistant-ai__ha-mcp/.github/workflows/addon-publish.yml)<br>[.github/workflows/build-binary.yml](../../../../sources/homeassistant-ai__ha-mcp/.github/workflows/build-binary.yml)<br>[.github/workflows/build-haos-test-image.yml](../../../../sources/homeassistant-ai__ha-mcp/.github/workflows/build-haos-test-image.yml) |
| 컨테이너/배포 | 7 | [docker-compose.screenshot.yml](../../../../sources/homeassistant-ai__ha-mcp/docker-compose.screenshot.yml)<br>[docker-compose.yml](../../../../sources/homeassistant-ai__ha-mcp/docker-compose.yml)<br>[Dockerfile](../../../../sources/homeassistant-ai__ha-mcp/Dockerfile)<br>[tests/haos_image_build/screenshot_engine_mock/Dockerfile](../../../../sources/homeassistant-ai__ha-mcp/tests/haos_image_build/screenshot_engine_mock/Dockerfile)<br>[homeassistant-addon-webhook-proxy/Dockerfile](../../../../sources/homeassistant-ai__ha-mcp/homeassistant-addon-webhook-proxy/Dockerfile)<br>[homeassistant-addon-dev/Dockerfile](../../../../sources/homeassistant-ai__ha-mcp/homeassistant-addon-dev/Dockerfile) |
| 보안/정책 | 35 | [SECURITY.md](../../../../sources/homeassistant-ai__ha-mcp/SECURITY.md)<br>[tests/src/unit/test_caller_token_auth.py](../../../../sources/homeassistant-ai__ha-mcp/tests/src/unit/test_caller_token_auth.py)<br>[tests/src/unit/test_classify_sandbox_error.py](../../../../sources/homeassistant-ai__ha-mcp/tests/src/unit/test_classify_sandbox_error.py)<br>[tests/src/unit/test_oauth_metadata_http.py](../../../../sources/homeassistant-ai__ha-mcp/tests/src/unit/test_oauth_metadata_http.py)<br>[tests/src/unit/test_oauth.py](../../../../sources/homeassistant-ai__ha-mcp/tests/src/unit/test_oauth.py)<br>[tests/src/unit/test_python_sandbox.py](../../../../sources/homeassistant-ai__ha-mcp/tests/src/unit/test_python_sandbox.py) |
| 에이전트 지시문 | 5 | [AGENTS.md](../../../../sources/homeassistant-ai__ha-mcp/AGENTS.md)<br>[tests/AGENTS.md](../../../../sources/homeassistant-ai__ha-mcp/tests/AGENTS.md)<br>[tests/uat/AGENTS.md](../../../../sources/homeassistant-ai__ha-mcp/tests/uat/AGENTS.md)<br>[site/AGENTS.md](../../../../sources/homeassistant-ai__ha-mcp/site/AGENTS.md)<br>[site/src/data/AGENTS.md](../../../../sources/homeassistant-ai__ha-mcp/site/src/data/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/src/unit/test_tools_mcp_component.py`, `tests/src/e2e/workflows/services/test_ha_mcp_tools_refusal.py`, `tests/lab-setup/setup-ha-mcp.sh`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`, `tests/haos_image_build/screenshot_engine_mock/server.py`, `src/ha_mcp/__main__.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tests/AGENTS.md`, `tests/uat/AGENTS.md`.
4. retrieval/memory/indexing 확인: `site/src/pages/index.astro`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/.env.test`, `tests/AGENTS.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 The Unofficial and Awesome Home Assistant MCP Server. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, README.md, AGENTS.md이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
