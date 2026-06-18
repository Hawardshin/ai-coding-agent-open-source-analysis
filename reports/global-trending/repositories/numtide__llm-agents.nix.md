# numtide/llm-agents.nix

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/numtide/llm-agents.nix |
| local path | sources/numtide__llm-agents.nix |
| HEAD | 8345e98 |
| stars/forks | 1436 / 158 |
| language | Nix |
| license |  |
| pushedAt | 2026-06-17T22:03:11Z |
| trendScore / priorityScore | 145 / 405 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 271 | AGENTS.md, README.md, packages/codex-acp/README.md |
| Developer tools / DX | 221 | AGENTS.md, README.md, packages/claude-code/README.md |
| Coding agent / software automation | 216 | AGENTS.md, README.md, packages/claude-code/README.md |
| MCP / agent interoperability | 24 | README.md, packages/forgecode/README.md, .github/PULL_REQUEST_TEMPLATE.md |
| Cloud native / infrastructure | 14 | README.md, packages/cli-proxy-api/update.py, packages/aionui/update.py |
| Observability / evaluation | 12 | AGENTS.md, README.md, scripts/generate-package-docs.py |
| RAG / retrieval / knowledge | 7 | README.md |
| Database / data infrastructure | 4 | AGENTS.md, README.md, scripts/generate-package-docs.py |
| Frontend / app framework | 3 | packages/icm/update.py, packages/vibe-kanban/update.py |
| Data / ML platform | 1 | packages/aionui/update.py |
| Security / supply chain | 1 | AGENTS.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 456 |
| manifests | 40 |
| docs | 8 |
| tests | 0 |
| ci/ops | 5 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | etc... | Available Tools / AI Coding Agents / AI Assistants / Claude Code Ecosystem / ACP Ecosystem / Usage Analytics / Workflow & Project Management / Code Review / Memory & Code Intelligence / Sandboxing & Isolation | <img alt="llm agents.nix" src="https //banner.numtide.com/banner/numtide/llm agents.nix.svg" Nix packages for AI coding agents and development tools. Automatically updated daily. Available Tools <! BEGIN GENERATED PACKAGE DOCS AI Coding Agents <details <summary <strong amp</strong CLI for Amp, an agentic coding tool in research preview from Sourcegraph</summary Source binary License unfree Homepage https //ampcode.com/ Usage nix run github numtide/llm agents.nix amp help Nix packages/amp/package.nix packages/amp/package.nix </details <details <summary <strong antigravity cli</strong CLI for Google Antigravity, an agentic development platform</summary Source binary License unfree Homepage htt |


## Key Files

### Manifests

- AGENTS.md
- patches/README.md
- README.md
- packages/claude-code/README.md
- packages/codex-acp/README.md
- packages/forgecode/README.md
- packages/qmd/README.md
- pyproject.toml
- packages/agent-browser/package.nix
- packages/agent-deck/package.nix
- packages/agentsview/package.nix
- packages/antigravity-cli/package.nix
- packages/cc-switch-cli/package.nix
- packages/claude-agent-acp/package.nix
- packages/cli-proxy-api/package.nix
- packages/coderabbit-cli/package.nix
- packages/copilot-cli/package.nix
- packages/cursor-agent/package.nix
- packages/gemini-cli/package.nix
- packages/goose-cli/package.nix


### Spec / Docs / Prompt Artifacts

- AGENTS.md


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| packages | 415 |
| .github | 14 |
| scripts | 13 |
| lib | 2 |
| overlays | 2 |
| patches | 2 |
| .gitignore | 1 |
| AGENTS.md | 1 |
| checks | 1 |
| devshell.nix | 1 |
| flake.nix | 1 |
| LICENSE | 1 |
| pyproject.toml | 1 |
| README.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .nix | 276 |
| .py | 68 |
| .json | 57 |
| [no-ext] | 24 |
| .md | 8 |
| .patch | 8 |
| .yml | 8 |
| .sh | 5 |
| .sbpl | 1 |
| .toml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
