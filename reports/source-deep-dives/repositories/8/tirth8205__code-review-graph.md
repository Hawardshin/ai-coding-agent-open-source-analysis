# tirth8205/code-review-graph Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local-first code intelligence graph for MCP and CLI. Builds a persistent map of your codebase so AI coding tools read only what matters, with benchmarked context reductions on reviews and large-repo workflows.

## 요약

- 조사 단위: `sources/tirth8205__code-review-graph` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 287 files, 41 directories, depth score 120, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, diagrams/diagram7_mcp_integration_flow.png이고, 의존성 단서는 mcp, next, transformers, ollama, llama, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | tirth8205/code-review-graph |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 18632 |
| Forks | 1997 |
| License | MIT |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/tirth8205__code-review-graph](../../../../sources/tirth8205__code-review-graph) |
| Existing report | [reports/llm-wiki/repositories/tirth8205__code-review-graph.md](../../../llm-wiki/repositories/tirth8205__code-review-graph.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 287 / 41 |
| Max observed depth | 5 |
| Top directories | .beads, .github, .serena, code_review_graph, code-review-graph-vscode, diagrams, docs, evaluate, hooks, scripts, skills, tests |
| Top extensions | .py: 107, .md: 42, .ts: 26, .csv: 18, (none): 12, .yml: 11, .png: 10, .json: 8, .yaml: 7, .java: 4, .sh: 3, .ipynb: 2 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 44 |
| docs | documentation surface | 18 |
| .github | ci surface | 1 |
| code_review_graph | top-level component | 1 |
| code-review-graph-vscode | top-level component | 1 |
| diagrams | top-level component | 1 |
| evaluate | top-level component | 1 |
| hooks | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | code-review-graph | code-review-graph |
| utility | pyproject.toml | crg-daemon | crg-daemon |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | transformers, ollama, llama |
| webRuntime | next |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [.mcp.json](../../../../sources/tirth8205__code-review-graph/.mcp.json) | mcp signal |
| mcp | [diagrams/diagram7_mcp_integration_flow.png](../../../../sources/tirth8205__code-review-graph/diagrams/diagram7_mcp_integration_flow.png) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/tirth8205__code-review-graph/AGENTS.md) | agentRuntime signal |
| agentRuntime | [skills/review-pr/SKILL.md](../../../../sources/tirth8205__code-review-graph/skills/review-pr/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/review-delta/SKILL.md](../../../../sources/tirth8205__code-review-graph/skills/review-delta/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/review-changes/SKILL.md](../../../../sources/tirth8205__code-review-graph/skills/review-changes/SKILL.md) | agentRuntime signal |
| entrypoints | [code_review_graph/__main__.py](../../../../sources/tirth8205__code-review-graph/code_review_graph/__main__.py) | entrypoints signal |
| entrypoints | [code_review_graph/main.py](../../../../sources/tirth8205__code-review-graph/code_review_graph/main.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/tirth8205__code-review-graph/CLAUDE.md) | instruction signal |
| instruction | [GEMINI.md](../../../../sources/tirth8205__code-review-graph/GEMINI.md) | instruction signal |
| instruction | [.github/copilot-instructions.md](../../../../sources/tirth8205__code-review-graph/.github/copilot-instructions.md) | instruction signal |
| config | [pyproject.toml](../../../../sources/tirth8205__code-review-graph/pyproject.toml) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [code_review_graph/__main__.py](../../../../sources/tirth8205__code-review-graph/code_review_graph/__main__.py)<br>[code_review_graph/main.py](../../../../sources/tirth8205__code-review-graph/code_review_graph/main.py) |
| agentRuntime | 34 | [AGENTS.md](../../../../sources/tirth8205__code-review-graph/AGENTS.md)<br>[skills/review-pr/SKILL.md](../../../../sources/tirth8205__code-review-graph/skills/review-pr/SKILL.md)<br>[skills/review-delta/SKILL.md](../../../../sources/tirth8205__code-review-graph/skills/review-delta/SKILL.md)<br>[skills/review-changes/SKILL.md](../../../../sources/tirth8205__code-review-graph/skills/review-changes/SKILL.md)<br>[skills/refactor-safely/SKILL.md](../../../../sources/tirth8205__code-review-graph/skills/refactor-safely/SKILL.md)<br>[skills/explore-codebase/SKILL.md](../../../../sources/tirth8205__code-review-graph/skills/explore-codebase/SKILL.md)<br>[skills/debug-issue/SKILL.md](../../../../sources/tirth8205__code-review-graph/skills/debug-issue/SKILL.md)<br>[skills/build-graph/SKILL.md](../../../../sources/tirth8205__code-review-graph/skills/build-graph/SKILL.md) |
| mcp | 2 | [.mcp.json](../../../../sources/tirth8205__code-review-graph/.mcp.json)<br>[diagrams/diagram7_mcp_integration_flow.png](../../../../sources/tirth8205__code-review-graph/diagrams/diagram7_mcp_integration_flow.png) |
| retrieval | 113 | [tests/test_graph.py](../../../../sources/tirth8205__code-review-graph/tests/test_graph.py)<br>[tests/test_wiki.py](../../../../sources/tirth8205__code-review-graph/tests/test_wiki.py)<br>[skills/build-graph/SKILL.md](../../../../sources/tirth8205__code-review-graph/skills/build-graph/SKILL.md)<br>[evaluate/results/code-review-graph_impact_accuracy_2026-05-25.csv](../../../../sources/tirth8205__code-review-graph/evaluate/results/code-review-graph_impact_accuracy_2026-05-25.csv)<br>[evaluate/results/code-review-graph_multi_hop_retrieval_2026-05-25.csv](../../../../sources/tirth8205__code-review-graph/evaluate/results/code-review-graph_multi_hop_retrieval_2026-05-25.csv)<br>[evaluate/results/code-review-graph_token_efficiency_2026-05-25.csv](../../../../sources/tirth8205__code-review-graph/evaluate/results/code-review-graph_token_efficiency_2026-05-25.csv)<br>[evaluate/results/express_multi_hop_retrieval_2026-05-25.csv](../../../../sources/tirth8205__code-review-graph/evaluate/results/express_multi_hop_retrieval_2026-05-25.csv)<br>[evaluate/results/fastapi_multi_hop_retrieval_2026-05-25.csv](../../../../sources/tirth8205__code-review-graph/evaluate/results/fastapi_multi_hop_retrieval_2026-05-25.csv) |
| spec | 3 | [docs/architecture.md](../../../../sources/tirth8205__code-review-graph/docs/architecture.md)<br>[docs/ROADMAP.md](../../../../sources/tirth8205__code-review-graph/docs/ROADMAP.md)<br>[diagrams/diagram2_architecture_pipeline.png](../../../../sources/tirth8205__code-review-graph/diagrams/diagram2_architecture_pipeline.png) |
| eval | 114 | [tests/__init__.py](../../../../sources/tirth8205__code-review-graph/tests/__init__.py)<br>[tests/test_action_render.py](../../../../sources/tirth8205__code-review-graph/tests/test_action_render.py)<br>[tests/test_changes.py](../../../../sources/tirth8205__code-review-graph/tests/test_changes.py)<br>[tests/test_cli_install.py](../../../../sources/tirth8205__code-review-graph/tests/test_cli_install.py)<br>[tests/test_cli.py](../../../../sources/tirth8205__code-review-graph/tests/test_cli.py)<br>[tests/test_communities.py](../../../../sources/tirth8205__code-review-graph/tests/test_communities.py)<br>[tests/test_context_savings.py](../../../../sources/tirth8205__code-review-graph/tests/test_context_savings.py)<br>[tests/test_custom_languages.py](../../../../sources/tirth8205__code-review-graph/tests/test_custom_languages.py) |
| security | 1 | [SECURITY.md](../../../../sources/tirth8205__code-review-graph/SECURITY.md) |
| ci | 4 | [.github/workflows/ci.yml](../../../../sources/tirth8205__code-review-graph/.github/workflows/ci.yml)<br>[.github/workflows/eval.yml](../../../../sources/tirth8205__code-review-graph/.github/workflows/eval.yml)<br>[.github/workflows/pr-review.yml](../../../../sources/tirth8205__code-review-graph/.github/workflows/pr-review.yml)<br>[.github/workflows/publish.yml](../../../../sources/tirth8205__code-review-graph/.github/workflows/publish.yml) |
| container | 0 | not obvious |
| instruction | 4 | [AGENTS.md](../../../../sources/tirth8205__code-review-graph/AGENTS.md)<br>[CLAUDE.md](../../../../sources/tirth8205__code-review-graph/CLAUDE.md)<br>[GEMINI.md](../../../../sources/tirth8205__code-review-graph/GEMINI.md)<br>[.github/copilot-instructions.md](../../../../sources/tirth8205__code-review-graph/.github/copilot-instructions.md) |
| docs | 21 | [README.hi-IN.md](../../../../sources/tirth8205__code-review-graph/README.hi-IN.md)<br>[README.ja-JP.md](../../../../sources/tirth8205__code-review-graph/README.ja-JP.md)<br>[README.ko-KR.md](../../../../sources/tirth8205__code-review-graph/README.ko-KR.md)<br>[README.md](../../../../sources/tirth8205__code-review-graph/README.md)<br>[README.zh-CN.md](../../../../sources/tirth8205__code-review-graph/README.zh-CN.md)<br>[docs/architecture.md](../../../../sources/tirth8205__code-review-graph/docs/architecture.md)<br>[docs/COMMANDS.md](../../../../sources/tirth8205__code-review-graph/docs/COMMANDS.md)<br>[docs/CUSTOM_LANGUAGES.md](../../../../sources/tirth8205__code-review-graph/docs/CUSTOM_LANGUAGES.md) |
| config | 5 | [pyproject.toml](../../../../sources/tirth8205__code-review-graph/pyproject.toml)<br>[uv.lock](../../../../sources/tirth8205__code-review-graph/uv.lock)<br>[tests/fixtures/tsconfig.json](../../../../sources/tirth8205__code-review-graph/tests/fixtures/tsconfig.json)<br>[code-review-graph-vscode/package.json](../../../../sources/tirth8205__code-review-graph/code-review-graph-vscode/package.json)<br>[code-review-graph-vscode/tsconfig.json](../../../../sources/tirth8205__code-review-graph/code-review-graph-vscode/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 114 | [tests/__init__.py](../../../../sources/tirth8205__code-review-graph/tests/__init__.py)<br>[tests/test_action_render.py](../../../../sources/tirth8205__code-review-graph/tests/test_action_render.py)<br>[tests/test_changes.py](../../../../sources/tirth8205__code-review-graph/tests/test_changes.py)<br>[tests/test_cli_install.py](../../../../sources/tirth8205__code-review-graph/tests/test_cli_install.py)<br>[tests/test_cli.py](../../../../sources/tirth8205__code-review-graph/tests/test_cli.py)<br>[tests/test_communities.py](../../../../sources/tirth8205__code-review-graph/tests/test_communities.py) |
| CI workflows | 4 | [.github/workflows/ci.yml](../../../../sources/tirth8205__code-review-graph/.github/workflows/ci.yml)<br>[.github/workflows/eval.yml](../../../../sources/tirth8205__code-review-graph/.github/workflows/eval.yml)<br>[.github/workflows/pr-review.yml](../../../../sources/tirth8205__code-review-graph/.github/workflows/pr-review.yml)<br>[.github/workflows/publish.yml](../../../../sources/tirth8205__code-review-graph/.github/workflows/publish.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [SECURITY.md](../../../../sources/tirth8205__code-review-graph/SECURITY.md) |
| Agent instructions | 4 | [AGENTS.md](../../../../sources/tirth8205__code-review-graph/AGENTS.md)<br>[CLAUDE.md](../../../../sources/tirth8205__code-review-graph/CLAUDE.md)<br>[GEMINI.md](../../../../sources/tirth8205__code-review-graph/GEMINI.md)<br>[.github/copilot-instructions.md](../../../../sources/tirth8205__code-review-graph/.github/copilot-instructions.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `.mcp.json`, `diagrams/diagram7_mcp_integration_flow.png`, `AGENTS.md`.
2. Trace execution through entrypoints: `code_review_graph/__main__.py`, `code_review_graph/main.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `skills/review-pr/SKILL.md`, `skills/review-delta/SKILL.md`.
4. Inspect retrieval/memory/indexing through: `tests/test_graph.py`, `tests/test_wiki.py`, `skills/build-graph/SKILL.md`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/test_action_render.py`, `tests/test_changes.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local first code intelligence graph for MCP and CLI. Builds a persistent map of your codebase so AI coding tools read on. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
