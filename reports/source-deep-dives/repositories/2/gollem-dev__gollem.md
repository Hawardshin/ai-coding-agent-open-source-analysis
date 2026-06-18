# gollem-dev/gollem 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Go framework for agentic AI app with MCP and built-in tools

## 요약

- 조사 단위: `sources/gollem-dev__gollem` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 192 files, 44 directories, depth score 95, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp/export_test.go, mcp/mcp_test.go, mcp/mcp.go이고, 의존성 단서는 openai, anthropic, modelcontextprotocol, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | gollem-dev/gollem |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 190 |
| Forks | 11 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/gollem-dev__gollem](../../../../sources/gollem-dev__gollem) |
| 기존 보고서 | [reports/global-trending/repositories/gollem-dev__gollem.md](../../../global-trending/repositories/gollem-dev__gollem.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 192 / 44 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .claude, .github, docs, examples, internal, llm, mcp, middleware, mock, strategy, templates, testdata, trace |
| 상위 확장자 | .go: 142, .md: 32, .yml: 7, .png: 2, (none): 2, .gif: 1, .jpg: 1, .json: 1, .mod: 1, .pdf: 1, .sh: 1, .sum: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 17 |
| examples/embedding | examples workspace | 2 |
| examples/json_schema | examples workspace | 2 |
| examples/mcp | examples workspace | 2 |
| examples/subagent_middleware | examples workspace | 2 |
| examples/tools | examples workspace | 2 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| examples/basic | examples workspace | 1 |
| examples/chat | examples workspace | 1 |
| examples/history | examples workspace | 1 |
| examples/query | examples workspace | 1 |
| examples/README.md | examples workspace | 1 |
| examples/reflexion | examples workspace | 1 |
| examples/simple | examples workspace | 1 |
| examples/tracing | examples workspace | 1 |
| internal | top-level component | 1 |
| llm | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | modelcontextprotocol |
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
| mcp | [mcp/export_test.go](../../../../sources/gollem-dev__gollem/mcp/export_test.go) | mcp signal |
| mcp | [mcp/mcp_test.go](../../../../sources/gollem-dev__gollem/mcp/mcp_test.go) | mcp signal |
| mcp | [mcp/mcp.go](../../../../sources/gollem-dev__gollem/mcp/mcp.go) | mcp signal |
| mcp | [examples/mcp/main.go](../../../../sources/gollem-dev__gollem/examples/mcp/main.go) | mcp signal |
| agentRuntime | [tool_test.go](../../../../sources/gollem-dev__gollem/tool_test.go) | agentRuntime signal |
| agentRuntime | [tool.go](../../../../sources/gollem-dev__gollem/tool.go) | agentRuntime signal |
| agentRuntime | [templates/executor_prompt.md](../../../../sources/gollem-dev__gollem/templates/executor_prompt.md) | agentRuntime signal |
| agentRuntime | [templates/planner_prompt.md](../../../../sources/gollem-dev__gollem/templates/planner_prompt.md) | agentRuntime signal |
| entrypoints | [examples/tracing/main.go](../../../../sources/gollem-dev__gollem/examples/tracing/main.go) | entrypoints signal |
| entrypoints | [examples/tools/main.go](../../../../sources/gollem-dev__gollem/examples/tools/main.go) | entrypoints signal |
| entrypoints | [examples/subagent_middleware/main.go](../../../../sources/gollem-dev__gollem/examples/subagent_middleware/main.go) | entrypoints signal |
| entrypoints | [examples/simple/main.go](../../../../sources/gollem-dev__gollem/examples/simple/main.go) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 12 | [examples/tracing/main.go](../../../../sources/gollem-dev__gollem/examples/tracing/main.go)<br>[examples/tools/main.go](../../../../sources/gollem-dev__gollem/examples/tools/main.go)<br>[examples/subagent_middleware/main.go](../../../../sources/gollem-dev__gollem/examples/subagent_middleware/main.go)<br>[examples/simple/main.go](../../../../sources/gollem-dev__gollem/examples/simple/main.go)<br>[examples/reflexion/main.go](../../../../sources/gollem-dev__gollem/examples/reflexion/main.go)<br>[examples/query/main.go](../../../../sources/gollem-dev__gollem/examples/query/main.go)<br>[examples/mcp/main.go](../../../../sources/gollem-dev__gollem/examples/mcp/main.go)<br>[examples/json_schema/main.go](../../../../sources/gollem-dev__gollem/examples/json_schema/main.go) |
| agentRuntime | 9 | [tool_test.go](../../../../sources/gollem-dev__gollem/tool_test.go)<br>[tool.go](../../../../sources/gollem-dev__gollem/tool.go)<br>[templates/executor_prompt.md](../../../../sources/gollem-dev__gollem/templates/executor_prompt.md)<br>[templates/planner_prompt.md](../../../../sources/gollem-dev__gollem/templates/planner_prompt.md)<br>[strategy/reflexion/memory_test.go](../../../../sources/gollem-dev__gollem/strategy/reflexion/memory_test.go)<br>[strategy/reflexion/memory.go](../../../../sources/gollem-dev__gollem/strategy/reflexion/memory.go)<br>[examples/tools/main.go](../../../../sources/gollem-dev__gollem/examples/tools/main.go)<br>[docs/tools.md](../../../../sources/gollem-dev__gollem/docs/tools.md) |
| mcp | 5 | [mcp/export_test.go](../../../../sources/gollem-dev__gollem/mcp/export_test.go)<br>[mcp/mcp_test.go](../../../../sources/gollem-dev__gollem/mcp/mcp_test.go)<br>[mcp/mcp.go](../../../../sources/gollem-dev__gollem/mcp/mcp.go)<br>[examples/mcp/main.go](../../../../sources/gollem-dev__gollem/examples/mcp/main.go)<br>[docs/mcp.md](../../../../sources/gollem-dev__gollem/docs/mcp.md) |
| retrieval | 7 | [strategy/reflexion/memory_test.go](../../../../sources/gollem-dev__gollem/strategy/reflexion/memory_test.go)<br>[strategy/reflexion/memory.go](../../../../sources/gollem-dev__gollem/strategy/reflexion/memory.go)<br>[llm/openai/embedding_test.go](../../../../sources/gollem-dev__gollem/llm/openai/embedding_test.go)<br>[llm/openai/embedding.go](../../../../sources/gollem-dev__gollem/llm/openai/embedding.go)<br>[llm/gemini/embedding_test.go](../../../../sources/gollem-dev__gollem/llm/gemini/embedding_test.go)<br>[llm/claude/embedding.go](../../../../sources/gollem-dev__gollem/llm/claude/embedding.go)<br>[examples/embedding/main.go](../../../../sources/gollem-dev__gollem/examples/embedding/main.go) |
| spec | 0 | 명확하지 않음 |
| eval | 80 | [execute_response_test.go](../../../../sources/gollem-dev__gollem/execute_response_test.go)<br>[export_test.go](../../../../sources/gollem-dev__gollem/export_test.go)<br>[generate_test.go](../../../../sources/gollem-dev__gollem/generate_test.go)<br>[gollem_test.go](../../../../sources/gollem-dev__gollem/gollem_test.go)<br>[history_test.go](../../../../sources/gollem-dev__gollem/history_test.go)<br>[llm_test.go](../../../../sources/gollem-dev__gollem/llm_test.go)<br>[message_test.go](../../../../sources/gollem-dev__gollem/message_test.go)<br>[query_test.go](../../../../sources/gollem-dev__gollem/query_test.go) |
| security | 0 | 명확하지 않음 |
| ci | 5 | [.github/workflows/gosec.yml](../../../../sources/gollem-dev__gollem/.github/workflows/gosec.yml)<br>[.github/workflows/integrity.yml](../../../../sources/gollem-dev__gollem/.github/workflows/integrity.yml)<br>[.github/workflows/lint.yml](../../../../sources/gollem-dev__gollem/.github/workflows/lint.yml)<br>[.github/workflows/test.yml](../../../../sources/gollem-dev__gollem/.github/workflows/test.yml)<br>[.github/workflows/trivy.yml](../../../../sources/gollem-dev__gollem/.github/workflows/trivy.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [CLAUDE.md](../../../../sources/gollem-dev__gollem/CLAUDE.md) |
| docs | 21 | [README.md](../../../../sources/gollem-dev__gollem/README.md)<br>[strategy/reflexion/README.md](../../../../sources/gollem-dev__gollem/strategy/reflexion/README.md)<br>[strategy/react/README.md](../../../../sources/gollem-dev__gollem/strategy/react/README.md)<br>[strategy/planexec/README.md](../../../../sources/gollem-dev__gollem/strategy/planexec/README.md)<br>[examples/README.md](../../../../sources/gollem-dev__gollem/examples/README.md)<br>[examples/subagent_middleware/README.md](../../../../sources/gollem-dev__gollem/examples/subagent_middleware/README.md)<br>[examples/json_schema/README.md](../../../../sources/gollem-dev__gollem/examples/json_schema/README.md)<br>[docs/debugging.md](../../../../sources/gollem-dev__gollem/docs/debugging.md) |
| config | 1 | [go.mod](../../../../sources/gollem-dev__gollem/go.mod) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 80 | [execute_response_test.go](../../../../sources/gollem-dev__gollem/execute_response_test.go)<br>[export_test.go](../../../../sources/gollem-dev__gollem/export_test.go)<br>[generate_test.go](../../../../sources/gollem-dev__gollem/generate_test.go)<br>[gollem_test.go](../../../../sources/gollem-dev__gollem/gollem_test.go)<br>[history_test.go](../../../../sources/gollem-dev__gollem/history_test.go)<br>[llm_test.go](../../../../sources/gollem-dev__gollem/llm_test.go) |
| CI workflow | 5 | [.github/workflows/gosec.yml](../../../../sources/gollem-dev__gollem/.github/workflows/gosec.yml)<br>[.github/workflows/integrity.yml](../../../../sources/gollem-dev__gollem/.github/workflows/integrity.yml)<br>[.github/workflows/lint.yml](../../../../sources/gollem-dev__gollem/.github/workflows/lint.yml)<br>[.github/workflows/test.yml](../../../../sources/gollem-dev__gollem/.github/workflows/test.yml)<br>[.github/workflows/trivy.yml](../../../../sources/gollem-dev__gollem/.github/workflows/trivy.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/gollem-dev__gollem/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `mcp/export_test.go`, `mcp/mcp_test.go`, `mcp/mcp.go`.
2. entrypoint를 따라 실행 흐름 확인: `examples/tracing/main.go`, `examples/tools/main.go`, `examples/subagent_middleware/main.go`.
3. agent/tool runtime 매핑: `tool_test.go`, `tool.go`, `templates/executor_prompt.md`.
4. retrieval/memory/indexing 확인: `strategy/reflexion/memory_test.go`, `strategy/reflexion/memory.go`, `llm/openai/embedding_test.go`.
5. test/eval 파일로 동작 검증: `execute_response_test.go`, `export_test.go`, `generate_test.go`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Go framework for agentic AI app with MCP and built in tools. 핵심 구조 신호는 Go, go.mod, README.md, CLAUDE.md, LICENSE, openai이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
