# 403errors/repomind

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/403errors/repomind |
| local path | sources/403errors__repomind |
| HEAD | 74da759 |
| stars/forks | 257 / 39 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-15T08:49:00Z |
| trendScore / priorityScore | 143 / 359 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Security / supply chain | 321 | README.md, package.json, src/components/chat/security-scan-message.test.ts |
| Frontend / app framework | 120 | README.md, package.json, tsconfig.json |
| Data / ML platform | 73 | README.md, package.json, src/lib/__tests__/prompt-builder.test.ts |
| Database / data infrastructure | 73 | package.json, src/lib/__tests__/security-scanner.test.ts, src/app/admin/index/IndexManagementClient.tsx |
| AI agent / orchestration | 27 | src/app/admin/stats/StatsDashboardClient.tsx, src/app/security-scanner/page.tsx, src/lib/prompt-builder.ts |
| Coding agent / software automation | 20 | README.md, src/app/admin/stats/StatsDashboardClient.tsx, src/components/chat/SecurityScanModal.tsx |
| Cloud native / infrastructure | 19 | src/lib/__tests__/prompt-builder.test.ts, src/app/HomeClient.tsx, src/lib/prompt-builder.ts |
| Observability / evaluation | 18 | package.json, src/lib/__tests__/security-benchmark.test.ts, src/lib/__tests__/security-scanner.test.ts |
| Developer tools / DX | 7 | README.md, CHANGELOG.md, public/manifest.json |
| RAG / retrieval / knowledge | 2 | README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 362 |
| manifests | 3 |
| docs | 3 |
| tests | 89 |
| ci/ops | 1 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | RepoMind | RepoMind / Why RepoMind / Product Highlights / Landing Experience / Repo Profile Intelligence / Core Capabilities / Agentic CAG Architecture / Architecture Flowcharts / 1) Query + Context Pipeline / 2) Caching + Retrieval Strategy | RepoMind <p align="center" <strong Stop reading code. Start talking to it.</strong </p <p align="center" <a href="https //github.com/403errors/repomind" <img src="https //img.shields.io/github/stars/403errors/repomind?style=social" alt="GitHub stars" / </a <a href="https //opensource.org/licenses/MIT" <img src="https //img.shields.io/badge/License MIT yellow.svg" alt="MIT License" / </a <a href="https //nextjs.org/" <img src="https //img.shields.io/badge/Next.js 16 black" alt="Next.js" / </a <a href="https //ai.google.dev/" <img src="https //img.shields.io/badge/Gemini 3 Flash Preview blue" alt="Gemini" / </a </p <p align="center" <a href="https //repomind.in" <strong Try RepoMind Live</stro |


## Key Files

### Manifests

- README.md
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| src | 308 |
| prisma | 16 |
| scripts | 11 |
| public | 3 |
| .github | 2 |
| .codex | 1 |
| .env.example | 1 |
| .gitignore | 1 |
| CHANGELOG.md | 1 |
| check-db.ts | 1 |
| clear-cache.mjs | 1 |
| eslint.config.mjs | 1 |
| IMPORTANT_INFO.md | 1 |
| LICENSE | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 178 |
| .tsx | 138 |
| .sql | 14 |
| .mjs | 10 |
| .json | 7 |
| .md | 3 |
| .toml | 2 |
| .yml | 2 |
| [no-ext] | 2 |
| .css | 1 |
| .example | 1 |
| .html | 1 |
| .js | 1 |
| .prisma | 1 |
| .py | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
