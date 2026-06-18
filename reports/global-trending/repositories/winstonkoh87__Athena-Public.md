# winstonkoh87/Athena-Public

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/winstonkoh87/Athena-Public |
| local path | sources/winstonkoh87__Athena-Public |
| HEAD | 6be8f38 |
| stars/forks | 506 / 69 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T00:37:07Z |
| trendScore / priorityScore | 148 / 437 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | examples/agents/README.md, examples/hooks/README.md, examples/protocols/README.md |
| RAG / retrieval / knowledge | 252 | examples/case_studies/README.md, examples/protocols/README.md, examples/quickstart/README.md |
| Developer tools / DX | 157 | examples/quickstart/README.md, examples/scripts/README.md, README.md |
| Coding agent / software automation | 92 | AGENTS.md, README.md, docs/CLI.md |
| Security / supply chain | 90 | examples/case_studies/README.md, README.md, docs/MCP_SERVER.md |
| MCP / agent interoperability | 74 | AGENTS.md, README.md, docs/CLI.md |
| Data / ML platform | 70 | examples/case_studies/README.md, .agent/config/README.md, AGENTS.md |
| Database / data infrastructure | 41 | AGENTS.md, README.md, docs/GRAPHRAG.md |
| Frontend / app framework | 34 | .agent/config/README.md, examples/protocols/workflow/WFL-116-agentic-sdlc.md, examples/protocols/workflow/WFL-416-agent-swarm.md |
| Cloud native / infrastructure | 24 | README.md, docs/VECTORRAG.md, docs/YOUR_FIRST_AGENT.md |
| Observability / evaluation | 24 | examples/protocols/README.md, examples/scripts/_archive/nurse_security.py, examples/scripts/evaluator.py |
| Local LLM / inference | 13 | examples/protocols/memory/MEM-114-graph-memory-architecture.md, examples/scripts/index_graphrag.py, examples/scripts/lightrag_wrapper.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 869 |
| manifests | 14 |
| docs | 520 |
| tests | 2 |
| ci/ops | 6 |
| spec artifacts | 7 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Project Athena | Project Athena / The Problem / Why Athena? / The Human Augmentation Thesis / What Athena Actually Does With Your Problem / "…But doesn't ChatGPT / Gemini / Claude already do this?" / "How is Athena different from...?" / ⚡ Quickstart / 1. Clone the repo / 2. Set up a virtual environment *(recommended)* | ! Athena Banner ./docs/athena banner.png <div align="center" Project Athena Your memory. Your machine. Any model. Open source cognitive augmentation layer that gives you persistent memory, structured reasoning, and full data ownership — across ChatGPT, Claude, Gemini, and any model you switch to next. Platforms forget. Athena doesn't. ! GitHub Stars https //img.shields.io/github/stars/winstonkoh87/Athena Public?style=for the badge&logo=github&color=10b981 https //github.com/winstonkoh87/Athena Public/stargazers ! License MIT https //img.shields.io/badge/License MIT yellow.svg?style=for the badge LICENSE ! Version https //img.shields.io/badge/v9.9.2 10b981?style=for the badge&label=Version do |


## Key Files

### Manifests

- examples/agents/README.md
- examples/case_studies/README.md
- examples/hooks/README.md
- examples/protocols/README.md
- examples/quickstart/README.md
- examples/scripts/README.md
- examples/skills/README.md
- docs/research/README.md
- .agent/config/README.md
- AGENTS.md
- README.md
- tools/README.md
- pyproject.toml
- docs/REQUIREMENTS.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- docs/ARCHITECTURE.md
- docs/REQUIREMENTS.md
- examples/workflows/plan.md
- examples/workflows/spec.md
- .agent/workflows/plan.md
- community/ROADMAP.md


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| examples | 548 |
| src | 89 |
| docs | 88 |
| scripts | 33 |
| .agent | 26 |
| supabase | 24 |
| .github | 18 |
| Athena-Public.wiki | 7 |
| wiki | 7 |
| .context | 3 |
| community | 2 |
| tests | 2 |
| tools | 2 |
| .athena_root | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .md | 520 |
| .py | 280 |
| .sql | 23 |
| .sh | 12 |
| .yml | 9 |
| [no-ext] | 9 |
| .txt | 3 |
| .yaml | 3 |
| .html | 2 |
| .json | 2 |
| .toml | 2 |
| .example | 1 |
| .sandbox | 1 |
| .ts | 1 |
| .xml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
