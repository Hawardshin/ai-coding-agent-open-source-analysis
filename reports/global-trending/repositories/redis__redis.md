# redis/redis

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/redis/redis |
| local path | sources/redis__redis |
| HEAD | 44a6a9f |
| stars/forks | 74920 / 24676 |
| language | C |
| license |  |
| pushedAt | 2026-06-17T13:21:59Z |
| trendScore / priorityScore | 149 / 402 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Database / data infrastructure | 500 | modules/vector-sets/examples/cli-tool/README.md, modules/vector-sets/README.md, tests/README.md |
| Cloud native / infrastructure | 72 | modules/vector-sets/README.md, README.md, deps/hiredis/.github/workflows/test.yml |
| Developer tools / DX | 51 | modules/vector-sets/examples/cli-tool/README.md, deps/README.md, README.md |
| RAG / retrieval / knowledge | 42 | modules/vector-sets/examples/cli-tool/README.md, modules/vector-sets/README.md, README.md |
| Security / supply chain | 37 | deps/README.md, README.md, deps/hiredis/README.md |
| Observability / evaluation | 34 | deps/README.md, README.md, deps/xxhash/build/make/README.md |
| Data / ML platform | 19 | modules/vector-sets/README.md, README.md, deps/hiredis/README.md |
| AI agent / orchestration | 7 | deps/README.md, README.md, deps/tre/README.md |
| Local LLM / inference | 7 | modules/vector-sets/examples/cli-tool/README.md, modules/vector-sets/examples/cli-tool/cli.py |
| Coding agent / software automation | 2 | modules/vector-sets/README.md, tests/assets/test_cli_hint_suite.txt |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontendStack, infra, infraOps, llmFramework, local-llm, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, C/C++, Ruby |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1811 |
| manifests | 35 |
| docs | 39 |
| tests | 558 |
| ci/ops | 12 |
| spec artifacts | 3 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Table of contents / What is Redis? / Key use cases / Why choose Redis? / What is Redis Open Source? / Getting started / Redis starter projects / Using Redis with client libraries / Using Redis with redis-cli / Using Redis with Redis Insight | ! codecov https //codecov.io/github/redis/redis/graph/badge.svg?token=6bVHb5fRuz https //codecov.io/github/redis/redis This document serves as both a quick start guide to Redis and a detailed resource for building it from source. New to Redis? Start with What is Redis what is redis and Getting Started getting started Ready to build from source? Jump to Build Redis from Source build redis from source Want to contribute? See the Code contributions code contributions section and CONTRIBUTING.md ./CONTRIBUTING.md Looking for detailed documentation? Navigate to redis.io/docs https //redis.io/docs/ Table of contents What is Redis? what is redis Key use cases key use cases Why choose Redis? why cho |


## Key Files

### Manifests

- modules/vector-sets/examples/cli-tool/README.md
- modules/vector-sets/README.md
- tests/README.md
- deps/README.md
- README.md
- deps/fpconv/README.md
- deps/hdr_histogram/README.md
- deps/hiredis/README.md
- deps/tre/README.md
- deps/xxhash/build/make/README.md
- src/commands/README.md
- utils/graphs/commits-over-time/README.md
- utils/srandmember/README.md
- modules/vector-sets/Makefile
- .codespell/requirements.txt
- deps/Makefile
- Makefile
- modules/Makefile
- src/Makefile
- tests/modules/Makefile


### Spec / Docs / Prompt Artifacts

- .codespell/requirements.txt
- utils/req-res-validator/requirements.txt
- src/commands/eval.json


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| deps | 707 |
| src | 669 |
| tests | 291 |
| modules | 63 |
| utils | 40 |
| .github | 15 |
| .codespell | 3 |
| .gitattributes | 1 |
| .gitignore | 1 |
| 00-RELEASENOTES | 1 |
| BUGS | 1 |
| CODE_OF_CONDUCT.md | 1 |
| codecov.yml | 1 |
| CONTRIBUTING.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .c | 472 |
| .json | 444 |
| .h | 311 |
| .tcl | 229 |
| .sh | 69 |
| [no-ext] | 65 |
| .py | 46 |
| .md | 26 |
| .in | 22 |
| .lua | 20 |
| .yml | 19 |
| .txt | 12 |
| .rb | 9 |
| .rdb | 9 |
| .cpp | 7 |
| .conf | 6 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
