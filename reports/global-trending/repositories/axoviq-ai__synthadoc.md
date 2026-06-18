# axoviq-ai/synthadoc

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/axoviq-ai/synthadoc |
| local path | sources/axoviq-ai__synthadoc |
| HEAD | 1d99102 |
| stars/forks | 465 / 42 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T16:26:35Z |
| trendScore / priorityScore | 165 / 439 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | synthadoc/demos/ai-research/AGENTS.md, synthadoc/demos/history-of-computing/AGENTS.md, README.md |
| Developer tools / DX | 500 | README.md, synthadoc/demos/ai-research/README.md, synthadoc/demos/history-of-computing/README.md |
| RAG / retrieval / knowledge | 71 | README.md, synthadoc/demos/history-of-computing/README.md, synthadoc/demos/ai-research/raw_sources/public-domain/llm-benchmarks-overview.txt |
| Observability / evaluation | 59 | README.md, synthadoc/demos/ai-research/README.md, pyproject.toml |
| Frontend / app framework | 55 | web-ui/README.md, web-ui/package.json, web-ui/vite.config.ts |
| MCP / agent interoperability | 49 | synthadoc/demos/history-of-computing/AGENTS.md, README.md, pyproject.toml |
| Data / ML platform | 41 | synthadoc/demos/ai-research/AGENTS.md, README.md, synthadoc/demos/ai-research/README.md |
| Coding agent / software automation | 33 | README.md, tests/test_coverage_boost.py, synthadoc/demos/ai-research/raw_sources/public-domain/llm-benchmarks-overview.txt |
| Cloud native / infrastructure | 15 | synthadoc/demos/ai-research/raw_sources/public-domain/llm-benchmarks-overview.txt, synthadoc/demos/ai-research/wiki/llm-benchmarks.md, tests/agents/test_hint_engine.py |
| Security / supply chain | 11 | README.md, synthadoc/agents/ingest_agent.py, CODE_OF_CONDUCT.md |
| Local LLM / inference | 9 | README.md, synthadoc/cli/_init.py, synthadoc/cli/serve.py |
| Database / data infrastructure | 6 | README.md, synthadoc/agents/query_agent.py, synthadoc/cli/jobs.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 337 |
| manifests | 15 |
| docs | 60 |
| tests | 100 |
| ci/ops | 1 |
| spec artifacts | 3 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Synthadoc | Synthadoc / Table of Contents / Who Is It For? / Inspiration and Vision / Problems Addressed / 1. RAG conflates contradictions; Synthadoc surfaces them / 2. Knowledge fragments; Synthadoc links it / 3. Orphan knowledge has no address; Synthadoc finds it / 4. LLM-compiled content can be overconfident; Synthadoc audits it / Claim-Level Provenance | Synthadoc ! CI https //github.com/axoviq ai/synthadoc/actions/workflows/ci.yml/badge.svg https //github.com/axoviq ai/synthadoc/actions/workflows/ci.yml ! Coverage https //img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Faxoviq ai%2Fsynthadoc%2Fbadges%2Fdocs%2Fbadges.json&query=%24.coverage&label=Coverage&suffix=%25&color=brightgreen https //github.com/axoviq ai/synthadoc/actions/workflows/ci.yml ! License https //img.shields.io/badge/License AGPL 3.0 blue.svg https //github.com/axoviq ai/synthadoc/blob/main/LICENSE ! Python https //img.shields.io/badge/Python 3.11%2B yellow.svg https //www.python.org/ ! Skills https //img.shields.io/badge/dynamic/json?url=http |


## Key Files

### Manifests

- synthadoc/demos/ai-research/AGENTS.md
- synthadoc/demos/history-of-computing/AGENTS.md
- hooks/README.md
- README.md
- synthadoc/demos/ai-research/README.md
- synthadoc/demos/history-of-computing/README.md
- web-ui/README.md
- obsidian-plugin/package.json
- obsidian-plugin/tsconfig.json
- pyproject.toml
- web-ui/package.json
- web-ui/tsconfig.json
- web-ui/vite.config.ts
- web-ui/tsconfig.app.json
- web-ui/tsconfig.node.json


### Spec / Docs / Prompt Artifacts

- synthadoc/demos/ai-research/AGENTS.md
- synthadoc/demos/history-of-computing/AGENTS.md
- docs/design.md


### Agent Instruction Files

- synthadoc/demos/ai-research/AGENTS.md
- synthadoc/demos/history-of-computing/AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| synthadoc | 175 |
| tests | 98 |
| web-ui | 34 |
| obsidian-plugin | 13 |
| docs | 3 |
| hooks | 2 |
| scripts | 2 |
| .gitattributes | 1 |
| .github | 1 |
| .gitignore | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |
| pyproject.toml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 196 |
| .md | 59 |
| .txt | 21 |
| .json | 13 |
| .ts | 13 |
| .tsx | 8 |
| .svg | 6 |
| [no-ext] | 5 |
| .css | 3 |
| .js | 3 |
| .html | 2 |
| .pptx | 2 |
| .xlsx | 2 |
| .mjs | 1 |
| .toml | 1 |
| .typed | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
