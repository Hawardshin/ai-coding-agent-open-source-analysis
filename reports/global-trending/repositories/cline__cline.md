# cline/cline

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/cline/cline |
| local path | sources/cline__cline |
| HEAD | 7d11935 |
| stars/forks | 63454 / 6712 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-18T00:17:40Z |
| trendScore / priorityScore | 200 / 536 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Coding agent / software automation | 500 | apps/examples/cline-core-cli-agent/README.md, apps/vscode/src/core/prompts/system-prompt/__tests__/README.md, sdk/examples/plugins/agents-squad/README.md |
| Developer tools / DX | 500 | apps/examples/cli-agent/README.md, apps/examples/cline-core-cli-agent/README.md, apps/examples/multi-agent/README.md |
| AI agent / orchestration | 483 | apps/examples/cli-agent/README.md, apps/examples/cline-core-cli-agent/README.md, apps/examples/multi-agent/README.md |
| Frontend / app framework | 205 | apps/examples/multi-agent/README.md, apps/vscode/src/core/prompts/system-prompt/README.md, apps/examples/desktop-app/README.md |
| MCP / agent interoperability | 107 | apps/vscode/src/core/prompts/system-prompt/__tests__/README.md, apps/vscode/src/core/prompts/system-prompt/README.md, sdk/examples/plugins/README.md |
| Security / supply chain | 76 | apps/examples/multi-agent/README.md, sdk/examples/cron/README.md, sdk/examples/plugins/README.md |
| Cloud native / infrastructure | 39 | apps/examples/cline-core-cli-agent/README.md, apps/examples/README.md, evals/README.md |
| Observability / evaluation | 35 | apps/examples/desktop-app/README.md, sdk/examples/cron/README.md, evals/README.md |
| Data / ML platform | 11 | sdk/examples/hooks/README.md, sdk/examples/plugins/README.md, sdk/examples/README.md |
| Database / data infrastructure | 11 | sdk/README.md, sdk/packages/core/README.md, apps/examples/desktop-app/package.json |
| Local LLM / inference | 8 | sdk/packages/llms/AGENTS.md, README.md, sdk/README.md |
| RAG / retrieval / knowledge | 3 | apps/vscode/src/core/prompts/system-prompt/README.md, sdk/examples/plugins/agents-squad/index.ts |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python, Rust |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 3249 |
| manifests | 40 |
| docs | 274 |
| tests | 636 |
| ci/ops | 10 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Connect to Telegram | CLI / Kanban / VS Code Extension / JetBrains Plugin / SDK / Index / Edits Code Across Your Project / Runs Bash Commands / Plan and Act / Rules and Skills | <p align="center" <img src="assets/icons/icon.png" width="80" alt="Cline" / </p <h1 align="center" Cline</h1 <p align="center" The open source coding agent in your IDE and terminal. </p <div align="center" <div align="center" <table <tbody <td align="center" <a href="https //docs.cline.bot" target=" blank" <strong Docs</strong </a </td <td align="center" <a href="https //discord.gg/cline" target=" blank" <strong Discord</strong </a </td <td align="center" <a href="https //www.reddit.com/r/cline/" target=" blank" <strong r/cline</strong </a </td <td align="center" <a href="https //github.com/cline/cline/discussions/categories/feature requests?discussions q=is%3Aopen+category%3A%22Feature+Requ |


## Key Files

### Manifests

- apps/examples/cli-agent/README.md
- apps/examples/cline-core-cli-agent/README.md
- apps/examples/multi-agent/README.md
- apps/vscode/src/core/prompts/system-prompt/__tests__/README.md
- sdk/examples/plugins/agents-squad/README.md
- apps/vscode/src/core/prompts/system-prompt/README.md
- apps/vscode/src/core/prompts/system-prompt/tools/README.md
- apps/examples/code-review-bot/README.md
- apps/examples/desktop-app/README.md
- apps/examples/menubar/README.md
- apps/examples/quickstart/README.md
- apps/examples/README.md
- apps/examples/vscode/README.md
- apps/examples/vscode/src/webview/README.md
- sdk/examples/cron/README.md
- sdk/examples/hooks/README.md
- sdk/examples/plugins/README.md
- sdk/examples/plugins/typescript-lsp/README.md
- sdk/examples/README.md
- apps/cli/src/tests/configs/README.md


### Spec / Docs / Prompt Artifacts

- apps/vscode/src/core/prompts/system-prompt/__tests__/README.md
- apps/vscode/src/core/prompts/system-prompt/README.md
- apps/vscode/src/core/prompts/system-prompt/tools/README.md
- sdk/AGENTS.md
- sdk/packages/llms/AGENTS.md
- CLAUDE.md
- .github/copilot-instructions.md
- apps/vscode/src/core/prompts/__tests__/toolSpecificMissingParamErrors.test.ts
- apps/vscode/src/core/prompts/__tests__/writeToFileMissingContentError.test.ts
- apps/vscode/src/core/prompts/system-prompt/__tests__/__snapshots__/anthropic_claude_sonnet_4-basic.snap
- apps/vscode/src/core/prompts/system-prompt/__tests__/__snapshots__/anthropic_claude_sonnet_4-no-browser.snap
- apps/vscode/src/core/prompts/system-prompt/__tests__/__snapshots__/anthropic_claude_sonnet_4-no-focus-chain.snap
- apps/vscode/src/core/prompts/system-prompt/__tests__/__snapshots__/anthropic_claude_sonnet_4-no-mcp.snap
- apps/vscode/src/core/prompts/system-prompt/__tests__/__snapshots__/cline_claude_4_5_sonnet-basic.snap
- apps/vscode/src/core/prompts/system-prompt/__tests__/__snapshots__/cline_claude_4_5_sonnet-no-browser.snap
- apps/vscode/src/core/prompts/system-prompt/__tests__/__snapshots__/cline_claude_4_5_sonnet-no-focus-chain.snap
- apps/vscode/src/core/prompts/system-prompt/__tests__/__snapshots__/cline_claude_4_5_sonnet-no-mcp.snap
- apps/vscode/src/core/prompts/system-prompt/__tests__/__snapshots__/cline_devstral-basic.snap
- apps/vscode/src/core/prompts/system-prompt/__tests__/__snapshots__/cline_devstral-no-browser.snap
- apps/vscode/src/core/prompts/system-prompt/__tests__/__snapshots__/cline_devstral-no-focus-chain.snap


### Agent Instruction Files

- apps/vscode/src/core/prompts/system-prompt/__tests__/README.md
- apps/vscode/src/core/prompts/system-prompt/README.md
- apps/vscode/src/core/prompts/system-prompt/tools/README.md
- sdk/AGENTS.md
- sdk/packages/llms/AGENTS.md
- CLAUDE.md
- .github/copilot-instructions.md
- apps/vscode/src/core/prompts/__tests__/toolSpecificMissingParamErrors.test.ts
- apps/vscode/src/core/prompts/__tests__/writeToFileMissingContentError.test.ts
- apps/vscode/src/core/prompts/system-prompt/__tests__/__snapshots__/anthropic_claude_sonnet_4-basic.snap
- apps/vscode/src/core/prompts/system-prompt/__tests__/__snapshots__/anthropic_claude_sonnet_4-no-browser.snap
- apps/vscode/src/core/prompts/system-prompt/__tests__/__snapshots__/anthropic_claude_sonnet_4-no-focus-chain.snap
- apps/vscode/src/core/prompts/system-prompt/__tests__/__snapshots__/anthropic_claude_sonnet_4-no-mcp.snap
- apps/vscode/src/core/prompts/system-prompt/__tests__/__snapshots__/cline_claude_4_5_sonnet-basic.snap
- apps/vscode/src/core/prompts/system-prompt/__tests__/__snapshots__/cline_claude_4_5_sonnet-no-browser.snap


## Top Directories

| dir | count |
| --- | --- |
| apps | 2320 |
| sdk | 662 |
| docs | 114 |
| evals | 44 |
| .agents | 43 |
| .github | 23 |
| .clinerules | 13 |
| .vscode | 4 |
| .greptile | 3 |
| .claude | 2 |
| .changeset | 1 |
| .cline | 1 |
| .codex | 1 |
| .gitattributes | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 1967 |
| .tsx | 574 |
| .json | 163 |
| .md | 160 |
| .mdx | 109 |
| .snap | 57 |
| [no-ext] | 55 |
| .mjs | 21 |
| .proto | 21 |
| .sh | 16 |
| .py | 15 |
| .yml | 14 |
| .svg | 13 |
| .js | 11 |
| .css | 10 |
| .mts | 7 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
