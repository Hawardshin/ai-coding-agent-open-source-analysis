# liaotxcn/Weave Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

A highly efficient, secure, and stable application development platform with excellent performance, easy scalability, and deep integration of AI capabilities such as LLM, AI Chat, RAG, and Agents.高效、安全、稳定的服务研发平台，具备良好性能，同时易扩展，深度集成LLM、AIChat、RAG、Agent等AI能力

## 요약

- 조사 단위: `sources/liaotxcn__Weave` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 180 files, 73 directories, depth score 114, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=services/aichat/internal/tool/mcp/weather_mcp_tool.go, services/aichat/internal/tool/mcp/pool/mcp_pool.go이고, 의존성 단서는 openai, mcp, ollama, llama, faiss, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | liaotxcn/Weave |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 364 |
| Forks | 27 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/liaotxcn__Weave](../../../../sources/liaotxcn__Weave) |
| Existing report | [reports/global-trending/repositories/liaotxcn__Weave.md](../../../global-trending/repositories/liaotxcn__Weave.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 180 / 73 |
| Max observed depth | 7 |
| Top directories | .github, config, controllers, docs, middleware, models, pkg, plugins, routers, services, test, tools, utils, web |
| Top extensions | .go: 116, .js: 11, .vue: 10, .css: 7, .md: 7, .yml: 4, (none): 4, .example: 3, .html: 3, .json: 3, .yaml: 3, .conf: 2 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| services/aichat | services workspace | 17 |
| services/rag | services workspace | 8 |
| docs | documentation surface | 6 |
| web | source boundary | 6 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| controllers | top-level component | 1 |
| middleware | top-level component | 1 |
| models | top-level component | 1 |
| pkg | top-level component | 1 |
| plugins | top-level component | 1 |
| routers | top-level component | 1 |
| services | top-level component | 1 |
| test | validation surface | 1 |
| tools | top-level component | 1 |
| utils | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | all | make all |
| build | Makefile | build | make build |
| test | Makefile | test | make test |
| utility | Makefile | run | make run |
| utility | Makefile | clean | make clean |
| utility | Makefile | install | make install |
| utility | Makefile | update | make update |
| quality | Makefile | fmt | make fmt |
| quality | Makefile | lint | make lint |
| serve-dev | Makefile | watch | make watch |
| utility | Makefile | help | make help |
| utility | Makefile | .PHONY | make .PHONY |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | faiss |
| modelRuntime | ollama, llama |
| webRuntime | none |
| developerSurface | none |
| observability | opentelemetry, prometheus |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [services/aichat/internal/tool/mcp/weather_mcp_tool.go](../../../../sources/liaotxcn__Weave/services/aichat/internal/tool/mcp/weather_mcp_tool.go) | mcp signal |
| mcp | [services/aichat/internal/tool/mcp/pool/mcp_pool.go](../../../../sources/liaotxcn__Weave/services/aichat/internal/tool/mcp/pool/mcp_pool.go) | mcp signal |
| agentRuntime | [tools/plugin_scaffold.go](../../../../sources/liaotxcn__Weave/tools/plugin_scaffold.go) | agentRuntime signal |
| agentRuntime | [test/controllers/tool_controller_test.go](../../../../sources/liaotxcn__Weave/test/controllers/tool_controller_test.go) | agentRuntime signal |
| agentRuntime | [services/aichat/internal/tool/custom.go](../../../../sources/liaotxcn__Weave/services/aichat/internal/tool/custom.go) | agentRuntime signal |
| agentRuntime | [services/aichat/internal/tool/tool_health.go](../../../../sources/liaotxcn__Weave/services/aichat/internal/tool/tool_health.go) | agentRuntime signal |
| entrypoints | [main.go](../../../../sources/liaotxcn__Weave/main.go) | entrypoints signal |
| entrypoints | [web/src/App.vue](../../../../sources/liaotxcn__Weave/web/src/App.vue) | entrypoints signal |
| entrypoints | [web/src/main.js](../../../../sources/liaotxcn__Weave/web/src/main.js) | entrypoints signal |
| entrypoints | [services/rag/cmd/main.go](../../../../sources/liaotxcn__Weave/services/rag/cmd/main.go) | entrypoints signal |
| config | [go.mod](../../../../sources/liaotxcn__Weave/go.mod) | config signal |
| config | [Makefile](../../../../sources/liaotxcn__Weave/Makefile) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 6 | [main.go](../../../../sources/liaotxcn__Weave/main.go)<br>[web/src/App.vue](../../../../sources/liaotxcn__Weave/web/src/App.vue)<br>[web/src/main.js](../../../../sources/liaotxcn__Weave/web/src/main.js)<br>[services/rag/cmd/main.go](../../../../sources/liaotxcn__Weave/services/rag/cmd/main.go)<br>[services/aichat/cmd/main.go](../../../../sources/liaotxcn__Weave/services/aichat/cmd/main.go)<br>[pkg/migrate/main.go](../../../../sources/liaotxcn__Weave/pkg/migrate/main.go) |
| agentRuntime | 12 | [tools/plugin_scaffold.go](../../../../sources/liaotxcn__Weave/tools/plugin_scaffold.go)<br>[test/controllers/tool_controller_test.go](../../../../sources/liaotxcn__Weave/test/controllers/tool_controller_test.go)<br>[services/aichat/internal/tool/custom.go](../../../../sources/liaotxcn__Weave/services/aichat/internal/tool/custom.go)<br>[services/aichat/internal/tool/tool_health.go](../../../../sources/liaotxcn__Weave/services/aichat/internal/tool/tool_health.go)<br>[services/aichat/internal/tool/mcp/weather_mcp_tool.go](../../../../sources/liaotxcn__Weave/services/aichat/internal/tool/mcp/weather_mcp_tool.go)<br>[services/aichat/internal/tool/mcp/pool/mcp_pool.go](../../../../sources/liaotxcn__Weave/services/aichat/internal/tool/mcp/pool/mcp_pool.go)<br>[services/aichat/internal/service/agent/agent_health.go](../../../../sources/liaotxcn__Weave/services/aichat/internal/service/agent/agent_health.go)<br>[services/aichat/internal/service/agent/agent_service_impl.go](../../../../sources/liaotxcn__Weave/services/aichat/internal/service/agent/agent_service_impl.go) |
| mcp | 2 | [services/aichat/internal/tool/mcp/weather_mcp_tool.go](../../../../sources/liaotxcn__Weave/services/aichat/internal/tool/mcp/weather_mcp_tool.go)<br>[services/aichat/internal/tool/mcp/pool/mcp_pool.go](../../../../sources/liaotxcn__Weave/services/aichat/internal/tool/mcp/pool/mcp_pool.go) |
| retrieval | 10 | [web/index.html](../../../../sources/liaotxcn__Weave/web/index.html)<br>[services/rag/internal/service/content_filter.go](../../../../sources/liaotxcn__Weave/services/rag/internal/service/content_filter.go)<br>[services/rag/internal/service/document_loader.go](../../../../sources/liaotxcn__Weave/services/rag/internal/service/document_loader.go)<br>[services/rag/internal/service/matching_strategies.go](../../../../sources/liaotxcn__Weave/services/rag/internal/service/matching_strategies.go)<br>[services/rag/internal/service/rag_matcher.go](../../../../sources/liaotxcn__Weave/services/rag/internal/service/rag_matcher.go)<br>[services/rag/internal/service/rag_service.go](../../../../sources/liaotxcn__Weave/services/rag/internal/service/rag_service.go)<br>[services/rag/internal/cache/redis.go](../../../../sources/liaotxcn__Weave/services/rag/internal/cache/redis.go)<br>[services/rag/cmd/main.go](../../../../sources/liaotxcn__Weave/services/rag/cmd/main.go) |
| spec | 0 | not obvious |
| eval | 21 | [test/utils/auth_test.go](../../../../sources/liaotxcn__Weave/test/utils/auth_test.go)<br>[test/routers/router_test.go](../../../../sources/liaotxcn__Weave/test/routers/router_test.go)<br>[test/plugins/plugin_core_test.go](../../../../sources/liaotxcn__Weave/test/plugins/plugin_core_test.go)<br>[test/pkg/database_test.go](../../../../sources/liaotxcn__Weave/test/pkg/database_test.go)<br>[test/models/audit_log_test.go](../../../../sources/liaotxcn__Weave/test/models/audit_log_test.go)<br>[test/models/user_test.go](../../../../sources/liaotxcn__Weave/test/models/user_test.go)<br>[test/middleware/auth_middleware_test.go](../../../../sources/liaotxcn__Weave/test/middleware/auth_middleware_test.go)<br>[test/middleware/rate_limiter_test.go](../../../../sources/liaotxcn__Weave/test/middleware/rate_limiter_test.go) |
| security | 13 | [web/src/services/auth.js](../../../../sources/liaotxcn__Weave/web/src/services/auth.js)<br>[utils/auth.go](../../../../sources/liaotxcn__Weave/utils/auth.go)<br>[test/utils/auth_test.go](../../../../sources/liaotxcn__Weave/test/utils/auth_test.go)<br>[test/models/audit_log_test.go](../../../../sources/liaotxcn__Weave/test/models/audit_log_test.go)<br>[test/middleware/auth_middleware_test.go](../../../../sources/liaotxcn__Weave/test/middleware/auth_middleware_test.go)<br>[test/controllers/audit_controller_test.go](../../../../sources/liaotxcn__Weave/test/controllers/audit_controller_test.go)<br>[services/aichat/pkg/security.go](../../../../sources/liaotxcn__Weave/services/aichat/pkg/security.go)<br>[services/aichat/internal/security/image_checker.go](../../../../sources/liaotxcn__Weave/services/aichat/internal/security/image_checker.go) |
| ci | 3 | [.github/workflows/build.yml](../../../../sources/liaotxcn__Weave/.github/workflows/build.yml)<br>[.github/workflows/ci-cd.yml](../../../../sources/liaotxcn__Weave/.github/workflows/ci-cd.yml)<br>[.github/workflows/test.yml](../../../../sources/liaotxcn__Weave/.github/workflows/test.yml) |
| container | 2 | [docker-compose.yaml](../../../../sources/liaotxcn__Weave/docker-compose.yaml)<br>[Dockerfile](../../../../sources/liaotxcn__Weave/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 7 | [README.md](../../../../sources/liaotxcn__Weave/README.md)<br>[README.zh-CN.md](../../../../sources/liaotxcn__Weave/README.zh-CN.md)<br>[docs/API.md](../../../../sources/liaotxcn__Weave/docs/API.md)<br>[docs/DATABASE_MIGRATION.md](../../../../sources/liaotxcn__Weave/docs/DATABASE_MIGRATION.md)<br>[docs/GRAFANA_MONITORING_GUIDE.md](../../../../sources/liaotxcn__Weave/docs/GRAFANA_MONITORING_GUIDE.md)<br>[docs/PLUGIN_DEVELOPMENT_GUIDE.md](../../../../sources/liaotxcn__Weave/docs/PLUGIN_DEVELOPMENT_GUIDE.md)<br>[docs/PLUGIN_SCAFFOLD_USAGE.md](../../../../sources/liaotxcn__Weave/docs/PLUGIN_SCAFFOLD_USAGE.md) |
| config | 3 | [go.mod](../../../../sources/liaotxcn__Weave/go.mod)<br>[Makefile](../../../../sources/liaotxcn__Weave/Makefile)<br>[web/package.json](../../../../sources/liaotxcn__Weave/web/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 21 | [test/utils/auth_test.go](../../../../sources/liaotxcn__Weave/test/utils/auth_test.go)<br>[test/routers/router_test.go](../../../../sources/liaotxcn__Weave/test/routers/router_test.go)<br>[test/plugins/plugin_core_test.go](../../../../sources/liaotxcn__Weave/test/plugins/plugin_core_test.go)<br>[test/pkg/database_test.go](../../../../sources/liaotxcn__Weave/test/pkg/database_test.go)<br>[test/models/audit_log_test.go](../../../../sources/liaotxcn__Weave/test/models/audit_log_test.go)<br>[test/models/user_test.go](../../../../sources/liaotxcn__Weave/test/models/user_test.go) |
| CI workflows | 3 | [.github/workflows/build.yml](../../../../sources/liaotxcn__Weave/.github/workflows/build.yml)<br>[.github/workflows/ci-cd.yml](../../../../sources/liaotxcn__Weave/.github/workflows/ci-cd.yml)<br>[.github/workflows/test.yml](../../../../sources/liaotxcn__Weave/.github/workflows/test.yml) |
| Containers / deploy | 2 | [docker-compose.yaml](../../../../sources/liaotxcn__Weave/docker-compose.yaml)<br>[Dockerfile](../../../../sources/liaotxcn__Weave/Dockerfile) |
| Security / policy | 13 | [web/src/services/auth.js](../../../../sources/liaotxcn__Weave/web/src/services/auth.js)<br>[utils/auth.go](../../../../sources/liaotxcn__Weave/utils/auth.go)<br>[test/utils/auth_test.go](../../../../sources/liaotxcn__Weave/test/utils/auth_test.go)<br>[test/models/audit_log_test.go](../../../../sources/liaotxcn__Weave/test/models/audit_log_test.go)<br>[test/middleware/auth_middleware_test.go](../../../../sources/liaotxcn__Weave/test/middleware/auth_middleware_test.go)<br>[test/controllers/audit_controller_test.go](../../../../sources/liaotxcn__Weave/test/controllers/audit_controller_test.go) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `services/aichat/internal/tool/mcp/weather_mcp_tool.go`, `services/aichat/internal/tool/mcp/pool/mcp_pool.go`, `tools/plugin_scaffold.go`.
2. Trace execution through entrypoints: `main.go`, `web/src/App.vue`, `web/src/main.js`.
3. Map agent/tool runtime through: `tools/plugin_scaffold.go`, `test/controllers/tool_controller_test.go`, `services/aichat/internal/tool/custom.go`.
4. Inspect retrieval/memory/indexing through: `web/index.html`, `services/rag/internal/service/content_filter.go`, `services/rag/internal/service/document_loader.go`.
5. Verify behavior through test/eval files: `test/utils/auth_test.go`, `test/routers/router_test.go`, `test/plugins/plugin_core_test.go`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 A highly efficient, secure, and stable application development platform with excellent performance, easy scalability, an. 핵심 구조 신호는 Go, go.mod, Dockerfile, Makefile, README.md, openai이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
