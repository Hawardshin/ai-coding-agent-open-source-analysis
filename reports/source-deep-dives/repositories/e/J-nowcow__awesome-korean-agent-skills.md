# J-nowcow/awesome-korean-agent-skills Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local source directory present in this repository.

## 요약

- 조사 단위: `sources/J-nowcow__awesome-korean-agent-skills` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 60 files, 8 directories, depth score 66, key references 3개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=.github/workflows/skill-scout.yml이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 3개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | J-nowcow/awesome-korean-agent-skills |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source-only |
| Source | [sources/J-nowcow__awesome-korean-agent-skills](../../../../sources/J-nowcow__awesome-korean-agent-skills) |
| Existing report | none |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 60 / 8 |
| Max observed depth | 3 |
| Top directories | .github, categories, data, docs |
| Top extensions | .md: 36, .sh: 7, .yml: 6, .html: 2, .json: 2, .mjs: 2, .svg: 2, .txt: 1, .xml: 1, (none): 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 16 |
| .github | ci surface | 1 |
| categories | top-level component | 1 |
| data | top-level component | 1 |


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
| agentRuntime | [.github/workflows/skill-scout.yml](../../../../sources/J-nowcow__awesome-korean-agent-skills/.github/workflows/skill-scout.yml) | agentRuntime signal |
| ci | [.github/workflows/ci.yml](../../../../sources/J-nowcow__awesome-korean-agent-skills/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/health-check.yml](../../../../sources/J-nowcow__awesome-korean-agent-skills/.github/workflows/health-check.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 1 | [.github/workflows/skill-scout.yml](../../../../sources/J-nowcow__awesome-korean-agent-skills/.github/workflows/skill-scout.yml) |
| mcp | 0 | not obvious |
| retrieval | 1 | [docs/index.html](../../../../sources/J-nowcow__awesome-korean-agent-skills/docs/index.html) |
| spec | 2 | [docs/architecture.md](../../../../sources/J-nowcow__awesome-korean-agent-skills/docs/architecture.md)<br>[docs/specs/2026-04-10-auto-maintenance-design.md](../../../../sources/J-nowcow__awesome-korean-agent-skills/docs/specs/2026-04-10-auto-maintenance-design.md) |
| eval | 0 | not obvious |
| security | 1 | [categories/security.md](../../../../sources/J-nowcow__awesome-korean-agent-skills/categories/security.md) |
| ci | 6 | [.github/workflows/ci.yml](../../../../sources/J-nowcow__awesome-korean-agent-skills/.github/workflows/ci.yml)<br>[.github/workflows/health-check.yml](../../../../sources/J-nowcow__awesome-korean-agent-skills/.github/workflows/health-check.yml)<br>[.github/workflows/link-checker.yml](../../../../sources/J-nowcow__awesome-korean-agent-skills/.github/workflows/link-checker.yml)<br>[.github/workflows/skill-scout.yml](../../../../sources/J-nowcow__awesome-korean-agent-skills/.github/workflows/skill-scout.yml)<br>[.github/workflows/sync-counts.yml](../../../../sources/J-nowcow__awesome-korean-agent-skills/.github/workflows/sync-counts.yml)<br>[.github/workflows/weekly-picks.yml](../../../../sources/J-nowcow__awesome-korean-agent-skills/.github/workflows/weekly-picks.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 14 | [README.en.md](../../../../sources/J-nowcow__awesome-korean-agent-skills/README.en.md)<br>[README.md](../../../../sources/J-nowcow__awesome-korean-agent-skills/README.md)<br>[docs/architecture.md](../../../../sources/J-nowcow__awesome-korean-agent-skills/docs/architecture.md)<br>[docs/google169180d0cc9f9d04.html](../../../../sources/J-nowcow__awesome-korean-agent-skills/docs/google169180d0cc9f9d04.html)<br>[docs/how-it-works.en.md](../../../../sources/J-nowcow__awesome-korean-agent-skills/docs/how-it-works.en.md)<br>[docs/how-it-works.md](../../../../sources/J-nowcow__awesome-korean-agent-skills/docs/how-it-works.md)<br>[docs/index.html](../../../../sources/J-nowcow__awesome-korean-agent-skills/docs/index.html)<br>[docs/mascot.svg](../../../../sources/J-nowcow__awesome-korean-agent-skills/docs/mascot.svg) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 6 | [.github/workflows/ci.yml](../../../../sources/J-nowcow__awesome-korean-agent-skills/.github/workflows/ci.yml)<br>[.github/workflows/health-check.yml](../../../../sources/J-nowcow__awesome-korean-agent-skills/.github/workflows/health-check.yml)<br>[.github/workflows/link-checker.yml](../../../../sources/J-nowcow__awesome-korean-agent-skills/.github/workflows/link-checker.yml)<br>[.github/workflows/skill-scout.yml](../../../../sources/J-nowcow__awesome-korean-agent-skills/.github/workflows/skill-scout.yml)<br>[.github/workflows/sync-counts.yml](../../../../sources/J-nowcow__awesome-korean-agent-skills/.github/workflows/sync-counts.yml)<br>[.github/workflows/weekly-picks.yml](../../../../sources/J-nowcow__awesome-korean-agent-skills/.github/workflows/weekly-picks.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [categories/security.md](../../../../sources/J-nowcow__awesome-korean-agent-skills/categories/security.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious; test/eval path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `.github/workflows/skill-scout.yml`, `.github/workflows/ci.yml`, `.github/workflows/health-check.yml`.
2. Map agent/tool runtime through: `.github/workflows/skill-scout.yml`.
3. Inspect retrieval/memory/indexing through: `docs/index.html`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local source directory present in this repository.. 핵심 구조 신호는 README.md, LICENSE, ci, docs, spec-artifacts이며, source-only 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 no dedicated report link, test signal not obvious, license metadata missing, needs deeper structural scan입니다.
