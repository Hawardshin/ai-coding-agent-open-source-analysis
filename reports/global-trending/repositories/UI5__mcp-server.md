# UI5/mcp-server

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/UI5/mcp-server |
| local path | sources/UI5__mcp-server |
| HEAD | 35924f7 |
| stars/forks | 89 / 18 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T13:35:28Z |
| trendScore / priorityScore | 137 / 352 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 437 | README.md, package.json, .github/workflows/publish-mcp-registry.yml |
| Developer tools / DX | 209 | README.md, test/expected/create_ui5_app/com.test.apiapp/README.md, resources/template-js/README.md |
| Security / supply chain | 49 | README.md, .github/workflows/publish-mcp-registry.yml, docs/architecture.md |
| Observability / evaluation | 25 | test/fixtures/sapui5-docs/docs/best-practices-for-developers-28fcd55.md, test/fixtures/sapui5-docs/docs/best-practices-for-loading-modules-00737d6.md, resources/docs/1.136.11/00737d6c1b864dc3ab72ef56611491c4.md |
| AI agent / orchestration | 20 | README.md, docs/architecture.md, resources/guidelines.md |
| Coding agent / software automation | 18 | README.md, docs/architecture.md, resources/template-card/test/index.css |
| Cloud native / infrastructure | 15 | docs/architecture.md, eslint.config.js, resources/guidelines.md |
| Data / ML platform | 4 | scripts/docs/downloadHelper.ts, scripts/docs/getDocsRepository.ts |
| RAG / retrieval / knowledge | 3 | docs/architecture.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, databaseRuntime, devtools, frontendStack, infra, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript |
| capabilities | Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 399 |
| manifests | 18 |
| docs | 49 |
| tests | 198 |
| ci/ops | 7 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | UI5 MCP Server | UI5 MCP Server / Description / Key Features / Available Tools / Requirements / Setup / Standard Configuration for Most Clients / Specific MCP Clients / Using VS Code CLI / Adding Rules to your Project | UI5 MCP Server A Model Context Protocol https //modelcontextprotocol.io/ server for UI5 application development. ! OpenUI5 Community Slack tooling channel https //img.shields.io/badge/slack join 44cc11.svg https //ui5 slack invite.cfapps.eu10.hana.ondemand.com/ ! Contributor Covenant https //img.shields.io/badge/Contributor%20Covenant v2.1%20adopted ff69b4.svg https //github.com/UI5/mcp server?tab=coc ov file readme ! REUSE status https //api.reuse.software/badge/github.com/UI5/mcp server https //api.reuse.software/info/github.com/UI5/mcp server ! npm Package Version https //badge.fury.io/js/%40ui5%2Fmcp server.svg https //www.npmjs.com/package/@ui5/mcp server ! Coverage Status https //cover |


## Key Files

### Manifests

- README.md
- test/expected/create_ui5_app/com.test.apiapp/README.md
- resources/template-js/README.md
- resources/template-ts/README.md
- package.json
- test/expected/create_integration_card/common/package.json
- test/expected/create_integration_card/destinations/package.json
- test/expected/create_integration_card/single_destination/package.json
- test/expected/create_ui5_app/com.test.apiapp/package.json
- test/expected/create_ui5_app/com.test.apiapp/tsconfig.json
- test/expected/create_ui5_ts_app/com.test.apiapp/package.json
- test/fixtures/run_ui5_linter/openui5-sample-app/package.json
- tsconfig.json
- resources/template-card/package.json
- resources/template-js/package.json
- resources/template-ts/package.json
- tsconfig.base.json
- tsconfig.build.json


### Spec / Docs / Prompt Artifacts

- docs/architecture.md


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| test | 177 |
| resources | 118 |
| src | 55 |
| .github | 13 |
| scripts | 5 |
| docs | 3 |
| .husky | 2 |
| .editorconfig | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .licensee.json | 1 |
| .npmrc | 1 |
| .nycrc | 1 |
| .release-please-manifest.json | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 139 |
| .js | 53 |
| .json | 52 |
| .md | 39 |
| .html | 30 |
| .properties | 18 |
| [no-ext] | 13 |
| .yml | 11 |
| .yaml | 9 |
| .snap | 7 |
| .xml | 7 |
| .ejs | 6 |
| .css | 5 |
| .mjs | 3 |
| .editorconfig | 2 |
| .gitignore | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
