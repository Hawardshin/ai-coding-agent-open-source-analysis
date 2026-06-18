# justrach/codedb Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Zig code intelligence server and MCP toolset for AI agents. Fast tree, outline, symbol, search, read, edit, deps, snapshot, and remote GitHub repo queries.

## 요약

- 조사 단위: `sources/justrach__codedb` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 665 files, 64 directories, depth score 123, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/mcp.zig, src/test_mcp.zig, scripts/e2e_mcp_test.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | justrach/codedb |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Zig |
| Stars | 1332 |
| Forks | 79 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/justrach__codedb](../../../../sources/justrach__codedb) |
| Existing report | [reports/global-trending/repositories/justrach__codedb.md](../../../global-trending/repositories/justrach__codedb.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 665 / 64 |
| Max observed depth | 6 |
| Top directories | .github, assets, bench, benchmarks, docs, experiments, install, npm, scripts, socials, src, website, zig-pkg |
| Top extensions | .json: 202, .patch: 118, .log: 107, .zig: 86, .md: 57, .txt: 31, .py: 26, .sh: 10, (none): 10, .js: 4, .yml: 3, .zon: 3 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 21 |
| docs | documentation surface | 9 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| bench | validation surface | 1 |
| benchmarks | validation surface | 1 |
| experiments | top-level component | 1 |
| install | top-level component | 1 |
| npm | top-level component | 1 |
| scripts | top-level component | 1 |
| socials | ci surface | 1 |
| website | documentation surface | 1 |
| zig-pkg | top-level component | 1 |


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
| mcp | [src/mcp.zig](../../../../sources/justrach__codedb/src/mcp.zig) | mcp signal |
| mcp | [src/test_mcp.zig](../../../../sources/justrach__codedb/src/test_mcp.zig) | mcp signal |
| mcp | [scripts/e2e_mcp_test.py](../../../../sources/justrach__codedb/scripts/e2e_mcp_test.py) | mcp signal |
| mcp | [docs/mcp.md](../../../../sources/justrach__codedb/docs/mcp.md) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/justrach__codedb/AGENTS.md) | agentRuntime signal |
| agentRuntime | [src/agent.zig](../../../../sources/justrach__codedb/src/agent.zig) | agentRuntime signal |
| agentRuntime | [docs/agents.md](../../../../sources/justrach__codedb/docs/agents.md) | agentRuntime signal |
| agentRuntime | [docs/hooks-labs.md](../../../../sources/justrach__codedb/docs/hooks-labs.md) | agentRuntime signal |
| entrypoints | [website/src/main.zig](../../../../sources/justrach__codedb/website/src/main.zig) | entrypoints signal |
| entrypoints | [website/src/server.zig](../../../../sources/justrach__codedb/website/src/server.zig) | entrypoints signal |
| entrypoints | [src/index.zig](../../../../sources/justrach__codedb/src/index.zig) | entrypoints signal |
| entrypoints | [src/main.zig](../../../../sources/justrach__codedb/src/main.zig) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 6 | [website/src/main.zig](../../../../sources/justrach__codedb/website/src/main.zig)<br>[website/src/server.zig](../../../../sources/justrach__codedb/website/src/server.zig)<br>[src/index.zig](../../../../sources/justrach__codedb/src/index.zig)<br>[src/main.zig](../../../../sources/justrach__codedb/src/main.zig)<br>[src/server.zig](../../../../sources/justrach__codedb/src/server.zig)<br>[npm/bin/codedb.js](../../../../sources/justrach__codedb/npm/bin/codedb.js) |
| agentRuntime | 5 | [AGENTS.md](../../../../sources/justrach__codedb/AGENTS.md)<br>[src/agent.zig](../../../../sources/justrach__codedb/src/agent.zig)<br>[docs/agents.md](../../../../sources/justrach__codedb/docs/agents.md)<br>[docs/hooks-labs.md](../../../../sources/justrach__codedb/docs/hooks-labs.md)<br>[docs/skills.md](../../../../sources/justrach__codedb/docs/skills.md) |
| mcp | 6 | [src/mcp.zig](../../../../sources/justrach__codedb/src/mcp.zig)<br>[src/test_mcp.zig](../../../../sources/justrach__codedb/src/test_mcp.zig)<br>[scripts/e2e_mcp_test.py](../../../../sources/justrach__codedb/scripts/e2e_mcp_test.py)<br>[docs/mcp.md](../../../../sources/justrach__codedb/docs/mcp.md)<br>[docs/rfc-346-mcp-root-resolution.md](../../../../sources/justrach__codedb/docs/rfc-346-mcp-root-resolution.md)<br>[benchmarks/search-shootout/results/react-2026-05-20-leanctx-mcp.md](../../../../sources/justrach__codedb/benchmarks/search-shootout/results/react-2026-05-20-leanctx-mcp.md) |
| retrieval | 3 | [website/app/index.zig](../../../../sources/justrach__codedb/website/app/index.zig)<br>[src/index.zig](../../../../sources/justrach__codedb/src/index.zig)<br>[src/test_index.zig](../../../../sources/justrach__codedb/src/test_index.zig) |
| spec | 3 | [experiments/reader-md/SPEC.md](../../../../sources/justrach__codedb/experiments/reader-md/SPEC.md)<br>[docs/architecture.md](../../../../sources/justrach__codedb/docs/architecture.md)<br>[docs/design/ace-integration.md](../../../../sources/justrach__codedb/docs/design/ace-integration.md) |
| eval | 511 | [zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/run.sh](../../../../sources/justrach__codedb/zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/run.sh)<br>[zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/001_literal.txt](../../../../sources/justrach__codedb/zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/001_literal.txt)<br>[zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/002_dot_star.txt](../../../../sources/justrach__codedb/zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/002_dot_star.txt)<br>[zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/003_char_class.txt](../../../../sources/justrach__codedb/zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/003_char_class.txt)<br>[zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/004_anchors.txt](../../../../sources/justrach__codedb/zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/004_anchors.txt)<br>[zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/005_alternation.txt](../../../../sources/justrach__codedb/zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/005_alternation.txt)<br>[zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/006_shorthand_digit.txt](../../../../sources/justrach__codedb/zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/006_shorthand_digit.txt)<br>[zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/007_group_capture.txt](../../../../sources/justrach__codedb/zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/007_group_capture.txt) |
| security | 2 | [src/root_policy.zig](../../../../sources/justrach__codedb/src/root_policy.zig)<br>[.github/workflows/pr-base-guard.yml](../../../../sources/justrach__codedb/.github/workflows/pr-base-guard.yml) |
| ci | 3 | [.github/workflows/bench-regression.yml](../../../../sources/justrach__codedb/.github/workflows/bench-regression.yml)<br>[.github/workflows/pr-base-guard.yml](../../../../sources/justrach__codedb/.github/workflows/pr-base-guard.yml)<br>[.github/workflows/release-binaries.yml](../../../../sources/justrach__codedb/.github/workflows/release-binaries.yml) |
| container | 0 | not obvious |
| instruction | 4 | [AGENTS.md](../../../../sources/justrach__codedb/AGENTS.md)<br>[CLAUDE.md](../../../../sources/justrach__codedb/CLAUDE.md)<br>[docs/agents.md](../../../../sources/justrach__codedb/docs/agents.md)<br>[.github/copilot-instructions.md](../../../../sources/justrach__codedb/.github/copilot-instructions.md) |
| docs | 54 | [README.md](../../../../sources/justrach__codedb/README.md)<br>[zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/README.md](../../../../sources/justrach__codedb/zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/README.md)<br>[website/.zigrep_archive](../../../../sources/justrach__codedb/website/.zigrep_archive)<br>[website/build.zig](../../../../sources/justrach__codedb/website/build.zig)<br>[website/build.zig.zon](../../../../sources/justrach__codedb/website/build.zig.zon)<br>[website/worker/worker.js](../../../../sources/justrach__codedb/website/worker/worker.js)<br>[website/worker/wrangler.toml](../../../../sources/justrach__codedb/website/worker/wrangler.toml)<br>[website/src/css.zig](../../../../sources/justrach__codedb/website/src/css.zig) |
| config | 1 | [npm/package.json](../../../../sources/justrach__codedb/npm/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 511 | [zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/run.sh](../../../../sources/justrach__codedb/zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/run.sh)<br>[zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/001_literal.txt](../../../../sources/justrach__codedb/zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/001_literal.txt)<br>[zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/002_dot_star.txt](../../../../sources/justrach__codedb/zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/002_dot_star.txt)<br>[zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/003_char_class.txt](../../../../sources/justrach__codedb/zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/003_char_class.txt)<br>[zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/004_anchors.txt](../../../../sources/justrach__codedb/zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/004_anchors.txt)<br>[zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/005_alternation.txt](../../../../sources/justrach__codedb/zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/005_alternation.txt) |
| CI workflows | 3 | [.github/workflows/bench-regression.yml](../../../../sources/justrach__codedb/.github/workflows/bench-regression.yml)<br>[.github/workflows/pr-base-guard.yml](../../../../sources/justrach__codedb/.github/workflows/pr-base-guard.yml)<br>[.github/workflows/release-binaries.yml](../../../../sources/justrach__codedb/.github/workflows/release-binaries.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 2 | [src/root_policy.zig](../../../../sources/justrach__codedb/src/root_policy.zig)<br>[.github/workflows/pr-base-guard.yml](../../../../sources/justrach__codedb/.github/workflows/pr-base-guard.yml) |
| Agent instructions | 4 | [AGENTS.md](../../../../sources/justrach__codedb/AGENTS.md)<br>[CLAUDE.md](../../../../sources/justrach__codedb/CLAUDE.md)<br>[docs/agents.md](../../../../sources/justrach__codedb/docs/agents.md)<br>[.github/copilot-instructions.md](../../../../sources/justrach__codedb/.github/copilot-instructions.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `src/mcp.zig`, `src/test_mcp.zig`, `scripts/e2e_mcp_test.py`.
2. Trace execution through entrypoints: `website/src/main.zig`, `website/src/server.zig`, `src/index.zig`.
3. Map agent/tool runtime through: `AGENTS.md`, `src/agent.zig`, `docs/agents.md`.
4. Inspect retrieval/memory/indexing through: `website/app/index.zig`, `src/index.zig`, `src/test_index.zig`.
5. Verify behavior through test/eval files: `zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/run.sh`, `zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/001_literal.txt`, `zig-pkg/nanoregex-0.0.1-EdkhcXoqAgC6HvjxEqNIedT0YWMRfouWk8dh4G5ZC2L9/tests/parity/fixtures/002_dot_star.txt`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Zig code intelligence server and MCP toolset for AI agents. Fast tree, outline, symbol, search, read, edit, deps, snapsh. 핵심 구조 신호는 Zig, README.md, AGENTS.md, CLAUDE.md, LICENSE, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
