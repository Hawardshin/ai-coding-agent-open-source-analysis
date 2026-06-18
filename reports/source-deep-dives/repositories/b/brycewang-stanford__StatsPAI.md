# brycewang-stanford/StatsPAI 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

StatsPAI is the first agent-native Python library for causal inference and applied econometrics — unified API, broad cross-method coverage, structured result objects, machine-readable schemas, an MCP server, and R/Stata parity validation.

## 요약

- 조사 단위: `sources/brycewang-stanford__StatsPAI` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,361 files, 163 directories, depth score 108, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test_mcp_enrichment.py, tests/test_mcp_error_envelope.py, tests/test_mcp_image_content.py이고, 의존성 단서는 mcp, torch, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | brycewang-stanford/StatsPAI |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 233 |
| Forks | 44 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/brycewang-stanford__StatsPAI](../../../../sources/brycewang-stanford__StatsPAI) |
| 기존 보고서 | [reports/global-trending/repositories/brycewang-stanford__StatsPAI.md](../../../global-trending/repositories/brycewang-stanford__StatsPAI.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2361 / 163 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .cov_decomp, .coverage_campaign, .examples_campaign, .github, .tier_eg_campaign, .tierd_campaign, benchmarks, docs, examples, papers, plans, rust, schemas, scripts, specs, src, StatsPAI_full_data_analysis_skill, test-notebooks, tests, tools |
| 상위 확장자 | .py: 1543, .json: 272, .md: 188, .csv: 97, .r: 97, .do: 65, .dat: 33, .yml: 11, .rs: 8, (none): 6, .html: 5, .latex: 5 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | statspai | statspai |
| utility | pyproject.toml | statspai-mcp | statspai-mcp |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | torch, transformers |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 65 | [tools/audit_bib_coverage.py](../../../../sources/brycewang-stanford__StatsPAI/tools/audit_bib_coverage.py)<br>[tools/audit_bib_duplicates.py](../../../../sources/brycewang-stanford__StatsPAI/tools/audit_bib_duplicates.py)<br>[tools/audit_citations.py](../../../../sources/brycewang-stanford__StatsPAI/tools/audit_citations.py)<br>[tools/audit_retractions.py](../../../../sources/brycewang-stanford__StatsPAI/tools/audit_retractions.py)<br>[tools/suggest_bibkey_backfills.py](../../../../sources/brycewang-stanford__StatsPAI/tools/suggest_bibkey_backfills.py)<br>[tests/agent_eval/test_did_workflow_transcript.py](../../../../sources/brycewang-stanford__StatsPAI/tests/agent_eval/test_did_workflow_transcript.py)<br>[tests/agent_bench/BUDGET_RUNBOOK.md](../../../../sources/brycewang-stanford__StatsPAI/tests/agent_bench/BUDGET_RUNBOOK.md)<br>[tests/agent_bench/README.md](../../../../sources/brycewang-stanford__StatsPAI/tests/agent_bench/README.md) |
| mcp | 12 | [tests/test_mcp_enrichment.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_mcp_enrichment.py)<br>[tests/test_mcp_error_envelope.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_mcp_error_envelope.py)<br>[tests/test_mcp_image_content.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_mcp_image_content.py)<br>[tests/test_mcp_interpret_result.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_mcp_interpret_result.py)<br>[tests/test_mcp_nan_inf.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_mcp_nan_inf.py)<br>[tests/test_mcp_pipelines.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_mcp_pipelines.py)<br>[tests/test_mcp_prompts_expanded.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_mcp_prompts_expanded.py)<br>[tests/test_mcp_protocol.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_mcp_protocol.py) |
| retrieval | 6 | [src/statspai/surrogate/index.py](../../../../sources/brycewang-stanford__StatsPAI/src/statspai/surrogate/index.py)<br>[src/statspai/schemas/index.json](../../../../sources/brycewang-stanford__StatsPAI/src/statspai/schemas/index.json)<br>[src/statspai/dag/graph.py](../../../../sources/brycewang-stanford__StatsPAI/src/statspai/dag/graph.py)<br>[schemas/index.json](../../../../sources/brycewang-stanford__StatsPAI/schemas/index.json)<br>[docs/index.md](../../../../sources/brycewang-stanford__StatsPAI/docs/index.md)<br>[docs/reference/index.md](../../../../sources/brycewang-stanford__StatsPAI/docs/reference/index.md) |
| spec | 22 | [tests/test_auto_spec_type_resolution.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_auto_spec_type_resolution.py)<br>[tests/test_detect_design.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_detect_design.py)<br>[tests/test_spec_curve.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_spec_curve.py)<br>[src/statspai/synth/experimental_design.py](../../../../sources/brycewang-stanford__StatsPAI/src/statspai/synth/experimental_design.py)<br>[src/statspai/survey/design.py](../../../../sources/brycewang-stanford__StatsPAI/src/statspai/survey/design.py)<br>[src/statspai/smart/detect_design.py](../../../../sources/brycewang-stanford__StatsPAI/src/statspai/smart/detect_design.py)<br>[src/statspai/robustness/spec_curve.py](../../../../sources/brycewang-stanford__StatsPAI/src/statspai/robustness/spec_curve.py)<br>[src/statspai/rd/distributional_design.py](../../../../sources/brycewang-stanford__StatsPAI/src/statspai/rd/distributional_design.py) |
| eval | 1438 | [test_results_full_suite.md](../../../../sources/brycewang-stanford__StatsPAI/test_results_full_suite.md)<br>[tests/__init__.py](../../../../sources/brycewang-stanford__StatsPAI/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/brycewang-stanford__StatsPAI/tests/conftest.py)<br>[tests/test_aer_style.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_aer_style.py)<br>[tests/test_aer_word_style.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_aer_word_style.py)<br>[tests/test_aft.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_aft.py)<br>[tests/test_agent_bench_mock.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_agent_bench_mock.py)<br>[tests/test_agent_blocks_drift.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_agent_blocks_drift.py) |
| security | 31 | [SECURITY.md](../../../../sources/brycewang-stanford__StatsPAI/SECURITY.md)<br>[tools/audit_bib_coverage.py](../../../../sources/brycewang-stanford__StatsPAI/tools/audit_bib_coverage.py)<br>[tools/audit_bib_duplicates.py](../../../../sources/brycewang-stanford__StatsPAI/tools/audit_bib_duplicates.py)<br>[tools/audit_citations.py](../../../../sources/brycewang-stanford__StatsPAI/tools/audit_citations.py)<br>[tools/audit_retractions.py](../../../../sources/brycewang-stanford__StatsPAI/tools/audit_retractions.py)<br>[tests/test_audit_bib_coverage.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_audit_bib_coverage.py)<br>[tests/test_audit_bib_duplicates.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_audit_bib_duplicates.py)<br>[tests/test_audit_citations.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_audit_citations.py) |
| ci | 8 | [.github/workflows/benchmarks.yml](../../../../sources/brycewang-stanford__StatsPAI/.github/workflows/benchmarks.yml)<br>[.github/workflows/build-wheels.yml](../../../../sources/brycewang-stanford__StatsPAI/.github/workflows/build-wheels.yml)<br>[.github/workflows/ci-cd.yml](../../../../sources/brycewang-stanford__StatsPAI/.github/workflows/ci-cd.yml)<br>[.github/workflows/citation-audit.yml](../../../../sources/brycewang-stanford__StatsPAI/.github/workflows/citation-audit.yml)<br>[.github/workflows/docs.yml](../../../../sources/brycewang-stanford__StatsPAI/.github/workflows/docs.yml)<br>[.github/workflows/parity-guards.yml](../../../../sources/brycewang-stanford__StatsPAI/.github/workflows/parity-guards.yml)<br>[.github/workflows/r-parity.yml](../../../../sources/brycewang-stanford__StatsPAI/.github/workflows/r-parity.yml)<br>[.github/workflows/retraction-sweep.yml](../../../../sources/brycewang-stanford__StatsPAI/.github/workflows/retraction-sweep.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 132 | [mkdocs.yml](../../../../sources/brycewang-stanford__StatsPAI/mkdocs.yml)<br>[README_CN.md](../../../../sources/brycewang-stanford__StatsPAI/README_CN.md)<br>[README.md](../../../../sources/brycewang-stanford__StatsPAI/README.md)<br>[tests/stata_parity/README.md](../../../../sources/brycewang-stanford__StatsPAI/tests/stata_parity/README.md)<br>[tests/r_parity/README.md](../../../../sources/brycewang-stanford__StatsPAI/tests/r_parity/README.md)<br>[tests/numerical_accuracy/README.md](../../../../sources/brycewang-stanford__StatsPAI/tests/numerical_accuracy/README.md)<br>[tests/fixtures/nist_strd/README.md](../../../../sources/brycewang-stanford__StatsPAI/tests/fixtures/nist_strd/README.md)<br>[tests/agent_bench/README.md](../../../../sources/brycewang-stanford__StatsPAI/tests/agent_bench/README.md) |
| config | 3 | [pyproject.toml](../../../../sources/brycewang-stanford__StatsPAI/pyproject.toml)<br>[rust/statspai_hdfe/Cargo.lock](../../../../sources/brycewang-stanford__StatsPAI/rust/statspai_hdfe/Cargo.lock)<br>[rust/statspai_hdfe/Cargo.toml](../../../../sources/brycewang-stanford__StatsPAI/rust/statspai_hdfe/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1438 | [test_results_full_suite.md](../../../../sources/brycewang-stanford__StatsPAI/test_results_full_suite.md)<br>[tests/__init__.py](../../../../sources/brycewang-stanford__StatsPAI/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/brycewang-stanford__StatsPAI/tests/conftest.py)<br>[tests/test_aer_style.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_aer_style.py)<br>[tests/test_aer_word_style.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_aer_word_style.py)<br>[tests/test_aft.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_aft.py) |
| CI workflow | 8 | [.github/workflows/benchmarks.yml](../../../../sources/brycewang-stanford__StatsPAI/.github/workflows/benchmarks.yml)<br>[.github/workflows/build-wheels.yml](../../../../sources/brycewang-stanford__StatsPAI/.github/workflows/build-wheels.yml)<br>[.github/workflows/ci-cd.yml](../../../../sources/brycewang-stanford__StatsPAI/.github/workflows/ci-cd.yml)<br>[.github/workflows/citation-audit.yml](../../../../sources/brycewang-stanford__StatsPAI/.github/workflows/citation-audit.yml)<br>[.github/workflows/docs.yml](../../../../sources/brycewang-stanford__StatsPAI/.github/workflows/docs.yml)<br>[.github/workflows/parity-guards.yml](../../../../sources/brycewang-stanford__StatsPAI/.github/workflows/parity-guards.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 31 | [SECURITY.md](../../../../sources/brycewang-stanford__StatsPAI/SECURITY.md)<br>[tools/audit_bib_coverage.py](../../../../sources/brycewang-stanford__StatsPAI/tools/audit_bib_coverage.py)<br>[tools/audit_bib_duplicates.py](../../../../sources/brycewang-stanford__StatsPAI/tools/audit_bib_duplicates.py)<br>[tools/audit_citations.py](../../../../sources/brycewang-stanford__StatsPAI/tools/audit_citations.py)<br>[tools/audit_retractions.py](../../../../sources/brycewang-stanford__StatsPAI/tools/audit_retractions.py)<br>[tests/test_audit_bib_coverage.py](../../../../sources/brycewang-stanford__StatsPAI/tests/test_audit_bib_coverage.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요; path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/test_mcp_enrichment.py`, `tests/test_mcp_error_envelope.py`, `tests/test_mcp_image_content.py`.
2. agent/tool runtime 매핑: `tools/audit_bib_coverage.py`, `tools/audit_bib_duplicates.py`, `tools/audit_citations.py`.
3. retrieval/memory/indexing 확인: `src/statspai/surrogate/index.py`, `src/statspai/schemas/index.json`, `src/statspai/dag/graph.py`.
4. test/eval 파일로 동작 검증: `test_results_full_suite.md`, `tests/__init__.py`, `tests/conftest.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 StatsPAI is the first agent native Python library for causal inference and applied econometrics — unified API, broad cro. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, mcp, torch이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
