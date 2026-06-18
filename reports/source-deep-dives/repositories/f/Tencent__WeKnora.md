# Tencent/WeKnora Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Open-source LLM knowledge platform: turn raw documents into a queryable RAG, an autonomous reasoning agent, and a self-maintaining Wiki.

## 요약

- 조사 단위: `sources/Tencent__WeKnora` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,045 files, 276 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 retrieval=testdata/wiki_test/doc1_stardust_memo.md, testdata/wiki_test/doc2_psionic_engine.md, testdata/wiki_test/doc3_dr_cole_log.md이고, 의존성 단서는 openai, mcp, ollama, llama, qdrant, milvus, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Tencent/WeKnora |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Go |
| Stars | 16422 |
| Forks | 2120 |
| License | NOASSERTION |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/Tencent__WeKnora](../../../../sources/Tencent__WeKnora) |
| Existing report | [reports/llm-wiki/repositories/Tencent__WeKnora.md](../../../llm-wiki/repositories/Tencent__WeKnora.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2045 / 276 |
| Max observed depth | 8 |
| Top directories | .github, cli, client, cmd, config, dataset, deploy, docker, docreader, docs, examples, Formula, frontend, helm, internal, mcp-server, migrations, miniprogram, misc, packages |
| Top extensions | .go: 1172, .vue: 140, .ts: 130, .sql: 129, .md: 115, .py: 66, .svg: 61, .json: 31, .yaml: 29, .png: 25, (none): 20, .sh: 19 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 33 |
| client | source boundary | 2 |
| tests | validation surface | 2 |
| .github | ci surface | 1 |
| cli | top-level component | 1 |
| cmd | source boundary | 1 |
| cmd/desktop | cmd workspace | 1 |
| cmd/server | cmd workspace | 1 |
| config | top-level component | 1 |
| dataset | top-level component | 1 |
| deploy | deployment surface | 1 |
| docker | documentation surface | 1 |
| docreader | documentation surface | 1 |
| examples | top-level component | 1 |
| examples/skills | examples workspace | 1 |
| Formula | top-level component | 1 |
| frontend | top-level component | 1 |
| helm | deployment surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| build | Makefile | build | make build |
| utility | Makefile | run | make run |
| test | Makefile | test | make test |
| utility | Makefile | clean | make clean |
| build | Makefile | docker-build-app | make docker-build-app |
| build | Makefile | docker-build-docreader | make docker-build-docreader |
| build | Makefile | docker-build-frontend | make docker-build-frontend |
| build | Makefile | docker-build-all | make docker-build-all |
| container | Makefile | docker-run | make docker-run |
| serve-dev | Makefile | start-all | make start-all |
| serve-dev | Makefile | start-ollama | make start-ollama |
| serve-dev | Makefile | start-docker | make start-docker |
| utility | Makefile | stop-all | make stop-all |
| container | Makefile | docker-stop | make docker-stop |
| build | Makefile | build-images | make build-images |
| build | Makefile | build-images-app | make build-images-app |
| build | Makefile | build-images-docreader | make build-images-docreader |
| build | Makefile | build-images-frontend | make build-images-frontend |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | qdrant, milvus, weaviate, pgvector |
| modelRuntime | ollama, llama |
| webRuntime | none |
| developerSurface | none |
| observability | prometheus |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [testdata/wiki_test/doc1_stardust_memo.md](../../../../sources/Tencent__WeKnora/testdata/wiki_test/doc1_stardust_memo.md) | retrieval signal |
| retrieval | [testdata/wiki_test/doc2_psionic_engine.md](../../../../sources/Tencent__WeKnora/testdata/wiki_test/doc2_psionic_engine.md) | retrieval signal |
| retrieval | [testdata/wiki_test/doc3_dr_cole_log.md](../../../../sources/Tencent__WeKnora/testdata/wiki_test/doc3_dr_cole_log.md) | retrieval signal |
| retrieval | [skills/preloaded/openmaic-classroom/scripts/rag-to-requirement.py](../../../../sources/Tencent__WeKnora/skills/preloaded/openmaic-classroom/scripts/rag-to-requirement.py) | retrieval signal |
| entrypoints | [mcp-server/main.py](../../../../sources/Tencent__WeKnora/mcp-server/main.py) | entrypoints signal |
| entrypoints | [internal/runtime/server.go](../../../../sources/Tencent__WeKnora/internal/runtime/server.go) | entrypoints signal |
| entrypoints | [frontend/src/App.vue](../../../../sources/Tencent__WeKnora/frontend/src/App.vue) | entrypoints signal |
| entrypoints | [frontend/src/main.ts](../../../../sources/Tencent__WeKnora/frontend/src/main.ts) | entrypoints signal |
| docs | [README_CN.md](../../../../sources/Tencent__WeKnora/README_CN.md) | docs signal |
| docs | [README_JA.md](../../../../sources/Tencent__WeKnora/README_JA.md) | docs signal |
| docs | [README_KO.md](../../../../sources/Tencent__WeKnora/README_KO.md) | docs signal |
| docs | [README.md](../../../../sources/Tencent__WeKnora/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 9 | [mcp-server/main.py](../../../../sources/Tencent__WeKnora/mcp-server/main.py)<br>[internal/runtime/server.go](../../../../sources/Tencent__WeKnora/internal/runtime/server.go)<br>[frontend/src/App.vue](../../../../sources/Tencent__WeKnora/frontend/src/App.vue)<br>[frontend/src/main.ts](../../../../sources/Tencent__WeKnora/frontend/src/main.ts)<br>[docreader/main.py](../../../../sources/Tencent__WeKnora/docreader/main.py)<br>[cmd/server/main.go](../../../../sources/Tencent__WeKnora/cmd/server/main.go)<br>[cmd/desktop/main.go](../../../../sources/Tencent__WeKnora/cmd/desktop/main.go)<br>[cli/main.go](../../../../sources/Tencent__WeKnora/cli/main.go) |
| agentRuntime | 207 | [skills/preloaded/openmaic-classroom/SKILL.md](../../../../sources/Tencent__WeKnora/skills/preloaded/openmaic-classroom/SKILL.md)<br>[skills/preloaded/openmaic-classroom/scripts/concept-to-requirement.py](../../../../sources/Tencent__WeKnora/skills/preloaded/openmaic-classroom/scripts/concept-to-requirement.py)<br>[skills/preloaded/openmaic-classroom/scripts/rag-to-requirement.py](../../../../sources/Tencent__WeKnora/skills/preloaded/openmaic-classroom/scripts/rag-to-requirement.py)<br>[skills/preloaded/openmaic-classroom/references/api-reference.md](../../../../sources/Tencent__WeKnora/skills/preloaded/openmaic-classroom/references/api-reference.md)<br>[skills/preloaded/openmaic-classroom/references/requirement-builder.md](../../../../sources/Tencent__WeKnora/skills/preloaded/openmaic-classroom/references/requirement-builder.md)<br>[skills/preloaded/document-analyzer/SKILL.md](../../../../sources/Tencent__WeKnora/skills/preloaded/document-analyzer/SKILL.md)<br>[skills/preloaded/doc-coauthoring/SKILL.md](../../../../sources/Tencent__WeKnora/skills/preloaded/doc-coauthoring/SKILL.md)<br>[skills/preloaded/data-processor/SKILL.md](../../../../sources/Tencent__WeKnora/skills/preloaded/data-processor/SKILL.md) |
| mcp | 56 | [migrations/versioned/000017_mcp_builtin.down.sql](../../../../sources/Tencent__WeKnora/migrations/versioned/000017_mcp_builtin.down.sql)<br>[migrations/versioned/000017_mcp_builtin.up.sql](../../../../sources/Tencent__WeKnora/migrations/versioned/000017_mcp_builtin.up.sql)<br>[migrations/versioned/000042_mcp_tool_approval.down.sql](../../../../sources/Tencent__WeKnora/migrations/versioned/000042_mcp_tool_approval.down.sql)<br>[migrations/versioned/000042_mcp_tool_approval.up.sql](../../../../sources/Tencent__WeKnora/migrations/versioned/000042_mcp_tool_approval.up.sql)<br>[mcp-server/__init__.py](../../../../sources/Tencent__WeKnora/mcp-server/__init__.py)<br>[mcp-server/.gitignore](../../../../sources/Tencent__WeKnora/mcp-server/.gitignore)<br>[mcp-server/CHANGELOG.md](../../../../sources/Tencent__WeKnora/mcp-server/CHANGELOG.md)<br>[mcp-server/Dockerfile](../../../../sources/Tencent__WeKnora/mcp-server/Dockerfile) |
| retrieval | 295 | [testdata/wiki_test/doc1_stardust_memo.md](../../../../sources/Tencent__WeKnora/testdata/wiki_test/doc1_stardust_memo.md)<br>[testdata/wiki_test/doc2_psionic_engine.md](../../../../sources/Tencent__WeKnora/testdata/wiki_test/doc2_psionic_engine.md)<br>[testdata/wiki_test/doc3_dr_cole_log.md](../../../../sources/Tencent__WeKnora/testdata/wiki_test/doc3_dr_cole_log.md)<br>[skills/preloaded/openmaic-classroom/scripts/rag-to-requirement.py](../../../../sources/Tencent__WeKnora/skills/preloaded/openmaic-classroom/scripts/rag-to-requirement.py)<br>[miniprogram/pages/index/index.js](../../../../sources/Tencent__WeKnora/miniprogram/pages/index/index.js)<br>[miniprogram/pages/index/index.json](../../../../sources/Tencent__WeKnora/miniprogram/pages/index/index.json)<br>[miniprogram/pages/index/index.wxml](../../../../sources/Tencent__WeKnora/miniprogram/pages/index/index.wxml)<br>[miniprogram/pages/index/index.wxss](../../../../sources/Tencent__WeKnora/miniprogram/pages/index/index.wxss) |
| spec | 25 | [skills/preloaded/openmaic-classroom/scripts/concept-to-requirement.py](../../../../sources/Tencent__WeKnora/skills/preloaded/openmaic-classroom/scripts/concept-to-requirement.py)<br>[skills/preloaded/openmaic-classroom/scripts/rag-to-requirement.py](../../../../sources/Tencent__WeKnora/skills/preloaded/openmaic-classroom/scripts/rag-to-requirement.py)<br>[skills/preloaded/openmaic-classroom/references/requirement-builder.md](../../../../sources/Tencent__WeKnora/skills/preloaded/openmaic-classroom/references/requirement-builder.md)<br>[mcp-server/requirements.txt](../../../../sources/Tencent__WeKnora/mcp-server/requirements.txt)<br>[docs/ROADMAP.md](../../../../sources/Tencent__WeKnora/docs/ROADMAP.md)<br>[docs/images/architecture.png](../../../../sources/Tencent__WeKnora/docs/images/architecture.png)<br>[cli/acceptance/doc.go](../../../../sources/Tencent__WeKnora/cli/acceptance/doc.go)<br>[cli/acceptance/testdata/wire/auth_status.error_auth_unauthenticated.json](../../../../sources/Tencent__WeKnora/cli/acceptance/testdata/wire/auth_status.error_auth_unauthenticated.json) |
| eval | 443 | [test_agent_config.sh](../../../../sources/Tencent__WeKnora/test_agent_config.sh)<br>[tests/miniprogram/miniprogram.test.js](../../../../sources/Tencent__WeKnora/tests/miniprogram/miniprogram.test.js)<br>[testdata/chat_import_test.json](../../../../sources/Tencent__WeKnora/testdata/chat_import_test.json)<br>[testdata/wiki_test/doc1_stardust_memo.md](../../../../sources/Tencent__WeKnora/testdata/wiki_test/doc1_stardust_memo.md)<br>[testdata/wiki_test/doc2_psionic_engine.md](../../../../sources/Tencent__WeKnora/testdata/wiki_test/doc2_psionic_engine.md)<br>[testdata/wiki_test/doc3_dr_cole_log.md](../../../../sources/Tencent__WeKnora/testdata/wiki_test/doc3_dr_cole_log.md)<br>[scripts/test-homebrew.sh](../../../../sources/Tencent__WeKnora/scripts/test-homebrew.sh)<br>[mcp-server/test_imports.py](../../../../sources/Tencent__WeKnora/mcp-server/test_imports.py) |
| security | 81 | [SECURITY.md](../../../../sources/Tencent__WeKnora/SECURITY.md)<br>[migrations/versioned/000043_tenant_rbac.down.sql](../../../../sources/Tencent__WeKnora/migrations/versioned/000043_tenant_rbac.down.sql)<br>[migrations/versioned/000043_tenant_rbac.up.sql](../../../../sources/Tencent__WeKnora/migrations/versioned/000043_tenant_rbac.up.sql)<br>[migrations/versioned/000044_audit_log.down.sql](../../../../sources/Tencent__WeKnora/migrations/versioned/000044_audit_log.down.sql)<br>[migrations/versioned/000044_audit_log.up.sql](../../../../sources/Tencent__WeKnora/migrations/versioned/000044_audit_log.up.sql)<br>[internal/utils/security_test.go](../../../../sources/Tencent__WeKnora/internal/utils/security_test.go)<br>[internal/utils/security.go](../../../../sources/Tencent__WeKnora/internal/utils/security.go)<br>[internal/types/audit_log_test.go](../../../../sources/Tencent__WeKnora/internal/types/audit_log_test.go) |
| ci | 4 | [.github/workflows/cli-e2e.yml](../../../../sources/Tencent__WeKnora/.github/workflows/cli-e2e.yml)<br>[.github/workflows/cli.yml](../../../../sources/Tencent__WeKnora/.github/workflows/cli.yml)<br>[.github/workflows/docker-image.yml](../../../../sources/Tencent__WeKnora/.github/workflows/docker-image.yml)<br>[.github/workflows/release-lite.yml](../../../../sources/Tencent__WeKnora/.github/workflows/release-lite.yml) |
| container | 25 | [docker-compose.dev.yml](../../../../sources/Tencent__WeKnora/docker-compose.dev.yml)<br>[docker-compose.yml](../../../../sources/Tencent__WeKnora/docker-compose.yml)<br>[mcp-server/Dockerfile](../../../../sources/Tencent__WeKnora/mcp-server/Dockerfile)<br>[helm/.helmignore](../../../../sources/Tencent__WeKnora/helm/.helmignore)<br>[helm/Chart.yaml](../../../../sources/Tencent__WeKnora/helm/Chart.yaml)<br>[helm/README.md](../../../../sources/Tencent__WeKnora/helm/README.md)<br>[helm/values.yaml](../../../../sources/Tencent__WeKnora/helm/values.yaml)<br>[helm/templates/_helpers.tpl](../../../../sources/Tencent__WeKnora/helm/templates/_helpers.tpl) |
| instruction | 1 | [cli/AGENTS.md](../../../../sources/Tencent__WeKnora/cli/AGENTS.md) |
| docs | 132 | [README_CN.md](../../../../sources/Tencent__WeKnora/README_CN.md)<br>[README_JA.md](../../../../sources/Tencent__WeKnora/README_JA.md)<br>[README_KO.md](../../../../sources/Tencent__WeKnora/README_KO.md)<br>[README.md](../../../../sources/Tencent__WeKnora/README.md)<br>[scripts/cloud-image/README.md](../../../../sources/Tencent__WeKnora/scripts/cloud-image/README.md)<br>[miniprogram/README.md](../../../../sources/Tencent__WeKnora/miniprogram/README.md)<br>[mcp-server/README.md](../../../../sources/Tencent__WeKnora/mcp-server/README.md)<br>[internal/datasource/README.md](../../../../sources/Tencent__WeKnora/internal/datasource/README.md) |
| config | 15 | [go.mod](../../../../sources/Tencent__WeKnora/go.mod)<br>[Makefile](../../../../sources/Tencent__WeKnora/Makefile)<br>[miniprogram/package.json](../../../../sources/Tencent__WeKnora/miniprogram/package.json)<br>[mcp-server/pyproject.toml](../../../../sources/Tencent__WeKnora/mcp-server/pyproject.toml)<br>[mcp-server/requirements.txt](../../../../sources/Tencent__WeKnora/mcp-server/requirements.txt)<br>[frontend/package.json](../../../../sources/Tencent__WeKnora/frontend/package.json)<br>[frontend/pnpm-workspace.yaml](../../../../sources/Tencent__WeKnora/frontend/pnpm-workspace.yaml)<br>[frontend/tsconfig.json](../../../../sources/Tencent__WeKnora/frontend/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 443 | [test_agent_config.sh](../../../../sources/Tencent__WeKnora/test_agent_config.sh)<br>[tests/miniprogram/miniprogram.test.js](../../../../sources/Tencent__WeKnora/tests/miniprogram/miniprogram.test.js)<br>[testdata/chat_import_test.json](../../../../sources/Tencent__WeKnora/testdata/chat_import_test.json)<br>[testdata/wiki_test/doc1_stardust_memo.md](../../../../sources/Tencent__WeKnora/testdata/wiki_test/doc1_stardust_memo.md)<br>[testdata/wiki_test/doc2_psionic_engine.md](../../../../sources/Tencent__WeKnora/testdata/wiki_test/doc2_psionic_engine.md)<br>[testdata/wiki_test/doc3_dr_cole_log.md](../../../../sources/Tencent__WeKnora/testdata/wiki_test/doc3_dr_cole_log.md) |
| CI workflows | 4 | [.github/workflows/cli-e2e.yml](../../../../sources/Tencent__WeKnora/.github/workflows/cli-e2e.yml)<br>[.github/workflows/cli.yml](../../../../sources/Tencent__WeKnora/.github/workflows/cli.yml)<br>[.github/workflows/docker-image.yml](../../../../sources/Tencent__WeKnora/.github/workflows/docker-image.yml)<br>[.github/workflows/release-lite.yml](../../../../sources/Tencent__WeKnora/.github/workflows/release-lite.yml) |
| Containers / deploy | 25 | [docker-compose.dev.yml](../../../../sources/Tencent__WeKnora/docker-compose.dev.yml)<br>[docker-compose.yml](../../../../sources/Tencent__WeKnora/docker-compose.yml)<br>[mcp-server/Dockerfile](../../../../sources/Tencent__WeKnora/mcp-server/Dockerfile)<br>[helm/.helmignore](../../../../sources/Tencent__WeKnora/helm/.helmignore)<br>[helm/Chart.yaml](../../../../sources/Tencent__WeKnora/helm/Chart.yaml)<br>[helm/README.md](../../../../sources/Tencent__WeKnora/helm/README.md) |
| Security / policy | 81 | [SECURITY.md](../../../../sources/Tencent__WeKnora/SECURITY.md)<br>[migrations/versioned/000043_tenant_rbac.down.sql](../../../../sources/Tencent__WeKnora/migrations/versioned/000043_tenant_rbac.down.sql)<br>[migrations/versioned/000043_tenant_rbac.up.sql](../../../../sources/Tencent__WeKnora/migrations/versioned/000043_tenant_rbac.up.sql)<br>[migrations/versioned/000044_audit_log.down.sql](../../../../sources/Tencent__WeKnora/migrations/versioned/000044_audit_log.down.sql)<br>[migrations/versioned/000044_audit_log.up.sql](../../../../sources/Tencent__WeKnora/migrations/versioned/000044_audit_log.up.sql)<br>[internal/utils/security_test.go](../../../../sources/Tencent__WeKnora/internal/utils/security_test.go) |
| Agent instructions | 1 | [cli/AGENTS.md](../../../../sources/Tencent__WeKnora/cli/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `testdata/wiki_test/doc1_stardust_memo.md`, `testdata/wiki_test/doc2_psionic_engine.md`, `testdata/wiki_test/doc3_dr_cole_log.md`.
2. Trace execution through entrypoints: `mcp-server/main.py`, `internal/runtime/server.go`, `frontend/src/App.vue`.
3. Map agent/tool runtime through: `skills/preloaded/openmaic-classroom/SKILL.md`, `skills/preloaded/openmaic-classroom/scripts/concept-to-requirement.py`, `skills/preloaded/openmaic-classroom/scripts/rag-to-requirement.py`.
4. Inspect retrieval/memory/indexing through: `testdata/wiki_test/doc1_stardust_memo.md`, `testdata/wiki_test/doc2_psionic_engine.md`, `testdata/wiki_test/doc3_dr_cole_log.md`.
5. Verify behavior through test/eval files: `test_agent_config.sh`, `tests/miniprogram/miniprogram.test.js`, `testdata/chat_import_test.json`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Open source LLM knowledge platform turn raw documents into a queryable RAG, an autonomous reasoning agent, and a self ma. 핵심 구조 신호는 Go, go.mod, docker-compose.yml, Makefile, README.md, LICENSE이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
