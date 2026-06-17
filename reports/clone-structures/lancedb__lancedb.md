# lancedb/lancedb 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/lancedb__lancedb |
| remote | https://github.com/lancedb/lancedb |
| HEAD | dfbe5be (2026-06-11) chore: update lance dependency to v8.0.0-beta.12 (#3538) |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 586 |
| dirs | 114 |
| stack | Node/TypeScript/JavaScript, Python, Rust |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `**The Multimodal AI Lakehouse**`, `**Demo: Multimodal Search by Keyword, Vector or with SQL**`, `**Star LanceDB to get updates!**`, `**Key Features**:`, `**Products**:`, `**Ecosystem**:`, `**How to Install**:`, `**Join Us and Contribute**`, `**Contributors**`, `**Stay in Touch With Us**`

> <a href="https //cloud.lancedb.com" target=" blank" <img src="https //github.com/user attachments/assets/92dad0a2 2a37 4ce1 b783 0d1b4f30a00c" alt="LanceDB Cloud Public Beta" width="100%" style="max width 100%;" </a <div align="center" <img src="docs/src/assets/lancedb.png" alt="LanceDB" width="50%" The Multimodal AI Lakehouse How to Install ✦ Detailed Documentation ✦ Tutorials and Recipes ✦ Contributors The ultimate multimodal data platform for AI/ML applications. LanceDB is designed for fast, scalable, and production ready vector search. It is built on top of the Lance columnar format. You can store, index, and search over petabytes of multimodal data and vectors with ease. LanceDB is a central location where developers can build, train and analyze their AI workloads. </div <br Demo Multimodal Search by Keyword, Vector or with SQL <img max width="750px" alt="LanceDB Multimodal Search" 

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .agents | dir |
| .bumpversion.toml | file |
| .cargo | dir |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| about.hbs | file |
| about.toml | file |
| AGENTS.md | file |
| Cargo.lock | file |
| Cargo.toml | file |
| ci | dir |
| CLAUDE.md | other |
| CONTRIBUTING.md | file |
| deny.toml | file |
| docker-compose.yml | file |
| dockerfiles | dir |
| docs | dir |
| java | dir |
| LICENSE | file |
| Makefile | file |
| nodejs | dir |
| pyright_report.csv | file |
| python | dir |
| README.md | file |
| release_process.md | file |
| REVIEW.md | file |
| rust | dir |
| RUST_THIRD_PARTY_LICENSES.html | file |
| rust-toolchain.toml | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| docs/ | 178 |
| python/ | 143 |
| nodejs/ | 100 |
| rust/ | 85 |
| .github/ | 29 |
| (root) | 19 |
| ci/ | 15 |
| java/ | 13 |
| .agents/ | 2 |
| .cargo/ | 1 |
| dockerfiles/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 178 | preferred |
| docs/src/ | 170 | large |
| python/ | 143 | large |
| docs/src/js/ | 127 | large |
| python/python/ | 113 | large |
| nodejs/ | 100 | large |
| rust/ | 85 | large |
| rust/lancedb/ | 84 | large |
| rust/lancedb/src/ | 71 | large |
| python/python/lancedb/ | 65 | large |
| python/python/tests/ | 48 | large |
| docs/src/assets/ | 32 | large |
| .github/ | 29 | large |
| .github/workflows/ | 20 | large |
| nodejs/lancedb/ | 19 | large |
| nodejs/examples/ | 17 | large |
| nodejs/__test__/ | 16 | large |
| ci/ | 15 | large |
| nodejs/src/ | 15 | large |
| python/src/ | 15 | large |
| nodejs/npm/ | 14 | large |
| java/ | 13 | large |
| rust/lancedb/examples/ | 7 | large |
| .github/ISSUE_TEMPLATE/ | 5 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Cargo.toml`
- `docker-compose.yml`
- `dockerfiles/Dockerfile`
- `docs/package.json`
- `docs/requirements.txt`
- `docs/tsconfig.json`
- `nodejs/Cargo.toml`
- `nodejs/__test__/tsconfig.json`
- `nodejs/examples/package.json`
- `nodejs/examples/pnpm-lock.yaml`
- `nodejs/examples/pnpm-workspace.yaml`
- `nodejs/examples/tsconfig.json`
- `nodejs/npm/darwin-arm64/package.json`
- `nodejs/npm/linux-arm64-gnu/package.json`
- `nodejs/npm/linux-arm64-musl/package.json`
- `nodejs/npm/linux-x64-gnu/package.json`
- `nodejs/npm/linux-x64-musl/package.json`
- `nodejs/npm/win32-arm64-msvc/package.json`
- `nodejs/npm/win32-x64-msvc/package.json`
- `nodejs/package.json`
- `nodejs/pnpm-lock.yaml`
- `nodejs/pnpm-workspace.yaml`
- `nodejs/tsconfig.json`
- `python/Cargo.toml`
- `python/pyproject.toml`
- `python/uv.lock`
- `rust/lancedb/Cargo.toml`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| docs/package.json | lancedb-docs-test | build, example, test | apache-arrow, vectordb |
| nodejs/examples/package.json | examples | //1, //2, //3, test, lint, lint-ci, lint-fix, format | @huggingface/transformers, @lancedb/lancedb, openai, sharp |
| nodejs/npm/darwin-arm64/package.json | @lancedb/lancedb-darwin-arm64 |  |  |
| nodejs/npm/linux-arm64-gnu/package.json | @lancedb/lancedb-linux-arm64-gnu |  |  |
| nodejs/npm/linux-arm64-musl/package.json | @lancedb/lancedb-linux-arm64-musl |  |  |
| nodejs/npm/linux-x64-gnu/package.json | @lancedb/lancedb-linux-x64-gnu |  |  |
| nodejs/npm/linux-x64-musl/package.json | @lancedb/lancedb-linux-x64-musl |  |  |
| nodejs/npm/win32-arm64-msvc/package.json | @lancedb/lancedb-win32-arm64-msvc |  |  |
| nodejs/npm/win32-x64-msvc/package.json | @lancedb/lancedb-win32-x64-msvc |  |  |
| nodejs/package.json | @lancedb/lancedb | artifacts, build:debug, postbuild:debug, build:release, build, build-release, tsc, posttsc, lint-ci, docs, postdocs, lint, lint-fix, prepublishOnly, test, integration | reflect-metadata |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| python/pyproject.toml | lancedb | false | false | true | true |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| Cargo.toml |  | true | "rust/lancedb", "nodejs", "python" |
| nodejs/Cargo.toml | lancedb-nodejs | false |  |
| python/Cargo.toml | lancedb-python | false |  |
| rust/lancedb/Cargo.toml | lancedb | false |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.agents/skills/README.md`
- `CONTRIBUTING.md`
- `README.md`
- `docs/README.md`
- `docs/mkdocs.yml`
- `docs/openapi.yml`
- `docs/package-lock.json`
- `docs/package.json`
- `docs/requirements.txt`
- `docs/robots.txt`
- `docs/src/assets/colab.svg`
- `docs/src/assets/dog_clip_output.png`
- `docs/src/assets/ecosystem-illustration.png`
- `docs/src/assets/embedding_intro.png`
- `docs/src/assets/embeddings_api.png`
- `docs/src/assets/favicon.ico`
- `docs/src/assets/ghost.svg`
- `docs/src/assets/github.svg`
- `docs/src/assets/hero-header.png`
- `docs/src/assets/ivf_pq.png`
- `docs/src/assets/ivfpq_ivf_desc.webp`
- `docs/src/assets/ivfpq_pq_desc.png`
- `docs/src/assets/ivfpq_query_vector.webp`
- `docs/src/assets/knn_search.png`
- `docs/src/assets/lancedb.png`
- `docs/src/assets/lancedb_and_lance.png`
- `docs/src/assets/lancedb_cloud.png`
- `docs/src/assets/lancedb_embedded_explanation.png`
- `docs/src/assets/lancedb_local_data_explanation.png`
- `docs/src/assets/lancedb_oss_and_cloud.png`
- `docs/src/assets/lancedb_storage_tradeoffs.png`
- `docs/src/assets/langchain.png`
- `docs/src/assets/llama-index.jpg`
- `docs/src/assets/logo.png`
- `docs/src/assets/maxsim.png`
- `docs/src/assets/open_hf_space.svg`
- `docs/src/assets/prompttools.jpeg`
- `docs/src/assets/python.svg`
- `docs/src/assets/recall-vs-latency.webp`
- `docs/src/assets/vector-db-basics.png`
- `docs/src/assets/vercel-template.gif`
- `docs/src/assets/voxel.gif`
- `docs/src/embeddings/available_embedding_models/multimodal_embedding_functions/voyageai_multimodal_embedding.md`
- `docs/src/embeddings/available_embedding_models/text_embedding_functions/voyageai_embedding.md`
- `docs/src/extra_js/reo.js`
- `docs/src/index.md`
- `docs/src/java/java.md`
- `docs/src/js/README.md`
- `docs/src/js/_media/CONTRIBUTING.md`
- `docs/src/js/classes/BooleanQuery.md`
- ... 30 more

### 에이전트 지침 후보

- `.agents/skills/README.md`
- `.agents/skills/lancedb-update-lance-dependency/SKILL.md`
- `AGENTS.md`
- `nodejs/AGENTS.md`
- `python/AGENTS.md`

### 스펙/템플릿/명령/스킬 후보

- `.agents/skills/README.md`
- `.agents/skills/lancedb-update-lance-dependency/SKILL.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `java/lancedb-core/src/test/java/com/lancedb/LanceDbNamespaceClientBuilderTest.java`
- `java/lancedb-core/src/test/resources/log4j2.xml`
- `nodejs/__test__/arrow.test.ts`
- `nodejs/__test__/connection.test.ts`
- `nodejs/__test__/embedding.test.ts`
- `nodejs/__test__/permutation.test.ts`
- `nodejs/__test__/query.test.ts`
- `nodejs/__test__/registry.test.ts`
- `nodejs/__test__/remote.test.ts`
- `nodejs/__test__/rerankers.test.ts`
- `nodejs/__test__/s3_integration.test.ts`
- `nodejs/__test__/sanitize.test.ts`
- `nodejs/__test__/scannable.test.ts`
- `nodejs/__test__/session.test.ts`
- `nodejs/__test__/table.test.ts`
- `nodejs/__test__/util.test.ts`
- `nodejs/__test__/vector_types.test.ts`
- `nodejs/examples/ann_indexes.test.ts`
- `nodejs/examples/basic.test.ts`
- `nodejs/examples/custom_embedding_function.test.ts`
- `nodejs/examples/embedding.test.ts`
- `nodejs/examples/filtering.test.ts`
- `nodejs/examples/full_text_search.test.ts`
- `nodejs/examples/merge_insert.test.ts`
- `nodejs/examples/search.test.ts`
- `nodejs/examples/sentence-transformers.test.ts`
- `python/python/tests/conftest.py`
- `python/python/tests/docs/test_basic.py`
- `python/python/tests/docs/test_binary_vector.py`
- `python/python/tests/docs/test_distance_range.py`
- `python/python/tests/docs/test_embeddings_optional.py`
- `python/python/tests/docs/test_guide_index.py`
- `python/python/tests/docs/test_guide_tables.py`
- `python/python/tests/docs/test_merge_insert.py`
- `python/python/tests/docs/test_multivector.py`
- `python/python/tests/docs/test_pydantic_integration.py`
- `python/python/tests/docs/test_python.py`
- `python/python/tests/docs/test_search.py`
- `python/python/tests/models/jieba/default/dict.txt`
- `python/python/tests/models/lindera/ipadic/config.yml`
- `python/python/tests/models/lindera/ipadic/main.zip`
- `python/python/tests/test_context.py`
- `python/python/tests/test_db.py`
- `python/python/tests/test_duckdb.py`
- `python/python/tests/test_e2e_remote_db.py`
- `python/python/tests/test_embeddings.py`
- `python/python/tests/test_embeddings_slow.py`
- `python/python/tests/test_errors.py`
- `python/python/tests/test_fts.py`
- `python/python/tests/test_header_provider.py`
- `python/python/tests/test_huggingface.py`
- `python/python/tests/test_hybrid_query.py`
- `python/python/tests/test_index.py`
- `python/python/tests/test_io.py`
- `python/python/tests/test_lsm_write_spec.py`
- `python/python/tests/test_merge_insert_lsm.py`
- `python/python/tests/test_namespace.py`
- `python/python/tests/test_namespace_integration.py`
- `python/python/tests/test_nested_fields.py`
- `python/python/tests/test_permutation.py`
- `python/python/tests/test_primary_key.py`
- `python/python/tests/test_pyarrow.py`
- `python/python/tests/test_pydantic.py`
- `python/python/tests/test_query.py`
- `python/python/tests/test_remote_db.py`
- `python/python/tests/test_rerankers.py`
- `python/python/tests/test_s3.py`
- `python/python/tests/test_s3_bucket_dots.py`
- `python/python/tests/test_session.py`
- `python/python/tests/test_table.py`
- `python/python/tests/test_torch.py`
- `python/python/tests/test_util.py`
- `python/python/tests/test_voyageai_embeddings.py`
- `python/python/tests/utils.py`
- `python/tests/test_expr.py`
- `rust/lancedb/tests/embedding_registry_test.rs`
- `rust/lancedb/tests/embeddings_parallel_test.rs`
- `rust/lancedb/tests/object_store_test.rs`

### CI/Docker 후보

- `.github/workflows/build_linux_wheel/action.yml`
- `.github/workflows/build_mac_wheel/action.yml`
- `.github/workflows/build_windows_wheel/action.yml`
- `.github/workflows/cargo-publish.yml`
- `.github/workflows/codex-fix-ci.yml`
- `.github/workflows/codex-update-lance-dependency.yml`
- `.github/workflows/dev.yml`
- `.github/workflows/docs.yml`
- `.github/workflows/java-publish.yml`
- `.github/workflows/java.yml`
- `.github/workflows/license-header-check.yml`
- `.github/workflows/make-release-commit.yml`
- `.github/workflows/nodejs.yml`
- `.github/workflows/npm-publish.yml`
- `.github/workflows/pypi-publish.yml`
- `.github/workflows/python.yml`
- `.github/workflows/run_tests/action.yml`
- `.github/workflows/rust.yml`
- `.github/workflows/update_package_lock_run.yml`
- `.github/workflows/update_package_lock_run_nodejs.yml`
- `docker-compose.yml`
- `dockerfiles/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .md | 160 |
| .py | 118 |
| .rs | 113 |
| .ts | 44 |
| .yml | 32 |
| .json | 20 |
| .png | 19 |
| .toml | 11 |
| .sh | 7 |
| .txt | 7 |
| .gitignore | 5 |
| .svg | 5 |
| .yaml | 5 |
| makefile | 4 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `docs/src/ 내부 책임 분리`
- `python/ 내부 책임 분리`
- `docs/src/js/ 내부 책임 분리`
- `python/python/ 내부 책임 분리`
- `.agents/skills/README.md 스펙/명령 의미`
- `.agents/skills/lancedb-update-lance-dependency/SKILL.md 스펙/명령 의미`
- `Cargo.toml 실행 스크립트와 패키지 경계`
- `docker-compose.yml 실행 스크립트와 패키지 경계`
- `dockerfiles/Dockerfile 실행 스크립트와 패키지 경계`
- `docs/package.json 실행 스크립트와 패키지 경계`
- `docs/requirements.txt 실행 스크립트와 패키지 경계`

