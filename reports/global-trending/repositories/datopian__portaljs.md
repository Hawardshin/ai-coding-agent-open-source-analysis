# datopian/portaljs

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/datopian/portaljs |
| local path | sources/datopian__portaljs |
| HEAD | cda774b |
| stars/forks | 2282 / 332 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T09:40:44Z |
| trendScore / priorityScore | 148 / 405 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Data / ML platform | 367 | examples/dataset-frictionless/public/dataset/README.md, examples/dataset-frictionless/README.md, examples/fivethirtyeight/README.md |
| Frontend / app framework | 241 | examples/ckan/README.md, examples/fivethirtyeight/README.md, examples/portaljs-catalog/README.md |
| MCP / agent interoperability | 36 | AGENTS.md, site/content/cloud/docs/mcp-server.md |
| Developer tools / DX | 16 | examples/ckan-ssg/README.md, tests/README.md, .changeset/README.md |
| Database / data infrastructure | 15 | examples/dataset-frictionless/public/country-codes/README.md, examples/portaljs-catalog/lib/providers/README.md, README.md |
| Coding agent / software automation | 11 | AGENTS.md, tests/README.md, README.md |
| Observability / evaluation | 9 | examples/dataset-frictionless/public/dataset/README.md, examples/learn/package.json, examples/turing/package.json |
| AI agent / orchestration | 8 | AGENTS.md, tests/README.md, README.md |
| Cloud native / infrastructure | 4 | examples/dataset-frictionless/package.json, examples/ckan/styles/globals.css, examples/dataset-frictionless/pages/index.js |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, sdk-api |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Infra/Ops, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1805 |
| manifests | 40 |
| docs | 539 |
| tests | 27 |
| ci/ops | 1 |
| spec artifacts | 33 |
| agent instruction files | 26 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Quickstart / Why PortalJS / Architecture at a glance / Build a portal with your AI assistant / Setup / Use / Available skills / What's in this repo / What makes it different / Examples | <p align="center" <img src="assets/portaljs logo.svg" alt="PortalJS" width="96" height="96" / <h1 align="center" PortalJS</h1 <p align="center" <b The AI native framework for building data portals.</b <br / Describe the portal you want — your agent helps you choose an architecture, scaffolds it, and loads your data. <br / <br / <a href="https //www.portaljs.com/opensource" Docs</a · <a href="https //github.com/datopian/portaljs/discussions" Discussions</a · <a href="https //github.com/datopian/portaljs/issues/new" Report a bug</a <br / <br / <a href="https //discord.gg/krmj5HM6He" <img src="https //dcbadge.limes.pink/api/server/krmj5HM6He" alt="Join our Discord server"/ </a <img src="https / |


## Key Files

### Manifests

- examples/ckan-ssg/README.md
- examples/ckan/README.md
- examples/dataset-frictionless/public/country-codes/README.md
- examples/dataset-frictionless/public/dataset/README.md
- examples/dataset-frictionless/README.md
- examples/fivethirtyeight/README.md
- examples/fivethirtyeight/scripts/README.md
- examples/github-backed-catalog/README.md
- examples/learn/README.md
- examples/openspending/content/resources/handbook/README.md
- examples/openspending/README.md
- examples/portaljs-catalog/lib/metadata/README.md
- examples/portaljs-catalog/lib/providers/README.md
- examples/portaljs-catalog/README.md
- examples/portaljs-template/README.md
- examples/turing/README.md
- packages/ckan-api-client-js/README.md
- AGENTS.md
- tests/README.md
- .changeset/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- tests/skill-triggering/prompts/add-chart.txt
- tests/skill-triggering/prompts/add-dataset.txt
- tests/skill-triggering/prompts/add-map.txt
- tests/skill-triggering/prompts/add-resource.txt
- tests/skill-triggering/prompts/architect.txt
- tests/skill-triggering/prompts/check-data-quality.txt
- tests/skill-triggering/prompts/connect-ckan.txt
- tests/skill-triggering/prompts/define-schema.txt
- tests/skill-triggering/prompts/deploy.txt
- tests/skill-triggering/prompts/new-portal.txt
- examples/ckan-ssg/specs/index.spec.tsx
- site/specs/index.spec.js
- site/content/docs/architecture/decision-framework.md
- cloud/SPEC.md
- .claude/AUTHORING.md
- .claude/INSTALL.md
- DESIGN.md
- packages/create-portaljs/SPEC.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- tests/skill-triggering/prompts/add-chart.txt
- tests/skill-triggering/prompts/add-dataset.txt
- tests/skill-triggering/prompts/add-map.txt
- tests/skill-triggering/prompts/add-resource.txt
- tests/skill-triggering/prompts/architect.txt
- tests/skill-triggering/prompts/check-data-quality.txt
- tests/skill-triggering/prompts/connect-ckan.txt
- tests/skill-triggering/prompts/define-schema.txt
- tests/skill-triggering/prompts/deploy.txt
- tests/skill-triggering/prompts/new-portal.txt
- .claude/AUTHORING.md
- .claude/INSTALL.md
- .claude/commands/add-chart.md


## Top Directories

| dir | count |
| --- | --- |
| examples | 1033 |
| site | 538 |
| packages | 142 |
| cloud | 38 |
| .claude | 14 |
| tests | 13 |
| .changeset | 2 |
| .claude-plugin | 2 |
| scripts | 2 |
| .editorconfig | 1 |
| .eslintignore | 1 |
| .eslintrc.json | 1 |
| .github | 1 |
| .gitignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .md | 534 |
| .html | 392 |
| .json | 266 |
| .tsx | 236 |
| .ts | 113 |
| .js | 56 |
| .svg | 51 |
| [no-ext] | 34 |
| .mdown | 31 |
| .jsx | 19 |
| .css | 18 |
| .txt | 12 |
| .csv | 8 |
| .mjs | 8 |
| .mdx | 5 |
| .sh | 5 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
