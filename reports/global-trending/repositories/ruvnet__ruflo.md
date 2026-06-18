# ruvnet/ruflo

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/ruvnet/ruflo |
| local path | sources/ruvnet__ruflo |
| HEAD | f8fbb00 |
| stars/forks | 59994 / 6954 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T23:38:59Z |
| trendScore / priorityScore | 215 / 598 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | .agents/README.md, v3/@claude-flow/cli/__tests__/README.md, docs/federation/README.md |
| Developer tools / DX | 500 | .agents/README.md, v3/@claude-flow/cli/__tests__/README.md, docs/federation/README.md |
| MCP / agent interoperability | 500 | .agents/README.md, v3/@claude-flow/cli/__tests__/README.md, docs/federation/README.md |
| Security / supply chain | 500 | docs/federation/README.md, v3/docs/adr/README.md, v3/docs/ddd/coherence-engine/README.md |
| Coding agent / software automation | 342 | v3/@claude-flow/plugins/examples/ruvector/README.md, v3/docs/examples/dossiers/README.md, .agents/README.md |
| RAG / retrieval / knowledge | 283 | v3/@claude-flow/plugins/examples/ruvector/README.md, v3/@claude-flow/cli/__tests__/README.md, v3/docs/ddd/coherence-engine/README.md |
| Observability / evaluation | 222 | v3/@claude-flow/plugins/examples/ruvector/README.md, plugins/ruflo-ruvector/README.md, plugins/ruflo-security-audit/README.md |
| Cloud native / infrastructure | 129 | v3/@claude-flow/plugins/examples/ruvector/README.md, docs/federation/README.md, v3/docs/ddd/coherence-engine/README.md |
| Data / ML platform | 117 | docs/federation/README.md, plugins/ruflo-agentdb/README.md, plugins/ruflo-rag-memory/README.md |
| Database / data infrastructure | 104 | v3/@claude-flow/plugins/examples/ruvector/README.md, plugins/ruflo-rag-memory/README.md, plugins/ruflo-ruvector/README.md |
| Local LLM / inference | 35 | plugins/ruflo-ruvllm/README.md, v3/@claude-flow/cli/README.md, v3/plugins/healthcare-clinical/README.md |
| Frontend / app framework | 30 | v3/@claude-flow/cli/README.md, .claude-plugin/README.md, README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Rust |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 4707 |
| manifests | 40 |
| docs | 1797 |
| tests | 453 |
| ci/ops | 47 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Ruflo | Ruflo / Why Ruflo? / What Ruflo Does / Quick Start / Path A — Claude Code Plugins (lite, slash commands only) / Add the marketplace / Install core + any plugins you need / CLI Install / One-line install (POSIX shells only — see Windows note below) / Interactive setup wizard — runs identically on every platform | <div align="center" ! Ruflo Banner ruflo/assets/ruflo small.jpeg https //cognitum.one/agentic engineering ! Try the UI Beta — flo.ruv.io https //img.shields.io/badge/ Try the UI Beta flo.ruv.io 6366f1?style=for the badge&logoColor=white&logo=svelte https //flo.ruv.io/ ! Goal Planner — goal.ruv.io https //img.shields.io/badge/ Goal Planner goal.ruv.io 8b5cf6?style=for the badge&logoColor=white&logo=react https //goal.ruv.io/ ! Live Agents — goal.ruv.io/agents https //img.shields.io/badge/ Live Agents goal.ruv.io%2Fagents 10b981?style=for the badge&logoColor=white&logo=react https //goal.ruv.io/agents ! npm version ruflo https //img.shields.io/npm/v/ruflo?label=ruflo&style=for the badge&logo=n |


## Key Files

### Manifests

- v3/@claude-flow/plugins/examples/ruvector/README.md
- v3/docs/examples/dossiers/README.md
- .agents/README.md
- v3/@claude-flow/cli/__tests__/README.md
- docs/federation/README.md
- docs/validation/README.md
- v3/docs/adr/README.md
- v3/docs/ddd/coherence-engine/README.md
- v3/docs/ddd/quality-engineering/README.md
- .claude/commands/agents/README.md
- .claude/commands/memory/README.md
- plugins/ruflo-agent/README.md
- plugins/ruflo-agentdb/README.md
- plugins/ruflo-rag-memory/README.md
- plugins/ruflo-ruvector/README.md
- plugins/ruflo-ruvllm/README.md
- plugins/ruflo-security-audit/README.md
- v3/@claude-flow/cli-core/README.md
- v3/@claude-flow/cli/.claude/commands/agents/README.md
- v3/@claude-flow/cli/.claude/commands/analysis/README.md


### Spec / Docs / Prompt Artifacts

- v3/docs/adr/README.md
- .claude/commands/agents/README.md
- .claude/commands/memory/README.md
- v3/@claude-flow/cli/.claude/commands/agents/README.md
- v3/@claude-flow/cli/.claude/commands/analysis/README.md
- v3/@claude-flow/cli/.claude/commands/automation/README.md
- v3/@claude-flow/cli/.claude/commands/coordination/README.md
- v3/@claude-flow/cli/.claude/commands/github/README.md
- v3/@claude-flow/cli/.claude/commands/hive-mind/README.md
- v3/@claude-flow/cli/.claude/commands/hooks/README.md
- v3/@claude-flow/cli/.claude/commands/memory/README.md
- v3/@claude-flow/cli/.claude/commands/monitoring/README.md
- v3/@claude-flow/cli/.claude/commands/optimization/README.md
- v3/@claude-flow/cli/.claude/commands/pair/README.md
- v3/@claude-flow/cli/.claude/commands/swarm/README.md
- v3/@claude-flow/cli/.claude/commands/training/README.md
- v3/@claude-flow/cli/.claude/commands/workflows/README.md
- v3/@claude-flow/cli/.claude/helpers/README.md
- v3/@claude-flow/cli/.claude/skills/dual-mode/README.md
- v3/@claude-flow/mcp/.claude/commands/analysis/README.md


### Agent Instruction Files

- .claude/commands/agents/README.md
- .claude/commands/memory/README.md
- v3/@claude-flow/cli/.claude/commands/agents/README.md
- v3/@claude-flow/cli/.claude/commands/analysis/README.md
- v3/@claude-flow/cli/.claude/commands/automation/README.md
- v3/@claude-flow/cli/.claude/commands/coordination/README.md
- v3/@claude-flow/cli/.claude/commands/github/README.md
- v3/@claude-flow/cli/.claude/commands/hive-mind/README.md
- v3/@claude-flow/cli/.claude/commands/hooks/README.md
- v3/@claude-flow/cli/.claude/commands/memory/README.md
- v3/@claude-flow/cli/.claude/commands/monitoring/README.md
- v3/@claude-flow/cli/.claude/commands/optimization/README.md
- v3/@claude-flow/cli/.claude/commands/pair/README.md
- v3/@claude-flow/cli/.claude/commands/swarm/README.md
- v3/@claude-flow/cli/.claude/commands/training/README.md


## Top Directories

| dir | count |
| --- | --- |
| v3 | 2836 |
| plugins | 531 |
| ruflo | 516 |
| .claude | 369 |
| .agents | 144 |
| docs | 107 |
| scripts | 89 |
| tests | 31 |
| .github | 27 |
| verification | 16 |
| .claude-plugin | 13 |
| plugin | 4 |
| .harness | 3 |
| bin | 3 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 1787 |
| .md | 1690 |
| .json | 340 |
| .mjs | 193 |
| .sh | 169 |
| .yaml | 85 |
| .svelte | 84 |
| .tsx | 78 |
| .js | 77 |
| [no-ext] | 39 |
| .yml | 37 |
| .rs | 20 |
| .cjs | 19 |
| .svg | 17 |
| .toml | 13 |
| .txt | 13 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
