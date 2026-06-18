# mezmo/aura

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/mezmo/aura |
| local path | sources/mezmo__aura |
| HEAD | 0c337b6 |
| stars/forks | 99 / 18 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-17T23:19:42Z |
| trendScore / priorityScore | 192 / 509 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | examples/README.md, examples/quickstart-k8s-sre/README.md, examples/quickstart-orchestration-math/README.md |
| Developer tools / DX | 500 | examples/quickstart-k8s-sre/README.md, crates/aura-cli/README.md, README.md |
| MCP / agent interoperability | 500 | examples/README.md, examples/quickstart-k8s-sre/README.md, examples/quickstart-orchestration-math/README.md |
| Cloud native / infrastructure | 233 | examples/README.md, examples/quickstart-k8s-sre/README.md, examples/quickstart-orchestration-math/README.md |
| Coding agent / software automation | 217 | examples/complete/devops-assistant.toml, crates/aura-cli/src/backend/direct.rs, crates/aura-cli/src/permissions.rs |
| Observability / evaluation | 213 | examples/README.md, examples/quickstart-k8s-sre/README.md, examples/quickstart-orchestration-math/README.md |
| Local LLM / inference | 69 | examples/README.md, crates/aura-cli/README.md, README.md |
| RAG / retrieval / knowledge | 32 | crates/aura-cli/README.md, README.md, crates/aura-web-server/README.md |
| Security / supply chain | 11 | crates/aura-cli/README.md, README.md, Dockerfile |
| Database / data infrastructure | 8 | tests/integration/k8s-sre-mcp/server.py |
| Data / ML platform | 7 | README.md, crates/aura-web-server/README.md, docs/a2a-implementation.md |
| Frontend / app framework | 4 | README.md, configs/integration-scratchpad-single-agent.toml, crates/aura-cli/src/ui/state.rs |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 276 |
| manifests | 25 |
| docs | 30 |
| tests | 25 |
| ci/ops | 27 |
| spec artifacts | 14 |
| agent instruction files | 10 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | AURA | AURA / Table of Contents / Quick Start / More Quickstarts / Project Structure / Development Setup / Usage / Web API Server / Default: reads config.toml / Custom config file | AURA ! Slack https //img.shields.io/badge/Slack Join%20the%20community 4A154B?logo=slack&logoColor=white https //mezmo.com/r/slack aura ! License https //img.shields.io/badge/License Apache 2.0 blue LICENSE ! Rust https //img.shields.io/badge/Rust 1.85%2B orange?logo=rust https //www.rust lang.org ! MCP https //img.shields.io/badge/MCP compatible green https //modelcontextprotocol.io AURA is an agentic harness that turns an LLM model into a reliable, autonomous service capable of executing real SRE work. AURA provides the guardrails, API servers, state management, authentication, streaming, error handling, and tool integrations necessary to run AI SRE agents safely in production. Key capabil |


## Key Files

### Manifests

- examples/README.md
- examples/quickstart-k8s-sre/README.md
- examples/quickstart-orchestration-math/README.md
- crates/aura-cli/README.md
- README.md
- crates/aura-web-server/README.md
- CLAUDE.md
- examples/quickstart-orchestration-math/math-mcp/Dockerfile
- examples/quickstart-orchestration-math/docker-compose.yml
- tests/integration/k8s-sre-mcp/Dockerfile
- tests/integration/k8s-sre-mcp/requirements.txt
- tests/integration/scratchpad-mcp/Dockerfile
- tests/integration/scratchpad-mcp/requirements.txt
- compose/math-mcp/Dockerfile
- crates/aura-cli/Cargo.toml
- Cargo.toml
- crates/aura-test-utils/Cargo.toml
- docker-compose.yml
- Dockerfile
- Makefile


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- tests/integration/k8s-sre-mcp/requirements.txt
- tests/integration/scratchpad-mcp/requirements.txt
- crates/aura/src/prompts/continuation_prompt.md
- crates/aura/src/prompts/duplicate_call_abort.md
- crates/aura/src/prompts/duplicate_call_guidance.md
- crates/aura/src/prompts/mod.rs
- crates/aura/src/prompts/orchestrator_preamble.md
- crates/aura/src/prompts/session_history.md
- crates/aura/src/prompts/templates.md
- crates/aura/src/prompts/worker_preamble.md
- crates/aura/src/prompts/worker_task_prompt.md
- examples/minimal/gemini.toml
- docs/adr/2026-06-16-hitl-approval-architecture.md


### Agent Instruction Files

- CLAUDE.md
- crates/aura/src/prompts/continuation_prompt.md
- crates/aura/src/prompts/duplicate_call_abort.md
- crates/aura/src/prompts/duplicate_call_guidance.md
- crates/aura/src/prompts/mod.rs
- crates/aura/src/prompts/orchestrator_preamble.md
- crates/aura/src/prompts/session_history.md
- crates/aura/src/prompts/templates.md
- crates/aura/src/prompts/worker_preamble.md
- crates/aura/src/prompts/worker_task_prompt.md


## Top Directories

| dir | count |
| --- | --- |
| crates | 175 |
| examples | 20 |
| deployment | 14 |
| compose | 11 |
| docs | 11 |
| tests | 7 |
| .makefiles | 5 |
| configs | 5 |
| .github | 2 |
| scripts | 2 |
| .commitlintrc.js | 1 |
| .config | 1 |
| .config.mk | 1 |
| .dockerignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .rs | 156 |
| .md | 30 |
| .toml | 28 |
| .yaml | 14 |
| [no-ext] | 14 |
| .yml | 12 |
| .mk | 6 |
| .py | 3 |
| .txt | 3 |
| .example | 2 |
| .js | 2 |
| .sh | 2 |
| .env | 1 |
| .json | 1 |
| .no-color-codes | 1 |
| .tpl | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
