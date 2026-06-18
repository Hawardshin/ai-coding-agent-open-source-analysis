# kubeflow/mcp-apache-spark-history-server Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

MCP Server and CLI for Apache Spark History Server. Debug Spark applications from AI agents, scripts, or the terminal.

## 요약

- 조사 단위: `sources/kubeflow__mcp-apache-spark-history-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 247 files, 58 directories, depth score 119, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=spark_history_server_mcp_launcher.sh, tests/manifests/mcp-inspector.yaml, src/spark_history_mcp/__init__.py이고, 의존성 단서는 mcp, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | kubeflow/mcp-apache-spark-history-server |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 177 |
| Forks | 65 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/kubeflow__mcp-apache-spark-history-server](../../../../sources/kubeflow__mcp-apache-spark-history-server) |
| Existing report | [reports/global-trending/repositories/kubeflow__mcp-apache-spark-history-server.md](../../../global-trending/repositories/kubeflow__mcp-apache-spark-history-server.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 247 / 58 |
| Max observed depth | 6 |
| Top directories | .devcontainer, .github, deploy, examples, openapi, pre-commit-scripts, screenshots, skills, src, taskfiles, tests |
| Top extensions | .py: 88, .go: 40, .yaml: 38, .md: 33, (none): 14, .json: 9, .png: 5, .zstd: 4, .sh: 3, .txt: 3, .conf: 2, .yml: 2 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 53 |
| tests | validation surface | 18 |
| examples/integrations | examples workspace | 8 |
| examples/aws | examples workspace | 2 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| deploy | deployment surface | 1 |
| examples | top-level component | 1 |
| examples/basic | examples workspace | 1 |
| openapi | source boundary | 1 |
| pre-commit-scripts | top-level component | 1 |
| screenshots | top-level component | 1 |
| skills | top-level component | 1 |
| taskfiles | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | spark-mcp | spark-mcp |


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
| mcp | [spark_history_server_mcp_launcher.sh](../../../../sources/kubeflow__mcp-apache-spark-history-server/spark_history_server_mcp_launcher.sh) | mcp signal |
| mcp | [tests/manifests/mcp-inspector.yaml](../../../../sources/kubeflow__mcp-apache-spark-history-server/tests/manifests/mcp-inspector.yaml) | mcp signal |
| mcp | [src/spark_history_mcp/__init__.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/src/spark_history_mcp/__init__.py) | mcp signal |
| mcp | [src/spark_history_mcp/utils/__init__.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/src/spark_history_mcp/utils/__init__.py) | mcp signal |
| agentRuntime | [src/spark_history_mcp/tools/__init__.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/src/spark_history_mcp/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [src/spark_history_mcp/tools/aws_troubleshooting.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/src/spark_history_mcp/tools/aws_troubleshooting.py) | agentRuntime signal |
| agentRuntime | [src/spark_history_mcp/tools/tools.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/src/spark_history_mcp/tools/tools.py) | agentRuntime signal |
| agentRuntime | [src/spark_history_mcp/api_client/models/executor_metrics_distributions_peak_memory_metrics.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/src/spark_history_mcp/api_client/models/executor_metrics_distributions_peak_memory_metrics.py) | agentRuntime signal |
| entrypoints | [src/spark_history_mcp/core/main.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/src/spark_history_mcp/core/main.py) | entrypoints signal |
| entrypoints | [skills/cli/main.go](../../../../sources/kubeflow__mcp-apache-spark-history-server/skills/cli/main.go) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/kubeflow__mcp-apache-spark-history-server/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/kubeflow__mcp-apache-spark-history-server/uv.lock) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [src/spark_history_mcp/core/main.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/src/spark_history_mcp/core/main.py)<br>[skills/cli/main.go](../../../../sources/kubeflow__mcp-apache-spark-history-server/skills/cli/main.go) |
| agentRuntime | 80 | [src/spark_history_mcp/tools/__init__.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/src/spark_history_mcp/tools/__init__.py)<br>[src/spark_history_mcp/tools/aws_troubleshooting.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/src/spark_history_mcp/tools/aws_troubleshooting.py)<br>[src/spark_history_mcp/tools/tools.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/src/spark_history_mcp/tools/tools.py)<br>[src/spark_history_mcp/api_client/models/executor_metrics_distributions_peak_memory_metrics.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/src/spark_history_mcp/api_client/models/executor_metrics_distributions_peak_memory_metrics.py)<br>[src/spark_history_mcp/api_client/models/executor_metrics_distributions.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/src/spark_history_mcp/api_client/models/executor_metrics_distributions.py)<br>[src/spark_history_mcp/api_client/models/executor_stage_summary.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/src/spark_history_mcp/api_client/models/executor_stage_summary.py)<br>[src/spark_history_mcp/api_client/models/executor.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/src/spark_history_mcp/api_client/models/executor.py)<br>[src/spark_history_mcp/api_client/models/memory_metrics.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/src/spark_history_mcp/api_client/models/memory_metrics.py) |
| mcp | 95 | [spark_history_server_mcp_launcher.sh](../../../../sources/kubeflow__mcp-apache-spark-history-server/spark_history_server_mcp_launcher.sh)<br>[tests/manifests/mcp-inspector.yaml](../../../../sources/kubeflow__mcp-apache-spark-history-server/tests/manifests/mcp-inspector.yaml)<br>[src/spark_history_mcp/__init__.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/src/spark_history_mcp/__init__.py)<br>[src/spark_history_mcp/utils/__init__.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/src/spark_history_mcp/utils/__init__.py)<br>[src/spark_history_mcp/utils/utils.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/src/spark_history_mcp/utils/utils.py)<br>[src/spark_history_mcp/tools/__init__.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/src/spark_history_mcp/tools/__init__.py)<br>[src/spark_history_mcp/tools/aws_troubleshooting.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/src/spark_history_mcp/tools/aws_troubleshooting.py)<br>[src/spark_history_mcp/tools/tools.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/src/spark_history_mcp/tools/tools.py) |
| retrieval | 3 | [src/spark_history_mcp/api_client/models/executor_metrics_distributions_peak_memory_metrics.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/src/spark_history_mcp/api_client/models/executor_metrics_distributions_peak_memory_metrics.py)<br>[src/spark_history_mcp/api_client/models/memory_metrics.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/src/spark_history_mcp/api_client/models/memory_metrics.py)<br>[src/spark_history_mcp/api_client/models/peak_memory_metrics.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/src/spark_history_mcp/api_client/models/peak_memory_metrics.py) |
| spec | 2 | [examples/integrations/strands-agents/requirements.txt](../../../../sources/kubeflow__mcp-apache-spark-history-server/examples/integrations/strands-agents/requirements.txt)<br>[examples/integrations/langgraph/requirements.txt](../../../../sources/kubeflow__mcp-apache-spark-history-server/examples/integrations/langgraph/requirements.txt) |
| eval | 31 | [tests/__init__.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/tests/__init__.py)<br>[tests/config-e2e.yaml](../../../../sources/kubeflow__mcp-apache-spark-history-server/tests/config-e2e.yaml)<br>[tests/e2e.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/tests/e2e.py)<br>[tests/unit/__init__.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/tests/unit/__init__.py)<br>[tests/unit/config.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/tests/unit/config.py)<br>[tests/unit/test_aws_troubleshooting.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/tests/unit/test_aws_troubleshooting.py)<br>[tests/unit/test_spark_client.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/tests/unit/test_spark_client.py)<br>[tests/unit/test_tools.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/tests/unit/test_tools.py) |
| security | 3 | [SECURITY.md](../../../../sources/kubeflow__mcp-apache-spark-history-server/SECURITY.md)<br>[pre-commit-scripts/check-config-security.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/pre-commit-scripts/check-config-security.py)<br>[deploy/kubernetes/helm/mcp-apache-spark-history-server/templates/secret.yaml](../../../../sources/kubeflow__mcp-apache-spark-history-server/deploy/kubernetes/helm/mcp-apache-spark-history-server/templates/secret.yaml) |
| ci | 5 | [.github/workflows/build.yaml](../../../../sources/kubeflow__mcp-apache-spark-history-server/.github/workflows/build.yaml)<br>[.github/workflows/ci-cli.yaml](../../../../sources/kubeflow__mcp-apache-spark-history-server/.github/workflows/ci-cli.yaml)<br>[.github/workflows/ci.yml](../../../../sources/kubeflow__mcp-apache-spark-history-server/.github/workflows/ci.yml)<br>[.github/workflows/release-cli.yaml](../../../../sources/kubeflow__mcp-apache-spark-history-server/.github/workflows/release-cli.yaml)<br>[.github/workflows/release.yaml](../../../../sources/kubeflow__mcp-apache-spark-history-server/.github/workflows/release.yaml) |
| container | 21 | [Dockerfile](../../../../sources/kubeflow__mcp-apache-spark-history-server/Dockerfile)<br>[deploy/kubernetes/helm/README.md](../../../../sources/kubeflow__mcp-apache-spark-history-server/deploy/kubernetes/helm/README.md)<br>[deploy/kubernetes/helm/mcp-apache-spark-history-server/Chart.yaml](../../../../sources/kubeflow__mcp-apache-spark-history-server/deploy/kubernetes/helm/mcp-apache-spark-history-server/Chart.yaml)<br>[deploy/kubernetes/helm/mcp-apache-spark-history-server/values.schema.json](../../../../sources/kubeflow__mcp-apache-spark-history-server/deploy/kubernetes/helm/mcp-apache-spark-history-server/values.schema.json)<br>[deploy/kubernetes/helm/mcp-apache-spark-history-server/values.yaml](../../../../sources/kubeflow__mcp-apache-spark-history-server/deploy/kubernetes/helm/mcp-apache-spark-history-server/values.yaml)<br>[deploy/kubernetes/helm/mcp-apache-spark-history-server/tests/deployment_csi_test.yaml](../../../../sources/kubeflow__mcp-apache-spark-history-server/deploy/kubernetes/helm/mcp-apache-spark-history-server/tests/deployment_csi_test.yaml)<br>[deploy/kubernetes/helm/mcp-apache-spark-history-server/tests/externalsecret_test.yaml](../../../../sources/kubeflow__mcp-apache-spark-history-server/deploy/kubernetes/helm/mcp-apache-spark-history-server/tests/externalsecret_test.yaml)<br>[deploy/kubernetes/helm/mcp-apache-spark-history-server/tests/service_test.yaml](../../../../sources/kubeflow__mcp-apache-spark-history-server/deploy/kubernetes/helm/mcp-apache-spark-history-server/tests/service_test.yaml) |
| instruction | 0 | not obvious |
| docs | 12 | [README.md](../../../../sources/kubeflow__mcp-apache-spark-history-server/README.md)<br>[skills/cli/README.md](../../../../sources/kubeflow__mcp-apache-spark-history-server/skills/cli/README.md)<br>[skills/cli/examples/compare/README.md](../../../../sources/kubeflow__mcp-apache-spark-history-server/skills/cli/examples/compare/README.md)<br>[screenshots/README.md](../../../../sources/kubeflow__mcp-apache-spark-history-server/screenshots/README.md)<br>[examples/integrations/strands-agents/README.md](../../../../sources/kubeflow__mcp-apache-spark-history-server/examples/integrations/strands-agents/README.md)<br>[examples/integrations/langgraph/README.md](../../../../sources/kubeflow__mcp-apache-spark-history-server/examples/integrations/langgraph/README.md)<br>[examples/integrations/kiro/README.md](../../../../sources/kubeflow__mcp-apache-spark-history-server/examples/integrations/kiro/README.md)<br>[examples/integrations/claude-desktop/README.md](../../../../sources/kubeflow__mcp-apache-spark-history-server/examples/integrations/claude-desktop/README.md) |
| config | 5 | [pyproject.toml](../../../../sources/kubeflow__mcp-apache-spark-history-server/pyproject.toml)<br>[uv.lock](../../../../sources/kubeflow__mcp-apache-spark-history-server/uv.lock)<br>[skills/cli/go.mod](../../../../sources/kubeflow__mcp-apache-spark-history-server/skills/cli/go.mod)<br>[examples/integrations/strands-agents/requirements.txt](../../../../sources/kubeflow__mcp-apache-spark-history-server/examples/integrations/strands-agents/requirements.txt)<br>[examples/integrations/langgraph/requirements.txt](../../../../sources/kubeflow__mcp-apache-spark-history-server/examples/integrations/langgraph/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 31 | [tests/__init__.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/tests/__init__.py)<br>[tests/config-e2e.yaml](../../../../sources/kubeflow__mcp-apache-spark-history-server/tests/config-e2e.yaml)<br>[tests/e2e.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/tests/e2e.py)<br>[tests/unit/__init__.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/tests/unit/__init__.py)<br>[tests/unit/config.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/tests/unit/config.py)<br>[tests/unit/test_aws_troubleshooting.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/tests/unit/test_aws_troubleshooting.py) |
| CI workflows | 5 | [.github/workflows/build.yaml](../../../../sources/kubeflow__mcp-apache-spark-history-server/.github/workflows/build.yaml)<br>[.github/workflows/ci-cli.yaml](../../../../sources/kubeflow__mcp-apache-spark-history-server/.github/workflows/ci-cli.yaml)<br>[.github/workflows/ci.yml](../../../../sources/kubeflow__mcp-apache-spark-history-server/.github/workflows/ci.yml)<br>[.github/workflows/release-cli.yaml](../../../../sources/kubeflow__mcp-apache-spark-history-server/.github/workflows/release-cli.yaml)<br>[.github/workflows/release.yaml](../../../../sources/kubeflow__mcp-apache-spark-history-server/.github/workflows/release.yaml) |
| Containers / deploy | 21 | [Dockerfile](../../../../sources/kubeflow__mcp-apache-spark-history-server/Dockerfile)<br>[deploy/kubernetes/helm/README.md](../../../../sources/kubeflow__mcp-apache-spark-history-server/deploy/kubernetes/helm/README.md)<br>[deploy/kubernetes/helm/mcp-apache-spark-history-server/Chart.yaml](../../../../sources/kubeflow__mcp-apache-spark-history-server/deploy/kubernetes/helm/mcp-apache-spark-history-server/Chart.yaml)<br>[deploy/kubernetes/helm/mcp-apache-spark-history-server/values.schema.json](../../../../sources/kubeflow__mcp-apache-spark-history-server/deploy/kubernetes/helm/mcp-apache-spark-history-server/values.schema.json)<br>[deploy/kubernetes/helm/mcp-apache-spark-history-server/values.yaml](../../../../sources/kubeflow__mcp-apache-spark-history-server/deploy/kubernetes/helm/mcp-apache-spark-history-server/values.yaml)<br>[deploy/kubernetes/helm/mcp-apache-spark-history-server/tests/deployment_csi_test.yaml](../../../../sources/kubeflow__mcp-apache-spark-history-server/deploy/kubernetes/helm/mcp-apache-spark-history-server/tests/deployment_csi_test.yaml) |
| Security / policy | 3 | [SECURITY.md](../../../../sources/kubeflow__mcp-apache-spark-history-server/SECURITY.md)<br>[pre-commit-scripts/check-config-security.py](../../../../sources/kubeflow__mcp-apache-spark-history-server/pre-commit-scripts/check-config-security.py)<br>[deploy/kubernetes/helm/mcp-apache-spark-history-server/templates/secret.yaml](../../../../sources/kubeflow__mcp-apache-spark-history-server/deploy/kubernetes/helm/mcp-apache-spark-history-server/templates/secret.yaml) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `spark_history_server_mcp_launcher.sh`, `tests/manifests/mcp-inspector.yaml`, `src/spark_history_mcp/__init__.py`.
2. Trace execution through entrypoints: `src/spark_history_mcp/core/main.py`, `skills/cli/main.go`.
3. Map agent/tool runtime through: `src/spark_history_mcp/tools/__init__.py`, `src/spark_history_mcp/tools/aws_troubleshooting.py`, `src/spark_history_mcp/tools/tools.py`.
4. Inspect retrieval/memory/indexing through: `src/spark_history_mcp/api_client/models/executor_metrics_distributions_peak_memory_metrics.py`, `src/spark_history_mcp/api_client/models/memory_metrics.py`, `src/spark_history_mcp/api_client/models/peak_memory_metrics.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/config-e2e.yaml`, `tests/e2e.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 MCP Server and CLI for Apache Spark History Server. Debug Spark applications from AI agents, scripts, or the terminal.. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, README.md, LICENSE, mcp이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
