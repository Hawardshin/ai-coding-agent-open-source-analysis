# microsoft/Multi-Agent-Custom-Automation-Engine-Solution-Accelerator

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/microsoft/Multi-Agent-Custom-Automation-Engine-Solution-Accelerator |
| local path | sources/microsoft__Multi-Agent-Custom-Automation-Engine-Solution-Accelerator |
| HEAD | bf9162d |
| stars/forks | 847 / 705 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T11:37:47Z |
| trendScore / priorityScore | 142 / 434 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | src/mcp_server/README.md, README.md, infra/vscode_web/README.md |
| Cloud native / infrastructure | 384 | src/mcp_server/README.md, README.md, src/App/src/commonComponents/components/Content/README.md |
| MCP / agent interoperability | 347 | src/mcp_server/README.md, src/mcp_server/docker-compose.yml, src/mcp_server/pyproject.toml |
| Security / supply chain | 153 | README.md, docs/docker_mcp_server_testing.md, docs/mcp_server.md |
| Database / data infrastructure | 152 | docs/AVMPostDeploymentGuide.md, docs/CustomizingAzdParameters.md, docs/DeploymentGuide.md |
| Frontend / app framework | 143 | README.md, src/App/README.md, src/App/src/commonComponents/components/Content/README.md |
| Developer tools / DX | 118 | src/mcp_server/README.md, README.md, infra/vscode_web/README.md |
| Data / ML platform | 43 | README.md, src/App/src/commonComponents/components/Layout/README.md, docs/ACRBuildAndPushGuide.md |
| Observability / evaluation | 36 | README.md, docs/docker_mcp_server_testing.md, src/backend/pyproject.toml |
| RAG / retrieval / knowledge | 33 | README.md, docs/AVMPostDeploymentGuide.md, src/tests/agents/interactive_test_harness/foundry_agent_interactive.py |
| Coding agent / software automation | 3 | docs/LocalDevelopmentSetup.md, .github/workflows/codeql.yml, src/App/src/commonComponents/components/PromptCard.tsx |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 463 |
| manifests | 27 |
| docs | 48 |
| tests | 72 |
| ci/ops | 32 |
| spec artifacts | 5 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Multi-Agent Custom Automation Engine Solution Accelerator | Multi-Agent Custom Automation Engine Solution Accelerator / Solution architecture / Agentic architecture / Additional resources / Key features / How to install or deploy / Prerequisites and Costs / Business value / Use Case / Security guidelines | Multi Agent Custom Automation Engine Solution Accelerator Welcome to the Multi Agent Custom Automation Engine solution accelerator, designed to help businesses leverage AI agents for automating complex organizational tasks. This accelerator provides a foundation for building AI driven orchestration systems that can coordinate multiple specialized agents to accomplish various business processes. When dealing with complex organizational tasks, users often face significant challenges, including coordinating across multiple departments, maintaining consistency in processes, and ensuring efficient resource utilization. The Multi Agent Custom Automation Engine solution accelerator allows users to |


## Key Files

### Manifests

- src/mcp_server/README.md
- README.md
- tests/e2e-test/README.md
- infra/vscode_web/README.md
- src/App/README.md
- src/App/src/commonComponents/components/Content/README.md
- src/App/src/commonComponents/components/Header/README.md
- src/App/src/commonComponents/components/Layout/README.md
- src/App/src/commonComponents/components/Panels/README.md
- src/backend/README.md
- src/mcp_server/docker-compose.yml
- src/mcp_server/Dockerfile
- src/mcp_server/pyproject.toml
- .devcontainer/Dockerfile
- tests/e2e-test/requirements.txt
- infra/scripts/requirements.txt
- infra/vscode_web/requirements.txt
- src/App/Dockerfile
- src/App/package.json
- src/App/pyproject.toml


### Spec / Docs / Prompt Artifacts

- tests/e2e-test/requirements.txt
- infra/scripts/requirements.txt
- infra/vscode_web/requirements.txt
- src/App/requirements.txt
- src/backend/requirements.txt


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| src | 288 |
| data | 44 |
| infra | 38 |
| .github | 33 |
| docs | 23 |
| tests | 14 |
| .devcontainer | 3 |
| __azurite_db_queue__.json | 1 |
| __azurite_db_queue_extent__.json | 1 |
| .azdo | 1 |
| .coveragerc | 1 |
| .flake8 | 1 |
| .gitignore | 1 |
| azure_custom.yaml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 138 |
| .tsx | 88 |
| .md | 47 |
| .csv | 32 |
| .yml | 29 |
| .json | 19 |
| [no-ext] | 19 |
| .css | 18 |
| .ts | 17 |
| .sh | 11 |
| .txt | 9 |
| .bicep | 8 |
| .docx | 5 |
| .ps1 | 4 |
| .ini | 3 |
| .svg | 3 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
