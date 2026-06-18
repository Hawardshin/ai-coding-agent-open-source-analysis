# eremes81/game-design-ai-practice-th Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

AI · Claude Code สำหรับงานออกแบบเกมในทางปฏิบัติ — Thai edition of the Korean original (CC BY-NC-SA 4.0, original ISBN 979-11-12-21479-9)

## 요약

- 조사 단위: `sources/eremes81__game-design-ai-practice-th` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 107 files, 27 directories, depth score 71, key references 3개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=manuscript/part99-appendix/appendix-E-mcp-server-catalog.md, manuscript/part20-team-collab/chapter-4-mcp-project-management.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 3개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | eremes81/game-design-ai-practice-th |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/eremes81__game-design-ai-practice-th](../../../../sources/eremes81__game-design-ai-practice-th) |
| Existing report | [reports/korea-trending/repositories/eremes81__game-design-ai-practice-th.md](../../../korea-trending/repositories/eremes81__game-design-ai-practice-th.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 107 / 27 |
| Max observed depth | 3 |
| Top directories | assets, manuscript |
| Top extensions | .md: 103, (none): 2, .png: 1, .svg: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| assets | top-level component | 1 |
| manuscript | top-level component | 1 |


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
| mcp | [manuscript/part99-appendix/appendix-E-mcp-server-catalog.md](../../../../sources/eremes81__game-design-ai-practice-th/manuscript/part99-appendix/appendix-E-mcp-server-catalog.md) | mcp signal |
| mcp | [manuscript/part20-team-collab/chapter-4-mcp-project-management.md](../../../../sources/eremes81__game-design-ai-practice-th/manuscript/part20-team-collab/chapter-4-mcp-project-management.md) | mcp signal |
| eval | [manuscript/part12-art-direction/chapter-3-spec-to-asset-flow.md](../../../../sources/eremes81__game-design-ai-practice-th/manuscript/part12-art-direction/chapter-3-spec-to-asset-flow.md) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 2 | [manuscript/part99-appendix/appendix-E-mcp-server-catalog.md](../../../../sources/eremes81__game-design-ai-practice-th/manuscript/part99-appendix/appendix-E-mcp-server-catalog.md)<br>[manuscript/part20-team-collab/chapter-4-mcp-project-management.md](../../../../sources/eremes81__game-design-ai-practice-th/manuscript/part20-team-collab/chapter-4-mcp-project-management.md) |
| retrieval | 6 | [manuscript/part99-appendix/appendix-F-case-index.md](../../../../sources/eremes81__game-design-ai-practice-th/manuscript/part99-appendix/appendix-F-case-index.md)<br>[manuscript/part99-appendix/appendix-M-embedding-intuition.md](../../../../sources/eremes81__game-design-ai-practice-th/manuscript/part99-appendix/appendix-M-embedding-intuition.md)<br>[manuscript/part20-team-collab/chapter-1-team-memory-operations.md](../../../../sources/eremes81__game-design-ai-practice-th/manuscript/part20-team-collab/chapter-1-team-memory-operations.md)<br>[manuscript/part20-team-collab/chapter-2-team-member-memory.md](../../../../sources/eremes81__game-design-ai-practice-th/manuscript/part20-team-collab/chapter-2-team-member-memory.md)<br>[manuscript/part02-info-architecture/chapter-7-ontology-graph.md](../../../../sources/eremes81__game-design-ai-practice-th/manuscript/part02-info-architecture/chapter-7-ontology-graph.md)<br>[manuscript/part01-foundation/chapter-3-memory-permission-setting.md](../../../../sources/eremes81__game-design-ai-practice-th/manuscript/part01-foundation/chapter-3-memory-permission-setting.md) |
| spec | 36 | [manuscript/part14-mobile-platform/chapter-3-touch-mouse-input-design.md](../../../../sources/eremes81__game-design-ai-practice-th/manuscript/part14-mobile-platform/chapter-3-touch-mouse-input-design.md)<br>[manuscript/part12-art-direction/chapter-3-spec-to-asset-flow.md](../../../../sources/eremes81__game-design-ai-practice-th/manuscript/part12-art-direction/chapter-3-spec-to-asset-flow.md)<br>[manuscript/part10-qa-design/chapter-1-integrity-check-atoms.md](../../../../sources/eremes81__game-design-ai-practice-th/manuscript/part10-qa-design/chapter-1-integrity-check-atoms.md)<br>[manuscript/part10-qa-design/chapter-2-decision-validation-3-layer.md](../../../../sources/eremes81__game-design-ai-practice-th/manuscript/part10-qa-design/chapter-2-decision-validation-3-layer.md)<br>[manuscript/part10-qa-design/chapter-3-alpha-gap-report.md](../../../../sources/eremes81__game-design-ai-practice-th/manuscript/part10-qa-design/chapter-3-alpha-gap-report.md)<br>[manuscript/part09-ux-ui-design/chapter-1-hud-layout.md](../../../../sources/eremes81__game-design-ai-practice-th/manuscript/part09-ux-ui-design/chapter-1-hud-layout.md)<br>[manuscript/part09-ux-ui-design/chapter-2-skill-ui-button-column.md](../../../../sources/eremes81__game-design-ai-practice-th/manuscript/part09-ux-ui-design/chapter-2-skill-ui-button-column.md)<br>[manuscript/part09-ux-ui-design/chapter-3-artguide-ui-collaboration.md](../../../../sources/eremes81__game-design-ai-practice-th/manuscript/part09-ux-ui-design/chapter-3-artguide-ui-collaboration.md) |
| eval | 1 | [manuscript/part12-art-direction/chapter-3-spec-to-asset-flow.md](../../../../sources/eremes81__game-design-ai-practice-th/manuscript/part12-art-direction/chapter-3-spec-to-asset-flow.md) |
| security | 1 | [manuscript/part01-foundation/chapter-3-memory-permission-setting.md](../../../../sources/eremes81__game-design-ai-practice-th/manuscript/part01-foundation/chapter-3-memory-permission-setting.md) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/eremes81__game-design-ai-practice-th/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1 | [manuscript/part12-art-direction/chapter-3-spec-to-asset-flow.md](../../../../sources/eremes81__game-design-ai-practice-th/manuscript/part12-art-direction/chapter-3-spec-to-asset-flow.md) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [manuscript/part01-foundation/chapter-3-memory-permission-setting.md](../../../../sources/eremes81__game-design-ai-practice-th/manuscript/part01-foundation/chapter-3-memory-permission-setting.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `manuscript/part99-appendix/appendix-E-mcp-server-catalog.md`, `manuscript/part20-team-collab/chapter-4-mcp-project-management.md`, `manuscript/part12-art-direction/chapter-3-spec-to-asset-flow.md`.
2. Inspect retrieval/memory/indexing through: `manuscript/part99-appendix/appendix-F-case-index.md`, `manuscript/part99-appendix/appendix-M-embedding-intuition.md`, `manuscript/part20-team-collab/chapter-1-team-memory-operations.md`.
3. Verify behavior through test/eval files: `manuscript/part12-art-direction/chapter-3-spec-to-asset-flow.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 AI · Claude Code สำหรับงานออกแบบเกมในทางปฏิบัติ — Thai edition of the Korean original CC BY NC SA 4.0, original ISBN 979. 핵심 구조 신호는 README.md, LICENSE, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
