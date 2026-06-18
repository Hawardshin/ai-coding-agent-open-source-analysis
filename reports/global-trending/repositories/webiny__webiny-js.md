# webiny/webiny-js

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/webiny/webiny-js |
| local path | sources/webiny__webiny-js |
| HEAD | eda614bf |
| stars/forks | 7991 / 675 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T22:04:48Z |
| trendScore / priorityScore | 152 / 419 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / app framework | 187 | AGENTS.md, README.md, packages/app-security-access-management/package.json |
| Developer tools / DX | 180 | README.md, packages/cli-core/package.json, packages/cli-core/tsconfig.json |
| Cloud native / infrastructure | 54 | docs/sql/README.md, README.md, docs/superpowers/specs/2026-06-03-cms-sql-storage-simplification-design.md |
| Database / data infrastructure | 21 | docs/sql/README.md, docs/superpowers/specs/2026-06-03-cms-sql-storage-simplification-design.md, docs/superpowers/plans/2026-06-03-cms-sql-storage-simplification.md |
| Coding agent / software automation | 20 | docs/sql/README.md, README.md, CLAUDE.md |
| MCP / agent interoperability | 20 | AGENTS.md, README.md, CLAUDE.md |
| Security / supply chain | 10 | README.md, packages/app-security-access-management/package.json, package.json |
| AI agent / orchestration | 8 | README.md, CLAUDE.md |
| Data / ML platform | 1 | docs/superpowers/plans/2026-06-03-cms-sql-storage-simplification.md |
| Observability / evaluation | 1 | docs/superpowers/specs/2026-06-03-cms-sql-storage-simplification-design.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, sdk-api, security, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 8000 (capped) |
| manifests | 40 |
| docs | 211 |
| tests | 641 |
| ci/ops | 64 |
| spec artifacts | 37 |
| agent instruction files | 14 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | About Webiny | About Webiny / What's Inside / Architecture / Quick Start / Ready to develop / AI-Assisted Development / The MCP server runs locally inside your Webiny project / Connect it to your AI coding tool of choice / See docs for tool-specific setup instructions / Extending Webiny | <p align="center" <img src="./docs/static/webiny logo.svg" width="350" </p <p align="center" AI programmable CMS for enterprises hosting on AWS </p <p align="center" <a href="https //github.com/webiny/webiny js/actions" <img src="https //img.shields.io/github/actions/workflow/status/webiny/webiny js/push.yml" alt="Build Status" </a <a href="https //www.npmjs.com/package/@webiny/cli" <img src="https //img.shields.io/npm/dt/@webiny/cli.svg" alt="Total Downloads" </a <a href="https //github.com/webiny/webiny js/releases" <img src="https //img.shields.io/github/v/release/webiny/webiny js" alt="Latest Release" </a <a href="https //github.com/webiny/webiny js/blob/master/LICENSE" <img src="https / |


## Key Files

### Manifests

- docs/sql/README.md
- AGENTS.md
- packages/webiny/AGENTS.md
- extensions/README.md
- README.md
- skills/repo-skills/README.md
- CLAUDE.md
- packages/api-headless-cms-storage/package.json
- packages/api-headless-cms-storage/tsconfig.json
- packages/app-security-access-management/package.json
- packages/app-security-access-management/tsconfig.json
- packages/cli-core/package.json
- packages/cli-core/tsconfig.json
- packages/cli/package.json
- packages/mcp/package.json
- packages/mcp/tsconfig.json
- scripts/cli/package.json
- scripts/cli/tsconfig.json
- cypress-tests/package.json
- cypress-tests/tsconfig.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- packages/webiny/AGENTS.md
- CLAUDE.md
- .github/copilot-instructions.md
- docs/superpowers/specs/2026-06-03-cms-sql-storage-simplification-design.md
- ai-context/specs/api-websockets-server.md
- ai-context/specs/api-websockets-split.md
- docs/superpowers/specs/2026-04-19-mailer-code-driven-config-design.md
- docs/superpowers/specs/2026-04-19-mailer-encryption-removal-design.md
- docs/superpowers/specs/2026-04-20-self-cleaning-tasks-design.md
- docs/superpowers/specs/2026-05-13-entry-data-factories-as-features-design.md
- docs/superpowers/specs/2026-05-13-entry-data-factories-inline-logic-design.md
- docs/superpowers/specs/2026-05-15-webhooks-sdk-design.md
- docs/superpowers/specs/2026-05-16-webhooks-admin-ui-design.md
- docs/superpowers/specs/2026-05-16-webhooks-admin-ui-polish-design.md
- docs/superpowers/specs/2026-05-19-webhook-deliver-design.md
- docs/superpowers/specs/2026-05-20-background-tasks-admin-ui-design.md
- docs/superpowers/specs/2026-05-20-webhook-deliveries-page-design.md
- docs/superpowers/specs/2026-05-21-background-tasks-admin-ui-redesign.md
- docs/superpowers/specs/2026-05-21-webhook-delivery-retention-setting-design.md


### Agent Instruction Files

- AGENTS.md
- packages/webiny/AGENTS.md
- CLAUDE.md
- .github/copilot-instructions.md
- .claude/skills/tester/SKILL.md
- .claude/skills/backend-developer/backend-developer-guide.md
- .claude/skills/backend-developer/di-container.md
- .claude/skills/backend-developer/event-publisher.md
- .claude/skills/backend-developer/permissions.md
- .claude/skills/grill-me/SKILL.md
- .claude/skills/prd-to-plan/SKILL.md
- .claude/skills/preflight/SKILL.md
- .claude/skills/webiny-skill-creator/SKILL.md
- .claude/skills/write-a-prd/SKILL.md


## Top Directories

| dir | count |
| --- | --- |
| packages | 7352 |
| scripts | 203 |
| cypress-tests | 86 |
| skills | 69 |
| .github | 67 |
| docs | 67 |
| extensions | 55 |
| ai-context | 40 |
| .claude | 10 |
| dependencies | 6 |
| devtools | 6 |
| typings | 6 |
| testing | 5 |
| .yarn | 3 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 4023 |
| .svg | 2270 |
| .tsx | 854 |
| .json | 293 |
| .js | 276 |
| .md | 199 |
| .yml | 31 |
| .css | 15 |
| .cjs | 9 |
| [no-ext] | 6 |
| .txt | 5 |
| .graphql | 3 |
| .html | 3 |
| .yaml | 3 |
| .patch | 2 |
| .scss | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
