# FredAntB/Spec-Driven-Development Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 33 files, 11 directories.

## 요약

- 조사 단위: `sources/FredAntB__Spec-Driven-Development` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 33 files, 11 directories, depth score 84, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

스펙 드리븐/요구사항 관점에서 agent/tool runtime, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 spec=phase2c/flow_b/design.md, phase2c/flow_b/requirements.md, phase2c/flow_a/design.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 spec workflow and requirements reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | FredAntB/Spec-Driven-Development |
| Topic | Spec-Driven and Requirements / 스펙 드리븐/요구사항 |
| Region | mixed |
| Language | Python |
| Stars | 92 |
| Forks | 7 |
| License | MIT License |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/FredAntB__Spec-Driven-Development](../../../../sources/FredAntB__Spec-Driven-Development) |
| Existing report | [reports/clone-structures/FredAntB__Spec-Driven-Development.md](../../../clone-structures/FredAntB__Spec-Driven-Development.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 33 / 11 |
| Max observed depth | 4 |
| Top directories | .github, beta, phase2a, phase2b, phase2c, references |
| Top extensions | .md: 26, (none): 4, .py: 2, .yml: 1 |
| Source patterns | agent/tool runtime, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| beta | top-level component | 1 |
| phase2a | top-level component | 1 |
| phase2b | top-level component | 1 |
| phase2c | top-level component | 1 |
| references | top-level component | 1 |


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
| spec | [phase2c/flow_b/design.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_b/design.md) | spec signal |
| spec | [phase2c/flow_b/requirements.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_b/requirements.md) | spec signal |
| spec | [phase2c/flow_a/design.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_a/design.md) | spec signal |
| spec | [phase2c/flow_a/requirements.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_a/requirements.md) | spec signal |
| instruction | [CLAUDE.md](../../../../sources/FredAntB__Spec-Driven-Development/CLAUDE.md) | instruction signal |
| instruction | [phase2c/flow_c/CLAUDE.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_c/CLAUDE.md) | instruction signal |
| instruction | [phase2c/flow_c/.github/copilot-instructions.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_c/.github/copilot-instructions.md) | instruction signal |
| instruction | [phase2c/flow_a/CLAUDE.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_a/CLAUDE.md) | instruction signal |
| eval | [phase2c/eval_flows.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/eval_flows.md) | eval signal |
| eval | [phase2c/eval_report_2c.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/eval_report_2c.md) | eval signal |
| eval | [phase2b/eval_report.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2b/eval_report.md) | eval signal |
| eval | [phase2b/eval_session.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2b/eval_session.md) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 1 | [SKILL.md](../../../../sources/FredAntB__Spec-Driven-Development/SKILL.md) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 4 | [phase2c/flow_b/design.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_b/design.md)<br>[phase2c/flow_b/requirements.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_b/requirements.md)<br>[phase2c/flow_a/design.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_a/design.md)<br>[phase2c/flow_a/requirements.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_a/requirements.md) |
| eval | 4 | [phase2c/eval_flows.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/eval_flows.md)<br>[phase2c/eval_report_2c.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/eval_report_2c.md)<br>[phase2b/eval_report.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2b/eval_report.md)<br>[phase2b/eval_session.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2b/eval_session.md) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/FredAntB__Spec-Driven-Development/.github/workflows/ci.yml) |
| container | 0 | not obvious |
| instruction | 4 | [CLAUDE.md](../../../../sources/FredAntB__Spec-Driven-Development/CLAUDE.md)<br>[phase2c/flow_c/CLAUDE.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_c/CLAUDE.md)<br>[phase2c/flow_c/.github/copilot-instructions.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_c/.github/copilot-instructions.md)<br>[phase2c/flow_a/CLAUDE.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_a/CLAUDE.md) |
| docs | 1 | [README.md](../../../../sources/FredAntB__Spec-Driven-Development/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 4 | [phase2c/eval_flows.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/eval_flows.md)<br>[phase2c/eval_report_2c.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/eval_report_2c.md)<br>[phase2b/eval_report.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2b/eval_report.md)<br>[phase2b/eval_session.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2b/eval_session.md) |
| CI workflows | 1 | [.github/workflows/ci.yml](../../../../sources/FredAntB__Spec-Driven-Development/.github/workflows/ci.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 4 | [CLAUDE.md](../../../../sources/FredAntB__Spec-Driven-Development/CLAUDE.md)<br>[phase2c/flow_c/CLAUDE.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_c/CLAUDE.md)<br>[phase2c/flow_c/.github/copilot-instructions.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_c/.github/copilot-instructions.md)<br>[phase2c/flow_a/CLAUDE.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_a/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `phase2c/flow_b/design.md`, `phase2c/flow_b/requirements.md`, `phase2c/flow_a/design.md`.
2. Map agent/tool runtime through: `SKILL.md`.
3. Verify behavior through test/eval files: `phase2c/eval_flows.md`, `phase2c/eval_report_2c.md`, `phase2b/eval_report.md`.

## Existing Repository Insight

스펙 드리븐/요구사항 관점에서 Local clone structure analysis 33 files, 11 directories.. 핵심 구조 신호는 Python, README.md, CLAUDE.md, LICENSE, ci, docs이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 스펙 드리븐/요구사항 레포입니다. 활용 관점은 spec workflow and requirements reference이고, 후속 확인 포인트는 test signal not obvious입니다.
