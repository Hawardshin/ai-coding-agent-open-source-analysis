# FlowiseAI/Flowise

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/FlowiseAI/Flowise |
| local path | sources/FlowiseAI__Flowise |
| HEAD | d071868 |
| stars/forks | 53689 / 24531 |
| language | TypeScript |
| license | NOASSERTION |
| pushedAt | 2026-06-16T11:05:50Z |
| trendScore / priorityScore | 195 / 518 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / app framework | 292 | packages/observe/examples/README.md, packages/agentflow/README.md, README.md |
| Cloud native / infrastructure | 199 | packages/agentflow/examples/README.md, packages/agentflow/README.md, docker/README.md |
| Security / supply chain | 149 | packages/agentflow/examples/README.md, packages/agentflow/README.md, packages/components/nodes/embeddings/AzureOpenAIEmbedding/README.md |
| Developer tools / DX | 148 | packages/observe/examples/README.md, packages/agentflow/README.md, packages/observe/README.md |
| AI agent / orchestration | 96 | packages/agentflow/examples/README.md, packages/agentflow/README.md, README.md |
| Observability / evaluation | 47 | packages/agentflow/README.md, packages/observe/README.md, metrics/otel/compose.yaml |
| Database / data infrastructure | 44 | packages/agentflow/examples/README.md, packages/components/nodes/vectorstores/Postgres/README.md, docker/worker/README.md |
| Coding agent / software automation | 24 | packages/agentflow/examples/src/App.tsx, packages/agentflow/examples/src/demos/CustomNodeExample.tsx, packages/agentflow/examples/src/demos/CustomUIExample.tsx |
| Data / ML platform | 11 | packages/agentflow/README.md, packages/agentflow/src/atoms/utils/xmlTagUtils.test.ts, packages/agentflow/src/core/primitives/customMention.test.ts |
| RAG / retrieval / knowledge | 10 | packages/agentflow/examples/README.md, packages/agentflow/README.md, packages/components/nodes/embeddings/AzureOpenAIEmbedding/README.md |
| MCP / agent interoperability | 6 | packages/components/package.json, packages/server/package.json |
| Local LLM / inference | 2 | packages/components/package.json |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2351 |
| manifests | 40 |
| docs | 39 |
| tests | 154 |
| ci/ops | 16 |
| spec artifacts | 10 |
| agent instruction files | 8 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | 📚 Table of Contents / ⚡Quick Start / 🐳 Docker / Docker Compose / Docker Image / 👨‍💻 Developers / Prerequisite / Setup / 🌱 Env Variables / 📖 Documentation | <! markdownlint disable MD030 <p align="center" <img src="https //github.com/FlowiseAI/Flowise/blob/main/images/flowise white.svg gh light mode only" <img src="https //github.com/FlowiseAI/Flowise/blob/main/images/flowise dark.svg gh dark mode only" </p <div align="center" ! Release Notes https //img.shields.io/github/release/FlowiseAI/Flowise https //github.com/FlowiseAI/Flowise/releases ! Discord https //img.shields.io/discord/1087698854775881778?label=Discord&logo=discord https //discord.gg/jbaHfsRVBW ! Twitter Follow https //img.shields.io/twitter/follow/FlowiseAI?style=social https //twitter.com/FlowiseAI ! GitHub star chart https //img.shields.io/github/stars/FlowiseAI/Flowise?style=so |


## Key Files

### Manifests

- packages/agentflow/examples/README.md
- packages/observe/examples/README.md
- packages/agentflow/README.md
- packages/components/nodes/embeddings/AzureOpenAIEmbedding/README.md
- packages/components/nodes/llms/Azure OpenAI/README.md
- packages/components/nodes/vectorstores/Postgres/README.md
- docker/README.md
- README.md
- docker/worker/README.md
- packages/api-documentation/README.md
- packages/components/nodes/chatmodels/AzureChatOpenAI/README.md
- packages/components/nodes/documentloaders/S3File/README.md
- packages/components/nodes/documentloaders/Unstructured/README.md
- packages/components/nodes/recordmanager/PostgresRecordManager/README.md
- packages/components/README.md
- packages/observe/README.md
- packages/server/README.md
- packages/ui/README.md
- packages/agentflow/examples/package.json
- packages/agentflow/examples/tsconfig.json


### Spec / Docs / Prompt Artifacts

- packages/components/nodes/prompts/ChatPromptTemplate/ChatPromptTemplate.ts
- packages/components/nodes/prompts/ChatPromptTemplate/prompt.svg
- packages/components/nodes/prompts/FewShotPromptTemplate/FewShotPromptTemplate.ts
- packages/components/nodes/prompts/FewShotPromptTemplate/prompt.svg
- packages/components/nodes/prompts/PromptLangfuse/prompt.svg
- packages/components/nodes/prompts/PromptLangfuse/PromptLangfuse.ts
- packages/components/nodes/prompts/PromptTemplate/prompt.svg
- packages/components/nodes/prompts/PromptTemplate/PromptTemplate.ts
- packages/agentflow/ARCHITECTURE.md
- packages/observe/ARCHITECTURE.md


### Agent Instruction Files

- packages/components/nodes/prompts/ChatPromptTemplate/ChatPromptTemplate.ts
- packages/components/nodes/prompts/ChatPromptTemplate/prompt.svg
- packages/components/nodes/prompts/FewShotPromptTemplate/FewShotPromptTemplate.ts
- packages/components/nodes/prompts/FewShotPromptTemplate/prompt.svg
- packages/components/nodes/prompts/PromptLangfuse/prompt.svg
- packages/components/nodes/prompts/PromptLangfuse/PromptLangfuse.ts
- packages/components/nodes/prompts/PromptTemplate/prompt.svg
- packages/components/nodes/prompts/PromptTemplate/PromptTemplate.ts


## Top Directories

| dir | count |
| --- | --- |
| packages | 2295 |
| docker | 12 |
| .github | 11 |
| i18n | 6 |
| metrics | 5 |
| .husky | 2 |
| images | 2 |
| .changeset | 1 |
| .dockerignore | 1 |
| .eslintrc.js | 1 |
| .gitignore | 1 |
| .npmrc | 1 |
| .nvmrc | 1 |
| .prettierignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 1312 |
| .jsx | 285 |
| .svg | 283 |
| .tsx | 155 |
| .js | 102 |
| .json | 90 |
| .md | 39 |
| [no-ext] | 20 |
| .yml | 19 |
| .html | 12 |
| .css | 11 |
| .hbs | 8 |
| .example | 6 |
| .yaml | 3 |
| .cmd | 2 |
| .scss | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
