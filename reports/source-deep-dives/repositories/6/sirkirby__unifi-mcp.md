# sirkirby/unifi-mcp Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

MCP servers for the UniFi suite of applications, Network, Protect, Access, and Drive

## 요약

- 조사 단위: `sources/sirkirby__unifi-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,130 files, 208 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test_smoke_mcp_metadata.py, scripts/smoke_mcp_metadata.py, plugins/unifi-protect/.mcp.json이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | sirkirby/unifi-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 442 |
| Forks | 65 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/sirkirby__unifi-mcp](../../../../sources/sirkirby__unifi-mcp) |
| Existing report | [reports/global-trending/repositories/sirkirby__unifi-mcp.md](../../../global-trending/repositories/sirkirby__unifi-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1130 / 208 |
| Max observed depth | 8 |
| Top directories | .agents, .claude, .claude-plugin, .codex, .cursor, .github, .myco, apps, assets, docker, docs, examples, packages, plugins, scripts, skills, tests |
| Top extensions | .py: 825, .md: 89, .yml: 32, .html: 28, .json: 28, (none): 26, .mjs: 19, .png: 13, .svg: 12, .sh: 11, .toml: 11, .ts: 11 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/unifi-mcp-shared | packages workspace | 64 |
| apps/protect | apps workspace | 34 |
| apps/api | apps workspace | 29 |
| apps/worker | apps workspace | 26 |
| docs | documentation surface | 24 |
| packages/unifi-mcp-relay | packages workspace | 16 |
| apps/network | apps workspace | 12 |
| packages/unifi-core | packages workspace | 9 |
| tests | validation surface | 6 |
| apps/access | apps workspace | 4 |
| examples/python | examples workspace | 2 |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| assets | top-level component | 1 |
| docker | documentation surface | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | sync | make sync |
| build | Makefile | build | make build |
| quality | Makefile | check | make check |
| test | Makefile | core-test | make core-test |
| test | Makefile | shared-test | make shared-test |
| test | Makefile | test | make test |
| quality | Makefile | lint | make lint |
| quality | Makefile | format | make format |
| quality | Makefile | format-check | make format-check |
| quality | Makefile | format-fix | make format-fix |
| utility | Makefile | generate | make generate |
| utility | Makefile | manifest | make manifest |
| serve-dev | Makefile | server-manifests | make server-manifests |
| utility | Makefile | skill-references | make skill-references |
| quality | Makefile | check-skill-references | make check-skill-references |
| quality | Makefile | check-generated | make check-generated |
| test | Makefile | relay-test | make relay-test |
| utility | Makefile | protocol-smoke | make protocol-smoke |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
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
| mcp | [tests/test_smoke_mcp_metadata.py](../../../../sources/sirkirby__unifi-mcp/tests/test_smoke_mcp_metadata.py) | mcp signal |
| mcp | [scripts/smoke_mcp_metadata.py](../../../../sources/sirkirby__unifi-mcp/scripts/smoke_mcp_metadata.py) | mcp signal |
| mcp | [plugins/unifi-protect/.mcp.json](../../../../sources/sirkirby__unifi-mcp/plugins/unifi-protect/.mcp.json) | mcp signal |
| mcp | [plugins/unifi-network/.mcp.json](../../../../sources/sirkirby__unifi-mcp/plugins/unifi-network/.mcp.json) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/sirkirby__unifi-mcp/AGENTS.md) | agentRuntime signal |
| agentRuntime | [skills/__init__.py](../../../../sources/sirkirby__unifi-mcp/skills/__init__.py) | agentRuntime signal |
| agentRuntime | [skills/conftest.py](../../../../sources/sirkirby__unifi-mcp/skills/conftest.py) | agentRuntime signal |
| agentRuntime | [plugins/unifi-protect/skills/unifi-protect-setup/SKILL.md](../../../../sources/sirkirby__unifi-mcp/plugins/unifi-protect/skills/unifi-protect-setup/SKILL.md) | agentRuntime signal |
| entrypoints | [packages/unifi-mcp-relay/src/unifi_mcp_relay/__main__.py](../../../../sources/sirkirby__unifi-mcp/packages/unifi-mcp-relay/src/unifi_mcp_relay/__main__.py) | entrypoints signal |
| entrypoints | [packages/unifi-mcp-relay/src/unifi_mcp_relay/main.py](../../../../sources/sirkirby__unifi-mcp/packages/unifi-mcp-relay/src/unifi_mcp_relay/main.py) | entrypoints signal |
| entrypoints | [apps/worker/worker/src/index.ts](../../../../sources/sirkirby__unifi-mcp/apps/worker/worker/src/index.ts) | entrypoints signal |
| entrypoints | [apps/worker/src/lib/api.mjs](../../../../sources/sirkirby__unifi-mcp/apps/worker/src/lib/api.mjs) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 362 | [packages/unifi-mcp-relay/src/unifi_mcp_relay/__main__.py](../../../../sources/sirkirby__unifi-mcp/packages/unifi-mcp-relay/src/unifi_mcp_relay/__main__.py)<br>[packages/unifi-mcp-relay/src/unifi_mcp_relay/main.py](../../../../sources/sirkirby__unifi-mcp/packages/unifi-mcp-relay/src/unifi_mcp_relay/main.py)<br>[apps/worker/worker/src/index.ts](../../../../sources/sirkirby__unifi-mcp/apps/worker/worker/src/index.ts)<br>[apps/worker/src/lib/api.mjs](../../../../sources/sirkirby__unifi-mcp/apps/worker/src/lib/api.mjs)<br>[apps/worker/src/lib/config.mjs](../../../../sources/sirkirby__unifi-mcp/apps/worker/src/lib/config.mjs)<br>[apps/worker/src/lib/display.mjs](../../../../sources/sirkirby__unifi-mcp/apps/worker/src/lib/display.mjs)<br>[apps/worker/src/lib/prerequisites.mjs](../../../../sources/sirkirby__unifi-mcp/apps/worker/src/lib/prerequisites.mjs)<br>[apps/worker/src/lib/tokens.mjs](../../../../sources/sirkirby__unifi-mcp/apps/worker/src/lib/tokens.mjs) |
| agentRuntime | 102 | [AGENTS.md](../../../../sources/sirkirby__unifi-mcp/AGENTS.md)<br>[skills/__init__.py](../../../../sources/sirkirby__unifi-mcp/skills/__init__.py)<br>[skills/conftest.py](../../../../sources/sirkirby__unifi-mcp/skills/conftest.py)<br>[plugins/unifi-protect/skills/unifi-protect-setup/SKILL.md](../../../../sources/sirkirby__unifi-mcp/plugins/unifi-protect/skills/unifi-protect-setup/SKILL.md)<br>[plugins/unifi-protect/skills/unifi-protect/SKILL.md](../../../../sources/sirkirby__unifi-mcp/plugins/unifi-protect/skills/unifi-protect/SKILL.md)<br>[plugins/unifi-protect/skills/unifi-protect/references/protect-tools.md](../../../../sources/sirkirby__unifi-mcp/plugins/unifi-protect/skills/unifi-protect/references/protect-tools.md)<br>[plugins/unifi-protect/skills/security-digest/SKILL.md](../../../../sources/sirkirby__unifi-mcp/plugins/unifi-protect/skills/security-digest/SKILL.md)<br>[plugins/unifi-protect/skills/security-digest/references/correlation-rules.md](../../../../sources/sirkirby__unifi-mcp/plugins/unifi-protect/skills/security-digest/references/correlation-rules.md) |
| mcp | 165 | [tests/test_smoke_mcp_metadata.py](../../../../sources/sirkirby__unifi-mcp/tests/test_smoke_mcp_metadata.py)<br>[scripts/smoke_mcp_metadata.py](../../../../sources/sirkirby__unifi-mcp/scripts/smoke_mcp_metadata.py)<br>[plugins/unifi-protect/.mcp.json](../../../../sources/sirkirby__unifi-mcp/plugins/unifi-protect/.mcp.json)<br>[plugins/unifi-network/.mcp.json](../../../../sources/sirkirby__unifi-mcp/plugins/unifi-network/.mcp.json)<br>[plugins/unifi-access/.mcp.json](../../../../sources/sirkirby__unifi-mcp/plugins/unifi-access/.mcp.json)<br>[packages/unifi-mcp-shared/pyproject.toml](../../../../sources/sirkirby__unifi-mcp/packages/unifi-mcp-shared/pyproject.toml)<br>[packages/unifi-mcp-shared/tests/__init__.py](../../../../sources/sirkirby__unifi-mcp/packages/unifi-mcp-shared/tests/__init__.py)<br>[packages/unifi-mcp-shared/tests/test_bootstrap.py](../../../../sources/sirkirby__unifi-mcp/packages/unifi-mcp-shared/tests/test_bootstrap.py) |
| retrieval | 10 | [packages/unifi-mcp-shared/tests/test_tool_index.py](../../../../sources/sirkirby__unifi-mcp/packages/unifi-mcp-shared/tests/test_tool_index.py)<br>[packages/unifi-mcp-shared/src/unifi_mcp_shared/tool_index.py](../../../../sources/sirkirby__unifi-mcp/packages/unifi-mcp-shared/src/unifi_mcp_shared/tool_index.py)<br>[examples/python/query_tool_index.py](../../../../sources/sirkirby__unifi-mcp/examples/python/query_tool_index.py)<br>[docs/index.html](../../../../sources/sirkirby__unifi-mcp/docs/index.html)<br>[docs/tool-index.md](../../../../sources/sirkirby__unifi-mcp/docs/tool-index.md)<br>[docs/sponsor/index.html](../../../../sources/sirkirby__unifi-mcp/docs/sponsor/index.html)<br>[apps/worker/worker/src/index.ts](../../../../sources/sirkirby__unifi-mcp/apps/worker/worker/src/index.ts)<br>[apps/protect/src/unifi_protect_mcp/tool_index.py](../../../../sources/sirkirby__unifi-mcp/apps/protect/src/unifi_protect_mcp/tool_index.py) |
| spec | 1 | [docs/ARCHITECTURE.md](../../../../sources/sirkirby__unifi-mcp/docs/ARCHITECTURE.md) |
| eval | 372 | [tests/test_generate_release_notes.py](../../../../sources/sirkirby__unifi-mcp/tests/test_generate_release_notes.py)<br>[tests/test_server_manifest.py](../../../../sources/sirkirby__unifi-mcp/tests/test_server_manifest.py)<br>[tests/test_smoke_mcp_metadata.py](../../../../sources/sirkirby__unifi-mcp/tests/test_smoke_mcp_metadata.py)<br>[tests/fixtures/relay_register_with_metadata.json](../../../../sources/sirkirby__unifi-mcp/tests/fixtures/relay_register_with_metadata.json)<br>[packages/unifi-mcp-shared/tests/__init__.py](../../../../sources/sirkirby__unifi-mcp/packages/unifi-mcp-shared/tests/__init__.py)<br>[packages/unifi-mcp-shared/tests/test_bootstrap.py](../../../../sources/sirkirby__unifi-mcp/packages/unifi-mcp-shared/tests/test_bootstrap.py)<br>[packages/unifi-mcp-shared/tests/test_config_helpers.py](../../../../sources/sirkirby__unifi-mcp/packages/unifi-mcp-shared/tests/test_config_helpers.py)<br>[packages/unifi-mcp-shared/tests/test_config.py](../../../../sources/sirkirby__unifi-mcp/packages/unifi-mcp-shared/tests/test_config.py) |
| security | 41 | [SECURITY.md](../../../../sources/sirkirby__unifi-mcp/SECURITY.md)<br>[plugins/unifi-protect/skills/security-digest/SKILL.md](../../../../sources/sirkirby__unifi-mcp/plugins/unifi-protect/skills/security-digest/SKILL.md)<br>[plugins/unifi-protect/skills/security-digest/references/correlation-rules.md](../../../../sources/sirkirby__unifi-mcp/plugins/unifi-protect/skills/security-digest/references/correlation-rules.md)<br>[plugins/unifi-protect/skills/security-digest/references/event-types.md](../../../../sources/sirkirby__unifi-mcp/plugins/unifi-protect/skills/security-digest/references/event-types.md)<br>[plugins/unifi-protect/skills/security-digest/references/severity-model.md](../../../../sources/sirkirby__unifi-mcp/plugins/unifi-protect/skills/security-digest/references/severity-model.md)<br>[plugins/unifi-network/skills/firewall-manager/references/policy-templates.md](../../../../sources/sirkirby__unifi-mcp/plugins/unifi-network/skills/firewall-manager/references/policy-templates.md)<br>[plugins/unifi-network/skills/firewall-manager/references/policy-templates.yaml](../../../../sources/sirkirby__unifi-mcp/plugins/unifi-network/skills/firewall-manager/references/policy-templates.yaml)<br>[plugins/unifi-network/skills/firewall-auditor/references/security-benchmarks.md](../../../../sources/sirkirby__unifi-mcp/plugins/unifi-network/skills/firewall-auditor/references/security-benchmarks.md) |
| ci | 23 | [.github/workflows/bump-plugin-versions.yml](../../../../sources/sirkirby__unifi-mcp/.github/workflows/bump-plugin-versions.yml)<br>[.github/workflows/check-pin-alignment.yml](../../../../sources/sirkirby__unifi-mcp/.github/workflows/check-pin-alignment.yml)<br>[.github/workflows/check-skill-references.yml](../../../../sources/sirkirby__unifi-mcp/.github/workflows/check-skill-references.yml)<br>[.github/workflows/docker-access.yml](../../../../sources/sirkirby__unifi-mcp/.github/workflows/docker-access.yml)<br>[.github/workflows/docker-api.yml](../../../../sources/sirkirby__unifi-mcp/.github/workflows/docker-api.yml)<br>[.github/workflows/docker-network.yml](../../../../sources/sirkirby__unifi-mcp/.github/workflows/docker-network.yml)<br>[.github/workflows/docker-protect.yml](../../../../sources/sirkirby__unifi-mcp/.github/workflows/docker-protect.yml)<br>[.github/workflows/docker-relay.yml](../../../../sources/sirkirby__unifi-mcp/.github/workflows/docker-relay.yml) |
| container | 8 | [packages/unifi-mcp-relay/Dockerfile](../../../../sources/sirkirby__unifi-mcp/packages/unifi-mcp-relay/Dockerfile)<br>[docker/docker-compose-api.yml](../../../../sources/sirkirby__unifi-mcp/docker/docker-compose-api.yml)<br>[docker/docker-compose.yml](../../../../sources/sirkirby__unifi-mcp/docker/docker-compose.yml)<br>[apps/protect/Dockerfile](../../../../sources/sirkirby__unifi-mcp/apps/protect/Dockerfile)<br>[apps/network/Dockerfile](../../../../sources/sirkirby__unifi-mcp/apps/network/Dockerfile)<br>[apps/api/Dockerfile](../../../../sources/sirkirby__unifi-mcp/apps/api/Dockerfile)<br>[apps/api/docs/docker-compose.example.yml](../../../../sources/sirkirby__unifi-mcp/apps/api/docs/docker-compose.example.yml)<br>[apps/access/Dockerfile](../../../../sources/sirkirby__unifi-mcp/apps/access/Dockerfile) |
| instruction | 5 | [AGENTS.md](../../../../sources/sirkirby__unifi-mcp/AGENTS.md)<br>[CLAUDE.md](../../../../sources/sirkirby__unifi-mcp/CLAUDE.md)<br>[GEMINI.md](../../../../sources/sirkirby__unifi-mcp/GEMINI.md)<br>[apps/worker/AGENTS.md](../../../../sources/sirkirby__unifi-mcp/apps/worker/AGENTS.md)<br>[.codex/config.toml](../../../../sources/sirkirby__unifi-mcp/.codex/config.toml) |
| docs | 51 | [README.md](../../../../sources/sirkirby__unifi-mcp/README.md)<br>[packages/unifi-mcp-relay/README.md](../../../../sources/sirkirby__unifi-mcp/packages/unifi-mcp-relay/README.md)<br>[examples/README.md](../../../../sources/sirkirby__unifi-mcp/examples/README.md)<br>[examples/python/README.md](../../../../sources/sirkirby__unifi-mcp/examples/python/README.md)<br>[docs/.nojekyll](../../../../sources/sirkirby__unifi-mcp/docs/.nojekyll)<br>[docs/app.js](../../../../sources/sirkirby__unifi-mcp/docs/app.js)<br>[docs/ARCHITECTURE.md](../../../../sources/sirkirby__unifi-mcp/docs/ARCHITECTURE.md)<br>[docs/CNAME](../../../../sources/sirkirby__unifi-mcp/docs/CNAME) |
| config | 18 | [Makefile](../../../../sources/sirkirby__unifi-mcp/Makefile)<br>[pyproject.toml](../../../../sources/sirkirby__unifi-mcp/pyproject.toml)<br>[uv.lock](../../../../sources/sirkirby__unifi-mcp/uv.lock)<br>[packages/unifi-mcp-shared/pyproject.toml](../../../../sources/sirkirby__unifi-mcp/packages/unifi-mcp-shared/pyproject.toml)<br>[packages/unifi-mcp-relay/pyproject.toml](../../../../sources/sirkirby__unifi-mcp/packages/unifi-mcp-relay/pyproject.toml)<br>[packages/unifi-core/pyproject.toml](../../../../sources/sirkirby__unifi-mcp/packages/unifi-core/pyproject.toml)<br>[apps/worker/Makefile](../../../../sources/sirkirby__unifi-mcp/apps/worker/Makefile)<br>[apps/worker/package.json](../../../../sources/sirkirby__unifi-mcp/apps/worker/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 372 | [tests/test_generate_release_notes.py](../../../../sources/sirkirby__unifi-mcp/tests/test_generate_release_notes.py)<br>[tests/test_server_manifest.py](../../../../sources/sirkirby__unifi-mcp/tests/test_server_manifest.py)<br>[tests/test_smoke_mcp_metadata.py](../../../../sources/sirkirby__unifi-mcp/tests/test_smoke_mcp_metadata.py)<br>[tests/fixtures/relay_register_with_metadata.json](../../../../sources/sirkirby__unifi-mcp/tests/fixtures/relay_register_with_metadata.json)<br>[packages/unifi-mcp-shared/tests/__init__.py](../../../../sources/sirkirby__unifi-mcp/packages/unifi-mcp-shared/tests/__init__.py)<br>[packages/unifi-mcp-shared/tests/test_bootstrap.py](../../../../sources/sirkirby__unifi-mcp/packages/unifi-mcp-shared/tests/test_bootstrap.py) |
| CI workflows | 23 | [.github/workflows/bump-plugin-versions.yml](../../../../sources/sirkirby__unifi-mcp/.github/workflows/bump-plugin-versions.yml)<br>[.github/workflows/check-pin-alignment.yml](../../../../sources/sirkirby__unifi-mcp/.github/workflows/check-pin-alignment.yml)<br>[.github/workflows/check-skill-references.yml](../../../../sources/sirkirby__unifi-mcp/.github/workflows/check-skill-references.yml)<br>[.github/workflows/docker-access.yml](../../../../sources/sirkirby__unifi-mcp/.github/workflows/docker-access.yml)<br>[.github/workflows/docker-api.yml](../../../../sources/sirkirby__unifi-mcp/.github/workflows/docker-api.yml)<br>[.github/workflows/docker-network.yml](../../../../sources/sirkirby__unifi-mcp/.github/workflows/docker-network.yml) |
| Containers / deploy | 8 | [packages/unifi-mcp-relay/Dockerfile](../../../../sources/sirkirby__unifi-mcp/packages/unifi-mcp-relay/Dockerfile)<br>[docker/docker-compose-api.yml](../../../../sources/sirkirby__unifi-mcp/docker/docker-compose-api.yml)<br>[docker/docker-compose.yml](../../../../sources/sirkirby__unifi-mcp/docker/docker-compose.yml)<br>[apps/protect/Dockerfile](../../../../sources/sirkirby__unifi-mcp/apps/protect/Dockerfile)<br>[apps/network/Dockerfile](../../../../sources/sirkirby__unifi-mcp/apps/network/Dockerfile)<br>[apps/api/Dockerfile](../../../../sources/sirkirby__unifi-mcp/apps/api/Dockerfile) |
| Security / policy | 41 | [SECURITY.md](../../../../sources/sirkirby__unifi-mcp/SECURITY.md)<br>[plugins/unifi-protect/skills/security-digest/SKILL.md](../../../../sources/sirkirby__unifi-mcp/plugins/unifi-protect/skills/security-digest/SKILL.md)<br>[plugins/unifi-protect/skills/security-digest/references/correlation-rules.md](../../../../sources/sirkirby__unifi-mcp/plugins/unifi-protect/skills/security-digest/references/correlation-rules.md)<br>[plugins/unifi-protect/skills/security-digest/references/event-types.md](../../../../sources/sirkirby__unifi-mcp/plugins/unifi-protect/skills/security-digest/references/event-types.md)<br>[plugins/unifi-protect/skills/security-digest/references/severity-model.md](../../../../sources/sirkirby__unifi-mcp/plugins/unifi-protect/skills/security-digest/references/severity-model.md)<br>[plugins/unifi-network/skills/firewall-manager/references/policy-templates.md](../../../../sources/sirkirby__unifi-mcp/plugins/unifi-network/skills/firewall-manager/references/policy-templates.md) |
| Agent instructions | 5 | [AGENTS.md](../../../../sources/sirkirby__unifi-mcp/AGENTS.md)<br>[CLAUDE.md](../../../../sources/sirkirby__unifi-mcp/CLAUDE.md)<br>[GEMINI.md](../../../../sources/sirkirby__unifi-mcp/GEMINI.md)<br>[apps/worker/AGENTS.md](../../../../sources/sirkirby__unifi-mcp/apps/worker/AGENTS.md)<br>[.codex/config.toml](../../../../sources/sirkirby__unifi-mcp/.codex/config.toml) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/test_smoke_mcp_metadata.py`, `scripts/smoke_mcp_metadata.py`, `plugins/unifi-protect/.mcp.json`.
2. Trace execution through entrypoints: `packages/unifi-mcp-relay/src/unifi_mcp_relay/__main__.py`, `packages/unifi-mcp-relay/src/unifi_mcp_relay/main.py`, `apps/worker/worker/src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `skills/__init__.py`, `skills/conftest.py`.
4. Inspect retrieval/memory/indexing through: `packages/unifi-mcp-shared/tests/test_tool_index.py`, `packages/unifi-mcp-shared/src/unifi_mcp_shared/tool_index.py`, `examples/python/query_tool_index.py`.
5. Verify behavior through test/eval files: `tests/test_generate_release_notes.py`, `tests/test_server_manifest.py`, `tests/test_smoke_mcp_metadata.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 MCP servers for the UniFi suite of applications, Network, Protect, Access, and Drive. 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, AGENTS.md, CLAUDE.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
