# modelcontextprotocol/typescript-sdk

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/modelcontextprotocol/typescript-sdk |
| local path | sources/modelcontextprotocol__typescript-sdk |
| HEAD | 5e0249f |
| stars/forks | 12685 / 1931 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T19:57:06Z |
| trendScore / priorityScore | 164 / 445 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Developer tools / DX | 500 | examples/client/README.md, examples/server/README.md, packages/client/README.md |
| MCP / agent interoperability | 500 | examples/client/README.md, examples/server/README.md, packages/client/README.md |
| Security / supply chain | 351 | examples/client/README.md, examples/server/README.md, README.md |
| Coding agent / software automation | 29 | packages/codemod/batch-test/README.md, CLAUDE.md, docs/client.md |
| Database / data infrastructure | 19 | examples/server/README.md, docs/client.md, docs/server.md |
| Observability / evaluation | 7 | docs/client.md, docs/server.md, examples/server/src/serverGuide.examples.ts |
| AI agent / orchestration | 5 | docs/server-quickstart.md, examples/server-quickstart/src/index.ts |
| Cloud native / infrastructure | 4 | docs/client.md, examples/client/src/simpleTokenProvider.ts |
| RAG / retrieval / knowledge | 4 | docs/server.md, examples/server/src/serverGuide.examples.ts, examples/server/src/simpleStreamableHttp.ts |
| Data / ML platform | 2 | packages/client/src/client/middleware.examples.ts |
| Frontend / app framework | 1 | common/vitest-config/package.json |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 564 |
| manifests | 40 |
| docs | 112 |
| tests | 165 |
| ci/ops | 7 |
| spec artifacts | 3 |
| agent instruction files | 3 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | MCP TypeScript SDK | MCP TypeScript SDK / Overview / Packages / Middleware packages (optional) / Installation / Server / or / or / Client / or | MCP TypeScript SDK <! prettier ignore !IMPORTANT This is the main branch which contains v2 of the SDK currently in development, pre alpha . We anticipate a stable v2 release in Q3 2026 along with the updated MCP spec https //blog.modelcontextprotocol.io/posts/2026 07 28 release candidate/ . Until then, v1.x remains the recommended version for production use. v1.x will continue to receive bug fixes and security updates for at least 6 months after v2 ships to give people time to upgrade. For v1 documentation, see the V1 API docs https //ts.sdk.modelcontextprotocol.io/ . For v2 API docs, see /v2/ https //ts.sdk.modelcontextprotocol.io/v2/ . <! prettier ignore !WARNING We're temporarily restrict |


## Key Files

### Manifests

- examples/client/README.md
- examples/server/README.md
- packages/client/README.md
- .changeset/README.md
- packages/codemod/batch-test/README.md
- README.md
- test/conformance/README.md
- packages/middleware/express/README.md
- packages/middleware/fastify/README.md
- packages/middleware/hono/README.md
- packages/middleware/node/README.md
- packages/middleware/README.md
- packages/server-legacy/README.md
- packages/server/README.md
- CLAUDE.md
- test/e2e/CLAUDE.md
- examples/client-quickstart/package.json
- examples/client-quickstart/tsconfig.json
- examples/client/package.json
- examples/client/tsconfig.json


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- test/e2e/CLAUDE.md
- .github/workflows/claude.yml


### Agent Instruction Files

- CLAUDE.md
- test/e2e/CLAUDE.md
- .github/workflows/claude.yml


## Top Directories

| dir | count |
| --- | --- |
| packages | 293 |
| test | 88 |
| .changeset | 77 |
| examples | 58 |
| .github | 9 |
| docs | 9 |
| common | 7 |
| scripts | 4 |
| .git-blame-ignore-revs | 1 |
| .gitignore | 1 |
| .npmrc | 1 |
| .prettierignore | 1 |
| .prettierrc.json | 1 |
| CLAUDE.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 337 |
| .md | 111 |
| .json | 54 |
| .js | 20 |
| .mjs | 18 |
| .yml | 10 |
| [no-ext] | 9 |
| .yaml | 3 |
| .sh | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
