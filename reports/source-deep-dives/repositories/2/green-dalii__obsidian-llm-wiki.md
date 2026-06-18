# green-dalii/obsidian-llm-wiki Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Karpathy's LLM Wiki implementation - multi-page knowledge generation with entity/concept pages and conversational query.

## 요약

- 조사 단위: `sources/green-dalii__obsidian-llm-wiki` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 152 files, 25 directories, depth score 96, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=src/wiki/contradictions.ts, src/wiki/conversation-ingest.ts, src/wiki/page-factory.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | green-dalii/obsidian-llm-wiki |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | TypeScript |
| Stars | 101 |
| Forks | 10 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/green-dalii__obsidian-llm-wiki](../../../../sources/green-dalii__obsidian-llm-wiki) |
| Existing report | [reports/llm-wiki/repositories/green-dalii__obsidian-llm-wiki.md](../../../llm-wiki/repositories/green-dalii__obsidian-llm-wiki.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 152 / 25 |
| Max observed depth | 5 |
| Top directories | .github, docs, src |
| Top extensions | .ts: 122, .md: 16, .json: 6, .mjs: 2, (none): 2, .css: 1, .webp: 1, .yaml: 1, .yml: 1 |
| Source patterns | cli-first, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 82 |
| docs | documentation surface | 9 |
| .github | ci surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | node esbuild.config.mjs |
| build | package.json | build | node esbuild.config.mjs production |
| serve-dev | package.json | build:dev | node esbuild.config.mjs dev |
| quality | package.json | lint | eslint src/ --max-warnings=0 |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |


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
| retrieval | [src/wiki/contradictions.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/wiki/contradictions.ts) | retrieval signal |
| retrieval | [src/wiki/conversation-ingest.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/wiki/conversation-ingest.ts) | retrieval signal |
| retrieval | [src/wiki/page-factory.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/wiki/page-factory.ts) | retrieval signal |
| retrieval | [src/wiki/query-engine.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/wiki/query-engine.ts) | retrieval signal |
| entrypoints | [src/main.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/main.ts) | entrypoints signal |
| docs | [README.md](../../../../sources/green-dalii__obsidian-llm-wiki/README.md) | docs signal |
| docs | [docs/README_CN.md](../../../../sources/green-dalii__obsidian-llm-wiki/docs/README_CN.md) | docs signal |
| docs | [docs/README_DE.md](../../../../sources/green-dalii__obsidian-llm-wiki/docs/README_DE.md) | docs signal |
| docs | [docs/README_ES.md](../../../../sources/green-dalii__obsidian-llm-wiki/docs/README_ES.md) | docs signal |
| eval | [src/wiki/lint/duplicate-detection.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/wiki/lint/duplicate-detection.test.ts) | eval signal |
| eval | [src/core/batch-limits.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/core/batch-limits.test.ts) | eval signal |
| eval | [src/core/batch-merger.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/core/batch-merger.test.ts) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/main.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/main.ts) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 47 | [src/wiki/contradictions.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/wiki/contradictions.ts)<br>[src/wiki/conversation-ingest.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/wiki/conversation-ingest.ts)<br>[src/wiki/page-factory.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/wiki/page-factory.ts)<br>[src/wiki/query-engine.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/wiki/query-engine.ts)<br>[src/wiki/source-analyzer.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/wiki/source-analyzer.ts)<br>[src/wiki/system-prompts.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/wiki/system-prompts.ts)<br>[src/wiki/wiki-engine.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/wiki/wiki-engine.ts)<br>[src/wiki/prompts/constraints.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/wiki/prompts/constraints.ts) |
| spec | 1 | [ROADMAP.md](../../../../sources/green-dalii__obsidian-llm-wiki/ROADMAP.md) |
| eval | 50 | [src/wiki/lint/duplicate-detection.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/wiki/lint/duplicate-detection.test.ts)<br>[src/core/batch-limits.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/core/batch-limits.test.ts)<br>[src/core/batch-merger.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/core/batch-merger.test.ts)<br>[src/core/convergence-detector.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/core/convergence-detector.test.ts)<br>[src/core/dead-link-detector.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/core/dead-link-detector.test.ts)<br>[src/core/orphan-matcher.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/core/orphan-matcher.test.ts)<br>[src/core/prompt-builders.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/core/prompt-builders.test.ts)<br>[src/__tests__/wiki/lint-fixes.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/__tests__/wiki/lint-fixes.test.ts) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/release.yml](../../../../sources/green-dalii__obsidian-llm-wiki/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 1 | [CLAUDE.md](../../../../sources/green-dalii__obsidian-llm-wiki/CLAUDE.md) |
| docs | 9 | [README.md](../../../../sources/green-dalii__obsidian-llm-wiki/README.md)<br>[docs/README_CN.md](../../../../sources/green-dalii__obsidian-llm-wiki/docs/README_CN.md)<br>[docs/README_DE.md](../../../../sources/green-dalii__obsidian-llm-wiki/docs/README_DE.md)<br>[docs/README_ES.md](../../../../sources/green-dalii__obsidian-llm-wiki/docs/README_ES.md)<br>[docs/README_FR.md](../../../../sources/green-dalii__obsidian-llm-wiki/docs/README_FR.md)<br>[docs/README_JA.md](../../../../sources/green-dalii__obsidian-llm-wiki/docs/README_JA.md)<br>[docs/README_KO.md](../../../../sources/green-dalii__obsidian-llm-wiki/docs/README_KO.md)<br>[docs/README_PT.md](../../../../sources/green-dalii__obsidian-llm-wiki/docs/README_PT.md) |
| config | 2 | [package.json](../../../../sources/green-dalii__obsidian-llm-wiki/package.json)<br>[tsconfig.json](../../../../sources/green-dalii__obsidian-llm-wiki/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 50 | [src/wiki/lint/duplicate-detection.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/wiki/lint/duplicate-detection.test.ts)<br>[src/core/batch-limits.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/core/batch-limits.test.ts)<br>[src/core/batch-merger.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/core/batch-merger.test.ts)<br>[src/core/convergence-detector.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/core/convergence-detector.test.ts)<br>[src/core/dead-link-detector.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/core/dead-link-detector.test.ts)<br>[src/core/orphan-matcher.test.ts](../../../../sources/green-dalii__obsidian-llm-wiki/src/core/orphan-matcher.test.ts) |
| CI workflows | 1 | [.github/workflows/release.yml](../../../../sources/green-dalii__obsidian-llm-wiki/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/green-dalii__obsidian-llm-wiki/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `src/wiki/contradictions.ts`, `src/wiki/conversation-ingest.ts`, `src/wiki/page-factory.ts`.
2. Trace execution through entrypoints: `src/main.ts`.
3. Inspect retrieval/memory/indexing through: `src/wiki/contradictions.ts`, `src/wiki/conversation-ingest.ts`, `src/wiki/page-factory.ts`.
4. Verify behavior through test/eval files: `src/wiki/lint/duplicate-detection.test.ts`, `src/core/batch-limits.test.ts`, `src/core/batch-merger.test.ts`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Karpathy's LLM Wiki implementation multi page knowledge generation with entity/concept pages and conversational query.. 핵심 구조 신호는 TypeScript, package.json, README.md, CLAUDE.md, LICENSE, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
