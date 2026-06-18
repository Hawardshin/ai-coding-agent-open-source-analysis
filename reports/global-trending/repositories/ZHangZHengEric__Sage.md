# ZHangZHengEric/Sage

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/ZHangZHengEric/Sage |
| local path | sources/ZHangZHengEric__Sage |
| HEAD | a14d9b9 |
| stars/forks | 1206 / 100 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T11:05:59Z |
| trendScore / priorityScore | 140 / 452 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | docs/en/memory/README.md, docs/zh/memory/README.md, examples/README.md |
| Developer tools / DX | 265 | examples/README.md, docs/en/applications/README.md, docs/en/architecture/README.md |
| MCP / agent interoperability | 197 | examples/README.md, sagents/README.md, docs/en/applications/README.md |
| Cloud native / infrastructure | 138 | docs/en/applications/README.md, docs/en/README.md, docs/zh/applications/README.md |
| Observability / evaluation | 137 | sagents/README.md, docs/en/applications/README.md, docs/en/architecture/README.md |
| RAG / retrieval / knowledge | 76 | docs/en/memory/README.md, sagents/README.md, docs/en/api/README.md |
| Frontend / app framework | 58 | docs/en/applications/README.md, docs/en/architecture/README.md, docs/en/README.md |
| Database / data infrastructure | 55 | deploy/README.md, README.md, deploy/k8s/README.md |
| Security / supply chain | 47 | README.md, deploy/k8s/README.md, examples/coding_agent_config.json |
| Coding agent / software automation | 27 | docs/en/architecture/README.md, docs/en/README.md, examples/coding_agent_config.json |
| Data / ML platform | 7 | docs/en/architecture/ARCHITECTURE_SAGENTS_AGENT_FLOW.md, docs/en/architecture/ARCHITECTURE_SAGENTS_SESSION_CONTEXT.md, docs/en/memory/memory-search/P1_VALIDATION.md |
| Local LLM / inference | 1 | docs/en/applications/CLI.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1964 |
| manifests | 40 |
| docs | 271 |
| tests | 157 |
| ci/ops | 49 |
| spec artifacts | 28 |
| agent instruction files | 23 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | 🌟 **Experience Sage's Power** | 🌟 **Experience Sage's Power** / 🧠 **Sage Agent Platform** / 🎯 **From Complex Work to Reliable Delivery** / 📸 **Product Screenshots** / ✨ **Key Features** / 🚀 **Quick Start** / Web (clone and run) / Desktop (installers) / CLI / or: sage chat | <div align="center" 🌟 Experience Sage's Power ! cover assets/cover.png ! English https //img.shields.io/badge/Language English blue.svg README.md ! 简体中文 https //img.shields.io/badge/语言 简体中文 red.svg README CN.md ! License MIT https //img.shields.io/badge/License MIT yellow.svg?logo=opensourceinitiative LICENSE ! Python 3.10+ https //img.shields.io/badge/Python 3.10%2B blue.svg?logo=python https //python.org ! Version https //img.shields.io/badge/Version 1.1.0 green.svg https //github.com/ZHangZHengEric/Sage ! DeepWiki https //img.shields.io/badge/DeepWiki Learn%20More purple.svg https //deepwiki.com/ZHangZHengEric/Sage ! Slack https //img.shields.io/badge/Slack Join%20Community 4A154B?logo=s |


## Key Files

### Manifests

- docs/en/memory/memory-search/README.md
- docs/en/memory/README.md
- docs/zh/memory/memory-search/README.md
- docs/zh/memory/README.md
- examples/README.md
- docs/README.md
- sagents/README.md
- docs/en/api/README.md
- docs/en/applications/README.md
- docs/en/architecture/README.md
- docs/en/README.md
- docs/en/solutions/README.md
- docs/zh/api/README.md
- docs/zh/applications/README.md
- docs/zh/architecture/README.md
- docs/zh/README.md
- docs/zh/solutions/README.md
- sagents/context/user_memory/README.md
- sagents/retrieve_engine/README.md
- deploy/README.md


### Spec / Docs / Prompt Artifacts

- app/skills/mcp-builder/scripts/requirements.txt
- requirements.txt
- app/skills/slack-gif-creator/requirements.txt
- app/skills/social-push/requirements.txt
- sagents/prompts/__init__.py
- sagents/prompts/agent_base_prompts.py
- sagents/prompts/common_util_prompts.py
- sagents/prompts/fibre_agent_prompts.py
- sagents/prompts/memory_extraction_prompts.py
- sagents/prompts/memory_recall_prompts.py
- sagents/prompts/plan_agent_prompts.py
- sagents/prompts/query_suggest_prompts.py
- sagents/prompts/session_context_prompts.py
- sagents/prompts/simple_agent_prompts.py
- sagents/prompts/simple_react_agent_prompts.py
- sagents/prompts/task_analysis_prompts.py
- sagents/prompts/task_completion_judge_prompt.py
- sagents/prompts/task_decompose_prompts.py
- sagents/prompts/task_executor_agent_prompts.py
- sagents/prompts/task_observation_prompts.py


### Agent Instruction Files

- sagents/prompts/__init__.py
- sagents/prompts/agent_base_prompts.py
- sagents/prompts/common_util_prompts.py
- sagents/prompts/fibre_agent_prompts.py
- sagents/prompts/memory_extraction_prompts.py
- sagents/prompts/memory_recall_prompts.py
- sagents/prompts/plan_agent_prompts.py
- sagents/prompts/query_suggest_prompts.py
- sagents/prompts/session_context_prompts.py
- sagents/prompts/simple_agent_prompts.py
- sagents/prompts/simple_react_agent_prompts.py
- sagents/prompts/task_analysis_prompts.py
- sagents/prompts/task_completion_judge_prompt.py
- sagents/prompts/task_decompose_prompts.py
- sagents/prompts/task_executor_agent_prompts.py


## Top Directories

| dir | count |
| --- | --- |
| app | 1292 |
| sagents | 205 |
| docs | 115 |
| tests | 113 |
| common | 78 |
| deploy | 62 |
| mcp_servers | 52 |
| examples | 10 |
| outputs | 5 |
| release_notes | 5 |
| scripts | 5 |
| .github | 4 |
| .githooks | 2 |
| assets | 2 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 629 |
| .vue | 359 |
| .md | 256 |
| .js | 189 |
| .rs | 121 |
| .xsd | 117 |
| .ttf | 54 |
| .txt | 51 |
| .yaml | 28 |
| .json | 23 |
| .sh | 18 |
| .yml | 14 |
| .svg | 13 |
| .css | 12 |
| .html | 11 |
| [no-ext] | 11 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
