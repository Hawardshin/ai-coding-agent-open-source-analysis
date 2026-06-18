# shivasurya/code-pathfinder Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Static Code Analysis for security teams with Inter file taint analysis. Built for finding vulnerabilities, advanced structural search, derive insights and supports MCP

## 요약

- 조사 단위: `sources/shivasurya__code-pathfinder` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,870 files, 1,066 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=sast-engine/mcp/analytics_test.go, sast-engine/mcp/analytics.go, sast-engine/mcp/errors_test.go이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | shivasurya/code-pathfinder |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 137 |
| Forks | 16 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/shivasurya__code-pathfinder](../../../../sources/shivasurya__code-pathfinder) |
| Existing report | [reports/global-trending/repositories/shivasurya__code-pathfinder.md](../../../global-trending/repositories/shivasurya__code-pathfinder.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1870 / 1066 |
| Max observed depth | 9 |
| Top directories | .github, assets, extension, python-sdk, release, rules, sast-engine, scripts, tools |
| Top extensions | .py: 669, .go: 518, .yaml: 229, (none): 88, .mod: 74, .sum: 71, .ts: 43, .js: 36, .yml: 34, .txt: 31, .md: 19, .json: 15 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| extension | top-level component | 1 |
| python-sdk | top-level component | 1 |
| release | top-level component | 1 |
| rules | top-level component | 1 |
| sast-engine | top-level component | 1 |
| scripts | top-level component | 1 |
| tools | top-level component | 1 |


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
| mcp | [sast-engine/mcp/analytics_test.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/mcp/analytics_test.go) | mcp signal |
| mcp | [sast-engine/mcp/analytics.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/mcp/analytics.go) | mcp signal |
| mcp | [sast-engine/mcp/errors_test.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/mcp/errors_test.go) | mcp signal |
| mcp | [sast-engine/mcp/errors.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/mcp/errors.go) | mcp signal |
| agentRuntime | [tools/process_rules_for_r2.py](../../../../sources/shivasurya__code-pathfinder/tools/process_rules_for_r2.py) | agentRuntime signal |
| agentRuntime | [tools/upload_rules_to_r2.sh](../../../../sources/shivasurya__code-pathfinder/tools/upload_rules_to_r2.sh) | agentRuntime signal |
| agentRuntime | [sast-engine/tools/generate_go_stdlib_registry.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/tools/generate_go_stdlib_registry.go) | agentRuntime signal |
| agentRuntime | [sast-engine/tools/generate_go_thirdparty_registry_test.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/tools/generate_go_thirdparty_registry_test.go) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/shivasurya__code-pathfinder/server.json) | entrypoints signal |
| entrypoints | [sast-engine/main.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/main.go) | entrypoints signal |
| entrypoints | [sast-engine/tools/validate_go_resolution/main.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/tools/validate_go_resolution/main.go) | entrypoints signal |
| entrypoints | [sast-engine/test-fixtures/python/simple_project/main.py](../../../../sources/shivasurya__code-pathfinder/sast-engine/test-fixtures/python/simple_project/main.py) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 11 | [server.json](../../../../sources/shivasurya__code-pathfinder/server.json)<br>[sast-engine/main.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/main.go)<br>[sast-engine/tools/validate_go_resolution/main.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/tools/validate_go_resolution/main.go)<br>[sast-engine/test-fixtures/python/simple_project/main.py](../../../../sources/shivasurya__code-pathfinder/sast-engine/test-fixtures/python/simple_project/main.py)<br>[sast-engine/test-fixtures/golang/simple_project/main.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/test-fixtures/golang/simple_project/main.go)<br>[sast-engine/test-fixtures/golang/module_project/main.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/test-fixtures/golang/module_project/main.go)<br>[sast-engine/test-fixtures/golang/module_project/models/server.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/test-fixtures/golang/module_project/models/server.go)<br>[sast-engine/test-fixtures/golang/callgraph_project/main.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/test-fixtures/golang/callgraph_project/main.go) |
| agentRuntime | 39 | [tools/process_rules_for_r2.py](../../../../sources/shivasurya__code-pathfinder/tools/process_rules_for_r2.py)<br>[tools/upload_rules_to_r2.sh](../../../../sources/shivasurya__code-pathfinder/tools/upload_rules_to_r2.sh)<br>[sast-engine/tools/generate_go_stdlib_registry.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/tools/generate_go_stdlib_registry.go)<br>[sast-engine/tools/generate_go_thirdparty_registry_test.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/tools/generate_go_thirdparty_registry_test.go)<br>[sast-engine/tools/generate_go_thirdparty_registry.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/tools/generate_go_thirdparty_registry.go)<br>[sast-engine/tools/generate_stdlib_registry.py](../../../../sources/shivasurya__code-pathfinder/sast-engine/tools/generate_stdlib_registry.py)<br>[sast-engine/tools/test_generation_local.sh](../../../../sources/shivasurya__code-pathfinder/sast-engine/tools/test_generation_local.sh)<br>[sast-engine/tools/test_generator.py](../../../../sources/shivasurya__code-pathfinder/sast-engine/tools/test_generator.py) |
| mcp | 33 | [sast-engine/mcp/analytics_test.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/mcp/analytics_test.go)<br>[sast-engine/mcp/analytics.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/mcp/analytics.go)<br>[sast-engine/mcp/errors_test.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/mcp/errors_test.go)<br>[sast-engine/mcp/errors.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/mcp/errors.go)<br>[sast-engine/mcp/http_test.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/mcp/http_test.go)<br>[sast-engine/mcp/http.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/mcp/http.go)<br>[sast-engine/mcp/instance_tools_test.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/mcp/instance_tools_test.go)<br>[sast-engine/mcp/instance_tools.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/mcp/instance_tools.go) |
| retrieval | 266 | [sast-engine/mcp/docker/graph_test.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/mcp/docker/graph_test.go)<br>[sast-engine/mcp/docker/graph.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/mcp/docker/graph.go)<br>[sast-engine/graph/graph_test.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/graph/graph_test.go)<br>[sast-engine/graph/graph.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/graph/graph.go)<br>[sast-engine/graph/initialize_test.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/graph/initialize_test.go)<br>[sast-engine/graph/initialize.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/graph/initialize.go)<br>[sast-engine/graph/parser_c_test.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/graph/parser_c_test.go)<br>[sast-engine/graph/parser_c.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/graph/parser_c.go) |
| spec | 1 | [sast-engine/tools/typeshed-converter/requirements.txt](../../../../sources/shivasurya__code-pathfinder/sast-engine/tools/typeshed-converter/requirements.txt) |
| eval | 893 | [sast-engine/main_test.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/main_test.go)<br>[sast-engine/updatecheck/check_test.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/updatecheck/check_test.go)<br>[sast-engine/updatecheck/manifest_test.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/updatecheck/manifest_test.go)<br>[sast-engine/updatecheck/reach_test.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/updatecheck/reach_test.go)<br>[sast-engine/updatecheck/select_test.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/updatecheck/select_test.go)<br>[sast-engine/updatecheck/semver_test.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/updatecheck/semver_test.go)<br>[sast-engine/tools/generate_go_thirdparty_registry_test.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/tools/generate_go_thirdparty_registry_test.go)<br>[sast-engine/tools/test_generation_local.sh](../../../../sources/shivasurya__code-pathfinder/sast-engine/tools/test_generation_local.sh) |
| security | 67 | [SECURITY.md](../../../../sources/shivasurya__code-pathfinder/SECURITY.md)<br>[sast-engine/test-fixtures/golang/security_flows/go.mod](../../../../sources/shivasurya__code-pathfinder/sast-engine/test-fixtures/golang/security_flows/go.mod)<br>[sast-engine/test-fixtures/golang/security_flows/service/service.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/test-fixtures/golang/security_flows/service/service.go)<br>[sast-engine/test-fixtures/golang/security_flows/handlers/handler.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/test-fixtures/golang/security_flows/handlers/handler.go)<br>[sast-engine/test-fixtures/golang/module_project/handlers/auth.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/test-fixtures/golang/module_project/handlers/auth.go)<br>[rules/python/flask/PYTHON-FLASK-AUDIT-010/meta.yaml](../../../../sources/shivasurya__code-pathfinder/rules/python/flask/PYTHON-FLASK-AUDIT-010/meta.yaml)<br>[rules/python/flask/PYTHON-FLASK-AUDIT-010/rule.py](../../../../sources/shivasurya__code-pathfinder/rules/python/flask/PYTHON-FLASK-AUDIT-010/rule.py)<br>[rules/python/flask/PYTHON-FLASK-AUDIT-010/tests/positive/vulnerable.py](../../../../sources/shivasurya__code-pathfinder/rules/python/flask/PYTHON-FLASK-AUDIT-010/tests/positive/vulnerable.py) |
| ci | 14 | [.github/workflows/build.yml](../../../../sources/shivasurya__code-pathfinder/.github/workflows/build.yml)<br>[.github/workflows/deploy-rules.yml](../../../../sources/shivasurya__code-pathfinder/.github/workflows/deploy-rules.yml)<br>[.github/workflows/deploy-sandbox.yml](../../../../sources/shivasurya__code-pathfinder/.github/workflows/deploy-sandbox.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/shivasurya__code-pathfinder/.github/workflows/docker-publish.yml)<br>[.github/workflows/go-stdlib-r2-upload.yml](../../../../sources/shivasurya__code-pathfinder/.github/workflows/go-stdlib-r2-upload.yml)<br>[.github/workflows/go-thirdparty-r2-upload.yml](../../../../sources/shivasurya__code-pathfinder/.github/workflows/go-thirdparty-r2-upload.yml)<br>[.github/workflows/homebrew-update.yml](../../../../sources/shivasurya__code-pathfinder/.github/workflows/homebrew-update.yml)<br>[.github/workflows/publish-manifest.yml](../../../../sources/shivasurya__code-pathfinder/.github/workflows/publish-manifest.yml) |
| container | 109 | [Dockerfile](../../../../sources/shivasurya__code-pathfinder/Dockerfile)<br>[Dockerfile.mcp](../../../../sources/shivasurya__code-pathfinder/Dockerfile.mcp)<br>[sast-engine/testdata/docker-project/docker-compose.yml](../../../../sources/shivasurya__code-pathfinder/sast-engine/testdata/docker-project/docker-compose.yml)<br>[sast-engine/testdata/docker-project/Dockerfile](../../../../sources/shivasurya__code-pathfinder/sast-engine/testdata/docker-project/Dockerfile)<br>[rules/docker-compose/manifest.json](../../../../sources/shivasurya__code-pathfinder/rules/docker-compose/manifest.json)<br>[rules/docker-compose/security/COMPOSE-SEC-009/meta.yaml](../../../../sources/shivasurya__code-pathfinder/rules/docker-compose/security/COMPOSE-SEC-009/meta.yaml)<br>[rules/docker-compose/security/COMPOSE-SEC-009/rule.py](../../../../sources/shivasurya__code-pathfinder/rules/docker-compose/security/COMPOSE-SEC-009/rule.py)<br>[rules/docker-compose/security/COMPOSE-SEC-009/tests/positive/docker-compose.yml](../../../../sources/shivasurya__code-pathfinder/rules/docker-compose/security/COMPOSE-SEC-009/tests/positive/docker-compose.yml) |
| instruction | 1 | [CLAUDE.md](../../../../sources/shivasurya__code-pathfinder/CLAUDE.md) |
| docs | 5 | [README.md](../../../../sources/shivasurya__code-pathfinder/README.md)<br>[python-sdk/README.md](../../../../sources/shivasurya__code-pathfinder/python-sdk/README.md)<br>[extension/secureflow/README.md](../../../../sources/shivasurya__code-pathfinder/extension/secureflow/README.md)<br>[extension/secureflow/packages/secureflow-cli/README.md](../../../../sources/shivasurya__code-pathfinder/extension/secureflow/packages/secureflow-cli/README.md)<br>[extension/secureflow/docs/ANALYTICS.md](../../../../sources/shivasurya__code-pathfinder/extension/secureflow/docs/ANALYTICS.md) |
| config | 80 | [sast-engine/go.mod](../../../../sources/shivasurya__code-pathfinder/sast-engine/go.mod)<br>[sast-engine/tools/validate_go_resolution/go.mod](../../../../sources/shivasurya__code-pathfinder/sast-engine/tools/validate_go_resolution/go.mod)<br>[sast-engine/tools/typeshed-converter/requirements.txt](../../../../sources/shivasurya__code-pathfinder/sast-engine/tools/typeshed-converter/requirements.txt)<br>[sast-engine/test-fixtures/golang/type_tracking/go.mod](../../../../sources/shivasurya__code-pathfinder/sast-engine/test-fixtures/golang/type_tracking/go.mod)<br>[sast-engine/test-fixtures/golang/simple_project/go.mod](../../../../sources/shivasurya__code-pathfinder/sast-engine/test-fixtures/golang/simple_project/go.mod)<br>[sast-engine/test-fixtures/golang/security_flows/go.mod](../../../../sources/shivasurya__code-pathfinder/sast-engine/test-fixtures/golang/security_flows/go.mod)<br>[sast-engine/test-fixtures/golang/module_project/go.mod](../../../../sources/shivasurya__code-pathfinder/sast-engine/test-fixtures/golang/module_project/go.mod)<br>[sast-engine/test-fixtures/golang/callgraph_project/go.mod](../../../../sources/shivasurya__code-pathfinder/sast-engine/test-fixtures/golang/callgraph_project/go.mod) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 893 | [sast-engine/main_test.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/main_test.go)<br>[sast-engine/updatecheck/check_test.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/updatecheck/check_test.go)<br>[sast-engine/updatecheck/manifest_test.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/updatecheck/manifest_test.go)<br>[sast-engine/updatecheck/reach_test.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/updatecheck/reach_test.go)<br>[sast-engine/updatecheck/select_test.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/updatecheck/select_test.go)<br>[sast-engine/updatecheck/semver_test.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/updatecheck/semver_test.go) |
| CI workflows | 14 | [.github/workflows/build.yml](../../../../sources/shivasurya__code-pathfinder/.github/workflows/build.yml)<br>[.github/workflows/deploy-rules.yml](../../../../sources/shivasurya__code-pathfinder/.github/workflows/deploy-rules.yml)<br>[.github/workflows/deploy-sandbox.yml](../../../../sources/shivasurya__code-pathfinder/.github/workflows/deploy-sandbox.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/shivasurya__code-pathfinder/.github/workflows/docker-publish.yml)<br>[.github/workflows/go-stdlib-r2-upload.yml](../../../../sources/shivasurya__code-pathfinder/.github/workflows/go-stdlib-r2-upload.yml)<br>[.github/workflows/go-thirdparty-r2-upload.yml](../../../../sources/shivasurya__code-pathfinder/.github/workflows/go-thirdparty-r2-upload.yml) |
| Containers / deploy | 109 | [Dockerfile](../../../../sources/shivasurya__code-pathfinder/Dockerfile)<br>[Dockerfile.mcp](../../../../sources/shivasurya__code-pathfinder/Dockerfile.mcp)<br>[sast-engine/testdata/docker-project/docker-compose.yml](../../../../sources/shivasurya__code-pathfinder/sast-engine/testdata/docker-project/docker-compose.yml)<br>[sast-engine/testdata/docker-project/Dockerfile](../../../../sources/shivasurya__code-pathfinder/sast-engine/testdata/docker-project/Dockerfile)<br>[rules/docker-compose/manifest.json](../../../../sources/shivasurya__code-pathfinder/rules/docker-compose/manifest.json)<br>[rules/docker-compose/security/COMPOSE-SEC-009/meta.yaml](../../../../sources/shivasurya__code-pathfinder/rules/docker-compose/security/COMPOSE-SEC-009/meta.yaml) |
| Security / policy | 67 | [SECURITY.md](../../../../sources/shivasurya__code-pathfinder/SECURITY.md)<br>[sast-engine/test-fixtures/golang/security_flows/go.mod](../../../../sources/shivasurya__code-pathfinder/sast-engine/test-fixtures/golang/security_flows/go.mod)<br>[sast-engine/test-fixtures/golang/security_flows/service/service.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/test-fixtures/golang/security_flows/service/service.go)<br>[sast-engine/test-fixtures/golang/security_flows/handlers/handler.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/test-fixtures/golang/security_flows/handlers/handler.go)<br>[sast-engine/test-fixtures/golang/module_project/handlers/auth.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/test-fixtures/golang/module_project/handlers/auth.go)<br>[rules/python/flask/PYTHON-FLASK-AUDIT-010/meta.yaml](../../../../sources/shivasurya__code-pathfinder/rules/python/flask/PYTHON-FLASK-AUDIT-010/meta.yaml) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/shivasurya__code-pathfinder/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `sast-engine/mcp/analytics_test.go`, `sast-engine/mcp/analytics.go`, `sast-engine/mcp/errors_test.go`.
2. Trace execution through entrypoints: `server.json`, `sast-engine/main.go`, `sast-engine/tools/validate_go_resolution/main.go`.
3. Map agent/tool runtime through: `tools/process_rules_for_r2.py`, `tools/upload_rules_to_r2.sh`, `sast-engine/tools/generate_go_stdlib_registry.go`.
4. Inspect retrieval/memory/indexing through: `sast-engine/mcp/docker/graph_test.go`, `sast-engine/mcp/docker/graph.go`, `sast-engine/graph/graph_test.go`.
5. Verify behavior through test/eval files: `sast-engine/main_test.go`, `sast-engine/updatecheck/check_test.go`, `sast-engine/updatecheck/manifest_test.go`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Static Code Analysis for security teams with Inter file taint analysis. Built for finding vulnerabilities, advanced stru. 핵심 구조 신호는 Go, Dockerfile, README.md, CLAUDE.md, LICENSE, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
