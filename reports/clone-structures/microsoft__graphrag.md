# microsoft/graphrag 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/microsoft__graphrag |
| remote | https://github.com/microsoft/graphrag |
| HEAD | 6d02c23 (2026-05-28) Update getting started docs. (#2367) |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 893 |
| dirs | 227 |
| stack | Python |

## 구조 해석

- Monorepo/workspace 구조가 보이며 여러 패키지나 crate를 한 저장소에서 관리한다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `GraphRAG`, `Overview`, `Quickstart`, `Repository Guidance`, `Diving Deeper`, `Prompt Tuning`, `Versioning`, `Responsible AI FAQ`, `Trademarks`, `Privacy`

> GraphRAG 👉 Microsoft Research Blog Post<br/ 👉 Read the docs<br/ 👉 GraphRAG Arxiv <div align="left" <a href="https //pypi.org/project/graphrag/" <img alt="PyPI Version" src="https //img.shields.io/pypi/v/graphrag" </a <a href="https //pypi.org/project/graphrag/" <img alt="PyPI Downloads" src="https //img.shields.io/pypi/dm/graphrag" </a <a href="https //github.com/microsoft/graphrag/issues" <img alt="GitHub Issues" src="https //img.shields.io/github/issues/microsoft/graphrag" </a <a href="https //github.com/microsoft/graphrag/discussions" <img alt="GitHub Discussions" src="https //img.shields.io/github/discussions/microsoft/graphrag" </a </div Overview The GraphRAG project is a data pipeline and transformation suite that is designed to extract meaningful, structured data from unstructured text using the power of LLMs. To learn more about GraphRAG and how it can be used to enhance your 

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .semversioner | dir |
| .vscode | dir |
| .vsts-ci.yml | file |
| breaking-changes.md | file |
| CHANGELOG.md | file |
| CODE_OF_CONDUCT.md | file |
| CODEOWNERS | file |
| CONTRIBUTING.md | file |
| cspell.config.yaml | file |
| DEVELOPING.md | file |
| dictionary.txt | file |
| docs | dir |
| LICENSE | file |
| mkdocs.yaml | file |
| packages | dir |
| pyproject.toml | file |
| RAI_TRANSPARENCY.md | file |
| README.md | file |
| RELEASE.md | file |
| scripts | dir |
| SECURITY.md | file |
| SUPPORT.md | file |
| tests | dir |
| unified-search-app | dir |
| uv.lock | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| packages/ | 485 |
| tests/ | 182 |
| docs/ | 105 |
| .semversioner/ | 42 |
| unified-search-app/ | 34 |
| (root) | 20 |
| .github/ | 16 |
| scripts/ | 6 |
| .vscode/ | 3 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| packages/ | 485 | preferred |
| docs/ | 105 | preferred |
| tests/ | 182 | preferred |
| scripts/ | 6 | preferred |
| packages/graphrag/ | 269 | large |
| packages/graphrag/graphrag/ | 267 | large |
| tests/unit/ | 116 | large |
| packages/graphrag-llm/ | 101 | large |
| packages/graphrag-llm/graphrag_llm/ | 83 | large |
| docs/examples_notebooks/ | 65 | large |
| docs/examples_notebooks/inputs/ | 56 | large |
| tests/unit/indexing/ | 48 | large |
| .semversioner/ | 42 | large |
| unified-search-app/ | 34 | large |
| packages/graphrag-storage/ | 27 | large |
| tests/verbs/ | 26 | large |
| unified-search-app/app/ | 25 | large |
| packages/graphrag-vectors/ | 23 | large |
| packages/graphrag-storage/graphrag_storage/ | 22 | large |
| tests/integration/ | 21 | large |
| packages/graphrag-input/ | 20 | large |
| tests/unit/query/ | 17 | large |
| .github/ | 16 | large |
| packages/graphrag-chunking/ | 16 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `packages/graphrag-cache/pyproject.toml`
- `packages/graphrag-chunking/pyproject.toml`
- `packages/graphrag-common/pyproject.toml`
- `packages/graphrag-input/pyproject.toml`
- `packages/graphrag-llm/pyproject.toml`
- `packages/graphrag-storage/pyproject.toml`
- `packages/graphrag-vectors/pyproject.toml`
- `packages/graphrag/pyproject.toml`
- `pyproject.toml`
- `unified-search-app/Dockerfile`
- `unified-search-app/pyproject.toml`
- `unified-search-app/uv.lock`
- `uv.lock`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| packages/graphrag-cache/pyproject.toml | graphrag-cache | false | false | false | false |
| packages/graphrag-chunking/pyproject.toml | graphrag-chunking | false | false | false | false |
| packages/graphrag-common/pyproject.toml | graphrag-common | false | false | false | false |
| packages/graphrag-input/pyproject.toml | graphrag-input | false | false | false | false |
| packages/graphrag-llm/pyproject.toml | graphrag-llm | false | false | false | false |
| packages/graphrag-storage/pyproject.toml | graphrag-storage | false | false | false | false |
| packages/graphrag-vectors/pyproject.toml | graphrag-vectors | false | false | false | false |
| packages/graphrag/pyproject.toml | graphrag | false | false | false | false |
| pyproject.toml | graphrag-monorepo | false | true | true | true |
| unified-search-app/pyproject.toml | unified-copilot | false | false | false | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs/blog_posts.md`
- `docs/cli.md`
- `docs/config/init.md`
- `docs/config/models.md`
- `docs/config/overview.md`
- `docs/config/yaml.md`
- `docs/data/operation_dulce/ABOUT.md`
- `docs/data/operation_dulce/Operation Dulce v2 1 1.md`
- `docs/data/operation_dulce/dataset.zip`
- `docs/developing.md`
- `docs/examples_notebooks/api_overview.ipynb`
- `docs/examples_notebooks/drift_search.ipynb`
- `docs/examples_notebooks/global_search.ipynb`
- `docs/examples_notebooks/global_search_with_dynamic_community_selection.ipynb`
- `docs/examples_notebooks/index_migration_to_v1.ipynb`
- `docs/examples_notebooks/index_migration_to_v2.ipynb`
- `docs/examples_notebooks/index_migration_to_v3.ipynb`
- `docs/examples_notebooks/input_documents.ipynb`
- `docs/examples_notebooks/inputs/operation dulce/ABOUT.md`
- `docs/examples_notebooks/inputs/operation dulce/Operation Dulce v2 1 1.md`
- `docs/examples_notebooks/inputs/operation dulce/communities.parquet`
- `docs/examples_notebooks/inputs/operation dulce/community_reports.parquet`
- `docs/examples_notebooks/inputs/operation dulce/covariates.parquet`
- `docs/examples_notebooks/inputs/operation dulce/documents.parquet`
- `docs/examples_notebooks/inputs/operation dulce/embeddings.community_full_content.parquet`
- `docs/examples_notebooks/inputs/operation dulce/entities.parquet`
- `docs/examples_notebooks/inputs/operation dulce/lancedb/community_full_content.lance/_indices/dd5917d9-d48d-4af3-bc2e-43a53b2fdbe6/auxiliary.idx`
- `docs/examples_notebooks/inputs/operation dulce/lancedb/community_full_content.lance/_indices/dd5917d9-d48d-4af3-bc2e-43a53b2fdbe6/index.idx`
- `docs/examples_notebooks/inputs/operation dulce/lancedb/community_full_content.lance/_transactions/0-a943ac34-0e87-43c2-80d0-8f83fb80f4f5.txn`
- `docs/examples_notebooks/inputs/operation dulce/lancedb/community_full_content.lance/_transactions/1-ec798d7b-a8bf-4985-a5d0-784434802168.txn`
- `docs/examples_notebooks/inputs/operation dulce/lancedb/community_full_content.lance/_transactions/2-78887911-d792-4dc9-b28d-f2858db1139a.txn`
- `docs/examples_notebooks/inputs/operation dulce/lancedb/community_full_content.lance/_transactions/3-c16be721-5d7e-46a0-98c2-34d5d9c29383.txn`
- `docs/examples_notebooks/inputs/operation dulce/lancedb/community_full_content.lance/_versions/1.manifest`
- `docs/examples_notebooks/inputs/operation dulce/lancedb/community_full_content.lance/_versions/2.manifest`
- `docs/examples_notebooks/inputs/operation dulce/lancedb/community_full_content.lance/_versions/3.manifest`
- `docs/examples_notebooks/inputs/operation dulce/lancedb/community_full_content.lance/_versions/4.manifest`
- `docs/examples_notebooks/inputs/operation dulce/lancedb/community_full_content.lance/data/667cccff-01b5-4b70-a2a6-8cf4d6ada077.lance`
- `docs/examples_notebooks/inputs/operation dulce/lancedb/community_full_content.lance/data/a84d995f-111c-45d1-ba5a-32b3747b8a18.lance`
- `docs/examples_notebooks/inputs/operation dulce/lancedb/entity_description.lance/_indices/b1bd07f3-ad25-40bc-b91c-14215386e477/auxiliary.idx`
- `docs/examples_notebooks/inputs/operation dulce/lancedb/entity_description.lance/_indices/b1bd07f3-ad25-40bc-b91c-14215386e477/index.idx`
- `docs/examples_notebooks/inputs/operation dulce/lancedb/entity_description.lance/_transactions/0-5b75ba0a-bae9-4244-8a6b-31de09f7e03d.txn`
- `docs/examples_notebooks/inputs/operation dulce/lancedb/entity_description.lance/_transactions/1-71f2ac8d-a101-467d-b57d-2dea6d14f7a7.txn`
- `docs/examples_notebooks/inputs/operation dulce/lancedb/entity_description.lance/_transactions/2-d621e621-8e92-419f-99e4-f1c7d163bcc2.txn`
- `docs/examples_notebooks/inputs/operation dulce/lancedb/entity_description.lance/_transactions/3-4ada922f-cf85-44df-bc8b-b132e35009d0.txn`
- `docs/examples_notebooks/inputs/operation dulce/lancedb/entity_description.lance/_transactions/4-dcac110d-2a49-4777-a51e-5078fed1b0df.txn`
- `docs/examples_notebooks/inputs/operation dulce/lancedb/entity_description.lance/_transactions/5-ec86af9f-b799-4457-b07a-24a3459dd952.txn`
- `docs/examples_notebooks/inputs/operation dulce/lancedb/entity_description.lance/_transactions/6-c2afb84c-4b3a-4ccd-8843-0deaa25bd971.txn`
- `docs/examples_notebooks/inputs/operation dulce/lancedb/entity_description.lance/_transactions/7-6798041f-3283-4b54-8313-54f80e00d338.txn`
- ... 30 more

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

- `packages/graphrag-llm/notebooks/templates/weather_listings.jinja`
- `packages/graphrag-storage/COSMOS_TABLE_PROVIDER_DESIGN.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/__init__.py`
- `tests/conftest.py`
- `tests/fixtures/azure/config.json`
- `tests/fixtures/azure/input/ABOUT.md`
- `tests/fixtures/azure/input/dulce.txt`
- `tests/fixtures/azure/settings.yml`
- `tests/fixtures/min-csv/config.json`
- `tests/fixtures/min-csv/input/ABOUT.md`
- `tests/fixtures/min-csv/input/dulce.csv`
- `tests/fixtures/min-csv/settings.yml`
- `tests/fixtures/text/config.json`
- `tests/fixtures/text/input/ABOUT.md`
- `tests/fixtures/text/input/dulce.txt`
- `tests/fixtures/text/prompts/community_report.txt`
- `tests/fixtures/text/settings.yml`
- `tests/integration/__init__.py`
- `tests/integration/cache/__init__.py`
- `tests/integration/cache/test_factory.py`
- `tests/integration/language_model/__init__.py`
- `tests/integration/language_model/test_factory.py`
- `tests/integration/language_model/test_rate_limiter.py`
- `tests/integration/language_model/test_retries.py`
- `tests/integration/language_model/utils.py`
- `tests/integration/logging/__init__.py`
- `tests/integration/logging/test_factory.py`
- `tests/integration/logging/test_standard_logging.py`
- `tests/integration/storage/__init__.py`
- `tests/integration/storage/test_blob_storage.py`
- `tests/integration/storage/test_cosmosdb_storage.py`
- `tests/integration/storage/test_factory.py`
- `tests/integration/storage/test_file_storage.py`
- `tests/integration/vector_stores/__init__.py`
- `tests/integration/vector_stores/test_azure_ai_search.py`
- `tests/integration/vector_stores/test_cosmosdb.py`
- `tests/integration/vector_stores/test_factory.py`
- `tests/integration/vector_stores/test_lancedb.py`
- `tests/notebook/__init__.py`
- `tests/notebook/test_notebooks.py`
- `tests/smoke/__init__.py`
- `tests/smoke/test_fixtures.py`
- `tests/unit/__init__.py`
- `tests/unit/chunking/__init__.py`
- `tests/unit/chunking/test_chunker.py`
- `tests/unit/chunking/test_prepend_metadata.py`
- `tests/unit/config/__init__.py`
- `tests/unit/config/fixtures/minimal_config/settings.yaml`
- `tests/unit/config/fixtures/minimal_config_missing_env_var/settings.yaml`
- `tests/unit/config/fixtures/timestamp_dirs/20240812-120000/empty.txt`
- `tests/unit/config/prompt-a.txt`
- `tests/unit/config/prompt-b.txt`
- `tests/unit/config/prompt-c.txt`
- `tests/unit/config/prompt-d.txt`
- `tests/unit/config/test_config.py`
- `tests/unit/config/test_metrics_config.py`
- `tests/unit/config/test_model_config.py`
- `tests/unit/config/test_rate_limit_config.py`
- `tests/unit/config/test_retry_config.py`
- `tests/unit/config/test_template_engine_config.py`
- `tests/unit/config/test_tokenizer_config.py`
- `tests/unit/config/utils.py`
- `tests/unit/graphrag_factory/__init__.py`
- `tests/unit/graphrag_factory/test_factory.py`
- `tests/unit/graphs/__init__.py`
- `tests/unit/graphs/fixtures/graph.json`
- `tests/unit/graphs/nx_stable_lcc.py`
- `tests/unit/graphs/test_compute_degree.py`
- `tests/unit/graphs/test_connected_components.py`
- `tests/unit/graphs/test_modularity.py`
- `tests/unit/graphs/test_stable_lcc.py`
- `tests/unit/hasher/__init__.py`
- `tests/unit/hasher/test_hasher.py`
- `tests/unit/indexing/__init__.py`
- `tests/unit/indexing/cache/__init__.py`
- `tests/unit/indexing/cache/test_file_pipeline_cache.py`
- `tests/unit/indexing/graph/__init__.py`
- `tests/unit/indexing/graph/extractors/__init__.py`
- `tests/unit/indexing/graph/extractors/community_reports/__init__.py`
- `tests/unit/indexing/graph/extractors/community_reports/test_sort_context.py`
- `tests/unit/indexing/graph/utils/__init__.py`
- `tests/unit/indexing/graph/utils/test_stable_lcc.py`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/gh-pages.yml`
- `.github/workflows/issues-autoresolve.yml`
- `.github/workflows/python-checks.yml`
- `.github/workflows/python-integration-tests.yml`
- `.github/workflows/python-notebook-tests.yml`
- `.github/workflows/python-publish.yml`
- `.github/workflows/python-smoke-tests.yml`
- `.github/workflows/python-unit-tests.yml`
- `.github/workflows/semver.yml`
- `.github/workflows/spellcheck.yml`
- `unified-search-app/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 570 |
| .md | 56 |
| .json | 53 |
| .ipynb | 40 |
| .txt | 21 |
| .yml | 20 |
| .parquet | 18 |
| .manifest | 16 |
| .txn | 16 |
| .png | 12 |
| .toml | 11 |
| .yaml | 11 |
| .csv | 10 |
| .lance | 8 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `packages/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `packages/graphrag/ 내부 책임 분리`
- `packages/graphrag-llm/notebooks/templates/weather_listings.jinja 스펙/명령 의미`
- `packages/graphrag-storage/COSMOS_TABLE_PROVIDER_DESIGN.md 스펙/명령 의미`
- `packages/graphrag-cache/pyproject.toml 실행 스크립트와 패키지 경계`
- `packages/graphrag-chunking/pyproject.toml 실행 스크립트와 패키지 경계`
- `packages/graphrag-common/pyproject.toml 실행 스크립트와 패키지 경계`
- `packages/graphrag-input/pyproject.toml 실행 스크립트와 패키지 경계`
- `packages/graphrag-llm/pyproject.toml 실행 스크립트와 패키지 경계`

