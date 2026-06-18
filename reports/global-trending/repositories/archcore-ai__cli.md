# archcore-ai/cli

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/archcore-ai/cli |
| local path | sources/archcore-ai__cli |
| HEAD | c79cb91 |
| stars/forks | 47 / 2 |
| language | Go |
| license |  |
| pushedAt | 2026-06-17T20:35:40Z |
| trendScore / priorityScore | 145 / 389 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 336 | examples/01-minimal/AGENTS.md, examples/02-fullstack-app/AGENTS.md, examples/03-product-planning/AGENTS.md |
| AI agent / orchestration | 172 | examples/01-minimal/AGENTS.md, examples/02-fullstack-app/AGENTS.md, examples/03-product-planning/AGENTS.md |
| Coding agent / software automation | 123 | examples/README.md, examples/01-minimal/README.md, examples/02-fullstack-app/README.md |
| Developer tools / DX | 68 | examples/README.md, examples/01-minimal/README.md, examples/02-fullstack-app/README.md |
| Frontend / app framework | 52 | examples/_global_/README.md, examples/02-fullstack-app/README.md, examples/04-experience-playbook/README.md |
| Security / supply chain | 25 | examples/_global_/README.md, examples/06-global-multiple-sources/README.md, README.md |
| Database / data infrastructure | 17 | examples/01-minimal/README.md, examples/02-fullstack-app/README.md, README.md |
| Observability / evaluation | 5 | examples/02-fullstack-app/README.md, examples/02-fullstack-app/.archcore/infra/deployment.adr.md, examples/02-fullstack-app/.archcore/infra/observability.doc.md |
| Cloud native / infrastructure | 4 | examples/01-minimal/.archcore/architecture-overview.doc.md, examples/02-fullstack-app/.archcore/infra/deployment.adr.md |
| RAG / retrieval / knowledge | 1 | examples/05-global-single-source/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Go |
| capabilities | Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 387 |
| manifests | 32 |
| docs | 179 |
| tests | 71 |
| ci/ops | 2 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Archcore CLI | Archcore CLI / In 60 seconds / Ask your AI things like / Try these first / What changes after install / Use Archcore when / Why not just instruction files? / Supported agents / How it works / Mental model | Archcore CLI ! License https //img.shields.io/badge/License Apache 2.0 blue.svg https //opensource.org/licenses/Apache 2.0 ! Go https //img.shields.io/badge/Go 1.24+ 00ADD8?logo=go&logoColor=white https //go.dev ! Release https //img.shields.io/github/v/release/archcore ai/cli https //github.com/archcore ai/cli/releases ! Platform https //img.shields.io/badge/platform macOS%20%7C%20Linux%20%7C%20Windows lightgrey https //github.com/archcore ai/cli/releases Your AI agent stops guessing and starts following your architecture. Git ships your code. CI/CD ships your delivery. Archcore ships your understanding. Archcore stores your decisions, rules, and conventions in Git — so your AI agent follow |


## Key Files

### Manifests

- examples/01-minimal/AGENTS.md
- examples/02-fullstack-app/AGENTS.md
- examples/03-product-planning/AGENTS.md
- examples/04-experience-playbook/AGENTS.md
- examples/05-global-single-source/AGENTS.md
- examples/06-global-multiple-sources/AGENTS.md
- examples/07-local-overrides-global/AGENTS.md
- examples/08-global-in-archcore/AGENTS.md
- examples/09-monorepo-shared-global/apps/api/AGENTS.md
- examples/09-monorepo-shared-global/apps/web/AGENTS.md
- examples/09-monorepo-shared-global/packages/shared-standards/AGENTS.md
- examples/10-monorepo-root-global/AGENTS.md
- examples/10-monorepo-root-global/apps/api/AGENTS.md
- examples/10-monorepo-root-global/apps/web/AGENTS.md
- examples/10-monorepo-root-global/packages/ui/AGENTS.md
- examples/README.md
- examples/_global_/README.md
- examples/01-minimal/README.md
- examples/02-fullstack-app/README.md
- examples/03-product-planning/README.md


### Spec / Docs / Prompt Artifacts

- examples/01-minimal/AGENTS.md
- examples/02-fullstack-app/AGENTS.md
- examples/03-product-planning/AGENTS.md
- examples/04-experience-playbook/AGENTS.md
- examples/05-global-single-source/AGENTS.md
- examples/06-global-multiple-sources/AGENTS.md
- examples/07-local-overrides-global/AGENTS.md
- examples/08-global-in-archcore/AGENTS.md
- examples/09-monorepo-shared-global/apps/api/AGENTS.md
- examples/09-monorepo-shared-global/apps/web/AGENTS.md
- examples/09-monorepo-shared-global/packages/shared-standards/AGENTS.md
- examples/10-monorepo-root-global/AGENTS.md
- examples/10-monorepo-root-global/apps/api/AGENTS.md
- examples/10-monorepo-root-global/apps/web/AGENTS.md
- examples/10-monorepo-root-global/packages/ui/AGENTS.md
- AGENTS.md
- CLAUDE.md
- examples/01-minimal/.cursor/mcp.json
- examples/02-fullstack-app/.cursor/mcp.json
- examples/03-product-planning/.cursor/mcp.json


### Agent Instruction Files

- examples/01-minimal/AGENTS.md
- examples/02-fullstack-app/AGENTS.md
- examples/03-product-planning/AGENTS.md
- examples/04-experience-playbook/AGENTS.md
- examples/05-global-single-source/AGENTS.md
- examples/06-global-multiple-sources/AGENTS.md
- examples/07-local-overrides-global/AGENTS.md
- examples/08-global-in-archcore/AGENTS.md
- examples/09-monorepo-shared-global/apps/api/AGENTS.md
- examples/09-monorepo-shared-global/apps/web/AGENTS.md
- examples/09-monorepo-shared-global/packages/shared-standards/AGENTS.md
- examples/10-monorepo-root-global/AGENTS.md
- examples/10-monorepo-root-global/apps/api/AGENTS.md
- examples/10-monorepo-root-global/apps/web/AGENTS.md
- examples/10-monorepo-root-global/packages/ui/AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| examples | 154 |
| internal | 90 |
| .archcore | 83 |
| cmd | 34 |
| .claude | 5 |
| templates | 4 |
| .github | 2 |
| .codex | 1 |
| .gitignore | 1 |
| .goreleaser.yaml | 1 |
| .mcp.json | 1 |
| AGENTS.md | 1 |
| CLAUDE.md | 1 |
| go.mod | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .md | 179 |
| .go | 129 |
| .json | 53 |
| .toml | 16 |
| [no-ext] | 3 |
| .yml | 2 |
| .mod | 1 |
| .ps1 | 1 |
| .sh | 1 |
| .sum | 1 |
| .yaml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
