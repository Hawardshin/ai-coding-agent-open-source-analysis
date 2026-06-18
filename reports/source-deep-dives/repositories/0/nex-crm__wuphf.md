# nex-crm/wuphf Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

YC S26 | WUPHF is a collaborative office of AI employees who build and maintain their own knowledge base to never lose context for the tasks you give them. Supports Claude Code, Codex, OpenClaw and local LLMs via OpenCode.

## 요약

- 조사 단위: `sources/nex-crm__wuphf` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,546 files, 215 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 retrieval=DESIGN-WIKI.md, embed.go, templates_embed_test.go이고, 의존성 단서는 modelcontextprotocol, chroma, faiss, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | nex-crm/wuphf |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Go |
| Stars | 1190 |
| Forks | 86 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/nex-crm__wuphf](../../../../sources/nex-crm__wuphf) |
| Existing report | [reports/global-trending/repositories/nex-crm__wuphf.md](../../../global-trending/repositories/nex-crm__wuphf.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2546 / 215 |
| Max observed depth | 8 |
| Top directories | .cursor, .github, .windsurf, assets, bench, brand, claude-code-plugin, cmd, desktop, docs, evals, internal, landing, mcp, npm, packages, prompts, scripts, templates, testdata |
| Top extensions | .go: 1220, .tsx: 545, .ts: 331, .md: 132, .sh: 54, .json: 41, .mjs: 40, .png: 33, .css: 30, .yaml: 20, .yml: 17, .txt: 15 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| web | source boundary | 143 |
| packages/protocol | packages workspace | 41 |
| cmd/wuphf | cmd workspace | 4 |
| cmd/wuphf-oc-probe | cmd workspace | 4 |
| tests | validation surface | 3 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| bench | validation surface | 1 |
| brand | top-level component | 1 |
| claude-code-plugin | top-level component | 1 |
| cmd | source boundary | 1 |
| cmd/bench-slice-1 | cmd workspace | 1 |
| cmd/eval-prompts | cmd workspace | 1 |
| cmd/office-eval | cmd workspace | 1 |
| cmd/review-bundle-handoff | cmd workspace | 1 |
| cmd/wuphf-seed | cmd workspace | 1 |
| cmd/wuphfbench | cmd workspace | 1 |
| cmd/youtube-script-packet | cmd workspace | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | chroma, faiss |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [DESIGN-WIKI.md](../../../../sources/nex-crm__wuphf/DESIGN-WIKI.md) | retrieval signal |
| retrieval | [embed.go](../../../../sources/nex-crm__wuphf/embed.go) | retrieval signal |
| retrieval | [templates_embed_test.go](../../../../sources/nex-crm__wuphf/templates_embed_test.go) | retrieval signal |
| retrieval | [templates_embed.go](../../../../sources/nex-crm__wuphf/templates_embed.go) | retrieval signal |
| entrypoints | [web/src/main.test.tsx](../../../../sources/nex-crm__wuphf/web/src/main.test.tsx) | entrypoints signal |
| entrypoints | [web/src/main.tsx](../../../../sources/nex-crm__wuphf/web/src/main.tsx) | entrypoints signal |
| entrypoints | [web/.storybook/main.ts](../../../../sources/nex-crm__wuphf/web/.storybook/main.ts) | entrypoints signal |
| entrypoints | [packages/protocol/src/index.ts](../../../../sources/nex-crm__wuphf/packages/protocol/src/index.ts) | entrypoints signal |
| docs | [README.md](../../../../sources/nex-crm__wuphf/README.md) | docs signal |
| docs | [website/apple-touch-icon.png](../../../../sources/nex-crm__wuphf/website/apple-touch-icon.png) | docs signal |
| docs | [website/CNAME](../../../../sources/nex-crm__wuphf/website/CNAME) | docs signal |
| docs | [website/download.html](../../../../sources/nex-crm__wuphf/website/download.html) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 21 | [web/src/main.test.tsx](../../../../sources/nex-crm__wuphf/web/src/main.test.tsx)<br>[web/src/main.tsx](../../../../sources/nex-crm__wuphf/web/src/main.tsx)<br>[web/.storybook/main.ts](../../../../sources/nex-crm__wuphf/web/.storybook/main.ts)<br>[packages/protocol/src/index.ts](../../../../sources/nex-crm__wuphf/packages/protocol/src/index.ts)<br>[npm/bin/wuphf.js](../../../../sources/nex-crm__wuphf/npm/bin/wuphf.js)<br>[mcp/src/server.ts](../../../../sources/nex-crm__wuphf/mcp/src/server.ts)<br>[internal/testing/mlx-stub/main.go](../../../../sources/nex-crm__wuphf/internal/testing/mlx-stub/main.go)<br>[internal/teammcp/server.go](../../../../sources/nex-crm__wuphf/internal/teammcp/server.go) |
| agentRuntime | 163 | [web/src/styles/agents.css](../../../../sources/nex-crm__wuphf/web/src/styles/agents.css)<br>[web/src/hooks/useAgentEventPeek.test.ts](../../../../sources/nex-crm__wuphf/web/src/hooks/useAgentEventPeek.test.ts)<br>[web/src/hooks/useAgentEventPeek.ts](../../../../sources/nex-crm__wuphf/web/src/hooks/useAgentEventPeek.ts)<br>[web/src/hooks/useAgentStream.test.ts](../../../../sources/nex-crm__wuphf/web/src/hooks/useAgentStream.test.ts)<br>[web/src/hooks/useAgentStream.ts](../../../../sources/nex-crm__wuphf/web/src/hooks/useAgentStream.ts)<br>[web/src/hooks/useBrokerEvents.test.tsx](../../../../sources/nex-crm__wuphf/web/src/hooks/useBrokerEvents.test.tsx)<br>[web/src/hooks/useBrokerEvents.ts](../../../../sources/nex-crm__wuphf/web/src/hooks/useBrokerEvents.ts)<br>[web/src/hooks/useChannels.ts](../../../../sources/nex-crm__wuphf/web/src/hooks/useChannels.ts) |
| mcp | 7 | [mcp/src/server.ts](../../../../sources/nex-crm__wuphf/mcp/src/server.ts)<br>[mcp/src/tools/skill-sync.ts](../../../../sources/nex-crm__wuphf/mcp/src/tools/skill-sync.ts)<br>[mcp/src/tools/skills.ts](../../../../sources/nex-crm__wuphf/mcp/src/tools/skills.ts)<br>[internal/team/headless_openai_compat_mcp_test.go](../../../../sources/nex-crm__wuphf/internal/team/headless_openai_compat_mcp_test.go)<br>[internal/team/headless_openai_compat_mcp.go](../../../../sources/nex-crm__wuphf/internal/team/headless_openai_compat_mcp.go)<br>[internal/team/headless_opencode_mcp.go](../../../../sources/nex-crm__wuphf/internal/team/headless_opencode_mcp.go)<br>[internal/team/mcp_config.go](../../../../sources/nex-crm__wuphf/internal/team/mcp_config.go) |
| retrieval | 396 | [DESIGN-WIKI.md](../../../../sources/nex-crm__wuphf/DESIGN-WIKI.md)<br>[embed.go](../../../../sources/nex-crm__wuphf/embed.go)<br>[templates_embed_test.go](../../../../sources/nex-crm__wuphf/templates_embed_test.go)<br>[templates_embed.go](../../../../sources/nex-crm__wuphf/templates_embed.go)<br>[TESTING-WIKI.md](../../../../sources/nex-crm__wuphf/TESTING-WIKI.md)<br>[website/index.html](../../../../sources/nex-crm__wuphf/website/index.html)<br>[web/index.html](../../../../sources/nex-crm__wuphf/web/index.html)<br>[web/src/styles/wiki-shell.css](../../../../sources/nex-crm__wuphf/web/src/styles/wiki-shell.css) |
| spec | 55 | [ARCHITECTURE.md](../../../../sources/nex-crm__wuphf/ARCHITECTURE.md)<br>[DESIGN-NOTEBOOK.md](../../../../sources/nex-crm__wuphf/DESIGN-NOTEBOOK.md)<br>[DESIGN-WIKI.md](../../../../sources/nex-crm__wuphf/DESIGN-WIKI.md)<br>[DESIGN.md](../../../../sources/nex-crm__wuphf/DESIGN.md)<br>[web/DESIGN.md](../../../../sources/nex-crm__wuphf/web/DESIGN.md)<br>[web/e2e/tests/app-routes.spec.ts](../../../../sources/nex-crm__wuphf/web/e2e/tests/app-routes.spec.ts)<br>[web/e2e/tests/chat.spec.ts](../../../../sources/nex-crm__wuphf/web/e2e/tests/chat.spec.ts)<br>[web/e2e/tests/interview.spec.ts](../../../../sources/nex-crm__wuphf/web/e2e/tests/interview.spec.ts) |
| eval | 849 | [templates_embed_test.go](../../../../sources/nex-crm__wuphf/templates_embed_test.go)<br>[web/tests/setup.ts](../../../../sources/nex-crm__wuphf/web/tests/setup.ts)<br>[web/tests/fixtures/wikilinks.json](../../../../sources/nex-crm__wuphf/web/tests/fixtures/wikilinks.json)<br>[web/src/main.test.tsx](../../../../sources/nex-crm__wuphf/web/src/main.test.tsx)<br>[web/src/stores/app.test.ts](../../../../sources/nex-crm__wuphf/web/src/stores/app.test.ts)<br>[web/src/routes/RootRoute.test.tsx](../../../../sources/nex-crm__wuphf/web/src/routes/RootRoute.test.tsx)<br>[web/src/routes/routeRegistry.test.ts](../../../../sources/nex-crm__wuphf/web/src/routes/routeRegistry.test.ts)<br>[web/src/routes/useCurrentRoute.test.ts](../../../../sources/nex-crm__wuphf/web/src/routes/useCurrentRoute.test.ts) |
| security | 25 | [web/src/api/audit.ts](../../../../sources/nex-crm__wuphf/web/src/api/audit.ts)<br>[web/e2e/screenshots/integrations-composio-audit.mjs](../../../../sources/nex-crm__wuphf/web/e2e/screenshots/integrations-composio-audit.mjs)<br>[packages/protocol/tests/audit-event.spec.ts](../../../../sources/nex-crm__wuphf/packages/protocol/tests/audit-event.spec.ts)<br>[packages/protocol/testdata/audit-event-vectors.json](../../../../sources/nex-crm__wuphf/packages/protocol/testdata/audit-event-vectors.json)<br>[packages/protocol/src/audit-event.ts](../../../../sources/nex-crm__wuphf/packages/protocol/src/audit-event.ts)<br>[packages/protocol/docs/modules/audit-event.md](../../../../sources/nex-crm__wuphf/packages/protocol/docs/modules/audit-event.md)<br>[internal/teammcp/actions_audit.go](../../../../sources/nex-crm__wuphf/internal/teammcp/actions_audit.go)<br>[internal/teammcp/policy_tools.go](../../../../sources/nex-crm__wuphf/internal/teammcp/policy_tools.go) |
| ci | 13 | [.github/workflows/approve-on-comment.yml](../../../../sources/nex-crm__wuphf/.github/workflows/approve-on-comment.yml)<br>[.github/workflows/auto-release.yml](../../../../sources/nex-crm__wuphf/.github/workflows/auto-release.yml)<br>[.github/workflows/ci.yml](../../../../sources/nex-crm__wuphf/.github/workflows/ci.yml)<br>[.github/workflows/commitlint.yml](../../../../sources/nex-crm__wuphf/.github/workflows/commitlint.yml)<br>[.github/workflows/desktop-build-check.yml](../../../../sources/nex-crm__wuphf/.github/workflows/desktop-build-check.yml)<br>[.github/workflows/desktop-release.yml](../../../../sources/nex-crm__wuphf/.github/workflows/desktop-release.yml)<br>[.github/workflows/desktop-webview-probe.yml](../../../../sources/nex-crm__wuphf/.github/workflows/desktop-webview-probe.yml)<br>[.github/workflows/docs-link-check.yml](../../../../sources/nex-crm__wuphf/.github/workflows/docs-link-check.yml) |
| container | 1 | [desktop/oswails/derisk-linux/Dockerfile](../../../../sources/nex-crm__wuphf/desktop/oswails/derisk-linux/Dockerfile) |
| instruction | 2 | [packages/protocol/AGENTS.md](../../../../sources/nex-crm__wuphf/packages/protocol/AGENTS.md)<br>[.cursor/rules/nex.md](../../../../sources/nex-crm__wuphf/.cursor/rules/nex.md) |
| docs | 119 | [README.md](../../../../sources/nex-crm__wuphf/README.md)<br>[website/apple-touch-icon.png](../../../../sources/nex-crm__wuphf/website/apple-touch-icon.png)<br>[website/CNAME](../../../../sources/nex-crm__wuphf/website/CNAME)<br>[website/download.html](../../../../sources/nex-crm__wuphf/website/download.html)<br>[website/favicon-32.png](../../../../sources/nex-crm__wuphf/website/favicon-32.png)<br>[website/favicon.svg](../../../../sources/nex-crm__wuphf/website/favicon.svg)<br>[website/hn-badge.svg](../../../../sources/nex-crm__wuphf/website/hn-badge.svg)<br>[website/index.html](../../../../sources/nex-crm__wuphf/website/index.html) |
| config | 8 | [go.mod](../../../../sources/nex-crm__wuphf/go.mod)<br>[package.json](../../../../sources/nex-crm__wuphf/package.json)<br>[web/package.json](../../../../sources/nex-crm__wuphf/web/package.json)<br>[web/tsconfig.json](../../../../sources/nex-crm__wuphf/web/tsconfig.json)<br>[web/e2e/package.json](../../../../sources/nex-crm__wuphf/web/e2e/package.json)<br>[packages/protocol/package.json](../../../../sources/nex-crm__wuphf/packages/protocol/package.json)<br>[packages/protocol/tsconfig.json](../../../../sources/nex-crm__wuphf/packages/protocol/tsconfig.json)<br>[npm/package.json](../../../../sources/nex-crm__wuphf/npm/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 849 | [templates_embed_test.go](../../../../sources/nex-crm__wuphf/templates_embed_test.go)<br>[web/tests/setup.ts](../../../../sources/nex-crm__wuphf/web/tests/setup.ts)<br>[web/tests/fixtures/wikilinks.json](../../../../sources/nex-crm__wuphf/web/tests/fixtures/wikilinks.json)<br>[web/src/main.test.tsx](../../../../sources/nex-crm__wuphf/web/src/main.test.tsx)<br>[web/src/stores/app.test.ts](../../../../sources/nex-crm__wuphf/web/src/stores/app.test.ts)<br>[web/src/routes/RootRoute.test.tsx](../../../../sources/nex-crm__wuphf/web/src/routes/RootRoute.test.tsx) |
| CI workflows | 13 | [.github/workflows/approve-on-comment.yml](../../../../sources/nex-crm__wuphf/.github/workflows/approve-on-comment.yml)<br>[.github/workflows/auto-release.yml](../../../../sources/nex-crm__wuphf/.github/workflows/auto-release.yml)<br>[.github/workflows/ci.yml](../../../../sources/nex-crm__wuphf/.github/workflows/ci.yml)<br>[.github/workflows/commitlint.yml](../../../../sources/nex-crm__wuphf/.github/workflows/commitlint.yml)<br>[.github/workflows/desktop-build-check.yml](../../../../sources/nex-crm__wuphf/.github/workflows/desktop-build-check.yml)<br>[.github/workflows/desktop-release.yml](../../../../sources/nex-crm__wuphf/.github/workflows/desktop-release.yml) |
| Containers / deploy | 1 | [desktop/oswails/derisk-linux/Dockerfile](../../../../sources/nex-crm__wuphf/desktop/oswails/derisk-linux/Dockerfile) |
| Security / policy | 25 | [web/src/api/audit.ts](../../../../sources/nex-crm__wuphf/web/src/api/audit.ts)<br>[web/e2e/screenshots/integrations-composio-audit.mjs](../../../../sources/nex-crm__wuphf/web/e2e/screenshots/integrations-composio-audit.mjs)<br>[packages/protocol/tests/audit-event.spec.ts](../../../../sources/nex-crm__wuphf/packages/protocol/tests/audit-event.spec.ts)<br>[packages/protocol/testdata/audit-event-vectors.json](../../../../sources/nex-crm__wuphf/packages/protocol/testdata/audit-event-vectors.json)<br>[packages/protocol/src/audit-event.ts](../../../../sources/nex-crm__wuphf/packages/protocol/src/audit-event.ts)<br>[packages/protocol/docs/modules/audit-event.md](../../../../sources/nex-crm__wuphf/packages/protocol/docs/modules/audit-event.md) |
| Agent instructions | 2 | [packages/protocol/AGENTS.md](../../../../sources/nex-crm__wuphf/packages/protocol/AGENTS.md)<br>[.cursor/rules/nex.md](../../../../sources/nex-crm__wuphf/.cursor/rules/nex.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `DESIGN-WIKI.md`, `embed.go`, `templates_embed_test.go`.
2. Trace execution through entrypoints: `web/src/main.test.tsx`, `web/src/main.tsx`, `web/.storybook/main.ts`.
3. Map agent/tool runtime through: `web/src/styles/agents.css`, `web/src/hooks/useAgentEventPeek.test.ts`, `web/src/hooks/useAgentEventPeek.ts`.
4. Inspect retrieval/memory/indexing through: `DESIGN-WIKI.md`, `embed.go`, `templates_embed_test.go`.
5. Verify behavior through test/eval files: `templates_embed_test.go`, `web/tests/setup.ts`, `web/tests/fixtures/wikilinks.json`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 YC S26 WUPHF is a collaborative office of AI employees who build and maintain their own knowledge base to never lose con. 핵심 구조 신호는 Go, package.json, go.mod, README.md, LICENSE, modelcontextprotocol이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
