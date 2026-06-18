# hashgraph-online/hol-guard Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

AI antivirus for developer agents: protect Codex, Claude Code, Cursor, Gemini, OpenCode, plugins, skills, MCP servers, and AI harnesses before tools run.

## 요약

- 조사 단위: `sources/hashgraph-online__hol-guard` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,050 files, 137 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test_guard_hashnet_mcp_canaries.py, tests/test_guard_mcp_detectors.py, tests/test_guard_mcp_package_proxy_phase14.py이고, 의존성 단서는 openai, claude, codex, gemini, mcp, fastapi, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | hashgraph-online/hol-guard |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 359 |
| Forks | 7 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/hashgraph-online__hol-guard](../../../../sources/hashgraph-online__hol-guard) |
| Existing report | [reports/global-trending/repositories/hashgraph-online__hol-guard.md](../../../global-trending/repositories/hashgraph-online__hol-guard.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1050 / 137 |
| Max observed depth | 8 |
| Top directories | .clusterfuzzlite, .factory, .github, action, dashboard, docs, fuzzers, schemas, scripts, src, tests |
| Top extensions | .py: 541, .ts: 147, .tsx: 128, .md: 62, .json: 57, (none): 22, .js: 19, .yml: 16, .png: 10, .txt: 8, .lock: 7, .toml: 6 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 131 |
| docs | documentation surface | 23 |
| src | source boundary | 18 |
| .github | ci surface | 1 |
| action | top-level component | 1 |
| dashboard | top-level component | 1 |
| fuzzers | top-level component | 1 |
| schemas | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | hol-guard | hol-guard |
| utility | pyproject.toml | plugin-scanner | plugin-scanner |
| utility | pyproject.toml | plugin-guard | plugin-guard |
| utility | pyproject.toml | plugin-ecosystem-scanner | plugin-ecosystem-scanner |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, claude, gemini |
| agentProtocols | mcp, codex |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | fastapi |
| developerSurface | click |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [tests/test_guard_hashnet_mcp_canaries.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_hashnet_mcp_canaries.py) | mcp signal |
| mcp | [tests/test_guard_mcp_detectors.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_mcp_detectors.py) | mcp signal |
| mcp | [tests/test_guard_mcp_package_proxy_phase14.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_mcp_package_proxy_phase14.py) | mcp signal |
| mcp | [tests/test_guard_mcp_protection.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_mcp_protection.py) | mcp signal |
| agentRuntime | [tests/fixtures/skills-no-frontmatter/skills/bad-skill/SKILL.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/skills-no-frontmatter/skills/bad-skill/SKILL.md) | agentRuntime signal |
| agentRuntime | [tests/fixtures/skills-no-frontmatter/.codex-plugin/plugin.json](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/skills-no-frontmatter/.codex-plugin/plugin.json) | agentRuntime signal |
| agentRuntime | [tests/fixtures/skills-missing-dir/.codex-plugin/plugin.json](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/skills-missing-dir/.codex-plugin/plugin.json) | agentRuntime signal |
| agentRuntime | [tests/fixtures/multi-plugin-repo/plugins/beta-plugin/skills/example/SKILL.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/multi-plugin-repo/plugins/beta-plugin/skills/example/SKILL.md) | agentRuntime signal |
| entrypoints | [src/codex_plugin_scanner/guard/daemon/server.py](../../../../sources/hashgraph-online__hol-guard/src/codex_plugin_scanner/guard/daemon/server.py) | entrypoints signal |
| entrypoints | [dashboard/src/app.tsx](../../../../sources/hashgraph-online__hol-guard/dashboard/src/app.tsx) | entrypoints signal |
| entrypoints | [dashboard/src/main.tsx](../../../../sources/hashgraph-online__hol-guard/dashboard/src/main.tsx) | entrypoints signal |
| instruction | [tests/fixtures/guard-codex-malicious-mcp/.codex/config.toml](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/guard-codex-malicious-mcp/.codex/config.toml) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [src/codex_plugin_scanner/guard/daemon/server.py](../../../../sources/hashgraph-online__hol-guard/src/codex_plugin_scanner/guard/daemon/server.py)<br>[dashboard/src/app.tsx](../../../../sources/hashgraph-online__hol-guard/dashboard/src/app.tsx)<br>[dashboard/src/main.tsx](../../../../sources/hashgraph-online__hol-guard/dashboard/src/main.tsx) |
| agentRuntime | 22 | [tests/fixtures/skills-no-frontmatter/skills/bad-skill/SKILL.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/skills-no-frontmatter/skills/bad-skill/SKILL.md)<br>[tests/fixtures/skills-no-frontmatter/.codex-plugin/plugin.json](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/skills-no-frontmatter/.codex-plugin/plugin.json)<br>[tests/fixtures/skills-missing-dir/.codex-plugin/plugin.json](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/skills-missing-dir/.codex-plugin/plugin.json)<br>[tests/fixtures/multi-plugin-repo/plugins/beta-plugin/skills/example/SKILL.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/multi-plugin-repo/plugins/beta-plugin/skills/example/SKILL.md)<br>[tests/fixtures/multi-plugin-repo/plugins/alpha-plugin/skills/example/SKILL.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/multi-plugin-repo/plugins/alpha-plugin/skills/example/SKILL.md)<br>[tests/fixtures/malicious-skill-plugin/skills/leaky-skill/SKILL.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/malicious-skill-plugin/skills/leaky-skill/SKILL.md)<br>[tests/fixtures/hermes-plugin-evil/skills/utils/benign/SKILL.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/hermes-plugin-evil/skills/utils/benign/SKILL.md)<br>[tests/fixtures/hermes-plugin-evil/skills/stealth/sneaky/SKILL.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/hermes-plugin-evil/skills/stealth/sneaky/SKILL.md) |
| mcp | 26 | [tests/test_guard_hashnet_mcp_canaries.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_hashnet_mcp_canaries.py)<br>[tests/test_guard_mcp_detectors.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_mcp_detectors.py)<br>[tests/test_guard_mcp_package_proxy_phase14.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_mcp_package_proxy_phase14.py)<br>[tests/test_guard_mcp_protection.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_mcp_protection.py)<br>[tests/test_guard_mcp_skill_firewall.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_mcp_skill_firewall.py)<br>[tests/test_mcp_security.py](../../../../sources/hashgraph-online__hol-guard/tests/test_mcp_security.py)<br>[tests/test_zcode_mcp.py](../../../../sources/hashgraph-online__hol-guard/tests/test_zcode_mcp.py)<br>[tests/fixtures/mcp-canary-server.py](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/mcp-canary-server.py) |
| retrieval | 7 | [tests/test_guard_access_graph.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_access_graph.py)<br>[tests/test_guard_phase05_approval_memory.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_phase05_approval_memory.py)<br>[src/codex_plugin_scanner/guard/access_graph_events.py](../../../../sources/hashgraph-online__hol-guard/src/codex_plugin_scanner/guard/access_graph_events.py)<br>[src/codex_plugin_scanner/guard/daemon/static/index.html](../../../../sources/hashgraph-online__hol-guard/src/codex_plugin_scanner/guard/daemon/static/index.html)<br>[src/codex_plugin_scanner/guard/daemon/static/assets/index.css](../../../../sources/hashgraph-online__hol-guard/src/codex_plugin_scanner/guard/daemon/static/assets/index.css)<br>[dashboard/index.html](../../../../sources/hashgraph-online__hol-guard/dashboard/index.html)<br>[dashboard/src/evidence/index.ts](../../../../sources/hashgraph-online__hol-guard/dashboard/src/evidence/index.ts) |
| spec | 8 | [docker-requirements.txt](../../../../sources/hashgraph-online__hol-guard/docker-requirements.txt)<br>[requirements.txt](../../../../sources/hashgraph-online__hol-guard/requirements.txt)<br>[tests/test_guard_protect_package_spec_parsing.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_protect_package_spec_parsing.py)<br>[docs/guard/architecture.md](../../../../sources/hashgraph-online__hol-guard/docs/guard/architecture.md)<br>[dashboard/src/about/about-design.test.ts](../../../../sources/hashgraph-online__hol-guard/dashboard/src/about/about-design.test.ts)<br>[dashboard/e2e/policy-cloud-exceptions-states.spec.ts](../../../../sources/hashgraph-online__hol-guard/dashboard/e2e/policy-cloud-exceptions-states.spec.ts)<br>[dashboard/e2e/scrg172-states.spec.ts](../../../../sources/hashgraph-online__hol-guard/dashboard/e2e/scrg172-states.spec.ts)<br>[.clusterfuzzlite/requirements-atheris.txt](../../../../sources/hashgraph-online__hol-guard/.clusterfuzzlite/requirements-atheris.txt) |
| eval | 481 | [tests/__init__.py](../../../../sources/hashgraph-online__hol-guard/tests/__init__.py)<br>[tests/bundle_first_cloud.py](../../../../sources/hashgraph-online__hol-guard/tests/bundle_first_cloud.py)<br>[tests/cloud_exception_bundle_fixtures.py](../../../../sources/hashgraph-online__hol-guard/tests/cloud_exception_bundle_fixtures.py)<br>[tests/conftest.py](../../../../sources/hashgraph-online__hol-guard/tests/conftest.py)<br>[tests/e2e_droid_exec.py](../../../../sources/hashgraph-online__hol-guard/tests/e2e_droid_exec.py)<br>[tests/guard_python_phase12_support.py](../../../../sources/hashgraph-online__hol-guard/tests/guard_python_phase12_support.py)<br>[tests/guard_tier2_phase13_support.py](../../../../sources/hashgraph-online__hol-guard/tests/guard_tier2_phase13_support.py)<br>[tests/shim_execution_helpers.py](../../../../sources/hashgraph-online__hol-guard/tests/shim_execution_helpers.py) |
| security | 561 | [SECURITY.md](../../../../sources/hashgraph-online__hol-guard/SECURITY.md)<br>[tests/guard_python_phase12_support.py](../../../../sources/hashgraph-online__hol-guard/tests/guard_python_phase12_support.py)<br>[tests/guard_tier2_phase13_support.py](../../../../sources/hashgraph-online__hol-guard/tests/guard_tier2_phase13_support.py)<br>[tests/test_dashboard_sync_security.py](../../../../sources/hashgraph-online__hol-guard/tests/test_dashboard_sync_security.py)<br>[tests/test_guard_access_graph.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_access_graph.py)<br>[tests/test_guard_action_identity.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_action_identity.py)<br>[tests/test_guard_advisory_escalation.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_advisory_escalation.py)<br>[tests/test_guard_aibom_cli.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_aibom_cli.py) |
| ci | 9 | [.github/workflows/ci.yml](../../../../sources/hashgraph-online__hol-guard/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/hashgraph-online__hol-guard/.github/workflows/codeql.yml)<br>[.github/workflows/dependabot-uv-lock.yml](../../../../sources/hashgraph-online__hol-guard/.github/workflows/dependabot-uv-lock.yml)<br>[.github/workflows/fuzz.yml](../../../../sources/hashgraph-online__hol-guard/.github/workflows/fuzz.yml)<br>[.github/workflows/harness-smoke.yml](../../../../sources/hashgraph-online__hol-guard/.github/workflows/harness-smoke.yml)<br>[.github/workflows/publish-action-repo.yml](../../../../sources/hashgraph-online__hol-guard/.github/workflows/publish-action-repo.yml)<br>[.github/workflows/publish.yml](../../../../sources/hashgraph-online__hol-guard/.github/workflows/publish.yml)<br>[.github/workflows/scorecard.yml](../../../../sources/hashgraph-online__hol-guard/.github/workflows/scorecard.yml) |
| container | 2 | [Dockerfile](../../../../sources/hashgraph-online__hol-guard/Dockerfile)<br>[.clusterfuzzlite/Dockerfile](../../../../sources/hashgraph-online__hol-guard/.clusterfuzzlite/Dockerfile) |
| instruction | 2 | [tests/fixtures/guard-codex-malicious-mcp/.codex/config.toml](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/guard-codex-malicious-mcp/.codex/config.toml)<br>[tests/fixtures/gemini-extension-good/GEMINI.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/gemini-extension-good/GEMINI.md) |
| docs | 29 | [README.md](../../../../sources/hashgraph-online__hol-guard/README.md)<br>[tests/fixtures/opencode-good/README.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/opencode-good/README.md)<br>[tests/fixtures/multi-plugin-repo/plugins/alpha-plugin/README.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/multi-plugin-repo/plugins/alpha-plugin/README.md)<br>[tests/fixtures/multi-ecosystem-repo/gemini-ext/README.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/multi-ecosystem-repo/gemini-ext/README.md)<br>[tests/fixtures/multi-ecosystem-repo/codex-plugin/README.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/multi-ecosystem-repo/codex-plugin/README.md)<br>[tests/fixtures/malicious-skill-plugin/README.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/malicious-skill-plugin/README.md)<br>[tests/fixtures/guard-red-team/README.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/guard-red-team/README.md)<br>[tests/fixtures/good-plugin/README.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/good-plugin/README.md) |
| config | 12 | [pyproject.toml](../../../../sources/hashgraph-online__hol-guard/pyproject.toml)<br>[requirements.txt](../../../../sources/hashgraph-online__hol-guard/requirements.txt)<br>[uv.lock](../../../../sources/hashgraph-online__hol-guard/uv.lock)<br>[tests/fixtures/tier2/go-vulnerable/go.mod](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/tier2/go-vulnerable/go.mod)<br>[tests/fixtures/tier2/go-safe/go.mod](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/tier2/go-safe/go.mod)<br>[tests/fixtures/tier2/cargo-vulnerable/Cargo.lock](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/tier2/cargo-vulnerable/Cargo.lock)<br>[tests/fixtures/tier2/cargo-vulnerable/Cargo.toml](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/tier2/cargo-vulnerable/Cargo.toml)<br>[tests/fixtures/tier2/cargo-safe/Cargo.lock](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/tier2/cargo-safe/Cargo.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 481 | [tests/__init__.py](../../../../sources/hashgraph-online__hol-guard/tests/__init__.py)<br>[tests/bundle_first_cloud.py](../../../../sources/hashgraph-online__hol-guard/tests/bundle_first_cloud.py)<br>[tests/cloud_exception_bundle_fixtures.py](../../../../sources/hashgraph-online__hol-guard/tests/cloud_exception_bundle_fixtures.py)<br>[tests/conftest.py](../../../../sources/hashgraph-online__hol-guard/tests/conftest.py)<br>[tests/e2e_droid_exec.py](../../../../sources/hashgraph-online__hol-guard/tests/e2e_droid_exec.py)<br>[tests/guard_python_phase12_support.py](../../../../sources/hashgraph-online__hol-guard/tests/guard_python_phase12_support.py) |
| CI workflows | 9 | [.github/workflows/ci.yml](../../../../sources/hashgraph-online__hol-guard/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/hashgraph-online__hol-guard/.github/workflows/codeql.yml)<br>[.github/workflows/dependabot-uv-lock.yml](../../../../sources/hashgraph-online__hol-guard/.github/workflows/dependabot-uv-lock.yml)<br>[.github/workflows/fuzz.yml](../../../../sources/hashgraph-online__hol-guard/.github/workflows/fuzz.yml)<br>[.github/workflows/harness-smoke.yml](../../../../sources/hashgraph-online__hol-guard/.github/workflows/harness-smoke.yml)<br>[.github/workflows/publish-action-repo.yml](../../../../sources/hashgraph-online__hol-guard/.github/workflows/publish-action-repo.yml) |
| Containers / deploy | 2 | [Dockerfile](../../../../sources/hashgraph-online__hol-guard/Dockerfile)<br>[.clusterfuzzlite/Dockerfile](../../../../sources/hashgraph-online__hol-guard/.clusterfuzzlite/Dockerfile) |
| Security / policy | 561 | [SECURITY.md](../../../../sources/hashgraph-online__hol-guard/SECURITY.md)<br>[tests/guard_python_phase12_support.py](../../../../sources/hashgraph-online__hol-guard/tests/guard_python_phase12_support.py)<br>[tests/guard_tier2_phase13_support.py](../../../../sources/hashgraph-online__hol-guard/tests/guard_tier2_phase13_support.py)<br>[tests/test_dashboard_sync_security.py](../../../../sources/hashgraph-online__hol-guard/tests/test_dashboard_sync_security.py)<br>[tests/test_guard_access_graph.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_access_graph.py)<br>[tests/test_guard_action_identity.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_action_identity.py) |
| Agent instructions | 2 | [tests/fixtures/guard-codex-malicious-mcp/.codex/config.toml](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/guard-codex-malicious-mcp/.codex/config.toml)<br>[tests/fixtures/gemini-extension-good/GEMINI.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/gemini-extension-good/GEMINI.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/test_guard_hashnet_mcp_canaries.py`, `tests/test_guard_mcp_detectors.py`, `tests/test_guard_mcp_package_proxy_phase14.py`.
2. Trace execution through entrypoints: `src/codex_plugin_scanner/guard/daemon/server.py`, `dashboard/src/app.tsx`, `dashboard/src/main.tsx`.
3. Map agent/tool runtime through: `tests/fixtures/skills-no-frontmatter/skills/bad-skill/SKILL.md`, `tests/fixtures/skills-no-frontmatter/.codex-plugin/plugin.json`, `tests/fixtures/skills-missing-dir/.codex-plugin/plugin.json`.
4. Inspect retrieval/memory/indexing through: `tests/test_guard_access_graph.py`, `tests/test_guard_phase05_approval_memory.py`, `src/codex_plugin_scanner/guard/access_graph_events.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/bundle_first_cloud.py`, `tests/cloud_exception_bundle_fixtures.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 AI antivirus for developer agents protect Codex, Claude Code, Cursor, Gemini, OpenCode, plugins, skills, MCP servers, an. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, Dockerfile, README.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
