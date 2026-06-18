# NousResearch/hermes-agent 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Local clone structure analysis: 4944 files, 793 directories.

## 요약

- 조사 단위: `sources/NousResearch__hermes-agent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 4,944 files, 793 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp_serve.py, website/static/img/dashboard/admin-mcp.png, website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mcp/mcp-fastmcp.md이고, 의존성 단서는 openai, anthropic, codex, mcp, fastapi, express, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | NousResearch/hermes-agent |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/NousResearch__hermes-agent](../../../../sources/NousResearch__hermes-agent) |
| 기존 보고서 | [reports/clone-structures/NousResearch__hermes-agent.md](../../../clone-structures/NousResearch__hermes-agent.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 4944 / 793 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .github, .plans, acp_adapter, acp_registry, agent, apps, assets, cron, datagen-config-examples, docker, docs, gateway, hermes_cli, infographic, locales, nix, optional-mcps, optional-skills, packaging, plans |
| 상위 확장자 | .py: 2225, .md: 1349, .ts: 555, .tsx: 281, .yaml: 98, .json: 56, .png: 56, .xsd: 39, .cjs: 37, (none): 32, .mjs: 28, .yml: 27 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 43 |
| apps/desktop | apps workspace | 32 |
| web | source boundary | 11 |
| apps/shared | apps workspace | 4 |
| apps/bootstrap-installer | apps workspace | 3 |
| docs | documentation surface | 2 |
| .github | ci surface | 1 |
| acp_adapter | top-level component | 1 |
| acp_registry | top-level component | 1 |
| agent | top-level component | 1 |
| apps | source boundary | 1 |
| assets | top-level component | 1 |
| cron | top-level component | 1 |
| datagen-config-examples | top-level component | 1 |
| docker | documentation surface | 1 |
| gateway | top-level component | 1 |
| hermes_cli | top-level component | 1 |
| infographic | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | postinstall | echo '✅ Browser tools ready. Run: python run_agent.py --help' |
| utility | package.json | install:root | npm install --workspaces=false |
| utility | package.json | install:web | npm install --workspace web |
| utility | package.json | install:tui | npm install --workspace ui-tui |
| utility | package.json | install:desktop | npm install --workspace apps/desktop |
| utility | package.json | audit:root | npm audit --workspaces=false |
| utility | package.json | audit:web | npm audit --workspace web |
| utility | package.json | audit:tui | npm audit --workspace ui-tui |
| utility | package.json | audit:fix:root | npm audit fix --workspaces=false |
| utility | package.json | audit:fix:web | npm audit fix --workspace web |
| utility | package.json | audit:fix:tui | npm audit fix --workspace ui-tui |
| utility | pyproject.toml | hermes | hermes |
| utility | pyproject.toml | hermes-agent | hermes-agent |
| utility | pyproject.toml | hermes-acp | hermes-acp |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp, codex |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | fastapi, express, next |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [mcp_serve.py](../../../../sources/NousResearch__hermes-agent/mcp_serve.py) | mcp signal |
| mcp | [website/static/img/dashboard/admin-mcp.png](../../../../sources/NousResearch__hermes-agent/website/static/img/dashboard/admin-mcp.png) | mcp signal |
| mcp | [website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mcp/mcp-fastmcp.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mcp/mcp-fastmcp.md) | mcp signal |
| mcp | [website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mcp/mcp-mcporter.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mcp/mcp-mcporter.md) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/NousResearch__hermes-agent/AGENTS.md) | agentRuntime signal |
| agentRuntime | [website/src/pages/skills/index.tsx](../../../../sources/NousResearch__hermes-agent/website/src/pages/skills/index.tsx) | agentRuntime signal |
| agentRuntime | [website/src/pages/skills/styles.module.css](../../../../sources/NousResearch__hermes-agent/website/src/pages/skills/styles.module.css) | agentRuntime signal |
| agentRuntime | [website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/google-workspace.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/google-workspace.md) | agentRuntime signal |
| entrypoints | [web/src/App.tsx](../../../../sources/NousResearch__hermes-agent/web/src/App.tsx) | entrypoints signal |
| entrypoints | [web/src/index.css](../../../../sources/NousResearch__hermes-agent/web/src/index.css) | entrypoints signal |
| entrypoints | [web/src/main.tsx](../../../../sources/NousResearch__hermes-agent/web/src/main.tsx) | entrypoints signal |
| entrypoints | [ui-tui/src/app.tsx](../../../../sources/NousResearch__hermes-agent/ui-tui/src/app.tsx) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 412 | [web/src/App.tsx](../../../../sources/NousResearch__hermes-agent/web/src/App.tsx)<br>[web/src/index.css](../../../../sources/NousResearch__hermes-agent/web/src/index.css)<br>[web/src/main.tsx](../../../../sources/NousResearch__hermes-agent/web/src/main.tsx)<br>[ui-tui/src/app.tsx](../../../../sources/NousResearch__hermes-agent/ui-tui/src/app.tsx)<br>[tui_gateway/server.py](../../../../sources/NousResearch__hermes-agent/tui_gateway/server.py)<br>[skills/mlops/inference/llama-cpp/references/server.md](../../../../sources/NousResearch__hermes-agent/skills/mlops/inference/llama-cpp/references/server.md)<br>[plugins/google_meet/node/server.py](../../../../sources/NousResearch__hermes-agent/plugins/google_meet/node/server.py)<br>[hermes_cli/main.py](../../../../sources/NousResearch__hermes-agent/hermes_cli/main.py) |
| agentRuntime | 1696 | [AGENTS.md](../../../../sources/NousResearch__hermes-agent/AGENTS.md)<br>[website/src/pages/skills/index.tsx](../../../../sources/NousResearch__hermes-agent/website/src/pages/skills/index.tsx)<br>[website/src/pages/skills/styles.module.css](../../../../sources/NousResearch__hermes-agent/website/src/pages/skills/styles.module.css)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/google-workspace.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/google-workspace.md)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/web-development/web-development-page-agent.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/web-development/web-development-page-agent.md)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/software-development/software-development-rest-graphql-debug.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/software-development/software-development-rest-graphql-debug.md)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/security/security-1password.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/security/security-1password.md)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/security/security-oss-forensics.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/security/security-oss-forensics.md) |
| mcp | 97 | [mcp_serve.py](../../../../sources/NousResearch__hermes-agent/mcp_serve.py)<br>[website/static/img/dashboard/admin-mcp.png](../../../../sources/NousResearch__hermes-agent/website/static/img/dashboard/admin-mcp.png)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mcp/mcp-fastmcp.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mcp/mcp-fastmcp.md)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mcp/mcp-mcporter.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mcp/mcp-mcporter.md)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/creative/creative-blender-mcp.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/creative/creative-blender-mcp.md)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/creative/creative-touchdesigner-mcp.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/creative/creative-touchdesigner-mcp.md)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/mcp.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/mcp.md)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/mcp-config-reference.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reference/mcp-config-reference.md) |
| retrieval | 139 | [website/src/pages/skills/index.tsx](../../../../sources/NousResearch__hermes-agent/website/src/pages/skills/index.tsx)<br>[website/src/components/UserStoriesCollage/index.tsx](../../../../sources/NousResearch__hermes-agent/website/src/components/UserStoriesCollage/index.tsx)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/index.mdx](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/index.mdx)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/research/research-llm-wiki.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/research/research-llm-wiki.md)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/secrets/index.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/secrets/index.md)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/messaging/index.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/messaging/index.md)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/memory-providers.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/memory-providers.md)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/memory.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/features/memory.md) |
| spec | 25 | [website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/creative/creative-architecture-diagram.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/creative/creative-architecture-diagram.md)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/creative/creative-claude-design.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/creative/creative-claude-design.md)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/creative/creative-design-md.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/creative/creative-design-md.md)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/developer-guide/architecture.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/developer-guide/architecture.md)<br>[website/docs/user-guide/skills/bundled/creative/creative-architecture-diagram.md](../../../../sources/NousResearch__hermes-agent/website/docs/user-guide/skills/bundled/creative/creative-architecture-diagram.md)<br>[website/docs/user-guide/skills/bundled/creative/creative-claude-design.md](../../../../sources/NousResearch__hermes-agent/website/docs/user-guide/skills/bundled/creative/creative-claude-design.md)<br>[website/docs/user-guide/skills/bundled/creative/creative-design-md.md](../../../../sources/NousResearch__hermes-agent/website/docs/user-guide/skills/bundled/creative/creative-design-md.md)<br>[website/docs/developer-guide/architecture.md](../../../../sources/NousResearch__hermes-agent/website/docs/developer-guide/architecture.md) |
| eval | 1734 | [website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/dogfood/dogfood-adversarial-ux-test.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/dogfood/dogfood-adversarial-ux-test.md)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/software-development/software-development-test-driven-development.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/software-development/software-development-test-driven-development.md)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/mlops/mlops-evaluation-lm-evaluation-harness.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/mlops/mlops-evaluation-lm-evaluation-harness.md)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/mlops/mlops-evaluation-weights-and-biases.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/mlops/mlops-evaluation-weights-and-biases.md)<br>[website/docs/user-guide/skills/optional/dogfood/dogfood-adversarial-ux-test.md](../../../../sources/NousResearch__hermes-agent/website/docs/user-guide/skills/optional/dogfood/dogfood-adversarial-ux-test.md)<br>[website/docs/user-guide/skills/bundled/software-development/software-development-test-driven-development.md](../../../../sources/NousResearch__hermes-agent/website/docs/user-guide/skills/bundled/software-development/software-development-test-driven-development.md)<br>[website/docs/user-guide/skills/bundled/mlops/mlops-evaluation-lm-evaluation-harness.md](../../../../sources/NousResearch__hermes-agent/website/docs/user-guide/skills/bundled/mlops/mlops-evaluation-lm-evaluation-harness.md)<br>[website/docs/user-guide/skills/bundled/mlops/mlops-evaluation-weights-and-biases.md](../../../../sources/NousResearch__hermes-agent/website/docs/user-guide/skills/bundled/mlops/mlops-evaluation-weights-and-biases.md) |
| security | 211 | [SECURITY.md](../../../../sources/NousResearch__hermes-agent/SECURITY.md)<br>[website/static/img/kanban-tutorial/08-pipeline-auth.png](../../../../sources/NousResearch__hermes-agent/website/static/img/kanban-tutorial/08-pipeline-auth.png)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/security.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/security.md)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/security/security-1password.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/security/security-1password.md)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/security/security-oss-forensics.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/security/security-oss-forensics.md)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/security/security-sherlock.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/security/security-sherlock.md)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/github/github-github-auth.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/github/github-github-auth.md)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/minimax-oauth.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/minimax-oauth.md) |
| ci | 17 | [.github/workflows/build-windows-installer.yml](../../../../sources/NousResearch__hermes-agent/.github/workflows/build-windows-installer.yml)<br>[.github/workflows/contributor-check.yml](../../../../sources/NousResearch__hermes-agent/.github/workflows/contributor-check.yml)<br>[.github/workflows/deploy-site.yml](../../../../sources/NousResearch__hermes-agent/.github/workflows/deploy-site.yml)<br>[.github/workflows/docker-lint.yml](../../../../sources/NousResearch__hermes-agent/.github/workflows/docker-lint.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/NousResearch__hermes-agent/.github/workflows/docker-publish.yml)<br>[.github/workflows/docs-site-checks.yml](../../../../sources/NousResearch__hermes-agent/.github/workflows/docs-site-checks.yml)<br>[.github/workflows/history-check.yml](../../../../sources/NousResearch__hermes-agent/.github/workflows/history-check.yml)<br>[.github/workflows/lint.yml](../../../../sources/NousResearch__hermes-agent/.github/workflows/lint.yml) |
| container | 4 | [docker-compose.windows.yml](../../../../sources/NousResearch__hermes-agent/docker-compose.windows.yml)<br>[docker-compose.yml](../../../../sources/NousResearch__hermes-agent/docker-compose.yml)<br>[Dockerfile](../../../../sources/NousResearch__hermes-agent/Dockerfile)<br>[tests/e2e/matrix_xsign_bootstrap/docker-compose.yml](../../../../sources/NousResearch__hermes-agent/tests/e2e/matrix_xsign_bootstrap/docker-compose.yml) |
| instruction | 2 | [AGENTS.md](../../../../sources/NousResearch__hermes-agent/AGENTS.md)<br>[skills/creative/popular-web-designs/templates/claude.md](../../../../sources/NousResearch__hermes-agent/skills/creative/popular-web-designs/templates/claude.md) |
| docs | 773 | [README.md](../../../../sources/NousResearch__hermes-agent/README.md)<br>[README.ur-pk.md](../../../../sources/NousResearch__hermes-agent/README.ur-pk.md)<br>[README.zh-CN.md](../../../../sources/NousResearch__hermes-agent/README.zh-CN.md)<br>[website/.gitignore](../../../../sources/NousResearch__hermes-agent/website/.gitignore)<br>[website/docusaurus.config.ts](../../../../sources/NousResearch__hermes-agent/website/docusaurus.config.ts)<br>[website/package-lock.json](../../../../sources/NousResearch__hermes-agent/website/package-lock.json)<br>[website/package.json](../../../../sources/NousResearch__hermes-agent/website/package.json)<br>[website/README.md](../../../../sources/NousResearch__hermes-agent/website/README.md) |
| config | 21 | [package.json](../../../../sources/NousResearch__hermes-agent/package.json)<br>[pyproject.toml](../../../../sources/NousResearch__hermes-agent/pyproject.toml)<br>[uv.lock](../../../../sources/NousResearch__hermes-agent/uv.lock)<br>[website/package.json](../../../../sources/NousResearch__hermes-agent/website/package.json)<br>[website/tsconfig.json](../../../../sources/NousResearch__hermes-agent/website/tsconfig.json)<br>[web/package.json](../../../../sources/NousResearch__hermes-agent/web/package.json)<br>[web/tsconfig.json](../../../../sources/NousResearch__hermes-agent/web/tsconfig.json)<br>[ui-tui/package.json](../../../../sources/NousResearch__hermes-agent/ui-tui/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1734 | [website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/dogfood/dogfood-adversarial-ux-test.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/dogfood/dogfood-adversarial-ux-test.md)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/software-development/software-development-test-driven-development.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/software-development/software-development-test-driven-development.md)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/mlops/mlops-evaluation-lm-evaluation-harness.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/mlops/mlops-evaluation-lm-evaluation-harness.md)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/mlops/mlops-evaluation-weights-and-biases.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/mlops/mlops-evaluation-weights-and-biases.md)<br>[website/docs/user-guide/skills/optional/dogfood/dogfood-adversarial-ux-test.md](../../../../sources/NousResearch__hermes-agent/website/docs/user-guide/skills/optional/dogfood/dogfood-adversarial-ux-test.md)<br>[website/docs/user-guide/skills/bundled/software-development/software-development-test-driven-development.md](../../../../sources/NousResearch__hermes-agent/website/docs/user-guide/skills/bundled/software-development/software-development-test-driven-development.md) |
| CI workflow | 17 | [.github/workflows/build-windows-installer.yml](../../../../sources/NousResearch__hermes-agent/.github/workflows/build-windows-installer.yml)<br>[.github/workflows/contributor-check.yml](../../../../sources/NousResearch__hermes-agent/.github/workflows/contributor-check.yml)<br>[.github/workflows/deploy-site.yml](../../../../sources/NousResearch__hermes-agent/.github/workflows/deploy-site.yml)<br>[.github/workflows/docker-lint.yml](../../../../sources/NousResearch__hermes-agent/.github/workflows/docker-lint.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/NousResearch__hermes-agent/.github/workflows/docker-publish.yml)<br>[.github/workflows/docs-site-checks.yml](../../../../sources/NousResearch__hermes-agent/.github/workflows/docs-site-checks.yml) |
| 컨테이너/배포 | 4 | [docker-compose.windows.yml](../../../../sources/NousResearch__hermes-agent/docker-compose.windows.yml)<br>[docker-compose.yml](../../../../sources/NousResearch__hermes-agent/docker-compose.yml)<br>[Dockerfile](../../../../sources/NousResearch__hermes-agent/Dockerfile)<br>[tests/e2e/matrix_xsign_bootstrap/docker-compose.yml](../../../../sources/NousResearch__hermes-agent/tests/e2e/matrix_xsign_bootstrap/docker-compose.yml) |
| 보안/정책 | 211 | [SECURITY.md](../../../../sources/NousResearch__hermes-agent/SECURITY.md)<br>[website/static/img/kanban-tutorial/08-pipeline-auth.png](../../../../sources/NousResearch__hermes-agent/website/static/img/kanban-tutorial/08-pipeline-auth.png)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/security.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/security.md)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/security/security-1password.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/security/security-1password.md)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/security/security-oss-forensics.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/security/security-oss-forensics.md)<br>[website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/security/security-sherlock.md](../../../../sources/NousResearch__hermes-agent/website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/security/security-sherlock.md) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/NousResearch__hermes-agent/AGENTS.md)<br>[skills/creative/popular-web-designs/templates/claude.md](../../../../sources/NousResearch__hermes-agent/skills/creative/popular-web-designs/templates/claude.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `mcp_serve.py`, `website/static/img/dashboard/admin-mcp.png`, `website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/mcp/mcp-fastmcp.md`.
2. entrypoint를 따라 실행 흐름 확인: `web/src/App.tsx`, `web/src/index.css`, `web/src/main.tsx`.
3. agent/tool runtime 매핑: `AGENTS.md`, `website/src/pages/skills/index.tsx`, `website/src/pages/skills/styles.module.css`.
4. retrieval/memory/indexing 확인: `website/src/pages/skills/index.tsx`, `website/src/components/UserStoriesCollage/index.tsx`, `website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/index.mdx`.
5. test/eval 파일로 동작 검증: `website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/optional/dogfood/dogfood-adversarial-ux-test.md`, `website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/software-development/software-development-test-driven-development.md`, `website/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/skills/bundled/mlops/mlops-evaluation-lm-evaluation-harness.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 4944 files, 793 directories.. 핵심 구조 신호는 package.json, pyproject.toml, Dockerfile, docker-compose.yml, README.md, openai이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
