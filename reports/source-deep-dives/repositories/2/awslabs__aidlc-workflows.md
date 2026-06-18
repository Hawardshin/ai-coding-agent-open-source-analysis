# awslabs/aidlc-workflows Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 554 files, 151 directories.

## 요약

- 조사 단위: `sources/awslabs__aidlc-workflows` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 554 files, 151 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, scripts/aidlc-traceability/src/traceability/agent.py, scripts/aidlc-evaluator/packages/shared/src/shared/sandbox.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | awslabs/aidlc-workflows |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 2968 |
| Forks | 484 |
| License | none |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/awslabs__aidlc-workflows](../../../../sources/awslabs__aidlc-workflows) |
| Existing report | [reports/global-trending/repositories/awslabs__aidlc-workflows.md](../../../global-trending/repositories/awslabs__aidlc-workflows.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 554 / 151 |
| Max observed depth | 10 |
| Top directories | .claude, .github, .kiro, aidlc-rules, assets, docs, scripts |
| Top extensions | .py: 253, .md: 182, .yaml: 25, .toml: 15, .yml: 15, (none): 13, .sh: 12, .bats: 8, .json: 8, .png: 6, .license: 4, .mmd: 4 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| aidlc-rules | top-level component | 1 |
| assets | top-level component | 1 |
| docs | documentation surface | 1 |
| scripts | top-level component | 1 |


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
| agentRuntime | [AGENTS.md](../../../../sources/awslabs__aidlc-workflows/AGENTS.md) | agentRuntime signal |
| agentRuntime | [scripts/aidlc-traceability/src/traceability/agent.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/src/traceability/agent.py) | agentRuntime signal |
| agentRuntime | [scripts/aidlc-evaluator/packages/shared/src/shared/sandbox.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/shared/src/shared/sandbox.py) | agentRuntime signal |
| agentRuntime | [scripts/aidlc-evaluator/packages/execution/src/aidlc_runner/runner.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/execution/src/aidlc_runner/runner.py) | agentRuntime signal |
| entrypoints | [scripts/aidlc-evaluator/packages/trend-reports/src/trend_reports/__main__.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/trend-reports/src/trend_reports/__main__.py) | entrypoints signal |
| entrypoints | [scripts/aidlc-evaluator/packages/reporting/src/reporting/__main__.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/reporting/src/reporting/__main__.py) | entrypoints signal |
| entrypoints | [scripts/aidlc-evaluator/packages/quantitative/src/quantitative/__main__.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/quantitative/src/quantitative/__main__.py) | entrypoints signal |
| entrypoints | [scripts/aidlc-evaluator/packages/qualitative/src/qualitative/__main__.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/qualitative/src/qualitative/__main__.py) | entrypoints signal |
| config | [scripts/aidlc-traceability/pyproject.toml](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/pyproject.toml) | config signal |
| config | [scripts/aidlc-traceability/uv.lock](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/uv.lock) | config signal |
| config | [scripts/aidlc-evaluator/pyproject.toml](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/pyproject.toml) | config signal |
| config | [scripts/aidlc-evaluator/uv.lock](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/uv.lock) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 7 | [scripts/aidlc-evaluator/packages/trend-reports/src/trend_reports/__main__.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/trend-reports/src/trend_reports/__main__.py)<br>[scripts/aidlc-evaluator/packages/reporting/src/reporting/__main__.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/reporting/src/reporting/__main__.py)<br>[scripts/aidlc-evaluator/packages/quantitative/src/quantitative/__main__.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/quantitative/src/quantitative/__main__.py)<br>[scripts/aidlc-evaluator/packages/qualitative/src/qualitative/__main__.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/qualitative/src/qualitative/__main__.py)<br>[scripts/aidlc-evaluator/packages/execution/src/aidlc_runner/__main__.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/execution/src/aidlc_runner/__main__.py)<br>[scripts/aidlc-evaluator/packages/contracttest/src/contracttest/__main__.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/contracttest/src/contracttest/__main__.py)<br>[scripts/aidlc-evaluator/packages/contracttest/src/contracttest/server.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/contracttest/src/contracttest/server.py) |
| agentRuntime | 53 | [AGENTS.md](../../../../sources/awslabs__aidlc-workflows/AGENTS.md)<br>[scripts/aidlc-traceability/src/traceability/agent.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/src/traceability/agent.py)<br>[scripts/aidlc-evaluator/packages/shared/src/shared/sandbox.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/shared/src/shared/sandbox.py)<br>[scripts/aidlc-evaluator/packages/execution/src/aidlc_runner/runner.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/execution/src/aidlc_runner/runner.py)<br>[scripts/aidlc-evaluator/packages/execution/src/aidlc_runner/tools/__init__.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/execution/src/aidlc_runner/tools/__init__.py)<br>[scripts/aidlc-evaluator/packages/execution/src/aidlc_runner/tools/file_ops.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/execution/src/aidlc_runner/tools/file_ops.py)<br>[scripts/aidlc-evaluator/packages/execution/src/aidlc_runner/tools/rule_loader.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/execution/src/aidlc_runner/tools/rule_loader.py)<br>[scripts/aidlc-evaluator/packages/execution/src/aidlc_runner/tools/run_command.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/execution/src/aidlc_runner/tools/run_command.py) |
| mcp | 0 | not obvious |
| retrieval | 2 | [scripts/aidlc-traceability/tests/test_graph.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/test_graph.py)<br>[scripts/aidlc-traceability/src/traceability/graph.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/src/traceability/graph.py) |
| spec | 142 | [scripts/aidlc-traceability/LEGAL_DISCLAIMER.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/LEGAL_DISCLAIMER.md)<br>[scripts/aidlc-traceability/LICENSE](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/LICENSE)<br>[scripts/aidlc-traceability/pyproject.toml](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/pyproject.toml)<br>[scripts/aidlc-traceability/README.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/README.md)<br>[scripts/aidlc-traceability/uv.lock](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/uv.lock)<br>[scripts/aidlc-traceability/tests/__init__.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/__init__.py)<br>[scripts/aidlc-traceability/tests/conftest.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/conftest.py)<br>[scripts/aidlc-traceability/tests/test_cli_pipeline.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/test_cli_pipeline.py) |
| eval | 180 | [scripts/aidlc-traceability/tests/__init__.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/__init__.py)<br>[scripts/aidlc-traceability/tests/conftest.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/conftest.py)<br>[scripts/aidlc-traceability/tests/test_cli_pipeline.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/test_cli_pipeline.py)<br>[scripts/aidlc-traceability/tests/test_discovery.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/test_discovery.py)<br>[scripts/aidlc-traceability/tests/test_generators.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/test_generators.py)<br>[scripts/aidlc-traceability/tests/test_graph.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/test_graph.py)<br>[scripts/aidlc-traceability/tests/test_models.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/test_models.py)<br>[scripts/aidlc-traceability/tests/test_parsers.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/test_parsers.py) |
| security | 28 | [scripts/aidlc-traceability/docs/ai-compliance.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/ai-compliance.md)<br>[scripts/aidlc-traceability/docs/ai-security.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/ai-security.md)<br>[scripts/aidlc-traceability/docs/bedrock-security.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/bedrock-security.md)<br>[scripts/aidlc-traceability/docs/security-design.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/security-design.md)<br>[scripts/aidlc-traceability/docs/security-scan-results/ATTESTATION.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/security-scan-results/ATTESTATION.md)<br>[scripts/aidlc-traceability/docs/security-scan-results/scan-metadata.json](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/security-scan-results/scan-metadata.json)<br>[scripts/aidlc-traceability/docs/security-scan-results/SECURITY_AUDIT_REPORT.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/security-scan-results/SECURITY_AUDIT_REPORT.md)<br>[scripts/aidlc-traceability/docs/security-scan-results/SECURITY_EXECUTIVE_SUMMARY.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/security-scan-results/SECURITY_EXECUTIVE_SUMMARY.md) |
| ci | 8 | [.github/workflows/ci.yml](../../../../sources/awslabs__aidlc-workflows/.github/workflows/ci.yml)<br>[.github/workflows/codebuild.yml](../../../../sources/awslabs__aidlc-workflows/.github/workflows/codebuild.yml)<br>[.github/workflows/codeql.yml](../../../../sources/awslabs__aidlc-workflows/.github/workflows/codeql.yml)<br>[.github/workflows/pull-request-lint.yml](../../../../sources/awslabs__aidlc-workflows/.github/workflows/pull-request-lint.yml)<br>[.github/workflows/release-pr.yml](../../../../sources/awslabs__aidlc-workflows/.github/workflows/release-pr.yml)<br>[.github/workflows/release.yml](../../../../sources/awslabs__aidlc-workflows/.github/workflows/release.yml)<br>[.github/workflows/security-scanners.yml](../../../../sources/awslabs__aidlc-workflows/.github/workflows/security-scanners.yml)<br>[.github/workflows/tag-on-merge.yml](../../../../sources/awslabs__aidlc-workflows/.github/workflows/tag-on-merge.yml) |
| container | 1 | [scripts/aidlc-evaluator/docker/sandbox/Dockerfile](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/docker/sandbox/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/awslabs__aidlc-workflows/AGENTS.md) |
| docs | 53 | [README.md](../../../../sources/awslabs__aidlc-workflows/README.md)<br>[scripts/aidlc-traceability/README.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/README.md)<br>[scripts/aidlc-traceability/requirements/README.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/requirements/README.md)<br>[scripts/aidlc-traceability/docs/ai-compliance.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/ai-compliance.md)<br>[scripts/aidlc-traceability/docs/ai-security.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/ai-security.md)<br>[scripts/aidlc-traceability/docs/architecture.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/architecture.md)<br>[scripts/aidlc-traceability/docs/bedrock-security.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/bedrock-security.md)<br>[scripts/aidlc-traceability/docs/security-design.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/security-design.md) |
| config | 16 | [scripts/aidlc-traceability/pyproject.toml](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/pyproject.toml)<br>[scripts/aidlc-traceability/uv.lock](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/uv.lock)<br>[scripts/aidlc-evaluator/pyproject.toml](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/pyproject.toml)<br>[scripts/aidlc-evaluator/uv.lock](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/uv.lock)<br>[scripts/aidlc-evaluator/packages/trend-reports/pyproject.toml](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/trend-reports/pyproject.toml)<br>[scripts/aidlc-evaluator/packages/shared/pyproject.toml](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/shared/pyproject.toml)<br>[scripts/aidlc-evaluator/packages/reporting/pyproject.toml](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/reporting/pyproject.toml)<br>[scripts/aidlc-evaluator/packages/quantitative/pyproject.toml](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/quantitative/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 180 | [scripts/aidlc-traceability/tests/__init__.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/__init__.py)<br>[scripts/aidlc-traceability/tests/conftest.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/conftest.py)<br>[scripts/aidlc-traceability/tests/test_cli_pipeline.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/test_cli_pipeline.py)<br>[scripts/aidlc-traceability/tests/test_discovery.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/test_discovery.py)<br>[scripts/aidlc-traceability/tests/test_generators.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/test_generators.py)<br>[scripts/aidlc-traceability/tests/test_graph.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/test_graph.py) |
| CI workflows | 8 | [.github/workflows/ci.yml](../../../../sources/awslabs__aidlc-workflows/.github/workflows/ci.yml)<br>[.github/workflows/codebuild.yml](../../../../sources/awslabs__aidlc-workflows/.github/workflows/codebuild.yml)<br>[.github/workflows/codeql.yml](../../../../sources/awslabs__aidlc-workflows/.github/workflows/codeql.yml)<br>[.github/workflows/pull-request-lint.yml](../../../../sources/awslabs__aidlc-workflows/.github/workflows/pull-request-lint.yml)<br>[.github/workflows/release-pr.yml](../../../../sources/awslabs__aidlc-workflows/.github/workflows/release-pr.yml)<br>[.github/workflows/release.yml](../../../../sources/awslabs__aidlc-workflows/.github/workflows/release.yml) |
| Containers / deploy | 1 | [scripts/aidlc-evaluator/docker/sandbox/Dockerfile](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/docker/sandbox/Dockerfile) |
| Security / policy | 28 | [scripts/aidlc-traceability/docs/ai-compliance.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/ai-compliance.md)<br>[scripts/aidlc-traceability/docs/ai-security.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/ai-security.md)<br>[scripts/aidlc-traceability/docs/bedrock-security.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/bedrock-security.md)<br>[scripts/aidlc-traceability/docs/security-design.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/security-design.md)<br>[scripts/aidlc-traceability/docs/security-scan-results/ATTESTATION.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/security-scan-results/ATTESTATION.md)<br>[scripts/aidlc-traceability/docs/security-scan-results/scan-metadata.json](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/security-scan-results/scan-metadata.json) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/awslabs__aidlc-workflows/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `AGENTS.md`, `scripts/aidlc-traceability/src/traceability/agent.py`, `scripts/aidlc-evaluator/packages/shared/src/shared/sandbox.py`.
2. Trace execution through entrypoints: `scripts/aidlc-evaluator/packages/trend-reports/src/trend_reports/__main__.py`, `scripts/aidlc-evaluator/packages/reporting/src/reporting/__main__.py`, `scripts/aidlc-evaluator/packages/quantitative/src/quantitative/__main__.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `scripts/aidlc-traceability/src/traceability/agent.py`, `scripts/aidlc-evaluator/packages/shared/src/shared/sandbox.py`.
4. Inspect retrieval/memory/indexing through: `scripts/aidlc-traceability/tests/test_graph.py`, `scripts/aidlc-traceability/src/traceability/graph.py`.
5. Verify behavior through test/eval files: `scripts/aidlc-traceability/tests/__init__.py`, `scripts/aidlc-traceability/tests/conftest.py`, `scripts/aidlc-traceability/tests/test_cli_pipeline.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 554 files, 151 directories.. 핵심 구조 신호는 Python, README.md, AGENTS.md, LICENSE, tests, ci이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
