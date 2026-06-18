# tontinton/maki Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 410 files, 93 directories.

## 요약

- 조사 단위: `sources/tontinton__maki` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 410 files, 93 directories, depth score 127, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=site/docs/content/mcp/_index.md, maki-ui/src/components/mcp_picker.rs, maki-agent/src/mcp/config.rs이고, 의존성 단서는 pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | tontinton/maki |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/tontinton__maki](../../../../sources/tontinton__maki) |
| Existing report | [reports/clone-structures/tontinton__maki.md](../../../clone-structures/tontinton__maki.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 410 / 93 |
| Max observed depth | 5 |
| Top directories | .config, .github, maki-acp, maki-agent, maki-config, maki-config-macro, maki-docgen, maki-highlight, maki-interpreter, maki-lua, maki-markdown, maki-providers, maki-storage, maki-tool-macro, maki-ui, plugins, scripts, site, src |
| Top extensions | .rs: 218, .lua: 84, .toml: 42, .md: 30, .png: 6, .html: 5, .py: 5, (none): 5, .yml: 3, .lock: 2, .sh: 2, .txt: 2 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 3 |
| .github | ci surface | 1 |
| maki-acp | top-level component | 1 |
| maki-agent | top-level component | 1 |
| maki-config | top-level component | 1 |
| maki-config-macro | top-level component | 1 |
| maki-docgen | documentation surface | 1 |
| maki-highlight | top-level component | 1 |
| maki-interpreter | top-level component | 1 |
| maki-lua | top-level component | 1 |
| maki-markdown | top-level component | 1 |
| maki-providers | top-level component | 1 |
| maki-storage | top-level component | 1 |
| maki-tool-macro | top-level component | 1 |
| maki-ui | top-level component | 1 |
| plugins | top-level component | 1 |
| scripts | top-level component | 1 |
| site | documentation surface | 1 |


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
| mcp | [site/docs/content/mcp/_index.md](../../../../sources/tontinton__maki/site/docs/content/mcp/_index.md) | mcp signal |
| mcp | [maki-ui/src/components/mcp_picker.rs](../../../../sources/tontinton__maki/maki-ui/src/components/mcp_picker.rs) | mcp signal |
| mcp | [maki-agent/src/mcp/config.rs](../../../../sources/tontinton__maki/maki-agent/src/mcp/config.rs) | mcp signal |
| mcp | [maki-agent/src/mcp/error.rs](../../../../sources/tontinton__maki/maki-agent/src/mcp/error.rs) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/tontinton__maki/AGENTS.md) | agentRuntime signal |
| agentRuntime | [site/docs/content/tools/_index.md](../../../../sources/tontinton__maki/site/docs/content/tools/_index.md) | agentRuntime signal |
| agentRuntime | [scripts/tool_token_analysis.py](../../../../sources/tontinton__maki/scripts/tool_token_analysis.py) | agentRuntime signal |
| agentRuntime | [plugins/skill/init.lua](../../../../sources/tontinton__maki/plugins/skill/init.lua) | agentRuntime signal |
| entrypoints | [src/cli.rs](../../../../sources/tontinton__maki/src/cli.rs) | entrypoints signal |
| entrypoints | [src/main.rs](../../../../sources/tontinton__maki/src/main.rs) | entrypoints signal |
| entrypoints | [maki-docgen/src/main.rs](../../../../sources/tontinton__maki/maki-docgen/src/main.rs) | entrypoints signal |
| entrypoints | [maki-acp/src/server.rs](../../../../sources/tontinton__maki/maki-acp/src/server.rs) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [src/cli.rs](../../../../sources/tontinton__maki/src/cli.rs)<br>[src/main.rs](../../../../sources/tontinton__maki/src/main.rs)<br>[maki-docgen/src/main.rs](../../../../sources/tontinton__maki/maki-docgen/src/main.rs)<br>[maki-acp/src/server.rs](../../../../sources/tontinton__maki/maki-acp/src/server.rs) |
| agentRuntime | 47 | [AGENTS.md](../../../../sources/tontinton__maki/AGENTS.md)<br>[site/docs/content/tools/_index.md](../../../../sources/tontinton__maki/site/docs/content/tools/_index.md)<br>[scripts/tool_token_analysis.py](../../../../sources/tontinton__maki/scripts/tool_token_analysis.py)<br>[plugins/skill/init.lua](../../../../sources/tontinton__maki/plugins/skill/init.lua)<br>[plugins/skill/skill_helpers.lua](../../../../sources/tontinton__maki/plugins/skill/skill_helpers.lua)<br>[plugins/skill/tests/spec.lua](../../../../sources/tontinton__maki/plugins/skill/tests/spec.lua)<br>[plugins/memory/init.lua](../../../../sources/tontinton__maki/plugins/memory/init.lua)<br>[plugins/memory/memory_helpers.lua](../../../../sources/tontinton__maki/plugins/memory/memory_helpers.lua) |
| mcp | 15 | [site/docs/content/mcp/_index.md](../../../../sources/tontinton__maki/site/docs/content/mcp/_index.md)<br>[maki-ui/src/components/mcp_picker.rs](../../../../sources/tontinton__maki/maki-ui/src/components/mcp_picker.rs)<br>[maki-agent/src/mcp/config.rs](../../../../sources/tontinton__maki/maki-agent/src/mcp/config.rs)<br>[maki-agent/src/mcp/error.rs](../../../../sources/tontinton__maki/maki-agent/src/mcp/error.rs)<br>[maki-agent/src/mcp/http.rs](../../../../sources/tontinton__maki/maki-agent/src/mcp/http.rs)<br>[maki-agent/src/mcp/mod.rs](../../../../sources/tontinton__maki/maki-agent/src/mcp/mod.rs)<br>[maki-agent/src/mcp/protocol.rs](../../../../sources/tontinton__maki/maki-agent/src/mcp/protocol.rs)<br>[maki-agent/src/mcp/stdio.rs](../../../../sources/tontinton__maki/maki-agent/src/mcp/stdio.rs) |
| retrieval | 73 | [site/index.html](../../../../sources/tontinton__maki/site/index.html)<br>[site/docs/templates/index.html](../../../../sources/tontinton__maki/site/docs/templates/index.html)<br>[site/docs/content/_index.md](../../../../sources/tontinton__maki/site/docs/content/_index.md)<br>[site/docs/content/tools/_index.md](../../../../sources/tontinton__maki/site/docs/content/tools/_index.md)<br>[site/docs/content/quick-start/_index.md](../../../../sources/tontinton__maki/site/docs/content/quick-start/_index.md)<br>[site/docs/content/providers/_index.md](../../../../sources/tontinton__maki/site/docs/content/providers/_index.md)<br>[site/docs/content/permissions/_index.md](../../../../sources/tontinton__maki/site/docs/content/permissions/_index.md)<br>[site/docs/content/mcp/_index.md](../../../../sources/tontinton__maki/site/docs/content/mcp/_index.md) |
| spec | 9 | [plugins/websearch/tests/spec.lua](../../../../sources/tontinton__maki/plugins/websearch/tests/spec.lua)<br>[plugins/webfetch/tests/spec.lua](../../../../sources/tontinton__maki/plugins/webfetch/tests/spec.lua)<br>[plugins/skill/tests/spec.lua](../../../../sources/tontinton__maki/plugins/skill/tests/spec.lua)<br>[plugins/read/tests/spec.lua](../../../../sources/tontinton__maki/plugins/read/tests/spec.lua)<br>[plugins/question/tests/spec.lua](../../../../sources/tontinton__maki/plugins/question/tests/spec.lua)<br>[plugins/memory/tests/spec.lua](../../../../sources/tontinton__maki/plugins/memory/tests/spec.lua)<br>[plugins/lib/tests/spec.lua](../../../../sources/tontinton__maki/plugins/lib/tests/spec.lua)<br>[plugins/index/tests/spec.lua](../../../../sources/tontinton__maki/plugins/index/tests/spec.lua) |
| eval | 36 | [plugins/websearch/tests/spec.lua](../../../../sources/tontinton__maki/plugins/websearch/tests/spec.lua)<br>[plugins/webfetch/tests/spec.lua](../../../../sources/tontinton__maki/plugins/webfetch/tests/spec.lua)<br>[plugins/skill/tests/spec.lua](../../../../sources/tontinton__maki/plugins/skill/tests/spec.lua)<br>[plugins/read/tests/spec.lua](../../../../sources/tontinton__maki/plugins/read/tests/spec.lua)<br>[plugins/question/tests/spec.lua](../../../../sources/tontinton__maki/plugins/question/tests/spec.lua)<br>[plugins/memory/tests/spec.lua](../../../../sources/tontinton__maki/plugins/memory/tests/spec.lua)<br>[plugins/lib/tests/spec.lua](../../../../sources/tontinton__maki/plugins/lib/tests/spec.lua)<br>[plugins/index/tests/helpers.lua](../../../../sources/tontinton__maki/plugins/index/tests/helpers.lua) |
| security | 11 | [maki-ui/src/components/permission_prompt.rs](../../../../sources/tontinton__maki/maki-ui/src/components/permission_prompt.rs)<br>[maki-storage/src/auth.rs](../../../../sources/tontinton__maki/maki-storage/src/auth.rs)<br>[maki-providers/src/providers/openai/auth.rs](../../../../sources/tontinton__maki/maki-providers/src/providers/openai/auth.rs)<br>[maki-providers/src/providers/copilot/auth.rs](../../../../sources/tontinton__maki/maki-providers/src/providers/copilot/auth.rs)<br>[maki-agent/src/child_guard.rs](../../../../sources/tontinton__maki/maki-agent/src/child_guard.rs)<br>[maki-agent/src/mcp/oauth/callback.rs](../../../../sources/tontinton__maki/maki-agent/src/mcp/oauth/callback.rs)<br>[maki-agent/src/mcp/oauth/discovery.rs](../../../../sources/tontinton__maki/maki-agent/src/mcp/oauth/discovery.rs)<br>[maki-agent/src/mcp/oauth/mod.rs](../../../../sources/tontinton__maki/maki-agent/src/mcp/oauth/mod.rs) |
| ci | 3 | [.github/workflows/python.yml](../../../../sources/tontinton__maki/.github/workflows/python.yml)<br>[.github/workflows/release.yml](../../../../sources/tontinton__maki/.github/workflows/release.yml)<br>[.github/workflows/rust.yml](../../../../sources/tontinton__maki/.github/workflows/rust.yml) |
| container | 0 | not obvious |
| instruction | 2 | [AGENTS.md](../../../../sources/tontinton__maki/AGENTS.md)<br>[maki-lua/src/api/AGENTS.md](../../../../sources/tontinton__maki/maki-lua/src/api/AGENTS.md) |
| docs | 30 | [README.md](../../../../sources/tontinton__maki/README.md)<br>[site/android-chrome-192x192.png](../../../../sources/tontinton__maki/site/android-chrome-192x192.png)<br>[site/android-chrome-512x512.png](../../../../sources/tontinton__maki/site/android-chrome-512x512.png)<br>[site/apple-touch-icon.png](../../../../sources/tontinton__maki/site/apple-touch-icon.png)<br>[site/asciinema-player.css](../../../../sources/tontinton__maki/site/asciinema-player.css)<br>[site/asciinema-player.min.js](../../../../sources/tontinton__maki/site/asciinema-player.min.js)<br>[site/build.sh](../../../../sources/tontinton__maki/site/build.sh)<br>[site/demo.cast](../../../../sources/tontinton__maki/site/demo.cast) |
| config | 15 | [Cargo.lock](../../../../sources/tontinton__maki/Cargo.lock)<br>[Cargo.toml](../../../../sources/tontinton__maki/Cargo.toml)<br>[maki-ui/Cargo.toml](../../../../sources/tontinton__maki/maki-ui/Cargo.toml)<br>[maki-tool-macro/Cargo.toml](../../../../sources/tontinton__maki/maki-tool-macro/Cargo.toml)<br>[maki-storage/Cargo.toml](../../../../sources/tontinton__maki/maki-storage/Cargo.toml)<br>[maki-providers/Cargo.toml](../../../../sources/tontinton__maki/maki-providers/Cargo.toml)<br>[maki-markdown/Cargo.toml](../../../../sources/tontinton__maki/maki-markdown/Cargo.toml)<br>[maki-lua/Cargo.toml](../../../../sources/tontinton__maki/maki-lua/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 36 | [plugins/websearch/tests/spec.lua](../../../../sources/tontinton__maki/plugins/websearch/tests/spec.lua)<br>[plugins/webfetch/tests/spec.lua](../../../../sources/tontinton__maki/plugins/webfetch/tests/spec.lua)<br>[plugins/skill/tests/spec.lua](../../../../sources/tontinton__maki/plugins/skill/tests/spec.lua)<br>[plugins/read/tests/spec.lua](../../../../sources/tontinton__maki/plugins/read/tests/spec.lua)<br>[plugins/question/tests/spec.lua](../../../../sources/tontinton__maki/plugins/question/tests/spec.lua)<br>[plugins/memory/tests/spec.lua](../../../../sources/tontinton__maki/plugins/memory/tests/spec.lua) |
| CI workflows | 3 | [.github/workflows/python.yml](../../../../sources/tontinton__maki/.github/workflows/python.yml)<br>[.github/workflows/release.yml](../../../../sources/tontinton__maki/.github/workflows/release.yml)<br>[.github/workflows/rust.yml](../../../../sources/tontinton__maki/.github/workflows/rust.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 11 | [maki-ui/src/components/permission_prompt.rs](../../../../sources/tontinton__maki/maki-ui/src/components/permission_prompt.rs)<br>[maki-storage/src/auth.rs](../../../../sources/tontinton__maki/maki-storage/src/auth.rs)<br>[maki-providers/src/providers/openai/auth.rs](../../../../sources/tontinton__maki/maki-providers/src/providers/openai/auth.rs)<br>[maki-providers/src/providers/copilot/auth.rs](../../../../sources/tontinton__maki/maki-providers/src/providers/copilot/auth.rs)<br>[maki-agent/src/child_guard.rs](../../../../sources/tontinton__maki/maki-agent/src/child_guard.rs)<br>[maki-agent/src/mcp/oauth/callback.rs](../../../../sources/tontinton__maki/maki-agent/src/mcp/oauth/callback.rs) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/tontinton__maki/AGENTS.md)<br>[maki-lua/src/api/AGENTS.md](../../../../sources/tontinton__maki/maki-lua/src/api/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `site/docs/content/mcp/_index.md`, `maki-ui/src/components/mcp_picker.rs`, `maki-agent/src/mcp/config.rs`.
2. Trace execution through entrypoints: `src/cli.rs`, `src/main.rs`, `maki-docgen/src/main.rs`.
3. Map agent/tool runtime through: `AGENTS.md`, `site/docs/content/tools/_index.md`, `scripts/tool_token_analysis.py`.
4. Inspect retrieval/memory/indexing through: `site/index.html`, `site/docs/templates/index.html`, `site/docs/content/_index.md`.
5. Verify behavior through test/eval files: `plugins/websearch/tests/spec.lua`, `plugins/webfetch/tests/spec.lua`, `plugins/skill/tests/spec.lua`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 410 files, 93 directories.. 핵심 구조 신호는 Cargo.toml, README.md, AGENTS.md, LICENSE, pydantic, tests이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
