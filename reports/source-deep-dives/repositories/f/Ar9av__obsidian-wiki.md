# Ar9av/obsidian-wiki Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Framework for AI agents to build and maintain a digital brain through Obsidian wiki using Karpathy's LLM Wiki pattern

## 요약

- 조사 단위: `sources/Ar9av__obsidian-wiki` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 89 files, 73 directories, depth score 93, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, .skills/wiki-update/SKILL.md, .skills/wiki-synthesize/SKILL.md이고, 의존성 단서는 claude, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Ar9av/obsidian-wiki |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | Python |
| Stars | 2232 |
| Forks | 224 |
| License | MIT |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/Ar9av__obsidian-wiki](../../../../sources/Ar9av__obsidian-wiki) |
| Existing report | [reports/llm-wiki/repositories/Ar9av__obsidian-wiki.md](../../../llm-wiki/repositories/Ar9av__obsidian-wiki.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 89 / 73 |
| Max observed depth | 4 |
| Top directories | .agent, .agents, .claude, .cursor, .github, .kiro, .pi, .skills, .windsurf, obsidian_wiki, scripts, tests |
| Top extensions | .md: 57, .py: 16, .sh: 4, .html: 2, .yml: 2, (none): 2, .example: 1, .json: 1, .mdc: 1, .plist: 1, .toml: 1, .txt: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 2 |
| .github | ci surface | 1 |
| obsidian_wiki | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | obsidian-wiki | obsidian-wiki |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | claude |
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
| agentRuntime | [AGENTS.md](../../../../sources/Ar9av__obsidian-wiki/AGENTS.md) | agentRuntime signal |
| agentRuntime | [.skills/wiki-update/SKILL.md](../../../../sources/Ar9av__obsidian-wiki/.skills/wiki-update/SKILL.md) | agentRuntime signal |
| agentRuntime | [.skills/wiki-synthesize/SKILL.md](../../../../sources/Ar9av__obsidian-wiki/.skills/wiki-synthesize/SKILL.md) | agentRuntime signal |
| agentRuntime | [.skills/wiki-switch/SKILL.md](../../../../sources/Ar9av__obsidian-wiki/.skills/wiki-switch/SKILL.md) | agentRuntime signal |
| entrypoints | [obsidian_wiki/__main__.py](../../../../sources/Ar9av__obsidian-wiki/obsidian_wiki/__main__.py) | entrypoints signal |
| instruction | [.github/copilot-instructions.md](../../../../sources/Ar9av__obsidian-wiki/.github/copilot-instructions.md) | instruction signal |
| instruction | [.cursor/rules/obsidian-wiki.mdc](../../../../sources/Ar9av__obsidian-wiki/.cursor/rules/obsidian-wiki.mdc) | instruction signal |
| config | [pyproject.toml](../../../../sources/Ar9av__obsidian-wiki/pyproject.toml) | config signal |
| ci | [.github/workflows/publish.yml](../../../../sources/Ar9av__obsidian-wiki/.github/workflows/publish.yml) | ci support |
| ci | [.github/workflows/setup.yml](../../../../sources/Ar9av__obsidian-wiki/.github/workflows/setup.yml) | ci support |
| eval | [tests/test_okf_same_name_link_roundtrip.py](../../../../sources/Ar9av__obsidian-wiki/tests/test_okf_same_name_link_roundtrip.py) | eval support |
| eval | [.skills/skill-creator/scripts/aggregate_benchmark.py](../../../../sources/Ar9av__obsidian-wiki/.skills/skill-creator/scripts/aggregate_benchmark.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [obsidian_wiki/__main__.py](../../../../sources/Ar9av__obsidian-wiki/obsidian_wiki/__main__.py) |
| agentRuntime | 54 | [AGENTS.md](../../../../sources/Ar9av__obsidian-wiki/AGENTS.md)<br>[.skills/wiki-update/SKILL.md](../../../../sources/Ar9av__obsidian-wiki/.skills/wiki-update/SKILL.md)<br>[.skills/wiki-synthesize/SKILL.md](../../../../sources/Ar9av__obsidian-wiki/.skills/wiki-synthesize/SKILL.md)<br>[.skills/wiki-switch/SKILL.md](../../../../sources/Ar9av__obsidian-wiki/.skills/wiki-switch/SKILL.md)<br>[.skills/wiki-status/SKILL.md](../../../../sources/Ar9av__obsidian-wiki/.skills/wiki-status/SKILL.md)<br>[.skills/wiki-stage-commit/SKILL.md](../../../../sources/Ar9av__obsidian-wiki/.skills/wiki-stage-commit/SKILL.md)<br>[.skills/wiki-setup/SKILL.md](../../../../sources/Ar9av__obsidian-wiki/.skills/wiki-setup/SKILL.md)<br>[.skills/wiki-research/SKILL.md](../../../../sources/Ar9av__obsidian-wiki/.skills/wiki-research/SKILL.md) |
| mcp | 0 | not obvious |
| retrieval | 50 | [scripts/com.obsidian-wiki.daily-update.plist](../../../../sources/Ar9av__obsidian-wiki/scripts/com.obsidian-wiki.daily-update.plist)<br>[scripts/wiki-notify.sh](../../../../sources/Ar9av__obsidian-wiki/scripts/wiki-notify.sh)<br>[obsidian_wiki/__init__.py](../../../../sources/Ar9av__obsidian-wiki/obsidian_wiki/__init__.py)<br>[obsidian_wiki/__main__.py](../../../../sources/Ar9av__obsidian-wiki/obsidian_wiki/__main__.py)<br>[obsidian_wiki/cli.py](../../../../sources/Ar9av__obsidian-wiki/obsidian_wiki/cli.py)<br>[.windsurf/rules/obsidian-wiki.md](../../../../sources/Ar9av__obsidian-wiki/.windsurf/rules/obsidian-wiki.md)<br>[.skills/wiki-update/SKILL.md](../../../../sources/Ar9av__obsidian-wiki/.skills/wiki-update/SKILL.md)<br>[.skills/wiki-synthesize/SKILL.md](../../../../sources/Ar9av__obsidian-wiki/.skills/wiki-synthesize/SKILL.md) |
| spec | 0 | not obvious |
| eval | 6 | [tests/test_okf_same_name_link_roundtrip.py](../../../../sources/Ar9av__obsidian-wiki/tests/test_okf_same_name_link_roundtrip.py)<br>[.skills/skill-creator/scripts/aggregate_benchmark.py](../../../../sources/Ar9av__obsidian-wiki/.skills/skill-creator/scripts/aggregate_benchmark.py)<br>[.skills/skill-creator/scripts/run_eval.py](../../../../sources/Ar9av__obsidian-wiki/.skills/skill-creator/scripts/run_eval.py)<br>[.skills/skill-creator/eval-viewer/generate_review.py](../../../../sources/Ar9av__obsidian-wiki/.skills/skill-creator/eval-viewer/generate_review.py)<br>[.skills/skill-creator/eval-viewer/viewer.html](../../../../sources/Ar9av__obsidian-wiki/.skills/skill-creator/eval-viewer/viewer.html)<br>[.skills/skill-creator/assets/eval_review.html](../../../../sources/Ar9av__obsidian-wiki/.skills/skill-creator/assets/eval_review.html) |
| security | 0 | not obvious |
| ci | 2 | [.github/workflows/publish.yml](../../../../sources/Ar9av__obsidian-wiki/.github/workflows/publish.yml)<br>[.github/workflows/setup.yml](../../../../sources/Ar9av__obsidian-wiki/.github/workflows/setup.yml) |
| container | 0 | not obvious |
| instruction | 3 | [AGENTS.md](../../../../sources/Ar9av__obsidian-wiki/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/Ar9av__obsidian-wiki/.github/copilot-instructions.md)<br>[.cursor/rules/obsidian-wiki.mdc](../../../../sources/Ar9av__obsidian-wiki/.cursor/rules/obsidian-wiki.mdc) |
| docs | 1 | [README.md](../../../../sources/Ar9av__obsidian-wiki/README.md) |
| config | 1 | [pyproject.toml](../../../../sources/Ar9av__obsidian-wiki/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 6 | [tests/test_okf_same_name_link_roundtrip.py](../../../../sources/Ar9av__obsidian-wiki/tests/test_okf_same_name_link_roundtrip.py)<br>[.skills/skill-creator/scripts/aggregate_benchmark.py](../../../../sources/Ar9av__obsidian-wiki/.skills/skill-creator/scripts/aggregate_benchmark.py)<br>[.skills/skill-creator/scripts/run_eval.py](../../../../sources/Ar9av__obsidian-wiki/.skills/skill-creator/scripts/run_eval.py)<br>[.skills/skill-creator/eval-viewer/generate_review.py](../../../../sources/Ar9av__obsidian-wiki/.skills/skill-creator/eval-viewer/generate_review.py)<br>[.skills/skill-creator/eval-viewer/viewer.html](../../../../sources/Ar9av__obsidian-wiki/.skills/skill-creator/eval-viewer/viewer.html)<br>[.skills/skill-creator/assets/eval_review.html](../../../../sources/Ar9av__obsidian-wiki/.skills/skill-creator/assets/eval_review.html) |
| CI workflows | 2 | [.github/workflows/publish.yml](../../../../sources/Ar9av__obsidian-wiki/.github/workflows/publish.yml)<br>[.github/workflows/setup.yml](../../../../sources/Ar9av__obsidian-wiki/.github/workflows/setup.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 3 | [AGENTS.md](../../../../sources/Ar9av__obsidian-wiki/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/Ar9av__obsidian-wiki/.github/copilot-instructions.md)<br>[.cursor/rules/obsidian-wiki.mdc](../../../../sources/Ar9av__obsidian-wiki/.cursor/rules/obsidian-wiki.mdc) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `AGENTS.md`, `.skills/wiki-update/SKILL.md`, `.skills/wiki-synthesize/SKILL.md`.
2. Trace execution through entrypoints: `obsidian_wiki/__main__.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `.skills/wiki-update/SKILL.md`, `.skills/wiki-synthesize/SKILL.md`.
4. Inspect retrieval/memory/indexing through: `scripts/com.obsidian-wiki.daily-update.plist`, `scripts/wiki-notify.sh`, `obsidian_wiki/__init__.py`.
5. Verify behavior through test/eval files: `tests/test_okf_same_name_link_roundtrip.py`, `.skills/skill-creator/scripts/aggregate_benchmark.py`, `.skills/skill-creator/scripts/run_eval.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Framework for AI agents to build and maintain a digital brain through Obsidian wiki using Karpathy's LLM Wiki pattern. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, LICENSE, tests이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
