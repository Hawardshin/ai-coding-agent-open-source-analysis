# anthropics/claude-code

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/anthropics/claude-code |
| local path | sources/anthropics__claude-code |
| HEAD | 0047022 |
| stars/forks | 133037 / 21517 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T22:07:41Z |
| trendScore / priorityScore | 210 / 520 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | plugins/agent-sdk-dev/README.md, plugins/security-guidance/README.md, plugins/README.md |
| Security / supply chain | 435 | plugins/agent-sdk-dev/README.md, plugins/frontend-design/README.md, plugins/security-guidance/README.md |
| Developer tools / DX | 273 | plugins/agent-sdk-dev/README.md, plugins/security-guidance/README.md, plugins/README.md |
| MCP / agent interoperability | 256 | plugins/README.md, plugins/plugin-dev/README.md, plugins/plugin-dev/skills/plugin-structure/README.md |
| Coding agent / software automation | 188 | examples/mdm/README.md, examples/settings/README.md, plugins/agent-sdk-dev/README.md |
| Cloud native / infrastructure | 85 | plugins/security-guidance/README.md, plugins/hookify/README.md, plugins/ralph-wiggum/README.md |
| Frontend / app framework | 50 | plugins/frontend-design/README.md, plugins/README.md, plugins/plugin-dev/skills/agent-development/examples/agent-creation-prompt.md |
| Observability / evaluation | 45 | plugins/security-guidance/README.md, plugins/README.md, plugins/feature-dev/README.md |
| Database / data infrastructure | 31 | plugins/feature-dev/README.md, plugins/plugin-dev/README.md, plugins/plugin-dev/skills/agent-development/examples/complete-agent-examples.md |
| Data / ML platform | 6 | README.md, plugins/plugin-dev/skills/plugin-structure/examples/advanced-plugin.md, plugins/security-guidance/hooks/patterns.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 202 |
| manifests | 21 |
| docs | 102 |
| tests | 0 |
| ci/ops | 13 |
| spec artifacts | 4 |
| agent instruction files | 4 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Claude Code | Claude Code / Get started / Plugins / Reporting Bugs / Connect on Discord / Data collection, usage, and retention / How we use your data / Privacy safeguards | Claude Code ! https //img.shields.io/badge/Node.js 18%2B brightgreen?style=flat square ! npm https //www.npmjs.com/package/@anthropic ai/claude code npm https //img.shields.io/npm/v/@anthropic ai/claude code.svg?style=flat square Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows all through natural language commands. Use it in your terminal, IDE, or tag @claude on Github. Learn more in the official documentation https //code.claude.com/docs/en/overview . <img src="./demo.gif" / Get started !NOTE Installation via npm is deprecated. Use one of th |


## Key Files

### Manifests

- examples/mdm/README.md
- examples/settings/README.md
- plugins/agent-sdk-dev/README.md
- plugins/frontend-design/README.md
- plugins/security-guidance/README.md
- plugins/README.md
- README.md
- plugins/claude-opus-4-5-migration/README.md
- plugins/code-review/README.md
- plugins/commit-commands/README.md
- plugins/explanatory-output-style/README.md
- plugins/feature-dev/README.md
- plugins/hookify/README.md
- plugins/learning-output-style/README.md
- plugins/plugin-dev/README.md
- plugins/plugin-dev/skills/command-development/README.md
- plugins/plugin-dev/skills/hook-development/scripts/README.md
- plugins/plugin-dev/skills/plugin-structure/README.md
- plugins/pr-review-toolkit/README.md
- plugins/ralph-wiggum/README.md


### Spec / Docs / Prompt Artifacts

- .github/workflows/claude.yml
- .claude/commands/commit-push-pr.md
- .claude/commands/dedupe.md
- .claude/commands/triage-issue.md


### Agent Instruction Files

- .github/workflows/claude.yml
- .claude/commands/commit-push-pr.md
- .claude/commands/dedupe.md
- .claude/commands/triage-issue.md


## Top Directories

| dir | count |
| --- | --- |
| plugins | 149 |
| .github | 17 |
| examples | 12 |
| scripts | 8 |
| .claude | 3 |
| .devcontainer | 3 |
| .claude-plugin | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .vscode | 1 |
| CHANGELOG.md | 1 |
| feed.xml | 1 |
| LICENSE.md | 1 |
| README.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .md | 102 |
| .json | 27 |
| .py | 21 |
| .sh | 19 |
| .yml | 17 |
| .ts | 5 |
| [no-ext] | 4 |
| .ps1 | 2 |
| .adml | 1 |
| .admx | 1 |
| .mobileconfig | 1 |
| .plist | 1 |
| .xml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
