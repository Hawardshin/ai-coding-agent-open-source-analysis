# kelos-dev/kelos

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/kelos-dev/kelos |
| local path | sources/kelos-dev__kelos |
| HEAD | cf0f76b |
| stars/forks | 222 / 27 |
| language | Go |
| license |  |
| pushedAt | 2026-06-18T00:27:40Z |
| trendScore / priorityScore | 152 / 427 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | examples/05-task-with-agentconfig/README.md, examples/README.md, examples/01-simple-task/README.md |
| Security / supply chain | 500 | examples/05-task-with-agentconfig/README.md, examples/01-simple-task/README.md, examples/02-task-with-workspace/README.md |
| Cloud native / infrastructure | 458 | examples/05-task-with-agentconfig/README.md, examples/README.md, examples/01-simple-task/README.md |
| Coding agent / software automation | 303 | examples/05-task-with-agentconfig/README.md, examples/09-bedrock-credentials/README.md, examples/11-taskspawner-linear-webhook/README.md |
| Developer tools / DX | 277 | examples/02-task-with-workspace/README.md, examples/07-task-pipeline/README.md, examples/08-task-with-kelos-skill/README.md |
| MCP / agent interoperability | 75 | kanon-development/README.md, README.md, self-development/README.md |
| Observability / evaluation | 47 | examples/README.md, examples/13-taskspawner-generic-webhook/README.md, README.md |
| Data / ML platform | 26 | examples/README.md, examples/07-task-pipeline/README.md, kanon-development/README.md |
| Frontend / app framework | 10 | kanon-development/README.md, README.md, self-development/README.md |
| Database / data infrastructure | 8 | docs/reference.md, internal/cli/mcp_test.go |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, sdk-api, security, securityTooling |
| stacks | Go, Ruby |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 416 |
| manifests | 31 |
| docs | 27 |
| tests | 102 |
| ci/ops | 21 |
| spec artifacts | 7 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | ... investigate ... | How It Works / Core Primitives / Why Kelos? / Quick Start / Prerequisites / 1. Install the CLI / 2. Install Kelos / Helm Install / 3. Initialize Your Config / 4. Run Your First Task | <h1 align="center" Kelos</h1 <p align="center" <strong Orchestrate autonomous AI coding agents on Kubernetes.</strong </p <p align="center" <a href="https //github.com/kelos dev/kelos/actions/workflows/ci.yaml" <img src="https //github.com/kelos dev/kelos/actions/workflows/ci.yaml/badge.svg" alt="CI" </a <a href="https //github.com/kelos dev/kelos/releases/latest" <img src="https //img.shields.io/github/v/release/kelos dev/kelos" alt="Release" </a <a href="https //github.com/kelos dev/kelos" <img src="https //img.shields.io/github/stars/kelos dev/kelos?style=flat" alt="GitHub Stars" </a <a href="https //github.com/kelos dev/kelos" <img src="https //img.shields.io/github/go mod/go version/kel |


## Key Files

### Manifests

- examples/05-task-with-agentconfig/README.md
- examples/README.md
- examples/01-simple-task/README.md
- examples/02-task-with-workspace/README.md
- examples/03-taskspawner-github-issues/README.md
- examples/04-taskspawner-cron/README.md
- examples/06-fork-workflow/README.md
- examples/07-task-pipeline/README.md
- examples/08-task-with-kelos-skill/README.md
- examples/09-bedrock-credentials/README.md
- examples/10-taskspawner-github-webhook/README.md
- examples/11-taskspawner-linear-webhook/README.md
- examples/13-taskspawner-generic-webhook/README.md
- AGENTS.md
- kanon-development/README.md
- README.md
- self-development/README.md
- internal/manifests/charts/kelos/README.md
- claude-code/Dockerfile
- codex/Dockerfile


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- examples/05-task-with-agentconfig/task.yaml
- examples/01-simple-task/task.yaml
- examples/02-task-with-workspace/task.yaml
- examples/08-task-with-kelos-skill/task.yaml
- examples/09-bedrock-credentials/task.yaml
- skills/kelos/references/task.yaml


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| internal | 173 |
| pkg | 56 |
| examples | 52 |
| test | 23 |
| cmd | 22 |
| self-development | 15 |
| api | 12 |
| kanon-development | 12 |
| .github | 11 |
| hack | 9 |
| skills | 7 |
| docs | 3 |
| claude-code | 2 |
| codex | 2 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 264 |
| .yaml | 95 |
| .md | 27 |
| [no-ext] | 14 |
| .sh | 12 |
| .mod | 1 |
| .rb | 1 |
| .sum | 1 |
| .txt | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
