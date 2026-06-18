# Ingenimax/agent-sdk-go 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

A powerful Go framework for building production-ready AI agents!

## 요약

- 조사 단위: `sources/Ingenimax__agent-sdk-go` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 597 files, 189 directories, depth score 117, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=pkg/mcp/adapters.go, pkg/mcp/builder_test.go, pkg/mcp/builder.go이고, 의존성 단서는 openai, modelcontextprotocol, weaviate, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Ingenimax/agent-sdk-go |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 573 |
| Forks | 127 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Ingenimax__agent-sdk-go](../../../../sources/Ingenimax__agent-sdk-go) |
| 기존 보고서 | [reports/global-trending/repositories/Ingenimax__agent-sdk-go.md](../../../global-trending/repositories/Ingenimax__agent-sdk-go.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 597 / 189 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .github, cmd, docs, examples, pkg, scripts |
| 상위 확장자 | .go: 346, .md: 106, .tsx: 31, .yaml: 15, .json: 12, .txt: 11, .svg: 10, .js: 9, (none): 9, .woff2: 6, .mod: 5, .sum: 5 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| examples/mcp | examples workspace | 28 |
| examples/microservices | examples workspace | 11 |
| examples/llm | examples workspace | 8 |
| examples/orchestration | examples workspace | 6 |
| examples/subagents | examples workspace | 4 |
| examples/token-usage | examples workspace | 3 |
| docs | documentation surface | 2 |
| examples/memory | examples workspace | 2 |
| examples/simple_agent | examples workspace | 2 |
| examples/streaming | examples workspace | 2 |
| examples/streaming_intermediate_messages | examples workspace | 2 |
| examples/structured_output | examples workspace | 2 |
| examples/tools | examples workspace | 2 |
| examples/tracing | examples workspace | 2 |
| examples/ui | examples workspace | 2 |
| examples/vectorstore | examples workspace | 2 |
| .github | ci surface | 1 |
| cmd | source boundary | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | all | make all |
| build | Makefile | build-cli | make build-cli |
| build | Makefile | build | make build |
| utility | Makefile | install | make install |
| utility | Makefile | clean | make clean |
| test | Makefile | test | make test |
| quality | Makefile | lint | make lint |
| quality | Makefile | fmt | make fmt |
| utility | Makefile | tidy | make tidy |
| utility | Makefile | proto | make proto |
| serve-dev | Makefile | dev-setup | make dev-setup |
| build | Makefile | release | make release |
| serve-dev | Makefile | quickstart | make quickstart |
| utility | Makefile | help | make help |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | weaviate |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [pkg/mcp/adapters.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/mcp/adapters.go) | mcp signal |
| mcp | [pkg/mcp/builder_test.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/mcp/builder_test.go) | mcp signal |
| mcp | [pkg/mcp/builder.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/mcp/builder.go) | mcp signal |
| mcp | [pkg/mcp/errors_test.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/mcp/errors_test.go) | mcp signal |
| agentRuntime | [agent-cli.rb](../../../../sources/Ingenimax__agent-sdk-go/agent-cli.rb) | agentRuntime signal |
| agentRuntime | [pkg/workflow/workflow.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/workflow/workflow.go) | agentRuntime signal |
| agentRuntime | [pkg/tracing/context.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tracing/context.go) | agentRuntime signal |
| agentRuntime | [pkg/tools/agent_tool_test.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tools/agent_tool_test.go) | agentRuntime signal |
| entrypoints | [pkg/a2a/server.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/a2a/server.go) | entrypoints signal |
| entrypoints | [examples/vectorstore/weaviate/main.go](../../../../sources/Ingenimax__agent-sdk-go/examples/vectorstore/weaviate/main.go) | entrypoints signal |
| entrypoints | [examples/ui/main.go](../../../../sources/Ingenimax__agent-sdk-go/examples/ui/main.go) | entrypoints signal |
| entrypoints | [examples/tracing/main.go](../../../../sources/Ingenimax__agent-sdk-go/examples/tracing/main.go) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 87 | [pkg/a2a/server.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/a2a/server.go)<br>[examples/vectorstore/weaviate/main.go](../../../../sources/Ingenimax__agent-sdk-go/examples/vectorstore/weaviate/main.go)<br>[examples/ui/main.go](../../../../sources/Ingenimax__agent-sdk-go/examples/ui/main.go)<br>[examples/tracing/main.go](../../../../sources/Ingenimax__agent-sdk-go/examples/tracing/main.go)<br>[examples/tools/huggingface_models/main.go](../../../../sources/Ingenimax__agent-sdk-go/examples/tools/huggingface_models/main.go)<br>[examples/tools/github_extractor/main.go](../../../../sources/Ingenimax__agent-sdk-go/examples/tools/github_extractor/main.go)<br>[examples/token-usage/main.go](../../../../sources/Ingenimax__agent-sdk-go/examples/token-usage/main.go)<br>[examples/subagents/main.go](../../../../sources/Ingenimax__agent-sdk-go/examples/subagents/main.go) |
| agentRuntime | 131 | [agent-cli.rb](../../../../sources/Ingenimax__agent-sdk-go/agent-cli.rb)<br>[pkg/workflow/workflow.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/workflow/workflow.go)<br>[pkg/tracing/context.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tracing/context.go)<br>[pkg/tools/agent_tool_test.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tools/agent_tool_test.go)<br>[pkg/tools/agent_tool.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tools/agent_tool.go)<br>[pkg/tools/registry.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tools/registry.go)<br>[pkg/tools/websearch/websearch_test.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tools/websearch/websearch_test.go)<br>[pkg/tools/websearch/websearch.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tools/websearch/websearch.go) |
| mcp | 67 | [pkg/mcp/adapters.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/mcp/adapters.go)<br>[pkg/mcp/builder_test.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/mcp/builder_test.go)<br>[pkg/mcp/builder.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/mcp/builder.go)<br>[pkg/mcp/errors_test.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/mcp/errors_test.go)<br>[pkg/mcp/errors.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/mcp/errors.go)<br>[pkg/mcp/lazy.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/mcp/lazy.go)<br>[pkg/mcp/mcp.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/mcp/mcp.go)<br>[pkg/mcp/metadata_test.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/mcp/metadata_test.go) |
| retrieval | 60 | [pkg/tracing/traced_memory.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tracing/traced_memory.go)<br>[pkg/tools/graphrag/add_entity.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tools/graphrag/add_entity.go)<br>[pkg/tools/graphrag/add_relationship.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tools/graphrag/add_relationship.go)<br>[pkg/tools/graphrag/extract.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tools/graphrag/extract.go)<br>[pkg/tools/graphrag/get_context.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tools/graphrag/get_context.go)<br>[pkg/tools/graphrag/search.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tools/graphrag/search.go)<br>[pkg/task/service/core_memory.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/task/service/core_memory.go)<br>[pkg/task/service/memory.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/task/service/memory.go) |
| spec | 1 | [docs/graphrag/architecture.md](../../../../sources/Ingenimax__agent-sdk-go/docs/graphrag/architecture.md) |
| eval | 97 | [pkg/vectorstore/weaviate/weaviate_test.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/vectorstore/weaviate/weaviate_test.go)<br>[pkg/tracing/context.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tracing/context.go)<br>[pkg/tracing/langfuse.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tracing/langfuse.go)<br>[pkg/tracing/opentelemetry.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tracing/opentelemetry.go)<br>[pkg/tracing/otel_langfuse_test.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tracing/otel_langfuse_test.go)<br>[pkg/tracing/otel_langfuse.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tracing/otel_langfuse.go)<br>[pkg/tracing/otel_tracer_adapter.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tracing/otel_tracer_adapter.go)<br>[pkg/tracing/session.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tracing/session.go) |
| security | 2 | [SECURITY.md](../../../../sources/Ingenimax__agent-sdk-go/SECURITY.md)<br>[pkg/retry/policy.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/retry/policy.go) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/Ingenimax__agent-sdk-go/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/Ingenimax__agent-sdk-go/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [CLAUDE.md](../../../../sources/Ingenimax__agent-sdk-go/CLAUDE.md) |
| docs | 97 | [README.md](../../../../sources/Ingenimax__agent-sdk-go/README.md)<br>[pkg/task/README.md](../../../../sources/Ingenimax__agent-sdk-go/pkg/task/README.md)<br>[pkg/microservice/ui-nextjs/README.md](../../../../sources/Ingenimax__agent-sdk-go/pkg/microservice/ui-nextjs/README.md)<br>[pkg/mcp/README.md](../../../../sources/Ingenimax__agent-sdk-go/pkg/mcp/README.md)<br>[pkg/llm/vllm/README.md](../../../../sources/Ingenimax__agent-sdk-go/pkg/llm/vllm/README.md)<br>[pkg/llm/openai/README.md](../../../../sources/Ingenimax__agent-sdk-go/pkg/llm/openai/README.md)<br>[pkg/llm/ollama/README.md](../../../../sources/Ingenimax__agent-sdk-go/pkg/llm/ollama/README.md)<br>[pkg/llm/deepseek/README.md](../../../../sources/Ingenimax__agent-sdk-go/pkg/llm/deepseek/README.md) |
| config | 8 | [go.mod](../../../../sources/Ingenimax__agent-sdk-go/go.mod)<br>[Makefile](../../../../sources/Ingenimax__agent-sdk-go/Makefile)<br>[pkg/microservice/ui-nextjs/package.json](../../../../sources/Ingenimax__agent-sdk-go/pkg/microservice/ui-nextjs/package.json)<br>[pkg/microservice/ui-nextjs/tsconfig.json](../../../../sources/Ingenimax__agent-sdk-go/pkg/microservice/ui-nextjs/tsconfig.json)<br>[examples/token-usage/go.mod](../../../../sources/Ingenimax__agent-sdk-go/examples/token-usage/go.mod)<br>[examples/mcp/google-cse-yaml/go.mod](../../../../sources/Ingenimax__agent-sdk-go/examples/mcp/google-cse-yaml/go.mod)<br>[examples/mcp/google-cse/go.mod](../../../../sources/Ingenimax__agent-sdk-go/examples/mcp/google-cse/go.mod)<br>[examples/deployment_config/go.mod](../../../../sources/Ingenimax__agent-sdk-go/examples/deployment_config/go.mod) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 97 | [pkg/vectorstore/weaviate/weaviate_test.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/vectorstore/weaviate/weaviate_test.go)<br>[pkg/tracing/context.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tracing/context.go)<br>[pkg/tracing/langfuse.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tracing/langfuse.go)<br>[pkg/tracing/opentelemetry.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tracing/opentelemetry.go)<br>[pkg/tracing/otel_langfuse_test.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tracing/otel_langfuse_test.go)<br>[pkg/tracing/otel_langfuse.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/tracing/otel_langfuse.go) |
| CI workflow | 2 | [.github/workflows/ci.yml](../../../../sources/Ingenimax__agent-sdk-go/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/Ingenimax__agent-sdk-go/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 2 | [SECURITY.md](../../../../sources/Ingenimax__agent-sdk-go/SECURITY.md)<br>[pkg/retry/policy.go](../../../../sources/Ingenimax__agent-sdk-go/pkg/retry/policy.go) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/Ingenimax__agent-sdk-go/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `pkg/mcp/adapters.go`, `pkg/mcp/builder_test.go`, `pkg/mcp/builder.go`.
2. entrypoint를 따라 실행 흐름 확인: `pkg/a2a/server.go`, `examples/vectorstore/weaviate/main.go`, `examples/ui/main.go`.
3. agent/tool runtime 매핑: `agent-cli.rb`, `pkg/workflow/workflow.go`, `pkg/tracing/context.go`.
4. retrieval/memory/indexing 확인: `pkg/tracing/traced_memory.go`, `pkg/tools/graphrag/add_entity.go`, `pkg/tools/graphrag/add_relationship.go`.
5. test/eval 파일로 동작 검증: `pkg/vectorstore/weaviate/weaviate_test.go`, `pkg/tracing/context.go`, `pkg/tracing/langfuse.go`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A powerful Go framework for building production ready AI agents!. 핵심 구조 신호는 Go, go.mod, Makefile, README.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
