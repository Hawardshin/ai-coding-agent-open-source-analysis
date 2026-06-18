# UnicomAI/wanwu Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

China Unicom's Yuanjing Wanwu Agent Platform is an enterprise-grade, multi-tenant AI agent development platform. It helps users build applications such as intelligent agents, workflows, and rag, and also supports model management. The platform features a developer-friendly license, and we welcome all developers to build upon the platform.

## 요약

- 조사 단위: `sources/UnicomAI__wanwu` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 4,127 files, 1,012 directories, depth score 124, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=web/src/views/tool/mcp/index.vue, web/src/views/tool/mcp/server/addDialog.vue, web/src/views/tool/mcp/server/detail.vue이고, 의존성 단서는 openai, mcp, ollama, llama, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | UnicomAI/wanwu |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 2539 |
| Forks | 112 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/UnicomAI__wanwu](../../../../sources/UnicomAI__wanwu) |
| Existing report | [reports/global-trending/repositories/UnicomAI__wanwu.md](../../../global-trending/repositories/UnicomAI__wanwu.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 4127 / 1012 |
| Max observed depth | 13 |
| Top directories | .agents, api, callback, cmd, configs, docs, internal, pkg, project, proto, rag, web |
| Top extensions | .go: 993, .png: 961, .md: 475, .py: 247, .vue: 243, .bcmap: 168, .svg: 162, .xsd: 121, .ttf: 109, .properties: 108, .js: 103, .txt: 78 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| web | source boundary | 122 |
| docs | documentation surface | 14 |
| api | source boundary | 1 |
| callback | top-level component | 1 |
| cmd | source boundary | 1 |
| cmd/agent-service | cmd workspace | 1 |
| cmd/app-service | cmd workspace | 1 |
| cmd/assistant-service | cmd workspace | 1 |
| cmd/bff-service | cmd workspace | 1 |
| cmd/iam-service | cmd workspace | 1 |
| cmd/knowledge-service | cmd workspace | 1 |
| cmd/mcp-service | cmd workspace | 1 |
| cmd/model-service | cmd workspace | 1 |
| cmd/operate-service | cmd workspace | 1 |
| cmd/rag-service | cmd workspace | 1 |
| cmd/tidb-setup | cmd workspace | 1 |
| configs | top-level component | 1 |
| internal | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | Makefile | build-tidb-setup-amd64 | make build-tidb-setup-amd64 |
| build | Makefile | build-tidb-setup-arm64 | make build-tidb-setup-arm64 |
| build | Makefile | build-bff-amd64 | make build-bff-amd64 |
| build | Makefile | build-bff-arm64 | make build-bff-arm64 |
| build | Makefile | build-iam-amd64 | make build-iam-amd64 |
| build | Makefile | build-iam-arm64 | make build-iam-arm64 |
| build | Makefile | build-model-amd64 | make build-model-amd64 |
| build | Makefile | build-model-arm64 | make build-model-arm64 |
| build | Makefile | build-mcp-amd64 | make build-mcp-amd64 |
| build | Makefile | build-mcp-arm64 | make build-mcp-arm64 |
| build | Makefile | build-knowledge-amd64 | make build-knowledge-amd64 |
| build | Makefile | build-knowledge-arm64 | make build-knowledge-arm64 |
| build | Makefile | build-rag-amd64 | make build-rag-amd64 |
| build | Makefile | build-rag-arm64 | make build-rag-arm64 |
| build | Makefile | build-app-amd64 | make build-app-amd64 |
| build | Makefile | build-app-arm64 | make build-app-arm64 |
| build | Makefile | build-operate-amd64 | make build-operate-amd64 |
| build | Makefile | build-operate-arm64 | make build-operate-arm64 |
| build | Makefile | build-assistant-amd64 | make build-assistant-amd64 |
| build | Makefile | build-assistant-arm64 | make build-assistant-arm64 |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | ollama, llama |
| webRuntime | none |
| developerSurface | none |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [web/src/views/tool/mcp/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/mcp/index.vue) | mcp signal |
| mcp | [web/src/views/tool/mcp/server/addDialog.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/mcp/server/addDialog.vue) | mcp signal |
| mcp | [web/src/views/tool/mcp/server/detail.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/mcp/server/detail.vue) | mcp signal |
| mcp | [web/src/views/tool/mcp/server/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/mcp/server/index.vue) | mcp signal |
| agentRuntime | [web/src/views/tool/constants.js](../../../../sources/UnicomAI__wanwu/web/src/views/tool/constants.js) | agentRuntime signal |
| agentRuntime | [web/src/views/tool/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/index.vue) | agentRuntime signal |
| agentRuntime | [web/src/views/tool/tool/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/tool/index.vue) | agentRuntime signal |
| agentRuntime | [web/src/views/tool/tool/custom/addDialog.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/tool/custom/addDialog.vue) | agentRuntime signal |
| entrypoints | [web/src/App.vue](../../../../sources/UnicomAI__wanwu/web/src/App.vue) | entrypoints signal |
| entrypoints | [web/src/main.js](../../../../sources/UnicomAI__wanwu/web/src/main.js) | entrypoints signal |
| entrypoints | [pkg/wga-sandbox/internal/runner/eino/agent/main.go](../../../../sources/UnicomAI__wanwu/pkg/wga-sandbox/internal/runner/eino/agent/main.go) | entrypoints signal |
| entrypoints | [pkg/wga-sandbox/internal/runner/eino/agent/server.go](../../../../sources/UnicomAI__wanwu/pkg/wga-sandbox/internal/runner/eino/agent/server.go) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 25 | [web/src/App.vue](../../../../sources/UnicomAI__wanwu/web/src/App.vue)<br>[web/src/main.js](../../../../sources/UnicomAI__wanwu/web/src/main.js)<br>[pkg/wga-sandbox/internal/runner/eino/agent/main.go](../../../../sources/UnicomAI__wanwu/pkg/wga-sandbox/internal/runner/eino/agent/main.go)<br>[pkg/wga-sandbox/internal/runner/eino/agent/server.go](../../../../sources/UnicomAI__wanwu/pkg/wga-sandbox/internal/runner/eino/agent/server.go)<br>[pkg/openapi2skill/cmd/main.go](../../../../sources/UnicomAI__wanwu/pkg/openapi2skill/cmd/main.go)<br>[pkg/mcp2skill/cmd/main.go](../../../../sources/UnicomAI__wanwu/pkg/mcp2skill/cmd/main.go)<br>[internal/rag-service/server/grpc/server.go](../../../../sources/UnicomAI__wanwu/internal/rag-service/server/grpc/server.go)<br>[internal/operate-service/server/grpc/server.go](../../../../sources/UnicomAI__wanwu/internal/operate-service/server/grpc/server.go) |
| agentRuntime | 1086 | [web/src/views/tool/constants.js](../../../../sources/UnicomAI__wanwu/web/src/views/tool/constants.js)<br>[web/src/views/tool/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/index.vue)<br>[web/src/views/tool/tool/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/tool/index.vue)<br>[web/src/views/tool/tool/custom/addDialog.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/tool/custom/addDialog.vue)<br>[web/src/views/tool/tool/custom/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/tool/custom/index.vue)<br>[web/src/views/tool/tool/builtIn/detail.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/tool/builtIn/detail.vue)<br>[web/src/views/tool/tool/builtIn/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/tool/builtIn/index.vue)<br>[web/src/views/tool/prompt/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/prompt/index.vue) |
| mcp | 346 | [web/src/views/tool/mcp/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/mcp/index.vue)<br>[web/src/views/tool/mcp/server/addDialog.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/mcp/server/addDialog.vue)<br>[web/src/views/tool/mcp/server/detail.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/mcp/server/detail.vue)<br>[web/src/views/tool/mcp/server/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/mcp/server/index.vue)<br>[web/src/views/tool/mcp/server/toolDialog.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/mcp/server/toolDialog.vue)<br>[web/src/views/tool/mcp/integrate/addDialog.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/mcp/integrate/addDialog.vue)<br>[web/src/views/tool/mcp/integrate/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/mcp/integrate/index.vue)<br>[web/src/assets/imgs/card_create_icon_mcp.svg](../../../../sources/UnicomAI__wanwu/web/src/assets/imgs/card_create_icon_mcp.svg) |
| retrieval | 446 | [web/src/views/workflowRunNew/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/workflowRunNew/index.vue)<br>[web/src/views/workflowNew/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/workflowNew/index.vue)<br>[web/src/views/userCenter/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/userCenter/index.vue)<br>[web/src/views/userCenter/components/pwd/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/userCenter/components/pwd/index.vue)<br>[web/src/views/userCenter/components/info/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/userCenter/components/info/index.vue)<br>[web/src/views/tool/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/index.vue)<br>[web/src/views/tool/tool/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/tool/index.vue)<br>[web/src/views/tool/tool/custom/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/tool/custom/index.vue) |
| spec | 96 | [rag/rag_open_source/rag_es_server_unify/requirements.txt](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/rag_es_server_unify/requirements.txt)<br>[rag/rag_open_source/rag_core/requirements.txt](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/rag_core/requirements.txt)<br>[rag/rag_open_source/rag_core/graph/requirements.txt](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/rag_core/graph/requirements.txt)<br>[pkg/wga/DESIGN.Human-In-The-Loop.md](../../../../sources/UnicomAI__wanwu/pkg/wga/DESIGN.Human-In-The-Loop.md)<br>[configs/microservice/bff-service/configs/agent-skills/minimax/pptx-generator/references/design-system.md](../../../../sources/UnicomAI__wanwu/configs/microservice/bff-service/configs/agent-skills/minimax/pptx-generator/references/design-system.md)<br>[configs/microservice/bff-service/configs/agent-skills/minimax/minimax-docx/references/design_good_bad_examples.md](../../../../sources/UnicomAI__wanwu/configs/microservice/bff-service/configs/agent-skills/minimax/minimax-docx/references/design_good_bad_examples.md)<br>[configs/microservice/bff-service/configs/agent-skills/minimax/minimax-docx/references/design_principles.md](../../../../sources/UnicomAI__wanwu/configs/microservice/bff-service/configs/agent-skills/minimax/minimax-docx/references/design_principles.md)<br>[configs/microservice/bff-service/configs/agent-skills/minimax/fullstack-dev/references/api-design.md](../../../../sources/UnicomAI__wanwu/configs/microservice/bff-service/configs/agent-skills/minimax/fullstack-dev/references/api-design.md) |
| eval | 33 | [rag/rag_open_source/test_api_server.sh](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/test_api_server.sh)<br>[rag/rag_open_source/test_excel_rag_answer.py](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/test_excel_rag_answer.py)<br>[rag/rag_open_source/test_search_api.py](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/test_search_api.py)<br>[rag/rag_open_source/rag_es_server_unify/utils/trace.py](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/rag_es_server_unify/utils/trace.py)<br>[rag/rag_open_source/rag_core/utils/trace_asgi.py](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/rag_core/utils/trace_asgi.py)<br>[rag/rag_open_source/rag_core/utils/trace.py](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/rag_core/utils/trace.py)<br>[rag/rag_open_source/rag_core/textsplitter/test_doc_splitter.py](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/rag_core/textsplitter/test_doc_splitter.py)<br>[pkg/trace-util/detach.go](../../../../sources/UnicomAI__wanwu/pkg/trace-util/detach.go) |
| security | 117 | [Dockerfile.wga-sandbox-base](../../../../sources/UnicomAI__wanwu/Dockerfile.wga-sandbox-base)<br>[web/src/views/permission/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/permission/index.vue)<br>[web/src/views/permission/user/batchAddDialog.vue](../../../../sources/UnicomAI__wanwu/web/src/views/permission/user/batchAddDialog.vue)<br>[web/src/views/permission/user/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/permission/user/index.vue)<br>[web/src/views/permission/statistics/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/permission/statistics/index.vue)<br>[web/src/views/permission/role/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/permission/role/index.vue)<br>[web/src/views/permission/org/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/permission/org/index.vue)<br>[web/src/views/permission/oauth/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/permission/oauth/index.vue) |
| ci | 0 | not obvious |
| container | 13 | [docker-compose-develop.yaml](../../../../sources/UnicomAI__wanwu/docker-compose-develop.yaml)<br>[docker-compose.oceanbase.yaml](../../../../sources/UnicomAI__wanwu/docker-compose.oceanbase.yaml)<br>[docker-compose.ontology.yaml](../../../../sources/UnicomAI__wanwu/docker-compose.ontology.yaml)<br>[docker-compose.tidb.yaml](../../../../sources/UnicomAI__wanwu/docker-compose.tidb.yaml)<br>[docker-compose.yaml](../../../../sources/UnicomAI__wanwu/docker-compose.yaml)<br>[Dockerfile.backend](../../../../sources/UnicomAI__wanwu/Dockerfile.backend)<br>[Dockerfile.callback](../../../../sources/UnicomAI__wanwu/Dockerfile.callback)<br>[Dockerfile.callback-base](../../../../sources/UnicomAI__wanwu/Dockerfile.callback-base) |
| instruction | 0 | not obvious |
| docs | 41 | [README_CN.md](../../../../sources/UnicomAI__wanwu/README_CN.md)<br>[README_繁體.md](../../../../sources/UnicomAI__wanwu/README_繁體.md)<br>[README.md](../../../../sources/UnicomAI__wanwu/README.md)<br>[web/README.md](../../../../sources/UnicomAI__wanwu/web/README.md)<br>[web/src/utils/README.md](../../../../sources/UnicomAI__wanwu/web/src/utils/README.md)<br>[rag/rag_open_source/README.md](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/README.md)<br>[rag/rag_open_source/rag_core/README.md](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/rag_core/README.md)<br>[pkg/wga-sandbox/README.md](../../../../sources/UnicomAI__wanwu/pkg/wga-sandbox/README.md) |
| config | 10 | [go.mod](../../../../sources/UnicomAI__wanwu/go.mod)<br>[Makefile](../../../../sources/UnicomAI__wanwu/Makefile)<br>[web/package.json](../../../../sources/UnicomAI__wanwu/web/package.json)<br>[web/pnpm-workspace.yaml](../../../../sources/UnicomAI__wanwu/web/pnpm-workspace.yaml)<br>[rag/rag_open_source/rag_es_server_unify/requirements.txt](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/rag_es_server_unify/requirements.txt)<br>[rag/rag_open_source/rag_core/requirements.txt](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/rag_core/requirements.txt)<br>[rag/rag_open_source/rag_core/graph/requirements.txt](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/rag_core/graph/requirements.txt)<br>[configs/microservice/bff-service/configs/agent-skills/anthropics/slack-gif-creator/requirements.txt](../../../../sources/UnicomAI__wanwu/configs/microservice/bff-service/configs/agent-skills/anthropics/slack-gif-creator/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 33 | [rag/rag_open_source/test_api_server.sh](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/test_api_server.sh)<br>[rag/rag_open_source/test_excel_rag_answer.py](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/test_excel_rag_answer.py)<br>[rag/rag_open_source/test_search_api.py](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/test_search_api.py)<br>[rag/rag_open_source/rag_es_server_unify/utils/trace.py](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/rag_es_server_unify/utils/trace.py)<br>[rag/rag_open_source/rag_core/utils/trace_asgi.py](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/rag_core/utils/trace_asgi.py)<br>[rag/rag_open_source/rag_core/utils/trace.py](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/rag_core/utils/trace.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 13 | [docker-compose-develop.yaml](../../../../sources/UnicomAI__wanwu/docker-compose-develop.yaml)<br>[docker-compose.oceanbase.yaml](../../../../sources/UnicomAI__wanwu/docker-compose.oceanbase.yaml)<br>[docker-compose.ontology.yaml](../../../../sources/UnicomAI__wanwu/docker-compose.ontology.yaml)<br>[docker-compose.tidb.yaml](../../../../sources/UnicomAI__wanwu/docker-compose.tidb.yaml)<br>[docker-compose.yaml](../../../../sources/UnicomAI__wanwu/docker-compose.yaml)<br>[Dockerfile.backend](../../../../sources/UnicomAI__wanwu/Dockerfile.backend) |
| Security / policy | 117 | [Dockerfile.wga-sandbox-base](../../../../sources/UnicomAI__wanwu/Dockerfile.wga-sandbox-base)<br>[web/src/views/permission/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/permission/index.vue)<br>[web/src/views/permission/user/batchAddDialog.vue](../../../../sources/UnicomAI__wanwu/web/src/views/permission/user/batchAddDialog.vue)<br>[web/src/views/permission/user/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/permission/user/index.vue)<br>[web/src/views/permission/statistics/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/permission/statistics/index.vue)<br>[web/src/views/permission/role/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/permission/role/index.vue) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `web/src/views/tool/mcp/index.vue`, `web/src/views/tool/mcp/server/addDialog.vue`, `web/src/views/tool/mcp/server/detail.vue`.
2. Trace execution through entrypoints: `web/src/App.vue`, `web/src/main.js`, `pkg/wga-sandbox/internal/runner/eino/agent/main.go`.
3. Map agent/tool runtime through: `web/src/views/tool/constants.js`, `web/src/views/tool/index.vue`, `web/src/views/tool/tool/index.vue`.
4. Inspect retrieval/memory/indexing through: `web/src/views/workflowRunNew/index.vue`, `web/src/views/workflowNew/index.vue`, `web/src/views/userCenter/index.vue`.
5. Verify behavior through test/eval files: `rag/rag_open_source/test_api_server.sh`, `rag/rag_open_source/test_excel_rag_answer.py`, `rag/rag_open_source/test_search_api.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 China Unicom's Yuanjing Wanwu Agent Platform is an enterprise grade, multi tenant AI agent development platform. It help. 핵심 구조 신호는 Go, go.mod, Makefile, README.md, LICENSE, openai이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
