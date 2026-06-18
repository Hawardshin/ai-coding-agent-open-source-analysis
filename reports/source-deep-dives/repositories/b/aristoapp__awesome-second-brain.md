# aristoapp/awesome-second-brain Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

A curated solutions to building a self-evolving second brain that helps AI agents understand your personal and team context.

## 요약

- 조사 단위: `sources/aristoapp__awesome-second-brain` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 103 files, 14 directories, depth score 52, key references 4개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=ko/comparisons/agent-access.md, ko/capabilities/agent-access.md, comparisons/agent-access.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 4개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | aristoapp/awesome-second-brain |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | none |
| Stars | 422 |
| Forks | 44 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/aristoapp__awesome-second-brain](../../../../sources/aristoapp__awesome-second-brain) |
| Existing report | [reports/llm-wiki/repositories/aristoapp__awesome-second-brain.md](../../../llm-wiki/repositories/aristoapp__awesome-second-brain.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 103 / 14 |
| Max observed depth | 3 |
| Top directories | assets, capabilities, comparisons, examples, ko, setup-guides, solutions, templates |
| Top extensions | .md: 100, (none): 2, .png: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| assets | top-level component | 1 |
| capabilities | top-level component | 1 |
| comparisons | top-level component | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| ko | top-level component | 1 |
| setup-guides | top-level component | 1 |
| solutions | top-level component | 1 |
| templates | top-level component | 1 |


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
| agentRuntime | [ko/comparisons/agent-access.md](../../../../sources/aristoapp__awesome-second-brain/ko/comparisons/agent-access.md) | agentRuntime signal |
| agentRuntime | [ko/capabilities/agent-access.md](../../../../sources/aristoapp__awesome-second-brain/ko/capabilities/agent-access.md) | agentRuntime signal |
| agentRuntime | [comparisons/agent-access.md](../../../../sources/aristoapp__awesome-second-brain/comparisons/agent-access.md) | agentRuntime signal |
| agentRuntime | [capabilities/agent-access.md](../../../../sources/aristoapp__awesome-second-brain/capabilities/agent-access.md) | agentRuntime signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 4 | [ko/comparisons/agent-access.md](../../../../sources/aristoapp__awesome-second-brain/ko/comparisons/agent-access.md)<br>[ko/capabilities/agent-access.md](../../../../sources/aristoapp__awesome-second-brain/ko/capabilities/agent-access.md)<br>[comparisons/agent-access.md](../../../../sources/aristoapp__awesome-second-brain/comparisons/agent-access.md)<br>[capabilities/agent-access.md](../../../../sources/aristoapp__awesome-second-brain/capabilities/agent-access.md) |
| mcp | 0 | not obvious |
| retrieval | 6 | [solutions/chatgpt-memory.md](../../../../sources/aristoapp__awesome-second-brain/solutions/chatgpt-memory.md)<br>[solutions/hermes-llm-wiki.md](../../../../sources/aristoapp__awesome-second-brain/solutions/hermes-llm-wiki.md)<br>[ko/solutions/chatgpt-memory.md](../../../../sources/aristoapp__awesome-second-brain/ko/solutions/chatgpt-memory.md)<br>[ko/solutions/hermes-llm-wiki.md](../../../../sources/aristoapp__awesome-second-brain/ko/solutions/hermes-llm-wiki.md)<br>[ko/capabilities/retrieval-grounding.md](../../../../sources/aristoapp__awesome-second-brain/ko/capabilities/retrieval-grounding.md)<br>[capabilities/retrieval-grounding.md](../../../../sources/aristoapp__awesome-second-brain/capabilities/retrieval-grounding.md) |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 14 | [README.ko.md](../../../../sources/aristoapp__awesome-second-brain/README.ko.md)<br>[README.md](../../../../sources/aristoapp__awesome-second-brain/README.md)<br>[templates/README.md](../../../../sources/aristoapp__awesome-second-brain/templates/README.md)<br>[solutions/README.md](../../../../sources/aristoapp__awesome-second-brain/solutions/README.md)<br>[setup-guides/README.md](../../../../sources/aristoapp__awesome-second-brain/setup-guides/README.md)<br>[ko/templates/README.md](../../../../sources/aristoapp__awesome-second-brain/ko/templates/README.md)<br>[ko/solutions/README.md](../../../../sources/aristoapp__awesome-second-brain/ko/solutions/README.md)<br>[ko/setup-guides/README.md](../../../../sources/aristoapp__awesome-second-brain/ko/setup-guides/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious; test/eval path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `ko/comparisons/agent-access.md`, `ko/capabilities/agent-access.md`, `comparisons/agent-access.md`.
2. Map agent/tool runtime through: `ko/comparisons/agent-access.md`, `ko/capabilities/agent-access.md`, `comparisons/agent-access.md`.
3. Inspect retrieval/memory/indexing through: `solutions/chatgpt-memory.md`, `solutions/hermes-llm-wiki.md`, `ko/solutions/chatgpt-memory.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 A curated solutions to building a self evolving second brain that helps AI agents understand your personal and team cont. 핵심 구조 신호는 README.md, LICENSE, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
