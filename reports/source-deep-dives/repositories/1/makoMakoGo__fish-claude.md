# makoMakoGo/fish-claude Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Fish's custom settings and tools about claude code, codex, oh-my-pi etc

## 요약

- 조사 단위: `sources/makoMakoGo__fish-claude` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 139 files, 42 directories, depth score 88, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 mcp=tools/omp-patch-custom-mcp/apply.ts, tools/omp-patch-custom-mcp/patch.diff, tools/omp-patch-custom-mcp/README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | makoMakoGo/fish-claude |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 140 |
| Forks | 15 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/makoMakoGo__fish-claude](../../../../sources/makoMakoGo__fish-claude) |
| Existing report | [reports/global-trending/repositories/makoMakoGo__fish-claude.md](../../../global-trending/repositories/makoMakoGo__fish-claude.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 139 / 42 |
| Max observed depth | 3 |
| Top directories | .github, agent-instructions, assets, config-files, mcp, output-styles, packs, preset-cards, skills, slash-commands, sub-agents, system-prompts, themes, tips, tools |
| Top extensions | .md: 90, .svg: 10, .toml: 9, .json: 6, .yml: 6, (none): 5, .py: 3, .sh: 3, .diff: 2, .ts: 2, .jsonc: 1, .mjs: 1 |
| Source patterns | agent/tool runtime, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| agent-instructions | top-level component | 1 |
| assets | top-level component | 1 |
| config-files | top-level component | 1 |
| mcp | top-level component | 1 |
| output-styles | top-level component | 1 |
| packs | top-level component | 1 |
| preset-cards | top-level component | 1 |
| skills | top-level component | 1 |
| slash-commands | top-level component | 1 |
| sub-agents | top-level component | 1 |
| system-prompts | top-level component | 1 |
| themes | top-level component | 1 |
| tips | top-level component | 1 |
| tools | top-level component | 1 |


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
| mcp | [tools/omp-patch-custom-mcp/apply.ts](../../../../sources/makoMakoGo__fish-claude/tools/omp-patch-custom-mcp/apply.ts) | mcp signal |
| mcp | [tools/omp-patch-custom-mcp/patch.diff](../../../../sources/makoMakoGo__fish-claude/tools/omp-patch-custom-mcp/patch.diff) | mcp signal |
| mcp | [tools/omp-patch-custom-mcp/README.md](../../../../sources/makoMakoGo__fish-claude/tools/omp-patch-custom-mcp/README.md) | mcp signal |
| mcp | [mcp/brave-search.md](../../../../sources/makoMakoGo__fish-claude/mcp/brave-search.md) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/makoMakoGo__fish-claude/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tools/check-repo-hygiene.sh](../../../../sources/makoMakoGo__fish-claude/tools/check-repo-hygiene.sh) | agentRuntime signal |
| agentRuntime | [tools/README.md](../../../../sources/makoMakoGo__fish-claude/tools/README.md) | agentRuntime signal |
| agentRuntime | [tools/validate.sh](../../../../sources/makoMakoGo__fish-claude/tools/validate.sh) | agentRuntime signal |
| instruction | [CLAUDE.md](../../../../sources/makoMakoGo__fish-claude/CLAUDE.md) | instruction signal |
| ci | [.github/workflows/link-check.yml](../../../../sources/makoMakoGo__fish-claude/.github/workflows/link-check.yml) | ci support |
| ci | [.github/workflows/repo-hygiene.yml](../../../../sources/makoMakoGo__fish-claude/.github/workflows/repo-hygiene.yml) | ci support |
| eval | [tools/codex-provider-history-migrator/test_migrate.py](../../../../sources/makoMakoGo__fish-claude/tools/codex-provider-history-migrator/test_migrate.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 58 | [AGENTS.md](../../../../sources/makoMakoGo__fish-claude/AGENTS.md)<br>[tools/check-repo-hygiene.sh](../../../../sources/makoMakoGo__fish-claude/tools/check-repo-hygiene.sh)<br>[tools/README.md](../../../../sources/makoMakoGo__fish-claude/tools/README.md)<br>[tools/validate.sh](../../../../sources/makoMakoGo__fish-claude/tools/validate.sh)<br>[tools/tokscale-readme-svg/generate.mjs](../../../../sources/makoMakoGo__fish-claude/tools/tokscale-readme-svg/generate.mjs)<br>[tools/tokscale-readme-svg/README.md](../../../../sources/makoMakoGo__fish-claude/tools/tokscale-readme-svg/README.md)<br>[tools/omp-patch-custom-mcp/apply.ts](../../../../sources/makoMakoGo__fish-claude/tools/omp-patch-custom-mcp/apply.ts)<br>[tools/omp-patch-custom-mcp/patch.diff](../../../../sources/makoMakoGo__fish-claude/tools/omp-patch-custom-mcp/patch.diff) |
| mcp | 13 | [tools/omp-patch-custom-mcp/apply.ts](../../../../sources/makoMakoGo__fish-claude/tools/omp-patch-custom-mcp/apply.ts)<br>[tools/omp-patch-custom-mcp/patch.diff](../../../../sources/makoMakoGo__fish-claude/tools/omp-patch-custom-mcp/patch.diff)<br>[tools/omp-patch-custom-mcp/README.md](../../../../sources/makoMakoGo__fish-claude/tools/omp-patch-custom-mcp/README.md)<br>[mcp/brave-search.md](../../../../sources/makoMakoGo__fish-claude/mcp/brave-search.md)<br>[mcp/context7.md](../../../../sources/makoMakoGo__fish-claude/mcp/context7.md)<br>[mcp/exa-search.md](../../../../sources/makoMakoGo__fish-claude/mcp/exa-search.md)<br>[mcp/fast-context.md](../../../../sources/makoMakoGo__fish-claude/mcp/fast-context.md)<br>[mcp/playwright.md](../../../../sources/makoMakoGo__fish-claude/mcp/playwright.md) |
| retrieval | 0 | not obvious |
| spec | 2 | [skills/software-design-philosophy.md](../../../../sources/makoMakoGo__fish-claude/skills/software-design-philosophy.md)<br>[agent-instructions/oh-my-pi/03-architecture.md](../../../../sources/makoMakoGo__fish-claude/agent-instructions/oh-my-pi/03-architecture.md) |
| eval | 2 | [tools/codex-provider-history-migrator/test_migrate.py](../../../../sources/makoMakoGo__fish-claude/tools/codex-provider-history-migrator/test_migrate.py)<br>[agent-instructions/claude/02-code-quality.md](../../../../sources/makoMakoGo__fish-claude/agent-instructions/claude/02-code-quality.md) |
| security | 0 | not obvious |
| ci | 3 | [.github/workflows/link-check.yml](../../../../sources/makoMakoGo__fish-claude/.github/workflows/link-check.yml)<br>[.github/workflows/repo-hygiene.yml](../../../../sources/makoMakoGo__fish-claude/.github/workflows/repo-hygiene.yml)<br>[.github/workflows/validate.yml](../../../../sources/makoMakoGo__fish-claude/.github/workflows/validate.yml) |
| container | 0 | not obvious |
| instruction | 2 | [AGENTS.md](../../../../sources/makoMakoGo__fish-claude/AGENTS.md)<br>[CLAUDE.md](../../../../sources/makoMakoGo__fish-claude/CLAUDE.md) |
| docs | 22 | [README.en.md](../../../../sources/makoMakoGo__fish-claude/README.en.md)<br>[README.md](../../../../sources/makoMakoGo__fish-claude/README.md)<br>[tools/README.md](../../../../sources/makoMakoGo__fish-claude/tools/README.md)<br>[tools/tokscale-readme-svg/README.md](../../../../sources/makoMakoGo__fish-claude/tools/tokscale-readme-svg/README.md)<br>[tools/omp-patch-custom-mcp/README.md](../../../../sources/makoMakoGo__fish-claude/tools/omp-patch-custom-mcp/README.md)<br>[tools/omp-patch-codex-websearch-byok/README.md](../../../../sources/makoMakoGo__fish-claude/tools/omp-patch-codex-websearch-byok/README.md)<br>[tools/codex-provider-history-migrator/README.md](../../../../sources/makoMakoGo__fish-claude/tools/codex-provider-history-migrator/README.md)<br>[tools/claude-json-history-cleaner/README.md](../../../../sources/makoMakoGo__fish-claude/tools/claude-json-history-cleaner/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 2 | [tools/codex-provider-history-migrator/test_migrate.py](../../../../sources/makoMakoGo__fish-claude/tools/codex-provider-history-migrator/test_migrate.py)<br>[agent-instructions/claude/02-code-quality.md](../../../../sources/makoMakoGo__fish-claude/agent-instructions/claude/02-code-quality.md) |
| CI workflows | 3 | [.github/workflows/link-check.yml](../../../../sources/makoMakoGo__fish-claude/.github/workflows/link-check.yml)<br>[.github/workflows/repo-hygiene.yml](../../../../sources/makoMakoGo__fish-claude/.github/workflows/repo-hygiene.yml)<br>[.github/workflows/validate.yml](../../../../sources/makoMakoGo__fish-claude/.github/workflows/validate.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/makoMakoGo__fish-claude/AGENTS.md)<br>[CLAUDE.md](../../../../sources/makoMakoGo__fish-claude/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `tools/omp-patch-custom-mcp/apply.ts`, `tools/omp-patch-custom-mcp/patch.diff`, `tools/omp-patch-custom-mcp/README.md`.
2. Map agent/tool runtime through: `AGENTS.md`, `tools/check-repo-hygiene.sh`, `tools/README.md`.
3. Verify behavior through test/eval files: `tools/codex-provider-history-migrator/test_migrate.py`, `agent-instructions/claude/02-code-quality.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Fish's custom settings and tools about claude code, codex, oh my pi etc. 핵심 구조 신호는 Python, README.md, AGENTS.md, CLAUDE.md, LICENSE, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
