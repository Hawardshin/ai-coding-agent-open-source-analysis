# markhuangai/dense-mem 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Self-hosted AI agent memory server with MCP, evidence provenance, typed claims, conflict detection, embeddings, recall, PostgreSQL, and Neo4j.

## 요약

- 조사 단위: `sources/markhuangai__dense-mem` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 661 files, 97 directories, depth score 120, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/uat/mcp_e2e_test.go, tests/uat/phase8-mcp.spec.ts, packages/mcp-proxy/package-lock.json이고, 의존성 단서는 mcp, opentelemetry, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | markhuangai/dense-mem |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 27 |
| Forks | 4 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/markhuangai__dense-mem](../../../../sources/markhuangai__dense-mem) |
| 기존 보고서 | [reports/global-trending/repositories/markhuangai__dense-mem.md](../../../global-trending/repositories/markhuangai__dense-mem.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 661 / 97 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .claude, .git-vibe, .githooks, .github, .lint, assets, cmd, examples, internal, migrations, packages, scripts, tests, web |
| 상위 확장자 | .go: 499, .ts: 35, .sql: 23, .yml: 22, .md: 20, .tsx: 20, .json: 11, .js: 7, (none): 6, .css: 4, .sh: 4, .html: 2 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 54 |
| web | source boundary | 23 |
| packages/mcp-proxy | packages workspace | 13 |
| cmd/demo-server | cmd workspace | 2 |
| cmd/server | cmd workspace | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| cmd | source boundary | 1 |
| cmd/delete-key | cmd workspace | 1 |
| cmd/delete-profile | cmd workspace | 1 |
| cmd/list-keys | cmd workspace | 1 |
| cmd/list-profiles | cmd workspace | 1 |
| cmd/migrate | cmd workspace | 1 |
| cmd/provision-profile | cmd workspace | 1 |
| cmd/rotate-key | cmd workspace | 1 |
| examples | top-level component | 1 |
| examples/docker-compose.base.yml | examples workspace | 1 |
| examples/docker-compose.demo.telemetry.yml | examples workspace | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | opentelemetry, prometheus |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [tests/uat/mcp_e2e_test.go](../../../../sources/markhuangai__dense-mem/tests/uat/mcp_e2e_test.go) | mcp signal |
| mcp | [tests/uat/phase8-mcp.spec.ts](../../../../sources/markhuangai__dense-mem/tests/uat/phase8-mcp.spec.ts) | mcp signal |
| mcp | [packages/mcp-proxy/package-lock.json](../../../../sources/markhuangai__dense-mem/packages/mcp-proxy/package-lock.json) | mcp signal |
| mcp | [packages/mcp-proxy/package.json](../../../../sources/markhuangai__dense-mem/packages/mcp-proxy/package.json) | mcp signal |
| agentRuntime | [internal/tools/sanitize_test.go](../../../../sources/markhuangai__dense-mem/internal/tools/sanitize_test.go) | agentRuntime signal |
| agentRuntime | [internal/tools/sanitize.go](../../../../sources/markhuangai__dense-mem/internal/tools/sanitize.go) | agentRuntime signal |
| agentRuntime | [internal/tools/semanticsearch/searcher_retract_test.go](../../../../sources/markhuangai__dense-mem/internal/tools/semanticsearch/searcher_retract_test.go) | agentRuntime signal |
| agentRuntime | [internal/tools/semanticsearch/searcher.go](../../../../sources/markhuangai__dense-mem/internal/tools/semanticsearch/searcher.go) | agentRuntime signal |
| entrypoints | [web/src/App.test.tsx](../../../../sources/markhuangai__dense-mem/web/src/App.test.tsx) | entrypoints signal |
| entrypoints | [web/src/App.tsx](../../../../sources/markhuangai__dense-mem/web/src/App.tsx) | entrypoints signal |
| entrypoints | [web/src/main.tsx](../../../../sources/markhuangai__dense-mem/web/src/main.tsx) | entrypoints signal |
| entrypoints | [web/src/user/main.tsx](../../../../sources/markhuangai__dense-mem/web/src/user/main.tsx) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 16 | [web/src/App.test.tsx](../../../../sources/markhuangai__dense-mem/web/src/App.test.tsx)<br>[web/src/App.tsx](../../../../sources/markhuangai__dense-mem/web/src/App.tsx)<br>[web/src/main.tsx](../../../../sources/markhuangai__dense-mem/web/src/main.tsx)<br>[web/src/user/main.tsx](../../../../sources/markhuangai__dense-mem/web/src/user/main.tsx)<br>[packages/mcp-proxy/bin/dense-mem-mcp-proxy.js](../../../../sources/markhuangai__dense-mem/packages/mcp-proxy/bin/dense-mem-mcp-proxy.js)<br>[internal/mcp/server.go](../../../../sources/markhuangai__dense-mem/internal/mcp/server.go)<br>[internal/http/server.go](../../../../sources/markhuangai__dense-mem/internal/http/server.go)<br>[cmd/server/main.go](../../../../sources/markhuangai__dense-mem/cmd/server/main.go) |
| agentRuntime | 49 | [internal/tools/sanitize_test.go](../../../../sources/markhuangai__dense-mem/internal/tools/sanitize_test.go)<br>[internal/tools/sanitize.go](../../../../sources/markhuangai__dense-mem/internal/tools/sanitize.go)<br>[internal/tools/semanticsearch/searcher_retract_test.go](../../../../sources/markhuangai__dense-mem/internal/tools/semanticsearch/searcher_retract_test.go)<br>[internal/tools/semanticsearch/searcher.go](../../../../sources/markhuangai__dense-mem/internal/tools/semanticsearch/searcher.go)<br>[internal/tools/semanticsearch/service_test.go](../../../../sources/markhuangai__dense-mem/internal/tools/semanticsearch/service_test.go)<br>[internal/tools/semanticsearch/service.go](../../../../sources/markhuangai__dense-mem/internal/tools/semanticsearch/service.go)<br>[internal/tools/registry/context_tools_test.go](../../../../sources/markhuangai__dense-mem/internal/tools/registry/context_tools_test.go)<br>[internal/tools/registry/context_tools.go](../../../../sources/markhuangai__dense-mem/internal/tools/registry/context_tools.go) |
| mcp | 17 | [tests/uat/mcp_e2e_test.go](../../../../sources/markhuangai__dense-mem/tests/uat/mcp_e2e_test.go)<br>[tests/uat/phase8-mcp.spec.ts](../../../../sources/markhuangai__dense-mem/tests/uat/phase8-mcp.spec.ts)<br>[packages/mcp-proxy/package-lock.json](../../../../sources/markhuangai__dense-mem/packages/mcp-proxy/package-lock.json)<br>[packages/mcp-proxy/package.json](../../../../sources/markhuangai__dense-mem/packages/mcp-proxy/package.json)<br>[packages/mcp-proxy/README.md](../../../../sources/markhuangai__dense-mem/packages/mcp-proxy/README.md)<br>[packages/mcp-proxy/tests/config.test.js](../../../../sources/markhuangai__dense-mem/packages/mcp-proxy/tests/config.test.js)<br>[packages/mcp-proxy/tests/logger.test.js](../../../../sources/markhuangai__dense-mem/packages/mcp-proxy/tests/logger.test.js)<br>[packages/mcp-proxy/tests/proxy.integration.test.js](../../../../sources/markhuangai__dense-mem/packages/mcp-proxy/tests/proxy.integration.test.js) |
| retrieval | 33 | [web/index.html](../../../../sources/markhuangai__dense-mem/web/index.html)<br>[migrations/postgres/2026041605_embedding_config.sql](../../../../sources/markhuangai__dense-mem/migrations/postgres/2026041605_embedding_config.sql)<br>[internal/tools/registry/knowledge_tools.go](../../../../sources/markhuangai__dense-mem/internal/tools/registry/knowledge_tools.go)<br>[internal/tools/registry/memory_mcp_affordance_test.go](../../../../sources/markhuangai__dense-mem/internal/tools/registry/memory_mcp_affordance_test.go)<br>[internal/tools/registry/memory_tools.go](../../../../sources/markhuangai__dense-mem/internal/tools/registry/memory_tools.go)<br>[internal/tools/registry/toolset_knowledge_test.go](../../../../sources/markhuangai__dense-mem/internal/tools/registry/toolset_knowledge_test.go)<br>[internal/storage/postgres/embedding_config_repo_test.go](../../../../sources/markhuangai__dense-mem/internal/storage/postgres/embedding_config_repo_test.go)<br>[internal/storage/postgres/embedding_config_repo.go](../../../../sources/markhuangai__dense-mem/internal/storage/postgres/embedding_config_repo.go) |
| spec | 22 | [web/tests-user/user-portal.spec.ts](../../../../sources/markhuangai__dense-mem/web/tests-user/user-portal.spec.ts)<br>[web/tests-compose/compose-portal.spec.ts](../../../../sources/markhuangai__dense-mem/web/tests-compose/compose-portal.spec.ts)<br>[web/tests/control-portal.spec.ts](../../../../sources/markhuangai__dense-mem/web/tests/control-portal.spec.ts)<br>[tests/uat/auth-matrix.spec.ts](../../../../sources/markhuangai__dense-mem/tests/uat/auth-matrix.spec.ts)<br>[tests/uat/cli-workflows.spec.ts](../../../../sources/markhuangai__dense-mem/tests/uat/cli-workflows.spec.ts)<br>[tests/uat/control-plane-lifecycle.spec.ts](../../../../sources/markhuangai__dense-mem/tests/uat/control-plane-lifecycle.spec.ts)<br>[tests/uat/control-portal-live.spec.ts](../../../../sources/markhuangai__dense-mem/tests/uat/control-portal-live.spec.ts)<br>[tests/uat/e2e-journey.spec.ts](../../../../sources/markhuangai__dense-mem/tests/uat/e2e-journey.spec.ts) |
| eval | 291 | [web/tests-user/user-portal.spec.ts](../../../../sources/markhuangai__dense-mem/web/tests-user/user-portal.spec.ts)<br>[web/tests-compose/compose-portal.spec.ts](../../../../sources/markhuangai__dense-mem/web/tests-compose/compose-portal.spec.ts)<br>[web/tests/control-portal.spec.ts](../../../../sources/markhuangai__dense-mem/web/tests/control-portal.spec.ts)<br>[web/src/api.test.ts](../../../../sources/markhuangai__dense-mem/web/src/api.test.ts)<br>[web/src/App.test.tsx](../../../../sources/markhuangai__dense-mem/web/src/App.test.tsx)<br>[web/src/observability.css](../../../../sources/markhuangai__dense-mem/web/src/observability.css)<br>[web/src/user/api.test.ts](../../../../sources/markhuangai__dense-mem/web/src/user/api.test.ts)<br>[web/src/user/App.test.tsx](../../../../sources/markhuangai__dense-mem/web/src/user/App.test.tsx) |
| security | 30 | [tests/uat/auth-matrix.spec.ts](../../../../sources/markhuangai__dense-mem/tests/uat/auth-matrix.spec.ts)<br>[tests/integration/uat_keys_auth_test.go](../../../../sources/markhuangai__dense-mem/tests/integration/uat_keys_auth_test.go)<br>[migrations/postgres/2026041504_audit_immutability.sql](../../../../sources/markhuangai__dense-mem/migrations/postgres/2026041504_audit_immutability.sql)<br>[migrations/postgres/2026050706_audit_log_decouple_fks.sql](../../../../sources/markhuangai__dense-mem/migrations/postgres/2026050706_audit_log_decouple_fks.sql)<br>[migrations/postgres/2026052709_security_bans.sql](../../../../sources/markhuangai__dense-mem/migrations/postgres/2026052709_security_bans.sql)<br>[migrations/postgres/2026061316_sso_team_profile_insert_policy.sql](../../../../sources/markhuangai__dense-mem/migrations/postgres/2026061316_sso_team_profile_insert_policy.sql)<br>[migrations/postgres/2026061317_remove_sso_hybrid_auth_source.sql](../../../../sources/markhuangai__dense-mem/migrations/postgres/2026061317_remove_sso_hybrid_auth_source.sql)<br>[internal/storage/neo4j/query_guard_test.go](../../../../sources/markhuangai__dense-mem/internal/storage/neo4j/query_guard_test.go) |
| ci | 14 | [.github/workflows/address-feedback.yml](../../../../sources/markhuangai__dense-mem/.github/workflows/address-feedback.yml)<br>[.github/workflows/automatic-pr-review.yml](../../../../sources/markhuangai__dense-mem/.github/workflows/automatic-pr-review.yml)<br>[.github/workflows/ci-pr.yml](../../../../sources/markhuangai__dense-mem/.github/workflows/ci-pr.yml)<br>[.github/workflows/ci-push.yml](../../../../sources/markhuangai__dense-mem/.github/workflows/ci-push.yml)<br>[.github/workflows/ci-shared.yml](../../../../sources/markhuangai__dense-mem/.github/workflows/ci-shared.yml)<br>[.github/workflows/investigate.yml](../../../../sources/markhuangai__dense-mem/.github/workflows/investigate.yml)<br>[.github/workflows/materialize.yml](../../../../sources/markhuangai__dense-mem/.github/workflows/materialize.yml)<br>[.github/workflows/publish-demo-image.yml](../../../../sources/markhuangai__dense-mem/.github/workflows/publish-demo-image.yml) |
| container | 7 | [Dockerfile](../../../../sources/markhuangai__dense-mem/Dockerfile)<br>[Dockerfile.demo](../../../../sources/markhuangai__dense-mem/Dockerfile.demo)<br>[examples/docker-compose.base.yml](../../../../sources/markhuangai__dense-mem/examples/docker-compose.base.yml)<br>[examples/docker-compose.demo.telemetry.yml](../../../../sources/markhuangai__dense-mem/examples/docker-compose.demo.telemetry.yml)<br>[examples/docker-compose.demo.yml](../../../../sources/markhuangai__dense-mem/examples/docker-compose.demo.yml)<br>[examples/docker-compose.expert.yml](../../../../sources/markhuangai__dense-mem/examples/docker-compose.expert.yml)<br>[examples/docker-compose.telemetry.yml](../../../../sources/markhuangai__dense-mem/examples/docker-compose.telemetry.yml) |
| instruction | 0 | 명확하지 않음 |
| docs | 6 | [README.md](../../../../sources/markhuangai__dense-mem/README.md)<br>[README.zh-CN.md](../../../../sources/markhuangai__dense-mem/README.zh-CN.md)<br>[tests/uat/README.md](../../../../sources/markhuangai__dense-mem/tests/uat/README.md)<br>[tests/docs/optional_redis_docs_test.go](../../../../sources/markhuangai__dense-mem/tests/docs/optional_redis_docs_test.go)<br>[packages/mcp-proxy/README.md](../../../../sources/markhuangai__dense-mem/packages/mcp-proxy/README.md)<br>[assets/readme-hero.jpg](../../../../sources/markhuangai__dense-mem/assets/readme-hero.jpg) |
| config | 6 | [go.mod](../../../../sources/markhuangai__dense-mem/go.mod)<br>[web/package.json](../../../../sources/markhuangai__dense-mem/web/package.json)<br>[web/tsconfig.json](../../../../sources/markhuangai__dense-mem/web/tsconfig.json)<br>[tests/uat/package.json](../../../../sources/markhuangai__dense-mem/tests/uat/package.json)<br>[packages/mcp-proxy/package.json](../../../../sources/markhuangai__dense-mem/packages/mcp-proxy/package.json)<br>[.lint/package.json](../../../../sources/markhuangai__dense-mem/.lint/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 291 | [web/tests-user/user-portal.spec.ts](../../../../sources/markhuangai__dense-mem/web/tests-user/user-portal.spec.ts)<br>[web/tests-compose/compose-portal.spec.ts](../../../../sources/markhuangai__dense-mem/web/tests-compose/compose-portal.spec.ts)<br>[web/tests/control-portal.spec.ts](../../../../sources/markhuangai__dense-mem/web/tests/control-portal.spec.ts)<br>[web/src/api.test.ts](../../../../sources/markhuangai__dense-mem/web/src/api.test.ts)<br>[web/src/App.test.tsx](../../../../sources/markhuangai__dense-mem/web/src/App.test.tsx)<br>[web/src/observability.css](../../../../sources/markhuangai__dense-mem/web/src/observability.css) |
| CI workflow | 14 | [.github/workflows/address-feedback.yml](../../../../sources/markhuangai__dense-mem/.github/workflows/address-feedback.yml)<br>[.github/workflows/automatic-pr-review.yml](../../../../sources/markhuangai__dense-mem/.github/workflows/automatic-pr-review.yml)<br>[.github/workflows/ci-pr.yml](../../../../sources/markhuangai__dense-mem/.github/workflows/ci-pr.yml)<br>[.github/workflows/ci-push.yml](../../../../sources/markhuangai__dense-mem/.github/workflows/ci-push.yml)<br>[.github/workflows/ci-shared.yml](../../../../sources/markhuangai__dense-mem/.github/workflows/ci-shared.yml)<br>[.github/workflows/investigate.yml](../../../../sources/markhuangai__dense-mem/.github/workflows/investigate.yml) |
| 컨테이너/배포 | 7 | [Dockerfile](../../../../sources/markhuangai__dense-mem/Dockerfile)<br>[Dockerfile.demo](../../../../sources/markhuangai__dense-mem/Dockerfile.demo)<br>[examples/docker-compose.base.yml](../../../../sources/markhuangai__dense-mem/examples/docker-compose.base.yml)<br>[examples/docker-compose.demo.telemetry.yml](../../../../sources/markhuangai__dense-mem/examples/docker-compose.demo.telemetry.yml)<br>[examples/docker-compose.demo.yml](../../../../sources/markhuangai__dense-mem/examples/docker-compose.demo.yml)<br>[examples/docker-compose.expert.yml](../../../../sources/markhuangai__dense-mem/examples/docker-compose.expert.yml) |
| 보안/정책 | 30 | [tests/uat/auth-matrix.spec.ts](../../../../sources/markhuangai__dense-mem/tests/uat/auth-matrix.spec.ts)<br>[tests/integration/uat_keys_auth_test.go](../../../../sources/markhuangai__dense-mem/tests/integration/uat_keys_auth_test.go)<br>[migrations/postgres/2026041504_audit_immutability.sql](../../../../sources/markhuangai__dense-mem/migrations/postgres/2026041504_audit_immutability.sql)<br>[migrations/postgres/2026050706_audit_log_decouple_fks.sql](../../../../sources/markhuangai__dense-mem/migrations/postgres/2026050706_audit_log_decouple_fks.sql)<br>[migrations/postgres/2026052709_security_bans.sql](../../../../sources/markhuangai__dense-mem/migrations/postgres/2026052709_security_bans.sql)<br>[migrations/postgres/2026061316_sso_team_profile_insert_policy.sql](../../../../sources/markhuangai__dense-mem/migrations/postgres/2026061316_sso_team_profile_insert_policy.sql) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/uat/mcp_e2e_test.go`, `tests/uat/phase8-mcp.spec.ts`, `packages/mcp-proxy/package-lock.json`.
2. entrypoint를 따라 실행 흐름 확인: `web/src/App.test.tsx`, `web/src/App.tsx`, `web/src/main.tsx`.
3. agent/tool runtime 매핑: `internal/tools/sanitize_test.go`, `internal/tools/sanitize.go`, `internal/tools/semanticsearch/searcher_retract_test.go`.
4. retrieval/memory/indexing 확인: `web/index.html`, `migrations/postgres/2026041605_embedding_config.sql`, `internal/tools/registry/knowledge_tools.go`.
5. test/eval 파일로 동작 검증: `web/tests-user/user-portal.spec.ts`, `web/tests-compose/compose-portal.spec.ts`, `web/tests/control-portal.spec.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Self hosted AI agent memory server with MCP, evidence provenance, typed claims, conflict detection, embeddings, recall, . 핵심 구조 신호는 Go, go.mod, Dockerfile, README.md, LICENSE, mcp이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
