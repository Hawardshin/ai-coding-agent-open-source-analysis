# zzet/gortex

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/zzet/gortex |
| local path | sources/zzet__gortex |
| HEAD | ed483c7 |
| stars/forks | 492 / 39 |
| language | Go |
| license |  |
| pushedAt | 2026-06-17T19:10:58Z |
| trendScore / priorityScore | 168 / 493 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 497 | docs/04-evaluation/README.md, eval/README.md, docs/actions/README.md |
| MCP / agent interoperability | 477 | docs/04-evaluation/README.md, docs/actions/README.md, AGENTS.md |
| Coding agent / software automation | 303 | eval/README.md, README.md, CLAUDE.md |
| Observability / evaluation | 253 | docs/04-evaluation/README.md, eval/README.md, README.md |
| RAG / retrieval / knowledge | 137 | docs/04-evaluation/README.md, docs/actions/README.md, README.md |
| Developer tools / DX | 126 | docs/04-evaluation/README.md, docs/actions/README.md, README.md |
| Cloud native / infrastructure | 116 | bench/daemon-latency/README.md, internal/daemon/README.md, CLAUDE.md |
| Local LLM / inference | 43 | README.md, CLAUDE.md, docs/llm.md |
| Data / ML platform | 42 | bench/token-efficiency/README.md, bench/wire-format/README.md, CLAUDE.md |
| Security / supply chain | 25 | docs/actions/README.md, README.md, CLAUDE.md |
| Frontend / app framework | 24 | README.md, bench/perf/README.md, go.mod |
| Database / data infrastructure | 20 | README.md, bench/perf/README.md, CLAUDE.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Go, Java/Kotlin, Ruby, PHP |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2396 |
| manifests | 27 |
| docs | 65 |
| tests | 1164 |
| ci/ops | 15 |
| spec artifacts | 13 |
| agent instruction files | 11 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | macOS / Linux | Code graph and intelligence engine that indexes repositories / Why it matters / Install / macOS / Linux / Windows (PowerShell) / Quick Start / Highlights / Cross-Repo API Contracts / Scale — battle-tested on large repos / Token savings dashboard | <div align="center" <p align="center" <img src="assets/wall.svg" alt="Gortex" width="500" </p Code graph and intelligence engine that indexes repositories and exposes it via CLI, MCP Server, and web UI. ! CI https //github.com/zzet/gortex/actions/workflows/ci.yml/badge.svg https //github.com/zzet/gortex/actions/workflows/ci.yml ! Go Report Card https //goreportcard.com/badge/github.com/zzet/gortex https //goreportcard.com/report/github.com/zzet/gortex ! Latest release https //img.shields.io/github/v/release/zzet/gortex?logo=github&sort=semver https //github.com/zzet/gortex/releases/latest ! Go Reference https //pkg.go.dev/badge/github.com/zzet/gortex.svg https //pkg.go.dev/github.com/zzet/go |


## Key Files

### Manifests

- docs/04-evaluation/README.md
- eval/README.md
- docs/actions/README.md
- AGENTS.md
- README.md
- bench/baselines/README.md
- bench/daemon-latency/README.md
- bench/perf/README.md
- bench/token-efficiency/README.md
- bench/wire-format/README.md
- internal/contracts/README.md
- internal/daemon/README.md
- internal/resolver/README.md
- internal/thirdparty/renameio/README.md
- CLAUDE.md
- eval/pyproject.toml
- go.mod
- Makefile
- bench/fixtures/di/angular/package.json
- bench/fixtures/di/angular/tsconfig.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- docs/agents.md
- eval/prompts/.gitkeep
- eval/prompts/instance_baseline.jinja
- eval/prompts/instance_native_augment.jinja
- eval/prompts/instance_native.jinja
- eval/prompts/system_baseline.jinja
- eval/prompts/system_native_augment.jinja
- eval/prompts/system_native.jinja
- docs/architecture.md
- BENCHMARK.md
- cmd/gortex/testdata/agent-render/gemini.txt


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- docs/agents.md
- eval/prompts/.gitkeep
- eval/prompts/instance_baseline.jinja
- eval/prompts/instance_native_augment.jinja
- eval/prompts/instance_native.jinja
- eval/prompts/system_baseline.jinja
- eval/prompts/system_native_augment.jinja
- eval/prompts/system_native.jinja
- cmd/gortex/testdata/agent-render/gemini.txt


## Top Directories

| dir | count |
| --- | --- |
| internal | 1992 |
| cmd | 148 |
| bench | 142 |
| eval | 48 |
| docs | 24 |
| .github | 14 |
| scripts | 6 |
| pkg | 2 |
| .gitignore | 1 |
| .goreleaser.yml | 1 |
| .gortex.yaml | 1 |
| AGENTS.md | 1 |
| assets | 1 |
| BENCHMARK-SWE.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 2132 |
| .md | 49 |
| .py | 39 |
| .yaml | 36 |
| .ts | 34 |
| .txt | 16 |
| [no-ext] | 14 |
| .php | 13 |
| .yml | 12 |
| .json | 11 |
| .java | 7 |
| .jinja | 6 |
| .rb | 5 |
| .sh | 5 |
| .jsonl | 3 |
| .mod | 3 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
