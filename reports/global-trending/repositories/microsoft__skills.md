# microsoft/skills

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/microsoft/skills |
| local path | sources/microsoft__skills |
| HEAD | c5c544a |
| stars/forks | 2580 / 298 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T22:52:27Z |
| trendScore / priorityScore | 196 / 550 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | tests/AGENTS.md, .github/plugins/azure-skills/skills/azure-prepare/references/services/functions/templates/recipes/mcp/README.md, README.md |
| Developer tools / DX | 500 | .github/plugins/azure-skills/skills/azure-compute/workflows/vm-creator/examples/bicep/README.md, tests/AGENTS.md, .github/plugins/azure-skills/skills/azure-deploy/references/recipes/azcli/README.md |
| Security / supply chain | 500 | .github/plugins/azure-skills/skills/azure-compute/workflows/vm-creator/examples/terraform/README.md, .github/plugins/azure-skills/skills/azure-prepare/references/services/sql-database/README.md, tests/README.md |
| Cloud native / infrastructure | 414 | .github/plugins/azure-skills/skills/azure-compute/workflows/vm-creator/examples/terraform/README.md, .github/plugins/azure-skills/skills/azure-deploy/references/recipes/azcli/README.md, .github/plugins/azure-skills/skills/azure-prepare/references/services/sql-database/README.md |
| MCP / agent interoperability | 335 | tests/AGENTS.md, .github/plugins/azure-skills/skills/azure-prepare/references/services/functions/templates/recipes/mcp/README.md, README.md |
| Observability / evaluation | 334 | .github/plugins/azure-skills/skills/azure-prepare/references/services/functions/templates/recipes/mcp/README.md, tests/README.md, README.md |
| Frontend / app framework | 161 | docs-site/README.md, README.md, .github/plugins/azure-sdk-typescript/README.md |
| Database / data infrastructure | 146 | .github/plugins/azure-skills/skills/azure-prepare/references/services/sql-database/README.md, README.md, .github/plugins/azure-sdk-dotnet/README.md |
| Data / ML platform | 66 | README.md, .github/plugins/azure-sdk-python/README.md, .github/plugins/azure-skills/README.md |
| RAG / retrieval / knowledge | 51 | tests/AGENTS.md, README.md, .github/plugins/azure-skills/skills/azure-prepare/references/services/foundry/README.md |
| Coding agent / software automation | 24 | README.md, .github/plugins/azure-skills/README.md, .github/plugins/azure-skills/skills/azure-prepare/references/recipes/azd/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1484 |
| manifests | 40 |
| docs | 1171 |
| tests | 303 |
| ci/ops | 23 |
| spec artifacts | 16 |
| agent instruction files | 12 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Agent Skills | Agent Skills / Quick Start / Clone and copy specific skills / Or use symlinks for multi-project setups / Share skills across different agent configs in the same repo / What's Inside / Skill Catalog / Core / Foundry (Language-Agnostic) / Python | Agent Skills ! Evals & Tests https //img.shields.io/github/actions/workflow/status/microsoft/skills/test harness.yml?branch=main&label=Evals%20%26%20Tests https //github.com/microsoft/skills/actions/workflows/test harness.yml ! Copilot SDK Tests https //img.shields.io/github/actions/workflow/status/microsoft/skills/skill evaluation.yml?branch=main&label=Copilot%20SDK%20Tests https //github.com/microsoft/skills/actions/workflows/skill evaluation.yml ! Install via skills.sh https //img.shields.io/badge/skills.sh install blue https //skills.sh/microsoft/skills ! Documentation https //img.shields.io/badge/docs documentation blue https //microsoft.github.io/skills/ documentation !NOTE Work in Pro |


## Key Files

### Manifests

- .github/plugins/azure-skills/skills/azure-compute/workflows/vm-creator/examples/bicep/README.md
- .github/plugins/azure-skills/skills/azure-compute/workflows/vm-creator/examples/terraform/README.md
- tests/AGENTS.md
- .github/plugins/azure-skills/skills/azure-deploy/references/recipes/azcli/README.md
- .github/plugins/azure-skills/skills/azure-prepare/references/recipes/azcli/README.md
- .github/plugins/azure-skills/skills/azure-prepare/references/services/functions/templates/recipes/mcp/README.md
- .github/plugins/azure-skills/skills/azure-prepare/references/services/sql-database/README.md
- .github/plugins/azure-skills/skills/azure-prepare/references/services/storage/README.md
- .github/plugins/azure-skills/skills/azure-validate/references/recipes/azcli/README.md
- tests/README.md
- docs-site/README.md
- README.md
- .github/plugins/azure-sdk-dotnet/README.md
- .github/plugins/azure-sdk-java/README.md
- .github/plugins/azure-sdk-python/README.md
- .github/plugins/azure-sdk-rust/README.md
- .github/plugins/azure-sdk-typescript/README.md
- .github/plugins/azure-skills/README.md
- .github/plugins/azure-skills/skills/azure-deploy/references/recipes/azd/README.md
- .github/plugins/azure-skills/skills/azure-deploy/references/recipes/bicep/README.md


### Spec / Docs / Prompt Artifacts

- tests/AGENTS.md
- Agents.md
- .github/plugins/azure-sdk-python/skills/azure-ai-projects-py/references/agents.md
- .github/plugins/deep-wiki/commands/agents.md
- .github/skills/mcp-builder/scripts/requirements.txt
- .github/copilot-instructions.md
- .github/prompts/add-endpoint.prompt.md
- .github/prompts/code-review.prompt.md
- .github/prompts/create-node.prompt.md
- .github/prompts/create-store.prompt.md
- .github/prompts/scaffold-foundry-app.prompt.md
- docs-site/src/data/agents.json
- .claude/settings.json
- .github/plugins/azure-skills/skills/azure-prepare/references/architecture.md
- .github/plugins/azure-skills/skills/azure-prepare/references/requirements.md
- .github/skills/podcast-generation/references/architecture.md


### Agent Instruction Files

- tests/AGENTS.md
- Agents.md
- .github/plugins/azure-sdk-python/skills/azure-ai-projects-py/references/agents.md
- .github/plugins/deep-wiki/commands/agents.md
- .github/copilot-instructions.md
- .github/prompts/add-endpoint.prompt.md
- .github/prompts/code-review.prompt.md
- .github/prompts/create-node.prompt.md
- .github/prompts/create-store.prompt.md
- .github/prompts/scaffold-foundry-app.prompt.md
- docs-site/src/data/agents.json
- .claude/settings.json


## Top Directories

| dir | count |
| --- | --- |
| .github | 1126 |
| tests | 298 |
| docs-site | 33 |
| docs | 12 |
| hooks | 3 |
| .entire | 2 |
| .claude | 1 |
| .claude-plugin | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .vscode | 1 |
| Agents.md | 1 |
| context7.json | 1 |
| LICENSE | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .md | 1158 |
| .yaml | 138 |
| .json | 36 |
| .py | 36 |
| .ts | 24 |
| .ps1 | 16 |
| .sh | 13 |
| [no-ext] | 10 |
| .yml | 8 |
| .astro | 7 |
| .tsx | 7 |
| .bicep | 4 |
| .js | 4 |
| .mjs | 4 |
| .ttf | 4 |
| .txt | 4 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
