# aws/agent-toolkit-for-aws

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/aws/agent-toolkit-for-aws |
| local path | sources/aws__agent-toolkit-for-aws |
| HEAD | 9ad8fe7 |
| stars/forks | 900 / 89 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T22:02:09Z |
| trendScore / priorityScore | 160 / 465 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | plugins/aws-agents-for-devsecops/README.md, plugins/aws-agents/README.md, README.md |
| Cloud native / infrastructure | 500 | plugins/aws-agents-for-devsecops/README.md, plugins/aws-agents/README.md, README.md |
| Database / data infrastructure | 500 | README.md, skills/README.md, plugins/aws-data-analytics/README.md |
| Security / supply chain | 257 | plugins/aws-agents-for-devsecops/README.md, README.md, skills/README.md |
| Developer tools / DX | 191 | plugins/aws-agents-for-devsecops/README.md, plugins/aws-agents/README.md, README.md |
| RAG / retrieval / knowledge | 188 | plugins/aws-core/README.md, plugins/aws-data-analytics/README.md, plugins/aws-agents-for-devsecops/examples/multi-space-walkthrough.md |
| Observability / evaluation | 90 | plugins/aws-agents-for-devsecops/README.md, plugins/aws-agents/README.md, README.md |
| MCP / agent interoperability | 75 | plugins/aws-agents-for-devsecops/README.md, plugins/aws-agents/README.md, README.md |
| Coding agent / software automation | 57 | plugins/aws-agents-for-devsecops/README.md, plugins/aws-agents/README.md, README.md |
| Frontend / app framework | 53 | plugins/aws-agents/README.md, skills/specialized-skills/aws-amplify/references/storage-backend.md, skills/specialized-skills/aws-amplify/references/storage-mobile.md |
| Data / ML platform | 25 | plugins/aws-data-analytics/README.md, skills/specialized-skills/database-skills/amazon-aurora-postgresql/references/express-create-migration-pgdump.md, skills/specialized-skills/database-skills/amazon-aurora-postgresql/references/express-create-migration.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 751 |
| manifests | 8 |
| docs | 666 |
| tests | 0 |
| ci/ops | 7 |
| spec artifacts | 2 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Agent Toolkit for AWS | Agent Toolkit for AWS / Quick start / Claude Code / Or from Claude's official marketplace: / Setup: / Codex / Cursor / Kiro / Other agents / What's included | Agent Toolkit for AWS ! License https //img.shields.io/badge/License Apache%202.0 blue.svg LICENSE ! Build https //github.com/aws/agent toolkit for aws/actions/workflows/build.yml/badge.svg https //github.com/aws/agent toolkit for aws/actions/workflows/build.yml ! Status https //img.shields.io/badge/status GA green.svg https //github.com/aws/agent toolkit for aws Help AI coding agents build, deploy, and manage applications on AWS. The Agent Toolkit for AWS gives AI coding agents the tools, knowledge, and guardrails they need to work with AWS services. It works with the coding agents developers already use — including Claude Code, Codex, Cursor, and Kiro. Quick start Claude Code The plugins a |


## Key Files

### Manifests

- plugins/aws-agents-for-devsecops/README.md
- plugins/aws-agents/README.md
- README.md
- skills/README.md
- plugins/aws-core/README.md
- plugins/aws-data-analytics/README.md
- skills/specialized-skills/database-skills/amazon-keyspaces/scripts/package.json
- skills/specialized-skills/database-skills/amazon-keyspaces/scripts/tsconfig.scripts.json


### Spec / Docs / Prompt Artifacts

- plugins/aws-core/skills/aws-serverless/references/architecture.md
- skills/core-skills/aws-serverless/references/architecture.md


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| skills | 473 |
| plugins | 250 |
| .github | 13 |
| .agents | 1 |
| .claude-plugin | 1 |
| .cursor-plugin | 1 |
| .editorconfig | 1 |
| .gitignore | 1 |
| .markdownlint-cli2.yaml | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |
| mise.toml | 1 |
| NOTICE | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .md | 666 |
| .json | 25 |
| .py | 22 |
| .yml | 11 |
| .ts | 10 |
| [no-ext] | 6 |
| .yaml | 4 |
| .csv | 2 |
| .js | 2 |
| .sh | 2 |
| .toml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
