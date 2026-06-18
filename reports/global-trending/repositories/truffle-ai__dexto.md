# truffle-ai/dexto

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/truffle-ai/dexto |
| local path | sources/truffle-ai__dexto |
| HEAD | 5500bad |
| stars/forks | 633 / 72 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T07:17:52Z |
| trendScore / priorityScore | 147 / 459 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | agents/examples/README.md, examples/research-agent/README.md, examples/README.md |
| MCP / agent interoperability | 500 | agents/examples/README.md, examples/research-agent/README.md, examples/dexto-langchain-integration/README.md |
| Developer tools / DX | 411 | examples/research-agent/README.md, examples/README.md, examples/resources-demo-server/README.md |
| Database / data infrastructure | 235 | examples/research-agent/README.md, examples/discord-bot/README.md, examples/resources-demo-server/README.md |
| Coding agent / software automation | 81 | agents/coding-agent/README.md, packages/cli/README.md, AGENTS.md |
| Security / supply chain | 81 | agents/README.md, agents/triage-demo/README.md, agents/github-agent/README.md |
| Frontend / app framework | 52 | agents/coding-agent/README.md, packages/client-sdk/README.md, AGENTS.md |
| Observability / evaluation | 48 | examples/discord-bot/README.md, examples/resources-demo-server/README.md, examples/telegram-bot/README.md |
| Data / ML platform | 29 | agents/music-agent/README.md, agents/talk2pdf-agent/README.md, commands/README.md |
| Cloud native / infrastructure | 25 | examples/README.md, examples/telegram-bot/README.md, packages/cli/README.md |
| Local LLM / inference | 14 | agents/examples/README.md, packages/cli/README.md, README.md |
| RAG / retrieval / knowledge | 12 | agents/triage-demo/README.md, agents/music-agent/README.md, agents/triage-demo/docs/escalation-policies.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1828 |
| manifests | 40 |
| docs | 275 |
| tests | 253 |
| ci/ops | 11 |
| spec artifacts | 44 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Launch the coding agent (default) | What is Dexto? / Why Dexto? / What You Can Build / Coding Agent / Launch the coding agent (default) / Or explicitly / Quick Start / Install / macOS / Linux / WSL (native installer, recommended) / Windows PowerShell | <a href="https //dexto.ai" <div align="center" <picture <source media=" prefers color scheme light " srcset=".github/assets/dexto logo light.svg" <source media=" prefers color scheme dark " srcset=".github/assets/dexto logo dark.svg" <img alt="Dexto" src=".github/assets/dexto logo dark.svg" width="55%" style="max width 1000px; padding 48px 8px;" </picture </div </a <p align="center" <img src="https //img.shields.io/badge/Status Beta yellow" <img src="https //img.shields.io/badge/License Elastic%202.0 blue.svg" <a href="https //discord.gg/GFzWFAAZcm" <img src="https //img.shields.io/badge/Discord Join%20Chat 7289da?logo=discord&logoColor=white" </a <a href="https //deepwiki.com/truffle ai/dex |


## Key Files

### Manifests

- agents/examples/README.md
- examples/research-agent/README.md
- examples/README.md
- docs/README.md
- examples/dexto-langchain-integration/README.md
- examples/discord-bot/README.md
- examples/resources-demo-server/README.md
- examples/telegram-bot/README.md
- agents/README.md
- agents/triage-demo/README.md
- agents/coding-agent/README.md
- agents/database-agent/README.md
- agents/github-agent/README.md
- agents/image-editor-agent/README.md
- agents/music-agent/README.md
- agents/nano-banana-agent/README.md
- agents/podcast-agent/README.md
- agents/product-name-researcher/README.md
- agents/sora-video-agent/README.md
- agents/talk2pdf-agent/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- packages/tui/src/AGENTS.md
- packages/webui/AGENTS.md
- packages/core/src/prompts/name-validation.test.ts
- packages/core/src/prompts/prompt-manager.test.ts
- packages/core/src/prompts/providers/__fixtures__/my-test-skill/mcps/echo.json
- packages/core/src/prompts/providers/__fixtures__/my-test-skill/scripts/fixture-echo-server.mjs
- packages/core/src/prompts/providers/__fixtures__/my-test-skill/SKILL.md
- packages/core/src/prompts/providers/config-prompt-provider.test.ts
- packages/core/src/prompts/providers/custom-prompt-provider.test.ts
- packages/core/src/prompts/utils.test.ts
- packages/core/src/prompts/error-codes.ts
- packages/core/src/prompts/errors.ts
- packages/core/src/prompts/index.ts
- packages/core/src/prompts/name-validation.ts
- packages/core/src/prompts/prompt-manager.ts
- packages/core/src/prompts/providers/__fixtures__/arguments-frontmatter.md
- packages/core/src/prompts/providers/__fixtures__/claude-skill.md
- packages/core/src/prompts/providers/__fixtures__/full-frontmatter.md
- packages/core/src/prompts/providers/__fixtures__/invalid-name.md


### Agent Instruction Files

- AGENTS.md
- packages/tui/src/AGENTS.md
- packages/webui/AGENTS.md
- packages/core/src/prompts/name-validation.test.ts
- packages/core/src/prompts/prompt-manager.test.ts
- packages/core/src/prompts/providers/__fixtures__/my-test-skill/mcps/echo.json
- packages/core/src/prompts/providers/__fixtures__/my-test-skill/scripts/fixture-echo-server.mjs
- packages/core/src/prompts/providers/__fixtures__/my-test-skill/SKILL.md
- packages/core/src/prompts/providers/config-prompt-provider.test.ts
- packages/core/src/prompts/providers/custom-prompt-provider.test.ts
- packages/core/src/prompts/utils.test.ts
- packages/core/src/prompts/error-codes.ts
- packages/core/src/prompts/errors.ts
- packages/core/src/prompts/index.ts
- packages/core/src/prompts/name-validation.ts


## Top Directories

| dir | count |
| --- | --- |
| packages | 1482 |
| docs | 155 |
| agents | 52 |
| examples | 45 |
| .github | 15 |
| scripts | 14 |
| .agents | 13 |
| .claude | 10 |
| eslint-rules | 6 |
| commands | 5 |
| .changeset | 2 |
| .husky | 2 |
| postman | 2 |
| .cursor | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 1146 |
| .tsx | 228 |
| .md | 207 |
| .json | 96 |
| .yml | 49 |
| .svg | 26 |
| [no-ext] | 12 |
| .css | 11 |
| .wav | 11 |
| .mjs | 8 |
| .sh | 8 |
| .js | 7 |
| .yaml | 7 |
| .example | 4 |
| .mdx | 2 |
| .txt | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
