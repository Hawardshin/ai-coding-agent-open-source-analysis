# UnicomAI/wanwu

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/UnicomAI/wanwu |
| local path | sources/UnicomAI__wanwu |
| HEAD | 43d7f07 |
| stars/forks | 2539 / 112 |
| language | Go |
| license |  |
| pushedAt | 2026-06-15T12:32:11Z |
| trendScore / priorityScore | 164 / 479 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 268 | configs/microservice/bff-service/configs/agent-skills/anthropics/claude-api/python/agent-sdk/README.md, configs/microservice/bff-service/configs/agent-skills/anthropics/claude-api/typescript/agent-sdk/README.md, pkg/mcp2skill/README.md |
| Cloud native / infrastructure | 174 | callback/README.md, README.md, configs/microservice/ontology/vega-server/README.md |
| MCP / agent interoperability | 159 | configs/microservice/bff-service/configs/agent-skills/anthropics/claude-api/python/agent-sdk/README.md, configs/microservice/bff-service/configs/agent-skills/anthropics/claude-api/typescript/agent-sdk/README.md, pkg/mcp2skill/README.md |
| RAG / retrieval / knowledge | 118 | rag/rag_open_source/README.md, README.md, web/src/utils/README.md |
| Database / data infrastructure | 84 | callback/README.md, README.md, rag/rag_open_source/rag_core/requirements.txt |
| Developer tools / DX | 64 | configs/microservice/bff-service/configs/agent-skills/anthropics/claude-api/python/agent-sdk/README.md, configs/microservice/bff-service/configs/agent-skills/anthropics/claude-api/python/claude-api/README.md, configs/microservice/bff-service/configs/agent-skills/anthropics/claude-api/typescript/agent-sdk/README.md |
| Security / supply chain | 64 | configs/microservice/bff-service/configs/agent-skills/anthropics/claude-api/python/agent-sdk/README.md, configs/microservice/bff-service/configs/agent-skills/anthropics/claude-api/typescript/agent-sdk/README.md, pkg/mcp2skill/README.md |
| Frontend / app framework | 52 | README.md, pkg/wga/README.md, docker-compose.yaml |
| Coding agent / software automation | 44 | configs/microservice/bff-service/configs/agent-skills/anthropics/claude-api/python/agent-sdk/README.md, configs/microservice/bff-service/configs/agent-skills/anthropics/claude-api/typescript/agent-sdk/README.md, README.md |
| Observability / evaluation | 39 | README.md, rag/rag_open_source/rag_core/requirements.txt, rag/rag_open_source/rag_es_server_unify/requirements.txt |
| Data / ML platform | 17 | README.md, configs/microservice/bff-service/configs/agent-skills/clawhub/self-improvement/references/examples.md, configs/microservice/bff-service/configs/agent-skills/minimax/fullstack-dev/references/testing-strategy.md |
| Local LLM / inference | 5 | README.md, go.mod |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Go, .NET |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 3138 |
| manifests | 32 |
| docs | 494 |
| tests | 0 |
| ci/ops | 23 |
| spec artifacts | 31 |
| agent instruction files | 11 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | 🌟 Full‑Stack FDE Toolchain: 5 Core Capabilities / 🚀 3 Deployment Methods: Reach Business On‑Site / 🛠️ Infrastructure & Ecosystem / 🚩 Core Function Modules / &#x1F4E2; Function Comparison / &#x1F3AF; Typical Application Scenarios / 🚀 Quick Start / ⬆️ Version Upgrade / 🧬 Start Ontology Agent Platform / ➡️ Xinchuang Adaptation (TiDB & OceanBase) | <div align="center" <img src="https //github.com/user attachments/assets/4788ed8f eefc 4c19 aa77 7ec776743f3d" style="width 45%; height auto;" / <p <a href=" 🚩 Core Function Modules" Core Function Modules</a • <a href=" x1F3AF; Typical Application Scenarios" Typical Application Scenarios</a • <a href=" 🚀 Quick Start" Quick Start</a • <a href=" x1F4D1; Using Wanwu" Using Wanwu</a • <a href=" 128172; Q & A" Q & A</a • <a href=" x1F4E9; Contact Us" Contact Us</a </p <p <img alt="License" src="https //img.shields.io/badge/license apache2.0 blue.svg" <img alt="Go Version" src="https //img.shields.io/badge/go %3E%3D%201.24.0 blue" </a <a href="https //github.com/UnicomAI/wanwu/releases" <img alt |


## Key Files

### Manifests

- configs/microservice/bff-service/configs/agent-skills/anthropics/claude-api/python/agent-sdk/README.md
- configs/microservice/bff-service/configs/agent-skills/anthropics/claude-api/python/claude-api/README.md
- configs/microservice/bff-service/configs/agent-skills/anthropics/claude-api/typescript/agent-sdk/README.md
- configs/microservice/bff-service/configs/agent-skills/anthropics/claude-api/typescript/claude-api/README.md
- configs/microservice/bff-service/configs/agent-skills/clawhub/self-improvement/README.md
- pkg/mcp2skill/README.md
- rag/rag_open_source/rag_core/README.md
- rag/rag_open_source/README.md
- callback/README.md
- README.md
- web/README.md
- configs/microservice/ontology/vega-server/README.md
- pkg/ag-ui-util/README.md
- pkg/openapi2skill/README.md
- pkg/wga-persistent/README.md
- pkg/wga-sandbox/README.md
- pkg/wga/README.md
- web/src/utils/README.md
- configs/microservice/bff-service/configs/agent-skills/anthropics/mcp-builder/scripts/requirements.txt
- configs/microservice/bff-service/configs/agent-skills/anthropics/slack-gif-creator/requirements.txt


### Spec / Docs / Prompt Artifacts

- configs/microservice/bff-service/configs/agent-skills/anthropics/mcp-builder/scripts/requirements.txt
- configs/microservice/bff-service/configs/agent-skills/anthropics/slack-gif-creator/requirements.txt
- rag/rag_open_source/rag_core/graph/requirements.txt
- rag/rag_open_source/rag_core/requirements.txt
- rag/rag_open_source/rag_es_server_unify/requirements.txt
- callback/requirements.txt
- callback/static/prompts/docqa_prompt.txt
- internal/agent-service/service/agent-message-flow/prompt/system_prompt_knowledge.go
- internal/agent-service/service/agent-message-flow/prompt/system_prompt_new.go
- internal/agent-service/service/agent-message-flow/prompt/system_prompt.go
- internal/agent-service/service/agent-message-flow/prompt/systemt_supervisor_prompt.go
- web/src/views/agent/components/prompt/compare.vue
- web/src/views/agent/components/prompt/index.vue
- web/src/views/agent/components/prompt/promptDialog.vue
- web/src/views/agent/components/prompt/promptField.vue
- web/src/views/templateSquare/prompt/promptTempSquare.vue
- web/src/views/tool/prompt/index.vue
- configs/microservice/bff-service/configs/wga/agents/DataAnalysis/prompt.md
- configs/microservice/bff-service/configs/wga/agents/DeepResearch/PlanAgent/prompt.md
- configs/microservice/bff-service/configs/wga/agents/DeepResearch/ReportAgent/prompt.md


### Agent Instruction Files

- callback/static/prompts/docqa_prompt.txt
- internal/agent-service/service/agent-message-flow/prompt/system_prompt_knowledge.go
- internal/agent-service/service/agent-message-flow/prompt/system_prompt_new.go
- internal/agent-service/service/agent-message-flow/prompt/system_prompt.go
- internal/agent-service/service/agent-message-flow/prompt/systemt_supervisor_prompt.go
- web/src/views/agent/components/prompt/compare.vue
- web/src/views/agent/components/prompt/index.vue
- web/src/views/agent/components/prompt/promptDialog.vue
- web/src/views/agent/components/prompt/promptField.vue
- web/src/views/templateSquare/prompt/promptTempSquare.vue
- web/src/views/tool/prompt/index.vue


## Top Directories

| dir | count |
| --- | --- |
| configs | 1078 |
| web | 823 |
| internal | 748 |
| pkg | 197 |
| rag | 133 |
| callback | 47 |
| api | 39 |
| proto | 22 |
| docs | 13 |
| cmd | 11 |
| .agents | 1 |
| .env.example | 1 |
| .env.image.amd64 | 1 |
| .env.image.arm64 | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 991 |
| .md | 475 |
| .py | 244 |
| .vue | 243 |
| .bcmap | 168 |
| .svg | 162 |
| .xsd | 121 |
| .ttf | 109 |
| .properties | 108 |
| .js | 103 |
| .txt | 78 |
| .json | 56 |
| .yaml | 47 |
| .cs | 39 |
| .sh | 27 |
| .scss | 26 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
