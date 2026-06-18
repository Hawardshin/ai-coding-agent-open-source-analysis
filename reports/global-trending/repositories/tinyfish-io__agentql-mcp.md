# tinyfish-io/agentql-mcp

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/tinyfish-io/agentql-mcp |
| local path | sources/tinyfish-io__agentql-mcp |
| HEAD | 4acd231 |
| stars/forks | 174 / 40 |
| language | JavaScript |
| license |  |
| pushedAt | 2026-06-17T12:45:20Z |
| trendScore / priorityScore | 145 / 309 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 50 | README.md, package.json, .github/workflows/publish.yml |
| Security / supply chain | 13 | .github/workflows/publish.yml, .github/workflows/vuln-scanner-pr.yml, golden-images.yaml |
| Developer tools / DX | 5 | package.json, smithery.yaml, src/index.ts |
| Observability / evaluation | 5 | golden-images.yaml |
| AI agent / orchestration | 4 | README.md, golden-images.yaml |
| Coding agent / software automation | 4 | README.md |
| Cloud native / infrastructure | 2 | .github/workflows/secrets-scanner.yml, golden-images.yaml |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, devtools, frontendStack, infra, infraOps, llm-app, mcp, observability, security, securityTooling |
| stacks | Node/TypeScript/JavaScript |
| capabilities | Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 23 |
| manifests | 5 |
| docs | 1 |
| tests | 0 |
| ci/ops | 5 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | AgentQL MCP Server | AgentQL MCP Server / Features / Tools / Installation / Install the package / Configure Claude / Configure VS Code / Configure Cursor / Configure Windsurf / Validate MCP integration | AgentQL MCP Server This is a Model Context Protocol MCP server that integrates AgentQL https //agentql.com 's data extraction capabilities. Features Tools extract web data extract structured data from a given 'url', using 'prompt' as a description of actual data and its fields to extract. Installation To use AgentQL MCP Server to extract data from web pages, you need to install it via npm, get an API key from our Dev Portal https //dev.agentql.com , and configure it in your favorite app that supports MCP. Install the package Configure Claude Open Claude Desktop Settings via ⌘ + , don't confuse with Claude Account Settings Go to Developer sidebar section Click Edit Config and open claude desk |


## Key Files

### Manifests

- README.md
- Dockerfile
- Makefile
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| .github | 6 |
| .eslintrc.json | 1 |
| .gitignore | 1 |
| .prettierrc.js | 1 |
| .semgrepignore | 1 |
| .tags.json | 1 |
| .yamllint | 1 |
| Dockerfile | 1 |
| glama.json | 1 |
| golden-images.yaml | 1 |
| LICENSE | 1 |
| Makefile | 1 |
| package-lock.json | 1 |
| package.json | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| [no-ext] | 7 |
| .json | 6 |
| .yml | 4 |
| .yaml | 3 |
| .js | 1 |
| .md | 1 |
| .ts | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
