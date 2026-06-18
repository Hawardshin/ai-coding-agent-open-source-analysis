# MervinPraison/PraisonAI

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/MervinPraison/PraisonAI |
| local path | sources/MervinPraison__PraisonAI |
| HEAD | 846568c |
| stars/forks | 8173 / 1263 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T19:13:07Z |
| trendScore / priorityScore | 203 / 559 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | examples/mcp_server/README.md, examples/python/eval/README.md, examples/python/tools/exa-tool/rag_examples/agentic_rag_gpt5/README.md |
| Developer tools / DX | 439 | examples/mcp_server/README.md, examples/mcp/README.md, examples/python/eval/README.md |
| Observability / evaluation | 271 | examples/mcp_server/README.md, examples/python/eval/README.md, examples/rag/README.md |
| MCP / agent interoperability | 264 | examples/mcp_server/README.md, examples/mcp/README.md, examples/python/tools/exa-tool/rag_examples/agentic_rag_gpt5/README.md |
| RAG / retrieval / knowledge | 247 | examples/mcp_server/README.md, examples/python/tools/exa-tool/rag_examples/agentic_rag_gpt5/README.md, examples/rag/README.md |
| Database / data infrastructure | 139 | examples/python/tools/exa-tool/rag_examples/agentic_rag_gpt5/README.md, examples/rag/README.md, examples/README.md |
| Cloud native / infrastructure | 115 | examples/approval/README.md, examples/serve/README.md, examples/terminal_bench/README.md |
| Security / supply chain | 60 | examples/mcp/README.md, examples/security/README.md, src/praisonai/examples/mcp/README.md |
| Coding agent / software automation | 41 | examples/mcp_server/README.md, examples/mcp/README.md, src/praisonai/examples/mcp/README.md |
| Local LLM / inference | 26 | examples/js/providers/README.md, README.md, src/praisonai/tests/README.md |
| Data / ML platform | 22 | examples/rag/README.md, examples/doctor/README.md, examples/recipes/creator_suite/README.md |
| Frontend / app framework | 1 | examples/yaml/pr-reviewer/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Ruby |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 4518 |
| manifests | 40 |
| docs | 124 |
| tests | 1279 |
| ci/ops | 45 |
| spec artifacts | 20 |
| agent instruction files | 10 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | PraisonAI 🦞 | PraisonAI 🦞 / 🎯 Use Cases / 🚀 Meet your first Agent (Under 1 Minute) / Give your agent a goal, and watch it work. / 🌌 The PraisonAI Ecosystem / JavaScript SDK / 🧠 Supported Providers & Features / 🌟 Why PraisonAI? / 📘 Using Python Code / 1. Single Agent | <p align="center" <picture <source media=" prefers color scheme dark " srcset=".github/images/logo dark.png" / <source media=" prefers color scheme light " srcset=".github/images/logo light.png" / <img alt="PraisonAI Logo" src=".github/images/logo light.png" width="250" / </picture </p <! mcp name io.github.MervinPraison/praisonai <p align="center" <a href="https //github.com/MervinPraison/PraisonAI" <img src="https //static.pepy.tech/badge/PraisonAI" alt="Total Downloads" / </a <a href="https //github.com/MervinPraison/PraisonAI" <img src="https //img.shields.io/github/v/release/MervinPraison/PraisonAI" alt="Latest Stable Version" / </a <a href="https //github.com/MervinPraison/PraisonAI" < |


## Key Files

### Manifests

- examples/mcp_server/README.md
- examples/mcp/README.md
- examples/python/eval/README.md
- examples/python/tools/exa-tool/rag_examples/agentic_rag_gpt5/README.md
- examples/rag/README.md
- examples/security/README.md
- src/praisonai/examples/mcp/README.md
- examples/README.md
- examples/acp/README.md
- examples/approval/README.md
- examples/consolidated_params/README.md
- examples/doctor/README.md
- examples/js/ai-sdk/README.md
- examples/js/observability/README.md
- examples/js/providers/README.md
- examples/package_manager/README.md
- examples/policy/README.md
- examples/python/camera/README.md
- examples/python/mongodb/README.md
- examples/python/monitoring/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- src/praisonai-agents/AGENTS.md
- src/praisonai-rust/AGENTS.md
- src/praisonai-ts/AGENTS.md
- src/praisonai-agents/requirements.txt
- examples/python/tools/e2b/agents.yaml
- examples/scientific_writing/agents.yaml
- src/praisonai-ts/specs/cli-spec.v1.yaml
- src/praisonai-ts/src/cli/spec/cli-spec.ts
- src/praisonai-ts/src/cli/spec/index.ts
- .github/workflows/benchmark.yml
- src/praisonai-agents/.github/workflows/benchmark.yml
- src/praisonai/requirements.txt
- src/praisonai-ts/specs/tests/chat.json
- src/praisonai-ts/specs/tests/run.json
- src/praisonai-ts/specs/tests/workflow.json
- src/praisonai-agents/tests/tavily_tools_test/agents.yaml
- src/praisonai/tests/agents.yaml
- .github/workflows/claude.yml
- src/praisonai/agents.yaml


### Agent Instruction Files

- AGENTS.md
- src/praisonai-agents/AGENTS.md
- src/praisonai-rust/AGENTS.md
- src/praisonai-ts/AGENTS.md
- examples/python/tools/e2b/agents.yaml
- examples/scientific_writing/agents.yaml
- src/praisonai-agents/tests/tavily_tools_test/agents.yaml
- src/praisonai/tests/agents.yaml
- .github/workflows/claude.yml
- src/praisonai/agents.yaml


## Top Directories

| dir | count |
| --- | --- |
| src | 3380 |
| examples | 1074 |
| .github | 36 |
| docker | 20 |
| .env.example | 1 |
| .gitignore | 1 |
| AGENTS.md | 1 |
| api.md | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |
| README.md | 1 |
| tests | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 3490 |
| .ts | 466 |
| .md | 124 |
| .ipynb | 107 |
| .yaml | 76 |
| .rs | 65 |
| .yml | 37 |
| .json | 26 |
| .svg | 25 |
| [no-ext] | 22 |
| .sh | 20 |
| .js | 11 |
| .txt | 10 |
| .toml | 9 |
| .example | 5 |
| .template | 3 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
