# hoangsonww/Claude-Code-Agent-Monitor 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

🚀 A real-time monitoring dashboard for Claude Code, built with SQLite3, Node.js, Express, React, Vite, TailwindCSS, and WebSockets. It tracks sessions, agent activity, tool usage, and subagent orchestration, providing live analytics, a Kanban status board, status notifications, a cute buddy, and an interactive web interface/MacOS native app.

## 요약

- 조사 단위: `sources/hoangsonww__Claude-Code-Agent-Monitor` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 606 files, 191 directories, depth score 124, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=plugins/ccam-dashboard/.mcp.json, mcp/.env.example, mcp/.gitignore이고, 의존성 단서는 express, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | hoangsonww/Claude-Code-Agent-Monitor |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 467 |
| Forks | 94 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/hoangsonww__Claude-Code-Agent-Monitor](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor) |
| 기존 보고서 | [reports/global-trending/repositories/hoangsonww__Claude-Code-Agent-Monitor.md](../../../global-trending/repositories/hoangsonww__Claude-Code-Agent-Monitor.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 606 / 191 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .agents, .claude, .claude-plugin, .codex, .githooks, .github, .husky, .superpowers, client, deployments, desktop, docs, images, mcp, plugins, scripts, server, statusline, vscode-extension, wiki |
| 상위 확장자 | .md: 96, .js: 79, .ts: 74, .tsx: 72, .json: 70, .yaml: 59, .png: 41, .tf: 37, (none): 21, .sh: 9, .svg: 7, .yml: 7 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| server | source boundary | 31 |
| docs | documentation surface | 18 |
| client | source boundary | 10 |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| deployments | deployment surface | 1 |
| desktop | top-level component | 1 |
| images | top-level component | 1 |
| mcp | top-level component | 1 |
| plugins | top-level component | 1 |
| scripts | top-level component | 1 |
| statusline | top-level component | 1 |
| vscode-extension | top-level component | 1 |
| wiki | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | prepare | git config core.hooksPath .husky \|\| true |
| serve-dev | package.json | dev | node scripts/dev.js |
| serve-dev | package.json | dev:raw | concurrently -n server,client -c blue,green "npm run dev:server" "npm run dev:client" |
| serve-dev | package.json | dev:server | node --watch server/index.js |
| serve-dev | package.json | dev:client | cd client && npm run dev |
| build | package.json | build | cd client && npm run build |
| serve-dev | package.json | start | node server/index.js |
| utility | package.json | setup | npm install && (cd client && npm install) && (cd vscode-extension && npm install) |
| utility | package.json | update:pull-setup | git pull --ff-only && npm run setup |
| utility | package.json | mcp:install | npm --prefix mcp install |
| build | package.json | mcp:build | npm --prefix mcp run build |
| serve-dev | package.json | mcp:start | npm --prefix mcp run start |
| serve-dev | package.json | mcp:start:http | npm --prefix mcp run start:http |
| serve-dev | package.json | mcp:start:repl | npm --prefix mcp run start:repl |
| serve-dev | package.json | mcp:dev | npm --prefix mcp run dev |
| serve-dev | package.json | mcp:dev:http | npm --prefix mcp run dev:http |
| serve-dev | package.json | mcp:dev:repl | npm --prefix mcp run dev:repl |
| quality | package.json | mcp:typecheck | npm --prefix mcp run typecheck |
| build | package.json | mcp:docker:build | docker build -f mcp/Dockerfile -t agent-dashboard-mcp:local . |
| build | package.json | mcp:podman:build | podman build -f mcp/Dockerfile -t localhost/agent-dashboard-mcp:local . |
| utility | package.json | desktop:install | cd desktop && node scripts/install.js |
| serve-dev | package.json | desktop:dev | npm run build && cd desktop && npm run dev |
| build | package.json | desktop:build | cd desktop && npm run build |
| build | package.json | desktop:dmg | npm run build && cd desktop && npm run dmg |
| build | package.json | desktop:dmg:arm64 | npm run build && cd desktop && npm run dmg:arm64 |
| build | package.json | desktop:dmg:x64 | npm run build && cd desktop && npm run dmg:x64 |
| build | package.json | desktop:win | npm run build && cd desktop && npm run win |
| build | package.json | desktop:win:portable | npm run build && cd desktop && npm run win:portable |
| test | package.json | desktop:test | cd desktop && npm test |
| utility | package.json | install-hooks | node scripts/install-hooks.js |
| utility | package.json | seed | node scripts/seed.js |
| utility | package.json | import-history | node scripts/import-history.js |
| utility | package.json | reconcile-tokens | node scripts/import-history.js --reconcile-tokens |
| utility | package.json | clear-data | node scripts/clear-data.js |
| test | package.json | test | node --test server/__tests__/*.test.js && cd client && npm test |
| test | package.json | test:server | node --test server/__tests__/*.test.js |
| test | package.json | test:client | cd client && npm test |
| test | package.json | test:mcp | npm --prefix mcp run test |
| quality | package.json | format | prettier --write . |
| quality | package.json | format:check | prettier --check . |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | express |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [plugins/ccam-dashboard/.mcp.json](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/plugins/ccam-dashboard/.mcp.json) | mcp signal |
| mcp | [mcp/.env.example](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/mcp/.env.example) | mcp signal |
| mcp | [mcp/.gitignore](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/mcp/.gitignore) | mcp signal |
| mcp | [mcp/Dockerfile](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/mcp/Dockerfile) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/AGENTS.md) | agentRuntime signal |
| agentRuntime | [server/routes/agents.js](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/server/routes/agents.js) | agentRuntime signal |
| agentRuntime | [server/routes/hooks.js](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/server/routes/hooks.js) | agentRuntime signal |
| agentRuntime | [server/lib/workflow-ingest.js](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/server/lib/workflow-ingest.js) | agentRuntime signal |
| entrypoints | [plugins/ccam-devtools/bin/ccam-doctor](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/plugins/ccam-devtools/bin/ccam-doctor) | entrypoints signal |
| entrypoints | [plugins/ccam-devtools/bin/ccam-export](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/plugins/ccam-devtools/bin/ccam-export) | entrypoints signal |
| entrypoints | [plugins/ccam-analytics/bin/ccam-stats](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/plugins/ccam-analytics/bin/ccam-stats) | entrypoints signal |
| entrypoints | [mcp/src/index.ts](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/mcp/src/index.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 10 | [plugins/ccam-devtools/bin/ccam-doctor](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/plugins/ccam-devtools/bin/ccam-doctor)<br>[plugins/ccam-devtools/bin/ccam-export](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/plugins/ccam-devtools/bin/ccam-export)<br>[plugins/ccam-analytics/bin/ccam-stats](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/plugins/ccam-analytics/bin/ccam-stats)<br>[mcp/src/index.ts](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/mcp/src/index.ts)<br>[mcp/src/server.ts](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/mcp/src/server.ts)<br>[desktop/src/main.ts](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/desktop/src/main.ts)<br>[client/src/App.tsx](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/client/src/App.tsx)<br>[client/src/index.css](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/client/src/index.css) |
| agentRuntime | 112 | [AGENTS.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/AGENTS.md)<br>[server/routes/agents.js](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/server/routes/agents.js)<br>[server/routes/hooks.js](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/server/routes/hooks.js)<br>[server/lib/workflow-ingest.js](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/server/lib/workflow-ingest.js)<br>[server/__tests__/hook-handler.test.js](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/server/__tests__/hook-handler.test.js)<br>[server/__tests__/workflow-api.test.js](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/server/__tests__/workflow-api.test.js)<br>[server/__tests__/workflow-ingest.test.js](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/server/__tests__/workflow-ingest.test.js)<br>[scripts/hook-handler.js](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/scripts/hook-handler.js) |
| mcp | 57 | [plugins/ccam-dashboard/.mcp.json](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/plugins/ccam-dashboard/.mcp.json)<br>[mcp/.env.example](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/mcp/.env.example)<br>[mcp/.gitignore](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/mcp/.gitignore)<br>[mcp/Dockerfile](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/mcp/Dockerfile)<br>[mcp/package-lock.json](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/mcp/package-lock.json)<br>[mcp/package.json](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/mcp/package.json)<br>[mcp/README.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/mcp/README.md)<br>[mcp/tsconfig.json](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/mcp/tsconfig.json) |
| retrieval | 16 | [index.html](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/index.html)<br>[wiki/i18n-content.js](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/wiki/i18n-content.js)<br>[wiki/index.html](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/wiki/index.html)<br>[wiki/manifest.json](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/wiki/manifest.json)<br>[wiki/script.js](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/wiki/script.js)<br>[wiki/style.css](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/wiki/style.css)<br>[wiki/sw.js](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/wiki/sw.js)<br>[server/index.js](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/server/index.js) |
| spec | 4 | [ARCHITECTURE.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/ARCHITECTURE.md)<br>[docs/superpowers/specs/2026-04-24-agent-conversation-viewer-design.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/docs/superpowers/specs/2026-04-24-agent-conversation-viewer-design.md)<br>[docs/superpowers/specs/2026-05-22-fix-transcript-cache-leak-design.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/docs/superpowers/specs/2026-05-22-fix-transcript-cache-leak-design.md)<br>[docs/superpowers/specs/2026-05-28-tabby-companion-design.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/docs/superpowers/specs/2026-05-28-tabby-companion-design.md) |
| eval | 78 | [vscode-extension/claude-code-agent-monitor-1.0.0.vsix](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/vscode-extension/claude-code-agent-monitor-1.0.0.vsix)<br>[vscode-extension/claude-code-agent-monitor-1.1.0.vsix](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/vscode-extension/claude-code-agent-monitor-1.1.0.vsix)<br>[vscode-extension/claude-code-agent-monitor-1.2.4.vsix](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/vscode-extension/claude-code-agent-monitor-1.2.4.vsix)<br>[server/lib/__tests__/transcript-cache.test.js](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/server/lib/__tests__/transcript-cache.test.js)<br>[server/__tests__/alerts.test.js](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/server/__tests__/alerts.test.js)<br>[server/__tests__/api.test.js](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/server/__tests__/api.test.js)<br>[server/__tests__/cc-config.test.js](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/server/__tests__/cc-config.test.js)<br>[server/__tests__/cc-discovery-helpers.test.js](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/server/__tests__/cc-discovery-helpers.test.js) |
| security | 8 | [mcp/src/policy/tool-guards.ts](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/mcp/src/policy/tool-guards.ts)<br>[.github/SECURITY.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.github/SECURITY.md)<br>[.codex/skills/release-guard/SKILL.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.codex/skills/release-guard/SKILL.md)<br>[.codex/skills/release-guard/references/release-checklist.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.codex/skills/release-guard/references/release-checklist.md)<br>[.codex/skills/release-guard/agents/openai.yaml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.codex/skills/release-guard/agents/openai.yaml)<br>[.agents/skills/release-guard/SKILL.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.agents/skills/release-guard/SKILL.md)<br>[.agents/skills/release-guard/references/release-checklist.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.agents/skills/release-guard/references/release-checklist.md)<br>[.agents/skills/release-guard/agents/openai.yaml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.agents/skills/release-guard/agents/openai.yaml) |
| ci | 5 | [deployments/ci/gitlab-ci/.gitlab-ci.yml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/deployments/ci/gitlab-ci/.gitlab-ci.yml)<br>[deployments/ci/github-actions/ci.yaml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/deployments/ci/github-actions/ci.yaml)<br>[deployments/ci/github-actions/deploy.yaml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/deployments/ci/github-actions/deploy.yaml)<br>[deployments/ci/github-actions/rollback.yaml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/deployments/ci/github-actions/rollback.yaml)<br>[.github/workflows/ci.yml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.github/workflows/ci.yml) |
| container | 50 | [docker-compose.yml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/docker-compose.yml)<br>[Dockerfile](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/Dockerfile)<br>[mcp/Dockerfile](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/mcp/Dockerfile)<br>[deployments/kubernetes/README.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/deployments/kubernetes/README.md)<br>[deployments/kubernetes/strategies/canary/canary-analysis.yaml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/deployments/kubernetes/strategies/canary/canary-analysis.yaml)<br>[deployments/kubernetes/strategies/canary/canary-deployment.yaml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/deployments/kubernetes/strategies/canary/canary-deployment.yaml)<br>[deployments/kubernetes/strategies/blue-green/deployment-blue.yaml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/deployments/kubernetes/strategies/blue-green/deployment-blue.yaml)<br>[deployments/kubernetes/strategies/blue-green/deployment-green.yaml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/deployments/kubernetes/strategies/blue-green/deployment-green.yaml) |
| instruction | 19 | [AGENTS.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/AGENTS.md)<br>[CLAUDE.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/CLAUDE.md)<br>[.codex/config.toml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.codex/config.toml)<br>[.codex/README.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.codex/README.md)<br>[.codex/skills/repo-onboarding/SKILL.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.codex/skills/repo-onboarding/SKILL.md)<br>[.codex/skills/repo-onboarding/references/module-map.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.codex/skills/repo-onboarding/references/module-map.md)<br>[.codex/skills/repo-onboarding/references/verification-map.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.codex/skills/repo-onboarding/references/verification-map.md)<br>[.codex/skills/repo-onboarding/agents/openai.yaml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.codex/skills/repo-onboarding/agents/openai.yaml) |
| docs | 29 | [README-CN.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/README-CN.md)<br>[README-VN.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/README-VN.md)<br>[README.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/README.md)<br>[vscode-extension/README.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/vscode-extension/README.md)<br>[statusline/README.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/statusline/README.md)<br>[server/README.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/server/README.md)<br>[mcp/README.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/mcp/README.md)<br>[docs/API.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/docs/API.md) |
| config | 9 | [Makefile](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/Makefile)<br>[package.json](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/package.json)<br>[vscode-extension/package.json](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/vscode-extension/package.json)<br>[mcp/package.json](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/mcp/package.json)<br>[mcp/tsconfig.json](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/mcp/tsconfig.json)<br>[desktop/package.json](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/desktop/package.json)<br>[desktop/tsconfig.json](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/desktop/tsconfig.json)<br>[client/package.json](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/client/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 78 | [vscode-extension/claude-code-agent-monitor-1.0.0.vsix](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/vscode-extension/claude-code-agent-monitor-1.0.0.vsix)<br>[vscode-extension/claude-code-agent-monitor-1.1.0.vsix](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/vscode-extension/claude-code-agent-monitor-1.1.0.vsix)<br>[vscode-extension/claude-code-agent-monitor-1.2.4.vsix](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/vscode-extension/claude-code-agent-monitor-1.2.4.vsix)<br>[server/lib/__tests__/transcript-cache.test.js](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/server/lib/__tests__/transcript-cache.test.js)<br>[server/__tests__/alerts.test.js](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/server/__tests__/alerts.test.js)<br>[server/__tests__/api.test.js](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/server/__tests__/api.test.js) |
| CI workflow | 5 | [deployments/ci/gitlab-ci/.gitlab-ci.yml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/deployments/ci/gitlab-ci/.gitlab-ci.yml)<br>[deployments/ci/github-actions/ci.yaml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/deployments/ci/github-actions/ci.yaml)<br>[deployments/ci/github-actions/deploy.yaml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/deployments/ci/github-actions/deploy.yaml)<br>[deployments/ci/github-actions/rollback.yaml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/deployments/ci/github-actions/rollback.yaml)<br>[.github/workflows/ci.yml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.github/workflows/ci.yml) |
| 컨테이너/배포 | 50 | [docker-compose.yml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/docker-compose.yml)<br>[Dockerfile](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/Dockerfile)<br>[mcp/Dockerfile](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/mcp/Dockerfile)<br>[deployments/kubernetes/README.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/deployments/kubernetes/README.md)<br>[deployments/kubernetes/strategies/canary/canary-analysis.yaml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/deployments/kubernetes/strategies/canary/canary-analysis.yaml)<br>[deployments/kubernetes/strategies/canary/canary-deployment.yaml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/deployments/kubernetes/strategies/canary/canary-deployment.yaml) |
| 보안/정책 | 8 | [mcp/src/policy/tool-guards.ts](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/mcp/src/policy/tool-guards.ts)<br>[.github/SECURITY.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.github/SECURITY.md)<br>[.codex/skills/release-guard/SKILL.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.codex/skills/release-guard/SKILL.md)<br>[.codex/skills/release-guard/references/release-checklist.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.codex/skills/release-guard/references/release-checklist.md)<br>[.codex/skills/release-guard/agents/openai.yaml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.codex/skills/release-guard/agents/openai.yaml)<br>[.agents/skills/release-guard/SKILL.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.agents/skills/release-guard/SKILL.md) |
| 에이전트 지시문 | 19 | [AGENTS.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/AGENTS.md)<br>[CLAUDE.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/CLAUDE.md)<br>[.codex/config.toml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.codex/config.toml)<br>[.codex/README.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.codex/README.md)<br>[.codex/skills/repo-onboarding/SKILL.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.codex/skills/repo-onboarding/SKILL.md)<br>[.codex/skills/repo-onboarding/references/module-map.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.codex/skills/repo-onboarding/references/module-map.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `plugins/ccam-dashboard/.mcp.json`, `mcp/.env.example`, `mcp/.gitignore`.
2. entrypoint를 따라 실행 흐름 확인: `plugins/ccam-devtools/bin/ccam-doctor`, `plugins/ccam-devtools/bin/ccam-export`, `plugins/ccam-analytics/bin/ccam-stats`.
3. agent/tool runtime 매핑: `AGENTS.md`, `server/routes/agents.js`, `server/routes/hooks.js`.
4. retrieval/memory/indexing 확인: `index.html`, `wiki/i18n-content.js`, `wiki/index.html`.
5. test/eval 파일로 동작 검증: `vscode-extension/claude-code-agent-monitor-1.0.0.vsix`, `vscode-extension/claude-code-agent-monitor-1.1.0.vsix`, `vscode-extension/claude-code-agent-monitor-1.2.4.vsix`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 🚀 A real time monitoring dashboard for Claude Code, built with SQLite3, Node.js, Express, React, Vite, TailwindCSS, and. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, docker-compose.yml, Makefile, README.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
