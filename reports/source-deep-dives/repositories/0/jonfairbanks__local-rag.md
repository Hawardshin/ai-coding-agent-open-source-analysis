# jonfairbanks/local-rag Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Ingest files for retrieval augmented generation (RAG) with open-source Large Language Models (LLMs), all without 3rd parties or sensitive data leaving your network.

## 요약

- 조사 단위: `sources/jonfairbanks__local-rag` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 58 files, 10 directories, depth score 100, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=main.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | jonfairbanks/local-rag |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 747 |
| Forks | 91 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/jonfairbanks__local-rag](../../../../sources/jonfairbanks__local-rag) |
| Existing report | [reports/global-trending/repositories/jonfairbanks__local-rag.md](../../../global-trending/repositories/jonfairbanks__local-rag.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 58 / 10 |
| Max observed depth | 3 |
| Top directories | .github, .streamlit, components, docs, tests, utils |
| Top extensions | .py: 27, .md: 13, (none): 6, .yml: 4, .yaml: 2, .gif: 1, .html: 1, .lock: 1, .png: 1, .toml: 1, .yml-rocm: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 10 |
| docs | documentation surface | 8 |
| .github | ci surface | 1 |
| components | top-level component | 1 |
| utils | top-level component | 1 |


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
| entrypoints | [main.py](../../../../sources/jonfairbanks__local-rag/main.py) | entrypoints signal |
| container | [docker-compose.yml](../../../../sources/jonfairbanks__local-rag/docker-compose.yml) | container signal |
| container | [docker-compose.yml-rocm](../../../../sources/jonfairbanks__local-rag/docker-compose.yml-rocm) | container signal |
| container | [Dockerfile](../../../../sources/jonfairbanks__local-rag/Dockerfile) | container signal |
| ci | [.github/workflows/dependabot-auto-merge.yml](../../../../sources/jonfairbanks__local-rag/.github/workflows/dependabot-auto-merge.yml) | ci signal |
| ci | [.github/workflows/issue-attachments.yaml](../../../../sources/jonfairbanks__local-rag/.github/workflows/issue-attachments.yaml) | ci signal |
| ci | [.github/workflows/main.yaml](../../../../sources/jonfairbanks__local-rag/.github/workflows/main.yaml) | ci signal |
| ci | [.github/workflows/quality.yml](../../../../sources/jonfairbanks__local-rag/.github/workflows/quality.yml) | ci signal |
| eval | [tests/test_browser_settings.py](../../../../sources/jonfairbanks__local-rag/tests/test_browser_settings.py) | eval support |
| eval | [tests/test_github_repo.py](../../../../sources/jonfairbanks__local-rag/tests/test_github_repo.py) | eval support |
| instruction | [AGENTS.md](../../../../sources/jonfairbanks__local-rag/AGENTS.md) | instruction support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [main.py](../../../../sources/jonfairbanks__local-rag/main.py) |
| agentRuntime | 1 | [AGENTS.md](../../../../sources/jonfairbanks__local-rag/AGENTS.md) |
| mcp | 0 | not obvious |
| retrieval | 3 | [utils/llama_index.py](../../../../sources/jonfairbanks__local-rag/utils/llama_index.py)<br>[utils/rag_pipeline.py](../../../../sources/jonfairbanks__local-rag/utils/rag_pipeline.py)<br>[utils/browser_storage_component/index.html](../../../../sources/jonfairbanks__local-rag/utils/browser_storage_component/index.html) |
| spec | 0 | not obvious |
| eval | 9 | [tests/test_browser_settings.py](../../../../sources/jonfairbanks__local-rag/tests/test_browser_settings.py)<br>[tests/test_github_repo.py](../../../../sources/jonfairbanks__local-rag/tests/test_github_repo.py)<br>[tests/test_import_boundaries.py](../../../../sources/jonfairbanks__local-rag/tests/test_import_boundaries.py)<br>[tests/test_local_files.py](../../../../sources/jonfairbanks__local-rag/tests/test_local_files.py)<br>[tests/test_ollama.py](../../../../sources/jonfairbanks__local-rag/tests/test_ollama.py)<br>[tests/test_page_state.py](../../../../sources/jonfairbanks__local-rag/tests/test_page_state.py)<br>[tests/test_security_controls.py](../../../../sources/jonfairbanks__local-rag/tests/test_security_controls.py)<br>[tests/test_settings_tab.py](../../../../sources/jonfairbanks__local-rag/tests/test_settings_tab.py) |
| security | 2 | [SECURITY.md](../../../../sources/jonfairbanks__local-rag/SECURITY.md)<br>[tests/test_security_controls.py](../../../../sources/jonfairbanks__local-rag/tests/test_security_controls.py) |
| ci | 4 | [.github/workflows/dependabot-auto-merge.yml](../../../../sources/jonfairbanks__local-rag/.github/workflows/dependabot-auto-merge.yml)<br>[.github/workflows/issue-attachments.yaml](../../../../sources/jonfairbanks__local-rag/.github/workflows/issue-attachments.yaml)<br>[.github/workflows/main.yaml](../../../../sources/jonfairbanks__local-rag/.github/workflows/main.yaml)<br>[.github/workflows/quality.yml](../../../../sources/jonfairbanks__local-rag/.github/workflows/quality.yml) |
| container | 3 | [docker-compose.yml](../../../../sources/jonfairbanks__local-rag/docker-compose.yml)<br>[docker-compose.yml-rocm](../../../../sources/jonfairbanks__local-rag/docker-compose.yml-rocm)<br>[Dockerfile](../../../../sources/jonfairbanks__local-rag/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/jonfairbanks__local-rag/AGENTS.md) |
| docs | 8 | [README.md](../../../../sources/jonfairbanks__local-rag/README.md)<br>[docs/contributing.md](../../../../sources/jonfairbanks__local-rag/docs/contributing.md)<br>[docs/pipeline.md](../../../../sources/jonfairbanks__local-rag/docs/pipeline.md)<br>[docs/resources.md](../../../../sources/jonfairbanks__local-rag/docs/resources.md)<br>[docs/setup.md](../../../../sources/jonfairbanks__local-rag/docs/setup.md)<br>[docs/todo.md](../../../../sources/jonfairbanks__local-rag/docs/todo.md)<br>[docs/troubleshooting.md](../../../../sources/jonfairbanks__local-rag/docs/troubleshooting.md)<br>[docs/usage.md](../../../../sources/jonfairbanks__local-rag/docs/usage.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 9 | [tests/test_browser_settings.py](../../../../sources/jonfairbanks__local-rag/tests/test_browser_settings.py)<br>[tests/test_github_repo.py](../../../../sources/jonfairbanks__local-rag/tests/test_github_repo.py)<br>[tests/test_import_boundaries.py](../../../../sources/jonfairbanks__local-rag/tests/test_import_boundaries.py)<br>[tests/test_local_files.py](../../../../sources/jonfairbanks__local-rag/tests/test_local_files.py)<br>[tests/test_ollama.py](../../../../sources/jonfairbanks__local-rag/tests/test_ollama.py)<br>[tests/test_page_state.py](../../../../sources/jonfairbanks__local-rag/tests/test_page_state.py) |
| CI workflows | 4 | [.github/workflows/dependabot-auto-merge.yml](../../../../sources/jonfairbanks__local-rag/.github/workflows/dependabot-auto-merge.yml)<br>[.github/workflows/issue-attachments.yaml](../../../../sources/jonfairbanks__local-rag/.github/workflows/issue-attachments.yaml)<br>[.github/workflows/main.yaml](../../../../sources/jonfairbanks__local-rag/.github/workflows/main.yaml)<br>[.github/workflows/quality.yml](../../../../sources/jonfairbanks__local-rag/.github/workflows/quality.yml) |
| Containers / deploy | 3 | [docker-compose.yml](../../../../sources/jonfairbanks__local-rag/docker-compose.yml)<br>[docker-compose.yml-rocm](../../../../sources/jonfairbanks__local-rag/docker-compose.yml-rocm)<br>[Dockerfile](../../../../sources/jonfairbanks__local-rag/Dockerfile) |
| Security / policy | 2 | [SECURITY.md](../../../../sources/jonfairbanks__local-rag/SECURITY.md)<br>[tests/test_security_controls.py](../../../../sources/jonfairbanks__local-rag/tests/test_security_controls.py) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/jonfairbanks__local-rag/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `main.py`, `docker-compose.yml`, `docker-compose.yml-rocm`.
2. Trace execution through entrypoints: `main.py`.
3. Map agent/tool runtime through: `AGENTS.md`.
4. Inspect retrieval/memory/indexing through: `utils/llama_index.py`, `utils/rag_pipeline.py`, `utils/browser_storage_component/index.html`.
5. Verify behavior through test/eval files: `tests/test_browser_settings.py`, `tests/test_github_repo.py`, `tests/test_import_boundaries.py`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 Ingest files for retrieval augmented generation RAG with open source Large Language Models LLMs , all without 3rd partie. 핵심 구조 신호는 Python, Dockerfile, docker-compose.yml, README.md, AGENTS.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
