# langchain-ai/open-swe

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/langchain-ai/open-swe |
| local path | sources/langchain-ai__open-swe |
| HEAD | 7dd758f |
| stars/forks | 9994 / 1134 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T22:41:01Z |
| trendScore / priorityScore | 162 / 424 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | evals/reviewer/README.md, AGENTS.md, README.md |
| Coding agent / software automation | 205 | evals/reviewer/README.md, AGENTS.md, README.md |
| Security / supply chain | 99 | evals/reviewer/README.md, AGENTS.md, README.md |
| Cloud native / infrastructure | 74 | evals/reviewer/README.md, AGENTS.md, README.md |
| Observability / evaluation | 72 | evals/reviewer/README.md, README.md, .github/workflows/reviewer_eval.yml |
| Frontend / app framework | 56 | ui/README.md, ui/package.json, ui/tsconfig.json |
| Developer tools / DX | 47 | README.md, Dockerfile, pyproject.toml |
| MCP / agent interoperability | 43 | AGENTS.md, README.md, pyproject.toml |
| Data / ML platform | 17 | evals/reviewer/README.md, .github/workflows/reviewer_eval.yml, tests/test_reviewer_eval_run.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 400 |
| manifests | 11 |
| docs | 11 |
| tests | 97 |
| ci/ops | 5 |
| spec artifacts | 2 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Architecture / 1. Agent Harness — Composed on Deep Agents / 2. Sandbox — Isolated Cloud Environments / 3. Tools — Curated, Not Accumulated / 4. Context Engineering — AGENTS.md + Source Context / 5. Orchestration — Subagents + Middleware / 6. Invocation — Slack, Linear, and GitHub / 7. Validation — Prompt-Driven / Comparison / Features | <div align="center" <a href="https //github.com/langchain ai/open swe" <picture <source media=" prefers color scheme dark " srcset="static/dark.svg" <source media=" prefers color scheme light " srcset="static/light.svg" <img alt="Open SWE Logo" src="static/dark.svg" width="35%" </picture </a </div <div align="center" <h3 Open source framework for building your org's internal coding agent.</h3 </div <div align="center" <a href="https //opensource.org/licenses/MIT" target=" blank" <img src="https //img.shields.io/github/license/langchain ai/open swe" alt="License" </a <a href="https //github.com/langchain ai/open swe/stargazers" target=" blank" <img src="https //img.shields.io/github/stars/lan |


## Key Files

### Manifests

- evals/reviewer/README.md
- AGENTS.md
- README.md
- ui/README.md
- CLAUDE.md
- Dockerfile
- Makefile
- pyproject.toml
- ui/package.json
- ui/tsconfig.json
- ui/vite.config.ts


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| ui | 140 |
| agent | 125 |
| tests | 96 |
| evals | 12 |
| .github | 5 |
| scripts | 4 |
| static | 2 |
| .codespellignore | 1 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .vscode | 1 |
| AGENTS.md | 1 |
| CLAUDE.md | 1 |
| CUSTOMIZATION.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 228 |
| .tsx | 93 |
| .ts | 31 |
| .json | 12 |
| .md | 11 |
| [no-ext] | 9 |
| .svg | 5 |
| .yml | 5 |
| .css | 2 |
| .toml | 2 |
| .js | 1 |
| .txt | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
