# oracle/mcp 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Repository containing MCP (Model Context Protocol) servers that provides a suite of tools for managing and interacting with Oracle products.

## 요약

- 조사 단위: `sources/oracle__mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 547 files, 144 directories, depth score 113, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/e2e/features/oci-cloud-guard-mcp-server.feature, tests/e2e/features/oci-compute-instance-agent-mcp-server.feature, tests/e2e/features/oci-compute-mcp-server.feature이고, 의존성 단서는 mcp, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | oracle/mcp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 382 |
| Forks | 120 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/oracle__mcp](../../../../sources/oracle__mcp) |
| 기존 보고서 | [reports/global-trending/repositories/oracle__mcp.md](../../../global-trending/repositories/oracle__mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 547 / 144 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | .github, scripts, src, tests |
| 상위 확장자 | .py: 264, .md: 74, (none): 62, .txt: 38, .toml: 30, .lock: 28, .java: 23, .feature: 17, .json: 3, .yml: 3, .svg: 2, .example: 1 |
| 소스 패턴 | api/server, agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 137 |
| tests | validation surface | 81 |
| .github | ci surface | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 26 | [src/oracle-goldengate-mcp-server/oracle/oracle_goldengate_mcp_server/server.py](../../../../sources/oracle__mcp/src/oracle-goldengate-mcp-server/oracle/oracle_goldengate_mcp_server/server.py)<br>[src/oci-usage-mcp-server/oracle/oci_usage_mcp_server/server.py](../../../../sources/oracle__mcp/src/oci-usage-mcp-server/oracle/oci_usage_mcp_server/server.py)<br>[src/oci-support-mcp-server/oracle/oci_support_mcp_server/server.py](../../../../sources/oracle__mcp/src/oci-support-mcp-server/oracle/oci_support_mcp_server/server.py)<br>[src/oci-resource-search-mcp-server/oracle/oci_resource_search_mcp_server/server.py](../../../../sources/oracle__mcp/src/oci-resource-search-mcp-server/oracle/oci_resource_search_mcp_server/server.py)<br>[src/oci-registry-mcp-server/oracle/oci_registry_mcp_server/server.py](../../../../sources/oracle__mcp/src/oci-registry-mcp-server/oracle/oci_registry_mcp_server/server.py)<br>[src/oci-recovery-mcp-server/oracle/oci_recovery_mcp_server/server.py](../../../../sources/oracle__mcp/src/oci-recovery-mcp-server/oracle/oci_recovery_mcp_server/server.py)<br>[src/oci-opensearch-mcp-server/oracle/oci_opensearch_mcp_server/server.py](../../../../sources/oracle__mcp/src/oci-opensearch-mcp-server/oracle/oci_opensearch_mcp_server/server.py)<br>[src/oci-object-storage-mcp-server/oracle/oci_object_storage_mcp_server/server.py](../../../../sources/oracle__mcp/src/oci-object-storage-mcp-server/oracle/oci_object_storage_mcp_server/server.py) |
| agentRuntime | 10 | [AGENTS.md](../../../../sources/oracle__mcp/AGENTS.md)<br>[src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/DatabaseOperatorTools.java](../../../../sources/oracle__mcp/src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/DatabaseOperatorTools.java)<br>[src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/LogAnalyzerTools.java](../../../../sources/oracle__mcp/src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/LogAnalyzerTools.java)<br>[src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/McpAdminTools.java](../../../../sources/oracle__mcp/src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/McpAdminTools.java)<br>[src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/RagTools.java](../../../../sources/oracle__mcp/src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/RagTools.java)<br>[src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/SqlQueries.java](../../../../sources/oracle__mcp/src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/SqlQueries.java)<br>[src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/ToolSchemas.java](../../../../sources/oracle__mcp/src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/ToolSchemas.java)<br>[src/oci-opensearch-mcp-server/oracle/oci_opensearch_mcp_server/scripts/TOOL_SURFACE_SUMMARY.md](../../../../sources/oracle__mcp/src/oci-opensearch-mcp-server/oracle/oci_opensearch_mcp_server/scripts/TOOL_SURFACE_SUMMARY.md) |
| mcp | 481 | [tests/e2e/features/oci-cloud-guard-mcp-server.feature](../../../../sources/oracle__mcp/tests/e2e/features/oci-cloud-guard-mcp-server.feature)<br>[tests/e2e/features/oci-compute-instance-agent-mcp-server.feature](../../../../sources/oracle__mcp/tests/e2e/features/oci-compute-instance-agent-mcp-server.feature)<br>[tests/e2e/features/oci-compute-mcp-server.feature](../../../../sources/oracle__mcp/tests/e2e/features/oci-compute-mcp-server.feature)<br>[tests/e2e/features/oci-faaas-mcp-server.feature](../../../../sources/oracle__mcp/tests/e2e/features/oci-faaas-mcp-server.feature)<br>[tests/e2e/features/oci-identity-mcp-server.feature](../../../../sources/oracle__mcp/tests/e2e/features/oci-identity-mcp-server.feature)<br>[tests/e2e/features/oci-iot-mcp-server.feature](../../../../sources/oracle__mcp/tests/e2e/features/oci-iot-mcp-server.feature)<br>[tests/e2e/features/oci-load-balancer-mcp-server.feature](../../../../sources/oracle__mcp/tests/e2e/features/oci-load-balancer-mcp-server.feature)<br>[tests/e2e/features/oci-logging-mcp-server.feature](../../../../sources/oracle__mcp/tests/e2e/features/oci-logging-mcp-server.feature) |
| retrieval | 0 | 명확하지 않음 |
| spec | 6 | [requirements-dev.txt](../../../../sources/oracle__mcp/requirements-dev.txt)<br>[requirements.txt](../../../../sources/oracle__mcp/requirements.txt)<br>[src/oracle-db-doc-mcp-server/requirements.txt](../../../../sources/oracle__mcp/src/oracle-db-doc-mcp-server/requirements.txt)<br>[src/oci-full-stack-disaster-recovery-mcp-server/requirements.txt](../../../../sources/oracle__mcp/src/oci-full-stack-disaster-recovery-mcp-server/requirements.txt)<br>[src/mysql-mcp-server/requirements.txt](../../../../sources/oracle__mcp/src/mysql-mcp-server/requirements.txt)<br>[src/dbtools-mcp-server/requirements.txt](../../../../sources/oracle__mcp/src/dbtools-mcp-server/requirements.txt) |
| eval | 152 | [tests/.gitignore](../../../../sources/oracle__mcp/tests/.gitignore)<br>[tests/LICENSE.txt](../../../../sources/oracle__mcp/tests/LICENSE.txt)<br>[tests/pyproject.toml](../../../../sources/oracle__mcp/tests/pyproject.toml)<br>[tests/README.md](../../../../sources/oracle__mcp/tests/README.md)<br>[tests/uv.lock](../../../../sources/oracle__mcp/tests/uv.lock)<br>[tests/e2e/features/.env.template](../../../../sources/oracle__mcp/tests/e2e/features/.env.template)<br>[tests/e2e/features/environment.py](../../../../sources/oracle__mcp/tests/e2e/features/environment.py)<br>[tests/e2e/features/general-prompts.feature](../../../../sources/oracle__mcp/tests/e2e/features/general-prompts.feature) |
| security | 25 | [SECURITY.md](../../../../sources/oracle__mcp/SECURITY.md)<br>[tests/e2e/features/oci-cloud-guard-mcp-server.feature](../../../../sources/oracle__mcp/tests/e2e/features/oci-cloud-guard-mcp-server.feature)<br>[tests/e2e/features/steps/oci-cloud-guard-mcp-server-steps.py](../../../../sources/oracle__mcp/tests/e2e/features/steps/oci-cloud-guard-mcp-server-steps.py)<br>[tests/e2e/features/mocks/services/cloud_guard_data.py](../../../../sources/oracle__mcp/tests/e2e/features/mocks/services/cloud_guard_data.py)<br>[tests/e2e/features/mocks/services/cloud_guard_routes.py](../../../../sources/oracle__mcp/tests/e2e/features/mocks/services/cloud_guard_routes.py)<br>[src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/oauth/OAuth2Configuration.java](../../../../sources/oracle__mcp/src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/oauth/OAuth2Configuration.java)<br>[src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/oauth/OAuth2TokenValidator.java](../../../../sources/oracle__mcp/src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/oauth/OAuth2TokenValidator.java)<br>[src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/oauth/TokenGenerator.java](../../../../sources/oracle__mcp/src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/oauth/TokenGenerator.java) |
| ci | 3 | [.github/workflows/build-doc-mcp.yml](../../../../sources/oracle__mcp/.github/workflows/build-doc-mcp.yml)<br>[.github/workflows/build.yml](../../../../sources/oracle__mcp/.github/workflows/build.yml)<br>[.github/workflows/lint.yml](../../../../sources/oracle__mcp/.github/workflows/lint.yml) |
| container | 3 | [src/oracle-db-mcp-java-toolkit/Dockerfile](../../../../sources/oracle__mcp/src/oracle-db-mcp-java-toolkit/Dockerfile)<br>[src/oracle-db-doc-mcp-server/Dockerfile](../../../../sources/oracle__mcp/src/oracle-db-doc-mcp-server/Dockerfile)<br>[src/oci-pricing-mcp-server/Dockerfile](../../../../sources/oracle__mcp/src/oci-pricing-mcp-server/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/oracle__mcp/AGENTS.md) |
| docs | 35 | [README.md](../../../../sources/oracle__mcp/README.md)<br>[tests/README.md](../../../../sources/oracle__mcp/tests/README.md)<br>[src/oracle-goldengate-mcp-server/README.md](../../../../sources/oracle__mcp/src/oracle-goldengate-mcp-server/README.md)<br>[src/oracle-goldengate-mcp-server/docs/createExtract.md](../../../../sources/oracle__mcp/src/oracle-goldengate-mcp-server/docs/createExtract.md)<br>[src/oracle-goldengate-mcp-server/docs/createReplicat.md](../../../../sources/oracle__mcp/src/oracle-goldengate-mcp-server/docs/createReplicat.md)<br>[src/oracle-db-mcp-java-toolkit/README.md](../../../../sources/oracle__mcp/src/oracle-db-mcp-java-toolkit/README.md)<br>[src/oracle-db-doc-mcp-server/README.md](../../../../sources/oracle__mcp/src/oracle-db-doc-mcp-server/README.md)<br>[src/oci-usage-mcp-server/README.md](../../../../sources/oracle__mcp/src/oci-usage-mcp-server/README.md) |
| config | 64 | [Makefile](../../../../sources/oracle__mcp/Makefile)<br>[requirements-dev.txt](../../../../sources/oracle__mcp/requirements-dev.txt)<br>[requirements.txt](../../../../sources/oracle__mcp/requirements.txt)<br>[tests/pyproject.toml](../../../../sources/oracle__mcp/tests/pyproject.toml)<br>[tests/uv.lock](../../../../sources/oracle__mcp/tests/uv.lock)<br>[src/oracle-goldengate-mcp-server/pyproject.toml](../../../../sources/oracle__mcp/src/oracle-goldengate-mcp-server/pyproject.toml)<br>[src/oracle-goldengate-mcp-server/uv.lock](../../../../sources/oracle__mcp/src/oracle-goldengate-mcp-server/uv.lock)<br>[src/oracle-db-doc-mcp-server/pyproject.toml](../../../../sources/oracle__mcp/src/oracle-db-doc-mcp-server/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 152 | [tests/.gitignore](../../../../sources/oracle__mcp/tests/.gitignore)<br>[tests/LICENSE.txt](../../../../sources/oracle__mcp/tests/LICENSE.txt)<br>[tests/pyproject.toml](../../../../sources/oracle__mcp/tests/pyproject.toml)<br>[tests/README.md](../../../../sources/oracle__mcp/tests/README.md)<br>[tests/uv.lock](../../../../sources/oracle__mcp/tests/uv.lock)<br>[tests/e2e/features/.env.template](../../../../sources/oracle__mcp/tests/e2e/features/.env.template) |
| CI workflow | 3 | [.github/workflows/build-doc-mcp.yml](../../../../sources/oracle__mcp/.github/workflows/build-doc-mcp.yml)<br>[.github/workflows/build.yml](../../../../sources/oracle__mcp/.github/workflows/build.yml)<br>[.github/workflows/lint.yml](../../../../sources/oracle__mcp/.github/workflows/lint.yml) |
| 컨테이너/배포 | 3 | [src/oracle-db-mcp-java-toolkit/Dockerfile](../../../../sources/oracle__mcp/src/oracle-db-mcp-java-toolkit/Dockerfile)<br>[src/oracle-db-doc-mcp-server/Dockerfile](../../../../sources/oracle__mcp/src/oracle-db-doc-mcp-server/Dockerfile)<br>[src/oci-pricing-mcp-server/Dockerfile](../../../../sources/oracle__mcp/src/oci-pricing-mcp-server/Dockerfile) |
| 보안/정책 | 25 | [SECURITY.md](../../../../sources/oracle__mcp/SECURITY.md)<br>[tests/e2e/features/oci-cloud-guard-mcp-server.feature](../../../../sources/oracle__mcp/tests/e2e/features/oci-cloud-guard-mcp-server.feature)<br>[tests/e2e/features/steps/oci-cloud-guard-mcp-server-steps.py](../../../../sources/oracle__mcp/tests/e2e/features/steps/oci-cloud-guard-mcp-server-steps.py)<br>[tests/e2e/features/mocks/services/cloud_guard_data.py](../../../../sources/oracle__mcp/tests/e2e/features/mocks/services/cloud_guard_data.py)<br>[tests/e2e/features/mocks/services/cloud_guard_routes.py](../../../../sources/oracle__mcp/tests/e2e/features/mocks/services/cloud_guard_routes.py)<br>[src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/oauth/OAuth2Configuration.java](../../../../sources/oracle__mcp/src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/oauth/OAuth2Configuration.java) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/oracle__mcp/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/e2e/features/oci-cloud-guard-mcp-server.feature`, `tests/e2e/features/oci-compute-instance-agent-mcp-server.feature`, `tests/e2e/features/oci-compute-mcp-server.feature`.
2. entrypoint를 따라 실행 흐름 확인: `src/oracle-goldengate-mcp-server/oracle/oracle_goldengate_mcp_server/server.py`, `src/oci-usage-mcp-server/oracle/oci_usage_mcp_server/server.py`, `src/oci-support-mcp-server/oracle/oci_support_mcp_server/server.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/DatabaseOperatorTools.java`, `src/oracle-db-mcp-java-toolkit/src/main/java/com/oracle/database/mcptoolkit/tools/LogAnalyzerTools.java`.
4. test/eval 파일로 동작 검증: `tests/.gitignore`, `tests/LICENSE.txt`, `tests/pyproject.toml`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Repository containing MCP Model Context Protocol servers that provides a suite of tools for managing and interacting wit. 핵심 구조 신호는 Python, requirements.txt, Makefile, README.md, AGENTS.md, mcp이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
