# microsoft/graphrag Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 893 files, 227 directories.

## 요약

- 조사 단위: `sources/microsoft__graphrag` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 890 files, 226 directories, depth score 129, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 monorepo/workspace, cli-first, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=unified-search-app/app/rag/__init__.py, unified-search-app/app/rag/typing.py, unified-search-app/app/knowledge_loader/__init__.py이고, 의존성 단서는 typer, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | microsoft/graphrag |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/microsoft__graphrag](../../../../sources/microsoft__graphrag) |
| Existing report | [reports/clone-structures/microsoft__graphrag.md](../../../clone-structures/microsoft__graphrag.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 890 / 226 |
| Max observed depth | 9 |
| Top directories | .github, .semversioner, docs, packages, scripts, tests, unified-search-app |
| Top extensions | .py: 570, .md: 56, .json: 50, .ipynb: 40, .txt: 21, .yml: 20, .parquet: 18, .manifest: 16, .txn: 16, .png: 12, .toml: 11, .yaml: 11 |
| Source patterns | monorepo/workspace, cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 73 |
| docs | documentation surface | 29 |
| packages/graphrag | packages workspace | 20 |
| packages/graphrag-llm | packages workspace | 5 |
| packages/graphrag-storage | packages workspace | 4 |
| packages/graphrag-cache | packages workspace | 3 |
| packages/graphrag-chunking | packages workspace | 2 |
| packages/graphrag-common | packages workspace | 2 |
| packages/graphrag-input | packages workspace | 2 |
| packages/graphrag-vectors | packages workspace | 2 |
| .github | ci surface | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |
| unified-search-app | top-level component | 1 |


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
| developerSurface | typer |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [unified-search-app/app/rag/__init__.py](../../../../sources/microsoft__graphrag/unified-search-app/app/rag/__init__.py) | retrieval signal |
| retrieval | [unified-search-app/app/rag/typing.py](../../../../sources/microsoft__graphrag/unified-search-app/app/rag/typing.py) | retrieval signal |
| retrieval | [unified-search-app/app/knowledge_loader/__init__.py](../../../../sources/microsoft__graphrag/unified-search-app/app/knowledge_loader/__init__.py) | retrieval signal |
| retrieval | [unified-search-app/app/knowledge_loader/data_prep.py](../../../../sources/microsoft__graphrag/unified-search-app/app/knowledge_loader/data_prep.py) | retrieval signal |
| entrypoints | [packages/graphrag/graphrag/__main__.py](../../../../sources/microsoft__graphrag/packages/graphrag/graphrag/__main__.py) | entrypoints signal |
| entrypoints | [packages/graphrag/graphrag/cli/main.py](../../../../sources/microsoft__graphrag/packages/graphrag/graphrag/cli/main.py) | entrypoints signal |
| docs | [mkdocs.yaml](../../../../sources/microsoft__graphrag/mkdocs.yaml) | docs signal |
| docs | [README.md](../../../../sources/microsoft__graphrag/README.md) | docs signal |
| docs | [unified-search-app/README.md](../../../../sources/microsoft__graphrag/unified-search-app/README.md) | docs signal |
| docs | [packages/graphrag-vectors/README.md](../../../../sources/microsoft__graphrag/packages/graphrag-vectors/README.md) | docs signal |
| eval | [tests/__init__.py](../../../../sources/microsoft__graphrag/tests/__init__.py) | eval signal |
| eval | [tests/conftest.py](../../../../sources/microsoft__graphrag/tests/conftest.py) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [packages/graphrag/graphrag/__main__.py](../../../../sources/microsoft__graphrag/packages/graphrag/graphrag/__main__.py)<br>[packages/graphrag/graphrag/cli/main.py](../../../../sources/microsoft__graphrag/packages/graphrag/graphrag/cli/main.py) |
| agentRuntime | 22 | [tests/unit/query/context_builder/__init__.py](../../../../sources/microsoft__graphrag/tests/unit/query/context_builder/__init__.py)<br>[tests/unit/query/context_builder/dynamic_community_selection.py](../../../../sources/microsoft__graphrag/tests/unit/query/context_builder/dynamic_community_selection.py)<br>[tests/unit/query/context_builder/test_entity_extraction.py](../../../../sources/microsoft__graphrag/tests/unit/query/context_builder/test_entity_extraction.py)<br>[packages/graphrag-storage/graphrag_storage/memory_storage.py](../../../../sources/microsoft__graphrag/packages/graphrag-storage/graphrag_storage/memory_storage.py)<br>[packages/graphrag-llm/graphrag_llm/metrics/memory_metrics_store.py](../../../../sources/microsoft__graphrag/packages/graphrag-llm/graphrag_llm/metrics/memory_metrics_store.py)<br>[packages/graphrag-cache/graphrag_cache/memory_cache.py](../../../../sources/microsoft__graphrag/packages/graphrag-cache/graphrag_cache/memory_cache.py)<br>[packages/graphrag/graphrag/query/context_builder/__init__.py](../../../../sources/microsoft__graphrag/packages/graphrag/graphrag/query/context_builder/__init__.py)<br>[packages/graphrag/graphrag/query/context_builder/builders.py](../../../../sources/microsoft__graphrag/packages/graphrag/graphrag/query/context_builder/builders.py) |
| mcp | 0 | not obvious |
| retrieval | 542 | [unified-search-app/app/rag/__init__.py](../../../../sources/microsoft__graphrag/unified-search-app/app/rag/__init__.py)<br>[unified-search-app/app/rag/typing.py](../../../../sources/microsoft__graphrag/unified-search-app/app/rag/typing.py)<br>[unified-search-app/app/knowledge_loader/__init__.py](../../../../sources/microsoft__graphrag/unified-search-app/app/knowledge_loader/__init__.py)<br>[unified-search-app/app/knowledge_loader/data_prep.py](../../../../sources/microsoft__graphrag/unified-search-app/app/knowledge_loader/data_prep.py)<br>[unified-search-app/app/knowledge_loader/model.py](../../../../sources/microsoft__graphrag/unified-search-app/app/knowledge_loader/model.py)<br>[unified-search-app/app/knowledge_loader/data_sources/__init__.py](../../../../sources/microsoft__graphrag/unified-search-app/app/knowledge_loader/data_sources/__init__.py)<br>[unified-search-app/app/knowledge_loader/data_sources/blob_source.py](../../../../sources/microsoft__graphrag/unified-search-app/app/knowledge_loader/data_sources/blob_source.py)<br>[unified-search-app/app/knowledge_loader/data_sources/default.py](../../../../sources/microsoft__graphrag/unified-search-app/app/knowledge_loader/data_sources/default.py) |
| spec | 2 | [packages/graphrag-storage/COSMOS_TABLE_PROVIDER_DESIGN.md](../../../../sources/microsoft__graphrag/packages/graphrag-storage/COSMOS_TABLE_PROVIDER_DESIGN.md)<br>[docs/index/architecture.md](../../../../sources/microsoft__graphrag/docs/index/architecture.md) |
| eval | 186 | [tests/__init__.py](../../../../sources/microsoft__graphrag/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/microsoft__graphrag/tests/conftest.py)<br>[tests/verbs/__init__.py](../../../../sources/microsoft__graphrag/tests/verbs/__init__.py)<br>[tests/verbs/test_create_base_text_units.py](../../../../sources/microsoft__graphrag/tests/verbs/test_create_base_text_units.py)<br>[tests/verbs/test_create_communities.py](../../../../sources/microsoft__graphrag/tests/verbs/test_create_communities.py)<br>[tests/verbs/test_create_community_reports.py](../../../../sources/microsoft__graphrag/tests/verbs/test_create_community_reports.py)<br>[tests/verbs/test_create_final_documents.py](../../../../sources/microsoft__graphrag/tests/verbs/test_create_final_documents.py)<br>[tests/verbs/test_create_final_text_units.py](../../../../sources/microsoft__graphrag/tests/verbs/test_create_final_text_units.py) |
| security | 1 | [SECURITY.md](../../../../sources/microsoft__graphrag/SECURITY.md) |
| ci | 10 | [.github/workflows/gh-pages.yml](../../../../sources/microsoft__graphrag/.github/workflows/gh-pages.yml)<br>[.github/workflows/issues-autoresolve.yml](../../../../sources/microsoft__graphrag/.github/workflows/issues-autoresolve.yml)<br>[.github/workflows/python-checks.yml](../../../../sources/microsoft__graphrag/.github/workflows/python-checks.yml)<br>[.github/workflows/python-integration-tests.yml](../../../../sources/microsoft__graphrag/.github/workflows/python-integration-tests.yml)<br>[.github/workflows/python-notebook-tests.yml](../../../../sources/microsoft__graphrag/.github/workflows/python-notebook-tests.yml)<br>[.github/workflows/python-publish.yml](../../../../sources/microsoft__graphrag/.github/workflows/python-publish.yml)<br>[.github/workflows/python-smoke-tests.yml](../../../../sources/microsoft__graphrag/.github/workflows/python-smoke-tests.yml)<br>[.github/workflows/python-unit-tests.yml](../../../../sources/microsoft__graphrag/.github/workflows/python-unit-tests.yml) |
| container | 1 | [unified-search-app/Dockerfile](../../../../sources/microsoft__graphrag/unified-search-app/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 118 | [mkdocs.yaml](../../../../sources/microsoft__graphrag/mkdocs.yaml)<br>[README.md](../../../../sources/microsoft__graphrag/README.md)<br>[unified-search-app/README.md](../../../../sources/microsoft__graphrag/unified-search-app/README.md)<br>[packages/graphrag-vectors/README.md](../../../../sources/microsoft__graphrag/packages/graphrag-vectors/README.md)<br>[packages/graphrag-storage/README.md](../../../../sources/microsoft__graphrag/packages/graphrag-storage/README.md)<br>[packages/graphrag-llm/README.md](../../../../sources/microsoft__graphrag/packages/graphrag-llm/README.md)<br>[packages/graphrag-llm/notebooks/README.md](../../../../sources/microsoft__graphrag/packages/graphrag-llm/notebooks/README.md)<br>[packages/graphrag-llm/graphrag_llm/README.md](../../../../sources/microsoft__graphrag/packages/graphrag-llm/graphrag_llm/README.md) |
| config | 12 | [pyproject.toml](../../../../sources/microsoft__graphrag/pyproject.toml)<br>[uv.lock](../../../../sources/microsoft__graphrag/uv.lock)<br>[unified-search-app/pyproject.toml](../../../../sources/microsoft__graphrag/unified-search-app/pyproject.toml)<br>[unified-search-app/uv.lock](../../../../sources/microsoft__graphrag/unified-search-app/uv.lock)<br>[packages/graphrag-vectors/pyproject.toml](../../../../sources/microsoft__graphrag/packages/graphrag-vectors/pyproject.toml)<br>[packages/graphrag-storage/pyproject.toml](../../../../sources/microsoft__graphrag/packages/graphrag-storage/pyproject.toml)<br>[packages/graphrag-llm/pyproject.toml](../../../../sources/microsoft__graphrag/packages/graphrag-llm/pyproject.toml)<br>[packages/graphrag-input/pyproject.toml](../../../../sources/microsoft__graphrag/packages/graphrag-input/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 186 | [tests/__init__.py](../../../../sources/microsoft__graphrag/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/microsoft__graphrag/tests/conftest.py)<br>[tests/verbs/__init__.py](../../../../sources/microsoft__graphrag/tests/verbs/__init__.py)<br>[tests/verbs/test_create_base_text_units.py](../../../../sources/microsoft__graphrag/tests/verbs/test_create_base_text_units.py)<br>[tests/verbs/test_create_communities.py](../../../../sources/microsoft__graphrag/tests/verbs/test_create_communities.py)<br>[tests/verbs/test_create_community_reports.py](../../../../sources/microsoft__graphrag/tests/verbs/test_create_community_reports.py) |
| CI workflows | 10 | [.github/workflows/gh-pages.yml](../../../../sources/microsoft__graphrag/.github/workflows/gh-pages.yml)<br>[.github/workflows/issues-autoresolve.yml](../../../../sources/microsoft__graphrag/.github/workflows/issues-autoresolve.yml)<br>[.github/workflows/python-checks.yml](../../../../sources/microsoft__graphrag/.github/workflows/python-checks.yml)<br>[.github/workflows/python-integration-tests.yml](../../../../sources/microsoft__graphrag/.github/workflows/python-integration-tests.yml)<br>[.github/workflows/python-notebook-tests.yml](../../../../sources/microsoft__graphrag/.github/workflows/python-notebook-tests.yml)<br>[.github/workflows/python-publish.yml](../../../../sources/microsoft__graphrag/.github/workflows/python-publish.yml) |
| Containers / deploy | 1 | [unified-search-app/Dockerfile](../../../../sources/microsoft__graphrag/unified-search-app/Dockerfile) |
| Security / policy | 1 | [SECURITY.md](../../../../sources/microsoft__graphrag/SECURITY.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `unified-search-app/app/rag/__init__.py`, `unified-search-app/app/rag/typing.py`, `unified-search-app/app/knowledge_loader/__init__.py`.
2. Trace execution through entrypoints: `packages/graphrag/graphrag/__main__.py`, `packages/graphrag/graphrag/cli/main.py`.
3. Map agent/tool runtime through: `tests/unit/query/context_builder/__init__.py`, `tests/unit/query/context_builder/dynamic_community_selection.py`, `tests/unit/query/context_builder/test_entity_extraction.py`.
4. Inspect retrieval/memory/indexing through: `unified-search-app/app/rag/__init__.py`, `unified-search-app/app/rag/typing.py`, `unified-search-app/app/knowledge_loader/__init__.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/conftest.py`, `tests/verbs/__init__.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Local clone structure analysis 893 files, 227 directories.. 핵심 구조 신호는 pyproject.toml, README.md, LICENSE, tests, ci, docs이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
