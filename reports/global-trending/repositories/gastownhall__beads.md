# gastownhall/beads

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/gastownhall/beads |
| local path | sources/gastownhall__beads |
| HEAD | 8d24ad7 |
| stars/forks | 24595 / 1648 |
| language | Go |
| license |  |
| pushedAt | 2026-06-17T23:58:45Z |
| trendScore / priorityScore | 175 / 485 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 386 | examples/bash-agent/README.md, examples/claude-desktop-mcp/README.md, examples/python-agent/README.md |
| Developer tools / DX | 313 | examples/bash-agent/README.md, examples/claude-desktop-mcp/README.md, examples/library-usage/README.md |
| Database / data infrastructure | 194 | examples/bash-agent/README.md, examples/python-agent/README.md, examples/bd-example-extension-go/README.md |
| MCP / agent interoperability | 171 | examples/claude-desktop-mcp/README.md, examples/python-agent/README.md, examples/README.md |
| Coding agent / software automation | 74 | examples/claude-desktop-mcp/README.md, examples/multi-phase-development/README.md, examples/startup-hooks/README.md |
| Security / supply chain | 35 | examples/multi-phase-development/README.md, examples/multiple-personas/README.md, AGENTS.md |
| Observability / evaluation | 31 | examples/README.md, examples/bd-example-extension-go/README.md, examples/compaction/README.md |
| Cloud native / infrastructure | 20 | docs/CLAUDE.md, .devcontainer/README.md, go.mod |
| Frontend / app framework | 11 | examples/multi-phase-development/README.md, examples/multiple-personas/README.md, AGENTS.md |
| Data / ML platform | 4 | examples/team-workflow/README.md, Makefile, website/docs/cli-reference/audit.md |
| RAG / retrieval / knowledge | 1 | website/docs/cli-reference/dep.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Go |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2494 |
| manifests | 40 |
| docs | 801 |
| tests | 726 |
| ci/ops | 14 |
| spec artifacts | 18 |
| agent instruction files | 17 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | bd - Beads | bd - Beads / ⚡ Quick Start / Install beads CLI (system-wide - don't clone this repo into your project) / Initialize in YOUR project / Optional: refresh or install richer instructions for your agent / 🛠 Features / 📖 Essential Commands / 🔗 Hierarchy & Workflow / 📦 Installation / Security And Verification | bd Beads Distributed graph issue tracker for AI agents, powered by Dolt https //github.com/dolthub/dolt . Platforms macOS, Linux, Windows, FreeBSD ! License https //img.shields.io/github/license/gastownhall/beads LICENSE ! Go Report Card https //goreportcard.com/badge/github.com/steveyegge/beads https //goreportcard.com/report/github.com/steveyegge/beads ! Release https //img.shields.io/github/v/release/gastownhall/beads https //github.com/gastownhall/beads/releases ! npm version https //img.shields.io/npm/v/@beads/bd https //www.npmjs.com/package/@beads/bd ! PyPI https //img.shields.io/pypi/v/beads mcp https //pypi.org/project/beads mcp/ Docs https //gastownhall.github.io/beads/ Beads provi |


## Key Files

### Manifests

- examples/bash-agent/README.md
- examples/claude-desktop-mcp/README.md
- examples/python-agent/README.md
- examples/README.md
- examples/bd-example-extension-go/README.md
- examples/compaction/README.md
- examples/contributor-workflow/README.md
- examples/formulas/README.md
- examples/library-usage/README.md
- examples/linear-workflow/README.md
- examples/multi-phase-development/README.md
- examples/multiple-personas/README.md
- examples/protected-branch/README.md
- examples/startup-hooks/README.md
- examples/team-workflow/README.md
- docs/CLAUDE.md
- integrations/beads-mcp/README.md
- AGENTS.md
- cmd/bd/AGENTS.md
- plugins/beads/skills/beads/resources/AGENTS.md


### Spec / Docs / Prompt Artifacts

- docs/CLAUDE.md
- AGENTS.md
- cmd/bd/AGENTS.md
- plugins/beads/skills/beads/resources/AGENTS.md
- CLAUDE.md
- plugins/beads/skills/beads/CLAUDE.md
- website/docs/integrations/gemini.md
- .github/copilot-instructions.md
- website/versioned_docs/version-1.0.4/integrations/gemini.md
- website/versioned_docs/version-1.0.5/integrations/gemini.md
- docs/ARCHITECTURE.md
- docs/adr/0001-multi-remote-approach.md
- docs/adr/0002-init-safety-invariants.md
- website/docs/architecture/index.md
- .claude/test-strategy.md
- .claude/settings.json
- .claude/hooks/block-gh-watch.sh
- .claude/hooks/block-interactive-cmds.sh


### Agent Instruction Files

- docs/CLAUDE.md
- AGENTS.md
- cmd/bd/AGENTS.md
- plugins/beads/skills/beads/resources/AGENTS.md
- CLAUDE.md
- plugins/beads/skills/beads/CLAUDE.md
- website/docs/integrations/gemini.md
- .github/copilot-instructions.md
- website/versioned_docs/version-1.0.4/integrations/gemini.md
- website/versioned_docs/version-1.0.5/integrations/gemini.md
- website/docs/integrations/cody.md
- .claude/test-strategy.md
- .claude/settings.json
- .claude/hooks/block-gh-watch.sh
- .claude/hooks/block-interactive-cmds.sh


## Top Directories

| dir | count |
| --- | --- |
| internal | 755 |
| cmd | 743 |
| website | 615 |
| docs | 83 |
| scripts | 67 |
| plugins | 56 |
| examples | 35 |
| integrations | 35 |
| .github | 22 |
| npm-package | 14 |
| release-gates | 7 |
| tests | 6 |
| .claude | 4 |
| winget | 4 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 1368 |
| .md | 801 |
| .sql | 110 |
| .sh | 65 |
| .txt | 35 |
| .py | 24 |
| [no-ext] | 20 |
| .yml | 18 |
| .json | 17 |
| .toml | 7 |
| .yaml | 6 |
| .js | 4 |
| .mod | 3 |
| .nix | 3 |
| .sum | 3 |
| .svg | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
