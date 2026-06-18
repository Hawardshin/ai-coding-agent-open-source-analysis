# langchain-ai/open-swe 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Local clone structure analysis: 410 files, 38 directories.

## 요약

- 조사 단위: `sources/langchain-ai__open-swe` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 409 files, 37 directories, depth score 112, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=agent/integrations/datadog_mcp.py이고, 의존성 단서는 openai, anthropic, mcp, langchain, langgraph, fastapi, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | langchain-ai/open-swe |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 9994 |
| Forks | 1134 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/langchain-ai__open-swe](../../../../sources/langchain-ai__open-swe) |
| 기존 보고서 | [reports/global-trending/repositories/langchain-ai__open-swe.md](../../../global-trending/repositories/langchain-ai__open-swe.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 409 / 37 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, agent, evals, scripts, static, tests, ui |
| 상위 확장자 | .py: 228, .tsx: 93, .ts: 31, .json: 11, .md: 11, (none): 9, .png: 7, .svg: 5, .yml: 5, .lock: 3, .css: 2, .toml: 2 |
| 소스 패턴 | api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 50 |
| .github | ci surface | 1 |
| agent | top-level component | 1 |
| evals | top-level component | 1 |
| scripts | top-level component | 1 |
| static | top-level component | 1 |
| ui | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | all | make all |
| serve-dev | Makefile | dev | make dev |
| utility | Makefile | run | make run |
| utility | Makefile | install | make install |
| test | Makefile | integration_tests | make integration_tests |
| quality | Makefile | lint | make lint |
| quality | Makefile | format | make format |
| quality | Makefile | format-check | make format-check |
| utility | Makefile | help | make help |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | langchain, langgraph |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [agent/integrations/datadog_mcp.py](../../../../sources/langchain-ai__open-swe/agent/integrations/datadog_mcp.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/langchain-ai__open-swe/AGENTS.md) | agentRuntime signal |
| agentRuntime | [ui/src/styles/agents.css](../../../../sources/langchain-ai__open-swe/ui/src/styles/agents.css) | agentRuntime signal |
| agentRuntime | [ui/src/routes/agents_.instructions.tsx](../../../../sources/langchain-ai__open-swe/ui/src/routes/agents_.instructions.tsx) | agentRuntime signal |
| agentRuntime | [ui/src/routes/agents.tsx](../../../../sources/langchain-ai__open-swe/ui/src/routes/agents.tsx) | agentRuntime signal |
| entrypoints | [agent/server.py](../../../../sources/langchain-ai__open-swe/agent/server.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/langchain-ai__open-swe/CLAUDE.md) | instruction signal |
| config | [Makefile](../../../../sources/langchain-ai__open-swe/Makefile) | config signal |
| config | [pyproject.toml](../../../../sources/langchain-ai__open-swe/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/langchain-ai__open-swe/uv.lock) | config signal |
| config | [ui/package.json](../../../../sources/langchain-ai__open-swe/ui/package.json) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/langchain-ai__open-swe/.github/workflows/ci.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [agent/server.py](../../../../sources/langchain-ai__open-swe/agent/server.py) |
| agentRuntime | 204 | [AGENTS.md](../../../../sources/langchain-ai__open-swe/AGENTS.md)<br>[ui/src/styles/agents.css](../../../../sources/langchain-ai__open-swe/ui/src/styles/agents.css)<br>[ui/src/routes/agents_.instructions.tsx](../../../../sources/langchain-ai__open-swe/ui/src/routes/agents_.instructions.tsx)<br>[ui/src/routes/agents.tsx](../../../../sources/langchain-ai__open-swe/ui/src/routes/agents.tsx)<br>[ui/src/routes/agents/$threadId.tsx](../../../../sources/langchain-ai__open-swe/ui/src/routes/agents/$threadId.tsx)<br>[ui/src/routes/agents/index.tsx](../../../../sources/langchain-ai__open-swe/ui/src/routes/agents/index.tsx)<br>[ui/src/routes/agents/threads.tsx](../../../../sources/langchain-ai__open-swe/ui/src/routes/agents/threads.tsx)<br>[ui/src/routes/agents/reviews/$owner.$repo.$number.tsx](../../../../sources/langchain-ai__open-swe/ui/src/routes/agents/reviews/$owner.$repo.$number.tsx) |
| mcp | 1 | [agent/integrations/datadog_mcp.py](../../../../sources/langchain-ai__open-swe/agent/integrations/datadog_mcp.py) |
| retrieval | 8 | [ui/src/routes/index.tsx](../../../../sources/langchain-ai__open-swe/ui/src/routes/index.tsx)<br>[ui/src/routes/agents/index.tsx](../../../../sources/langchain-ai__open-swe/ui/src/routes/agents/index.tsx)<br>[ui/src/routes/agents/reviews/index.tsx](../../../../sources/langchain-ai__open-swe/ui/src/routes/agents/reviews/index.tsx)<br>[ui/src/routes/agents/automations/index.tsx](../../../../sources/langchain-ai__open-swe/ui/src/routes/agents/automations/index.tsx)<br>[ui/src/components/agents/z-index.ts](../../../../sources/langchain-ai__open-swe/ui/src/components/agents/z-index.ts)<br>[ui/src/components/agents/subagents/index.ts](../../../../sources/langchain-ai__open-swe/ui/src/components/agents/subagents/index.ts)<br>[ui/src/components/agents/ported/index.ts](../../../../sources/langchain-ai__open-swe/ui/src/components/agents/ported/index.ts)<br>[ui/src/components/agents/messages/index.ts](../../../../sources/langchain-ai__open-swe/ui/src/components/agents/messages/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 103 | [ui/src/lib/repo.test.ts](../../../../sources/langchain-ai__open-swe/ui/src/lib/repo.test.ts)<br>[tests/conftest.py](../../../../sources/langchain-ai__open-swe/tests/conftest.py)<br>[tests/test_account_link.py](../../../../sources/langchain-ai__open-swe/tests/test_account_link.py)<br>[tests/test_agent_instructions.py](../../../../sources/langchain-ai__open-swe/tests/test_agent_instructions.py)<br>[tests/test_agent_schedules.py](../../../../sources/langchain-ai__open-swe/tests/test_agent_schedules.py)<br>[tests/test_agent_subagent_models.py](../../../../sources/langchain-ai__open-swe/tests/test_agent_subagent_models.py)<br>[tests/test_agent_thread_pr_state.py](../../../../sources/langchain-ai__open-swe/tests/test_agent_thread_pr_state.py)<br>[tests/test_agent_usage.py](../../../../sources/langchain-ai__open-swe/tests/test_agent_usage.py) |
| security | 19 | [SECURITY.md](../../../../sources/langchain-ai__open-swe/SECURITY.md)<br>[tests/test_auth_sources.py](../../../../sources/langchain-ai__open-swe/tests/test_auth_sources.py)<br>[tests/test_github_oauth_refresh.py](../../../../sources/langchain-ai__open-swe/tests/test_github_oauth_refresh.py)<br>[tests/test_http_security.py](../../../../sources/langchain-ai__open-swe/tests/test_http_security.py)<br>[tests/test_langsmith_sandbox_config.py](../../../../sources/langchain-ai__open-swe/tests/test_langsmith_sandbox_config.py)<br>[tests/test_langsmith_sandbox_timeout.py](../../../../sources/langchain-ai__open-swe/tests/test_langsmith_sandbox_timeout.py)<br>[tests/test_proxy_auth.py](../../../../sources/langchain-ai__open-swe/tests/test_proxy_auth.py)<br>[tests/test_sandbox_paths.py](../../../../sources/langchain-ai__open-swe/tests/test_sandbox_paths.py) |
| ci | 4 | [.github/workflows/ci.yml](../../../../sources/langchain-ai__open-swe/.github/workflows/ci.yml)<br>[.github/workflows/pr_lint.yml](../../../../sources/langchain-ai__open-swe/.github/workflows/pr_lint.yml)<br>[.github/workflows/promote_main_to_prod.yml](../../../../sources/langchain-ai__open-swe/.github/workflows/promote_main_to_prod.yml)<br>[.github/workflows/reviewer_eval.yml](../../../../sources/langchain-ai__open-swe/.github/workflows/reviewer_eval.yml) |
| container | 1 | [Dockerfile](../../../../sources/langchain-ai__open-swe/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/langchain-ai__open-swe/AGENTS.md)<br>[CLAUDE.md](../../../../sources/langchain-ai__open-swe/CLAUDE.md) |
| docs | 3 | [README.md](../../../../sources/langchain-ai__open-swe/README.md)<br>[ui/README.md](../../../../sources/langchain-ai__open-swe/ui/README.md)<br>[evals/reviewer/README.md](../../../../sources/langchain-ai__open-swe/evals/reviewer/README.md) |
| config | 5 | [Makefile](../../../../sources/langchain-ai__open-swe/Makefile)<br>[pyproject.toml](../../../../sources/langchain-ai__open-swe/pyproject.toml)<br>[uv.lock](../../../../sources/langchain-ai__open-swe/uv.lock)<br>[ui/package.json](../../../../sources/langchain-ai__open-swe/ui/package.json)<br>[ui/tsconfig.json](../../../../sources/langchain-ai__open-swe/ui/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 103 | [ui/src/lib/repo.test.ts](../../../../sources/langchain-ai__open-swe/ui/src/lib/repo.test.ts)<br>[tests/conftest.py](../../../../sources/langchain-ai__open-swe/tests/conftest.py)<br>[tests/test_account_link.py](../../../../sources/langchain-ai__open-swe/tests/test_account_link.py)<br>[tests/test_agent_instructions.py](../../../../sources/langchain-ai__open-swe/tests/test_agent_instructions.py)<br>[tests/test_agent_schedules.py](../../../../sources/langchain-ai__open-swe/tests/test_agent_schedules.py)<br>[tests/test_agent_subagent_models.py](../../../../sources/langchain-ai__open-swe/tests/test_agent_subagent_models.py) |
| CI workflow | 4 | [.github/workflows/ci.yml](../../../../sources/langchain-ai__open-swe/.github/workflows/ci.yml)<br>[.github/workflows/pr_lint.yml](../../../../sources/langchain-ai__open-swe/.github/workflows/pr_lint.yml)<br>[.github/workflows/promote_main_to_prod.yml](../../../../sources/langchain-ai__open-swe/.github/workflows/promote_main_to_prod.yml)<br>[.github/workflows/reviewer_eval.yml](../../../../sources/langchain-ai__open-swe/.github/workflows/reviewer_eval.yml) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/langchain-ai__open-swe/Dockerfile) |
| 보안/정책 | 19 | [SECURITY.md](../../../../sources/langchain-ai__open-swe/SECURITY.md)<br>[tests/test_auth_sources.py](../../../../sources/langchain-ai__open-swe/tests/test_auth_sources.py)<br>[tests/test_github_oauth_refresh.py](../../../../sources/langchain-ai__open-swe/tests/test_github_oauth_refresh.py)<br>[tests/test_http_security.py](../../../../sources/langchain-ai__open-swe/tests/test_http_security.py)<br>[tests/test_langsmith_sandbox_config.py](../../../../sources/langchain-ai__open-swe/tests/test_langsmith_sandbox_config.py)<br>[tests/test_langsmith_sandbox_timeout.py](../../../../sources/langchain-ai__open-swe/tests/test_langsmith_sandbox_timeout.py) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/langchain-ai__open-swe/AGENTS.md)<br>[CLAUDE.md](../../../../sources/langchain-ai__open-swe/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `agent/integrations/datadog_mcp.py`, `AGENTS.md`, `ui/src/styles/agents.css`.
2. entrypoint를 따라 실행 흐름 확인: `agent/server.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `ui/src/styles/agents.css`, `ui/src/routes/agents_.instructions.tsx`.
4. retrieval/memory/indexing 확인: `ui/src/routes/index.tsx`, `ui/src/routes/agents/index.tsx`, `ui/src/routes/agents/reviews/index.tsx`.
5. test/eval 파일로 동작 검증: `ui/src/lib/repo.test.ts`, `tests/conftest.py`, `tests/test_account_link.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 410 files, 38 directories.. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, Makefile, README.md, AGENTS.md이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
