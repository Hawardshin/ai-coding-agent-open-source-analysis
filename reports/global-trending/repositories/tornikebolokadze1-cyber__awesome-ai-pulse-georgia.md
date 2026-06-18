# tornikebolokadze1-cyber/awesome-ai-pulse-georgia

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/tornikebolokadze1-cyber/awesome-ai-pulse-georgia |
| local path | sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia |
| HEAD | e81fb79 |
| stars/forks | 123 / 8 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T22:16:04Z |
| trendScore / priorityScore | 152 / 399 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 308 | mcp/README.md, mcp/package.json, .github/workflows/mcp-data-sync.yml |
| AI agent / orchestration | 276 | docs/index.html, mcp/smithery.yaml, mcp/data/github-cache.json |
| Coding agent / software automation | 184 | mcp/README.md, mcp/package.json, docs/index.html |
| Developer tools / DX | 122 | mcp/README.md, mcp/package.json, docs/index.html |
| RAG / retrieval / knowledge | 51 | mcp/README.md, docs/index.html, mcp/smithery.yaml |
| Local LLM / inference | 38 | docs/index.html, mcp/data/github-cache.json |
| Observability / evaluation | 32 | docs/index.html, mcp/data/github-cache.json |
| Security / supply chain | 18 | .github/workflows/mcp-data-sync.yml, .github/workflows/mcp-publish.yml, docs/index.html |
| Data / ML platform | 14 | docs/index.html, mcp/data/github-cache.json |
| Frontend / app framework | 11 | docs/index.html, mcp/data/github-cache.json |
| Cloud native / infrastructure | 9 | docs/index.html, mcp/package-lock.json, mcp/data/github-cache.json |
| Database / data infrastructure | 4 | mcp/data/github-cache.json |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 25 |
| manifests | 4 |
| docs | 4 |
| tests | 0 |
| ci/ops | 3 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  |  |  |


## Key Files

### Manifests

- mcp/README.md
- README.md
- mcp/package.json
- mcp/tsconfig.json


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| mcp | 17 |
| .github | 3 |
| .gitignore | 1 |
| assets | 1 |
| docs | 1 |
| LICENSE | 1 |
| README.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 7 |
| .json | 5 |
| [no-ext] | 4 |
| .md | 3 |
| .yml | 3 |
| .html | 1 |
| .svg | 1 |
| .yaml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
