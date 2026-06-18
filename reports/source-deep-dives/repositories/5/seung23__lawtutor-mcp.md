# seung23/lawtutor-mcp Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Korean Administrative Law & Constitutional Law RAG MCP Server for 7급 공무원시험

## 요약

- 조사 단위: `sources/seung23__lawtutor-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 97 files, 26 directories, depth score 115, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/test_retrieval/__init__.py, tests/test_retrieval/test_formatter.py, src/lawtutor/vector_store/__init__.py이고, 의존성 단서는 mcp, fastapi, pydantic, qdrant, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | seung23/lawtutor-mcp |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/seung23__lawtutor-mcp](../../../../sources/seung23__lawtutor-mcp) |
| Existing report | [reports/korea-trending/repositories/seung23__lawtutor-mcp.md](../../../korea-trending/repositories/seung23__lawtutor-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 97 / 26 |
| Max observed depth | 5 |
| Top directories | .claude, data, docs, logs, scripts, src, tests |
| Top extensions | .py: 65, .json: 8, .md: 8, (none): 8, .jsonl: 3, .yml: 2, .example: 1, .lock: 1, .toml: 1 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 22 |
| src | source boundary | 20 |
| docs | documentation surface | 10 |
| data | top-level component | 1 |
| logs | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | qdrant |
| modelRuntime | none |
| webRuntime | fastapi |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [tests/test_retrieval/__init__.py](../../../../sources/seung23__lawtutor-mcp/tests/test_retrieval/__init__.py) | retrieval signal |
| retrieval | [tests/test_retrieval/test_formatter.py](../../../../sources/seung23__lawtutor-mcp/tests/test_retrieval/test_formatter.py) | retrieval signal |
| retrieval | [src/lawtutor/vector_store/__init__.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/vector_store/__init__.py) | retrieval signal |
| retrieval | [src/lawtutor/vector_store/client.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/vector_store/client.py) | retrieval signal |
| entrypoints | [src/lawtutor/mcp_server/server.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/mcp_server/server.py) | entrypoints signal |
| docs | [README.md](../../../../sources/seung23__lawtutor-mcp/README.md) | docs signal |
| docs | [docs/ARCHITECTURE.md](../../../../sources/seung23__lawtutor-mcp/docs/ARCHITECTURE.md) | docs signal |
| docs | [docs/DEPLOYMENT.md](../../../../sources/seung23__lawtutor-mcp/docs/DEPLOYMENT.md) | docs signal |
| docs | [docs/EVALUATION.md](../../../../sources/seung23__lawtutor-mcp/docs/EVALUATION.md) | docs signal |
| eval | [tests/__init__.py](../../../../sources/seung23__lawtutor-mcp/tests/__init__.py) | eval signal |
| eval | [tests/conftest.py](../../../../sources/seung23__lawtutor-mcp/tests/conftest.py) | eval signal |
| config | [pyproject.toml](../../../../sources/seung23__lawtutor-mcp/pyproject.toml) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/lawtutor/mcp_server/server.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/mcp_server/server.py) |
| agentRuntime | 1 | [src/lawtutor/mcp_server/tools/__init__.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/mcp_server/tools/__init__.py) |
| mcp | 7 | [tests/test_mcp_server/__init__.py](../../../../sources/seung23__lawtutor-mcp/tests/test_mcp_server/__init__.py)<br>[tests/test_mcp_server/test_auth.py](../../../../sources/seung23__lawtutor-mcp/tests/test_mcp_server/test_auth.py)<br>[src/lawtutor/mcp_server/__init__.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/mcp_server/__init__.py)<br>[src/lawtutor/mcp_server/auth.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/mcp_server/auth.py)<br>[src/lawtutor/mcp_server/http_app.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/mcp_server/http_app.py)<br>[src/lawtutor/mcp_server/server.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/mcp_server/server.py)<br>[src/lawtutor/mcp_server/tools/__init__.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/mcp_server/tools/__init__.py) |
| retrieval | 11 | [tests/test_retrieval/__init__.py](../../../../sources/seung23__lawtutor-mcp/tests/test_retrieval/__init__.py)<br>[tests/test_retrieval/test_formatter.py](../../../../sources/seung23__lawtutor-mcp/tests/test_retrieval/test_formatter.py)<br>[src/lawtutor/vector_store/__init__.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/vector_store/__init__.py)<br>[src/lawtutor/vector_store/client.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/vector_store/client.py)<br>[src/lawtutor/vector_store/schemas.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/vector_store/schemas.py)<br>[src/lawtutor/retrieval/__init__.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/retrieval/__init__.py)<br>[src/lawtutor/retrieval/api_fallback.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/retrieval/api_fallback.py)<br>[src/lawtutor/retrieval/formatter.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/retrieval/formatter.py) |
| spec | 2 | [docs/ARCHITECTURE.md](../../../../sources/seung23__lawtutor-mcp/docs/ARCHITECTURE.md)<br>[docs/PRD.md](../../../../sources/seung23__lawtutor-mcp/docs/PRD.md) |
| eval | 30 | [tests/__init__.py](../../../../sources/seung23__lawtutor-mcp/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/seung23__lawtutor-mcp/tests/conftest.py)<br>[tests/test_retrieval/__init__.py](../../../../sources/seung23__lawtutor-mcp/tests/test_retrieval/__init__.py)<br>[tests/test_retrieval/test_formatter.py](../../../../sources/seung23__lawtutor-mcp/tests/test_retrieval/test_formatter.py)<br>[tests/test_parsers/__init__.py](../../../../sources/seung23__lawtutor-mcp/tests/test_parsers/__init__.py)<br>[tests/test_parsers/test_law_parser.py](../../../../sources/seung23__lawtutor-mcp/tests/test_parsers/test_law_parser.py)<br>[tests/test_mcp_server/__init__.py](../../../../sources/seung23__lawtutor-mcp/tests/test_mcp_server/__init__.py)<br>[tests/test_mcp_server/test_auth.py](../../../../sources/seung23__lawtutor-mcp/tests/test_mcp_server/test_auth.py) |
| security | 2 | [tests/test_mcp_server/test_auth.py](../../../../sources/seung23__lawtutor-mcp/tests/test_mcp_server/test_auth.py)<br>[src/lawtutor/mcp_server/auth.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/mcp_server/auth.py) |
| ci | 0 | not obvious |
| container | 3 | [docker-compose.override.yml](../../../../sources/seung23__lawtutor-mcp/docker-compose.override.yml)<br>[docker-compose.yml](../../../../sources/seung23__lawtutor-mcp/docker-compose.yml)<br>[Dockerfile](../../../../sources/seung23__lawtutor-mcp/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/seung23__lawtutor-mcp/CLAUDE.md) |
| docs | 7 | [README.md](../../../../sources/seung23__lawtutor-mcp/README.md)<br>[docs/ARCHITECTURE.md](../../../../sources/seung23__lawtutor-mcp/docs/ARCHITECTURE.md)<br>[docs/DEPLOYMENT.md](../../../../sources/seung23__lawtutor-mcp/docs/DEPLOYMENT.md)<br>[docs/EVALUATION.md](../../../../sources/seung23__lawtutor-mcp/docs/EVALUATION.md)<br>[docs/MILESTONES.md](../../../../sources/seung23__lawtutor-mcp/docs/MILESTONES.md)<br>[docs/PRD.md](../../../../sources/seung23__lawtutor-mcp/docs/PRD.md)<br>[docs/PROMPTING.md](../../../../sources/seung23__lawtutor-mcp/docs/PROMPTING.md) |
| config | 2 | [pyproject.toml](../../../../sources/seung23__lawtutor-mcp/pyproject.toml)<br>[uv.lock](../../../../sources/seung23__lawtutor-mcp/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 30 | [tests/__init__.py](../../../../sources/seung23__lawtutor-mcp/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/seung23__lawtutor-mcp/tests/conftest.py)<br>[tests/test_retrieval/__init__.py](../../../../sources/seung23__lawtutor-mcp/tests/test_retrieval/__init__.py)<br>[tests/test_retrieval/test_formatter.py](../../../../sources/seung23__lawtutor-mcp/tests/test_retrieval/test_formatter.py)<br>[tests/test_parsers/__init__.py](../../../../sources/seung23__lawtutor-mcp/tests/test_parsers/__init__.py)<br>[tests/test_parsers/test_law_parser.py](../../../../sources/seung23__lawtutor-mcp/tests/test_parsers/test_law_parser.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 3 | [docker-compose.override.yml](../../../../sources/seung23__lawtutor-mcp/docker-compose.override.yml)<br>[docker-compose.yml](../../../../sources/seung23__lawtutor-mcp/docker-compose.yml)<br>[Dockerfile](../../../../sources/seung23__lawtutor-mcp/Dockerfile) |
| Security / policy | 2 | [tests/test_mcp_server/test_auth.py](../../../../sources/seung23__lawtutor-mcp/tests/test_mcp_server/test_auth.py)<br>[src/lawtutor/mcp_server/auth.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/mcp_server/auth.py) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/seung23__lawtutor-mcp/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/test_retrieval/__init__.py`, `tests/test_retrieval/test_formatter.py`, `src/lawtutor/vector_store/__init__.py`.
2. Trace execution through entrypoints: `src/lawtutor/mcp_server/server.py`.
3. Map agent/tool runtime through: `src/lawtutor/mcp_server/tools/__init__.py`.
4. Inspect retrieval/memory/indexing through: `tests/test_retrieval/__init__.py`, `tests/test_retrieval/test_formatter.py`, `src/lawtutor/vector_store/__init__.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/conftest.py`, `tests/test_retrieval/__init__.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Korean Administrative Law & Constitutional Law RAG MCP Server for 7급 공무원시험. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, README.md, CLAUDE.md이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
