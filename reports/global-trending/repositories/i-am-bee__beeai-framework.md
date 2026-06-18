# i-am-bee/beeai-framework

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/i-am-bee/beeai-framework |
| local path | sources/i-am-bee__beeai-framework |
| HEAD | 08ea885 |
| stars/forks | 3297 / 452 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T22:05:47Z |
| trendScore / priorityScore | 152 / 431 |


## Interpretation

- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | python/examples/agents/README.md, typescript/examples/agents/granite/README.md, python/examples/notebooks/README.md |
| Local LLM / inference | 197 | typescript/examples/agents/granite/README.md, python/examples/notebooks/README.md, python/examples/README.md |
| MCP / agent interoperability | 121 | python/examples/README.md, typescript/examples/README.md, python/README.md |
| RAG / retrieval / knowledge | 96 | typescript/examples/agents/granite/README.md, typescript/examples/README.md, python/README.md |
| Frontend / app framework | 61 | python/examples/notebooks/README.md, python/examples/README.md, typescript/examples/README.md |
| Developer tools / DX | 49 | python/examples/notebooks/README.md, python/examples/serve/requirements.txt, python/pyproject.toml |
| Observability / evaluation | 25 | python/examples/README.md, typescript/examples/workflows/competitive-analysis/README.md, python/README.md |
| Database / data infrastructure | 14 | python/examples/agents/rag_agent.py, python/examples/agents/requirement/rag.py, typescript/examples/agents/elasticsearch.ts |
| Security / supply chain | 9 | python/README.md, README.md, typescript/README.md |
| Data / ML platform | 6 | python/pyproject.toml, docs/src/content/docs/integrations/agent-stack.mdx, docs/src/content/docs/modules/rag.mdx |
| Cloud native / infrastructure | 2 | python/beeai_framework/adapters/amazon_bedrock/backend/README.md, python/examples/memory/filtering_memory.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1078 |
| manifests | 23 |
| docs | 118 |
| tests | 111 |
| ci/ops | 8 |
| spec artifacts | 9 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Latest updates / What is BeeAI Framework? / Key Features / Quickstart / Installation / Multi-Agent Example / Running the example / Contribution guidelines / Bugs / Code of conduct | <div align="center" <h1 BeeAI Framework</h1 Build production ready multi agent systems in <a href="https //github.com/i am bee/beeai framework/tree/main/python" Python</a or <a href="https //github.com/i am bee/beeai framework/tree/main/typescript" TypeScript</a . ! Documentation https //img.shields.io/badge/Documentation Read%20the%20docs 2f7bb6?style=plastic&logo=readthedocs&logoColor=white https //framework.beeai.dev/introduction/welcome ! Python library https //img.shields.io/badge/Python 306998?style=plastic&logo=python&logoColor=white https //github.com/i am bee/beeai framework/tree/main/python ! Typescript library https //img.shields.io/badge/TypeScript 2f7bb6?style=plastic&logo=types |


## Key Files

### Manifests

- python/examples/agents/README.md
- typescript/examples/agents/granite/README.md
- python/examples/notebooks/README.md
- python/examples/README.md
- typescript/examples/README.md
- typescript/examples/workflows/competitive-analysis/README.md
- python/README.md
- README.md
- typescript/README.md
- python/beeai_framework/adapters/amazon_bedrock/backend/README.md
- docs/package.json
- docs/tsconfig.json
- python/examples/middleware/requirements.txt
- python/examples/notebooks/requirements.txt
- python/examples/requirements.txt
- python/examples/serve/requirements.txt
- typescript/examples/tsconfig.json
- docs-old/package.json
- python/pyproject.toml
- typescript/package.json


### Spec / Docs / Prompt Artifacts

- python/examples/middleware/requirements.txt
- python/examples/notebooks/requirements.txt
- python/examples/requirements.txt
- python/examples/serve/requirements.txt
- docs/src/content/docs/modules/agents.mdx
- docs-old/modules/agents.mdx
- docs-old/tasks.toml
- python/tasks.toml
- typescript/tasks.toml


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| python | 586 |
| typescript | 363 |
| docs | 62 |
| docs-old | 45 |
| .github | 14 |
| .gitignore | 1 |
| CITATION.cff | 1 |
| CODE_OF_CONDUCT.md | 1 |
| LICENSE | 1 |
| MAINTAINERS.md | 1 |
| mise.toml | 1 |
| README.md | 1 |
| SECURITY.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 556 |
| .ts | 345 |
| .mdx | 56 |
| .md | 32 |
| [no-ext] | 13 |
| .yml | 12 |
| .json | 11 |
| .astro | 10 |
| .ipynb | 7 |
| .mjs | 7 |
| .toml | 7 |
| .svg | 6 |
| .txt | 4 |
| .snap | 3 |
| .css | 2 |
| .js | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
