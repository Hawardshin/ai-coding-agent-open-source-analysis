# bagidea/bagidea-office

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/bagidea/bagidea-office |
| local path | sources/bagidea__bagidea-office |
| HEAD | 00a8a93 |
| stars/forks | 55 / 26 |
| language | HTML |
| license |  |
| pushedAt | 2026-06-17T23:46:01Z |
| trendScore / priorityScore | 149 / 421 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | README.md, docs/guide/agents.md, docs/04-agent-behavior.md |
| MCP / agent interoperability | 326 | README.md, docs/guide/agents.md, docs/05-technical-architecture.md |
| Developer tools / DX | 296 | README.md, docs/04-agent-behavior.md, shell/Cargo.toml |
| Coding agent / software automation | 129 | README.md, docs/01-ux-architecture.md, docs/02-ui-wireframes.md |
| Security / supply chain | 124 | README.md, docs/guide/agents.md, docs/04-agent-behavior.md |
| Cloud native / infrastructure | 114 | README.md, docs/01-ux-architecture.md, docs/guide/channels.md |
| Database / data infrastructure | 67 | README.md, docs/05-technical-architecture.md, docs/07-future-expansion.md |
| RAG / retrieval / knowledge | 38 | README.md, docs/01-ux-architecture.md, docs/03-world-layout.md |
| Observability / evaluation | 31 | README.md, docs/10-revolutionary-features.md, docs/guide/plugins.md |
| Data / ML platform | 21 | README.md, docs/01-ux-architecture.md, docs/03-world-layout.md |
| Frontend / app framework | 15 | docs/05-technical-architecture.md, daemon/i18n-seed/de.json, daemon/i18n-seed/en.json |
| Local LLM / inference | 14 | README.md, docs/03-world-layout.md, docs/guide/models.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Rust |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 827 |
| manifests | 3 |
| docs | 31 |
| tests | 6 |
| ci/ops | 2 |
| spec artifacts | 4 |
| agent instruction files | 3 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | BagIdea Office | BagIdea Office / 🆕 Recently shipped / 🧠 Swappable Brains — every agent, any model *(new in v0.8.0)* / ♻️ Auto-Compact + Auto-New-Thread — for *every* model / 📊 See everything / 💛 Sponsors / 👑 Gold Partners / 💛 Supporters / Tiers / How sponsoring works | BagIdea Office A living, 2.5D Claude Office that runs as your desktop wallpaper — a team of AI agents with real presence that work, learn and grow alongside you. Every agent walks to its desk when real work starts, asks permission at the Security desk, holds meetings, learns new skills, and the lights follow your real local time. Not a dashboard. Not a chat window. A world that renders the true state of your Claude agents — Claude Code sessions, headless runs, custom scripts — as living pixel art employees behind your desktop icons, and gives them a society . Build a big enough team and they grow their own AI social life they chat, play, learn how to work together, and learn about you . Many |


## Key Files

### Manifests

- README.md
- shell/Cargo.toml
- shell/macos/wallpaper_shim/Cargo.toml


### Spec / Docs / Prompt Artifacts

- docs/guide/agents.md
- .claude/settings.json
- REQUIREMENT.md
- workspace/.claude/settings.json


### Agent Instruction Files

- docs/guide/agents.md
- .claude/settings.json
- workspace/.claude/settings.json


## Top Directories

| dir | count |
| --- | --- |
| godot | 695 |
| daemon | 49 |
| docs | 27 |
| web | 21 |
| plugins | 6 |
| installer | 5 |
| shell | 5 |
| .github | 3 |
| cli | 2 |
| .claude | 1 |
| .gitignore | 1 |
| bagidea.cmd | 1 |
| build-mac.sh | 1 |
| CHANGELOG.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .bin | 144 |
| .gltf | 144 |
| .fbx | 143 |
| .glb | 136 |
| .wav | 50 |
| .json | 38 |
| .gd | 31 |
| .md | 31 |
| .gdshader | 25 |
| .js | 24 |
| .tscn | 13 |
| .html | 11 |
| .ps1 | 9 |
| .txt | 6 |
| [no-ext] | 5 |
| .rs | 3 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
