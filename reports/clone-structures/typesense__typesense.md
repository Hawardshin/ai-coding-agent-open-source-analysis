# typesense/typesense 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/typesense__typesense |
| remote | https://github.com/typesense/typesense |
| HEAD | c5e2e5b (2026-06-10) Aggregate nested references correctly. (#2951) |
| branch | v31 |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 484 |
| dirs | 47 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Quick Links`, `Features`, `Roadmap`, `Benchmarks`, `Who's using this?`, `Install`, `Quick Start`, `Step-by-step Walk-through`, `API Documentation`, `API Clients`, `Framework Integrations`, `Postman Collection`, `Search UI Components`, `FAQ`, `How does this differ from Elasticsearch?`, `How does this differ from Algolia?`, `Speed is great, but what about the memory footprint?`, `Why the GPL license?`

> <p align="center" <a href="https //typesense.org" <picture <source media="(prefers color scheme dark)" srcset="assets/typesense logo dark.svg" <img src="assets/typesense logo.svg" alt="Typesense" width="600" / </picture </a </p <p align="center" Typesense is a fast, typo tolerant search engine for building delightful search experiences. </p <p align="center" An Open Source Algolia Alternative & <br An Easier to Use ElasticSearch Alternative </p <p align="center" <! <a href="https //circleci.com/gh/typesense/typesense" <img src="https //circleci.com/gh/typesense/typesense.svg?style=shield&circle token=1addd775339738a3d90869ddd8201110d561feaa" </a <a href="https //hub.docker.com/r/typesense/typesense/tags" <img src="https //img.shields.io/docker/pulls/typesense/typesense" </a <a href="https //github.com/typesense" <img src="https //img.shields.io/github/stars/typesense/typesense?label=gith

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .bazelrc | file |
| .bazelversion | file |
| .github | dir |
| .gitignore | file |
| api_tests | dir |
| assets | dir |
| bazel | dir |
| benchmark | dir |
| BUILD | file |
| build.sh | file |
| ci_build_v2.sh | file |
| ci_build.sh | file |
| cmake | dir |
| CMakeLists.txt | file |
| CONTRIBUTING.md | file |
| debian-pkg | dir |
| DESIGN.md | file |
| docker | dir |
| docker-build.sh | file |
| include | dir |
| LICENSE.txt | file |
| publish_release.sh | file |
| README.md | file |
| recipes.jsonl | file |
| SECURITY.md | file |
| SHOWCASE.md | file |
| src | dir |
| test | dir |
| tests | dir |
| TODO.md | file |
| tsan.supp | file |
| WORKSPACE | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| include/ | 106 |
| test/ | 85 |
| src/ | 77 |
| benchmark/ | 54 |
| bazel/ | 51 |
| api_tests/ | 25 |
| (root) | 20 |
| cmake/ | 20 |
| docker/ | 13 |
| tests/ | 13 |
| debian-pkg/ | 9 |
| .github/ | 6 |
| assets/ | 5 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 77 | preferred |
| tests/ | 13 | preferred |
| test/ | 85 | preferred |
| include/ | 106 | large |
| benchmark/ | 54 | large |
| bazel/ | 51 | large |
| benchmark/src/ | 26 | large |
| api_tests/ | 25 | large |
| cmake/ | 20 | large |
| api_tests/tests/ | 14 | large |
| docker/ | 13 | large |
| benchmark/test/ | 11 | large |
| benchmark/src/utils/ | 10 | large |
| benchmark/src/services/ | 9 | large |
| debian-pkg/ | 9 | large |
| include/tsl/ | 7 | large |
| tests/src/ | 7 | large |
| .github/ | 6 | large |
| debian-pkg/typesense-server/ | 6 | large |
| api_tests/src/ | 5 | large |
| assets/ | 5 | large |
| cmake/Modules/ | 5 | large |
| .github/ISSUE_TEMPLATE/ | 4 | large |
| bazel/leveldb/ | 4 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `api_tests/bun.lock`
- `api_tests/package.json`
- `api_tests/tsconfig.json`
- `benchmark/Dockerfile`
- `benchmark/docker-compose.yml`
- `benchmark/package.json`
- `benchmark/pnpm-lock.yaml`
- `benchmark/tsconfig.json`
- `tests/package.json`
- `tests/pnpm-lock.yaml`
- `tests/tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| api_tests/package.json | api_tests |  | api_tests, zod |
| benchmark/package.json | ts-cli | dev, build, test, format | @influxdata/influxdb3-client, @t3-oss/env-core, @types/asciichart, asciichart, chalk, commander, cosmiconfig, docker-compose, execa, fs-extra, gunzip-maybe, influx, inquirer, k6 |
| tests/package.json | tests | test | @t3-oss/env-core, execa, neverthrow, ora, typesense, zod |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `api_tests/README.md`
- `benchmark/README.md`

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

- `DESIGN.md`
- `benchmark/src/commands/benchmark.ts`
- `benchmark/src/commands/install.ts`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `api_tests/tests/analytics.test.ts`
- `api_tests/tests/collections.test.ts`
- `api_tests/tests/conversation.test.ts`
- `api_tests/tests/curation_sets.test.ts`
- `api_tests/tests/documents.test.ts`
- `api_tests/tests/embedding.test.ts`
- `api_tests/tests/health.test.ts`
- `api_tests/tests/migrate.test.ts`
- `api_tests/tests/nested_curly_filter.test.ts`
- `api_tests/tests/reference_cascade_delete_concurrent.test.ts`
- `api_tests/tests/reference_cluster_follower_node_restart.test.ts`
- `api_tests/tests/ssl_verification.test.ts`
- `api_tests/tests/synonym_sets.test.ts`
- `api_tests/tests/tei-integration.test.ts`
- `benchmark/test/conversation-rotation.test.ts`
- `benchmark/test/entrypoint.test.ts`
- `benchmark/test/env.test.ts`
- `benchmark/test/error.test.ts`
- `benchmark/test/logger.test.ts`
- `benchmark/test/openai-embedding.test.ts`
- `benchmark/test/package-info.test.ts`
- `benchmark/test/setup.ts`
- `benchmark/test/snapshot.test.ts`
- `benchmark/test/start-restart.test.ts`
- `benchmark/test/stringifiable.test.ts`
- `test/adi_tree_test.cpp`
- `test/analytics_manager_test.cpp`
- `test/api_acl_test.cpp`
- `test/app_metrics_test.cpp`
- `test/archive_utils_test.cpp`
- `test/array_test.cpp`
- `test/array_text_documents.jsonl`
- `test/array_utils_test.cpp`
- `test/art_test.cpp`
- `test/auth_manager_test.cpp`
- `test/bad_config.ini`
- `test/batched_indexer_test.cpp`
- `test/bool_documents.jsonl`
- `test/collection_all_fields_test.cpp`
- `test/collection_curation_sets_test.cpp`
- `test/collection_curation_test.cpp`
- `test/collection_faceting_test.cpp`
- `test/collection_filtering_test.cpp`
- `test/collection_grouping_test.cpp`
- `test/collection_infix_search_test.cpp`
- `test/collection_join_test.cpp`
- `test/collection_locale_test.cpp`
- `test/collection_manager_test.cpp`
- `test/collection_nested_fields_test.cpp`
- `test/collection_operations_test.cpp`
- `test/collection_optimized_faceting_test.cpp`
- `test/collection_schema_change_test.cpp`
- `test/collection_sorting_test.cpp`
- `test/collection_specific_more_test.cpp`
- `test/collection_specific_test.cpp`
- `test/collection_synonyms_test.cpp`
- `test/collection_test.cpp`
- `test/collection_vector_search_test.cpp`
- `test/conversation_test.cpp`
- `test/core_api_utils_test.cpp`
- `test/curation_index_manager_test.cpp`
- `test/cvt_test.cpp`
- `test/documents.jsonl`
- `test/facet_index_test.cpp`
- `test/filter_test.cpp`
- `test/float_documents.jsonl`
- `test/geo_filtering_old_test.cpp`
- `test/geo_filtering_test.cpp`
- `test/group_documents.jsonl`
- `test/id_list_test.cpp`
- `test/ids.txt`
- `test/ill.txt`
- `test/index_test.cpp`
- `test/large_text_field.jsonl`
- `test/main.cpp`
- `test/match_score_test.cpp`
- `test/multi_field_documents.jsonl`
- `test/natural_language_search_model_manager_test.cpp`
- `test/natural_language_search_model_test.cpp`
- `test/num_tree_test.cpp`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/benchmark-testing.yml`
- `.github/workflows/tests.yml`
- `benchmark/Dockerfile`
- `benchmark/docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .cpp | 142 |
| .h | 103 |
| .ts | 65 |
| .build | 24 |
| .cmake | 18 |
| .patch | 15 |
| .md | 11 |
| .txt | 11 |
| .dockerfile | 10 |
| .jsonl | 10 |
| build | 10 |
| .sh | 8 |
| .json | 7 |
| .hpp | 5 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `test/ 내부 책임 분리`
- `include/ 내부 책임 분리`
- `benchmark/ 내부 책임 분리`
- `DESIGN.md 스펙/명령 의미`
- `benchmark/src/commands/benchmark.ts 스펙/명령 의미`
- `benchmark/src/commands/install.ts 스펙/명령 의미`
- `api_tests/bun.lock 실행 스크립트와 패키지 경계`
- `api_tests/package.json 실행 스크립트와 패키지 경계`
- `api_tests/tsconfig.json 실행 스크립트와 패키지 경계`
- `benchmark/Dockerfile 실행 스크립트와 패키지 경계`
- `benchmark/docker-compose.yml 실행 스크립트와 패키지 경계`

