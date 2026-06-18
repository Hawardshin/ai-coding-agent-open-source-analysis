# artokun/comfyui-mcp Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Claude Code plugin + MCP server for ComfyUI — 88 tools, 14 AI skills (Flux, WAN, LTX video, Qwen), live graph editing from your Claude session. Generate images & video, manage models and custom nodes.

## 요약

- 조사 단위: `sources/artokun__comfyui-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 414 files, 85 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=web/extensions/comfyui-mcp-agent-panel/comfyui-mcp-agent-panel.js, web/extensions/comfyui-mcp-agent-panel/README.md, plugin/.mcp.json이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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


## Repository Context

| Field | Value |
| --- | --- |
| Repository | artokun/comfyui-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 163 |
| Forks | 33 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/artokun__comfyui-mcp](../../../../sources/artokun__comfyui-mcp) |
| Existing report | [reports/global-trending/repositories/artokun__comfyui-mcp.md](../../../global-trending/repositories/artokun__comfyui-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 414 / 85 |
| Max observed depth | 5 |
| Top directories | .beads, .claude-plugin, .codex, .github, blog, design, docs, infra, packs, plugin, scripts, src, web |
| Top extensions | .ts: 175, .md: 57, .json: 50, .mdx: 36, .yaml: 27, .bat: 15, .sh: 15, (none): 12, .mjs: 11, .svg: 5, .yml: 3, .example: 2 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 88 |
| docs | documentation surface | 42 |
| web | source boundary | 4 |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| blog | top-level component | 1 |
| design | top-level component | 1 |
| infra | top-level component | 1 |
| packs | top-level component | 1 |
| plugin | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | tsc |
| serve-dev | package.json | dev | tsx src/index.ts |
| serve-dev | package.json | dev:agent-poc | tsx src/experimental/run.ts |
| serve-dev | package.json | start | node dist/index.js |
| test | package.json | test | vitest run --passWithNoTests |
| test | package.json | test:watch | vitest |
| test | package.json | test:integration | cross-env COMFYUI_INTEGRATION=true vitest run |
| quality | package.json | lint | tsc --noEmit |
| utility | package.json | docs:gen | cross-env COMFYUI_URL=http://127.0.0.1:8188 tsx scripts/gen-tool-docs.ts |
| utility | package.json | packs:gen | node scripts/gen-pack-installers.mjs |
| utility | package.json | packs:validate | node scripts/validate-manifests.mjs |
| test | package.json | packs:test | bash scripts/test-packs.sh |
| quality | package.json | packs:check-urls | node scripts/check-model-urls.mjs |
| utility | package.json | postinstall | node scripts/postinstall.mjs |
| utility | package.json | generations:stats | node scripts/generation-stats.mjs |
| build | package.json | release | npm version patch && git push --follow-tags |
| build | package.json | release:minor | npm version minor && git push --follow-tags |
| build | package.json | release:major | npm version major && git push --follow-tags |
| entrypoint | package.json bin | index.js | dist/index.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
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
| mcp | [web/extensions/comfyui-mcp-agent-panel/comfyui-mcp-agent-panel.js](../../../../sources/artokun__comfyui-mcp/web/extensions/comfyui-mcp-agent-panel/comfyui-mcp-agent-panel.js) | mcp signal |
| mcp | [web/extensions/comfyui-mcp-agent-panel/README.md](../../../../sources/artokun__comfyui-mcp/web/extensions/comfyui-mcp-agent-panel/README.md) | mcp signal |
| mcp | [plugin/.mcp.json](../../../../sources/artokun__comfyui-mcp/plugin/.mcp.json) | mcp signal |
| mcp | [docs/blog/comfyui-mcp-tdqs-case-study.mdx](../../../../sources/artokun__comfyui-mcp/docs/blog/comfyui-mcp-tdqs-case-study.mdx) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/artokun__comfyui-mcp/AGENTS.md) | agentRuntime signal |
| agentRuntime | [src/tools/api-nodes.ts](../../../../sources/artokun__comfyui-mcp/src/tools/api-nodes.ts) | agentRuntime signal |
| agentRuntime | [src/tools/assets.ts](../../../../sources/artokun__comfyui-mcp/src/tools/assets.ts) | agentRuntime signal |
| agentRuntime | [src/tools/defaults.ts](../../../../sources/artokun__comfyui-mcp/src/tools/defaults.ts) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/artokun__comfyui-mcp/server.json) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/artokun__comfyui-mcp/src/index.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/artokun__comfyui-mcp/CLAUDE.md) | instruction signal |
| instruction | [.codex/hooks.json](../../../../sources/artokun__comfyui-mcp/.codex/hooks.json) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [server.json](../../../../sources/artokun__comfyui-mcp/server.json)<br>[src/index.ts](../../../../sources/artokun__comfyui-mcp/src/index.ts) |
| agentRuntime | 128 | [AGENTS.md](../../../../sources/artokun__comfyui-mcp/AGENTS.md)<br>[src/tools/api-nodes.ts](../../../../sources/artokun__comfyui-mcp/src/tools/api-nodes.ts)<br>[src/tools/assets.ts](../../../../sources/artokun__comfyui-mcp/src/tools/assets.ts)<br>[src/tools/defaults.ts](../../../../sources/artokun__comfyui-mcp/src/tools/defaults.ts)<br>[src/tools/diagnostics.ts](../../../../sources/artokun__comfyui-mcp/src/tools/diagnostics.ts)<br>[src/tools/generate-audio.ts](../../../../sources/artokun__comfyui-mcp/src/tools/generate-audio.ts)<br>[src/tools/generate-conditioned.ts](../../../../sources/artokun__comfyui-mcp/src/tools/generate-conditioned.ts)<br>[src/tools/generate-image.ts](../../../../sources/artokun__comfyui-mcp/src/tools/generate-image.ts) |
| mcp | 5 | [web/extensions/comfyui-mcp-agent-panel/comfyui-mcp-agent-panel.js](../../../../sources/artokun__comfyui-mcp/web/extensions/comfyui-mcp-agent-panel/comfyui-mcp-agent-panel.js)<br>[web/extensions/comfyui-mcp-agent-panel/README.md](../../../../sources/artokun__comfyui-mcp/web/extensions/comfyui-mcp-agent-panel/README.md)<br>[plugin/.mcp.json](../../../../sources/artokun__comfyui-mcp/plugin/.mcp.json)<br>[docs/blog/comfyui-mcp-tdqs-case-study.mdx](../../../../sources/artokun__comfyui-mcp/docs/blog/comfyui-mcp-tdqs-case-study.mdx)<br>[blog/comfyui-mcp-tdqs-case-study.md](../../../../sources/artokun__comfyui-mcp/blog/comfyui-mcp-tdqs-case-study.md) |
| retrieval | 8 | [src/index.ts](../../../../sources/artokun__comfyui-mcp/src/index.ts)<br>[src/tools/index.ts](../../../../sources/artokun__comfyui-mcp/src/tools/index.ts)<br>[src/tools/memory-management.ts](../../../../sources/artokun__comfyui-mcp/src/tools/memory-management.ts)<br>[src/services/storage/index.ts](../../../../sources/artokun__comfyui-mcp/src/services/storage/index.ts)<br>[src/orchestrator/index.ts](../../../../sources/artokun__comfyui-mcp/src/orchestrator/index.ts)<br>[docs/index.mdx](../../../../sources/artokun__comfyui-mcp/docs/index.mdx)<br>[docs/changelog/index.mdx](../../../../sources/artokun__comfyui-mcp/docs/changelog/index.mdx)<br>[docs/blog/index.mdx](../../../../sources/artokun__comfyui-mcp/docs/blog/index.mdx) |
| spec | 7 | [ROADMAP.md](../../../../sources/artokun__comfyui-mcp/ROADMAP.md)<br>[packs/ideogram/templates/19_Magazine_Cover_Design.json](../../../../sources/artokun__comfyui-mcp/packs/ideogram/templates/19_Magazine_Cover_Design.json)<br>[packs/ideogram/templates/20_Trading_Card_Design.json](../../../../sources/artokun__comfyui-mcp/packs/ideogram/templates/20_Trading_Card_Design.json)<br>[docs/design/generation-tracker.md](../../../../sources/artokun__comfyui-mcp/docs/design/generation-tracker.md)<br>[docs/design/panel-orchestrator.md](../../../../sources/artokun__comfyui-mcp/docs/design/panel-orchestrator.md)<br>[design/embedded-agent-panel.md](../../../../sources/artokun__comfyui-mcp/design/embedded-agent-panel.md)<br>[design/remote-and-cloud-modes.md](../../../../sources/artokun__comfyui-mcp/design/remote-and-cloud-modes.md) |
| eval | 58 | [src/__tests__/config.test.ts](../../../../sources/artokun__comfyui-mcp/src/__tests__/config.test.ts)<br>[src/__tests__/utils/optional-dep.test.ts](../../../../sources/artokun__comfyui-mcp/src/__tests__/utils/optional-dep.test.ts)<br>[src/__tests__/transport/cli.test.ts](../../../../sources/artokun__comfyui-mcp/src/__tests__/transport/cli.test.ts)<br>[src/__tests__/transport/comfyui-url.test.ts](../../../../sources/artokun__comfyui-mcp/src/__tests__/transport/comfyui-url.test.ts)<br>[src/__tests__/transport/http.test.ts](../../../../sources/artokun__comfyui-mcp/src/__tests__/transport/http.test.ts)<br>[src/__tests__/tools/image-convert.test.ts](../../../../sources/artokun__comfyui-mcp/src/__tests__/tools/image-convert.test.ts)<br>[src/__tests__/tools/manifest.test.ts](../../../../sources/artokun__comfyui-mcp/src/__tests__/tools/manifest.test.ts)<br>[src/__tests__/tools/model-extras.test.ts](../../../../sources/artokun__comfyui-mcp/src/__tests__/tools/model-extras.test.ts) |
| security | 2 | [src/services/download-auth.ts](../../../../sources/artokun__comfyui-mcp/src/services/download-auth.ts)<br>[src/__tests__/services/download-auth.test.ts](../../../../sources/artokun__comfyui-mcp/src/__tests__/services/download-auth.test.ts) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/artokun__comfyui-mcp/.github/workflows/ci.yml)<br>[.github/workflows/packs.yml](../../../../sources/artokun__comfyui-mcp/.github/workflows/packs.yml)<br>[.github/workflows/release.yml](../../../../sources/artokun__comfyui-mcp/.github/workflows/release.yml) |
| container | 1 | [Dockerfile](../../../../sources/artokun__comfyui-mcp/Dockerfile) |
| instruction | 3 | [AGENTS.md](../../../../sources/artokun__comfyui-mcp/AGENTS.md)<br>[CLAUDE.md](../../../../sources/artokun__comfyui-mcp/CLAUDE.md)<br>[.codex/hooks.json](../../../../sources/artokun__comfyui-mcp/.codex/hooks.json) |
| docs | 52 | [README.md](../../../../sources/artokun__comfyui-mcp/README.md)<br>[web/extensions/comfyui-mcp-agent-panel/README.md](../../../../sources/artokun__comfyui-mcp/web/extensions/comfyui-mcp-agent-panel/README.md)<br>[packs/README.md](../../../../sources/artokun__comfyui-mcp/packs/README.md)<br>[packs/ideogram/templates/README_IDEOGRAM4_TEMPLATE_PACK.txt](../../../../sources/artokun__comfyui-mcp/packs/ideogram/templates/README_IDEOGRAM4_TEMPLATE_PACK.txt)<br>[infra/cloudflare/README.md](../../../../sources/artokun__comfyui-mcp/infra/cloudflare/README.md)<br>[docs/concepts.mdx](../../../../sources/artokun__comfyui-mcp/docs/concepts.mdx)<br>[docs/configuration.mdx](../../../../sources/artokun__comfyui-mcp/docs/configuration.mdx)<br>[docs/docs.json](../../../../sources/artokun__comfyui-mcp/docs/docs.json) |
| config | 3 | [package.json](../../../../sources/artokun__comfyui-mcp/package.json)<br>[tsconfig.json](../../../../sources/artokun__comfyui-mcp/tsconfig.json)<br>[plugin/skills/comfyui-node-registry/references/pyproject.toml](../../../../sources/artokun__comfyui-mcp/plugin/skills/comfyui-node-registry/references/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 58 | [src/__tests__/config.test.ts](../../../../sources/artokun__comfyui-mcp/src/__tests__/config.test.ts)<br>[src/__tests__/utils/optional-dep.test.ts](../../../../sources/artokun__comfyui-mcp/src/__tests__/utils/optional-dep.test.ts)<br>[src/__tests__/transport/cli.test.ts](../../../../sources/artokun__comfyui-mcp/src/__tests__/transport/cli.test.ts)<br>[src/__tests__/transport/comfyui-url.test.ts](../../../../sources/artokun__comfyui-mcp/src/__tests__/transport/comfyui-url.test.ts)<br>[src/__tests__/transport/http.test.ts](../../../../sources/artokun__comfyui-mcp/src/__tests__/transport/http.test.ts)<br>[src/__tests__/tools/image-convert.test.ts](../../../../sources/artokun__comfyui-mcp/src/__tests__/tools/image-convert.test.ts) |
| CI workflows | 3 | [.github/workflows/ci.yml](../../../../sources/artokun__comfyui-mcp/.github/workflows/ci.yml)<br>[.github/workflows/packs.yml](../../../../sources/artokun__comfyui-mcp/.github/workflows/packs.yml)<br>[.github/workflows/release.yml](../../../../sources/artokun__comfyui-mcp/.github/workflows/release.yml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/artokun__comfyui-mcp/Dockerfile) |
| Security / policy | 2 | [src/services/download-auth.ts](../../../../sources/artokun__comfyui-mcp/src/services/download-auth.ts)<br>[src/__tests__/services/download-auth.test.ts](../../../../sources/artokun__comfyui-mcp/src/__tests__/services/download-auth.test.ts) |
| Agent instructions | 3 | [AGENTS.md](../../../../sources/artokun__comfyui-mcp/AGENTS.md)<br>[CLAUDE.md](../../../../sources/artokun__comfyui-mcp/CLAUDE.md)<br>[.codex/hooks.json](../../../../sources/artokun__comfyui-mcp/.codex/hooks.json) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `web/extensions/comfyui-mcp-agent-panel/comfyui-mcp-agent-panel.js`, `web/extensions/comfyui-mcp-agent-panel/README.md`, `plugin/.mcp.json`.
2. Trace execution through entrypoints: `server.json`, `src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `src/tools/api-nodes.ts`, `src/tools/assets.ts`.
4. Inspect retrieval/memory/indexing through: `src/index.ts`, `src/tools/index.ts`, `src/tools/memory-management.ts`.
5. Verify behavior through test/eval files: `src/__tests__/config.test.ts`, `src/__tests__/utils/optional-dep.test.ts`, `src/__tests__/transport/cli.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Claude Code plugin + MCP server for ComfyUI — 88 tools, 14 AI skills Flux, WAN, LTX video, Qwen , live graph editing fro. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, README.md, AGENTS.md, CLAUDE.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
