# cbcoutinho/nextcloud-mcp-server 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Nextcloud MCP Server

## 요약

- 조사 단위: `sources/cbcoutinho__nextcloud-mcp-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 617 files, 83 directories, depth score 120, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=tools/rag_eval_cli.py, tests/unit/test_chunk_bbox_helper.py, tests/unit/test_chunk_context_offset_gate.py이고, 의존성 단서는 openai, anthropic, claude, mcp, langchain, next, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | cbcoutinho/nextcloud-mcp-server |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Python |
| Stars | 272 |
| Forks | 45 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/cbcoutinho__nextcloud-mcp-server](../../../../sources/cbcoutinho__nextcloud-mcp-server) |
| 기존 보고서 | [reports/global-trending/repositories/cbcoutinho__nextcloud-mcp-server.md](../../../global-trending/repositories/cbcoutinho__nextcloud-mcp-server.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 617 / 83 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .claude, .github, alembic, app-hooks, claude-funnel, docs, infra, keycloak, mcpb, nextcloud_mcp_server, scripts, tests, third_party, tools |
| 상위 확장자 | .py: 443, .md: 71, .sh: 24, .yml: 16, .tf: 13, .json: 8, .png: 8, (none): 8, .html: 7, .conf: 2, .example: 2, .sample: 2 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 111 |
| docs | documentation surface | 67 |
| .github | ci surface | 1 |
| alembic | top-level component | 1 |
| app-hooks | top-level component | 1 |
| claude-funnel | top-level component | 1 |
| infra | top-level component | 1 |
| keycloak | top-level component | 1 |
| mcpb | top-level component | 1 |
| nextcloud_mcp_server | source boundary | 1 |
| scripts | top-level component | 1 |
| third_party | top-level component | 1 |
| tools | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | pyproject.toml | nextcloud-mcp-server | nextcloud-mcp-server |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic, claude |
| agentProtocols | mcp |
| agentFrameworks | langchain |
| vectorStores | qdrant |
| modelRuntime | 없음 |
| webRuntime | next |
| developerSurface | click |
| observability | opentelemetry, prometheus |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [tools/rag_eval_cli.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tools/rag_eval_cli.py) | retrieval signal |
| retrieval | [tests/unit/test_chunk_bbox_helper.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/unit/test_chunk_bbox_helper.py) | retrieval signal |
| retrieval | [tests/unit/test_chunk_context_offset_gate.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/unit/test_chunk_context_offset_gate.py) | retrieval signal |
| retrieval | [tests/unit/test_embedding_metrics.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/unit/test_embedding_metrics.py) | retrieval signal |
| docs | [README.md](../../../../sources/cbcoutinho__nextcloud-mcp-server/README.md) | docs signal |
| docs | [tests/rag_evaluation/README.md](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/rag_evaluation/README.md) | docs signal |
| docs | [tests/load/README_OAUTH.md](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/load/README_OAUTH.md) | docs signal |
| docs | [infra/terraform/README.md](../../../../sources/cbcoutinho__nextcloud-mcp-server/infra/terraform/README.md) | docs signal |
| eval | [tests/__init__.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/__init__.py) | eval signal |
| eval | [tests/conftest.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/conftest.py) | eval signal |
| eval | [tests/test_cli.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/test_cli.py) | eval signal |
| config | [pyproject.toml](../../../../sources/cbcoutinho__nextcloud-mcp-server/pyproject.toml) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 8 | [tools/rag_eval_cli.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tools/rag_eval_cli.py)<br>[nextcloud_mcp_server/context.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/nextcloud_mcp_server/context.py)<br>[nextcloud_mcp_server/vector/queue/memory.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/nextcloud_mcp_server/vector/queue/memory.py)<br>[nextcloud_mcp_server/search/context.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/nextcloud_mcp_server/search/context.py)<br>[nextcloud_mcp_server/auth/context_helper.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/nextcloud_mcp_server/auth/context_helper.py)<br>[.claude/skills/pre-push-review/SKILL.md](../../../../sources/cbcoutinho__nextcloud-mcp-server/.claude/skills/pre-push-review/SKILL.md)<br>[.claude/hooks/sonar-secrets/build-scripts/pretool-secrets.sh](../../../../sources/cbcoutinho__nextcloud-mcp-server/.claude/hooks/sonar-secrets/build-scripts/pretool-secrets.sh)<br>[.claude/hooks/sonar-secrets/build-scripts/prompt-secrets.sh](../../../../sources/cbcoutinho__nextcloud-mcp-server/.claude/hooks/sonar-secrets/build-scripts/prompt-secrets.sh) |
| mcp | 224 | [tests/server/test_calendar_events_mcp.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/server/test_calendar_events_mcp.py)<br>[tests/server/test_calendar_todos_mcp.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/server/test_calendar_todos_mcp.py)<br>[tests/server/test_collectives_mcp.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/server/test_collectives_mcp.py)<br>[tests/server/test_contacts_mcp.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/server/test_contacts_mcp.py)<br>[tests/server/test_cookbook_mcp.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/server/test_cookbook_mcp.py)<br>[tests/server/test_deck_mcp.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/server/test_deck_mcp.py)<br>[tests/server/test_mcp.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/server/test_mcp.py)<br>[tests/server/test_talk_mcp.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/server/test_talk_mcp.py) |
| retrieval | 96 | [tools/rag_eval_cli.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tools/rag_eval_cli.py)<br>[tests/unit/test_chunk_bbox_helper.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/unit/test_chunk_bbox_helper.py)<br>[tests/unit/test_chunk_context_offset_gate.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/unit/test_chunk_context_offset_gate.py)<br>[tests/unit/test_embedding_metrics.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/unit/test_embedding_metrics.py)<br>[tests/unit/test_embedding_service.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/unit/test_embedding_service.py)<br>[tests/unit/test_ingest_queue_depth_metric.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/unit/test_ingest_queue_depth_metric.py)<br>[tests/unit/test_management_chunk_context_endpoint.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/unit/test_management_chunk_context_endpoint.py)<br>[tests/unit/test_vector_sync_purge_route.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/unit/test_vector_sync_purge_route.py) |
| spec | 32 | [docs/ADR-001-enhanced-note-search.md](../../../../sources/cbcoutinho__nextcloud-mcp-server/docs/ADR-001-enhanced-note-search.md)<br>[docs/ADR-002-vector-sync-authentication.md](../../../../sources/cbcoutinho__nextcloud-mcp-server/docs/ADR-002-vector-sync-authentication.md)<br>[docs/ADR-003-vector-database-semantic-search.md](../../../../sources/cbcoutinho__nextcloud-mcp-server/docs/ADR-003-vector-database-semantic-search.md)<br>[docs/ADR-004-mcp-application-oauth.md](../../../../sources/cbcoutinho__nextcloud-mcp-server/docs/ADR-004-mcp-application-oauth.md)<br>[docs/ADR-005-token-audience-validation.md](../../../../sources/cbcoutinho__nextcloud-mcp-server/docs/ADR-005-token-audience-validation.md)<br>[docs/ADR-006-progressive-consent-elicitation.md](../../../../sources/cbcoutinho__nextcloud-mcp-server/docs/ADR-006-progressive-consent-elicitation.md)<br>[docs/ADR-007-background-vector-sync-job-management.md](../../../../sources/cbcoutinho__nextcloud-mcp-server/docs/ADR-007-background-vector-sync-job-management.md)<br>[docs/ADR-008-mcp-sampling-for-semantic-search.md](../../../../sources/cbcoutinho__nextcloud-mcp-server/docs/ADR-008-mcp-sampling-for-semantic-search.md) |
| eval | 278 | [tools/rag_eval_cli.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tools/rag_eval_cli.py)<br>[tests/__init__.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/conftest.py)<br>[tests/test_cli.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/test_cli.py)<br>[tests/test_models.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/test_models.py)<br>[tests/unit/__init__.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/unit/__init__.py)<br>[tests/unit/conftest.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/unit/conftest.py)<br>[tests/unit/test_acl_hash.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/unit/test_acl_hash.py) |
| security | 68 | [env.sample.oauth-multi-user](../../../../sources/cbcoutinho__nextcloud-mcp-server/env.sample.oauth-multi-user)<br>[SECURITY.md](../../../../sources/cbcoutinho__nextcloud-mcp-server/SECURITY.md)<br>[tests/unit/test_app_password_loginname_auth.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/unit/test_app_password_loginname_auth.py)<br>[tests/unit/test_auth_tools.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/unit/test_auth_tools.py)<br>[tests/unit/test_basic_auth_middleware.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/unit/test_basic_auth_middleware.py)<br>[tests/unit/test_browser_oauth_routes.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/unit/test_browser_oauth_routes.py)<br>[tests/unit/test_browser_oauth_xss.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/unit/test_browser_oauth_xss.py)<br>[tests/unit/test_hybrid_auth_setup.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/unit/test_hybrid_auth_setup.py) |
| ci | 9 | [.github/workflows/bump-version.yml](../../../../sources/cbcoutinho__nextcloud-mcp-server/.github/workflows/bump-version.yml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/cbcoutinho__nextcloud-mcp-server/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/cbcoutinho__nextcloud-mcp-server/.github/workflows/claude.yml)<br>[.github/workflows/docker-build-publish.yml](../../../../sources/cbcoutinho__nextcloud-mcp-server/.github/workflows/docker-build-publish.yml)<br>[.github/workflows/pact-record-deployment.yml](../../../../sources/cbcoutinho__nextcloud-mcp-server/.github/workflows/pact-record-deployment.yml)<br>[.github/workflows/pact.yml](../../../../sources/cbcoutinho__nextcloud-mcp-server/.github/workflows/pact.yml)<br>[.github/workflows/rag-evaluation.yml](../../../../sources/cbcoutinho__nextcloud-mcp-server/.github/workflows/rag-evaluation.yml)<br>[.github/workflows/release.yml](../../../../sources/cbcoutinho__nextcloud-mcp-server/.github/workflows/release.yml) |
| container | 3 | [docker-compose.ci.yml](../../../../sources/cbcoutinho__nextcloud-mcp-server/docker-compose.ci.yml)<br>[docker-compose.yml](../../../../sources/cbcoutinho__nextcloud-mcp-server/docker-compose.yml)<br>[Dockerfile](../../../../sources/cbcoutinho__nextcloud-mcp-server/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/cbcoutinho__nextcloud-mcp-server/CLAUDE.md) |
| docs | 71 | [README.md](../../../../sources/cbcoutinho__nextcloud-mcp-server/README.md)<br>[tests/rag_evaluation/README.md](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/rag_evaluation/README.md)<br>[tests/load/README_OAUTH.md](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/load/README_OAUTH.md)<br>[infra/terraform/README.md](../../../../sources/cbcoutinho__nextcloud-mcp-server/infra/terraform/README.md)<br>[infra/terraform/nextcloud-mcp-server/README.md](../../../../sources/cbcoutinho__nextcloud-mcp-server/infra/terraform/nextcloud-mcp-server/README.md)<br>[infra/terraform/nextcloud-mcp-deployer-role/README.md](../../../../sources/cbcoutinho__nextcloud-mcp-server/infra/terraform/nextcloud-mcp-deployer-role/README.md)<br>[docs/ADR-001-enhanced-note-search.md](../../../../sources/cbcoutinho__nextcloud-mcp-server/docs/ADR-001-enhanced-note-search.md)<br>[docs/ADR-002-vector-sync-authentication.md](../../../../sources/cbcoutinho__nextcloud-mcp-server/docs/ADR-002-vector-sync-authentication.md) |
| config | 2 | [pyproject.toml](../../../../sources/cbcoutinho__nextcloud-mcp-server/pyproject.toml)<br>[uv.lock](../../../../sources/cbcoutinho__nextcloud-mcp-server/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 278 | [tools/rag_eval_cli.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tools/rag_eval_cli.py)<br>[tests/__init__.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/conftest.py)<br>[tests/test_cli.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/test_cli.py)<br>[tests/test_models.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/test_models.py)<br>[tests/unit/__init__.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/unit/__init__.py) |
| CI workflow | 9 | [.github/workflows/bump-version.yml](../../../../sources/cbcoutinho__nextcloud-mcp-server/.github/workflows/bump-version.yml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/cbcoutinho__nextcloud-mcp-server/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/cbcoutinho__nextcloud-mcp-server/.github/workflows/claude.yml)<br>[.github/workflows/docker-build-publish.yml](../../../../sources/cbcoutinho__nextcloud-mcp-server/.github/workflows/docker-build-publish.yml)<br>[.github/workflows/pact-record-deployment.yml](../../../../sources/cbcoutinho__nextcloud-mcp-server/.github/workflows/pact-record-deployment.yml)<br>[.github/workflows/pact.yml](../../../../sources/cbcoutinho__nextcloud-mcp-server/.github/workflows/pact.yml) |
| 컨테이너/배포 | 3 | [docker-compose.ci.yml](../../../../sources/cbcoutinho__nextcloud-mcp-server/docker-compose.ci.yml)<br>[docker-compose.yml](../../../../sources/cbcoutinho__nextcloud-mcp-server/docker-compose.yml)<br>[Dockerfile](../../../../sources/cbcoutinho__nextcloud-mcp-server/Dockerfile) |
| 보안/정책 | 68 | [env.sample.oauth-multi-user](../../../../sources/cbcoutinho__nextcloud-mcp-server/env.sample.oauth-multi-user)<br>[SECURITY.md](../../../../sources/cbcoutinho__nextcloud-mcp-server/SECURITY.md)<br>[tests/unit/test_app_password_loginname_auth.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/unit/test_app_password_loginname_auth.py)<br>[tests/unit/test_auth_tools.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/unit/test_auth_tools.py)<br>[tests/unit/test_basic_auth_middleware.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/unit/test_basic_auth_middleware.py)<br>[tests/unit/test_browser_oauth_routes.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/unit/test_browser_oauth_routes.py) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/cbcoutinho__nextcloud-mcp-server/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tools/rag_eval_cli.py`, `tests/unit/test_chunk_bbox_helper.py`, `tests/unit/test_chunk_context_offset_gate.py`.
2. agent/tool runtime 매핑: `tools/rag_eval_cli.py`, `nextcloud_mcp_server/context.py`, `nextcloud_mcp_server/vector/queue/memory.py`.
3. retrieval/memory/indexing 확인: `tools/rag_eval_cli.py`, `tests/unit/test_chunk_bbox_helper.py`, `tests/unit/test_chunk_context_offset_gate.py`.
4. test/eval 파일로 동작 검증: `tools/rag_eval_cli.py`, `tests/__init__.py`, `tests/conftest.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Nextcloud MCP Server. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, README.md, CLAUDE.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
