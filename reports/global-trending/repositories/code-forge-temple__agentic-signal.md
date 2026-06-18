# code-forge-temple/agentic-signal

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/code-forge-temple/agentic-signal |
| local path | sources/code-forge-temple__agentic-signal |
| HEAD | dea6dd0 |
| stars/forks | 155 / 17 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T09:14:40Z |
| trendScore / priorityScore | 143 / 370 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval / knowledge | 142 | README.md, docs/docs/nodes/ai/rag.mdx, docs/docs/workflows/data/rag-eval.mdx |
| Frontend / app framework | 99 | README.md, docs/package.json, client/package.json |
| Local LLM / inference | 62 | README.md, client/package.json, docs/docs/nodes/ai/llm-process.mdx |
| Security / supply chain | 62 | README.md, docs/docs/getting-started/google-oauth-client.md, docs/docs/getting-started/reddit-oauth-client.md |
| Cloud native / infrastructure | 45 | README.md, client/vite.config.ts, docs/static/workflows/rag-eval.json |
| Observability / evaluation | 24 | docs/docs/nodes/ai/rag.mdx, docs/docs/workflows/data/rag-eval.mdx, docs/static/workflows/rag-eval.json |
| AI agent / orchestration | 20 | README.md, package.json, docs/docs/nodes/ai/llm-process.mdx |
| Data / ML platform | 19 | docs/static/workflows/rag-eval.json, docs/docs/nodes/data/async-data-aggregator.md, docs/docs/nodes/data/data-validation.mdx |
| Coding agent / software automation | 13 | docs/src/components/YouTubePreview/style.css, client/src/components/BaseDialog/BaseDialog.tsx, client/src/components/Dock/components/ActionsDock/ActionsDock.scss |
| Developer tools / DX | 13 | docs/tsconfig.json, package.json, docs/docs/getting-started/configuration.mdx |
| Database / data infrastructure | 7 | docs/docs/nodes/ai/rag.mdx, docs/static/workflows/rag-eval.json, docs/docs/getting-started/weaviate-setup.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Rust |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 430 |
| manifests | 12 |
| docs | 97 |
| tests | 0 |
| ci/ops | 4 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | [<img src="docs/static/img/logo.svg" alt="Agentic Signal" width="32" height="32">](https://code-forge-temple.github.io/agentic-signal/) Agentic Signal | [<img src="docs/static/img/logo.svg" alt="Agentic Signal" width="32" height="32">](https://code-forge-temple.github.io/agentic-signal/) Agentic Signal / 🎬 Demo Video / ✨ Features / 🎯 **Visual Workflow Builder** / 🧠 **Local AI Intelligence** / 🔗 **Rich Integrations** / 🚀 Quick Start / 🤝 Contributing / 📄 License / 🆘 Support | <img src="docs/static/img/logo.svg" alt="Agentic Signal" width="32" height="32" https //code forge temple.github.io/agentic signal/ Agentic Signal Visual AI Workflow Automation Platform with Local Agent Intelligence ⭐️ Love this project? Please consider starring the repository https //github.com/code forge temple/agentic signal on GitHub and supporting development https //github.com/sponsors/code forge temple to help me continue building amazing features! ! License AGPL v3 & Commercial https //img.shields.io/badge/License AGPL%20v3%20%7C%20Commercial blue.svg LICENSE.md ! Docs https //img.shields.io/badge/docs live blueviolet https //code forge temple.github.io/agentic signal/ ! TypeScript h |


## Key Files

### Manifests

- docs/README.md
- README.md
- docs/package.json
- docs/tsconfig.json
- client/package.json
- client/tsconfig.json
- client/vite.config.ts
- package.json
- src-tauri/Cargo.toml
- tsconfig.json
- client/tsconfig.app.json
- client/tsconfig.node.json


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| client | 220 |
| docs | 95 |
| server | 64 |
| src-tauri | 18 |
| scripts | 11 |
| .github | 3 |
| shared | 3 |
| .code-workspace | 1 |
| .dockerignore | 1 |
| .gitignore | 1 |
| bunfig.toml | 1 |
| deno.json | 1 |
| docker-build.bat | 1 |
| docker-build.sh | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 189 |
| .tsx | 80 |
| .mdx | 30 |
| .json | 28 |
| .md | 28 |
| .scss | 16 |
| [no-ext] | 15 |
| .mustache | 10 |
| .svg | 10 |
| .css | 6 |
| .rs | 6 |
| .yml | 3 |
| .html | 2 |
| .toml | 2 |
| .bat | 1 |
| .icns | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
