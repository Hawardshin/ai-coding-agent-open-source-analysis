# googleapis/mcp-toolbox 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

MCP Toolbox for Databases is an open source MCP server for databases.

## 요약

- 조사 단위: `sources/googleapis__mcp-toolbox` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,741 files, 703 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=MCP-TOOLBOX-EXTENSION.md, tests/mcp_tool.go, tests/mcp_types.go이고, 의존성 단서는 gemini, mcp, click, cobra, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | googleapis/mcp-toolbox |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 15643 |
| Forks | 1604 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/googleapis__mcp-toolbox](../../../../sources/googleapis__mcp-toolbox) |
| 기존 보고서 | [reports/global-trending/repositories/googleapis__mcp-toolbox.md](../../../global-trending/repositories/googleapis__mcp-toolbox.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1741 / 703 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .ci, .gemini, .github, .hugo, cmd, docs, internal, npm, pypi, tests |
| 상위 확장자 | .go: 845, .md: 599, .yaml: 71, .png: 40, .json: 29, .js: 27, .html: 23, .py: 16, .txt: 16, .yml: 16, .sh: 12, .scss: 9 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 124 |
| tests | validation surface | 55 |
| .github | ci surface | 1 |
| cmd | source boundary | 1 |
| internal | top-level component | 1 |
| npm | top-level component | 1 |
| pypi | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | gemini |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | click, cobra |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 482 | [tests/auth.go](../../../../sources/googleapis__mcp-toolbox/tests/auth.go)<br>[tests/common.go](../../../../sources/googleapis__mcp-toolbox/tests/common.go)<br>[tests/embedding.go](../../../../sources/googleapis__mcp-toolbox/tests/embedding.go)<br>[tests/mcp_tool.go](../../../../sources/googleapis__mcp-toolbox/tests/mcp_tool.go)<br>[tests/mcp_types.go](../../../../sources/googleapis__mcp-toolbox/tests/mcp_types.go)<br>[tests/option.go](../../../../sources/googleapis__mcp-toolbox/tests/option.go) |
| CI workflow | 21 | [.github/workflows/cloud_build_failure_reporter.yml](../../../../sources/googleapis__mcp-toolbox/.github/workflows/cloud_build_failure_reporter.yml)<br>[.github/workflows/cloudflare_sync.yaml](../../../../sources/googleapis__mcp-toolbox/.github/workflows/cloudflare_sync.yaml)<br>[.github/workflows/conformance.yml](../../../../sources/googleapis__mcp-toolbox/.github/workflows/conformance.yml)<br>[.github/workflows/deploy_dev_docs_to_cf.yaml](../../../../sources/googleapis__mcp-toolbox/.github/workflows/deploy_dev_docs_to_cf.yaml)<br>[.github/workflows/deploy_previous_version_docs_to_cf.yaml](../../../../sources/googleapis__mcp-toolbox/.github/workflows/deploy_previous_version_docs_to_cf.yaml)<br>[.github/workflows/deploy_versioned_docs_to_cf.yaml](../../../../sources/googleapis__mcp-toolbox/.github/workflows/deploy_versioned_docs_to_cf.yaml) |
| 컨테이너/배포 | 2 | [Dockerfile](../../../../sources/googleapis__mcp-toolbox/Dockerfile)<br>[docs/en/documentation/deploy-to/kubernetes/_index.md](../../../../sources/googleapis__mcp-toolbox/docs/en/documentation/deploy-to/kubernetes/_index.md) |
| 보안/정책 | 31 | [SECURITY.md](../../../../sources/googleapis__mcp-toolbox/SECURITY.md)<br>[tests/auth.go](../../../../sources/googleapis__mcp-toolbox/tests/auth.go)<br>[tests/auth/auth_integration_test.go](../../../../sources/googleapis__mcp-toolbox/tests/auth/auth_integration_test.go)<br>[internal/sources/cockroachdb/security_test.go](../../../../sources/googleapis__mcp-toolbox/internal/sources/cockroachdb/security_test.go)<br>[internal/server/static/js/auth.js](../../../../sources/googleapis__mcp-toolbox/internal/server/static/js/auth.js)<br>[internal/server/mcp/util/auth_test.go](../../../../sources/googleapis__mcp-toolbox/internal/server/mcp/util/auth_test.go) |
| 에이전트 지시문 | 2 | [GEMINI.md](../../../../sources/googleapis__mcp-toolbox/GEMINI.md)<br>[docs/en/documentation/configuration/embedding-models/gemini.md](../../../../sources/googleapis__mcp-toolbox/docs/en/documentation/configuration/embedding-models/gemini.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `MCP-TOOLBOX-EXTENSION.md`, `tests/mcp_tool.go`, `tests/mcp_types.go`.
2. entrypoint를 따라 실행 흐름 확인: `main.go`, `server.json`, `tests/server.go`.
3. agent/tool runtime 매핑: `tests/tool.go`, `tests/conformance/tools.yaml`, `internal/tools/http_method.go`.
4. retrieval/memory/indexing 확인: `tests/embedding.go`, `internal/server/static/index.html`, `docs/KNOWLEDGE_CATALOG_README.md`.
5. test/eval 파일로 동작 검증: `tests/auth.go`, `tests/common.go`, `tests/embedding.go`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 MCP Toolbox for Databases is an open source MCP server for databases.. 핵심 구조 신호는 Go, go.mod, Dockerfile, README.md, LICENSE, mcp이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
