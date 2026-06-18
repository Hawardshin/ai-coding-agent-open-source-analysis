# inkeep/agents

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/inkeep/agents |
| local path | sources/inkeep__agents |
| HEAD | a15fdca |
| stars/forks | 1205 / 144 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T23:11:43Z |
| trendScore / priorityScore | 153 / 482 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | agents-ui-demo/README.md, agents-cli/README.md, agents-docs/README.md |
| MCP / agent interoperability | 404 | agents-manage-ui/README.md, create-agents-template/README.md, agents-docs/skills-collections/README.md |
| Security / supply chain | 286 | packages/agents-mcp/README.md, packages/agents-sdk/README.md, packages/agents-work-apps/src/slack/README.md |
| Observability / evaluation | 277 | agents-cookbook/evals/langfuse-dataset-example/README.md, packages/agents-sdk/README.md, packages/agents-work-apps/src/slack/README.md |
| Developer tools / DX | 275 | agents-cli/README.md, agents-manage-ui/README.md, create-agents-template/README.md |
| Cloud native / infrastructure | 181 | create-agents-template/README.md, packages/agents-sdk/README.md, packages/create-agents/README.md |
| Database / data infrastructure | 143 | create-agents-template/README.md, packages/agents-core/README.md, packages/agents-work-apps/src/slack/README.md |
| Data / ML platform | 132 | agents-cookbook/evals/langfuse-dataset-example/README.md, AGENTS.md, agents-cookbook/evals/langfuse-dataset-example/package.json |
| Frontend / app framework | 126 | agents-ui-demo/README.md, agents-docs/README.md, agents-manage-ui/README.md |
| Coding agent / software automation | 29 | agents-docs/skills-collections/README.md, packages/agents-mcp/README.md, packages/create-agents/README.md |
| RAG / retrieval / knowledge | 5 | README.md, agents-ui-demo/SUPPLEMENTAL_TERMS.md, agents-api/src/__tests__/manage/data/conversations.test.ts |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 5005 |
| manifests | 40 |
| docs | 301 |
| tests | 800 |
| ci/ops | 27 |
| spec artifacts | 7 |
| agent instruction files | 6 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Inkeep Agents | Inkeep Agents / Two ways to build / No-Code Visual Builder / TypeScript Agents SDK / Use Cases / Platform Overview / Architecture / License and Community | Inkeep Agents Build AI Agents with a No Code Visual Builder or TypeScript SDK . Agents can be edited in either with full 2 way sync , so technical and non technical teams can create and manage Agents in one platform. Get started with the docs https //docs.inkeep.com or 1 minute quick start https //docs.inkeep.com/get started/quick start . Two ways to build No Code Visual Builder A drag and drop canvas so any team can create and own the Agents they care about. <img src="agents docs/public/gifs/drag n drop.gif" alt="Visual Builder Demo" width="100%" style="border radius 10px" / TypeScript Agents SDK A code first framework so engineering teams can build with typesafety, intellisense, CI/CD, and |


## Key Files

### Manifests

- agents-ui-demo/README.md
- agents-cli/README.md
- agents-cookbook/evals/langfuse-dataset-example/README.md
- agents-docs/README.md
- agents-manage-ui/README.md
- create-agents-template/README.md
- agents-cookbook/template-projects/README.md
- agents-docs/skills-collections/README.md
- agents-manage-ui/src/lib/README.md
- packages/agents-core/README.md
- packages/agents-mcp/README.md
- packages/agents-sdk/README.md
- packages/agents-work-apps/src/slack/README.md
- packages/create-agents/README.md
- AGENTS.md
- .ai-dev/README.md
- .changeset/README.md
- README.md
- packages/ai-sdk-provider/README.md
- scripts/workflows/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- agents-api/src/domains/run/agents/prompts/data-generation.xml
- agents-api/templates/v1/prompt/system-prompt.xml
- agents-api/templates/v1/prompt/tool.xml
- .cursor/worktrees.json
- .github/workflows/claude.yml
- agents-docs/content/api-reference/(openapi)/agents.mdx


### Agent Instruction Files

- AGENTS.md
- agents-api/src/domains/run/agents/prompts/data-generation.xml
- agents-api/templates/v1/prompt/system-prompt.xml
- agents-api/templates/v1/prompt/tool.xml
- .cursor/worktrees.json
- .github/workflows/claude.yml


## Top Directories

| dir | count |
| --- | --- |
| packages | 2100 |
| agents-manage-ui | 1390 |
| agents-api | 530 |
| agents-docs | 367 |
| agents-cli | 357 |
| agents-cookbook | 75 |
| create-agents-template | 39 |
| .github | 31 |
| scripts | 31 |
| test-agents | 20 |
| agents-ui-demo | 15 |
| .ai-dev | 7 |
| patches | 4 |
| .changeset | 3 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 3092 |
| .tsx | 635 |
| .svg | 452 |
| .mdx | 236 |
| .json | 177 |
| .txt | 129 |
| .sql | 67 |
| .md | 54 |
| .sh | 27 |
| .yml | 23 |
| [no-ext] | 18 |
| .mjs | 17 |
| .diff | 15 |
| .mp4 | 9 |
| .yaml | 9 |
| .css | 6 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
