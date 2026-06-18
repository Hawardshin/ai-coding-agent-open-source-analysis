# Mybono/ai-orchestrator

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Mybono/ai-orchestrator |
| local path | sources/Mybono__ai-orchestrator |
| HEAD | 03bb0a5 |
| stars/forks | 97 / 16 |
| language | HTML |
| license |  |
| pushedAt | 2026-06-16T13:53:27Z |
| trendScore / priorityScore | 144 / 430 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | documentation/AGENTS.md, README.md, documentation/CLAUDE.md |
| Security / supply chain | 232 | documentation/AGENTS.md, README.md, documentation/CLAUDE.md |
| Local LLM / inference | 230 | documentation/AGENTS.md, README.md, documentation/CLAUDE.md |
| Cloud native / infrastructure | 118 | documentation/AGENTS.md, documentation/CLAUDE.md, agents/devops.md |
| Developer tools / DX | 111 | documentation/AGENTS.md, README.md, documentation/CLAUDE.md |
| Data / ML platform | 74 | README.md, documentation/CLAUDE.md, agents/devops.md |
| MCP / agent interoperability | 61 | documentation/AGENTS.md, README.md, documentation/CLAUDE.md |
| RAG / retrieval / knowledge | 58 | README.md, documentation/CLAUDE.md, agents/architect.md |
| Coding agent / software automation | 49 | documentation/AGENTS.md, README.md, documentation/CLAUDE.md |
| Database / data infrastructure | 42 | documentation/AGENTS.md, documentation/CLAUDE.md, agents/api-tester.md |
| Frontend / app framework | 25 | documentation/CLAUDE.md, agents/ui-designer.md, skills/code-review/references/security-review-guide.md |
| Observability / evaluation | 14 | agents/performance-monitor.md, agents/security-auditor.md, plugins/security-guidance/commands/security-check.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 323 |
| manifests | 6 |
| docs | 177 |
| tests | 0 |
| ci/ops | 6 |
| spec artifacts | 9 |
| agent instruction files | 7 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Dry-run: print proposed amendments without writing files | How it works / Self-learning loop / Dry-run: print proposed amendments without writing files / Apply: write amendments to skills/discovered/ / Query: find issues similar to a specific task description / Semantic search standalone / Source layout / Domain dependencies / Requirements / Installation | ! CI https //github.com/Mybono/ai orchestrator/actions/workflows/ci.yml/badge.svg https //github.com/Mybono/ai orchestrator/actions/workflows/ci.yml ! License MIT https //img.shields.io/badge/License MIT yellow.svg https //opensource.org/licenses/MIT README · Architecture documentation/ARCHITECTURE.md · Agents documentation/AGENTS.md · Skills & Commands documentation/SKILLS.md · Plugins documentation/PLUGINS.md TypeScript + Bash orchestration that runs AI agents — Ollama for code generation, Claude for planning and triage — in parallel, in dependency order. <p align="center" <img src="ai orchestrator pipeline.svg" alt="ai orchestrator pipeline" width="680" </p How it works /implement trigger |


## Key Files

### Manifests

- documentation/AGENTS.md
- README.md
- documentation/CLAUDE.md
- package.json
- tsconfig.json
- skills/code-review/references/go.md


### Spec / Docs / Prompt Artifacts

- documentation/AGENTS.md
- documentation/CLAUDE.md
- .claude/.DS_Store
- .claude/goals.json
- .claude/settings.json.template
- .claude/todo.md
- .vscode/tasks.json
- documentation/ARCHITECTURE.md
- .claude/commands/handoff.md


### Agent Instruction Files

- documentation/AGENTS.md
- documentation/CLAUDE.md
- .claude/.DS_Store
- .claude/goals.json
- .claude/settings.json.template
- .claude/todo.md
- .claude/commands/handoff.md


## Top Directories

| dir | count |
| --- | --- |
| skills | 104 |
| plugins | 53 |
| graphify-out | 39 |
| src | 30 |
| scripts | 24 |
| agents | 20 |
| documentation | 9 |
| .github | 7 |
| .claude | 5 |
| commands | 4 |
| knowledge | 3 |
| .clineignore | 1 |
| .clinerules | 1 |
| .DS_Store | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .md | 177 |
| .json | 32 |
| .csv | 30 |
| .ts | 30 |
| .sh | 22 |
| [no-ext] | 14 |
| .py | 4 |
| .js | 3 |
| .yml | 3 |
| .jsonl | 2 |
| .svg | 2 |
| .html | 1 |
| .jsonc | 1 |
| .template | 1 |
| .toml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
