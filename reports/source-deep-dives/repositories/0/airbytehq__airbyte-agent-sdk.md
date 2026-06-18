# airbytehq/airbyte-agent-sdk Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

🐙 Drop-in tools that give AI agents reliable, permission-aware access to external systems.

## 요약

- 조사 단위: `sources/airbytehq__airbyte-agent-sdk` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 665 files, 200 directories, depth score 96, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=lovable/skills/airbyte-integration.md, airbyte_agent_sdk/skill_docs_renderer.py, airbyte_agent_sdk/tools.py이고, 의존성 단서는 openai, mcp, langchain, langgraph, pydantic, click, 검증/운영 단서는 test/eval 경로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | airbytehq/airbyte-agent-sdk |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 126 |
| Forks | 10 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/airbytehq__airbyte-agent-sdk](../../../../sources/airbytehq__airbyte-agent-sdk) |
| Existing report | [reports/global-trending/repositories/airbytehq__airbyte-agent-sdk.md](../../../global-trending/repositories/airbytehq__airbyte-agent-sdk.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 665 / 200 |
| Max observed depth | 5 |
| Top directories | .claude, .claude-plugin, .codex, .github, airbyte_agent_sdk, connectors, lovable |
| Top extensions | .py: 354, .md: 177, .yaml: 59, .json: 55, .jinja2: 13, .svg: 2, (none): 2, .pyi: 1, .toml: 1, .typed: 1 |
| Source patterns | agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| airbyte_agent_sdk | top-level component | 1 |
| connectors | top-level component | 1 |
| lovable | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | langchain, langgraph |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | click |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [lovable/skills/airbyte-integration.md](../../../../sources/airbytehq__airbyte-agent-sdk/lovable/skills/airbyte-integration.md) | agentRuntime signal |
| agentRuntime | [airbyte_agent_sdk/skill_docs_renderer.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/skill_docs_renderer.py) | agentRuntime signal |
| agentRuntime | [airbyte_agent_sdk/tools.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/tools.py) | agentRuntime signal |
| agentRuntime | [airbyte_agent_sdk/testing/runner.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/testing/runner.py) | agentRuntime signal |
| instruction | [.codex/skills/discovering-connectors/SKILL.md](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/discovering-connectors/SKILL.md) | instruction signal |
| instruction | [.codex/skills/discovering-connectors/agents/openai.yaml](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/discovering-connectors/agents/openai.yaml) | instruction signal |
| instruction | [.codex/skills/building-multi-connector-agent/SKILL.md](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/building-multi-connector-agent/SKILL.md) | instruction signal |
| instruction | [.codex/skills/building-multi-connector-agent/agents/openai.yaml](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/building-multi-connector-agent/agents/openai.yaml) | instruction signal |
| config | [pyproject.toml](../../../../sources/airbytehq__airbyte-agent-sdk/pyproject.toml) | config signal |
| eval | [airbyte_agent_sdk/testing/spec_loader.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/testing/spec_loader.py) | eval support |
| eval | [airbyte_agent_sdk/observability/__init__.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/observability/__init__.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 28 | [lovable/skills/airbyte-integration.md](../../../../sources/airbytehq__airbyte-agent-sdk/lovable/skills/airbyte-integration.md)<br>[airbyte_agent_sdk/skill_docs_renderer.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/skill_docs_renderer.py)<br>[airbyte_agent_sdk/tools.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/tools.py)<br>[airbyte_agent_sdk/testing/runner.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/testing/runner.py)<br>[airbyte_agent_sdk/executor/__init__.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/executor/__init__.py)<br>[airbyte_agent_sdk/executor/hosted_executor.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/executor/hosted_executor.py)<br>[airbyte_agent_sdk/executor/local_executor.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/executor/local_executor.py)<br>[airbyte_agent_sdk/executor/models.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/executor/models.py) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 1 | [airbyte_agent_sdk/testing/spec_loader.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/testing/spec_loader.py) |
| eval | 8 | [airbyte_agent_sdk/testing/spec_loader.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/testing/spec_loader.py)<br>[airbyte_agent_sdk/observability/__init__.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/observability/__init__.py)<br>[airbyte_agent_sdk/observability/config.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/observability/config.py)<br>[airbyte_agent_sdk/observability/models.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/observability/models.py)<br>[airbyte_agent_sdk/observability/redactor.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/observability/redactor.py)<br>[airbyte_agent_sdk/observability/session.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/observability/session.py)<br>[airbyte_agent_sdk/codegen/templates/test_cassettes.py.jinja2](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/codegen/templates/test_cassettes.py.jinja2)<br>[airbyte_agent_sdk/codegen/templates/test_connector.py.jinja2](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/codegen/templates/test_connector.py.jinja2) |
| security | 57 | [connectors/zoho-crm/AUTH.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/zoho-crm/AUTH.md)<br>[connectors/zendesk-talk/AUTH.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/zendesk-talk/AUTH.md)<br>[connectors/zendesk-support/AUTH.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/zendesk-support/AUTH.md)<br>[connectors/zendesk-chat/AUTH.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/zendesk-chat/AUTH.md)<br>[connectors/woocommerce/AUTH.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/woocommerce/AUTH.md)<br>[connectors/typeform/AUTH.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/typeform/AUTH.md)<br>[connectors/twilio/AUTH.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/twilio/AUTH.md)<br>[connectors/tiktok-marketing/AUTH.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/tiktok-marketing/AUTH.md) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 12 | [.codex/skills/discovering-connectors/SKILL.md](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/discovering-connectors/SKILL.md)<br>[.codex/skills/discovering-connectors/agents/openai.yaml](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/discovering-connectors/agents/openai.yaml)<br>[.codex/skills/building-multi-connector-agent/SKILL.md](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/building-multi-connector-agent/SKILL.md)<br>[.codex/skills/building-multi-connector-agent/agents/openai.yaml](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/building-multi-connector-agent/agents/openai.yaml)<br>[.codex/skills/bootstrapping-agent/SKILL.md](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/bootstrapping-agent/SKILL.md)<br>[.codex/skills/bootstrapping-agent/agents/openai.yaml](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/bootstrapping-agent/agents/openai.yaml)<br>[.codex/skills/airbyte-sdk-reference/claude-sdk.md](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/airbyte-sdk-reference/claude-sdk.md)<br>[.codex/skills/airbyte-sdk-reference/connector-discovery.md](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/airbyte-sdk-reference/connector-discovery.md) |
| docs | 108 | [README.md](../../../../sources/airbytehq__airbyte-agent-sdk/README.md)<br>[connectors/zoho-crm/README.context.json](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/zoho-crm/README.context.json)<br>[connectors/zoho-crm/README.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/zoho-crm/README.md)<br>[connectors/zendesk-talk/README.context.json](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/zendesk-talk/README.context.json)<br>[connectors/zendesk-talk/README.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/zendesk-talk/README.md)<br>[connectors/zendesk-support/README.context.json](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/zendesk-support/README.context.json)<br>[connectors/zendesk-support/README.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/zendesk-support/README.md)<br>[connectors/zendesk-chat/README.context.json](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/zendesk-chat/README.context.json) |
| config | 1 | [pyproject.toml](../../../../sources/airbytehq__airbyte-agent-sdk/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 8 | [airbyte_agent_sdk/testing/spec_loader.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/testing/spec_loader.py)<br>[airbyte_agent_sdk/observability/__init__.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/observability/__init__.py)<br>[airbyte_agent_sdk/observability/config.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/observability/config.py)<br>[airbyte_agent_sdk/observability/models.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/observability/models.py)<br>[airbyte_agent_sdk/observability/redactor.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/observability/redactor.py)<br>[airbyte_agent_sdk/observability/session.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/observability/session.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 57 | [connectors/zoho-crm/AUTH.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/zoho-crm/AUTH.md)<br>[connectors/zendesk-talk/AUTH.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/zendesk-talk/AUTH.md)<br>[connectors/zendesk-support/AUTH.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/zendesk-support/AUTH.md)<br>[connectors/zendesk-chat/AUTH.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/zendesk-chat/AUTH.md)<br>[connectors/woocommerce/AUTH.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/woocommerce/AUTH.md)<br>[connectors/typeform/AUTH.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/typeform/AUTH.md) |
| Agent instructions | 12 | [.codex/skills/discovering-connectors/SKILL.md](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/discovering-connectors/SKILL.md)<br>[.codex/skills/discovering-connectors/agents/openai.yaml](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/discovering-connectors/agents/openai.yaml)<br>[.codex/skills/building-multi-connector-agent/SKILL.md](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/building-multi-connector-agent/SKILL.md)<br>[.codex/skills/building-multi-connector-agent/agents/openai.yaml](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/building-multi-connector-agent/agents/openai.yaml)<br>[.codex/skills/bootstrapping-agent/SKILL.md](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/bootstrapping-agent/SKILL.md)<br>[.codex/skills/bootstrapping-agent/agents/openai.yaml](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/bootstrapping-agent/agents/openai.yaml) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `lovable/skills/airbyte-integration.md`, `airbyte_agent_sdk/skill_docs_renderer.py`, `airbyte_agent_sdk/tools.py`.
2. Map agent/tool runtime through: `lovable/skills/airbyte-integration.md`, `airbyte_agent_sdk/skill_docs_renderer.py`, `airbyte_agent_sdk/tools.py`.
3. Verify behavior through test/eval files: `airbyte_agent_sdk/testing/spec_loader.py`, `airbyte_agent_sdk/observability/__init__.py`, `airbyte_agent_sdk/observability/config.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 🐙 Drop in tools that give AI agents reliable, permission aware access to external systems.. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, openai, langchain이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
