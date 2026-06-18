# EmbeddedLLM/JamAIBase Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

The collaborative spreadsheet for AI. Chain cells into powerful pipelines, experiment with prompts and models, and evaluate LLM responses in real-time. Work together seamlessly to build and iterate on AI applications.

## 요약

- 조사 단위: `sources/EmbeddedLLM__JamAIBase` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 876 files, 200 directories, depth score 131, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=services/api/tests/utils/test_mcp.py, services/api/src/owl/utils/mcp/__init__.py, services/api/src/owl/utils/mcp/custom_tools.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | EmbeddedLLM/JamAIBase |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 1098 |
| Forks | 41 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/EmbeddedLLM__JamAIBase](../../../../sources/EmbeddedLLM__JamAIBase) |
| Existing report | [reports/global-trending/repositories/EmbeddedLLM__JamAIBase.md](../../../global-trending/repositories/EmbeddedLLM__JamAIBase.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 876 / 200 |
| Max observed depth | 10 |
| Top directories | .github, clients, docker, docs, scripts, services |
| Top extensions | .svelte: 300, .ts: 170, .py: 157, .md: 23, (none): 23, .webp: 22, .pdf: 21, .png: 19, .yml: 18, .json: 16, .svg: 15, .mp3: 9 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| services/app | services workspace | 71 |
| services/api | services workspace | 39 |
| docs | documentation surface | 4 |
| .github | ci surface | 1 |
| clients | source boundary | 1 |
| docker | documentation surface | 1 |
| scripts | top-level component | 1 |
| services | top-level component | 1 |
| services/replication | services workspace | 1 |


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
| mcp | [services/api/tests/utils/test_mcp.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/tests/utils/test_mcp.py) | mcp signal |
| mcp | [services/api/src/owl/utils/mcp/__init__.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/src/owl/utils/mcp/__init__.py) | mcp signal |
| mcp | [services/api/src/owl/utils/mcp/custom_tools.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/src/owl/utils/mcp/custom_tools.py) | mcp signal |
| mcp | [services/api/src/owl/utils/mcp/helpers.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/src/owl/utils/mcp/helpers.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/EmbeddedLLM__JamAIBase/AGENTS.md) | agentRuntime signal |
| agentRuntime | [services/app/src/hooks.server.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/src/hooks.server.ts) | agentRuntime signal |
| agentRuntime | [services/app/src/hooks.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/src/hooks.ts) | agentRuntime signal |
| entrypoints | [services/app/src/app.css](../../../../sources/EmbeddedLLM__JamAIBase/services/app/src/app.css) | entrypoints signal |
| entrypoints | [services/app/src/app.d.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/src/app.d.ts) | entrypoints signal |
| entrypoints | [services/app/src/app.html](../../../../sources/EmbeddedLLM__JamAIBase/services/app/src/app.html) | entrypoints signal |
| entrypoints | [services/api/src/owl/utils/mcp/server.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/src/owl/utils/mcp/server.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/EmbeddedLLM__JamAIBase/CLAUDE.md) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 5 | [services/app/src/app.css](../../../../sources/EmbeddedLLM__JamAIBase/services/app/src/app.css)<br>[services/app/src/app.d.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/src/app.d.ts)<br>[services/app/src/app.html](../../../../sources/EmbeddedLLM__JamAIBase/services/app/src/app.html)<br>[services/api/src/owl/utils/mcp/server.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/src/owl/utils/mcp/server.py)<br>[clients/typescript/src/index.ts](../../../../sources/EmbeddedLLM__JamAIBase/clients/typescript/src/index.ts) |
| agentRuntime | 3 | [AGENTS.md](../../../../sources/EmbeddedLLM__JamAIBase/AGENTS.md)<br>[services/app/src/hooks.server.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/src/hooks.server.ts)<br>[services/app/src/hooks.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/src/hooks.ts) |
| mcp | 6 | [services/api/tests/utils/test_mcp.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/tests/utils/test_mcp.py)<br>[services/api/src/owl/utils/mcp/__init__.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/src/owl/utils/mcp/__init__.py)<br>[services/api/src/owl/utils/mcp/custom_tools.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/src/owl/utils/mcp/custom_tools.py)<br>[services/api/src/owl/utils/mcp/helpers.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/src/owl/utils/mcp/helpers.py)<br>[services/api/src/owl/utils/mcp/server.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/src/owl/utils/mcp/server.py)<br>[clients/python/src/jamaibase/types/mcp.py](../../../../sources/EmbeddedLLM__JamAIBase/clients/python/src/jamaibase/types/mcp.py) |
| retrieval | 67 | `services/app/src/routes/(main)/system/models/[model_id]/(components)/index.ts`<br>`services/app/src/routes/(main)/system/models/(components)/index.ts`<br>`services/app/src/routes/(main)/settings/account/(components)/index.ts`<br>`services/app/src/routes/(main)/project/[project_id]/overview/(components)/index.ts`<br>`services/app/src/routes/(main)/project/[project_id]/members/(components)/index.ts`<br>`services/app/src/routes/(main)/project/[project_id]/knowledge-table/+page.svelte`<br>`services/app/src/routes/(main)/project/[project_id]/knowledge-table/+page.ts`<br>`services/app/src/routes/(main)/project/[project_id]/knowledge-table/[table_id]/+page.ts` |
| spec | 4 | [services/app/tests/tableList.spec.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/tableList.spec.ts)<br>[services/app/tests/tables/actionTable.spec.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/tables/actionTable.spec.ts)<br>[services/app/tests/tables/chatTable.spec.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/tables/chatTable.spec.ts)<br>[services/app/tests/tables/knowledgeTable.spec.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/tables/knowledgeTable.spec.ts) |
| eval | 165 | [services/app/tests/auth.setup.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/auth.setup.ts)<br>[services/app/tests/main.setup.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/main.setup.ts)<br>[services/app/tests/main.teardown.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/main.teardown.ts)<br>[services/app/tests/tableList.spec.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/tableList.spec.ts)<br>[services/app/tests/tables/actionTable.spec.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/tables/actionTable.spec.ts)<br>[services/app/tests/tables/chatTable.spec.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/tables/chatTable.spec.ts)<br>[services/app/tests/tables/knowledgeTable.spec.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/tables/knowledgeTable.spec.ts)<br>[services/app/tests/pages/layout.page.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/pages/layout.page.ts) |
| security | 11 | [services/app/tests/auth.setup.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/auth.setup.ts)<br>[services/app/src/routes/register/auth-errors.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/src/routes/register/auth-errors.ts)<br>[services/app/src/routes/login/auth-errors.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/src/routes/login/auth-errors.ts)<br>[services/app/src/lib/auth.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/src/lib/auth.ts)<br>[services/api/tests/utils/test_auth.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/tests/utils/test_auth.py)<br>[services/api/src/owl/utils/auth/__init__.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/src/owl/utils/auth/__init__.py)<br>[services/api/src/owl/utils/auth/oss.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/src/owl/utils/auth/oss.py)<br>[services/api/src/owl/routers/auth.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/src/owl/routers/auth.py) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/EmbeddedLLM__JamAIBase/.github/workflows/ci.yml)<br>[.github/workflows/lint.yml](../../../../sources/EmbeddedLLM__JamAIBase/.github/workflows/lint.yml) |
| container | 6 | [services/replication/docker-compose.yaml](../../../../sources/EmbeddedLLM__JamAIBase/services/replication/docker-compose.yaml)<br>[docker/Dockerfile.cnpg17](../../../../sources/EmbeddedLLM__JamAIBase/docker/Dockerfile.cnpg17)<br>[docker/Dockerfile.frontend](../../../../sources/EmbeddedLLM__JamAIBase/docker/Dockerfile.frontend)<br>[docker/Dockerfile.owl](../../../../sources/EmbeddedLLM__JamAIBase/docker/Dockerfile.owl)<br>[docker/Dockerfile.owl.base](../../../../sources/EmbeddedLLM__JamAIBase/docker/Dockerfile.owl.base)<br>[docker/Dockerfile.pg17](../../../../sources/EmbeddedLLM__JamAIBase/docker/Dockerfile.pg17) |
| instruction | 2 | [AGENTS.md](../../../../sources/EmbeddedLLM__JamAIBase/AGENTS.md)<br>[CLAUDE.md](../../../../sources/EmbeddedLLM__JamAIBase/CLAUDE.md) |
| docs | 10 | [README.md](../../../../sources/EmbeddedLLM__JamAIBase/README.md)<br>[services/app/README.md](../../../../sources/EmbeddedLLM__JamAIBase/services/app/README.md)<br>[services/api/README.md](../../../../sources/EmbeddedLLM__JamAIBase/services/api/README.md)<br>[services/api/tests/README.md](../../../../sources/EmbeddedLLM__JamAIBase/services/api/tests/README.md)<br>[services/api/tests/files/doc/Recommendation Letter.doc](../../../../sources/EmbeddedLLM__JamAIBase/services/api/tests/files/doc/Recommendation Letter.doc)<br>[docs/alert_guide.md](../../../../sources/EmbeddedLLM__JamAIBase/docs/alert_guide.md)<br>[docs/migration_v1_to_v2.md](../../../../sources/EmbeddedLLM__JamAIBase/docs/migration_v1_to_v2.md)<br>[docs/pgaudit_guide.md](../../../../sources/EmbeddedLLM__JamAIBase/docs/pgaudit_guide.md) |
| config | 6 | [services/app/package.json](../../../../sources/EmbeddedLLM__JamAIBase/services/app/package.json)<br>[services/app/tsconfig.json](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tsconfig.json)<br>[services/api/pyproject.toml](../../../../sources/EmbeddedLLM__JamAIBase/services/api/pyproject.toml)<br>[clients/typescript/package.json](../../../../sources/EmbeddedLLM__JamAIBase/clients/typescript/package.json)<br>[clients/typescript/tsconfig.json](../../../../sources/EmbeddedLLM__JamAIBase/clients/typescript/tsconfig.json)<br>[clients/python/pyproject.toml](../../../../sources/EmbeddedLLM__JamAIBase/clients/python/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 165 | [services/app/tests/auth.setup.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/auth.setup.ts)<br>[services/app/tests/main.setup.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/main.setup.ts)<br>[services/app/tests/main.teardown.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/main.teardown.ts)<br>[services/app/tests/tableList.spec.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/tableList.spec.ts)<br>[services/app/tests/tables/actionTable.spec.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/tables/actionTable.spec.ts)<br>[services/app/tests/tables/chatTable.spec.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/tables/chatTable.spec.ts) |
| CI workflows | 2 | [.github/workflows/ci.yml](../../../../sources/EmbeddedLLM__JamAIBase/.github/workflows/ci.yml)<br>[.github/workflows/lint.yml](../../../../sources/EmbeddedLLM__JamAIBase/.github/workflows/lint.yml) |
| Containers / deploy | 6 | [services/replication/docker-compose.yaml](../../../../sources/EmbeddedLLM__JamAIBase/services/replication/docker-compose.yaml)<br>[docker/Dockerfile.cnpg17](../../../../sources/EmbeddedLLM__JamAIBase/docker/Dockerfile.cnpg17)<br>[docker/Dockerfile.frontend](../../../../sources/EmbeddedLLM__JamAIBase/docker/Dockerfile.frontend)<br>[docker/Dockerfile.owl](../../../../sources/EmbeddedLLM__JamAIBase/docker/Dockerfile.owl)<br>[docker/Dockerfile.owl.base](../../../../sources/EmbeddedLLM__JamAIBase/docker/Dockerfile.owl.base)<br>[docker/Dockerfile.pg17](../../../../sources/EmbeddedLLM__JamAIBase/docker/Dockerfile.pg17) |
| Security / policy | 11 | [services/app/tests/auth.setup.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/tests/auth.setup.ts)<br>[services/app/src/routes/register/auth-errors.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/src/routes/register/auth-errors.ts)<br>[services/app/src/routes/login/auth-errors.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/src/routes/login/auth-errors.ts)<br>[services/app/src/lib/auth.ts](../../../../sources/EmbeddedLLM__JamAIBase/services/app/src/lib/auth.ts)<br>[services/api/tests/utils/test_auth.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/tests/utils/test_auth.py)<br>[services/api/src/owl/utils/auth/__init__.py](../../../../sources/EmbeddedLLM__JamAIBase/services/api/src/owl/utils/auth/__init__.py) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/EmbeddedLLM__JamAIBase/AGENTS.md)<br>[CLAUDE.md](../../../../sources/EmbeddedLLM__JamAIBase/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `services/api/tests/utils/test_mcp.py`, `services/api/src/owl/utils/mcp/__init__.py`, `services/api/src/owl/utils/mcp/custom_tools.py`.
2. Trace execution through entrypoints: `services/app/src/app.css`, `services/app/src/app.d.ts`, `services/app/src/app.html`.
3. Map agent/tool runtime through: `AGENTS.md`, `services/app/src/hooks.server.ts`, `services/app/src/hooks.ts`.
4. Inspect retrieval/memory/indexing through: `services/app/src/routes/(main)/system/models/[model_id]/(components)/index.ts`, `services/app/src/routes/(main)/system/models/(components)/index.ts`, `services/app/src/routes/(main)/settings/account/(components)/index.ts`.
5. Verify behavior through test/eval files: `services/app/tests/auth.setup.ts`, `services/app/tests/main.setup.ts`, `services/app/tests/main.teardown.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 The collaborative spreadsheet for AI. Chain cells into powerful pipelines, experiment with prompts and models, and evalu. 핵심 구조 신호는 Python, README.md, AGENTS.md, CLAUDE.md, LICENSE, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
