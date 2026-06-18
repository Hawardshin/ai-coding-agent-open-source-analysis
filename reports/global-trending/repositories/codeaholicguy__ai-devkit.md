# codeaholicguy/ai-devkit

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/codeaholicguy/ai-devkit |
| local path | sources/codeaholicguy__ai-devkit |
| HEAD | cba13c7 |
| stars/forks | 1389 / 218 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T19:25:01Z |
| trendScore / priorityScore | 157 / 435 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | docs/ai/planning/README.md, packages/agent-manager/README.md, packages/cli/README.md |
| Developer tools / DX | 500 | packages/agent-manager/README.md, packages/cli/README.md, README.md |
| Coding agent / software automation | 325 | packages/agent-manager/README.md, packages/cli/README.md, packages/memory/README.md |
| MCP / agent interoperability | 147 | packages/cli/README.md, packages/memory/README.md, README.md |
| Database / data infrastructure | 135 | docs/ai/testing/README.md, docs/ai/design/README.md, docs/ai/implementation/README.md |
| Frontend / app framework | 66 | docs/ai/design/README.md, README.md, web/README.md |
| Security / supply chain | 60 | docs/ai/design/README.md, docs/ai/implementation/README.md, README.md |
| RAG / retrieval / knowledge | 27 | packages/memory/README.md, README.md, docs/ai/testing/feature-knowledge-memory-service.md |
| Data / ML platform | 18 | docs/ai/testing/2026-05-26-feature-agent-start.md, docs/ai/testing/2026-05-30-feature-agent-registry-session-cache.md, docs/ai/testing/feature-agent-send-wait.md |
| Observability / evaluation | 6 | packages/memory/package.json, docs/ai/testing/2026-06-09-feature-copilot-adapter-agent-manager-package.md, docs/ai/testing/feature-agent-management.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 722 |
| manifests | 31 |
| docs | 332 |
| tests | 106 |
| ci/ops | 8 |
| spec artifacts | 2 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | AI DevKit | AI DevKit / Who this is for / Start in 30 seconds / Operate agents like infrastructure / List running sessions across providers / Open the live terminal UI / Send a prompt to a running session and wait for the response / Pipe multi-line output into a running session / Send a prompt to a saved group of agents / Pipe a session through Telegram — operate your agent from your phone | AI DevKit English 中文 ./README zh.md The control plane for AI coding agents. ! agent console showcase.gif AI DevKit gives Claude Code, Codex CLI, Gemini CLI, opencode, Pi, Cursor, GitHub Copilot, Devin, and other coding agents one shared operating layer one config, one console, local memory retrieval, cross agent communication, and composable engineering skills led by dev lifecycle . One config for every agent — .ai devkit.json reconciles setup across the coding tools your team uses One console for running sessions — agent console is a live TUI dashboard for supervising local agents across providers Cross agent communication — agent send lets you route prompts, logs, and test output to runnin |


## Key Files

### Manifests

- docs/ai/testing/README.md
- docs/ai/design/README.md
- docs/ai/implementation/README.md
- docs/ai/planning/README.md
- docs/ai/requirements/README.md
- packages/agent-manager/README.md
- packages/cli/README.md
- packages/memory-dashboard/README.md
- packages/memory/README.md
- README.md
- web/README.md
- packages/channel-connector/README.md
- packages/pi-session-tracker/README.md
- packages/agent-manager/package.json
- packages/agent-manager/tsconfig.json
- packages/cli/package.json
- packages/cli/tsconfig.json
- packages/memory-dashboard/package.json
- packages/memory-dashboard/tsconfig.json
- packages/memory/package.json


### Spec / Docs / Prompt Artifacts

- packages/cli/templates/phases/design.md
- packages/cli/templates/phases/requirements.md


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| packages | 312 |
| docs | 260 |
| web | 76 |
| skills | 43 |
| .github | 8 |
| e2e | 4 |
| .husky | 2 |
| .ai-devkit.json | 1 |
| .claude-plugin | 1 |
| .codex-plugin | 1 |
| .cursor-plugin | 1 |
| .editorconfig | 1 |
| .gitignore | 1 |
| .nvmrc | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .md | 330 |
| .ts | 257 |
| .json | 38 |
| .tsx | 38 |
| .yaml | 20 |
| [no-ext] | 17 |
| .yml | 8 |
| .svg | 5 |
| .css | 2 |
| .mjs | 2 |
| .html | 1 |
| .js | 1 |
| .sh | 1 |
| .sql | 1 |
| .txt | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
