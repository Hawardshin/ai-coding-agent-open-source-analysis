# gollem-dev/gollem

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/gollem-dev/gollem |
| local path | sources/gollem-dev__gollem |
| HEAD | f5dd652 |
| stars/forks | 190 / 11 |
| language | Go |
| license |  |
| pushedAt | 2026-06-17T01:14:04Z |
| trendScore / priorityScore | 141 / 404 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | examples/subagent_middleware/README.md, examples/README.md, docs/README.md |
| MCP / agent interoperability | 280 | examples/README.md, docs/README.md, README.md |
| Observability / evaluation | 91 | examples/README.md, docs/README.md, README.md |
| Security / supply chain | 81 | examples/subagent_middleware/README.md, strategy/planexec/README.md, CLAUDE.md |
| Developer tools / DX | 76 | CLAUDE.md, docs/llm.md, examples/mcp/main.go |
| RAG / retrieval / knowledge | 47 | examples/README.md, README.md, strategy/planexec/README.md |
| Frontend / app framework | 44 | docs/README.md, README.md, strategy/react/README.md |
| Database / data infrastructure | 22 | examples/README.md, README.md, strategy/planexec/README.md |
| Coding agent / software automation | 3 | CLAUDE.md, docs/plan-mode.md |
| Data / ML platform | 3 | docs/llm.md, docs/plan-mode.md |
| Cloud native / infrastructure | 1 | go.mod |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Go |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 187 |
| manifests | 11 |
| docs | 32 |
| tests | 58 |
| ci/ops | 5 |
| spec artifacts | 8 |
| agent instruction files | 8 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | 🤖 gollem [![Go Reference](https://pkg.go.dev/badge/github.com/gollem-dev/gollem.svg)](https://pkg.go.dev/github.com/gollem-dev/gollem) [![Test](https://github.com/gollem-dev/gollem/actions/workflows/test.yml/badge.svg)](https://github.com/gollem-dev/gollem/actions/workflows/test.yml) [![Lint](https://github.com/gollem-dev/gollem/actions/workflows/lint.yml/badge.svg)](https://github.com/gollem-dev/gollem/actions/workflows/lint.yml) [![Gosec](https://github.com/gollem-dev/gollem/actions/workflows/gosec.yml/badge.svg)](https://github.com/gollem-dev/gollem/actions/workflows/gosec.yml) [![Trivy](https://github.com/gollem-dev/gollem/actions/workflows/trivy.yml/badge.svg)](https://github.com/gollem-dev/gollem/actions/workflows/trivy.yml) | 🤖 gollem [![Go Reference](https://pkg.go.dev/badge/github.com/gollem-dev/gollem.svg)](https://pkg.go.dev/github.com/gollem-dev/gollem) [![Test](https://github.com/gollem-dev/gollem/actions/workflows/test.yml/badge.svg)](https://github.com/gollem-dev/gollem/actions/workflows/test.yml) [![Lint](https://github.com/gollem-dev/gollem/actions/workflows/lint.yml/badge.svg)](https://github.com/gollem-dev/gollem/actions/workflows/lint.yml) [![Gosec](https://github.com/gollem-dev/gollem/actions/workflows/gosec.yml/badge.svg)](https://github.com/gollem-dev/gollem/actions/workflows/gosec.yml) [![Trivy](https://github.com/gollem-dev/gollem/actions/workflows/trivy.yml/badge.svg)](https://github.com/gollem-dev/gollem/actions/workflows/trivy.yml) / Supported LLMs / Install / Quick Start / Features / Agent Framework / Tool Integration / Multimodal Input / Structured Output / Middleware | 🤖 gollem ! Go Reference https //pkg.go.dev/badge/github.com/gollem dev/gollem.svg https //pkg.go.dev/github.com/gollem dev/gollem ! Test https //github.com/gollem dev/gollem/actions/workflows/test.yml/badge.svg https //github.com/gollem dev/gollem/actions/workflows/test.yml ! Lint https //github.com/gollem dev/gollem/actions/workflows/lint.yml/badge.svg https //github.com/gollem dev/gollem/actions/workflows/lint.yml ! Gosec https //github.com/gollem dev/gollem/actions/workflows/gosec.yml/badge.svg https //github.com/gollem dev/gollem/actions/workflows/gosec.yml ! Trivy https //github.com/gollem dev/gollem/actions/workflows/trivy.yml/badge.svg https //github.com/gollem dev/gollem/actions/wor |


## Key Files

### Manifests

- examples/subagent_middleware/README.md
- examples/README.md
- docs/README.md
- examples/json_schema/README.md
- README.md
- strategy/planexec/README.md
- strategy/react/README.md
- strategy/reflexion/README.md
- CLAUDE.md
- go.mod
- go.sum


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- strategy/planexec/prompts/conclusion.md
- strategy/planexec/prompts/execute.md
- strategy/planexec/prompts/plan.md
- strategy/planexec/prompts/reflect.md
- .claude/settings.json
- .claude/skills/test-with-gt/SKILL.md
- .claude/rules/error-handling.md


### Agent Instruction Files

- CLAUDE.md
- strategy/planexec/prompts/conclusion.md
- strategy/planexec/prompts/execute.md
- strategy/planexec/prompts/plan.md
- strategy/planexec/prompts/reflect.md
- .claude/settings.json
- .claude/skills/test-with-gt/SKILL.md
- .claude/rules/error-handling.md


## Top Directories

| dir | count |
| --- | --- |
| strategy | 40 |
| llm | 39 |
| trace | 19 |
| examples | 15 |
| docs | 13 |
| .github | 6 |
| templates | 5 |
| .claude | 3 |
| mcp | 3 |
| middleware | 3 |
| internal | 2 |
| testdata | 2 |
| .gitignore | 1 |
| .golangci.yml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 142 |
| .md | 32 |
| .yml | 7 |
| [no-ext] | 2 |
| .json | 1 |
| .mod | 1 |
| .sh | 1 |
| .sum | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
