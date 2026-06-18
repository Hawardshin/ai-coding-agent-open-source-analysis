# dnotitia/akb 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

AKB — Agent Knowledgebase. Organizational memory for AI agents: vault-scoped docs / tables / files unified by URI graph, served over MCP.

## 요약

- 조사 단위: `sources/dnotitia__akb` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 684 files, 148 directories, depth score 124, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=plugins/codex/akb-wiki/.mcp.json, plugins/claude/akb-wiki/.mcp.json, packages/akb-mcp-client/CHANGELOG.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | dnotitia/akb |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 59 |
| Forks | 3 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/dnotitia__akb](../../../../sources/dnotitia__akb) |
| 기존 보고서 | [reports/global-trending/repositories/dnotitia__akb.md](../../../global-trending/repositories/dnotitia__akb.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 684 / 148 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .agents, .claude-plugin, .github, agents, backend, config, deploy, docs, eval, frontend, okf, packages, plugins, scripts, templates |
| 상위 확장자 | .py: 250, .tsx: 126, .md: 88, .sh: 69, .ts: 53, .yaml: 31, .json: 16, .proto: 13, (none): 10, .mjs: 4, .conf: 3, .example: 3 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 15 |
| packages/akb-mcp-client | packages workspace | 9 |
| .github | ci surface | 1 |
| agents | top-level component | 1 |
| backend | top-level component | 1 |
| config | top-level component | 1 |
| deploy | deployment surface | 1 |
| eval | top-level component | 1 |
| frontend | top-level component | 1 |
| okf | top-level component | 1 |
| packages | source boundary | 1 |
| plugins | top-level component | 1 |
| scripts | top-level component | 1 |
| templates | top-level component | 1 |


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
| mcp | [plugins/codex/akb-wiki/.mcp.json](../../../../sources/dnotitia__akb/plugins/codex/akb-wiki/.mcp.json) | mcp signal |
| mcp | [plugins/claude/akb-wiki/.mcp.json](../../../../sources/dnotitia__akb/plugins/claude/akb-wiki/.mcp.json) | mcp signal |
| mcp | [packages/akb-mcp-client/CHANGELOG.md](../../../../sources/dnotitia__akb/packages/akb-mcp-client/CHANGELOG.md) | mcp signal |
| mcp | [packages/akb-mcp-client/LICENSE](../../../../sources/dnotitia__akb/packages/akb-mcp-client/LICENSE) | mcp signal |
| agentRuntime | [plugins/codex/akb-wiki/support/agents/ingest-commit.md](../../../../sources/dnotitia__akb/plugins/codex/akb-wiki/support/agents/ingest-commit.md) | agentRuntime signal |
| agentRuntime | [plugins/codex/akb-wiki/support/agents/ingest-confluence.md](../../../../sources/dnotitia__akb/plugins/codex/akb-wiki/support/agents/ingest-confluence.md) | agentRuntime signal |
| agentRuntime | [plugins/codex/akb-wiki/support/agents/ingest-doc.md](../../../../sources/dnotitia__akb/plugins/codex/akb-wiki/support/agents/ingest-doc.md) | agentRuntime signal |
| agentRuntime | [plugins/codex/akb-wiki/support/agents/ingest-jira.md](../../../../sources/dnotitia__akb/plugins/codex/akb-wiki/support/agents/ingest-jira.md) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/dnotitia__akb/server.json) | entrypoints signal |
| entrypoints | [packages/akb-mcp-client/bin/akb-mcp.mjs](../../../../sources/dnotitia__akb/packages/akb-mcp-client/bin/akb-mcp.mjs) | entrypoints signal |
| entrypoints | [frontend/src/index.css](../../../../sources/dnotitia__akb/frontend/src/index.css) | entrypoints signal |
| entrypoints | [frontend/src/main.tsx](../../../../sources/dnotitia__akb/frontend/src/main.tsx) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 7 | [server.json](../../../../sources/dnotitia__akb/server.json)<br>[packages/akb-mcp-client/bin/akb-mcp.mjs](../../../../sources/dnotitia__akb/packages/akb-mcp-client/bin/akb-mcp.mjs)<br>[frontend/src/index.css](../../../../sources/dnotitia__akb/frontend/src/index.css)<br>[frontend/src/main.tsx](../../../../sources/dnotitia__akb/frontend/src/main.tsx)<br>[backend/mcp_server/server.py](../../../../sources/dnotitia__akb/backend/mcp_server/server.py)<br>[backend/app/__main__.py](../../../../sources/dnotitia__akb/backend/app/__main__.py)<br>[backend/app/main.py](../../../../sources/dnotitia__akb/backend/app/main.py) |
| agentRuntime | 69 | [plugins/codex/akb-wiki/support/agents/ingest-commit.md](../../../../sources/dnotitia__akb/plugins/codex/akb-wiki/support/agents/ingest-commit.md)<br>[plugins/codex/akb-wiki/support/agents/ingest-confluence.md](../../../../sources/dnotitia__akb/plugins/codex/akb-wiki/support/agents/ingest-confluence.md)<br>[plugins/codex/akb-wiki/support/agents/ingest-doc.md](../../../../sources/dnotitia__akb/plugins/codex/akb-wiki/support/agents/ingest-doc.md)<br>[plugins/codex/akb-wiki/support/agents/ingest-jira.md](../../../../sources/dnotitia__akb/plugins/codex/akb-wiki/support/agents/ingest-jira.md)<br>[plugins/codex/akb-wiki/support/agents/ingest-pr.md](../../../../sources/dnotitia__akb/plugins/codex/akb-wiki/support/agents/ingest-pr.md)<br>[plugins/codex/akb-wiki/support/agents/ingest-release.md](../../../../sources/dnotitia__akb/plugins/codex/akb-wiki/support/agents/ingest-release.md)<br>[plugins/codex/akb-wiki/skills/akb-query/SKILL.md](../../../../sources/dnotitia__akb/plugins/codex/akb-wiki/skills/akb-query/SKILL.md)<br>[plugins/codex/akb-wiki/skills/akb-ingest/SKILL.md](../../../../sources/dnotitia__akb/plugins/codex/akb-wiki/skills/akb-ingest/SKILL.md) |
| mcp | 21 | [plugins/codex/akb-wiki/.mcp.json](../../../../sources/dnotitia__akb/plugins/codex/akb-wiki/.mcp.json)<br>[plugins/claude/akb-wiki/.mcp.json](../../../../sources/dnotitia__akb/plugins/claude/akb-wiki/.mcp.json)<br>[packages/akb-mcp-client/CHANGELOG.md](../../../../sources/dnotitia__akb/packages/akb-mcp-client/CHANGELOG.md)<br>[packages/akb-mcp-client/LICENSE](../../../../sources/dnotitia__akb/packages/akb-mcp-client/LICENSE)<br>[packages/akb-mcp-client/package.json](../../../../sources/dnotitia__akb/packages/akb-mcp-client/package.json)<br>[packages/akb-mcp-client/test/contract.test.mjs](../../../../sources/dnotitia__akb/packages/akb-mcp-client/test/contract.test.mjs)<br>[packages/akb-mcp-client/lib/proxy.mjs](../../../../sources/dnotitia__akb/packages/akb-mcp-client/lib/proxy.mjs)<br>[packages/akb-mcp-client/bin/akb-mcp.mjs](../../../../sources/dnotitia__akb/packages/akb-mcp-client/bin/akb-mcp.mjs) |
| retrieval | 137 | [plugins/codex/akb-wiki/.mcp.json](../../../../sources/dnotitia__akb/plugins/codex/akb-wiki/.mcp.json)<br>[plugins/codex/akb-wiki/support/agents/ingest-commit.md](../../../../sources/dnotitia__akb/plugins/codex/akb-wiki/support/agents/ingest-commit.md)<br>[plugins/codex/akb-wiki/support/agents/ingest-confluence.md](../../../../sources/dnotitia__akb/plugins/codex/akb-wiki/support/agents/ingest-confluence.md)<br>[plugins/codex/akb-wiki/support/agents/ingest-doc.md](../../../../sources/dnotitia__akb/plugins/codex/akb-wiki/support/agents/ingest-doc.md)<br>[plugins/codex/akb-wiki/support/agents/ingest-jira.md](../../../../sources/dnotitia__akb/plugins/codex/akb-wiki/support/agents/ingest-jira.md)<br>[plugins/codex/akb-wiki/support/agents/ingest-pr.md](../../../../sources/dnotitia__akb/plugins/codex/akb-wiki/support/agents/ingest-pr.md)<br>[plugins/codex/akb-wiki/support/agents/ingest-release.md](../../../../sources/dnotitia__akb/plugins/codex/akb-wiki/support/agents/ingest-release.md)<br>[plugins/codex/akb-wiki/skills/akb-query/SKILL.md](../../../../sources/dnotitia__akb/plugins/codex/akb-wiki/skills/akb-query/SKILL.md) |
| spec | 10 | [templates/doc-templates/adr.md](../../../../sources/dnotitia__akb/templates/doc-templates/adr.md)<br>[templates/doc-templates/prd.md](../../../../sources/dnotitia__akb/templates/doc-templates/prd.md)<br>[frontend/DESIGN_SYSTEM.md](../../../../sources/dnotitia__akb/frontend/DESIGN_SYSTEM.md)<br>[frontend/scripts/design-check.mjs](../../../../sources/dnotitia__akb/frontend/scripts/design-check.mjs)<br>[frontend/e2e/smoke.spec.ts](../../../../sources/dnotitia__akb/frontend/e2e/smoke.spec.ts)<br>[docs/design/2026-05-07-vector-store-driver-abstraction.md](../../../../sources/dnotitia__akb/docs/design/2026-05-07-vector-store-driver-abstraction.md)<br>[docs/design/2026-05-14-akb-help-skill-bootstrap.md](../../../../sources/dnotitia__akb/docs/design/2026-05-14-akb-help-skill-bootstrap.md)<br>[backend/templates/doc-templates/adr.md](../../../../sources/dnotitia__akb/backend/templates/doc-templates/adr.md) |
| eval | 189 | [templates/doc-templates/test-plan.md](../../../../sources/dnotitia__akb/templates/doc-templates/test-plan.md)<br>[scripts/bench_pg_rbac.py](../../../../sources/dnotitia__akb/scripts/bench_pg_rbac.py)<br>[packages/akb-mcp-client/test/contract.test.mjs](../../../../sources/dnotitia__akb/packages/akb-mcp-client/test/contract.test.mjs)<br>[frontend/src/test-msw.ts](../../../../sources/dnotitia__akb/frontend/src/test-msw.ts)<br>[frontend/src/test-setup.ts](../../../../sources/dnotitia__akb/frontend/src/test-setup.ts)<br>[frontend/src/pages/__tests__/auth-forgot.test.tsx](../../../../sources/dnotitia__akb/frontend/src/pages/__tests__/auth-forgot.test.tsx)<br>[frontend/src/pages/__tests__/auth-form-submit-and-error.test.tsx](../../../../sources/dnotitia__akb/frontend/src/pages/__tests__/auth-form-submit-and-error.test.tsx)<br>[frontend/src/pages/__tests__/document-view-toggle.test.tsx](../../../../sources/dnotitia__akb/frontend/src/pages/__tests__/document-view-toggle.test.tsx) |
| security | 26 | [docker-compose.audit.yaml](../../../../sources/dnotitia__akb/docker-compose.audit.yaml)<br>[SECURITY.md](../../../../sources/dnotitia__akb/SECURITY.md)<br>[scripts/bench_pg_rbac.py](../../../../sources/dnotitia__akb/scripts/bench_pg_rbac.py)<br>[frontend/src/pages/auth-callback.tsx](../../../../sources/dnotitia__akb/frontend/src/pages/auth-callback.tsx)<br>[frontend/src/pages/auth-forgot.tsx](../../../../sources/dnotitia__akb/frontend/src/pages/auth-forgot.tsx)<br>[frontend/src/pages/auth.tsx](../../../../sources/dnotitia__akb/frontend/src/pages/auth.tsx)<br>[frontend/src/pages/__tests__/auth-forgot.test.tsx](../../../../sources/dnotitia__akb/frontend/src/pages/__tests__/auth-forgot.test.tsx)<br>[frontend/src/pages/__tests__/auth-form-submit-and-error.test.tsx](../../../../sources/dnotitia__akb/frontend/src/pages/__tests__/auth-form-submit-and-error.test.tsx) |
| ci | 4 | [backend/scripts/ci/embed_stub.py](../../../../sources/dnotitia__akb/backend/scripts/ci/embed_stub.py)<br>[.github/workflows/backend-pytest.yml](../../../../sources/dnotitia__akb/.github/workflows/backend-pytest.yml)<br>[.github/workflows/check.yml](../../../../sources/dnotitia__akb/.github/workflows/check.yml)<br>[.github/workflows/e2e.yml](../../../../sources/dnotitia__akb/.github/workflows/e2e.yml) |
| container | 27 | [docker-compose.audit.yaml](../../../../sources/dnotitia__akb/docker-compose.audit.yaml)<br>[docker-compose.keycloak.yaml](../../../../sources/dnotitia__akb/docker-compose.keycloak.yaml)<br>[docker-compose.qdrant.yaml](../../../../sources/dnotitia__akb/docker-compose.qdrant.yaml)<br>[docker-compose.yaml](../../../../sources/dnotitia__akb/docker-compose.yaml)<br>[frontend/Dockerfile](../../../../sources/dnotitia__akb/frontend/Dockerfile)<br>[eval/longmemeval/docker-compose.yaml](../../../../sources/dnotitia__akb/eval/longmemeval/docker-compose.yaml)<br>[deploy/docker-compose.yaml](../../../../sources/dnotitia__akb/deploy/docker-compose.yaml)<br>[deploy/keycloak-dev/akb-realm.json](../../../../sources/dnotitia__akb/deploy/keycloak-dev/akb-realm.json) |
| instruction | 1 | [CLAUDE.md](../../../../sources/dnotitia__akb/CLAUDE.md) |
| docs | 20 | [README.md](../../../../sources/dnotitia__akb/README.md)<br>[okf/README.md](../../../../sources/dnotitia__akb/okf/README.md)<br>[frontend/README.md](../../../../sources/dnotitia__akb/frontend/README.md)<br>[eval/longmemeval/README.md](../../../../sources/dnotitia__akb/eval/longmemeval/README.md)<br>[eval/agentic-bench/README.md](../../../../sources/dnotitia__akb/eval/agentic-bench/README.md)<br>[docs/vector-store-seahorse.md](../../../../sources/dnotitia__akb/docs/vector-store-seahorse.md)<br>[docs/designs/search-acl-scale/00-overview.md](../../../../sources/dnotitia__akb/docs/designs/search-acl-scale/00-overview.md)<br>[docs/designs/pg-native-rbac/00-overview.md](../../../../sources/dnotitia__akb/docs/designs/pg-native-rbac/00-overview.md) |
| config | 6 | [packages/akb-mcp-client/package.json](../../../../sources/dnotitia__akb/packages/akb-mcp-client/package.json)<br>[frontend/package.json](../../../../sources/dnotitia__akb/frontend/package.json)<br>[frontend/tsconfig.json](../../../../sources/dnotitia__akb/frontend/tsconfig.json)<br>[backend/pyproject.toml](../../../../sources/dnotitia__akb/backend/pyproject.toml)<br>[backend/uv.lock](../../../../sources/dnotitia__akb/backend/uv.lock)<br>[agents/requirements.txt](../../../../sources/dnotitia__akb/agents/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 189 | [templates/doc-templates/test-plan.md](../../../../sources/dnotitia__akb/templates/doc-templates/test-plan.md)<br>[scripts/bench_pg_rbac.py](../../../../sources/dnotitia__akb/scripts/bench_pg_rbac.py)<br>[packages/akb-mcp-client/test/contract.test.mjs](../../../../sources/dnotitia__akb/packages/akb-mcp-client/test/contract.test.mjs)<br>[frontend/src/test-msw.ts](../../../../sources/dnotitia__akb/frontend/src/test-msw.ts)<br>[frontend/src/test-setup.ts](../../../../sources/dnotitia__akb/frontend/src/test-setup.ts)<br>[frontend/src/pages/__tests__/auth-forgot.test.tsx](../../../../sources/dnotitia__akb/frontend/src/pages/__tests__/auth-forgot.test.tsx) |
| CI workflow | 4 | [backend/scripts/ci/embed_stub.py](../../../../sources/dnotitia__akb/backend/scripts/ci/embed_stub.py)<br>[.github/workflows/backend-pytest.yml](../../../../sources/dnotitia__akb/.github/workflows/backend-pytest.yml)<br>[.github/workflows/check.yml](../../../../sources/dnotitia__akb/.github/workflows/check.yml)<br>[.github/workflows/e2e.yml](../../../../sources/dnotitia__akb/.github/workflows/e2e.yml) |
| 컨테이너/배포 | 27 | [docker-compose.audit.yaml](../../../../sources/dnotitia__akb/docker-compose.audit.yaml)<br>[docker-compose.keycloak.yaml](../../../../sources/dnotitia__akb/docker-compose.keycloak.yaml)<br>[docker-compose.qdrant.yaml](../../../../sources/dnotitia__akb/docker-compose.qdrant.yaml)<br>[docker-compose.yaml](../../../../sources/dnotitia__akb/docker-compose.yaml)<br>[frontend/Dockerfile](../../../../sources/dnotitia__akb/frontend/Dockerfile)<br>[eval/longmemeval/docker-compose.yaml](../../../../sources/dnotitia__akb/eval/longmemeval/docker-compose.yaml) |
| 보안/정책 | 26 | [docker-compose.audit.yaml](../../../../sources/dnotitia__akb/docker-compose.audit.yaml)<br>[SECURITY.md](../../../../sources/dnotitia__akb/SECURITY.md)<br>[scripts/bench_pg_rbac.py](../../../../sources/dnotitia__akb/scripts/bench_pg_rbac.py)<br>[frontend/src/pages/auth-callback.tsx](../../../../sources/dnotitia__akb/frontend/src/pages/auth-callback.tsx)<br>[frontend/src/pages/auth-forgot.tsx](../../../../sources/dnotitia__akb/frontend/src/pages/auth-forgot.tsx)<br>[frontend/src/pages/auth.tsx](../../../../sources/dnotitia__akb/frontend/src/pages/auth.tsx) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/dnotitia__akb/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `plugins/codex/akb-wiki/.mcp.json`, `plugins/claude/akb-wiki/.mcp.json`, `packages/akb-mcp-client/CHANGELOG.md`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`, `packages/akb-mcp-client/bin/akb-mcp.mjs`, `frontend/src/index.css`.
3. agent/tool runtime 매핑: `plugins/codex/akb-wiki/support/agents/ingest-commit.md`, `plugins/codex/akb-wiki/support/agents/ingest-confluence.md`, `plugins/codex/akb-wiki/support/agents/ingest-doc.md`.
4. retrieval/memory/indexing 확인: `plugins/codex/akb-wiki/.mcp.json`, `plugins/codex/akb-wiki/support/agents/ingest-commit.md`, `plugins/codex/akb-wiki/support/agents/ingest-confluence.md`.
5. test/eval 파일로 동작 검증: `templates/doc-templates/test-plan.md`, `scripts/bench_pg_rbac.py`, `packages/akb-mcp-client/test/contract.test.mjs`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 AKB — Agent Knowledgebase. Organizational memory for AI agents vault scoped docs / tables / files unified by URI graph, . 핵심 구조 신호는 Python, README.md, CLAUDE.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
