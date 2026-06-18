# cbcoutinho/nextcloud-mcp-server Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Nextcloud MCP Server

## 요약

- 조사 단위: `sources/cbcoutinho__nextcloud-mcp-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 617 files, 83 directories, depth score 126, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=tools/rag_eval_cli.py, tests/unit/test_chunk_bbox_helper.py, tests/unit/test_chunk_context_offset_gate.py이고, 의존성 단서는 openai, anthropic, claude, mcp, langchain, next, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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


## Repository Context

| Field | Value |
| --- | --- |
| Repository | cbcoutinho/nextcloud-mcp-server |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Python |
| Stars | 272 |
| Forks | 45 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/cbcoutinho__nextcloud-mcp-server](../../../../sources/cbcoutinho__nextcloud-mcp-server) |
| Existing report | [reports/global-trending/repositories/cbcoutinho__nextcloud-mcp-server.md](../../../global-trending/repositories/cbcoutinho__nextcloud-mcp-server.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 617 / 83 |
| Max observed depth | 5 |
| Top directories | .claude, .github, alembic, app-hooks, claude-funnel, docs, infra, keycloak, mcpb, nextcloud_mcp_server, scripts, tests, third_party, tools |
| Top extensions | .py: 443, .md: 71, .sh: 24, .yml: 16, .tf: 13, .json: 8, .png: 8, (none): 8, .html: 7, .conf: 2, .example: 2, .sample: 2 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy, ui/extension surface |

### Components

| Component | Role | Signal count |
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


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | pyproject.toml | nextcloud-mcp-server | nextcloud-mcp-server |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic, claude |
| agentProtocols | mcp |
| agentFrameworks | langchain |
| vectorStores | qdrant |
| modelRuntime | none |
| webRuntime | next |
| developerSurface | click |
| observability | opentelemetry, prometheus |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
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


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 278 | [tools/rag_eval_cli.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tools/rag_eval_cli.py)<br>[tests/__init__.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/conftest.py)<br>[tests/test_cli.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/test_cli.py)<br>[tests/test_models.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/test_models.py)<br>[tests/unit/__init__.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/unit/__init__.py) |
| CI workflows | 9 | [.github/workflows/bump-version.yml](../../../../sources/cbcoutinho__nextcloud-mcp-server/.github/workflows/bump-version.yml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/cbcoutinho__nextcloud-mcp-server/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/cbcoutinho__nextcloud-mcp-server/.github/workflows/claude.yml)<br>[.github/workflows/docker-build-publish.yml](../../../../sources/cbcoutinho__nextcloud-mcp-server/.github/workflows/docker-build-publish.yml)<br>[.github/workflows/pact-record-deployment.yml](../../../../sources/cbcoutinho__nextcloud-mcp-server/.github/workflows/pact-record-deployment.yml)<br>[.github/workflows/pact.yml](../../../../sources/cbcoutinho__nextcloud-mcp-server/.github/workflows/pact.yml) |
| Containers / deploy | 3 | [docker-compose.ci.yml](../../../../sources/cbcoutinho__nextcloud-mcp-server/docker-compose.ci.yml)<br>[docker-compose.yml](../../../../sources/cbcoutinho__nextcloud-mcp-server/docker-compose.yml)<br>[Dockerfile](../../../../sources/cbcoutinho__nextcloud-mcp-server/Dockerfile) |
| Security / policy | 68 | [env.sample.oauth-multi-user](../../../../sources/cbcoutinho__nextcloud-mcp-server/env.sample.oauth-multi-user)<br>[SECURITY.md](../../../../sources/cbcoutinho__nextcloud-mcp-server/SECURITY.md)<br>[tests/unit/test_app_password_loginname_auth.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/unit/test_app_password_loginname_auth.py)<br>[tests/unit/test_auth_tools.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/unit/test_auth_tools.py)<br>[tests/unit/test_basic_auth_middleware.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/unit/test_basic_auth_middleware.py)<br>[tests/unit/test_browser_oauth_routes.py](../../../../sources/cbcoutinho__nextcloud-mcp-server/tests/unit/test_browser_oauth_routes.py) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/cbcoutinho__nextcloud-mcp-server/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tools/rag_eval_cli.py`, `tests/unit/test_chunk_bbox_helper.py`, `tests/unit/test_chunk_context_offset_gate.py`.
2. Map agent/tool runtime through: `tools/rag_eval_cli.py`, `nextcloud_mcp_server/context.py`, `nextcloud_mcp_server/vector/queue/memory.py`.
3. Inspect retrieval/memory/indexing through: `tools/rag_eval_cli.py`, `tests/unit/test_chunk_bbox_helper.py`, `tests/unit/test_chunk_context_offset_gate.py`.
4. Verify behavior through test/eval files: `tools/rag_eval_cli.py`, `tests/__init__.py`, `tests/conftest.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Nextcloud MCP Server. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, README.md, CLAUDE.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
