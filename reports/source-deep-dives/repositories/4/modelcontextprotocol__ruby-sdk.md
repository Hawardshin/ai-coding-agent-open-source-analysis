# modelcontextprotocol/ruby-sdk 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

The official Ruby SDK for the Model Context Protocol.

## 요약

- 조사 단위: `sources/modelcontextprotocol__ruby-sdk` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 155 files, 32 directories, depth score 100, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=lib/mcp/server.rb, conformance/server.rb, bin/console이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | modelcontextprotocol/ruby-sdk |
| 주제 | 개발 생산성/DevTools / 개발 생산성/DevTools |
| Region | global |
| Language | Ruby |
| Stars | 852 |
| Forks | 119 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/modelcontextprotocol__ruby-sdk](../../../../sources/modelcontextprotocol__ruby-sdk) |
| 기존 보고서 | [reports/global-trending/repositories/modelcontextprotocol__ruby-sdk.md](../../../global-trending/repositories/modelcontextprotocol__ruby-sdk.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 155 / 32 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, bin, conformance, docs, examples, lib, test |
| 상위 확장자 | .rb: 113, .md: 13, (none): 9, .yml: 8, .svg: 4, .html: 3, .scss: 3, .gemspec: 1, .sh: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 19 |
| lib | source boundary | 18 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| conformance | top-level component | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| test | validation surface | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 6 | [lib/mcp/server.rb](../../../../sources/modelcontextprotocol__ruby-sdk/lib/mcp/server.rb)<br>[conformance/server.rb](../../../../sources/modelcontextprotocol__ruby-sdk/conformance/server.rb)<br>[bin/console](../../../../sources/modelcontextprotocol__ruby-sdk/bin/console)<br>[bin/generate-gh-pages.sh](../../../../sources/modelcontextprotocol__ruby-sdk/bin/generate-gh-pages.sh)<br>[bin/rake](../../../../sources/modelcontextprotocol__ruby-sdk/bin/rake)<br>[bin/setup](../../../../sources/modelcontextprotocol__ruby-sdk/bin/setup) |
| agentRuntime | 15 | [AGENTS.md](../../../../sources/modelcontextprotocol__ruby-sdk/AGENTS.md)<br>[test/mcp/tool_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/tool_test.rb)<br>[test/mcp/tool/annotations_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/tool/annotations_test.rb)<br>[test/mcp/tool/input_schema_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/tool/input_schema_test.rb)<br>[test/mcp/tool/output_schema_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/tool/output_schema_test.rb)<br>[test/mcp/tool/response_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/tool/response_test.rb)<br>[test/mcp/tool/schema_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/tool/schema_test.rb)<br>[test/mcp/client/tool_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/client/tool_test.rb) |
| mcp | 100 | [mcp.gemspec](../../../../sources/modelcontextprotocol__ruby-sdk/mcp.gemspec)<br>[test/mcp/annotations_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/annotations_test.rb)<br>[test/mcp/cancellation_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/cancellation_test.rb)<br>[test/mcp/client_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/client_test.rb)<br>[test/mcp/configuration_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/configuration_test.rb)<br>[test/mcp/content_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/content_test.rb)<br>[test/mcp/icon_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/icon_test.rb)<br>[test/mcp/instrumentation_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/instrumentation_test.rb) |
| retrieval | 3 | [lib/mcp/client/oauth/in_memory_storage.rb](../../../../sources/modelcontextprotocol__ruby-sdk/lib/mcp/client/oauth/in_memory_storage.rb)<br>[docs/index.md](../../../../sources/modelcontextprotocol__ruby-sdk/docs/index.md)<br>[docs/latest/index.html](../../../../sources/modelcontextprotocol__ruby-sdk/docs/latest/index.html) |
| spec | 0 | 명확하지 않음 |
| eval | 53 | [test/instrumentation_test_helper.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/instrumentation_test_helper.rb)<br>[test/json_rpc_handler_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/json_rpc_handler_test.rb)<br>[test/test_helper.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/test_helper.rb)<br>[test/mcp/annotations_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/annotations_test.rb)<br>[test/mcp/cancellation_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/cancellation_test.rb)<br>[test/mcp/client_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/client_test.rb)<br>[test/mcp/configuration_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/configuration_test.rb)<br>[test/mcp/content_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/content_test.rb) |
| security | 15 | [SECURITY.md](../../../../sources/modelcontextprotocol__ruby-sdk/SECURITY.md)<br>[test/mcp/client/oauth/client_credentials_provider_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/client/oauth/client_credentials_provider_test.rb)<br>[test/mcp/client/oauth/discovery_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/client/oauth/discovery_test.rb)<br>[test/mcp/client/oauth/flow_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/client/oauth/flow_test.rb)<br>[test/mcp/client/oauth/http_oauth_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/client/oauth/http_oauth_test.rb)<br>[test/mcp/client/oauth/pkce_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/client/oauth/pkce_test.rb)<br>[test/mcp/client/oauth/provider_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/client/oauth/provider_test.rb)<br>[lib/mcp/client/oauth.rb](../../../../sources/modelcontextprotocol__ruby-sdk/lib/mcp/client/oauth.rb) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/modelcontextprotocol__ruby-sdk/.github/workflows/ci.yml)<br>[.github/workflows/conformance.yml](../../../../sources/modelcontextprotocol__ruby-sdk/.github/workflows/conformance.yml)<br>[.github/workflows/release.yml](../../../../sources/modelcontextprotocol__ruby-sdk/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [AGENTS.md](../../../../sources/modelcontextprotocol__ruby-sdk/AGENTS.md)<br>[CLAUDE.md](../../../../sources/modelcontextprotocol__ruby-sdk/CLAUDE.md) |
| docs | 19 | [README.md](../../../../sources/modelcontextprotocol__ruby-sdk/README.md)<br>[examples/README.md](../../../../sources/modelcontextprotocol__ruby-sdk/examples/README.md)<br>[docs/_config.yml](../../../../sources/modelcontextprotocol__ruby-sdk/docs/_config.yml)<br>[docs/building-clients.md](../../../../sources/modelcontextprotocol__ruby-sdk/docs/building-clients.md)<br>[docs/building-servers.md](../../../../sources/modelcontextprotocol__ruby-sdk/docs/building-servers.md)<br>[docs/CNAME](../../../../sources/modelcontextprotocol__ruby-sdk/docs/CNAME)<br>[docs/index.md](../../../../sources/modelcontextprotocol__ruby-sdk/docs/index.md)<br>[docs/installation.md](../../../../sources/modelcontextprotocol__ruby-sdk/docs/installation.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 53 | [test/instrumentation_test_helper.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/instrumentation_test_helper.rb)<br>[test/json_rpc_handler_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/json_rpc_handler_test.rb)<br>[test/test_helper.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/test_helper.rb)<br>[test/mcp/annotations_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/annotations_test.rb)<br>[test/mcp/cancellation_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/cancellation_test.rb)<br>[test/mcp/client_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/client_test.rb) |
| CI workflow | 3 | [.github/workflows/ci.yml](../../../../sources/modelcontextprotocol__ruby-sdk/.github/workflows/ci.yml)<br>[.github/workflows/conformance.yml](../../../../sources/modelcontextprotocol__ruby-sdk/.github/workflows/conformance.yml)<br>[.github/workflows/release.yml](../../../../sources/modelcontextprotocol__ruby-sdk/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 15 | [SECURITY.md](../../../../sources/modelcontextprotocol__ruby-sdk/SECURITY.md)<br>[test/mcp/client/oauth/client_credentials_provider_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/client/oauth/client_credentials_provider_test.rb)<br>[test/mcp/client/oauth/discovery_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/client/oauth/discovery_test.rb)<br>[test/mcp/client/oauth/flow_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/client/oauth/flow_test.rb)<br>[test/mcp/client/oauth/http_oauth_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/client/oauth/http_oauth_test.rb)<br>[test/mcp/client/oauth/pkce_test.rb](../../../../sources/modelcontextprotocol__ruby-sdk/test/mcp/client/oauth/pkce_test.rb) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/modelcontextprotocol__ruby-sdk/AGENTS.md)<br>[CLAUDE.md](../../../../sources/modelcontextprotocol__ruby-sdk/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `lib/mcp/server.rb`, `conformance/server.rb`, `bin/console`.
2. entrypoint를 따라 실행 흐름 확인: `lib/mcp/server.rb`, `conformance/server.rb`, `bin/console`.
3. agent/tool runtime 매핑: `AGENTS.md`, `test/mcp/tool_test.rb`, `test/mcp/tool/annotations_test.rb`.
4. retrieval/memory/indexing 확인: `lib/mcp/client/oauth/in_memory_storage.rb`, `docs/index.md`, `docs/latest/index.html`.
5. test/eval 파일로 동작 검증: `test/instrumentation_test_helper.rb`, `test/json_rpc_handler_test.rb`, `test/test_helper.rb`.

## 기존 레포 인사이트

개발 생산성/DevTools 관점에서 The official Ruby SDK for the Model Context Protocol.. 핵심 구조 신호는 Ruby, README.md, AGENTS.md, CLAUDE.md, LICENSE, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
