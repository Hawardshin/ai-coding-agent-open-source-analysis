# WolframResearch/AgentTools

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/WolframResearch/AgentTools |
| local path | sources/WolframResearch__AgentTools |
| HEAD | 375c931 |
| stars/forks | 60 / 16 |
| language | Wolfram Language |
| license |  |
| pushedAt | 2026-06-17T21:17:28Z |
| trendScore / priorityScore | 135 / 402 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | docs/README.md, AGENTS.md, README.md |
| Coding agent / software automation | 355 | docs/README.md, AGENTS.md, README.md |
| AI agent / orchestration | 248 | docs/README.md, AGENTS.md, README.md |
| Developer tools / DX | 207 | README.md, Specs/AgentSkills.md, Specs/DeployAgentTools.md |
| Cloud native / infrastructure | 98 | README.md, Specs/MCPApps.md, Dockerfile |
| RAG / retrieval / knowledge | 55 | AGENTS.md, README.md, Specs/AgentSkills.md |
| Observability / evaluation | 54 | README.md, Specs/AgentSkills.md, Specs/MCPApps.md |
| Data / ML platform | 26 | README.md, Specs/MCPApps.md, Specs/MCPPromptCommands.md |
| Security / supply chain | 22 | Specs/MCPApps.md, Specs/MCPPromptCommands.md, Dockerfile |
| Frontend / app framework | 15 | AGENTS.md, Dockerfile, Specs/PacletDocumentationTools.md |
| Database / data infrastructure | 2 | Specs/MCPApps.md, .claude/skills/review-pr-comments/SKILL.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, devtools, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | docs/awesome-list |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 273 |
| manifests | 5 |
| docs | 80 |
| tests | 43 |
| ci/ops | 8 |
| spec artifacts | 24 |
| agent instruction files | 13 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | [Wolfram/AgentTools](https://paclets.com/Wolfram/AgentTools) | [Wolfram/AgentTools](https://paclets.com/Wolfram/AgentTools) / Table of Contents / Features / Requirements / Installation / Install the Paclet / Load the Package / Docker Image / Quick Start / Predefined Servers | Wolfram/AgentTools https //paclets.com/Wolfram/AgentTools ! GitHub license https //img.shields.io/badge/license MIT blue.svg LICENSE ! Wolfram Version https //img.shields.io/badge/Wolfram 14.3%2B red.svg https //www.wolfram.com/language/ A Wolfram Language toolkit for integrating with AI agents and LLMs — providing MCP https //modelcontextprotocol.io servers, agent skills, and other standard interfaces that give AI systems access to Wolfram's computational capabilities. Table of Contents Features features Requirements requirements Installation installation Quick Start quick start Predefined Servers predefined servers Supported Clients supported clients Available Tools available tools Creatin |


## Key Files

### Manifests

- docs/README.md
- AGENTS.md
- README.md
- CLAUDE.md
- Dockerfile


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- Specs/AgentSkills.md
- Specs/DeployAgentTools.md
- Specs/MCPApps.md
- Specs/MCPPromptCommands.md
- Specs/MCPRoots.md
- Kernel/Prompts/Notebook.wl
- Kernel/Prompts/Prompts.wl
- Kernel/Prompts/Search.wl
- Specs/CodeInspectorTool.md
- Specs/PacletDocumentationTools.md
- Specs/PacletExtension.md
- Specs/PacletTools.md
- Specs/SymbolDefinition.md
- Specs/ToolOptions.md
- .claude/skills/add-code-inspector-rule/SKILL.md
- .claude/skills/review-spec/SKILL.md
- .claude/skills/simplify-spec/SKILL.md
- .claude/skills/spec-to-todo/SKILL.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- Kernel/Prompts/Notebook.wl
- Kernel/Prompts/Prompts.wl
- Kernel/Prompts/Search.wl
- .claude/skills/add-code-inspector-rule/SKILL.md
- .claude/skills/review-spec/SKILL.md
- .claude/skills/simplify-spec/SKILL.md
- .claude/skills/spec-to-todo/SKILL.md
- .claude/skills/review-pr-comments/scripts/get-unresolved-comments.sh
- .claude/skills/review-pr-comments/scripts/resolve-thread.sh
- .claude/skills/review-pr-comments/SKILL.md
- .claude/skills/update-docs/SKILL.md


## Top Directories

| dir | count |
| --- | --- |
| Kernel | 51 |
| Tests | 32 |
| AgentSkills | 31 |
| Documentation | 28 |
| TestResources | 26 |
| docs | 19 |
| Scripts | 15 |
| client-research | 12 |
| Specs | 11 |
| Assets | 10 |
| .claude | 8 |
| .github | 7 |
| Notes | 4 |
| MCPB | 2 |


## Extension Distribution

| ext | count |
| --- | --- |
| .wl | 82 |
| .md | 78 |
| .wlt | 32 |
| .nb | 30 |
| .wls | 24 |
| .json | 7 |
| .yml | 7 |
| [no-ext] | 5 |
| .html | 4 |
| .sh | 2 |
| .wxf | 1 |
| .xml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
