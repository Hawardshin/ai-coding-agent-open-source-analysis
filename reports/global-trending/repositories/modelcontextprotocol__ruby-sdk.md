# modelcontextprotocol/ruby-sdk

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/modelcontextprotocol/ruby-sdk |
| local path | sources/modelcontextprotocol__ruby-sdk |
| HEAD | c8e0cd9 |
| stars/forks | 852 / 119 |
| language | Ruby |
| license |  |
| pushedAt | 2026-06-17T22:55:01Z |
| trendScore / priorityScore | 141 / 393 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | examples/README.md, AGENTS.md, conformance/README.md |
| Security / supply chain | 285 | examples/README.md, conformance/README.md, README.md |
| Coding agent / software automation | 118 | conformance/README.md, README.md, test/mcp/client_test.rb |
| Developer tools / DX | 116 | examples/README.md, AGENTS.md, conformance/README.md |
| Observability / evaluation | 15 | README.md, lib/mcp/configuration.rb, lib/mcp/trace_context.rb |
| RAG / retrieval / knowledge | 6 | AGENTS.md, README.md, docs/building-clients.md |
| AI agent / orchestration | 4 | AGENTS.md, CLAUDE.md, CHANGELOG.md |
| Data / ML platform | 4 | README.md, test/mcp/client_test.rb |
| Cloud native / infrastructure | 1 | lib/mcp/client/oauth/flow.rb |
| Database / data infrastructure | 1 | README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, devtools, example-rich, frontendStack, infra, infraOps, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Ruby |
| capabilities | Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 155 |
| manifests | 5 |
| docs | 25 |
| tests | 52 |
| ci/ops | 3 |
| spec artifacts | 6 |
| agent instruction files | 6 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | MCP Ruby SDK [![Gem Version](https://img.shields.io/gem/v/mcp)](https://rubygems.org/gems/mcp) [![Apache 2.0 licensed](https://img.shields.io/badge/license-Apache%202.0-blue)](https://github.com/modelcontextprotocol/ruby-sdk/blob/main/LICENSE) [![CI](https://github.com/modelcontextprotocol/ruby-sdk/actions/workflows/ci.yml/badge.svg)](https://github.com/modelcontextprotocol/ruby-sdk/actions/workflows/ci.yml) | MCP Ruby SDK [![Gem Version](https://img.shields.io/gem/v/mcp)](https://rubygems.org/gems/mcp) [![Apache 2.0 licensed](https://img.shields.io/badge/license-Apache%202.0-blue)](https://github.com/modelcontextprotocol/ruby-sdk/blob/main/LICENSE) [![CI](https://github.com/modelcontextprotocol/ruby-sdk/actions/workflows/ci.yml/badge.svg)](https://github.com/modelcontextprotocol/ruby-sdk/actions/workflows/ci.yml) / Installation / Building an MCP Server / Key Features / Supported Methods / Usage / Create a simple tool / Set up the server / Create and start the transport / config/routes.rb | MCP Ruby SDK ! Gem Version https //img.shields.io/gem/v/mcp https //rubygems.org/gems/mcp ! Apache 2.0 licensed https //img.shields.io/badge/license Apache%202.0 blue https //github.com/modelcontextprotocol/ruby sdk/blob/main/LICENSE ! CI https //github.com/modelcontextprotocol/ruby sdk/actions/workflows/ci.yml/badge.svg https //github.com/modelcontextprotocol/ruby sdk/actions/workflows/ci.yml The official Ruby SDK for Model Context Protocol servers and clients. Installation Add this line to your application's Gemfile And then execute Or install it yourself as You may need to add additional dependencies depending on which features you wish to access. Building an MCP Server The MCP Server cla |


## Key Files

### Manifests

- examples/README.md
- AGENTS.md
- conformance/README.md
- README.md
- CLAUDE.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- test/mcp/prompt/result_test.rb
- lib/mcp/prompt/argument.rb
- lib/mcp/prompt/message.rb
- lib/mcp/prompt/result.rb


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- test/mcp/prompt/result_test.rb
- lib/mcp/prompt/argument.rb
- lib/mcp/prompt/message.rb
- lib/mcp/prompt/result.rb


## Top Directories

| dir | count |
| --- | --- |
| test | 52 |
| lib | 51 |
| docs | 16 |
| examples | 7 |
| conformance | 6 |
| .github | 4 |
| bin | 4 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .rubocop.yml | 1 |
| AGENTS.md | 1 |
| CHANGELOG.md | 1 |
| CLAUDE.md | 1 |
| CODE_OF_CONDUCT.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .rb | 113 |
| .md | 13 |
| [no-ext] | 9 |
| .yml | 8 |
| .svg | 4 |
| .html | 3 |
| .scss | 3 |
| .gemspec | 1 |
| .sh | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
