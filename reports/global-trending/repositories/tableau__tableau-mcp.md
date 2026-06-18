# tableau/tableau-mcp

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/tableau/tableau-mcp |
| local path | sources/tableau__tableau-mcp |
| HEAD | 82ee0e6 |
| stars/forks | 294 / 116 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-18T00:14:49Z |
| trendScore / priorityScore | 152 / 421 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | docs/docs/configuration/mcp-config/authentication/README.md, docs/docs/configuration/mcp-config/README.md, docs/README.md |
| Security / supply chain | 371 | docs/docs/configuration/mcp-config/authentication/README.md, docs/docs/enterprise/README.md, CLAUDE.md |
| Cloud native / infrastructure | 84 | docs/docs/configuration/mcp-config/README.md, CLAUDE.md, docs/docs/developers/eval-tests.md |
| Observability / evaluation | 50 | docs/docs/enterprise/README.md, CLAUDE.md, docs/docs/developers/eval-tests.md |
| AI agent / orchestration | 47 | docs/docs/enterprise/README.md, docs/docs/getting-started/README.md, package.json |
| Developer tools / DX | 32 | CLAUDE.md, docs/tsconfig.json, docs/docs/developers/eval-tests.md |
| Coding agent / software automation | 18 | docs/docs/getting-started/README.md, README.md, CLAUDE.md |
| Data / ML platform | 11 | docs/docs/configuration/mcp-config/env-vars.md, docs/docs/developers/e2e-tests.md, docs/docs/developers/unit-tests.md |
| Frontend / app framework | 9 | docs/docs/getting-started/README.md, docs/package.json, package.json |
| RAG / retrieval / knowledge | 6 | docs/docs/configuration/mcp-config/env-vars.md, src/web/apps/src/lib/getOAuthTokenToolClient.test.ts, docs/docs/developers/contributing.md |
| Database / data infrastructure | 5 | docs/docs/tools/content-exploration/search-content.md, docs/docs/tools/jobs/list-jobs.md, docs/docs/tools/pulse/generate-pulse-insight-brief.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 641 |
| manifests | 13 |
| docs | 108 |
| tests | 213 |
| ci/ops | 12 |
| spec artifacts | 14 |
| agent instruction files | 14 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Tableau MCP | Tableau MCP / Overview / Official Documentation / Quick Start / Requirements / Deploy to Heroku / Example Prompts to Client | Tableau MCP ! Tableau Supported https //img.shields.io/badge/Support%20Level Tableau%20Supported 53bd92.svg https //www.tableau.com/support levels it and developer tools ! Build and Test https //github.com/tableau/tableau mcp/actions/workflows/ci.yml/badge.svg https //github.com/tableau/tableau mcp/actions/workflows/ci.yml ! npm https //img.shields.io/npm/v/@tableau/mcp server https //www.npmjs.com/package/@tableau/mcp server Overview Tableau MCP is a suite of developer primitives, including tools, resources and prompts, that will make it easier for developers to build AI applications that integrate with Tableau. Official Documentation https //tableau.github.io/tableau mcp/ Quick Start Requi |


## Key Files

### Manifests

- docs/docs/configuration/mcp-config/authentication/README.md
- docs/docs/configuration/mcp-config/README.md
- docs/README.md
- docs/docs/configuration/README.md
- docs/docs/enterprise/README.md
- docs/docs/getting-started/README.md
- README.md
- CLAUDE.md
- docs/package.json
- docs/tsconfig.json
- Dockerfile
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- src/prompts/jobOptimization/inform.test.ts
- src/prompts/staleContent/inform.test.ts
- tests/e2e/prompts/jobOptimization.test.ts
- .cursor/rules/tableau-mcp.mdc
- src/prompts/index.ts
- src/prompts/jobOptimization/inform.ts
- src/prompts/jobOptimization/renderNotes.ts
- src/prompts/registry.ts
- src/prompts/staleContent/inform.ts
- .cursor/rules/testing.mdc
- .cursor/rules/auth.mdc
- .cursor/rules/tools.mdc
- .claude/skills/create-pr-from-commits/SKILL.md


### Agent Instruction Files

- CLAUDE.md
- src/prompts/jobOptimization/inform.test.ts
- src/prompts/staleContent/inform.test.ts
- tests/e2e/prompts/jobOptimization.test.ts
- .cursor/rules/tableau-mcp.mdc
- src/prompts/index.ts
- src/prompts/jobOptimization/inform.ts
- src/prompts/jobOptimization/renderNotes.ts
- src/prompts/registry.ts
- src/prompts/staleContent/inform.ts
- .cursor/rules/testing.mdc
- .cursor/rules/auth.mdc
- .cursor/rules/tools.mdc
- .claude/skills/create-pr-from-commits/SKILL.md


## Top Directories

| dir | count |
| --- | --- |
| src | 396 |
| docs | 97 |
| tests | 88 |
| .github | 17 |
| .cursor | 4 |
| types | 3 |
| scripts | 2 |
| .claude | 1 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .mcpbignore | 1 |
| .npmignore | 1 |
| .prettierrc | 1 |
| app.json | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 491 |
| .md | 75 |
| .json | 31 |
| .yml | 14 |
| [no-ext] | 11 |
| .css | 4 |
| .mdc | 4 |
| .list | 3 |
| .svg | 2 |
| .tsx | 2 |
| .html | 1 |
| .mjs | 1 |
| .ps1 | 1 |
| .txt | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
