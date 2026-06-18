# puppyone-ai/puppyone 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Context drive for your AI agents

## 요약

- 조사 단위: `sources/puppyone-ai__puppyone` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 3,009 files, 775 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 retrieval=tools/puppy_model/qllama/embedding.py, tools/puppy_model/examples/frontend_demo/index.html, supabase/migrations/20260526000000_version_text_index.sql이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | puppyone-ai/puppyone |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | TypeScript |
| Stars | 316 |
| Forks | 50 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/puppyone-ai__puppyone](../../../../sources/puppyone-ai__puppyone) |
| 기존 보고서 | [reports/global-trending/repositories/puppyone-ai__puppyone.md](../../../global-trending/repositories/puppyone-ai__puppyone.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 3009 / 775 |
| 관측 최대 깊이 | 12 |
| 상위 디렉터리 | .github, archived, assets, backend, cli, demo, desktop, docker, docs, e2e, frontend, packages, sandbox, scripts, skills, supabase, tests, tools |
| 상위 확장자 | .py: 1011, .tsx: 692, .ts: 326, .md: 266, .json: 163, .svg: 122, .png: 73, .sql: 73, .js: 52, .txt: 45, (none): 25, .mjs: 19 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 58 |
| tests | validation surface | 3 |
| packages/data-core | packages workspace | 2 |
| packages/data-ui | packages workspace | 2 |
| packages/editor-ui | packages workspace | 2 |
| .github | ci surface | 1 |
| archived | top-level component | 1 |
| assets | top-level component | 1 |
| backend | top-level component | 1 |
| cli | top-level component | 1 |
| demo | top-level component | 1 |
| desktop | top-level component | 1 |
| docker | documentation surface | 1 |
| e2e | validation surface | 1 |
| frontend | top-level component | 1 |
| packages | source boundary | 1 |
| sandbox | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


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
| retrieval | [tools/puppy_model/qllama/embedding.py](../../../../sources/puppyone-ai__puppyone/tools/puppy_model/qllama/embedding.py) | retrieval signal |
| retrieval | [tools/puppy_model/examples/frontend_demo/index.html](../../../../sources/puppyone-ai__puppyone/tools/puppy_model/examples/frontend_demo/index.html) | retrieval signal |
| retrieval | [supabase/migrations/20260526000000_version_text_index.sql](../../../../sources/puppyone-ai__puppyone/supabase/migrations/20260526000000_version_text_index.sql) | retrieval signal |
| retrieval | [supabase/migrations/20260531020000_drop_unused_tsvector_index.sql](../../../../sources/puppyone-ai__puppyone/supabase/migrations/20260531020000_drop_unused_tsvector_index.sql) | retrieval signal |
| entrypoints | [tools/puppy_model/qllama/main.py](../../../../sources/puppyone-ai__puppyone/tools/puppy_model/qllama/main.py) | entrypoints signal |
| entrypoints | [packages/editor-ui/src/index.ts](../../../../sources/puppyone-ai__puppyone/packages/editor-ui/src/index.ts) | entrypoints signal |
| entrypoints | [packages/data-ui/src/index.ts](../../../../sources/puppyone-ai__puppyone/packages/data-ui/src/index.ts) | entrypoints signal |
| entrypoints | [packages/data-core/src/index.ts](../../../../sources/puppyone-ai__puppyone/packages/data-core/src/index.ts) | entrypoints signal |
| docs | [README.md](../../../../sources/puppyone-ai__puppyone/README.md) | docs signal |
| docs | [tools/puppy_utils/README.md](../../../../sources/puppyone-ai__puppyone/tools/puppy_utils/README.md) | docs signal |
| docs | [tools/puppy_model/README.md](../../../../sources/puppyone-ai__puppyone/tools/puppy_model/README.md) | docs signal |
| docs | [tests/e2e/README.md](../../../../sources/puppyone-ai__puppyone/tests/e2e/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 12 | [tools/puppy_model/qllama/main.py](../../../../sources/puppyone-ai__puppyone/tools/puppy_model/qllama/main.py)<br>[packages/editor-ui/src/index.ts](../../../../sources/puppyone-ai__puppyone/packages/editor-ui/src/index.ts)<br>[packages/data-ui/src/index.ts](../../../../sources/puppyone-ai__puppyone/packages/data-ui/src/index.ts)<br>[packages/data-core/src/index.ts](../../../../sources/puppyone-ai__puppyone/packages/data-core/src/index.ts)<br>[desktop/src-tauri/src/main.rs](../../../../sources/puppyone-ai__puppyone/desktop/src-tauri/src/main.rs)<br>[desktop/src-tauri/crates/recorder-core/src/lib.rs](../../../../sources/puppyone-ai__puppyone/desktop/src-tauri/crates/recorder-core/src/lib.rs)<br>[desktop/src/App.tsx](../../../../sources/puppyone-ai__puppyone/desktop/src/App.tsx)<br>[desktop/src/main.tsx](../../../../sources/puppyone-ai__puppyone/desktop/src/main.tsx) |
| agentRuntime | 349 | [AGENTS.md](../../../../sources/puppyone-ai__puppyone/AGENTS.md)<br>[tools/puppy_utils/__init__.py](../../../../sources/puppyone-ai__puppyone/tools/puppy_utils/__init__.py)<br>[tools/puppy_utils/config.py](../../../../sources/puppyone-ai__puppyone/tools/puppy_utils/config.py)<br>[tools/puppy_utils/example.py](../../../../sources/puppyone-ai__puppyone/tools/puppy_utils/example.py)<br>[tools/puppy_utils/logger.py](../../../../sources/puppyone-ai__puppyone/tools/puppy_utils/logger.py)<br>[tools/puppy_utils/puppy_exception.py](../../../../sources/puppyone-ai__puppyone/tools/puppy_utils/puppy_exception.py)<br>[tools/puppy_utils/README.md](../../../../sources/puppyone-ai__puppyone/tools/puppy_utils/README.md)<br>[tools/puppy_utils/setup.py](../../../../sources/puppyone-ai__puppyone/tools/puppy_utils/setup.py) |
| mcp | 100 | [demo/content-factory/raw/mcp-protocol-research.md](../../../../sources/puppyone-ai__puppyone/demo/content-factory/raw/mcp-protocol-research.md)<br>[demo/content-factory/draft/build-mcp-server-in-15-min.md](../../../../sources/puppyone-ai__puppyone/demo/content-factory/draft/build-mcp-server-in-15-min.md)<br>[backend/tests/mcp_service/conftest.py](../../../../sources/puppyone-ai__puppyone/backend/tests/mcp_service/conftest.py)<br>[backend/tests/mcp_service/test_config_loader_v2_fallback.py](../../../../sources/puppyone-ai__puppyone/backend/tests/mcp_service/test_config_loader_v2_fallback.py)<br>[backend/tests/mcp_service/test_content_node_service_posix.py](../../../../sources/puppyone-ai__puppyone/backend/tests/mcp_service/test_content_node_service_posix.py)<br>[backend/tests/mcp_service/test_fs_tool.py](../../../../sources/puppyone-ai__puppyone/backend/tests/mcp_service/test_fs_tool.py)<br>[backend/tests/mcp_service/test_internal_posix_router.py](../../../../sources/puppyone-ai__puppyone/backend/tests/mcp_service/test_internal_posix_router.py)<br>[backend/tests/mcp_service/test_rpc_client_posix.py](../../../../sources/puppyone-ai__puppyone/backend/tests/mcp_service/test_rpc_client_posix.py) |
| retrieval | 164 | [tools/puppy_model/qllama/embedding.py](../../../../sources/puppyone-ai__puppyone/tools/puppy_model/qllama/embedding.py)<br>[tools/puppy_model/examples/frontend_demo/index.html](../../../../sources/puppyone-ai__puppyone/tools/puppy_model/examples/frontend_demo/index.html)<br>[supabase/migrations/20260526000000_version_text_index.sql](../../../../sources/puppyone-ai__puppyone/supabase/migrations/20260526000000_version_text_index.sql)<br>[supabase/migrations/20260531020000_drop_unused_tsvector_index.sql](../../../../sources/puppyone-ai__puppyone/supabase/migrations/20260531020000_drop_unused_tsvector_index.sql)<br>[packages/editor-ui/src/index.ts](../../../../sources/puppyone-ai__puppyone/packages/editor-ui/src/index.ts)<br>[packages/data-ui/src/index.ts](../../../../sources/puppyone-ai__puppyone/packages/data-ui/src/index.ts)<br>[packages/data-core/src/index.ts](../../../../sources/puppyone-ai__puppyone/packages/data-core/src/index.ts)<br>[frontend/lib/fileFormats/index.ts](../../../../sources/puppyone-ai__puppyone/frontend/lib/fileFormats/index.ts) |
| spec | 99 | [tools/puppy_model/requirements.txt](../../../../sources/puppyone-ai__puppyone/tools/puppy_model/requirements.txt)<br>[supabase/migrations/20260401000000_access_points_architecture.sql](../../../../sources/puppyone-ai__puppyone/supabase/migrations/20260401000000_access_points_architecture.sql)<br>[skills/frontend-design.md](../../../../sources/puppyone-ai__puppyone/skills/frontend-design.md)<br>[frontend/ROUTER_ARCHITECTURE.md](../../../../sources/puppyone-ai__puppyone/frontend/ROUTER_ARCHITECTURE.md)<br>[docs/proposals/PUP-5-needs-action-design.md](../../../../sources/puppyone-ai__puppyone/docs/proposals/PUP-5-needs-action-design.md)<br>[docs/proposals/PUP-multi-branch-design.md](../../../../sources/puppyone-ai__puppyone/docs/proposals/PUP-multi-branch-design.md)<br>[docs/proposals/PUP-sync-trigger-architecture-2026-06.md](../../../../sources/puppyone-ai__puppyone/docs/proposals/PUP-sync-trigger-architecture-2026-06.md)<br>[docs/proposals/sandbox-roadmap-2026-06.md](../../../../sources/puppyone-ai__puppyone/docs/proposals/sandbox-roadmap-2026-06.md) |
| eval | 343 | [tools/puppy_model/examples/test_qllama.py](../../../../sources/puppyone-ai__puppyone/tools/puppy_model/examples/test_qllama.py)<br>[tests/e2e/README.md](../../../../sources/puppyone-ai__puppyone/tests/e2e/README.md)<br>[supabase/tests/smoke_test_triggers.sql](../../../../sources/puppyone-ai__puppyone/supabase/tests/smoke_test_triggers.sql)<br>[scripts/archaeology/test-align-migration.sh](../../../../sources/puppyone-ai__puppyone/scripts/archaeology/test-align-migration.sh)<br>[sandbox/test-data.json](../../../../sources/puppyone-ai__puppyone/sandbox/test-data.json)<br>[sandbox/scope-sync-sidecar/tests/test_e2e_local.py](../../../../sources/puppyone-ai__puppyone/sandbox/scope-sync-sidecar/tests/test_e2e_local.py)<br>`frontend/app/(main)/projects/[projectId]/monitor/page.tsx`<br>`desktop/cloud-source/frontend/app/(main)/projects/[projectId]/monitor/page.tsx` |
| security | 190 | [SECURITY.md](../../../../sources/puppyone-ai__puppyone/SECURITY.md)<br>[supabase/migrations/20260418010000_truncate_mut_audit_orphans.sql](../../../../sources/puppyone-ai__puppyone/supabase/migrations/20260418010000_truncate_mut_audit_orphans.sql)<br>[supabase/migrations/20260427000000_oauth_state_csrf.sql](../../../../sources/puppyone-ai__puppyone/supabase/migrations/20260427000000_oauth_state_csrf.sql)<br>[supabase/migrations/20260502000800_migrate_gateways_to_oauth.sql](../../../../sources/puppyone-ai__puppyone/supabase/migrations/20260502000800_migrate_gateways_to_oauth.sql)<br>[supabase/migrations/20260527020000_connector_cli_fs_policy.sql](../../../../sources/puppyone-ai__puppyone/supabase/migrations/20260527020000_connector_cli_fs_policy.sql)<br>[supabase/migrations/20260530000000_audit_logs_path_text.sql](../../../../sources/puppyone-ai__puppyone/supabase/migrations/20260530000000_audit_logs_path_text.sql)<br>[supabase/migrations/20260607000000_scope_sandbox_sessions.sql](../../../../sources/puppyone-ai__puppyone/supabase/migrations/20260607000000_scope_sandbox_sessions.sql)<br>[supabase/migrations/20260608000000_harden_connections_target_path_and_sandbox_sessions.sql](../../../../sources/puppyone-ai__puppyone/supabase/migrations/20260608000000_harden_connections_target_path_and_sandbox_sessions.sql) |
| ci | 8 | [.github/workflows/e2e.yml](../../../../sources/puppyone-ai__puppyone/.github/workflows/e2e.yml)<br>[.github/workflows/frontend-build.yml](../../../../sources/puppyone-ai__puppyone/.github/workflows/frontend-build.yml)<br>[.github/workflows/main-release-gate.yml](../../../../sources/puppyone-ai__puppyone/.github/workflows/main-release-gate.yml)<br>[.github/workflows/migrate-production.yml](../../../../sources/puppyone-ai__puppyone/.github/workflows/migrate-production.yml)<br>[.github/workflows/migrate-staging.yml](../../../../sources/puppyone-ai__puppyone/.github/workflows/migrate-staging.yml)<br>[.github/workflows/post-deploy-stress.yml](../../../../sources/puppyone-ai__puppyone/.github/workflows/post-deploy-stress.yml)<br>[.github/workflows/secret-scanning-gitleaks.yml](../../../../sources/puppyone-ai__puppyone/.github/workflows/secret-scanning-gitleaks.yml)<br>[.github/workflows/validate-migrations.yml](../../../../sources/puppyone-ai__puppyone/.github/workflows/validate-migrations.yml) |
| container | 9 | [docker-compose.yml](../../../../sources/puppyone-ai__puppyone/docker-compose.yml)<br>[sandbox/Dockerfile](../../../../sources/puppyone-ai__puppyone/sandbox/Dockerfile)<br>[sandbox/scope-fly/Dockerfile](../../../../sources/puppyone-ai__puppyone/sandbox/scope-fly/Dockerfile)<br>[frontend/Dockerfile.local](../../../../sources/puppyone-ai__puppyone/frontend/Dockerfile.local)<br>[docker/docker-compose.yml](../../../../sources/puppyone-ai__puppyone/docker/docker-compose.yml)<br>[desktop/cloud-source/frontend/Dockerfile.local](../../../../sources/puppyone-ai__puppyone/desktop/cloud-source/frontend/Dockerfile.local)<br>[backend/Dockerfile.local](../../../../sources/puppyone-ai__puppyone/backend/Dockerfile.local)<br>[archived/PuppyStorage/Dockerfile](../../../../sources/puppyone-ai__puppyone/archived/PuppyStorage/Dockerfile) |
| instruction | 5 | [AGENTS.md](../../../../sources/puppyone-ai__puppyone/AGENTS.md)<br>[CLAUDE.md](../../../../sources/puppyone-ai__puppyone/CLAUDE.md)<br>[backend/AGENTS.md](../../../../sources/puppyone-ai__puppyone/backend/AGENTS.md)<br>[backend/CLAUDE.md](../../../../sources/puppyone-ai__puppyone/backend/CLAUDE.md)<br>[backend/openspec/AGENTS.md](../../../../sources/puppyone-ai__puppyone/backend/openspec/AGENTS.md) |
| docs | 78 | [README.md](../../../../sources/puppyone-ai__puppyone/README.md)<br>[tools/puppy_utils/README.md](../../../../sources/puppyone-ai__puppyone/tools/puppy_utils/README.md)<br>[tools/puppy_model/README.md](../../../../sources/puppyone-ai__puppyone/tools/puppy_model/README.md)<br>[tests/e2e/README.md](../../../../sources/puppyone-ai__puppyone/tests/e2e/README.md)<br>[skills/README.md](../../../../sources/puppyone-ai__puppyone/skills/README.md)<br>[scripts/archaeology/README.md](../../../../sources/puppyone-ai__puppyone/scripts/archaeology/README.md)<br>[sandbox/README.md](../../../../sources/puppyone-ai__puppyone/sandbox/README.md)<br>[sandbox/scope-fly/README.md](../../../../sources/puppyone-ai__puppyone/sandbox/scope-fly/README.md) |
| config | 24 | [tools/puppy_model/requirements.txt](../../../../sources/puppyone-ai__puppyone/tools/puppy_model/requirements.txt)<br>[frontend/package.json](../../../../sources/puppyone-ai__puppyone/frontend/package.json)<br>[frontend/tsconfig.json](../../../../sources/puppyone-ai__puppyone/frontend/tsconfig.json)<br>[e2e/package.json](../../../../sources/puppyone-ai__puppyone/e2e/package.json)<br>[desktop/package.json](../../../../sources/puppyone-ai__puppyone/desktop/package.json)<br>[desktop/tsconfig.json](../../../../sources/puppyone-ai__puppyone/desktop/tsconfig.json)<br>[desktop/src-tauri/Cargo.lock](../../../../sources/puppyone-ai__puppyone/desktop/src-tauri/Cargo.lock)<br>[desktop/src-tauri/Cargo.toml](../../../../sources/puppyone-ai__puppyone/desktop/src-tauri/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 343 | [tools/puppy_model/examples/test_qllama.py](../../../../sources/puppyone-ai__puppyone/tools/puppy_model/examples/test_qllama.py)<br>[tests/e2e/README.md](../../../../sources/puppyone-ai__puppyone/tests/e2e/README.md)<br>[supabase/tests/smoke_test_triggers.sql](../../../../sources/puppyone-ai__puppyone/supabase/tests/smoke_test_triggers.sql)<br>[scripts/archaeology/test-align-migration.sh](../../../../sources/puppyone-ai__puppyone/scripts/archaeology/test-align-migration.sh)<br>[sandbox/test-data.json](../../../../sources/puppyone-ai__puppyone/sandbox/test-data.json)<br>[sandbox/scope-sync-sidecar/tests/test_e2e_local.py](../../../../sources/puppyone-ai__puppyone/sandbox/scope-sync-sidecar/tests/test_e2e_local.py) |
| CI workflow | 8 | [.github/workflows/e2e.yml](../../../../sources/puppyone-ai__puppyone/.github/workflows/e2e.yml)<br>[.github/workflows/frontend-build.yml](../../../../sources/puppyone-ai__puppyone/.github/workflows/frontend-build.yml)<br>[.github/workflows/main-release-gate.yml](../../../../sources/puppyone-ai__puppyone/.github/workflows/main-release-gate.yml)<br>[.github/workflows/migrate-production.yml](../../../../sources/puppyone-ai__puppyone/.github/workflows/migrate-production.yml)<br>[.github/workflows/migrate-staging.yml](../../../../sources/puppyone-ai__puppyone/.github/workflows/migrate-staging.yml)<br>[.github/workflows/post-deploy-stress.yml](../../../../sources/puppyone-ai__puppyone/.github/workflows/post-deploy-stress.yml) |
| 컨테이너/배포 | 9 | [docker-compose.yml](../../../../sources/puppyone-ai__puppyone/docker-compose.yml)<br>[sandbox/Dockerfile](../../../../sources/puppyone-ai__puppyone/sandbox/Dockerfile)<br>[sandbox/scope-fly/Dockerfile](../../../../sources/puppyone-ai__puppyone/sandbox/scope-fly/Dockerfile)<br>[frontend/Dockerfile.local](../../../../sources/puppyone-ai__puppyone/frontend/Dockerfile.local)<br>[docker/docker-compose.yml](../../../../sources/puppyone-ai__puppyone/docker/docker-compose.yml)<br>[desktop/cloud-source/frontend/Dockerfile.local](../../../../sources/puppyone-ai__puppyone/desktop/cloud-source/frontend/Dockerfile.local) |
| 보안/정책 | 190 | [SECURITY.md](../../../../sources/puppyone-ai__puppyone/SECURITY.md)<br>[supabase/migrations/20260418010000_truncate_mut_audit_orphans.sql](../../../../sources/puppyone-ai__puppyone/supabase/migrations/20260418010000_truncate_mut_audit_orphans.sql)<br>[supabase/migrations/20260427000000_oauth_state_csrf.sql](../../../../sources/puppyone-ai__puppyone/supabase/migrations/20260427000000_oauth_state_csrf.sql)<br>[supabase/migrations/20260502000800_migrate_gateways_to_oauth.sql](../../../../sources/puppyone-ai__puppyone/supabase/migrations/20260502000800_migrate_gateways_to_oauth.sql)<br>[supabase/migrations/20260527020000_connector_cli_fs_policy.sql](../../../../sources/puppyone-ai__puppyone/supabase/migrations/20260527020000_connector_cli_fs_policy.sql)<br>[supabase/migrations/20260530000000_audit_logs_path_text.sql](../../../../sources/puppyone-ai__puppyone/supabase/migrations/20260530000000_audit_logs_path_text.sql) |
| 에이전트 지시문 | 5 | [AGENTS.md](../../../../sources/puppyone-ai__puppyone/AGENTS.md)<br>[CLAUDE.md](../../../../sources/puppyone-ai__puppyone/CLAUDE.md)<br>[backend/AGENTS.md](../../../../sources/puppyone-ai__puppyone/backend/AGENTS.md)<br>[backend/CLAUDE.md](../../../../sources/puppyone-ai__puppyone/backend/CLAUDE.md)<br>[backend/openspec/AGENTS.md](../../../../sources/puppyone-ai__puppyone/backend/openspec/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `tools/puppy_model/qllama/embedding.py`, `tools/puppy_model/examples/frontend_demo/index.html`, `supabase/migrations/20260526000000_version_text_index.sql`.
2. entrypoint를 따라 실행 흐름 확인: `tools/puppy_model/qllama/main.py`, `packages/editor-ui/src/index.ts`, `packages/data-ui/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tools/puppy_utils/__init__.py`, `tools/puppy_utils/config.py`.
4. retrieval/memory/indexing 확인: `tools/puppy_model/qllama/embedding.py`, `tools/puppy_model/examples/frontend_demo/index.html`, `supabase/migrations/20260526000000_version_text_index.sql`.
5. test/eval 파일로 동작 검증: `tools/puppy_model/examples/test_qllama.py`, `tests/e2e/README.md`, `supabase/tests/smoke_test_triggers.sql`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Context drive for your AI agents. 핵심 구조 신호는 TypeScript, docker-compose.yml, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
