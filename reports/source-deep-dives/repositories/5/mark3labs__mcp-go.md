# mark3labs/mcp-go 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

A Go implementation of the Model Context Protocol (MCP), enabling seamless integration between LLM applications and external data sources and tools.

## 요약

- 조사 단위: `sources/mark3labs__mcp-go` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 265 files, 45 directories, depth score 106, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp/base_metadata_test.go, mcp/consts.go, mcp/content_benchmark_test.go이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | mark3labs/mcp-go |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 8809 |
| Forks | 844 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/mark3labs__mcp-go](../../../../sources/mark3labs__mcp-go) |
| 기존 보고서 | [reports/global-trending/repositories/mark3labs__mcp-go.md](../../../global-trending/repositories/mark3labs__mcp-go.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 265 / 45 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, .kit, client, e2e, examples, mcp, mcptest, otel, server, testdata, tracing, www |
| 상위 확장자 | .go: 188, .md: 30, .mdx: 25, .yml: 6, (none): 3, .json: 2, .mod: 2, .png: 2, .sum: 2, .tmpl: 2, .css: 1, .lock: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| server | source boundary | 45 |
| client | source boundary | 10 |
| examples/oauth_client | examples workspace | 4 |
| examples/inprocess_sampling | examples workspace | 2 |
| examples/sampling_client | examples workspace | 2 |
| examples/sampling_http_client | examples workspace | 2 |
| examples/sampling_http_server | examples workspace | 2 |
| examples/sampling_server | examples workspace | 2 |
| examples/structured_input_and_output | examples workspace | 2 |
| .github | ci surface | 1 |
| e2e | validation surface | 1 |
| examples | top-level component | 1 |
| examples/custom_context | examples workspace | 1 |
| examples/dynamic_path | examples workspace | 1 |
| examples/elicitation | examples workspace | 1 |
| examples/everything | examples workspace | 1 |
| examples/filesystem_stdio_client | examples workspace | 1 |
| examples/in_process | examples workspace | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [mcp/base_metadata_test.go](../../../../sources/mark3labs__mcp-go/mcp/base_metadata_test.go) | mcp signal |
| mcp | [mcp/consts.go](../../../../sources/mark3labs__mcp-go/mcp/consts.go) | mcp signal |
| mcp | [mcp/content_benchmark_test.go](../../../../sources/mark3labs__mcp-go/mcp/content_benchmark_test.go) | mcp signal |
| mcp | [mcp/elicitation_test.go](../../../../sources/mark3labs__mcp-go/mcp/elicitation_test.go) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/mark3labs__mcp-go/AGENTS.md) | agentRuntime signal |
| agentRuntime | [www/docs/pages/servers/tools.mdx](../../../../sources/mark3labs__mcp-go/www/docs/pages/servers/tools.mdx) | agentRuntime signal |
| agentRuntime | [server/hooks.go](../../../../sources/mark3labs__mcp-go/server/hooks.go) | agentRuntime signal |
| agentRuntime | [server/tool_filter_call_test.go](../../../../sources/mark3labs__mcp-go/server/tool_filter_call_test.go) | agentRuntime signal |
| entrypoints | [server/server.go](../../../../sources/mark3labs__mcp-go/server/server.go) | entrypoints signal |
| entrypoints | [server/internal/gen/main.go](../../../../sources/mark3labs__mcp-go/server/internal/gen/main.go) | entrypoints signal |
| entrypoints | [otel/example/main.go](../../../../sources/mark3labs__mcp-go/otel/example/main.go) | entrypoints signal |
| entrypoints | [examples/typed_tools/main.go](../../../../sources/mark3labs__mcp-go/examples/typed_tools/main.go) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 23 | [server/server.go](../../../../sources/mark3labs__mcp-go/server/server.go)<br>[server/internal/gen/main.go](../../../../sources/mark3labs__mcp-go/server/internal/gen/main.go)<br>[otel/example/main.go](../../../../sources/mark3labs__mcp-go/otel/example/main.go)<br>[examples/typed_tools/main.go](../../../../sources/mark3labs__mcp-go/examples/typed_tools/main.go)<br>[examples/task_tool/main.go](../../../../sources/mark3labs__mcp-go/examples/task_tool/main.go)<br>[examples/structured_input_and_output/main.go](../../../../sources/mark3labs__mcp-go/examples/structured_input_and_output/main.go)<br>[examples/simple_client/main.go](../../../../sources/mark3labs__mcp-go/examples/simple_client/main.go)<br>[examples/sampling_server/main.go](../../../../sources/mark3labs__mcp-go/examples/sampling_server/main.go) |
| agentRuntime | 10 | [AGENTS.md](../../../../sources/mark3labs__mcp-go/AGENTS.md)<br>[www/docs/pages/servers/tools.mdx](../../../../sources/mark3labs__mcp-go/www/docs/pages/servers/tools.mdx)<br>[server/hooks.go](../../../../sources/mark3labs__mcp-go/server/hooks.go)<br>[server/tool_filter_call_test.go](../../../../sources/mark3labs__mcp-go/server/tool_filter_call_test.go)<br>[server/internal/gen/hooks.go.tmpl](../../../../sources/mark3labs__mcp-go/server/internal/gen/hooks.go.tmpl)<br>[mcp/tools_additional_test.go](../../../../sources/mark3labs__mcp-go/mcp/tools_additional_test.go)<br>[mcp/tools_defer_loading_test.go](../../../../sources/mark3labs__mcp-go/mcp/tools_defer_loading_test.go)<br>[mcp/tools_properties_test.go](../../../../sources/mark3labs__mcp-go/mcp/tools_properties_test.go) |
| mcp | 32 | [mcp/base_metadata_test.go](../../../../sources/mark3labs__mcp-go/mcp/base_metadata_test.go)<br>[mcp/consts.go](../../../../sources/mark3labs__mcp-go/mcp/consts.go)<br>[mcp/content_benchmark_test.go](../../../../sources/mark3labs__mcp-go/mcp/content_benchmark_test.go)<br>[mcp/elicitation_test.go](../../../../sources/mark3labs__mcp-go/mcp/elicitation_test.go)<br>[mcp/elicitation_validation_test.go](../../../../sources/mark3labs__mcp-go/mcp/elicitation_validation_test.go)<br>[mcp/error_unmarshal_test.go](../../../../sources/mark3labs__mcp-go/mcp/error_unmarshal_test.go)<br>[mcp/errors_additional_test.go](../../../../sources/mark3labs__mcp-go/mcp/errors_additional_test.go)<br>[mcp/errors_test.go](../../../../sources/mark3labs__mcp-go/mcp/errors_test.go) |
| retrieval | 4 | [www/docs/pages/index.mdx](../../../../sources/mark3labs__mcp-go/www/docs/pages/index.mdx)<br>[www/docs/pages/transports/index.mdx](../../../../sources/mark3labs__mcp-go/www/docs/pages/transports/index.mdx)<br>[www/docs/pages/servers/index.mdx](../../../../sources/mark3labs__mcp-go/www/docs/pages/servers/index.mdx)<br>[www/docs/pages/clients/index.mdx](../../../../sources/mark3labs__mcp-go/www/docs/pages/clients/index.mdx) |
| spec | 0 | 명확하지 않음 |
| eval | 100 | [tracing/tracing_test.go](../../../../sources/mark3labs__mcp-go/tracing/tracing_test.go)<br>[tracing/tracing.go](../../../../sources/mark3labs__mcp-go/tracing/tracing.go)<br>[server/client_info_store_test.go](../../../../sources/mark3labs__mcp-go/server/client_info_store_test.go)<br>[server/elicitation_test.go](../../../../sources/mark3labs__mcp-go/server/elicitation_test.go)<br>[server/http_cors_test.go](../../../../sources/mark3labs__mcp-go/server/http_cors_test.go)<br>[server/input_validation_test.go](../../../../sources/mark3labs__mcp-go/server/input_validation_test.go)<br>[server/logger_test.go](../../../../sources/mark3labs__mcp-go/server/logger_test.go)<br>[server/output_validation_test.go](../../../../sources/mark3labs__mcp-go/server/output_validation_test.go) |
| security | 13 | [SECURITY.md](../../../../sources/mark3labs__mcp-go/SECURITY.md)<br>[examples/oauth_client/main.go](../../../../sources/mark3labs__mcp-go/examples/oauth_client/main.go)<br>[examples/oauth_client/README.md](../../../../sources/mark3labs__mcp-go/examples/oauth_client/README.md)<br>[client/oauth_test.go](../../../../sources/mark3labs__mcp-go/client/oauth_test.go)<br>[client/oauth.go](../../../../sources/mark3labs__mcp-go/client/oauth.go)<br>[client/transport/oauth_nil_metadata_test.go](../../../../sources/mark3labs__mcp-go/client/transport/oauth_nil_metadata_test.go)<br>[client/transport/oauth_test.go](../../../../sources/mark3labs__mcp-go/client/transport/oauth_test.go)<br>[client/transport/oauth_utils_test.go](../../../../sources/mark3labs__mcp-go/client/transport/oauth_utils_test.go) |
| ci | 4 | [.github/workflows/ci.yml](../../../../sources/mark3labs__mcp-go/.github/workflows/ci.yml)<br>[.github/workflows/golangci-lint.yml](../../../../sources/mark3labs__mcp-go/.github/workflows/golangci-lint.yml)<br>[.github/workflows/pages.yml](../../../../sources/mark3labs__mcp-go/.github/workflows/pages.yml)<br>[.github/workflows/release.yml](../../../../sources/mark3labs__mcp-go/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [AGENTS.md](../../../../sources/mark3labs__mcp-go/AGENTS.md) |
| docs | 39 | [README.md](../../../../sources/mark3labs__mcp-go/README.md)<br>[www/README.md](../../../../sources/mark3labs__mcp-go/www/README.md)<br>[www/docs/styles.css](../../../../sources/mark3labs__mcp-go/www/docs/styles.css)<br>[www/docs/public/logo.png](../../../../sources/mark3labs__mcp-go/www/docs/public/logo.png)<br>[www/docs/pages/core-concepts.mdx](../../../../sources/mark3labs__mcp-go/www/docs/pages/core-concepts.mdx)<br>[www/docs/pages/getting-started.mdx](../../../../sources/mark3labs__mcp-go/www/docs/pages/getting-started.mdx)<br>[www/docs/pages/index.mdx](../../../../sources/mark3labs__mcp-go/www/docs/pages/index.mdx)<br>[www/docs/pages/quick-start.mdx](../../../../sources/mark3labs__mcp-go/www/docs/pages/quick-start.mdx) |
| config | 4 | [go.mod](../../../../sources/mark3labs__mcp-go/go.mod)<br>[www/package.json](../../../../sources/mark3labs__mcp-go/www/package.json)<br>[www/tsconfig.json](../../../../sources/mark3labs__mcp-go/www/tsconfig.json)<br>[otel/go.mod](../../../../sources/mark3labs__mcp-go/otel/go.mod) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 100 | [tracing/tracing_test.go](../../../../sources/mark3labs__mcp-go/tracing/tracing_test.go)<br>[tracing/tracing.go](../../../../sources/mark3labs__mcp-go/tracing/tracing.go)<br>[server/client_info_store_test.go](../../../../sources/mark3labs__mcp-go/server/client_info_store_test.go)<br>[server/elicitation_test.go](../../../../sources/mark3labs__mcp-go/server/elicitation_test.go)<br>[server/http_cors_test.go](../../../../sources/mark3labs__mcp-go/server/http_cors_test.go)<br>[server/input_validation_test.go](../../../../sources/mark3labs__mcp-go/server/input_validation_test.go) |
| CI workflow | 4 | [.github/workflows/ci.yml](../../../../sources/mark3labs__mcp-go/.github/workflows/ci.yml)<br>[.github/workflows/golangci-lint.yml](../../../../sources/mark3labs__mcp-go/.github/workflows/golangci-lint.yml)<br>[.github/workflows/pages.yml](../../../../sources/mark3labs__mcp-go/.github/workflows/pages.yml)<br>[.github/workflows/release.yml](../../../../sources/mark3labs__mcp-go/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 13 | [SECURITY.md](../../../../sources/mark3labs__mcp-go/SECURITY.md)<br>[examples/oauth_client/main.go](../../../../sources/mark3labs__mcp-go/examples/oauth_client/main.go)<br>[examples/oauth_client/README.md](../../../../sources/mark3labs__mcp-go/examples/oauth_client/README.md)<br>[client/oauth_test.go](../../../../sources/mark3labs__mcp-go/client/oauth_test.go)<br>[client/oauth.go](../../../../sources/mark3labs__mcp-go/client/oauth.go)<br>[client/transport/oauth_nil_metadata_test.go](../../../../sources/mark3labs__mcp-go/client/transport/oauth_nil_metadata_test.go) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/mark3labs__mcp-go/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `mcp/base_metadata_test.go`, `mcp/consts.go`, `mcp/content_benchmark_test.go`.
2. entrypoint를 따라 실행 흐름 확인: `server/server.go`, `server/internal/gen/main.go`, `otel/example/main.go`.
3. agent/tool runtime 매핑: `AGENTS.md`, `www/docs/pages/servers/tools.mdx`, `server/hooks.go`.
4. retrieval/memory/indexing 확인: `www/docs/pages/index.mdx`, `www/docs/pages/transports/index.mdx`, `www/docs/pages/servers/index.mdx`.
5. test/eval 파일로 동작 검증: `tracing/tracing_test.go`, `tracing/tracing.go`, `server/client_info_store_test.go`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A Go implementation of the Model Context Protocol MCP , enabling seamless integration between LLM applications and exter. 핵심 구조 신호는 Go, go.mod, README.md, AGENTS.md, LICENSE, mcp이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
