# trpc-group/trpc-agent-go 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

A Go framework for building production agent systems with graph workflows, tools, memory, A2A, AG-UI, MCP, evaluation, and observability.

## 요약

- 조사 단위: `sources/trpc-group__trpc-agent-go` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 3,780 files, 1,100 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tool/mcp/config_test.go, tool/mcp/config.go, tool/mcp/tool_test.go이고, 의존성 단서는 openai, mcp, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | trpc-group/trpc-agent-go |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Go |
| Stars | 1370 |
| Forks | 168 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/trpc-group__trpc-agent-go](../../../../sources/trpc-group__trpc-agent-go) |
| 기존 보고서 | [reports/global-trending/repositories/trpc-group__trpc-agent-go.md](../../../global-trending/repositories/trpc-group__trpc-agent-go.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 3780 / 1100 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .github, .resource, agent, artifact, benchmark, codeexecutor, docs, evaluation, event, evolution, examples, graph, internal, knowledge, log, memory, model, openclaw, planner, plugin |
| 상위 확장자 | .go: 2701, .md: 552, .mod: 99, .sum: 94, .json: 90, .png: 60, .sh: 29, .py: 23, .yaml: 20, .js: 19, .txt: 18, (none): 13 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| examples/tool | examples workspace | 10 |
| server | source boundary | 8 |
| examples/telemetry | examples workspace | 5 |
| docs | documentation surface | 4 |
| examples/toolpipe | examples workspace | 4 |
| examples/mcpbroker | examples workspace | 2 |
| examples/team | examples workspace | 2 |
| examples/thinking | examples workspace | 2 |
| examples/timeaware | examples workspace | 2 |
| examples/todo | examples workspace | 2 |
| examples/todoenforcer | examples workspace | 2 |
| examples/tokentracker | examples workspace | 2 |
| examples/toolcallid | examples workspace | 2 |
| examples/toolfilter | examples workspace | 2 |
| examples/toolinterrupt | examples workspace | 2 |
| examples/toolpolicy | examples workspace | 2 |
| examples/transfer | examples workspace | 2 |
| examples/usermessagerewriter | examples workspace | 2 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [tool/mcp/config_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/mcp/config_test.go) | mcp signal |
| mcp | [tool/mcp/config.go](../../../../sources/trpc-group__trpc-agent-go/tool/mcp/config.go) | mcp signal |
| mcp | [tool/mcp/tool_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/mcp/tool_test.go) | mcp signal |
| mcp | [tool/mcp/tool.go](../../../../sources/trpc-group__trpc-agent-go/tool/mcp/tool.go) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/trpc-group__trpc-agent-go/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tool/callbacks_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/callbacks_test.go) | agentRuntime signal |
| agentRuntime | [tool/callbacks.go](../../../../sources/trpc-group__trpc-agent-go/tool/callbacks.go) | agentRuntime signal |
| agentRuntime | [tool/context_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/context_test.go) | agentRuntime signal |
| entrypoints | [tool/mcpbroker/testdata/stdio_server/main.go](../../../../sources/trpc-group__trpc-agent-go/tool/mcpbroker/testdata/stdio_server/main.go) | entrypoints signal |
| entrypoints | [tool/mcp/e2e/test_server/main.go](../../../../sources/trpc-group__trpc-agent-go/tool/mcp/e2e/test_server/main.go) | entrypoints signal |
| entrypoints | [telemetry/semconv/trace/server.go](../../../../sources/trpc-group__trpc-agent-go/telemetry/semconv/trace/server.go) | entrypoints signal |
| entrypoints | [server/promptiter/server.go](../../../../sources/trpc-group__trpc-agent-go/server/promptiter/server.go) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 301 | [tool/mcpbroker/testdata/stdio_server/main.go](../../../../sources/trpc-group__trpc-agent-go/tool/mcpbroker/testdata/stdio_server/main.go)<br>[tool/mcp/e2e/test_server/main.go](../../../../sources/trpc-group__trpc-agent-go/tool/mcp/e2e/test_server/main.go)<br>[telemetry/semconv/trace/server.go](../../../../sources/trpc-group__trpc-agent-go/telemetry/semconv/trace/server.go)<br>[server/promptiter/server.go](../../../../sources/trpc-group__trpc-agent-go/server/promptiter/server.go)<br>[server/openai/server.go](../../../../sources/trpc-group__trpc-agent-go/server/openai/server.go)<br>[server/evaluation/server.go](../../../../sources/trpc-group__trpc-agent-go/server/evaluation/server.go)<br>[server/a2a/server.go](../../../../sources/trpc-group__trpc-agent-go/server/a2a/server.go)<br>[openclaw/internal/gateway/server.go](../../../../sources/trpc-group__trpc-agent-go/openclaw/internal/gateway/server.go) |
| agentRuntime | 1041 | [AGENTS.md](../../../../sources/trpc-group__trpc-agent-go/AGENTS.md)<br>[tool/callbacks_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/callbacks_test.go)<br>[tool/callbacks.go](../../../../sources/trpc-group__trpc-agent-go/tool/callbacks.go)<br>[tool/context_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/context_test.go)<br>[tool/context.go](../../../../sources/trpc-group__trpc-agent-go/tool/context.go)<br>[tool/filter_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/filter_test.go)<br>[tool/filter.go](../../../../sources/trpc-group__trpc-agent-go/tool/filter.go)<br>[tool/final_result.go](../../../../sources/trpc-group__trpc-agent-go/tool/final_result.go) |
| mcp | 25 | [tool/mcp/config_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/mcp/config_test.go)<br>[tool/mcp/config.go](../../../../sources/trpc-group__trpc-agent-go/tool/mcp/config.go)<br>[tool/mcp/tool_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/mcp/tool_test.go)<br>[tool/mcp/tool.go](../../../../sources/trpc-group__trpc-agent-go/tool/mcp/tool.go)<br>[tool/mcp/toolset_additional_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/mcp/toolset_additional_test.go)<br>[tool/mcp/toolset_http_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/mcp/toolset_http_test.go)<br>[tool/mcp/toolset_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/mcp/toolset_test.go)<br>[tool/mcp/toolset.go](../../../../sources/trpc-group__trpc-agent-go/tool/mcp/toolset.go) |
| retrieval | 752 | [tool/agent/agent_tool_graph_runtime.go](../../../../sources/trpc-group__trpc-agent-go/tool/agent/agent_tool_graph_runtime.go)<br>[tool/agent/capability_search_index.go](../../../../sources/trpc-group__trpc-agent-go/tool/agent/capability_search_index.go)<br>[telemetry/semconv/trace/embedding.go](../../../../sources/trpc-group__trpc-agent-go/telemetry/semconv/trace/embedding.go)<br>[session/redis/internal/hashidx/user_session_index_test.go](../../../../sources/trpc-group__trpc-agent-go/session/redis/internal/hashidx/user_session_index_test.go)<br>[session/redis/internal/hashidx/user_session_index.go](../../../../sources/trpc-group__trpc-agent-go/session/redis/internal/hashidx/user_session_index.go)<br>[runner/runner_memory_test.go](../../../../sources/trpc-group__trpc-agent-go/runner/runner_memory_test.go)<br>[plugin/toolsearch/knowledge_searcher.go](../../../../sources/trpc-group__trpc-agent-go/plugin/toolsearch/knowledge_searcher.go)<br>[plugin/toolsearch/knowledge_tool_test.go](../../../../sources/trpc-group__trpc-agent-go/plugin/toolsearch/knowledge_tool_test.go) |
| spec | 8 | [tool/openapi/openapi_spec_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/openapi/openapi_spec_test.go)<br>[tool/openapi/openapi_spec.go](../../../../sources/trpc-group__trpc-agent-go/tool/openapi/openapi_spec.go)<br>[internal/workspaceprep/requirement.go](../../../../sources/trpc-group__trpc-agent-go/internal/workspaceprep/requirement.go)<br>[examples/a2asubagent/agents/codecheck/spec.txt](../../../../sources/trpc-group__trpc-agent-go/examples/a2asubagent/agents/codecheck/spec.txt)<br>[examples/a2aadk/adk/requirements.txt](../../../../sources/trpc-group__trpc-agent-go/examples/a2aadk/adk/requirements.txt)<br>[docs/mkdocs/assets/requirements.txt](../../../../sources/trpc-group__trpc-agent-go/docs/mkdocs/assets/requirements.txt)<br>[docs/mkdocs/assets/img/component_architecture.svg](../../../../sources/trpc-group__trpc-agent-go/docs/mkdocs/assets/img/component_architecture.svg)<br>[docs/design/debuglog-plugin.md](../../../../sources/trpc-group__trpc-agent-go/docs/design/debuglog-plugin.md) |
| eval | 1416 | [tool/callbacks_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/callbacks_test.go)<br>[tool/context_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/context_test.go)<br>[tool/filter_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/filter_test.go)<br>[tool/merge_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/merge_test.go)<br>[tool/permission_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/permission_test.go)<br>[tool/retry_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/retry_test.go)<br>[tool/stream_preferences_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/stream_preferences_test.go)<br>[tool/stream_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/stream_test.go) |
| security | 114 | [tool/permission_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/permission_test.go)<br>[tool/permission.go](../../../../sources/trpc-group__trpc-agent-go/tool/permission.go)<br>[tool/workspaceexec/workspace_exec_policy_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/workspaceexec/workspace_exec_policy_test.go)<br>[telemetry/trace/span_attribute_policy_test.go](../../../../sources/trpc-group__trpc-agent-go/telemetry/trace/span_attribute_policy_test.go)<br>[telemetry/trace/span_attribute_policy.go](../../../../sources/trpc-group__trpc-agent-go/telemetry/trace/span_attribute_policy.go)<br>[session/internal/summary/policy.go](../../../../sources/trpc-group__trpc-agent-go/session/internal/summary/policy.go)<br>[plugin/guardrail/guardrail_test.go](../../../../sources/trpc-group__trpc-agent-go/plugin/guardrail/guardrail_test.go)<br>[plugin/guardrail/guardrail.go](../../../../sources/trpc-group__trpc-agent-go/plugin/guardrail/guardrail.go) |
| ci | 5 | [.github/workflows/cla.yml](../../../../sources/trpc-group__trpc-agent-go/.github/workflows/cla.yml)<br>[.github/workflows/deploy.yml](../../../../sources/trpc-group__trpc-agent-go/.github/workflows/deploy.yml)<br>[.github/workflows/module-sum-check.yml](../../../../sources/trpc-group__trpc-agent-go/.github/workflows/module-sum-check.yml)<br>[.github/workflows/openclaw-release.yml](../../../../sources/trpc-group__trpc-agent-go/.github/workflows/openclaw-release.yml)<br>[.github/workflows/prc.yml](../../../../sources/trpc-group__trpc-agent-go/.github/workflows/prc.yml) |
| container | 3 | [openclaw/examples/sandbox_service_execution/Dockerfile](../../../../sources/trpc-group__trpc-agent-go/openclaw/examples/sandbox_service_execution/Dockerfile)<br>[examples/telemetry/jaeger-prometheus/docker-compose.yaml](../../../../sources/trpc-group__trpc-agent-go/examples/telemetry/jaeger-prometheus/docker-compose.yaml)<br>[examples/callbacks/timer/docker-compose.yaml](../../../../sources/trpc-group__trpc-agent-go/examples/callbacks/timer/docker-compose.yaml) |
| instruction | 1 | [AGENTS.md](../../../../sources/trpc-group__trpc-agent-go/AGENTS.md) |
| docs | 512 | [README.md](../../../../sources/trpc-group__trpc-agent-go/README.md)<br>[README.zh_CN.md](../../../../sources/trpc-group__trpc-agent-go/README.zh_CN.md)<br>[tool/webfetch/README.md](../../../../sources/trpc-group__trpc-agent-go/tool/webfetch/README.md)<br>[openclaw/README.md](../../../../sources/trpc-group__trpc-agent-go/openclaw/README.md)<br>[openclaw/README.zh_CN.md](../../../../sources/trpc-group__trpc-agent-go/openclaw/README.zh_CN.md)<br>[openclaw/skills/README.md](../../../../sources/trpc-group__trpc-agent-go/openclaw/skills/README.md)<br>[openclaw/examples/stdin_chat/README.md](../../../../sources/trpc-group__trpc-agent-go/openclaw/examples/stdin_chat/README.md)<br>[openclaw/examples/sandbox_service_execution/README.md](../../../../sources/trpc-group__trpc-agent-go/openclaw/examples/sandbox_service_execution/README.md) |
| config | 109 | [go.mod](../../../../sources/trpc-group__trpc-agent-go/go.mod)<br>[tool/wikipedia/go.mod](../../../../sources/trpc-group__trpc-agent-go/tool/wikipedia/go.mod)<br>[tool/webfetch/httpfetch/go.mod](../../../../sources/trpc-group__trpc-agent-go/tool/webfetch/httpfetch/go.mod)<br>[tool/webfetch/geminifetch/go.mod](../../../../sources/trpc-group__trpc-agent-go/tool/webfetch/geminifetch/go.mod)<br>[tool/webfetch/claudefetch/go.mod](../../../../sources/trpc-group__trpc-agent-go/tool/webfetch/claudefetch/go.mod)<br>[tool/openapi/go.mod](../../../../sources/trpc-group__trpc-agent-go/tool/openapi/go.mod)<br>[tool/google/go.mod](../../../../sources/trpc-group__trpc-agent-go/tool/google/go.mod)<br>[tool/email/go.mod](../../../../sources/trpc-group__trpc-agent-go/tool/email/go.mod) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1416 | [tool/callbacks_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/callbacks_test.go)<br>[tool/context_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/context_test.go)<br>[tool/filter_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/filter_test.go)<br>[tool/merge_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/merge_test.go)<br>[tool/permission_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/permission_test.go)<br>[tool/retry_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/retry_test.go) |
| CI workflow | 5 | [.github/workflows/cla.yml](../../../../sources/trpc-group__trpc-agent-go/.github/workflows/cla.yml)<br>[.github/workflows/deploy.yml](../../../../sources/trpc-group__trpc-agent-go/.github/workflows/deploy.yml)<br>[.github/workflows/module-sum-check.yml](../../../../sources/trpc-group__trpc-agent-go/.github/workflows/module-sum-check.yml)<br>[.github/workflows/openclaw-release.yml](../../../../sources/trpc-group__trpc-agent-go/.github/workflows/openclaw-release.yml)<br>[.github/workflows/prc.yml](../../../../sources/trpc-group__trpc-agent-go/.github/workflows/prc.yml) |
| 컨테이너/배포 | 3 | [openclaw/examples/sandbox_service_execution/Dockerfile](../../../../sources/trpc-group__trpc-agent-go/openclaw/examples/sandbox_service_execution/Dockerfile)<br>[examples/telemetry/jaeger-prometheus/docker-compose.yaml](../../../../sources/trpc-group__trpc-agent-go/examples/telemetry/jaeger-prometheus/docker-compose.yaml)<br>[examples/callbacks/timer/docker-compose.yaml](../../../../sources/trpc-group__trpc-agent-go/examples/callbacks/timer/docker-compose.yaml) |
| 보안/정책 | 114 | [tool/permission_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/permission_test.go)<br>[tool/permission.go](../../../../sources/trpc-group__trpc-agent-go/tool/permission.go)<br>[tool/workspaceexec/workspace_exec_policy_test.go](../../../../sources/trpc-group__trpc-agent-go/tool/workspaceexec/workspace_exec_policy_test.go)<br>[telemetry/trace/span_attribute_policy_test.go](../../../../sources/trpc-group__trpc-agent-go/telemetry/trace/span_attribute_policy_test.go)<br>[telemetry/trace/span_attribute_policy.go](../../../../sources/trpc-group__trpc-agent-go/telemetry/trace/span_attribute_policy.go)<br>[session/internal/summary/policy.go](../../../../sources/trpc-group__trpc-agent-go/session/internal/summary/policy.go) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/trpc-group__trpc-agent-go/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tool/mcp/config_test.go`, `tool/mcp/config.go`, `tool/mcp/tool_test.go`.
2. entrypoint를 따라 실행 흐름 확인: `tool/mcpbroker/testdata/stdio_server/main.go`, `tool/mcp/e2e/test_server/main.go`, `telemetry/semconv/trace/server.go`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tool/callbacks_test.go`, `tool/callbacks.go`.
4. retrieval/memory/indexing 확인: `tool/agent/agent_tool_graph_runtime.go`, `tool/agent/capability_search_index.go`, `telemetry/semconv/trace/embedding.go`.
5. test/eval 파일로 동작 검증: `tool/callbacks_test.go`, `tool/context_test.go`, `tool/filter_test.go`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A Go framework for building production agent systems with graph workflows, tools, memory, A2A, AG UI, MCP, evaluation, a. 핵심 구조 신호는 Go, go.mod, README.md, AGENTS.md, LICENSE, openai이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
