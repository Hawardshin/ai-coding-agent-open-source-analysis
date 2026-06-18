# swarmclawai/swarmvault Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

The local-first LLM Wiki: open-source knowledge graph builder, RAG knowledge base, and agent memory store. Built on Andrej Karpathy's pattern. An Obsidian alternative for personal knowledge management, AI second brain, and durable Claude Code / Codex / OpenClaw memory.

## 요약

- 조사 단위: `sources/swarmclawai__swarmvault` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 352 files, 87 directories, depth score 112, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/engine/src/mcp.ts이고, 의존성 단서는 playwright, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | swarmclawai/swarmvault |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/swarmclawai__swarmvault](../../../../sources/swarmclawai__swarmvault) |
| Existing report | [reports/korea-trending/repositories/swarmclawai__swarmvault.md](../../../korea-trending/repositories/swarmclawai__swarmvault.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 352 / 87 |
| Max observed depth | 7 |
| Top directories | .github, docs, packages, scripts, skills, smoke, templates, validation, worked |
| Top extensions | .ts: 182, .md: 39, .tsx: 34, .json: 20, .mjs: 16, (none): 6, .html: 3, .php: 3, .sh: 3, .svg: 3, .yaml: 3, .yml: 3 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/engine | packages workspace | 77 |
| packages/viewer | packages workspace | 21 |
| packages/obsidian-plugin | packages workspace | 9 |
| packages/cli | packages workspace | 5 |
| docs | documentation surface | 3 |
| .github | ci surface | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| smoke | top-level component | 1 |
| templates | top-level component | 1 |
| validation | top-level component | 1 |
| worked | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | pnpm --filter @swarmvaultai/viewer build && pnpm --filter @swarmvaultai/engine build && pnpm --filter @swarmvaultai/cli build |
| test | package.json | test | node ./scripts/check-published-manifests.mjs && node --test ./scripts/release-preflight-summary.test.mjs && pnpm -r test |
| quality | package.json | lint | biome check . |
| quality | package.json | lint:fix | biome check --write . |
| quality | package.json | format | biome format --write . |
| quality | package.json | typecheck | pnpm -r typecheck |
| build | package.json | check | biome check . && pnpm -r typecheck && node ./scripts/check-release-sync.mjs && node ./scripts/check-published-manifests.mjs && node ./scripts/check-readme-parity.mjs && node ./scripts/check-clawhub-skill.mjs |
| build | package.json | check:release-sync | node ./scripts/check-release-sync.mjs |
| quality | package.json | check:published-manifests | node ./scripts/check-published-manifests.mjs |
| quality | package.json | check:readme-parity | node ./scripts/check-readme-parity.mjs |
| quality | package.json | check:clawhub-skill | node ./scripts/check-clawhub-skill.mjs |
| quality | package.json | check:perf | node ./scripts/check-perf-budget.mjs |
| utility | package.json | docs:screenshots | node ./scripts/sync-docs-screenshots.mjs |
| utility | package.json | live:smoke:heuristic | node ./scripts/live-smoke.mjs --lane heuristic |
| quality | package.json | live:smoke:heuristic:browser | node ./scripts/live-smoke.mjs --lane heuristic --browser-check |
| utility | package.json | live:smoke:neo4j | node ./scripts/live-smoke.mjs --lane neo4j |
| utility | package.json | live:smoke:ollama | node ./scripts/live-smoke.mjs --lane ollama |
| utility | package.json | live:smoke:openai | node ./scripts/live-smoke.mjs --lane openai |
| utility | package.json | live:smoke:anthropic | node ./scripts/live-smoke.mjs --lane anthropic |
| utility | package.json | live:oss:corpus | node ./scripts/live-oss-corpus.mjs |
| utility | package.json | live:cli-surface | node ./scripts/cli-surface-smoke.mjs |
| build | package.json | release:preflight | node ./scripts/release-preflight.mjs |
| build | package.json | release:publish | node ./scripts/release-publish.mjs |
| utility | package.json | skill:publish | node ./scripts/publish-clawhub-skill.mjs |
| test | package.json | skill:inspect | clawhub inspect swarmvault --files |
| utility | package.json | prepare | lefthook install |


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
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [packages/engine/src/mcp.ts](../../../../sources/swarmclawai__swarmvault/packages/engine/src/mcp.ts) | mcp signal |
| agentRuntime | [skills/swarmvault/README.md](../../../../sources/swarmclawai__swarmvault/skills/swarmvault/README.md) | agentRuntime signal |
| agentRuntime | [skills/swarmvault/SKILL.md](../../../../sources/swarmclawai__swarmvault/skills/swarmvault/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/swarmvault/TROUBLESHOOTING.md](../../../../sources/swarmclawai__swarmvault/skills/swarmvault/TROUBLESHOOTING.md) | agentRuntime signal |
| agentRuntime | [skills/swarmvault/validation/smoke-prompts.md](../../../../sources/swarmclawai__swarmvault/skills/swarmvault/validation/smoke-prompts.md) | agentRuntime signal |
| entrypoints | [worked/large-repo/sources/src/app.ts](../../../../sources/swarmclawai__swarmvault/worked/large-repo/sources/src/app.ts) | entrypoints signal |
| entrypoints | [packages/viewer/src/App.tsx](../../../../sources/swarmclawai__swarmvault/packages/viewer/src/App.tsx) | entrypoints signal |
| entrypoints | [packages/viewer/src/main.tsx](../../../../sources/swarmclawai__swarmvault/packages/viewer/src/main.tsx) | entrypoints signal |
| entrypoints | [packages/obsidian-plugin/src/main.ts](../../../../sources/swarmclawai__swarmvault/packages/obsidian-plugin/src/main.ts) | entrypoints signal |
| config | [package.json](../../../../sources/swarmclawai__swarmvault/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/swarmclawai__swarmvault/pnpm-workspace.yaml) | config signal |
| config | [worked/large-repo/sources/package.json](../../../../sources/swarmclawai__swarmvault/worked/large-repo/sources/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 6 | [worked/large-repo/sources/src/app.ts](../../../../sources/swarmclawai__swarmvault/worked/large-repo/sources/src/app.ts)<br>[packages/viewer/src/App.tsx](../../../../sources/swarmclawai__swarmvault/packages/viewer/src/App.tsx)<br>[packages/viewer/src/main.tsx](../../../../sources/swarmclawai__swarmvault/packages/viewer/src/main.tsx)<br>[packages/obsidian-plugin/src/main.ts](../../../../sources/swarmclawai__swarmvault/packages/obsidian-plugin/src/main.ts)<br>[packages/engine/src/index.ts](../../../../sources/swarmclawai__swarmvault/packages/engine/src/index.ts)<br>[packages/cli/src/index.ts](../../../../sources/swarmclawai__swarmvault/packages/cli/src/index.ts) |
| agentRuntime | 29 | [skills/swarmvault/README.md](../../../../sources/swarmclawai__swarmvault/skills/swarmvault/README.md)<br>[skills/swarmvault/SKILL.md](../../../../sources/swarmclawai__swarmvault/skills/swarmvault/SKILL.md)<br>[skills/swarmvault/TROUBLESHOOTING.md](../../../../sources/swarmclawai__swarmvault/skills/swarmvault/TROUBLESHOOTING.md)<br>[skills/swarmvault/validation/smoke-prompts.md](../../../../sources/swarmclawai__swarmvault/skills/swarmvault/validation/smoke-prompts.md)<br>[skills/swarmvault/references/artifacts.md](../../../../sources/swarmclawai__swarmvault/skills/swarmvault/references/artifacts.md)<br>[skills/swarmvault/references/commands.md](../../../../sources/swarmclawai__swarmvault/skills/swarmvault/references/commands.md)<br>[skills/swarmvault/examples/graph-first-agent-workflow.md](../../../../sources/swarmclawai__swarmvault/skills/swarmvault/examples/graph-first-agent-workflow.md)<br>[skills/swarmvault/examples/quickstart.md](../../../../sources/swarmclawai__swarmvault/skills/swarmvault/examples/quickstart.md) |
| mcp | 1 | [packages/engine/src/mcp.ts](../../../../sources/swarmclawai__swarmvault/packages/engine/src/mcp.ts) |
| retrieval | 40 | [worked/personal-knowledge-base/README.md](../../../../sources/swarmclawai__swarmvault/worked/personal-knowledge-base/README.md)<br>[templates/llm-wiki-schema.md](../../../../sources/swarmclawai__swarmvault/templates/llm-wiki-schema.md)<br>[smoke/fixtures/inbox-bundle/assets/graph.svg](../../../../sources/swarmclawai__swarmvault/smoke/fixtures/inbox-bundle/assets/graph.svg)<br>[skills/swarmvault/examples/graph-first-agent-workflow.md](../../../../sources/swarmclawai__swarmvault/skills/swarmvault/examples/graph-first-agent-workflow.md)<br>[packages/viewer/index.html](../../../../sources/swarmclawai__swarmvault/packages/viewer/index.html)<br>[packages/obsidian-plugin/src/workspace/page-id-index.ts](../../../../sources/swarmclawai__swarmvault/packages/obsidian-plugin/src/workspace/page-id-index.ts)<br>[packages/engine/test/audio-ingest.test.ts](../../../../sources/swarmclawai__swarmvault/packages/engine/test/audio-ingest.test.ts)<br>[packages/engine/test/graph-callers.test.ts](../../../../sources/swarmclawai__swarmvault/packages/engine/test/graph-callers.test.ts) |
| spec | 0 | not obvious |
| eval | 69 | [scripts/release-preflight-summary.test.mjs](../../../../sources/swarmclawai__swarmvault/scripts/release-preflight-summary.test.mjs)<br>[packages/viewer/test/CandidateList.test.tsx](../../../../sources/swarmclawai__swarmvault/packages/viewer/test/CandidateList.test.tsx)<br>[packages/viewer/test/CommandPalette.test.tsx](../../../../sources/swarmclawai__swarmvault/packages/viewer/test/CommandPalette.test.tsx)<br>[packages/viewer/test/FilterSidebar.test.tsx](../../../../sources/swarmclawai__swarmvault/packages/viewer/test/FilterSidebar.test.tsx)<br>[packages/viewer/test/GraphCanvas.test.tsx](../../../../sources/swarmclawai__swarmvault/packages/viewer/test/GraphCanvas.test.tsx)<br>[packages/viewer/test/hooks.test.tsx](../../../../sources/swarmclawai__swarmvault/packages/viewer/test/hooks.test.tsx)<br>[packages/viewer/test/MemoryDashboard.test.tsx](../../../../sources/swarmclawai__swarmvault/packages/viewer/test/MemoryDashboard.test.tsx)<br>[packages/viewer/test/PagePreview.test.tsx](../../../../sources/swarmclawai__swarmvault/packages/viewer/test/PagePreview.test.tsx) |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/swarmclawai__swarmvault/.github/workflows/ci.yml)<br>[.github/workflows/live-smoke.yml](../../../../sources/swarmclawai__swarmvault/.github/workflows/live-smoke.yml) |
| container | 1 | [Dockerfile](../../../../sources/swarmclawai__swarmvault/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 27 | [README.ja.md](../../../../sources/swarmclawai__swarmvault/README.ja.md)<br>[README.md](../../../../sources/swarmclawai__swarmvault/README.md)<br>[README.zh-CN.md](../../../../sources/swarmclawai__swarmvault/README.zh-CN.md)<br>[worked/README.md](../../../../sources/swarmclawai__swarmvault/worked/README.md)<br>[worked/voice-capture/README.md](../../../../sources/swarmclawai__swarmvault/worked/voice-capture/README.md)<br>[worked/research-deep-dive/README.md](../../../../sources/swarmclawai__swarmvault/worked/research-deep-dive/README.md)<br>[worked/personal-knowledge-base/README.md](../../../../sources/swarmclawai__swarmvault/worked/personal-knowledge-base/README.md)<br>[worked/mixed-corpus/README.md](../../../../sources/swarmclawai__swarmvault/worked/mixed-corpus/README.md) |
| config | 12 | [package.json](../../../../sources/swarmclawai__swarmvault/package.json)<br>[pnpm-workspace.yaml](../../../../sources/swarmclawai__swarmvault/pnpm-workspace.yaml)<br>[worked/large-repo/sources/package.json](../../../../sources/swarmclawai__swarmvault/worked/large-repo/sources/package.json)<br>[smoke/fixtures/tiny-matrix/go/go.mod](../../../../sources/swarmclawai__swarmvault/smoke/fixtures/tiny-matrix/go/go.mod)<br>[packages/viewer/package.json](../../../../sources/swarmclawai__swarmvault/packages/viewer/package.json)<br>[packages/viewer/tsconfig.json](../../../../sources/swarmclawai__swarmvault/packages/viewer/tsconfig.json)<br>[packages/obsidian-plugin/package.json](../../../../sources/swarmclawai__swarmvault/packages/obsidian-plugin/package.json)<br>[packages/obsidian-plugin/tsconfig.json](../../../../sources/swarmclawai__swarmvault/packages/obsidian-plugin/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 69 | [scripts/release-preflight-summary.test.mjs](../../../../sources/swarmclawai__swarmvault/scripts/release-preflight-summary.test.mjs)<br>[packages/viewer/test/CandidateList.test.tsx](../../../../sources/swarmclawai__swarmvault/packages/viewer/test/CandidateList.test.tsx)<br>[packages/viewer/test/CommandPalette.test.tsx](../../../../sources/swarmclawai__swarmvault/packages/viewer/test/CommandPalette.test.tsx)<br>[packages/viewer/test/FilterSidebar.test.tsx](../../../../sources/swarmclawai__swarmvault/packages/viewer/test/FilterSidebar.test.tsx)<br>[packages/viewer/test/GraphCanvas.test.tsx](../../../../sources/swarmclawai__swarmvault/packages/viewer/test/GraphCanvas.test.tsx)<br>[packages/viewer/test/hooks.test.tsx](../../../../sources/swarmclawai__swarmvault/packages/viewer/test/hooks.test.tsx) |
| CI workflows | 2 | [.github/workflows/ci.yml](../../../../sources/swarmclawai__swarmvault/.github/workflows/ci.yml)<br>[.github/workflows/live-smoke.yml](../../../../sources/swarmclawai__swarmvault/.github/workflows/live-smoke.yml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/swarmclawai__swarmvault/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `packages/engine/src/mcp.ts`, `skills/swarmvault/README.md`, `skills/swarmvault/SKILL.md`.
2. Trace execution through entrypoints: `worked/large-repo/sources/src/app.ts`, `packages/viewer/src/App.tsx`, `packages/viewer/src/main.tsx`.
3. Map agent/tool runtime through: `skills/swarmvault/README.md`, `skills/swarmvault/SKILL.md`, `skills/swarmvault/TROUBLESHOOTING.md`.
4. Inspect retrieval/memory/indexing through: `worked/personal-knowledge-base/README.md`, `templates/llm-wiki-schema.md`, `smoke/fixtures/inbox-bundle/assets/graph.svg`.
5. Verify behavior through test/eval files: `scripts/release-preflight-summary.test.mjs`, `packages/viewer/test/CandidateList.test.tsx`, `packages/viewer/test/CommandPalette.test.tsx`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 The local first LLM Wiki open source knowledge graph builder, RAG knowledge base, and agent memory store. Built on Andre. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, README.md, LICENSE, playwright이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
