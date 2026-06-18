# QuivrHQ/quivr Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 231 files, 54 directories.

## 요약

- 조사 단위: `sources/QuivrHQ__quivr` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 228 files, 53 directories, depth score 107, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=examples/quivr-whisper/templates/index.html, examples/chatbot_voice/basic_rag_workflow.yaml, examples/chatbot/basic_rag_workflow.yaml이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | QuivrHQ/quivr |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Python |
| Stars | 39165 |
| Forks | 3725 |
| License | none |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/QuivrHQ__quivr](../../../../sources/QuivrHQ__quivr) |
| Existing report | [reports/global-trending/repositories/QuivrHQ__quivr.md](../../../global-trending/repositories/QuivrHQ__quivr.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 228 / 53 |
| Max observed depth | 5 |
| Top directories | .github, core, docs, examples |
| Top extensions | .py: 77, .md: 39, .json: 25, (none): 19, .lock: 12, .yml: 11, .png: 8, .toml: 8, .yaml: 7, .svg: 3, .css: 2, .epub: 2 |
| Source patterns | cli-first, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 51 |
| examples/chatbot | examples workspace | 6 |
| examples/chatbot_voice | examples workspace | 6 |
| examples/quivr-whisper | examples workspace | 5 |
| examples/simple_question | examples workspace | 4 |
| .github | ci surface | 1 |
| core | top-level component | 1 |
| examples | top-level component | 1 |


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
| retrieval | [examples/quivr-whisper/templates/index.html](../../../../sources/QuivrHQ__quivr/examples/quivr-whisper/templates/index.html) | retrieval signal |
| retrieval | [examples/chatbot_voice/basic_rag_workflow.yaml](../../../../sources/QuivrHQ__quivr/examples/chatbot_voice/basic_rag_workflow.yaml) | retrieval signal |
| retrieval | [examples/chatbot/basic_rag_workflow.yaml](../../../../sources/QuivrHQ__quivr/examples/chatbot/basic_rag_workflow.yaml) | retrieval signal |
| retrieval | [docs/docs/index.md](../../../../sources/QuivrHQ__quivr/docs/docs/index.md) | retrieval signal |
| entrypoints | [examples/chatbot_voice/main.py](../../../../sources/QuivrHQ__quivr/examples/chatbot_voice/main.py) | entrypoints signal |
| entrypoints | [examples/chatbot/main.py](../../../../sources/QuivrHQ__quivr/examples/chatbot/main.py) | entrypoints signal |
| docs | [README.md](../../../../sources/QuivrHQ__quivr/README.md) | docs signal |
| docs | [examples/simple_question/README.md](../../../../sources/QuivrHQ__quivr/examples/simple_question/README.md) | docs signal |
| docs | [examples/quivr-whisper/README.md](../../../../sources/QuivrHQ__quivr/examples/quivr-whisper/README.md) | docs signal |
| docs | [examples/chatbot_voice/README.md](../../../../sources/QuivrHQ__quivr/examples/chatbot_voice/README.md) | docs signal |
| eval | [core/tests/__init__.py](../../../../sources/QuivrHQ__quivr/core/tests/__init__.py) | eval signal |
| eval | [core/tests/chunk_stream_fixture.jsonl](../../../../sources/QuivrHQ__quivr/core/tests/chunk_stream_fixture.jsonl) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [examples/chatbot_voice/main.py](../../../../sources/QuivrHQ__quivr/examples/chatbot_voice/main.py)<br>[examples/chatbot/main.py](../../../../sources/QuivrHQ__quivr/examples/chatbot/main.py) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 29 | [examples/quivr-whisper/templates/index.html](../../../../sources/QuivrHQ__quivr/examples/quivr-whisper/templates/index.html)<br>[examples/chatbot_voice/basic_rag_workflow.yaml](../../../../sources/QuivrHQ__quivr/examples/chatbot_voice/basic_rag_workflow.yaml)<br>[examples/chatbot/basic_rag_workflow.yaml](../../../../sources/QuivrHQ__quivr/examples/chatbot/basic_rag_workflow.yaml)<br>[docs/docs/index.md](../../../../sources/QuivrHQ__quivr/docs/docs/index.md)<br>[docs/docs/workflows/index.md](../../../../sources/QuivrHQ__quivr/docs/docs/workflows/index.md)<br>[docs/docs/workflows/examples/basic_rag.excalidraw.png](../../../../sources/QuivrHQ__quivr/docs/docs/workflows/examples/basic_rag.excalidraw.png)<br>[docs/docs/workflows/examples/basic_rag.md](../../../../sources/QuivrHQ__quivr/docs/docs/workflows/examples/basic_rag.md)<br>[docs/docs/workflows/examples/rag_with_web_search.excalidraw.png](../../../../sources/QuivrHQ__quivr/docs/docs/workflows/examples/rag_with_web_search.excalidraw.png) |
| spec | 12 | [examples/simple_question/requirements-dev.lock](../../../../sources/QuivrHQ__quivr/examples/simple_question/requirements-dev.lock)<br>[examples/simple_question/requirements.lock](../../../../sources/QuivrHQ__quivr/examples/simple_question/requirements.lock)<br>[examples/quivr-whisper/requirements-dev.lock](../../../../sources/QuivrHQ__quivr/examples/quivr-whisper/requirements-dev.lock)<br>[examples/quivr-whisper/requirements.lock](../../../../sources/QuivrHQ__quivr/examples/quivr-whisper/requirements.lock)<br>[examples/chatbot_voice/requirements-dev.lock](../../../../sources/QuivrHQ__quivr/examples/chatbot_voice/requirements-dev.lock)<br>[examples/chatbot_voice/requirements.lock](../../../../sources/QuivrHQ__quivr/examples/chatbot_voice/requirements.lock)<br>[examples/chatbot/requirements-dev.lock](../../../../sources/QuivrHQ__quivr/examples/chatbot/requirements-dev.lock)<br>[examples/chatbot/requirements.lock](../../../../sources/QuivrHQ__quivr/examples/chatbot/requirements.lock) |
| eval | 40 | [core/tests/__init__.py](../../../../sources/QuivrHQ__quivr/core/tests/__init__.py)<br>[core/tests/chunk_stream_fixture.jsonl](../../../../sources/QuivrHQ__quivr/core/tests/chunk_stream_fixture.jsonl)<br>[core/tests/conftest.py](../../../../sources/QuivrHQ__quivr/core/tests/conftest.py)<br>[core/tests/fixture_chunks.py](../../../../sources/QuivrHQ__quivr/core/tests/fixture_chunks.py)<br>[core/tests/rag_config_workflow.yaml](../../../../sources/QuivrHQ__quivr/core/tests/rag_config_workflow.yaml)<br>[core/tests/rag_config.yaml](../../../../sources/QuivrHQ__quivr/core/tests/rag_config.yaml)<br>[core/tests/test_brain.py](../../../../sources/QuivrHQ__quivr/core/tests/test_brain.py)<br>[core/tests/test_chat_history.py](../../../../sources/QuivrHQ__quivr/core/tests/test_chat_history.py) |
| security | 0 | not obvious |
| ci | 4 | [.github/workflows/backend-core-tests.yml](../../../../sources/QuivrHQ__quivr/.github/workflows/backend-core-tests.yml)<br>[.github/workflows/conventional-pr-title.yml](../../../../sources/QuivrHQ__quivr/.github/workflows/conventional-pr-title.yml)<br>[.github/workflows/release-please-core.yml](../../../../sources/QuivrHQ__quivr/.github/workflows/release-please-core.yml)<br>[.github/workflows/stale.yml](../../../../sources/QuivrHQ__quivr/.github/workflows/stale.yml) |
| container | 1 | [core/Dockerfile.test](../../../../sources/QuivrHQ__quivr/core/Dockerfile.test) |
| instruction | 0 | not obvious |
| docs | 46 | [README.md](../../../../sources/QuivrHQ__quivr/README.md)<br>[examples/simple_question/README.md](../../../../sources/QuivrHQ__quivr/examples/simple_question/README.md)<br>[examples/quivr-whisper/README.md](../../../../sources/QuivrHQ__quivr/examples/quivr-whisper/README.md)<br>[examples/chatbot_voice/README.md](../../../../sources/QuivrHQ__quivr/examples/chatbot_voice/README.md)<br>[examples/chatbot/README.md](../../../../sources/QuivrHQ__quivr/examples/chatbot/README.md)<br>[docs/.gitignore](../../../../sources/QuivrHQ__quivr/docs/.gitignore)<br>[docs/.python-version](../../../../sources/QuivrHQ__quivr/docs/.python-version)<br>[docs/mkdocs.yml](../../../../sources/QuivrHQ__quivr/docs/mkdocs.yml) |
| config | 6 | [examples/simple_question/pyproject.toml](../../../../sources/QuivrHQ__quivr/examples/simple_question/pyproject.toml)<br>[examples/quivr-whisper/pyproject.toml](../../../../sources/QuivrHQ__quivr/examples/quivr-whisper/pyproject.toml)<br>[examples/chatbot_voice/pyproject.toml](../../../../sources/QuivrHQ__quivr/examples/chatbot_voice/pyproject.toml)<br>[examples/chatbot/pyproject.toml](../../../../sources/QuivrHQ__quivr/examples/chatbot/pyproject.toml)<br>[docs/pyproject.toml](../../../../sources/QuivrHQ__quivr/docs/pyproject.toml)<br>[core/pyproject.toml](../../../../sources/QuivrHQ__quivr/core/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 40 | [core/tests/__init__.py](../../../../sources/QuivrHQ__quivr/core/tests/__init__.py)<br>[core/tests/chunk_stream_fixture.jsonl](../../../../sources/QuivrHQ__quivr/core/tests/chunk_stream_fixture.jsonl)<br>[core/tests/conftest.py](../../../../sources/QuivrHQ__quivr/core/tests/conftest.py)<br>[core/tests/fixture_chunks.py](../../../../sources/QuivrHQ__quivr/core/tests/fixture_chunks.py)<br>[core/tests/rag_config_workflow.yaml](../../../../sources/QuivrHQ__quivr/core/tests/rag_config_workflow.yaml)<br>[core/tests/rag_config.yaml](../../../../sources/QuivrHQ__quivr/core/tests/rag_config.yaml) |
| CI workflows | 4 | [.github/workflows/backend-core-tests.yml](../../../../sources/QuivrHQ__quivr/.github/workflows/backend-core-tests.yml)<br>[.github/workflows/conventional-pr-title.yml](../../../../sources/QuivrHQ__quivr/.github/workflows/conventional-pr-title.yml)<br>[.github/workflows/release-please-core.yml](../../../../sources/QuivrHQ__quivr/.github/workflows/release-please-core.yml)<br>[.github/workflows/stale.yml](../../../../sources/QuivrHQ__quivr/.github/workflows/stale.yml) |
| Containers / deploy | 1 | [core/Dockerfile.test](../../../../sources/QuivrHQ__quivr/core/Dockerfile.test) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `examples/quivr-whisper/templates/index.html`, `examples/chatbot_voice/basic_rag_workflow.yaml`, `examples/chatbot/basic_rag_workflow.yaml`.
2. Trace execution through entrypoints: `examples/chatbot_voice/main.py`, `examples/chatbot/main.py`.
3. Inspect retrieval/memory/indexing through: `examples/quivr-whisper/templates/index.html`, `examples/chatbot_voice/basic_rag_workflow.yaml`, `examples/chatbot/basic_rag_workflow.yaml`.
4. Verify behavior through test/eval files: `core/tests/__init__.py`, `core/tests/chunk_stream_fixture.jsonl`, `core/tests/conftest.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Local clone structure analysis 231 files, 54 directories.. 핵심 구조 신호는 Python, README.md, LICENSE, tests, ci, docs이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
