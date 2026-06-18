# jayminwest/overstory Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 457 files, 52 directories.

## 요약

- 조사 단위: `sources/jayminwest__overstory` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 457 files, 52 directories, depth score 121, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=ui/src/index.css, ui/src/main.tsx, src/index.ts이고, 의존성 단서는 commander, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | jayminwest/overstory |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | global |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/jayminwest__overstory](../../../../sources/jayminwest__overstory) |
| Existing report | [reports/clone-structures/jayminwest__overstory.md](../../../clone-structures/jayminwest__overstory.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 457 / 52 |
| Max observed depth | 5 |
| Top directories | .canopy, .claude, .github, .mulch, .overstory, .pi, .sapling, .seeds, agents, docs, scripts, src, templates, ui |
| Top extensions | .ts: 298, .md: 43, .tsx: 43, .jsonl: 25, .json: 15, (none): 9, .yml: 7, .yaml: 5, .tmpl: 4, .lock: 2, .toml: 2, .css: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 83 |
| docs | documentation surface | 11 |
| .github | ci surface | 1 |
| agents | top-level component | 1 |
| scripts | top-level component | 1 |
| templates | top-level component | 1 |
| ui | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| test | package.json | test | bun test |
| quality | package.json | lint | biome check . |
| quality | package.json | lint:fix | biome check --write . |
| quality | package.json | typecheck | tsc --noEmit |
| utility | package.json | version:bump | bun scripts/version-bump.ts |
| build | package.json | build:ui | cd ui && bun install && bun run build |
| build | package.json | prepack | bun run build:ui |
| entrypoint | package.json bin | index.ts | ./src/index.ts |
| entrypoint | package.json bin | index.ts | ./src/index.ts |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | commander |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [ui/src/index.css](../../../../sources/jayminwest__overstory/ui/src/index.css) | entrypoints signal |
| entrypoints | [ui/src/main.tsx](../../../../sources/jayminwest__overstory/ui/src/main.tsx) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/jayminwest__overstory/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/jayminwest__overstory/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/jayminwest__overstory/tsconfig.json) | config signal |
| config | [ui/package.json](../../../../sources/jayminwest__overstory/ui/package.json) | config signal |
| config | [ui/tsconfig.json](../../../../sources/jayminwest__overstory/ui/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/jayminwest__overstory/README.md) | docs signal |
| docs | [ui/README.md](../../../../sources/jayminwest__overstory/ui/README.md) | docs signal |
| docs | [docs/canopy-prompt-architecture.md](../../../../sources/jayminwest__overstory/docs/canopy-prompt-architecture.md) | docs signal |
| docs | [docs/direction-multi-swarm-and-containers.md](../../../../sources/jayminwest__overstory/docs/direction-multi-swarm-and-containers.md) | docs signal |
| eval | [ui/src/lib/use-auto-scroll.test.ts](../../../../sources/jayminwest__overstory/ui/src/lib/use-auto-scroll.test.ts) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [ui/src/index.css](../../../../sources/jayminwest__overstory/ui/src/index.css)<br>[ui/src/main.tsx](../../../../sources/jayminwest__overstory/ui/src/main.tsx)<br>[src/index.ts](../../../../sources/jayminwest__overstory/src/index.ts) |
| agentRuntime | 64 | [ui/src/routes/agent/EventRow.tsx](../../../../sources/jayminwest__overstory/ui/src/routes/agent/EventRow.tsx)<br>[templates/hooks.json.tmpl](../../../../sources/jayminwest__overstory/templates/hooks.json.tmpl)<br>[src/events/tool-filter.test.ts](../../../../sources/jayminwest__overstory/src/events/tool-filter.test.ts)<br>[src/events/tool-filter.ts](../../../../sources/jayminwest__overstory/src/events/tool-filter.ts)<br>[src/doctor/agents.test.ts](../../../../sources/jayminwest__overstory/src/doctor/agents.test.ts)<br>[src/doctor/agents.ts](../../../../sources/jayminwest__overstory/src/doctor/agents.ts)<br>[src/commands/agents.test.ts](../../../../sources/jayminwest__overstory/src/commands/agents.test.ts)<br>[src/commands/agents.ts](../../../../sources/jayminwest__overstory/src/commands/agents.ts) |
| mcp | 0 | not obvious |
| retrieval | 3 | [ui/index.html](../../../../sources/jayminwest__overstory/ui/index.html)<br>[ui/src/index.css](../../../../sources/jayminwest__overstory/ui/src/index.css)<br>[src/index.ts](../../../../sources/jayminwest__overstory/src/index.ts) |
| spec | 6 | [src/commands/spec.test.ts](../../../../sources/jayminwest__overstory/src/commands/spec.test.ts)<br>[src/commands/spec.ts](../../../../sources/jayminwest__overstory/src/commands/spec.ts)<br>[docs/canopy-prompt-architecture.md](../../../../sources/jayminwest__overstory/docs/canopy-prompt-architecture.md)<br>[docs/headless-hooks-design.md](../../../../sources/jayminwest__overstory/docs/headless-hooks-design.md)<br>[docs/design/containerize-swarms.md](../../../../sources/jayminwest__overstory/docs/design/containerize-swarms.md)<br>[.mulch/expertise/architecture.jsonl](../../../../sources/jayminwest__overstory/.mulch/expertise/architecture.jsonl) |
| eval | 146 | [ui/src/lib/use-auto-scroll.test.ts](../../../../sources/jayminwest__overstory/ui/src/lib/use-auto-scroll.test.ts)<br>[ui/src/lib/use-scroll-fade.test.ts](../../../../sources/jayminwest__overstory/ui/src/lib/use-scroll-fade.test.ts)<br>[src/config.test.ts](../../../../sources/jayminwest__overstory/src/config.test.ts)<br>[src/errors.test.ts](../../../../sources/jayminwest__overstory/src/errors.test.ts)<br>[src/json.test.ts](../../../../sources/jayminwest__overstory/src/json.test.ts)<br>[src/schema-consistency.test.ts](../../../../sources/jayminwest__overstory/src/schema-consistency.test.ts)<br>[src/test-helpers.test.ts](../../../../sources/jayminwest__overstory/src/test-helpers.test.ts)<br>[src/test-helpers.ts](../../../../sources/jayminwest__overstory/src/test-helpers.ts) |
| security | 4 | [SECURITY.md](../../../../sources/jayminwest__overstory/SECURITY.md)<br>[src/agents/guard-rules.test.ts](../../../../sources/jayminwest__overstory/src/agents/guard-rules.test.ts)<br>[src/agents/guard-rules.ts](../../../../sources/jayminwest__overstory/src/agents/guard-rules.ts)<br>[.pi/extensions/overstory-guard.ts](../../../../sources/jayminwest__overstory/.pi/extensions/overstory-guard.ts) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/jayminwest__overstory/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/jayminwest__overstory/.github/workflows/publish.yml) |
| container | 0 | not obvious |
| instruction | 2 | [CLAUDE.md](../../../../sources/jayminwest__overstory/CLAUDE.md)<br>[templates/CLAUDE.md.tmpl](../../../../sources/jayminwest__overstory/templates/CLAUDE.md.tmpl) |
| docs | 11 | [README.md](../../../../sources/jayminwest__overstory/README.md)<br>[ui/README.md](../../../../sources/jayminwest__overstory/ui/README.md)<br>[docs/canopy-prompt-architecture.md](../../../../sources/jayminwest__overstory/docs/canopy-prompt-architecture.md)<br>[docs/direction-multi-swarm-and-containers.md](../../../../sources/jayminwest__overstory/docs/direction-multi-swarm-and-containers.md)<br>[docs/direction-ui-and-ipc.md](../../../../sources/jayminwest__overstory/docs/direction-ui-and-ipc.md)<br>[docs/headless-hooks-design.md](../../../../sources/jayminwest__overstory/docs/headless-hooks-design.md)<br>[docs/runtime-abstraction.md](../../../../sources/jayminwest__overstory/docs/runtime-abstraction.md)<br>[docs/runtime-adapters.md](../../../../sources/jayminwest__overstory/docs/runtime-adapters.md) |
| config | 4 | [package.json](../../../../sources/jayminwest__overstory/package.json)<br>[tsconfig.json](../../../../sources/jayminwest__overstory/tsconfig.json)<br>[ui/package.json](../../../../sources/jayminwest__overstory/ui/package.json)<br>[ui/tsconfig.json](../../../../sources/jayminwest__overstory/ui/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 146 | [ui/src/lib/use-auto-scroll.test.ts](../../../../sources/jayminwest__overstory/ui/src/lib/use-auto-scroll.test.ts)<br>[ui/src/lib/use-scroll-fade.test.ts](../../../../sources/jayminwest__overstory/ui/src/lib/use-scroll-fade.test.ts)<br>[src/config.test.ts](../../../../sources/jayminwest__overstory/src/config.test.ts)<br>[src/errors.test.ts](../../../../sources/jayminwest__overstory/src/errors.test.ts)<br>[src/json.test.ts](../../../../sources/jayminwest__overstory/src/json.test.ts)<br>[src/schema-consistency.test.ts](../../../../sources/jayminwest__overstory/src/schema-consistency.test.ts) |
| CI workflows | 2 | [.github/workflows/ci.yml](../../../../sources/jayminwest__overstory/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/jayminwest__overstory/.github/workflows/publish.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 4 | [SECURITY.md](../../../../sources/jayminwest__overstory/SECURITY.md)<br>[src/agents/guard-rules.test.ts](../../../../sources/jayminwest__overstory/src/agents/guard-rules.test.ts)<br>[src/agents/guard-rules.ts](../../../../sources/jayminwest__overstory/src/agents/guard-rules.ts)<br>[.pi/extensions/overstory-guard.ts](../../../../sources/jayminwest__overstory/.pi/extensions/overstory-guard.ts) |
| Agent instructions | 2 | [CLAUDE.md](../../../../sources/jayminwest__overstory/CLAUDE.md)<br>[templates/CLAUDE.md.tmpl](../../../../sources/jayminwest__overstory/templates/CLAUDE.md.tmpl) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `ui/src/index.css`, `ui/src/main.tsx`, `src/index.ts`.
2. Trace execution through entrypoints: `ui/src/index.css`, `ui/src/main.tsx`, `src/index.ts`.
3. Map agent/tool runtime through: `ui/src/routes/agent/EventRow.tsx`, `templates/hooks.json.tmpl`, `src/events/tool-filter.test.ts`.
4. Inspect retrieval/memory/indexing through: `ui/index.html`, `ui/src/index.css`, `src/index.ts`.
5. Verify behavior through test/eval files: `ui/src/lib/use-auto-scroll.test.ts`, `ui/src/lib/use-scroll-fade.test.ts`, `src/config.test.ts`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Local clone structure analysis 457 files, 52 directories.. 핵심 구조 신호는 package.json, README.md, CLAUDE.md, LICENSE, tests, ci이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing입니다.
