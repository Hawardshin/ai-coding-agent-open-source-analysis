# mastra-ai/mastra

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/mastra-ai/mastra |
| local path | sources/mastra-ai__mastra |
| HEAD | 8b4e030 |
| stars/forks | 25182 / 2247 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-18T00:23:43Z |
| trendScore / priorityScore | 217 / 558 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | examples/agent/README.md, examples/durable-agents/README.md, examples/evals-with-memory/README.md |
| Observability / evaluation | 373 | examples/evals-with-memory/README.md, examples/inngest/README.md, observability/_examples/otel-bridge/agent-hub/README.md |
| Developer tools / DX | 267 | examples/agent/README.md, examples/durable-agents/README.md, packages/core/src/agent/message-list/prompt/README.md |
| Database / data infrastructure | 229 | examples/agent/README.md, examples/durable-agents/README.md, packages/rag/src/tools/README.md |
| RAG / retrieval / knowledge | 135 | explorations/longmemeval/README.md, packages/rag/README.md, packages/rag/src/tools/README.md |
| MCP / agent interoperability | 88 | agent-sdks/claude/README.md, docs/CLAUDE.md, packages/mcp-docs-server/README.md |
| Security / supply chain | 73 | templates/template-slack-agent/README.md, packages/auth/AGENTS.md, mastracode/README.md |
| Cloud native / infrastructure | 65 | examples/durable-agents/README.md, examples/inngest/README.md, observability/_examples/otel-bridge/agent-hub/README.md |
| Coding agent / software automation | 52 | packages/core/src/agent/message-list/prompt/README.md, agent-sdks/acp/README.md, agent-sdks/cursor/README.md |
| Data / ML platform | 46 | examples/evals-with-memory/README.md, explorations/longmemeval/README.md, templates/template-github-review-agent/README.md |
| Frontend / app framework | 35 | client-sdks/ai-sdk/README.md, packages/_llm-recorder/README.md, templates/template-browser-agent/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 8000 (capped) |
| manifests | 40 |
| docs | 1603 |
| tests | 1675 |
| ci/ops | 68 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Mastra | Mastra / Why Mastra? / Get started / Documentation / Build with AI / Contributing / Support / Licensing / Security | Mastra ! npm version https //badge.fury.io/js/@mastra%2Fcore.svg https //www.npmjs.com/package/@mastra/core ! CodeQl https //github.com/mastra ai/mastra/actions/workflows/github code scanning/codeql/badge.svg https //github.com/mastra ai/mastra/actions/workflows/github code scanning/codeql ! GitHub Repo stars https //img.shields.io/github/stars/mastra ai/mastra https //github.com/mastra ai/mastra/stargazers ! Discord https //img.shields.io/discord/1309558646228779139?logo=discord&label=Discord&labelColor=white&color=7289DA https //discord.gg/BTYqqHKUrf ! Twitter Follow https //img.shields.io/twitter/follow/mastra?style=social https //x.com/mastra ! NPM Downloads https //img.shields.io/npm/dm |


## Key Files

### Manifests

- examples/agent/README.md
- examples/durable-agents/README.md
- examples/evals-with-memory/README.md
- examples/AGENTS.md
- packages/core/src/agent/message-list/prompt/README.md
- docs/AGENTS.md
- examples/agent-builder/AGENTS.md
- examples/README.md
- docs/README.md
- examples/inngest/README.md
- observability/_examples/otel-bridge/agent-hub/README.md
- .github/workflows/README.md
- docs/styles/write-good/README.md
- agent-sdks/acp/README.md
- agent-sdks/claude/README.md
- agent-sdks/cursor/README.md
- agent-sdks/openai/README.md
- browser/agent-browser/README.md
- client-sdks/ai-sdk/README.md
- client-sdks/client-js/README.md


### Spec / Docs / Prompt Artifacts

- examples/AGENTS.md
- packages/core/src/agent/message-list/prompt/README.md
- docs/AGENTS.md
- examples/agent-builder/AGENTS.md
- docs/CLAUDE.md
- AGENTS.md
- packages/codemod/AGENTS.md
- agent-sdks/acp/AGENTS.md
- agent-sdks/claude/AGENTS.md
- agent-sdks/cursor/AGENTS.md
- agent-sdks/openai/AGENTS.md
- packages/auth/AGENTS.md
- packages/core/AGENTS.md
- packages/memory/AGENTS.md
- packages/rag/AGENTS.md
- CLAUDE.md
- .claude/skills/builder-smoke-test/references/agents.md
- .claude/skills/mastra-smoke-test/references/tests/agents.md
- .claude/skills/builder-smoke-test/assets/template/package.json
- .claude/skills/builder-smoke-test/assets/template/tsconfig.json


### Agent Instruction Files

- examples/AGENTS.md
- packages/core/src/agent/message-list/prompt/README.md
- docs/AGENTS.md
- examples/agent-builder/AGENTS.md
- docs/CLAUDE.md
- AGENTS.md
- packages/codemod/AGENTS.md
- agent-sdks/acp/AGENTS.md
- agent-sdks/claude/AGENTS.md
- agent-sdks/cursor/AGENTS.md
- agent-sdks/openai/AGENTS.md
- packages/auth/AGENTS.md
- packages/core/AGENTS.md
- packages/memory/AGENTS.md
- packages/rag/AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| packages | 2711 |
| docs | 1123 |
| stores | 837 |
| mastracode | 547 |
| observability | 389 |
| workspaces | 300 |
| voice | 227 |
| templates | 218 |
| client-sdks | 201 |
| e2e-tests | 183 |
| server-adapters | 167 |
| workflows | 155 |
| auth | 149 |
| browser | 104 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 4576 |
| .json | 925 |
| .mdx | 761 |
| .md | 588 |
| .tsx | 380 |
| .js | 330 |
| [no-ext] | 96 |
| .yaml | 76 |
| .yml | 69 |
| .mp3 | 36 |
| .css | 34 |
| .example | 30 |
| .mjs | 26 |
| .bin | 16 |
| .snap | 12 |
| .sh | 8 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
