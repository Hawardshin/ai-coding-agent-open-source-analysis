# liaotxcn/Weave

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/liaotxcn/Weave |
| local path | sources/liaotxcn__Weave |
| HEAD | 687a080 |
| stars/forks | 364 / 27 |
| language | Go |
| license |  |
| pushedAt | 2026-06-14T05:01:51Z |
| trendScore / priorityScore | 155 / 436 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Database / data infrastructure | 388 | README.md, docker-compose.yaml, docs/DATABASE_MIGRATION.md |
| Observability / evaluation | 203 | README.md, docker-compose.yaml, go.mod |
| RAG / retrieval / knowledge | 175 | README.md, .github/workflows/test.yml, .github/workflows/build.yml |
| AI agent / orchestration | 159 | README.md, services/aichat/internal/model/agent.go, services/aichat/internal/service/agent/agent_health.go |
| Security / supply chain | 158 | README.md, go.mod, docs/API.md |
| Frontend / app framework | 127 | README.md, web/package.json, services/aichat/internal/model/agent.go |
| Cloud native / infrastructure | 95 | README.md, docker-compose.yaml, docs/GRAFANA_MONITORING_GUIDE.md |
| MCP / agent interoperability | 64 | README.md, go.mod, services/aichat/internal/model/agent.go |
| Local LLM / inference | 25 | README.md, go.mod, services/rag/cmd/main.go |
| Developer tools / DX | 15 | README.md, docker-compose.yaml, docs/PLUGIN_DEVELOPMENT_GUIDE.md |
| Coding agent / software automation | 12 | services/aichat/chat_web/aichat.css |
| Data / ML platform | 2 | .github/workflows/ci-cd.yml, services/aichat/chat_web/aichat.js |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Go |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 178 |
| manifests | 7 |
| docs | 7 |
| tests | 20 |
| ci/ops | 5 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | A highly efficient, secure, and stable application development platform with excellent performance, easy scalability, and deep integration of AI capabilities such as LLM, AI Chat, RAG, and Agents. | A highly efficient, secure, and stable application development platform with excellent performance, easy scalability, and deep integration of AI capabilities such as LLM, AI Chat, RAG, and Agents. / 📋 Project Introduction / 🏗️ Overall Architecture / Integration of Microkernel and Layered Architecture / Microkernel Architecture Components / Layered Architecture Components / Architectural Characteristics / 🌟 Project Features / 🏗️ Microkernel + Layered Architecture / 🚀 High Performance/Efficiency | A highly efficient, secure, and stable application development platform with excellent performance, easy scalability, and deep integration of AI capabilities such as LLM, AI Chat, RAG, and Agents. <div align="center" <img src="https //img.shields.io/badge/Go 1.24+ 00ADD8?style=for the badge&logo=go&logoColor=white" alt="Go Version" <img src="https //img.shields.io/badge/Microkernel Layered 6BA539?style=for the badge" alt="Architecture" <img src="https //img.shields.io/badge/LLM Agent MCP 74AA9C?style=for the badge&logo=brain&logoColor=white" alt="LLM Agent MCP" <img src="https //img.shields.io/badge/AIChat RAG FF6F00?style=for the badge&logo=ai&logoColor=white" alt="AIChat RAG" <img src="htt |


## Key Files

### Manifests

- README.md
- docker-compose.yaml
- Dockerfile
- go.mod
- Makefile
- web/package.json
- go.sum


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| services | 49 |
| web | 31 |
| pkg | 19 |
| test | 17 |
| plugins | 14 |
| middleware | 8 |
| controllers | 7 |
| config | 6 |
| models | 6 |
| docs | 5 |
| .github | 3 |
| utils | 2 |
| .gitignore | 1 |
| docker-compose.yaml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 116 |
| .js | 11 |
| .vue | 10 |
| .css | 7 |
| .md | 7 |
| .yml | 4 |
| [no-ext] | 4 |
| .example | 3 |
| .html | 3 |
| .json | 3 |
| .yaml | 3 |
| .conf | 2 |
| .sql | 2 |
| .mod | 1 |
| .sum | 1 |
| .svg | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
