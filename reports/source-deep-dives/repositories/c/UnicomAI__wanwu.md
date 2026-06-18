# UnicomAI/wanwu 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

China Unicom's Yuanjing Wanwu Agent Platform is an enterprise-grade, multi-tenant AI agent development platform. It helps users build applications such as intelligent agents, workflows, and rag, and also supports model management. The platform features a developer-friendly license, and we welcome all developers to build upon the platform.

## 요약

- 조사 단위: `sources/UnicomAI__wanwu` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 4,127 files, 1,012 directories, depth score 118, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=web/src/views/tool/mcp/index.vue, web/src/views/tool/mcp/server/addDialog.vue, web/src/views/tool/mcp/server/detail.vue이고, 의존성 단서는 openai, mcp, ollama, llama, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | UnicomAI/wanwu |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 2539 |
| Forks | 112 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/UnicomAI__wanwu](../../../../sources/UnicomAI__wanwu) |
| 기존 보고서 | [reports/global-trending/repositories/UnicomAI__wanwu.md](../../../global-trending/repositories/UnicomAI__wanwu.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 4127 / 1012 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .agents, api, callback, cmd, configs, docs, internal, pkg, project, proto, rag, web |
| 상위 확장자 | .go: 993, .png: 961, .md: 475, .py: 247, .vue: 243, .bcmap: 168, .svg: 162, .xsd: 121, .ttf: 109, .properties: 108, .js: 103, .txt: 78 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | ollama, llama |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 25 | [web/src/App.vue](../../../../sources/UnicomAI__wanwu/web/src/App.vue)<br>[web/src/main.js](../../../../sources/UnicomAI__wanwu/web/src/main.js)<br>[pkg/wga-sandbox/internal/runner/eino/agent/main.go](../../../../sources/UnicomAI__wanwu/pkg/wga-sandbox/internal/runner/eino/agent/main.go)<br>[pkg/wga-sandbox/internal/runner/eino/agent/server.go](../../../../sources/UnicomAI__wanwu/pkg/wga-sandbox/internal/runner/eino/agent/server.go)<br>[pkg/openapi2skill/cmd/main.go](../../../../sources/UnicomAI__wanwu/pkg/openapi2skill/cmd/main.go)<br>[pkg/mcp2skill/cmd/main.go](../../../../sources/UnicomAI__wanwu/pkg/mcp2skill/cmd/main.go)<br>[internal/rag-service/server/grpc/server.go](../../../../sources/UnicomAI__wanwu/internal/rag-service/server/grpc/server.go)<br>[internal/operate-service/server/grpc/server.go](../../../../sources/UnicomAI__wanwu/internal/operate-service/server/grpc/server.go) |
| agentRuntime | 1086 | [web/src/views/tool/constants.js](../../../../sources/UnicomAI__wanwu/web/src/views/tool/constants.js)<br>[web/src/views/tool/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/index.vue)<br>[web/src/views/tool/tool/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/tool/index.vue)<br>[web/src/views/tool/tool/custom/addDialog.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/tool/custom/addDialog.vue)<br>[web/src/views/tool/tool/custom/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/tool/custom/index.vue)<br>[web/src/views/tool/tool/builtIn/detail.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/tool/builtIn/detail.vue)<br>[web/src/views/tool/tool/builtIn/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/tool/builtIn/index.vue)<br>[web/src/views/tool/prompt/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/prompt/index.vue) |
| mcp | 346 | [web/src/views/tool/mcp/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/mcp/index.vue)<br>[web/src/views/tool/mcp/server/addDialog.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/mcp/server/addDialog.vue)<br>[web/src/views/tool/mcp/server/detail.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/mcp/server/detail.vue)<br>[web/src/views/tool/mcp/server/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/mcp/server/index.vue)<br>[web/src/views/tool/mcp/server/toolDialog.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/mcp/server/toolDialog.vue)<br>[web/src/views/tool/mcp/integrate/addDialog.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/mcp/integrate/addDialog.vue)<br>[web/src/views/tool/mcp/integrate/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/mcp/integrate/index.vue)<br>[web/src/assets/imgs/card_create_icon_mcp.svg](../../../../sources/UnicomAI__wanwu/web/src/assets/imgs/card_create_icon_mcp.svg) |
| retrieval | 446 | [web/src/views/workflowRunNew/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/workflowRunNew/index.vue)<br>[web/src/views/workflowNew/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/workflowNew/index.vue)<br>[web/src/views/userCenter/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/userCenter/index.vue)<br>[web/src/views/userCenter/components/pwd/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/userCenter/components/pwd/index.vue)<br>[web/src/views/userCenter/components/info/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/userCenter/components/info/index.vue)<br>[web/src/views/tool/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/index.vue)<br>[web/src/views/tool/tool/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/tool/index.vue)<br>[web/src/views/tool/tool/custom/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/tool/tool/custom/index.vue) |
| spec | 96 | [rag/rag_open_source/rag_es_server_unify/requirements.txt](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/rag_es_server_unify/requirements.txt)<br>[rag/rag_open_source/rag_core/requirements.txt](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/rag_core/requirements.txt)<br>[rag/rag_open_source/rag_core/graph/requirements.txt](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/rag_core/graph/requirements.txt)<br>[pkg/wga/DESIGN.Human-In-The-Loop.md](../../../../sources/UnicomAI__wanwu/pkg/wga/DESIGN.Human-In-The-Loop.md)<br>[configs/microservice/bff-service/configs/agent-skills/minimax/pptx-generator/references/design-system.md](../../../../sources/UnicomAI__wanwu/configs/microservice/bff-service/configs/agent-skills/minimax/pptx-generator/references/design-system.md)<br>[configs/microservice/bff-service/configs/agent-skills/minimax/minimax-docx/references/design_good_bad_examples.md](../../../../sources/UnicomAI__wanwu/configs/microservice/bff-service/configs/agent-skills/minimax/minimax-docx/references/design_good_bad_examples.md)<br>[configs/microservice/bff-service/configs/agent-skills/minimax/minimax-docx/references/design_principles.md](../../../../sources/UnicomAI__wanwu/configs/microservice/bff-service/configs/agent-skills/minimax/minimax-docx/references/design_principles.md)<br>[configs/microservice/bff-service/configs/agent-skills/minimax/fullstack-dev/references/api-design.md](../../../../sources/UnicomAI__wanwu/configs/microservice/bff-service/configs/agent-skills/minimax/fullstack-dev/references/api-design.md) |
| eval | 33 | [rag/rag_open_source/test_api_server.sh](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/test_api_server.sh)<br>[rag/rag_open_source/test_excel_rag_answer.py](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/test_excel_rag_answer.py)<br>[rag/rag_open_source/test_search_api.py](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/test_search_api.py)<br>[rag/rag_open_source/rag_es_server_unify/utils/trace.py](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/rag_es_server_unify/utils/trace.py)<br>[rag/rag_open_source/rag_core/utils/trace_asgi.py](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/rag_core/utils/trace_asgi.py)<br>[rag/rag_open_source/rag_core/utils/trace.py](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/rag_core/utils/trace.py)<br>[rag/rag_open_source/rag_core/textsplitter/test_doc_splitter.py](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/rag_core/textsplitter/test_doc_splitter.py)<br>[pkg/trace-util/detach.go](../../../../sources/UnicomAI__wanwu/pkg/trace-util/detach.go) |
| security | 117 | [Dockerfile.wga-sandbox-base](../../../../sources/UnicomAI__wanwu/Dockerfile.wga-sandbox-base)<br>[web/src/views/permission/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/permission/index.vue)<br>[web/src/views/permission/user/batchAddDialog.vue](../../../../sources/UnicomAI__wanwu/web/src/views/permission/user/batchAddDialog.vue)<br>[web/src/views/permission/user/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/permission/user/index.vue)<br>[web/src/views/permission/statistics/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/permission/statistics/index.vue)<br>[web/src/views/permission/role/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/permission/role/index.vue)<br>[web/src/views/permission/org/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/permission/org/index.vue)<br>[web/src/views/permission/oauth/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/permission/oauth/index.vue) |
| ci | 0 | 명확하지 않음 |
| container | 13 | [docker-compose-develop.yaml](../../../../sources/UnicomAI__wanwu/docker-compose-develop.yaml)<br>[docker-compose.oceanbase.yaml](../../../../sources/UnicomAI__wanwu/docker-compose.oceanbase.yaml)<br>[docker-compose.ontology.yaml](../../../../sources/UnicomAI__wanwu/docker-compose.ontology.yaml)<br>[docker-compose.tidb.yaml](../../../../sources/UnicomAI__wanwu/docker-compose.tidb.yaml)<br>[docker-compose.yaml](../../../../sources/UnicomAI__wanwu/docker-compose.yaml)<br>[Dockerfile.backend](../../../../sources/UnicomAI__wanwu/Dockerfile.backend)<br>[Dockerfile.callback](../../../../sources/UnicomAI__wanwu/Dockerfile.callback)<br>[Dockerfile.callback-base](../../../../sources/UnicomAI__wanwu/Dockerfile.callback-base) |
| instruction | 0 | 명확하지 않음 |
| docs | 41 | [README_CN.md](../../../../sources/UnicomAI__wanwu/README_CN.md)<br>[README_繁體.md](../../../../sources/UnicomAI__wanwu/README_繁體.md)<br>[README.md](../../../../sources/UnicomAI__wanwu/README.md)<br>[web/README.md](../../../../sources/UnicomAI__wanwu/web/README.md)<br>[web/src/utils/README.md](../../../../sources/UnicomAI__wanwu/web/src/utils/README.md)<br>[rag/rag_open_source/README.md](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/README.md)<br>[rag/rag_open_source/rag_core/README.md](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/rag_core/README.md)<br>[pkg/wga-sandbox/README.md](../../../../sources/UnicomAI__wanwu/pkg/wga-sandbox/README.md) |
| config | 10 | [go.mod](../../../../sources/UnicomAI__wanwu/go.mod)<br>[Makefile](../../../../sources/UnicomAI__wanwu/Makefile)<br>[web/package.json](../../../../sources/UnicomAI__wanwu/web/package.json)<br>[web/pnpm-workspace.yaml](../../../../sources/UnicomAI__wanwu/web/pnpm-workspace.yaml)<br>[rag/rag_open_source/rag_es_server_unify/requirements.txt](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/rag_es_server_unify/requirements.txt)<br>[rag/rag_open_source/rag_core/requirements.txt](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/rag_core/requirements.txt)<br>[rag/rag_open_source/rag_core/graph/requirements.txt](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/rag_core/graph/requirements.txt)<br>[configs/microservice/bff-service/configs/agent-skills/anthropics/slack-gif-creator/requirements.txt](../../../../sources/UnicomAI__wanwu/configs/microservice/bff-service/configs/agent-skills/anthropics/slack-gif-creator/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 33 | [rag/rag_open_source/test_api_server.sh](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/test_api_server.sh)<br>[rag/rag_open_source/test_excel_rag_answer.py](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/test_excel_rag_answer.py)<br>[rag/rag_open_source/test_search_api.py](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/test_search_api.py)<br>[rag/rag_open_source/rag_es_server_unify/utils/trace.py](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/rag_es_server_unify/utils/trace.py)<br>[rag/rag_open_source/rag_core/utils/trace_asgi.py](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/rag_core/utils/trace_asgi.py)<br>[rag/rag_open_source/rag_core/utils/trace.py](../../../../sources/UnicomAI__wanwu/rag/rag_open_source/rag_core/utils/trace.py) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 13 | [docker-compose-develop.yaml](../../../../sources/UnicomAI__wanwu/docker-compose-develop.yaml)<br>[docker-compose.oceanbase.yaml](../../../../sources/UnicomAI__wanwu/docker-compose.oceanbase.yaml)<br>[docker-compose.ontology.yaml](../../../../sources/UnicomAI__wanwu/docker-compose.ontology.yaml)<br>[docker-compose.tidb.yaml](../../../../sources/UnicomAI__wanwu/docker-compose.tidb.yaml)<br>[docker-compose.yaml](../../../../sources/UnicomAI__wanwu/docker-compose.yaml)<br>[Dockerfile.backend](../../../../sources/UnicomAI__wanwu/Dockerfile.backend) |
| 보안/정책 | 117 | [Dockerfile.wga-sandbox-base](../../../../sources/UnicomAI__wanwu/Dockerfile.wga-sandbox-base)<br>[web/src/views/permission/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/permission/index.vue)<br>[web/src/views/permission/user/batchAddDialog.vue](../../../../sources/UnicomAI__wanwu/web/src/views/permission/user/batchAddDialog.vue)<br>[web/src/views/permission/user/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/permission/user/index.vue)<br>[web/src/views/permission/statistics/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/permission/statistics/index.vue)<br>[web/src/views/permission/role/index.vue](../../../../sources/UnicomAI__wanwu/web/src/views/permission/role/index.vue) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `web/src/views/tool/mcp/index.vue`, `web/src/views/tool/mcp/server/addDialog.vue`, `web/src/views/tool/mcp/server/detail.vue`.
2. entrypoint를 따라 실행 흐름 확인: `web/src/App.vue`, `web/src/main.js`, `pkg/wga-sandbox/internal/runner/eino/agent/main.go`.
3. agent/tool runtime 매핑: `web/src/views/tool/constants.js`, `web/src/views/tool/index.vue`, `web/src/views/tool/tool/index.vue`.
4. retrieval/memory/indexing 확인: `web/src/views/workflowRunNew/index.vue`, `web/src/views/workflowNew/index.vue`, `web/src/views/userCenter/index.vue`.
5. test/eval 파일로 동작 검증: `rag/rag_open_source/test_api_server.sh`, `rag/rag_open_source/test_excel_rag_answer.py`, `rag/rag_open_source/test_search_api.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 China Unicom's Yuanjing Wanwu Agent Platform is an enterprise grade, multi tenant AI agent development platform. It help. 핵심 구조 신호는 Go, go.mod, Makefile, README.md, LICENSE, openai이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
