# joshuaswarren/remnic

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/joshuaswarren/remnic |
| local path | sources/joshuaswarren__remnic |
| HEAD | 37e9d68 |
| stars/forks | 87 / 15 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T13:54:00Z |
| trendScore / priorityScore | 145 / 476 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | examples/coding-agent-memory-demo/README.md, docs/README.md, evals/README.md |
| Developer tools / DX | 435 | examples/coding-agent-memory-demo/README.md, docs/README.md, evals/README.md |
| Observability / evaluation | 423 | docs/README.md, evals/README.md, packages/bench/src/judges/sealed-prompts/README.md |
| RAG / retrieval / knowledge | 362 | docs/README.md, evals/README.md, AGENTS.md |
| Coding agent / software automation | 317 | examples/coding-agent-memory-demo/README.md, docs/README.md, packages/remnic-cli/README.md |
| MCP / agent interoperability | 218 | examples/coding-agent-memory-demo/README.md, docs/README.md, evals/README.md |
| Data / ML platform | 165 | docs/README.md, evals/README.md, packages/import-supermemory/README.md |
| Cloud native / infrastructure | 162 | docs/README.md, packages/import-supermemory/README.md, packages/remnic-cli/README.md |
| Security / supply chain | 102 | docs/requirements/README.md, packages/import-supermemory/README.md, packages/remnic-cli/README.md |
| Database / data infrastructure | 67 | docs/requirements/README.md, AGENTS.md, README.md |
| Local LLM / inference | 37 | docs/README.md, AGENTS.md, README.md |
| Frontend / app framework | 17 | docs/superpowers/plans/2026-04-18-ingestion-benchmarks.md, packages/bench-ui/package.json, packages/bench-ui/tsconfig.json |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2410 |
| manifests | 40 |
| docs | 330 |
| tests | 939 |
| ci/ops | 15 |
| spec artifacts | 36 |
| agent instruction files | 12 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Remnic | Remnic / Why this matters / OpenAI / Codex / MCP / Engram -> Remnic / Support Remnic / The Problem / The Solution / Memory or context substrate? Both. / Quick install (OpenClaw) / 1. Install the plugin package | Remnic ! npm version https //img.shields.io/npm/v/@remnic/cli https //www.npmjs.com/package/@remnic/cli ! License MIT https //img.shields.io/badge/License MIT blue.svg LICENSE ! Sponsor https //img.shields.io/badge/Sponsor %E2%9D%A4 pink https //github.com/sponsors/joshuaswarren Open source memory and context for user aware agents. Remnic is for agents that need to understand the people they work with over time. Remnic helps AI agents understand the people they work with their preferences, projects, constraints, decisions, patterns, and definition of good. The goal is simple agents that remember responsibly, retrieve the right context, and ask fewer unnecessary questions. Remnic is not just |


## Key Files

### Manifests

- examples/coding-agent-memory-demo/README.md
- docs/extensions/example-github-issues/README.md
- docs/README.md
- evals/README.md
- docs/ideas/README.md
- docs/plans/README.md
- docs/requirements/README.md
- packages/bench/src/benchmarks/remnic/assistant-meeting-prep/README.md
- packages/bench/src/benchmarks/remnic/assistant-morning-brief/README.md
- packages/bench/src/benchmarks/remnic/assistant-next-best-action/README.md
- packages/bench/src/benchmarks/remnic/assistant-synthesis/README.md
- packages/bench/src/judges/sealed-prompts/README.md
- packages/import-supermemory/README.md
- packages/remnic-cli/README.md
- AGENTS.md
- src/AGENTS.md
- README.md
- tests/compat-fixtures/README.md
- integrations/amb/README.md
- packages/belief-ledger/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- src/AGENTS.md
- CLAUDE.md
- docs/superpowers/specs/2026-04-18-ingestion-benchmarks-design.md
- prompts/consolidation.prompt.md
- prompts/day_summary.prompt.md
- prompts/extraction_judge.prompt.md
- prompts/extraction.prompt.md
- docs/architecture/memory-extension-publishers.md
- docs/architecture/memory-extensions.md
- docs/architecture/memory-lifecycle.md
- docs/architecture/retrieval-pipeline.md
- docs/architecture/shared-memory.md
- .cursor/BUGBOT.md
- docs/ARCHITECTURE.md
- docs/superpowers/specs/2026-04-17-bench-suite-design.md
- docs/superpowers/specs/2026-04-17-bench-suite-github-issue.md
- docs/architecture/auth-model.md
- docs/architecture/binary-lifecycle.md
- docs/architecture/citations.md


### Agent Instruction Files

- AGENTS.md
- src/AGENTS.md
- CLAUDE.md
- prompts/consolidation.prompt.md
- prompts/day_summary.prompt.md
- prompts/extraction_judge.prompt.md
- prompts/extraction.prompt.md
- .cursor/BUGBOT.md
- packages/plugin-claude-code/.cursor/BUGBOT.md
- packages/plugin-codex/.cursor/BUGBOT.md
- packages/plugin-openclaw/.cursor/BUGBOT.md
- packages/remnic-core/.cursor/BUGBOT.md


## Top Directories

| dir | count |
| --- | --- |
| packages | 1238 |
| tests | 519 |
| src | 219 |
| docs | 207 |
| scripts | 60 |
| .changeset | 39 |
| evals | 27 |
| .github | 22 |
| integrations | 22 |
| dashboard | 7 |
| examples | 4 |
| prompts | 4 |
| .agents | 3 |
| .githooks | 2 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 1764 |
| .md | 327 |
| .json | 106 |
| .mjs | 63 |
| .py | 33 |
| .tsx | 25 |
| .sh | 23 |
| .yml | 21 |
| [no-ext] | 13 |
| .js | 8 |
| .cjs | 5 |
| .txt | 5 |
| .log | 4 |
| .html | 3 |
| .yaml | 3 |
| .css | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
