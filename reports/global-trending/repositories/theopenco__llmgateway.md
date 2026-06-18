# theopenco/llmgateway

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/theopenco/llmgateway |
| local path | sources/theopenco__llmgateway |
| HEAD | c866341 |
| stars/forks | 1316 / 144 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T23:04:10Z |
| trendScore / priorityScore | 134 / 433 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 478 | AGENTS.md, README.md, infra/helm/README.md |
| Frontend / app framework | 283 | apps/docs/README.md, AGENTS.md, README.md |
| Coding agent / software automation | 246 | package.json, apps/docs/content/features/coding-agents.mdx, apps/docs/content/guides/agent-skills.mdx |
| AI agent / orchestration | 196 | AGENTS.md, apps/docs/content/features/coding-agents.mdx, apps/docs/content/guides/agent-skills.mdx |
| Developer tools / DX | 195 | AGENTS.md, apps/playground/README.md, ee/admin/README.md |
| Database / data infrastructure | 80 | AGENTS.md, README.md, docker-compose.yml |
| Security / supply chain | 62 | apps/docs/content/features/llm-sdk.mdx, apps/docs/content/guides/agent-skills.mdx, apps/docs/content/guides/mcp.mdx |
| MCP / agent interoperability | 59 | AGENTS.md, apps/docs/content/guides/agent-skills.mdx, apps/docs/content/guides/hermes-agent.mdx |
| Observability / evaluation | 40 | AGENTS.md, README.md, packages/instrumentation/README.md |
| RAG / retrieval / knowledge | 25 | apps/docs/content/features/embeddings.mdx, apps/gateway/src/embeddings/embeddings.spec.ts, apps/docs/content/features/image-generation.mdx |
| Data / ML platform | 3 | apps/docs/content/features/compliance.mdx, apps/docs/content/features/web-search.mdx |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2227 |
| manifests | 40 |
| docs | 278 |
| tests | 124 |
| ci/ops | 40 |
| spec artifacts | 5 |
| agent instruction files | 4 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | LLM Gateway | LLM Gateway / Features / Getting Started / Self-Hosted With Docker / Using LLM Gateway API / Development Setup / Folder Structure / License / Enterprise features include: | LLM Gateway LLM Gateway is an open source API gateway for Large Language Models LLMs . It acts as a middleware between your applications and various LLM providers, allowing you to Route requests to multiple LLM providers OpenAI, Anthropic, Google Vertex AI, and others Manage API keys for different providers in one place Track token usage and costs across all your LLM interactions Analyze performance metrics to optimize your LLM usage Features Unified API Interface Compatible with the OpenAI API format for seamless migration Usage Analytics Track requests, tokens used, response times, and costs Multi provider Support Connect to various LLM providers through a single gateway Performance Monito |


## Key Files

### Manifests

- apps/docs/README.md
- AGENTS.md
- ee/README.md
- README.md
- apps/playground/README.md
- ee/admin/README.md
- infra/helm/README.md
- packages/instrumentation/README.md
- packages/models/README.md
- apps/docs/package.json
- apps/docs/tsconfig.json
- .devcontainer/Dockerfile
- docker-compose.yml
- package.json
- tsconfig.json
- apps/api/package.json
- apps/api/tsconfig.json
- apps/code/package.json
- apps/code/tsconfig.json
- apps/gateway/package.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- apps/docs/content/learn/agents.mdx
- .claude/settings.json
- .claude/hooks/session-start.sh
- apps/ui/.claude/settings.json


### Agent Instruction Files

- AGENTS.md
- .claude/settings.json
- .claude/hooks/session-start.sh
- apps/ui/.claude/settings.json


## Top Directories

| dir | count |
| --- | --- |
| apps | 1373 |
| packages | 555 |
| ee | 177 |
| infra | 35 |
| .github | 18 |
| scripts | 18 |
| .run | 8 |
| vitest | 4 |
| .agents | 3 |
| .devcontainer | 3 |
| .claude | 2 |
| .husky | 2 |
| .dockerignore | 1 |
| .editorconfig | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .tsx | 782 |
| .ts | 626 |
| .json | 243 |
| .sql | 169 |
| .md | 137 |
| .mdx | 84 |
| [no-ext] | 36 |
| .yaml | 27 |
| .mjs | 26 |
| .svg | 26 |
| .sh | 21 |
| .yml | 20 |
| .xml | 8 |
| .css | 5 |
| .webmanifest | 5 |
| .mts | 3 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
