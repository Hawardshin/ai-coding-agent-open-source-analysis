# giselles-ai/giselle

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/giselles-ai/giselle |
| local path | sources/giselles-ai__giselle |
| HEAD | dc097df |
| stars/forks | 535 / 123 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-18T00:27:09Z |
| trendScore / priorityScore | 147 / 414 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / app framework | 158 | AGENTS.md, internal-packages/workflow-designer-ui/src/new-editor/AGENTS.md, apps/studio.giselles.ai/emails/README.md |
| RAG / retrieval / knowledge | 95 | packages/rag/README.md, AGENTS.md, packages/document-preprocessor/README.md |
| Developer tools / DX | 93 | AGENTS.md, internal-packages/workflow-designer-ui/src/editor/properties-panel/trigger-node-properties-panel/providers/github-trigger/AGENTS.md, internal-packages/workflow-designer-ui/src/new-editor/AGENTS.md |
| Security / supply chain | 74 | internal-packages/workflow-designer-ui/src/editor/properties-panel/trigger-node-properties-panel/providers/github-trigger/AGENTS.md, packages/document-preprocessor/README.md, packages/sdk/README.md |
| Database / data infrastructure | 73 | packages/rag/README.md, AGENTS.md, apps/studio.giselles.ai/lib/internal-api/AGENTS.md |
| AI agent / orchestration | 44 | AGENTS.md, apps/studio.giselles.ai/lib/internal-api/AGENTS.md, internal-packages/workflow-designer-ui/src/editor/properties-panel/trigger-node-properties-panel/providers/github-trigger/AGENTS.md |
| Cloud native / infrastructure | 29 | packages/rag/README.md, apps/studio.giselles.ai/emails/README.md, packages/rag/package.json |
| Data / ML platform | 16 | packages/rag/README.md, AGENTS.md, apps/studio.giselles.ai/db/migrate/system/README.md |
| Observability / evaluation | 15 | packages/pseudo-tiktoken/README.md, package.json, apps/studio.giselles.ai/package.json |
| Coding agent / software automation | 6 | README.md, docs/adr/0004-giselle-storage.md, SECURITY.md |
| MCP / agent interoperability | 6 | AGENTS.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1884 |
| manifests | 40 |
| docs | 132 |
| tests | 96 |
| ci/ops | 7 |
| spec artifacts | 33 |
| agent instruction files | 28 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Clone the repository | 👋 Introduction / ⚡ Quick Start / Clone the repository / Install dependencies / Create environment file / Add your API key (at least one required) / Start development server / ✨ Features / 🎯 Use Cases / 🚀 Using Giselle | <div align="center" <a href="https //github.com/giselles ai/giselle" <img src="https //img.shields.io/github/stars/giselles ai/giselle.svg?style=social&label=Star" alt="GitHub stars" style="margin right 5px;" </a <img src="https //img.shields.io/badge/License Apache2.0 blue.svg" alt="License" style="margin right 5px;" <img src="./docs/assets/giselle logo light.svg gh light mode only" alt="Giselle logo" height="100" <img src="./docs/assets/giselle logo dark.svg gh dark mode only" alt="Giselle logo" height="100" <span style="font size 18px; color 666; margin left 15px;" the AI agent studio powering product delivery</span <p <a href="https //www.producthunt.com/products/giselle?embed=true&amp;u |


## Key Files

### Manifests

- docs/AGENTS.md
- packages/rag/README.md
- AGENTS.md
- apps/studio.giselles.ai/lib/internal-api/AGENTS.md
- internal-packages/workflow-designer-ui/src/editor/properties-panel/trigger-node-properties-panel/providers/github-trigger/AGENTS.md
- internal-packages/workflow-designer-ui/src/new-editor/AGENTS.md
- .changeset/README.md
- .continuity/README.md
- README.md
- apps/studio.giselles.ai/db/migrate/system/README.md
- apps/studio.giselles.ai/emails/README.md
- apps/studio.giselles.ai/packages/README.md
- apps/studio.giselles.ai/README.md
- apps/studio.giselles.ai/trigger/README.md
- apps/ui.giselles.ai/README.md
- packages/document-preprocessor/README.md
- packages/pseudo-tiktoken/README.md
- packages/sdk/README.md
- packages/supabase-driver/README.md
- packages/web-search/README.md


### Spec / Docs / Prompt Artifacts

- docs/AGENTS.md
- AGENTS.md
- apps/studio.giselles.ai/lib/internal-api/AGENTS.md
- internal-packages/workflow-designer-ui/src/editor/properties-panel/trigger-node-properties-panel/providers/github-trigger/AGENTS.md
- internal-packages/workflow-designer-ui/src/new-editor/AGENTS.md
- .cursor/rules/vercel-cli.mdc
- docs/adr/0001-migrate-from-vercel-storage-to-supabase-storage.md
- docs/adr/0002-custom-storage-driver-for-supabase-storage.md
- docs/adr/0004-giselle-storage.md
- .cursor/rules/design-mode.mdc
- .cursor/rules/development-guide.mdc
- .cursor/rules/edit-workspace-tour.mdc
- .cursor/rules/language-support.mdc
- .cursor/rules/naming-guide.mdc
- .cursor/rules/nodejs.mdc
- .cursor/rules/update-ai-sdk.mdc
- docs/adr/0003-managing-secrets.md
- .claude/agents/brand-guardian.md
- .claude/agents/proofreader.md
- .claude/agents/react-coder.md


### Agent Instruction Files

- docs/AGENTS.md
- AGENTS.md
- apps/studio.giselles.ai/lib/internal-api/AGENTS.md
- internal-packages/workflow-designer-ui/src/editor/properties-panel/trigger-node-properties-panel/providers/github-trigger/AGENTS.md
- internal-packages/workflow-designer-ui/src/new-editor/AGENTS.md
- .cursor/rules/vercel-cli.mdc
- .cursor/rules/design-mode.mdc
- .cursor/rules/development-guide.mdc
- .cursor/rules/edit-workspace-tour.mdc
- .cursor/rules/language-support.mdc
- .cursor/rules/naming-guide.mdc
- .cursor/rules/nodejs.mdc
- .cursor/rules/update-ai-sdk.mdc
- .claude/agents/brand-guardian.md
- .claude/agents/proofreader.md


## Top Directories

| dir | count |
| --- | --- |
| apps | 705 |
| packages | 603 |
| internal-packages | 410 |
| .continuity | 69 |
| docs | 20 |
| .claude | 15 |
| .github | 14 |
| .cursor | 8 |
| scripts | 8 |
| tools | 5 |
| turbo | 5 |
| .changeset | 2 |
| config | 2 |
| .gitignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 889 |
| .tsx | 510 |
| .json | 189 |
| .md | 129 |
| .sql | 80 |
| .txt | 18 |
| .yml | 12 |
| .mjs | 11 |
| [no-ext] | 11 |
| .mdc | 8 |
| .css | 7 |
| .mts | 5 |
| .hbs | 4 |
| .diff | 2 |
| .snap | 2 |
| .svg | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
