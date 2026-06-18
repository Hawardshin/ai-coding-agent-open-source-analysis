# shivasurya/code-pathfinder 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Static Code Analysis for security teams with Inter file taint analysis. Built for finding vulnerabilities, advanced structural search, derive insights and supports MCP

## 요약

- 조사 단위: `sources/shivasurya__code-pathfinder` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,870 files, 1,066 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=sast-engine/mcp/analytics_test.go, sast-engine/mcp/analytics.go, sast-engine/mcp/errors_test.go이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | shivasurya/code-pathfinder |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 137 |
| Forks | 16 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/shivasurya__code-pathfinder](../../../../sources/shivasurya__code-pathfinder) |
| 기존 보고서 | [reports/global-trending/repositories/shivasurya__code-pathfinder.md](../../../global-trending/repositories/shivasurya__code-pathfinder.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1870 / 1066 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .github, assets, extension, python-sdk, release, rules, sast-engine, scripts, tools |
| 상위 확장자 | .py: 669, .go: 518, .yaml: 229, (none): 88, .mod: 74, .sum: 71, .ts: 43, .js: 36, .yml: 34, .txt: 31, .md: 19, .json: 15 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 893 | [sast-engine/main_test.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/main_test.go)<br>[sast-engine/updatecheck/check_test.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/updatecheck/check_test.go)<br>[sast-engine/updatecheck/manifest_test.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/updatecheck/manifest_test.go)<br>[sast-engine/updatecheck/reach_test.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/updatecheck/reach_test.go)<br>[sast-engine/updatecheck/select_test.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/updatecheck/select_test.go)<br>[sast-engine/updatecheck/semver_test.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/updatecheck/semver_test.go) |
| CI workflow | 14 | [.github/workflows/build.yml](../../../../sources/shivasurya__code-pathfinder/.github/workflows/build.yml)<br>[.github/workflows/deploy-rules.yml](../../../../sources/shivasurya__code-pathfinder/.github/workflows/deploy-rules.yml)<br>[.github/workflows/deploy-sandbox.yml](../../../../sources/shivasurya__code-pathfinder/.github/workflows/deploy-sandbox.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/shivasurya__code-pathfinder/.github/workflows/docker-publish.yml)<br>[.github/workflows/go-stdlib-r2-upload.yml](../../../../sources/shivasurya__code-pathfinder/.github/workflows/go-stdlib-r2-upload.yml)<br>[.github/workflows/go-thirdparty-r2-upload.yml](../../../../sources/shivasurya__code-pathfinder/.github/workflows/go-thirdparty-r2-upload.yml) |
| 컨테이너/배포 | 109 | [Dockerfile](../../../../sources/shivasurya__code-pathfinder/Dockerfile)<br>[Dockerfile.mcp](../../../../sources/shivasurya__code-pathfinder/Dockerfile.mcp)<br>[sast-engine/testdata/docker-project/docker-compose.yml](../../../../sources/shivasurya__code-pathfinder/sast-engine/testdata/docker-project/docker-compose.yml)<br>[sast-engine/testdata/docker-project/Dockerfile](../../../../sources/shivasurya__code-pathfinder/sast-engine/testdata/docker-project/Dockerfile)<br>[rules/docker-compose/manifest.json](../../../../sources/shivasurya__code-pathfinder/rules/docker-compose/manifest.json)<br>[rules/docker-compose/security/COMPOSE-SEC-009/meta.yaml](../../../../sources/shivasurya__code-pathfinder/rules/docker-compose/security/COMPOSE-SEC-009/meta.yaml) |
| 보안/정책 | 67 | [SECURITY.md](../../../../sources/shivasurya__code-pathfinder/SECURITY.md)<br>[sast-engine/test-fixtures/golang/security_flows/go.mod](../../../../sources/shivasurya__code-pathfinder/sast-engine/test-fixtures/golang/security_flows/go.mod)<br>[sast-engine/test-fixtures/golang/security_flows/service/service.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/test-fixtures/golang/security_flows/service/service.go)<br>[sast-engine/test-fixtures/golang/security_flows/handlers/handler.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/test-fixtures/golang/security_flows/handlers/handler.go)<br>[sast-engine/test-fixtures/golang/module_project/handlers/auth.go](../../../../sources/shivasurya__code-pathfinder/sast-engine/test-fixtures/golang/module_project/handlers/auth.go)<br>[rules/python/flask/PYTHON-FLASK-AUDIT-010/meta.yaml](../../../../sources/shivasurya__code-pathfinder/rules/python/flask/PYTHON-FLASK-AUDIT-010/meta.yaml) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/shivasurya__code-pathfinder/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `sast-engine/mcp/analytics_test.go`, `sast-engine/mcp/analytics.go`, `sast-engine/mcp/errors_test.go`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`, `sast-engine/main.go`, `sast-engine/tools/validate_go_resolution/main.go`.
3. agent/tool runtime 매핑: `tools/process_rules_for_r2.py`, `tools/upload_rules_to_r2.sh`, `sast-engine/tools/generate_go_stdlib_registry.go`.
4. retrieval/memory/indexing 확인: `sast-engine/mcp/docker/graph_test.go`, `sast-engine/mcp/docker/graph.go`, `sast-engine/graph/graph_test.go`.
5. test/eval 파일로 동작 검증: `sast-engine/main_test.go`, `sast-engine/updatecheck/check_test.go`, `sast-engine/updatecheck/manifest_test.go`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Static Code Analysis for security teams with Inter file taint analysis. Built for finding vulnerabilities, advanced stru. 핵심 구조 신호는 Go, Dockerfile, README.md, CLAUDE.md, LICENSE, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
