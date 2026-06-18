# google-marketing-solutions/google_ads_mcp

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/google-marketing-solutions/google_ads_mcp |
| local path | sources/google-marketing-solutions__google_ads_mcp |
| HEAD | 940959e |
| stars/forks | 227 / 71 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T01:18:36Z |
| trendScore / priorityScore | 149 / 306 |


## Interpretation

- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 79 | README.md, GEMINI.md, pyproject.toml |
| Security / supply chain | 39 | README.md, GEMINI.md, ads_mcp/__init__.py |
| Cloud native / infrastructure | 9 | ads_mcp/context/GAQL.md |
| Developer tools / DX | 8 | README.md, GEMINI.md, pyproject.toml |
| AI agent / orchestration | 3 | GEMINI.md, ads_mcp/context/Google_Ads_API_Reporting_Views.md |
| Database / data infrastructure | 1 | ads_mcp/context/Google_Ads_API_Reporting_Views.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, database, databaseRuntime, devtools, infra, llm-app, mcp, security, securityTooling |
| stacks | Python |
| capabilities | Security tooling, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 47 |
| manifests | 3 |
| docs | 5 |
| tests | 13 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Google Ads MCP Server | Google Ads MCP Server / Disclaimer / Getting Started / 1. Configure Python Environment / 2. Configure Google Ads credentials / 3. Configuration / 4. Launch MCP Server / Features and Tools / Read-Only Tools (Always Available) / Mutation Tools (Disabled by Default) | Google Ads MCP Server The Google Ads MCP Server is an implementation of the Model Context Protocol MCP that enables Large Language Models LLMs , such as Gemini, to interact directly with the Google Ads API. !NOTE This is NOT an officially supported Google product. It is mainly for experimental purposes and not intended for production use. Consider using the official Google Ads MCP Server https //github.com/google ads/google ads mcp python instead. Disclaimer Copyright Google LLC. Supported by Google LLC and/or its affiliate s . This solution, including any related sample code or data, is made available on an “as is,” “as available,” and “with all faults” basis, solely for illustrative purpos |


## Key Files

### Manifests

- README.md
- GEMINI.md
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- GEMINI.md


### Agent Instruction Files

- GEMINI.md


## Top Directories

| dir | count |
| --- | --- |
| ads_mcp | 25 |
| tests | 13 |
| .editorconfig | 1 |
| .gitignore | 1 |
| .pylintrc | 1 |
| .python-version | 1 |
| CONTRIBUTING.md | 1 |
| GEMINI.md | 1 |
| LICENSE | 1 |
| pyproject.toml | 1 |
| README.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 32 |
| [no-ext] | 8 |
| .md | 5 |
| .toml | 1 |
| .yaml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
