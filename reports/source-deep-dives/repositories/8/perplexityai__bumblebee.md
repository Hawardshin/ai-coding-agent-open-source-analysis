# perplexityai/bumblebee Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Read-only developer endpoint scanner for on-disk package, extension, and developer-tool metadata, built to check exposure to known software supply-chain compromises.

## 요약

- 조사 단위: `sources/perplexityai__bumblebee` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 94 files, 49 directories, depth score 82, key references 6개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

보안/거버넌스/안전 관점에서 cli-first, agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 security=SECURITY.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 6개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | perplexityai/bumblebee |
| Topic | Security, Governance, and Safety / 보안/거버넌스/안전 |
| Region | global |
| Language | Go |
| Stars | 4485 |
| Forks | 408 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/perplexityai__bumblebee](../../../../sources/perplexityai__bumblebee) |
| Existing report | [reports/global-trending/repositories/perplexityai__bumblebee.md](../../../global-trending/repositories/perplexityai__bumblebee.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 94 / 49 |
| Max observed depth | 12 |
| Top directories | .github, cmd, docs, internal, threat_intel, tools |
| Top extensions | .go: 57, .json: 21, .md: 8, (none): 4, .yml: 2, .mod: 1, .yaml: 1 |
| Source patterns | cli-first, agent/tool runtime, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 10 |
| cmd/bumblebee | cmd workspace | 4 |
| .github | ci surface | 1 |
| cmd | source boundary | 1 |
| internal | top-level component | 1 |
| threat_intel | top-level component | 1 |
| tools | top-level component | 1 |


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
| security | [SECURITY.md](../../../../sources/perplexityai__bumblebee/SECURITY.md) | security signal |
| ci | [.github/workflows/ci.yml](../../../../sources/perplexityai__bumblebee/.github/workflows/ci.yml) | ci signal |
| ci | [.github/workflows/release.yml](../../../../sources/perplexityai__bumblebee/.github/workflows/release.yml) | ci signal |
| config | [go.mod](../../../../sources/perplexityai__bumblebee/go.mod) | config signal |
| eval | [tools/osvcatalog/main_test.go](../../../../sources/perplexityai__bumblebee/tools/osvcatalog/main_test.go) | eval support |
| eval | [internal/walk/walk_test.go](../../../../sources/perplexityai__bumblebee/internal/walk/walk_test.go) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [tools/osvcatalog/main.go](../../../../sources/perplexityai__bumblebee/tools/osvcatalog/main.go)<br>[cmd/bumblebee/main.go](../../../../sources/perplexityai__bumblebee/cmd/bumblebee/main.go) |
| agentRuntime | 4 | [tools/osvcatalog/main_test.go](../../../../sources/perplexityai__bumblebee/tools/osvcatalog/main_test.go)<br>[tools/osvcatalog/main.go](../../../../sources/perplexityai__bumblebee/tools/osvcatalog/main.go)<br>[internal/ecosystem/skills/skills_test.go](../../../../sources/perplexityai__bumblebee/internal/ecosystem/skills/skills_test.go)<br>[internal/ecosystem/skills/skills.go](../../../../sources/perplexityai__bumblebee/internal/ecosystem/skills/skills.go) |
| mcp | 3 | [internal/ecosystem/mcp/mcp_test.go](../../../../sources/perplexityai__bumblebee/internal/ecosystem/mcp/mcp_test.go)<br>[internal/ecosystem/mcp/mcp.go](../../../../sources/perplexityai__bumblebee/internal/ecosystem/mcp/mcp.go)<br>[cmd/bumblebee/selftest/fixtures/mcp-fixture/mcp.json](../../../../sources/perplexityai__bumblebee/cmd/bumblebee/selftest/fixtures/mcp-fixture/mcp.json) |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 27 | [tools/osvcatalog/main_test.go](../../../../sources/perplexityai__bumblebee/tools/osvcatalog/main_test.go)<br>[internal/walk/walk_test.go](../../../../sources/perplexityai__bumblebee/internal/walk/walk_test.go)<br>[internal/scanner/findings_test.go](../../../../sources/perplexityai__bumblebee/internal/scanner/findings_test.go)<br>[internal/scanner/scanner_integration_test.go](../../../../sources/perplexityai__bumblebee/internal/scanner/scanner_integration_test.go)<br>[internal/scanner/scanner_test.go](../../../../sources/perplexityai__bumblebee/internal/scanner/scanner_test.go)<br>[internal/output/httpsink_test.go](../../../../sources/perplexityai__bumblebee/internal/output/httpsink_test.go)<br>[internal/output/output_test.go](../../../../sources/perplexityai__bumblebee/internal/output/output_test.go)<br>[internal/osv/osv_test.go](../../../../sources/perplexityai__bumblebee/internal/osv/osv_test.go) |
| security | 1 | [SECURITY.md](../../../../sources/perplexityai__bumblebee/SECURITY.md) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/perplexityai__bumblebee/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/perplexityai__bumblebee/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 11 | [README.md](../../../../sources/perplexityai__bumblebee/README.md)<br>[threat_intel/README.md](../../../../sources/perplexityai__bumblebee/threat_intel/README.md)<br>[docs/deployment-macos.md](../../../../sources/perplexityai__bumblebee/docs/deployment-macos.md)<br>[docs/inventory-sources.md](../../../../sources/perplexityai__bumblebee/docs/inventory-sources.md)<br>[docs/state-model.md](../../../../sources/perplexityai__bumblebee/docs/state-model.md)<br>[docs/transport.md](../../../../sources/perplexityai__bumblebee/docs/transport.md)<br>[docs/schema/v0.1.0/diagnostic-record.schema.json](../../../../sources/perplexityai__bumblebee/docs/schema/v0.1.0/diagnostic-record.schema.json)<br>[docs/schema/v0.1.0/exposure-catalog.schema.json](../../../../sources/perplexityai__bumblebee/docs/schema/v0.1.0/exposure-catalog.schema.json) |
| config | 1 | [go.mod](../../../../sources/perplexityai__bumblebee/go.mod) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 27 | [tools/osvcatalog/main_test.go](../../../../sources/perplexityai__bumblebee/tools/osvcatalog/main_test.go)<br>[internal/walk/walk_test.go](../../../../sources/perplexityai__bumblebee/internal/walk/walk_test.go)<br>[internal/scanner/findings_test.go](../../../../sources/perplexityai__bumblebee/internal/scanner/findings_test.go)<br>[internal/scanner/scanner_integration_test.go](../../../../sources/perplexityai__bumblebee/internal/scanner/scanner_integration_test.go)<br>[internal/scanner/scanner_test.go](../../../../sources/perplexityai__bumblebee/internal/scanner/scanner_test.go)<br>[internal/output/httpsink_test.go](../../../../sources/perplexityai__bumblebee/internal/output/httpsink_test.go) |
| CI workflows | 2 | [.github/workflows/ci.yml](../../../../sources/perplexityai__bumblebee/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/perplexityai__bumblebee/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [SECURITY.md](../../../../sources/perplexityai__bumblebee/SECURITY.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `SECURITY.md`, `.github/workflows/ci.yml`, `.github/workflows/release.yml`.
2. Trace execution through entrypoints: `tools/osvcatalog/main.go`, `cmd/bumblebee/main.go`.
3. Map agent/tool runtime through: `tools/osvcatalog/main_test.go`, `tools/osvcatalog/main.go`, `internal/ecosystem/skills/skills_test.go`.
4. Verify behavior through test/eval files: `tools/osvcatalog/main_test.go`, `internal/walk/walk_test.go`, `internal/scanner/findings_test.go`.

## Existing Repository Insight

보안/거버넌스/안전 관점에서 Read only developer endpoint scanner for on disk package, extension, and developer tool metadata, built to check exposur. 핵심 구조 신호는 Go, go.mod, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 보안/거버넌스/안전 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
