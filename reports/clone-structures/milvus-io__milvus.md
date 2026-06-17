# milvus-io/milvus 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/milvus-io__milvus |
| remote | https://github.com/milvus-io/milvus |
| HEAD | 14c4cf6 (2026-06-12) enhance: add dynamic StructArray field APIs (#50276) |
| branch | master |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 5254 |
| dirs | 788 |
| stack | Python, Rust, Go |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `What is Milvus?`, `Quickstart`, `Why Milvus`, `Demos and Tutorials`, `Ecosystem and Integration`, `Documentation`, `Contributing`, `Build Milvus from Source Code`, `Clone github repository.`, `Install third-party dependencies.`, `Compile Milvus.`, `Community`, `Reference`

> <img src="https //github.com/user attachments/assets/51e33300 7f85 43ff a05a 3a0317a961f3" alt="milvus banner" <div class="column" align="middle" <a href="https //github.com/milvus io/milvus/blob/master/LICENSE" <img height="20" src="https //img.shields.io/github/license/milvus io/milvus" alt="license"/ </a <a href="https //milvus.io/docs/install standalone docker.md" <img src="https //img.shields.io/docker/pulls/milvusdb/milvus" alt="docker pull count"/ </a <a href="https //milvus.io/docs/roadmap.md" <img src="https //img.shields.io/badge/2025 roadmap orange" alt="fully managed milvus"/ </a <a href="https //cloud.zilliz.com/signup?utm source=partner&utm medium=referral&utm campaign=2024 11 04 web github readme global" <img src="https //img.shields.io/badge/fully managed milvus blue" alt="fully managed milvus"/ </a <a href="https //milvus.io/docs/tutorials overview.md" <img src="https //

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .clang-format | file |
| .clang-tidy | file |
| .clang-tidy-ignore | file |
| .contributors | file |
| .devcontainer.json | file |
| .dockerignore | file |
| .env | file |
| .github | dir |
| .gitignore | file |
| .golangci.yml | file |
| .pre-commit-config.yaml | file |
| AGENTS.md | other |
| build | dir |
| ci | dir |
| CLAUDE.md | file |
| client | dir |
| cmd | dir |
| CODE_OF_CONDUCT.md | file |
| CODE_REVIEW.md | file |
| codecov.yml | file |
| COMMAND_HELP.md | file |
| COMMITTERS | file |
| configs | dir |
| CONTRIBUTING.md | file |
| deployments | dir |
| DEVELOPMENT.md | file |
| docker-compose.yml | file |
| docs | dir |
| examples | dir |
| githooks | dir |
| go.mod | file |
| go.sum | file |
| internal | dir |
| LICENSE | file |
| MAINTAINERS | file |
| Makefile | file |
| milvus20vs1x.md | file |
| OWNERS | file |
| OWNERS_ALIASES | file |
| pkg | dir |
| README_CN.md | file |
| README.md | file |
| rules.go | file |
| scripts | dir |
| tests | dir |
| tools | dir |
| UPDATE_MILVUS_API.md | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| internal/ | 3217 |
| pkg/ | 712 |
| tests/ | 674 |
| docs/ | 193 |
| client/ | 174 |
| cmd/ | 87 |
| deployments/ | 39 |
| scripts/ | 38 |
| .github/ | 37 |
| (root) | 31 |
| ci/ | 20 |
| configs/ | 16 |
| examples/ | 8 |
| githooks/ | 4 |
| tools/ | 4 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| cmd/ | 87 | preferred |
| client/ | 174 | preferred |
| docs/ | 193 | preferred |
| examples/ | 8 | preferred |
| tests/ | 674 | preferred |
| tools/ | 4 | preferred |
| scripts/ | 38 | preferred |
| internal/ | 3217 | large |
| internal/core/ | 976 | large |
| internal/core/src/ | 752 | large |
| pkg/ | 712 | large |
| internal/util/ | 475 | large |
| tests/python_client/ | 407 | large |
| pkg/util/ | 274 | large |
| internal/proxy/ | 208 | large |
| internal/streamingnode/ | 203 | large |
| internal/datacoord/ | 191 | large |
| internal/streamingnode/server/ | 181 | large |
| internal/querycoordv2/ | 164 | large |
| internal/querynodev2/ | 163 | large |
| tests/python_client/chaos/ | 147 | large |
| internal/core/thirdparty/ | 141 | large |
| pkg/streaming/ | 123 | large |
| internal/util/function/ | 122 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `client/go.mod`
- `cmd/tools/binlogv2/requirements.txt`
- `deployments/docker/dev/docker-compose.yml`
- `deployments/docker/gpu/standalone/docker-compose.yml`
- `deployments/docker/standalone/docker-compose.yml`
- `deployments/offline/requirements.txt`
- `docker-compose.yml`
- `examples/telemetry_demo/go.mod`
- `examples/telemetry_e2e_test/go.mod`
- `go.mod`
- `internal/core/thirdparty/tantivy/tantivy-binding/Cargo.toml`
- `pkg/go.mod`
- `tests/_helm/Dockerfile`
- `tests/docker/Dockerfile`
- `tests/docker/docker-compose.yml`
- `tests/go_client/Dockerfile`
- `tests/go_client/go.mod`
- `tests/go_client/requirements.txt`
- `tests/python_client/Dockerfile`
- `tests/python_client/chaos/requirements.txt`
- `tests/python_client/data_verify/requirements.txt`
- `tests/python_client/deploy/cluster/docker-compose.yml`
- `tests/python_client/deploy/requirements.txt`
- `tests/python_client/deploy/standalone/docker-compose.yml`
- `tests/python_client/requirements.txt`
- `tests/restful_client/requirements.txt`
- `tests/restful_client_v2/requirements.txt`

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| internal/core/thirdparty/tantivy/tantivy-binding/Cargo.toml | tantivy-binding | false |  |

### go.mod

| 경로 | module | go |
| --- | --- | --- |
| client/go.mod | github.com/milvus-io/milvus/client/v2 | 1.26.4 |
| examples/telemetry_demo/go.mod | github.com/milvus-io/milvus/examples/telemetry_demo | 1.26.4 |
| examples/telemetry_e2e_test/go.mod | github.com/milvus-io/milvus/examples/telemetry_e2e_test | 1.26.4 |
| go.mod | github.com/milvus-io/milvus | 1.26.4 |
| pkg/go.mod | github.com/milvus-io/milvus/pkg/v3 | 1.26.4 |
| tests/go_client/go.mod | github.com/milvus-io/milvus/tests/go_client | 1.26.4 |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `client/README.md`
- `deployments/binary/README.md`
- `deployments/export-log/README.md`
- `deployments/migrate-meta/README.md`
- `deployments/monitor/grafana/README.md`
- `deployments/offline/README.md`
- `deployments/upgrade/README.md`
- `docs/OWNERS`
- `docs/agent_guides/streaming-system/channel/channel.md`
- `docs/agent_guides/streaming-system/coordination/broadcaster.md`
- `docs/agent_guides/streaming-system/coordination/channel_management.md`
- `docs/agent_guides/streaming-system/message/message-semantic-alias.md`
- `docs/agent_guides/streaming-system/message/message-semantic-cluster.md`
- `docs/agent_guides/streaming-system/message/message-semantic-collection.md`
- `docs/agent_guides/streaming-system/message/message-semantic-database.md`
- `docs/agent_guides/streaming-system/message/message-semantic-rbac.md`
- `docs/agent_guides/streaming-system/message/message-semantic-time-tick.md`
- `docs/agent_guides/streaming-system/message/message-semantic-txn.md`
- `docs/agent_guides/streaming-system/message/message.md`
- `docs/agent_guides/streaming-system/replication/replicate.md`
- `docs/agent_guides/streaming-system/streaming-client/streaming-client.md`
- `docs/agent_guides/streaming-system/streaming-system.md`
- `docs/agent_guides/streaming-system/wal/lock.md`
- `docs/agent_guides/streaming-system/wal/recovery-storage.md`
- `docs/agent_guides/streaming-system/wal/shard-management.md`
- `docs/agent_guides/streaming-system/wal/timetick_and_txn.md`
- `docs/agent_guides/streaming-system/walbackend/walbackend.md`
- `docs/design-docs/assets/graphs/IndexState.png`
- `docs/design-docs/assets/graphs/collection_dm_channels.png`
- `docs/design-docs/assets/graphs/collection_flowgraph_1_1.jpg`
- `docs/design-docs/assets/graphs/collection_flowgraph_1_n.png`
- `docs/design-docs/assets/graphs/collection_flowgraph_n_1.jpg`
- `docs/design-docs/assets/graphs/collection_flowgraph_n_n.jpg`
- `docs/design-docs/assets/graphs/collection_flowgraph_relation.png`
- `docs/design-docs/assets/graphs/create_index.png`
- `docs/design-docs/assets/graphs/datanode_design_01.jpg`
- `docs/design-docs/assets/graphs/decouple.jpeg`
- `docs/design-docs/assets/graphs/dml_create_collection.png`
- `docs/design-docs/assets/graphs/dml_drop_collection.png`
- `docs/design-docs/assets/graphs/dml_release_collection.png`
- `docs/design-docs/assets/graphs/dml_release_flow_graph_on_data_node.png`
- `docs/design-docs/assets/graphs/dynamic_config_flowchart.jpg`
- `docs/design-docs/assets/graphs/flowgraph_recovery_design.png`
- `docs/design-docs/assets/graphs/flush_data_coord.png`
- `docs/design-docs/assets/graphs/indexcoord_design.png`
- `docs/design-docs/assets/graphs/knn_query.png`
- `docs/design-docs/assets/graphs/knowhere_framework.png`
- `docs/design-docs/assets/graphs/milvus_create_index.png`
- ... 30 more

### 에이전트 지침 후보

- `CLAUDE.md`

### 스펙/템플릿/명령/스킬 후보

- `docs/design-docs/design_docs/20210521-datanode_recovery_design.md`
- `docs/design-docs/design_docs/20210604-datanode_flowgraph_recovery_design.md`
- `docs/design-docs/design_docs/20210731-index_design.md`
- `docs/design-docs/design_docs/20211223-knowhere_design.md`
- `docs/design-docs/design_docs/20250610-rls_design.md`
- `docs/design-docs/design_docs/20251114-snapshot_design.md`
- `docs/design-docs/design_docs/20260129-add-function-field-design.md`
- `docs/design-docs/design_docs/20260413-drop-collection-field-design.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `internal/core/thirdparty/tantivy/tantivy-binding/src/analyzer/data/test/decompounder_dict.txt`
- `internal/core/thirdparty/tantivy/tantivy-binding/src/analyzer/data/test/stop_words_dict.txt`
- `internal/core/thirdparty/tantivy/tantivy-binding/src/analyzer/data/test/synonyms_dict.txt`
- `tests/.python-version`
- `tests/Makefile`
- `tests/OWNERS`
- `tests/README.md`
- `tests/README_CN.md`
- `tests/_helm/Dockerfile`
- `tests/_helm/values/e2e-amd/distributed-pulsar`
- `tests/_helm/values/e2e-amd/standalone`
- `tests/_helm/values/e2e-amd/standalone-kafka-mmap`
- `tests/_helm/values/e2e-amd/standalone-one-pod`
- `tests/_helm/values/e2e-arm/distributed-pulsar`
- `tests/_helm/values/e2e-arm/standalone`
- `tests/_helm/values/e2e-arm/standalone-kafka-mmap`
- `tests/_helm/values/e2e-arm/standalone-one-pod`
- `tests/_helm/values/e2e/distributed-pulsar`
- `tests/_helm/values/e2e/standalone`
- `tests/_helm/values/e2e/standalone-kafka-mmap`
- `tests/_helm/values/e2e/standalone-one-pod`
- `tests/_helm/values/nightly/distributed-kafka`
- `tests/_helm/values/nightly/distributed-pulsar-mmap`
- `tests/_helm/values/nightly/distributed-woodpecker`
- `tests/_helm/values/nightly/distributed-woodpecker-service`
- `tests/_helm/values/nightly/standalone-authentication-mmap`
- `tests/_helm/values/nightly/standalone-one-pod`
- `tests/docker/.env`
- `tests/docker/Dockerfile`
- `tests/docker/docker-compose.yml`
- `tests/go_client/.golangci.yml`
- `tests/go_client/Dockerfile`
- `tests/go_client/README.md`
- `tests/go_client/base/milvus_client.go`
- `tests/go_client/common/consts.go`
- `tests/go_client/common/response_checker.go`
- `tests/go_client/common/response_checker_test.go`
- `tests/go_client/common/utils.go`
- `tests/go_client/go.mod`
- `tests/go_client/go.sum`
- `tests/go_client/requirements.txt`
- `tests/go_client/ruleguard/rules.go`
- `tests/go_client/scripts/install_external_table_python_deps.sh`
- `tests/go_client/testcases/add_field_test.go`
- `tests/go_client/testcases/advcases/main_test.go`
- `tests/go_client/testcases/advcases/rbac_test.go`
- `tests/go_client/testcases/advcases/resource_group_test.go`
- `tests/go_client/testcases/client_test.go`
- `tests/go_client/testcases/collection_test.go`
- `tests/go_client/testcases/database_test.go`
- `tests/go_client/testcases/delete_test.go`
- `tests/go_client/testcases/external_table_arn_e2e_test.go`
- `tests/go_client/testcases/external_table_function_test.go`
- `tests/go_client/testcases/external_table_iceberg_e2e_test.go`
- `tests/go_client/testcases/external_table_refresh_test.go`
- `tests/go_client/testcases/external_table_test.go`
- `tests/go_client/testcases/full_text_search_test.go`
- `tests/go_client/testcases/generate_iceberg_data.py`
- `tests/go_client/testcases/generate_lance_data.py`
- `tests/go_client/testcases/generate_parquet_data.py`
- `tests/go_client/testcases/generate_vortex_data.py`
- `tests/go_client/testcases/geometry_test.go`
- `tests/go_client/testcases/groupby_search_test.go`
- `tests/go_client/testcases/helper/collection_helper.go`
- `tests/go_client/testcases/helper/data_helper.go`
- `tests/go_client/testcases/helper/field_helper.go`
- `tests/go_client/testcases/helper/function_helper.go`
- `tests/go_client/testcases/helper/helper.go`
- `tests/go_client/testcases/helper/index_helper.go`
- `tests/go_client/testcases/helper/read_helper.go`
- `tests/go_client/testcases/helper/rows_helper.go`
- `tests/go_client/testcases/helper/schema_helper.go`
- `tests/go_client/testcases/helper/struct_array_element_helper.go`
- `tests/go_client/testcases/helper/struct_array_helper.go`
- `tests/go_client/testcases/helper/test_setup.go`
- `tests/go_client/testcases/helper/test_setup_test.go`
- `tests/go_client/testcases/hybrid_search_test.go`
- `tests/go_client/testcases/index_test.go`
- `tests/go_client/testcases/insert_test.go`
- `tests/go_client/testcases/load_release_test.go`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/all-contributors.yaml`
- `.github/workflows/bump-version-only-for-standalone-embed-milvus.yaml`
- `.github/workflows/bump-version.yaml`
- `.github/workflows/check-issue.yaml`
- `.github/workflows/claude-code-review.yml`
- `.github/workflows/claude.yml`
- `.github/workflows/code-checker.yaml`
- `.github/workflows/daily-release.yml`
- `.github/workflows/jenkins-checker.yaml`
- `.github/workflows/license-checker.yaml`
- `.github/workflows/mac.yaml`
- `.github/workflows/main.yaml`
- `.github/workflows/markdown-check.yaml`
- `.github/workflows/publish-builder.yaml`
- `.github/workflows/publish-gpu-builder.yaml`
- `.github/workflows/publish-krte-images.yaml`
- `.github/workflows/publish-test-images.yaml`
- `.github/workflows/python-lint.yaml`
- `.github/workflows/rerun-failure-checks.yaml`
- `.github/workflows/update-knowhere-commit.yaml`
- `.github/workflows/weekly-release.yml`
- `deployments/docker/dev/docker-compose-apple-silicon.yml`
- `deployments/docker/dev/docker-compose.yml`
- `deployments/docker/gpu/standalone/docker-compose.yml`
- `deployments/docker/standalone/docker-compose.yml`
- `docker-compose.yml`
- `tests/_helm/Dockerfile`
- `tests/docker/Dockerfile`
- `tests/docker/docker-compose.yml`
- `tests/go_client/Dockerfile`
- `tests/python_client/Dockerfile`
- `tests/python_client/deploy/cluster/docker-compose.yml`
- `tests/python_client/deploy/standalone/docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .go | 3240 |
| .cpp | 413 |
| .h | 387 |
| .py | 306 |
| .yaml | 175 |
| .md | 165 |
| .rs | 86 |
| .sh | 85 |
| .png | 67 |
| .txt | 61 |
| owners | 55 |
| .yml | 35 |
| .proto | 20 |
| .groovy | 13 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `cmd/ 내부 책임 분리`
- `client/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `docs/design-docs/design_docs/20210521-datanode_recovery_design.md 스펙/명령 의미`
- `docs/design-docs/design_docs/20210604-datanode_flowgraph_recovery_design.md 스펙/명령 의미`
- `docs/design-docs/design_docs/20210731-index_design.md 스펙/명령 의미`
- `docs/design-docs/design_docs/20211223-knowhere_design.md 스펙/명령 의미`
- `docs/design-docs/design_docs/20250610-rls_design.md 스펙/명령 의미`
- `client/go.mod 실행 스크립트와 패키지 경계`
- `cmd/tools/binlogv2/requirements.txt 실행 스크립트와 패키지 경계`
- `deployments/docker/dev/docker-compose.yml 실행 스크립트와 패키지 경계`
- `deployments/docker/gpu/standalone/docker-compose.yml 실행 스크립트와 패키지 경계`
- `deployments/docker/standalone/docker-compose.yml 실행 스크립트와 패키지 경계`

