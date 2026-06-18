# modelcontextprotocol/modelcontextprotocol

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/modelcontextprotocol/modelcontextprotocol |
| local path | sources/modelcontextprotocol__modelcontextprotocol |
| HEAD | 2fb207d |
| stars/forks | 8418 / 1593 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T18:13:14Z |
| trendScore / priorityScore | 164 / 452 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | plugins/mcp-spec/README.md, AGENTS.md, README.md |
| Security / supply chain | 500 | plugins/mcp-spec/README.md, docs/specification/2024-11-05/client/roots.mdx, docs/specification/2024-11-05/client/sampling.mdx |
| Developer tools / DX | 200 | AGENTS.md, docs/specification/draft/basic/authorization/client-registration.mdx, docs/specification/draft/basic/authorization/security-considerations.mdx |
| Coding agent / software automation | 86 | plugins/mcp-spec/README.md, docs/specification/2024-11-05/server/prompts.mdx, docs/specification/2025-03-26/server/prompts.mdx |
| AI agent / orchestration | 76 | AGENTS.md, docs/specification/2025-11-25/client/elicitation.mdx, docs/specification/draft/basic/authorization/security-considerations.mdx |
| Cloud native / infrastructure | 61 | docs/specification/draft/basic/authorization/security-considerations.mdx, docs/docs/tutorials/security/authorization.mdx, docs/docs/tutorials/security/security_best_practices.mdx |
| Database / data infrastructure | 19 | schema/draft/examples/LoggingMessageNotification/log-database-connection-failed.json, schema/draft/examples/LoggingMessageNotificationParams/log-database-connection-failed.json, docs/docs/tutorials/security/security_best_practices.mdx |
| RAG / retrieval / knowledge | 18 | docs/specification/draft/server/prompts.mdx, docs/docs/develop/clients/client-best-practices.mdx, docs/seps/1865-mcp-apps-interactive-user-interfaces-for-mcp.mdx |
| Frontend / app framework | 11 | docs/specification/2024-11-05/client/roots.mdx, docs/specification/2025-03-26/client/roots.mdx, docs/specification/2025-06-18/client/roots.mdx |
| Observability / evaluation | 7 | docs/community/interest-groups/security.mdx, docs/community/working-groups/skills-over-mcp.mdx, docs/docs/learn/client-concepts.mdx |
| Data / ML platform | 3 | docs/specification/2024-11-05/server/utilities/completion.mdx, docs/specification/2025-03-26/server/utilities/completion.mdx, docs/specification/2025-06-18/server/utilities/completion.mdx |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Go |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 552 |
| manifests | 10 |
| docs | 315 |
| tests | 7 |
| ci/ops | 13 |
| spec artifacts | 4 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Model Context Protocol (MCP) | Model Context Protocol (MCP) / Authors / Contributing / License | Model Context Protocol MCP Just heard of MCP and not sure where to start? Check out our documentation website https //modelcontextprotocol.io . This repo contains the MCP specification MCP protocol schema Official MCP documentation The schema is defined in TypeScript schema/2025 11 25/schema.ts first, but made available as JSON Schema schema/2025 11 25/schema.json as well, for wider compatibility. The official MCP documentation is built using Mintlify and available at modelcontextprotocol.io https //modelcontextprotocol.io . Authors The Model Context Protocol was created by David Soria Parra @dsp https //github.com/dsp and Justin Spahr Summers @jspahrsummers https //github.com/jspahrsummers |


## Key Files

### Manifests

- plugins/mcp-spec/README.md
- AGENTS.md
- README.md
- seps/README.md
- blog/go.mod
- package.json
- tsconfig.json
- tools/sep-automation/package.json
- tools/sep-automation/tsconfig.json
- blog/go.sum


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- docs/specification/2025-11-25/basic/utilities/tasks.mdx
- docs/development/roadmap.mdx
- docs/docs/learn/architecture.mdx


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| docs | 233 |
| schema | 140 |
| blog | 51 |
| seps | 44 |
| tools | 32 |
| .github | 19 |
| scripts | 5 |
| plugins | 4 |
| .claude-plugin | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .npmrc | 1 |
| .nvmrc | 1 |
| .prettierignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .mdx | 218 |
| .json | 142 |
| .md | 79 |
| .ts | 37 |
| .yml | 18 |
| .html | 16 |
| .svg | 15 |
| [no-ext] | 12 |
| .js | 3 |
| .mjs | 3 |
| .css | 2 |
| .jpg | 1 |
| .mod | 1 |
| .puml | 1 |
| .sh | 1 |
| .sum | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
