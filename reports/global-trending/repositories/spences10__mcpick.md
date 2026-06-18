# spences10/mcpick

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/spences10/mcpick |
| local path | sources/spences10__mcpick |
| HEAD | 8a98c28 |
| stars/forks | 85 / 12 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T20:50:37Z |
| trendScore / priorityScore | 137 / 342 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 284 | README.md, .github/copilot-instructions.md, package.json |
| Coding agent / software automation | 179 | README.md, .github/copilot-instructions.md, package.json |
| Developer tools / DX | 175 | .changeset/README.md, README.md, .github/copilot-instructions.md |
| Frontend / app framework | 88 | README.md, .github/copilot-instructions.md, package.json |
| AI agent / orchestration | 68 | README.md, .github/copilot-instructions.md, package.json |
| Security / supply chain | 32 | README.md, docs/VENDOR_NEUTRAL_ARCHITECTURE.md, src/core/client-config.test.ts |
| Observability / evaluation | 15 | src/core/client-config.test.ts, CHANGELOG.md, pnpm-lock.yaml |
| Database / data infrastructure | 4 | README.md, src/cli/commands/add.ts, src/index.ts |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, database, databaseRuntime, devtools, frontend, frontendStack, infraOps, llm-app, mcp, observability, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript |
| capabilities | Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 82 |
| manifests | 5 |
| docs | 7 |
| tests | 13 |
| ci/ops | 1 |
| spec artifacts | 2 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | MCPick | MCPick / Install / or run without installing / Agent-first CLI / MCP clients / MCP server commands / List Claude Code registry/status / List another client / Claude Code enable/disable / Add/remove Claude Code server definitions | MCPick ! built with vite+ https //img.shields.io/badge/built%20with Vite+ 646CFF?logo=vite&logoColor=white https //viteplus.dev ! tested with vitest https //img.shields.io/badge/tested%20with Vitest 6E9F18?logo=vitest&logoColor=white https //vitest.dev Vendor neutral MCP configuration manager with first class Claude Code support. MCPick helps humans and LLM agents inspect, toggle, and back up MCP server configuration across multiple AI clients. Claude Code specific plugins, hooks, marketplaces, and cache commands remain available, but they are no longer the core product model. Install Requirements Node.js 22+ Claude Code is required only for Claude Code specific commands The external skills |


## Key Files

### Manifests

- .changeset/README.md
- README.md
- package.json
- tsconfig.json
- vite.config.ts


### Spec / Docs / Prompt Artifacts

- .github/copilot-instructions.md
- docs/adr/0001-vendor-neutral-mcp-core.md


### Agent Instruction Files

- .github/copilot-instructions.md


## Top Directories

| dir | count |
| --- | --- |
| src | 62 |
| .changeset | 2 |
| .github | 2 |
| docs | 2 |
| .gitignore | 1 |
| .npmignore | 1 |
| .vscode | 1 |
| .zed | 1 |
| CHANGELOG.md | 1 |
| CONTEXT.md | 1 |
| LICENSE | 1 |
| package.json | 1 |
| pnpm-lock.yaml | 1 |
| pnpm-workspace.yaml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 63 |
| .md | 7 |
| .json | 6 |
| [no-ext] | 3 |
| .yaml | 2 |
| .yml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
