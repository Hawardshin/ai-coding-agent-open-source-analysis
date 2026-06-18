# liaotxcn/Weave 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

A highly efficient, secure, and stable application development platform with excellent performance, easy scalability, and deep integration of AI capabilities such as LLM, AI Chat, RAG, and Agents.高效、安全、稳定的服务研发平台，具备良好性能，同时易扩展，深度集成LLM、AIChat、RAG、Agent等AI能力

## 요약

- 조사 단위: `sources/liaotxcn__Weave` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 180 files, 73 directories, depth score 108, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=services/aichat/internal/tool/mcp/weather_mcp_tool.go, services/aichat/internal/tool/mcp/pool/mcp_pool.go이고, 의존성 단서는 openai, mcp, ollama, llama, faiss, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | liaotxcn/Weave |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 364 |
| Forks | 27 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/liaotxcn__Weave](../../../../sources/liaotxcn__Weave) |
| 기존 보고서 | [reports/global-trending/repositories/liaotxcn__Weave.md](../../../global-trending/repositories/liaotxcn__Weave.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 180 / 73 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .github, config, controllers, docs, middleware, models, pkg, plugins, routers, services, test, tools, utils, web |
| 상위 확장자 | .go: 116, .js: 11, .vue: 10, .css: 7, .md: 7, .yml: 4, (none): 4, .example: 3, .html: 3, .json: 3, .yaml: 3, .conf: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | faiss |
| modelRuntime | ollama, llama |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | opentelemetry, prometheus |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 6 | [main.go](../../../../sources/liaotxcn__Weave/main.go)<br>[web/src/App.vue](../../../../sources/liaotxcn__Weave/web/src/App.vue)<br>[web/src/main.js](../../../../sources/liaotxcn__Weave/web/src/main.js)<br>[services/rag/cmd/main.go](../../../../sources/liaotxcn__Weave/services/rag/cmd/main.go)<br>[services/aichat/cmd/main.go](../../../../sources/liaotxcn__Weave/services/aichat/cmd/main.go)<br>[pkg/migrate/main.go](../../../../sources/liaotxcn__Weave/pkg/migrate/main.go) |
| agentRuntime | 12 | [tools/plugin_scaffold.go](../../../../sources/liaotxcn__Weave/tools/plugin_scaffold.go)<br>[test/controllers/tool_controller_test.go](../../../../sources/liaotxcn__Weave/test/controllers/tool_controller_test.go)<br>[services/aichat/internal/tool/custom.go](../../../../sources/liaotxcn__Weave/services/aichat/internal/tool/custom.go)<br>[services/aichat/internal/tool/tool_health.go](../../../../sources/liaotxcn__Weave/services/aichat/internal/tool/tool_health.go)<br>[services/aichat/internal/tool/mcp/weather_mcp_tool.go](../../../../sources/liaotxcn__Weave/services/aichat/internal/tool/mcp/weather_mcp_tool.go)<br>[services/aichat/internal/tool/mcp/pool/mcp_pool.go](../../../../sources/liaotxcn__Weave/services/aichat/internal/tool/mcp/pool/mcp_pool.go)<br>[services/aichat/internal/service/agent/agent_health.go](../../../../sources/liaotxcn__Weave/services/aichat/internal/service/agent/agent_health.go)<br>[services/aichat/internal/service/agent/agent_service_impl.go](../../../../sources/liaotxcn__Weave/services/aichat/internal/service/agent/agent_service_impl.go) |
| mcp | 2 | [services/aichat/internal/tool/mcp/weather_mcp_tool.go](../../../../sources/liaotxcn__Weave/services/aichat/internal/tool/mcp/weather_mcp_tool.go)<br>[services/aichat/internal/tool/mcp/pool/mcp_pool.go](../../../../sources/liaotxcn__Weave/services/aichat/internal/tool/mcp/pool/mcp_pool.go) |
| retrieval | 10 | [web/index.html](../../../../sources/liaotxcn__Weave/web/index.html)<br>[services/rag/internal/service/content_filter.go](../../../../sources/liaotxcn__Weave/services/rag/internal/service/content_filter.go)<br>[services/rag/internal/service/document_loader.go](../../../../sources/liaotxcn__Weave/services/rag/internal/service/document_loader.go)<br>[services/rag/internal/service/matching_strategies.go](../../../../sources/liaotxcn__Weave/services/rag/internal/service/matching_strategies.go)<br>[services/rag/internal/service/rag_matcher.go](../../../../sources/liaotxcn__Weave/services/rag/internal/service/rag_matcher.go)<br>[services/rag/internal/service/rag_service.go](../../../../sources/liaotxcn__Weave/services/rag/internal/service/rag_service.go)<br>[services/rag/internal/cache/redis.go](../../../../sources/liaotxcn__Weave/services/rag/internal/cache/redis.go)<br>[services/rag/cmd/main.go](../../../../sources/liaotxcn__Weave/services/rag/cmd/main.go) |
| spec | 0 | 명확하지 않음 |
| eval | 21 | [test/utils/auth_test.go](../../../../sources/liaotxcn__Weave/test/utils/auth_test.go)<br>[test/routers/router_test.go](../../../../sources/liaotxcn__Weave/test/routers/router_test.go)<br>[test/plugins/plugin_core_test.go](../../../../sources/liaotxcn__Weave/test/plugins/plugin_core_test.go)<br>[test/pkg/database_test.go](../../../../sources/liaotxcn__Weave/test/pkg/database_test.go)<br>[test/models/audit_log_test.go](../../../../sources/liaotxcn__Weave/test/models/audit_log_test.go)<br>[test/models/user_test.go](../../../../sources/liaotxcn__Weave/test/models/user_test.go)<br>[test/middleware/auth_middleware_test.go](../../../../sources/liaotxcn__Weave/test/middleware/auth_middleware_test.go)<br>[test/middleware/rate_limiter_test.go](../../../../sources/liaotxcn__Weave/test/middleware/rate_limiter_test.go) |
| security | 13 | [web/src/services/auth.js](../../../../sources/liaotxcn__Weave/web/src/services/auth.js)<br>[utils/auth.go](../../../../sources/liaotxcn__Weave/utils/auth.go)<br>[test/utils/auth_test.go](../../../../sources/liaotxcn__Weave/test/utils/auth_test.go)<br>[test/models/audit_log_test.go](../../../../sources/liaotxcn__Weave/test/models/audit_log_test.go)<br>[test/middleware/auth_middleware_test.go](../../../../sources/liaotxcn__Weave/test/middleware/auth_middleware_test.go)<br>[test/controllers/audit_controller_test.go](../../../../sources/liaotxcn__Weave/test/controllers/audit_controller_test.go)<br>[services/aichat/pkg/security.go](../../../../sources/liaotxcn__Weave/services/aichat/pkg/security.go)<br>[services/aichat/internal/security/image_checker.go](../../../../sources/liaotxcn__Weave/services/aichat/internal/security/image_checker.go) |
| ci | 3 | [.github/workflows/build.yml](../../../../sources/liaotxcn__Weave/.github/workflows/build.yml)<br>[.github/workflows/ci-cd.yml](../../../../sources/liaotxcn__Weave/.github/workflows/ci-cd.yml)<br>[.github/workflows/test.yml](../../../../sources/liaotxcn__Weave/.github/workflows/test.yml) |
| container | 2 | [docker-compose.yaml](../../../../sources/liaotxcn__Weave/docker-compose.yaml)<br>[Dockerfile](../../../../sources/liaotxcn__Weave/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 7 | [README.md](../../../../sources/liaotxcn__Weave/README.md)<br>[README.zh-CN.md](../../../../sources/liaotxcn__Weave/README.zh-CN.md)<br>[docs/API.md](../../../../sources/liaotxcn__Weave/docs/API.md)<br>[docs/DATABASE_MIGRATION.md](../../../../sources/liaotxcn__Weave/docs/DATABASE_MIGRATION.md)<br>[docs/GRAFANA_MONITORING_GUIDE.md](../../../../sources/liaotxcn__Weave/docs/GRAFANA_MONITORING_GUIDE.md)<br>[docs/PLUGIN_DEVELOPMENT_GUIDE.md](../../../../sources/liaotxcn__Weave/docs/PLUGIN_DEVELOPMENT_GUIDE.md)<br>[docs/PLUGIN_SCAFFOLD_USAGE.md](../../../../sources/liaotxcn__Weave/docs/PLUGIN_SCAFFOLD_USAGE.md) |
| config | 3 | [go.mod](../../../../sources/liaotxcn__Weave/go.mod)<br>[Makefile](../../../../sources/liaotxcn__Weave/Makefile)<br>[web/package.json](../../../../sources/liaotxcn__Weave/web/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 21 | [test/utils/auth_test.go](../../../../sources/liaotxcn__Weave/test/utils/auth_test.go)<br>[test/routers/router_test.go](../../../../sources/liaotxcn__Weave/test/routers/router_test.go)<br>[test/plugins/plugin_core_test.go](../../../../sources/liaotxcn__Weave/test/plugins/plugin_core_test.go)<br>[test/pkg/database_test.go](../../../../sources/liaotxcn__Weave/test/pkg/database_test.go)<br>[test/models/audit_log_test.go](../../../../sources/liaotxcn__Weave/test/models/audit_log_test.go)<br>[test/models/user_test.go](../../../../sources/liaotxcn__Weave/test/models/user_test.go) |
| CI workflow | 3 | [.github/workflows/build.yml](../../../../sources/liaotxcn__Weave/.github/workflows/build.yml)<br>[.github/workflows/ci-cd.yml](../../../../sources/liaotxcn__Weave/.github/workflows/ci-cd.yml)<br>[.github/workflows/test.yml](../../../../sources/liaotxcn__Weave/.github/workflows/test.yml) |
| 컨테이너/배포 | 2 | [docker-compose.yaml](../../../../sources/liaotxcn__Weave/docker-compose.yaml)<br>[Dockerfile](../../../../sources/liaotxcn__Weave/Dockerfile) |
| 보안/정책 | 13 | [web/src/services/auth.js](../../../../sources/liaotxcn__Weave/web/src/services/auth.js)<br>[utils/auth.go](../../../../sources/liaotxcn__Weave/utils/auth.go)<br>[test/utils/auth_test.go](../../../../sources/liaotxcn__Weave/test/utils/auth_test.go)<br>[test/models/audit_log_test.go](../../../../sources/liaotxcn__Weave/test/models/audit_log_test.go)<br>[test/middleware/auth_middleware_test.go](../../../../sources/liaotxcn__Weave/test/middleware/auth_middleware_test.go)<br>[test/controllers/audit_controller_test.go](../../../../sources/liaotxcn__Weave/test/controllers/audit_controller_test.go) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `services/aichat/internal/tool/mcp/weather_mcp_tool.go`, `services/aichat/internal/tool/mcp/pool/mcp_pool.go`, `tools/plugin_scaffold.go`.
2. entrypoint를 따라 실행 흐름 확인: `main.go`, `web/src/App.vue`, `web/src/main.js`.
3. agent/tool runtime 매핑: `tools/plugin_scaffold.go`, `test/controllers/tool_controller_test.go`, `services/aichat/internal/tool/custom.go`.
4. retrieval/memory/indexing 확인: `web/index.html`, `services/rag/internal/service/content_filter.go`, `services/rag/internal/service/document_loader.go`.
5. test/eval 파일로 동작 검증: `test/utils/auth_test.go`, `test/routers/router_test.go`, `test/plugins/plugin_core_test.go`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A highly efficient, secure, and stable application development platform with excellent performance, easy scalability, an. 핵심 구조 신호는 Go, go.mod, Dockerfile, Makefile, README.md, openai이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
