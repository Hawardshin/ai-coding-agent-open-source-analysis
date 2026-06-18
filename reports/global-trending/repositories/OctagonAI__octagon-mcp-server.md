# OctagonAI/octagon-mcp-server

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/OctagonAI/octagon-mcp-server |
| local path | sources/OctagonAI__octagon-mcp-server |
| HEAD | d262fe9 |
| stars/forks | 132 / 23 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T21:30:44Z |
| trendScore / priorityScore | 142 / 321 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 196 | README.md, examples/python-client-example.py, examples/typescript-client-example.ts |
| AI agent / orchestration | 125 | README.md, examples/python-client-example.py, examples/typescript-client-example.ts |
| Developer tools / DX | 20 | examples/typescript-client-example.ts, package.json, src/docs/index.ts |
| Coding agent / software automation | 19 | README.md, src/docs/catalog.ts, .claude-plugin/marketplace.json |
| Cloud native / infrastructure | 4 | package-lock.json |
| RAG / retrieval / knowledge | 3 | README.md, agents/octagon-research-orchestrator.md, skills/prediction-markets-analysis/SKILL.md |
| Security / supply chain | 1 | README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, devtools, example-rich, frontendStack, infra, infraOps, llmFramework, mcp, rag, sdk-api, security |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Infra/Ops, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 55 |
| manifests | 4 |
| docs | 19 |
| tests | 7 |
| ci/ops | 1 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Octagon: MCP for Public & Prediction Markets Intelligence | Octagon: MCP for Public & Prediction Markets Intelligence / Tools / Get Your Octagon API Key / Prerequisites / Mac (macOS) / Windows / Installation / Running on Claude Desktop / Running on Cursor / Running with npx | Octagon MCP for Public & Prediction Markets Intelligence ! smithery badge https //smithery.ai/badge/@OctagonAI/octagon mcp server https //smithery.ai/server/@OctagonAI/octagon mcp server ! Favicon https //octagonai.co/docs/logo.svg The Octagon MCP server provides specialized AI powered financial research and analysis by integrating with the Octagon Market Intelligence API, enabling users to analyze and extract insights from public filings, earnings calls, financial metrics, stocks & crypto data, stock news, and prediction markets news & research within Claude Desktop and other popular MCP clients. ! Demo https //octagonai.co/docs/financial model demo fast.gif https //octagonai.co/docs/financ |


## Key Files

### Manifests

- README.md
- Dockerfile
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| src | 21 |
| skills | 7 |
| tests | 7 |
| .claude-plugin | 3 |
| examples | 2 |
| scripts | 2 |
| .env.example | 1 |
| .gitignore | 1 |
| agents | 1 |
| Dockerfile | 1 |
| hooks | 1 |
| install.sh | 1 |
| LICENSE | 1 |
| package-lock.json | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 22 |
| .md | 9 |
| .js | 7 |
| .json | 7 |
| .sh | 3 |
| [no-ext] | 3 |
| .example | 1 |
| .mjs | 1 |
| .py | 1 |
| .yaml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
