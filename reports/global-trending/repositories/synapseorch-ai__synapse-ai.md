# synapseorch-ai/synapse-ai

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/synapseorch-ai/synapse-ai |
| local path | sources/synapseorch-ai__synapse-ai |
| HEAD | 2c3a394 |
| stars/forks | 282 / 50 |
| language | Python |
| license |  |
| pushedAt | 2026-06-15T19:53:28Z |
| trendScore / priorityScore | 142 / 421 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | README.md, backend/examples/mcp_pack.bundle.json, package.json |
| Frontend / app framework | 308 | frontend/README.md, README.md, frontend/package.json |
| MCP / agent interoperability | 148 | README.md, backend/examples/mcp_pack.bundle.json, backend/requirements.txt |
| Database / data infrastructure | 118 | README.md, backend/requirements.txt, docker-compose.yml |
| Security / supply chain | 93 | README.md, backend/examples/developer_pack.bundle.json, backend/examples/starter_pack.bundle.json |
| Coding agent / software automation | 89 | backend/examples/developer_pack.bundle.json, backend/examples/index.json, .github/workflows/codeql.yml |
| Cloud native / infrastructure | 85 | README.md, docker-compose.yml, Dockerfile |
| Developer tools / DX | 75 | frontend/README.md, README.md, docker-compose.yml |
| RAG / retrieval / knowledge | 54 | backend/examples/developer_pack.bundle.json, backend/examples/simple_orch.bundle.json, backend/examples/starter_pack.bundle.json |
| Local LLM / inference | 33 | README.md, backend/requirements.txt, docs/cli.md |
| Data / ML platform | 25 | README.md, backend/examples/developer_pack.bundle.json, backend/examples/index.json |
| Observability / evaluation | 18 | docker-compose.yml, backend/examples/developer_pack.bundle.json, frontend/src/components/settings/APIKeysTab.tsx |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 282 |
| manifests | 10 |
| docs | 5 |
| tests | 2 |
| ci/ops | 12 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Synapse AI — Multi-Agent Orchestration Platform | Synapse AI — Multi-Agent Orchestration Platform / Install / Quick Setup Script (recommended) / npm / pip / Docker / Upgrading / Scale Mode / What Makes Synapse Different / Synapse UI | Synapse AI — Multi Agent Orchestration Platform <p align="center" <img src="https //github.com/user attachments/assets/c673ea6f 4979 4b38 93ae c594ac3d641c" alt="synapse ai github" width="600" / </p <p align="center" <a href="https //synapseorch.com" <img src="https //img.shields.io/badge/Website synapseorch.com 0A0A0A?logo=vercel&logoColor=white" alt="Website" </a <a href="https //docs.synapseorch.com" <img src="https //img.shields.io/badge/Docs docs.synapseorch.com blue?logo=readthedocs&logoColor=white" alt="Docs" </a <a href="https //discord.gg/9UN45qyGh8" <img src="https //img.shields.io/badge/Discord Join 5865F2?logo=discord&logoColor=white" alt="Discord" </a <a href="https //github.com |


## Key Files

### Manifests

- frontend/README.md
- README.md
- frontend/package.json
- frontend/tsconfig.json
- backend/package.json
- backend/requirements.txt
- docker-compose.yml
- Dockerfile
- package.json
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- backend/requirements.txt


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| backend | 136 |
| frontend | 101 |
| infra | 5 |
| .github | 4 |
| scripts | 4 |
| synapse | 4 |
| bin | 3 |
| .codacy.yaml | 1 |
| .dockerignore | 1 |
| .env.docker | 1 |
| .env.example | 1 |
| .gitignore | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 124 |
| .tsx | 46 |
| .ts | 29 |
| .json | 18 |
| .svg | 17 |
| .yml | 6 |
| [no-ext] | 6 |
| .js | 5 |
| .md | 5 |
| .yaml | 5 |
| .txt | 4 |
| .sh | 3 |
| .mjs | 2 |
| .ps1 | 2 |
| .backend | 1 |
| .bat | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
