# taishi-i/awesome-ChatGPT-repositories Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A curated list of open source GitHub repositories related to ChatGPT, the OpenAI API, and Codex. Searchable via Claude Code skills.

## 요약

- 조사 단위: `sources/taishi-i__awesome-ChatGPT-repositories` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 36 files, 12 directories, depth score 47, key references 3개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=plugins/awesome-chatgpt-search/skills/search/SKILL.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 3개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | taishi-i/awesome-ChatGPT-repositories |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 3092 |
| Forks | 405 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/taishi-i__awesome-ChatGPT-repositories](../../../../sources/taishi-i__awesome-ChatGPT-repositories) |
| Existing report | [reports/global-trending/repositories/taishi-i__awesome-ChatGPT-repositories.md](../../../global-trending/repositories/taishi-i__awesome-ChatGPT-repositories.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 36 / 12 |
| Max observed depth | 5 |
| Top directories | .claude, .claude-plugin, .github, docs, plugins |
| Top extensions | .json: 22, .md: 10, (none): 2, .py: 1, .yml: 1 |
| Source patterns | agent/tool runtime |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 5 |
| .github | ci surface | 1 |
| plugins | top-level component | 1 |


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
| agentRuntime | [plugins/awesome-chatgpt-search/skills/search/SKILL.md](../../../../sources/taishi-i__awesome-ChatGPT-repositories/plugins/awesome-chatgpt-search/skills/search/SKILL.md) | agentRuntime signal |
| instruction | [CLAUDE.md](../../../../sources/taishi-i__awesome-ChatGPT-repositories/CLAUDE.md) | instruction signal |
| ci | [.github/workflows/jekyll-gh-pages.yml](../../../../sources/taishi-i__awesome-ChatGPT-repositories/.github/workflows/jekyll-gh-pages.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 1 | [plugins/awesome-chatgpt-search/skills/search/SKILL.md](../../../../sources/taishi-i__awesome-ChatGPT-repositories/plugins/awesome-chatgpt-search/skills/search/SKILL.md) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/jekyll-gh-pages.yml](../../../../sources/taishi-i__awesome-ChatGPT-repositories/.github/workflows/jekyll-gh-pages.yml) |
| container | 0 | not obvious |
| instruction | 1 | [CLAUDE.md](../../../../sources/taishi-i__awesome-ChatGPT-repositories/CLAUDE.md) |
| docs | 6 | [README.md](../../../../sources/taishi-i__awesome-ChatGPT-repositories/README.md)<br>[plugins/awesome-chatgpt-search/README.md](../../../../sources/taishi-i__awesome-ChatGPT-repositories/plugins/awesome-chatgpt-search/README.md)<br>[docs/README.en.md](../../../../sources/taishi-i__awesome-ChatGPT-repositories/docs/README.en.md)<br>[docs/README.ja.md](../../../../sources/taishi-i__awesome-ChatGPT-repositories/docs/README.ja.md)<br>[docs/README.zh-hans.md](../../../../sources/taishi-i__awesome-ChatGPT-repositories/docs/README.zh-hans.md)<br>[docs/README.zh-hant.md](../../../../sources/taishi-i__awesome-ChatGPT-repositories/docs/README.zh-hant.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 1 | [.github/workflows/jekyll-gh-pages.yml](../../../../sources/taishi-i__awesome-ChatGPT-repositories/.github/workflows/jekyll-gh-pages.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/taishi-i__awesome-ChatGPT-repositories/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious; test/eval path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `plugins/awesome-chatgpt-search/skills/search/SKILL.md`, `CLAUDE.md`, `.github/workflows/jekyll-gh-pages.yml`.
2. Map agent/tool runtime through: `plugins/awesome-chatgpt-search/skills/search/SKILL.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 A curated list of open source GitHub repositories related to ChatGPT, the OpenAI API, and Codex. Searchable via Claude C. 핵심 구조 신호는 Python, README.md, CLAUDE.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
