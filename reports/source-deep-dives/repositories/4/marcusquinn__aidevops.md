# marcusquinn/aidevops Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Vibe-Coding is easy. DevOps is hard. OpenCode & Git token-efficient AI agent automation for your app, business, and personal development. Opinionated tools, services, CLI & API stack for speed, security, and 24/7 results. Open-source first. SOTA everything. Try on your repos for money-making magic.

## 요약

- 조사 단위: `sources/marcusquinn__aidevops` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 5,381 files, 365 directories, depth score 129, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test-cloudflare-mcp-e2e.sh, tests/test-migrate-mcp-npx-to-binary.sh, configs/context7-mcp-config.json.txt이고, 의존성 단서는 openai, pydantic, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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


## Repository Context

| Field | Value |
| --- | --- |
| Repository | marcusquinn/aidevops |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Shell |
| Stars | 269 |
| Forks | 51 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/marcusquinn__aidevops](../../../../sources/marcusquinn__aidevops) |
| Existing report | [reports/global-trending/repositories/marcusquinn__aidevops.md](../../../global-trending/repositories/marcusquinn__aidevops.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 5381 / 365 |
| Max observed depth | 7 |
| Top directories | _campaigns, _cases, _config, _feedback, _inbox, _knowledge, _performance, _projects, _reports, .agents, .claude-plugin, .github, .opencode, .qlty, .wiki, bin, configs, docs, homebrew, scripts |
| Top extensions | .md: 2838, .sh: 1622, .pdf: 150, .py: 134, .mjs: 110, .json: 104, .txt: 100, .yml: 66, .html: 53, (none): 48, .ts: 45, .conf: 18 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 59 |
| docs | documentation surface | 2 |
| _campaigns | top-level component | 1 |
| _cases | top-level component | 1 |
| _config | top-level component | 1 |
| _feedback | top-level component | 1 |
| _inbox | top-level component | 1 |
| _knowledge | top-level component | 1 |
| _performance | top-level component | 1 |
| _projects | top-level component | 1 |
| _reports | top-level component | 1 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| configs | top-level component | 1 |
| homebrew | top-level component | 1 |
| scripts | top-level component | 1 |
| templates | top-level component | 1 |
| todo | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | bun run .opencode/server/api-gateway.ts |
| serve-dev | package.json | dashboard | bun run .opencode/server/mcp-dashboard.ts |
| utility | package.json | quality | bun run .opencode/tool/parallel-quality.ts |
| utility | package.json | dspy:init | dspyground init |
| serve-dev | package.json | dspy:dev | dspyground dev |
| build | package.json | dspy:build | dspyground build |
| utility | package.json | install:python | python3 -m venv python-env/dspy-env && source python-env/dspy-env/bin/activate && pip install -r requirements.txt |
| utility | package.json | setup | bun install && npm run install:python |
| utility | package.json | setup:bun | bun install |
| test | package.json | test | bun test |
| quality | package.json | typecheck | tsc --noEmit |
| utility | package.json | postinstall | node scripts/npm-postinstall.cjs \|\| true |
| entrypoint | package.json bin | aidevops | ./bin/aidevops |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [tests/test-cloudflare-mcp-e2e.sh](../../../../sources/marcusquinn__aidevops/tests/test-cloudflare-mcp-e2e.sh) | mcp signal |
| mcp | [tests/test-migrate-mcp-npx-to-binary.sh](../../../../sources/marcusquinn__aidevops/tests/test-migrate-mcp-npx-to-binary.sh) | mcp signal |
| mcp | [configs/context7-mcp-config.json.txt](../../../../sources/marcusquinn__aidevops/configs/context7-mcp-config.json.txt) | mcp signal |
| mcp | [configs/ios-simulator-mcp-config.json.txt](../../../../sources/marcusquinn__aidevops/configs/ios-simulator-mcp-config.json.txt) | mcp signal |
| agentRuntime | [AGENT.md](../../../../sources/marcusquinn__aidevops/AGENT.md) | agentRuntime signal |
| agentRuntime | [AGENTS.md](../../../../sources/marcusquinn__aidevops/AGENTS.md) | agentRuntime signal |
| agentRuntime | [todo/research/agent-optimization.md](../../../../sources/marcusquinn__aidevops/todo/research/agent-optimization.md) | agentRuntime signal |
| agentRuntime | [templates/home/AGENTS.md](../../../../sources/marcusquinn__aidevops/templates/home/AGENTS.md) | agentRuntime signal |
| entrypoints | [bin/aidevops](../../../../sources/marcusquinn__aidevops/bin/aidevops) | entrypoints signal |
| entrypoints | [.agents/scripts/simplex-bot/src/index.ts](../../../../sources/marcusquinn__aidevops/.agents/scripts/simplex-bot/src/index.ts) | entrypoints signal |
| entrypoints | [.agents/scripts/higgsfield/remotion/src/index.ts](../../../../sources/marcusquinn__aidevops/.agents/scripts/higgsfield/remotion/src/index.ts) | entrypoints signal |
| entrypoints | [.agents/bin/aidevops-auto-update](../../../../sources/marcusquinn__aidevops/.agents/bin/aidevops-auto-update) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 8 | [bin/aidevops](../../../../sources/marcusquinn__aidevops/bin/aidevops)<br>[.agents/scripts/simplex-bot/src/index.ts](../../../../sources/marcusquinn__aidevops/.agents/scripts/simplex-bot/src/index.ts)<br>[.agents/scripts/higgsfield/remotion/src/index.ts](../../../../sources/marcusquinn__aidevops/.agents/scripts/higgsfield/remotion/src/index.ts)<br>[.agents/bin/aidevops-auto-update](../../../../sources/marcusquinn__aidevops/.agents/bin/aidevops-auto-update)<br>[.agents/bin/aidevops-repo-sync](../../../../sources/marcusquinn__aidevops/.agents/bin/aidevops-repo-sync)<br>[.agents/bin/aidevops-skills-sync](../../../../sources/marcusquinn__aidevops/.agents/bin/aidevops-skills-sync)<br>[.agents/bin/gh_create_issue](../../../../sources/marcusquinn__aidevops/.agents/bin/gh_create_issue)<br>[.agents/bin/gh_create_pr](../../../../sources/marcusquinn__aidevops/.agents/bin/gh_create_pr) |
| agentRuntime | 1313 | [AGENT.md](../../../../sources/marcusquinn__aidevops/AGENT.md)<br>[AGENTS.md](../../../../sources/marcusquinn__aidevops/AGENTS.md)<br>[todo/research/agent-optimization.md](../../../../sources/marcusquinn__aidevops/todo/research/agent-optimization.md)<br>[templates/home/AGENTS.md](../../../../sources/marcusquinn__aidevops/templates/home/AGENTS.md)<br>[templates/home/git/AGENTS.md](../../../../sources/marcusquinn__aidevops/templates/home/git/AGENTS.md)<br>[configs/context-builder-config.json.txt](../../../../sources/marcusquinn__aidevops/configs/context-builder-config.json.txt)<br>[.opencode/ui/chat-sidebar/hooks/use-chat.ts](../../../../sources/marcusquinn__aidevops/.opencode/ui/chat-sidebar/hooks/use-chat.ts)<br>[.opencode/ui/chat-sidebar/hooks/use-resize.ts](../../../../sources/marcusquinn__aidevops/.opencode/ui/chat-sidebar/hooks/use-resize.ts) |
| mcp | 80 | [tests/test-cloudflare-mcp-e2e.sh](../../../../sources/marcusquinn__aidevops/tests/test-cloudflare-mcp-e2e.sh)<br>[tests/test-migrate-mcp-npx-to-binary.sh](../../../../sources/marcusquinn__aidevops/tests/test-migrate-mcp-npx-to-binary.sh)<br>[configs/context7-mcp-config.json.txt](../../../../sources/marcusquinn__aidevops/configs/context7-mcp-config.json.txt)<br>[configs/ios-simulator-mcp-config.json.txt](../../../../sources/marcusquinn__aidevops/configs/ios-simulator-mcp-config.json.txt)<br>[configs/mcp-servers-config.json.txt](../../../../sources/marcusquinn__aidevops/configs/mcp-servers-config.json.txt)<br>[configs/quickfile-mcp-config.json.txt](../../../../sources/marcusquinn__aidevops/configs/quickfile-mcp-config.json.txt)<br>[configs/mcp-templates/ahrefs-seo.json](../../../../sources/marcusquinn__aidevops/configs/mcp-templates/ahrefs-seo.json)<br>[configs/mcp-templates/chrome-devtools-advanced.json](../../../../sources/marcusquinn__aidevops/configs/mcp-templates/chrome-devtools-advanced.json) |
| retrieval | 95 | [todo/tasks/prd-memory-auto-capture.md](../../../../sources/marcusquinn__aidevops/todo/tasks/prd-memory-auto-capture.md)<br>[tests/test-entity-memory-integration.sh](../../../../sources/marcusquinn__aidevops/tests/test-entity-memory-integration.sh)<br>[tests/test-knowledge-provisioning.sh](../../../../sources/marcusquinn__aidevops/tests/test-knowledge-provisioning.sh)<br>[tests/test-memory-consolidation.sh](../../../../sources/marcusquinn__aidevops/tests/test-memory-consolidation.sh)<br>[tests/test-memory-mail.sh](../../../../sources/marcusquinn__aidevops/tests/test-memory-mail.sh)<br>[tests/test-memory-pressure-monitor.sh](../../../../sources/marcusquinn__aidevops/tests/test-memory-pressure-monitor.sh)<br>[tests/test-memory-truth-maintenance.sh](../../../../sources/marcusquinn__aidevops/tests/test-memory-truth-maintenance.sh)<br>[tests/test-microsoft-graph-helper.sh](../../../../sources/marcusquinn__aidevops/tests/test-microsoft-graph-helper.sh) |
| spec | 784 | [DESIGN.md](../../../../sources/marcusquinn__aidevops/DESIGN.md)<br>[requirements-lock.txt](../../../../sources/marcusquinn__aidevops/requirements-lock.txt)<br>[requirements.txt](../../../../sources/marcusquinn__aidevops/requirements.txt)<br>[todo/tasks/prd-autonomous-supervisor.md](../../../../sources/marcusquinn__aidevops/todo/tasks/prd-autonomous-supervisor.md)<br>[todo/tasks/prd-document-extraction.md](../../../../sources/marcusquinn__aidevops/todo/tasks/prd-document-extraction.md)<br>[todo/tasks/prd-gopass-credentials.md](../../../../sources/marcusquinn__aidevops/todo/tasks/prd-gopass-credentials.md)<br>[todo/tasks/prd-memory-auto-capture.md](../../../../sources/marcusquinn__aidevops/todo/tasks/prd-memory-auto-capture.md)<br>[.agents/tools/video/video-prompt-design.md](../../../../sources/marcusquinn__aidevops/.agents/tools/video/video-prompt-design.md) |
| eval | 889 | [tests/test_report_render_blocks.py](../../../../sources/marcusquinn__aidevops/tests/test_report_render_blocks.py)<br>[tests/test-ai-actions.sh](../../../../sources/marcusquinn__aidevops/tests/test-ai-actions.sh)<br>[tests/test-ai-judgment-helper.sh](../../../../sources/marcusquinn__aidevops/tests/test-ai-judgment-helper.sh)<br>[tests/test-ai-supervisor-e2e.sh](../../../../sources/marcusquinn__aidevops/tests/test-ai-supervisor-e2e.sh)<br>[tests/test-ai-threshold-judge.sh](../../../../sources/marcusquinn__aidevops/tests/test-ai-threshold-judge.sh)<br>[tests/test-audit-e2e.sh](../../../../sources/marcusquinn__aidevops/tests/test-audit-e2e.sh)<br>[tests/test-audit-log-helper.sh](../../../../sources/marcusquinn__aidevops/tests/test-audit-log-helper.sh)<br>[tests/test-backup-safety.sh](../../../../sources/marcusquinn__aidevops/tests/test-backup-safety.sh) |
| security | 242 | [SECURITY.md](../../../../sources/marcusquinn__aidevops/SECURITY.md)<br>[todo/t238-verification-audit-report.md](../../../../sources/marcusquinn__aidevops/todo/t238-verification-audit-report.md)<br>[todo/t286-false-close-audit.md](../../../../sources/marcusquinn__aidevops/todo/t286-false-close-audit.md)<br>[todo/tasks/t1337.1-audit-report.md](../../../../sources/marcusquinn__aidevops/todo/tasks/t1337.1-audit-report.md)<br>[todo/tasks/t1412.13-audit-report.md](../../../../sources/marcusquinn__aidevops/todo/tasks/t1412.13-audit-report.md)<br>[todo/tasks/t316.1-setup-function-audit.md](../../../../sources/marcusquinn__aidevops/todo/tasks/t316.1-setup-function-audit.md)<br>[tests/test-audit-e2e.sh](../../../../sources/marcusquinn__aidevops/tests/test-audit-e2e.sh)<br>[tests/test-audit-log-helper.sh](../../../../sources/marcusquinn__aidevops/tests/test-audit-log-helper.sh) |
| ci | 52 | [.github/workflows/agents-md-size-check.yml](../../../../sources/marcusquinn__aidevops/.github/workflows/agents-md-size-check.yml)<br>[.github/workflows/ai-approved-label-gate.yml](../../../../sources/marcusquinn__aidevops/.github/workflows/ai-approved-label-gate.yml)<br>[.github/workflows/apply-status-available-default.yml](../../../../sources/marcusquinn__aidevops/.github/workflows/apply-status-available-default.yml)<br>[.github/workflows/auto-deploy-agents.yml](../../../../sources/marcusquinn__aidevops/.github/workflows/auto-deploy-agents.yml)<br>[.github/workflows/bounty-spam-auto-close.yml](../../../../sources/marcusquinn__aidevops/.github/workflows/bounty-spam-auto-close.yml)<br>[.github/workflows/code-quality.yml](../../../../sources/marcusquinn__aidevops/.github/workflows/code-quality.yml)<br>[.github/workflows/code-review-monitoring.yml](../../../../sources/marcusquinn__aidevops/.github/workflows/code-review-monitoring.yml)<br>[.github/workflows/complexity-bump-justification-check.yml](../../../../sources/marcusquinn__aidevops/.github/workflows/complexity-bump-justification-check.yml) |
| container | 25 | [tests/docker/docker-compose.yml](../../../../sources/marcusquinn__aidevops/tests/docker/docker-compose.yml)<br>[tests/docker/Dockerfile](../../../../sources/marcusquinn__aidevops/tests/docker/Dockerfile)<br>[.agents/tools/deployment/agent-skills.md](../../../../sources/marcusquinn__aidevops/.agents/tools/deployment/agent-skills.md)<br>[.agents/tools/deployment/cloudron-app-packaging-skill.md](../../../../sources/marcusquinn__aidevops/.agents/tools/deployment/cloudron-app-packaging-skill.md)<br>[.agents/tools/deployment/cloudron-app-packaging.md](../../../../sources/marcusquinn__aidevops/.agents/tools/deployment/cloudron-app-packaging.md)<br>[.agents/tools/deployment/cloudron-app-publishing-skill.md](../../../../sources/marcusquinn__aidevops/.agents/tools/deployment/cloudron-app-publishing-skill.md)<br>[.agents/tools/deployment/cloudron-git-reference.md](../../../../sources/marcusquinn__aidevops/.agents/tools/deployment/cloudron-git-reference.md)<br>[.agents/tools/deployment/cloudron-server-ops-skill.md](../../../../sources/marcusquinn__aidevops/.agents/tools/deployment/cloudron-server-ops-skill.md) |
| instruction | 8 | [AGENTS.md](../../../../sources/marcusquinn__aidevops/AGENTS.md)<br>[CLAUDE.md](../../../../sources/marcusquinn__aidevops/CLAUDE.md)<br>[templates/home/AGENTS.md](../../../../sources/marcusquinn__aidevops/templates/home/AGENTS.md)<br>[templates/home/git/AGENTS.md](../../../../sources/marcusquinn__aidevops/templates/home/git/AGENTS.md)<br>[.agents/AGENTS.md](../../../../sources/marcusquinn__aidevops/.agents/AGENTS.md)<br>[.agents/templates/plugin-template/AGENTS.md](../../../../sources/marcusquinn__aidevops/.agents/templates/plugin-template/AGENTS.md)<br>[.agents/templates/agent-source-repo/AGENTS.md](../../../../sources/marcusquinn__aidevops/.agents/templates/agent-source-repo/AGENTS.md)<br>[.agents/templates/agent-source-repo/.agents/AGENTS.md](../../../../sources/marcusquinn__aidevops/.agents/templates/agent-source-repo/.agents/AGENTS.md) |
| docs | 26 | [README.md](../../../../sources/marcusquinn__aidevops/README.md)<br>[tests/docker/README.md](../../../../sources/marcusquinn__aidevops/tests/docker/README.md)<br>[templates/home/git/.agent/README.md](../../../../sources/marcusquinn__aidevops/templates/home/git/.agent/README.md)<br>[templates/home/.agents/README.md](../../../../sources/marcusquinn__aidevops/templates/home/.agents/README.md)<br>[docs/sonar-exemptions.md](../../../../sources/marcusquinn__aidevops/docs/sonar-exemptions.md)<br>[.agents/workflows/readme-create-update.md](../../../../sources/marcusquinn__aidevops/.agents/workflows/readme-create-update.md)<br>[.agents/workflows/readme.md](../../../../sources/marcusquinn__aidevops/.agents/workflows/readme.md)<br>[.agents/tools/markdoc/schemas/README.md](../../../../sources/marcusquinn__aidevops/.agents/tools/markdoc/schemas/README.md) |
| config | 12 | [package.json](../../../../sources/marcusquinn__aidevops/package.json)<br>[requirements-lock.txt](../../../../sources/marcusquinn__aidevops/requirements-lock.txt)<br>[requirements.txt](../../../../sources/marcusquinn__aidevops/requirements.txt)<br>[tsconfig.json](../../../../sources/marcusquinn__aidevops/tsconfig.json)<br>[.agents/scripts/package.json](../../../../sources/marcusquinn__aidevops/.agents/scripts/package.json)<br>[.agents/scripts/simplex-bot/package.json](../../../../sources/marcusquinn__aidevops/.agents/scripts/simplex-bot/package.json)<br>[.agents/scripts/simplex-bot/tsconfig.json](../../../../sources/marcusquinn__aidevops/.agents/scripts/simplex-bot/tsconfig.json)<br>[.agents/scripts/higgsfield/package.json](../../../../sources/marcusquinn__aidevops/.agents/scripts/higgsfield/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 889 | [tests/test_report_render_blocks.py](../../../../sources/marcusquinn__aidevops/tests/test_report_render_blocks.py)<br>[tests/test-ai-actions.sh](../../../../sources/marcusquinn__aidevops/tests/test-ai-actions.sh)<br>[tests/test-ai-judgment-helper.sh](../../../../sources/marcusquinn__aidevops/tests/test-ai-judgment-helper.sh)<br>[tests/test-ai-supervisor-e2e.sh](../../../../sources/marcusquinn__aidevops/tests/test-ai-supervisor-e2e.sh)<br>[tests/test-ai-threshold-judge.sh](../../../../sources/marcusquinn__aidevops/tests/test-ai-threshold-judge.sh)<br>[tests/test-audit-e2e.sh](../../../../sources/marcusquinn__aidevops/tests/test-audit-e2e.sh) |
| CI workflows | 52 | [.github/workflows/agents-md-size-check.yml](../../../../sources/marcusquinn__aidevops/.github/workflows/agents-md-size-check.yml)<br>[.github/workflows/ai-approved-label-gate.yml](../../../../sources/marcusquinn__aidevops/.github/workflows/ai-approved-label-gate.yml)<br>[.github/workflows/apply-status-available-default.yml](../../../../sources/marcusquinn__aidevops/.github/workflows/apply-status-available-default.yml)<br>[.github/workflows/auto-deploy-agents.yml](../../../../sources/marcusquinn__aidevops/.github/workflows/auto-deploy-agents.yml)<br>[.github/workflows/bounty-spam-auto-close.yml](../../../../sources/marcusquinn__aidevops/.github/workflows/bounty-spam-auto-close.yml)<br>[.github/workflows/code-quality.yml](../../../../sources/marcusquinn__aidevops/.github/workflows/code-quality.yml) |
| Containers / deploy | 25 | [tests/docker/docker-compose.yml](../../../../sources/marcusquinn__aidevops/tests/docker/docker-compose.yml)<br>[tests/docker/Dockerfile](../../../../sources/marcusquinn__aidevops/tests/docker/Dockerfile)<br>[.agents/tools/deployment/agent-skills.md](../../../../sources/marcusquinn__aidevops/.agents/tools/deployment/agent-skills.md)<br>[.agents/tools/deployment/cloudron-app-packaging-skill.md](../../../../sources/marcusquinn__aidevops/.agents/tools/deployment/cloudron-app-packaging-skill.md)<br>[.agents/tools/deployment/cloudron-app-packaging.md](../../../../sources/marcusquinn__aidevops/.agents/tools/deployment/cloudron-app-packaging.md)<br>[.agents/tools/deployment/cloudron-app-publishing-skill.md](../../../../sources/marcusquinn__aidevops/.agents/tools/deployment/cloudron-app-publishing-skill.md) |
| Security / policy | 242 | [SECURITY.md](../../../../sources/marcusquinn__aidevops/SECURITY.md)<br>[todo/t238-verification-audit-report.md](../../../../sources/marcusquinn__aidevops/todo/t238-verification-audit-report.md)<br>[todo/t286-false-close-audit.md](../../../../sources/marcusquinn__aidevops/todo/t286-false-close-audit.md)<br>[todo/tasks/t1337.1-audit-report.md](../../../../sources/marcusquinn__aidevops/todo/tasks/t1337.1-audit-report.md)<br>[todo/tasks/t1412.13-audit-report.md](../../../../sources/marcusquinn__aidevops/todo/tasks/t1412.13-audit-report.md)<br>[todo/tasks/t316.1-setup-function-audit.md](../../../../sources/marcusquinn__aidevops/todo/tasks/t316.1-setup-function-audit.md) |
| Agent instructions | 8 | [AGENTS.md](../../../../sources/marcusquinn__aidevops/AGENTS.md)<br>[CLAUDE.md](../../../../sources/marcusquinn__aidevops/CLAUDE.md)<br>[templates/home/AGENTS.md](../../../../sources/marcusquinn__aidevops/templates/home/AGENTS.md)<br>[templates/home/git/AGENTS.md](../../../../sources/marcusquinn__aidevops/templates/home/git/AGENTS.md)<br>[.agents/AGENTS.md](../../../../sources/marcusquinn__aidevops/.agents/AGENTS.md)<br>[.agents/templates/plugin-template/AGENTS.md](../../../../sources/marcusquinn__aidevops/.agents/templates/plugin-template/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/test-cloudflare-mcp-e2e.sh`, `tests/test-migrate-mcp-npx-to-binary.sh`, `configs/context7-mcp-config.json.txt`.
2. Trace execution through entrypoints: `bin/aidevops`, `.agents/scripts/simplex-bot/src/index.ts`, `.agents/scripts/higgsfield/remotion/src/index.ts`.
3. Map agent/tool runtime through: `AGENT.md`, `AGENTS.md`, `todo/research/agent-optimization.md`.
4. Inspect retrieval/memory/indexing through: `todo/tasks/prd-memory-auto-capture.md`, `tests/test-entity-memory-integration.sh`, `tests/test-knowledge-provisioning.sh`.
5. Verify behavior through test/eval files: `tests/test_report_render_blocks.py`, `tests/test-ai-actions.sh`, `tests/test-ai-judgment-helper.sh`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Vibe Coding is easy. DevOps is hard. OpenCode & Git token efficient AI agent automation for your app, business, and pers. 핵심 구조 신호는 Shell, package.json, requirements.txt, README.md, AGENTS.md, CLAUDE.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
