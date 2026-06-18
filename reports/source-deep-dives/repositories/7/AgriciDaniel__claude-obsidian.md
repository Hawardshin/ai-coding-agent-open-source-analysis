# AgriciDaniel/claude-obsidian Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Self-organizing AI second brain for Obsidian + Claude Code. Drop any source and Claude reads, links, and files it into one connected knowledge graph of plain Markdown you own. AI note-taking, personal knowledge management (PKM), and an open-source Notion alternative. Based on Karpathy's LLM Wiki pattern.

## 요약

- 조사 단위: `sources/AgriciDaniel__claude-obsidian` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 211 files, 64 directories, depth score 115, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=WIKI.md, wiki/getting-started.md, wiki/hot.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | AgriciDaniel/claude-obsidian |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | mixed |
| Language | Python |
| Stars | 7035 |
| Forks | 830 |
| License | MIT |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/AgriciDaniel__claude-obsidian](../../../../sources/AgriciDaniel__claude-obsidian) |
| Existing report | [reports/llm-wiki/repositories/AgriciDaniel__claude-obsidian.md](../../../llm-wiki/repositories/AgriciDaniel__claude-obsidian.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 211 / 64 |
| Max observed depth | 5 |
| Top directories | _templates, .claude-plugin, .cursor, .github, .obsidian, .raw, .vault-meta, .windsurf, agents, assets, bin, commands, docs, hooks, scripts, skills, tests, wiki |
| Top extensions | .md: 120, .json: 17, .py: 15, .sh: 11, .png: 8, .css: 7, .svg: 6, (none): 6, .canvas: 5, .gif: 5, .js: 3, .txt: 2 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 15 |
| tests | validation surface | 10 |
| _templates | top-level component | 1 |
| .github | ci surface | 1 |
| agents | top-level component | 1 |
| assets | top-level component | 1 |
| bin | top-level component | 1 |
| commands | top-level component | 1 |
| hooks | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| wiki | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| test | Makefile | test | make test |
| test | Makefile | test-address | make test-address |
| test | Makefile | test-tiling | make test-tiling |
| test | Makefile | test-boundary | make test-boundary |
| test | Makefile | test-bm25 | make test-bm25 |
| test | Makefile | test-retrieve | make test-retrieve |
| test | Makefile | test-lock | make test-lock |
| test | Makefile | test-concurrent | make test-concurrent |
| test | Makefile | test-mode | make test-mode |
| test | Makefile | test-contextual | make test-contextual |
| utility | Makefile | setup-dragonscale | make setup-dragonscale |
| utility | Makefile | setup-retrieve | make setup-retrieve |
| utility | Makefile | setup-mode | make setup-mode |
| test | Makefile | clean-test-state | make clean-test-state |


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
| retrieval | [WIKI.md](../../../../sources/AgriciDaniel__claude-obsidian/WIKI.md) | retrieval signal |
| retrieval | [wiki/getting-started.md](../../../../sources/AgriciDaniel__claude-obsidian/wiki/getting-started.md) | retrieval signal |
| retrieval | [wiki/hot.md](../../../../sources/AgriciDaniel__claude-obsidian/wiki/hot.md) | retrieval signal |
| retrieval | [wiki/index.md](../../../../sources/AgriciDaniel__claude-obsidian/wiki/index.md) | retrieval signal |
| entrypoints | [bin/setup-dragonscale.sh](../../../../sources/AgriciDaniel__claude-obsidian/bin/setup-dragonscale.sh) | entrypoints signal |
| entrypoints | [bin/setup-mode.sh](../../../../sources/AgriciDaniel__claude-obsidian/bin/setup-mode.sh) | entrypoints signal |
| entrypoints | [bin/setup-multi-agent.sh](../../../../sources/AgriciDaniel__claude-obsidian/bin/setup-multi-agent.sh) | entrypoints signal |
| entrypoints | [bin/setup-retrieve.sh](../../../../sources/AgriciDaniel__claude-obsidian/bin/setup-retrieve.sh) | entrypoints signal |
| docs | [README.md](../../../../sources/AgriciDaniel__claude-obsidian/README.md) | docs signal |
| docs | [hooks/README.md](../../../../sources/AgriciDaniel__claude-obsidian/hooks/README.md) | docs signal |
| docs | [docs/compound-vault-guide.md](../../../../sources/AgriciDaniel__claude-obsidian/docs/compound-vault-guide.md) | docs signal |
| docs | [docs/dragonscale-guide.md](../../../../sources/AgriciDaniel__claude-obsidian/docs/dragonscale-guide.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 8 | [bin/setup-dragonscale.sh](../../../../sources/AgriciDaniel__claude-obsidian/bin/setup-dragonscale.sh)<br>[bin/setup-mode.sh](../../../../sources/AgriciDaniel__claude-obsidian/bin/setup-mode.sh)<br>[bin/setup-multi-agent.sh](../../../../sources/AgriciDaniel__claude-obsidian/bin/setup-multi-agent.sh)<br>[bin/setup-retrieve.sh](../../../../sources/AgriciDaniel__claude-obsidian/bin/setup-retrieve.sh)<br>[bin/setup-vault.sh](../../../../sources/AgriciDaniel__claude-obsidian/bin/setup-vault.sh)<br>[.obsidian/plugins/thino/main.js](../../../../sources/AgriciDaniel__claude-obsidian/.obsidian/plugins/thino/main.js)<br>[.obsidian/plugins/obsidian-banners/main.js](../../../../sources/AgriciDaniel__claude-obsidian/.obsidian/plugins/obsidian-banners/main.js)<br>[.obsidian/plugins/calendar/main.js](../../../../sources/AgriciDaniel__claude-obsidian/.obsidian/plugins/calendar/main.js) |
| agentRuntime | 38 | [AGENTS.md](../../../../sources/AgriciDaniel__claude-obsidian/AGENTS.md)<br>[wiki/meta/workflow-loop.gif](../../../../sources/AgriciDaniel__claude-obsidian/wiki/meta/workflow-loop.gif)<br>[skills/wiki-retrieve/SKILL.md](../../../../sources/AgriciDaniel__claude-obsidian/skills/wiki-retrieve/SKILL.md)<br>[skills/wiki-query/SKILL.md](../../../../sources/AgriciDaniel__claude-obsidian/skills/wiki-query/SKILL.md)<br>[skills/wiki-mode/SKILL.md](../../../../sources/AgriciDaniel__claude-obsidian/skills/wiki-mode/SKILL.md)<br>[skills/wiki-mode/templates/zettel/atomic-template.md](../../../../sources/AgriciDaniel__claude-obsidian/skills/wiki-mode/templates/zettel/atomic-template.md)<br>[skills/wiki-mode/templates/para/area-template.md](../../../../sources/AgriciDaniel__claude-obsidian/skills/wiki-mode/templates/para/area-template.md)<br>[skills/wiki-mode/templates/para/project-template.md](../../../../sources/AgriciDaniel__claude-obsidian/skills/wiki-mode/templates/para/project-template.md) |
| mcp | 2 | [wiki/entities/Nexus-claudesidian-mcp.md](../../../../sources/AgriciDaniel__claude-obsidian/wiki/entities/Nexus-claudesidian-mcp.md)<br>[skills/wiki/references/mcp-setup.md](../../../../sources/AgriciDaniel__claude-obsidian/skills/wiki/references/mcp-setup.md) |
| retrieval | 104 | [WIKI.md](../../../../sources/AgriciDaniel__claude-obsidian/WIKI.md)<br>[wiki/getting-started.md](../../../../sources/AgriciDaniel__claude-obsidian/wiki/getting-started.md)<br>[wiki/hot.md](../../../../sources/AgriciDaniel__claude-obsidian/wiki/hot.md)<br>[wiki/index.md](../../../../sources/AgriciDaniel__claude-obsidian/wiki/index.md)<br>[wiki/log.md](../../../../sources/AgriciDaniel__claude-obsidian/wiki/log.md)<br>[wiki/overview.md](../../../../sources/AgriciDaniel__claude-obsidian/wiki/overview.md)<br>[wiki/Wiki Map.canvas](../../../../sources/AgriciDaniel__claude-obsidian/wiki/Wiki Map.canvas)<br>[wiki/sources/_index.md](../../../../sources/AgriciDaniel__claude-obsidian/wiki/sources/_index.md) |
| spec | 1 | [skills/canvas/references/canvas-spec.md](../../../../sources/AgriciDaniel__claude-obsidian/skills/canvas/references/canvas-spec.md) |
| eval | 15 | [wiki/meta/dragonscale-6-test-flow.png](../../../../sources/AgriciDaniel__claude-obsidian/wiki/meta/dragonscale-6-test-flow.png)<br>[wiki/meta/dragonscale-6-test-flow.svg](../../../../sources/AgriciDaniel__claude-obsidian/wiki/meta/dragonscale-6-test-flow.svg)<br>[wiki/meta/retrieval-benchmark-v1.7.md](../../../../sources/AgriciDaniel__claude-obsidian/wiki/meta/retrieval-benchmark-v1.7.md)<br>[tests/test_allocate_address.sh](../../../../sources/AgriciDaniel__claude-obsidian/tests/test_allocate_address.sh)<br>[tests/test_bm25_index.py](../../../../sources/AgriciDaniel__claude-obsidian/tests/test_bm25_index.py)<br>[tests/test_boundary_score.py](../../../../sources/AgriciDaniel__claude-obsidian/tests/test_boundary_score.py)<br>[tests/test_concurrent_write.sh](../../../../sources/AgriciDaniel__claude-obsidian/tests/test_concurrent_write.sh)<br>[tests/test_contextual_prefix.py](../../../../sources/AgriciDaniel__claude-obsidian/tests/test_contextual_prefix.py) |
| security | 5 | [SECURITY.md](../../../../sources/AgriciDaniel__claude-obsidian/SECURITY.md)<br>[wiki/meta/full-audit-and-system-setup-session.md](../../../../sources/AgriciDaniel__claude-obsidian/wiki/meta/full-audit-and-system-setup-session.md)<br>[docs/audits/v1.7.0-audit-2026-05-17.md](../../../../sources/AgriciDaniel__claude-obsidian/docs/audits/v1.7.0-audit-2026-05-17.md)<br>[docs/audits/v1.8.0-pre-push-audit-2026-05-18.md](../../../../sources/AgriciDaniel__claude-obsidian/docs/audits/v1.8.0-pre-push-audit-2026-05-18.md)<br>[docs/audits/v1.9.0-pre-public-promotion-audit-2026-05-18.md](../../../../sources/AgriciDaniel__claude-obsidian/docs/audits/v1.9.0-pre-public-promotion-audit-2026-05-18.md) |
| ci | 1 | [.github/workflows/test.yml](../../../../sources/AgriciDaniel__claude-obsidian/.github/workflows/test.yml) |
| container | 0 | not obvious |
| instruction | 5 | [AGENTS.md](../../../../sources/AgriciDaniel__claude-obsidian/AGENTS.md)<br>[CLAUDE.md](../../../../sources/AgriciDaniel__claude-obsidian/CLAUDE.md)<br>[GEMINI.md](../../../../sources/AgriciDaniel__claude-obsidian/GEMINI.md)<br>[.github/copilot-instructions.md](../../../../sources/AgriciDaniel__claude-obsidian/.github/copilot-instructions.md)<br>[.cursor/rules/claude-obsidian.mdc](../../../../sources/AgriciDaniel__claude-obsidian/.cursor/rules/claude-obsidian.mdc) |
| docs | 13 | [README.md](../../../../sources/AgriciDaniel__claude-obsidian/README.md)<br>[hooks/README.md](../../../../sources/AgriciDaniel__claude-obsidian/hooks/README.md)<br>[docs/compound-vault-guide.md](../../../../sources/AgriciDaniel__claude-obsidian/docs/compound-vault-guide.md)<br>[docs/dragonscale-guide.md](../../../../sources/AgriciDaniel__claude-obsidian/docs/dragonscale-guide.md)<br>[docs/install-guide.md](../../../../sources/AgriciDaniel__claude-obsidian/docs/install-guide.md)<br>[docs/install-guide.pdf](../../../../sources/AgriciDaniel__claude-obsidian/docs/install-guide.pdf)<br>[docs/methodology-modes-guide.md](../../../../sources/AgriciDaniel__claude-obsidian/docs/methodology-modes-guide.md)<br>[docs/releases/v1.6.0.md](../../../../sources/AgriciDaniel__claude-obsidian/docs/releases/v1.6.0.md) |
| config | 1 | [Makefile](../../../../sources/AgriciDaniel__claude-obsidian/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 15 | [wiki/meta/dragonscale-6-test-flow.png](../../../../sources/AgriciDaniel__claude-obsidian/wiki/meta/dragonscale-6-test-flow.png)<br>[wiki/meta/dragonscale-6-test-flow.svg](../../../../sources/AgriciDaniel__claude-obsidian/wiki/meta/dragonscale-6-test-flow.svg)<br>[wiki/meta/retrieval-benchmark-v1.7.md](../../../../sources/AgriciDaniel__claude-obsidian/wiki/meta/retrieval-benchmark-v1.7.md)<br>[tests/test_allocate_address.sh](../../../../sources/AgriciDaniel__claude-obsidian/tests/test_allocate_address.sh)<br>[tests/test_bm25_index.py](../../../../sources/AgriciDaniel__claude-obsidian/tests/test_bm25_index.py)<br>[tests/test_boundary_score.py](../../../../sources/AgriciDaniel__claude-obsidian/tests/test_boundary_score.py) |
| CI workflows | 1 | [.github/workflows/test.yml](../../../../sources/AgriciDaniel__claude-obsidian/.github/workflows/test.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 5 | [SECURITY.md](../../../../sources/AgriciDaniel__claude-obsidian/SECURITY.md)<br>[wiki/meta/full-audit-and-system-setup-session.md](../../../../sources/AgriciDaniel__claude-obsidian/wiki/meta/full-audit-and-system-setup-session.md)<br>[docs/audits/v1.7.0-audit-2026-05-17.md](../../../../sources/AgriciDaniel__claude-obsidian/docs/audits/v1.7.0-audit-2026-05-17.md)<br>[docs/audits/v1.8.0-pre-push-audit-2026-05-18.md](../../../../sources/AgriciDaniel__claude-obsidian/docs/audits/v1.8.0-pre-push-audit-2026-05-18.md)<br>[docs/audits/v1.9.0-pre-public-promotion-audit-2026-05-18.md](../../../../sources/AgriciDaniel__claude-obsidian/docs/audits/v1.9.0-pre-public-promotion-audit-2026-05-18.md) |
| Agent instructions | 5 | [AGENTS.md](../../../../sources/AgriciDaniel__claude-obsidian/AGENTS.md)<br>[CLAUDE.md](../../../../sources/AgriciDaniel__claude-obsidian/CLAUDE.md)<br>[GEMINI.md](../../../../sources/AgriciDaniel__claude-obsidian/GEMINI.md)<br>[.github/copilot-instructions.md](../../../../sources/AgriciDaniel__claude-obsidian/.github/copilot-instructions.md)<br>[.cursor/rules/claude-obsidian.mdc](../../../../sources/AgriciDaniel__claude-obsidian/.cursor/rules/claude-obsidian.mdc) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `WIKI.md`, `wiki/getting-started.md`, `wiki/hot.md`.
2. Trace execution through entrypoints: `bin/setup-dragonscale.sh`, `bin/setup-mode.sh`, `bin/setup-multi-agent.sh`.
3. Map agent/tool runtime through: `AGENTS.md`, `wiki/meta/workflow-loop.gif`, `skills/wiki-retrieve/SKILL.md`.
4. Inspect retrieval/memory/indexing through: `WIKI.md`, `wiki/getting-started.md`, `wiki/hot.md`.
5. Verify behavior through test/eval files: `wiki/meta/dragonscale-6-test-flow.png`, `wiki/meta/dragonscale-6-test-flow.svg`, `wiki/meta/retrieval-benchmark-v1.7.md`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Self organizing AI second brain for Obsidian + Claude Code. Drop any source and Claude reads, links, and files it into o. 핵심 구조 신호는 Python, Makefile, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
