# nesquena/hermes-webui 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Local clone structure analysis: 1237 files, 101 directories.

## 요약

- 조사 단위: `sources/nesquena__hermes-webui` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,173 files, 95 directories, depth score 123, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp_server.py, tests/test_issue1968_mcp_profile_discovery.py, tests/test_issue538_mcp_management.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | nesquena/hermes-webui |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/nesquena__hermes-webui](../../../../sources/nesquena__hermes-webui) |
| 기존 보고서 | [reports/clone-structures/nesquena__hermes-webui.md](../../../clone-structures/nesquena__hermes-webui.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1173 / 95 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, api, docs, scripts, static, tests |
| 상위 확장자 | .py: 914, .png: 170, .md: 38, .js: 14, .yml: 9, .json: 5, (none): 4, .html: 3, .sh: 3, .example: 2, .ps1: 2, .svg: 2 |
| 소스 패턴 | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 86 |
| docs | documentation surface | 61 |
| api | source boundary | 7 |
| .github | ci surface | 1 |
| scripts | top-level component | 1 |
| static | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| quality | package.json | lint:runtime | eslint --no-config-lookup -c eslint.runtime-guard.config.mjs "static/**/*.js" |


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
| mcp | [mcp_server.py](../../../../sources/nesquena__hermes-webui/mcp_server.py) | mcp signal |
| mcp | [tests/test_issue1968_mcp_profile_discovery.py](../../../../sources/nesquena__hermes-webui/tests/test_issue1968_mcp_profile_discovery.py) | mcp signal |
| mcp | [tests/test_issue538_mcp_management.py](../../../../sources/nesquena__hermes-webui/tests/test_issue538_mcp_management.py) | mcp signal |
| mcp | [tests/test_issue696_mcp_visibility_panel.py](../../../../sources/nesquena__hermes-webui/tests/test_issue696_mcp_visibility_panel.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/nesquena__hermes-webui/AGENTS.md) | agentRuntime signal |
| agentRuntime | [docs/rfcs/agent-source-boundary.md](../../../../sources/nesquena__hermes-webui/docs/rfcs/agent-source-boundary.md) | agentRuntime signal |
| agentRuntime | [docs/pr-media/guard-skill-detail-errors/skill-detail-error-after.png](../../../../sources/nesquena__hermes-webui/docs/pr-media/guard-skill-detail-errors/skill-detail-error-after.png) | agentRuntime signal |
| agentRuntime | [docs/pr-media/guard-skill-detail-errors/skill-detail-error-before.png](../../../../sources/nesquena__hermes-webui/docs/pr-media/guard-skill-detail-errors/skill-detail-error-before.png) | agentRuntime signal |
| entrypoints | [server.py](../../../../sources/nesquena__hermes-webui/server.py) | entrypoints signal |
| config | [package.json](../../../../sources/nesquena__hermes-webui/package.json) | config signal |
| config | [pyproject.toml](../../../../sources/nesquena__hermes-webui/pyproject.toml) | config signal |
| config | [requirements.txt](../../../../sources/nesquena__hermes-webui/requirements.txt) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [server.py](../../../../sources/nesquena__hermes-webui/server.py) |
| agentRuntime | 12 | [AGENTS.md](../../../../sources/nesquena__hermes-webui/AGENTS.md)<br>[docs/rfcs/agent-source-boundary.md](../../../../sources/nesquena__hermes-webui/docs/rfcs/agent-source-boundary.md)<br>[docs/pr-media/guard-skill-detail-errors/skill-detail-error-after.png](../../../../sources/nesquena__hermes-webui/docs/pr-media/guard-skill-detail-errors/skill-detail-error-after.png)<br>[docs/pr-media/guard-skill-detail-errors/skill-detail-error-before.png](../../../../sources/nesquena__hermes-webui/docs/pr-media/guard-skill-detail-errors/skill-detail-error-before.png)<br>[docs/pr-media/716/agent-health-alert.png](../../../../sources/nesquena__hermes-webui/docs/pr-media/716/agent-health-alert.png)<br>[docs/pr-media/2250/skill-detail-after.png](../../../../sources/nesquena__hermes-webui/docs/pr-media/2250/skill-detail-after.png)<br>[docs/pr-media/2250/skill-detail-before.png](../../../../sources/nesquena__hermes-webui/docs/pr-media/2250/skill-detail-before.png)<br>[docs/architecture/agent-api-contract.md](../../../../sources/nesquena__hermes-webui/docs/architecture/agent-api-contract.md) |
| mcp | 11 | [mcp_server.py](../../../../sources/nesquena__hermes-webui/mcp_server.py)<br>[tests/test_issue1968_mcp_profile_discovery.py](../../../../sources/nesquena__hermes-webui/tests/test_issue1968_mcp_profile_discovery.py)<br>[tests/test_issue538_mcp_management.py](../../../../sources/nesquena__hermes-webui/tests/test_issue538_mcp_management.py)<br>[tests/test_issue696_mcp_visibility_panel.py](../../../../sources/nesquena__hermes-webui/tests/test_issue696_mcp_visibility_panel.py)<br>[tests/test_issue697_mcp_tool_inventory.py](../../../../sources/nesquena__hermes-webui/tests/test_issue697_mcp_tool_inventory.py)<br>[tests/test_mcp_server.py](../../../../sources/nesquena__hermes-webui/tests/test_mcp_server.py)<br>[tests/test_mcp_tools_list_overflow.py](../../../../sources/nesquena__hermes-webui/tests/test_mcp_tools_list_overflow.py)<br>[docs/pr-media/697/mcp-tools-search-filter.png](../../../../sources/nesquena__hermes-webui/docs/pr-media/697/mcp-tools-search-filter.png) |
| retrieval | 15 | [tests/test_excalidraw_inline_embed.py](../../../../sources/nesquena__hermes-webui/tests/test_excalidraw_inline_embed.py)<br>[tests/test_issue1257_llm_wiki_status.py](../../../../sources/nesquena__hermes-webui/tests/test_issue1257_llm_wiki_status.py)<br>[tests/test_issue2184_fork_from_here_absolute_index.py](../../../../sources/nesquena__hermes-webui/tests/test_issue2184_fork_from_here_absolute_index.py)<br>[tests/test_issue2863_session_index_prime.py](../../../../sources/nesquena__hermes-webui/tests/test_issue2863_session_index_prime.py)<br>[tests/test_issue3506_memory_and_watcher.py](../../../../sources/nesquena__hermes-webui/tests/test_issue3506_memory_and_watcher.py)<br>[tests/test_issue3887_index_prime.py](../../../../sources/nesquena__hermes-webui/tests/test_issue3887_index_prime.py)<br>[tests/test_memory_session_lifecycle_generation.py](../../../../sources/nesquena__hermes-webui/tests/test_memory_session_lifecycle_generation.py)<br>[tests/test_memory_skill_badge.py](../../../../sources/nesquena__hermes-webui/tests/test_memory_skill_badge.py) |
| spec | 6 | [ARCHITECTURE.md](../../../../sources/nesquena__hermes-webui/ARCHITECTURE.md)<br>[DESIGN.md](../../../../sources/nesquena__hermes-webui/DESIGN.md)<br>[requirements.txt](../../../../sources/nesquena__hermes-webui/requirements.txt)<br>[ROADMAP.md](../../../../sources/nesquena__hermes-webui/ROADMAP.md)<br>[docs/architecture/agent-api-contract.md](../../../../sources/nesquena__hermes-webui/docs/architecture/agent-api-contract.md)<br>[docs/architecture/unified-session-db.md](../../../../sources/nesquena__hermes-webui/docs/architecture/unified-session-db.md) |
| eval | 854 | [tests/__init__.py](../../../../sources/nesquena__hermes-webui/tests/__init__.py)<br>[tests/_pytest_port.py](../../../../sources/nesquena__hermes-webui/tests/_pytest_port.py)<br>[tests/_wakeup_helpers.py](../../../../sources/nesquena__hermes-webui/tests/_wakeup_helpers.py)<br>[tests/browser_smoke.py](../../../../sources/nesquena__hermes-webui/tests/browser_smoke.py)<br>[tests/conftest.py](../../../../sources/nesquena__hermes-webui/tests/conftest.py)<br>[tests/test_1003_appearance_autosave.py](../../../../sources/nesquena__hermes-webui/tests/test_1003_appearance_autosave.py)<br>[tests/test_1003_preferences_autosave.py](../../../../sources/nesquena__hermes-webui/tests/test_1003_preferences_autosave.py)<br>[tests/test_1038_pwa_auth_redirect.py](../../../../sources/nesquena__hermes-webui/tests/test_1038_pwa_auth_redirect.py) |
| security | 37 | [eslint.runtime-guard.config.mjs](../../../../sources/nesquena__hermes-webui/eslint.runtime-guard.config.mjs)<br>[tests/test_1038_pwa_auth_redirect.py](../../../../sources/nesquena__hermes-webui/tests/test_1038_pwa_auth_redirect.py)<br>[tests/test_1694_root_saved_running_policy.py](../../../../sources/nesquena__hermes-webui/tests/test_1694_root_saved_running_policy.py)<br>[tests/test_agent_source_dependency_audit.py](../../../../sources/nesquena__hermes-webui/tests/test_agent_source_dependency_audit.py)<br>[tests/test_auth_password_hash_cache.py](../../../../sources/nesquena__hermes-webui/tests/test_auth_password_hash_cache.py)<br>[tests/test_auth_session_persistence.py](../../../../sources/nesquena__hermes-webui/tests/test_auth_session_persistence.py)<br>[tests/test_auth_sessions.py](../../../../sources/nesquena__hermes-webui/tests/test_auth_sessions.py)<br>[tests/test_auth.py](../../../../sources/nesquena__hermes-webui/tests/test_auth.py) |
| ci | 5 | [.github/workflows/browser-smoke.yml](../../../../sources/nesquena__hermes-webui/.github/workflows/browser-smoke.yml)<br>[.github/workflows/docker-smoke.yml](../../../../sources/nesquena__hermes-webui/.github/workflows/docker-smoke.yml)<br>[.github/workflows/native-windows-startup.yml](../../../../sources/nesquena__hermes-webui/.github/workflows/native-windows-startup.yml)<br>[.github/workflows/release.yml](../../../../sources/nesquena__hermes-webui/.github/workflows/release.yml)<br>[.github/workflows/tests.yml](../../../../sources/nesquena__hermes-webui/.github/workflows/tests.yml) |
| container | 4 | [docker-compose.three-container.yml](../../../../sources/nesquena__hermes-webui/docker-compose.three-container.yml)<br>[docker-compose.two-container.yml](../../../../sources/nesquena__hermes-webui/docker-compose.two-container.yml)<br>[docker-compose.yml](../../../../sources/nesquena__hermes-webui/docker-compose.yml)<br>[Dockerfile](../../../../sources/nesquena__hermes-webui/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/nesquena__hermes-webui/AGENTS.md) |
| docs | 199 | [README.md](../../../../sources/nesquena__hermes-webui/README.md)<br>[docs/advanced-chat-setup.md](../../../../sources/nesquena__hermes-webui/docs/advanced-chat-setup.md)<br>[docs/CONTRACTS.md](../../../../sources/nesquena__hermes-webui/docs/CONTRACTS.md)<br>[docs/docker.md](../../../../sources/nesquena__hermes-webui/docs/docker.md)<br>[docs/EXTENSIONS.md](../../../../sources/nesquena__hermes-webui/docs/EXTENSIONS.md)<br>[docs/ISSUES.md](../../../../sources/nesquena__hermes-webui/docs/ISSUES.md)<br>[docs/onboarding-agent-checklist.md](../../../../sources/nesquena__hermes-webui/docs/onboarding-agent-checklist.md)<br>[docs/onboarding.md](../../../../sources/nesquena__hermes-webui/docs/onboarding.md) |
| config | 3 | [package.json](../../../../sources/nesquena__hermes-webui/package.json)<br>[pyproject.toml](../../../../sources/nesquena__hermes-webui/pyproject.toml)<br>[requirements.txt](../../../../sources/nesquena__hermes-webui/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 854 | [tests/__init__.py](../../../../sources/nesquena__hermes-webui/tests/__init__.py)<br>[tests/_pytest_port.py](../../../../sources/nesquena__hermes-webui/tests/_pytest_port.py)<br>[tests/_wakeup_helpers.py](../../../../sources/nesquena__hermes-webui/tests/_wakeup_helpers.py)<br>[tests/browser_smoke.py](../../../../sources/nesquena__hermes-webui/tests/browser_smoke.py)<br>[tests/conftest.py](../../../../sources/nesquena__hermes-webui/tests/conftest.py)<br>[tests/test_1003_appearance_autosave.py](../../../../sources/nesquena__hermes-webui/tests/test_1003_appearance_autosave.py) |
| CI workflow | 5 | [.github/workflows/browser-smoke.yml](../../../../sources/nesquena__hermes-webui/.github/workflows/browser-smoke.yml)<br>[.github/workflows/docker-smoke.yml](../../../../sources/nesquena__hermes-webui/.github/workflows/docker-smoke.yml)<br>[.github/workflows/native-windows-startup.yml](../../../../sources/nesquena__hermes-webui/.github/workflows/native-windows-startup.yml)<br>[.github/workflows/release.yml](../../../../sources/nesquena__hermes-webui/.github/workflows/release.yml)<br>[.github/workflows/tests.yml](../../../../sources/nesquena__hermes-webui/.github/workflows/tests.yml) |
| 컨테이너/배포 | 4 | [docker-compose.three-container.yml](../../../../sources/nesquena__hermes-webui/docker-compose.three-container.yml)<br>[docker-compose.two-container.yml](../../../../sources/nesquena__hermes-webui/docker-compose.two-container.yml)<br>[docker-compose.yml](../../../../sources/nesquena__hermes-webui/docker-compose.yml)<br>[Dockerfile](../../../../sources/nesquena__hermes-webui/Dockerfile) |
| 보안/정책 | 37 | [eslint.runtime-guard.config.mjs](../../../../sources/nesquena__hermes-webui/eslint.runtime-guard.config.mjs)<br>[tests/test_1038_pwa_auth_redirect.py](../../../../sources/nesquena__hermes-webui/tests/test_1038_pwa_auth_redirect.py)<br>[tests/test_1694_root_saved_running_policy.py](../../../../sources/nesquena__hermes-webui/tests/test_1694_root_saved_running_policy.py)<br>[tests/test_agent_source_dependency_audit.py](../../../../sources/nesquena__hermes-webui/tests/test_agent_source_dependency_audit.py)<br>[tests/test_auth_password_hash_cache.py](../../../../sources/nesquena__hermes-webui/tests/test_auth_password_hash_cache.py)<br>[tests/test_auth_session_persistence.py](../../../../sources/nesquena__hermes-webui/tests/test_auth_session_persistence.py) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/nesquena__hermes-webui/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `mcp_server.py`, `tests/test_issue1968_mcp_profile_discovery.py`, `tests/test_issue538_mcp_management.py`.
2. entrypoint를 따라 실행 흐름 확인: `server.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `docs/rfcs/agent-source-boundary.md`, `docs/pr-media/guard-skill-detail-errors/skill-detail-error-after.png`.
4. retrieval/memory/indexing 확인: `tests/test_excalidraw_inline_embed.py`, `tests/test_issue1257_llm_wiki_status.py`, `tests/test_issue2184_fork_from_here_absolute_index.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/_pytest_port.py`, `tests/_wakeup_helpers.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 1237 files, 101 directories.. 핵심 구조 신호는 package.json, pyproject.toml, requirements.txt, Dockerfile, docker-compose.yml, tests이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
