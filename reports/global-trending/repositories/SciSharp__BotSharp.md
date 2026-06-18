# SciSharp/BotSharp

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/SciSharp/BotSharp |
| local path | sources/SciSharp__BotSharp |
| HEAD | 014d98a |
| stars/forks | 3075 / 638 |
| language | C# |
| license |  |
| pushedAt | 2026-06-17T16:36:31Z |
| trendScore / priorityScore | 152 / 416 |


## Interpretation

- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | README.md, src/Plugins/BotSharp.Plugin.MicrosoftTeams/README.md, src/Plugins/BotSharp.Plugin.WebDriver/README.md |
| RAG / retrieval / knowledge | 41 | README.md, docs/agent/intro.md, docs/knowledge-base/text-embedding.md |
| MCP / agent interoperability | 20 | README.md, tests/BotSharp.Plugin.PizzaBot/McpServerTools/MakePaymentTool.cs, tests/BotSharp.Plugin.PizzaBot/McpServerTools/PizzaPricesTool.cs |
| Data / ML platform | 18 | README.md, src/Plugins/BotSharp.Plugin.MicrosoftTeams/README.md, docs/agent/intro.md |
| Database / data infrastructure | 14 | README.md, src/Plugins/BotSharp.Plugin.MicrosoftTeams/README.md, docs/knowledge-base/vector-database.md |
| Cloud native / infrastructure | 12 | README.md, dockerfiles/Readme.md, docs/agent/router.md |
| Local LLM / inference | 10 | docs/index.rst, tests/BotSharp.LLM.Tests/appsettings.json, docs/llama-sharp/config-llamasharp.md |
| Security / supply chain | 9 | src/Plugins/BotSharp.Plugin.MicrosoftTeams/README.md, tests/BotSharp.LLM.Tests/appsettings.json |
| Developer tools / DX | 7 | README.md, src/Plugins/BotSharp.Plugin.MicrosoftTeams/README.md, docs/quick-start/installation.md |
| Observability / evaluation | 7 | docs/llm/function.md, docs/architecture/hooks.md, src/Infrastructure/BotSharp.Core.Rules/docs/rule-flow-guide.md |
| Frontend / app framework | 4 | README.md, docs/architecture/hooks.md, docs/llama-sharp/use-llamasharp-in-ui.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Python, .NET |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1897 |
| manifests | 10 |
| docs | 55 |
| tests | 69 |
| ci/ops | 4 |
| spec artifacts | 16 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | The Open Source AI Agent Application Framework | The Open Source AI Agent Application Framework / Connect LLMs to your existing application focused on your business / Some Features / Quick Started / Core Modules / Plugins / Roadmap / FAQ / Documents | The Open Source AI Agent Application Framework Connect LLMs to your existing application focused on your business ! Discord https //img.shields.io/discord/1106946823282761851?label=Discord https //discord.com/channels/1106946823282761851/1106947212459642991 ! QQ群聊 https //img.shields.io/static/v1?label=QQ&message=群聊&color=brightgreen http //qm.qq.com/cgi bin/qm/qr? wv=1027&k=sN9VVMwbWjs5L0ATpizKKxOcZdEPMrp8&authKey=RLDw41bLTrEyEgZZi%2FzT4pYk%2BwmEFgFcrhs8ZbkiVY7a4JFckzJefaYNW6Lk4yPX&noverify=0&group code=985366726 ! Apache 2.0 https //img.shields.io/hexpm/l/plug.svg https //raw.githubusercontent.com/Oceania2018/BotSharp/master/LICENSE ! NuGet https //img.shields.io/nuget/dt/BotSharp.Core.svg |


## Key Files

### Manifests

- docs/README.md
- README.md
- src/Plugins/BotSharp.Plugin.MicrosoftTeams/README.md
- src/Plugins/BotSharp.Plugin.WebDriver/README.md
- src/Plugins/BotSharp.Plugin.WeChat/README.md
- docs/Makefile
- docs/requirements.txt
- dockerfiles/docker-compose.yml
- dockerfiles/docker-compose.infrastructure.override.yml
- dockerfiles/docker-compose.infrastructure.yml


### Spec / Docs / Prompt Artifacts

- docs/requirements.txt
- docs/architecture/agent-utility.md
- docs/llm/prompt.md
- docs/architecture/assets/.$routing-redirection.drawio.bkp
- docs/architecture/assets/.$routing-redirection.drawio.dtmp
- docs/architecture/assets/architecture.drawio
- docs/architecture/assets/overview.drawio
- docs/architecture/assets/routing-reasoning.drawio
- docs/architecture/assets/routing-redirection.drawio
- docs/architecture/assets/routing.drawio
- docs/architecture/authentication.md
- docs/architecture/data-persistence.md
- docs/architecture/hooks.md
- docs/architecture/logging.md
- docs/architecture/plugin.md
- docs/architecture/routing.md


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| src | 1755 |
| tests | 69 |
| docs | 45 |
| dockerfiles | 10 |
| BotSharp.Core.UnitTests | 3 |
| .github | 2 |
| .dockerignore | 1 |
| .editorconfig | 1 |
| .gitignore | 1 |
| .readthedocs.yaml | 1 |
| .vscode | 1 |
| BotSharp.sln | 1 |
| CONTRIBUTING.md | 1 |
| Directory.Build.props | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .cs | 1555 |
| .json | 111 |
| .liquid | 83 |
| .csproj | 69 |
| .md | 42 |
| [no-ext] | 6 |
| .drawio | 5 |
| .yml | 5 |
| .sln | 3 |
| .props | 2 |
| .ps1 | 2 |
| .py | 2 |
| .rst | 2 |
| .txt | 2 |
| .bat | 1 |
| .bkp | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
