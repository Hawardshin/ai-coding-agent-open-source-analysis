# aliyun/alibabacloud-dataworks-mcp-server

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/aliyun/alibabacloud-dataworks-mcp-server |
| local path | sources/aliyun__alibabacloud-dataworks-mcp-server |
| HEAD | 348888e |
| stars/forks | 43 / 16 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-16T06:31:49Z |
| trendScore / priorityScore | 133 / 281 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 97 | README.md, package.json, src/mcp/index.ts |
| AI agent / orchestration | 33 | README.md, src/mcp/index.ts, src/index.ts |
| Developer tools / DX | 18 | README.md, package.json, src/mcp/index.ts |
| Security / supply chain | 10 | README.md, src/openApiClient/index.ts, LICENSE.txt |
| Coding agent / software automation | 5 | README.md, src/types/action.ts |
| RAG / retrieval / knowledge | 1 | README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, database, databaseRuntime, devtools, frontendStack, llmFramework, mcp, rag, security, securityTooling |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 30 |
| manifests | 3 |
| docs | 1 |
| tests | 1 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Try DataWorks Agent | Try DataWorks Agent / DataWorks MCP Server / Overview / Prerequisites / Installation / Option 1: Install from npm (recommend for clients like Cursor/Cline) / Install globally / Or install locally in your project / Option 2: Build from Source (for developers) / Configuration | ! MseeP.ai Security Assessment Badge https //mseep.net/mseep audited.png https //mseep.ai/app/aliyun alibabacloud dataworks mcp server Try DataWorks Agent Want a ready to use AI experience for DataWorks without manual MCP setup? DataWorks Agent https //dataworks.data.alibabacloud.com/product/agent?source=github is Alibaba Cloud's built in intelligent assistant for data development and operations. It connects to your DataWorks workspace out of the box, so you can use natural language to explore metadata, develop nodes, troubleshoot tasks, and manage resources—no local MCP server configuration required. DataWorks Agent This MCP Server Best for Quick start in the DataWorks console Custom AI cli |


## Key Files

### Manifests

- README.md
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| src | 20 |
| scripts | 2 |
| .githooks | 1 |
| .gitignore | 1 |
| LICENSE.txt | 1 |
| package-lock.json | 1 |
| package.json | 1 |
| pnpm-lock.yaml | 1 |
| README.md | 1 |
| tsconfig.json | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 20 |
| .json | 3 |
| [no-ext] | 2 |
| .md | 1 |
| .mjs | 1 |
| .sh | 1 |
| .txt | 1 |
| .yaml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
