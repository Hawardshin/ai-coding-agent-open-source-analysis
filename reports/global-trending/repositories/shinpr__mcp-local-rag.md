# shinpr/mcp-local-rag

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/shinpr/mcp-local-rag |
| local path | sources/shinpr__mcp-local-rag |
| HEAD | 95e39ea |
| stars/forks | 317 / 57 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-15T14:45:43Z |
| trendScore / priorityScore | 153 / 414 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval / knowledge | 449 | README.md, package.json, src/__tests__/cli/delete.test.ts |
| Developer tools / DX | 446 | README.md, package.json, src/__tests__/cli/cli-error-shim.ts |
| MCP / agent interoperability | 304 | README.md, package.json, src/__tests__/cli/delete.test.ts |
| Data / ML platform | 75 | README.md, src/__tests__/cli/ingest-visual.test.ts, src/server/__tests__/rag-server.dtype-pdf-regression.test.ts |
| Security / supply chain | 71 | README.md, package.json, src/__tests__/cli/ingest.test.ts |
| Coding agent / software automation | 62 | README.md, package.json, src/cli/options.ts |
| Database / data infrastructure | 38 | README.md, src/__tests__/cli/query.test.ts, src/server/__tests__/rag-server.files.integration.test.ts |
| AI agent / orchestration | 20 | README.md, src/server/__tests__/rag-server.read-neighbors.integration.test.ts, CONTRIBUTING.md |
| Cloud native / infrastructure | 14 | README.md, src/__tests__/cli/common.test.ts, src/__tests__/cli/ingest-default-mode.test.ts |
| Observability / evaluation | 5 | README.md, src/__tests__/cli/ingest-default-mode.test.ts, src/__tests__/security/security.test.ts |
| Frontend / app framework | 1 | README.md |
| Local LLM / inference | 1 | src/embedder/index.ts |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, devtools, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 139 |
| manifests | 4 |
| docs | 7 |
| tests | 66 |
| ci/ops | 1 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | MCP Local RAG | MCP Local RAG / Features / Quick Start / Why This Exists / Usage / Using with MCP / Using as CLI / Search Tuning / Code-focused tuning / How It Works | <p align="center" <img src="assets/banner.jpg" alt="MCP Local RAG — Search below the surface." width="600" / </p MCP Local RAG ! GitHub stars https //img.shields.io/github/stars/shinpr/mcp local rag?style=social https //github.com/shinpr/mcp local rag ! npm version https //img.shields.io/npm/v/mcp local rag.svg https //www.npmjs.com/package/mcp local rag ! License MIT https //img.shields.io/badge/License MIT yellow.svg https //opensource.org/licenses/MIT ! TypeScript https //img.shields.io/badge/TypeScript 6.0 blue.svg?logo=typescript&logoColor=white https //www.typescriptlang.org/ ! MCP Registry https //img.shields.io/badge/MCP Registry green.svg https //registry.modelcontextprotocol.io/ Lo |


## Key Files

### Manifests

- README.md
- package.json
- tsconfig.json
- tsconfig.test.json


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| src | 111 |
| skills | 5 |
| scripts | 4 |
| .husky | 2 |
| .gitattributes | 1 |
| .github | 1 |
| .gitignore | 1 |
| .nvmrc | 1 |
| biome.json | 1 |
| CONTRIBUTING.md | 1 |
| knip.json | 1 |
| LICENSE | 1 |
| package.json | 1 |
| pnpm-lock.yaml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 111 |
| .md | 7 |
| .json | 6 |
| [no-ext] | 6 |
| .mjs | 4 |
| .yaml | 2 |
| .docx | 1 |
| .sh | 1 |
| .yml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
