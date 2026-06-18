# IBM/AssetOpsBench Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

AssetOpsBench - Industry 4.0: A unified benchmark and framework for building, orchestrating, and evaluating domain-specific AI agents for Industry 4.0 asset operations and maintenance, with 460+ scenarios, 5 specialist agents (IoT, FMSR, TSFM, Work Order,...), and multi-agent orchestration blueprints (MetaAgent, AgentHive) over MCP.

## 요약

- 조사 단위: `sources/IBM__AssetOpsBench` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 225 files, 66 directories, depth score 115, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/servers/vibration/tests/test_mcp_e2e.py, docs/mcp-e2e-test-suite.md, docs/mcp-servers.md이고, 의존성 단서는 openai, claude, mcp, langchain, pydantic, torch, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | IBM/AssetOpsBench |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 1828 |
| Forks | 275 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/IBM__AssetOpsBench](../../../../sources/IBM__AssetOpsBench) |
| Existing report | [reports/global-trending/repositories/IBM__AssetOpsBench.md](../../../global-trending/repositories/IBM__AssetOpsBench.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 225 / 66 |
| Max observed depth | 8 |
| Top directories | .github, docs, scripts, src |
| Top extensions | .py: 139, .json: 22, .md: 21, (none): 7, .bin: 5, .safetensors: 5, .yml: 5, .pdf: 3, .txt: 3, .yaml: 3, .csv: 2, .sh: 2 |
| Source patterns | cli-first, api/server, agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 93 |
| docs | documentation surface | 22 |
| .github | ci surface | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | plan-execute | plan-execute |
| utility | pyproject.toml | claude-agent | claude-agent |
| serve-dev | pyproject.toml | iot-mcp-server | iot-mcp-server |
| serve-dev | pyproject.toml | utilities-mcp-server | utilities-mcp-server |
| serve-dev | pyproject.toml | fmsr-mcp-server | fmsr-mcp-server |
| serve-dev | pyproject.toml | tsfm-mcp-server | tsfm-mcp-server |
| serve-dev | pyproject.toml | wo-mcp-server | wo-mcp-server |
| serve-dev | pyproject.toml | vibration-mcp-server | vibration-mcp-server |
| utility | pyproject.toml | openai-agent | openai-agent |
| utility | pyproject.toml | deep-agent | deep-agent |
| utility | pyproject.toml | stirrup-agent | stirrup-agent |
| utility | pyproject.toml | evaluate | evaluate |
| utility | pyproject.toml | direct-llm-agent | direct-llm-agent |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, claude |
| agentProtocols | mcp |
| agentFrameworks | langchain |
| vectorStores | none |
| modelRuntime | torch, transformers |
| webRuntime | none |
| developerSurface | none |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [src/servers/vibration/tests/test_mcp_e2e.py](../../../../sources/IBM__AssetOpsBench/src/servers/vibration/tests/test_mcp_e2e.py) | mcp signal |
| mcp | [docs/mcp-e2e-test-suite.md](../../../../sources/IBM__AssetOpsBench/docs/mcp-e2e-test-suite.md) | mcp signal |
| mcp | [docs/mcp-servers.md](../../../../sources/IBM__AssetOpsBench/docs/mcp-servers.md) | mcp signal |
| agentRuntime | [src/evaluation/runner.py](../../../../sources/IBM__AssetOpsBench/src/evaluation/runner.py) | agentRuntime signal |
| agentRuntime | [src/agent/__init__.py](../../../../sources/IBM__AssetOpsBench/src/agent/__init__.py) | agentRuntime signal |
| agentRuntime | [src/agent/_cli_common.py](../../../../sources/IBM__AssetOpsBench/src/agent/_cli_common.py) | agentRuntime signal |
| agentRuntime | [src/agent/_prompts.py](../../../../sources/IBM__AssetOpsBench/src/agent/_prompts.py) | agentRuntime signal |
| entrypoints | [src/servers/wo/main.py](../../../../sources/IBM__AssetOpsBench/src/servers/wo/main.py) | entrypoints signal |
| entrypoints | [src/servers/vibration/main.py](../../../../sources/IBM__AssetOpsBench/src/servers/vibration/main.py) | entrypoints signal |
| entrypoints | [src/servers/utilities/main.py](../../../../sources/IBM__AssetOpsBench/src/servers/utilities/main.py) | entrypoints signal |
| entrypoints | [src/servers/tsfm/main.py](../../../../sources/IBM__AssetOpsBench/src/servers/tsfm/main.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/IBM__AssetOpsBench/pyproject.toml) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 6 | [src/servers/wo/main.py](../../../../sources/IBM__AssetOpsBench/src/servers/wo/main.py)<br>[src/servers/vibration/main.py](../../../../sources/IBM__AssetOpsBench/src/servers/vibration/main.py)<br>[src/servers/utilities/main.py](../../../../sources/IBM__AssetOpsBench/src/servers/utilities/main.py)<br>[src/servers/tsfm/main.py](../../../../sources/IBM__AssetOpsBench/src/servers/tsfm/main.py)<br>[src/servers/iot/main.py](../../../../sources/IBM__AssetOpsBench/src/servers/iot/main.py)<br>[src/servers/fmsr/main.py](../../../../sources/IBM__AssetOpsBench/src/servers/fmsr/main.py) |
| agentRuntime | 45 | [src/evaluation/runner.py](../../../../sources/IBM__AssetOpsBench/src/evaluation/runner.py)<br>[src/agent/__init__.py](../../../../sources/IBM__AssetOpsBench/src/agent/__init__.py)<br>[src/agent/_cli_common.py](../../../../sources/IBM__AssetOpsBench/src/agent/_cli_common.py)<br>[src/agent/_prompts.py](../../../../sources/IBM__AssetOpsBench/src/agent/_prompts.py)<br>[src/agent/cli.py](../../../../sources/IBM__AssetOpsBench/src/agent/cli.py)<br>[src/agent/models.py](../../../../sources/IBM__AssetOpsBench/src/agent/models.py)<br>[src/agent/runner.py](../../../../sources/IBM__AssetOpsBench/src/agent/runner.py)<br>[src/agent/tests/__init__.py](../../../../sources/IBM__AssetOpsBench/src/agent/tests/__init__.py) |
| mcp | 3 | [src/servers/vibration/tests/test_mcp_e2e.py](../../../../sources/IBM__AssetOpsBench/src/servers/vibration/tests/test_mcp_e2e.py)<br>[docs/mcp-e2e-test-suite.md](../../../../sources/IBM__AssetOpsBench/docs/mcp-e2e-test-suite.md)<br>[docs/mcp-servers.md](../../../../sources/IBM__AssetOpsBench/docs/mcp-servers.md) |
| retrieval | 0 | not obvious |
| spec | 3 | [src/couchdb/_design_workorders.json](../../../../sources/IBM__AssetOpsBench/src/couchdb/_design_workorders.json)<br>[docs/guideline/ground_truth_design_guideline.md](../../../../sources/IBM__AssetOpsBench/docs/guideline/ground_truth_design_guideline.md)<br>[docs/guideline/utterance_design_guideline.md](../../../../sources/IBM__AssetOpsBench/docs/guideline/utterance_design_guideline.md) |
| eval | 76 | [src/servers/wo/tests/__init__.py](../../../../sources/IBM__AssetOpsBench/src/servers/wo/tests/__init__.py)<br>[src/servers/wo/tests/test_models_boundary.py](../../../../sources/IBM__AssetOpsBench/src/servers/wo/tests/test_models_boundary.py)<br>[src/servers/wo/tests/test_workorders.py](../../../../sources/IBM__AssetOpsBench/src/servers/wo/tests/test_workorders.py)<br>[src/servers/vibration/tests/__init__.py](../../../../sources/IBM__AssetOpsBench/src/servers/vibration/tests/__init__.py)<br>[src/servers/vibration/tests/conftest.py](../../../../sources/IBM__AssetOpsBench/src/servers/vibration/tests/conftest.py)<br>[src/servers/vibration/tests/test_dsp.py](../../../../sources/IBM__AssetOpsBench/src/servers/vibration/tests/test_dsp.py)<br>[src/servers/vibration/tests/test_mcp_e2e.py](../../../../sources/IBM__AssetOpsBench/src/servers/vibration/tests/test_mcp_e2e.py)<br>[src/servers/vibration/tests/test_tools.py](../../../../sources/IBM__AssetOpsBench/src/servers/vibration/tests/test_tools.py) |
| security | 3 | [SECRET_SCANNING_SETUP.md](../../../../sources/IBM__AssetOpsBench/SECRET_SCANNING_SETUP.md)<br>[.github/workflows/guard-couchdb-data.yml](../../../../sources/IBM__AssetOpsBench/.github/workflows/guard-couchdb-data.yml)<br>[.github/workflows/secret-scan.yml](../../../../sources/IBM__AssetOpsBench/.github/workflows/secret-scan.yml) |
| ci | 3 | [.github/workflows/guard-couchdb-data.yml](../../../../sources/IBM__AssetOpsBench/.github/workflows/guard-couchdb-data.yml)<br>[.github/workflows/secret-scan.yml](../../../../sources/IBM__AssetOpsBench/.github/workflows/secret-scan.yml)<br>[.github/workflows/stale.yml](../../../../sources/IBM__AssetOpsBench/.github/workflows/stale.yml) |
| container | 2 | [src/couchdb/docker-compose.yaml](../../../../sources/IBM__AssetOpsBench/src/couchdb/docker-compose.yaml)<br>[src/agent/stirrup_agent/Dockerfile.code](../../../../sources/IBM__AssetOpsBench/src/agent/stirrup_agent/Dockerfile.code) |
| instruction | 0 | not obvious |
| docs | 20 | [README.md](../../../../sources/IBM__AssetOpsBench/README.md)<br>[src/scenarios/local/readme.md](../../../../sources/IBM__AssetOpsBench/src/scenarios/local/readme.md)<br>[src/scenarios/huggingface/readme.md](../../../../sources/IBM__AssetOpsBench/src/scenarios/huggingface/readme.md)<br>[docs/acknowledgments.md](../../../../sources/IBM__AssetOpsBench/docs/acknowledgments.md)<br>[docs/data.md](../../../../sources/IBM__AssetOpsBench/docs/data.md)<br>[docs/evaluation.md](../../../../sources/IBM__AssetOpsBench/docs/evaluation.md)<br>[docs/mcp-e2e-test-suite.md](../../../../sources/IBM__AssetOpsBench/docs/mcp-e2e-test-suite.md)<br>[docs/mcp-servers.md](../../../../sources/IBM__AssetOpsBench/docs/mcp-servers.md) |
| config | 2 | [pyproject.toml](../../../../sources/IBM__AssetOpsBench/pyproject.toml)<br>[uv.lock](../../../../sources/IBM__AssetOpsBench/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 76 | [src/servers/wo/tests/__init__.py](../../../../sources/IBM__AssetOpsBench/src/servers/wo/tests/__init__.py)<br>[src/servers/wo/tests/test_models_boundary.py](../../../../sources/IBM__AssetOpsBench/src/servers/wo/tests/test_models_boundary.py)<br>[src/servers/wo/tests/test_workorders.py](../../../../sources/IBM__AssetOpsBench/src/servers/wo/tests/test_workorders.py)<br>[src/servers/vibration/tests/__init__.py](../../../../sources/IBM__AssetOpsBench/src/servers/vibration/tests/__init__.py)<br>[src/servers/vibration/tests/conftest.py](../../../../sources/IBM__AssetOpsBench/src/servers/vibration/tests/conftest.py)<br>[src/servers/vibration/tests/test_dsp.py](../../../../sources/IBM__AssetOpsBench/src/servers/vibration/tests/test_dsp.py) |
| CI workflows | 3 | [.github/workflows/guard-couchdb-data.yml](../../../../sources/IBM__AssetOpsBench/.github/workflows/guard-couchdb-data.yml)<br>[.github/workflows/secret-scan.yml](../../../../sources/IBM__AssetOpsBench/.github/workflows/secret-scan.yml)<br>[.github/workflows/stale.yml](../../../../sources/IBM__AssetOpsBench/.github/workflows/stale.yml) |
| Containers / deploy | 2 | [src/couchdb/docker-compose.yaml](../../../../sources/IBM__AssetOpsBench/src/couchdb/docker-compose.yaml)<br>[src/agent/stirrup_agent/Dockerfile.code](../../../../sources/IBM__AssetOpsBench/src/agent/stirrup_agent/Dockerfile.code) |
| Security / policy | 3 | [SECRET_SCANNING_SETUP.md](../../../../sources/IBM__AssetOpsBench/SECRET_SCANNING_SETUP.md)<br>[.github/workflows/guard-couchdb-data.yml](../../../../sources/IBM__AssetOpsBench/.github/workflows/guard-couchdb-data.yml)<br>[.github/workflows/secret-scan.yml](../../../../sources/IBM__AssetOpsBench/.github/workflows/secret-scan.yml) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/servers/vibration/tests/test_mcp_e2e.py`, `docs/mcp-e2e-test-suite.md`, `docs/mcp-servers.md`.
2. Trace execution through entrypoints: `src/servers/wo/main.py`, `src/servers/vibration/main.py`, `src/servers/utilities/main.py`.
3. Map agent/tool runtime through: `src/evaluation/runner.py`, `src/agent/__init__.py`, `src/agent/_cli_common.py`.
4. Verify behavior through test/eval files: `src/servers/wo/tests/__init__.py`, `src/servers/wo/tests/test_models_boundary.py`, `src/servers/wo/tests/test_workorders.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 AssetOpsBench Industry 4.0 A unified benchmark and framework for building, orchestrating, and evaluating domain specific. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, openai, langchain이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
