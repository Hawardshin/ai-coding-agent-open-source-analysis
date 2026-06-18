# Mintplex-Labs/anything-llm

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Mintplex-Labs/anything-llm |
| local path | sources/Mintplex-Labs__anything-llm |
| HEAD | 25fa615 |
| stars/forks | 61740 / 6739 |
| language | JavaScript |
| license |  |
| pushedAt | 2026-06-17T21:16:20Z |
| trendScore / priorityScore | 242 / 542 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / app framework | 380 | .devcontainer/README.md, README.md, frontend/package.json |
| Cloud native / infrastructure | 262 | cloud-deployments/helm/charts/anythingllm/README.md, server/storage/models/README.md, server/storage/README.md |
| AI agent / orchestration | 72 | cloud-deployments/helm/charts/anythingllm/README.md, README.md, server/package.json |
| RAG / retrieval / knowledge | 72 | cloud-deployments/helm/charts/anythingllm/README.md, server/storage/models/README.md, README.md |
| Coding agent / software automation | 64 | cloud-deployments/helm/charts/anythingllm/README.md, frontend/src/components/Modals/DisplayRecoveryCodeModal/index.jsx, cloud-deployments/helm/charts/anythingllm/Chart.yaml |
| Local LLM / inference | 56 | server/storage/models/README.md, README.md, extras/translator/README.md |
| Security / supply chain | 56 | cloud-deployments/helm/charts/anythingllm/README.md, .devcontainer/README.md, README.md |
| Developer tools / DX | 16 | .devcontainer/README.md, cloud-deployments/openshift/README.md, package.json |
| MCP / agent interoperability | 10 | cloud-deployments/helm/charts/anythingllm/README.md, README.md, docker/Dockerfile |
| Database / data infrastructure | 5 | server/storage/models/README.md, server/storage/README.md, README.md |
| Data / ML platform | 1 | server/utils/agents/aibitat/plugins/create-files/pptx/test-themes.js |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1281 |
| manifests | 15 |
| docs | 29 |
| tests | 21 |
| ci/ops | 33 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Product Overview / Cool Features of AnythingLLM / Supported LLMs, Embedder Models, Speech models, and Vector Databases / Technical Overview / 🛳 Self-Hosting / How to setup for development / Telemetry & Privacy / Why? / Opting out / What do you explicitly track? | <a name="readme top" </a <p align="center" <a href="https //anythingllm.com" <img src="https //github.com/Mintplex Labs/anything llm/blob/master/images/wordmark.png?raw=true" alt="AnythingLLM logo" </a </p <div align='center' <a href="https //trendshift.io/repositories/2415" target=" blank" <img src="https //trendshift.io/api/badge/repositories/2415" alt="Mintplex Labs%2Fanything llm Trendshift" style="width 250px; height 55px;" width="250" height="55"/ </a </div <p align="center" <b AnythingLLM </b The all in one AI app you were looking for.<br / Chat with your docs, use AI Agents, hyper configurable, multi user, & no frustrating setup required. </p <p align="center" <a href="https //discor |


## Key Files

### Manifests

- cloud-deployments/helm/charts/anythingllm/README.md
- server/storage/models/README.md
- server/storage/README.md
- .devcontainer/README.md
- README.md
- cloud-deployments/openshift/README.md
- extras/translator/README.md
- frontend/package.json
- collector/package.json
- docker/docker-compose.yml
- docker/Dockerfile
- package.json
- server/package.json
- cloud-deployments/huggingface-spaces/Dockerfile
- cloud-deployments/openshift/Dockerfile


### Spec / Docs / Prompt Artifacts

- .vscode/tasks.json


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| frontend | 604 |
| server | 518 |
| collector | 69 |
| cloud-deployments | 30 |
| .github | 15 |
| docker | 10 |
| extras | 8 |
| locales | 4 |
| .vscode | 3 |
| .devcontainer | 2 |
| .dockerignore | 1 |
| .editorconfig | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .js | 636 |
| .jsx | 445 |
| .sql | 40 |
| .md | 29 |
| [no-ext] | 26 |
| .json | 23 |
| .yaml | 23 |
| .svg | 12 |
| .mjs | 9 |
| .yml | 7 |
| .css | 5 |
| .example | 5 |
| .txt | 4 |
| .sh | 3 |
| .webm | 3 |
| .html | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
