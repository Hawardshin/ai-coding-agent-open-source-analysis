# aws/bedrock-agentcore-sdk-python Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Python SDK for transforming any AI agent into a production-ready application. Framework-agnostic primitives for runtime, memory, authentication, and tools with AWS-managed infrastructure.

## 요약

- 조사 단위: `sources/aws__bedrock-agentcore-sdk-python` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 313 files, 98 directories, depth score 96, key references 9개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, tests_integ/tools/__init__.py, tests_integ/tools/test_browser_proxy.py이고, 의존성 단서는 mcp, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | aws/bedrock-agentcore-sdk-python |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 727 |
| Forks | 122 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/aws__bedrock-agentcore-sdk-python](../../../../sources/aws__bedrock-agentcore-sdk-python) |
| Existing report | [reports/global-trending/repositories/aws__bedrock-agentcore-sdk-python.md](../../../global-trending/repositories/aws__bedrock-agentcore-sdk-python.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 313 / 98 |
| Max observed depth | 9 |
| Top directories | .github, docs, scripts, src, tests, tests_integ |
| Top extensions | .py: 263, .md: 22, .yml: 14, .typed: 3, (none): 3, .txt: 2, .ipynb: 1, .j2: 1, .lock: 1, .png: 1, .toml: 1, .yaml: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 46 |
| src | source boundary | 28 |
| docs | documentation surface | 4 |
| .github | ci surface | 1 |
| scripts | top-level component | 1 |
| tests_integ | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | bedrock-agentcore | bedrock-agentcore |


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
| agentRuntime | [AGENTS.md](../../../../sources/aws__bedrock-agentcore-sdk-python/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests_integ/tools/__init__.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [tests_integ/tools/test_browser_proxy.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/test_browser_proxy.py) | agentRuntime signal |
| agentRuntime | [tests_integ/tools/test_browser.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/test_browser.py) | agentRuntime signal |
| config | [pyproject.toml](../../../../sources/aws__bedrock-agentcore-sdk-python/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/aws__bedrock-agentcore-sdk-python/uv.lock) | config signal |
| ci | [.github/workflows/breaking-change-check.yml](../../../../sources/aws__bedrock-agentcore-sdk-python/.github/workflows/breaking-change-check.yml) | ci support |
| ci | [.github/workflows/ci.yml](../../../../sources/aws__bedrock-agentcore-sdk-python/.github/workflows/ci.yml) | ci support |
| eval | [tests_integ/__init__.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/__init__.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 84 | [AGENTS.md](../../../../sources/aws__bedrock-agentcore-sdk-python/AGENTS.md)<br>[tests_integ/tools/__init__.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/__init__.py)<br>[tests_integ/tools/test_browser_proxy.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/test_browser_proxy.py)<br>[tests_integ/tools/test_browser.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/test_browser.py)<br>[tests_integ/tools/test_code_interpreter_client.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/test_code_interpreter_client.py)<br>[tests_integ/tools/test_code.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/test_code.py)<br>[tests_integ/memory/__init__.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/memory/__init__.py)<br>[tests_integ/memory/helpers.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/memory/helpers.py) |
| mcp | 0 | not obvious |
| retrieval | 46 | [tests_integ/memory/__init__.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/memory/__init__.py)<br>[tests_integ/memory/helpers.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/memory/helpers.py)<br>[tests_integ/memory/test_controlplane.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/memory/test_controlplane.py)<br>[tests_integ/memory/test_memory_client.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/memory/test_memory_client.py)<br>[tests_integ/memory/integrations/__init__.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/memory/integrations/__init__.py)<br>[tests_integ/memory/integrations/test_session_manager.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/memory/integrations/test_session_manager.py)<br>[tests_integ/knowledge_base/__init__.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/knowledge_base/__init__.py)<br>[tests_integ/knowledge_base/test_knowledge_base_client.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/knowledge_base/test_knowledge_base_client.py) |
| spec | 0 | not obvious |
| eval | 192 | [tests_integ/__init__.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/__init__.py)<br>[tests_integ/tools/__init__.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/__init__.py)<br>[tests_integ/tools/test_browser_proxy.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/test_browser_proxy.py)<br>[tests_integ/tools/test_browser.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/test_browser.py)<br>[tests_integ/tools/test_code_interpreter_client.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/test_code_interpreter_client.py)<br>[tests_integ/tools/test_code.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/test_code.py)<br>[tests_integ/services/__init__.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/services/__init__.py)<br>[tests_integ/services/test_resource_policy.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/services/test_resource_policy.py) |
| security | 16 | [SECURITY.md](../../../../sources/aws__bedrock-agentcore-sdk-python/SECURITY.md)<br>[tests_integ/services/test_resource_policy.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/services/test_resource_policy.py)<br>[tests_integ/policy/__init__.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/policy/__init__.py)<br>[tests_integ/policy/test_policy_engine_client.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/policy/test_policy_engine_client.py)<br>[tests_integ/identity/test_auth_flows.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/identity/test_auth_flows.py)<br>[tests/unit/policy/__init__.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests/unit/policy/__init__.py)<br>[tests/unit/policy/test_policy_engine_client.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests/unit/policy/test_policy_engine_client.py)<br>[tests/bedrock_agentcore/services/test_resource_policy.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests/bedrock_agentcore/services/test_resource_policy.py) |
| ci | 13 | [.github/workflows/breaking-change-check.yml](../../../../sources/aws__bedrock-agentcore-sdk-python/.github/workflows/breaking-change-check.yml)<br>[.github/workflows/ci.yml](../../../../sources/aws__bedrock-agentcore-sdk-python/.github/workflows/ci.yml)<br>[.github/workflows/dependabot-auto-merge.yml](../../../../sources/aws__bedrock-agentcore-sdk-python/.github/workflows/dependabot-auto-merge.yml)<br>[.github/workflows/dependency-management.yml](../../../../sources/aws__bedrock-agentcore-sdk-python/.github/workflows/dependency-management.yml)<br>[.github/workflows/github-slack-notifications.yml](../../../../sources/aws__bedrock-agentcore-sdk-python/.github/workflows/github-slack-notifications.yml)<br>[.github/workflows/integration-testing-regression.yml](../../../../sources/aws__bedrock-agentcore-sdk-python/.github/workflows/integration-testing-regression.yml)<br>[.github/workflows/integration-testing.yml](../../../../sources/aws__bedrock-agentcore-sdk-python/.github/workflows/integration-testing.yml)<br>[.github/workflows/pr-automerge.yml](../../../../sources/aws__bedrock-agentcore-sdk-python/.github/workflows/pr-automerge.yml) |
| container | 0 | not obvious |
| instruction | 1 | [AGENTS.md](../../../../sources/aws__bedrock-agentcore-sdk-python/AGENTS.md) |
| docs | 12 | [README.md](../../../../sources/aws__bedrock-agentcore-sdk-python/README.md)<br>[tests_integ/payments/README.md](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/payments/README.md)<br>[tests_integ/async/README.md](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/async/README.md)<br>[src/bedrock_agentcore/payments/README.md](../../../../sources/aws__bedrock-agentcore-sdk-python/src/bedrock_agentcore/payments/README.md)<br>[src/bedrock_agentcore/payments/integrations/strands/README.md](../../../../sources/aws__bedrock-agentcore-sdk-python/src/bedrock_agentcore/payments/integrations/strands/README.md)<br>[src/bedrock_agentcore/memory/README.md](../../../../sources/aws__bedrock-agentcore-sdk-python/src/bedrock_agentcore/memory/README.md)<br>[src/bedrock_agentcore/memory/integrations/strands/README.md](../../../../sources/aws__bedrock-agentcore-sdk-python/src/bedrock_agentcore/memory/integrations/strands/README.md)<br>[src/bedrock_agentcore/gateway/integrations/strands/plugins/agentcore_tool_search/README.md](../../../../sources/aws__bedrock-agentcore-sdk-python/src/bedrock_agentcore/gateway/integrations/strands/plugins/agentcore_tool_search/README.md) |
| config | 2 | [pyproject.toml](../../../../sources/aws__bedrock-agentcore-sdk-python/pyproject.toml)<br>[uv.lock](../../../../sources/aws__bedrock-agentcore-sdk-python/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 192 | [tests_integ/__init__.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/__init__.py)<br>[tests_integ/tools/__init__.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/__init__.py)<br>[tests_integ/tools/test_browser_proxy.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/test_browser_proxy.py)<br>[tests_integ/tools/test_browser.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/test_browser.py)<br>[tests_integ/tools/test_code_interpreter_client.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/test_code_interpreter_client.py)<br>[tests_integ/tools/test_code.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/tools/test_code.py) |
| CI workflows | 13 | [.github/workflows/breaking-change-check.yml](../../../../sources/aws__bedrock-agentcore-sdk-python/.github/workflows/breaking-change-check.yml)<br>[.github/workflows/ci.yml](../../../../sources/aws__bedrock-agentcore-sdk-python/.github/workflows/ci.yml)<br>[.github/workflows/dependabot-auto-merge.yml](../../../../sources/aws__bedrock-agentcore-sdk-python/.github/workflows/dependabot-auto-merge.yml)<br>[.github/workflows/dependency-management.yml](../../../../sources/aws__bedrock-agentcore-sdk-python/.github/workflows/dependency-management.yml)<br>[.github/workflows/github-slack-notifications.yml](../../../../sources/aws__bedrock-agentcore-sdk-python/.github/workflows/github-slack-notifications.yml)<br>[.github/workflows/integration-testing-regression.yml](../../../../sources/aws__bedrock-agentcore-sdk-python/.github/workflows/integration-testing-regression.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 16 | [SECURITY.md](../../../../sources/aws__bedrock-agentcore-sdk-python/SECURITY.md)<br>[tests_integ/services/test_resource_policy.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/services/test_resource_policy.py)<br>[tests_integ/policy/__init__.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/policy/__init__.py)<br>[tests_integ/policy/test_policy_engine_client.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/policy/test_policy_engine_client.py)<br>[tests_integ/identity/test_auth_flows.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests_integ/identity/test_auth_flows.py)<br>[tests/unit/policy/__init__.py](../../../../sources/aws__bedrock-agentcore-sdk-python/tests/unit/policy/__init__.py) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/aws__bedrock-agentcore-sdk-python/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `AGENTS.md`, `tests_integ/tools/__init__.py`, `tests_integ/tools/test_browser_proxy.py`.
2. Map agent/tool runtime through: `AGENTS.md`, `tests_integ/tools/__init__.py`, `tests_integ/tools/test_browser_proxy.py`.
3. Inspect retrieval/memory/indexing through: `tests_integ/memory/__init__.py`, `tests_integ/memory/helpers.py`, `tests_integ/memory/test_controlplane.py`.
4. Verify behavior through test/eval files: `tests_integ/__init__.py`, `tests_integ/tools/__init__.py`, `tests_integ/tools/test_browser_proxy.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Python SDK for transforming any AI agent into a production ready application. Framework agnostic primitives for runtime,. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, mcp, pydantic이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
