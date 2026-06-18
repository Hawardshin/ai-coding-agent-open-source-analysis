# modelcontextprotocol/go-sdk 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

The official Go SDK for Model Context Protocol servers and clients. Maintained in collaboration with Google.

## 요약

- 조사 단위: `sources/modelcontextprotocol__go-sdk` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 216 files, 64 directories, depth score 112, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=mcp/server.go, internal/readme/server/server.go, internal/docs/server.src.md이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | modelcontextprotocol/go-sdk |
| 주제 | 개발 생산성/DevTools / 개발 생산성/DevTools |
| Region | global |
| Language | Go |
| Stars | 4698 |
| Forks | 452 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/modelcontextprotocol__go-sdk](../../../../sources/modelcontextprotocol__go-sdk) |
| 기존 보고서 | [reports/global-trending/repositories/modelcontextprotocol__go-sdk.md](../../../global-trending/repositories/modelcontextprotocol__go-sdk.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 216 / 64 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .agents, .devcontainer, .github, auth, conformance, design, docs, examples, internal, jsonrpc, mcp, oauthex, scripts |
| 상위 확장자 | .go: 141, .md: 34, .yml: 9, .txtar: 8, .txt: 6, .json: 3, .mod: 3, .sum: 3, (none): 3, .sh: 2, .svg: 2, .png: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | modelcontextprotocol |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 28 | [mcp/server.go](../../../../sources/modelcontextprotocol__go-sdk/mcp/server.go)<br>[internal/readme/server/server.go](../../../../sources/modelcontextprotocol__go-sdk/internal/readme/server/server.go)<br>[internal/docs/server.src.md](../../../../sources/modelcontextprotocol__go-sdk/internal/docs/server.src.md)<br>[examples/server/toolschemas/main.go](../../../../sources/modelcontextprotocol__go-sdk/examples/server/toolschemas/main.go)<br>[examples/server/sse/main.go](../../../../sources/modelcontextprotocol__go-sdk/examples/server/sse/main.go)<br>[examples/server/sequentialthinking/main.go](../../../../sources/modelcontextprotocol__go-sdk/examples/server/sequentialthinking/main.go)<br>[examples/server/rate-limiting/main.go](../../../../sources/modelcontextprotocol__go-sdk/examples/server/rate-limiting/main.go)<br>[examples/server/proxy/main.go](../../../../sources/modelcontextprotocol__go-sdk/examples/server/proxy/main.go) |
| agentRuntime | 9 | [AGENTS.md](../../../../sources/modelcontextprotocol__go-sdk/AGENTS.md)<br>[mcp/tool_example_test.go](../../../../sources/modelcontextprotocol__go-sdk/mcp/tool_example_test.go)<br>[mcp/tool_test.go](../../../../sources/modelcontextprotocol__go-sdk/mcp/tool_test.go)<br>[mcp/tool.go](../../../../sources/modelcontextprotocol__go-sdk/mcp/tool.go)<br>[mcp/testdata/conformance/server/tools.txtar](../../../../sources/modelcontextprotocol__go-sdk/mcp/testdata/conformance/server/tools.txtar)<br>[examples/server/memory/kb_test.go](../../../../sources/modelcontextprotocol__go-sdk/examples/server/memory/kb_test.go)<br>[examples/server/memory/kb.go](../../../../sources/modelcontextprotocol__go-sdk/examples/server/memory/kb.go)<br>[examples/server/memory/main.go](../../../../sources/modelcontextprotocol__go-sdk/examples/server/memory/main.go) |
| mcp | 73 | [mcp/capabilities_test.go](../../../../sources/modelcontextprotocol__go-sdk/mcp/capabilities_test.go)<br>[mcp/client_example_test.go](../../../../sources/modelcontextprotocol__go-sdk/mcp/client_example_test.go)<br>[mcp/client_list_test.go](../../../../sources/modelcontextprotocol__go-sdk/mcp/client_list_test.go)<br>[mcp/client_test.go](../../../../sources/modelcontextprotocol__go-sdk/mcp/client_test.go)<br>[mcp/client.go](../../../../sources/modelcontextprotocol__go-sdk/mcp/client.go)<br>[mcp/cmd_export_test.go](../../../../sources/modelcontextprotocol__go-sdk/mcp/cmd_export_test.go)<br>[mcp/cmd_test.go](../../../../sources/modelcontextprotocol__go-sdk/mcp/cmd_test.go)<br>[mcp/cmd.go](../../../../sources/modelcontextprotocol__go-sdk/mcp/cmd.go) |
| retrieval | 3 | [examples/server/memory/kb_test.go](../../../../sources/modelcontextprotocol__go-sdk/examples/server/memory/kb_test.go)<br>[examples/server/memory/kb.go](../../../../sources/modelcontextprotocol__go-sdk/examples/server/memory/kb.go)<br>[examples/server/memory/main.go](../../../../sources/modelcontextprotocol__go-sdk/examples/server/memory/main.go) |
| spec | 4 | [ROADMAP.md](../../../../sources/modelcontextprotocol__go-sdk/ROADMAP.md)<br>[mcp/testdata/conformance/server/spec-sep-973-additional-metadata.txtar](../../../../sources/modelcontextprotocol__go-sdk/mcp/testdata/conformance/server/spec-sep-973-additional-metadata.txtar)<br>[design/design.md](../../../../sources/modelcontextprotocol__go-sdk/design/design.md)<br>[design/mrtr.md](../../../../sources/modelcontextprotocol__go-sdk/design/mrtr.md) |
| eval | 60 | [copyright_test.go](../../../../sources/modelcontextprotocol__go-sdk/copyright_test.go)<br>[oauthex/audience_test.go](../../../../sources/modelcontextprotocol__go-sdk/oauthex/audience_test.go)<br>[oauthex/auth_meta_test.go](../../../../sources/modelcontextprotocol__go-sdk/oauthex/auth_meta_test.go)<br>[oauthex/client_test.go](../../../../sources/modelcontextprotocol__go-sdk/oauthex/client_test.go)<br>[oauthex/dcr_test.go](../../../../sources/modelcontextprotocol__go-sdk/oauthex/dcr_test.go)<br>[oauthex/oauthex_test.go](../../../../sources/modelcontextprotocol__go-sdk/oauthex/oauthex_test.go)<br>[oauthex/resource_meta_test.go](../../../../sources/modelcontextprotocol__go-sdk/oauthex/resource_meta_test.go)<br>[oauthex/token_exchange_test.go](../../../../sources/modelcontextprotocol__go-sdk/oauthex/token_exchange_test.go) |
| security | 25 | [SECURITY.md](../../../../sources/modelcontextprotocol__go-sdk/SECURITY.md)<br>[oauthex/auth_meta_test.go](../../../../sources/modelcontextprotocol__go-sdk/oauthex/auth_meta_test.go)<br>[oauthex/auth_meta.go](../../../../sources/modelcontextprotocol__go-sdk/oauthex/auth_meta.go)<br>[oauthex/testdata/client-auth-meta.json](../../../../sources/modelcontextprotocol__go-sdk/oauthex/testdata/client-auth-meta.json)<br>[oauthex/testdata/google-auth-meta.json](../../../../sources/modelcontextprotocol__go-sdk/oauthex/testdata/google-auth-meta.json)<br>[examples/server/auth-middleware/go.mod](../../../../sources/modelcontextprotocol__go-sdk/examples/server/auth-middleware/go.mod)<br>[examples/server/auth-middleware/go.sum](../../../../sources/modelcontextprotocol__go-sdk/examples/server/auth-middleware/go.sum)<br>[examples/server/auth-middleware/main.go](../../../../sources/modelcontextprotocol__go-sdk/examples/server/auth-middleware/main.go) |
| ci | 7 | [.github/workflows/codeql.yml](../../../../sources/modelcontextprotocol__go-sdk/.github/workflows/codeql.yml)<br>[.github/workflows/conformance.yml](../../../../sources/modelcontextprotocol__go-sdk/.github/workflows/conformance.yml)<br>[.github/workflows/docs-check.yml](../../../../sources/modelcontextprotocol__go-sdk/.github/workflows/docs-check.yml)<br>[.github/workflows/nightly.yml](../../../../sources/modelcontextprotocol__go-sdk/.github/workflows/nightly.yml)<br>[.github/workflows/publish-docs.yml](../../../../sources/modelcontextprotocol__go-sdk/.github/workflows/publish-docs.yml)<br>[.github/workflows/scorecard.yml](../../../../sources/modelcontextprotocol__go-sdk/.github/workflows/scorecard.yml)<br>[.github/workflows/test.yml](../../../../sources/modelcontextprotocol__go-sdk/.github/workflows/test.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [AGENTS.md](../../../../sources/modelcontextprotocol__go-sdk/AGENTS.md) |
| docs | 32 | [mkdocs.yaml](../../../../sources/modelcontextprotocol__go-sdk/mkdocs.yaml)<br>[README.md](../../../../sources/modelcontextprotocol__go-sdk/README.md)<br>[internal/readme/contributing.src.md](../../../../sources/modelcontextprotocol__go-sdk/internal/readme/contributing.src.md)<br>[internal/readme/doc.go](../../../../sources/modelcontextprotocol__go-sdk/internal/readme/doc.go)<br>[internal/readme/README.src.md](../../../../sources/modelcontextprotocol__go-sdk/internal/readme/README.src.md)<br>[internal/readme/server/server.go](../../../../sources/modelcontextprotocol__go-sdk/internal/readme/server/server.go)<br>[internal/readme/client/client.go](../../../../sources/modelcontextprotocol__go-sdk/internal/readme/client/client.go)<br>[internal/docs/client.src.md](../../../../sources/modelcontextprotocol__go-sdk/internal/docs/client.src.md) |
| config | 3 | [go.mod](../../../../sources/modelcontextprotocol__go-sdk/go.mod)<br>[examples/server/rate-limiting/go.mod](../../../../sources/modelcontextprotocol__go-sdk/examples/server/rate-limiting/go.mod)<br>[examples/server/auth-middleware/go.mod](../../../../sources/modelcontextprotocol__go-sdk/examples/server/auth-middleware/go.mod) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 60 | [copyright_test.go](../../../../sources/modelcontextprotocol__go-sdk/copyright_test.go)<br>[oauthex/audience_test.go](../../../../sources/modelcontextprotocol__go-sdk/oauthex/audience_test.go)<br>[oauthex/auth_meta_test.go](../../../../sources/modelcontextprotocol__go-sdk/oauthex/auth_meta_test.go)<br>[oauthex/client_test.go](../../../../sources/modelcontextprotocol__go-sdk/oauthex/client_test.go)<br>[oauthex/dcr_test.go](../../../../sources/modelcontextprotocol__go-sdk/oauthex/dcr_test.go)<br>[oauthex/oauthex_test.go](../../../../sources/modelcontextprotocol__go-sdk/oauthex/oauthex_test.go) |
| CI workflow | 7 | [.github/workflows/codeql.yml](../../../../sources/modelcontextprotocol__go-sdk/.github/workflows/codeql.yml)<br>[.github/workflows/conformance.yml](../../../../sources/modelcontextprotocol__go-sdk/.github/workflows/conformance.yml)<br>[.github/workflows/docs-check.yml](../../../../sources/modelcontextprotocol__go-sdk/.github/workflows/docs-check.yml)<br>[.github/workflows/nightly.yml](../../../../sources/modelcontextprotocol__go-sdk/.github/workflows/nightly.yml)<br>[.github/workflows/publish-docs.yml](../../../../sources/modelcontextprotocol__go-sdk/.github/workflows/publish-docs.yml)<br>[.github/workflows/scorecard.yml](../../../../sources/modelcontextprotocol__go-sdk/.github/workflows/scorecard.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 25 | [SECURITY.md](../../../../sources/modelcontextprotocol__go-sdk/SECURITY.md)<br>[oauthex/auth_meta_test.go](../../../../sources/modelcontextprotocol__go-sdk/oauthex/auth_meta_test.go)<br>[oauthex/auth_meta.go](../../../../sources/modelcontextprotocol__go-sdk/oauthex/auth_meta.go)<br>[oauthex/testdata/client-auth-meta.json](../../../../sources/modelcontextprotocol__go-sdk/oauthex/testdata/client-auth-meta.json)<br>[oauthex/testdata/google-auth-meta.json](../../../../sources/modelcontextprotocol__go-sdk/oauthex/testdata/google-auth-meta.json)<br>[examples/server/auth-middleware/go.mod](../../../../sources/modelcontextprotocol__go-sdk/examples/server/auth-middleware/go.mod) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/modelcontextprotocol__go-sdk/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `mcp/server.go`, `internal/readme/server/server.go`, `internal/docs/server.src.md`.
2. entrypoint를 따라 실행 흐름 확인: `mcp/server.go`, `internal/readme/server/server.go`, `internal/docs/server.src.md`.
3. agent/tool runtime 매핑: `AGENTS.md`, `mcp/tool_example_test.go`, `mcp/tool_test.go`.
4. retrieval/memory/indexing 확인: `examples/server/memory/kb_test.go`, `examples/server/memory/kb.go`, `examples/server/memory/main.go`.
5. test/eval 파일로 동작 검증: `copyright_test.go`, `oauthex/audience_test.go`, `oauthex/auth_meta_test.go`.

## 기존 레포 인사이트

개발 생산성/DevTools 관점에서 The official Go SDK for Model Context Protocol servers and clients. Maintained in collaboration with Google.. 핵심 구조 신호는 Go, go.mod, README.md, AGENTS.md, LICENSE, modelcontextprotocol이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
