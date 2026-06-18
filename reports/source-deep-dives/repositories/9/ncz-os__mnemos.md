# ncz-os/mnemos 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Production-grade memory operating system for agentic AI. Interoperates with every major framework via MCP, OpenAI-compatible gateway, and native /v1/* REST — Claude Code, OpenClaw, ZeroClaw, Hermes, MemPalace, LangChain, LlamaIndex, CrewAI, AutoGen, Mem0, Letta, Zep. In production use since December 2025. Apache 2.0.

## 요약

- 조사 단위: `sources/ncz-os__mnemos` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 973 files, 93 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test_doc_mcp_tool_count.py, tests/test_mcp_audit_log.py, tests/test_mcp_audit_route_trust_boundary.py이고, 의존성 단서는 openai, mcp, fastapi, pydantic, typer, torch, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | ncz-os/mnemos |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 25 |
| Forks | 6 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/ncz-os__mnemos](../../../../sources/ncz-os__mnemos) |
| 기존 보고서 | [reports/global-trending/repositories/ncz-os__mnemos.md](../../../global-trending/repositories/ncz-os__mnemos.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 973 / 93 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, benchmarks, cli, data, db, deploy, docker, docs, integrations, mnemos, mnemos-rust-ext, ops, scripts, services, systemd, tests |
| 상위 확장자 | .py: 483, .sql: 265, .md: 132, .sh: 24, .yml: 11, .service: 8, (none): 8, .json: 7, .example: 5, .toml: 4, .rs: 3, .snippet: 3 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 94 |
| docs | documentation surface | 44 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| cli | top-level component | 1 |
| data | top-level component | 1 |
| db | top-level component | 1 |
| deploy | deployment surface | 1 |
| docker | documentation surface | 1 |
| integrations | top-level component | 1 |
| mnemos | top-level component | 1 |
| mnemos-rust-ext | top-level component | 1 |
| ops | top-level component | 1 |
| scripts | top-level component | 1 |
| services | top-level component | 1 |
| systemd | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | install | make install |
| serve-dev | Makefile | dev | make dev |
| test | Makefile | test | make test |
| test | Makefile | test-uv | make test-uv |
| test | Makefile | test-archive | make test-archive |
| test | Makefile | test-all | make test-all |
| quality | Makefile | lint | make lint |
| quality | Makefile | lint-fix | make lint-fix |
| utility | Makefile | setup-db | make setup-db |
| build | Makefile | docker-build | make docker-build |
| container | Makefile | docker-up | make docker-up |
| container | Makefile | docker-down | make docker-down |
| container | Makefile | docker-logs | make docker-logs |
| utility | Makefile | clean | make clean |
| utility | Makefile | install-agent | make install-agent |
| utility | Makefile | install-wizard | make install-wizard |
| quality | Makefile | install-check | make install-check |
| utility | Makefile | install-upgrade | make install-upgrade |
| utility | pyproject.toml | mnemos | mnemos |
| utility | pyproject.toml | mnemos-install | mnemos-install |
| utility | pyproject.toml | refresh-pantheon-catalog | refresh-pantheon-catalog |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | torch, transformers, ollama, llama |
| webRuntime | fastapi |
| developerSurface | typer |
| observability | opentelemetry, prometheus |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [tests/test_doc_mcp_tool_count.py](../../../../sources/ncz-os__mnemos/tests/test_doc_mcp_tool_count.py) | mcp signal |
| mcp | [tests/test_mcp_audit_log.py](../../../../sources/ncz-os__mnemos/tests/test_mcp_audit_log.py) | mcp signal |
| mcp | [tests/test_mcp_audit_route_trust_boundary.py](../../../../sources/ncz-os__mnemos/tests/test_mcp_audit_route_trust_boundary.py) | mcp signal |
| mcp | [tests/test_mcp_get_memory_format.py](../../../../sources/ncz-os__mnemos/tests/test_mcp_get_memory_format.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/ncz-os__mnemos/AGENTS.md) | agentRuntime signal |
| agentRuntime | [SKILL.md](../../../../sources/ncz-os__mnemos/SKILL.md) | agentRuntime signal |
| agentRuntime | [mnemos/tools/knossos_mcp.py](../../../../sources/ncz-os__mnemos/mnemos/tools/knossos_mcp.py) | agentRuntime signal |
| agentRuntime | [mnemos/tools/README.md](../../../../sources/ncz-os__mnemos/mnemos/tools/README.md) | agentRuntime signal |
| entrypoints | [mnemos/installer/__main__.py](../../../../sources/ncz-os__mnemos/mnemos/installer/__main__.py) | entrypoints signal |
| entrypoints | [mnemos/cli/main.py](../../../../sources/ncz-os__mnemos/mnemos/cli/main.py) | entrypoints signal |
| entrypoints | [mnemos/api/main.py](../../../../sources/ncz-os__mnemos/mnemos/api/main.py) | entrypoints signal |
| entrypoints | [cli/mnemosctl/src/main.rs](../../../../sources/ncz-os__mnemos/cli/mnemosctl/src/main.rs) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [mnemos/installer/__main__.py](../../../../sources/ncz-os__mnemos/mnemos/installer/__main__.py)<br>[mnemos/cli/main.py](../../../../sources/ncz-os__mnemos/mnemos/cli/main.py)<br>[mnemos/api/main.py](../../../../sources/ncz-os__mnemos/mnemos/api/main.py)<br>[cli/mnemosctl/src/main.rs](../../../../sources/ncz-os__mnemos/cli/mnemosctl/src/main.rs) |
| agentRuntime | 42 | [AGENTS.md](../../../../sources/ncz-os__mnemos/AGENTS.md)<br>[SKILL.md](../../../../sources/ncz-os__mnemos/SKILL.md)<br>[mnemos/tools/knossos_mcp.py](../../../../sources/ncz-os__mnemos/mnemos/tools/knossos_mcp.py)<br>[mnemos/tools/README.md](../../../../sources/ncz-os__mnemos/mnemos/tools/README.md)<br>[mnemos/tools/refresh_pantheon_catalog.py](../../../../sources/ncz-os__mnemos/mnemos/tools/refresh_pantheon_catalog.py)<br>[mnemos/tools/backup/mnemos-backup-daily.service](../../../../sources/ncz-os__mnemos/mnemos/tools/backup/mnemos-backup-daily.service)<br>[mnemos/tools/backup/mnemos-backup-daily.sh](../../../../sources/ncz-os__mnemos/mnemos/tools/backup/mnemos-backup-daily.sh)<br>[mnemos/tools/backup/mnemos-backup-daily.timer](../../../../sources/ncz-os__mnemos/mnemos/tools/backup/mnemos-backup-daily.timer) |
| mcp | 45 | [tests/test_doc_mcp_tool_count.py](../../../../sources/ncz-os__mnemos/tests/test_doc_mcp_tool_count.py)<br>[tests/test_mcp_audit_log.py](../../../../sources/ncz-os__mnemos/tests/test_mcp_audit_log.py)<br>[tests/test_mcp_audit_route_trust_boundary.py](../../../../sources/ncz-os__mnemos/tests/test_mcp_audit_route_trust_boundary.py)<br>[tests/test_mcp_get_memory_format.py](../../../../sources/ncz-os__mnemos/tests/test_mcp_get_memory_format.py)<br>[tests/test_mcp_http_health.py](../../../../sources/ncz-os__mnemos/tests/test_mcp_http_health.py)<br>[tests/test_mcp_namespace_isolation.py](../../../../sources/ncz-os__mnemos/tests/test_mcp_namespace_isolation.py)<br>[tests/test_mcp_nats_sse.py](../../../../sources/ncz-os__mnemos/tests/test_mcp_nats_sse.py)<br>[tests/test_mcp_path_traversal.py](../../../../sources/ncz-os__mnemos/tests/test_mcp_path_traversal.py) |
| retrieval | 59 | [ANTI_MEMORY_POISONING.md](../../../../sources/ncz-os__mnemos/ANTI_MEMORY_POISONING.md)<br>[tests/test_dag_cross_memory.py](../../../../sources/ncz-os__mnemos/tests/test_dag_cross_memory.py)<br>[tests/test_get_memory_accept_negotiation.py](../../../../sources/ncz-os__mnemos/tests/test_get_memory_accept_negotiation.py)<br>[tests/test_ingest_nats_intents.py](../../../../sources/ncz-os__mnemos/tests/test_ingest_nats_intents.py)<br>[tests/test_ingest_owner_namespace.py](../../../../sources/ncz-os__mnemos/tests/test_ingest_owner_namespace.py)<br>[tests/test_installer_embedding_dim.py](../../../../sources/ncz-os__mnemos/tests/test_installer_embedding_dim.py)<br>[tests/test_mcp_get_memory_format.py](../../../../sources/ncz-os__mnemos/tests/test_mcp_get_memory_format.py)<br>[tests/test_memory_update_request_no_quality_rating.py](../../../../sources/ncz-os__mnemos/tests/test_memory_update_request_no_quality_rating.py) |
| spec | 16 | [QUICK_START_REQUIREMENTS.md](../../../../sources/ncz-os__mnemos/QUICK_START_REQUIREMENTS.md)<br>[REQUIREMENTS_COMPARISON.md](../../../../sources/ncz-os__mnemos/REQUIREMENTS_COMPARISON.md)<br>[requirements-phi.txt](../../../../sources/ncz-os__mnemos/requirements-phi.txt)<br>[requirements.txt](../../../../sources/ncz-os__mnemos/requirements.txt)<br>[ROADMAP.md](../../../../sources/ncz-os__mnemos/ROADMAP.md)<br>[SYSTEM_REQUIREMENTS.md](../../../../sources/ncz-os__mnemos/SYSTEM_REQUIREMENTS.md)<br>[scripts/merge_split_requirements.py](../../../../sources/ncz-os__mnemos/scripts/merge_split_requirements.py)<br>[docs/DREAM_STATE_DESIGN.md](../../../../sources/ncz-os__mnemos/docs/DREAM_STATE_DESIGN.md) |
| eval | 267 | [tests/__init__.py](../../../../sources/ncz-os__mnemos/tests/__init__.py)<br>[tests/_fake_backend.py](../../../../sources/ncz-os__mnemos/tests/_fake_backend.py)<br>[tests/conftest.py](../../../../sources/ncz-os__mnemos/tests/conftest.py)<br>[tests/test_acl_routes.py](../../../../sources/ncz-os__mnemos/tests/test_acl_routes.py)<br>[tests/test_admin_compression_enqueue.py](../../../../sources/ncz-os__mnemos/tests/test_admin_compression_enqueue.py)<br>[tests/test_admin_decay.py](../../../../sources/ncz-os__mnemos/tests/test_admin_decay.py)<br>[tests/test_admin_deletion_requests.py](../../../../sources/ncz-os__mnemos/tests/test_admin_deletion_requests.py)<br>[tests/test_admin_federation_role.py](../../../../sources/ncz-os__mnemos/tests/test_admin_federation_role.py) |
| security | 82 | [SECURITY.md](../../../../sources/ncz-os__mnemos/SECURITY.md)<br>[tests/test_audit_crypto.py](../../../../sources/ncz-os__mnemos/tests/test_audit_crypto.py)<br>[tests/test_audit_endpoints.py](../../../../sources/ncz-os__mnemos/tests/test_audit_endpoints.py)<br>[tests/test_audit_health.py](../../../../sources/ncz-os__mnemos/tests/test_audit_health.py)<br>[tests/test_audit_merkle_proof.py](../../../../sources/ncz-os__mnemos/tests/test_audit_merkle_proof.py)<br>[tests/test_audit_repo_methods.py](../../../../sources/ncz-os__mnemos/tests/test_audit_repo_methods.py)<br>[tests/test_audit_route_helper.py](../../../../sources/ncz-os__mnemos/tests/test_audit_route_helper.py)<br>[tests/test_audit_sealer.py](../../../../sources/ncz-os__mnemos/tests/test_audit_sealer.py) |
| ci | 5 | [.gitlab-ci.yml](../../../../sources/ncz-os__mnemos/.gitlab-ci.yml)<br>[.github/workflows/mnemosctl-build.yml](../../../../sources/ncz-os__mnemos/.github/workflows/mnemosctl-build.yml)<br>[.github/workflows/pr-check.yml](../../../../sources/ncz-os__mnemos/.github/workflows/pr-check.yml)<br>[.github/workflows/release-images.yml](../../../../sources/ncz-os__mnemos/.github/workflows/release-images.yml)<br>[.github/workflows/release.yml](../../../../sources/ncz-os__mnemos/.github/workflows/release.yml) |
| container | 19 | [docker-compose.staging.yml](../../../../sources/ncz-os__mnemos/docker-compose.staging.yml)<br>[docker-compose.yml](../../../../sources/ncz-os__mnemos/docker-compose.yml)<br>[Dockerfile](../../../../sources/ncz-os__mnemos/Dockerfile)<br>[Dockerfile.core](../../../../sources/ncz-os__mnemos/Dockerfile.core)<br>[Dockerfile.enterprise](../../../../sources/ncz-os__mnemos/Dockerfile.enterprise)<br>[Dockerfile.everything](../../../../sources/ncz-os__mnemos/Dockerfile.everything)<br>[Dockerfile.full](../../../../sources/ncz-os__mnemos/Dockerfile.full)<br>[Dockerfile.oracle](../../../../sources/ncz-os__mnemos/Dockerfile.oracle) |
| instruction | 3 | [AGENTS.md](../../../../sources/ncz-os__mnemos/AGENTS.md)<br>[integrations/zeroclaw/AGENTS.md.snippet](../../../../sources/ncz-os__mnemos/integrations/zeroclaw/AGENTS.md.snippet)<br>[integrations/openclaw/AGENTS.md.snippet](../../../../sources/ncz-os__mnemos/integrations/openclaw/AGENTS.md.snippet) |
| docs | 112 | [README.md](../../../../sources/ncz-os__mnemos/README.md)<br>[mnemos-rust-ext/README.md](../../../../sources/ncz-os__mnemos/mnemos-rust-ext/README.md)<br>[mnemos/tools/README.md](../../../../sources/ncz-os__mnemos/mnemos/tools/README.md)<br>[mnemos/tools/backup/README.md](../../../../sources/ncz-os__mnemos/mnemos/tools/backup/README.md)<br>[integrations/README.md](../../../../sources/ncz-os__mnemos/integrations/README.md)<br>[integrations/zeroclaw/README.md](../../../../sources/ncz-os__mnemos/integrations/zeroclaw/README.md)<br>[integrations/openclaw/README.md](../../../../sources/ncz-os__mnemos/integrations/openclaw/README.md)<br>[integrations/hermes/README.md](../../../../sources/ncz-os__mnemos/integrations/hermes/README.md) |
| config | 8 | [Makefile](../../../../sources/ncz-os__mnemos/Makefile)<br>[pyproject.toml](../../../../sources/ncz-os__mnemos/pyproject.toml)<br>[requirements-phi.txt](../../../../sources/ncz-os__mnemos/requirements-phi.txt)<br>[requirements.txt](../../../../sources/ncz-os__mnemos/requirements.txt)<br>[mnemos-rust-ext/Cargo.lock](../../../../sources/ncz-os__mnemos/mnemos-rust-ext/Cargo.lock)<br>[mnemos-rust-ext/Cargo.toml](../../../../sources/ncz-os__mnemos/mnemos-rust-ext/Cargo.toml)<br>[mnemos-rust-ext/pyproject.toml](../../../../sources/ncz-os__mnemos/mnemos-rust-ext/pyproject.toml)<br>[cli/mnemosctl/Cargo.toml](../../../../sources/ncz-os__mnemos/cli/mnemosctl/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 267 | [tests/__init__.py](../../../../sources/ncz-os__mnemos/tests/__init__.py)<br>[tests/_fake_backend.py](../../../../sources/ncz-os__mnemos/tests/_fake_backend.py)<br>[tests/conftest.py](../../../../sources/ncz-os__mnemos/tests/conftest.py)<br>[tests/test_acl_routes.py](../../../../sources/ncz-os__mnemos/tests/test_acl_routes.py)<br>[tests/test_admin_compression_enqueue.py](../../../../sources/ncz-os__mnemos/tests/test_admin_compression_enqueue.py)<br>[tests/test_admin_decay.py](../../../../sources/ncz-os__mnemos/tests/test_admin_decay.py) |
| CI workflow | 5 | [.gitlab-ci.yml](../../../../sources/ncz-os__mnemos/.gitlab-ci.yml)<br>[.github/workflows/mnemosctl-build.yml](../../../../sources/ncz-os__mnemos/.github/workflows/mnemosctl-build.yml)<br>[.github/workflows/pr-check.yml](../../../../sources/ncz-os__mnemos/.github/workflows/pr-check.yml)<br>[.github/workflows/release-images.yml](../../../../sources/ncz-os__mnemos/.github/workflows/release-images.yml)<br>[.github/workflows/release.yml](../../../../sources/ncz-os__mnemos/.github/workflows/release.yml) |
| 컨테이너/배포 | 19 | [docker-compose.staging.yml](../../../../sources/ncz-os__mnemos/docker-compose.staging.yml)<br>[docker-compose.yml](../../../../sources/ncz-os__mnemos/docker-compose.yml)<br>[Dockerfile](../../../../sources/ncz-os__mnemos/Dockerfile)<br>[Dockerfile.core](../../../../sources/ncz-os__mnemos/Dockerfile.core)<br>[Dockerfile.enterprise](../../../../sources/ncz-os__mnemos/Dockerfile.enterprise)<br>[Dockerfile.everything](../../../../sources/ncz-os__mnemos/Dockerfile.everything) |
| 보안/정책 | 82 | [SECURITY.md](../../../../sources/ncz-os__mnemos/SECURITY.md)<br>[tests/test_audit_crypto.py](../../../../sources/ncz-os__mnemos/tests/test_audit_crypto.py)<br>[tests/test_audit_endpoints.py](../../../../sources/ncz-os__mnemos/tests/test_audit_endpoints.py)<br>[tests/test_audit_health.py](../../../../sources/ncz-os__mnemos/tests/test_audit_health.py)<br>[tests/test_audit_merkle_proof.py](../../../../sources/ncz-os__mnemos/tests/test_audit_merkle_proof.py)<br>[tests/test_audit_repo_methods.py](../../../../sources/ncz-os__mnemos/tests/test_audit_repo_methods.py) |
| 에이전트 지시문 | 3 | [AGENTS.md](../../../../sources/ncz-os__mnemos/AGENTS.md)<br>[integrations/zeroclaw/AGENTS.md.snippet](../../../../sources/ncz-os__mnemos/integrations/zeroclaw/AGENTS.md.snippet)<br>[integrations/openclaw/AGENTS.md.snippet](../../../../sources/ncz-os__mnemos/integrations/openclaw/AGENTS.md.snippet) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/test_doc_mcp_tool_count.py`, `tests/test_mcp_audit_log.py`, `tests/test_mcp_audit_route_trust_boundary.py`.
2. entrypoint를 따라 실행 흐름 확인: `mnemos/installer/__main__.py`, `mnemos/cli/main.py`, `mnemos/api/main.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `SKILL.md`, `mnemos/tools/knossos_mcp.py`.
4. retrieval/memory/indexing 확인: `ANTI_MEMORY_POISONING.md`, `tests/test_dag_cross_memory.py`, `tests/test_get_memory_accept_negotiation.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/_fake_backend.py`, `tests/conftest.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Production grade memory operating system for agentic AI. Interoperates with every major framework via MCP, OpenAI compat. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, Dockerfile, docker-compose.yml, Makefile이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
