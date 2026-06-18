# Filippo-Venturini/ctxvault Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local memory infrastructure for AI agents. Store knowledge and skills in isolated vaults you compose, control and query.

## 요약

- 조사 단위: `sources/Filippo-Venturini__ctxvault` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 164 files, 48 directories, depth score 113, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/ctxvault/mcp/__init__.py, src/ctxvault/mcp/server.py이고, 의존성 단서는 claude, mcp, fastapi, pydantic, typer, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Filippo-Venturini/ctxvault |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 58 |
| Forks | 9 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Filippo-Venturini__ctxvault](../../../../sources/Filippo-Venturini__ctxvault) |
| Existing report | [reports/global-trending/repositories/Filippo-Venturini__ctxvault.md](../../../global-trending/repositories/Filippo-Venturini__ctxvault.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 164 / 48 |
| Max observed depth | 6 |
| Top directories | .github, assets, benchmarks, docs, examples, src, tests |
| Top extensions | .txt: 51, .py: 50, .md: 21, .svg: 12, .json: 7, .png: 6, (none): 3, .gif: 2, .jpg: 2, .yml: 2, .css: 1, .docx: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 16 |
| examples/05-procedural-memory-agent | examples workspace | 15 |
| examples/01-simple-rag | examples workspace | 11 |
| examples/03-persistent-memory | examples workspace | 7 |
| src | source boundary | 6 |
| tests | validation surface | 5 |
| examples/02-multi-agent-isolation | examples workspace | 3 |
| examples/04-composed-topology | examples workspace | 3 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| benchmarks | validation surface | 1 |
| examples | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | ctxvault | ctxvault |
| utility | pyproject.toml | ctxvault-mcp | ctxvault-mcp |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | claude |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | chroma |
| modelRuntime | transformers |
| webRuntime | fastapi |
| developerSurface | typer |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [src/ctxvault/mcp/__init__.py](../../../../sources/Filippo-Venturini__ctxvault/src/ctxvault/mcp/__init__.py) | mcp signal |
| mcp | [src/ctxvault/mcp/server.py](../../../../sources/Filippo-Venturini__ctxvault/src/ctxvault/mcp/server.py) | mcp signal |
| agentRuntime | [src/ctxvault/core/vaults/skill.py](../../../../sources/Filippo-Venturini__ctxvault/src/ctxvault/core/vaults/skill.py) | agentRuntime signal |
| agentRuntime | [examples/05-procedural-memory-agent/.ctxvault/vaults/comms-skills/skills-index.json](../../../../sources/Filippo-Venturini__ctxvault/examples/05-procedural-memory-agent/.ctxvault/vaults/comms-skills/skills-index.json) | agentRuntime signal |
| config | [pyproject.toml](../../../../sources/Filippo-Venturini__ctxvault/pyproject.toml) | config signal |
| config | [requirements.txt](../../../../sources/Filippo-Venturini__ctxvault/requirements.txt) | config signal |
| config | [uv.lock](../../../../sources/Filippo-Venturini__ctxvault/uv.lock) | config signal |
| config | [examples/05-procedural-memory-agent/requirements.txt](../../../../sources/Filippo-Venturini__ctxvault/examples/05-procedural-memory-agent/requirements.txt) | config signal |
| ci | [.github/workflows/release.yml](../../../../sources/Filippo-Venturini__ctxvault/.github/workflows/release.yml) | ci support |
| ci | [.github/workflows/test.yml](../../../../sources/Filippo-Venturini__ctxvault/.github/workflows/test.yml) | ci support |
| eval | [tests/conftest.py](../../../../sources/Filippo-Venturini__ctxvault/tests/conftest.py) | eval support |
| eval | [tests/test_api.py](../../../../sources/Filippo-Venturini__ctxvault/tests/test_api.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/ctxvault/mcp/server.py](../../../../sources/Filippo-Venturini__ctxvault/src/ctxvault/mcp/server.py) |
| agentRuntime | 2 | [src/ctxvault/core/vaults/skill.py](../../../../sources/Filippo-Venturini__ctxvault/src/ctxvault/core/vaults/skill.py)<br>[examples/05-procedural-memory-agent/.ctxvault/vaults/comms-skills/skills-index.json](../../../../sources/Filippo-Venturini__ctxvault/examples/05-procedural-memory-agent/.ctxvault/vaults/comms-skills/skills-index.json) |
| mcp | 2 | [src/ctxvault/mcp/__init__.py](../../../../sources/Filippo-Venturini__ctxvault/src/ctxvault/mcp/__init__.py)<br>[src/ctxvault/mcp/server.py](../../../../sources/Filippo-Venturini__ctxvault/src/ctxvault/mcp/server.py) |
| retrieval | 38 | [src/ctxvault/core/embedding.py](../../../../sources/Filippo-Venturini__ctxvault/src/ctxvault/core/embedding.py)<br>[examples/05-procedural-memory-agent/app.py](../../../../sources/Filippo-Venturini__ctxvault/examples/05-procedural-memory-agent/app.py)<br>[examples/05-procedural-memory-agent/README.md](../../../../sources/Filippo-Venturini__ctxvault/examples/05-procedural-memory-agent/README.md)<br>[examples/05-procedural-memory-agent/requirements.txt](../../../../sources/Filippo-Venturini__ctxvault/examples/05-procedural-memory-agent/requirements.txt)<br>[examples/05-procedural-memory-agent/.ctxvault/config.json](../../../../sources/Filippo-Venturini__ctxvault/examples/05-procedural-memory-agent/.ctxvault/config.json)<br>[examples/05-procedural-memory-agent/.ctxvault/vaults/company-knowledge/team-metrics.md](../../../../sources/Filippo-Venturini__ctxvault/examples/05-procedural-memory-agent/.ctxvault/vaults/company-knowledge/team-metrics.md)<br>[examples/05-procedural-memory-agent/.ctxvault/vaults/company-knowledge/team-structure.md](../../../../sources/Filippo-Venturini__ctxvault/examples/05-procedural-memory-agent/.ctxvault/vaults/company-knowledge/team-structure.md)<br>[examples/05-procedural-memory-agent/.ctxvault/vaults/company-knowledge/weekly-highlights.md](../../../../sources/Filippo-Venturini__ctxvault/examples/05-procedural-memory-agent/.ctxvault/vaults/company-knowledge/weekly-highlights.md) |
| spec | 9 | [requirements.txt](../../../../sources/Filippo-Venturini__ctxvault/requirements.txt)<br>[examples/05-procedural-memory-agent/requirements.txt](../../../../sources/Filippo-Venturini__ctxvault/examples/05-procedural-memory-agent/requirements.txt)<br>[examples/04-composed-topology/requirements.txt](../../../../sources/Filippo-Venturini__ctxvault/examples/04-composed-topology/requirements.txt)<br>[examples/03-persistent-memory/requirements.txt](../../../../sources/Filippo-Venturini__ctxvault/examples/03-persistent-memory/requirements.txt)<br>[examples/02-multi-agent-isolation/requirements.txt](../../../../sources/Filippo-Venturini__ctxvault/examples/02-multi-agent-isolation/requirements.txt)<br>[examples/01-simple-rag/requirements.txt](../../../../sources/Filippo-Venturini__ctxvault/examples/01-simple-rag/requirements.txt)<br>[benchmarks/retrieval/requirements.txt](../../../../sources/Filippo-Venturini__ctxvault/benchmarks/retrieval/requirements.txt)<br>[benchmarks/dataset/technology/tech_05_agent_memory_architecture.txt](../../../../sources/Filippo-Venturini__ctxvault/benchmarks/dataset/technology/tech_05_agent_memory_architecture.txt) |
| eval | 7 | [tests/conftest.py](../../../../sources/Filippo-Venturini__ctxvault/tests/conftest.py)<br>[tests/test_api.py](../../../../sources/Filippo-Venturini__ctxvault/tests/test_api.py)<br>[tests/test_cli.py](../../../../sources/Filippo-Venturini__ctxvault/tests/test_cli.py)<br>[tests/test_core.py](../../../../sources/Filippo-Venturini__ctxvault/tests/test_core.py)<br>[benchmarks/internal/beir_benchmark.py](../../../../sources/Filippo-Venturini__ctxvault/benchmarks/internal/beir_benchmark.py)<br>[benchmarks/internal/coir_benchmark.py](../../../../sources/Filippo-Venturini__ctxvault/benchmarks/internal/coir_benchmark.py)<br>[.github/workflows/test.yml](../../../../sources/Filippo-Venturini__ctxvault/.github/workflows/test.yml) |
| security | 5 | [benchmarks/dataset/legal/legal_02_access_control_policy.txt](../../../../sources/Filippo-Venturini__ctxvault/benchmarks/dataset/legal/legal_02_access_control_policy.txt)<br>[benchmarks/dataset/legal/legal_05_compliance_documentation.txt](../../../../sources/Filippo-Venturini__ctxvault/benchmarks/dataset/legal/legal_05_compliance_documentation.txt)<br>[benchmarks/dataset/legal/legal_08_internal_audit_trails.txt](../../../../sources/Filippo-Venturini__ctxvault/benchmarks/dataset/legal/legal_08_internal_audit_trails.txt)<br>[benchmarks/dataset/legal/legal_09_policy_exception_management.txt](../../../../sources/Filippo-Venturini__ctxvault/benchmarks/dataset/legal/legal_09_policy_exception_management.txt)<br>[benchmarks/dataset/legal/legal_13_regulatory_compliance_frameworks.txt](../../../../sources/Filippo-Venturini__ctxvault/benchmarks/dataset/legal/legal_13_regulatory_compliance_frameworks.txt) |
| ci | 2 | [.github/workflows/release.yml](../../../../sources/Filippo-Venturini__ctxvault/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/Filippo-Venturini__ctxvault/.github/workflows/test.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 20 | [README.md](../../../../sources/Filippo-Venturini__ctxvault/README.md)<br>[examples/05-procedural-memory-agent/README.md](../../../../sources/Filippo-Venturini__ctxvault/examples/05-procedural-memory-agent/README.md)<br>[examples/04-composed-topology/README.md](../../../../sources/Filippo-Venturini__ctxvault/examples/04-composed-topology/README.md)<br>[examples/03-persistent-memory/README.md](../../../../sources/Filippo-Venturini__ctxvault/examples/03-persistent-memory/README.md)<br>[examples/02-multi-agent-isolation/README.md](../../../../sources/Filippo-Venturini__ctxvault/examples/02-multi-agent-isolation/README.md)<br>[examples/01-simple-rag/README.md](../../../../sources/Filippo-Venturini__ctxvault/examples/01-simple-rag/README.md)<br>[docs/index.html](../../../../sources/Filippo-Venturini__ctxvault/docs/index.html)<br>[docs/script.js](../../../../sources/Filippo-Venturini__ctxvault/docs/script.js) |
| config | 9 | [pyproject.toml](../../../../sources/Filippo-Venturini__ctxvault/pyproject.toml)<br>[requirements.txt](../../../../sources/Filippo-Venturini__ctxvault/requirements.txt)<br>[uv.lock](../../../../sources/Filippo-Venturini__ctxvault/uv.lock)<br>[examples/05-procedural-memory-agent/requirements.txt](../../../../sources/Filippo-Venturini__ctxvault/examples/05-procedural-memory-agent/requirements.txt)<br>[examples/04-composed-topology/requirements.txt](../../../../sources/Filippo-Venturini__ctxvault/examples/04-composed-topology/requirements.txt)<br>[examples/03-persistent-memory/requirements.txt](../../../../sources/Filippo-Venturini__ctxvault/examples/03-persistent-memory/requirements.txt)<br>[examples/02-multi-agent-isolation/requirements.txt](../../../../sources/Filippo-Venturini__ctxvault/examples/02-multi-agent-isolation/requirements.txt)<br>[examples/01-simple-rag/requirements.txt](../../../../sources/Filippo-Venturini__ctxvault/examples/01-simple-rag/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 7 | [tests/conftest.py](../../../../sources/Filippo-Venturini__ctxvault/tests/conftest.py)<br>[tests/test_api.py](../../../../sources/Filippo-Venturini__ctxvault/tests/test_api.py)<br>[tests/test_cli.py](../../../../sources/Filippo-Venturini__ctxvault/tests/test_cli.py)<br>[tests/test_core.py](../../../../sources/Filippo-Venturini__ctxvault/tests/test_core.py)<br>[benchmarks/internal/beir_benchmark.py](../../../../sources/Filippo-Venturini__ctxvault/benchmarks/internal/beir_benchmark.py)<br>[benchmarks/internal/coir_benchmark.py](../../../../sources/Filippo-Venturini__ctxvault/benchmarks/internal/coir_benchmark.py) |
| CI workflows | 2 | [.github/workflows/release.yml](../../../../sources/Filippo-Venturini__ctxvault/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/Filippo-Venturini__ctxvault/.github/workflows/test.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 5 | [benchmarks/dataset/legal/legal_02_access_control_policy.txt](../../../../sources/Filippo-Venturini__ctxvault/benchmarks/dataset/legal/legal_02_access_control_policy.txt)<br>[benchmarks/dataset/legal/legal_05_compliance_documentation.txt](../../../../sources/Filippo-Venturini__ctxvault/benchmarks/dataset/legal/legal_05_compliance_documentation.txt)<br>[benchmarks/dataset/legal/legal_08_internal_audit_trails.txt](../../../../sources/Filippo-Venturini__ctxvault/benchmarks/dataset/legal/legal_08_internal_audit_trails.txt)<br>[benchmarks/dataset/legal/legal_09_policy_exception_management.txt](../../../../sources/Filippo-Venturini__ctxvault/benchmarks/dataset/legal/legal_09_policy_exception_management.txt)<br>[benchmarks/dataset/legal/legal_13_regulatory_compliance_frameworks.txt](../../../../sources/Filippo-Venturini__ctxvault/benchmarks/dataset/legal/legal_13_regulatory_compliance_frameworks.txt) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/ctxvault/mcp/__init__.py`, `src/ctxvault/mcp/server.py`, `src/ctxvault/core/vaults/skill.py`.
2. Trace execution through entrypoints: `src/ctxvault/mcp/server.py`.
3. Map agent/tool runtime through: `src/ctxvault/core/vaults/skill.py`, `examples/05-procedural-memory-agent/.ctxvault/vaults/comms-skills/skills-index.json`.
4. Inspect retrieval/memory/indexing through: `src/ctxvault/core/embedding.py`, `examples/05-procedural-memory-agent/app.py`, `examples/05-procedural-memory-agent/README.md`.
5. Verify behavior through test/eval files: `tests/conftest.py`, `tests/test_api.py`, `tests/test_cli.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local memory infrastructure for AI agents. Store knowledge and skills in isolated vaults you compose, control and query.. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, README.md, LICENSE, mcp이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
