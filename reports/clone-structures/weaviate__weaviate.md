# weaviate/weaviate 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/weaviate__weaviate |
| remote | https://github.com/weaviate/weaviate |
| HEAD | 24163af (2026-06-12) Merge pull request #10657 from weaviate/more_alloc_optimization |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 4747 |
| dirs | 807 |
| stack | Python, Go |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Weaviate <img alt='Weaviate logo' src='https://weaviate.io/img/site/weaviate-logo-light.png' width='148' align='right' />`, `Installation`, `Getting started`, `Connect to Weaviate`, `Create a collection`, `Insert objects and generate embeddings`, `Perform semantic search`, `Client libraries and APIs`, `Weaviate features`, `Useful resources`, `AI Agent Skills`, `Demo projects & recipes`, `Blog posts`, `Integrations`, `Contributing`, `License`

> Weaviate <img alt='Weaviate logo' src='https //weaviate.io/img/site/weaviate logo light.png' width='148' align='right' / Weaviate is an open source, cloud native vector database that stores both objects and vectors, enabling semantic search at scale. It combines vector similarity search with keyword filtering, retrieval augmented generation (RAG), and reranking in a single query interface. Common use cases include RAG systems, semantic and image search, recommendation engines, chatbots, and content classification. Weaviate supports two approaches to store vectors automatic vectorization at import using integrated models (OpenAI, Cohere, HuggingFace, and others) or direct import of pre computed vector embeddings. Production deployments benefit from built in multi tenancy, replication, RBAC authorization, and many other features. To get started quickly, have a look at one of these tutorial

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .claude | dir |
| .codeclimate.yml | file |
| .dockerignore | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .golangci.yml | file |
| .goreleaser.yaml | file |
| .mockery.yaml | file |
| .pre-commit-config.yaml | file |
| .protolint.yaml | file |
| adapters | dir |
| ci | dir |
| CITATION.cff | file |
| CLAUDE.md | file |
| client | dir |
| cluster | dir |
| cmd | dir |
| CODE_OF_CONDUCT.md | file |
| codecov.yml | file |
| CONTRIBUTING.md | file |
| deprecations | dir |
| docker-compose | dir |
| docker-compose-auth-test.yml | file |
| docker-compose-debug.yml | file |
| docker-compose-mcp-test.yml | file |
| docker-compose-namespaces-test.yml | file |
| docker-compose-raft | dir |
| docker-compose-readonly-recovery-test.yml | file |
| docker-compose-test.yml | file |
| docker-compose.yml | file |
| Dockerfile | file |
| docs | dir |
| entities | dir |
| go.mod | file |
| go.sum | file |
| grpc | dir |
| LICENSE | file |
| Makefile | file |
| modules | dir |
| openapi-specs | dir |
| pyproject.toml | file |
| pytest.ini | file |
| README.md | file |
| test | dir |
| tools | dir |
| usecases | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| adapters/ | 1734 |
| modules/ | 742 |
| test/ | 679 |
| usecases/ | 629 |
| entities/ | 332 |
| client/ | 248 |
| cluster/ | 193 |
| tools/ | 88 |
| grpc/ | 33 |
| (root) | 29 |
| .github/ | 20 |
| deprecations/ | 4 |
| docs/ | 4 |
| .claude/ | 3 |
| ci/ | 3 |
| docker-compose-raft/ | 2 |
| openapi-specs/ | 2 |
| cmd/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| cmd/ | 1 | preferred |
| client/ | 248 | preferred |
| docs/ | 4 | preferred |
| test/ | 679 | preferred |
| tools/ | 88 | preferred |
| adapters/ | 1734 | large |
| adapters/repos/ | 988 | large |
| adapters/repos/db/ | 980 | large |
| modules/ | 742 | large |
| adapters/handlers/ | 732 | large |
| usecases/ | 629 | large |
| adapters/handlers/rest/ | 596 | large |
| entities/ | 332 | large |
| test/acceptance/ | 310 | large |
| cluster/ | 193 | large |
| usecases/modulecomponents/ | 153 | large |
| entities/models/ | 120 | large |
| test/modules/ | 120 | large |
| test/acceptance_with_go_client/ | 84 | large |
| adapters/handlers/graphql/ | 70 | large |
| tools/dev/ | 70 | large |
| usecases/backup/ | 66 | large |
| usecases/modulecomponents/arguments/ | 59 | large |
| test/helper/ | 56 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Dockerfile`
- `docker-compose.yml`
- `go.mod`
- `pyproject.toml`
- `test/acceptance_with_go_client/go.mod`
- `test/acceptance_with_python/requirements.txt`
- `test/benchmark_bm25/go.mod`
- `test/docker/mockoidc/Dockerfile`
- `test/docker/mockoidchelper/Dockerfile`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml |  | false | false | false | false |

### go.mod

| 경로 | module | go |
| --- | --- | --- |
| go.mod | github.com/weaviate/weaviate | 1.26 |
| test/acceptance_with_go_client/go.mod | acceptance_tests_with_client | 1.26 |
| test/benchmark_bm25/go.mod | github.com/weaviate/weaviate/test/benchmark_bm25 | 1.26 |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docker-compose/Readme.md`
- `docs/metrics.md`
- `docs/proposals/deferred_reindex_simplifications.md`
- `docs/runtime-reindex.md`
- `docs/usage_limits.md`
- `test/README.md`
- `test/benchmark/remote/README.md`
- `tools/dev/README.md`
- `tools/dev/bench/demo_indexing_mistakes_ui/README.md`
- `tools/dev/generate_release_notes/README.md`
- `tools/telemetry-dashboard/README.md`
- `usecases/auth/authorization/docs/auth_calls.md`
- `usecases/auth/authorization/docs/generator.go`

### 에이전트 지침 후보

- `.claude/scripts/monitor_docker.sh`
- `.claude/scripts/monitor_pr.sh`
- `.claude/settings.json`
- `CLAUDE.md`
- `adapters/handlers/mcp/auth/auth.go`
- `adapters/handlers/mcp/create/create.go`
- `adapters/handlers/mcp/create/objects_upsert.go`
- `adapters/handlers/mcp/create/schema.go`
- `adapters/handlers/mcp/internal/config.go`
- `adapters/handlers/mcp/internal/config_test.go`
- `adapters/handlers/mcp/metrics/metrics.go`
- `adapters/handlers/mcp/metrics/metrics_test.go`
- `adapters/handlers/mcp/read/collections.go`
- `adapters/handlers/mcp/read/collections_test.go`
- `adapters/handlers/mcp/read/reader.go`
- `adapters/handlers/mcp/read/schema.go`
- `adapters/handlers/mcp/read/tenants.go`
- `adapters/handlers/mcp/read/tenants_test.go`
- `adapters/handlers/mcp/search/hybrid.go`
- `adapters/handlers/mcp/search/hybrid_test.go`
- `adapters/handlers/mcp/search/schema.go`
- `adapters/handlers/mcp/search/search.go`
- `adapters/handlers/mcp/server.go`
- `adapters/handlers/rest/handlers_mcp.go`
- `adapters/handlers/rest/operations/mcp/mcp_delete.go`
- `adapters/handlers/rest/operations/mcp/mcp_delete_parameters.go`
- `adapters/handlers/rest/operations/mcp/mcp_delete_responses.go`
- `adapters/handlers/rest/operations/mcp/mcp_delete_urlbuilder.go`
- `adapters/handlers/rest/operations/mcp/mcp_get.go`
- `adapters/handlers/rest/operations/mcp/mcp_get_parameters.go`
- `adapters/handlers/rest/operations/mcp/mcp_get_responses.go`
- `adapters/handlers/rest/operations/mcp/mcp_get_urlbuilder.go`
- `adapters/handlers/rest/operations/mcp/mcp_post.go`
- `adapters/handlers/rest/operations/mcp/mcp_post_parameters.go`
- `adapters/handlers/rest/operations/mcp/mcp_post_responses.go`
- `adapters/handlers/rest/operations/mcp/mcp_post_urlbuilder.go`
- `client/mcp/mcp_client.go`
- `client/mcp/mcp_delete_parameters.go`
- `client/mcp/mcp_delete_responses.go`
- `client/mcp/mcp_get_parameters.go`
- `client/mcp/mcp_get_responses.go`
- `client/mcp/mcp_post_parameters.go`
- `client/mcp/mcp_post_responses.go`
- `docker-compose-mcp-test.yml`
- `test/acceptance/authz/mcp_runtime_toggle_test.go`
- `test/acceptance/authz/mcp_test.go`
- `test/acceptance/mcp/get_config_test.go`
- `test/acceptance/mcp/helpers_test.go`
- `test/acceptance/mcp/objects_upsert_test.go`
- `test/acceptance/mcp/query_hybrid_test.go`
- `test/acceptance/mcp/tools_list_test.go`
- `test/acceptance/namespace/mcp_test.go`
- `test/helper/mcp.go`
- `tools/dev/config.mcp.json`
- `tools/dev/config.mcp.yaml`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `adapters/handlers/graphql/test/helper/mock_resolver.go`
- `adapters/handlers/graphql/test/helper/schema_fixtures.go`
- `adapters/handlers/graphql/test/helper/thunks.go`
- `test/README.md`
- `test/__init__.py`
- `test/acceptance/actions/add_test.go`
- `test/acceptance/actions/delete_test.go`
- `test/acceptance/actions/individual_refs_test.go`
- `test/acceptance/actions/network_refs_test.go`
- `test/acceptance/actions/object_test.go`
- `test/acceptance/actions/setup_test.go`
- `test/acceptance/actions/update_test.go`
- `test/acceptance/aliases/aliases_api_backup_test.go`
- `test/acceptance/aliases/aliases_api_grpc_test.go`
- `test/acceptance/aliases/aliases_api_test.go`
- `test/acceptance/aliases/aliases_test.go`
- `test/acceptance/aliases/rbac_alias_permissions_test.go`
- `test/acceptance/alter_schema/alter_schema_test.go`
- `test/acceptance/alter_schema/delete_property_index_empty_test.go`
- `test/acceptance/alter_schema/delete_property_index_mt_test.go`
- `test/acceptance/alter_schema/delete_property_index_test.go`
- `test/acceptance/alter_schema/drop_vector_index_mt_test.go`
- `test/acceptance/alter_schema/drop_vector_index_reject_test.go`
- `test/acceptance/alter_schema/drop_vector_index_test.go`
- `test/acceptance/alter_schema/properties_helpers_test.go`
- `test/acceptance/alter_schema/update_after_drop_vector_index_test.go`
- `test/acceptance/authn/dynamic_users_restore_test.go`
- `test/acceptance/authn/dynamic_users_test.go`
- `test/acceptance/authn/helper.go`
- `test/acceptance/authn/own_info_test.go`
- `test/acceptance/authz/adminlist_test.go`
- `test/acceptance/authz/aliases_test.go`
- `test/acceptance/authz/alter_schema_operations_test.go`
- `test/acceptance/authz/authz_deprecated_test.go`
- `test/acceptance/authz/auto_tenancy_test.go`
- `test/acceptance/authz/autoschema_test.go`
- `test/acceptance/authz/backup_restore_test.go`
- `test/acceptance/authz/backups_test.go`
- `test/acceptance/authz/batch_delete_test.go`
- `test/acceptance/authz/batch_objs_test.go`
- `test/acceptance/authz/batch_refs_test.go`
- `test/acceptance/authz/classifications_test.go`
- `test/acceptance/authz/export_test.go`
- `test/acceptance/authz/gql_batch_test.go`
- `test/acceptance/authz/gql_refs_test.go`
- `test/acceptance/authz/gql_simple_test.go`
- `test/acceptance/authz/groups_test.go`
- `test/acceptance/authz/grpc_aggregate_test.go`
- `test/acceptance/authz/grpc_search_test.go`
- `test/acceptance/authz/helper.go`
- `test/acceptance/authz/mcp_runtime_toggle_test.go`
- `test/acceptance/authz/mcp_test.go`
- `test/acceptance/authz/namespaces_oidc_test.go`
- `test/acceptance/authz/namespaces_test.go`
- `test/acceptance/authz/no_collection_name_test.go`
- `test/acceptance/authz/nodes_test.go`
- `test/acceptance/authz/objects_test.go`
- `test/acceptance/authz/oidc_test.go`
- `test/acceptance/authz/permissions_test.go`
- `test/acceptance/authz/rbac_auto_admin_permissions_test.go`
- `test/acceptance/authz/rbac_auto_no_permissions_test.go`
- `test/acceptance/authz/rbac_auto_viewer_permissions_test.go`
- `test/acceptance/authz/rbac_viewer_test.go`
- `test/acceptance/authz/references_test.go`
- `test/acceptance/authz/replication_replicate_test.go`
- `test/acceptance/authz/roles_test.go`
- `test/acceptance/authz/setup_test.go`
- `test/acceptance/authz/shared_test.go`
- `test/acceptance/authz/swagger_helper.go`
- `test/acceptance/authz/tenants_test.go`
- `test/acceptance/authz/users_test.go`
- `test/acceptance/batch_request_endpoints/actionscreate_test.go`
- `test/acceptance/batch_request_endpoints/batch_delete_test.go`
- `test/acceptance/batch_request_endpoints/batch_journey_test.go`
- `test/acceptance/batch_request_endpoints/graphql_helper_for_test.go`
- `test/acceptance/batch_request_endpoints/graphql_test.go`
- `test/acceptance/batch_request_endpoints/setup_test.go`
- `test/acceptance/batch_request_endpoints/thingscreate_test.go`
- `test/acceptance/boost/boost_test.go`
- `test/acceptance/classifications/contextual_classification_test.go`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/cleanup.yaml`
- `.github/workflows/create-cross-functional-issues.yml`
- `.github/workflows/find-duplicates.yaml`
- `.github/workflows/licence_updater.yaml`
- `.github/workflows/linter.yml`
- `.github/workflows/pr-security-lint.yaml`
- `.github/workflows/pull_requests.yaml`
- `.github/workflows/release-slack-notify.yaml`
- `.github/workflows/release.yaml`
- `.github/workflows/vectorize-issues.yaml`
- `Dockerfile`
- `docker-compose-auth-test.yml`
- `docker-compose-debug.yml`
- `docker-compose-mcp-test.yml`
- `docker-compose-namespaces-test.yml`
- `docker-compose-raft/docker-compose-raft.yml.j2`
- `docker-compose-raft/raft_cluster.sh`
- `docker-compose-readonly-recovery-test.yml`
- `docker-compose-test.yml`
- `docker-compose.yml`
- `docker-compose/Readme.md`
- `test/docker/mockoidc/Dockerfile`
- `test/docker/mockoidchelper/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .go | 4375 |
| .py | 53 |
| .sh | 43 |
| .json | 32 |
| .yaml | 27 |
| .yml | 26 |
| .s | 25 |
| .c | 21 |
| .db | 21 |
| .md | 18 |
| .proto | 17 |
| .bloom | 16 |
| .gitignore | 8 |
| .wal | 8 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `cmd/ 내부 책임 분리`
- `client/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `test/ 내부 책임 분리`
- `tools/ 내부 책임 분리`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `docker-compose.yml 실행 스크립트와 패키지 경계`
- `go.mod 실행 스크립트와 패키지 경계`
- `pyproject.toml 실행 스크립트와 패키지 경계`
- `test/acceptance_with_go_client/go.mod 실행 스크립트와 패키지 경계`

