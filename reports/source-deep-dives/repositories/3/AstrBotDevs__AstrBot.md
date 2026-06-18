# AstrBotDevs/AstrBot 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

AI Agent Assistant & development framework that integrates lots of IM platforms, LLMs, plugins and AI feature, and can be your openclaw alternative. ✨

## 요약

- 조사 단위: `sources/AstrBotDevs__AstrBot` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,500 files, 227 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/unit/test_mcp_client_schema.py, docs/zh/use/mcp.md, docs/en/use/mcp.md이고, 의존성 단서는 openai, anthropic, mcp, fastapi, pydantic, click, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | AstrBotDevs/AstrBot |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 34851 |
| Forks | 2403 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/AstrBotDevs__AstrBot](../../../../sources/AstrBotDevs__AstrBot) |
| 기존 보고서 | [reports/global-trending/repositories/AstrBotDevs__AstrBot.md](../../../global-trending/repositories/AstrBotDevs__AstrBot.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1500 / 227 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .github, astrbot, changelogs, dashboard, docs, k8s, openspec, samples, scripts, tests, typings |
| 상위 확장자 | .py: 591, .md: 403, .vue: 157, .json: 140, .ts: 59, .yml: 20, .yaml: 19, .png: 18, .js: 17, .scss: 16, .mjs: 13, (none): 11 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 95 |
| tests | validation surface | 49 |
| .github | ci surface | 1 |
| astrbot | top-level component | 1 |
| changelogs | top-level component | 1 |
| dashboard | top-level component | 1 |
| k8s | deployment surface | 1 |
| openspec | top-level component | 1 |
| samples | top-level component | 1 |
| scripts | top-level component | 1 |
| typings | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | worktree | make worktree |
| utility | Makefile | worktree-add | make worktree-add |
| utility | Makefile | worktree-rm | make worktree-rm |
| test | Makefile | pr-test-neo | make pr-test-neo |
| test | Makefile | pr-test-full | make pr-test-full |
| test | Makefile | pr-test-full-fast | make pr-test-full-fast |
| utility | pyproject.toml | astrbot | astrbot |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | faiss |
| modelRuntime | 없음 |
| webRuntime | fastapi |
| developerSurface | click |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [tests/unit/test_mcp_client_schema.py](../../../../sources/AstrBotDevs__AstrBot/tests/unit/test_mcp_client_schema.py) | mcp signal |
| mcp | [docs/zh/use/mcp.md](../../../../sources/AstrBotDevs__AstrBot/docs/zh/use/mcp.md) | mcp signal |
| mcp | [docs/en/use/mcp.md](../../../../sources/AstrBotDevs__AstrBot/docs/en/use/mcp.md) | mcp signal |
| mcp | [astrbot/core/agent/mcp_client.py](../../../../sources/AstrBotDevs__AstrBot/astrbot/core/agent/mcp_client.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/AstrBotDevs__AstrBot/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/agent/test_context_manager.py](../../../../sources/AstrBotDevs__AstrBot/tests/agent/test_context_manager.py) | agentRuntime signal |
| agentRuntime | [tests/agent/test_token_counter.py](../../../../sources/AstrBotDevs__AstrBot/tests/agent/test_token_counter.py) | agentRuntime signal |
| agentRuntime | [tests/agent/test_truncator.py](../../../../sources/AstrBotDevs__AstrBot/tests/agent/test_truncator.py) | agentRuntime signal |
| entrypoints | [main.py](../../../../sources/AstrBotDevs__AstrBot/main.py) | entrypoints signal |
| entrypoints | [dashboard/src/App.vue](../../../../sources/AstrBotDevs__AstrBot/dashboard/src/App.vue) | entrypoints signal |
| entrypoints | [dashboard/src/main.ts](../../../../sources/AstrBotDevs__AstrBot/dashboard/src/main.ts) | entrypoints signal |
| entrypoints | [astrbot/dashboard/server.py](../../../../sources/AstrBotDevs__AstrBot/astrbot/dashboard/server.py) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 8 | [main.py](../../../../sources/AstrBotDevs__AstrBot/main.py)<br>[dashboard/src/App.vue](../../../../sources/AstrBotDevs__AstrBot/dashboard/src/App.vue)<br>[dashboard/src/main.ts](../../../../sources/AstrBotDevs__AstrBot/dashboard/src/main.ts)<br>[astrbot/dashboard/server.py](../../../../sources/AstrBotDevs__AstrBot/astrbot/dashboard/server.py)<br>[astrbot/core/platform/sources/lark/server.py](../../../../sources/AstrBotDevs__AstrBot/astrbot/core/platform/sources/lark/server.py)<br>[astrbot/cli/__main__.py](../../../../sources/AstrBotDevs__AstrBot/astrbot/cli/__main__.py)<br>[astrbot/builtin_stars/builtin_commands/main.py](../../../../sources/AstrBotDevs__AstrBot/astrbot/builtin_stars/builtin_commands/main.py)<br>[astrbot/builtin_stars/astrbot/main.py](../../../../sources/AstrBotDevs__AstrBot/astrbot/builtin_stars/astrbot/main.py) |
| agentRuntime | 85 | [AGENTS.md](../../../../sources/AstrBotDevs__AstrBot/AGENTS.md)<br>[tests/agent/test_context_manager.py](../../../../sources/AstrBotDevs__AstrBot/tests/agent/test_context_manager.py)<br>[tests/agent/test_token_counter.py](../../../../sources/AstrBotDevs__AstrBot/tests/agent/test_token_counter.py)<br>[tests/agent/test_truncator.py](../../../../sources/AstrBotDevs__AstrBot/tests/agent/test_truncator.py)<br>[docs/zh/use/agent-runner.md](../../../../sources/AstrBotDevs__AstrBot/docs/zh/use/agent-runner.md)<br>[docs/zh/use/context-compress.md](../../../../sources/AstrBotDevs__AstrBot/docs/zh/use/context-compress.md)<br>[docs/zh/use/skills.md](../../../../sources/AstrBotDevs__AstrBot/docs/zh/use/skills.md)<br>[docs/zh/providers/agent-runners.md](../../../../sources/AstrBotDevs__AstrBot/docs/zh/providers/agent-runners.md) |
| mcp | 4 | [tests/unit/test_mcp_client_schema.py](../../../../sources/AstrBotDevs__AstrBot/tests/unit/test_mcp_client_schema.py)<br>[docs/zh/use/mcp.md](../../../../sources/AstrBotDevs__AstrBot/docs/zh/use/mcp.md)<br>[docs/en/use/mcp.md](../../../../sources/AstrBotDevs__AstrBot/docs/en/use/mcp.md)<br>[astrbot/core/agent/mcp_client.py](../../../../sources/AstrBotDevs__AstrBot/astrbot/core/agent/mcp_client.py) |
| retrieval | 75 | [tests/test_openai_embedding_source.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_openai_embedding_source.py)<br>[docs/zh/index.md](../../../../sources/AstrBotDevs__AstrBot/docs/zh/index.md)<br>[docs/zh/use/knowledge-base-old.md](../../../../sources/AstrBotDevs__AstrBot/docs/zh/use/knowledge-base-old.md)<br>[docs/zh/use/knowledge-base.md](../../../../sources/AstrBotDevs__AstrBot/docs/zh/use/knowledge-base.md)<br>[docs/tests/test_sync_docs_to_wiki.py](../../../../sources/AstrBotDevs__AstrBot/docs/tests/test_sync_docs_to_wiki.py)<br>[docs/scripts/sync_docs_to_wiki.py](../../../../sources/AstrBotDevs__AstrBot/docs/scripts/sync_docs_to_wiki.py)<br>[docs/en/index.md](../../../../sources/AstrBotDevs__AstrBot/docs/en/index.md)<br>[docs/en/use/knowledge-base.md](../../../../sources/AstrBotDevs__AstrBot/docs/en/use/knowledge-base.md) |
| spec | 2 | [requirements.txt](../../../../sources/AstrBotDevs__AstrBot/requirements.txt)<br>[astrbot/core/utils/requirements_utils.py](../../../../sources/AstrBotDevs__AstrBot/astrbot/core/utils/requirements_utils.py) |
| eval | 149 | [tests/conftest.py](../../../../sources/AstrBotDevs__AstrBot/tests/conftest.py)<br>[tests/test_agent_runner_media_resolver.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_agent_runner_media_resolver.py)<br>[tests/test_anthropic_kimi_code_provider.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_anthropic_kimi_code_provider.py)<br>[tests/test_api_key_open_api.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_api_key_open_api.py)<br>[tests/test_backup.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_backup.py)<br>[tests/test_chat_route.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_chat_route.py)<br>[tests/test_cli_init.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_cli_init.py)<br>[tests/test_cli_password.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_cli_password.py) |
| security | 17 | [tests/test_security_fixes.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_security_fixes.py)<br>[tests/test_skill_manager_sandbox_cache.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_skill_manager_sandbox_cache.py)<br>[tests/unit/test_tool_permission.py](../../../../sources/AstrBotDevs__AstrBot/tests/unit/test_tool_permission.py)<br>[docs/zh/use/astrbot-agent-sandbox.md](../../../../sources/AstrBotDevs__AstrBot/docs/zh/use/astrbot-agent-sandbox.md)<br>[docs/en/use/astrbot-agent-sandbox.md](../../../../sources/AstrBotDevs__AstrBot/docs/en/use/astrbot-agent-sandbox.md)<br>[docs/en/use/astrbot-sandbox.md](../../../../sources/AstrBotDevs__AstrBot/docs/en/use/astrbot-sandbox.md)<br>[dashboard/src/views/authentication/auth/LoginPage.vue](../../../../sources/AstrBotDevs__AstrBot/dashboard/src/views/authentication/auth/LoginPage.vue)<br>[dashboard/src/views/authentication/auth/SetupPage.vue](../../../../sources/AstrBotDevs__AstrBot/dashboard/src/views/authentication/auth/SetupPage.vue) |
| ci | 12 | [.github/workflows/build-docs.yml](../../../../sources/AstrBotDevs__AstrBot/.github/workflows/build-docs.yml)<br>[.github/workflows/code-format.yml](../../../../sources/AstrBotDevs__AstrBot/.github/workflows/code-format.yml)<br>[.github/workflows/codeql.yml](../../../../sources/AstrBotDevs__AstrBot/.github/workflows/codeql.yml)<br>[.github/workflows/coverage_test.yml](../../../../sources/AstrBotDevs__AstrBot/.github/workflows/coverage_test.yml)<br>[.github/workflows/dashboard_ci.yml](../../../../sources/AstrBotDevs__AstrBot/.github/workflows/dashboard_ci.yml)<br>[.github/workflows/docker-image.yml](../../../../sources/AstrBotDevs__AstrBot/.github/workflows/docker-image.yml)<br>[.github/workflows/pr-title-check.yml](../../../../sources/AstrBotDevs__AstrBot/.github/workflows/pr-title-check.yml)<br>[.github/workflows/release.yml](../../../../sources/AstrBotDevs__AstrBot/.github/workflows/release.yml) |
| container | 41 | [compose.yml](../../../../sources/AstrBotDevs__AstrBot/compose.yml)<br>[Dockerfile](../../../../sources/AstrBotDevs__AstrBot/Dockerfile)<br>[k8s/astrbot_with_napcat/00-namespace.yaml](../../../../sources/AstrBotDevs__AstrBot/k8s/astrbot_with_napcat/00-namespace.yaml)<br>[k8s/astrbot_with_napcat/01-pvc.yaml](../../../../sources/AstrBotDevs__AstrBot/k8s/astrbot_with_napcat/01-pvc.yaml)<br>[k8s/astrbot_with_napcat/02-deployment.yaml](../../../../sources/AstrBotDevs__AstrBot/k8s/astrbot_with_napcat/02-deployment.yaml)<br>[k8s/astrbot_with_napcat/03-service-nodeport.yaml](../../../../sources/AstrBotDevs__AstrBot/k8s/astrbot_with_napcat/03-service-nodeport.yaml)<br>[k8s/astrbot_with_napcat/04-service-loadbalancer.yaml](../../../../sources/AstrBotDevs__AstrBot/k8s/astrbot_with_napcat/04-service-loadbalancer.yaml)<br>[k8s/astrbot/00-namespace.yaml](../../../../sources/AstrBotDevs__AstrBot/k8s/astrbot/00-namespace.yaml) |
| instruction | 2 | [AGENTS.md](../../../../sources/AstrBotDevs__AstrBot/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/AstrBotDevs__AstrBot/.github/copilot-instructions.md) |
| docs | 240 | [README_fr.md](../../../../sources/AstrBotDevs__AstrBot/README_fr.md)<br>[README_ja.md](../../../../sources/AstrBotDevs__AstrBot/README_ja.md)<br>[README_ru.md](../../../../sources/AstrBotDevs__AstrBot/README_ru.md)<br>[README_zh-TW.md](../../../../sources/AstrBotDevs__AstrBot/README_zh-TW.md)<br>[README_zh.md](../../../../sources/AstrBotDevs__AstrBot/README_zh.md)<br>[README.md](../../../../sources/AstrBotDevs__AstrBot/README.md)<br>[docs/.gitignore](../../../../sources/AstrBotDevs__AstrBot/docs/.gitignore)<br>[docs/package.json](../../../../sources/AstrBotDevs__AstrBot/docs/package.json) |
| config | 7 | [Makefile](../../../../sources/AstrBotDevs__AstrBot/Makefile)<br>[pyproject.toml](../../../../sources/AstrBotDevs__AstrBot/pyproject.toml)<br>[requirements.txt](../../../../sources/AstrBotDevs__AstrBot/requirements.txt)<br>[docs/package.json](../../../../sources/AstrBotDevs__AstrBot/docs/package.json)<br>[dashboard/package.json](../../../../sources/AstrBotDevs__AstrBot/dashboard/package.json)<br>[dashboard/pnpm-workspace.yaml](../../../../sources/AstrBotDevs__AstrBot/dashboard/pnpm-workspace.yaml)<br>[dashboard/tsconfig.json](../../../../sources/AstrBotDevs__AstrBot/dashboard/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 149 | [tests/conftest.py](../../../../sources/AstrBotDevs__AstrBot/tests/conftest.py)<br>[tests/test_agent_runner_media_resolver.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_agent_runner_media_resolver.py)<br>[tests/test_anthropic_kimi_code_provider.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_anthropic_kimi_code_provider.py)<br>[tests/test_api_key_open_api.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_api_key_open_api.py)<br>[tests/test_backup.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_backup.py)<br>[tests/test_chat_route.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_chat_route.py) |
| CI workflow | 12 | [.github/workflows/build-docs.yml](../../../../sources/AstrBotDevs__AstrBot/.github/workflows/build-docs.yml)<br>[.github/workflows/code-format.yml](../../../../sources/AstrBotDevs__AstrBot/.github/workflows/code-format.yml)<br>[.github/workflows/codeql.yml](../../../../sources/AstrBotDevs__AstrBot/.github/workflows/codeql.yml)<br>[.github/workflows/coverage_test.yml](../../../../sources/AstrBotDevs__AstrBot/.github/workflows/coverage_test.yml)<br>[.github/workflows/dashboard_ci.yml](../../../../sources/AstrBotDevs__AstrBot/.github/workflows/dashboard_ci.yml)<br>[.github/workflows/docker-image.yml](../../../../sources/AstrBotDevs__AstrBot/.github/workflows/docker-image.yml) |
| 컨테이너/배포 | 41 | [compose.yml](../../../../sources/AstrBotDevs__AstrBot/compose.yml)<br>[Dockerfile](../../../../sources/AstrBotDevs__AstrBot/Dockerfile)<br>[k8s/astrbot_with_napcat/00-namespace.yaml](../../../../sources/AstrBotDevs__AstrBot/k8s/astrbot_with_napcat/00-namespace.yaml)<br>[k8s/astrbot_with_napcat/01-pvc.yaml](../../../../sources/AstrBotDevs__AstrBot/k8s/astrbot_with_napcat/01-pvc.yaml)<br>[k8s/astrbot_with_napcat/02-deployment.yaml](../../../../sources/AstrBotDevs__AstrBot/k8s/astrbot_with_napcat/02-deployment.yaml)<br>[k8s/astrbot_with_napcat/03-service-nodeport.yaml](../../../../sources/AstrBotDevs__AstrBot/k8s/astrbot_with_napcat/03-service-nodeport.yaml) |
| 보안/정책 | 17 | [tests/test_security_fixes.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_security_fixes.py)<br>[tests/test_skill_manager_sandbox_cache.py](../../../../sources/AstrBotDevs__AstrBot/tests/test_skill_manager_sandbox_cache.py)<br>[tests/unit/test_tool_permission.py](../../../../sources/AstrBotDevs__AstrBot/tests/unit/test_tool_permission.py)<br>[docs/zh/use/astrbot-agent-sandbox.md](../../../../sources/AstrBotDevs__AstrBot/docs/zh/use/astrbot-agent-sandbox.md)<br>[docs/en/use/astrbot-agent-sandbox.md](../../../../sources/AstrBotDevs__AstrBot/docs/en/use/astrbot-agent-sandbox.md)<br>[docs/en/use/astrbot-sandbox.md](../../../../sources/AstrBotDevs__AstrBot/docs/en/use/astrbot-sandbox.md) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/AstrBotDevs__AstrBot/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/AstrBotDevs__AstrBot/.github/copilot-instructions.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/unit/test_mcp_client_schema.py`, `docs/zh/use/mcp.md`, `docs/en/use/mcp.md`.
2. entrypoint를 따라 실행 흐름 확인: `main.py`, `dashboard/src/App.vue`, `dashboard/src/main.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tests/agent/test_context_manager.py`, `tests/agent/test_token_counter.py`.
4. retrieval/memory/indexing 확인: `tests/test_openai_embedding_source.py`, `docs/zh/index.md`, `docs/zh/use/knowledge-base-old.md`.
5. test/eval 파일로 동작 검증: `tests/conftest.py`, `tests/test_agent_runner_media_resolver.py`, `tests/test_anthropic_kimi_code_provider.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 AI Agent Assistant & development framework that integrates lots of IM platforms, LLMs, plugins and AI feature, and can b. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, Dockerfile, Makefile, README.md이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
