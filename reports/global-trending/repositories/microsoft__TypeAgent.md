# microsoft/TypeAgent

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/microsoft/TypeAgent |
| local path | sources/microsoft__TypeAgent |
| HEAD | 804ba17 |
| stars/forks | 708 / 100 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T22:39:36Z |
| trendScore / priorityScore | 138 / 429 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | ts/examples/agentExamples/echo/README.md, ts/examples/agentExamples/measure/README.md, ts/examples/cacheRESTEndpoint/README.md |
| Developer tools / DX | 388 | ts/examples/agentExamples/echo/README.md, ts/examples/agentExamples/measure/README.md, ts/examples/mcpMemory/README.md |
| MCP / agent interoperability | 115 | ts/examples/mcpMemory/README.md, ts/examples/planValidationDemo/README.md, ts/docs/plans/vscode-devx/README.md |
| Cloud native / infrastructure | 70 | ts/examples/workflow/vscode/README.md, ts/packages/agents/discord/README.md, ts/packages/agentServer/README.md |
| Coding agent / software automation | 67 | ts/examples/debugDocGenerator/README.md, ts/examples/planValidationDemo/README.md, ts/packages/agentRpc/README.md |
| Data / ML platform | 47 | ts/examples/workflow/formatter/README.md, ts/packages/memory/website/test/README.md, ts/packages/agents/onboarding/README.md |
| RAG / retrieval / knowledge | 39 | ts/examples/mcpMemory/README.md, ts/examples/memoryProviders/src/elastic/README.md, ts/examples/chat/README.md |
| Security / supply chain | 38 | ts/examples/planValidationDemo/README.md, ts/docs/design/workflowSystem/README.md, ts/docs/plans/vscode-devx/README.md |
| Observability / evaluation | 13 | ts/docs/design/workflowSystem/README.md, ts/packages/agents/onboarding/src/uiCapture/README.md, ts/packages/knowProTest/README.md |
| Local LLM / inference | 11 | ts/README.md |
| Database / data infrastructure | 10 | ts/examples/agentExamples/measure/README.md, ts/examples/memoryProviders/README.md, ts/examples/commandHistogram/README.md |
| Frontend / app framework | 5 | ts/examples/planValidationDemo/README.md, ts/packages/agents/visualStudio/host/README.md, ts/packages/agents/visualStudio/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin, .NET |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 4640 |
| manifests | 40 |
| docs | 429 |
| tests | 748 |
| ci/ops | 13 |
| spec artifacts | 41 |
| agent instruction files | 11 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | TypeAgent | TypeAgent / Getting Started / Quick start - TypeAgent Shell Example / Quick start - Components / State Management / Intended Uses / Roadmap / Limitations / Developers / Repo Overview | TypeAgent NOTE For the Python port see microsoft/typeagent py https //github.com/microsoft/typeagent py/blob/main/README.md . TypeAgent is sample code that explores an architecture for building a single personal agent with natural language interfaces leveraging current advances in LLM technology. The goal of the TypeAgent team is to explore how to get work done by safely and efficiently combining stochastic systems like language models with traditional software components. Three principles have emerged during this investigation. They are listed below along with examples of how the principles apply to actions, memory and plans. Principle distill models into logical structures Actions find tra |


## Key Files

### Manifests

- ts/examples/agentExamples/echo/README.md
- ts/examples/agentExamples/measure/README.md
- ts/examples/mcpMemory/README.md
- ts/examples/memoryProviders/README.md
- ts/examples/memoryProviders/src/elastic/README.md
- ts/examples/whisperClient/README.md
- docs/README.md
- ts/examples/cacheRESTEndpoint/README.md
- ts/examples/chat/README.md
- ts/examples/chat/src/codeChat/README.md
- ts/examples/chat/src/knowledgeProc/README.md
- ts/examples/commandHistogram/README.md
- ts/examples/debugDocGenerator/README.md
- ts/examples/docuProc/README.md
- ts/examples/examplesLib/README.md
- ts/examples/microdataExtract/README.md
- ts/examples/planValidationDemo/README.md
- ts/examples/playground/README.md
- ts/examples/searchActionTest/README.md
- ts/examples/snipsBench/README.md


### Spec / Docs / Prompt Artifacts

- ts/examples/planValidationDemo/CLAUDE.md
- ts/packages/agents/onboarding/AGENTS.md
- ts/packages/agents/powershell/CLAUDE.md
- ts/packages/agents/taskflow/CLAUDE.md
- ts/packages/typeagent-core/AGENTS.md
- ts/packages/typeagent-studio/AGENTS.md
- ts/CLAUDE.md
- ts/examples/docuProc/requirements.txt
- dotnet/autoShell/.github/copilot-instructions.md
- python/commonCrawlData/requirements.txt
- python/fineTuning/chaparral/prompts/knowledge.py
- python/fineTuning/requirements.txt
- python/fineTuning/unsloth/requirements.txt
- python/stt/whisperService/requirements.txt
- python/tts/speechT5/requirements.txt
- ts/docs/architecture/agent-patterns.md
- ts/docs/architecture/agentServerConversations.md
- ts/docs/architecture/browserAgent.md
- ts/packages/security/validation/src/prompts/planPrompt.ts
- ts/packages/security/validation/src/prompts/systemPrompt.ts


### Agent Instruction Files

- ts/examples/planValidationDemo/CLAUDE.md
- ts/packages/agents/onboarding/AGENTS.md
- ts/packages/agents/powershell/CLAUDE.md
- ts/packages/agents/taskflow/CLAUDE.md
- ts/packages/typeagent-core/AGENTS.md
- ts/packages/typeagent-studio/AGENTS.md
- ts/CLAUDE.md
- dotnet/autoShell/.github/copilot-instructions.md
- python/fineTuning/chaparral/prompts/knowledge.py
- ts/packages/security/validation/src/prompts/planPrompt.ts
- ts/packages/security/validation/src/prompts/systemPrompt.ts


## Top Directories

| dir | count |
| --- | --- |
| ts | 3864 |
| dotnet | 557 |
| android | 78 |
| python | 65 |
| docs | 27 |
| .devcontainer | 14 |
| .github | 14 |
| pipelines | 10 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .repolicy.json | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTIONS.md | 1 |
| LICENSE | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 2125 |
| .json | 672 |
| .cs | 485 |
| .md | 413 |
| .mts | 158 |
| [no-ext] | 139 |
| .agr | 72 |
| .txt | 63 |
| .cjs | 60 |
| .js | 49 |
| .mjs | 47 |
| .html | 46 |
| .py | 40 |
| .xml | 34 |
| .css | 32 |
| .csproj | 26 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
