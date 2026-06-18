# cortexkit/aft

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/cortexkit/aft |
| local path | sources/cortexkit__aft |
| HEAD | 230d49e |
| stars/forks | 161 / 19 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-17T23:13:27Z |
| trendScore / priorityScore | 163 / 440 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Coding agent / software automation | 461 | benchmarks/README.md, benchmarks/codegraph-replication/README.md, benchmarks/codegraph-vs-aft-agent/README.md |
| AI agent / orchestration | 178 | benchmarks/README.md, benchmarks/aft-search/README.md, benchmarks/codegraph-replication/README.md |
| Developer tools / DX | 168 | benchmarks/README.md, benchmarks/codegraph-vs-aft-agent/README.md, benchmarks/codegraph-vs-aft-retrieval/README.md |
| Cloud native / infrastructure | 131 | benchmarks/README.md, benchmarks/aft-search/README.md, benchmarks/codegraph-replication/README.md |
| Observability / evaluation | 95 | benchmarks/README.md, benchmarks/aft-search/README.md, benchmarks/codegraph-replication/README.md |
| RAG / retrieval / knowledge | 92 | benchmarks/README.md, benchmarks/aft-search/README.md, benchmarks/codegraph-replication/README.md |
| Security / supply chain | 60 | packages/pi-plugin/README.md, docs/config.md, docs/tools.md |
| MCP / agent interoperability | 31 | benchmarks/README.md, benchmarks/codegraph-vs-aft-agent/README.md, README.md |
| Data / ML platform | 29 | tests/windows-e2e/README.md, benchmarks/compression-tokens/package.json, Cargo.toml |
| Local LLM / inference | 14 | README.md, packages/pi-plugin/README.md, docs/config.md |
| Frontend / app framework | 13 | README.md, crates/aft/Cargo.toml, docs/tools.md |
| Database / data infrastructure | 6 | docs/tools.md, benchmarks/swe-bench-django-10.json |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1419 |
| manifests | 40 |
| docs | 254 |
| tests | 641 |
| ci/ops | 27 |
| spec artifacts | 3 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | What is AFT? / Quick start / Part of CortexKit / 🧠 Sensory cortex: perceive / ✋ Motor cortex: act / ⚙️ Brainstem: keep it alive / Benchmarks / Supported languages / Architecture / Configuration | <h1 align="center" AFT</h1 <p align="center" <strong Give your agent a proper IDE and OS.</strong <br The sensorimotor cortex for coding agents. <br </p <! BANNER replace with the new cortex/family banner see banner prompts . Path is repo relative for the final location. <p align="center" <img src="assets/aft banner.jpg" alt="AFT, the sensorimotor cortex for coding agents" width="80%" </p <p align="center" <a href="https //crates.io/crates/agent file tools" <img src="https //img.shields.io/crates/v/agent file tools?label=crate&color=blue&style=flat square" alt="crates.io" </a <a href="https //www.npmjs.com/package/@cortexkit/aft" <img src="https //img.shields.io/npm/v/@cortexkit/aft?label=cl |


## Key Files

### Manifests

- benchmarks/README.md
- benchmarks/aft-search/README.md
- benchmarks/codegraph-replication/README.md
- benchmarks/codegraph-vs-aft-agent/README.md
- benchmarks/codegraph-vs-aft-retrieval/README.md
- benchmarks/settle-time/README.md
- packages/aft-cli/README.md
- README.md
- tests/macos-e2e/README.md
- tests/windows-e2e/README.md
- packages/aft-bridge/README.md
- packages/pi-plugin/README.md
- benchmarks/package.json
- benchmarks/tsconfig.json
- benchmarks/aft-search/docker-compose.yml
- benchmarks/aft-search/Dockerfile
- benchmarks/aft-search/pyproject.toml
- benchmarks/codegraph-replication/docker-compose.yml
- benchmarks/codegraph-replication/Dockerfile
- benchmarks/codegraph-replication/package.json


### Spec / Docs / Prompt Artifacts

- benchmarks/codegraph-vs-aft-agent/corpora/tasks.json
- .gsd/REQUIREMENTS.md
- ARCHITECTURE.md


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| crates | 545 |
| packages | 437 |
| .gsd | 189 |
| benchmarks | 123 |
| .alfonso | 46 |
| tests | 33 |
| scripts | 13 |
| .github | 11 |
| docs | 4 |
| .opencode | 2 |
| .bg-shell | 1 |
| .cargo | 1 |
| .dockerignore | 1 |
| .gitignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 482 |
| .rs | 320 |
| .md | 254 |
| .golden | 132 |
| .json | 56 |
| .txt | 55 |
| .toml | 29 |
| [no-ext] | 19 |
| .py | 16 |
| .yml | 14 |
| .sh | 13 |
| .go | 5 |
| .js | 4 |
| .mjs | 4 |
| .tsx | 4 |
| .jsonc | 3 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
