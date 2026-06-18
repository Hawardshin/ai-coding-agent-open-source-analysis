# yologdev/yoyo-evolve Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

A Truman Show of a self-evolving AI coding agent. It writes its own code. Growing up in public.

## 요약

- 조사 단위: `sources/yologdev__yoyo-evolve` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 174 files, 37 directories, depth score 103, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=src/agent_builder.rs, src/context.rs, src/hooks.rs이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | yologdev/yoyo-evolve |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 1824 |
| Forks | 122 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/yologdev__yoyo-evolve](../../../../sources/yologdev__yoyo-evolve) |
| Existing report | [reports/global-trending/repositories/yologdev__yoyo-evolve.md](../../../global-trending/repositories/yologdev__yoyo-evolve.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 174 / 37 |
| Max observed depth | 4 |
| Top directories | .github, .yoyo, assets, docs, journals, memory, scripts, skills, skills_attic, sponsors, src, tests |
| Top extensions | .rs: 73, .md: 54, .sh: 12, .py: 9, .yml: 9, (none): 5, .json: 4, .toml: 4, .jsonl: 2, .png: 1, .ps1: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 28 |
| src | source boundary | 12 |
| tests | validation surface | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| journals | top-level component | 1 |
| memory | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| skills_attic | top-level component | 1 |
| sponsors | top-level component | 1 |


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
| agentRuntime | [src/agent_builder.rs](../../../../sources/yologdev__yoyo-evolve/src/agent_builder.rs) | agentRuntime signal |
| agentRuntime | [src/context.rs](../../../../sources/yologdev__yoyo-evolve/src/context.rs) | agentRuntime signal |
| agentRuntime | [src/hooks.rs](../../../../sources/yologdev__yoyo-evolve/src/hooks.rs) | agentRuntime signal |
| agentRuntime | [src/memory.rs](../../../../sources/yologdev__yoyo-evolve/src/memory.rs) | agentRuntime signal |
| entrypoints | [src/cli.rs](../../../../sources/yologdev__yoyo-evolve/src/cli.rs) | entrypoints signal |
| entrypoints | [src/main.rs](../../../../sources/yologdev__yoyo-evolve/src/main.rs) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/yologdev__yoyo-evolve/CLAUDE.md) | instruction signal |
| config | [Cargo.toml](../../../../sources/yologdev__yoyo-evolve/Cargo.toml) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/yologdev__yoyo-evolve/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/evolve.yml](../../../../sources/yologdev__yoyo-evolve/.github/workflows/evolve.yml) | ci support |
| eval | [tests/integration.rs](../../../../sources/yologdev__yoyo-evolve/tests/integration.rs) | eval support |
| eval | [scripts/test_scan_commitments.py](../../../../sources/yologdev__yoyo-evolve/scripts/test_scan_commitments.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [src/cli.rs](../../../../sources/yologdev__yoyo-evolve/src/cli.rs)<br>[src/main.rs](../../../../sources/yologdev__yoyo-evolve/src/main.rs) |
| agentRuntime | 33 | [src/agent_builder.rs](../../../../sources/yologdev__yoyo-evolve/src/agent_builder.rs)<br>[src/context.rs](../../../../sources/yologdev__yoyo-evolve/src/context.rs)<br>[src/hooks.rs](../../../../sources/yologdev__yoyo-evolve/src/hooks.rs)<br>[src/memory.rs](../../../../sources/yologdev__yoyo-evolve/src/memory.rs)<br>[src/tool_wrappers.rs](../../../../sources/yologdev__yoyo-evolve/src/tool_wrappers.rs)<br>[src/tools.rs](../../../../sources/yologdev__yoyo-evolve/src/tools.rs)<br>[src/format/tools.rs](../../../../sources/yologdev__yoyo-evolve/src/format/tools.rs)<br>[skills_attic/.gitkeep](../../../../sources/yologdev__yoyo-evolve/skills_attic/.gitkeep) |
| mcp | 0 | not obvious |
| retrieval | 8 | [src/commands_memory.rs](../../../../sources/yologdev__yoyo-evolve/src/commands_memory.rs)<br>[src/memory.rs](../../../../sources/yologdev__yoyo-evolve/src/memory.rs)<br>[memory/active_learnings.md](../../../../sources/yologdev__yoyo-evolve/memory/active_learnings.md)<br>[memory/active_social_learnings.md](../../../../sources/yologdev__yoyo-evolve/memory/active_social_learnings.md)<br>[memory/learnings.jsonl](../../../../sources/yologdev__yoyo-evolve/memory/learnings.jsonl)<br>[memory/social_learnings.jsonl](../../../../sources/yologdev__yoyo-evolve/memory/social_learnings.jsonl)<br>[journals/llm-wiki.md](../../../../sources/yologdev__yoyo-evolve/journals/llm-wiki.md)<br>[.yoyo/memory.json](../../../../sources/yologdev__yoyo-evolve/.yoyo/memory.json) |
| spec | 1 | [docs/src/architecture.md](../../../../sources/yologdev__yoyo-evolve/docs/src/architecture.md) |
| eval | 2 | [tests/integration.rs](../../../../sources/yologdev__yoyo-evolve/tests/integration.rs)<br>[scripts/test_scan_commitments.py](../../../../sources/yologdev__yoyo-evolve/scripts/test_scan_commitments.py) |
| security | 0 | not obvious |
| ci | 8 | [.github/workflows/ci.yml](../../../../sources/yologdev__yoyo-evolve/.github/workflows/ci.yml)<br>[.github/workflows/evolve.yml](../../../../sources/yologdev__yoyo-evolve/.github/workflows/evolve.yml)<br>[.github/workflows/pages.yml](../../../../sources/yologdev__yoyo-evolve/.github/workflows/pages.yml)<br>[.github/workflows/release.yml](../../../../sources/yologdev__yoyo-evolve/.github/workflows/release.yml)<br>[.github/workflows/skill-evolve.yml](../../../../sources/yologdev__yoyo-evolve/.github/workflows/skill-evolve.yml)<br>[.github/workflows/social.yml](../../../../sources/yologdev__yoyo-evolve/.github/workflows/social.yml)<br>[.github/workflows/sponsors-refresh.yml](../../../../sources/yologdev__yoyo-evolve/.github/workflows/sponsors-refresh.yml)<br>[.github/workflows/synthesize.yml](../../../../sources/yologdev__yoyo-evolve/.github/workflows/synthesize.yml) |
| container | 0 | not obvious |
| instruction | 1 | [CLAUDE.md](../../../../sources/yologdev__yoyo-evolve/CLAUDE.md) |
| docs | 25 | [README.md](../../../../sources/yologdev__yoyo-evolve/README.md)<br>[docs/book.toml](../../../../sources/yologdev__yoyo-evolve/docs/book.toml)<br>[docs/src/architecture.md](../../../../sources/yologdev__yoyo-evolve/docs/src/architecture.md)<br>[docs/src/introduction.md](../../../../sources/yologdev__yoyo-evolve/docs/src/introduction.md)<br>[docs/src/SUMMARY.md](../../../../sources/yologdev__yoyo-evolve/docs/src/SUMMARY.md)<br>[docs/src/usage/commands.md](../../../../sources/yologdev__yoyo-evolve/docs/src/usage/commands.md)<br>[docs/src/usage/multi-line.md](../../../../sources/yologdev__yoyo-evolve/docs/src/usage/multi-line.md)<br>[docs/src/usage/piped-mode.md](../../../../sources/yologdev__yoyo-evolve/docs/src/usage/piped-mode.md) |
| config | 1 | [Cargo.toml](../../../../sources/yologdev__yoyo-evolve/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 2 | [tests/integration.rs](../../../../sources/yologdev__yoyo-evolve/tests/integration.rs)<br>[scripts/test_scan_commitments.py](../../../../sources/yologdev__yoyo-evolve/scripts/test_scan_commitments.py) |
| CI workflows | 8 | [.github/workflows/ci.yml](../../../../sources/yologdev__yoyo-evolve/.github/workflows/ci.yml)<br>[.github/workflows/evolve.yml](../../../../sources/yologdev__yoyo-evolve/.github/workflows/evolve.yml)<br>[.github/workflows/pages.yml](../../../../sources/yologdev__yoyo-evolve/.github/workflows/pages.yml)<br>[.github/workflows/release.yml](../../../../sources/yologdev__yoyo-evolve/.github/workflows/release.yml)<br>[.github/workflows/skill-evolve.yml](../../../../sources/yologdev__yoyo-evolve/.github/workflows/skill-evolve.yml)<br>[.github/workflows/social.yml](../../../../sources/yologdev__yoyo-evolve/.github/workflows/social.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/yologdev__yoyo-evolve/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `src/agent_builder.rs`, `src/context.rs`, `src/hooks.rs`.
2. Trace execution through entrypoints: `src/cli.rs`, `src/main.rs`.
3. Map agent/tool runtime through: `src/agent_builder.rs`, `src/context.rs`, `src/hooks.rs`.
4. Inspect retrieval/memory/indexing through: `src/commands_memory.rs`, `src/memory.rs`, `memory/active_learnings.md`.
5. Verify behavior through test/eval files: `tests/integration.rs`, `scripts/test_scan_commitments.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 A Truman Show of a self evolving AI coding agent. It writes its own code. Growing up in public.. 핵심 구조 신호는 Rust, Cargo.toml, README.md, CLAUDE.md, LICENSE, tests이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
