# danny-avila/LibreChat

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/danny-avila/LibreChat |
| local path | sources/danny-avila__LibreChat |
| HEAD | 6055ad0 |
| stars/forks | 39364 / 8077 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-18T00:27:56Z |
| trendScore / priorityScore | 202 / 528 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / app framework | 430 | packages/client/src/theme/README.md, README.md, client/package.json |
| AI agent / orchestration | 153 | README.md, api/app/clients/prompts/formatAgentMessages.spec.js, api/app/clients/prompts/formatMessages.spec.js |
| Database / data infrastructure | 143 | README.md, redis-config/README.md, packages/data-schemas/README.md |
| Security / supply chain | 143 | README.md, redis-config/README.md, client/vite.config.ts |
| Cloud native / infrastructure | 116 | README.md, helm/librechat-rag-api/readme.md, client/package.json |
| MCP / agent interoperability | 108 | README.md, client/package.json, api/package.json |
| Developer tools / DX | 73 | packages/client/src/theme/README.md, redis-config/README.md, client/package.json |
| Observability / evaluation | 20 | api/package.json, packages/api/package.json |
| Coding agent / software automation | 10 | api/app/clients/prompts/formatAgentMessages.spec.js, client/src/components/Prompts/editor/PromptEditor.tsx, client/src/components/Prompts/fields/PromptName.tsx |
| RAG / retrieval / knowledge | 6 | README.md, helm/librechat-rag-api/readme.md, docker-compose.yml |
| Local LLM / inference | 3 | README.md, api/package.json |
| Data / ML platform | 2 | api/package.json, packages/api/package.json |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 3324 |
| manifests | 40 |
| docs | 19 |
| tests | 804 |
| ci/ops | 68 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | ✨ Features | ✨ Features / 🪶 All-In-One AI Conversations with LibreChat / 🌐 Resources / 📝 Changelog / ⭐ Star History / ✨ Contributions / 💖 This project exists in its current state thanks to all the people who contribute / 🎉 Special Thanks | <p align="center" <a href="https //librechat.ai" <img src="client/public/assets/logo.svg" height="256" </a <h1 align="center" <a href="https //librechat.ai" LibreChat</a </h1 </p <p align="center" <strong English</strong · <a href="README.zh.md" 中文</a </p <p align="center" <a href="https //discord.librechat.ai" <img src="https //img.shields.io/discord/1086345563026489514?label=&logo=discord&style=for the badge&logoWidth=20&logoColor=white&labelColor=000000&color=blueviolet" </a <a href="https //www.youtube.com/@LibreChat" <img src="https //img.shields.io/badge/YOUTUBE red.svg?style=for the badge&logo=youtube&logoColor=white&labelColor=000000&logoWidth=20" </a <a href="https //docs.librechat. |


## Key Files

### Manifests

- client/src/locales/README.md
- packages/client/src/theme/README.md
- AGENTS.md
- e2e/README.md
- README.md
- redis-config/README.md
- skill/README.md
- config/translations/README.md
- packages/data-schemas/README.md
- client/package.json
- client/tsconfig.json
- client/vite.config.ts
- packages/client/package.json
- packages/client/tsconfig.json
- .devcontainer/docker-compose.yml
- .devcontainer/Dockerfile
- api/package.json
- docker-compose.yml
- Dockerfile
- package.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- api/app/clients/prompts/formatAgentMessages.spec.js
- api/app/clients/prompts/formatGoogleInputs.spec.js
- api/app/clients/prompts/formatMessages.spec.js
- api/app/clients/specs/BaseClient.test.js
- api/app/clients/specs/FakeClient.js
- api/app/clients/tools/structured/specs/DALLE3-proxy.spec.js
- api/app/clients/tools/structured/specs/DALLE3.spec.js
- api/app/clients/tools/structured/specs/GeminiImageGen-proxy.spec.js
- api/app/clients/tools/structured/specs/GoogleSearch.spec.js
- api/app/clients/tools/structured/specs/imageTools-agent.spec.js
- api/app/clients/tools/structured/specs/openWeather.integration.test.js
- api/app/clients/tools/structured/specs/openweather.test.js
- api/app/clients/tools/structured/specs/TavilySearchResults.spec.js
- client/src/components/Prompts/utils/specialVariables.ts
- e2e/specs/mock/agents.helpers.ts
- e2e/specs/mock/agents.spec.ts
- e2e/specs/mock/mcp-ephemeral.spec.ts
- e2e/specs/mock/mcp.spec.ts
- e2e/specs/mock/prompts.spec.ts


### Agent Instruction Files

- AGENTS.md
- api/app/clients/prompts/formatAgentMessages.spec.js
- api/app/clients/prompts/formatGoogleInputs.spec.js
- api/app/clients/prompts/formatMessages.spec.js
- client/src/components/Prompts/utils/specialVariables.ts
- packages/api/src/prompts/format.spec.ts
- packages/api/src/prompts/schemas.spec.ts
- api/app/clients/prompts/artifacts.js
- api/app/clients/prompts/createContextHandlers.js
- api/app/clients/prompts/createVisionPrompt.js
- api/app/clients/prompts/formatGoogleInputs.js
- api/app/clients/prompts/formatMessages.js
- api/app/clients/prompts/index.js
- api/app/clients/prompts/shadcn-docs/components.js
- api/app/clients/prompts/shadcn-docs/generate.js


## Top Directories

| dir | count |
| --- | --- |
| client | 1384 |
| packages | 1201 |
| api | 511 |
| e2e | 64 |
| .github | 42 |
| config | 42 |
| helm | 30 |
| redis-config | 11 |
| .do | 5 |
| utils | 4 |
| .devcontainer | 3 |
| .husky | 2 |
| .dockerignore | 1 |
| .env.example | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 1500 |
| .tsx | 959 |
| .js | 543 |
| .json | 110 |
| .yml | 42 |
| .svg | 25 |
| .yaml | 25 |
| .md | 19 |
| [no-ext] | 17 |
| .sh | 12 |
| .cjs | 9 |
| .mjs | 9 |
| .woff2 | 9 |
| .conf | 6 |
| .css | 6 |
| .handlebars | 4 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
