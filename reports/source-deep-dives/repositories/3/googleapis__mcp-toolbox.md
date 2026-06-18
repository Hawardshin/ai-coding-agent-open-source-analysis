# googleapis/mcp-toolbox Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

MCP Toolbox for Databases is an open source MCP server for databases.

## 요약

- 조사 단위: `sources/googleapis__mcp-toolbox` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,741 files, 703 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=MCP-TOOLBOX-EXTENSION.md, tests/mcp_tool.go, tests/mcp_types.go이고, 의존성 단서는 gemini, mcp, click, cobra, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | googleapis/mcp-toolbox |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 15643 |
| Forks | 1604 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/googleapis__mcp-toolbox](../../../../sources/googleapis__mcp-toolbox) |
| Existing report | [reports/global-trending/repositories/googleapis__mcp-toolbox.md](../../../global-trending/repositories/googleapis__mcp-toolbox.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1741 / 703 |
| Max observed depth | 8 |
| Top directories | .ci, .gemini, .github, .hugo, cmd, docs, internal, npm, pypi, tests |
| Top extensions | .go: 845, .md: 599, .yaml: 71, .png: 40, .json: 29, .js: 27, .html: 23, .py: 16, .txt: 16, .yml: 16, .sh: 12, .scss: 9 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 124 |
| tests | validation surface | 55 |
| .github | ci surface | 1 |
| cmd | source boundary | 1 |
| internal | top-level component | 1 |
| npm | top-level component | 1 |
| pypi | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | gemini |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | click, cobra |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [MCP-TOOLBOX-EXTENSION.md](../../../../sources/googleapis__mcp-toolbox/MCP-TOOLBOX-EXTENSION.md) | mcp signal |
| mcp | [tests/mcp_tool.go](../../../../sources/googleapis__mcp-toolbox/tests/mcp_tool.go) | mcp signal |
| mcp | [tests/mcp_types.go](../../../../sources/googleapis__mcp-toolbox/tests/mcp_types.go) | mcp signal |
| mcp | [tests/http/http_mcp_test.go](../../../../sources/googleapis__mcp-toolbox/tests/http/http_mcp_test.go) | mcp signal |
| agentRuntime | [tests/tool.go](../../../../sources/googleapis__mcp-toolbox/tests/tool.go) | agentRuntime signal |
| agentRuntime | [tests/conformance/tools.yaml](../../../../sources/googleapis__mcp-toolbox/tests/conformance/tools.yaml) | agentRuntime signal |
| agentRuntime | [internal/tools/http_method.go](../../../../sources/googleapis__mcp-toolbox/internal/tools/http_method.go) | agentRuntime signal |
| agentRuntime | [internal/tools/tools_test.go](../../../../sources/googleapis__mcp-toolbox/internal/tools/tools_test.go) | agentRuntime signal |
| entrypoints | [main.go](../../../../sources/googleapis__mcp-toolbox/main.go) | entrypoints signal |
| entrypoints | [server.json](../../../../sources/googleapis__mcp-toolbox/server.json) | entrypoints signal |
| entrypoints | [tests/server.go](../../../../sources/googleapis__mcp-toolbox/tests/server.go) | entrypoints signal |
| entrypoints | [pypi/src/toolbox_server/main.py](../../../../sources/googleapis__mcp-toolbox/pypi/src/toolbox_server/main.py) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 6 | [main.go](../../../../sources/googleapis__mcp-toolbox/main.go)<br>[server.json](../../../../sources/googleapis__mcp-toolbox/server.json)<br>[tests/server.go](../../../../sources/googleapis__mcp-toolbox/tests/server.go)<br>[pypi/src/toolbox_server/main.py](../../../../sources/googleapis__mcp-toolbox/pypi/src/toolbox_server/main.py)<br>[npm/server/bin/run.js](../../../../sources/googleapis__mcp-toolbox/npm/server/bin/run.js)<br>[internal/server/server.go](../../../../sources/googleapis__mcp-toolbox/internal/server/server.go) |
| agentRuntime | 918 | [tests/tool.go](../../../../sources/googleapis__mcp-toolbox/tests/tool.go)<br>[tests/conformance/tools.yaml](../../../../sources/googleapis__mcp-toolbox/tests/conformance/tools.yaml)<br>[internal/tools/http_method.go](../../../../sources/googleapis__mcp-toolbox/internal/tools/http_method.go)<br>[internal/tools/tools_test.go](../../../../sources/googleapis__mcp-toolbox/internal/tools/tools_test.go)<br>[internal/tools/tools.go](../../../../sources/googleapis__mcp-toolbox/internal/tools/tools.go)<br>[internal/tools/toolsets_test.go](../../../../sources/googleapis__mcp-toolbox/internal/tools/toolsets_test.go)<br>[internal/tools/toolsets.go](../../../../sources/googleapis__mcp-toolbox/internal/tools/toolsets.go)<br>[internal/tools/yugabytedbsql/yugabytedbsql_test.go](../../../../sources/googleapis__mcp-toolbox/internal/tools/yugabytedbsql/yugabytedbsql_test.go) |
| mcp | 69 | [MCP-TOOLBOX-EXTENSION.md](../../../../sources/googleapis__mcp-toolbox/MCP-TOOLBOX-EXTENSION.md)<br>[tests/mcp_tool.go](../../../../sources/googleapis__mcp-toolbox/tests/mcp_tool.go)<br>[tests/mcp_types.go](../../../../sources/googleapis__mcp-toolbox/tests/mcp_types.go)<br>[tests/http/http_mcp_test.go](../../../../sources/googleapis__mcp-toolbox/tests/http/http_mcp_test.go)<br>[tests/cloudsqlmysql/cloud_sql_mysql_create_instance_mcp_integration_test.go](../../../../sources/googleapis__mcp-toolbox/tests/cloudsqlmysql/cloud_sql_mysql_create_instance_mcp_integration_test.go)<br>[tests/cloudsqlmysql/cloud_sql_mysql_mcp_test.go](../../../../sources/googleapis__mcp-toolbox/tests/cloudsqlmysql/cloud_sql_mysql_mcp_test.go)<br>[tests/alloydbainl/alloydb_ai_nl_mcp_test.go](../../../../sources/googleapis__mcp-toolbox/tests/alloydbainl/alloydb_ai_nl_mcp_test.go)<br>[tests/alloydb/alloydb_mcp_test.go](../../../../sources/googleapis__mcp-toolbox/tests/alloydb/alloydb_mcp_test.go) |
| retrieval | 218 | [tests/embedding.go](../../../../sources/googleapis__mcp-toolbox/tests/embedding.go)<br>[internal/server/static/index.html](../../../../sources/googleapis__mcp-toolbox/internal/server/static/index.html)<br>[docs/KNOWLEDGE_CATALOG_README.md](../../../../sources/googleapis__mcp-toolbox/docs/KNOWLEDGE_CATALOG_README.md)<br>[docs/en/_index.md](../../../../sources/googleapis__mcp-toolbox/docs/en/_index.md)<br>[docs/en/samples/_index.md](../../../../sources/googleapis__mcp-toolbox/docs/en/samples/_index.md)<br>[docs/en/reference/_index.md](../../../../sources/googleapis__mcp-toolbox/docs/en/reference/_index.md)<br>[docs/en/integrations/_index.md](../../../../sources/googleapis__mcp-toolbox/docs/en/integrations/_index.md)<br>[docs/en/integrations/yuagbytedb/_index.md](../../../../sources/googleapis__mcp-toolbox/docs/en/integrations/yuagbytedb/_index.md) |
| spec | 12 | [docs/en/integrations/cloud-sql-pg/tools/vector-assist-apply-spec.md](../../../../sources/googleapis__mcp-toolbox/docs/en/integrations/cloud-sql-pg/tools/vector-assist-apply-spec.md)<br>[docs/en/integrations/cloud-sql-pg/tools/vector-assist-define-spec.md](../../../../sources/googleapis__mcp-toolbox/docs/en/integrations/cloud-sql-pg/tools/vector-assist-define-spec.md)<br>[docs/en/integrations/cloud-sql-pg/tools/vector-assist-delete-spec.md](../../../../sources/googleapis__mcp-toolbox/docs/en/integrations/cloud-sql-pg/tools/vector-assist-delete-spec.md)<br>[docs/en/integrations/cloud-sql-pg/tools/vector-assist-get-spec.md](../../../../sources/googleapis__mcp-toolbox/docs/en/integrations/cloud-sql-pg/tools/vector-assist-get-spec.md)<br>[docs/en/integrations/cloud-sql-pg/tools/vector-assist-modify-spec.md](../../../../sources/googleapis__mcp-toolbox/docs/en/integrations/cloud-sql-pg/tools/vector-assist-modify-spec.md)<br>[docs/en/documentation/introduction/architecture.png](../../../../sources/googleapis__mcp-toolbox/docs/en/documentation/introduction/architecture.png)<br>[docs/en/documentation/getting-started/quickstart/python/llamaindex/requirements.txt](../../../../sources/googleapis__mcp-toolbox/docs/en/documentation/getting-started/quickstart/python/llamaindex/requirements.txt)<br>[docs/en/documentation/getting-started/quickstart/python/langchain/requirements.txt](../../../../sources/googleapis__mcp-toolbox/docs/en/documentation/getting-started/quickstart/python/langchain/requirements.txt) |
| eval | 482 | [tests/auth.go](../../../../sources/googleapis__mcp-toolbox/tests/auth.go)<br>[tests/common.go](../../../../sources/googleapis__mcp-toolbox/tests/common.go)<br>[tests/embedding.go](../../../../sources/googleapis__mcp-toolbox/tests/embedding.go)<br>[tests/mcp_tool.go](../../../../sources/googleapis__mcp-toolbox/tests/mcp_tool.go)<br>[tests/mcp_types.go](../../../../sources/googleapis__mcp-toolbox/tests/mcp_types.go)<br>[tests/option.go](../../../../sources/googleapis__mcp-toolbox/tests/option.go)<br>[tests/server.go](../../../../sources/googleapis__mcp-toolbox/tests/server.go)<br>[tests/source.go](../../../../sources/googleapis__mcp-toolbox/tests/source.go) |
| security | 31 | [SECURITY.md](../../../../sources/googleapis__mcp-toolbox/SECURITY.md)<br>[tests/auth.go](../../../../sources/googleapis__mcp-toolbox/tests/auth.go)<br>[tests/auth/auth_integration_test.go](../../../../sources/googleapis__mcp-toolbox/tests/auth/auth_integration_test.go)<br>[internal/sources/cockroachdb/security_test.go](../../../../sources/googleapis__mcp-toolbox/internal/sources/cockroachdb/security_test.go)<br>[internal/server/static/js/auth.js](../../../../sources/googleapis__mcp-toolbox/internal/server/static/js/auth.js)<br>[internal/server/mcp/util/auth_test.go](../../../../sources/googleapis__mcp-toolbox/internal/server/mcp/util/auth_test.go)<br>[internal/server/mcp/util/auth.go](../../../../sources/googleapis__mcp-toolbox/internal/server/mcp/util/auth.go)<br>[internal/auth/auth.go](../../../../sources/googleapis__mcp-toolbox/internal/auth/auth.go) |
| ci | 21 | [.github/workflows/cloud_build_failure_reporter.yml](../../../../sources/googleapis__mcp-toolbox/.github/workflows/cloud_build_failure_reporter.yml)<br>[.github/workflows/cloudflare_sync.yaml](../../../../sources/googleapis__mcp-toolbox/.github/workflows/cloudflare_sync.yaml)<br>[.github/workflows/conformance.yml](../../../../sources/googleapis__mcp-toolbox/.github/workflows/conformance.yml)<br>[.github/workflows/deploy_dev_docs_to_cf.yaml](../../../../sources/googleapis__mcp-toolbox/.github/workflows/deploy_dev_docs_to_cf.yaml)<br>[.github/workflows/deploy_previous_version_docs_to_cf.yaml](../../../../sources/googleapis__mcp-toolbox/.github/workflows/deploy_previous_version_docs_to_cf.yaml)<br>[.github/workflows/deploy_versioned_docs_to_cf.yaml](../../../../sources/googleapis__mcp-toolbox/.github/workflows/deploy_versioned_docs_to_cf.yaml)<br>[.github/workflows/docs_lint.yaml](../../../../sources/googleapis__mcp-toolbox/.github/workflows/docs_lint.yaml)<br>[.github/workflows/docs_preview_build_cf.yaml](../../../../sources/googleapis__mcp-toolbox/.github/workflows/docs_preview_build_cf.yaml) |
| container | 2 | [Dockerfile](../../../../sources/googleapis__mcp-toolbox/Dockerfile)<br>[docs/en/documentation/deploy-to/kubernetes/_index.md](../../../../sources/googleapis__mcp-toolbox/docs/en/documentation/deploy-to/kubernetes/_index.md) |
| instruction | 2 | [GEMINI.md](../../../../sources/googleapis__mcp-toolbox/GEMINI.md)<br>[docs/en/documentation/configuration/embedding-models/gemini.md](../../../../sources/googleapis__mcp-toolbox/docs/en/documentation/configuration/embedding-models/gemini.md) |
| docs | 690 | [README.md](../../../../sources/googleapis__mcp-toolbox/README.md)<br>[pypi/README.md](../../../../sources/googleapis__mcp-toolbox/pypi/README.md)<br>[npm/server-win32-x64/README.md](../../../../sources/googleapis__mcp-toolbox/npm/server-win32-x64/README.md)<br>[npm/server-win32-arm64/README.md](../../../../sources/googleapis__mcp-toolbox/npm/server-win32-arm64/README.md)<br>[npm/server-linux-x64/README.md](../../../../sources/googleapis__mcp-toolbox/npm/server-linux-x64/README.md)<br>[npm/server-darwin-x64/README.md](../../../../sources/googleapis__mcp-toolbox/npm/server-darwin-x64/README.md)<br>[npm/server-darwin-arm64/README.md](../../../../sources/googleapis__mcp-toolbox/npm/server-darwin-arm64/README.md)<br>[npm/server/README.md](../../../../sources/googleapis__mcp-toolbox/npm/server/README.md) |
| config | 28 | [go.mod](../../../../sources/googleapis__mcp-toolbox/go.mod)<br>[pypi/pyproject.toml](../../../../sources/googleapis__mcp-toolbox/pypi/pyproject.toml)<br>[npm/server-win32-x64/package.json](../../../../sources/googleapis__mcp-toolbox/npm/server-win32-x64/package.json)<br>[npm/server-win32-arm64/package.json](../../../../sources/googleapis__mcp-toolbox/npm/server-win32-arm64/package.json)<br>[npm/server-linux-x64/package.json](../../../../sources/googleapis__mcp-toolbox/npm/server-linux-x64/package.json)<br>[npm/server-darwin-x64/package.json](../../../../sources/googleapis__mcp-toolbox/npm/server-darwin-x64/package.json)<br>[npm/server-darwin-arm64/package.json](../../../../sources/googleapis__mcp-toolbox/npm/server-darwin-arm64/package.json)<br>[npm/server/package.json](../../../../sources/googleapis__mcp-toolbox/npm/server/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 482 | [tests/auth.go](../../../../sources/googleapis__mcp-toolbox/tests/auth.go)<br>[tests/common.go](../../../../sources/googleapis__mcp-toolbox/tests/common.go)<br>[tests/embedding.go](../../../../sources/googleapis__mcp-toolbox/tests/embedding.go)<br>[tests/mcp_tool.go](../../../../sources/googleapis__mcp-toolbox/tests/mcp_tool.go)<br>[tests/mcp_types.go](../../../../sources/googleapis__mcp-toolbox/tests/mcp_types.go)<br>[tests/option.go](../../../../sources/googleapis__mcp-toolbox/tests/option.go) |
| CI workflows | 21 | [.github/workflows/cloud_build_failure_reporter.yml](../../../../sources/googleapis__mcp-toolbox/.github/workflows/cloud_build_failure_reporter.yml)<br>[.github/workflows/cloudflare_sync.yaml](../../../../sources/googleapis__mcp-toolbox/.github/workflows/cloudflare_sync.yaml)<br>[.github/workflows/conformance.yml](../../../../sources/googleapis__mcp-toolbox/.github/workflows/conformance.yml)<br>[.github/workflows/deploy_dev_docs_to_cf.yaml](../../../../sources/googleapis__mcp-toolbox/.github/workflows/deploy_dev_docs_to_cf.yaml)<br>[.github/workflows/deploy_previous_version_docs_to_cf.yaml](../../../../sources/googleapis__mcp-toolbox/.github/workflows/deploy_previous_version_docs_to_cf.yaml)<br>[.github/workflows/deploy_versioned_docs_to_cf.yaml](../../../../sources/googleapis__mcp-toolbox/.github/workflows/deploy_versioned_docs_to_cf.yaml) |
| Containers / deploy | 2 | [Dockerfile](../../../../sources/googleapis__mcp-toolbox/Dockerfile)<br>[docs/en/documentation/deploy-to/kubernetes/_index.md](../../../../sources/googleapis__mcp-toolbox/docs/en/documentation/deploy-to/kubernetes/_index.md) |
| Security / policy | 31 | [SECURITY.md](../../../../sources/googleapis__mcp-toolbox/SECURITY.md)<br>[tests/auth.go](../../../../sources/googleapis__mcp-toolbox/tests/auth.go)<br>[tests/auth/auth_integration_test.go](../../../../sources/googleapis__mcp-toolbox/tests/auth/auth_integration_test.go)<br>[internal/sources/cockroachdb/security_test.go](../../../../sources/googleapis__mcp-toolbox/internal/sources/cockroachdb/security_test.go)<br>[internal/server/static/js/auth.js](../../../../sources/googleapis__mcp-toolbox/internal/server/static/js/auth.js)<br>[internal/server/mcp/util/auth_test.go](../../../../sources/googleapis__mcp-toolbox/internal/server/mcp/util/auth_test.go) |
| Agent instructions | 2 | [GEMINI.md](../../../../sources/googleapis__mcp-toolbox/GEMINI.md)<br>[docs/en/documentation/configuration/embedding-models/gemini.md](../../../../sources/googleapis__mcp-toolbox/docs/en/documentation/configuration/embedding-models/gemini.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `MCP-TOOLBOX-EXTENSION.md`, `tests/mcp_tool.go`, `tests/mcp_types.go`.
2. Trace execution through entrypoints: `main.go`, `server.json`, `tests/server.go`.
3. Map agent/tool runtime through: `tests/tool.go`, `tests/conformance/tools.yaml`, `internal/tools/http_method.go`.
4. Inspect retrieval/memory/indexing through: `tests/embedding.go`, `internal/server/static/index.html`, `docs/KNOWLEDGE_CATALOG_README.md`.
5. Verify behavior through test/eval files: `tests/auth.go`, `tests/common.go`, `tests/embedding.go`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 MCP Toolbox for Databases is an open source MCP server for databases.. 핵심 구조 신호는 Go, go.mod, Dockerfile, README.md, LICENSE, mcp이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
