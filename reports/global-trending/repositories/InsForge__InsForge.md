# InsForge/InsForge

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/InsForge/InsForge |
| local path | sources/InsForge__InsForge |
| HEAD | 8ded63d |
| stars/forks | 11848 / 1009 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-18T00:02:50Z |
| trendScore / priorityScore | 177 / 534 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Database / data infrastructure | 500 | examples/python-ml-experiment-tracker/README.md, docs/deployment/README.md, backend/tests/README.md |
| Developer tools / DX | 432 | docs/README.md, examples/python-ml-experiment-tracker/README.md, functions/examples/README.md |
| Security / supply chain | 349 | examples/python-ml-experiment-tracker/README.md, functions/examples/README.md, docs/deployment/README.md |
| MCP / agent interoperability | 321 | functions/examples/README.md, docs/deployment/README.md, README.md |
| Frontend / app framework | 317 | packages/dashboard/README.md, packages/ui/README.md, frontend/package.json |
| Cloud native / infrastructure | 310 | examples/python-ml-experiment-tracker/README.md, functions/examples/README.md, docs/deployment/README.md |
| AI agent / orchestration | 232 | docs/deployment/README.md, README.md, .claude/skills/README.md |
| Coding agent / software automation | 225 | README.md, .claude/skills/README.md, docs/mcp-setup.mdx |
| RAG / retrieval / knowledge | 39 | docs/core-concepts/database/overview.mdx, docs/core-concepts/database/pgvector.mdx, docs/asset-guidelines.md |
| Observability / evaluation | 10 | packages/dashboard/README.md, docs/deployment/deployment-security-guide.md, docs/superpowers/specs/2026-04-07-compute-dashboard-ux-design.md |
| Data / ML platform | 4 | docs/superpowers/specs/2026-04-22-s3-compatible-storage-gateway-design.md, docs/agent-native/config-as-code.mdx, packages/dashboard/src/features/dashboard/prompts/crm-system.ts |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1274 |
| manifests | 36 |
| docs | 188 |
| tests | 218 |
| ci/ops | 18 |
| spec artifacts | 25 |
| agent instruction files | 17 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Run with Docker | InsForge / How it works / Core Products: / ⭐️ Star the Repository / Quickstart / Cloud-hosted: [insforge.dev](https://insforge.dev) / Self-hosted: Docker Compose / Run with Docker / Create a separate env file for each project / One-click Deployment | <div align="center" <a href="https //insforge.dev" <picture <source media=" prefers color scheme dark " srcset="assets/logo dark.svg" <source media=" prefers color scheme light " srcset="assets/logo light.svg" <img src="assets/logo dark.svg" alt="InsForge" width="500" </picture </a <p The all in one, open source backend platform for agentic coding.<br / </p <p <a href="https //opensource.org/licenses/Apache 2.0" <img src="https //img.shields.io/badge/License Apache%202.0 orange.svg" alt="License" </a <a href="https //www.npmjs.com/package/@insforge/sdk" <img src="https //img.shields.io/npm/dt/@insforge/sdk?color=blue&label=downloads" alt="Downloads" </a <a href="https //github.com/InsForge/I |


## Key Files

### Manifests

- docs/README.md
- examples/python-ml-experiment-tracker/README.md
- functions/examples/README.md
- docs/deployment/README.md
- backend/tests/manual/README.md
- backend/tests/README.md
- README.md
- .claude/skills/README.md
- deploy/zeabur/README.md
- packages/dashboard/README.md
- packages/ui/README.md
- examples/python-ml-experiment-tracker/pyproject.toml
- frontend/package.json
- frontend/tsconfig.json
- frontend/vite.config.ts
- backend/package.json
- backend/tsconfig.json
- docker-compose.yml
- Dockerfile
- package.json


### Spec / Docs / Prompt Artifacts

- .claude/skills/README.md
- .github/copilot-instructions.md
- docs/superpowers/specs/2026-04-22-s3-compatible-storage-gateway-design.md
- packages/dashboard/src/features/dashboard/prompts/ai-chatbot.ts
- packages/dashboard/src/features/dashboard/prompts/crm-system.ts
- packages/dashboard/src/features/dashboard/prompts/ecommerce-platform.ts
- packages/dashboard/src/features/dashboard/prompts/index.ts
- packages/dashboard/src/features/dashboard/prompts/instagram-clone.ts
- packages/dashboard/src/features/dashboard/prompts/notion-clone.ts
- packages/dashboard/src/features/dashboard/prompts/reddit-clone.ts
- docs/specs/2026-04-18-docs-audit.md
- docs/superpowers/specs/2026-03-16-custom-smtp-design.md
- docs/superpowers/specs/2026-04-07-compute-dashboard-ux-design.md
- docs/superpowers/specs/2026-04-21-dtest-onboarding-design.md
- docs/superpowers/specs/2026-04-29-backend-branching-oss-design.md
- docs/superpowers/specs/2026-05-24-posthog-analytics-layout-redesign-design.md
- docs/superpowers/specs/2026-06-04-compute-container-logs-design.md
- .claude/skills/insforge-dev/docs/SKILL.md
- .claude/skills/doc-author/INSFORGE.md
- .claude/skills/doc-author/SKILL.md


### Agent Instruction Files

- .claude/skills/README.md
- .github/copilot-instructions.md
- packages/dashboard/src/features/dashboard/prompts/ai-chatbot.ts
- packages/dashboard/src/features/dashboard/prompts/crm-system.ts
- packages/dashboard/src/features/dashboard/prompts/ecommerce-platform.ts
- packages/dashboard/src/features/dashboard/prompts/index.ts
- packages/dashboard/src/features/dashboard/prompts/instagram-clone.ts
- packages/dashboard/src/features/dashboard/prompts/notion-clone.ts
- packages/dashboard/src/features/dashboard/prompts/reddit-clone.ts
- .claude/skills/insforge-dev/docs/SKILL.md
- .claude/skills/doc-author/INSFORGE.md
- .claude/skills/doc-author/SKILL.md
- .claude/skills/insforge-dev/backend/SKILL.md
- .claude/skills/insforge-dev/dashboard/SKILL.md
- .claude/skills/insforge-dev/shared-schemas/SKILL.md


## Top Directories

| dir | count |
| --- | --- |
| packages | 567 |
| backend | 438 |
| docs | 147 |
| frontend | 15 |
| .github | 14 |
| openapi | 14 |
| examples | 12 |
| deploy | 11 |
| .claude | 9 |
| .agents | 6 |
| .codex | 6 |
| functions | 6 |
| assets | 2 |
| .claude-plugin | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 577 |
| .tsx | 277 |
| .md | 84 |
| .mdx | 73 |
| .svg | 70 |
| .sql | 60 |
| .sh | 29 |
| .json | 20 |
| .yml | 20 |
| .yaml | 14 |
| .js | 9 |
| [no-ext] | 9 |
| .mp4 | 8 |
| .py | 6 |
| .css | 4 |
| .html | 4 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
