# Beever-AI/beever-atlas Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Your First LLM-Wiki Conversation Knowledge Base

## 요약

- 조사 단위: `sources/Beever-AI__beever-atlas` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,345 files, 129 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, tests/test_mcp_registry.py, tests/integration/test_mcp_auth_e2e.py이고, 의존성 단서는 mcp, fastapi, pydantic, weaviate, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Beever-AI/beever-atlas |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Beever-AI__beever-atlas](../../../../sources/Beever-AI__beever-atlas) |
| Existing report | [reports/korea-trending/repositories/Beever-AI__beever-atlas.md](../../../korea-trending/repositories/Beever-AI__beever-atlas.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1345 / 129 |
| Max observed depth | 7 |
| Top directories | .github, assets, bot, demo, deploy, docs, runbooks, scripts, src, tests, web |
| Top extensions | .py: 741, .tsx: 234, .ts: 137, .md: 59, .mdx: 59, .json: 32, .yml: 15, (none): 14, .png: 13, .txt: 10, .gif: 6, .svg: 6 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| web | source boundary | 129 |
| docs | documentation surface | 47 |
| tests | validation surface | 28 |
| src | source boundary | 25 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| bot | top-level component | 1 |
| demo | top-level component | 1 |
| deploy | deployment surface | 1 |
| runbooks | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | install | make install |
| test | Makefile | test | make test |
| quality | Makefile | lint | make lint |
| serve-dev | Makefile | dev | make dev |
| utility | Makefile | stop | make stop |
| container | Makefile | docker-up | make docker-up |
| container | Makefile | docker-down | make docker-down |
| utility | Makefile | tunnel | make tunnel |
| utility | Makefile | tunnel-up | make tunnel-up |
| utility | Makefile | tunnel-install | make tunnel-install |
| utility | Makefile | tunnel-uninstall | make tunnel-uninstall |
| utility | Makefile | demo | make demo |
| utility | Makefile | demo-regenerate-fixtures | make demo-regenerate-fixtures |
| utility | Makefile | clean | make clean |
| utility | Makefile | reembed-all | make reembed-all |
| utility | Makefile | reembed-resume | make reembed-resume |
| utility | Makefile | reembed-dry-run | make reembed-dry-run |
| utility | pyproject.toml | beever-atlas-mcp | beever-atlas-mcp |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | weaviate |
| modelRuntime | none |
| webRuntime | fastapi |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [.mcp.json](../../../../sources/Beever-AI__beever-atlas/.mcp.json) | mcp signal |
| mcp | [tests/test_mcp_registry.py](../../../../sources/Beever-AI__beever-atlas/tests/test_mcp_registry.py) | mcp signal |
| mcp | [tests/integration/test_mcp_auth_e2e.py](../../../../sources/Beever-AI__beever-atlas/tests/integration/test_mcp_auth_e2e.py) | mcp signal |
| mcp | [tests/integration/test_mcp_e2e_handshake.py](../../../../sources/Beever-AI__beever-atlas/tests/integration/test_mcp_e2e_handshake.py) | mcp signal |
| agentRuntime | [web/src/hooks/useAsk.ts](../../../../sources/Beever-AI__beever-atlas/web/src/hooks/useAsk.ts) | agentRuntime signal |
| agentRuntime | [web/src/hooks/useAskSession.ts](../../../../sources/Beever-AI__beever-atlas/web/src/hooks/useAskSession.ts) | agentRuntime signal |
| agentRuntime | [web/src/hooks/useAssignments.ts](../../../../sources/Beever-AI__beever-atlas/web/src/hooks/useAssignments.ts) | agentRuntime signal |
| agentRuntime | [web/src/hooks/useChannelMemoryCount.ts](../../../../sources/Beever-AI__beever-atlas/web/src/hooks/useChannelMemoryCount.ts) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/Beever-AI__beever-atlas/server.json) | entrypoints signal |
| entrypoints | [web/src/App.tsx](../../../../sources/Beever-AI__beever-atlas/web/src/App.tsx) | entrypoints signal |
| entrypoints | [web/src/index.css](../../../../sources/Beever-AI__beever-atlas/web/src/index.css) | entrypoints signal |
| entrypoints | [web/src/main.tsx](../../../../sources/Beever-AI__beever-atlas/web/src/main.tsx) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 7 | [server.json](../../../../sources/Beever-AI__beever-atlas/server.json)<br>[web/src/App.tsx](../../../../sources/Beever-AI__beever-atlas/web/src/App.tsx)<br>[web/src/index.css](../../../../sources/Beever-AI__beever-atlas/web/src/index.css)<br>[web/src/main.tsx](../../../../sources/Beever-AI__beever-atlas/web/src/main.tsx)<br>[src/beever_atlas/api/mcp_server/__main__.py](../../../../sources/Beever-AI__beever-atlas/src/beever_atlas/api/mcp_server/__main__.py)<br>[bot/src/index.test.ts](../../../../sources/Beever-AI__beever-atlas/bot/src/index.test.ts)<br>[bot/src/index.ts](../../../../sources/Beever-AI__beever-atlas/bot/src/index.ts) |
| agentRuntime | 189 | [web/src/hooks/useAsk.ts](../../../../sources/Beever-AI__beever-atlas/web/src/hooks/useAsk.ts)<br>[web/src/hooks/useAskSession.ts](../../../../sources/Beever-AI__beever-atlas/web/src/hooks/useAskSession.ts)<br>[web/src/hooks/useAssignments.ts](../../../../sources/Beever-AI__beever-atlas/web/src/hooks/useAssignments.ts)<br>[web/src/hooks/useChannelMemoryCount.ts](../../../../sources/Beever-AI__beever-atlas/web/src/hooks/useChannelMemoryCount.ts)<br>[web/src/hooks/useChannelPolicy.ts](../../../../sources/Beever-AI__beever-atlas/web/src/hooks/useChannelPolicy.ts)<br>[web/src/hooks/useChannelSummary.ts](../../../../sources/Beever-AI__beever-atlas/web/src/hooks/useChannelSummary.ts)<br>[web/src/hooks/useConnectionMap.ts](../../../../sources/Beever-AI__beever-atlas/web/src/hooks/useConnectionMap.ts)<br>[web/src/hooks/useConnections.ts](../../../../sources/Beever-AI__beever-atlas/web/src/hooks/useConnections.ts) |
| mcp | 43 | [.mcp.json](../../../../sources/Beever-AI__beever-atlas/.mcp.json)<br>[tests/test_mcp_registry.py](../../../../sources/Beever-AI__beever-atlas/tests/test_mcp_registry.py)<br>[tests/integration/test_mcp_auth_e2e.py](../../../../sources/Beever-AI__beever-atlas/tests/integration/test_mcp_auth_e2e.py)<br>[tests/integration/test_mcp_e2e_handshake.py](../../../../sources/Beever-AI__beever-atlas/tests/integration/test_mcp_e2e_handshake.py)<br>[tests/integration/test_mcp_job_cross_surface.py](../../../../sources/Beever-AI__beever-atlas/tests/integration/test_mcp_job_cross_surface.py)<br>[tests/integration/test_mcp_rate_limit_isolation.py](../../../../sources/Beever-AI__beever-atlas/tests/integration/test_mcp_rate_limit_isolation.py)<br>[tests/infra/test_mcp_principal_kind.py](../../../../sources/Beever-AI__beever-atlas/tests/infra/test_mcp_principal_kind.py)<br>[tests/infra/test_mcp_rate_limit_redis.py](../../../../sources/Beever-AI__beever-atlas/tests/infra/test_mcp_rate_limit_redis.py) |
| retrieval | 359 | [web/index.html](../../../../sources/Beever-AI__beever-atlas/web/index.html)<br>[web/src/index.css](../../../../sources/Beever-AI__beever-atlas/web/src/index.css)<br>[web/src/components/wiki/CalloutBox.tsx](../../../../sources/Beever-AI__beever-atlas/web/src/components/wiki/CalloutBox.tsx)<br>[web/src/components/wiki/ChartBlock.tsx](../../../../sources/Beever-AI__beever-atlas/web/src/components/wiki/ChartBlock.tsx)<br>[web/src/components/wiki/CitationLink.tsx](../../../../sources/Beever-AI__beever-atlas/web/src/components/wiki/CitationLink.tsx)<br>[web/src/components/wiki/CitationPanel.tsx](../../../../sources/Beever-AI__beever-atlas/web/src/components/wiki/CitationPanel.tsx)<br>[web/src/components/wiki/ContributorCard.tsx](../../../../sources/Beever-AI__beever-atlas/web/src/components/wiki/ContributorCard.tsx)<br>[web/src/components/wiki/CurationControls.tsx](../../../../sources/Beever-AI__beever-atlas/web/src/components/wiki/CurationControls.tsx) |
| spec | 11 | [src/beever_atlas/wiki/prompts/architecture.txt](../../../../sources/Beever-AI__beever-atlas/src/beever_atlas/wiki/prompts/architecture.txt)<br>[scripts/test_pipeline_design.py](../../../../sources/Beever-AI__beever-atlas/scripts/test_pipeline_design.py)<br>[docs/pipeline-architecture.md](../../../../sources/Beever-AI__beever-atlas/docs/pipeline-architecture.md)<br>[docs/content/roadmap.mdx](../../../../sources/Beever-AI__beever-atlas/docs/content/roadmap.mdx)<br>[docs/content/contributing/architecture-tour.mdx](../../../../sources/Beever-AI__beever-atlas/docs/content/contributing/architecture-tour.mdx)<br>[docs/content/concepts/agent-architecture.mdx](../../../../sources/Beever-AI__beever-atlas/docs/content/concepts/agent-architecture.mdx)<br>[docs/content/concepts/architecture.mdx](../../../../sources/Beever-AI__beever-atlas/docs/content/concepts/architecture.mdx)<br>[docs/architecture/oss-pipeline.md](../../../../sources/Beever-AI__beever-atlas/docs/architecture/oss-pipeline.md) |
| eval | 535 | [web/src/test-setup.ts](../../../../sources/Beever-AI__beever-atlas/web/src/test-setup.ts)<br>[web/src/routes/__tests__/ChannelWorkspaceRoute.test.tsx](../../../../sources/Beever-AI__beever-atlas/web/src/routes/__tests__/ChannelWorkspaceRoute.test.tsx)<br>[web/src/pages/admin/__tests__/WikiDrift.test.tsx](../../../../sources/Beever-AI__beever-atlas/web/src/pages/admin/__tests__/WikiDrift.test.tsx)<br>[web/src/pages/__tests__/SettingsPage.test.tsx](../../../../sources/Beever-AI__beever-atlas/web/src/pages/__tests__/SettingsPage.test.tsx)<br>[web/src/lib/__tests__/dedupeErrors.test.ts](../../../../sources/Beever-AI__beever-atlas/web/src/lib/__tests__/dedupeErrors.test.ts)<br>[web/src/lib/__tests__/mediaUrl.test.ts](../../../../sources/Beever-AI__beever-atlas/web/src/lib/__tests__/mediaUrl.test.ts)<br>[web/src/lib/__tests__/mintLoaderUrl.test.ts](../../../../sources/Beever-AI__beever-atlas/web/src/lib/__tests__/mintLoaderUrl.test.ts)<br>[web/src/lib/__tests__/overviewSections.test.ts](../../../../sources/Beever-AI__beever-atlas/web/src/lib/__tests__/overviewSections.test.ts) |
| security | 19 | [docker-compose.auth.yml](../../../../sources/Beever-AI__beever-atlas/docker-compose.auth.yml)<br>[SECURITY.md](../../../../sources/Beever-AI__beever-atlas/SECURITY.md)<br>[web/src/lib/policy-presets.ts](../../../../sources/Beever-AI__beever-atlas/web/src/lib/policy-presets.ts)<br>[tests/test_auth.py](../../../../sources/Beever-AI__beever-atlas/tests/test_auth.py)<br>[tests/test_policy_resolver.py](../../../../sources/Beever-AI__beever-atlas/tests/test_policy_resolver.py)<br>[tests/wiki/test_compiler_degenerate_guard.py](../../../../sources/Beever-AI__beever-atlas/tests/wiki/test_compiler_degenerate_guard.py)<br>[tests/integration/test_mcp_auth_e2e.py](../../../../sources/Beever-AI__beever-atlas/tests/integration/test_mcp_auth_e2e.py)<br>[tests/infra/test_principal_auth.py](../../../../sources/Beever-AI__beever-atlas/tests/infra/test_principal_auth.py) |
| ci | 6 | [.github/workflows/audit.yml](../../../../sources/Beever-AI__beever-atlas/.github/workflows/audit.yml)<br>[.github/workflows/ci.yml](../../../../sources/Beever-AI__beever-atlas/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/Beever-AI__beever-atlas/.github/workflows/codeql.yml)<br>[.github/workflows/nightly.yml](../../../../sources/Beever-AI__beever-atlas/.github/workflows/nightly.yml)<br>[.github/workflows/release.yml](../../../../sources/Beever-AI__beever-atlas/.github/workflows/release.yml)<br>[.github/workflows/smoke.yml](../../../../sources/Beever-AI__beever-atlas/.github/workflows/smoke.yml) |
| container | 8 | [docker-compose.auth.yml](../../../../sources/Beever-AI__beever-atlas/docker-compose.auth.yml)<br>[docker-compose.nebula.yml](../../../../sources/Beever-AI__beever-atlas/docker-compose.nebula.yml)<br>[docker-compose.yml](../../../../sources/Beever-AI__beever-atlas/docker-compose.yml)<br>[Dockerfile](../../../../sources/Beever-AI__beever-atlas/Dockerfile)<br>[web/Dockerfile](../../../../sources/Beever-AI__beever-atlas/web/Dockerfile)<br>[deploy/launchd/ai.beever.tunnel.plist.template](../../../../sources/Beever-AI__beever-atlas/deploy/launchd/ai.beever.tunnel.plist.template)<br>[demo/docker-compose.demo.yml](../../../../sources/Beever-AI__beever-atlas/demo/docker-compose.demo.yml)<br>[bot/Dockerfile](../../../../sources/Beever-AI__beever-atlas/bot/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 98 | [README.md](../../../../sources/Beever-AI__beever-atlas/README.md)<br>[web/README.md](../../../../sources/Beever-AI__beever-atlas/web/README.md)<br>[src/beever_atlas/README.md](../../../../sources/Beever-AI__beever-atlas/src/beever_atlas/README.md)<br>[scripts/README.md](../../../../sources/Beever-AI__beever-atlas/scripts/README.md)<br>[docs/mcp-server.md](../../../../sources/Beever-AI__beever-atlas/docs/mcp-server.md)<br>[docs/media-persistence.md](../../../../sources/Beever-AI__beever-atlas/docs/media-persistence.md)<br>[docs/pipeline-architecture.md](../../../../sources/Beever-AI__beever-atlas/docs/pipeline-architecture.md)<br>[docs/redesign-test-plan.md](../../../../sources/Beever-AI__beever-atlas/docs/redesign-test-plan.md) |
| config | 7 | [Makefile](../../../../sources/Beever-AI__beever-atlas/Makefile)<br>[pyproject.toml](../../../../sources/Beever-AI__beever-atlas/pyproject.toml)<br>[uv.lock](../../../../sources/Beever-AI__beever-atlas/uv.lock)<br>[web/package.json](../../../../sources/Beever-AI__beever-atlas/web/package.json)<br>[web/tsconfig.json](../../../../sources/Beever-AI__beever-atlas/web/tsconfig.json)<br>[bot/package.json](../../../../sources/Beever-AI__beever-atlas/bot/package.json)<br>[bot/tsconfig.json](../../../../sources/Beever-AI__beever-atlas/bot/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 535 | [web/src/test-setup.ts](../../../../sources/Beever-AI__beever-atlas/web/src/test-setup.ts)<br>[web/src/routes/__tests__/ChannelWorkspaceRoute.test.tsx](../../../../sources/Beever-AI__beever-atlas/web/src/routes/__tests__/ChannelWorkspaceRoute.test.tsx)<br>[web/src/pages/admin/__tests__/WikiDrift.test.tsx](../../../../sources/Beever-AI__beever-atlas/web/src/pages/admin/__tests__/WikiDrift.test.tsx)<br>[web/src/pages/__tests__/SettingsPage.test.tsx](../../../../sources/Beever-AI__beever-atlas/web/src/pages/__tests__/SettingsPage.test.tsx)<br>[web/src/lib/__tests__/dedupeErrors.test.ts](../../../../sources/Beever-AI__beever-atlas/web/src/lib/__tests__/dedupeErrors.test.ts)<br>[web/src/lib/__tests__/mediaUrl.test.ts](../../../../sources/Beever-AI__beever-atlas/web/src/lib/__tests__/mediaUrl.test.ts) |
| CI workflows | 6 | [.github/workflows/audit.yml](../../../../sources/Beever-AI__beever-atlas/.github/workflows/audit.yml)<br>[.github/workflows/ci.yml](../../../../sources/Beever-AI__beever-atlas/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/Beever-AI__beever-atlas/.github/workflows/codeql.yml)<br>[.github/workflows/nightly.yml](../../../../sources/Beever-AI__beever-atlas/.github/workflows/nightly.yml)<br>[.github/workflows/release.yml](../../../../sources/Beever-AI__beever-atlas/.github/workflows/release.yml)<br>[.github/workflows/smoke.yml](../../../../sources/Beever-AI__beever-atlas/.github/workflows/smoke.yml) |
| Containers / deploy | 8 | [docker-compose.auth.yml](../../../../sources/Beever-AI__beever-atlas/docker-compose.auth.yml)<br>[docker-compose.nebula.yml](../../../../sources/Beever-AI__beever-atlas/docker-compose.nebula.yml)<br>[docker-compose.yml](../../../../sources/Beever-AI__beever-atlas/docker-compose.yml)<br>[Dockerfile](../../../../sources/Beever-AI__beever-atlas/Dockerfile)<br>[web/Dockerfile](../../../../sources/Beever-AI__beever-atlas/web/Dockerfile)<br>[deploy/launchd/ai.beever.tunnel.plist.template](../../../../sources/Beever-AI__beever-atlas/deploy/launchd/ai.beever.tunnel.plist.template) |
| Security / policy | 19 | [docker-compose.auth.yml](../../../../sources/Beever-AI__beever-atlas/docker-compose.auth.yml)<br>[SECURITY.md](../../../../sources/Beever-AI__beever-atlas/SECURITY.md)<br>[web/src/lib/policy-presets.ts](../../../../sources/Beever-AI__beever-atlas/web/src/lib/policy-presets.ts)<br>[tests/test_auth.py](../../../../sources/Beever-AI__beever-atlas/tests/test_auth.py)<br>[tests/test_policy_resolver.py](../../../../sources/Beever-AI__beever-atlas/tests/test_policy_resolver.py)<br>[tests/wiki/test_compiler_degenerate_guard.py](../../../../sources/Beever-AI__beever-atlas/tests/wiki/test_compiler_degenerate_guard.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `.mcp.json`, `tests/test_mcp_registry.py`, `tests/integration/test_mcp_auth_e2e.py`.
2. Trace execution through entrypoints: `server.json`, `web/src/App.tsx`, `web/src/index.css`.
3. Map agent/tool runtime through: `web/src/hooks/useAsk.ts`, `web/src/hooks/useAskSession.ts`, `web/src/hooks/useAssignments.ts`.
4. Inspect retrieval/memory/indexing through: `web/index.html`, `web/src/index.css`, `web/src/components/wiki/CalloutBox.tsx`.
5. Verify behavior through test/eval files: `web/src/test-setup.ts`, `web/src/routes/__tests__/ChannelWorkspaceRoute.test.tsx`, `web/src/pages/admin/__tests__/WikiDrift.test.tsx`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Your First LLM Wiki Conversation Knowledge Base. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, Makefile, README.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
