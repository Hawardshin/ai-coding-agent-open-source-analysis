# NickCirv/engram

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/NickCirv/engram |
| local path | sources/NickCirv__engram |
| HEAD | 1547c23 |
| stars/forks | 133 / 13 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-16T08:02:44Z |
| trendScore / priorityScore | 133 / 420 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Coding agent / software automation | 500 | docs/demos/README.md, docs/integrations/README.md, docs/plugins/README.md |
| AI agent / orchestration | 427 | docs/demos/hf/AGENTS.md, docs/demos/README.md, docs/adr/README.md |
| MCP / agent interoperability | 394 | docs/integrations/README.md, docs/plugins/README.md, README.md |
| Developer tools / DX | 351 | docs/demos/hf/AGENTS.md, docs/demos/README.md, docs/integrations/README.md |
| Observability / evaluation | 81 | docs/adr/README.md, docs/integrations/README.md, demo/README.md |
| Database / data infrastructure | 78 | docs/demos/README.md, README.md, extensions/vscode/README.md |
| RAG / retrieval / knowledge | 66 | docs/demos/README.md, README.md, adapters/continue/README.md |
| Security / supply chain | 54 | README.md, docs/engram-integration-guide.html, docs/engram-sentinel-ecosystem.html |
| Cloud native / infrastructure | 25 | docs/engram-integration-guide.html, docs/engram-user-manual.html, docs/FRONTIER.md |
| Data / ML platform | 14 | docs/demos/showcase.html, docs/install.html, docs/specs/ecp-v0.1.md |
| Local LLM / inference | 1 | docs/specs/engram-v2-roadmap.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 332 |
| manifests | 20 |
| docs | 83 |
| tests | 106 |
| ci/ops | 1 |
| spec artifacts | 21 |
| agent instruction files | 3 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | EngramX — the cached context spine for AI coding agents. | Try in 30 seconds (no install) / Why this exists, May 2026 / Install in 30 seconds / 1. CLI (recommended starting point — works in every supported IDE) / 2. Cursor / VS Code extension (live on OpenVSX) / 3. Continue.dev users / EngramX — the cached context spine for AI coding agents. / One command to everything / I'm not a developer — what does this actually do? / Proof, not promises | <p align="center" <img src="assets/banner v3.png" alt="engramx — the universal context spine for AI coding tools v4.4.0 'Curve' " width="100%" </p <p align="center" <strong Engram makes your AI coding agent stop re reading the same files — and stop repeating mistakes your repo already fixed.</strong <br <sub One install. 8 IDEs. Your agent works from a structural map of your repo instead of re reading whole files — so sessions run longer before the context wall — and <strong bi temporal mistakes are auto captured from your git revert history</strong , so it stops repeating fixes that already failed. Context packets run ~50–90% smaller per file structural size, not a bill saving — run <code e |


## Key Files

### Manifests

- docs/demos/hf/AGENTS.md
- docs/demos/README.md
- docs/adr/README.md
- docs/integrations/README.md
- docs/plugins/README.md
- docs/demos/hf/CLAUDE.md
- demo/README.md
- bench/README.md
- README.md
- tests/fixtures/hook-payloads/README.md
- adapters/continue/README.md
- extensions/vscode/README.md
- plugins/anthropic-marketplace/engram/README.md
- CLAUDE.md
- package.json
- tsconfig.json
- adapters/continue/package.json
- adapters/continue/tsconfig.json
- extensions/vscode/package.json
- extensions/vscode/tsconfig.json


### Spec / Docs / Prompt Artifacts

- docs/demos/hf/AGENTS.md
- docs/adr/README.md
- docs/demos/hf/CLAUDE.md
- CLAUDE.md
- docs/adr/0008-subagent-context-broker.md
- docs/adr/0009-recall-coverage-benchmark.md
- docs/adr/0006-honest-before-after-demo.md
- docs/PLAN.md
- docs/specs/2026-04-13-context-spine-design.md
- docs/specs/ecp-v0.1.md
- docs/specs/engram-v2-roadmap.md
- docs/superpowers/specs/2026-04-24-v3.0-spine-implementation.md
- docs/adr/0001-grep-symbol-intercept.md
- docs/adr/0002-session-level-bench.md
- docs/adr/0003-same-session-read-dedup.md
- docs/adr/0004-grep-richer-find-usages.md
- docs/adr/0005-bash-grep-interception.md
- docs/adr/0007-grep-never-worse-gate.md
- docs/adr/0010-compaction-session-ledger.md
- docs/adr/0011-defer-bash-explore-interception.md


### Agent Instruction Files

- docs/demos/hf/AGENTS.md
- docs/demos/hf/CLAUDE.md
- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| src | 105 |
| tests | 102 |
| docs | 57 |
| bench | 19 |
| adapters | 7 |
| extensions | 7 |
| plugins | 7 |
| scripts | 5 |
| .github | 3 |
| demo | 2 |
| .cursorrules | 1 |
| .gitignore | 1 |
| .gitleaks.toml | 1 |
| assets | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 204 |
| .md | 67 |
| .json | 19 |
| .yaml | 10 |
| [no-ext] | 8 |
| .html | 7 |
| .mjs | 5 |
| .sh | 3 |
| .cast | 2 |
| .vtt | 2 |
| .csv | 1 |
| .py | 1 |
| .svg | 1 |
| .toml | 1 |
| .yml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
