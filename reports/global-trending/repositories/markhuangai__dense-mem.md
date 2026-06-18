# markhuangai/dense-mem

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/markhuangai/dense-mem |
| local path | sources/markhuangai__dense-mem |
| HEAD | b94f9ec |
| stars/forks | 27 / 4 |
| language | Go |
| license |  |
| pushedAt | 2026-06-18T00:10:16Z |
| trendScore / priorityScore | 134 / 391 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval / knowledge | 213 | README.md, examples/docker-compose.base.yml, examples/docker-compose.demo.yml |
| MCP / agent interoperability | 204 | packages/mcp-proxy/README.md, README.md, tests/uat/README.md |
| Observability / evaluation | 172 | README.md, tests/uat/README.md, go.mod |
| Cloud native / infrastructure | 171 | packages/mcp-proxy/README.md, README.md, tests/uat/README.md |
| Database / data infrastructure | 169 | README.md, Dockerfile, go.mod |
| Security / supply chain | 43 | README.md, go.mod, .git-vibe/prompts/review-matrix/system.md |
| Coding agent / software automation | 31 | packages/mcp-proxy/README.md, go.mod, internal/http/dto/fragment_test.go |
| Developer tools / DX | 27 | README.md, tests/uat/README.md, packages/mcp-proxy/package.json |
| Frontend / app framework | 20 | web/package.json, web/tsconfig.json, web/vite.config.ts |
| Data / ML platform | 15 | README.md, tests/uat/README.md, tests/uat/package.json |
| AI agent / orchestration | 6 | README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Go |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 657 |
| manifests | 18 |
| docs | 21 |
| tests | 283 |
| ci/ops | 21 |
| spec artifacts | 6 |
| agent instruction files | 6 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Fill in POSTGRES_PASSWORD, NEO4J_PASSWORD, CONTROL_PORTAL_TOKEN, and AI_API_KEY. | Project Intro / Try the Hosted Demo / Why Dense-Mem? / 60-Second Quickstart / Fill in POSTGRES_PASSWORD, NEO4J_PASSWORD, CONTROL_PORTAL_TOKEN, and AI_API_KEY. / Telemetry Overlay / Compare / Documentation / Responsibility Boundary / Memory Workflow | <h1 align="center" Dense Mem</h1 <p align="center" <a href="README.md" English</a · <a href="README.zh CN.md" 简体中文</a </p <p align="center" <img src="https //img.shields.io/badge/Dense Mem trustworthy AI memory 0f766e?style=for the badge&logo=github&logoColor=white" alt="Dense Mem" / </p <p align="center" <strong Self hosted memory for AI agents that preserves evidence, detects conflicts, and never silently rewrites facts.</strong </p <p align="center" <a href="https //demo dense mem.markhuang.ai" <img src="https //img.shields.io/badge/Try%20Dense Mem%20live Open%20hosted%20demo 0f766e?style=for the badge" alt="Try Dense Mem live" / </a </p <p align="center" <strong Create a temporary isolat |


## Key Files

### Manifests

- packages/mcp-proxy/README.md
- README.md
- tests/uat/README.md
- packages/mcp-proxy/package.json
- .lint/package.json
- Dockerfile
- go.mod
- tests/uat/package.json
- web/package.json
- web/tsconfig.json
- web/vite.config.ts
- examples/docker-compose.base.yml
- examples/docker-compose.demo.telemetry.yml
- examples/docker-compose.demo.yml
- examples/docker-compose.expert.yml
- examples/docker-compose.telemetry.yml
- go.sum
- web/tsconfig.node.json


### Spec / Docs / Prompt Artifacts

- .git-vibe/prompts/review-matrix/system.md
- .claude/rules/database.md
- .claude/rules/security.md
- .claude/rules/api.md
- .claude/rules/architecture.md
- .claude/rules/profile-isolation.md


### Agent Instruction Files

- .git-vibe/prompts/review-matrix/system.md
- .claude/rules/database.md
- .claude/rules/security.md
- .claude/rules/api.md
- .claude/rules/architecture.md
- .claude/rules/profile-isolation.md


## Top Directories

| dir | count |
| --- | --- |
| internal | 459 |
| web | 45 |
| tests | 44 |
| migrations | 23 |
| cmd | 20 |
| .github | 15 |
| .git-vibe | 11 |
| packages | 10 |
| examples | 7 |
| .claude | 5 |
| .lint | 2 |
| scripts | 2 |
| .coderabbit.yaml | 1 |
| .dockerignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 499 |
| .ts | 35 |
| .sql | 23 |
| .yml | 21 |
| .md | 20 |
| .tsx | 20 |
| .json | 11 |
| .js | 7 |
| [no-ext] | 6 |
| .css | 4 |
| .sh | 4 |
| .html | 2 |
| .demo | 1 |
| .example | 1 |
| .mod | 1 |
| .sum | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
