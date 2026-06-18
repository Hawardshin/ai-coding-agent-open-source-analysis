# AxDSan/mnemosyne

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/AxDSan/mnemosyne |
| local path | sources/AxDSan__mnemosyne |
| HEAD | 1ec7c17 |
| stars/forks | 1170 / 109 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T23:54:21Z |
| trendScore / priorityScore | 134 / 456 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Coding agent / software automation | 308 | docs/README.md, docs/integrations/README.md, README.md |
| RAG / retrieval / knowledge | 278 | docs/README.md, hermes_memory_provider/README.md, README.md |
| MCP / agent interoperability | 252 | docs/integrations/README.md, README.md, integrations/vscode-mnemosyne/README.md |
| AI agent / orchestration | 225 | docs/README.md, hermes_memory_provider/README.md, docs/integrations/README.md |
| Database / data infrastructure | 216 | docs/README.md, README.md, deploy/sync/README.md |
| Security / supply chain | 167 | docs/README.md, README.md, deploy/sync/README.md |
| Observability / evaluation | 148 | docs/README.md, README.md, docs/beam-benchmark.md |
| Developer tools / DX | 124 | hermes_memory_provider/README.md, docs/integrations/README.md, README.md |
| Cloud native / infrastructure | 98 | README.md, deploy/sync/README.md, examples/embedding_server.py |
| Data / ML platform | 76 | docs/beam-benchmark.md, docs/benchmark-results-analysis.md, docs/benchmarking.md |
| Local LLM / inference | 75 | README.md, docs/benchmarking.md, docs/hermes-llm-integration.md |
| Frontend / app framework | 1 | mnemosyne/extraction/prompts.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 325 |
| manifests | 16 |
| docs | 57 |
| tests | 122 |
| ci/ops | 5 |
| spec artifacts | 2 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Mnemosyne | Mnemosyne / Table of Contents / Works With Everything / Quick Start / With all features (vector search + MCP server) / Upgrade / Add to your agent / Benchmarks / LongMemEval (retrieval) / BEAM (end-to-end QA) | <div align="center" <img src="/assets/mnemosyne.jpg" alt="Mnemosyne" width="40%" Mnemosyne Zero dependency AI memory that works everywhere. SQLite backed. Sub millisecond. ! Python https //img.shields.io/badge/Python 3.9+ blue.svg https //python.org ! PyPI https //img.shields.io/pypi/v/mnemosyne memory.svg?v=3.7.0 https //pypi.org/project/mnemosyne memory/ ! License https //img.shields.io/badge/License MIT yellow.svg LICENSE ! CI https //github.com/AxDSan/mnemosyne/actions/workflows/ci.yml/badge.svg https //github.com/AxDSan/mnemosyne/actions/workflows/ci.yml ! BEAM https //img.shields.io/badge/BEAM ICLR%202026 purple.svg https //beam benchmark.github.io/ ! Discord https //badgen.net/discord |


## Key Files

### Manifests

- docs/README.md
- hermes_memory_provider/README.md
- docs/integrations/README.md
- README.md
- deploy/sync/README.md
- integrations/hermes/README.md
- integrations/obsidian-mnemosyne/README.md
- integrations/vscode-mnemosyne/README.md
- docker-compose.yml
- Dockerfile
- pyproject.toml
- deploy/sync/docker-compose.yml
- integrations/hermes/pyproject.toml
- integrations/obsidian-mnemosyne/package.json
- integrations/vscode-mnemosyne/package.json
- integrations/vscode-mnemosyne/tsconfig.json


### Spec / Docs / Prompt Artifacts

- docs/architecture.md
- .claude/skills/no-mistakes/SKILL.md


### Agent Instruction Files

- .claude/skills/no-mistakes/SKILL.md


## Top Directories

| dir | count |
| --- | --- |
| tests | 118 |
| mnemosyne | 68 |
| docs | 37 |
| integrations | 30 |
| tools | 15 |
| scripts | 9 |
| .github | 8 |
| hermes_memory_provider | 7 |
| deploy | 4 |
| .githooks | 2 |
| __init__.py | 1 |
| .agents | 1 |
| .claude | 1 |
| .dockerignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 229 |
| .md | 55 |
| [no-ext] | 9 |
| .json | 6 |
| .yml | 6 |
| .ts | 5 |
| .sh | 4 |
| .toml | 3 |
| .yaml | 3 |
| .mdx | 2 |
| .in | 1 |
| .svg | 1 |
| .txt | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
