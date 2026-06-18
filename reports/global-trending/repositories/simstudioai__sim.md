# simstudioai/sim

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/simstudioai/sim |
| local path | sources/simstudioai__sim |
| HEAD | 56a88a2 |
| stars/forks | 28809 / 3662 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T23:45:26Z |
| trendScore / priorityScore | 165 / 514 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | apps/sim/AGENTS.md, apps/docs/content/docs/en/agents/choosing.mdx, apps/docs/content/docs/en/agents/index.mdx |
| AI agent / orchestration | 491 | apps/sim/AGENTS.md, apps/sim/blocks/AGENTS.md, README.md |
| Security / supply chain | 375 | AGENTS.md, apps/sim/AGENTS.md, apps/sim/tools/AGENTS.md |
| Cloud native / infrastructure | 308 | packages/cli/README.md, .devcontainer/README.md, packages/README.md |
| Database / data infrastructure | 284 | AGENTS.md, .devcontainer/README.md, packages/README.md |
| Developer tools / DX | 142 | packages/cli/README.md, AGENTS.md, apps/sim/AGENTS.md |
| Frontend / app framework | 119 | apps/docs/README.md, AGENTS.md, apps/sim/AGENTS.md |
| RAG / retrieval / knowledge | 63 | README.md, apps/sim/lib/guardrails/README.md, apps/docs/content/docs/en/agents/index.mdx |
| Observability / evaluation | 50 | helm/sim/README.md, apps/docs/content/docs/en/integrations/agentphone.mdx, apps/docs/content/docs/en/platform/self-hosting/object-storage.mdx |
| Local LLM / inference | 41 | README.md, apps/sim/lib/guardrails/README.md, helm/sim/README.md |
| Coding agent / software automation | 24 | AGENTS.md, README.md, CLAUDE.md |
| Data / ML platform | 9 | apps/docs/content/docs/en/agents/index.mdx, apps/docs/content/docs/en/integrations/agentmail.mdx, helm/sim/examples/values-aws.yaml |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 8000 (capped) |
| manifests | 40 |
| docs | 607 |
| tests | 451 |
| ci/ops | 78 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Create your secrets | Build everything in Chat / Create files and documents / Ground agents in your knowledge / Structured data with Tables / Build visually with Workflows / Quickstart / Cloud-hosted: [sim.ai](https://sim.ai) / Self-hosted: NPM Package / Self-hosted: Docker Compose / Self-hosted: Manual Setup | <p align="center" <a href="https //sim.ai" target=" blank" rel="noopener noreferrer" <picture <source media=" prefers color scheme dark " srcset="apps/sim/public/logo/wordmark.svg" <source media=" prefers color scheme light " srcset="apps/sim/public/logo/wordmark dark.svg" <img src="apps/sim/public/logo/wordmark dark.svg" alt="Sim Logo" width="380"/ </picture </a </p <p align="center" The open source AI workspace where teams build, deploy, and manage AI agents. Build conversationally, visually, or with code. Connect 1,000+ integrations and every major LLM to automate real work.</p <p align="center" <a href="https //sim.ai" target=" blank" rel="noopener noreferrer" <img src="https //img.shiel |


## Key Files

### Manifests

- apps/docs/README.md
- packages/cli/README.md
- AGENTS.md
- apps/sim/AGENTS.md
- apps/sim/blocks/AGENTS.md
- apps/sim/components/emcn/AGENTS.md
- apps/sim/hooks/AGENTS.md
- apps/sim/hooks/queries/AGENTS.md
- apps/sim/stores/AGENTS.md
- apps/sim/tools/AGENTS.md
- apps/sim/triggers/AGENTS.md
- .devcontainer/README.md
- packages/README.md
- README.md
- scripts/README.md
- apps/sim/lib/guardrails/README.md
- apps/sim/scripts/load/README.md
- helm/sim/README.md
- packages/python-sdk/README.md
- packages/ts-sdk/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- apps/sim/AGENTS.md
- apps/sim/blocks/AGENTS.md
- apps/sim/components/emcn/AGENTS.md
- apps/sim/hooks/AGENTS.md
- apps/sim/hooks/queries/AGENTS.md
- apps/sim/stores/AGENTS.md
- apps/sim/tools/AGENTS.md
- apps/sim/triggers/AGENTS.md
- CLAUDE.md
- apps/sim/lib/guardrails/requirements.txt
- .cursor/rules/sim-testing.mdc
- .cursor/commands/add-block.md
- .cursor/commands/add-connector.md
- .cursor/commands/add-feature-flag.md
- .cursor/commands/add-hosted-key.md
- .cursor/commands/add-integration.md
- .cursor/commands/add-tools.md
- .cursor/commands/add-trigger.md
- .cursor/commands/cleanup.md


### Agent Instruction Files

- AGENTS.md
- apps/sim/AGENTS.md
- apps/sim/blocks/AGENTS.md
- apps/sim/components/emcn/AGENTS.md
- apps/sim/hooks/AGENTS.md
- apps/sim/hooks/queries/AGENTS.md
- apps/sim/stores/AGENTS.md
- apps/sim/tools/AGENTS.md
- apps/sim/triggers/AGENTS.md
- CLAUDE.md
- .cursor/rules/sim-testing.mdc
- .cursor/commands/add-block.md
- .cursor/commands/add-connector.md
- .cursor/commands/add-feature-flag.md
- .cursor/commands/add-hosted-key.md


## Top Directories

| dir | count |
| --- | --- |
| apps | 7114 |
| packages | 656 |
| helm | 60 |
| .claude | 36 |
| .cursor | 35 |
| .agents | 34 |
| scripts | 22 |
| .github | 17 |
| .devcontainer | 6 |
| docker | 3 |
| .dockerignore | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .husky | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 6405 |
| .mdx | 423 |
| .tsx | 333 |
| .json | 318 |
| .sql | 239 |
| .md | 111 |
| .yaml | 61 |
| .svg | 26 |
| .yml | 17 |
| [no-ext] | 16 |
| .mdc | 15 |
| .py | 7 |
| .css | 5 |
| .cjs | 4 |
| .txt | 4 |
| .dockerfile | 3 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
