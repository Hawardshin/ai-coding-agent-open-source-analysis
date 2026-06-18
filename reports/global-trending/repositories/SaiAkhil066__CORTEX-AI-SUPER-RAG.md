# SaiAkhil066/CORTEX-AI-SUPER-RAG

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/SaiAkhil066/CORTEX-AI-SUPER-RAG |
| local path | sources/SaiAkhil066__CORTEX-AI-SUPER-RAG |
| HEAD | fba31cb |
| stars/forks | 1727 / 257 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T16:53:39Z |
| trendScore / priorityScore | 138 / 319 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval / knowledge | 69 | README.md, docker-compose.yml, requirements.txt |
| Local LLM / inference | 38 | README.md, requirements.txt, utils/advanced_rag.py |
| Cloud native / infrastructure | 14 | README.md, docker-compose.yml, app.py |
| Data / ML platform | 10 | README.md, utils/advanced_rag.py, app.py |
| Developer tools / DX | 2 | install.sh |
| AI agent / orchestration | 1 | README.md |
| Coding agent / software automation | 1 | app.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, devtools, infra, infraOps, llmFramework, local-llm, rag, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops |


## Structure Summary

| key | value |
| --- | --- |
| files | 18 |
| manifests | 4 |
| docs | 1 |
| tests | 0 |
| ci/ops | 2 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  |  | <p align="center" <img src="assets/banner.svg" alt="Cortex RAG — Agentic Retrieval Engine 2026" width="100%"/ </p <br/ <p align="center" <img src="assets/demo.svg" alt="Cortex RAG in action" width="92%"/ </p <p align="center" <sub ↑ &nbsp; what actually happens every time you send a message</sub </p <br/ <p align="center" <img src="https //img.shields.io/badge/Python 3.10+ 3776ab?style=flat square&logo=python&logoColor=white"/ &nbsp; <img src="https //img.shields.io/badge/Streamlit 1.30 ff4b4b?style=flat square&logo=streamlit&logoColor=white"/ &nbsp; <img src="https //img.shields.io/badge/Ollama local LLM ffb347?style=flat square"/ &nbsp; <img src="https //img.shields.io/badge/RAG 9 techniqu |


## Key Files

### Manifests

- README.md
- docker-compose.yml
- Dockerfile
- requirements.txt


### Spec / Docs / Prompt Artifacts

- requirements.txt


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| assets | 4 |
| utils | 4 |
| .env | 1 |
| .gitignore | 1 |
| .streamlit | 1 |
| app.py | 1 |
| docker-compose.yml | 1 |
| Dockerfile | 1 |
| install.sh | 1 |
| LICENSE | 1 |
| README.md | 1 |
| requirements.txt | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 5 |
| .svg | 4 |
| [no-ext] | 4 |
| .md | 1 |
| .sh | 1 |
| .toml | 1 |
| .txt | 1 |
| .yml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
