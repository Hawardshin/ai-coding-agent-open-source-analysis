# alfredolopez80/multi-agent-ralph-loop Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Autonomous orchestration framework for Claude Code with MemPalace-inspired memory (4-layer stack, 818-token wake-up), parallel-first Agent Teams (6 teammates), Aristotle First Principles methodology, and 4-stage quality gates. 925+ tests, 22 active hooks, automatic learning pipeline.

## 요약

- 조사 단위: `sources/alfredolopez80__multi-agent-ralph-loop` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,160 files, 193 directories, depth score 115, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test_v2.24_minimax_mcp.sh, docs/claude-hud-mcp-fix.md, docs/SENTRY_SKILLS_VS_MCP.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | alfredolopez80/multi-agent-ralph-loop |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Shell |
| Stars | 138 |
| Forks | 22 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/alfredolopez80__multi-agent-ralph-loop](../../../../sources/alfredolopez80__multi-agent-ralph-loop) |
| Existing report | [reports/global-trending/repositories/alfredolopez80__multi-agent-ralph-loop.md](../../../global-trending/repositories/alfredolopez80__multi-agent-ralph-loop.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1160 / 193 |
| Max observed depth | 6 |
| Top directories | .claude, .github, .ralph, config, docs, scripts, tests |
| Top extensions | .md: 497, .sh: 397, .py: 74, .json: 47, .html: 45, .bats: 35, .js: 20, .png: 14, (none): 7, .txt: 5, .svg: 4, .bash: 2 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 112 |
| docs | documentation surface | 97 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| scripts | top-level component | 1 |


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
| mcp | [tests/test_v2.24_minimax_mcp.sh](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/test_v2.24_minimax_mcp.sh) | mcp signal |
| mcp | [docs/claude-hud-mcp-fix.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/claude-hud-mcp-fix.md) | mcp signal |
| mcp | [docs/SENTRY_SKILLS_VS_MCP.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/SENTRY_SKILLS_VS_MCP.md) | mcp signal |
| mcp | [docs/security/MCP_PLUGINS_ANALYSIS_v2.80.9.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/security/MCP_PLUGINS_ANALYSIS_v2.80.9.md) | mcp signal |
| agentRuntime | [agent-browser-policy.json](../../../../sources/alfredolopez80__multi-agent-ralph-loop/agent-browser-policy.json) | agentRuntime signal |
| agentRuntime | [agent-browser.json](../../../../sources/alfredolopez80__multi-agent-ralph-loop/agent-browser.json) | agentRuntime signal |
| agentRuntime | [AGENTS.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/HOOK_FORMAT_REFERENCE.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/HOOK_FORMAT_REFERENCE.md) | agentRuntime signal |
| instruction | [CLAUDE.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/CLAUDE.md) | instruction signal |
| instruction | [docs/CLAUDE.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/CLAUDE.md) | instruction signal |
| instruction | [docs/agent-teams/AGENTS.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/agent-teams/AGENTS.md) | instruction signal |
| config | [tests/requirements.txt](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/requirements.txt) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 422 | [agent-browser-policy.json](../../../../sources/alfredolopez80__multi-agent-ralph-loop/agent-browser-policy.json)<br>[agent-browser.json](../../../../sources/alfredolopez80__multi-agent-ralph-loop/agent-browser.json)<br>[AGENTS.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/AGENTS.md)<br>[tests/HOOK_FORMAT_REFERENCE.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/HOOK_FORMAT_REFERENCE.md)<br>[tests/HOOK_TESTING_PATTERNS.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/HOOK_TESTING_PATTERNS.md)<br>[tests/skills/test-autoresearch-integrations.sh](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/skills/test-autoresearch-integrations.sh)<br>[tests/skills/test-autoresearch-smart-setup.sh](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/skills/test-autoresearch-smart-setup.sh)<br>[tests/skills/test-autoresearch.sh](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/skills/test-autoresearch.sh) |
| mcp | 8 | [tests/test_v2.24_minimax_mcp.sh](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/test_v2.24_minimax_mcp.sh)<br>[docs/claude-hud-mcp-fix.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/claude-hud-mcp-fix.md)<br>[docs/SENTRY_SKILLS_VS_MCP.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/SENTRY_SKILLS_VS_MCP.md)<br>[docs/security/MCP_PLUGINS_ANALYSIS_v2.80.9.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/security/MCP_PLUGINS_ANALYSIS_v2.80.9.md)<br>[docs/research/context-memory-mcp-jarvis.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/research/context-memory-mcp-jarvis.md)<br>[.claude/skills/minimax-mcp-usage/skill.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/.claude/skills/minimax-mcp-usage/skill.md)<br>[.claude/skills/glm-mcp/SKILL.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/.claude/skills/glm-mcp/SKILL.md)<br>[.claude/rules/zai-mcp-usage.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/.claude/rules/zai-mcp-usage.md) |
| retrieval | 47 | [tests/memory/__init__.py](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/memory/__init__.py)<br>[tests/memory/test_dream.py](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/memory/test_dream.py)<br>[tests/memory/test_learn_capture.py](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/memory/test_learn_capture.py)<br>[tests/memory/test_memory_node.py](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/memory/test_memory_node.py)<br>[tests/memory/test_project_memory.py](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/memory/test_project_memory.py)<br>[tests/memory/test_recall_v2.py](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/memory/test_recall_v2.py)<br>[tests/memory/test_threat_model_invariants.py](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/memory/test_threat_model_invariants.py)<br>[tests/memory/test_tree_store.py](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/memory/test_tree_store.py) |
| spec | 141 | [tests/requirements.txt](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/requirements.txt)<br>[scripts/validate-global-architecture.sh](../../../../sources/alfredolopez80__multi-agent-ralph-loop/scripts/validate-global-architecture.sh)<br>[scripts/validate-system-requirements.sh](../../../../sources/alfredolopez80__multi-agent-ralph-loop/scripts/validate-system-requirements.sh)<br>[docs/ralph-architecture.svg](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/ralph-architecture.svg)<br>[docs/templates/DESIGN.md.template](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/templates/DESIGN.md.template)<br>[docs/security/ARCHITECTURE_MIGRATION_DIAGRAM.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/security/ARCHITECTURE_MIGRATION_DIAGRAM.md)<br>[docs/security/ARCHITECTURE_MIGRATION_V2_CLAUDE_MEM_ONLY.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/security/ARCHITECTURE_MIGRATION_V2_CLAUDE_MEM_ONLY.md)<br>[docs/security/diagram-design-threat-model.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/security/diagram-design-threat-model.md) |
| eval | 286 | [test-context-thresholds.sh](../../../../sources/alfredolopez80__multi-agent-ralph-loop/test-context-thresholds.sh)<br>[test-git-root.txt](../../../../sources/alfredolopez80__multi-agent-ralph-loop/test-git-root.txt)<br>[test-quality-validation.js](../../../../sources/alfredolopez80__multi-agent-ralph-loop/test-quality-validation.js)<br>[test-security-check.ts](../../../../sources/alfredolopez80__multi-agent-ralph-loop/test-security-check.ts)<br>[tests/__init__.py](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/conftest.py)<br>[tests/coverage.json](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/coverage.json)<br>[tests/HOOK_FORMAT_REFERENCE.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/HOOK_FORMAT_REFERENCE.md) |
| security | 118 | [agent-browser-policy.json](../../../../sources/alfredolopez80__multi-agent-ralph-loop/agent-browser-policy.json)<br>[test-security-check.ts](../../../../sources/alfredolopez80__multi-agent-ralph-loop/test-security-check.ts)<br>[tests/SECURITY_AUDIT.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/SECURITY_AUDIT.md)<br>[tests/test_git_safety_guard.py](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/test_git_safety_guard.py)<br>[tests/test_install_security.bats](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/test_install_security.bats)<br>[tests/test_mmc_security.bats](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/test_mmc_security.bats)<br>[tests/test_pretooluse_permission_decision.py](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/test_pretooluse_permission_decision.py)<br>[tests/test_ralph_security.bats](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/test_ralph_security.bats) |
| ci | 4 | [scripts/ci/shellcheck-wrapper.sh](../../../../sources/alfredolopez80__multi-agent-ralph-loop/scripts/ci/shellcheck-wrapper.sh)<br>[scripts/ci/validate-hooks.sh](../../../../sources/alfredolopez80__multi-agent-ralph-loop/scripts/ci/validate-hooks.sh)<br>[scripts/ci/validate-skills.sh](../../../../sources/alfredolopez80__multi-agent-ralph-loop/scripts/ci/validate-skills.sh)<br>[.github/workflows/ci.yml](../../../../sources/alfredolopez80__multi-agent-ralph-loop/.github/workflows/ci.yml) |
| container | 0 | not obvious |
| instruction | 5 | [AGENTS.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/AGENTS.md)<br>[CLAUDE.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/CLAUDE.md)<br>[docs/CLAUDE.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/CLAUDE.md)<br>[docs/agent-teams/AGENTS.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/agent-teams/AGENTS.md)<br>[.claude/rules/learned/rooms/agents.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/.claude/rules/learned/rooms/agents.md) |
| docs | 306 | [README.es.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/README.es.md)<br>[README.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/README.md)<br>[tests/swarm-mode/README.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/swarm-mode/README.md)<br>[tests/stop-hook/README.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/stop-hook/README.md)<br>[tests/security/README.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/security/README.md)<br>[tests/promptify-integration/README.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/promptify-integration/README.md)<br>[tests/learning-system/README.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/learning-system/README.md)<br>[docs/CLAUDE_MEM_HOOKS_FIX.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/CLAUDE_MEM_HOOKS_FIX.md) |
| config | 1 | [tests/requirements.txt](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 286 | [test-context-thresholds.sh](../../../../sources/alfredolopez80__multi-agent-ralph-loop/test-context-thresholds.sh)<br>[test-git-root.txt](../../../../sources/alfredolopez80__multi-agent-ralph-loop/test-git-root.txt)<br>[test-quality-validation.js](../../../../sources/alfredolopez80__multi-agent-ralph-loop/test-quality-validation.js)<br>[test-security-check.ts](../../../../sources/alfredolopez80__multi-agent-ralph-loop/test-security-check.ts)<br>[tests/__init__.py](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/conftest.py) |
| CI workflows | 4 | [scripts/ci/shellcheck-wrapper.sh](../../../../sources/alfredolopez80__multi-agent-ralph-loop/scripts/ci/shellcheck-wrapper.sh)<br>[scripts/ci/validate-hooks.sh](../../../../sources/alfredolopez80__multi-agent-ralph-loop/scripts/ci/validate-hooks.sh)<br>[scripts/ci/validate-skills.sh](../../../../sources/alfredolopez80__multi-agent-ralph-loop/scripts/ci/validate-skills.sh)<br>[.github/workflows/ci.yml](../../../../sources/alfredolopez80__multi-agent-ralph-loop/.github/workflows/ci.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 118 | [agent-browser-policy.json](../../../../sources/alfredolopez80__multi-agent-ralph-loop/agent-browser-policy.json)<br>[test-security-check.ts](../../../../sources/alfredolopez80__multi-agent-ralph-loop/test-security-check.ts)<br>[tests/SECURITY_AUDIT.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/SECURITY_AUDIT.md)<br>[tests/test_git_safety_guard.py](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/test_git_safety_guard.py)<br>[tests/test_install_security.bats](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/test_install_security.bats)<br>[tests/test_mmc_security.bats](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/test_mmc_security.bats) |
| Agent instructions | 5 | [AGENTS.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/AGENTS.md)<br>[CLAUDE.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/CLAUDE.md)<br>[docs/CLAUDE.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/CLAUDE.md)<br>[docs/agent-teams/AGENTS.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/agent-teams/AGENTS.md)<br>[.claude/rules/learned/rooms/agents.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/.claude/rules/learned/rooms/agents.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `tests/test_v2.24_minimax_mcp.sh`, `docs/claude-hud-mcp-fix.md`, `docs/SENTRY_SKILLS_VS_MCP.md`.
2. Map agent/tool runtime through: `agent-browser-policy.json`, `agent-browser.json`, `AGENTS.md`.
3. Inspect retrieval/memory/indexing through: `tests/memory/__init__.py`, `tests/memory/test_dream.py`, `tests/memory/test_learn_capture.py`.
4. Verify behavior through test/eval files: `test-context-thresholds.sh`, `test-git-root.txt`, `test-quality-validation.js`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Autonomous orchestration framework for Claude Code with MemPalace inspired memory 4 layer stack, 818 token wake up , par. 핵심 구조 신호는 Shell, README.md, AGENTS.md, CLAUDE.md, LICENSE, tests이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
