# Goldentrii/AgentRecall-MCP

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Goldentrii/AgentRecall-MCP |
| local path | sources/Goldentrii__AgentRecall-MCP |
| HEAD | b6808dc |
| stars/forks | 303 / 52 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T19:18:54Z |
| trendScore / priorityScore | 142 / 467 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | packages/cli/README.md, packages/mcp-server/README.md, AGENTS.md |
| Developer tools / DX | 500 | packages/cli/README.md, packages/mcp-server/README.md, AGENTS.md |
| MCP / agent interoperability | 500 | packages/cli/README.md, packages/mcp-server/README.md, AGENTS.md |
| Observability / evaluation | 263 | docs/IMPLEMENTER-PROMPT.md, eval/loops/loop-1/prompts/orchestrator-brief.md, eval/loops/loop-1/prompts/reviewer.md |
| RAG / retrieval / knowledge | 255 | packages/cli/README.md, packages/mcp-server/README.md, README.md |
| Coding agent / software automation | 191 | packages/cli/README.md, packages/mcp-server/README.md, AGENTS.md |
| Database / data infrastructure | 132 | packages/cli/README.md, packages/mcp-server/README.md, README.md |
| Data / ML platform | 75 | packages/cli/README.md, packages/mcp-server/README.md, README.md |
| Cloud native / infrastructure | 59 | packages/cli/README.md, packages/mcp-server/README.md, README.md |
| Security / supply chain | 42 | packages/cli/README.md, packages/mcp-server/README.md, README.md |
| Frontend / app framework | 40 | packages/cli/README.md, packages/mcp-server/README.md, README.md |
| Local LLM / inference | 4 | docs/sdk-design.md, benchmark/v3316-benchmark.mjs |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 361 |
| manifests | 17 |
| docs | 131 |
| tests | 35 |
| ci/ops | 1 |
| spec artifacts | 26 |
| agent instruction files | 22 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Claude Code | What & Why · 什么和为什么 / 5 Memory Layers · 五层记忆模型 / The Session Loop · 会话循环 / Already Using Another Memory System? · 已经用过别的？ / Quick Start · 快速开始 / MCP Server — for AI agents / Claude Code / Cursor — .cursor/mcp.json / VS Code — .vscode/mcp.json / Windsurf — ~/.codeium/windsurf/mcp_config.json | <h1 align="center" AgentRecall</h1 <p align="center" <strong Your agent doesn't just remember. It learns how you think.</strong </p <p align="center" <strong 你的 agent 不只是记得。它在学你怎么想。</strong </p <p align="center" Every correction saved is a mistake never repeated. Every insight compounded is tokens never wasted rebuilding context.<br/ 每一次纠正都是不会重复的错误。每一次复合都是不会重建的上下文。</p <p align="center" Persistent, compounding memory + automatic correction capture. MCP server + SDK + CLI.</p <p align="center" <a href="https //t.me/+ywZwoHrg3AM0NDVi" <img src="https //img.shields.io/badge/Telegram Community 2CA5E0?style=flat square&logo=telegram" alt="Telegram Community" </a <a href="https //www.npmjs.com/pack |


## Key Files

### Manifests

- packages/cli/README.md
- packages/mcp-server/README.md
- AGENTS.md
- eval/seeds/migration/CLAUDE.md
- README.md
- packages/core/README.md
- packages/sdk/README.md
- packages/cli/package.json
- packages/cli/tsconfig.json
- packages/mcp-server/package.json
- packages/mcp-server/tsconfig.json
- package.json
- packages/core/package.json
- packages/core/tsconfig.json
- packages/sdk/package.json
- packages/sdk/tsconfig.json
- tsconfig.base.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- eval/seeds/migration/CLAUDE.md
- eval/loops/loop-1/prompts/orchestrator-brief.md
- eval/loops/loop-1/prompts/reviewer.md
- eval/loops/loop-1/prompts/verifier-eval.md
- eval/loops/loop-1/prompts/worker-a-cli.md
- eval/loops/loop-1/prompts/worker-b-core.md
- eval/loops/loop-1/prompts/worker-c-coldstart.md
- eval/loops/loop-1/prompts/worker-d-search.md
- eval/loops/loop-2/prompts/verifier-2.md
- eval/loops/loop-2/prompts/worker-a2-naming.md
- eval/loops/loop-2/prompts/worker-b2-autoroute.md
- eval/loops/loop-2/prompts/worker-c2-bootstrap.md
- eval/loops/loop-2/prompts/worker-d2-cli-help.md
- eval/loops/loop-3/prompts/verifier-3-full-eval.md
- eval/loops/loop-3/prompts/worker-a3.md
- eval/loops/loop-3/prompts/worker-b3.md
- eval/loops/loop-3/prompts/worker-c3.md
- eval/prompts/agent-cold.md
- eval/prompts/agent-mid.md


### Agent Instruction Files

- AGENTS.md
- eval/seeds/migration/CLAUDE.md
- eval/loops/loop-1/prompts/orchestrator-brief.md
- eval/loops/loop-1/prompts/reviewer.md
- eval/loops/loop-1/prompts/verifier-eval.md
- eval/loops/loop-1/prompts/worker-a-cli.md
- eval/loops/loop-1/prompts/worker-b-core.md
- eval/loops/loop-1/prompts/worker-c-coldstart.md
- eval/loops/loop-1/prompts/worker-d-search.md
- eval/loops/loop-2/prompts/verifier-2.md
- eval/loops/loop-2/prompts/worker-a2-naming.md
- eval/loops/loop-2/prompts/worker-b2-autoroute.md
- eval/loops/loop-2/prompts/worker-c2-bootstrap.md
- eval/loops/loop-2/prompts/worker-d2-cli-help.md
- eval/loops/loop-3/prompts/verifier-3-full-eval.md


## Top Directories

| dir | count |
| --- | --- |
| packages | 204 |
| eval | 49 |
| docs | 37 |
| agent-prompts | 16 |
| scripts | 16 |
| wiki | 9 |
| benchmark | 7 |
| commands | 5 |
| .github | 3 |
| .gitignore | 1 |
| AGENTS.md | 1 |
| CONTRIBUTING.md | 1 |
| integrations | 1 |
| LICENSE | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 159 |
| .md | 130 |
| .mjs | 39 |
| .json | 11 |
| .woff2 | 11 |
| .html | 4 |
| [no-ext] | 3 |
| .sql | 2 |
| .css | 1 |
| .yml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
