# sillok-os/sillok Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Productized LLM Wiki pattern + typed pack registry + proposal-only governance — UNESCO Memory of the World Triple Anchor

## 요약

- 조사 단위: `sources/sillok-os__sillok` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 161 files, 66 directories, depth score 113, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp_server/README.md, examples/claude-code-mcp-config.json, examples/cursor-mcp-config.json이고, 의존성 단서는 mcp, pydantic, click, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | sillok-os/sillok |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/sillok-os__sillok](../../../../sources/sillok-os__sillok) |
| Existing report | [reports/korea-trending/repositories/sillok-os__sillok.md](../../../korea-trending/repositories/sillok-os__sillok.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 161 / 66 |
| Max observed depth | 4 |
| Top directories | .github, adr, benchmark, docs, examples, integrations, mcp_server, packs, proposals, scripts, sillok, tests |
| Top extensions | .md: 71, .py: 69, .yml: 6, (none): 4, .json: 3, .yaml: 3, .jsonl: 2, .cff: 1, .sh: 1, .toml: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 32 |
| tests | validation surface | 30 |
| examples/starter-projects | examples workspace | 3 |
| .github | ci surface | 1 |
| adr | top-level component | 1 |
| benchmark | validation surface | 1 |
| examples | top-level component | 1 |
| examples/claude-code-mcp-config.json | examples workspace | 1 |
| examples/cursor-mcp-config.json | examples workspace | 1 |
| integrations | top-level component | 1 |
| mcp_server | source boundary | 1 |
| packs | top-level component | 1 |
| proposals | top-level component | 1 |
| scripts | top-level component | 1 |
| sillok | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | sillok | sillok |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | click |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [mcp_server/README.md](../../../../sources/sillok-os__sillok/mcp_server/README.md) | mcp signal |
| mcp | [examples/claude-code-mcp-config.json](../../../../sources/sillok-os__sillok/examples/claude-code-mcp-config.json) | mcp signal |
| mcp | [examples/cursor-mcp-config.json](../../../../sources/sillok-os__sillok/examples/cursor-mcp-config.json) | mcp signal |
| mcp | [docs/integrations/mcp-quickstart.md](../../../../sources/sillok-os__sillok/docs/integrations/mcp-quickstart.md) | mcp signal |
| agentRuntime | [sillok/tongsa/tools.py](../../../../sources/sillok-os__sillok/sillok/tongsa/tools.py) | agentRuntime signal |
| agentRuntime | [sillok/schemas/skills_v09.py](../../../../sources/sillok-os__sillok/sillok/schemas/skills_v09.py) | agentRuntime signal |
| agentRuntime | [sillok/eval/runner.py](../../../../sources/sillok-os__sillok/sillok/eval/runner.py) | agentRuntime signal |
| agentRuntime | [packs/methodology/agent-1on1.md](../../../../sources/sillok-os__sillok/packs/methodology/agent-1on1.md) | agentRuntime signal |
| entrypoints | [sillok/tongsa/__main__.py](../../../../sources/sillok-os__sillok/sillok/tongsa/__main__.py) | entrypoints signal |
| entrypoints | [sillok/tongsa/server.py](../../../../sources/sillok-os__sillok/sillok/tongsa/server.py) | entrypoints signal |
| entrypoints | [sillok/schemas/__main__.py](../../../../sources/sillok-os__sillok/sillok/schemas/__main__.py) | entrypoints signal |
| entrypoints | [sillok/sangso/__main__.py](../../../../sources/sillok-os__sillok/sillok/sangso/__main__.py) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 5 | [sillok/tongsa/__main__.py](../../../../sources/sillok-os__sillok/sillok/tongsa/__main__.py)<br>[sillok/tongsa/server.py](../../../../sources/sillok-os__sillok/sillok/tongsa/server.py)<br>[sillok/schemas/__main__.py](../../../../sources/sillok-os__sillok/sillok/schemas/__main__.py)<br>[sillok/sangso/__main__.py](../../../../sources/sillok-os__sillok/sillok/sangso/__main__.py)<br>[sillok/eval/__main__.py](../../../../sources/sillok-os__sillok/sillok/eval/__main__.py) |
| agentRuntime | 5 | [sillok/tongsa/tools.py](../../../../sources/sillok-os__sillok/sillok/tongsa/tools.py)<br>[sillok/schemas/skills_v09.py](../../../../sources/sillok-os__sillok/sillok/schemas/skills_v09.py)<br>[sillok/eval/runner.py](../../../../sources/sillok-os__sillok/sillok/eval/runner.py)<br>[packs/methodology/agent-1on1.md](../../../../sources/sillok-os__sillok/packs/methodology/agent-1on1.md)<br>[packs/consulting/tool-adoption-consulting.md](../../../../sources/sillok-os__sillok/packs/consulting/tool-adoption-consulting.md) |
| mcp | 4 | [mcp_server/README.md](../../../../sources/sillok-os__sillok/mcp_server/README.md)<br>[examples/claude-code-mcp-config.json](../../../../sources/sillok-os__sillok/examples/claude-code-mcp-config.json)<br>[examples/cursor-mcp-config.json](../../../../sources/sillok-os__sillok/examples/cursor-mcp-config.json)<br>[docs/integrations/mcp-quickstart.md](../../../../sources/sillok-os__sillok/docs/integrations/mcp-quickstart.md) |
| retrieval | 9 | [sillok/pyeonchan/ingest_md.py](../../../../sources/sillok-os__sillok/sillok/pyeonchan/ingest_md.py)<br>[integrations/llm-wiki/README.md](../../../../sources/sillok-os__sillok/integrations/llm-wiki/README.md)<br>[docs/index.md](../../../../sources/sillok-os__sillok/docs/index.md)<br>[docs/tutorials/index.md](../../../../sources/sillok-os__sillok/docs/tutorials/index.md)<br>[docs/recipes/index.md](../../../../sources/sillok-os__sillok/docs/recipes/index.md)<br>[docs/modules/index.md](../../../../sources/sillok-os__sillok/docs/modules/index.md)<br>[docs/governance/index.md](../../../../sources/sillok-os__sillok/docs/governance/index.md)<br>[docs/benchmarks/index.md](../../../../sources/sillok-os__sillok/docs/benchmarks/index.md) |
| spec | 7 | [packs/output-styles/infographic-design.md](../../../../sources/sillok-os__sillok/packs/output-styles/infographic-design.md)<br>[docs/architecture/coverage-vs-aipm-vault.md](../../../../sources/sillok-os__sillok/docs/architecture/coverage-vs-aipm-vault.md)<br>[docs/architecture/framework-coverage.md](../../../../sources/sillok-os__sillok/docs/architecture/framework-coverage.md)<br>[docs/architecture/frontmatter-compatibility.md](../../../../sources/sillok-os__sillok/docs/architecture/frontmatter-compatibility.md)<br>[docs/architecture/proposal-only-governance.md](../../../../sources/sillok-os__sillok/docs/architecture/proposal-only-governance.md)<br>[docs/architecture/README.md](../../../../sources/sillok-os__sillok/docs/architecture/README.md)<br>[adr/0001-initial-architecture-decisions.md](../../../../sources/sillok-os__sillok/adr/0001-initial-architecture-decisions.md) |
| eval | 39 | [tests/unit/test_pyeonchan_smoke.py](../../../../sources/sillok-os__sillok/tests/unit/test_pyeonchan_smoke.py)<br>[tests/unit/yeonryun/test_coverage.py](../../../../sources/sillok-os__sillok/tests/unit/yeonryun/test_coverage.py)<br>[tests/unit/yeonryun/test_disposition_smoke.py](../../../../sources/sillok-os__sillok/tests/unit/yeonryun/test_disposition_smoke.py)<br>[tests/unit/yeonryun/test_optimizer.py](../../../../sources/sillok-os__sillok/tests/unit/yeonryun/test_optimizer.py)<br>[tests/unit/tongsa/test_tools.py](../../../../sources/sillok-os__sillok/tests/unit/tongsa/test_tools.py)<br>[tests/unit/telemetry/test_telemetry_gate.py](../../../../sources/sillok-os__sillok/tests/unit/telemetry/test_telemetry_gate.py)<br>[tests/unit/telemetry/test_telemetry_smoke.py](../../../../sources/sillok-os__sillok/tests/unit/telemetry/test_telemetry_smoke.py)<br>[tests/unit/schemas/test_schemas_smoke.py](../../../../sources/sillok-os__sillok/tests/unit/schemas/test_schemas_smoke.py) |
| security | 7 | [SECURITY.md](../../../../sources/sillok-os__sillok/SECURITY.md)<br>[packs/consulting/consulting-ai-engineering-audit.md](../../../../sources/sillok-os__sillok/packs/consulting/consulting-ai-engineering-audit.md)<br>[packs/consulting/consulting-growth-audit.md](../../../../sources/sillok-os__sillok/packs/consulting/consulting-growth-audit.md)<br>[packs/consulting/consulting-saas-audit.md](../../../../sources/sillok-os__sillok/packs/consulting/consulting-saas-audit.md)<br>[packs/consulting/consulting-security-audit.md](../../../../sources/sillok-os__sillok/packs/consulting/consulting-security-audit.md)<br>[packs/consulting/consulting-strategy-audit.md](../../../../sources/sillok-os__sillok/packs/consulting/consulting-strategy-audit.md)<br>[packs/consulting/consulting-uxui-audit.md](../../../../sources/sillok-os__sillok/packs/consulting/consulting-uxui-audit.md) |
| ci | 5 | [.github/workflows/ci.yml](../../../../sources/sillok-os__sillok/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/sillok-os__sillok/.github/workflows/docs.yml)<br>[.github/workflows/eval.yml](../../../../sources/sillok-os__sillok/.github/workflows/eval.yml)<br>[.github/workflows/publish.yml](../../../../sources/sillok-os__sillok/.github/workflows/publish.yml)<br>[.github/workflows/status-drift.yml](../../../../sources/sillok-os__sillok/.github/workflows/status-drift.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 37 | [mkdocs.yml](../../../../sources/sillok-os__sillok/mkdocs.yml)<br>[README.ko.md](../../../../sources/sillok-os__sillok/README.ko.md)<br>[README.md](../../../../sources/sillok-os__sillok/README.md)<br>[tests/fixtures/README.md](../../../../sources/sillok-os__sillok/tests/fixtures/README.md)<br>[sillok/schemas/README.md](../../../../sources/sillok-os__sillok/sillok/schemas/README.md)<br>[sillok/sangso/README.md](../../../../sources/sillok-os__sillok/sillok/sangso/README.md)<br>[sillok/naru/README.md](../../../../sources/sillok-os__sillok/sillok/naru/README.md)<br>[sillok/jikji/README.md](../../../../sources/sillok-os__sillok/sillok/jikji/README.md) |
| config | 1 | [pyproject.toml](../../../../sources/sillok-os__sillok/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 39 | [tests/unit/test_pyeonchan_smoke.py](../../../../sources/sillok-os__sillok/tests/unit/test_pyeonchan_smoke.py)<br>[tests/unit/yeonryun/test_coverage.py](../../../../sources/sillok-os__sillok/tests/unit/yeonryun/test_coverage.py)<br>[tests/unit/yeonryun/test_disposition_smoke.py](../../../../sources/sillok-os__sillok/tests/unit/yeonryun/test_disposition_smoke.py)<br>[tests/unit/yeonryun/test_optimizer.py](../../../../sources/sillok-os__sillok/tests/unit/yeonryun/test_optimizer.py)<br>[tests/unit/tongsa/test_tools.py](../../../../sources/sillok-os__sillok/tests/unit/tongsa/test_tools.py)<br>[tests/unit/telemetry/test_telemetry_gate.py](../../../../sources/sillok-os__sillok/tests/unit/telemetry/test_telemetry_gate.py) |
| CI workflows | 5 | [.github/workflows/ci.yml](../../../../sources/sillok-os__sillok/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/sillok-os__sillok/.github/workflows/docs.yml)<br>[.github/workflows/eval.yml](../../../../sources/sillok-os__sillok/.github/workflows/eval.yml)<br>[.github/workflows/publish.yml](../../../../sources/sillok-os__sillok/.github/workflows/publish.yml)<br>[.github/workflows/status-drift.yml](../../../../sources/sillok-os__sillok/.github/workflows/status-drift.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 7 | [SECURITY.md](../../../../sources/sillok-os__sillok/SECURITY.md)<br>[packs/consulting/consulting-ai-engineering-audit.md](../../../../sources/sillok-os__sillok/packs/consulting/consulting-ai-engineering-audit.md)<br>[packs/consulting/consulting-growth-audit.md](../../../../sources/sillok-os__sillok/packs/consulting/consulting-growth-audit.md)<br>[packs/consulting/consulting-saas-audit.md](../../../../sources/sillok-os__sillok/packs/consulting/consulting-saas-audit.md)<br>[packs/consulting/consulting-security-audit.md](../../../../sources/sillok-os__sillok/packs/consulting/consulting-security-audit.md)<br>[packs/consulting/consulting-strategy-audit.md](../../../../sources/sillok-os__sillok/packs/consulting/consulting-strategy-audit.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `mcp_server/README.md`, `examples/claude-code-mcp-config.json`, `examples/cursor-mcp-config.json`.
2. Trace execution through entrypoints: `sillok/tongsa/__main__.py`, `sillok/tongsa/server.py`, `sillok/schemas/__main__.py`.
3. Map agent/tool runtime through: `sillok/tongsa/tools.py`, `sillok/schemas/skills_v09.py`, `sillok/eval/runner.py`.
4. Inspect retrieval/memory/indexing through: `sillok/pyeonchan/ingest_md.py`, `integrations/llm-wiki/README.md`, `docs/index.md`.
5. Verify behavior through test/eval files: `tests/unit/test_pyeonchan_smoke.py`, `tests/unit/yeonryun/test_coverage.py`, `tests/unit/yeonryun/test_disposition_smoke.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Productized LLM Wiki pattern + typed pack registry + proposal only governance — UNESCO Memory of the World Triple Anchor. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, mcp, pydantic이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
