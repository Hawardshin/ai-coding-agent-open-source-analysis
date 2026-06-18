# brycewang-stanford/StatsPAI Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

StatsPAI is the first agent-native Python library for causal inference and applied econometrics — unified API, broad cross-method coverage, structured result objects, machine-readable schemas, an MCP server, and R/Stata parity validation.

## 요약

- 조사 단위: `sources/brycewang-stanford__StatsPAI` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,361 files, 163 directories, depth score 114, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test_mcp_enrichment.py, tests/test_mcp_error_envelope.py, tests/test_mcp_image_content.py이고, 의존성 단서는 mcp, torch, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | brycewang-stanford/StatsPAI |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 233 |
| Forks | 44 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/brycewang-stanford__StatsPAI](../../../../sources/brycewang-stanford__StatsPAI) |
| Existing report | [reports/global-trending/repositories/brycewang-stanford__StatsPAI.md](../../../global-trending/repositories/brycewang-stanford__StatsPAI.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2361 / 163 |
| Max observed depth | 6 |
| Top directories | .cov_decomp, .coverage_campaign, .examples_campaign, .github, .tier_eg_campaign, .tierd_campaign, benchmarks, docs, examples, papers, plans, rust, schemas, scripts, specs, src, StatsPAI_full_data_analysis_skill, test-notebooks, tests, tools |
| Top extensions | .py: 1543, .json: 272, .md: 188, .csv: 97, .r: 97, .do: 65, .dat: 33, .yml: 11, .rs: 8, (none): 6, .html: 5, .latex: 5 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 86 |
| docs | documentation surface | 43 |
| src | source boundary | 37 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| papers | top-level component | 1 |
| plans | top-level component | 1 |
| rust | top-level component | 1 |
| schemas | top-level component | 1 |
| scripts | top-level component | 1 |
| specs | top-level component | 1 |
| StatsPAI_full_data_analysis_skill | top-level component | 1 |
| test-notebooks | validation surface | 1 |
| tools | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | statspai | statspai |
| utility | pyproject.toml | statspai-mcp | statspai-mcp |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | torch, transformers |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [tests/test_mcp_enrichment.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_mcp_enrichment.py) | mcp signal |
| mcp | [tests/test_mcp_error_envelope.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_mcp_error_envelope.py) | mcp signal |
| mcp | [tests/test_mcp_image_content.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_mcp_image_content.py) | mcp signal |
| mcp | [tests/test_mcp_interpret_result.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_mcp_interpret_result.py) | mcp signal |
| agentRuntime | [tools/audit_bib_coverage.py](../../../../sources/brycewang-stanford__StatsPAI/tools/audit_bib_coverage.py) | agentRuntime signal |
| agentRuntime | [tools/audit_bib_duplicates.py](../../../../sources/brycewang-stanford__StatsPAI/tools/audit_bib_duplicates.py) | agentRuntime signal |
| agentRuntime | [tools/audit_citations.py](../../../../sources/brycewang-stanford__StatsPAI/tools/audit_citations.py) | agentRuntime signal |
| agentRuntime | [tools/audit_retractions.py](../../../../sources/brycewang-stanford__StatsPAI/tools/audit_retractions.py) | agentRuntime signal |
| config | [pyproject.toml](../../../../sources/brycewang-stanford__StatsPAI/pyproject.toml) | config signal |
| config | [rust/statspai_hdfe/Cargo.lock](../../../../sources/brycewang-stanford__StatsPAI/rust/statspai_hdfe/Cargo.lock) | config signal |
| config | [rust/statspai_hdfe/Cargo.toml](../../../../sources/brycewang-stanford__StatsPAI/rust/statspai_hdfe/Cargo.toml) | config signal |
| ci | [.github/workflows/benchmarks.yml](../../../../sources/brycewang-stanford__StatsPAI/.github/workflows/benchmarks.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 65 | [tools/audit_bib_coverage.py](../../../../sources/brycewang-stanford__StatsPAI/tools/audit_bib_coverage.py)<br>[tools/audit_bib_duplicates.py](../../../../sources/brycewang-stanford__StatsPAI/tools/audit_bib_duplicates.py)<br>[tools/audit_citations.py](../../../../sources/brycewang-stanford__StatsPAI/tools/audit_citations.py)<br>[tools/audit_retractions.py](../../../../sources/brycewang-stanford__StatsPAI/tools/audit_retractions.py)<br>[tools/suggest_bibkey_backfills.py](../../../../sources/brycewang-stanford__StatsPAI/tools/suggest_bibkey_backfills.py)<br>[tests/agent_eval/test_did_workflow_transcript.py](../../../../sources/brycewang-stanford__StatsPAI/tests/agent_eval/test_did_workflow_transcript.py)<br>[tests/agent_bench/BUDGET_RUNBOOK.md](../../../../sources/brycewang-stanford__StatsPAI/tests/agent_bench/BUDGET_RUNBOOK.md)<br>[tests/agent_bench/README.md](../../../../sources/brycewang-stanford__StatsPAI/tests/agent_bench/README.md) |
| mcp | 12 | [tests/test_mcp_enrichment.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_mcp_enrichment.py)<br>[tests/test_mcp_error_envelope.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_mcp_error_envelope.py)<br>[tests/test_mcp_image_content.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_mcp_image_content.py)<br>[tests/test_mcp_interpret_result.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_mcp_interpret_result.py)<br>[tests/test_mcp_nan_inf.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_mcp_nan_inf.py)<br>[tests/test_mcp_pipelines.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_mcp_pipelines.py)<br>[tests/test_mcp_prompts_expanded.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_mcp_prompts_expanded.py)<br>[tests/test_mcp_protocol.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_mcp_protocol.py) |
| retrieval | 6 | [src/statspai/surrogate/index.py](../../../../sources/brycewang-stanford__StatsPAI/src/statspai/surrogate/index.py)<br>[src/statspai/schemas/index.json](../../../../sources/brycewang-stanford__StatsPAI/src/statspai/schemas/index.json)<br>[src/statspai/dag/graph.py](../../../../sources/brycewang-stanford__StatsPAI/src/statspai/dag/graph.py)<br>[schemas/index.json](../../../../sources/brycewang-stanford__StatsPAI/schemas/index.json)<br>[docs/index.md](../../../../sources/brycewang-stanford__StatsPAI/docs/index.md)<br>[docs/reference/index.md](../../../../sources/brycewang-stanford__StatsPAI/docs/reference/index.md) |
| spec | 22 | [tests/test_auto_spec_type_resolution.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_auto_spec_type_resolution.py)<br>[tests/test_detect_design.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_detect_design.py)<br>[tests/test_spec_curve.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_spec_curve.py)<br>[src/statspai/synth/experimental_design.py](../../../../sources/brycewang-stanford__StatsPAI/src/statspai/synth/experimental_design.py)<br>[src/statspai/survey/design.py](../../../../sources/brycewang-stanford__StatsPAI/src/statspai/survey/design.py)<br>[src/statspai/smart/detect_design.py](../../../../sources/brycewang-stanford__StatsPAI/src/statspai/smart/detect_design.py)<br>[src/statspai/robustness/spec_curve.py](../../../../sources/brycewang-stanford__StatsPAI/src/statspai/robustness/spec_curve.py)<br>[src/statspai/rd/distributional_design.py](../../../../sources/brycewang-stanford__StatsPAI/src/statspai/rd/distributional_design.py) |
| eval | 1438 | [test_results_full_suite.md](../../../../sources/brycewang-stanford__StatsPAI/test_results_full_suite.md)<br>[tests/__init__.py](../../../../sources/brycewang-stanford__StatsPAI/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/brycewang-stanford__StatsPAI/tests/conftest.py)<br>[tests/test_aer_style.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_aer_style.py)<br>[tests/test_aer_word_style.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_aer_word_style.py)<br>[tests/test_aft.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_aft.py)<br>[tests/test_agent_bench_mock.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_agent_bench_mock.py)<br>[tests/test_agent_blocks_drift.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_agent_blocks_drift.py) |
| security | 31 | [SECURITY.md](../../../../sources/brycewang-stanford__StatsPAI/SECURITY.md)<br>[tools/audit_bib_coverage.py](../../../../sources/brycewang-stanford__StatsPAI/tools/audit_bib_coverage.py)<br>[tools/audit_bib_duplicates.py](../../../../sources/brycewang-stanford__StatsPAI/tools/audit_bib_duplicates.py)<br>[tools/audit_citations.py](../../../../sources/brycewang-stanford__StatsPAI/tools/audit_citations.py)<br>[tools/audit_retractions.py](../../../../sources/brycewang-stanford__StatsPAI/tools/audit_retractions.py)<br>[tests/test_audit_bib_coverage.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_audit_bib_coverage.py)<br>[tests/test_audit_bib_duplicates.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_audit_bib_duplicates.py)<br>[tests/test_audit_citations.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_audit_citations.py) |
| ci | 8 | [.github/workflows/benchmarks.yml](../../../../sources/brycewang-stanford__StatsPAI/.github/workflows/benchmarks.yml)<br>[.github/workflows/build-wheels.yml](../../../../sources/brycewang-stanford__StatsPAI/.github/workflows/build-wheels.yml)<br>[.github/workflows/ci-cd.yml](../../../../sources/brycewang-stanford__StatsPAI/.github/workflows/ci-cd.yml)<br>[.github/workflows/citation-audit.yml](../../../../sources/brycewang-stanford__StatsPAI/.github/workflows/citation-audit.yml)<br>[.github/workflows/docs.yml](../../../../sources/brycewang-stanford__StatsPAI/.github/workflows/docs.yml)<br>[.github/workflows/parity-guards.yml](../../../../sources/brycewang-stanford__StatsPAI/.github/workflows/parity-guards.yml)<br>[.github/workflows/r-parity.yml](../../../../sources/brycewang-stanford__StatsPAI/.github/workflows/r-parity.yml)<br>[.github/workflows/retraction-sweep.yml](../../../../sources/brycewang-stanford__StatsPAI/.github/workflows/retraction-sweep.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 132 | [mkdocs.yml](../../../../sources/brycewang-stanford__StatsPAI/mkdocs.yml)<br>[README_CN.md](../../../../sources/brycewang-stanford__StatsPAI/README_CN.md)<br>[README.md](../../../../sources/brycewang-stanford__StatsPAI/README.md)<br>[tests/stata_parity/README.md](../../../../sources/brycewang-stanford__StatsPAI/tests/stata_parity/README.md)<br>[tests/r_parity/README.md](../../../../sources/brycewang-stanford__StatsPAI/tests/r_parity/README.md)<br>[tests/numerical_accuracy/README.md](../../../../sources/brycewang-stanford__StatsPAI/tests/numerical_accuracy/README.md)<br>[tests/fixtures/nist_strd/README.md](../../../../sources/brycewang-stanford__StatsPAI/tests/fixtures/nist_strd/README.md)<br>[tests/agent_bench/README.md](../../../../sources/brycewang-stanford__StatsPAI/tests/agent_bench/README.md) |
| config | 3 | [pyproject.toml](../../../../sources/brycewang-stanford__StatsPAI/pyproject.toml)<br>[rust/statspai_hdfe/Cargo.lock](../../../../sources/brycewang-stanford__StatsPAI/rust/statspai_hdfe/Cargo.lock)<br>[rust/statspai_hdfe/Cargo.toml](../../../../sources/brycewang-stanford__StatsPAI/rust/statspai_hdfe/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1438 | [test_results_full_suite.md](../../../../sources/brycewang-stanford__StatsPAI/test_results_full_suite.md)<br>[tests/__init__.py](../../../../sources/brycewang-stanford__StatsPAI/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/brycewang-stanford__StatsPAI/tests/conftest.py)<br>[tests/test_aer_style.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_aer_style.py)<br>[tests/test_aer_word_style.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_aer_word_style.py)<br>[tests/test_aft.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_aft.py) |
| CI workflows | 8 | [.github/workflows/benchmarks.yml](../../../../sources/brycewang-stanford__StatsPAI/.github/workflows/benchmarks.yml)<br>[.github/workflows/build-wheels.yml](../../../../sources/brycewang-stanford__StatsPAI/.github/workflows/build-wheels.yml)<br>[.github/workflows/ci-cd.yml](../../../../sources/brycewang-stanford__StatsPAI/.github/workflows/ci-cd.yml)<br>[.github/workflows/citation-audit.yml](../../../../sources/brycewang-stanford__StatsPAI/.github/workflows/citation-audit.yml)<br>[.github/workflows/docs.yml](../../../../sources/brycewang-stanford__StatsPAI/.github/workflows/docs.yml)<br>[.github/workflows/parity-guards.yml](../../../../sources/brycewang-stanford__StatsPAI/.github/workflows/parity-guards.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 31 | [SECURITY.md](../../../../sources/brycewang-stanford__StatsPAI/SECURITY.md)<br>[tools/audit_bib_coverage.py](../../../../sources/brycewang-stanford__StatsPAI/tools/audit_bib_coverage.py)<br>[tools/audit_bib_duplicates.py](../../../../sources/brycewang-stanford__StatsPAI/tools/audit_bib_duplicates.py)<br>[tools/audit_citations.py](../../../../sources/brycewang-stanford__StatsPAI/tools/audit_citations.py)<br>[tools/audit_retractions.py](../../../../sources/brycewang-stanford__StatsPAI/tools/audit_retractions.py)<br>[tests/test_audit_bib_coverage.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_audit_bib_coverage.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review; primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/test_mcp_enrichment.py`, `tests/test_mcp_error_envelope.py`, `tests/test_mcp_image_content.py`.
2. Map agent/tool runtime through: `tools/audit_bib_coverage.py`, `tools/audit_bib_duplicates.py`, `tools/audit_citations.py`.
3. Inspect retrieval/memory/indexing through: `src/statspai/surrogate/index.py`, `src/statspai/schemas/index.json`, `src/statspai/dag/graph.py`.
4. Verify behavior through test/eval files: `test_results_full_suite.md`, `tests/__init__.py`, `tests/conftest.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 StatsPAI is the first agent native Python library for causal inference and applied econometrics — unified API, broad cro. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, mcp, torch이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
