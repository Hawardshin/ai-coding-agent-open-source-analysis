# getsentry/sentry-mcp

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/getsentry/sentry-mcp |
| local path | sources/getsentry__sentry-mcp |
| HEAD | 5dee0fc |
| stars/forks | 730 / 119 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T23:22:15Z |
| trendScore / priorityScore | 140 / 450 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | docs/README.md, docs/specs/README.md, packages/agent-cli-test/README.md |
| Observability / evaluation | 500 | docs/README.md, docs/specs/README.md, packages/agent-cli-test/README.md |
| Security / supply chain | 473 | docs/README.md, docs/specs/README.md, packages/mcp-test-client/README.md |
| AI agent / orchestration | 255 | docs/README.md, docs/specs/README.md, packages/agent-cli-test/README.md |
| Developer tools / DX | 240 | docs/README.md, packages/agent-cli-test/README.md, packages/mcp-test-client/README.md |
| Data / ML platform | 89 | packages/mcp-core/src/tools/support/search-issues/README.md, docs/specs/search-events.md, docs/testing/remote.md |
| Coding agent / software automation | 73 | packages/agent-cli-test/README.md, README.md, docs/specs/embedded-agent-openai-routing.md |
| Frontend / app framework | 54 | packages/mcp-test-client/README.md, packages/mcp-cloudflare/package.json, packages/mcp-cloudflare/vite.config.ts |
| Database / data infrastructure | 34 | packages/mcp-core/src/internal/agents/tools/data/CLAUDE.md, docs/specs/search-events.md, docs/testing/remote.md |
| Cloud native / infrastructure | 24 | packages/mcp-core/README.md, packages/mcp-core/src/internal/agents/tools/data/CLAUDE.md, docs/specs/embedded-agent-openai-routing.md |
| RAG / retrieval / knowledge | 1 | .agents/skills/mcp-audit/references/spec-baseline.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 774 |
| manifests | 36 |
| docs | 78 |
| tests | 190 |
| ci/ops | 9 |
| spec artifacts | 23 |
| agent instruction files | 14 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | sentry-mcp | sentry-mcp / Getting Started / Claude Code Plugin / Stdio vs Remote / LLM Provider Configuration (required for AI-powered search tools) / Optional overrides / MCP Inspector / Local Development / Verify / Tests | sentry mcp Sentry's MCP service is primarily designed for human in the loop coding agents. Our tool selection and priorities are focused on developer workflows and debugging use cases, rather than providing a general purpose MCP server for all Sentry functionality. This remote MCP server acts as middleware to the upstream Sentry API, optimized for coding assistants like Cursor, Claude Code, and similar development tools. It's based on Cloudflare's work towards remote MCPs https //blog.cloudflare.com/remote model context protocol servers mcp/ . Getting Started You'll find everything you need to know by visiting the deployed service in production <https //mcp.sentry.dev If you're looking to co |


## Key Files

### Manifests

- docs/README.md
- docs/specs/README.md
- packages/agent-cli-test/README.md
- packages/mcp-test-client/README.md
- packages/mcp-core/README.md
- packages/mcp-core/src/tools/support/search-issues/README.md
- packages/mcp-server-evals/README.md
- AGENTS.md
- packages/mcp-core/src/internal/agents/tools/data/CLAUDE.md
- README.md
- packages/agent-cli-test/package.json
- packages/agent-cli-test/tsconfig.json
- packages/mcp-test-client/package.json
- packages/mcp-test-client/tsconfig.json
- packages/mcp-cloudflare/package.json
- packages/mcp-cloudflare/tsconfig.json
- packages/mcp-cloudflare/vite.config.ts
- packages/mcp-core/package.json
- packages/mcp-core/tsconfig.json
- packages/mcp-server-evals/package.json


### Spec / Docs / Prompt Artifacts

- docs/specs/README.md
- AGENTS.md
- packages/mcp-core/src/internal/agents/tools/data/CLAUDE.md
- .cursor/mcp.json
- docs/specs/embedded-agent-openai-routing.md
- .github/workflows/eval.yml
- docs/specs/remembered-oauth-skills.md
- docs/specs/search-events.md
- docs/specs/subpath-constraints.md
- agents.toml
- .cursor/commands/opsx-apply.md
- .cursor/commands/opsx-archive.md
- .cursor/commands/opsx-explore.md
- .cursor/commands/opsx-propose.md
- .cursor/commands/opsx-sync.md
- docs/architecture/overview.md
- docs/cloudflare/architecture.md
- .claude/settings.json
- .claude/commands/opsx/apply.md
- .claude/commands/opsx/archive.md


### Agent Instruction Files

- AGENTS.md
- packages/mcp-core/src/internal/agents/tools/data/CLAUDE.md
- .cursor/mcp.json
- .cursor/commands/opsx-apply.md
- .cursor/commands/opsx-archive.md
- .cursor/commands/opsx-explore.md
- .cursor/commands/opsx-propose.md
- .cursor/commands/opsx-sync.md
- .claude/settings.json
- .claude/commands/opsx/apply.md
- .claude/commands/opsx/archive.md
- .claude/commands/opsx/explore.md
- .claude/commands/opsx/propose.md
- .claude/commands/opsx/sync.md


## Top Directories

| dir | count |
| --- | --- |
| packages | 660 |
| docs | 35 |
| .agents | 16 |
| plugins | 10 |
| .github | 8 |
| .claude | 6 |
| .codex | 6 |
| .cursor | 6 |
| .vscode | 3 |
| .claude-plugin | 1 |
| .craft.yml | 1 |
| .cursor-plugin | 1 |
| .env.example | 1 |
| .gitignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 399 |
| .json | 177 |
| .tsx | 86 |
| .md | 78 |
| .yml | 9 |
| [no-ext] | 5 |
| .toml | 4 |
| .jsonc | 3 |
| .yaml | 3 |
| .css | 2 |
| .example | 2 |
| .sh | 2 |
| .cast | 1 |
| .html | 1 |
| .mjs | 1 |
| .test | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
