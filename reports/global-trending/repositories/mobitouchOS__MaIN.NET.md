# mobitouchOS/MaIN.NET

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/mobitouchOS/MaIN.NET |
| local path | sources/mobitouchOS__MaIN.NET |
| HEAD | 4dc0cb1 |
| stars/forks | 178 / 21 |
| language | C# |
| license |  |
| pushedAt | 2026-06-17T16:30:24Z |
| trendScore / priorityScore | 134 / 371 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 327 | Examples/Examples/Agents/AgentConversationExample.cs, Examples/Examples/Agents/AgentExample.cs, Examples/Examples/Agents/AgentExampleTools.cs |
| MCP / agent interoperability | 71 | Examples/Examples/Agents/Skills/AgentWithAllSkillsExample.cs, Examples/Examples/Agents/Skills/AgentWithMcpFileWriterSkillExample.cs, Examples/Examples/Mcp/AgentWithKnowledgeMcpExample.cs |
| Cloud native / infrastructure | 69 | Examples/Examples/Mcp/McpAgentsExample.cs, scripts/docker-compose.yml, scripts/install-mcli.ps1 |
| Security / supply chain | 40 | Examples/Examples/skills/code-review/prompts/review.md, Examples/Examples/Files/Knowledge/events.md, Examples/Examples/Files/Knowledge/office_layout.md |
| Frontend / app framework | 32 | Examples/Examples/Files/Knowledge/organization.md |
| RAG / retrieval / knowledge | 25 | Examples/Examples/Agents/AgentWithKnowledgeFileExample.cs, Examples/Examples/Agents/Skills/AgentWithAllSkillsExample.cs, Examples/Examples/Mcp/AgentWithKnowledgeMcpExample.cs |
| Coding agent / software automation | 24 | Docs/roadmap.md, Frontend/MainFE/wwwroot/app.css, Frontend/MainFE/wwwroot/css/agents.css |
| Data / ML platform | 21 | Examples/Examples/Agents/Skills/AgentWithAllSkillsExample.cs, Docs/roadmap.md, Examples/Examples/Files/Knowledge/events.md |
| Local LLM / inference | 20 | Examples/Examples/Chat/ChatExampleToolsSimpleLocalLLM.cs, Examples/Examples/Chat/ChatExampleOllama.cs, Examples/Examples/Chat/ChatWithCustomModelIdExample.cs |
| Developer tools / DX | 18 | Frontend/MainFE/Dockerfile, readme.md, Examples/Examples/Mcp/AgentWithKnowledgeMcpExample.cs |
| Database / data infrastructure | 7 | Examples/Examples/Files/Knowledge/organization.md, Frontend/MainFE/wwwroot/initial_rag_demo_docker.json, Frontend/MainFE/wwwroot/initial_rag_demo.json |
| Observability / evaluation | 7 | Examples/Examples/Files/Knowledge/office_layout.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, .NET |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 576 |
| manifests | 4 |
| docs | 59 |
| tests | 0 |
| ci/ops | 9 |
| spec artifacts | 2 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| readme.md |  | 🚀 Quick Installation / 🛠 MaIN CLI (mcli) / 📚 Getting Started / 🌟 Our Vision / 🤝 Contribute | <h1 align="center" style="color yellow" MaIN.NET</h1 ! Build Status https //github.com/wisedev code/MaIN.NET/actions/workflows/publish.yml/badge.svg ! Download Count https //img.shields.io/nuget/dt/MaIN.NET?label=Nuget%3A&style=plastic ! example Docs/main.png Please star the repo to show your support for this project! ⭐️ MaIN Modular Artificial Intelligence Network is a versatile .NET package designed to streamline the integration of large language models LLMs into advanced AI workflows. Whether you're developing chatbots, automating processes, or exploring innovative AI techniques, M.A.I.N offers a flexible and robust foundation to build upon. The name reflects our core vision—a modular net |


## Key Files

### Manifests

- Frontend/MainFE/Dockerfile
- scripts/docker-compose.yml
- src/Dockerfile
- scripts/docker-compose.inferpage-ollama.yml


### Spec / Docs / Prompt Artifacts

- Examples/Examples/skills/code-review/prompts/review.md
- Docs/roadmap.md


### Agent Instruction Files

- Examples/Examples/skills/code-review/prompts/review.md


## Top Directories

| dir | count |
| --- | --- |
| src | 356 |
| Examples | 74 |
| Frontend | 47 |
| Releases | 47 |
| Examples.Flows | 13 |
| MaIN.Core.IntegrationTests | 11 |
| scripts | 10 |
| MaIN.Core.E2ETests | 9 |
| .github | 3 |
| .gitignore | 1 |
| Directory.Build.props | 1 |
| Docs | 1 |
| LICENSE | 1 |
| MaIN.sln | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .cs | 414 |
| .md | 59 |
| .json | 24 |
| .razor | 23 |
| .csproj | 11 |
| .css | 9 |
| [no-ext] | 7 |
| .js | 6 |
| .ps1 | 5 |
| .yml | 5 |
| .txt | 4 |
| .sh | 2 |
| .sln | 2 |
| .demo | 1 |
| .exe | 1 |
| .inferpage | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
