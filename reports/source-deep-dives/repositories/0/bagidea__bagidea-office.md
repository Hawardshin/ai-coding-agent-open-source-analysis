# bagidea/bagidea-office Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

A living AI-agent office on your desktop wallpaper — Claude Code agents that walk, work, delegate, learn & hold meetings. Per-agent swappable models (Claude/GLM/DeepSeek/Qwen/Kimi/OpenAI/Gemini/Groq/Ollama…), workflows, plugins, voice & Telegram/Discord/LINE. Open source.

## 요약

- 조사 단위: `sources/bagidea__bagidea-office` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,169 files, 101 directories, depth score 114, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=web/img/agents.png, tools/wallpaper.ps1, godot/scripts/agent_manager.gd이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | bagidea/bagidea-office |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | HTML |
| Stars | 55 |
| Forks | 26 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/bagidea__bagidea-office](../../../../sources/bagidea__bagidea-office) |
| Existing report | [reports/global-trending/repositories/bagidea__bagidea-office.md](../../../global-trending/repositories/bagidea__bagidea-office.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1169 / 101 |
| Max observed depth | 7 |
| Top directories | .claude, .github, cli, daemon, docs, godot, installer, npc_custom, plugins, scripts, shell, tools, web, workspace |
| Top extensions | .png: 361, .bin: 144, .gltf: 144, .glb: 136, .fbx: 112, .wav: 50, .json: 38, .gd: 31, .md: 31, .gdshader: 25, .js: 24, .tscn: 13 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 46 |
| web | source boundary | 3 |
| .github | ci surface | 1 |
| cli | top-level component | 1 |
| daemon | top-level component | 1 |
| godot | top-level component | 1 |
| installer | top-level component | 1 |
| npc_custom | top-level component | 1 |
| plugins | top-level component | 1 |
| scripts | top-level component | 1 |
| shell | top-level component | 1 |
| tools | top-level component | 1 |
| workspace | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [web/img/agents.png](../../../../sources/bagidea__bagidea-office/web/img/agents.png) | agentRuntime signal |
| agentRuntime | [tools/wallpaper.ps1](../../../../sources/bagidea__bagidea-office/tools/wallpaper.ps1) | agentRuntime signal |
| agentRuntime | [godot/scripts/agent_manager.gd](../../../../sources/bagidea__bagidea-office/godot/scripts/agent_manager.gd) | agentRuntime signal |
| agentRuntime | [godot/scripts/agent_sprite.gd](../../../../sources/bagidea__bagidea-office/godot/scripts/agent_sprite.gd) | agentRuntime signal |
| entrypoints | [shell/src/main.rs](../../../../sources/bagidea__bagidea-office/shell/src/main.rs) | entrypoints signal |
| entrypoints | [daemon/server.js](../../../../sources/bagidea__bagidea-office/daemon/server.js) | entrypoints signal |
| instruction | [docs/guide/agents.md](../../../../sources/bagidea__bagidea-office/docs/guide/agents.md) | instruction signal |
| config | [shell/Cargo.lock](../../../../sources/bagidea__bagidea-office/shell/Cargo.lock) | config signal |
| config | [shell/Cargo.toml](../../../../sources/bagidea__bagidea-office/shell/Cargo.toml) | config signal |
| config | [shell/macos/wallpaper_shim/Cargo.lock](../../../../sources/bagidea__bagidea-office/shell/macos/wallpaper_shim/Cargo.lock) | config signal |
| config | [shell/macos/wallpaper_shim/Cargo.toml](../../../../sources/bagidea__bagidea-office/shell/macos/wallpaper_shim/Cargo.toml) | config signal |
| ci | [.github/workflows/pages.yml](../../../../sources/bagidea__bagidea-office/.github/workflows/pages.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [shell/src/main.rs](../../../../sources/bagidea__bagidea-office/shell/src/main.rs)<br>[daemon/server.js](../../../../sources/bagidea__bagidea-office/daemon/server.js) |
| agentRuntime | 18 | [web/img/agents.png](../../../../sources/bagidea__bagidea-office/web/img/agents.png)<br>[tools/wallpaper.ps1](../../../../sources/bagidea__bagidea-office/tools/wallpaper.ps1)<br>[godot/scripts/agent_manager.gd](../../../../sources/bagidea__bagidea-office/godot/scripts/agent_manager.gd)<br>[godot/scripts/agent_sprite.gd](../../../../sources/bagidea__bagidea-office/godot/scripts/agent_sprite.gd)<br>[docs/img/agents.png](../../../../sources/bagidea__bagidea-office/docs/img/agents.png)<br>[docs/guide/agents.md](../../../../sources/bagidea__bagidea-office/docs/guide/agents.md)<br>[daemon/hook.js](../../../../sources/bagidea__bagidea-office/daemon/hook.js)<br>[daemon/hook.ps1](../../../../sources/bagidea__bagidea-office/daemon/hook.ps1) |
| mcp | 0 | not obvious |
| retrieval | 5 | [web/index.html](../../../../sources/bagidea__bagidea-office/web/index.html)<br>[plugins/music/index.js](../../../../sources/bagidea__bagidea-office/plugins/music/index.js)<br>[plugins/calculator/index.js](../../../../sources/bagidea__bagidea-office/plugins/calculator/index.js)<br>[daemon/retrieval.js](../../../../sources/bagidea__bagidea-office/daemon/retrieval.js)<br>[daemon/tests/retrieval.test.js](../../../../sources/bagidea__bagidea-office/daemon/tests/retrieval.test.js) |
| spec | 4 | [REQUIREMENT.md](../../../../sources/bagidea__bagidea-office/REQUIREMENT.md)<br>[docs/01-ux-architecture.md](../../../../sources/bagidea__bagidea-office/docs/01-ux-architecture.md)<br>[docs/05-technical-architecture.md](../../../../sources/bagidea__bagidea-office/docs/05-technical-architecture.md)<br>[docs/DESIGN-extensibility.md](../../../../sources/bagidea__bagidea-office/docs/DESIGN-extensibility.md) |
| eval | 21 | [godot/assets/scifi/Large_Monitor_Blue_Gradient Texture Atlas by Imphenzia.png](../../../../sources/bagidea__bagidea-office/godot/assets/scifi/Large_Monitor_Blue_Gradient Texture Atlas by Imphenzia.png)<br>[godot/assets/scifi/Large_Monitor_Blue.glb](../../../../sources/bagidea__bagidea-office/godot/assets/scifi/Large_Monitor_Blue.glb)<br>[godot/assets/scifi/Large_Monitor_Green_Gradient Texture Atlas by Imphenzia.png](../../../../sources/bagidea__bagidea-office/godot/assets/scifi/Large_Monitor_Green_Gradient Texture Atlas by Imphenzia.png)<br>[godot/assets/scifi/Large_Monitor_Green.glb](../../../../sources/bagidea__bagidea-office/godot/assets/scifi/Large_Monitor_Green.glb)<br>[godot/assets/scifi/Large_Monitor_Off_Gradient Texture Atlas by Imphenzia.png](../../../../sources/bagidea__bagidea-office/godot/assets/scifi/Large_Monitor_Off_Gradient Texture Atlas by Imphenzia.png)<br>[godot/assets/scifi/Large_Monitor_Off.glb](../../../../sources/bagidea__bagidea-office/godot/assets/scifi/Large_Monitor_Off.glb)<br>[godot/assets/scifi/Large_Monitor_Orange_Gradient Texture Atlas by Imphenzia.png](../../../../sources/bagidea__bagidea-office/godot/assets/scifi/Large_Monitor_Orange_Gradient Texture Atlas by Imphenzia.png)<br>[godot/assets/scifi/Large_Monitor_Orange.glb](../../../../sources/bagidea__bagidea-office/godot/assets/scifi/Large_Monitor_Orange.glb) |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/pages.yml](../../../../sources/bagidea__bagidea-office/.github/workflows/pages.yml)<br>[.github/workflows/sponsors.yml](../../../../sources/bagidea__bagidea-office/.github/workflows/sponsors.yml) |
| container | 0 | not obvious |
| instruction | 1 | [docs/guide/agents.md](../../../../sources/bagidea__bagidea-office/docs/guide/agents.md) |
| docs | 44 | [README.md](../../../../sources/bagidea__bagidea-office/README.md)<br>[docs/01-ux-architecture.md](../../../../sources/bagidea__bagidea-office/docs/01-ux-architecture.md)<br>[docs/02-ui-wireframes.md](../../../../sources/bagidea__bagidea-office/docs/02-ui-wireframes.md)<br>[docs/03-world-layout.md](../../../../sources/bagidea__bagidea-office/docs/03-world-layout.md)<br>[docs/04-agent-behavior.md](../../../../sources/bagidea__bagidea-office/docs/04-agent-behavior.md)<br>[docs/05-technical-architecture.md](../../../../sources/bagidea__bagidea-office/docs/05-technical-architecture.md)<br>[docs/06-performance.md](../../../../sources/bagidea__bagidea-office/docs/06-performance.md)<br>[docs/07-future-expansion.md](../../../../sources/bagidea__bagidea-office/docs/07-future-expansion.md) |
| config | 4 | [shell/Cargo.lock](../../../../sources/bagidea__bagidea-office/shell/Cargo.lock)<br>[shell/Cargo.toml](../../../../sources/bagidea__bagidea-office/shell/Cargo.toml)<br>[shell/macos/wallpaper_shim/Cargo.lock](../../../../sources/bagidea__bagidea-office/shell/macos/wallpaper_shim/Cargo.lock)<br>[shell/macos/wallpaper_shim/Cargo.toml](../../../../sources/bagidea__bagidea-office/shell/macos/wallpaper_shim/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 21 | [godot/assets/scifi/Large_Monitor_Blue_Gradient Texture Atlas by Imphenzia.png](../../../../sources/bagidea__bagidea-office/godot/assets/scifi/Large_Monitor_Blue_Gradient Texture Atlas by Imphenzia.png)<br>[godot/assets/scifi/Large_Monitor_Blue.glb](../../../../sources/bagidea__bagidea-office/godot/assets/scifi/Large_Monitor_Blue.glb)<br>[godot/assets/scifi/Large_Monitor_Green_Gradient Texture Atlas by Imphenzia.png](../../../../sources/bagidea__bagidea-office/godot/assets/scifi/Large_Monitor_Green_Gradient Texture Atlas by Imphenzia.png)<br>[godot/assets/scifi/Large_Monitor_Green.glb](../../../../sources/bagidea__bagidea-office/godot/assets/scifi/Large_Monitor_Green.glb)<br>[godot/assets/scifi/Large_Monitor_Off_Gradient Texture Atlas by Imphenzia.png](../../../../sources/bagidea__bagidea-office/godot/assets/scifi/Large_Monitor_Off_Gradient Texture Atlas by Imphenzia.png)<br>[godot/assets/scifi/Large_Monitor_Off.glb](../../../../sources/bagidea__bagidea-office/godot/assets/scifi/Large_Monitor_Off.glb) |
| CI workflows | 2 | [.github/workflows/pages.yml](../../../../sources/bagidea__bagidea-office/.github/workflows/pages.yml)<br>[.github/workflows/sponsors.yml](../../../../sources/bagidea__bagidea-office/.github/workflows/sponsors.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [docs/guide/agents.md](../../../../sources/bagidea__bagidea-office/docs/guide/agents.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `web/img/agents.png`, `tools/wallpaper.ps1`, `godot/scripts/agent_manager.gd`.
2. Trace execution through entrypoints: `shell/src/main.rs`, `daemon/server.js`.
3. Map agent/tool runtime through: `web/img/agents.png`, `tools/wallpaper.ps1`, `godot/scripts/agent_manager.gd`.
4. Inspect retrieval/memory/indexing through: `web/index.html`, `plugins/music/index.js`, `plugins/calculator/index.js`.
5. Verify behavior through test/eval files: `godot/assets/scifi/Large_Monitor_Blue_Gradient Texture Atlas by Imphenzia.png`, `godot/assets/scifi/Large_Monitor_Blue.glb`, `godot/assets/scifi/Large_Monitor_Green_Gradient Texture Atlas by Imphenzia.png`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 A living AI agent office on your desktop wallpaper — Claude Code agents that walk, work, delegate, learn & hold meetings. 핵심 구조 신호는 HTML, README.md, LICENSE, ci, docs, spec-artifacts이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
