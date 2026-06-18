# JunsikChoi/korea-cli Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Access Korea's public data APIs with natural language. CLI + MCP server powered by LLM.

## 요약

- 조사 단위: `sources/JunsikChoi__korea-cli` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 483 files, 20 directories, depth score 108, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/main.rs, src/mcp/server.rs, src/bin/analyze_pages.rs이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | JunsikChoi/korea-cli |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | Rust |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/JunsikChoi__korea-cli](../../../../sources/JunsikChoi__korea-cli) |
| Existing report | [reports/korea-trending/repositories/JunsikChoi__korea-cli.md](../../../korea-trending/repositories/JunsikChoi__korea-cli.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 483 / 20 |
| Max observed depth | 4 |
| Top directories | .github, data, docs, scripts, src, tests, website |
| Top extensions | .md: 438, .rs: 33, (none): 6, .yml: 2, .example: 1, .lock: 1, .sh: 1, .toml: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 53 |
| src | source boundary | 17 |
| tests | validation surface | 7 |
| .github | ci surface | 1 |
| data | top-level component | 1 |
| scripts | top-level component | 1 |
| website | documentation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | update-bundle | make update-bundle |
| build | Makefile | verify-bundle-local | make verify-bundle-local |


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
| entrypoints | [src/main.rs](../../../../sources/JunsikChoi__korea-cli/src/main.rs) | entrypoints signal |
| entrypoints | [src/mcp/server.rs](../../../../sources/JunsikChoi__korea-cli/src/mcp/server.rs) | entrypoints signal |
| entrypoints | [src/bin/analyze_pages.rs](../../../../sources/JunsikChoi__korea-cli/src/bin/analyze_pages.rs) | entrypoints signal |
| entrypoints | [src/bin/build_bundle.rs](../../../../sources/JunsikChoi__korea-cli/src/bin/build_bundle.rs) | entrypoints signal |
| config | [Cargo.lock](../../../../sources/JunsikChoi__korea-cli/Cargo.lock) | config signal |
| config | [Cargo.toml](../../../../sources/JunsikChoi__korea-cli/Cargo.toml) | config signal |
| config | [Makefile](../../../../sources/JunsikChoi__korea-cli/Makefile) | config signal |
| ci | [.github/workflows/bundle-ci.yml](../../../../sources/JunsikChoi__korea-cli/.github/workflows/bundle-ci.yml) | ci signal |
| ci | [.github/workflows/release.yml](../../../../sources/JunsikChoi__korea-cli/.github/workflows/release.yml) | ci signal |
| docs | [README.md](../../../../sources/JunsikChoi__korea-cli/README.md) | docs signal |
| docs | [website/.gitkeep](../../../../sources/JunsikChoi__korea-cli/website/.gitkeep) | docs signal |
| docs | [docs/specs/2026-03-31-bundle-transition-design.md](../../../../sources/JunsikChoi__korea-cli/docs/specs/2026-03-31-bundle-transition-design.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 10 | [src/main.rs](../../../../sources/JunsikChoi__korea-cli/src/main.rs)<br>[src/mcp/server.rs](../../../../sources/JunsikChoi__korea-cli/src/mcp/server.rs)<br>[src/bin/analyze_pages.rs](../../../../sources/JunsikChoi__korea-cli/src/bin/analyze_pages.rs)<br>[src/bin/build_bundle.rs](../../../../sources/JunsikChoi__korea-cli/src/bin/build_bundle.rs)<br>[src/bin/crawl_pages.rs](../../../../sources/JunsikChoi__korea-cli/src/bin/crawl_pages.rs)<br>[src/bin/gen_catalog_docs.rs](../../../../sources/JunsikChoi__korea-cli/src/bin/gen_catalog_docs.rs)<br>[src/bin/html_survey.rs](../../../../sources/JunsikChoi__korea-cli/src/bin/html_survey.rs)<br>[src/bin/summarize_signals.rs](../../../../sources/JunsikChoi__korea-cli/src/bin/summarize_signals.rs) |
| agentRuntime | 1 | [src/mcp/tools.rs](../../../../sources/JunsikChoi__korea-cli/src/mcp/tools.rs) |
| mcp | 3 | [src/mcp/mod.rs](../../../../sources/JunsikChoi__korea-cli/src/mcp/mod.rs)<br>[src/mcp/server.rs](../../../../sources/JunsikChoi__korea-cli/src/mcp/server.rs)<br>[src/mcp/tools.rs](../../../../sources/JunsikChoi__korea-cli/src/mcp/tools.rs) |
| retrieval | 0 | not obvious |
| spec | 12 | [src/cli/spec.rs](../../../../sources/JunsikChoi__korea-cli/src/cli/spec.rs)<br>[docs/specs/2026-03-31-bundle-transition-design.md](../../../../sources/JunsikChoi__korea-cli/docs/specs/2026-03-31-bundle-transition-design.md)<br>[docs/specs/2026-03-31-phase1-mvp-design.md](../../../../sources/JunsikChoi__korea-cli/docs/specs/2026-03-31-phase1-mvp-design.md)<br>[docs/specs/2026-04-02-gateway-spec-extraction-design.md](../../../../sources/JunsikChoi__korea-cli/docs/specs/2026-04-02-gateway-spec-extraction-design.md)<br>[docs/specs/2026-04-02-html-pattern-discovery-design.md](../../../../sources/JunsikChoi__korea-cli/docs/specs/2026-04-02-html-pattern-discovery-design.md)<br>[docs/specs/2026-04-04-partial-stub-and-ci-pipeline-design.md](../../../../sources/JunsikChoi__korea-cli/docs/specs/2026-04-04-partial-stub-and-ci-pipeline-design.md)<br>[docs/specs/2026-04-05-partial-stub-finalization-design.md](../../../../sources/JunsikChoi__korea-cli/docs/specs/2026-04-05-partial-stub-finalization-design.md)<br>[docs/roadmap/phase1-mvp.md](../../../../sources/JunsikChoi__korea-cli/docs/roadmap/phase1-mvp.md) |
| eval | 10 | [tests/.gitkeep](../../../../sources/JunsikChoi__korea-cli/tests/.gitkeep)<br>[tests/integration/caller_test.rs](../../../../sources/JunsikChoi__korea-cli/tests/integration/caller_test.rs)<br>[tests/integration/catalog_test.rs](../../../../sources/JunsikChoi__korea-cli/tests/integration/catalog_test.rs)<br>[tests/integration/config_test.rs](../../../../sources/JunsikChoi__korea-cli/tests/integration/config_test.rs)<br>[tests/integration/e2e_gateway_smoke.rs](../../../../sources/JunsikChoi__korea-cli/tests/integration/e2e_gateway_smoke.rs)<br>[tests/integration/swagger_test.rs](../../../../sources/JunsikChoi__korea-cli/tests/integration/swagger_test.rs)<br>[src/cli/spec.rs](../../../../sources/JunsikChoi__korea-cli/src/cli/spec.rs)<br>[docs/specs/2026-04-02-gateway-spec-extraction-design.md](../../../../sources/JunsikChoi__korea-cli/docs/specs/2026-04-02-gateway-spec-extraction-design.md) |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/bundle-ci.yml](../../../../sources/JunsikChoi__korea-cli/.github/workflows/bundle-ci.yml)<br>[.github/workflows/release.yml](../../../../sources/JunsikChoi__korea-cli/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 1 | [CLAUDE.md](../../../../sources/JunsikChoi__korea-cli/CLAUDE.md) |
| docs | 435 | [README.md](../../../../sources/JunsikChoi__korea-cli/README.md)<br>[website/.gitkeep](../../../../sources/JunsikChoi__korea-cli/website/.gitkeep)<br>[docs/specs/2026-03-31-bundle-transition-design.md](../../../../sources/JunsikChoi__korea-cli/docs/specs/2026-03-31-bundle-transition-design.md)<br>[docs/specs/2026-03-31-phase1-mvp-design.md](../../../../sources/JunsikChoi__korea-cli/docs/specs/2026-03-31-phase1-mvp-design.md)<br>[docs/specs/2026-04-02-gateway-spec-extraction-design.md](../../../../sources/JunsikChoi__korea-cli/docs/specs/2026-04-02-gateway-spec-extraction-design.md)<br>[docs/specs/2026-04-02-html-pattern-discovery-design.md](../../../../sources/JunsikChoi__korea-cli/docs/specs/2026-04-02-html-pattern-discovery-design.md)<br>[docs/specs/2026-04-04-partial-stub-and-ci-pipeline-design.md](../../../../sources/JunsikChoi__korea-cli/docs/specs/2026-04-04-partial-stub-and-ci-pipeline-design.md)<br>[docs/specs/2026-04-05-partial-stub-finalization-design.md](../../../../sources/JunsikChoi__korea-cli/docs/specs/2026-04-05-partial-stub-finalization-design.md) |
| config | 3 | [Cargo.lock](../../../../sources/JunsikChoi__korea-cli/Cargo.lock)<br>[Cargo.toml](../../../../sources/JunsikChoi__korea-cli/Cargo.toml)<br>[Makefile](../../../../sources/JunsikChoi__korea-cli/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 10 | [tests/.gitkeep](../../../../sources/JunsikChoi__korea-cli/tests/.gitkeep)<br>[tests/integration/caller_test.rs](../../../../sources/JunsikChoi__korea-cli/tests/integration/caller_test.rs)<br>[tests/integration/catalog_test.rs](../../../../sources/JunsikChoi__korea-cli/tests/integration/catalog_test.rs)<br>[tests/integration/config_test.rs](../../../../sources/JunsikChoi__korea-cli/tests/integration/config_test.rs)<br>[tests/integration/e2e_gateway_smoke.rs](../../../../sources/JunsikChoi__korea-cli/tests/integration/e2e_gateway_smoke.rs)<br>[tests/integration/swagger_test.rs](../../../../sources/JunsikChoi__korea-cli/tests/integration/swagger_test.rs) |
| CI workflows | 2 | [.github/workflows/bundle-ci.yml](../../../../sources/JunsikChoi__korea-cli/.github/workflows/bundle-ci.yml)<br>[.github/workflows/release.yml](../../../../sources/JunsikChoi__korea-cli/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/JunsikChoi__korea-cli/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/main.rs`, `src/mcp/server.rs`, `src/bin/analyze_pages.rs`.
2. Trace execution through entrypoints: `src/main.rs`, `src/mcp/server.rs`, `src/bin/analyze_pages.rs`.
3. Map agent/tool runtime through: `src/mcp/tools.rs`.
4. Verify behavior through test/eval files: `tests/.gitkeep`, `tests/integration/caller_test.rs`, `tests/integration/catalog_test.rs`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 Access Korea's public data APIs with natural language. CLI + MCP server powered by LLM.. 핵심 구조 신호는 Rust, Cargo.toml, Makefile, README.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
