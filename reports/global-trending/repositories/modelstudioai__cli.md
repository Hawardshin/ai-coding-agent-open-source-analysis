# modelstudioai/cli

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/modelstudioai/cli |
| local path | sources/modelstudioai__cli |
| HEAD | 0cd0daa |
| stars/forks | 243 / 14 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T13:13:34Z |
| trendScore / priorityScore | 144 / 387 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Developer tools / DX | 484 | packages/cli/README.md, skills/bailian-cli/README.md, AGENTS.md |
| AI agent / orchestration | 125 | packages/cli/README.md, skills/bailian-cli/README.md, AGENTS.md |
| Data / ML platform | 123 | packages/cli/README.md, README.md, docs/agents/branch-merge-review.md |
| MCP / agent interoperability | 116 | packages/cli/README.md, README.md, docs/agents/stress-batch-tests.md |
| Security / supply chain | 72 | packages/cli/README.md, AGENTS.md, README.md |
| RAG / retrieval / knowledge | 62 | packages/cli/README.md, skills/bailian-cli/README.md, README.md |
| Frontend / app framework | 50 | packages/cli/README.md, AGENTS.md, README.md |
| Cloud native / infrastructure | 29 | AGENTS.md, docs/agents/auth-change.md, docs/agents/branch-merge-review.md |
| Coding agent / software automation | 1 | docs/agents/cli-e2e-tests.md |
| Observability / evaluation | 1 | docs/plans/finetune-deploy-mvp.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, devtools, frontend, frontendStack, infra, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 298 |
| manifests | 14 |
| docs | 53 |
| tests | 61 |
| ci/ops | 2 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Authenticate, recommended | Features / Showcase: One-Sentence Cinematic Video / The single prompt / How it works / Installation / Quick Start / Authenticate, recommended / Or authenticate with an API key / Chat with Qwen / Multimodal chat (text + image + audio + video) | <div align="center" <img src="https //img.alicdn.com/imgextra/i1/O1CN01kGgO3z1N30OINgUoG !!6000000001513 2 tps 1915 821.png" alt="Aliyun Model Studio CLI" / The official command line interface for Aliyun Model Studio DashScope AI Platform ! npm version https //img.shields.io/npm/v/bailian cli?color=0969da&label=npm https //www.npmjs.com/package/bailian cli ! Node.js https //img.shields.io/badge/node %3E%3D22.12 brightgreen https //nodejs.org ! TypeScript https //img.shields.io/badge/TypeScript strict 3178c6 https //www.typescriptlang.org ! License https //img.shields.io/badge/license Apache%202.0 blue LICENSE Aliyun Model Studio CLI Site https //bailian.console.aliyun.com/cli?source channel= |


## Key Files

### Manifests

- packages/cli/README.md
- skills/bailian-cli/README.md
- AGENTS.md
- README.md
- packages/core/README.md
- packages/cli/package.json
- packages/cli/tsconfig.json
- packages/cli/vite.config.ts
- package.json
- tsconfig.json
- vite.config.ts
- packages/core/package.json
- packages/core/tsconfig.json
- packages/core/vite.config.ts


### Spec / Docs / Prompt Artifacts

- AGENTS.md


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| packages | 226 |
| skills | 26 |
| docs | 15 |
| tools | 12 |
| .github | 3 |
| .gitignore | 1 |
| .vite-hooks | 1 |
| AGENTS.md | 1 |
| CHANGELOG.md | 1 |
| CHANGELOG.zh.md | 1 |
| CONTRIBUTING.md | 1 |
| CONTRIBUTING.zh.md | 1 |
| INSTALL.md | 1 |
| LICENSE | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 187 |
| .md | 53 |
| .mjs | 36 |
| .json | 7 |
| [no-ext] | 7 |
| .js | 3 |
| .yml | 3 |
| .yaml | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
