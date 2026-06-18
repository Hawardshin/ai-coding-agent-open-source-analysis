# oracle/mcp Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Repository containing MCP (Model Context Protocol) servers that provides a suite of tools for managing and interacting with Oracle products.

## 요약

- 조사 단위: `sources/oracle__mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 547 files, 144 directories, depth score 119, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/e2e/features/oci-cloud-guard-mcp-server.feature, tests/e2e/features/oci-compute-instance-agent-mcp-server.feature, tests/e2e/features/oci-compute-mcp-server.feature이고, 의존성 단서는 mcp, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | oracle/mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 382 |
| Forks | 120 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/oracle__mcp](../../../../sources/oracle__mcp) |
| Existing report | [reports/global-trending/repositories/oracle__mcp.md](../../../global-trending/repositories/oracle__mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 547 / 144 |
| Max observed depth | 11 |
| Top directories | .github, scripts, src, tests |
| Top extensions | .py: 264, .md: 74, (none): 62, .txt: 38, .toml: 30, .lock: 28, .java: 23, .feature: 17, .json: 3, .yml: 3, .svg: 2, .example: 1 |
| Source patterns | api/server, agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 137 |
| tests | validation surface | 81 |
| .github | ci surface | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build | make build |
| utility | Makefile | install | make install |
| utility | Makefile | sync | make sync |
| utility | Makefile | lock | make lock |
| quality | Makefile | lock-check | make lock-check |
| quality | Makefile | lint | make lint |
| test | Makefile | test | make test |
| test | Makefile | combine-coverage | make combine-coverage |
| test | Makefile | test-publish | make test-publish |
| utility | Makefile | publish | make publish |
| quality | Makefile | format | make format |
| test | Makefile | e2e-tests | make e2e-tests |
| container | Makefile | containerize | make containerize |


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
| mcp | [tests/e2e/features/oci-cloud-guard-mcp-server.feature](../../../../sources/oracle__mcp/tests/e2e/features/oci-cloud-guard-mcp-server.feature) | mcp signal |
| mcp | [tests/e2e/features/oci-compute-instance-agent-mcp-server.feature](../../../../sources/oracle__mcp/tests/e2e/features/oci-compute-instance-agent-mcp-server.feature) | mcp signal |
| mcp | [tests/e2e/features/oci-compute-mcp-server.feature](../../../../sources/oracle__mcp/tests/e2e/features/oci-compute-mcp-server.feature) | mcp signal |
| mcp | [tests/e2e/features/oci-faaas-mcp-server.feature](../../../../sources/oracle__mcp/tests/e2e/features/oci-faaas-mcp-server.feature) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/oracle__mcp/AGENTS.md) | agentRuntime signal |
| agentRuntime | [src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/DatabaseOperatorTools.java](../../../../sources/oracle__mcp/src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/DatabaseOperatorTools.java) | agentRuntime signal |
| agentRuntime | [src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/LogAnalyzerTools.java](../../../../sources/oracle__mcp/src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/LogAnalyzerTools.java) | agentRuntime signal |
| agentRuntime | [src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/McpAdminTools.java](../../../../sources/oracle__mcp/src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/McpAdminTools.java) | agentRuntime signal |
| entrypoints | [src/oracle-goldengate-mcp-server/oracle/oracle_goldengate_mcp_server/server.py](../../../../sources/oracle__mcp/src/oracle-goldengate-mcp-server/oracle/oracle_goldengate_mcp_server/server.py) | entrypoints signal |
| entrypoints | [src/oci-usage-mcp-server/oracle/oci_usage_mcp_server/server.py](../../../../sources/oracle__mcp/src/oci-usage-mcp-server/oracle/oci_usage_mcp_server/server.py) | entrypoints signal |
| entrypoints | [src/oci-support-mcp-server/oracle/oci_support_mcp_server/server.py](../../../../sources/oracle__mcp/src/oci-support-mcp-server/oracle/oci_support_mcp_server/server.py) | entrypoints signal |
| entrypoints | [src/oci-resource-search-mcp-server/oracle/oci_resource_search_mcp_server/server.py](../../../../sources/oracle__mcp/src/oci-resource-search-mcp-server/oracle/oci_resource_search_mcp_server/server.py) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 26 | [src/oracle-goldengate-mcp-server/oracle/oracle_goldengate_mcp_server/server.py](../../../../sources/oracle__mcp/src/oracle-goldengate-mcp-server/oracle/oracle_goldengate_mcp_server/server.py)<br>[src/oci-usage-mcp-server/oracle/oci_usage_mcp_server/server.py](../../../../sources/oracle__mcp/src/oci-usage-mcp-server/oracle/oci_usage_mcp_server/server.py)<br>[src/oci-support-mcp-server/oracle/oci_support_mcp_server/server.py](../../../../sources/oracle__mcp/src/oci-support-mcp-server/oracle/oci_support_mcp_server/server.py)<br>[src/oci-resource-search-mcp-server/oracle/oci_resource_search_mcp_server/server.py](../../../../sources/oracle__mcp/src/oci-resource-search-mcp-server/oracle/oci_resource_search_mcp_server/server.py)<br>[src/oci-registry-mcp-server/oracle/oci_registry_mcp_server/server.py](../../../../sources/oracle__mcp/src/oci-registry-mcp-server/oracle/oci_registry_mcp_server/server.py)<br>[src/oci-recovery-mcp-server/oracle/oci_recovery_mcp_server/server.py](../../../../sources/oracle__mcp/src/oci-recovery-mcp-server/oracle/oci_recovery_mcp_server/server.py)<br>[src/oci-opensearch-mcp-server/oracle/oci_opensearch_mcp_server/server.py](../../../../sources/oracle__mcp/src/oci-opensearch-mcp-server/oracle/oci_opensearch_mcp_server/server.py)<br>[src/oci-object-storage-mcp-server/oracle/oci_object_storage_mcp_server/server.py](../../../../sources/oracle__mcp/src/oci-object-storage-mcp-server/oracle/oci_object_storage_mcp_server/server.py) |
| agentRuntime | 10 | [AGENTS.md](../../../../sources/oracle__mcp/AGENTS.md)<br>[src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/DatabaseOperatorTools.java](../../../../sources/oracle__mcp/src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/DatabaseOperatorTools.java)<br>[src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/LogAnalyzerTools.java](../../../../sources/oracle__mcp/src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/LogAnalyzerTools.java)<br>[src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/McpAdminTools.java](../../../../sources/oracle__mcp/src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/McpAdminTools.java)<br>[src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/RagTools.java](../../../../sources/oracle__mcp/src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/RagTools.java)<br>[src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/SqlQueries.java](../../../../sources/oracle__mcp/src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/SqlQueries.java)<br>[src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/ToolSchemas.java](../../../../sources/oracle__mcp/src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/ToolSchemas.java)<br>[src/oci-opensearch-mcp-server/oracle/oci_opensearch_mcp_server/scripts/TOOL_SURFACE_SUMMARY.md](../../../../sources/oracle__mcp/src/oci-opensearch-mcp-server/oracle/oci_opensearch_mcp_server/scripts/TOOL_SURFACE_SUMMARY.md) |
| mcp | 481 | [tests/e2e/features/oci-cloud-guard-mcp-server.feature](../../../../sources/oracle__mcp/tests/e2e/features/oci-cloud-guard-mcp-server.feature)<br>[tests/e2e/features/oci-compute-instance-agent-mcp-server.feature](../../../../sources/oracle__mcp/tests/e2e/features/oci-compute-instance-agent-mcp-server.feature)<br>[tests/e2e/features/oci-compute-mcp-server.feature](../../../../sources/oracle__mcp/tests/e2e/features/oci-compute-mcp-server.feature)<br>[tests/e2e/features/oci-faaas-mcp-server.feature](../../../../sources/oracle__mcp/tests/e2e/features/oci-faaas-mcp-server.feature)<br>[tests/e2e/features/oci-identity-mcp-server.feature](../../../../sources/oracle__mcp/tests/e2e/features/oci-identity-mcp-server.feature)<br>[tests/e2e/features/oci-iot-mcp-server.feature](../../../../sources/oracle__mcp/tests/e2e/features/oci-iot-mcp-server.feature)<br>[tests/e2e/features/oci-load-balancer-mcp-server.feature](../../../../sources/oracle__mcp/tests/e2e/features/oci-load-balancer-mcp-server.feature)<br>[tests/e2e/features/oci-logging-mcp-server.feature](../../../../sources/oracle__mcp/tests/e2e/features/oci-logging-mcp-server.feature) |
| retrieval | 0 | not obvious |
| spec | 6 | [requirements-dev.txt](../../../../sources/oracle__mcp/requirements-dev.txt)<br>[requirements.txt](../../../../sources/oracle__mcp/requirements.txt)<br>[src/oracle-db-doc-mcp-server/requirements.txt](../../../../sources/oracle__mcp/src/oracle-db-doc-mcp-server/requirements.txt)<br>[src/oci-full-stack-disaster-recovery-mcp-server/requirements.txt](../../../../sources/oracle__mcp/src/oci-full-stack-disaster-recovery-mcp-server/requirements.txt)<br>[src/mysql-mcp-server/requirements.txt](../../../../sources/oracle__mcp/src/mysql-mcp-server/requirements.txt)<br>[src/dbtools-mcp-server/requirements.txt](../../../../sources/oracle__mcp/src/dbtools-mcp-server/requirements.txt) |
| eval | 152 | [tests/.gitignore](../../../../sources/oracle__mcp/tests/.gitignore)<br>[tests/LICENSE.txt](../../../../sources/oracle__mcp/tests/LICENSE.txt)<br>[tests/pyproject.toml](../../../../sources/oracle__mcp/tests/pyproject.toml)<br>[tests/README.md](../../../../sources/oracle__mcp/tests/README.md)<br>[tests/uv.lock](../../../../sources/oracle__mcp/tests/uv.lock)<br>[tests/e2e/features/.env.template](../../../../sources/oracle__mcp/tests/e2e/features/.env.template)<br>[tests/e2e/features/environment.py](../../../../sources/oracle__mcp/tests/e2e/features/environment.py)<br>[tests/e2e/features/general-prompts.feature](../../../../sources/oracle__mcp/tests/e2e/features/general-prompts.feature) |
| security | 25 | [SECURITY.md](../../../../sources/oracle__mcp/SECURITY.md)<br>[tests/e2e/features/oci-cloud-guard-mcp-server.feature](../../../../sources/oracle__mcp/tests/e2e/features/oci-cloud-guard-mcp-server.feature)<br>[tests/e2e/features/steps/oci-cloud-guard-mcp-server-steps.py](../../../../sources/oracle__mcp/tests/e2e/features/steps/oci-cloud-guard-mcp-server-steps.py)<br>[tests/e2e/features/mocks/services/cloud_guard_data.py](../../../../sources/oracle__mcp/tests/e2e/features/mocks/services/cloud_guard_data.py)<br>[tests/e2e/features/mocks/services/cloud_guard_routes.py](../../../../sources/oracle__mcp/tests/e2e/features/mocks/services/cloud_guard_routes.py)<br>[src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/oauth/OAuth2Configuration.java](../../../../sources/oracle__mcp/src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/oauth/OAuth2Configuration.java)<br>[src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/oauth/OAuth2TokenValidator.java](../../../../sources/oracle__mcp/src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/oauth/OAuth2TokenValidator.java)<br>[src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/oauth/TokenGenerator.java](../../../../sources/oracle__mcp/src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/oauth/TokenGenerator.java) |
| ci | 3 | [.github/workflows/build-doc-mcp.yml](../../../../sources/oracle__mcp/.github/workflows/build-doc-mcp.yml)<br>[.github/workflows/build.yml](../../../../sources/oracle__mcp/.github/workflows/build.yml)<br>[.github/workflows/lint.yml](../../../../sources/oracle__mcp/.github/workflows/lint.yml) |
| container | 3 | [src/oracle-db-mcp-java-toolkit/Dockerfile](../../../../sources/oracle__mcp/src/oracle-db-mcp-java-toolkit/Dockerfile)<br>[src/oracle-db-doc-mcp-server/Dockerfile](../../../../sources/oracle__mcp/src/oracle-db-doc-mcp-server/Dockerfile)<br>[src/oci-pricing-mcp-server/Dockerfile](../../../../sources/oracle__mcp/src/oci-pricing-mcp-server/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/oracle__mcp/AGENTS.md) |
| docs | 35 | [README.md](../../../../sources/oracle__mcp/README.md)<br>[tests/README.md](../../../../sources/oracle__mcp/tests/README.md)<br>[src/oracle-goldengate-mcp-server/README.md](../../../../sources/oracle__mcp/src/oracle-goldengate-mcp-server/README.md)<br>[src/oracle-goldengate-mcp-server/docs/createExtract.md](../../../../sources/oracle__mcp/src/oracle-goldengate-mcp-server/docs/createExtract.md)<br>[src/oracle-goldengate-mcp-server/docs/createReplicat.md](../../../../sources/oracle__mcp/src/oracle-goldengate-mcp-server/docs/createReplicat.md)<br>[src/oracle-db-mcp-java-toolkit/README.md](../../../../sources/oracle__mcp/src/oracle-db-mcp-java-toolkit/README.md)<br>[src/oracle-db-doc-mcp-server/README.md](../../../../sources/oracle__mcp/src/oracle-db-doc-mcp-server/README.md)<br>[src/oci-usage-mcp-server/README.md](../../../../sources/oracle__mcp/src/oci-usage-mcp-server/README.md) |
| config | 64 | [Makefile](../../../../sources/oracle__mcp/Makefile)<br>[requirements-dev.txt](../../../../sources/oracle__mcp/requirements-dev.txt)<br>[requirements.txt](../../../../sources/oracle__mcp/requirements.txt)<br>[tests/pyproject.toml](../../../../sources/oracle__mcp/tests/pyproject.toml)<br>[tests/uv.lock](../../../../sources/oracle__mcp/tests/uv.lock)<br>[src/oracle-goldengate-mcp-server/pyproject.toml](../../../../sources/oracle__mcp/src/oracle-goldengate-mcp-server/pyproject.toml)<br>[src/oracle-goldengate-mcp-server/uv.lock](../../../../sources/oracle__mcp/src/oracle-goldengate-mcp-server/uv.lock)<br>[src/oracle-db-doc-mcp-server/pyproject.toml](../../../../sources/oracle__mcp/src/oracle-db-doc-mcp-server/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 152 | [tests/.gitignore](../../../../sources/oracle__mcp/tests/.gitignore)<br>[tests/LICENSE.txt](../../../../sources/oracle__mcp/tests/LICENSE.txt)<br>[tests/pyproject.toml](../../../../sources/oracle__mcp/tests/pyproject.toml)<br>[tests/README.md](../../../../sources/oracle__mcp/tests/README.md)<br>[tests/uv.lock](../../../../sources/oracle__mcp/tests/uv.lock)<br>[tests/e2e/features/.env.template](../../../../sources/oracle__mcp/tests/e2e/features/.env.template) |
| CI workflows | 3 | [.github/workflows/build-doc-mcp.yml](../../../../sources/oracle__mcp/.github/workflows/build-doc-mcp.yml)<br>[.github/workflows/build.yml](../../../../sources/oracle__mcp/.github/workflows/build.yml)<br>[.github/workflows/lint.yml](../../../../sources/oracle__mcp/.github/workflows/lint.yml) |
| Containers / deploy | 3 | [src/oracle-db-mcp-java-toolkit/Dockerfile](../../../../sources/oracle__mcp/src/oracle-db-mcp-java-toolkit/Dockerfile)<br>[src/oracle-db-doc-mcp-server/Dockerfile](../../../../sources/oracle__mcp/src/oracle-db-doc-mcp-server/Dockerfile)<br>[src/oci-pricing-mcp-server/Dockerfile](../../../../sources/oracle__mcp/src/oci-pricing-mcp-server/Dockerfile) |
| Security / policy | 25 | [SECURITY.md](../../../../sources/oracle__mcp/SECURITY.md)<br>[tests/e2e/features/oci-cloud-guard-mcp-server.feature](../../../../sources/oracle__mcp/tests/e2e/features/oci-cloud-guard-mcp-server.feature)<br>[tests/e2e/features/steps/oci-cloud-guard-mcp-server-steps.py](../../../../sources/oracle__mcp/tests/e2e/features/steps/oci-cloud-guard-mcp-server-steps.py)<br>[tests/e2e/features/mocks/services/cloud_guard_data.py](../../../../sources/oracle__mcp/tests/e2e/features/mocks/services/cloud_guard_data.py)<br>[tests/e2e/features/mocks/services/cloud_guard_routes.py](../../../../sources/oracle__mcp/tests/e2e/features/mocks/services/cloud_guard_routes.py)<br>[src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/oauth/OAuth2Configuration.java](../../../../sources/oracle__mcp/src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/oauth/OAuth2Configuration.java) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/oracle__mcp/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/e2e/features/oci-cloud-guard-mcp-server.feature`, `tests/e2e/features/oci-compute-instance-agent-mcp-server.feature`, `tests/e2e/features/oci-compute-mcp-server.feature`.
2. Trace execution through entrypoints: `src/oracle-goldengate-mcp-server/oracle/oracle_goldengate_mcp_server/server.py`, `src/oci-usage-mcp-server/oracle/oci_usage_mcp_server/server.py`, `src/oci-support-mcp-server/oracle/oci_support_mcp_server/server.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/DatabaseOperatorTools.java`, `src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/LogAnalyzerTools.java`.
4. Verify behavior through test/eval files: `tests/.gitignore`, `tests/LICENSE.txt`, `tests/pyproject.toml`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Repository containing MCP Model Context Protocol servers that provides a suite of tools for managing and interacting wit. 핵심 구조 신호는 Python, requirements.txt, Makefile, README.md, AGENTS.md, mcp이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
