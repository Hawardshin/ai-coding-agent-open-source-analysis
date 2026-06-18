# cloudwego/eino Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

The ultimate LLM/AI application development framework in Go.

## 요약

- 조사 단위: `sources/cloudwego__eino` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 382 files, 76 directories, depth score 90, key references 9개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 config=go.mod이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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


## Repository Context

| Field | Value |
| --- | --- |
| Repository | cloudwego/eino |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | global |
| Language | Go |
| Stars | 11850 |
| Forks | 973 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/cloudwego__eino](../../../../sources/cloudwego__eino) |
| Existing report | [reports/global-trending/repositories/cloudwego__eino.md](../../../global-trending/repositories/cloudwego__eino.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 382 / 76 |
| Max observed depth | 6 |
| Top directories | .github, adk, callbacks, components, compose, examples, ext, flow, internal, schema, scripts, utils |
| Top extensions | .go: 338, .png: 16, .md: 8, .bin: 4, .yml: 4, .sh: 2, .yaml: 2, (none): 2, .gif: 1, .json: 1, .mod: 1, .sum: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| adk | top-level component | 1 |
| callbacks | top-level component | 1 |
| components | top-level component | 1 |
| compose | top-level component | 1 |
| examples | top-level component | 1 |
| ext | top-level component | 1 |
| flow | top-level component | 1 |
| internal | top-level component | 1 |
| schema | top-level component | 1 |
| scripts | top-level component | 1 |
| utils | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| config | [go.mod](../../../../sources/cloudwego__eino/go.mod) | config signal |
| docs | [README.md](../../../../sources/cloudwego__eino/README.md) | docs signal |
| docs | [README.zh_CN.md](../../../../sources/cloudwego__eino/README.zh_CN.md) | docs signal |
| eval | [utils/callbacks/template_test.go](../../../../sources/cloudwego__eino/utils/callbacks/template_test.go) | eval signal |
| eval | [schema/agentic_message_test.go](../../../../sources/cloudwego__eino/schema/agentic_message_test.go) | eval signal |
| eval | [schema/document_test.go](../../../../sources/cloudwego__eino/schema/document_test.go) | eval signal |
| eval | [schema/message_parser_test.go](../../../../sources/cloudwego__eino/schema/message_parser_test.go) | eval signal |
| ci | [.github/workflows/pr-check.yml](../../../../sources/cloudwego__eino/.github/workflows/pr-check.yml) | ci support |
| ci | [.github/workflows/tag-notification.yml](../../../../sources/cloudwego__eino/.github/workflows/tag-notification.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 55 | [schema/tool_test.go](../../../../sources/cloudwego__eino/schema/tool_test.go)<br>[schema/tool.go](../../../../sources/cloudwego__eino/schema/tool.go)<br>[internal/mock/adk/Agent_mock.go](../../../../sources/cloudwego__eino/internal/mock/adk/Agent_mock.go)<br>[flow/agent/agent_option.go](../../../../sources/cloudwego__eino/flow/agent/agent_option.go)<br>[flow/agent/utils.go](../../../../sources/cloudwego__eino/flow/agent/utils.go)<br>[flow/agent/react/callback.go](../../../../sources/cloudwego__eino/flow/agent/react/callback.go)<br>[flow/agent/react/doc.go](../../../../sources/cloudwego__eino/flow/agent/react/doc.go)<br>[flow/agent/react/option_test.go](../../../../sources/cloudwego__eino/flow/agent/react/option_test.go) |
| mcp | 0 | not obvious |
| retrieval | 24 | [internal/mock/components/embedding/Embedding_mock.go](../../../../sources/cloudwego__eino/internal/mock/components/embedding/Embedding_mock.go)<br>[compose/component_to_graph_node.go](../../../../sources/cloudwego__eino/compose/component_to_graph_node.go)<br>[compose/generic_graph.go](../../../../sources/cloudwego__eino/compose/generic_graph.go)<br>[compose/graph_add_node_options.go](../../../../sources/cloudwego__eino/compose/graph_add_node_options.go)<br>[compose/graph_call_options_test.go](../../../../sources/cloudwego__eino/compose/graph_call_options_test.go)<br>[compose/graph_call_options.go](../../../../sources/cloudwego__eino/compose/graph_call_options.go)<br>[compose/graph_compile_options.go](../../../../sources/cloudwego__eino/compose/graph_compile_options.go)<br>[compose/graph_manager.go](../../../../sources/cloudwego__eino/compose/graph_manager.go) |
| spec | 1 | [.github/static/img/eino/eino_architecture_overview.png](../../../../sources/cloudwego__eino/.github/static/img/eino/eino_architecture_overview.png) |
| eval | 138 | [utils/callbacks/template_test.go](../../../../sources/cloudwego__eino/utils/callbacks/template_test.go)<br>[schema/agentic_message_test.go](../../../../sources/cloudwego__eino/schema/agentic_message_test.go)<br>[schema/document_test.go](../../../../sources/cloudwego__eino/schema/document_test.go)<br>[schema/message_parser_test.go](../../../../sources/cloudwego__eino/schema/message_parser_test.go)<br>[schema/message_test.go](../../../../sources/cloudwego__eino/schema/message_test.go)<br>[schema/serialization_test.go](../../../../sources/cloudwego__eino/schema/serialization_test.go)<br>[schema/stream_copy_external_test.go](../../../../sources/cloudwego__eino/schema/stream_copy_external_test.go)<br>[schema/stream_oneof_test.go](../../../../sources/cloudwego__eino/schema/stream_oneof_test.go) |
| security | 0 | not obvious |
| ci | 3 | [.github/workflows/pr-check.yml](../../../../sources/cloudwego__eino/.github/workflows/pr-check.yml)<br>[.github/workflows/tag-notification.yml](../../../../sources/cloudwego__eino/.github/workflows/tag-notification.yml)<br>[.github/workflows/tests.yml](../../../../sources/cloudwego__eino/.github/workflows/tests.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 2 | [README.md](../../../../sources/cloudwego__eino/README.md)<br>[README.zh_CN.md](../../../../sources/cloudwego__eino/README.zh_CN.md) |
| config | 1 | [go.mod](../../../../sources/cloudwego__eino/go.mod) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 138 | [utils/callbacks/template_test.go](../../../../sources/cloudwego__eino/utils/callbacks/template_test.go)<br>[schema/agentic_message_test.go](../../../../sources/cloudwego__eino/schema/agentic_message_test.go)<br>[schema/document_test.go](../../../../sources/cloudwego__eino/schema/document_test.go)<br>[schema/message_parser_test.go](../../../../sources/cloudwego__eino/schema/message_parser_test.go)<br>[schema/message_test.go](../../../../sources/cloudwego__eino/schema/message_test.go)<br>[schema/serialization_test.go](../../../../sources/cloudwego__eino/schema/serialization_test.go) |
| CI workflows | 3 | [.github/workflows/pr-check.yml](../../../../sources/cloudwego__eino/.github/workflows/pr-check.yml)<br>[.github/workflows/tag-notification.yml](../../../../sources/cloudwego__eino/.github/workflows/tag-notification.yml)<br>[.github/workflows/tests.yml](../../../../sources/cloudwego__eino/.github/workflows/tests.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `go.mod`, `README.md`, `README.zh_CN.md`.
2. Map agent/tool runtime through: `schema/tool_test.go`, `schema/tool.go`, `internal/mock/adk/Agent_mock.go`.
3. Inspect retrieval/memory/indexing through: `internal/mock/components/embedding/Embedding_mock.go`, `compose/component_to_graph_node.go`, `compose/generic_graph.go`.
4. Verify behavior through test/eval files: `utils/callbacks/template_test.go`, `schema/agentic_message_test.go`, `schema/document_test.go`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 The ultimate LLM/AI application development framework in Go.. 핵심 구조 신호는 Go, go.mod, README.md, ci, docs이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
