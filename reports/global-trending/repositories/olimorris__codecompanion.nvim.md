# olimorris/codecompanion.nvim

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/olimorris/codecompanion.nvim |
| local path | sources/olimorris__codecompanion.nvim |
| HEAD | 31ac84a |
| stars/forks | 6672 / 424 |
| language | Lua |
| license |  |
| pushedAt | 2026-06-17T22:03:24Z |
| trendScore / priorityScore | 172 / 459 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Developer tools / DX | 311 | AGENTS.md, README.md, doc/agent-client-protocol.md |
| AI agent / orchestration | 261 | AGENTS.md, README.md, CLAUDE.md |
| Coding agent / software automation | 145 | AGENTS.md, README.md, doc/configuration/cli.md |
| MCP / agent interoperability | 129 | AGENTS.md, README.md, CLAUDE.md |
| Cloud native / infrastructure | 27 | README.md, doc/index.md, doc/configuration/adapters-acp.md |
| Local LLM / inference | 22 | AGENTS.md, README.md, doc/configuration/prompt-library.md |
| Security / supply chain | 17 | doc/configuration/mcp.md, doc/usage/chat-buffer/agents-tools.md, doc/configuration/adapters-acp.md |
| Data / ML platform | 7 | tests/adapters/http/stubs/novita_models.txt |
| Frontend / app framework | 7 | doc/usage/chat-buffer/agents-tools.md, doc/.vitepress/config.mjs, doc/.vitepress/theme/CopyOrDownloadAsMarkdownButtons.js |
| Observability / evaluation | 3 | doc/configuration/chat-buffer.md, tests/adapters/http/stubs/novita_models.txt |
| Database / data infrastructure | 1 | doc/usage/chat-buffer/agents-tools.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python, Go |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 684 |
| manifests | 8 |
| docs | 78 |
| tests | 321 |
| ci/ops | 10 |
| spec artifacts | 6 |
| agent instruction files | 4 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | :purple_heart: Sponsors / :sparkles: Features / :camera_flash: In Action / :rocket: Getting Started / :toolbox: Troubleshooting / :gift: Contributing / :clap: Acknowledgements | <! panvimdoc ignore start <p align="center" <a href="https //codecompanion.olimorris.dev" <img src="https //github.com/user attachments/assets/64da6a69 a54d 4799 b034 59d9efd27b76" alt="CodeCompanion.nvim" / </a </p <p align="center" <a href="https //github.com/olimorris/codecompanion.nvim/stargazers" <img src="https //img.shields.io/github/stars/olimorris/codecompanion.nvim?color=c678dd&logoColor=e06c75&style=for the badge" </a <a href="https //github.com/olimorris/codecompanion.nvim/actions/workflows/ci.yml" <img src="https //img.shields.io/github/actions/workflow/status/olimorris/codecompanion.nvim/ci.yml?branch=main&label=tests&style=for the badge" </a <a href="https //github.com/olimorr |


## Key Files

### Manifests

- AGENTS.md
- README.md
- tests/scripts/tool_testing/README.md
- CLAUDE.md
- tests/stubs/rules/CLAUDE.md
- doc/package.json
- Dockerfile
- Makefile


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- tests/stubs/rules/CLAUDE.md
- doc/architecture.md
- .github/workflows/claude.yml
- lua/codecompanion/interactions/chat/tools/builtin/insert_edit_into_file/prompt.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- tests/stubs/rules/CLAUDE.md
- .github/workflows/claude.yml


## Top Directories

| dir | count |
| --- | --- |
| tests | 319 |
| lua | 249 |
| doc | 47 |
| queries | 21 |
| .codecompanion | 13 |
| .github | 13 |
| scripts | 5 |
| _typos.toml | 1 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .luarc.json | 1 |
| AGENTS.md | 1 |
| CHANGELOG.md | 1 |
| CLAUDE.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .lua | 433 |
| .txt | 81 |
| .md | 69 |
| .scm | 21 |
| [no-ext] | 21 |
| .yml | 11 |
| .json | 4 |
| .sh | 3 |
| .example | 2 |
| .js | 2 |
| .jsonl | 2 |
| .orig | 2 |
| .toml | 2 |
| .css | 1 |
| .go | 1 |
| .lua---chat---chat-buffer-is-initialized | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
