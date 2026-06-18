# Azure/gpt-rag-orchestrator

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Azure/gpt-rag-orchestrator |
| local path | sources/Azure__gpt-rag-orchestrator |
| HEAD | eb99535 |
| stars/forks | 91 / 110 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T18:57:10Z |
| trendScore / priorityScore | 133 / 399 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 335 | evaluations/README.md, AGENTS.md, README.md |
| RAG / retrieval / knowledge | 291 | evaluations/README.md, AGENTS.md, infra/README.md |
| Security / supply chain | 176 | evaluations/README.md, tests/test_openai_chat_client.py, tests/test_single_agent_rag_v2_thread_conversation.py |
| Observability / evaluation | 105 | evaluations/README.md, evaluations/requirements.txt, .github/copilot-instructions.md |
| Cloud native / infrastructure | 102 | README.md, src/prompts/nl2sql/sqlquery_agent.txt, src/strategies/maf_agent_service_strategy.py |
| Developer tools / DX | 65 | evaluations/README.md, README.md, evaluations/requirements.txt |
| Data / ML platform | 53 | evaluations/README.md, evaluations/evaluate.py, evaluations/generate_eval_input.py |
| Database / data infrastructure | 44 | pyproject.toml, samples/sql_database/datasources.json, CHANGELOG.md |
| MCP / agent interoperability | 27 | README.md, pyproject.toml, requirements.txt |
| Coding agent / software automation | 5 | src/plugins/nl2sql/plugin.py |
| Frontend / app framework | 5 | src/dependencies.py, src/main.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, security, securityTooling |
| stacks | Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 144 |
| manifests | 8 |
| docs | 9 |
| tests | 19 |
| ci/ops | 4 |
| spec artifacts | 11 |
| agent instruction files | 9 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | GPT-RAG Orchestrator | GPT-RAG Orchestrator / Available Strategies / Documentation / Prerequisites / How to deploy the orchestrator service / Deploying the app with azd (recommended) / Deploying the app with a shell script / Found an Issue? / Previous Releases / 🤝 Contributing | <! page type sample languages azdeveloper powershell bicep products azure azure ai foundry azure openai azure ai search urlFragment GPT RAG name Multi repo ChatGPT and Enterprise data with Azure OpenAI and AI Search description GPT RAG core is a Retrieval Augmented Generation pattern running in Azure, using Azure AI Search for retrieval and Azure OpenAI large language models to power ChatGPT style and Q&A experiences. GPT RAG Orchestrator Part of the GPT RAG https //github.com/Azure/gpt rag solution. The GPT RAG Orchestrator service is an agentic orchestration layer built on Azure AI Foundry Agent Service and the Microsoft Agent Framework. It enables agent based RAG workflows by coordinating |


## Key Files

### Manifests

- evaluations/README.md
- AGENTS.md
- infra/README.md
- README.md
- evaluations/requirements.txt
- Dockerfile
- pyproject.toml
- requirements.txt


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- evaluations/requirements.txt
- .github/copilot-instructions.md
- requirements.txt
- src/prompts/maf/main.txt
- src/prompts/mcp/main.txt
- src/prompts/multimodal/main.txt
- src/prompts/nl2sql/sqlquery_agent.txt
- src/prompts/nl2sql/syntetizer_agent.txt
- src/prompts/nl2sql/triage_agent.txt
- src/prompts/single_agent_rag/main.jinja2


### Agent Instruction Files

- AGENTS.md
- .github/copilot-instructions.md
- src/prompts/maf/main.txt
- src/prompts/mcp/main.txt
- src/prompts/multimodal/main.txt
- src/prompts/nl2sql/sqlquery_agent.txt
- src/prompts/nl2sql/syntetizer_agent.txt
- src/prompts/nl2sql/triage_agent.txt
- src/prompts/single_agent_rag/main.jinja2


## Top Directories

| dir | count |
| --- | --- |
| src | 59 |
| samples | 26 |
| tests | 19 |
| evaluations | 8 |
| .github | 6 |
| scripts | 4 |
| infra | 2 |
| .devcontainer | 1 |
| .dockerignore | 1 |
| .env.sample | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .vscode | 1 |
| AGENTS.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 74 |
| .json | 29 |
| .md | 9 |
| .txt | 8 |
| [no-ext] | 5 |
| .ps1 | 4 |
| .sh | 3 |
| .yaml | 3 |
| .yml | 3 |
| .bicep | 1 |
| .ipynb | 1 |
| .jinja2 | 1 |
| .jsonl | 1 |
| .sample | 1 |
| .toml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
