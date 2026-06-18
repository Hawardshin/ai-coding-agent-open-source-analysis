# ory/lumen

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/ory/lumen |
| local path | sources/ory__lumen |
| HEAD | d0dee0e |
| stars/forks | 214 / 24 |
| language | Go |
| license |  |
| pushedAt | 2026-05-20T12:36:26Z |
| trendScore / priorityScore | 156 / 437 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Coding agent / software automation | 405 | AGENTS.md, bench-swe/README.md, README.md |
| Local LLM / inference | 168 | bench-swe/README.md, README.md, CLAUDE.md |
| Developer tools / DX | 100 | bench-swe/README.md, README.md, CLAUDE.md |
| Frontend / app framework | 73 | README.md, go.mod, e2e_cli_test.go |
| MCP / agent interoperability | 70 | AGENTS.md, bench-swe/README.md, README.md |
| RAG / retrieval / knowledge | 55 | bench-swe/README.md, README.md, CLAUDE.md |
| Observability / evaluation | 46 | README.md, docs/BENCHMARKS.md, bench-results/benchmark-analysis-report.md |
| AI agent / orchestration | 41 | AGENTS.md, README.md, CLAUDE.md |
| Database / data infrastructure | 39 | bench-swe/README.md, README.md, CLAUDE.md |
| Data / ML platform | 27 | bench-swe/README.md, docs/BENCHMARKS.md, bench-results/benchmark-analysis-report.md |
| Security / supply chain | 18 | e2e_cli_test.go, bench-results/swe-20260311-134302-go-ollama-jina-embeddings-v2-base-code/go-hard-baseline-tests.txt, bench-results/swe-20260311-134302-go-ollama-jina-embeddings-v2-base-code/go-hard-with-lumen-tests.txt |
| Cloud native / infrastructure | 6 | CLAUDE.md, Makefile, testdata/fixtures/python/flask-cli.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go, Java/Kotlin, Swift |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 683 |
| manifests | 11 |
| docs | 82 |
| tests | 299 |
| ci/ops | 13 |
| spec artifacts | 7 |
| agent instruction files | 7 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Index with the Ollama server matching this model name. | Table of contents / Demo / Quick start / What you get / How it works / Benchmarks / Supported languages / Configuration / Supported embedding models / Selecting a server per invocation | ! Ory Lumen Semantic code search for AI agents .github/lumen banner.png ! CI https //github.com/ory/lumen/actions/workflows/ci.yml/badge.svg https //github.com/ory/lumen/actions/workflows/ci.yml ! Go Report Card https //goreportcard.com/badge/github.com/ory/lumen https //goreportcard.com/report/github.com/ory/lumen ! Go Reference https //pkg.go.dev/badge/github.com/ory/lumen.svg https //pkg.go.dev/github.com/ory/lumen ! Coverage Status https //coveralls.io/repos/github/ory/lumen/badge.svg?branch=main https //coveralls.io/github/ory/lumen?branch=main ! License https //img.shields.io/badge/license Apache%202.0 blue.svg LICENSE Claude reads entire files to find what it needs. Lumen gives it a m |


## Key Files

### Manifests

- AGENTS.md
- bench-swe/README.md
- README.md
- CLAUDE.md
- bench-swe/go.mod
- go.mod
- Makefile
- package.json
- scripts/package.json
- bench-swe/go.sum
- go.sum


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- .cursor/mcp.json
- .claude/agents/bench-analyzer.md
- .claude/agents/task-curator.md
- .claude/skills/add-benchmark/SKILL.md
- .claude/settings.json


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- .cursor/mcp.json
- .claude/agents/bench-analyzer.md
- .claude/agents/task-curator.md
- .claude/skills/add-benchmark/SKILL.md
- .claude/settings.json


## Top Directories

| dir | count |
| --- | --- |
| testdata | 312 |
| bench-results | 181 |
| bench-swe | 58 |
| internal | 56 |
| cmd | 26 |
| scripts | 8 |
| .claude | 4 |
| docs | 3 |
| .cursor-plugin | 2 |
| .github | 2 |
| .opencode | 2 |
| hooks | 2 |
| skills | 2 |
| .claude-plugin | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 149 |
| .json | 80 |
| .md | 78 |
| [no-ext] | 64 |
| .ts | 24 |
| .diff | 22 |
| .js | 22 |
| .jsonl | 22 |
| .log | 22 |
| .py | 22 |
| .txt | 22 |
| .php | 21 |
| .dart | 18 |
| .rs | 17 |
| .java | 16 |
| .yaml | 16 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
