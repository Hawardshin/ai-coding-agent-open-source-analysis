# buildermethods/agent-os Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 22 files, 9 directories.

## 요약

- 조사 단위: `sources/buildermethods__agent-os` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 22 files, 9 directories, depth score 82, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=commands/agent-os/discover-standards.md, commands/agent-os/index-standards.md, commands/agent-os/inject-standards.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | buildermethods/agent-os |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | Shell |
| Stars | 4894 |
| Forks | 769 |
| License | MIT License |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/buildermethods__agent-os](../../../../sources/buildermethods__agent-os) |
| Existing report | [reports/clone-structures/buildermethods__agent-os.md](../../../clone-structures/buildermethods__agent-os.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 22 / 9 |
| Max observed depth | 4 |
| Top directories | .github, commands, profiles, scripts |
| Top extensions | .md: 12, .yml: 5, .sh: 3, (none): 2 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| commands | top-level component | 1 |
| profiles | top-level component | 1 |
| scripts | top-level component | 1 |


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
| agentRuntime | [commands/agent-os/discover-standards.md](../../../../sources/buildermethods__agent-os/commands/agent-os/discover-standards.md) | agentRuntime signal |
| agentRuntime | [commands/agent-os/index-standards.md](../../../../sources/buildermethods__agent-os/commands/agent-os/index-standards.md) | agentRuntime signal |
| agentRuntime | [commands/agent-os/inject-standards.md](../../../../sources/buildermethods__agent-os/commands/agent-os/inject-standards.md) | agentRuntime signal |
| agentRuntime | [commands/agent-os/plan-product.md](../../../../sources/buildermethods__agent-os/commands/agent-os/plan-product.md) | agentRuntime signal |
| ci | [.github/workflows/pr-decline.yml](../../../../sources/buildermethods__agent-os/.github/workflows/pr-decline.yml) | ci support |
| ci | [.github/workflows/stale.yml](../../../../sources/buildermethods__agent-os/.github/workflows/stale.yml) | ci support |
| eval | [commands/agent-os/shape-spec.md](../../../../sources/buildermethods__agent-os/commands/agent-os/shape-spec.md) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 5 | [commands/agent-os/discover-standards.md](../../../../sources/buildermethods__agent-os/commands/agent-os/discover-standards.md)<br>[commands/agent-os/index-standards.md](../../../../sources/buildermethods__agent-os/commands/agent-os/index-standards.md)<br>[commands/agent-os/inject-standards.md](../../../../sources/buildermethods__agent-os/commands/agent-os/inject-standards.md)<br>[commands/agent-os/plan-product.md](../../../../sources/buildermethods__agent-os/commands/agent-os/plan-product.md)<br>[commands/agent-os/shape-spec.md](../../../../sources/buildermethods__agent-os/commands/agent-os/shape-spec.md) |
| mcp | 0 | not obvious |
| retrieval | 1 | [commands/agent-os/index-standards.md](../../../../sources/buildermethods__agent-os/commands/agent-os/index-standards.md) |
| spec | 1 | [commands/agent-os/shape-spec.md](../../../../sources/buildermethods__agent-os/commands/agent-os/shape-spec.md) |
| eval | 1 | [commands/agent-os/shape-spec.md](../../../../sources/buildermethods__agent-os/commands/agent-os/shape-spec.md) |
| security | 1 | [.github/SECURITY.yml](../../../../sources/buildermethods__agent-os/.github/SECURITY.yml) |
| ci | 2 | [.github/workflows/pr-decline.yml](../../../../sources/buildermethods__agent-os/.github/workflows/pr-decline.yml)<br>[.github/workflows/stale.yml](../../../../sources/buildermethods__agent-os/.github/workflows/stale.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/buildermethods__agent-os/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1 | [commands/agent-os/shape-spec.md](../../../../sources/buildermethods__agent-os/commands/agent-os/shape-spec.md) |
| CI workflows | 2 | [.github/workflows/pr-decline.yml](../../../../sources/buildermethods__agent-os/.github/workflows/pr-decline.yml)<br>[.github/workflows/stale.yml](../../../../sources/buildermethods__agent-os/.github/workflows/stale.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [.github/SECURITY.yml](../../../../sources/buildermethods__agent-os/.github/SECURITY.yml) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `commands/agent-os/discover-standards.md`, `commands/agent-os/index-standards.md`, `commands/agent-os/inject-standards.md`.
2. Map agent/tool runtime through: `commands/agent-os/discover-standards.md`, `commands/agent-os/index-standards.md`, `commands/agent-os/inject-standards.md`.
3. Inspect retrieval/memory/indexing through: `commands/agent-os/index-standards.md`.
4. Verify behavior through test/eval files: `commands/agent-os/shape-spec.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 22 files, 9 directories.. 핵심 구조 신호는 Shell, README.md, LICENSE, ci, docs, 22 files이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious입니다.
