# hoangsonww/Claude-Code-Agent-Monitor Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

🚀 A real-time monitoring dashboard for Claude Code, built with SQLite3, Node.js, Express, React, Vite, TailwindCSS, and WebSockets. It tracks sessions, agent activity, tool usage, and subagent orchestration, providing live analytics, a Kanban status board, status notifications, a cute buddy, and an interactive web interface/MacOS native app.

## 요약

- 조사 단위: `sources/hoangsonww__Claude-Code-Agent-Monitor` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 606 files, 191 directories, depth score 130, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=plugins/ccam-dashboard/.mcp.json, mcp/.env.example, mcp/.gitignore이고, 의존성 단서는 express, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | hoangsonww/Claude-Code-Agent-Monitor |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 467 |
| Forks | 94 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/hoangsonww__Claude-Code-Agent-Monitor](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor) |
| Existing report | [reports/global-trending/repositories/hoangsonww__Claude-Code-Agent-Monitor.md](../../../global-trending/repositories/hoangsonww__Claude-Code-Agent-Monitor.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 606 / 191 |
| Max observed depth | 6 |
| Top directories | .agents, .claude, .claude-plugin, .codex, .githooks, .github, .husky, .superpowers, client, deployments, desktop, docs, images, mcp, plugins, scripts, server, statusline, vscode-extension, wiki |
| Top extensions | .md: 96, .js: 79, .ts: 74, .tsx: 72, .json: 70, .yaml: 59, .png: 41, .tf: 37, (none): 21, .sh: 9, .svg: 7, .yml: 7 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
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


## How It Runs

| Category | Source | Name | Command |
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


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | express |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
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


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 78 | [vscode-extension/claude-code-agent-monitor-1.0.0.vsix](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/vscode-extension/claude-code-agent-monitor-1.0.0.vsix)<br>[vscode-extension/claude-code-agent-monitor-1.1.0.vsix](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/vscode-extension/claude-code-agent-monitor-1.1.0.vsix)<br>[vscode-extension/claude-code-agent-monitor-1.2.4.vsix](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/vscode-extension/claude-code-agent-monitor-1.2.4.vsix)<br>[server/lib/__tests__/transcript-cache.test.js](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/server/lib/__tests__/transcript-cache.test.js)<br>[server/__tests__/alerts.test.js](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/server/__tests__/alerts.test.js)<br>[server/__tests__/api.test.js](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/server/__tests__/api.test.js) |
| CI workflows | 5 | [deployments/ci/gitlab-ci/.gitlab-ci.yml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/deployments/ci/gitlab-ci/.gitlab-ci.yml)<br>[deployments/ci/github-actions/ci.yaml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/deployments/ci/github-actions/ci.yaml)<br>[deployments/ci/github-actions/deploy.yaml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/deployments/ci/github-actions/deploy.yaml)<br>[deployments/ci/github-actions/rollback.yaml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/deployments/ci/github-actions/rollback.yaml)<br>[.github/workflows/ci.yml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.github/workflows/ci.yml) |
| Containers / deploy | 50 | [docker-compose.yml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/docker-compose.yml)<br>[Dockerfile](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/Dockerfile)<br>[mcp/Dockerfile](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/mcp/Dockerfile)<br>[deployments/kubernetes/README.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/deployments/kubernetes/README.md)<br>[deployments/kubernetes/strategies/canary/canary-analysis.yaml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/deployments/kubernetes/strategies/canary/canary-analysis.yaml)<br>[deployments/kubernetes/strategies/canary/canary-deployment.yaml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/deployments/kubernetes/strategies/canary/canary-deployment.yaml) |
| Security / policy | 8 | [mcp/src/policy/tool-guards.ts](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/mcp/src/policy/tool-guards.ts)<br>[.github/SECURITY.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.github/SECURITY.md)<br>[.codex/skills/release-guard/SKILL.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.codex/skills/release-guard/SKILL.md)<br>[.codex/skills/release-guard/references/release-checklist.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.codex/skills/release-guard/references/release-checklist.md)<br>[.codex/skills/release-guard/agents/openai.yaml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.codex/skills/release-guard/agents/openai.yaml)<br>[.agents/skills/release-guard/SKILL.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.agents/skills/release-guard/SKILL.md) |
| Agent instructions | 19 | [AGENTS.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/AGENTS.md)<br>[CLAUDE.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/CLAUDE.md)<br>[.codex/config.toml](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.codex/config.toml)<br>[.codex/README.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.codex/README.md)<br>[.codex/skills/repo-onboarding/SKILL.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.codex/skills/repo-onboarding/SKILL.md)<br>[.codex/skills/repo-onboarding/references/module-map.md](../../../../sources/hoangsonww__Claude-Code-Agent-Monitor/.codex/skills/repo-onboarding/references/module-map.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `plugins/ccam-dashboard/.mcp.json`, `mcp/.env.example`, `mcp/.gitignore`.
2. Trace execution through entrypoints: `plugins/ccam-devtools/bin/ccam-doctor`, `plugins/ccam-devtools/bin/ccam-export`, `plugins/ccam-analytics/bin/ccam-stats`.
3. Map agent/tool runtime through: `AGENTS.md`, `server/routes/agents.js`, `server/routes/hooks.js`.
4. Inspect retrieval/memory/indexing through: `index.html`, `wiki/i18n-content.js`, `wiki/index.html`.
5. Verify behavior through test/eval files: `vscode-extension/claude-code-agent-monitor-1.0.0.vsix`, `vscode-extension/claude-code-agent-monitor-1.1.0.vsix`, `vscode-extension/claude-code-agent-monitor-1.2.4.vsix`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 🚀 A real time monitoring dashboard for Claude Code, built with SQLite3, Node.js, Express, React, Vite, TailwindCSS, and. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, docker-compose.yml, Makefile, README.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
