# moorcheh-ai/memanto

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/moorcheh-ai/memanto |
| local path | sources/moorcheh-ai__memanto |
| HEAD | c39af7a |
| stars/forks | 946 / 313 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T20:04:32Z |
| trendScore / priorityScore | 175 / 473 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | examples/crewai-memory/README.md, examples/claudecode-skills-memanto/README.md, examples/langgraph-memanto/memanto_base_store/README.md |
| Developer tools / DX | 284 | examples/crewai-memory/README.md, examples/claudecode-skills-memanto/README.md, examples/langgraph-memanto/memanto_base_store/README.md |
| MCP / agent interoperability | 126 | examples/claudecode-skills-memanto/README.md, integrations/hermes-agents/README.md, integrations/mcp/README.md |
| Coding agent / software automation | 125 | examples/crewai-memory/README.md, examples/claudecode-skills-memanto/README.md, integrations/hermes-agents/README.md |
| RAG / retrieval / knowledge | 105 | examples/langgraph-memanto/memanto_base_store/README.md, integrations/hermes-agents/README.md, integrations/mcp/README.md |
| Security / supply chain | 95 | integrations/mcp/README.md, Dockerfile, docs/AGENT_MEMORY_BEST_PRACTICES.md |
| Cloud native / infrastructure | 72 | examples/claudecode-skills-memanto/README.md, examples/langgraph-memanto/memanto_base_store/README.md, integrations/mcp/README.md |
| Data / ML platform | 52 | examples/crewai-memory/README.md, examples/claudecode-skills-memanto/README.md, README.md |
| Database / data infrastructure | 47 | examples/crewai-memory/README.md, examples/claudecode-skills-memanto/README.md, README.md |
| Observability / evaluation | 32 | docs/AGENT_MEMORY_BEST_PRACTICES.md, docs/CLI_USER_GUIDE.md, docs/TIMELINE_VISUALIZATION_EXAMPLES.md |
| Frontend / app framework | 10 | examples/claudecode-skills-memanto/README.md, docs/AGENT_INTEGRATION_GUIDE.md, docs/AGENT_MEMORY_BEST_PRACTICES.md |
| Local LLM / inference | 2 | README.md, memanto/app/clients/onprem.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 237 |
| manifests | 22 |
| docs | 32 |
| tests | 22 |
| ci/ops | 5 |
| spec artifacts | 5 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | What Is MEMANTO? / Get started in 2 minutes / What you get / Integrations / The Six Gaps / Benchmarks / Architecture / On-Prem / Why Moorcheh? / Setup & Demo | <p align="center" <a href="https //www.memanto.ai/" <img alt="MEMANTO Logo" src="https //github.com/moorcheh ai/memanto/raw/main/assets/memanto dark.svg" width="500" </a </p <div align="center" <h1 Your agent forgets everything. Memanto fixes that.</h1 </div <p align="center" Persistent memory for Claude Code, Cursor, Codex, and 14 other agents. 100% free, open source, and runs entirely on your machine no API keys, no vector database, no backend to babysit. </p <h1 align="center" <em Memory that AI Agents Love!</em </h1 <p align="center" <a href="https //discord.gg/CyxRFQSQ3p" <img src="https //img.shields.io/badge/Join Discord 5865F2?style=for the badge&logo=discord&logoColor=white" alt="Jo |


## Key Files

### Manifests

- examples/crewai-memory/README.md
- examples/claudecode-skills-memanto/README.md
- examples/langgraph-memanto/memanto_base_store/README.md
- examples/langgraph-memanto/README.md
- examples/claudecode-skills-memanto/CLAUDE.md
- integrations/hermes-agents/README.md
- integrations/mcp/README.md
- README.md
- integrations/crewai/README.md
- integrations/langgraph/README.md
- examples/crewai-memory/requirements.txt
- examples/claudecode-skills-memanto/pyproject.toml
- examples/claudecode-skills-memanto/requirements.txt
- examples/langgraph-memanto/requirements.txt
- integrations/hermes-agents/pyproject.toml
- integrations/mcp/pyproject.toml
- tests/requirements.txt
- docker-compose.yml
- Dockerfile
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- examples/claudecode-skills-memanto/CLAUDE.md
- examples/crewai-memory/requirements.txt
- examples/claudecode-skills-memanto/requirements.txt
- examples/langgraph-memanto/requirements.txt
- tests/requirements.txt


### Agent Instruction Files

- examples/claudecode-skills-memanto/CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| memanto | 88 |
| examples | 70 |
| integrations | 40 |
| tests | 11 |
| docs | 10 |
| .github | 3 |
| .dockerignore | 1 |
| .env.example | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |
| assets | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 168 |
| .md | 32 |
| [no-ext] | 9 |
| .example | 6 |
| .toml | 6 |
| .txt | 4 |
| .yml | 4 |
| .json | 2 |
| .svg | 2 |
| .yaml | 2 |
| .html | 1 |
| .ini | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
