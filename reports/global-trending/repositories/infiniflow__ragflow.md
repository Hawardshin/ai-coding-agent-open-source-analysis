# infiniflow/ragflow

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/infiniflow/ragflow |
| local path | sources/infiniflow__ragflow |
| HEAD | d32e05d |
| stars/forks | 83034 / 9597 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2026-06-17T14:13:49Z |
| trendScore / priorityScore | 195 / 561 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 500 | test/benchmark/README.md, admin/client/README.md, agent/sandbox/README.md |
| RAG / retrieval / knowledge | 465 | test/benchmark/README.md, admin/client/README.md, internal/cli/README.md |
| AI agent / orchestration | 456 | agent/sandbox/tests/README.md, admin/client/README.md, agent/plugin/README.md |
| Database / data infrastructure | 233 | admin/client/README.md, agent/sandbox/README.md, AGENTS.md |
| Frontend / app framework | 174 | agent/plugin/README.md, AGENTS.md, README.md |
| Data / ML platform | 153 | test/benchmark/README.md, internal/cli/README.md, README.md |
| MCP / agent interoperability | 146 | README.md, docker/docker-compose.yml, Dockerfile |
| Developer tools / DX | 115 | test/benchmark/README.md, admin/client/README.md, agent/sandbox/README.md |
| Local LLM / inference | 113 | pyproject.toml, docs/guides/agent/agent_component_reference/parser.md, docs/guides/agent/agent_introduction.md |
| Observability / evaluation | 99 | test/benchmark/README.md, admin/client/README.md, agent/sandbox/README.md |
| Security / supply chain | 80 | agent/sandbox/tests/README.md, agent/sandbox/README.md, internal/cli/filesystem/README.md |
| Coding agent / software automation | 2 | CLAUDE.md, web/CLAUDE.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Go, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 3605 |
| manifests | 40 |
| docs | 228 |
| tests | 598 |
| ci/ops | 32 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | 💡 What is RAGFlow? / 🎮 Get Started / 🔥 Latest Updates / 🎉 Stay Tuned / 🌟 Key Features / 🍭 **"Quality in, quality out"** / 🍱 **Template-based chunking** / 🌱 **Grounded citations with reduced hallucinations** / 🍔 **Compatibility with heterogeneous data sources** / 🛀 **Automated and effortless RAG workflow** | <div align="center" <a href="https //cloud.ragflow.io/" <img src="web/src/assets/logo with text.svg" width="520" alt="ragflow logo" </a </div <p align="center" <a href="./README.md" <img alt="README in English" src="https //img.shields.io/badge/English DBEDFA" </a <a href="./README zh.md" <img alt="简体中文版自述文件" src="https //img.shields.io/badge/简体中文 DFE0E5" </a <a href="./README tzh.md" <img alt="繁體版中文自述文件" src="https //img.shields.io/badge/繁體中文 DFE0E5" </a <a href="./README ja.md" <img alt="日本語のREADME" src="https //img.shields.io/badge/日本語 DFE0E5" </a <a href="./README ko.md" <img alt="한국어" src="https //img.shields.io/badge/한국어 DFE0E5" </a <a href="./README fr.md" <img alt="README en Français |


## Key Files

### Manifests

- agent/sandbox/tests/README.md
- test/benchmark/README.md
- admin/client/README.md
- agent/plugin/README.md
- agent/sandbox/README.md
- internal/cli/filesystem/README.md
- internal/cli/README.md
- AGENTS.md
- test/README.md
- deepdoc/README.md
- docker/README.md
- helm/README.md
- README.md
- test/playwright/README.md
- web/README.md
- api/apps/auth/README.md
- api/common/README.md
- internal/engine/README.md
- tools/chatgpt-on-wechat/plugins/README.md
- tools/es-to-oceanbase-migration/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- web/CLAUDE.md
- agent/sandbox/executor_manager/requirements.txt
- agent/sandbox/sandbox_base_image/python/requirements.txt
- .github/copilot-instructions.md
- test/unit_test/rag/prompts/test_generator_message_fit_in.py
- test/unit_test/rag/prompts/test_generator_sandbox.py
- test/unit_test/rag/prompts/test_kb_prompt_metadata.py
- rag/prompts/__init__.py
- rag/prompts/analyze_task_system.md
- rag/prompts/analyze_task_user.md
- rag/prompts/ask_summary.md
- rag/prompts/assign_toc_levels.md
- rag/prompts/citation_plus.md
- rag/prompts/citation_prompt.md
- rag/prompts/content_tagging_prompt.md
- rag/prompts/cross_languages_sys_prompt.md
- rag/prompts/cross_languages_user_prompt.md
- rag/prompts/full_question_prompt.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- web/CLAUDE.md
- .github/copilot-instructions.md
- test/unit_test/rag/prompts/test_generator_message_fit_in.py
- test/unit_test/rag/prompts/test_generator_sandbox.py
- test/unit_test/rag/prompts/test_kb_prompt_metadata.py
- rag/prompts/__init__.py
- rag/prompts/analyze_task_system.md
- rag/prompts/analyze_task_user.md
- rag/prompts/ask_summary.md
- rag/prompts/assign_toc_levels.md
- rag/prompts/citation_plus.md
- rag/prompts/citation_prompt.md
- rag/prompts/content_tagging_prompt.md


## Top Directories

| dir | count |
| --- | --- |
| web | 1500 |
| internal | 757 |
| test | 364 |
| rag | 186 |
| agent | 151 |
| api | 126 |
| docs | 113 |
| common | 99 |
| conf | 74 |
| deepdoc | 47 |
| tools | 34 |
| docker | 21 |
| sdk | 20 |
| helm | 19 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 923 |
| .tsx | 728 |
| .go | 615 |
| .ts | 401 |
| .svg | 250 |
| .md | 186 |
| .json | 154 |
| .h | 63 |
| .less | 38 |
| .woff2 | 38 |
| .cpp | 29 |
| .cc | 23 |
| .sh | 22 |
| [no-ext] | 22 |
| .mdx | 19 |
| .yaml | 18 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
