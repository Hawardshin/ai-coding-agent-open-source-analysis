# BuilderIO/agent-native

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/BuilderIO/agent-native |
| local path | sources/BuilderIO__agent-native |
| HEAD | db8a4e0 |
| stars/forks | 574 / 81 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-18T00:23:46Z |
| trendScore / priorityScore | 134 / 472 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | packages/docs/README.md, packages/embedding/README.md, AGENTS.md |
| Frontend / app framework | 500 | packages/docs/README.md, packages/embedding/README.md, templates/clips/desktop/README.md |
| MCP / agent interoperability | 500 | packages/core/src/templates/default/AGENTS.md, packages/core/src/templates/workspace-core/AGENTS.md, packages/core/src/templates/workspace-root/AGENTS.md |
| Database / data infrastructure | 294 | templates/analytics/docs/schemas/README.md, packages/core/src/templates/default/AGENTS.md, packages/core/src/templates/workspace-core/AGENTS.md |
| Developer tools / DX | 276 | packages/docs/README.md, templates/clips/desktop/README.md, AGENTS.md |
| Security / supply chain | 244 | templates/clips/desktop/README.md, AGENTS.md, packages/core/src/templates/default/AGENTS.md |
| Coding agent / software automation | 218 | AGENTS.md, packages/core/src/templates/default/AGENTS.md, templates/assets/AGENTS.md |
| Observability / evaluation | 88 | AGENTS.md, templates/analytics/AGENTS.md, templates/brain/AGENTS.md |
| RAG / retrieval / knowledge | 61 | packages/embedding/README.md, templates/brain/AGENTS.md, templates/brain/README.md |
| Cloud native / infrastructure | 57 | packages/core/src/templates/default/AGENTS.md, packages/core/src/templates/workspace-core/AGENTS.md, packages/core/src/templates/workspace-root/AGENTS.md |
| Data / ML platform | 33 | templates/analytics/AGENTS.md, templates/calendar/AGENTS.md, templates/content/AGENTS.md |
| Local LLM / inference | 3 | templates/clips/desktop/src-tauri/Cargo.toml, packages/core/package.json |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Rust |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 6628 |
| manifests | 40 |
| docs | 666 |
| tests | 824 |
| ci/ops | 14 |
| spec artifacts | 41 |
| agent instruction files | 27 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Agent-Native | Agent-Native / Open-source framework for agentic applications you own. / Agents and UIs — Fully Connected / The framework for agent-native apps / One agent, three product shapes / Try it with a skill / Templates / Quick Start / Workspaces (Monorepo) / https://your-agents.com/mail/*       → mail | Agent Native Open source framework for agentic applications you own. Don't choose between rich user interfaces and autonomous agents. Every Agent Native app is both. Agents and UIs — Fully Connected The agent and the UI are equal citizens of the same system. Every action works both ways — click it or ask for it. ! Agents and UIs fully connected https //cdn.builder.io/api/v1/file/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fadc1e9e9368e4a8cb1b4dbb5aae5aaa2 Everything syncs — Agent and UI share one database and one state. Changes from either side show up instantly on the other. Real time multiplayer — Humans and agents collaborate in the same document simultaneously CRDT merging, live presence cursors, sel |


## Key Files

### Manifests

- packages/docs/README.md
- templates/analytics/docs/schemas/README.md
- packages/embedding/README.md
- templates/clips/desktop/README.md
- AGENTS.md
- packages/core/src/templates/default/AGENTS.md
- packages/core/src/templates/workspace-core/AGENTS.md
- packages/core/src/templates/workspace-root/AGENTS.md
- registry/agent-native-app/AGENTS.md
- templates/analytics/AGENTS.md
- templates/assets/AGENTS.md
- templates/brain/AGENTS.md
- templates/calendar/AGENTS.md
- templates/clips/AGENTS.md
- templates/content/AGENTS.md
- templates/design/AGENTS.md
- templates/dispatch/AGENTS.md
- templates/forms/AGENTS.md
- templates/macros/AGENTS.md
- templates/mail/AGENTS.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- packages/core/src/templates/default/AGENTS.md
- packages/core/src/templates/workspace-core/AGENTS.md
- packages/core/src/templates/workspace-root/AGENTS.md
- registry/agent-native-app/AGENTS.md
- templates/analytics/AGENTS.md
- templates/assets/AGENTS.md
- templates/brain/AGENTS.md
- templates/calendar/AGENTS.md
- templates/clips/AGENTS.md
- templates/content/AGENTS.md
- templates/design/AGENTS.md
- templates/dispatch/AGENTS.md
- templates/forms/AGENTS.md
- templates/macros/AGENTS.md
- templates/mail/AGENTS.md
- templates/plan/AGENTS.md
- templates/slides/AGENTS.md
- templates/starter/AGENTS.md
- templates/videos/AGENTS.md


### Agent Instruction Files

- AGENTS.md
- packages/core/src/templates/default/AGENTS.md
- packages/core/src/templates/workspace-core/AGENTS.md
- packages/core/src/templates/workspace-root/AGENTS.md
- registry/agent-native-app/AGENTS.md
- templates/analytics/AGENTS.md
- templates/assets/AGENTS.md
- templates/brain/AGENTS.md
- templates/calendar/AGENTS.md
- templates/clips/AGENTS.md
- templates/content/AGENTS.md
- templates/design/AGENTS.md
- templates/dispatch/AGENTS.md
- templates/forms/AGENTS.md
- templates/macros/AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| templates | 4189 |
| packages | 2260 |
| .agents | 59 |
| scripts | 51 |
| .github | 15 |
| skills | 10 |
| plans | 9 |
| .changeset | 2 |
| docs | 2 |
| .video-bakeoff | 1 |
| .claude | 1 |
| .claude-plugin | 1 |
| .gemini | 1 |
| .gitignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 3695 |
| .tsx | 1765 |
| .md | 551 |
| .json | 169 |
| .svg | 154 |
| [no-ext] | 91 |
| .css | 28 |
| .toml | 28 |
| .mjs | 24 |
| .rs | 22 |
| .mdx | 19 |
| .example | 17 |
| .yml | 15 |
| .yaml | 10 |
| .sql | 9 |
| .txt | 7 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
