# mcpads/create-retro-game-kr-patch Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

레트로 게임 한글 패치 제작 전 파이프라인 Claude Code 스킬 · Claude Code skill for end-to-end Korean (Hangul) fan-translation patches for retro games

## 요약

- 조사 단위: `sources/mcpads__create-retro-game-kr-patch` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 27 files, 6 directories, depth score 39, key references 4개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=skills/create-kr-patch/SKILL.md, skills/create-kr-patch/references/strategy/build-and-verify.md, skills/create-kr-patch/references/strategy/compression.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 4개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | mcpads/create-retro-game-kr-patch |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/mcpads__create-retro-game-kr-patch](../../../../sources/mcpads__create-retro-game-kr-patch) |
| Existing report | [reports/korea-trending/repositories/mcpads__create-retro-game-kr-patch.md](../../../korea-trending/repositories/mcpads__create-retro-game-kr-patch.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 27 / 6 |
| Max observed depth | 5 |
| Top directories | .claude-plugin, skills |
| Top extensions | .md: 23, .json: 2, (none): 2 |
| Source patterns | agent/tool runtime |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| skills | top-level component | 1 |


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
| agentRuntime | [skills/create-kr-patch/SKILL.md](../../../../sources/mcpads__create-retro-game-kr-patch/skills/create-kr-patch/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/create-kr-patch/references/strategy/build-and-verify.md](../../../../sources/mcpads__create-retro-game-kr-patch/skills/create-kr-patch/references/strategy/build-and-verify.md) | agentRuntime signal |
| agentRuntime | [skills/create-kr-patch/references/strategy/compression.md](../../../../sources/mcpads__create-retro-game-kr-patch/skills/create-kr-patch/references/strategy/compression.md) | agentRuntime signal |
| agentRuntime | [skills/create-kr-patch/references/strategy/debugging.md](../../../../sources/mcpads__create-retro-game-kr-patch/skills/create-kr-patch/references/strategy/debugging.md) | agentRuntime signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 21 | [skills/create-kr-patch/SKILL.md](../../../../sources/mcpads__create-retro-game-kr-patch/skills/create-kr-patch/SKILL.md)<br>[skills/create-kr-patch/references/strategy/build-and-verify.md](../../../../sources/mcpads__create-retro-game-kr-patch/skills/create-kr-patch/references/strategy/build-and-verify.md)<br>[skills/create-kr-patch/references/strategy/compression.md](../../../../sources/mcpads__create-retro-game-kr-patch/skills/create-kr-patch/references/strategy/compression.md)<br>[skills/create-kr-patch/references/strategy/debugging.md](../../../../sources/mcpads__create-retro-game-kr-patch/skills/create-kr-patch/references/strategy/debugging.md)<br>[skills/create-kr-patch/references/strategy/font-strategy.md](../../../../sources/mcpads__create-retro-game-kr-patch/skills/create-kr-patch/references/strategy/font-strategy.md)<br>[skills/create-kr-patch/references/strategy/graphics-text.md](../../../../sources/mcpads__create-retro-game-kr-patch/skills/create-kr-patch/references/strategy/graphics-text.md)<br>[skills/create-kr-patch/references/strategy/initial-survey.md](../../../../sources/mcpads__create-retro-game-kr-patch/skills/create-kr-patch/references/strategy/initial-survey.md)<br>[skills/create-kr-patch/references/strategy/poc.md](../../../../sources/mcpads__create-retro-game-kr-patch/skills/create-kr-patch/references/strategy/poc.md) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/mcpads__create-retro-game-kr-patch/README.md) |
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

1. Start from key references: `skills/create-kr-patch/SKILL.md`, `skills/create-kr-patch/references/strategy/build-and-verify.md`, `skills/create-kr-patch/references/strategy/compression.md`.
2. Map agent/tool runtime through: `skills/create-kr-patch/SKILL.md`, `skills/create-kr-patch/references/strategy/build-and-verify.md`, `skills/create-kr-patch/references/strategy/compression.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 레트로 게임 한글 패치 제작 전 파이프라인 Claude Code 스킬 · Claude Code skill for end to end Korean Hangul fan translation patches for retr. 핵심 구조 신호는 README.md, LICENSE, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
