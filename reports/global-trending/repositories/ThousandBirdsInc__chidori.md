# ThousandBirdsInc/chidori

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/ThousandBirdsInc/chidori |
| local path | sources/ThousandBirdsInc__chidori |
| HEAD | 83d040f |
| stars/forks | 1350 / 55 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-17T04:52:57Z |
| trendScore / priorityScore | 140 / 426 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | examples/legacy-starlark/coding-agent/README.md, examples/branching/README.md, examples/interactive-pipeline/README.md |
| Developer tools / DX | 244 | examples/branching/README.md, examples/interactive-pipeline/README.md, examples/multiplayer-review/README.md |
| Observability / evaluation | 203 | examples/interactive-pipeline/README.md, crates/chidori-js/benchmarks/README.md, crates/chidori-js/examples/agent_replay.rs |
| Frontend / app framework | 114 | crates/chidori-js/examples/react_assets/README.md, README.md, crates/chidori-js/examples/react_agent_demo.rs |
| Cloud native / infrastructure | 56 | examples/interactive-pipeline/README.md, README.md, crates/chidori-js/examples/agent_replay.rs |
| Security / supply chain | 42 | examples/multiplayer-review/README.md, README.md, docs/captured-effects-vfs-crypto-timers.md |
| Data / ML platform | 39 | examples/interactive-pipeline/README.md, crates/chidori-js/examples/react_assets/react-dom-server.js, docs/captured-effects-vfs-crypto-timers.md |
| MCP / agent interoperability | 36 | docs/DESIGN.md, docs/fable_review.md, docs/rust-engine-quickjs-removal-gaps.md |
| Coding agent / software automation | 34 | examples/legacy-starlark/coding-agent/README.md, crates/chidori-js/examples/react_agent_demo.rs, crates/chidori-js/examples/react_branch_converge.rs |
| Database / data infrastructure | 11 | examples/legacy-starlark/coding-agent/README.md, crates/chidori/Cargo.toml, docs/fable_review.md |
| RAG / retrieval / knowledge | 6 | crates/chidori-js/examples/durable_step.rs, docs/sandbox-model.md, docs/signals.md |
| Local LLM / inference | 1 | docs/fable_review.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python, Rust |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 285 |
| manifests | 18 |
| docs | 45 |
| tests | 16 |
| ci/ops | 5 |
| spec artifacts | 4 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | A provider key (set in step 1) is all you need: | 💡 Why Chidori / What makes it different / ⚡️ Quick Start / 0. Install / 1. Chat with the Chidori docs (30 seconds) / 2. Write your own agent / 3. Run it / A provider key (set in step 1) is all you need: / Or route through a LiteLLM proxy: / export LITELLM_API_URL=http://localhost:4401/v1 | <p align="center" <img src=".github/chidori banner.svg" alt="Chidori — checkpoint · replay · resume durable TypeScript agents on a Rust core" width="800" / </p <h1 align="center" Chidori</h1 <p align="center" <b The agent framework where every run is durable, replayable, and resumable by default.</b </p <p align="center" Write agents as plain async TypeScript. Every side effect — every LLM call, tool call, and HTTP request — flows through the runtime as a recorded <b host call</b . So any run can be checkpointed to disk, <b replayed for byte identical output with zero LLM calls</b , and resumed from any pause — even in a new process after a crash. One Rust binary, an embedded pure Rust JavaS |


## Key Files

### Manifests

- examples/legacy-starlark/coding-agent/README.md
- crates/chidori-js/examples/react_assets/README.md
- examples/branching/README.md
- examples/interactive-pipeline/README.md
- examples/multiplayer-review/README.md
- examples/record-replay/README.md
- crates/chidori-js/benchmarks/README.md
- README.md
- sdk/python/README.md
- sdk/typescript/README.md
- examples/record-replay/tsconfig.json
- Cargo.toml
- crates/test262-runner/Cargo.toml
- crates/chidori-js/Cargo.toml
- crates/chidori/Cargo.toml
- sdk/python/pyproject.toml
- sdk/typescript/package.json
- sdk/typescript/tsconfig.json


### Spec / Docs / Prompt Artifacts

- examples/legacy-starlark/coding-agent/prompts/system.jinja
- examples/prompts/analysis.jinja
- docs/architecture.md
- docs/DESIGN.md


### Agent Instruction Files

- examples/legacy-starlark/coding-agent/prompts/system.jinja
- examples/prompts/analysis.jinja


## Top Directories

| dir | count |
| --- | --- |
| crates | 132 |
| examples | 82 |
| docs | 35 |
| sdk | 16 |
| .github | 9 |
| scripts | 5 |
| .gitignore | 1 |
| Cargo.toml | 1 |
| LICENSE | 1 |
| llm.txt | 1 |
| README.md | 1 |
| rust-toolchain.toml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .rs | 110 |
| .star | 39 |
| .ts | 38 |
| .md | 33 |
| .js | 14 |
| .svg | 10 |
| .py | 9 |
| .json | 8 |
| .toml | 6 |
| .sh | 5 |
| .yml | 5 |
| .mjs | 3 |
| .jinja | 2 |
| [no-ext] | 2 |
| .txt | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
