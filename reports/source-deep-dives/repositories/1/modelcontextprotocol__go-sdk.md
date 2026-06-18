# modelcontextprotocol/go-sdk Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

The official Go SDK for Model Context Protocol servers and clients. Maintained in collaboration with Google.

## 요약

- 조사 단위: `sources/modelcontextprotocol__go-sdk` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 216 files, 64 directories, depth score 118, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=mcp/server.go, internal/readme/server/server.go, internal/docs/server.src.md이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | modelcontextprotocol/go-sdk |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | global |
| Language | Go |
| Stars | 4698 |
| Forks | 452 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/modelcontextprotocol__go-sdk](../../../../sources/modelcontextprotocol__go-sdk) |
| Existing report | [reports/global-trending/repositories/modelcontextprotocol__go-sdk.md](../../../global-trending/repositories/modelcontextprotocol__go-sdk.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 216 / 64 |
| Max observed depth | 5 |
| Top directories | .agents, .devcontainer, .github, auth, conformance, design, docs, examples, internal, jsonrpc, mcp, oauthex, scripts |
| Top extensions | .go: 141, .md: 34, .yml: 9, .txtar: 8, .txt: 6, .json: 3, .mod: 3, .sum: 3, (none): 3, .sh: 2, .svg: 2, .png: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| examples/server | examples workspace | 30 |
| docs | documentation surface | 14 |
| examples/auth | examples workspace | 6 |
| examples/client | examples workspace | 3 |
| examples/http | examples workspace | 2 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| auth | top-level component | 1 |
| conformance | top-level component | 1 |
| design | top-level component | 1 |
| examples | top-level component | 1 |
| internal | top-level component | 1 |
| jsonrpc | top-level component | 1 |
| mcp | top-level component | 1 |
| oauthex | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
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
| entrypoints | [mcp/server.go](../../../../sources/modelcontextprotocol__go-sdk/mcp/server.go) | entrypoints signal |
| entrypoints | [internal/readme/server/server.go](../../../../sources/modelcontextprotocol__go-sdk/internal/readme/server/server.go) | entrypoints signal |
| entrypoints | [internal/docs/server.src.md](../../../../sources/modelcontextprotocol__go-sdk/internal/docs/server.src.md) | entrypoints signal |
| entrypoints | [examples/server/toolschemas/main.go](../../../../sources/modelcontextprotocol__go-sdk/examples/server/toolschemas/main.go) | entrypoints signal |
| config | [go.mod](../../../../sources/modelcontextprotocol__go-sdk/go.mod) | config signal |
| config | [examples/server/rate-limiting/go.mod](../../../../sources/modelcontextprotocol__go-sdk/examples/server/rate-limiting/go.mod) | config signal |
| config | [examples/server/auth-middleware/go.mod](../../../../sources/modelcontextprotocol__go-sdk/examples/server/auth-middleware/go.mod) | config signal |
| ci | [.github/workflows/codeql.yml](../../../../sources/modelcontextprotocol__go-sdk/.github/workflows/codeql.yml) | ci signal |
| ci | [.github/workflows/conformance.yml](../../../../sources/modelcontextprotocol__go-sdk/.github/workflows/conformance.yml) | ci signal |
| ci | [.github/workflows/docs-check.yml](../../../../sources/modelcontextprotocol__go-sdk/.github/workflows/docs-check.yml) | ci signal |
| ci | [.github/workflows/nightly.yml](../../../../sources/modelcontextprotocol__go-sdk/.github/workflows/nightly.yml) | ci signal |
| docs | [mkdocs.yaml](../../../../sources/modelcontextprotocol__go-sdk/mkdocs.yaml) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 28 | [mcp/server.go](../../../../sources/modelcontextprotocol__go-sdk/mcp/server.go)<br>[internal/readme/server/server.go](../../../../sources/modelcontextprotocol__go-sdk/internal/readme/server/server.go)<br>[internal/docs/server.src.md](../../../../sources/modelcontextprotocol__go-sdk/internal/docs/server.src.md)<br>[examples/server/toolschemas/main.go](../../../../sources/modelcontextprotocol__go-sdk/examples/server/toolschemas/main.go)<br>[examples/server/sse/main.go](../../../../sources/modelcontextprotocol__go-sdk/examples/server/sse/main.go)<br>[examples/server/sequentialthinking/main.go](../../../../sources/modelcontextprotocol__go-sdk/examples/server/sequentialthinking/main.go)<br>[examples/server/rate-limiting/main.go](../../../../sources/modelcontextprotocol__go-sdk/examples/server/rate-limiting/main.go)<br>[examples/server/proxy/main.go](../../../../sources/modelcontextprotocol__go-sdk/examples/server/proxy/main.go) |
| agentRuntime | 9 | [AGENTS.md](../../../../sources/modelcontextprotocol__go-sdk/AGENTS.md)<br>[mcp/tool_example_test.go](../../../../sources/modelcontextprotocol__go-sdk/mcp/tool_example_test.go)<br>[mcp/tool_test.go](../../../../sources/modelcontextprotocol__go-sdk/mcp/tool_test.go)<br>[mcp/tool.go](../../../../sources/modelcontextprotocol__go-sdk/mcp/tool.go)<br>[mcp/testdata/conformance/server/tools.txtar](../../../../sources/modelcontextprotocol__go-sdk/mcp/testdata/conformance/server/tools.txtar)<br>[examples/server/memory/kb_test.go](../../../../sources/modelcontextprotocol__go-sdk/examples/server/memory/kb_test.go)<br>[examples/server/memory/kb.go](../../../../sources/modelcontextprotocol__go-sdk/examples/server/memory/kb.go)<br>[examples/server/memory/main.go](../../../../sources/modelcontextprotocol__go-sdk/examples/server/memory/main.go) |
| mcp | 73 | [mcp/capabilities_test.go](../../../../sources/modelcontextprotocol__go-sdk/mcp/capabilities_test.go)<br>[mcp/client_example_test.go](../../../../sources/modelcontextprotocol__go-sdk/mcp/client_example_test.go)<br>[mcp/client_list_test.go](../../../../sources/modelcontextprotocol__go-sdk/mcp/client_list_test.go)<br>[mcp/client_test.go](../../../../sources/modelcontextprotocol__go-sdk/mcp/client_test.go)<br>[mcp/client.go](../../../../sources/modelcontextprotocol__go-sdk/mcp/client.go)<br>[mcp/cmd_export_test.go](../../../../sources/modelcontextprotocol__go-sdk/mcp/cmd_export_test.go)<br>[mcp/cmd_test.go](../../../../sources/modelcontextprotocol__go-sdk/mcp/cmd_test.go)<br>[mcp/cmd.go](../../../../sources/modelcontextprotocol__go-sdk/mcp/cmd.go) |
| retrieval | 3 | [examples/server/memory/kb_test.go](../../../../sources/modelcontextprotocol__go-sdk/examples/server/memory/kb_test.go)<br>[examples/server/memory/kb.go](../../../../sources/modelcontextprotocol__go-sdk/examples/server/memory/kb.go)<br>[examples/server/memory/main.go](../../../../sources/modelcontextprotocol__go-sdk/examples/server/memory/main.go) |
| spec | 4 | [ROADMAP.md](../../../../sources/modelcontextprotocol__go-sdk/ROADMAP.md)<br>[mcp/testdata/conformance/server/spec-sep-973-additional-metadata.txtar](../../../../sources/modelcontextprotocol__go-sdk/mcp/testdata/conformance/server/spec-sep-973-additional-metadata.txtar)<br>[design/design.md](../../../../sources/modelcontextprotocol__go-sdk/design/design.md)<br>[design/mrtr.md](../../../../sources/modelcontextprotocol__go-sdk/design/mrtr.md) |
| eval | 60 | [copyright_test.go](../../../../sources/modelcontextprotocol__go-sdk/copyright_test.go)<br>[oauthex/audience_test.go](../../../../sources/modelcontextprotocol__go-sdk/oauthex/audience_test.go)<br>[oauthex/auth_meta_test.go](../../../../sources/modelcontextprotocol__go-sdk/oauthex/auth_meta_test.go)<br>[oauthex/client_test.go](../../../../sources/modelcontextprotocol__go-sdk/oauthex/client_test.go)<br>[oauthex/dcr_test.go](../../../../sources/modelcontextprotocol__go-sdk/oauthex/dcr_test.go)<br>[oauthex/oauthex_test.go](../../../../sources/modelcontextprotocol__go-sdk/oauthex/oauthex_test.go)<br>[oauthex/resource_meta_test.go](../../../../sources/modelcontextprotocol__go-sdk/oauthex/resource_meta_test.go)<br>[oauthex/token_exchange_test.go](../../../../sources/modelcontextprotocol__go-sdk/oauthex/token_exchange_test.go) |
| security | 25 | [SECURITY.md](../../../../sources/modelcontextprotocol__go-sdk/SECURITY.md)<br>[oauthex/auth_meta_test.go](../../../../sources/modelcontextprotocol__go-sdk/oauthex/auth_meta_test.go)<br>[oauthex/auth_meta.go](../../../../sources/modelcontextprotocol__go-sdk/oauthex/auth_meta.go)<br>[oauthex/testdata/client-auth-meta.json](../../../../sources/modelcontextprotocol__go-sdk/oauthex/testdata/client-auth-meta.json)<br>[oauthex/testdata/google-auth-meta.json](../../../../sources/modelcontextprotocol__go-sdk/oauthex/testdata/google-auth-meta.json)<br>[examples/server/auth-middleware/go.mod](../../../../sources/modelcontextprotocol__go-sdk/examples/server/auth-middleware/go.mod)<br>[examples/server/auth-middleware/go.sum](../../../../sources/modelcontextprotocol__go-sdk/examples/server/auth-middleware/go.sum)<br>[examples/server/auth-middleware/main.go](../../../../sources/modelcontextprotocol__go-sdk/examples/server/auth-middleware/main.go) |
| ci | 7 | [.github/workflows/codeql.yml](../../../../sources/modelcontextprotocol__go-sdk/.github/workflows/codeql.yml)<br>[.github/workflows/conformance.yml](../../../../sources/modelcontextprotocol__go-sdk/.github/workflows/conformance.yml)<br>[.github/workflows/docs-check.yml](../../../../sources/modelcontextprotocol__go-sdk/.github/workflows/docs-check.yml)<br>[.github/workflows/nightly.yml](../../../../sources/modelcontextprotocol__go-sdk/.github/workflows/nightly.yml)<br>[.github/workflows/publish-docs.yml](../../../../sources/modelcontextprotocol__go-sdk/.github/workflows/publish-docs.yml)<br>[.github/workflows/scorecard.yml](../../../../sources/modelcontextprotocol__go-sdk/.github/workflows/scorecard.yml)<br>[.github/workflows/test.yml](../../../../sources/modelcontextprotocol__go-sdk/.github/workflows/test.yml) |
| container | 0 | not obvious |
| instruction | 1 | [AGENTS.md](../../../../sources/modelcontextprotocol__go-sdk/AGENTS.md) |
| docs | 32 | [mkdocs.yaml](../../../../sources/modelcontextprotocol__go-sdk/mkdocs.yaml)<br>[README.md](../../../../sources/modelcontextprotocol__go-sdk/README.md)<br>[internal/readme/contributing.src.md](../../../../sources/modelcontextprotocol__go-sdk/internal/readme/contributing.src.md)<br>[internal/readme/doc.go](../../../../sources/modelcontextprotocol__go-sdk/internal/readme/doc.go)<br>[internal/readme/README.src.md](../../../../sources/modelcontextprotocol__go-sdk/internal/readme/README.src.md)<br>[internal/readme/server/server.go](../../../../sources/modelcontextprotocol__go-sdk/internal/readme/server/server.go)<br>[internal/readme/client/client.go](../../../../sources/modelcontextprotocol__go-sdk/internal/readme/client/client.go)<br>[internal/docs/client.src.md](../../../../sources/modelcontextprotocol__go-sdk/internal/docs/client.src.md) |
| config | 3 | [go.mod](../../../../sources/modelcontextprotocol__go-sdk/go.mod)<br>[examples/server/rate-limiting/go.mod](../../../../sources/modelcontextprotocol__go-sdk/examples/server/rate-limiting/go.mod)<br>[examples/server/auth-middleware/go.mod](../../../../sources/modelcontextprotocol__go-sdk/examples/server/auth-middleware/go.mod) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 60 | [copyright_test.go](../../../../sources/modelcontextprotocol__go-sdk/copyright_test.go)<br>[oauthex/audience_test.go](../../../../sources/modelcontextprotocol__go-sdk/oauthex/audience_test.go)<br>[oauthex/auth_meta_test.go](../../../../sources/modelcontextprotocol__go-sdk/oauthex/auth_meta_test.go)<br>[oauthex/client_test.go](../../../../sources/modelcontextprotocol__go-sdk/oauthex/client_test.go)<br>[oauthex/dcr_test.go](../../../../sources/modelcontextprotocol__go-sdk/oauthex/dcr_test.go)<br>[oauthex/oauthex_test.go](../../../../sources/modelcontextprotocol__go-sdk/oauthex/oauthex_test.go) |
| CI workflows | 7 | [.github/workflows/codeql.yml](../../../../sources/modelcontextprotocol__go-sdk/.github/workflows/codeql.yml)<br>[.github/workflows/conformance.yml](../../../../sources/modelcontextprotocol__go-sdk/.github/workflows/conformance.yml)<br>[.github/workflows/docs-check.yml](../../../../sources/modelcontextprotocol__go-sdk/.github/workflows/docs-check.yml)<br>[.github/workflows/nightly.yml](../../../../sources/modelcontextprotocol__go-sdk/.github/workflows/nightly.yml)<br>[.github/workflows/publish-docs.yml](../../../../sources/modelcontextprotocol__go-sdk/.github/workflows/publish-docs.yml)<br>[.github/workflows/scorecard.yml](../../../../sources/modelcontextprotocol__go-sdk/.github/workflows/scorecard.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 25 | [SECURITY.md](../../../../sources/modelcontextprotocol__go-sdk/SECURITY.md)<br>[oauthex/auth_meta_test.go](../../../../sources/modelcontextprotocol__go-sdk/oauthex/auth_meta_test.go)<br>[oauthex/auth_meta.go](../../../../sources/modelcontextprotocol__go-sdk/oauthex/auth_meta.go)<br>[oauthex/testdata/client-auth-meta.json](../../../../sources/modelcontextprotocol__go-sdk/oauthex/testdata/client-auth-meta.json)<br>[oauthex/testdata/google-auth-meta.json](../../../../sources/modelcontextprotocol__go-sdk/oauthex/testdata/google-auth-meta.json)<br>[examples/server/auth-middleware/go.mod](../../../../sources/modelcontextprotocol__go-sdk/examples/server/auth-middleware/go.mod) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/modelcontextprotocol__go-sdk/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `mcp/server.go`, `internal/readme/server/server.go`, `internal/docs/server.src.md`.
2. Trace execution through entrypoints: `mcp/server.go`, `internal/readme/server/server.go`, `internal/docs/server.src.md`.
3. Map agent/tool runtime through: `AGENTS.md`, `mcp/tool_example_test.go`, `mcp/tool_test.go`.
4. Inspect retrieval/memory/indexing through: `examples/server/memory/kb_test.go`, `examples/server/memory/kb.go`, `examples/server/memory/main.go`.
5. Verify behavior through test/eval files: `copyright_test.go`, `oauthex/audience_test.go`, `oauthex/auth_meta_test.go`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 The official Go SDK for Model Context Protocol servers and clients. Maintained in collaboration with Google.. 핵심 구조 신호는 Go, go.mod, README.md, AGENTS.md, LICENSE, modelcontextprotocol이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
