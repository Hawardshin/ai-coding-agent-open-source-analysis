# hoangsonww/Claude-Code-Agent-Monitor

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/hoangsonww/Claude-Code-Agent-Monitor |
| local path | sources/hoangsonww__Claude-Code-Agent-Monitor |
| HEAD | 1a21bb9 |
| stars/forks | 467 / 94 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T23:04:42Z |
| trendScore / priorityScore | 135 / 440 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | docs/README.md, client/README.md, mcp/README.md |
| MCP / agent interoperability | 483 | docs/README.md, mcp/README.md, deployments/kubernetes/README.md |
| Cloud native / infrastructure | 360 | docs/README.md, client/README.md, mcp/README.md |
| Frontend / app framework | 295 | docs/README.md, client/README.md, AGENTS.md |
| Database / data infrastructure | 279 | docs/README.md, client/README.md, mcp/README.md |
| Coding agent / software automation | 197 | docs/README.md, client/README.md, mcp/README.md |
| Observability / evaluation | 118 | docs/README.md, client/README.md, mcp/README.md |
| Developer tools / DX | 106 | client/README.md, mcp/README.md, desktop/README.md |
| Security / supply chain | 61 | client/README.md, deployments/kubernetes/README.md, deployments/README.md |
| Data / ML platform | 20 | deployments/README.md, desktop/README.md, vscode-extension/package.json |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 574 |
| manifests | 28 |
| docs | 101 |
| tests | 56 |
| ci/ops | 91 |
| spec artifacts | 27 |
| agent instruction files | 21 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Agent Dashboard for Claude Code | Agent Dashboard for Claude Code / Real-time monitoring platform for Claude Code agent activity 🚀 / Table of Contents / Overview / Internationalization (i18n) / User Interface / Features / Quick Start / Prerequisites / 1. Install | Agent Dashboard for Claude Code Real time monitoring platform for Claude Code agent activity 🚀 A professional dashboard to track and visualize your Claude Code agent sessions, tool usage, and subagent orchestration in real time. Built with Node.js, Express, React, and SQLite, it integrates directly with Claude Code via its native hook system for seamless session tracking and analytics. ! Claude Code https //img.shields.io/badge/Claude Code orange?style=flat square&logo=claude&logoColor=white ! Claude Code Plugins https //img.shields.io/badge/Claude Code Plugins & Skills orange?style=flat square&logo=anthropic&logoColor=white ! Model Context Protocol https //img.shields.io/badge/Model Contex |


## Key Files

### Manifests

- docs/README.md
- client/README.md
- mcp/README.md
- deployments/kubernetes/README.md
- AGENTS.md
- .codex/README.md
- deployments/README.md
- desktop/README.md
- README.md
- server/README.md
- statusline/README.md
- vscode-extension/README.md
- deployments/monitoring/coralogix/README.md
- deployments/terraform/README.md
- CLAUDE.md
- client/package.json
- client/tsconfig.json
- client/vite.config.ts
- mcp/Dockerfile
- mcp/package.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- docs/superpowers/specs/2026-04-24-agent-conversation-viewer-design.md
- docs/superpowers/specs/2026-05-22-fix-transcript-cache-leak-design.md
- docs/superpowers/specs/2026-05-28-tabby-companion-design.md
- .claude/agents/backend-reviewer.md
- .claude/agents/frontend-reviewer.md
- .claude/agents/mcp-reviewer.md
- .claude/rules/frontend-react.md
- .claude/rules/mcp-typescript.md
- .claude/skills/mcp-operations/references/host-config.md
- .claude/skills/mcp-operations/references/runbook.md
- .claude/skills/mcp-operations/SKILL.md
- .claude/settings.local.json
- .vscode/tasks.json
- ARCHITECTURE.md
- .claude/rules/backend-node.md
- .claude/rules/docs-markdown.md
- .claude/rules/wiki-i18n.md
- .claude/skills/debug-live-issue/references/investigation-template.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- .claude/agents/backend-reviewer.md
- .claude/agents/frontend-reviewer.md
- .claude/agents/mcp-reviewer.md
- .claude/rules/frontend-react.md
- .claude/rules/mcp-typescript.md
- .claude/skills/mcp-operations/references/host-config.md
- .claude/skills/mcp-operations/references/runbook.md
- .claude/skills/mcp-operations/SKILL.md
- .claude/settings.local.json
- .claude/rules/backend-node.md
- .claude/rules/docs-markdown.md
- .claude/rules/wiki-i18n.md
- .claude/skills/debug-live-issue/references/investigation-template.md


## Top Directories

| dir | count |
| --- | --- |
| client | 160 |
| deployments | 109 |
| server | 61 |
| mcp | 39 |
| plugins | 34 |
| desktop | 26 |
| .claude | 19 |
| .codex | 17 |
| docs | 14 |
| vscode-extension | 13 |
| .agents | 11 |
| .github | 9 |
| .idea | 8 |
| scripts | 6 |


## Extension Distribution

| ext | count |
| --- | --- |
| .md | 95 |
| .js | 79 |
| .json | 77 |
| .ts | 74 |
| .tsx | 72 |
| .yaml | 59 |
| .tf | 37 |
| [no-ext] | 21 |
| .sh | 9 |
| .svg | 7 |
| .xml | 7 |
| .yml | 7 |
| .toml | 4 |
| .css | 3 |
| .html | 3 |
| .tfvars | 3 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
