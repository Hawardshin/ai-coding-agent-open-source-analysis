# google-gemini/gemini-cli

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/google-gemini/gemini-cli |
| local path | sources/google-gemini__gemini-cli |
| HEAD | 1d2adf7 |
| stars/forks | 105365 / 14098 |
| language | TypeScript |
| license | Apache-2.0 |
| pushedAt | 2026-06-17T23:00:59Z |
| trendScore / priorityScore | 200 / 528 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | evals/README.md, packages/cli/src/acp/README.md, README.md |
| Developer tools / DX | 500 | packages/cli/src/commands/extensions/examples/mcp-server/README.md, packages/cli/src/commands/extensions/examples/policies/README.md, packages/cli/src/commands/extensions/examples/themes-example/README.md |
| MCP / agent interoperability | 409 | packages/cli/src/commands/extensions/examples/mcp-server/README.md, README.md, GEMINI.md |
| Security / supply chain | 184 | packages/cli/src/commands/extensions/examples/policies/README.md, README.md, packages/vscode-ide-companion/README.md |
| Cloud native / infrastructure | 126 | packages/cli/package.json, Dockerfile, package.json |
| Observability / evaluation | 112 | evals/README.md, README.md, .github/workflows/eval-pr.yml |
| Frontend / app framework | 62 | evals/README.md, packages/cli/GEMINI.md, GEMINI.md |
| Coding agent / software automation | 39 | evals/README.md, README.md, packages/vscode-ide-companion/README.md |
| Database / data infrastructure | 10 | README.md, docs/cli/model-steering.md, docs/cli/plan-mode.md |
| RAG / retrieval / knowledge | 6 | GEMINI.md, packages/sdk/GEMINI.md, docs/cli/settings.md |
| Data / ML platform | 5 | .github/workflows/eval.yml, docs/cli/trusted-folders.md, docs/cli/tutorials/web-tools.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, .NET |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2836 |
| manifests | 40 |
| docs | 157 |
| tests | 1073 |
| ci/ops | 50 |
| spec artifacts | 25 |
| agent instruction files | 19 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Gemini CLI | Gemini CLI / 🚀 Why Gemini CLI? / 📦 Installation / Quick Install / Using npx (no installation required) / Create and activate a new environment / Install Gemini CLI globally via npm (inside the environment) / Release Channels / Preview / Stable | Gemini CLI ! Gemini CLI CI https //github.com/google gemini/gemini cli/actions/workflows/ci.yml/badge.svg https //github.com/google gemini/gemini cli/actions/workflows/ci.yml ! Gemini CLI E2E Chained https //github.com/google gemini/gemini cli/actions/workflows/chained e2e.yml/badge.svg https //github.com/google gemini/gemini cli/actions/workflows/chained e2e.yml ! Version https //img.shields.io/npm/v/@google/gemini cli https //www.npmjs.com/package/@google/gemini cli ! License https //img.shields.io/github/license/google gemini/gemini cli https //github.com/google gemini/gemini cli/blob/main/LICENSE ! View Code Wiki https //assets.codewiki.google/readme badge/static.svg https //codewiki.goo |


## Key Files

### Manifests

- packages/cli/src/commands/extensions/examples/mcp-server/README.md
- packages/cli/src/commands/extensions/examples/policies/README.md
- packages/cli/src/commands/extensions/examples/themes-example/README.md
- evals/README.md
- packages/cli/src/acp/README.md
- tools/gemini-cli-bot/README.md
- packages/cli/GEMINI.md
- perf-tests/README.md
- README.md
- packages/a2a-server/README.md
- packages/sdk/README.md
- packages/vscode-ide-companion/README.md
- GEMINI.md
- packages/test-utils/GEMINI.md
- packages/a2a-server/GEMINI.md
- packages/cli/src/commands/extensions/examples/mcp-server/package.json
- packages/core/GEMINI.md
- packages/devtools/GEMINI.md
- packages/sdk/GEMINI.md
- packages/vscode-ide-companion/GEMINI.md


### Spec / Docs / Prompt Artifacts

- packages/cli/GEMINI.md
- GEMINI.md
- packages/test-utils/GEMINI.md
- packages/a2a-server/GEMINI.md
- packages/core/GEMINI.md
- packages/devtools/GEMINI.md
- packages/sdk/GEMINI.md
- packages/vscode-ide-companion/GEMINI.md
- packages/core/src/prompts/mcp-prompts.test.ts
- packages/core/src/prompts/prompt-registry.test.ts
- packages/core/src/prompts/promptProvider.test.ts
- packages/core/src/prompts/snippets-memory.test.ts
- packages/core/src/prompts/utils.test.ts
- .github/workflows/eval.yml
- packages/core/src/prompts/mcp-prompts.ts
- packages/core/src/prompts/prompt-registry.ts
- packages/core/src/prompts/promptProvider.ts
- packages/core/src/prompts/snippets.legacy.ts
- packages/core/src/prompts/snippets.ts
- packages/core/src/prompts/utils.ts


### Agent Instruction Files

- packages/cli/GEMINI.md
- GEMINI.md
- packages/test-utils/GEMINI.md
- packages/a2a-server/GEMINI.md
- packages/core/GEMINI.md
- packages/devtools/GEMINI.md
- packages/sdk/GEMINI.md
- packages/vscode-ide-companion/GEMINI.md
- packages/core/src/prompts/mcp-prompts.test.ts
- packages/core/src/prompts/prompt-registry.test.ts
- packages/core/src/prompts/promptProvider.test.ts
- packages/core/src/prompts/snippets-memory.test.ts
- packages/core/src/prompts/utils.test.ts
- packages/core/src/prompts/mcp-prompts.ts
- packages/core/src/prompts/prompt-registry.ts


## Top Directories

| dir | count |
| --- | --- |
| packages | 2307 |
| integration-tests | 120 |
| docs | 99 |
| .github | 72 |
| scripts | 65 |
| .gemini | 46 |
| evals | 45 |
| tools | 18 |
| perf-tests | 12 |
| memory-tests | 10 |
| .gcp | 5 |
| .vscode | 4 |
| third_party | 4 |
| sea | 2 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 1694 |
| .tsx | 418 |
| .md | 151 |
| .snap | 120 |
| .svg | 98 |
| .responses | 72 |
| .yml | 64 |
| .json | 59 |
| .js | 57 |
| [no-ext] | 26 |
| .toml | 24 |
| .cjs | 11 |
| .sh | 9 |
| .html | 8 |
| .sb | 6 |
| .mjs | 3 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
