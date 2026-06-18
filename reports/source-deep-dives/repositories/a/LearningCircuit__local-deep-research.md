# LearningCircuit/local-deep-research 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

~95% on SimpleQA (e.g. Qwen3.6-27B on a 3090). Supports all local and cloud LLMs (llama.cpp, Ollama, Google, ...). 10+ search engines - arXiv, PubMed, your private documents. Everything Local & Encrypted.

## 요약

- 조사 단위: `sources/LearningCircuit__local-deep-research` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 3,020 files, 348 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/local_deep_research/web_search_engines/rate_limiting/__main__.py, src/local_deep_research/settings/env_definitions/server.py, src/local_deep_research/mcp/__main__.py이고, 의존성 단서는 openai, anthropic, mcp, langchain, express, vscode, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | LearningCircuit/local-deep-research |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | korea |
| Language | Python |
| Stars | 8493 |
| Forks | 743 |
| License | MIT |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/LearningCircuit__local-deep-research](../../../../sources/LearningCircuit__local-deep-research) |
| 기존 보고서 | [reports/global-trending/repositories/LearningCircuit__local-deep-research.md](../../../global-trending/repositories/LearningCircuit__local-deep-research.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 3020 / 348 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .github, .pre-commit-hooks, .semgrep, .zap, changelog.d, community_benchmark_results, cookiecutter-docker, docs, examples, scripts, src, tests, unraid-templates |
| 상위 확장자 | .py: 2152, .js: 350, .md: 228, .yml: 79, .css: 60, .json: 45, .html: 44, .sh: 20, .yaml: 9, .jinja2: 8, (none): 8, .png: 4 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 204 |
| src | source boundary | 36 |
| docs | documentation surface | 16 |
| examples/api_usage | examples workspace | 4 |
| examples/benchmarks | examples workspace | 3 |
| examples/elasticsearch | examples workspace | 2 |
| .github | ci surface | 1 |
| changelog.d | top-level component | 1 |
| community_benchmark_results | validation surface | 1 |
| cookiecutter-docker | documentation surface | 1 |
| examples | top-level component | 1 |
| examples/llm_integration | examples workspace | 1 |
| examples/optimization | examples workspace | 1 |
| scripts | top-level component | 1 |
| unraid-templates | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | vite |
| serve-dev | package.json | build | vite build |
| serve-dev | package.json | preview | vite preview |
| utility | package.json | update | npm update |
| utility | package.json | audit | npm audit |
| utility | package.json | audit-fix | npm audit fix |
| quality | package.json | security-check | npm audit && npm outdated |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| test | package.json | test:coverage | vitest run --coverage |
| utility | pyproject.toml | ldr-web | ldr-web |
| utility | pyproject.toml | ldr-mcp | ldr-mcp |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | langchain |
| vectorStores | faiss |
| modelRuntime | torch, transformers, ollama, llama |
| webRuntime | express |
| developerSurface | vscode, click |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [src/local_deep_research/web_search_engines/rate_limiting/__main__.py](../../../../sources/LearningCircuit__local-deep-research/src/local_deep_research/web_search_engines/rate_limiting/__main__.py) | entrypoints signal |
| entrypoints | [src/local_deep_research/settings/env_definitions/server.py](../../../../sources/LearningCircuit__local-deep-research/src/local_deep_research/settings/env_definitions/server.py) | entrypoints signal |
| entrypoints | [src/local_deep_research/mcp/__main__.py](../../../../sources/LearningCircuit__local-deep-research/src/local_deep_research/mcp/__main__.py) | entrypoints signal |
| entrypoints | [src/local_deep_research/mcp/server.py](../../../../sources/LearningCircuit__local-deep-research/src/local_deep_research/mcp/server.py) | entrypoints signal |
| container | [docker-compose.gpu.override.yml](../../../../sources/LearningCircuit__local-deep-research/docker-compose.gpu.override.yml) | container signal |
| container | [docker-compose.unraid.yml](../../../../sources/LearningCircuit__local-deep-research/docker-compose.unraid.yml) | container signal |
| container | [docker-compose.yml](../../../../sources/LearningCircuit__local-deep-research/docker-compose.yml) | container signal |
| container | [Dockerfile](../../../../sources/LearningCircuit__local-deep-research/Dockerfile) | container signal |
| config | [package.json](../../../../sources/LearningCircuit__local-deep-research/package.json) | config signal |
| config | [pyproject.toml](../../../../sources/LearningCircuit__local-deep-research/pyproject.toml) | config signal |
| config | [tests/package.json](../../../../sources/LearningCircuit__local-deep-research/tests/package.json) | config signal |
| config | [tests/ui_tests/package.json](../../../../sources/LearningCircuit__local-deep-research/tests/ui_tests/package.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [src/local_deep_research/web_search_engines/rate_limiting/__main__.py](../../../../sources/LearningCircuit__local-deep-research/src/local_deep_research/web_search_engines/rate_limiting/__main__.py)<br>[src/local_deep_research/settings/env_definitions/server.py](../../../../sources/LearningCircuit__local-deep-research/src/local_deep_research/settings/env_definitions/server.py)<br>[src/local_deep_research/mcp/__main__.py](../../../../sources/LearningCircuit__local-deep-research/src/local_deep_research/mcp/__main__.py)<br>[src/local_deep_research/mcp/server.py](../../../../sources/LearningCircuit__local-deep-research/src/local_deep_research/mcp/server.py) |
| agentRuntime | 33 | [tests/js/components/context-overflow-shared.test.js](../../../../sources/LearningCircuit__local-deep-research/tests/js/components/context-overflow-shared.test.js)<br>[tests/js/components/context-overflow.test.js](../../../../sources/LearningCircuit__local-deep-research/tests/js/components/context-overflow.test.js)<br>[tests/hooks/__init__.py](../../../../sources/LearningCircuit__local-deep-research/tests/hooks/__init__.py)<br>[tests/hooks/test_check_css_class_prefix.py](../../../../sources/LearningCircuit__local-deep-research/tests/hooks/test_check_css_class_prefix.py)<br>[tests/hooks/test_check_datetime_timezone.py](../../../../sources/LearningCircuit__local-deep-research/tests/hooks/test_check_datetime_timezone.py)<br>[tests/hooks/test_check_deprecated_db.py](../../../../sources/LearningCircuit__local-deep-research/tests/hooks/test_check_deprecated_db.py)<br>[tests/hooks/test_check_deprecated_settings_wrapper.py](../../../../sources/LearningCircuit__local-deep-research/tests/hooks/test_check_deprecated_settings_wrapper.py)<br>[tests/hooks/test_check_env_vars.py](../../../../sources/LearningCircuit__local-deep-research/tests/hooks/test_check_env_vars.py) |
| mcp | 33 | [tests/security/test_egress_mcp_scope_gating.py](../../../../sources/LearningCircuit__local-deep-research/tests/security/test_egress_mcp_scope_gating.py)<br>[tests/performance/mcp/__init__.py](../../../../sources/LearningCircuit__local-deep-research/tests/performance/mcp/__init__.py)<br>[tests/performance/mcp/echo_server.py](../../../../sources/LearningCircuit__local-deep-research/tests/performance/mcp/echo_server.py)<br>[tests/performance/mcp/test_concurrent_mcp_calls.py](../../../../sources/LearningCircuit__local-deep-research/tests/performance/mcp/test_concurrent_mcp_calls.py)<br>[tests/performance/mcp/test_mcp_client_server_live.py](../../../../sources/LearningCircuit__local-deep-research/tests/performance/mcp/test_mcp_client_server_live.py)<br>[tests/mcp/__init__.py](../../../../sources/LearningCircuit__local-deep-research/tests/mcp/__init__.py)<br>[tests/mcp/conftest.py](../../../../sources/LearningCircuit__local-deep-research/tests/mcp/conftest.py)<br>[tests/mcp/test_additional_coverage.py](../../../../sources/LearningCircuit__local-deep-research/tests/mcp/test_additional_coverage.py) |
| retrieval | 49 | [tests/web_search_engines/test_local_embedding_manager.py](../../../../sources/LearningCircuit__local-deep-research/tests/web_search_engines/test_local_embedding_manager.py)<br>[tests/web_search_engines/engines/test_embedding_manager_coverage.py](../../../../sources/LearningCircuit__local-deep-research/tests/web_search_engines/engines/test_embedding_manager_coverage.py)<br>[tests/web_search_engines/engines/test_local_embedding_manager.py](../../../../sources/LearningCircuit__local-deep-research/tests/web_search_engines/engines/test_local_embedding_manager.py)<br>[tests/ui_tests/test_collections_auto_index.js](../../../../sources/LearningCircuit__local-deep-research/tests/ui_tests/test_collections_auto_index.js)<br>[tests/ui_tests/test_lib/index.js](../../../../sources/LearningCircuit__local-deep-research/tests/ui_tests/test_lib/index.js)<br>[tests/ui_tests/playwright/tests/embedding-settings-dropdown.spec.js](../../../../sources/LearningCircuit__local-deep-research/tests/ui_tests/playwright/tests/embedding-settings-dropdown.spec.js)<br>[tests/ui_tests/playwright/tests/helpers/embedding-settings-mocks.js](../../../../sources/LearningCircuit__local-deep-research/tests/ui_tests/playwright/tests/helpers/embedding-settings-mocks.js)<br>[tests/research_library/services/test_library_rag_service_coverage.py](../../../../sources/LearningCircuit__local-deep-research/tests/research_library/services/test_library_rag_service_coverage.py) |
| spec | 29 | [tests/ui_tests/playwright/tests/all-pages-mobile.spec.js](../../../../sources/LearningCircuit__local-deep-research/tests/ui_tests/playwright/tests/all-pages-mobile.spec.js)<br>[tests/ui_tests/playwright/tests/auth-pages-mobile.spec.js](../../../../sources/LearningCircuit__local-deep-research/tests/ui_tests/playwright/tests/auth-pages-mobile.spec.js)<br>[tests/ui_tests/playwright/tests/benchmark-page-mobile.spec.js](../../../../sources/LearningCircuit__local-deep-research/tests/ui_tests/playwright/tests/benchmark-page-mobile.spec.js)<br>[tests/ui_tests/playwright/tests/breakpoint-edge-cases.spec.js](../../../../sources/LearningCircuit__local-deep-research/tests/ui_tests/playwright/tests/breakpoint-edge-cases.spec.js)<br>[tests/ui_tests/playwright/tests/desktop-layout.spec.js](../../../../sources/LearningCircuit__local-deep-research/tests/ui_tests/playwright/tests/desktop-layout.spec.js)<br>[tests/ui_tests/playwright/tests/embedding-settings-dropdown.spec.js](../../../../sources/LearningCircuit__local-deep-research/tests/ui_tests/playwright/tests/embedding-settings-dropdown.spec.js)<br>[tests/ui_tests/playwright/tests/empty-states-mobile.spec.js](../../../../sources/LearningCircuit__local-deep-research/tests/ui_tests/playwright/tests/empty-states-mobile.spec.js)<br>[tests/ui_tests/playwright/tests/history-page-mobile.spec.js](../../../../sources/LearningCircuit__local-deep-research/tests/ui_tests/playwright/tests/history-page-mobile.spec.js) |
| eval | 1920 | [tests/__init__.py](../../../../sources/LearningCircuit__local-deep-research/tests/__init__.py)<br>[tests/CI_INTEGRATION.md](../../../../sources/LearningCircuit__local-deep-research/tests/CI_INTEGRATION.md)<br>[tests/conftest.py](../../../../sources/LearningCircuit__local-deep-research/tests/conftest.py)<br>[tests/download_stuff_for_local.py](../../../../sources/LearningCircuit__local-deep-research/tests/download_stuff_for_local.py)<br>[tests/mock_fixtures.py](../../../../sources/LearningCircuit__local-deep-research/tests/mock_fixtures.py)<br>[tests/mock_modules.py](../../../../sources/LearningCircuit__local-deep-research/tests/mock_modules.py)<br>[tests/package-lock.json](../../../../sources/LearningCircuit__local-deep-research/tests/package-lock.json)<br>[tests/package.json](../../../../sources/LearningCircuit__local-deep-research/tests/package.json) |
| security | 306 | [.safety-policy.yml](../../../../sources/LearningCircuit__local-deep-research/.safety-policy.yml)<br>[SECURITY.md](../../../../sources/LearningCircuit__local-deep-research/SECURITY.md)<br>[tests/test_wikipedia_url_security.py](../../../../sources/LearningCircuit__local-deep-research/tests/test_wikipedia_url_security.py)<br>[tests/web/routes/test_research_routes_policy.py](../../../../sources/LearningCircuit__local-deep-research/tests/web/routes/test_research_routes_policy.py)<br>[tests/web/routes/test_settings_policy_validators.py](../../../../sources/LearningCircuit__local-deep-research/tests/web/routes/test_settings_policy_validators.py)<br>[tests/web/routes/test_settings_routes_security.py](../../../../sources/LearningCircuit__local-deep-research/tests/web/routes/test_settings_routes_security.py)<br>[tests/web/auth/__init__.py](../../../../sources/LearningCircuit__local-deep-research/tests/web/auth/__init__.py)<br>[tests/web/auth/test_auth_coverage.py](../../../../sources/LearningCircuit__local-deep-research/tests/web/auth/test_auth_coverage.py) |
| ci | 72 | [tests/ci/__init__.py](../../../../sources/LearningCircuit__local-deep-research/tests/ci/__init__.py)<br>[tests/ci/test_release_gate_integrity.py](../../../../sources/LearningCircuit__local-deep-research/tests/ci/test_release_gate_integrity.py)<br>[scripts/ci/dump_url_map.py](../../../../sources/LearningCircuit__local-deep-research/scripts/ci/dump_url_map.py)<br>[scripts/ci/init_test_database.py](../../../../sources/LearningCircuit__local-deep-research/scripts/ci/init_test_database.py)<br>[docs/ci/workflow-status.md](../../../../sources/LearningCircuit__local-deep-research/docs/ci/workflow-status.md)<br>[.github/workflows/advanced-search-reminder.yml](../../../../sources/LearningCircuit__local-deep-research/.github/workflows/advanced-search-reminder.yml)<br>[.github/workflows/ai-code-reviewer.yml](../../../../sources/LearningCircuit__local-deep-research/.github/workflows/ai-code-reviewer.yml)<br>[.github/workflows/backwards-compatibility.yml](../../../../sources/LearningCircuit__local-deep-research/.github/workflows/backwards-compatibility.yml) |
| container | 8 | [docker-compose.gpu.override.yml](../../../../sources/LearningCircuit__local-deep-research/docker-compose.gpu.override.yml)<br>[docker-compose.unraid.yml](../../../../sources/LearningCircuit__local-deep-research/docker-compose.unraid.yml)<br>[docker-compose.yml](../../../../sources/LearningCircuit__local-deep-research/docker-compose.yml)<br>[Dockerfile](../../../../sources/LearningCircuit__local-deep-research/Dockerfile)<br>[examples/elasticsearch/docker-compose.yml](../../../../sources/LearningCircuit__local-deep-research/examples/elasticsearch/docker-compose.yml)<br>[docs/docker-compose-guide.md](../../../../sources/LearningCircuit__local-deep-research/docs/docker-compose-guide.md)<br>[docs/deployment/unraid.md](../../../../sources/LearningCircuit__local-deep-research/docs/deployment/unraid.md)<br>[cookiecutter-docker/{{cookiecutter.config_name}}/docker-compose.{{cookiecutter.config_name}}.yml](../../../../sources/LearningCircuit__local-deep-research/cookiecutter-docker/{{cookiecutter.config_name}}/docker-compose.{{cookiecutter.config_name}}.yml) |
| instruction | 0 | 명확하지 않음 |
| docs | 112 | [README.md](../../../../sources/LearningCircuit__local-deep-research/README.md)<br>[tests/README.md](../../../../sources/LearningCircuit__local-deep-research/tests/README.md)<br>[tests/ui_tests/README.md](../../../../sources/LearningCircuit__local-deep-research/tests/ui_tests/README.md)<br>[tests/ui_tests/playwright/README.md](../../../../sources/LearningCircuit__local-deep-research/tests/ui_tests/playwright/README.md)<br>[tests/ui_tests/mobile/README.md](../../../../sources/LearningCircuit__local-deep-research/tests/ui_tests/mobile/README.md)<br>[tests/performance/README.md](../../../../sources/LearningCircuit__local-deep-research/tests/performance/README.md)<br>[tests/langchain_integration/README.md](../../../../sources/LearningCircuit__local-deep-research/tests/langchain_integration/README.md)<br>[tests/infrastructure_tests/README.md](../../../../sources/LearningCircuit__local-deep-research/tests/infrastructure_tests/README.md) |
| config | 9 | [package.json](../../../../sources/LearningCircuit__local-deep-research/package.json)<br>[pyproject.toml](../../../../sources/LearningCircuit__local-deep-research/pyproject.toml)<br>[tests/package.json](../../../../sources/LearningCircuit__local-deep-research/tests/package.json)<br>[tests/ui_tests/package.json](../../../../sources/LearningCircuit__local-deep-research/tests/ui_tests/package.json)<br>[tests/ui_tests/playwright/package.json](../../../../sources/LearningCircuit__local-deep-research/tests/ui_tests/playwright/package.json)<br>[tests/puppeteer/package.json](../../../../sources/LearningCircuit__local-deep-research/tests/puppeteer/package.json)<br>[tests/infrastructure_tests/package.json](../../../../sources/LearningCircuit__local-deep-research/tests/infrastructure_tests/package.json)<br>[tests/api_tests_with_login/package.json](../../../../sources/LearningCircuit__local-deep-research/tests/api_tests_with_login/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1920 | [tests/__init__.py](../../../../sources/LearningCircuit__local-deep-research/tests/__init__.py)<br>[tests/CI_INTEGRATION.md](../../../../sources/LearningCircuit__local-deep-research/tests/CI_INTEGRATION.md)<br>[tests/conftest.py](../../../../sources/LearningCircuit__local-deep-research/tests/conftest.py)<br>[tests/download_stuff_for_local.py](../../../../sources/LearningCircuit__local-deep-research/tests/download_stuff_for_local.py)<br>[tests/mock_fixtures.py](../../../../sources/LearningCircuit__local-deep-research/tests/mock_fixtures.py)<br>[tests/mock_modules.py](../../../../sources/LearningCircuit__local-deep-research/tests/mock_modules.py) |
| CI workflow | 72 | [tests/ci/__init__.py](../../../../sources/LearningCircuit__local-deep-research/tests/ci/__init__.py)<br>[tests/ci/test_release_gate_integrity.py](../../../../sources/LearningCircuit__local-deep-research/tests/ci/test_release_gate_integrity.py)<br>[scripts/ci/dump_url_map.py](../../../../sources/LearningCircuit__local-deep-research/scripts/ci/dump_url_map.py)<br>[scripts/ci/init_test_database.py](../../../../sources/LearningCircuit__local-deep-research/scripts/ci/init_test_database.py)<br>[docs/ci/workflow-status.md](../../../../sources/LearningCircuit__local-deep-research/docs/ci/workflow-status.md)<br>[.github/workflows/advanced-search-reminder.yml](../../../../sources/LearningCircuit__local-deep-research/.github/workflows/advanced-search-reminder.yml) |
| 컨테이너/배포 | 8 | [docker-compose.gpu.override.yml](../../../../sources/LearningCircuit__local-deep-research/docker-compose.gpu.override.yml)<br>[docker-compose.unraid.yml](../../../../sources/LearningCircuit__local-deep-research/docker-compose.unraid.yml)<br>[docker-compose.yml](../../../../sources/LearningCircuit__local-deep-research/docker-compose.yml)<br>[Dockerfile](../../../../sources/LearningCircuit__local-deep-research/Dockerfile)<br>[examples/elasticsearch/docker-compose.yml](../../../../sources/LearningCircuit__local-deep-research/examples/elasticsearch/docker-compose.yml)<br>[docs/docker-compose-guide.md](../../../../sources/LearningCircuit__local-deep-research/docs/docker-compose-guide.md) |
| 보안/정책 | 306 | [.safety-policy.yml](../../../../sources/LearningCircuit__local-deep-research/.safety-policy.yml)<br>[SECURITY.md](../../../../sources/LearningCircuit__local-deep-research/SECURITY.md)<br>[tests/test_wikipedia_url_security.py](../../../../sources/LearningCircuit__local-deep-research/tests/test_wikipedia_url_security.py)<br>[tests/web/routes/test_research_routes_policy.py](../../../../sources/LearningCircuit__local-deep-research/tests/web/routes/test_research_routes_policy.py)<br>[tests/web/routes/test_settings_policy_validators.py](../../../../sources/LearningCircuit__local-deep-research/tests/web/routes/test_settings_policy_validators.py)<br>[tests/web/routes/test_settings_routes_security.py](../../../../sources/LearningCircuit__local-deep-research/tests/web/routes/test_settings_routes_security.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/local_deep_research/web_search_engines/rate_limiting/__main__.py`, `src/local_deep_research/settings/env_definitions/server.py`, `src/local_deep_research/mcp/__main__.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/local_deep_research/web_search_engines/rate_limiting/__main__.py`, `src/local_deep_research/settings/env_definitions/server.py`, `src/local_deep_research/mcp/__main__.py`.
3. agent/tool runtime 매핑: `tests/js/components/context-overflow-shared.test.js`, `tests/js/components/context-overflow.test.js`, `tests/hooks/__init__.py`.
4. retrieval/memory/indexing 확인: `tests/web_search_engines/test_local_embedding_manager.py`, `tests/web_search_engines/engines/test_embedding_manager_coverage.py`, `tests/web_search_engines/engines/test_local_embedding_manager.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/CI_INTEGRATION.md`, `tests/conftest.py`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 ~95% on SimpleQA e.g. Qwen3.6 27B on a 3090 . Supports all local and cloud LLMs llama.cpp, Ollama, Google, ... . 10+ sea. 핵심 구조 신호는 Python, package.json, pyproject.toml, Dockerfile, docker-compose.yml, README.md이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
