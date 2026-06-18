# manojmallick/sigmap

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/manojmallick/sigmap |
| local path | sources/manojmallick__sigmap |
| HEAD | 827ba38 |
| stars/forks | 513 / 36 |
| language | JavaScript |
| license |  |
| pushedAt | 2026-06-18T00:04:38Z |
| trendScore / priorityScore | 150 / 472 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | AGENTS.md, README.md, packages/core/README.md |
| Coding agent / software automation | 476 | AGENTS.md, README.md, packages/core/README.md |
| Observability / evaluation | 409 | AGENTS.md, README.md, packages/core/README.md |
| Developer tools / DX | 385 | AGENTS.md, README.md, packages/core/README.md |
| Local LLM / inference | 157 | README.md, docs-vp/guide/agents.md, package.json |
| RAG / retrieval / knowledge | 157 | AGENTS.md, README.md, packages/core/README.md |
| Security / supply chain | 140 | AGENTS.md, README.md, packages/core/README.md |
| AI agent / orchestration | 133 | AGENTS.md, README.md, docs-vp/guide/agents.md |
| Frontend / app framework | 121 | AGENTS.md, README.md, packages/core/README.md |
| Data / ML platform | 50 | AGENTS.md, README.md, docs-vp/guide/agents.md |
| Cloud native / infrastructure | 29 | AGENTS.md, README.md, docs-vp/guide/agents.md |
| Database / data infrastructure | 17 | docs/languages.html, docs/roadmap.html, docs/troubleshooting.html |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go, Java/Kotlin, Swift |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 470 |
| manifests | 11 |
| docs | 90 |
| tests | 153 |
| ci/ops | 12 |
| spec artifacts | 5 |
| agent instruction files | 3 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | ⚡ SigMap | ⚡ SigMap / Try it now / What is SigMap? / Why SigMap? / Replace this with SigMap / How it works / Benchmark / Install / Integrations / Try it | <div align="center" <img src="assets/logo.png" alt="SigMap logo" width="80" height="80" / ⚡ SigMap SigMap finds the right files before your AI answers. ! npm version https //img.shields.io/npm/v/sigmap?color=7c6af7&label=latest&logo=npm https //www.npmjs.com/package/sigmap ! npm downloads https //img.shields.io/npm/dt/sigmap?color=22c55e&label=downloads&logo=npm https //www.npmjs.com/package/sigmap ! CI https //github.com/manojmallick/sigmap/actions/workflows/ci.yml/badge.svg https //github.com/manojmallick/sigmap/actions/workflows/ci.yml ! Zero deps https //img.shields.io/badge/dependencies zero 22c55e package.json ! License MIT https //img.shields.io/badge/License MIT 7c6af7.svg LICENSE ! |


## Key Files

### Manifests

- AGENTS.md
- README.md
- packages/core/README.md
- packages/cli/package.json
- docs-vp/package.json
- package.json
- test/fixtures/Dockerfile
- packages/core/package.json
- test/expected/go.txt
- test/fixtures/go.go
- src/extractors/go.js


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- docs-vp/guide/agents.md
- docs-vp/guide/benchmark.md
- .claude/settings.json
- docs-vp/guide/roadmap.md


### Agent Instruction Files

- AGENTS.md
- docs-vp/guide/agents.md
- .claude/settings.json


## Top Directories

| dir | count |
| --- | --- |
| test | 152 |
| src | 114 |
| docs-vp | 50 |
| docs | 36 |
| benchmarks | 29 |
| scripts | 24 |
| .github | 22 |
| packages | 15 |
| examples | 3 |
| .claude | 1 |
| .contextignore | 1 |
| .contextignore.example | 1 |
| .gitignore | 1 |
| .npmignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .js | 228 |
| .md | 72 |
| .txt | 31 |
| .html | 22 |
| .mjs | 21 |
| .jsonl | 19 |
| .json | 17 |
| .yml | 13 |
| [no-ext] | 11 |
| .r | 4 |
| .sh | 4 |
| .svg | 4 |
| .py | 3 |
| .example | 2 |
| .cjs | 1 |
| .cpp | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
