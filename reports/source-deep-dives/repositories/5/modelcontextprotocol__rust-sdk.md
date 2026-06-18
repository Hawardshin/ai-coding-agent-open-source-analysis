# modelcontextprotocol/rust-sdk Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

The official Rust SDK for the Model Context Protocol

## 요약

- 조사 단위: `sources/modelcontextprotocol__rust-sdk` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 244 files, 56 directories, depth score 115, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=examples/simple-chat-client/src/bin/simple_chat.rs, crates/rmcp-macros/src/lib.rs, crates/rmcp/tests/test_with_python/server.py이고, 의존성 단서는 mcp, modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | modelcontextprotocol/rust-sdk |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | global |
| Language | Rust |
| Stars | 3526 |
| Forks | 542 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/modelcontextprotocol__rust-sdk](../../../../sources/modelcontextprotocol__rust-sdk) |
| Existing report | [reports/global-trending/repositories/modelcontextprotocol__rust-sdk.md](../../../global-trending/repositories/modelcontextprotocol__rust-sdk.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 244 / 56 |
| Max observed depth | 8 |
| Top directories | .devcontainer, .githooks, .github, conformance, crates, docs, examples, scripts |
| Top extensions | .rs: 175, .md: 19, .toml: 16, .json: 9, .yml: 8, (none): 7, .js: 4, .html: 3, .py: 2, .sh: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| crates/rmcp | crates workspace | 58 |
| examples/servers | examples workspace | 12 |
| crates/rmcp-macros | crates workspace | 6 |
| docs | documentation surface | 6 |
| examples/clients | examples workspace | 5 |
| examples/simple-chat-client | examples workspace | 4 |
| examples/wasi | examples workspace | 2 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| conformance | top-level component | 1 |
| crates | source boundary | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| examples/transport | examples workspace | 1 |
| scripts | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp, modelcontextprotocol |
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
| entrypoints | [examples/simple-chat-client/src/bin/simple_chat.rs](../../../../sources/modelcontextprotocol__rust-sdk/examples/simple-chat-client/src/bin/simple_chat.rs) | entrypoints signal |
| entrypoints | [crates/rmcp-macros/src/lib.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp-macros/src/lib.rs) | entrypoints signal |
| entrypoints | [crates/rmcp/tests/test_with_python/server.py](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_with_python/server.py) | entrypoints signal |
| entrypoints | [crates/rmcp/tests/test_with_js/server.js](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_with_js/server.js) | entrypoints signal |
| config | [Cargo.toml](../../../../sources/modelcontextprotocol__rust-sdk/Cargo.toml) | config signal |
| config | [examples/wasi/Cargo.toml](../../../../sources/modelcontextprotocol__rust-sdk/examples/wasi/Cargo.toml) | config signal |
| config | [examples/transport/Cargo.toml](../../../../sources/modelcontextprotocol__rust-sdk/examples/transport/Cargo.toml) | config signal |
| config | [examples/simple-chat-client/Cargo.toml](../../../../sources/modelcontextprotocol__rust-sdk/examples/simple-chat-client/Cargo.toml) | config signal |
| ci | [.github/workflows/auto-label-pr.yml](../../../../sources/modelcontextprotocol__rust-sdk/.github/workflows/auto-label-pr.yml) | ci signal |
| ci | [.github/workflows/ci.yml](../../../../sources/modelcontextprotocol__rust-sdk/.github/workflows/ci.yml) | ci signal |
| ci | [.github/workflows/codeql.yml](../../../../sources/modelcontextprotocol__rust-sdk/.github/workflows/codeql.yml) | ci signal |
| ci | [.github/workflows/release-plz.yml](../../../../sources/modelcontextprotocol__rust-sdk/.github/workflows/release-plz.yml) | ci signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 9 | [examples/simple-chat-client/src/bin/simple_chat.rs](../../../../sources/modelcontextprotocol__rust-sdk/examples/simple-chat-client/src/bin/simple_chat.rs)<br>[crates/rmcp-macros/src/lib.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp-macros/src/lib.rs)<br>[crates/rmcp/tests/test_with_python/server.py](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_with_python/server.py)<br>[crates/rmcp/tests/test_with_js/server.js](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_with_js/server.js)<br>[crates/rmcp/src/lib.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/src/lib.rs)<br>[crates/rmcp/src/service/server.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/src/service/server.rs)<br>[crates/rmcp/src/handler/server.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/src/handler/server.rs)<br>[conformance/src/bin/client.rs](../../../../sources/modelcontextprotocol__rust-sdk/conformance/src/bin/client.rs) |
| agentRuntime | 11 | [examples/simple-chat-client/src/tool.rs](../../../../sources/modelcontextprotocol__rust-sdk/examples/simple-chat-client/src/tool.rs)<br>[examples/servers/src/memory_stdio.rs](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/src/memory_stdio.rs)<br>[crates/rmcp-macros/src/tool_handler.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp-macros/src/tool_handler.rs)<br>[crates/rmcp-macros/src/tool_router.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp-macros/src/tool_router.rs)<br>[crates/rmcp-macros/src/tool.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp-macros/src/tool.rs)<br>[crates/rmcp/tests/test_deserialization/tool_list_result.json](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_deserialization/tool_list_result.json)<br>[crates/rmcp/src/model/tool.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/src/model/tool.rs)<br>[crates/rmcp/src/handler/server/tool_name_validation.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/src/handler/server/tool_name_validation.rs) |
| mcp | 3 | [examples/servers/templates/mcp_oauth_authorize.html](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/templates/mcp_oauth_authorize.html)<br>[examples/servers/src/html/mcp_oauth_index.html](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/src/html/mcp_oauth_index.html)<br>[.github/instructions/fetch-mcp-doc.instructions.md](../../../../sources/modelcontextprotocol__rust-sdk/.github/instructions/fetch-mcp-doc.instructions.md) |
| retrieval | 2 | [examples/servers/src/memory_stdio.rs](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/src/memory_stdio.rs)<br>[examples/servers/src/html/mcp_oauth_index.html](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/src/html/mcp_oauth_index.html) |
| spec | 1 | [ROADMAP.md](../../../../sources/modelcontextprotocol__rust-sdk/ROADMAP.md) |
| eval | 72 | [crates/rmcp/tests/test_client_credentials.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_client_credentials.rs)<br>[crates/rmcp/tests/test_client_initialization.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_client_initialization.rs)<br>[crates/rmcp/tests/test_close_connection.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_close_connection.rs)<br>[crates/rmcp/tests/test_completion.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_completion.rs)<br>[crates/rmcp/tests/test_complex_schema.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_complex_schema.rs)<br>[crates/rmcp/tests/test_custom_headers.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_custom_headers.rs)<br>[crates/rmcp/tests/test_custom_request.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_custom_request.rs)<br>[crates/rmcp/tests/test_deserialization.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_deserialization.rs) |
| security | 13 | [SECURITY.md](../../../../sources/modelcontextprotocol__rust-sdk/SECURITY.md)<br>[examples/servers/templates/mcp_oauth_authorize.html](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/templates/mcp_oauth_authorize.html)<br>[examples/servers/src/cimd_auth_streamhttp.rs](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/src/cimd_auth_streamhttp.rs)<br>[examples/servers/src/complex_auth_streamhttp.rs](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/src/complex_auth_streamhttp.rs)<br>[examples/servers/src/simple_auth_streamhttp.rs](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/src/simple_auth_streamhttp.rs)<br>[examples/servers/src/html/mcp_oauth_index.html](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/src/html/mcp_oauth_index.html)<br>[examples/clients/src/auth/callback.html](../../../../sources/modelcontextprotocol__rust-sdk/examples/clients/src/auth/callback.html)<br>[examples/clients/src/auth/client_credentials.rs](../../../../sources/modelcontextprotocol__rust-sdk/examples/clients/src/auth/client_credentials.rs) |
| ci | 5 | [.github/workflows/auto-label-pr.yml](../../../../sources/modelcontextprotocol__rust-sdk/.github/workflows/auto-label-pr.yml)<br>[.github/workflows/ci.yml](../../../../sources/modelcontextprotocol__rust-sdk/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/modelcontextprotocol__rust-sdk/.github/workflows/codeql.yml)<br>[.github/workflows/release-plz.yml](../../../../sources/modelcontextprotocol__rust-sdk/.github/workflows/release-plz.yml)<br>[.github/workflows/triage.yml](../../../../sources/modelcontextprotocol__rust-sdk/.github/workflows/triage.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 12 | [README.md](../../../../sources/modelcontextprotocol__rust-sdk/README.md)<br>[examples/README.md](../../../../sources/modelcontextprotocol__rust-sdk/examples/README.md)<br>[examples/wasi/README.md](../../../../sources/modelcontextprotocol__rust-sdk/examples/wasi/README.md)<br>[examples/simple-chat-client/README.md](../../../../sources/modelcontextprotocol__rust-sdk/examples/simple-chat-client/README.md)<br>[examples/servers/README.md](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/README.md)<br>[examples/clients/README.md](../../../../sources/modelcontextprotocol__rust-sdk/examples/clients/README.md)<br>[docs/CONTRIBUTE.MD](../../../../sources/modelcontextprotocol__rust-sdk/docs/CONTRIBUTE.MD)<br>[docs/DEVCONTAINER.md](../../../../sources/modelcontextprotocol__rust-sdk/docs/DEVCONTAINER.md) |
| config | 11 | [Cargo.toml](../../../../sources/modelcontextprotocol__rust-sdk/Cargo.toml)<br>[examples/wasi/Cargo.toml](../../../../sources/modelcontextprotocol__rust-sdk/examples/wasi/Cargo.toml)<br>[examples/transport/Cargo.toml](../../../../sources/modelcontextprotocol__rust-sdk/examples/transport/Cargo.toml)<br>[examples/simple-chat-client/Cargo.toml](../../../../sources/modelcontextprotocol__rust-sdk/examples/simple-chat-client/Cargo.toml)<br>[examples/servers/Cargo.toml](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/Cargo.toml)<br>[examples/clients/Cargo.toml](../../../../sources/modelcontextprotocol__rust-sdk/examples/clients/Cargo.toml)<br>[crates/rmcp-macros/Cargo.toml](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp-macros/Cargo.toml)<br>[crates/rmcp/Cargo.toml](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 72 | [crates/rmcp/tests/test_client_credentials.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_client_credentials.rs)<br>[crates/rmcp/tests/test_client_initialization.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_client_initialization.rs)<br>[crates/rmcp/tests/test_close_connection.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_close_connection.rs)<br>[crates/rmcp/tests/test_completion.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_completion.rs)<br>[crates/rmcp/tests/test_complex_schema.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_complex_schema.rs)<br>[crates/rmcp/tests/test_custom_headers.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_custom_headers.rs) |
| CI workflows | 5 | [.github/workflows/auto-label-pr.yml](../../../../sources/modelcontextprotocol__rust-sdk/.github/workflows/auto-label-pr.yml)<br>[.github/workflows/ci.yml](../../../../sources/modelcontextprotocol__rust-sdk/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/modelcontextprotocol__rust-sdk/.github/workflows/codeql.yml)<br>[.github/workflows/release-plz.yml](../../../../sources/modelcontextprotocol__rust-sdk/.github/workflows/release-plz.yml)<br>[.github/workflows/triage.yml](../../../../sources/modelcontextprotocol__rust-sdk/.github/workflows/triage.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 13 | [SECURITY.md](../../../../sources/modelcontextprotocol__rust-sdk/SECURITY.md)<br>[examples/servers/templates/mcp_oauth_authorize.html](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/templates/mcp_oauth_authorize.html)<br>[examples/servers/src/cimd_auth_streamhttp.rs](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/src/cimd_auth_streamhttp.rs)<br>[examples/servers/src/complex_auth_streamhttp.rs](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/src/complex_auth_streamhttp.rs)<br>[examples/servers/src/simple_auth_streamhttp.rs](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/src/simple_auth_streamhttp.rs)<br>[examples/servers/src/html/mcp_oauth_index.html](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/src/html/mcp_oauth_index.html) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `examples/simple-chat-client/src/bin/simple_chat.rs`, `crates/rmcp-macros/src/lib.rs`, `crates/rmcp/tests/test_with_python/server.py`.
2. Trace execution through entrypoints: `examples/simple-chat-client/src/bin/simple_chat.rs`, `crates/rmcp-macros/src/lib.rs`, `crates/rmcp/tests/test_with_python/server.py`.
3. Map agent/tool runtime through: `examples/simple-chat-client/src/tool.rs`, `examples/servers/src/memory_stdio.rs`, `crates/rmcp-macros/src/tool_handler.rs`.
4. Inspect retrieval/memory/indexing through: `examples/servers/src/memory_stdio.rs`, `examples/servers/src/html/mcp_oauth_index.html`.
5. Verify behavior through test/eval files: `crates/rmcp/tests/test_client_credentials.rs`, `crates/rmcp/tests/test_client_initialization.rs`, `crates/rmcp/tests/test_close_connection.rs`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 The official Rust SDK for the Model Context Protocol. 핵심 구조 신호는 Rust, Cargo.toml, README.md, LICENSE, modelcontextprotocol, mcp이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
