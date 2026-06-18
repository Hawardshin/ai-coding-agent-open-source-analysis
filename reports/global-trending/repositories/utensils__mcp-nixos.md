# utensils/mcp-nixos

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/utensils/mcp-nixos |
| local path | sources/utensils__mcp-nixos |
| HEAD | 0ef99b6 |
| stars/forks | 697 / 37 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T18:44:23Z |
| trendScore / priorityScore | 162 / 404 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 493 | README.md, website/README.md, website/public/favicon/README.md |
| Cloud native / infrastructure | 137 | README.md, CLAUDE.md, .github/workflows/ci.yml |
| AI agent / orchestration | 33 | README.md, CLAUDE.md, .github/copilot-instructions.md |
| Coding agent / software automation | 29 | README.md, CLAUDE.md, .github/workflows/claude-code-review.yml |
| Frontend / app framework | 24 | website/README.md, website/package.json, website/tsconfig.json |
| Security / supply chain | 16 | CLAUDE.md, .github/copilot-instructions.md, .github/workflows/claude-code-review.yml |
| Developer tools / DX | 9 | README.md, CLAUDE.md, .pi/package.json |
| Data / ML platform | 5 | mcp_nixos/server.py, RELEASE_NOTES.md, .claude/commands/release.md |
| Observability / evaluation | 3 | .github/workflows/ci.yml, .github/workflows/publish.yml, RELEASE_NOTES.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 81 |
| manifests | 9 |
| docs | 15 |
| tests | 9 |
| ci/ops | 6 |
| spec artifacts | 9 |
| agent instruction files | 9 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | MCP-NixOS - Because Your AI Shouldn't Hallucinate Package Names | MCP-NixOS - Because Your AI Shouldn't Hallucinate Package Names / Quick Start / Option 1: uvx (Recommended) / Option 2: Nix / Option 3: Docker / Option 4: HTTP (Remote MCP) / Run an HTTP MCP server at http://127.0.0.1:8000/mcp / Option 5: Pi Coding Agent / What Is This? / The Tools | MCP NixOS Because Your AI Shouldn't Hallucinate Package Names ! CI https //github.com/utensils/mcp nixos/actions/workflows/ci.yml/badge.svg https //github.com/utensils/mcp nixos/actions/workflows/ci.yml ! codecov https //codecov.io/gh/utensils/mcp nixos/graph/badge.svg?token=kdcbgvq4Bh https //codecov.io/gh/utensils/mcp nixos ! PyPI https //img.shields.io/pypi/v/mcp nixos.svg https //pypi.org/project/mcp nixos/ ! FlakeHub https //img.shields.io/endpoint?url=https //flakehub.com/f/utensils/mcp nixos/badge https //flakehub.com/flake/utensils/mcp nixos ! Python 3.11+ https //img.shields.io/badge/python 3.11+ blue.svg https //www.python.org/downloads/ ! CodeRabbit Pull Request Reviews https //im |


## Key Files

### Manifests

- README.md
- website/README.md
- website/public/favicon/README.md
- CLAUDE.md
- .pi/package.json
- .pi/tsconfig.json
- pyproject.toml
- website/package.json
- website/tsconfig.json


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- .github/copilot-instructions.md
- .github/workflows/claude.yml
- .claude/agents/mcp-server-architect.md
- .claude/agents/nix-expert.md
- .claude/agents/python-expert.md
- .claude/commands/test-tools.md
- .claude/settings.json
- .claude/commands/release.md


### Agent Instruction Files

- CLAUDE.md
- .github/copilot-instructions.md
- .github/workflows/claude.yml
- .claude/agents/mcp-server-architect.md
- .claude/agents/nix-expert.md
- .claude/agents/python-expert.md
- .claude/commands/test-tools.md
- .claude/settings.json
- .claude/commands/release.md


## Top Directories

| dir | count |
| --- | --- |
| website | 23 |
| mcp_nixos | 19 |
| tests | 9 |
| .github | 8 |
| .claude | 6 |
| .pi | 3 |
| nix | 2 |
| .envrc | 1 |
| .gitignore | 1 |
| .mcp.json | 1 |
| .pre-commit-config.yaml | 1 |
| CLAUDE.md | 1 |
| flake.nix | 1 |
| LICENSE | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 28 |
| .md | 15 |
| .json | 7 |
| .yml | 7 |
| [no-ext] | 5 |
| .nix | 3 |
| .ts | 3 |
| .vue | 3 |
| .toml | 2 |
| .css | 1 |
| .in | 1 |
| .mts | 1 |
| .svg | 1 |
| .txt | 1 |
| .webmanifest | 1 |
| .xml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
