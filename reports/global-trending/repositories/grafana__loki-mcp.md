# grafana/loki-mcp

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/grafana/loki-mcp |
| local path | sources/grafana__loki-mcp |
| HEAD | c814856 |
| stars/forks | 152 / 32 |
| language | Go |
| license |  |
| pushedAt | 2026-06-16T11:15:39Z |
| trendScore / priorityScore | 144 / 334 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 189 | README.md, examples/simple-sse-client.html, examples/sse-client.html |
| Cloud native / infrastructure | 44 | README.md, examples/sse-client.html, docker-compose.yml |
| Observability / evaluation | 22 | README.md, docker-compose.yml, .github/workflows/ci.yml |
| Coding agent / software automation | 7 | README.md, examples/simple-sse-client.html, examples/sse-client.html |
| AI agent / orchestration | 3 | README.md |
| Developer tools / DX | 2 | README.md |
| Data / ML platform | 1 | .github/workflows/README.md |
| Database / data infrastructure | 1 | insert-loki-logs.sh |
| Security / supply chain | 1 | README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, devtools, example-rich, frontendStack, infra, infraOps, mcp, observability, sdk-api, security |
| stacks | Go |
| capabilities | Infra/Ops, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 26 |
| manifests | 7 |
| docs | 2 |
| tests | 1 |
| ci/ops | 5 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Loki MCP Server | Loki MCP Server / Getting Started / Prerequisites / Building and Running / Build the server / Run the server / Project Structure / MCP Server / Loki Query Tool / Testing the MCP Server | Loki MCP Server ! CI https //github.com/scottlepp/loki mcp/workflows/CI/badge.svg https //github.com/scottlepp/loki mcp/actions/workflows/ci.yml A Go based server implementation for the Model Context Protocol MCP with Grafana Loki integration. Getting Started Prerequisites Go 1.16 or higher Building and Running Build and run the server Or run directly with Go The server communicates using stdin/stdout and SSE following the Model Context Protocol MCP . This makes it suitable for use with Claude Desktop and other MCP compatible clients. Project Structure MCP Server The Loki MCP Server implements the Model Context Protocol MCP and provides the following tools Loki Query Tool The loki query tool |


## Key Files

### Manifests

- .github/workflows/README.md
- README.md
- docker-compose.yml
- Dockerfile
- go.mod
- Makefile
- go.sum


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| examples | 6 |
| .github | 3 |
| cmd | 2 |
| internal | 2 |
| .gitignore | 1 |
| docker-compose.yml | 1 |
| Dockerfile | 1 |
| go.mod | 1 |
| go.sum | 1 |
| grafana | 1 |
| insert-loki-logs.sh | 1 |
| Makefile | 1 |
| pkg | 1 |
| promtail | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 5 |
| .json | 4 |
| .yml | 4 |
| .sh | 3 |
| [no-ext] | 3 |
| .html | 2 |
| .md | 2 |
| .mod | 1 |
| .sum | 1 |
| .yaml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
