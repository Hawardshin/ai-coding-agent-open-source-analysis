# tesslio/spec-driven-development-tile Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 37 files, 20 directories.

## 요약

- 조사 단위: `sources/tesslio__spec-driven-development-tile` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 37 files, 20 directories, depth score 99, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

스펙 드리븐/요구사항 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 spec=skills/spec-writer/SKILL.md, skills/spec-verification/SKILL.md, skills/requirement-gathering/SKILL.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 spec workflow and requirements reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | tesslio/spec-driven-development-tile |
| Topic | Spec-Driven and Requirements / 스펙 드리븐/요구사항 |
| Region | mixed |
| Language | Shell |
| Stars | 40 |
| Forks | 7 |
| License | MIT License |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/tesslio__spec-driven-development-tile](../../../../sources/tesslio__spec-driven-development-tile) |
| Existing report | [reports/clone-structures/tesslio__spec-driven-development-tile.md](../../../clone-structures/tesslio__spec-driven-development-tile.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 37 / 20 |
| Max observed depth | 3 |
| Top directories | .github, docs, evals, rules, scripts, skills |
| Top extensions | .md: 20, .json: 10, (none): 3, .sh: 2, .yaml: 2 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 9 |
| .github | ci surface | 1 |
| evals | top-level component | 1 |
| rules | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | publish | make publish |
| quality | Makefile | lint | make lint |
| utility | Makefile | review | make review |
| utility | Makefile | eval | make eval |


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
| spec | [skills/spec-writer/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/spec-writer/SKILL.md) | spec signal |
| spec | [skills/spec-verification/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/spec-verification/SKILL.md) | spec signal |
| spec | [skills/requirement-gathering/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/requirement-gathering/SKILL.md) | spec signal |
| spec | [scripts/check-spec-links.sh](../../../../sources/tesslio__spec-driven-development-tile/scripts/check-spec-links.sh) | spec signal |
| eval | [rules/spec-before-code.md](../../../../sources/tesslio__spec-driven-development-tile/rules/spec-before-code.md) | eval signal |
| docs | [README.md](../../../../sources/tesslio__spec-driven-development-tile/README.md) | docs signal |
| docs | [docs/index.md](../../../../sources/tesslio__spec-driven-development-tile/docs/index.md) | docs signal |
| docs | [docs/spec-format.md](../../../../sources/tesslio__spec-driven-development-tile/docs/spec-format.md) | docs signal |
| docs | [docs/spec-styleguide.md](../../../../sources/tesslio__spec-driven-development-tile/docs/spec-styleguide.md) | docs signal |
| config | [Makefile](../../../../sources/tesslio__spec-driven-development-tile/Makefile) | config signal |
| ci | [.github/workflows/ci.yaml](../../../../sources/tesslio__spec-driven-development-tile/.github/workflows/ci.yaml) | ci support |
| ci | [.github/workflows/publish.yaml](../../../../sources/tesslio__spec-driven-development-tile/.github/workflows/publish.yaml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 4 | [skills/work-review/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/work-review/SKILL.md)<br>[skills/spec-writer/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/spec-writer/SKILL.md)<br>[skills/spec-verification/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/spec-verification/SKILL.md)<br>[skills/requirement-gathering/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/requirement-gathering/SKILL.md) |
| mcp | 0 | not obvious |
| retrieval | 1 | [docs/index.md](../../../../sources/tesslio__spec-driven-development-tile/docs/index.md) |
| spec | 22 | [skills/spec-writer/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/spec-writer/SKILL.md)<br>[skills/spec-verification/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/spec-verification/SKILL.md)<br>[skills/requirement-gathering/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/requirement-gathering/SKILL.md)<br>[scripts/check-spec-links.sh](../../../../sources/tesslio__spec-driven-development-tile/scripts/check-spec-links.sh)<br>[rules/spec-before-code.md](../../../../sources/tesslio__spec-driven-development-tile/rules/spec-before-code.md)<br>[rules/spec-format-compliance.md](../../../../sources/tesslio__spec-driven-development-tile/rules/spec-format-compliance.md)<br>[evals/work-review-with-discovered-requirements/criteria.json](../../../../sources/tesslio__spec-driven-development-tile/evals/work-review-with-discovered-requirements/criteria.json)<br>[evals/work-review-with-discovered-requirements/task.md](../../../../sources/tesslio__spec-driven-development-tile/evals/work-review-with-discovered-requirements/task.md) |
| eval | 17 | [skills/spec-writer/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/spec-writer/SKILL.md)<br>[skills/spec-verification/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/spec-verification/SKILL.md)<br>[scripts/check-spec-links.sh](../../../../sources/tesslio__spec-driven-development-tile/scripts/check-spec-links.sh)<br>[rules/spec-before-code.md](../../../../sources/tesslio__spec-driven-development-tile/rules/spec-before-code.md)<br>[rules/spec-format-compliance.md](../../../../sources/tesslio__spec-driven-development-tile/rules/spec-format-compliance.md)<br>[evals/spec-update-for-new-requirement/criteria.json](../../../../sources/tesslio__spec-driven-development-tile/evals/spec-update-for-new-requirement/criteria.json)<br>[evals/spec-update-for-new-requirement/task.md](../../../../sources/tesslio__spec-driven-development-tile/evals/spec-update-for-new-requirement/task.md)<br>[evals/spec-from-vague-request/criteria.json](../../../../sources/tesslio__spec-driven-development-tile/evals/spec-from-vague-request/criteria.json) |
| security | 1 | [rules/spec-format-compliance.md](../../../../sources/tesslio__spec-driven-development-tile/rules/spec-format-compliance.md) |
| ci | 2 | [.github/workflows/ci.yaml](../../../../sources/tesslio__spec-driven-development-tile/.github/workflows/ci.yaml)<br>[.github/workflows/publish.yaml](../../../../sources/tesslio__spec-driven-development-tile/.github/workflows/publish.yaml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 4 | [README.md](../../../../sources/tesslio__spec-driven-development-tile/README.md)<br>[docs/index.md](../../../../sources/tesslio__spec-driven-development-tile/docs/index.md)<br>[docs/spec-format.md](../../../../sources/tesslio__spec-driven-development-tile/docs/spec-format.md)<br>[docs/spec-styleguide.md](../../../../sources/tesslio__spec-driven-development-tile/docs/spec-styleguide.md) |
| config | 1 | [Makefile](../../../../sources/tesslio__spec-driven-development-tile/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 17 | [skills/spec-writer/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/spec-writer/SKILL.md)<br>[skills/spec-verification/SKILL.md](../../../../sources/tesslio__spec-driven-development-tile/skills/spec-verification/SKILL.md)<br>[scripts/check-spec-links.sh](../../../../sources/tesslio__spec-driven-development-tile/scripts/check-spec-links.sh)<br>[rules/spec-before-code.md](../../../../sources/tesslio__spec-driven-development-tile/rules/spec-before-code.md)<br>[rules/spec-format-compliance.md](../../../../sources/tesslio__spec-driven-development-tile/rules/spec-format-compliance.md)<br>[evals/spec-update-for-new-requirement/criteria.json](../../../../sources/tesslio__spec-driven-development-tile/evals/spec-update-for-new-requirement/criteria.json) |
| CI workflows | 2 | [.github/workflows/ci.yaml](../../../../sources/tesslio__spec-driven-development-tile/.github/workflows/ci.yaml)<br>[.github/workflows/publish.yaml](../../../../sources/tesslio__spec-driven-development-tile/.github/workflows/publish.yaml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [rules/spec-format-compliance.md](../../../../sources/tesslio__spec-driven-development-tile/rules/spec-format-compliance.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `skills/spec-writer/SKILL.md`, `skills/spec-verification/SKILL.md`, `skills/requirement-gathering/SKILL.md`.
2. Map agent/tool runtime through: `skills/work-review/SKILL.md`, `skills/spec-writer/SKILL.md`, `skills/spec-verification/SKILL.md`.
3. Inspect retrieval/memory/indexing through: `docs/index.md`.
4. Verify behavior through test/eval files: `skills/spec-writer/SKILL.md`, `skills/spec-verification/SKILL.md`, `scripts/check-spec-links.sh`.

## Existing Repository Insight

스펙 드리븐/요구사항 관점에서 Local clone structure analysis 37 files, 20 directories.. 핵심 구조 신호는 Shell, Makefile, README.md, LICENSE, ci, docs이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 스펙 드리븐/요구사항 레포입니다. 활용 관점은 spec workflow and requirements reference이고, 후속 확인 포인트는 test signal not obvious입니다.
