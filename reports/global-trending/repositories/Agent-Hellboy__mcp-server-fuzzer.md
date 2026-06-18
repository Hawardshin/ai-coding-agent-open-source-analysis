# Agent-Hellboy/mcp-server-fuzzer

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Agent-Hellboy/mcp-server-fuzzer |
| local path | sources/Agent-Hellboy__mcp-server-fuzzer |
| HEAD | 249f9e9 |
| stars/forks | 35 / 6 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T22:34:38Z |
| trendScore / priorityScore | 139 / 383 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | examples/README.md, docs/README.md, AGENTS.md |
| Developer tools / DX | 354 | examples/README.md, AGENTS.md, tests/README.md |
| Security / supply chain | 270 | AGENTS.md, docker/README.md, tests/e2e/README.md |
| Cloud native / infrastructure | 88 | AGENTS.md, tests/README.md, docker/README.md |
| AI agent / orchestration | 58 | AGENTS.md, README.md, examples/go_stdio_server/go.mod |
| Observability / evaluation | 54 | examples/README.md, docs/SECURITY_CI.md, docs/architecture/client-architecture.md |
| Coding agent / software automation | 20 | examples/README.md, AGENTS.md, mcp_fuzzer/fuzz_engine/mutators/strategies/spec_protocol.py |
| Data / ML platform | 12 | docs/architecture/client-architecture.md, docs/design-pattern-review.md, MCP_SECURITY_AUDIT_ROADMAP.md |
| Database / data infrastructure | 3 | AGENTS.md, docs/development/standardized-output.md |
| RAG / retrieval / knowledge | 3 | AGENTS.md, docs/architecture/fuzz-engine.md, docs/development/standardized-output.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, devtools, example-rich, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python, Go |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 469 |
| manifests | 19 |
| docs | 38 |
| tests | 187 |
| ci/ops | 11 |
| spec artifacts | 8 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | MCP Server Fuzzer | MCP Server Fuzzer / What It Does / Findings It Reports / Install / PyPI / From source / Quick Start / 1. Run the bundled HTTP example server / 2. Fuzz tools / 3. Fuzz protocol requests | MCP Server Fuzzer <div align="center" <img src="icon.png" alt="MCP Server Fuzzer Icon" width="100" height="100" CLI fuzzing for MCP servers Tool fuzzing • Protocol fuzzing • HTTP/SSE/stdio/StreamableHTTP • Safety controls • Rich reporting ! CI https //github.com/Agent Hellboy/mcp server fuzzer/actions/workflows/lint.yml/badge.svg https //github.com/Agent Hellboy/mcp server fuzzer/actions/workflows/lint.yml ! codecov https //codecov.io/gh/Agent Hellboy/mcp server fuzzer/graph/badge.svg?token=HZKC5V28LS https //codecov.io/gh/Agent Hellboy/mcp server fuzzer ! PyPI Version https //img.shields.io/pypi/v/mcp fuzzer.svg https //pypi.org/project/mcp fuzzer/ ! PyPI Downloads https //static.pepy.tech/ |


## Key Files

### Manifests

- examples/README.md
- docs/README.md
- AGENTS.md
- tests/README.md
- docker/README.md
- README.md
- tests/e2e/README.md
- examples/go_stdio_server/go.mod
- examples/typescript-stdio-server/package.json
- examples/typescript-stdio-server/tsconfig.json
- docker-compose.yml
- Dockerfile
- pyproject.toml
- requirements.txt
- tests/e2e/Dockerfile
- examples/go_stdio_server/go.sum
- docker-compose.host-network.yml
- docker-compose.prod.yml
- docker/requirements.runtime.txt


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- requirements.txt
- docs/architecture/client-architecture.md
- docs/architecture/architecture.md
- docs/architecture/async-executor.md
- docs/architecture/fuzz-engine.md
- docs/architecture/fuzzer-design.md
- ARCHITECTURE.md


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| mcp_fuzzer | 209 |
| tests | 187 |
| docs | 28 |
| examples | 16 |
| .github | 7 |
| docker | 3 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .gitmodules | 1 |
| .pre-commit-config.yaml | 1 |
| AGENTS.md | 1 |
| ARCHITECTURE.md | 1 |
| CHANGELOG.md | 1 |
| docker-compose.host-network.yml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 391 |
| .md | 37 |
| .yml | 12 |
| .sh | 6 |
| [no-ext] | 6 |
| .json | 5 |
| .yaml | 3 |
| .txt | 2 |
| .go | 1 |
| .ini | 1 |
| .js | 1 |
| .mod | 1 |
| .sum | 1 |
| .toml | 1 |
| .ts | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
