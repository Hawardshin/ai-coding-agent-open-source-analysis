# winstonkoh87/Athena-Public Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

The Linux OS for AI Agents — Persistent memory, autonomy, and time-awareness for any LLM. Own the state. Rent the intelligence.

## 요약

- 조사 단위: `sources/winstonkoh87__Athena-Public` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 900 files, 147 directories, depth score 129, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=wiki/FAQ.md, wiki/Getting-Started.md, wiki/Home.md이고, 의존성 단서는 anthropic, pydantic, torch, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | winstonkoh87/Athena-Public |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Python |
| Stars | 506 |
| Forks | 69 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/winstonkoh87__Athena-Public](../../../../sources/winstonkoh87__Athena-Public) |
| Existing report | [reports/global-trending/repositories/winstonkoh87__Athena-Public.md](../../../global-trending/repositories/winstonkoh87__Athena-Public.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 900 / 147 |
| Max observed depth | 6 |
| Top directories | .agent, .context, .devcontainer, .framework, .github, Athena-Public.wiki, community, docs, examples, scripts, src, supabase, tests, tools, wiki |
| Top extensions | .md: 541, .py: 280, .sql: 23, .sh: 12, .png: 9, .yml: 9, (none): 9, .txt: 3, .yaml: 3, .html: 2, .json: 2, .toml: 2 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 56 |
| docs | documentation surface | 40 |
| examples/protocols | examples workspace | 34 |
| examples/templates | examples workspace | 16 |
| examples/scripts | examples workspace | 14 |
| examples/skills | examples workspace | 9 |
| examples/workflows | examples workspace | 8 |
| tests | validation surface | 3 |
| examples/case_studies | examples workspace | 2 |
| examples/framework | examples workspace | 2 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| Athena-Public.wiki | top-level component | 1 |
| community | top-level component | 1 |
| examples | top-level component | 1 |
| examples/agents | examples workspace | 1 |
| examples/graphrag_visualization.png | examples workspace | 1 |
| examples/hooks | examples workspace | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | athena | athena |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | anthropic |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | torch, transformers |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [wiki/FAQ.md](../../../../sources/winstonkoh87__Athena-Public/wiki/FAQ.md) | retrieval signal |
| retrieval | [wiki/Getting-Started.md](../../../../sources/winstonkoh87__Athena-Public/wiki/Getting-Started.md) | retrieval signal |
| retrieval | [wiki/Home.md](../../../../sources/winstonkoh87__Athena-Public/wiki/Home.md) | retrieval signal |
| retrieval | [wiki/Philosophy.md](../../../../sources/winstonkoh87__Athena-Public/wiki/Philosophy.md) | retrieval signal |
| entrypoints | [src/athena/__main__.py](../../../../sources/winstonkoh87__Athena-Public/src/athena/__main__.py) | entrypoints signal |
| docs | [README.md](../../../../sources/winstonkoh87__Athena-Public/README.md) | docs signal |
| docs | [tools/README.md](../../../../sources/winstonkoh87__Athena-Public/tools/README.md) | docs signal |
| docs | [examples/skills/README.md](../../../../sources/winstonkoh87__Athena-Public/examples/skills/README.md) | docs signal |
| docs | [examples/session_logs/README.md](../../../../sources/winstonkoh87__Athena-Public/examples/session_logs/README.md) | docs signal |
| eval | [tests/test_eval_harness.py](../../../../sources/winstonkoh87__Athena-Public/tests/test_eval_harness.py) | eval signal |
| eval | [tests/test_great_steal.py](../../../../sources/winstonkoh87__Athena-Public/tests/test_great_steal.py) | eval signal |
| eval | [scripts/context_monitor.py](../../../../sources/winstonkoh87__Athena-Public/scripts/context_monitor.py) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/athena/__main__.py](../../../../sources/winstonkoh87__Athena-Public/src/athena/__main__.py) |
| agentRuntime | 121 | [AGENTS.md](../../../../sources/winstonkoh87__Athena-Public/AGENTS.md)<br>[wiki/Workflow-Reference.md](../../../../sources/winstonkoh87__Athena-Public/wiki/Workflow-Reference.md)<br>[tools/exocortex_search.yaml](../../../../sources/winstonkoh87__Athena-Public/tools/exocortex_search.yaml)<br>[tools/README.md](../../../../sources/winstonkoh87__Athena-Public/tools/README.md)<br>[src/athena/tools/__init__.py](../../../../sources/winstonkoh87__Athena-Public/src/athena/tools/__init__.py)<br>[src/athena/tools/agentic_search.py](../../../../sources/winstonkoh87__Athena-Public/src/athena/tools/agentic_search.py)<br>[src/athena/tools/athena_client.py](../../../../sources/winstonkoh87__Athena-Public/src/athena/tools/athena_client.py)<br>[src/athena/tools/athena_tui.py](../../../../sources/winstonkoh87__Athena-Public/src/athena/tools/athena_tui.py) |
| mcp | 4 | [src/athena/mcp_server.py](../../../../sources/winstonkoh87__Athena-Public/src/athena/mcp_server.py)<br>[examples/scripts/run_mcp.py](../../../../sources/winstonkoh87__Athena-Public/examples/scripts/run_mcp.py)<br>[examples/scripts/_archived/run_mcp.py](../../../../sources/winstonkoh87__Athena-Public/examples/scripts/_archived/run_mcp.py)<br>[docs/MCP_SERVER.md](../../../../sources/winstonkoh87__Athena-Public/docs/MCP_SERVER.md) |
| retrieval | 82 | [wiki/FAQ.md](../../../../sources/winstonkoh87__Athena-Public/wiki/FAQ.md)<br>[wiki/Getting-Started.md](../../../../sources/winstonkoh87__Athena-Public/wiki/Getting-Started.md)<br>[wiki/Home.md](../../../../sources/winstonkoh87__Athena-Public/wiki/Home.md)<br>[wiki/Philosophy.md](../../../../sources/winstonkoh87__Athena-Public/wiki/Philosophy.md)<br>[wiki/The-Compounding-Effect.md](../../../../sources/winstonkoh87__Athena-Public/wiki/The-Compounding-Effect.md)<br>[wiki/Use-Cases.md](../../../../sources/winstonkoh87__Athena-Public/wiki/Use-Cases.md)<br>[wiki/Workflow-Reference.md](../../../../sources/winstonkoh87__Athena-Public/wiki/Workflow-Reference.md)<br>[supabase/migrations/007_drop_insights_index.sql](../../../../sources/winstonkoh87__Athena-Public/supabase/migrations/007_drop_insights_index.sql) |
| spec | 46 | [supabase/migrations/010_upgrade_architecture.sql](../../../../sources/winstonkoh87__Athena-Public/supabase/migrations/010_upgrade_architecture.sql)<br>[supabase/migrations/011_fix_architecture_rollback.sql](../../../../sources/winstonkoh87__Athena-Public/supabase/migrations/011_fix_architecture_rollback.sql)<br>[supabase/migrations/012_fix_architecture_no_index.sql](../../../../sources/winstonkoh87__Athena-Public/supabase/migrations/012_fix_architecture_no_index.sql)<br>[examples/workflows/spec.md](../../../../sources/winstonkoh87__Athena-Public/examples/workflows/spec.md)<br>[examples/templates/framework_mirror/v8.2-stable/modules/Design_DNA.md](../../../../sources/winstonkoh87__Athena-Public/examples/templates/framework_mirror/v8.2-stable/modules/Design_DNA.md)<br>[examples/skills/coding/spec-driven-dev/SKILL.md](../../../../sources/winstonkoh87__Athena-Public/examples/skills/coding/spec-driven-dev/SKILL.md)<br>[examples/protocols/meta/MTA-Athena_Spec_Sheet_Post_Facto.md](../../../../sources/winstonkoh87__Athena-Public/examples/protocols/meta/MTA-Athena_Spec_Sheet_Post_Facto.md)<br>[examples/protocols/memory/MEM-114-graph-memory-architecture.md](../../../../sources/winstonkoh87__Athena-Public/examples/protocols/memory/MEM-114-graph-memory-architecture.md) |
| eval | 17 | [tests/test_eval_harness.py](../../../../sources/winstonkoh87__Athena-Public/tests/test_eval_harness.py)<br>[tests/test_great_steal.py](../../../../sources/winstonkoh87__Athena-Public/tests/test_great_steal.py)<br>[scripts/context_monitor.py](../../../../sources/winstonkoh87__Athena-Public/scripts/context_monitor.py)<br>[examples/workflows/spec.md](../../../../sources/winstonkoh87__Athena-Public/examples/workflows/spec.md)<br>[examples/workflows/test.md](../../../../sources/winstonkoh87__Athena-Public/examples/workflows/test.md)<br>[examples/skills/quality/web-launch-gate/SKILL.md](../../../../sources/winstonkoh87__Athena-Public/examples/skills/quality/web-launch-gate/SKILL.md)<br>[examples/skills/quality/red-team-review/SKILL.md](../../../../sources/winstonkoh87__Athena-Public/examples/skills/quality/red-team-review/SKILL.md)<br>[examples/skills/quality/power-inversion/SKILL.md](../../../../sources/winstonkoh87__Athena-Public/examples/skills/quality/power-inversion/SKILL.md) |
| security | 38 | [SECURITY.md](../../../../sources/winstonkoh87__Athena-Public/SECURITY.md)<br>[supabase/migrations/008_security_hardening.sql](../../../../sources/winstonkoh87__Athena-Public/supabase/migrations/008_security_hardening.sql)<br>[src/athena/templates/agents/cos-compliance.md](../../../../sources/winstonkoh87__Athena-Public/src/athena/templates/agents/cos-compliance.md)<br>[src/athena/core/sandbox.py](../../../../sources/winstonkoh87__Athena-Public/src/athena/core/sandbox.py)<br>[src/athena/core/security.py](../../../../sources/winstonkoh87__Athena-Public/src/athena/core/security.py)<br>[src/athena/auditors/audit_antipatterns.py](../../../../sources/winstonkoh87__Athena-Public/src/athena/auditors/audit_antipatterns.py)<br>[src/athena/auditors/audit_graph_coverage.py](../../../../sources/winstonkoh87__Athena-Public/src/athena/auditors/audit_graph_coverage.py)<br>[src/athena/auditors/audit_imports.py](../../../../sources/winstonkoh87__Athena-Public/src/athena/auditors/audit_imports.py) |
| ci | 5 | [.github/workflows/ci.yml](../../../../sources/winstonkoh87__Athena-Public/.github/workflows/ci.yml)<br>[.github/workflows/link-checker.yml](../../../../sources/winstonkoh87__Athena-Public/.github/workflows/link-checker.yml)<br>[.github/workflows/privacy-gate.yml](../../../../sources/winstonkoh87__Athena-Public/.github/workflows/privacy-gate.yml)<br>[.github/workflows/sentinel.yml](../../../../sources/winstonkoh87__Athena-Public/.github/workflows/sentinel.yml)<br>[.github/workflows/waka-readme.yml](../../../../sources/winstonkoh87__Athena-Public/.github/workflows/waka-readme.yml) |
| container | 1 | [Dockerfile.sandbox](../../../../sources/winstonkoh87__Athena-Public/Dockerfile.sandbox) |
| instruction | 1 | [AGENTS.md](../../../../sources/winstonkoh87__Athena-Public/AGENTS.md) |
| docs | 103 | [README.md](../../../../sources/winstonkoh87__Athena-Public/README.md)<br>[tools/README.md](../../../../sources/winstonkoh87__Athena-Public/tools/README.md)<br>[examples/skills/README.md](../../../../sources/winstonkoh87__Athena-Public/examples/skills/README.md)<br>[examples/session_logs/README.md](../../../../sources/winstonkoh87__Athena-Public/examples/session_logs/README.md)<br>[examples/scripts/README.md](../../../../sources/winstonkoh87__Athena-Public/examples/scripts/README.md)<br>[examples/quickstart/README.md](../../../../sources/winstonkoh87__Athena-Public/examples/quickstart/README.md)<br>[examples/protocols/README.md](../../../../sources/winstonkoh87__Athena-Public/examples/protocols/README.md)<br>[examples/hooks/README.md](../../../../sources/winstonkoh87__Athena-Public/examples/hooks/README.md) |
| config | 1 | [pyproject.toml](../../../../sources/winstonkoh87__Athena-Public/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 17 | [tests/test_eval_harness.py](../../../../sources/winstonkoh87__Athena-Public/tests/test_eval_harness.py)<br>[tests/test_great_steal.py](../../../../sources/winstonkoh87__Athena-Public/tests/test_great_steal.py)<br>[scripts/context_monitor.py](../../../../sources/winstonkoh87__Athena-Public/scripts/context_monitor.py)<br>[examples/workflows/spec.md](../../../../sources/winstonkoh87__Athena-Public/examples/workflows/spec.md)<br>[examples/workflows/test.md](../../../../sources/winstonkoh87__Athena-Public/examples/workflows/test.md)<br>[examples/skills/quality/web-launch-gate/SKILL.md](../../../../sources/winstonkoh87__Athena-Public/examples/skills/quality/web-launch-gate/SKILL.md) |
| CI workflows | 5 | [.github/workflows/ci.yml](../../../../sources/winstonkoh87__Athena-Public/.github/workflows/ci.yml)<br>[.github/workflows/link-checker.yml](../../../../sources/winstonkoh87__Athena-Public/.github/workflows/link-checker.yml)<br>[.github/workflows/privacy-gate.yml](../../../../sources/winstonkoh87__Athena-Public/.github/workflows/privacy-gate.yml)<br>[.github/workflows/sentinel.yml](../../../../sources/winstonkoh87__Athena-Public/.github/workflows/sentinel.yml)<br>[.github/workflows/waka-readme.yml](../../../../sources/winstonkoh87__Athena-Public/.github/workflows/waka-readme.yml) |
| Containers / deploy | 1 | [Dockerfile.sandbox](../../../../sources/winstonkoh87__Athena-Public/Dockerfile.sandbox) |
| Security / policy | 38 | [SECURITY.md](../../../../sources/winstonkoh87__Athena-Public/SECURITY.md)<br>[supabase/migrations/008_security_hardening.sql](../../../../sources/winstonkoh87__Athena-Public/supabase/migrations/008_security_hardening.sql)<br>[src/athena/templates/agents/cos-compliance.md](../../../../sources/winstonkoh87__Athena-Public/src/athena/templates/agents/cos-compliance.md)<br>[src/athena/core/sandbox.py](../../../../sources/winstonkoh87__Athena-Public/src/athena/core/sandbox.py)<br>[src/athena/core/security.py](../../../../sources/winstonkoh87__Athena-Public/src/athena/core/security.py)<br>[src/athena/auditors/audit_antipatterns.py](../../../../sources/winstonkoh87__Athena-Public/src/athena/auditors/audit_antipatterns.py) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/winstonkoh87__Athena-Public/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `wiki/FAQ.md`, `wiki/Getting-Started.md`, `wiki/Home.md`.
2. Trace execution through entrypoints: `src/athena/__main__.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `wiki/Workflow-Reference.md`, `tools/exocortex_search.yaml`.
4. Inspect retrieval/memory/indexing through: `wiki/FAQ.md`, `wiki/Getting-Started.md`, `wiki/Home.md`.
5. Verify behavior through test/eval files: `tests/test_eval_harness.py`, `tests/test_great_steal.py`, `scripts/context_monitor.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 The Linux OS for AI Agents — Persistent memory, autonomy, and time awareness for any LLM. Own the state. Rent the intell. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, LICENSE, anthropic이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
