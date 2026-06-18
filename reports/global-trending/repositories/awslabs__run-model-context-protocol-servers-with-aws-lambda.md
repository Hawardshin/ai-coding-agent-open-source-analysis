# awslabs/run-model-context-protocol-servers-with-aws-lambda

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/awslabs/run-model-context-protocol-servers-with-aws-lambda |
| local path | sources/awslabs__run-model-context-protocol-servers-with-aws-lambda |
| HEAD | fcfba7a |
| stars/forks | 373 / 46 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T19:48:29Z |
| trendScore / priorityScore | 158 / 415 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | examples/servers/mcpdoc/README.md, examples/servers/auth/README.md, examples/servers/book-search/README.md |
| Security / supply chain | 263 | examples/servers/auth/README.md, examples/servers/book-search/README.md, examples/servers/dad-jokes/README.md |
| Developer tools / DX | 179 | examples/servers/mcpdoc/README.md, README.md, examples/chatbots/typescript/package.json |
| Cloud native / infrastructure | 163 | examples/servers/book-search/README.md, examples/servers/dad-jokes/README.md, examples/servers/dictionary/README.md |
| AI agent / orchestration | 57 | examples/servers/mcpdoc/README.md, examples/chatbots/python/requirements.txt, examples/chatbots/typescript/package.json |
| Data / ML platform | 12 | pipeline/README.md, pipeline/package.json |
| Coding agent / software automation | 4 | README.md |
| Database / data infrastructure | 2 | README.md |
| Observability / evaluation | 1 | e2e_tests/python/tool_call_evaluator.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontendStack, infra, infraOps, llmFramework, mcp, observability, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 207 |
| manifests | 40 |
| docs | 20 |
| tests | 17 |
| ci/ops | 9 |
| spec artifacts | 14 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Run Model Context Protocol (MCP) servers with AWS Lambda | Run Model Context Protocol (MCP) servers with AWS Lambda / Determine your server parameters / Passing credentials and other secrets to the MCP server / Retrieve API key from Secrets Manager / Get AWS credentials from Lambda execution role to pass to subprocess / Get AWS credentials from Lambda execution role to pass to subprocess / Write credentials to disk as default profile / Use API Gateway / Create OAuth client provider here / Use Bedrock AgentCore Gateway | Run Model Context Protocol MCP servers with AWS Lambda ! PyPI Downloads https //img.shields.io/pypi/dm/run mcp servers with aws lambda?style=for the badge&label=PyPi%20Downloads&color=blue https //pypi.org/project/run mcp servers with aws lambda/ ! NPM Downloads https //img.shields.io/npm/dm/%40aws%2Frun mcp servers with aws lambda?style=for the badge&label=NPM%20Downloads&color=blue https //www.npmjs.com/package/@aws/run mcp servers with aws lambda This project enables you to run Model Context Protocol https //modelcontextprotocol.io stdio based servers in AWS Lambda functions. Currently, most implementations of MCP servers and clients are entirely local on a single machine. A desktop appli |


## Key Files

### Manifests

- examples/servers/mcpdoc/README.md
- examples/servers/auth/README.md
- examples/servers/book-search/README.md
- examples/servers/cat-facts/README.md
- examples/servers/dad-jokes/README.md
- examples/servers/dictionary/README.md
- examples/servers/dog-facts/README.md
- examples/servers/sns-sqs/README.md
- examples/servers/time/README.md
- examples/servers/weather-alerts/README.md
- examples/servers/zen/README.md
- AGENTS.md
- pipeline/README.md
- README.md
- src/python/README.md
- examples/servers/mcpdoc/function/requirements.txt
- examples/servers/mcpdoc/requirements.txt
- examples/chatbots/python/requirements.txt
- examples/chatbots/typescript/package.json
- examples/chatbots/typescript/tsconfig.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- examples/servers/mcpdoc/function/requirements.txt
- examples/servers/mcpdoc/requirements.txt
- examples/chatbots/python/requirements.txt
- examples/servers/book-search/function/requirements.txt
- examples/servers/book-search/requirements.txt
- examples/servers/dad-jokes/function/requirements.txt
- examples/servers/dad-jokes/requirements.txt
- examples/servers/sns-sqs/function/requirements.txt
- examples/servers/sns-sqs/requirements.txt
- examples/servers/time/function/requirements.txt
- examples/servers/time/requirements.txt
- examples/servers/zen/requirements.txt
- e2e_tests/python/requirements.txt


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| examples | 99 |
| src | 50 |
| e2e_tests | 23 |
| .github | 10 |
| pipeline | 9 |
| scripts | 2 |
| .gitignore | 1 |
| .mergify.yml | 1 |
| .pre-commit-config.yaml | 1 |
| .versionrc | 1 |
| AGENTS.md | 1 |
| CHANGELOG.md | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .json | 50 |
| .py | 45 |
| .ts | 42 |
| .md | 20 |
| .txt | 13 |
| [no-ext] | 12 |
| .yml | 11 |
| .sh | 8 |
| .toml | 2 |
| .yaml | 2 |
| .js | 1 |
| .mjs | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
