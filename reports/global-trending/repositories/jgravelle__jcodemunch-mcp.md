# jgravelle/jcodemunch-mcp

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/jgravelle/jcodemunch-mcp |
| local path | sources/jgravelle__jcodemunch-mcp |
| HEAD | 64027a4 |
| stars/forks | 1924 / 295 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T19:43:52Z |
| trendScore / priorityScore | 149 / 462 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 458 | examples/otel-collector/README.md, benchmarks/README.md, cli/README.md |
| RAG / retrieval / knowledge | 449 | benchmarks/README.md, AGENTS.md, README.md |
| AI agent / orchestration | 240 | benchmarks/README.md, cli/README.md, AGENTS.md |
| Coding agent / software automation | 221 | cli/README.md, AGENTS.md, README.md |
| Developer tools / DX | 133 | cli/README.md, README.md, speedreview/README.md |
| Security / supply chain | 101 | README.md, speedreview/README.md, tests/test_security.py |
| Observability / evaluation | 85 | benchmarks/README.md, benchmarks/token_baselines/README.md, README.md |
| Data / ML platform | 72 | examples/otel-collector/README.md, benchmarks/README.md, cli/README.md |
| Frontend / app framework | 53 | README.md, benchmarks/ab-test-dead-code-2026-03-18.md, benchmarks/ab-test-naming-audit-2026-03-18.md |
| Database / data infrastructure | 43 | AGENTS.md, README.md, tests/test_audit_agent_config.py |
| Cloud native / infrastructure | 24 | cli/README.md, README.md, docker-compose.yml |
| Local LLM / inference | 2 | README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go, Java/Kotlin, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 594 |
| manifests | 15 |
| docs | 41 |
| tests | 260 |
| ci/ops | 6 |
| spec artifacts | 4 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | any tool call accepts format= | FREE FOR PERSONAL USE / Cut code-reading token usage by **95% or more** / Documentation / Compact output — the second token axis (MUNCH) / any tool call accepts format= / auto  — emit compact if savings ≥ 15%, otherwise JSON / compact — always compact / json    — never compact (back-compat passthrough) / jCodeMunch MCP / Structured code retrieval for serious AI agents | One click installs ! Install in VS Code https //img.shields.io/badge/VS Code Install jCodeMunch 007ACC?style=for the badge&logo=visualstudiocode&logoColor=white vscode mcp/install?%7B%22name%22%3A%20%22jcodemunch%22%2C%20%22command%22%3A%20%22uvx%22%2C%20%22args%22%3A%20%5B%22jcodemunch mcp%22%5D%7D ! Install in VS Code Insiders https //img.shields.io/badge/VS Code Insiders Install 24bfa5?style=for the badge&logo=visualstudiocode&logoColor=white vscode insiders mcp/install?%7B%22name%22%3A%20%22jcodemunch%22%2C%20%22command%22%3A%20%22uvx%22%2C%20%22args%22%3A%20%5B%22jcodemunch mcp%22%5D%7D ! Install in Cursor https //img.shields.io/badge/Cursor Install jCodeMunch 122122?style=for the badge |


## Key Files

### Manifests

- examples/otel-collector/README.md
- benchmarks/README.md
- cli/README.md
- benchmarks/token_baselines/README.md
- clients/ts/README.md
- AGENTS.md
- README.md
- speedreview/README.md
- vscode-extension/README.md
- .github/actions/health-radar/README.md
- docker-compose.yml
- Dockerfile
- pyproject.toml
- vscode-extension/package.json
- vscode-extension/tsconfig.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- benchmarks/tasks.json
- SPEC.md
- ARCHITECTURE.md


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| tests | 255 |
| src | 215 |
| munch-bench | 35 |
| benchmarks | 27 |
| vscode-extension | 8 |
| .github | 7 |
| examples | 3 |
| speedreview | 3 |
| cli | 2 |
| clients | 2 |
| .clabot | 1 |
| .dockerignore | 1 |
| .gitignore | 1 |
| AGENT_HINTS.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 466 |
| .md | 41 |
| .json | 17 |
| .yaml | 15 |
| .astro | 10 |
| [no-ext] | 8 |
| .yml | 7 |
| .ts | 4 |
| .cshtml | 2 |
| .php | 2 |
| .al | 1 |
| .c | 1 |
| .cpp | 1 |
| .cs | 1 |
| .dart | 1 |
| .ex | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
