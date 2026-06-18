# SpharxTeam/AgentOS

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/SpharxTeam/AgentOS |
| local path | sources/SpharxTeam__AgentOS |
| HEAD | 2f42f57 |
| stars/forks | 1247 / 114 |
| language | C |
| license |  |
| pushedAt | 2026-06-17T14:31:33Z |
| trendScore / priorityScore | 135 / 441 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | ecosystem/examples/code-review-agent/README.md, ecosystem/examples/customer-support-agent/README.md, ecosystem/examples/hello-agent/README.md |
| Cloud native / infrastructure | 207 | agentos/README.md, tests/benchmarks/README.md, agentos/atoms/memory/README.md |
| Observability / evaluation | 190 | ecosystem/examples/code-review-agent/README.md, ecosystem/examples/prompt-tuner-demo/README.md, agentos/README.md |
| Security / supply chain | 151 | ecosystem/examples/hello-agent/README.md, agentos/README.md, tests/security/README.md |
| MCP / agent interoperability | 115 | ecosystem/examples/mcp-tool-server/README.md, ecosystem/examples/weather-agent/README.md, ecosystem/examples/a2a-chat/README.md |
| Developer tools / DX | 93 | ecosystem/examples/mcp-tool-server/README.md, ecosystem/examples/prompt-tuner-demo/README.md, ecosystem/examples/a2a-chat/README.md |
| Database / data infrastructure | 79 | agentos/README.md, tests/benchmarks/README.md, agentos/atoms/memory/README.md |
| Data / ML platform | 22 | ecosystem/examples/customer-support-agent/README.md, ecosystem/examples/prompt-tuner-demo/README.md, ecosystem/examples/research-agent/README.md |
| RAG / retrieval / knowledge | 18 | ecosystem/examples/plugin-demo/README.md, agentos/atoms/memory/README.md, agentos/commons/utils/types/README.md |
| Frontend / app framework | 10 | agentos/protocols/frameworks/langchain/README.md, ecosystem/openlab/contrib/agents/README.md, ecosystem/openlab/contrib/README.md |
| Coding agent / software automation | 1 | agentos/commons/utils/types/README.md |
| Local LLM / inference | 1 | agentos/daemon/llm_d/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1827 |
| manifests | 40 |
| docs | 181 |
| tests | 470 |
| ci/ops | 29 |
| spec artifacts | 45 |
| agent instruction files | 39 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | AgentRT - AI Agent Runtime Platform | AgentRT - AI Agent Runtime Platform / 🎉 Preview Released / 1️⃣ Introduction / 2️⃣ Innovation Highlights / 3️⃣ Core Philosophy / 4️⃣ System Architecture / 5️⃣ Quick Start / 1. Clone repository / 2. Install dependencies (Ubuntu) / 3. Build kernel (out-of-source build required by BAN-33) | AgentRT AI Agent Runtime Platform Powered by OpenAirymax The seminal fourth "Operating System Philosophy" in human computing history. Language English 简体中文 README zh.md ! AtomGit https //atomgit.com/openairymax/agentos/star/badge.svg https //atomgit.com/openairymax/agentos ! star https //gitee.com/spharx/agentos/badge/star.svg?theme=dark https //gitee.com/spharx/agentos ! GitHub stars https //img.shields.io/github/stars/SpharxTeam/AgentOS https //github.com/SpharxTeam/AgentOS/stargazers ! Version https //img.shields.io/badge/version 0.1.0 5a6b7e https //atomgit.com/openairymax/agentos ! License https //img.shields.io/badge/license Apache 2.0 4a90d9 LICENSE ! Build https //img.shields.io/badg |


## Key Files

### Manifests

- agentos/daemon/examples/README.md
- agentos/heapstore/examples/README.md
- ecosystem/examples/code-review-agent/README.md
- ecosystem/examples/customer-support-agent/README.md
- ecosystem/examples/hello-agent/README.md
- ecosystem/examples/mcp-tool-server/README.md
- ecosystem/examples/multi-agent-debate/README.md
- ecosystem/examples/prompt-tuner-demo/README.md
- ecosystem/examples/research-agent/README.md
- ecosystem/examples/weather-agent/README.md
- ecosystem/prompts/README.md
- ecosystem/examples/a2a-chat/README.md
- ecosystem/examples/plugin-demo/README.md
- ecosystem/examples/README.md
- agentos/commons/tests/README.md
- agentos/README.md
- tests/benchmarks/README.md
- tests/security/README.md
- agentos/atoms/corekern/README.md
- agentos/atoms/coreloopthree/README.md


### Spec / Docs / Prompt Artifacts

- ecosystem/prompts/README.md
- tests/requirements.txt
- ecosystem/openlab/contrib/agents/tester/prompts/system1.md
- ecosystem/openlab/contrib/agents/tester/prompts/system2.md
- ecosystem/prompts/tuner/ab_test.py
- ecosystem/openlab/app/ecommerce/src/requirements.txt
- ecosystem/openlab/app/videoedit/src/requirements.txt
- ecosystem/openlab/contrib/agents/architect/prompts/system1.md
- ecosystem/openlab/contrib/agents/architect/prompts/system2.md
- ecosystem/openlab/contrib/agents/backend/prompts/system1.md
- ecosystem/openlab/contrib/agents/backend/prompts/system2.md
- ecosystem/openlab/contrib/agents/devops/prompts/system1.md
- ecosystem/openlab/contrib/agents/devops/prompts/system2.md
- ecosystem/openlab/contrib/agents/frontend/prompts/system1.md
- ecosystem/openlab/contrib/agents/frontend/prompts/system2.md
- ecosystem/openlab/contrib/agents/product_manager/prompts/system1.md
- ecosystem/openlab/contrib/agents/product_manager/prompts/system2.md
- ecosystem/openlab/contrib/agents/security/prompts/system1.md
- ecosystem/openlab/contrib/agents/security/prompts/system2.md
- ecosystem/openlab/openlab/requirements.txt


### Agent Instruction Files

- ecosystem/prompts/README.md
- ecosystem/openlab/contrib/agents/tester/prompts/system1.md
- ecosystem/openlab/contrib/agents/tester/prompts/system2.md
- ecosystem/prompts/tuner/ab_test.py
- ecosystem/openlab/contrib/agents/architect/prompts/system1.md
- ecosystem/openlab/contrib/agents/architect/prompts/system2.md
- ecosystem/openlab/contrib/agents/backend/prompts/system1.md
- ecosystem/openlab/contrib/agents/backend/prompts/system2.md
- ecosystem/openlab/contrib/agents/devops/prompts/system1.md
- ecosystem/openlab/contrib/agents/devops/prompts/system2.md
- ecosystem/openlab/contrib/agents/frontend/prompts/system1.md
- ecosystem/openlab/contrib/agents/frontend/prompts/system2.md
- ecosystem/openlab/contrib/agents/product_manager/prompts/system1.md
- ecosystem/openlab/contrib/agents/product_manager/prompts/system2.md
- ecosystem/openlab/contrib/agents/security/prompts/system1.md


## Top Directories

| dir | count |
| --- | --- |
| agentos | 912 |
| ecosystem | 270 |
| tests | 247 |
| sdk | 219 |
| scripts | 115 |
| deploy | 31 |
| .github | 10 |
| .clang-format | 1 |
| .clang-tidy | 1 |
| .clangd | 1 |
| .editorconfig | 1 |
| .env.example | 1 |
| .git-blame-ignore-revs | 1 |
| .gitattributes | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .c | 602 |
| .h | 305 |
| .py | 295 |
| .md | 180 |
| .yaml | 70 |
| .txt | 65 |
| .rs | 58 |
| .sh | 43 |
| .ts | 41 |
| .json | 40 |
| [no-ext] | 34 |
| .go | 32 |
| .yml | 18 |
| .service | 13 |
| .toml | 7 |
| .example | 3 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
