# OpenCSGs/csghub-server

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/OpenCSGs/csghub-server |
| local path | sources/OpenCSGs__csghub-server |
| HEAD | e18f201 |
| stars/forks | 1070 / 231 |
| language | Go |
| license |  |
| pushedAt | 2026-06-17T14:38:20Z |
| trendScore / priorityScore | 134 / 427 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Database / data infrastructure | 500 | AGENTS.md, docker-compose.yml, go.mod |
| Cloud native / infrastructure | 225 | docker/evaluation/README.md, AGENTS.md, configs/README.md |
| AI agent / orchestration | 149 | AGENTS.md, CLAUDE.md, go.mod |
| Observability / evaluation | 131 | docker/evaluation/evalscope/README.md, docker/evaluation/README.md, AGENTS.md |
| Data / ML platform | 113 | docker/evaluation/evalscope/README.md, AGENTS.md, configs/README.md |
| RAG / retrieval / knowledge | 110 | docker/inference/README.md, docs/error_codes_en.md, aigateway/handler/response_writer_wrapper_embedding_test.go |
| MCP / agent interoperability | 68 | CLAUDE.md, docker/spaces/templates/mcp_server/requirements.txt, go.mod |
| Local LLM / inference | 52 | configs/README.md, docker/inference/README.md, docker/spaces/base_images/model_chatui/README.md |
| Security / supply chain | 48 | go.mod, component/mcp_scanner_test.go, docs/error_codes_en.md |
| Developer tools / DX | 25 | docker-compose.yml, go.mod, component/mcp_server_test.go |
| Coding agent / software automation | 1 | component/prompt_test.go |
| Frontend / app framework | 1 | docker/finetune/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Python, Go, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2685 |
| manifests | 27 |
| docs | 37 |
| tests | 433 |
| ci/ops | 59 |
| spec artifacts | 4 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | The API token should be at least 128 characters long, and HTTP requests to csghub-server require the API token to be sent as a Bearer token for authentication. | Key Features： / Demo / Quick Start / The API token should be at least 128 characters long, and HTTP requests to csghub-server require the API token to be sent as a Bearer token for authentication. / Start CSGHub Server Services Locally / Technical Architecture / Extensible and customizable / Roadmap / License / Contributing | English README en.md ∙ 简体中文 README cn.md ∙ 日本語 README ja.md CSGHub Server is a part of the open source and reliable large model assets management platform CSGHub https //github.com/OpenCSGs/CSGHub/ . It focuses on management of models、datasets and other LLM assets through REST API。 Key Features： Creation and Management of users and orgnizations Auto tagging of model and dataset labels Search for users, organizations, models, and data Online preview of dataset files, like .parquet file Content moderation for both text and image Download of individual files, including LFS files Tracking of model and dataset activity data, such as downloads and likes volume Demo In order to help users to quickl |


## Key Files

### Manifests

- docker/evaluation/evalscope/README.md
- docker/evaluation/README.md
- AGENTS.md
- configs/README.md
- docker/README.md
- moderation/_api_test/README.md
- README.md
- common/config/README.md
- docker/finetune/README.md
- docker/inference/fishaudio/README.md
- docker/inference/README.md
- docker/notebook/README.md
- docker/spaces/base_images/model_chatui/README.md
- docker/spaces/builder/base/README.md
- docker/spaces/README.md
- CLAUDE.md
- docker/spaces/templates/mcp_deploy/requirements.txt
- docker/spaces/templates/mcp_server/requirements.txt
- builder/instrumentation/compose-example/docker-compose.yaml
- docker-compose.yml


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- docker/spaces/templates/mcp_deploy/requirements.txt
- docker/spaces/templates/mcp_server/requirements.txt


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| builder | 1042 |
| _mocks | 305 |
| common | 254 |
| component | 188 |
| api | 179 |
| docker | 160 |
| aigateway | 154 |
| notification | 73 |
| cmd | 62 |
| runner | 52 |
| user | 40 |
| configs | 32 |
| moderation | 28 |
| accounting | 22 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 1848 |
| .sql | 461 |
| .json | 126 |
| .py | 41 |
| .sh | 40 |
| .md | 37 |
| .tpl | 25 |
| [no-ext] | 13 |
| .parquet | 11 |
| .yaml | 10 |
| .yml | 8 |
| .conf | 5 |
| .txt | 5 |
| .jinja | 4 |
| .0 | 2 |
| .0-base | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
