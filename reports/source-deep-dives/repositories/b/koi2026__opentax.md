# koi2026/opentax Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

2026 KOI Hackathon | Team Raw Agent | Korean Capital Gains Tax Agent

## 요약

- 조사 단위: `sources/koi2026__opentax` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 206 files, 44 directories, depth score 125, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test_mcp_refactor_boundaries.py, src/retrieval/mcp_retriever.py, src/mcp/__init__.py이고, 의존성 단서는 openai, anthropic, mcp, langgraph, fastapi, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | koi2026/opentax |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/koi2026__opentax](../../../../sources/koi2026__opentax) |
| Existing report | [reports/korea-trending/repositories/koi2026__opentax.md](../../../korea-trending/repositories/koi2026__opentax.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 206 / 44 |
| Max observed depth | 4 |
| Top directories | .github, .omc, .streamlit, data, notebooks, scripts, src, tests |
| Top extensions | .py: 116, .md: 48, .json: 14, .js: 7, (none): 7, .yml: 3, .jsonl: 2, .ps1: 2, .example: 1, .ini: 1, .ipynb: 1, .pdf: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 34 |
| tests | validation surface | 18 |
| .github | ci surface | 1 |
| data | top-level component | 1 |
| notebooks | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | langgraph |
| vectorStores | none |
| modelRuntime | transformers |
| webRuntime | fastapi |
| developerSurface | none |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [tests/test_mcp_refactor_boundaries.py](../../../../sources/koi2026__opentax/tests/test_mcp_refactor_boundaries.py) | mcp signal |
| mcp | [src/retrieval/mcp_retriever.py](../../../../sources/koi2026__opentax/src/retrieval/mcp_retriever.py) | mcp signal |
| mcp | [src/mcp/__init__.py](../../../../sources/koi2026__opentax/src/mcp/__init__.py) | mcp signal |
| mcp | [src/mcp/server.py](../../../../sources/koi2026__opentax/src/mcp/server.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/koi2026__opentax/AGENTS.md) | agentRuntime signal |
| agentRuntime | [src/mcp/tools/__init__.py](../../../../sources/koi2026__opentax/src/mcp/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [src/mcp/tools/retrieval.py](../../../../sources/koi2026__opentax/src/mcp/tools/retrieval.py) | agentRuntime signal |
| agentRuntime | [src/agents/__init__.py](../../../../sources/koi2026__opentax/src/agents/__init__.py) | agentRuntime signal |
| entrypoints | [src/api/main.py](../../../../sources/koi2026__opentax/src/api/main.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/koi2026__opentax/CLAUDE.md) | instruction signal |
| config | [package.json](../../../../sources/koi2026__opentax/package.json) | config signal |
| config | [requirements.txt](../../../../sources/koi2026__opentax/requirements.txt) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [src/mcp/server.py](../../../../sources/koi2026__opentax/src/mcp/server.py)<br>[src/api/main.py](../../../../sources/koi2026__opentax/src/api/main.py) |
| agentRuntime | 5 | [AGENTS.md](../../../../sources/koi2026__opentax/AGENTS.md)<br>[src/mcp/tools/__init__.py](../../../../sources/koi2026__opentax/src/mcp/tools/__init__.py)<br>[src/mcp/tools/retrieval.py](../../../../sources/koi2026__opentax/src/mcp/tools/retrieval.py)<br>[src/agents/__init__.py](../../../../sources/koi2026__opentax/src/agents/__init__.py)<br>[src/agents/prompts.py](../../../../sources/koi2026__opentax/src/agents/prompts.py) |
| mcp | 6 | [tests/test_mcp_refactor_boundaries.py](../../../../sources/koi2026__opentax/tests/test_mcp_refactor_boundaries.py)<br>[src/retrieval/mcp_retriever.py](../../../../sources/koi2026__opentax/src/retrieval/mcp_retriever.py)<br>[src/mcp/__init__.py](../../../../sources/koi2026__opentax/src/mcp/__init__.py)<br>[src/mcp/server.py](../../../../sources/koi2026__opentax/src/mcp/server.py)<br>[src/mcp/tools/__init__.py](../../../../sources/koi2026__opentax/src/mcp/tools/__init__.py)<br>[src/mcp/tools/retrieval.py](../../../../sources/koi2026__opentax/src/mcp/tools/retrieval.py) |
| retrieval | 43 | [tests/rag_golden_cases.py](../../../../sources/koi2026__opentax/tests/rag_golden_cases.py)<br>[tests/test_rag.py](../../../../sources/koi2026__opentax/tests/test_rag.py)<br>[src/retrieval/__init__.py](../../../../sources/koi2026__opentax/src/retrieval/__init__.py)<br>[src/retrieval/llm_fn.py](../../../../sources/koi2026__opentax/src/retrieval/llm_fn.py)<br>[src/retrieval/mcp_retriever.py](../../../../sources/koi2026__opentax/src/retrieval/mcp_retriever.py)<br>[src/retrieval/multi_agent_reasoner.py](../../../../sources/koi2026__opentax/src/retrieval/multi_agent_reasoner.py)<br>[src/retrieval/retriever_impl.py](../../../../sources/koi2026__opentax/src/retrieval/retriever_impl.py)<br>[src/retrieval/tax_law_search.py](../../../../sources/koi2026__opentax/src/retrieval/tax_law_search.py) |
| spec | 21 | [requirements.txt](../../../../sources/koi2026__opentax/requirements.txt)<br>[.omc/artifacts/ask/codex-analyze-this-korean-tax-rag-system-prd-for-a-4-week-hackatho-2026-05-11T07-16-53-867Z.md](../../../../sources/koi2026__opentax/.omc/artifacts/ask/codex-analyze-this-korean-tax-rag-system-prd-for-a-4-week-hackatho-2026-05-11T07-16-53-867Z.md)<br>[.omc/artifacts/ask/codex-analyze-this-korean-tax-rag-system-prd-for-a-4-week-hackatho-2026-05-11T07-27-31-551Z.md](../../../../sources/koi2026__opentax/.omc/artifacts/ask/codex-analyze-this-korean-tax-rag-system-prd-for-a-4-week-hackatho-2026-05-11T07-27-31-551Z.md)<br>[.omc/artifacts/ask/codex-analyze-this-korean-tax-rag-system-prd-for-a-4-week-hackatho-2026-05-11T07-30-22-834Z.md](../../../../sources/koi2026__opentax/.omc/artifacts/ask/codex-analyze-this-korean-tax-rag-system-prd-for-a-4-week-hackatho-2026-05-11T07-30-22-834Z.md)<br>[.omc/artifacts/ask/codex-analyze-this-korean-tax-rag-system-prd-for-a-4-week-hackatho-2026-05-11T07-32-33-163Z.md](../../../../sources/koi2026__opentax/.omc/artifacts/ask/codex-analyze-this-korean-tax-rag-system-prd-for-a-4-week-hackatho-2026-05-11T07-32-33-163Z.md)<br>[.omc/artifacts/ask/codex-analyze-this-korean-tax-rag-system-prd-for-a-4-week-hackatho-2026-05-11T07-33-38-557Z.md](../../../../sources/koi2026__opentax/.omc/artifacts/ask/codex-analyze-this-korean-tax-rag-system-prd-for-a-4-week-hackatho-2026-05-11T07-33-38-557Z.md)<br>[.omc/artifacts/ask/codex-analyze-this-korean-tax-rag-system-prd-for-a-4-week-hackatho-2026-05-11T07-58-33-985Z.md](../../../../sources/koi2026__opentax/.omc/artifacts/ask/codex-analyze-this-korean-tax-rag-system-prd-for-a-4-week-hackatho-2026-05-11T07-58-33-985Z.md)<br>[.omc/artifacts/ask/codex-analyze-this-korean-tax-rag-system-prd-for-a-4-week-hackatho-2026-05-11T08-00-21-965Z.md](../../../../sources/koi2026__opentax/.omc/artifacts/ask/codex-analyze-this-korean-tax-rag-system-prd-for-a-4-week-hackatho-2026-05-11T08-00-21-965Z.md) |
| eval | 31 | [tests/__init__.py](../../../../sources/koi2026__opentax/tests/__init__.py)<br>[tests/golden_case_legal_deps.py](../../../../sources/koi2026__opentax/tests/golden_case_legal_deps.py)<br>[tests/rag_golden_cases.py](../../../../sources/koi2026__opentax/tests/rag_golden_cases.py)<br>[tests/test_admin_jobs.py](../../../../sources/koi2026__opentax/tests/test_admin_jobs.py)<br>[tests/test_auto_update_registry.py](../../../../sources/koi2026__opentax/tests/test_auto_update_registry.py)<br>[tests/test_chunking.py](../../../../sources/koi2026__opentax/tests/test_chunking.py)<br>[tests/test_e2e_golden.py](../../../../sources/koi2026__opentax/tests/test_e2e_golden.py)<br>[tests/test_mcp_refactor_boundaries.py](../../../../sources/koi2026__opentax/tests/test_mcp_refactor_boundaries.py) |
| security | 1 | [SECURITY.md](../../../../sources/koi2026__opentax/SECURITY.md) |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/koi2026__opentax/.github/workflows/ci.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/koi2026__opentax/docker-compose.yml)<br>[Dockerfile](../../../../sources/koi2026__opentax/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/koi2026__opentax/AGENTS.md)<br>[CLAUDE.md](../../../../sources/koi2026__opentax/CLAUDE.md) |
| docs | 2 | [README.en.md](../../../../sources/koi2026__opentax/README.en.md)<br>[README.md](../../../../sources/koi2026__opentax/README.md) |
| config | 2 | [package.json](../../../../sources/koi2026__opentax/package.json)<br>[requirements.txt](../../../../sources/koi2026__opentax/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 31 | [tests/__init__.py](../../../../sources/koi2026__opentax/tests/__init__.py)<br>[tests/golden_case_legal_deps.py](../../../../sources/koi2026__opentax/tests/golden_case_legal_deps.py)<br>[tests/rag_golden_cases.py](../../../../sources/koi2026__opentax/tests/rag_golden_cases.py)<br>[tests/test_admin_jobs.py](../../../../sources/koi2026__opentax/tests/test_admin_jobs.py)<br>[tests/test_auto_update_registry.py](../../../../sources/koi2026__opentax/tests/test_auto_update_registry.py)<br>[tests/test_chunking.py](../../../../sources/koi2026__opentax/tests/test_chunking.py) |
| CI workflows | 1 | [.github/workflows/ci.yml](../../../../sources/koi2026__opentax/.github/workflows/ci.yml) |
| Containers / deploy | 2 | [docker-compose.yml](../../../../sources/koi2026__opentax/docker-compose.yml)<br>[Dockerfile](../../../../sources/koi2026__opentax/Dockerfile) |
| Security / policy | 1 | [SECURITY.md](../../../../sources/koi2026__opentax/SECURITY.md) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/koi2026__opentax/AGENTS.md)<br>[CLAUDE.md](../../../../sources/koi2026__opentax/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/test_mcp_refactor_boundaries.py`, `src/retrieval/mcp_retriever.py`, `src/mcp/__init__.py`.
2. Trace execution through entrypoints: `src/mcp/server.py`, `src/api/main.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `src/mcp/tools/__init__.py`, `src/mcp/tools/retrieval.py`.
4. Inspect retrieval/memory/indexing through: `tests/rag_golden_cases.py`, `tests/test_rag.py`, `src/retrieval/__init__.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/golden_case_legal_deps.py`, `tests/rag_golden_cases.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 2026 KOI Hackathon Team Raw Agent Korean Capital Gains Tax Agent. 핵심 구조 신호는 Python, package.json, requirements.txt, Dockerfile, docker-compose.yml, README.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
