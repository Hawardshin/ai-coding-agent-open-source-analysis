# perplexityai/bumblebee 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Read-only developer endpoint scanner for on-disk package, extension, and developer-tool metadata, built to check exposure to known software supply-chain compromises.

## 요약

- 조사 단위: `sources/perplexityai__bumblebee` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 94 files, 49 directories, depth score 76, key references 6개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

보안/거버넌스/안전 관점에서 cli-first, agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 security=SECURITY.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 6개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | perplexityai/bumblebee |
| 주제 | 보안/거버넌스/안전 / 보안/거버넌스/안전 |
| Region | global |
| Language | Go |
| Stars | 4485 |
| Forks | 408 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/perplexityai__bumblebee](../../../../sources/perplexityai__bumblebee) |
| 기존 보고서 | [reports/global-trending/repositories/perplexityai__bumblebee.md](../../../global-trending/repositories/perplexityai__bumblebee.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 94 / 49 |
| 관측 최대 깊이 | 12 |
| 상위 디렉터리 | .github, cmd, docs, internal, threat_intel, tools |
| 상위 확장자 | .go: 57, .json: 21, .md: 8, (none): 4, .yml: 2, .mod: 1, .yaml: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 10 |
| cmd/bumblebee | cmd workspace | 4 |
| .github | ci surface | 1 |
| cmd | source boundary | 1 |
| internal | top-level component | 1 |
| threat_intel | top-level component | 1 |
| tools | top-level component | 1 |


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
| security | [SECURITY.md](../../../../sources/perplexityai__bumblebee/SECURITY.md) | security signal |
| ci | [.github/workflows/ci.yml](../../../../sources/perplexityai__bumblebee/.github/workflows/ci.yml) | ci signal |
| ci | [.github/workflows/release.yml](../../../../sources/perplexityai__bumblebee/.github/workflows/release.yml) | ci signal |
| config | [go.mod](../../../../sources/perplexityai__bumblebee/go.mod) | config signal |
| eval | [tools/osvcatalog/main_test.go](../../../../sources/perplexityai__bumblebee/tools/osvcatalog/main_test.go) | eval support |
| eval | [internal/walk/walk_test.go](../../../../sources/perplexityai__bumblebee/internal/walk/walk_test.go) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [tools/osvcatalog/main.go](../../../../sources/perplexityai__bumblebee/tools/osvcatalog/main.go)<br>[cmd/bumblebee/main.go](../../../../sources/perplexityai__bumblebee/cmd/bumblebee/main.go) |
| agentRuntime | 4 | [tools/osvcatalog/main_test.go](../../../../sources/perplexityai__bumblebee/tools/osvcatalog/main_test.go)<br>[tools/osvcatalog/main.go](../../../../sources/perplexityai__bumblebee/tools/osvcatalog/main.go)<br>[internal/ecosystem/skills/skills_test.go](../../../../sources/perplexityai__bumblebee/internal/ecosystem/skills/skills_test.go)<br>[internal/ecosystem/skills/skills.go](../../../../sources/perplexityai__bumblebee/internal/ecosystem/skills/skills.go) |
| mcp | 3 | [internal/ecosystem/mcp/mcp_test.go](../../../../sources/perplexityai__bumblebee/internal/ecosystem/mcp/mcp_test.go)<br>[internal/ecosystem/mcp/mcp.go](../../../../sources/perplexityai__bumblebee/internal/ecosystem/mcp/mcp.go)<br>[cmd/bumblebee/selftest/fixtures/mcp-fixture/mcp.json](../../../../sources/perplexityai__bumblebee/cmd/bumblebee/selftest/fixtures/mcp-fixture/mcp.json) |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 27 | [tools/osvcatalog/main_test.go](../../../../sources/perplexityai__bumblebee/tools/osvcatalog/main_test.go)<br>[internal/walk/walk_test.go](../../../../sources/perplexityai__bumblebee/internal/walk/walk_test.go)<br>[internal/scanner/findings_test.go](../../../../sources/perplexityai__bumblebee/internal/scanner/findings_test.go)<br>[internal/scanner/scanner_integration_test.go](../../../../sources/perplexityai__bumblebee/internal/scanner/scanner_integration_test.go)<br>[internal/scanner/scanner_test.go](../../../../sources/perplexityai__bumblebee/internal/scanner/scanner_test.go)<br>[internal/output/httpsink_test.go](../../../../sources/perplexityai__bumblebee/internal/output/httpsink_test.go)<br>[internal/output/output_test.go](../../../../sources/perplexityai__bumblebee/internal/output/output_test.go)<br>[internal/osv/osv_test.go](../../../../sources/perplexityai__bumblebee/internal/osv/osv_test.go) |
| security | 1 | [SECURITY.md](../../../../sources/perplexityai__bumblebee/SECURITY.md) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/perplexityai__bumblebee/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/perplexityai__bumblebee/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 11 | [README.md](../../../../sources/perplexityai__bumblebee/README.md)<br>[threat_intel/README.md](../../../../sources/perplexityai__bumblebee/threat_intel/README.md)<br>[docs/deployment-macos.md](../../../../sources/perplexityai__bumblebee/docs/deployment-macos.md)<br>[docs/inventory-sources.md](../../../../sources/perplexityai__bumblebee/docs/inventory-sources.md)<br>[docs/state-model.md](../../../../sources/perplexityai__bumblebee/docs/state-model.md)<br>[docs/transport.md](../../../../sources/perplexityai__bumblebee/docs/transport.md)<br>[docs/schema/v0.1.0/diagnostic-record.schema.json](../../../../sources/perplexityai__bumblebee/docs/schema/v0.1.0/diagnostic-record.schema.json)<br>[docs/schema/v0.1.0/exposure-catalog.schema.json](../../../../sources/perplexityai__bumblebee/docs/schema/v0.1.0/exposure-catalog.schema.json) |
| config | 1 | [go.mod](../../../../sources/perplexityai__bumblebee/go.mod) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 27 | [tools/osvcatalog/main_test.go](../../../../sources/perplexityai__bumblebee/tools/osvcatalog/main_test.go)<br>[internal/walk/walk_test.go](../../../../sources/perplexityai__bumblebee/internal/walk/walk_test.go)<br>[internal/scanner/findings_test.go](../../../../sources/perplexityai__bumblebee/internal/scanner/findings_test.go)<br>[internal/scanner/scanner_integration_test.go](../../../../sources/perplexityai__bumblebee/internal/scanner/scanner_integration_test.go)<br>[internal/scanner/scanner_test.go](../../../../sources/perplexityai__bumblebee/internal/scanner/scanner_test.go)<br>[internal/output/httpsink_test.go](../../../../sources/perplexityai__bumblebee/internal/output/httpsink_test.go) |
| CI workflow | 2 | [.github/workflows/ci.yml](../../../../sources/perplexityai__bumblebee/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/perplexityai__bumblebee/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [SECURITY.md](../../../../sources/perplexityai__bumblebee/SECURITY.md) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `SECURITY.md`, `.github/workflows/ci.yml`, `.github/workflows/release.yml`.
2. entrypoint를 따라 실행 흐름 확인: `tools/osvcatalog/main.go`, `cmd/bumblebee/main.go`.
3. agent/tool runtime 매핑: `tools/osvcatalog/main_test.go`, `tools/osvcatalog/main.go`, `internal/ecosystem/skills/skills_test.go`.
4. test/eval 파일로 동작 검증: `tools/osvcatalog/main_test.go`, `internal/walk/walk_test.go`, `internal/scanner/findings_test.go`.

## 기존 레포 인사이트

보안/거버넌스/안전 관점에서 Read only developer endpoint scanner for on disk package, extension, and developer tool metadata, built to check exposur. 핵심 구조 신호는 Go, go.mod, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 보안/거버넌스/안전 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
