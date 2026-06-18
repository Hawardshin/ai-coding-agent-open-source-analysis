# jonfairbanks/local-rag

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/jonfairbanks/local-rag |
| local path | sources/jonfairbanks__local-rag |
| HEAD | 8277066 |
| stars/forks | 747 / 91 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T14:34:21Z |
| trendScore / priorityScore | 140 / 360 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Local LLM / inference | 145 | AGENTS.md, README.md, docs/contributing.md |
| RAG / retrieval / knowledge | 142 | AGENTS.md, README.md, docker-compose.yml |
| Cloud native / infrastructure | 37 | Dockerfile, docs/setup.md, docs/todo.md |
| Database / data infrastructure | 17 | docs/pipeline.md, docs/usage.md, utils/rag_pipeline.py |
| Security / supply chain | 15 | AGENTS.md, README.md, SECURITY.md |
| Data / ML platform | 12 | AGENTS.md, README.md, docs/pipeline.md |
| AI agent / orchestration | 4 | AGENTS.md, utils/helpers.py |
| Coding agent / software automation | 2 | docs/contributing.md |
| MCP / agent interoperability | 2 | AGENTS.md |
| Developer tools / DX | 1 | utils/logs.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, devtools, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, rag, security, securityTooling |
| stacks | Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 55 |
| manifests | 5 |
| docs | 13 |
| tests | 8 |
| ci/ops | 7 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Local RAG | Local RAG | Local RAG ! local rag demo demo.gif ! OpenSSF Best Practices https //www.bestpractices.dev/projects/8588/badge https //www.bestpractices.dev/projects/8588 ! GitHub Commit Activity https //img.shields.io/github/commit activity/t/jonfairbanks/local rag ! GitHub Last Commit https //img.shields.io/github/last commit/jonfairbanks/local rag ! GitHub License https //img.shields.io/github/license/jonfairbanks/local rag Offline, open source retrieval augmented generation. Ingest local files, GitHub repositories, and websites for retrieval augmented generation RAG with local Ollama models. Local RAG keeps chat, embeddings, and indexed source content on your machine or network. Features Local Ollama ch |


## Key Files

### Manifests

- AGENTS.md
- README.md
- docker-compose.yml
- Dockerfile
- docker-compose.yml-rocm


### Spec / Docs / Prompt Artifacts

- AGENTS.md


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| components | 12 |
| tests | 8 |
| .github | 7 |
| docs | 7 |
| utils | 7 |
| .dockerignore | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .streamlit | 1 |
| AGENTS.md | 1 |
| CHANGELOG.md | 1 |
| docker-compose.yml | 1 |
| docker-compose.yml-rocm | 1 |
| Dockerfile | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 27 |
| .md | 13 |
| [no-ext] | 6 |
| .yml | 4 |
| .yaml | 2 |
| .html | 1 |
| .toml | 1 |
| .yml-rocm | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
