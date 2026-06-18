# hi-godot/godot-ai

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/hi-godot/godot-ai |
| local path | sources/hi-godot__godot-ai |
| HEAD | 7b69b51 |
| stars/forks | 596 / 38 |
| language | GDScript |
| license |  |
| pushedAt | 2026-06-17T23:20:24Z |
| trendScore / priorityScore | 136 / 381 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Developer tools / DX | 392 | AGENTS.md, README.md, plugin/addons/godot_ai/README.md |
| MCP / agent interoperability | 370 | AGENTS.md, README.md, plugin/addons/godot_ai/README.md |
| Coding agent / software automation | 55 | AGENTS.md, README.md, plugin/addons/godot_ai/README.md |
| AI agent / orchestration | 48 | AGENTS.md, README.md, CLAUDE.md |
| Security / supply chain | 32 | README.md, docs/plugin-architecture.md, docs/TELEMETRY.md |
| Cloud native / infrastructure | 19 | AGENTS.md, README.md, docs/testing-strategy.md |
| Observability / evaluation | 16 | docs/testing-strategy.md, docs/implementation-plan.md, tests/unit/test_game_eval.py |
| Data / ML platform | 14 | docs/testing-strategy.md, docs/implementation-plan.md, docs/tool-taxonomy.md |
| Database / data infrastructure | 1 | docs/TELEMETRY.md |
| RAG / retrieval / knowledge | 1 | AGENTS.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, devtools, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 550 |
| manifests | 5 |
| docs | 16 |
| tests | 180 |
| ci/ops | 4 |
| spec artifacts | 5 |
| agent instruction files | 5 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Godot AI | Godot AI / Quick Start / Prerequisites / 1. Install the plugin / 2. Enable the plugin / 3. Connect your MCP client / 4. Try it / or the cross-tool convention / Star History | <p align="center" <img src="docs/hero.png" alt="Godot AI — The wait is over" width="700" </p Godot AI ! CI https //github.com/hi godot/godot ai/actions/workflows/ci.yml/badge.svg https //github.com/hi godot/godot ai/actions/workflows/ci.yml ! codecov https //codecov.io/gh/hi godot/godot ai/graph/badge.svg https //codecov.io/gh/hi godot/godot ai ! Godot Asset Library https //img.shields.io/badge/Godot Asset%20Library 478cbf?logo=godotengine&logoColor=white https //godotengine.org/asset library/asset/5050 ! Discord https //img.shields.io/badge/Discord Join%20chat 5865F2?logo=discord&logoColor=white https //discord.gg/FDZ5fr2QkP Connect MCP clients directly to a live Godot editor via the Model |


## Key Files

### Manifests

- AGENTS.md
- README.md
- plugin/addons/godot_ai/README.md
- CLAUDE.md
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- .claude/settings.json
- .claude/hooks/session-start.sh
- .claude/skills/godot-ai/skill.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- .claude/settings.json
- .claude/hooks/session-start.sh
- .claude/skills/godot-ai/skill.md


## Top Directories

| dir | count |
| --- | --- |
| plugin | 227 |
| test_project | 117 |
| src | 92 |
| tests | 69 |
| script | 19 |
| docs | 11 |
| .github | 5 |
| .claude | 3 |
| .gitattributes | 1 |
| .gitignore | 1 |
| AGENTS.md | 1 |
| CLAUDE.md | 1 |
| LICENSE | 1 |
| pyproject.toml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .gd | 168 |
| .uid | 164 |
| .py | 162 |
| [no-ext] | 24 |
| .md | 16 |
| .yml | 5 |
| .tscn | 4 |
| .sh | 2 |
| .cfg | 1 |
| .godot | 1 |
| .json | 1 |
| .ps1 | 1 |
| .toml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
