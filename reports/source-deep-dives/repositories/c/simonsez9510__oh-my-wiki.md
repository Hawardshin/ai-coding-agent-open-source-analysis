# simonsez9510/oh-my-wiki Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

빈 옵시디언 vault를 5분 만에 LLM Wiki 시드로 부트스트랩하는 Claude Code 플러그인 (원성묵 원장 강의 IP)

## 요약

- 조사 단위: `sources/simonsez9510__oh-my-wiki` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 29 files, 13 directories, depth score 38, key references 3개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 docs=README.md, demo/README.md, demo/_after_example/README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 3개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | simonsez9510/oh-my-wiki |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | PowerShell |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/simonsez9510__oh-my-wiki](../../../../sources/simonsez9510__oh-my-wiki) |
| Existing report | [reports/korea-trending/repositories/simonsez9510__oh-my-wiki.md](../../../korea-trending/repositories/simonsez9510__oh-my-wiki.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 29 / 13 |
| Max observed depth | 5 |
| Top directories | .claude-plugin, demo, skills |
| Top extensions | .md: 20, (none): 3, .base: 2, .json: 2, .ps1: 2 |
| Source patterns | agent/tool runtime |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| demo | top-level component | 1 |
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
| docs | [README.md](../../../../sources/simonsez9510__oh-my-wiki/README.md) | docs signal |
| docs | [demo/README.md](../../../../sources/simonsez9510__oh-my-wiki/demo/README.md) | docs signal |
| docs | [demo/_after_example/README.md](../../../../sources/simonsez9510__oh-my-wiki/demo/_after_example/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 13 | [skills/bootstrap/SKILL.md](../../../../sources/simonsez9510__oh-my-wiki/skills/bootstrap/SKILL.md)<br>[skills/bootstrap/templates/dashboard.base](../../../../sources/simonsez9510__oh-my-wiki/skills/bootstrap/templates/dashboard.base)<br>[skills/bootstrap/templates/lint.base](../../../../sources/simonsez9510__oh-my-wiki/skills/bootstrap/templates/lint.base)<br>[skills/bootstrap/templates/persona_meta.md](../../../../sources/simonsez9510__oh-my-wiki/skills/bootstrap/templates/persona_meta.md)<br>[skills/bootstrap/templates/일관성카드.md](../../../../sources/simonsez9510__oh-my-wiki/skills/bootstrap/templates/일관성카드.md)<br>[skills/bootstrap/templates/examples/persona_accountant.md](../../../../sources/simonsez9510__oh-my-wiki/skills/bootstrap/templates/examples/persona_accountant.md)<br>[skills/bootstrap/templates/examples/persona_journalist.md](../../../../sources/simonsez9510__oh-my-wiki/skills/bootstrap/templates/examples/persona_journalist.md)<br>[skills/bootstrap/templates/examples/persona_lawyer.md](../../../../sources/simonsez9510__oh-my-wiki/skills/bootstrap/templates/examples/persona_lawyer.md) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 3 | [README.md](../../../../sources/simonsez9510__oh-my-wiki/README.md)<br>[demo/README.md](../../../../sources/simonsez9510__oh-my-wiki/demo/README.md)<br>[demo/_after_example/README.md](../../../../sources/simonsez9510__oh-my-wiki/demo/_after_example/README.md) |
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
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `README.md`, `demo/README.md`, `demo/_after_example/README.md`.
2. Map agent/tool runtime through: `skills/bootstrap/SKILL.md`, `skills/bootstrap/templates/dashboard.base`, `skills/bootstrap/templates/lint.base`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 빈 옵시디언 vault를 5분 만에 LLM Wiki 시드로 부트스트랩하는 Claude Code 플러그인 원성묵 원장 강의 IP. 핵심 구조 신호는 PowerShell, README.md, LICENSE, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
