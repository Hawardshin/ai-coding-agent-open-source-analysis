# awslabs/mcp 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Open source MCP Servers for AWS

## 요약

- 조사 단위: `sources/awslabs__mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 3,547 files, 620 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/well-architected-security-mcp-server/awslabs/well_architected_security_mcp_server/server.py, src/valkey-mcp-server/awslabs/valkey_mcp_server/main.py, src/valkey-mcp-server/awslabs/valkey_mcp_server/common/server.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | awslabs/mcp |
| 주제 | 개발 생산성/DevTools / 개발 생산성/DevTools |
| Region | global |
| Language | Python |
| Stars | 9289 |
| Forks | 1584 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/awslabs__mcp](../../../../sources/awslabs__mcp) |
| 기존 보고서 | [reports/global-trending/repositories/awslabs__mcp.md](../../../global-trending/repositories/awslabs__mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 3547 / 620 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .devcontainer, .github, .vex, docs, docusaurus, samples, scripts, src, testing |
| 상위 확장자 | .py: 2340, .md: 419, (none): 289, .json: 99, .sh: 90, .toml: 73, .txt: 70, .lock: 60, .yml: 33, .svg: 12, .png: 11, .j2: 10 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 396 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| docs | documentation surface | 1 |
| docusaurus | documentation surface | 1 |
| samples | top-level component | 1 |
| scripts | top-level component | 1 |
| testing | validation surface | 1 |


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
| entrypoints | [src/well-architected-security-mcp-server/awslabs/well_architected_security_mcp_server/server.py](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/awslabs/well_architected_security_mcp_server/server.py) | entrypoints signal |
| entrypoints | [src/valkey-mcp-server/awslabs/valkey_mcp_server/main.py](../../../../sources/awslabs__mcp/src/valkey-mcp-server/awslabs/valkey_mcp_server/main.py) | entrypoints signal |
| entrypoints | [src/valkey-mcp-server/awslabs/valkey_mcp_server/common/server.py](../../../../sources/awslabs__mcp/src/valkey-mcp-server/awslabs/valkey_mcp_server/common/server.py) | entrypoints signal |
| entrypoints | [src/timestream-for-influxdb-mcp-server/awslabs/timestream_for_influxdb_mcp_server/server.py](../../../../sources/awslabs__mcp/src/timestream-for-influxdb-mcp-server/awslabs/timestream_for_influxdb_mcp_server/server.py) | entrypoints signal |
| config | [src/well-architected-security-mcp-server/pyproject.toml](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/pyproject.toml) | config signal |
| config | [src/well-architected-security-mcp-server/uv.lock](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/uv.lock) | config signal |
| config | [src/valkey-mcp-server/pyproject.toml](../../../../sources/awslabs__mcp/src/valkey-mcp-server/pyproject.toml) | config signal |
| config | [src/valkey-mcp-server/uv.lock](../../../../sources/awslabs__mcp/src/valkey-mcp-server/uv.lock) | config signal |
| ci | [.github/workflows/aws-api-mcp-upgrade-version.yml](../../../../sources/awslabs__mcp/.github/workflows/aws-api-mcp-upgrade-version.yml) | ci signal |
| ci | [.github/workflows/bandit-requirements.txt](../../../../sources/awslabs__mcp/.github/workflows/bandit-requirements.txt) | ci signal |
| ci | [.github/workflows/bandit.yml](../../../../sources/awslabs__mcp/.github/workflows/bandit.yml) | ci signal |
| ci | [.github/workflows/cfn_nag.yml](../../../../sources/awslabs__mcp/.github/workflows/cfn_nag.yml) | ci signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 65 | [src/well-architected-security-mcp-server/awslabs/well_architected_security_mcp_server/server.py](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/awslabs/well_architected_security_mcp_server/server.py)<br>[src/valkey-mcp-server/awslabs/valkey_mcp_server/main.py](../../../../sources/awslabs__mcp/src/valkey-mcp-server/awslabs/valkey_mcp_server/main.py)<br>[src/valkey-mcp-server/awslabs/valkey_mcp_server/common/server.py](../../../../sources/awslabs__mcp/src/valkey-mcp-server/awslabs/valkey_mcp_server/common/server.py)<br>[src/timestream-for-influxdb-mcp-server/awslabs/timestream_for_influxdb_mcp_server/server.py](../../../../sources/awslabs__mcp/src/timestream-for-influxdb-mcp-server/awslabs/timestream_for_influxdb_mcp_server/server.py)<br>[src/stepfunctions-tool-mcp-server/awslabs/stepfunctions_tool_mcp_server/server.py](../../../../sources/awslabs__mcp/src/stepfunctions-tool-mcp-server/awslabs/stepfunctions_tool_mcp_server/server.py)<br>[src/security-agent-mcp-server/awslabs/security_agent_mcp_server/server.py](../../../../sources/awslabs__mcp/src/security-agent-mcp-server/awslabs/security_agent_mcp_server/server.py)<br>[src/sagemaker-ai-mcp-server/awslabs/sagemaker_ai_mcp_server/server.py](../../../../sources/awslabs__mcp/src/sagemaker-ai-mcp-server/awslabs/sagemaker_ai_mcp_server/server.py)<br>[src/s3-tables-mcp-server/awslabs/s3_tables_mcp_server/server.py](../../../../sources/awslabs__mcp/src/s3-tables-mcp-server/awslabs/s3_tables_mcp_server/server.py) |
| agentRuntime | 533 | [src/valkey-mcp-server/awslabs/valkey_mcp_server/context.py](../../../../sources/awslabs__mcp/src/valkey-mcp-server/awslabs/valkey_mcp_server/context.py)<br>[src/valkey-mcp-server/awslabs/valkey_mcp_server/tools/__init__.py](../../../../sources/awslabs__mcp/src/valkey-mcp-server/awslabs/valkey_mcp_server/tools/__init__.py)<br>[src/valkey-mcp-server/awslabs/valkey_mcp_server/tools/bitmap.py](../../../../sources/awslabs__mcp/src/valkey-mcp-server/awslabs/valkey_mcp_server/tools/bitmap.py)<br>[src/valkey-mcp-server/awslabs/valkey_mcp_server/tools/hash.py](../../../../sources/awslabs__mcp/src/valkey-mcp-server/awslabs/valkey_mcp_server/tools/hash.py)<br>[src/valkey-mcp-server/awslabs/valkey_mcp_server/tools/hyperloglog.py](../../../../sources/awslabs__mcp/src/valkey-mcp-server/awslabs/valkey_mcp_server/tools/hyperloglog.py)<br>[src/valkey-mcp-server/awslabs/valkey_mcp_server/tools/json.py](../../../../sources/awslabs__mcp/src/valkey-mcp-server/awslabs/valkey_mcp_server/tools/json.py)<br>[src/valkey-mcp-server/awslabs/valkey_mcp_server/tools/list.py](../../../../sources/awslabs__mcp/src/valkey-mcp-server/awslabs/valkey_mcp_server/tools/list.py)<br>[src/valkey-mcp-server/awslabs/valkey_mcp_server/tools/misc.py](../../../../sources/awslabs__mcp/src/valkey-mcp-server/awslabs/valkey_mcp_server/tools/misc.py) |
| mcp | 3430 | [testing/mcp_test_client.py](../../../../sources/awslabs__mcp/testing/mcp_test_client.py)<br>[testing/mcp_test_runner.py](../../../../sources/awslabs__mcp/testing/mcp_test_runner.py)<br>[src/well-architected-security-mcp-server/.python-version](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/.python-version)<br>[src/well-architected-security-mcp-server/PROMPT_TEMPLATE.md](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/PROMPT_TEMPLATE.md)<br>[src/well-architected-security-mcp-server/pyproject.toml](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/pyproject.toml)<br>[src/well-architected-security-mcp-server/README.md](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/README.md)<br>[src/well-architected-security-mcp-server/uv.lock](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/uv.lock)<br>[src/well-architected-security-mcp-server/tests/__init__.py](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/tests/__init__.py) |
| retrieval | 111 | [src/ecs-mcp-server/tests/unit/modules/test_aws_knowledge_proxy.py](../../../../sources/awslabs__mcp/src/ecs-mcp-server/tests/unit/modules/test_aws_knowledge_proxy.py)<br>[src/ecs-mcp-server/tests/integ/mcp-inspector/scenarios/02_test_knowledge_proxy_tools/01_create.sh](../../../../sources/awslabs__mcp/src/ecs-mcp-server/tests/integ/mcp-inspector/scenarios/02_test_knowledge_proxy_tools/01_create.sh)<br>[src/ecs-mcp-server/tests/integ/mcp-inspector/scenarios/02_test_knowledge_proxy_tools/02_validate.sh](../../../../sources/awslabs__mcp/src/ecs-mcp-server/tests/integ/mcp-inspector/scenarios/02_test_knowledge_proxy_tools/02_validate.sh)<br>[src/ecs-mcp-server/tests/integ/mcp-inspector/scenarios/02_test_knowledge_proxy_tools/03_cleanup.sh](../../../../sources/awslabs__mcp/src/ecs-mcp-server/tests/integ/mcp-inspector/scenarios/02_test_knowledge_proxy_tools/03_cleanup.sh)<br>[src/ecs-mcp-server/tests/integ/mcp-inspector/scenarios/02_test_knowledge_proxy_tools/description.txt](../../../../sources/awslabs__mcp/src/ecs-mcp-server/tests/integ/mcp-inspector/scenarios/02_test_knowledge_proxy_tools/description.txt)<br>[src/ecs-mcp-server/tests/integ/mcp-inspector/scenarios/02_test_knowledge_proxy_tools/utils/knowledge_validation_helpers.sh](../../../../sources/awslabs__mcp/src/ecs-mcp-server/tests/integ/mcp-inspector/scenarios/02_test_knowledge_proxy_tools/utils/knowledge_validation_helpers.sh)<br>[src/ecs-mcp-server/tests/integ/mcp-inspector/scenarios/02_test_knowledge_proxy_tools/utils/mcp_knowledge_helpers.sh](../../../../sources/awslabs__mcp/src/ecs-mcp-server/tests/integ/mcp-inspector/scenarios/02_test_knowledge_proxy_tools/utils/mcp_knowledge_helpers.sh)<br>[src/ecs-mcp-server/awslabs/ecs_mcp_server/modules/aws_knowledge_proxy.py](../../../../sources/awslabs__mcp/src/ecs-mcp-server/awslabs/ecs_mcp_server/modules/aws_knowledge_proxy.py) |
| spec | 55 | [DESIGN_GUIDELINES.md](../../../../sources/awslabs__mcp/DESIGN_GUIDELINES.md)<br>[src/valkey-mcp-server/uv-requirements.txt](../../../../sources/awslabs__mcp/src/valkey-mcp-server/uv-requirements.txt)<br>[src/timestream-for-influxdb-mcp-server/uv-requirements.txt](../../../../sources/awslabs__mcp/src/timestream-for-influxdb-mcp-server/uv-requirements.txt)<br>[src/stepfunctions-tool-mcp-server/uv-requirements.txt](../../../../sources/awslabs__mcp/src/stepfunctions-tool-mcp-server/uv-requirements.txt)<br>[src/security-agent-mcp-server/uv-requirements.txt](../../../../sources/awslabs__mcp/src/security-agent-mcp-server/uv-requirements.txt)<br>[src/sagemaker-ai-mcp-server/uv-requirements.txt](../../../../sources/awslabs__mcp/src/sagemaker-ai-mcp-server/uv-requirements.txt)<br>[src/s3-tables-mcp-server/uv-requirements.txt](../../../../sources/awslabs__mcp/src/s3-tables-mcp-server/uv-requirements.txt)<br>[src/redshift-mcp-server/uv-requirements.txt](../../../../sources/awslabs__mcp/src/redshift-mcp-server/uv-requirements.txt) |
| eval | 1388 | [testing/mcp_test_client.py](../../../../sources/awslabs__mcp/testing/mcp_test_client.py)<br>[testing/mcp_test_runner.py](../../../../sources/awslabs__mcp/testing/mcp_test_runner.py)<br>[src/well-architected-security-mcp-server/tests/__init__.py](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/tests/__init__.py)<br>[src/well-architected-security-mcp-server/tests/conftest.py](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/tests/conftest.py)<br>[src/well-architected-security-mcp-server/tests/README.md](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/tests/README.md)<br>[src/well-architected-security-mcp-server/tests/test_access_analyzer_fix.py](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/tests/test_access_analyzer_fix.py)<br>[src/well-architected-security-mcp-server/tests/test_network_security_additional.py](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/tests/test_network_security_additional.py)<br>[src/well-architected-security-mcp-server/tests/test_network_security.py](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/tests/test_network_security.py) |
| security | 176 | [src/well-architected-security-mcp-server/.python-version](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/.python-version)<br>[src/well-architected-security-mcp-server/PROMPT_TEMPLATE.md](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/PROMPT_TEMPLATE.md)<br>[src/well-architected-security-mcp-server/pyproject.toml](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/pyproject.toml)<br>[src/well-architected-security-mcp-server/README.md](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/README.md)<br>[src/well-architected-security-mcp-server/uv.lock](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/uv.lock)<br>[src/well-architected-security-mcp-server/tests/__init__.py](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/tests/__init__.py)<br>[src/well-architected-security-mcp-server/tests/conftest.py](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/tests/conftest.py)<br>[src/well-architected-security-mcp-server/tests/README.md](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/tests/README.md) |
| ci | 32 | [.github/workflows/aws-api-mcp-upgrade-version.yml](../../../../sources/awslabs__mcp/.github/workflows/aws-api-mcp-upgrade-version.yml)<br>[.github/workflows/bandit-requirements.txt](../../../../sources/awslabs__mcp/.github/workflows/bandit-requirements.txt)<br>[.github/workflows/bandit.yml](../../../../sources/awslabs__mcp/.github/workflows/bandit.yml)<br>[.github/workflows/cfn_nag.yml](../../../../sources/awslabs__mcp/.github/workflows/cfn_nag.yml)<br>[.github/workflows/check-gh-pages-builds.yml](../../../../sources/awslabs__mcp/.github/workflows/check-gh-pages-builds.yml)<br>[.github/workflows/check-license-header-hash.txt](../../../../sources/awslabs__mcp/.github/workflows/check-license-header-hash.txt)<br>[.github/workflows/check-license-header-slash.txt](../../../../sources/awslabs__mcp/.github/workflows/check-license-header-slash.txt)<br>[.github/workflows/check-license-header.json](../../../../sources/awslabs__mcp/.github/workflows/check-license-header.json) |
| container | 47 | [src/valkey-mcp-server/Dockerfile](../../../../sources/awslabs__mcp/src/valkey-mcp-server/Dockerfile)<br>[src/timestream-for-influxdb-mcp-server/Dockerfile](../../../../sources/awslabs__mcp/src/timestream-for-influxdb-mcp-server/Dockerfile)<br>[src/stepfunctions-tool-mcp-server/Dockerfile](../../../../sources/awslabs__mcp/src/stepfunctions-tool-mcp-server/Dockerfile)<br>[src/security-agent-mcp-server/Dockerfile](../../../../sources/awslabs__mcp/src/security-agent-mcp-server/Dockerfile)<br>[src/s3-tables-mcp-server/Dockerfile](../../../../sources/awslabs__mcp/src/s3-tables-mcp-server/Dockerfile)<br>[src/redshift-mcp-server/Dockerfile](../../../../sources/awslabs__mcp/src/redshift-mcp-server/Dockerfile)<br>[src/prometheus-mcp-server/Dockerfile](../../../../sources/awslabs__mcp/src/prometheus-mcp-server/Dockerfile)<br>[src/postgres-mcp-server/Dockerfile](../../../../sources/awslabs__mcp/src/postgres-mcp-server/Dockerfile) |
| instruction | 2 | [src/dynamodb-mcp-server/AGENTS.md](../../../../sources/awslabs__mcp/src/dynamodb-mcp-server/AGENTS.md)<br>[src/aurora-dsql-mcp-server/skills/dsql-skill/mcp/platforms/gemini.md](../../../../sources/awslabs__mcp/src/aurora-dsql-mcp-server/skills/dsql-skill/mcp/platforms/gemini.md) |
| docs | 233 | [README.md](../../../../sources/awslabs__mcp/README.md)<br>[testing/README.md](../../../../sources/awslabs__mcp/testing/README.md)<br>[src/well-architected-security-mcp-server/README.md](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/README.md)<br>[src/well-architected-security-mcp-server/tests/README.md](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/tests/README.md)<br>[src/valkey-mcp-server/README.md](../../../../sources/awslabs__mcp/src/valkey-mcp-server/README.md)<br>[src/timestream-for-influxdb-mcp-server/README.md](../../../../sources/awslabs__mcp/src/timestream-for-influxdb-mcp-server/README.md)<br>[src/stepfunctions-tool-mcp-server/README.md](../../../../sources/awslabs__mcp/src/stepfunctions-tool-mcp-server/README.md)<br>[src/stepfunctions-tool-mcp-server/tests/README.md](../../../../sources/awslabs__mcp/src/stepfunctions-tool-mcp-server/tests/README.md) |
| config | 123 | [src/well-architected-security-mcp-server/pyproject.toml](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/pyproject.toml)<br>[src/well-architected-security-mcp-server/uv.lock](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/uv.lock)<br>[src/valkey-mcp-server/pyproject.toml](../../../../sources/awslabs__mcp/src/valkey-mcp-server/pyproject.toml)<br>[src/valkey-mcp-server/uv.lock](../../../../sources/awslabs__mcp/src/valkey-mcp-server/uv.lock)<br>[src/timestream-for-influxdb-mcp-server/pyproject.toml](../../../../sources/awslabs__mcp/src/timestream-for-influxdb-mcp-server/pyproject.toml)<br>[src/timestream-for-influxdb-mcp-server/uv.lock](../../../../sources/awslabs__mcp/src/timestream-for-influxdb-mcp-server/uv.lock)<br>[src/stepfunctions-tool-mcp-server/pyproject.toml](../../../../sources/awslabs__mcp/src/stepfunctions-tool-mcp-server/pyproject.toml)<br>[src/stepfunctions-tool-mcp-server/uv.lock](../../../../sources/awslabs__mcp/src/stepfunctions-tool-mcp-server/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1388 | [testing/mcp_test_client.py](../../../../sources/awslabs__mcp/testing/mcp_test_client.py)<br>[testing/mcp_test_runner.py](../../../../sources/awslabs__mcp/testing/mcp_test_runner.py)<br>[src/well-architected-security-mcp-server/tests/__init__.py](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/tests/__init__.py)<br>[src/well-architected-security-mcp-server/tests/conftest.py](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/tests/conftest.py)<br>[src/well-architected-security-mcp-server/tests/README.md](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/tests/README.md)<br>[src/well-architected-security-mcp-server/tests/test_access_analyzer_fix.py](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/tests/test_access_analyzer_fix.py) |
| CI workflow | 32 | [.github/workflows/aws-api-mcp-upgrade-version.yml](../../../../sources/awslabs__mcp/.github/workflows/aws-api-mcp-upgrade-version.yml)<br>[.github/workflows/bandit-requirements.txt](../../../../sources/awslabs__mcp/.github/workflows/bandit-requirements.txt)<br>[.github/workflows/bandit.yml](../../../../sources/awslabs__mcp/.github/workflows/bandit.yml)<br>[.github/workflows/cfn_nag.yml](../../../../sources/awslabs__mcp/.github/workflows/cfn_nag.yml)<br>[.github/workflows/check-gh-pages-builds.yml](../../../../sources/awslabs__mcp/.github/workflows/check-gh-pages-builds.yml)<br>[.github/workflows/check-license-header-hash.txt](../../../../sources/awslabs__mcp/.github/workflows/check-license-header-hash.txt) |
| 컨테이너/배포 | 47 | [src/valkey-mcp-server/Dockerfile](../../../../sources/awslabs__mcp/src/valkey-mcp-server/Dockerfile)<br>[src/timestream-for-influxdb-mcp-server/Dockerfile](../../../../sources/awslabs__mcp/src/timestream-for-influxdb-mcp-server/Dockerfile)<br>[src/stepfunctions-tool-mcp-server/Dockerfile](../../../../sources/awslabs__mcp/src/stepfunctions-tool-mcp-server/Dockerfile)<br>[src/security-agent-mcp-server/Dockerfile](../../../../sources/awslabs__mcp/src/security-agent-mcp-server/Dockerfile)<br>[src/s3-tables-mcp-server/Dockerfile](../../../../sources/awslabs__mcp/src/s3-tables-mcp-server/Dockerfile)<br>[src/redshift-mcp-server/Dockerfile](../../../../sources/awslabs__mcp/src/redshift-mcp-server/Dockerfile) |
| 보안/정책 | 176 | [src/well-architected-security-mcp-server/.python-version](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/.python-version)<br>[src/well-architected-security-mcp-server/PROMPT_TEMPLATE.md](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/PROMPT_TEMPLATE.md)<br>[src/well-architected-security-mcp-server/pyproject.toml](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/pyproject.toml)<br>[src/well-architected-security-mcp-server/README.md](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/README.md)<br>[src/well-architected-security-mcp-server/uv.lock](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/uv.lock)<br>[src/well-architected-security-mcp-server/tests/__init__.py](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/tests/__init__.py) |
| 에이전트 지시문 | 2 | [src/dynamodb-mcp-server/AGENTS.md](../../../../sources/awslabs__mcp/src/dynamodb-mcp-server/AGENTS.md)<br>[src/aurora-dsql-mcp-server/skills/dsql-skill/mcp/platforms/gemini.md](../../../../sources/awslabs__mcp/src/aurora-dsql-mcp-server/skills/dsql-skill/mcp/platforms/gemini.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `src/well-architected-security-mcp-server/awslabs/well_architected_security_mcp_server/server.py`, `src/valkey-mcp-server/awslabs/valkey_mcp_server/main.py`, `src/valkey-mcp-server/awslabs/valkey_mcp_server/common/server.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/well-architected-security-mcp-server/awslabs/well_architected_security_mcp_server/server.py`, `src/valkey-mcp-server/awslabs/valkey_mcp_server/main.py`, `src/valkey-mcp-server/awslabs/valkey_mcp_server/common/server.py`.
3. agent/tool runtime 매핑: `src/valkey-mcp-server/awslabs/valkey_mcp_server/context.py`, `src/valkey-mcp-server/awslabs/valkey_mcp_server/tools/__init__.py`, `src/valkey-mcp-server/awslabs/valkey_mcp_server/tools/bitmap.py`.
4. retrieval/memory/indexing 확인: `src/ecs-mcp-server/tests/unit/modules/test_aws_knowledge_proxy.py`, `src/ecs-mcp-server/tests/integ/mcp-inspector/scenarios/02_test_knowledge_proxy_tools/01_create.sh`, `src/ecs-mcp-server/tests/integ/mcp-inspector/scenarios/02_test_knowledge_proxy_tools/02_validate.sh`.
5. test/eval 파일로 동작 검증: `testing/mcp_test_client.py`, `testing/mcp_test_runner.py`, `src/well-architected-security-mcp-server/tests/__init__.py`.

## 기존 레포 인사이트

개발 생산성/DevTools 관점에서 Open source MCP Servers for AWS. 핵심 구조 신호는 Python, README.md, LICENSE, tests, ci, docs이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
