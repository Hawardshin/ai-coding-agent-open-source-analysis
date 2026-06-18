# reshaprio/reshapr

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/reshaprio/reshapr |
| local path | sources/reshaprio__reshapr |
| HEAD | 3166e1c |
| stars/forks | 106 / 19 |
| language | Java |
| license |  |
| pushedAt | 2026-06-17T20:02:34Z |
| trendScore / priorityScore | 140 / 371 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 500 | README.md, cli/package.json, control-plane/pom.xml |
| Security / supply chain | 438 | control-plane/pom.xml, install/docker-compose.yml, pom.xml |
| MCP / agent interoperability | 275 | README.md, cli/package.json, dev/github-user-mcp-app/package.json |
| Developer tools / DX | 137 | cli/README.md, README.md, cli/package.json |
| Frontend / app framework | 53 | dev/github-user-mcp-app/package.json, dev/github-user-mcp-app/vite.config.ts, web-ui/Dockerfile |
| Coding agent / software automation | 19 | proxy/src/test/resources/io/reshapr/proxy/mcp/trade-api-3.0.1-openapi.yaml |
| Database / data infrastructure | 15 | control-plane/pom.xml, install/docker-compose.yml, web-ui/Dockerfile |
| Observability / evaluation | 15 | proxy/pom.xml, cli/package-lock.json, proxy/src/main/java/io/reshapr/proxy/mcp/McpController.java |
| AI agent / orchestration | 4 | README.md, api/pom.xml, control-plane/pom.xml |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Java/Kotlin |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 611 |
| manifests | 19 |
| docs | 5 |
| tests | 38 |
| ci/ops | 16 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Welcome to reShapr 🚀 | Welcome to reShapr 🚀 / ✨ What is reShapr? / 🧠 Solving the "Context Window" Problem / 🌟 Key Features / Quick Start / Install the CLI / Choose your platform / Run the platform locally / Contributing / Support the project! 🌟 | ! GitHub Workflow Status https //img.shields.io/github/actions/workflow/status/reshaprio/reshapr/build verify.yml?logo=github&style=for the badge https //github.com/reshaprio/reshapr/actions ! Container https //img.shields.io/badge/dynamic/json?color=blueviolet&logo=docker&style=for the badge&label=Quay.io&query=tags 1 .name&url=https //quay.io/api/v1/repository/reshapr/reshapr ctrl/tag/?limit=10&page=1&onlyActiveTags=true https //quay.io/repository/reshapr/reshapr ctrl?tab=tags ! Version https //img.shields.io/maven central/v/io.reshapr/reshapr parent?color=blue&logo=openjdk&style=for the badge https //central.sonatype.com/search?q=io.reshapr ! NPM https //img.shields.io/npm/v/@reshapr/resh |


## Key Files

### Manifests

- cli/README.md
- dev/github-user-mcp-app/README.md
- README.md
- cli/package.json
- cli/tsconfig.json
- dev/github-user-mcp-app/package.json
- dev/github-user-mcp-app/tsconfig.json
- dev/github-user-mcp-app/vite.config.ts
- api/pom.xml
- commons/pom.xml
- control-plane/pom.xml
- install/docker-compose.yml
- pom.xml
- proxy/pom.xml
- web-ui/Dockerfile
- web-ui/package.json
- web-ui/tsconfig.json
- web-ui/vite.config.ts
- dev/github-user-mcp-app/tsconfig.server.json


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| control-plane | 189 |
| web-ui | 185 |
| proxy | 112 |
| cli | 38 |
| commons | 25 |
| dev | 25 |
| install | 10 |
| api | 8 |
| .github | 5 |
| .mvn | 3 |
| .gitignore | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CODEOWNERS | 1 |
| CONTRIBUTING.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .java | 244 |
| .svelte | 114 |
| .ts | 97 |
| .yaml | 33 |
| .json | 16 |
| [no-ext] | 15 |
| .html | 12 |
| .properties | 10 |
| .yml | 10 |
| .sh | 8 |
| .sql | 8 |
| .jar | 5 |
| .md | 5 |
| .proto | 5 |
| .xml | 5 |
| .cmd | 4 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
