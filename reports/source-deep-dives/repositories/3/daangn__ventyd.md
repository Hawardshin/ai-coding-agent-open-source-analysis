# daangn/ventyd Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A TypeScript-first event sourcing library with full type safety and flexible schema language & storage backends.

## 요약

- 조사 단위: `sources/daangn__ventyd` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 116 files, 24 directories, depth score 95, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=test/adapters/index.ts, src/index.ts, src/types/index.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | daangn/ventyd |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | TypeScript |
| Stars | 40 |
| Forks | 3 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/daangn__ventyd](../../../../sources/daangn__ventyd) |
| Existing report | [reports/korea-trending/repositories/daangn__ventyd.md](../../../korea-trending/repositories/daangn__ventyd.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 116 / 24 |
| Max observed depth | 4 |
| Top directories | .changeset, .github, .yarn, docs, scripts, skill, src, test |
| Top extensions | .ts: 62, .mdx: 15, .md: 9, .json: 8, .tsx: 5, (none): 5, .png: 4, .yml: 3, .cjs: 1, .css: 1, .ico: 1, .lock: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 44 |
| src | source boundary | 4 |
| .github | ci surface | 1 |
| scripts | top-level component | 1 |
| skill | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | tsdown |
| build | package.json | build:docs | npm run build -w docs && tsx scripts/generate-docs.ts |
| utility | package.json | prepack | tsx scripts/generate-docs.ts |
| quality | package.json | format | biome check --write --unsafe . |
| build | package.json | release | changeset publish |
| test | package.json | test | vitest run ./test |
| quality | package.json | typecheck | tsc --noEmit |


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
| retrieval | [test/adapters/index.ts](../../../../sources/daangn__ventyd/test/adapters/index.ts) | retrieval signal |
| retrieval | [src/index.ts](../../../../sources/daangn__ventyd/src/index.ts) | retrieval signal |
| retrieval | [src/types/index.ts](../../../../sources/daangn__ventyd/src/types/index.ts) | retrieval signal |
| retrieval | [docs/content/docs/index.mdx](../../../../sources/daangn__ventyd/docs/content/docs/index.mdx) | retrieval signal |
| docs | [README.md](../../../../sources/daangn__ventyd/README.md) | docs signal |
| docs | [skill/README.md](../../../../sources/daangn__ventyd/skill/README.md) | docs signal |
| docs | [docs/.gitignore](../../../../sources/daangn__ventyd/docs/.gitignore) | docs signal |
| docs | [docs/package.json](../../../../sources/daangn__ventyd/docs/package.json) | docs signal |
| eval | [test/arktype.spec.ts](../../../../sources/daangn__ventyd/test/arktype.spec.ts) | eval signal |
| eval | [test/entity.spec.ts](../../../../sources/daangn__ventyd/test/entity.spec.ts) | eval signal |
| eval | [test/exports.spec.ts](../../../../sources/daangn__ventyd/test/exports.spec.ts) | eval signal |
| eval | [test/integration.spec.ts](../../../../sources/daangn__ventyd/test/integration.spec.ts) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/daangn__ventyd/src/index.ts) |
| agentRuntime | 7 | [skill/README.md](../../../../sources/daangn__ventyd/skill/README.md)<br>[skill/SKILL.md](../../../../sources/daangn__ventyd/skill/SKILL.md)<br>[skill/references/common-errors.md](../../../../sources/daangn__ventyd/skill/references/common-errors.md)<br>[skill/references/embedded-docs.md](../../../../sources/daangn__ventyd/skill/references/embedded-docs.md)<br>[skill/references/quick-start.md](../../../../sources/daangn__ventyd/skill/references/quick-start.md)<br>[skill/references/remote-docs.md](../../../../sources/daangn__ventyd/skill/references/remote-docs.md)<br>[docs/content/docs/skills.mdx](../../../../sources/daangn__ventyd/docs/content/docs/skills.mdx) |
| mcp | 0 | not obvious |
| retrieval | 4 | [test/adapters/index.ts](../../../../sources/daangn__ventyd/test/adapters/index.ts)<br>[src/index.ts](../../../../sources/daangn__ventyd/src/index.ts)<br>[src/types/index.ts](../../../../sources/daangn__ventyd/src/types/index.ts)<br>[docs/content/docs/index.mdx](../../../../sources/daangn__ventyd/docs/content/docs/index.mdx) |
| spec | 14 | [test/arktype.spec.ts](../../../../sources/daangn__ventyd/test/arktype.spec.ts)<br>[test/entity.spec.ts](../../../../sources/daangn__ventyd/test/entity.spec.ts)<br>[test/exports.spec.ts](../../../../sources/daangn__ventyd/test/exports.spec.ts)<br>[test/integration.spec.ts](../../../../sources/daangn__ventyd/test/integration.spec.ts)<br>[test/plugin.spec.ts](../../../../sources/daangn__ventyd/test/plugin.spec.ts)<br>[test/prisma-afterversion.spec.ts](../../../../sources/daangn__ventyd/test/prisma-afterversion.spec.ts)<br>[test/snapshot.spec.ts](../../../../sources/daangn__ventyd/test/snapshot.spec.ts)<br>[test/standard.spec.ts](../../../../sources/daangn__ventyd/test/standard.spec.ts) |
| eval | 23 | [test/arktype.spec.ts](../../../../sources/daangn__ventyd/test/arktype.spec.ts)<br>[test/entity.spec.ts](../../../../sources/daangn__ventyd/test/entity.spec.ts)<br>[test/exports.spec.ts](../../../../sources/daangn__ventyd/test/exports.spec.ts)<br>[test/integration.spec.ts](../../../../sources/daangn__ventyd/test/integration.spec.ts)<br>[test/plugin.spec.ts](../../../../sources/daangn__ventyd/test/plugin.spec.ts)<br>[test/prisma-afterversion.spec.ts](../../../../sources/daangn__ventyd/test/prisma-afterversion.spec.ts)<br>[test/snapshot.spec.ts](../../../../sources/daangn__ventyd/test/snapshot.spec.ts)<br>[test/standard.spec.ts](../../../../sources/daangn__ventyd/test/standard.spec.ts) |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/integration.yml](../../../../sources/daangn__ventyd/.github/workflows/integration.yml)<br>[.github/workflows/release.yml](../../../../sources/daangn__ventyd/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 41 | [README.md](../../../../sources/daangn__ventyd/README.md)<br>[skill/README.md](../../../../sources/daangn__ventyd/skill/README.md)<br>[docs/.gitignore](../../../../sources/daangn__ventyd/docs/.gitignore)<br>[docs/package.json](../../../../sources/daangn__ventyd/docs/package.json)<br>[docs/react-router.config.ts](../../../../sources/daangn__ventyd/docs/react-router.config.ts)<br>[docs/serve.json](../../../../sources/daangn__ventyd/docs/serve.json)<br>[docs/source.config.ts](../../../../sources/daangn__ventyd/docs/source.config.ts)<br>[docs/tsconfig.json](../../../../sources/daangn__ventyd/docs/tsconfig.json) |
| config | 4 | [package.json](../../../../sources/daangn__ventyd/package.json)<br>[tsconfig.json](../../../../sources/daangn__ventyd/tsconfig.json)<br>[docs/package.json](../../../../sources/daangn__ventyd/docs/package.json)<br>[docs/tsconfig.json](../../../../sources/daangn__ventyd/docs/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 23 | [test/arktype.spec.ts](../../../../sources/daangn__ventyd/test/arktype.spec.ts)<br>[test/entity.spec.ts](../../../../sources/daangn__ventyd/test/entity.spec.ts)<br>[test/exports.spec.ts](../../../../sources/daangn__ventyd/test/exports.spec.ts)<br>[test/integration.spec.ts](../../../../sources/daangn__ventyd/test/integration.spec.ts)<br>[test/plugin.spec.ts](../../../../sources/daangn__ventyd/test/plugin.spec.ts)<br>[test/prisma-afterversion.spec.ts](../../../../sources/daangn__ventyd/test/prisma-afterversion.spec.ts) |
| CI workflows | 2 | [.github/workflows/integration.yml](../../../../sources/daangn__ventyd/.github/workflows/integration.yml)<br>[.github/workflows/release.yml](../../../../sources/daangn__ventyd/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `test/adapters/index.ts`, `src/index.ts`, `src/types/index.ts`.
2. Trace execution through entrypoints: `src/index.ts`.
3. Map agent/tool runtime through: `skill/README.md`, `skill/SKILL.md`, `skill/references/common-errors.md`.
4. Inspect retrieval/memory/indexing through: `test/adapters/index.ts`, `src/index.ts`, `src/types/index.ts`.
5. Verify behavior through test/eval files: `test/arktype.spec.ts`, `test/entity.spec.ts`, `test/exports.spec.ts`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 A TypeScript first event sourcing library with full type safety and flexible schema language & storage backends.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, tests, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
