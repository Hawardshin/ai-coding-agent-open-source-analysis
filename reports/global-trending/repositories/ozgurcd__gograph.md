# ozgurcd/gograph

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/ozgurcd/gograph |
| local path | sources/ozgurcd__gograph |
| HEAD | c9f18c0 |
| stars/forks | 180 / 12 |
| language | Go |
| license |  |
| pushedAt | 2026-06-17T21:18:41Z |
| trendScore / priorityScore | 160 / 425 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 449 | llm-wiki/packages/README.md, AGENTS.md, README.md |
| AI agent / orchestration | 412 | AGENTS.md, README.md, docs/coding-agent-usage.md |
| Developer tools / DX | 275 | llm-wiki/packages/README.md, README.md, docs/coding-agent-usage.md |
| Coding agent / software automation | 273 | AGENTS.md, README.md, docs/coding-agent-usage.md |
| Security / supply chain | 93 | llm-wiki/packages/README.md, README.md, docs/coding-agent-usage.md |
| Data / ML platform | 56 | docs-site/themes/PaperMod/README.md, docs/coding-agent-usage.md, docs-site/public/docs/agent-integration/index.html |
| Observability / evaluation | 39 | README.md, docs/benchmarking.md, docs/coding-agent-usage.md |
| Database / data infrastructure | 25 | docs/coding-agent-usage.md, docs-site/content/docs/agent-integration.md, docs-site/public/docs/agent-integration/index.html |
| Cloud native / infrastructure | 23 | docs-site/public/docs/agent-integration/index.html, docs-site/public/docs/command-reference/index.html, docs-site/public/docs/getting-started/index.html |
| RAG / retrieval / knowledge | 6 | docs-site/content/docs/agent-integration.md, docs-site/public/docs/agent-integration/index.html |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Go |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 350 |
| manifests | 11 |
| docs | 71 |
| tests | 39 |
| ci/ops | 6 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | gograph | gograph / Quick Start / Install / Build the graph / Try it — who calls ValidateToken? / Full context in ONE call (node + source + callers + callees + tests) / Change plan before editing (callers, tests, routes, SQL, env risk) / Why gograph? / Key Features / Command Reference | gograph ! Go Report Card https //goreportcard.com/badge/github.com/ozgurcd/gograph https //goreportcard.com/report/github.com/ozgurcd/gograph ! License MIT https //img.shields.io/badge/License MIT yellow.svg https //opensource.org/licenses/MIT ! Go Version https //img.shields.io/github/go mod/go version/ozgurcd/gograph https //github.com/ozgurcd/gograph ! Homebrew https //img.shields.io/badge/homebrew available orange https //github.com/ozgurcd/homebrew tap ! Docs https //img.shields.io/badge/docs gograph.identuum.ai blue https //gograph.identuum.ai Stop burning tokens on grep . Give your AI agent a graph. gograph builds a local, AST aware call graph of your Go repository and exposes 50+ que |


## Key Files

### Manifests

- llm-wiki/packages/README.md
- llm-wiki/sources/README.md
- AGENTS.md
- README.md
- docs-site/themes/PaperMod/README.md
- Dockerfile
- go.mod
- Makefile
- testdata/fixture/go.mod
- docs-site/themes/PaperMod/go.mod
- go.sum


### Spec / Docs / Prompt Artifacts

- AGENTS.md


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| docs-site | 184 |
| internal | 96 |
| llm-wiki | 29 |
| .github | 6 |
| docs | 6 |
| testdata | 5 |
| .claude-plugin | 2 |
| .bumpversion.cfg | 1 |
| .gitignore | 1 |
| .goreleaser.yaml | 1 |
| .idea | 1 |
| AGENTS.md | 1 |
| cmd | 1 |
| CODE_OF_CONDUCT.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 101 |
| .html | 74 |
| .md | 54 |
| .yaml | 49 |
| .css | 20 |
| .xml | 15 |
| [no-ext] | 10 |
| .yml | 8 |
| .json | 7 |
| .mod | 3 |
| .txt | 3 |
| .js | 2 |
| .toml | 2 |
| .cfg | 1 |
| .sum | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
