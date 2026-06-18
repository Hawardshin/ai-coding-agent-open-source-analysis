# calesthio/OpenMontage Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

World's first open-source, agentic video production system. 12 pipelines, 52 tools, 500+ agent skills. Turn your AI coding assistant into a full video production studio.

## 요약

- 조사 단위: `sources/calesthio__OpenMontage` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,362 files, 263 directories, depth score 122, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=tools/tool_registry.py이고, 의존성 단서는 pydantic, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | calesthio/OpenMontage |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 5299 |
| Forks | 1005 |
| License | AGPL-3.0 |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/calesthio__OpenMontage](../../../../sources/calesthio__OpenMontage) |
| Existing report | [reports/global-trending/repositories/calesthio__OpenMontage.md](../../../global-trending/repositories/calesthio__OpenMontage.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1362 / 263 |
| Max observed depth | 6 |
| Top directories | .agents, .claude, .cursor, .github, assets, docs, lib, pipeline_defs, remotion-composer, schemas, skills, styles, tests, tools |
| Top extensions | .md: 881, .py: 353, .json: 34, .tsx: 34, .yaml: 18, .ts: 10, (none): 9, .txt: 7, .jsx: 4, .png: 3, .sh: 3, .mjs: 2 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 33 |
| docs | documentation surface | 5 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| lib | source boundary | 1 |
| pipeline_defs | top-level component | 1 |
| remotion-composer | top-level component | 1 |
| schemas | top-level component | 1 |
| skills | top-level component | 1 |
| styles | top-level component | 1 |
| tools | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | setup | make setup |
| utility | Makefile | install | make install |
| serve-dev | Makefile | install-dev | make install-dev |
| utility | Makefile | install-gpu | make install-gpu |
| test | Makefile | test | make test |
| test | Makefile | test-contracts | make test-contracts |
| utility | Makefile | preflight | make preflight |
| utility | Makefile | hyperframes-doctor | make hyperframes-doctor |
| utility | Makefile | hyperframes-warm | make hyperframes-warm |
| utility | Makefile | demo | make demo |
| utility | Makefile | demo-list | make demo-list |
| quality | Makefile | lint | make lint |
| utility | Makefile | clean | make clean |


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
| mcp | [tools/tool_registry.py](../../../../sources/calesthio__OpenMontage/tools/tool_registry.py) | mcp signal |
| agentRuntime | [AGENT_GUIDE.md](../../../../sources/calesthio__OpenMontage/AGENT_GUIDE.md) | agentRuntime signal |
| agentRuntime | [AGENTS.md](../../../../sources/calesthio__OpenMontage/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tools/__init__.py](../../../../sources/calesthio__OpenMontage/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [tools/base_tool.py](../../../../sources/calesthio__OpenMontage/tools/base_tool.py) | agentRuntime signal |
| entrypoints | [remotion-composer/src/index.tsx](../../../../sources/calesthio__OpenMontage/remotion-composer/src/index.tsx) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/calesthio__OpenMontage/CLAUDE.md) | instruction signal |
| instruction | [.github/copilot-instructions.md](../../../../sources/calesthio__OpenMontage/.github/copilot-instructions.md) | instruction signal |
| instruction | [.cursor/rules/openmontage.mdc](../../../../sources/calesthio__OpenMontage/.cursor/rules/openmontage.mdc) | instruction signal |
| config | [Makefile](../../../../sources/calesthio__OpenMontage/Makefile) | config signal |
| config | [requirements-dev.txt](../../../../sources/calesthio__OpenMontage/requirements-dev.txt) | config signal |
| config | [requirements-gpu.txt](../../../../sources/calesthio__OpenMontage/requirements-gpu.txt) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [remotion-composer/src/index.tsx](../../../../sources/calesthio__OpenMontage/remotion-composer/src/index.tsx) |
| agentRuntime | 1202 | [AGENT_GUIDE.md](../../../../sources/calesthio__OpenMontage/AGENT_GUIDE.md)<br>[AGENTS.md](../../../../sources/calesthio__OpenMontage/AGENTS.md)<br>[tools/__init__.py](../../../../sources/calesthio__OpenMontage/tools/__init__.py)<br>[tools/base_tool.py](../../../../sources/calesthio__OpenMontage/tools/base_tool.py)<br>[tools/cost_tracker.py](../../../../sources/calesthio__OpenMontage/tools/cost_tracker.py)<br>[tools/tool_registry.py](../../../../sources/calesthio__OpenMontage/tools/tool_registry.py)<br>[tools/video/__init__.py](../../../../sources/calesthio__OpenMontage/tools/video/__init__.py)<br>[tools/video/_shared.py](../../../../sources/calesthio__OpenMontage/tools/video/_shared.py) |
| mcp | 1 | [tools/tool_registry.py](../../../../sources/calesthio__OpenMontage/tools/tool_registry.py) |
| retrieval | 28 | [skills/INDEX.md](../../../../sources/calesthio__OpenMontage/skills/INDEX.md)<br>[remotion-composer/src/index.tsx](../../../../sources/calesthio__OpenMontage/remotion-composer/src/index.tsx)<br>[remotion-composer/src/components/index.ts](../../../../sources/calesthio__OpenMontage/remotion-composer/src/components/index.ts)<br>[remotion-composer/src/components/charts/index.ts](../../../../sources/calesthio__OpenMontage/remotion-composer/src/components/charts/index.ts)<br>[.claude/skills/vercel-react-best-practices/rules/js-index-maps.md](../../../../sources/calesthio__OpenMontage/.claude/skills/vercel-react-best-practices/rules/js-index-maps.md)<br>[.claude/skills/manimgl-best-practices/rules/embedding.md](../../../../sources/calesthio__OpenMontage/.claude/skills/manimgl-best-practices/rules/embedding.md)<br>[.claude/skills/manimgl-best-practices/references/vector_fields.md](../../../../sources/calesthio__OpenMontage/.claude/skills/manimgl-best-practices/references/vector_fields.md)<br>[.claude/skills/manimgl-best-practices/examples/embedding_matrix.py](../../../../sources/calesthio__OpenMontage/.claude/skills/manimgl-best-practices/examples/embedding_matrix.py) |
| spec | 21 | [requirements-dev.txt](../../../../sources/calesthio__OpenMontage/requirements-dev.txt)<br>[requirements-gpu.txt](../../../../sources/calesthio__OpenMontage/requirements-gpu.txt)<br>[requirements.txt](../../../../sources/calesthio__OpenMontage/requirements.txt)<br>[skills/pipelines/character-animation/character-design-director.md](../../../../sources/calesthio__OpenMontage/skills/pipelines/character-animation/character-design-director.md)<br>[skills/creative/sound-design.md](../../../../sources/calesthio__OpenMontage/skills/creative/sound-design.md)<br>[schemas/artifacts/character_design.schema.json](../../../../sources/calesthio__OpenMontage/schemas/artifacts/character_design.schema.json)<br>[docs/ARCHITECTURE.md](../../../../sources/calesthio__OpenMontage/docs/ARCHITECTURE.md)<br>[.claude/skills/web-design-guidelines/SKILL.md](../../../../sources/calesthio__OpenMontage/.claude/skills/web-design-guidelines/SKILL.md) |
| eval | 36 | [tests/__init__.py](../../../../sources/calesthio__OpenMontage/tests/__init__.py)<br>[tests/tools/__init__.py](../../../../sources/calesthio__OpenMontage/tests/tools/__init__.py)<br>[tests/tools/test_clip_cache.py](../../../../sources/calesthio__OpenMontage/tests/tools/test_clip_cache.py)<br>[tests/tools/test_documentary_governance.py](../../../../sources/calesthio__OpenMontage/tests/tools/test_documentary_governance.py)<br>[tests/tools/test_hyperframes_compose.py](../../../../sources/calesthio__OpenMontage/tests/tools/test_hyperframes_compose.py)<br>[tests/tools/test_stock_source_adapters.py](../../../../sources/calesthio__OpenMontage/tests/tools/test_stock_source_adapters.py)<br>[tests/styles/__init__.py](../../../../sources/calesthio__OpenMontage/tests/styles/__init__.py)<br>[tests/qa/QA_PLAN.md](../../../../sources/calesthio__OpenMontage/tests/qa/QA_PLAN.md) |
| security | 2 | [.claude/skills/vercel-react-best-practices/rules/server-auth-actions.md](../../../../sources/calesthio__OpenMontage/.claude/skills/vercel-react-best-practices/rules/server-auth-actions.md)<br>[.agents/skills/vercel-react-best-practices/rules/server-auth-actions.md](../../../../sources/calesthio__OpenMontage/.agents/skills/vercel-react-best-practices/rules/server-auth-actions.md) |
| ci | 0 | not obvious |
| container | 5 | [remotion-composer/src/components/charts/BarChart.tsx](../../../../sources/calesthio__OpenMontage/remotion-composer/src/components/charts/BarChart.tsx)<br>[remotion-composer/src/components/charts/index.ts](../../../../sources/calesthio__OpenMontage/remotion-composer/src/components/charts/index.ts)<br>[remotion-composer/src/components/charts/KPIGrid.tsx](../../../../sources/calesthio__OpenMontage/remotion-composer/src/components/charts/KPIGrid.tsx)<br>[remotion-composer/src/components/charts/LineChart.tsx](../../../../sources/calesthio__OpenMontage/remotion-composer/src/components/charts/LineChart.tsx)<br>[remotion-composer/src/components/charts/PieChart.tsx](../../../../sources/calesthio__OpenMontage/remotion-composer/src/components/charts/PieChart.tsx) |
| instruction | 10 | [AGENTS.md](../../../../sources/calesthio__OpenMontage/AGENTS.md)<br>[CLAUDE.md](../../../../sources/calesthio__OpenMontage/CLAUDE.md)<br>[.github/copilot-instructions.md](../../../../sources/calesthio__OpenMontage/.github/copilot-instructions.md)<br>[.cursor/rules/openmontage.mdc](../../../../sources/calesthio__OpenMontage/.cursor/rules/openmontage.mdc)<br>[.claude/skills/vercel-react-best-practices/AGENTS.md](../../../../sources/calesthio__OpenMontage/.claude/skills/vercel-react-best-practices/AGENTS.md)<br>[.claude/skills/vercel-composition-patterns/AGENTS.md](../../../../sources/calesthio__OpenMontage/.claude/skills/vercel-composition-patterns/AGENTS.md)<br>[.claude/skills/flux-best-practices/AGENTS.md](../../../../sources/calesthio__OpenMontage/.claude/skills/flux-best-practices/AGENTS.md)<br>[.agents/skills/vercel-react-best-practices/AGENTS.md](../../../../sources/calesthio__OpenMontage/.agents/skills/vercel-react-best-practices/AGENTS.md) |
| docs | 9 | [README.md](../../../../sources/calesthio__OpenMontage/README.md)<br>[docs/ARCHITECTURE.md](../../../../sources/calesthio__OpenMontage/docs/ARCHITECTURE.md)<br>[docs/PROVIDERS.md](../../../../sources/calesthio__OpenMontage/docs/PROVIDERS.md)<br>[docs/stage-gates/.gitkeep](../../../../sources/calesthio__OpenMontage/docs/stage-gates/.gitkeep)<br>[.claude/skills/vercel-react-best-practices/README.md](../../../../sources/calesthio__OpenMontage/.claude/skills/vercel-react-best-practices/README.md)<br>[.claude/skills/vercel-composition-patterns/README.md](../../../../sources/calesthio__OpenMontage/.claude/skills/vercel-composition-patterns/README.md)<br>[.agents/skills/vercel-react-best-practices/README.md](../../../../sources/calesthio__OpenMontage/.agents/skills/vercel-react-best-practices/README.md)<br>[.agents/skills/vercel-composition-patterns/README.md](../../../../sources/calesthio__OpenMontage/.agents/skills/vercel-composition-patterns/README.md) |
| config | 6 | [Makefile](../../../../sources/calesthio__OpenMontage/Makefile)<br>[requirements-dev.txt](../../../../sources/calesthio__OpenMontage/requirements-dev.txt)<br>[requirements-gpu.txt](../../../../sources/calesthio__OpenMontage/requirements-gpu.txt)<br>[requirements.txt](../../../../sources/calesthio__OpenMontage/requirements.txt)<br>[remotion-composer/package.json](../../../../sources/calesthio__OpenMontage/remotion-composer/package.json)<br>[remotion-composer/tsconfig.json](../../../../sources/calesthio__OpenMontage/remotion-composer/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 36 | [tests/__init__.py](../../../../sources/calesthio__OpenMontage/tests/__init__.py)<br>[tests/tools/__init__.py](../../../../sources/calesthio__OpenMontage/tests/tools/__init__.py)<br>[tests/tools/test_clip_cache.py](../../../../sources/calesthio__OpenMontage/tests/tools/test_clip_cache.py)<br>[tests/tools/test_documentary_governance.py](../../../../sources/calesthio__OpenMontage/tests/tools/test_documentary_governance.py)<br>[tests/tools/test_hyperframes_compose.py](../../../../sources/calesthio__OpenMontage/tests/tools/test_hyperframes_compose.py)<br>[tests/tools/test_stock_source_adapters.py](../../../../sources/calesthio__OpenMontage/tests/tools/test_stock_source_adapters.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 5 | [remotion-composer/src/components/charts/BarChart.tsx](../../../../sources/calesthio__OpenMontage/remotion-composer/src/components/charts/BarChart.tsx)<br>[remotion-composer/src/components/charts/index.ts](../../../../sources/calesthio__OpenMontage/remotion-composer/src/components/charts/index.ts)<br>[remotion-composer/src/components/charts/KPIGrid.tsx](../../../../sources/calesthio__OpenMontage/remotion-composer/src/components/charts/KPIGrid.tsx)<br>[remotion-composer/src/components/charts/LineChart.tsx](../../../../sources/calesthio__OpenMontage/remotion-composer/src/components/charts/LineChart.tsx)<br>[remotion-composer/src/components/charts/PieChart.tsx](../../../../sources/calesthio__OpenMontage/remotion-composer/src/components/charts/PieChart.tsx) |
| Security / policy | 2 | [.claude/skills/vercel-react-best-practices/rules/server-auth-actions.md](../../../../sources/calesthio__OpenMontage/.claude/skills/vercel-react-best-practices/rules/server-auth-actions.md)<br>[.agents/skills/vercel-react-best-practices/rules/server-auth-actions.md](../../../../sources/calesthio__OpenMontage/.agents/skills/vercel-react-best-practices/rules/server-auth-actions.md) |
| Agent instructions | 10 | [AGENTS.md](../../../../sources/calesthio__OpenMontage/AGENTS.md)<br>[CLAUDE.md](../../../../sources/calesthio__OpenMontage/CLAUDE.md)<br>[.github/copilot-instructions.md](../../../../sources/calesthio__OpenMontage/.github/copilot-instructions.md)<br>[.cursor/rules/openmontage.mdc](../../../../sources/calesthio__OpenMontage/.cursor/rules/openmontage.mdc)<br>[.claude/skills/vercel-react-best-practices/AGENTS.md](../../../../sources/calesthio__OpenMontage/.claude/skills/vercel-react-best-practices/AGENTS.md)<br>[.claude/skills/vercel-composition-patterns/AGENTS.md](../../../../sources/calesthio__OpenMontage/.claude/skills/vercel-composition-patterns/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tools/tool_registry.py`, `AGENT_GUIDE.md`, `AGENTS.md`.
2. Trace execution through entrypoints: `remotion-composer/src/index.tsx`.
3. Map agent/tool runtime through: `AGENT_GUIDE.md`, `AGENTS.md`, `tools/__init__.py`.
4. Inspect retrieval/memory/indexing through: `skills/INDEX.md`, `remotion-composer/src/index.tsx`, `remotion-composer/src/components/index.ts`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/tools/__init__.py`, `tests/tools/test_clip_cache.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 World's first open source, agentic video production system. 12 pipelines, 52 tools, 500+ agent skills. Turn your AI codi. 핵심 구조 신호는 Python, requirements.txt, Makefile, README.md, AGENTS.md, CLAUDE.md이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
