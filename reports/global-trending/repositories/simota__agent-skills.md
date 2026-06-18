# simota/agent-skills

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/simota/agent-skills |
| local path | sources/simota__agent-skills |
| HEAD | b27a274 |
| stars/forks | 52 / 11 |
| language | HTML |
| license |  |
| pushedAt | 2026-06-18T00:03:06Z |
| trendScore / priorityScore | 143 / 464 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | AGENTS.md, _common/apex-dash/sample/README.md, _common/apex-dash/README.md |
| Security / supply chain | 500 | AGENTS.md, _templates/design-feedback-kit/README.md, _common/CLI_COMPATIBILITY.md |
| Observability / evaluation | 261 | _common/apex-dash/README.md, _common/SECURITY.md, attest/reference/llm-verification-guardrails.md |
| Developer tools / DX | 235 | AGENTS.md, _common/apex-dash/sample/README.md, _common/apex-dash/README.md |
| Frontend / app framework | 231 | _common/apex-dash/sample/README.md, _common/apex-dash/README.md, _templates/design-feedback-kit/README.md |
| RAG / retrieval / knowledge | 217 | architect/reference/agent-specification-anti-patterns.md, architect/reference/agent-categories.md, architect/reference/agent-evaluation-guardrails.md |
| Coding agent / software automation | 204 | AGENTS.md, _common/apex-dash/README.md, .loops/skill-update/README.md |
| MCP / agent interoperability | 178 | AGENTS.md, _templates/design-feedback-kit/mockups/README.md, _templates/design-feedback-kit/README.md |
| Database / data infrastructure | 137 | _templates/design-feedback-kit/README.md, _common/CLI_COMPATIBILITY.md, attest/reference/fix-prompt-generation.md |
| Cloud native / infrastructure | 134 | _common/apex-dash/sample/README.md, _common/apex-dash/sample/vite.config.ts, _common/CLI_COMPATIBILITY.md |
| Data / ML platform | 79 | _common/apex-dash/README.md, architect/reference/agent-categories.md, artisan/reference/ai-frontend-patterns.md |
| Local LLM / inference | 2 | native/reference/adb-cli.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1718 |
| manifests | 15 |
| docs | 1654 |
| tests | 0 |
| ci/ops | 27 |
| spec artifacts | 3 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | AI Agent Skills | AI Agent Skills / Features / Quick Start / Installation / For Claude Code / For other platforms / Usage / Overview / Agent Catalog / Orchestration | AI Agent Skills ! License MIT https //img.shields.io/badge/License MIT yellow.svg https //opensource.org/licenses/MIT ! Agents https //img.shields.io/badge/Agents 125 blue.svg ! PRs Welcome https //img.shields.io/badge/PRs welcome brightgreen.svg CONTRIBUTING.md A skill collection that enables collaborative development with a team of specialized AI agents. Features 145 Specialized Agents Covering bug investigation, testing, security, UI/UX, AI/ML, observability, and more Nexus Orchestrator Analyzes tasks and automatically designs optimal agent chains Platform Agnostic Works with Claude Code, Codex CLI, Antigravity CLI, and others Quick Start Installation Usage Overview This repository contai |


## Key Files

### Manifests

- AGENTS.md
- _common/apex-dash/sample/README.md
- README.md
- _common/apex-dash/README.md
- _templates/design-feedback-kit/mockups/README.md
- _templates/design-feedback-kit/README.md
- _templates/learning-loop-kit/base/artifacts/README.md
- _templates/learning-loop-kit/base/README.md
- _templates/learning-loop-kit/README.md
- .loops/skill-citations/README.md
- .loops/skill-update/README.md
- CLAUDE.md
- _common/apex-dash/sample/package.json
- _common/apex-dash/sample/tsconfig.json
- _common/apex-dash/sample/vite.config.ts


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- _common/apex-dash/DESIGN.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| _common | 76 |
| nexus | 51 |
| _templates | 29 |
| harvest | 27 |
| shift | 25 |
| guardian | 23 |
| scout | 23 |
| judge | 22 |
| voyager | 22 |
| builder | 21 |
| gateway | 21 |
| zen | 21 |
| atlas | 20 |
| compete | 20 |


## Extension Distribution

| ext | count |
| --- | --- |
| .md | 1654 |
| .sh | 13 |
| .tsx | 11 |
| .ts | 8 |
| [no-ext] | 6 |
| .html | 5 |
| .py | 5 |
| .mmd | 4 |
| .yml | 4 |
| .json | 3 |
| .css | 2 |
| .js | 2 |
| .jsonl | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
