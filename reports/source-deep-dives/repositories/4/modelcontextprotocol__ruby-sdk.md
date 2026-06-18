# modelcontextprotocol/ruby-sdk Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

The official Ruby SDK for the Model Context Protocol.

## 요약

- 조사 단위: `sources/modelcontextprotocol__ruby-sdk` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 155 files, 32 directories, depth score 106, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=lib/mcp/server.rb, conformance/server.rb, bin/console이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | modelcontextprotocol/ruby-sdk |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | global |
| Language | Ruby |
| Stars | 852 |
| Forks | 119 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/modelcontextprotocol__ruby-sdk](../../../../sources/modelcontextprotocol__ruby-sdk) |
| Existing report | [reports/global-trending/repositories/modelcontextprotocol__ruby-sdk.md](../../../global-trending/repositories/modelcontextprotocol__ruby-sdk.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 155 / 32 |
| Max observed depth | 5 |
| Top directories | .github, bin, conformance, docs, examples, lib, test |
| Top extensions | .rb: 113, .md: 13, (none): 9, .yml: 8, .svg: 4, .html: 3, .scss: 3, .gemspec: 1, .sh: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 19 |
| lib | source boundary | 18 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| conformance | top-level component | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| test | validation surface | 1 |


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
| entrypoints | [lib/mcp/server.rb](../../../../sources/modelcontextprotocol__ruby-sdk/lib/mcp/server.rb) | entrypoints signal |
| entrypoints | [conformance/server.rb](../../../../sources/modelcontextprotocol__ruby-sdk/conformance/server.rb) | entrypoints signal |
| entrypoints | [bin/console](../../../../sources/modelcontextprotocol__ruby-sdk/bin/console) | entrypoints signal |
| entrypoints | [bin/generate-gh-pages.sh](../../../../sources/modelcontextprotocol__ruby-sdk/bin/generate-gh-pages.sh) | entrypoints signal |
| ci | [.github/workflows/ci.yml](../../../../sources/modelcontextprotocol__ruby-sdk/.github/workflows/ci.yml) | ci signal |
| ci | [.github/workflows/conformance.yml](../../../../sources/modelcontextprotocol__ruby-sdk/.github/workflows/conformance.yml) | ci signal |
| ci | [.github/workflows/release.yml](../../../../sources/modelcontextprotocol__ruby-sdk/.github/workflows/release.yml) | ci signal |
| docs | [README.md](../../../../sources/modelcontextprotocol__ruby-sdk/README.md) | docs signal |
| docs | [examples/README.md](../../../../sources/modelcontextprotocol__ruby-sdk/examples/README.md) | docs signal |
| docs | [docs/_config.yml](../../../../sources/modelcontextprotocol__ruby-sdk/docs/_config.yml) | docs signal |
| docs | [docs/building-clients.md](../../../../sources/modelcontextprotocol__ruby-sdk/docs/building-clients.md) | docs signal |
| eval | [test/instrumentation_test_helper.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/instrumentation_test_helper.rb) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 6 | [lib/mcp/server.rb](../../../../sources/modelcontextprotocol__ruby-sdk/lib/mcp/server.rb)<br>[conformance/server.rb](../../../../sources/modelcontextprotocol__ruby-sdk/conformance/server.rb)<br>[bin/console](../../../../sources/modelcontextprotocol__ruby-sdk/bin/console)<br>[bin/generate-gh-pages.sh](../../../../sources/modelcontextprotocol__ruby-sdk/bin/generate-gh-pages.sh)<br>[bin/rake](../../../../sources/modelcontextprotocol__ruby-sdk/bin/rake)<br>[bin/setup](../../../../sources/modelcontextprotocol__ruby-sdk/bin/setup) |
| agentRuntime | 15 | [AGENTS.md](../../../../sources/modelcontextprotocol__ruby-sdk/AGENTS.md)<br>[test/mcp/tool_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/tool_test.rb)<br>[test/mcp/tool/annotations_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/tool/annotations_test.rb)<br>[test/mcp/tool/input_schema_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/tool/input_schema_test.rb)<br>[test/mcp/tool/output_schema_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/tool/output_schema_test.rb)<br>[test/mcp/tool/response_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/tool/response_test.rb)<br>[test/mcp/tool/schema_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/tool/schema_test.rb)<br>[test/mcp/client/tool_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/client/tool_test.rb) |
| mcp | 100 | [mcp.gemspec](../../../../sources/modelcontextprotocol__ruby-sdk/mcp.gemspec)<br>[test/mcp/annotations_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/annotations_test.rb)<br>[test/mcp/cancellation_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/cancellation_test.rb)<br>[test/mcp/client_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/client_test.rb)<br>[test/mcp/configuration_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/configuration_test.rb)<br>[test/mcp/content_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/content_test.rb)<br>[test/mcp/icon_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/icon_test.rb)<br>[test/mcp/instrumentation_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/instrumentation_test.rb) |
| retrieval | 3 | [lib/mcp/client/oauth/in_memory_storage.rb](../../../../sources/modelcontextprotocol__ruby-sdk/lib/mcp/client/oauth/in_memory_storage.rb)<br>[docs/index.md](../../../../sources/modelcontextprotocol__ruby-sdk/docs/index.md)<br>[docs/latest/index.html](../../../../sources/modelcontextprotocol__ruby-sdk/docs/latest/index.html) |
| spec | 0 | not obvious |
| eval | 53 | [test/instrumentation_test_helper.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/instrumentation_test_helper.rb)<br>[test/json_rpc_handler_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/json_rpc_handler_test.rb)<br>[test/test_helper.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/test_helper.rb)<br>[test/mcp/annotations_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/annotations_test.rb)<br>[test/mcp/cancellation_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/cancellation_test.rb)<br>[test/mcp/client_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/client_test.rb)<br>[test/mcp/configuration_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/configuration_test.rb)<br>[test/mcp/content_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/content_test.rb) |
| security | 15 | [SECURITY.md](../../../../sources/modelcontextprotocol__ruby-sdk/SECURITY.md)<br>[test/mcp/client/oauth/client_credentials_provider_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/client/oauth/client_credentials_provider_test.rb)<br>[test/mcp/client/oauth/discovery_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/client/oauth/discovery_test.rb)<br>[test/mcp/client/oauth/flow_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/client/oauth/flow_test.rb)<br>[test/mcp/client/oauth/http_oauth_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/client/oauth/http_oauth_test.rb)<br>[test/mcp/client/oauth/pkce_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/client/oauth/pkce_test.rb)<br>[test/mcp/client/oauth/provider_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/client/oauth/provider_test.rb)<br>[lib/mcp/client/oauth.rb](../../../../sources/modelcontextprotocol__ruby-sdk/lib/mcp/client/oauth.rb) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/modelcontextprotocol__ruby-sdk/.github/workflows/ci.yml)<br>[.github/workflows/conformance.yml](../../../../sources/modelcontextprotocol__ruby-sdk/.github/workflows/conformance.yml)<br>[.github/workflows/release.yml](../../../../sources/modelcontextprotocol__ruby-sdk/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 2 | [AGENTS.md](../../../../sources/modelcontextprotocol__ruby-sdk/AGENTS.md)<br>[CLAUDE.md](../../../../sources/modelcontextprotocol__ruby-sdk/CLAUDE.md) |
| docs | 19 | [README.md](../../../../sources/modelcontextprotocol__ruby-sdk/README.md)<br>[examples/README.md](../../../../sources/modelcontextprotocol__ruby-sdk/examples/README.md)<br>[docs/_config.yml](../../../../sources/modelcontextprotocol__ruby-sdk/docs/_config.yml)<br>[docs/building-clients.md](../../../../sources/modelcontextprotocol__ruby-sdk/docs/building-clients.md)<br>[docs/building-servers.md](../../../../sources/modelcontextprotocol__ruby-sdk/docs/building-servers.md)<br>[docs/CNAME](../../../../sources/modelcontextprotocol__ruby-sdk/docs/CNAME)<br>[docs/index.md](../../../../sources/modelcontextprotocol__ruby-sdk/docs/index.md)<br>[docs/installation.md](../../../../sources/modelcontextprotocol__ruby-sdk/docs/installation.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 53 | [test/instrumentation_test_helper.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/instrumentation_test_helper.rb)<br>[test/json_rpc_handler_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/json_rpc_handler_test.rb)<br>[test/test_helper.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/test_helper.rb)<br>[test/mcp/annotations_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/annotations_test.rb)<br>[test/mcp/cancellation_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/cancellation_test.rb)<br>[test/mcp/client_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/client_test.rb) |
| CI workflows | 3 | [.github/workflows/ci.yml](../../../../sources/modelcontextprotocol__ruby-sdk/.github/workflows/ci.yml)<br>[.github/workflows/conformance.yml](../../../../sources/modelcontextprotocol__ruby-sdk/.github/workflows/conformance.yml)<br>[.github/workflows/release.yml](../../../../sources/modelcontextprotocol__ruby-sdk/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 15 | [SECURITY.md](../../../../sources/modelcontextprotocol__ruby-sdk/SECURITY.md)<br>[test/mcp/client/oauth/client_credentials_provider_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/client/oauth/client_credentials_provider_test.rb)<br>[test/mcp/client/oauth/discovery_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/client/oauth/discovery_test.rb)<br>[test/mcp/client/oauth/flow_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/client/oauth/flow_test.rb)<br>[test/mcp/client/oauth/http_oauth_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/client/oauth/http_oauth_test.rb)<br>[test/mcp/client/oauth/pkce_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/client/oauth/pkce_test.rb) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/modelcontextprotocol__ruby-sdk/AGENTS.md)<br>[CLAUDE.md](../../../../sources/modelcontextprotocol__ruby-sdk/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `lib/mcp/server.rb`, `conformance/server.rb`, `bin/console`.
2. Trace execution through entrypoints: `lib/mcp/server.rb`, `conformance/server.rb`, `bin/console`.
3. Map agent/tool runtime through: `AGENTS.md`, `test/mcp/tool_test.rb`, `test/mcp/tool/annotations_test.rb`.
4. Inspect retrieval/memory/indexing through: `lib/mcp/client/oauth/in_memory_storage.rb`, `docs/index.md`, `docs/latest/index.html`.
5. Verify behavior through test/eval files: `test/instrumentation_test_helper.rb`, `test/json_rpc_handler_test.rb`, `test/test_helper.rb`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 The official Ruby SDK for the Model Context Protocol.. 핵심 구조 신호는 Ruby, README.md, AGENTS.md, CLAUDE.md, LICENSE, tests이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
