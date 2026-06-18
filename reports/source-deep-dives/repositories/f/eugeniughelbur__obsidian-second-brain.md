# eugeniughelbur/obsidian-second-brain Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Cross-CLI skill for Obsidian: turn your vault into a living AI-first second brain across Claude Code, Codex, Gemini, and OpenCode. 43 commands - now with /obsidian-architect to document your codebase, key-less web research, Google Calendar, and self-rewriting notes.

## 요약

- 조사 단위: `sources/eugeniughelbur__obsidian-second-brain` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 161 files, 29 directories, depth score 101, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=SKILL.md, hooks/load_vault_context.py, hooks/obsidian-bg-agent.hook.yaml이고, 의존성 단서는 openai, gemini, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | eugeniughelbur/obsidian-second-brain |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | Python |
| Stars | 2519 |
| Forks | 295 |
| License | MIT |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/eugeniughelbur__obsidian-second-brain](../../../../sources/eugeniughelbur__obsidian-second-brain) |
| Existing report | [reports/llm-wiki/repositories/eugeniughelbur__obsidian-second-brain.md](../../../llm-wiki/repositories/eugeniughelbur__obsidian-second-brain.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 161 / 29 |
| Max observed depth | 5 |
| Top directories | _includes, .github, adapters, commands, examples, hooks, integrations, media, references, scripts, tests |
| Top extensions | .md: 71, .py: 46, .sh: 16, .yml: 8, .template: 4, (none): 4, .example: 3, .yaml: 2, .cff: 1, .html: 1, .json: 1, .lock: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 3 |
| _includes | top-level component | 1 |
| .github | ci surface | 1 |
| adapters | top-level component | 1 |
| commands | top-level component | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| examples/sample-vault | examples workspace | 1 |
| hooks | top-level component | 1 |
| integrations | top-level component | 1 |
| media | top-level component | 1 |
| references | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, gemini |
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
| agentRuntime | [SKILL.md](../../../../sources/eugeniughelbur__obsidian-second-brain/SKILL.md) | agentRuntime signal |
| agentRuntime | [hooks/load_vault_context.py](../../../../sources/eugeniughelbur__obsidian-second-brain/hooks/load_vault_context.py) | agentRuntime signal |
| agentRuntime | [hooks/obsidian-bg-agent.hook.yaml](../../../../sources/eugeniughelbur__obsidian-second-brain/hooks/obsidian-bg-agent.hook.yaml) | agentRuntime signal |
| agentRuntime | [hooks/obsidian-bg-agent.sh](../../../../sources/eugeniughelbur__obsidian-second-brain/hooks/obsidian-bg-agent.sh) | agentRuntime signal |
| instruction | [CLAUDE.md](../../../../sources/eugeniughelbur__obsidian-second-brain/CLAUDE.md) | instruction signal |
| config | [pyproject.toml](../../../../sources/eugeniughelbur__obsidian-second-brain/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/eugeniughelbur__obsidian-second-brain/uv.lock) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/eugeniughelbur__obsidian-second-brain/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/scorecard.yml](../../../../sources/eugeniughelbur__obsidian-second-brain/.github/workflows/scorecard.yml) | ci support |
| eval | [tests/test_research_sources.py](../../../../sources/eugeniughelbur__obsidian-second-brain/tests/test_research_sources.py) | eval support |
| eval | [tests/test_smoke.py](../../../../sources/eugeniughelbur__obsidian-second-brain/tests/test_smoke.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 7 | [SKILL.md](../../../../sources/eugeniughelbur__obsidian-second-brain/SKILL.md)<br>[hooks/load_vault_context.py](../../../../sources/eugeniughelbur__obsidian-second-brain/hooks/load_vault_context.py)<br>[hooks/obsidian-bg-agent.hook.yaml](../../../../sources/eugeniughelbur__obsidian-second-brain/hooks/obsidian-bg-agent.hook.yaml)<br>[hooks/obsidian-bg-agent.sh](../../../../sources/eugeniughelbur__obsidian-second-brain/hooks/obsidian-bg-agent.sh)<br>[hooks/postcompact.hook.example.json](../../../../sources/eugeniughelbur__obsidian-second-brain/hooks/postcompact.hook.example.json)<br>[hooks/validate-ai-first.hook.yaml](../../../../sources/eugeniughelbur__obsidian-second-brain/hooks/validate-ai-first.hook.yaml)<br>[hooks/validate-ai-first.sh](../../../../sources/eugeniughelbur__obsidian-second-brain/hooks/validate-ai-first.sh) |
| mcp | 0 | not obvious |
| retrieval | 2 | [examples/sample-vault/wiki/logs/2026-04-27 — Tide retention rebuild.md](../../../../sources/eugeniughelbur__obsidian-second-brain/examples/sample-vault/wiki/logs/2026-04-27 — Tide retention rebuild.md)<br>[commands/obsidian-ingest.md](../../../../sources/eugeniughelbur__obsidian-second-brain/commands/obsidian-ingest.md) |
| spec | 2 | [architecture.md](../../../../sources/eugeniughelbur__obsidian-second-brain/architecture.md)<br>[commands/obsidian-adr.md](../../../../sources/eugeniughelbur__obsidian-second-brain/commands/obsidian-adr.md) |
| eval | 2 | [tests/test_research_sources.py](../../../../sources/eugeniughelbur__obsidian-second-brain/tests/test_research_sources.py)<br>[tests/test_smoke.py](../../../../sources/eugeniughelbur__obsidian-second-brain/tests/test_smoke.py) |
| security | 1 | [SECURITY.md](../../../../sources/eugeniughelbur__obsidian-second-brain/SECURITY.md) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/eugeniughelbur__obsidian-second-brain/.github/workflows/ci.yml)<br>[.github/workflows/scorecard.yml](../../../../sources/eugeniughelbur__obsidian-second-brain/.github/workflows/scorecard.yml) |
| container | 0 | not obvious |
| instruction | 1 | [CLAUDE.md](../../../../sources/eugeniughelbur__obsidian-second-brain/CLAUDE.md) |
| docs | 3 | [README.md](../../../../sources/eugeniughelbur__obsidian-second-brain/README.md)<br>[integrations/telegram-journal/README.md](../../../../sources/eugeniughelbur__obsidian-second-brain/integrations/telegram-journal/README.md)<br>[examples/README.md](../../../../sources/eugeniughelbur__obsidian-second-brain/examples/README.md) |
| config | 2 | [pyproject.toml](../../../../sources/eugeniughelbur__obsidian-second-brain/pyproject.toml)<br>[uv.lock](../../../../sources/eugeniughelbur__obsidian-second-brain/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 2 | [tests/test_research_sources.py](../../../../sources/eugeniughelbur__obsidian-second-brain/tests/test_research_sources.py)<br>[tests/test_smoke.py](../../../../sources/eugeniughelbur__obsidian-second-brain/tests/test_smoke.py) |
| CI workflows | 2 | [.github/workflows/ci.yml](../../../../sources/eugeniughelbur__obsidian-second-brain/.github/workflows/ci.yml)<br>[.github/workflows/scorecard.yml](../../../../sources/eugeniughelbur__obsidian-second-brain/.github/workflows/scorecard.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [SECURITY.md](../../../../sources/eugeniughelbur__obsidian-second-brain/SECURITY.md) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/eugeniughelbur__obsidian-second-brain/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `SKILL.md`, `hooks/load_vault_context.py`, `hooks/obsidian-bg-agent.hook.yaml`.
2. Map agent/tool runtime through: `SKILL.md`, `hooks/load_vault_context.py`, `hooks/obsidian-bg-agent.hook.yaml`.
3. Inspect retrieval/memory/indexing through: `examples/sample-vault/wiki/logs/2026-04-27 — Tide retention rebuild.md`, `commands/obsidian-ingest.md`.
4. Verify behavior through test/eval files: `tests/test_research_sources.py`, `tests/test_smoke.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Cross CLI skill for Obsidian turn your vault into a living AI first second brain across Claude Code, Codex, Gemini, and . 핵심 구조 신호는 Python, pyproject.toml, README.md, CLAUDE.md, LICENSE, openai이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
