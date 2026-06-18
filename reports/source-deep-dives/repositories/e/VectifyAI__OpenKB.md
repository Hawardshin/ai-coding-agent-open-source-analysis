# VectifyAI/OpenKB Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

OpenKB: Open LLM Knowledge Base

## 요약

- 조사 단위: `sources/VectifyAI__OpenKB` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 104 files, 17 directories, depth score 90, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/test_url_ingest.py, skills/openkb/references/wiki-schema.md, openkb/url_ingest.py이고, 의존성 단서는 openai, click, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | VectifyAI/OpenKB |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 2083 |
| Forks | 231 |
| License | Apache-2.0 |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/VectifyAI__OpenKB](../../../../sources/VectifyAI__OpenKB) |
| Existing report | [reports/llm-wiki/repositories/VectifyAI__OpenKB.md](../../../llm-wiki/repositories/VectifyAI__OpenKB.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 104 / 17 |
| Max observed depth | 4 |
| Top directories | .claude-plugin, .github, examples, openkb, skills, tests |
| Top extensions | .py: 85, .md: 8, .pdf: 3, .example: 2, (none): 2, .json: 1, .lock: 1, .toml: 1, .yml: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 42 |
| examples/docs | examples workspace | 3 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| openkb | top-level component | 1 |
| skills | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | openkb | openkb |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | click |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [tests/test_url_ingest.py](../../../../sources/VectifyAI__OpenKB/tests/test_url_ingest.py) | retrieval signal |
| retrieval | [skills/openkb/references/wiki-schema.md](../../../../sources/VectifyAI__OpenKB/skills/openkb/references/wiki-schema.md) | retrieval signal |
| retrieval | [openkb/url_ingest.py](../../../../sources/VectifyAI__OpenKB/openkb/url_ingest.py) | retrieval signal |
| entrypoints | [openkb/__main__.py](../../../../sources/VectifyAI__OpenKB/openkb/__main__.py) | entrypoints signal |
| docs | [README.md](../../../../sources/VectifyAI__OpenKB/README.md) | docs signal |
| docs | [examples/docs/attention-is-all-you-need.pdf](../../../../sources/VectifyAI__OpenKB/examples/docs/attention-is-all-you-need.pdf) | docs signal |
| docs | [examples/docs/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf](../../../../sources/VectifyAI__OpenKB/examples/docs/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf) | docs signal |
| docs | [examples/docs/deepseek-r1.pdf](../../../../sources/VectifyAI__OpenKB/examples/docs/deepseek-r1.pdf) | docs signal |
| eval | [tests/conftest.py](../../../../sources/VectifyAI__OpenKB/tests/conftest.py) | eval signal |
| eval | [tests/test_add_command.py](../../../../sources/VectifyAI__OpenKB/tests/test_add_command.py) | eval signal |
| eval | [tests/test_agent_tools.py](../../../../sources/VectifyAI__OpenKB/tests/test_agent_tools.py) | eval signal |
| eval | [tests/test_chat_session.py](../../../../sources/VectifyAI__OpenKB/tests/test_chat_session.py) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [openkb/__main__.py](../../../../sources/VectifyAI__OpenKB/openkb/__main__.py) |
| agentRuntime | 25 | [skills/openkb-html-critic/SKILL.md](../../../../sources/VectifyAI__OpenKB/skills/openkb-html-critic/SKILL.md)<br>[skills/openkb-deck-neon/SKILL.md](../../../../sources/VectifyAI__OpenKB/skills/openkb-deck-neon/SKILL.md)<br>[skills/openkb-deck-editorial/SKILL.md](../../../../sources/VectifyAI__OpenKB/skills/openkb-deck-editorial/SKILL.md)<br>[skills/openkb/SKILL.md](../../../../sources/VectifyAI__OpenKB/skills/openkb/SKILL.md)<br>[skills/openkb/references/commands.md](../../../../sources/VectifyAI__OpenKB/skills/openkb/references/commands.md)<br>[skills/openkb/references/wiki-schema.md](../../../../sources/VectifyAI__OpenKB/skills/openkb/references/wiki-schema.md)<br>[openkb/skill/__init__.py](../../../../sources/VectifyAI__OpenKB/openkb/skill/__init__.py)<br>[openkb/skill/creator.py](../../../../sources/VectifyAI__OpenKB/openkb/skill/creator.py) |
| mcp | 0 | not obvious |
| retrieval | 3 | [tests/test_url_ingest.py](../../../../sources/VectifyAI__OpenKB/tests/test_url_ingest.py)<br>[skills/openkb/references/wiki-schema.md](../../../../sources/VectifyAI__OpenKB/skills/openkb/references/wiki-schema.md)<br>[openkb/url_ingest.py](../../../../sources/VectifyAI__OpenKB/openkb/url_ingest.py) |
| spec | 0 | not obvious |
| eval | 48 | [tests/conftest.py](../../../../sources/VectifyAI__OpenKB/tests/conftest.py)<br>[tests/test_add_command.py](../../../../sources/VectifyAI__OpenKB/tests/test_add_command.py)<br>[tests/test_agent_tools.py](../../../../sources/VectifyAI__OpenKB/tests/test_agent_tools.py)<br>[tests/test_chat_session.py](../../../../sources/VectifyAI__OpenKB/tests/test_chat_session.py)<br>[tests/test_chat_slash_commands.py](../../../../sources/VectifyAI__OpenKB/tests/test_chat_slash_commands.py)<br>[tests/test_cli.py](../../../../sources/VectifyAI__OpenKB/tests/test_cli.py)<br>[tests/test_compiler.py](../../../../sources/VectifyAI__OpenKB/tests/test_compiler.py)<br>[tests/test_config.py](../../../../sources/VectifyAI__OpenKB/tests/test_config.py) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/publish.yml](../../../../sources/VectifyAI__OpenKB/.github/workflows/publish.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 4 | [README.md](../../../../sources/VectifyAI__OpenKB/README.md)<br>[examples/docs/attention-is-all-you-need.pdf](../../../../sources/VectifyAI__OpenKB/examples/docs/attention-is-all-you-need.pdf)<br>[examples/docs/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf](../../../../sources/VectifyAI__OpenKB/examples/docs/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf)<br>[examples/docs/deepseek-r1.pdf](../../../../sources/VectifyAI__OpenKB/examples/docs/deepseek-r1.pdf) |
| config | 2 | [pyproject.toml](../../../../sources/VectifyAI__OpenKB/pyproject.toml)<br>[uv.lock](../../../../sources/VectifyAI__OpenKB/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 48 | [tests/conftest.py](../../../../sources/VectifyAI__OpenKB/tests/conftest.py)<br>[tests/test_add_command.py](../../../../sources/VectifyAI__OpenKB/tests/test_add_command.py)<br>[tests/test_agent_tools.py](../../../../sources/VectifyAI__OpenKB/tests/test_agent_tools.py)<br>[tests/test_chat_session.py](../../../../sources/VectifyAI__OpenKB/tests/test_chat_session.py)<br>[tests/test_chat_slash_commands.py](../../../../sources/VectifyAI__OpenKB/tests/test_chat_slash_commands.py)<br>[tests/test_cli.py](../../../../sources/VectifyAI__OpenKB/tests/test_cli.py) |
| CI workflows | 1 | [.github/workflows/publish.yml](../../../../sources/VectifyAI__OpenKB/.github/workflows/publish.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/test_url_ingest.py`, `skills/openkb/references/wiki-schema.md`, `openkb/url_ingest.py`.
2. Trace execution through entrypoints: `openkb/__main__.py`.
3. Map agent/tool runtime through: `skills/openkb-html-critic/SKILL.md`, `skills/openkb-deck-neon/SKILL.md`, `skills/openkb-deck-editorial/SKILL.md`.
4. Inspect retrieval/memory/indexing through: `tests/test_url_ingest.py`, `skills/openkb/references/wiki-schema.md`, `openkb/url_ingest.py`.
5. Verify behavior through test/eval files: `tests/conftest.py`, `tests/test_add_command.py`, `tests/test_agent_tools.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 OpenKB Open LLM Knowledge Base. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, openai, tests이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
