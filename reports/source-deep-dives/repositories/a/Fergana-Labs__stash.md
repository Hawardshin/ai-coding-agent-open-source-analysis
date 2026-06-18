# Fergana-Labs/stash 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Shared memory for your team's coding agents

## 요약

- 조사 단위: `sources/Fergana-Labs__stash` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,019 files, 214 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=powerpoint-mcp/.env.example, powerpoint-mcp/.gitignore, powerpoint-mcp/Dockerfile이고, 의존성 단서는 mcp, typer, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Fergana-Labs/stash |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 94 |
| Forks | 22 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Fergana-Labs__stash](../../../../sources/Fergana-Labs__stash) |
| 기존 보고서 | [reports/global-trending/repositories/Fergana-Labs__stash.md](../../../global-trending/repositories/Fergana-Labs__stash.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1019 / 214 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .claude-plugin, .github, backend, chrome_extension, cli, collab, docs, frontend, plugins, powerpoint-mcp, scripts, sdk, stashai, www |
| 상위 확장자 | .py: 503, .tsx: 213, .ts: 90, .json: 50, .md: 35, .png: 20, (none): 19, .svg: 16, .jsx: 13, .sh: 11, .yml: 9, .html: 8 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 23 |
| .github | ci surface | 1 |
| backend | top-level component | 1 |
| chrome_extension | top-level component | 1 |
| cli | top-level component | 1 |
| collab | top-level component | 1 |
| frontend | top-level component | 1 |
| plugins | top-level component | 1 |
| powerpoint-mcp | top-level component | 1 |
| scripts | top-level component | 1 |
| sdk | top-level component | 1 |
| stashai | top-level component | 1 |
| www | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | stash | stash |
| utility | pyproject.toml | stash-mcp | stash-mcp |


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
| mcp | [powerpoint-mcp/.env.example](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/.env.example) | mcp signal |
| mcp | [powerpoint-mcp/.gitignore](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/.gitignore) | mcp signal |
| mcp | [powerpoint-mcp/Dockerfile](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/Dockerfile) | mcp signal |
| mcp | [powerpoint-mcp/pyproject.toml](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/pyproject.toml) | mcp signal |
| agentRuntime | [www/app/pages/agents/page.tsx](../../../../sources/Fergana-Labs__stash/www/app/pages/agents/page.tsx) | agentRuntime signal |
| agentRuntime | [www/app/pages/agents/raw/route.ts](../../../../sources/Fergana-Labs__stash/www/app/pages/agents/raw/route.ts) | agentRuntime signal |
| agentRuntime | [www/app/pages/_lib/agent-docs.ts](../../../../sources/Fergana-Labs__stash/www/app/pages/_lib/agent-docs.ts) | agentRuntime signal |
| agentRuntime | [www/app/memory/page.tsx](../../../../sources/Fergana-Labs__stash/www/app/memory/page.tsx) | agentRuntime signal |
| entrypoints | [collab/src/server.ts](../../../../sources/Fergana-Labs__stash/collab/src/server.ts) | entrypoints signal |
| entrypoints | [cli/main.py](../../../../sources/Fergana-Labs__stash/cli/main.py) | entrypoints signal |
| entrypoints | [backend/main.py](../../../../sources/Fergana-Labs__stash/backend/main.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/Fergana-Labs__stash/CLAUDE.md) | instruction signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [collab/src/server.ts](../../../../sources/Fergana-Labs__stash/collab/src/server.ts)<br>[cli/main.py](../../../../sources/Fergana-Labs__stash/cli/main.py)<br>[backend/main.py](../../../../sources/Fergana-Labs__stash/backend/main.py) |
| agentRuntime | 66 | [www/app/pages/agents/page.tsx](../../../../sources/Fergana-Labs__stash/www/app/pages/agents/page.tsx)<br>[www/app/pages/agents/raw/route.ts](../../../../sources/Fergana-Labs__stash/www/app/pages/agents/raw/route.ts)<br>[www/app/pages/_lib/agent-docs.ts](../../../../sources/Fergana-Labs__stash/www/app/pages/_lib/agent-docs.ts)<br>[www/app/memory/page.tsx](../../../../sources/Fergana-Labs__stash/www/app/memory/page.tsx)<br>[www/app/agent-native-drive/page.tsx](../../../../sources/Fergana-Labs__stash/www/app/agent-native-drive/page.tsx)<br>[www/app/admin/skills/actions.ts](../../../../sources/Fergana-Labs__stash/www/app/admin/skills/actions.ts)<br>[www/app/admin/skills/page.tsx](../../../../sources/Fergana-Labs__stash/www/app/admin/skills/page.tsx)<br>[www/app/admin/skills/SkillsAdminClient.tsx](../../../../sources/Fergana-Labs__stash/www/app/admin/skills/SkillsAdminClient.tsx) |
| mcp | 14 | [powerpoint-mcp/.env.example](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/.env.example)<br>[powerpoint-mcp/.gitignore](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/.gitignore)<br>[powerpoint-mcp/Dockerfile](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/Dockerfile)<br>[powerpoint-mcp/pyproject.toml](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/pyproject.toml)<br>[powerpoint-mcp/README.md](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/README.md)<br>[powerpoint-mcp/requirements.txt](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/requirements.txt)<br>[powerpoint-mcp/tests/__init__.py](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/tests/__init__.py)<br>[powerpoint-mcp/src/__init__.py](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/src/__init__.py) |
| retrieval | 16 | [www/app/memory/page.tsx](../../../../sources/Fergana-Labs__stash/www/app/memory/page.tsx)<br>[plugins/openclaw-plugin/index.ts](../../../../sources/Fergana-Labs__stash/plugins/openclaw-plugin/index.ts)<br>[frontend/src/app/onboarding/paths/memory/MemoryAskStep.tsx](../../../../sources/Fergana-Labs__stash/frontend/src/app/onboarding/paths/memory/MemoryAskStep.tsx)<br>`frontend/src/app/(app)/skills/[slug]/embed/loading.tsx`<br>`frontend/src/app/(app)/skills/[slug]/embed/page.tsx`<br>[frontend/public/design/index.html](../../../../sources/Fergana-Labs__stash/frontend/public/design/index.html)<br>[backend/tests/test_embedding_security.py](../../../../sources/Fergana-Labs__stash/backend/tests/test_embedding_security.py)<br>[backend/tests/test_xlsx_ingest.py](../../../../sources/Fergana-Labs__stash/backend/tests/test_xlsx_ingest.py) |
| spec | 25 | [ARCHITECTURE.md](../../../../sources/Fergana-Labs__stash/ARCHITECTURE.md)<br>[www/DESIGN.md](../../../../sources/Fergana-Labs__stash/www/DESIGN.md)<br>[powerpoint-mcp/requirements.txt](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/requirements.txt)<br>[frontend/public/design/design-canvas.jsx](../../../../sources/Fergana-Labs__stash/frontend/public/design/design-canvas.jsx)<br>[frontend/public/design/icons.jsx](../../../../sources/Fergana-Labs__stash/frontend/public/design/icons.jsx)<br>[frontend/public/design/index.html](../../../../sources/Fergana-Labs__stash/frontend/public/design/index.html)<br>[frontend/public/design/mock-data.jsx](../../../../sources/Fergana-Labs__stash/frontend/public/design/mock-data.jsx)<br>[frontend/public/design/shell.jsx](../../../../sources/Fergana-Labs__stash/frontend/public/design/shell.jsx) |
| eval | 175 | [powerpoint-mcp/tests/__init__.py](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/tests/__init__.py)<br>[plugins/tests/conftest.py](../../../../sources/Fergana-Labs__stash/plugins/tests/conftest.py)<br>[plugins/tests/test_adapters.py](../../../../sources/Fergana-Labs__stash/plugins/tests/test_adapters.py)<br>[plugins/tests/test_assets_in_sync.py](../../../../sources/Fergana-Labs__stash/plugins/tests/test_assets_in_sync.py)<br>[plugins/tests/test_event_queue.py](../../../../sources/Fergana-Labs__stash/plugins/tests/test_event_queue.py)<br>[plugins/tests/test_plugin_config.py](../../../../sources/Fergana-Labs__stash/plugins/tests/test_plugin_config.py)<br>[plugins/tests/test_scope.py](../../../../sources/Fergana-Labs__stash/plugins/tests/test_scope.py)<br>[plugins/tests/test_session_upload.py](../../../../sources/Fergana-Labs__stash/plugins/tests/test_session_upload.py) |
| security | 32 | [SECURITY.md](../../../../sources/Fergana-Labs__stash/SECURITY.md)<br>[www/public/.well-known/security.txt](../../../../sources/Fergana-Labs__stash/www/public/.well-known/security.txt)<br>[www/lib/admin-auth.ts](../../../../sources/Fergana-Labs__stash/www/lib/admin-auth.ts)<br>[www/lib/security-headers.ts](../../../../sources/Fergana-Labs__stash/www/lib/security-headers.ts)<br>[www/app/security/page.tsx](../../../../sources/Fergana-Labs__stash/www/app/security/page.tsx)<br>[frontend/src/app/landing-auth-check/LandingAuthCheckClient.tsx](../../../../sources/Fergana-Labs__stash/frontend/src/app/landing-auth-check/LandingAuthCheckClient.tsx)<br>[frontend/src/app/landing-auth-check/page.tsx](../../../../sources/Fergana-Labs__stash/frontend/src/app/landing-auth-check/page.tsx)<br>[docs/security-operations.md](../../../../sources/Fergana-Labs__stash/docs/security-operations.md) |
| ci | 4 | [.github/workflows/bump-plugin-version.yml](../../../../sources/Fergana-Labs__stash/.github/workflows/bump-plugin-version.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/Fergana-Labs__stash/.github/workflows/docker-publish.yml)<br>[.github/workflows/publish.yml](../../../../sources/Fergana-Labs__stash/.github/workflows/publish.yml)<br>[.github/workflows/test.yml](../../../../sources/Fergana-Labs__stash/.github/workflows/test.yml) |
| container | 7 | [docker-compose.local.yml](../../../../sources/Fergana-Labs__stash/docker-compose.local.yml)<br>[docker-compose.prod.yml](../../../../sources/Fergana-Labs__stash/docker-compose.prod.yml)<br>[docker-compose.yml](../../../../sources/Fergana-Labs__stash/docker-compose.yml)<br>[powerpoint-mcp/Dockerfile](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/Dockerfile)<br>[frontend/Dockerfile](../../../../sources/Fergana-Labs__stash/frontend/Dockerfile)<br>[collab/Dockerfile](../../../../sources/Fergana-Labs__stash/collab/Dockerfile)<br>[backend/Dockerfile](../../../../sources/Fergana-Labs__stash/backend/Dockerfile) |
| instruction | 7 | [CLAUDE.md](../../../../sources/Fergana-Labs__stash/CLAUDE.md)<br>[stashai/plugin/assets/opencode/AGENTS.md](../../../../sources/Fergana-Labs__stash/stashai/plugin/assets/opencode/AGENTS.md)<br>[stashai/plugin/assets/codex/AGENTS.md](../../../../sources/Fergana-Labs__stash/stashai/plugin/assets/codex/AGENTS.md)<br>[plugins/opencode-plugin/AGENTS.md](../../../../sources/Fergana-Labs__stash/plugins/opencode-plugin/AGENTS.md)<br>[plugins/gemini-plugin/GEMINI.md](../../../../sources/Fergana-Labs__stash/plugins/gemini-plugin/GEMINI.md)<br>[plugins/codex-plugin/AGENTS.md](../../../../sources/Fergana-Labs__stash/plugins/codex-plugin/AGENTS.md)<br>[plugins/claude-plugin/CLAUDE.md](../../../../sources/Fergana-Labs__stash/plugins/claude-plugin/CLAUDE.md) |
| docs | 45 | [README.md](../../../../sources/Fergana-Labs__stash/README.md)<br>[www/README.md](../../../../sources/Fergana-Labs__stash/www/README.md)<br>[www/app/docs/components.tsx](../../../../sources/Fergana-Labs__stash/www/app/docs/components.tsx)<br>[www/app/docs/layout.tsx](../../../../sources/Fergana-Labs__stash/www/app/docs/layout.tsx)<br>[www/app/docs/page.tsx](../../../../sources/Fergana-Labs__stash/www/app/docs/page.tsx)<br>[www/app/docs/self-hosting/page.tsx](../../../../sources/Fergana-Labs__stash/www/app/docs/self-hosting/page.tsx)<br>[www/app/docs/quickstart/page.tsx](../../../../sources/Fergana-Labs__stash/www/app/docs/quickstart/page.tsx)<br>[www/app/docs/contributing/page.tsx](../../../../sources/Fergana-Labs__stash/www/app/docs/contributing/page.tsx) |
| config | 18 | [pyproject.toml](../../../../sources/Fergana-Labs__stash/pyproject.toml)<br>[uv.lock](../../../../sources/Fergana-Labs__stash/uv.lock)<br>[www/package.json](../../../../sources/Fergana-Labs__stash/www/package.json)<br>[www/tsconfig.json](../../../../sources/Fergana-Labs__stash/www/tsconfig.json)<br>[stashai/plugin/assets/opencode/package.json](../../../../sources/Fergana-Labs__stash/stashai/plugin/assets/opencode/package.json)<br>[sdk/pyproject.toml](../../../../sources/Fergana-Labs__stash/sdk/pyproject.toml)<br>[powerpoint-mcp/pyproject.toml](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/pyproject.toml)<br>[powerpoint-mcp/requirements.txt](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 175 | [powerpoint-mcp/tests/__init__.py](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/tests/__init__.py)<br>[plugins/tests/conftest.py](../../../../sources/Fergana-Labs__stash/plugins/tests/conftest.py)<br>[plugins/tests/test_adapters.py](../../../../sources/Fergana-Labs__stash/plugins/tests/test_adapters.py)<br>[plugins/tests/test_assets_in_sync.py](../../../../sources/Fergana-Labs__stash/plugins/tests/test_assets_in_sync.py)<br>[plugins/tests/test_event_queue.py](../../../../sources/Fergana-Labs__stash/plugins/tests/test_event_queue.py)<br>[plugins/tests/test_plugin_config.py](../../../../sources/Fergana-Labs__stash/plugins/tests/test_plugin_config.py) |
| CI workflow | 4 | [.github/workflows/bump-plugin-version.yml](../../../../sources/Fergana-Labs__stash/.github/workflows/bump-plugin-version.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/Fergana-Labs__stash/.github/workflows/docker-publish.yml)<br>[.github/workflows/publish.yml](../../../../sources/Fergana-Labs__stash/.github/workflows/publish.yml)<br>[.github/workflows/test.yml](../../../../sources/Fergana-Labs__stash/.github/workflows/test.yml) |
| 컨테이너/배포 | 7 | [docker-compose.local.yml](../../../../sources/Fergana-Labs__stash/docker-compose.local.yml)<br>[docker-compose.prod.yml](../../../../sources/Fergana-Labs__stash/docker-compose.prod.yml)<br>[docker-compose.yml](../../../../sources/Fergana-Labs__stash/docker-compose.yml)<br>[powerpoint-mcp/Dockerfile](../../../../sources/Fergana-Labs__stash/powerpoint-mcp/Dockerfile)<br>[frontend/Dockerfile](../../../../sources/Fergana-Labs__stash/frontend/Dockerfile)<br>[collab/Dockerfile](../../../../sources/Fergana-Labs__stash/collab/Dockerfile) |
| 보안/정책 | 32 | [SECURITY.md](../../../../sources/Fergana-Labs__stash/SECURITY.md)<br>[www/public/.well-known/security.txt](../../../../sources/Fergana-Labs__stash/www/public/.well-known/security.txt)<br>[www/lib/admin-auth.ts](../../../../sources/Fergana-Labs__stash/www/lib/admin-auth.ts)<br>[www/lib/security-headers.ts](../../../../sources/Fergana-Labs__stash/www/lib/security-headers.ts)<br>[www/app/security/page.tsx](../../../../sources/Fergana-Labs__stash/www/app/security/page.tsx)<br>[frontend/src/app/landing-auth-check/LandingAuthCheckClient.tsx](../../../../sources/Fergana-Labs__stash/frontend/src/app/landing-auth-check/LandingAuthCheckClient.tsx) |
| 에이전트 지시문 | 7 | [CLAUDE.md](../../../../sources/Fergana-Labs__stash/CLAUDE.md)<br>[stashai/plugin/assets/opencode/AGENTS.md](../../../../sources/Fergana-Labs__stash/stashai/plugin/assets/opencode/AGENTS.md)<br>[stashai/plugin/assets/codex/AGENTS.md](../../../../sources/Fergana-Labs__stash/stashai/plugin/assets/codex/AGENTS.md)<br>[plugins/opencode-plugin/AGENTS.md](../../../../sources/Fergana-Labs__stash/plugins/opencode-plugin/AGENTS.md)<br>[plugins/gemini-plugin/GEMINI.md](../../../../sources/Fergana-Labs__stash/plugins/gemini-plugin/GEMINI.md)<br>[plugins/codex-plugin/AGENTS.md](../../../../sources/Fergana-Labs__stash/plugins/codex-plugin/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `powerpoint-mcp/.env.example`, `powerpoint-mcp/.gitignore`, `powerpoint-mcp/Dockerfile`.
2. entrypoint를 따라 실행 흐름 확인: `collab/src/server.ts`, `cli/main.py`, `backend/main.py`.
3. agent/tool runtime 매핑: `www/app/pages/agents/page.tsx`, `www/app/pages/agents/raw/route.ts`, `www/app/pages/_lib/agent-docs.ts`.
4. retrieval/memory/indexing 확인: `www/app/memory/page.tsx`, `plugins/openclaw-plugin/index.ts`, `frontend/src/app/onboarding/paths/memory/MemoryAskStep.tsx`.
5. test/eval 파일로 동작 검증: `powerpoint-mcp/tests/__init__.py`, `plugins/tests/conftest.py`, `plugins/tests/test_adapters.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Shared memory for your team's coding agents. 핵심 구조 신호는 Python, pyproject.toml, docker-compose.yml, README.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
