# awslabs/mcp

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/awslabs/mcp |
| local path | sources/awslabs__mcp |
| HEAD | ea55b31 |
| stars/forks | 9289 / 1584 |
| language | Python |
| license |  |
| pushedAt | 2026-06-18T00:22:22Z |
| trendScore / priorityScore | 164 / 516 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 500 | src/healthlake-mcp-server/examples/README.md, src/lambda-tool-mcp-server/examples/README.md, samples/mcp-integration-with-kb/README.md |
| MCP / agent interoperability | 500 | src/healthlake-mcp-server/examples/README.md, src/lambda-tool-mcp-server/examples/README.md, src/billing-cost-management-mcp-server/awslabs/billing_cost_management_mcp_server/prompts/README.md |
| Security / supply chain | 500 | src/lambda-tool-mcp-server/examples/README.md, samples/stepfunctions-tool-mcp-server/README.md, src/dynamodb-mcp-server/tests/repo_generation_tool/fixtures/valid_schemas/elearning_platform/README.md |
| Database / data infrastructure | 370 | samples/mcp-integration-with-kb/README.md, src/dynamodb-mcp-server/tests/repo_generation_tool/fixtures/valid_schemas/elearning_platform/README.md, src/dynamodb-mcp-server/tests/repo_generation_tool/fixtures/valid_schemas/README.md |
| Developer tools / DX | 279 | src/healthlake-mcp-server/examples/README.md, src/lambda-tool-mcp-server/examples/README.md, samples/mcp-integration-with-kb/README.md |
| Coding agent / software automation | 235 | src/ecs-mcp-server/tests/llm_testing/README.md, src/amazon-bedrock-agentcore-mcp-server/README.md, src/amazon-kendra-index-mcp-server/README.md |
| AI agent / orchestration | 185 | src/lambda-tool-mcp-server/examples/README.md, samples/stepfunctions-tool-mcp-server/README.md, src/bedrock-kb-retrieval-mcp-server/tests/README.md |
| Observability / evaluation | 167 | samples/stepfunctions-tool-mcp-server/README.md, src/dynamodb-mcp-server/tests/repo_generation_tool/fixtures/valid_schemas/deals_app/README.md, src/dynamodb-mcp-server/tests/repo_generation_tool/fixtures/valid_schemas/elearning_platform/README.md |
| RAG / retrieval / knowledge | 83 | samples/mcp-integration-with-kb/README.md, src/bedrock-kb-retrieval-mcp-server/tests/README.md, src/dynamodb-mcp-server/tests/repo_generation_tool/fixtures/valid_schemas/elearning_platform/README.md |
| Frontend / app framework | 23 | src/aws-knowledge-mcp-server/README.md, src/aws-serverless-mcp-server/awslabs/aws_serverless_mcp_server/template/templates/README.md, src/aws-serverless-mcp-server/README.md |
| Data / ML platform | 20 | src/dynamodb-mcp-server/tests/repo_generation_tool/fixtures/valid_schemas/deals_app/README.md, src/aws-dataprocessing-mcp-server/README.md, src/aws-healthomics-mcp-server/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 3472 |
| manifests | 40 |
| docs | 421 |
| tests | 1373 |
| ci/ops | 81 |
| spec artifacts | 48 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Open source MCP servers for AWS | Open source MCP servers for AWS / Table of Contents / What is the Model Context Protocol (MCP) and how does it work with MCP Servers for AWS? / Open source MCP servers for AWS Transport Mechanisms / Supported transport mechanisms / Server Sent Events Support Removal / Why MCP Servers for AWS? / Available MCP Servers: Quick Installation / 🚀 Getting Started with AWS / Browse by What You're Building | Open source MCP servers for AWS A suite of specialized MCP servers that help you get the most out of AWS, wherever you use MCP. ! GitHub https //img.shields.io/badge/github awslabs/mcp blue.svg?style=flat&logo=github https //github.com/awslabs/mcp ! License https //img.shields.io/badge/license Apache 2.0 brightgreen LICENSE ! Codecov https //img.shields.io/codecov/c/github/awslabs/mcp https //app.codecov.io/gh/awslabs/mcp ! OSSF Scorecard Score https //img.shields.io/ossf scorecard/github.com/awslabs/mcp https //scorecard.dev/viewer/?uri=github.com/awslabs/mcp !TIP The Agent Toolkit for AWS https //aws.amazon.com/about aws/whats new/2026/05/agent toolkit/ is now live! The Agent Toolkit for A |


## Key Files

### Manifests

- src/healthlake-mcp-server/examples/README.md
- src/lambda-tool-mcp-server/examples/README.md
- src/billing-cost-management-mcp-server/awslabs/billing_cost_management_mcp_server/prompts/README.md
- samples/mcp-integration-with-kb/README.md
- samples/mcp-integration-with-nova-canvas/README.md
- samples/stepfunctions-tool-mcp-server/README.md
- src/amazon-sns-sqs-mcp-server/tests/README.md
- src/aws-serverless-mcp-server/tests/README.md
- src/bedrock-kb-retrieval-mcp-server/tests/README.md
- src/billing-cost-management-mcp-server/tests/README.md
- src/dynamodb-mcp-server/tests/repo_generation_tool/fixtures/valid_schemas/deals_app/README.md
- src/dynamodb-mcp-server/tests/repo_generation_tool/fixtures/valid_schemas/ecommerce_app/README.md
- src/dynamodb-mcp-server/tests/repo_generation_tool/fixtures/valid_schemas/elearning_platform/README.md
- src/dynamodb-mcp-server/tests/repo_generation_tool/fixtures/valid_schemas/food_delivery_app/README.md
- src/dynamodb-mcp-server/tests/repo_generation_tool/fixtures/valid_schemas/gaming_leaderboard/README.md
- src/dynamodb-mcp-server/tests/repo_generation_tool/fixtures/valid_schemas/package_delivery_app/README.md
- src/dynamodb-mcp-server/tests/repo_generation_tool/fixtures/valid_schemas/README.md
- src/dynamodb-mcp-server/tests/repo_generation_tool/fixtures/valid_schemas/saas_app/README.md
- src/dynamodb-mcp-server/tests/repo_generation_tool/fixtures/valid_schemas/social_media_app/README.md
- src/dynamodb-mcp-server/tests/repo_generation_tool/fixtures/valid_schemas/user_analytics/README.md


### Spec / Docs / Prompt Artifacts

- src/billing-cost-management-mcp-server/awslabs/billing_cost_management_mcp_server/prompts/README.md
- src/dynamodb-mcp-server/AGENTS.md
- src/aurora-dsql-mcp-server/skills/dsql-skill/mcp/platforms/gemini.md
- src/cloudwatch-applicationsignals-mcp-server/evals/requirements.txt
- src/billing-cost-management-mcp-server/tests/prompts/__init__.py
- src/billing-cost-management-mcp-server/tests/prompts/test_prompts.py
- src/openapi-mcp-server/tests/prompts/standalone/test_operation_prompt.py
- src/openapi-mcp-server/tests/prompts/standalone/test_prompt_arguments.py
- src/openapi-mcp-server/tests/prompts/standalone/test_secure_operation_prompt.py
- src/openapi-mcp-server/tests/prompts/test_mcp_prompt_manager_integration.py
- src/openapi-mcp-server/tests/prompts/test_mcp_prompt_manager.py
- src/openapi-mcp-server/tests/prompts/test_models_dict_method.py
- src/openapi-mcp-server/tests/prompts/test_operation_prompts_extended.py
- src/openapi-mcp-server/tests/prompts/test_prompt_manager_additional.py
- src/openapi-mcp-server/tests/prompts/test_prompt_manager_comprehensive.py
- src/openapi-mcp-server/tests/prompts/test_prompt_manager_coverage.py
- src/openapi-mcp-server/tests/prompts/test_prompt_message_format.py
- src/openapi-mcp-server/tests/prompts/test_prompt_registration.py
- src/aws-iot-sitewise-mcp-server/awslabs/aws_iot_sitewise_mcp_server/prompts/__init__.py
- src/aws-iot-sitewise-mcp-server/awslabs/aws_iot_sitewise_mcp_server/prompts/anomaly_detection_workflow.py


### Agent Instruction Files

- src/billing-cost-management-mcp-server/awslabs/billing_cost_management_mcp_server/prompts/README.md
- src/dynamodb-mcp-server/AGENTS.md
- src/aurora-dsql-mcp-server/skills/dsql-skill/mcp/platforms/gemini.md
- src/billing-cost-management-mcp-server/tests/prompts/__init__.py
- src/billing-cost-management-mcp-server/tests/prompts/test_prompts.py
- src/openapi-mcp-server/tests/prompts/standalone/test_operation_prompt.py
- src/openapi-mcp-server/tests/prompts/standalone/test_prompt_arguments.py
- src/openapi-mcp-server/tests/prompts/standalone/test_secure_operation_prompt.py
- src/openapi-mcp-server/tests/prompts/test_mcp_prompt_manager_integration.py
- src/openapi-mcp-server/tests/prompts/test_mcp_prompt_manager.py
- src/openapi-mcp-server/tests/prompts/test_models_dict_method.py
- src/openapi-mcp-server/tests/prompts/test_operation_prompts_extended.py
- src/openapi-mcp-server/tests/prompts/test_prompt_manager_additional.py
- src/openapi-mcp-server/tests/prompts/test_prompt_manager_comprehensive.py
- src/openapi-mcp-server/tests/prompts/test_prompt_manager_coverage.py


## Top Directories

| dir | count |
| --- | --- |
| src | 3278 |
| docusaurus | 95 |
| .github | 44 |
| samples | 18 |
| docs | 10 |
| testing | 6 |
| scripts | 4 |
| .devcontainer | 1 |
| .gitignore | 1 |
| .gitleaks.toml | 1 |
| .pre-commit-config.yaml | 1 |
| .python-version | 1 |
| .ruff.toml | 1 |
| .secrets.baseline | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 2340 |
| .md | 419 |
| [no-ext] | 287 |
| .json | 99 |
| .sh | 90 |
| .toml | 73 |
| .txt | 69 |
| .yml | 33 |
| .svg | 12 |
| .j2 | 10 |
| .template | 9 |
| .yaml | 8 |
| .css | 5 |
| .example | 3 |
| .typed | 3 |
| .baseline | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
