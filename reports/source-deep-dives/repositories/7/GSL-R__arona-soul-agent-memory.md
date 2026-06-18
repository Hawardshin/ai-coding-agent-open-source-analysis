# GSL-R/arona-soul-agent-memory Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Agent-centric memory architecture for long-running AI companions: continuity, routing, safety boundaries, and self-review loops.

## 요약

- 조사 단위: `sources/GSL-R__arona-soul-agent-memory` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 36 files, 5 directories, depth score 63, key references 8개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime, retrieval/vector path, security/policy surface 구조로 읽힌다. 핵심 소스 근거는 retrieval=examples/memory-search-scenario.md, docs/02-memory-constraints.md, docs/03-agent-centric-memory.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | GSL-R/arona-soul-agent-memory |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/GSL-R__arona-soul-agent-memory](../../../../sources/GSL-R__arona-soul-agent-memory) |
| Existing report | [reports/korea-trending/repositories/GSL-R__arona-soul-agent-memory.md](../../../korea-trending/repositories/GSL-R__arona-soul-agent-memory.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 36 / 5 |
| Max observed depth | 3 |
| Top directories | docs, examples, prompts |
| Top extensions | .md: 35, (none): 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 28 |
| examples/memory-search-scenario.md | examples workspace | 2 |
| examples | top-level component | 1 |
| prompts | top-level component | 1 |


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
| retrieval | [examples/memory-search-scenario.md](../../../../sources/GSL-R__arona-soul-agent-memory/examples/memory-search-scenario.md) | retrieval signal |
| retrieval | [docs/02-memory-constraints.md](../../../../sources/GSL-R__arona-soul-agent-memory/docs/02-memory-constraints.md) | retrieval signal |
| retrieval | [docs/03-agent-centric-memory.md](../../../../sources/GSL-R__arona-soul-agent-memory/docs/03-agent-centric-memory.md) | retrieval signal |
| retrieval | [docs/ko/02-memory-constraints.md](../../../../sources/GSL-R__arona-soul-agent-memory/docs/ko/02-memory-constraints.md) | retrieval signal |
| docs | [README.ko.md](../../../../sources/GSL-R__arona-soul-agent-memory/README.ko.md) | docs signal |
| docs | [README.md](../../../../sources/GSL-R__arona-soul-agent-memory/README.md) | docs signal |
| docs | [docs/00-origin-and-scope.md](../../../../sources/GSL-R__arona-soul-agent-memory/docs/00-origin-and-scope.md) | docs signal |
| docs | [docs/01-problem.md](../../../../sources/GSL-R__arona-soul-agent-memory/docs/01-problem.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 1 | [examples/memory-search-scenario.md](../../../../sources/GSL-R__arona-soul-agent-memory/examples/memory-search-scenario.md) |
| mcp | 0 | not obvious |
| retrieval | 5 | [examples/memory-search-scenario.md](../../../../sources/GSL-R__arona-soul-agent-memory/examples/memory-search-scenario.md)<br>[docs/02-memory-constraints.md](../../../../sources/GSL-R__arona-soul-agent-memory/docs/02-memory-constraints.md)<br>[docs/03-agent-centric-memory.md](../../../../sources/GSL-R__arona-soul-agent-memory/docs/03-agent-centric-memory.md)<br>[docs/ko/02-memory-constraints.md](../../../../sources/GSL-R__arona-soul-agent-memory/docs/ko/02-memory-constraints.md)<br>[docs/ko/03-agent-centric-memory.md](../../../../sources/GSL-R__arona-soul-agent-memory/docs/ko/03-agent-centric-memory.md) |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 1 | [SECURITY.md](../../../../sources/GSL-R__arona-soul-agent-memory/SECURITY.md) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 25 | [README.ko.md](../../../../sources/GSL-R__arona-soul-agent-memory/README.ko.md)<br>[README.md](../../../../sources/GSL-R__arona-soul-agent-memory/README.md)<br>[docs/00-origin-and-scope.md](../../../../sources/GSL-R__arona-soul-agent-memory/docs/00-origin-and-scope.md)<br>[docs/01-problem.md](../../../../sources/GSL-R__arona-soul-agent-memory/docs/01-problem.md)<br>[docs/02-memory-constraints.md](../../../../sources/GSL-R__arona-soul-agent-memory/docs/02-memory-constraints.md)<br>[docs/03-agent-centric-memory.md](../../../../sources/GSL-R__arona-soul-agent-memory/docs/03-agent-centric-memory.md)<br>[docs/04-record-routing.md](../../../../sources/GSL-R__arona-soul-agent-memory/docs/04-record-routing.md)<br>[docs/05-safety-boundaries.md](../../../../sources/GSL-R__arona-soul-agent-memory/docs/05-safety-boundaries.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [SECURITY.md](../../../../sources/GSL-R__arona-soul-agent-memory/SECURITY.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious; test/eval path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `examples/memory-search-scenario.md`, `docs/02-memory-constraints.md`, `docs/03-agent-centric-memory.md`.
2. Map agent/tool runtime through: `examples/memory-search-scenario.md`.
3. Inspect retrieval/memory/indexing through: `examples/memory-search-scenario.md`, `docs/02-memory-constraints.md`, `docs/03-agent-centric-memory.md`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Agent centric memory architecture for long running AI companions continuity, routing, safety boundaries, and self review. 핵심 구조 신호는 README.md, docs, spec-artifacts이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
