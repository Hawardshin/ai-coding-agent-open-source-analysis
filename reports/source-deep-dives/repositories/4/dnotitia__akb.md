# dnotitia/akb Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

AKB — Agent Knowledgebase. Organizational memory for AI agents: vault-scoped docs / tables / files unified by URI graph, served over MCP.

## 요약

- 조사 단위: `sources/dnotitia__akb` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 684 files, 148 directories, depth score 130, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=plugins/codex/akb-wiki/.mcp.json, plugins/claude/akb-wiki/.mcp.json, packages/akb-mcp-client/CHANGELOG.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | dnotitia/akb |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 59 |
| Forks | 3 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/dnotitia__akb](../../../../sources/dnotitia__akb) |
| Existing report | [reports/global-trending/repositories/dnotitia__akb.md](../../../global-trending/repositories/dnotitia__akb.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 684 / 148 |
| Max observed depth | 10 |
| Top directories | .agents, .claude-plugin, .github, agents, backend, config, deploy, docs, eval, frontend, okf, packages, plugins, scripts, templates |
| Top extensions | .py: 250, .tsx: 126, .md: 88, .sh: 69, .ts: 53, .yaml: 31, .json: 16, .proto: 13, (none): 10, .mjs: 4, .conf: 3, .example: 3 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
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


## How It Runs

_No command surface extracted from root manifests._


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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
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


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 189 | [templates/doc-templates/test-plan.md](../../../../sources/dnotitia__akb/templates/doc-templates/test-plan.md)<br>[scripts/bench_pg_rbac.py](../../../../sources/dnotitia__akb/scripts/bench_pg_rbac.py)<br>[packages/akb-mcp-client/test/contract.test.mjs](../../../../sources/dnotitia__akb/packages/akb-mcp-client/test/contract.test.mjs)<br>[frontend/src/test-msw.ts](../../../../sources/dnotitia__akb/frontend/src/test-msw.ts)<br>[frontend/src/test-setup.ts](../../../../sources/dnotitia__akb/frontend/src/test-setup.ts)<br>[frontend/src/pages/__tests__/auth-forgot.test.tsx](../../../../sources/dnotitia__akb/frontend/src/pages/__tests__/auth-forgot.test.tsx) |
| CI workflows | 4 | [backend/scripts/ci/embed_stub.py](../../../../sources/dnotitia__akb/backend/scripts/ci/embed_stub.py)<br>[.github/workflows/backend-pytest.yml](../../../../sources/dnotitia__akb/.github/workflows/backend-pytest.yml)<br>[.github/workflows/check.yml](../../../../sources/dnotitia__akb/.github/workflows/check.yml)<br>[.github/workflows/e2e.yml](../../../../sources/dnotitia__akb/.github/workflows/e2e.yml) |
| Containers / deploy | 27 | [docker-compose.audit.yaml](../../../../sources/dnotitia__akb/docker-compose.audit.yaml)<br>[docker-compose.keycloak.yaml](../../../../sources/dnotitia__akb/docker-compose.keycloak.yaml)<br>[docker-compose.qdrant.yaml](../../../../sources/dnotitia__akb/docker-compose.qdrant.yaml)<br>[docker-compose.yaml](../../../../sources/dnotitia__akb/docker-compose.yaml)<br>[frontend/Dockerfile](../../../../sources/dnotitia__akb/frontend/Dockerfile)<br>[eval/longmemeval/docker-compose.yaml](../../../../sources/dnotitia__akb/eval/longmemeval/docker-compose.yaml) |
| Security / policy | 26 | [docker-compose.audit.yaml](../../../../sources/dnotitia__akb/docker-compose.audit.yaml)<br>[SECURITY.md](../../../../sources/dnotitia__akb/SECURITY.md)<br>[scripts/bench_pg_rbac.py](../../../../sources/dnotitia__akb/scripts/bench_pg_rbac.py)<br>[frontend/src/pages/auth-callback.tsx](../../../../sources/dnotitia__akb/frontend/src/pages/auth-callback.tsx)<br>[frontend/src/pages/auth-forgot.tsx](../../../../sources/dnotitia__akb/frontend/src/pages/auth-forgot.tsx)<br>[frontend/src/pages/auth.tsx](../../../../sources/dnotitia__akb/frontend/src/pages/auth.tsx) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/dnotitia__akb/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `plugins/codex/akb-wiki/.mcp.json`, `plugins/claude/akb-wiki/.mcp.json`, `packages/akb-mcp-client/CHANGELOG.md`.
2. Trace execution through entrypoints: `server.json`, `packages/akb-mcp-client/bin/akb-mcp.mjs`, `frontend/src/index.css`.
3. Map agent/tool runtime through: `plugins/codex/akb-wiki/support/agents/ingest-commit.md`, `plugins/codex/akb-wiki/support/agents/ingest-confluence.md`, `plugins/codex/akb-wiki/support/agents/ingest-doc.md`.
4. Inspect retrieval/memory/indexing through: `plugins/codex/akb-wiki/.mcp.json`, `plugins/codex/akb-wiki/support/agents/ingest-commit.md`, `plugins/codex/akb-wiki/support/agents/ingest-confluence.md`.
5. Verify behavior through test/eval files: `templates/doc-templates/test-plan.md`, `scripts/bench_pg_rbac.py`, `packages/akb-mcp-client/test/contract.test.mjs`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 AKB — Agent Knowledgebase. Organizational memory for AI agents vault scoped docs / tables / files unified by URI graph, . 핵심 구조 신호는 Python, README.md, CLAUDE.md, LICENSE, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
