# pydantic/pydantic-ai

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/pydantic/pydantic-ai |
| local path | sources/pydantic__pydantic-ai |
| HEAD | 3c98a10 |
| stars/forks | 17819 / 2224 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T09:44:19Z |
| trendScore / priorityScore | 162 / 501 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | docs/AGENTS.md, examples/README.md, pydantic_evals/README.md |
| Data / ML platform | 500 | pydantic_evals/README.md, docs/agent.md, docs/embeddings.md |
| MCP / agent interoperability | 404 | tests/AGENTS.md, AGENTS.md, pydantic_ai_slim/pydantic_ai/durable_exec/AGENTS.md |
| Observability / evaluation | 297 | pydantic_evals/README.md, AGENTS.md, pydantic_ai_slim/pydantic_ai/models/AGENTS.md |
| RAG / retrieval / knowledge | 177 | docs/embeddings.md, docs/examples/rag.md, examples/pydantic_ai_examples/rag.py |
| Developer tools / DX | 149 | AGENTS.md, pydantic_ai_slim/pydantic_ai/AGENTS.md, pydantic_ai_slim/pydantic_ai/providers/AGENTS.md |
| Security / supply chain | 51 | docs/embeddings.md, docs/evals.md, pyproject.toml |
| Database / data infrastructure | 48 | docs/examples/rag.md, docs/multi-agent-applications.md, examples/pydantic_ai_examples/rag.py |
| Cloud native / infrastructure | 29 | docs/agent.md, docs/examples/rag.md, docs/multi-agent-applications.md |
| Coding agent / software automation | 26 | AGENTS.md, README.md, docs/coding-agent-skills.md |
| Local LLM / inference | 22 | README.md, docs/embeddings.md, Makefile |
| Frontend / app framework | 9 | docs/multi-agent-applications.md, docs/evals/evaluators/report-evaluators.md, docs/evals/online-evaluation.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2075 |
| manifests | 29 |
| docs | 254 |
| tests | 1370 |
| ci/ops | 51 |
| spec artifacts | 28 |
| agent instruction files | 27 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Define a very simple agent including the model to use, you can also set the model when running the agent. | <em>Pydantic AI is a Python agent framework designed to help you quickly, confidently, and painlessly build production grade applications and workflows with Generative AI.</em> / Why use Pydantic AI / Hello World Example / Define a very simple agent including the model to use, you can also set the model when running the agent. / Run the agent synchronously, conducting a conversation with the LLM. / Tools & Dependency Injection Example / SupportDependencies is used to pass data, connections, and logic into the model that will be needed when running / instructions and tool functions. Dependency injection provides a type-safe way to customise the behavior of your agents. / This Pydantic model defines the structure of the output returned by the agent. / This agent will act as first-tier support in a bank. | <div align="center" <a href="https //ai.pydantic.dev/" <picture <source media=" prefers color scheme dark " srcset="https //pydantic.dev/docs/ai/img/pydantic ai dark.svg" <img src="https //pydantic.dev/docs/ai/img/pydantic ai light.svg" alt="Pydantic AI" </picture </a </div <div align="center" <h3 GenAI Agent Framework, the Pydantic way</h3 </div <div align="center" <a href="https //github.com/pydantic/pydantic ai/actions/workflows/ci.yml?query=branch%3Amain" <img src="https //github.com/pydantic/pydantic ai/actions/workflows/ci.yml/badge.svg?event=push" alt="CI" </a <a href="https //coverage badge.samuelcolvin.workers.dev/redirect/pydantic/pydantic ai" <img src="https //coverage badge.samue |


## Key Files

### Manifests

- docs/AGENTS.md
- examples/README.md
- pydantic_evals/README.md
- tests/AGENTS.md
- AGENTS.md
- pydantic_ai_slim/pydantic_ai/AGENTS.md
- pydantic_ai_slim/pydantic_ai/capabilities/AGENTS.md
- pydantic_ai_slim/pydantic_ai/durable_exec/AGENTS.md
- pydantic_ai_slim/pydantic_ai/models/AGENTS.md
- pydantic_ai_slim/pydantic_ai/native_tools/AGENTS.md
- pydantic_ai_slim/pydantic_ai/profiles/AGENTS.md
- pydantic_ai_slim/pydantic_ai/providers/AGENTS.md
- pydantic_ai_slim/pydantic_ai/toolsets/AGENTS.md
- pydantic_ai_slim/pydantic_ai/ui/AGENTS.md
- clai/README.md
- docs-site/README.md
- pydantic_ai_slim/README.md
- pydantic_graph/README.md
- README.md
- tests/example_modules/README.md


### Spec / Docs / Prompt Artifacts

- docs/AGENTS.md
- tests/AGENTS.md
- AGENTS.md
- pydantic_ai_slim/pydantic_ai/AGENTS.md
- pydantic_ai_slim/pydantic_ai/capabilities/AGENTS.md
- pydantic_ai_slim/pydantic_ai/durable_exec/AGENTS.md
- pydantic_ai_slim/pydantic_ai/models/AGENTS.md
- pydantic_ai_slim/pydantic_ai/native_tools/AGENTS.md
- pydantic_ai_slim/pydantic_ai/profiles/AGENTS.md
- pydantic_ai_slim/pydantic_ai/providers/AGENTS.md
- pydantic_ai_slim/pydantic_ai/toolsets/AGENTS.md
- pydantic_ai_slim/pydantic_ai/ui/AGENTS.md
- .github/workflows/shared/prompts/pydantic-ai-bug-hunter.md
- .github/workflows/shared/prompts/pydantic-ai-docs-drift.md
- .github/workflows/shared/prompts/pydantic-ai-pr-review.md
- .github/workflows/shared/prompts/pydantic-ai-provider-mapping-sweep.md
- .github/workflows/shared/prompts/pydantic-ai-provider-parity-explore.md
- .github/workflows/shared/prompts/pydantic-ai-regression-detector.md
- .github/workflows/shared/prompts/pydantic-ai-roundtrip-sweep.md
- .github/workflows/shared/prompts/pydantic-ai-stale-issues-finder.md


### Agent Instruction Files

- docs/AGENTS.md
- tests/AGENTS.md
- AGENTS.md
- pydantic_ai_slim/pydantic_ai/AGENTS.md
- pydantic_ai_slim/pydantic_ai/capabilities/AGENTS.md
- pydantic_ai_slim/pydantic_ai/durable_exec/AGENTS.md
- pydantic_ai_slim/pydantic_ai/models/AGENTS.md
- pydantic_ai_slim/pydantic_ai/native_tools/AGENTS.md
- pydantic_ai_slim/pydantic_ai/profiles/AGENTS.md
- pydantic_ai_slim/pydantic_ai/providers/AGENTS.md
- pydantic_ai_slim/pydantic_ai/toolsets/AGENTS.md
- pydantic_ai_slim/pydantic_ai/ui/AGENTS.md
- .github/workflows/shared/prompts/pydantic-ai-bug-hunter.md
- .github/workflows/shared/prompts/pydantic-ai-docs-drift.md
- .github/workflows/shared/prompts/pydantic-ai-pr-review.md


## Top Directories

| dir | count |
| --- | --- |
| tests | 1370 |
| pydantic_ai_slim | 275 |
| docs | 183 |
| .github | 83 |
| examples | 50 |
| pydantic_graph | 39 |
| pydantic_evals | 33 |
| scripts | 9 |
| docs-site | 7 |
| clai | 6 |
| agent_docs | 5 |
| .claude | 4 |
| .agents | 1 |
| .gemini | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .yaml | 1146 |
| .py | 611 |
| .md | 240 |
| .yml | 27 |
| [no-ext] | 10 |
| .json | 7 |
| .toml | 7 |
| .sh | 6 |
| .svg | 4 |
| .typed | 4 |
| .html | 3 |
| .ts | 3 |
| .txt | 2 |
| .css | 1 |
| .js | 1 |
| .mdc | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
