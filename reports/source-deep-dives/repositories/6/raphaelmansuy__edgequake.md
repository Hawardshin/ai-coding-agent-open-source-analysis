# raphaelmansuy/edgequake 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

EdegQuake 🌋 High-performance GraphRAG inspired from LightRag written in Rust; Transform documents into intelligent knowledge graphs for superior retrieval and generation

## 요약

- 조사 단위: `sources/raphaelmansuy__edgequake` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 3,258 files, 573 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=zz-reference/002-apache-age/005-edgequake-usage/001-graph-adapter.md, zz-reference/001-pgvector/002-fundamentals/002-vector-types.md, wiki/CHANGELOG.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | raphaelmansuy/edgequake |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Rust |
| Stars | 2003 |
| Forks | 229 |
| License | Apache-2.0 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/raphaelmansuy__edgequake](../../../../sources/raphaelmansuy__edgequake) |
| 기존 보고서 | [reports/llm-wiki/repositories/raphaelmansuy__edgequake.md](../../../llm-wiki/repositories/raphaelmansuy__edgequake.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 3258 / 573 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .claude, .github, .metals, articles, audit_ui, benches, crates, docker, docs, edgequake, edgequake_webui, edgequake-website, examples, legacy, logs, mcp, migrations, mission, qa, scripts |
| 상위 확장자 | .md: 877, .rs: 725, .ts: 428, .png: 336, .tsx: 255, .py: 106, .json: 71, .pdf: 62, .sh: 53, .sql: 50, .java: 36, (none): 36 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 2 |
| .github | ci surface | 1 |
| articles | top-level component | 1 |
| audit_ui | top-level component | 1 |
| benches | validation surface | 1 |
| crates | source boundary | 1 |
| docker | documentation surface | 1 |
| docs | documentation surface | 1 |
| edgequake | top-level component | 1 |
| edgequake_webui | source boundary | 1 |
| edgequake-website | documentation surface | 1 |
| examples | top-level component | 1 |
| legacy | top-level component | 1 |
| logs | top-level component | 1 |
| mcp | top-level component | 1 |
| migrations | top-level component | 1 |
| mission | top-level component | 1 |
| qa | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | sdk-rust-version | make sdk-rust-version |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | sdk-python-build | make sdk-python-build |
| utility | Makefile | sdk-python-publish | make sdk-python-publish |
| utility | Makefile | sdk-python-version | make sdk-python-version |
| build | Makefile | sdk-typescript-build | make sdk-typescript-build |
| quality | Makefile | sdk-typescript-publish | make sdk-typescript-publish |
| quality | Makefile | sdk-typescript-version | make sdk-typescript-version |
| build | Makefile | sdk-java-build | make sdk-java-build |
| utility | Makefile | sdk-java-publish | make sdk-java-publish |
| utility | Makefile | sdk-java-version | make sdk-java-version |
| build | Makefile | sdk-kotlin-build | make sdk-kotlin-build |
| utility | Makefile | sdk-kotlin-publish | make sdk-kotlin-publish |
| utility | Makefile | sdk-kotlin-version | make sdk-kotlin-version |
| utility | Makefile | .PHONY | make .PHONY |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [zz-reference/002-apache-age/005-edgequake-usage/001-graph-adapter.md](../../../../sources/raphaelmansuy__edgequake/zz-reference/002-apache-age/005-edgequake-usage/001-graph-adapter.md) | retrieval signal |
| retrieval | [zz-reference/001-pgvector/002-fundamentals/002-vector-types.md](../../../../sources/raphaelmansuy__edgequake/zz-reference/001-pgvector/002-fundamentals/002-vector-types.md) | retrieval signal |
| retrieval | [wiki/CHANGELOG.md](../../../../sources/raphaelmansuy__edgequake/wiki/CHANGELOG.md) | retrieval signal |
| retrieval | [wiki/EdgeQuake.md](../../../../sources/raphaelmansuy__edgequake/wiki/EdgeQuake.md) | retrieval signal |
| entrypoints | [sdks/typescript/src/index.ts](../../../../sources/raphaelmansuy__edgequake/sdks/typescript/src/index.ts) | entrypoints signal |
| entrypoints | [mcp/tests/server.test.ts](../../../../sources/raphaelmansuy__edgequake/mcp/tests/server.test.ts) | entrypoints signal |
| entrypoints | [mcp/src/index.ts](../../../../sources/raphaelmansuy__edgequake/mcp/src/index.ts) | entrypoints signal |
| entrypoints | [mcp/src/server.ts](../../../../sources/raphaelmansuy__edgequake/mcp/src/server.ts) | entrypoints signal |
| docs | [README.md](../../../../sources/raphaelmansuy__edgequake/README.md) | docs signal |
| docs | [zz-reference/README.md](../../../../sources/raphaelmansuy__edgequake/zz-reference/README.md) | docs signal |
| docs | [zz-reference/002-apache-age/README.md](../../../../sources/raphaelmansuy__edgequake/zz-reference/002-apache-age/README.md) | docs signal |
| docs | [zz-reference/002-apache-age/006-faq/README.md](../../../../sources/raphaelmansuy__edgequake/zz-reference/002-apache-age/006-faq/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 18 | [sdks/typescript/src/index.ts](../../../../sources/raphaelmansuy__edgequake/sdks/typescript/src/index.ts)<br>[mcp/tests/server.test.ts](../../../../sources/raphaelmansuy__edgequake/mcp/tests/server.test.ts)<br>[mcp/src/index.ts](../../../../sources/raphaelmansuy__edgequake/mcp/src/index.ts)<br>[mcp/src/server.ts](../../../../sources/raphaelmansuy__edgequake/mcp/src/server.ts)<br>[edgequake/src/main.rs](../../../../sources/raphaelmansuy__edgequake/edgequake/src/main.rs)<br>[edgequake/crates/edgequake-tasks/src/lib.rs](../../../../sources/raphaelmansuy__edgequake/edgequake/crates/edgequake-tasks/src/lib.rs)<br>[edgequake/crates/edgequake-storage/src/lib.rs](../../../../sources/raphaelmansuy__edgequake/edgequake/crates/edgequake-storage/src/lib.rs)<br>[edgequake/crates/edgequake-rate-limiter/src/lib.rs](../../../../sources/raphaelmansuy__edgequake/edgequake/crates/edgequake-rate-limiter/src/lib.rs) |
| agentRuntime | 139 | [AGENTS.md](../../../../sources/raphaelmansuy__edgequake/AGENTS.md)<br>[mcp/src/tools/document.ts](../../../../sources/raphaelmansuy__edgequake/mcp/src/tools/document.ts)<br>[mcp/src/tools/graph.ts](../../../../sources/raphaelmansuy__edgequake/mcp/src/tools/graph.ts)<br>[mcp/src/tools/health.ts](../../../../sources/raphaelmansuy__edgequake/mcp/src/tools/health.ts)<br>[mcp/src/tools/query.ts](../../../../sources/raphaelmansuy__edgequake/mcp/src/tools/query.ts)<br>[mcp/src/tools/workspace.ts](../../../../sources/raphaelmansuy__edgequake/mcp/src/tools/workspace.ts)<br>[legacy/edgequake-pdf/test-data/real_dataset/agent_2510.09244v1.gold.md](../../../../sources/raphaelmansuy__edgequake/legacy/edgequake-pdf/test-data/real_dataset/agent_2510.09244v1.gold.md)<br>[legacy/edgequake-pdf/test-data/real_dataset/agent_2510.09244v1.md](../../../../sources/raphaelmansuy__edgequake/legacy/edgequake-pdf/test-data/real_dataset/agent_2510.09244v1.md) |
| mcp | 45 | [mcp/.env.example](../../../../sources/raphaelmansuy__edgequake/mcp/.env.example)<br>[mcp/.gitignore](../../../../sources/raphaelmansuy__edgequake/mcp/.gitignore)<br>[mcp/LICENSE](../../../../sources/raphaelmansuy__edgequake/mcp/LICENSE)<br>[mcp/package-lock.json](../../../../sources/raphaelmansuy__edgequake/mcp/package-lock.json)<br>[mcp/package.json](../../../../sources/raphaelmansuy__edgequake/mcp/package.json)<br>[mcp/README.md](../../../../sources/raphaelmansuy__edgequake/mcp/README.md)<br>[mcp/tsconfig.json](../../../../sources/raphaelmansuy__edgequake/mcp/tsconfig.json)<br>[mcp/tsup.config.ts](../../../../sources/raphaelmansuy__edgequake/mcp/tsup.config.ts) |
| retrieval | 320 | [zz-reference/002-apache-age/005-edgequake-usage/001-graph-adapter.md](../../../../sources/raphaelmansuy__edgequake/zz-reference/002-apache-age/005-edgequake-usage/001-graph-adapter.md)<br>[zz-reference/001-pgvector/002-fundamentals/002-vector-types.md](../../../../sources/raphaelmansuy__edgequake/zz-reference/001-pgvector/002-fundamentals/002-vector-types.md)<br>[wiki/CHANGELOG.md](../../../../sources/raphaelmansuy__edgequake/wiki/CHANGELOG.md)<br>[wiki/EdgeQuake.md](../../../../sources/raphaelmansuy__edgequake/wiki/EdgeQuake.md)<br>[specs/020-e2e-quality-control/e2e/019-graph-entities.json](../../../../sources/raphaelmansuy__edgequake/specs/020-e2e-quality-control/e2e/019-graph-entities.json)<br>[specs/020-e2e-quality-control/e2e/022-graph-isolation.json](../../../../sources/raphaelmansuy__edgequake/specs/020-e2e-quality-control/e2e/022-graph-isolation.json)<br>[specs/020-e2e-quality-control/e2e/screenshots/07-graph.png](../../../../sources/raphaelmansuy__edgequake/specs/020-e2e-quality-control/e2e/screenshots/07-graph.png)<br>[specs/020-e2e-quality-control/e2e/screenshots/08-knowledge.png](../../../../sources/raphaelmansuy__edgequake/specs/020-e2e-quality-control/e2e/screenshots/08-knowledge.png) |
| spec | 172 | [specs/website/01-information-architecture.md](../../../../sources/raphaelmansuy__edgequake/specs/website/01-information-architecture.md)<br>[specs/website/04-technical-architecture.md](../../../../sources/raphaelmansuy__edgequake/specs/website/04-technical-architecture.md)<br>[specs/website/06-design-system.md](../../../../sources/raphaelmansuy__edgequake/specs/website/06-design-system.md)<br>[specs/website/09-implementation-roadmap.md](../../../../sources/raphaelmansuy__edgequake/specs/website/09-implementation-roadmap.md)<br>[specs/pdf-vision/SPEC.md](../../../../sources/raphaelmansuy__edgequake/specs/pdf-vision/SPEC.md)<br>[specs/install_script/ADR-001-explicit-provider-selection.md](../../../../sources/raphaelmansuy__edgequake/specs/install_script/ADR-001-explicit-provider-selection.md)<br>[specs/install_script/ADR-002-volume-lifecycle.md](../../../../sources/raphaelmansuy__edgequake/specs/install_script/ADR-002-volume-lifecycle.md)<br>[specs/install_script/ADR-003-model-catalogue.md](../../../../sources/raphaelmansuy__edgequake/specs/install_script/ADR-003-model-catalogue.md) |
| eval | 924 | [test_docker_e2e.py](../../../../sources/raphaelmansuy__edgequake/test_docker_e2e.py)<br>[tests/CHANGELOG.md](../../../../sources/raphaelmansuy__edgequake/tests/CHANGELOG.md)<br>[specs/pdf-vision/SPEC.md](../../../../sources/raphaelmansuy__edgequake/specs/pdf-vision/SPEC.md)<br>[specs/020-e2e-quality-control/README.md](../../../../sources/raphaelmansuy__edgequake/specs/020-e2e-quality-control/README.md)<br>[specs/020-e2e-quality-control/e2e/.gitignore](../../../../sources/raphaelmansuy__edgequake/specs/020-e2e-quality-control/e2e/.gitignore)<br>[specs/020-e2e-quality-control/e2e/001-quality-control-proof.md](../../../../sources/raphaelmansuy__edgequake/specs/020-e2e-quality-control/e2e/001-quality-control-proof.md)<br>[specs/020-e2e-quality-control/e2e/002-health-response.json](../../../../sources/raphaelmansuy__edgequake/specs/020-e2e-quality-control/e2e/002-health-response.json)<br>[specs/020-e2e-quality-control/e2e/002-ready-status.json](../../../../sources/raphaelmansuy__edgequake/specs/020-e2e-quality-control/e2e/002-ready-status.json) |
| security | 438 | [SECURITY.md](../../../../sources/raphaelmansuy__edgequake/SECURITY.md)<br>[zz-reference/002-apache-age/007-code-audit.md](../../../../sources/raphaelmansuy__edgequake/zz-reference/002-apache-age/007-code-audit.md)<br>[zz-reference/001-pgvector/007-code-audit.md](../../../../sources/raphaelmansuy__edgequake/zz-reference/001-pgvector/007-code-audit.md)<br>[specs/020-e2e-quality-control/e2e/021-auth-probe.json](../../../../sources/raphaelmansuy__edgequake/specs/020-e2e-quality-control/e2e/021-auth-probe.json)<br>[specs/018-observability/014-edgequake-llm/001-audit.md](../../../../sources/raphaelmansuy__edgequake/specs/018-observability/014-edgequake-llm/001-audit.md)<br>[specs/018-observability/013-edgequake-webui/001-audit.md](../../../../sources/raphaelmansuy__edgequake/specs/018-observability/013-edgequake-webui/001-audit.md)<br>[specs/018-observability/012-edgequake-rate-limiter/001-audit.md](../../../../sources/raphaelmansuy__edgequake/specs/018-observability/012-edgequake-rate-limiter/001-audit.md)<br>[specs/018-observability/011-edgequake-tasks/001-audit.md](../../../../sources/raphaelmansuy__edgequake/specs/018-observability/011-edgequake-tasks/001-audit.md) |
| ci | 24 | [sdks/typescript/.github/workflows/publish.yml](../../../../sources/raphaelmansuy__edgequake/sdks/typescript/.github/workflows/publish.yml)<br>[sdks/typescript/.github/workflows/test.yml](../../../../sources/raphaelmansuy__edgequake/sdks/typescript/.github/workflows/test.yml)<br>[sdks/swift/.github/workflows/swift-test.yml](../../../../sources/raphaelmansuy__edgequake/sdks/swift/.github/workflows/swift-test.yml)<br>[sdks/rust/.github/workflows/test.yml](../../../../sources/raphaelmansuy__edgequake/sdks/rust/.github/workflows/test.yml)<br>[sdks/ruby/.github/workflows/test.yml](../../../../sources/raphaelmansuy__edgequake/sdks/ruby/.github/workflows/test.yml)<br>[sdks/python/.github/workflows/test.yml](../../../../sources/raphaelmansuy__edgequake/sdks/python/.github/workflows/test.yml)<br>[sdks/php/.github/workflows/test.yml](../../../../sources/raphaelmansuy__edgequake/sdks/php/.github/workflows/test.yml)<br>[sdks/kotlin/.github/workflows/test.yml](../../../../sources/raphaelmansuy__edgequake/sdks/kotlin/.github/workflows/test.yml) |
| container | 10 | [docker-compose.quickstart.yml](../../../../sources/raphaelmansuy__edgequake/docker-compose.quickstart.yml)<br>[edgequake_webui/Dockerfile](../../../../sources/raphaelmansuy__edgequake/edgequake_webui/Dockerfile)<br>[edgequake/docker/docker-compose.api-only.yml](../../../../sources/raphaelmansuy__edgequake/edgequake/docker/docker-compose.api-only.yml)<br>[edgequake/docker/docker-compose.observability.yml](../../../../sources/raphaelmansuy__edgequake/edgequake/docker/docker-compose.observability.yml)<br>[edgequake/docker/docker-compose.prebuilt.yml](../../../../sources/raphaelmansuy__edgequake/edgequake/docker/docker-compose.prebuilt.yml)<br>[edgequake/docker/docker-compose.test.yml](../../../../sources/raphaelmansuy__edgequake/edgequake/docker/docker-compose.test.yml)<br>[edgequake/docker/docker-compose.yml](../../../../sources/raphaelmansuy__edgequake/edgequake/docker/docker-compose.yml)<br>[edgequake/docker/Dockerfile](../../../../sources/raphaelmansuy__edgequake/edgequake/docker/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/raphaelmansuy__edgequake/AGENTS.md) |
| docs | 182 | [README.md](../../../../sources/raphaelmansuy__edgequake/README.md)<br>[zz-reference/README.md](../../../../sources/raphaelmansuy__edgequake/zz-reference/README.md)<br>[zz-reference/002-apache-age/README.md](../../../../sources/raphaelmansuy__edgequake/zz-reference/002-apache-age/README.md)<br>[zz-reference/002-apache-age/006-faq/README.md](../../../../sources/raphaelmansuy__edgequake/zz-reference/002-apache-age/006-faq/README.md)<br>[zz-reference/002-apache-age/005-edgequake-usage/README.md](../../../../sources/raphaelmansuy__edgequake/zz-reference/002-apache-age/005-edgequake-usage/README.md)<br>[zz-reference/002-apache-age/004-sql-integration/README.md](../../../../sources/raphaelmansuy__edgequake/zz-reference/002-apache-age/004-sql-integration/README.md)<br>[zz-reference/002-apache-age/003-cypher/README.md](../../../../sources/raphaelmansuy__edgequake/zz-reference/002-apache-age/003-cypher/README.md)<br>[zz-reference/002-apache-age/002-fundamentals/README.md](../../../../sources/raphaelmansuy__edgequake/zz-reference/002-apache-age/002-fundamentals/README.md) |
| config | 32 | [Makefile](../../../../sources/raphaelmansuy__edgequake/Makefile)<br>[sdks/typescript/package.json](../../../../sources/raphaelmansuy__edgequake/sdks/typescript/package.json)<br>[sdks/typescript/tsconfig.json](../../../../sources/raphaelmansuy__edgequake/sdks/typescript/tsconfig.json)<br>[sdks/rust/Cargo.lock](../../../../sources/raphaelmansuy__edgequake/sdks/rust/Cargo.lock)<br>[sdks/rust/Cargo.toml](../../../../sources/raphaelmansuy__edgequake/sdks/rust/Cargo.toml)<br>[sdks/python/pyproject.toml](../../../../sources/raphaelmansuy__edgequake/sdks/python/pyproject.toml)<br>[sdks/python/uv.lock](../../../../sources/raphaelmansuy__edgequake/sdks/python/uv.lock)<br>[sdks/go/go.mod](../../../../sources/raphaelmansuy__edgequake/sdks/go/go.mod) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 924 | [test_docker_e2e.py](../../../../sources/raphaelmansuy__edgequake/test_docker_e2e.py)<br>[tests/CHANGELOG.md](../../../../sources/raphaelmansuy__edgequake/tests/CHANGELOG.md)<br>[specs/pdf-vision/SPEC.md](../../../../sources/raphaelmansuy__edgequake/specs/pdf-vision/SPEC.md)<br>[specs/020-e2e-quality-control/README.md](../../../../sources/raphaelmansuy__edgequake/specs/020-e2e-quality-control/README.md)<br>[specs/020-e2e-quality-control/e2e/.gitignore](../../../../sources/raphaelmansuy__edgequake/specs/020-e2e-quality-control/e2e/.gitignore)<br>[specs/020-e2e-quality-control/e2e/001-quality-control-proof.md](../../../../sources/raphaelmansuy__edgequake/specs/020-e2e-quality-control/e2e/001-quality-control-proof.md) |
| CI workflow | 24 | [sdks/typescript/.github/workflows/publish.yml](../../../../sources/raphaelmansuy__edgequake/sdks/typescript/.github/workflows/publish.yml)<br>[sdks/typescript/.github/workflows/test.yml](../../../../sources/raphaelmansuy__edgequake/sdks/typescript/.github/workflows/test.yml)<br>[sdks/swift/.github/workflows/swift-test.yml](../../../../sources/raphaelmansuy__edgequake/sdks/swift/.github/workflows/swift-test.yml)<br>[sdks/rust/.github/workflows/test.yml](../../../../sources/raphaelmansuy__edgequake/sdks/rust/.github/workflows/test.yml)<br>[sdks/ruby/.github/workflows/test.yml](../../../../sources/raphaelmansuy__edgequake/sdks/ruby/.github/workflows/test.yml)<br>[sdks/python/.github/workflows/test.yml](../../../../sources/raphaelmansuy__edgequake/sdks/python/.github/workflows/test.yml) |
| 컨테이너/배포 | 10 | [docker-compose.quickstart.yml](../../../../sources/raphaelmansuy__edgequake/docker-compose.quickstart.yml)<br>[edgequake_webui/Dockerfile](../../../../sources/raphaelmansuy__edgequake/edgequake_webui/Dockerfile)<br>[edgequake/docker/docker-compose.api-only.yml](../../../../sources/raphaelmansuy__edgequake/edgequake/docker/docker-compose.api-only.yml)<br>[edgequake/docker/docker-compose.observability.yml](../../../../sources/raphaelmansuy__edgequake/edgequake/docker/docker-compose.observability.yml)<br>[edgequake/docker/docker-compose.prebuilt.yml](../../../../sources/raphaelmansuy__edgequake/edgequake/docker/docker-compose.prebuilt.yml)<br>[edgequake/docker/docker-compose.test.yml](../../../../sources/raphaelmansuy__edgequake/edgequake/docker/docker-compose.test.yml) |
| 보안/정책 | 438 | [SECURITY.md](../../../../sources/raphaelmansuy__edgequake/SECURITY.md)<br>[zz-reference/002-apache-age/007-code-audit.md](../../../../sources/raphaelmansuy__edgequake/zz-reference/002-apache-age/007-code-audit.md)<br>[zz-reference/001-pgvector/007-code-audit.md](../../../../sources/raphaelmansuy__edgequake/zz-reference/001-pgvector/007-code-audit.md)<br>[specs/020-e2e-quality-control/e2e/021-auth-probe.json](../../../../sources/raphaelmansuy__edgequake/specs/020-e2e-quality-control/e2e/021-auth-probe.json)<br>[specs/018-observability/014-edgequake-llm/001-audit.md](../../../../sources/raphaelmansuy__edgequake/specs/018-observability/014-edgequake-llm/001-audit.md)<br>[specs/018-observability/013-edgequake-webui/001-audit.md](../../../../sources/raphaelmansuy__edgequake/specs/018-observability/013-edgequake-webui/001-audit.md) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/raphaelmansuy__edgequake/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `zz-reference/002-apache-age/005-edgequake-usage/001-graph-adapter.md`, `zz-reference/001-pgvector/002-fundamentals/002-vector-types.md`, `wiki/CHANGELOG.md`.
2. entrypoint를 따라 실행 흐름 확인: `sdks/typescript/src/index.ts`, `mcp/tests/server.test.ts`, `mcp/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `mcp/src/tools/document.ts`, `mcp/src/tools/graph.ts`.
4. retrieval/memory/indexing 확인: `zz-reference/002-apache-age/005-edgequake-usage/001-graph-adapter.md`, `zz-reference/001-pgvector/002-fundamentals/002-vector-types.md`, `wiki/CHANGELOG.md`.
5. test/eval 파일로 동작 검증: `test_docker_e2e.py`, `tests/CHANGELOG.md`, `specs/pdf-vision/SPEC.md`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 EdegQuake 🌋 High performance GraphRAG inspired from LightRag written in Rust; Transform documents into intelligent know. 핵심 구조 신호는 Rust, Makefile, README.md, AGENTS.md, LICENSE, tests이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
