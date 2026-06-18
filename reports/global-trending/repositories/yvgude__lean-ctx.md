# yvgude/lean-ctx

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/yvgude/lean-ctx |
| local path | sources/yvgude__lean-ctx |
| HEAD | 40098dc |
| stars/forks | 2753 / 277 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-17T22:29:37Z |
| trendScore / priorityScore | 153 / 501 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | docs/comparisons/README.md, docs/guides/README.md, docs/reference/README.md |
| Coding agent / software automation | 422 | docs/README.md, docs/comparisons/README.md, docs/guides/README.md |
| MCP / agent interoperability | 410 | docs/README.md, docs/comparisons/README.md, docs/guides/README.md |
| Developer tools / DX | 329 | docs/README.md, docs/comparisons/README.md, docs/guides/README.md |
| Security / supply chain | 194 | docs/README.md, docs/guides/README.md, docs/reference/README.md |
| RAG / retrieval / knowledge | 152 | docs/comparisons/README.md, docs/guides/README.md, clients/rust/lean-ctx-client/README.md |
| Observability / evaluation | 148 | docs/README.md, docs/comparisons/README.md, docs/reference/README.md |
| Cloud native / infrastructure | 128 | docs/README.md, docs/guides/README.md, docs/reference/README.md |
| Data / ML platform | 73 | bench/agent-task/README.md, AGENTS.md, README.md |
| Database / data infrastructure | 68 | docs/reference/README.md, AGENTS.md, README.md |
| Frontend / app framework | 42 | rust/README.md, cookbook/examples/knowledge-graph-explorer/package.json, cookbook/examples/knowledge-graph-explorer/tsconfig.json |
| Local LLM / inference | 2 | docs/comparisons/vs-claude-context.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Java/Kotlin |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1792 |
| manifests | 40 |
| docs | 199 |
| tests | 224 |
| ci/ops | 12 |
| spec artifacts | 14 |
| agent instruction files | 5 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | 1) Install (pick one) | **Control what your AI can see.** / Why developers use LeanCTX / What it does — the four dimensions of context / 1. Compression — input efficiency / 2. Routing — the right fidelity per read / 3. Memory — context that persists / 4. Verification — control what reaches the model / Where it's going / How it works (30 seconds) / Get started (60 seconds) | <div align="center" <pre ██╗ ███████╗ █████╗ ███╗ ██╗ ██████╗████████╗██╗ ██╗ ██║ ██╔════╝██╔══██╗████╗ ██║ ██╔════╝╚══██╔══╝╚██╗██╔╝ ██║ █████╗ ███████║██╔██╗ ██║ ██║ ██║ ╚███╔╝ ██║ ██╔══╝ ██╔══██║██║╚██╗██║ ██║ ██║ ██╔██╗ ███████╗███████╗██║ ██║██║ ╚████║ ╚██████╗ ██║ ██╔╝ ██╗ ╚══════╝╚══════╝╚═╝ ╚═╝╚═╝ ╚═══╝ ╚═════╝ ╚═╝ ╚═╝ ╚═╝ </pre Control what your AI can see. LeanCTX — Lean Context Intelligence for AI agents LeanCTX — short for Lean Context — is the context intelligence layer for AI agents. It runs as a single local binary between your agents and your code, shell and data it decides what they read, remembers what they learn, guards what they touch — and proves what they save with a si |


## Key Files

### Manifests

- cookbook/examples/autoupdate/README.md
- docs/README.md
- docs/comparisons/README.md
- docs/contracts/ocp/README.md
- docs/guides/README.md
- docs/reference/README.md
- bench/agent-task/r2/README.md
- bench/agent-task/README.md
- clients/python/README.md
- clients/rust/lean-ctx-client/README.md
- rust/examples/CLAUDE.md
- AGENTS.md
- rust/AGENTS.md
- cookbook/README.md
- lean/README.md
- README.md
- rust/README.md
- vscode-extension/README.md
- cookbook/sdk/README.md
- packages/chrome-lean-ctx/README.md


### Spec / Docs / Prompt Artifacts

- rust/examples/CLAUDE.md
- AGENTS.md
- rust/AGENTS.md
- rust/CLAUDE.md
- rust/src/templates/CLAUDE.md
- bench/agent-task/requirements.txt
- docs/specs/context-package-v1.md
- docs/specs/context-package-v1.schema.json
- docs/specs/context-package-v2.md
- docs/specs/context-package-v2.schema.json
- bench/agent-task/PROMPT.md
- ARCHITECTURE.md
- .kiro/steering/lean-ctx.md
- rust/.kiro/steering/lean-ctx.md


### Agent Instruction Files

- rust/examples/CLAUDE.md
- AGENTS.md
- rust/AGENTS.md
- rust/CLAUDE.md
- rust/src/templates/CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| rust | 1310 |
| packages | 132 |
| docs | 126 |
| cookbook | 40 |
| clients | 31 |
| lean | 19 |
| .github | 18 |
| bench | 18 |
| vscode-extension | 16 |
| discord-faq | 11 |
| marketing | 10 |
| benchmark | 7 |
| scripts | 5 |
| demo | 4 |


## Extension Distribution

| ext | count |
| --- | --- |
| .rs | 1176 |
| .md | 187 |
| .kt | 73 |
| .snap | 57 |
| .json | 51 |
| .ts | 33 |
| .js | 32 |
| .py | 32 |
| [no-ext] | 29 |
| .toml | 25 |
| .sh | 14 |
| .yml | 13 |
| .lean | 12 |
| .tape | 6 |
| .html | 5 |
| .txt | 5 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
