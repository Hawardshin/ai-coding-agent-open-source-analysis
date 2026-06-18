# iOfficeAI/AionUi

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/iOfficeAI/AionUi |
| local path | sources/iOfficeAI__AionUi |
| HEAD | 9e6a072 |
| stars/forks | 28443 / 2798 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T15:53:14Z |
| trendScore / priorityScore | 146 / 433 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | docs/README.md, tests/e2e/specs/README.md, .github/workflows/README.md |
| Developer tools / DX | 158 | scripts/README.md, tests/e2e/README.md, packages/web-cli/package.json |
| Frontend / app framework | 85 | AGENTS.md, tests/e2e/README.md, packages/desktop/src/renderer/services/i18n/README.md |
| Coding agent / software automation | 81 | tests/e2e/specs/README.md, docs/prds/conversations/acp/README.md, tests/e2e/README.md |
| MCP / agent interoperability | 77 | docs/README.md, tests/e2e/specs/README.md, docs/prds/conversations/acp/README.md |
| Cloud native / infrastructure | 55 | packages/web-host/README.md, readme.md, package.json |
| Database / data infrastructure | 28 | tests/e2e/README.md, readme.md, Dockerfile |
| Data / ML platform | 3 | examples/ext-wecom-bot/README.md, AGENTS.md, scripts/README.md |
| Local LLM / inference | 3 | readme.md |
| Observability / evaluation | 3 | package.json |
| Security / supply chain | 3 | .github/workflows/README.md, examples/ext-feishu/aion-extension.json, tests/e2e/docs/skills-hub/requirements.zh.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1699 |
| manifests | 40 |
| docs | 131 |
| tests | 397 |
| ci/ops | 14 |
| spec artifacts | 50 |
| agent instruction files | 28 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| readme.md | Alternatively, macOS via Homebrew | 📋 Quick Navigation / Cowork — AI Agents That Work Alongside You / Built-in Agent — Install & Go, Zero Configuration / **Office assistants — PPT, Word & Excel** / Multi-Agent Mode — Already Have CLI Agents? Bring Them In / Team Mode — Coordinated Multi-Agent Collaboration / Any API Key, Full Cowork Agent Power / Extensible Assistants & Skills / Cowork from Anywhere / ✨ Cowork in Action | <p align="center" <img src="./resources/aionui banner 1.png" alt="AionUi Cowork with AI Agents" width="100%" </p <p align="center" <img src="https //img.shields.io/github/v/release/iOfficeAI/AionUi?style=flat square&color=32CD32" alt="Version" &nbsp; <img src="https //img.shields.io/badge/license Apache 2.0 32CD32?style=flat square&logo=apache&logoColor=white" alt="License" &nbsp; <img src="https //img.shields.io/badge/platform macOS%20%7C%20Windows%20%7C%20Linux 6C757D?style=flat square&logo=linux&logoColor=white" alt="Platform" </p <p align="center" <a href="https //trendshift.io/repositories/15423" target=" blank" <img src="https //trendshift.io/api/badge/repositories/15423" alt="GitHub T |


## Key Files

### Manifests

- docs/prds/settings/llm_providers/README.md
- docs/README.md
- examples/ext-wecom-bot/README.md
- tests/e2e/specs/README.md
- .github/workflows/README.md
- docs/prds/assistants/README.md
- docs/prds/conversations/acp/README.md
- docs/prds/conversations/custom/README.md
- docs/prds/conversations/remote/README.md
- docs/prds/pet/README.md
- docs/prds/previews/README.md
- docs/prds/remote/channels/README.md
- docs/prds/remote/webui/README.md
- docs/prds/settings/about/README.md
- docs/prds/settings/display/README.md
- docs/prds/settings/skills/README.md
- docs/prds/settings/system/README.md
- docs/prds/teams/README.md
- docs/prds/workspaces/README.md
- AGENTS.md


### Spec / Docs / Prompt Artifacts

- tests/e2e/specs/README.md
- AGENTS.md
- CLAUDE.md
- examples/hello-world-extension/contributes/agents.json
- examples/hello-world-extension/i18n/en-US/agents.json
- examples/hello-world-extension/i18n/ru-RU/agents.json
- examples/hello-world-extension/i18n/zh-CN/agents.json
- tests/e2e/specs/acp-agent.e2e.ts
- tests/e2e/specs/agent-settings-detection.e2e.ts
- tests/e2e/specs/assistant-settings-prompts.e2e.ts
- tests/e2e/specs/ext-mcp.e2e.ts
- tests/e2e/specs/feedback-one-click.e2e.ts
- tests/e2e/specs/guid-agent-selection.e2e.ts
- tests/e2e/specs/acp-conversation.e2e.ts
- tests/e2e/specs/app-launch.e2e.ts
- tests/e2e/specs/assistant-settings-conversation-defaults.e2e.ts
- tests/e2e/specs/assistant-settings-crud.e2e.ts
- tests/e2e/specs/assistant-settings-defaults.e2e.ts
- tests/e2e/specs/assistant-settings-migration.e2e.ts
- tests/e2e/specs/assistant-settings-permissions.e2e.ts


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- examples/hello-world-extension/contributes/agents.json
- examples/hello-world-extension/i18n/en-US/agents.json
- examples/hello-world-extension/i18n/ru-RU/agents.json
- examples/hello-world-extension/i18n/zh-CN/agents.json
- .claude/skills/testing/SKILL.md
- .claude/commands/package-assistant.md
- .claude/skills/architecture/references/process.md
- .claude/skills/architecture/references/project-layout.md
- .claude/skills/architecture/references/renderer.md
- .claude/skills/architecture/SKILL.md
- .claude/skills/bump-version/SKILL.md
- .claude/skills/fix-issues/references/cdp-verification.md
- .claude/skills/fix-issues/references/report-template.md


## Top Directories

| dir | count |
| --- | --- |
| packages | 959 |
| tests | 380 |
| examples | 79 |
| mobile | 78 |
| docs | 55 |
| scripts | 34 |
| public | 24 |
| .github | 23 |
| .claude | 22 |
| resources | 6 |
| .specify | 5 |
| .aionui | 3 |
| .gemini | 2 |
| .codecov.yml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 753 |
| .tsx | 365 |
| .json | 240 |
| .md | 122 |
| [no-ext] | 47 |
| .svg | 45 |
| .css | 40 |
| .js | 32 |
| .yml | 23 |
| .sh | 11 |
| .html | 8 |
| .mjs | 2 |
| .mp4 | 2 |
| .nsh | 2 |
| .conf | 1 |
| .example | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
