# microsoft/graphrag 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Local clone structure analysis: 893 files, 227 directories.

## 요약

- 조사 단위: `sources/microsoft__graphrag` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 890 files, 226 directories, depth score 117, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 monorepo/workspace, cli-first, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=unified-search-app/app/rag/__init__.py, unified-search-app/app/rag/typing.py, unified-search-app/app/knowledge_loader/__init__.py이고, 의존성 단서는 typer, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | microsoft/graphrag |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/microsoft__graphrag](../../../../sources/microsoft__graphrag) |
| 기존 보고서 | [reports/clone-structures/microsoft__graphrag.md](../../../clone-structures/microsoft__graphrag.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 890 / 226 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .github, .semversioner, docs, packages, scripts, tests, unified-search-app |
| 상위 확장자 | .py: 570, .md: 56, .json: 50, .ipynb: 40, .txt: 21, .yml: 20, .parquet: 18, .manifest: 16, .txn: 16, .png: 12, .toml: 11, .yaml: 11 |
| 소스 패턴 | monorepo/workspace, cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | typer |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [packages/graphrag/graphrag/__main__.py](../../../../sources/microsoft__graphrag/packages/graphrag/graphrag/__main__.py)<br>[packages/graphrag/graphrag/cli/main.py](../../../../sources/microsoft__graphrag/packages/graphrag/graphrag/cli/main.py) |
| agentRuntime | 22 | [tests/unit/query/context_builder/__init__.py](../../../../sources/microsoft__graphrag/tests/unit/query/context_builder/__init__.py)<br>[tests/unit/query/context_builder/dynamic_community_selection.py](../../../../sources/microsoft__graphrag/tests/unit/query/context_builder/dynamic_community_selection.py)<br>[tests/unit/query/context_builder/test_entity_extraction.py](../../../../sources/microsoft__graphrag/tests/unit/query/context_builder/test_entity_extraction.py)<br>[packages/graphrag-storage/graphrag_storage/memory_storage.py](../../../../sources/microsoft__graphrag/packages/graphrag-storage/graphrag_storage/memory_storage.py)<br>[packages/graphrag-llm/graphrag_llm/metrics/memory_metrics_store.py](../../../../sources/microsoft__graphrag/packages/graphrag-llm/graphrag_llm/metrics/memory_metrics_store.py)<br>[packages/graphrag-cache/graphrag_cache/memory_cache.py](../../../../sources/microsoft__graphrag/packages/graphrag-cache/graphrag_cache/memory_cache.py)<br>[packages/graphrag/graphrag/query/context_builder/__init__.py](../../../../sources/microsoft__graphrag/packages/graphrag/graphrag/query/context_builder/__init__.py)<br>[packages/graphrag/graphrag/query/context_builder/builders.py](../../../../sources/microsoft__graphrag/packages/graphrag/graphrag/query/context_builder/builders.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 542 | [unified-search-app/app/rag/__init__.py](../../../../sources/microsoft__graphrag/unified-search-app/app/rag/__init__.py)<br>[unified-search-app/app/rag/typing.py](../../../../sources/microsoft__graphrag/unified-search-app/app/rag/typing.py)<br>[unified-search-app/app/knowledge_loader/__init__.py](../../../../sources/microsoft__graphrag/unified-search-app/app/knowledge_loader/__init__.py)<br>[unified-search-app/app/knowledge_loader/data_prep.py](../../../../sources/microsoft__graphrag/unified-search-app/app/knowledge_loader/data_prep.py)<br>[unified-search-app/app/knowledge_loader/model.py](../../../../sources/microsoft__graphrag/unified-search-app/app/knowledge_loader/model.py)<br>[unified-search-app/app/knowledge_loader/data_sources/__init__.py](../../../../sources/microsoft__graphrag/unified-search-app/app/knowledge_loader/data_sources/__init__.py)<br>[unified-search-app/app/knowledge_loader/data_sources/blob_source.py](../../../../sources/microsoft__graphrag/unified-search-app/app/knowledge_loader/data_sources/blob_source.py)<br>[unified-search-app/app/knowledge_loader/data_sources/default.py](../../../../sources/microsoft__graphrag/unified-search-app/app/knowledge_loader/data_sources/default.py) |
| spec | 2 | [packages/graphrag-storage/COSMOS_TABLE_PROVIDER_DESIGN.md](../../../../sources/microsoft__graphrag/packages/graphrag-storage/COSMOS_TABLE_PROVIDER_DESIGN.md)<br>[docs/index/architecture.md](../../../../sources/microsoft__graphrag/docs/index/architecture.md) |
| eval | 186 | [tests/__init__.py](../../../../sources/microsoft__graphrag/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/microsoft__graphrag/tests/conftest.py)<br>[tests/verbs/__init__.py](../../../../sources/microsoft__graphrag/tests/verbs/__init__.py)<br>[tests/verbs/test_create_base_text_units.py](../../../../sources/microsoft__graphrag/tests/verbs/test_create_base_text_units.py)<br>[tests/verbs/test_create_communities.py](../../../../sources/microsoft__graphrag/tests/verbs/test_create_communities.py)<br>[tests/verbs/test_create_community_reports.py](../../../../sources/microsoft__graphrag/tests/verbs/test_create_community_reports.py)<br>[tests/verbs/test_create_final_documents.py](../../../../sources/microsoft__graphrag/tests/verbs/test_create_final_documents.py)<br>[tests/verbs/test_create_final_text_units.py](../../../../sources/microsoft__graphrag/tests/verbs/test_create_final_text_units.py) |
| security | 1 | [SECURITY.md](../../../../sources/microsoft__graphrag/SECURITY.md) |
| ci | 10 | [.github/workflows/gh-pages.yml](../../../../sources/microsoft__graphrag/.github/workflows/gh-pages.yml)<br>[.github/workflows/issues-autoresolve.yml](../../../../sources/microsoft__graphrag/.github/workflows/issues-autoresolve.yml)<br>[.github/workflows/python-checks.yml](../../../../sources/microsoft__graphrag/.github/workflows/python-checks.yml)<br>[.github/workflows/python-integration-tests.yml](../../../../sources/microsoft__graphrag/.github/workflows/python-integration-tests.yml)<br>[.github/workflows/python-notebook-tests.yml](../../../../sources/microsoft__graphrag/.github/workflows/python-notebook-tests.yml)<br>[.github/workflows/python-publish.yml](../../../../sources/microsoft__graphrag/.github/workflows/python-publish.yml)<br>[.github/workflows/python-smoke-tests.yml](../../../../sources/microsoft__graphrag/.github/workflows/python-smoke-tests.yml)<br>[.github/workflows/python-unit-tests.yml](../../../../sources/microsoft__graphrag/.github/workflows/python-unit-tests.yml) |
| container | 1 | [unified-search-app/Dockerfile](../../../../sources/microsoft__graphrag/unified-search-app/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 118 | [mkdocs.yaml](../../../../sources/microsoft__graphrag/mkdocs.yaml)<br>[README.md](../../../../sources/microsoft__graphrag/README.md)<br>[unified-search-app/README.md](../../../../sources/microsoft__graphrag/unified-search-app/README.md)<br>[packages/graphrag-vectors/README.md](../../../../sources/microsoft__graphrag/packages/graphrag-vectors/README.md)<br>[packages/graphrag-storage/README.md](../../../../sources/microsoft__graphrag/packages/graphrag-storage/README.md)<br>[packages/graphrag-llm/README.md](../../../../sources/microsoft__graphrag/packages/graphrag-llm/README.md)<br>[packages/graphrag-llm/notebooks/README.md](../../../../sources/microsoft__graphrag/packages/graphrag-llm/notebooks/README.md)<br>[packages/graphrag-llm/graphrag_llm/README.md](../../../../sources/microsoft__graphrag/packages/graphrag-llm/graphrag_llm/README.md) |
| config | 12 | [pyproject.toml](../../../../sources/microsoft__graphrag/pyproject.toml)<br>[uv.lock](../../../../sources/microsoft__graphrag/uv.lock)<br>[unified-search-app/pyproject.toml](../../../../sources/microsoft__graphrag/unified-search-app/pyproject.toml)<br>[unified-search-app/uv.lock](../../../../sources/microsoft__graphrag/unified-search-app/uv.lock)<br>[packages/graphrag-vectors/pyproject.toml](../../../../sources/microsoft__graphrag/packages/graphrag-vectors/pyproject.toml)<br>[packages/graphrag-storage/pyproject.toml](../../../../sources/microsoft__graphrag/packages/graphrag-storage/pyproject.toml)<br>[packages/graphrag-llm/pyproject.toml](../../../../sources/microsoft__graphrag/packages/graphrag-llm/pyproject.toml)<br>[packages/graphrag-input/pyproject.toml](../../../../sources/microsoft__graphrag/packages/graphrag-input/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 186 | [tests/__init__.py](../../../../sources/microsoft__graphrag/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/microsoft__graphrag/tests/conftest.py)<br>[tests/verbs/__init__.py](../../../../sources/microsoft__graphrag/tests/verbs/__init__.py)<br>[tests/verbs/test_create_base_text_units.py](../../../../sources/microsoft__graphrag/tests/verbs/test_create_base_text_units.py)<br>[tests/verbs/test_create_communities.py](../../../../sources/microsoft__graphrag/tests/verbs/test_create_communities.py)<br>[tests/verbs/test_create_community_reports.py](../../../../sources/microsoft__graphrag/tests/verbs/test_create_community_reports.py) |
| CI workflow | 10 | [.github/workflows/gh-pages.yml](../../../../sources/microsoft__graphrag/.github/workflows/gh-pages.yml)<br>[.github/workflows/issues-autoresolve.yml](../../../../sources/microsoft__graphrag/.github/workflows/issues-autoresolve.yml)<br>[.github/workflows/python-checks.yml](../../../../sources/microsoft__graphrag/.github/workflows/python-checks.yml)<br>[.github/workflows/python-integration-tests.yml](../../../../sources/microsoft__graphrag/.github/workflows/python-integration-tests.yml)<br>[.github/workflows/python-notebook-tests.yml](../../../../sources/microsoft__graphrag/.github/workflows/python-notebook-tests.yml)<br>[.github/workflows/python-publish.yml](../../../../sources/microsoft__graphrag/.github/workflows/python-publish.yml) |
| 컨테이너/배포 | 1 | [unified-search-app/Dockerfile](../../../../sources/microsoft__graphrag/unified-search-app/Dockerfile) |
| 보안/정책 | 1 | [SECURITY.md](../../../../sources/microsoft__graphrag/SECURITY.md) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `unified-search-app/app/rag/__init__.py`, `unified-search-app/app/rag/typing.py`, `unified-search-app/app/knowledge_loader/__init__.py`.
2. entrypoint를 따라 실행 흐름 확인: `packages/graphrag/graphrag/__main__.py`, `packages/graphrag/graphrag/cli/main.py`.
3. agent/tool runtime 매핑: `tests/unit/query/context_builder/__init__.py`, `tests/unit/query/context_builder/dynamic_community_selection.py`, `tests/unit/query/context_builder/test_entity_extraction.py`.
4. retrieval/memory/indexing 확인: `unified-search-app/app/rag/__init__.py`, `unified-search-app/app/rag/typing.py`, `unified-search-app/app/knowledge_loader/__init__.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/verbs/__init__.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Local clone structure analysis 893 files, 227 directories.. 핵심 구조 신호는 pyproject.toml, README.md, LICENSE, tests, ci, docs이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
