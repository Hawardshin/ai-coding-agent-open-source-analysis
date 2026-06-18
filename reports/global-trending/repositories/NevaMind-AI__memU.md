# NevaMind-AI/memU

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/NevaMind-AI/memU |
| local path | sources/NevaMind-AI__memU |
| HEAD | f4e82ce |
| stars/forks | 13885 / 1037 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T22:30:16Z |
| trendScore / priorityScore | 189 / 490 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Database / data infrastructure | 500 | AGENTS.md, README.md, pyproject.toml |
| RAG / retrieval / knowledge | 332 | docs/adr/README.md, AGENTS.md, README.md |
| AI agent / orchestration | 205 | AGENTS.md, README.md, examples/example_5_with_lazyllm_client.py |
| Observability / evaluation | 92 | README.md, src/memu/prompts/memory_type/skill.py, src/memu/prompts/retrieve/judger.py |
| Cloud native / infrastructure | 36 | README.md, examples/sealos_support_agent.py, src/memu/prompts/memory_type/skill.py |
| Developer tools / DX | 34 | README.md, pyproject.toml, examples/test_nebius_provider.py |
| Data / ML platform | 21 | docs/adr/README.md, AGENTS.md, examples/sealos_support_agent.py |
| Security / supply chain | 11 | src/memu/prompts/category_summary/category.py, examples/resources/docs/doc1.txt, examples/resources/docs/doc2.txt |
| Coding agent / software automation | 3 | examples/proactive/memory/config.py, docs/sealos-devbox-guide.md, examples/resources/conversations/conv1.json |
| MCP / agent interoperability | 3 | AGENTS.md, examples/proactive/memory/platform/tools.py |
| Frontend / app framework | 2 | examples/resources/docs/doc2.txt |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Python, Rust |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 215 |
| manifests | 8 |
| docs | 38 |
| tests | 17 |
| ci/ops | 3 |
| spec artifacts | 34 |
| agent instruction files | 28 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | memU | memU / File System as Memory, Memory Shapes the Agent / 🔄 How It Works / 🗂️ The Memory File System / 🧩 What memU Builds / ⭐️ Star the repository / ✨ Core Features / 🎯 Use Cases / 1. **Conversation Memory** / 2. **Workspace Context for Coding Agents** | ! MemU Banner assets/banner.png <div align="center" memU File System as Memory, Memory Shapes the Agent ! PyPI version https //badge.fury.io/py/memu py.svg https //badge.fury.io/py/memu py ! License Apache 2.0 https //img.shields.io/badge/License Apache%202.0 blue.svg https //opensource.org/licenses/Apache 2.0 ! Python 3.13+ https //img.shields.io/badge/python 3.13+ blue.svg https //www.python.org/downloads/ ! Discord https //img.shields.io/badge/Discord Join%20Chat 5865F2?logo=discord&logoColor=white https //discord.com/invite/hQZntfGsbJ ! Twitter https //img.shields.io/badge/Twitter Follow 1DA1F2?logo=x&logoColor=white https //x.com/memU ai <a href="https //trendshift.io/repositories/17374 |


## Key Files

### Manifests

- examples/sealos-assistant/README.md
- docs/adr/README.md
- AGENTS.md
- README.md
- examples/sealos-assistant/requirements.txt
- Cargo.toml
- Makefile
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- docs/adr/README.md
- AGENTS.md
- examples/sealos-assistant/requirements.txt
- docs/adr/0002-pluggable-storage-and-vector-strategy.md
- src/memu/prompts/__init__.py
- src/memu/prompts/category_patch/__init__.py
- src/memu/prompts/category_patch/category.py
- src/memu/prompts/category_summary/__init__.py
- src/memu/prompts/category_summary/category_with_refs.py
- src/memu/prompts/category_summary/category.py
- src/memu/prompts/memory_type/__init__.py
- src/memu/prompts/memory_type/behavior.py
- src/memu/prompts/memory_type/event.py
- src/memu/prompts/memory_type/knowledge.py
- src/memu/prompts/memory_type/profile.py
- src/memu/prompts/memory_type/skill.py
- src/memu/prompts/memory_type/tool.py
- src/memu/prompts/preprocess/__init__.py
- src/memu/prompts/preprocess/audio.py
- src/memu/prompts/preprocess/conversation.py


### Agent Instruction Files

- AGENTS.md
- src/memu/prompts/__init__.py
- src/memu/prompts/category_patch/__init__.py
- src/memu/prompts/category_patch/category.py
- src/memu/prompts/category_summary/__init__.py
- src/memu/prompts/category_summary/category_with_refs.py
- src/memu/prompts/category_summary/category.py
- src/memu/prompts/memory_type/__init__.py
- src/memu/prompts/memory_type/behavior.py
- src/memu/prompts/memory_type/event.py
- src/memu/prompts/memory_type/knowledge.py
- src/memu/prompts/memory_type/profile.py
- src/memu/prompts/memory_type/skill.py
- src/memu/prompts/memory_type/tool.py
- src/memu/prompts/preprocess/__init__.py


## Top Directories

| dir | count |
| --- | --- |
| src | 116 |
| examples | 40 |
| tests | 17 |
| docs | 14 |
| .github | 9 |
| readme | 6 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |
| .python-version | 1 |
| AGENTS.md | 1 |
| Cargo.toml | 1 |
| CHANGELOG.md | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE.txt | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 149 |
| .md | 36 |
| .yml | 8 |
| .txt | 7 |
| .json | 4 |
| [no-ext] | 3 |
| .toml | 2 |
| .cfg | 1 |
| .in | 1 |
| .pyi | 1 |
| .rs | 1 |
| .sh | 1 |
| .yaml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
