# vasu-devs/JustHireMe

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/vasu-devs/JustHireMe |
| local path | sources/vasu-devs__JustHireMe |
| HEAD | 5f67a69 |
| stars/forks | 2058 / 334 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T19:47:14Z |
| trendScore / priorityScore | 159 / 445 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / app framework | 356 | README.md, website/README.md, package.json |
| Database / data infrastructure | 144 | docs/legal/README.md, backend/README.md, README.md |
| AI agent / orchestration | 110 | README.md, backend/pyproject.toml, docs/MCP.md |
| RAG / retrieval / knowledge | 107 | README.md, .github/workflows/test-build.yml, docs/ARCHITECTURE.md |
| Security / supply chain | 83 | docs/legal/README.md, README.md, website/README.md |
| Coding agent / software automation | 66 | README.md, backend/tests/test_subscription_cli.py, .github/workflows/ci.yml |
| Developer tools / DX | 50 | README.md, package.json, docs/PRODUCTION_RELEASE_ROADMAP.md |
| Data / ML platform | 37 | README.md, backend/tests/test_embeddings.py, .github/workflows/release.yml |
| Cloud native / infrastructure | 30 | docs/legal/README.md, backend/pyproject.toml, backend/test_live_fire.py |
| Local LLM / inference | 21 | README.md, docs/windows-release.md, backend/tests/test_regression_llm_help.py |
| MCP / agent interoperability | 21 | README.md, docs/MCP.md, backend/mcp_server.py |
| Observability / evaluation | 19 | README.md, docs/ARCHITECTURE.md, docs/PRODUCTION_RELEASE_ROADMAP.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 434 |
| manifests | 12 |
| docs | 23 |
| tests | 83 |
| ci/ops | 3 |
| spec artifacts | 2 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Star History / The Short Version / Maintainer / Current Status / Visual Workflow / What It Does / Why This Exists / Product Principles / Architecture / Repository Map | <h1 align="center" JustHireMe</h1 <p align="center" <strong Local first AI job intelligence for scraping better roles, ranking fit, and generating tailored application materials.</strong </p <p align="center" <a href="LICENSE" <img alt="License AGPL 3.0" src="https //img.shields.io/badge/license AGPL 3.0 2ea44f?style=for the badge" </a <img alt="Status Stable v1" src="https //img.shields.io/badge/status stable v1 16a34a?style=for the badge" <img alt="Local First" src="https //img.shields.io/badge/local first yes 0ea5e9?style=for the badge" <img alt="Desktop Tauri" src="https //img.shields.io/badge/desktop Tauri 24c8db?style=for the badge" <img alt="Backend Python" src="https //img.shields.io |


## Key Files

### Manifests

- docs/legal/README.md
- backend/README.md
- README.md
- website/README.md
- backend/pyproject.toml
- package.json
- src-tauri/Cargo.toml
- tsconfig.json
- vite.config.ts
- website/package.json
- tsconfig.node.json
- backend/generation/generators/package.py


### Spec / Docs / Prompt Artifacts

- docs/ARCHITECTURE.md
- ROADMAP.md


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| backend | 258 |
| src | 61 |
| website | 19 |
| Designs | 16 |
| scripts | 15 |
| src-tauri | 14 |
| .github | 13 |
| docs | 10 |
| public | 2 |
| skills | 2 |
| .editorconfig | 1 |
| .env.example | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 247 |
| .tsx | 34 |
| .ts | 26 |
| .md | 23 |
| .jsx | 16 |
| .mjs | 14 |
| [no-ext] | 13 |
| .json | 12 |
| .yml | 11 |
| .js | 8 |
| .html | 6 |
| .sql | 4 |
| .svg | 4 |
| .rs | 3 |
| .css | 2 |
| .toml | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
