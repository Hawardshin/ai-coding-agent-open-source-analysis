# HKUDS/DeepTutor 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

DeepTutor: Agent-native Personalized Tutoring. https://deeptutor.info/.

## 요약

- 조사 단위: `sources/HKUDS__DeepTutor` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,587 files, 316 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=web/lib/mcp-api.ts, web/app/(utility)/settings/mcp/page.tsx, tests/services/mcp/test_mcp_config.py이고, 의존성 단서는 openai, anthropic, claude, mcp, llamaindex, llama-index, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | HKUDS/DeepTutor |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 24817 |
| Forks | 3355 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/HKUDS__DeepTutor](../../../../sources/HKUDS__DeepTutor) |
| 기존 보고서 | [reports/global-trending/repositories/HKUDS__DeepTutor.md](../../../global-trending/repositories/HKUDS__DeepTutor.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1587 / 316 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .github, assets, deeptutor, deeptutor_cli, deeptutor_web, packaging, requirements, scripts, tests, web |
| 상위 확장자 | .py: 875, .tsx: 242, .yaml: 121, .ts: 116, .md: 75, .png: 65, .svg: 35, .yml: 13, .json: 9, .txt: 9, .mjs: 7, (none): 6 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| web | source boundary | 136 |
| tests | validation surface | 29 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| deeptutor | top-level component | 1 |
| deeptutor_cli | top-level component | 1 |
| deeptutor_web | source boundary | 1 |
| packaging | top-level component | 1 |
| requirements | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | deeptutor | deeptutor |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic, claude |
| agentProtocols | mcp |
| agentFrameworks | llamaindex, llama-index |
| vectorStores | 없음 |
| modelRuntime | llama |
| webRuntime | fastapi, next |
| developerSurface | vscode, typer |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [web/lib/mcp-api.ts](../../../../sources/HKUDS__DeepTutor/web/lib/mcp-api.ts) | mcp signal |
| mcp | [tests/services/mcp/test_mcp_config.py](../../../../sources/HKUDS__DeepTutor/tests/services/mcp/test_mcp_config.py) | mcp signal |
| mcp | [tests/runtime/registry/test_tool_registry_execute.py](../../../../sources/HKUDS__DeepTutor/tests/runtime/registry/test_tool_registry_execute.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/HKUDS__DeepTutor/AGENTS.md) | agentRuntime signal |
| agentRuntime | [SKILL.md](../../../../sources/HKUDS__DeepTutor/SKILL.md) | agentRuntime signal |
| agentRuntime | [web/tests/skill-slug.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/skill-slug.test.ts) | agentRuntime signal |
| agentRuntime | [web/lib/memory-graph.ts](../../../../sources/HKUDS__DeepTutor/web/lib/memory-graph.ts) | agentRuntime signal |
| entrypoints | [requirements/server.txt](../../../../sources/HKUDS__DeepTutor/requirements/server.txt) | entrypoints signal |
| entrypoints | [deeptutor_cli/__main__.py](../../../../sources/HKUDS__DeepTutor/deeptutor_cli/__main__.py) | entrypoints signal |
| entrypoints | [deeptutor_cli/main.py](../../../../sources/HKUDS__DeepTutor/deeptutor_cli/main.py) | entrypoints signal |
| entrypoints | [deeptutor/__main__.py](../../../../sources/HKUDS__DeepTutor/deeptutor/__main__.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/HKUDS__DeepTutor/pyproject.toml) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 6 | [requirements/server.txt](../../../../sources/HKUDS__DeepTutor/requirements/server.txt)<br>[deeptutor_cli/__main__.py](../../../../sources/HKUDS__DeepTutor/deeptutor_cli/__main__.py)<br>[deeptutor_cli/main.py](../../../../sources/HKUDS__DeepTutor/deeptutor_cli/main.py)<br>[deeptutor/__main__.py](../../../../sources/HKUDS__DeepTutor/deeptutor/__main__.py)<br>[deeptutor/services/sandbox/runner/server.py](../../../../sources/HKUDS__DeepTutor/deeptutor/services/sandbox/runner/server.py)<br>[deeptutor/api/main.py](../../../../sources/HKUDS__DeepTutor/deeptutor/api/main.py) |
| agentRuntime | 367 | [AGENTS.md](../../../../sources/HKUDS__DeepTutor/AGENTS.md)<br>[SKILL.md](../../../../sources/HKUDS__DeepTutor/SKILL.md)<br>[web/tests/skill-slug.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/skill-slug.test.ts)<br>[web/lib/memory-graph.ts](../../../../sources/HKUDS__DeepTutor/web/lib/memory-graph.ts)<br>[web/lib/skill-slug.ts](../../../../sources/HKUDS__DeepTutor/web/lib/skill-slug.ts)<br>[web/lib/skills-api.ts](../../../../sources/HKUDS__DeepTutor/web/lib/skills-api.ts)<br>[web/lib/tools-settings.ts](../../../../sources/HKUDS__DeepTutor/web/lib/tools-settings.ts)<br>[web/lib/chat-import/agent-store.ts](../../../../sources/HKUDS__DeepTutor/web/lib/chat-import/agent-store.ts) |
| mcp | 11 | [web/lib/mcp-api.ts](../../../../sources/HKUDS__DeepTutor/web/lib/mcp-api.ts)<br>`web/app/(utility)/settings/mcp/page.tsx`<br>[tests/services/mcp/test_mcp_config.py](../../../../sources/HKUDS__DeepTutor/tests/services/mcp/test_mcp_config.py)<br>[tests/runtime/registry/test_tool_registry_execute.py](../../../../sources/HKUDS__DeepTutor/tests/runtime/registry/test_tool_registry_execute.py)<br>[deeptutor/services/mcp/__init__.py](../../../../sources/HKUDS__DeepTutor/deeptutor/services/mcp/__init__.py)<br>[deeptutor/services/mcp/config.py](../../../../sources/HKUDS__DeepTutor/deeptutor/services/mcp/config.py)<br>[deeptutor/services/mcp/manager.py](../../../../sources/HKUDS__DeepTutor/deeptutor/services/mcp/manager.py)<br>[deeptutor/services/mcp/network.py](../../../../sources/HKUDS__DeepTutor/deeptutor/services/mcp/network.py) |
| retrieval | 228 | [web/tests/knowledge-helpers.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/knowledge-helpers.test.ts)<br>[web/lib/knowledge-api.ts](../../../../sources/HKUDS__DeepTutor/web/lib/knowledge-api.ts)<br>[web/lib/knowledge-helpers.ts](../../../../sources/HKUDS__DeepTutor/web/lib/knowledge-helpers.ts)<br>[web/lib/memory-graph.ts](../../../../sources/HKUDS__DeepTutor/web/lib/memory-graph.ts)<br>[web/lib/chat-import/index.ts](../../../../sources/HKUDS__DeepTutor/web/lib/chat-import/index.ts)<br>[web/i18n/index.ts](../../../../sources/HKUDS__DeepTutor/web/i18n/index.ts)<br>[web/components/memory/MemoryArchivedBanner.tsx](../../../../sources/HKUDS__DeepTutor/web/components/memory/MemoryArchivedBanner.tsx)<br>[web/components/memory/MemoryGraph.tsx](../../../../sources/HKUDS__DeepTutor/web/components/memory/MemoryGraph.tsx) |
| spec | 17 | [requirements.txt](../../../../sources/HKUDS__DeepTutor/requirements.txt)<br>[tests/test_matrix_requirements.py](../../../../sources/HKUDS__DeepTutor/tests/test_matrix_requirements.py)<br>[requirements/cli.txt](../../../../sources/HKUDS__DeepTutor/requirements/cli.txt)<br>[requirements/dev.txt](../../../../sources/HKUDS__DeepTutor/requirements/dev.txt)<br>[requirements/math-animator.txt](../../../../sources/HKUDS__DeepTutor/requirements/math-animator.txt)<br>[requirements/matrix-e2e.txt](../../../../sources/HKUDS__DeepTutor/requirements/matrix-e2e.txt)<br>[requirements/matrix.txt](../../../../sources/HKUDS__DeepTutor/requirements/matrix.txt)<br>[requirements/partners.txt](../../../../sources/HKUDS__DeepTutor/requirements/partners.txt) |
| eval | 311 | [web/tsconfig.node-tests.json](../../../../sources/HKUDS__DeepTutor/web/tsconfig.node-tests.json)<br>[web/tests/api-auth-redirect.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/api-auth-redirect.test.ts)<br>[web/tests/api-resolve-base.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/api-resolve-base.test.ts)<br>[web/tests/ask-user-state.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/ask-user-state.test.ts)<br>[web/tests/auth-enabled.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/auth-enabled.test.ts)<br>[web/tests/capability-access.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/capability-access.test.ts)<br>[web/tests/composer-keyboard.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/composer-keyboard.test.ts)<br>[web/tests/doc-attachments.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/doc-attachments.test.ts) |
| security | 29 | [web/tests/api-auth-redirect.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/api-auth-redirect.test.ts)<br>[web/tests/auth-enabled.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/auth-enabled.test.ts)<br>[web/tests/e2e/compliance-and-ux.audit.ts](../../../../sources/HKUDS__DeepTutor/web/tests/e2e/compliance-and-ux.audit.ts)<br>[web/scripts/i18n_audit.mjs](../../../../sources/HKUDS__DeepTutor/web/scripts/i18n_audit.mjs)<br>[web/lib/auth.ts](../../../../sources/HKUDS__DeepTutor/web/lib/auth.ts)<br>[web/components/auth/AdminLink.tsx](../../../../sources/HKUDS__DeepTutor/web/components/auth/AdminLink.tsx)<br>[web/components/auth/LogoutButton.tsx](../../../../sources/HKUDS__DeepTutor/web/components/auth/LogoutButton.tsx)<br>[tests/services/test_runtime_storage_guard.py](../../../../sources/HKUDS__DeepTutor/tests/services/test_runtime_storage_guard.py) |
| ci | 3 | [.github/workflows/docker-release.yml](../../../../sources/HKUDS__DeepTutor/.github/workflows/docker-release.yml)<br>[.github/workflows/pypi-release.yml](../../../../sources/HKUDS__DeepTutor/.github/workflows/pypi-release.yml)<br>[.github/workflows/tests.yml](../../../../sources/HKUDS__DeepTutor/.github/workflows/tests.yml) |
| container | 5 | [docker-compose.dev.yml](../../../../sources/HKUDS__DeepTutor/docker-compose.dev.yml)<br>[docker-compose.ghcr.yml](../../../../sources/HKUDS__DeepTutor/docker-compose.ghcr.yml)<br>[docker-compose.yml](../../../../sources/HKUDS__DeepTutor/docker-compose.yml)<br>[Dockerfile](../../../../sources/HKUDS__DeepTutor/Dockerfile)<br>[Dockerfile.runner](../../../../sources/HKUDS__DeepTutor/Dockerfile.runner) |
| instruction | 1 | [AGENTS.md](../../../../sources/HKUDS__DeepTutor/AGENTS.md) |
| docs | 99 | [README.md](../../../../sources/HKUDS__DeepTutor/README.md)<br>`web/app/(workspace)/book/page.tsx`<br>`web/app/(workspace)/book/components/BookChatPanel.tsx`<br>`web/app/(workspace)/book/components/BookCreator.tsx`<br>`web/app/(workspace)/book/components/BookHealthBanner.tsx`<br>`web/app/(workspace)/book/components/BookLibrary.tsx`<br>`web/app/(workspace)/book/components/BookProgressTimeline.tsx`<br>`web/app/(workspace)/book/components/BookSidebar.tsx` |
| config | 12 | [pyproject.toml](../../../../sources/HKUDS__DeepTutor/pyproject.toml)<br>[requirements.txt](../../../../sources/HKUDS__DeepTutor/requirements.txt)<br>[web/package.json](../../../../sources/HKUDS__DeepTutor/web/package.json)<br>[web/tsconfig.json](../../../../sources/HKUDS__DeepTutor/web/tsconfig.json)<br>[requirements/cli.txt](../../../../sources/HKUDS__DeepTutor/requirements/cli.txt)<br>[requirements/dev.txt](../../../../sources/HKUDS__DeepTutor/requirements/dev.txt)<br>[requirements/math-animator.txt](../../../../sources/HKUDS__DeepTutor/requirements/math-animator.txt)<br>[requirements/matrix-e2e.txt](../../../../sources/HKUDS__DeepTutor/requirements/matrix-e2e.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 311 | [web/tsconfig.node-tests.json](../../../../sources/HKUDS__DeepTutor/web/tsconfig.node-tests.json)<br>[web/tests/api-auth-redirect.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/api-auth-redirect.test.ts)<br>[web/tests/api-resolve-base.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/api-resolve-base.test.ts)<br>[web/tests/ask-user-state.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/ask-user-state.test.ts)<br>[web/tests/auth-enabled.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/auth-enabled.test.ts)<br>[web/tests/capability-access.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/capability-access.test.ts) |
| CI workflow | 3 | [.github/workflows/docker-release.yml](../../../../sources/HKUDS__DeepTutor/.github/workflows/docker-release.yml)<br>[.github/workflows/pypi-release.yml](../../../../sources/HKUDS__DeepTutor/.github/workflows/pypi-release.yml)<br>[.github/workflows/tests.yml](../../../../sources/HKUDS__DeepTutor/.github/workflows/tests.yml) |
| 컨테이너/배포 | 5 | [docker-compose.dev.yml](../../../../sources/HKUDS__DeepTutor/docker-compose.dev.yml)<br>[docker-compose.ghcr.yml](../../../../sources/HKUDS__DeepTutor/docker-compose.ghcr.yml)<br>[docker-compose.yml](../../../../sources/HKUDS__DeepTutor/docker-compose.yml)<br>[Dockerfile](../../../../sources/HKUDS__DeepTutor/Dockerfile)<br>[Dockerfile.runner](../../../../sources/HKUDS__DeepTutor/Dockerfile.runner) |
| 보안/정책 | 29 | [web/tests/api-auth-redirect.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/api-auth-redirect.test.ts)<br>[web/tests/auth-enabled.test.ts](../../../../sources/HKUDS__DeepTutor/web/tests/auth-enabled.test.ts)<br>[web/tests/e2e/compliance-and-ux.audit.ts](../../../../sources/HKUDS__DeepTutor/web/tests/e2e/compliance-and-ux.audit.ts)<br>[web/scripts/i18n_audit.mjs](../../../../sources/HKUDS__DeepTutor/web/scripts/i18n_audit.mjs)<br>[web/lib/auth.ts](../../../../sources/HKUDS__DeepTutor/web/lib/auth.ts)<br>[web/components/auth/AdminLink.tsx](../../../../sources/HKUDS__DeepTutor/web/components/auth/AdminLink.tsx) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/HKUDS__DeepTutor/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `web/lib/mcp-api.ts`, `tests/services/mcp/test_mcp_config.py`, `tests/runtime/registry/test_tool_registry_execute.py`.
2. entrypoint를 따라 실행 흐름 확인: `requirements/server.txt`, `deeptutor_cli/__main__.py`, `deeptutor_cli/main.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `SKILL.md`, `web/tests/skill-slug.test.ts`.
4. retrieval/memory/indexing 확인: `web/tests/knowledge-helpers.test.ts`, `web/lib/knowledge-api.ts`, `web/lib/knowledge-helpers.ts`.
5. test/eval 파일로 동작 검증: `web/tsconfig.node-tests.json`, `web/tests/api-auth-redirect.test.ts`, `web/tests/api-resolve-base.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 DeepTutor Agent native Personalized Tutoring. https //deeptutor.info/.. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, Dockerfile, docker-compose.yml, README.md이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
