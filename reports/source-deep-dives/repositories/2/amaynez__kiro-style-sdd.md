# amaynez/kiro-style-sdd Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 26 files, 12 directories.

## 요약

- 조사 단위: `sources/amaynez__kiro-style-sdd` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 26 files, 12 directories, depth score 77, key references 9개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=tests/skills.test.js, .skills/spec/SKILL.md, .skills/plan/SKILL.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | amaynez/kiro-style-sdd |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | JavaScript |
| Stars | 77 |
| Forks | 17 |
| License | GNU General Public License v3.0 |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/amaynez__kiro-style-sdd](../../../../sources/amaynez__kiro-style-sdd) |
| Existing report | [reports/clone-structures/amaynez__kiro-style-sdd.md](../../../clone-structures/amaynez__kiro-style-sdd.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 26 / 12 |
| Max observed depth | 3 |
| Top directories | .claude, .cursor, .kiro, .skills, tests |
| Top extensions | .md: 17, .mdc: 4, .json: 2, (none): 2, .js: 1 |
| Source patterns | agent/tool runtime, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 3 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| test | package.json | test | node --test |


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
| agentRuntime | [tests/skills.test.js](../../../../sources/amaynez__kiro-style-sdd/tests/skills.test.js) | agentRuntime signal |
| agentRuntime | [.skills/spec/SKILL.md](../../../../sources/amaynez__kiro-style-sdd/.skills/spec/SKILL.md) | agentRuntime signal |
| agentRuntime | [.skills/plan/SKILL.md](../../../../sources/amaynez__kiro-style-sdd/.skills/plan/SKILL.md) | agentRuntime signal |
| agentRuntime | [.skills/implement/SKILL.md](../../../../sources/amaynez__kiro-style-sdd/.skills/implement/SKILL.md) | agentRuntime signal |
| instruction | [.cursor/rules/design.mdc](../../../../sources/amaynez__kiro-style-sdd/.cursor/rules/design.mdc) | instruction signal |
| instruction | [.cursor/rules/implement.mdc](../../../../sources/amaynez__kiro-style-sdd/.cursor/rules/implement.mdc) | instruction signal |
| instruction | [.cursor/rules/plan.mdc](../../../../sources/amaynez__kiro-style-sdd/.cursor/rules/plan.mdc) | instruction signal |
| instruction | [.cursor/rules/spec.mdc](../../../../sources/amaynez__kiro-style-sdd/.cursor/rules/spec.mdc) | instruction signal |
| config | [package.json](../../../../sources/amaynez__kiro-style-sdd/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 13 | [tests/skills.test.js](../../../../sources/amaynez__kiro-style-sdd/tests/skills.test.js)<br>[.skills/spec/SKILL.md](../../../../sources/amaynez__kiro-style-sdd/.skills/spec/SKILL.md)<br>[.skills/plan/SKILL.md](../../../../sources/amaynez__kiro-style-sdd/.skills/plan/SKILL.md)<br>[.skills/implement/SKILL.md](../../../../sources/amaynez__kiro-style-sdd/.skills/implement/SKILL.md)<br>[.skills/design/SKILL.md](../../../../sources/amaynez__kiro-style-sdd/.skills/design/SKILL.md)<br>[.kiro/skills/design.md](../../../../sources/amaynez__kiro-style-sdd/.kiro/skills/design.md)<br>[.kiro/skills/implement.md](../../../../sources/amaynez__kiro-style-sdd/.kiro/skills/implement.md)<br>[.kiro/skills/plan.md](../../../../sources/amaynez__kiro-style-sdd/.kiro/skills/plan.md) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 10 | [.skills/spec/SKILL.md](../../../../sources/amaynez__kiro-style-sdd/.skills/spec/SKILL.md)<br>[.skills/spec/template.md](../../../../sources/amaynez__kiro-style-sdd/.skills/spec/template.md)<br>[.skills/design/SKILL.md](../../../../sources/amaynez__kiro-style-sdd/.skills/design/SKILL.md)<br>[.skills/design/template.md](../../../../sources/amaynez__kiro-style-sdd/.skills/design/template.md)<br>[.kiro/skills/design.md](../../../../sources/amaynez__kiro-style-sdd/.kiro/skills/design.md)<br>[.kiro/skills/spec.md](../../../../sources/amaynez__kiro-style-sdd/.kiro/skills/spec.md)<br>[.cursor/rules/design.mdc](../../../../sources/amaynez__kiro-style-sdd/.cursor/rules/design.mdc)<br>[.cursor/rules/spec.mdc](../../../../sources/amaynez__kiro-style-sdd/.cursor/rules/spec.mdc) |
| eval | 6 | [tests/skills.test.js](../../../../sources/amaynez__kiro-style-sdd/tests/skills.test.js)<br>[.skills/spec/SKILL.md](../../../../sources/amaynez__kiro-style-sdd/.skills/spec/SKILL.md)<br>[.skills/spec/template.md](../../../../sources/amaynez__kiro-style-sdd/.skills/spec/template.md)<br>[.kiro/skills/spec.md](../../../../sources/amaynez__kiro-style-sdd/.kiro/skills/spec.md)<br>[.cursor/rules/spec.mdc](../../../../sources/amaynez__kiro-style-sdd/.cursor/rules/spec.mdc)<br>[.claude/skills/spec.md](../../../../sources/amaynez__kiro-style-sdd/.claude/skills/spec.md) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 4 | [.cursor/rules/design.mdc](../../../../sources/amaynez__kiro-style-sdd/.cursor/rules/design.mdc)<br>[.cursor/rules/implement.mdc](../../../../sources/amaynez__kiro-style-sdd/.cursor/rules/implement.mdc)<br>[.cursor/rules/plan.mdc](../../../../sources/amaynez__kiro-style-sdd/.cursor/rules/plan.mdc)<br>[.cursor/rules/spec.mdc](../../../../sources/amaynez__kiro-style-sdd/.cursor/rules/spec.mdc) |
| docs | 1 | [README.md](../../../../sources/amaynez__kiro-style-sdd/README.md) |
| config | 1 | [package.json](../../../../sources/amaynez__kiro-style-sdd/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 6 | [tests/skills.test.js](../../../../sources/amaynez__kiro-style-sdd/tests/skills.test.js)<br>[.skills/spec/SKILL.md](../../../../sources/amaynez__kiro-style-sdd/.skills/spec/SKILL.md)<br>[.skills/spec/template.md](../../../../sources/amaynez__kiro-style-sdd/.skills/spec/template.md)<br>[.kiro/skills/spec.md](../../../../sources/amaynez__kiro-style-sdd/.kiro/skills/spec.md)<br>[.cursor/rules/spec.mdc](../../../../sources/amaynez__kiro-style-sdd/.cursor/rules/spec.mdc)<br>[.claude/skills/spec.md](../../../../sources/amaynez__kiro-style-sdd/.claude/skills/spec.md) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 4 | [.cursor/rules/design.mdc](../../../../sources/amaynez__kiro-style-sdd/.cursor/rules/design.mdc)<br>[.cursor/rules/implement.mdc](../../../../sources/amaynez__kiro-style-sdd/.cursor/rules/implement.mdc)<br>[.cursor/rules/plan.mdc](../../../../sources/amaynez__kiro-style-sdd/.cursor/rules/plan.mdc)<br>[.cursor/rules/spec.mdc](../../../../sources/amaynez__kiro-style-sdd/.cursor/rules/spec.mdc) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `tests/skills.test.js`, `.skills/spec/SKILL.md`, `.skills/plan/SKILL.md`.
2. Map agent/tool runtime through: `tests/skills.test.js`, `.skills/spec/SKILL.md`, `.skills/plan/SKILL.md`.
3. Verify behavior through test/eval files: `tests/skills.test.js`, `.skills/spec/SKILL.md`, `.skills/spec/template.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 26 files, 12 directories.. 핵심 구조 신호는 JavaScript, package.json, README.md, LICENSE, tests, docs이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 ci signal not obvious입니다.
