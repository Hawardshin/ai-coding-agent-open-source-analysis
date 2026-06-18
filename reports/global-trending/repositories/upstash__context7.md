# upstash/context7

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/upstash/context7 |
| local path | sources/upstash__context7 |
| HEAD | 1f6212b |
| stars/forks | 57572 / 2714 |
| language | TypeScript |
| license | MIT |
| pushedAt | 2026-06-17T12:09:30Z |
| trendScore / priorityScore | 180 / 522 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | packages/cli/README.md, packages/mcp/README.md, README.md |
| Coding agent / software automation | 500 | packages/cli/README.md, packages/mcp/README.md, README.md |
| Developer tools / DX | 500 | packages/cli/README.md, packages/mcp/README.md, .changeset/README.md |
| MCP / agent interoperability | 500 | packages/cli/README.md, packages/mcp/README.md, README.md |
| Security / supply chain | 363 | docs/images/enterprise/entra-sso/README.md, packages/cli/README.md, packages/mcp/README.md |
| Frontend / app framework | 264 | packages/cli/README.md, packages/mcp/README.md, README.md |
| Cloud native / infrastructure | 170 | packages/mcp/README.md, docs/enterprise/deployment/kubernetes.mdx, docs/enterprise/security/entra-sso.mdx |
| RAG / retrieval / knowledge | 30 | packages/sdk/README.md, packages/tools-ai-sdk/README.md, docs/enterprise/deployment/kubernetes.mdx |
| Data / ML platform | 28 | packages/mcp/README.md, README.md, packages/sdk/README.md |
| Database / data infrastructure | 27 | packages/cli/README.md, packages/tools-ai-sdk/README.md, packages/mcp/package.json |
| Observability / evaluation | 24 | docs/agentic-tools/ai-sdk/tools/resolve-library-id.mdx, docs/clients/cli.mdx, docs/enterprise/deployment/kubernetes.mdx |
| Local LLM / inference | 3 | docs/enterprise/on-premise.mdx |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 273 |
| manifests | 25 |
| docs | 116 |
| tests | 19 |
| ci/ops | 7 |
| spec artifacts | 4 |
| agent instruction files | 4 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Context7 Platform - Up-to-date Code Docs For Any Prompt | Context7 Platform - Up-to-date Code Docs For Any Prompt / ❌ Without Context7 / ✅ With Context7 / Installation / Important Tips / Use Library Id / Specify a Version / Add a Rule / Available Tools / CLI Commands | ! Cover https //github.com/upstash/context7/blob/master/public/cover.png?raw=true ! Install MCP Server https //cursor.com/deeplink/mcp install dark.svg https //cursor.com/en/install mcp?name=context7&config=eyJ1cmwiOiJodHRwczovL21jcC5jb250ZXh0Ny5jb20vbWNwIn0%3D Context7 Platform Up to date Code Docs For Any Prompt ! Website https //img.shields.io/badge/Website context7.com blue https //context7.com ! smithery badge https //smithery.ai/badge/@upstash/context7 mcp https //smithery.ai/server/@upstash/context7 mcp ! NPM Version https //img.shields.io/npm/v/%40upstash%2Fcontext7 mcp?color=red https //www.npmjs.com/package/@upstash/context7 mcp ! MIT licensed https //img.shields.io/npm/l/%40upstas |


## Key Files

### Manifests

- docs/images/enterprise/entra-sso/README.md
- packages/cli/README.md
- packages/mcp/README.md
- .changeset/README.md
- README.md
- packages/pi/README.md
- packages/sdk/README.md
- packages/tools-ai-sdk/README.md
- plugins/claude/context7/README.md
- plugins/copilot/context7/README.md
- plugins/cursor/context7/README.md
- packages/cli/package.json
- packages/cli/tsconfig.json
- packages/mcp/Dockerfile
- packages/mcp/package.json
- packages/mcp/tsconfig.json
- package.json
- tsconfig.json
- packages/pi/package.json
- packages/pi/tsconfig.json


### Spec / Docs / Prompt Artifacts

- packages/pi/prompts/c7-docs.md
- packages/tools-ai-sdk/src/prompts/index.ts
- packages/tools-ai-sdk/src/prompts/system.ts
- plugins/cursor/context7/.cursor/plugin.json


### Agent Instruction Files

- packages/pi/prompts/c7-docs.md
- packages/tools-ai-sdk/src/prompts/index.ts
- packages/tools-ai-sdk/src/prompts/system.ts
- plugins/cursor/context7/.cursor/plugin.json


## Top Directories

| dir | count |
| --- | --- |
| packages | 134 |
| docs | 60 |
| plugins | 20 |
| i18n | 15 |
| .github | 10 |
| .changeset | 8 |
| skills | 6 |
| public | 3 |
| rules | 2 |
| .claude-plugin | 1 |
| .env.example | 1 |
| .gitignore | 1 |
| .prettierignore | 1 |
| eslint.config.js | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 92 |
| .md | 57 |
| .mdx | 55 |
| .json | 29 |
| [no-ext] | 11 |
| .yml | 9 |
| .js | 6 |
| .svg | 5 |
| .mjs | 3 |
| .yaml | 3 |
| .example | 1 |
| .mcpb | 1 |
| .mdc | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
