# BuilderIO/skills Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Skills for coding agents

## 요약

- 조사 단위: `sources/BuilderIO__skills` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 44 files, 28 directories, depth score 64, key references 8개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=skills/visual-recap/README.md, skills/visual-recap/SKILL.md, skills/visual-recap/references/wireframe.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | BuilderIO/skills |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | JavaScript |
| Stars | 877 |
| Forks | 38 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/BuilderIO__skills](../../../../sources/BuilderIO__skills) |
| Existing report | [reports/global-trending/repositories/BuilderIO__skills.md](../../../global-trending/repositories/BuilderIO__skills.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 44 / 28 |
| Max observed depth | 5 |
| Top directories | .agents, .claude-plugin, .codex-plugin, .github, media, scripts, skills |
| Top extensions | .md: 27, .yaml: 5, .json: 3, .png: 3, .yml: 2, .excalidraw: 1, .gif: 1, .mjs: 1, (none): 1 |
| Source patterns | agent/tool runtime, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| media | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | sync:agent-native-plan-skills | node scripts/sync-agent-native-plan-skills.mjs |
| quality | package.json | check | node scripts/sync-agent-native-plan-skills.mjs --check |


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
| agentRuntime | [skills/visual-recap/README.md](../../../../sources/BuilderIO__skills/skills/visual-recap/README.md) | agentRuntime signal |
| agentRuntime | [skills/visual-recap/SKILL.md](../../../../sources/BuilderIO__skills/skills/visual-recap/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/visual-recap/references/wireframe.md](../../../../sources/BuilderIO__skills/skills/visual-recap/references/wireframe.md) | agentRuntime signal |
| agentRuntime | [skills/visual-plan/README.md](../../../../sources/BuilderIO__skills/skills/visual-plan/README.md) | agentRuntime signal |
| config | [package.json](../../../../sources/BuilderIO__skills/package.json) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/BuilderIO__skills/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/update-agent-native-plan-skills.yml](../../../../sources/BuilderIO__skills/.github/workflows/update-agent-native-plan-skills.yml) | ci support |
| eval | [skills/visual-plan/references/document-quality.md](../../../../sources/BuilderIO__skills/skills/visual-plan/references/document-quality.md) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 34 | [skills/visual-recap/README.md](../../../../sources/BuilderIO__skills/skills/visual-recap/README.md)<br>[skills/visual-recap/SKILL.md](../../../../sources/BuilderIO__skills/skills/visual-recap/SKILL.md)<br>[skills/visual-recap/references/wireframe.md](../../../../sources/BuilderIO__skills/skills/visual-recap/references/wireframe.md)<br>[skills/visual-plan/README.md](../../../../sources/BuilderIO__skills/skills/visual-plan/README.md)<br>[skills/visual-plan/SKILL.md](../../../../sources/BuilderIO__skills/skills/visual-plan/SKILL.md)<br>[skills/visual-plan/references/canvas.md](../../../../sources/BuilderIO__skills/skills/visual-plan/references/canvas.md)<br>[skills/visual-plan/references/document-quality.md](../../../../sources/BuilderIO__skills/skills/visual-plan/references/document-quality.md)<br>[skills/visual-plan/references/exemplar.md](../../../../sources/BuilderIO__skills/skills/visual-plan/references/exemplar.md) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 1 | [skills/visual-plan/references/document-quality.md](../../../../sources/BuilderIO__skills/skills/visual-plan/references/document-quality.md) |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/BuilderIO__skills/.github/workflows/ci.yml)<br>[.github/workflows/update-agent-native-plan-skills.yml](../../../../sources/BuilderIO__skills/.github/workflows/update-agent-native-plan-skills.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 11 | [README.md](../../../../sources/BuilderIO__skills/README.md)<br>[skills/visual-recap/README.md](../../../../sources/BuilderIO__skills/skills/visual-recap/README.md)<br>[skills/visual-plan/README.md](../../../../sources/BuilderIO__skills/skills/visual-plan/README.md)<br>[skills/stay-within-limits/README.md](../../../../sources/BuilderIO__skills/skills/stay-within-limits/README.md)<br>[skills/read-the-damn-docs/README.md](../../../../sources/BuilderIO__skills/skills/read-the-damn-docs/README.md)<br>[skills/quick-recap/README.md](../../../../sources/BuilderIO__skills/skills/quick-recap/README.md)<br>[skills/plow-ahead/README.md](../../../../sources/BuilderIO__skills/skills/plow-ahead/README.md)<br>[skills/plan-arbiter/README.md](../../../../sources/BuilderIO__skills/skills/plan-arbiter/README.md) |
| config | 1 | [package.json](../../../../sources/BuilderIO__skills/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1 | [skills/visual-plan/references/document-quality.md](../../../../sources/BuilderIO__skills/skills/visual-plan/references/document-quality.md) |
| CI workflows | 2 | [.github/workflows/ci.yml](../../../../sources/BuilderIO__skills/.github/workflows/ci.yml)<br>[.github/workflows/update-agent-native-plan-skills.yml](../../../../sources/BuilderIO__skills/.github/workflows/update-agent-native-plan-skills.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `skills/visual-recap/README.md`, `skills/visual-recap/SKILL.md`, `skills/visual-recap/references/wireframe.md`.
2. Map agent/tool runtime through: `skills/visual-recap/README.md`, `skills/visual-recap/SKILL.md`, `skills/visual-recap/references/wireframe.md`.
3. Verify behavior through test/eval files: `skills/visual-plan/references/document-quality.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Skills for coding agents. 핵심 구조 신호는 JavaScript, package.json, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
