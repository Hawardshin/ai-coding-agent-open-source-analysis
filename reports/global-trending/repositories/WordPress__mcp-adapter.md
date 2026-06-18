# WordPress/mcp-adapter

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/WordPress/mcp-adapter |
| local path | sources/WordPress__mcp-adapter |
| HEAD | 529b9e9 |
| stars/forks | 1292 / 145 |
| language | PHP |
| license |  |
| pushedAt | 2026-06-16T20:44:55Z |
| trendScore / priorityScore | 145 / 397 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | docs/README.md, docs/getting-started/README.md, README.md |
| Observability / evaluation | 203 | docs/README.md, docs/getting-started/README.md, README.md |
| Developer tools / DX | 106 | docs/README.md, docs/getting-started/README.md, README.md |
| Security / supply chain | 57 | tests/phpunit/Unit/Prompts/McpPromptTest.php, docs/guides/cli-usage.md, includes/Domain/Prompts/McpPromptValidator.php |
| AI agent / orchestration | 19 | docs/getting-started/README.md, README.md, readme.txt |
| Cloud native / infrastructure | 17 | README.md, .github/workflows/test.yml, docs/guides/testing.md |
| Database / data infrastructure | 7 | README.md, docs/guides/testing.md, tests/phpunit/Unit/Infrastructure/ErrorHandling/McpErrorFactoryTest.php |
| Coding agent / software automation | 5 | README.md, .github/workflows/test.yml, docs/migration/v0.5.0.md |
| Data / ML platform | 2 | docs/guides/creating-abilities.md |
| Frontend / app framework | 2 | package.json |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, mcp, observability, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, PHP |
| capabilities | Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 179 |
| manifests | 4 |
| docs | 21 |
| tests | 76 |
| ci/ops | 6 |
| spec artifacts | 11 |
| agent instruction files | 10 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | MCP Adapter | MCP Adapter / Overview / Features / Core Functionality / MCP Component Support / Architecture / Dependencies / Installation / As a WordPress Plugin (Recommended) / As a Composer Library (for plugin developers) | MCP Adapter Part of the AI Building Blocks for WordPress initiative https //make.wordpress.org/ai/2025/07/17/ai building blocks The official WordPress package for MCP integration that exposes WordPress abilities as Model Context Protocol MCP https //modelcontextprotocol.io tools, resources, and prompts for AI agents. ! Ask DeepWiki https //deepwiki.com/badge.svg https //deepwiki.com/WordPress/mcp adapter Overview This adapter bridges WordPress's Abilities API with the MCP specification https //modelcontextprotocol.io/specification/2025 11 25/ , providing a standardized way for AI agents to interact with WordPress functionality. It includes HTTP and STDIO transport support, comprehensive erro |


## Key Files

### Manifests

- docs/README.md
- docs/getting-started/README.md
- README.md
- package.json


### Spec / Docs / Prompt Artifacts

- tests/phpunit/Unit/Domain/Prompts/McpPromptValidatorTest.php
- tests/phpunit/Unit/Prompts/McpPromptBuilderTest.php
- tests/phpunit/Unit/Prompts/McpPromptTest.php
- tests/phpunit/Unit/Prompts/RegisterAbilityAsMcpPromptTest.php
- includes/Domain/Prompts/Contracts/McpPromptBuilderInterface.php
- includes/Domain/Prompts/McpPrompt.php
- includes/Domain/Prompts/McpPromptBuilder.php
- includes/Domain/Prompts/McpPromptValidator.php
- includes/Domain/Prompts/RegisterAbilityAsMcpPrompt.php
- includes/Handlers/Prompts/PromptsHandler.php
- docs/architecture/overview.md


### Agent Instruction Files

- tests/phpunit/Unit/Domain/Prompts/McpPromptValidatorTest.php
- tests/phpunit/Unit/Prompts/McpPromptBuilderTest.php
- tests/phpunit/Unit/Prompts/McpPromptTest.php
- tests/phpunit/Unit/Prompts/RegisterAbilityAsMcpPromptTest.php
- includes/Domain/Prompts/Contracts/McpPromptBuilderInterface.php
- includes/Domain/Prompts/McpPrompt.php
- includes/Domain/Prompts/McpPromptBuilder.php
- includes/Domain/Prompts/McpPromptValidator.php
- includes/Domain/Prompts/RegisterAbilityAsMcpPrompt.php
- includes/Handlers/Prompts/PromptsHandler.php


## Top Directories

| dir | count |
| --- | --- |
| tests | 75 |
| includes | 59 |
| docs | 16 |
| .github | 8 |
| .editorconfig | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .npmrc | 1 |
| .nvmrc | 1 |
| .phpcs.xml.dist | 1 |
| .prettierignore | 1 |
| .prettierrc.js | 1 |
| .wp-env.json | 1 |
| .wp-env.test.json | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .php | 133 |
| .md | 21 |
| .yml | 7 |
| [no-ext] | 7 |
| .json | 5 |
| .dist | 3 |
| .js | 1 |
| .stub | 1 |
| .txt | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
