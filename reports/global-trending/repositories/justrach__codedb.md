# justrach/codedb

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/justrach/codedb |
| local path | sources/justrach__codedb |
| HEAD | 9dca2a5 |
| stars/forks | 1332 / 79 |
| language | Zig |
| license |  |
| pushedAt | 2026-06-12T15:55:03Z |
| trendScore / priorityScore | 150 / 452 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 437 | benchmarks/search-shootout/README.md, AGENTS.md, npm/README.md |
| AI agent / orchestration | 261 | benchmarks/search-shootout/eval/README.md, benchmarks/search-shootout/README.md, AGENTS.md |
| Developer tools / DX | 215 | benchmarks/search-shootout/eval/README.md, benchmarks/search-shootout/README.md, AGENTS.md |
| Frontend / app framework | 188 | benchmarks/search-shootout/eval/README.md, benchmarks/search-shootout/README.md, README.md |
| Observability / evaluation | 178 | benchmarks/search-shootout/eval/README.md, benchmarks/search-shootout/README.md, AGENTS.md |
| Coding agent / software automation | 154 | benchmarks/search-shootout/eval/README.md, npm/README.md, README.md |
| Security / supply chain | 36 | AGENTS.md, README.md, docs/hooks-labs.md |
| Database / data infrastructure | 35 | benchmarks/search-shootout/README.md, README.md, docs/benchmarks.md |
| RAG / retrieval / knowledge | 33 | benchmarks/search-shootout/README.md, docs/mcp.md, docs/skills.md |
| Data / ML platform | 24 | benchmarks/search-shootout/README.md, README.md, benchmarks/v0.2.578-vs-v0.2.572.md |
| Cloud native / infrastructure | 13 | bench/swe-lite/evaluate.sh, benchmarks/search-shootout/eval/answers/T2_snapshot_flag_sites/fts5_trigram-rep1.json, benchmarks/search-shootout/eval/scores/scores.json |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 623 |
| manifests | 8 |
| docs | 55 |
| tests | 1 |
| ci/ops | 3 |
| spec artifacts | 8 |
| agent instruction files | 4 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Manual MCP start (auto-configured by install script) | Status / ⚡ Install / Or via npm/npx (zero-install for MCP clients) / Updating or repairing an older install / Documentation / ⚡ Quick Start / As an MCP server (recommended) / Manual MCP start (auto-configured by install script) / As an HTTP server / listening on localhost:7719 | <p align="center" <img src="assets/codedb.png" alt="codedb" width="200" / </p <p align="center" <a href="https //github.com/justrach/codedb/releases/latest" <img src="https //img.shields.io/github/v/release/justrach/codedb?style=flat square&label=version" alt="Release" / </a <a href="https //github.com/justrach/codedb/blob/main/LICENSE" <img src="https //img.shields.io/github/license/justrach/codedb?style=flat square" alt="License" / </a <img src="https //img.shields.io/badge/zig 0.16 f7a41d?style=flat square" alt="Zig 0.16" / <img src="https //img.shields.io/badge/status alpha orange?style=flat square" alt="Alpha" / <a href="https //deepwiki.com/justrach/codedb" <img src="https //deepwiki.c |


## Key Files

### Manifests

- benchmarks/search-shootout/eval/README.md
- benchmarks/search-shootout/README.md
- AGENTS.md
- npm/README.md
- README.md
- experiments/reader-md/README.md
- CLAUDE.md
- npm/package.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- docs/agents.md
- .github/copilot-instructions.md
- docs/architecture.md
- benchmarks/search-shootout/eval/tasks.json
- experiments/reader-md/eval/TASKS.md
- experiments/reader-md/SPEC.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- docs/agents.md
- .github/copilot-instructions.md


## Top Directories

| dir | count |
| --- | --- |
| bench | 377 |
| benchmarks | 97 |
| src | 42 |
| website | 42 |
| experiments | 22 |
| docs | 11 |
| scripts | 8 |
| npm | 5 |
| .github | 4 |
| install | 3 |
| .gitignore | 1 |
| .mailmap | 1 |
| .zigrep_archive | 1 |
| AGENTS.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .json | 202 |
| .patch | 118 |
| .log | 107 |
| .zig | 75 |
| .md | 54 |
| .py | 26 |
| .sh | 10 |
| [no-ext] | 8 |
| .html | 4 |
| .js | 4 |
| .txt | 4 |
| .yml | 3 |
| .toml | 2 |
| .zon | 2 |
| .err | 1 |
| .out | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
