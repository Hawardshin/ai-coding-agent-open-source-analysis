# JinhuiStudy/llm-engineering-bootcamp Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

14-day hardcore LLM engineering bootcamp curriculum — Prompt / Structured Output / Tool Use / RAG / Eval / Agent / MCP / Observability / Production. Free resources, self-hostable, Korean+English.

## 요약

- 조사 단위: `sources/JinhuiStudy__llm-engineering-bootcamp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 141 files, 37 directories, depth score 108, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=projects/day10-mcp-server/pyproject.toml, projects/day10-mcp-server/README.md, projects/day10-mcp-server/server.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | JinhuiStudy/llm-engineering-bootcamp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/JinhuiStudy__llm-engineering-bootcamp](../../../../sources/JinhuiStudy__llm-engineering-bootcamp) |
| Existing report | [reports/korea-trending/repositories/JinhuiStudy__llm-engineering-bootcamp.md](../../../korea-trending/repositories/JinhuiStudy__llm-engineering-bootcamp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 141 / 37 |
| Max observed depth | 4 |
| Top directories | .github, cheatsheets, curriculum, data, infra, notes, projects, resources, setup, shared |
| Top extensions | .md: 63, .py: 45, .toml: 14, .yml: 6, (none): 6, .txt: 4, .example: 1, .json: 1, .sh: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| cheatsheets | top-level component | 1 |
| curriculum | top-level component | 1 |
| data | top-level component | 1 |
| infra | top-level component | 1 |
| notes | top-level component | 1 |
| projects | top-level component | 1 |
| resources | top-level component | 1 |
| setup | top-level component | 1 |
| shared | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | setup | make setup |
| utility | Makefile | verify | make verify |
| utility | Makefile | status | make status |
| utility | Makefile | qdrant-up | make qdrant-up |
| utility | Makefile | qdrant-down | make qdrant-down |
| utility | Makefile | langfuse-up | make langfuse-up |
| utility | Makefile | langfuse-down | make langfuse-down |
| utility | Makefile | phoenix-up | make phoenix-up |
| utility | Makefile | infra-up | make infra-up |
| utility | Makefile | infra-down | make infra-down |
| utility | Makefile | ollama-pull | make ollama-pull |
| test | Makefile | mcp-inspector | make mcp-inspector |
| quality | Makefile | fmt | make fmt |
| quality | Makefile | lint | make lint |
| quality | Makefile | typecheck | make typecheck |
| test | Makefile | test | make test |
| utility | Makefile | smoke-llm | make smoke-llm |
| utility | Makefile | smoke-embed | make smoke-embed |


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
| mcp | [projects/day10-mcp-server/pyproject.toml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day10-mcp-server/pyproject.toml) | mcp signal |
| mcp | [projects/day10-mcp-server/README.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day10-mcp-server/README.md) | mcp signal |
| mcp | [projects/day10-mcp-server/server.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day10-mcp-server/server.py) | mcp signal |
| mcp | [curriculum/week2-day11-mcp.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/curriculum/week2-day11-mcp.md) | mcp signal |
| agentRuntime | [projects/day04-tool-agent/agent.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day04-tool-agent/agent.py) | agentRuntime signal |
| agentRuntime | [projects/day04-tool-agent/tools_schema.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day04-tool-agent/tools_schema.py) | agentRuntime signal |
| agentRuntime | [projects/day04-tool-agent/tools/__init__.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day04-tool-agent/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [projects/day04-tool-agent/tools/calculator.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day04-tool-agent/tools/calculator.py) | agentRuntime signal |
| entrypoints | [projects/final-portfolio/app/main.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/final-portfolio/app/main.py) | entrypoints signal |
| config | [Makefile](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/Makefile) | config signal |
| config | [shared/pyproject.toml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/shared/pyproject.toml) | config signal |
| config | [projects/final-portfolio/pyproject.toml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/final-portfolio/pyproject.toml) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [projects/final-portfolio/app/main.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/final-portfolio/app/main.py)<br>[projects/day10-mcp-server/server.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day10-mcp-server/server.py) |
| agentRuntime | 9 | [projects/day04-tool-agent/agent.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day04-tool-agent/agent.py)<br>[projects/day04-tool-agent/tools_schema.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day04-tool-agent/tools_schema.py)<br>[projects/day04-tool-agent/tools/__init__.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day04-tool-agent/tools/__init__.py)<br>[projects/day04-tool-agent/tools/calculator.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day04-tool-agent/tools/calculator.py)<br>[projects/day04-tool-agent/tools/file_io.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day04-tool-agent/tools/file_io.py)<br>[projects/day04-tool-agent/tools/weather.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day04-tool-agent/tools/weather.py)<br>[projects/day04-tool-agent/tools/web_search.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day04-tool-agent/tools/web_search.py)<br>[projects/day02-prompt-lab/runner.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day02-prompt-lab/runner.py) |
| mcp | 5 | [projects/day10-mcp-server/pyproject.toml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day10-mcp-server/pyproject.toml)<br>[projects/day10-mcp-server/README.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day10-mcp-server/README.md)<br>[projects/day10-mcp-server/server.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day10-mcp-server/server.py)<br>[curriculum/week2-day11-mcp.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/curriculum/week2-day11-mcp.md)<br>[cheatsheets/mcp-cheatsheet.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/cheatsheets/mcp-cheatsheet.md) |
| retrieval | 27 | [INDEX.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/INDEX.md)<br>[projects/day12-local-llm/ollama_rag.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day12-local-llm/ollama_rag.py)<br>[projects/day09-langgraph-agent/graph.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day09-langgraph-agent/graph.py)<br>[projects/day08-rag-eval/golden_example.json](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day08-rag-eval/golden_example.json)<br>[projects/day08-rag-eval/pyproject.toml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day08-rag-eval/pyproject.toml)<br>[projects/day08-rag-eval/README.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day08-rag-eval/README.md)<br>[projects/day08-rag-eval/run_ragas.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day08-rag-eval/run_ragas.py)<br>[projects/day07-advanced-rag/pyproject.toml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day07-advanced-rag/pyproject.toml) |
| spec | 2 | [projects/final-portfolio/ARCHITECTURE.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/final-portfolio/ARCHITECTURE.md)<br>[curriculum/00-roadmap.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/curriculum/00-roadmap.md) |
| eval | 13 | [projects/day12-local-llm/benchmark.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day12-local-llm/benchmark.py)<br>[projects/day11-observability/instrument_example.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day11-observability/instrument_example.py)<br>[projects/day11-observability/prompt_cache_demo.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day11-observability/prompt_cache_demo.py)<br>[projects/day11-observability/pyproject.toml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day11-observability/pyproject.toml)<br>[projects/day11-observability/rate_limit_demo.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day11-observability/rate_limit_demo.py)<br>[projects/day11-observability/README.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day11-observability/README.md)<br>[projects/day08-rag-eval/golden_example.json](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day08-rag-eval/golden_example.json)<br>[projects/day08-rag-eval/pyproject.toml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day08-rag-eval/pyproject.toml) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 2 | [infra/qdrant/docker-compose.yml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/infra/qdrant/docker-compose.yml)<br>[infra/langfuse/docker-compose.yml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/infra/langfuse/docker-compose.yml) |
| instruction | 0 | not obvious |
| docs | 19 | [README.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/README.md)<br>[shared/README.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/shared/README.md)<br>[projects/final-portfolio/README.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/final-portfolio/README.md)<br>[projects/day12-local-llm/README.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day12-local-llm/README.md)<br>[projects/day11-observability/README.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day11-observability/README.md)<br>[projects/day10-mcp-server/README.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day10-mcp-server/README.md)<br>[projects/day09-langgraph-agent/README.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day09-langgraph-agent/README.md)<br>[projects/day08-rag-eval/README.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day08-rag-eval/README.md) |
| config | 15 | [Makefile](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/Makefile)<br>[shared/pyproject.toml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/shared/pyproject.toml)<br>[projects/final-portfolio/pyproject.toml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/final-portfolio/pyproject.toml)<br>[projects/day12-local-llm/pyproject.toml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day12-local-llm/pyproject.toml)<br>[projects/day11-observability/pyproject.toml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day11-observability/pyproject.toml)<br>[projects/day10-mcp-server/pyproject.toml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day10-mcp-server/pyproject.toml)<br>[projects/day09-langgraph-agent/pyproject.toml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day09-langgraph-agent/pyproject.toml)<br>[projects/day08-rag-eval/pyproject.toml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day08-rag-eval/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 13 | [projects/day12-local-llm/benchmark.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day12-local-llm/benchmark.py)<br>[projects/day11-observability/instrument_example.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day11-observability/instrument_example.py)<br>[projects/day11-observability/prompt_cache_demo.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day11-observability/prompt_cache_demo.py)<br>[projects/day11-observability/pyproject.toml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day11-observability/pyproject.toml)<br>[projects/day11-observability/rate_limit_demo.py](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day11-observability/rate_limit_demo.py)<br>[projects/day11-observability/README.md](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/projects/day11-observability/README.md) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 2 | [infra/qdrant/docker-compose.yml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/infra/qdrant/docker-compose.yml)<br>[infra/langfuse/docker-compose.yml](../../../../sources/JinhuiStudy__llm-engineering-bootcamp/infra/langfuse/docker-compose.yml) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `projects/day10-mcp-server/pyproject.toml`, `projects/day10-mcp-server/README.md`, `projects/day10-mcp-server/server.py`.
2. Trace execution through entrypoints: `projects/final-portfolio/app/main.py`, `projects/day10-mcp-server/server.py`.
3. Map agent/tool runtime through: `projects/day04-tool-agent/agent.py`, `projects/day04-tool-agent/tools_schema.py`, `projects/day04-tool-agent/tools/__init__.py`.
4. Inspect retrieval/memory/indexing through: `INDEX.md`, `projects/day12-local-llm/ollama_rag.py`, `projects/day09-langgraph-agent/graph.py`.
5. Verify behavior through test/eval files: `projects/day12-local-llm/benchmark.py`, `projects/day11-observability/instrument_example.py`, `projects/day11-observability/prompt_cache_demo.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 14 day hardcore LLM engineering bootcamp curriculum — Prompt / Structured Output / Tool Use / RAG / Eval / Agent / MCP /. 핵심 구조 신호는 Python, Makefile, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
