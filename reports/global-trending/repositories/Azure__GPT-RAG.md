# Azure/GPT-RAG

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Azure/GPT-RAG |
| local path | sources/Azure__GPT-RAG |
| HEAD | fbf50c4 |
| stars/forks | 1161 / 304 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T19:41:30Z |
| trendScore / priorityScore | 136 / 377 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval / knowledge | 430 | AGENTS.md, README.md, .github/copilot-instructions.md |
| Cloud native / infrastructure | 98 | AGENTS.md, README.md, config/requirements.txt |
| AI agent / orchestration | 75 | AGENTS.md, README.md, CHANGELOG.md |
| Security / supply chain | 68 | AGENTS.md, README.md, SECURITY.md |
| MCP / agent interoperability | 51 | AGENTS.md, docs/pull_request_template.md, .github/feature_request.md |
| Developer tools / DX | 27 | AGENTS.md, util/requirements.txt, CHANGELOG.md |
| Observability / evaluation | 27 | AGENTS.md, README.md, CHANGELOG.md |
| Frontend / app framework | 18 | AGENTS.md, CHANGELOG.md, main.parameters.json |
| Database / data infrastructure | 7 | AGENTS.md, README.md, CHANGELOG.md |
| Coding agent / software automation | 4 | CODE_OF_CONDUCT.md, CONTRIBUTING.md |
| Data / ML platform | 4 | CHANGELOG.md, config/aifoundry/setup.py, config/containerapps/setup.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, security, securityTooling |
| stacks | Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 44 |
| manifests | 4 |
| docs | 13 |
| tests | 0 |
| ci/ops | 2 |
| spec artifacts | 4 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | GPT-RAG Solution Accelerator | GPT-RAG Solution Accelerator / Network-isolated deployments / Architecture / AI Agent Capabilities / Contributing / Trademarks | <! page type sample languages azdeveloper powershell bicep products azure azure ai foundry azure openai azure ai search urlFragment GPT RAG name Multi repo ChatGPT and Enterprise data with Azure OpenAI and AI Search description GPT RAG core is a Retrieval Augmented Generation pattern running in Azure, using Azure AI Search for retrieval and Azure OpenAI large language models to power ChatGPT style and Q&A experiences. <img src="media/logo.png" alt="Enterprise RAG Logo" width="80" align="left"/ GPT RAG Solution Accelerator This solution accelerator provides architecture templates and deployment assets to help organizations build secure, scalable, and enterprise ready Retrieval Augmented Gener |


## Key Files

### Manifests

- AGENTS.md
- README.md
- config/requirements.txt
- util/requirements.txt


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- .github/copilot-instructions.md
- config/requirements.txt
- util/requirements.txt


### Agent Instruction Files

- AGENTS.md
- .github/copilot-instructions.md


## Top Directories

| dir | count |
| --- | --- |
| config | 12 |
| .github | 9 |
| scripts | 6 |
| util | 3 |
| .gitignore | 1 |
| .gitmodules | 1 |
| AGENTS.md | 1 |
| azure.yaml | 1 |
| CHANGELOG.md | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| docs | 1 |
| LICENSE | 1 |
| main.parameters.json | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .md | 13 |
| .py | 9 |
| .json | 4 |
| .yml | 4 |
| .ps1 | 3 |
| .sh | 3 |
| [no-ext] | 3 |
| .j2 | 2 |
| .txt | 2 |
| .yaml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
