# activeloopai/hivemind

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/activeloopai/hivemind |
| local path | sources/activeloopai__hivemind |
| HEAD | 94b66dd |
| stars/forks | 1270 / 75 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T22:34:33Z |
| trendScore / priorityScore | 152 / 439 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | library/README.md, README.md, harnesses/openclaw/README.md |
| Coding agent / software automation | 500 | README.md, harnesses/openclaw/README.md, package.json |
| Developer tools / DX | 437 | README.md, harnesses/openclaw/README.md, package.json |
| MCP / agent interoperability | 165 | README.md, package.json, docs/ARCHITECTURE.md |
| Security / supply chain | 131 | README.md, harnesses/openclaw/README.md, library/knowledge/private/README.md |
| RAG / retrieval / knowledge | 130 | README.md, library/knowledge/public/README.md, docs/EMBEDDINGS.md |
| Data / ML platform | 69 | README.md, .github/workflows/publish-smoke-test.yaml, docs/CAPTURE_TASKS.md |
| Cloud native / infrastructure | 16 | README.md, harnesses/openclaw/README.md, tests/claude-code/embeddings-nomic.test.ts |
| Frontend / app framework | 14 | library/knowledge/private/README.md, library/knowledge/private/frontend/cursor-extension-architecture.md, library/qa/security/2026-06-12-security-audit-cursor-extension.md |
| Database / data infrastructure | 9 | tests/claude-code/mcp-server.test.ts, library/knowledge/private/data/memory-virtual-filesystem.md, library/knowledge/private/frontend/cursor-extension-architecture.md |
| Observability / evaluation | 9 | README.md, tests/claude-code/notifications-coverage.test.ts, library/knowledge/private/security/credential-storage.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 580 |
| manifests | 23 |
| docs | 87 |
| tests | 242 |
| ci/ops | 5 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | or | Benchmarks / Quick start / or / Alternative install paths / Uninstall / How it works / Features / 🔍 Natural search / 🔒 Privacy controls / ⚠️ Data collection notice | <h1 align="center" <br <a href="https //github.com/activeloopai/hivemind" <img src="https //raw.githubusercontent.com/activeloopai/hivemind/main/docs/public/hivemind logo.svg" alt="Hivemind" width="120" </a <br Hivemind <br </h1 <h4 align="center" One brain for all your agents</h4 <p align="center" <a href="https //www.npmjs.com/package/@deeplake/hivemind" <img src="https //img.shields.io/npm/v/@deeplake/hivemind?color=blue&label=npm&style=for the badge" alt="npm" </a <a href="https //github.com/activeloopai/hivemind/stargazers" <img src="https //img.shields.io/github/stars/activeloopai/hivemind?style=for the badge&logo=github" alt="GitHub stars" </a <a href="LICENSE" <img src="https //img.s |


## Key Files

### Manifests

- library/README.md
- README.md
- harnesses/openclaw/README.md
- library/issues/backlog/README.md
- library/issues/completed/README.md
- library/issues/in-work/README.md
- library/issues/README.md
- library/knowledge/private/README.md
- library/knowledge/public/README.md
- library/knowledge/README.md
- library/notes/README.md
- library/requirements/backlog/README.md
- library/requirements/completed/README.md
- library/requirements/in-work/README.md
- library/requirements/README.md
- library/requirements/reports/README.md
- package.json
- tsconfig.json
- harnesses/claude-code/tsconfig.json
- harnesses/codex/package.json


### Spec / Docs / Prompt Artifacts

- docs/ARCHITECTURE.md


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| tests | 242 |
| src | 214 |
| library | 62 |
| harnesses | 29 |
| .github | 6 |
| docs | 6 |
| scripts | 6 |
| .claude-plugin | 2 |
| .coderabbit.yaml | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .husky | 1 |
| .jscpd.json | 1 |
| embeddings | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 458 |
| .md | 86 |
| .json | 14 |
| .mjs | 6 |
| .yaml | 6 |
| [no-ext] | 5 |
| .sh | 2 |
| .js | 1 |
| .mts | 1 |
| .svg | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
