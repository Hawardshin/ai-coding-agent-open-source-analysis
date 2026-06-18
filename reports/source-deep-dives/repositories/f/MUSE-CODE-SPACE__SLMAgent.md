# MUSE-CODE-SPACE/SLMAgent Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

🎓 로컬 SLM(소형 언어 모델) AI 에이전트를 프레임워크 없이 밑바닥부터 만드는 교육용 강좌 · Ollama + qwen2.5 · 100% 오프라인 · 학습 앱 LLM Master 실습 코스

## 요약

- 조사 단위: `sources/MUSE-CODE-SPACE__SLMAgent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 58 files, 17 directories, depth score 83, key references 8개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=chapters/06_multi_tool_agent/main.py, chapters/05_rag/main.py, chapters/04_memory/main.py이고, 의존성 단서는 ollama, llama, chroma, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | MUSE-CODE-SPACE/SLMAgent |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/MUSE-CODE-SPACE__SLMAgent](../../../../sources/MUSE-CODE-SPACE__SLMAgent) |
| Existing report | [reports/korea-trending/repositories/MUSE-CODE-SPACE__SLMAgent.md](../../../korea-trending/repositories/MUSE-CODE-SPACE__SLMAgent.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 58 / 17 |
| Max observed depth | 5 |
| Top directories | .github, agent, chapters, docs, tests |
| Top extensions | .md: 32, .py: 20, (none): 4, .toml: 1, .yml: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 7 |
| tests | validation surface | 7 |
| .github | ci surface | 1 |
| agent | top-level component | 1 |
| chapters | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | setup | make setup |
| utility | Makefile | pull | make pull |
| quality | Makefile | check | make check |
| utility | Makefile | ch01 | make ch01 |
| utility | Makefile | ch02 | make ch02 |
| utility | Makefile | ch03 | make ch03 |
| utility | Makefile | ch04 | make ch04 |
| utility | Makefile | ch05 | make ch05 |
| utility | Makefile | ch06 | make ch06 |
| utility | Makefile | ch07 | make ch07 |
| test | Makefile | test | make test |
| quality | Makefile | lint | make lint |
| quality | Makefile | fmt | make fmt |
| utility | Makefile | clean | make clean |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | chroma |
| modelRuntime | ollama, llama |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [chapters/06_multi_tool_agent/main.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/06_multi_tool_agent/main.py) | entrypoints signal |
| entrypoints | [chapters/05_rag/main.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/05_rag/main.py) | entrypoints signal |
| entrypoints | [chapters/04_memory/main.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/04_memory/main.py) | entrypoints signal |
| entrypoints | [chapters/03_react_loop/main.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/03_react_loop/main.py) | entrypoints signal |
| config | [Makefile](../../../../sources/MUSE-CODE-SPACE__SLMAgent/Makefile) | config signal |
| config | [pyproject.toml](../../../../sources/MUSE-CODE-SPACE__SLMAgent/pyproject.toml) | config signal |
| eval | [tests/__init__.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/tests/__init__.py) | eval support |
| eval | [tests/conftest.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/tests/conftest.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 6 | [chapters/06_multi_tool_agent/main.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/06_multi_tool_agent/main.py)<br>[chapters/05_rag/main.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/05_rag/main.py)<br>[chapters/04_memory/main.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/04_memory/main.py)<br>[chapters/03_react_loop/main.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/03_react_loop/main.py)<br>[chapters/02_tool_calling/main.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/02_tool_calling/main.py)<br>[chapters/01_hello_llm/main.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/01_hello_llm/main.py) |
| agentRuntime | 9 | [chapters/07_capstone/data/sample/agent_design_notes.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/07_capstone/data/sample/agent_design_notes.md)<br>[chapters/05_rag/data/agent_basics.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/05_rag/data/agent_basics.md)<br>[agent/__init__.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/agent/__init__.py)<br>[agent/client.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/agent/client.py)<br>[agent/loop.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/agent/loop.py)<br>[agent/memory.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/agent/memory.py)<br>[agent/prompts.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/agent/prompts.py)<br>[agent/rag.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/agent/rag.py) |
| mcp | 0 | not obvious |
| retrieval | 12 | [tests/test_rag.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/tests/test_rag.py)<br>[chapters/05_rag/main.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/05_rag/main.py)<br>[chapters/05_rag/README.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/05_rag/README.md)<br>[chapters/05_rag/transcript.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/05_rag/transcript.md)<br>[chapters/05_rag/data/agent_basics.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/05_rag/data/agent_basics.md)<br>[chapters/05_rag/data/ollama_가이드.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/05_rag/data/ollama_가이드.md)<br>[chapters/05_rag/data/python_소개.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/05_rag/data/python_소개.md)<br>[chapters/04_memory/main.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/04_memory/main.py) |
| spec | 2 | [docs/architecture.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/docs/architecture.md)<br>[chapters/07_capstone/data/sample/agent_design_notes.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/07_capstone/data/sample/agent_design_notes.md) |
| eval | 5 | [tests/__init__.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/tests/conftest.py)<br>[tests/test_loop.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/tests/test_loop.py)<br>[tests/test_rag.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/tests/test_rag.py)<br>[tests/test_tools.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/tests/test_tools.py) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 14 | [README.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/README.md)<br>[docs/architecture.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/docs/architecture.md)<br>[docs/glossary.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/docs/glossary.md)<br>[docs/models.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/docs/models.md)<br>[docs/setup.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/docs/setup.md)<br>[docs/troubleshooting.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/docs/troubleshooting.md)<br>[chapters/07_capstone/README.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/07_capstone/README.md)<br>[chapters/06_multi_tool_agent/README.md](../../../../sources/MUSE-CODE-SPACE__SLMAgent/chapters/06_multi_tool_agent/README.md) |
| config | 2 | [Makefile](../../../../sources/MUSE-CODE-SPACE__SLMAgent/Makefile)<br>[pyproject.toml](../../../../sources/MUSE-CODE-SPACE__SLMAgent/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 5 | [tests/__init__.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/tests/conftest.py)<br>[tests/test_loop.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/tests/test_loop.py)<br>[tests/test_rag.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/tests/test_rag.py)<br>[tests/test_tools.py](../../../../sources/MUSE-CODE-SPACE__SLMAgent/tests/test_tools.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `chapters/06_multi_tool_agent/main.py`, `chapters/05_rag/main.py`, `chapters/04_memory/main.py`.
2. Trace execution through entrypoints: `chapters/06_multi_tool_agent/main.py`, `chapters/05_rag/main.py`, `chapters/04_memory/main.py`.
3. Map agent/tool runtime through: `chapters/07_capstone/data/sample/agent_design_notes.md`, `chapters/05_rag/data/agent_basics.md`, `agent/__init__.py`.
4. Inspect retrieval/memory/indexing through: `tests/test_rag.py`, `chapters/05_rag/main.py`, `chapters/05_rag/README.md`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/conftest.py`, `tests/test_loop.py`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 🎓 로컬 SLM 소형 언어 모델 AI 에이전트를 프레임워크 없이 밑바닥부터 만드는 교육용 강좌 · Ollama + qwen2.5 · 100% 오프라인 · 학습 앱 LLM Master 실습 코스. 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, LICENSE, ollama이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
