# zhitongblog/solomd Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

A markdown editor — and the bridge to your LLM. Local-first, MIT, ~15 MB. Bundled MCP server lets Claude Code / Codex / Cursor drive your vault directly. 14 AI providers BYOK.

## 요약

- 조사 단위: `sources/zhitongblog__solomd` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 903 files, 149 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=web/src/pages/zh/docs/mcp.astro, web/src/pages/zh/blog/v2-2-mcp-autogit-and-14-ai-providers.astro, web/src/pages/docs/mcp.astro이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | zhitongblog/solomd |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 376 |
| Forks | 17 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/zhitongblog__solomd](../../../../sources/zhitongblog__solomd) |
| Existing report | [reports/global-trending/repositories/zhitongblog__solomd.md](../../../global-trending/repositories/zhitongblog__solomd.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 903 / 149 |
| Max observed depth | 8 |
| Top directories | .agents, .github, app, app-store, aur-solomd-bin, brand, dev-mcp, distribution, docs, fdroid, ios-shortcuts, marketing, marketing-zh, marketplace, mcp-server, scripts, web, web-clipper |
| Top extensions | .md: 216, .ts: 128, .png: 126, .astro: 100, .vue: 95, .rs: 62, .sh: 26, .yml: 26, .json: 18, (none): 15, .mjs: 12, .css: 10 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| web | source boundary | 44 |
| docs | documentation surface | 10 |
| .github | ci surface | 1 |
| app | top-level component | 1 |
| app-store | top-level component | 1 |
| aur-solomd-bin | top-level component | 1 |
| brand | top-level component | 1 |
| dev-mcp | top-level component | 1 |
| distribution | top-level component | 1 |
| fdroid | top-level component | 1 |
| ios-shortcuts | top-level component | 1 |
| marketing | top-level component | 1 |
| marketing-zh | top-level component | 1 |
| marketplace | top-level component | 1 |
| mcp-server | source boundary | 1 |
| scripts | top-level component | 1 |
| web-clipper | source boundary | 1 |


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
| mcp | [web/src/pages/zh/docs/mcp.astro](../../../../sources/zhitongblog__solomd/web/src/pages/zh/docs/mcp.astro) | mcp signal |
| mcp | [web/src/pages/zh/blog/v2-2-mcp-autogit-and-14-ai-providers.astro](../../../../sources/zhitongblog__solomd/web/src/pages/zh/blog/v2-2-mcp-autogit-and-14-ai-providers.astro) | mcp signal |
| mcp | [web/src/pages/docs/mcp.astro](../../../../sources/zhitongblog__solomd/web/src/pages/docs/mcp.astro) | mcp signal |
| mcp | [web/src/pages/blog/v2-2-mcp-autogit-and-14-ai-providers.astro](../../../../sources/zhitongblog__solomd/web/src/pages/blog/v2-2-mcp-autogit-and-14-ai-providers.astro) | mcp signal |
| agentRuntime | [web/src/pages/agents.astro](../../../../sources/zhitongblog__solomd/web/src/pages/agents.astro) | agentRuntime signal |
| agentRuntime | [web/src/pages/zh/agents.astro](../../../../sources/zhitongblog__solomd/web/src/pages/zh/agents.astro) | agentRuntime signal |
| agentRuntime | [mcp-server/src/tools.rs](../../../../sources/zhitongblog__solomd/mcp-server/src/tools.rs) | agentRuntime signal |
| agentRuntime | [marketplace/claude-code-skill/solomd/SKILL.md](../../../../sources/zhitongblog__solomd/marketplace/claude-code-skill/solomd/SKILL.md) | agentRuntime signal |
| entrypoints | [mcp-server/src/main.rs](../../../../sources/zhitongblog__solomd/mcp-server/src/main.rs) | entrypoints signal |
| entrypoints | [dev-mcp/src/main.rs](../../../../sources/zhitongblog__solomd/dev-mcp/src/main.rs) | entrypoints signal |
| entrypoints | [app/src-tauri/src/main.rs](../../../../sources/zhitongblog__solomd/app/src-tauri/src/main.rs) | entrypoints signal |
| entrypoints | [app/src/App.vue](../../../../sources/zhitongblog__solomd/app/src/App.vue) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 5 | [mcp-server/src/main.rs](../../../../sources/zhitongblog__solomd/mcp-server/src/main.rs)<br>[dev-mcp/src/main.rs](../../../../sources/zhitongblog__solomd/dev-mcp/src/main.rs)<br>[app/src-tauri/src/main.rs](../../../../sources/zhitongblog__solomd/app/src-tauri/src/main.rs)<br>[app/src/App.vue](../../../../sources/zhitongblog__solomd/app/src/App.vue)<br>[app/src/main.ts](../../../../sources/zhitongblog__solomd/app/src/main.ts) |
| agentRuntime | 22 | [web/src/pages/agents.astro](../../../../sources/zhitongblog__solomd/web/src/pages/agents.astro)<br>[web/src/pages/zh/agents.astro](../../../../sources/zhitongblog__solomd/web/src/pages/zh/agents.astro)<br>[mcp-server/src/tools.rs](../../../../sources/zhitongblog__solomd/mcp-server/src/tools.rs)<br>[marketplace/claude-code-skill/solomd/SKILL.md](../../../../sources/zhitongblog__solomd/marketplace/claude-code-skill/solomd/SKILL.md)<br>[marketplace/_shared/tools.md](../../../../sources/zhitongblog__solomd/marketplace/_shared/tools.md)<br>[docs/agents.md](../../../../sources/zhitongblog__solomd/docs/agents.md)<br>[distribution/manifests/chocolatey/tools/chocolateyinstall.ps1](../../../../sources/zhitongblog__solomd/distribution/manifests/chocolatey/tools/chocolateyinstall.ps1)<br>[distribution/manifests/chocolatey/tools/chocolateyuninstall.ps1](../../../../sources/zhitongblog__solomd/distribution/manifests/chocolatey/tools/chocolateyuninstall.ps1) |
| mcp | 30 | [web/src/pages/zh/docs/mcp.astro](../../../../sources/zhitongblog__solomd/web/src/pages/zh/docs/mcp.astro)<br>[web/src/pages/zh/blog/v2-2-mcp-autogit-and-14-ai-providers.astro](../../../../sources/zhitongblog__solomd/web/src/pages/zh/blog/v2-2-mcp-autogit-and-14-ai-providers.astro)<br>[web/src/pages/docs/mcp.astro](../../../../sources/zhitongblog__solomd/web/src/pages/docs/mcp.astro)<br>[web/src/pages/blog/v2-2-mcp-autogit-and-14-ai-providers.astro](../../../../sources/zhitongblog__solomd/web/src/pages/blog/v2-2-mcp-autogit-and-14-ai-providers.astro)<br>[scripts/build-mcp-sidecar.sh](../../../../sources/zhitongblog__solomd/scripts/build-mcp-sidecar.sh)<br>[scripts/install-mcp.sh](../../../../sources/zhitongblog__solomd/scripts/install-mcp.sh)<br>[scripts/publish-mcp-crate.sh](../../../../sources/zhitongblog__solomd/scripts/publish-mcp-crate.sh)<br>[mcp-server/.gitignore](../../../../sources/zhitongblog__solomd/mcp-server/.gitignore) |
| retrieval | 29 | [web/src/pages/index.astro](../../../../sources/zhitongblog__solomd/web/src/pages/index.astro)<br>[web/src/pages/zh/index.astro](../../../../sources/zhitongblog__solomd/web/src/pages/zh/index.astro)<br>[web/src/pages/zh/docs/index.astro](../../../../sources/zhitongblog__solomd/web/src/pages/zh/docs/index.astro)<br>[web/src/pages/zh/compare/index.astro](../../../../sources/zhitongblog__solomd/web/src/pages/zh/compare/index.astro)<br>[web/src/pages/zh/blog/index.astro](../../../../sources/zhitongblog__solomd/web/src/pages/zh/blog/index.astro)<br>[web/src/pages/uk/index.astro](../../../../sources/zhitongblog__solomd/web/src/pages/uk/index.astro)<br>[web/src/pages/tr/index.astro](../../../../sources/zhitongblog__solomd/web/src/pages/tr/index.astro)<br>[web/src/pages/sv/index.astro](../../../../sources/zhitongblog__solomd/web/src/pages/sv/index.astro) |
| spec | 1 | [docs/roadmap.md](../../../../sources/zhitongblog__solomd/docs/roadmap.md) |
| eval | 29 | [web-clipper/test/live-driver-entry.ts](../../../../sources/zhitongblog__solomd/web-clipper/test/live-driver-entry.ts)<br>[web-clipper/test/fixtures/article.html](../../../../sources/zhitongblog__solomd/web-clipper/test/fixtures/article.html)<br>[web-clipper/scripts/smoke-test.sh](../../../../sources/zhitongblog__solomd/web-clipper/scripts/smoke-test.sh)<br>[web-clipper/scripts/test-markdown.mjs](../../../../sources/zhitongblog__solomd/web-clipper/scripts/test-markdown.mjs)<br>[scripts/v25-slash-self-test.mjs](../../../../sources/zhitongblog__solomd/scripts/v25-slash-self-test.mjs)<br>[scripts/v4-self-test.sh](../../../../sources/zhitongblog__solomd/scripts/v4-self-test.sh)<br>[mcp-server/tests/export_test.rs](../../../../sources/zhitongblog__solomd/mcp-server/tests/export_test.rs)<br>[mcp-server/tests/multi_workspace.rs](../../../../sources/zhitongblog__solomd/mcp-server/tests/multi_workspace.rs) |
| security | 3 | [web/src/pages/security.astro](../../../../sources/zhitongblog__solomd/web/src/pages/security.astro)<br>[web/src/pages/zh/security.astro](../../../../sources/zhitongblog__solomd/web/src/pages/zh/security.astro)<br>[app/src/lib/cm-ime-guard.ts](../../../../sources/zhitongblog__solomd/app/src/lib/cm-ime-guard.ts) |
| ci | 3 | [.github/workflows/indexnow.yml](../../../../sources/zhitongblog__solomd/.github/workflows/indexnow.yml)<br>[.github/workflows/mirror-gitee.yml](../../../../sources/zhitongblog__solomd/.github/workflows/mirror-gitee.yml)<br>[.github/workflows/release.yml](../../../../sources/zhitongblog__solomd/.github/workflows/release.yml) |
| container | 1 | [marketplace/smithery/Dockerfile](../../../../sources/zhitongblog__solomd/marketplace/smithery/Dockerfile) |
| instruction | 1 | [docs/agents.md](../../../../sources/zhitongblog__solomd/docs/agents.md) |
| docs | 48 | [README.de.md](../../../../sources/zhitongblog__solomd/README.de.md)<br>[README.es.md](../../../../sources/zhitongblog__solomd/README.es.md)<br>[README.fr.md](../../../../sources/zhitongblog__solomd/README.fr.md)<br>[README.it.md](../../../../sources/zhitongblog__solomd/README.it.md)<br>[README.ja.md](../../../../sources/zhitongblog__solomd/README.ja.md)<br>[README.ko.md](../../../../sources/zhitongblog__solomd/README.ko.md)<br>[README.md](../../../../sources/zhitongblog__solomd/README.md)<br>[README.nl.md](../../../../sources/zhitongblog__solomd/README.nl.md) |
| config | 12 | [web-clipper/package.json](../../../../sources/zhitongblog__solomd/web-clipper/package.json)<br>[web-clipper/tsconfig.json](../../../../sources/zhitongblog__solomd/web-clipper/tsconfig.json)<br>[web/package.json](../../../../sources/zhitongblog__solomd/web/package.json)<br>[web/tsconfig.json](../../../../sources/zhitongblog__solomd/web/tsconfig.json)<br>[mcp-server/Cargo.lock](../../../../sources/zhitongblog__solomd/mcp-server/Cargo.lock)<br>[mcp-server/Cargo.toml](../../../../sources/zhitongblog__solomd/mcp-server/Cargo.toml)<br>[dev-mcp/Cargo.lock](../../../../sources/zhitongblog__solomd/dev-mcp/Cargo.lock)<br>[dev-mcp/Cargo.toml](../../../../sources/zhitongblog__solomd/dev-mcp/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 29 | [web-clipper/test/live-driver-entry.ts](../../../../sources/zhitongblog__solomd/web-clipper/test/live-driver-entry.ts)<br>[web-clipper/test/fixtures/article.html](../../../../sources/zhitongblog__solomd/web-clipper/test/fixtures/article.html)<br>[web-clipper/scripts/smoke-test.sh](../../../../sources/zhitongblog__solomd/web-clipper/scripts/smoke-test.sh)<br>[web-clipper/scripts/test-markdown.mjs](../../../../sources/zhitongblog__solomd/web-clipper/scripts/test-markdown.mjs)<br>[scripts/v25-slash-self-test.mjs](../../../../sources/zhitongblog__solomd/scripts/v25-slash-self-test.mjs)<br>[scripts/v4-self-test.sh](../../../../sources/zhitongblog__solomd/scripts/v4-self-test.sh) |
| CI workflows | 3 | [.github/workflows/indexnow.yml](../../../../sources/zhitongblog__solomd/.github/workflows/indexnow.yml)<br>[.github/workflows/mirror-gitee.yml](../../../../sources/zhitongblog__solomd/.github/workflows/mirror-gitee.yml)<br>[.github/workflows/release.yml](../../../../sources/zhitongblog__solomd/.github/workflows/release.yml) |
| Containers / deploy | 1 | [marketplace/smithery/Dockerfile](../../../../sources/zhitongblog__solomd/marketplace/smithery/Dockerfile) |
| Security / policy | 3 | [web/src/pages/security.astro](../../../../sources/zhitongblog__solomd/web/src/pages/security.astro)<br>[web/src/pages/zh/security.astro](../../../../sources/zhitongblog__solomd/web/src/pages/zh/security.astro)<br>[app/src/lib/cm-ime-guard.ts](../../../../sources/zhitongblog__solomd/app/src/lib/cm-ime-guard.ts) |
| Agent instructions | 1 | [docs/agents.md](../../../../sources/zhitongblog__solomd/docs/agents.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `web/src/pages/zh/docs/mcp.astro`, `web/src/pages/zh/blog/v2-2-mcp-autogit-and-14-ai-providers.astro`, `web/src/pages/docs/mcp.astro`.
2. Trace execution through entrypoints: `mcp-server/src/main.rs`, `dev-mcp/src/main.rs`, `app/src-tauri/src/main.rs`.
3. Map agent/tool runtime through: `web/src/pages/agents.astro`, `web/src/pages/zh/agents.astro`, `mcp-server/src/tools.rs`.
4. Inspect retrieval/memory/indexing through: `web/src/pages/index.astro`, `web/src/pages/zh/index.astro`, `web/src/pages/zh/docs/index.astro`.
5. Verify behavior through test/eval files: `web-clipper/test/live-driver-entry.ts`, `web-clipper/test/fixtures/article.html`, `web-clipper/scripts/smoke-test.sh`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 A markdown editor — and the bridge to your LLM. Local first, MIT, ~15 MB. Bundled MCP server lets Claude Code / Codex / . 핵심 구조 신호는 TypeScript, README.md, LICENSE, ci, docs, spec-artifacts이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
