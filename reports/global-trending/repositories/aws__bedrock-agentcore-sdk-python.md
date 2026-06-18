# aws/bedrock-agentcore-sdk-python

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/aws/bedrock-agentcore-sdk-python |
| local path | sources/aws__bedrock-agentcore-sdk-python |
| HEAD | e873597 |
| stars/forks | 727 / 122 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T22:30:08Z |
| trendScore / priorityScore | 159 / 441 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | src/bedrock_agentcore/evaluation/integrations/strands_agents_evals/README.md, src/bedrock_agentcore/gateway/integrations/strands/plugins/agentcore_tool_search/README.md, src/bedrock_agentcore/memory/integrations/strands/README.md |
| Observability / evaluation | 279 | src/bedrock_agentcore/evaluation/integrations/strands_agents_evals/README.md, src/bedrock_agentcore/memory/integrations/strands/README.md, README.md |
| Data / ML platform | 233 | tests_integ/evaluation/test_dataset_client.py, tests_integ/evaluation/test_runners_with_service_dataset.py, tests_integ/evaluation/test_service_dataset_provider.py |
| Security / supply chain | 231 | src/bedrock_agentcore/memory/README.md, src/bedrock_agentcore/payments/integrations/strands/README.md, src/bedrock_agentcore/payments/README.md |
| Cloud native / infrastructure | 143 | src/bedrock_agentcore/gateway/integrations/strands/plugins/agentcore_tool_search/README.md, src/bedrock_agentcore/memory/README.md, src/bedrock_agentcore/payments/integrations/strands/README.md |
| Developer tools / DX | 98 | src/bedrock_agentcore/evaluation/integrations/strands_agents_evals/README.md, src/bedrock_agentcore/gateway/integrations/strands/plugins/agentcore_tool_search/README.md, src/bedrock_agentcore/memory/integrations/strands/README.md |
| MCP / agent interoperability | 50 | src/bedrock_agentcore/gateway/integrations/strands/plugins/agentcore_tool_search/README.md, src/bedrock_agentcore/payments/integrations/strands/README.md, src/bedrock_agentcore/payments/README.md |
| RAG / retrieval / knowledge | 37 | src/bedrock_agentcore/gateway/integrations/strands/plugins/agentcore_tool_search/README.md, src/bedrock_agentcore/memory/integrations/strands/README.md, src/bedrock_agentcore/memory/README.md |
| Frontend / app framework | 5 | src/bedrock_agentcore/payments/integrations/strands/README.md, src/bedrock_agentcore/payments/README.md, docs/examples/agent_runtime_client_examples.md |
| Coding agent / software automation | 4 | .github/workflows/pr-security-review.yml |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 311 |
| manifests | 11 |
| docs | 22 |
| tests | 102 |
| ci/ops | 13 |
| spec artifacts | 3 |
| agent instruction files | 3 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Framework agent with a .run() method — one line | Overview / 🚀 From Local Development to Bedrock AgentCore / Amazon Bedrock AgentCore services / AG-UI Protocol Support / Framework agent with a .run() method — one line / 🏗️ Deployment / AgentCore CLI (Recommended) / AWS CDK (Advanced) / A2A Protocol Support / 📝 License & Contributing | <div align="center" <div <a href="https //aws.amazon.com/bedrock/agentcore/" <img width="150" height="150" alt="image" src="https //github.com/user attachments/assets/b8b9456d c9e2 45e1 ac5b 760f21f1ac18" / </a </div <h1 Bedrock AgentCore SDK </h1 <h2 Deploy your local AI agent to Bedrock AgentCore with zero infrastructure </h2 <div align="center" <a href="https //github.com/aws/bedrock agentcore sdk python/graphs/commit activity" <img alt="GitHub commit activity" src="https //img.shields.io/github/commit activity/m/aws/bedrock agentcore sdk python"/ </a <a href="https //github.com/aws/bedrock agentcore sdk python/issues" <img alt="GitHub open issues" src="https //img.shields.io/github/issue |


## Key Files

### Manifests

- src/bedrock_agentcore/evaluation/integrations/strands_agents_evals/README.md
- src/bedrock_agentcore/gateway/integrations/strands/plugins/agentcore_tool_search/README.md
- src/bedrock_agentcore/memory/integrations/strands/README.md
- src/bedrock_agentcore/memory/README.md
- src/bedrock_agentcore/payments/integrations/strands/README.md
- src/bedrock_agentcore/payments/README.md
- AGENTS.md
- README.md
- tests_integ/async/README.md
- tests_integ/payments/README.md
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- src/bedrock_agentcore/evaluation/runner/prompts/__init__.py
- src/bedrock_agentcore/evaluation/runner/prompts/structured_user_simulator.j2


### Agent Instruction Files

- AGENTS.md
- src/bedrock_agentcore/evaluation/runner/prompts/__init__.py
- src/bedrock_agentcore/evaluation/runner/prompts/structured_user_simulator.j2


## Top Directories

| dir | count |
| --- | --- |
| src | 115 |
| tests | 101 |
| tests_integ | 57 |
| .github | 18 |
| scripts | 4 |
| docs | 3 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |
| .python-version | 1 |
| AGENTS.md | 1 |
| CHANGELOG.md | 1 |
| CODE-OF-CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE.txt | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 263 |
| .md | 22 |
| .yml | 14 |
| .typed | 3 |
| [no-ext] | 3 |
| .txt | 2 |
| .ipynb | 1 |
| .j2 | 1 |
| .toml | 1 |
| .yaml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
