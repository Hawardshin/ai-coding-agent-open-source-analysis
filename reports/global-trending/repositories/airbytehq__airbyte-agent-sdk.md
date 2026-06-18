# airbytehq/airbyte-agent-sdk

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/airbytehq/airbyte-agent-sdk |
| local path | sources/airbytehq__airbyte-agent-sdk |
| HEAD | 11da5e3 |
| stars/forks | 126 / 10 |
| language | Python |
| license |  |
| pushedAt | 2026-06-18T00:13:21Z |
| trendScore / priorityScore | 150 / 435 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | connectors/clickup-api/README.md, README.md, connectors/airtable/README.md |
| Developer tools / DX | 385 | connectors/clickup-api/README.md, README.md, connectors/airtable/README.md |
| MCP / agent interoperability | 375 | connectors/clickup-api/README.md, README.md, connectors/airtable/README.md |
| Security / supply chain | 359 | connectors/clickup-api/README.md, connectors/airtable/README.md, connectors/amazon-ads/README.md |
| Database / data infrastructure | 94 | connectors/airtable/README.md, connectors/amplitude/README.md, connectors/ashby/README.md |
| Coding agent / software automation | 69 | README.md, airbyte_agent_sdk/specs/amazon-ads/connector.yaml, airbyte_agent_sdk/specs/amplitude/connector.yaml |
| Observability / evaluation | 64 | README.md, connectors/sentry/README.md, airbyte_agent_sdk/specs/ashby/connector.yaml |
| Data / ML platform | 11 | connectors/ashby/README.md, connectors/github/README.md, connectors/gitlab/README.md |
| RAG / retrieval / knowledge | 3 | connectors/google-ads/README.md, airbyte_agent_sdk/specs/exa/connector.yaml |
| Cloud native / infrastructure | 2 | airbyte_agent_sdk/specs/amazon-ads/connector.yaml, airbyte_agent_sdk/specs/clickup-api/connector.yaml |
| Frontend / app framework | 1 | connectors/slack/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, devtools, frontend, frontendStack, infra, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Python |
| capabilities | LLM/app framework, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 665 |
| manifests | 40 |
| docs | 177 |
| tests | 54 |
| ci/ops | 0 |
| spec artifacts | 50 |
| agent instruction files | 8 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Airbyte Agent SDK | Airbyte Agent SDK / Overview / How to install / Documentation / Tool integration / Hosted connector tools / pydantic-ai / LangChain / OpenAI Agents / FastMCP | Airbyte Agent SDK Type safe connector execution framework with blessed connectors and full IDE autocomplete. Overview The Airbyte Agent SDK gives AI agents access to 50+ third party APIs through strongly typed, well documented tools. Connectors can run through the Airbyte platform which manages credentials, rate limiting, and execution or locally in OSS mode. How to install Documentation Full documentation is available at docs.airbyte.com/ai agents/about/ https //docs.airbyte.com/ai agents/about/ . Tool integration The SDK ships a hosted tool builder and two decorators for turning connector calls into LLM tools with retry aware exception translation, output size guards, and framework specifi |


## Key Files

### Manifests

- connectors/clickup-api/README.md
- README.md
- connectors/airtable/README.md
- connectors/amazon-ads/README.md
- connectors/amazon-seller-partner/README.md
- connectors/amplitude/README.md
- connectors/asana/README.md
- connectors/ashby/README.md
- connectors/chargebee/README.md
- connectors/confluence/README.md
- connectors/customer-io/README.md
- connectors/facebook-marketing/README.md
- connectors/freshdesk/README.md
- connectors/github/README.md
- connectors/gitlab/README.md
- connectors/gmail/README.md
- connectors/gong/README.md
- connectors/google-ads/README.md
- connectors/google-analytics-data-api/README.md
- connectors/google-drive/README.md


### Spec / Docs / Prompt Artifacts

- airbyte_agent_sdk/specs/airtable/connector.yaml
- airbyte_agent_sdk/specs/amazon-ads/connector.yaml
- airbyte_agent_sdk/specs/amazon-seller-partner/connector.yaml
- airbyte_agent_sdk/specs/amplitude/connector.yaml
- airbyte_agent_sdk/specs/asana/connector.yaml
- airbyte_agent_sdk/specs/ashby/connector.yaml
- airbyte_agent_sdk/specs/chargebee/connector.yaml
- airbyte_agent_sdk/specs/clickup-api/connector.yaml
- airbyte_agent_sdk/specs/confluence/connector.yaml
- airbyte_agent_sdk/specs/customer-io/connector.yaml
- airbyte_agent_sdk/specs/exa/connector.yaml
- airbyte_agent_sdk/specs/facebook-marketing/connector.yaml
- airbyte_agent_sdk/specs/freshdesk/connector.yaml
- airbyte_agent_sdk/specs/github/connector.yaml
- airbyte_agent_sdk/specs/gitlab/connector.yaml
- airbyte_agent_sdk/specs/gmail/connector.yaml
- airbyte_agent_sdk/specs/gong/connector.yaml
- airbyte_agent_sdk/specs/google-ads/connector.yaml
- airbyte_agent_sdk/specs/google-analytics-data-api/connector.yaml
- airbyte_agent_sdk/specs/google-drive/connector.yaml


### Agent Instruction Files

- .claude/skills/bootstrapping-agent/SKILL.md
- .claude/skills/building-multi-connector-agent/SKILL.md
- .claude/skills/airbyte-sdk-reference/claude-sdk.md
- .claude/skills/airbyte-sdk-reference/connector-discovery.md
- .claude/skills/airbyte-sdk-reference/pydantic-ai.md
- .claude/skills/airbyte-sdk-reference/sdk-api.md
- .claude/skills/airbyte-sdk-reference/SKILL.md
- .claude/skills/discovering-connectors/SKILL.md


## Top Directories

| dir | count |
| --- | --- |
| airbyte_agent_sdk | 424 |
| connectors | 212 |
| .codex | 12 |
| .claude | 8 |
| .claude-plugin | 2 |
| .github | 2 |
| .gitignore | 1 |
| LICENSE | 1 |
| lovable | 1 |
| pyproject.toml | 1 |
| README.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 354 |
| .md | 177 |
| .yaml | 59 |
| .json | 55 |
| .jinja2 | 13 |
| .svg | 2 |
| [no-ext] | 2 |
| .pyi | 1 |
| .toml | 1 |
| .typed | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
