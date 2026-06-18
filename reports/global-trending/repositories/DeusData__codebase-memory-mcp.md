# DeusData/codebase-memory-mcp

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/DeusData/codebase-memory-mcp |
| local path | sources/DeusData__codebase-memory-mcp |
| HEAD | e599df1 |
| stars/forks | 5246 / 484 |
| language | C |
| license | MIT |
| pushedAt | 2026-06-13T05:43:03Z |
| trendScore / priorityScore | 207 / 530 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Coding agent / software automation | 500 | README.md, pkg/npm/README.md, pkg/pypi/README.md |
| MCP / agent interoperability | 500 | README.md, pkg/npm/README.md, pkg/pypi/README.md |
| Security / supply chain | 177 | README.md, .github/workflows/_security.yml, scripts/audit-grammar-security.sh |
| Frontend / app framework | 143 | README.md, graph-ui/package.json, graph-ui/tsconfig.json |
| AI agent / orchestration | 131 | README.md, pkg/npm/README.md, pkg/pypi/README.md |
| Developer tools / DX | 110 | README.md, pkg/npm/README.md, docs/BENCHMARK.md |
| Cloud native / infrastructure | 63 | README.md, pkg/npm/README.md, test-infrastructure/Dockerfile |
| Observability / evaluation | 52 | vendored/mimalloc/src/prim/windows/readme.md, docs/BENCHMARK.md, docs/llms.txt |
| Data / ML platform | 48 | README.md, pkg/npm/README.md, docs/BENCHMARK.md |
| Database / data infrastructure | 45 | README.md, pkg/npm/README.md, docs/index.html |
| RAG / retrieval / knowledge | 39 | README.md, pkg/npm/README.md, docs/llms.txt |
| Local LLM / inference | 8 | README.md, docs/llms.txt, docs/index.html |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Go, C/C++, Ruby |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1671 |
| manifests | 15 |
| docs | 19 |
| tests | 99 |
| ci/ops | 26 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | codebase-memory-mcp | codebase-memory-mcp / Why codebase-memory-mcp / Quick Start / 1. Download the installer / 2. (Optional but recommended) Inspect the script / 3. Run it / Graph Visualization UI / Auto-Index / Keeping Up to Date / Uninstall | codebase memory mcp ! GitHub Release https //img.shields.io/github/v/release/DeusData/codebase memory mcp?style=flat&color=blue https //github.com/DeusData/codebase memory mcp/releases/latest ! License https //img.shields.io/badge/license MIT green LICENSE ! CI https //img.shields.io/github/actions/workflow/status/DeusData/codebase memory mcp/dry run.yml?label=CI https //github.com/DeusData/codebase memory mcp/actions/workflows/dry run.yml ! Tests https //img.shields.io/badge/tests 5604 passing brightgreen https //github.com/DeusData/codebase memory mcp ! Languages https //img.shields.io/badge/languages 158 orange https //github.com/DeusData/codebase memory mcp ! Hybrid LSP https //img.shiel |


## Key Files

### Manifests

- README.md
- pkg/npm/README.md
- pkg/pypi/README.md
- test-infrastructure/docker-compose.yml
- test-infrastructure/Dockerfile
- graph-ui/package.json
- graph-ui/tsconfig.json
- graph-ui/vite.config.ts
- pkg/glama/Dockerfile
- pkg/go/go.mod
- pkg/npm/package.json
- pkg/pypi/pyproject.toml
- tools/tree-sitter-form/package.json
- tools/tree-sitter-magma/package.json
- graph-ui/tsconfig.tsbuildinfo


### Spec / Docs / Prompt Artifacts

- docs/BENCHMARK.md


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| internal | 1185 |
| src | 115 |
| tests | 93 |
| vendored | 89 |
| graph-ui | 46 |
| scripts | 46 |
| pkg | 23 |
| tools | 23 |
| .github | 19 |
| docs | 7 |
| test-infrastructure | 6 |
| .clang-format | 1 |
| .clang-tidy | 1 |
| .cppcheck | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .c | 683 |
| .h | 619 |
| [no-ext] | 185 |
| .sh | 38 |
| .tsx | 31 |
| .yml | 19 |
| .json | 18 |
| .md | 14 |
| .py | 11 |
| .txt | 10 |
| .ts | 8 |
| .js | 4 |
| .ps1 | 4 |
| .inc | 3 |
| .yaml | 3 |
| .cpp | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
