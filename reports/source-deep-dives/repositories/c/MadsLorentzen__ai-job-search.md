# MadsLorentzen/ai-job-search Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

AI-powered job application framework built on Claude Code. Fork it, fill in your profile, and let Claude evaluate jobs, tailor CVs, write cover letters, and prepare you for interviews.

## 요약

- 조사 단위: `sources/MadsLorentzen__ai-job-search` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 83 files, 40 directories, depth score 82, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=tools/convert_salary_excel.py, tools/README_SALARY_TOOL.md, .claude/skills/upskill/SKILL.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | MadsLorentzen/ai-job-search |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 3433 |
| Forks | 1521 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/MadsLorentzen__ai-job-search](../../../../sources/MadsLorentzen__ai-job-search) |
| Existing report | [reports/global-trending/repositories/MadsLorentzen__ai-job-search.md](../../../global-trending/repositories/MadsLorentzen__ai-job-search.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 83 / 40 |
| Max observed depth | 6 |
| Top directories | .agents, .claude, cover_letters, cv, documents, job_scraper, tools, upskill |
| Top extensions | .md: 31, .ts: 12, .ttf: 10, .otf: 9, (none): 9, .json: 5, .cls: 2, .py: 2, .csv: 1, .gif: 1, .tex: 1 |
| Source patterns | cli-first, agent/tool runtime, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| cover_letters | top-level component | 1 |
| cv | top-level component | 1 |
| documents | documentation surface | 1 |
| job_scraper | top-level component | 1 |
| tools | top-level component | 1 |
| upskill | top-level component | 1 |


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
| agentRuntime | [tools/convert_salary_excel.py](../../../../sources/MadsLorentzen__ai-job-search/tools/convert_salary_excel.py) | agentRuntime signal |
| agentRuntime | [tools/README_SALARY_TOOL.md](../../../../sources/MadsLorentzen__ai-job-search/tools/README_SALARY_TOOL.md) | agentRuntime signal |
| agentRuntime | [.claude/skills/upskill/SKILL.md](../../../../sources/MadsLorentzen__ai-job-search/.claude/skills/upskill/SKILL.md) | agentRuntime signal |
| agentRuntime | [.claude/skills/job-scraper/search-queries.md](../../../../sources/MadsLorentzen__ai-job-search/.claude/skills/job-scraper/search-queries.md) | agentRuntime signal |
| entrypoints | [.agents/skills/jobnet-search/cli/src/cli.ts](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobnet-search/cli/src/cli.ts) | entrypoints signal |
| entrypoints | [.agents/skills/jobindex-search/cli/src/cli.ts](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobindex-search/cli/src/cli.ts) | entrypoints signal |
| entrypoints | [.agents/skills/jobdanmark-search/cli/src/cli.ts](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobdanmark-search/cli/src/cli.ts) | entrypoints signal |
| entrypoints | [.agents/skills/jobbank-search/cli/src/cli.ts](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobbank-search/cli/src/cli.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/MadsLorentzen__ai-job-search/CLAUDE.md) | instruction signal |
| config | [.agents/skills/jobnet-search/cli/package.json](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobnet-search/cli/package.json) | config signal |
| config | [.agents/skills/jobindex-search/cli/package.json](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobindex-search/cli/package.json) | config signal |
| config | [.agents/skills/jobdanmark-search/cli/package.json](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobdanmark-search/cli/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [.agents/skills/jobnet-search/cli/src/cli.ts](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobnet-search/cli/src/cli.ts)<br>[.agents/skills/jobindex-search/cli/src/cli.ts](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobindex-search/cli/src/cli.ts)<br>[.agents/skills/jobdanmark-search/cli/src/cli.ts](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobdanmark-search/cli/src/cli.ts)<br>[.agents/skills/jobbank-search/cli/src/cli.ts](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobbank-search/cli/src/cli.ts) |
| agentRuntime | 40 | [tools/convert_salary_excel.py](../../../../sources/MadsLorentzen__ai-job-search/tools/convert_salary_excel.py)<br>[tools/README_SALARY_TOOL.md](../../../../sources/MadsLorentzen__ai-job-search/tools/README_SALARY_TOOL.md)<br>[.claude/skills/upskill/SKILL.md](../../../../sources/MadsLorentzen__ai-job-search/.claude/skills/upskill/SKILL.md)<br>[.claude/skills/job-scraper/search-queries.md](../../../../sources/MadsLorentzen__ai-job-search/.claude/skills/job-scraper/search-queries.md)<br>[.claude/skills/job-scraper/SKILL.md](../../../../sources/MadsLorentzen__ai-job-search/.claude/skills/job-scraper/SKILL.md)<br>[.claude/skills/job-application-assistant/01-candidate-profile.md](../../../../sources/MadsLorentzen__ai-job-search/.claude/skills/job-application-assistant/01-candidate-profile.md)<br>[.claude/skills/job-application-assistant/02-behavioral-profile.md](../../../../sources/MadsLorentzen__ai-job-search/.claude/skills/job-application-assistant/02-behavioral-profile.md)<br>[.claude/skills/job-application-assistant/03-writing-style.md](../../../../sources/MadsLorentzen__ai-job-search/.claude/skills/job-application-assistant/03-writing-style.md) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 5 | [.claude/skills/job-application-assistant/04-job-evaluation.md](../../../../sources/MadsLorentzen__ai-job-search/.claude/skills/job-application-assistant/04-job-evaluation.md)<br>[.agents/skills/jobnet-search/cli/tests/helpers.ts](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobnet-search/cli/tests/helpers.ts)<br>[.agents/skills/jobindex-search/cli/tests/helpers.ts](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobindex-search/cli/tests/helpers.ts)<br>[.agents/skills/jobdanmark-search/cli/tests/helpers.ts](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobdanmark-search/cli/tests/helpers.ts)<br>[.agents/skills/jobbank-search/cli/tests/helpers.ts](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobbank-search/cli/tests/helpers.ts) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 1 | [CLAUDE.md](../../../../sources/MadsLorentzen__ai-job-search/CLAUDE.md) |
| docs | 7 | [README.md](../../../../sources/MadsLorentzen__ai-job-search/README.md)<br>[tools/README_SALARY_TOOL.md](../../../../sources/MadsLorentzen__ai-job-search/tools/README_SALARY_TOOL.md)<br>[documents/README.md](../../../../sources/MadsLorentzen__ai-job-search/documents/README.md)<br>[.agents/skills/jobnet-search/cli/README.md](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobnet-search/cli/README.md)<br>[.agents/skills/jobindex-search/cli/README.md](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobindex-search/cli/README.md)<br>[.agents/skills/jobdanmark-search/cli/README.md](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobdanmark-search/cli/README.md)<br>[.agents/skills/jobbank-search/cli/README.md](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobbank-search/cli/README.md) |
| config | 4 | [.agents/skills/jobnet-search/cli/package.json](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobnet-search/cli/package.json)<br>[.agents/skills/jobindex-search/cli/package.json](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobindex-search/cli/package.json)<br>[.agents/skills/jobdanmark-search/cli/package.json](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobdanmark-search/cli/package.json)<br>[.agents/skills/jobbank-search/cli/package.json](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobbank-search/cli/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 5 | [.claude/skills/job-application-assistant/04-job-evaluation.md](../../../../sources/MadsLorentzen__ai-job-search/.claude/skills/job-application-assistant/04-job-evaluation.md)<br>[.agents/skills/jobnet-search/cli/tests/helpers.ts](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobnet-search/cli/tests/helpers.ts)<br>[.agents/skills/jobindex-search/cli/tests/helpers.ts](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobindex-search/cli/tests/helpers.ts)<br>[.agents/skills/jobdanmark-search/cli/tests/helpers.ts](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobdanmark-search/cli/tests/helpers.ts)<br>[.agents/skills/jobbank-search/cli/tests/helpers.ts](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobbank-search/cli/tests/helpers.ts) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/MadsLorentzen__ai-job-search/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `tools/convert_salary_excel.py`, `tools/README_SALARY_TOOL.md`, `.claude/skills/upskill/SKILL.md`.
2. Trace execution through entrypoints: `.agents/skills/jobnet-search/cli/src/cli.ts`, `.agents/skills/jobindex-search/cli/src/cli.ts`, `.agents/skills/jobdanmark-search/cli/src/cli.ts`.
3. Map agent/tool runtime through: `tools/convert_salary_excel.py`, `tools/README_SALARY_TOOL.md`, `.claude/skills/upskill/SKILL.md`.
4. Verify behavior through test/eval files: `.claude/skills/job-application-assistant/04-job-evaluation.md`, `.agents/skills/jobnet-search/cli/tests/helpers.ts`, `.agents/skills/jobindex-search/cli/tests/helpers.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 AI powered job application framework built on Claude Code. Fork it, fill in your profile, and let Claude evaluate jobs, . 핵심 구조 신호는 TypeScript, README.md, CLAUDE.md, LICENSE, docs, agent-instructions이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
