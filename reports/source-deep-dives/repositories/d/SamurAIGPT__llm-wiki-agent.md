# SamurAIGPT/llm-wiki-agent Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

A personal knowledge base that builds and maintains itself. Drop in sources — Claude (or Codex/Gemini) reads them, extracts knowledge, and maintains a persistent interlinked wiki. Works with Claude Code, Codex, OpenCode, Gemini CLI. No API key needed.

## 요약

- 조사 단위: `sources/SamurAIGPT__llm-wiki-agent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 28 files, 10 directories, depth score 75, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=wiki/index.md, wiki/log.md, wiki/overview.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | SamurAIGPT/llm-wiki-agent |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | mixed |
| Language | Python |
| Stars | 2959 |
| Forks | 350 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/SamurAIGPT__llm-wiki-agent](../../../../sources/SamurAIGPT__llm-wiki-agent) |
| Existing report | [reports/llm-wiki/repositories/SamurAIGPT__llm-wiki-agent.md](../../../llm-wiki/repositories/SamurAIGPT__llm-wiki-agent.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 28 / 10 |
| Max observed depth | 4 |
| Top directories | .claude, docs, examples, graph, raw, tools, wiki |
| Top extensions | .md: 14, .py: 9, (none): 3, .toml: 1, .txt: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 2 |
| examples | top-level component | 1 |
| examples/cjk-showcase | examples workspace | 1 |
| graph | top-level component | 1 |
| raw | top-level component | 1 |
| tools | top-level component | 1 |
| wiki | top-level component | 1 |


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
| retrieval | [wiki/index.md](../../../../sources/SamurAIGPT__llm-wiki-agent/wiki/index.md) | retrieval signal |
| retrieval | [wiki/log.md](../../../../sources/SamurAIGPT__llm-wiki-agent/wiki/log.md) | retrieval signal |
| retrieval | [wiki/overview.md](../../../../sources/SamurAIGPT__llm-wiki-agent/wiki/overview.md) | retrieval signal |
| retrieval | [tools/build_graph.py](../../../../sources/SamurAIGPT__llm-wiki-agent/tools/build_graph.py) | retrieval signal |
| docs | [README.md](../../../../sources/SamurAIGPT__llm-wiki-agent/README.md) | docs signal |
| docs | [examples/cjk-showcase/README.md](../../../../sources/SamurAIGPT__llm-wiki-agent/examples/cjk-showcase/README.md) | docs signal |
| docs | [docs/automated-sync.md](../../../../sources/SamurAIGPT__llm-wiki-agent/docs/automated-sync.md) | docs signal |
| config | [pyproject.toml](../../../../sources/SamurAIGPT__llm-wiki-agent/pyproject.toml) | config signal |
| config | [requirements.txt](../../../../sources/SamurAIGPT__llm-wiki-agent/requirements.txt) | config signal |
| instruction | [AGENTS.md](../../../../sources/SamurAIGPT__llm-wiki-agent/AGENTS.md) | instruction support |
| instruction | [CLAUDE.md](../../../../sources/SamurAIGPT__llm-wiki-agent/CLAUDE.md) | instruction support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 10 | [AGENTS.md](../../../../sources/SamurAIGPT__llm-wiki-agent/AGENTS.md)<br>[tools/build_graph.py](../../../../sources/SamurAIGPT__llm-wiki-agent/tools/build_graph.py)<br>[tools/file_to_md.py](../../../../sources/SamurAIGPT__llm-wiki-agent/tools/file_to_md.py)<br>[tools/heal.py](../../../../sources/SamurAIGPT__llm-wiki-agent/tools/heal.py)<br>[tools/health.py](../../../../sources/SamurAIGPT__llm-wiki-agent/tools/health.py)<br>[tools/ingest.py](../../../../sources/SamurAIGPT__llm-wiki-agent/tools/ingest.py)<br>[tools/lint.py](../../../../sources/SamurAIGPT__llm-wiki-agent/tools/lint.py)<br>[tools/pdf2md.py](../../../../sources/SamurAIGPT__llm-wiki-agent/tools/pdf2md.py) |
| mcp | 0 | not obvious |
| retrieval | 10 | [wiki/index.md](../../../../sources/SamurAIGPT__llm-wiki-agent/wiki/index.md)<br>[wiki/log.md](../../../../sources/SamurAIGPT__llm-wiki-agent/wiki/log.md)<br>[wiki/overview.md](../../../../sources/SamurAIGPT__llm-wiki-agent/wiki/overview.md)<br>[tools/build_graph.py](../../../../sources/SamurAIGPT__llm-wiki-agent/tools/build_graph.py)<br>[tools/ingest.py](../../../../sources/SamurAIGPT__llm-wiki-agent/tools/ingest.py)<br>[graph/.gitkeep](../../../../sources/SamurAIGPT__llm-wiki-agent/graph/.gitkeep)<br>[.claude/commands/wiki-graph.md](../../../../sources/SamurAIGPT__llm-wiki-agent/.claude/commands/wiki-graph.md)<br>[.claude/commands/wiki-ingest.md](../../../../sources/SamurAIGPT__llm-wiki-agent/.claude/commands/wiki-ingest.md) |
| spec | 1 | [requirements.txt](../../../../sources/SamurAIGPT__llm-wiki-agent/requirements.txt) |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 3 | [AGENTS.md](../../../../sources/SamurAIGPT__llm-wiki-agent/AGENTS.md)<br>[CLAUDE.md](../../../../sources/SamurAIGPT__llm-wiki-agent/CLAUDE.md)<br>[GEMINI.md](../../../../sources/SamurAIGPT__llm-wiki-agent/GEMINI.md) |
| docs | 3 | [README.md](../../../../sources/SamurAIGPT__llm-wiki-agent/README.md)<br>[examples/cjk-showcase/README.md](../../../../sources/SamurAIGPT__llm-wiki-agent/examples/cjk-showcase/README.md)<br>[docs/automated-sync.md](../../../../sources/SamurAIGPT__llm-wiki-agent/docs/automated-sync.md) |
| config | 2 | [pyproject.toml](../../../../sources/SamurAIGPT__llm-wiki-agent/pyproject.toml)<br>[requirements.txt](../../../../sources/SamurAIGPT__llm-wiki-agent/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 3 | [AGENTS.md](../../../../sources/SamurAIGPT__llm-wiki-agent/AGENTS.md)<br>[CLAUDE.md](../../../../sources/SamurAIGPT__llm-wiki-agent/CLAUDE.md)<br>[GEMINI.md](../../../../sources/SamurAIGPT__llm-wiki-agent/GEMINI.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious; test/eval path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `wiki/index.md`, `wiki/log.md`, `wiki/overview.md`.
2. Map agent/tool runtime through: `AGENTS.md`, `tools/build_graph.py`, `tools/file_to_md.py`.
3. Inspect retrieval/memory/indexing through: `wiki/index.md`, `wiki/log.md`, `wiki/overview.md`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 A personal knowledge base that builds and maintains itself. Drop in sources — Claude or Codex/Gemini reads them, extract. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, README.md, AGENTS.md, CLAUDE.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
