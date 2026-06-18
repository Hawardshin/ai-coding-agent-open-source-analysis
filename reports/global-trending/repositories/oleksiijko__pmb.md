# oleksiijko/pmb

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/oleksiijko/pmb |
| local path | sources/oleksiijko__pmb |
| HEAD | 50bd371 |
| stars/forks | 79 / 7 |
| language | Python |
| license |  |
| pushedAt | 2026-06-18T00:17:35Z |
| trendScore / priorityScore | 176 / 503 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | docs/README.md, docker/README.md, npm/README.md |
| MCP / agent interoperability | 500 | docs/README.md, docker/README.md, npm/README.md |
| Coding agent / software automation | 432 | docs/README.md, npm/README.md, README.md |
| Developer tools / DX | 354 | docker/README.md, npm/README.md, README.md |
| Database / data infrastructure | 267 | docs/README.md, docker/README.md, README.md |
| RAG / retrieval / knowledge | 233 | docs/README.md, docker/README.md, README.md |
| Cloud native / infrastructure | 212 | docker/README.md, compose.yaml, docker/Dockerfile |
| Local LLM / inference | 111 | README.md, scripts/benchmarks/scenario_test.py, SECURITY.md |
| Security / supply chain | 103 | docker/README.md, README.md, Makefile |
| Observability / evaluation | 102 | README.md, scripts/README.md, Makefile |
| Data / ML platform | 65 | docker/README.md, docker/Dockerfile, Makefile |
| Frontend / app framework | 38 | scripts/benchmarks/mega_stress_test.py, tests/eval/test_memory_eval_multilingual.py, scripts/benchmarks/bench_full_flow.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 430 |
| manifests | 11 |
| docs | 41 |
| tests | 170 |
| ci/ops | 8 |
| spec artifacts | 5 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | PMB | PMB / Local-first memory for your AI coding agent. / One file on your disk. Twenty-nine MCP tools. No cloud. / Quickstart / 4. restart your agent, then just talk to it - memory is automatic / Why pmb-ai? / What it feels like / What you can put in there / Personal facts that change                  (with time-travel: old / values archived, never lost) | <! mcp name io.github.oleksiijko/pmb ai <div align="center" <img src="https //raw.githubusercontent.com/oleksiijko/pmb/main/docs/assets/logo.png" width="160" alt="PMB logo" PMB Local first memory for your AI coding agent. One file on your disk. Twenty nine MCP tools. No cloud. ! PyPI https //img.shields.io/pypi/v/pmb ai.svg?label=pypi https //pypi.org/project/pmb ai/ ! Downloads https //img.shields.io/pypi/dm/pmb ai.svg?color=blue https //pypi.org/project/pmb ai/ ! Python https //img.shields.io/pypi/pyversions/pmb ai.svg https //pypi.org/project/pmb ai/ ! CI https //github.com/oleksiijko/pmb/actions/workflows/ci.yml/badge.svg https //github.com/oleksiijko/pmb/actions/workflows/ci.yml ! Licen |


## Key Files

### Manifests

- docs/README.md
- docker/README.md
- npm/README.md
- README.md
- scripts/README.md
- compose.yaml
- docker/Dockerfile
- Makefile
- npm/package.json
- pyproject.toml
- docker/compose.gpu.yaml


### Spec / Docs / Prompt Artifacts

- .github/workflows/benchmark.yml
- docs/ROADMAP.md
- docs/concepts/architecture.md
- src/pmb/agent_wrapper/PLAN.md
- .claude/launch.json


### Agent Instruction Files

- .claude/launch.json


## Top Directories

| dir | count |
| --- | --- |
| tests | 165 |
| src | 161 |
| scripts | 37 |
| docs | 29 |
| .github | 11 |
| npm | 5 |
| docker | 4 |
| .claude | 1 |
| .dockerignore | 1 |
| .editorconfig | 1 |
| .gitignore | 1 |
| CHANGELOG.md | 1 |
| CITATION.cff | 1 |
| CODE_OF_CONDUCT.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 352 |
| .md | 39 |
| .yml | 9 |
| [no-ext] | 8 |
| .json | 7 |
| .yaml | 5 |
| .js | 4 |
| .cff | 1 |
| .css | 1 |
| .html | 1 |
| .in | 1 |
| .toml | 1 |
| .typed | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
