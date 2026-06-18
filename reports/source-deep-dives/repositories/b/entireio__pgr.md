# entireio/pgr Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 425 files, 30 directories.

## 요약

- 조사 단위: `sources/entireio__pgr` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 425 files, 30 directories, depth score 101, key references 8개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/mcp_integration.rs이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | entireio/pgr |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/entireio__pgr](../../../../sources/entireio__pgr) |
| Existing report | [reports/clone-structures/entireio__pgr.md](../../../clone-structures/entireio__pgr.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 425 / 30 |
| Max observed depth | 7 |
| Top directories | assets, docs, eval, public_release, src, tests |
| Top extensions | .json: 387, .md: 15, .py: 10, .rs: 6, (none): 3, .gz: 1, .lock: 1, .png: 1, .toml: 1 |
| Source patterns | cli-first, agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 3 |
| tests | validation surface | 3 |
| docs | documentation surface | 2 |
| assets | top-level component | 1 |
| eval | top-level component | 1 |
| public_release | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


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
| mcp | [tests/mcp_integration.rs](../../../../sources/entireio__pgr/tests/mcp_integration.rs) | mcp signal |
| agentRuntime | [src/tools.rs](../../../../sources/entireio__pgr/src/tools.rs) | agentRuntime signal |
| agentRuntime | [eval/v2/agent.py](../../../../sources/entireio__pgr/eval/v2/agent.py) | agentRuntime signal |
| agentRuntime | [eval/v2/tools.py](../../../../sources/entireio__pgr/eval/v2/tools.py) | agentRuntime signal |
| entrypoints | [src/main.rs](../../../../sources/entireio__pgr/src/main.rs) | entrypoints signal |
| config | [Cargo.lock](../../../../sources/entireio__pgr/Cargo.lock) | config signal |
| config | [Cargo.toml](../../../../sources/entireio__pgr/Cargo.toml) | config signal |
| eval | [public_release/benchmarks/entireio_cli_ranking_public60/run_benchmark.py](../../../../sources/entireio__pgr/public_release/benchmarks/entireio_cli_ranking_public60/run_benchmark.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/main.rs](../../../../sources/entireio__pgr/src/main.rs) |
| agentRuntime | 3 | [src/tools.rs](../../../../sources/entireio__pgr/src/tools.rs)<br>[eval/v2/agent.py](../../../../sources/entireio__pgr/eval/v2/agent.py)<br>[eval/v2/tools.py](../../../../sources/entireio__pgr/eval/v2/tools.py) |
| mcp | 1 | [tests/mcp_integration.rs](../../../../sources/entireio__pgr/tests/mcp_integration.rs) |
| retrieval | 0 | not obvious |
| spec | 3 | [public_release/benchmarks/entireio_cli_ranking_public60/design_full60.json](../../../../sources/entireio__pgr/public_release/benchmarks/entireio_cli_ranking_public60/design_full60.json)<br>[public_release/benchmarks/entireio_cli_ranking_public60/design_pilot25.json](../../../../sources/entireio__pgr/public_release/benchmarks/entireio_cli_ranking_public60/design_pilot25.json)<br>[public_release/benchmarks/entireio_cli_fff_vs_baseline_public60/design.json](../../../../sources/entireio__pgr/public_release/benchmarks/entireio_cli_fff_vs_baseline_public60/design.json) |
| eval | 9 | [tests/mcp_integration.rs](../../../../sources/entireio__pgr/tests/mcp_integration.rs)<br>[public_release/benchmarks/entireio_cli_ranking_public60/run_benchmark.py](../../../../sources/entireio__pgr/public_release/benchmarks/entireio_cli_ranking_public60/run_benchmark.py)<br>[public_release/benchmarks/entireio_cli_fff_vs_baseline_public60/run_benchmark.py](../../../../sources/entireio__pgr/public_release/benchmarks/entireio_cli_fff_vs_baseline_public60/run_benchmark.py)<br>[eval/v2/agent.py](../../../../sources/entireio__pgr/eval/v2/agent.py)<br>[eval/v2/tools.py](../../../../sources/entireio__pgr/eval/v2/tools.py)<br>[eval/v2/backends/__init__.py](../../../../sources/entireio__pgr/eval/v2/backends/__init__.py)<br>[eval/v2/backends/baseline.py](../../../../sources/entireio__pgr/eval/v2/backends/baseline.py)<br>[eval/v2/backends/fff_backend.py](../../../../sources/entireio__pgr/eval/v2/backends/fff_backend.py) |
| security | 1 | [SECURITY.md](../../../../sources/entireio__pgr/SECURITY.md) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 7 | [README.md](../../../../sources/entireio__pgr/README.md)<br>[public_release/README.md](../../../../sources/entireio__pgr/public_release/README.md)<br>[public_release/data/entireio_cli_checkpoints_2026_04_15/README.md](../../../../sources/entireio__pgr/public_release/data/entireio_cli_checkpoints_2026_04_15/README.md)<br>[public_release/benchmarks/entireio_cli_ranking_public60/README.md](../../../../sources/entireio__pgr/public_release/benchmarks/entireio_cli_ranking_public60/README.md)<br>[public_release/benchmarks/entireio_cli_offline_ir_public60/README.md](../../../../sources/entireio__pgr/public_release/benchmarks/entireio_cli_offline_ir_public60/README.md)<br>[public_release/benchmarks/entireio_cli_fff_vs_baseline_public60/README.md](../../../../sources/entireio__pgr/public_release/benchmarks/entireio_cli_fff_vs_baseline_public60/README.md)<br>[docs/usage.md](../../../../sources/entireio__pgr/docs/usage.md) |
| config | 2 | [Cargo.lock](../../../../sources/entireio__pgr/Cargo.lock)<br>[Cargo.toml](../../../../sources/entireio__pgr/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 9 | [tests/mcp_integration.rs](../../../../sources/entireio__pgr/tests/mcp_integration.rs)<br>[public_release/benchmarks/entireio_cli_ranking_public60/run_benchmark.py](../../../../sources/entireio__pgr/public_release/benchmarks/entireio_cli_ranking_public60/run_benchmark.py)<br>[public_release/benchmarks/entireio_cli_fff_vs_baseline_public60/run_benchmark.py](../../../../sources/entireio__pgr/public_release/benchmarks/entireio_cli_fff_vs_baseline_public60/run_benchmark.py)<br>[eval/v2/agent.py](../../../../sources/entireio__pgr/eval/v2/agent.py)<br>[eval/v2/tools.py](../../../../sources/entireio__pgr/eval/v2/tools.py)<br>[eval/v2/backends/__init__.py](../../../../sources/entireio__pgr/eval/v2/backends/__init__.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [SECURITY.md](../../../../sources/entireio__pgr/SECURITY.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/mcp_integration.rs`, `src/tools.rs`, `eval/v2/agent.py`.
2. Trace execution through entrypoints: `src/main.rs`.
3. Map agent/tool runtime through: `src/tools.rs`, `eval/v2/agent.py`, `eval/v2/tools.py`.
4. Verify behavior through test/eval files: `tests/mcp_integration.rs`, `public_release/benchmarks/entireio_cli_ranking_public60/run_benchmark.py`, `public_release/benchmarks/entireio_cli_fff_vs_baseline_public60/run_benchmark.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 425 files, 30 directories.. 핵심 구조 신호는 Cargo.toml, README.md, LICENSE, mcp, tests, docs이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 ci signal not obvious, license metadata missing입니다.
