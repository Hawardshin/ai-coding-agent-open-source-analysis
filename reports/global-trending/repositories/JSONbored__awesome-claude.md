# JSONbored/awesome-claude

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/JSONbored/awesome-claude |
| local path | sources/JSONbored__awesome-claude |
| HEAD | 3064468 |
| stars/forks | 265 / 79 |
| language | MDX |
| license |  |
| pushedAt | 2026-06-18T00:15:02Z |
| trendScore / priorityScore | 150 / 467 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | examples/content/README.md, packages/mcp/README.md, AGENTS.md |
| MCP / agent interoperability | 500 | examples/content/README.md, packages/mcp/README.md, AGENTS.md |
| Security / supply chain | 500 | packages/mcp/README.md, AGENTS.md, integrations/raycast/README.md |
| Frontend / app framework | 302 | AGENTS.md, apps/web/src/routes/README.md, package.json |
| Database / data infrastructure | 234 | integrations/raycast/README.md, tests/api-router-security.test.ts, docs/newsletter-resend-playbook.md |
| Coding agent / software automation | 226 | packages/mcp/README.md, integrations/raycast/README.md, CLAUDE.md |
| Observability / evaluation | 186 | content/agents/database-specialist-agent.mdx, content/agents/inspect-ai-benchmark-rubric-agent.mdx, content/agents/multi-agent-orchestration-specialist.mdx |
| Developer tools / DX | 157 | packages/mcp/README.md, packages/mcp/package.json, docs/ci-security-apps.md |
| Cloud native / infrastructure | 156 | packages/mcp/package.json, docs/api-security-contract.md, tests/api-router-security.test.ts |
| Data / ML platform | 34 | tests/mcp-config-validator.test.ts, tests/mcp-server.test.ts, content/agents/database-specialist-agent.mdx |
| RAG / retrieval / knowledge | 15 | docs/package-security-policy.md, examples/content/SCHEMA.md, examples/content/SUBMISSION_EXAMPLES.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1877 |
| manifests | 18 |
| docs | 1186 |
| tests | 83 |
| ci/ops | 22 |
| spec artifacts | 4 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  |  |  |


## Key Files

### Manifests

- examples/content/README.md
- packages/mcp/README.md
- AGENTS.md
- README.md
- apps/web/src/routes/README.md
- integrations/raycast/README.md
- CLAUDE.md
- packages/mcp/package.json
- package.json
- tsconfig.json
- apps/submission-gate/package.json
- apps/web/package.json
- apps/web/tsconfig.json
- apps/web/vite.config.ts
- integrations/raycast/package.json
- integrations/raycast/tsconfig.json
- packages/registry/package.json
- scripts/ci/content-policy-runtime/package.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- docs/architecture/atlas-registry-sharding.md
- content/commands/cursor-rules.mdx


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| content | 1185 |
| apps | 405 |
| tests | 82 |
| packages | 49 |
| scripts | 42 |
| integrations | 36 |
| .github | 19 |
| docs | 18 |
| examples | 12 |
| .trunk | 5 |
| .coderabbit.yaml | 1 |
| .devcontainer | 1 |
| .git-cliff.toml | 1 |
| .gitignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .mdx | 1150 |
| .ts | 270 |
| .tsx | 177 |
| .mcpb | 41 |
| .mjs | 41 |
| .md | 36 |
| .js | 33 |
| .woff2 | 32 |
| .sql | 22 |
| .json | 20 |
| .yml | 19 |
| [no-ext] | 11 |
| .yaml | 8 |
| .svg | 7 |
| .css | 2 |
| .jsonc | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
