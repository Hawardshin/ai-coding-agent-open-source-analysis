# fdueblab/Micro-Agent

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/fdueblab/Micro-Agent |
| local path | sources/fdueblab__Micro-Agent |
| HEAD | a7a055c |
| stars/forks | 108 / 17 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T13:41:28Z |
| trendScore / priorityScore | 173 / 424 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 431 | README.md, trace_evidence/README.md, pyproject.toml |
| MCP / agent interoperability | 232 | README.md, trace_evidence/README.md, pyproject.toml |
| RAG / retrieval / knowledge | 139 | README.md, pyproject.toml, api/routes/agent.py |
| Data / ML platform | 75 | trace_evidence/README.md, trace_evidence/tests/test_e2e_cli.py, trace_evidence/scripts/http_mcp_smoke.py |
| Security / supply chain | 33 | trace_evidence/README.md, deploy/Dockerfile, tasks/aml_model_evaluation.py |
| Cloud native / infrastructure | 23 | README.md, .github/workflows/master.yml, workspace/knowledge/service_packaging/packaging_case_cli.md |
| Developer tools / DX | 19 | trace_evidence/README.md, trace_evidence/tests/test_e2e_cli.py, workspace/knowledge/service_packaging/fastmcp_usage.md |
| Local LLM / inference | 15 | README.md, micro_agent/core/llm.py, README_en.md |
| Database / data infrastructure | 10 | README.md, micro_agent/core/memory/persistent.py, micro_agent/simulation/trace_store.py |
| Frontend / app framework | 8 | README.md, pyproject.toml, tests/test_phase5.py |
| Observability / evaluation | 8 | README_en.md, trace_evidence/evidence_checker.py, trace_evidence/trace_adapter.py |
| Coding agent / software automation | 1 | README_en.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 143 |
| manifests | 6 |
| docs | 40 |
| tests | 22 |
| ci/ops | 5 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | task/builtin.py | 为什么选择 Micro-Agent / 架构 / 快速开始 / 环境要求 / 安装 / 配置 / 启动 / Docker 部署 / 定义垂域任务 / 1. 编写 Prompt 模板 | <div align="center" <img src="docs/banner.png" alt="Micro Agent" width="100%" <br ! Python https //img.shields.io/badge/Python ≥3.11 blue?logo=python&logoColor=white https //python.org ! License https //img.shields.io/badge/License MIT green LICENSE ! LiteLLM https //img.shields.io/badge/LLM litellm orange https //github.com/BerriAI/litellm ! MCP https //img.shields.io/badge/Tool MCP purple https //modelcontextprotocol.io 中文 English README en.md </div 为什么选择 Micro Agent 如果你需要为特定行业快速构建一个专业 Agent 并以 API 服务形式交付，Micro Agent 是最短路径。 <div align="center" 能力 Micro Agent LangGraph AutoGen¹ OpenClaw 开箱即用 API 服务 ✅ ✅ ❌ ✅ 垂域知识注入 Skills ✅ ❌ ❌ ✅ 内置 RAG 检索增强 ✅ 生态 扩展 ✅ MCP 集成 ✅ ✅ ✅ ✅ 流式 SSE 输出 ✅ ✅ 需自建 ✅ 多 LLM |


## Key Files

### Manifests

- README.md
- trace_evidence/README.md
- deploy/Dockerfile
- docker-compose.yml
- Dockerfile
- pyproject.toml


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| micro_agent | 36 |
| workspace | 32 |
| trace_evidence | 28 |
| tasks | 11 |
| api | 10 |
| tests | 8 |
| .github | 5 |
| deploy | 2 |
| .env.example | 1 |
| .gitignore | 1 |
| config | 1 |
| CONTRIBUTING.md | 1 |
| docker-compose.yml | 1 |
| Dockerfile | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 79 |
| .md | 40 |
| .j2 | 8 |
| .toml | 4 |
| [no-ext] | 4 |
| .json | 3 |
| .yml | 3 |
| .example | 1 |
| .sh | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
