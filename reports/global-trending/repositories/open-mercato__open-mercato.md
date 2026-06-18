# open-mercato/open-mercato

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/open-mercato/open-mercato |
| local path | sources/open-mercato__open-mercato |
| HEAD | 0d2e1ca |
| stars/forks | 1411 / 300 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T23:42:30Z |
| trendScore / priorityScore | 144 / 497 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | .ai/specs/AGENTS.md, .ai/specs/enterprise/README.md, .ai/specs/README.md |
| MCP / agent interoperability | 500 | .ai/specs/AGENTS.md, .ai/specs/README.md, .ai/specs/CLAUDE.md |
| Cloud native / infrastructure | 404 | .ai/specs/analysis/README.md, .ai/specs/enterprise/README.md, .ai/specs/README.md |
| Developer tools / DX | 403 | .ai/specs/analysis/README.md, .ai/specs/README.md, packages/cli/README.md |
| Database / data infrastructure | 349 | .ai/specs/README.md, packages/cli/README.md, AGENTS.md |
| Security / supply chain | 316 | .ai/specs/AGENTS.md, .ai/specs/analysis/README.md, .ai/specs/enterprise/README.md |
| Coding agent / software automation | 229 | .ai/specs/README.md, AGENTS.md, .ai/qa/AGENTS.md |
| Frontend / app framework | 213 | .ai/specs/README.md, apps/docs/README.md, docs/design-system/README.md |
| Data / ML platform | 46 | .ai/specs/README.md, AGENTS.md, packages/checkout/AGENTS.md |
| RAG / retrieval / knowledge | 29 | packages/core/AGENTS.md, packages/search/AGENTS.md, packages/core/src/modules/currencies/services/README.md |
| Local LLM / inference | 28 | packages/search/AGENTS.md, packages/ai-assistant/README.md, packages/search/src/modules/search/README.md |
| Observability / evaluation | 17 | .ai/specs/README.md, packages/core/src/modules/workflows/AGENTS.md, .devcontainer/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 8000 (capped) |
| manifests | 40 |
| docs | 1187 |
| tests | 2530 |
| ci/ops | 24 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Open Mercato | Open Mercato / Start with 80% done. / Quick Links / Core Use Cases / Highlights / Live demo / Screenshots / Architecture Overview / Getting Started / ⚡ Quick start | <p align="center" <img src="./apps/mercato/public/open mercato.svg" alt="Open Mercato logo" width="120" / </p Open Mercato ! License MIT https //img.shields.io/badge/License MIT green.svg LICENSE ! Docs https //img.shields.io/badge/docs openmercato.com 1F7AE0.svg https //docs.openmercato.com/ ! PRs Welcome https //img.shields.io/badge/PRs welcome ff69b4.svg https //github.com/open mercato/open mercato/issues ! Built with Next.js https //img.shields.io/badge/Built%20with Next.js black?logo=next.js https //nextjs.org/ Open Mercato the AI Engineering Foundation Framework. AI code assistants generate code. They don't decide where it goes, how it should be layered, or whether it stays consistent |


## Key Files

### Manifests

- packages/create-app/agentic/shared/ai/specs/README.md
- .ai/specs/AGENTS.md
- .ai/specs/analysis/README.md
- .ai/specs/enterprise/README.md
- .ai/specs/README.md
- apps/docs/README.md
- docs/design-system/README.md
- .ai/specs/CLAUDE.md
- packages/cli/README.md
- AGENTS.md
- .ai/qa/AGENTS.md
- docker/opencode/AGENTS.md
- packages/ai-assistant/AGENTS.md
- packages/cache/AGENTS.md
- packages/channel-gmail/AGENTS.md
- packages/channel-imap/AGENTS.md
- packages/checkout/AGENTS.md
- packages/cli/AGENTS.md
- packages/cli/CLAUDE.md
- packages/content/AGENTS.md


### Spec / Docs / Prompt Artifacts

- packages/create-app/agentic/shared/ai/specs/README.md
- .ai/specs/AGENTS.md
- .ai/specs/analysis/README.md
- .ai/specs/enterprise/README.md
- .ai/specs/README.md
- .ai/specs/CLAUDE.md
- AGENTS.md
- .ai/qa/AGENTS.md
- docker/opencode/AGENTS.md
- packages/ai-assistant/AGENTS.md
- packages/cache/AGENTS.md
- packages/channel-gmail/AGENTS.md
- packages/channel-imap/AGENTS.md
- packages/checkout/AGENTS.md
- packages/cli/AGENTS.md
- packages/cli/CLAUDE.md
- packages/content/AGENTS.md
- packages/core/AGENTS.md
- packages/core/src/modules/attachments/AGENTS.md
- packages/core/src/modules/auth/AGENTS.md


### Agent Instruction Files

- .ai/specs/AGENTS.md
- .ai/specs/CLAUDE.md
- AGENTS.md
- .ai/qa/AGENTS.md
- docker/opencode/AGENTS.md
- packages/ai-assistant/AGENTS.md
- packages/cache/AGENTS.md
- packages/channel-gmail/AGENTS.md
- packages/channel-imap/AGENTS.md
- packages/checkout/AGENTS.md
- packages/cli/AGENTS.md
- packages/cli/CLAUDE.md
- packages/content/AGENTS.md
- packages/core/AGENTS.md
- packages/core/src/modules/attachments/AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| packages | 6509 |
| .ai | 776 |
| apps | 524 |
| scripts | 80 |
| docs | 31 |
| .github | 16 |
| docker | 15 |
| .devcontainer | 8 |
| .dockerignore | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .husky | 1 |
| .mcp.json.example | 1 |
| .npmrc.local | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 5048 |
| .tsx | 1184 |
| .md | 918 |
| .json | 300 |
| .mdx | 251 |
| .mjs | 125 |
| .sh | 33 |
| [no-ext] | 25 |
| .cjs | 24 |
| .yml | 22 |
| .svg | 12 |
| .log | 9 |
| .example | 7 |
| .js | 6 |
| .template | 6 |
| .txt | 6 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
