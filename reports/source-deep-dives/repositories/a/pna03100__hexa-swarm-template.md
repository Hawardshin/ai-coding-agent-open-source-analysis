# pna03100/hexa-swarm-template Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Claude-native enterprise delivery methodology — Copier template + hexaswarm-core CLI. 6-agent architecture, S1–S6 safety invariants, 28 production deployments. Korea × Japan APAC: LUMENRAI Corp × No.1 Solutions Sales Agency Agreement signed 2026-04-14 (Singapore law). Q2 2026 Korean on-premise AI launch. Claude Code Max-native.

## 요약

- 조사 단위: `sources/pna03100__hexa-swarm-template` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 235 files, 84 directories, depth score 116, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=hexa_swarm_core/tests/test_mcp_openapi.py, hexa_swarm_core/hexa_swarm_core/mcp/__init__.py, hexa_swarm_core/hexa_swarm_core/mcp/openapi_server.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | pna03100/hexa-swarm-template |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/pna03100__hexa-swarm-template](../../../../sources/pna03100__hexa-swarm-template) |
| Existing report | [reports/korea-trending/repositories/pna03100__hexa-swarm-template.md](../../../korea-trending/repositories/pna03100__hexa-swarm-template.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 235 / 84 |
| Max observed depth | 8 |
| Top directories | .github, {{project_slug}}, docs, examples, hexa_swarm_core |
| Top extensions | .py: 101, .md: 75, .jinja: 34, (none): 10, .toml: 5, .yml: 4, .json: 2, .sh: 2, .ipynb: 1, .yaml: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 13 |
| examples/data-pipeline-py-celery | examples workspace | 3 |
| examples/library-py | examples workspace | 3 |
| examples/ml-training-py | examples workspace | 2 |
| examples/rpa-bot-py-click | examples workspace | 2 |
| .github | ci surface | 1 |
| {{project_slug}} | top-level component | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| hexa_swarm_core | top-level component | 1 |


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
| mcp | [hexa_swarm_core/tests/test_mcp_openapi.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/tests/test_mcp_openapi.py) | mcp signal |
| mcp | [hexa_swarm_core/hexa_swarm_core/mcp/__init__.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/mcp/__init__.py) | mcp signal |
| mcp | [hexa_swarm_core/hexa_swarm_core/mcp/openapi_server.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/mcp/openapi_server.py) | mcp signal |
| mcp | [hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/mcp.json](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/mcp.json) | mcp signal |
| agentRuntime | [hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/worktree-boot/SKILL.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/worktree-boot/SKILL.md) | agentRuntime signal |
| agentRuntime | [hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/ship/SKILL.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/ship/SKILL.md) | agentRuntime signal |
| agentRuntime | [hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/security-audit/SKILL.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/security-audit/SKILL.md) | agentRuntime signal |
| agentRuntime | [hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/quality-gate/SKILL.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/quality-gate/SKILL.md) | agentRuntime signal |
| entrypoints | [hexa_swarm_core/hexa_swarm_core/cli/__main__.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/cli/__main__.py) | entrypoints signal |
| entrypoints | [{{project_slug}}/src/backend/main.py.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/src/backend/main.py.jinja) | entrypoints signal |
| instruction | [{{project_slug}}/AGENTS.md.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/AGENTS.md.jinja) | instruction signal |
| instruction | [{{project_slug}}/CLAUDE.md.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/CLAUDE.md.jinja) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [hexa_swarm_core/hexa_swarm_core/cli/__main__.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/cli/__main__.py)<br>[{{project_slug}}/src/backend/main.py.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/src/backend/main.py.jinja) |
| agentRuntime | 58 | [hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/worktree-boot/SKILL.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/worktree-boot/SKILL.md)<br>[hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/ship/SKILL.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/ship/SKILL.md)<br>[hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/security-audit/SKILL.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/security-audit/SKILL.md)<br>[hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/quality-gate/SKILL.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/quality-gate/SKILL.md)<br>[hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/fix-issue/SKILL.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/fix-issue/SKILL.md)<br>[hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/deploy-check/SKILL.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/deploy-check/SKILL.md)<br>[hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/cross-sync-alert/SKILL.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/cross-sync-alert/SKILL.md)<br>[hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/cost-tracker/SKILL.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/cost-tracker/SKILL.md) |
| mcp | 6 | [hexa_swarm_core/tests/test_mcp_openapi.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/tests/test_mcp_openapi.py)<br>[hexa_swarm_core/hexa_swarm_core/mcp/__init__.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/mcp/__init__.py)<br>[hexa_swarm_core/hexa_swarm_core/mcp/openapi_server.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/mcp/openapi_server.py)<br>[hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/mcp.json](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/mcp.json)<br>[docs/mcp-integration.md](../../../../sources/pna03100__hexa-swarm-template/docs/mcp-integration.md)<br>[{{project_slug}}/.claude/mcp.json.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.claude/mcp.json.jinja) |
| retrieval | 1 | [examples/data-pipeline-py-celery/pipelines/ingest.py](../../../../sources/pna03100__hexa-swarm-template/examples/data-pipeline-py-celery/pipelines/ingest.py) |
| spec | 3 | [hexa_swarm_core/hexa_swarm_core/assets/tier_a/.ai-sync/ARCHITECTURE_DECISIONS/0001-adopted-hexa.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.ai-sync/ARCHITECTURE_DECISIONS/0001-adopted-hexa.md)<br>[{{project_slug}}/src/backend/requirements.txt.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/src/backend/requirements.txt.jinja)<br>[{{project_slug}}/.ai-sync/ARCHITECTURE_DECISIONS.md](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.ai-sync/ARCHITECTURE_DECISIONS.md) |
| eval | 30 | [hexa_swarm_core/tests/__init__.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/tests/__init__.py)<br>[hexa_swarm_core/tests/conftest.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/tests/conftest.py)<br>[hexa_swarm_core/tests/test_adapters.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/tests/test_adapters.py)<br>[hexa_swarm_core/tests/test_archetypes.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/tests/test_archetypes.py)<br>[hexa_swarm_core/tests/test_cli.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/tests/test_cli.py)<br>[hexa_swarm_core/tests/test_cost_and_safety.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/tests/test_cost_and_safety.py)<br>[hexa_swarm_core/tests/test_install.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/tests/test_install.py)<br>[hexa_swarm_core/tests/test_invariants.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/tests/test_invariants.py) |
| security | 9 | [hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/security-audit/SKILL.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/security-audit/SKILL.md)<br>[hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/hooks/pre_tool_use_guard.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/hooks/pre_tool_use_guard.py)<br>[hexa_swarm_core/hexa_swarm_core/assets/tier_a/.ai-sync/audit/.gitkeep](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.ai-sync/audit/.gitkeep)<br>[{{project_slug}}/src/backend/auth.py.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/src/backend/auth.py.jinja)<br>[{{project_slug}}/src/backend/tests/test_security.py.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/src/backend/tests/test_security.py.jinja)<br>[{{project_slug}}/.github/workflows/security-audit.yml.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.github/workflows/security-audit.yml.jinja)<br>[{{project_slug}}/.claude/skills/security-audit/SKILL.md](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.claude/skills/security-audit/SKILL.md)<br>[{{project_slug}}/.claude/hooks/pre_tool_use_guard.py](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.claude/hooks/pre_tool_use_guard.py) |
| ci | 11 | [{{project_slug}}/.github/workflows/backend-ci.yml.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.github/workflows/backend-ci.yml.jinja)<br>[{{project_slug}}/.github/workflows/contracts-drift.yml.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.github/workflows/contracts-drift.yml.jinja)<br>[{{project_slug}}/.github/workflows/cost-cap.yml.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.github/workflows/cost-cap.yml.jinja)<br>[{{project_slug}}/.github/workflows/frontend-ci.yml.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.github/workflows/frontend-ci.yml.jinja)<br>[{{project_slug}}/.github/workflows/invariants.yml.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.github/workflows/invariants.yml.jinja)<br>[{{project_slug}}/.github/workflows/ownership.yml.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.github/workflows/ownership.yml.jinja)<br>[{{project_slug}}/.github/workflows/parallel-lane.yml.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.github/workflows/parallel-lane.yml.jinja)<br>[{{project_slug}}/.github/workflows/security-audit.yml.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.github/workflows/security-audit.yml.jinja) |
| container | 0 | not obvious |
| instruction | 3 | [{{project_slug}}/AGENTS.md.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/AGENTS.md.jinja)<br>[{{project_slug}}/CLAUDE.md.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/CLAUDE.md.jinja)<br>[{{project_slug}}/src/backend/CLAUDE.md.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/src/backend/CLAUDE.md.jinja) |
| docs | 20 | [README.md](../../../../sources/pna03100__hexa-swarm-template/README.md)<br>[hexa_swarm_core/README.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/README.md)<br>[hexa_swarm_core/hexa_swarm_core/assets/tier_a/.ai-sync/contracts/README.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.ai-sync/contracts/README.md)<br>[examples/README.md](../../../../sources/pna03100__hexa-swarm-template/examples/README.md)<br>[examples/rpa-bot-py-click/README.md](../../../../sources/pna03100__hexa-swarm-template/examples/rpa-bot-py-click/README.md)<br>[examples/ml-training-py/README.md](../../../../sources/pna03100__hexa-swarm-template/examples/ml-training-py/README.md)<br>[examples/library-py/README.md](../../../../sources/pna03100__hexa-swarm-template/examples/library-py/README.md)<br>[examples/data-pipeline-py-celery/README.md](../../../../sources/pna03100__hexa-swarm-template/examples/data-pipeline-py-celery/README.md) |
| config | 5 | [hexa_swarm_core/pyproject.toml](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/pyproject.toml)<br>[examples/rpa-bot-py-click/pyproject.toml](../../../../sources/pna03100__hexa-swarm-template/examples/rpa-bot-py-click/pyproject.toml)<br>[examples/ml-training-py/pyproject.toml](../../../../sources/pna03100__hexa-swarm-template/examples/ml-training-py/pyproject.toml)<br>[examples/library-py/pyproject.toml](../../../../sources/pna03100__hexa-swarm-template/examples/library-py/pyproject.toml)<br>[examples/data-pipeline-py-celery/pyproject.toml](../../../../sources/pna03100__hexa-swarm-template/examples/data-pipeline-py-celery/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 30 | [hexa_swarm_core/tests/__init__.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/tests/__init__.py)<br>[hexa_swarm_core/tests/conftest.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/tests/conftest.py)<br>[hexa_swarm_core/tests/test_adapters.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/tests/test_adapters.py)<br>[hexa_swarm_core/tests/test_archetypes.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/tests/test_archetypes.py)<br>[hexa_swarm_core/tests/test_cli.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/tests/test_cli.py)<br>[hexa_swarm_core/tests/test_cost_and_safety.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/tests/test_cost_and_safety.py) |
| CI workflows | 11 | [{{project_slug}}/.github/workflows/backend-ci.yml.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.github/workflows/backend-ci.yml.jinja)<br>[{{project_slug}}/.github/workflows/contracts-drift.yml.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.github/workflows/contracts-drift.yml.jinja)<br>[{{project_slug}}/.github/workflows/cost-cap.yml.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.github/workflows/cost-cap.yml.jinja)<br>[{{project_slug}}/.github/workflows/frontend-ci.yml.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.github/workflows/frontend-ci.yml.jinja)<br>[{{project_slug}}/.github/workflows/invariants.yml.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.github/workflows/invariants.yml.jinja)<br>[{{project_slug}}/.github/workflows/ownership.yml.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.github/workflows/ownership.yml.jinja) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 9 | [hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/security-audit/SKILL.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/security-audit/SKILL.md)<br>[hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/hooks/pre_tool_use_guard.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/hooks/pre_tool_use_guard.py)<br>[hexa_swarm_core/hexa_swarm_core/assets/tier_a/.ai-sync/audit/.gitkeep](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.ai-sync/audit/.gitkeep)<br>[{{project_slug}}/src/backend/auth.py.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/src/backend/auth.py.jinja)<br>[{{project_slug}}/src/backend/tests/test_security.py.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/src/backend/tests/test_security.py.jinja)<br>[{{project_slug}}/.github/workflows/security-audit.yml.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.github/workflows/security-audit.yml.jinja) |
| Agent instructions | 3 | [{{project_slug}}/AGENTS.md.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/AGENTS.md.jinja)<br>[{{project_slug}}/CLAUDE.md.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/CLAUDE.md.jinja)<br>[{{project_slug}}/src/backend/CLAUDE.md.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/src/backend/CLAUDE.md.jinja) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `hexa_swarm_core/tests/test_mcp_openapi.py`, `hexa_swarm_core/hexa_swarm_core/mcp/__init__.py`, `hexa_swarm_core/hexa_swarm_core/mcp/openapi_server.py`.
2. Trace execution through entrypoints: `hexa_swarm_core/hexa_swarm_core/cli/__main__.py`, `{{project_slug}}/src/backend/main.py.jinja`.
3. Map agent/tool runtime through: `hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/worktree-boot/SKILL.md`, `hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/ship/SKILL.md`, `hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/security-audit/SKILL.md`.
4. Inspect retrieval/memory/indexing through: `examples/data-pipeline-py-celery/pipelines/ingest.py`.
5. Verify behavior through test/eval files: `hexa_swarm_core/tests/__init__.py`, `hexa_swarm_core/tests/conftest.py`, `hexa_swarm_core/tests/test_adapters.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Claude native enterprise delivery methodology — Copier template + hexaswarm core CLI. 6 agent architecture, S1–S6 safety. 핵심 구조 신호는 Python, README.md, LICENSE, ci, docs, spec-artifacts이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
