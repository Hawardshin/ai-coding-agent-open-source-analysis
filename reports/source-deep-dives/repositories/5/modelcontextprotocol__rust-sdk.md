# modelcontextprotocol/rust-sdk 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

The official Rust SDK for the Model Context Protocol

## 요약

- 조사 단위: `sources/modelcontextprotocol__rust-sdk` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 244 files, 56 directories, depth score 109, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=examples/simple-chat-client/src/bin/simple_chat.rs, crates/rmcp-macros/src/lib.rs, crates/rmcp/tests/test_with_python/server.py이고, 의존성 단서는 mcp, modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | modelcontextprotocol/rust-sdk |
| 주제 | 개발 생산성/DevTools / 개발 생산성/DevTools |
| Region | global |
| Language | Rust |
| Stars | 3526 |
| Forks | 542 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/modelcontextprotocol__rust-sdk](../../../../sources/modelcontextprotocol__rust-sdk) |
| 기존 보고서 | [reports/global-trending/repositories/modelcontextprotocol__rust-sdk.md](../../../global-trending/repositories/modelcontextprotocol__rust-sdk.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 244 / 56 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .devcontainer, .githooks, .github, conformance, crates, docs, examples, scripts |
| 상위 확장자 | .rs: 175, .md: 19, .toml: 16, .json: 9, .yml: 8, (none): 7, .js: 4, .html: 3, .py: 2, .sh: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp, modelcontextprotocol |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 9 | [examples/simple-chat-client/src/bin/simple_chat.rs](../../../../sources/modelcontextprotocol__rust-sdk/examples/simple-chat-client/src/bin/simple_chat.rs)<br>[crates/rmcp-macros/src/lib.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp-macros/src/lib.rs)<br>[crates/rmcp/tests/test_with_python/server.py](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_with_python/server.py)<br>[crates/rmcp/tests/test_with_js/server.js](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_with_js/server.js)<br>[crates/rmcp/src/lib.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/src/lib.rs)<br>[crates/rmcp/src/service/server.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/src/service/server.rs)<br>[crates/rmcp/src/handler/server.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/src/handler/server.rs)<br>[conformance/src/bin/client.rs](../../../../sources/modelcontextprotocol__rust-sdk/conformance/src/bin/client.rs) |
| agentRuntime | 11 | [examples/simple-chat-client/src/tool.rs](../../../../sources/modelcontextprotocol__rust-sdk/examples/simple-chat-client/src/tool.rs)<br>[examples/servers/src/memory_stdio.rs](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/src/memory_stdio.rs)<br>[crates/rmcp-macros/src/tool_handler.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp-macros/src/tool_handler.rs)<br>[crates/rmcp-macros/src/tool_router.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp-macros/src/tool_router.rs)<br>[crates/rmcp-macros/src/tool.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp-macros/src/tool.rs)<br>[crates/rmcp/tests/test_deserialization/tool_list_result.json](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_deserialization/tool_list_result.json)<br>[crates/rmcp/src/model/tool.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/src/model/tool.rs)<br>[crates/rmcp/src/handler/server/tool_name_validation.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/src/handler/server/tool_name_validation.rs) |
| mcp | 3 | [examples/servers/templates/mcp_oauth_authorize.html](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/templates/mcp_oauth_authorize.html)<br>[examples/servers/src/html/mcp_oauth_index.html](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/src/html/mcp_oauth_index.html)<br>[.github/instructions/fetch-mcp-doc.instructions.md](../../../../sources/modelcontextprotocol__rust-sdk/.github/instructions/fetch-mcp-doc.instructions.md) |
| retrieval | 2 | [examples/servers/src/memory_stdio.rs](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/src/memory_stdio.rs)<br>[examples/servers/src/html/mcp_oauth_index.html](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/src/html/mcp_oauth_index.html) |
| spec | 1 | [ROADMAP.md](../../../../sources/modelcontextprotocol__rust-sdk/ROADMAP.md) |
| eval | 72 | [crates/rmcp/tests/test_client_credentials.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_client_credentials.rs)<br>[crates/rmcp/tests/test_client_initialization.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_client_initialization.rs)<br>[crates/rmcp/tests/test_close_connection.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_close_connection.rs)<br>[crates/rmcp/tests/test_completion.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_completion.rs)<br>[crates/rmcp/tests/test_complex_schema.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_complex_schema.rs)<br>[crates/rmcp/tests/test_custom_headers.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_custom_headers.rs)<br>[crates/rmcp/tests/test_custom_request.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_custom_request.rs)<br>[crates/rmcp/tests/test_deserialization.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_deserialization.rs) |
| security | 13 | [SECURITY.md](../../../../sources/modelcontextprotocol__rust-sdk/SECURITY.md)<br>[examples/servers/templates/mcp_oauth_authorize.html](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/templates/mcp_oauth_authorize.html)<br>[examples/servers/src/cimd_auth_streamhttp.rs](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/src/cimd_auth_streamhttp.rs)<br>[examples/servers/src/complex_auth_streamhttp.rs](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/src/complex_auth_streamhttp.rs)<br>[examples/servers/src/simple_auth_streamhttp.rs](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/src/simple_auth_streamhttp.rs)<br>[examples/servers/src/html/mcp_oauth_index.html](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/src/html/mcp_oauth_index.html)<br>[examples/clients/src/auth/callback.html](../../../../sources/modelcontextprotocol__rust-sdk/examples/clients/src/auth/callback.html)<br>[examples/clients/src/auth/client_credentials.rs](../../../../sources/modelcontextprotocol__rust-sdk/examples/clients/src/auth/client_credentials.rs) |
| ci | 5 | [.github/workflows/auto-label-pr.yml](../../../../sources/modelcontextprotocol__rust-sdk/.github/workflows/auto-label-pr.yml)<br>[.github/workflows/ci.yml](../../../../sources/modelcontextprotocol__rust-sdk/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/modelcontextprotocol__rust-sdk/.github/workflows/codeql.yml)<br>[.github/workflows/release-plz.yml](../../../../sources/modelcontextprotocol__rust-sdk/.github/workflows/release-plz.yml)<br>[.github/workflows/triage.yml](../../../../sources/modelcontextprotocol__rust-sdk/.github/workflows/triage.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 12 | [README.md](../../../../sources/modelcontextprotocol__rust-sdk/README.md)<br>[examples/README.md](../../../../sources/modelcontextprotocol__rust-sdk/examples/README.md)<br>[examples/wasi/README.md](../../../../sources/modelcontextprotocol__rust-sdk/examples/wasi/README.md)<br>[examples/simple-chat-client/README.md](../../../../sources/modelcontextprotocol__rust-sdk/examples/simple-chat-client/README.md)<br>[examples/servers/README.md](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/README.md)<br>[examples/clients/README.md](../../../../sources/modelcontextprotocol__rust-sdk/examples/clients/README.md)<br>[docs/CONTRIBUTE.MD](../../../../sources/modelcontextprotocol__rust-sdk/docs/CONTRIBUTE.MD)<br>[docs/DEVCONTAINER.md](../../../../sources/modelcontextprotocol__rust-sdk/docs/DEVCONTAINER.md) |
| config | 11 | [Cargo.toml](../../../../sources/modelcontextprotocol__rust-sdk/Cargo.toml)<br>[examples/wasi/Cargo.toml](../../../../sources/modelcontextprotocol__rust-sdk/examples/wasi/Cargo.toml)<br>[examples/transport/Cargo.toml](../../../../sources/modelcontextprotocol__rust-sdk/examples/transport/Cargo.toml)<br>[examples/simple-chat-client/Cargo.toml](../../../../sources/modelcontextprotocol__rust-sdk/examples/simple-chat-client/Cargo.toml)<br>[examples/servers/Cargo.toml](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/Cargo.toml)<br>[examples/clients/Cargo.toml](../../../../sources/modelcontextprotocol__rust-sdk/examples/clients/Cargo.toml)<br>[crates/rmcp-macros/Cargo.toml](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp-macros/Cargo.toml)<br>[crates/rmcp/Cargo.toml](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 72 | [crates/rmcp/tests/test_client_credentials.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_client_credentials.rs)<br>[crates/rmcp/tests/test_client_initialization.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_client_initialization.rs)<br>[crates/rmcp/tests/test_close_connection.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_close_connection.rs)<br>[crates/rmcp/tests/test_completion.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_completion.rs)<br>[crates/rmcp/tests/test_complex_schema.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_complex_schema.rs)<br>[crates/rmcp/tests/test_custom_headers.rs](../../../../sources/modelcontextprotocol__rust-sdk/crates/rmcp/tests/test_custom_headers.rs) |
| CI workflow | 5 | [.github/workflows/auto-label-pr.yml](../../../../sources/modelcontextprotocol__rust-sdk/.github/workflows/auto-label-pr.yml)<br>[.github/workflows/ci.yml](../../../../sources/modelcontextprotocol__rust-sdk/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/modelcontextprotocol__rust-sdk/.github/workflows/codeql.yml)<br>[.github/workflows/release-plz.yml](../../../../sources/modelcontextprotocol__rust-sdk/.github/workflows/release-plz.yml)<br>[.github/workflows/triage.yml](../../../../sources/modelcontextprotocol__rust-sdk/.github/workflows/triage.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 13 | [SECURITY.md](../../../../sources/modelcontextprotocol__rust-sdk/SECURITY.md)<br>[examples/servers/templates/mcp_oauth_authorize.html](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/templates/mcp_oauth_authorize.html)<br>[examples/servers/src/cimd_auth_streamhttp.rs](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/src/cimd_auth_streamhttp.rs)<br>[examples/servers/src/complex_auth_streamhttp.rs](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/src/complex_auth_streamhttp.rs)<br>[examples/servers/src/simple_auth_streamhttp.rs](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/src/simple_auth_streamhttp.rs)<br>[examples/servers/src/html/mcp_oauth_index.html](../../../../sources/modelcontextprotocol__rust-sdk/examples/servers/src/html/mcp_oauth_index.html) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `examples/simple-chat-client/src/bin/simple_chat.rs`, `crates/rmcp-macros/src/lib.rs`, `crates/rmcp/tests/test_with_python/server.py`.
2. entrypoint를 따라 실행 흐름 확인: `examples/simple-chat-client/src/bin/simple_chat.rs`, `crates/rmcp-macros/src/lib.rs`, `crates/rmcp/tests/test_with_python/server.py`.
3. agent/tool runtime 매핑: `examples/simple-chat-client/src/tool.rs`, `examples/servers/src/memory_stdio.rs`, `crates/rmcp-macros/src/tool_handler.rs`.
4. retrieval/memory/indexing 확인: `examples/servers/src/memory_stdio.rs`, `examples/servers/src/html/mcp_oauth_index.html`.
5. test/eval 파일로 동작 검증: `crates/rmcp/tests/test_client_credentials.rs`, `crates/rmcp/tests/test_client_initialization.rs`, `crates/rmcp/tests/test_close_connection.rs`.

## 기존 레포 인사이트

개발 생산성/DevTools 관점에서 The official Rust SDK for the Model Context Protocol. 핵심 구조 신호는 Rust, Cargo.toml, README.md, LICENSE, modelcontextprotocol, mcp이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
