# GCWing/BitFun

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/GCWing/BitFun |
| local path | sources/GCWing__BitFun |
| HEAD | 617086b |
| stars/forks | 1070 / 117 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-17T16:24:11Z |
| trendScore / priorityScore | 134 / 412 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | AGENTS.md, BitFun-Installer/AGENTS.md, tests/e2e/AGENTS.md |
| Developer tools / DX | 222 | docs/sdlc-harness/README.md, AGENTS.md, src/apps/desktop/AGENTS.md |
| MCP / agent interoperability | 199 | docs/sdlc-harness/README.md, AGENTS.md, BitFun-Installer/AGENTS.md |
| Frontend / app framework | 164 | AGENTS.md, BitFun-Installer/AGENTS.md, src/crates/assembly/core/src/agentic/deep_review/AGENTS.md |
| Security / supply chain | 87 | docs/sdlc-harness/README.md, README.md, .github/workflows/cli-package.yml |
| Coding agent / software automation | 45 | docs/sdlc-harness/README.md, AGENTS.md, src/crates/adapters/ai-adapters/AGENTS.md |
| Cloud native / infrastructure | 18 | src/apps/relay-server/README.md, src/web-ui/src/flow_chat/tool-cards/README.md, docs/sdlc-harness/architecture/security-boundary.md |
| Data / ML platform | 15 | src/crates/execution/tool-execution/AGENTS.md, README.md, src/crates/assembly/core/src/agentic/agents/prompts/deep_research_agent.md |
| Observability / evaluation | 13 | src/crates/adapters/webdriver/AGENTS.md, src/apps/cli/Cargo.toml, Cargo.toml |
| Database / data infrastructure | 7 | src/crates/assembly/core/src/agentic/insights/prompts/suggestions.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python, Rust |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 3792 |
| manifests | 40 |
| docs | 288 |
| tests | 360 |
| ci/ops | 8 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Install dependencies | What BitFun Is / Why BitFun / What's New / Cutting Edge · Ready Out of the Box / How to Customize Your BitFun / Example: Code Agent vs Cowork Agent is a small difference / Platform Support / Quick Start / Download and use / Build from source | English 中文 README.zh CN.md <div align="center" ! BitFun ./png/BitFun title.png </div <div align="center" ! GitHub release https //img.shields.io/github/v/release/GCWing/BitFun?style=flat square&color=blue https //github.com/GCWing/BitFun/releases ! Website https //img.shields.io/badge/Website openbitfun.com 6f42c1?style=flat square https //openbitfun.com/ ! License MIT https //img.shields.io/badge/License MIT yellow?style=flat square https //github.com/GCWing/BitFun/blob/main/LICENSE ! Platform https //img.shields.io/badge/platform Windows%20%7C%20macOS%20%7C%20Linux blue?style=flat square https //github.com/GCWing/BitFun </div What BitFun Is BitFun is a desktop grade Agent runtime Local Age |


## Key Files

### Manifests

- docs/sdlc-harness/README.md
- AGENTS.md
- BitFun-Installer/AGENTS.md
- tests/e2e/AGENTS.md
- src/apps/desktop/AGENTS.md
- src/crates/adapters/AGENTS.md
- src/crates/adapters/ai-adapters/AGENTS.md
- src/crates/adapters/api-layer/AGENTS.md
- src/crates/adapters/transport/AGENTS.md
- src/crates/adapters/webdriver/AGENTS.md
- src/crates/assembly/AGENTS.md
- src/crates/assembly/core/AGENTS.md
- src/crates/assembly/core/src/agentic/deep_review/AGENTS.md
- src/crates/assembly/core/src/agentic/execution/AGENTS.md
- src/crates/assembly/product-capabilities/AGENTS.md
- src/crates/contracts/AGENTS.md
- src/crates/contracts/core-types/AGENTS.md
- src/crates/contracts/events/AGENTS.md
- src/crates/contracts/product-domains/AGENTS.md
- src/crates/contracts/runtime-ports/AGENTS.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- BitFun-Installer/AGENTS.md
- tests/e2e/AGENTS.md
- src/apps/desktop/AGENTS.md
- src/crates/adapters/AGENTS.md
- src/crates/adapters/ai-adapters/AGENTS.md
- src/crates/adapters/api-layer/AGENTS.md
- src/crates/adapters/transport/AGENTS.md
- src/crates/adapters/webdriver/AGENTS.md
- src/crates/assembly/AGENTS.md
- src/crates/assembly/core/AGENTS.md
- src/crates/assembly/core/src/agentic/deep_review/AGENTS.md
- src/crates/assembly/core/src/agentic/execution/AGENTS.md
- src/crates/assembly/product-capabilities/AGENTS.md
- src/crates/contracts/AGENTS.md
- src/crates/contracts/core-types/AGENTS.md
- src/crates/contracts/events/AGENTS.md
- src/crates/contracts/product-domains/AGENTS.md
- src/crates/contracts/runtime-ports/AGENTS.md
- src/crates/execution/agent-runtime/AGENTS.md


### Agent Instruction Files

- AGENTS.md
- BitFun-Installer/AGENTS.md
- tests/e2e/AGENTS.md
- src/apps/desktop/AGENTS.md
- src/crates/adapters/AGENTS.md
- src/crates/adapters/ai-adapters/AGENTS.md
- src/crates/adapters/api-layer/AGENTS.md
- src/crates/adapters/transport/AGENTS.md
- src/crates/adapters/webdriver/AGENTS.md
- src/crates/assembly/AGENTS.md
- src/crates/assembly/core/AGENTS.md
- src/crates/assembly/core/src/agentic/deep_review/AGENTS.md
- src/crates/assembly/core/src/agentic/execution/AGENTS.md
- src/crates/assembly/product-capabilities/AGENTS.md
- src/crates/contracts/AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| src | 3515 |
| BitFun-Installer | 63 |
| tests | 62 |
| scripts | 47 |
| MiniApp | 37 |
| docs | 33 |
| .github | 11 |
| resources | 8 |
| .gitignore | 1 |
| .npmrc | 1 |
| .release-please-manifest.json | 1 |
| AGENTS-CN.md | 1 |
| AGENTS.md | 1 |
| Cargo.toml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 1068 |
| .rs | 1049 |
| .tsx | 465 |
| .scss | 295 |
| .md | 288 |
| .json | 177 |
| .xsd | 117 |
| .py | 53 |
| .js | 50 |
| .css | 44 |
| .mjs | 33 |
| .toml | 27 |
| .sse | 20 |
| .html | 16 |
| [no-ext] | 13 |
| .sh | 11 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
