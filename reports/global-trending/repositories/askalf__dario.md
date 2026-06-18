# askalf/dario

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/askalf/dario |
| local path | sources/askalf__dario |
| HEAD | 9963d35 |
| stars/forks | 278 / 43 |
| language | JavaScript |
| license |  |
| pushedAt | 2026-06-17T23:28:18Z |
| trendScore / priorityScore | 164 / 447 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 500 | README.md, reviews/README.md, Dockerfile |
| Security / supply chain | 409 | README.md, reviews/README.md, Dockerfile |
| AI agent / orchestration | 353 | README.md, CLAUDE.md, docs/mcp-server.md |
| Coding agent / software automation | 341 | README.md, CLAUDE.md, docs/mcp-server.md |
| Developer tools / DX | 330 | README.md, Dockerfile, docs/mcp-server.md |
| Database / data infrastructure | 155 | README.md, package.json, docs/research/system-prompt-classifier-study.md |
| MCP / agent interoperability | 88 | README.md, docs/mcp-server.md, docs/sub-agent.md |
| Local LLM / inference | 17 | README.md, package.json, docs/integrations/agent-compat.md |
| Data / ML platform | 14 | README.md, docs/research/system-prompt-classifier-study.md, test/overage-guard-e2e-live.mjs |
| Frontend / app framework | 3 | test/overage-guard-e2e-live.mjs, test/pool-sticky.mjs, test/scrub-content-keywords.mjs |
| Observability / evaluation | 3 | scripts/research/test-prompt-matrix.mjs, test/ensure-login-in-pool.mjs, test/pool-sticky.mjs |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 244 |
| manifests | 6 |
| docs | 42 |
| tests | 99 |
| ci/ops | 17 |
| spec artifacts | 2 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | 1. Install | 1. Install / 2. Log in to your Claude subscription (Pro, Max 5x, or Max 20x) / 3. Start the local proxy / 4. Point any Anthropic-compat tool at it / The interactive TUI / The deadline: 2026-06-15 / The money / The principle dario operates on / How it works, and how it stays working / What it routes | <p align="center" <h1 align="center" dario</h1 <p align="center" <strong Your Claude Pro/Max subscription works in exactly one place Claude Code.<br dario makes it work everywhere — at subscription pricing, not per token API bills.</strong </p </p <p align="center" <a href="https //www.npmjs.com/package/@askalf/dario" <img src="https //img.shields.io/npm/v/@askalf/dario?color=blue" alt="npm version" </a <a href="https //github.com/askalf/dario/actions/workflows/ci.yml" <img src="https //github.com/askalf/dario/actions/workflows/ci.yml/badge.svg" alt="CI" </a <a href="https //github.com/askalf/dario/actions/workflows/codeql.yml" <img src="https //github.com/askalf/dario/actions/workflows/code |


## Key Files

### Manifests

- README.md
- reviews/README.md
- CLAUDE.md
- Dockerfile
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- reviews/PROMPT.md


### Agent Instruction Files

- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| test | 99 |
| src | 49 |
| scripts | 25 |
| .github | 23 |
| docs | 21 |
| reviews | 6 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .mailmap | 1 |
| CHANGELOG.md | 1 |
| CLAUDE.md | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CODEOWNERS | 1 |
| CONTRIBUTING.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .mjs | 121 |
| .ts | 47 |
| .md | 42 |
| .yml | 19 |
| [no-ext] | 6 |
| .json | 5 |
| .cjs | 1 |
| .html | 1 |
| .sh | 1 |
| .yaml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
