# agentlas-ai/Hephaestus Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Open Agent OS for Claude Code, Codex, and Cursor: meta-agent builder, A2A Hub routing, local ontology, memory and security gates.

## 요약

- 조사 단위: `sources/agentlas-ai__Hephaestus` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 512 files, 155 directories, depth score 111, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

코딩 에이전트/IDE 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=ontology/__main__.py, codex/plugins/agentlas-core-engine-meta-agent/ontology/__main__.py, codex/plugins/agentlas-core-engine-meta-agent/bin/hephaests-network이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 coding-agent reference implementation이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | agentlas-ai/Hephaestus |
| Topic | Coding Agent and IDE / 코딩 에이전트/IDE |
| Region | global |
| Language | Python |
| Stars | 74 |
| Forks | 13 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/agentlas-ai__Hephaestus](../../../../sources/agentlas-ai__Hephaestus) |
| Existing report | [reports/global-trending/repositories/agentlas-ai__Hephaestus.md](../../../global-trending/repositories/agentlas-ai__Hephaestus.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 512 / 155 |
| Max observed depth | 6 |
| Top directories | .agentlas, .agents, .claude, .claude-plugin, .gemini, agentlas_cloud, agents, antigravity, assets, benchmarks, bin, claude, codex, cursor, docs, examples, gemini, hermes, modes, ontology |
| Top extensions | .md: 156, .py: 156, .json: 91, .tpl: 42, .jsonl: 18, .sh: 15, (none): 9, .svg: 8, .toml: 6, .cmd: 3, .mdc: 2, .command: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 37 |
| tests | validation surface | 25 |
| examples/ontology-proposal-agent | examples workspace | 2 |
| agentlas_cloud | top-level component | 1 |
| agents | top-level component | 1 |
| antigravity | top-level component | 1 |
| assets | top-level component | 1 |
| benchmarks | validation surface | 1 |
| bin | top-level component | 1 |
| claude | top-level component | 1 |
| codex | top-level component | 1 |
| cursor | top-level component | 1 |
| examples | top-level component | 1 |
| examples/minimal-agent-team | examples workspace | 1 |
| gemini | top-level component | 1 |
| hermes | top-level component | 1 |
| modes | top-level component | 1 |
| ontology | top-level component | 1 |


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
| entrypoints | [ontology/__main__.py](../../../../sources/agentlas-ai__Hephaestus/ontology/__main__.py) | entrypoints signal |
| entrypoints | [codex/plugins/agentlas-core-engine-meta-agent/ontology/__main__.py](../../../../sources/agentlas-ai__Hephaestus/codex/plugins/agentlas-core-engine-meta-agent/ontology/__main__.py) | entrypoints signal |
| entrypoints | [codex/plugins/agentlas-core-engine-meta-agent/bin/hephaests-network](../../../../sources/agentlas-ai__Hephaestus/codex/plugins/agentlas-core-engine-meta-agent/bin/hephaests-network) | entrypoints signal |
| entrypoints | [codex/plugins/agentlas-core-engine-meta-agent/bin/hephaestus](../../../../sources/agentlas-ai__Hephaestus/codex/plugins/agentlas-core-engine-meta-agent/bin/hephaestus) | entrypoints signal |
| agentRuntime | [agent.md](../../../../sources/agentlas-ai__Hephaestus/agent.md) | agentRuntime signal |
| agentRuntime | [AGENTS.md](../../../../sources/agentlas-ai__Hephaestus/AGENTS.md) | agentRuntime signal |
| agentRuntime | [memory.md](../../../../sources/agentlas-ai__Hephaestus/memory.md) | agentRuntime signal |
| agentRuntime | [templates/agent.md.tpl](../../../../sources/agentlas-ai__Hephaestus/templates/agent.md.tpl) | agentRuntime signal |
| instruction | [CLAUDE.md](../../../../sources/agentlas-ai__Hephaestus/CLAUDE.md) | instruction signal |
| instruction | [GEMINI.md](../../../../sources/agentlas-ai__Hephaestus/GEMINI.md) | instruction signal |
| instruction | [templates/AGENTS.md.tpl](../../../../sources/agentlas-ai__Hephaestus/templates/AGENTS.md.tpl) | instruction signal |
| security | [SECURITY.md](../../../../sources/agentlas-ai__Hephaestus/SECURITY.md) | security signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 16 | [ontology/__main__.py](../../../../sources/agentlas-ai__Hephaestus/ontology/__main__.py)<br>[codex/plugins/agentlas-core-engine-meta-agent/ontology/__main__.py](../../../../sources/agentlas-ai__Hephaestus/codex/plugins/agentlas-core-engine-meta-agent/ontology/__main__.py)<br>[codex/plugins/agentlas-core-engine-meta-agent/bin/hephaests-network](../../../../sources/agentlas-ai__Hephaestus/codex/plugins/agentlas-core-engine-meta-agent/bin/hephaests-network)<br>[codex/plugins/agentlas-core-engine-meta-agent/bin/hephaestus](../../../../sources/agentlas-ai__Hephaestus/codex/plugins/agentlas-core-engine-meta-agent/bin/hephaestus)<br>[codex/plugins/agentlas-core-engine-meta-agent/bin/hephaestus.cmd](../../../../sources/agentlas-ai__Hephaestus/codex/plugins/agentlas-core-engine-meta-agent/bin/hephaestus.cmd)<br>[codex/plugins/agentlas-core-engine-meta-agent/agentlas_cloud/__main__.py](../../../../sources/agentlas-ai__Hephaestus/codex/plugins/agentlas-core-engine-meta-agent/agentlas_cloud/__main__.py)<br>[claude/plugins/agentlas-core-engine-meta-agent/ontology/__main__.py](../../../../sources/agentlas-ai__Hephaestus/claude/plugins/agentlas-core-engine-meta-agent/ontology/__main__.py)<br>[claude/plugins/agentlas-core-engine-meta-agent/bin/hephaests-network](../../../../sources/agentlas-ai__Hephaestus/claude/plugins/agentlas-core-engine-meta-agent/bin/hephaests-network) |
| agentRuntime | 129 | [agent.md](../../../../sources/agentlas-ai__Hephaestus/agent.md)<br>[AGENTS.md](../../../../sources/agentlas-ai__Hephaestus/AGENTS.md)<br>[memory.md](../../../../sources/agentlas-ai__Hephaestus/memory.md)<br>[templates/agent.md.tpl](../../../../sources/agentlas-ai__Hephaestus/templates/agent.md.tpl)<br>[templates/AGENTS.md.tpl](../../../../sources/agentlas-ai__Hephaestus/templates/AGENTS.md.tpl)<br>[templates/memory-map.json.tpl](../../../../sources/agentlas-ai__Hephaestus/templates/memory-map.json.tpl)<br>[templates/skill-registry.json.tpl](../../../../sources/agentlas-ai__Hephaestus/templates/skill-registry.json.tpl)<br>[skills/README.md](../../../../sources/agentlas-ai__Hephaestus/skills/README.md) |
| mcp | 9 | [tests/test_mcp_stdio.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_mcp_stdio.py)<br>[scripts/verify-mcp-surface.sh](../../../../sources/agentlas-ai__Hephaestus/scripts/verify-mcp-surface.sh)<br>[docs/readme-demo-mcp-gif.md](../../../../sources/agentlas-ai__Hephaestus/docs/readme-demo-mcp-gif.md)<br>[codex/plugins/agentlas-core-engine-meta-agent/agentlas_cloud/mcp_stdio.py](../../../../sources/agentlas-ai__Hephaestus/codex/plugins/agentlas-core-engine-meta-agent/agentlas_cloud/mcp_stdio.py)<br>[claude/plugins/agentlas-core-engine-meta-agent/.mcp.json](../../../../sources/agentlas-ai__Hephaestus/claude/plugins/agentlas-core-engine-meta-agent/.mcp.json)<br>[claude/plugins/agentlas-core-engine-meta-agent/agentlas_cloud/mcp_stdio.py](../../../../sources/agentlas-ai__Hephaestus/claude/plugins/agentlas-core-engine-meta-agent/agentlas_cloud/mcp_stdio.py)<br>[assets/hephaestus-network-mcp-demo-poster.png](../../../../sources/agentlas-ai__Hephaestus/assets/hephaestus-network-mcp-demo-poster.png)<br>[assets/hephaestus-network-mcp-demo.gif](../../../../sources/agentlas-ai__Hephaestus/assets/hephaestus-network-mcp-demo.gif) |
| retrieval | 55 | [memory.md](../../../../sources/agentlas-ai__Hephaestus/memory.md)<br>[tests/test_agent_graph.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_agent_graph.py)<br>[tests/test_memory.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_memory.py)<br>[templates/memory-map.json.tpl](../../../../sources/agentlas-ai__Hephaestus/templates/memory-map.json.tpl)<br>[templates/project-soul-memory.md.tpl](../../../../sources/agentlas-ai__Hephaestus/templates/project-soul-memory.md.tpl)<br>[templates/super-ontology-knowledge-homeostasis.json.tpl](../../../../sources/agentlas-ai__Hephaestus/templates/super-ontology-knowledge-homeostasis.json.tpl)<br>[templates/super-ontology-memory-bridge.jsonl.tpl](../../../../sources/agentlas-ai__Hephaestus/templates/super-ontology-memory-bridge.jsonl.tpl)<br>[skills/memory-ticketing/SKILL.md](../../../../sources/agentlas-ai__Hephaestus/skills/memory-ticketing/SKILL.md) |
| spec | 9 | [ARCHITECTURE.md](../../../../sources/agentlas-ai__Hephaestus/ARCHITECTURE.md)<br>[skills/llm-runtime-architecture/SKILL.md](../../../../sources/agentlas-ai__Hephaestus/skills/llm-runtime-architecture/SKILL.md)<br>[skills/agent-team-design/SKILL.md](../../../../sources/agentlas-ai__Hephaestus/skills/agent-team-design/SKILL.md)<br>[docs/llm-runtime-architecture.md](../../../../sources/agentlas-ai__Hephaestus/docs/llm-runtime-architecture.md)<br>[docs/memory-architecture.md](../../../../sources/agentlas-ai__Hephaestus/docs/memory-architecture.md)<br>[assets/agentlas-meta-agent-architecture.svg](../../../../sources/agentlas-ai__Hephaestus/assets/agentlas-meta-agent-architecture.svg)<br>[assets/hephaestus-network-architecture.svg](../../../../sources/agentlas-ai__Hephaestus/assets/hephaestus-network-architecture.svg)<br>[.agents/skills/llm-runtime-architecture/SKILL.md](../../../../sources/agentlas-ai__Hephaestus/.agents/skills/llm-runtime-architecture/SKILL.md) |
| eval | 29 | [tests/test_agent_graph.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_agent_graph.py)<br>[tests/test_agentlas_auth.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_agentlas_auth.py)<br>[tests/test_agentlas_cloud_runtime.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_agentlas_cloud_runtime.py)<br>[tests/test_agentos.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_agentos.py)<br>[tests/test_hephaestus_command_surface.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_hephaestus_command_surface.py)<br>[tests/test_hub_fallback.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_hub_fallback.py)<br>[tests/test_hub_invocation.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_hub_invocation.py)<br>[tests/test_kernel.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_kernel.py) |
| security | 11 | [SECURITY.md](../../../../sources/agentlas-ai__Hephaestus/SECURITY.md)<br>[tests/test_agentlas_auth.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_agentlas_auth.py)<br>[skills/agentlas-security-scan/SKILL.md](../../../../sources/agentlas-ai__Hephaestus/skills/agentlas-security-scan/SKILL.md)<br>[codex/plugins/agentlas-core-engine-meta-agent/skills/agentlas-security-scan/SKILL.md](../../../../sources/agentlas-ai__Hephaestus/codex/plugins/agentlas-core-engine-meta-agent/skills/agentlas-security-scan/SKILL.md)<br>[codex/plugins/agentlas-core-engine-meta-agent/agentlas_cloud/auth.py](../../../../sources/agentlas-ai__Hephaestus/codex/plugins/agentlas-core-engine-meta-agent/agentlas_cloud/auth.py)<br>[codex/plugins/agentlas-core-engine-meta-agent/agentlas_cloud/networking/policy.py](../../../../sources/agentlas-ai__Hephaestus/codex/plugins/agentlas-core-engine-meta-agent/agentlas_cloud/networking/policy.py)<br>[claude/plugins/agentlas-core-engine-meta-agent/skills/agentlas-security-scan/SKILL.md](../../../../sources/agentlas-ai__Hephaestus/claude/plugins/agentlas-core-engine-meta-agent/skills/agentlas-security-scan/SKILL.md)<br>[claude/plugins/agentlas-core-engine-meta-agent/agentlas_cloud/auth.py](../../../../sources/agentlas-ai__Hephaestus/claude/plugins/agentlas-core-engine-meta-agent/agentlas_cloud/auth.py) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 8 | [AGENTS.md](../../../../sources/agentlas-ai__Hephaestus/AGENTS.md)<br>[CLAUDE.md](../../../../sources/agentlas-ai__Hephaestus/CLAUDE.md)<br>[GEMINI.md](../../../../sources/agentlas-ai__Hephaestus/GEMINI.md)<br>[templates/AGENTS.md.tpl](../../../../sources/agentlas-ai__Hephaestus/templates/AGENTS.md.tpl)<br>[templates/CLAUDE.md.tpl](../../../../sources/agentlas-ai__Hephaestus/templates/CLAUDE.md.tpl)<br>[templates/GEMINI.md.tpl](../../../../sources/agentlas-ai__Hephaestus/templates/GEMINI.md.tpl)<br>[gemini/extension/GEMINI.md](../../../../sources/agentlas-ai__Hephaestus/gemini/extension/GEMINI.md)<br>[.gemini/GEMINI.md](../../../../sources/agentlas-ai__Hephaestus/.gemini/GEMINI.md) |
| docs | 46 | [README.hi.md](../../../../sources/agentlas-ai__Hephaestus/README.hi.md)<br>[README.ja.md](../../../../sources/agentlas-ai__Hephaestus/README.ja.md)<br>[README.ko.md](../../../../sources/agentlas-ai__Hephaestus/README.ko.md)<br>[README.md](../../../../sources/agentlas-ai__Hephaestus/README.md)<br>[README.zh-CN.md](../../../../sources/agentlas-ai__Hephaestus/README.zh-CN.md)<br>[skills/README.md](../../../../sources/agentlas-ai__Hephaestus/skills/README.md)<br>[opencode/README.md](../../../../sources/agentlas-ai__Hephaestus/opencode/README.md)<br>[openclaw/README.md](../../../../sources/agentlas-ai__Hephaestus/openclaw/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 29 | [tests/test_agent_graph.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_agent_graph.py)<br>[tests/test_agentlas_auth.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_agentlas_auth.py)<br>[tests/test_agentlas_cloud_runtime.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_agentlas_cloud_runtime.py)<br>[tests/test_agentos.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_agentos.py)<br>[tests/test_hephaestus_command_surface.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_hephaestus_command_surface.py)<br>[tests/test_hub_fallback.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_hub_fallback.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 11 | [SECURITY.md](../../../../sources/agentlas-ai__Hephaestus/SECURITY.md)<br>[tests/test_agentlas_auth.py](../../../../sources/agentlas-ai__Hephaestus/tests/test_agentlas_auth.py)<br>[skills/agentlas-security-scan/SKILL.md](../../../../sources/agentlas-ai__Hephaestus/skills/agentlas-security-scan/SKILL.md)<br>[codex/plugins/agentlas-core-engine-meta-agent/skills/agentlas-security-scan/SKILL.md](../../../../sources/agentlas-ai__Hephaestus/codex/plugins/agentlas-core-engine-meta-agent/skills/agentlas-security-scan/SKILL.md)<br>[codex/plugins/agentlas-core-engine-meta-agent/agentlas_cloud/auth.py](../../../../sources/agentlas-ai__Hephaestus/codex/plugins/agentlas-core-engine-meta-agent/agentlas_cloud/auth.py)<br>[codex/plugins/agentlas-core-engine-meta-agent/agentlas_cloud/networking/policy.py](../../../../sources/agentlas-ai__Hephaestus/codex/plugins/agentlas-core-engine-meta-agent/agentlas_cloud/networking/policy.py) |
| Agent instructions | 8 | [AGENTS.md](../../../../sources/agentlas-ai__Hephaestus/AGENTS.md)<br>[CLAUDE.md](../../../../sources/agentlas-ai__Hephaestus/CLAUDE.md)<br>[GEMINI.md](../../../../sources/agentlas-ai__Hephaestus/GEMINI.md)<br>[templates/AGENTS.md.tpl](../../../../sources/agentlas-ai__Hephaestus/templates/AGENTS.md.tpl)<br>[templates/CLAUDE.md.tpl](../../../../sources/agentlas-ai__Hephaestus/templates/CLAUDE.md.tpl)<br>[templates/GEMINI.md.tpl](../../../../sources/agentlas-ai__Hephaestus/templates/GEMINI.md.tpl) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `ontology/__main__.py`, `codex/plugins/agentlas-core-engine-meta-agent/ontology/__main__.py`, `codex/plugins/agentlas-core-engine-meta-agent/bin/hephaests-network`.
2. Trace execution through entrypoints: `ontology/__main__.py`, `codex/plugins/agentlas-core-engine-meta-agent/ontology/__main__.py`, `codex/plugins/agentlas-core-engine-meta-agent/bin/hephaests-network`.
3. Map agent/tool runtime through: `agent.md`, `AGENTS.md`, `memory.md`.
4. Inspect retrieval/memory/indexing through: `memory.md`, `tests/test_agent_graph.py`, `tests/test_memory.py`.
5. Verify behavior through test/eval files: `tests/test_agent_graph.py`, `tests/test_agentlas_auth.py`, `tests/test_agentlas_cloud_runtime.py`.

## Existing Repository Insight

코딩 에이전트/IDE 관점에서 Open Agent OS for Claude Code, Codex, and Cursor meta agent builder, A2A Hub routing, local ontology, memory and securit. 핵심 구조 신호는 Python, README.md, AGENTS.md, CLAUDE.md, LICENSE, tests이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 코딩 에이전트/IDE 레포입니다. 활용 관점은 coding-agent reference implementation이고, 후속 확인 포인트는 ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
