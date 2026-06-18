# ai-screams/HwpForge Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Rust library for programmatic control of Korean HWPX documents — Markdown→HWPX conversion, JSON round-trip editing, MCP server for AI agents 🔥

## 요약

- 조사 단위: `sources/ai-screams__HwpForge` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 634 files, 125 directories, depth score 130, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=npm/packages/mcp-win32-x64/package.json, npm/packages/mcp-win32-x64/README.md, npm/packages/mcp-win32-x64/bin/hwpforge-mcp이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | ai-screams/HwpForge |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Rust |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/ai-screams__HwpForge](../../../../sources/ai-screams__HwpForge) |
| Existing report | [reports/korea-trending/repositories/ai-screams__HwpForge.md](../../../korea-trending/repositories/ai-screams__HwpForge.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 634 / 125 |
| Max observed depth | 6 |
| Top directories | .audit, .cargo, .claude, .config, .github, assets, benches, branding, crates, docs, examples, npm, papers, scripts, tests, theme |
| Top extensions | .rs: 211, .hwpx: 177, .hwp: 99, .md: 65, .toml: 20, .json: 15, (none): 12, .yml: 10, .png: 8, .py: 5, .js: 3, .yaml: 3 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 48 |
| crates/hwpforge-bindings-mcp | crates workspace | 35 |
| docs | documentation surface | 16 |
| examples/showcase | examples workspace | 13 |
| crates/hwpforge-foundation | crates workspace | 4 |
| crates/hwpforge-smithy-hwpx | crates workspace | 4 |
| crates/hwpforge-bindings-cli | crates workspace | 3 |
| crates/hwpforge-smithy-hwp5 | crates workspace | 3 |
| crates/hwpforge | crates workspace | 2 |
| crates/hwpforge-bindings-py | crates workspace | 2 |
| crates/hwpforge-blueprint | crates workspace | 2 |
| crates/hwpforge-core | crates workspace | 2 |
| crates/hwpforge-smithy-md | crates workspace | 2 |
| examples/interop | examples workspace | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| benches | validation surface | 1 |
| branding | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | install-tools | make install-tools |
| quality | Makefile | check | make check |
| test | Makefile | test | make test |
| test | Makefile | test-ci | make test-ci |
| quality | Makefile | clippy | make clippy |
| quality | Makefile | fmt | make fmt |
| quality | Makefile | fmt-fix | make fmt-fix |
| quality | Makefile | lint-md | make lint-md |
| quality | Makefile | lint-md-fix | make lint-md-fix |
| utility | Makefile | doc | make doc |
| utility | Makefile | cov | make cov |
| utility | Makefile | deny | make deny |
| utility | Makefile | machete | make machete |
| utility | Makefile | msrv | make msrv |
| utility | Makefile | ci-fast | make ci-fast |
| utility | Makefile | ci-full | make ci-full |
| utility | Makefile | ci | make ci |
| utility | Makefile | audit-hwp5 | make audit-hwp5 |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
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
| mcp | [npm/packages/mcp-win32-x64/package.json](../../../../sources/ai-screams__HwpForge/npm/packages/mcp-win32-x64/package.json) | mcp signal |
| mcp | [npm/packages/mcp-win32-x64/README.md](../../../../sources/ai-screams__HwpForge/npm/packages/mcp-win32-x64/README.md) | mcp signal |
| mcp | [npm/packages/mcp-win32-x64/bin/hwpforge-mcp](../../../../sources/ai-screams__HwpForge/npm/packages/mcp-win32-x64/bin/hwpforge-mcp) | mcp signal |
| mcp | [npm/packages/mcp-linux-x64/package.json](../../../../sources/ai-screams__HwpForge/npm/packages/mcp-linux-x64/package.json) | mcp signal |
| agentRuntime | [MEMORY.md](../../../../sources/ai-screams__HwpForge/MEMORY.md) | agentRuntime signal |
| agentRuntime | [crates/hwpforge-bindings-mcp/src/tools/convert.rs](../../../../sources/ai-screams__HwpForge/crates/hwpforge-bindings-mcp/src/tools/convert.rs) | agentRuntime signal |
| agentRuntime | [crates/hwpforge-bindings-mcp/src/tools/from_json.rs](../../../../sources/ai-screams__HwpForge/crates/hwpforge-bindings-mcp/src/tools/from_json.rs) | agentRuntime signal |
| agentRuntime | [crates/hwpforge-bindings-mcp/src/tools/inspect.rs](../../../../sources/ai-screams__HwpForge/crates/hwpforge-bindings-mcp/src/tools/inspect.rs) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/ai-screams__HwpForge/server.json) | entrypoints signal |
| entrypoints | [npm/packages/mcp-linux-x64/bin/hwpforge-mcp](../../../../sources/ai-screams__HwpForge/npm/packages/mcp-linux-x64/bin/hwpforge-mcp) | entrypoints signal |
| entrypoints | [npm/packages/mcp-linux-arm64/bin/hwpforge-mcp](../../../../sources/ai-screams__HwpForge/npm/packages/mcp-linux-arm64/bin/hwpforge-mcp) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/ai-screams__HwpForge/CLAUDE.md) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 19 | [server.json](../../../../sources/ai-screams__HwpForge/server.json)<br>[npm/packages/mcp-win32-x64/bin/hwpforge-mcp](../../../../sources/ai-screams__HwpForge/npm/packages/mcp-win32-x64/bin/hwpforge-mcp)<br>[npm/packages/mcp-linux-x64/bin/hwpforge-mcp](../../../../sources/ai-screams__HwpForge/npm/packages/mcp-linux-x64/bin/hwpforge-mcp)<br>[npm/packages/mcp-linux-arm64/bin/hwpforge-mcp](../../../../sources/ai-screams__HwpForge/npm/packages/mcp-linux-arm64/bin/hwpforge-mcp)<br>[npm/packages/mcp-darwin-x64/bin/hwpforge-mcp](../../../../sources/ai-screams__HwpForge/npm/packages/mcp-darwin-x64/bin/hwpforge-mcp)<br>[npm/packages/mcp-darwin-arm64/bin/hwpforge-mcp](../../../../sources/ai-screams__HwpForge/npm/packages/mcp-darwin-arm64/bin/hwpforge-mcp)<br>[npm/packages/mcp/bin/hwpforge-mcp.js](../../../../sources/ai-screams__HwpForge/npm/packages/mcp/bin/hwpforge-mcp.js)<br>[crates/hwpforge-smithy-md/src/lib.rs](../../../../sources/ai-screams__HwpForge/crates/hwpforge-smithy-md/src/lib.rs) |
| agentRuntime | 18 | [MEMORY.md](../../../../sources/ai-screams__HwpForge/MEMORY.md)<br>[crates/hwpforge-bindings-mcp/src/tools/convert.rs](../../../../sources/ai-screams__HwpForge/crates/hwpforge-bindings-mcp/src/tools/convert.rs)<br>[crates/hwpforge-bindings-mcp/src/tools/from_json.rs](../../../../sources/ai-screams__HwpForge/crates/hwpforge-bindings-mcp/src/tools/from_json.rs)<br>[crates/hwpforge-bindings-mcp/src/tools/inspect.rs](../../../../sources/ai-screams__HwpForge/crates/hwpforge-bindings-mcp/src/tools/inspect.rs)<br>[crates/hwpforge-bindings-mcp/src/tools/mod.rs](../../../../sources/ai-screams__HwpForge/crates/hwpforge-bindings-mcp/src/tools/mod.rs)<br>[crates/hwpforge-bindings-mcp/src/tools/patch.rs](../../../../sources/ai-screams__HwpForge/crates/hwpforge-bindings-mcp/src/tools/patch.rs)<br>[crates/hwpforge-bindings-mcp/src/tools/restyle.rs](../../../../sources/ai-screams__HwpForge/crates/hwpforge-bindings-mcp/src/tools/restyle.rs)<br>[crates/hwpforge-bindings-mcp/src/tools/templates.rs](../../../../sources/ai-screams__HwpForge/crates/hwpforge-bindings-mcp/src/tools/templates.rs) |
| mcp | 39 | [npm/packages/mcp-win32-x64/package.json](../../../../sources/ai-screams__HwpForge/npm/packages/mcp-win32-x64/package.json)<br>[npm/packages/mcp-win32-x64/README.md](../../../../sources/ai-screams__HwpForge/npm/packages/mcp-win32-x64/README.md)<br>[npm/packages/mcp-win32-x64/bin/hwpforge-mcp](../../../../sources/ai-screams__HwpForge/npm/packages/mcp-win32-x64/bin/hwpforge-mcp)<br>[npm/packages/mcp-linux-x64/package.json](../../../../sources/ai-screams__HwpForge/npm/packages/mcp-linux-x64/package.json)<br>[npm/packages/mcp-linux-x64/README.md](../../../../sources/ai-screams__HwpForge/npm/packages/mcp-linux-x64/README.md)<br>[npm/packages/mcp-linux-x64/bin/hwpforge-mcp](../../../../sources/ai-screams__HwpForge/npm/packages/mcp-linux-x64/bin/hwpforge-mcp)<br>[npm/packages/mcp-linux-arm64/package.json](../../../../sources/ai-screams__HwpForge/npm/packages/mcp-linux-arm64/package.json)<br>[npm/packages/mcp-linux-arm64/README.md](../../../../sources/ai-screams__HwpForge/npm/packages/mcp-linux-arm64/README.md) |
| retrieval | 2 | [MEMORY.md](../../../../sources/ai-screams__HwpForge/MEMORY.md)<br>[crates/hwpforge-foundation/src/index.rs](../../../../sources/ai-screams__HwpForge/crates/hwpforge-foundation/src/index.rs) |
| spec | 13 | [papers/giq-2026/questions/e2_experiment_v2_design.md](../../../../sources/ai-screams__HwpForge/papers/giq-2026/questions/e2_experiment_v2_design.md)<br>[examples/showcase/lists/list_acceptance_visual/00_all_in_one.hwpx](../../../../sources/ai-screams__HwpForge/examples/showcase/lists/list_acceptance_visual/00_all_in_one.hwpx)<br>[examples/showcase/lists/list_acceptance_visual/01_bullet.hwpx](../../../../sources/ai-screams__HwpForge/examples/showcase/lists/list_acceptance_visual/01_bullet.hwpx)<br>[examples/showcase/lists/list_acceptance_visual/02_numbered_outline.hwpx](../../../../sources/ai-screams__HwpForge/examples/showcase/lists/list_acceptance_visual/02_numbered_outline.hwpx)<br>[examples/showcase/lists/list_acceptance_visual/03_checkable.hwpx](../../../../sources/ai-screams__HwpForge/examples/showcase/lists/list_acceptance_visual/03_checkable.hwpx)<br>[examples/showcase/lists/list_acceptance_visual/04_checkable_continuation.hwpx](../../../../sources/ai-screams__HwpForge/examples/showcase/lists/list_acceptance_visual/04_checkable_continuation.hwpx)<br>[examples/showcase/lists/list_acceptance_visual/05_mixed_transition.hwpx](../../../../sources/ai-screams__HwpForge/examples/showcase/lists/list_acceptance_visual/05_mixed_transition.hwpx)<br>[examples/showcase/lists/list_acceptance_visual/list_acceptance_visual.rs](../../../../sources/ai-screams__HwpForge/examples/showcase/lists/list_acceptance_visual/list_acceptance_visual.rs) |
| eval | 225 | [tests/README.md](../../../../sources/ai-screams__HwpForge/tests/README.md)<br>[tests/fixtures/user_samples/sample-char-breakwordlatin-variants.hwp](../../../../sources/ai-screams__HwpForge/tests/fixtures/user_samples/sample-char-breakwordlatin-variants.hwp)<br>[tests/fixtures/user_samples/sample-char-breakwordlatin-variants.hwpx](../../../../sources/ai-screams__HwpForge/tests/fixtures/user_samples/sample-char-breakwordlatin-variants.hwpx)<br>[tests/fixtures/user_samples/sample-char-line-variants.hwp](../../../../sources/ai-screams__HwpForge/tests/fixtures/user_samples/sample-char-line-variants.hwp)<br>[tests/fixtures/user_samples/sample-char-line-variants.hwpx](../../../../sources/ai-screams__HwpForge/tests/fixtures/user_samples/sample-char-line-variants.hwpx)<br>[tests/fixtures/user_samples/sample-char-strike-variants.hwp](../../../../sources/ai-screams__HwpForge/tests/fixtures/user_samples/sample-char-strike-variants.hwp)<br>[tests/fixtures/user_samples/sample-char-strike-variants.hwpx](../../../../sources/ai-screams__HwpForge/tests/fixtures/user_samples/sample-char-strike-variants.hwpx)<br>[tests/fixtures/user_samples/sample-char-underline-variants.hwp](../../../../sources/ai-screams__HwpForge/tests/fixtures/user_samples/sample-char-underline-variants.hwp) |
| security | 6 | [SECURITY.md](../../../../sources/ai-screams__HwpForge/SECURITY.md)<br>[scripts/audit_hwp5_gate.py](../../../../sources/ai-screams__HwpForge/scripts/audit_hwp5_gate.py)<br>[crates/hwpforge-smithy-hwp5/examples/audit_batch.rs](../../../../sources/ai-screams__HwpForge/crates/hwpforge-smithy-hwp5/examples/audit_batch.rs)<br>[crates/hwpforge-bindings-cli/src/commands/audit_hwp5.rs](../../../../sources/ai-screams__HwpForge/crates/hwpforge-bindings-cli/src/commands/audit_hwp5.rs)<br>[.github/workflows/security.yml](../../../../sources/ai-screams__HwpForge/.github/workflows/security.yml)<br>[.audit/hwp5_baseline.json](../../../../sources/ai-screams__HwpForge/.audit/hwp5_baseline.json) |
| ci | 5 | [.github/workflows/ci.yml](../../../../sources/ai-screams__HwpForge/.github/workflows/ci.yml)<br>[.github/workflows/npm-publish.yml](../../../../sources/ai-screams__HwpForge/.github/workflows/npm-publish.yml)<br>[.github/workflows/pages.yml](../../../../sources/ai-screams__HwpForge/.github/workflows/pages.yml)<br>[.github/workflows/release-plz.yml](../../../../sources/ai-screams__HwpForge/.github/workflows/release-plz.yml)<br>[.github/workflows/security.yml](../../../../sources/ai-screams__HwpForge/.github/workflows/security.yml) |
| container | 6 | [tests/fixtures/charts/chart_01_single_column.hwp](../../../../sources/ai-screams__HwpForge/tests/fixtures/charts/chart_01_single_column.hwp)<br>[tests/fixtures/charts/chart_01_single_column.hwpx](../../../../sources/ai-screams__HwpForge/tests/fixtures/charts/chart_01_single_column.hwpx)<br>[tests/fixtures/charts/chart_02_single_pie.hwp](../../../../sources/ai-screams__HwpForge/tests/fixtures/charts/chart_02_single_pie.hwp)<br>[tests/fixtures/charts/chart_02_single_pie.hwpx](../../../../sources/ai-screams__HwpForge/tests/fixtures/charts/chart_02_single_pie.hwpx)<br>[tests/fixtures/charts/chart_03_line_or_scatter.hwp](../../../../sources/ai-screams__HwpForge/tests/fixtures/charts/chart_03_line_or_scatter.hwp)<br>[tests/fixtures/charts/chart_03_line_or_scatter.hwpx](../../../../sources/ai-screams__HwpForge/tests/fixtures/charts/chart_03_line_or_scatter.hwpx) |
| instruction | 1 | [CLAUDE.md](../../../../sources/ai-screams__HwpForge/CLAUDE.md) |
| docs | 33 | [README.md](../../../../sources/ai-screams__HwpForge/README.md)<br>[tests/README.md](../../../../sources/ai-screams__HwpForge/tests/README.md)<br>[papers/giq-2026/README.md](../../../../sources/ai-screams__HwpForge/papers/giq-2026/README.md)<br>[npm/packages/mcp-win32-x64/README.md](../../../../sources/ai-screams__HwpForge/npm/packages/mcp-win32-x64/README.md)<br>[npm/packages/mcp-linux-x64/README.md](../../../../sources/ai-screams__HwpForge/npm/packages/mcp-linux-x64/README.md)<br>[npm/packages/mcp-linux-arm64/README.md](../../../../sources/ai-screams__HwpForge/npm/packages/mcp-linux-arm64/README.md)<br>[npm/packages/mcp-darwin-x64/README.md](../../../../sources/ai-screams__HwpForge/npm/packages/mcp-darwin-x64/README.md)<br>[npm/packages/mcp-darwin-arm64/README.md](../../../../sources/ai-screams__HwpForge/npm/packages/mcp-darwin-arm64/README.md) |
| config | 18 | [Cargo.toml](../../../../sources/ai-screams__HwpForge/Cargo.toml)<br>[Makefile](../../../../sources/ai-screams__HwpForge/Makefile)<br>[npm/packages/mcp-win32-x64/package.json](../../../../sources/ai-screams__HwpForge/npm/packages/mcp-win32-x64/package.json)<br>[npm/packages/mcp-linux-x64/package.json](../../../../sources/ai-screams__HwpForge/npm/packages/mcp-linux-x64/package.json)<br>[npm/packages/mcp-linux-arm64/package.json](../../../../sources/ai-screams__HwpForge/npm/packages/mcp-linux-arm64/package.json)<br>[npm/packages/mcp-darwin-x64/package.json](../../../../sources/ai-screams__HwpForge/npm/packages/mcp-darwin-x64/package.json)<br>[npm/packages/mcp-darwin-arm64/package.json](../../../../sources/ai-screams__HwpForge/npm/packages/mcp-darwin-arm64/package.json)<br>[npm/packages/mcp/package.json](../../../../sources/ai-screams__HwpForge/npm/packages/mcp/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 225 | [tests/README.md](../../../../sources/ai-screams__HwpForge/tests/README.md)<br>[tests/fixtures/user_samples/sample-char-breakwordlatin-variants.hwp](../../../../sources/ai-screams__HwpForge/tests/fixtures/user_samples/sample-char-breakwordlatin-variants.hwp)<br>[tests/fixtures/user_samples/sample-char-breakwordlatin-variants.hwpx](../../../../sources/ai-screams__HwpForge/tests/fixtures/user_samples/sample-char-breakwordlatin-variants.hwpx)<br>[tests/fixtures/user_samples/sample-char-line-variants.hwp](../../../../sources/ai-screams__HwpForge/tests/fixtures/user_samples/sample-char-line-variants.hwp)<br>[tests/fixtures/user_samples/sample-char-line-variants.hwpx](../../../../sources/ai-screams__HwpForge/tests/fixtures/user_samples/sample-char-line-variants.hwpx)<br>[tests/fixtures/user_samples/sample-char-strike-variants.hwp](../../../../sources/ai-screams__HwpForge/tests/fixtures/user_samples/sample-char-strike-variants.hwp) |
| CI workflows | 5 | [.github/workflows/ci.yml](../../../../sources/ai-screams__HwpForge/.github/workflows/ci.yml)<br>[.github/workflows/npm-publish.yml](../../../../sources/ai-screams__HwpForge/.github/workflows/npm-publish.yml)<br>[.github/workflows/pages.yml](../../../../sources/ai-screams__HwpForge/.github/workflows/pages.yml)<br>[.github/workflows/release-plz.yml](../../../../sources/ai-screams__HwpForge/.github/workflows/release-plz.yml)<br>[.github/workflows/security.yml](../../../../sources/ai-screams__HwpForge/.github/workflows/security.yml) |
| Containers / deploy | 6 | [tests/fixtures/charts/chart_01_single_column.hwp](../../../../sources/ai-screams__HwpForge/tests/fixtures/charts/chart_01_single_column.hwp)<br>[tests/fixtures/charts/chart_01_single_column.hwpx](../../../../sources/ai-screams__HwpForge/tests/fixtures/charts/chart_01_single_column.hwpx)<br>[tests/fixtures/charts/chart_02_single_pie.hwp](../../../../sources/ai-screams__HwpForge/tests/fixtures/charts/chart_02_single_pie.hwp)<br>[tests/fixtures/charts/chart_02_single_pie.hwpx](../../../../sources/ai-screams__HwpForge/tests/fixtures/charts/chart_02_single_pie.hwpx)<br>[tests/fixtures/charts/chart_03_line_or_scatter.hwp](../../../../sources/ai-screams__HwpForge/tests/fixtures/charts/chart_03_line_or_scatter.hwp)<br>[tests/fixtures/charts/chart_03_line_or_scatter.hwpx](../../../../sources/ai-screams__HwpForge/tests/fixtures/charts/chart_03_line_or_scatter.hwpx) |
| Security / policy | 6 | [SECURITY.md](../../../../sources/ai-screams__HwpForge/SECURITY.md)<br>[scripts/audit_hwp5_gate.py](../../../../sources/ai-screams__HwpForge/scripts/audit_hwp5_gate.py)<br>[crates/hwpforge-smithy-hwp5/examples/audit_batch.rs](../../../../sources/ai-screams__HwpForge/crates/hwpforge-smithy-hwp5/examples/audit_batch.rs)<br>[crates/hwpforge-bindings-cli/src/commands/audit_hwp5.rs](../../../../sources/ai-screams__HwpForge/crates/hwpforge-bindings-cli/src/commands/audit_hwp5.rs)<br>[.github/workflows/security.yml](../../../../sources/ai-screams__HwpForge/.github/workflows/security.yml)<br>[.audit/hwp5_baseline.json](../../../../sources/ai-screams__HwpForge/.audit/hwp5_baseline.json) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/ai-screams__HwpForge/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `npm/packages/mcp-win32-x64/package.json`, `npm/packages/mcp-win32-x64/README.md`, `npm/packages/mcp-win32-x64/bin/hwpforge-mcp`.
2. Trace execution through entrypoints: `server.json`, `npm/packages/mcp-win32-x64/bin/hwpforge-mcp`, `npm/packages/mcp-linux-x64/bin/hwpforge-mcp`.
3. Map agent/tool runtime through: `MEMORY.md`, `crates/hwpforge-bindings-mcp/src/tools/convert.rs`, `crates/hwpforge-bindings-mcp/src/tools/from_json.rs`.
4. Inspect retrieval/memory/indexing through: `MEMORY.md`, `crates/hwpforge-foundation/src/index.rs`.
5. Verify behavior through test/eval files: `tests/README.md`, `tests/fixtures/user_samples/sample-char-breakwordlatin-variants.hwp`, `tests/fixtures/user_samples/sample-char-breakwordlatin-variants.hwpx`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Rust library for programmatic control of Korean HWPX documents — Markdown→HWPX conversion, JSON round trip editing, MCP . 핵심 구조 신호는 Rust, Cargo.toml, Makefile, README.md, CLAUDE.md, mcp이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
