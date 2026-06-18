# awslabs/mcp Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Open source MCP Servers for AWS

## 요약

- 조사 단위: `sources/awslabs__mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 3,547 files, 620 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/well-architected-security-mcp-server/awslabs/well_architected_security_mcp_server/server.py, src/valkey-mcp-server/awslabs/valkey_mcp_server/main.py, src/valkey-mcp-server/awslabs/valkey_mcp_server/common/server.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | awslabs/mcp |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | global |
| Language | Python |
| Stars | 9289 |
| Forks | 1584 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/awslabs__mcp](../../../../sources/awslabs__mcp) |
| Existing report | [reports/global-trending/repositories/awslabs__mcp.md](../../../global-trending/repositories/awslabs__mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 3547 / 620 |
| Max observed depth | 9 |
| Top directories | .devcontainer, .github, .vex, docs, docusaurus, samples, scripts, src, testing |
| Top extensions | .py: 2340, .md: 419, (none): 289, .json: 99, .sh: 90, .toml: 73, .txt: 70, .lock: 60, .yml: 33, .svg: 12, .png: 11, .j2: 10 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 396 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| docs | documentation surface | 1 |
| docusaurus | documentation surface | 1 |
| samples | top-level component | 1 |
| scripts | top-level component | 1 |
| testing | validation surface | 1 |


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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
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


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1388 | [testing/mcp_test_client.py](../../../../sources/awslabs__mcp/testing/mcp_test_client.py)<br>[testing/mcp_test_runner.py](../../../../sources/awslabs__mcp/testing/mcp_test_runner.py)<br>[src/well-architected-security-mcp-server/tests/__init__.py](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/tests/__init__.py)<br>[src/well-architected-security-mcp-server/tests/conftest.py](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/tests/conftest.py)<br>[src/well-architected-security-mcp-server/tests/README.md](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/tests/README.md)<br>[src/well-architected-security-mcp-server/tests/test_access_analyzer_fix.py](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/tests/test_access_analyzer_fix.py) |
| CI workflows | 32 | [.github/workflows/aws-api-mcp-upgrade-version.yml](../../../../sources/awslabs__mcp/.github/workflows/aws-api-mcp-upgrade-version.yml)<br>[.github/workflows/bandit-requirements.txt](../../../../sources/awslabs__mcp/.github/workflows/bandit-requirements.txt)<br>[.github/workflows/bandit.yml](../../../../sources/awslabs__mcp/.github/workflows/bandit.yml)<br>[.github/workflows/cfn_nag.yml](../../../../sources/awslabs__mcp/.github/workflows/cfn_nag.yml)<br>[.github/workflows/check-gh-pages-builds.yml](../../../../sources/awslabs__mcp/.github/workflows/check-gh-pages-builds.yml)<br>[.github/workflows/check-license-header-hash.txt](../../../../sources/awslabs__mcp/.github/workflows/check-license-header-hash.txt) |
| Containers / deploy | 47 | [src/valkey-mcp-server/Dockerfile](../../../../sources/awslabs__mcp/src/valkey-mcp-server/Dockerfile)<br>[src/timestream-for-influxdb-mcp-server/Dockerfile](../../../../sources/awslabs__mcp/src/timestream-for-influxdb-mcp-server/Dockerfile)<br>[src/stepfunctions-tool-mcp-server/Dockerfile](../../../../sources/awslabs__mcp/src/stepfunctions-tool-mcp-server/Dockerfile)<br>[src/security-agent-mcp-server/Dockerfile](../../../../sources/awslabs__mcp/src/security-agent-mcp-server/Dockerfile)<br>[src/s3-tables-mcp-server/Dockerfile](../../../../sources/awslabs__mcp/src/s3-tables-mcp-server/Dockerfile)<br>[src/redshift-mcp-server/Dockerfile](../../../../sources/awslabs__mcp/src/redshift-mcp-server/Dockerfile) |
| Security / policy | 176 | [src/well-architected-security-mcp-server/.python-version](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/.python-version)<br>[src/well-architected-security-mcp-server/PROMPT_TEMPLATE.md](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/PROMPT_TEMPLATE.md)<br>[src/well-architected-security-mcp-server/pyproject.toml](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/pyproject.toml)<br>[src/well-architected-security-mcp-server/README.md](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/README.md)<br>[src/well-architected-security-mcp-server/uv.lock](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/uv.lock)<br>[src/well-architected-security-mcp-server/tests/__init__.py](../../../../sources/awslabs__mcp/src/well-architected-security-mcp-server/tests/__init__.py) |
| Agent instructions | 2 | [src/dynamodb-mcp-server/AGENTS.md](../../../../sources/awslabs__mcp/src/dynamodb-mcp-server/AGENTS.md)<br>[src/aurora-dsql-mcp-server/skills/dsql-skill/mcp/platforms/gemini.md](../../../../sources/awslabs__mcp/src/aurora-dsql-mcp-server/skills/dsql-skill/mcp/platforms/gemini.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `src/well-architected-security-mcp-server/awslabs/well_architected_security_mcp_server/server.py`, `src/valkey-mcp-server/awslabs/valkey_mcp_server/main.py`, `src/valkey-mcp-server/awslabs/valkey_mcp_server/common/server.py`.
2. Trace execution through entrypoints: `src/well-architected-security-mcp-server/awslabs/well_architected_security_mcp_server/server.py`, `src/valkey-mcp-server/awslabs/valkey_mcp_server/main.py`, `src/valkey-mcp-server/awslabs/valkey_mcp_server/common/server.py`.
3. Map agent/tool runtime through: `src/valkey-mcp-server/awslabs/valkey_mcp_server/context.py`, `src/valkey-mcp-server/awslabs/valkey_mcp_server/tools/__init__.py`, `src/valkey-mcp-server/awslabs/valkey_mcp_server/tools/bitmap.py`.
4. Inspect retrieval/memory/indexing through: `src/ecs-mcp-server/tests/unit/modules/test_aws_knowledge_proxy.py`, `src/ecs-mcp-server/tests/integ/mcp-inspector/scenarios/02_test_knowledge_proxy_tools/01_create.sh`, `src/ecs-mcp-server/tests/integ/mcp-inspector/scenarios/02_test_knowledge_proxy_tools/02_validate.sh`.
5. Verify behavior through test/eval files: `testing/mcp_test_client.py`, `testing/mcp_test_runner.py`, `src/well-architected-security-mcp-server/tests/__init__.py`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 Open source MCP Servers for AWS. 핵심 구조 신호는 Python, README.md, LICENSE, tests, ci, docs이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
