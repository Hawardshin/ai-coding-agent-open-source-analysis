# hexabot-ai/Hexabot

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/hexabot-ai/Hexabot |
| local path | sources/hexabot-ai__Hexabot |
| HEAD | 19c1ab6 |
| stars/forks | 974 / 218 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T16:31:20Z |
| trendScore / priorityScore | 154 / 453 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 287 | packages/cli/README.md, AGENTS.md, packages/api/AGENTS.md |
| Frontend / app framework | 206 | packages/cli/README.md, packages/frontend/README.md, AGENTS.md |
| MCP / agent interoperability | 204 | packages/api/src/mcp/README.md, packages/cli/README.md, AGENTS.md |
| Database / data infrastructure | 124 | packages/cli/README.md, packages/frontend/README.md, packages/api/AGENTS.md |
| Developer tools / DX | 124 | packages/cli/README.md, packages/frontend/README.md, AGENTS.md |
| AI agent / orchestration | 90 | packages/api/src/mcp/README.md, packages/frontend/README.md, AGENTS.md |
| Security / supply chain | 71 | packages/api/src/mcp/README.md, packages/api/README.md, packages/api/src/audit/README.md |
| RAG / retrieval / knowledge | 69 | packages/api/src/mcp/README.md, packages/cli/README.md, packages/frontend/README.md |
| Observability / evaluation | 16 | packages/agentic/README.md, packages/agentic/AGENTS.md, packages/api/src/audit/README.md |
| Coding agent / software automation | 9 | packages/agentic/README.md, packages/api/src/mcp/README.md, packages/cli/AGENTS.md |
| Data / ML platform | 9 | packages/graph/AGENTS.md, packages/api/src/channel/README.md, packages/graph/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1798 |
| manifests | 40 |
| docs | 31 |
| tests | 302 |
| ci/ops | 20 |
| spec artifacts | 8 |
| agent instruction files | 8 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Demo Video / Quick Start / Prerequisites / 1) Install the CLI / 2) Create and run a project / Core Capabilities / Data Layer / Contributing / License | <p align="center" <a href="https //hexabot.ai" target=" blank" <picture <source media=" prefers color scheme dark " srcset="https //i.imgur.com/Ov50Pwe.png" / <img alt="Hexabot logo" src="https //i.imgur.com/gz1FnM7.png" width="280" / </picture </a </p <div align="center" <h2 Automate the Boring, Keep the Magic</h2 <p Build and run agentic workflows across channels with YAML, tools, MCP, memory and RAG.</p </div <p align="center" <a href="https //hexabot.ai" <strong Website</strong </a · <a href="https //docs.hexabot.ai" <strong Documentation</strong </a · <a href="https //hexabot.ai/extensions" <strong Extensions</strong </a · <a href="https //discord.gg/rNb9t2MFkG" <strong Discord</strong |


## Key Files

### Manifests

- packages/agentic/README.md
- packages/api/src/mcp/README.md
- packages/cli/README.md
- packages/frontend/README.md
- AGENTS.md
- packages/agentic/AGENTS.md
- packages/api/AGENTS.md
- packages/cli/AGENTS.md
- packages/frontend/AGENTS.md
- packages/graph/AGENTS.md
- packages/types/AGENTS.md
- packages/widget/AGENTS.md
- README.md
- packages/api/README.md
- packages/api/src/audit/README.md
- packages/api/src/channel/README.md
- packages/api/src/chat/helpers/README.md
- packages/api/src/extensions/actions/messaging/README.md
- packages/api/src/migration/README.md
- packages/api/src/websocket/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- packages/agentic/AGENTS.md
- packages/api/AGENTS.md
- packages/cli/AGENTS.md
- packages/frontend/AGENTS.md
- packages/graph/AGENTS.md
- packages/types/AGENTS.md
- packages/widget/AGENTS.md


### Agent Instruction Files

- AGENTS.md
- packages/agentic/AGENTS.md
- packages/api/AGENTS.md
- packages/cli/AGENTS.md
- packages/frontend/AGENTS.md
- packages/graph/AGENTS.md
- packages/types/AGENTS.md
- packages/widget/AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| packages | 1753 |
| docker | 18 |
| .github | 6 |
| .husky | 3 |
| .vscode | 3 |
| .gitignore | 1 |
| .npmrc | 1 |
| AGENTS.md | 1 |
| bump-version.sh | 1 |
| CODE_OF_CONDUCT.md | 1 |
| commitlint.config.js | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE.md | 1 |
| package.json | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 1189 |
| .tsx | 383 |
| .json | 73 |
| .md | 31 |
| [no-ext] | 27 |
| .yml | 22 |
| .scss | 21 |
| .cjs | 14 |
| .css | 12 |
| .js | 4 |
| .mts | 4 |
| .html | 3 |
| .sh | 3 |
| .example | 2 |
| .mjml | 2 |
| .template | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
