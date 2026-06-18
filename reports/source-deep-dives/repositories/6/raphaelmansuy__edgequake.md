# raphaelmansuy/edgequake Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

EdegQuake 🌋 High-performance GraphRAG inspired from LightRag written in Rust; Transform documents into intelligent knowledge graphs for superior retrieval and generation

## 요약

- 조사 단위: `sources/raphaelmansuy__edgequake` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 3,258 files, 573 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=zz-reference/002-apache-age/005-edgequake-usage/001-graph-adapter.md, zz-reference/001-pgvector/002-fundamentals/002-vector-types.md, wiki/CHANGELOG.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | raphaelmansuy/edgequake |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Rust |
| Stars | 2003 |
| Forks | 229 |
| License | Apache-2.0 |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/raphaelmansuy__edgequake](../../../../sources/raphaelmansuy__edgequake) |
| Existing report | [reports/llm-wiki/repositories/raphaelmansuy__edgequake.md](../../../llm-wiki/repositories/raphaelmansuy__edgequake.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 3258 / 573 |
| Max observed depth | 10 |
| Top directories | .claude, .github, .metals, articles, audit_ui, benches, crates, docker, docs, edgequake, edgequake_webui, edgequake-website, examples, legacy, logs, mcp, migrations, mission, qa, scripts |
| Top extensions | .md: 877, .rs: 725, .ts: 428, .png: 336, .tsx: 255, .py: 106, .json: 71, .pdf: 62, .sh: 53, .sql: 50, .java: 36, (none): 36 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
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


## How It Runs

| Category | Source | Name | Command |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
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


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 924 | [test_docker_e2e.py](../../../../sources/raphaelmansuy__edgequake/test_docker_e2e.py)<br>[tests/CHANGELOG.md](../../../../sources/raphaelmansuy__edgequake/tests/CHANGELOG.md)<br>[specs/pdf-vision/SPEC.md](../../../../sources/raphaelmansuy__edgequake/specs/pdf-vision/SPEC.md)<br>[specs/020-e2e-quality-control/README.md](../../../../sources/raphaelmansuy__edgequake/specs/020-e2e-quality-control/README.md)<br>[specs/020-e2e-quality-control/e2e/.gitignore](../../../../sources/raphaelmansuy__edgequake/specs/020-e2e-quality-control/e2e/.gitignore)<br>[specs/020-e2e-quality-control/e2e/001-quality-control-proof.md](../../../../sources/raphaelmansuy__edgequake/specs/020-e2e-quality-control/e2e/001-quality-control-proof.md) |
| CI workflows | 24 | [sdks/typescript/.github/workflows/publish.yml](../../../../sources/raphaelmansuy__edgequake/sdks/typescript/.github/workflows/publish.yml)<br>[sdks/typescript/.github/workflows/test.yml](../../../../sources/raphaelmansuy__edgequake/sdks/typescript/.github/workflows/test.yml)<br>[sdks/swift/.github/workflows/swift-test.yml](../../../../sources/raphaelmansuy__edgequake/sdks/swift/.github/workflows/swift-test.yml)<br>[sdks/rust/.github/workflows/test.yml](../../../../sources/raphaelmansuy__edgequake/sdks/rust/.github/workflows/test.yml)<br>[sdks/ruby/.github/workflows/test.yml](../../../../sources/raphaelmansuy__edgequake/sdks/ruby/.github/workflows/test.yml)<br>[sdks/python/.github/workflows/test.yml](../../../../sources/raphaelmansuy__edgequake/sdks/python/.github/workflows/test.yml) |
| Containers / deploy | 10 | [docker-compose.quickstart.yml](../../../../sources/raphaelmansuy__edgequake/docker-compose.quickstart.yml)<br>[edgequake_webui/Dockerfile](../../../../sources/raphaelmansuy__edgequake/edgequake_webui/Dockerfile)<br>[edgequake/docker/docker-compose.api-only.yml](../../../../sources/raphaelmansuy__edgequake/edgequake/docker/docker-compose.api-only.yml)<br>[edgequake/docker/docker-compose.observability.yml](../../../../sources/raphaelmansuy__edgequake/edgequake/docker/docker-compose.observability.yml)<br>[edgequake/docker/docker-compose.prebuilt.yml](../../../../sources/raphaelmansuy__edgequake/edgequake/docker/docker-compose.prebuilt.yml)<br>[edgequake/docker/docker-compose.test.yml](../../../../sources/raphaelmansuy__edgequake/edgequake/docker/docker-compose.test.yml) |
| Security / policy | 438 | [SECURITY.md](../../../../sources/raphaelmansuy__edgequake/SECURITY.md)<br>[zz-reference/002-apache-age/007-code-audit.md](../../../../sources/raphaelmansuy__edgequake/zz-reference/002-apache-age/007-code-audit.md)<br>[zz-reference/001-pgvector/007-code-audit.md](../../../../sources/raphaelmansuy__edgequake/zz-reference/001-pgvector/007-code-audit.md)<br>[specs/020-e2e-quality-control/e2e/021-auth-probe.json](../../../../sources/raphaelmansuy__edgequake/specs/020-e2e-quality-control/e2e/021-auth-probe.json)<br>[specs/018-observability/014-edgequake-llm/001-audit.md](../../../../sources/raphaelmansuy__edgequake/specs/018-observability/014-edgequake-llm/001-audit.md)<br>[specs/018-observability/013-edgequake-webui/001-audit.md](../../../../sources/raphaelmansuy__edgequake/specs/018-observability/013-edgequake-webui/001-audit.md) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/raphaelmansuy__edgequake/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `zz-reference/002-apache-age/005-edgequake-usage/001-graph-adapter.md`, `zz-reference/001-pgvector/002-fundamentals/002-vector-types.md`, `wiki/CHANGELOG.md`.
2. Trace execution through entrypoints: `sdks/typescript/src/index.ts`, `mcp/tests/server.test.ts`, `mcp/src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `mcp/src/tools/document.ts`, `mcp/src/tools/graph.ts`.
4. Inspect retrieval/memory/indexing through: `zz-reference/002-apache-age/005-edgequake-usage/001-graph-adapter.md`, `zz-reference/001-pgvector/002-fundamentals/002-vector-types.md`, `wiki/CHANGELOG.md`.
5. Verify behavior through test/eval files: `test_docker_e2e.py`, `tests/CHANGELOG.md`, `specs/pdf-vision/SPEC.md`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 EdegQuake 🌋 High performance GraphRAG inspired from LightRag written in Rust; Transform documents into intelligent know. 핵심 구조 신호는 Rust, Makefile, README.md, AGENTS.md, LICENSE, tests이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
