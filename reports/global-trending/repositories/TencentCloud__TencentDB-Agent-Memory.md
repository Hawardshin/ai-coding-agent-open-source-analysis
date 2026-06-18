# TencentCloud/TencentDB-Agent-Memory

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/TencentCloud/TencentDB-Agent-Memory |
| local path | sources/TencentCloud__TencentDB-Agent-Memory |
| HEAD | ee76536 |
| stars/forks | 5871 / 506 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T09:01:08Z |
| trendScore / priorityScore | 165 / 466 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 500 | hermes-plugin/memory/memory_tencentdb/README.md, README.md, hermes-plugin/memory/memory_tencentdb/tests/test_gateway_shutdown_leak.py |
| RAG / retrieval / knowledge | 500 | hermes-plugin/memory/memory_tencentdb/README.md, README.md, scripts/migrate-sqlite-to-tcvdb/README.md |
| Database / data infrastructure | 380 | hermes-plugin/memory/memory_tencentdb/README.md, src/cli/README.md, README.md |
| AI agent / orchestration | 291 | hermes-plugin/memory/memory_tencentdb/README.md, README.md, package.json |
| Data / ML platform | 117 | hermes-plugin/memory/memory_tencentdb/README.md, src/cli/README.md, README.md |
| Developer tools / DX | 78 | src/cli/README.md, scripts/migrate-sqlite-to-tcvdb/README.md, package.json |
| Coding agent / software automation | 60 | README.md, CHANGELOG.md, index.ts |
| Security / supply chain | 30 | README.md, src/core/prompts/scene-extraction.ts, hermes-plugin/memory/memory_tencentdb/__init__.py |
| Observability / evaluation | 18 | README.md, scripts/install_hermes_memory_tencentdb.sh, scripts/memory-tencentdb-ctl.sh |
| Local LLM / inference | 7 | package.json, src/core/store/embedding.ts, src/offload/hooks/before-agent-start.ts |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 160 |
| manifests | 8 |
| docs | 15 |
| tests | 6 |
| ci/ops | 2 |
| spec artifacts | 7 |
| agent instruction files | 7 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | ============ Configuration Parameters ============ | Agents remember,Humans innovate. / ✨ Highlights / Overview / Core Technology: Reject Flat Storage, Embrace Layering and Symbolization / 1. Memory Layering: Progressive Disclosure with Heterogeneous Storage / 2. Symbolic Memory: Maximum Semantics in Minimum Symbols (Mermaid Canvas) / Quick Start / 🎬 Demos / 1. OpenClaw / 1.1 Install the plugin | <div align="center" <img src="./assets/images/logo.png" alt="TencentDB Agent Memory" width="880" / Agents remember,Humans innovate. ! npm https //img.shields.io/npm/v/@tencentdb agent memory/memory tencentdb?color=blue https //www.npmjs.com/package/@tencentdb agent memory/memory tencentdb ! License MIT https //img.shields.io/badge/License MIT green.svg ./LICENSE ! Node https //img.shields.io/badge/node %3E=22.16 brightgreen https //nodejs.org/ ! OpenClaw https //img.shields.io/badge/OpenClaw %3E=2026.3.13 orange https //github.com/openclaw/openclaw ! Hermes https //img.shields.io/badge/Hermes Gateway 7B61FF https //hermes agent.nousresearch.com/docs/ ! Discord https //img.shields.io/badge/Di |


## Key Files

### Manifests

- hermes-plugin/memory/memory_tencentdb/README.md
- src/cli/README.md
- README.md
- scripts/migrate-sqlite-to-tcvdb/README.md
- scripts/read-local-memory/tsconfig.json
- package.json
- scripts/export-tencent-vdb/tsconfig.json
- scripts/migrate-sqlite-to-tcvdb/tsconfig.json


### Spec / Docs / Prompt Artifacts

- src/core/prompts/l1-dedup.ts
- src/core/prompts/l1-extraction.ts
- src/core/prompts/persona-generation.ts
- src/core/prompts/scene-extraction.ts
- src/offload/local-llm/prompts/l1-prompt.ts
- src/offload/local-llm/prompts/l15-prompt.ts
- src/offload/local-llm/prompts/l2-prompt.ts


### Agent Instruction Files

- src/core/prompts/l1-dedup.ts
- src/core/prompts/l1-extraction.ts
- src/core/prompts/persona-generation.ts
- src/core/prompts/scene-extraction.ts
- src/offload/local-llm/prompts/l1-prompt.ts
- src/offload/local-llm/prompts/l15-prompt.ts
- src/offload/local-llm/prompts/l2-prompt.ts


## Top Directories

| dir | count |
| --- | --- |
| src | 105 |
| scripts | 20 |
| hermes-plugin | 8 |
| .github | 5 |
| bin | 3 |
| docker | 2 |
| .gitignore | 1 |
| .npmignore | 1 |
| CHANGELOG.md | 1 |
| CONTRIBUTING_CN.md | 1 |
| CONTRIBUTING.md | 1 |
| index.ts | 1 |
| LICENSE | 1 |
| openclaw.plugin.json | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 115 |
| .md | 15 |
| .sh | 7 |
| .py | 6 |
| .json | 5 |
| .yml | 4 |
| .mjs | 3 |
| [no-ext] | 3 |
| .hermes | 1 |
| .yaml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
