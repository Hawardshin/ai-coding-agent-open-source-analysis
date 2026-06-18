# MCPJam/inspector

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/MCPJam/inspector |
| local path | sources/MCPJam__inspector |
| HEAD | d8fefbf |
| stars/forks | 2016 / 239 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-18T00:27:09Z |
| trendScore / priorityScore | 149 / 452 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | examples/evals/asana/README.md, examples/evals/brightdata/README.md, examples/mcp-apps/express-react-template/README.md |
| Developer tools / DX | 387 | examples/evals/asana/README.md, examples/evals/brightdata/README.md, examples/mcp-apps/express-react-template/README.md |
| Frontend / app framework | 308 | examples/mcp-apps/express-react-template/README.md, examples/mcp-apps/flashcards-supabase/README.md, examples/mcp-apps/reservation-app/README.md |
| Security / supply chain | 156 | examples/evals/asana/README.md, mcpjam-inspector/README.md, examples/conformance/basic/README.md |
| AI agent / orchestration | 59 | mcp/README.md, mcpjam-inspector/AGENTS.md, README.md |
| Cloud native / infrastructure | 59 | mcpjam-inspector/README.md, cli/README.md, mcp/README.md |
| Observability / evaluation | 54 | examples/evals/asana/README.md, examples/evals/brightdata/README.md, mcpjam-inspector/README.md |
| Database / data infrastructure | 20 | examples/mcp-apps/flashcards-supabase/README.md, examples/mcp-apps/flashcards-supabase/VIBE_CODE_PROMPT.md, examples/mcp-apps/sip-cocktails/convex/_generated/server.d.ts |
| Coding agent / software automation | 19 | cli/README.md, mcpjam-inspector/AGENTS.md, mcpjam-inspector/client/vite.config.ts |
| Local LLM / inference | 4 | sdk/README.md, mcpjam-inspector/package.json, examples/evals/brightdata/package-lock.json |
| Data / ML platform | 3 | cli/README.md, README.md, soundcheck/README.md |
| RAG / retrieval / knowledge | 2 | examples/mcp-apps/sip-cocktails/README.md, examples/mcp-apps/sip-cocktails/apps.mdx |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2651 |
| manifests | 40 |
| docs | 115 |
| tests | 760 |
| ci/ops | 18 |
| spec artifacts | 5 |
| agent instruction files | 5 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Table of contents | 🚀 Quick Start / Table of contents / Installation Guides / Requirements / Hosted Web App / Desktop App / Terminal / Docker / Key features / App Builder | <div align="center" <picture <source media=" prefers color scheme dark " srcset="./mcpjam inspector/client/public/mcp jam dark.png" <source media=" prefers color scheme light " srcset="./mcpjam inspector/client/public/mcp jam light.png" <img width="250" alt="MCPJam Inspector V1 logo" src="./mcpjam inspector/client/public/mcp jam light.png" </picture <br/ www.mcpjam.com ! npm version https //img.shields.io/npm/v/@mcpjam/inspector?style=for the badge&color=blue https //www.npmjs.com/package/@mcpjam/inspector ! License Apache 2.0 https //img.shields.io/badge/License Apache%202.0 blue.svg?style=for the badge https //opensource.org/licenses/Apache 2.0 ! Discord https //img.shields.io/badge/Discor |


## Key Files

### Manifests

- examples/evals/asana/README.md
- examples/evals/brightdata/README.md
- examples/mcp-apps/express-react-template/README.md
- examples/mcp-apps/flashcards-supabase/README.md
- examples/mcp-apps/README.md
- examples/mcp-apps/reservation-app/README.md
- examples/mcp-apps/sip-cocktails/README.md
- examples/mcp-servers/README.md
- mcpjam-inspector/README.md
- docs/README.md
- examples/chatgpt-apps/CoffeeShop/README.md
- examples/chatgpt-apps/README.md
- examples/conformance/basic/README.md
- cli/README.md
- mcp/README.md
- mcpjam-inspector/client/README.md
- mcpjam-inspector/client/src/hooks/README.md
- mcpjam-inspector/e2e/README.md
- mcpjam-inspector/AGENTS.md
- .changeset/README.md


### Spec / Docs / Prompt Artifacts

- mcpjam-inspector/AGENTS.md
- mcpjam-inspector/client/src/components/chat-v2/chat-input/prompts/__tests__/mcp-prompts-popover.test.tsx
- mcpjam-inspector/client/src/components/chat-v2/chat-input/prompts/mcp-prompt-result-card.tsx
- mcpjam-inspector/client/src/components/chat-v2/chat-input/prompts/mcp-prompts-popover.tsx
- .github/workflows/claude.yml


### Agent Instruction Files

- mcpjam-inspector/AGENTS.md
- mcpjam-inspector/client/src/components/chat-v2/chat-input/prompts/__tests__/mcp-prompts-popover.test.tsx
- mcpjam-inspector/client/src/components/chat-v2/chat-input/prompts/mcp-prompt-result-card.tsx
- mcpjam-inspector/client/src/components/chat-v2/chat-input/prompts/mcp-prompts-popover.tsx
- .github/workflows/claude.yml


## Top Directories

| dir | count |
| --- | --- |
| mcpjam-inspector | 1889 |
| sdk | 273 |
| examples | 115 |
| cli | 87 |
| docs | 71 |
| design-system | 47 |
| chat-ui | 40 |
| mcp | 34 |
| soundcheck | 29 |
| .github | 25 |
| widget-react | 23 |
| skills | 4 |
| .changeset | 2 |
| .release-plan | 2 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 1498 |
| .tsx | 841 |
| .mdx | 67 |
| .json | 61 |
| .md | 44 |
| .mjs | 26 |
| [no-ext] | 26 |
| .css | 17 |
| .yml | 17 |
| .svg | 16 |
| .html | 9 |
| .js | 7 |
| .sh | 6 |
| .cjs | 2 |
| .example | 2 |
| .icns | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
