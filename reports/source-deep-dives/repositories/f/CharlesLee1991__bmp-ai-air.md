# CharlesLee1991/bmp-ai-air Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

AIR Korean Ad Insights — Tier 1 LLM-First MCP gateway (air.bmp.ai). Operated by BIZACTIONER room.

## 요약

- 조사 단위: `sources/CharlesLee1991__bmp-ai-air` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 21 files, 10 directories, depth score 62, key references 5개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, security/policy surface, ui/extension surface 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md이고, 의존성 단서는 next, react, 검증/운영 단서는 CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 5개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | CharlesLee1991/bmp-ai-air |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/CharlesLee1991__bmp-ai-air](../../../../sources/CharlesLee1991__bmp-ai-air) |
| Existing report | [reports/korea-trending/repositories/CharlesLee1991__bmp-ai-air.md](../../../korea-trending/repositories/CharlesLee1991__bmp-ai-air.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 21 / 10 |
| Max observed depth | 4 |
| Top directories | .github, app, public |
| Top extensions | .tsx: 8, .json: 3, .md: 3, .txt: 2, .css: 1, .mjs: 1, .ts: 1, .yml: 1, (none): 1 |
| Source patterns | agent/tool runtime, security/policy surface, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| app | top-level component | 1 |
| public | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | next dev |
| build | package.json | build | next build |
| serve-dev | package.json | start | next start |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | next, react |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [AGENTS.md](../../../../sources/CharlesLee1991__bmp-ai-air/AGENTS.md) | agentRuntime signal |
| instruction | [CLAUDE.md](../../../../sources/CharlesLee1991__bmp-ai-air/CLAUDE.md) | instruction signal |
| config | [package.json](../../../../sources/CharlesLee1991__bmp-ai-air/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/CharlesLee1991__bmp-ai-air/tsconfig.json) | config signal |
| ci | [.github/workflows/guard.yml](../../../../sources/CharlesLee1991__bmp-ai-air/.github/workflows/guard.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 1 | [AGENTS.md](../../../../sources/CharlesLee1991__bmp-ai-air/AGENTS.md) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 1 | [.github/workflows/guard.yml](../../../../sources/CharlesLee1991__bmp-ai-air/.github/workflows/guard.yml) |
| ci | 1 | [.github/workflows/guard.yml](../../../../sources/CharlesLee1991__bmp-ai-air/.github/workflows/guard.yml) |
| container | 0 | not obvious |
| instruction | 2 | [AGENTS.md](../../../../sources/CharlesLee1991__bmp-ai-air/AGENTS.md)<br>[CLAUDE.md](../../../../sources/CharlesLee1991__bmp-ai-air/CLAUDE.md) |
| docs | 2 | [README.md](../../../../sources/CharlesLee1991__bmp-ai-air/README.md)<br>[app/docs/page.tsx](../../../../sources/CharlesLee1991__bmp-ai-air/app/docs/page.tsx) |
| config | 2 | [package.json](../../../../sources/CharlesLee1991__bmp-ai-air/package.json)<br>[tsconfig.json](../../../../sources/CharlesLee1991__bmp-ai-air/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 1 | [.github/workflows/guard.yml](../../../../sources/CharlesLee1991__bmp-ai-air/.github/workflows/guard.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [.github/workflows/guard.yml](../../../../sources/CharlesLee1991__bmp-ai-air/.github/workflows/guard.yml) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/CharlesLee1991__bmp-ai-air/AGENTS.md)<br>[CLAUDE.md](../../../../sources/CharlesLee1991__bmp-ai-air/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious; test/eval path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `AGENTS.md`, `CLAUDE.md`, `package.json`.
2. Map agent/tool runtime through: `AGENTS.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 AIR Korean Ad Insights — Tier 1 LLM First MCP gateway air.bmp.ai . Operated by BIZACTIONER room.. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, CLAUDE.md, next이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
