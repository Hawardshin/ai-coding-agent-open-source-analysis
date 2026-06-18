# apache/devlake

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/apache/devlake |
| local path | sources/apache__devlake |
| HEAD | 46c5c51 |
| stars/forks | 3039 / 764 |
| language | Go |
| license |  |
| pushedAt | 2026-06-16T15:23:42Z |
| trendScore / priorityScore | 135 / 392 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Database / data infrastructure | 209 | AGENTS.md, backend/plugins/q_dev/README.md, backend/python/README.md |
| Observability / evaluation | 163 | AGENTS.md, README.md, backend/plugins/gh-copilot/README.md |
| Cloud native / infrastructure | 145 | AGENTS.md, config-ui/README.md, README.md |
| Security / supply chain | 145 | AGENTS.md, config-ui/README.md, README.md |
| Frontend / app framework | 35 | AGENTS.md, config-ui/README.md, config-ui/package.json |
| Developer tools / DX | 33 | README.md, backend/plugins/gh-copilot/README.md, backend/python/README.md |
| Data / ML platform | 11 | backend/plugins/circleci/README.md, backend/plugins/gh-copilot/README.md, backend/plugins/linear/README.md |
| Coding agent / software automation | 6 | AGENTS.md, .github/workflows/go-checklist.json, backend/plugins/claude_code/tasks/api_client.go |
| AI agent / orchestration | 3 | AGENTS.md, backend/go.mod |
| MCP / agent interoperability | 1 |  |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python, Go |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 4262 |
| manifests | 40 |
| docs | 56 |
| tests | 1120 |
| ci/ops | 48 |
| spec artifacts | 3 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Apache DevLake | Apache DevLake / 🤔 What is Apache DevLake? / 🎯 What can be accomplished with Apache DevLake? / 👉 Live Demos / 💪 Supported Data Sources / 🚀 Getting Started / Installation / 🤓 Usage / 1. Set up DevLake / 2. Create a Blueprint | <! Licensed to the Apache Software Foundation ASF under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to You under the Apache License, Version 2.0 the "License" ; you may not use this file except in compliance with the License. You may obtain a copy of the License at http //www.apache.org/licenses/LICENSE 2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing |


## Key Files

### Manifests

- AGENTS.md
- config-ui/README.md
- README.md
- backend/core/models/domainlayer/README.md
- backend/plugins/argocd/README.md
- backend/plugins/azuredevops_go/README.md
- backend/plugins/circleci/README.md
- backend/plugins/customize/README.md
- backend/plugins/dbt/README.md
- backend/plugins/feishu/README.md
- backend/plugins/gh-copilot/README.md
- backend/plugins/gitee/README.md
- backend/plugins/gitextractor/README.md
- backend/plugins/github/README.md
- backend/plugins/gitlab/README.md
- backend/plugins/jenkins/README.md
- backend/plugins/jira/README.md
- backend/plugins/linear/README.md
- backend/plugins/linker/README.md
- backend/plugins/q_dev/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- backend/python/requirements.txt
- grafana/scripts/requirements.txt


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| backend | 3643 |
| config-ui | 397 |
| grafana | 129 |
| devops | 40 |
| .github | 26 |
| .devcontainer | 4 |
| e2e | 3 |
| resources | 3 |
| .asf.yaml | 1 |
| .codespellrc | 1 |
| .dockerignore | 1 |
| .editorconfig | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 2773 |
| .csv | 764 |
| .ts | 173 |
| .tsx | 156 |
| .json | 129 |
| .md | 54 |
| .yml | 43 |
| .py | 42 |
| .svg | 41 |
| [no-ext] | 25 |
| .example | 19 |
| .sh | 19 |
| .yaml | 4 |
| .toml | 3 |
| .txt | 3 |
| .js | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
