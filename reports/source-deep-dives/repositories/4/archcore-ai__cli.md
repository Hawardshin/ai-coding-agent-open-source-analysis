# archcore-ai/cli 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Git-native context for AI coding agents — CLI and local MCP server

## 요약

- 조사 단위: `sources/archcore-ai__cli` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 387 files, 149 directories, depth score 108, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=main.go, internal/mcp/server.go이고, 의존성 단서는 mcp, cobra, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | archcore-ai/cli |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Go |
| Stars | 47 |
| Forks | 2 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/archcore-ai__cli](../../../../sources/archcore-ai__cli) |
| 기존 보고서 | [reports/global-trending/repositories/archcore-ai__cli.md](../../../global-trending/repositories/archcore-ai__cli.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 387 / 149 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .archcore, .claude, .codex, .github, cmd, examples, internal, templates |
| 상위 확장자 | .md: 179, .go: 129, .json: 53, .toml: 16, (none): 3, .yml: 2, .mod: 1, .ps1: 1, .sh: 1, .sum: 1, .yaml: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| examples/_global_ | examples workspace | 10 |
| examples/10-monorepo-root-global | examples workspace | 10 |
| examples/02-fullstack-app | examples workspace | 8 |
| examples/09-monorepo-shared-global | examples workspace | 7 |
| examples/01-minimal | examples workspace | 5 |
| examples/03-product-planning | examples workspace | 5 |
| examples/04-experience-playbook | examples workspace | 3 |
| examples/05-global-single-source | examples workspace | 3 |
| examples/06-global-multiple-sources | examples workspace | 3 |
| examples/07-local-overrides-global | examples workspace | 3 |
| examples/08-global-in-archcore | examples workspace | 3 |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| cmd | source boundary | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| internal | top-level component | 1 |
| templates | top-level component | 1 |


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
| developerSurface | cobra |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [main.go](../../../../sources/archcore-ai__cli/main.go) | entrypoints signal |
| entrypoints | [internal/mcp/server.go](../../../../sources/archcore-ai__cli/internal/mcp/server.go) | entrypoints signal |
| docs | [README.md](../../../../sources/archcore-ai__cli/README.md) | docs signal |
| docs | [examples/README.md](../../../../sources/archcore-ai__cli/examples/README.md) | docs signal |
| docs | [examples/10-monorepo-root-global/README.md](../../../../sources/archcore-ai__cli/examples/10-monorepo-root-global/README.md) | docs signal |
| docs | [examples/09-monorepo-shared-global/README.md](../../../../sources/archcore-ai__cli/examples/09-monorepo-shared-global/README.md) | docs signal |
| eval | [templates/source_extensions_test.go](../../../../sources/archcore-ai__cli/templates/source_extensions_test.go) | eval signal |
| eval | [templates/templates_test.go](../../../../sources/archcore-ai__cli/templates/templates_test.go) | eval signal |
| eval | [internal/update/update_test.go](../../../../sources/archcore-ai__cli/internal/update/update_test.go) | eval signal |
| eval | [internal/sync/diff_test.go](../../../../sources/archcore-ai__cli/internal/sync/diff_test.go) | eval signal |
| config | [go.mod](../../../../sources/archcore-ai__cli/go.mod) | config signal |
| ci | [.github/workflows/install-smoke.yml](../../../../sources/archcore-ai__cli/.github/workflows/install-smoke.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [main.go](../../../../sources/archcore-ai__cli/main.go)<br>[internal/mcp/server.go](../../../../sources/archcore-ai__cli/internal/mcp/server.go) |
| agentRuntime | 82 | [AGENTS.md](../../../../sources/archcore-ai__cli/AGENTS.md)<br>[internal/mcp/tools/add_relation_test.go](../../../../sources/archcore-ai__cli/internal/mcp/tools/add_relation_test.go)<br>[internal/mcp/tools/add_relation.go](../../../../sources/archcore-ai__cli/internal/mcp/tools/add_relation.go)<br>[internal/mcp/tools/common_test.go](../../../../sources/archcore-ai__cli/internal/mcp/tools/common_test.go)<br>[internal/mcp/tools/common.go](../../../../sources/archcore-ai__cli/internal/mcp/tools/common.go)<br>[internal/mcp/tools/create_document_test.go](../../../../sources/archcore-ai__cli/internal/mcp/tools/create_document_test.go)<br>[internal/mcp/tools/create_document.go](../../../../sources/archcore-ai__cli/internal/mcp/tools/create_document.go)<br>[internal/mcp/tools/examples_smoke_test.go](../../../../sources/archcore-ai__cli/internal/mcp/tools/examples_smoke_test.go) |
| mcp | 103 | [.mcp.json](../../../../sources/archcore-ai__cli/.mcp.json)<br>[internal/mcp/server_test.go](../../../../sources/archcore-ai__cli/internal/mcp/server_test.go)<br>[internal/mcp/server.go](../../../../sources/archcore-ai__cli/internal/mcp/server.go)<br>[internal/mcp/tools/add_relation_test.go](../../../../sources/archcore-ai__cli/internal/mcp/tools/add_relation_test.go)<br>[internal/mcp/tools/add_relation.go](../../../../sources/archcore-ai__cli/internal/mcp/tools/add_relation.go)<br>[internal/mcp/tools/common_test.go](../../../../sources/archcore-ai__cli/internal/mcp/tools/common_test.go)<br>[internal/mcp/tools/common.go](../../../../sources/archcore-ai__cli/internal/mcp/tools/common.go)<br>[internal/mcp/tools/create_document_test.go](../../../../sources/archcore-ai__cli/internal/mcp/tools/create_document_test.go) |
| retrieval | 0 | 명확하지 않음 |
| spec | 41 | [internal/mcp/prompts/architecture_track.go](../../../../sources/archcore-ai__cli/internal/mcp/prompts/architecture_track.go)<br>[examples/10-monorepo-root-global/.archcore/monorepo-architecture.doc.md](../../../../sources/archcore-ai__cli/examples/10-monorepo-root-global/.archcore/monorepo-architecture.doc.md)<br>[examples/03-product-planning/.archcore/team-workspaces.prd.md](../../../../sources/archcore-ai__cli/examples/03-product-planning/.archcore/team-workspaces.prd.md)<br>[examples/03-product-planning/.archcore/workspaces-api.spec.md](../../../../sources/archcore-ai__cli/examples/03-product-planning/.archcore/workspaces-api.spec.md)<br>[examples/02-fullstack-app/.archcore/product/onboarding.prd.md](../../../../sources/archcore-ai__cli/examples/02-fullstack-app/.archcore/product/onboarding.prd.md)<br>[examples/02-fullstack-app/.archcore/product/q3-roadmap.plan.md](../../../../sources/archcore-ai__cli/examples/02-fullstack-app/.archcore/product/q3-roadmap.plan.md)<br>[examples/02-fullstack-app/.archcore/infra/deployment.adr.md](../../../../sources/archcore-ai__cli/examples/02-fullstack-app/.archcore/infra/deployment.adr.md)<br>[examples/02-fullstack-app/.archcore/frontend/state-management.adr.md](../../../../sources/archcore-ai__cli/examples/02-fullstack-app/.archcore/frontend/state-management.adr.md) |
| eval | 80 | [templates/source_extensions_test.go](../../../../sources/archcore-ai__cli/templates/source_extensions_test.go)<br>[templates/templates_test.go](../../../../sources/archcore-ai__cli/templates/templates_test.go)<br>[internal/update/update_test.go](../../../../sources/archcore-ai__cli/internal/update/update_test.go)<br>[internal/sync/diff_test.go](../../../../sources/archcore-ai__cli/internal/sync/diff_test.go)<br>[internal/sync/hash_test.go](../../../../sources/archcore-ai__cli/internal/sync/hash_test.go)<br>[internal/sync/manifest_test.go](../../../../sources/archcore-ai__cli/internal/sync/manifest_test.go)<br>[internal/sync/payload_test.go](../../../../sources/archcore-ai__cli/internal/sync/payload_test.go)<br>[internal/mcp/server_test.go](../../../../sources/archcore-ai__cli/internal/mcp/server_test.go) |
| security | 5 | [examples/_global_/security-baseline/.archcore/auth-standard.adr.md](../../../../sources/archcore-ai__cli/examples/_global_/security-baseline/.archcore/auth-standard.adr.md)<br>[examples/_global_/security-baseline/.archcore/dependency-policy.rule.md](../../../../sources/archcore-ai__cli/examples/_global_/security-baseline/.archcore/dependency-policy.rule.md)<br>[examples/_global_/security-baseline/.archcore/secrets-management.rule.md](../../../../sources/archcore-ai__cli/examples/_global_/security-baseline/.archcore/secrets-management.rule.md)<br>[examples/_global_/security-baseline/.archcore/settings.json](../../../../sources/archcore-ai__cli/examples/_global_/security-baseline/.archcore/settings.json)<br>[.archcore/sync/sync-path-security.rule.md](../../../../sources/archcore-ai__cli/.archcore/sync/sync-path-security.rule.md) |
| ci | 2 | [.github/workflows/install-smoke.yml](../../../../sources/archcore-ai__cli/.github/workflows/install-smoke.yml)<br>[.github/workflows/release.yml](../../../../sources/archcore-ai__cli/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 33 | [AGENTS.md](../../../../sources/archcore-ai__cli/AGENTS.md)<br>[CLAUDE.md](../../../../sources/archcore-ai__cli/CLAUDE.md)<br>[examples/10-monorepo-root-global/AGENTS.md](../../../../sources/archcore-ai__cli/examples/10-monorepo-root-global/AGENTS.md)<br>[examples/10-monorepo-root-global/packages/ui/AGENTS.md](../../../../sources/archcore-ai__cli/examples/10-monorepo-root-global/packages/ui/AGENTS.md)<br>[examples/10-monorepo-root-global/packages/ui/.codex/config.toml](../../../../sources/archcore-ai__cli/examples/10-monorepo-root-global/packages/ui/.codex/config.toml)<br>[examples/10-monorepo-root-global/apps/web/AGENTS.md](../../../../sources/archcore-ai__cli/examples/10-monorepo-root-global/apps/web/AGENTS.md)<br>[examples/10-monorepo-root-global/apps/web/.codex/config.toml](../../../../sources/archcore-ai__cli/examples/10-monorepo-root-global/apps/web/.codex/config.toml)<br>[examples/10-monorepo-root-global/apps/api/AGENTS.md](../../../../sources/archcore-ai__cli/examples/10-monorepo-root-global/apps/api/AGENTS.md) |
| docs | 13 | [README.md](../../../../sources/archcore-ai__cli/README.md)<br>[examples/README.md](../../../../sources/archcore-ai__cli/examples/README.md)<br>[examples/10-monorepo-root-global/README.md](../../../../sources/archcore-ai__cli/examples/10-monorepo-root-global/README.md)<br>[examples/09-monorepo-shared-global/README.md](../../../../sources/archcore-ai__cli/examples/09-monorepo-shared-global/README.md)<br>[examples/08-global-in-archcore/README.md](../../../../sources/archcore-ai__cli/examples/08-global-in-archcore/README.md)<br>[examples/07-local-overrides-global/README.md](../../../../sources/archcore-ai__cli/examples/07-local-overrides-global/README.md)<br>[examples/06-global-multiple-sources/README.md](../../../../sources/archcore-ai__cli/examples/06-global-multiple-sources/README.md)<br>[examples/05-global-single-source/README.md](../../../../sources/archcore-ai__cli/examples/05-global-single-source/README.md) |
| config | 1 | [go.mod](../../../../sources/archcore-ai__cli/go.mod) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 80 | [templates/source_extensions_test.go](../../../../sources/archcore-ai__cli/templates/source_extensions_test.go)<br>[templates/templates_test.go](../../../../sources/archcore-ai__cli/templates/templates_test.go)<br>[internal/update/update_test.go](../../../../sources/archcore-ai__cli/internal/update/update_test.go)<br>[internal/sync/diff_test.go](../../../../sources/archcore-ai__cli/internal/sync/diff_test.go)<br>[internal/sync/hash_test.go](../../../../sources/archcore-ai__cli/internal/sync/hash_test.go)<br>[internal/sync/manifest_test.go](../../../../sources/archcore-ai__cli/internal/sync/manifest_test.go) |
| CI workflow | 2 | [.github/workflows/install-smoke.yml](../../../../sources/archcore-ai__cli/.github/workflows/install-smoke.yml)<br>[.github/workflows/release.yml](../../../../sources/archcore-ai__cli/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 5 | [examples/_global_/security-baseline/.archcore/auth-standard.adr.md](../../../../sources/archcore-ai__cli/examples/_global_/security-baseline/.archcore/auth-standard.adr.md)<br>[examples/_global_/security-baseline/.archcore/dependency-policy.rule.md](../../../../sources/archcore-ai__cli/examples/_global_/security-baseline/.archcore/dependency-policy.rule.md)<br>[examples/_global_/security-baseline/.archcore/secrets-management.rule.md](../../../../sources/archcore-ai__cli/examples/_global_/security-baseline/.archcore/secrets-management.rule.md)<br>[examples/_global_/security-baseline/.archcore/settings.json](../../../../sources/archcore-ai__cli/examples/_global_/security-baseline/.archcore/settings.json)<br>[.archcore/sync/sync-path-security.rule.md](../../../../sources/archcore-ai__cli/.archcore/sync/sync-path-security.rule.md) |
| 에이전트 지시문 | 33 | [AGENTS.md](../../../../sources/archcore-ai__cli/AGENTS.md)<br>[CLAUDE.md](../../../../sources/archcore-ai__cli/CLAUDE.md)<br>[examples/10-monorepo-root-global/AGENTS.md](../../../../sources/archcore-ai__cli/examples/10-monorepo-root-global/AGENTS.md)<br>[examples/10-monorepo-root-global/packages/ui/AGENTS.md](../../../../sources/archcore-ai__cli/examples/10-monorepo-root-global/packages/ui/AGENTS.md)<br>[examples/10-monorepo-root-global/packages/ui/.codex/config.toml](../../../../sources/archcore-ai__cli/examples/10-monorepo-root-global/packages/ui/.codex/config.toml)<br>[examples/10-monorepo-root-global/apps/web/AGENTS.md](../../../../sources/archcore-ai__cli/examples/10-monorepo-root-global/apps/web/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `main.go`, `internal/mcp/server.go`, `README.md`.
2. entrypoint를 따라 실행 흐름 확인: `main.go`, `internal/mcp/server.go`.
3. agent/tool runtime 매핑: `AGENTS.md`, `internal/mcp/tools/add_relation_test.go`, `internal/mcp/tools/add_relation.go`.
4. test/eval 파일로 동작 검증: `templates/source_extensions_test.go`, `templates/templates_test.go`, `internal/update/update_test.go`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Git native context for AI coding agents — CLI and local MCP server. 핵심 구조 신호는 Go, go.mod, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
