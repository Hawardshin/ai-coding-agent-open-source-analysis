# JAE-HUN-CHO/law-api-mcp-korea Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

MCP server for the Korean Ministry of Government Legislation (MOLEG) APIs, providing structured access to Korean laws, regulations, and legal documents for AI agents.

## 요약

- 조사 단위: `sources/JAE-HUN-CHO__law-api-mcp-korea` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 630 files, 205 directories, depth score 112, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=law_openapi_mcp_evaluation.xml, tests/test_e2e_generated_mcp.py, tests/test_e2e_mcp.py이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | JAE-HUN-CHO/law-api-mcp-korea |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/JAE-HUN-CHO__law-api-mcp-korea](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea) |
| Existing report | [reports/korea-trending/repositories/JAE-HUN-CHO__law-api-mcp-korea.md](../../../korea-trending/repositories/JAE-HUN-CHO__law-api-mcp-korea.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 630 / 205 |
| Max observed depth | 5 |
| Top directories | api, reports, src, tests, tools |
| Top extensions | .md: 389, .json: 198, .py: 36, (none): 2, .csv: 1, .lock: 1, .toml: 1, .typed: 1, .xml: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 40 |
| api | source boundary | 39 |
| tests | validation surface | 20 |
| reports | top-level component | 1 |
| tools | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | law-openapi-cli | law-openapi-cli |
| utility | pyproject.toml | law-openapi-mcp | law-openapi-mcp |


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
| mcp | [law_openapi_mcp_evaluation.xml](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/law_openapi_mcp_evaluation.xml) | mcp signal |
| mcp | [tests/test_e2e_generated_mcp.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/tests/test_e2e_generated_mcp.py) | mcp signal |
| mcp | [tests/test_e2e_mcp.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/tests/test_e2e_mcp.py) | mcp signal |
| mcp | [tests/test_mcp_server_improvements.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/tests/test_mcp_server_improvements.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tools/apply_live_contract_doc_updates.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/tools/apply_live_contract_doc_updates.py) | agentRuntime signal |
| agentRuntime | [tools/audit_official_guides.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/tools/audit_official_guides.py) | agentRuntime signal |
| agentRuntime | [tools/sync_api_docs.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/tools/sync_api_docs.py) | agentRuntime signal |
| entrypoints | [src/law_api_mcp_korea/__main__.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/src/law_api_mcp_korea/__main__.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/uv.lock) | config signal |
| eval | [tests/test_aliases.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/tests/test_aliases.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/law_api_mcp_korea/__main__.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/src/law_api_mcp_korea/__main__.py) |
| agentRuntime | 7 | [AGENTS.md](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/AGENTS.md)<br>[tools/apply_live_contract_doc_updates.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/tools/apply_live_contract_doc_updates.py)<br>[tools/audit_official_guides.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/tools/audit_official_guides.py)<br>[tools/sync_api_docs.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/tools/sync_api_docs.py)<br>[tools/sync_official_guides.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/tools/sync_official_guides.py)<br>[tools/sync_source_docs_from_official.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/tools/sync_source_docs_from_official.py)<br>[tools/validate_live_api_contracts.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/tools/validate_live_api_contracts.py) |
| mcp | 409 | [law_openapi_mcp_evaluation.xml](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/law_openapi_mcp_evaluation.xml)<br>[tests/test_e2e_generated_mcp.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/tests/test_e2e_generated_mcp.py)<br>[tests/test_e2e_mcp.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/tests/test_e2e_mcp.py)<br>[tests/test_mcp_server_improvements.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/tests/test_mcp_server_improvements.py)<br>[src/law_api_mcp_korea/__init__.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/src/law_api_mcp_korea/__init__.py)<br>[src/law_api_mcp_korea/__main__.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/src/law_api_mcp_korea/__main__.py)<br>[src/law_api_mcp_korea/aliases.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/src/law_api_mcp_korea/aliases.py)<br>[src/law_api_mcp_korea/catalog.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/src/law_api_mcp_korea/catalog.py) |
| retrieval | 1 | [src/law_api_mcp_korea/api_docs/catalog_index.json](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/src/law_api_mcp_korea/api_docs/catalog_index.json) |
| spec | 0 | not obvious |
| eval | 17 | [law_openapi_mcp_evaluation.xml](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/law_openapi_mcp_evaluation.xml)<br>[tests/test_aliases.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/tests/test_aliases.py)<br>[tests/test_catalog.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/tests/test_catalog.py)<br>[tests/test_citations.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/tests/test_citations.py)<br>[tests/test_client.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/tests/test_client.py)<br>[tests/test_decisions.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/tests/test_decisions.py)<br>[tests/test_e2e_cli.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/tests/test_e2e_cli.py)<br>[tests/test_e2e_generated_cli.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/tests/test_e2e_generated_cli.py) |
| security | 1 | [tools/audit_official_guides.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/tools/audit_official_guides.py) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 1 | [AGENTS.md](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/AGENTS.md) |
| docs | 194 | [README.md](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/README.md)<br>[src/law_api_mcp_korea/api_docs/README.md](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/src/law_api_mcp_korea/api_docs/README.md)<br>[api/docs/README.md](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/api/docs/README.md)<br>[api/docs/현행법령/시행일/목록_조회.md](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/api/docs/현행법령/시행일/목록_조회.md)<br>[api/docs/현행법령/시행일/본문_조항호목_조회.md](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/api/docs/현행법령/시행일/본문_조항호목_조회.md)<br>[api/docs/현행법령/시행일/본문_조회.md](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/api/docs/현행법령/시행일/본문_조회.md)<br>[api/docs/현행법령/공포일/목록_조회.md](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/api/docs/현행법령/공포일/목록_조회.md)<br>[api/docs/현행법령/공포일/본문_조항호목_조회.md](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/api/docs/현행법령/공포일/본문_조항호목_조회.md) |
| config | 2 | [pyproject.toml](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/pyproject.toml)<br>[uv.lock](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 17 | [law_openapi_mcp_evaluation.xml](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/law_openapi_mcp_evaluation.xml)<br>[tests/test_aliases.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/tests/test_aliases.py)<br>[tests/test_catalog.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/tests/test_catalog.py)<br>[tests/test_citations.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/tests/test_citations.py)<br>[tests/test_client.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/tests/test_client.py)<br>[tests/test_decisions.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/tests/test_decisions.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [tools/audit_official_guides.py](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/tools/audit_official_guides.py) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/JAE-HUN-CHO__law-api-mcp-korea/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `law_openapi_mcp_evaluation.xml`, `tests/test_e2e_generated_mcp.py`, `tests/test_e2e_mcp.py`.
2. Trace execution through entrypoints: `src/law_api_mcp_korea/__main__.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `tools/apply_live_contract_doc_updates.py`, `tools/audit_official_guides.py`.
4. Inspect retrieval/memory/indexing through: `src/law_api_mcp_korea/api_docs/catalog_index.json`.
5. Verify behavior through test/eval files: `law_openapi_mcp_evaluation.xml`, `tests/test_aliases.py`, `tests/test_catalog.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 MCP server for the Korean Ministry of Government Legislation MOLEG APIs, providing structured access to Korean laws, reg. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, LICENSE, mcp이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
