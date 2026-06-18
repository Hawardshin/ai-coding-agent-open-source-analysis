# MarcoPorcellato/matryca-plumber

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/MarcoPorcellato/matryca-plumber |
| local path | sources/MarcoPorcellato__matryca-plumber |
| HEAD | 5f2d75a |
| stars/forks | 64 / 4 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T08:22:35Z |
| trendScore / priorityScore | 140 / 436 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | docs/openspec/README.md, README.md, docs/openspec/agent-ax-robustness.md |
| MCP / agent interoperability | 322 | docs/openspec/README.md, README.md, docs/openspec/agent-ax-robustness.md |
| Developer tools / DX | 248 | docs/openspec/README.md, README.md, docs/openspec/agent-ax-robustness.md |
| Security / supply chain | 167 | docs/openspec/README.md, README.md, docs/openspec/agent-ax-robustness.md |
| Frontend / app framework | 148 | frontend/README.md, README.md, frontend/package.json |
| RAG / retrieval / knowledge | 112 | docs/openspec/README.md, README.md, docs/openspec/agent-dx.md |
| Database / data infrastructure | 76 | docs/openspec/README.md, README.md, docs/openspec/agent-dx.md |
| Cloud native / infrastructure | 69 | docs/openspec/README.md, README.md, docs/openspec/agent-ax-robustness.md |
| Local LLM / inference | 50 | README.md, docs/openspec/agent-ax-robustness.md, docs/openspec/llm-performance.md |
| Coding agent / software automation | 44 | README.md, docs/openspec/agent-onboarding.md, docs/resilience-llm-json-triz.md |
| Data / ML platform | 18 | README.md, docs/openspec/agent-dx.md, docs/openspec/llm-performance.md |
| Observability / evaluation | 2 | docs/resilience-llm-json-triz.md, src/agent/page_prompt_session.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 364 |
| manifests | 10 |
| docs | 58 |
| tests | 97 |
| ci/ops | 4 |
| spec artifacts | 12 |
| agent instruction files | 10 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Matryca Plumber | Matryca Plumber / What it does for you / How it compares / ⚠️ Important: Clone Your Graph First / 🚀 Quick Install & Getting Started / 1. Try it instantly (Zero-install) / 2. Global Installation (Recommended) / 3. Open the control room (recommended first step) / same as: matryca-plumber status / Plumber commands — UI vs daemon | Matryca Plumber ! CI https //github.com/MarcoPorcellato/matryca plumber/actions/workflows/ci.yml/badge.svg https //github.com/MarcoPorcellato/matryca plumber/actions/workflows/ci.yml ! PyPI https //img.shields.io/pypi/v/matryca plumber.svg https //pypi.org/project/matryca plumber/ ! PyPI Downloads https //img.shields.io/pypi/dm/matryca plumber.svg https //pypi.org/project/matryca plumber/ ! GitHub release https //img.shields.io/github/v/release/MarcoPorcellato/matryca plumber?display name=tag https //github.com/MarcoPorcellato/matryca plumber/releases ! Python https //img.shields.io/badge/python %3E%3D3.12 blue?logo=python&logoColor=white https //github.com/MarcoPorcellato/matryca plumber/bl |


## Key Files

### Manifests

- docs/openspec/README.md
- frontend/README.md
- README.md
- frontend/package.json
- frontend/tsconfig.json
- frontend/vite.config.ts
- Makefile
- pyproject.toml
- frontend/tsconfig.app.json
- frontend/tsconfig.node.json


### Spec / Docs / Prompt Artifacts

- .cursor/rules/00-karpathy-agent-behavior.mdc
- .cursor/rules/07-env-example.mdc
- docs/ARCHITECTURE.md
- .cursor/rules/01-core-paradigm.mdc
- .cursor/rules/02-python-standards.mdc
- .cursor/rules/03-logseq-api.mdc
- .cursor/rules/04-spatial-parser.mdc
- .cursor/rules/05-release-preparation.mdc
- .cursor/rules/06-auto-changelog.mdc
- .cursor/rules/08-github-workflow-standards.mdc
- .cursor/rules/09-github-identity-marco-porcellato.mdc
- ROADMAP.md


### Agent Instruction Files

- .cursor/rules/00-karpathy-agent-behavior.mdc
- .cursor/rules/07-env-example.mdc
- .cursor/rules/01-core-paradigm.mdc
- .cursor/rules/02-python-standards.mdc
- .cursor/rules/03-logseq-api.mdc
- .cursor/rules/04-spatial-parser.mdc
- .cursor/rules/05-release-preparation.mdc
- .cursor/rules/06-auto-changelog.mdc
- .cursor/rules/08-github-workflow-standards.mdc
- .cursor/rules/09-github-identity-marco-porcellato.mdc


## Top Directories

| dir | count |
| --- | --- |
| src | 126 |
| tests | 96 |
| frontend | 42 |
| docs | 41 |
| scripts | 15 |
| .github | 11 |
| .cursor | 10 |
| .cursorignore | 1 |
| .env.example | 1 |
| .gitignore | 1 |
| .python-version | 1 |
| .repomixignore | 1 |
| .well-known | 1 |
| CHANGELOG.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 228 |
| .md | 58 |
| .tsx | 13 |
| .ts | 12 |
| .yml | 12 |
| .mdc | 10 |
| [no-ext] | 8 |
| .json | 7 |
| .svg | 4 |
| .js | 3 |
| .sh | 2 |
| .txt | 2 |
| .css | 1 |
| .example | 1 |
| .html | 1 |
| .in | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
