# microsoft/autogen

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/microsoft/autogen |
| local path | sources/microsoft__autogen |
| HEAD | 027ecf0 |
| stars/forks | 59042 / 8905 |
| language | Python |
| license | CC-BY-4.0 |
| pushedAt | 2026-04-15T11:59:09Z |
| trendScore / priorityScore | 169 / 464 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | dotnet/samples/Hello/HelloAgent/README.md, dotnet/samples/Hello/HelloAgentState/README.md, dotnet/test/Microsoft.AutoGen.Integration.Tests.AppHosts/core_xlang_hello_python_agent/README.md |
| MCP / agent interoperability | 83 | python/packages/autogen-ext/src/autogen_ext/tools/mcp/_host/README.md, python/packages/autogen-studio/frontend/src/components/shared/README.md, python/README.md |
| Database / data infrastructure | 67 | python/samples/agentchat_azure_postgresql/README.md, python/README.md, python/packages/autogen-studio/README.md |
| Cloud native / infrastructure | 65 | python/packages/agbench/benchmarks/README.md, python/packages/autogen-studio/frontend/README.md, python/samples/core_semantic_router/README.md |
| Developer tools / DX | 63 | dotnet/samples/Hello/HelloAgent/README.md, dotnet/samples/Hello/HelloAgentState/README.md, dotnet/test/Microsoft.AutoGen.Integration.Tests.AppHosts/HelloAgentTests/README.md |
| Frontend / app framework | 35 | python/packages/autogen-studio/frontend/README.md, python/packages/autogen-studio/README.md, python/packages/autogen-studio/frontend/package.json |
| Observability / evaluation | 24 | python/packages/agbench/benchmarks/GAIA/README.md, python/packages/agbench/benchmarks/HumanEval/README.md, python/README.md |
| RAG / retrieval / knowledge | 18 | python/samples/agentchat_graphrag/README.md, python/samples/task_centric_memory/README.md, python/packages/autogen-ext/src/autogen_ext/experimental/task_centric_memory/README.md |
| Security / supply chain | 17 | README.md, python/packages/autogen-studio/README.md, python/docs/src/user-guide/agentchat-user-guide/magentic-one.md |
| Local LLM / inference | 8 | python/samples/agentchat_chess_game/README.md, .github/copilot-instructions.md, python/packages/autogen-ext/pyproject.toml |
| Data / ML platform | 3 | python/samples/agentchat_graphrag/README.md, dotnet/samples/dev-team/README.md |
| Coding agent / software automation | 1 | python/docs/src/user-guide/agentchat-user-guide/migration-guide.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, .NET |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1772 |
| manifests | 40 |
| docs | 286 |
| tests | 299 |
| ci/ops | 18 |
| spec artifacts | 14 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | AutoGen [![Maintenance Mode](https://img.shields.io/badge/status-maintenance%20mode-orange)](https://github.com/microsoft/agent-framework) | AutoGen [![Maintenance Mode](https://img.shields.io/badge/status-maintenance%20mode-orange)](https://github.com/microsoft/agent-framework) / Installation / Install AgentChat and OpenAI client from Extensions / Install AutoGen Studio for no-code GUI / Quickstart / Hello World / MCP Server / First run `npm install -g @playwright/mcp@latest` to install the MCP server. / Multi-Agent Orchestration / AutoGen Studio | <a name="readme top" </a <div align="center" <img src="https //microsoft.github.io/autogen/0.2/img/ag.svg" alt="AutoGen Logo" width="100" ! Twitter https //img.shields.io/twitter/url/https/twitter.com/cloudposse.svg?style=social&label=Follow%20%40pyautogen https //twitter.com/pyautogen ! LinkedIn https //img.shields.io/badge/LinkedIn Company?style=flat&logo=linkedin&logoColor=white https //www.linkedin.com/company/105812540 ! Discord https //img.shields.io/badge/discord chat green?logo=discord https //aka.ms/autogen discord ! Documentation https //img.shields.io/badge/Documentation AutoGen blue?logo=read the docs https //microsoft.github.io/autogen/ ! Blog https //img.shields.io/badge/Blog A |


## Key Files

### Manifests

- dotnet/samples/dev-team/seed-memory/README.md
- dotnet/samples/Hello/HelloAgent/README.md
- dotnet/samples/Hello/HelloAgentState/README.md
- dotnet/test/Microsoft.AutoGen.Integration.Tests.AppHosts/core_xlang_hello_python_agent/README.md
- dotnet/test/Microsoft.AutoGen.Integration.Tests.AppHosts/HelloAgentTests/README.md
- python/samples/agentchat_azure_postgresql/README.md
- python/samples/agentchat_chainlit/README.md
- python/samples/agentchat_chess_game/README.md
- python/samples/agentchat_fastapi/README.md
- python/samples/agentchat_graphrag/README.md
- python/samples/agentchat_streamlit/README.md
- python/samples/core_xlang_hello_python_agent/README.md
- python/samples/task_centric_memory/README.md
- docs/dotnet/README.md
- python/docs/README.md
- python/packages/agbench/benchmarks/GAIA/README.md
- python/packages/agbench/benchmarks/HumanEval/README.md
- python/packages/agbench/benchmarks/README.md
- python/packages/autogen-agentchat/README.md
- python/packages/autogen-ext/src/autogen_ext/experimental/task_centric_memory/README.md


### Spec / Docs / Prompt Artifacts

- python/samples/agentchat_graphrag/requirements.txt
- python/packages/agbench/benchmarks/GAIA/Templates/MagenticOne/requirements.txt
- python/packages/agbench/benchmarks/GAIA/Templates/ParallelAgents/requirements.txt
- python/packages/agbench/benchmarks/GAIA/Templates/SelectorGroupChat/requirements.txt
- python/packages/agbench/benchmarks/HumanEval/Templates/AgentChat/requirements.txt
- .github/copilot-instructions.md
- python/samples/core_streaming_handoffs_fastapi/requirements.txt
- python/packages/agbench/src/agbench/template/requirements.txt
- python/packages/autogen-studio/requirements.txt
- python/docs/src/user-guide/core-user-guide/core-concepts/architecture.md
- python/packages/agbench/benchmarks/GAIA/Templates/MagenticOne/prompt.txt
- python/packages/agbench/benchmarks/GAIA/Templates/ParallelAgents/prompt.txt
- python/packages/agbench/benchmarks/GAIA/Templates/SelectorGroupChat/prompt.txt
- python/packages/agbench/benchmarks/HumanEval/Templates/AgentChat/prompt.txt


### Agent Instruction Files

- .github/copilot-instructions.md


## Top Directories

| dir | count |
| --- | --- |
| python | 993 |
| dotnet | 719 |
| docs | 21 |
| .github | 18 |
| .devcontainer | 4 |
| .azure | 3 |
| protos | 2 |
| .gitattributes | 1 |
| .gitignore | 1 |
| CODE_OF_CONDUCT.md | 1 |
| codecov.yml | 1 |
| CONTRIBUTING.md | 1 |
| FAQ.md | 1 |
| LICENSE | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 546 |
| .cs | 497 |
| .md | 162 |
| .tsx | 96 |
| .csproj | 64 |
| .ipynb | 49 |
| [no-ext] | 49 |
| .yaml | 41 |
| .json | 39 |
| .txt | 30 |
| .ts | 29 |
| .svg | 27 |
| .yml | 27 |
| .drawio | 18 |
| .html | 14 |
| .toml | 13 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
